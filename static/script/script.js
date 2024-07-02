(() => {
  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t4, e8, n8) {
      if (this._$cssResult$ = true, n8 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e8;
    }
    get styleSheet() {
      let t4 = this.o;
      const s5 = this.t;
      if (e && void 0 === t4) {
        const e8 = void 0 !== s5 && 1 === s5.length;
        e8 && (t4 = n.get(s5)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e8 && n.set(s5, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t4) => new o("string" == typeof t4 ? t4 : t4 + "", void 0, s);
  var i = (t4, ...e8) => {
    const n8 = 1 === t4.length ? t4[0] : e8.reduce((e9, s5, n9) => e9 + ((t5) => {
      if (true === t5._$cssResult$) return t5.cssText;
      if ("number" == typeof t5) return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t4[n9 + 1], t4[0]);
    return new o(n8, t4, s);
  };
  var S = (s5, n8) => {
    e ? s5.adoptedStyleSheets = n8.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : n8.forEach((e8) => {
      const n9 = document.createElement("style"), o7 = t.litNonce;
      void 0 !== o7 && n9.setAttribute("nonce", o7), n9.textContent = e8.cssText, s5.appendChild(n9);
    });
  };
  var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e8 = "";
    for (const s5 of t5.cssRules) e8 += s5.cssText;
    return r(e8);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t4, i7) {
    switch (i7) {
      case Boolean:
        t4 = t4 ? h : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, i7) {
    let s5 = t4;
    switch (i7) {
      case Boolean:
        s5 = null !== t4;
        break;
      case Number:
        s5 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t4);
        } catch (t5) {
          s5 = null;
        }
    }
    return s5;
  } };
  var a = (t4, i7) => i7 !== t4 && (i7 == i7 || t4 == t4);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = "finalized";
  var u = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
    }
    static addInitializer(t4) {
      var i7;
      this.finalize(), (null !== (i7 = this.h) && void 0 !== i7 ? i7 : this.h = []).push(t4);
    }
    static get observedAttributes() {
      this.finalize();
      const t4 = [];
      return this.elementProperties.forEach((i7, s5) => {
        const e8 = this._$Ep(s5, i7);
        void 0 !== e8 && (this._$Ev.set(e8, s5), t4.push(e8));
      }), t4;
    }
    static createProperty(t4, i7 = l) {
      if (i7.state && (i7.attribute = false), this.finalize(), this.elementProperties.set(t4, i7), !i7.noAccessor && !this.prototype.hasOwnProperty(t4)) {
        const s5 = "symbol" == typeof t4 ? Symbol() : "__" + t4, e8 = this.getPropertyDescriptor(t4, s5, i7);
        void 0 !== e8 && Object.defineProperty(this.prototype, t4, e8);
      }
    }
    static getPropertyDescriptor(t4, i7, s5) {
      return { get() {
        return this[i7];
      }, set(e8) {
        const r4 = this[t4];
        this[i7] = e8, this.requestUpdate(t4, r4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) || l;
    }
    static finalize() {
      if (this.hasOwnProperty(d)) return false;
      this[d] = true;
      const t4 = Object.getPrototypeOf(this);
      if (t4.finalize(), void 0 !== t4.h && (this.h = [...t4.h]), this.elementProperties = new Map(t4.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t5 = this.properties, i7 = [...Object.getOwnPropertyNames(t5), ...Object.getOwnPropertySymbols(t5)];
        for (const s5 of i7) this.createProperty(s5, t5[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i7) {
      const s5 = [];
      if (Array.isArray(i7)) {
        const e8 = new Set(i7.flat(1 / 0).reverse());
        for (const i8 of e8) s5.unshift(c(i8));
      } else void 0 !== i7 && s5.push(c(i7));
      return s5;
    }
    static _$Ep(t4, i7) {
      const s5 = i7.attribute;
      return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    _$Eu() {
      var t4;
      this._$E_ = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t4 = this.constructor.h) || void 0 === t4 || t4.forEach((t5) => t5(this));
    }
    addController(t4) {
      var i7, s5;
      (null !== (i7 = this._$ES) && void 0 !== i7 ? i7 : this._$ES = []).push(t4), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t4.hostConnected) || void 0 === s5 || s5.call(t4));
    }
    removeController(t4) {
      var i7;
      null === (i7 = this._$ES) || void 0 === i7 || i7.splice(this._$ES.indexOf(t4) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t4, i7) => {
        this.hasOwnProperty(i7) && (this._$Ei.set(i7, this[i7]), delete this[i7]);
      });
    }
    createRenderRoot() {
      var t4;
      const s5 = null !== (t4 = this.shadowRoot) && void 0 !== t4 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t4;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t5) => {
        var i7;
        return null === (i7 = t5.hostConnected) || void 0 === i7 ? void 0 : i7.call(t5);
      });
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      var t4;
      null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t5) => {
        var i7;
        return null === (i7 = t5.hostDisconnected) || void 0 === i7 ? void 0 : i7.call(t5);
      });
    }
    attributeChangedCallback(t4, i7, s5) {
      this._$AK(t4, s5);
    }
    _$EO(t4, i7, s5 = l) {
      var e8;
      const r4 = this.constructor._$Ep(t4, s5);
      if (void 0 !== r4 && true === s5.reflect) {
        const h3 = (void 0 !== (null === (e8 = s5.converter) || void 0 === e8 ? void 0 : e8.toAttribute) ? s5.converter : n2).toAttribute(i7, s5.type);
        this._$El = t4, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
      }
    }
    _$AK(t4, i7) {
      var s5;
      const e8 = this.constructor, r4 = e8._$Ev.get(t4);
      if (void 0 !== r4 && this._$El !== r4) {
        const t5 = e8.getPropertyOptions(r4), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== (null === (s5 = t5.converter) || void 0 === s5 ? void 0 : s5.fromAttribute) ? t5.converter : n2;
        this._$El = r4, this[r4] = h3.fromAttribute(i7, t5.type), this._$El = null;
      }
    }
    requestUpdate(t4, i7, s5) {
      let e8 = true;
      void 0 !== t4 && (((s5 = s5 || this.constructor.getPropertyOptions(t4)).hasChanged || a)(this[t4], i7) ? (this._$AL.has(t4) || this._$AL.set(t4, i7), true === s5.reflect && this._$El !== t4 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t4, s5))) : e8 = false), !this.isUpdatePending && e8 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t4;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t5, i8) => this[i8] = t5), this._$Ei = void 0);
      let i7 = false;
      const s5 = this._$AL;
      try {
        i7 = this.shouldUpdate(s5), i7 ? (this.willUpdate(s5), null === (t4 = this._$ES) || void 0 === t4 || t4.forEach((t5) => {
          var i8;
          return null === (i8 = t5.hostUpdate) || void 0 === i8 ? void 0 : i8.call(t5);
        }), this.update(s5)) : this._$Ek();
      } catch (t5) {
        throw i7 = false, this._$Ek(), t5;
      }
      i7 && this._$AE(s5);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      var i7;
      null === (i7 = this._$ES) || void 0 === i7 || i7.forEach((t5) => {
        var i8;
        return null === (i8 = t5.hostUpdated) || void 0 === i8 ? void 0 : i8.call(t5);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
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
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      void 0 !== this._$EC && (this._$EC.forEach((t5, i7) => this._$EO(i7, this[i7], t5)), this._$EC = void 0), this._$Ek();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.3");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var o3 = "$lit$";
  var n3 = `lit$${(Math.random() + "").slice(9)}$`;
  var l2 = "?" + n3;
  var h2 = `<${l2}>`;
  var r3 = document;
  var u2 = () => r3.createComment("");
  var d2 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var c2 = Array.isArray;
  var v = (t4) => c2(t4) || "function" == typeof (null == t4 ? void 0 : t4[Symbol.iterator]);
  var a2 = "[ 	\n\f\r]";
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y = /^(?:script|style|textarea|title)$/i;
  var w = (t4) => (i7, ...s5) => ({ _$litType$: t4, strings: i7, values: s5 });
  var x = w(1);
  var b = w(2);
  var T = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var E = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129, null, false);
  function P(t4, i7) {
    if (!Array.isArray(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e3 ? e3.createHTML(i7) : i7;
  }
  var V = (t4, i7) => {
    const s5 = t4.length - 1, e8 = [];
    let l6, r4 = 2 === i7 ? "<svg>" : "", u3 = f;
    for (let i8 = 0; i8 < s5; i8++) {
      const s6 = t4[i8];
      let d3, c3, v2 = -1, a3 = 0;
      for (; a3 < s6.length && (u3.lastIndex = a3, c3 = u3.exec(s6), null !== c3); ) a3 = u3.lastIndex, u3 === f ? "!--" === c3[1] ? u3 = _ : void 0 !== c3[1] ? u3 = m : void 0 !== c3[2] ? (y.test(c3[2]) && (l6 = RegExp("</" + c3[2], "g")), u3 = p) : void 0 !== c3[3] && (u3 = p) : u3 === p ? ">" === c3[0] ? (u3 = null != l6 ? l6 : f, v2 = -1) : void 0 === c3[1] ? v2 = -2 : (v2 = u3.lastIndex - c3[2].length, d3 = c3[1], u3 = void 0 === c3[3] ? p : '"' === c3[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p : u3 === _ || u3 === m ? u3 = f : (u3 = p, l6 = void 0);
      const w2 = u3 === p && t4[i8 + 1].startsWith("/>") ? " " : "";
      r4 += u3 === f ? s6 + h2 : v2 >= 0 ? (e8.push(d3), s6.slice(0, v2) + o3 + s6.slice(v2) + n3 + w2) : s6 + n3 + (-2 === v2 ? (e8.push(void 0), i8) : w2);
    }
    return [P(t4, r4 + (t4[s5] || "<?>") + (2 === i7 ? "</svg>" : "")), e8];
  };
  var N = class _N {
    constructor({ strings: t4, _$litType$: i7 }, e8) {
      let h3;
      this.parts = [];
      let r4 = 0, d3 = 0;
      const c3 = t4.length - 1, v2 = this.parts, [a3, f2] = V(t4, i7);
      if (this.el = _N.createElement(a3, e8), C.currentNode = this.el.content, 2 === i7) {
        const t5 = this.el.content, i8 = t5.firstChild;
        i8.remove(), t5.append(...i8.childNodes);
      }
      for (; null !== (h3 = C.nextNode()) && v2.length < c3; ) {
        if (1 === h3.nodeType) {
          if (h3.hasAttributes()) {
            const t5 = [];
            for (const i8 of h3.getAttributeNames()) if (i8.endsWith(o3) || i8.startsWith(n3)) {
              const s5 = f2[d3++];
              if (t5.push(i8), void 0 !== s5) {
                const t6 = h3.getAttribute(s5.toLowerCase() + o3).split(n3), i9 = /([.?@])?(.*)/.exec(s5);
                v2.push({ type: 1, index: r4, name: i9[2], strings: t6, ctor: "." === i9[1] ? H : "?" === i9[1] ? L : "@" === i9[1] ? z : k });
              } else v2.push({ type: 6, index: r4 });
            }
            for (const i8 of t5) h3.removeAttribute(i8);
          }
          if (y.test(h3.tagName)) {
            const t5 = h3.textContent.split(n3), i8 = t5.length - 1;
            if (i8 > 0) {
              h3.textContent = s3 ? s3.emptyScript : "";
              for (let s5 = 0; s5 < i8; s5++) h3.append(t5[s5], u2()), C.nextNode(), v2.push({ type: 2, index: ++r4 });
              h3.append(t5[i8], u2());
            }
          }
        } else if (8 === h3.nodeType) if (h3.data === l2) v2.push({ type: 2, index: r4 });
        else {
          let t5 = -1;
          for (; -1 !== (t5 = h3.data.indexOf(n3, t5 + 1)); ) v2.push({ type: 7, index: r4 }), t5 += n3.length - 1;
        }
        r4++;
      }
    }
    static createElement(t4, i7) {
      const s5 = r3.createElement("template");
      return s5.innerHTML = t4, s5;
    }
  };
  function S2(t4, i7, s5 = t4, e8) {
    var o7, n8, l6, h3;
    if (i7 === T) return i7;
    let r4 = void 0 !== e8 ? null === (o7 = s5._$Co) || void 0 === o7 ? void 0 : o7[e8] : s5._$Cl;
    const u3 = d2(i7) ? void 0 : i7._$litDirective$;
    return (null == r4 ? void 0 : r4.constructor) !== u3 && (null === (n8 = null == r4 ? void 0 : r4._$AO) || void 0 === n8 || n8.call(r4, false), void 0 === u3 ? r4 = void 0 : (r4 = new u3(t4), r4._$AT(t4, s5, e8)), void 0 !== e8 ? (null !== (l6 = (h3 = s5)._$Co) && void 0 !== l6 ? l6 : h3._$Co = [])[e8] = r4 : s5._$Cl = r4), void 0 !== r4 && (i7 = S2(t4, r4._$AS(t4, i7.values), r4, e8)), i7;
  }
  var M = class {
    constructor(t4, i7) {
      this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i7;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t4) {
      var i7;
      const { el: { content: s5 }, parts: e8 } = this._$AD, o7 = (null !== (i7 = null == t4 ? void 0 : t4.creationScope) && void 0 !== i7 ? i7 : r3).importNode(s5, true);
      C.currentNode = o7;
      let n8 = C.nextNode(), l6 = 0, h3 = 0, u3 = e8[0];
      for (; void 0 !== u3; ) {
        if (l6 === u3.index) {
          let i8;
          2 === u3.type ? i8 = new R(n8, n8.nextSibling, this, t4) : 1 === u3.type ? i8 = new u3.ctor(n8, u3.name, u3.strings, this, t4) : 6 === u3.type && (i8 = new Z(n8, this, t4)), this._$AV.push(i8), u3 = e8[++h3];
        }
        l6 !== (null == u3 ? void 0 : u3.index) && (n8 = C.nextNode(), l6++);
      }
      return C.currentNode = r3, o7;
    }
    v(t4) {
      let i7 = 0;
      for (const s5 of this._$AV) void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t4, s5, i7), i7 += s5.strings.length - 2) : s5._$AI(t4[i7])), i7++;
    }
  };
  var R = class _R {
    constructor(t4, i7, s5, e8) {
      var o7;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t4, this._$AB = i7, this._$AM = s5, this.options = e8, this._$Cp = null === (o7 = null == e8 ? void 0 : e8.isConnected) || void 0 === o7 || o7;
    }
    get _$AU() {
      var t4, i7;
      return null !== (i7 = null === (t4 = this._$AM) || void 0 === t4 ? void 0 : t4._$AU) && void 0 !== i7 ? i7 : this._$Cp;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i7 = this._$AM;
      return void 0 !== i7 && 11 === (null == t4 ? void 0 : t4.nodeType) && (t4 = i7.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i7 = this) {
      t4 = S2(this, t4, i7), d2(t4) ? t4 === A || null == t4 || "" === t4 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t4 !== this._$AH && t4 !== T && this._(t4) : void 0 !== t4._$litType$ ? this.g(t4) : void 0 !== t4.nodeType ? this.$(t4) : v(t4) ? this.T(t4) : this._(t4);
    }
    k(t4) {
      return this._$AA.parentNode.insertBefore(t4, this._$AB);
    }
    $(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.k(t4));
    }
    _(t4) {
      this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t4 : this.$(r3.createTextNode(t4)), this._$AH = t4;
    }
    g(t4) {
      var i7;
      const { values: s5, _$litType$: e8 } = t4, o7 = "number" == typeof e8 ? this._$AC(t4) : (void 0 === e8.el && (e8.el = N.createElement(P(e8.h, e8.h[0]), this.options)), e8);
      if ((null === (i7 = this._$AH) || void 0 === i7 ? void 0 : i7._$AD) === o7) this._$AH.v(s5);
      else {
        const t5 = new M(o7, this), i8 = t5.u(this.options);
        t5.v(s5), this.$(i8), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i7 = E.get(t4.strings);
      return void 0 === i7 && E.set(t4.strings, i7 = new N(t4)), i7;
    }
    T(t4) {
      c2(this._$AH) || (this._$AH = [], this._$AR());
      const i7 = this._$AH;
      let s5, e8 = 0;
      for (const o7 of t4) e8 === i7.length ? i7.push(s5 = new _R(this.k(u2()), this.k(u2()), this, this.options)) : s5 = i7[e8], s5._$AI(o7), e8++;
      e8 < i7.length && (this._$AR(s5 && s5._$AB.nextSibling, e8), i7.length = e8);
    }
    _$AR(t4 = this._$AA.nextSibling, i7) {
      var s5;
      for (null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i7); t4 && t4 !== this._$AB; ) {
        const i8 = t4.nextSibling;
        t4.remove(), t4 = i8;
      }
    }
    setConnected(t4) {
      var i7;
      void 0 === this._$AM && (this._$Cp = t4, null === (i7 = this._$AP) || void 0 === i7 || i7.call(this, t4));
    }
  };
  var k = class {
    constructor(t4, i7, s5, e8, o7) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t4, this.name = i7, this._$AM = e8, this.options = o7, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4, i7 = this, s5, e8) {
      const o7 = this.strings;
      let n8 = false;
      if (void 0 === o7) t4 = S2(this, t4, i7, 0), n8 = !d2(t4) || t4 !== this._$AH && t4 !== T, n8 && (this._$AH = t4);
      else {
        const e9 = t4;
        let l6, h3;
        for (t4 = o7[0], l6 = 0; l6 < o7.length - 1; l6++) h3 = S2(this, e9[s5 + l6], i7, l6), h3 === T && (h3 = this._$AH[l6]), n8 || (n8 = !d2(h3) || h3 !== this._$AH[l6]), h3 === A ? t4 = A : t4 !== A && (t4 += (null != h3 ? h3 : "") + o7[l6 + 1]), this._$AH[l6] = h3;
      }
      n8 && !e8 && this.j(t4);
    }
    j(t4) {
      t4 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t4 ? t4 : "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t4) {
      this.element[this.name] = t4 === A ? void 0 : t4;
    }
  };
  var I = s3 ? s3.emptyScript : "";
  var L = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t4) {
      t4 && t4 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
  };
  var z = class extends k {
    constructor(t4, i7, s5, e8, o7) {
      super(t4, i7, s5, e8, o7), this.type = 5;
    }
    _$AI(t4, i7 = this) {
      var s5;
      if ((t4 = null !== (s5 = S2(this, t4, i7, 0)) && void 0 !== s5 ? s5 : A) === T) return;
      const e8 = this._$AH, o7 = t4 === A && e8 !== A || t4.capture !== e8.capture || t4.once !== e8.once || t4.passive !== e8.passive, n8 = t4 !== A && (e8 === A || o7);
      o7 && this.element.removeEventListener(this.name, this, e8), n8 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      var i7, s5;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i7 = this.options) || void 0 === i7 ? void 0 : i7.host) && void 0 !== s5 ? s5 : this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var Z = class {
    constructor(t4, i7, s5) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      S2(this, t4);
    }
  };
  var B = i2.litHtmlPolyfillSupport;
  null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
  var D = (t4, i7, s5) => {
    var e8, o7;
    const n8 = null !== (e8 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e8 ? e8 : i7;
    let l6 = n8._$litPart$;
    if (void 0 === l6) {
      const t5 = null !== (o7 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o7 ? o7 : null;
      n8._$litPart$ = l6 = new R(i7.insertBefore(u2(), t5), t5, void 0, null != s5 ? s5 : {});
    }
    return l6._$AI(t4), l6;
  };

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends u {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t4, e8;
      const i7 = super.createRenderRoot();
      return null !== (t4 = (e8 = this.renderOptions).renderBefore) && void 0 !== t4 || (e8.renderBefore = i7.firstChild), i7;
    }
    update(t4) {
      const i7 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = D(i7, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t4;
      super.connectedCallback(), null === (t4 = this._$Do) || void 0 === t4 || t4.setConnected(true);
    }
    disconnectedCallback() {
      var t4;
      super.disconnectedCallback(), null === (t4 = this._$Do) || void 0 === t4 || t4.setConnected(false);
    }
    render() {
      return T;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.3");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var e4 = (e8) => (n8) => "function" == typeof n8 ? ((e9, n9) => (customElements.define(e9, n9), n9))(e8, n8) : ((e9, n9) => {
    const { kind: t4, elements: s5 } = n9;
    return { kind: t4, elements: s5, finisher(n10) {
      customElements.define(e9, n10);
    } };
  })(e8, n8);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i7, e8) => "method" === e8.kind && e8.descriptor && !("value" in e8.descriptor) ? { ...e8, finisher(n8) {
    n8.createProperty(e8.key, i7);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e8.key, initializer() {
    "function" == typeof e8.initializer && (this[e8.key] = e8.initializer.call(this));
  }, finisher(n8) {
    n8.createProperty(e8.key, i7);
  } };
  var e5 = (i7, e8, n8) => {
    e8.constructor.createProperty(n8, i7);
  };
  function n5(n8) {
    return (t4, o7) => void 0 !== o7 ? e5(n8, t4, o7) : i3(n8, t4);
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o5 = ({ finisher: e8, descriptor: t4 }) => (o7, n8) => {
    var r4;
    if (void 0 === n8) {
      const n9 = null !== (r4 = o7.originalKey) && void 0 !== r4 ? r4 : o7.key, i7 = null != t4 ? { kind: "method", placement: "prototype", key: n9, descriptor: t4(o7.key) } : { ...o7, key: n9 };
      return null != e8 && (i7.finisher = function(t5) {
        e8(t5, n9);
      }), i7;
    }
    {
      const r5 = o7.constructor;
      void 0 !== t4 && Object.defineProperty(o7, n8, t4(n8)), null == e8 || e8(r5, n8);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i4(i7, n8) {
    return o5({ descriptor: (o7) => {
      const t4 = { get() {
        var o8, n9;
        return null !== (n9 = null === (o8 = this.renderRoot) || void 0 === o8 ? void 0 : o8.querySelector(i7)) && void 0 !== n9 ? n9 : null;
      }, enumerable: true, configurable: true };
      if (n8) {
        const n9 = "symbol" == typeof o7 ? Symbol() : "__" + o7;
        t4.get = function() {
          var o8, t5;
          return void 0 === this[n9] && (this[n9] = null !== (t5 = null === (o8 = this.renderRoot) || void 0 === o8 ? void 0 : o8.querySelector(i7)) && void 0 !== t5 ? t5 : null), this[n9];
        };
      }
      return t4;
    } });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n6;
  var e6 = null != (null === (n6 = window.HTMLSlotElement) || void 0 === n6 ? void 0 : n6.prototype.assignedElements) ? (o7, n8) => o7.assignedElements(n8) : (o7, n8) => o7.assignedNodes(n8).filter((o8) => o8.nodeType === Node.ELEMENT_NODE);

  // node_modules/lit-html/directive.js
  var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e7 = (t4) => (...e8) => ({ _$litDirective$: t4, values: e8 });
  var i5 = class {
    constructor(t4) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t4, e8, i7) {
      this._$Ct = t4, this._$AM = e8, this._$Ci = i7;
    }
    _$AS(t4, e8) {
      return this.update(t4, e8);
    }
    update(t4, e8) {
      return this.render(...e8);
    }
  };

  // node_modules/lit-html/directives/style-map.js
  var i6 = "important";
  var n7 = " !" + i6;
  var o6 = e7(class extends i5 {
    constructor(t4) {
      var e8;
      if (super(t4), t4.type !== t3.ATTRIBUTE || "style" !== t4.name || (null === (e8 = t4.strings) || void 0 === e8 ? void 0 : e8.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t4) {
      return Object.keys(t4).reduce((e8, r4) => {
        const s5 = t4[r4];
        return null == s5 ? e8 : e8 + `${r4 = r4.includes("-") ? r4 : r4.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s5};`;
      }, "");
    }
    update(e8, [r4]) {
      const { style: s5 } = e8.element;
      if (void 0 === this.ht) {
        this.ht = /* @__PURE__ */ new Set();
        for (const t4 in r4) this.ht.add(t4);
        return this.render(r4);
      }
      this.ht.forEach((t4) => {
        null == r4[t4] && (this.ht.delete(t4), t4.includes("-") ? s5.removeProperty(t4) : s5[t4] = "");
      });
      for (const t4 in r4) {
        const e9 = r4[t4];
        if (null != e9) {
          this.ht.add(t4);
          const r5 = "string" == typeof e9 && e9.endsWith(n7);
          t4.includes("-") || r5 ? s5.setProperty(t4, r5 ? e9.slice(0, -11) : e9, r5 ? i6 : "") : s5[t4] = e9;
        }
      }
      return T;
    }
  });

  // node_modules/lit-html/directives/if-defined.js
  var l5 = (l6) => null != l6 ? l6 : A;

  // node_modules/chessboard-element/lib/utils.js
  var RUN_ASSERTS = true;
  var isString = (s5) => {
    return typeof s5 === "string";
  };
  var isFunction = (f2) => {
    return typeof f2 === "function";
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
  var styles = i`
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
    for (let i7 = 0; i7 < 8; i7++) {
      if (chunks[i7].length !== 8 || chunks[i7].search(/[^kqrnbpKQRNBP1]/) !== -1) {
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
    for (let i7 = 0; i7 < 8; i7++) {
      const row = rows[i7].split("");
      let colIdx = 0;
      for (let j = 0; j < row.length; j++) {
        if (row[j].search(/[1-8]/) !== -1) {
          const numEmptySquares = parseInt(row[j], 10);
          colIdx = colIdx + numEmptySquares;
        } else {
          const square = COLUMNS[colIdx] + currentRow;
          position[square] = fenToPieceCode(row[j]);
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
    for (let i7 = 0; i7 < 8; i7++) {
      for (let j = 0; j < 8; j++) {
        const square = COLUMNS[j] + currentRow;
        if (obj.hasOwnProperty(square)) {
          fen = fen + pieceCodeToFen(obj[square]);
        } else {
          fen = fen + "1";
        }
      }
      if (i7 !== 7) {
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
    for (let i7 = 0; i7 < 8; i7++) {
      for (let j = 0; j < 8; j++) {
        const s5 = COLUMNS[i7] + (j + 1);
        if (square === s5)
          continue;
        squares.push({
          square: s5,
          distance: squareDistance(square, s5)
        });
      }
    }
    squares.sort(function(a3, b2) {
      return a3.distance - b2.distance;
    });
    const surroundingSquares = [];
    for (let i7 = 0; i7 < squares.length; i7++) {
      surroundingSquares.push(squares[i7].square);
    }
    return surroundingSquares;
  };
  var findClosestPiece = (position, piece, square) => {
    const closestSquares = createRadius(square);
    for (let i7 = 0; i7 < closestSquares.length; i7++) {
      const s5 = closestSquares[i7];
      if (position.hasOwnProperty(s5) && position[s5] === piece) {
        return s5;
      }
    }
    return false;
  };
  var calculatePositionFromMoves = (position, moves) => {
    const newPosition = deepCopy(position);
    for (const i7 in moves) {
      if (!moves.hasOwnProperty(i7))
        continue;
      if (!newPosition.hasOwnProperty(i7))
        continue;
      const piece = newPosition[i7];
      delete newPosition[i7];
      newPosition[moves[i7]] = piece;
    }
    return newPosition;
  };

  // node_modules/chessboard-element/lib/wikipedia-pieces-svg.js
  var renderPiece = (piece, container) => {
    D(x` <svg class="piece-image" viewBox="0 0 45 45">${pieces[piece]}</svg> `, container);
  };
  var pieces = {
    bB: b`
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
    wB: b`
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
    bK: b`
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
    wK: b`
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
    bN: b`
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
    wN: b`
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
    bP: b`
    <path
      d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
      style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
  `,
    wP: b`
    <path
      d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
      style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
  `,
    bQ: b`
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
    wQ: b`
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
    bR: b`
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
    wR: b`
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
    var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r4 = Reflect.decorate(decorators, target, key, desc);
    else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d3 = decorators[i7]) r4 = (c3 < 3 ? d3(r4) : c3 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
    return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
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
  var RenderPieceDirective = class extends i5 {
    render(_piece, _renderPiece) {
      return A;
    }
    update(part, [piece, renderPiece2]) {
      if (isFunction(renderPiece2)) {
        renderPiece2(piece, part.element);
      } else {
        part.element.replaceChildren();
      }
      return T;
    }
  };
  var renderPieceDirective = e7(RenderPieceDirective);
  var ChessBoardElement = class ChessBoardElement2 extends s4 {
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
          D(x`<img class="piece-image" src=${pieceImage} />`, container);
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
      this._mousemoveWindow = (e8) => {
        var _a;
        if (!(((_a = this._dragState) === null || _a === void 0 ? void 0 : _a.state) === "dragging")) {
          return;
        }
        e8.preventDefault();
        const pos = e8 instanceof MouseEvent ? e8 : e8.changedTouches[0];
        this._updateDraggedPiece(pos.clientX, pos.clientY);
      };
      this._mouseupWindow = (e8) => {
        var _a;
        if (!(((_a = this._dragState) === null || _a === void 0 ? void 0 : _a.state) === "dragging")) {
          return;
        }
        const pos = e8 instanceof MouseEvent ? e8 : e8.changedTouches[0];
        const location = this._isXYOnSquare(pos.clientX, pos.clientY);
        this._stopDraggedPiece(location);
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
    set position(v2) {
      const oldValue = this._currentPosition;
      this._setCurrentPosition(v2);
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
    set showNotation(v2) {
      this.hideNotation = !v2;
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
      return x`
      <div part="spare-pieces">
        ${this._renderSparePieces(this.orientation === "white" ? "black" : "white")}
      </div>
      ${this._renderBoard()}
      <div part="spare-pieces">
        ${this._renderSparePieces(this.orientation === "white" ? "white" : "black")}
      </div>
      <div
        id="dragged-pieces"
        style=${o6({
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
        return A;
      }
      const pieces2 = color === "black" ? blackPieces : whitePieces;
      return x`
      <div></div>
      ${pieces2.map((p2) => x`
            <div
              id="spare-${p2}"
              @mousedown=${this._mousedownSparePiece}
              @touchstart=${this._mousedownSparePiece}
            >
              ${this._renderPiece(p2, {}, false, sparePieceId(p2))}
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
          const { x: x2, y: y2 } = dragState;
          Object.assign(styles2, {
            top: `${y2 - rect.top - this._squareSize / 2}px`,
            left: `${x2 - rect.left - this._squareSize / 2}px`
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
          const { x: x2, y: y2 } = dragState;
          Object.assign(styles2, {
            transitionProperty: "opacity",
            transitionDuration: `${speedToMS(this.trashSpeed)}ms`,
            opacity: "0",
            top: `${y2 - rect.top - this._squareSize / 2}px`,
            left: `${x2 - rect.left - this._squareSize / 2}px`
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
          squares.push(x`
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
            ${this.showNotation && row === 7 ? x`<div part="notation alpha">${file}</div>` : A}
            ${this.showNotation && col === 0 ? x`<div part="notation numeric">${rank}</div>` : A}
            ${this._renderPiece(piece, pieceStyles, isDragSource)}
          </div>
        `);
        }
      }
      const styles2 = {
        width: this._squareSize * 8 + "px",
        height: this._squareSize * 8 + "px"
      };
      return x`<div part="board" style=${o6(styles2)}>${squares}</div>`;
    }
    _renderPiece(piece, styles2, isDragSource, id, part) {
      if (piece === void 0) {
        return A;
      }
      const style = Object.assign({ opacity: "1", transitionProperty: "", transitionDuration: "0ms" }, styles2);
      if (isDragSource || piece === "") {
        style.display = "none";
      }
      if (piece === "") {
        return A;
      }
      if (!isFunction(this.renderPiece)) {
        this._error(8272, "invalid renderPiece.");
      }
      return x`
      <div
        id=${l5(id)}
        part="piece ${part !== null && part !== void 0 ? part : ""}"
        piece=${piece}
        style=${o6(style)}
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
    _mousedownSquare(e8) {
      if (!this.draggablePieces && !this.sparePieces) {
        return;
      }
      const squareEl = e8.currentTarget;
      const square = squareEl.getAttribute("data-square");
      if (square === null || !this._currentPosition.hasOwnProperty(square)) {
        return;
      }
      e8.preventDefault();
      const pos = e8 instanceof MouseEvent ? e8 : e8.changedTouches[0];
      this._beginDraggingPiece(square, this._currentPosition[square], pos.clientX, pos.clientY);
    }
    _mousedownSparePiece(e8) {
      if (!this.sparePieces) {
        return;
      }
      const sparePieceContainerEl = e8.currentTarget;
      const pieceEl = sparePieceContainerEl.querySelector("[part~=piece]");
      const piece = pieceEl.getAttribute("piece");
      e8.preventDefault();
      const pos = e8 instanceof MouseEvent ? e8 : e8.changedTouches[0];
      this._beginDraggingPiece("spare", piece, pos.clientX, pos.clientY);
    }
    _mouseenterSquare(e8) {
      if (this._dragState !== void 0) {
        return;
      }
      const square = e8.currentTarget.getAttribute("data-square");
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
    _mouseleaveSquare(e8) {
      if (this._dragState !== void 0) {
        return;
      }
      const square = e8.currentTarget.getAttribute("data-square");
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
    _isXYOnSquare(x2, y2) {
      const elements = this.shadowRoot.elementsFromPoint(x2, y2);
      const squareEl = elements.find((e8) => e8.classList.contains("square"));
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
    _beginDraggingPiece(source, piece, x2, y2) {
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
        x: x2,
        y: y2,
        piece,
        // if the piece came from spare pieces, location is offboard
        location: source === "spare" ? "offboard" : source,
        source
      };
      this.requestUpdate();
    }
    _updateDraggedPiece(x2, y2) {
      assertIsDragging(this._dragState);
      this._dragState.x = x2;
      this._dragState.y = y2;
      this.requestUpdate();
      const location = this._isXYOnSquare(x2, y2);
      if (location === this._dragState.location) {
        return;
      }
      if (validSquare(this._dragState.location)) {
        this._highlightSquare(this._dragState.location, false);
      }
      if (validSquare(location)) {
        this._highlightSquare(location);
      }
      this.dispatchEvent(new CustomEvent("drag-move", {
        bubbles: true,
        detail: {
          newLocation: location,
          oldLocation: this._dragState.location,
          source: this._dragState.source,
          piece: this._dragState.piece,
          position: deepCopy(this._currentPosition),
          orientation: this.orientation
        }
      }));
      this._dragState.location = location;
    }
    async _stopDraggedPiece(location) {
      assertIsDragging(this._dragState);
      const { source, piece } = this._dragState;
      let action = "drop";
      if (location === "offboard") {
        action = this.dropOffBoard === "trash" ? "trash" : "snapback";
      }
      const newPosition = deepCopy(this._currentPosition);
      const oldPosition = deepCopy(this._currentPosition);
      if (source === "spare" && validSquare(location)) {
        newPosition[location] = piece;
      }
      if (validSquare(source)) {
        delete newPosition[source];
        if (validSquare(location)) {
          newPosition[location] = piece;
        }
      }
      const dropEvent = new CustomEvent("drop", {
        bubbles: true,
        detail: {
          source,
          target: location,
          piece,
          newPosition,
          oldPosition,
          orientation: this.orientation,
          setAction(a3) {
            action = a3;
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
        await this._dropDraggedPieceOnSquare(location);
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
      for (const i7 in pos2) {
        if (!pos2.hasOwnProperty(i7))
          continue;
        if (pos1.hasOwnProperty(i7) && pos1[i7] === pos2[i7]) {
          delete pos1[i7];
          delete pos2[i7];
        }
      }
      for (const i7 in pos2) {
        if (!pos2.hasOwnProperty(i7))
          continue;
        const closestPiece = findClosestPiece(pos1, pos2[i7], i7);
        if (closestPiece) {
          animations.push({
            type: "move",
            source: closestPiece,
            destination: i7,
            piece: pos2[i7]
          });
          delete pos1[closestPiece];
          delete pos2[i7];
          squaresMovedTo[i7] = true;
        }
      }
      for (const i7 in pos2) {
        if (!pos2.hasOwnProperty(i7)) {
          continue;
        }
        animations.push({
          type: "add",
          square: i7,
          piece: pos2[i7]
        });
        delete pos2[i7];
      }
      for (const i7 in pos1) {
        if (!pos1.hasOwnProperty(i7))
          continue;
        if (squaresMovedTo.hasOwnProperty(i7))
          continue;
        animations.push({
          type: "clear",
          square: i7,
          piece: pos1[i7]
        });
        delete pos1[i7];
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
    n5({
      converter: (value) => normalizePozition(value)
    })
  ], ChessBoardElement.prototype, "position", null);
  __decorate([
    n5({
      attribute: "hide-notation",
      type: Boolean
    })
  ], ChessBoardElement.prototype, "hideNotation", void 0);
  __decorate([
    n5()
  ], ChessBoardElement.prototype, "orientation", void 0);
  __decorate([
    n5({
      attribute: "draggable-pieces",
      type: Boolean
    })
  ], ChessBoardElement.prototype, "draggablePieces", void 0);
  __decorate([
    n5({ attribute: "drop-off-board" })
  ], ChessBoardElement.prototype, "dropOffBoard", void 0);
  __decorate([
    n5({ attribute: "piece-theme" })
  ], ChessBoardElement.prototype, "pieceTheme", void 0);
  __decorate([
    n5({ attribute: false })
  ], ChessBoardElement.prototype, "renderPiece", void 0);
  __decorate([
    n5({
      attribute: "move-speed"
    })
  ], ChessBoardElement.prototype, "moveSpeed", void 0);
  __decorate([
    n5({
      attribute: "snapback-speed"
    })
  ], ChessBoardElement.prototype, "snapbackSpeed", void 0);
  __decorate([
    n5({
      attribute: "snap-speed"
    })
  ], ChessBoardElement.prototype, "snapSpeed", void 0);
  __decorate([
    n5({
      attribute: "trash-speed"
    })
  ], ChessBoardElement.prototype, "trashSpeed", void 0);
  __decorate([
    n5({
      attribute: "appear-speed"
    })
  ], ChessBoardElement.prototype, "appearSpeed", void 0);
  __decorate([
    n5({
      attribute: "spare-pieces",
      type: Boolean
    })
  ], ChessBoardElement.prototype, "sparePieces", void 0);
  __decorate([
    i4('[part~="dragged-piece"]')
  ], ChessBoardElement.prototype, "_draggedPieceElement", void 0);
  ChessBoardElement = __decorate([
    e4("chess-board")
  ], ChessBoardElement);

  // static/script/src/scripts.js
  addEventListener("load", (e8) => {
    document.body.addEventListener("htmx:beforeSwap", (evt) => {
      console.log("beforeSwap");
      if (evt.detail.xhr.status == 404) {
        evt.detail.shouldSwap = true;
        evt.detail.isError = false;
      }
    });
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
