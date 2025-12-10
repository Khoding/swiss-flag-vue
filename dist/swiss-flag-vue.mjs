(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("@keyframes oscillate-167adbe2{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}.flag-grid[data-v-167adbe2]{display:flex;aspect-ratio:1 / 1;inline-size:var(--v0d48245e);margin-inline:auto;margin-block-start:1rem;anchor-name:--flag-grid;--oscillate-distance: 2%}.flag-grid.low-perf[data-v-167adbe2]{--oscillate-distance: 3%}.flag-grid.no-animation .column[data-v-167adbe2]{animation:none}.flag-grid .column[data-v-167adbe2]{display:flex;flex:1;flex-direction:column;animation:oscillate-167adbe2 .6s infinite alternate ease-in-out backwards}.flag-grid .column.red[data-v-167adbe2]{background-color:red}.flag-grid .column.white[data-v-167adbe2]{background-color:#fff}.flag-grid .row[data-v-167adbe2]{flex:1;inline-size:100%;background-color:red}.flag-grid .row.white[data-v-167adbe2]{background-color:#fff}.flag-grid:not(.low-perf)>.column:nth-child(n+7):nth-child(-n+26) .row[data-v-167adbe2]:nth-child(n+14):nth-child(-n+19){background-color:#fff}.flag-grid:not(.low-perf)>.column:nth-child(n+14):nth-child(-n+19) .row[data-v-167adbe2]:nth-child(n+7):nth-child(-n+26){background-color:#fff}.flag-grid.low-perf .column:nth-child(n+4):nth-child(-n+12) .row[data-v-167adbe2]:nth-child(n+7):nth-child(-n+9){background-color:#fff}.flag-grid.low-perf .column:nth-child(n+7):nth-child(-n+9) .row[data-v-167adbe2]:nth-child(n+4):nth-child(-n+12){background-color:#fff}")),document.head.appendChild(a)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import { useCssVars as k, computed as p, createElementBlock as f, openBlock as v, normalizeClass as y, Fragment as B, renderList as V, normalizeStyle as _, createCommentVNode as P } from "vue";
const F = (t, g) => {
  const c = t.__vccOpts || t;
  for (const [h, w] of g)
    c[h] = w;
  return c;
}, M = {
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
  setup(t) {
    k((n) => ({
      v0d48245e: t.blockSize
    }));
    const g = t, c = p(() => {
      const n = navigator.hardwareConcurrency || 2, u = navigator.deviceMemory || 2, e = navigator.connection?.effectiveType || "4g", r = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      return n >= 4 && u >= 4 && e !== "slow-2g" && !r;
    }), h = p(
      () => !g.lowPerfVariant && c.value ? 32 : 15
    ), w = p(
      () => !g.lowPerfVariant && c.value ? 50 : 35
    ), C = p(() => {
      const n = h.value, u = [];
      let e, r, s, l;
      n === 32 ? (e = [6, 25], r = [13, 18], s = [13, 18], l = [6, 25]) : (e = [3, 11], r = [6, 8], s = [6, 8], l = [3, 11]);
      const S = (o, a) => {
        const m = o >= e[0] && o <= e[1] && a >= r[0] && a <= r[1], i = o >= s[0] && o <= s[1] && a >= l[0] && a <= l[1];
        return m || i;
      };
      for (let o = 0; o < n; o++) {
        const a = [];
        let m = 0, i = S(o, 0) ? "white" : "red";
        for (let d = 1; d < n; d++) {
          const z = S(o, d) ? "white" : "red";
          z !== i && (a.push({ color: i, size: d - m }), i = z, m = d);
        }
        a.push({ color: i, size: n - m }), u.push(a);
      }
      return u;
    });
    return (n, u) => (v(), f("section", {
      class: y(["flag-grid", {
        "low-perf": !c.value || t.lowPerfVariant,
        "no-animation": t.removeAnimation
      }])
    }, [
      (v(!0), f(B, null, V(C.value, (e, r) => (v(), f("div", {
        key: r,
        class: y(["column", e.length === 1 ? e[0].color : ""]),
        style: _({ animationDelay: r * w.value + "ms" })
      }, [
        e.length > 1 ? (v(!0), f(B, { key: 0 }, V(e, (s, l) => (v(), f("div", {
          key: l,
          class: y(["row", s.color]),
          style: _({ flex: s.size })
        }, null, 6))), 128)) : P("", !0)
      ], 6))), 128))
    ], 2));
  }
}, b = /* @__PURE__ */ F(M, [["__scopeId", "data-v-167adbe2"]]), A = {
  install: (t) => {
    t.component("SwissFlag", b);
  }
};
export {
  b as SwissFlag,
  A as default
};
