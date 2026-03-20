import { open } from '/aurora-docs/js/rx.js';

/**
 * Aurora Creationix RX Database Wrapper
 * Leverages the @creationix/rx REXC binary specification for zero-latency, 
 * zero-allocation JSON-like access over a mapped DataView!
 */
export class RouteDatabase {
  constructor(url = '/aurora-docs/data/airline_routes.rx') {
    this.url = url;
    this.root = null;
  }

  /**
   * Fetches the REXC binary stream and maps it to a native JS Proxy object.
   */
  async load() {
    if (this.root) return; // Prevent double load
    const response = await fetch(this.url);
    if (!response.ok) throw new Error(`Failed to load RX streaming component: ${response.status}`);
    
    // Convert to Uint8Array as demanded by Creationix/RX
    let buffer = new Uint8Array(await response.arrayBuffer());
    
    // The CLI encoder appends a POSIX newline \n (0x0A) to the output file.
    // Because RX reads right-to-left starting from the exact last byte, 
    // we must manually trim any trailing whitespace so it hits the actual root tag!
    while (buffer.length > 0 && buffer[buffer.length - 1] <= 32) {
      buffer = buffer.subarray(0, buffer.length - 1);
    }
    
    this.root = open(buffer);
  }

  /**
   * Translates the RX mapped node into the expected Aurora DB object format
   */
  getAirport(iata) {
    if (!this.root) return null;
    const node = this.root[iata];
    if (node) {
        return {
           lat: parseFloat(node.latitude || 0),
           lon: parseFloat(node.longitude || 0),
           country_code: node.country_code,
           continent: node.continent,
           name: node.name,
           routes: Array.from(node.routes || [])
        };
    }
    return null;
  }

  /**
   * Unpacks the entire REXC proxy into an eager Array map for intense UI combobox sorting
   */
  getAllDecodedAirports() {
    const list = [];
    // The Creationix/rx library intercepts the Proxy for...in iterator flawlessly
    for (const iata in this.root) {
        const node = this.root[iata];
        list.push({
           iata: iata,
           lat: parseFloat(node.latitude || 0),
           lon: parseFloat(node.longitude || 0),
           country_code: node.country_code,
           continent: node.continent,
           name: node.name,
           routes: Array.from(node.routes || [])
        });
    }
    return list;
  }
}

// Attach a global singleton fallback if running standalone indexer tasks
if (typeof window !== 'undefined') {
  window.RouteDatabase = RouteDatabase;
}
