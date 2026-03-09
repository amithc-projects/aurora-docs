/**
 * SmartRangeParser.js
 * A dependency-free natural language date range parser.
 */
class SmartRangeParser {
    constructor(config = {}) {
        this.config = {
            weekStart: config.weekStart || 1, // 0 = Sun, 1 = Mon
            dateFormat: config.dateFormat || 'DD/MM', // Toggles DD/MM vs MM/DD
            allowPast: config.allowPast ?? true,
            allowFuture: config.allowFuture ?? true,
            ...config
        };
        this.units = {
            second: 1000, minute: 60000, hour: 3600000, day: 86400000, week: 604800000,
            fortnight: 1209600000,
            month: 2592000000, year: 31536000000
        };
    }

    formatDuration(ms) {
        const s = Math.floor(ms / 1000);
        const m = Math.floor(s / 60);
        const h = Math.floor(m / 60);
        const d = Math.floor(h / 24);
        if (ms < 3600000) return `${m}m ${s % 60}s`;
        if (ms < 86400000) return `${h}h ${m % 60}m`;
        return `${d}d ${h % 24}h`;
    }


    handleSpecialUnits(str) {
        let date = new Date(this.referenceDate);
        const match = str.match(/(last|next|this)?\s*(\d+)?\s*(weekend|fortnight)s?/);
        if (!match) return null;

        const direction = match[1] === 'next' ? 1 : (match[1] === 'last' ? -1 : 0);
        const multiplier = parseInt(match[2] || 1);
        const type = match[3];

        if (type === 'weekend') {
            // Find upcoming/previous Saturday
            let start = this.getClosestDay('sat', direction === 0 ? -1 : direction);
            // Adjust by multiplier if user said "2 weekends ago"
            if (multiplier > 1) start.setDate(start.getDate() + (7 * (multiplier - 1) * (direction || -1)));

            let end = new Date(start);
            end.setDate(start.getDate() + 1); // Sunday
            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 999);
            return { start, end };
        }

