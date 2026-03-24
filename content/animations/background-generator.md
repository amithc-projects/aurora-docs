---
title: "Animated Background Generator"
description: "Create and customize luxurious animated CSS backgrounds using Aurora design tokens."
weight: 40
category: "Animations"
menu:
  main:
    parent: "animations"
---

## Design Your Background
Adjust the settings below to create a perfectly choreographed animated background for your project.

{{< rawhtml >}}
<style>
  .generator-layout {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 2rem;
    margin-top: 2rem;
    min-height: 600px;
  }

  .preview-container {
    position: relative;
    border-radius: var(--ds-sys-radius-card);
    overflow: hidden;
    border: 1px solid var(--ds-sys-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--ds-sys-color-surface-container);
  }

  /* Layers */
  #bg-preview {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  #shapes-layer {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    display: none;
  }

  .preview-card {
    position: relative;
    z-index: 3;
    width: 320px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: var(--ds-sys-radius-card);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  [data-mode="dark"] .preview-card {
    background: rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .controls-panel {
    background: var(--ds-sys-color-surface);
    border: 1px solid var(--ds-sys-color-border);
    border-radius: var(--ds-sys-radius-card);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    box-shadow: var(--ds-sys-shadow-card);
    max-height: 800px;
    overflow-y: auto;
  }

  .control-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .control-group label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--ds-sys-color-on-surface-variant);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .control-group select, 
  .control-group input[type="range"] {
    width: 100%;
    padding: 0.4rem;
    border-radius: 4px;
    border: 1px solid var(--ds-sys-color-border);
    background: var(--ds-sys-color-surface-container-low);
    color: var(--ds-sys-color-on-surface);
  }

  .color-swatches {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.3rem;
  }

  .swatch {
    aspect-ratio: 1;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: transform 0.2s;
  }

  .swatch:hover {
    transform: scale(1.1);
  }

  .swatch.active {
    border-color: var(--ds-sys-color-primary);
    box-shadow: 0 0 0 1px white inset;
  }

  .code-output {
    margin-top: 2rem;
    background: #1e1e1e;
    color: #e5e5e5;
    padding: 1.5rem;
    border-radius: var(--ds-sys-radius-card);
    position: relative;
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    overflow-x: auto;
  }

  .btn-copy-css {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.7rem;
    transition: all 0.2s;
  }

  .btn-copy-css:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: white;
  }

  /* Toggles */
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 18px;
  }

  .toggle-switch input { opacity: 0; width: 0; height: 0; }
  .slider {
    position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
    background-color: var(--ds-sys-color-outline-variant); transition: .4s; border-radius: 20px;
  }
  .slider:before {
    position: absolute; content: ""; height: 12px; width: 12px; left: 3px; bottom: 3px;
    background-color: white; transition: .4s; border-radius: 50%;
  }
  input:checked + .slider { background-color: var(--ds-sys-color-primary); }
  input:checked + .slider:before { transform: translateX(16px); }

  /* Animations */
  @keyframes bgRotate { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
  @keyframes meshMove { 0% { background-position: 0% 0%; } 100% { background-position: 100% 100%; } }
  @keyframes bgPulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
  @keyframes rippleEffect { 0% { transform: scale(0); opacity: 1; border-width: 10px; } 100% { transform: scale(4); opacity: 0; border-width: 1px; } }
  @keyframes floatingShape { 0% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(30px, -50px) rotate(10deg); } 66% { transform: translate(-20px, 20px) rotate(-10deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
  @keyframes kenBurns { 0% { transform: scale(1) rotate(0deg); } 100% { transform: scale(1.2) rotate(5deg); } }
  @keyframes pulseWave { 0%, 100% { transform: scale(0.8); opacity: 0.3; } 50% { transform: scale(1.2); opacity: 0.6; } }

  .ripple { position: absolute; border-radius: 50%; border: 2px solid currentColor; transform: translate(-50%, -50%); pointer-events: none; }
  .floating-shape { position: absolute; opacity: 0.1; animation: floatingShape 15s ease-in-out infinite; }
  
  .audio-bar { width: 4px; border-radius: 2px; background: currentColor; margin: 0 2px; transition: height 0.1s ease; }
  
  @media (max-width: 900px) { .generator-layout { grid-template-columns: 1fr; } }
</style>

<div class="generator-layout">
  <div class="preview-container">
    <div id="bg-preview"></div>
    <div id="shapes-layer"></div>
    <div class="preview-card">
      <h3 style="margin-top: 0; color: inherit; font-size: 1.25rem;">Aurora Premium</h3>
      <p style="font-size: 0.85rem; opacity: 0.8;">Experience high-fidelity motion with token-driven backgrounds.</p>
      <button class="btn btn--primary" style="width: 100%; font-size: 0.85rem; padding: 0.6rem;">Get Started</button>
    </div>
  </div>

  <div class="controls-panel">
    <div class="control-group">
      <label>Effect Type</label>
      <select id="effect-type">
        <option value="gradient-rotate">Gradient Rotation</option>
        <option value="mesh-gradient">Mesh Gradient</option>
        <option value="pulsating-glow">Pulsating Glow</option>
        <option value="waves">Moving Waves</option>
        <option value="pulsing-wave">Pulsing Wave (Breathing)</option>
        <option value="ripples">Refined Ripples</option>
        <option value="oscilloscope">Oscilloscope (Sine)</option>
        <option value="audio-bars">Audio Visualisation</option>
        <option value="geometric-pattern">Geometric Pattern (Ken Burns)</option>
      </select>
    </div>

    <div class="control-group" id="shape-group" style="display: none;">
      <label>Pattern Shape</label>
      <select id="pattern-shape">
        <option value="hexagon">Hexagon</option>
        <option value="triangle">Triangle</option>
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="菱形">Diamond</option>
      </select>
    </div>

    <div class="control-group">
      <label>
        Floating Foreground Shapes
        <div class="toggle-switch">
          <input type="checkbox" id="toggle-shapes">
          <span class="slider"></span>
        </div>
      </label>
    </div>

    <div class="control-group">
      <label>Primary Color</label>
      <div class="color-swatches" id="primary-colors">
        <div class="swatch active" style="background: var(--ds-sys-color-primary);" data-token="var(--ds-sys-color-primary)"></div>
        <div class="swatch" style="background: var(--ds-sys-color-success);" data-token="var(--ds-sys-color-success)"></div>
        <div class="swatch" style="background: var(--ds-sys-color-warning);" data-token="var(--ds-sys-color-warning)"></div>
        <div class="swatch" style="background: var(--ds-sys-color-error);" data-token="var(--ds-sys-color-error)"></div>
        <div class="swatch" style="background: #8b5cf6;" data-token="#8b5cf6"></div>
        <div class="swatch" style="background: #3b82f6;" data-token="#3b82f6"></div>
      </div>
    </div>

    <div class="control-group">
      <label>Secondary Color</label>
      <div class="color-swatches" id="secondary-colors">
        <div class="swatch" style="background: var(--ds-sys-color-primary);" data-token="var(--ds-sys-color-primary)"></div>
        <div class="swatch active" style="background: var(--ds-sys-color-on-surface-variant);" data-token="var(--ds-sys-color-on-surface-variant)"></div>
        <div class="swatch" style="background: var(--ds-sys-color-surface-container-highest);" data-token="var(--ds-sys-color-surface-container-highest)"></div>
        <div class="swatch" style="background: #60a5fa;" data-token="#60a5fa"></div>
        <div class="swatch" style="background: #34d399;" data-token="#34d399"></div>
        <div class="swatch" style="background: #f472b6;" data-token="#f472b6"></div>
      </div>
    </div>

    <div class="control-group">
      <label>Animation Speed (s)</label>
      <input type="range" id="anim-speed" min="1" max="15" value="8">
      <span id="speed-value" style="font-size: 0.7rem; text-align: right;">8s</span>
    </div>

    <div class="control-group" id="intensity-container">
      <label id="intensity-label">Primary Intensity</label>
      <input type="range" id="anim-intensity" min="0" max="100" value="50">
      <span id="intensity-value" style="font-size: 0.7rem; text-align: right;">50%</span>
    </div>

    <div class="control-group" id="secondary-control-container" style="display: none;">
      <label id="secondary-label">Secondary Control</label>
      <input type="range" id="secondary-control" min="0" max="100" value="50">
      <span id="secondary-value" style="font-size: 0.7rem; text-align: right;">50%</span>
    </div>
  </div>
</div>

<h3>CSS Snippet</h3>
<div class="code-output">
  <button class="btn-copy-css" onclick="copyCSS()">Copy CSS</button>
  <pre id="css-code" style="margin: 0;"></pre>
</div>

<script>
  (function() {
    const bgPreview = document.getElementById('bg-preview');
    const shapesLayer = document.getElementById('shapes-layer');
    const cssCode = document.getElementById('css-code');
    const effectType = document.getElementById('effect-type');
    const patternShape = document.getElementById('pattern-shape');
    const shapeGroup = document.getElementById('shape-group');
    const animSpeed = document.getElementById('anim-speed');
    const speedValue = document.getElementById('speed-value');
    const animIntensity = document.getElementById('anim-intensity');
    const intensityValue = document.getElementById('intensity-value');
    const intensityLabel = document.getElementById('intensity-label');
    const secControl = document.getElementById('secondary-control');
    const secValue = document.getElementById('secondary-value');
    const secLabel = document.getElementById('secondary-label');
    const secContainer = document.getElementById('secondary-control-container');
    const toggleShapes = document.getElementById('toggle-shapes');
    
    let primaryColor = 'var(--ds-sys-color-primary)';
    let secondaryColor = 'var(--ds-sys-color-on-surface-variant)';
    let activeInterval = null;

    function resetPreview() {
      if (activeInterval) { clearInterval(activeInterval); activeInterval = null; }
      bgPreview.innerHTML = '';
      bgPreview.className = '';
      bgPreview.style = '';
    }

    function updateBackground() {
      resetPreview();
      const type = effectType.value;
      const speed = parseFloat(animSpeed.value);
      const intensity = parseInt(animIntensity.value);
      const secondaryVal = parseInt(secControl.value);
      
      speedValue.textContent = speed + 's';
      secContainer.style.display = 'none';
      shapeGroup.style.display = 'none';

      let css = '';
      let vtCss = '@view-transition { navigation: auto; }\n\n';

      if (type === 'gradient-rotate') {
        intensityLabel.textContent = 'Rotation Angle';
        intensityValue.textContent = (intensity * 3.6).toFixed(0) + 'deg';
        bgPreview.style = `background: linear-gradient(${intensity * 3.6}deg, ${primaryColor}, ${secondaryColor}); background-size: 400% 400%; animation: bgRotate ${speed}s ease infinite;`;
        css = `.animated-bg {\n  background: linear-gradient(${intensity * 3.6}deg, ${primaryColor}, ${secondaryColor});\n  background-size: 400% 400%;\n  animation: bgRotate ${speed}s ease infinite;\n}`;
      } else if (type === 'mesh-gradient') {
        intensityLabel.textContent = 'Bloom Blur';
        intensityValue.textContent = (intensity / 2).toFixed(1) + 'px';
        bgPreview.style = `background-color: var(--ds-sys-color-bg-app); background-image: 
          radial-gradient(at 0% 0%, ${primaryColor} 0px, transparent 50%),
          radial-gradient(at 100% 0%, ${secondaryColor} 0px, transparent 50%),
          radial-gradient(at 100% 100%, ${primaryColor} 0px, transparent 50%),
          radial-gradient(at 0% 100%, ${secondaryColor} 0px, transparent 50%);
          filter: blur(${intensity/2}px); opacity: 0.8; animation: meshMove ${speed}s ease infinite alternate;`;
        css = `.mesh-bg {\n  background-color: var(--ds-sys-color-bg-app);\n  filter: blur(${intensity/2}px);\n  animation: meshMove ${speed}s ease infinite alternate;\n}`;
      } else if (type === 'pulsating-glow') {
        intensityLabel.textContent = 'Glow Size';
        intensityValue.textContent = (intensity * 5) + 'px';
        bgPreview.style = `background: var(--ds-sys-color-bg-app); display: flex; align-items: center; justify-content: center; overflow: hidden;`;
        bgPreview.innerHTML = `<div style="width: ${intensity*5}px; height: ${intensity*5}px; background: ${primaryColor}; border-radius: 50%; filter: blur(60px); animation: bgPulse ${speed}s ease-in-out infinite;"></div>`;
        css = `.pulse-bg {\n  background: var(--ds-sys-color-bg-app);\n  overflow: hidden;\n}\n.pulse-bg::after {\n  content: ""; position: absolute;\n  left: 50%; top: 50%; margin: -${intensity*2.5}px;\n  width: ${intensity*5}px; height: ${intensity*5}px;\n  background: ${primaryColor};\n  border-radius: 50%; filter: blur(60px);\n  animation: bgPulse ${speed}s ease-in-out infinite;\n}`;
      } else if (type === 'pulsing-wave') {
        intensityLabel.textContent = 'Wave Scale';
        intensityValue.textContent = (intensity / 50).toFixed(1) + 'x';
        bgPreview.style = `background: var(--ds-sys-color-bg-app); display: flex; align-items: center; justify-content: center;`;
        bgPreview.innerHTML = `<div style="width: 200px; height: 200px; border: 4px solid ${primaryColor}; border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%; animation: pulseWave ${speed}s ease-in-out infinite; opacity: 0.6; filter: blur(2px);"></div>`;
        css = `.pulsing-wave-bg {\n  background: var(--ds-sys-color-bg-app);\n  display: flex; align-items: center; justify-content: center;\n}\n.wave-shape {\n  width: 200px; height: 200px;\n  border: 4px solid ${primaryColor};\n  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;\n  animation: pulseWave ${speed}s ease-in-out infinite;\n}`;
      } else if (type === 'ripples') {
        secContainer.style.display = 'block';
        intensityLabel.textContent = 'Ripple Count';
        intensityValue.textContent = Math.max(1, Math.floor(intensity / 10));
        secLabel.textContent = 'Ripple Max Size';
        secValue.textContent = secondaryVal + '%';
        
        function makeRipple() {
          const r = document.createElement('div');
          r.className = 'ripple';
          r.style.width = '1px';
          r.style.height = '1px';
          r.style.left = '50%'; r.style.top = '50%';
          r.style.borderColor = primaryColor;
          r.style.animation = `rippleEffect ${speed}s ease-out forwards`;
          // Override scale to reach full container
          r.style.setProperty('--max-scale', (secondaryVal / 25));
          r.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: `translate(-50%, -50%) scale(${secondaryVal/10})`, opacity: 0 }
          ], { duration: speed * 1000, easing: 'ease-out' });
          bgPreview.appendChild(r);
          setTimeout(() => r.remove(), speed * 1000);
        }
        makeRipple();
        activeInterval = setInterval(makeRipple, (speed * 1000) / Math.max(1, Math.floor(intensity / 10)));
        css = `.ripples-bg {\n  background: var(--ds-sys-color-bg-app);\n  color: ${primaryColor};\n  position: relative; overflow: hidden;\n}\n.ripple {\n  position: absolute; left: 50%; top: 50%;\n  border-radius: 50%; border: 1px solid currentColor;\n  animation: ripple ${speed}s ease-out infinite;\n}`;
      } else if (type === 'oscilloscope') {
        intensityLabel.textContent = 'Amplitude';
        intensityValue.textContent = intensity + 'px';
        const points = [];
        for (let x = 0; x <= 400; x += 5) {
          const y = 100 + Math.sin(x / 20) * (intensity / 2);
          points.push(`${x},${y}`);
        }
        bgPreview.style = `background: #000; display: flex; align-items: center; justify-content: center;`;
        bgPreview.innerHTML = `
          <svg width="100%" height="200" viewBox="0 0 400 200" preserveAspectRatio="none">
            <polyline points="${points.join(' ')}" fill="none" stroke="${primaryColor}" stroke-width="2">
              <animate attributeName="points" dur="${speed/4}s" repeatCount="indefinite"
                values="${points.join(' ')}; ${points.map(p => { 
                  let [px, py] = p.split(',').map(Number);
                  return `${px},${100 + Math.sin((px + 40) / 20) * (intensity / 2)}`;
                }).join(' ')}; ${points.join(' ')}" />
            </polyline>
          </svg>`;
        css = `.oscilloscope-bg {\n  background: #000; overflow: hidden;\n}\n/* SVG paths with sine-wave animation */`;
      } else if (type === 'audio-bars') {
        intensityLabel.textContent = 'Complexity';
        intensityValue.textContent = Math.floor(intensity / 5);
        bgPreview.style = `background: var(--ds-sys-color-bg-app); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 2rem;`;
        const barCount = Math.floor(intensity / 5);
        for (let i = 0; i < barCount; i++) {
          const bar = document.createElement('div');
          bar.className = 'audio-bar';
          bar.style.color = primaryColor;
          bar.style.height = '20px';
          bgPreview.appendChild(bar);
        }
        activeInterval = setInterval(() => {
          document.querySelectorAll('.audio-bar').forEach(b => {
            b.style.height = (10 + Math.random() * 80) + 'px';
          });
        }, 150);
        css = `.audio-bg {\n  display: flex; align-items: flex-end; gap: 4px;\n}\n.bar {\n  animation: audioAnim ${speed/10}s ease-in-out infinite alternate;\n}`;
      } else if (type === 'geometric-pattern') {
        shapeGroup.style.display = 'block';
        intensityLabel.textContent = 'Pattern Size';
        intensityValue.textContent = intensity + 'px';
        const shape = patternShape.value;
        let patternSvg = '';
        if (shape === 'hexagon') patternSvg = `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`;
        else if (shape === 'triangle') patternSvg = `polygon(50% 0%, 0% 100%, 100% 100%)`;
        else if (shape === 'circle') patternSvg = `circle(50% at 50% 50%)`;
        else if (shape === 'square') patternSvg = `inset(0%)`;
        else patternSvg = `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`;

        bgPreview.style = `background: var(--ds-sys-color-bg-app); overflow: hidden;`;
        bgPreview.innerHTML = `<div id="pattern-inner" style="width: 200%; height: 200%; position: absolute; left:-50%; top:-50%; 
          background-image: radial-gradient(${primaryColor} 20%, transparent 20%);
          background-size: ${intensity}px ${intensity}px;
          animation: kenBurns ${speed*2}s ease-in-out infinite alternate;"></div>`;
        
        const inner = bgPreview.querySelector('#pattern-inner');
        if (shape !== 'circle') {
          inner.style.backgroundImage = 'none';
          inner.style.display = 'grid';
          inner.style.gridTemplateColumns = `repeat(auto-fill, ${intensity}px)`;
          for(let i=0; i<400; i++) {
            const s = document.createElement('div');
            s.style.width = (intensity/1.5) + 'px';
            s.style.height = (intensity/1.5) + 'px';
            s.style.background = primaryColor;
            s.style.clipPath = patternSvg;
            s.style.margin = (intensity/6) + 'px';
            inner.appendChild(s);
          }
        }
        css = `.geometric-bg {\n  background: var(--ds-sys-color-bg-app);\n  overflow: hidden;\n}\n.pattern-layer {\n  animation: kenBurns ${speed*2}s ease-in-out infinite alternate;\n}`;
      }

      // Shapes Layer
      if (toggleShapes.checked) {
        shapesLayer.style.display = 'block';
        if (shapesLayer.innerHTML === '') {
          for (let i = 0; i < 8; i++) {
            const s = document.createElement('div');
            s.className = 'floating-shape';
            const size = 30 + Math.random() * 80;
            s.style.width = size + 'px'; s.style.height = size + 'px';
            s.style.left = Math.random() * 100 + '%'; s.style.top = Math.random() * 100 + '%';
            s.style.background = i % 2 === 0 ? primaryColor : secondaryColor;
            s.style.borderRadius = Math.random() > 0.5 ? '50%' : '8px';
            s.style.animationDelay = (Math.random() * 5) + 's';
            s.style.animationDuration = (12 + Math.random() * 8) + 's';
            shapesLayer.appendChild(s);
          }
        }
      } else {
        shapesLayer.style.display = 'none';
        shapesLayer.innerHTML = '';
      }

      cssCode.textContent = vtCss + css;
    }

    // Event Listeners
    [effectType, patternShape, animSpeed, animIntensity, secControl, toggleShapes].forEach(el => {
      el.addEventListener('input', updateBackground);
      el.addEventListener('change', updateBackground);
    });

    document.querySelectorAll('.swatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        const parent = swatch.parentElement;
        parent.querySelector('.active').classList.remove('active');
        swatch.classList.add('active');
        if (parent.id === 'primary-colors') primaryColor = swatch.dataset.token;
        else secondaryColor = swatch.dataset.token;
        updateBackground();
      });
    });

    window.copyCSS = function() {
      navigator.clipboard.writeText(cssCode.textContent).then(() => {
        const btn = document.querySelector('.btn-copy-css');
        const oldText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = oldText, 2000);
      });
    }

    updateBackground();
  })();
</script>
{{< /rawhtml >}}
