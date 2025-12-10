(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("@keyframes oscillate-5968ba2b{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}.flag-grid[data-v-5968ba2b]{display:flex;aspect-ratio:1 / 1;inline-size:var(--a47b2f7a);margin-inline:auto;margin-block-start:1rem;anchor-name:--flag-grid;--oscillate-distance: 2%}.flag-grid.low-perf[data-v-5968ba2b]{--oscillate-distance: 3%}.flag-grid.no-animation .column[data-v-5968ba2b]{animation:none}.flag-grid .column[data-v-5968ba2b]{display:flex;flex:1;flex-direction:column;animation:oscillate-5968ba2b .6s infinite alternate ease-in-out backwards}.flag-grid .column.red[data-v-5968ba2b]{background-color:red}.flag-grid .column.white[data-v-5968ba2b]{background-color:#fff}.flag-grid .row[data-v-5968ba2b]{flex:1;inline-size:100%;background-color:red}.flag-grid .row.white[data-v-5968ba2b]{background-color:#fff}.flag-grid:not(.low-perf)>.column:nth-child(n+7):nth-child(-n+26) .row[data-v-5968ba2b]:nth-child(n+14):nth-child(-n+19){background-color:#fff}.flag-grid:not(.low-perf)>.column:nth-child(n+14):nth-child(-n+19) .row[data-v-5968ba2b]:nth-child(n+7):nth-child(-n+26){background-color:#fff}.flag-grid.low-perf .column:nth-child(n+4):nth-child(-n+12) .row[data-v-5968ba2b]:nth-child(n+7):nth-child(-n+9){background-color:#fff}.flag-grid.low-perf .column:nth-child(n+7):nth-child(-n+9) .row[data-v-5968ba2b]:nth-child(n+4):nth-child(-n+12){background-color:#fff}")),document.head.appendChild(a)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import { useCssVars as x, computed as h, createElementBlock as d, openBlock as v, normalizeClass as b, Fragment as _, renderList as C, normalizeStyle as M, createCommentVNode as F } from "vue";
const A = (r, g) => {
  const l = r.__vccOpts || r;
  for (const [p, w] of g)
    l[p] = w;
  return l;
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
    x((n) => ({
      a47b2f7a: r.blockSize
    }));
    const g = r, l = h(() => {
      const n = navigator.hardwareConcurrency || 2, f = navigator.deviceMemory || 2, e = navigator.connection?.effectiveType || "4g", s = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      return n >= 4 && f >= 4 && e !== "slow-2g" && !s;
    }), p = h(
      () => !g.lowPerfVariant && l.value ? 32 : 15
    ), w = h(
      () => !g.lowPerfVariant && l.value ? 50 : 35
    ), P = h(() => {
      const n = p.value, f = [];
      let e, s, c, i;
      n === 32 ? (e = [6, 25], s = [13, 18], c = [13, 18], i = [6, 25]) : (e = [3, 11], s = [6, 8], c = [6, 8], i = [3, 11]);
      const S = (t, o) => {
        const m = t >= e[0] && t <= e[1] && o >= s[0] && o <= s[1], u = t >= c[0] && t <= c[1] && o >= i[0] && o <= i[1];
        return m || u;
      }, k = (t) => {
        if (n === 32) return 1;
        const o = Math.floor(t / 3);
        return o === 1 || o === 3 ? 7 / 3 : 2;
      };
      for (let t = 0; t < n; t++) {
        const o = [];
        let m = 0, u = S(t, 0) ? "white" : "red";
        for (let a = 1; a < n; a++) {
          const B = S(t, a) ? "white" : "red";
          if (B !== u) {
            let V = 0;
            for (let y = m; y < a; y++) V += k(y);
            o.push({ color: u, size: V }), u = B, m = a;
          }
        }
        let z = 0;
        for (let a = m; a < n; a++) z += k(a);
        o.push({ color: u, size: z }), f.push({
          width: k(t),
          blocks: o
        });
      }
      return f;
    });
    return (n, f) => (v(), d("section", {
      class: b(["flag-grid", {
        "low-perf": !l.value || r.lowPerfVariant,
        "no-animation": r.removeAnimation
      }])
    }, [
      (v(!0), d(_, null, C(P.value, (e, s) => (v(), d("div", {
        key: s,
        class: b(["column", e.blocks.length === 1 ? e.blocks[0].color : ""]),
        style: M({
          animationDelay: s * w.value + "ms",
          flex: e.width
        })
      }, [
        e.blocks.length > 1 ? (v(!0), d(_, { key: 0 }, C(e.blocks, (c, i) => (v(), d("div", {
          key: i,
          class: b(["row", c.color]),
          style: M({ flex: c.size })
        }, null, 6))), 128)) : F("", !0)
      ], 6))), 128))
    ], 2));
  }
}, H = /* @__PURE__ */ A(D, [["__scopeId", "data-v-5968ba2b"]]), X = {
  install: (r) => {
    r.component("SwissFlag", H);
  }
};
export {
  H as SwissFlag,
  X as default
};
