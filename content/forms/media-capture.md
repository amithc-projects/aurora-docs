---
title: "Media & Capture"
description: "Rich media inputs using browser hardware APIs."
weight: 40
menu:
  main:
    parent: "forms-standard"
---

## 1. File Upload (Drag & Drop + Preview)
Drag files here or click to browse. Displays an instant thumbnail for images.

{{< demo >}}
<div class="field">
  <label class="field__label">Project Assets</label>
  
  <div class="drop-zone" id="drop-zone" onclick="document.getElementById('file-input').click()">
    <input type="file" id="file-input" hidden accept="image/*">
    
    <div class="dz-content" id="dz-content">
      <span class="material-symbols-outlined" style="font-size: 3rem; color: var(--ds-sys-color-primary);">cloud_upload</span>
      <p style="margin:0;"><strong>Click to upload</strong> or drag and drop</p>
      <p style="font-size: 0.85rem; opacity: 0.7;">SVG, PNG, JPG (max 2MB)</p>
    </div>

    <div class="dz-preview" id="dz-preview" style="display:none;">
      <img id="dz-img" src="" alt="Preview">
      <div class="dz-remove" onclick="event.stopPropagation(); removeFile()">
        <span class="material-symbols-outlined">delete</span>
      </div>
    </div>
  </div>
</div>



<script>
  const dz = document.getElementById('drop-zone');
  const input = document.getElementById('file-input');

  // Drag Events
  dz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('is-dragover'); });
  dz.addEventListener('dragleave', () => dz.classList.remove('is-dragover'));
  dz.addEventListener('drop', (e) => {
    e.preventDefault();
    dz.classList.remove('is-dragover');
    if(e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
  });

  // Input Change
  input.addEventListener('change', () => { if(input.files.length) handleFile(input.files[0]); });

  function handleFile(file) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('dz-img').src = e.target.result;
        document.getElementById('dz-content').style.display = 'none';
        document.getElementById('dz-preview').style.display = 'flex';
      };
      reader.readAsDataURL(file);
    }
  }

  function removeFile() {
    input.value = '';
    document.getElementById('dz-content').style.display = 'flex';
    document.getElementById('dz-preview').style.display = 'none';
  }
</script>
{{< /demo >}}

## 2. Audio Recorder
Capture voice memos directly in the browser.

{{< demo >}}
<div class="field">
  <label class="field__label">Voice Memo</label>
  <div class="audio-recorder">
    <button type="button" class="rec-btn" id="rec-btn" onclick="toggleRecord()">
      <span class="material-symbols-outlined">mic</span>
    </button>
    <div class="rec-status" id="rec-status">Ready to record</div>
    <audio id="audio-playback" controls style="display:none; height: 32px;"></audio>
  </div>
</div>



<script>
  let mediaRecorder;
  let audioChunks = [];
  let isRecording = false;

  async function toggleRecord() {
    const btn = document.getElementById('rec-btn');
    const status = document.getElementById('rec-status');
    const player = document.getElementById('audio-playback');

    if (!isRecording) {
      // Start
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        
        mediaRecorder.ondataavailable = event => audioChunks.push(event.data);
        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          player.src = audioUrl;
          player.style.display = 'block';
          status.innerText = "Recording saved.";
        };

        mediaRecorder.start();
        isRecording = true;
        btn.classList.add('is-recording');
        btn.innerHTML = '<span class="material-symbols-outlined">stop</span>';
        status.innerText = "Recording... (Click stop)";
        player.style.display = 'none';
      } catch (err) {
        status.innerText = "Microphone access denied.";
        console.error(err);
      }
    } else {
      // Stop
      mediaRecorder.stop();
      isRecording = false;
      btn.classList.remove('is-recording');
      btn.innerHTML = '<span class="material-symbols-outlined">mic</span>';
    }
  }
</script>
{{< /demo >}}

## 3. Signature Pad
Canvas-based drawing for signatures.

{{< demo >}}
<div class="field">
  <label class="field__label">Sign Here</label>
  <div class="sig-wrapper">
    <canvas id="sig-canvas" width="400" height="150"></canvas>
    <button type="button" class="clear-btn" onclick="clearSig()">Clear</button>
  </div>
  <div class="field__hint">Use mouse or touch to sign.</div>
</div>



<script>
  const canvas = document.getElementById('sig-canvas');
  const ctx = canvas.getContext('2d');
  let drawing = false;

  // Mouse
  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mousemove', draw);
  
  // Touch
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDraw(e.touches[0]); });
  canvas.addEventListener('touchend', (e) => { e.preventDefault(); stopDraw(); });
  canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e.touches[0]); });

  function startDraw(e) {
    drawing = true;
    draw(e); // Draw dot
  }
  function stopDraw() {
    drawing = false;
    ctx.beginPath(); // Reset path
  }
  function draw(e) {
    if (!drawing) return;
    
    // Get correct coordinates relative to canvas
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.pageX) - rect.left;
    const y = (e.clientY || e.pageY) - rect.top;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  function clearSig() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
</script>
{{< /demo >}}

