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
})({"4M2N4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "routes", ()=>routes);
var _router = require("./Router");
var _nav = require("./Nav");
var _styles = require("./styles");
const root = document.getElementById("content");
const navRoot = document.getElementById("side-nav");
const routes = [
    {
        path: "/",
        index: true,
        ext: "md",
        content: null
    },
    {
        path: "/flight-sim",
        pathAlias: "/fly",
        ext: "md",
        navOptions: {
            ignoreSections: false
        }
    },
    {
        path: "/web-development",
        ext: "md",
        pathAlias: "web"
    },
    {
        path: "/typescript",
        ext: "md",
        navOptions: {
            ignoreSections: true
        }
    },
    {
        path: "/f1",
        ext: "md"
    }
];
const router = new (0, _router.Router)(routes, root, "/handbook");
const sidebar = new (0, _nav.Nav)(navRoot, router);
(async function() {
    sidebar.init({
        title: "Markdown viewer - Demo",
        styles: (0, _styles.nav)
    });
    await router.init({
        markdownStyle: (0, _styles.md)
    });
    // Hydrate side nav with route content
    sidebar.hydrate(router.allRoutes);
})();

},{"./Router":"aTTgD","./Nav":"hwr26","./styles":"6mYsd","@parcel/transformer-js/src/esmodule-helpers.js":"u0uJw"}],"aTTgD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class representing a router
 */ parcelHelpers.export(exports, "Router", ()=>Router);
