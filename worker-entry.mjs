import path from "node:path";

// Cloudflare Workers (even with nodejs_compat) don't provide these Node CJS globals.
// Some Next/OpenNext internals (or optional deps) may reference them.
globalThis.__filename = globalThis.__filename || "/worker-entry.mjs";
globalThis.__dirname = globalThis.__dirname || path.dirname(globalThis.__filename);

let _handler;

/** Lazy-load the OpenNext handler after globals are set */
async function getHandler() {
  if (_handler) return _handler;
  const mod = await import("./.open-next/server-functions/default/handler.mjs");
  if (!mod || typeof mod.handler !== "function") {
    throw new Error("OpenNext handler export not found or not a function");
  }
  _handler = mod.handler;
  return _handler;
}

export default {
  async fetch(request, env, ctx) {
    const handler = await getHandler();
    return handler(request, env, ctx);
  },
};
