---
title: "Virtual Keyboard"
description: "A flexible, native JavaScript virtual keyboard suitable for mobile touch interfaces, games, and secure PIN entry."
category: "Forms"
menu:
  main:
    parent: "components-simple"
---

The Aurora Virtual Keyboard component provides native DOM interactions, input-field binding, layout toggles (QWERTY, Digits, Punctuation), and state management (e.g. for quiz games marking letters correct/incorrect).

It also includes native `SpeechRecognition` API hooks to allow users to dictate phrases.

## Full Setup (Input Bound)

This configuration binds the keyboard to an input field and explicitly provides a custom "Guess" label for the Enter key, alongside the microphone trigger.

{{< demo >}}
<div style="max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem;">
    <!-- Bound Input -->
    <div>
        <label for="guessInput" class="label">Your Guess</label>
        <input type="text" id="guessInput" class="input" placeholder="Tap letters below or use mic..." readonly>
    </div>

    <!-- The Keyboard -->
    <div data-virtual-keyboard 
         data-target-input="#guessInput" 
         data-layout="full" 
         data-enter-label="Guess">
    </div>

    <!-- Demo Event Logs -->
    <div style="font-size: 0.8rem; height: 100px; overflow-y: auto; background: var(--ds-sys-color-surface-container-highest); padding: 0.5rem; border-radius: var(--ds-sys-radius-card);" id="vkLog">
        <em>Interaction logs will appear here...</em><br>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const kbContainer = document.querySelector('[data-virtual-keyboard][data-layout="full"]');
    const logArea = document.getElementById('vkLog');

    function log(msg) {
        logArea.innerHTML += `${msg}<br>`;
        logArea.scrollTop = logArea.scrollHeight;
    }

    kbContainer.addEventListener('keyboard:press', e => log(`Typed: <strong>${e.detail.key}</strong>`));
    kbContainer.addEventListener('keyboard:delete', () => log(`Deleted Character`));
    kbContainer.addEventListener('keyboard:enter', e => log(`Submitted: <strong style="color:var(--ds-sys-color-primary)">${e.detail.value}</strong>`));
    kbContainer.addEventListener('keyboard:voice', e => log(`Voice Dictation: <strong>${e.detail.filtered}</strong>`));
});
</script>
{{< /demo >}}

---

## State Management (Game Mode)

You can programmatically disable keys completely (neutral/dark) or highlight them (positive/green). This is perfect for word-games or specific validation.

{{< demo >}}
<div style="max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
    <!-- Letters Only Layout -->
    <div id="gameKeyboard"></div>

    <div style="display: flex; gap: 0.5rem; justify-content: center;">
        <button class="btn btn--outline" id="btnDisable">Disable 'Q'</button>
        <button class="btn btn--primary" id="btnPositive">Mark 'X' Valid</button>
        <button class="btn btn--ghost" id="btnReset">Reset States</button>
    </div>
</div>

<script type="module">
import { AuroraKeyboard } from '/aurora-docs/js/components/virtual-keyboard.js';

document.addEventListener("DOMContentLoaded", function() {
    // Instantiate Programmatically
    const gameKb = new AuroraKeyboard(document.getElementById('gameKeyboard'), {
        layout: 'letters',
        enterLabel: 'Submit',
        enableVoice: false
    });

    document.getElementById('btnDisable').addEventListener('click', () => {
        gameKb.setKeyState('Q', 'disabled');
    });

    document.getElementById('btnPositive').addEventListener('click', () => {
        gameKb.setKeyState('X', 'positive');
    });

    document.getElementById('btnReset').addEventListener('click', () => {
        ['Q', 'X'].forEach(key => gameKb.setKeyState(key, 'default'));
    });
});
</script>
{{< /demo >}}

---

## Digits (PIN Entry)

A compact numeric pad for quick PIN entry. Features the standard layout and backspace integration.

{{< demo >}}
<div style="max-width: 300px; margin: 0 auto;">
    <input type="password" id="pinInput" class="input" placeholder="* * * *" style="text-align: center; font-size: 2rem; letter-spacing: 0.5em; margin-bottom: 1rem;" readonly>
    <div data-virtual-keyboard 
         data-target-input="#pinInput" 
         data-layout="digits" 
         data-enter-label="Verify"
         data-voice="false">
    </div>
</div>
{{< /demo >}}
