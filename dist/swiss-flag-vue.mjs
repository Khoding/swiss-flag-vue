(function(){"use strict";try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode("@keyframes oscillate-90ce4284{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}.flag-grid[data-v-90ce4284]{display:flex;aspect-ratio:1 / 1;inline-size:var(--v564ef1b6);margin-inline:auto;margin-block-start:1rem;anchor-name:--flag-grid;--oscillate-distance: 2%}.flag-grid.low-perf[data-v-90ce4284]{--oscillate-distance: 3%}.flag-grid .column[data-v-90ce4284]{display:flex;flex:1;flex-direction:column;animation:oscillate-90ce4284 .6s infinite alternate ease-in-out backwards}.flag-grid .column.red[data-v-90ce4284]{background-color:red}.flag-grid .column.white[data-v-90ce4284]{background-color:#fff}.flag-grid .row[data-v-90ce4284]{flex:1;inline-size:100%;background-color:red}.flag-grid .row.white[data-v-90ce4284]{background-color:#fff}.flag-grid:not(.low-perf)>.column:nth-child(n+7):nth-child(-n+26) .row[data-v-90ce4284]:nth-child(n+14):nth-child(-n+19){background-color:#fff}.flag-grid:not(.low-perf)>.column:nth-child(n+14):nth-child(-n+19) .row[data-v-90ce4284]:nth-child(n+7):nth-child(-n+26){background-color:#fff}.flag-grid.low-perf .column:nth-child(n+4):nth-child(-n+12) .row[data-v-90ce4284]:nth-child(n+7):nth-child(-n+9){background-color:#fff}.flag-grid.low-perf .column:nth-child(n+7):nth-child(-n+9) .row[data-v-90ce4284]:nth-child(n+4):nth-child(-n+12){background-color:#fff}")),document.head.appendChild(n)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { useCssVars as B, computed as g, createElementBlock as p, openBlock as v, normalizeClass as y, Fragment as z, renderList as C, normalizeStyle as k, createCommentVNode as F } from "vue";
const M = (c, i) => {
  const f = c.__vccOpts || c;
  for (const [h, _] of i)
    f[h] = _;
  return f;
}, b = {
  __name: "SwissFlag",
  props: {
    blockSize: {
      type: String,
      required: !0,
      default: "12rem"
    }
  },
  setup(c) {
    B((o) => ({
      v564ef1b6: c.blockSize
    }));
    const i = g(() => {
      const o = navigator.hardwareConcurrency || 2, u = navigator.deviceMemory || 2, e = navigator.connection?.effectiveType || "4g", t = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      return o >= 4 && u >= 4 && e !== "slow-2g" && !t;
    }), f = g(() => i.value ? 32 : 15), h = g(() => i.value ? 50 : 35), _ = g(() => {
      const o = f.value, u = [];
      let e, t, s, a;
      o === 32 ? (e = [6, 25], t = [13, 18], s = [13, 18], a = [6, 25]) : (e = [3, 11], t = [6, 8], s = [6, 8], a = [3, 11]);
      const w = (r, n) => {
        const d = r >= e[0] && r <= e[1] && n >= t[0] && n <= t[1], l = r >= s[0] && r <= s[1] && n >= a[0] && n <= a[1];
        return d || l;
      };
      for (let r = 0; r < o; r++) {
        const n = [];
        let d = 0, l = w(r, 0) ? "white" : "red";
        for (let m = 1; m < o; m++) {
          const S = w(r, m) ? "white" : "red";
          S !== l && (n.push({ color: l, size: m - d }), l = S, d = m);
        }
        n.push({ color: l, size: o - d }), u.push(n);
      }
      return u;
    });
    return (o, u) => (v(), p("section", {
      class: y(["flag-grid", { "low-perf": !i.value }])
    }, [
      (v(!0), p(z, null, C(_.value, (e, t) => (v(), p("div", {
        key: t,
        class: y(["column", e.length === 1 ? e[0].color : ""]),
        style: k({ animationDelay: t * h.value + "ms" })
      }, [
        e.length > 1 ? (v(!0), p(z, { key: 0 }, C(e, (s, a) => (v(), p("div", {
          key: a,
          class: y(["row", s.color]),
          style: k({ flex: s.size })
        }, null, 6))), 128)) : F("", !0)
      ], 6))), 128))
    ], 2));
  }
}, x = /* @__PURE__ */ M(b, [["__scopeId", "data-v-90ce4284"]]), D = {
  install: (c) => {
    c.component("SwissFlag", x);
  }
};
export {
  x as SwissFlag,
  D as default
};
