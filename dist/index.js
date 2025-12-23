import * as T from "react";
import Ot, { useMemo as ge, useRef as H, useState as Q, useLayoutEffect as Ye, useCallback as te, useEffect as Ze } from "react";
var ye = { exports: {} }, ve = {};
var et;
function $t() {
  if (et) return ve;
  et = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(t, i, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      o = {};
      for (var l in i)
        l !== "key" && (o[l] = i[l]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: t,
      key: s,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return ve.Fragment = r, ve.jsx = n, ve.jsxs = n, ve;
}
var Se = {};
var tt;
function Mt() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === B ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case w:
          return "Fragment";
        case F:
          return "Profiler";
        case C:
          return "StrictMode";
        case b:
          return "Suspense";
        case P:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case m:
            return "Portal";
          case A:
            return g.displayName || "Context";
          case E:
            return (g._context.displayName || "Context") + ".Consumer";
          case V:
            var v = g.render;
            return g = g.displayName, g || (g = v.displayName || v.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case k:
            return v = g.displayName || null, v !== null ? v : e(g.type) || "Memo";
          case j:
            v = g._payload, g = g._init;
            try {
              return e(g(v));
            } catch {
            }
        }
      return null;
    }
    function r(g) {
      return "" + g;
    }
    function n(g) {
      try {
        r(g);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var O = v.error, $ = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return O.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), r(g);
      }
    }
    function t(g) {
      if (g === w) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === j)
        return "<...>";
      try {
        var v = e(g);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var g = J.A;
      return g === null ? null : g.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(g) {
      if (ee.call(g, "key")) {
        var v = Object.getOwnPropertyDescriptor(g, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function l(g, v) {
      function O() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: O,
        configurable: !0
      });
    }
    function a() {
      var g = e(this.type);
      return M[g] || (M[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function u(g, v, O, $, q, G) {
      var R = O.ref;
      return g = {
        $$typeof: h,
        type: g,
        key: v,
        props: O,
        _owner: $
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function d(g, v, O, $, q, G) {
      var R = v.children;
      if (R !== void 0)
        if ($)
          if (re(R)) {
            for ($ = 0; $ < R.length; $++)
              p(R[$]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(R);
      if (ee.call(v, "key")) {
        R = e(g);
        var X = Object.keys(v).filter(function(z) {
          return z !== "key";
        });
        $ = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", L[R + $] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          R,
          X,
          R
        ), L[R + $] = !0);
      }
      if (R = null, O !== void 0 && (n(O), R = "" + O), s(v) && (n(v.key), R = "" + v.key), "key" in v) {
        O = {};
        for (var N in v)
          N !== "key" && (O[N] = v[N]);
      } else O = v;
      return R && l(
        O,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), u(
        g,
        R,
        O,
        i(),
        q,
        G
      );
    }
    function p(g) {
      f(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === j && (g._payload.status === "fulfilled" ? f(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
    }
    function f(g) {
      return typeof g == "object" && g !== null && g.$$typeof === h;
    }
    var c = Ot, h = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.fragment"), C = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), A = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), k = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), ne = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), J = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, re = Array.isArray, ie = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var D, M = {}, _ = c.react_stack_bottom_frame.bind(
      c,
      o
    )(), I = ie(t(o)), L = {};
    Se.Fragment = w, Se.jsx = function(g, v, O) {
      var $ = 1e4 > J.recentlyCreatedOwnerStacks++;
      return d(
        g,
        v,
        O,
        !1,
        $ ? Error("react-stack-top-frame") : _,
        $ ? ie(t(g)) : I
      );
    }, Se.jsxs = function(g, v, O) {
      var $ = 1e4 > J.recentlyCreatedOwnerStacks++;
      return d(
        g,
        v,
        O,
        !0,
        $ ? Error("react-stack-top-frame") : _,
        $ ? ie(t(g)) : I
      );
    };
  })()), Se;
}
var nt;
function Pt() {
  return nt || (nt = 1, process.env.NODE_ENV === "production" ? ye.exports = $t() : ye.exports = Mt()), ye.exports;
}
var S = Pt();
function At(e) {
  const r = e.columnDef.meta;
  return !(r?.resizable === !1 || r?.sticky && r.resizable !== !0);
}
function Me(e, r) {
  return e.columnDef.meta?.textAlign ?? r;
}
function Xe(e) {
  return e && e.endsWith("px") ? parseFloat(e) : 0;
}
function Pe({ table: e, tableWidth: r }) {
  const n = e.getAllLeafColumns(), o = n.map(
    (s) => Xe(s.columnDef.meta?.widthSize)
  ).reduce((s, l) => s + l, 0) > r;
  return /* @__PURE__ */ S.jsx("colgroup", { children: n.map((s, l) => {
    const a = s.columnDef.meta, u = l === n.length - 1;
    let d;
    return !o && u ? d = { width: "auto" } : a?.widthSize && (d = { width: a.widthSize }), /* @__PURE__ */ S.jsx("col", { style: d }, s.id);
  }) });
}
function It({
  table: e,
  tableWidth: r,
  data: n,
  stickyById: t,
  resizableCol: i = !1,
  reorderableCol: o = !1,
  sortableCol: s = !0,
  sortState: l,
  setSortState: a,
  defaultTextAlign: u,
  selectable: d,
  selectedRows: p,
  disableSelectRow: f,
  onDragStart: c,
  scrollRef: h,
  onResizeStart: m,
  setSelectedRows: w,
  expandable: C,
  expandedRows: F,
  setExpandedRows: E
}) {
  const A = n.map((D, M) => typeof D == "object" && D !== null && "id" in D ? D.id ?? M : M), V = !!d, b = d?.label, P = A.filter((D) => !f.includes(D)), k = P.filter((D) => p.has(D)).length, j = k === P.length && P.length > 0, ne = k > 0 && k < P.length, B = () => {
    w((D) => {
      const M = new Set(D);
      return j ? P.forEach((_) => M.delete(_)) : P.forEach((_) => M.add(_)), M;
    });
  }, J = !!C, ee = C?.allButton || !1, re = A.every((D) => F.has(D)), ie = () => {
    E(re ? /* @__PURE__ */ new Set() : new Set(A));
  };
  return /* @__PURE__ */ S.jsx("div", { className: "table-scroll-sync", ref: h, children: /* @__PURE__ */ S.jsxs("table", { className: "table table-external-header", children: [
    /* @__PURE__ */ S.jsx(
      Pe,
      {
        table: e,
        tableWidth: r
      }
    ),
    /* @__PURE__ */ S.jsx("thead", { children: e.getHeaderGroups().map((D) => /* @__PURE__ */ S.jsx("tr", { children: D.headers.map((M) => {
      const _ = M.column.columnDef.meta, I = t.get(M.column.id), L = Me(M.column, u), g = o && _?.reorderable !== !1 && !_?.sticky, v = (_?.sortable ?? s) && !_?.sticky && !["__draggable__", "__selectable__", "__expandable__"].includes(M.column.id), O = l?.columnId === M.column.id, $ = () => {
        if (!v) return;
        let R;
        !l || l.columnId !== M.column.id ? R = { columnId: M.column.id, direction: "asc" } : l.direction === "asc" ? R = { columnId: M.column.id, direction: "desc" } : R = null, a(R);
      }, q = [
        I ? "is-sticky" : "",
        I?.side === "left" ? "is-sticky-left" : "",
        I?.side === "right" ? "is-sticky-right" : "",
        v ? "is-sortable" : "",
        O ? `is-sorted-${l.direction}` : ""
      ].filter(Boolean).join(" "), G = I ? I.side === "left" ? { "--sticky-left": `${I.offset}px` } : { "--sticky-right": `${I.offset}px` } : void 0;
      return /* @__PURE__ */ S.jsx(
        "th",
        {
          "data-col-id": M.column.id,
          "data-fixed": _?.sticky ? "true" : void 0,
          "data-reorderable": g ? void 0 : "false",
          className: q,
          style: G,
          onClick: $,
          children: /* @__PURE__ */ S.jsxs("div", { className: `th-content align-${L}`, children: [
            /* @__PURE__ */ S.jsx("div", { children: M.isPlaceholder ? null : M.column.id === "__selectable__" && V ? /* @__PURE__ */ S.jsxs("label", { children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: j,
                  ref: (R) => {
                    R && (R.indeterminate = ne);
                  },
                  onChange: B
                }
              ),
              b
            ] }) : M.column.id === "__expandable__" && J && ee ? /* @__PURE__ */ S.jsx(
              "button",
              {
                onClick: ie,
                className: `expand-all-button ${re ? "expanded" : ""}`,
                children: "⇅"
              }
            ) : (() => {
              const R = M.column.columnDef.header;
              return typeof R == "function" ? R({ column: M.column, table: e, header: M }) : R;
            })() }),
            v && /* @__PURE__ */ S.jsx("span", { className: "sort-indicator" }),
            g && /* @__PURE__ */ S.jsx(
              "span",
              {
                className: "col-drag-handle",
                onClick: (R) => R.stopPropagation(),
                onPointerDown: (R) => {
                  R.preventDefault(), R.currentTarget.setPointerCapture(R.pointerId), c?.(M.column.id, R.nativeEvent);
                },
                children: "☰"
              }
            ),
            i && m && At(M.column) && /* @__PURE__ */ S.jsx(
              "span",
              {
                className: "col-resize-handle",
                onClick: (R) => R.stopPropagation(),
                onMouseDown: (R) => m(R, M.column)
              }
            )
          ] })
        },
        M.id
      );
    }) }, D.id)) })
  ] }) });
}
function Vt({
  table: e,
  tableWidth: r,
  stickyById: n,
  defaultTextAlign: t,
  scrollRef: i
}) {
  return e.getAllLeafColumns().some(
    (l) => l.columnDef.meta?.internalHeader != null
  ) ? /* @__PURE__ */ S.jsx("div", { className: "table-scroll-sync", ref: i, children: /* @__PURE__ */ S.jsxs("table", { className: "table table-internal-header", children: [
    /* @__PURE__ */ S.jsx(
      Pe,
      {
        table: e,
        tableWidth: r
      }
    ),
    /* @__PURE__ */ S.jsx("thead", { children: /* @__PURE__ */ S.jsx("tr", { children: e.getAllLeafColumns().map((l) => {
      const a = l.columnDef.meta?.internalHeader, u = n.get(l.id), d = Me(l, t), p = [
        u ? "is-sticky" : "",
        u?.side === "left" ? "is-sticky-left" : "",
        u?.side === "right" ? "is-sticky-right" : ""
      ].filter(Boolean).join(" "), f = u ? u.side === "left" ? { "--sticky-left": `${u.offset}px` } : { "--sticky-right": `${u.offset}px` } : void 0;
      return /* @__PURE__ */ S.jsx(
        "th",
        {
          className: `${p} align-${d}`,
          style: f,
          children: typeof a == "function" ? a() : a ?? null
        },
        l.id
      );
    }) }) })
  ] }) }) : null;
}
function ce(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function K(e, r) {
  return (n) => {
    r.setState((t) => ({
      ...t,
      [e]: ce(n, t[e])
    }));
  };
}
function Ae(e) {
  return e instanceof Function;
}
function kt(e) {
  return Array.isArray(e) && e.every((r) => typeof r == "number");
}
function Nt(e, r) {
  const n = [], t = (i) => {
    i.forEach((o) => {
      n.push(o);
      const s = r(o);
      s != null && s.length && t(s);
    });
  };
  return t(e), n;
}
function x(e, r, n) {
  let t = [], i;
  return (o) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const l = e(o);
    if (!(l.length !== t.length || l.some((d, p) => t[p] !== d)))
      return i;
    t = l;
    let u;
    if (n.key && n.debug && (u = Date.now()), i = r(...l), n == null || n.onChange == null || n.onChange(i), n.key && n.debug && n != null && n.debug()) {
      const d = Math.round((Date.now() - s) * 100) / 100, p = Math.round((Date.now() - u) * 100) / 100, f = p / 16, c = (h, m) => {
        for (h = String(h); h.length < m; )
          h = " " + h;
        return h;
      };
      console.info(`%c⏱ ${c(p, 5)} /${c(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, n?.key);
    }
    return i;
  };
}
function y(e, r, n, t) {
  return {
    debug: () => {
      var i;
      return (i = e?.debugAll) != null ? i : e[r];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: t
  };
}
function zt(e, r, n, t) {
  const i = () => {
    var s;
    return (s = o.getValue()) != null ? s : e.options.renderFallbackValue;
  }, o = {
    id: `${r.id}_${n.id}`,
    row: r,
    column: n,
    getValue: () => r.getValue(t),
    renderValue: i,
    getContext: x(() => [e, n, r, o], (s, l, a, u) => ({
      table: s,
      column: l,
      row: a,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), y(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(o, n, r, e);
  }, {}), o;
}
function Dt(e, r, n, t) {
  var i, o;
  const l = {
    ...e._getDefaultColumnDef(),
    ...r
  }, a = l.accessorKey;
  let u = (i = (o = l.id) != null ? o : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? i : typeof l.header == "string" ? l.header : void 0, d;
  if (l.accessorFn ? d = l.accessorFn : a && (a.includes(".") ? d = (f) => {
    let c = f;
    for (const m of a.split(".")) {
      var h;
      c = (h = c) == null ? void 0 : h[m], process.env.NODE_ENV !== "production" && c === void 0 && console.warn(`"${m}" in deeply nested key "${a}" returned undefined.`);
    }
    return c;
  } : d = (f) => f[l.accessorKey]), !u)
    throw process.env.NODE_ENV !== "production" ? new Error(l.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let p = {
    id: `${String(u)}`,
    accessorFn: d,
    parent: t,
    depth: n,
    columnDef: l,
    columns: [],
    getFlatColumns: x(() => [!0], () => {
      var f;
      return [p, ...(f = p.columns) == null ? void 0 : f.flatMap((c) => c.getFlatColumns())];
    }, y(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: x(() => [e._getOrderColumnsFn()], (f) => {
      var c;
      if ((c = p.columns) != null && c.length) {
        let h = p.columns.flatMap((m) => m.getLeafColumns());
        return f(h);
      }
      return [p];
    }, y(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(p, e);
  return p;
}
const W = "debugHeaders";
function rt(e, r, n) {
  var t;
  let o = {
    id: (t = n.id) != null ? t : r.id,
    column: r,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const s = [], l = (a) => {
        a.subHeaders && a.subHeaders.length && a.subHeaders.map(l), s.push(a);
      };
      return l(o), s;
    },
    getContext: () => ({
      table: e,
      header: o,
      column: r
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(o, e);
  }), o;
}
const Lt = {
  createTable: (e) => {
    e.getHeaderGroups = x(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (r, n, t, i) => {
      var o, s;
      const l = (o = t?.map((p) => n.find((f) => f.id === p)).filter(Boolean)) != null ? o : [], a = (s = i?.map((p) => n.find((f) => f.id === p)).filter(Boolean)) != null ? s : [], u = n.filter((p) => !(t != null && t.includes(p.id)) && !(i != null && i.includes(p.id)));
      return _e(r, [...l, ...u, ...a], e);
    }, y(e.options, W, "getHeaderGroups")), e.getCenterHeaderGroups = x(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (r, n, t, i) => (n = n.filter((o) => !(t != null && t.includes(o.id)) && !(i != null && i.includes(o.id))), _e(r, n, e, "center")), y(e.options, W, "getCenterHeaderGroups")), e.getLeftHeaderGroups = x(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (r, n, t) => {
      var i;
      const o = (i = t?.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? i : [];
      return _e(r, o, e, "left");
    }, y(e.options, W, "getLeftHeaderGroups")), e.getRightHeaderGroups = x(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (r, n, t) => {
      var i;
      const o = (i = t?.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? i : [];
      return _e(r, o, e, "right");
    }, y(e.options, W, "getRightHeaderGroups")), e.getFooterGroups = x(() => [e.getHeaderGroups()], (r) => [...r].reverse(), y(e.options, W, "getFooterGroups")), e.getLeftFooterGroups = x(() => [e.getLeftHeaderGroups()], (r) => [...r].reverse(), y(e.options, W, "getLeftFooterGroups")), e.getCenterFooterGroups = x(() => [e.getCenterHeaderGroups()], (r) => [...r].reverse(), y(e.options, W, "getCenterFooterGroups")), e.getRightFooterGroups = x(() => [e.getRightHeaderGroups()], (r) => [...r].reverse(), y(e.options, W, "getRightFooterGroups")), e.getFlatHeaders = x(() => [e.getHeaderGroups()], (r) => r.map((n) => n.headers).flat(), y(e.options, W, "getFlatHeaders")), e.getLeftFlatHeaders = x(() => [e.getLeftHeaderGroups()], (r) => r.map((n) => n.headers).flat(), y(e.options, W, "getLeftFlatHeaders")), e.getCenterFlatHeaders = x(() => [e.getCenterHeaderGroups()], (r) => r.map((n) => n.headers).flat(), y(e.options, W, "getCenterFlatHeaders")), e.getRightFlatHeaders = x(() => [e.getRightHeaderGroups()], (r) => r.map((n) => n.headers).flat(), y(e.options, W, "getRightFlatHeaders")), e.getCenterLeafHeaders = x(() => [e.getCenterFlatHeaders()], (r) => r.filter((n) => {
      var t;
      return !((t = n.subHeaders) != null && t.length);
    }), y(e.options, W, "getCenterLeafHeaders")), e.getLeftLeafHeaders = x(() => [e.getLeftFlatHeaders()], (r) => r.filter((n) => {
      var t;
      return !((t = n.subHeaders) != null && t.length);
    }), y(e.options, W, "getLeftLeafHeaders")), e.getRightLeafHeaders = x(() => [e.getRightFlatHeaders()], (r) => r.filter((n) => {
      var t;
      return !((t = n.subHeaders) != null && t.length);
    }), y(e.options, W, "getRightLeafHeaders")), e.getLeafHeaders = x(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (r, n, t) => {
      var i, o, s, l, a, u;
      return [...(i = (o = r[0]) == null ? void 0 : o.headers) != null ? i : [], ...(s = (l = n[0]) == null ? void 0 : l.headers) != null ? s : [], ...(a = (u = t[0]) == null ? void 0 : u.headers) != null ? a : []].map((d) => d.getLeafHeaders()).flat();
    }, y(e.options, W, "getLeafHeaders"));
  }
};
function _e(e, r, n, t) {
  var i, o;
  let s = 0;
  const l = function(f, c) {
    c === void 0 && (c = 1), s = Math.max(s, c), f.filter((h) => h.getIsVisible()).forEach((h) => {
      var m;
      (m = h.columns) != null && m.length && l(h.columns, c + 1);
    }, 0);
  };
  l(e);
  let a = [];
  const u = (f, c) => {
    const h = {
      depth: c,
      id: [t, `${c}`].filter(Boolean).join("_"),
      headers: []
    }, m = [];
    f.forEach((w) => {
      const C = [...m].reverse()[0], F = w.column.depth === h.depth;
      let E, A = !1;
      if (F && w.column.parent ? E = w.column.parent : (E = w.column, A = !0), C && C?.column === E)
        C.subHeaders.push(w);
      else {
        const V = rt(n, E, {
          id: [t, c, E.id, w?.id].filter(Boolean).join("_"),
          isPlaceholder: A,
          placeholderId: A ? `${m.filter((b) => b.column === E).length}` : void 0,
          depth: c,
          index: m.length
        });
        V.subHeaders.push(w), m.push(V);
      }
      h.headers.push(w), w.headerGroup = h;
    }), a.push(h), c > 0 && u(m, c - 1);
  }, d = r.map((f, c) => rt(n, f, {
    depth: s,
    index: c
  }));
  u(d, s - 1), a.reverse();
  const p = (f) => f.filter((h) => h.column.getIsVisible()).map((h) => {
    let m = 0, w = 0, C = [0];
    h.subHeaders && h.subHeaders.length ? (C = [], p(h.subHeaders).forEach((E) => {
      let {
        colSpan: A,
        rowSpan: V
      } = E;
      m += A, C.push(V);
    })) : m = 1;
    const F = Math.min(...C);
    return w = w + F, h.colSpan = m, h.rowSpan = w, {
      colSpan: m,
      rowSpan: w
    };
  });
  return p((i = (o = a[0]) == null ? void 0 : o.headers) != null ? i : []), a;
}
const Tt = (e, r, n, t, i, o, s) => {
  let l = {
    id: r,
    index: t,
    original: n,
    depth: i,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (a) => {
      if (l._valuesCache.hasOwnProperty(a))
        return l._valuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return l._valuesCache[a] = u.accessorFn(l.original, t), l._valuesCache[a];
    },
    getUniqueValues: (a) => {
      if (l._uniqueValuesCache.hasOwnProperty(a))
        return l._uniqueValuesCache[a];
      const u = e.getColumn(a);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (l._uniqueValuesCache[a] = u.columnDef.getUniqueValues(l.original, t), l._uniqueValuesCache[a]) : (l._uniqueValuesCache[a] = [l.getValue(a)], l._uniqueValuesCache[a]);
    },
    renderValue: (a) => {
      var u;
      return (u = l.getValue(a)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => Nt(l.subRows, (a) => a.subRows),
    getParentRow: () => l.parentId ? e.getRow(l.parentId, !0) : void 0,
    getParentRows: () => {
      let a = [], u = l;
      for (; ; ) {
        const d = u.getParentRow();
        if (!d) break;
        a.push(d), u = d;
      }
      return a.reverse();
    },
    getAllCells: x(() => [e.getAllLeafColumns()], (a) => a.map((u) => zt(e, l, u, u.id)), y(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: x(() => [l.getAllCells()], (a) => a.reduce((u, d) => (u[d.column.id] = d, u), {}), y(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const u = e._features[a];
    u == null || u.createRow == null || u.createRow(l, e);
  }
  return l;
}, jt = {
  createColumn: (e, r) => {
    e._getFacetedRowModel = r.options.getFacetedRowModel && r.options.getFacetedRowModel(r, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : r.getPreFilteredRowModel(), e._getFacetedUniqueValues = r.options.getFacetedUniqueValues && r.options.getFacetedUniqueValues(r, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = r.options.getFacetedMinMaxValues && r.options.getFacetedMinMaxValues(r, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ct = (e, r, n) => {
  var t, i;
  const o = n == null || (t = n.toString()) == null ? void 0 : t.toLowerCase();
  return !!(!((i = e.getValue(r)) == null || (i = i.toString()) == null || (i = i.toLowerCase()) == null) && i.includes(o));
};
ct.autoRemove = (e) => Z(e);
const dt = (e, r, n) => {
  var t;
  return !!(!((t = e.getValue(r)) == null || (t = t.toString()) == null) && t.includes(n));
};
dt.autoRemove = (e) => Z(e);
const gt = (e, r, n) => {
  var t;
  return ((t = e.getValue(r)) == null || (t = t.toString()) == null ? void 0 : t.toLowerCase()) === n?.toLowerCase();
};
gt.autoRemove = (e) => Z(e);
const ft = (e, r, n) => {
  var t;
  return (t = e.getValue(r)) == null ? void 0 : t.includes(n);
};
ft.autoRemove = (e) => Z(e);
const pt = (e, r, n) => !n.some((t) => {
  var i;
  return !((i = e.getValue(r)) != null && i.includes(t));
});
pt.autoRemove = (e) => Z(e) || !(e != null && e.length);
const ht = (e, r, n) => n.some((t) => {
  var i;
  return (i = e.getValue(r)) == null ? void 0 : i.includes(t);
});
ht.autoRemove = (e) => Z(e) || !(e != null && e.length);
const mt = (e, r, n) => e.getValue(r) === n;
mt.autoRemove = (e) => Z(e);
const vt = (e, r, n) => e.getValue(r) == n;
vt.autoRemove = (e) => Z(e);
const Ue = (e, r, n) => {
  let [t, i] = n;
  const o = e.getValue(r);
  return o >= t && o <= i;
};
Ue.resolveFilterValue = (e) => {
  let [r, n] = e, t = typeof r != "number" ? parseFloat(r) : r, i = typeof n != "number" ? parseFloat(n) : n, o = r === null || Number.isNaN(t) ? -1 / 0 : t, s = n === null || Number.isNaN(i) ? 1 / 0 : i;
  if (o > s) {
    const l = o;
    o = s, s = l;
  }
  return [o, s];
};
Ue.autoRemove = (e) => Z(e) || Z(e[0]) && Z(e[1]);
const se = {
  includesString: ct,
  includesStringSensitive: dt,
  equalsString: gt,
  arrIncludes: ft,
  arrIncludesAll: pt,
  arrIncludesSome: ht,
  equals: mt,
  weakEquals: vt,
  inNumberRange: Ue
};
function Z(e) {
  return e == null || e === "";
}
const Ht = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: K("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, r) => {
    e.getAutoFilterFn = () => {
      const n = r.getCoreRowModel().flatRows[0], t = n?.getValue(e.id);
      return typeof t == "string" ? se.includesString : typeof t == "number" ? se.inNumberRange : typeof t == "boolean" || t !== null && typeof t == "object" ? se.equals : Array.isArray(t) ? se.arrIncludes : se.weakEquals;
    }, e.getFilterFn = () => {
      var n, t;
      return Ae(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (t = r.options.filterFns) == null ? void 0 : t[e.columnDef.filterFn]) != null ? n : se[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, t, i;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((t = r.options.enableColumnFilters) != null ? t : !0) && ((i = r.options.enableFilters) != null ? i : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = r.getState().columnFilters) == null || (n = n.find((t) => t.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, t;
      return (n = (t = r.getState().columnFilters) == null ? void 0 : t.findIndex((i) => i.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      r.setColumnFilters((t) => {
        const i = e.getFilterFn(), o = t?.find((d) => d.id === e.id), s = ce(n, o ? o.value : void 0);
        if (it(i, s, e)) {
          var l;
          return (l = t?.filter((d) => d.id !== e.id)) != null ? l : [];
        }
        const a = {
          id: e.id,
          value: s
        };
        if (o) {
          var u;
          return (u = t?.map((d) => d.id === e.id ? a : d)) != null ? u : [];
        }
        return t != null && t.length ? [...t, a] : [a];
      });
    };
  },
  createRow: (e, r) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (r) => {
      const n = e.getAllLeafColumns(), t = (i) => {
        var o;
        return (o = ce(r, i)) == null ? void 0 : o.filter((s) => {
          const l = n.find((a) => a.id === s.id);
          if (l) {
            const a = l.getFilterFn();
            if (it(a, s.value, l))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(t);
    }, e.resetColumnFilters = (r) => {
      var n, t;
      e.setColumnFilters(r ? [] : (n = (t = e.initialState) == null ? void 0 : t.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function it(e, r, n) {
  return (e && e.autoRemove ? e.autoRemove(r, n) : !1) || typeof r > "u" || typeof r == "string" && !r;
}
const Gt = (e, r, n) => n.reduce((t, i) => {
  const o = i.getValue(e);
  return t + (typeof o == "number" ? o : 0);
}, 0), Wt = (e, r, n) => {
  let t;
  return n.forEach((i) => {
    const o = i.getValue(e);
    o != null && (t > o || t === void 0 && o >= o) && (t = o);
  }), t;
}, Bt = (e, r, n) => {
  let t;
  return n.forEach((i) => {
    const o = i.getValue(e);
    o != null && (t < o || t === void 0 && o >= o) && (t = o);
  }), t;
}, qt = (e, r, n) => {
  let t, i;
  return n.forEach((o) => {
    const s = o.getValue(e);
    s != null && (t === void 0 ? s >= s && (t = i = s) : (t > s && (t = s), i < s && (i = s)));
  }), [t, i];
}, Yt = (e, r) => {
  let n = 0, t = 0;
  if (r.forEach((i) => {
    let o = i.getValue(e);
    o != null && (o = +o) >= o && (++n, t += o);
  }), n) return t / n;
}, Xt = (e, r) => {
  if (!r.length)
    return;
  const n = r.map((o) => o.getValue(e));
  if (!kt(n))
    return;
  if (n.length === 1)
    return n[0];
  const t = Math.floor(n.length / 2), i = n.sort((o, s) => o - s);
  return n.length % 2 !== 0 ? i[t] : (i[t - 1] + i[t]) / 2;
}, Ut = (e, r) => Array.from(new Set(r.map((n) => n.getValue(e))).values()), Kt = (e, r) => new Set(r.map((n) => n.getValue(e))).size, Jt = (e, r) => r.length, Ie = {
  sum: Gt,
  min: Wt,
  max: Bt,
  extent: qt,
  mean: Yt,
  median: Xt,
  unique: Ut,
  uniqueCount: Kt,
  count: Jt
}, Qt = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var r, n;
      return (r = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? r : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: K("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, r) => {
    e.toggleGrouping = () => {
      r.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((t) => t !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, t;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((t = r.options.enableGrouping) != null ? t : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = r.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = r.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = r.getCoreRowModel().flatRows[0], t = n?.getValue(e.id);
      if (typeof t == "number")
        return Ie.sum;
      if (Object.prototype.toString.call(t) === "[object Date]")
        return Ie.extent;
    }, e.getAggregationFn = () => {
      var n, t;
      if (!e)
        throw new Error();
      return Ae(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (t = r.options.aggregationFns) == null ? void 0 : t[e.columnDef.aggregationFn]) != null ? n : Ie[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (r) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(r), e.resetGrouping = (r) => {
      var n, t;
      e.setGrouping(r ? [] : (n = (t = e.initialState) == null ? void 0 : t.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, r) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const t = r.getColumn(n);
      return t != null && t.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = t.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, r, n, t) => {
    e.getIsGrouped = () => r.getIsGrouped() && r.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && r.getIsGrouped(), e.getIsAggregated = () => {
      var i;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((i = n.subRows) != null && i.length);
    };
  }
};
function Zt(e, r, n) {
  if (!(r != null && r.length) || !n)
    return e;
  const t = e.filter((o) => !r.includes(o.id));
  return n === "remove" ? t : [...r.map((o) => e.find((s) => s.id === o)).filter(Boolean), ...t];
}
const en = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: K("columnOrder", e)
  }),
  createColumn: (e, r) => {
    e.getIndex = x((n) => [xe(r, n)], (n) => n.findIndex((t) => t.id === e.id), y(r.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var t;
      return ((t = xe(r, n)[0]) == null ? void 0 : t.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var t;
      const i = xe(r, n);
      return ((t = i[i.length - 1]) == null ? void 0 : t.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (r) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(r), e.resetColumnOrder = (r) => {
      var n;
      e.setColumnOrder(r ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = x(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (r, n, t) => (i) => {
      let o = [];
      if (!(r != null && r.length))
        o = i;
      else {
        const s = [...r], l = [...i];
        for (; l.length && s.length; ) {
          const a = s.shift(), u = l.findIndex((d) => d.id === a);
          u > -1 && o.push(l.splice(u, 1)[0]);
        }
        o = [...o, ...l];
      }
      return Zt(o, n, t);
    }, y(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, Ve = () => ({
  left: [],
  right: []
}), tn = {
  getInitialState: (e) => ({
    columnPinning: Ve(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: K("columnPinning", e)
  }),
  createColumn: (e, r) => {
    e.pin = (n) => {
      const t = e.getLeafColumns().map((i) => i.id).filter(Boolean);
      r.setColumnPinning((i) => {
        var o, s;
        if (n === "right") {
          var l, a;
          return {
            left: ((l = i?.left) != null ? l : []).filter((p) => !(t != null && t.includes(p))),
            right: [...((a = i?.right) != null ? a : []).filter((p) => !(t != null && t.includes(p))), ...t]
          };
        }
        if (n === "left") {
          var u, d;
          return {
            left: [...((u = i?.left) != null ? u : []).filter((p) => !(t != null && t.includes(p))), ...t],
            right: ((d = i?.right) != null ? d : []).filter((p) => !(t != null && t.includes(p)))
          };
        }
        return {
          left: ((o = i?.left) != null ? o : []).filter((p) => !(t != null && t.includes(p))),
          right: ((s = i?.right) != null ? s : []).filter((p) => !(t != null && t.includes(p)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((t) => {
      var i, o, s;
      return ((i = t.columnDef.enablePinning) != null ? i : !0) && ((o = (s = r.options.enableColumnPinning) != null ? s : r.options.enablePinning) != null ? o : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((l) => l.id), {
        left: t,
        right: i
      } = r.getState().columnPinning, o = n.some((l) => t?.includes(l)), s = n.some((l) => i?.includes(l));
      return o ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, t;
      const i = e.getIsPinned();
      return i ? (n = (t = r.getState().columnPinning) == null || (t = t[i]) == null ? void 0 : t.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, r) => {
    e.getCenterVisibleCells = x(() => [e._getAllVisibleCells(), r.getState().columnPinning.left, r.getState().columnPinning.right], (n, t, i) => {
      const o = [...t ?? [], ...i ?? []];
      return n.filter((s) => !o.includes(s.column.id));
    }, y(r.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = x(() => [e._getAllVisibleCells(), r.getState().columnPinning.left], (n, t) => (t ?? []).map((o) => n.find((s) => s.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "left"
    })), y(r.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = x(() => [e._getAllVisibleCells(), r.getState().columnPinning.right], (n, t) => (t ?? []).map((o) => n.find((s) => s.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "right"
    })), y(r.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (r) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(r), e.resetColumnPinning = (r) => {
      var n, t;
      return e.setColumnPinning(r ? Ve() : (n = (t = e.initialState) == null ? void 0 : t.columnPinning) != null ? n : Ve());
    }, e.getIsSomeColumnsPinned = (r) => {
      var n;
      const t = e.getState().columnPinning;
      if (!r) {
        var i, o;
        return !!((i = t.left) != null && i.length || (o = t.right) != null && o.length);
      }
      return !!((n = t[r]) != null && n.length);
    }, e.getLeftLeafColumns = x(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (r, n) => (n ?? []).map((t) => r.find((i) => i.id === t)).filter(Boolean), y(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = x(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (r, n) => (n ?? []).map((t) => r.find((i) => i.id === t)).filter(Boolean), y(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = x(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (r, n, t) => {
      const i = [...n ?? [], ...t ?? []];
      return r.filter((o) => !i.includes(o.id));
    }, y(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function nn(e) {
  return e || (typeof document < "u" ? document : null);
}
const Ee = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, ke = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), rn = {
  getDefaultColumnDef: () => Ee,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: ke(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: K("columnSizing", e),
    onColumnSizingInfoChange: K("columnSizingInfo", e)
  }),
  createColumn: (e, r) => {
    e.getSize = () => {
      var n, t, i;
      const o = r.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Ee.minSize, (t = o ?? e.columnDef.size) != null ? t : Ee.size), (i = e.columnDef.maxSize) != null ? i : Ee.maxSize);
    }, e.getStart = x((n) => [n, xe(r, n), r.getState().columnSizing], (n, t) => t.slice(0, e.getIndex(n)).reduce((i, o) => i + o.getSize(), 0), y(r.options, "debugColumns", "getStart")), e.getAfter = x((n) => [n, xe(r, n), r.getState().columnSizing], (n, t) => t.slice(e.getIndex(n) + 1).reduce((i, o) => i + o.getSize(), 0), y(r.options, "debugColumns", "getAfter")), e.resetSize = () => {
      r.setColumnSizing((n) => {
        let {
          [e.id]: t,
          ...i
        } = n;
        return i;
      });
    }, e.getCanResize = () => {
      var n, t;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((t = r.options.enableColumnResizing) != null ? t : !0);
    }, e.getIsResizing = () => r.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, r) => {
    e.getSize = () => {
      let n = 0;
      const t = (i) => {
        if (i.subHeaders.length)
          i.subHeaders.forEach(t);
        else {
          var o;
          n += (o = i.column.getSize()) != null ? o : 0;
        }
      };
      return t(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const t = r.getColumn(e.column.id), i = t?.getCanResize();
      return (o) => {
        if (!t || !i || (o.persist == null || o.persist(), Ne(o) && o.touches && o.touches.length > 1))
          return;
        const s = e.getSize(), l = e ? e.getLeafHeaders().map((C) => [C.column.id, C.column.getSize()]) : [[t.id, t.getSize()]], a = Ne(o) ? Math.round(o.touches[0].clientX) : o.clientX, u = {}, d = (C, F) => {
          typeof F == "number" && (r.setColumnSizingInfo((E) => {
            var A, V;
            const b = r.options.columnResizeDirection === "rtl" ? -1 : 1, P = (F - ((A = E?.startOffset) != null ? A : 0)) * b, k = Math.max(P / ((V = E?.startSize) != null ? V : 0), -0.999999);
            return E.columnSizingStart.forEach((j) => {
              let [ne, B] = j;
              u[ne] = Math.round(Math.max(B + B * k, 0) * 100) / 100;
            }), {
              ...E,
              deltaOffset: P,
              deltaPercentage: k
            };
          }), (r.options.columnResizeMode === "onChange" || C === "end") && r.setColumnSizing((E) => ({
            ...E,
            ...u
          })));
        }, p = (C) => d("move", C), f = (C) => {
          d("end", C), r.setColumnSizingInfo((F) => ({
            ...F,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, c = nn(n), h = {
          moveHandler: (C) => p(C.clientX),
          upHandler: (C) => {
            c?.removeEventListener("mousemove", h.moveHandler), c?.removeEventListener("mouseup", h.upHandler), f(C.clientX);
          }
        }, m = {
          moveHandler: (C) => (C.cancelable && (C.preventDefault(), C.stopPropagation()), p(C.touches[0].clientX), !1),
          upHandler: (C) => {
            var F;
            c?.removeEventListener("touchmove", m.moveHandler), c?.removeEventListener("touchend", m.upHandler), C.cancelable && (C.preventDefault(), C.stopPropagation()), f((F = C.touches[0]) == null ? void 0 : F.clientX);
          }
        }, w = on() ? {
          passive: !1
        } : !1;
        Ne(o) ? (c?.addEventListener("touchmove", m.moveHandler, w), c?.addEventListener("touchend", m.upHandler, w)) : (c?.addEventListener("mousemove", h.moveHandler, w), c?.addEventListener("mouseup", h.upHandler, w)), r.setColumnSizingInfo((C) => ({
          ...C,
          startOffset: a,
          startSize: s,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: l,
          isResizingColumn: t.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (r) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(r), e.setColumnSizingInfo = (r) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(r), e.resetColumnSizing = (r) => {
      var n;
      e.setColumnSizing(r ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (r) => {
      var n;
      e.setColumnSizingInfo(r ? ke() : (n = e.initialState.columnSizingInfo) != null ? n : ke());
    }, e.getTotalSize = () => {
      var r, n;
      return (r = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((t, i) => t + i.getSize(), 0)) != null ? r : 0;
    }, e.getLeftTotalSize = () => {
      var r, n;
      return (r = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((t, i) => t + i.getSize(), 0)) != null ? r : 0;
    }, e.getCenterTotalSize = () => {
      var r, n;
      return (r = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((t, i) => t + i.getSize(), 0)) != null ? r : 0;
    }, e.getRightTotalSize = () => {
      var r, n;
      return (r = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((t, i) => t + i.getSize(), 0)) != null ? r : 0;
    };
  }
};
let be = null;
function on() {
  if (typeof be == "boolean") return be;
  let e = !1;
  try {
    const r = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, r), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return be = e, be;
}
function Ne(e) {
  return e.type === "touchstart";
}
const sn = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: K("columnVisibility", e)
  }),
  createColumn: (e, r) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && r.setColumnVisibility((t) => ({
        ...t,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, t;
      const i = e.columns;
      return (n = i.length ? i.some((o) => o.getIsVisible()) : (t = r.getState().columnVisibility) == null ? void 0 : t[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, t;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((t = r.options.enableHiding) != null ? t : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, r) => {
    e._getAllVisibleCells = x(() => [e.getAllCells(), r.getState().columnVisibility], (n) => n.filter((t) => t.column.getIsVisible()), y(r.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = x(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, t, i) => [...n, ...t, ...i], y(r.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const r = (n, t) => x(() => [t(), t().filter((i) => i.getIsVisible()).map((i) => i.id).join("_")], (i) => i.filter((o) => o.getIsVisible == null ? void 0 : o.getIsVisible()), y(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = r("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = r("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = r("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = r("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = r("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var t;
      e.setColumnVisibility(n ? {} : (t = e.initialState.columnVisibility) != null ? t : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var t;
      n = (t = n) != null ? t : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((i, o) => ({
        ...i,
        [o.id]: n || !(o.getCanHide != null && o.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var t;
      e.toggleAllColumnsVisible((t = n.target) == null ? void 0 : t.checked);
    };
  }
};
function xe(e, r) {
  return r ? r === "center" ? e.getCenterVisibleLeafColumns() : r === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const ln = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, an = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: K("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (r) => {
      var n;
      const t = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[r.id]) == null ? void 0 : n.getValue();
      return typeof t == "string" || typeof t == "number";
    }
  }),
  createColumn: (e, r) => {
    e.getCanGlobalFilter = () => {
      var n, t, i, o;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((t = r.options.enableGlobalFilter) != null ? t : !0) && ((i = r.options.enableFilters) != null ? i : !0) && ((o = r.options.getColumnCanGlobalFilter == null ? void 0 : r.options.getColumnCanGlobalFilter(e)) != null ? o : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => se.includesString, e.getGlobalFilterFn = () => {
      var r, n;
      const {
        globalFilterFn: t
      } = e.options;
      return Ae(t) ? t : t === "auto" ? e.getGlobalAutoFilterFn() : (r = (n = e.options.filterFns) == null ? void 0 : n[t]) != null ? r : se[t];
    }, e.setGlobalFilter = (r) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(r);
    }, e.resetGlobalFilter = (r) => {
      e.setGlobalFilter(r ? void 0 : e.initialState.globalFilter);
    };
  }
}, un = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: K("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let r = !1, n = !1;
    e._autoResetExpanded = () => {
      var t, i;
      if (!r) {
        e._queue(() => {
          r = !0;
        });
        return;
      }
      if ((t = (i = e.options.autoResetAll) != null ? i : e.options.autoResetExpanded) != null ? t : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (t) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(t), e.toggleAllRowsExpanded = (t) => {
      t ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (t) => {
      var i, o;
      e.setExpanded(t ? {} : (i = (o = e.initialState) == null ? void 0 : o.expanded) != null ? i : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((t) => t.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (t) => {
      t.persist == null || t.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const t = e.getState().expanded;
      return t === !0 || Object.values(t).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const t = e.getState().expanded;
      return typeof t == "boolean" ? t === !0 : !(!Object.keys(t).length || e.getRowModel().flatRows.some((i) => !i.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let t = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((o) => {
        const s = o.split(".");
        t = Math.max(t, s.length);
      }), t;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, r) => {
    e.toggleExpanded = (n) => {
      r.setExpanded((t) => {
        var i;
        const o = t === !0 ? !0 : !!(t != null && t[e.id]);
        let s = {};
        if (t === !0 ? Object.keys(r.getRowModel().rowsById).forEach((l) => {
          s[l] = !0;
        }) : s = t, n = (i = n) != null ? i : !o, !o && n)
          return {
            ...s,
            [e.id]: !0
          };
        if (o && !n) {
          const {
            [e.id]: l,
            ...a
          } = s;
          return a;
        }
        return t;
      });
    }, e.getIsExpanded = () => {
      var n;
      const t = r.getState().expanded;
      return !!((n = r.options.getIsRowExpanded == null ? void 0 : r.options.getIsRowExpanded(e)) != null ? n : t === !0 || t?.[e.id]);
    }, e.getCanExpand = () => {
      var n, t, i;
      return (n = r.options.getRowCanExpand == null ? void 0 : r.options.getRowCanExpand(e)) != null ? n : ((t = r.options.enableExpanding) != null ? t : !0) && !!((i = e.subRows) != null && i.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, t = e;
      for (; n && t.parentId; )
        t = r.getRow(t.parentId, !0), n = t.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, He = 0, Ge = 10, ze = () => ({
  pageIndex: He,
  pageSize: Ge
}), cn = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...ze(),
      ...e?.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: K("pagination", e)
  }),
  createTable: (e) => {
    let r = !1, n = !1;
    e._autoResetPageIndex = () => {
      var t, i;
      if (!r) {
        e._queue(() => {
          r = !0;
        });
        return;
      }
      if ((t = (i = e.options.autoResetAll) != null ? i : e.options.autoResetPageIndex) != null ? t : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (t) => {
      const i = (o) => ce(t, o);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(i);
    }, e.resetPagination = (t) => {
      var i;
      e.setPagination(t ? ze() : (i = e.initialState.pagination) != null ? i : ze());
    }, e.setPageIndex = (t) => {
      e.setPagination((i) => {
        let o = ce(t, i.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return o = Math.max(0, Math.min(o, s)), {
          ...i,
          pageIndex: o
        };
      });
    }, e.resetPageIndex = (t) => {
      var i, o;
      e.setPageIndex(t ? He : (i = (o = e.initialState) == null || (o = o.pagination) == null ? void 0 : o.pageIndex) != null ? i : He);
    }, e.resetPageSize = (t) => {
      var i, o;
      e.setPageSize(t ? Ge : (i = (o = e.initialState) == null || (o = o.pagination) == null ? void 0 : o.pageSize) != null ? i : Ge);
    }, e.setPageSize = (t) => {
      e.setPagination((i) => {
        const o = Math.max(1, ce(t, i.pageSize)), s = i.pageSize * i.pageIndex, l = Math.floor(s / o);
        return {
          ...i,
          pageIndex: l,
          pageSize: o
        };
      });
    }, e.setPageCount = (t) => e.setPagination((i) => {
      var o;
      let s = ce(t, (o = e.options.pageCount) != null ? o : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...i,
        pageCount: s
      };
    }), e.getPageOptions = x(() => [e.getPageCount()], (t) => {
      let i = [];
      return t && t > 0 && (i = [...new Array(t)].fill(null).map((o, s) => s)), i;
    }, y(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: t
      } = e.getState().pagination, i = e.getPageCount();
      return i === -1 ? !0 : i === 0 ? !1 : t < i - 1;
    }, e.previousPage = () => e.setPageIndex((t) => t - 1), e.nextPage = () => e.setPageIndex((t) => t + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var t;
      return (t = e.options.pageCount) != null ? t : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var t;
      return (t = e.options.rowCount) != null ? t : e.getPrePaginationRowModel().rows.length;
    };
  }
}, De = () => ({
  top: [],
  bottom: []
}), dn = {
  getInitialState: (e) => ({
    rowPinning: De(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: K("rowPinning", e)
  }),
  createRow: (e, r) => {
    e.pin = (n, t, i) => {
      const o = t ? e.getLeafRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], s = i ? e.getParentRows().map((a) => {
        let {
          id: u
        } = a;
        return u;
      }) : [], l = /* @__PURE__ */ new Set([...s, e.id, ...o]);
      r.setRowPinning((a) => {
        var u, d;
        if (n === "bottom") {
          var p, f;
          return {
            top: ((p = a?.top) != null ? p : []).filter((m) => !(l != null && l.has(m))),
            bottom: [...((f = a?.bottom) != null ? f : []).filter((m) => !(l != null && l.has(m))), ...Array.from(l)]
          };
        }
        if (n === "top") {
          var c, h;
          return {
            top: [...((c = a?.top) != null ? c : []).filter((m) => !(l != null && l.has(m))), ...Array.from(l)],
            bottom: ((h = a?.bottom) != null ? h : []).filter((m) => !(l != null && l.has(m)))
          };
        }
        return {
          top: ((u = a?.top) != null ? u : []).filter((m) => !(l != null && l.has(m))),
          bottom: ((d = a?.bottom) != null ? d : []).filter((m) => !(l != null && l.has(m)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: t,
        enablePinning: i
      } = r.options;
      return typeof t == "function" ? t(e) : (n = t ?? i) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: t,
        bottom: i
      } = r.getState().rowPinning, o = n.some((l) => t?.includes(l)), s = n.some((l) => i?.includes(l));
      return o ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, t;
      const i = e.getIsPinned();
      if (!i) return -1;
      const o = (n = i === "top" ? r.getTopRows() : r.getBottomRows()) == null ? void 0 : n.map((s) => {
        let {
          id: l
        } = s;
        return l;
      });
      return (t = o?.indexOf(e.id)) != null ? t : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (r) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(r), e.resetRowPinning = (r) => {
      var n, t;
      return e.setRowPinning(r ? De() : (n = (t = e.initialState) == null ? void 0 : t.rowPinning) != null ? n : De());
    }, e.getIsSomeRowsPinned = (r) => {
      var n;
      const t = e.getState().rowPinning;
      if (!r) {
        var i, o;
        return !!((i = t.top) != null && i.length || (o = t.bottom) != null && o.length);
      }
      return !!((n = t[r]) != null && n.length);
    }, e._getPinnedRows = (r, n, t) => {
      var i;
      return ((i = e.options.keepPinnedRows) == null || i ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((s) => {
          const l = e.getRow(s, !0);
          return l.getIsAllParentsExpanded() ? l : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((s) => r.find((l) => l.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: t
      }));
    }, e.getTopRows = x(() => [e.getRowModel().rows, e.getState().rowPinning.top], (r, n) => e._getPinnedRows(r, n, "top"), y(e.options, "debugRows", "getTopRows")), e.getBottomRows = x(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (r, n) => e._getPinnedRows(r, n, "bottom"), y(e.options, "debugRows", "getBottomRows")), e.getCenterRows = x(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (r, n, t) => {
      const i = /* @__PURE__ */ new Set([...n ?? [], ...t ?? []]);
      return r.filter((o) => !i.has(o.id));
    }, y(e.options, "debugRows", "getCenterRows"));
  }
}, gn = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: K("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (r) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(r), e.resetRowSelection = (r) => {
      var n;
      return e.setRowSelection(r ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (r) => {
      e.setRowSelection((n) => {
        r = typeof r < "u" ? r : !e.getIsAllRowsSelected();
        const t = {
          ...n
        }, i = e.getPreGroupedRowModel().flatRows;
        return r ? i.forEach((o) => {
          o.getCanSelect() && (t[o.id] = !0);
        }) : i.forEach((o) => {
          delete t[o.id];
        }), t;
      });
    }, e.toggleAllPageRowsSelected = (r) => e.setRowSelection((n) => {
      const t = typeof r < "u" ? r : !e.getIsAllPageRowsSelected(), i = {
        ...n
      };
      return e.getRowModel().rows.forEach((o) => {
        We(i, o.id, t, !0, e);
      }), i;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = x(() => [e.getState().rowSelection, e.getCoreRowModel()], (r, n) => Object.keys(r).length ? Le(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, y(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = x(() => [e.getState().rowSelection, e.getFilteredRowModel()], (r, n) => Object.keys(r).length ? Le(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, y(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = x(() => [e.getState().rowSelection, e.getSortedRowModel()], (r, n) => Object.keys(r).length ? Le(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, y(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const r = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let t = !!(r.length && Object.keys(n).length);
      return t && r.some((i) => i.getCanSelect() && !n[i.id]) && (t = !1), t;
    }, e.getIsAllPageRowsSelected = () => {
      const r = e.getPaginationRowModel().flatRows.filter((i) => i.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let t = !!r.length;
      return t && r.some((i) => !n[i.id]) && (t = !1), t;
    }, e.getIsSomeRowsSelected = () => {
      var r;
      const n = Object.keys((r = e.getState().rowSelection) != null ? r : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const r = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : r.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (r) => {
      e.toggleAllRowsSelected(r.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (r) => {
      e.toggleAllPageRowsSelected(r.target.checked);
    };
  },
  createRow: (e, r) => {
    e.toggleSelected = (n, t) => {
      const i = e.getIsSelected();
      r.setRowSelection((o) => {
        var s;
        if (n = typeof n < "u" ? n : !i, e.getCanSelect() && i === n)
          return o;
        const l = {
          ...o
        };
        return We(l, e.id, n, (s = t?.selectChildren) != null ? s : !0, r), l;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = r.getState();
      return Ke(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = r.getState();
      return Be(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = r.getState();
      return Be(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof r.options.enableRowSelection == "function" ? r.options.enableRowSelection(e) : (n = r.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof r.options.enableSubRowSelection == "function" ? r.options.enableSubRowSelection(e) : (n = r.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof r.options.enableMultiRowSelection == "function" ? r.options.enableMultiRowSelection(e) : (n = r.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (t) => {
        var i;
        n && e.toggleSelected((i = t.target) == null ? void 0 : i.checked);
      };
    };
  }
}, We = (e, r, n, t, i) => {
  var o;
  const s = i.getRow(r, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[r] = !0)) : delete e[r], t && (o = s.subRows) != null && o.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => We(e, l.id, n, t, i));
};
function Le(e, r) {
  const n = e.getState().rowSelection, t = [], i = {}, o = function(s, l) {
    return s.map((a) => {
      var u;
      const d = Ke(a, n);
      if (d && (t.push(a), i[a.id] = a), (u = a.subRows) != null && u.length && (a = {
        ...a,
        subRows: o(a.subRows)
      }), d)
        return a;
    }).filter(Boolean);
  };
  return {
    rows: o(r.rows),
    flatRows: t,
    rowsById: i
  };
}
function Ke(e, r) {
  var n;
  return (n = r[e.id]) != null ? n : !1;
}
function Be(e, r, n) {
  var t;
  if (!((t = e.subRows) != null && t.length)) return !1;
  let i = !0, o = !1;
  return e.subRows.forEach((s) => {
    if (!(o && !i) && (s.getCanSelect() && (Ke(s, r) ? o = !0 : i = !1), s.subRows && s.subRows.length)) {
      const l = Be(s, r);
      l === "all" ? o = !0 : (l === "some" && (o = !0), i = !1);
    }
  }), i ? "all" : o ? "some" : !1;
}
const qe = /([0-9]+)/gm, fn = (e, r, n) => St(de(e.getValue(n)).toLowerCase(), de(r.getValue(n)).toLowerCase()), pn = (e, r, n) => St(de(e.getValue(n)), de(r.getValue(n))), hn = (e, r, n) => Je(de(e.getValue(n)).toLowerCase(), de(r.getValue(n)).toLowerCase()), mn = (e, r, n) => Je(de(e.getValue(n)), de(r.getValue(n))), vn = (e, r, n) => {
  const t = e.getValue(n), i = r.getValue(n);
  return t > i ? 1 : t < i ? -1 : 0;
}, Sn = (e, r, n) => Je(e.getValue(n), r.getValue(n));
function Je(e, r) {
  return e === r ? 0 : e > r ? 1 : -1;
}
function de(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function St(e, r) {
  const n = e.split(qe).filter(Boolean), t = r.split(qe).filter(Boolean);
  for (; n.length && t.length; ) {
    const i = n.shift(), o = t.shift(), s = parseInt(i, 10), l = parseInt(o, 10), a = [s, l].sort();
    if (isNaN(a[0])) {
      if (i > o)
        return 1;
      if (o > i)
        return -1;
      continue;
    }
    if (isNaN(a[1]))
      return isNaN(s) ? -1 : 1;
    if (s > l)
      return 1;
    if (l > s)
      return -1;
  }
  return n.length - t.length;
}
const we = {
  alphanumeric: fn,
  alphanumericCaseSensitive: pn,
  text: hn,
  textCaseSensitive: mn,
  datetime: vn,
  basic: Sn
}, wn = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: K("sorting", e),
    isMultiSortEvent: (r) => r.shiftKey
  }),
  createColumn: (e, r) => {
    e.getAutoSortingFn = () => {
      const n = r.getFilteredRowModel().flatRows.slice(10);
      let t = !1;
      for (const i of n) {
        const o = i?.getValue(e.id);
        if (Object.prototype.toString.call(o) === "[object Date]")
          return we.datetime;
        if (typeof o == "string" && (t = !0, o.split(qe).length > 1))
          return we.alphanumeric;
      }
      return t ? we.text : we.basic;
    }, e.getAutoSortDir = () => {
      const n = r.getFilteredRowModel().flatRows[0];
      return typeof n?.getValue(e.id) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, t;
      if (!e)
        throw new Error();
      return Ae(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (t = r.options.sortingFns) == null ? void 0 : t[e.columnDef.sortingFn]) != null ? n : we[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, t) => {
      const i = e.getNextSortingOrder(), o = typeof n < "u" && n !== null;
      r.setSorting((s) => {
        const l = s?.find((c) => c.id === e.id), a = s?.findIndex((c) => c.id === e.id);
        let u = [], d, p = o ? n : i === "desc";
        if (s != null && s.length && e.getCanMultiSort() && t ? l ? d = "toggle" : d = "add" : s != null && s.length && a !== s.length - 1 ? d = "replace" : l ? d = "toggle" : d = "replace", d === "toggle" && (o || i || (d = "remove")), d === "add") {
          var f;
          u = [...s, {
            id: e.id,
            desc: p
          }], u.splice(0, u.length - ((f = r.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
        } else d === "toggle" ? u = s.map((c) => c.id === e.id ? {
          ...c,
          desc: p
        } : c) : d === "remove" ? u = s.filter((c) => c.id !== e.id) : u = [{
          id: e.id,
          desc: p
        }];
        return u;
      });
    }, e.getFirstSortDir = () => {
      var n, t;
      return ((n = (t = e.columnDef.sortDescFirst) != null ? t : r.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var t, i;
      const o = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== o && ((t = r.options.enableSortingRemoval) == null || t) && // If enableSortRemove, enable in general
      (!(n && (i = r.options.enableMultiRemove) != null) || i) ? !1 : s === "desc" ? "asc" : "desc" : o;
    }, e.getCanSort = () => {
      var n, t;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((t = r.options.enableSorting) != null ? t : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, t;
      return (n = (t = e.columnDef.enableMultiSort) != null ? t : r.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const t = (n = r.getState().sorting) == null ? void 0 : n.find((i) => i.id === e.id);
      return t ? t.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, t;
      return (n = (t = r.getState().sorting) == null ? void 0 : t.findIndex((i) => i.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      r.setSorting((n) => n != null && n.length ? n.filter((t) => t.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (t) => {
        n && (t.persist == null || t.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? r.options.isMultiSortEvent == null ? void 0 : r.options.isMultiSortEvent(t) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (r) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(r), e.resetSorting = (r) => {
      var n, t;
      e.setSorting(r ? [] : (n = (t = e.initialState) == null ? void 0 : t.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, Cn = [
  Lt,
  sn,
  en,
  tn,
  jt,
  Ht,
  ln,
  //depends on ColumnFaceting
  an,
  //depends on ColumnFiltering
  wn,
  Qt,
  //depends on RowSorting
  un,
  cn,
  dn,
  gn,
  rn
];
function Rn(e) {
  var r, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const t = [...Cn, ...(r = e._features) != null ? r : []];
  let i = {
    _features: t
  };
  const o = i._features.reduce((f, c) => Object.assign(f, c.getDefaultOptions == null ? void 0 : c.getDefaultOptions(i)), {}), s = (f) => i.options.mergeOptions ? i.options.mergeOptions(o, f) : {
    ...o,
    ...f
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  i._features.forEach((f) => {
    var c;
    a = (c = f.getInitialState == null ? void 0 : f.getInitialState(a)) != null ? c : a;
  });
  const u = [];
  let d = !1;
  const p = {
    _features: t,
    options: {
      ...o,
      ...e
    },
    initialState: a,
    _queue: (f) => {
      u.push(f), d || (d = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        d = !1;
      }).catch((c) => setTimeout(() => {
        throw c;
      })));
    },
    reset: () => {
      i.setState(i.initialState);
    },
    setOptions: (f) => {
      const c = ce(f, i.options);
      i.options = s(c);
    },
    getState: () => i.options.state,
    setState: (f) => {
      i.options.onStateChange == null || i.options.onStateChange(f);
    },
    _getRowId: (f, c, h) => {
      var m;
      return (m = i.options.getRowId == null ? void 0 : i.options.getRowId(f, c, h)) != null ? m : `${h ? [h.id, c].join(".") : c}`;
    },
    getCoreRowModel: () => (i._getCoreRowModel || (i._getCoreRowModel = i.options.getCoreRowModel(i)), i._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => i.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, c) => {
      let h = (c ? i.getPrePaginationRowModel() : i.getRowModel()).rowsById[f];
      if (!h && (h = i.getCoreRowModel().rowsById[f], !h))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return h;
    },
    _getDefaultColumnDef: x(() => [i.options.defaultColumn], (f) => {
      var c;
      return f = (c = f) != null ? c : {}, {
        header: (h) => {
          const m = h.header.column.columnDef;
          return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (h) => {
          var m, w;
          return (m = (w = h.renderValue()) == null || w.toString == null ? void 0 : w.toString()) != null ? m : null;
        },
        ...i._features.reduce((h, m) => Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
        ...f
      };
    }, y(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => i.options.columns,
    getAllColumns: x(() => [i._getColumnDefs()], (f) => {
      const c = function(h, m, w) {
        return w === void 0 && (w = 0), h.map((C) => {
          const F = Dt(i, C, w, m), E = C;
          return F.columns = E.columns ? c(E.columns, F, w + 1) : [], F;
        });
      };
      return c(f);
    }, y(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: x(() => [i.getAllColumns()], (f) => f.flatMap((c) => c.getFlatColumns()), y(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: x(() => [i.getAllFlatColumns()], (f) => f.reduce((c, h) => (c[h.id] = h, c), {}), y(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: x(() => [i.getAllColumns(), i._getOrderColumnsFn()], (f, c) => {
      let h = f.flatMap((m) => m.getLeafColumns());
      return c(h);
    }, y(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const c = i._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !c && console.error(`[Table] Column with id '${f}' does not exist.`), c;
    }
  };
  Object.assign(i, p);
  for (let f = 0; f < i._features.length; f++) {
    const c = i._features[f];
    c == null || c.createTable == null || c.createTable(i);
  }
  return i;
}
function xn() {
  return (e) => x(() => [e.options.data], (r) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, t = function(i, o, s) {
      o === void 0 && (o = 0);
      const l = [];
      for (let u = 0; u < i.length; u++) {
        const d = Tt(e, e._getRowId(i[u], u, s), i[u], u, o, void 0, s?.id);
        if (n.flatRows.push(d), n.rowsById[d.id] = d, l.push(d), e.options.getSubRows) {
          var a;
          d.originalSubRows = e.options.getSubRows(i[u], u), (a = d.originalSubRows) != null && a.length && (d.subRows = t(d.originalSubRows, o + 1, d));
        }
      }
      return l;
    };
    return n.rows = t(r), n;
  }, y(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function yn(e, r) {
  return e ? _n(e) ? /* @__PURE__ */ T.createElement(e, r) : e : null;
}
function _n(e) {
  return En(e) || typeof e == "function" || bn(e);
}
function En(e) {
  return typeof e == "function" && (() => {
    const r = Object.getPrototypeOf(e);
    return r.prototype && r.prototype.isReactComponent;
  })();
}
function bn(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Fn(e) {
  const r = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = T.useState(() => ({
    current: Rn(r)
  })), [t, i] = T.useState(() => n.current.initialState);
  return n.current.setOptions((o) => ({
    ...o,
    ...e,
    state: {
      ...t,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (s) => {
      i(s), e.onStateChange == null || e.onStateChange(s);
    }
  })), n.current;
}
function On({
  table: e,
  tableWidth: r,
  stickyById: n,
  defaultTextAlign: t,
  editable: i = !1,
  draggable: o = !1,
  setData: s,
  setInternalData: l,
  selectable: a,
  selectedRows: u,
  setSelectedRows: d,
  disableSelectRow: p,
  expandable: f,
  expandedRows: c,
  setExpandedRows: h,
  stripedRows: m = !1,
  hoverableRow: w = !1
}) {
  const C = ge(
    () => s ?? l,
    [s, l]
  ), F = H(null), E = H(null), [A, V] = Q(null), [b, P] = Q(0), k = (_, I) => {
    o && (I.preventDefault(), F.current = I.clientY, E.current = _, V(_), P(0), I.currentTarget.setPointerCapture(I.pointerId));
  }, j = (_) => {
    if (!o || F.current === null || E.current === null) return;
    const I = _.clientY - F.current;
    P(I);
    const L = 32, g = I > L ? 1 : I < -L ? -1 : 0;
    if (g === 0) return;
    const v = E.current, O = v + g;
    O < 0 || O >= e.getRowModel().rows.length || (C(($) => {
      const q = [...$], [G] = q.splice(v, 1);
      return q.splice(O, 0, G), q;
    }), E.current = O, F.current = _.clientY, P(0), V(O));
  }, ne = () => {
    F.current = null, E.current = null, V(null), P(0);
  }, [B, J] = Q(null), [ee, re] = Q(""), ie = (_) => {
    J({
      rowId: _.row.id,
      colId: _.column.id
    }), re(String(_.getValue() ?? ""));
  }, D = (_) => {
    l(
      (I) => I.map(
        (L, g) => g === _.row.index ? {
          ...L,
          [_.column.id]: ee
        } : L
      )
    ), J(null);
  }, M = (_, I) => {
    if (!f || !f.clickRow || _.target.closest(".col-drag-handle") || _.target.tagName === "INPUT" && _.target.type === "checkbox" || _.target.tagName === "A" || _.target.tagName === "BUTTON" || _.target.tagName === "INPUT" && B) return;
    const L = I.original.id ?? I.index;
    h((g) => {
      const v = new Set(g);
      return v.has(L) ? v.delete(L) : v.add(L), v;
    });
  };
  return /* @__PURE__ */ S.jsxs("table", { className: `table table-body ${w ? "hoverable" : ""} ${m ? "striped" : ""}`, children: [
    /* @__PURE__ */ S.jsx(
      Pe,
      {
        table: e,
        tableWidth: r
      }
    ),
    /* @__PURE__ */ S.jsx("tbody", { children: e.getRowModel().rows.map((_) => {
      const I = _.index, L = A === I, g = [];
      return g.push(
        /* @__PURE__ */ S.jsx(
          "tr",
          {
            className: `${L ? "row-dragging" : ""}`,
            style: L ? {
              transform: `translateY(${b}px)`,
              position: "relative",
              zIndex: 50
            } : void 0,
            onPointerMove: j,
            onPointerUp: ne,
            onClick: (v) => M(v, _),
            children: _.getVisibleCells().map((v) => {
              const O = v.column.id, $ = n.get(O), q = Me(v.column, t), G = B?.rowId === _.id && B?.colId === O, R = [
                $ ? "is-sticky" : "",
                $?.side === "left" ? "is-sticky-left" : "",
                $?.side === "right" ? "is-sticky-right" : ""
              ].filter(Boolean).join(" "), X = $ ? $.side === "left" ? { "--sticky-left": `${$.offset}px` } : { "--sticky-right": `${$.offset}px` } : void 0;
              if (v.column.id === "__draggable__" && o)
                return /* @__PURE__ */ S.jsx(
                  "td",
                  {
                    className: `${R} align-center col-drag-handle`,
                    style: X,
                    onPointerDown: (N) => k(I, N),
                    children: "☰"
                  },
                  v.id
                );
              if (v.column.id === "__selectable__" && a) {
                const N = v.row.original.id ?? v.row.index, z = p.includes(N), he = u.has(N);
                return /* @__PURE__ */ S.jsx(
                  "td",
                  {
                    className: `${R} align-center`,
                    style: X,
                    children: /* @__PURE__ */ S.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: he,
                        disabled: z,
                        onChange: () => {
                          d((me) => {
                            const oe = new Set(me);
                            return oe.has(N) ? oe.delete(N) : oe.add(N), oe;
                          });
                        }
                      }
                    )
                  },
                  v.id
                );
              }
              if (v.column.id === "__expandable__" && f) {
                const N = v.row.original.id ?? v.row.index, z = c.has(N);
                return /* @__PURE__ */ S.jsx(
                  "td",
                  {
                    className: `${R} align-center`,
                    style: X,
                    onClick: (he) => {
                      he.stopPropagation(), h((me) => {
                        const oe = new Set(me);
                        return oe.has(N) ? oe.delete(N) : oe.add(N), oe;
                      });
                    },
                    children: /* @__PURE__ */ S.jsx(
                      "span",
                      {
                        className: `expand-icon ${z ? "expanded" : ""}`,
                        style: {
                          display: "inline-block",
                          transition: "transform 0.2s",
                          transform: z ? "rotate(90deg)" : "rotate(0deg)",
                          cursor: "pointer",
                          fontSize: "12px"
                        },
                        children: /* @__PURE__ */ S.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ S.jsx("path", { d: "M4.5 9L7.5 6L4.5 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                      }
                    )
                  },
                  v.id
                );
              }
              return /* @__PURE__ */ S.jsx(
                "td",
                {
                  className: `${R} align-${q}`,
                  style: X,
                  onDoubleClick: () => {
                    i && ie(v);
                  },
                  children: G ? /* @__PURE__ */ S.jsx(
                    "input",
                    {
                      autoFocus: !0,
                      value: ee,
                      onChange: (N) => re(N.target.value),
                      onBlur: () => D(v),
                      onKeyDown: (N) => {
                        N.key === "Enter" && D(v), N.key === "Escape" && J(null);
                      },
                      onFocus: (N) => N.currentTarget.select(),
                      style: {
                        width: "100%",
                        height: "100%",
                        boxSizing: "border-box",
                        fontSize: "inherit",
                        fontFamily: "inherit"
                      }
                    }
                  ) : yn(
                    v.column.columnDef.cell,
                    v.getContext()
                  )
                },
                v.id
              );
            })
          },
          _.id
        )
      ), f && f.content && c.has(_.original.id ?? _.index) && g.push(
        /* @__PURE__ */ S.jsx("tr", { className: "expanded-row", children: /* @__PURE__ */ S.jsx("td", { colSpan: e.getAllColumns().length, className: "expanded-content", children: f.content(_.original) }) }, `${_.id}-expanded`)
      ), g;
    }).flat() })
  ] });
}
function $n({
  table: e,
  tableWidth: r,
  stickyById: n,
  defaultTextAlign: t,
  scrollRef: i
}) {
  return e.getAllLeafColumns().some(
    (l) => l.columnDef.meta?.internalFooter != null
  ) ? /* @__PURE__ */ S.jsx("div", { className: "table-scroll-sync", ref: i, children: /* @__PURE__ */ S.jsxs("table", { className: "table table-internal-footer", children: [
    /* @__PURE__ */ S.jsx(
      Pe,
      {
        table: e,
        tableWidth: r
      }
    ),
    /* @__PURE__ */ S.jsx("tfoot", { children: /* @__PURE__ */ S.jsx("tr", { children: e.getAllLeafColumns().map((l) => {
      const a = l.columnDef.meta?.internalFooter, u = n.get(l.id), d = Me(l, t), p = [
        u ? "is-sticky" : "",
        u?.side === "left" ? "is-sticky-left" : "",
        u?.side === "right" ? "is-sticky-right" : ""
      ].filter(Boolean).join(" "), f = u ? u.side === "left" ? { "--sticky-left": `${u.offset}px` } : { "--sticky-right": `${u.offset}px` } : void 0;
      return /* @__PURE__ */ S.jsx(
        "td",
        {
          className: `${p} align-${d}`,
          style: f,
          children: typeof a == "function" ? a() : a ?? null
        },
        l.id
      );
    }) }) })
  ] }) }) : null;
}
function Mn({ children: e }) {
  return /* @__PURE__ */ S.jsx("table", { className: "table table-external-footer", children: /* @__PURE__ */ S.jsx("tfoot", { children: /* @__PURE__ */ S.jsx("tr", { children: /* @__PURE__ */ S.jsx("td", { children: e }) }) }) });
}
function Pn(e, r, n = 2) {
  if (r <= 1) return [1];
  const t = [], i = [], o = Math.max(2, e - n), s = Math.min(r - 1, e + n);
  for (let l = o; l <= s; l++)
    i.push(l);
  return t.push(1), o > 2 && t.push("ellipsis"), t.push(...i), s < r - 1 && t.push("ellipsis"), t.push(r), t;
}
function An({
  currentPage: e,
  totalItems: r,
  pageSize: n,
  pageSizeOptions: t = [10, 25, 50, 100, 200],
  onPageChange: i
}) {
  const o = Math.max(1, Math.ceil(r / n)), s = r === 0 ? 0 : (e - 1) * n + 1, l = Math.min(e * n, r), a = ge(
    () => Pn(e, o),
    [e, o]
  ), u = ge(() => {
    const d = new Set(t);
    return d.add(n), Array.from(d).sort((p, f) => p - f);
  }, [t, n]);
  return /* @__PURE__ */ S.jsxs("div", { className: "table-pagination", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "pagination-controls", children: [
      /* @__PURE__ */ S.jsx(
        "button",
        {
          className: "pagination-btn pagination-arrow",
          disabled: e === 1,
          onClick: () => i(1, n),
          title: "Primeira página",
          children: "««"
        }
      ),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          className: "pagination-btn pagination-arrow",
          disabled: e === 1,
          onClick: () => i(e - 1, n),
          title: "Página anterior",
          children: "«"
        }
      ),
      a.map(
        (d, p) => d === "ellipsis" ? /* @__PURE__ */ S.jsx(
          "span",
          {
            className: "pagination-btn ellipsis",
            children: "..."
          },
          `e-${p}`
        ) : /* @__PURE__ */ S.jsx(
          "button",
          {
            className: `pagination-btn ${d === e ? "active" : ""}`,
            onClick: () => i(d, n),
            children: d
          },
          d
        )
      ),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          className: "pagination-btn pagination-arrow",
          disabled: e === o,
          onClick: () => i(e + 1, n),
          title: "Próxima página",
          children: "»"
        }
      ),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          className: "pagination-btn pagination-arrow",
          disabled: e === o,
          onClick: () => i(o, n),
          title: "Última página",
          children: "»»"
        }
      )
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "pagination-info", children: [
      /* @__PURE__ */ S.jsxs("span", { children: [
        "Exibindo de ",
        s,
        " a ",
        l,
        " de ",
        r,
        " registros"
      ] }),
      /* @__PURE__ */ S.jsx("span", { className: "pagination-separator", children: "•" }),
      /* @__PURE__ */ S.jsxs("div", { className: "pagination-select", children: [
        /* @__PURE__ */ S.jsx("label", { children: "Itens por página:" }),
        /* @__PURE__ */ S.jsx(
          "select",
          {
            value: n,
            onChange: (d) => i(1, Number(d.target.value)),
            children: u.map((d) => /* @__PURE__ */ S.jsx("option", { value: d, children: d }, d))
          }
        )
      ] })
    ] })
  ] });
}
function Oe(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var In = typeof global == "object" && global && global.Object === Object && global, Vn = typeof self == "object" && self && self.Object === Object && self, wt = In || Vn || Function("return this")(), Te = function() {
  return wt.Date.now();
}, kn = /\s/;
function Nn(e) {
  for (var r = e.length; r-- && kn.test(e.charAt(r)); )
    ;
  return r;
}
var zn = /^\s+/;
function Dn(e) {
  return e && e.slice(0, Nn(e) + 1).replace(zn, "");
}
var $e = wt.Symbol, Ct = Object.prototype, Ln = Ct.hasOwnProperty, Tn = Ct.toString, Ce = $e ? $e.toStringTag : void 0;
function jn(e) {
  var r = Ln.call(e, Ce), n = e[Ce];
  try {
    e[Ce] = void 0;
    var t = !0;
  } catch {
  }
  var i = Tn.call(e);
  return t && (r ? e[Ce] = n : delete e[Ce]), i;
}
var Hn = Object.prototype, Gn = Hn.toString;
function Wn(e) {
  return Gn.call(e);
}
var Bn = "[object Null]", qn = "[object Undefined]", ot = $e ? $e.toStringTag : void 0;
function Yn(e) {
  return e == null ? e === void 0 ? qn : Bn : ot && ot in Object(e) ? jn(e) : Wn(e);
}
function Xn(e) {
  return e != null && typeof e == "object";
}
var Un = "[object Symbol]";
function Kn(e) {
  return typeof e == "symbol" || Xn(e) && Yn(e) == Un;
}
var st = NaN, Jn = /^[-+]0x[0-9a-f]+$/i, Qn = /^0b[01]+$/i, Zn = /^0o[0-7]+$/i, er = parseInt;
function lt(e) {
  if (typeof e == "number")
    return e;
  if (Kn(e))
    return st;
  if (Oe(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Oe(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Dn(e);
  var n = Qn.test(e);
  return n || Zn.test(e) ? er(e.slice(2), n ? 2 : 8) : Jn.test(e) ? st : +e;
}
var tr = "Expected a function", nr = Math.max, rr = Math.min;
function Fe(e, r, n) {
  var t, i, o, s, l, a, u = 0, d = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(tr);
  r = lt(r) || 0, Oe(n) && (d = !!n.leading, p = "maxWait" in n, o = p ? nr(lt(n.maxWait) || 0, r) : o, f = "trailing" in n ? !!n.trailing : f);
  function c(b) {
    var P = t, k = i;
    return t = i = void 0, u = b, s = e.apply(k, P), s;
  }
  function h(b) {
    return u = b, l = setTimeout(C, r), d ? c(b) : s;
  }
  function m(b) {
    var P = b - a, k = b - u, j = r - P;
    return p ? rr(j, o - k) : j;
  }
  function w(b) {
    var P = b - a, k = b - u;
    return a === void 0 || P >= r || P < 0 || p && k >= o;
  }
  function C() {
    var b = Te();
    if (w(b))
      return F(b);
    l = setTimeout(C, m(b));
  }
  function F(b) {
    return l = void 0, f && t ? c(b) : (t = i = void 0, s);
  }
  function E() {
    l !== void 0 && clearTimeout(l), u = 0, t = a = i = l = void 0;
  }
  function A() {
    return l === void 0 ? s : F(Te());
  }
  function V() {
    var b = Te(), P = w(b);
    if (t = arguments, i = this, a = b, P) {
      if (l === void 0)
        return h(a);
      if (p)
        return clearTimeout(l), l = setTimeout(C, r), c(a);
    }
    return l === void 0 && (l = setTimeout(C, r)), s;
  }
  return V.cancel = E, V.flush = A, V;
}
var ir = "Expected a function";
function or(e, r, n) {
  var t = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(ir);
  return Oe(n) && (t = "leading" in n ? !!n.leading : t, i = "trailing" in n ? !!n.trailing : i), Fe(e, r, {
    leading: t,
    maxWait: r,
    trailing: i
  });
}
var pe = function() {
  return pe = Object.assign || function(r) {
    for (var n, t = 1, i = arguments.length; t < i; t++) {
      n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
    }
    return r;
  }, pe.apply(this, arguments);
};
function Rt(e) {
  return !e || !e.ownerDocument || !e.ownerDocument.defaultView ? window : e.ownerDocument.defaultView;
}
function xt(e) {
  return !e || !e.ownerDocument ? document : e.ownerDocument;
}
var yt = function(e) {
  var r = {}, n = Array.prototype.reduce.call(e, function(t, i) {
    var o = i.name.match(/data-simplebar-(.+)/);
    if (o) {
      var s = o[1].replace(/\W+(.)/g, function(l, a) {
        return a.toUpperCase();
      });
      switch (i.value) {
        case "true":
          t[s] = !0;
          break;
        case "false":
          t[s] = !1;
          break;
        case void 0:
          t[s] = !0;
          break;
        default:
          t[s] = i.value;
      }
    }
    return t;
  }, r);
  return n;
};
function _t(e, r) {
  var n;
  e && (n = e.classList).add.apply(n, r.split(" "));
}
function Et(e, r) {
  e && r.split(" ").forEach(function(n) {
    e.classList.remove(n);
  });
}
function bt(e) {
  return ".".concat(e.split(" ").join("."));
}
var Qe = !!(typeof window < "u" && window.document && window.document.createElement), sr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  addClasses: _t,
  canUseDOM: Qe,
  classNamesToQuery: bt,
  getElementDocument: xt,
  getElementWindow: Rt,
  getOptions: yt,
  removeClasses: Et
}), fe = null, at = null;
Qe && window.addEventListener("resize", function() {
  at !== window.devicePixelRatio && (at = window.devicePixelRatio, fe = null);
});
function ut() {
  if (fe === null) {
    if (typeof document > "u")
      return fe = 0, fe;
    var e = document.body, r = document.createElement("div");
    r.classList.add("simplebar-hide-scrollbar"), e.appendChild(r);
    var n = r.getBoundingClientRect().right;
    e.removeChild(r), fe = n;
  }
  return fe;
}
var le = Rt, je = xt, lr = yt, ae = _t, ue = Et, Y = bt, Re = (
  /** @class */
  (function() {
    function e(r, n) {
      n === void 0 && (n = {});
      var t = this;
      if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.isDragging = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function() {
      }, this.onWindowResize = function() {
      }, this.onStopScrolling = function() {
      }, this.onMouseEntered = function() {
      }, this.onScroll = function() {
        var i = le(t.el);
        t.scrollXTicking || (i.requestAnimationFrame(t.scrollX), t.scrollXTicking = !0), t.scrollYTicking || (i.requestAnimationFrame(t.scrollY), t.scrollYTicking = !0), t.isScrolling || (t.isScrolling = !0, ae(t.el, t.classNames.scrolling)), t.showScrollbar("x"), t.showScrollbar("y"), t.onStopScrolling();
      }, this.scrollX = function() {
        t.axis.x.isOverflowing && t.positionScrollbar("x"), t.scrollXTicking = !1;
      }, this.scrollY = function() {
        t.axis.y.isOverflowing && t.positionScrollbar("y"), t.scrollYTicking = !1;
      }, this._onStopScrolling = function() {
        ue(t.el, t.classNames.scrolling), t.options.autoHide && (t.hideScrollbar("x"), t.hideScrollbar("y")), t.isScrolling = !1;
      }, this.onMouseEnter = function() {
        t.isMouseEntering || (ae(t.el, t.classNames.mouseEntered), t.showScrollbar("x"), t.showScrollbar("y"), t.isMouseEntering = !0), t.onMouseEntered();
      }, this._onMouseEntered = function() {
        ue(t.el, t.classNames.mouseEntered), t.options.autoHide && (t.hideScrollbar("x"), t.hideScrollbar("y")), t.isMouseEntering = !1;
      }, this._onMouseMove = function(i) {
        t.mouseX = i.clientX, t.mouseY = i.clientY, (t.axis.x.isOverflowing || t.axis.x.forceVisible) && t.onMouseMoveForAxis("x"), (t.axis.y.isOverflowing || t.axis.y.forceVisible) && t.onMouseMoveForAxis("y");
      }, this.onMouseLeave = function() {
        t.onMouseMove.cancel(), (t.axis.x.isOverflowing || t.axis.x.forceVisible) && t.onMouseLeaveForAxis("x"), (t.axis.y.isOverflowing || t.axis.y.forceVisible) && t.onMouseLeaveForAxis("y"), t.mouseX = -1, t.mouseY = -1;
      }, this._onWindowResize = function() {
        t.scrollbarWidth = t.getScrollbarWidth(), t.hideNativeScrollbar();
      }, this.onPointerEvent = function(i) {
        if (!(!t.axis.x.track.el || !t.axis.y.track.el || !t.axis.x.scrollbar.el || !t.axis.y.scrollbar.el)) {
          var o, s;
          t.axis.x.track.rect = t.axis.x.track.el.getBoundingClientRect(), t.axis.y.track.rect = t.axis.y.track.el.getBoundingClientRect(), (t.axis.x.isOverflowing || t.axis.x.forceVisible) && (o = t.isWithinBounds(t.axis.x.track.rect)), (t.axis.y.isOverflowing || t.axis.y.forceVisible) && (s = t.isWithinBounds(t.axis.y.track.rect)), (o || s) && (i.stopPropagation(), i.type === "pointerdown" && i.pointerType !== "touch" && (o && (t.axis.x.scrollbar.rect = t.axis.x.scrollbar.el.getBoundingClientRect(), t.isWithinBounds(t.axis.x.scrollbar.rect) ? t.onDragStart(i, "x") : t.onTrackClick(i, "x")), s && (t.axis.y.scrollbar.rect = t.axis.y.scrollbar.el.getBoundingClientRect(), t.isWithinBounds(t.axis.y.scrollbar.rect) ? t.onDragStart(i, "y") : t.onTrackClick(i, "y"))));
        }
      }, this.drag = function(i) {
        var o, s, l, a, u, d, p, f, c, h, m;
        if (!(!t.draggedAxis || !t.contentWrapperEl)) {
          var w, C = t.axis[t.draggedAxis].track, F = (s = (o = C.rect) === null || o === void 0 ? void 0 : o[t.axis[t.draggedAxis].sizeAttr]) !== null && s !== void 0 ? s : 0, E = t.axis[t.draggedAxis].scrollbar, A = (a = (l = t.contentWrapperEl) === null || l === void 0 ? void 0 : l[t.axis[t.draggedAxis].scrollSizeAttr]) !== null && a !== void 0 ? a : 0, V = parseInt((d = (u = t.elStyles) === null || u === void 0 ? void 0 : u[t.axis[t.draggedAxis].sizeAttr]) !== null && d !== void 0 ? d : "0px", 10);
          i.preventDefault(), i.stopPropagation(), t.draggedAxis === "y" ? w = i.pageY : w = i.pageX;
          var b = w - ((f = (p = C.rect) === null || p === void 0 ? void 0 : p[t.axis[t.draggedAxis].offsetAttr]) !== null && f !== void 0 ? f : 0) - t.axis[t.draggedAxis].dragOffset;
          b = t.draggedAxis === "x" && t.isRtl ? ((h = (c = C.rect) === null || c === void 0 ? void 0 : c[t.axis[t.draggedAxis].sizeAttr]) !== null && h !== void 0 ? h : 0) - E.size - b : b;
          var P = b / (F - E.size), k = P * (A - V);
          t.draggedAxis === "x" && t.isRtl && (k = !((m = e.getRtlHelpers()) === null || m === void 0) && m.isScrollingToNegative ? -k : k), t.contentWrapperEl[t.axis[t.draggedAxis].scrollOffsetAttr] = k;
        }
      }, this.onEndDrag = function(i) {
        t.isDragging = !1;
        var o = je(t.el), s = le(t.el);
        i.preventDefault(), i.stopPropagation(), ue(t.el, t.classNames.dragging), t.onStopScrolling(), o.removeEventListener("mousemove", t.drag, !0), o.removeEventListener("mouseup", t.onEndDrag, !0), t.removePreventClickId = s.setTimeout(function() {
          o.removeEventListener("click", t.preventClick, !0), o.removeEventListener("dblclick", t.preventClick, !0), t.removePreventClickId = null;
        });
      }, this.preventClick = function(i) {
        i.preventDefault(), i.stopPropagation();
      }, this.el = r, this.options = pe(pe({}, e.defaultOptions), n), this.classNames = pe(pe({}, e.defaultOptions.classNames), n.classNames), this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: !0,
          forceVisible: !1,
          track: { size: null, el: null, rect: null, isVisible: !1 },
          scrollbar: { size: null, el: null, rect: null, isVisible: !1 }
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: !0,
          forceVisible: !1,
          track: { size: null, el: null, rect: null, isVisible: !1 },
          scrollbar: { size: null, el: null, rect: null, isVisible: !1 }
        }
      }, typeof this.el != "object" || !this.el.nodeName)
        throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
      this.onMouseMove = or(this._onMouseMove, 64), this.onWindowResize = Fe(this._onWindowResize, 64, { leading: !0 }), this.onStopScrolling = Fe(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = Fe(this._onMouseEntered, this.stopScrollDelay), this.init();
    }
    return e.getRtlHelpers = function() {
      if (e.rtlHelpers)
        return e.rtlHelpers;
      var r = document.createElement("div");
      r.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
      var n = r.firstElementChild, t = n?.firstElementChild;
      if (!t)
        return null;
      document.body.appendChild(n), n.scrollLeft = 0;
      var i = e.getOffset(n), o = e.getOffset(t);
      n.scrollLeft = -999;
      var s = e.getOffset(t);
      return document.body.removeChild(n), e.rtlHelpers = {
        // determines if the scrolling is responding with negative values
        isScrollOriginAtZero: i.left !== o.left,
        // determines if the origin scrollbar position is inverted or not (positioned on left or right)
        isScrollingToNegative: o.left !== s.left
      }, e.rtlHelpers;
    }, e.prototype.getScrollbarWidth = function() {
      try {
        return this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : ut();
      } catch {
        return ut();
      }
    }, e.getOffset = function(r) {
      var n = r.getBoundingClientRect(), t = je(r), i = le(r);
      return {
        top: n.top + (i.pageYOffset || t.documentElement.scrollTop),
        left: n.left + (i.pageXOffset || t.documentElement.scrollLeft)
      };
    }, e.prototype.init = function() {
      Qe && (this.initDOM(), this.rtlHelpers = e.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
    }, e.prototype.initDOM = function() {
      var r, n;
      this.wrapperEl = this.el.querySelector(Y(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(Y(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(Y(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(Y(this.classNames.offset)), this.maskEl = this.el.querySelector(Y(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, Y(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(Y(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(Y(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(Y(this.classNames.track)).concat(Y(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(Y(this.classNames.track)).concat(Y(this.classNames.vertical))), this.axis.x.scrollbar.el = ((r = this.axis.x.track.el) === null || r === void 0 ? void 0 : r.querySelector(Y(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = ((n = this.axis.y.track.el) === null || n === void 0 ? void 0 : n.querySelector(Y(this.classNames.scrollbar))) || null, this.options.autoHide || (ae(this.axis.x.scrollbar.el, this.classNames.visible), ae(this.axis.y.scrollbar.el, this.classNames.visible));
    }, e.prototype.initListeners = function() {
      var r = this, n, t = le(this.el);
      if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, !0), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), (n = this.contentWrapperEl) === null || n === void 0 || n.addEventListener("scroll", this.onScroll), t.addEventListener("resize", this.onWindowResize), !!this.contentEl) {
        if (window.ResizeObserver) {
          var i = !1, o = t.ResizeObserver || ResizeObserver;
          this.resizeObserver = new o(function() {
            i && t.requestAnimationFrame(function() {
              r.recalculate();
            });
          }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), t.requestAnimationFrame(function() {
            i = !0;
          });
        }
        this.mutationObserver = new t.MutationObserver(function() {
          t.requestAnimationFrame(function() {
            r.recalculate();
          });
        }), this.mutationObserver.observe(this.contentEl, {
          childList: !0,
          subtree: !0,
          characterData: !0
        });
      }
    }, e.prototype.recalculate = function() {
      if (!(!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)) {
        var r = le(this.el);
        this.elStyles = r.getComputedStyle(this.el), this.isRtl = this.elStyles.direction === "rtl";
        var n = this.contentEl.offsetWidth, t = this.heightAutoObserverEl.offsetHeight <= 1, i = this.heightAutoObserverEl.offsetWidth <= 1 || n > 0, o = this.contentWrapperEl.offsetWidth, s = this.elStyles.overflowX, l = this.elStyles.overflowY;
        this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
        var a = this.contentEl.scrollHeight, u = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = t ? "auto" : "100%", this.placeholderEl.style.width = i ? "".concat(n || u, "px") : "auto", this.placeholderEl.style.height = "".concat(a, "px");
        var d = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing = n !== 0 && u > n, this.axis.y.isOverflowing = a > d, this.axis.x.isOverflowing = s === "hidden" ? !1 : this.axis.x.isOverflowing, this.axis.y.isOverflowing = l === "hidden" ? !1 : this.axis.y.isOverflowing, this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === !0, this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === !0, this.hideNativeScrollbar();
        var p = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        this.axis.x.isOverflowing = this.axis.x.isOverflowing && u > o - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > d - p, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
      }
    }, e.prototype.getScrollbarSize = function(r) {
      var n, t;
      if (r === void 0 && (r = "y"), !this.axis[r].isOverflowing || !this.contentEl)
        return 0;
      var i = this.contentEl[this.axis[r].scrollSizeAttr], o = (t = (n = this.axis[r].track.el) === null || n === void 0 ? void 0 : n[this.axis[r].offsetSizeAttr]) !== null && t !== void 0 ? t : 0, s = o / i, l;
      return l = Math.max(~~(s * o), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (l = Math.min(l, this.options.scrollbarMaxSize)), l;
    }, e.prototype.positionScrollbar = function(r) {
      var n, t, i;
      r === void 0 && (r = "y");
      var o = this.axis[r].scrollbar;
      if (!(!this.axis[r].isOverflowing || !this.contentWrapperEl || !o.el || !this.elStyles)) {
        var s = this.contentWrapperEl[this.axis[r].scrollSizeAttr], l = ((n = this.axis[r].track.el) === null || n === void 0 ? void 0 : n[this.axis[r].offsetSizeAttr]) || 0, a = parseInt(this.elStyles[this.axis[r].sizeAttr], 10), u = this.contentWrapperEl[this.axis[r].scrollOffsetAttr];
        u = r === "x" && this.isRtl && (!((t = e.getRtlHelpers()) === null || t === void 0) && t.isScrollOriginAtZero) ? -u : u, r === "x" && this.isRtl && (u = !((i = e.getRtlHelpers()) === null || i === void 0) && i.isScrollingToNegative ? u : -u);
        var d = u / (s - a), p = ~~((l - o.size) * d);
        p = r === "x" && this.isRtl ? -p + (l - o.size) : p, o.el.style.transform = r === "x" ? "translate3d(".concat(p, "px, 0, 0)") : "translate3d(0, ".concat(p, "px, 0)");
      }
    }, e.prototype.toggleTrackVisibility = function(r) {
      r === void 0 && (r = "y");
      var n = this.axis[r].track.el, t = this.axis[r].scrollbar.el;
      !n || !t || !this.contentWrapperEl || (this.axis[r].isOverflowing || this.axis[r].forceVisible ? (n.style.visibility = "visible", this.contentWrapperEl.style[this.axis[r].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(r))) : (n.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[r].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(r))), this.axis[r].isOverflowing ? t.style.display = "block" : t.style.display = "none");
    }, e.prototype.showScrollbar = function(r) {
      r === void 0 && (r = "y"), this.axis[r].isOverflowing && !this.axis[r].scrollbar.isVisible && (ae(this.axis[r].scrollbar.el, this.classNames.visible), this.axis[r].scrollbar.isVisible = !0);
    }, e.prototype.hideScrollbar = function(r) {
      r === void 0 && (r = "y"), !this.isDragging && this.axis[r].isOverflowing && this.axis[r].scrollbar.isVisible && (ue(this.axis[r].scrollbar.el, this.classNames.visible), this.axis[r].scrollbar.isVisible = !1);
    }, e.prototype.hideNativeScrollbar = function() {
      this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px");
    }, e.prototype.onMouseMoveForAxis = function(r) {
      r === void 0 && (r = "y");
      var n = this.axis[r];
      !n.track.el || !n.scrollbar.el || (n.track.rect = n.track.el.getBoundingClientRect(), n.scrollbar.rect = n.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(n.track.rect) ? (this.showScrollbar(r), ae(n.track.el, this.classNames.hover), this.isWithinBounds(n.scrollbar.rect) ? ae(n.scrollbar.el, this.classNames.hover) : ue(n.scrollbar.el, this.classNames.hover)) : (ue(n.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(r)));
    }, e.prototype.onMouseLeaveForAxis = function(r) {
      r === void 0 && (r = "y"), ue(this.axis[r].track.el, this.classNames.hover), ue(this.axis[r].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(r);
    }, e.prototype.onDragStart = function(r, n) {
      var t;
      n === void 0 && (n = "y"), this.isDragging = !0;
      var i = je(this.el), o = le(this.el), s = this.axis[n].scrollbar, l = n === "y" ? r.pageY : r.pageX;
      this.axis[n].dragOffset = l - (((t = s.rect) === null || t === void 0 ? void 0 : t[this.axis[n].offsetAttr]) || 0), this.draggedAxis = n, ae(this.el, this.classNames.dragging), i.addEventListener("mousemove", this.drag, !0), i.addEventListener("mouseup", this.onEndDrag, !0), this.removePreventClickId === null ? (i.addEventListener("click", this.preventClick, !0), i.addEventListener("dblclick", this.preventClick, !0)) : (o.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
    }, e.prototype.onTrackClick = function(r, n) {
      var t = this, i, o, s, l;
      n === void 0 && (n = "y");
      var a = this.axis[n];
      if (!(!this.options.clickOnTrack || !a.scrollbar.el || !this.contentWrapperEl)) {
        r.preventDefault();
        var u = le(this.el);
        this.axis[n].scrollbar.rect = a.scrollbar.el.getBoundingClientRect();
        var d = this.axis[n].scrollbar, p = (o = (i = d.rect) === null || i === void 0 ? void 0 : i[this.axis[n].offsetAttr]) !== null && o !== void 0 ? o : 0, f = parseInt((l = (s = this.elStyles) === null || s === void 0 ? void 0 : s[this.axis[n].sizeAttr]) !== null && l !== void 0 ? l : "0px", 10), c = this.contentWrapperEl[this.axis[n].scrollOffsetAttr], h = n === "y" ? this.mouseY - p : this.mouseX - p, m = h < 0 ? -1 : 1, w = m === -1 ? c - f : c + f, C = 40, F = function() {
          t.contentWrapperEl && (m === -1 ? c > w && (c -= C, t.contentWrapperEl[t.axis[n].scrollOffsetAttr] = c, u.requestAnimationFrame(F)) : c < w && (c += C, t.contentWrapperEl[t.axis[n].scrollOffsetAttr] = c, u.requestAnimationFrame(F)));
        };
        F();
      }
    }, e.prototype.getContentElement = function() {
      return this.contentEl;
    }, e.prototype.getScrollElement = function() {
      return this.contentWrapperEl;
    }, e.prototype.removeListeners = function() {
      var r = le(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, !0), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), r.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel();
    }, e.prototype.unMount = function() {
      this.removeListeners();
    }, e.prototype.isWithinBounds = function(r) {
      return this.mouseX >= r.left && this.mouseX <= r.left + r.width && this.mouseY >= r.top && this.mouseY <= r.top + r.height;
    }, e.prototype.findChild = function(r, n) {
      var t = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector;
      return Array.prototype.filter.call(r.children, function(i) {
        return t.call(i, n);
      })[0];
    }, e.rtlHelpers = null, e.defaultOptions = {
      forceVisible: !1,
      clickOnTrack: !0,
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      ariaLabel: "scrollable content",
      tabIndex: 0,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
        scrolling: "simplebar-scrolling",
        scrollable: "simplebar-scrollable",
        mouseEntered: "simplebar-mouse-entered"
      },
      scrollableNode: null,
      contentNode: null,
      autoHide: !0
    }, e.getOptions = lr, e.helpers = sr, e;
  })()
), U = function() {
  return U = Object.assign || function(r) {
    for (var n, t = 1, i = arguments.length; t < i; t++) {
      n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
    }
    return r;
  }, U.apply(this, arguments);
};
function ar(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
      r.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (n[t[i]] = e[t[i]]);
  return n;
}
var Ft = T.forwardRef(function(e, r) {
  var n = e.children, t = e.scrollableNodeProps, i = t === void 0 ? {} : t, o = ar(e, ["children", "scrollableNodeProps"]), s = T.useRef(), l = T.useRef(), a = T.useRef(), u = {}, d = {};
  Object.keys(o).forEach(function(c) {
    Object.prototype.hasOwnProperty.call(Re.defaultOptions, c) ? u[c] = o[c] : d[c] = o[c];
  });
  var p = U(U({}, Re.defaultOptions.classNames), u.classNames), f = U(U({}, i), { className: "".concat(p.contentWrapper).concat(i.className ? " ".concat(i.className) : ""), tabIndex: u.tabIndex || Re.defaultOptions.tabIndex, role: "region", "aria-label": u.ariaLabel || Re.defaultOptions.ariaLabel });
  return T.useEffect(function() {
    var c;
    return l.current = f.ref ? f.ref.current : l.current, s.current && (c = new Re(s.current, U(U(U({}, u), l.current && {
      scrollableNode: l.current
    }), a.current && {
      contentNode: a.current
    })), typeof r == "function" ? r(c) : r && (r.current = c)), function() {
      c?.unMount(), c = null, typeof r == "function" && r(null);
    };
  }, []), T.createElement(
    "div",
    U({ "data-simplebar": "init", ref: s }, d),
    T.createElement(
      "div",
      { className: p.wrapper },
      T.createElement(
        "div",
        { className: p.heightAutoObserverWrapperEl },
        T.createElement("div", { className: p.heightAutoObserverEl })
      ),
      T.createElement(
        "div",
        { className: p.mask },
        T.createElement("div", { className: p.offset }, typeof n == "function" ? n({
          scrollableNodeRef: l,
          scrollableNodeProps: U(U({}, f), { ref: l }),
          contentNodeRef: a,
          contentNodeProps: {
            className: p.contentEl,
            ref: a
          }
        }) : T.createElement(
          "div",
          U({}, f),
          T.createElement("div", { className: p.contentEl }, n)
        ))
      ),
      T.createElement("div", { className: p.placeholder })
    ),
    T.createElement(
      "div",
      { className: "".concat(p.track, " ").concat(p.horizontal) },
      T.createElement("div", { className: p.scrollbar })
    ),
    T.createElement(
      "div",
      { className: "".concat(p.track, " ").concat(p.vertical) },
      T.createElement("div", { className: p.scrollbar })
    )
  );
});
Ft.displayName = "SimpleBar";
function ur(e, r, n, t) {
  return Fn({
    data: r,
    columns: e,
    state: {
      columnOrder: n
    },
    onColumnOrderChange: t,
    getCoreRowModel: xn()
  });
}
function cr(e) {
  const [r, n] = Q(0);
  return Ye(() => {
    const t = e.current;
    if (!t) return;
    const i = new ResizeObserver((o) => {
      n(o[0].contentRect.width);
    });
    return i.observe(t), () => i.disconnect();
  }, [e]), r;
}
function dr() {
  const e = H(null), r = H([]), n = te((i) => {
    i && !r.current.includes(i) && r.current.push(i);
  }, []), t = te(() => {
    if (!e.current) return;
    const i = e.current.scrollLeft;
    r.current.forEach((o) => {
      o.scrollLeft !== i && (o.scrollLeft = i);
    });
  }, []);
  return {
    bodyRef: e,
    registerSyncElement: n,
    onBodyScroll: t
  };
}
function gr({
  onResize: e,
  onResizeEnd: r,
  minWidth: n = 40
}) {
  const t = H(0), i = H(0), o = H(null), s = te(
    (u) => {
      if (!o.current) return;
      const d = u.clientX - t.current, p = Math.max(n, i.current + d);
      e(o.current, p);
    },
    [n, e]
  ), l = te(() => {
    o.current = null, document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", l), r?.();
  }, [s, r]);
  return { startResize: te(
    (u, d) => {
      u.preventDefault(), u.stopPropagation(), o.current = d.id, t.current = u.clientX, i.current = Xe(d.columnDef.meta?.widthSize), document.addEventListener("mousemove", s), document.addEventListener("mouseup", l);
    },
    [s, l]
  ) };
}
function fr(e) {
  const [r, n] = Q(!1);
  return Ye(() => {
    const t = e.current;
    if (!t) return;
    const i = () => {
      const l = t.scrollWidth - t.clientWidth;
      n(l > 1);
    };
    i();
    const o = new ResizeObserver(i);
    o.observe(t);
    const s = t.firstElementChild;
    return s instanceof HTMLElement && o.observe(s), t.addEventListener("scroll", i, { passive: !0 }), () => {
      o.disconnect(), t.removeEventListener("scroll", i);
    };
  }, [e]), r;
}
function pr(e) {
  return ge(() => {
    const r = e.getAllLeafColumns(), n = /* @__PURE__ */ new Map();
    for (const s of r)
      n.set(s.id, Xe(s.columnDef.meta?.widthSize));
    const t = /* @__PURE__ */ new Map();
    let i = 0;
    for (const s of r)
      s.columnDef.meta?.sticky === "left" && (t.set(s.id, { side: "left", offset: i, zIndex: 20 }), i += n.get(s.id) ?? 0);
    let o = 0;
    for (let s = r.length - 1; s >= 0; s--) {
      const l = r[s];
      l.columnDef.meta?.sticky === "right" && (t.set(l.id, { side: "right", offset: o, zIndex: 20 }), o += n.get(l.id) ?? 0);
    }
    return t;
  }, [e]);
}
function hr({ setColumnOrder: e }) {
  const r = H(null), n = H(null), t = H(null), i = H(0), o = H(null), s = H(0), l = H([]), a = H(() => {
  }), u = H(() => {
  }), d = te(() => {
    const c = Array.from(
      document.querySelectorAll("th[data-col-id]")
    );
    l.current = c.filter((h) => h.dataset.reorderable !== "false").map((h) => {
      const m = h.dataset.colId, w = h.getBoundingClientRect();
      return {
        id: m,
        left: w.left,
        right: w.right,
        center: w.left + w.width / 2
      };
    }).sort((h, m) => h.left - m.left);
  }, []), p = te((c) => {
    const h = c.getBoundingClientRect(), m = c.cloneNode(!0);
    return m.classList.add("table-col-ghost"), m.style.position = "fixed", m.style.left = `${h.left}px`, m.style.top = `${h.top}px`, m.style.width = `${h.width}px`, m.style.height = `${h.height}px`, m.style.pointerEvents = "none", m.style.zIndex = "9999", m.style.willChange = "left", m.style.transition = "none", document.body.appendChild(m), m;
  }, []), f = te(
    (c, h) => {
      r.current = c;
      const m = document.querySelector(`th[data-col-id="${c}"]`);
      if (!m) return;
      t.current = m;
      const w = m.getBoundingClientRect();
      i.current = h.clientX - w.left;
      const C = p(m);
      n.current = C, m.classList.add("is-dragging-col"), m.style.opacity = "0.2", d(), s.current = h.clientX, document.body.style.cursor = "grabbing", document.addEventListener("pointermove", a.current), document.addEventListener("pointerup", u.current);
    },
    [p, d]
  );
  return a.current = (c) => {
    !r.current || !n.current || (s.current = c.clientX, !o.current && (o.current = requestAnimationFrame(() => {
      if (o.current = null, !r.current || !n.current) return;
      const h = n.current, m = s.current - i.current;
      h.style.left = `${m}px`;
      const w = h.offsetWidth, C = m + w / 2, F = l.current;
      if (!F.length) return;
      let E = null;
      for (const A of F)
        if (A.id !== r.current && C >= A.left && C <= A.right) {
          E = A.id;
          break;
        }
      !E || E === r.current || (e((A) => {
        const V = A.indexOf(r.current), b = A.indexOf(E);
        if (V === -1 || b === -1 || V === b) return A;
        const P = [...A];
        return P.splice(V, 1), P.splice(b, 0, r.current), P;
      }), requestAnimationFrame(() => {
        d();
      }));
    })));
  }, u.current = () => {
    o.current && (cancelAnimationFrame(o.current), o.current = null), n.current?.remove(), n.current = null, t.current && (t.current.classList.remove("is-dragging-col"), t.current.style.opacity = ""), t.current = null, r.current = null, i.current = 0, s.current = 0, l.current = [], document.body.style.cursor = "", document.removeEventListener("pointermove", a.current), document.removeEventListener("pointerup", u.current);
  }, {
    startDrag: f
  };
}
function mr(e) {
  return "accessorKey" in e && typeof e.accessorKey == "string";
}
function vr(e) {
  return e.map((r) => {
    if (r.id)
      return r;
    if (mr(r))
      return {
        ...r,
        id: r.accessorKey
      };
    throw new Error(
      "Columns sem id e sem accessorKey string. Defina um id explicitamente para esta coluna."
    );
  });
}
function Sr(e) {
  return {
    id: "__draggable__",
    header: "",
    accessorFn: () => null,
    meta: {
      widthSize: "36px",
      sticky: e ? "left" : void 0,
      resizable: !1,
      reorderable: !1,
      textAlign: "center"
    },
    cell: () => "☰"
  };
}
function wr(e, r) {
  return {
    id: "__selectable__",
    header: r || "",
    accessorFn: () => null,
    meta: {
      widthSize: r ? "120px" : "36px",
      sticky: e ? "left" : void 0,
      resizable: !1,
      reorderable: !1,
      textAlign: "center"
    },
    cell: () => null
  };
}
function Cr(e) {
  return {
    id: "__expandable__",
    header: "",
    accessorFn: () => null,
    meta: {
      widthSize: "36px",
      sticky: e ? "left" : void 0,
      resizable: !1,
      reorderable: !1,
      textAlign: "center"
    },
    cell: () => null
  };
}
function xr({
  header: e,
  data: r,
  footer: n,
  tableHeight: t = "400px",
  resizableCol: i = !1,
  reorderableCol: o = !1,
  sortableCol: s = !0,
  onSortChange: l,
  onDataChange: a,
  stripedRows: u = !1,
  defaultTextAlign: d = "left",
  editable: p = !1,
  draggable: f = !1,
  draggableSticky: c = !1,
  selectable: h,
  expandable: m,
  pagination: w,
  hoverableRow: C,
  borders: F
}) {
  const E = H(null), A = te(
    (z) => {
      E.current = z;
    },
    []
  ), [V, b] = Q(null), P = te(
    (z) => {
      b(z), l?.(z);
    },
    [l]
  ), {
    bodyRef: k,
    registerSyncElement: j,
    onBodyScroll: ne
  } = dr(), B = cr(k), J = fr(k), [ee, re] = Q({}), ie = ge(
    () => new Set(h?.initialSelectRow || []),
    [h?.initialSelectRow]
  ), [D, M] = Q(ie), [_, I] = Q(/* @__PURE__ */ new Set()), L = ge(
    () => vr(
      (() => {
        const z = [];
        return f && z.push(Sr(c)), h && z.push(wr(
          h.sticky,
          h.label
        )), m && z.push(Cr(m.sticky)), [...z, ...e];
      })()
    ),
    [
      e,
      f,
      c,
      h,
      m
    ]
  ), [g, v] = Q(
    () => L.map((z) => z.id)
  ), [O, $] = Q(r);
  Ze(() => {
    $(r);
  }, [r]), Ze(() => {
    a?.(O);
  }, [O, a]);
  const q = ge(
    () => L.map((z) => ({
      ...z,
      meta: {
        ...z.meta,
        widthSize: ee[z.id] ?? z.meta?.widthSize
      }
    })),
    [L, ee]
  ), G = ur(
    q,
    O,
    g,
    v
  ), R = pr(G), { startResize: X } = gr({
    onResize: (z, he) => {
      re((me) => ({
        ...me,
        [z]: `${he}px`
      }));
    },
    onResizeEnd: () => {
      requestAnimationFrame(() => {
        E.current?.recalculate();
      });
    }
  }), { startDrag: N } = hr({
    setColumnOrder: v
  });
  return Ye(() => {
    E.current?.recalculate();
  }, [J]), /* @__PURE__ */ S.jsxs("div", { className: `table-wrapper borders-${F}`, style: { height: t }, children: [
    /* @__PURE__ */ S.jsx(
      It,
      {
        table: G,
        scrollRef: j,
        tableWidth: B,
        stickyById: R,
        resizableCol: i,
        reorderableCol: o,
        sortableCol: s,
        sortState: V,
        setSortState: P,
        onResizeStart: X,
        onDragStart: N,
        defaultTextAlign: d,
        selectable: h,
        selectedRows: D,
        setSelectedRows: M,
        disableSelectRow: h?.disableSelectRow || [],
        data: r,
        expandable: m,
        expandedRows: _,
        setExpandedRows: I
      }
    ),
    /* @__PURE__ */ S.jsxs("div", { className: "internal-table", children: [
      /* @__PURE__ */ S.jsx(
        Vt,
        {
          table: G,
          scrollRef: j,
          tableWidth: B,
          stickyById: R,
          defaultTextAlign: d
        }
      ),
      /* @__PURE__ */ S.jsxs("div", { className: `table-body-area ${J ? "has-h-scroll" : "no-h-scroll"}`, children: [
        /* @__PURE__ */ S.jsx(
          Ft,
          {
            ref: A,
            className: "table-body-scroll",
            scrollableNodeProps: {
              ref: k,
              onScroll: ne
            },
            children: /* @__PURE__ */ S.jsx(
              On,
              {
                table: G,
                tableWidth: B,
                stickyById: R,
                defaultTextAlign: d,
                editable: p,
                draggable: f,
                setData: $,
                setInternalData: $,
                selectable: h,
                selectedRows: D,
                setSelectedRows: M,
                disableSelectRow: h?.disableSelectRow || [],
                expandable: m,
                expandedRows: _,
                setExpandedRows: I,
                stripedRows: u,
                hoverableRow: C
              }
            )
          }
        ),
        /* @__PURE__ */ S.jsx(
          $n,
          {
            table: G,
            scrollRef: j,
            tableWidth: B,
            stickyById: R,
            defaultTextAlign: d
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ S.jsx(Mn, { table: G, children: n }),
    w && /* @__PURE__ */ S.jsx(
      An,
      {
        currentPage: w.currentPage,
        totalItems: w.totalItems,
        pageSize: w.pageSize,
        pageSizeOptions: w.pageSizeOptions,
        onPageChange: w.onPageChange
      }
    )
  ] });
}
export {
  xr as Table
};