        if (type === 'fortnight') {
            let start = new Date(this.referenceDate);
            if (direction !== 0) start.setDate(start.getDate() + (14 * direction * multiplier));
            let end = new Date(start);
            end.setDate(start.getDate() + 14);
            return { start, end };
        }
    }

    static init(config = {}) {
        window.smartParser = new SmartRangeParser(config);
        const inputs = document.querySelectorAll('.smart-date-range');

        inputs.forEach(input => {
            input.addEventListener('input', (e) => {
                const val = e.target.value;
                const hintBox = document.getElementById(input.dataset.hintId);
                if (!val) return;

                const res = window.smartParser.parse(val);

                if (res && res.start && !isNaN(res.start.getTime())) {
                    const sRule = input.dataset.startRule; // "past"
                    const eRule = input.dataset.endRule;   // "past"

                    if (window.smartParser.validateRule(res.start, sRule) &&
                        window.smartParser.validateRule(res.end, eRule)) {

                        updateLinkedFields(input.dataset, res);
                        if (hintBox) {
                            const dur = formatDuration(res.end - res.start);
                            hintBox.classList.remove('invalid');
                            hintBox.innerHTML = `✅ <strong>Range:</strong> ${res.start.toLocaleString()} — ${res.end.toLocaleString()} (Duration: ${dur})`;
                        }
                    } else if (hintBox) {
                        hintBox.classList.add('invalid');
                        hintBox.innerHTML = `⚠️ <strong>Validation:</strong> Range must be in the ${sRule}.`;
                    }
                } else if (hintBox) {
                    hintBox.classList.add('invalid');
                    hintBox.innerHTML = `❌ Unrecognized range.`;
                }
            });
        });
    }

    /**
     * @param {string} input - Natural language string
     * @param {Date} refDate - The anchor date for relative calculations
     */
    parse(input, refDate = new Date()) {
        if (!input) return null;
        this.referenceDate = new Date(refDate);

        // 1. Normalization & Noise Word Removal
        let str = input.toLowerCase().trim()
            .replace(/\bprevious\b/g, 'last')
            .replace(/\bcoming\b/g, 'next')
            .replace(/'s\s+time\b/g, ' time') // handle "week's time"
            .replace(/\bafter\b/g, 'since')    // handle "after 8pm" -> "since 8pm"
            .replace(/\bmidday\b/g, '12:00pm')
            .replace(/\bmidnight\b/g, '12:00am')
            .replace(/\bat\b/g, ' ')
            .replace(/\bbetween\b/g, '')
            .replace(/\bfrom\b/g, '')
            .replace(/\band\b/g, ' to ');


        // 2. Handle "this [unit]"
        if (str.includes('fortnight') || str.includes('weekend')) {
            return this.handleSpecialUnits(str);
        }

        const thisPattern = /^this\s+(second|minute|hour|day|week|month|year)$/;
        const thisMatch = str.match(thisPattern);
        if (thisMatch) {
            let start = new Date(this.referenceDate);
            this.snap(start, thisMatch[1], 'start');
            return { start, end: new Date(this.referenceDate) };
        }

        // 3. Unidirectional Anchors
        if (str.startsWith('since ')) {
            const start = this.parsePoint(str.replace('since ', ''), 'start');
            return { start, end: new Date(this.referenceDate) };
        }
        if (str.startsWith('until ')) {
            const end = this.parsePoint(str.replace('until ', ''), 'end');
            return { start: new Date(this.referenceDate), end };
        }

        // 4. Calendar vs Rolling Units
        const unitPattern = /^(the\s+)?(last|next)\s+(second|minute|hour|day|week|month|year)$/;
        const unitMatch = str.match(unitPattern);
        if (unitMatch) {
            const hasThe = !!unitMatch[1];
            const direction = unitMatch[2] === 'next' ? 1 : -1;
            const unit = unitMatch[3];
            return hasThe ? this.getRollingPeriod(unit, direction) : this.getCalendarPeriod(unit, direction);
        }

        return this.handleComplexRanges(str);
    }


    hasDateInfo(text) {
        return /(mon|tue|wed|thu|fri|sat|sun|yesterday|tomorrow|today|\d{1,2}[\/\-]\d{1,2}|st|nd|rd|th)/.test(text);
    }

    validateRule(date, rule) {
        if (!rule || !date) return true;
        const now = new Date();
        if (rule === 'past') return date <= now;
        if (rule === 'future') return date >= now;
        return true;
    }

    handleComplexRanges(str) {
        const rangeSplit = str.split(/\s+(?:to|until|till|through|-)\s+/);
        let start, end;

        if (rangeSplit.length === 2) {
            const startPt = this.parsePoint(rangeSplit[0], 'start');
            const endPt = this.parsePoint(rangeSplit[1], 'end');

            // Validation: If either side of the range is unrecognised, fail the whole range
            if (!startPt || !endPt) return null;

            // Year Inheritance for Full ISO Dates
            if (rangeSplit[0].match(/\d{4}/) && !rangeSplit[1].match(/\d{4}/)) {
                endPt.setFullYear(startPt.getFullYear());
            }

            // Context Inheritance
            if (this.hasDateInfo(rangeSplit[1]) && !this.hasDateInfo(rangeSplit[0])) {
                startPt.setFullYear(endPt.getFullYear(), endPt.getMonth(), endPt.getDate());
            }
            if (this.hasDateInfo(rangeSplit[0]) && !this.hasDateInfo(rangeSplit[1])) {
                endPt.setFullYear(startPt.getFullYear(), startPt.getMonth(), startPt.getDate());
            }

            // Overnight / Ordinal wrap logic
            if (endPt < startPt) {
                const sMatch = rangeSplit[0].match(/(\d+)(?:st|nd|rd|th)/);
                const eMatch = rangeSplit[1].match(/(\d+)(?:st|nd|rd|th)/);
                if (sMatch && eMatch && parseInt(eMatch[1]) < parseInt(sMatch[1])) {
                    endPt.setMonth(startPt.getMonth() + 1);
                } else {
                    endPt.setDate(endPt.getDate() + 1);
                }
            }
            start = startPt; end = endPt;
        } else {
            // Rolling relative: "last 2 hours"
            const relMatch = str.match(/(last|next)\s+(\d+)?\s*(second|minute|hour|day|week|month|year)s?/);
            if (relMatch) {
                const amt = parseInt(relMatch[2] || 1);
                const dir = relMatch[1] === 'next' ? 1 : -1;
                return this.getRollingPeriod(relMatch[3], amt * dir);
            }

            start = this.parsePoint(str, 'start');
            if (!start) return null; // Fail if single point is junk

            end = new Date(start);
            if (!str.match(/(\d{1,2}):(\d{2})/)) {
                end.setHours(23, 59, 59, 999);
            }
        }
        return (start && end && !isNaN(start.getTime())) ? { start, end } : null;
    }

    parsePoint(text, type) {
        let date = new Date(this.referenceDate);
        let matched = false;
        let timeSpecified = false;

        // 1. Precise Dates (ISO and Numeric)
        const isoMatch = text.match(/(\d{4})[\-\/](\d{1,2})[\-\/](\d{1,2})/);
        const standardMatch = text.match(/(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{2,4}))?/);

        if (isoMatch) {
            date.setFullYear(parseInt(isoMatch[1]), parseInt(isoMatch[2]) - 1, parseInt(isoMatch[3]));
            matched = true;
        } else if (standardMatch) {
            let p1 = parseInt(standardMatch[1]), p2 = parseInt(standardMatch[2]), p3 = standardMatch[3] ? parseInt(standardMatch[3]) : date.getFullYear();
            if (p3 < 100) p3 += 2000;
            if (this.config.dateFormat === 'DD/MM' || p1 > 12) {
                date.setFullYear(p3, p2 - 1, p1);
            } else {
                date.setFullYear(p3, p1 - 1, p2);
            }
            matched = true;
        }

        // 2. Month Names (e.g., "June 5th" or "5th June")
        const monthRegex = /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*/;
        const monthMatch = text.match(monthRegex);
        const monthDayMatch = text.match(/(\d{1,2})(?:st|nd|rd|th)?/);

        if (monthMatch && monthDayMatch && !isoMatch && !standardMatch) {
            const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            const monthIdx = months.indexOf(monthMatch[1].substring(0, 3));
            date.setMonth(monthIdx, parseInt(monthDayMatch[1]));
            // If a 4-digit year is present in the string, use it
            const yearMatch = text.match(/\b(\d{4})\b/);
            if (yearMatch) date.setFullYear(parseInt(yearMatch[1]));
            matched = true;
        }

        // 3. Multi-Unit "Ago" or "Time" (Future) Logic
        const agoMatch = text.match(/(\d+)\s+(second|minute|hour|day|week|month|year)s?\s+ago/);
        const futureMatch = text.match(/(\d+)\s+(second|minute|hour|day|week|month|year)s?\s+time/);

        if (agoMatch) {
            this.addOffset(date, agoMatch[2], -parseInt(agoMatch[1]));
            matched = true;
            if (['day', 'week', 'month', 'year'].includes(agoMatch[2])) {
                type === 'start' ? date.setHours(0, 0, 0, 0) : date.setHours(23, 59, 59, 999);
                return date;
            }
        } else if (futureMatch) {
            this.addOffset(date, futureMatch[2], parseInt(futureMatch[1]));
            matched = true;
            if (['day', 'week', 'month', 'year'].includes(futureMatch[2])) {
                type === 'start' ? date.setHours(0, 0, 0, 0) : date.setHours(23, 59, 59, 999);
                return date;
            }
        }

        // 4. Relative Keywords
        if (text.includes('yesterday')) { date.setDate(date.getDate() - 1); matched = true; }
        if (text.includes('tomorrow')) { date.setDate(date.getDate() + 1); matched = true; }
        if (text.includes('today') || text.includes('now')) { matched = true; }

        // Ordinal day (e.g. "the 5th")
        const ordinalMatch = text.match(/\b(\d+)(?:st|nd|rd|th)\b/);
        if (ordinalMatch && !monthMatch) {
            date.setDate(parseInt(ordinalMatch[1]));
            matched = true;
        }

        // Weekday (e.g. "tue")
        const weekDayMatch = text.match(/(mon|tue|wed|thu|fri|sat|sun)/);
        if (weekDayMatch) {
            const dir = text.includes('last') ? -1 : (text.includes('next') ? 1 : 0);
            date = this.getClosestDay(weekDayMatch[0], dir);
            matched = true;
        }

        // 5. Time Parsing
        const timeMatch = text.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?(\.\d{3})?\s*(am|pm)?/);
        const simpleTime = text.match(/(\d{1,2})\s*(am|pm)/);

        if (timeMatch) {
            timeSpecified = true; matched = true;
            let h = parseInt(timeMatch[1]);
            if (timeMatch[5] === 'pm' && h < 12) h += 12;
            if (timeMatch[5] === 'am' && h === 12) h = 0;
            date.setHours(h, parseInt(timeMatch[2]), parseInt(timeMatch[3] || 0), parseInt((timeMatch[4] || ".000").substring(1)));
        } else if (simpleTime) {
            timeSpecified = true; matched = true;
            let h = parseInt(simpleTime[1]);
            if (simpleTime[2] === 'pm' && h < 12) h += 12;
            if (simpleTime[2] === 'am' && h === 12) h = 0;
            date.setHours(h, 0, 0, 0);
        }

        // Default to Start/End of day for calendar anchors if no specific time was typed
        if (!timeSpecified && (ordinalMatch || weekDayMatch || standardMatch || isoMatch || monthMatch || text.includes('yesterday') || text.includes('tomorrow'))) {
            type === 'start' ? date.setHours(0, 0, 0, 0) : date.setHours(23, 59, 59, 999);
        }

        return matched ? date : null;
    }


    getClosestDay(dayStr, direction) {
        const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        const target = days.indexOf(dayStr.substring(0, 3));
        const d = new Date(this.referenceDate);
        let diff = target - d.getDay();
        if (direction === -1 && diff >= 0) diff -= 7;
        if (direction === 1 && diff <= 0) diff += 7;
        d.setDate(d.getDate() + diff);
        return d;
    }

    getRollingPeriod(unit, amt) {
        const start = new Date(this.referenceDate);
        const end = new Date(this.referenceDate);
        this.addOffset(amt > 0 ? end : start, unit, Math.abs(amt) * (amt > 0 ? 1 : -1));
        return { start, end };
    }

    getCalendarPeriod(unit, dir) {
        let date = new Date(this.referenceDate);
        this.addOffset(date, unit, dir);
        this.snap(date, unit, 'start');
        let start = new Date(date);
        this.snap(date, unit, 'end');
        return { start, end: date };
    }

    addOffset(d, u, a) {
        if (u === 'second') d.setSeconds(d.getSeconds() + a);
        if (u === 'minute') d.setMinutes(d.getMinutes() + a);
        if (u === 'hour') d.setHours(d.getHours() + a);
        if (u === 'day') d.setDate(d.getDate() + a);
        if (u === 'week') d.setDate(d.getDate() + (a * 7));
        if (u === 'month') d.setMonth(d.getMonth() + a);
        if (u === 'year') d.setFullYear(d.getFullYear() + a);
    }

    snap(d, u, type) {
        const isS = type === 'start';
        if (['year', 'month', 'week', 'day', 'hour', 'minute'].includes(u)) d.setSeconds(isS ? 0 : 59, isS ? 0 : 999);
        if (['year', 'month', 'week', 'day', 'hour'].includes(u)) d.setMinutes(isS ? 0 : 59);
        if (['year', 'month', 'week', 'day'].includes(u)) d.setHours(isS ? 0 : 23);
        if (u === 'week') {
            const diff = (d.getDay() < this.config.weekStart ? 7 : 0) + d.getDay() - this.config.weekStart;
            d.setDate(d.getDate() - diff + (isS ? 0 : 6));
        }
        if (u === 'month') isS ? d.setDate(1) : d.setMonth(d.getMonth() + 1, 0);
        if (u === 'year') isS ? d.setMonth(0, 1) : d.setMonth(11, 31);
    }
}


