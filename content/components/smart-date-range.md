---
title: "Smart Date Range"
description: "A dependency-free natural language parser mapping human input directly into strict timestamp constraints."
category: "Components"
menu:
  main:
    parent: "components-simple"
---

The `Smart Date Range` input provides incredible velocity for power-users by interpreting natural language strings directly into explicit machine-readable timestamp limits. 

It evaluates everything from `"last 2 hours"` to `"since monday 8am"` to `"next fortnight"`, automatically doing the math and propagating the resulting standard ISO variables out to surrounding hidden `.date-time` inputs. 

## Dependency Free

This component requires *no external libraries*. It evaluates strings using complex natively bounded Regular Expressions built directly into `smart-date-range.js`.

> [!TIP]
> You can pass `data-start-rule="past"` or `data-end-rule="future"` constraints to the input element. If the user's natural language evaluates to boundaries outside of your defined rules, the input box securely flags an error instead of polluting your form states natively!

## Architectural Injection

Most modern systems rely purely on explicit Date/Time picker modals, which are incredibly slow to use for tasks investigating a specific window of analytics (e.g. typing *`last 3 hours`* is infinitely faster than clicking through a calendar menu and scrolling mechanical clock wheels down). 

The `Smart Date Range` elegantly solves this. When building forms, simply create hidden readonly `<input>` tags wrapping your actual data submission, and pass their internal `id` names directly into the `smart-date-range` configuration using DOM Data-attributes.

---

## 1. Standard Unbounded 

A generic, unbounded range. This implementation parses the incoming string and populates `.startAbs` and `.endAbs` with full native ISO combinations.

{{< demo >}}
<div class="l-stack gap-2">
    <!-- The Natural Language Input -->
    <div class="smart-input-container">
        <input type="text" 
               class="smart-date-range" 
               placeholder="e.g., 'last 2 days' or 'since monday'"
               data-hint-id="dt-hint-1"
               data-start-abs="demo1-start"
               data-end-abs="demo1-end">
               
        <button class="info-icon" onclick="window.showRangeHelp()" title="Help">
            <span class="material-symbols-outlined">help</span>
        </button>
    </div>
    
    <!-- The Live Validation Hint -->
    <div id="dt-hint-1" class="smart-date-range-hint">Type a phrase to calculate timestamps!</div>
    
    <div style="margin-top: 1rem; padding: 1rem; border: 1px dashed var(--ds-sys-color-border);">
        <strong>Resulting Hidden Submissions:</strong>
        <div class="l-cluster gap-4 mt-2">
            <div>
                <label>Start (ISO)</label>
                <input class="ds-input" type="text" id="demo1-start" readonly>
            </div>
            <div>
                <label>End (ISO)</label>
                <input class="ds-input" type="text" id="demo1-end" readonly>
            </div>
        </div>
    </div>
</div>
{{< /demo >}}

---

## 2. Past-Only Constraints (Analytics)

A frequent implementation for monitoring graphs: Users shouldn't be allowed to query "Tomorrow" because the data doesn't exist yet. Enforce this trivially by adding `data-start-rule="past"` onto the trigger.

*(Try typing "next weekend" below to witness the parser reject the calculation).*

{{< demo >}}
<div class="l-stack gap-2">
    <div class="smart-input-container">
        <input type="text" 
               class="smart-date-range" 
               placeholder="e.g., 'last 5 hours' or 'yesterday'"
               data-hint-id="dt-hint-2"
               data-start-rule="past"
               data-end-rule="past"
               data-start-abs="demo2-start"
               data-end-abs="demo2-end">
    </div>
    <div id="dt-hint-2" class="smart-date-range-hint"></div>
    
    <div style="display:none;">
        <input type="text" id="demo2-start">
        <input type="text" id="demo2-end">
    </div>
</div>
{{< /demo >}}

---

## 3. Future-Only Constraints (Bookings)

Conversely, if you are designing a booking interface, you cannot allow customers to book flights bounding backward. Apply `data-start-rule="future"` to forcefully reject historic calculations!

*(Try typing "last week" below to trip the validation).*

{{< demo >}}
<div class="l-stack gap-2">
    <div class="smart-input-container">
        <input type="text" 
               class="smart-date-range" 
               placeholder="e.g., 'next fortnight' or 'tomorrow'"
               data-hint-id="dt-hint-3"
               data-start-rule="future"
               data-start-abs="demo3-start"
               data-end-abs="demo3-end">
    </div>
    <div id="dt-hint-3" class="smart-date-range-hint"></div>
    
    <div style="display:none;">
        <input type="text" id="demo3-start">
        <input type="text" id="demo3-end">
    </div>
