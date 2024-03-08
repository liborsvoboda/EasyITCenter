// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1C1Gg":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "17297baa59ba1819";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3NoK2":[function(require,module,exports) {
var _src = require("../../src");
var _helpers = require("../helpers");
var _colors = require("../../src/defaults/elements/colors");
const data1 = [
    (0, _helpers.genData)(50, 70, 95),
    (0, _helpers.genData)(50, 50, 65),
    (0, _helpers.genData)(50, 30, 45),
    (0, _helpers.genData)(50, 0, 25)
];
const lines1 = [
    {
        name: "Line 1",
        size: 1,
        dots: {
            type: "circle"
        }
    },
    {
        name: "Line 2",
        size: 1,
        dots: {
            type: "square"
        }
    },
    {
        name: "Line 3",
        size: 1,
        dots: {
            type: "triangle"
        }
    },
    {
        name: "Line 4",
        size: 1,
        dots: {
            type: "diamond"
        }
    }
];
(0, _src.lineChart)("#line-1", data1, {
    lines: lines1,
    height: 600,
    accuracy: 4,
    colors: [
        (0, _colors.defaultColors).lime,
        (0, _colors.defaultColors).blue,
        (0, _colors.defaultColors).violet,
        (0, _colors.defaultColors).orange
    ],
    boundaries: {
        minY: -10,
        maxY: 110
    },
    dots: {
        fill: "#fff",
        size: 4
    },
    title: {
        text: "The LineChart",
        align: "center",
        font: {
            lineHeight: 1
        }
    },
    axis: {
        x: {
            line: {
                count: 15
            },
            label: {
                count: 5,
                fixed: 0
            }
        },
        y: {
            line: {
                count: 20
            },
            label: {
                count: 10,
                fixed: 0
            }
        }
    },
    padding: {
        bottom: 60
    },
    legend: {
        margin: {
            top: 30
        }
    }
});
const data2 = [
    (0, _helpers.genData)(20, 0, 100),
    (0, _helpers.genData)(20, 0, 70),
    (0, _helpers.genData)(20, 0, 50)
];
const lines2 = [
    {
        name: "Line 1",
        size: 1,
        showLine: false,
        dots: {
            type: "dot",
            fill: "#fff",
            size: 3
        }
    },
    {
        name: "Line 2",
        size: 1,
        showLine: false,
        dots: {
            type: "square",
            fill: "#fff",
            size: 3
        }
    },
    {
        name: "Line 3",
        size: 1,
        dots: false
    }
];
(0, _src.lineChart)("#line-2", data2, {
    background: "#000",
    lines: lines2,
    height: 600,
    accuracy: 4,
    colors: [
        "red",
        "green",
        "blue"
    ],
    title: {
        text: "The LineChart :: disabled lines",
        align: "center",
        font: {
            lineHeight: 1
        }
    },
    axis: {
        x: {
            line: {
                count: 10
            },
            label: {
                count: 5,
                fixed: 0
            }
        },
        y: {
            line: {
                count: 10
            },
            label: {
                count: 5,
                fixed: 0
            }
        }
    },
    legend: {
        color: "#fff4db",
        vertical: true,
        position: "top-right",
        margin: {
            top: 40,
            right: 10
        },
        padding: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
        },
        border: {
            color: "#ffdc73"
        },
        dash: []
    },
    drawType: "curve"
});

},{"../../src":"8lqZg","../helpers":"bGsmW","../../src/defaults/elements/colors":"f35NF"}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _charts = require("./charts");
parcelHelpers.exportAll(_charts, exports);

},{"./charts":"dliHN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dliHN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chart", ()=>(0, _base.Chart));
parcelHelpers.export(exports, "AreaChart", ()=>(0, _area.AreaChart));
parcelHelpers.export(exports, "areaChart", ()=>(0, _area.areaChart));
parcelHelpers.export(exports, "BarChart", ()=>(0, _bar.BarChart));
parcelHelpers.export(exports, "barChart", ()=>(0, _bar.barChart));
parcelHelpers.export(exports, "BubbleChart", ()=>(0, _bubble.BubbleChart));
parcelHelpers.export(exports, "bubbleChart", ()=>(0, _bubble.bubbleChart));
parcelHelpers.export(exports, "HistogramChart", ()=>(0, _histogram.HistogramChart));
parcelHelpers.export(exports, "histogramChart", ()=>(0, _histogram.histogramChart));
parcelHelpers.export(exports, "LineChart", ()=>(0, _line.LineChart));
parcelHelpers.export(exports, "lineChart", ()=>(0, _line.lineChart));
parcelHelpers.export(exports, "PieChart", ()=>(0, _pie.PieChart));
parcelHelpers.export(exports, "pieChart", ()=>(0, _pie.pieChart));
parcelHelpers.export(exports, "StackedBarChart", ()=>(0, _stacked.StackedBarChart));
parcelHelpers.export(exports, "stackedBarChart", ()=>(0, _stacked.stackedBarChart));
parcelHelpers.export(exports, "Gauge", ()=>(0, _gauge.Gauge));
parcelHelpers.export(exports, "gauge", ()=>(0, _gauge.gauge));
parcelHelpers.export(exports, "Donut", ()=>(0, _donut.Donut));
parcelHelpers.export(exports, "donut", ()=>(0, _donut.donut));
parcelHelpers.export(exports, "Segment", ()=>(0, _segment.Segment));
parcelHelpers.export(exports, "segment", ()=>(0, _segment.segment));
parcelHelpers.export(exports, "CandlestickChart", ()=>(0, _candlestick.CandlestickChart));
parcelHelpers.export(exports, "candlestickChart", ()=>(0, _candlestick.candlestickChart));
var _base = require("./base");
var _area = require("./area");
var _bar = require("./bar");
var _bubble = require("./bubble");
var _histogram = require("./histogram");
var _line = require("./line");
var _pie = require("./pie");
var _stacked = require("./stacked");
var _gauge = require("./gauge");
var _donut = require("./donut");
var _segment = require("./segment");
var _candlestick = require("./candlestick");

},{"./base":"cyKts","./area":"biC8i","./bar":"44nZi","./bubble":"9dbPz","./histogram":"lrNc9","./line":"eeOgL","./pie":"iHvHK","./stacked":"amZnW","./gauge":"93KjW","./donut":"aAMVr","./segment":"d5Is9","./candlestick":"6pHiT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cyKts":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chart", ()=>Chart);
var _chart = require("../../defaults/chart");
var _merge = require("../../helpers/merge");
var _text = require("../../draw/text");
var _legend = require("../../mixins/legend");
var _tooltip = require("../../mixins/tooltip");
var _expandPadding = require("../../helpers/expand-padding");
class Chart {
    constructor(el, data = [], options = {}, type = "unknown"){
        if (typeof el === "string") this.el = document.querySelector(el);
        else if (el instanceof HTMLElement) this.el = el;
        if (!this.el) throw new Error("You must define an element or a selector of element for chart container!");
        this.options = (0, _merge.merge)({}, (0, _chart.defaultOptions), options);
        this.data = data;
        this.canvas = null;
        this.ctx = null;
        this.raf = null;
        this.tooltip = null;
        this.legendItems = [];
        this.chartType = type;
        this.rect = this.el.getBoundingClientRect();
        this.canvasRect = null;
        this.static = false;
        const that = this;
        this.proxy = new Proxy({}, {
            set (...args) {
                const result = Reflect.set(...args);
                that.raf = requestAnimationFrame(that.draw.bind(that));
                return result;
            }
        });
        if (this.options.border) this.el.style.border = `${this.options.border.width}px ${this.options.border.lineType} ${this.options.border.color}`;
        this.calcInternalValues();
        this.createCanvas();
        this.addEvents();
    }
    createCanvas() {
        this.canvas = document.createElement("canvas");
        this.el.innerHTML = "";
        this.el.style.overflow = "hidden";
        this.el.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.setCanvasSize();
        this.canvasRect = this.canvas.getBoundingClientRect();
    }
    setCanvasSize() {
        const o = this.options;
        this.canvas.style.height = this.height + "px";
        this.canvas.style.width = this.width + "px";
        this.canvas.width = o.dpi * this.width;
        this.canvas.height = o.dpi * this.height;
    }
    calcInternalValues() {
        let width, height;
        const o = this.options, padding = (0, _expandPadding.expandPadding)(o.padding);
        const rect = this.el.getBoundingClientRect();
        const { width: elWidth, height: elHeight } = rect;
        width = o.width.toString().includes("%") ? elWidth / 100 * parseInt(o.width) : +o.width;
        height = o.height.toString().includes("%") ? elHeight / 100 * parseInt(o.height) : +o.height;
        this.width = width;
        this.height = height;
        this.dpi = o.dpi;
        this.dpiHeight = this.dpi * height;
        this.dpiWidth = this.dpi * width;
        this.viewHeight = this.dpiHeight - (padding.top + padding.bottom);
        this.viewWidth = this.dpiWidth - (padding.left + padding.right);
        this.center = [
            this.dpiWidth / 2,
            this.dpiHeight / 2
        ];
        this.radius = Math.min(this.viewHeight, this.viewWidth) / 2;
    }
    title() {
        const title = this.options.title;
        const ctx = this.ctx;
        const magic = 5;
        let x;
        if (!title || !title.text) return;
        const { text, align, color, font } = title;
        switch(align){
            case "center":
                x = this.dpiWidth / 2;
                break;
            case "right":
                x = this.dpiWidth - magic;
                break;
            default:
                x = magic;
        }
        (0, _text.drawText)(ctx, text, [
            x,
            font.size + magic
        ], {
            align: title.align,
            color: title.color,
            stroke: title.color,
            font: title.font
        });
    }
    setBackground(bg) {
        if (bg) this.options.background = bg;
        this.ctx.fillStyle = this.options.background;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    draw() {
        this.clear();
        this.setBackground();
        this.title();
    }
    clear() {
        this.ctx.clearRect(0, 0, this.dpiWidth, this.dpiHeight);
    }
    setData(data, index, redraw = true) {
        if (typeof index !== "undefined") this.data[index].data = data;
        else this.data = data;
        if (redraw) this.resize();
    }
    setBoundaries(obj, redraw = true) {
        const grantedKeys = [
            "minX",
            "minY",
            "minZ",
            "maxX",
            "maxY",
            "maxZ",
            "min",
            "max"
        ];
        for(let k in obj)if (grantedKeys.includes(k)) {
            this[k] = obj[k];
            this.options.boundaries[k] = obj[k];
        }
        if (redraw) this.draw();
    }
    mouseMove(e) {
        const onHover = this.options.onHover;
        const { clientX: x, clientY: y } = e.changedTouches ? e.touches[0] : e;
        if (typeof onHover === "function") onHover.apply(null, [
            x,
            y
        ]);
        this.proxy.mouse = {
            x: x,
            y: y
        };
        if (e.cancelable) e.preventDefault();
    }
    mouseLeave() {
        const fn = this.options.onLeave;
        if (typeof fn === "function") fn.apply(null, []);
        this.proxy.mouse = null;
    }
    resize() {
        this.calcInternalValues();
        this.setCanvasSize();
        this.rect = this.el.getBoundingClientRect();
        this.canvasRect = this.canvas.getBoundingClientRect();
        this.draw();
    }
    addEvents() {
        const canvas = this.canvas;
        canvas.addEventListener("mousemove", this.mouseMove.bind(this));
        canvas.addEventListener("touchmove", this.mouseMove.bind(this), {
            passive: false
        });
        canvas.addEventListener("mouseleave", this.mouseLeave.bind(this));
        window.addEventListener("resize", this.resize.bind(this));
    }
    destroy() {
        const canvas = this.canvas;
        cancelAnimationFrame(this.raf);
        canvas.removeEventListener("mousemove", this.mouseMove.bind(this));
        canvas.removeEventListener("mouseleave", this.mouseLeave.bind(this));
        window.removeEventListener("resize", this.resize.bind(this));
    }
}
Object.assign(Chart.prototype, (0, _legend.MixinLegend));
Object.assign(Chart.prototype, (0, _tooltip.MixinTooltip));

},{"../../defaults/chart":"k5cvW","../../helpers/merge":"1bRax","../../draw/text":"9Q34i","../../mixins/legend":"b0KP6","../../mixins/tooltip":"dkGVH","../../helpers/expand-padding":"1hsxM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5cvW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOptions", ()=>defaultOptions);
var _border = require("./elements/border");
var _font = require("./elements/font");
var _title = require("./elements/title");
var _legend = require("./elements/legend");
var _tooltip = require("./elements/tooltip");
var _padding = require("./elements/padding");
var _margin = require("./elements/margin");
var _colors = require("./elements/colors");
const defaultOptions = {
    dpi: 1,
    height: 200,
    width: "100%",
    padding: {
        top: 40,
        left: 40,
        right: 40,
        bottom: 40
    },
    margin: (0, _margin.defaultMargin),
    background: "#fff",
    color: "#000",
    font: (0, _font.defaultFont),
    border: (0, _border.defaultBorder),
    title: (0, _title.defaultTitle),
    legend: (0, _legend.defaultLegend),
    tooltip: (0, _tooltip.defaultTooltip),
    boundaries: false,
    colors: Object.values((0, _colors.defaultColors)),
    animate: false,
    onDrawLabelY: null,
    onDrawLabelX: null,
    onTooltipShow: null,
    onHover: null,
    onLeave: null
};

},{"./elements/border":"g09wP","./elements/font":"aCeiV","./elements/title":"1XdvW","./elements/legend":"c30Sn","./elements/tooltip":"hce2J","./elements/padding":"3Hcur","./elements/margin":"4KAK4","./elements/colors":"f35NF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g09wP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultBorder", ()=>defaultBorder);
const defaultBorder = {
    width: 1,
    lineType: "solid",
    color: "#e3e3e3",
    radius: 0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aCeiV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultFont", ()=>defaultFont);
parcelHelpers.export(exports, "labelFont", ()=>labelFont);
parcelHelpers.export(exports, "titleFont", ()=>titleFont);
const defaultFont = {
    style: "normal",
    family: "Helvetica, sans-serif",
    size: 12,
    weight: "normal",
    lineHeight: 1.2,
    color: "#000"
};
const labelFont = Object.assign({}, defaultFont, {
    weight: "bold"
});
const titleFont = Object.assign({}, defaultFont, {
    weight: "bold",
    size: 24
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XdvW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultTitle", ()=>defaultTitle);
var _font = require("./font");
const defaultTitle = {
    display: true,
    align: "center",
    // start, center, end
    rtl: false,
    color: "#000",
    text: "",
    font: (0, _font.titleFont),
    padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    }
};

},{"./font":"aCeiV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c30Sn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultLegend", ()=>defaultLegend);
var _font = require("./font");
var _border = require("./border");
var _margin = require("./margin");
var _padding = require("./padding");
const defaultLegend = {
    rtl: false,
    margin: (0, _margin.defaultMargin),
    padding: (0, _padding.defaultPadding),
    font: (0, _font.labelFont),
    border: (0, _border.defaultBorder),
    dash: [],
    background: "#fff",
    vertical: false,
    position: "top-left" // top-left, top-right, bottom-left, bottom-right, top-center, bottom-center
};

},{"./font":"aCeiV","./border":"g09wP","./margin":"4KAK4","./padding":"3Hcur","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4KAK4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultMargin", ()=>defaultMargin);
const defaultMargin = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Hcur":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultPadding", ()=>defaultPadding);
const defaultPadding = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hce2J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultTooltip", ()=>defaultTooltip);
var _font = require("./font");
var _border = require("./border");
const defaultTooltip = {
    width: "auto",
    background: "#fff",
    color: "#000",
    font: (0, _font.defaultFont),
    border: (0, _border.defaultBorder),
    padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    },
    shadow: {
        shiftX: 2,
        shiftY: 2,
        blur: 4,
        stretch: 0,
        color: "rgba(0,0,0,.5)"
    }
};

},{"./font":"aCeiV","./border":"g09wP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f35NF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultColors", ()=>defaultColors);
const defaultColors = {
    aliceBlue: "#f0f8ff",
    antiqueWhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedAlmond: "#ffebcd",
    blue: "#0000ff",
    blueViolet: "#8a2be2",
    brown: "#a52a2a",
    burlyWood: "#deb887",
    cadetBlue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerBlue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkBlue: "#00008b",
    darkCyan: "#008b8b",
    darkEasyITCenterRod: "#b8860b",
    darkGray: "#a9a9a9",
    darkGreen: "#006400",
    darkKhaki: "#bdb76b",
    darkMagenta: "#8b008b",
    darkOliveGreen: "#556b2f",
    darkOrange: "#ff8c00",
    darkOrchid: "#9932cc",
    darkRed: "#8b0000",
    darkSalmon: "#e9967a",
    darkSeaGreen: "#8fbc8f",
    darkSlateBlue: "#483d8b",
    darkSlateGray: "#2f4f4f",
    darkTurquoise: "#00ced1",
    darkViolet: "#9400d3",
    deepPink: "#ff1493",
    deepSkyBlue: "#00bfff",
    dimGray: "#696969",
    dodgerBlue: "#1e90ff",
    fireBrick: "#b22222",
    floralWhite: "#fffaf0",
    forestGreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#DCDCDC",
    ghostWhite: "#F8F8FF",
    gold: "#ffd700",
    EasyITCenterRod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenYellow: "#adff2f",
    honeyDew: "#f0fff0",
    hotPink: "#ff69b4",
    indianRed: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderBlush: "#fff0f5",
    lawnGreen: "#7cfc00",
    lemonChiffon: "#fffacd",
    lightBlue: "#add8e6",
    lightCoral: "#f08080",
    lightCyan: "#e0ffff",
    lightEasyITCenterRodYellow: "#fafad2",
    lightGray: "#d3d3d3",
    lightGreen: "#90ee90",
    lightPink: "#ffb6c1",
    lightSalmon: "#ffa07a",
    lightSeaGreen: "#20b2aa",
    lightSkyBlue: "#87cefa",
    lightSlateGray: "#778899",
    lightSteelBlue: "#b0c4de",
    lightYellow: "#ffffe0",
    lime: "#00ff00",
    limeGreen: "#32dc32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumAquaMarine: "#66cdaa",
    mediumBlue: "#0000cd",
    mediumOrchid: "#ba55d3",
    mediumPurple: "#9370db",
    mediumSeaGreen: "#3cb371",
    mediumSlateBlue: "#7b68ee",
    mediumSpringGreen: "#00fa9a",
    mediumTurquoise: "#48d1cc",
    mediumVioletRed: "#c71585",
    midnightBlue: "#191970",
    mintCream: "#f5fffa",
    mistyRose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajoWhite: "#ffdead",
    navy: "#000080",
    oldLace: "#fdd5e6",
    olive: "#808000",
    oliveDrab: "#6b8e23",
    orange: "#ffa500",
    orangeRed: "#ff4500",
    orchid: "#da70d6",
    paleEasyITCenterRod: "#eee8aa",
    paleGreen: "#98fb98",
    paleTurquoise: "#afeeee",
    paleVioletRed: "#db7093",
    papayaWhip: "#ffefd5",
    peachPuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderBlue: "#b0e0e6",
    purple: "#800080",
    rebeccaPurple: "#663399",
    red: "#ff0000",
    rosyBrown: "#bc8f8f",
    royalBlue: "#4169e1",
    saddleBrown: "#8b4513",
    salmon: "#fa8072",
    sandyBrown: "#f4a460",
    seaGreen: "#2e8b57",
    seaShell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    slyBlue: "#87ceeb",
    slateBlue: "#6a5acd",
    slateGray: "#708090",
    snow: "#fffafa",
    springGreen: "#00ff7f",
    steelBlue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whiteSmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowGreen: "#9acd32"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1bRax":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */ parcelHelpers.export(exports, "merge", ()=>merge);
var _isObject = require("./is-object");
function merge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
    if ((0, _isObject.isObject)(target) && (0, _isObject.isObject)(source)) {
        for(const key in source)if ((0, _isObject.isObject)(source[key])) {
            if (!target[key]) Object.assign(target, {
                [key]: {}
            });
            merge(target[key], source[key]);
        } else Object.assign(target, {
            [key]: source[key]
        });
    }
    return merge(target, ...sources);
}

},{"./is-object":"3zY5D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zY5D":[function(require,module,exports) {
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject);
function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Q34i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawText", ()=>drawText);
const drawText = (ctx, text, [x, y], { align = "left", baseLine = "middle", color = "#000", stroke = "#000", font, angle = 0, translate = [
    0,
    0
] } = {})=>{
    const { style = "normal", weight = "normal", size = 12, lineHeight = 1, family = "sans-serif" } = font;
    let tX = 0, tY = 0;
    if (typeof translate === "number") tX = tY = translate;
    else if (Array.isArray(translate)) [tX, tY] = translate;
    ctx.save();
    ctx.beginPath();
    ctx.textAlign = align;
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.font = `${style} ${weight} ${size}px/${lineHeight} ${family}`;
    ctx.translate(tX, tY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.textBaseline = baseLine;
    const lines = text.toString().split("\n");
    lines.map((str, i)=>{
        ctx.fillText(str, x, y + y * i * lineHeight);
    });
    ctx.closePath();
    ctx.restore();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b0KP6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MixinLegend", ()=>MixinLegend);
var _isObject = require("../helpers/is-object");
var _getTextboxWidth = require("../helpers/get-textbox-width");
var _square = require("../draw/square");
var _text = require("../draw/text");
var _box = require("../draw/box");
var _expandPadding = require("../helpers/expand-padding");
var _expandMargin = require("../helpers/expand-margin");
const MixinLegend = {
    legend () {
        const o = this.options;
        return o.legend.vertical === true ? this.legendVertical() : this.legendHorizontal();
    },
    legendHorizontal () {
        const o = this.options, padding = (0, _expandPadding.expandPadding)(o.padding), legend = o.legend;
        const ctx = this.ctx;
        const items = this.legendItems;
        if (!legend || !(0, _isObject.isObject)(legend)) return;
        if (!items || !Array.isArray(items) || !items.length) return;
        const legendPadding = (0, _expandPadding.expandPadding)(legend.padding);
        const legendMargin = (0, _expandMargin.expandMargin)(legend.margin);
        let lh, x, y, magic = 5, box;
        let offset = 0;
        box = legend.font.size / 2;
        lh = legend.font.size * legend.font.lineHeight;
        y = padding.top + this.viewHeight + (legend.font.size + legendPadding.top + legendMargin.top);
        x = padding.left + legendPadding.left + legendMargin.left;
        for(let i = 0; i < items.length; i++){
            let [name, _, value] = items[i];
            offset += (0, _getTextboxWidth.getTextBoxWidth)(ctx, [
                [
                    legend.showValue ? `${name} - ${value}` : name
                ]
            ], {
                font: legend.font
            }) + box * 2 + magic;
        }
        offset = (this.viewWidth - offset) / 2;
        for(let i = 0; i < items.length; i++){
            let [name, color, value] = items[i];
            const nameWidth = (0, _getTextboxWidth.getTextBoxWidth)(ctx, [
                [
                    legend.showValue ? `${name} - ${value}` : name
                ]
            ], {
                font: legend.font
            });
            if (x + nameWidth > this.viewWidth) {
                x = padding.left + legendPadding.left + legendMargin.left;
                y += lh;
            }
            (0, _square.drawSquare)(ctx, [
                offset + x,
                y,
                box
            ], {
                color,
                fill: color
            });
            (0, _text.drawText)(ctx, legend.showValue ? `${name} - ${value}` : name, [
                offset + x + box + magic,
                y + box / 2
            ], {
                color: legend.font.color,
                stroke: legend.font.color,
                font: o.font
            });
            x += box + nameWidth + 20;
        }
    },
    legendVertical () {
        const o = this.options, legend = o.legend, font = legend.font ?? o.font;
        let lh, x, y, magic = 5, box = font.size / 2;
        const ctx = this.ctx;
        const items = this.legendItems;
        let textBoxWidth, textBoxHeight;
        const legendPadding = (0, _expandPadding.expandPadding)(legend.padding), legendMargin = (0, _expandMargin.expandMargin)(legend.margin);
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        if (!legend || !(0, _isObject.isObject)(legend)) return;
        if (!items || !Array.isArray(items) || !items.length) return;
        lh = font.size * font.lineHeight;
        textBoxWidth = (0, _getTextboxWidth.getTextBoxWidth)(ctx, items, {
            font
        }) + legendPadding.left + legendPadding.right + box * 3 + magic;
        textBoxHeight = items.length * lh + legendPadding.top + legendPadding.bottom + magic;
        if (legend.position === "top-left") {
            x = legendPadding.left + legendMargin.left;
            y = legendPadding.top + legendMargin.top;
        } else if (legend.position === "top-right") {
            x = this.dpiWidth - textBoxWidth - legendMargin.right - padding.right;
            y = legendPadding.top + legendMargin.top;
        } else if (legend.position === "bottom-left") {
            x = legendPadding.left + legendMargin.left;
            y = this.dpiHeight - textBoxHeight - legendPadding.bottom - legendMargin.bottom;
        } else {
            x = this.dpiWidth - textBoxWidth - legendMargin.right - legendPadding.right;
            y = this.dpiHeight - textBoxHeight - legendPadding.bottom - legendMargin.bottom;
        }
        (0, _box.drawBox)(ctx, [
            x,
            y,
            textBoxWidth,
            textBoxHeight
        ], {
            color: legend.background,
            dash: legend.dash,
            size: legend.border.width,
            borderColor: legend.border.color
        });
        x += box + magic + legendPadding.left;
        y += box + magic + legendPadding.top;
        for(let i = 0; i < items.length; i++){
            let [name, color, value] = items[i];
            (0, _square.drawSquare)(ctx, [
                x,
                y,
                box
            ], {
                color,
                fill: color
            });
            (0, _text.drawText)(ctx, legend.showValue ? `${name} - ${value}` : name, [
                x + box + magic,
                y + 1
            ], {
                color: legend.font.color,
                stroke: legend.font.color,
                font: legend.font
            });
            y += lh;
        }
    }
};

},{"../helpers/is-object":"3zY5D","../helpers/get-textbox-width":"bpHOo","../draw/square":"9V4FA","../draw/text":"9Q34i","../draw/box":"j4NTr","../helpers/expand-padding":"1hsxM","../helpers/expand-margin":"bfUic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpHOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTextBoxWidth", ()=>getTextBoxWidth);
const getTextBoxWidth = (ctx, items, { font = null })=>{
    let size = 0, w;
    ctx.save();
    if (font) {
        const { style = "normal", weight = "normal", size = 12, lineHeight = 1.2, family = "sans-serif" } = font;
        ctx.font = `${style} ${weight} ${size}px/${lineHeight} ${family}`;
    }
    for(let i = 0; i < items.length; i++){
        w = ctx.measureText(items[i][0]).width;
        if (w > size) size = w;
    }
    ctx.restore();
    return size;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9V4FA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawSquare", ()=>drawSquare);
const drawSquare = (ctx, [x, y, r], { color = "#000", fill = "#fff", size = 1, dash = [] } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash(dash);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.fillStyle = fill;
    ctx.rect(x - r, y - r, r * 2, r * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4NTr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawBox", ()=>drawBox);
const drawBox = (ctx, [x, y, w, h], { color = "#fff", borderColor = "#000", dash = [], size = 1 } = {})=>{
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.fillStyle = color;
    ctx.setLineDash(dash);
    ctx.lineWidth = size;
    ctx.clearRect(x, y, w, h);
    ctx.fillRect(x, y, w, h);
    if (size) ctx.strokeRect(x, y, w, h);
    ctx.closePath();
    ctx.restore();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hsxM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expandPadding", ()=>expandPadding);
const expandPadding = (padding)=>{
    if (typeof padding === "number") return {
        top: padding,
        left: padding,
        right: padding,
        bottom: padding
    };
    return padding;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfUic":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expandMargin", ()=>expandMargin);
const expandMargin = (margin)=>{
    if (typeof margin === "number") return {
        top: margin,
        left: margin,
        right: margin,
        bottom: margin
    };
    return margin;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dkGVH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MixinTooltip", ()=>MixinTooltip);
var _expandPadding = require("../helpers/expand-padding");
const MixinTooltip = {
    showTooltip (data, graph) {
        const o = this.options;
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }
        if (!o.tooltip) return;
        let { x, y } = this.proxy.mouse;
        const tooltip = document.createElement("div");
        const onShow = o.onTooltipShow;
        const font = o.tooltip.font;
        const shadow = o.tooltip.shadow;
        const border = o.tooltip.border;
        const padding = (0, _expandPadding.expandPadding)(o.tooltip.padding);
        tooltip.style.position = "fixed";
        tooltip.style.border = `${border.width}px ${border.lineType} ${border.color}`;
        tooltip.style.borderRadius = `${border.radius}`;
        tooltip.style.padding = `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`;
        tooltip.style.background = `${o.tooltip.background}`;
        tooltip.style.font = `${font.style} ${font.weight} ${font.size}px/${font.lineHeight} ${font.family}`;
        tooltip.style.boxShadow = `${shadow.shiftX}px ${shadow.shiftY}px ${shadow.blur}px ${shadow.color}`;
        tooltip.innerHTML = onShow && typeof onShow === "function" ? onShow.apply(null, [
            data,
            graph
        ]) : data;
        document.querySelector("body").appendChild(tooltip);
        tooltip.style.top = `${y - tooltip.clientHeight - 15}px`;
        tooltip.style.left = `${x - tooltip.clientWidth / 2 - 5}px`;
        this.tooltip = tooltip;
    }
};

},{"../helpers/expand-padding":"1hsxM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"biC8i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AreaChart", ()=>AreaChart);
parcelHelpers.export(exports, "areaChart", ()=>areaChart);
var _area = require("../../defaults/area");
var _base = require("../base");
var _minMax = require("../../helpers/min-max");
var _circle = require("../../draw/circle");
var _square = require("../../draw/square");
var _triangle = require("../../draw/triangle");
var _diamond = require("../../draw/diamond");
var _merge = require("../../helpers/merge");
var _expandPadding = require("../../helpers/expand-padding");
var _area1 = require("../../draw/area");
var _cross = require("../../mixins/cross");
var _axis = require("../../mixins/axis");
var _addPoint = require("../../mixins/add-point");
var _line = require("../../draw/line");
var _arrows = require("../../mixins/arrows");
var _isObject = require("../../helpers/is-object");
class AreaChart extends (0, _base.Chart) {
    constructor(el, data = [], options = {}){
        super(el, data, (0, _merge.merge)({}, (0, _area.defaultAreaChartOptions), options), "area");
        this.coords = {};
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.legendItems = [];
        const legend = this.options.legend;
        const areas = this.options.areas;
        const colors = this.options.colors;
        if (legend) for(let i = 0; i < this.data.length; i++)this.legendItems.push([
            areas[i].name,
            colors[i]
        ]);
        this.calcMinMax();
        this.resize();
    }
    calcMinMax() {
        const o = this.options;
        let a = [];
        for (let _data of this.data){
            if (!Array.isArray(_data)) continue;
            for (const [x, y] of _data)a.push([
                x,
                y
            ]);
        }
        const [minX, maxX] = (0, _minMax.minMax)(a, "x");
        const [minY, maxY] = (0, _minMax.minMax)(a, "y");
        this.minX = o.boundaries && !isNaN(o.boundaries.minX) ? o.boundaries.minX : minX;
        this.maxX = o.boundaries && !isNaN(o.boundaries.maxX) ? o.boundaries.maxX : maxX;
        this.minY = o.boundaries && !isNaN(o.boundaries.minY) ? o.boundaries.minY : minY;
        this.maxY = o.boundaries && !isNaN(o.boundaries.maxY) ? o.boundaries.maxY : maxY;
        if (isNaN(this.minX)) this.minX = 0;
        if (isNaN(this.maxX)) this.maxX = 100;
        if (isNaN(this.minY)) this.minX = 0;
        if (isNaN(this.maxY)) this.maxX = 100;
    }
    calcRatio() {
        this.ratioX = this.viewWidth / (this.maxX === this.minX ? this.maxX : this.maxX - this.minX);
        this.ratioY = this.viewHeight / (this.maxY === this.minY ? this.maxY : this.maxY - this.minY);
    }
    areas() {
        const o = this.options, padding = (0, _expandPadding.expandPadding)(o.padding);
        const ctx = this.ctx;
        let coords;
        if (!this.data || !this.data.length) return;
        for(let i = 0; i < this.data.length; i++){
            const area = o.areas[i];
            const data = this.data[i];
            const color = area.color ?? o.colors[i];
            const fill = area.fill ?? color;
            coords = [];
            coords.push([
                padding.left,
                this.viewHeight + padding.top,
                0,
                0
            ]);
            for (const [x, y] of data){
                let _x = Math.floor((x - this.minX) * this.ratioX + padding.left);
                let _y = Math.floor(this.viewHeight + padding.top - (y - this.minY) * this.ratioY);
                coords.push([
                    _x,
                    _y,
                    x,
                    y
                ]);
            }
            coords.push([
                coords[coords.length - 1][0],
                this.viewHeight + padding.top,
                0,
                0
            ]);
            (0, _area1.drawArea)(ctx, coords, {
                color,
                fill,
                size: area.size
            });
            let dots = area.dots ? area.dots : {
                type: "dot" // dot, square, triangle
            };
            let opt = {
                color: dots.color ?? color,
                fill: dots.fill ?? color,
                radius: dots.size ?? 4
            };
            let drawPointFn;
            switch(dots.type){
                case "square":
                    drawPointFn = (0, _square.drawSquare);
                    break;
                case "triangle":
                    drawPointFn = (0, _triangle.drawTriangle);
                    break;
                case "diamond":
                    drawPointFn = (0, _diamond.drawDiamond);
                    break;
                default:
                    drawPointFn = (0, _circle.drawCircle);
            }
            if (area.dots && o.showDots !== false) coords.map(([x, y], index)=>{
                if (index && index < coords.length - 1) drawPointFn(ctx, [
                    x,
                    y,
                    opt.radius
                ], opt);
            });
            this.coords[area.name] = {
                area,
                coords,
                drawPointFn,
                opt
            };
            coords.shift();
            coords.pop();
            if (area.showLines !== false) (0, _line.drawLine)(ctx, coords, {
                color,
                fill,
                size: area.size
            });
        }
    }
    floatPoint() {
        const o = this.options;
        const ctx = this.ctx;
        const rect = this.canvas.getBoundingClientRect();
        let tooltip = false;
        if (!this.data || !this.data.length) return;
        if (!this.proxy.mouse) return;
        let { x, y } = this.proxy.mouse;
        const mx = x - rect.left;
        const my = y - rect.top;
        for(const name in this.coords){
            const item = this.coords[name];
            const drawPointFn = item.drawPointFn;
            const opt = item.opt;
            for (const [px, py, _x, _y] of item.coords){
                const accuracy = +(o.accuracy || opt.radius);
                const lx = px - accuracy, rx = px + accuracy;
                const ly = py - accuracy, ry = py + accuracy;
                if (mx > lx && mx < rx && o.hoverMode !== "default") drawPointFn(ctx, [
                    px,
                    py,
                    opt.radius
                ], {
                    color: opt.color,
                    fill: opt.fill
                });
                if (mx > lx && mx < rx && my > ly && my < ry) {
                    if (o.hoverMode === "default") drawPointFn(ctx, [
                        px,
                        py,
                        opt.radius * 2
                    ], {
                        color: opt.color,
                        fill: opt.fill
                    });
                    if (o.tooltip) {
                        this.showTooltip([
                            _x,
                            _y
                        ], item.graph);
                        tooltip = true;
                    }
                    break;
                }
            }
            if (!tooltip && this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;
            }
        }
    }
    add(index, [x, y], shift, align) {
        this.addPoint(index, [
            x,
            y
        ], shift);
        this.minX = this.data[index][0][0];
        this.maxX = x;
        if (align) {
            if ((0, _isObject.isObject)(align)) this.align(align);
        } else {
            if (y < this.minY) this.minY = y;
            if (y > this.maxY) this.maxY = y;
        }
        this.resize();
    }
    align({ minX, maxX, minY, maxY }) {
        let a = [];
        for (let _data of this.data){
            if (!Array.isArray(_data)) continue;
            for (const [x, y] of _data)a.push([
                x,
                y
            ]);
        }
        const [_minX, _maxX] = (0, _minMax.minMax)(a, "x");
        const [_minY, _maxY] = (0, _minMax.minMax)(a, "y");
        if (minX) this.minX = _minX;
        if (minY) this.minY = _minY;
        if (maxX) this.maxX = _maxX;
        if (maxY) this.maxY = _maxY;
    }
    draw() {
        super.draw();
        this.calcRatio();
        this.axisXY();
        this.arrows();
        this.areas();
        this.floatPoint();
        this.cross();
        this.legend();
    }
}
Object.assign(AreaChart.prototype, (0, _cross.MixinCross));
Object.assign(AreaChart.prototype, (0, _axis.MixinAxis));
Object.assign(AreaChart.prototype, (0, _addPoint.MixinAddPoint));
Object.assign(AreaChart.prototype, (0, _arrows.MixinArrows));
const areaChart = (el, data, options)=>new AreaChart(el, data, options);

},{"../../defaults/area":"iNHHK","../base":"cyKts","../../helpers/min-max":"lds97","../../draw/circle":"8324j","../../draw/square":"9V4FA","../../draw/triangle":"lSMEn","../../draw/diamond":"385Cg","../../helpers/merge":"1bRax","../../helpers/expand-padding":"1hsxM","../../draw/area":"khtrk","../../mixins/cross":"a7liY","../../mixins/axis":"b02Nt","../../mixins/add-point":"9pVEG","../../draw/line":"2jBul","../../mixins/arrows":"l8X2M","../../helpers/is-object":"3zY5D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNHHK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultAreaChartOptions", ()=>defaultAreaChartOptions);
var _axis = require("./elements/axis");
var _cross = require("./elements/cross");
var _arrow = require("./elements/arrow");
const defaultAreaChartOptions = {
    axis: (0, _axis.defaultAxis),
    cross: (0, _cross.defaultCross),
    showDots: true,
    accuracy: 2,
    arrows: (0, _arrow.defaultArrows)
};

},{"./elements/axis":"8h06E","./elements/cross":"98WrO","./elements/arrow":"b6MIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8h06E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultAxis", ()=>defaultAxis);
var _font = require("./font");
const line = {
    color: "#e3e3e3",
    size: 1,
    dash: [],
    shortLineSize: 5
};
const label = {
    color: "#000",
    font: (0, _font.labelFont),
    count: 5,
    fixed: false,
    opposite: false,
    angle: 0,
    align: "center",
    shift: {
        x: 0,
        y: 0
    },
    skip: 0,
    showLine: true,
    showLabel: true,
    showMin: true,
    step: "auto"
};
const axis = {
    line,
    label
};
const defaultAxis = {
    x: axis,
    y: {
        ...axis,
        label: {
            ...label,
            align: "right"
        }
    }
};

},{"./font":"aCeiV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98WrO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultCross", ()=>defaultCross);
const defaultCross = {
    size: 1,
    color: "#bbb",
    dash: [
        5,
        3
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6MIx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultArrows", ()=>defaultArrows);
const defaultArrow = {
    color: "#7d7d7d",
    size: 1,
    dash: [],
    factorX: 5,
    factorY: 5,
    outside: 0
};
const defaultArrows = {
    x: defaultArrow,
    y: defaultArrow
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lds97":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "minMax", ()=>minMax);
parcelHelpers.export(exports, "minMaxLinear", ()=>minMaxLinear);
const minMax = (data = [], by = "x")=>{
    let min, max, v;
    let index;
    if (typeof by === "number") index = by;
    else switch(by.toString().toLowerCase()){
        case "y":
            index = 1;
            break;
        case "z":
            index = 2;
            break;
        default:
            index = 0;
    }
    for (const _ of data){
        v = _[index];
        if (isNaN(min) || min > v) min = v;
        if (isNaN(max) || max < v) max = v;
    }
    return [
        min,
        max
    ];
};
const minMaxLinear = (data = [])=>{
    let min, max;
    min = Math.min.apply(null, data);
    max = Math.max.apply(null, data);
    return [
        min,
        max
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8324j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawCircle", ()=>drawCircle);
const drawCircle = (ctx, [x, y, r], { color = "#000", fill = "#fff", size = 1 } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash([]);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.fillStyle = fill;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSMEn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawTriangle", ()=>drawTriangle);
const drawTriangle = (ctx, [x, y, r], { color = "#000", fill = "#fff", size = 1 } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash([]);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.fillStyle = fill;
    ctx.moveTo(x, y - r);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.lineTo(x, y - r);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"385Cg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawDiamond", ()=>drawDiamond);
const drawDiamond = (ctx, [x, y, r], { color = "#000", fill = "#fff", size = 1 } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash([]);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.fillStyle = fill;
    ctx.moveTo(x, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x - r, y);
    ctx.lineTo(x, y - r);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khtrk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawArea", ()=>drawArea);
const drawArea = (ctx, coords = [], { color = "#000", fill = "#000", size = 1, dash = [] } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash(dash);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.fillStyle = fill;
    coords.map(([x, y])=>{
        ctx.lineTo(x, y);
    });
    ctx.lineTo(coords[0][0], coords[0][1]);
    ctx.fill();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7liY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MixinCross", ()=>MixinCross);
var _expandPadding = require("../helpers/expand-padding");
const MixinCross = {
    cross () {
        const o = this.options, cross = o.cross;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        const ctx = this.ctx;
        const rect = this.canvas.getBoundingClientRect();
        if (!o.cross || o.cross && !this.proxy.mouse) return;
        let { x, y } = this.proxy.mouse;
        x -= rect.left;
        y -= rect.top;
        if (x - padding.left + 1 < 0 || x > this.viewWidth + padding.left + 1) return;
        if (y - padding.top + 1 < 0 || y > this.viewHeight + padding.top + 1) return;
        ctx.beginPath();
        ctx.setLineDash(o.cross.dash);
        ctx.lineWidth = cross.size;
        ctx.strokeStyle = cross.color;
        // vertical line
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, this.viewHeight + padding.top);
        // Horizontal line
        ctx.moveTo(padding.left, y);
        ctx.lineTo(this.viewWidth + padding.left, y);
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
};

},{"../helpers/expand-padding":"1hsxM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b02Nt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MixinAxis", ()=>MixinAxis);
var _vector = require("../draw/vector");
var _text = require("../draw/text");
var _expandPadding = require("../helpers/expand-padding");
var _roundJs = require("../helpers/round.js");
const MixinAxis = {
    axisX () {
        const ctx = this.ctx, o = this.options;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        if (!o.axis.x) return;
        const axis = o.axis.x, label = axis.label, line = axis.line, arrow = axis.arrow;
        const font = (label && label.font) ?? o.font;
        const lFactor = 10 ** (("" + this.maxX).length - 2);
        const lMax = (0, _roundJs.ceil)(this.maxX, lFactor);
        const labelStep = label.step === "auto" ? label.count ? (this.maxX - this.minX) / label.count : 0 : label.step ? label.step : label.count ? Math.ceil(lMax / label.count) : 0;
        let labelValue, value, k, x, y, labelY, shortLineSize = line.shortLineSize ?? 0;
        x = padding.left;
        y = padding.top;
        labelY = padding.top + this.viewHeight + font.size + 5;
        value = this.minX;
        k = 0;
        for(let i = 0; i <= label.count; i++){
            labelValue = typeof label.fixed === "number" ? value.toFixed(label.fixed) : value;
            if (typeof o.onDrawLabelX === "function") labelValue = o.onDrawLabelX.apply(null, [
                value
            ]);
            if (label.showLine) (0, _vector.drawVector)(ctx, [
                x,
                y,
                x,
                y + this.viewHeight
            ], {
                color: line.color,
                size: line.size,
                dash: line.dash
            });
            if (label.skip && k !== label.skip) k++;
            else {
                k = 1;
                if (label.showLabel && !(!i && !label.showMin)) {
                    // short line
                    (0, _vector.drawVector)(ctx, [
                        x,
                        this.viewHeight + padding.top - shortLineSize,
                        x,
                        this.viewHeight + padding.top + shortLineSize
                    ], {
                        color: arrow && arrow.color ? arrow.color : line.color
                    });
                    // label
                    (0, _text.drawText)(ctx, labelValue.toString(), [
                        0,
                        0
                    ], {
                        color: label.color ?? o.color,
                        align: label.align,
                        font,
                        translate: [
                            x + (label.shift.x ?? 0),
                            labelY + (label.shift.y ?? 0)
                        ],
                        angle: label.angle
                    });
                }
            }
            value += labelStep;
            x = padding.left + (value - this.minX) * this.ratioX;
        }
    },
    axisY () {
        const ctx = this.ctx, o = this.options;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        if (!o.axis.y) return;
        const axis = o.axis.y, label = axis.label, line = axis.line, arrow = axis.arrow;
        const font = (label && label.font) ?? o.font;
        const lFactor = 10 ** (("" + this.maxY).length - 2);
        const lMax = (0, _roundJs.ceil)(this.maxY, lFactor);
        const labelStep = label.step === "auto" ? label.count ? (this.maxY - this.minY) / label.count : 0 : label.step ? label.step : label.count ? Math.ceil(lMax / label.count) : 0;
        let labelValue, value, k, x, y, labelX, shortLineX;
        const shortLineSize = line.shortLineSize ?? 0;
        x = padding.left;
        labelX = padding.left;
        y = this.viewHeight + padding.top;
        value = this.minY;
        k = 0;
        if (label.opposite) {
            labelX += this.viewWidth + 10 + shortLineSize;
            shortLineX = padding.left + this.viewWidth;
            label.align = "left";
        } else {
            labelX -= 10;
            shortLineX = x - shortLineSize;
        }
        for(let i = 0; i < label.count + 1; i++){
            labelValue = typeof label.fixed === "number" ? value.toFixed(label.fixed) : value;
            if (typeof o.onDrawLabelY === "function") labelValue = o.onDrawLabelY.apply(null, [
                value
            ]);
            if (label.showLine) (0, _vector.drawVector)(ctx, [
                x,
                y,
                this.viewWidth + padding.left,
                y
            ], {
                color: line.color,
                size: line.size,
                dash: line.dash
            });
            if (i !== 0 && label.skip && k !== label.skip) k++;
            else {
                k = 1;
                if (label.showLabel && !(!i && !label.showMin)) {
                    // short line
                    (0, _vector.drawVector)(ctx, [
                        shortLineX,
                        y,
                        shortLineX + shortLineSize * 2,
                        y
                    ], {
                        color: arrow && arrow.color ? arrow.color : line.color
                    });
                    (0, _text.drawText)(ctx, labelValue.toString(), [
                        0,
                        0
                    ], {
                        color: (label && label.color) ?? o.color,
                        align: label.align,
                        font,
                        translate: [
                            labelX + (label.shift.x ?? 0),
                            y + 1 + (label.shift.y ?? 0)
                        ],
                        angle: label.angle
                    });
                }
            }
            value += labelStep;
            y = padding.top + this.viewHeight - (value - this.minY) * this.ratioY;
        }
    },
    axisXY () {
        if (!this.options.axis) return;
        this.axisX();
        this.axisY();
        return this;
    }
};

},{"../draw/vector":"9BjpA","../draw/text":"9Q34i","../helpers/expand-padding":"1hsxM","../helpers/round.js":"bGDj3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9BjpA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawVector", ()=>drawVector);
const drawVector = (ctx, [x1, y1, x2, y2], { color = "#000", size = 1, dash = [] } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash(dash);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGDj3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "round", ()=>round);
parcelHelpers.export(exports, "ceil", ()=>ceil);
parcelHelpers.export(exports, "floor", ()=>floor);
const round = (a, b)=>Math.round(a / b) * b;
const ceil = (a, b)=>Math.ceil(a / b) * b;
const floor = (a, b)=>Math.floor(a / b) * b;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9pVEG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MixinAddPoint", ()=>MixinAddPoint);
const MixinAddPoint = {
    addPoint (index, point, shift = false) {
        const o = this.options;
        let data;
        if (!this.data) {
            this.data = [];
            for(let i = 0; i < index + 1; i++)this.data[i] = [];
        }
        data = this.data[index];
        if (shift && data.length) {
            if (!o.graphSize) data = data.slice(1);
            else if (data.length >= o.graphSize) data = data.slice(1);
        }
        this.data[index] = data;
        this.data[index].push(point);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jBul":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawLine", ()=>drawLine);
const drawLine = (ctx, coords = [], { color = "#000", size = 1, dash = [] } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash(dash);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    coords.map(([x, y])=>{
        ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8X2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MixinArrows", ()=>MixinArrows);
var _expandPadding = require("../helpers/expand-padding");
var _arrowX = require("../draw/arrow-x");
var _arrowY = require("../draw/arrow-y");
const MixinArrows = {
    arrowX () {
        const o = this.options, ctx = this.ctx;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        if (!o.arrows.x) return;
        const arrow = o.arrows.x;
        const x1 = padding.left, y1 = this.viewHeight + padding.top;
        const x2 = padding.left + this.viewWidth + arrow.outside, y2 = y1;
        (0, _arrowX.drawArrowX)(ctx, [
            x1,
            y1,
            x2,
            y2,
            arrow.factorX,
            arrow.factorY
        ], {
            color: arrow.color,
            size: arrow.size,
            dash: arrow.dash
        });
    },
    arrowY () {
        const o = this.options, ctx = this.ctx;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        if (!o.arrows.y) return;
        const arrow = o.arrows.y;
        const x = padding.left, y1 = this.viewHeight + padding.top;
        const y2 = padding.top - arrow.outside;
        (0, _arrowY.drawArrowY)(ctx, [
            x,
            y1,
            x,
            y2,
            arrow.factorX,
            arrow.factorY
        ], {
            color: arrow.color,
            size: arrow.size,
            dash: arrow.dash
        });
    },
    arrows () {
        if (!this.options.arrows) return;
        this.arrowX();
        this.arrowY();
        return this;
    }
};

},{"../helpers/expand-padding":"1hsxM","../draw/arrow-x":"3xtyW","../draw/arrow-y":"9EeO8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xtyW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawArrowX", ()=>drawArrowX);
const drawArrowX = (ctx, [x1, y1, x2, y2, factorX, factorY], { color = "#000", dash = [], size = 1 } = {})=>{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.setLineDash(dash);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - factorX, y2 - factorY);
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - factorX, y2 + factorY);
    ctx.stroke();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9EeO8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawArrowY", ()=>drawArrowY);
const drawArrowY = (ctx, [x1, y1, x2, y2, factorX, factorY], { color = "#000", dash = [], size = 1 } = {})=>{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.setLineDash(dash);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - factorX, y2 + factorY);
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 + factorX, y2 + factorY);
    ctx.stroke();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44nZi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BarChart", ()=>BarChart);
parcelHelpers.export(exports, "barChart", ()=>barChart);
var _base = require("../base");
var _merge = require("../../helpers/merge");
var _bar = require("../../defaults/bar");
var _minMax = require("../../helpers/min-max");
var _text = require("../../draw/text");
var _rect = require("../../draw/rect");
var _expandPadding = require("../../helpers/expand-padding");
var _axis = require("../../mixins/axis");
var _arrows = require("../../mixins/arrows");
class BarChart extends (0, _base.Chart) {
    constructor(el, data, options){
        super(el, data, (0, _merge.merge)({}, (0, _bar.defaultBarChartOptions), options), "bar");
        this.groups = 0;
        this.barWidth = 0;
        this.maxY = 0;
        this.maxX = 0;
        this.minY = 0;
        this.minX = 0;
        this.viewAxis = this.options.dataAxisX ? this.viewHeight : this.viewWidth;
        this.legendItems = [];
        const legend = this.options.legend;
        if (legend && legend.titles && legend.titles.length) for(let i = 0; i < legend.titles.length; i++)this.legendItems.push([
            legend.titles[i],
            this.options.colors[i]
        ]);
        this.calcMinMax();
        this.resize();
    }
    calcMinMax() {
        const o = this.options;
        let a = [], length = 0;
        for(let k in this.data)a = [].concat(a, this.data[k]);
        this.groups = this.data.length;
        const [, max] = (0, _minMax.minMaxLinear)(a);
        this.maxX = this.maxY = o.boundaries && !isNaN(o.boundaries.max) ? o.boundaries.max : max;
        if (isNaN(this.maxX)) this.maxX = 100;
        if (isNaN(this.maxY)) this.maxX = 100;
    }
    calcRatio() {
        this.ratioX = this.ratioY = this.ratio = (this.options.dataAxisX ? this.viewWidth : this.viewHeight) / (this.maxY === this.minY ? this.maxY : this.maxY - this.minY);
    }
    calcBarWidth() {
        const o = this.options;
        let bars = 0;
        for(let i = 0; i < this.data.length; i++)bars += Array.isArray(this.data[i]) ? this.data[i].length : 1;
        let availableSpace = (o.dataAxisX ? this.viewHeight : this.viewWidth) - (this.data.length + 1) * o.groupDistance // space between groups
         - (bars - this.data.length) * o.barDistance; // space between bars
        this.barWidth = availableSpace / bars;
    }
    bars(axisX = false) {
        const o = this.options, bars = o.bars;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        const ctx = this.ctx;
        const rect = this.canvas.getBoundingClientRect();
        let px, py, mx, my, tooltip = false;
        if (!this.data || !this.data.length) return;
        if (this.proxy.mouse) {
            mx = this.proxy.mouse.x - rect.left;
            my = this.proxy.mouse.y - rect.top;
        }
        px = axisX ? padding.left : padding.left + o.groupDistance;
        py = axisX ? padding.top + o.groupDistance : this.viewHeight + padding.top;
        for(let g = 0; g < this.data.length; g++){
            const graph = this.data[g];
            const data = Array.isArray(graph) ? graph : [
                graph
            ];
            const labelColor = o.labels.color;
            let name = bars[g];
            let groupWidth = 0;
            for(let i = 0; i < data.length; i++){
                let delta = data[i] * this.ratio;
                let color = data.length === 1 ? o.colors[g] : o.colors[i];
                const options = {
                    color,
                    fill: color
                };
                const coords = axisX ? [
                    px,
                    py,
                    px + delta - padding.right,
                    this.barWidth
                ] : [
                    px,
                    py - delta,
                    this.barWidth - 1,
                    delta
                ];
                (0, _rect.drawRect)(ctx, coords, options);
                const borderX = axisX ? [
                    px,
                    px + delta
                ] : [
                    px,
                    px + this.barWidth - 1
                ];
                const borderY = axisX ? [
                    py,
                    py + this.barWidth - 1
                ] : [
                    py - delta,
                    py
                ];
                if (mx > borderX[0] && mx < borderX[1] && my > borderY[0] && my < borderY[1]) {
                    (0, _rect.drawRect)(ctx, coords, {
                        ...options,
                        fill: "rgba(255,255,255,.3)"
                    });
                    if (o.tooltip) {
                        this.showTooltip([
                            o.legend.titles ? o.legend.titles[i] : name,
                            data[i]
                        ], graph);
                        tooltip = true;
                    }
                }
                groupWidth += this.barWidth + o.barDistance;
                if (axisX) py += o.barDistance + this.barWidth;
                else px += o.barDistance + this.barWidth;
            }
            if (axisX) py -= o.barDistance;
            else px -= o.barDistance;
            groupWidth -= o.barDistance;
            if (typeof o.onDrawLabel === "function") name = o.onDrawLabel.apply(null, name);
            (0, _text.drawText)(ctx, name, [
                0,
                0
            ], {
                align: "center",
                color: labelColor,
                stroke: labelColor,
                font: o.font,
                angle: axisX ? 90 : 0,
                translate: axisX ? [
                    px - 20,
                    py - groupWidth / 2
                ] : [
                    px - groupWidth / 2,
                    py + 20
                ]
            });
            if (axisX) py += o.groupDistance;
            else px += o.groupDistance;
        }
        if (!tooltip && this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }
        this.static = true;
    }
    draw() {
        const o = this.options;
        super.draw();
        this.calcBarWidth();
        this.calcRatio();
        if (o.dataAxisX) this.axisX();
        else this.axisY();
        this.bars(o.dataAxisX);
        this.arrows();
        this.legend();
    }
}
Object.assign(BarChart.prototype, (0, _axis.MixinAxis));
Object.assign(BarChart.prototype, (0, _arrows.MixinArrows));
const barChart = (el, data, options)=>new BarChart(el, data, options);

},{"../base":"cyKts","../../helpers/merge":"1bRax","../../defaults/bar":"bkpO4","../../helpers/min-max":"lds97","../../draw/text":"9Q34i","../../draw/rect":"8wOwN","../../helpers/expand-padding":"1hsxM","../../mixins/axis":"b02Nt","../../mixins/arrows":"l8X2M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkpO4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultBarChartOptions", ()=>defaultBarChartOptions);
var _axis = require("./elements/axis");
var _font = require("./elements/font");
var _arrow = require("./elements/arrow");
const defaultBarChartOptions = {
    groupDistance: 0,
    barDistance: 0,
    axis: {
        ...(0, _axis.defaultAxis)
    },
    dataAxisX: false,
    labels: {
        font: (0, _font.labelFont),
        color: "#000"
    },
    arrows: (0, _arrow.defaultArrows),
    onDrawLabel: null
};

},{"./elements/axis":"8h06E","./elements/font":"aCeiV","./elements/arrow":"b6MIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wOwN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawRect", ()=>drawRect);
parcelHelpers.export(exports, "drawRectAnimate", ()=>drawRectAnimate);
var _animation = require("../animation");
const drawRect = (ctx, [x, y, w, h], { color = "#000", fill = "#fff", size = 1, dash = [] } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash(dash);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.fillStyle = fill;
    ctx.rect(x, y, w, h);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};
const drawRectAnimate = (ctx, [x, y, w, h], options, { duration = 1000, ease } = {})=>{
    (0, _animation.animate)({
        draw (progress) {
            drawRect(ctx, [
                x,
                y,
                w,
                h * progress
            ], options);
        },
        duration,
        ease
    });
};

},{"../animation":"4kpPs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kpPs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
var _ease = require("./ease");
var _easeDefault = parcelHelpers.interopDefault(_ease);
const animate = ({ draw, duration = 1000, ease = "linear" })=>{
    let start = performance.now();
    const timing = (0, _easeDefault.default)[ease] ?? (0, _easeDefault.default);
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing.apply(null, [
            timeFraction
        ]);
        draw(progress);
        if (timeFraction < 1) requestAnimationFrame(animate);
    });
};

},{"./ease":"a3ior","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a3ior":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linear", ()=>linear);
const linear = (t)=>t;
exports.default = {
    "linear": linear
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dbPz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BubbleChart", ()=>BubbleChart);
parcelHelpers.export(exports, "bubbleChart", ()=>bubbleChart);
var _base = require("../base");
var _bubble = require("../../defaults/bubble");
var _cross = require("../../mixins/cross");
var _axis = require("../../mixins/axis");
var _minMax = require("../../helpers/min-max");
var _expandPadding = require("../../helpers/expand-padding");
var _circle = require("../../draw/circle");
var _merge = require("../../helpers/merge");
var _arrows = require("../../mixins/arrows");
class BubbleChart extends (0, _base.Chart) {
    constructor(el, data, options){
        super(el, data, (0, _merge.merge)({}, (0, _bubble.defaultBubbleChartOptions), options), "bubble");
        this.coords = {};
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.minZ = 0;
        this.maxZ = 0;
        this.legendItems = [];
        const legend = this.options.legend;
        if (legend) for(let i = 0; i < this.data.length; i++)this.legendItems.push([
            this.data[i].name,
            this.options.colors[i]
        ]);
        this.calcMinMax();
        this.resize();
    }
    calcMinMax() {
        const o = this.options;
        let a = [];
        for(let k in this.data){
            let _data = this.data[k].data;
            if (!Array.isArray(_data)) continue;
            a.push(_data);
        }
        const [minX, maxX] = (0, _minMax.minMax)(a, "x");
        const [minY, maxY] = (0, _minMax.minMax)(a, "y");
        const [minZ, maxZ] = (0, _minMax.minMax)(a, "z");
        this.minX = o.boundaries && !isNaN(o.boundaries.minX) ? o.boundaries.minX : minX;
        this.maxX = o.boundaries && !isNaN(o.boundaries.maxX) ? o.boundaries.maxX : maxX;
        this.minY = o.boundaries && !isNaN(o.boundaries.minY) ? o.boundaries.minY : minY;
        this.maxY = o.boundaries && !isNaN(o.boundaries.maxY) ? o.boundaries.maxY : maxY;
        this.minZ = o.boundaries && !isNaN(o.boundaries.minZ) ? o.boundaries.minZ : minZ;
        this.maxZ = o.boundaries && !isNaN(o.boundaries.maxZ) ? o.boundaries.maxZ : maxZ;
        if (isNaN(this.minX)) this.minX = 0;
        if (isNaN(this.maxX)) this.maxX = 100;
        if (isNaN(this.minY)) this.minX = 0;
        if (isNaN(this.maxY)) this.maxX = 100;
        if (isNaN(this.minZ)) this.minX = 0;
        if (isNaN(this.maxZ)) this.maxX = 100;
    }
    calcRatio() {
        this.ratioX = this.viewWidth / (this.maxX === this.minX ? this.maxX : this.maxX - this.minX);
        this.ratioY = this.viewHeight / (this.maxY === this.minY ? this.maxY : this.maxY - this.minY);
        this.ratioZ = this.maxZ / (this.maxZ === this.minZ ? this.maxZ : this.maxZ - this.minZ);
    }
    bubbles() {
        const o = this.options, padding = (0, _expandPadding.expandPadding)(o.padding);
        const ctx = this.ctx;
        if (!this.data || !this.data.length) return;
        for(let i = 0; i < this.data.length; i++){
            const graph = this.data[i];
            const color = o.colors[i];
            const [x, y, z] = graph.data;
            let _x = Math.floor((x - this.minX) * this.ratioX + padding.left);
            let _y = Math.floor(this.viewHeight + padding.top - (y - this.minY) * this.ratioY);
            let _z = Math.floor(z * this.ratioZ);
            (0, _circle.drawCircle)(ctx, [
                _x,
                _y,
                _z
            ], {
                fill: color,
                color: color
            });
        }
    }
    floatPoint() {
        if (!this.data || !this.data.length) return;
    }
    add(index, [x, y, z], shift = false) {
        this.addPoint(index, [
            x,
            y,
            z
        ], shift);
        if (x < this.minX) this.minX = x;
        if (x > this.maxX) this.maxX = x;
        if (y < this.minY) this.minY = y;
        if (y > this.maxY) this.maxY = y;
        if (z < this.minZ) this.minZ = z;
        if (z > this.maxZ) this.maxZ = z;
        this.resize();
    }
    draw() {
        super.draw();
        this.calcRatio();
        this.axisXY();
        this.arrows();
        this.bubbles();
        this.floatPoint();
        this.cross();
        this.legend();
    }
}
Object.assign(BubbleChart.prototype, (0, _cross.MixinCross));
Object.assign(BubbleChart.prototype, (0, _axis.MixinAxis));
Object.assign(BubbleChart.prototype, (0, _arrows.MixinArrows));
const bubbleChart = (el, data, options)=>new BubbleChart(el, data, options);

},{"../base":"cyKts","../../defaults/bubble":"9OB7r","../../mixins/cross":"a7liY","../../mixins/axis":"b02Nt","../../helpers/min-max":"lds97","../../helpers/expand-padding":"1hsxM","../../draw/circle":"8324j","../../helpers/merge":"1bRax","../../mixins/arrows":"l8X2M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OB7r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultBubbleChartOptions", ()=>defaultBubbleChartOptions);
var _axis = require("./elements/axis");
var _cross = require("./elements/cross");
var _arrow = require("./elements/arrow");
const defaultBubbleChartOptions = {
    axis: (0, _axis.defaultAxis),
    cross: (0, _cross.defaultCross),
    arrows: (0, _arrow.defaultArrows)
};

},{"./elements/axis":"8h06E","./elements/cross":"98WrO","./elements/arrow":"b6MIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lrNc9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HistogramChart", ()=>HistogramChart);
parcelHelpers.export(exports, "histogramChart", ()=>histogramChart);
var _base = require("../base");
var _histogram = require("../../defaults/histogram");
var _minMax = require("../../helpers/min-max");
var _merge = require("../../helpers/merge");
var _expandPadding = require("../../helpers/expand-padding");
var _rect = require("../../draw/rect");
var _cross = require("../../mixins/cross");
var _axis = require("../../mixins/axis");
var _addPoint = require("../../mixins/add-point");
class HistogramChart extends (0, _base.Chart) {
    constructor(el, data = [], options = {}){
        super(el, data, (0, _merge.merge)({}, (0, _histogram.defaultHistogramOptions), options), "histogram");
        this.coords = {};
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.legendItems = [];
        const legend = this.options.legend;
        const bars = this.options.bars;
        const colors = this.options.colors;
        if (legend) for(let i = 0; i < this.data.length; i++)this.legendItems.push([
            bars[i].name,
            colors[i]
        ]);
        this.calcMinMax();
        this.resize();
    }
    calcMinMax() {
        const o = this.options;
        let a = [];
        for (let _data of this.data){
            if (!Array.isArray(_data)) continue;
            for (const [x1, x2, y] of _data)a.push([
                x1,
                x2,
                y
            ]);
        }
        const [minX1, maxX1] = (0, _minMax.minMax)(a, 0);
        const [minX2, maxX2] = (0, _minMax.minMax)(a, 1);
        const [minY, maxY] = (0, _minMax.minMax)(a, 2);
        this.minX = o.boundaries && !isNaN(o.boundaries.minX) ? o.boundaries.minX : Math.min(minX1, minX2);
        this.maxX = o.boundaries && !isNaN(o.boundaries.maxX) ? o.boundaries.maxX : Math.max(maxX1, maxX2);
        this.minY = o.boundaries && !isNaN(o.boundaries.minY) ? o.boundaries.minY : minY;
        this.maxY = o.boundaries && !isNaN(o.boundaries.maxY) ? o.boundaries.maxY : maxY;
        if (isNaN(this.minX)) this.minX = 0;
        if (isNaN(this.maxX)) this.maxX = 100;
        if (isNaN(this.minY)) this.minX = 0;
        if (isNaN(this.maxY)) this.maxX = 100;
    }
    calcRatio() {
        this.ratioX = this.viewWidth / (this.maxX === this.minX ? this.maxX : this.maxX - this.minX);
        this.ratioY = this.viewHeight / (this.maxY === this.minY ? this.maxY : this.maxY - this.minY);
    }
    bars() {
        const o = this.options, padding = (0, _expandPadding.expandPadding)(o.padding);
        const ctx = this.ctx;
        let bars;
        if (!this.data || !this.data.length) return;
        for(let i = 0; i < this.data.length; i++){
            const bar = o.bars[i];
            const data = this.data[i];
            const color = bar.color || o.colors[i] || "#000";
            const stroke = bar.stroke || "#fff";
            bars = [];
            for (const [x1, x2, y] of data){
                let _x = Math.floor((x1 - this.minX) * this.ratioX + padding.left);
                let _w = Math.floor((x2 - this.minX) * this.ratioX + padding.left) - _x;
                let _h = (y - this.minY) * this.ratioY;
                let _y = Math.floor(this.viewHeight + padding.top - _h);
                (0, _rect.drawRect)(ctx, [
                    _x,
                    _y,
                    _w,
                    _h
                ], {
                    fill: color,
                    color: stroke
                });
            }
        }
    }
    add(index, [x1, x2, y], shift = false) {
        this.addPoint(index, [
            x1,
            x2,
            y
        ], shift);
        this.minX = this.data[index][0][0];
        this.maxX = x2;
        if (y < this.minY) this.minY = y;
        if (y > this.maxY) this.maxY = y;
        this.resize();
    }
    draw() {
        super.draw();
        this.calcRatio();
        this.axisXY();
        this.bars();
        this.cross();
        this.legend();
    }
}
Object.assign(HistogramChart.prototype, (0, _cross.MixinCross));
Object.assign(HistogramChart.prototype, (0, _axis.MixinAxis));
Object.assign(HistogramChart.prototype, (0, _addPoint.MixinAddPoint));
const histogramChart = (el, data, options)=>new HistogramChart(el, data, options);

},{"../base":"cyKts","../../defaults/histogram":"4BK5o","../../helpers/min-max":"lds97","../../helpers/merge":"1bRax","../../helpers/expand-padding":"1hsxM","../../draw/rect":"8wOwN","../../mixins/cross":"a7liY","../../mixins/axis":"b02Nt","../../mixins/add-point":"9pVEG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BK5o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultHistogramOptions", ()=>defaultHistogramOptions);
var _axis = require("./elements/axis");
var _cross = require("./elements/cross");
const defaultHistogramOptions = {
    barWidth: 10,
    axis: {
        ...(0, _axis.defaultAxis),
        x: {
            ...(0, _axis.defaultAxis).x,
            arrow: false
        },
        y: {
            ...(0, _axis.defaultAxis).y,
            arrow: false
        }
    },
    cross: (0, _cross.defaultCross),
    graphSize: 40,
    bars: {
        stroke: "#fff"
    }
};

},{"./elements/axis":"8h06E","./elements/cross":"98WrO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeOgL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LineChart", ()=>LineChart);
parcelHelpers.export(exports, "lineChart", ()=>lineChart);
var _base = require("../base");
var _minMax = require("../../helpers/min-max");
var _circle = require("../../draw/circle");
var _line = require("../../draw/line");
var _square = require("../../draw/square");
var _triangle = require("../../draw/triangle");
var _diamond = require("../../draw/diamond");
var _line1 = require("../../defaults/line");
var _merge = require("../../helpers/merge");
var _expandPadding = require("../../helpers/expand-padding");
var _cross = require("../../mixins/cross");
var _axis = require("../../mixins/axis");
var _addPoint = require("../../mixins/add-point");
var _curve = require("../../draw/curve");
var _mergeProps = require("../../helpers/merge-props");
var _arrows = require("../../mixins/arrows");
var _isObject = require("../../helpers/is-object");
const DEFAULT_LINE_TYPE = "line";
const DEFAULT_DOT_TYPE = "circle";
const DOT_TRIANGLE = "triangle";
const DOT_SQUARE = "square";
const DOT_DIAMOND = "diamond";
const VALUE_DEFAULT = "default";
class LineChart extends (0, _base.Chart) {
    constructor(el, data = [], options = {}){
        super(el, data, (0, _merge.merge)({}, (0, _line1.defaultLineChartOptions), options), "line");
        this.coords = {};
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.legendItems = [];
        const legend = this.options.legend;
        const lines = this.options.lines;
        const colors = this.options.colors;
        if (legend) for(let i = 0; i < lines.length; i++)this.legendItems.push([
            lines[i].name,
            colors[i]
        ]);
        this.calcMinMax();
        this.resize();
    }
    calcMinMax() {
        const o = this.options;
        let a = [];
        for (let _data of this.data){
            if (!Array.isArray(_data)) continue;
            for (const [x, y] of _data)a.push([
                x,
                y
            ]);
        }
        const [minX, maxX] = (0, _minMax.minMax)(a, "x");
        const [minY, maxY] = (0, _minMax.minMax)(a, "y");
        this.minX = o.boundaries && !isNaN(o.boundaries.minX) ? o.boundaries.minX : minX;
        this.maxX = o.boundaries && !isNaN(o.boundaries.maxX) ? o.boundaries.maxX : maxX;
        this.minY = o.boundaries && !isNaN(o.boundaries.minY) ? o.boundaries.minY : minY;
        this.maxY = o.boundaries && !isNaN(o.boundaries.maxY) ? o.boundaries.maxY : maxY;
        if (isNaN(this.minX)) this.minX = 0;
        if (isNaN(this.maxX)) this.maxX = 100;
        if (isNaN(this.minY)) this.minX = 0;
        if (isNaN(this.maxY)) this.maxX = 100;
    }
    calcRatio() {
        this.ratioX = this.viewWidth / (this.maxX === this.minX ? this.maxX : this.maxX - this.minX);
        this.ratioY = this.viewHeight / (this.maxY === this.minY ? this.maxY : this.maxY - this.minY);
    }
    lines() {
        const o = this.options, padding = (0, _expandPadding.expandPadding)(o.padding);
        const ctx = this.ctx;
        let coords;
        if (!this.data || !this.data.length) return;
        for(let i = 0; i < this.data.length; i++){
            const line = o.lines[i];
            const data = this.data[i];
            const color = o.colors[i];
            const type = line.type || o.type || DEFAULT_LINE_TYPE;
            coords = [];
            for (const [x, y] of data){
                let _x = Math.floor((x - this.minX) * this.ratioX + padding.left);
                let _y = Math.floor(this.viewHeight + padding.top - (y - this.minY) * this.ratioY);
                coords.push([
                    _x,
                    _y,
                    x,
                    y
                ]);
            }
            if (line.showLine !== false) {
                if (type !== DEFAULT_LINE_TYPE) (0, _curve.drawCurve)(ctx, coords, {
                    color: color,
                    size: line.size
                });
                else (0, _line.drawLine)(ctx, coords, {
                    color: color,
                    size: line.size
                });
            }
            let dots = (0, _mergeProps.mergeProps)({
                type: DEFAULT_DOT_TYPE
            }, o.dots, line.dots);
            let opt = {
                color: dots.color ?? color,
                fill: dots.fill ?? color,
                radius: dots.size ?? 2
            };
            let drawPointFn;
            switch(dots.type){
                case DOT_SQUARE:
                    drawPointFn = (0, _square.drawSquare);
                    break;
                case DOT_TRIANGLE:
                    drawPointFn = (0, _triangle.drawTriangle);
                    break;
                case DOT_DIAMOND:
                    drawPointFn = (0, _diamond.drawDiamond);
                    break;
                default:
                    drawPointFn = (0, _circle.drawCircle);
            }
            if (line.dots && o.showDots !== false) coords.map(([x, y])=>{
                drawPointFn(ctx, [
                    x,
                    y,
                    opt.radius
                ], opt);
            });
            this.coords[line.name] = {
                line,
                coords,
                drawPointFn,
                opt
            };
        }
    }
    floatPoint() {
        const o = this.options;
        const ctx = this.ctx;
        const rect = this.canvas.getBoundingClientRect();
        let tooltip = false;
        if (!this.data || !this.data.length) return;
        if (!this.proxy.mouse) return;
        let { x, y } = this.proxy.mouse;
        const mx = x - rect.left;
        const my = y - rect.top;
        for(const name in this.coords){
            const item = this.coords[name];
            const drawPointFn = item.drawPointFn;
            const opt = item.opt;
            // const graph = item.graph
            for (const [px, py, _x, _y] of item.coords){
                const accuracy = +(o.accuracy || opt.radius);
                const lx = px - accuracy, rx = px + accuracy;
                const ly = py - accuracy, ry = py + accuracy;
                if (mx > lx && mx < rx && o.hoverMode !== VALUE_DEFAULT) drawPointFn(ctx, [
                    px,
                    py,
                    opt.radius
                ], {
                    color: opt.color,
                    fill: opt.fill
                });
                if (mx > lx && mx < rx && my > ly && my < ry) {
                    if (o.hoverMode === VALUE_DEFAULT) drawPointFn(ctx, [
                        px,
                        py,
                        opt.radius * 2
                    ], {
                        color: opt.color,
                        fill: opt.fill
                    });
                    if (o.tooltip) {
                        this.showTooltip([
                            _x,
                            _y
                        ], item.graph);
                        tooltip = true;
                    }
                    break;
                }
            }
            if (!tooltip && this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;
            }
        }
    }
    add(index, [x, y], shift, align) {
        this.addPoint(index, [
            x,
            y
        ], shift);
        this.minX = this.data[index][0][0];
        this.maxX = x;
        if (align) {
            if ((0, _isObject.isObject)(align)) this.align(align);
        } else {
            if (y < this.minY) this.minY = y;
            if (y > this.maxY) this.maxY = y;
        }
        this.resize();
    }
    align({ minX, maxX, minY, maxY }) {
        let a = [];
        for (let _data of this.data){
            if (!Array.isArray(_data)) continue;
            for (const [x, y] of _data)a.push([
                x,
                y
            ]);
        }
        const [_minX, _maxX] = (0, _minMax.minMax)(a, "x");
        const [_minY, _maxY] = (0, _minMax.minMax)(a, "y");
        if (minX) this.minX = _minX;
        if (minY) this.minY = _minY;
        if (maxX) this.maxX = _maxX;
        if (maxY) this.maxY = _maxY;
    }
    draw() {
        super.draw();
        this.calcRatio();
        this.axisXY();
        this.arrows();
        this.lines();
        this.floatPoint();
        this.cross();
        this.legend();
    }
}
Object.assign(LineChart.prototype, (0, _cross.MixinCross));
Object.assign(LineChart.prototype, (0, _axis.MixinAxis));
Object.assign(LineChart.prototype, (0, _addPoint.MixinAddPoint));
Object.assign(LineChart.prototype, (0, _arrows.MixinArrows));
const lineChart = (el, data, options)=>new LineChart(el, data, options);

},{"../base":"cyKts","../../helpers/min-max":"lds97","../../draw/circle":"8324j","../../draw/line":"2jBul","../../draw/square":"9V4FA","../../draw/triangle":"lSMEn","../../draw/diamond":"385Cg","../../defaults/line":"b62YZ","../../helpers/merge":"1bRax","../../helpers/expand-padding":"1hsxM","../../mixins/cross":"a7liY","../../mixins/axis":"b02Nt","../../mixins/add-point":"9pVEG","../../draw/curve":"lLWNJ","../../helpers/merge-props":"gxSbv","../../mixins/arrows":"l8X2M","../../helpers/is-object":"3zY5D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b62YZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultLineChartOptions", ()=>defaultLineChartOptions);
var _axis = require("./elements/axis");
var _cross = require("./elements/cross");
var _arrow = require("./elements/arrow");
const defaultLineChartOptions = {
    hoverMode: "default",
    // default, advanced
    axis: (0, _axis.defaultAxis),
    cross: (0, _cross.defaultCross),
    showDots: true,
    type: "line",
    // line, curve
    accuracy: 2,
    lines: [],
    arrows: (0, _arrow.defaultArrows)
};

},{"./elements/axis":"8h06E","./elements/cross":"98WrO","./elements/arrow":"b6MIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLWNJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawCurve", ()=>drawCurve);
const drawCurve = (ctx, coords = [], { color = "#000", size = 1, dash = [], tension = 0.25 } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash(dash);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.moveTo(coords[0][0], coords[0][1]);
    for(let i = 0; i < coords.length - 1; i++){
        let x_mid = (coords[i][0] + coords[i + 1][0]) / 2;
        let y_mid = (coords[i][1] + coords[i + 1][1]) / 2;
        let cp_x1 = (x_mid + coords[i][0]) / 2;
        //let cp_y1 = (y_mid + coords[i][1]) / 2;
        let cp_x2 = (x_mid + coords[i + 1][0]) / 2;
        //let cp_y2 = (y_mid + coords[i + 1][1]) / 2;
        ctx.quadraticCurveTo(cp_x1, coords[i][1], x_mid, y_mid);
        ctx.quadraticCurveTo(cp_x2, coords[i + 1][1], coords[i + 1][0], coords[i + 1][1]);
    }
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxSbv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
var _isObject = require("./is-object");
const mergeProps = (...args)=>{
    let result = {};
    args.forEach((v)=>{
        if (v && (0, _isObject.isObject)(v)) Object.assign(result, v);
    });
    return result;
};

},{"./is-object":"3zY5D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHvHK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PieChart", ()=>PieChart);
parcelHelpers.export(exports, "pieChart", ()=>pieChart);
var _base = require("../base");
var _pie = require("../../defaults/pie");
var _merge = require("../../helpers/merge");
var _sector = require("../../draw/sector");
var _text = require("../../draw/text");
var _getTextboxWidth = require("../../helpers/get-textbox-width");
class PieChart extends (0, _base.Chart) {
    constructor(el, data, options){
        super(el, data, (0, _merge.merge)({}, (0, _pie.defaultPieChartOptions), options), "pie");
        this.total = this.data.reduce((acc, curr)=>acc + curr, 0);
        this.legendItems = [];
        const legend = this.options.legend;
        if (legend && legend.titles && legend.titles.length) for(let i = 0; i < legend.titles.length; i++)this.legendItems.push([
            legend.titles[i],
            this.options.colors[i],
            this.data[i]
        ]);
        this.resize();
    }
    sectors() {
        const ctx = this.ctx, o = this.options;
        let [x, y] = this.center;
        const radius = this.radius;
        let startAngle = 0, endAngle = 360, offset = 0, val = "", textVal = "";
        let textX, textY;
        if (!this.data || !this.data.length) return;
        for(let i = 0; i < this.data.length; i++){
            let val = this.data[i];
            let color = o.colors[i];
            endAngle = 2 * Math.PI * val / this.total;
            (0, _sector.drawSector)(ctx, [
                x,
                y,
                radius,
                startAngle,
                startAngle + endAngle
            ], {
                fill: color,
                color: color
            });
            startAngle += endAngle;
        }
        startAngle = 0;
        for(let i = 0; i < this.data.length; i++){
            let val = this.data[i], percent;
            let name = (this.legendItems[i] && this.legendItems[i][0]) ?? "";
            endAngle = 2 * Math.PI * val / this.total;
            offset = 0;
            percent = Math.round(val * 100 / this.total);
            textVal = o.showValue ? val : percent + "%";
            if (typeof o.onDrawValue === "function") textVal = o.onDrawValue.apply(null, [
                name,
                val,
                percent
            ]);
            textX = x + (radius / 2 + offset) * Math.cos(startAngle + endAngle / 2);
            textY = y + (radius / 2 + offset) * Math.sin(startAngle + endAngle / 2);
            let textW = (0, _getTextboxWidth.getTextBoxWidth)(ctx, [
                val + "%"
            ], {
                font: o.labels.font
            });
            (0, _text.drawText)(ctx, textVal, [
                textX - textW / 2,
                textY + o.labels.font.size / 2
            ], {
                color: o.labels.color,
                font: o.labels.font
            });
            startAngle += endAngle;
        }
    }
    draw() {
        super.draw();
        this.sectors();
        this.legend();
    }
    resize() {
        super.resize();
        this.center = [
            this.dpiWidth / 2,
            this.dpiHeight / 2
        ];
    }
}
const pieChart = (el, data, options)=>new PieChart(el, data, options);

},{"../base":"cyKts","../../defaults/pie":"k4WCs","../../helpers/merge":"1bRax","../../draw/sector":"g1K7D","../../draw/text":"9Q34i","../../helpers/get-textbox-width":"bpHOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4WCs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultPieChartOptions", ()=>defaultPieChartOptions);
var _font = require("./elements/font");
const defaultPieChartOptions = {
    other: {
        color: "#eaeaea"
    },
    labels: {
        font: (0, _font.labelFont),
        color: "#fff"
    },
    showValue: false,
    padding: 0,
    onDrawValue: null
};

},{"./elements/font":"aCeiV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g1K7D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawSector", ()=>drawSector);
const drawSector = (ctx, [x, y, radius = 4, startAngle, endAngle], { color = "#000", fill = "#fff", size = 1 } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash([]);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.fillStyle = fill;
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.lineTo(x, y);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"amZnW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StackedBarChart", ()=>StackedBarChart);
parcelHelpers.export(exports, "stackedBarChart", ()=>stackedBarChart);
var _merge = require("../../helpers/merge");
var _stackedBar = require("../../defaults/stacked-bar");
var _axis = require("../../mixins/axis");
var _minMax = require("../../helpers/min-max");
var _base = require("../base");
var _expandPadding = require("../../helpers/expand-padding");
var _rect = require("../../draw/rect");
var _text = require("../../draw/text");
var _arrows = require("../../mixins/arrows");
class StackedBarChart extends (0, _base.Chart) {
    constructor(el, data, options){
        super(el, data, (0, _merge.merge)({}, (0, _stackedBar.defaultStackedBarChartOptions), options), "stacked-bar");
        this.barWidth = 0;
        this.maxY = 0;
        this.maxX = 0;
        this.minY = 0;
        this.minX = 0;
        this.viewAxis = this.options.dataAxisX ? this.viewHeight : this.viewWidth;
        this.ratioX = 0;
        this.ratioY = 0;
        this.legendItems = [];
        const legend = this.options.legend;
        if (legend && legend.titles && legend.titles.length) for(let i = 0; i < legend.titles.length; i++)this.legendItems.push([
            legend.titles[i],
            this.options.colors[i]
        ]);
        this.calcMinMax();
        this.resize();
    }
    calcMinMax() {
        const o = this.options;
        let a = [];
        for(let k in this.data){
            let data = this.data[k].data;
            a.push(data.reduce((a, b)=>a + b, 0));
        }
        const [, max] = (0, _minMax.minMaxLinear)(a);
        this.maxX = this.maxY = o.boundaries && !isNaN(o.boundaries.max) ? o.boundaries.maxY : max;
        if (isNaN(this.maxX)) this.maxX = 100;
        if (isNaN(this.maxY)) this.maxX = 100;
    }
    calcRatio() {
        this.ratio = this.ratioY = this.ratioX = (this.options.dataAxisX ? this.viewWidth : this.viewHeight) / (this.maxY === this.minY ? this.maxY : this.maxY - this.minY);
    }
    calcBarWidth() {
        const o = this.options;
        let bars = this.data.length;
        let availableSpace = (o.dataAxisX ? this.viewHeight : this.viewWidth) - (this.data.length + 1) * o.groupDistance; // space between groups
        this.barWidth = availableSpace / bars;
    }
    barsX() {
        const o = this.options;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        const ctx = this.ctx;
        let px, py;
        const rect = this.canvas.getBoundingClientRect();
        let mx, my;
        let tooltip = false;
        if (!this.data || !this.data.length) return;
        if (this.proxy.mouse) {
            mx = this.proxy.mouse.x - rect.left;
            my = this.proxy.mouse.y - rect.top;
        }
        px = padding.left;
        py = padding.top + o.groupDistance;
        let colors = Array.isArray(o.colors) ? o.colors : o.colors.split(",").map((c)=>c.trim());
        for (const graph of this.data){
            let data = graph.data;
            let name = graph.name;
            let labelColor = colors.length > 1 ? o.color : colors[0]; // ???
            let sigma = 0;
            for(let i = 0; i < data.length; i++){
                let delta = data[i] * this.ratio;
                let color = colors[i];
                let fill = colors[i];
                let valueTitle = o.values[i];
                (0, _rect.drawRect)(ctx, [
                    px + sigma,
                    py,
                    delta,
                    this.barWidth
                ], {
                    color,
                    fill
                });
                if (mx > px + sigma && mx < px + delta + sigma && my > py && my < py + this.barWidth) {
                    (0, _rect.drawRect)(ctx, [
                        px + sigma,
                        py,
                        delta,
                        this.barWidth - 1
                    ], {
                        color: "rgba(255,255,255,.3)",
                        fill: "rgba(255,255,255,.3)"
                    });
                    if (o.tooltip) {
                        this.showTooltip([
                            valueTitle,
                            data[i]
                        ], graph);
                        tooltip = true;
                    }
                }
                sigma += delta;
            }
            py += o.groupDistance + this.barWidth;
            if (typeof o.onDrawLabel === "function") name = o.onDrawLabel.apply(null, name);
            (0, _text.drawText)(ctx, name, [
                0,
                0
            ], {
                align: "center",
                color: labelColor,
                stroke: labelColor,
                font: o.font,
                translate: [
                    px - 20,
                    py - this.barWidth / 2
                ],
                angle: 90
            });
        }
        if (!tooltip && this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }
    }
    barsY() {
        const o = this.options;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        const ctx = this.ctx;
        let px, py;
        const rect = this.canvas.getBoundingClientRect();
        let mx, my;
        let tooltip = false;
        if (!this.data || !this.data.length) return;
        if (this.proxy.mouse) {
            mx = this.proxy.mouse.x - rect.left;
            my = this.proxy.mouse.y - rect.top;
        }
        px = padding.left + o.groupDistance;
        py = this.viewHeight + padding.top;
        let colors = Array.isArray(o.colors) ? o.colors : o.colors.split(",").map((c)=>c.trim());
        for (const graph of this.data){
            let data = graph.data;
            let name = graph.name;
            let labelColor = colors.length > 1 ? o.color : colors[0];
            let sigma = 0;
            for(let i = 0; i < data.length; i++){
                let delta = data[i] * this.ratio;
                let color = colors[i];
                let fill = colors[i];
                let valueTitle = o.values[i];
                (0, _rect.drawRect)(ctx, [
                    px,
                    py - delta - sigma,
                    this.barWidth,
                    delta
                ], {
                    color,
                    fill
                });
                if (mx > px && mx < px + this.barWidth - 1 && my > py - delta - sigma && my < py - sigma) {
                    (0, _rect.drawRect)(ctx, [
                        px,
                        py - delta - sigma,
                        this.barWidth,
                        delta
                    ], {
                        color: "rgba(255,255,255,.3)",
                        fill: "rgba(255,255,255,.3)"
                    });
                    if (o.tooltip) {
                        this.showTooltip([
                            valueTitle,
                            data[i]
                        ], graph);
                        tooltip = true;
                    }
                }
                sigma += delta;
            }
            px += o.groupDistance + this.barWidth;
            if (typeof o.onDrawLabel === "function") name = o.onDrawLabel.apply(null, name);
            (0, _text.drawText)(ctx, name, [
                0,
                0
            ], {
                align: "center",
                color: labelColor,
                stroke: labelColor,
                font: o.font,
                translate: [
                    px - o.groupDistance - this.barWidth / 2,
                    py + 20
                ],
                angle: 0
            });
        }
        if (!tooltip && this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }
    }
    draw() {
        const o = this.options;
        super.draw();
        this.calcBarWidth();
        this.calcRatio();
        if (o.dataAxisX) {
            this.axisX();
            this.barsX();
        } else {
            this.axisY();
            this.barsY();
        }
        this.arrows();
        this.legend();
    }
}
Object.assign(StackedBarChart.prototype, (0, _axis.MixinAxis));
Object.assign(StackedBarChart.prototype, (0, _arrows.MixinArrows));
const stackedBarChart = (el, data, options)=>new StackedBarChart(el, data, options);

},{"../../helpers/merge":"1bRax","../../defaults/stacked-bar":"4gGWY","../../mixins/axis":"b02Nt","../../helpers/min-max":"lds97","../base":"cyKts","../../helpers/expand-padding":"1hsxM","../../draw/rect":"8wOwN","../../draw/text":"9Q34i","../../mixins/arrows":"l8X2M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gGWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultStackedBarChartOptions", ()=>defaultStackedBarChartOptions);
var _axis = require("./elements/axis");
var _arrow = require("./elements/arrow");
const defaultStackedBarChartOptions = {
    groupDistance: 0,
    axis: (0, _axis.defaultAxis),
    dataAxisX: false,
    arrows: (0, _arrow.defaultArrows),
    onDrawLabel: null
};

},{"./elements/axis":"8h06E","./elements/arrow":"b6MIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"93KjW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Gauge", ()=>Gauge);
parcelHelpers.export(exports, "gauge", ()=>gauge);
var _base = require("../base");
var _merge = require("../../helpers/merge");
var _gauge = require("../../defaults/gauge");
var _expandPadding = require("../../helpers/expand-padding");
var _text = require("../../draw/text");
var _arc = require("../../draw/arc");
var _getFillColors = require("../../helpers/get-fill-colors");
class Gauge extends (0, _base.Chart) {
    constructor(el, data, options){
        super(el, data, (0, _merge.merge)({}, (0, _gauge.defaultGaugeOptions), options), "gauge");
        this.min = this.options.boundaries.min;
        this.max = this.options.boundaries.max;
        this.resize();
    }
    gauge() {
        const ctx = this.ctx, o = this.options, padding = (0, _expandPadding.expandPadding)(o.padding);
        let [x, y] = this.center;
        x += padding.left;
        y += padding.top;
        const PI = Math.PI, min = PI * o.startFactor, max = PI * (2 + o.endFactor);
        const r = o.radius * this.radius / 100 - o.backWidth;
        let v = this.data[0], p = Math.round(Math.abs(100 * (v - this.min) / (this.max - this.min)));
        const val = min + (max - min) * p / 100;
        let textVal = p;
        let colors = [];
        if (typeof o.onDrawValue === "function") textVal = o.onDrawValue.apply(null, [
            v,
            p
        ]);
        (0, _arc.drawArc)(ctx, [
            x,
            y,
            r,
            min,
            max
        ], {
            size: o.backWidth,
            stroke: o.backStyle
        });
        if (typeof o.fillStyle === "string") colors.push([
            100,
            o.fillStyle
        ]);
        else if (Array.isArray(o.fillStyle)) for (let c of o.fillStyle)colors.push(c);
        (0, _arc.drawArc)(ctx, [
            x,
            y,
            r,
            min,
            val
        ], {
            size: o.valueWidth,
            stroke: (0, _getFillColors.getFillColor)(p, colors)
        });
        (0, _text.drawText)(ctx, textVal, [
            0,
            0
        ], {
            align: "center",
            baseLine: "middle",
            color: o.value.color,
            stroke: o.value.color,
            font: o.value.font || o.font,
            translate: [
                x + o.value.shift.x,
                y + o.value.shift.y
            ],
            angle: o.value.angle
        });
        if (o.label.min) (0, _text.drawText)(ctx, o.boundaries.min, [
            0,
            0
        ], {
            align: "left",
            baseLine: "middle",
            color: o.label.min.color,
            stroke: o.label.min.color,
            font: o.label.min.font || o.font,
            translate: [
                x + r * Math.cos(min) + o.backWidth + o.label.min.shift.x,
                y + r * Math.sin(min) + o.label.min.shift.y
            ],
            angle: 0
        });
        if (o.label.max) (0, _text.drawText)(ctx, o.boundaries.max, [
            0,
            0
        ], {
            align: "right",
            baseLine: "middle",
            color: o.label.max.color,
            stroke: o.label.max.color,
            font: o.label.max.font || o.font,
            translate: [
                x + r * Math.cos(max) - o.backWidth + o.label.max.shift.x,
                y + r * Math.sin(max) + o.label.max.shift.y
            ],
            angle: 0
        });
    }
    draw() {
        super.draw();
        this.gauge();
    }
    update(val, { min = null, max = null } = {}) {
        this.data[0] = val;
        if (min !== null) this.min = min;
        if (max !== null) this.max = max;
        this.resize();
    }
}
const gauge = (el, data, options)=>new Gauge(el, data, options);

},{"../base":"cyKts","../../helpers/merge":"1bRax","../../defaults/gauge":"kUP16","../../helpers/expand-padding":"1hsxM","../../draw/text":"9Q34i","../../draw/arc":"895be","../../helpers/get-fill-colors":"cCJZV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUP16":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultGaugeOptions", ()=>defaultGaugeOptions);
var _font = require("./elements/font");
const gaugeLabel = {
    font: (0, _font.defaultFont),
    fixed: false,
    color: "#000",
    angle: 0,
    shift: {
        x: 0,
        y: 0
    }
};
const defaultGaugeOptions = {
    backStyle: "#a7a7a7",
    fillStyle: "#8f8",
    startFactor: 0.85,
    endFactor: 0.15,
    backWidth: 32,
    valueWidth: 32,
    radius: 100,
    boundaries: {
        min: 0,
        max: 100
    },
    value: gaugeLabel,
    label: {
        min: gaugeLabel,
        max: gaugeLabel
    },
    padding: {
        left: 0,
        right: 0
    }
};

},{"./elements/font":"aCeiV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"895be":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawArc", ()=>drawArc);
const drawArc = (ctx, [x, y, radius, startAngle, endAngle], { stroke = "#000", fill = "#fff", size = 1, dash = [] } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash(dash);
    ctx.lineWidth = size;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCJZV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFillColor", ()=>getFillColor);
const getFillColor = (p, colors)=>{
    let res = "#fff", min = 0;
    for(let i = 0; i < colors.length; i++){
        let c = colors[i][0];
        if (p >= min && p <= c) {
            res = colors[i][1];
            min = colors[i][0];
        }
    }
    return res;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAMVr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Donut", ()=>Donut);
parcelHelpers.export(exports, "donut", ()=>donut);
var _base = require("../base");
var _merge = require("../../helpers/merge");
var _donut = require("../../defaults/donut");
var _text = require("../../draw/text");
var _arc = require("../../draw/arc");
class Donut extends (0, _base.Chart) {
    constructor(el, data, options){
        super(el, data, (0, _merge.merge)({}, (0, _donut.defaultDonutOptions), options), "donut");
        this.total = this.data.reduce((acc, curr)=>acc + curr, 0);
        this.min = this.options.boundaries.min;
        this.max = this.options.boundaries.max;
        this.legendItems = [];
        const legend = this.options.legend;
        if (legend && legend.titles && legend.titles.length) for(let i = 0; i < legend.titles.length; i++)this.legendItems.push([
            legend.titles[i],
            this.options.colors[i],
            this.data[i]
        ]);
        this.resize();
    }
    gauge() {
        const ctx = this.ctx, o = this.options;
        let [x, y] = this.center;
        const PI = Math.PI, min = 0, max = 360;
        const radius = this.radius - o.backWidth / 2;
        (0, _arc.drawArc)(ctx, [
            x,
            y,
            radius,
            0,
            2 * PI
        ], {
            size: o.backWidth,
            stroke: o.backStyle
        });
        let startAngle = 0, endAngle = 0;
        for(let i = 0; i < this.data.length; i++){
            const color = o.colors[i];
            let val = this.data[i];
            endAngle = 2 * Math.PI * val / this.total;
            (0, _arc.drawArc)(ctx, [
                x,
                y,
                radius,
                startAngle,
                startAngle + endAngle
            ], {
                size: o.valueWidth,
                stroke: color
            });
            if (o.label) {
                let name = (this.legendItems[i] && this.legendItems[i][0]) ?? "";
                const percent = Math.round(val * 100 / this.total);
                let textVal = o.showValue ? val : percent + "%";
                let textX, textY;
                if (typeof o.onDrawValue === "function") textVal = o.onDrawValue.apply(null, [
                    name,
                    val,
                    percent
                ]);
                textX = x + radius * Math.cos(startAngle + endAngle / 2);
                textY = y + radius * Math.sin(startAngle + endAngle / 2);
                (0, _text.drawText)(ctx, textVal, [
                    textX,
                    textY
                ], {
                    color: o.label.color,
                    font: o.label.font
                });
            }
            startAngle += endAngle;
        }
    }
    draw() {
        super.draw();
        this.gauge();
        this.legend();
    }
    resize() {
        super.resize();
        this.center = [
            this.dpiWidth / 2,
            this.dpiHeight / 2
        ];
    }
}
const donut = (el, data, options)=>new Donut(el, data, options);

},{"../base":"cyKts","../../helpers/merge":"1bRax","../../defaults/donut":"lDzyV","../../draw/text":"9Q34i","../../draw/arc":"895be","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDzyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultDonutOptions", ()=>defaultDonutOptions);
var _font = require("./elements/font");
const donutLabel = {
    font: (0, _font.defaultFont),
    fixed: false,
    color: "#000",
    angle: 0,
    shift: {
        x: 0,
        y: 0
    }
};
const defaultDonutOptions = {
    backStyle: "#a7a7a7",
    fillStyle: "#8f8",
    backWidth: 100,
    valueWidth: 100,
    radius: 100,
    boundaries: {
        min: 0,
        max: 100
    },
    label: donutLabel,
    padding: 0
};

},{"./elements/font":"aCeiV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5Is9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Segment", ()=>Segment);
parcelHelpers.export(exports, "segment", ()=>segment);
var _base = require("../base");
var _merge = require("../../helpers/merge");
var _segment = require("../../defaults/segment");
var _roundedRect = require("../../draw/rounded-rect");
var _expandPadding = require("../../helpers/expand-padding");
var _getFillColors = require("../../helpers/get-fill-colors");
class Segment extends (0, _base.Chart) {
    constructor(el, data, options){
        super(el, data, (0, _merge.merge)({}, (0, _segment.defaultSegmentOptions), options), "segment");
        this.min = 0;
        this.max = 100;
        if (this.options.segment.height !== "auto") {
            const o = this.options;
            const s = o.segment;
            const rowDistance = s.rowDistance * o.dpi;
            this.options.height = this.data.length * (rowDistance + 1 + s.height);
        }
        this.resize();
    }
    segments() {
        const ctx = this.ctx, o = this.options, s = o.segment;
        const count = s.count ? s.count : 20;
        const distance = s.distance * o.dpi;
        const rowDistance = s.rowDistance * o.dpi;
        const width = this.viewWidth / count - distance;
        const colors = [];
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        let x, y = padding.top + distance;
        let height;
        if (s.height === "auto") height = (o.height - rowDistance * this.data.length) / this.data.length;
        else height = s.height;
        if (typeof o.colors === "string") colors.push([
            100,
            o.colors
        ]);
        else if (Array.isArray(o.colors)) for (let c of o.colors)colors.push(c);
        for(let k = 0; k < this.data.length; k++){
            const value = this.data[k];
            const limit = count * value / 100;
            x = padding.left + 1;
            for(let i = 0; i < count; i++){
                const color = (0, _getFillColors.getFillColor)(i * 100 / count, colors);
                if (i <= limit) (0, _roundedRect.drawRoundedRect)(ctx, [
                    x,
                    y,
                    width,
                    height
                ], {
                    color,
                    fill: color,
                    radius: s.radius
                });
                else if (o.ghost) (0, _roundedRect.drawRoundedRect)(ctx, [
                    x,
                    y,
                    width,
                    height
                ], {
                    color: o.ghost.color,
                    fill: o.ghost.color,
                    radius: s.radius
                });
                x += width + distance;
            }
            y += height + rowDistance;
        }
    }
    setData(data, index = 0, redraw = true) {
        this.data[index] = data;
        if (redraw) this.resize();
    }
    draw() {
        super.draw();
        this.segments();
    }
}
const segment = (el, data, options)=>new Segment(el, data, options);

},{"../base":"cyKts","../../helpers/merge":"1bRax","../../defaults/segment":"gtKhJ","../../draw/rounded-rect":"jDGW1","../../helpers/expand-padding":"1hsxM","../../helpers/get-fill-colors":"cCJZV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gtKhJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultSegmentOptions", ()=>defaultSegmentOptions);
const defaultSegmentOptions = {
    segment: {
        count: 100,
        distance: 4,
        rowDistance: 4,
        height: "auto",
        radius: 0
    },
    ghost: {
        color: "#f1f1f1"
    },
    colors: [
        [
            70,
            "#60a917"
        ],
        [
            90,
            "#f0a30a"
        ],
        [
            100,
            "#a20025"
        ]
    ],
    padding: 0,
    margin: 0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDGW1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawRoundedRect", ()=>drawRoundedRect);
const drawRoundedRect = (ctx, [x, y, width, height], { color = "#000", fill = "#fff", size = 1, dash = [], radius = 4 } = {})=>{
    if (typeof radius === "number") radius = {
        tl: radius,
        tr: radius,
        br: radius,
        bl: radius
    };
    else {
        const defaultRadius = {
            tl: 0,
            tr: 0,
            br: 0,
            bl: 0
        };
        for(let side in defaultRadius)radius[side] = radius[side] || defaultRadius[side];
    }
    ctx.beginPath();
    ctx.fillStyle = fill;
    ctx.strokeStyle = color;
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pHiT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CandlestickChart", ()=>CandlestickChart);
parcelHelpers.export(exports, "candlestickChart", ()=>candlestickChart);
var _base = require("../base");
var _merge = require("../../helpers/merge");
var _сandlestick = require("../../defaults/сandlestick");
var _minMax = require("../../helpers/min-max");
var _axis = require("../../mixins/axis");
var _candle = require("../../draw/candle");
var _expandPadding = require("../../helpers/expand-padding");
var _vector = require("../../draw/vector");
var _text = require("../../draw/text");
var _rect = require("../../draw/rect");
var _tooltip = require("../../mixins/tooltip");
var _arrows = require("../../mixins/arrows");
class CandlestickChart extends (0, _base.Chart) {
    constructor(el, data, options){
        super(el, data, (0, _merge.merge)({}, (0, _сandlestick.defaultCandlestickOptions), options), "candlesticks");
        this.minY = 0;
        this.maxY = 0;
        this.labels = [];
        this.coords = [];
        this.calcMinMax();
        this.resize();
    }
    calcMinMax() {
        const o = this.options;
        let a = [];
        this.labels.length = 0;
        for(let k in this.data){
            const [x, hi, low] = this.data[k];
            a.push([
                0,
                hi
            ]);
            a.push([
                0,
                low
            ]);
            this.labels.push(x);
        }
        const [minY, maxY] = (0, _minMax.minMax)(a, "y");
        this.minY = o.boundaries && !isNaN(o.boundaries.minY) ? o.boundaries.minY : minY;
        this.maxY = o.boundaries && !isNaN(o.boundaries.maxY) ? o.boundaries.maxY : maxY;
    }
    calcRatio() {
        this.ratioY = this.viewHeight / (this.maxY === this.minY ? this.maxY : this.maxY - this.minY);
    }
    getCandleSize() {
        const candle = this.options.candle;
        const dataLength = this.data.length;
        return candle.width === "auto" ? (this.viewWidth - candle.distance * 2 - candle.distance * (dataLength - 1)) / dataLength : candle.width;
    }
    candlesticks() {
        // data [x, hi, low, open, close]
        const ctx = this.ctx, o = this.options, candle = o.candle, ghost = o.ghost;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        const dataLength = this.data.length;
        const rect = this.canvas.getBoundingClientRect();
        let candleSize = this.getCandleSize();
        let mx, my, px, py, tooltip = false;
        if (this.proxy.mouse) {
            mx = this.proxy.mouse.x - rect.left;
            my = this.proxy.mouse.y - rect.top;
        }
        let x = padding.left + candleSize / 2 + candle.distance;
        this.coords.length = 0;
        for(let i = 0; i < dataLength; i++){
            let y, y2, o1, c1, [xv, hi, low, open, close] = this.data[i];
            const whiteCandle = close > open;
            let candleColor = whiteCandle ? candle.white : candle.black;
            let bx1 = x - candleSize / 2 - candle.distance / 2, bx2 = x + candleSize / 2 + candle.distance / 2;
            y = padding.top + this.viewHeight - (hi - this.minY) * this.ratioY;
            y2 = padding.top + this.viewHeight - (low - this.minY) * this.ratioY;
            o1 = padding.top + this.viewHeight - (open - this.minY) * this.ratioY;
            c1 = padding.top + this.viewHeight - (close - this.minY) * this.ratioY;
            if (mx >= bx1 && mx <= bx2) (0, _rect.drawRect)(ctx, [
                bx1,
                padding.top,
                candleSize + candle.distance,
                this.viewHeight
            ], {
                color: ghost.stroke,
                fill: ghost.fill
            });
            (0, _candle.drawCandle)(ctx, [
                x,
                y,
                y2 - y,
                o1,
                candleSize,
                c1 - o1
            ], {
                color: candleColor,
                size: candle.size,
                leg: candle.leg
            });
            if (mx >= bx1 && mx <= bx2 && my >= y && my <= y2) {
                if (o.tooltip) {
                    this.showTooltip(this.data[i], {
                        type: whiteCandle
                    });
                    tooltip = true;
                }
            }
            this.coords.push(x);
            x += candleSize + candle.distance;
        }
        if (!tooltip && this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }
    }
    axis() {
        // draw default axis Y
        this.axisY();
        // draw axis X
        const ctx = this.ctx, o = this.options, candle = o.candle;
        const padding = (0, _expandPadding.expandPadding)(o.padding);
        const axis = o.axis.x, label = axis.label, line = axis.line, arrow = axis.arrow;
        const font = (label && label.font) ?? o.font;
        let shortLineSize = line.shortLineSize ?? 0;
        const candleSize = this.getCandleSize();
        let x = padding.left + candleSize / 2 + candle.distance, y = padding.top + this.viewHeight;
        let k = 0;
        for(let i = 0; i < this.labels.length; i++){
            let value = this.labels[i];
            let labelValue = value;
            if (typeof o.onDrawLabelX === "function") labelValue = o.onDrawLabelX.apply(null, [
                value
            ]);
            if (i !== 0 && label.skip && k !== label.skip) k++;
            else {
                k = 1;
                // short line
                (0, _vector.drawVector)(ctx, [
                    x,
                    y - shortLineSize,
                    x,
                    y + shortLineSize
                ], {
                    color: arrow && arrow.color ? arrow.color : line.color
                });
                // label
                (0, _text.drawText)(ctx, labelValue.toString(), [
                    0,
                    0
                ], {
                    color: label.color ?? o.color,
                    align: label.align,
                    font,
                    translate: [
                        x + (label.shift.x ?? 0),
                        y + font.size + 5 + (label.shift.y ?? 0)
                    ],
                    angle: label.angle
                });
            }
            x += candleSize + candle.distance;
        }
    }
    add([x, hi, low, open, close], shift = false) {
        const o = this.options;
        let data;
        if (!this.data) this.data = [];
        data = this.data;
        if (shift && data.length) {
            if (!o.graphSize) data = data.slice(1);
            else if (data.length >= o.graphSize) data = data.slice(1);
        }
        this.data = data;
        this.data.push([
            x,
            hi,
            low,
            open,
            close
        ]);
        this.calcMinMax();
        this.resize();
    }
    draw() {
        super.draw();
        this.calcRatio();
        this.axis();
        this.arrows();
        this.candlesticks();
    }
}
Object.assign(CandlestickChart.prototype, (0, _axis.MixinAxis));
Object.assign(CandlestickChart.prototype, (0, _tooltip.MixinTooltip));
Object.assign(CandlestickChart.prototype, (0, _arrows.MixinArrows));
const candlestickChart = (el, data, options)=>new CandlestickChart(el, data, options);

},{"../base":"cyKts","../../helpers/merge":"1bRax","../../defaults/сandlestick":"f8FkX","../../helpers/min-max":"lds97","../../mixins/axis":"b02Nt","../../draw/candle":"9zP3j","../../helpers/expand-padding":"1hsxM","../../draw/vector":"9BjpA","../../draw/text":"9Q34i","../../draw/rect":"8wOwN","../../mixins/tooltip":"dkGVH","../../mixins/arrows":"l8X2M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8FkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultCandlestickOptions", ()=>defaultCandlestickOptions);
var _axis = require("./elements/axis");
var _arrow = require("./elements/arrow");
const defaultCandlestickOptions = {
    axis: (0, _axis.defaultAxis),
    boundaries: {
        minY: 0
    },
    candle: {
        size: 1,
        width: "auto",
        white: "green",
        black: "red",
        distance: 4,
        cutoff: false
    },
    ghost: {
        stroke: "#e3e3e3",
        fill: "#e3e3e3"
    },
    arrows: (0, _arrow.defaultArrows)
};

},{"./elements/axis":"8h06E","./elements/arrow":"b6MIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9zP3j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawCandle", ()=>drawCandle);
const drawCandle = (ctx, [x, y, h, by, bw, bh], { color = "red", size = 1, leg = false } = {})=>{
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash([]);
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + h);
    if (leg) {
        ctx.moveTo(x - bw / 2, y);
        ctx.lineTo(x + bw / 2, y);
        ctx.moveTo(x - bw / 2, y + h);
        ctx.lineTo(x + bw / 2, y + h);
    }
    ctx.rect(x - bw / 2, by, bw, bh);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    ctx.closePath();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGsmW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lpad", ()=>lpad);
parcelHelpers.export(exports, "rand", ()=>rand);
parcelHelpers.export(exports, "genData", ()=>genData);
parcelHelpers.export(exports, "genTriplet", ()=>genTriplet);
parcelHelpers.export(exports, "getOne", ()=>getOne);
const lpad = (v)=>v.toString().length < 2 ? "0" + v : v;
const rand = (min, max)=>Math.floor(min + Math.random() * (max + 1 - min));
const genData = (count, min, max)=>{
    let y = 0, x = 0, a = [];
    for(let i = 0; i < count; i++){
        y = rand(min, max);
        a.push([
            x,
            y
        ]);
        x += 10;
    }
    return a;
};
const genTriplet = (count, min, max)=>{
    let y = 0, x = 0, a = [], d = 10;
    for(let i = 0; i < count; i++){
        y = rand(min, max);
        x += d;
        a.push([
            x - d,
            x,
            y
        ]);
    }
    return a;
};
const getOne = ()=>rand(-1, 1) > 0 ? 1 : -1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1C1Gg","3NoK2"], "3NoK2", "parcelRequire3197")

//# sourceMappingURL=index.59ba1819.js.map