// Initialize the Parser
const smartParser = new SmartRangeParser({ weekStart: 1 });

function formatDuration(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    const d = Math.floor(h / 24);
    if (ms < 3600000) return `${m}m ${s % 60}s`;
    if (ms < 86400000) return `${h}h ${m % 60}m`;
    return `${d}d ${h % 24}h`;
}

window.initSmartRanges = function () {
    const inputs = document.querySelectorAll('.smart-date-range');

    inputs.forEach(input => {
        const wrapper = input.closest('.smart-input-container');
        if (!wrapper) return;

        const mode = wrapper.getAttribute('data-entry-mode') || 'smart';

        // 1. Generate Manual Controls if requested
        let manualControls = null;
        if (mode === 'manual' || mode === 'both') {
            manualControls = generateManualControls(wrapper, input.dataset);
            wrapper.appendChild(manualControls);

            // If strictly manual, hide the smart text parser entirely
            if (mode === 'manual') {
                input.style.display = 'none';
                const hint = document.getElementById(input.dataset.hintId);
                if (hint) hint.style.display = 'none';
                const helpBtn = wrapper.querySelector('.info-icon');
                if (helpBtn) helpBtn.style.display = 'none';
            }
        }

        // 2. The core natural language listener (Flows Smart -> Native/Hidden)
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            const hintBox = document.getElementById(input.dataset.hintId);
            if (!val) return;

            const res = smartParser.parse(val);

            // Check for valid parse first
            if (res && res.start && !isNaN(res.start.getTime())) {
                const startRule = input.dataset.startRule;
                const endRule = input.dataset.endRule;

                const isStartValid = smartParser.validateRule(res.start, startRule);
                const isEndValid = smartParser.validateRule(res.end, endRule);

                if (isStartValid && isEndValid) {
                    const duration = res.end - res.start;

                    // Route to hidden backend submissions
                    updateLinkedFields(input.dataset, res);

                    // If in hybrid mode, explicitly push these new calculated dates into the visual calendar widgets
                    if (mode === 'both' && manualControls) {
                        syncManualControls(manualControls, res);
                    }

                    if (hintBox) {
                        hintBox.classList.remove('invalid');
                        hintBox.innerHTML = `✅ <strong>Range:</strong> ${res.start.toLocaleString()} — ${res.end.toLocaleString()} : ( Duration: ${formatDuration(duration)})`;
                    }
                } else {
                    if (hintBox) {
                        hintBox.classList.add('invalid');
                        const errorMsg = !isStartValid ? `Start date must be in the ${startRule}` : `End date must be in the ${endRule}`;
                        hintBox.innerHTML = `⚠️ <strong>Validation Error:</strong> ${errorMsg}`;
                    }
                }
            } else {
                if (hintBox) {
                    hintBox.classList.add('invalid');
                    hintBox.innerHTML = `❌ Unrecognized range string.`;
                }
            }
        });
    });
};

