---
title: "Webchat Pattern"
category: "Patterns"
description: "A combination of form inputs, chat messages, and a typing indicator."
menu:
  main:
    parent: "components-patterns"
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

<div class="chat-container" style="position: relative;">
  <div class="chat-header" style="display: flex; justify-content: space-between; align-items: center;">
    <span style="visibility: hidden; width: 32px;"></span>
    <span>Aurora Support</span>
    <button class="chat-action-btn" title="End and share via email" onclick="openEmailDialog()" style="width: 32px; height: 32px; color: inherit;">
      <span class="material-symbols-outlined" style="font-size: 1.2rem;">mail</span>
    </button>
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
    <button class="chat-action-btn" title="Attach file" onclick="document.getElementById('upload-overlay').style.display = 'flex'">
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

  <!-- Upload Overlay inside chat-container -->
  <div id="upload-overlay" style="display: none; position: absolute; inset: 0; background: rgba(0,0,0,0.4); z-index: 10; align-items: center; justify-content: center; padding: 1rem; backdrop-filter: blur(2px);">
    <div class="card" style="padding: 2rem; box-shadow: var(--ds-sys-shadow-card); width: 100%; max-width: 400px; background: var(--ds-sys-color-surface); z-index: 11; border-radius: var(--ds-sys-radius-card);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h3 style="margin: 0;">Upload File</h3>
        <button class="chat-action-btn" onclick="document.getElementById('upload-overlay').style.display = 'none'" style="width: 32px; height: 32px; flex-shrink: 0;">
          <span class="material-symbols-outlined" style="font-size: 1.2rem;">close</span>
        </button>
      </div>
      
      <label class="file-input-wrapper" id="chat-upload-zone" style="display: block; width: 100%; border: 2px dashed var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-card); padding: 2rem; text-align: center; cursor: pointer; transition: all 0.2s;">
        <input type="file" id="chat-file-input" onchange="handleDialogFileUpload(this)">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: var(--ds-sys-color-on-surface-subtle);">
          <span class="material-symbols-outlined" style="font-size: 2.5rem;">cloud_upload</span>
          <span>Drag & drop a file here or <strong>Click to browse</strong></span>
        </div>
      </label>
    </div>
  </div>

  <!-- Email Overlay inside chat-container -->
  <div id="email-overlay" style="display: none; position: absolute; inset: 0; background: rgba(0,0,0,0.4); z-index: 10; align-items: center; justify-content: center; padding: 1rem; backdrop-filter: blur(2px);">
    <div class="card" style="padding: 2rem; box-shadow: var(--ds-sys-shadow-card); width: 100%; max-width: 400px; background: var(--ds-sys-color-surface); z-index: 11; border-radius: var(--ds-sys-radius-card);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h3 style="margin: 0;">Share via Email</h3>
        <button class="chat-action-btn" onclick="document.getElementById('email-overlay').style.display = 'none'" style="width: 32px; height: 32px; flex-shrink: 0;">
          <span class="material-symbols-outlined" style="font-size: 1.2rem;">close</span>
        </button>
      </div>
      
      <div class="field" style="margin-bottom: 1.5rem;">
        <label class="field__label" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email Address</label>
        <input type="email" id="share-email-input" placeholder="name@company.com" style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-btn); background: var(--ds-sys-color-surface); color: var(--ds-sys-color-on-surface); font-family: inherit; font-size: 1rem;">
      </div>
      
      <div id="email-feedback" style="display: none; padding: 0.75rem; border-radius: 4px; background: rgba(var(--ds-sys-color-success-rgb, 16, 185, 129), 0.1); color: var(--ds-sys-color-success); margin-bottom: 1rem; font-size: 0.9rem; font-weight: 500; text-align: center;">
        Transcript sent successfully!
      </div>
      
      <button class="chat-action-btn primary" style="width: 100%; border: none; padding: 0.75rem; border-radius: var(--ds-sys-radius-btn); background: var(--ds-sys-color-primary); color: white; cursor: pointer; font-weight: 600; text-align: center; justify-content: center;" onclick="submitEmailShare()">
        Send Transcript
      </button>
    </div>
  </div>
</div>

<script>
  function openEmailDialog() {
    document.getElementById('email-overlay').style.display = 'flex';
    document.getElementById('email-feedback').style.display = 'none';
    document.getElementById('share-email-input').value = '';
  }

  function submitEmailShare() {
    const email = document.getElementById('share-email-input').value;
    if (!email || !email.includes('@')) return; // Basic validation
    
    const feedback = document.getElementById('email-feedback');
    feedback.style.display = 'block';
    feedback.textContent = `Transcript sent to ${email}`;
    
    setTimeout(() => {
      document.getElementById('email-overlay').style.display = 'none';
    }, 2500);
  }

  function endAndShareChat() {
    const feed = document.getElementById('chatFeed');
    const messages = feed.querySelectorAll('.message');
    let transcript = 'Aurora Support Chat Transcript:\n\n';
    
    messages.forEach(msg => {
      // Skip the typing indicator
      if (msg.classList.contains('typing-indicator')) return;
      
      const sender = msg.classList.contains('message-user') ? 'User' : 'Support';
      transcript += `${sender}: ${msg.textContent.trim()}\n`;
    });
    
    const subject = encodeURIComponent('Chat Transcript with Aurora Support');
    const body = encodeURIComponent(transcript);
    
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  // Handle Drag & Drop for the chat upload dialog
  const chatUploadZone = document.getElementById('chat-upload-zone');
  const chatFileInput = document.getElementById('chat-file-input');

  if (chatUploadZone) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      chatUploadZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) { e.preventDefault(); e.stopPropagation(); }

    ['dragenter', 'dragover'].forEach(eventName => {
      chatUploadZone.addEventListener(eventName, () => chatUploadZone.classList.add('drag-over'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      chatUploadZone.addEventListener(eventName, () => chatUploadZone.classList.remove('drag-over'), false);
    });

    chatUploadZone.addEventListener('drop', (e) => {
      let dt = e.dataTransfer;
      let files = dt.files;
      
      if (files && files.length) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(files[0]);
        chatFileInput.files = dataTransfer.files;
        handleDialogFileUpload(chatFileInput);
      }
    }, false);
  }

  function handleDialogFileUpload(input) {
    if (input.files && input.files.length > 0) {
      const fileName = input.files[0].name;
      
      // Close overlay
      document.getElementById('upload-overlay').style.display = 'none';
      
      // Add attachment message to chat
      const feed = document.getElementById('chatFeed');
      const typingIndicator = document.getElementById('demoTypingIndicator');
      
      const msg = document.createElement('div');
      msg.className = 'message message-user';
      msg.innerHTML = `<div style="display: flex; align-items: center; gap: 0.5rem;"><span class="material-symbols-outlined" style="font-size: 1.2rem;">attachment</span> ${fileName}</div>`;
      
      feed.insertBefore(msg, typingIndicator);
      feed.scrollTop = feed.scrollHeight;
      
      // Reset input
      input.value = '';
    }
  }

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
