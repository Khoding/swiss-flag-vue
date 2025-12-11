(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".flag[data-v-3dfdaa6c]{display:flex;aspect-ratio:1 / 1;inline-size:var(--v2bd64157);--oscillate-distance: 2%;isolation:isolate;color-scheme:light;forced-color-adjust:none}.flag.reduced-motion[data-v-3dfdaa6c]{--oscillate-distance: 3%}.flag.no-animation .column[data-v-3dfdaa6c]{animation:none}.flag .column[data-v-3dfdaa6c]{flex:1;animation:oscillate-3dfdaa6c .6s infinite alternate ease-in-out backwards}.flag .column.red[data-v-3dfdaa6c]{background-color:red}@keyframes oscillate-3dfdaa6c{0%{transform:translateY(var(--oscillate-distance, 2%))}to{transform:translateY(calc(-1 * var(--oscillate-distance, 2%)))}}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { useCssVars as E, computed as p, createElementBlock as S, openBlock as v, normalizeClass as F, Fragment as $, renderList as B, normalizeStyle as M } from "vue";
const T = (l, c) => {
  const u = l.__vccOpts || l;
  for (const [f, g] of c)
    u[f] = g;
  return u;
}, I = {
  __name: "SwissFlag",
  props: {
    inlineSize: {
      type: String,
      default: "12rem"
    },
    reduceAnimation: {
      type: Boolean,
      default: !1
    },
    removeAnimation: {
      type: Boolean,
      default: !1
    }
  },
  setup(l) {
    E((e) => ({
      v2bd64157: g.value
    }));
    const c = l, u = p(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches), f = p(() => c.removeAnimation ? 5 : !c.reduceAnimation && !u.value ? 32 : 15), g = p(() => {
      const e = c.inlineSize;
      if (typeof window > "u") return e;
      let n = null;
      if (typeof e == "number")
        n = e;
      else if (typeof e == "string")
        if (e.endsWith("px") || !isNaN(e))
          n = parseFloat(e);
        else if (e.endsWith("rem")) {
          const s = parseFloat(
            getComputedStyle(document.documentElement).fontSize
          );
          n = parseFloat(e) * s;
        } else e.endsWith("vw") && (n = parseFloat(e) * window.innerWidth / 100);
      if (n === null) return e;
      const o = f.value;
      return `${Math.round(n / o) * o}px`;
    }), x = p(
      () => !c.reduceAnimation && !u.value ? 50 : 35
    ), k = p(() => {
      const e = f.value, n = [], o = 32;
      let r, s, m, h;
      e === 32 ? (r = [6, 25], s = [13, 18], m = [13, 18], h = [6, 25]) : e === 15 ? (r = [3, 11], s = [6, 8], m = [6, 8], h = [3, 11]) : (r = [1, 3], s = [2, 2], m = [2, 2], h = [1, 3]);
      const w = (t) => {
        if (e === 32) return 1;
        if (e === 5)
          return t === 1 || t === 3 ? 7 : 6;
        const i = Math.floor(t / 3);
        return i === 1 || i === 3 ? 7 / 3 : 2;
      }, y = (t, i) => {
        let a = 0;
        for (let d = t; d < i; d++)
          a += w(d);
        return a;
      };
      for (let t = 0; t < e; t++) {
        let i = -1, a = -1;
        const d = t >= m[0] && t <= m[1], b = t >= r[0] && t <= r[1];
        d ? (i = h[0], a = h[1]) : b && (i = s[0], a = s[1]);
        let A = null, W = null;
        if (i === -1)
          W = "red";
        else {
          const z = y(0, i), H = y(
            i,
            a + 1
          ), _ = z / o * 100, C = (z + H) / o * 100;
          A = `linear-gradient(to bottom, 
        #ff0000 0% ${_}%, 
        #ffffff ${_}% ${C}%, 
        #ff0000 ${C}% 100%)`;
        }
        n.push({
          width: w(t),
          singleColor: W,
          background: A
        });
      }
      return n;
    });
    return (e, n) => (v(), S("section", {
      class: F(["flag", {
        "reduced-motion": u.value || l.reduceAnimation,
        "no-animation": l.removeAnimation
      }])
    }, [
      (v(!0), S($, null, B(k.value, (o, r) => (v(), S("div", {
        key: r,
        class: F(["column", o.singleColor]),
        style: M({
          animationDelay: (r - f.value) * x.value + "ms",
          flex: o.width,
          background: o.background
        })
      }, null, 6))), 128))
    ], 2));
  }
}, N = /* @__PURE__ */ T(I, [["__scopeId", "data-v-3dfdaa6c"]]), D = {
  install: (l) => {
    l.component("SwissFlag", N);
  }
};
export {
  N as SwissFlag,
  D as default
};
