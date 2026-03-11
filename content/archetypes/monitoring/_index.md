---
title: "System Monitoring Dashboard"
description: "A dark-mode forced archetype demonstrating extreme data density, multi-pane layouts, and live metric visualization, inspired by Datadog and Grafana."
menu:
  main:
    parent: "archetypes"
---

The System Monitoring archetype tests the engine's ability to handle high-density layouts (resizable panes, dense datagrids, complex charting canvas overlays) without the UI breaking down.

## 1. Network Overview
A complex Command Center layout packed with topological graphs, mini-sparklines, and live performance gauges.

{{< demo >}}
<div data-theme="dark" style="width: 100%; height: 600px; border: 1px solid #333; border-radius: 8px; overflow: hidden; background: #0b0c10; font-family: var(--ds-sys-font-family-base); color: #c5c6c7; display: flex; flex-direction: column;">
  
  <!-- Global Topbar -->
  <header style="height: 50px; background: #1f2833; border-bottom: 1px solid #333; display: flex; align-items: center; justify-content: space-between; padding: 0 1rem; flex-shrink: 0;">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <span class="material-symbols-outlined" style="color: #66fcf1; font-weight: 700;">monitor_heart</span>
      <span style="font-weight: 700; color: #fff; font-size: 0.9rem;">US-EAST-1 PROD CLUSTER</span>
      <div style="background: rgba(102, 252, 241, 0.1); border: 1px solid rgba(102, 252, 241, 0.3); color: #66fcf1; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 700;">Healthy</div>
    </div>
    
    <div style="display: flex; align-items: center; gap: 1rem;">
      <!-- Time Range Picker Mock -->
      <div style="display: flex; align-items: center; gap: 0.5rem; background: #0b0c10; border: 1px solid #333; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">
        <span class="material-symbols-outlined" style="font-size: 1rem;">schedule</span> Past 1 Hour <span class="material-symbols-outlined" style="font-size: 1rem;">arrow_drop_down</span>
      </div>
      <!-- Refresh Interval -->
      <div style="display: flex; align-items: center; gap: 0.5rem; background: #0b0c10; border: 1px solid #333; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; color: #45a29e;">
        <span class="material-symbols-outlined" style="font-size: 1rem;">autorenew</span> 10s
      </div>
    </div>
  </header>

  <!-- Dual-Pane Layout -->
  <div style="display: flex; flex: 1; overflow: hidden;">
    
    <!-- Left Navigation Rail (Services Sidebar) -->
    <aside style="width: 220px; background: #12151b; border-right: 1px solid #333; display: flex; flex-direction: column; overflow-y: auto;">
      <div style="padding: 0.75rem 1rem; font-size: 0.75rem; font-weight: 700; color: #7f8c8d; text-transform: uppercase; letter-spacing: 1px;">Infrastructure</div>
      
      <div style="padding: 0.5rem 1rem; color: #fff; background: rgba(102, 252, 241, 0.1); border-left: 3px solid #66fcf1; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.85rem;">
        <span class="material-symbols-outlined" style="font-size: 1.1rem; color: #66fcf1;">dashboard</span> Overview
      </div>
      <div style="padding: 0.5rem 1rem; color: #c5c6c7; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.85rem;">
        <span class="material-symbols-outlined" style="font-size: 1.1rem;">memory</span> Containers
      </div>
      <div style="padding: 0.5rem 1rem; color: #c5c6c7; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.85rem;">
        <span class="material-symbols-outlined" style="font-size: 1.1rem;">database</span> Databases
      </div>
      <div style="padding: 0.5rem 1rem; color: #c5c6c7; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.85rem; display: flex; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.5rem;"><span class="material-symbols-outlined" style="font-size: 1.1rem;">api</span> API Gateways</div>
        <div style="width: 8px; height: 8px; background: #e74c3c; border-radius: 50%;"></div>
      </div>
    </aside>

    <!-- Main Dashboard Grid Area -->
    <main style="flex: 1; padding: 1rem; overflow-y: auto; background: #0b0c10;">
      
      <!-- Top Row: Sparkline KPIs -->
      <div class="l-grid" style="grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1rem;">
        
        <div style="background: #1f2833; border: 1px solid #333; border-radius: 4px; padding: 1rem; position: relative;">
          <div style="font-size: 0.75rem; font-weight: 700; color: #7f8c8d; text-transform: uppercase;">Average CPU</div>
          <div style="font-size: 1.5rem; font-weight: 500; color: #fff; margin-top: 0.25rem;">42.8%</div>
          <!-- CSS Mock Sparkline -->
          <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 40px; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px;" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,35 L20,30 L40,35 L60,15 L80,25 L100,20 L100,40 L0,40 Z" fill="rgba(69, 162, 158, 0.2)"></path>
            <polyline points="0,35 20,30 40,35 60,15 80,25 100,20" fill="none" stroke="#45a29e" stroke-width="2"></polyline>
          </svg>
        </div>

        <div style="background: #1f2833; border: 1px solid #333; border-radius: 4px; padding: 1rem; position: relative;">
          <div style="font-size: 0.75rem; font-weight: 700; color: #7f8c8d; text-transform: uppercase;">Memory Usage</div>
          <div style="font-size: 1.5rem; font-weight: 500; color: #fff; margin-top: 0.25rem;">14.2 GB</div>
          <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 40px;" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,10 L30,12 L50,8 L70,10 L100,15 L100,40 L0,40 Z" fill="rgba(69, 162, 158, 0.2)"></path>
            <polyline points="0,10 30,12 50,8 70,10 100,15" fill="none" stroke="#45a29e" stroke-width="2"></polyline>
          </svg>
        </div>

        <div style="background: #1f2833; border: 1px solid #e74c3c; border-radius: 4px; padding: 1rem; position: relative; box-shadow: 0 0 15px rgba(231, 76, 60, 0.1);">
          <div style="font-size: 0.75rem; font-weight: 700; color: #e74c3c; text-transform: uppercase; display: flex; justify-content: space-between;">
            API Letency <span class="material-symbols-outlined" style="font-size: 1rem;">warning</span>
          </div>
          <div style="font-size: 1.5rem; font-weight: 500; color: #fff; margin-top: 0.25rem;">890ms</div>
          <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 40px;" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,30 L40,30 L50,5 L60,8 L70,25 L100,10 L100,40 L0,40 Z" fill="rgba(231, 76, 60, 0.2)"></path>
            <polyline points="0,30 40,30 50,5 60,8 70,25 100,10" fill="none" stroke="#e74c3c" stroke-width="2"></polyline>
          </svg>
        </div>

        <div style="background: #1f2833; border: 1px solid #333; border-radius: 4px; padding: 1rem; position: relative;">
          <div style="font-size: 0.75rem; font-weight: 700; color: #7f8c8d; text-transform: uppercase;">Active Connections</div>
          <div style="font-size: 1.5rem; font-weight: 500; color: #fff; margin-top: 0.25rem;">12,402</div>
          <svg style="position: absolute; bottom: 0; left: 0; width: 100%; height: 40px;" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0,25 L20,20 L40,22 L60,18 L80,20 L100,15 L100,40 L0,40 Z" fill="rgba(69, 162, 158, 0.2)"></path>
            <polyline points="0,25 20,20 40,22 60,18 80,20 100,15" fill="none" stroke="#45a29e" stroke-width="2"></polyline>
          </svg>
        </div>
      </div>

      <!-- Main Chart Area -->
      <div style="background: #1f2833; border: 1px solid #333; border-radius: 4px; padding: 1.5rem; height: 320px; display: flex; flex-direction: column;">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <h3 style="margin: 0; font-size: 1rem; font-weight: 600; color: #fff;">Network Traffic / Bandwidth</h3>
          <div style="display: flex; gap: 1rem; font-size: 0.8rem;">
            <div style="display: flex; align-items: center; gap: 0.4rem;"><div style="width: 10px; height: 10px; background: #66fcf1; border-radius: 50%;"></div> Inbound</div>
            <div style="display: flex; align-items: center; gap: 0.4rem;"><div style="width: 10px; height: 10px; border: 2px solid #66fcf1; border-radius: 50%;"></div> Outbound</div>
          </div>
        </div>
        
        <!-- Large Area Chart Mock -->
        <div style="flex: 1; position: relative; border-left: 1px dashed #333; border-bottom: 1px dashed #333;">
          <!-- Grid Lines -->
          <div style="position: absolute; top: 25%; left: 0; width: 100%; height: 1px; background: rgba(255,255,255,0.05);"></div>
          <div style="position: absolute; top: 50%; left: 0; width: 100%; height: 1px; background: rgba(255,255,255,0.05);"></div>
          <div style="position: absolute; top: 75%; left: 0; width: 100%; height: 1px; background: rgba(255,255,255,0.05);"></div>
          
          <svg style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;" viewBox="0 0 1000 200" preserveAspectRatio="none">
             <!-- Inbound Fill -->
             <path d="M0,180 C100,150 200,170 300,120 C400,70 500,180 600,60 C700,30 800,150 900,110 C1000,90 1000,90 1000,90 L1000,200 L0,200 Z" fill="rgba(102, 252, 241, 0.15)"></path>
             <path d="M0,180 C100,150 200,170 300,120 C400,70 500,180 600,60 C700,30 800,150 900,110 C1000,90 1000,90 1000,90" fill="none" stroke="#66fcf1" stroke-width="3"></path>
             
             <!-- Outbound line -->
             <path d="M0,190 C150,180 250,195 350,160 C450,130 550,190 650,120 C750,90 850,180 950,140 L1000,130" fill="none" stroke="rgba(102, 252, 241, 0.5)" stroke-width="2" stroke-dasharray="5,5"></path>
          </svg>
        </div>

      </div>

    </main>

  </div>