var _showdown = require("showdown");
var _showdownDefault = parcelHelpers.interopDefault(_showdown);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
var _styles = require("./helper/styles");
var _dom = require("../utils/dom");
const showdownConfig = {
    ghCompatibleHeaderId: true,
    headerLevelStart: 2,
    tables: true,
    parseImgDimensions: true
};
const parser = new DOMParser();
const converter = new (0, _showdownDefault.default).Converter(showdownConfig);
class Router {
    constructor(routes, root, basePath = ""){
        this.root = root;
        this.routes = routes;
        this.basePath = basePath;
    }
    /** Get current route of this instance. */ get currentRoute() {
        return this.current;
    }
    /** Get list of routes in this instance. */ get allRoutes() {
        return this.routes;
    }
    /**
     * Converts markdown string to an`HTMLBodyElement`.
     * @param rawMD Markdown string to process.
     * @returns Content of `rawMD` as an`HTMLBodyElement`.
     */ markdown2html(rawMD) {
        const rawHTML = converter.makeHtml(rawMD);
        // Parse and get element for manipulation
        const body = parser.parseFromString(rawHTML, "text/html").querySelector("body");
        // Title of the page
        const title = body.querySelector("h2");
        // Content that preceding first section
        const baseContent = (0, _dom.nextSiblingUntil)(title, "h3");
        // Get every main section ## = h3
        const sections = [
            ...body.querySelectorAll("h3")
        ];
        // Skip if page doesn't include at least one a main section
        if (sections.length > 0) {
            // Blank body
            const processedBody = document.implementation.createHTMLDocument("").querySelector("body");
            // Insert page title
            processedBody.insertAdjacentElement("afterbegin", title);
            // Insert preceding content
            baseContent.forEach((el)=>processedBody.insertAdjacentElement("beforeend", el));
            // Wrap all sections into a div
            sections.forEach((el)=>{
                const container = document.createElement("div");
                const title = document.createElement("h3");
                const titleText = document.createTextNode(el.textContent);
                title.id = el.id;
                title.append(titleText);
                // Insert section title
                container.append(title);
                container.id = `${el.id}-container`;
                // Insert all sections children
                (0, _dom.nextSiblingUntil)(el, "h3").forEach((child)=>{
                    container.append(child);
                });
                processedBody.append(container);
            });
            return processedBody;
        }
        return body;
    }
    /**
     * Apply styles to provided element.
     * @param body Apply styles to all children.
     * @returns
     */ styleHTML(body) {
        if (!this.markdownStyle) throw new Error("No style source.");
        const { markdownStyle } = this;
        // TODO: Assign Type for all the valid tag name.
        // We'll push all keys from the style object so we can loop through later.
        const queries = [];
        for (const [key] of Object.entries(markdownStyle))queries.push(key);
        // Get all elements that we can style.
        const elems = Array.from(body.querySelectorAll(queries.join(",")));
        elems.forEach((elem)=>{
            const key = elem.tagName.toLowerCase();
            const process = (elem)=>{
                // Insert plane icons in blockquote elements.
                if (key === "blockquote") elem.querySelector("p").insertAdjacentHTML("afterbegin", // '<i aria-hidden="true" class="mr-2 fa-solid fa-plane text-brand"></i>'
                "\u2699\uFE0F ");
                elem.classList.add(...markdownStyle[key]);
            };
            process(elem);
        });
        return body;
    }
    async load(route) {
        try {
            let tempPath = route.path;
            if (route.index) tempPath = "/index";
            const filename = `${tempPath}.${route.ext}`;
            // Fetch resource
            const res = await fetch(this.basePath + filename, {
                headers: {
                    "Cache-Control": "no-cache"
                }
            });
            // Remove route from Router if not found.
            if (res.status !== 200) this.routes.splice(this.routes.indexOf(route), 1);
            const raw = await res.text();
            // Sanitize html, convert if markdown
            const cleanHTMLString = (0, _dompurifyDefault.default).sanitize(route.ext === "md" ? this.markdown2html(raw) : raw);
            const addLinksTarget = (body, target)=>{
                body.querySelectorAll("a").forEach((a)=>{
                    if (a.href.includes(this.basePath)) return;
                    a.target = target;
                    a.rel = "noreferrer";
                });
                return body;
            };
            const body = addLinksTarget(parser.parseFromString(cleanHTMLString, "text/html").querySelector("body"), "_blank");
            const title = body.querySelector("h2");
            // If title id doesn't match the path (without '/'), correct it.
            if (title.id !== route.path.slice(1)) title.id = route.path !== "/" ? route.path.slice(1) : "";
            if (this.markdownStyle) this.styleHTML(body);
            route.content = body;
        } catch (err) {
            console.log(err.message);
        }
    }
    validateRoute(path) {
        const needle = path;
        const found = this.routes.find(({ path })=>path === needle);
        if (!found && path !== this.basePath) return false;
        return true;
    }
    /**
     * Takes care hydrating the root element with the right content, also
     * scrolls the user to the provided hash anchor.
     *
     * @param path Navigate to this path.
     * @param popState Was called by the `PopState` event?
     * @returns
     */ navigate(path, popState = false) {
        // Format path | Trim basePath, ect..
        const { route, hash } = this.decomposePath(path);
        //Verify route exists
        if (!this.validateRoute(route)) return new Error("Invalid route");
        const target = this.routes.find((availRoute)=>availRoute.path === route);
        const newPath = this.basePath + (route === "/" ? "" : route) + (hash ? hash : "");
        const alreadyLoaded = route === this.current?.path;
        const sameRoute = window.history.state?.hash === hash && alreadyLoaded;
        if (!alreadyLoaded) {
            this.current = target;
            this.root.innerHTML = target.content.innerHTML;
        }
        if (!popState && !sameRoute) window.history.pushState(hash ? {
            hash: hash
        } : null, "", newPath);
        const heading = hash !== "#" ? document.querySelector(hash) : null;
        const options = {
            behavior: alreadyLoaded ? "smooth" : "auto",
            top: 0
        };
        const container = document.querySelector(hash + "-container");
        hash !== "#" && heading ? container ? container.scrollIntoView(true) : document.querySelector(hash).scrollIntoView(true) : window.scroll(options);
        return target;
    }
    /**
     * Decomposes provided path into an object containing a trimmed route path key and a hash key,
     * trims the basePath from the route.
     *
     * Returns '#' for no hashs, '/' for the root route.
     *
     * @param path Path to decompose.
     * @returns
     */ decomposePath(path) {
        let [route, hash] = path.split("#");
        if (route.startsWith(this.basePath)) route = route.substring(this.basePath.length);
        if (route.length === 0) route = "/";
        return {
            route,
            hash: hash ? "#" + hash : "#"
        };
    }
    /**
     * Initializes the router.
     * @param RouterConfig Config object for `Router`.
     */ async init({ markdownStyle }) {
        const hash = location.hash;
        // Assign styles for markdown
        if (markdownStyle) this.markdownStyle = (0, _styles.makeStylesIterable)(markdownStyle);
        // Load routes
        await Promise.all(this.routes.map(async (route)=>await this.load(route)));
        //Verify route exists, if not redirect to root
        if (!this.validateRoute(this.decomposePath(location.pathname).route)) this.navigate("/");
        const trimmedPath = location.pathname.substring(this.basePath.length);
        let requestPath = trimmedPath.length === 0 ? "/" : trimmedPath;
        if (hash) requestPath = requestPath + hash;
        this.navigate(requestPath);
        window.onpopstate = ({ state })=>{
            let hash = state?.hash ? state.hash : "";
            let previousPath = window.location.pathname;
            hash;
            this.navigate(previousPath, true);
        };
    }
}

},{"showdown":"hafi5","dompurify":"04KWi","./helper/styles":"c9ypK","../utils/dom":"k7yfc","@parcel/transformer-js/src/esmodule-helpers.js":"u0uJw"}],"hafi5":[function(require,module,exports) {
(function() {
    /**
 * Created by Tivie on 13-07-2015.
 */ function getDefaultOpts(simple) {
        "use strict";
        var defaultOptions = {
            omitExtraWLInCodeBlocks: {
                defaultValue: false,
                describe: "Omit the default extra whiteline added to code blocks",
                type: "boolean"
            },
            noHeaderId: {
                defaultValue: false,
                describe: "Turn on/off generated header id",
                type: "boolean"
            },
            prefixHeaderId: {
                defaultValue: false,
                describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                type: "string"
            },
            rawPrefixHeaderId: {
                defaultValue: false,
                describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                type: "boolean"
            },
            ghCompatibleHeaderId: {
                defaultValue: false,
                describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                type: "boolean"
            },
            rawHeaderId: {
                defaultValue: false,
                describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                type: "boolean"
            },
            headerLevelStart: {
                defaultValue: false,
                describe: "The header blocks level start",
                type: "integer"
            },
            parseImgDimensions: {
                defaultValue: false,
                describe: "Turn on/off image dimension parsing",
                type: "boolean"
            },
            simplifiedAutoLink: {
                defaultValue: false,
                describe: "Turn on/off GFM autolink style",
                type: "boolean"
            },
            excludeTrailingPunctuationFromURLs: {
                defaultValue: false,
                describe: "Excludes trailing punctuation from links generated with autoLinking",
                type: "boolean"
            },
            literalMidWordUnderscores: {
                defaultValue: false,
                describe: "Parse midword underscores as literal underscores",
                type: "boolean"
            },
            literalMidWordAsterisks: {
                defaultValue: false,
                describe: "Parse midword asterisks as literal asterisks",
                type: "boolean"
            },
            strikethrough: {
                defaultValue: false,
                describe: "Turn on/off strikethrough support",
                type: "boolean"
            },
            tables: {
                defaultValue: false,
                describe: "Turn on/off tables support",
                type: "boolean"
            },
            tablesHeaderId: {
                defaultValue: false,
                describe: "Add an id to table headers",
                type: "boolean"
            },
            ghCodeBlocks: {
                defaultValue: true,
                describe: "Turn on/off GFM fenced code blocks support",
                type: "boolean"
            },
            tasklists: {
                defaultValue: false,
                describe: "Turn on/off GFM tasklist support",
                type: "boolean"
            },
            smoothLivePreview: {
                defaultValue: false,
                describe: "Prevents weird effects in live previews due to incomplete input",
                type: "boolean"
            },
            smartIndentationFix: {
                defaultValue: false,
                describe: "Tries to smartly fix indentation in es6 strings",
                type: "boolean"
            },
            disableForced4SpacesIndentedSublists: {
                defaultValue: false,
                describe: "Disables the requirement of indenting nested sublists by 4 spaces",
                type: "boolean"
            },
            simpleLineBreaks: {
                defaultValue: false,
                describe: "Parses simple line breaks as <br> (GFM Style)",
                type: "boolean"
            },
            requireSpaceBeforeHeadingText: {
                defaultValue: false,
                describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                type: "boolean"
            },
            ghMentions: {
                defaultValue: false,
                describe: "Enables github @mentions",
                type: "boolean"
            },
            ghMentionsLink: {
                defaultValue: "https://github.com/{u}",
                describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                type: "string"
            },
            encodeEmails: {
                defaultValue: true,
                describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                type: "boolean"
            },
            openLinksInNewWindow: {
                defaultValue: false,
                describe: "Open all links in new windows",
                type: "boolean"
            },
            backslashEscapesHTMLTags: {
                defaultValue: false,
                describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
                type: "boolean"
            },
            emoji: {
                defaultValue: false,
                describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
                type: "boolean"
            },
            underline: {
                defaultValue: false,
                describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                type: "boolean"
            },
            ellipsis: {
                defaultValue: true,
                describe: "Replaces three dots with the ellipsis unicode character",
                type: "boolean"
            },
            completeHTMLDocument: {
                defaultValue: false,
                describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                type: "boolean"
            },
            metadata: {
                defaultValue: false,
                describe: "Enable support for document metadata (defined at the top of the document between `\xab\xab\xab` and `\xbb\xbb\xbb` or between `---` and `---`).",
                type: "boolean"
            },
            splitAdjacentBlockquotes: {
                defaultValue: false,
                describe: "Split adjacent blockquote blocks",
                type: "boolean"
            }
        };
        if (simple === false) return JSON.parse(JSON.stringify(defaultOptions));
        var ret = {};
        for(var opt in defaultOptions)if (defaultOptions.hasOwnProperty(opt)) ret[opt] = defaultOptions[opt].defaultValue;
        return ret;
    }
    function allOptionsOn() {
        "use strict";
        var options = getDefaultOpts(true), ret = {};
        for(var opt in options)if (options.hasOwnProperty(opt)) ret[opt] = true;
        return ret;
    }
    /**
 * Created by Tivie on 06-01-2015.
 */ // Private properties
    var showdown = {}, parsers = {}, extensions = {}, globalOptions = getDefaultOpts(true), setFlavor = "vanilla", flavor = {
        github: {
            omitExtraWLInCodeBlocks: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            disableForced4SpacesIndentedSublists: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghCompatibleHeaderId: true,
            ghMentions: true,
            backslashEscapesHTMLTags: true,
            emoji: true,
            splitAdjacentBlockquotes: true
        },
        original: {
            noHeaderId: true,
            ghCodeBlocks: false
        },
        ghost: {
            omitExtraWLInCodeBlocks: true,
            parseImgDimensions: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            smoothLivePreview: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghMentions: false,
            encodeEmails: true
        },
        vanilla: getDefaultOpts(true),
        allOn: allOptionsOn()
    };
    /**
 * helper namespace
 * @type {{}}
 */ showdown.helper = {};
    /**
 * TODO LEGACY SUPPORT CODE
 * @type {{}}
 */ showdown.extensions = {};
    /**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {showdown}
 */ showdown.setOption = function(key, value) {
        "use strict";
        globalOptions[key] = value;
        return this;
    };
    /**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */ showdown.getOption = function(key) {
        "use strict";
        return globalOptions[key];
    };
    /**
 * Get the global options
 * @static
 * @returns {{}}
 */ showdown.getOptions = function() {
        "use strict";
        return globalOptions;
    };
    /**
 * Reset global options to the default values
 * @static
 */ showdown.resetOptions = function() {
        "use strict";
        globalOptions = getDefaultOpts(true);
    };
    /**
 * Set the flavor showdown should use as default
 * @param {string} name
 */ showdown.setFlavor = function(name) {
        "use strict";
        if (!flavor.hasOwnProperty(name)) throw Error(name + " flavor was not found");
        showdown.resetOptions();
        var preset = flavor[name];
        setFlavor = name;
        for(var option in preset)if (preset.hasOwnProperty(option)) globalOptions[option] = preset[option];
    };
    /**
 * Get the currently set flavor
 * @returns {string}
 */ showdown.getFlavor = function() {
        "use strict";
        return setFlavor;
    };
    /**
 * Get the options of a specified flavor. Returns undefined if the flavor was not found
 * @param {string} name Name of the flavor
 * @returns {{}|undefined}
 */ showdown.getFlavorOptions = function(name) {
        "use strict";
        if (flavor.hasOwnProperty(name)) return flavor[name];
    };
    /**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */ showdown.getDefaultOptions = function(simple) {
        "use strict";
        return getDefaultOpts(simple);
    };
    /**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */ showdown.subParser = function(name, func) {
        "use strict";
        if (showdown.helper.isString(name)) {
            if (typeof func !== "undefined") parsers[name] = func;
            else {
                if (parsers.hasOwnProperty(name)) return parsers[name];
                else throw Error("SubParser named " + name + " not registered!");
            }
        }
    };
    /**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|object[]|function=} ext
 * @returns {*}
 */ showdown.extension = function(name, ext) {
        "use strict";
        if (!showdown.helper.isString(name)) throw Error("Extension 'name' must be a string");
        name = showdown.helper.stdExtName(name);
        // Getter
        if (showdown.helper.isUndefined(ext)) {
            if (!extensions.hasOwnProperty(name)) throw Error("Extension named " + name + " is not registered!");
            return extensions[name];
        // Setter
        } else {
            // Expand extension if it's wrapped in a function
            if (typeof ext === "function") ext = ext();
            // Ensure extension is an array
            if (!showdown.helper.isArray(ext)) ext = [
                ext
            ];
            var validExtension = validate(ext, name);
            if (validExtension.valid) extensions[name] = ext;
            else throw Error(validExtension.error);
        }
    };
    /**
 * Gets all extensions registered
 * @returns {{}}
 */ showdown.getAllExtensions = function() {
        "use strict";
        return extensions;
    };
    /**
 * Remove an extension
 * @param {string} name
 */ showdown.removeExtension = function(name) {
        "use strict";
        delete extensions[name];
    };
    /**
 * Removes all extensions
 */ showdown.resetExtensions = function() {
        "use strict";
        extensions = {};
    };
    /**
 * Validate extension
 * @param {array} extension
 * @param {string} name
 * @returns {{valid: boolean, error: string}}
 */ function validate(extension, name) {
        "use strict";
        var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
            valid: true,
            error: ""
        };
        if (!showdown.helper.isArray(extension)) extension = [
            extension
        ];
        for(var i = 0; i < extension.length; ++i){
            var baseMsg = errMsg + " sub-extension " + i + ": ", ext = extension[i];
            if (typeof ext !== "object") {
                ret.valid = false;
                ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
                return ret;
            }
            if (!showdown.helper.isString(ext.type)) {
                ret.valid = false;
                ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
                return ret;
            }
            var type = ext.type = ext.type.toLowerCase();
            // normalize extension type
            if (type === "language") type = ext.type = "lang";
            if (type === "html") type = ext.type = "output";
            if (type !== "lang" && type !== "output" && type !== "listener") {
                ret.valid = false;
                ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
                return ret;
            }
            if (type === "listener") {
                if (showdown.helper.isUndefined(ext.listeners)) {
                    ret.valid = false;
                    ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
                    return ret;
                }
            } else if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
                ret.valid = false;
                ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
                return ret;
            }
            if (ext.listeners) {
                if (typeof ext.listeners !== "object") {
                    ret.valid = false;
                    ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
                    return ret;
                }
                for(var ln in ext.listeners){
                    if (ext.listeners.hasOwnProperty(ln)) {
                        if (typeof ext.listeners[ln] !== "function") {
                            ret.valid = false;
                            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
                            return ret;
                        }
                    }
                }
            }
            if (ext.filter) {
                if (typeof ext.filter !== "function") {
                    ret.valid = false;
                    ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
                    return ret;
                }
            } else if (ext.regex) {
                if (showdown.helper.isString(ext.regex)) ext.regex = new RegExp(ext.regex, "g");
                if (!(ext.regex instanceof RegExp)) {
                    ret.valid = false;
                    ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
                    return ret;
                }
                if (showdown.helper.isUndefined(ext.replace)) {
                    ret.valid = false;
                    ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
                    return ret;
                }
            }
        }
        return ret;
    }
    /**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */ showdown.validateExtension = function(ext) {
        "use strict";
        var validateExtension = validate(ext, null);
        if (!validateExtension.valid) {
            console.warn(validateExtension.error);
            return false;
        }
        return true;
    };
    /**
 * showdownjs helper functions
 */ if (!showdown.hasOwnProperty("helper")) showdown.helper = {};
    /**
 * Check if var is string
 * @static
 * @param {string} a
 * @returns {boolean}
 */ showdown.helper.isString = function(a) {
        "use strict";
        return typeof a === "string" || a instanceof String;
    };
    /**
 * Check if var is a function
 * @static
 * @param {*} a
 * @returns {boolean}
 */ showdown.helper.isFunction = function(a) {
        "use strict";
        var getType = {};
        return a && getType.toString.call(a) === "[object Function]";
    };
    /**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */ showdown.helper.isArray = function(a) {
        "use strict";
        return Array.isArray(a);
    };
    /**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */ showdown.helper.isUndefined = function(value) {
        "use strict";
        return typeof value === "undefined";
    };
    /**
 * ForEach helper function
 * Iterates over Arrays and Objects (own properties only)
 * @static
 * @param {*} obj
 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
 */ showdown.helper.forEach = function(obj, callback) {
        "use strict";
        // check if obj is defined
        if (showdown.helper.isUndefined(obj)) throw new Error("obj param is required");
        if (showdown.helper.isUndefined(callback)) throw new Error("callback param is required");
        if (!showdown.helper.isFunction(callback)) throw new Error("callback param must be a function/closure");
        if (typeof obj.forEach === "function") obj.forEach(callback);
        else if (showdown.helper.isArray(obj)) for(var i = 0; i < obj.length; i++)callback(obj[i], i, obj);
        else if (typeof obj === "object") {
            for(var prop in obj)if (obj.hasOwnProperty(prop)) callback(obj[prop], prop, obj);
        } else throw new Error("obj does not seem to be an array or an iterable object");
    };
    /**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */ showdown.helper.stdExtName = function(s) {
        "use strict";
        return s.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
    };
    function escapeCharactersCallback(wholeMatch, m1) {
        "use strict";
        var charCodeToEscape = m1.charCodeAt(0);
        return "\xa8E" + charCodeToEscape + "E";
    }
    /**
 * Callback used to escape characters when passing through String.replace
 * @static
 * @param {string} wholeMatch
 * @param {string} m1
 * @returns {string}
 */ showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
    /**
 * Escape characters in a string
 * @static
 * @param {string} text
 * @param {string} charsToEscape
 * @param {boolean} afterBackslash
 * @returns {XML|string|void|*}
 */ showdown.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
        "use strict";
        // First we have to escape the escape characters so that
        // we can build a character class out of them
        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
        if (afterBackslash) regexString = "\\\\" + regexString;
        var regex = new RegExp(regexString, "g");
        text = text.replace(regex, escapeCharactersCallback);
        return text;
    };
    /**
 * Unescape HTML entities
 * @param txt
 * @returns {string}
 */ showdown.helper.unescapeHTMLEntities = function(txt) {
        "use strict";
        return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    };
    var rgxFindMatchPos = function(str, left, right, flags) {
        "use strict";
        var f = flags || "", g = f.indexOf("g") > -1, x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")), l = new RegExp(left, f.replace(/g/g, "")), pos = [], t, s, m, start, end;
        do {
            t = 0;
            while(m = x.exec(str)){
                if (l.test(m[0])) {
                    if (!t++) {
                        s = x.lastIndex;
                        start = s - m[0].length;
                    }
                } else if (t) {
                    if (!--t) {
                        end = m.index + m[0].length;
                        var obj = {
                            left: {
                                start: start,
                                end: s
                            },
                            match: {
                                start: s,
                                end: m.index
                            },
                            right: {
                                start: m.index,
                                end: end
                            },
                            wholeMatch: {
                                start: start,
                                end: end
                            }
                        };
                        pos.push(obj);
                        if (!g) return pos;
                    }
                }
            }
        }while (t && (x.lastIndex = s));
        return pos;
    };
    /**
 * matchRecursiveRegExp
 *
 * (c) 2007 Steven Levithan <stevenlevithan.com>
 * MIT License
 *
 * Accepts a string to search, a left and right format delimiter
 * as regex patterns, and optional regex flags. Returns an array
 * of matches, allowing nested instances of left/right delimiters.
 * Use the "g" flag to return all matches, otherwise only the
 * first is returned. Be careful to ensure that the left and
 * right format delimiters produce mutually exclusive matches.
 * Backreferences are not supported within the right delimiter
 * due to how it is internally combined with the left delimiter.
 * When matching strings whose format delimiters are unbalanced
 * to the left or right, the output is intentionally as a
 * conventional regex library with recursion support would
 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
 * "<" and ">" as the delimiters (both strings contain a single,
 * balanced instance of "<x>").
 *
 * examples:
 * matchRecursiveRegExp("test", "\\(", "\\)")
 * returns: []
 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
 * returns: ["t<<e>><s>", ""]
 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
 * returns: ["test"]
 */ showdown.helper.matchRecursiveRegExp = function(str, left, right, flags) {
        "use strict";
        var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
        for(var i = 0; i < matchPos.length; ++i)results.push([
            str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
            str.slice(matchPos[i].match.start, matchPos[i].match.end),
            str.slice(matchPos[i].left.start, matchPos[i].left.end),
            str.slice(matchPos[i].right.start, matchPos[i].right.end)
        ]);
        return results;
    };
    /**
 *
 * @param {string} str
 * @param {string|function} replacement
 * @param {string} left
 * @param {string} right
 * @param {string} flags
 * @returns {string}
 */ showdown.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
        "use strict";
        if (!showdown.helper.isFunction(replacement)) {
            var repStr = replacement;
            replacement = function() {
                return repStr;
            };
        }
        var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
        if (lng > 0) {
            var bits = [];
            if (matchPos[0].wholeMatch.start !== 0) bits.push(str.slice(0, matchPos[0].wholeMatch.start));
            for(var i = 0; i < lng; ++i){
                bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));
                if (i < lng - 1) bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
            }
            if (matchPos[lng - 1].wholeMatch.end < str.length) bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
            finalStr = bits.join("");
        }
        return finalStr;
    };
    /**
 * Returns the index within the passed String object of the first occurrence of the specified regex,
 * starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param {string} str string to search
 * @param {RegExp} regex Regular expression to search
 * @param {int} [fromIndex = 0] Index to start the search
 * @returns {Number}
 * @throws InvalidArgumentError
 */ showdown.helper.regexIndexOf = function(str, regex, fromIndex) {
        "use strict";
        if (!showdown.helper.isString(str)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (regex instanceof RegExp === false) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var indexOf = str.substring(fromIndex || 0).search(regex);
        return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
    };
    /**
 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
 * @param {string} str string to split
 * @param {int} index index to split string at
 * @returns {[string,string]}
 * @throws InvalidArgumentError
 */ showdown.helper.splitAtIndex = function(str, index) {
        "use strict";
        if (!showdown.helper.isString(str)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [
            str.substring(0, index),
            str.substring(index)
        ];
    };
    /**
 * Obfuscate an e-mail address through the use of Character Entities,
 * transforming ASCII characters into their equivalent decimal or hex entities.
 *
 * Since it has a random component, subsequent calls to this function produce different results
 *
 * @param {string} mail
 * @returns {string}
 */ showdown.helper.encodeEmailAddress = function(mail) {
        "use strict";
        var encode = [
            function(ch) {
                return "&#" + ch.charCodeAt(0) + ";";
            },
            function(ch) {
                return "&#x" + ch.charCodeAt(0).toString(16) + ";";
            },
            function(ch) {
                return ch;
            }
        ];
        mail = mail.replace(/./g, function(ch) {
            if (ch === "@") // this *must* be encoded. I insist.
            ch = encode[Math.floor(Math.random() * 2)](ch);
            else {
                var r = Math.random();
                // roughly 10% raw, 45% hex, 45% dec
                ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
            }
            return ch;
        });
        return mail;
    };
    /**
 *
 * @param str
 * @param targetLength
 * @param padString
 * @returns {string}
 */ showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
        "use strict";
        /*jshint bitwise: false*/ // eslint-disable-next-line space-infix-ops
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        /*jshint bitwise: true*/ padString = String(padString || " ");
        if (str.length > targetLength) return String(str);
        else {
            targetLength = targetLength - str.length;
            if (targetLength > padString.length) padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            return String(str) + padString.slice(0, targetLength);
        }
    };
    /**
 * POLYFILLS
 */ // use this instead of builtin is undefined for IE8 compatibility
    if (typeof console === "undefined") console = {
        warn: function(msg) {
            "use strict";
            alert(msg);
        },
        log: function(msg) {
            "use strict";
            alert(msg);
        },
        error: function(msg) {
            "use strict";
            throw msg;
        }
    };
    /**
 * Common regexes.
 * We declare some common regexes to improve performance
 */ showdown.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
    };
    /**
 * EMOJIS LIST
 */ showdown.helper.emojis = {
        "+1": "\ud83d\udc4d",
        "-1": "\ud83d\udc4e",
        "100": "\ud83d\udcaf",
        "1234": "\ud83d\udd22",
        "1st_place_medal": "\ud83e\udd47",
        "2nd_place_medal": "\ud83e\udd48",
        "3rd_place_medal": "\ud83e\udd49",
        "8ball": "\ud83c\udfb1",
        "a": "\ud83c\udd70\uFE0F",
        "ab": "\ud83c\udd8e",
        "abc": "\ud83d\udd24",
        "abcd": "\ud83d\udd21",
        "accept": "\ud83c\ude51",
        "aerial_tramway": "\ud83d\udea1",
        "airplane": "\u2708\uFE0F",
        "alarm_clock": "\u23F0",
        "alembic": "\u2697\uFE0F",
        "alien": "\ud83d\udc7d",
        "ambulance": "\ud83d\ude91",
        "amphora": "\ud83c\udffa",
        "anchor": "\u2693\uFE0F",
        "angel": "\ud83d\udc7c",
        "anger": "\ud83d\udca2",
        "angry": "\ud83d\ude20",
        "anguished": "\ud83d\ude27",
        "ant": "\ud83d\udc1c",
        "apple": "\ud83c\udf4e",
        "aquarius": "\u2652\uFE0F",
        "aries": "\u2648\uFE0F",
        "arrow_backward": "\u25C0\uFE0F",
        "arrow_double_down": "\u23EC",
        "arrow_double_up": "\u23EB",
        "arrow_down": "\u2B07\uFE0F",
        "arrow_down_small": "\ud83d\udd3d",
        "arrow_forward": "\u25B6\uFE0F",
        "arrow_heading_down": "\u2935\uFE0F",
        "arrow_heading_up": "\u2934\uFE0F",
        "arrow_left": "\u2B05\uFE0F",
        "arrow_lower_left": "\u2199\uFE0F",
        "arrow_lower_right": "\u2198\uFE0F",
        "arrow_right": "\u27A1\uFE0F",
        "arrow_right_hook": "\u21AA\uFE0F",
        "arrow_up": "\u2B06\uFE0F",
        "arrow_up_down": "\u2195\uFE0F",
        "arrow_up_small": "\ud83d\udd3c",
        "arrow_upper_left": "\u2196\uFE0F",
        "arrow_upper_right": "\u2197\uFE0F",
        "arrows_clockwise": "\ud83d\udd03",
        "arrows_counterclockwise": "\ud83d\udd04",
        "art": "\ud83c\udfa8",
        "articulated_lorry": "\ud83d\ude9b",
        "artificial_satellite": "\ud83d\udef0",
        "astonished": "\ud83d\ude32",
        "athletic_shoe": "\ud83d\udc5f",
        "atm": "\ud83c\udfe7",
        "atom_symbol": "\u269B\uFE0F",
        "avocado": "\ud83e\udd51",
        "b": "\ud83c\udd71\uFE0F",
        "baby": "\ud83d\udc76",
        "baby_bottle": "\ud83c\udf7c",
        "baby_chick": "\ud83d\udc24",
        "baby_symbol": "\ud83d\udebc",
        "back": "\ud83d\udd19",
        "bacon": "\ud83e\udd53",
        "badminton": "\ud83c\udff8",
        "baggage_claim": "\ud83d\udec4",
        "baguette_bread": "\ud83e\udd56",
        "balance_scale": "\u2696\uFE0F",
        "balloon": "\ud83c\udf88",
        "ballot_box": "\ud83d\uddf3",
        "ballot_box_with_check": "\u2611\uFE0F",
        "bamboo": "\ud83c\udf8d",
        "banana": "\ud83c\udf4c",
        "bangbang": "\u203C\uFE0F",
        "bank": "\ud83c\udfe6",
        "bar_chart": "\ud83d\udcca",
        "barber": "\ud83d\udc88",
        "baseball": "\u26BE\uFE0F",
        "basketball": "\ud83c\udfc0",
        "basketball_man": "\u26F9\uFE0F",
        "basketball_woman": "\u26F9\uFE0F&zwj;\u2640\uFE0F",
        "bat": "\ud83e\udd87",
        "bath": "\ud83d\udec0",
        "bathtub": "\ud83d\udec1",
        "battery": "\ud83d\udd0b",
        "beach_umbrella": "\ud83c\udfd6",
        "bear": "\ud83d\udc3b",
        "bed": "\ud83d\udecf",
        "bee": "\ud83d\udc1d",
        "beer": "\ud83c\udf7a",
        "beers": "\ud83c\udf7b",
        "beetle": "\ud83d\udc1e",
        "beginner": "\ud83d\udd30",
        "bell": "\ud83d\udd14",
        "bellhop_bell": "\ud83d\udece",
        "bento": "\ud83c\udf71",
        "biking_man": "\ud83d\udeb4",
        "bike": "\ud83d\udeb2",
        "biking_woman": "\ud83d\udeb4&zwj;\u2640\uFE0F",
        "bikini": "\ud83d\udc59",
        "biohazard": "\u2623\uFE0F",
        "bird": "\ud83d\udc26",
        "birthday": "\ud83c\udf82",
        "black_circle": "\u26AB\uFE0F",
        "black_flag": "\ud83c\udff4",
        "black_heart": "\ud83d\udda4",
        "black_joker": "\ud83c\udccf",
        "black_large_square": "\u2B1B\uFE0F",
        "black_medium_small_square": "\u25FE\uFE0F",
        "black_medium_square": "\u25FC\uFE0F",
        "black_nib": "\u2712\uFE0F",
        "black_small_square": "\u25AA\uFE0F",
        "black_square_button": "\ud83d\udd32",
        "blonde_man": "\ud83d\udc71",
        "blonde_woman": "\ud83d\udc71&zwj;\u2640\uFE0F",
        "blossom": "\ud83c\udf3c",
        "blowfish": "\ud83d\udc21",
        "blue_book": "\ud83d\udcd8",
        "blue_car": "\ud83d\ude99",
        "blue_heart": "\ud83d\udc99",
        "blush": "\ud83d\ude0a",
        "boar": "\ud83d\udc17",
        "boat": "\u26F5\uFE0F",
        "bomb": "\ud83d\udca3",
        "book": "\ud83d\udcd6",
        "bookmark": "\ud83d\udd16",
        "bookmark_tabs": "\ud83d\udcd1",
        "books": "\ud83d\udcda",
        "boom": "\ud83d\udca5",
        "boot": "\ud83d\udc62",
        "bouquet": "\ud83d\udc90",
        "bowing_man": "\ud83d\ude47",
        "bow_and_arrow": "\ud83c\udff9",
        "bowing_woman": "\ud83d\ude47&zwj;\u2640\uFE0F",
        "bowling": "\ud83c\udfb3",
        "boxing_glove": "\ud83e\udd4a",
        "boy": "\ud83d\udc66",
        "bread": "\ud83c\udf5e",
        "bride_with_veil": "\ud83d\udc70",
        "bridge_at_night": "\ud83c\udf09",
        "briefcase": "\ud83d\udcbc",
        "broken_heart": "\ud83d\udc94",
        "bug": "\ud83d\udc1b",
        "building_construction": "\ud83c\udfd7",
        "bulb": "\ud83d\udca1",
        "bullettrain_front": "\ud83d\ude85",
        "bullettrain_side": "\ud83d\ude84",
        "burrito": "\ud83c\udf2f",
        "bus": "\ud83d\ude8c",
        "business_suit_levitating": "\ud83d\udd74",
        "busstop": "\ud83d\ude8f",
        "bust_in_silhouette": "\ud83d\udc64",
        "busts_in_silhouette": "\ud83d\udc65",
        "butterfly": "\ud83e\udd8b",
        "cactus": "\ud83c\udf35",
        "cake": "\ud83c\udf70",
        "calendar": "\ud83d\udcc6",
        "call_me_hand": "\ud83e\udd19",
        "calling": "\ud83d\udcf2",
        "camel": "\ud83d\udc2b",
        "camera": "\ud83d\udcf7",
        "camera_flash": "\ud83d\udcf8",
        "camping": "\ud83c\udfd5",
        "cancer": "\u264B\uFE0F",
        "candle": "\ud83d\udd6f",
        "candy": "\ud83c\udf6c",
        "canoe": "\ud83d\udef6",
        "capital_abcd": "\ud83d\udd20",
        "capricorn": "\u2651\uFE0F",
        "car": "\ud83d\ude97",
        "card_file_box": "\ud83d\uddc3",
        "card_index": "\ud83d\udcc7",
        "card_index_dividers": "\ud83d\uddc2",
        "carousel_horse": "\ud83c\udfa0",
        "carrot": "\ud83e\udd55",
        "cat": "\ud83d\udc31",
        "cat2": "\ud83d\udc08",
        "cd": "\ud83d\udcbf",
        "chains": "\u26D3",
        "champagne": "\ud83c\udf7e",
        "chart": "\ud83d\udcb9",
        "chart_with_downwards_trend": "\ud83d\udcc9",
        "chart_with_upwards_trend": "\ud83d\udcc8",
        "checkered_flag": "\ud83c\udfc1",
        "cheese": "\ud83e\uddc0",
        "cherries": "\ud83c\udf52",
        "cherry_blossom": "\ud83c\udf38",
        "chestnut": "\ud83c\udf30",
        "chicken": "\ud83d\udc14",
        "children_crossing": "\ud83d\udeb8",
        "chipmunk": "\ud83d\udc3f",
        "chocolate_bar": "\ud83c\udf6b",
        "christmas_tree": "\ud83c\udf84",
        "church": "\u26EA\uFE0F",
        "cinema": "\ud83c\udfa6",
        "circus_tent": "\ud83c\udfaa",
        "city_sunrise": "\ud83c\udf07",
        "city_sunset": "\ud83c\udf06",
        "cityscape": "\ud83c\udfd9",
        "cl": "\ud83c\udd91",
        "clamp": "\ud83d\udddc",
        "clap": "\ud83d\udc4f",
        "clapper": "\ud83c\udfac",
        "classical_building": "\ud83c\udfdb",
        "clinking_glasses": "\ud83e\udd42",
        "clipboard": "\ud83d\udccb",
        "clock1": "\ud83d\udd50",
        "clock10": "\ud83d\udd59",
        "clock1030": "\ud83d\udd65",
        "clock11": "\ud83d\udd5a",
        "clock1130": "\ud83d\udd66",
        "clock12": "\ud83d\udd5b",
        "clock1230": "\ud83d\udd67",
        "clock130": "\ud83d\udd5c",
        "clock2": "\ud83d\udd51",
        "clock230": "\ud83d\udd5d",
        "clock3": "\ud83d\udd52",
        "clock330": "\ud83d\udd5e",
        "clock4": "\ud83d\udd53",
        "clock430": "\ud83d\udd5f",
        "clock5": "\ud83d\udd54",
        "clock530": "\ud83d\udd60",
        "clock6": "\ud83d\udd55",
        "clock630": "\ud83d\udd61",
        "clock7": "\ud83d\udd56",
        "clock730": "\ud83d\udd62",
        "clock8": "\ud83d\udd57",
        "clock830": "\ud83d\udd63",
        "clock9": "\ud83d\udd58",
        "clock930": "\ud83d\udd64",
        "closed_book": "\ud83d\udcd5",
        "closed_lock_with_key": "\ud83d\udd10",
        "closed_umbrella": "\ud83c\udf02",
        "cloud": "\u2601\uFE0F",
        "cloud_with_lightning": "\ud83c\udf29",
        "cloud_with_lightning_and_rain": "\u26C8",
        "cloud_with_rain": "\ud83c\udf27",
        "cloud_with_snow": "\ud83c\udf28",
        "clown_face": "\ud83e\udd21",
        "clubs": "\u2663\uFE0F",
        "cocktail": "\ud83c\udf78",
        "coffee": "\u2615\uFE0F",
        "coffin": "\u26B0\uFE0F",
        "cold_sweat": "\ud83d\ude30",
        "comet": "\u2604\uFE0F",
        "computer": "\ud83d\udcbb",
        "computer_mouse": "\ud83d\uddb1",
        "confetti_ball": "\ud83c\udf8a",
        "confounded": "\ud83d\ude16",
        "confused": "\ud83d\ude15",
        "congratulations": "\u3297\uFE0F",
        "construction": "\ud83d\udea7",
        "construction_worker_man": "\ud83d\udc77",
        "construction_worker_woman": "\ud83d\udc77&zwj;\u2640\uFE0F",
        "control_knobs": "\ud83c\udf9b",
        "convenience_store": "\ud83c\udfea",
        "cookie": "\ud83c\udf6a",
        "cool": "\ud83c\udd92",
        "policeman": "\ud83d\udc6e",
        "copyright": "\xa9\uFE0F",
        "corn": "\ud83c\udf3d",
        "couch_and_lamp": "\ud83d\udecb",
        "couple": "\ud83d\udc6b",
        "couple_with_heart_woman_man": "\ud83d\udc91",
        "couple_with_heart_man_man": "\ud83d\udc68&zwj;\u2764\uFE0F&zwj;\ud83d\udc68",
        "couple_with_heart_woman_woman": "\ud83d\udc69&zwj;\u2764\uFE0F&zwj;\ud83d\udc69",
        "couplekiss_man_man": "\ud83d\udc68&zwj;\u2764\uFE0F&zwj;\ud83d\udc8b&zwj;\ud83d\udc68",
        "couplekiss_man_woman": "\ud83d\udc8f",
        "couplekiss_woman_woman": "\ud83d\udc69&zwj;\u2764\uFE0F&zwj;\ud83d\udc8b&zwj;\ud83d\udc69",
        "cow": "\ud83d\udc2e",
        "cow2": "\ud83d\udc04",
        "cowboy_hat_face": "\ud83e\udd20",
        "crab": "\ud83e\udd80",
        "crayon": "\ud83d\udd8d",
        "credit_card": "\ud83d\udcb3",
        "crescent_moon": "\ud83c\udf19",
        "cricket": "\ud83c\udfcf",
        "crocodile": "\ud83d\udc0a",
        "croissant": "\ud83e\udd50",
        "crossed_fingers": "\ud83e\udd1e",
        "crossed_flags": "\ud83c\udf8c",
        "crossed_swords": "\u2694\uFE0F",
        "crown": "\ud83d\udc51",
        "cry": "\ud83d\ude22",
        "crying_cat_face": "\ud83d\ude3f",
        "crystal_ball": "\ud83d\udd2e",
        "cucumber": "\ud83e\udd52",
        "cupid": "\ud83d\udc98",
        "curly_loop": "\u27B0",
        "currency_exchange": "\ud83d\udcb1",
        "curry": "\ud83c\udf5b",
        "custard": "\ud83c\udf6e",
        "customs": "\ud83d\udec3",
        "cyclone": "\ud83c\udf00",
        "dagger": "\ud83d\udde1",
        "dancer": "\ud83d\udc83",
        "dancing_women": "\ud83d\udc6f",
        "dancing_men": "\ud83d\udc6f&zwj;\u2642\uFE0F",
        "dango": "\ud83c\udf61",
        "dark_sunglasses": "\ud83d\udd76",
        "dart": "\ud83c\udfaf",
        "dash": "\ud83d\udca8",
        "date": "\ud83d\udcc5",
        "deciduous_tree": "\ud83c\udf33",
        "deer": "\ud83e\udd8c",
        "department_store": "\ud83c\udfec",
        "derelict_house": "\ud83c\udfda",
        "desert": "\ud83c\udfdc",
        "desert_island": "\ud83c\udfdd",
        "desktop_computer": "\ud83d\udda5",
        "male_detective": "\ud83d\udd75\uFE0F",
        "diamond_shape_with_a_dot_inside": "\ud83d\udca0",
        "diamonds": "\u2666\uFE0F",
        "disappointed": "\ud83d\ude1e",
        "disappointed_relieved": "\ud83d\ude25",
        "dizzy": "\ud83d\udcab",
        "dizzy_face": "\ud83d\ude35",
        "do_not_litter": "\ud83d\udeaf",
        "dog": "\ud83d\udc36",
        "dog2": "\ud83d\udc15",
        "dollar": "\ud83d\udcb5",
        "dolls": "\ud83c\udf8e",
        "dolphin": "\ud83d\udc2c",
        "door": "\ud83d\udeaa",
        "doughnut": "\ud83c\udf69",
        "dove": "\ud83d\udd4a",
        "dragon": "\ud83d\udc09",
        "dragon_face": "\ud83d\udc32",
        "dress": "\ud83d\udc57",
        "dromedary_camel": "\ud83d\udc2a",
        "drooling_face": "\ud83e\udd24",
        "droplet": "\ud83d\udca7",
        "drum": "\ud83e\udd41",
        "duck": "\ud83e\udd86",
        "dvd": "\ud83d\udcc0",
        "e-mail": "\ud83d\udce7",
        "eagle": "\ud83e\udd85",
        "ear": "\ud83d\udc42",
        "ear_of_rice": "\ud83c\udf3e",
        "earth_africa": "\ud83c\udf0d",
        "earth_americas": "\ud83c\udf0e",
        "earth_asia": "\ud83c\udf0f",
        "egg": "\ud83e\udd5a",
        "eggplant": "\ud83c\udf46",
        "eight_pointed_black_star": "\u2734\uFE0F",
        "eight_spoked_asterisk": "\u2733\uFE0F",
        "electric_plug": "\ud83d\udd0c",
        "elephant": "\ud83d\udc18",
        "email": "\u2709\uFE0F",
        "end": "\ud83d\udd1a",
        "envelope_with_arrow": "\ud83d\udce9",
        "euro": "\ud83d\udcb6",
        "european_castle": "\ud83c\udff0",
        "european_post_office": "\ud83c\udfe4",
        "evergreen_tree": "\ud83c\udf32",
        "exclamation": "\u2757\uFE0F",
        "expressionless": "\ud83d\ude11",
        "eye": "\ud83d\udc41",
        "eye_speech_bubble": "\ud83d\udc41&zwj;\ud83d\udde8",
        "eyeglasses": "\ud83d\udc53",
        "eyes": "\ud83d\udc40",
        "face_with_head_bandage": "\ud83e\udd15",
        "face_with_thermometer": "\ud83e\udd12",
        "fist_oncoming": "\ud83d\udc4a",
        "factory": "\ud83c\udfed",
        "fallen_leaf": "\ud83c\udf42",
        "family_man_woman_boy": "\ud83d\udc6a",
        "family_man_boy": "\ud83d\udc68&zwj;\ud83d\udc66",
        "family_man_boy_boy": "\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_man_girl": "\ud83d\udc68&zwj;\ud83d\udc67",
        "family_man_girl_boy": "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_man_girl_girl": "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_man_man_boy": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66",
        "family_man_man_boy_boy": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_man_man_girl": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67",
        "family_man_man_girl_boy": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_man_man_girl_girl": "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_man_woman_boy_boy": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_man_woman_girl": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
        "family_man_woman_girl_boy": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_man_woman_girl_girl": "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_woman_boy": "\ud83d\udc69&zwj;\ud83d\udc66",
        "family_woman_boy_boy": "\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_woman_girl": "\ud83d\udc69&zwj;\ud83d\udc67",
        "family_woman_girl_boy": "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_woman_girl_girl": "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "family_woman_woman_boy": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66",
        "family_woman_woman_boy_boy": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
        "family_woman_woman_girl": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
        "family_woman_woman_girl_boy": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
        "family_woman_woman_girl_girl": "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
        "fast_forward": "\u23E9",
        "fax": "\ud83d\udce0",
        "fearful": "\ud83d\ude28",
        "feet": "\ud83d\udc3e",
        "female_detective": "\ud83d\udd75\uFE0F&zwj;\u2640\uFE0F",
        "ferris_wheel": "\ud83c\udfa1",
        "ferry": "\u26F4",
        "field_hockey": "\ud83c\udfd1",
        "file_cabinet": "\ud83d\uddc4",
        "file_folder": "\ud83d\udcc1",
        "film_projector": "\ud83d\udcfd",
        "film_strip": "\ud83c\udf9e",
        "fire": "\ud83d\udd25",
        "fire_engine": "\ud83d\ude92",
        "fireworks": "\ud83c\udf86",
        "first_quarter_moon": "\ud83c\udf13",
        "first_quarter_moon_with_face": "\ud83c\udf1b",
        "fish": "\ud83d\udc1f",
        "fish_cake": "\ud83c\udf65",
        "fishing_pole_and_fish": "\ud83c\udfa3",
        "fist_raised": "\u270A",
        "fist_left": "\ud83e\udd1b",
        "fist_right": "\ud83e\udd1c",
        "flags": "\ud83c\udf8f",
        "flashlight": "\ud83d\udd26",
        "fleur_de_lis": "\u269C\uFE0F",
        "flight_arrival": "\ud83d\udeec",
        "flight_departure": "\ud83d\udeeb",
        "floppy_disk": "\ud83d\udcbe",
        "flower_playing_cards": "\ud83c\udfb4",
        "flushed": "\ud83d\ude33",
        "fog": "\ud83c\udf2b",
        "foggy": "\ud83c\udf01",
        "football": "\ud83c\udfc8",
        "footprints": "\ud83d\udc63",
        "fork_and_knife": "\ud83c\udf74",
        "fountain": "\u26F2\uFE0F",
        "fountain_pen": "\ud83d\udd8b",
        "four_leaf_clover": "\ud83c\udf40",
        "fox_face": "\ud83e\udd8a",
        "framed_picture": "\ud83d\uddbc",
        "free": "\ud83c\udd93",
        "fried_egg": "\ud83c\udf73",
        "fried_shrimp": "\ud83c\udf64",
        "fries": "\ud83c\udf5f",
        "frog": "\ud83d\udc38",
        "frowning": "\ud83d\ude26",
        "frowning_face": "\u2639\uFE0F",
        "frowning_man": "\ud83d\ude4d&zwj;\u2642\uFE0F",
        "frowning_woman": "\ud83d\ude4d",
        "middle_finger": "\ud83d\udd95",
        "fuelpump": "\u26FD\uFE0F",
        "full_moon": "\ud83c\udf15",
        "full_moon_with_face": "\ud83c\udf1d",
        "funeral_urn": "\u26B1\uFE0F",
        "game_die": "\ud83c\udfb2",
        "gear": "\u2699\uFE0F",
        "gem": "\ud83d\udc8e",
        "gemini": "\u264A\uFE0F",
        "ghost": "\ud83d\udc7b",
        "gift": "\ud83c\udf81",
        "gift_heart": "\ud83d\udc9d",
        "girl": "\ud83d\udc67",
        "globe_with_meridians": "\ud83c\udf10",
        "goal_net": "\ud83e\udd45",
        "goat": "\ud83d\udc10",
        "golf": "\u26F3\uFE0F",
        "golfing_man": "\ud83c\udfcc\uFE0F",
        "golfing_woman": "\ud83c\udfcc\uFE0F&zwj;\u2640\uFE0F",
        "gorilla": "\ud83e\udd8d",
        "grapes": "\ud83c\udf47",
        "green_apple": "\ud83c\udf4f",
        "green_book": "\ud83d\udcd7",
        "green_heart": "\ud83d\udc9a",
        "green_salad": "\ud83e\udd57",
        "grey_exclamation": "\u2755",
        "grey_question": "\u2754",
        "grimacing": "\ud83d\ude2c",
        "grin": "\ud83d\ude01",
        "grinning": "\ud83d\ude00",
        "guardsman": "\ud83d\udc82",
        "guardswoman": "\ud83d\udc82&zwj;\u2640\uFE0F",
        "guitar": "\ud83c\udfb8",
        "gun": "\ud83d\udd2b",
        "haircut_woman": "\ud83d\udc87",
        "haircut_man": "\ud83d\udc87&zwj;\u2642\uFE0F",
        "hamburger": "\ud83c\udf54",
        "hammer": "\ud83d\udd28",
        "hammer_and_pick": "\u2692",
        "hammer_and_wrench": "\ud83d\udee0",
        "hamster": "\ud83d\udc39",
        "hand": "\u270B",
        "handbag": "\ud83d\udc5c",
        "handshake": "\ud83e\udd1d",
        "hankey": "\ud83d\udca9",
        "hatched_chick": "\ud83d\udc25",
        "hatching_chick": "\ud83d\udc23",
        "headphones": "\ud83c\udfa7",
        "hear_no_evil": "\ud83d\ude49",
        "heart": "\u2764\uFE0F",
        "heart_decoration": "\ud83d\udc9f",
        "heart_eyes": "\ud83d\ude0d",
        "heart_eyes_cat": "\ud83d\ude3b",
        "heartbeat": "\ud83d\udc93",
        "heartpulse": "\ud83d\udc97",
        "hearts": "\u2665\uFE0F",
        "heavy_check_mark": "\u2714\uFE0F",
        "heavy_division_sign": "\u2797",
        "heavy_dollar_sign": "\ud83d\udcb2",
        "heavy_heart_exclamation": "\u2763\uFE0F",
        "heavy_minus_sign": "\u2796",
        "heavy_multiplication_x": "\u2716\uFE0F",
        "heavy_plus_sign": "\u2795",
        "helicopter": "\ud83d\ude81",
        "herb": "\ud83c\udf3f",
        "hibiscus": "\ud83c\udf3a",
        "high_brightness": "\ud83d\udd06",
        "high_heel": "\ud83d\udc60",
        "hocho": "\ud83d\udd2a",
        "hole": "\ud83d\udd73",
        "honey_pot": "\ud83c\udf6f",
        "horse": "\ud83d\udc34",
        "horse_racing": "\ud83c\udfc7",
        "hospital": "\ud83c\udfe5",
        "hot_pepper": "\ud83c\udf36",
        "hotdog": "\ud83c\udf2d",
        "hotel": "\ud83c\udfe8",
        "hotsprings": "\u2668\uFE0F",
        "hourglass": "\u231B\uFE0F",
        "hourglass_flowing_sand": "\u23F3",
        "house": "\ud83c\udfe0",
        "house_with_garden": "\ud83c\udfe1",
        "houses": "\ud83c\udfd8",
        "hugs": "\ud83e\udd17",
        "hushed": "\ud83d\ude2f",
        "ice_cream": "\ud83c\udf68",
        "ice_hockey": "\ud83c\udfd2",
        "ice_skate": "\u26F8",
        "icecream": "\ud83c\udf66",
        "id": "\ud83c\udd94",
        "ideograph_advantage": "\ud83c\ude50",
        "imp": "\ud83d\udc7f",
        "inbox_tray": "\ud83d\udce5",
        "incoming_envelope": "\ud83d\udce8",
        "tipping_hand_woman": "\ud83d\udc81",
        "information_source": "\u2139\uFE0F",
        "innocent": "\ud83d\ude07",
        "interrobang": "\u2049\uFE0F",
        "iphone": "\ud83d\udcf1",
        "izakaya_lantern": "\ud83c\udfee",
        "jack_o_lantern": "\ud83c\udf83",
        "japan": "\ud83d\uddfe",
        "japanese_castle": "\ud83c\udfef",
        "japanese_goblin": "\ud83d\udc7a",
        "japanese_ogre": "\ud83d\udc79",
        "jeans": "\ud83d\udc56",
        "joy": "\ud83d\ude02",
        "joy_cat": "\ud83d\ude39",
        "joystick": "\ud83d\udd79",
        "kaaba": "\ud83d\udd4b",
        "key": "\ud83d\udd11",
        "keyboard": "\u2328\uFE0F",
        "keycap_ten": "\ud83d\udd1f",
        "kick_scooter": "\ud83d\udef4",
        "kimono": "\ud83d\udc58",
        "kiss": "\ud83d\udc8b",
        "kissing": "\ud83d\ude17",
        "kissing_cat": "\ud83d\ude3d",
        "kissing_closed_eyes": "\ud83d\ude1a",
        "kissing_heart": "\ud83d\ude18",
        "kissing_smiling_eyes": "\ud83d\ude19",
        "kiwi_fruit": "\ud83e\udd5d",
        "koala": "\ud83d\udc28",
        "koko": "\ud83c\ude01",
        "label": "\ud83c\udff7",
        "large_blue_circle": "\ud83d\udd35",
        "large_blue_diamond": "\ud83d\udd37",
        "large_orange_diamond": "\ud83d\udd36",
        "last_quarter_moon": "\ud83c\udf17",
        "last_quarter_moon_with_face": "\ud83c\udf1c",
        "latin_cross": "\u271D\uFE0F",
        "laughing": "\ud83d\ude06",
        "leaves": "\ud83c\udf43",
        "ledger": "\ud83d\udcd2",
        "left_luggage": "\ud83d\udec5",
        "left_right_arrow": "\u2194\uFE0F",
        "leftwards_arrow_with_hook": "\u21A9\uFE0F",
        "lemon": "\ud83c\udf4b",
        "leo": "\u264C\uFE0F",
        "leopard": "\ud83d\udc06",
        "level_slider": "\ud83c\udf9a",
        "libra": "\u264E\uFE0F",
        "light_rail": "\ud83d\ude88",
        "link": "\ud83d\udd17",
        "lion": "\ud83e\udd81",
        "lips": "\ud83d\udc44",
        "lipstick": "\ud83d\udc84",
        "lizard": "\ud83e\udd8e",
        "lock": "\ud83d\udd12",
        "lock_with_ink_pen": "\ud83d\udd0f",
        "lollipop": "\ud83c\udf6d",
        "loop": "\u27BF",
        "loud_sound": "\ud83d\udd0a",
        "loudspeaker": "\ud83d\udce2",
        "love_hotel": "\ud83c\udfe9",
        "love_letter": "\ud83d\udc8c",
        "low_brightness": "\ud83d\udd05",
        "lying_face": "\ud83e\udd25",
        "m": "\u24C2\uFE0F",
        "mag": "\ud83d\udd0d",
        "mag_right": "\ud83d\udd0e",
        "mahjong": "\ud83c\udc04\uFE0F",
        "mailbox": "\ud83d\udceb",
        "mailbox_closed": "\ud83d\udcea",
        "mailbox_with_mail": "\ud83d\udcec",
        "mailbox_with_no_mail": "\ud83d\udced",
        "man": "\ud83d\udc68",
        "man_artist": "\ud83d\udc68&zwj;\ud83c\udfa8",
        "man_astronaut": "\ud83d\udc68&zwj;\ud83d\ude80",
        "man_cartwheeling": "\ud83e\udd38&zwj;\u2642\uFE0F",
        "man_cook": "\ud83d\udc68&zwj;\ud83c\udf73",
        "man_dancing": "\ud83d\udd7a",
        "man_facepalming": "\ud83e\udd26&zwj;\u2642\uFE0F",
        "man_factory_worker": "\ud83d\udc68&zwj;\ud83c\udfed",
        "man_farmer": "\ud83d\udc68&zwj;\ud83c\udf3e",
        "man_firefighter": "\ud83d\udc68&zwj;\ud83d\ude92",
        "man_health_worker": "\ud83d\udc68&zwj;\u2695\uFE0F",
        "man_in_tuxedo": "\ud83e\udd35",
        "man_judge": "\ud83d\udc68&zwj;\u2696\uFE0F",
        "man_juggling": "\ud83e\udd39&zwj;\u2642\uFE0F",
        "man_mechanic": "\ud83d\udc68&zwj;\ud83d\udd27",
        "man_office_worker": "\ud83d\udc68&zwj;\ud83d\udcbc",
        "man_pilot": "\ud83d\udc68&zwj;\u2708\uFE0F",
        "man_playing_handball": "\ud83e\udd3e&zwj;\u2642\uFE0F",
        "man_playing_water_polo": "\ud83e\udd3d&zwj;\u2642\uFE0F",
        "man_scientist": "\ud83d\udc68&zwj;\ud83d\udd2c",
        "man_shrugging": "\ud83e\udd37&zwj;\u2642\uFE0F",
        "man_singer": "\ud83d\udc68&zwj;\ud83c\udfa4",
        "man_student": "\ud83d\udc68&zwj;\ud83c\udf93",
        "man_teacher": "\ud83d\udc68&zwj;\ud83c\udfeb",
        "man_technologist": "\ud83d\udc68&zwj;\ud83d\udcbb",
        "man_with_gua_pi_mao": "\ud83d\udc72",
        "man_with_turban": "\ud83d\udc73",
        "tangerine": "\ud83c\udf4a",
        "mans_shoe": "\ud83d\udc5e",
        "mantelpiece_clock": "\ud83d\udd70",
        "maple_leaf": "\ud83c\udf41",
        "martial_arts_uniform": "\ud83e\udd4b",
        "mask": "\ud83d\ude37",
        "massage_woman": "\ud83d\udc86",
        "massage_man": "\ud83d\udc86&zwj;\u2642\uFE0F",
        "meat_on_bone": "\ud83c\udf56",
        "medal_military": "\ud83c\udf96",
        "medal_sports": "\ud83c\udfc5",
        "mega": "\ud83d\udce3",
        "melon": "\ud83c\udf48",
        "memo": "\ud83d\udcdd",
        "men_wrestling": "\ud83e\udd3c&zwj;\u2642\uFE0F",
        "menorah": "\ud83d\udd4e",
        "mens": "\ud83d\udeb9",
        "metal": "\ud83e\udd18",
        "metro": "\ud83d\ude87",
        "microphone": "\ud83c\udfa4",
        "microscope": "\ud83d\udd2c",
        "milk_glass": "\ud83e\udd5b",
        "milky_way": "\ud83c\udf0c",
        "minibus": "\ud83d\ude90",
        "minidisc": "\ud83d\udcbd",
        "mobile_phone_off": "\ud83d\udcf4",
        "money_mouth_face": "\ud83e\udd11",
        "money_with_wings": "\ud83d\udcb8",
        "moneybag": "\ud83d\udcb0",
        "monkey": "\ud83d\udc12",
        "monkey_face": "\ud83d\udc35",
        "monorail": "\ud83d\ude9d",
        "moon": "\ud83c\udf14",
        "mortar_board": "\ud83c\udf93",
        "mosque": "\ud83d\udd4c",
        "motor_boat": "\ud83d\udee5",
        "motor_scooter": "\ud83d\udef5",
        "motorcycle": "\ud83c\udfcd",
        "motorway": "\ud83d\udee3",
        "mount_fuji": "\ud83d\uddfb",
        "mountain": "\u26F0",
        "mountain_biking_man": "\ud83d\udeb5",
        "mountain_biking_woman": "\ud83d\udeb5&zwj;\u2640\uFE0F",
        "mountain_cableway": "\ud83d\udea0",
        "mountain_railway": "\ud83d\ude9e",
        "mountain_snow": "\ud83c\udfd4",
        "mouse": "\ud83d\udc2d",
        "mouse2": "\ud83d\udc01",
        "movie_camera": "\ud83c\udfa5",
        "moyai": "\ud83d\uddff",
        "mrs_claus": "\ud83e\udd36",
        "muscle": "\ud83d\udcaa",
        "mushroom": "\ud83c\udf44",
        "musical_keyboard": "\ud83c\udfb9",
        "musical_note": "\ud83c\udfb5",
        "musical_score": "\ud83c\udfbc",
        "mute": "\ud83d\udd07",
        "nail_care": "\ud83d\udc85",
        "name_badge": "\ud83d\udcdb",
        "national_park": "\ud83c\udfde",
        "nauseated_face": "\ud83e\udd22",
        "necktie": "\ud83d\udc54",
        "negative_squared_cross_mark": "\u274E",
        "nerd_face": "\ud83e\udd13",
        "neutral_face": "\ud83d\ude10",
        "new": "\ud83c\udd95",
        "new_moon": "\ud83c\udf11",
        "new_moon_with_face": "\ud83c\udf1a",
        "newspaper": "\ud83d\udcf0",
        "newspaper_roll": "\ud83d\uddde",
        "next_track_button": "\u23ED",
        "ng": "\ud83c\udd96",
        "no_good_man": "\ud83d\ude45&zwj;\u2642\uFE0F",
        "no_good_woman": "\ud83d\ude45",
        "night_with_stars": "\ud83c\udf03",
        "no_bell": "\ud83d\udd15",
        "no_bicycles": "\ud83d\udeb3",
        "no_entry": "\u26D4\uFE0F",
        "no_entry_sign": "\ud83d\udeab",
        "no_mobile_phones": "\ud83d\udcf5",
        "no_mouth": "\ud83d\ude36",
        "no_pedestrians": "\ud83d\udeb7",
        "no_smoking": "\ud83d\udead",
        "non-potable_water": "\ud83d\udeb1",
        "nose": "\ud83d\udc43",
        "notebook": "\ud83d\udcd3",
        "notebook_with_decorative_cover": "\ud83d\udcd4",
        "notes": "\ud83c\udfb6",
        "nut_and_bolt": "\ud83d\udd29",
        "o": "\u2B55\uFE0F",
        "o2": "\ud83c\udd7e\uFE0F",
        "ocean": "\ud83c\udf0a",
        "octopus": "\ud83d\udc19",
        "oden": "\ud83c\udf62",
        "office": "\ud83c\udfe2",
        "oil_drum": "\ud83d\udee2",
        "ok": "\ud83c\udd97",
        "ok_hand": "\ud83d\udc4c",
        "ok_man": "\ud83d\ude46&zwj;\u2642\uFE0F",
        "ok_woman": "\ud83d\ude46",
        "old_key": "\ud83d\udddd",
        "older_man": "\ud83d\udc74",
        "older_woman": "\ud83d\udc75",
        "om": "\ud83d\udd49",
        "on": "\ud83d\udd1b",
        "oncoming_automobile": "\ud83d\ude98",
        "oncoming_bus": "\ud83d\ude8d",
        "oncoming_police_car": "\ud83d\ude94",
        "oncoming_taxi": "\ud83d\ude96",
        "open_file_folder": "\ud83d\udcc2",
        "open_hands": "\ud83d\udc50",
        "open_mouth": "\ud83d\ude2e",
        "open_umbrella": "\u2602\uFE0F",
        "ophiuchus": "\u26CE",
        "orange_book": "\ud83d\udcd9",
        "orthodox_cross": "\u2626\uFE0F",
        "outbox_tray": "\ud83d\udce4",
        "owl": "\ud83e\udd89",
        "ox": "\ud83d\udc02",
        "package": "\ud83d\udce6",
        "page_facing_up": "\ud83d\udcc4",
        "page_with_curl": "\ud83d\udcc3",
        "pager": "\ud83d\udcdf",
        "paintbrush": "\ud83d\udd8c",
        "palm_tree": "\ud83c\udf34",
        "pancakes": "\ud83e\udd5e",
        "panda_face": "\ud83d\udc3c",
        "paperclip": "\ud83d\udcce",
        "paperclips": "\ud83d\udd87",
        "parasol_on_ground": "\u26F1",
        "parking": "\ud83c\udd7f\uFE0F",
        "part_alternation_mark": "\u303D\uFE0F",
        "partly_sunny": "\u26C5\uFE0F",
        "passenger_ship": "\ud83d\udef3",
        "passport_control": "\ud83d\udec2",
        "pause_button": "\u23F8",
        "peace_symbol": "\u262E\uFE0F",
        "peach": "\ud83c\udf51",
        "peanuts": "\ud83e\udd5c",
        "pear": "\ud83c\udf50",
        "pen": "\ud83d\udd8a",
        "pencil2": "\u270F\uFE0F",
        "penguin": "\ud83d\udc27",
        "pensive": "\ud83d\ude14",
        "performing_arts": "\ud83c\udfad",
        "persevere": "\ud83d\ude23",
        "person_fencing": "\ud83e\udd3a",
        "pouting_woman": "\ud83d\ude4e",
        "phone": "\u260E\uFE0F",
        "pick": "\u26CF",
        "pig": "\ud83d\udc37",
        "pig2": "\ud83d\udc16",
        "pig_nose": "\ud83d\udc3d",
        "pill": "\ud83d\udc8a",
        "pineapple": "\ud83c\udf4d",
        "ping_pong": "\ud83c\udfd3",
        "pisces": "\u2653\uFE0F",
        "pizza": "\ud83c\udf55",
        "place_of_worship": "\ud83d\uded0",
        "plate_with_cutlery": "\ud83c\udf7d",
        "play_or_pause_button": "\u23EF",
        "point_down": "\ud83d\udc47",
        "point_left": "\ud83d\udc48",
        "point_right": "\ud83d\udc49",
        "point_up": "\u261D\uFE0F",
        "point_up_2": "\ud83d\udc46",
        "police_car": "\ud83d\ude93",
        "policewoman": "\ud83d\udc6e&zwj;\u2640\uFE0F",
        "poodle": "\ud83d\udc29",
        "popcorn": "\ud83c\udf7f",
        "post_office": "\ud83c\udfe3",
        "postal_horn": "\ud83d\udcef",
        "postbox": "\ud83d\udcee",
        "potable_water": "\ud83d\udeb0",
        "potato": "\ud83e\udd54",
        "pouch": "\ud83d\udc5d",
        "poultry_leg": "\ud83c\udf57",
        "pound": "\ud83d\udcb7",
        "rage": "\ud83d\ude21",
        "pouting_cat": "\ud83d\ude3e",
        "pouting_man": "\ud83d\ude4e&zwj;\u2642\uFE0F",
        "pray": "\ud83d\ude4f",
        "prayer_beads": "\ud83d\udcff",
        "pregnant_woman": "\ud83e\udd30",
        "previous_track_button": "\u23EE",
        "prince": "\ud83e\udd34",
        "princess": "\ud83d\udc78",
        "printer": "\ud83d\udda8",
        "purple_heart": "\ud83d\udc9c",
        "purse": "\ud83d\udc5b",
        "pushpin": "\ud83d\udccc",
        "put_litter_in_its_place": "\ud83d\udeae",
        "question": "\u2753",
        "rabbit": "\ud83d\udc30",
        "rabbit2": "\ud83d\udc07",
        "racehorse": "\ud83d\udc0e",
        "racing_car": "\ud83c\udfce",
        "radio": "\ud83d\udcfb",
        "radio_button": "\ud83d\udd18",
        "radioactive": "\u2622\uFE0F",
        "railway_car": "\ud83d\ude83",
        "railway_track": "\ud83d\udee4",
        "rainbow": "\ud83c\udf08",
        "rainbow_flag": "\ud83c\udff3\uFE0F&zwj;\ud83c\udf08",
        "raised_back_of_hand": "\ud83e\udd1a",
        "raised_hand_with_fingers_splayed": "\ud83d\udd90",
        "raised_hands": "\ud83d\ude4c",
        "raising_hand_woman": "\ud83d\ude4b",
        "raising_hand_man": "\ud83d\ude4b&zwj;\u2642\uFE0F",
        "ram": "\ud83d\udc0f",
        "ramen": "\ud83c\udf5c",
        "rat": "\ud83d\udc00",
        "record_button": "\u23FA",
        "recycle": "\u267B\uFE0F",
        "red_circle": "\ud83d\udd34",
        "registered": "\xae\uFE0F",
        "relaxed": "\u263A\uFE0F",
        "relieved": "\ud83d\ude0c",
        "reminder_ribbon": "\ud83c\udf97",
        "repeat": "\ud83d\udd01",
        "repeat_one": "\ud83d\udd02",
        "rescue_worker_helmet": "\u26D1",
        "restroom": "\ud83d\udebb",
        "revolving_hearts": "\ud83d\udc9e",
        "rewind": "\u23EA",
        "rhinoceros": "\ud83e\udd8f",
        "ribbon": "\ud83c\udf80",
        "rice": "\ud83c\udf5a",
        "rice_ball": "\ud83c\udf59",
        "rice_cracker": "\ud83c\udf58",
        "rice_scene": "\ud83c\udf91",
        "right_anger_bubble": "\ud83d\uddef",
        "ring": "\ud83d\udc8d",
        "robot": "\ud83e\udd16",
        "rocket": "\ud83d\ude80",
        "rofl": "\ud83e\udd23",
        "roll_eyes": "\ud83d\ude44",
        "roller_coaster": "\ud83c\udfa2",
        "rooster": "\ud83d\udc13",
        "rose": "\ud83c\udf39",
        "rosette": "\ud83c\udff5",
        "rotating_light": "\ud83d\udea8",
        "round_pushpin": "\ud83d\udccd",
        "rowing_man": "\ud83d\udea3",
        "rowing_woman": "\ud83d\udea3&zwj;\u2640\uFE0F",
        "rugby_football": "\ud83c\udfc9",
        "running_man": "\ud83c\udfc3",
        "running_shirt_with_sash": "\ud83c\udfbd",
        "running_woman": "\ud83c\udfc3&zwj;\u2640\uFE0F",
        "sa": "\ud83c\ude02\uFE0F",
        "sagittarius": "\u2650\uFE0F",
        "sake": "\ud83c\udf76",
        "sandal": "\ud83d\udc61",
        "santa": "\ud83c\udf85",
        "satellite": "\ud83d\udce1",
        "saxophone": "\ud83c\udfb7",
        "school": "\ud83c\udfeb",
        "school_satchel": "\ud83c\udf92",
        "scissors": "\u2702\uFE0F",
        "scorpion": "\ud83e\udd82",
        "scorpius": "\u264F\uFE0F",
        "scream": "\ud83d\ude31",
        "scream_cat": "\ud83d\ude40",
        "scroll": "\ud83d\udcdc",
        "seat": "\ud83d\udcba",
        "secret": "\u3299\uFE0F",
        "see_no_evil": "\ud83d\ude48",
        "seedling": "\ud83c\udf31",
        "selfie": "\ud83e\udd33",
        "shallow_pan_of_food": "\ud83e\udd58",
        "shamrock": "\u2618\uFE0F",
        "shark": "\ud83e\udd88",
        "shaved_ice": "\ud83c\udf67",
        "sheep": "\ud83d\udc11",
        "shell": "\ud83d\udc1a",
        "shield": "\ud83d\udee1",
        "shinto_shrine": "\u26E9",
        "ship": "\ud83d\udea2",
        "shirt": "\ud83d\udc55",
        "shopping": "\ud83d\udecd",
        "shopping_cart": "\ud83d\uded2",
        "shower": "\ud83d\udebf",
        "shrimp": "\ud83e\udd90",
        "signal_strength": "\ud83d\udcf6",
        "six_pointed_star": "\ud83d\udd2f",
        "ski": "\ud83c\udfbf",
        "skier": "\u26F7",
        "skull": "\ud83d\udc80",
        "skull_and_crossbones": "\u2620\uFE0F",
        "sleeping": "\ud83d\ude34",
        "sleeping_bed": "\ud83d\udecc",
        "sleepy": "\ud83d\ude2a",
        "slightly_frowning_face": "\ud83d\ude41",
        "slightly_smiling_face": "\ud83d\ude42",
        "slot_machine": "\ud83c\udfb0",
        "small_airplane": "\ud83d\udee9",
        "small_blue_diamond": "\ud83d\udd39",
        "small_orange_diamond": "\ud83d\udd38",
        "small_red_triangle": "\ud83d\udd3a",
        "small_red_triangle_down": "\ud83d\udd3b",
        "smile": "\ud83d\ude04",
        "smile_cat": "\ud83d\ude38",
        "smiley": "\ud83d\ude03",
        "smiley_cat": "\ud83d\ude3a",
        "smiling_imp": "\ud83d\ude08",
        "smirk": "\ud83d\ude0f",
        "smirk_cat": "\ud83d\ude3c",
        "smoking": "\ud83d\udeac",
        "snail": "\ud83d\udc0c",
        "snake": "\ud83d\udc0d",
        "sneezing_face": "\ud83e\udd27",
        "snowboarder": "\ud83c\udfc2",
        "snowflake": "\u2744\uFE0F",
        "snowman": "\u26C4\uFE0F",
        "snowman_with_snow": "\u2603\uFE0F",
        "sob": "\ud83d\ude2d",
        "soccer": "\u26BD\uFE0F",
        "soon": "\ud83d\udd1c",
        "sos": "\ud83c\udd98",
        "sound": "\ud83d\udd09",
        "space_invader": "\ud83d\udc7e",
        "spades": "\u2660\uFE0F",
        "spaghetti": "\ud83c\udf5d",
        "sparkle": "\u2747\uFE0F",
        "sparkler": "\ud83c\udf87",
        "sparkles": "\u2728",
        "sparkling_heart": "\ud83d\udc96",
        "speak_no_evil": "\ud83d\ude4a",
        "speaker": "\ud83d\udd08",
        "speaking_head": "\ud83d\udde3",
        "speech_balloon": "\ud83d\udcac",
        "speedboat": "\ud83d\udea4",
        "spider": "\ud83d\udd77",
        "spider_web": "\ud83d\udd78",
        "spiral_calendar": "\ud83d\uddd3",
        "spiral_notepad": "\ud83d\uddd2",
        "spoon": "\ud83e\udd44",
        "squid": "\ud83e\udd91",
        "stadium": "\ud83c\udfdf",
        "star": "\u2B50\uFE0F",
        "star2": "\ud83c\udf1f",
        "star_and_crescent": "\u262A\uFE0F",
        "star_of_david": "\u2721\uFE0F",
        "stars": "\ud83c\udf20",
        "station": "\ud83d\ude89",
        "statue_of_liberty": "\ud83d\uddfd",
        "steam_locomotive": "\ud83d\ude82",
        "stew": "\ud83c\udf72",
        "stop_button": "\u23F9",
        "stop_sign": "\ud83d\uded1",
        "stopwatch": "\u23F1",
        "straight_ruler": "\ud83d\udccf",
        "strawberry": "\ud83c\udf53",
        "stuck_out_tongue": "\ud83d\ude1b",
        "stuck_out_tongue_closed_eyes": "\ud83d\ude1d",
        "stuck_out_tongue_winking_eye": "\ud83d\ude1c",
        "studio_microphone": "\ud83c\udf99",
        "stuffed_flatbread": "\ud83e\udd59",
        "sun_behind_large_cloud": "\ud83c\udf25",
        "sun_behind_rain_cloud": "\ud83c\udf26",
        "sun_behind_small_cloud": "\ud83c\udf24",
        "sun_with_face": "\ud83c\udf1e",
        "sunflower": "\ud83c\udf3b",
        "sunglasses": "\ud83d\ude0e",
        "sunny": "\u2600\uFE0F",
        "sunrise": "\ud83c\udf05",
        "sunrise_over_mountains": "\ud83c\udf04",
        "surfing_man": "\ud83c\udfc4",
        "surfing_woman": "\ud83c\udfc4&zwj;\u2640\uFE0F",
        "sushi": "\ud83c\udf63",
        "suspension_railway": "\ud83d\ude9f",
        "sweat": "\ud83d\ude13",
        "sweat_drops": "\ud83d\udca6",
        "sweat_smile": "\ud83d\ude05",
        "sweet_potato": "\ud83c\udf60",
        "swimming_man": "\ud83c\udfca",
        "swimming_woman": "\ud83c\udfca&zwj;\u2640\uFE0F",
        "symbols": "\ud83d\udd23",
        "synagogue": "\ud83d\udd4d",
        "syringe": "\ud83d\udc89",
        "taco": "\ud83c\udf2e",
        "tada": "\ud83c\udf89",
        "tanabata_tree": "\ud83c\udf8b",
        "taurus": "\u2649\uFE0F",
        "taxi": "\ud83d\ude95",
        "tea": "\ud83c\udf75",
        "telephone_receiver": "\ud83d\udcde",
        "telescope": "\ud83d\udd2d",
        "tennis": "\ud83c\udfbe",
        "tent": "\u26FA\uFE0F",
        "thermometer": "\ud83c\udf21",
        "thinking": "\ud83e\udd14",
        "thought_balloon": "\ud83d\udcad",
        "ticket": "\ud83c\udfab",
        "tickets": "\ud83c\udf9f",
        "tiger": "\ud83d\udc2f",
        "tiger2": "\ud83d\udc05",
        "timer_clock": "\u23F2",
        "tipping_hand_man": "\ud83d\udc81&zwj;\u2642\uFE0F",
        "tired_face": "\ud83d\ude2b",
        "tm": "\u2122\uFE0F",
        "toilet": "\ud83d\udebd",
        "tokyo_tower": "\ud83d\uddfc",
        "tomato": "\ud83c\udf45",
        "tongue": "\ud83d\udc45",
        "top": "\ud83d\udd1d",
        "tophat": "\ud83c\udfa9",
        "tornado": "\ud83c\udf2a",
        "trackball": "\ud83d\uddb2",
        "tractor": "\ud83d\ude9c",
        "traffic_light": "\ud83d\udea5",
        "train": "\ud83d\ude8b",
        "train2": "\ud83d\ude86",
        "tram": "\ud83d\ude8a",
        "triangular_flag_on_post": "\ud83d\udea9",
        "triangular_ruler": "\ud83d\udcd0",
        "trident": "\ud83d\udd31",
        "triumph": "\ud83d\ude24",
        "trolleybus": "\ud83d\ude8e",
        "trophy": "\ud83c\udfc6",
        "tropical_drink": "\ud83c\udf79",
        "tropical_fish": "\ud83d\udc20",
        "truck": "\ud83d\ude9a",
        "trumpet": "\ud83c\udfba",
        "tulip": "\ud83c\udf37",
        "tumbler_glass": "\ud83e\udd43",
        "turkey": "\ud83e\udd83",
        "turtle": "\ud83d\udc22",
        "tv": "\ud83d\udcfa",
        "twisted_rightwards_arrows": "\ud83d\udd00",
        "two_hearts": "\ud83d\udc95",
        "two_men_holding_hands": "\ud83d\udc6c",
        "two_women_holding_hands": "\ud83d\udc6d",
        "u5272": "\ud83c\ude39",
        "u5408": "\ud83c\ude34",
        "u55b6": "\ud83c\ude3a",
        "u6307": "\ud83c\ude2f\uFE0F",
        "u6708": "\ud83c\ude37\uFE0F",
        "u6709": "\ud83c\ude36",
        "u6e80": "\ud83c\ude35",
        "u7121": "\ud83c\ude1a\uFE0F",
        "u7533": "\ud83c\ude38",
        "u7981": "\ud83c\ude32",
        "u7a7a": "\ud83c\ude33",
        "umbrella": "\u2614\uFE0F",
        "unamused": "\ud83d\ude12",
        "underage": "\ud83d\udd1e",
        "unicorn": "\ud83e\udd84",
        "unlock": "\ud83d\udd13",
        "up": "\ud83c\udd99",
        "upside_down_face": "\ud83d\ude43",
        "v": "\u270C\uFE0F",
        "vertical_traffic_light": "\ud83d\udea6",
        "vhs": "\ud83d\udcfc",
        "vibration_mode": "\ud83d\udcf3",
        "video_camera": "\ud83d\udcf9",
        "video_game": "\ud83c\udfae",
        "violin": "\ud83c\udfbb",
        "virgo": "\u264D\uFE0F",
        "volcano": "\ud83c\udf0b",
        "volleyball": "\ud83c\udfd0",
        "vs": "\ud83c\udd9a",
        "vulcan_salute": "\ud83d\udd96",
        "walking_man": "\ud83d\udeb6",
        "walking_woman": "\ud83d\udeb6&zwj;\u2640\uFE0F",
        "waning_crescent_moon": "\ud83c\udf18",
        "waning_gibbous_moon": "\ud83c\udf16",
        "warning": "\u26A0\uFE0F",
        "wastebasket": "\ud83d\uddd1",
        "watch": "\u231A\uFE0F",
        "water_buffalo": "\ud83d\udc03",
        "watermelon": "\ud83c\udf49",
        "wave": "\ud83d\udc4b",
        "wavy_dash": "\u3030\uFE0F",
        "waxing_crescent_moon": "\ud83c\udf12",
        "wc": "\ud83d\udebe",
        "weary": "\ud83d\ude29",
        "wedding": "\ud83d\udc92",
        "weight_lifting_man": "\ud83c\udfcb\uFE0F",
        "weight_lifting_woman": "\ud83c\udfcb\uFE0F&zwj;\u2640\uFE0F",
        "whale": "\ud83d\udc33",
        "whale2": "\ud83d\udc0b",
        "wheel_of_dharma": "\u2638\uFE0F",
        "wheelchair": "\u267F\uFE0F",
        "white_check_mark": "\u2705",
        "white_circle": "\u26AA\uFE0F",
        "white_flag": "\ud83c\udff3\uFE0F",
        "white_flower": "\ud83d\udcae",
        "white_large_square": "\u2B1C\uFE0F",
        "white_medium_small_square": "\u25FD\uFE0F",
        "white_medium_square": "\u25FB\uFE0F",
        "white_small_square": "\u25AB\uFE0F",
        "white_square_button": "\ud83d\udd33",
        "wilted_flower": "\ud83e\udd40",
        "wind_chime": "\ud83c\udf90",
        "wind_face": "\ud83c\udf2c",
        "wine_glass": "\ud83c\udf77",
        "wink": "\ud83d\ude09",
        "wolf": "\ud83d\udc3a",
        "woman": "\ud83d\udc69",
        "woman_artist": "\ud83d\udc69&zwj;\ud83c\udfa8",
        "woman_astronaut": "\ud83d\udc69&zwj;\ud83d\ude80",
        "woman_cartwheeling": "\ud83e\udd38&zwj;\u2640\uFE0F",
        "woman_cook": "\ud83d\udc69&zwj;\ud83c\udf73",
        "woman_facepalming": "\ud83e\udd26&zwj;\u2640\uFE0F",
        "woman_factory_worker": "\ud83d\udc69&zwj;\ud83c\udfed",
        "woman_farmer": "\ud83d\udc69&zwj;\ud83c\udf3e",
        "woman_firefighter": "\ud83d\udc69&zwj;\ud83d\ude92",
        "woman_health_worker": "\ud83d\udc69&zwj;\u2695\uFE0F",
        "woman_judge": "\ud83d\udc69&zwj;\u2696\uFE0F",
        "woman_juggling": "\ud83e\udd39&zwj;\u2640\uFE0F",
        "woman_mechanic": "\ud83d\udc69&zwj;\ud83d\udd27",
        "woman_office_worker": "\ud83d\udc69&zwj;\ud83d\udcbc",
        "woman_pilot": "\ud83d\udc69&zwj;\u2708\uFE0F",
        "woman_playing_handball": "\ud83e\udd3e&zwj;\u2640\uFE0F",
        "woman_playing_water_polo": "\ud83e\udd3d&zwj;\u2640\uFE0F",
        "woman_scientist": "\ud83d\udc69&zwj;\ud83d\udd2c",
        "woman_shrugging": "\ud83e\udd37&zwj;\u2640\uFE0F",
        "woman_singer": "\ud83d\udc69&zwj;\ud83c\udfa4",
        "woman_student": "\ud83d\udc69&zwj;\ud83c\udf93",
        "woman_teacher": "\ud83d\udc69&zwj;\ud83c\udfeb",
        "woman_technologist": "\ud83d\udc69&zwj;\ud83d\udcbb",
        "woman_with_turban": "\ud83d\udc73&zwj;\u2640\uFE0F",
        "womans_clothes": "\ud83d\udc5a",
        "womans_hat": "\ud83d\udc52",
        "women_wrestling": "\ud83e\udd3c&zwj;\u2640\uFE0F",
        "womens": "\ud83d\udeba",
        "world_map": "\ud83d\uddfa",
        "worried": "\ud83d\ude1f",
        "wrench": "\ud83d\udd27",
        "writing_hand": "\u270D\uFE0F",
        "x": "\u274C",
        "yellow_heart": "\ud83d\udc9b",
        "yen": "\ud83d\udcb4",
        "yin_yang": "\u262F\uFE0F",
        "yum": "\ud83d\ude0b",
        "zap": "\u26A1\uFE0F",
        "zipper_mouth_face": "\ud83e\udd10",
        "zzz": "\ud83d\udca4",
        /* special emojis :P */ "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        "showdown": "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
    };
    /**
 * Created by Estevao on 31-05-2015.
 */ /**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {Converter}
 */ showdown.Converter = function(converterOptions) {
        "use strict";
        var /**
       * Options used by this converter
       * @private
       * @type {{}}
       */ options = {}, /**
       * Language extensions used by this converter
       * @private
       * @type {Array}
       */ langExtensions = [], /**
       * Output modifiers extensions used by this converter
       * @private
       * @type {Array}
       */ outputModifiers = [], /**
       * Event listeners
       * @private
       * @type {{}}
       */ listeners = {}, /**
       * The flavor set in this converter
       */ setConvFlavor = setFlavor, /**
       * Metadata of the document
       * @type {{parsed: {}, raw: string, format: string}}
       */ metadata = {
            parsed: {},
            raw: "",
            format: ""
        };
        _constructor();
        /**
   * Converter constructor
   * @private
   */ function _constructor() {
            converterOptions = converterOptions || {};
            for(var gOpt in globalOptions)if (globalOptions.hasOwnProperty(gOpt)) options[gOpt] = globalOptions[gOpt];
            // Merge options
            if (typeof converterOptions === "object") {
                for(var opt in converterOptions)if (converterOptions.hasOwnProperty(opt)) options[opt] = converterOptions[opt];
            } else throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
            if (options.extensions) showdown.helper.forEach(options.extensions, _parseExtension);
        }
        /**
   * Parse extension
   * @param {*} ext
   * @param {string} [name='']
   * @private
   */ function _parseExtension(ext, name) {
            name = name || null;
            // If it's a string, the extension was previously loaded
            if (showdown.helper.isString(ext)) {
                ext = showdown.helper.stdExtName(ext);
                name = ext;
                // LEGACY_SUPPORT CODE
                if (showdown.extensions[ext]) {
                    console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method." + "Please inform the developer that the extension should be updated!");
                    legacyExtensionLoading(showdown.extensions[ext], ext);
                    return;
                // END LEGACY SUPPORT CODE
                } else if (!showdown.helper.isUndefined(extensions[ext])) ext = extensions[ext];
                else throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
            }
            if (typeof ext === "function") ext = ext();
            if (!showdown.helper.isArray(ext)) ext = [
                ext
            ];
            var validExt = validate(ext, name);
            if (!validExt.valid) throw Error(validExt.error);
            for(var i = 0; i < ext.length; ++i){
                switch(ext[i].type){
                    case "lang":
                        langExtensions.push(ext[i]);
                        break;
                    case "output":
                        outputModifiers.push(ext[i]);
                        break;
                }
                if (ext[i].hasOwnProperty("listeners")) {
                    for(var ln in ext[i].listeners)if (ext[i].listeners.hasOwnProperty(ln)) listen(ln, ext[i].listeners[ln]);
                }
            }
        }
        /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */ function legacyExtensionLoading(ext, name) {
            if (typeof ext === "function") ext = ext(new showdown.Converter());
            if (!showdown.helper.isArray(ext)) ext = [
                ext
            ];
            var valid = validate(ext, name);
            if (!valid.valid) throw Error(valid.error);
            for(var i = 0; i < ext.length; ++i)switch(ext[i].type){
                case "lang":
                    langExtensions.push(ext[i]);
                    break;
                case "output":
                    outputModifiers.push(ext[i]);
                    break;
                default:
                    throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   */ function listen(name, callback) {
            if (!showdown.helper.isString(name)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
            if (typeof callback !== "function") throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
            if (!listeners.hasOwnProperty(name)) listeners[name] = [];
            listeners[name].push(callback);
        }
        function rTrimInputText(text) {
            var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
            return text.replace(rgx, "");
        }
        /**
   * Dispatch an event
   * @private
   * @param {string} evtName Event name
   * @param {string} text Text
   * @param {{}} options Converter Options
   * @param {{}} globals
   * @returns {string}
   */ this._dispatch = function dispatch(evtName, text, options, globals) {
            if (listeners.hasOwnProperty(evtName)) for(var ei = 0; ei < listeners[evtName].length; ++ei){
                var nText = listeners[evtName][ei](evtName, text, this, options, globals);
                if (nText && typeof nText !== "undefined") text = nText;
            }
            return text;
        };
        /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   * @returns {showdown.Converter}
   */ this.listen = function(name, callback) {
            listen(name, callback);
            return this;
        };
        /**
   * Converts a markdown string into HTML
   * @param {string} text
   * @returns {*}
   */ this.makeHtml = function(text) {
            //check if text is not falsy
            if (!text) return text;
            var globals = {
                gHtmlBlocks: [],
                gHtmlMdBlocks: [],
                gHtmlSpans: [],
                gUrls: {},
                gTitles: {},
                gDimensions: {},
                gListLevel: 0,
                hashLinkCounts: {},
                langExtensions: langExtensions,
                outputModifiers: outputModifiers,
                converter: this,
                ghCodeBlocks: [],
                metadata: {
                    parsed: {},
                    raw: "",
                    format: ""
                }
            };
            // This lets us use ¨ trema as an escape char to avoid md5 hashes
            // The choice of character is arbitrary; anything that isn't
            // magic in Markdown will work.
            text = text.replace(/¨/g, "\xa8T");
            // Replace $ with ¨D
            // RegExp interprets $ as a special character
            // when it's in a replacement string
            text = text.replace(/\$/g, "\xa8D");
            // Standardize line endings
            text = text.replace(/\r\n/g, "\n"); // DOS to Unix
            text = text.replace(/\r/g, "\n"); // Mac to Unix
            // Stardardize line spaces
            text = text.replace(/\u00A0/g, "&nbsp;");
            if (options.smartIndentationFix) text = rTrimInputText(text);
            // Make sure text begins and ends with a couple of newlines:
            text = "\n\n" + text + "\n\n";
            // detab
            text = showdown.subParser("detab")(text, options, globals);
            /**
     * Strip any lines consisting only of spaces and tabs.
     * This makes subsequent regexs easier to write, because we can
     * match consecutive blank lines with /\n+/ instead of something
     * contorted like /[ \t]*\n+/
     */ text = text.replace(/^[ \t]+$/mg, "");
            //run languageExtensions
            showdown.helper.forEach(langExtensions, function(ext) {
                text = showdown.subParser("runExtension")(ext, text, options, globals);
            });
            // run the sub parsers
            text = showdown.subParser("metadata")(text, options, globals);
            text = showdown.subParser("hashPreCodeTags")(text, options, globals);
            text = showdown.subParser("githubCodeBlocks")(text, options, globals);
            text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
            text = showdown.subParser("hashCodeTags")(text, options, globals);
            text = showdown.subParser("stripLinkDefinitions")(text, options, globals);
            text = showdown.subParser("blockGamut")(text, options, globals);
            text = showdown.subParser("unhashHTMLSpans")(text, options, globals);
            text = showdown.subParser("unescapeSpecialChars")(text, options, globals);
            // attacklab: Restore dollar signs
            text = text.replace(/¨D/g, "$$");
            // attacklab: Restore tremas
            text = text.replace(/¨T/g, "\xa8");
            // render a complete html document instead of a partial if the option is enabled
            text = showdown.subParser("completeHTMLDocument")(text, options, globals);
            // Run output modifiers
            showdown.helper.forEach(outputModifiers, function(ext) {
                text = showdown.subParser("runExtension")(ext, text, options, globals);
            });
            // update metadata
            metadata = globals.metadata;
            return text;
        };
        /**
   * Converts an HTML string into a markdown string
   * @param src
   * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
   * @returns {string}
   */ this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
            // replace \r\n with \n
            src = src.replace(/\r\n/g, "\n");
            src = src.replace(/\r/g, "\n"); // old macs
            // due to an edge case, we need to find this: > <
            // to prevent removing of non silent white spaces
            // ex: <em>this is</em> <strong>sparta</strong>
            src = src.replace(/>[ \t]+</, ">\xa8NBSP;<");
            if (!HTMLParser) {
                if (window && window.document) HTMLParser = window.document;
                else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
            }
            var doc = HTMLParser.createElement("div");
            doc.innerHTML = src;
            var globals = {
                preList: substitutePreCodeTags(doc)
            };
            // remove all newlines and collapse spaces
            clean(doc);
            // some stuff, like accidental reference links must now be escaped
            // TODO
            // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);
            var nodes = doc.childNodes, mdDoc = "";
            for(var i = 0; i < nodes.length; i++)mdDoc += showdown.subParser("makeMarkdown.node")(nodes[i], globals);
            function clean(node) {
                for(var n = 0; n < node.childNodes.length; ++n){
                    var child = node.childNodes[n];
                    if (child.nodeType === 3) {
                        if (!/\S/.test(child.nodeValue) && !/^[ ]+$/.test(child.nodeValue)) {
                            node.removeChild(child);
                            --n;
                        } else {
                            child.nodeValue = child.nodeValue.split("\n").join(" ");
                            child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                        }
                    } else if (child.nodeType === 1) clean(child);
                }
            }
            // find all pre tags and replace contents with placeholder
            // we need this so that we can remove all indentation from html
            // to ease up parsing
            function substitutePreCodeTags(doc) {
                var pres = doc.querySelectorAll("pre"), presPH = [];
                for(var i = 0; i < pres.length; ++i)if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === "code") {
                    var content = pres[i].firstChild.innerHTML.trim(), language = pres[i].firstChild.getAttribute("data-language") || "";
                    // if data-language attribute is not defined, then we look for class language-*
                    if (language === "") {
                        var classes = pres[i].firstChild.className.split(" ");
                        for(var c = 0; c < classes.length; ++c){
                            var matches = classes[c].match(/^language-(.+)$/);
                            if (matches !== null) {
                                language = matches[1];
                                break;
                            }
                        }
                    }
                    // unescape html entities in content
                    content = showdown.helper.unescapeHTMLEntities(content);
                    presPH.push(content);
                    pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
                } else {
                    presPH.push(pres[i].innerHTML);
                    pres[i].innerHTML = "";
                    pres[i].setAttribute("prenum", i.toString());
                }
                return presPH;
            }
            return mdDoc;
        };
        /**
   * Set an option of this Converter instance
   * @param {string} key
   * @param {*} value
   */ this.setOption = function(key, value) {
            options[key] = value;
        };
        /**
   * Get the option of this Converter instance
   * @param {string} key
   * @returns {*}
   */ this.getOption = function(key) {
            return options[key];
        };
        /**
   * Get the options of this Converter instance
   * @returns {{}}
   */ this.getOptions = function() {
            return options;
        };
        /**
   * Add extension to THIS converter
   * @param {{}} extension
   * @param {string} [name=null]
   */ this.addExtension = function(extension, name) {
            name = name || null;
            _parseExtension(extension, name);
        };
        /**
   * Use a global registered extension with THIS converter
   * @param {string} extensionName Name of the previously registered extension
   */ this.useExtension = function(extensionName) {
            _parseExtension(extensionName);
        };
        /**
   * Set the flavor THIS converter should use
   * @param {string} name
   */ this.setFlavor = function(name) {
            if (!flavor.hasOwnProperty(name)) throw Error(name + " flavor was not found");
            var preset = flavor[name];
            setConvFlavor = name;
            for(var option in preset)if (preset.hasOwnProperty(option)) options[option] = preset[option];
        };
        /**
   * Get the currently set flavor of this converter
   * @returns {string}
   */ this.getFlavor = function() {
            return setConvFlavor;
        };
        /**
   * Remove an extension from THIS converter.
   * Note: This is a costly operation. It's better to initialize a new converter
   * and specify the extensions you wish to use
   * @param {Array} extension
   */ this.removeExtension = function(extension) {
            if (!showdown.helper.isArray(extension)) extension = [
                extension
            ];
            for(var a = 0; a < extension.length; ++a){
                var ext = extension[a];
                for(var i = 0; i < langExtensions.length; ++i)if (langExtensions[i] === ext) langExtensions.splice(i, 1);
                for(var ii = 0; ii < outputModifiers.length; ++ii)if (outputModifiers[ii] === ext) outputModifiers.splice(ii, 1);
            }
        };
        /**
   * Get all extension of THIS converter
   * @returns {{language: Array, output: Array}}
   */ this.getAllExtensions = function() {
            return {
                language: langExtensions,
                output: outputModifiers
            };
        };
        /**
   * Get the metadata of the previously parsed document
   * @param raw
   * @returns {string|{}}
   */ this.getMetadata = function(raw) {
            if (raw) return metadata.raw;
            else return metadata.parsed;
        };
        /**
   * Get the metadata format of the previously parsed document
   * @returns {string}
   */ this.getMetadataFormat = function() {
            return metadata.format;
        };
        /**
   * Private: set a single key, value metadata pair
   * @param {string} key
   * @param {string} value
   */ this._setMetadataPair = function(key, value) {
            metadata.parsed[key] = value;
        };
        /**
   * Private: set metadata format
   * @param {string} format
   */ this._setMetadataFormat = function(format) {
            metadata.format = format;
        };
        /**
   * Private: set metadata raw text
   * @param {string} raw
   */ this._setMetadataRaw = function(raw) {
            metadata.raw = raw;
        };
    };
    /**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */ showdown.subParser("anchors", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("anchors.before", text, options, globals);
        var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
            if (showdown.helper.isUndefined(title)) title = "";
            linkId = linkId.toLowerCase();
            // Special case for explicit empty url
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) url = "";
            else if (!url) {
                if (!linkId) // lower-case and turn embedded newlines into spaces
                linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
                url = "#" + linkId;
                if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
                    url = globals.gUrls[linkId];
                    if (!showdown.helper.isUndefined(globals.gTitles[linkId])) title = globals.gTitles[linkId];
                } else return wholeMatch;
            }
            //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<a href="' + url + '"';
            if (title !== "" && title !== null) {
                title = title.replace(/"/g, "&quot;");
                //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
                title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
                result += ' title="' + title + '"';
            }
            // optionLinksInNewWindow only applies
            // to external links. Hash links (#) open in same page
            if (options.openLinksInNewWindow && !/^#/.test(url)) // escaped _
            result += ' rel="noopener noreferrer" target="\xa8E95Eblank"';
            result += ">" + linkText + "</a>";
            return result;
        };
        // First, handle reference-style links: [link text] [id]
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
        // Next, inline-style links: [link text](url "optional title")
        // cases with crazy urls like ./image/cat1).png
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        // normal cases
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        // handle reference-style shortcuts: [link text]
        // These must come last in case you've also got [link test][1]
        // or [link test](/foo)
        text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
        // Lastly handle GithubMentions if option is enabled
        if (options.ghMentions) text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
            if (escape === "\\") return st + mentions;
            //check if options.ghMentionsLink is a string
            if (!showdown.helper.isString(options.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
            var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
            if (options.openLinksInNewWindow) target = ' rel="noopener noreferrer" target="\xa8E95Eblank"';
            return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
        });
        text = globals.converter._dispatch("anchors.after", text, options, globals);
        return text;
    });
    // url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]
    var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, replaceLink = function(options) {
        "use strict";
        return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
            link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var lnkTxt = link, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
            if (/^www\./i.test(link)) link = link.replace(/^www\./i, "http://www.");
            if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) append = trailingPunctuation;
            if (options.openLinksInNewWindow) target = ' rel="noopener noreferrer" target="\xa8E95Eblank"';
            return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
        };
    }, replaceMail = function(options, globals) {
        "use strict";
        return function(wholeMatch, b, mail) {
            var href = "mailto:";
            b = b || "";
            mail = showdown.subParser("unescapeSpecialChars")(mail, options, globals);
            if (options.encodeEmails) {
                href = showdown.helper.encodeEmailAddress(href + mail);
                mail = showdown.helper.encodeEmailAddress(mail);
            } else href = href + mail;
            return b + '<a href="' + href + '">' + mail + "</a>";
        };
    };
    showdown.subParser("autoLinks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("autoLinks.before", text, options, globals);
        text = text.replace(delimUrlRegex, replaceLink(options));
        text = text.replace(delimMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("autoLinks.after", text, options, globals);
        return text;
    });
    showdown.subParser("simplifiedAutoLinks", function(text, options, globals) {
        "use strict";
        if (!options.simplifiedAutoLink) return text;
        text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
        if (options.excludeTrailingPunctuationFromURLs) text = text.replace(simpleURLRegex2, replaceLink(options));
        else text = text.replace(simpleURLRegex, replaceLink(options));
        text = text.replace(simpleMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
        return text;
    });
    /**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */ showdown.subParser("blockGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockGamut.before", text, options, globals);
        // we parse blockquotes first so that we can have headings and hrs
        // inside blockquotes
        text = showdown.subParser("blockQuotes")(text, options, globals);
        text = showdown.subParser("headers")(text, options, globals);
        // Do Horizontal Rules:
        text = showdown.subParser("horizontalRule")(text, options, globals);
        text = showdown.subParser("lists")(text, options, globals);
        text = showdown.subParser("codeBlocks")(text, options, globals);
        text = showdown.subParser("tables")(text, options, globals);
        // We already ran _HashHTMLBlocks() before, in Markdown(), but that
        // was to escape raw HTML in the original Markdown source. This time,
        // we're escaping the markup we've just created, so that we don't wrap
        // <p> tags around block-level tags.
        text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
        text = showdown.subParser("paragraphs")(text, options, globals);
        text = globals.converter._dispatch("blockGamut.after", text, options, globals);
        return text;
    });
    showdown.subParser("blockQuotes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
        // add a couple extra lines after the text and endtext mark
        text = text + "\n\n";
        var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        if (options.splitAdjacentBlockquotes) rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
        text = text.replace(rgx, function(bq) {
            // attacklab: hack around Konqueror 3.5.4 bug:
            // "----------bug".replace(/^-/g,"") == "bug"
            bq = bq.replace(/^[ \t]*>[ \t]?/gm, ""); // trim one level of quoting
            // attacklab: clean up hack
            bq = bq.replace(/¨0/g, "");
            bq = bq.replace(/^[ \t]+$/gm, ""); // trim whitespace-only lines
            bq = showdown.subParser("githubCodeBlocks")(bq, options, globals);
            bq = showdown.subParser("blockGamut")(bq, options, globals); // recurse
            bq = bq.replace(/(^|\n)/g, "$1  ");
            // These leading spaces screw with <pre> content, so we need to fix that:
            bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
                var pre = m1;
                // attacklab: hack around Konqueror 3.5.4 bug:
                pre = pre.replace(/^  /mg, "\xa80");
                pre = pre.replace(/¨0/g, "");
                return pre;
            });
            return showdown.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
        });
        text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
        return text;
    });
    /**
 * Process Markdown `<pre><code>` blocks.
 */ showdown.subParser("codeBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
        // sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "\xa80";
        var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        text = text.replace(pattern, function(wholeMatch, m1, m2) {
            var codeblock = m1, nextChar = m2, end = "\n";
            codeblock = showdown.subParser("outdent")(codeblock, options, globals);
            codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
            codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing newlines
            if (options.omitExtraWLInCodeBlocks) end = "";
            codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
            return showdown.subParser("hashBlock")(codeblock, options, globals) + nextChar;
        });
        // strip sentinel
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
        return text;
    });
    /**
 *
 *   *  Backtick quotes are used for <code></code> spans.
 *
 *   *  You can use multiple backticks as the delimiters if you want to
 *     include literal backticks in the code span. So, this input:
 *
 *         Just type ``foo `bar` baz`` at the prompt.
 *
 *       Will translate to:
 *
 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
 *
 *    There's no arbitrary limit to the number of backticks you
 *    can use as delimters. If you need three consecutive backticks
 *    in your code, use four for delimiters, etc.
 *
 *  *  You can use spaces to get literal backticks at the edges:
 *
 *         ... type `` `bar` `` ...
 *
 *       Turns to:
 *
 *         ... type <code>`bar`</code> ...
 */ showdown.subParser("codeSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeSpans.before", text, options, globals);
        if (typeof text === "undefined") text = "";
        text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch, m1, m2, m3) {
            var c = m3;
            c = c.replace(/^([ \t]*)/g, ""); // leading whitespace
            c = c.replace(/[ \t]*$/g, ""); // trailing whitespace
            c = showdown.subParser("encodeCode")(c, options, globals);
            c = m1 + "<code>" + c + "</code>";
            c = showdown.subParser("hashHTMLSpans")(c, options, globals);
            return c;
        });
        text = globals.converter._dispatch("codeSpans.after", text, options, globals);
        return text;
    });
    /**
 * Create a full HTML document from the processed markdown
 */ showdown.subParser("completeHTMLDocument", function(text, options, globals) {
        "use strict";
        if (!options.completeHTMLDocument) return text;
        text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
        var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
        if (typeof globals.metadata.parsed.doctype !== "undefined") {
            doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
            doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
            if (doctype === "html" || doctype === "html5") charset = '<meta charset="utf-8">';
        }
        for(var meta in globals.metadata.parsed)if (globals.metadata.parsed.hasOwnProperty(meta)) switch(meta.toLowerCase()){
            case "doctype":
                break;
            case "title":
                title = "<title>" + globals.metadata.parsed.title + "</title>\n";
                break;
            case "charset":
                if (doctype === "html" || doctype === "html5") charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                else charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                break;
            case "language":
            case "lang":
                lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                break;
            default:
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
        }
        text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
        text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
        return text;
    });
    /**
 * Convert all tabs to spaces
 */ showdown.subParser("detab", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("detab.before", text, options, globals);
        // expand first n-1 tabs
        text = text.replace(/\t(?=\t)/g, "    "); // g_tab_width
        // replace the nth with two sentinels
        text = text.replace(/\t/g, "\xa8A\xa8B");
        // use the sentinel to anchor our regex so it doesn't explode
        text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
            var leadingText = m1, numSpaces = 4 - leadingText.length % 4; // g_tab_width
            // there *must* be a better way to do this:
            for(var i = 0; i < numSpaces; i++)leadingText += " ";
            return leadingText;
        });
        // clean up sentinels
        text = text.replace(/¨A/g, "    "); // g_tab_width
        text = text.replace(/¨B/g, "");
        text = globals.converter._dispatch("detab.after", text, options, globals);
        return text;
    });
    showdown.subParser("ellipsis", function(text, options, globals) {
        "use strict";
        if (!options.ellipsis) return text;
        text = globals.converter._dispatch("ellipsis.before", text, options, globals);
        text = text.replace(/\.\.\./g, "\u2026");
        text = globals.converter._dispatch("ellipsis.after", text, options, globals);
        return text;
    });
    /**
 * Turn emoji codes into emojis
 *
 * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
 */ showdown.subParser("emoji", function(text, options, globals) {
        "use strict";
        if (!options.emoji) return text;
        text = globals.converter._dispatch("emoji.before", text, options, globals);
        var emojiRgx = /:([\S]+?):/g;
        text = text.replace(emojiRgx, function(wm, emojiCode) {
            if (showdown.helper.emojis.hasOwnProperty(emojiCode)) return showdown.helper.emojis[emojiCode];
            return wm;
        });
        text = globals.converter._dispatch("emoji.after", text, options, globals);
        return text;
    });
    /**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */ showdown.subParser("encodeAmpsAndAngles", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
        // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
        // http://bumppo.net/projects/amputator/
        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
        // Encode naked <'s
        text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
        // Encode <
        text = text.replace(/</g, "&lt;");
        // Encode >
        text = text.replace(/>/g, "&gt;");
        text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
        return text;
    });
    /**
 * Returns the string, with after processing the following backslash escape sequences.
 *
 * attacklab: The polite way to do this is with the new escapeCharacters() function:
 *
 *    text = escapeCharacters(text,"\\",true);
 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
 *
 * ...but we're sidestepping its use of the (slow) RegExp constructor
 * as an optimization for Firefox.  This function gets called a LOT.
 */ showdown.subParser("encodeBackslashEscapes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
        text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
        text = text.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
        return text;
    });
    /**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */ showdown.subParser("encodeCode", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeCode.before", text, options, globals);
        // Encode all ampersands; HTML entities are not
        // entities within a Markdown code span.
        text = text.replace(/&/g, "&amp;")// Do the angle bracket song and dance:
        .replace(/</g, "&lt;").replace(/>/g, "&gt;")// Now, escape characters that are magic in Markdown:
        .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeCode.after", text, options, globals);
        return text;
    });
    /**
 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */ showdown.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
        // Build a regex to find HTML tags.
        var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        text = text.replace(tags, function(wholeMatch) {
            return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = text.replace(comments, function(wholeMatch) {
            return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
        return text;
    });
    /**
 * Handle github codeblocks prior to running HashHTML so that
 * HTML contained within the codeblock gets escaped properly
 * Example:
 * ```ruby
 *     def hello_world(x)
 *       puts "Hello, #{x}"
 *     end
 * ```
 */ showdown.subParser("githubCodeBlocks", function(text, options, globals) {
        "use strict";
        // early exit if option is not enabled
        if (!options.ghCodeBlocks) return text;
        text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
        text += "\xa80";
        text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
            var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
            // First parse the github code block
            codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
            codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing whitespace
            codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
            codeblock = showdown.subParser("hashBlock")(codeblock, options, globals);
            // Since GHCodeblocks can be false positives, we need to
            // store the primitive text and the parsed text in a global var,
            // and then return a token
            return "\n\n\xa8G" + (globals.ghCodeBlocks.push({
                text: wholeMatch,
                codeblock: codeblock
            }) - 1) + "G\n\n";
        });
        // attacklab: strip sentinel
        text = text.replace(/¨0/, "");
        return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
    });
    showdown.subParser("hashBlock", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashBlock.before", text, options, globals);
        text = text.replace(/(^\n+|\n+$)/g, "");
        text = "\n\n\xa8K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
        text = globals.converter._dispatch("hashBlock.after", text, options, globals);
        return text;
    });
    /**
 * Hash and escape <code> elements that should not be parsed as markdown
 */ showdown.subParser("hashCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
            var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
            return "\xa8C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
        };
        // Hash naked <code>
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
        text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
        return text;
    });
    showdown.subParser("hashElement", function(text, options, globals) {
        "use strict";
        return function(wholeMatch, m1) {
            var blockText = m1;
            // Undo double lines
            blockText = blockText.replace(/\n\n/g, "\n");
            blockText = blockText.replace(/^\n/, "");
            // strip trailing blank lines
            blockText = blockText.replace(/\n+$/g, "");
            // Replace the element text with a marker ("¨KxK" where x is its key)
            blockText = "\n\n\xa8K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
            return blockText;
        };
    });
    showdown.subParser("hashHTMLBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
        var blockTags = [
            "pre",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "table",
            "dl",
            "ol",
            "ul",
            "script",
            "noscript",
            "form",
            "fieldset",
            "iframe",
            "math",
            "style",
            "section",
            "header",
            "footer",
            "nav",
            "article",
            "aside",
            "address",
            "audio",
            "canvas",
            "figure",
            "hgroup",
            "output",
            "video",
            "p"
        ], repFunc = function(wholeMatch, match, left, right) {
            var txt = wholeMatch;
            // check if this html element is marked as markdown
            // if so, it's contents should be parsed as markdown
            if (left.search(/\bmarkdown\b/) !== -1) txt = left + globals.converter.makeHtml(match) + right;
            return "\n\n\xa8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        };
        if (options.backslashEscapesHTMLTags) // encode backslash escaped HTML tags
        text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
            return "&lt;" + inside + "&gt;";
        });
        // hash HTML Blocks
        for(var i = 0; i < blockTags.length; ++i){
            var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i] + "\\b[^>]*>", patRight = "</" + blockTags[i] + ">";
            // 1. Look for the first position of the first opening HTML tag in the text
            while((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1){
                // if the HTML tag is \ escaped, we need to escape it and break
                //2. Split the text in that position
                var subTexts = showdown.helper.splitAtIndex(text, opTagPos), //3. Match recursively
                newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
                // prevent an infinite loop
                if (newSubText1 === subTexts[1]) break;
                text = subTexts[0].concat(newSubText1);
            }
        }
        // HR SPECIAL CASE
        text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        // Special case for standalone HTML comments
        text = showdown.helper.replaceRecursiveRegExp(text, function(txt) {
            return "\n\n\xa8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        }, "^ {0,3}<!--", "-->", "gm");
        // PHP and ASP-style processor instructions (<?...?> and <%...%>)
        text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
        return text;
    });
    /**
 * Hash span elements that should not be parsed as markdown
 */ showdown.subParser("hashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
        function hashHTMLSpan(html) {
            return "\xa8C" + (globals.gHtmlSpans.push(html) - 1) + "C";
        }
        // Hash Self Closing tags
        text = text.replace(/<[^>]+?\/>/gi, function(wm) {
            return hashHTMLSpan(wm);
        });
        // Hash tags without properties
        text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
        });
        // Hash tags with properties
        text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
        });
        // Hash self closing tags without />
        text = text.replace(/<[^>]+?>/gi, function(wm) {
            return hashHTMLSpan(wm);
        });
        /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/ text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
        return text;
    });
    /**
 * Unhash HTML spans
 */ showdown.subParser("unhashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
        for(var i = 0; i < globals.gHtmlSpans.length; ++i){
            var repText = globals.gHtmlSpans[i], // limiter to prevent infinite loop (assume 10 as limit for recurse)
            limit = 0;
            while(/¨C(\d+)C/.test(repText)){
                var num = RegExp.$1;
                repText = repText.replace("\xa8C" + num + "C", globals.gHtmlSpans[num]);
                if (limit === 10) {
                    console.error("maximum nesting of 10 spans reached!!!");
                    break;
                }
                ++limit;
            }
            text = text.replace("\xa8C" + i + "C", repText);
        }
        text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
        return text;
    });
    /**
 * Hash and escape <pre><code> elements that should not be parsed as markdown
 */ showdown.subParser("hashPreCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
            // encode html entities
            var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
            return "\n\n\xa8G" + (globals.ghCodeBlocks.push({
                text: wholeMatch,
                codeblock: codeblock
            }) - 1) + "G\n\n";
        };
        // Hash <pre><code>
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
        text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
        return text;
    });
    showdown.subParser("headers", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("headers.before", text, options, globals);
        var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), // Set text-style headers:
        //	Header 1
        //	========
        //
        //	Header 2
        //	--------
        //
        setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        text = text.replace(setextRegexH1, function(wholeMatch, m1) {
            var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(hashBlock, options, globals);
        });
        text = text.replace(setextRegexH2, function(matchFound, m1) {
            var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(hashBlock, options, globals);
        });
        // atx-style headers:
        //  # Header 1
        //  ## Header 2
        //  ## Header 2 with closing hashes ##
        //  ...
        //  ###### Header 6
        //
        var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
            var hText = m2;
            if (options.customizedHeaderId) hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
            var span = showdown.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(header, options, globals);
        });
        function headerId(m) {
            var title, prefix;
            // It is separate from other options to allow combining prefix and customized
            if (options.customizedHeaderId) {
                var match = m.match(/\{([^{]+?)}\s*$/);
                if (match && match[1]) m = match[1];
            }
            title = m;
            // Prefix id to prevent causing inadvertent pre-existing style matches.
            if (showdown.helper.isString(options.prefixHeaderId)) prefix = options.prefixHeaderId;
            else if (options.prefixHeaderId === true) prefix = "section-";
            else prefix = "";
            if (!options.rawPrefixHeaderId) title = prefix + title;
            if (options.ghCompatibleHeaderId) title = title.replace(/ /g, "-")// replace previously escaped chars (&, ¨ and $)
            .replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "")// replace rest of the chars (&~$ are repeated as they might have been escaped)
            // borrowed from github's redcarpet (some they should produce similar results)
            .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
            else if (options.rawHeaderId) title = title.replace(/ /g, "-")// replace previously escaped chars (&, ¨ and $)
            .replace(/&amp;/g, "&").replace(/¨T/g, "\xa8").replace(/¨D/g, "$")// replace " and '
            .replace(/["']/g, "-").toLowerCase();
            else title = title.replace(/[^\w]/g, "").toLowerCase();
            if (options.rawPrefixHeaderId) title = prefix + title;
            if (globals.hashLinkCounts[title]) title = title + "-" + globals.hashLinkCounts[title]++;
            else globals.hashLinkCounts[title] = 1;
            return title;
        }
        text = globals.converter._dispatch("headers.after", text, options, globals);
        return text;
    });
    /**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */ showdown.subParser("horizontalRule", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
        var key = showdown.subParser("hashBlock")("<hr />", options, globals);
        text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
        text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
        return text;
    });
    /**
 * Turn Markdown image shortcuts into <img> tags.
 */ showdown.subParser("images", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("images.before", text, options, globals);
        var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
        function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
            url = url.replace(/\s/g, "");
            return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
        }
        function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
            var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
            linkId = linkId.toLowerCase();
            if (!title) title = "";
            // Special case for explicit empty url
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) url = "";
            else if (url === "" || url === null) {
                if (linkId === "" || linkId === null) // lower-case and turn embedded newlines into spaces
                linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
                url = "#" + linkId;
                if (!showdown.helper.isUndefined(gUrls[linkId])) {
                    url = gUrls[linkId];
                    if (!showdown.helper.isUndefined(gTitles[linkId])) title = gTitles[linkId];
                    if (!showdown.helper.isUndefined(gDims[linkId])) {
                        width = gDims[linkId].width;
                        height = gDims[linkId].height;
                    }
                } else return wholeMatch;
            }
            altText = altText.replace(/"/g, "&quot;")//altText = showdown.helper.escapeCharacters(altText, '*_', false);
            .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            //url = showdown.helper.escapeCharacters(url, '*_', false);
            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<img src="' + url + '" alt="' + altText + '"';
            if (title && showdown.helper.isString(title)) {
                title = title.replace(/"/g, "&quot;")//title = showdown.helper.escapeCharacters(title, '*_', false);
                .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
                result += ' title="' + title + '"';
            }
            if (width && height) {
                width = width === "*" ? "auto" : width;
                height = height === "*" ? "auto" : height;
                result += ' width="' + width + '"';
                result += ' height="' + height + '"';
            }
            result += " />";
            return result;
        }
        // First, handle reference-style labeled images: ![alt text][id]
        text = text.replace(referenceRegExp, writeImageTag);
        // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
        // base64 encoded images
        text = text.replace(base64RegExp, writeImageTagBase64);
        // cases with crazy urls like ./image/cat1).png
        text = text.replace(crazyRegExp, writeImageTag);
        // normal cases
        text = text.replace(inlineRegExp, writeImageTag);
        // handle reference-style shortcuts: ![img text]
        text = text.replace(refShortcutRegExp, writeImageTag);
        text = globals.converter._dispatch("images.after", text, options, globals);
        return text;
    });
    showdown.subParser("italicsAndBold", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
        // it's faster to have 3 separate regexes for each case than have just one
        // because of backtracing, in some cases, it could lead to an exponential effect
        // called "catastrophic backtrace". Ominous!
        function parseInside(txt, left, right) {
            /*
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    */ return left + txt + right;
        }
        // Parse underscores
        if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
                return parseInside(txt, "<strong><em>", "</em></strong>");
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
                return parseInside(txt, "<strong>", "</strong>");
            });
            text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
                return parseInside(txt, "<em>", "</em>");
            });
        } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m) {
                // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
                return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
            });
        }
        // Now parse asterisks
        if (options.literalMidWordAsterisks) {
            text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
                return parseInside(txt, lead + "<strong><em>", "</em></strong>");
            });
            text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
                return parseInside(txt, lead + "<strong>", "</strong>");
            });
            text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
                return parseInside(txt, lead + "<em>", "</em>");
            });
        } else {
            text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m) {
                return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m) {
                // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
                return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
            });
        }
        text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
        return text;
    });
    /**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */ showdown.subParser("lists", function(text, options, globals) {
        "use strict";
        /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */ function processListItems(listStr, trimTrailing) {
            // The $g_list_level global keeps track of when we're inside a list.
            // Each time we enter a list, we increment it; when we leave a list,
            // we decrement. If it's zero, we're not in a list anymore.
            //
            // We do this because when we're not inside a list, we want to treat
            // something like this:
            //
            //    I recommend upgrading to version
            //    8. Oops, now this line is treated
            //    as a sub-list.
            //
            // As a single paragraph, despite the fact that the second line starts
            // with a digit-period-space sequence.
            //
            // Whereas when we're inside a list (or sub-list), that line will be
            // treated as the start of a sub-list. What a kludge, huh? This is
            // an aspect of Markdown's syntax that's hard to parse perfectly
            // without resorting to mind-reading. Perhaps the solution is to
            // change the syntax rules such that sub-lists must start with a
            // starting cardinal number; e.g. "1." or "a.".
            globals.gListLevel++;
            // trim trailing blank lines:
            listStr = listStr.replace(/\n{2,}$/, "\n");
            // attacklab: add sentinel to emulate \z
            listStr += "\xa80";
            var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
            // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
            // which is a syntax breaking change
            // activating this option reverts to old behavior
            if (options.disableForced4SpacesIndentedSublists) rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
            listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
                checked = checked && checked.trim() !== "";
                var item = showdown.subParser("outdent")(m4, options, globals), bulletStyle = "";
                // Support for github tasklists
                if (taskbtn && options.tasklists) {
                    bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
                    item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                        var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                        if (checked) otp += " checked";
                        otp += ">";
                        return otp;
                    });
                }
                // ISSUE #312
                // This input: - - - a
                // causes trouble to the parser, since it interprets it as:
                // <ul><li><li><li>a</li></li></li></ul>
                // instead of:
                // <ul><li>- - a</li></ul>
                // So, to prevent it, we will put a marker (¨A)in the beginning of the line
                // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
                item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
                    return "\xa8A" + wm2;
                });
                // m1 - Leading line or
                // Has a double return (multi paragraph) or
                // Has sublist
                if (m1 || item.search(/\n{2,}/) > -1) {
                    item = showdown.subParser("githubCodeBlocks")(item, options, globals);
                    item = showdown.subParser("blockGamut")(item, options, globals);
                } else {
                    // Recursion for sub-lists:
                    item = showdown.subParser("lists")(item, options, globals);
                    item = item.replace(/\n$/, ""); // chomp(item)
                    item = showdown.subParser("hashHTMLBlocks")(item, options, globals);
                    // Colapse double linebreaks
                    item = item.replace(/\n\n+/g, "\n\n");
                    if (isParagraphed) item = showdown.subParser("paragraphs")(item, options, globals);
                    else item = showdown.subParser("spanGamut")(item, options, globals);
                }
                // now we need to remove the marker (¨A)
                item = item.replace("\xa8A", "");
                // we can finally wrap the line in list item tags
                item = "<li" + bulletStyle + ">" + item + "</li>\n";
                return item;
            });
            // attacklab: strip sentinel
            listStr = listStr.replace(/¨0/g, "");
            globals.gListLevel--;
            if (trimTrailing) listStr = listStr.replace(/\s+$/, "");
            return listStr;
        }
        function styleStartNumber(list, listType) {
            // check if ol and starts by a number different than 1
            if (listType === "ol") {
                var res = list.match(/^ *(\d+)\./);
                if (res && res[1] !== "1") return ' start="' + res[1] + '"';
            }
            return "";
        }
        /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @param {boolean} trimTrailing
   * @returns {string}
   */ function parseConsecutiveLists(list, listType, trimTrailing) {
            // check if we caught 2 or more consecutive lists by mistake
            // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
            var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
            if (list.search(counterRxg) !== -1) (function parseCL(txt) {
                var pos = txt.search(counterRxg), style = styleStartNumber(list, listType);
                if (pos !== -1) {
                    // slice
                    result += "\n\n<" + listType + style + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
                    // invert counterType and listType
                    listType = listType === "ul" ? "ol" : "ul";
                    counterRxg = listType === "ul" ? olRgx : ulRgx;
                    //recurse
                    parseCL(txt.slice(pos));
                } else result += "\n\n<" + listType + style + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
            })(list);
            else {
                var style = styleStartNumber(list, listType);
                result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
            }
            return result;
        }
        /** Start of list parsing **/ text = globals.converter._dispatch("lists.before", text, options, globals);
        // add sentinel to hack around khtml/safari bug:
        // http://bugs.webkit.org/show_bug.cgi?id=11231
        text += "\xa80";
        if (globals.gListLevel) text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, list, m2) {
            var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, true);
        });
        else text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, m1, list, m3) {
            var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, false);
        });
        // strip sentinel
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("lists.after", text, options, globals);
        return text;
    });
    /**
 * Parse metadata at the top of the document
 */ showdown.subParser("metadata", function(text, options, globals) {
        "use strict";
        if (!options.metadata) return text;
        text = globals.converter._dispatch("metadata.before", text, options, globals);
        function parseMetadataContents(content) {
            // raw is raw so it's not changed in any way
            globals.metadata.raw = content;
            // escape chars forbidden in html attributes
            // double quotes
            content = content// ampersand first
            .replace(/&/g, "&amp;")// double quotes
            .replace(/"/g, "&quot;");
            content = content.replace(/\n {4}/g, " ");
            content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
                globals.metadata.parsed[key] = value;
                return "";
            });
        }
        text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
            parseMetadataContents(content);
            return "\xa8M";
        });
        text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
            if (format) globals.metadata.format = format;
            parseMetadataContents(content);
            return "\xa8M";
        });
        text = text.replace(/¨M/g, "");
        text = globals.converter._dispatch("metadata.after", text, options, globals);
        return text;
    });
    /**
 * Remove one level of line-leading tabs or spaces
 */ showdown.subParser("outdent", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("outdent.before", text, options, globals);
        // attacklab: hack around Konqueror 3.5.4 bug:
        // "----------bug".replace(/^-/g,"") == "bug"
        text = text.replace(/^(\t|[ ]{1,4})/gm, "\xa80"); // attacklab: g_tab_width
        // attacklab: clean up hack
        text = text.replace(/¨0/g, "");
        text = globals.converter._dispatch("outdent.after", text, options, globals);
        return text;
    });
    /**
 *
 */ showdown.subParser("paragraphs", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("paragraphs.before", text, options, globals);
        // Strip leading and trailing lines:
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length; // Wrap <p> tags
        for(var i = 0; i < end; i++){
            var str = grafs[i];
            // if this is an HTML marker, copy it
            if (str.search(/¨(K|G)(\d+)\1/g) >= 0) grafsOut.push(str);
            else if (str.search(/\S/) >= 0) {
                str = showdown.subParser("spanGamut")(str, options, globals);
                str = str.replace(/^([ \t]*)/g, "<p>");
                str += "</p>";
                grafsOut.push(str);
            }
        }
        /** Unhashify HTML blocks */ end = grafsOut.length;
        for(i = 0; i < end; i++){
            var blockText = "", grafsOutIt = grafsOut[i], codeFlag = false;
            // if this is a marker for an html block...
            // use RegExp.test instead of string.search because of QML bug
            while(/¨(K|G)(\d+)\1/.test(grafsOutIt)){
                var delim = RegExp.$1, num = RegExp.$2;
                if (delim === "K") blockText = globals.gHtmlBlocks[num];
                else // we need to check if ghBlock is a false positive
                if (codeFlag) // use encoded version of all text
                blockText = showdown.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
                else blockText = globals.ghCodeBlocks[num].codeblock;
                blockText = blockText.replace(/\$/g, "$$$$"); // Escape any dollar signs
                grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
                // Check if grafsOutIt is a pre->code
                if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) codeFlag = true;
            }
            grafsOut[i] = grafsOutIt;
        }
        text = grafsOut.join("\n");
        // Strip leading and trailing lines:
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        return globals.converter._dispatch("paragraphs.after", text, options, globals);
    });
    /**
 * Run extension
 */ showdown.subParser("runExtension", function(ext, text, options, globals) {
        "use strict";
        if (ext.filter) text = ext.filter(text, globals.converter, options);
        else if (ext.regex) {
            // TODO remove this when old extension loading mechanism is deprecated
            var re = ext.regex;
            if (!(re instanceof RegExp)) re = new RegExp(re, "g");
            text = text.replace(re, ext.replace);
        }
        return text;
    });
    /**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */ showdown.subParser("spanGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("spanGamut.before", text, options, globals);
        text = showdown.subParser("codeSpans")(text, options, globals);
        text = showdown.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
        text = showdown.subParser("encodeBackslashEscapes")(text, options, globals);
        // Process anchor and image tags. Images must come first,
        // because ![foo][f] looks like an anchor.
        text = showdown.subParser("images")(text, options, globals);
        text = showdown.subParser("anchors")(text, options, globals);
        // Make links out of things like `<http://example.com/>`
        // Must come after anchors, because you can use < and >
        // delimiters in inline links like [this](<url>).
        text = showdown.subParser("autoLinks")(text, options, globals);
        text = showdown.subParser("simplifiedAutoLinks")(text, options, globals);
        text = showdown.subParser("emoji")(text, options, globals);
        text = showdown.subParser("underline")(text, options, globals);
        text = showdown.subParser("italicsAndBold")(text, options, globals);
        text = showdown.subParser("strikethrough")(text, options, globals);
        text = showdown.subParser("ellipsis")(text, options, globals);
        // we need to hash HTML tags inside spans
        text = showdown.subParser("hashHTMLSpans")(text, options, globals);
        // now we encode amps and angles
        text = showdown.subParser("encodeAmpsAndAngles")(text, options, globals);
        // Do hard breaks
        if (options.simpleLineBreaks) // GFM style hard breaks
        // only add line breaks if the text does not contain a block (special case for lists)
        {
            if (!/\n\n¨K/.test(text)) text = text.replace(/\n+/g, "<br />\n");
        } else // Vanilla hard breaks
        text = text.replace(/  +\n/g, "<br />\n");
        text = globals.converter._dispatch("spanGamut.after", text, options, globals);
        return text;
    });
    showdown.subParser("strikethrough", function(text, options, globals) {
        "use strict";
        function parseInside(txt) {
            if (options.simplifiedAutoLink) txt = showdown.subParser("simplifiedAutoLinks")(txt, options, globals);
            return "<del>" + txt + "</del>";
        }
        if (options.strikethrough) {
            text = globals.converter._dispatch("strikethrough.before", text, options, globals);
            text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
                return parseInside(txt);
            });
            text = globals.converter._dispatch("strikethrough.after", text, options, globals);
        }
        return text;
    });
    /**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 */ showdown.subParser("stripLinkDefinitions", function(text, options, globals) {
        "use strict";
        var regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
        text += "\xa80";
        var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
            // if there aren't two instances of linkId it must not be a reference link so back out
            linkId = linkId.toLowerCase();
            if (text.toLowerCase().split(linkId).length - 1 < 2) return wholeMatch;
            if (url.match(/^data:.+?\/.+?;base64,/)) // remove newlines
            globals.gUrls[linkId] = url.replace(/\s/g, "");
            else globals.gUrls[linkId] = showdown.subParser("encodeAmpsAndAngles")(url, options, globals); // Link IDs are case-insensitive
            if (blankLines) // Oops, found blank lines, so it's not a title.
            // Put back the parenthetical statement we stole.
            return blankLines + title;
            else {
                if (title) globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
                if (options.parseImgDimensions && width && height) globals.gDimensions[linkId] = {
                    width: width,
                    height: height
                };
            }
            // Completely remove the definition from the text
            return "";
        };
        // first we try to find base64 link references
        text = text.replace(base64Regex, replaceFunc);
        text = text.replace(regex, replaceFunc);
        // attacklab: strip sentinel
        text = text.replace(/¨0/, "");
        return text;
    });
    showdown.subParser("tables", function(text, options, globals) {
        "use strict";
        if (!options.tables) return text;
        var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
        singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function parseStyles(sLine) {
            if (/^:[ \t]*--*$/.test(sLine)) return ' style="text-align:left;"';
            else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) return ' style="text-align:right;"';
            else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) return ' style="text-align:center;"';
            else return "";
        }
        function parseHeaders(header, style) {
            var id = "";
            header = header.trim();
            // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
            if (options.tablesHeaderId || options.tableHeaderId) id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
            header = showdown.subParser("spanGamut")(header, options, globals);
            return "<th" + id + style + ">" + header + "</th>\n";
        }
        function parseCells(cell, style) {
            var subText = showdown.subParser("spanGamut")(cell, options, globals);
            return "<td" + style + ">" + subText + "</td>\n";
        }
        function buildTable(headers, cells) {
            var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
            for(var i = 0; i < tblLgn; ++i)tb += headers[i];
            tb += "</tr>\n</thead>\n<tbody>\n";
            for(i = 0; i < cells.length; ++i){
                tb += "<tr>\n";
                for(var ii = 0; ii < tblLgn; ++ii)tb += cells[i][ii];
                tb += "</tr>\n";
            }
            tb += "</tbody>\n</table>\n";
            return tb;
        }
        function parseTable(rawTable) {
            var i, tableLines = rawTable.split("\n");
            for(i = 0; i < tableLines.length; ++i){
                // strip wrong first and last column if wrapped tables are used
                if (/^ {0,3}\|/.test(tableLines[i])) tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
                if (/\|[ \t]*$/.test(tableLines[i])) tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
                // parse code spans first, but we only support one line code spans
                tableLines[i] = showdown.subParser("codeSpans")(tableLines[i], options, globals);
            }
            var rawHeaders = tableLines[0].split("|").map(function(s) {
                return s.trim();
            }), rawStyles = tableLines[1].split("|").map(function(s) {
                return s.trim();
            }), rawCells = [], headers = [], styles = [], cells = [];
            tableLines.shift();
            tableLines.shift();
            for(i = 0; i < tableLines.length; ++i){
                if (tableLines[i].trim() === "") continue;
                rawCells.push(tableLines[i].split("|").map(function(s) {
                    return s.trim();
                }));
            }
            if (rawHeaders.length < rawStyles.length) return rawTable;
            for(i = 0; i < rawStyles.length; ++i)styles.push(parseStyles(rawStyles[i]));
            for(i = 0; i < rawHeaders.length; ++i){
                if (showdown.helper.isUndefined(styles[i])) styles[i] = "";
                headers.push(parseHeaders(rawHeaders[i], styles[i]));
            }
            for(i = 0; i < rawCells.length; ++i){
                var row = [];
                for(var ii = 0; ii < headers.length; ++ii){
                    showdown.helper.isUndefined(rawCells[i][ii]);
                    row.push(parseCells(rawCells[i][ii], styles[ii]));
                }
                cells.push(row);
            }
            return buildTable(headers, cells);
        }
        text = globals.converter._dispatch("tables.before", text, options, globals);
        // find escaped pipe characters
        text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
        // parse multi column tables
        text = text.replace(tableRgx, parseTable);
        // parse one column tables
        text = text.replace(singeColTblRgx, parseTable);
        text = globals.converter._dispatch("tables.after", text, options, globals);
        return text;
    });
    showdown.subParser("underline", function(text, options, globals) {
        "use strict";
        if (!options.underline) return text;
        text = globals.converter._dispatch("underline.before", text, options, globals);
        if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
                return "<u>" + txt + "</u>";
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
                return "<u>" + txt + "</u>";
            });
        } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
                return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
                return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
            });
        }
        // escape remaining underscores to prevent them being parsed by italic and bold
        text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("underline.after", text, options, globals);
        return text;
    });
    /**
 * Swap back in all the special characters we've hidden.
 */ showdown.subParser("unescapeSpecialChars", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
        text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
            var charCodeToReplace = parseInt(m1);
            return String.fromCharCode(charCodeToReplace);
        });
        text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
        return text;
    });
    showdown.subParser("makeMarkdown.blockquote", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i){
                var innerTxt = showdown.subParser("makeMarkdown.node")(children[i], globals);
                if (innerTxt === "") continue;
                txt += innerTxt;
            }
        }
        // cleanup
        txt = txt.trim();
        txt = "> " + txt.split("\n").join("\n> ");
        return txt;
    });
    showdown.subParser("makeMarkdown.codeBlock", function(node, globals) {
        "use strict";
        var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
        return "```" + lang + "\n" + globals.preList[num] + "\n```";
    });
    showdown.subParser("makeMarkdown.codeSpan", function(node) {
        "use strict";
        return "`" + node.innerHTML + "`";
    });
    showdown.subParser("makeMarkdown.emphasis", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            txt += "*";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "*";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
        "use strict";
        var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
        if (node.hasChildNodes()) {
            txt = headerMark + " ";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.hr", function() {
        "use strict";
        return "---";
    });
    showdown.subParser("makeMarkdown.image", function(node) {
        "use strict";
        var txt = "";
        if (node.hasAttribute("src")) {
            txt += "![" + node.getAttribute("alt") + "](";
            txt += "<" + node.getAttribute("src") + ">";
            if (node.hasAttribute("width") && node.hasAttribute("height")) txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
            if (node.hasAttribute("title")) txt += ' "' + node.getAttribute("title") + '"';
            txt += ")";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.links", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes() && node.hasAttribute("href")) {
            var children = node.childNodes, childrenLength = children.length;
            txt = "[";
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "](";
            txt += "<" + node.getAttribute("href") + ">";
            if (node.hasAttribute("title")) txt += ' "' + node.getAttribute("title") + '"';
            txt += ")";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.list", function(node, globals, type) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) return "";
        var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
        for(var i = 0; i < listItemsLenght; ++i){
            if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") continue;
            // define the bullet to use in list
            var bullet = "";
            if (type === "ol") bullet = listNum.toString() + ". ";
            else bullet = "- ";
            // parse list item
            txt += bullet + showdown.subParser("makeMarkdown.listItem")(listItems[i], globals);
            ++listNum;
        }
        // add comment at the end to prevent consecutive lists to be parsed as one
        txt += "\n<!-- -->\n";
        return txt.trim();
    });
    showdown.subParser("makeMarkdown.listItem", function(node, globals) {
        "use strict";
        var listItemTxt = "";
        var children = node.childNodes, childrenLenght = children.length;
        for(var i = 0; i < childrenLenght; ++i)listItemTxt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        // if it's only one liner, we need to add a newline at the end
        if (!/\n$/.test(listItemTxt)) listItemTxt += "\n";
        else // it's multiparagraph, so we need to indent
        listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
        return listItemTxt;
    });
    showdown.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
        "use strict";
        spansOnly = spansOnly || false;
        var txt = "";
        // edge case of text without wrapper paragraph
        if (node.nodeType === 3) return showdown.subParser("makeMarkdown.txt")(node, globals);
        // HTML comment
        if (node.nodeType === 8) return "<!--" + node.data + "-->\n\n";
        // process only node elements
        if (node.nodeType !== 1) return "";
        var tagName = node.tagName.toLowerCase();
        switch(tagName){
            //
            // BLOCKS
            //
            case "h1":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
                break;
            case "h2":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
                break;
            case "h3":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
                break;
            case "h4":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
                break;
            case "h5":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
                break;
            case "h6":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
                break;
            case "p":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
                break;
            case "blockquote":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
                break;
            case "hr":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
                break;
            case "ol":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
                break;
            case "ul":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
                break;
            case "precode":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
                break;
            case "pre":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
                break;
            case "table":
                if (!spansOnly) txt = showdown.subParser("makeMarkdown.table")(node, globals) + "\n\n";
                break;
            //
            // SPANS
            //
            case "code":
                txt = showdown.subParser("makeMarkdown.codeSpan")(node, globals);
                break;
            case "em":
            case "i":
                txt = showdown.subParser("makeMarkdown.emphasis")(node, globals);
                break;
            case "strong":
            case "b":
                txt = showdown.subParser("makeMarkdown.strong")(node, globals);
                break;
            case "del":
                txt = showdown.subParser("makeMarkdown.strikethrough")(node, globals);
                break;
            case "a":
                txt = showdown.subParser("makeMarkdown.links")(node, globals);
                break;
            case "img":
                txt = showdown.subParser("makeMarkdown.image")(node, globals);
                break;
            default:
                txt = node.outerHTML + "\n\n";
        }
        // common normalization
        // TODO eventually
        return txt;
    });
    showdown.subParser("makeMarkdown.paragraph", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        }
        // some text normalization
        txt = txt.trim();
        return txt;
    });
    showdown.subParser("makeMarkdown.pre", function(node, globals) {
        "use strict";
        var num = node.getAttribute("prenum");
        return "<pre>" + globals.preList[num] + "</pre>";
    });
    showdown.subParser("makeMarkdown.strikethrough", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            txt += "~~";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "~~";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.strong", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
            txt += "**";
            var children = node.childNodes, childrenLength = children.length;
            for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            txt += "**";
        }
        return txt;
    });
    showdown.subParser("makeMarkdown.table", function(node, globals) {
        "use strict";
        var txt = "", tableArray = [
            [],
            []
        ], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i, ii;
        for(i = 0; i < headings.length; ++i){
            var headContent = showdown.subParser("makeMarkdown.tableCell")(headings[i], globals), allign = "---";
            if (headings[i].hasAttribute("style")) {
                var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
                switch(style){
                    case "text-align:left;":
                        allign = ":---";
                        break;
                    case "text-align:right;":
                        allign = "---:";
                        break;
                    case "text-align:center;":
                        allign = ":---:";
                        break;
                }
            }
            tableArray[0][i] = headContent.trim();
            tableArray[1][i] = allign;
        }
        for(i = 0; i < rows.length; ++i){
            var r = tableArray.push([]) - 1, cols = rows[i].getElementsByTagName("td");
            for(ii = 0; ii < headings.length; ++ii){
                var cellContent = " ";
                if (typeof cols[ii] !== "undefined") cellContent = showdown.subParser("makeMarkdown.tableCell")(cols[ii], globals);
                tableArray[r].push(cellContent);
            }
        }
        var cellSpacesCount = 3;
        for(i = 0; i < tableArray.length; ++i)for(ii = 0; ii < tableArray[i].length; ++ii){
            var strLen = tableArray[i][ii].length;
            if (strLen > cellSpacesCount) cellSpacesCount = strLen;
        }
        for(i = 0; i < tableArray.length; ++i){
            for(ii = 0; ii < tableArray[i].length; ++ii)if (i === 1) {
                if (tableArray[i][ii].slice(-1) === ":") tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
                else tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
            } else tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
            txt += "| " + tableArray[i].join(" | ") + " |\n";
        }
        return txt.trim();
    });
    showdown.subParser("makeMarkdown.tableCell", function(node, globals) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) return "";
        var children = node.childNodes, childrenLength = children.length;
        for(var i = 0; i < childrenLength; ++i)txt += showdown.subParser("makeMarkdown.node")(children[i], globals, true);
        return txt.trim();
    });
    showdown.subParser("makeMarkdown.txt", function(node) {
        "use strict";
        var txt = node.nodeValue;
        // multiple spaces are collapsed
        txt = txt.replace(/ +/g, " ");
        // replace the custom ¨NBSP; with a space
        txt = txt.replace(/¨NBSP;/g, " ");
        // ", <, > and & should replace escaped html entities
        txt = showdown.helper.unescapeHTMLEntities(txt);
        // escape markdown magic characters
        // emphasis, strong and strikethrough - can appear everywhere
        // we also escape pipe (|) because of tables
        // and escape ` because of code blocks and spans
        txt = txt.replace(/([*_~|`])/g, "\\$1");
        // escape > because of blockquotes
        txt = txt.replace(/^(\s*)>/g, "\\$1>");
        // hash character, only troublesome at the beginning of a line because of headers
        txt = txt.replace(/^#/gm, "\\#");
        // horizontal rules
        txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
        // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer
        txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
        // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)
        txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
        // images and links, ] followed by ( is problematic, so we escape it
        txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
        // reference URIs must also be escaped
        txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
        return txt;
    });
    var root = this;
    // AMD Loader
    if (typeof define === "function" && define.amd) define(function() {
        "use strict";
        return showdown;
    });
    else if (0, module.exports) module.exports = showdown;
    else root.showdown = showdown;
}).call(this);

},{}],"04KWi":[function(require,module,exports) {
/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }
    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) _construct = Reflect.construct;
        else _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
        return _construct.apply(null, arguments);
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var hasOwnProperty = Object.hasOwnProperty, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var freeze = Object.freeze, seal = Object.seal, create = Object.create; // eslint-disable-line import/no-mutable-exports
    var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
    if (!apply) apply = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
    };
    if (!freeze) freeze = function freeze(x) {
        return x;
    };
    if (!seal) seal = function seal(x) {
        return x;
    };
    if (!construct) construct = function construct(Func, args) {
        return _construct(Func, _toConsumableArray(args));
    };
    var arrayForEach = unapply(Array.prototype.forEach);
    var arrayPop = unapply(Array.prototype.pop);
    var arrayPush = unapply(Array.prototype.push);
    var stringToLowerCase = unapply(String.prototype.toLowerCase);
    var stringToString = unapply(String.prototype.toString);
    var stringMatch = unapply(String.prototype.match);
    var stringReplace = unapply(String.prototype.replace);
    var stringIndexOf = unapply(String.prototype.indexOf);
    var stringTrim = unapply(String.prototype.trim);
    var regExpTest = unapply(RegExp.prototype.test);
    var typeErrorCreate = unconstruct(TypeError);
    function unapply(func) {
        return function(thisArg) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            return apply(func, thisArg, args);
        };
    }
    function unconstruct(func) {
        return function() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            return construct(func, args);
        };
    }
    /* Add properties to a lookup table */ function addToSet(set, array, transformCaseFunc) {
        var _transformCaseFunc;
        transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
        if (setPrototypeOf) // Make 'in' and truthy checks like Boolean(set.constructor)
        // independent of any properties defined on Object.prototype.
        // Prevent prototype setters from intercepting set as a this value.
        setPrototypeOf(set, null);
        var l = array.length;
        while(l--){
            var element = array[l];
            if (typeof element === "string") {
                var lcElement = transformCaseFunc(element);
                if (lcElement !== element) {
                    // Config presets (e.g. tags.js, attrs.js) are immutable.
                    if (!isFrozen(array)) array[l] = lcElement;
                    element = lcElement;
                }
            }
            set[element] = true;
        }
        return set;
    }
    /* Shallow clone an object */ function clone(object) {
        var newObject = create(null);
        var property;
        for(property in object)if (apply(hasOwnProperty, object, [
            property
        ]) === true) newObject[property] = object[property];
        return newObject;
    }
    /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */ function lookupGetter(object, prop) {
        while(object !== null){
            var desc = getOwnPropertyDescriptor(object, prop);
            if (desc) {
                if (desc.get) return unapply(desc.get);
                if (typeof desc.value === "function") return unapply(desc.value);
            }
            object = getPrototypeOf(object);
        }
        function fallbackValue(element) {
            console.warn("fallback value for", element);
            return null;
        }
        return fallbackValue;
    }
    var html$1 = freeze([
        "a",
        "abbr",
        "acronym",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "bdi",
        "bdo",
        "big",
        "blink",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "content",
        "data",
        "datalist",
        "dd",
        "decorator",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "element",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meter",
        "nav",
        "nobr",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "select",
        "shadow",
        "small",
        "source",
        "spacer",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr"
    ]); // SVG
    var svg$1 = freeze([
        "svg",
        "a",
        "altglyph",
        "altglyphdef",
        "altglyphitem",
        "animatecolor",
        "animatemotion",
        "animatetransform",
        "circle",
        "clippath",
        "defs",
        "desc",
        "ellipse",
        "filter",
        "font",
        "g",
        "glyph",
        "glyphref",
        "hkern",
        "image",
        "line",
        "lineargradient",
        "marker",
        "mask",
        "metadata",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialgradient",
        "rect",
        "stop",
        "style",
        "switch",
        "symbol",
        "text",
        "textpath",
        "title",
        "tref",
        "tspan",
        "view",
        "vkern"
    ]);
    var svgFilters = freeze([
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence"
    ]); // List of SVG elements that are disallowed by default.
    // We still need to know them so that we can do namespace
    // checks properly in case one wants to add them to
    // allow-list.
    var svgDisallowed = freeze([
        "animate",
        "color-profile",
        "cursor",
        "discard",
        "fedropshadow",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-src",
        "font-face-uri",
        "foreignobject",
        "hatch",
        "hatchpath",
        "mesh",
        "meshgradient",
        "meshpatch",
        "meshrow",
        "missing-glyph",
        "script",
        "set",
        "solidcolor",
        "unknown",
        "use"
    ]);
    var mathMl$1 = freeze([
        "math",
        "menclose",
        "merror",
        "mfenced",
        "mfrac",
        "mglyph",
        "mi",
        "mlabeledtr",
        "mmultiscripts",
        "mn",
        "mo",
        "mover",
        "mpadded",
        "mphantom",
        "mroot",
        "mrow",
        "ms",
        "mspace",
        "msqrt",
        "mstyle",
        "msub",
        "msup",
        "msubsup",
        "mtable",
        "mtd",
        "mtext",
        "mtr",
        "munder",
        "munderover"
    ]); // Similarly to SVG, we want to know all MathML elements,
    // even those that we disallow by default.
    var mathMlDisallowed = freeze([
        "maction",
        "maligngroup",
        "malignmark",
        "mlongdiv",
        "mscarries",
        "mscarry",
        "msgroup",
        "mstack",
        "msline",
        "msrow",
        "semantics",
        "annotation",
        "annotation-xml",
        "mprescripts",
        "none"
    ]);
    var text = freeze([
        "#text"
    ]);
    var html = freeze([
        "accept",
        "action",
        "align",
        "alt",
        "autocapitalize",
        "autocomplete",
        "autopictureinpicture",
        "autoplay",
        "background",
        "bgcolor",
        "border",
        "capture",
        "cellpadding",
        "cellspacing",
        "checked",
        "cite",
        "class",
        "clear",
        "color",
        "cols",
        "colspan",
        "controls",
        "controlslist",
        "coords",
        "crossorigin",
        "datetime",
        "decoding",
        "default",
        "dir",
        "disabled",
        "disablepictureinpicture",
        "disableremoteplayback",
        "download",
        "draggable",
        "enctype",
        "enterkeyhint",
        "face",
        "for",
        "headers",
        "height",
        "hidden",
        "high",
        "href",
        "hreflang",
        "id",
        "inputmode",
        "integrity",
        "ismap",
        "kind",
        "label",
        "lang",
        "list",
        "loading",
        "loop",
        "low",
        "max",
        "maxlength",
        "media",
        "method",
        "min",
        "minlength",
        "multiple",
        "muted",
        "name",
        "nonce",
        "noshade",
        "novalidate",
        "nowrap",
        "open",
        "optimum",
        "pattern",
        "placeholder",
        "playsinline",
        "poster",
        "preload",
        "pubdate",
        "radiogroup",
        "readonly",
        "rel",
        "required",
        "rev",
        "reversed",
        "role",
        "rows",
        "rowspan",
        "spellcheck",
        "scope",
        "selected",
        "shape",
        "size",
        "sizes",
        "span",
        "srclang",
        "start",
        "src",
        "srcset",
        "step",
        "style",
        "summary",
        "tabindex",
        "title",
        "translate",
        "type",
        "usemap",
        "valign",
        "value",
        "width",
        "xmlns",
        "slot"
    ]);
    var svg = freeze([
        "accent-height",
        "accumulate",
        "additive",
        "alignment-baseline",
        "ascent",
        "attributename",
        "attributetype",
        "azimuth",
        "basefrequency",
        "baseline-shift",
        "begin",
        "bias",
        "by",
        "class",
        "clip",
        "clippathunits",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "cx",
        "cy",
        "d",
        "dx",
        "dy",
        "diffuseconstant",
        "direction",
        "display",
        "divisor",
        "dur",
        "edgemode",
        "elevation",
        "end",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "filterunits",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyph-name",
        "glyphref",
        "gradientunits",
        "gradienttransform",
        "height",
        "href",
        "id",
        "image-rendering",
        "in",
        "in2",
        "k",
        "k1",
        "k2",
        "k3",
        "k4",
        "kerning",
        "keypoints",
        "keysplines",
        "keytimes",
        "lang",
        "lengthadjust",
        "letter-spacing",
        "kernelmatrix",
        "kernelunitlength",
        "lighting-color",
        "local",
        "marker-end",
        "marker-mid",
        "marker-start",
        "markerheight",
        "markerunits",
        "markerwidth",
        "maskcontentunits",
        "maskunits",
        "max",
        "mask",
        "media",
        "method",
        "mode",
        "min",
        "name",
        "numoctaves",
        "offset",
        "operator",
        "opacity",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "paint-order",
        "path",
        "pathlength",
        "patterncontentunits",
        "patterntransform",
        "patternunits",
        "points",
        "preservealpha",
        "preserveaspectratio",
        "primitiveunits",
        "r",
        "rx",
        "ry",
        "radius",
        "refx",
        "refy",
        "repeatcount",
        "repeatdur",
        "restart",
        "result",
        "rotate",
        "scale",
        "seed",
        "shape-rendering",
        "specularconstant",
        "specularexponent",
        "spreadmethod",
        "startoffset",
        "stddeviation",
        "stitchtiles",
        "stop-color",
        "stop-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke",
        "stroke-width",
        "style",
        "surfacescale",
        "systemlanguage",
        "tabindex",
        "targetx",
        "targety",
        "transform",
        "transform-origin",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "textlength",
        "type",
        "u1",
        "u2",
        "unicode",
        "values",
        "viewbox",
        "visibility",
        "version",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "width",
        "word-spacing",
        "wrap",
        "writing-mode",
        "xchannelselector",
        "ychannelselector",
        "x",
        "x1",
        "x2",
        "xmlns",
        "y",
        "y1",
        "y2",
        "z",
        "zoomandpan"
    ]);
    var mathMl = freeze([
        "accent",
        "accentunder",
        "align",
        "bevelled",
        "close",
        "columnsalign",
        "columnlines",
        "columnspan",
        "denomalign",
        "depth",
        "dir",
        "display",
        "displaystyle",
        "encoding",
        "fence",
        "frame",
        "height",
        "href",
        "id",
        "largeop",
        "length",
        "linethickness",
        "lspace",
        "lquote",
        "mathbackground",
        "mathcolor",
        "mathsize",
        "mathvariant",
        "maxsize",
        "minsize",
        "movablelimits",
        "notation",
        "numalign",
        "open",
        "rowalign",
        "rowlines",
        "rowspacing",
        "rowspan",
        "rspace",
        "rquote",
        "scriptlevel",
        "scriptminsize",
        "scriptsizemultiplier",
        "selection",
        "separator",
        "separators",
        "stretchy",
        "subscriptshift",
        "supscriptshift",
        "symmetric",
        "voffset",
        "width",
        "xmlns"
    ]);
    var xml = freeze([
        "xlink:href",
        "xml:id",
        "xlink:title",
        "xml:space",
        "xmlns:xlink"
    ]);
    var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
    var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
    var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
    var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
    var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
    var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
    );
    var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
    );
    var DOCTYPE_NAME = seal(/^html$/i);
    var getGlobal = function getGlobal() {
        return typeof window === "undefined" ? null : window;
    };
    /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */ var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
        if (_typeof(trustedTypes) !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
         // Allow the callers to control the unique policy name
        // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
        // Policy creation with duplicate names throws in Trusted Types.
        var suffix = null;
        var ATTR_NAME = "data-tt-policy-suffix";
        if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) suffix = document.currentScript.getAttribute(ATTR_NAME);
        var policyName = "dompurify" + (suffix ? "#" + suffix : "");
        try {
            return trustedTypes.createPolicy(policyName, {
                createHTML: function createHTML(html) {
                    return html;
                },
                createScriptURL: function createScriptURL(scriptUrl) {
                    return scriptUrl;
                }
            });
        } catch (_) {
            // Policy creation failed (most likely another DOMPurify script has
            // already run). Skip creating the policy, as this will only cause errors
            // if TT are enforced.
            console.warn("TrustedTypes policy " + policyName + " could not be created.");
            return null;
        }
    };
    function createDOMPurify() {
        var window1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
        var DOMPurify = function DOMPurify(root) {
            return createDOMPurify(root);
        };
        /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */ DOMPurify.version = "2.4.7";
        /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */ DOMPurify.removed = [];
        if (!window1 || !window1.document || window1.document.nodeType !== 9) {
            // Not running in a browser, provide a factory function
            // so that you can pass your own Window
            DOMPurify.isSupported = false;
            return DOMPurify;
        }
        var originalDocument = window1.document;
        var document = window1.document;
        var DocumentFragment = window1.DocumentFragment, HTMLTemplateElement = window1.HTMLTemplateElement, Node = window1.Node, Element = window1.Element, NodeFilter = window1.NodeFilter, _window$NamedNodeMap = window1.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window1.NamedNodeMap || window1.MozNamedAttrMap : _window$NamedNodeMap, HTMLFormElement = window1.HTMLFormElement, DOMParser = window1.DOMParser, trustedTypes = window1.trustedTypes;
        var ElementPrototype = Element.prototype;
        var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
        var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
        var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
        var getParentNode = lookupGetter(ElementPrototype, "parentNode"); // As per issue #47, the web-components registry is inherited by a
        // new document created via createHTMLDocument. As per the spec
        // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
        // a new empty registry is used when creating a template contents owner
        // document, so we use that as our parent document to ensure nothing
        // is inherited.
        if (typeof HTMLTemplateElement === "function") {
            var template = document.createElement("template");
            if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
        }
        var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
        var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML("") : "";
        var _document = document, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
        var importNode = originalDocument.importNode;
        var documentMode = {};
        try {
            documentMode = clone(document).documentMode ? document.documentMode : {};
        } catch (_) {}
        var hooks = {};
        /**
     * Expose whether this browser supports running the full DOMPurify.
     */ DOMPurify.isSupported = typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== undefined && documentMode !== 9;
        var MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
        var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
        /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */ /* allowed element names */ var ALLOWED_TAGS = null;
        var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
        /* Allowed attribute names */ var ALLOWED_ATTR = null;
        var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
        /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */ var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
            tagNameCheck: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: null
            },
            attributeNameCheck: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: false
            }
        }));
        /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */ var FORBID_TAGS = null;
        /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */ var FORBID_ATTR = null;
        /* Decide if ARIA attributes are okay */ var ALLOW_ARIA_ATTR = true;
        /* Decide if custom data attributes are okay */ var ALLOW_DATA_ATTR = true;
        /* Decide if unknown protocols are okay */ var ALLOW_UNKNOWN_PROTOCOLS = false;
        /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */ var ALLOW_SELF_CLOSE_IN_ATTR = true;
        /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */ var SAFE_FOR_TEMPLATES = false;
        /* Decide if document with <html>... should be returned */ var WHOLE_DOCUMENT = false;
        /* Track whether config is already set on this instance of DOMPurify. */ var SET_CONFIG = false;
        /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */ var FORCE_BODY = false;
        /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */ var RETURN_DOM = false;
        /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */ var RETURN_DOM_FRAGMENT = false;
        /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */ var RETURN_TRUSTED_TYPE = false;
        /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */ var SANITIZE_DOM = true;
        /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */ var SANITIZE_NAMED_PROPS = false;
        var SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
        /* Keep element content when removing element? */ var KEEP_CONTENT = true;
        /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */ var IN_PLACE = false;
        /* Allow usage of profiles like html, svg and mathMl */ var USE_PROFILES = {};
        /* Tags to ignore content of when KEEP_CONTENT is true */ var FORBID_CONTENTS = null;
        var DEFAULT_FORBID_CONTENTS = addToSet({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp"
        ]);
        /* Tags that are safe for data: URIs */ var DATA_URI_TAGS = null;
        var DEFAULT_DATA_URI_TAGS = addToSet({}, [
            "audio",
            "video",
            "img",
            "source",
            "image",
            "track"
        ]);
        /* Attributes safe for values like "javascript:" */ var URI_SAFE_ATTRIBUTES = null;
        var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "role",
            "summary",
            "title",
            "value",
            "style",
            "xmlns"
        ]);
        var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
        var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
        var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
        /* Document namespace */ var NAMESPACE = HTML_NAMESPACE;
        var IS_EMPTY_INPUT = false;
        /* Allowed XHTML+XML namespaces */ var ALLOWED_NAMESPACES = null;
        var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
            MATHML_NAMESPACE,
            SVG_NAMESPACE,
            HTML_NAMESPACE
        ], stringToString);
        /* Parsing of strict XHTML documents */ var PARSER_MEDIA_TYPE;
        var SUPPORTED_PARSER_MEDIA_TYPES = [
            "application/xhtml+xml",
            "text/html"
        ];
        var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
        var transformCaseFunc;
        /* Keep a reference to config to pass to hooks */ var CONFIG = null;
        /* Ideally, do not touch anything below this line */ /* ______________________________________________ */ var formElement = document.createElement("form");
        var isRegexOrFunction = function isRegexOrFunction(testValue) {
            return testValue instanceof RegExp || testValue instanceof Function;
        };
        /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */ // eslint-disable-next-line complexity
        var _parseConfig = function _parseConfig(cfg) {
            if (CONFIG && CONFIG === cfg) return;
            /* Shield configuration object from tampering */ if (!cfg || _typeof(cfg) !== "object") cfg = {};
            /* Shield configuration object from prototype pollution */ cfg = clone(cfg);
            PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
            transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
            /* Set configuration parameters */ ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
            ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
            ALLOWED_NAMESPACES = "ALLOWED_NAMESPACES" in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
            URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc // eslint-disable-line indent
            ) // eslint-disable-line indent
             : DEFAULT_URI_SAFE_ATTRIBUTES;
            DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc // eslint-disable-line indent
            ) // eslint-disable-line indent
             : DEFAULT_DATA_URI_TAGS;
            FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
            FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
            FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
            USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
            ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
            ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
            ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
            ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
            SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
            WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
            RETURN_DOM = cfg.RETURN_DOM || false; // Default false
            RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
            RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
            FORCE_BODY = cfg.FORCE_BODY || false; // Default false
            SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
            SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
            KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
            IN_PLACE = cfg.IN_PLACE || false; // Default false
            IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
            NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
            CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
            if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
            if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
            if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
            /* Parse profile info */ if (USE_PROFILES) {
                ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
                ALLOWED_ATTR = [];
                if (USE_PROFILES.html === true) {
                    addToSet(ALLOWED_TAGS, html$1);
                    addToSet(ALLOWED_ATTR, html);
                }
                if (USE_PROFILES.svg === true) {
                    addToSet(ALLOWED_TAGS, svg$1);
                    addToSet(ALLOWED_ATTR, svg);
                    addToSet(ALLOWED_ATTR, xml);
                }
                if (USE_PROFILES.svgFilters === true) {
                    addToSet(ALLOWED_TAGS, svgFilters);
                    addToSet(ALLOWED_ATTR, svg);
                    addToSet(ALLOWED_ATTR, xml);
                }
                if (USE_PROFILES.mathMl === true) {
                    addToSet(ALLOWED_TAGS, mathMl$1);
                    addToSet(ALLOWED_ATTR, mathMl);
                    addToSet(ALLOWED_ATTR, xml);
                }
            }
            /* Merge configuration parameters */ if (cfg.ADD_TAGS) {
                if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
                addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
            }
            if (cfg.ADD_ATTR) {
                if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
                addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
            }
            if (cfg.ADD_URI_SAFE_ATTR) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
            if (cfg.FORBID_CONTENTS) {
                if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
                addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
            }
            /* Add #text in case KEEP_CONTENT is set to true */ if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
            /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */ if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
                "html",
                "head",
                "body"
            ]);
            /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */ if (ALLOWED_TAGS.table) {
                addToSet(ALLOWED_TAGS, [
                    "tbody"
                ]);
                delete FORBID_TAGS.tbody;
            } // Prevent further manipulation of configuration.
            // Not available in IE8, Safari 5, etc.
            if (freeze) freeze(cfg);
            CONFIG = cfg;
        };
        var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
            "mi",
            "mo",
            "mn",
            "ms",
            "mtext"
        ]);
        var HTML_INTEGRATION_POINTS = addToSet({}, [
            "foreignobject",
            "desc",
            "title",
            "annotation-xml"
        ]); // Certain elements are allowed in both SVG and HTML
        // namespace. We need to specify them explicitly
        // so that they don't get erroneously deleted from
        // HTML namespace.
        var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
            "title",
            "style",
            "font",
            "a",
            "script"
        ]);
        /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */ var ALL_SVG_TAGS = addToSet({}, svg$1);
        addToSet(ALL_SVG_TAGS, svgFilters);
        addToSet(ALL_SVG_TAGS, svgDisallowed);
        var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
        addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
        /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */ var _checkValidNamespace = function _checkValidNamespace(element) {
            var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
            // can be null. We just simulate parent in this case.
            if (!parent || !parent.tagName) parent = {
                namespaceURI: NAMESPACE,
                tagName: "template"
            };
            var tagName = stringToLowerCase(element.tagName);
            var parentTagName = stringToLowerCase(parent.tagName);
            if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
            if (element.namespaceURI === SVG_NAMESPACE) {
                // The only way to switch from HTML namespace to SVG
                // is via <svg>. If it happens via any other tag, then
                // it should be killed.
                if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
                 // The only way to switch from MathML to SVG is via`
                // svg if parent is either <annotation-xml> or MathML
                // text integration points.
                if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
                 // We only allow elements that are defined in SVG
                // spec. All others are disallowed in SVG namespace.
                return Boolean(ALL_SVG_TAGS[tagName]);
            }
            if (element.namespaceURI === MATHML_NAMESPACE) {
                // The only way to switch from HTML namespace to MathML
                // is via <math>. If it happens via any other tag, then
                // it should be killed.
                if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
                 // The only way to switch from SVG to MathML is via
                // <math> and HTML integration points
                if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
                 // We only allow elements that are defined in MathML
                // spec. All others are disallowed in MathML namespace.
                return Boolean(ALL_MATHML_TAGS[tagName]);
            }
            if (element.namespaceURI === HTML_NAMESPACE) {
                // The only way to switch from SVG to HTML is via
                // HTML integration points, and from MathML to HTML
                // is via MathML text integration points
                if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
                if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
                 // We disallow tags that are specific for MathML
                // or SVG and should never appear in HTML namespace
                return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
            } // For XHTML and XML documents that support custom namespaces
            if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
             // The code should never reach this place (this means
            // that the element somehow got namespace that is not
            // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
            // Return false just in case.
            return false;
        };
        /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */ var _forceRemove = function _forceRemove(node) {
            arrayPush(DOMPurify.removed, {
                element: node
            });
            try {
                // eslint-disable-next-line unicorn/prefer-dom-node-remove
                node.parentNode.removeChild(node);
            } catch (_) {
                try {
                    node.outerHTML = emptyHTML;
                } catch (_) {
                    node.remove();
                }
            }
        };
        /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */ var _removeAttribute = function _removeAttribute(name, node) {
            try {
                arrayPush(DOMPurify.removed, {
                    attribute: node.getAttributeNode(name),
                    from: node
                });
            } catch (_) {
                arrayPush(DOMPurify.removed, {
                    attribute: null,
                    from: node
                });
            }
            node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes
            if (name === "is" && !ALLOWED_ATTR[name]) {
                if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
                    _forceRemove(node);
                } catch (_) {}
                else try {
                    node.setAttribute(name, "");
                } catch (_) {}
            }
        };
        /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */ var _initDocument = function _initDocument(dirty) {
            /* Create a HTML document */ var doc;
            var leadingWhitespace;
            if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
            else {
                /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */ var matches = stringMatch(dirty, /^[\r\n\t ]+/);
                leadingWhitespace = matches && matches[0];
            }
            if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
            var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
            /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */ if (NAMESPACE === HTML_NAMESPACE) try {
                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
            } catch (_) {}
            /* Use createHTMLDocument in case DOMParser is not available */ if (!doc || !doc.documentElement) {
                doc = implementation.createDocument(NAMESPACE, "template", null);
                try {
                    doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
                } catch (_) {}
            }
            var body = doc.body || doc.documentElement;
            if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
            /* Work on whole document or just its body */ if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
            return WHOLE_DOCUMENT ? doc.documentElement : body;
        };
        /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */ var _createIterator = function _createIterator(root) {
            return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
        };
        /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */ var _isClobbered = function _isClobbered(elm) {
            return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
        };
        /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */ var _isNode = function _isNode(object) {
            return _typeof(Node) === "object" ? object instanceof Node : object && _typeof(object) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
        };
        /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */ var _executeHook = function _executeHook(entryPoint, currentNode, data) {
            if (!hooks[entryPoint]) return;
            arrayForEach(hooks[entryPoint], function(hook) {
                hook.call(DOMPurify, currentNode, data, CONFIG);
            });
        };
        /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */ var _sanitizeElements = function _sanitizeElements(currentNode) {
            var content;
            /* Execute a hook if present */ _executeHook("beforeSanitizeElements", currentNode, null);
            /* Check if element is clobbered or can clobber */ if (_isClobbered(currentNode)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Check if tagname contains Unicode */ if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Now let's check the element's type and name */ var tagName = transformCaseFunc(currentNode.nodeName);
            /* Execute a hook if present */ _executeHook("uponSanitizeElement", currentNode, {
                tagName: tagName,
                allowedTags: ALLOWED_TAGS
            });
            /* Detect mXSS attempts abusing namespace confusion */ if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Mitigate a problem with templates inside select */ if (tagName === "select" && regExpTest(/<template/i, currentNode.innerHTML)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Remove element if anything forbids its presence */ if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                /* Check if we have a custom element to handle */ if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
                    if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
                    if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
                }
                /* Keep content except for bad-listed elements */ if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                    var parentNode = getParentNode(currentNode) || currentNode.parentNode;
                    var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                    if (childNodes && parentNode) {
                        var childCount = childNodes.length;
                        for(var i = childCount - 1; i >= 0; --i)parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
                    }
                }
                _forceRemove(currentNode);
                return true;
            }
            /* Check whether element has a valid namespace */ if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Make sure that older browsers don't get fallback-tag mXSS */ if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Sanitize element content to be template-safe */ if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
                /* Get the element's text content */ content = currentNode.textContent;
                content = stringReplace(content, MUSTACHE_EXPR$1, " ");
                content = stringReplace(content, ERB_EXPR$1, " ");
                content = stringReplace(content, TMPLIT_EXPR$1, " ");
                if (currentNode.textContent !== content) {
                    arrayPush(DOMPurify.removed, {
                        element: currentNode.cloneNode()
                    });
                    currentNode.textContent = content;
                }
            }
            /* Execute a hook if present */ _executeHook("afterSanitizeElements", currentNode, null);
            return false;
        };
        /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */ // eslint-disable-next-line complexity
        var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
            /* Make sure attribute cannot clobber */ if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
            /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */ if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ;
            else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ;
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                if (// b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
                _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
                // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;
                else return false;
            /* Check value is safe. First, is attr inert? If so, is safe */ } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
            else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
            else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
            else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
            else if (value) return false;
            return true;
        };
        /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */ var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
            return tagName.indexOf("-") > 0;
        };
        /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */ var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
            var attr;
            var value;
            var lcName;
            var l;
            /* Execute a hook if present */ _executeHook("beforeSanitizeAttributes", currentNode, null);
            var attributes = currentNode.attributes;
            /* Check if we have attributes; if not we might have a text node */ if (!attributes) return;
            var hookEvent = {
                attrName: "",
                attrValue: "",
                keepAttr: true,
                allowedAttributes: ALLOWED_ATTR
            };
            l = attributes.length;
            /* Go backwards over all attributes; safely remove bad ones */ while(l--){
                attr = attributes[l];
                var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
                value = name === "value" ? attr.value : stringTrim(attr.value);
                lcName = transformCaseFunc(name);
                /* Execute a hook if present */ hookEvent.attrName = lcName;
                hookEvent.attrValue = value;
                hookEvent.keepAttr = true;
                hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
                _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
                value = hookEvent.attrValue;
                /* Did the hooks approve of the attribute? */ if (hookEvent.forceKeepAttr) continue;
                /* Remove attribute */ _removeAttribute(name, currentNode);
                /* Did the hooks approve of the attribute? */ if (!hookEvent.keepAttr) continue;
                /* Work around a security issue in jQuery 3.0 */ if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
                    _removeAttribute(name, currentNode);
                    continue;
                }
                /* Sanitize attribute content to be template-safe */ if (SAFE_FOR_TEMPLATES) {
                    value = stringReplace(value, MUSTACHE_EXPR$1, " ");
                    value = stringReplace(value, ERB_EXPR$1, " ");
                    value = stringReplace(value, TMPLIT_EXPR$1, " ");
                }
                /* Is `value` valid for this attribute? */ var lcTag = transformCaseFunc(currentNode.nodeName);
                if (!_isValidAttribute(lcTag, lcName, value)) continue;
                /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */ if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
                    // Remove the attribute with this value
                    _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value
                    value = SANITIZE_NAMED_PROPS_PREFIX + value;
                }
                /* Handle attributes that require Trusted Types */ if (trustedTypesPolicy && _typeof(trustedTypes) === "object" && typeof trustedTypes.getAttributeType === "function") {
                    if (namespaceURI) ;
                    else switch(trustedTypes.getAttributeType(lcTag, lcName)){
                        case "TrustedHTML":
                            value = trustedTypesPolicy.createHTML(value);
                            break;
                        case "TrustedScriptURL":
                            value = trustedTypesPolicy.createScriptURL(value);
                            break;
                    }
                }
                /* Handle invalid data-* attribute set by try-catching it */ try {
                    if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
                    else /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */ currentNode.setAttribute(name, value);
                    arrayPop(DOMPurify.removed);
                } catch (_) {}
            }
            /* Execute a hook if present */ _executeHook("afterSanitizeAttributes", currentNode, null);
        };
        /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */ var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
            var shadowNode;
            var shadowIterator = _createIterator(fragment);
            /* Execute a hook if present */ _executeHook("beforeSanitizeShadowDOM", fragment, null);
            while(shadowNode = shadowIterator.nextNode()){
                /* Execute a hook if present */ _executeHook("uponSanitizeShadowNode", shadowNode, null);
                /* Sanitize tags and elements */ if (_sanitizeElements(shadowNode)) continue;
                /* Deep shadow DOM detected */ if (shadowNode.content instanceof DocumentFragment) _sanitizeShadowDOM(shadowNode.content);
                /* Check attributes, sanitize if necessary */ _sanitizeAttributes(shadowNode);
            }
            /* Execute a hook if present */ _executeHook("afterSanitizeShadowDOM", fragment, null);
        };
        /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */ // eslint-disable-next-line complexity
        DOMPurify.sanitize = function(dirty) {
            var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var body;
            var importedNode;
            var currentNode;
            var oldNode;
            var returnNode;
            /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */ IS_EMPTY_INPUT = !dirty;
            if (IS_EMPTY_INPUT) dirty = "<!-->";
            /* Stringify, in case dirty is an object */ if (typeof dirty !== "string" && !_isNode(dirty)) {
                if (typeof dirty.toString === "function") {
                    dirty = dirty.toString();
                    if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
                } else throw typeErrorCreate("toString is not a function");
            }
            /* Check we can run. Otherwise fall back or ignore */ if (!DOMPurify.isSupported) {
                if (_typeof(window1.toStaticHTML) === "object" || typeof window1.toStaticHTML === "function") {
                    if (typeof dirty === "string") return window1.toStaticHTML(dirty);
                    if (_isNode(dirty)) return window1.toStaticHTML(dirty.outerHTML);
                }
                return dirty;
            }
            /* Assign config vars */ if (!SET_CONFIG) _parseConfig(cfg);
            /* Clean up removed elements */ DOMPurify.removed = [];
            /* Check if dirty is correctly typed for IN_PLACE */ if (typeof dirty === "string") IN_PLACE = false;
            if (IN_PLACE) /* Do some early pre-sanitization to avoid unsafe root nodes */ {
                if (dirty.nodeName) {
                    var tagName = transformCaseFunc(dirty.nodeName);
                    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
                }
            } else if (dirty instanceof Node) {
                /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */ body = _initDocument("<!---->");
                importedNode = body.ownerDocument.importNode(dirty, true);
                if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") /* Node is already a body, use as is */ body = importedNode;
                else if (importedNode.nodeName === "HTML") body = importedNode;
                else // eslint-disable-next-line unicorn/prefer-dom-node-append
                body.appendChild(importedNode);
            } else {
                /* Exit directly if we have nothing to do */ if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
                dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
                /* Initialize the document to work on */ body = _initDocument(dirty);
                /* Check we have a DOM node from the data */ if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
            }
            /* Remove first element node (ours) if FORCE_BODY is set */ if (body && FORCE_BODY) _forceRemove(body.firstChild);
            /* Get node iterator */ var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
            /* Now start iterating over the created document */ while(currentNode = nodeIterator.nextNode()){
                /* Fix IE's strange behavior with manipulated textNodes #89 */ if (currentNode.nodeType === 3 && currentNode === oldNode) continue;
                /* Sanitize tags and elements */ if (_sanitizeElements(currentNode)) continue;
                /* Shadow DOM detected, sanitize it */ if (currentNode.content instanceof DocumentFragment) _sanitizeShadowDOM(currentNode.content);
                /* Check attributes, sanitize if necessary */ _sanitizeAttributes(currentNode);
                oldNode = currentNode;
            }
            oldNode = null;
            /* If we sanitized `dirty` in-place, return it. */ if (IN_PLACE) return dirty;
            /* Return sanitized string or DOM */ if (RETURN_DOM) {
                if (RETURN_DOM_FRAGMENT) {
                    returnNode = createDocumentFragment.call(body.ownerDocument);
                    while(body.firstChild)// eslint-disable-next-line unicorn/prefer-dom-node-append
                    returnNode.appendChild(body.firstChild);
                } else returnNode = body;
                if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */ returnNode = importNode.call(originalDocument, returnNode, true);
                return returnNode;
            }
            var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
            /* Serialize doctype if allowed */ if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
            /* Sanitize final string template-safe */ if (SAFE_FOR_TEMPLATES) {
                serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, " ");
                serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, " ");
                serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, " ");
            }
            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
        };
        /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */ DOMPurify.setConfig = function(cfg) {
            _parseConfig(cfg);
            SET_CONFIG = true;
        };
        /**
     * Public method to remove the configuration
     * clearConfig
     *
     */ DOMPurify.clearConfig = function() {
            CONFIG = null;
            SET_CONFIG = false;
        };
        /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */ DOMPurify.isValidAttribute = function(tag, attr, value) {
            /* Initialize shared config vars if necessary. */ if (!CONFIG) _parseConfig({});
            var lcTag = transformCaseFunc(tag);
            var lcName = transformCaseFunc(attr);
            return _isValidAttribute(lcTag, lcName, value);
        };
        /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */ DOMPurify.addHook = function(entryPoint, hookFunction) {
            if (typeof hookFunction !== "function") return;
            hooks[entryPoint] = hooks[entryPoint] || [];
            arrayPush(hooks[entryPoint], hookFunction);
        };
        /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */ DOMPurify.removeHook = function(entryPoint) {
            if (hooks[entryPoint]) return arrayPop(hooks[entryPoint]);
        };
        /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */ DOMPurify.removeHooks = function(entryPoint) {
            if (hooks[entryPoint]) hooks[entryPoint] = [];
        };
        /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */ DOMPurify.removeAllHooks = function() {
            hooks = {};
        };
        return DOMPurify;
    }
    var purify = createDOMPurify();
    return purify;
});

},{}],"c9ypK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeStylesIterable", ()=>makeStylesIterable);
parcelHelpers.export(exports, "makeIconMarkup", ()=>makeIconMarkup);
function makeStylesIterable(styles) {
    for (const [key, value] of Object.entries(styles)){
        let arr;
        let str = value;
        if (typeof str !== "string" && !Array.isArray(str)) throw new Error("Invalid style value");
        if (Array.isArray(value)) arr = value.join(" ").split(" ");
        styles[key] = arr ? arr : str.split(" ");
    }
    return styles;
}
const makeIconMarkup = {
    /**
   * Generate a FA chevron.
   * @param direction Type of chevron.
   * @param extraClasses Classes to add on the icon.
   * @returns
   */ chev: (direction, extraClasses = "")=>{
        return `<i aria-hidden="true" class="${extraClasses} fa-solid fa-chevron-${direction}"></i>`;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"u0uJw"}],"u0uJw":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"k7yfc":[function(require,module,exports) {
/**
 * Returns all siblings after an element until a specified type of element.
 * @param start Start the scan at this element.
 * @param stopAtNext Stop when element with tagname is found.
 * @returns
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextSiblingUntil", ()=>nextSiblingUntil);
const nextSiblingUntil = (start, stopAtNext)=>{
    const results = [];
    let el = start.nextElementSibling;
    results.push(el);
    while(el && el.tagName.toLowerCase() !== stopAtNext.toLowerCase()){
        el = el.nextElementSibling;
        results.push(el);
    }
    results.pop();
    return results;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"u0uJw"}],"hwr26":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class representing a navigation element
 */ parcelHelpers.export(exports, "Nav", ()=>Nav);
var _observer = require("./helper/observer");
var _styles = require("./helper/styles");
var _navItem = require("./NavItem");
class Nav {
    constructor(root, router){
        /**
     * Calls its router for navigation to the requested resource.
     * @param event DOM click event
     */ this.handleNavigation = (event)=>{
            event.preventDefault();
            const el = event.target;
            const oldRoute = this.router.currentRoute;
            if (el.tagName !== "A") return;
            //Find the NavItem targeted by the event
            const item = this.content.find((item)=>item.link === event.target);
            // If secondary, add name as hash
            const anchor = item.isMain ? null : "#" + item.name;
            const newRoute = this.router.navigate(item.path + (anchor ? anchor : ""));
            if (newRoute instanceof Error) {
                console.log(newRoute.message);
                return;
            }
            const routeChanged = newRoute !== oldRoute;
            this.toggleIsExpanded();
            this.syncActivePage(routeChanged);
        };
        /**
     *
     * @param item `NavItem` targeted
     * @param remove `Remove the styles?`
     * @returns
     */ this.syncStyles = (item, remove = false)=>{
            const { pageActive, pageActiveLink, pageActiveLinkMain } = this.styles;
            const action = remove ? "remove" : "add";
            const linkClasses = item.isMain ? pageActiveLinkMain : pageActiveLink;
            item.el.classList[action](...pageActive);
            item.link.classList[action](...linkClasses);
            if (!item.isMain) return;
            const scrollTopSpan = item.link.querySelector("span");
            remove && scrollTopSpan ? scrollTopSpan.remove() : item.link.insertAdjacentHTML("beforeend", '<span class="pointer-events-none"><i aria-hidden="true" class="ml-2 fa-solid fa-arrow-up"></i></span>');
        };
        this.watchSectionVisibility = (item)=>(entries)=>{
                const [{ isIntersecting }] = entries;
                const visibleStyles = [
                    "!text-brand",
                    "bg-light",
                    "scale-x-[0.97]",
                    "!border-brand"
                ];
                if (isIntersecting) {
                    //Clear other simblimb items
                    item.link.classList.add(...visibleStyles);
                    return;
                }
                item.link.classList.remove(...visibleStyles);
            };
        this.root = root;
        this.router = router;
        this.isExpanded = false;
    }
    /**
     * Executes initial configuration.
     * @param config Navigation configuration object
     */ init({ title, styles }) {
        if (styles) this.styles = (0, _styles.makeStylesIterable)(styles);
        this.makeTitle(title);
        this.nav = document.createElement("nav");
        this.toggle = document.getElementById(this.root.id + "-toggle");
        if (!this.toggle) throw new Error("No navigation toggle button provided!");
        this.root.addEventListener("pointerenter", (e)=>this.root.focus());
        this.toggle.addEventListener("click", ()=>this.toggleIsExpanded());
        this.root.insertBefore(this.nav, null);
    }
    toggleIsExpanded() {
        if (window.innerWidth > 767) return;
        const expanded = [
            "!translate-x-[0]",
            "shadow-lg",
            "border-brand",
            "bg-white",
            "border-2"
        ];
        const chevElem = this.toggle.querySelector("svg");
        const changeState = (action)=>{
            const open = action === "open";
            const method = open ? "add" : "remove";
            this.root.classList[method](...expanded);
            chevElem.remove();
            const chevLeft = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>';
            const chevright = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>';
            const chev = open ? chevright : chevLeft;
            this.toggle.insertAdjacentHTML(open ? "beforeend" : "afterbegin", chev);
            this.isExpanded = !this.isExpanded;
            return open ? true : false;
        };
        const newState = this.isExpanded ? changeState("close") : changeState("open");
        this.isExpanded = newState;
        console.log(this.isExpanded);
    }
    createTitleElement(title) {
        const h2 = document.createElement("h2");
        const text = document.createTextNode(title);
        h2.appendChild(text);
        this.styleElem(h2, this.styles.title);
        return h2;
    }
    makeTitle(title) {
        this.root.insertBefore(this.createTitleElement(title), this.root.querySelector(".loader"));
    }
    styleElem(elem, styles) {
        elem.classList.add(...styles);
    }
    formatText(str) {
        return (str[0].toUpperCase() + str.substring(1)).replaceAll("-", " ");
    }
    createListItemFor(heading, route) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const text = document.createTextNode(this.formatText(heading.innerText));
        a.appendChild(text);
        li.appendChild(a);
        const item = new (0, _navItem.NavItem)(li, heading, this.router);
        return item;
    }
    generateListContent(routes) {
        const items = [];
        const headings = this.getAllHeadings(routes);
        headings.forEach((heading, index)=>{
            const main = this.createListItemFor(heading.main, routes[index]);
            const subs = [];
            let path = this.router.basePath + `/${heading.main.id}#`;
            main.setPath(path);
            this.styleElem(main.link, this.styles.listMainLink);
            if (!routes[index]?.navOptions?.ignoreSections) heading.sub.forEach((sub)=>{
                const subItem = this.createListItemFor(sub, routes[index]);
                let subPath = path + `${sub.id}`;
                subItem.setPath(subPath);
                this.styleElem(subItem.link, this.styles.listSecondaryLink);
                this.styleElem(subItem.el, this.styles.listItem);
                subs.push(subItem);
            });
            items.push(main);
            items.push(...subs);
        });
        return items;
    }
    getAllHeadings(routes) {
        return routes.map(({ content })=>{
            const tree = {
                main: content.querySelector("h2"),
                sub: content.querySelectorAll("h3")
            };
            return tree;
        });
    }
    /**
     * Syncs navbar with its router's state.
     * @param routeChanged Has the route changed since the last sync?
     */ syncActivePage(routeChanged = false) {
        // If the route is not different or the item is main, no need to call observer helpers.
        const observerIsOutofSync = ({ isMain })=>routeChanged && !isMain;
        // Get elements that are part of this route.
        const onThisPage = this.content.filter((item)=>item.path === this.router.current.path);
        // If had previously displayed items, remove the "ActivePage" styles.
        if (this.lastDisplayedItems) this.lastDisplayedItems.forEach((prevItem)=>{
            this.syncStyles(prevItem, true);
        });
        onThisPage.forEach((newItem)=>{
            this.syncStyles(newItem);
            if (observerIsOutofSync(newItem)) // Observe section container
            newItem.observeSectionContainer(this.watchSectionVisibility(newItem), {
                root: null,
                rootMargin: "-35% 0px -60% 0px"
            });
        });
        this.lastDisplayedItems = onThisPage;
    }
    hydrateNav(routes) {
        const ul = document.createElement("ul");
        const ulContent = this.generateListContent(routes);
        this.content = ulContent;
        ul.addEventListener("click", (e)=>this.handleNavigation(e));
        ulContent.forEach((li)=>{
            ul.appendChild(li.el);
        });
        this.styleElem(ul, this.styles.list);
        const navCallback = (entries)=>{
            const [{ target, isIntersecting }] = entries;
            // Can be improved
            const classes = [
                "!overflow-y-scroll",
                "!overflow-x-hidden",
                "md:max-h-[calc(100vh-var(--sticky-md-t-offset))]",
                "lg:max-h-[calc(100vh-var(--sticky-lg-t-offset))]",
                "xl:max-h-[calc(100vh-var(--sticky-xl-t-offset))]"
            ];
            if (!isIntersecting) {
                target.classList.add(...classes);
                return;
            }
            target.classList.remove(...classes);
        };
        (0, _observer.createIntersectionObserver)(this.root, navCallback, {
            root: null,
            threshold: 1,
            rootMargin: "0px 0px -10px 0px"
        });
        this.nav.appendChild(ul);
    }
    hydrate(routes) {
        this.hydrateNav(routes);
        this.syncActivePage(true);
    }
}

},{"./helper/observer":"77Gmu","./helper/styles":"c9ypK","./NavItem":"74Asd","@parcel/transformer-js/src/esmodule-helpers.js":"u0uJw"}],"77Gmu":[function(require,module,exports) {
/**
 * `IntersectionObserver` options.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createIntersectionObserver", ()=>createIntersectionObserver);
function createIntersectionObserver(elems, callback, options = {}) {
    let observer = new IntersectionObserver(callback, options);
    Array.isArray(elems) ? elems.forEach((elem)=>observer.observe(elem)) : observer.observe(elems);
    return observer;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"u0uJw"}],"74Asd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *  Class representing an item in a `Nav` instance
 */ parcelHelpers.export(exports, "NavItem", ()=>NavItem);
var _observer = require("./helper/observer");
class NavItem {
    constructor(el, heading, router){
        this.router = router;
        this.name = heading.id;
        this.el = el;
        this.link = el.querySelector("a");
        this.heading = heading;
        this.isMain = heading.tagName === "H2";
        this.sectionContainerID = `${this.heading.id}-container`;
    }
    /**
     * Sets all path related properties.
     * @param path Path to associate.
     */ setPath(path) {
        this.path = path.substring(this.router.basePath.length, path.indexOf("#"));
        this.link.href = path;
        this.link.setAttribute("data-path", path);
    }
    /**
     * Start observing this instance's section's container.
     *
     * **Behavior**
     * ```
     * if doesnt have observer instance
     *  Create observer and assign it to the instance
     * else
     *  Disconnect and call observe w/updated reference
     * ```
     *
     * If the instance doesn't have an observer, create one and assign it to the instance.
     *
     * Else, update target refs on the current one.
     *
     *
     * @param observerCallback Callback for the observer.
     * @returns The section container.
     */ observeSectionContainer(observerCallback, options = {}) {
        if (!this.sectionContainerID) throw new Error("Content not in a section!");
        const target = document.getElementById(this.sectionContainerID);
        if (!target) return;
        const updateObserverRefs = ()=>{
            this.observer.disconnect();
            this.observer.observe(target);
        };
        if (!this.observer) this.observer = (0, _observer.createIntersectionObserver)(target, observerCallback, options);
        else updateObserverRefs();
    }
}

},{"./helper/observer":"77Gmu","@parcel/transformer-js/src/esmodule-helpers.js":"u0uJw"}],"6mYsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "md", ()=>md);
parcelHelpers.export(exports, "nav", ()=>nav);
const md = {
    div: "mx-[-2rem] xl:mx-[-4rem] px-8 xl:px-16 pt-8 mt-8 bg-white border-t-2 border-light scroll-mt-[calc(80px+120px)]",
    hr: "border-light",
    h2: [
        "text-5xl text-brand leading-[4.5rem]",
        "font-bold mb-16 pb-4 pt-8 my-4",
        "md:-mx-8 md:px-8 xl:-mx-16 xl:px-16",
        "bg-white/80 backdrop-blur-md z-20",
        // "bg-white/80 backdrop-blur-md xl:sticky xl:top-[80px] z-20",
        "border-b-2 border-light"
    ],
    h3: [
        "text-3xl text-black/100 font-bold bg-white/100",
        "md:-mx-8 md:px-8 xl:-mx-16 xl:px-16 py-2 mb-2",
        "scroll-mt-[120px] md:scroll-mt-[170px] xl:scroll-mt-[calc(201px+2rem)] z-10"
    ],
    h4: [
        "text-2xl font-bold text-black/80 py-4 border-light",
        "scroll-mt-[140px] md:scroll-mt-[180px] xl:scroll-mt-[calc(201px+4rem)]"
    ],
    h5: [
        "text-xl text-brand py-4",
        "scroll-mt-[calc(var(--header-height)+50px)]"
    ],
    p: "my-2 text-black/80",
    li: "py-2 border-b-[1px] border-white px-4",
    ul: "list-none list-inside border-l-brand bg-light2 border-l-4 shadow my-2 rounded-r-lg",
    ol: "list-decimal list-inside border-l-brand bg-light2 border-l-4 shadow my-2 rounded-r-lg",
    table: "w-full border-l-brand bg-light2 border-l-4 shadow my-2 rounded-r-lg",
    th: "font-bold px-4 py-2 border-b-brand border-b-2 text-left",
    td: "px-4 py-2 border-white border-b-2 border-l-2",
    a: "hover:underline font-bold text-brand",
    img: "my-8 shadow-lg rounded-lg",
    blockquote: "text-black/100 py-2 px-4 my-4 block text-xl border-l-2 rounded-tr-lg rounded-br-lg border-brand bg-darker dark:bg-dark-lighter shadow-inner",
    code: "px-[4px] py-[2px] text-pop bg-light rounded-md"
};
const nav = {
    title: "text-brand text-xl py-4",
    list: "list-inside flex flex-col pl-2 pb-4",
    listItem: "opacity-80",
    listMainLink: [
        "py-2 transition rounded-r-lg text-xl border-l-4 pl-2 border-light/10 pr-4 dark:!text-brand-LS block !no-underline"
    ],
    listSecondaryLink: [
        "py-2 rounded-r-lg duration-300 transition border-l-4 pl-2 pr-4 border-light border- block !no-underline"
    ],
    pageActive: "opacity-100",
    pageActiveLink: "border-light/100",
    pageActiveLinkMain: [
        "!font-bold !border-pop !text-brand !bg-light flex justify-between items-center"
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"u0uJw"}]},["4M2N4"], "4M2N4", "parcelRequire4309")

//# sourceMappingURL=handbook.51a930cc.js.map
