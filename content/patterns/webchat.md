---
title: "Webchat Pattern"
category: "Patterns"
description: "A combination of form inputs, chat messages, and a typing indicator."
menu:
  main:
    parent: "patterns"
---

This pattern demonstrates how to combine our form inputs with vertical message bubbles and an animated pure-CSS typing indicator to create a conversation interface.

{{< demo >}}
<style>
/* Scoped styles for the Webchat Demo */
.chat-container {
  display: flex;
  flex-direction: column;
  height: 500px;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid var(--ds-sys-color-border);
  border-radius: var(--ds-sys-radius-card);
  background: var(--ds-sys-color-surface);
  overflow: hidden;
}

.chat-header {
  padding: 1rem;
  border-bottom: 1px solid var(--ds-sys-color-border);
  background: var(--ds-sys-color-surface-variant);
  font-weight: 600;
  text-align: center;
}

.chat-messages {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
}

/* Base Message Bubbles */
.message {
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 1.25rem;
  line-height: 1.4;
  font-size: 0.95rem;
  position: relative;
}

/* User Message (Right aligned) */
.message-user {
  align-self: flex-end;
  background: var(--ds-sys-color-primary);
  color: #fff;
  border-bottom-right-radius: 0.25rem;
}

/* System/Other Message (Left aligned) */
.message-system {
  align-self: flex-start;
  background: var(--ds-sys-color-surface-variant);
  color: var(--ds-sys-color-on-surface);
  border-bottom-left-radius: 0.25rem;
}

/* --- Typing Indicator --- */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  width: fit-content;
}

.typing-dot {
  width: 6px;
  height: 6px;
  background: var(--ds-sys-color-on-surface-subtle);
  border-radius: 50%;
  animation: typingBounce 1.4s infinite ease-in-out both;
}

.typing-dot:nth-child(1) { animation-delay: -0.32s; }
.typing-dot:nth-child(2) { animation-delay: -0.16s; }
.typing-dot:nth-child(3) { animation-delay: 0s; }

@keyframes typingBounce {
  0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

/* Chat Input Area */
.chat-input-area {
  padding: 1rem;
  border-top: 1px solid var(--ds-sys-color-border);
  background: var(--ds-sys-color-surface);
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.chat-input-wrapper {
  flex: 1;
  position: relative;
}

.chat-input-wrapper textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--ds-sys-color-border);
  border-radius: 1.5rem;
  background: var(--ds-sys-color-surface);
  color: var(--ds-sys-color-on-surface);
  font-family: inherit;
  font-size: 0.95rem;
  resize: none;
  overflow: hidden;
  min-height: 48px;
  max-height: 120px;
  line-height: 1.4;
  outline: none;
  transition: border-color 0.2s;
}

.chat-input-wrapper textarea:focus {
  border-color: var(--ds-sys-color-primary);
}

.chat-action-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--ds-sys-color-on-surface-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.chat-action-btn:hover {
  background: var(--ds-sys-color-surface-variant);
  color: var(--ds-sys-color-on-surface);
}

.chat-action-btn.primary {
  background: var(--ds-sys-color-primary);
  color: #fff;
}

.chat-action-btn.primary:hover {
  filter: brightness(1.1);
}
</style>

<div class="chat-container">
  <div class="chat-header">
    Aurora Support
  </div>
  
  <div class="chat-messages" id="chatFeed">
    <div class="message message-system">
      Hi there! How can I help you today?
    </div>
    
    <div class="message message-user">
      I'm having trouble understanding how to use the drag & drop file upload.
    </div>
    
    <div class="message message-system">
      Sure! Simply drag a file from your desktop and drop it directly onto the upload zone. It will automatically populate the file input.
    </div>
    
    <!-- Typing Indicator acts as a message -->
    <div class="message message-system typing-indicator" id="demoTypingIndicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  </div>
  
  <div class="chat-input-area">
    <button class="chat-action-btn" title="Attach file">
      <span class="material-symbols-outlined">attach_file</span>
    </button>
    
    <div class="chat-input-wrapper">
      <textarea 
        rows="1" 
        placeholder="Type a message..." 
        oninput="this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';"
        id="demoChatInput"
      ></textarea>
    </div>
    
    <button class="chat-action-btn primary" title="Send message" onclick="sendDemoMessage()">
      <span class="material-symbols-outlined" style="margin-left: 2px;">send</span>
    </button>
  </div>
</div>

<script>
  function sendDemoMessage() {
    const input = document.getElementById('demoChatInput');
    const feed = document.getElementById('chatFeed');
    const typingIndicator = document.getElementById('demoTypingIndicator');
    
    if (input.value.trim() !== '') {
      // Create user message
      const msg = document.createElement('div');
      msg.className = 'message message-user';
      msg.textContent = input.value;
      
      // Insert before typing indicator
      feed.insertBefore(msg, typingIndicator);
      
      // Reset input
      input.value = '';
      input.style.height = 'auto'; // Reset height
      
      // Scroll to bottom
      feed.scrollTop = feed.scrollHeight;
      
      // Flash typing indicator
      typingIndicator.style.display = 'flex';
      setTimeout(() => {
        typingIndicator.style.display = 'none';
      }, 2000);
    }
  }
</script>
{{< /demo >}}
