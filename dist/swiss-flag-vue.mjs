(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("@keyframes oscillate-cf207242{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}.flag-grid[data-v-cf207242]{display:flex;aspect-ratio:1 / 1;inline-size:var(--fbe807ac);--oscillate-distance: 2%}.flag-grid.low-perf[data-v-cf207242]{--oscillate-distance: 3%}.flag-grid.no-animation .column[data-v-cf207242]{animation:none}.flag-grid .column[data-v-cf207242]{display:flex;flex:1;flex-direction:column;animation:oscillate-cf207242 .6s infinite alternate ease-in-out backwards}.flag-grid .column.red[data-v-cf207242]{background-color:red}.flag-grid .column.white[data-v-cf207242]{background-color:#fff}.flag-grid .row[data-v-cf207242]{flex:1;inline-size:100%;background-color:red}.flag-grid .row.white[data-v-cf207242]{background-color:#fff}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { useCssVars as x, computed as h, createElementBlock as v, openBlock as g, normalizeClass as S, Fragment as _, renderList as C, normalizeStyle as M, createCommentVNode as F } from "vue";
const A = (s, f) => {
  const i = s.__vccOpts || s;
  for (const [p, w] of f)
    i[p] = w;
  return i;
}, D = {
  __name: "SwissFlag",
  props: {
    inlineSize: {
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
  setup(s) {
    x((r) => ({
      fbe807ac: s.inlineSize
    }));
    const f = s, i = h(() => {
      const r = navigator.hardwareConcurrency || 2, m = navigator.deviceMemory || 2, t = navigator.connection?.effectiveType || "4g", n = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      return r >= 4 && m >= 4 && t !== "slow-2g" && !n;
    }), p = h(() => f.removeAnimation ? 5 : !f.lowPerfVariant && i.value ? 32 : 15), w = h(
      () => !f.lowPerfVariant && i.value ? 50 : 35
    ), P = h(() => {
      const r = p.value, m = [];
      let t, n, l, c;
      r === 32 ? (t = [6, 25], n = [13, 18], l = [13, 18], c = [6, 25]) : r === 15 ? (t = [3, 11], n = [6, 8], l = [6, 8], c = [3, 11]) : r === 5 && (t = [1, 3], n = [2, 2], l = [2, 2], c = [1, 3]);
      const z = (e, o) => {
        const d = e >= t[0] && e <= t[1] && o >= n[0] && o <= n[1], u = e >= l[0] && e <= l[1] && o >= c[0] && o <= c[1];
        return d || u;
      }, k = (e) => {
        if (r === 32) return 1;
        if (r === 5)
          return e === 1 || e === 3 ? 7 : 6;
        const o = Math.floor(e / 3);
        return o === 1 || o === 3 ? 7 / 3 : 2;
      };
      for (let e = 0; e < r; e++) {
        const o = [];
        let d = 0, u = z(e, 0) ? "white" : "red";
        for (let a = 1; a < r; a++) {
          const b = z(e, a) ? "white" : "red";
          if (b !== u) {
            let V = 0;
            for (let y = d; y < a; y++) V += k(y);
            o.push({ color: u, size: V }), u = b, d = a;
          }
        }
        let B = 0;
        for (let a = d; a < r; a++) B += k(a);
        o.push({ color: u, size: B }), m.push({
          width: k(e),
          blocks: o
        });
      }
      return m;
    });
    return (r, m) => (g(), v("section", {
      class: S(["flag-grid", {
        "low-perf": !i.value || s.lowPerfVariant,
        "no-animation": s.removeAnimation
      }])
    }, [
      (g(!0), v(_, null, C(P.value, (t, n) => (g(), v("div", {
        key: n,
        class: S(["column", t.blocks.length === 1 ? t.blocks[0].color : ""]),
        style: M({
          animationDelay: n * w.value + "ms",
          flex: t.width
        })
      }, [
        t.blocks.length > 1 ? (g(!0), v(_, { key: 0 }, C(t.blocks, (l, c) => (g(), v("div", {
          key: c,
          class: S(["row", l.color]),
          style: M({ flex: l.size })
        }, null, 6))), 128)) : F("", !0)
      ], 6))), 128))
    ], 2));
  }
}, H = /* @__PURE__ */ A(D, [["__scopeId", "data-v-cf207242"]]), X = {
  install: (s) => {
    s.component("SwissFlag", H);
  }
};
export {
  H as SwissFlag,
  X as default
};
