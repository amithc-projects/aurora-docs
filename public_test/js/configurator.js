/**
 * Aurora Configurator v2
 * Now with Variable Font Support
 */
const CONFIG_SCHEMA = [
  {
    category: "Theming",
    vars: [
      { label: "Primary Color", name: "--ds-sys-color-primary", type: "color" },
      { label: "Surface Color", name: "--ds-sys-color-surface", type: "color" },
    ]
  },
  {
    category: "Typography (Variable)",
    vars: [
      { label: "Weight (wght)", name: "--vf-wght", type: "range", min: 100, max: 900, step: 10 },
      { label: "Width (wdth)", name: "--vf-wdth", type: "range", min: 75, max: 125, step: 1 },
    ]
  },
  {
    category: "Shape & Space",
    vars: [
      { label: "Base Radius", name: "--ds-sys-radius-btn", type: "range", min: 0, max: 50, unit: "px" },
      { label: "Base Padding", name: "--ds-cmp-input-padding-x", type: "range", min: 0, max: 3, step: 0.1, unit: "rem" },
    ]
  }
];

export function initConfigurator(rootElement = document.documentElement) {
  const existingPanel = document.querySelector('.aurora-configurator');
  if(existingPanel) existingPanel.remove();

  const panel = document.createElement('aside');
  panel.className = 'aurora-configurator';
  panel.innerHTML = `
    <div class="config-header">
      <strong>Theme Tuner</strong>
      <button id="close-config" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
    <div class="config-body" id="config-controls"></div>
    <div class="config-footer">
      <button class="btn-ghost btn-sm" id="reset-config">Reset</button>
    </div>
  `;
  document.body.appendChild(panel);

  const container = document.getElementById('config-controls');

  CONFIG_SCHEMA.forEach(group => {
    const fieldset = document.createElement('fieldset');
    fieldset.innerHTML = `<legend>${group.category}</legend>`;
    
    group.vars.forEach(variable => {
      const wrapper = document.createElement('div');
      wrapper.className = 'control-group';
      
      // Get computed value
      const currentVal = getComputedStyle(rootElement).getPropertyValue(variable.name).trim();
      
      const label = document.createElement('label');
      label.innerText = variable.label;
      
      const input = document.createElement('input');
      input.type = variable.type;
      if(variable.min) input.min = variable.min;
      if(variable.max) input.max = variable.max;
      if(variable.step) input.step = variable.step;
      
      let valRaw = currentVal;
      if (variable.unit) valRaw = currentVal.replace(variable.unit, '');
      // Fallback for unset variables
      if (!valRaw && variable.name === '--vf-wght') valRaw = 400;
      if (!valRaw && variable.name === '--vf-wdth') valRaw = 100;
      
      input.value = valRaw;

      input.addEventListener('input', (e) => {
        const newVal = e.target.value + (variable.unit || '');
        rootElement.style.setProperty(variable.name, newVal);
      });

      wrapper.appendChild(label);
      wrapper.appendChild(input);
      fieldset.appendChild(wrapper);
    });
    container.appendChild(fieldset);
  });
}