/**
 * Dynamically builds the physical HTML5 calendar pickers, avoiding DOM bloat for the developer
 */
function generateManualControls(wrapper, datasets) {
    const container = document.createElement('div');
    container.className = 'smart-manual-controls';

    // Start Block
    const startWrap = document.createElement('div');
    startWrap.className = 'smart-control-group';
    const sDate = document.createElement('input'); sDate.type = 'date'; sDate.className = 'smart-manual-date';
    const sTime = document.createElement('input'); sTime.type = 'time'; sTime.className = 'smart-manual-time';
    startWrap.innerHTML = `<label>Start</label>`;
    startWrap.appendChild(sDate);
    startWrap.appendChild(sTime);

    // End Block
    const endWrap = document.createElement('div');
    endWrap.className = 'smart-control-group';
    const eDate = document.createElement('input'); eDate.type = 'date'; eDate.className = 'smart-manual-date';
    const eTime = document.createElement('input'); eTime.type = 'time'; eTime.className = 'smart-manual-time';
    endWrap.innerHTML = `<label>End</label>`;
    endWrap.appendChild(eDate);
    endWrap.appendChild(eTime);

    container.appendChild(startWrap);
    container.appendChild(endWrap);

    // Bind listeners to sync Backwards (Manual -> Smart/Hidden)
    const updateFromManual = () => {
        if (!sDate.value || !eDate.value) return;

        // Assemble native Date objects
        const start = new Date(`${sDate.value}T${sTime.value || '00:00'}:00`);
        const end = new Date(`${eDate.value}T${eTime.value || '23:59'}:59`);

        // Push to hidden inputs
        updateLinkedFields(datasets, { start, end });

        // If in Hybrid Mode, empty out the natural language text since they manually overode it
        // Or inject a synthesized string. Here we'll just clear it for clarity.
        const smartInput = wrapper.querySelector('.smart-date-range');
        if (smartInput && smartInput.style.display !== 'none') {
            smartInput.value = 'Custom Manual Selection';
            smartInput.dataset.overridden = 'true';

            const hintBox = document.getElementById(datasets.hintId);
            if (hintBox) {
                hintBox.classList.remove('invalid');
                hintBox.innerHTML = `⚙️ <strong>Manual Override:</strong> Calendar values are driving the query.`;
            }
        }
    };

    [sDate, sTime, eDate, eTime].forEach(el => el.addEventListener('change', updateFromManual));

    return container;
}