</div>
{{< /demo >}}

---

## 2. Logs Explorer
A dense typography view designed for debugging and command injection. Mimics a built-in terminal embedded within a rigid data grid.

{{< demo >}}
<div data-theme="dark" style="width: 100%; height: 500px; border: 1px solid #333; border-radius: 8px; overflow: hidden; background: #0b0c10; font-family: monospace; color: #c5c6c7; display: flex; flex-direction: column;">
  
  <header style="height: 40px; background: #1f2833; border-bottom: 1px solid #333; display: flex; align-items: center; padding: 0 1rem; flex-shrink: 0; gap: 0.5rem;">
    <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.8rem; display: flex; align-items: center; gap: 0.25rem;">
      <span style="color: #66fcf1;">app:</span> payments-service <span class="material-symbols-outlined" style="font-size: 0.8rem; cursor: pointer;">close</span>
    </div>
    <div style="background: rgba(231, 76, 60, 0.1); border: 1px solid rgba(231, 76, 60, 0.3); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.8rem; display: flex; align-items: center; gap: 0.25rem;">
      <span style="color: #e74c3c;">level:</span> error <span class="material-symbols-outlined" style="font-size: 0.8rem; cursor: pointer;">close</span>
    </div>
    <input type="text" placeholder="Add filter... (e.g. host:db-primary)" style="background: transparent; border: none; outline: none; color: #fff; font-family: inherit; font-size: 0.8rem; margin-left: 0.5rem; width: 300px;">
  </header>

  <main style="flex: 1; padding: 1rem; overflow-y: auto; overflow-x: auto; background: #000; position: relative;">
    
    <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.85rem; line-height: 1.6;">
      <thead>
        <tr style="border-bottom: 1px solid #333; color: #7f8c8d;">
          <th style="padding: 0.25rem 1rem; width: 140px;">Timestamp</th>
          <th style="padding: 0.25rem 1rem; width: 80px;">Level</th>
          <th style="padding: 0.25rem 1rem; width: 150px;">Host</th>
          <th style="padding: 0.25rem 1rem;">Message</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #1a1a1a; cursor: pointer;" onmouseover="this.style.background='#111'" onmouseout="this.style.background='transparent'">
          <td style="padding: 0.3rem 1rem; color: #45a29e;">16:42:01.109</td>
          <td style="padding: 0.3rem 1rem; color: #e74c3c; font-weight: bold;">ERROR</td>
          <td style="padding: 0.3rem 1rem; color: #7f8c8d;">web-node-04</td>
          <td style="padding: 0.3rem 1rem; color: #fff;">Connection refused: Timeout waiting for database pool.</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a; cursor: pointer;" onmouseover="this.style.background='#111'" onmouseout="this.style.background='transparent'">
           <td style="padding: 0.3rem 1rem; color: #45a29e;">16:42:01.002</td>
          <td style="padding: 0.3rem 1rem; color: #e74c3c; font-weight: bold;">ERROR</td>
          <td style="padding: 0.3rem 1rem; color: #7f8c8d;">web-node-03</td>
          <td style="padding: 0.3rem 1rem; color: #fff;">Failed to parse JSON response from external upstream API.</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a; cursor: pointer; background: rgba(231, 76, 60, 0.1);" onmouseover="this.style.background='rgba(231, 76, 60, 0.2)'" onmouseout="this.style.background='rgba(231, 76, 60, 0.1)'">
           <td style="padding: 0.3rem 1rem; color: #45a29e;">16:41:59.882</td>
          <td style="padding: 0.3rem 1rem; color: #e74c3c; font-weight: bold;">FATAL</td>
          <td style="padding: 0.3rem 1rem; color: #7f8c8d;">auth-svc-01</td>
          <td style="padding: 0.3rem 1rem; color: #ff9f43; font-weight: bold;">[CRITICAL] Redis connection lost. Cannot authenticate incoming requests.</td>
        </tr>
      </tbody>
    </table>

  </main>
</div>
{{< /demo >}}
