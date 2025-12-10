(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("@keyframes oscillate-1c308c9a{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}.flag-grid[data-v-1c308c9a]{display:flex;aspect-ratio:1 / 1;inline-size:var(--v5c6476d6);margin-inline:auto;margin-block-start:1rem;anchor-name:--flag-grid;--oscillate-distance: 2%}.flag-grid.low-perf[data-v-1c308c9a]{--oscillate-distance: 3%}.flag-grid.no-animation .column[data-v-1c308c9a]{animation:none}.flag-grid .column[data-v-1c308c9a]{display:flex;flex:1;flex-direction:column;animation:oscillate-1c308c9a .6s infinite alternate ease-in-out backwards}.flag-grid .column.red[data-v-1c308c9a]{background-color:red}.flag-grid .column.white[data-v-1c308c9a]{background-color:#fff}.flag-grid .row[data-v-1c308c9a]{flex:1;inline-size:100%;background-color:red}.flag-grid .row.white[data-v-1c308c9a]{background-color:#fff}.flag-grid:not(.low-perf)>.column:nth-child(n+7):nth-child(-n+26) .row[data-v-1c308c9a]:nth-child(n+14):nth-child(-n+19){background-color:#fff}.flag-grid:not(.low-perf)>.column:nth-child(n+14):nth-child(-n+19) .row[data-v-1c308c9a]:nth-child(n+7):nth-child(-n+26){background-color:#fff}.flag-grid.low-perf .column:nth-child(n+4):nth-child(-n+12) .row[data-v-1c308c9a]:nth-child(n+7):nth-child(-n+9){background-color:#fff}.flag-grid.low-perf .column:nth-child(n+7):nth-child(-n+9) .row[data-v-1c308c9a]:nth-child(n+4):nth-child(-n+12){background-color:#fff}")),document.head.appendChild(a)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
import { useCssVars as _, computed as h, createElementBlock as v, openBlock as g, normalizeClass as S, Fragment as C, renderList as A, normalizeStyle as M, createCommentVNode as x } from "vue";
const F = (r, l) => {
  const i = r.__vccOpts || r;
  for (const [w, k] of l)
    i[w] = k;
  return i;
}, D = {
  __name: "SwissFlag",
  props: {
    blockSize: {
      type: String,
      default: "12rem"
    },
    lowPerfVariant: {
      type: Boolean,
      default: !1
    },
    removeAnimation: {
      type: Boolean,
      default: !1
    }
  },
  setup(r) {
    _((n) => ({
      v5c6476d6: r.blockSize
    }));
    const l = r, i = h(() => {
      const n = navigator.hardwareConcurrency || 2, f = navigator.deviceMemory || 2, e = navigator.connection?.effectiveType || "4g", s = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      return n >= 4 && f >= 4 && e !== "slow-2g" && !s;
    }), w = h(
      () => !l.lowPerfVariant && !l.removeAnimation && i.value ? 32 : 15
    ), k = h(
      () => !l.lowPerfVariant && !l.removeAnimation && i.value ? 50 : 35
    ), P = h(() => {
      const n = w.value, f = [];
      let e, s, c, u;
      n === 32 ? (e = [6, 25], s = [13, 18], c = [13, 18], u = [6, 25]) : (e = [3, 11], s = [6, 8], c = [6, 8], u = [3, 11]);
      const z = (t, o) => {
        const d = t >= e[0] && t <= e[1] && o >= s[0] && o <= s[1], m = t >= c[0] && t <= c[1] && o >= u[0] && o <= u[1];
        return d || m;
      }, p = (t) => {
        if (n === 32) return 1;
        const o = Math.floor(t / 3);
        return o === 1 || o === 3 ? 7 / 3 : 2;
      };
      for (let t = 0; t < n; t++) {
        const o = [];
        let d = 0, m = z(t, 0) ? "white" : "red";
        for (let a = 1; a < n; a++) {
          const b = z(t, a) ? "white" : "red";
          if (b !== m) {
            let V = 0;
            for (let y = d; y < a; y++) V += p(y);
            o.push({ color: m, size: V }), m = b, d = a;
          }
        }
        let B = 0;
        for (let a = d; a < n; a++) B += p(a);
        o.push({ color: m, size: B }), f.push({
          width: p(t),
          blocks: o
        });
      }
      return f;
    });
    return (n, f) => (g(), v("section", {
      class: S(["flag-grid", {
        "low-perf": !i.value || r.lowPerfVariant || r.removeAnimation,
        "no-animation": r.removeAnimation
      }])
    }, [
      (g(!0), v(C, null, A(P.value, (e, s) => (g(), v("div", {
        key: s,
        class: S(["column", e.blocks.length === 1 ? e.blocks[0].color : ""]),
        style: M({
          animationDelay: s * k.value + "ms",
          flex: e.width
        })
      }, [
        e.blocks.length > 1 ? (g(!0), v(C, { key: 0 }, A(e.blocks, (c, u) => (g(), v("div", {
          key: u,
          class: S(["row", c.color]),
          style: M({ flex: c.size })
        }, null, 6))), 128)) : x("", !0)
      ], 6))), 128))
    ], 2));
  }
}, H = /* @__PURE__ */ F(D, [["__scopeId", "data-v-1c308c9a"]]), X = {
  install: (r) => {
    r.component("SwissFlag", H);
  }
};
export {
  H as SwissFlag,
  X as default
};