/**
 * Pushes Date calculations INTO the calendar widgets
 */
function syncManualControls(container, res) {
    const sDate = container.querySelectorAll('.smart-manual-date')[0];
    const sTime = container.querySelectorAll('.smart-manual-time')[0];
    const eDate = container.querySelectorAll('.smart-manual-date')[1];
    const eTime = container.querySelectorAll('.smart-manual-time')[1];

    sDate.value = res.start.toISOString().split('T')[0];
    sTime.value = res.start.toTimeString().slice(0, 5); // HH:MM

    eDate.value = res.end.toISOString().split('T')[0];
    eTime.value = res.end.toTimeString().slice(0, 5);
}

function updateLinkedFields(datasets, res) {

    const fmt = (d) => d.toISOString().slice(0, 19);
    const dateOnly = (d) => d.toISOString().split('T')[0];

    // Include seconds in the time-only format
    const timeOnly = (d) => d.toTimeString().slice(0, 8);

    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val;
    };



    // Option A: Combined DateTime Fields
    if (datasets.startAbs) setVal(datasets.startAbs, fmt(res.start));
    if (datasets.endAbs) setVal(datasets.endAbs, fmt(res.end));

    // Option B: Separated Date/Time Fields
    if (datasets.startDate) setVal(datasets.startDate, dateOnly(res.start));
    if (datasets.startTime) setVal(datasets.startTime, timeOnly(res.start));
    if (datasets.endDate) setVal(datasets.endDate, dateOnly(res.end));
    if (datasets.endTime) setVal(datasets.endTime, timeOnly(res.end));
}



window.showRangeHelp = () => {
    const modal = document.getElementById('helpModal');
    const list = document.getElementById('exampleList');

    // Example phrases from your test cases
    const examples = [
        "last 2 hours",
        "yesterday 5pm to now",
        "since monday 8am",
        "3 days ago",
        "last weekend",
        "next fortnight"
    ];

    if (list) list.innerHTML = examples.map(ex => `<li><code>${ex}</code></li>`).join('');
    if (modal) modal.classList.add('is-open'); // Allow Aurora CSS to animate this
};

window.closeHelp = () => {
    const modal = document.getElementById('helpModal');
    if (modal) modal.classList.remove('is-open');
};

// Also listen for clicks on the modal scrim to close it organically
document.addEventListener('click', (e) => {
    if (e.target.id === 'helpModal') {
        window.closeHelp();
    }
});

// Automatically initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', window.initSmartRanges);
