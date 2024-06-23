(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/htmx.org/dist/htmx.min.js
  var require_htmx_min = __commonJS({
    "node_modules/htmx.org/dist/htmx.min.js"(exports, module) {
      (function(e9, t5) {
        if (typeof define === "function" && define.amd) {
          define([], t5);
        } else if (typeof module === "object" && module.exports) {
          module.exports = t5();
        } else {
          e9.htmx = e9.htmx || t5();
        }
      })(typeof self !== "undefined" ? self : exports, function() {
        return function() {
          "use strict";
          var Q = { onLoad: F, process: zt, on: de, off: ge, trigger: ce, ajax: Nr, find: C, findAll: f, closest: v, values: function(e9, t5) {
            var r5 = dr(e9, t5 || "post");
            return r5.values;
          }, remove: _, addClass: z, removeClass: n, toggleClass: $, takeClass: W, defineExtension: Ur, removeExtension: Br, logAll: V, logNone: j, logger: null, config: { historyEnabled: true, historyCacheSize: 10, refreshOnHistoryMiss: false, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: true, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: true, allowScriptTags: true, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: false, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: false, scrollBehavior: "smooth", defaultFocusScroll: false, getCacheBusterParam: false, globalViewTransitions: false, methodsThatUseUrlParams: ["get"], selfRequestsOnly: false, ignoreTitle: false, scrollIntoViewOnBoost: true, triggerSpecsCache: null }, parseInterval: d, _: t, createEventSource: function(e9) {
            return new EventSource(e9, { withCredentials: true });
          }, createWebSocket: function(e9) {
            var t5 = new WebSocket(e9, []);
            t5.binaryType = Q.config.wsBinaryType;
            return t5;
          }, version: "1.9.12" };
          var r = { addTriggerHandler: Lt, bodyContains: se, canAccessLocalStorage: U, findThisElement: xe, filterValues: yr, hasAttribute: o, getAttributeValue: te, getClosestAttributeValue: ne, getClosestMatch: c, getExpressionVars: Hr, getHeaders: xr, getInputValues: dr, getInternalData: ae, getSwapSpecification: wr, getTriggerSpecs: it, getTarget: ye, makeFragment: l, mergeObjects: le, makeSettleInfo: T, oobSwap: Ee, querySelectorExt: ue, selectAndSwap: je, settleImmediately: nr, shouldCancel: ut, triggerEvent: ce, triggerErrorEvent: fe, withExtensions: R };
          var w = ["get", "post", "put", "delete", "patch"];
          var i = w.map(function(e9) {
            return "[hx-" + e9 + "], [data-hx-" + e9 + "]";
          }).join(", ");
          var S = e("head"), q = e("title"), H = e("svg", true);
          function e(e9, t5) {
            return new RegExp("<" + e9 + "(\\s[^>]*>|>)([\\s\\S]*?)<\\/" + e9 + ">", !!t5 ? "gim" : "im");
          }
          function d(e9) {
            if (e9 == void 0) {
              return void 0;
            }
            let t5 = NaN;
            if (e9.slice(-2) == "ms") {
              t5 = parseFloat(e9.slice(0, -2));
            } else if (e9.slice(-1) == "s") {
              t5 = parseFloat(e9.slice(0, -1)) * 1e3;
            } else if (e9.slice(-1) == "m") {
              t5 = parseFloat(e9.slice(0, -1)) * 1e3 * 60;
            } else {
              t5 = parseFloat(e9);
            }
            return isNaN(t5) ? void 0 : t5;
          }
          function ee(e9, t5) {
            return e9.getAttribute && e9.getAttribute(t5);
          }
          function o(e9, t5) {
            return e9.hasAttribute && (e9.hasAttribute(t5) || e9.hasAttribute("data-" + t5));
          }
          function te(e9, t5) {
            return ee(e9, t5) || ee(e9, "data-" + t5);
          }
          function u(e9) {
            return e9.parentElement;
          }
          function re() {
            return document;
          }
          function c(e9, t5) {
            while (e9 && !t5(e9)) {
              e9 = u(e9);
            }
            return e9 ? e9 : null;
          }
          function L(e9, t5, r5) {
            var n9 = te(t5, r5);
            var i8 = te(t5, "hx-disinherit");
            if (e9 !== t5 && i8 && (i8 === "*" || i8.split(" ").indexOf(r5) >= 0)) {
              return "unset";
            } else {
              return n9;
            }
          }
          function ne(t5, r5) {
            var n9 = null;
            c(t5, function(e9) {
              return n9 = L(t5, e9, r5);
            });
            if (n9 !== "unset") {
              return n9;
            }
          }
          function h(e9, t5) {
            var r5 = e9.matches || e9.matchesSelector || e9.msMatchesSelector || e9.mozMatchesSelector || e9.webkitMatchesSelector || e9.oMatchesSelector;
            return r5 && r5.call(e9, t5);
          }
          function A(e9) {
            var t5 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
            var r5 = t5.exec(e9);
            if (r5) {
              return r5[1].toLowerCase();
            } else {
              return "";
            }
          }
          function s(e9, t5) {
            var r5 = new DOMParser();
            var n9 = r5.parseFromString(e9, "text/html");
            var i8 = n9.body;
            while (t5 > 0) {
              t5--;
              i8 = i8.firstChild;
            }
            if (i8 == null) {
              i8 = re().createDocumentFragment();
            }
            return i8;
          }
          function N(e9) {
            return /<body/.test(e9);
          }
          function l(e9) {
            var t5 = !N(e9);
            var r5 = A(e9);
            var n9 = e9;
            if (r5 === "head") {
              n9 = n9.replace(S, "");
            }
            if (Q.config.useTemplateFragments && t5) {
              var i8 = s("<body><template>" + n9 + "</template></body>", 0);
              var a4 = i8.querySelector("template").content;
              if (Q.config.allowScriptTags) {
                oe(a4.querySelectorAll("script"), function(e10) {
                  if (Q.config.inlineScriptNonce) {
                    e10.nonce = Q.config.inlineScriptNonce;
                  }
                  e10.htmxExecuted = navigator.userAgent.indexOf("Firefox") === -1;
                });
              } else {
                oe(a4.querySelectorAll("script"), function(e10) {
                  _(e10);
                });
              }
              return a4;
            }
            switch (r5) {
              case "thead":
              case "tbody":
              case "tfoot":
              case "colgroup":
              case "caption":
                return s("<table>" + n9 + "</table>", 1);
              case "col":
                return s("<table><colgroup>" + n9 + "</colgroup></table>", 2);
              case "tr":
                return s("<table><tbody>" + n9 + "</tbody></table>", 2);
              case "td":
              case "th":
                return s("<table><tbody><tr>" + n9 + "</tr></tbody></table>", 3);
              case "script":
              case "style":
                return s("<div>" + n9 + "</div>", 1);
              default:
                return s(n9, 0);
            }
          }
          function ie(e9) {
            if (e9) {
              e9();
            }
          }
          function I(e9, t5) {
            return Object.prototype.toString.call(e9) === "[object " + t5 + "]";
          }
          function k(e9) {
            return I(e9, "Function");
          }
          function P(e9) {
            return I(e9, "Object");
          }
          function ae(e9) {
            var t5 = "htmx-internal-data";
            var r5 = e9[t5];
            if (!r5) {
              r5 = e9[t5] = {};
            }
            return r5;
          }
          function M(e9) {
            var t5 = [];
            if (e9) {
              for (var r5 = 0; r5 < e9.length; r5++) {
                t5.push(e9[r5]);
              }
            }
            return t5;
          }
          function oe(e9, t5) {
            if (e9) {
              for (var r5 = 0; r5 < e9.length; r5++) {
                t5(e9[r5]);
              }
            }
          }
          function X(e9) {
            var t5 = e9.getBoundingClientRect();
            var r5 = t5.top;
            var n9 = t5.bottom;
            return r5 < window.innerHeight && n9 >= 0;
          }
          function se(e9) {
            if (e9.getRootNode && e9.getRootNode() instanceof window.ShadowRoot) {
              return re().body.contains(e9.getRootNode().host);
            } else {
              return re().body.contains(e9);
            }
          }
          function D(e9) {
            return e9.trim().split(/\s+/);
          }
          function le(e9, t5) {
            for (var r5 in t5) {
              if (t5.hasOwnProperty(r5)) {
                e9[r5] = t5[r5];
              }
            }
            return e9;
          }
          function E(e9) {
            try {
              return JSON.parse(e9);
            } catch (e10) {
              b(e10);
              return null;
            }
          }
          function U() {
            var e9 = "htmx:localStorageTest";
            try {
              localStorage.setItem(e9, e9);
              localStorage.removeItem(e9);
              return true;
            } catch (e10) {
              return false;
            }
          }
          function B(t5) {
            try {
              var e9 = new URL(t5);
              if (e9) {
                t5 = e9.pathname + e9.search;
              }
              if (!/^\/$/.test(t5)) {
                t5 = t5.replace(/\/+$/, "");
              }
              return t5;
            } catch (e10) {
              return t5;
            }
          }
          function t(e) {
            return Tr(re().body, function() {
              return eval(e);
            });
          }
          function F(t5) {
            var e9 = Q.on("htmx:load", function(e10) {
              t5(e10.detail.elt);
            });
            return e9;
          }
          function V() {
            Q.logger = function(e9, t5, r5) {
              if (console) {
                console.log(t5, e9, r5);
              }
            };
          }
          function j() {
            Q.logger = null;
          }
          function C(e9, t5) {
            if (t5) {
              return e9.querySelector(t5);
            } else {
              return C(re(), e9);
            }
          }
          function f(e9, t5) {
            if (t5) {
              return e9.querySelectorAll(t5);
            } else {
              return f(re(), e9);
            }
          }
          function _(e9, t5) {
            e9 = p(e9);
            if (t5) {
              setTimeout(function() {
                _(e9);
                e9 = null;
              }, t5);
            } else {
              e9.parentElement.removeChild(e9);
            }
          }
          function z(e9, t5, r5) {
            e9 = p(e9);
            if (r5) {
              setTimeout(function() {
                z(e9, t5);
                e9 = null;
              }, r5);
            } else {
              e9.classList && e9.classList.add(t5);
            }
          }
          function n(e9, t5, r5) {
            e9 = p(e9);
            if (r5) {
              setTimeout(function() {
                n(e9, t5);
                e9 = null;
              }, r5);
            } else {
              if (e9.classList) {
                e9.classList.remove(t5);
                if (e9.classList.length === 0) {
                  e9.removeAttribute("class");
                }
              }
            }
          }
          function $(e9, t5) {
            e9 = p(e9);
            e9.classList.toggle(t5);
          }
          function W(e9, t5) {
            e9 = p(e9);
            oe(e9.parentElement.children, function(e10) {
              n(e10, t5);
            });
            z(e9, t5);
          }
          function v(e9, t5) {
            e9 = p(e9);
            if (e9.closest) {
              return e9.closest(t5);
            } else {
              do {
                if (e9 == null || h(e9, t5)) {
                  return e9;
                }
              } while (e9 = e9 && u(e9));
              return null;
            }
          }
          function g(e9, t5) {
            return e9.substring(0, t5.length) === t5;
          }
          function G(e9, t5) {
            return e9.substring(e9.length - t5.length) === t5;
          }
          function J(e9) {
            var t5 = e9.trim();
            if (g(t5, "<") && G(t5, "/>")) {
              return t5.substring(1, t5.length - 2);
            } else {
              return t5;
            }
          }
          function Z(e9, t5) {
            if (t5.indexOf("closest ") === 0) {
              return [v(e9, J(t5.substr(8)))];
            } else if (t5.indexOf("find ") === 0) {
              return [C(e9, J(t5.substr(5)))];
            } else if (t5 === "next") {
              return [e9.nextElementSibling];
            } else if (t5.indexOf("next ") === 0) {
              return [K(e9, J(t5.substr(5)))];
            } else if (t5 === "previous") {
              return [e9.previousElementSibling];
            } else if (t5.indexOf("previous ") === 0) {
              return [Y(e9, J(t5.substr(9)))];
            } else if (t5 === "document") {
              return [document];
            } else if (t5 === "window") {
              return [window];
            } else if (t5 === "body") {
              return [document.body];
            } else {
              return re().querySelectorAll(J(t5));
            }
          }
          var K = function(e9, t5) {
            var r5 = re().querySelectorAll(t5);
            for (var n9 = 0; n9 < r5.length; n9++) {
              var i8 = r5[n9];
              if (i8.compareDocumentPosition(e9) === Node.DOCUMENT_POSITION_PRECEDING) {
                return i8;
              }
            }
          };
          var Y = function(e9, t5) {
            var r5 = re().querySelectorAll(t5);
            for (var n9 = r5.length - 1; n9 >= 0; n9--) {
              var i8 = r5[n9];
              if (i8.compareDocumentPosition(e9) === Node.DOCUMENT_POSITION_FOLLOWING) {
                return i8;
              }
            }
          };
          function ue(e9, t5) {
            if (t5) {
              return Z(e9, t5)[0];
            } else {
              return Z(re().body, e9)[0];
            }
          }
          function p(e9) {
            if (I(e9, "String")) {
              return C(e9);
            } else {
              return e9;
            }
          }
          function ve(e9, t5, r5) {
            if (k(t5)) {
              return { target: re().body, event: e9, listener: t5 };
            } else {
              return { target: p(e9), event: t5, listener: r5 };
            }
          }
          function de(t5, r5, n9) {
            jr(function() {
              var e10 = ve(t5, r5, n9);
              e10.target.addEventListener(e10.event, e10.listener);
            });
            var e9 = k(r5);
            return e9 ? r5 : n9;
          }
          function ge(t5, r5, n9) {
            jr(function() {
              var e9 = ve(t5, r5, n9);
              e9.target.removeEventListener(e9.event, e9.listener);
            });
            return k(r5) ? r5 : n9;
          }
          var pe = re().createElement("output");
          function me(e9, t5) {
            var r5 = ne(e9, t5);
            if (r5) {
              if (r5 === "this") {
                return [xe(e9, t5)];
              } else {
                var n9 = Z(e9, r5);
                if (n9.length === 0) {
                  b('The selector "' + r5 + '" on ' + t5 + " returned no matches!");
                  return [pe];
                } else {
                  return n9;
                }
              }
            }
          }
          function xe(e9, t5) {
            return c(e9, function(e10) {
              return te(e10, t5) != null;
            });
          }
          function ye(e9) {
            var t5 = ne(e9, "hx-target");
            if (t5) {
              if (t5 === "this") {
                return xe(e9, "hx-target");
              } else {
                return ue(e9, t5);
              }
            } else {
              var r5 = ae(e9);
              if (r5.boosted) {
                return re().body;
              } else {
                return e9;
              }
            }
          }
          function be(e9) {
            var t5 = Q.config.attributesToSettle;
            for (var r5 = 0; r5 < t5.length; r5++) {
              if (e9 === t5[r5]) {
                return true;
              }
            }
            return false;
          }
          function we(t5, r5) {
            oe(t5.attributes, function(e9) {
              if (!r5.hasAttribute(e9.name) && be(e9.name)) {
                t5.removeAttribute(e9.name);
              }
            });
            oe(r5.attributes, function(e9) {
              if (be(e9.name)) {
                t5.setAttribute(e9.name, e9.value);
              }
            });
          }
          function Se(e9, t5) {
            var r5 = Fr(t5);
            for (var n9 = 0; n9 < r5.length; n9++) {
              var i8 = r5[n9];
              try {
                if (i8.isInlineSwap(e9)) {
                  return true;
                }
              } catch (e10) {
                b(e10);
              }
            }
            return e9 === "outerHTML";
          }
          function Ee(e9, i8, a4) {
            var t5 = "#" + ee(i8, "id");
            var o8 = "outerHTML";
            if (e9 === "true") {
            } else if (e9.indexOf(":") > 0) {
              o8 = e9.substr(0, e9.indexOf(":"));
              t5 = e9.substr(e9.indexOf(":") + 1, e9.length);
            } else {
              o8 = e9;
            }
            var r5 = re().querySelectorAll(t5);
            if (r5) {
              oe(r5, function(e10) {
                var t6;
                var r6 = i8.cloneNode(true);
                t6 = re().createDocumentFragment();
                t6.appendChild(r6);
                if (!Se(o8, e10)) {
                  t6 = r6;
                }
                var n9 = { shouldSwap: true, target: e10, fragment: t6 };
                if (!ce(e10, "htmx:oobBeforeSwap", n9)) return;
                e10 = n9.target;
                if (n9["shouldSwap"]) {
                  Fe(o8, e10, e10, t6, a4);
                }
                oe(a4.elts, function(e11) {
                  ce(e11, "htmx:oobAfterSwap", n9);
                });
              });
              i8.parentNode.removeChild(i8);
            } else {
              i8.parentNode.removeChild(i8);
              fe(re().body, "htmx:oobErrorNoTarget", { content: i8 });
            }
            return e9;
          }
          function Ce(e9, t5, r5) {
            var n9 = ne(e9, "hx-select-oob");
            if (n9) {
              var i8 = n9.split(",");
              for (var a4 = 0; a4 < i8.length; a4++) {
                var o8 = i8[a4].split(":", 2);
                var s6 = o8[0].trim();
                if (s6.indexOf("#") === 0) {
                  s6 = s6.substring(1);
                }
                var l7 = o8[1] || "true";
                var u4 = t5.querySelector("#" + s6);
                if (u4) {
                  Ee(l7, u4, r5);
                }
              }
            }
            oe(f(t5, "[hx-swap-oob], [data-hx-swap-oob]"), function(e10) {
              var t6 = te(e10, "hx-swap-oob");
              if (t6 != null) {
                Ee(t6, e10, r5);
              }
            });
          }
          function Re(e9) {
            oe(f(e9, "[hx-preserve], [data-hx-preserve]"), function(e10) {
              var t5 = te(e10, "id");
              var r5 = re().getElementById(t5);
              if (r5 != null) {
                e10.parentNode.replaceChild(r5, e10);
              }
            });
          }
          function Te(o8, e9, s6) {
            oe(e9.querySelectorAll("[id]"), function(e10) {
              var t5 = ee(e10, "id");
              if (t5 && t5.length > 0) {
                var r5 = t5.replace("'", "\\'");
                var n9 = e10.tagName.replace(":", "\\:");
                var i8 = o8.querySelector(n9 + "[id='" + r5 + "']");
                if (i8 && i8 !== o8) {
                  var a4 = e10.cloneNode();
                  we(e10, i8);
                  s6.tasks.push(function() {
                    we(e10, a4);
                  });
                }
              }
            });
          }
          function Oe(e9) {
            return function() {
              n(e9, Q.config.addedClass);
              zt(e9);
              Nt(e9);
              qe(e9);
              ce(e9, "htmx:load");
            };
          }
          function qe(e9) {
            var t5 = "[autofocus]";
            var r5 = h(e9, t5) ? e9 : e9.querySelector(t5);
            if (r5 != null) {
              r5.focus();
            }
          }
          function a(e9, t5, r5, n9) {
            Te(e9, r5, n9);
            while (r5.childNodes.length > 0) {
              var i8 = r5.firstChild;
              z(i8, Q.config.addedClass);
              e9.insertBefore(i8, t5);
              if (i8.nodeType !== Node.TEXT_NODE && i8.nodeType !== Node.COMMENT_NODE) {
                n9.tasks.push(Oe(i8));
              }
            }
          }
          function He(e9, t5) {
            var r5 = 0;
            while (r5 < e9.length) {
              t5 = (t5 << 5) - t5 + e9.charCodeAt(r5++) | 0;
            }
            return t5;
          }
          function Le(e9) {
            var t5 = 0;
            if (e9.attributes) {
              for (var r5 = 0; r5 < e9.attributes.length; r5++) {
                var n9 = e9.attributes[r5];
                if (n9.value) {
                  t5 = He(n9.name, t5);
                  t5 = He(n9.value, t5);
                }
              }
            }
            return t5;
          }
          function Ae(e9) {
            var t5 = ae(e9);
            if (t5.onHandlers) {
              for (var r5 = 0; r5 < t5.onHandlers.length; r5++) {
                const n9 = t5.onHandlers[r5];
                e9.removeEventListener(n9.event, n9.listener);
              }
              delete t5.onHandlers;
            }
          }
          function Ne(e9) {
            var t5 = ae(e9);
            if (t5.timeout) {
              clearTimeout(t5.timeout);
            }
            if (t5.webSocket) {
              t5.webSocket.close();
            }
            if (t5.sseEventSource) {
              t5.sseEventSource.close();
            }
            if (t5.listenerInfos) {
              oe(t5.listenerInfos, function(e10) {
                if (e10.on) {
                  e10.on.removeEventListener(e10.trigger, e10.listener);
                }
              });
            }
            Ae(e9);
            oe(Object.keys(t5), function(e10) {
              delete t5[e10];
            });
          }
          function m(e9) {
            ce(e9, "htmx:beforeCleanupElement");
            Ne(e9);
            if (e9.children) {
              oe(e9.children, function(e10) {
                m(e10);
              });
            }
          }
          function Ie(t5, e9, r5) {
            if (t5.tagName === "BODY") {
              return Ue(t5, e9, r5);
            } else {
              var n9;
              var i8 = t5.previousSibling;
              a(u(t5), t5, e9, r5);
              if (i8 == null) {
                n9 = u(t5).firstChild;
              } else {
                n9 = i8.nextSibling;
              }
              r5.elts = r5.elts.filter(function(e10) {
                return e10 != t5;
              });
              while (n9 && n9 !== t5) {
                if (n9.nodeType === Node.ELEMENT_NODE) {
                  r5.elts.push(n9);
                }
                n9 = n9.nextElementSibling;
              }
              m(t5);
              u(t5).removeChild(t5);
            }
          }
          function ke(e9, t5, r5) {
            return a(e9, e9.firstChild, t5, r5);
          }
          function Pe(e9, t5, r5) {
            return a(u(e9), e9, t5, r5);
          }
          function Me(e9, t5, r5) {
            return a(e9, null, t5, r5);
          }
          function Xe(e9, t5, r5) {
            return a(u(e9), e9.nextSibling, t5, r5);
          }
          function De(e9, t5, r5) {
            m(e9);
            return u(e9).removeChild(e9);
          }
          function Ue(e9, t5, r5) {
            var n9 = e9.firstChild;
            a(e9, n9, t5, r5);
            if (n9) {
              while (n9.nextSibling) {
                m(n9.nextSibling);
                e9.removeChild(n9.nextSibling);
              }
              m(n9);
              e9.removeChild(n9);
            }
          }
          function Be(e9, t5, r5) {
            var n9 = r5 || ne(e9, "hx-select");
            if (n9) {
              var i8 = re().createDocumentFragment();
              oe(t5.querySelectorAll(n9), function(e10) {
                i8.appendChild(e10);
              });
              t5 = i8;
            }
            return t5;
          }
          function Fe(e9, t5, r5, n9, i8) {
            switch (e9) {
              case "none":
                return;
              case "outerHTML":
                Ie(r5, n9, i8);
                return;
              case "afterbegin":
                ke(r5, n9, i8);
                return;
              case "beforebegin":
                Pe(r5, n9, i8);
                return;
              case "beforeend":
                Me(r5, n9, i8);
                return;
              case "afterend":
                Xe(r5, n9, i8);
                return;
              case "delete":
                De(r5, n9, i8);
                return;
              default:
                var a4 = Fr(t5);
                for (var o8 = 0; o8 < a4.length; o8++) {
                  var s6 = a4[o8];
                  try {
                    var l7 = s6.handleSwap(e9, r5, n9, i8);
                    if (l7) {
                      if (typeof l7.length !== "undefined") {
                        for (var u4 = 0; u4 < l7.length; u4++) {
                          var f3 = l7[u4];
                          if (f3.nodeType !== Node.TEXT_NODE && f3.nodeType !== Node.COMMENT_NODE) {
                            i8.tasks.push(Oe(f3));
                          }
                        }
                      }
                      return;
                    }
                  } catch (e10) {
                    b(e10);
                  }
                }
                if (e9 === "innerHTML") {
                  Ue(r5, n9, i8);
                } else {
                  Fe(Q.config.defaultSwapStyle, t5, r5, n9, i8);
                }
            }
          }
          function Ve(e9) {
            if (e9.indexOf("<title") > -1) {
              var t5 = e9.replace(H, "");
              var r5 = t5.match(q);
              if (r5) {
                return r5[2];
              }
            }
          }
          function je(e9, t5, r5, n9, i8, a4) {
            i8.title = Ve(n9);
            var o8 = l(n9);
            if (o8) {
              Ce(r5, o8, i8);
              o8 = Be(r5, o8, a4);
              Re(o8);
              return Fe(e9, r5, t5, o8, i8);
            }
          }
          function _e(e9, t5, r5) {
            var n9 = e9.getResponseHeader(t5);
            if (n9.indexOf("{") === 0) {
              var i8 = E(n9);
              for (var a4 in i8) {
                if (i8.hasOwnProperty(a4)) {
                  var o8 = i8[a4];
                  if (!P(o8)) {
                    o8 = { value: o8 };
                  }
                  ce(r5, a4, o8);
                }
              }
            } else {
              var s6 = n9.split(",");
              for (var l7 = 0; l7 < s6.length; l7++) {
                ce(r5, s6[l7].trim(), []);
              }
            }
          }
          var ze = /\s/;
          var x = /[\s,]/;
          var $e = /[_$a-zA-Z]/;
          var We = /[_$a-zA-Z0-9]/;
          var Ge = ['"', "'", "/"];
          var Je = /[^\s]/;
          var Ze = /[{(]/;
          var Ke = /[})]/;
          function Ye(e9) {
            var t5 = [];
            var r5 = 0;
            while (r5 < e9.length) {
              if ($e.exec(e9.charAt(r5))) {
                var n9 = r5;
                while (We.exec(e9.charAt(r5 + 1))) {
                  r5++;
                }
                t5.push(e9.substr(n9, r5 - n9 + 1));
              } else if (Ge.indexOf(e9.charAt(r5)) !== -1) {
                var i8 = e9.charAt(r5);
                var n9 = r5;
                r5++;
                while (r5 < e9.length && e9.charAt(r5) !== i8) {
                  if (e9.charAt(r5) === "\\") {
                    r5++;
                  }
                  r5++;
                }
                t5.push(e9.substr(n9, r5 - n9 + 1));
              } else {
                var a4 = e9.charAt(r5);
                t5.push(a4);
              }
              r5++;
            }
            return t5;
          }
          function Qe(e9, t5, r5) {
            return $e.exec(e9.charAt(0)) && e9 !== "true" && e9 !== "false" && e9 !== "this" && e9 !== r5 && t5 !== ".";
          }
          function et(e9, t5, r5) {
            if (t5[0] === "[") {
              t5.shift();
              var n9 = 1;
              var i8 = " return (function(" + r5 + "){ return (";
              var a4 = null;
              while (t5.length > 0) {
                var o8 = t5[0];
                if (o8 === "]") {
                  n9--;
                  if (n9 === 0) {
                    if (a4 === null) {
                      i8 = i8 + "true";
                    }
                    t5.shift();
                    i8 += ")})";
                    try {
                      var s6 = Tr(e9, function() {
                        return Function(i8)();
                      }, function() {
                        return true;
                      });
                      s6.source = i8;
                      return s6;
                    } catch (e10) {
                      fe(re().body, "htmx:syntax:error", { error: e10, source: i8 });
                      return null;
                    }
                  }
                } else if (o8 === "[") {
                  n9++;
                }
                if (Qe(o8, a4, r5)) {
                  i8 += "((" + r5 + "." + o8 + ") ? (" + r5 + "." + o8 + ") : (window." + o8 + "))";
                } else {
                  i8 = i8 + o8;
                }
                a4 = t5.shift();
              }
            }
          }
          function y(e9, t5) {
            var r5 = "";
            while (e9.length > 0 && !t5.test(e9[0])) {
              r5 += e9.shift();
            }
            return r5;
          }
          function tt(e9) {
            var t5;
            if (e9.length > 0 && Ze.test(e9[0])) {
              e9.shift();
              t5 = y(e9, Ke).trim();
              e9.shift();
            } else {
              t5 = y(e9, x);
            }
            return t5;
          }
          var rt = "input, textarea, select";
          function nt(e9, t5, r5) {
            var n9 = [];
            var i8 = Ye(t5);
            do {
              y(i8, Je);
              var a4 = i8.length;
              var o8 = y(i8, /[,\[\s]/);
              if (o8 !== "") {
                if (o8 === "every") {
                  var s6 = { trigger: "every" };
                  y(i8, Je);
                  s6.pollInterval = d(y(i8, /[,\[\s]/));
                  y(i8, Je);
                  var l7 = et(e9, i8, "event");
                  if (l7) {
                    s6.eventFilter = l7;
                  }
                  n9.push(s6);
                } else if (o8.indexOf("sse:") === 0) {
                  n9.push({ trigger: "sse", sseEvent: o8.substr(4) });
                } else {
                  var u4 = { trigger: o8 };
                  var l7 = et(e9, i8, "event");
                  if (l7) {
                    u4.eventFilter = l7;
                  }
                  while (i8.length > 0 && i8[0] !== ",") {
                    y(i8, Je);
                    var f3 = i8.shift();
                    if (f3 === "changed") {
                      u4.changed = true;
                    } else if (f3 === "once") {
                      u4.once = true;
                    } else if (f3 === "consume") {
                      u4.consume = true;
                    } else if (f3 === "delay" && i8[0] === ":") {
                      i8.shift();
                      u4.delay = d(y(i8, x));
                    } else if (f3 === "from" && i8[0] === ":") {
                      i8.shift();
                      if (Ze.test(i8[0])) {
                        var c4 = tt(i8);
                      } else {
                        var c4 = y(i8, x);
                        if (c4 === "closest" || c4 === "find" || c4 === "next" || c4 === "previous") {
                          i8.shift();
                          var h4 = tt(i8);
                          if (h4.length > 0) {
                            c4 += " " + h4;
                          }
                        }
                      }
                      u4.from = c4;
                    } else if (f3 === "target" && i8[0] === ":") {
                      i8.shift();
                      u4.target = tt(i8);
                    } else if (f3 === "throttle" && i8[0] === ":") {
                      i8.shift();
                      u4.throttle = d(y(i8, x));
                    } else if (f3 === "queue" && i8[0] === ":") {
                      i8.shift();
                      u4.queue = y(i8, x);
                    } else if (f3 === "root" && i8[0] === ":") {
                      i8.shift();
                      u4[f3] = tt(i8);
                    } else if (f3 === "threshold" && i8[0] === ":") {
                      i8.shift();
                      u4[f3] = y(i8, x);
                    } else {
                      fe(e9, "htmx:syntax:error", { token: i8.shift() });
                    }
                  }
                  n9.push(u4);
                }
              }
              if (i8.length === a4) {
                fe(e9, "htmx:syntax:error", { token: i8.shift() });
              }
              y(i8, Je);
            } while (i8[0] === "," && i8.shift());
            if (r5) {
              r5[t5] = n9;
            }
            return n9;
          }
          function it(e9) {
            var t5 = te(e9, "hx-trigger");
            var r5 = [];
            if (t5) {
              var n9 = Q.config.triggerSpecsCache;
              r5 = n9 && n9[t5] || nt(e9, t5, n9);
            }
            if (r5.length > 0) {
              return r5;
            } else if (h(e9, "form")) {
              return [{ trigger: "submit" }];
            } else if (h(e9, 'input[type="button"], input[type="submit"]')) {
              return [{ trigger: "click" }];
            } else if (h(e9, rt)) {
              return [{ trigger: "change" }];
            } else {
              return [{ trigger: "click" }];
            }
          }
          function at(e9) {
            ae(e9).cancelled = true;
          }
          function ot(e9, t5, r5) {
            var n9 = ae(e9);
            n9.timeout = setTimeout(function() {
              if (se(e9) && n9.cancelled !== true) {
                if (!ct(r5, e9, Wt("hx:poll:trigger", { triggerSpec: r5, target: e9 }))) {
                  t5(e9);
                }
                ot(e9, t5, r5);
              }
            }, r5.pollInterval);
          }
          function st(e9) {
            return location.hostname === e9.hostname && ee(e9, "href") && ee(e9, "href").indexOf("#") !== 0;
          }
          function lt(t5, r5, e9) {
            if (t5.tagName === "A" && st(t5) && (t5.target === "" || t5.target === "_self") || t5.tagName === "FORM") {
              r5.boosted = true;
              var n9, i8;
              if (t5.tagName === "A") {
                n9 = "get";
                i8 = ee(t5, "href");
              } else {
                var a4 = ee(t5, "method");
                n9 = a4 ? a4.toLowerCase() : "get";
                if (n9 === "get") {
                }
                i8 = ee(t5, "action");
              }
              e9.forEach(function(e10) {
                ht(t5, function(e11, t6) {
                  if (v(e11, Q.config.disableSelector)) {
                    m(e11);
                    return;
                  }
                  he(n9, i8, e11, t6);
                }, r5, e10, true);
              });
            }
          }
          function ut(e9, t5) {
            if (e9.type === "submit" || e9.type === "click") {
              if (t5.tagName === "FORM") {
                return true;
              }
              if (h(t5, 'input[type="submit"], button') && v(t5, "form") !== null) {
                return true;
              }
              if (t5.tagName === "A" && t5.href && (t5.getAttribute("href") === "#" || t5.getAttribute("href").indexOf("#") !== 0)) {
                return true;
              }
            }
            return false;
          }
          function ft(e9, t5) {
            return ae(e9).boosted && e9.tagName === "A" && t5.type === "click" && (t5.ctrlKey || t5.metaKey);
          }
          function ct(e9, t5, r5) {
            var n9 = e9.eventFilter;
            if (n9) {
              try {
                return n9.call(t5, r5) !== true;
              } catch (e10) {
                fe(re().body, "htmx:eventFilter:error", { error: e10, source: n9.source });
                return true;
              }
            }
            return false;
          }
          function ht(a4, o8, e9, s6, l7) {
            var u4 = ae(a4);
            var t5;
            if (s6.from) {
              t5 = Z(a4, s6.from);
            } else {
              t5 = [a4];
            }
            if (s6.changed) {
              t5.forEach(function(e10) {
                var t6 = ae(e10);
                t6.lastValue = e10.value;
              });
            }
            oe(t5, function(n9) {
              var i8 = function(e10) {
                if (!se(a4)) {
                  n9.removeEventListener(s6.trigger, i8);
                  return;
                }
                if (ft(a4, e10)) {
                  return;
                }
                if (l7 || ut(e10, a4)) {
                  e10.preventDefault();
                }
                if (ct(s6, a4, e10)) {
                  return;
                }
                var t6 = ae(e10);
                t6.triggerSpec = s6;
                if (t6.handledFor == null) {
                  t6.handledFor = [];
                }
                if (t6.handledFor.indexOf(a4) < 0) {
                  t6.handledFor.push(a4);
                  if (s6.consume) {
                    e10.stopPropagation();
                  }
                  if (s6.target && e10.target) {
                    if (!h(e10.target, s6.target)) {
                      return;
                    }
                  }
                  if (s6.once) {
                    if (u4.triggeredOnce) {
                      return;
                    } else {
                      u4.triggeredOnce = true;
                    }
                  }
                  if (s6.changed) {
                    var r5 = ae(n9);
                    if (r5.lastValue === n9.value) {
                      return;
                    }
                    r5.lastValue = n9.value;
                  }
                  if (u4.delayed) {
                    clearTimeout(u4.delayed);
                  }
                  if (u4.throttle) {
                    return;
                  }
                  if (s6.throttle > 0) {
                    if (!u4.throttle) {
                      o8(a4, e10);
                      u4.throttle = setTimeout(function() {
                        u4.throttle = null;
                      }, s6.throttle);
                    }
                  } else if (s6.delay > 0) {
                    u4.delayed = setTimeout(function() {
                      o8(a4, e10);
                    }, s6.delay);
                  } else {
                    ce(a4, "htmx:trigger");
                    o8(a4, e10);
                  }
                }
              };
              if (e9.listenerInfos == null) {
                e9.listenerInfos = [];
              }
              e9.listenerInfos.push({ trigger: s6.trigger, listener: i8, on: n9 });
              n9.addEventListener(s6.trigger, i8);
            });
          }
          var vt = false;
          var dt = null;
          function gt() {
            if (!dt) {
              dt = function() {
                vt = true;
              };
              window.addEventListener("scroll", dt);
              setInterval(function() {
                if (vt) {
                  vt = false;
                  oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e9) {
                    pt(e9);
                  });
                }
              }, 200);
            }
          }
          function pt(t5) {
            if (!o(t5, "data-hx-revealed") && X(t5)) {
              t5.setAttribute("data-hx-revealed", "true");
              var e9 = ae(t5);
              if (e9.initHash) {
                ce(t5, "revealed");
              } else {
                t5.addEventListener("htmx:afterProcessNode", function(e10) {
                  ce(t5, "revealed");
                }, { once: true });
              }
            }
          }
          function mt(e9, t5, r5) {
            var n9 = D(r5);
            for (var i8 = 0; i8 < n9.length; i8++) {
              var a4 = n9[i8].split(/:(.+)/);
              if (a4[0] === "connect") {
                xt(e9, a4[1], 0);
              }
              if (a4[0] === "send") {
                bt(e9);
              }
            }
          }
          function xt(s6, r5, n9) {
            if (!se(s6)) {
              return;
            }
            if (r5.indexOf("/") == 0) {
              var e9 = location.hostname + (location.port ? ":" + location.port : "");
              if (location.protocol == "https:") {
                r5 = "wss://" + e9 + r5;
              } else if (location.protocol == "http:") {
                r5 = "ws://" + e9 + r5;
              }
            }
            var t5 = Q.createWebSocket(r5);
            t5.onerror = function(e10) {
              fe(s6, "htmx:wsError", { error: e10, socket: t5 });
              yt(s6);
            };
            t5.onclose = function(e10) {
              if ([1006, 1012, 1013].indexOf(e10.code) >= 0) {
                var t6 = wt(n9);
                setTimeout(function() {
                  xt(s6, r5, n9 + 1);
                }, t6);
              }
            };
            t5.onopen = function(e10) {
              n9 = 0;
            };
            ae(s6).webSocket = t5;
            t5.addEventListener("message", function(e10) {
              if (yt(s6)) {
                return;
              }
              var t6 = e10.data;
              R(s6, function(e11) {
                t6 = e11.transformResponse(t6, null, s6);
              });
              var r6 = T(s6);
              var n10 = l(t6);
              var i8 = M(n10.children);
              for (var a4 = 0; a4 < i8.length; a4++) {
                var o8 = i8[a4];
                Ee(te(o8, "hx-swap-oob") || "true", o8, r6);
              }
              nr(r6.tasks);
            });
          }
          function yt(e9) {
            if (!se(e9)) {
              ae(e9).webSocket.close();
              return true;
            }
          }
          function bt(u4) {
            var f3 = c(u4, function(e9) {
              return ae(e9).webSocket != null;
            });
            if (f3) {
              u4.addEventListener(it(u4)[0].trigger, function(e9) {
                var t5 = ae(f3).webSocket;
                var r5 = xr(u4, f3);
                var n9 = dr(u4, "post");
                var i8 = n9.errors;
                var a4 = n9.values;
                var o8 = Hr(u4);
                var s6 = le(a4, o8);
                var l7 = yr(s6, u4);
                l7["HEADERS"] = r5;
                if (i8 && i8.length > 0) {
                  ce(u4, "htmx:validation:halted", i8);
                  return;
                }
                t5.send(JSON.stringify(l7));
                if (ut(e9, u4)) {
                  e9.preventDefault();
                }
              });
            } else {
              fe(u4, "htmx:noWebSocketSourceError");
            }
          }
          function wt(e9) {
            var t5 = Q.config.wsReconnectDelay;
            if (typeof t5 === "function") {
              return t5(e9);
            }
            if (t5 === "full-jitter") {
              var r5 = Math.min(e9, 6);
              var n9 = 1e3 * Math.pow(2, r5);
              return n9 * Math.random();
            }
            b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
          }
          function St(e9, t5, r5) {
            var n9 = D(r5);
            for (var i8 = 0; i8 < n9.length; i8++) {
              var a4 = n9[i8].split(/:(.+)/);
              if (a4[0] === "connect") {
                Et(e9, a4[1]);
              }
              if (a4[0] === "swap") {
                Ct(e9, a4[1]);
              }
            }
          }
          function Et(t5, e9) {
            var r5 = Q.createEventSource(e9);
            r5.onerror = function(e10) {
              fe(t5, "htmx:sseError", { error: e10, source: r5 });
              Tt(t5);
            };
            ae(t5).sseEventSource = r5;
          }
          function Ct(a4, o8) {
            var s6 = c(a4, Ot);
            if (s6) {
              var l7 = ae(s6).sseEventSource;
              var u4 = function(e9) {
                if (Tt(s6)) {
                  return;
                }
                if (!se(a4)) {
                  l7.removeEventListener(o8, u4);
                  return;
                }
                var t5 = e9.data;
                R(a4, function(e10) {
                  t5 = e10.transformResponse(t5, null, a4);
                });
                var r5 = wr(a4);
                var n9 = ye(a4);
                var i8 = T(a4);
                je(r5.swapStyle, n9, a4, t5, i8);
                nr(i8.tasks);
                ce(a4, "htmx:sseMessage", e9);
              };
              ae(a4).sseListener = u4;
              l7.addEventListener(o8, u4);
            } else {
              fe(a4, "htmx:noSSESourceError");
            }
          }
          function Rt(e9, t5, r5) {
            var n9 = c(e9, Ot);
            if (n9) {
              var i8 = ae(n9).sseEventSource;
              var a4 = function() {
                if (!Tt(n9)) {
                  if (se(e9)) {
                    t5(e9);
                  } else {
                    i8.removeEventListener(r5, a4);
                  }
                }
              };
              ae(e9).sseListener = a4;
              i8.addEventListener(r5, a4);
            } else {
              fe(e9, "htmx:noSSESourceError");
            }
          }
          function Tt(e9) {
            if (!se(e9)) {
              ae(e9).sseEventSource.close();
              return true;
            }
          }
          function Ot(e9) {
            return ae(e9).sseEventSource != null;
          }
          function qt(e9, t5, r5, n9) {
            var i8 = function() {
              if (!r5.loaded) {
                r5.loaded = true;
                t5(e9);
              }
            };
            if (n9 > 0) {
              setTimeout(i8, n9);
            } else {
              i8();
            }
          }
          function Ht(t5, i8, e9) {
            var a4 = false;
            oe(w, function(r5) {
              if (o(t5, "hx-" + r5)) {
                var n9 = te(t5, "hx-" + r5);
                a4 = true;
                i8.path = n9;
                i8.verb = r5;
                e9.forEach(function(e10) {
                  Lt(t5, e10, i8, function(e11, t6) {
                    if (v(e11, Q.config.disableSelector)) {
                      m(e11);
                      return;
                    }
                    he(r5, n9, e11, t6);
                  });
                });
              }
            });
            return a4;
          }
          function Lt(n9, e9, t5, r5) {
            if (e9.sseEvent) {
              Rt(n9, r5, e9.sseEvent);
            } else if (e9.trigger === "revealed") {
              gt();
              ht(n9, r5, t5, e9);
              pt(n9);
            } else if (e9.trigger === "intersect") {
              var i8 = {};
              if (e9.root) {
                i8.root = ue(n9, e9.root);
              }
              if (e9.threshold) {
                i8.threshold = parseFloat(e9.threshold);
              }
              var a4 = new IntersectionObserver(function(e10) {
                for (var t6 = 0; t6 < e10.length; t6++) {
                  var r6 = e10[t6];
                  if (r6.isIntersecting) {
                    ce(n9, "intersect");
                    break;
                  }
                }
              }, i8);
              a4.observe(n9);
              ht(n9, r5, t5, e9);
            } else if (e9.trigger === "load") {
              if (!ct(e9, n9, Wt("load", { elt: n9 }))) {
                qt(n9, r5, t5, e9.delay);
              }
            } else if (e9.pollInterval > 0) {
              t5.polling = true;
              ot(n9, r5, e9);
            } else {
              ht(n9, r5, t5, e9);
            }
          }
          function At(e9) {
            if (!e9.htmxExecuted && Q.config.allowScriptTags && (e9.type === "text/javascript" || e9.type === "module" || e9.type === "")) {
              var t5 = re().createElement("script");
              oe(e9.attributes, function(e10) {
                t5.setAttribute(e10.name, e10.value);
              });
              t5.textContent = e9.textContent;
              t5.async = false;
              if (Q.config.inlineScriptNonce) {
                t5.nonce = Q.config.inlineScriptNonce;
              }
              var r5 = e9.parentElement;
              try {
                r5.insertBefore(t5, e9);
              } catch (e10) {
                b(e10);
              } finally {
                if (e9.parentElement) {
                  e9.parentElement.removeChild(e9);
                }
              }
            }
          }
          function Nt(e9) {
            if (h(e9, "script")) {
              At(e9);
            }
            oe(f(e9, "script"), function(e10) {
              At(e10);
            });
          }
          function It(e9) {
            var t5 = e9.attributes;
            if (!t5) {
              return false;
            }
            for (var r5 = 0; r5 < t5.length; r5++) {
              var n9 = t5[r5].name;
              if (g(n9, "hx-on:") || g(n9, "data-hx-on:") || g(n9, "hx-on-") || g(n9, "data-hx-on-")) {
                return true;
              }
            }
            return false;
          }
          function kt(e9) {
            var t5 = null;
            var r5 = [];
            if (It(e9)) {
              r5.push(e9);
            }
            if (document.evaluate) {
              var n9 = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', e9);
              while (t5 = n9.iterateNext()) r5.push(t5);
            } else if (typeof e9.getElementsByTagName === "function") {
              var i8 = e9.getElementsByTagName("*");
              for (var a4 = 0; a4 < i8.length; a4++) {
                if (It(i8[a4])) {
                  r5.push(i8[a4]);
                }
              }
            }
            return r5;
          }
          function Pt(e9) {
            if (e9.querySelectorAll) {
              var t5 = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
              var r5 = e9.querySelectorAll(i + t5 + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
              return r5;
            } else {
              return [];
            }
          }
          function Mt(e9) {
            var t5 = v(e9.target, "button, input[type='submit']");
            var r5 = Dt(e9);
            if (r5) {
              r5.lastButtonClicked = t5;
            }
          }
          function Xt(e9) {
            var t5 = Dt(e9);
            if (t5) {
              t5.lastButtonClicked = null;
            }
          }
          function Dt(e9) {
            var t5 = v(e9.target, "button, input[type='submit']");
            if (!t5) {
              return;
            }
            var r5 = p("#" + ee(t5, "form")) || v(t5, "form");
            if (!r5) {
              return;
            }
            return ae(r5);
          }
          function Ut(e9) {
            e9.addEventListener("click", Mt);
            e9.addEventListener("focusin", Mt);
            e9.addEventListener("focusout", Xt);
          }
          function Bt(e9) {
            var t5 = Ye(e9);
            var r5 = 0;
            for (var n9 = 0; n9 < t5.length; n9++) {
              const i8 = t5[n9];
              if (i8 === "{") {
                r5++;
              } else if (i8 === "}") {
                r5--;
              }
            }
            return r5;
          }
          function Ft(t5, e9, r5) {
            var n9 = ae(t5);
            if (!Array.isArray(n9.onHandlers)) {
              n9.onHandlers = [];
            }
            var i8;
            var a4 = function(e10) {
              return Tr(t5, function() {
                if (!i8) {
                  i8 = new Function("event", r5);
                }
                i8.call(t5, e10);
              });
            };
            t5.addEventListener(e9, a4);
            n9.onHandlers.push({ event: e9, listener: a4 });
          }
          function Vt(e9) {
            var t5 = te(e9, "hx-on");
            if (t5) {
              var r5 = {};
              var n9 = t5.split("\n");
              var i8 = null;
              var a4 = 0;
              while (n9.length > 0) {
                var o8 = n9.shift();
                var s6 = o8.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
                if (a4 === 0 && s6) {
                  o8.split(":");
                  i8 = s6[1].slice(0, -1);
                  r5[i8] = s6[2];
                } else {
                  r5[i8] += o8;
                }
                a4 += Bt(o8);
              }
              for (var l7 in r5) {
                Ft(e9, l7, r5[l7]);
              }
            }
          }
          function jt(e9) {
            Ae(e9);
            for (var t5 = 0; t5 < e9.attributes.length; t5++) {
              var r5 = e9.attributes[t5].name;
              var n9 = e9.attributes[t5].value;
              if (g(r5, "hx-on") || g(r5, "data-hx-on")) {
                var i8 = r5.indexOf("-on") + 3;
                var a4 = r5.slice(i8, i8 + 1);
                if (a4 === "-" || a4 === ":") {
                  var o8 = r5.slice(i8 + 1);
                  if (g(o8, ":")) {
                    o8 = "htmx" + o8;
                  } else if (g(o8, "-")) {
                    o8 = "htmx:" + o8.slice(1);
                  } else if (g(o8, "htmx-")) {
                    o8 = "htmx:" + o8.slice(5);
                  }
                  Ft(e9, o8, n9);
                }
              }
            }
          }
          function _t(t5) {
            if (v(t5, Q.config.disableSelector)) {
              m(t5);
              return;
            }
            var r5 = ae(t5);
            if (r5.initHash !== Le(t5)) {
              Ne(t5);
              r5.initHash = Le(t5);
              Vt(t5);
              ce(t5, "htmx:beforeProcessNode");
              if (t5.value) {
                r5.lastValue = t5.value;
              }
              var e9 = it(t5);
              var n9 = Ht(t5, r5, e9);
              if (!n9) {
                if (ne(t5, "hx-boost") === "true") {
                  lt(t5, r5, e9);
                } else if (o(t5, "hx-trigger")) {
                  e9.forEach(function(e10) {
                    Lt(t5, e10, r5, function() {
                    });
                  });
                }
              }
              if (t5.tagName === "FORM" || ee(t5, "type") === "submit" && o(t5, "form")) {
                Ut(t5);
              }
              var i8 = te(t5, "hx-sse");
              if (i8) {
                St(t5, r5, i8);
              }
              var a4 = te(t5, "hx-ws");
              if (a4) {
                mt(t5, r5, a4);
              }
              ce(t5, "htmx:afterProcessNode");
            }
          }
          function zt(e9) {
            e9 = p(e9);
            if (v(e9, Q.config.disableSelector)) {
              m(e9);
              return;
            }
            _t(e9);
            oe(Pt(e9), function(e10) {
              _t(e10);
            });
            oe(kt(e9), jt);
          }
          function $t(e9) {
            return e9.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
          }
          function Wt(e9, t5) {
            var r5;
            if (window.CustomEvent && typeof window.CustomEvent === "function") {
              r5 = new CustomEvent(e9, { bubbles: true, cancelable: true, detail: t5 });
            } else {
              r5 = re().createEvent("CustomEvent");
              r5.initCustomEvent(e9, true, true, t5);
            }
            return r5;
          }
          function fe(e9, t5, r5) {
            ce(e9, t5, le({ error: t5 }, r5));
          }
          function Gt(e9) {
            return e9 === "htmx:afterProcessNode";
          }
          function R(e9, t5) {
            oe(Fr(e9), function(e10) {
              try {
                t5(e10);
              } catch (e11) {
                b(e11);
              }
            });
          }
          function b(e9) {
            if (console.error) {
              console.error(e9);
            } else if (console.log) {
              console.log("ERROR: ", e9);
            }
          }
          function ce(e9, t5, r5) {
            e9 = p(e9);
            if (r5 == null) {
              r5 = {};
            }
            r5["elt"] = e9;
            var n9 = Wt(t5, r5);
            if (Q.logger && !Gt(t5)) {
              Q.logger(e9, t5, r5);
            }
            if (r5.error) {
              b(r5.error);
              ce(e9, "htmx:error", { errorInfo: r5 });
            }
            var i8 = e9.dispatchEvent(n9);
            var a4 = $t(t5);
            if (i8 && a4 !== t5) {
              var o8 = Wt(a4, n9.detail);
              i8 = i8 && e9.dispatchEvent(o8);
            }
            R(e9, function(e10) {
              i8 = i8 && (e10.onEvent(t5, n9) !== false && !n9.defaultPrevented);
            });
            return i8;
          }
          var Jt = location.pathname + location.search;
          function Zt() {
            var e9 = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
            return e9 || re().body;
          }
          function Kt(e9, t5, r5, n9) {
            if (!U()) {
              return;
            }
            if (Q.config.historyCacheSize <= 0) {
              localStorage.removeItem("htmx-history-cache");
              return;
            }
            e9 = B(e9);
            var i8 = E(localStorage.getItem("htmx-history-cache")) || [];
            for (var a4 = 0; a4 < i8.length; a4++) {
              if (i8[a4].url === e9) {
                i8.splice(a4, 1);
                break;
              }
            }
            var o8 = { url: e9, content: t5, title: r5, scroll: n9 };
            ce(re().body, "htmx:historyItemCreated", { item: o8, cache: i8 });
            i8.push(o8);
            while (i8.length > Q.config.historyCacheSize) {
              i8.shift();
            }
            while (i8.length > 0) {
              try {
                localStorage.setItem("htmx-history-cache", JSON.stringify(i8));
                break;
              } catch (e10) {
                fe(re().body, "htmx:historyCacheError", { cause: e10, cache: i8 });
                i8.shift();
              }
            }
          }
          function Yt(e9) {
            if (!U()) {
              return null;
            }
            e9 = B(e9);
            var t5 = E(localStorage.getItem("htmx-history-cache")) || [];
            for (var r5 = 0; r5 < t5.length; r5++) {
              if (t5[r5].url === e9) {
                return t5[r5];
              }
            }
            return null;
          }
          function Qt(e9) {
            var t5 = Q.config.requestClass;
            var r5 = e9.cloneNode(true);
            oe(f(r5, "." + t5), function(e10) {
              n(e10, t5);
            });
            return r5.innerHTML;
          }
          function er() {
            var e9 = Zt();
            var t5 = Jt || location.pathname + location.search;
            var r5;
            try {
              r5 = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
            } catch (e10) {
              r5 = re().querySelector('[hx-history="false"],[data-hx-history="false"]');
            }
            if (!r5) {
              ce(re().body, "htmx:beforeHistorySave", { path: t5, historyElt: e9 });
              Kt(t5, Qt(e9), re().title, window.scrollY);
            }
            if (Q.config.historyEnabled) history.replaceState({ htmx: true }, re().title, window.location.href);
          }
          function tr(e9) {
            if (Q.config.getCacheBusterParam) {
              e9 = e9.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
              if (G(e9, "&") || G(e9, "?")) {
                e9 = e9.slice(0, -1);
              }
            }
            if (Q.config.historyEnabled) {
              history.pushState({ htmx: true }, "", e9);
            }
            Jt = e9;
          }
          function rr(e9) {
            if (Q.config.historyEnabled) history.replaceState({ htmx: true }, "", e9);
            Jt = e9;
          }
          function nr(e9) {
            oe(e9, function(e10) {
              e10.call();
            });
          }
          function ir(a4) {
            var e9 = new XMLHttpRequest();
            var o8 = { path: a4, xhr: e9 };
            ce(re().body, "htmx:historyCacheMiss", o8);
            e9.open("GET", a4, true);
            e9.setRequestHeader("HX-Request", "true");
            e9.setRequestHeader("HX-History-Restore-Request", "true");
            e9.setRequestHeader("HX-Current-URL", re().location.href);
            e9.onload = function() {
              if (this.status >= 200 && this.status < 400) {
                ce(re().body, "htmx:historyCacheMissLoad", o8);
                var e10 = l(this.response);
                e10 = e10.querySelector("[hx-history-elt],[data-hx-history-elt]") || e10;
                var t5 = Zt();
                var r5 = T(t5);
                var n9 = Ve(this.response);
                if (n9) {
                  var i8 = C("title");
                  if (i8) {
                    i8.innerHTML = n9;
                  } else {
                    window.document.title = n9;
                  }
                }
                Ue(t5, e10, r5);
                nr(r5.tasks);
                Jt = a4;
                ce(re().body, "htmx:historyRestore", { path: a4, cacheMiss: true, serverResponse: this.response });
              } else {
                fe(re().body, "htmx:historyCacheMissLoadError", o8);
              }
            };
            e9.send();
          }
          function ar(e9) {
            er();
            e9 = e9 || location.pathname + location.search;
            var t5 = Yt(e9);
            if (t5) {
              var r5 = l(t5.content);
              var n9 = Zt();
              var i8 = T(n9);
              Ue(n9, r5, i8);
              nr(i8.tasks);
              document.title = t5.title;
              setTimeout(function() {
                window.scrollTo(0, t5.scroll);
              }, 0);
              Jt = e9;
              ce(re().body, "htmx:historyRestore", { path: e9, item: t5 });
            } else {
              if (Q.config.refreshOnHistoryMiss) {
                window.location.reload(true);
              } else {
                ir(e9);
              }
            }
          }
          function or(e9) {
            var t5 = me(e9, "hx-indicator");
            if (t5 == null) {
              t5 = [e9];
            }
            oe(t5, function(e10) {
              var t6 = ae(e10);
              t6.requestCount = (t6.requestCount || 0) + 1;
              e10.classList["add"].call(e10.classList, Q.config.requestClass);
            });
            return t5;
          }
          function sr(e9) {
            var t5 = me(e9, "hx-disabled-elt");
            if (t5 == null) {
              t5 = [];
            }
            oe(t5, function(e10) {
              var t6 = ae(e10);
              t6.requestCount = (t6.requestCount || 0) + 1;
              e10.setAttribute("disabled", "");
            });
            return t5;
          }
          function lr(e9, t5) {
            oe(e9, function(e10) {
              var t6 = ae(e10);
              t6.requestCount = (t6.requestCount || 0) - 1;
              if (t6.requestCount === 0) {
                e10.classList["remove"].call(e10.classList, Q.config.requestClass);
              }
            });
            oe(t5, function(e10) {
              var t6 = ae(e10);
              t6.requestCount = (t6.requestCount || 0) - 1;
              if (t6.requestCount === 0) {
                e10.removeAttribute("disabled");
              }
            });
          }
          function ur(e9, t5) {
            for (var r5 = 0; r5 < e9.length; r5++) {
              var n9 = e9[r5];
              if (n9.isSameNode(t5)) {
                return true;
              }
            }
            return false;
          }
          function fr(e9) {
            if (e9.name === "" || e9.name == null || e9.disabled || v(e9, "fieldset[disabled]")) {
              return false;
            }
            if (e9.type === "button" || e9.type === "submit" || e9.tagName === "image" || e9.tagName === "reset" || e9.tagName === "file") {
              return false;
            }
            if (e9.type === "checkbox" || e9.type === "radio") {
              return e9.checked;
            }
            return true;
          }
          function cr(e9, t5, r5) {
            if (e9 != null && t5 != null) {
              var n9 = r5[e9];
              if (n9 === void 0) {
                r5[e9] = t5;
              } else if (Array.isArray(n9)) {
                if (Array.isArray(t5)) {
                  r5[e9] = n9.concat(t5);
                } else {
                  n9.push(t5);
                }
              } else {
                if (Array.isArray(t5)) {
                  r5[e9] = [n9].concat(t5);
                } else {
                  r5[e9] = [n9, t5];
                }
              }
            }
          }
          function hr(t5, r5, n9, e9, i8) {
            if (e9 == null || ur(t5, e9)) {
              return;
            } else {
              t5.push(e9);
            }
            if (fr(e9)) {
              var a4 = ee(e9, "name");
              var o8 = e9.value;
              if (e9.multiple && e9.tagName === "SELECT") {
                o8 = M(e9.querySelectorAll("option:checked")).map(function(e10) {
                  return e10.value;
                });
              }
              if (e9.files) {
                o8 = M(e9.files);
              }
              cr(a4, o8, r5);
              if (i8) {
                vr(e9, n9);
              }
            }
            if (h(e9, "form")) {
              var s6 = e9.elements;
              oe(s6, function(e10) {
                hr(t5, r5, n9, e10, i8);
              });
            }
          }
          function vr(e9, t5) {
            if (e9.willValidate) {
              ce(e9, "htmx:validation:validate");
              if (!e9.checkValidity()) {
                t5.push({ elt: e9, message: e9.validationMessage, validity: e9.validity });
                ce(e9, "htmx:validation:failed", { message: e9.validationMessage, validity: e9.validity });
              }
            }
          }
          function dr(e9, t5) {
            var r5 = [];
            var n9 = {};
            var i8 = {};
            var a4 = [];
            var o8 = ae(e9);
            if (o8.lastButtonClicked && !se(o8.lastButtonClicked)) {
              o8.lastButtonClicked = null;
            }
            var s6 = h(e9, "form") && e9.noValidate !== true || te(e9, "hx-validate") === "true";
            if (o8.lastButtonClicked) {
              s6 = s6 && o8.lastButtonClicked.formNoValidate !== true;
            }
            if (t5 !== "get") {
              hr(r5, i8, a4, v(e9, "form"), s6);
            }
            hr(r5, n9, a4, e9, s6);
            if (o8.lastButtonClicked || e9.tagName === "BUTTON" || e9.tagName === "INPUT" && ee(e9, "type") === "submit") {
              var l7 = o8.lastButtonClicked || e9;
              var u4 = ee(l7, "name");
              cr(u4, l7.value, i8);
            }
            var f3 = me(e9, "hx-include");
            oe(f3, function(e10) {
              hr(r5, n9, a4, e10, s6);
              if (!h(e10, "form")) {
                oe(e10.querySelectorAll(rt), function(e11) {
                  hr(r5, n9, a4, e11, s6);
                });
              }
            });
            n9 = le(n9, i8);
            return { errors: a4, values: n9 };
          }
          function gr(e9, t5, r5) {
            if (e9 !== "") {
              e9 += "&";
            }
            if (String(r5) === "[object Object]") {
              r5 = JSON.stringify(r5);
            }
            var n9 = encodeURIComponent(r5);
            e9 += encodeURIComponent(t5) + "=" + n9;
            return e9;
          }
          function pr(e9) {
            var t5 = "";
            for (var r5 in e9) {
              if (e9.hasOwnProperty(r5)) {
                var n9 = e9[r5];
                if (Array.isArray(n9)) {
                  oe(n9, function(e10) {
                    t5 = gr(t5, r5, e10);
                  });
                } else {
                  t5 = gr(t5, r5, n9);
                }
              }
            }
            return t5;
          }
          function mr(e9) {
            var t5 = new FormData();
            for (var r5 in e9) {
              if (e9.hasOwnProperty(r5)) {
                var n9 = e9[r5];
                if (Array.isArray(n9)) {
                  oe(n9, function(e10) {
                    t5.append(r5, e10);
                  });
                } else {
                  t5.append(r5, n9);
                }
              }
            }
            return t5;
          }
          function xr(e9, t5, r5) {
            var n9 = { "HX-Request": "true", "HX-Trigger": ee(e9, "id"), "HX-Trigger-Name": ee(e9, "name"), "HX-Target": te(t5, "id"), "HX-Current-URL": re().location.href };
            Rr(e9, "hx-headers", false, n9);
            if (r5 !== void 0) {
              n9["HX-Prompt"] = r5;
            }
            if (ae(e9).boosted) {
              n9["HX-Boosted"] = "true";
            }
            return n9;
          }
          function yr(t5, e9) {
            var r5 = ne(e9, "hx-params");
            if (r5) {
              if (r5 === "none") {
                return {};
              } else if (r5 === "*") {
                return t5;
              } else if (r5.indexOf("not ") === 0) {
                oe(r5.substr(4).split(","), function(e10) {
                  e10 = e10.trim();
                  delete t5[e10];
                });
                return t5;
              } else {
                var n9 = {};
                oe(r5.split(","), function(e10) {
                  e10 = e10.trim();
                  n9[e10] = t5[e10];
                });
                return n9;
              }
            } else {
              return t5;
            }
          }
          function br(e9) {
            return ee(e9, "href") && ee(e9, "href").indexOf("#") >= 0;
          }
          function wr(e9, t5) {
            var r5 = t5 ? t5 : ne(e9, "hx-swap");
            var n9 = { swapStyle: ae(e9).boosted ? "innerHTML" : Q.config.defaultSwapStyle, swapDelay: Q.config.defaultSwapDelay, settleDelay: Q.config.defaultSettleDelay };
            if (Q.config.scrollIntoViewOnBoost && ae(e9).boosted && !br(e9)) {
              n9["show"] = "top";
            }
            if (r5) {
              var i8 = D(r5);
              if (i8.length > 0) {
                for (var a4 = 0; a4 < i8.length; a4++) {
                  var o8 = i8[a4];
                  if (o8.indexOf("swap:") === 0) {
                    n9["swapDelay"] = d(o8.substr(5));
                  } else if (o8.indexOf("settle:") === 0) {
                    n9["settleDelay"] = d(o8.substr(7));
                  } else if (o8.indexOf("transition:") === 0) {
                    n9["transition"] = o8.substr(11) === "true";
                  } else if (o8.indexOf("ignoreTitle:") === 0) {
                    n9["ignoreTitle"] = o8.substr(12) === "true";
                  } else if (o8.indexOf("scroll:") === 0) {
                    var s6 = o8.substr(7);
                    var l7 = s6.split(":");
                    var u4 = l7.pop();
                    var f3 = l7.length > 0 ? l7.join(":") : null;
                    n9["scroll"] = u4;
                    n9["scrollTarget"] = f3;
                  } else if (o8.indexOf("show:") === 0) {
                    var c4 = o8.substr(5);
                    var l7 = c4.split(":");
                    var h4 = l7.pop();
                    var f3 = l7.length > 0 ? l7.join(":") : null;
                    n9["show"] = h4;
                    n9["showTarget"] = f3;
                  } else if (o8.indexOf("focus-scroll:") === 0) {
                    var v3 = o8.substr("focus-scroll:".length);
                    n9["focusScroll"] = v3 == "true";
                  } else if (a4 == 0) {
                    n9["swapStyle"] = o8;
                  } else {
                    b("Unknown modifier in hx-swap: " + o8);
                  }
                }
              }
            }
            return n9;
          }
          function Sr(e9) {
            return ne(e9, "hx-encoding") === "multipart/form-data" || h(e9, "form") && ee(e9, "enctype") === "multipart/form-data";
          }
          function Er(t5, r5, n9) {
            var i8 = null;
            R(r5, function(e9) {
              if (i8 == null) {
                i8 = e9.encodeParameters(t5, n9, r5);
              }
            });
            if (i8 != null) {
              return i8;
            } else {
              if (Sr(r5)) {
                return mr(n9);
              } else {
                return pr(n9);
              }
            }
          }
          function T(e9) {
            return { tasks: [], elts: [e9] };
          }
          function Cr(e9, t5) {
            var r5 = e9[0];
            var n9 = e9[e9.length - 1];
            if (t5.scroll) {
              var i8 = null;
              if (t5.scrollTarget) {
                i8 = ue(r5, t5.scrollTarget);
              }
              if (t5.scroll === "top" && (r5 || i8)) {
                i8 = i8 || r5;
                i8.scrollTop = 0;
              }
              if (t5.scroll === "bottom" && (n9 || i8)) {
                i8 = i8 || n9;
                i8.scrollTop = i8.scrollHeight;
              }
            }
            if (t5.show) {
              var i8 = null;
              if (t5.showTarget) {
                var a4 = t5.showTarget;
                if (t5.showTarget === "window") {
                  a4 = "body";
                }
                i8 = ue(r5, a4);
              }
              if (t5.show === "top" && (r5 || i8)) {
                i8 = i8 || r5;
                i8.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior });
              }
              if (t5.show === "bottom" && (n9 || i8)) {
                i8 = i8 || n9;
                i8.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior });
              }
            }
          }
          function Rr(e9, t5, r5, n9) {
            if (n9 == null) {
              n9 = {};
            }
            if (e9 == null) {
              return n9;
            }
            var i8 = te(e9, t5);
            if (i8) {
              var a4 = i8.trim();
              var o8 = r5;
              if (a4 === "unset") {
                return null;
              }
              if (a4.indexOf("javascript:") === 0) {
                a4 = a4.substr(11);
                o8 = true;
              } else if (a4.indexOf("js:") === 0) {
                a4 = a4.substr(3);
                o8 = true;
              }
              if (a4.indexOf("{") !== 0) {
                a4 = "{" + a4 + "}";
              }
              var s6;
              if (o8) {
                s6 = Tr(e9, function() {
                  return Function("return (" + a4 + ")")();
                }, {});
              } else {
                s6 = E(a4);
              }
              for (var l7 in s6) {
                if (s6.hasOwnProperty(l7)) {
                  if (n9[l7] == null) {
                    n9[l7] = s6[l7];
                  }
                }
              }
            }
            return Rr(u(e9), t5, r5, n9);
          }
          function Tr(e9, t5, r5) {
            if (Q.config.allowEval) {
              return t5();
            } else {
              fe(e9, "htmx:evalDisallowedError");
              return r5;
            }
          }
          function Or(e9, t5) {
            return Rr(e9, "hx-vars", true, t5);
          }
          function qr(e9, t5) {
            return Rr(e9, "hx-vals", false, t5);
          }
          function Hr(e9) {
            return le(Or(e9), qr(e9));
          }
          function Lr(t5, r5, n9) {
            if (n9 !== null) {
              try {
                t5.setRequestHeader(r5, n9);
              } catch (e9) {
                t5.setRequestHeader(r5, encodeURIComponent(n9));
                t5.setRequestHeader(r5 + "-URI-AutoEncoded", "true");
              }
            }
          }
          function Ar(t5) {
            if (t5.responseURL && typeof URL !== "undefined") {
              try {
                var e9 = new URL(t5.responseURL);
                return e9.pathname + e9.search;
              } catch (e10) {
                fe(re().body, "htmx:badResponseUrl", { url: t5.responseURL });
              }
            }
          }
          function O(e9, t5) {
            return t5.test(e9.getAllResponseHeaders());
          }
          function Nr(e9, t5, r5) {
            e9 = e9.toLowerCase();
            if (r5) {
              if (r5 instanceof Element || I(r5, "String")) {
                return he(e9, t5, null, null, { targetOverride: p(r5), returnPromise: true });
              } else {
                return he(e9, t5, p(r5.source), r5.event, { handler: r5.handler, headers: r5.headers, values: r5.values, targetOverride: p(r5.target), swapOverride: r5.swap, select: r5.select, returnPromise: true });
              }
            } else {
              return he(e9, t5, null, null, { returnPromise: true });
            }
          }
          function Ir(e9) {
            var t5 = [];
            while (e9) {
              t5.push(e9);
              e9 = e9.parentElement;
            }
            return t5;
          }
          function kr(e9, t5, r5) {
            var n9;
            var i8;
            if (typeof URL === "function") {
              i8 = new URL(t5, document.location.href);
              var a4 = document.location.origin;
              n9 = a4 === i8.origin;
            } else {
              i8 = t5;
              n9 = g(t5, document.location.origin);
            }
            if (Q.config.selfRequestsOnly) {
              if (!n9) {
                return false;
              }
            }
            return ce(e9, "htmx:validateUrl", le({ url: i8, sameHost: n9 }, r5));
          }
          function he(t5, r5, n9, i8, a4, e9) {
            var o8 = null;
            var s6 = null;
            a4 = a4 != null ? a4 : {};
            if (a4.returnPromise && typeof Promise !== "undefined") {
              var l7 = new Promise(function(e10, t6) {
                o8 = e10;
                s6 = t6;
              });
            }
            if (n9 == null) {
              n9 = re().body;
            }
            var M3 = a4.handler || Mr;
            var X2 = a4.select || null;
            if (!se(n9)) {
              ie(o8);
              return l7;
            }
            var u4 = a4.targetOverride || ye(n9);
            if (u4 == null || u4 == pe) {
              fe(n9, "htmx:targetError", { target: te(n9, "hx-target") });
              ie(s6);
              return l7;
            }
            var f3 = ae(n9);
            var c4 = f3.lastButtonClicked;
            if (c4) {
              var h4 = ee(c4, "formaction");
              if (h4 != null) {
                r5 = h4;
              }
              var v3 = ee(c4, "formmethod");
              if (v3 != null) {
                if (v3.toLowerCase() !== "dialog") {
                  t5 = v3;
                }
              }
            }
            var d4 = ne(n9, "hx-confirm");
            if (e9 === void 0) {
              var D3 = function(e10) {
                return he(t5, r5, n9, i8, a4, !!e10);
              };
              var U2 = { target: u4, elt: n9, path: r5, verb: t5, triggeringEvent: i8, etc: a4, issueRequest: D3, question: d4 };
              if (ce(n9, "htmx:confirm", U2) === false) {
                ie(o8);
                return l7;
              }
            }
            var g3 = n9;
            var p3 = ne(n9, "hx-sync");
            var m3 = null;
            var x3 = false;
            if (p3) {
              var B3 = p3.split(":");
              var F2 = B3[0].trim();
              if (F2 === "this") {
                g3 = xe(n9, "hx-sync");
              } else {
                g3 = ue(n9, F2);
              }
              p3 = (B3[1] || "drop").trim();
              f3 = ae(g3);
              if (p3 === "drop" && f3.xhr && f3.abortable !== true) {
                ie(o8);
                return l7;
              } else if (p3 === "abort") {
                if (f3.xhr) {
                  ie(o8);
                  return l7;
                } else {
                  x3 = true;
                }
              } else if (p3 === "replace") {
                ce(g3, "htmx:abort");
              } else if (p3.indexOf("queue") === 0) {
                var V3 = p3.split(" ");
                m3 = (V3[1] || "last").trim();
              }
            }
            if (f3.xhr) {
              if (f3.abortable) {
                ce(g3, "htmx:abort");
              } else {
                if (m3 == null) {
                  if (i8) {
                    var y3 = ae(i8);
                    if (y3 && y3.triggerSpec && y3.triggerSpec.queue) {
                      m3 = y3.triggerSpec.queue;
                    }
                  }
                  if (m3 == null) {
                    m3 = "last";
                  }
                }
                if (f3.queuedRequests == null) {
                  f3.queuedRequests = [];
                }
                if (m3 === "first" && f3.queuedRequests.length === 0) {
                  f3.queuedRequests.push(function() {
                    he(t5, r5, n9, i8, a4);
                  });
                } else if (m3 === "all") {
                  f3.queuedRequests.push(function() {
                    he(t5, r5, n9, i8, a4);
                  });
                } else if (m3 === "last") {
                  f3.queuedRequests = [];
                  f3.queuedRequests.push(function() {
                    he(t5, r5, n9, i8, a4);
                  });
                }
                ie(o8);
                return l7;
              }
            }
            var b3 = new XMLHttpRequest();
            f3.xhr = b3;
            f3.abortable = x3;
            var w3 = function() {
              f3.xhr = null;
              f3.abortable = false;
              if (f3.queuedRequests != null && f3.queuedRequests.length > 0) {
                var e10 = f3.queuedRequests.shift();
                e10();
              }
            };
            var j2 = ne(n9, "hx-prompt");
            if (j2) {
              var S4 = prompt(j2);
              if (S4 === null || !ce(n9, "htmx:prompt", { prompt: S4, target: u4 })) {
                ie(o8);
                w3();
                return l7;
              }
            }
            if (d4 && !e9) {
              if (!confirm(d4)) {
                ie(o8);
                w3();
                return l7;
              }
            }
            var E3 = xr(n9, u4, S4);
            if (t5 !== "get" && !Sr(n9)) {
              E3["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if (a4.headers) {
              E3 = le(E3, a4.headers);
            }
            var _3 = dr(n9, t5);
            var C3 = _3.errors;
            var R3 = _3.values;
            if (a4.values) {
              R3 = le(R3, a4.values);
            }
            var z3 = Hr(n9);
            var $3 = le(R3, z3);
            var T3 = yr($3, n9);
            if (Q.config.getCacheBusterParam && t5 === "get") {
              T3["org.htmx.cache-buster"] = ee(u4, "id") || "true";
            }
            if (r5 == null || r5 === "") {
              r5 = re().location.href;
            }
            var O2 = Rr(n9, "hx-request");
            var W2 = ae(n9).boosted;
            var q2 = Q.config.methodsThatUseUrlParams.indexOf(t5) >= 0;
            var H3 = { boosted: W2, useUrlParams: q2, parameters: T3, unfilteredParameters: $3, headers: E3, target: u4, verb: t5, errors: C3, withCredentials: a4.credentials || O2.credentials || Q.config.withCredentials, timeout: a4.timeout || O2.timeout || Q.config.timeout, path: r5, triggeringEvent: i8 };
            if (!ce(n9, "htmx:configRequest", H3)) {
              ie(o8);
              w3();
              return l7;
            }
            r5 = H3.path;
            t5 = H3.verb;
            E3 = H3.headers;
            T3 = H3.parameters;
            C3 = H3.errors;
            q2 = H3.useUrlParams;
            if (C3 && C3.length > 0) {
              ce(n9, "htmx:validation:halted", H3);
              ie(o8);
              w3();
              return l7;
            }
            var G2 = r5.split("#");
            var J2 = G2[0];
            var L3 = G2[1];
            var A3 = r5;
            if (q2) {
              A3 = J2;
              var Z3 = Object.keys(T3).length !== 0;
              if (Z3) {
                if (A3.indexOf("?") < 0) {
                  A3 += "?";
                } else {
                  A3 += "&";
                }
                A3 += pr(T3);
                if (L3) {
                  A3 += "#" + L3;
                }
              }
            }
            if (!kr(n9, A3, H3)) {
              fe(n9, "htmx:invalidPath", H3);
              ie(s6);
              return l7;
            }
            b3.open(t5.toUpperCase(), A3, true);
            b3.overrideMimeType("text/html");
            b3.withCredentials = H3.withCredentials;
            b3.timeout = H3.timeout;
            if (O2.noHeaders) {
            } else {
              for (var N3 in E3) {
                if (E3.hasOwnProperty(N3)) {
                  var K2 = E3[N3];
                  Lr(b3, N3, K2);
                }
              }
            }
            var I3 = { xhr: b3, target: u4, requestConfig: H3, etc: a4, boosted: W2, select: X2, pathInfo: { requestPath: r5, finalRequestPath: A3, anchor: L3 } };
            b3.onload = function() {
              try {
                var e10 = Ir(n9);
                I3.pathInfo.responsePath = Ar(b3);
                M3(n9, I3);
                lr(k3, P3);
                ce(n9, "htmx:afterRequest", I3);
                ce(n9, "htmx:afterOnLoad", I3);
                if (!se(n9)) {
                  var t6 = null;
                  while (e10.length > 0 && t6 == null) {
                    var r6 = e10.shift();
                    if (se(r6)) {
                      t6 = r6;
                    }
                  }
                  if (t6) {
                    ce(t6, "htmx:afterRequest", I3);
                    ce(t6, "htmx:afterOnLoad", I3);
                  }
                }
                ie(o8);
                w3();
              } catch (e11) {
                fe(n9, "htmx:onLoadError", le({ error: e11 }, I3));
                throw e11;
              }
            };
            b3.onerror = function() {
              lr(k3, P3);
              fe(n9, "htmx:afterRequest", I3);
              fe(n9, "htmx:sendError", I3);
              ie(s6);
              w3();
            };
            b3.onabort = function() {
              lr(k3, P3);
              fe(n9, "htmx:afterRequest", I3);
              fe(n9, "htmx:sendAbort", I3);
              ie(s6);
              w3();
            };
            b3.ontimeout = function() {
              lr(k3, P3);
              fe(n9, "htmx:afterRequest", I3);
              fe(n9, "htmx:timeout", I3);
              ie(s6);
              w3();
            };
            if (!ce(n9, "htmx:beforeRequest", I3)) {
              ie(o8);
              w3();
              return l7;
            }
            var k3 = or(n9);
            var P3 = sr(n9);
            oe(["loadstart", "loadend", "progress", "abort"], function(t6) {
              oe([b3, b3.upload], function(e10) {
                e10.addEventListener(t6, function(e11) {
                  ce(n9, "htmx:xhr:" + t6, { lengthComputable: e11.lengthComputable, loaded: e11.loaded, total: e11.total });
                });
              });
            });
            ce(n9, "htmx:beforeSend", I3);
            var Y2 = q2 ? null : Er(b3, n9, T3);
            b3.send(Y2);
            return l7;
          }
          function Pr(e9, t5) {
            var r5 = t5.xhr;
            var n9 = null;
            var i8 = null;
            if (O(r5, /HX-Push:/i)) {
              n9 = r5.getResponseHeader("HX-Push");
              i8 = "push";
            } else if (O(r5, /HX-Push-Url:/i)) {
              n9 = r5.getResponseHeader("HX-Push-Url");
              i8 = "push";
            } else if (O(r5, /HX-Replace-Url:/i)) {
              n9 = r5.getResponseHeader("HX-Replace-Url");
              i8 = "replace";
            }
            if (n9) {
              if (n9 === "false") {
                return {};
              } else {
                return { type: i8, path: n9 };
              }
            }
            var a4 = t5.pathInfo.finalRequestPath;
            var o8 = t5.pathInfo.responsePath;
            var s6 = ne(e9, "hx-push-url");
            var l7 = ne(e9, "hx-replace-url");
            var u4 = ae(e9).boosted;
            var f3 = null;
            var c4 = null;
            if (s6) {
              f3 = "push";
              c4 = s6;
            } else if (l7) {
              f3 = "replace";
              c4 = l7;
            } else if (u4) {
              f3 = "push";
              c4 = o8 || a4;
            }
            if (c4) {
              if (c4 === "false") {
                return {};
              }
              if (c4 === "true") {
                c4 = o8 || a4;
              }
              if (t5.pathInfo.anchor && c4.indexOf("#") === -1) {
                c4 = c4 + "#" + t5.pathInfo.anchor;
              }
              return { type: f3, path: c4 };
            } else {
              return {};
            }
          }
          function Mr(l7, u4) {
            var f3 = u4.xhr;
            var c4 = u4.target;
            var e9 = u4.etc;
            var t5 = u4.requestConfig;
            var h4 = u4.select;
            if (!ce(l7, "htmx:beforeOnLoad", u4)) return;
            if (O(f3, /HX-Trigger:/i)) {
              _e(f3, "HX-Trigger", l7);
            }
            if (O(f3, /HX-Location:/i)) {
              er();
              var r5 = f3.getResponseHeader("HX-Location");
              var v3;
              if (r5.indexOf("{") === 0) {
                v3 = E(r5);
                r5 = v3["path"];
                delete v3["path"];
              }
              Nr("GET", r5, v3).then(function() {
                tr(r5);
              });
              return;
            }
            var n9 = O(f3, /HX-Refresh:/i) && "true" === f3.getResponseHeader("HX-Refresh");
            if (O(f3, /HX-Redirect:/i)) {
              location.href = f3.getResponseHeader("HX-Redirect");
              n9 && location.reload();
              return;
            }
            if (n9) {
              location.reload();
              return;
            }
            if (O(f3, /HX-Retarget:/i)) {
              if (f3.getResponseHeader("HX-Retarget") === "this") {
                u4.target = l7;
              } else {
                u4.target = ue(l7, f3.getResponseHeader("HX-Retarget"));
              }
            }
            var d4 = Pr(l7, u4);
            var i8 = f3.status >= 200 && f3.status < 400 && f3.status !== 204;
            var g3 = f3.response;
            var a4 = f3.status >= 400;
            var p3 = Q.config.ignoreTitle;
            var o8 = le({ shouldSwap: i8, serverResponse: g3, isError: a4, ignoreTitle: p3 }, u4);
            if (!ce(c4, "htmx:beforeSwap", o8)) return;
            c4 = o8.target;
            g3 = o8.serverResponse;
            a4 = o8.isError;
            p3 = o8.ignoreTitle;
            u4.target = c4;
            u4.failed = a4;
            u4.successful = !a4;
            if (o8.shouldSwap) {
              if (f3.status === 286) {
                at(l7);
              }
              R(l7, function(e10) {
                g3 = e10.transformResponse(g3, f3, l7);
              });
              if (d4.type) {
                er();
              }
              var s6 = e9.swapOverride;
              if (O(f3, /HX-Reswap:/i)) {
                s6 = f3.getResponseHeader("HX-Reswap");
              }
              var v3 = wr(l7, s6);
              if (v3.hasOwnProperty("ignoreTitle")) {
                p3 = v3.ignoreTitle;
              }
              c4.classList.add(Q.config.swappingClass);
              var m3 = null;
              var x3 = null;
              var y3 = function() {
                try {
                  var e10 = document.activeElement;
                  var t6 = {};
                  try {
                    t6 = { elt: e10, start: e10 ? e10.selectionStart : null, end: e10 ? e10.selectionEnd : null };
                  } catch (e11) {
                  }
                  var r6;
                  if (h4) {
                    r6 = h4;
                  }
                  if (O(f3, /HX-Reselect:/i)) {
                    r6 = f3.getResponseHeader("HX-Reselect");
                  }
                  if (d4.type) {
                    ce(re().body, "htmx:beforeHistoryUpdate", le({ history: d4 }, u4));
                    if (d4.type === "push") {
                      tr(d4.path);
                      ce(re().body, "htmx:pushedIntoHistory", { path: d4.path });
                    } else {
                      rr(d4.path);
                      ce(re().body, "htmx:replacedInHistory", { path: d4.path });
                    }
                  }
                  var n10 = T(c4);
                  je(v3.swapStyle, c4, l7, g3, n10, r6);
                  if (t6.elt && !se(t6.elt) && ee(t6.elt, "id")) {
                    var i9 = document.getElementById(ee(t6.elt, "id"));
                    var a5 = { preventScroll: v3.focusScroll !== void 0 ? !v3.focusScroll : !Q.config.defaultFocusScroll };
                    if (i9) {
                      if (t6.start && i9.setSelectionRange) {
                        try {
                          i9.setSelectionRange(t6.start, t6.end);
                        } catch (e11) {
                        }
                      }
                      i9.focus(a5);
                    }
                  }
                  c4.classList.remove(Q.config.swappingClass);
                  oe(n10.elts, function(e11) {
                    if (e11.classList) {
                      e11.classList.add(Q.config.settlingClass);
                    }
                    ce(e11, "htmx:afterSwap", u4);
                  });
                  if (O(f3, /HX-Trigger-After-Swap:/i)) {
                    var o9 = l7;
                    if (!se(l7)) {
                      o9 = re().body;
                    }
                    _e(f3, "HX-Trigger-After-Swap", o9);
                  }
                  var s7 = function() {
                    oe(n10.tasks, function(e12) {
                      e12.call();
                    });
                    oe(n10.elts, function(e12) {
                      if (e12.classList) {
                        e12.classList.remove(Q.config.settlingClass);
                      }
                      ce(e12, "htmx:afterSettle", u4);
                    });
                    if (u4.pathInfo.anchor) {
                      var e11 = re().getElementById(u4.pathInfo.anchor);
                      if (e11) {
                        e11.scrollIntoView({ block: "start", behavior: "auto" });
                      }
                    }
                    if (n10.title && !p3) {
                      var t7 = C("title");
                      if (t7) {
                        t7.innerHTML = n10.title;
                      } else {
                        window.document.title = n10.title;
                      }
                    }
                    Cr(n10.elts, v3);
                    if (O(f3, /HX-Trigger-After-Settle:/i)) {
                      var r7 = l7;
                      if (!se(l7)) {
                        r7 = re().body;
                      }
                      _e(f3, "HX-Trigger-After-Settle", r7);
                    }
                    ie(m3);
                  };
                  if (v3.settleDelay > 0) {
                    setTimeout(s7, v3.settleDelay);
                  } else {
                    s7();
                  }
                } catch (e11) {
                  fe(l7, "htmx:swapError", u4);
                  ie(x3);
                  throw e11;
                }
              };
              var b3 = Q.config.globalViewTransitions;
              if (v3.hasOwnProperty("transition")) {
                b3 = v3.transition;
              }
              if (b3 && ce(l7, "htmx:beforeTransition", u4) && typeof Promise !== "undefined" && document.startViewTransition) {
                var w3 = new Promise(function(e10, t6) {
                  m3 = e10;
                  x3 = t6;
                });
                var S4 = y3;
                y3 = function() {
                  document.startViewTransition(function() {
                    S4();
                    return w3;
                  });
                };
              }
              if (v3.swapDelay > 0) {
                setTimeout(y3, v3.swapDelay);
              } else {
                y3();
              }
            }
            if (a4) {
              fe(l7, "htmx:responseError", le({ error: "Response Status Error Code " + f3.status + " from " + u4.pathInfo.requestPath }, u4));
            }
          }
          var Xr = {};
          function Dr() {
            return { init: function(e9) {
              return null;
            }, onEvent: function(e9, t5) {
              return true;
            }, transformResponse: function(e9, t5, r5) {
              return e9;
            }, isInlineSwap: function(e9) {
              return false;
            }, handleSwap: function(e9, t5, r5, n9) {
              return false;
            }, encodeParameters: function(e9, t5, r5) {
              return null;
            } };
          }
          function Ur(e9, t5) {
            if (t5.init) {
              t5.init(r);
            }
            Xr[e9] = le(Dr(), t5);
          }
          function Br(e9) {
            delete Xr[e9];
          }
          function Fr(e9, r5, n9) {
            if (e9 == void 0) {
              return r5;
            }
            if (r5 == void 0) {
              r5 = [];
            }
            if (n9 == void 0) {
              n9 = [];
            }
            var t5 = te(e9, "hx-ext");
            if (t5) {
              oe(t5.split(","), function(e10) {
                e10 = e10.replace(/ /g, "");
                if (e10.slice(0, 7) == "ignore:") {
                  n9.push(e10.slice(7));
                  return;
                }
                if (n9.indexOf(e10) < 0) {
                  var t6 = Xr[e10];
                  if (t6 && r5.indexOf(t6) < 0) {
                    r5.push(t6);
                  }
                }
              });
            }
            return Fr(u(e9), r5, n9);
          }
          var Vr = false;
          re().addEventListener("DOMContentLoaded", function() {
            Vr = true;
          });
          function jr(e9) {
            if (Vr || re().readyState === "complete") {
              e9();
            } else {
              re().addEventListener("DOMContentLoaded", e9);
            }
          }
          function _r() {
            if (Q.config.includeIndicatorStyles !== false) {
              re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>");
            }
          }
          function zr() {
            var e9 = re().querySelector('meta[name="htmx-config"]');
            if (e9) {
              return E(e9.content);
            } else {
              return null;
            }
          }
          function $r() {
            var e9 = zr();
            if (e9) {
              Q.config = le(Q.config, e9);
            }
          }
          jr(function() {
            $r();
            _r();
            var e9 = re().body;
            zt(e9);
            var t5 = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
            e9.addEventListener("htmx:abort", function(e10) {
              var t6 = e10.target;
              var r6 = ae(t6);
              if (r6 && r6.xhr) {
                r6.xhr.abort();
              }
            });
            const r5 = window.onpopstate ? window.onpopstate.bind(window) : null;
            window.onpopstate = function(e10) {
              if (e10.state && e10.state.htmx) {
                ar();
                oe(t5, function(e11) {
                  ce(e11, "htmx:restored", { document: re(), triggerEvent: ce });
                });
              } else {
                if (r5) {
                  r5(e10);
                }
              }
            };
            setTimeout(function() {
              ce(e9, "htmx:load", {});
              e9 = null;
            }, 0);
          });
          return Q;
        }();
      });
    }
  });

  // static/script/src/scripts.js
  var scripts_exports = {};
  __export(scripts_exports, {
    COLUMNS: () => COLUMNS,
    ChessBoardElement: () => ChessBoardElement,
    START_FEN: () => START_FEN,
    START_POSITION: () => START_POSITION,
    blackPieces: () => blackPieces,
    calculatePositionFromMoves: () => calculatePositionFromMoves,
    fenToObj: () => fenToObj,
    findClosestPiece: () => findClosestPiece,
    getSquareColor: () => getSquareColor,
    normalizePozition: () => normalizePozition,
    objToFen: () => objToFen,
    renderWikipediaSVGPiece: () => renderPiece,
    validFen: () => validFen,
    validMove: () => validMove,
    validPieceCode: () => validPieceCode,
    validPositionObject: () => validPositionObject,
    validSquare: () => validSquare,
    whitePieces: () => whitePieces
  });
  __reExport(scripts_exports, __toESM(require_htmx_min()));

  // node_modules/@lit/reactive-element/css-tag.js
  var t2 = window;
  var e2 = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s2 = Symbol();
  var n2 = /* @__PURE__ */ new WeakMap();
  var o2 = class {
    constructor(t5, e9, n9) {
      if (this._$cssResult$ = true, n9 !== s2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = e9;
    }
    get styleSheet() {
      let t5 = this.o;
      const s6 = this.t;
      if (e2 && void 0 === t5) {
        const e9 = void 0 !== s6 && 1 === s6.length;
        e9 && (t5 = n2.get(s6)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e9 && n2.set(s6, t5));
      }
      return t5;
    }
    toString() {
      return this.cssText;
    }
  };
  var r2 = (t5) => new o2("string" == typeof t5 ? t5 : t5 + "", void 0, s2);
  var i2 = (t5, ...e9) => {
    const n9 = 1 === t5.length ? t5[0] : e9.reduce((e10, s6, n10) => e10 + ((t6) => {
      if (true === t6._$cssResult$) return t6.cssText;
      if ("number" == typeof t6) return t6;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s6) + t5[n10 + 1], t5[0]);
    return new o2(n9, t5, s2);
  };
  var S2 = (s6, n9) => {
    e2 ? s6.adoptedStyleSheets = n9.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n9.forEach((e9) => {
      const n10 = document.createElement("style"), o8 = t2.litNonce;
      void 0 !== o8 && n10.setAttribute("nonce", o8), n10.textContent = e9.cssText, s6.appendChild(n10);
    });
  };
  var c2 = e2 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e9 = "";
    for (const s6 of t6.cssRules) e9 += s6.cssText;
    return r2(e9);
  })(t5) : t5;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s3;
  var e3 = window;
  var r3 = e3.trustedTypes;
  var h2 = r3 ? r3.emptyScript : "";
  var o3 = e3.reactiveElementPolyfillSupport;
  var n3 = { toAttribute(t5, i8) {
    switch (i8) {
      case Boolean:
        t5 = t5 ? h2 : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, i8) {
    let s6 = t5;
    switch (i8) {
      case Boolean:
        s6 = null !== t5;
        break;
      case Number:
        s6 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          s6 = JSON.parse(t5);
        } catch (t6) {
          s6 = null;
        }
    }
    return s6;
  } };
  var a2 = (t5, i8) => i8 !== t5 && (i8 == i8 || t5 == t5);
  var l2 = { attribute: true, type: String, converter: n3, reflect: false, hasChanged: a2 };
  var d2 = "finalized";
  var u2 = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
    }
    static addInitializer(t5) {
      var i8;
      this.finalize(), (null !== (i8 = this.h) && void 0 !== i8 ? i8 : this.h = []).push(t5);
    }
    static get observedAttributes() {
      this.finalize();
      const t5 = [];
      return this.elementProperties.forEach((i8, s6) => {
        const e9 = this._$Ep(s6, i8);
        void 0 !== e9 && (this._$Ev.set(e9, s6), t5.push(e9));
      }), t5;
    }
    static createProperty(t5, i8 = l2) {
      if (i8.state && (i8.attribute = false), this.finalize(), this.elementProperties.set(t5, i8), !i8.noAccessor && !this.prototype.hasOwnProperty(t5)) {
        const s6 = "symbol" == typeof t5 ? Symbol() : "__" + t5, e9 = this.getPropertyDescriptor(t5, s6, i8);
        void 0 !== e9 && Object.defineProperty(this.prototype, t5, e9);
      }
    }
    static getPropertyDescriptor(t5, i8, s6) {
      return { get() {
        return this[i8];
      }, set(e9) {
        const r5 = this[t5];
        this[i8] = e9, this.requestUpdate(t5, r5, s6);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) || l2;
    }
    static finalize() {
      if (this.hasOwnProperty(d2)) return false;
      this[d2] = true;
      const t5 = Object.getPrototypeOf(this);
      if (t5.finalize(), void 0 !== t5.h && (this.h = [...t5.h]), this.elementProperties = new Map(t5.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t6 = this.properties, i8 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
        for (const s6 of i8) this.createProperty(s6, t6[s6]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i8) {
      const s6 = [];
      if (Array.isArray(i8)) {
        const e9 = new Set(i8.flat(1 / 0).reverse());
        for (const i9 of e9) s6.unshift(c2(i9));
      } else void 0 !== i8 && s6.push(c2(i8));
      return s6;
    }
    static _$Ep(t5, i8) {
      const s6 = i8.attribute;
      return false === s6 ? void 0 : "string" == typeof s6 ? s6 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    _$Eu() {
      var t5;
      this._$E_ = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t5 = this.constructor.h) || void 0 === t5 || t5.forEach((t6) => t6(this));
    }
    addController(t5) {
      var i8, s6;
      (null !== (i8 = this._$ES) && void 0 !== i8 ? i8 : this._$ES = []).push(t5), void 0 !== this.renderRoot && this.isConnected && (null === (s6 = t5.hostConnected) || void 0 === s6 || s6.call(t5));
    }
    removeController(t5) {
      var i8;
      null === (i8 = this._$ES) || void 0 === i8 || i8.splice(this._$ES.indexOf(t5) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t5, i8) => {
        this.hasOwnProperty(i8) && (this._$Ei.set(i8, this[i8]), delete this[i8]);
      });
    }
    createRenderRoot() {
      var t5;
      const s6 = null !== (t5 = this.shadowRoot) && void 0 !== t5 ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
      return S2(s6, this.constructor.elementStyles), s6;
    }
    connectedCallback() {
      var t5;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i8;
        return null === (i8 = t6.hostConnected) || void 0 === i8 ? void 0 : i8.call(t6);
      });
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      var t5;
      null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i8;
        return null === (i8 = t6.hostDisconnected) || void 0 === i8 ? void 0 : i8.call(t6);
      });
    }
    attributeChangedCallback(t5, i8, s6) {
      this._$AK(t5, s6);
    }
    _$EO(t5, i8, s6 = l2) {
      var e9;
      const r5 = this.constructor._$Ep(t5, s6);
      if (void 0 !== r5 && true === s6.reflect) {
        const h4 = (void 0 !== (null === (e9 = s6.converter) || void 0 === e9 ? void 0 : e9.toAttribute) ? s6.converter : n3).toAttribute(i8, s6.type);
        this._$El = t5, null == h4 ? this.removeAttribute(r5) : this.setAttribute(r5, h4), this._$El = null;
      }
    }
    _$AK(t5, i8) {
      var s6;
      const e9 = this.constructor, r5 = e9._$Ev.get(t5);
      if (void 0 !== r5 && this._$El !== r5) {
        const t6 = e9.getPropertyOptions(r5), h4 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== (null === (s6 = t6.converter) || void 0 === s6 ? void 0 : s6.fromAttribute) ? t6.converter : n3;
        this._$El = r5, this[r5] = h4.fromAttribute(i8, t6.type), this._$El = null;
      }
    }
    requestUpdate(t5, i8, s6) {
      let e9 = true;
      void 0 !== t5 && (((s6 = s6 || this.constructor.getPropertyOptions(t5)).hasChanged || a2)(this[t5], i8) ? (this._$AL.has(t5) || this._$AL.set(t5, i8), true === s6.reflect && this._$El !== t5 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t5, s6))) : e9 = false), !this.isUpdatePending && e9 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t6) {
        Promise.reject(t6);
      }
      const t5 = this.scheduleUpdate();
      return null != t5 && await t5, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t5;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t6, i9) => this[i9] = t6), this._$Ei = void 0);
      let i8 = false;
      const s6 = this._$AL;
      try {
        i8 = this.shouldUpdate(s6), i8 ? (this.willUpdate(s6), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
          var i9;
          return null === (i9 = t6.hostUpdate) || void 0 === i9 ? void 0 : i9.call(t6);
        }), this.update(s6)) : this._$Ek();
      } catch (t6) {
        throw i8 = false, this._$Ek(), t6;
      }
      i8 && this._$AE(s6);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      var i8;
      null === (i8 = this._$ES) || void 0 === i8 || i8.forEach((t6) => {
        var i9;
        return null === (i9 = t6.hostUpdated) || void 0 === i9 ? void 0 : i9.call(t6);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t5) {
      return true;
    }
    update(t5) {
      void 0 !== this._$EC && (this._$EC.forEach((t6, i8) => this._$EO(i8, this[i8], t6)), this._$EC = void 0), this._$Ek();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  u2[d2] = true, u2.elementProperties = /* @__PURE__ */ new Map(), u2.elementStyles = [], u2.shadowRootOptions = { mode: "open" }, null == o3 || o3({ ReactiveElement: u2 }), (null !== (s3 = e3.reactiveElementVersions) && void 0 !== s3 ? s3 : e3.reactiveElementVersions = []).push("1.6.3");

  // node_modules/lit-html/lit-html.js
  var t3;
  var i3 = window;
  var s4 = i3.trustedTypes;
  var e4 = s4 ? s4.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var o4 = "$lit$";
  var n4 = `lit$${(Math.random() + "").slice(9)}$`;
  var l3 = "?" + n4;
  var h3 = `<${l3}>`;
  var r4 = document;
  var u3 = () => r4.createComment("");
  var d3 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var c3 = Array.isArray;
  var v2 = (t5) => c3(t5) || "function" == typeof (null == t5 ? void 0 : t5[Symbol.iterator]);
  var a3 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _2 = /-->/g;
  var m2 = />/g;
  var p2 = RegExp(`>|${a3}(?:([^\\s"'>=/]+)(${a3}*=${a3}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g2 = /'/g;
  var $2 = /"/g;
  var y2 = /^(?:script|style|textarea|title)$/i;
  var w2 = (t5) => (i8, ...s6) => ({ _$litType$: t5, strings: i8, values: s6 });
  var x2 = w2(1);
  var b2 = w2(2);
  var T2 = Symbol.for("lit-noChange");
  var A2 = Symbol.for("lit-nothing");
  var E2 = /* @__PURE__ */ new WeakMap();
  var C2 = r4.createTreeWalker(r4, 129, null, false);
  function P2(t5, i8) {
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e4 ? e4.createHTML(i8) : i8;
  }
  var V2 = (t5, i8) => {
    const s6 = t5.length - 1, e9 = [];
    let l7, r5 = 2 === i8 ? "<svg>" : "", u4 = f2;
    for (let i9 = 0; i9 < s6; i9++) {
      const s7 = t5[i9];
      let d4, c4, v3 = -1, a4 = 0;
      for (; a4 < s7.length && (u4.lastIndex = a4, c4 = u4.exec(s7), null !== c4); ) a4 = u4.lastIndex, u4 === f2 ? "!--" === c4[1] ? u4 = _2 : void 0 !== c4[1] ? u4 = m2 : void 0 !== c4[2] ? (y2.test(c4[2]) && (l7 = RegExp("</" + c4[2], "g")), u4 = p2) : void 0 !== c4[3] && (u4 = p2) : u4 === p2 ? ">" === c4[0] ? (u4 = null != l7 ? l7 : f2, v3 = -1) : void 0 === c4[1] ? v3 = -2 : (v3 = u4.lastIndex - c4[2].length, d4 = c4[1], u4 = void 0 === c4[3] ? p2 : '"' === c4[3] ? $2 : g2) : u4 === $2 || u4 === g2 ? u4 = p2 : u4 === _2 || u4 === m2 ? u4 = f2 : (u4 = p2, l7 = void 0);
      const w3 = u4 === p2 && t5[i9 + 1].startsWith("/>") ? " " : "";
      r5 += u4 === f2 ? s7 + h3 : v3 >= 0 ? (e9.push(d4), s7.slice(0, v3) + o4 + s7.slice(v3) + n4 + w3) : s7 + n4 + (-2 === v3 ? (e9.push(void 0), i9) : w3);
    }
    return [P2(t5, r5 + (t5[s6] || "<?>") + (2 === i8 ? "</svg>" : "")), e9];
  };
  var N2 = class _N {
    constructor({ strings: t5, _$litType$: i8 }, e9) {
      let h4;
      this.parts = [];
      let r5 = 0, d4 = 0;
      const c4 = t5.length - 1, v3 = this.parts, [a4, f3] = V2(t5, i8);
      if (this.el = _N.createElement(a4, e9), C2.currentNode = this.el.content, 2 === i8) {
        const t6 = this.el.content, i9 = t6.firstChild;
        i9.remove(), t6.append(...i9.childNodes);
      }
      for (; null !== (h4 = C2.nextNode()) && v3.length < c4; ) {
        if (1 === h4.nodeType) {
          if (h4.hasAttributes()) {
            const t6 = [];
            for (const i9 of h4.getAttributeNames()) if (i9.endsWith(o4) || i9.startsWith(n4)) {
              const s6 = f3[d4++];
              if (t6.push(i9), void 0 !== s6) {
                const t7 = h4.getAttribute(s6.toLowerCase() + o4).split(n4), i10 = /([.?@])?(.*)/.exec(s6);
                v3.push({ type: 1, index: r5, name: i10[2], strings: t7, ctor: "." === i10[1] ? H2 : "?" === i10[1] ? L2 : "@" === i10[1] ? z2 : k2 });
              } else v3.push({ type: 6, index: r5 });
            }
            for (const i9 of t6) h4.removeAttribute(i9);
          }
          if (y2.test(h4.tagName)) {
            const t6 = h4.textContent.split(n4), i9 = t6.length - 1;
            if (i9 > 0) {
              h4.textContent = s4 ? s4.emptyScript : "";
              for (let s6 = 0; s6 < i9; s6++) h4.append(t6[s6], u3()), C2.nextNode(), v3.push({ type: 2, index: ++r5 });
              h4.append(t6[i9], u3());
            }
          }
        } else if (8 === h4.nodeType) if (h4.data === l3) v3.push({ type: 2, index: r5 });
        else {
          let t6 = -1;
          for (; -1 !== (t6 = h4.data.indexOf(n4, t6 + 1)); ) v3.push({ type: 7, index: r5 }), t6 += n4.length - 1;
        }
        r5++;
      }
    }
    static createElement(t5, i8) {
      const s6 = r4.createElement("template");
      return s6.innerHTML = t5, s6;
    }
  };
  function S3(t5, i8, s6 = t5, e9) {
    var o8, n9, l7, h4;
    if (i8 === T2) return i8;
    let r5 = void 0 !== e9 ? null === (o8 = s6._$Co) || void 0 === o8 ? void 0 : o8[e9] : s6._$Cl;
    const u4 = d3(i8) ? void 0 : i8._$litDirective$;
    return (null == r5 ? void 0 : r5.constructor) !== u4 && (null === (n9 = null == r5 ? void 0 : r5._$AO) || void 0 === n9 || n9.call(r5, false), void 0 === u4 ? r5 = void 0 : (r5 = new u4(t5), r5._$AT(t5, s6, e9)), void 0 !== e9 ? (null !== (l7 = (h4 = s6)._$Co) && void 0 !== l7 ? l7 : h4._$Co = [])[e9] = r5 : s6._$Cl = r5), void 0 !== r5 && (i8 = S3(t5, r5._$AS(t5, i8.values), r5, e9)), i8;
  }
  var M2 = class {
    constructor(t5, i8) {
      this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i8;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t5) {
      var i8;
      const { el: { content: s6 }, parts: e9 } = this._$AD, o8 = (null !== (i8 = null == t5 ? void 0 : t5.creationScope) && void 0 !== i8 ? i8 : r4).importNode(s6, true);
      C2.currentNode = o8;
      let n9 = C2.nextNode(), l7 = 0, h4 = 0, u4 = e9[0];
      for (; void 0 !== u4; ) {
        if (l7 === u4.index) {
          let i9;
          2 === u4.type ? i9 = new R2(n9, n9.nextSibling, this, t5) : 1 === u4.type ? i9 = new u4.ctor(n9, u4.name, u4.strings, this, t5) : 6 === u4.type && (i9 = new Z2(n9, this, t5)), this._$AV.push(i9), u4 = e9[++h4];
        }
        l7 !== (null == u4 ? void 0 : u4.index) && (n9 = C2.nextNode(), l7++);
      }
      return C2.currentNode = r4, o8;
    }
    v(t5) {
      let i8 = 0;
      for (const s6 of this._$AV) void 0 !== s6 && (void 0 !== s6.strings ? (s6._$AI(t5, s6, i8), i8 += s6.strings.length - 2) : s6._$AI(t5[i8])), i8++;
    }
  };
  var R2 = class _R {
    constructor(t5, i8, s6, e9) {
      var o8;
      this.type = 2, this._$AH = A2, this._$AN = void 0, this._$AA = t5, this._$AB = i8, this._$AM = s6, this.options = e9, this._$Cp = null === (o8 = null == e9 ? void 0 : e9.isConnected) || void 0 === o8 || o8;
    }
    get _$AU() {
      var t5, i8;
      return null !== (i8 = null === (t5 = this._$AM) || void 0 === t5 ? void 0 : t5._$AU) && void 0 !== i8 ? i8 : this._$Cp;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i8 = this._$AM;
      return void 0 !== i8 && 11 === (null == t5 ? void 0 : t5.nodeType) && (t5 = i8.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i8 = this) {
      t5 = S3(this, t5, i8), d3(t5) ? t5 === A2 || null == t5 || "" === t5 ? (this._$AH !== A2 && this._$AR(), this._$AH = A2) : t5 !== this._$AH && t5 !== T2 && this._(t5) : void 0 !== t5._$litType$ ? this.g(t5) : void 0 !== t5.nodeType ? this.$(t5) : v2(t5) ? this.T(t5) : this._(t5);
    }
    k(t5) {
      return this._$AA.parentNode.insertBefore(t5, this._$AB);
    }
    $(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.k(t5));
    }
    _(t5) {
      this._$AH !== A2 && d3(this._$AH) ? this._$AA.nextSibling.data = t5 : this.$(r4.createTextNode(t5)), this._$AH = t5;
    }
    g(t5) {
      var i8;
      const { values: s6, _$litType$: e9 } = t5, o8 = "number" == typeof e9 ? this._$AC(t5) : (void 0 === e9.el && (e9.el = N2.createElement(P2(e9.h, e9.h[0]), this.options)), e9);
      if ((null === (i8 = this._$AH) || void 0 === i8 ? void 0 : i8._$AD) === o8) this._$AH.v(s6);
      else {
        const t6 = new M2(o8, this), i9 = t6.u(this.options);
        t6.v(s6), this.$(i9), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i8 = E2.get(t5.strings);
      return void 0 === i8 && E2.set(t5.strings, i8 = new N2(t5)), i8;
    }
    T(t5) {
      c3(this._$AH) || (this._$AH = [], this._$AR());
      const i8 = this._$AH;
      let s6, e9 = 0;
      for (const o8 of t5) e9 === i8.length ? i8.push(s6 = new _R(this.k(u3()), this.k(u3()), this, this.options)) : s6 = i8[e9], s6._$AI(o8), e9++;
      e9 < i8.length && (this._$AR(s6 && s6._$AB.nextSibling, e9), i8.length = e9);
    }
    _$AR(t5 = this._$AA.nextSibling, i8) {
      var s6;
      for (null === (s6 = this._$AP) || void 0 === s6 || s6.call(this, false, true, i8); t5 && t5 !== this._$AB; ) {
        const i9 = t5.nextSibling;
        t5.remove(), t5 = i9;
      }
    }
    setConnected(t5) {
      var i8;
      void 0 === this._$AM && (this._$Cp = t5, null === (i8 = this._$AP) || void 0 === i8 || i8.call(this, t5));
    }
  };
  var k2 = class {
    constructor(t5, i8, s6, e9, o8) {
      this.type = 1, this._$AH = A2, this._$AN = void 0, this.element = t5, this.name = i8, this._$AM = e9, this.options = o8, s6.length > 2 || "" !== s6[0] || "" !== s6[1] ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = A2;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5, i8 = this, s6, e9) {
      const o8 = this.strings;
      let n9 = false;
      if (void 0 === o8) t5 = S3(this, t5, i8, 0), n9 = !d3(t5) || t5 !== this._$AH && t5 !== T2, n9 && (this._$AH = t5);
      else {
        const e10 = t5;
        let l7, h4;
        for (t5 = o8[0], l7 = 0; l7 < o8.length - 1; l7++) h4 = S3(this, e10[s6 + l7], i8, l7), h4 === T2 && (h4 = this._$AH[l7]), n9 || (n9 = !d3(h4) || h4 !== this._$AH[l7]), h4 === A2 ? t5 = A2 : t5 !== A2 && (t5 += (null != h4 ? h4 : "") + o8[l7 + 1]), this._$AH[l7] = h4;
      }
      n9 && !e9 && this.j(t5);
    }
    j(t5) {
      t5 === A2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t5 ? t5 : "");
    }
  };
  var H2 = class extends k2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t5) {
      this.element[this.name] = t5 === A2 ? void 0 : t5;
    }
  };
  var I2 = s4 ? s4.emptyScript : "";
  var L2 = class extends k2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t5) {
      t5 && t5 !== A2 ? this.element.setAttribute(this.name, I2) : this.element.removeAttribute(this.name);
    }
  };
  var z2 = class extends k2 {
    constructor(t5, i8, s6, e9, o8) {
      super(t5, i8, s6, e9, o8), this.type = 5;
    }
    _$AI(t5, i8 = this) {
      var s6;
      if ((t5 = null !== (s6 = S3(this, t5, i8, 0)) && void 0 !== s6 ? s6 : A2) === T2) return;
      const e9 = this._$AH, o8 = t5 === A2 && e9 !== A2 || t5.capture !== e9.capture || t5.once !== e9.once || t5.passive !== e9.passive, n9 = t5 !== A2 && (e9 === A2 || o8);
      o8 && this.element.removeEventListener(this.name, this, e9), n9 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      var i8, s6;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s6 = null === (i8 = this.options) || void 0 === i8 ? void 0 : i8.host) && void 0 !== s6 ? s6 : this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var Z2 = class {
    constructor(t5, i8, s6) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i8, this.options = s6;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      S3(this, t5);
    }
  };
  var B2 = i3.litHtmlPolyfillSupport;
  null == B2 || B2(N2, R2), (null !== (t3 = i3.litHtmlVersions) && void 0 !== t3 ? t3 : i3.litHtmlVersions = []).push("2.8.0");
  var D2 = (t5, i8, s6) => {
    var e9, o8;
    const n9 = null !== (e9 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== e9 ? e9 : i8;
    let l7 = n9._$litPart$;
    if (void 0 === l7) {
      const t6 = null !== (o8 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== o8 ? o8 : null;
      n9._$litPart$ = l7 = new R2(i8.insertBefore(u3(), t6), t6, void 0, null != s6 ? s6 : {});
    }
    return l7._$AI(t5), l7;
  };

  // node_modules/lit-element/lit-element.js
  var l4;
  var o5;
  var s5 = class extends u2 {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t5, e9;
      const i8 = super.createRenderRoot();
      return null !== (t5 = (e9 = this.renderOptions).renderBefore) && void 0 !== t5 || (e9.renderBefore = i8.firstChild), i8;
    }
    update(t5) {
      const i8 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = D2(i8, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t5;
      super.connectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(true);
    }
    disconnectedCallback() {
      var t5;
      super.disconnectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(false);
    }
    render() {
      return T2;
    }
  };
  s5.finalized = true, s5._$litElement$ = true, null === (l4 = globalThis.litElementHydrateSupport) || void 0 === l4 || l4.call(globalThis, { LitElement: s5 });
  var n5 = globalThis.litElementPolyfillSupport;
  null == n5 || n5({ LitElement: s5 });
  (null !== (o5 = globalThis.litElementVersions) && void 0 !== o5 ? o5 : globalThis.litElementVersions = []).push("3.3.3");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var e5 = (e9) => (n9) => "function" == typeof n9 ? ((e10, n10) => (customElements.define(e10, n10), n10))(e9, n9) : ((e10, n10) => {
    const { kind: t5, elements: s6 } = n10;
    return { kind: t5, elements: s6, finisher(n11) {
      customElements.define(e10, n11);
    } };
  })(e9, n9);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i4 = (i8, e9) => "method" === e9.kind && e9.descriptor && !("value" in e9.descriptor) ? { ...e9, finisher(n9) {
    n9.createProperty(e9.key, i8);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e9.key, initializer() {
    "function" == typeof e9.initializer && (this[e9.key] = e9.initializer.call(this));
  }, finisher(n9) {
    n9.createProperty(e9.key, i8);
  } };
  var e6 = (i8, e9, n9) => {
    e9.constructor.createProperty(n9, i8);
  };
  function n6(n9) {
    return (t5, o8) => void 0 !== o8 ? e6(n9, t5, o8) : i4(n9, t5);
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o6 = ({ finisher: e9, descriptor: t5 }) => (o8, n9) => {
    var r5;
    if (void 0 === n9) {
      const n10 = null !== (r5 = o8.originalKey) && void 0 !== r5 ? r5 : o8.key, i8 = null != t5 ? { kind: "method", placement: "prototype", key: n10, descriptor: t5(o8.key) } : { ...o8, key: n10 };
      return null != e9 && (i8.finisher = function(t6) {
        e9(t6, n10);
      }), i8;
    }
    {
      const r6 = o8.constructor;
      void 0 !== t5 && Object.defineProperty(o8, n9, t5(n9)), null == e9 || e9(r6, n9);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i5(i8, n9) {
    return o6({ descriptor: (o8) => {
      const t5 = { get() {
        var o9, n10;
        return null !== (n10 = null === (o9 = this.renderRoot) || void 0 === o9 ? void 0 : o9.querySelector(i8)) && void 0 !== n10 ? n10 : null;
      }, enumerable: true, configurable: true };
      if (n9) {
        const n10 = "symbol" == typeof o8 ? Symbol() : "__" + o8;
        t5.get = function() {
          var o9, t6;
          return void 0 === this[n10] && (this[n10] = null !== (t6 = null === (o9 = this.renderRoot) || void 0 === o9 ? void 0 : o9.querySelector(i8)) && void 0 !== t6 ? t6 : null), this[n10];
        };
      }
      return t5;
    } });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n7;
  var e7 = null != (null === (n7 = window.HTMLSlotElement) || void 0 === n7 ? void 0 : n7.prototype.assignedElements) ? (o8, n9) => o8.assignedElements(n9) : (o8, n9) => o8.assignedNodes(n9).filter((o9) => o9.nodeType === Node.ELEMENT_NODE);

  // node_modules/lit-html/directive.js
  var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e8 = (t5) => (...e9) => ({ _$litDirective$: t5, values: e9 });
  var i6 = class {
    constructor(t5) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t5, e9, i8) {
      this._$Ct = t5, this._$AM = e9, this._$Ci = i8;
    }
    _$AS(t5, e9) {
      return this.update(t5, e9);
    }
    update(t5, e9) {
      return this.render(...e9);
    }
  };

  // node_modules/lit-html/directives/style-map.js
  var i7 = "important";
  var n8 = " !" + i7;
  var o7 = e8(class extends i6 {
    constructor(t5) {
      var e9;
      if (super(t5), t5.type !== t4.ATTRIBUTE || "style" !== t5.name || (null === (e9 = t5.strings) || void 0 === e9 ? void 0 : e9.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return Object.keys(t5).reduce((e9, r5) => {
        const s6 = t5[r5];
        return null == s6 ? e9 : e9 + `${r5 = r5.includes("-") ? r5 : r5.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s6};`;
      }, "");
    }
    update(e9, [r5]) {
      const { style: s6 } = e9.element;
      if (void 0 === this.ht) {
        this.ht = /* @__PURE__ */ new Set();
        for (const t5 in r5) this.ht.add(t5);
        return this.render(r5);
      }
      this.ht.forEach((t5) => {
        null == r5[t5] && (this.ht.delete(t5), t5.includes("-") ? s6.removeProperty(t5) : s6[t5] = "");
      });
      for (const t5 in r5) {
        const e10 = r5[t5];
        if (null != e10) {
          this.ht.add(t5);
          const r6 = "string" == typeof e10 && e10.endsWith(n8);
          t5.includes("-") || r6 ? s6.setProperty(t5, r6 ? e10.slice(0, -11) : e10, r6 ? i7 : "") : s6[t5] = e10;
        }
      }
      return T2;
    }
  });

  // node_modules/lit-html/directives/if-defined.js
  var l6 = (l7) => null != l7 ? l7 : A2;

  // node_modules/chessboard-element/lib/utils.js
  var RUN_ASSERTS = true;
  var isString = (s6) => {
    return typeof s6 === "string";
  };
  var isFunction = (f3) => {
    return typeof f3 === "function";
  };
  var deepCopy = (thing) => {
    return JSON.parse(JSON.stringify(thing));
  };
  var interpolateTemplate = (str, obj) => {
    for (const [key, value] of Object.entries(obj)) {
      const keyTemplateStr = "{" + key + "}";
      while (str.includes(keyTemplateStr)) {
        str = str.replace(keyTemplateStr, value);
      }
    }
    return str;
  };
  if (RUN_ASSERTS) {
    console.assert(interpolateTemplate("abc", { a: "x" }) === "abc");
    console.assert(interpolateTemplate("{a}bc", {}) === "{a}bc");
    console.assert(interpolateTemplate("{a}bc", { p: "q" }) === "{a}bc");
    console.assert(interpolateTemplate("{a}bc", { a: "x" }) === "xbc");
    console.assert(interpolateTemplate("{a}bc{a}bc", { a: "x" }) === "xbcxbc");
    console.assert(interpolateTemplate("{a}{a}{b}", { a: "x", b: "y" }) === "xxy");
  }

  // node_modules/chessboard-element/lib/chessboard-styles.js
  var styles = i2`
  :host {
    display: block;
    position: relative;
    --light-color: #f0d9b5;
    --dark-color: #b58863;
    --highlight-color: yellow;
  }

  [part~='board'] {
    border: 2px solid #404040;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(8, 12.5%);
  }

  [part~='square'] {
    position: relative;

    /* disable any native browser highlighting */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  [part~='piece'],
  .piece-image {
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  [part~='spare-pieces'] {
    display: grid;
    position: relative;
    padding: 0 2px;
    grid-template-columns: repeat(8, 12.5%);
  }

  [part~='dragged-piece'] {
    display: none;
    position: absolute;
  }

  [part~='white'] {
    background-color: var(--light-color);
    color: var(--dark-color);
  }

  [part~='black'] {
    background-color: var(--dark-color);
    color: var(--light-color);
  }

  [part~='highlight'] {
    box-shadow: inset 0 0 3px 3px var(--highlight-color);
  }

  [part~='notation'] {
    cursor: default;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    position: absolute;
  }

  [part~='alpha'] {
    bottom: 1px;
    right: 3px;
  }

  [part~='numeric'] {
    top: 2px;
    left: 2px;
  }
`;

  // node_modules/chessboard-element/lib/chess-utils.js
  var RUN_ASSERTS2 = true;
  var START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
  var COLUMNS = "abcdefgh".split("");
  var whitePieces = ["wK", "wQ", "wR", "wB", "wN", "wP"];
  var blackPieces = ["bK", "bQ", "bR", "bB", "bN", "bP"];
  var getSquareColor = (square) => square.charCodeAt(0) % 2 ^ square.charCodeAt(1) % 2 ? "white" : "black";
  var validSquare = (square) => {
    return isString(square) && square.search(/^[a-h][1-8]$/) !== -1;
  };
  var validMove = (move) => {
    if (!isString(move))
      return false;
    const squares = move.split("-");
    if (squares.length !== 2)
      return false;
    return validSquare(squares[0]) && validSquare(squares[1]);
  };
  if (RUN_ASSERTS2) {
    console.assert(validSquare("a1"));
    console.assert(validSquare("e2"));
    console.assert(!validSquare("D2"));
    console.assert(!validSquare("g9"));
    console.assert(!validSquare("a"));
    console.assert(!validSquare(true));
    console.assert(!validSquare(null));
    console.assert(!validSquare({}));
  }
  var validPieceCode = (code) => {
    return isString(code) && code.search(/^[bw][KQRNBP]$/) !== -1;
  };
  if (RUN_ASSERTS2) {
    console.assert(validPieceCode("bP"));
    console.assert(validPieceCode("bK"));
    console.assert(validPieceCode("wK"));
    console.assert(validPieceCode("wR"));
    console.assert(!validPieceCode("WR"));
    console.assert(!validPieceCode("Wr"));
    console.assert(!validPieceCode("a"));
    console.assert(!validPieceCode(true));
    console.assert(!validPieceCode(null));
    console.assert(!validPieceCode({}));
  }
  var squeezeFenEmptySquares = (fen) => {
    return fen.replace(/11111111/g, "8").replace(/1111111/g, "7").replace(/111111/g, "6").replace(/11111/g, "5").replace(/1111/g, "4").replace(/111/g, "3").replace(/11/g, "2");
  };
  var expandFenEmptySquares = (fen) => {
    return fen.replace(/8/g, "11111111").replace(/7/g, "1111111").replace(/6/g, "111111").replace(/5/g, "11111").replace(/4/g, "1111").replace(/3/g, "111").replace(/2/g, "11");
  };
  var validFen = (fen) => {
    if (!isString(fen))
      return false;
    fen = fen.replace(/ .+$/, "");
    fen = expandFenEmptySquares(fen);
    const chunks = fen.split("/");
    if (chunks.length !== 8)
      return false;
    for (let i8 = 0; i8 < 8; i8++) {
      if (chunks[i8].length !== 8 || chunks[i8].search(/[^kqrnbpKQRNBP1]/) !== -1) {
        return false;
      }
    }
    return true;
  };
  if (RUN_ASSERTS2) {
    console.assert(validFen(START_FEN));
    console.assert(validFen("8/8/8/8/8/8/8/8"));
    console.assert(validFen("r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R"));
    console.assert(validFen("3r3r/1p4pp/2nb1k2/pP3p2/8/PB2PN2/p4PPP/R4RK1 b - - 0 1"));
    console.assert(!validFen("3r3z/1p4pp/2nb1k2/pP3p2/8/PB2PN2/p4PPP/R4RK1 b - - 0 1"));
    console.assert(!validFen("anbqkbnr/8/8/8/8/8/PPPPPPPP/8"));
    console.assert(!validFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/"));
    console.assert(!validFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBN"));
    console.assert(!validFen("888888/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"));
    console.assert(!validFen("888888/pppppppp/74/8/8/8/PPPPPPPP/RNBQKBNR"));
    console.assert(!validFen({}));
  }
  var validPositionObject = (pos) => {
    if (typeof pos !== "object" || pos === null) {
      return false;
    }
    for (const [square, piece] of Object.entries(pos)) {
      if (!validSquare(square) || !validPieceCode(piece)) {
        return false;
      }
    }
    return true;
  };
  if (RUN_ASSERTS2) {
    console.assert(validPositionObject({}));
    console.assert(validPositionObject({ e2: "wP" }));
    console.assert(validPositionObject({ e2: "wP", d2: "wP" }));
    console.assert(!validPositionObject({ e2: "BP" }));
    console.assert(!validPositionObject({ y2: "wP" }));
    console.assert(!validPositionObject(null));
    console.assert(!validPositionObject(void 0));
    console.assert(!validPositionObject(1));
    console.assert(!validPositionObject("start"));
    console.assert(!validPositionObject(START_FEN));
  }
  var fenToPieceCode = (piece) => {
    if (piece.toLowerCase() === piece) {
      return "b" + piece.toUpperCase();
    }
    return "w" + piece.toUpperCase();
  };
  var pieceCodeToFen = (piece) => {
    const pieceCodeLetters = piece.split("");
    if (pieceCodeLetters[0] === "w") {
      return pieceCodeLetters[1].toUpperCase();
    }
    return pieceCodeLetters[1].toLowerCase();
  };
  var fenToObj = (fen) => {
    if (!validFen(fen))
      return false;
    fen = fen.replace(/ .+$/, "");
    const rows = fen.split("/");
    const position = {};
    let currentRow = 8;
    for (let i8 = 0; i8 < 8; i8++) {
      const row = rows[i8].split("");
      let colIdx = 0;
      for (let j2 = 0; j2 < row.length; j2++) {
        if (row[j2].search(/[1-8]/) !== -1) {
          const numEmptySquares = parseInt(row[j2], 10);
          colIdx = colIdx + numEmptySquares;
        } else {
          const square = COLUMNS[colIdx] + currentRow;
          position[square] = fenToPieceCode(row[j2]);
          colIdx = colIdx + 1;
        }
      }
      currentRow = currentRow - 1;
    }
    return position;
  };
  var START_POSITION = fenToObj(START_FEN);
  var objToFen = (obj) => {
    if (!validPositionObject(obj))
      return false;
    let fen = "";
    let currentRow = 8;
    for (let i8 = 0; i8 < 8; i8++) {
      for (let j2 = 0; j2 < 8; j2++) {
        const square = COLUMNS[j2] + currentRow;
        if (obj.hasOwnProperty(square)) {
          fen = fen + pieceCodeToFen(obj[square]);
        } else {
          fen = fen + "1";
        }
      }
      if (i8 !== 7) {
        fen = fen + "/";
      }
      currentRow = currentRow - 1;
    }
    fen = squeezeFenEmptySquares(fen);
    return fen;
  };
  if (RUN_ASSERTS2) {
    console.assert(objToFen(START_POSITION) === START_FEN);
    console.assert(objToFen({}) === "8/8/8/8/8/8/8/8");
    console.assert(objToFen({ a2: "wP", b2: "bP" }) === "8/8/8/8/8/8/Pp6/8");
  }
  var normalizePozition = (position) => {
    if (position == null) {
      return {};
    }
    if (isString(position) && position.toLowerCase() === "start") {
      position = deepCopy(START_POSITION);
    }
    if (validFen(position)) {
      position = fenToObj(position);
    }
    return position;
  };
  var squareDistance = (squareA, squareB) => {
    const squareAArray = squareA.split("");
    const squareAx = COLUMNS.indexOf(squareAArray[0]) + 1;
    const squareAy = parseInt(squareAArray[1], 10);
    const squareBArray = squareB.split("");
    const squareBx = COLUMNS.indexOf(squareBArray[0]) + 1;
    const squareBy = parseInt(squareBArray[1], 10);
    const xDelta = Math.abs(squareAx - squareBx);
    const yDelta = Math.abs(squareAy - squareBy);
    if (xDelta >= yDelta)
      return xDelta;
    return yDelta;
  };
  var createRadius = (square) => {
    const squares = [];
    for (let i8 = 0; i8 < 8; i8++) {
      for (let j2 = 0; j2 < 8; j2++) {
        const s6 = COLUMNS[i8] + (j2 + 1);
        if (square === s6)
          continue;
        squares.push({
          square: s6,
          distance: squareDistance(square, s6)
        });
      }
    }
    squares.sort(function(a4, b3) {
      return a4.distance - b3.distance;
    });
    const surroundingSquares = [];
    for (let i8 = 0; i8 < squares.length; i8++) {
      surroundingSquares.push(squares[i8].square);
    }
    return surroundingSquares;
  };
  var findClosestPiece = (position, piece, square) => {
    const closestSquares = createRadius(square);
    for (let i8 = 0; i8 < closestSquares.length; i8++) {
      const s6 = closestSquares[i8];
      if (position.hasOwnProperty(s6) && position[s6] === piece) {
        return s6;
      }
    }
    return false;
  };
  var calculatePositionFromMoves = (position, moves) => {
    const newPosition = deepCopy(position);
    for (const i8 in moves) {
      if (!moves.hasOwnProperty(i8))
        continue;
      if (!newPosition.hasOwnProperty(i8))
        continue;
      const piece = newPosition[i8];
      delete newPosition[i8];
      newPosition[moves[i8]] = piece;
    }
    return newPosition;
  };

  // node_modules/chessboard-element/lib/wikipedia-pieces-svg.js
  var renderPiece = (piece, container) => {
    D2(x2` <svg class="piece-image" viewBox="0 0 45 45">${pieces[piece]}</svg> `, container);
  };
  var pieces = {
    bB: b2`
    <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <g style="fill:#000000; stroke:#000000; stroke-linecap:butt;"> 
        <path
          d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />
        <path
          d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
        <path
          d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
      </g>
      <path
        d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
        style="fill:none; stroke:#ffffff; stroke-linejoin:miter;" />
    </g>
  `,
    wB: b2`
    <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;"> 
        <path
          d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />
        <path
          d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
        <path
          d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
      </g>
      <path
        d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
    </g>
  `,
    bK: b2`
    <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 22.5,11.63 L 22.5,6"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;"
        id="path6570" />
      <path
        d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
        style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;" />
      <path
        d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
        style="fill:#000000; stroke:#000000;" />
      <path
        d="M 20,8 L 25,8"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
      <path
        d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"
        style="fill:none; stroke:#ffffff;" />
      <path
        d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"
        style="fill:none; stroke:#ffffff;" />
    </g>
  `,
    wK: b2`
    <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 22.5,11.63 L 22.5,6"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
      <path
        d="M 20,8 L 25,8"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
      <path
        d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
        style="fill:#ffffff; stroke:#000000; stroke-linecap:butt; stroke-linejoin:miter;" />
      <path
        d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
        style="fill:#ffffff; stroke:#000000;" />
      <path
        d="M 11.5,30 C 17,27 27,27 32.5,30"
        style="fill:none; stroke:#000000;" />
      <path
        d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"
        style="fill:none; stroke:#000000;" />
      <path
        d="M 11.5,37 C 17,34 27,34 32.5,37"
        style="fill:none; stroke:#000000;" />
    </g>
  `,
    bN: b2`
    <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
        style="fill:#000000; stroke:#000000;" />
      <path
        d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
        style="fill:#000000; stroke:#000000;" />
      <path
        d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
        style="fill:#ffffff; stroke:#ffffff;" />
      <path
        d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
        transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
        style="fill:#ffffff; stroke:#ffffff;" />
      <path
        d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
        style="fill:#ffffff; stroke:none;" />
    </g>
  `,
    wN: b2`
    <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
        style="fill:#ffffff; stroke:#000000;" />
      <path
        d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
        style="fill:#ffffff; stroke:#000000;" />
      <path
        d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
        style="fill:#000000; stroke:#000000;" />
      <path
        d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
        transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
        style="fill:#000000; stroke:#000000;" />
    </g>
  `,
    bP: b2`
    <path
      d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
      style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
  `,
    wP: b2`
    <path
      d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
      style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
  `,
    bQ: b2`
    <g style="opacity:1; fill:000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <g style="fill:#000000; stroke:none;">
        <circle cx="6"    cy="12" r="2.75" />
        <circle cx="14"   cy="9"  r="2.75" />
        <circle cx="22.5" cy="8"  r="2.75" />
        <circle cx="31"   cy="9"  r="2.75" />
        <circle cx="39"   cy="12" r="2.75" />
      </g>
      <path
        d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
        style="stroke-linecap:butt; stroke:#000000;" />
      <path
        d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
        style="stroke-linecap:butt;" />
      <path
        d="M 11,38.5 A 35,35 1 0 0 34,38.5"
        style="fill:none; stroke:#000000; stroke-linecap:butt;" />
      <path
        d="M 11,29 A 35,35 1 0 1 34,29"
        style="fill:none; stroke:#ffffff;" />
      <path
        d="M 12.5,31.5 L 32.5,31.5"
        style="fill:none; stroke:#ffffff;" />
      <path
        d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
        style="fill:none; stroke:#ffffff;" />
      <path
        d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
        style="fill:none; stroke:#ffffff;" />
    </g>
  `,
    wQ: b2`
    <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(-1,-1)" />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(15.5,-5.5)" />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(32,-1)" />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(7,-4.5)" />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(24,-4)" />
      <path
        d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 11.5,30 C 15,29 30,29 33.5,30"
        style="fill:none;" />
      <path
        d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"
        style="fill:none;" />
    </g>
  `,
    bR: b2`
    <g style="opacity:1; fill:000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
        style="stroke-linecap:butt;stroke-linejoin:miter;" />
      <path
        d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 12,35.5 L 33,35.5 L 33,35.5"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
      <path
        d="M 13,31.5 L 32,31.5"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
      <path
        d="M 14,29.5 L 31,29.5"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
      <path
        d="M 14,16.5 L 31,16.5"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
      <path
        d="M 11,14 L 34,14"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
    </g>
  `,
    wR: b2`
    <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
        style="stroke-linecap:butt;" />
      <path
        d="M 34,14 L 31,17 L 14,17 L 11,14" />
      <path
        d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
        style="stroke-linecap:butt; stroke-linejoin:miter;" />
      <path
        d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
      <path
        d="M 11,14 L 34,14"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
    </g>
  `
  };

  // node_modules/chessboard-element/lib/chessboard-element.js
  var __decorate = function(decorators, target, key, desc) {
    var c4 = arguments.length, r5 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r5 = Reflect.decorate(decorators, target, key, desc);
    else for (var i8 = decorators.length - 1; i8 >= 0; i8--) if (d4 = decorators[i8]) r5 = (c4 < 3 ? d4(r5) : c4 > 3 ? d4(target, key, r5) : d4(target, key)) || r5;
    return c4 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
  };
  var DEFAULT_APPEAR_SPEED = 200;
  var DEFAULT_MOVE_SPEED = 200;
  var DEFAULT_SNAPBACK_SPEED = 60;
  var DEFAULT_SNAP_SPEED = 30;
  var DEFAULT_TRASH_SPEED = 100;
  function assertIsDragging(dragState) {
    if ((dragState === null || dragState === void 0 ? void 0 : dragState.state) !== "dragging") {
      throw new Error(`unexpected drag state ${JSON.stringify(dragState)}`);
    }
  }
  var speedToMS = (speed) => {
    if (typeof speed === "number") {
      return speed;
    }
    if (speed === "fast") {
      return 200;
    }
    if (speed === "slow") {
      return 600;
    }
    return parseInt(speed, 10);
  };
  var squareId = (square) => `square-${square}`;
  var sparePieceId = (piece) => `spare-piece-${piece}`;
  var RenderPieceDirective = class extends i6 {
    render(_piece, _renderPiece) {
      return A2;
    }
    update(part, [piece, renderPiece2]) {
      if (isFunction(renderPiece2)) {
        renderPiece2(piece, part.element);
      } else {
        part.element.replaceChildren();
      }
      return T2;
    }
  };
  var renderPieceDirective = e8(RenderPieceDirective);
  var ChessBoardElement = class ChessBoardElement2 extends s5 {
    constructor() {
      super(...arguments);
      this.hideNotation = false;
      this.orientation = "white";
      this.draggablePieces = false;
      this.dropOffBoard = "snapback";
      this.renderPiece = (piece, container) => {
        let pieceImage = void 0;
        if (isString(this.pieceTheme)) {
          pieceImage = interpolateTemplate(this.pieceTheme, { piece });
        } else if (isFunction(this.pieceTheme)) {
          pieceImage = this.pieceTheme(piece);
        }
        if (pieceImage === void 0) {
          renderPiece(piece, container);
        } else {
          D2(x2`<img class="piece-image" src=${pieceImage} />`, container);
        }
      };
      this.moveSpeed = DEFAULT_MOVE_SPEED;
      this.snapbackSpeed = DEFAULT_SNAPBACK_SPEED;
      this.snapSpeed = DEFAULT_SNAP_SPEED;
      this.trashSpeed = DEFAULT_TRASH_SPEED;
      this.appearSpeed = DEFAULT_APPEAR_SPEED;
      this.sparePieces = false;
      this._highlightedSquares = /* @__PURE__ */ new Set();
      this._animations = /* @__PURE__ */ new Map();
      this._currentPosition = {};
      this._mousemoveWindow = (e9) => {
        var _a;
        if (!(((_a = this._dragState) === null || _a === void 0 ? void 0 : _a.state) === "dragging")) {
          return;
        }
        e9.preventDefault();
        const pos = e9 instanceof MouseEvent ? e9 : e9.changedTouches[0];
        this._updateDraggedPiece(pos.clientX, pos.clientY);
      };
      this._mouseupWindow = (e9) => {
        var _a;
        if (!(((_a = this._dragState) === null || _a === void 0 ? void 0 : _a.state) === "dragging")) {
          return;
        }
        const pos = e9 instanceof MouseEvent ? e9 : e9.changedTouches[0];
        const location2 = this._isXYOnSquare(pos.clientX, pos.clientY);
        this._stopDraggedPiece(location2);
      };
    }
    /**
     * The current position of the board, as a `PositionObject`. This property may
     * be set externally, but only to valid `PositionObject`s. The value is copied
     * before being applied to the board. Changes to the position object are not
     * reflected in th rendering.
     *
     * To set the position using FEN, or a keyword like `'start'`, or to use
     * animations, use the `setPosition` method.
     */
    get position() {
      return this._currentPosition;
    }
    set position(v3) {
      const oldValue = this._currentPosition;
      this._setCurrentPosition(v3);
      this.requestUpdate("position", oldValue);
    }
    /**
     * Whether to show the board notation. This is always the inverse of
     * `hideNotation`, which reflects the `hide-notation` attribute.
     *
     * @default true
     */
    get showNotation() {
      return !this.hideNotation;
    }
    set showNotation(v3) {
      this.hideNotation = !v3;
    }
    get _squareSize() {
      return this.offsetWidth / 8;
    }
    _getSquareElement(square) {
      return this.shadowRoot.getElementById(squareId(square));
    }
    _getSparePieceElement(piece) {
      return this.shadowRoot.getElementById(sparePieceId(piece));
    }
    // -------------------------------------------------------------------------
    // DOM Building
    // -------------------------------------------------------------------------
    render() {
      return x2`
      <div part="spare-pieces">
        ${this._renderSparePieces(this.orientation === "white" ? "black" : "white")}
      </div>
      ${this._renderBoard()}
      <div part="spare-pieces">
        ${this._renderSparePieces(this.orientation === "white" ? "white" : "black")}
      </div>
      <div
        id="dragged-pieces"
        style=${o7({
        width: `${this._squareSize}px`,
        height: `${this._squareSize}px`
      })}
      >
        ${this._renderDraggedPiece()}
      </div>
    `;
    }
    _renderSparePieces(color) {
      if (!this.sparePieces) {
        return A2;
      }
      const pieces2 = color === "black" ? blackPieces : whitePieces;
      return x2`
      <div></div>
      ${pieces2.map((p3) => x2`
            <div
              id="spare-${p3}"
              @mousedown=${this._mousedownSparePiece}
              @touchstart=${this._mousedownSparePiece}
            >
              ${this._renderPiece(p3, {}, false, sparePieceId(p3))}
            </div>
          `)}
      <div></div>
    `;
    }
    _renderDraggedPiece() {
      var _a, _b;
      const styles2 = {
        height: `${this._squareSize}px`,
        width: `${this._squareSize}px`
      };
      const dragState = this._dragState;
      if (dragState !== void 0) {
        styles2.display = "block";
        const rect = this.getBoundingClientRect();
        if (dragState.state === "dragging") {
          const { x: x3, y: y3 } = dragState;
          Object.assign(styles2, {
            top: `${y3 - rect.top - this._squareSize / 2}px`,
            left: `${x3 - rect.left - this._squareSize / 2}px`
          });
        } else if (dragState.state === "snapback") {
          const { source } = dragState;
          const square = this._getSquareElement(source);
          const squareRect = square.getBoundingClientRect();
          Object.assign(styles2, {
            transitionProperty: "top, left",
            transitionDuration: `${speedToMS(this.snapbackSpeed)}ms`,
            top: `${squareRect.top - rect.top}px`,
            left: `${squareRect.left - rect.left}px`
          });
        } else if (dragState.state === "trash") {
          const { x: x3, y: y3 } = dragState;
          Object.assign(styles2, {
            transitionProperty: "opacity",
            transitionDuration: `${speedToMS(this.trashSpeed)}ms`,
            opacity: "0",
            top: `${y3 - rect.top - this._squareSize / 2}px`,
            left: `${x3 - rect.left - this._squareSize / 2}px`
          });
        } else if (dragState.state === "snap") {
          const square = this._getSquareElement(dragState.location);
          const squareRect = square.getBoundingClientRect();
          Object.assign(styles2, {
            transitionProperty: "top, left",
            transitionDuration: `${speedToMS(this.snapSpeed)}ms`,
            top: `${squareRect.top - rect.top}px`,
            left: `${squareRect.left - rect.left}px`
          });
        }
      }
      return this._renderPiece((_b = (_a = this._dragState) === null || _a === void 0 ? void 0 : _a.piece) !== null && _b !== void 0 ? _b : "", styles2, false, void 0, "dragged-piece");
    }
    _renderBoard() {
      var _a;
      const squares = [];
      const isFlipped = this.orientation === "black";
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const file = COLUMNS[isFlipped ? 7 - col : col];
          const rank = isFlipped ? row + 1 : 8 - row;
          const square = `${file}${rank}`;
          const squareColor = getSquareColor(square);
          let piece = this._currentPosition[square];
          const isDragSource = square === ((_a = this._dragState) === null || _a === void 0 ? void 0 : _a.source);
          const animation = this._animations.get(square);
          const highlight = isDragSource || this._highlightedSquares.has(square) ? "highlight" : "";
          const pieceStyles = this._getAnimationStyles(piece, animation);
          if (!piece && (animation === null || animation === void 0 ? void 0 : animation.type) === "clear") {
            piece = animation.piece;
          }
          squares.push(x2`
          <div
            class="square"
            id=${squareId(square)}
            data-square=${square}
            part="square ${square} ${squareColor} ${highlight}"
            @mousedown=${this._mousedownSquare}
            @mouseenter=${this._mouseenterSquare}
            @mouseleave=${this._mouseleaveSquare}
            @touchstart=${this._mousedownSquare}
          >
            ${this.showNotation && row === 7 ? x2`<div part="notation alpha">${file}</div>` : A2}
            ${this.showNotation && col === 0 ? x2`<div part="notation numeric">${rank}</div>` : A2}
            ${this._renderPiece(piece, pieceStyles, isDragSource)}
          </div>
        `);
        }
      }
      const styles2 = {
        width: this._squareSize * 8 + "px",
        height: this._squareSize * 8 + "px"
      };
      return x2`<div part="board" style=${o7(styles2)}>${squares}</div>`;
    }
    _renderPiece(piece, styles2, isDragSource, id, part) {
      if (piece === void 0) {
        return A2;
      }
      const style = Object.assign({ opacity: "1", transitionProperty: "", transitionDuration: "0ms" }, styles2);
      if (isDragSource || piece === "") {
        style.display = "none";
      }
      if (piece === "") {
        return A2;
      }
      if (!isFunction(this.renderPiece)) {
        this._error(8272, "invalid renderPiece.");
      }
      return x2`
      <div
        id=${l6(id)}
        part="piece ${part !== null && part !== void 0 ? part : ""}"
        piece=${piece}
        style=${o7(style)}
        ...=${renderPieceDirective(piece, this.renderPiece)}
      ></div>
    `;
    }
    _getAnimationStyles(piece, animation) {
      if (animation) {
        if (piece && (animation.type === "move-start" || animation.type === "add-start" && this.draggablePieces)) {
          const srcSquare = animation.type === "move-start" ? this._getSquareElement(animation.source) : this._getSparePieceElement(piece);
          const destSquare = animation.type === "move-start" ? this._getSquareElement(animation.destination) : this._getSquareElement(animation.square);
          const srcSquareRect = srcSquare.getBoundingClientRect();
          const destSquareRect = destSquare.getBoundingClientRect();
          return {
            position: "absolute",
            left: `${srcSquareRect.left - destSquareRect.left}px`,
            top: `${srcSquareRect.top - destSquareRect.top}px`,
            width: `${this._squareSize}px`,
            height: `${this._squareSize}px`
          };
        }
        if (piece && (animation.type === "move" || animation.type === "add" && this.draggablePieces)) {
          return {
            position: "absolute",
            transitionProperty: "top, left",
            transitionDuration: `${speedToMS(this.moveSpeed)}ms`,
            top: `0`,
            left: `0`,
            width: `${this._squareSize}px`,
            height: `${this._squareSize}px`
          };
        }
        if (!piece && animation.type === "clear") {
          piece = animation.piece;
          return {
            transitionProperty: "opacity",
            transitionDuration: `${speedToMS(this.trashSpeed)}ms`,
            opacity: "0"
          };
        }
        if (piece && animation.type === "add-start") {
          return {
            opacity: "0"
          };
        }
        if (piece && animation.type === "add") {
          return {
            transitionProperty: "opacity",
            transitionDuration: `${speedToMS(this.appearSpeed)}ms`
          };
        }
      }
      return {};
    }
    // -------------------------------------------------------------------------
    // Event Listeners
    // -------------------------------------------------------------------------
    _mousedownSquare(e9) {
      if (!this.draggablePieces && !this.sparePieces) {
        return;
      }
      const squareEl = e9.currentTarget;
      const square = squareEl.getAttribute("data-square");
      if (square === null || !this._currentPosition.hasOwnProperty(square)) {
        return;
      }
      e9.preventDefault();
      const pos = e9 instanceof MouseEvent ? e9 : e9.changedTouches[0];
      this._beginDraggingPiece(square, this._currentPosition[square], pos.clientX, pos.clientY);
    }
    _mousedownSparePiece(e9) {
      if (!this.sparePieces) {
        return;
      }
      const sparePieceContainerEl = e9.currentTarget;
      const pieceEl = sparePieceContainerEl.querySelector("[part~=piece]");
      const piece = pieceEl.getAttribute("piece");
      e9.preventDefault();
      const pos = e9 instanceof MouseEvent ? e9 : e9.changedTouches[0];
      this._beginDraggingPiece("spare", piece, pos.clientX, pos.clientY);
    }
    _mouseenterSquare(e9) {
      if (this._dragState !== void 0) {
        return;
      }
      const square = e9.currentTarget.getAttribute("data-square");
      if (!validSquare(square)) {
        return;
      }
      const piece = this._currentPosition.hasOwnProperty(square) && this._currentPosition[square];
      this.dispatchEvent(new CustomEvent("mouseover-square", {
        bubbles: true,
        detail: {
          square,
          piece,
          position: deepCopy(this._currentPosition),
          orientation: this.orientation
        }
      }));
    }
    _mouseleaveSquare(e9) {
      if (this._dragState !== void 0) {
        return;
      }
      const square = e9.currentTarget.getAttribute("data-square");
      if (!validSquare(square)) {
        return;
      }
      const piece = this._currentPosition.hasOwnProperty(square) && this._currentPosition[square];
      this.dispatchEvent(new CustomEvent("mouseout-square", {
        bubbles: true,
        detail: {
          square,
          piece,
          position: deepCopy(this._currentPosition),
          orientation: this.orientation
        }
      }));
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Sets the position of the board.
     *
     * @param useAnimation If `true`, animate to the new position. If `false`,
     *   show the new position instantly.
     */
    setPosition(position, useAnimation = true) {
      position = normalizePozition(position);
      if (!validPositionObject(position)) {
        throw this._error(6482, "Invalid value passed to the position method.", position);
      }
      if (useAnimation) {
        const animations = this._calculateAnimations(this._currentPosition, position);
        this._doAnimations(animations, this._currentPosition, position);
      }
      this._setCurrentPosition(position);
      this.requestUpdate();
    }
    /**
     * Returns the current position as a FEN string.
     */
    fen() {
      return objToFen(this._currentPosition);
    }
    /**
     * Sets the board to the start position.
     *
     * @param useAnimation If `true`, animate to the new position. If `false`,
     *   show the new position instantly.
     */
    start(useAnimation) {
      this.setPosition("start", useAnimation);
    }
    /**
     * Removes all the pieces on the board. If `useAnimation` is `false`, removes
     * pieces instantly.
     *
     * This is shorthand for `setPosition({})`.
     *
     * @param useAnimation If `true`, animate to the new position. If `false`,
     *   show the new position instantly.
     */
    clear(useAnimation) {
      this.setPosition({}, useAnimation);
    }
    /**
     * Executes one or more moves on the board.
     *
     * Moves are strings the form of "e2-e4", "f6-d5", etc., Pass `false` as an
     * argument to disable animation.
     */
    move(...args) {
      let useAnimation = true;
      const moves = {};
      for (const arg of args) {
        if (arg === false) {
          useAnimation = false;
          continue;
        }
        if (!validMove(arg)) {
          this._error(2826, "Invalid move passed to the move method.", arg);
          continue;
        }
        const [from, to] = arg.split("-");
        moves[from] = to;
      }
      const newPos = calculatePositionFromMoves(this._currentPosition, moves);
      this.setPosition(newPos, useAnimation);
      return newPos;
    }
    /**
     * Flip the orientation.
     */
    flip() {
      this.orientation = this.orientation === "white" ? "black" : "white";
    }
    /**
     * Recalculates board and square sizes based on the parent element and redraws
     * the board accordingly.
     */
    resize() {
      this.requestUpdate();
    }
    // -------------------------------------------------------------------------
    // Lifecycle Callbacks
    // -------------------------------------------------------------------------
    firstUpdated() {
      this.requestUpdate();
      if (window.ResizeObserver !== void 0) {
        new ResizeObserver(() => {
          this.resize();
        }).observe(this);
      }
    }
    connectedCallback() {
      super.connectedCallback();
      window.addEventListener("mousemove", this._mousemoveWindow);
      window.addEventListener("mouseup", this._mouseupWindow);
      window.addEventListener("touchmove", this._mousemoveWindow, {
        passive: false
      });
      window.addEventListener("touchend", this._mouseupWindow, {
        passive: false
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      window.removeEventListener("mousemove", this._mousemoveWindow);
      window.removeEventListener("mouseup", this._mouseupWindow);
      window.removeEventListener("touchmove", this._mousemoveWindow);
      window.removeEventListener("touchend", this._mouseupWindow);
    }
    // -------------------------------------------------------------------------
    // Control Flow
    // -------------------------------------------------------------------------
    _setCurrentPosition(position) {
      const oldPos = deepCopy(this._currentPosition);
      const newPos = deepCopy(position);
      const oldFen = objToFen(oldPos);
      const newFen = objToFen(newPos);
      if (oldFen === newFen)
        return;
      this.dispatchEvent(new CustomEvent("change", {
        bubbles: true,
        detail: {
          value: newPos,
          oldValue: oldPos
        }
      }));
      this._currentPosition = position;
    }
    _isXYOnSquare(x3, y3) {
      const elements = this.shadowRoot.elementsFromPoint(x3, y3);
      const squareEl = elements.find((e9) => e9.classList.contains("square"));
      const square = squareEl === void 0 ? "offboard" : squareEl.getAttribute("data-square");
      return square;
    }
    _highlightSquare(square, value = true) {
      if (value) {
        this._highlightedSquares.add(square);
      } else {
        this._highlightedSquares.delete(square);
      }
      this.requestUpdate("_highlightedSquares");
    }
    async _snapbackDraggedPiece() {
      assertIsDragging(this._dragState);
      const { source, piece } = this._dragState;
      if (source === "spare") {
        return this._trashDraggedPiece();
      }
      this._dragState = {
        state: "snapback",
        piece,
        source
      };
      this.requestUpdate();
      await new Promise((resolve) => setTimeout(resolve, 0));
      return new Promise((resolve) => {
        const transitionComplete = () => {
          this._draggedPieceElement.removeEventListener("transitionend", transitionComplete);
          resolve();
          this.dispatchEvent(new CustomEvent("snapback-end", {
            bubbles: true,
            detail: {
              piece,
              square: source,
              position: deepCopy(this._currentPosition),
              orientation: this.orientation
            }
          }));
        };
        this._draggedPieceElement.addEventListener("transitionend", transitionComplete);
      });
    }
    async _trashDraggedPiece() {
      assertIsDragging(this._dragState);
      const { source, piece } = this._dragState;
      const newPosition = deepCopy(this._currentPosition);
      delete newPosition[source];
      this._setCurrentPosition(newPosition);
      this._dragState = {
        state: "trash",
        piece,
        x: this._dragState.x,
        y: this._dragState.y,
        source: this._dragState.source
      };
      this.requestUpdate();
      await new Promise((resolve) => setTimeout(resolve, 0));
      return new Promise((resolve) => {
        const transitionComplete = () => {
          this._draggedPieceElement.removeEventListener("transitionend", transitionComplete);
          resolve();
        };
        this._draggedPieceElement.addEventListener("transitionend", transitionComplete);
      });
    }
    async _dropDraggedPieceOnSquare(square) {
      assertIsDragging(this._dragState);
      const { source, piece } = this._dragState;
      const newPosition = deepCopy(this._currentPosition);
      delete newPosition[source];
      newPosition[square] = piece;
      this._setCurrentPosition(newPosition);
      this._dragState = {
        state: "snap",
        piece,
        location: square,
        source: square
      };
      this.requestUpdate();
      await new Promise((resolve) => setTimeout(resolve, 0));
      return new Promise((resolve) => {
        const transitionComplete = () => {
          this._draggedPieceElement.removeEventListener("transitionend", transitionComplete);
          resolve();
          this.dispatchEvent(new CustomEvent("snap-end", {
            bubbles: true,
            detail: {
              source,
              square,
              piece
            }
          }));
        };
        this._draggedPieceElement.addEventListener("transitionend", transitionComplete);
      });
    }
    _beginDraggingPiece(source, piece, x3, y3) {
      const event = new CustomEvent("drag-start", {
        bubbles: true,
        cancelable: true,
        detail: {
          source,
          piece,
          position: deepCopy(this._currentPosition),
          orientation: this.orientation
        }
      });
      this.dispatchEvent(event);
      if (event.defaultPrevented) {
        return;
      }
      this._dragState = {
        state: "dragging",
        x: x3,
        y: y3,
        piece,
        // if the piece came from spare pieces, location is offboard
        location: source === "spare" ? "offboard" : source,
        source
      };
      this.requestUpdate();
    }
    _updateDraggedPiece(x3, y3) {
      assertIsDragging(this._dragState);
      this._dragState.x = x3;
      this._dragState.y = y3;
      this.requestUpdate();
      const location2 = this._isXYOnSquare(x3, y3);
      if (location2 === this._dragState.location) {
        return;
      }
      if (validSquare(this._dragState.location)) {
        this._highlightSquare(this._dragState.location, false);
      }
      if (validSquare(location2)) {
        this._highlightSquare(location2);
      }
      this.dispatchEvent(new CustomEvent("drag-move", {
        bubbles: true,
        detail: {
          newLocation: location2,
          oldLocation: this._dragState.location,
          source: this._dragState.source,
          piece: this._dragState.piece,
          position: deepCopy(this._currentPosition),
          orientation: this.orientation
        }
      }));
      this._dragState.location = location2;
    }
    async _stopDraggedPiece(location2) {
      assertIsDragging(this._dragState);
      const { source, piece } = this._dragState;
      let action = "drop";
      if (location2 === "offboard") {
        action = this.dropOffBoard === "trash" ? "trash" : "snapback";
      }
      const newPosition = deepCopy(this._currentPosition);
      const oldPosition = deepCopy(this._currentPosition);
      if (source === "spare" && validSquare(location2)) {
        newPosition[location2] = piece;
      }
      if (validSquare(source)) {
        delete newPosition[source];
        if (validSquare(location2)) {
          newPosition[location2] = piece;
        }
      }
      const dropEvent = new CustomEvent("drop", {
        bubbles: true,
        detail: {
          source,
          target: location2,
          piece,
          newPosition,
          oldPosition,
          orientation: this.orientation,
          setAction(a4) {
            action = a4;
          }
        }
      });
      this.dispatchEvent(dropEvent);
      this._highlightedSquares.clear();
      if (action === "snapback") {
        await this._snapbackDraggedPiece();
      } else if (action === "trash") {
        await this._trashDraggedPiece();
      } else if (action === "drop") {
        await this._dropDraggedPieceOnSquare(location2);
      }
      this._dragState = void 0;
      this.requestUpdate();
    }
    // -------------------------------------------------------------------------
    // Animations
    // -------------------------------------------------------------------------
    // calculate an array of animations that need to happen in order to get
    // from pos1 to pos2
    _calculateAnimations(pos1, pos2) {
      pos1 = deepCopy(pos1);
      pos2 = deepCopy(pos2);
      const animations = [];
      const squaresMovedTo = {};
      for (const i8 in pos2) {
        if (!pos2.hasOwnProperty(i8))
          continue;
        if (pos1.hasOwnProperty(i8) && pos1[i8] === pos2[i8]) {
          delete pos1[i8];
          delete pos2[i8];
        }
      }
      for (const i8 in pos2) {
        if (!pos2.hasOwnProperty(i8))
          continue;
        const closestPiece = findClosestPiece(pos1, pos2[i8], i8);
        if (closestPiece) {
          animations.push({
            type: "move",
            source: closestPiece,
            destination: i8,
            piece: pos2[i8]
          });
          delete pos1[closestPiece];
          delete pos2[i8];
          squaresMovedTo[i8] = true;
        }
      }
      for (const i8 in pos2) {
        if (!pos2.hasOwnProperty(i8)) {
          continue;
        }
        animations.push({
          type: "add",
          square: i8,
          piece: pos2[i8]
        });
        delete pos2[i8];
      }
      for (const i8 in pos1) {
        if (!pos1.hasOwnProperty(i8))
          continue;
        if (squaresMovedTo.hasOwnProperty(i8))
          continue;
        animations.push({
          type: "clear",
          square: i8,
          piece: pos1[i8]
        });
        delete pos1[i8];
      }
      return animations;
    }
    // execute an array of animations
    async _doAnimations(animations, oldPos, newPos) {
      if (animations.length === 0) {
        return;
      }
      let numFinished = 0;
      const transitionEndListener = () => {
        numFinished++;
        if (numFinished === animations.length) {
          this.shadowRoot.removeEventListener("transitionend", transitionEndListener);
          this._animations.clear();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent("move-end", {
            bubbles: true,
            detail: {
              oldPosition: deepCopy(oldPos),
              newPosition: deepCopy(newPos)
            }
          }));
        }
      };
      this.shadowRoot.addEventListener("transitionend", transitionEndListener);
      this._animations.clear();
      for (const animation of animations) {
        if (animation.type === "add" || animation.type === "add-start") {
          this._animations.set(animation.square, Object.assign(Object.assign({}, animation), { type: "add-start" }));
        } else if (animation.type === "move" || animation.type === "move-start") {
          this._animations.set(animation.destination, Object.assign(Object.assign({}, animation), { type: "move-start" }));
        } else {
          this._animations.set(animation.square, animation);
        }
      }
      this.requestUpdate();
      await new Promise((resolve) => setTimeout(resolve, 0));
      this._animations.clear();
      for (const animation of animations) {
        if (animation.type === "move" || animation.type === "move-start") {
          this._animations.set(animation.destination, animation);
        } else {
          this._animations.set(animation.square, animation);
        }
      }
      this.requestUpdate();
    }
    // -------------------------------------------------------------------------
    // Validation / Errors
    // -------------------------------------------------------------------------
    _error(code, msg, _obj) {
      const errorText = `Chessboard Error ${code} : ${msg}`;
      this.dispatchEvent(new ErrorEvent("error", {
        message: errorText
      }));
      return new Error(errorText);
    }
  };
  ChessBoardElement.styles = styles;
  __decorate([
    n6({
      converter: (value) => normalizePozition(value)
    })
  ], ChessBoardElement.prototype, "position", null);
  __decorate([
    n6({
      attribute: "hide-notation",
      type: Boolean
    })
  ], ChessBoardElement.prototype, "hideNotation", void 0);
  __decorate([
    n6()
  ], ChessBoardElement.prototype, "orientation", void 0);
  __decorate([
    n6({
      attribute: "draggable-pieces",
      type: Boolean
    })
  ], ChessBoardElement.prototype, "draggablePieces", void 0);
  __decorate([
    n6({ attribute: "drop-off-board" })
  ], ChessBoardElement.prototype, "dropOffBoard", void 0);
  __decorate([
    n6({ attribute: "piece-theme" })
  ], ChessBoardElement.prototype, "pieceTheme", void 0);
  __decorate([
    n6({ attribute: false })
  ], ChessBoardElement.prototype, "renderPiece", void 0);
  __decorate([
    n6({
      attribute: "move-speed"
    })
  ], ChessBoardElement.prototype, "moveSpeed", void 0);
  __decorate([
    n6({
      attribute: "snapback-speed"
    })
  ], ChessBoardElement.prototype, "snapbackSpeed", void 0);
  __decorate([
    n6({
      attribute: "snap-speed"
    })
  ], ChessBoardElement.prototype, "snapSpeed", void 0);
  __decorate([
    n6({
      attribute: "trash-speed"
    })
  ], ChessBoardElement.prototype, "trashSpeed", void 0);
  __decorate([
    n6({
      attribute: "appear-speed"
    })
  ], ChessBoardElement.prototype, "appearSpeed", void 0);
  __decorate([
    n6({
      attribute: "spare-pieces",
      type: Boolean
    })
  ], ChessBoardElement.prototype, "sparePieces", void 0);
  __decorate([
    i5('[part~="dragged-piece"]')
  ], ChessBoardElement.prototype, "_draggedPieceElement", void 0);
  ChessBoardElement = __decorate([
    e5("chess-board")
  ], ChessBoardElement);

  // static/script/src/scripts.js
  var import_htmx = __toESM(require_htmx_min());

  // static/script/src/htmx_loader.js
  window.htmx = require_htmx_min();
  window.htmx.config.responseHandling = [
    { code: "404", swap: true, error: false }
  ];

  // static/script/src/scripts.js
  var api;
  var attrPrefix = "hx-target-";
  function startsWith(str, prefix) {
    return str.substring(0, prefix.length) === prefix;
  }
  function getRespCodeTarget(elt, respCodeNumber) {
    if (!elt || !respCodeNumber) return null;
    var respCode = respCodeNumber.toString();
    var attrPossibilities = [
      respCode,
      respCode.substr(0, 2) + "*",
      respCode.substr(0, 2) + "x",
      respCode.substr(0, 1) + "*",
      respCode.substr(0, 1) + "x",
      respCode.substr(0, 1) + "**",
      respCode.substr(0, 1) + "xx",
      "*",
      "x",
      "***",
      "xxx"
    ];
    if (startsWith(respCode, "4") || startsWith(respCode, "5")) {
      attrPossibilities.push("error");
    }
    for (var i8 = 0; i8 < attrPossibilities.length; i8++) {
      var attr = attrPrefix + attrPossibilities[i8];
      var attrValue = api.getClosestAttributeValue(elt, attr);
      if (attrValue) {
        if (attrValue === "this") {
          return api.findThisElement(elt, attr);
        } else {
          return api.querySelectorExt(elt, attrValue);
        }
      }
    }
    return null;
  }
  function handleErrorFlag(evt) {
    if (evt.detail.isError) {
      if (htmx.config.responseTargetUnsetsError) {
        evt.detail.isError = false;
      }
    } else if (htmx.config.responseTargetSetsError) {
      evt.detail.isError = true;
    }
  }
  htmx.defineExtension("response-targets", {
    /** @param {import("../htmx").HtmxInternalApi} apiRef */
    init: function(apiRef) {
      api = apiRef;
      if (htmx.config.responseTargetUnsetsError === void 0) {
        htmx.config.responseTargetUnsetsError = true;
      }
      if (htmx.config.responseTargetSetsError === void 0) {
        htmx.config.responseTargetSetsError = false;
      }
      if (htmx.config.responseTargetPrefersExisting === void 0) {
        htmx.config.responseTargetPrefersExisting = false;
      }
      if (htmx.config.responseTargetPrefersRetargetHeader === void 0) {
        htmx.config.responseTargetPrefersRetargetHeader = true;
      }
    },
    /**
     * @param {string} name
     * @param {Event} evt
     */
    onEvent: function(name, evt) {
      if (name === "htmx:beforeSwap" && evt.detail.xhr && evt.detail.xhr.status !== 200) {
        if (evt.detail.target) {
          if (htmx.config.responseTargetPrefersExisting) {
            evt.detail.shouldSwap = true;
            handleErrorFlag(evt);
            return true;
          }
          if (htmx.config.responseTargetPrefersRetargetHeader && evt.detail.xhr.getAllResponseHeaders().match(/HX-Retarget:/i)) {
            evt.detail.shouldSwap = true;
            handleErrorFlag(evt);
            return true;
          }
        }
        if (!evt.detail.requestConfig) {
          return true;
        }
        var target = getRespCodeTarget(evt.detail.requestConfig.elt, evt.detail.xhr.status);
        if (target) {
          handleErrorFlag(evt);
          evt.detail.shouldSwap = true;
          evt.detail.target = target;
        }
        return true;
      }
    }
  });
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=script.js.map