</div>
{{< /demo >}}

---

## 4. Exploded Date/Time Formatting

Legacy APIs frequently demand that dates and times arrive in entirely separate keys. 

Instead of routing `startAbs`, you can explicitly point the Smart Date Range to populate physical `.date` and `.time` inputs disjointly securely routing `YYYY-MM-DD` and `HH:MM:SS` separately to bypass the unified ISO logic!

{{< demo >}}
<div class="l-stack gap-2">
    <div class="smart-input-container">
        <input type="text" 
               class="smart-date-range" 
               placeholder="e.g., 'since tuesday 3pm'"
               data-hint-id="dt-hint-4"
               data-start-date="demo4-s-date"
               data-start-time="demo4-s-time"
               data-end-date="demo4-e-date"
               data-end-time="demo4-e-time">
    </div>
    
    <div id="dt-hint-4" class="smart-date-range-hint"></div>
    
    <div class="mt-4" style="padding: 1rem; border: 1px dashed var(--ds-sys-color-border);">
        <strong>Resulting Exploded Submissions:</strong>
        <div class="l-cluster gap-4 mt-2">
            <div>
                <label>Start Date</label>
                <input class="ds-input" type="text" id="demo4-s-date" style="max-width: 150px" readonly>
            </div>
            <div>
                <label>Start Time</label>
                <input class="ds-input" type="text" id="demo4-s-time" style="max-width: 150px" readonly>
            </div>
             <div>
                <label>End Date</label>
                <input class="ds-input" type="text" id="demo4-e-date" style="max-width: 150px" readonly>
            </div>
            <div>
                <label>End Time</label>
                <input class="ds-input" type="text" id="demo4-e-time" style="max-width: 150px" readonly>
            </div>
        </div>
    </div>
</div>
{{< /demo >}}

---

## 5. Manual Explicit Mode

If you don't want the user to have natural-language access, simply pass `data-entry-mode="manual"` on the wrapping `.smart-input-container`. 

The Javascript will completely hide the smart string box and build literal HTML5 `<input type="date">` boxes, meaning you get a unified parsing backend for your developers without compromising the UI requirement for the end-user.

{{< demo >}}
<div class="l-stack gap-2">
    <!-- Note the data-entry-mode explicit flag here! -->
    <div class="smart-input-container" data-entry-mode="manual">
        <input type="text" 
               class="smart-date-range" 
               data-hint-id="dt-hint-5"
               data-start-abs="demo5-start"
               data-end-abs="demo5-end">
    </div>
    
    <div id="dt-hint-5" class="smart-date-range-hint"></div>
    
    <div style="display:none;">
        <input type="text" id="demo5-start">
        <input type="text" id="demo5-end">
    </div>
</div>
{{< /demo >}}

---

## 6. Hybrid Mode (Bi-Directional Sync)

For power-users, you can supply `data-entry-mode="both"`. 

In this configuration, Aurora generates both interfaces. The magic occurs under the hood:
1. Try typing "**yesterday**" into the natural language box below. The calendar inputs immediately recalculate and reflect the exact dates.
2. Now, **click the tiny calendar icon** on the Start date and pick something explicitly like June 12th. The native calendar input instantly fires an override recalculation back into the parser, feeding the ultimate form variables identically!

{{< demo >}}
<div class="l-stack gap-2">
    <!-- Notice data-entry-mode="both" -->
    <div class="smart-input-container" data-entry-mode="both">
        <input type="text" 
               class="smart-date-range" 
               placeholder="e.g., 'yesterday' or manually click the calendars!"
               data-hint-id="dt-hint-6"
               data-start-abs="demo6-start"
               data-end-abs="demo6-end">
    </div>
    
    <div id="dt-hint-6" class="smart-date-range-hint"></div>
    
    <div class="mt-4" style="padding: 1rem; border: 1px dashed var(--ds-sys-color-primary);">
        <strong>Final Synchronized Output:</strong>
        <div class="l-cluster gap-4 mt-2">
            <div>
                <label>Active Start Bound</label>
                <input class="ds-input" type="text" id="demo6-start" readonly>
            </div>
            <div>
                <label>Active End Bound</label>
                <input class="ds-input" type="text" id="demo6-end" readonly>
            </div>
        </div>
    </div>
</div>
{{< /demo >}}


<!-- Global Help Modal defined structurally outside the demos -->
<div id="helpModal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Supported Syntax</h2>
            <button class="close-btn" onclick="window.closeHelp()">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>
        <ul id="exampleList"></ul>
    </div>
</div>
