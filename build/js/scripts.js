! function(a, b) {
    function c(a) {
        var b = a.length,
            c = _.type(a);
        return _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = lb[a] = {};
        return _.each(a.match(bb) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function e() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + Math.random()
    }

    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType)
            if (e = "data-" + c.replace(pb, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : ob.test(d) ? JSON.parse(d) : d
                } catch (f) {}
                mb.set(a, c, d)
            } else d = b;
        return d
    }

    function g() {
        return !0
    }

    function h() {
        return !1
    }

    function i() {
        try {
            return N.activeElement
        } catch (a) {}
    }

    function j(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function k(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (zb.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return X.call(b, a) >= 0 !== c
        })
    }

    function l(a, b) {
        return _.nodeName(a, "table") && _.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function n(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++) nb.set(a[d], "globalEval", !b || nb.get(b[d], "globalEval"))
    }

    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (nb.hasData(a) && (f = nb.access(a), g = nb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            mb.hasData(a) && (h = mb.access(a), i = _.extend({}, h), mb.set(b, i))
        }
    }

    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && _.nodeName(a, c) ? _.merge([a], d) : d
    }

    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Hb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function s(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Yb.length; e--;)
            if (b = Yb[e] + c, b in a) return b;
        return d
    }

    function t(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    }

    function u(b) {
        return a.getComputedStyle(b, null)
    }

    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = nb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = nb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && nb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function w(a, b, c) {
        var d = Rb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + Xb[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + Xb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + Xb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + Xb[f], !0, e), "padding" !== c && (g += _.css(a, "border" + Xb[f] + "Width", !0, e)));
        return g
    }

    function y(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = u(a),
            g = _.support.boxSizing && "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Nb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Sb.test(e)) return e;
            d = g && (_.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function z(a) {
        var b = N,
            c = Ub[a];
        return c || (c = A(a, b), "none" !== c && c || (Ob = (Ob || _("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Ob[0].contentWindow || Ob[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Ob.detach()), Ub[a] = c), c
    }

    function A(a, b) {
        var c = _(b.createElement(a)).appendTo(b.body),
            d = _.css(c[0], "display");
        return c.remove(), d
    }

    function B(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || $b.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) B(a + "[" + e + "]", b[e], c, d)
    }

    function C() {
        return setTimeout(function() {
            cc = b
        }), cc = _.now()
    }

    function D(a, b, c) {
        for (var d, e = (ic[b] || []).concat(ic["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function E(a, b, c) {
        var d, e, f = 0,
            g = hc.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = cc || C(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: cc || C(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (F(k, j.opts.specialEasing); g > f; f++)
            if (d = hc[f].call(j, a, k, j.opts)) return d;
        return _.map(k, D, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function F(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function G(a, c, d) {
        var e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && t(a),
            o = nb.get(a, "fxshow");
        d.queue || (i = _._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function() {
            i.unqueued || j()
        }), i.unqueued++, k.always(function() {
            k.always(function() {
                i.unqueued--, _.queue(a, "fx").length || i.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === _.css(a, "display") && "none" === _.css(a, "float") && (m.display = "inline-block")), d.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2]
        }));
        for (e in c)
            if (f = c[e], ec.exec(f)) {
                if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                    if ("show" !== f || !o || o[e] === b) continue;
                    n = !0
                }
                l[e] = o && o[e] || _.style(a, e)
            }
        if (!_.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = nb.access(a, "fxshow", {}), g && (o.hidden = !n), n ? _(a).show() : k.done(function() {
                _(a).hide()
            }), k.done(function() {
                var b;
                nb.remove(a, "fxshow");
                for (b in l) _.style(a, b, l[b])
            });
            for (e in l) h = D(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
        }
    }

    function H(a, b, c, d, e) {
        return new H.prototype.init(a, b, c, d, e)
    }

    function I(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Xb[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function J(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var K, L, M = typeof b,
        N = (a.location, a.document),
        O = N.documentElement,
        P = a.jQuery,
        Q = a.$,
        R = {},
        S = [],
        T = "2.0.3 -sizzle,-wrap,-ajax,-ajax/script,-ajax/jsonp,-ajax/xhr,-deprecated",
        U = S.concat,
        V = S.push,
        W = S.slice,
        X = S.indexOf,
        Y = R.toString,
        Z = R.hasOwnProperty,
        $ = T.trim,
        _ = function(a, b) {
            return new _.fn.init(a, b, K)
        },
        ab = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        bb = /\S+/g,
        cb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        db = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        eb = /^-ms-/,
        fb = /-([\da-z])/gi,
        gb = function(a, b) {
            return b.toUpperCase()
        },
        hb = function() {
            N.removeEventListener("DOMContentLoaded", hb, !1), a.removeEventListener("load", hb, !1), _.ready()
        };
    _.fn = _.prototype = {
        jquery: T,
        constructor: _,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : cb.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof _ ? c[0] : c, _.merge(this, _.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : N, !0)), db.test(e[1]) && _.isPlainObject(c))
                        for (e in c) _.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                return f = N.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = N, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        ready: function(a) {
            return _.ready.promise().done(a), this
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: [].sort,
        splice: [].splice
    }, _.fn.init.prototype = _.fn, _.extend = _.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || _.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
            if (null != (a = arguments[i]))
                for (c in a) d = h[c], e = a[c], h !== e && (k && e && (_.isPlainObject(e) || (f = _.isArray(e))) ? (f ? (f = !1, g = d && _.isArray(d) ? d : []) : g = d && _.isPlainObject(d) ? d : {}, h[c] = _.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }, _.extend({
        expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === _ && (a.$ = Q), b && a.jQuery === _ && (a.jQuery = P), _
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (L.resolveWith(N, [_]), _.fn.trigger && _(N).trigger("ready").off("ready")))
        },
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? R[Y.call(a)] || "object" : typeof a
        },
        isPlainObject: function(a) {
            if ("object" !== _.type(a) || a.nodeType || _.isWindow(a)) return !1;
            try {
                if (a.constructor && !Z.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || N;
            var d = db.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && _(e).remove(), _.merge([], d.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function(a) {
            var c, d;
            if (!a || "string" != typeof a) return null;
            try {
                d = new DOMParser, c = d.parseFromString(a, "text/xml")
            } catch (e) {
                c = b
            }
            return (!c || c.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), c
        },
        noop: function() {},
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = N.createElement("script"), b.text = a, N.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(eb, "ms-").replace(fb, gb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : $.call(a)
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : V.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : X.call(b, a, c)
        },
        merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d)
                for (; d > f; f++) a[e++] = c[f];
            else
                for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
            else
                for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
            return U.apply([], i)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), _.isFunction(a) ? (e = W.call(arguments, 2), f = function() {
                return a.apply(c || this, e.concat(W.call(arguments)))
            }, f.guid = a.guid = a.guid || _.guid++, f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == d;
            if ("object" === _.type(d)) {
                f = !0;
                for (i in d) _.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, _.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                return k.call(_(a), c)
            })), c))
                for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: Date.now,
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }), _.ready.promise = function(b) {
        return L || (L = _.Deferred(), "complete" === N.readyState ? setTimeout(_.ready) : (N.addEventListener("DOMContentLoaded", hb, !1), a.addEventListener("load", hb, !1))), L.promise(b)
    }, _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        R["[object " + b + "]"] = b.toLowerCase()
    }), K = _(N);
    var ib, jb = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector,
        kb = function(a, b) {
            if (a === b) return ib = !0, 0;
            var c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
            return c ? 1 & c ? a === N || _.contains(N, a) ? -1 : b === N || _.contains(N, b) ? 1 : 0 : 4 & c ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
        };
    _.extend({
        find: function(a, b, c, d) {
            var e, f, g = 0;
            if (c = c || [], b = b || N, !a || "string" != typeof a) return c;
            if (1 !== (f = b.nodeType) && 9 !== f) return [];
            if (d)
                for (; e = d[g++];) _.find.matchesSelector(e, a) && c.push(e);
            else _.merge(c, b.querySelectorAll(a));
            return c
        },
        unique: function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (ib = !1, a.sort(kb), ib) {
                for (; b = a[d++];) b === a[d] && (e = c.push(d));
                for (; e--;) a.splice(c[e], 1)
            }
            return a
        },
        text: function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) return a.textContent;
                if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += _.text(b);
            return c
        },
        contains: function(a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a,
                d = b && b.parentNode;
            return a === d || !(!d || 1 !== d.nodeType || !c.contains(d))
        },
        isXMLDoc: function(a) {
            return "HTML" !== (a.ownerDocument || a).documentElement.nodeName
        },
        expr: {
            attrHandle: {},
            match: {
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]/
            }
        }
    }), _.extend(_.find, {
        matches: function(a, b) {
            return _.find(a, null, null, b)
        },
        matchesSelector: function(a, b) {
            return jb.call(a, b)
        },
        attr: function(a, b) {
            return a.getAttribute(b)
        }
    });
    var lb = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? lb[a] || d(a) : _.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
                    if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
            },
            m = {
                add: function() {
                    if (j) {
                        var b = j.length;
                        ! function d(b) {
                            _.each(b, function(b, c) {
                                var e = _.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), f ? h = j.length : c && (g = b, l(c))
                    }
                    return this
                },
                remove: function() {
                    return j && _.each(arguments, function(a, b) {
                        for (var c;
                            (c = _.inArray(b, j, c)) > -1;) j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function() {
                    return j = [], h = 0, this
                },
                disable: function() {
                    return j = k = c = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return k = b, c || m.disable(), this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(a, b) {
                    return !j || e && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], f ? k.push(b) : l(b)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return m
    }, _.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = f[0],
                                    h = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = W.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? W.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), _.support = function(b) {
        var c = N.createElement("input"),
            d = N.createDocumentFragment(),
            e = N.createElement("div"),
            f = N.createElement("select"),
            g = f.appendChild(N.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = N.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, _(function() {
            var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                g = N.getElementsByTagName("body")[0];
            g && (c = N.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", _.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === e.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                width: "4px"
            }).width, d = e.appendChild(N.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
        }), b) : b
    }({});
    var mb, nb, ob = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        pb = /([A-Z])/g;
    e.uid = 1, e.accepts = function(a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
    }, e.prototype = {
        key: function(a) {
            if (!e.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = e.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c]
        },
        access: function(a, c, d) {
            var e;
            return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, _.camelCase(c))) : (this.set(a, c, d), d !== b ? d : c)
        },
        remove: function(a, c) {
            var d, e, f, g = this.key(a),
                h = this.cache[g];
            if (c === b) this.cache[g] = {};
            else {
                _.isArray(c) ? e = c.concat(c.map(_.camelCase)) : (f = _.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(bb) || [])), d = e.length;
                for (; d--;) delete h[e[d]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    }, mb = new e, nb = new e, _.extend({
        acceptData: e.accepts,
        hasData: function(a) {
            return mb.hasData(a) || nb.hasData(a)
        },
        data: function(a, b, c) {
            return mb.access(a, b, c)
        },
        removeData: function(a, b) {
            mb.remove(a, b)
        },
        _data: function(a, b, c) {
            return nb.access(a, b, c)
        },
        _removeData: function(a, b) {
            nb.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, c) {
            var d, e, g = this[0],
                h = 0,
                i = null;
            if (a === b) {
                if (this.length && (i = mb.get(g), 1 === g.nodeType && !nb.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = _.camelCase(e.slice(5)), f(g, e, i[e]));
                    nb.set(g, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof a ? this.each(function() {
                mb.set(this, a)
            }) : _.access(this, function(c) {
                var d, e = _.camelCase(a);
                if (g && c === b) {
                    if (d = mb.get(g, a), d !== b) return d;
                    if (d = mb.get(g, e), d !== b) return d;
                    if (d = f(g, e, b), d !== b) return d
                } else this.each(function() {
                    var d = mb.get(this, e);
                    mb.set(this, e, c), -1 !== a.indexOf("-") && d !== b && mb.set(this, a, c)
                })
            }, null, c, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                mb.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = nb.get(a, b), c && (!d || _.isArray(c) ? d = nb.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return nb.get(a, c) || nb.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    nb.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? _.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = _.queue(this, a, c);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = _.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = nb.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var qb, rb, sb = /[\t\r\n\f]/g,
        tb = /\r/g,
        ub = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        attr: function(a, b) {
            return _.access(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return _.access(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(bb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(sb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        c.className = _.trim(d)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(bb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(sb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? _.trim(d) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(bb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === M || "boolean" === c) && (this.className && nb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : nb.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(sb, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = _.isFunction(a), this.each(function(d) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, d, _(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : _.isArray(f) && (f = _.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), c = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return c = _.valHooks[f.type] || _.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(tb, "") : null == d ? "" : d)
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (_.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(_(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === M ? _.prop(a, c, d) : (1 === g && _.isXMLDoc(a) || (c = c.toLowerCase(), e = _.attrHooks[c] || (_.expr.match.bool.test(c) ? rb : qb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = _.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : void _.removeAttr(a, c))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(bb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!_.support.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !_.isXMLDoc(a), g && (c = _.propFix[c] || c, f = _.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || ub.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), rb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = _.expr.attrHandle[c] || _.find.attr;
        _.expr.attrHandle[c] = function(a, c, e) {
            var f = _.expr.attrHandle[c],
                g = e ? b : (_.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return _.expr.attrHandle[c] = f, g
        }
    }), _.support.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, _.support.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var vb = /^key/,
        wb = /^(?:mouse|contextmenu)|click/,
        xb = /^(?:focusinfocus|focusoutblur)$/,
        yb = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = nb.get(a);
            if (r) {
                for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = _.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                    return typeof _ === M || a && _.event.triggered === a.type ? b : _.event.dispatch.apply(h.elem, arguments)
                }, h.elem = a), c = (c || "").match(bb) || [""], k = c.length; k--;) i = yb.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = _.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = _.event.special[o] || {}, l = _.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && _.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), _.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = nb.hasData(a) && nb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(bb) || [""], j = b.length; j--;)
                    if (h = yb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, nb.remove(a, "events"))
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || N],
                o = Z.call(c, "type") ? c.type : c,
                p = Z.call(c, "namespace") ? c.namespace.split(".") : [];
            if (h = i = e = e || N, 3 !== e.nodeType && 8 !== e.nodeType && !xb.test(o + _.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[_.expando] ? c : new _.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : _.makeArray(d, [c]), m = _.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                if (!f && !m.noBubble && !_.isWindow(e)) {
                    for (j = m.delegateType || o, xb.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h), i = h;
                    i === (e.ownerDocument || N) && n.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0;
                    (h = n[g++]) && !c.isPropagationStopped();) c.type = g > 1 ? j : m.bindType || o, l = (nb.get(h, "events") || {})[c.type] && nb.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && _.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !_.acceptData(e) || k && _.isFunction(e[o]) && !_.isWindow(e) && (i = e[k], i && (e[k] = null), _.event.triggered = o, e[o](), _.event.triggered = b, i && (e[k] = i)), c.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var c, d, e, f, g, h = [],
                i = W.call(arguments),
                j = (nb.get(this, "events") || {})[a.type] || [],
                k = _.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = _.event.handlers.call(this, a, j), c = 0;
                    (f = h[c++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, d = 0;
                        (g = f.handlers[d++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((_.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))
                for (; j !== this; j = j.parentNode || this)
                    if (j.disabled !== !0 || "click" !== a.type) {
                        for (e = [], d = 0; i > d; d++) g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? _(f, this).index(j) >= 0 : _.find(f, this, null, [j]).length), e[f] && e.push(g);
                        e.length && h.push({
                            elem: j,
                            handlers: e
                        })
                    }
            return i < c.length && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || N, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = wb.test(e) ? this.mouseHooks : vb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = N), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== i() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === i() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g, this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), _.support.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0,
            d = function(a) {
                _.event.simulate(b, a.target, _.event.fix(a), !0)
            };
        _.event.special[b] = {
            setup: function() {
                0 === c++ && N.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && N.removeEventListener(a, d, !0)
            }
        }
    }), _.fn.extend({
        on: function(a, c, d, e, f) {
            var g, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = h;
            else if (!e) return this;
            return 1 === f && (g = e, e = function(a) {
                return _().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, _(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), this.each(function() {
                _.event.remove(this, a, d, c)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var zb = /^.[^:#\[\.,]*$/,
        Ab = /^(?:parents|prev(?:Until|All))/,
        Bb = _.expr.match.needsContext,
        Cb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (_.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) _.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? _.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(k(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(k(this, a || [], !1))
        },
        is: function(a) {
            return !!k(this, "string" == typeof a && Bb.test(a) ? _(a) : a || [], !1).length
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Bb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? X.call(_(a), this[0]) : X.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? _(a, b) : _.makeArray(a && a.nodeType ? [a] : a),
                d = _.merge(this.get(), c);
            return this.pushStack(_.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return j(a, "nextSibling")
        },
        prev: function(a) {
            return j(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (Cb[a] || _.unique(e), Ab.test(a) && e.reverse()), this.pushStack(e)
        }
    }), _.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, c, d) {
            for (var e = [], f = d !== b;
                (a = a[c]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (f && _(a).is(d)) break;
                    e.push(a)
                }
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Db = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Eb = /<([\w:]+)/,
        Fb = /<|&#?\w+;/,
        Gb = /<(?:script|style|link)/i,
        Hb = /^(?:checkbox|radio)$/i,
        Ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Jb = /^$|\/(?:java|ecma)script/i,
        Kb = /^true\/(.*)/,
        Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Mb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, Mb.th = Mb.td, _.fn.extend({
        text: function(a) {
            return _.access(this, function(a) {
                return a === b ? _.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(q(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(q(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return _.access(this, function(a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof a && !Gb.test(a) && !Mb[(Eb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Db, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (_.cleanData(q(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = _.map(this, function(a) {
                    return [a.nextSibling, a.parentNode]
                }),
                b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++],
                    e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), _(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, c) {
            a = U.apply([], a);
            var d, e, f, g, h, i, j = 0,
                k = this.length,
                l = this,
                o = k - 1,
                p = a[0],
                r = _.isFunction(p);
            if (r || !(1 >= k || "string" != typeof p || _.support.checkClone) && Ib.test(p)) return this.each(function(d) {
                var e = l.eq(d);
                r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c)
            });
            if (k && (d = _.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                for (f = _.map(q(d, "script"), m), g = f.length; k > j; j++) h = d, j !== o && (h = _.clone(h, !0, !0), g && _.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, _.map(f, n), j = 0; g > j; j++) h = f[j], Jb.test(h.type || "") && !nb.access(h, "globalEval") && _.contains(i, h) && (h.src ? _._evalUrl(h.src) : _.globalEval(h.textContent.replace(Lb, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), V.apply(d, c.get());
            return this.pushStack(d)
        }
    }), _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(_.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++) r(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) p(f[d], g[d]);
                else p(a, h);
            return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)
                if (e = a[k], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(n, e.nodeType ? [e] : e);
                    else if (Fb.test(e)) {
                for (f = f || m.appendChild(b.createElement("div")), g = (Eb.exec(e) || ["", ""])[1].toLowerCase(), h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Db, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
            } else n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))
                    for (j = 0; e = f[j++];) Jb.test(e.type || "") && c.push(e);
            return m
        },
        cleanData: function(a) {
            for (var c, d, f, g, h, i, j = _.event.special, k = 0;
                (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[nb.expando], h && (c = nb.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length)
                        for (i = 0;
                            (g = f[i]) !== b; i++) j[g] ? _.event.remove(d, g) : _.removeEvent(d, g, c.handle);
                    nb.cache[h] && delete nb.cache[h]
                }
                delete mb.cache[d[mb.expando]]
            }
        },
        _evalUrl: function(a) {
            return _.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    });
    var Nb, Ob, Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = /^margin/,
        Rb = new RegExp("^(" + ab + ")(.*)$", "i"),
        Sb = new RegExp("^(" + ab + ")(?!px)[a-z%]+$", "i"),
        Tb = new RegExp("^([+-])=(" + ab + ")", "i"),
        Ub = {
            BODY: "block"
        },
        Vb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Xb = ["Top", "Right", "Bottom", "Left"],
        Yb = ["Webkit", "O", "Moz", "ms"];
    _.fn.extend({
        css: function(a, c) {
            return _.access(this, function(a, c, d) {
                var e, f, g = {},
                    h = 0;
                if (_.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++) g[c[h]] = _.css(a, c[h], !1, e);
                    return g
                }
                return d !== b ? _.style(a, c, d) : _.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                t(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Nb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = _.camelCase(c),
                    j = a.style;
                return c = _.cssProps[i] || (_.cssProps[i] = s(j, i)), h = _.cssHooks[c] || _.cssHooks[i], d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Tb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(_.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || _.cssNumber[i] || (d += "px"), _.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0)
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = _.camelCase(c);
            return c = _.cssProps[i] || (_.cssProps[i] = s(a.style, i)), h = _.cssHooks[c] || _.cssHooks[i], h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Nb(a, c, e)), "normal" === f && c in Wb && (f = Wb[c]), "" === d || d ? (g = parseFloat(f), d === !0 || _.isNumeric(g) ? g || 0 : f) : f
        }
    }), Nb = function(a, c, d) {
        var e, f, g, h = d || u(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || _.contains(a.ownerDocument, a) || (i = _.style(a, c)), Sb.test(i) && Qb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }, _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(_.css(a, "display")) ? _.swap(a, Vb, function() {
                    return y(a, b, d)
                }) : y(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && u(a);
                return w(a, c, d ? x(a, b, d, _.support.boxSizing && "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _(function() {
        _.support.reliableMarginRight || (_.cssHooks.marginRight = {
            get: function(a, b) {
                return b ? _.swap(a, {
                    display: "inline-block"
                }, Nb, [a, "marginRight"]) : void 0
            }
        }), !_.support.pixelPosition && _.fn.position && _.each(["top", "left"], function(a, b) {
            _.cssHooks[b] = {
                get: function(a, c) {
                    return c ? (c = Nb(a, b), Sb.test(c) ? _(a).position()[b] + "px" : c) : void 0
                }
            }
        })
    }), _.expr && _.expr.filters && (_.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Xb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Qb.test(a) || (_.cssHooks[a + b].set = w)
    });
    var Zb = /%20/g,
        $b = /\[\]$/,
        _b = /\r?\n/g,
        ac = /^(?:submit|button|image|reset|file)$/i,
        bc = /^(?:input|select|textarea|keygen)/i;
    _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Hb.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(_b, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(_b, "\r\n")
                }
            }).get()
        }
    }), _.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) B(d, a[d], c, f);
        return e.join("&").replace(Zb, "+")
    }, _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc, dc, ec = /^(?:toggle|show|hide)$/,
        fc = new RegExp("^(?:([+-])=|)(" + ab + ")([a-z%]*)$", "i"),
        gc = /queueHooks$/,
        hc = [G],
        ic = {
            "*": [
                function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = fc.exec(b),
                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                        g = (_.cssNumber[a] || "px" !== f && +d) && fc.exec(_.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };
    _.Animation = _.extend(E, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ic[c] = ic[c] || [], ic[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? hc.unshift(a) : hc.push(a)
        }
    }), _.Tween = H, H.prototype = {
        constructor: H,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = H.propHooks[this.prop];
            return a && a.get ? a.get(this) : H.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = H.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
        }
    }), _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(t).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a),
                f = _.speed(b, c, d),
                g = function() {
                    var b = E(this, _.extend({}, a), f);
                    (e || nb.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = _.timers,
                    g = nb.get(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && gc.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && _.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = nb.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = _.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), _.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.timers = [], _.fx = H.prototype.init, _.fx.tick = function() {
        var a, c = _.timers,
            d = 0;
        for (cc = _.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || _.fx.stop(), cc = b
    }, _.fx.timer = function(a) {
        a() && _.timers.push(a) && _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
        dc || (dc = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
        clearInterval(dc), dc = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fx.step = {}, _.expr && _.expr.filters && (_.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    }), _.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            _.offset.setOffset(this, a, b)
        });
        var c, d, e = this[0],
            f = {
                top: 0,
                left: 0
            },
            g = e && e.ownerDocument;
        if (g) return c = g.documentElement, _.contains(c, e) ? (typeof e.getBoundingClientRect !== M && (f = e.getBoundingClientRect()), d = J(g), {
            top: f.top + d.pageYOffset - c.clientTop,
            left: f.left + d.pageXOffset - c.clientLeft
        }) : f
    }, _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || O; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || O
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, d) {
        var e = "pageYOffset" === d;
        _.fn[c] = function(f) {
            return _.access(this, function(c, f, g) {
                var h = J(c);
                return g === b ? h ? h[d] : c[f] : void(h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g)
            }, c, f, arguments.length, null)
        }
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        _.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            _.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return _.access(this, function(c, d, e) {
                    var f;
                    return _.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? _.css(c, d, h) : _.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), "object" == typeof module && module && "object" == typeof module.exports ? module.exports = _ : "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = _)
}(window),
function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";

    function b(c, d) {
        var e = function() {},
            f = this,
            g = {
                autoSelectFirst: !1,
                appendTo: "body",
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: "auto",
                minChars: 1,
                maxHeight: 300,
                deferRequestBy: 0,
                params: {},
                formatResult: b.formatResult,
                delimiter: null,
                zIndex: 9999,
                type: "GET",
                noCache: !1,
                onSearchStart: e,
                onSearchComplete: e,
                onSearchError: e,
                containerClass: "autocomplete-suggestions",
                tabDisabled: !1,
                dataType: "text",
                currentRequest: null,
                triggerSelectOnValidInput: !0,
                lookupFilter: function(a, b, c) {
                    return -1 !== a.value.toLowerCase().indexOf(c)
                },
                paramName: "query",
                transformResult: function(b) {
                    return "string" == typeof b ? a.parseJSON(b) : b
                }
            };
        f.element = c, f.el = a(c), f.suggestions = [], f.badQueries = [], f.selectedIndex = -1, f.currentValue = f.element.value, f.intervalId = 0, f.cachedResponse = {}, f.onChangeInterval = null, f.onChange = null, f.isLocal = !1, f.suggestionsContainer = null, f.options = a.extend({}, g, d), f.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        }, f.hint = null, f.hintValue = "", f.selection = null, f.initialize(), f.setOptions(d)
    }
    var c = function() {
            return {
                escapeRegExChars: function(a) {
                    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                createNode: function(a) {
                    var b = document.createElement("div");
                    return b.className = a, b.style.position = "absolute", b.style.display = "none", b
                }
            }
        }(),
        d = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };
    b.utils = c, a.Autocomplete = b, b.formatResult = function(a, b) {
        var d = "(" + c.escapeRegExChars(b) + ")";
        return a.value.replace(new RegExp(d, "gi"), "<strong>$1</strong>")
    }, b.prototype = {
        killerFn: null,
        initialize: function() {
            var c, d = this,
                e = "." + d.classes.suggestion,
                f = d.classes.selected,
                g = d.options;
            d.element.setAttribute("autocomplete", "off"), d.killerFn = function(b) {
                0 === a(b.target).closest("." + d.options.containerClass).length && (d.killSuggestions(), d.disableKillerFn())
            }, d.suggestionsContainer = b.utils.createNode(g.containerClass), c = a(d.suggestionsContainer), c.appendTo(g.appendTo), "auto" !== g.width && c.width(g.width), c.on("mouseover.autocomplete", e, function() {
                d.activate(a(this).data("index"))
            }), c.on("mouseout.autocomplete", function() {
                d.selectedIndex = -1, c.children("." + f).removeClass(f)
            }), c.on("click.autocomplete", e, function() {
                d.select(a(this).data("index"))
            }), d.fixPosition(), d.fixPositionCapture = function() {
                d.visible && d.fixPosition()
            }, a(window).on("resize.autocomplete", d.fixPositionCapture), d.el.on("keydown.autocomplete", function(a) {
                d.onKeyPress(a)
            }), d.el.on("keyup.autocomplete", function(a) {
                d.onKeyUp(a)
            }), d.el.on("blur.autocomplete", function() {
                d.onBlur()
            }), d.el.on("focus.autocomplete", function() {
                d.onFocus()
            }), d.el.on("change.autocomplete", function(a) {
                d.onKeyUp(a)
            })
        },
        onFocus: function() {
            var a = this;
            a.fixPosition(), a.options.minChars <= a.el.val().length && a.onValueChange()
        },
        onBlur: function() {
            this.enableKillerFn()
        },
        setOptions: function(b) {
            var c = this,
                d = c.options;
            a.extend(d, b), c.isLocal = a.isArray(d.lookup), c.isLocal && (d.lookup = c.verifySuggestionsFormat(d.lookup)), a(c.suggestionsContainer).css({
                "max-height": d.maxHeight + "px",
                width: d.width + "px",
                "z-index": d.zIndex
            })
        },
        clearCache: function() {
            this.cachedResponse = {}, this.badQueries = []
        },
        clear: function() {
            this.clearCache(), this.currentValue = "", this.suggestions = []
        },
        disable: function() {
            var a = this;
            a.disabled = !0, a.currentRequest && a.currentRequest.abort()
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var b, c, d = this;
            "body" === d.options.appendTo && (b = d.el.offset(), c = {
                top: b.top + d.el.outerHeight() + "px",
                left: b.left + "px"
            }, "auto" === d.options.width && (c.width = d.el.outerWidth() - 2 + "px"), a(d.suggestionsContainer).css(c))
        },
        enableKillerFn: function() {
            var b = this;
            a(document).on("click.autocomplete", b.killerFn)
        },
        disableKillerFn: function() {
            var b = this;
            a(document).off("click.autocomplete", b.killerFn)
        },
        killSuggestions: function() {
            var a = this;
            a.stopKillSuggestions(), a.intervalId = window.setInterval(function() {
                a.hide(), a.stopKillSuggestions()
            }, 50)
        },
        stopKillSuggestions: function() {
            window.clearInterval(this.intervalId)
        },
        isCursorAtEnd: function() {
            var a, b = this,
                c = b.el.val().length,
                d = b.element.selectionStart;
            return "number" == typeof d ? d === c : document.selection ? (a = document.selection.createRange(), a.moveStart("character", -c), c === a.text.length) : !0
        },
        onKeyPress: function(a) {
            var b = this;
            if (!b.disabled && !b.visible && a.which === d.DOWN && b.currentValue) return void b.suggest();
            if (!b.disabled && b.visible) {
                switch (a.which) {
                    case d.ESC:
                        b.el.val(b.currentValue), b.hide();
                        break;
                    case d.RIGHT:
                        if (b.hint && b.options.onHint && b.isCursorAtEnd()) {
                            b.selectHint();
                            break
                        }
                        return;
                    case d.TAB:
                        if (b.hint && b.options.onHint) return void b.selectHint();
                    case d.RETURN:
                        if (-1 === b.selectedIndex) return void b.hide();
                        if (b.select(b.selectedIndex), a.which === d.TAB && b.options.tabDisabled === !1) return;
                        break;
                    case d.UP:
                        b.moveUp();
                        break;
                    case d.DOWN:
                        b.moveDown();
                        break;
                    default:
                        return
                }
                a.stopImmediatePropagation(), a.preventDefault()
            }
        },
        onKeyUp: function(a) {
            var b = this;
            if (!b.disabled) {
                switch (a.which) {
                    case d.UP:
                    case d.DOWN:
                        return
                }
                clearInterval(b.onChangeInterval), b.currentValue !== b.el.val() && (b.findBestHint(), b.options.deferRequestBy > 0 ? b.onChangeInterval = setInterval(function() {
                    b.onValueChange()
                }, b.options.deferRequestBy) : b.onValueChange())
            }
        },
        onValueChange: function() {
            var b, c = this,
                d = c.options,
                e = c.el.val(),
                f = c.getQuery(e);
            return c.selection && (c.selection = null, (d.onInvalidateSelection || a.noop).call(c.element)), clearInterval(c.onChangeInterval), c.currentValue = e, c.selectedIndex = -1, d.triggerSelectOnValidInput && (b = c.findSuggestionIndex(f), -1 !== b) ? void c.select(b) : void(f.length < d.minChars ? c.hide() : c.getSuggestions(f))
        },
        findSuggestionIndex: function(b) {
            var c = this,
                d = -1,
                e = b.toLowerCase();
            return a.each(c.suggestions, function(a, b) {
                return b.value.toLowerCase() === e ? (d = a, !1) : void 0
            }), d
        },
        getQuery: function(b) {
            var c, d = this.options.delimiter;
            return d ? (c = b.split(d), a.trim(c[c.length - 1])) : b
        },
        getSuggestionsLocal: function(b) {
            var c, d = this,
                e = d.options,
                f = b.toLowerCase(),
                g = e.lookupFilter,
                h = parseInt(e.lookupLimit, 10);
            return c = {
                suggestions: a.grep(e.lookup, function(a) {
                    return g(a, b, f)
                })
            }, h && c.suggestions.length > h && (c.suggestions = c.suggestions.slice(0, h)), c
        },
        getSuggestions: function(b) {
            var c, d, e, f = this,
                g = f.options,
                h = g.serviceUrl;
            if (g.params[g.paramName] = b, d = g.ignoreParams ? null : g.params, f.isLocal ? c = f.getSuggestionsLocal(b) : (a.isFunction(h) && (h = h.call(f.element, b)), e = h + "?" + a.param(d || {}), c = f.cachedResponse[e]), c && a.isArray(c.suggestions)) f.suggestions = c.suggestions, f.suggest();
            else if (!f.isBadQuery(b)) {
                if (g.onSearchStart.call(f.element, g.params) === !1) return;
                f.currentRequest && f.currentRequest.abort(), f.currentRequest = a.ajax({
                    url: h,
                    data: d,
                    type: g.type,
                    dataType: g.dataType
                }).done(function(a) {
                    f.currentRequest = null, f.processResponse(a, b, e), g.onSearchComplete.call(f.element, b)
                }).fail(function(a, c, d) {
                    g.onSearchError.call(f.element, b, a, c, d)
                })
            }
        },
        isBadQuery: function(a) {
            for (var b = this.badQueries, c = b.length; c--;)
                if (0 === a.indexOf(b[c])) return !0;
            return !1
        },
        hide: function() {
            var b = this;
            b.visible = !1, b.selectedIndex = -1, a(b.suggestionsContainer).hide(), b.signalHint(null)
        },
        suggest: function() {
            if (0 === this.suggestions.length) return void this.hide();
            var b, c, d = this,
                e = d.options,
                f = e.formatResult,
                g = d.getQuery(d.currentValue),
                h = d.classes.suggestion,
                i = d.classes.selected,
                j = a(d.suggestionsContainer),
                k = e.beforeRender,
                l = "";
            return e.triggerSelectOnValidInput && (b = d.findSuggestionIndex(g), -1 !== b) ? void d.select(b) : (a.each(d.suggestions, function(a, b) {
                l += '<div class="' + h + '" data-index="' + a + '">' + f(b, g) + "</div>"
            }), "auto" === e.width && (c = d.el.outerWidth() - 2, j.width(c > 0 ? c : 300)), j.html(l), e.autoSelectFirst && (d.selectedIndex = 0, j.children().first().addClass(i)), a.isFunction(k) && k.call(d.element, j), j.show(), d.visible = !0, void d.findBestHint())
        },
        findBestHint: function() {
            var b = this,
                c = b.el.val().toLowerCase(),
                d = null;
            c && (a.each(b.suggestions, function(a, b) {
                var e = 0 === b.value.toLowerCase().indexOf(c);
                return e && (d = b), !e
            }), b.signalHint(d))
        },
        signalHint: function(b) {
            var c = "",
                d = this;
            b && (c = d.currentValue + b.value.substr(d.currentValue.length)), d.hintValue !== c && (d.hintValue = c, d.hint = b, (this.options.onHint || a.noop)(c))
        },
        verifySuggestionsFormat: function(b) {
            return b.length && "string" == typeof b[0] ? a.map(b, function(a) {
                return {
                    value: a,
                    data: null
                }
            }) : b
        },
        processResponse: function(a, b, c) {
            var d = this,
                e = d.options,
                f = e.transformResult(a, b);
            f.suggestions = d.verifySuggestionsFormat(f.suggestions), e.noCache || (d.cachedResponse[c] = f, 0 === f.suggestions.length && d.badQueries.push(c)), b === d.getQuery(d.currentValue) && (d.suggestions = f.suggestions, d.suggest())
        },
        activate: function(b) {
            var c, d = this,
                e = d.classes.selected,
                f = a(d.suggestionsContainer),
                g = f.children();
            return f.children("." + e).removeClass(e), d.selectedIndex = b, -1 !== d.selectedIndex && g.length > d.selectedIndex ? (c = g.get(d.selectedIndex), a(c).addClass(e), c) : null
        },
        selectHint: function() {
            var b = this,
                c = a.inArray(b.hint, b.suggestions);
            b.select(c)
        },
        select: function(a) {
            var b = this;
            b.hide(), b.onSelect(a)
        },
        moveUp: function() {
            var b = this;
            if (-1 !== b.selectedIndex) return 0 === b.selectedIndex ? (a(b.suggestionsContainer).children().first().removeClass(b.classes.selected), b.selectedIndex = -1, b.el.val(b.currentValue), void b.findBestHint()) : void b.adjustScroll(b.selectedIndex - 1)
        },
        moveDown: function() {
            var a = this;
            a.selectedIndex !== a.suggestions.length - 1 && a.adjustScroll(a.selectedIndex + 1)
        },
        adjustScroll: function(b) {
            var c, d, e, f = this,
                g = f.activate(b),
                h = 25;
            g && (c = g.offsetTop, d = a(f.suggestionsContainer).scrollTop(), e = d + f.options.maxHeight - h, d > c ? a(f.suggestionsContainer).scrollTop(c) : c > e && a(f.suggestionsContainer).scrollTop(c - f.options.maxHeight + h), f.el.val(f.getValue(f.suggestions[b].value)), f.signalHint(null))
        },
        onSelect: function(b) {
            var c = this,
                d = c.options.onSelect,
                e = c.suggestions[b];
            c.currentValue = c.getValue(e.value), c.el.val(c.currentValue), c.signalHint(null), c.suggestions = [], c.selection = e, a.isFunction(d) && d.call(c.element, e)
        },
        getValue: function(a) {
            var b, c, d = this,
                e = d.options.delimiter;
            return e ? (b = d.currentValue, c = b.split(e), 1 === c.length ? a : b.substr(0, b.length - c[c.length - 1].length) + a) : a
        },
        dispose: function() {
            var b = this;
            b.el.off(".autocomplete").removeData("autocomplete"), b.disableKillerFn(), a(window).off("resize.autocomplete", b.fixPositionCapture), a(b.suggestionsContainer).remove()
        }
    }, a.fn.autocomplete = function(c, d) {
        var e = "autocomplete";
        return 0 === arguments.length ? this.first().data(e) : this.each(function() {
            var f = a(this),
                g = f.data(e);
            "string" == typeof c ? g && "function" == typeof g[c] && g[c](d) : (g && g.dispose && g.dispose(), g = new b(this, c), f.data(e, g))
        })
    }
}), ! function() {
    function a(a, b) {
        try {
            for (var c in b) Object.defineProperty(a.prototype, c, {
                value: b[c],
                enumerable: !1
            })
        } catch (d) {
            a.prototype = b
        }
    }

    function b() {}

    function c(a) {
        return _c + a in this
    }

    function d(a) {
        return a = _c + a, a in this && delete this[a]
    }

    function e() {
        var a = [];
        return this.forEach(function(b) {
            a.push(b)
        }), a
    }

    function f() {
        var a = 0;
        for (var b in this) b.charCodeAt(0) === ad && ++a;
        return a
    }

    function g() {
        for (var a in this)
            if (a.charCodeAt(0) === ad) return !1;
        return !0
    }

    function h() {}

    function i(a) {
        return a
    }

    function j(a, b, c) {
        return function() {
            var d = c.apply(b, arguments);
            return d === b ? a : d
        }
    }

    function k() {}

    function l(a) {
        function c() {
            for (var b, c = d, e = -1, f = c.length; ++e < f;)(b = c[e].on) && b.apply(this, arguments);
            return a
        }
        var d = [],
            e = new b;
        return c.on = function(b, c) {
            var f, g = e.get(b);
            return arguments.length < 2 ? g && g.on : (g && (g.on = null, d = d.slice(0, f = d.indexOf(g)).concat(d.slice(f + 1)), e.remove(b)), c && d.push(e.set(b, {
                on: c
            })), a)
        }, c
    }

    function m(a) {
        return function(b, c, d) {
            return 2 === arguments.length && "function" == typeof c && (d = c, c = null), n(b, c, a, d)
        }
    }

    function n(a, b, c, d) {
        function e() {
            var a, b = i.status;
            if (!b && i.responseText || b >= 200 && 300 > b || 304 === b) {
                try {
                    a = c.call(f, i)
                } catch (d) {
                    return void g.error.call(f, d)
                }
                g.load.call(f, a)
            } else g.error.call(f, i)
        }
        var f = {},
            g = $c.dispatch("beforesend", "progress", "load", "error"),
            h = {},
            i = new XMLHttpRequest,
            j = null;
        return !fd.XDomainRequest || "withCredentials" in i || !/^(http(s)?:)?\/\//.test(a) || (i = new XDomainRequest), "onload" in i ? i.onload = i.onerror = e : i.onreadystatechange = function() {
            i.readyState > 3 && e()
        }, i.onprogress = function(a) {
            var b = $c.event;
            $c.event = a;
            try {
                g.progress.call(f, i)
            } finally {
                $c.event = b
            }
        }, f.header = function(a, b) {
            return a = (a + "").toLowerCase(), arguments.length < 2 ? h[a] : (null == b ? delete h[a] : h[a] = b + "", f)
        }, f.mimeType = function(a) {
            return arguments.length ? (b = null == a ? null : a + "", f) : b
        }, f.responseType = function(a) {
            return arguments.length ? (j = a, f) : j
        }, f.response = function(a) {
            return c = a, f
        }, ["get", "post"].forEach(function(a) {
            f[a] = function() {
                return f.send.apply(f, [a].concat(cd(arguments)))
            }
        }), f.send = function(c, d, e) {
            if (2 === arguments.length && "function" == typeof d && (e = d, d = null), i.open(c, a, !0), null == b || "accept" in h || (h.accept = b + ",*/*"), i.setRequestHeader)
                for (var k in h) i.setRequestHeader(k, h[k]);
            return null != b && i.overrideMimeType && i.overrideMimeType(b), null != j && (i.responseType = j), null != e && f.on("error", e).on("load", function(a) {
                e(null, a)
            }), g.beforesend.call(f, i), i.send(null == d ? null : d), f
        }, f.abort = function() {
            return i.abort(), f
        }, $c.rebind(f, g, "on"), null == d ? f : f.get(o(d))
    }

    function o(a) {
        return 1 === a.length ? function(b, c) {
            a(null == b ? c : null)
        } : a
    }

    function p(a) {
        return JSON.parse(a.responseText)
    }

    function q(a, b) {
        if (b in a) return b;
        b = b.charAt(0).toUpperCase() + b.substring(1);
        for (var c = 0, d = hd.length; d > c; ++c) {
            var e = hd[c] + b;
            if (e in a) return e
        }
    }

    function r() {}

    function s() {
        $c.event.preventDefault()
    }

    function t() {
        for (var a, b = $c.event; a = b.sourceEvent;) b = a;
        return b
    }

    function u(a) {
        for (var b = new k, c = 0, d = arguments.length; ++c < d;) b[arguments[c]] = l(b);
        return b.of = function(c, d) {
            return function(e) {
                try {
                    var f = e.sourceEvent = $c.event;
                    e.target = a, $c.event = e, b[e.type].apply(c, d)
                } finally {
                    $c.event = f
                }
            }
        }, b
    }

    function v(a) {
        return jd(a, od), a
    }

    function w(a) {
        return "function" == typeof a ? a : function() {
            return kd(a, this)
        }
    }

    function x(a) {
        return "function" == typeof a ? a : function() {
            return ld(a, this)
        }
    }

    function y(a, b) {
        function c() {
            this.removeAttribute(a)
        }

        function d() {
            this.removeAttributeNS(a.space, a.local)
        }

        function e() {
            this.setAttribute(a, b)
        }

        function f() {
            this.setAttributeNS(a.space, a.local, b)
        }

        function g() {
            var c = b.apply(this, arguments);
            null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
        }

        function h() {
            var c = b.apply(this, arguments);
            null == c ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
        }
        return a = $c.ns.qualify(a), null == b ? a.local ? d : c : "function" == typeof b ? a.local ? h : g : a.local ? f : e
    }

    function z(a) {
        return a.trim().replace(/\s+/g, " ")
    }

    function A(a) {
        return new RegExp("(?:^|\\s+)" + $c.requote(a) + "(?:\\s+|$)", "g")
    }

    function B(a) {
        return (a + "").trim().split(/^|\s+/)
    }

    function C(a, b) {
        function c() {
            for (var c = -1; ++c < e;) a[c](this, b)
        }

        function d() {
            for (var c = -1, d = b.apply(this, arguments); ++c < e;) a[c](this, d)
        }
        a = B(a).map(D);
        var e = a.length;
        return "function" == typeof b ? d : c
    }

    function D(a) {
        var b = A(a);
        return function(c, d) {
            if (e = c.classList) return d ? e.add(a) : e.remove(a);
            var e = c.getAttribute("class") || "";
            d ? (b.lastIndex = 0, b.test(e) || c.setAttribute("class", z(e + " " + a))) : c.setAttribute("class", z(e.replace(b, " ")))
        }
    }

    function E(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }

        function e() {
            this.style.setProperty(a, b, c)
        }

        function f() {
            var d = b.apply(this, arguments);
            null == d ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
        }
        return null == b ? d : "function" == typeof b ? f : e
    }

    function F(a, b) {
        function c() {
            delete this[a]
        }

        function d() {
            this[a] = b
        }

        function e() {
            var c = b.apply(this, arguments);
            null == c ? delete this[a] : this[a] = c
        }
        return null == b ? c : "function" == typeof b ? e : d
    }

    function G(a) {
        return "function" == typeof a ? a : (a = $c.ns.qualify(a)).local ? function() {
            return this.ownerDocument.createElementNS(a.space, a.local)
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, a)
        }
    }

    function H(a) {
        return {
            __data__: a
        }
    }

    function I(a) {
        return function() {
            return nd(this, a)
        }
    }

    function J(a, b) {
        return b > a ? -1 : a > b ? 1 : a >= b ? 0 : 0 / 0
    }

    function K(a) {
        return arguments.length || (a = J),
            function(b, c) {
                return b && c ? a(b.__data__, c.__data__) : !b - !c
            }
    }

    function L(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            for (var e, f = a[c], g = 0, h = f.length; h > g; g++)(e = f[g]) && b(e, g, c);
        return a
    }

    function M(a) {
        return jd(a, qd), a
    }

    function N(a) {
        var b, c;
        return function(d, e, f) {
            var g, h = a[f].update,
                i = h.length;
            for (f != c && (c = f, b = 0), e >= b && (b = e + 1); !(g = h[b]) && ++b < i;);
            return g
        }
    }

    function O() {
        var a = this.__transition__;
        a && ++a.active
    }

    function P(a, b, c) {
        function d() {
            var b = this[g];
            b && (this.removeEventListener(a, b, b.$), delete this[g])
        }

        function e() {
            var e = i(b, cd(arguments));
            d.call(this), this.addEventListener(a, this[g] = e, e.$ = c), e._ = b
        }

        function f() {
            var b, c = new RegExp("^__on([^.]+)" + $c.requote(a) + "$");
            for (var d in this)
                if (b = d.match(c)) {
                    var e = this[d];
                    this.removeEventListener(b[1], e, e.$), delete this[d]
                }
        }
        var g = "__on" + a,
            h = a.indexOf("."),
            i = Q;
        h > 0 && (a = a.substring(0, h));
        var j = sd.get(a);
        return j && (a = j, i = R), h ? b ? e : d : b ? r : f
    }

    function Q(a, b) {
        return function(c) {
            var d = $c.event;
            $c.event = c, b[0] = this.__data__;
            try {
                a.apply(this, b)
            } finally {
                $c.event = d
            }
        }
    }

    function R(a, b) {
        var c = Q(a, b);
        return function(a) {
            var b = this,
                d = a.relatedTarget;
            d && (d === b || 8 & d.compareDocumentPosition(b)) || c.call(b, a)
        }
    }

    function S() {
        var a = ".dragsuppress-" + ++ud,
            b = "click" + a,
            c = $c.select(fd).on("touchmove" + a, s).on("dragstart" + a, s).on("selectstart" + a, s);
        if (td) {
            var d = ed.style,
                e = d[td];
            d[td] = "none"
        }
        return function(f) {
            function g() {
                c.on(b, null)
            }
            c.on(a, null), td && (d[td] = e), f && (c.on(b, function() {
                s(), g()
            }, !0), setTimeout(g, 0))
        }
    }

    function T(a, b) {
        b.changedTouches && (b = b.changedTouches[0]);
        var c = a.ownerSVGElement || a;
        if (c.createSVGPoint) {
            var d = c.createSVGPoint();
            if (0 > vd && (fd.scrollX || fd.scrollY)) {
                c = $c.select("body").append("svg").style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: "none"
                }, "important");
                var e = c[0][0].getScreenCTM();
                vd = !(e.f || e.e), c.remove()
            }
            return vd ? (d.x = b.pageX, d.y = b.pageY) : (d.x = b.clientX, d.y = b.clientY), d = d.matrixTransform(a.getScreenCTM().inverse()), [d.x, d.y]
        }
        var f = a.getBoundingClientRect();
        return [b.clientX - f.left - a.clientLeft, b.clientY - f.top - a.clientTop]
    }

    function U() {
        return $c.event.changedTouches[0].identifier
    }

    function V() {
        return $c.event.target
    }

    function W() {
        return fd
    }

    function X() {
        var a = Y(),
            b = Z() - a;
        b > 24 ? (isFinite(b) && (clearTimeout(zd), zd = setTimeout(X, b)), yd = 0) : (yd = 1, Bd(X))
    }

    function Y() {
        var a = Date.now();
        for (Ad = wd; Ad;) a >= Ad.t && (Ad.f = Ad.c(a - Ad.t)), Ad = Ad.n;
        return a
    }

    function Z() {
        for (var a, b = wd, c = 1 / 0; b;) b.f ? b = a ? a.n = b.n : wd = b.n : (b.t < c && (c = b.t), b = (a = b).n);
        return xd = a, c
    }

    function $(a) {
        return "function" == typeof a ? a : function() {
            return a
        }
    }

    function _(a) {
        return a[0]
    }

    function ab(a) {
        return a[1]
    }

    function bb(a) {
        return a.x
    }

    function cb(a) {
        return a.y
    }

    function db() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function eb(a, b, c, d, e, f) {
        if (!a(b, c, d, e, f)) {
            var g = .5 * (c + e),
                h = .5 * (d + f),
                i = b.nodes;
            i[0] && eb(a, i[0], c, d, g, h), i[1] && eb(a, i[1], g, d, e, h), i[2] && eb(a, i[2], c, h, g, f), i[3] && eb(a, i[3], g, h, e, f)
        }
    }

    function fb(a) {
        a.fixed |= 2
    }

    function gb(a) {
        a.fixed &= -7
    }

    function hb(a) {
        a.fixed |= 4, a.px = a.x, a.py = a.y
    }

    function ib(a) {
        a.fixed &= -5
    }

    function jb(a, b, c) {
        var d = 0,
            e = 0;
        if (a.charge = 0, !a.leaf)
            for (var f, g = a.nodes, h = g.length, i = -1; ++i < h;) f = g[i], null != f && (jb(f, b, c), a.charge += f.charge, d += f.charge * f.cx, e += f.charge * f.cy);
        if (a.point) {
            a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
            var j = b * c[a.point.index];
            a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
        }
        a.cx = d / a.charge, a.cy = e / a.charge
    }

    function kb(a) {
        for (var b = 1; a * b % 1;) b *= 10;
        return b
    }

    function lb() {}

    function mb(a, b, c) {
        return this instanceof mb ? (this.h = +a, this.s = +b, void(this.l = +c)) : arguments.length < 2 ? a instanceof mb ? new mb(a.h, a.s, a.l) : zb("" + a, Ab, mb) : new mb(a, b, c)
    }

    function nb(a, b, c) {
        function d(a) {
            return a > 360 ? a -= 360 : 0 > a && (a += 360), 60 > a ? f + (g - f) * a / 60 : 180 > a ? g : 240 > a ? f + (g - f) * (240 - a) / 60 : f
        }

        function e(a) {
            return Math.round(255 * d(a))
        }
        var f, g;
        return a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a, b = isNaN(b) ? 0 : 0 > b ? 0 : b > 1 ? 1 : b, c = 0 > c ? 0 : c > 1 ? 1 : c, g = .5 >= c ? c * (1 + b) : c + b - c * b, f = 2 * c - g, new wb(e(a + 120), e(a), e(a - 120))
    }

    function ob(a, b, c) {
        return this instanceof ob ? (this.h = +a, this.c = +b, void(this.l = +c)) : arguments.length < 2 ? a instanceof ob ? new ob(a.h, a.c, a.l) : a instanceof qb ? sb(a.l, a.a, a.b) : sb((a = Bb((a = $c.rgb(a)).r, a.g, a.b)).l, a.a, a.b) : new ob(a, b, c)
    }

    function pb(a, b, c) {
        return isNaN(a) && (a = 0), isNaN(b) && (b = 0), new qb(c, Math.cos(a *= Kd) * b, Math.sin(a) * b)
    }

    function qb(a, b, c) {
        return this instanceof qb ? (this.l = +a, this.a = +b, void(this.b = +c)) : arguments.length < 2 ? a instanceof qb ? new qb(a.l, a.a, a.b) : a instanceof ob ? pb(a.l, a.c, a.h) : Bb((a = wb(a)).r, a.g, a.b) : new qb(a, b, c)
    }

    function rb(a, b, c) {
        var d = (a + 16) / 116,
            e = d + b / 500,
            f = d - c / 200;
        return e = tb(e) * Od, d = tb(d) * Pd, f = tb(f) * Qd, new wb(vb(3.2404542 * e - 1.5371385 * d - .4985314 * f), vb(-.969266 * e + 1.8760108 * d + .041556 * f), vb(.0556434 * e - .2040259 * d + 1.0572252 * f))
    }

    function sb(a, b, c) {
        return a > 0 ? new ob(Math.atan2(c, b) * Ld, Math.sqrt(b * b + c * c), a) : new ob(0 / 0, 0 / 0, a)
    }

    function tb(a) {
        return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
    }

    function ub(a) {
        return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
    }

    function vb(a) {
        return Math.round(255 * (.00304 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
    }

    function wb(a, b, c) {
        return this instanceof wb ? (this.r = ~~a, this.g = ~~b, void(this.b = ~~c)) : arguments.length < 2 ? a instanceof wb ? new wb(a.r, a.g, a.b) : zb("" + a, wb, nb) : new wb(a, b, c)
    }

    function xb(a) {
        return new wb(a >> 16, a >> 8 & 255, 255 & a)
    }

    function yb(a) {
        return 16 > a ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
    }

    function zb(a, b, c) {
        var d, e, f, g = 0,
            h = 0,
            i = 0;
        if (d = /([a-z]+)\((.*)\)/i.exec(a)) switch (e = d[2].split(","), d[1]) {
            case "hsl":
                return c(parseFloat(e[0]), parseFloat(e[1]) / 100, parseFloat(e[2]) / 100);
            case "rgb":
                return b(Db(e[0]), Db(e[1]), Db(e[2]))
        }
        return (f = Td.get(a)) ? b(f.r, f.g, f.b) : (null == a || "#" !== a.charAt(0) || isNaN(f = parseInt(a.substring(1), 16)) || (4 === a.length ? (g = (3840 & f) >> 4, g = g >> 4 | g, h = 240 & f, h = h >> 4 | h, i = 15 & f, i = i << 4 | i) : 7 === a.length && (g = (16711680 & f) >> 16, h = (65280 & f) >> 8, i = 255 & f)), b(g, h, i))
    }

    function Ab(a, b, c) {
        var d, e, f = Math.min(a /= 255, b /= 255, c /= 255),
            g = Math.max(a, b, c),
            h = g - f,
            i = (g + f) / 2;
        return h ? (e = .5 > i ? h / (g + f) : h / (2 - g - f), d = a == g ? (b - c) / h + (c > b ? 6 : 0) : b == g ? (c - a) / h + 2 : (a - b) / h + 4, d *= 60) : (d = 0 / 0, e = i > 0 && 1 > i ? 0 : d), new mb(d, e, i)
    }

    function Bb(a, b, c) {
        a = Cb(a), b = Cb(b), c = Cb(c);
        var d = ub((.4124564 * a + .3575761 * b + .1804375 * c) / Od),
            e = ub((.2126729 * a + .7151522 * b + .072175 * c) / Pd),
            f = ub((.0193339 * a + .119192 * b + .9503041 * c) / Qd);
        return qb(116 * e - 16, 500 * (d - e), 200 * (e - f))
    }

    function Cb(a) {
        return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
    }

    function Db(a) {
        var b = parseFloat(a);
        return "%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b
    }

    function Eb(a, b) {
        a = $c.rgb(a), b = $c.rgb(b);
        var c = a.r,
            d = a.g,
            e = a.b,
            f = b.r - c,
            g = b.g - d,
            h = b.b - e;
        return function(a) {
            return "#" + yb(Math.round(c + f * a)) + yb(Math.round(d + g * a)) + yb(Math.round(e + h * a))
        }
    }

    function Fb(a, b) {
        var c, d = {},
            e = {};
        for (c in a) c in b ? d[c] = Jb(a[c], b[c]) : e[c] = a[c];
        for (c in b) c in a || (e[c] = b[c]);
        return function(a) {
            for (c in d) e[c] = d[c](a);
            return e
        }
    }

    function Gb(a, b) {
        var c, d = [],
            e = [],
            f = a.length,
            g = b.length,
            h = Math.min(a.length, b.length);
        for (c = 0; h > c; ++c) d.push(Jb(a[c], b[c]));
        for (; f > c; ++c) e[c] = a[c];
        for (; g > c; ++c) e[c] = b[c];
        return function(a) {
            for (c = 0; h > c; ++c) e[c] = d[c](a);
            return e
        }
    }

    function Hb(a, b) {
        return b -= a = +a,
            function(c) {
                return a + b * c
            }
    }

    function Ib(a, b) {
        var c, d, e, f = Ud.lastIndex = Vd.lastIndex = 0,
            g = -1,
            h = [],
            i = [];
        for (a += "", b += "";
            (c = Ud.exec(a)) && (d = Vd.exec(b));)(e = d.index) > f && (e = b.substring(f, e), h[g] ? h[g] += e : h[++g] = e), (c = c[0]) === (d = d[0]) ? h[g] ? h[g] += d : h[++g] = d : (h[++g] = null, i.push({
            i: g,
            x: Hb(c, d)
        })), f = Vd.lastIndex;
        return f < b.length && (e = b.substring(f), h[g] ? h[g] += e : h[++g] = e), h.length < 2 ? i[0] ? (b = i[0].x, function(a) {
            return b(a) + ""
        }) : function() {
            return b
        } : (b = i.length, function(a) {
            for (var c, d = 0; b > d; ++d) h[(c = i[d]).i] = c.x(a);
            return h.join("")
        })
    }

    function Jb(a, b) {
        for (var c, d = $c.interpolators.length; --d >= 0 && !(c = $c.interpolators[d](a, b)););
        return c
    }

    function Kb(a, b) {
        return b -= a,
            function(c) {
                return Math.round(a + b * c)
            }
    }

    function Lb(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0,
            function(c) {
                return (c - a) * b
            }
    }

    function Mb(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0,
            function(c) {
                return Math.max(0, Math.min(1, (c - a) * b))
            }
    }

    function Nb(a, b) {
        return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
    }

    function Ob(a, b) {
        var c = Math.pow(10, 3 * Cd(8 - b));
        return {
            scale: b > 8 ? function(a) {
                return a / c
            } : function(a) {
                return a * c
            },
            symbol: a
        }
    }

    function Pb(a) {
        var b = a.decimal,
            c = a.thousands,
            d = a.grouping,
            e = a.currency,
            f = d ? function(a) {
                for (var b = a.length, e = [], f = 0, g = d[0]; b > 0 && g > 0;) e.push(a.substring(b -= g, b + g)), g = d[f = (f + 1) % d.length];
                return e.reverse().join(c)
            } : i;
        return function(a) {
            var c = Xd.exec(a),
                d = c[1] || " ",
                g = c[2] || ">",
                h = c[3] || "",
                i = c[4] || "",
                j = c[5],
                k = +c[6],
                l = c[7],
                m = c[8],
                n = c[9],
                o = 1,
                p = "",
                q = "",
                r = !1;
            switch (m && (m = +m.substring(1)), (j || "0" === d && "=" === g) && (j = d = "0", g = "=", l && (k -= Math.floor((k - 1) / 4))), n) {
                case "n":
                    l = !0, n = "g";
                    break;
                case "%":
                    o = 100, q = "%", n = "f";
                    break;
                case "p":
                    o = 100, q = "%", n = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === i && (p = "0" + n.toLowerCase());
                case "c":
                case "d":
                    r = !0, m = 0;
                    break;
                case "s":
                    o = -1, n = "r"
            }
            "$" === i && (p = e[0], q = e[1]), "r" != n || m || (n = "g"), null != m && ("g" == n ? m = Math.max(1, Math.min(21, m)) : ("e" == n || "f" == n) && (m = Math.max(0, Math.min(20, m)))), n = Yd.get(n) || Qb;
            var s = j && l;
            return function(a) {
                var c = q;
                if (r && a % 1) return "";
                var e = 0 > a || 0 === a && 0 > 1 / a ? (a = -a, "-") : h;
                if (0 > o) {
                    var i = $c.formatPrefix(a, m);
                    a = i.scale(a), c = i.symbol + q
                } else a *= o;
                a = n(a, m);
                var t = a.lastIndexOf("."),
                    u = 0 > t ? a : a.substring(0, t),
                    v = 0 > t ? "" : b + a.substring(t + 1);
                !j && l && (u = f(u));
                var w = p.length + u.length + v.length + (s ? 0 : e.length),
                    x = k > w ? new Array(w = k - w + 1).join(d) : "";
                return s && (u = f(x + u)), e += p, a = u + v, ("<" === g ? e + a + x : ">" === g ? x + e + a : "^" === g ? x.substring(0, w >>= 1) + e + a + x.substring(w) : e + (s ? a : x + a)) + c
            }
        }
    }

    function Qb(a) {
        return a + ""
    }

    function Rb() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Sb(a, b, c) {
        function d(b) {
            var c = a(b),
                d = f(c, 1);
            return d - b > b - c ? c : d
        }

        function e(c) {
            return b(c = a(new $d(c - 1)), 1), c
        }

        function f(a, c) {
            return b(a = new $d(+a), c), a
        }

        function g(a, d, f) {
            var g = e(a),
                h = [];
            if (f > 1)
                for (; d > g;) c(g) % f || h.push(new Date(+g)), b(g, 1);
            else
                for (; d > g;) h.push(new Date(+g)), b(g, 1);
            return h
        }

        function h(a, b, c) {
            try {
                $d = Rb;
                var d = new Rb;
                return d._ = a, g(d, b, c)
            } finally {
                $d = Date
            }
        }
        a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
        var i = a.utc = Tb(a);
        return i.floor = i, i.round = Tb(d), i.ceil = Tb(e), i.offset = Tb(f), i.range = h, a
    }

    function Tb(a) {
        return function(b, c) {
            try {
                $d = Rb;
                var d = new Rb;
                return d._ = b, a(d, c)._
            } finally {
                $d = Date
            }
        }
    }

    function Ub(a) {
        function b(a) {
            function b(b) {
                for (var c, e, f, g = [], h = -1, i = 0; ++h < d;) 37 === a.charCodeAt(h) && (g.push(a.substring(i, h)), null != (e = ae[c = a.charAt(++h)]) && (c = a.charAt(++h)), (f = C[c]) && (c = f(b, null == e ? "e" === c ? " " : "0" : e)), g.push(c), i = h + 1);
                return g.push(a.substring(i, h)), g.join("")
            }
            var d = a.length;
            return b.parse = function(b) {
                var d = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    },
                    e = c(d, a, b, 0);
                if (e != b.length) return null;
                "p" in d && (d.H = d.H % 12 + 12 * d.p);
                var f = null != d.Z && $d !== Rb,
                    g = new(f ? Rb : $d);
                return "j" in d ? g.setFullYear(d.y, 0, d.j) : "w" in d && ("W" in d || "U" in d) ? (g.setFullYear(d.y, 0, 1), g.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + 7 * d.W - (g.getDay() + 5) % 7 : d.w + 7 * d.U - (g.getDay() + 6) % 7)) : g.setFullYear(d.y, d.m, d.d), g.setHours(d.H + Math.floor(d.Z / 100), d.M + d.Z % 100, d.S, d.L), f ? g._ : g
            }, b.toString = function() {
                return a
            }, b
        }

        function c(a, b, c, d) {
            for (var e, f, g, h = 0, i = b.length, j = c.length; i > h;) {
                if (d >= j) return -1;
                if (e = b.charCodeAt(h++), 37 === e) {
                    if (g = b.charAt(h++), f = D[g in ae ? b.charAt(h++) : g], !f || (d = f(a, c, d)) < 0) return -1
                } else if (e != c.charCodeAt(d++)) return -1
            }
            return d
        }

        function d(a, b, c) {
            w.lastIndex = 0;
            var d = w.exec(b.substring(c));
            return d ? (a.w = x.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function e(a, b, c) {
            u.lastIndex = 0;
            var d = u.exec(b.substring(c));
            return d ? (a.w = v.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function f(a, b, c) {
            A.lastIndex = 0;
            var d = A.exec(b.substring(c));
            return d ? (a.m = B.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function g(a, b, c) {
            y.lastIndex = 0;
            var d = y.exec(b.substring(c));
            return d ? (a.m = z.get(d[0].toLowerCase()), c + d[0].length) : -1
        }

        function h(a, b, d) {
            return c(a, C.c.toString(), b, d)
        }

        function i(a, b, d) {
            return c(a, C.x.toString(), b, d)
        }

        function j(a, b, d) {
            return c(a, C.X.toString(), b, d)
        }

        function k(a, b, c) {
            var d = t.get(b.substring(c, c += 2).toLowerCase());
            return null == d ? -1 : (a.p = d, c)
        }
        var l = a.dateTime,
            m = a.date,
            n = a.time,
            o = a.periods,
            p = a.days,
            q = a.shortDays,
            r = a.months,
            s = a.shortMonths;
        b.utc = function(a) {
            function c(a) {
                try {
                    $d = Rb;
                    var b = new $d;
                    return b._ = a, d(b)
                } finally {
                    $d = Date
                }
            }
            var d = b(a);
            return c.parse = function(a) {
                try {
                    $d = Rb;
                    var b = d.parse(a);
                    return b && b._
                } finally {
                    $d = Date
                }
            }, c.toString = d.toString, c
        }, b.multi = b.utc.multi = mc;
        var t = $c.map(),
            u = Wb(p),
            v = Xb(p),
            w = Wb(q),
            x = Xb(q),
            y = Wb(r),
            z = Xb(r),
            A = Wb(s),
            B = Xb(s);
        o.forEach(function(a, b) {
            t.set(a.toLowerCase(), b)
        });
        var C = {
                a: function(a) {
                    return q[a.getDay()]
                },
                A: function(a) {
                    return p[a.getDay()]
                },
                b: function(a) {
                    return s[a.getMonth()]
                },
                B: function(a) {
                    return r[a.getMonth()]
                },
                c: b(l),
                d: function(a, b) {
                    return Vb(a.getDate(), b, 2)
                },
                e: function(a, b) {
                    return Vb(a.getDate(), b, 2)
                },
                H: function(a, b) {
                    return Vb(a.getHours(), b, 2)
                },
                I: function(a, b) {
                    return Vb(a.getHours() % 12 || 12, b, 2)
                },
                j: function(a, b) {
                    return Vb(1 + Zd.dayOfYear(a), b, 3)
                },
                L: function(a, b) {
                    return Vb(a.getMilliseconds(), b, 3)
                },
                m: function(a, b) {
                    return Vb(a.getMonth() + 1, b, 2)
                },
                M: function(a, b) {
                    return Vb(a.getMinutes(), b, 2)
                },
                p: function(a) {
                    return o[+(a.getHours() >= 12)]
                },
                S: function(a, b) {
                    return Vb(a.getSeconds(), b, 2)
                },
                U: function(a, b) {
                    return Vb(Zd.sundayOfYear(a), b, 2)
                },
                w: function(a) {
                    return a.getDay()
                },
                W: function(a, b) {
                    return Vb(Zd.mondayOfYear(a), b, 2)
                },
                x: b(m),
                X: b(n),
                y: function(a, b) {
                    return Vb(a.getFullYear() % 100, b, 2)
                },
                Y: function(a, b) {
                    return Vb(a.getFullYear() % 1e4, b, 4)
                },
                Z: kc,
                "%": function() {
                    return "%"
                }
            },
            D = {
                a: d,
                A: e,
                b: f,
                B: g,
                c: h,
                d: ec,
                e: ec,
                H: gc,
                I: gc,
                j: fc,
                L: jc,
                m: dc,
                M: hc,
                p: k,
                S: ic,
                U: Zb,
                w: Yb,
                W: $b,
                x: i,
                X: j,
                y: ac,
                Y: _b,
                Z: bc,
                "%": lc
            };
        return b
    }

    function Vb(a, b, c) {
        var d = 0 > a ? "-" : "",
            e = (d ? -a : a) + "",
            f = e.length;
        return d + (c > f ? new Array(c - f + 1).join(b) + e : e)
    }

    function Wb(a) {
        return new RegExp("^(?:" + a.map($c.requote).join("|") + ")", "i")
    }

    function Xb(a) {
        for (var c = new b, d = -1, e = a.length; ++d < e;) c.set(a[d].toLowerCase(), d);
        return c
    }

    function Yb(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 1));
        return d ? (a.w = +d[0], c + d[0].length) : -1
    }

    function Zb(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c));
        return d ? (a.U = +d[0], c + d[0].length) : -1
    }

    function $b(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c));
        return d ? (a.W = +d[0], c + d[0].length) : -1
    }

    function _b(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 4));
        return d ? (a.y = +d[0], c + d[0].length) : -1
    }

    function ac(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 2));
        return d ? (a.y = cc(+d[0]), c + d[0].length) : -1
    }

    function bc(a, b, c) {
        return /^[+-]\d{4}$/.test(b = b.substring(c, c + 5)) ? (a.Z = -b, c + 5) : -1
    }

    function cc(a) {
        return a + (a > 68 ? 1900 : 2e3)
    }

    function dc(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 2));
        return d ? (a.m = d[0] - 1, c + d[0].length) : -1
    }

    function ec(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 2));
        return d ? (a.d = +d[0], c + d[0].length) : -1
    }

    function fc(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 3));
        return d ? (a.j = +d[0], c + d[0].length) : -1
    }

    function gc(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 2));
        return d ? (a.H = +d[0], c + d[0].length) : -1
    }

    function hc(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 2));
        return d ? (a.M = +d[0], c + d[0].length) : -1
    }

    function ic(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 2));
        return d ? (a.S = +d[0], c + d[0].length) : -1
    }

    function jc(a, b, c) {
        be.lastIndex = 0;
        var d = be.exec(b.substring(c, c + 3));
        return d ? (a.L = +d[0], c + d[0].length) : -1
    }

    function kc(a) {
        var b = a.getTimezoneOffset(),
            c = b > 0 ? "-" : "+",
            d = ~~ (Cd(b) / 60),
            e = Cd(b) % 60;
        return c + Vb(d, "0", 2) + Vb(e, "0", 2)
    }

    function lc(a, b, c) {
        ce.lastIndex = 0;
        var d = ce.exec(b.substring(c, c + 1));
        return d ? c + d[0].length : -1
    }

    function mc(a) {
        for (var b = a.length, c = -1; ++c < b;) a[c][0] = this(a[c][0]);
        return function(b) {
            for (var c = 0, d = a[c]; !d[1](b);) d = a[++c];
            return d[0](b)
        }
    }

    function nc(a, b, c, d) {
        var e = c(a[0], a[1]),
            f = d(b[0], b[1]);
        return function(a) {
            return f(e(a))
        }
    }

    function oc(a, b) {
        var c, d = 0,
            e = a.length - 1,
            f = a[d],
            g = a[e];
        return f > g && (c = d, d = e, e = c, c = f, f = g, g = c), a[d] = b.floor(f), a[e] = b.ceil(g), a
    }

    function pc(a) {
        return a ? {
            floor: function(b) {
                return Math.floor(b / a) * a
            },
            ceil: function(b) {
                return Math.ceil(b / a) * a
            }
        } : ee
    }

    function qc(a) {
        return {
            left: function(b, c, d, e) {
                for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                    var f = d + e >>> 1;
                    a(b[f], c) < 0 ? d = f + 1 : e = f
                }
                return d
            },
            right: function(b, c, d, e) {
                for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                    var f = d + e >>> 1;
                    a(b[f], c) > 0 ? e = f : d = f + 1
                }
                return d
            }
        }
    }

    function rc(a, b, c, d) {
        var e = [],
            f = [],
            g = 0,
            h = Math.min(a.length, b.length) - 1;
        for (a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++g <= h;) e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
        return function(b) {
            var c = $c.bisect(a, b, 1, h) - 1;
            return f[c](e[c](b))
        }
    }

    function sc(a) {
        var b = a[0],
            c = a[a.length - 1];
        return c > b ? [b, c] : [c, b]
    }

    function tc(a, b, c, d) {
        function e() {
            var e = Math.min(a.length, b.length) > 2 ? rc : nc,
                i = d ? Mb : Lb;
            return g = e(a, b, i, c), h = e(b, a, i, Jb), f
        }

        function f(a) {
            return g(a)
        }
        var g, h;
        return f.invert = function(a) {
            return h(a)
        }, f.domain = function(b) {
            return arguments.length ? (a = b.map(Number), e()) : a
        }, f.range = function(a) {
            return arguments.length ? (b = a, e()) : b
        }, f.rangeRound = function(a) {
            return f.range(a).interpolate(Kb)
        }, f.clamp = function(a) {
            return arguments.length ? (d = a, e()) : d
        }, f.interpolate = function(a) {
            return arguments.length ? (c = a, e()) : c
        }, f.ticks = function(b) {
            return xc(a, b)
        }, f.tickFormat = function(b, c) {
            return yc(a, b, c)
        }, f.nice = function(b) {
            return vc(a, b), e()
        }, f.copy = function() {
            return tc(a, b, c, d)
        }, e()
    }

    function uc(a, b) {
        return $c.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
    }

    function vc(a, b) {
        return oc(a, pc(wc(a, b)[2]))
    }

    function wc(a, b) {
        null == b && (b = 10);
        var c = sc(a),
            d = c[1] - c[0],
            e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)),
            f = b / d * e;
        return .15 >= f ? e *= 10 : .35 >= f ? e *= 5 : .75 >= f && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + .5 * e, c[2] = e, c
    }

    function xc(a, b) {
        return $c.range.apply($c, wc(a, b))
    }

    function yc(a, b, c) {
        var d = wc(a, b);
        if (c) {
            var e = Xd.exec(c);
            if (e.shift(), "s" === e[8]) {
                var f = $c.formatPrefix(Math.max(Cd(d[0]), Cd(d[1])));
                return e[7] || (e[7] = "." + zc(f.scale(d[2]))), e[8] = "f", c = $c.format(e.join("")),
                    function(a) {
                        return c(f.scale(a)) + f.symbol
                    }
            }
            e[7] || (e[7] = "." + Ac(e[8], d)), c = e.join("")
        } else c = ",." + zc(d[2]) + "f";
        return $c.format(c)
    }

    function zc(a) {
        return -Math.floor(Math.log(a) / Math.LN10 + .01)
    }

    function Ac(a, b) {
        var c = zc(b[2]);
        return a in ge ? Math.abs(c - zc(Math.max(Cd(b[0]), Cd(b[1])))) + +("e" !== a) : c - 2 * ("%" === a)
    }

    function Bc(a, b, c) {
        function d(b) {
            return a(e(b))
        }
        var e = Cc(b),
            f = Cc(1 / b);
        return d.invert = function(b) {
            return f(a.invert(b))
        }, d.domain = function(b) {
            return arguments.length ? (a.domain((c = b.map(Number)).map(e)), d) : c
        }, d.ticks = function(a) {
            return xc(c, a)
        }, d.tickFormat = function(a, b) {
            return yc(c, a, b)
        }, d.nice = function(a) {
            return d.domain(vc(c, a))
        }, d.exponent = function(g) {
            return arguments.length ? (e = Cc(b = g), f = Cc(1 / b), a.domain(c.map(e)), d) : b
        }, d.copy = function() {
            return Bc(a.copy(), b, c)
        }, uc(d, a)
    }

    function Cc(a) {
        return function(b) {
            return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a)
        }
    }

    function Dc() {
        return !0
    }

    function Ec(a) {
        return function(b) {
            return 0 >= b ? 0 : b >= 1 ? 1 : a(b)
        }
    }

    function Fc(a) {
        return function(b) {
            return 1 - a(1 - b)
        }
    }

    function Gc(a) {
        return function(b) {
            return .5 * (.5 > b ? a(2 * b) : 2 - a(2 - 2 * b))
        }
    }

    function Hc(a) {
        return a * a
    }

    function Ic(a) {
        return a * a * a
    }

    function Jc(a) {
        if (0 >= a) return 0;
        if (a >= 1) return 1;
        var b = a * a,
            c = b * a;
        return 4 * (.5 > a ? c : 3 * (a - b) + c - .75)
    }

    function Kc(a) {
        return function(b) {
            return Math.pow(b, a)
        }
    }

    function Lc(a) {
        return 1 - Math.cos(a * Jd)
    }

    function Mc(a) {
        return Math.pow(2, 10 * (a - 1))
    }

    function Nc(a) {
        return 1 - Math.sqrt(1 - a * a)
    }

    function Oc(a, b) {
        var c;
        return arguments.length < 2 && (b = .45), arguments.length ? c = b / Id * Math.asin(1 / a) : (a = 1, c = b / 4),
            function(d) {
                return 1 + a * Math.pow(2, -10 * d) * Math.sin((d - c) * Id / b)
            }
    }

    function Pc(a) {
        return a || (a = 1.70158),
            function(b) {
                return b * b * ((a + 1) * b - a)
            }
    }

    function Qc(a) {
        return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }

    function Rc(a, b) {
        return jd(a, me), a.id = b, a
    }

    function Sc(a) {
        var b = [a.a, a.b],
            c = [a.c, a.d],
            d = Uc(b),
            e = Tc(b, c),
            f = Uc(Vc(c, b, -e)) || 0;
        b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Ld, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * Ld : 0
    }

    function Tc(a, b) {
        return a[0] * b[0] + a[1] * b[1]
    }

    function Uc(a) {
        var b = Math.sqrt(Tc(a, a));
        return b && (a[0] /= b, a[1] /= b), b
    }

    function Vc(a, b, c) {
        return a[0] += c * b[0], a[1] += c * b[1], a
    }

    function Wc(a, b) {
        var c, d = [],
            e = [],
            f = $c.transform(a),
            g = $c.transform(b),
            h = f.translate,
            i = g.translate,
            j = f.rotate,
            k = g.rotate,
            l = f.skew,
            m = g.skew,
            n = f.scale,
            o = g.scale;
        return h[0] != i[0] || h[1] != i[1] ? (d.push("translate(", null, ",", null, ")"), e.push({
                i: 1,
                x: Hb(h[0], i[0])
            }, {
                i: 3,
                x: Hb(h[1], i[1])
            })) : d.push(i[0] || i[1] ? "translate(" + i + ")" : ""), j != k ? (j - k > 180 ? k += 360 : k - j > 180 && (j += 360), e.push({
                i: d.push(d.pop() + "rotate(", null, ")") - 2,
                x: Hb(j, k)
            })) : k && d.push(d.pop() + "rotate(" + k + ")"), l != m ? e.push({
                i: d.push(d.pop() + "skewX(", null, ")") - 2,
                x: Hb(l, m)
            }) : m && d.push(d.pop() + "skewX(" + m + ")"), n[0] != o[0] || n[1] != o[1] ? (c = d.push(d.pop() + "scale(", null, ",", null, ")"), e.push({
                i: c - 4,
                x: Hb(n[0], o[0])
            }, {
                i: c - 2,
                x: Hb(n[1], o[1])
            })) : (1 != o[0] || 1 != o[1]) && d.push(d.pop() + "scale(" + o + ")"), c = e.length,
            function(a) {
                for (var b, f = -1; ++f < c;) d[(b = e[f]).i] = b.x(a);
                return d.join("")
            }
    }

    function Xc(a, b, c, d) {
        var e = a.id;
        return L(a, "function" == typeof c ? function(a, f, g) {
            a.__transition__[e].tween.set(b, d(c.call(a, a.__data__, f, g)))
        } : (c = d(c), function(a) {
            a.__transition__[e].tween.set(b, c)
        }))
    }

    function Yc(a) {
        return null == a && (a = ""),
            function() {
                this.textContent = a
            }
    }

    function Zc(a, c, d, e) {
        var f = a.__transition__ || (a.__transition__ = {
                active: 0,
                count: 0
            }),
            g = f[d];
        if (!g) {
            var h = e.time;
            g = f[d] = {
                tween: new b,
                time: h,
                ease: e.ease,
                delay: e.delay,
                duration: e.duration
            }, ++f.count, $c.timer(function(b) {
                function e(b) {
                    return f.active > d ? j() : (f.active = d, g.event && g.event.start.call(a, k, c), g.tween.forEach(function(b, d) {
                        (d = d.call(a, k, c)) && p.push(d)
                    }), void $c.timer(function() {
                        return o.c = i(b || 1) ? Dc : i, 1
                    }, 0, h))
                }

                function i(b) {
                    if (f.active !== d) return j();
                    for (var e = b / n, h = l(e), i = p.length; i > 0;) p[--i].call(a, h);
                    return e >= 1 ? (g.event && g.event.end.call(a, k, c), j()) : void 0
                }

                function j() {
                    return --f.count ? delete f[d] : delete a.__transition__, 1
                }
                var k = a.__data__,
                    l = g.ease,
                    m = g.delay,
                    n = g.duration,
                    o = Ad,
                    p = [];
                return o.t = m + h, b >= m ? e(b - m) : void(o.c = e)
            }, 0, h)
        }
    }
    var $c = {
        version: "3.4.10"
    };
    $c.max = function(a, b) {
        var c, d, e = -1,
            f = a.length;
        if (1 === arguments.length) {
            for (; ++e < f && !(null != (c = a[e]) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = a[e]) && d > c && (c = d)
        } else {
            for (; ++e < f && !(null != (c = b.call(a, a[e], e)) && c >= c);) c = void 0;
            for (; ++e < f;) null != (d = b.call(a, a[e], e)) && d > c && (c = d)
        }
        return c
    }, $c.map = function(a) {
        var c = new b;
        if (a instanceof b) a.forEach(function(a, b) {
            c.set(a, b)
        });
        else
            for (var d in a) c.set(d, a[d]);
        return c
    }, a(b, {
        has: c,
        get: function(a) {
            return this[_c + a]
        },
        set: function(a, b) {
            return this[_c + a] = b
        },
        remove: d,
        keys: e,
        values: function() {
            var a = [];
            return this.forEach(function(b, c) {
                a.push(c)
            }), a
        },
        entries: function() {
            var a = [];
            return this.forEach(function(b, c) {
                a.push({
                    key: b,
                    value: c
                })
            }), a
        },
        size: f,
        empty: g,
        forEach: function(a) {
            for (var b in this) b.charCodeAt(0) === ad && a.call(this, b.substring(1), this[b])
        }
    });
    var _c = "\x00",
        ad = _c.charCodeAt(0);
    $c.set = function(a) {
        var b = new h;
        if (a)
            for (var c = 0, d = a.length; d > c; ++c) b.add(a[c]);
        return b
    }, a(h, {
        has: c,
        add: function(a) {
            return this[_c + a] = !0, a
        },
        remove: function(a) {
            return a = _c + a, a in this && delete this[a]
        },
        values: e,
        size: f,
        empty: g,
        forEach: function(a) {
            for (var b in this) b.charCodeAt(0) === ad && a.call(this, b.substring(1))
        }
    });
    var bd = [].slice,
        cd = function(a) {
            return bd.call(a)
        },
        dd = document,
        ed = dd.documentElement,
        fd = window;
    try {
        cd(ed.childNodes)[0].nodeType
    } catch (gd) {
        cd = function(a) {
            for (var b = a.length, c = new Array(b); b--;) c[b] = a[b];
            return c
        }
    }
    $c.rebind = function(a, b) {
        for (var c, d = 1, e = arguments.length; ++d < e;) a[c = arguments[d]] = j(a, b, b[c]);
        return a
    }, $c.dispatch = function() {
        for (var a = new k, b = -1, c = arguments.length; ++b < c;) a[arguments[b]] = l(a);
        return a
    }, k.prototype.on = function(a, b) {
        var c = a.indexOf("."),
            d = "";
        if (c >= 0 && (d = a.substring(c + 1), a = a.substring(0, c)), a) return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
        if (2 === arguments.length) {
            if (null == b)
                for (a in this) this.hasOwnProperty(a) && this[a].on(d, null);
            return this
        }
    }, $c.xhr = m(i), $c.dsv = function(a, b) {
        function c(a, c, f) {
            arguments.length < 3 && (f = c, c = null);
            var g = n(a, b, null == c ? d : e(c), f);
            return g.row = function(a) {
                return arguments.length ? g.response(null == (c = a) ? d : e(a)) : c
            }, g
        }

        function d(a) {
            return c.parse(a.responseText)
        }

        function e(a) {
            return function(b) {
                return c.parse(b.responseText, a)
            }
        }

        function f(b) {
            return b.map(g).join(a)
        }

        function g(a) {
            return i.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
        }
        var i = new RegExp('["' + a + "\n]"),
            j = a.charCodeAt(0);
        return c.parse = function(a, b) {
            var d;
            return c.parseRows(a, function(a, c) {
                if (d) return d(a, c - 1);
                var e = new Function("d", "return {" + a.map(function(a, b) {
                    return JSON.stringify(a) + ": d[" + b + "]"
                }).join(",") + "}");
                d = b ? function(a, c) {
                    return b(e(a), c)
                } : e
            })
        }, c.parseRows = function(a, b) {
            function c() {
                if (k >= i) return g;
                if (e) return e = !1, f;
                var b = k;
                if (34 === a.charCodeAt(b)) {
                    for (var c = b; c++ < i;)
                        if (34 === a.charCodeAt(c)) {
                            if (34 !== a.charCodeAt(c + 1)) break;
                            ++c
                        }
                    k = c + 2;
                    var d = a.charCodeAt(c + 1);
                    return 13 === d ? (e = !0, 10 === a.charCodeAt(c + 2) && ++k) : 10 === d && (e = !0), a.substring(b + 1, c).replace(/""/g, '"')
                }
                for (; i > k;) {
                    var d = a.charCodeAt(k++),
                        h = 1;
                    if (10 === d) e = !0;
                    else if (13 === d) e = !0, 10 === a.charCodeAt(k) && (++k, ++h);
                    else if (d !== j) continue;
                    return a.substring(b, k - h)
                }
                return a.substring(b)
            }
            for (var d, e, f = {}, g = {}, h = [], i = a.length, k = 0, l = 0;
                (d = c()) !== g;) {
                for (var m = []; d !== f && d !== g;) m.push(d), d = c();
                (!b || (m = b(m, l++))) && h.push(m)
            }
            return h
        }, c.format = function(b) {
            if (Array.isArray(b[0])) return c.formatRows(b);
            var d = new h,
                e = [];
            return b.forEach(function(a) {
                for (var b in a) d.has(b) || e.push(d.add(b))
            }), [e.map(g).join(a)].concat(b.map(function(b) {
                return e.map(function(a) {
                    return g(b[a])
                }).join(a)
            })).join("\n")
        }, c.formatRows = function(a) {
            return a.map(f).join("\n")
        }, c
    }, $c.csv = $c.dsv(",", "text/csv"), $c.json = function(a, b) {
        return n(a, "application/json", p, b)
    };
    var hd = ["webkit", "ms", "moz", "Moz", "o", "O"];
    $c.event = null, $c.requote = function(a) {
        return a.replace(id, "\\$&")
    };
    var id = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        jd = {}.__proto__ ? function(a, b) {
            a.__proto__ = b
        } : function(a, b) {
            for (var c in b) a[c] = b[c]
        },
        kd = function(a, b) {
            return b.querySelector(a)
        },
        ld = function(a, b) {
            return b.querySelectorAll(a)
        },
        md = ed.matches || ed[q(ed, "matchesSelector")],
        nd = function(a, b) {
            return md.call(a, b)
        };
    "function" == typeof Sizzle && (kd = function(a, b) {
        return Sizzle(a, b)[0] || null
    }, ld = Sizzle, nd = Sizzle.matchesSelector), $c.selection = function() {
        return rd
    };
    var od = $c.selection.prototype = [];
    od.select = function(a) {
        var b, c, d, e, f = [];
        a = w(a);
        for (var g = -1, h = this.length; ++g < h;) {
            f.push(b = []), b.parentNode = (d = this[g]).parentNode;
            for (var i = -1, j = d.length; ++i < j;)(e = d[i]) ? (b.push(c = a.call(e, e.__data__, i, g)), c && "__data__" in e && (c.__data__ = e.__data__)) : b.push(null)
        }
        return v(f)
    }, od.selectAll = function(a) {
        var b, c, d = [];
        a = x(a);
        for (var e = -1, f = this.length; ++e < f;)
            for (var g = this[e], h = -1, i = g.length; ++h < i;)(c = g[h]) && (d.push(b = cd(a.call(c, c.__data__, h, e))), b.parentNode = c);
        return v(d)
    };
    var pd = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    $c.ns = {
        prefix: pd,
        qualify: function(a) {
            var b = a.indexOf(":"),
                c = a;
            return b >= 0 && (c = a.substring(0, b), a = a.substring(b + 1)), pd.hasOwnProperty(c) ? {
                space: pd[c],
                local: a
            } : a
        }
    }, od.attr = function(a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node();
                return a = $c.ns.qualify(a), a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
            }
            for (b in a) this.each(y(b, a[b]));
            return this
        }
        return this.each(y(a, b))
    }, od.classed = function(a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) {
                var c = this.node(),
                    d = (a = B(a)).length,
                    e = -1;
                if (b = c.classList) {
                    for (; ++e < d;)
                        if (!b.contains(a[e])) return !1
                } else
                    for (b = c.getAttribute("class"); ++e < d;)
                        if (!A(a[e]).test(b)) return !1; return !0
            }
            for (b in a) this.each(C(b, a[b]));
            return this
        }
        return this.each(C(a, b))
    }, od.style = function(a, b, c) {
        var d = arguments.length;
        if (3 > d) {
            if ("string" != typeof a) {
                2 > d && (b = "");
                for (c in a) this.each(E(c, a[c], b));
                return this
            }
            if (2 > d) return fd.getComputedStyle(this.node(), null).getPropertyValue(a);
            c = ""
        }
        return this.each(E(a, b, c))
    }, od.property = function(a, b) {
        if (arguments.length < 2) {
            if ("string" == typeof a) return this.node()[a];
            for (b in a) this.each(F(b, a[b]));
            return this
        }
        return this.each(F(a, b))
    }, od.text = function(a) {
        return arguments.length ? this.each("function" == typeof a ? function() {
            var b = a.apply(this, arguments);
            this.textContent = null == b ? "" : b
        } : null == a ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = a
        }) : this.node().textContent
    }, od.html = function(a) {
        return arguments.length ? this.each("function" == typeof a ? function() {
            var b = a.apply(this, arguments);
            this.innerHTML = null == b ? "" : b
        } : null == a ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = a
        }) : this.node().innerHTML
    }, od.append = function(a) {
        return a = G(a), this.select(function() {
            return this.appendChild(a.apply(this, arguments))
        })
    }, od.insert = function(a, b) {
        return a = G(a), b = w(b), this.select(function() {
            return this.insertBefore(a.apply(this, arguments), b.apply(this, arguments) || null)
        })
    }, od.remove = function() {
        return this.each(function() {
            var a = this.parentNode;
            a && a.removeChild(this)
        })
    }, od.data = function(a, c) {
        function d(a, d) {
            var e, f, g, h = a.length,
                l = d.length,
                m = Math.min(h, l),
                n = new Array(l),
                o = new Array(l),
                p = new Array(h);
            if (c) {
                var q, r = new b,
                    s = new b,
                    t = [];
                for (e = -1; ++e < h;) q = c.call(f = a[e], f.__data__, e), r.has(q) ? p[e] = f : r.set(q, f), t.push(q);
                for (e = -1; ++e < l;) q = c.call(d, g = d[e], e), (f = r.get(q)) ? (n[e] = f, f.__data__ = g) : s.has(q) || (o[e] = H(g)), s.set(q, g), r.remove(q);
                for (e = -1; ++e < h;) r.has(t[e]) && (p[e] = a[e])
            } else {
                for (e = -1; ++e < m;) f = a[e], g = d[e], f ? (f.__data__ = g, n[e] = f) : o[e] = H(g);
                for (; l > e; ++e) o[e] = H(d[e]);
                for (; h > e; ++e) p[e] = a[e]
            }
            o.update = n, o.parentNode = n.parentNode = p.parentNode = a.parentNode, i.push(o), j.push(n), k.push(p)
        }
        var e, f, g = -1,
            h = this.length;
        if (!arguments.length) {
            for (a = new Array(h = (e = this[0]).length); ++g < h;)(f = e[g]) && (a[g] = f.__data__);
            return a
        }
        var i = M([]),
            j = v([]),
            k = v([]);
        if ("function" == typeof a)
            for (; ++g < h;) d(e = this[g], a.call(e, e.parentNode.__data__, g));
        else
            for (; ++g < h;) d(e = this[g], a);
        return j.enter = function() {
            return i
        }, j.exit = function() {
            return k
        }, j
    }, od.datum = function(a) {
        return arguments.length ? this.property("__data__", a) : this.property("__data__")
    }, od.filter = function(a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = I(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []), b.parentNode = (c = this[f]).parentNode;
            for (var h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
        }
        return v(e)
    }, od.order = function() {
        for (var a = -1, b = this.length; ++a < b;)
            for (var c, d = this[a], e = d.length - 1, f = d[e]; --e >= 0;)(c = d[e]) && (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f), f = c);
        return this
    }, $c.ascending = J, od.sort = function(a) {
        a = K.apply(this, arguments);
        for (var b = -1, c = this.length; ++b < c;) this[b].sort(a);
        return this.order()
    }, od.each = function(a) {
        return L(this, function(b, c, d) {
            a.call(b, b.__data__, c, d)
        })
    }, od.call = function(a) {
        var b = cd(arguments);
        return a.apply(b[0] = this, b), this
    }, od.empty = function() {
        return !this.node()
    }, od.node = function() {
        for (var a = 0, b = this.length; b > a; a++)
            for (var c = this[a], d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                if (f) return f
            }
        return null
    }, od.size = function() {
        var a = 0;
        return this.each(function() {
            ++a
        }), a
    };
    var qd = [];
    $c.selection.enter = M, $c.selection.enter.prototype = qd, qd.append = od.append, qd.empty = od.empty, qd.node = od.node, qd.call = od.call, qd.size = od.size, qd.select = function(a) {
        for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i;) {
            d = (e = this[h]).update, g.push(b = []), b.parentNode = e.parentNode;
            for (var j = -1, k = e.length; ++j < k;)(f = e[j]) ? (b.push(d[j] = c = a.call(e.parentNode, f.__data__, j, h)), c.__data__ = f.__data__) : b.push(null)
        }
        return v(g)
    }, qd.insert = function(a, b) {
        return arguments.length < 2 && (b = N(this)), od.insert.call(this, a, b)
    }, od.transition = function() {
        for (var a, b, c = ke || ++ne, d = [], e = le || {
            time: Date.now(),
            ease: Jc,
            delay: 0,
            duration: 250
        }, f = -1, g = this.length; ++f < g;) {
            d.push(a = []);
            for (var h = this[f], i = -1, j = h.length; ++i < j;)(b = h[i]) && Zc(b, i, c, e), a.push(b)
        }
        return Rc(d, c)
    }, od.interrupt = function() {
        return this.each(O)
    }, $c.select = function(a) {
        var b = ["string" == typeof a ? kd(a, dd) : a];
        return b.parentNode = ed, v([b])
    }, $c.selectAll = function(a) {
        var b = cd("string" == typeof a ? ld(a, dd) : a);
        return b.parentNode = ed, v([b])
    };
    var rd = $c.select(ed);
    od.on = function(a, b, c) {
        var d = arguments.length;
        if (3 > d) {
            if ("string" != typeof a) {
                2 > d && (b = !1);
                for (c in a) this.each(P(c, a[c], b));
                return this
            }
            if (2 > d) return (d = this.node()["__on" + a]) && d._;
            c = !1
        }
        return this.each(P(a, b, c))
    };
    var sd = $c.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    sd.forEach(function(a) {
        "on" + a in dd && sd.remove(a)
    });
    var td = "onselectstart" in dd ? null : q(ed.style, "userSelect"),
        ud = 0;
    $c.mouse = function(a) {
        return T(a, t())
    };
    var vd = /WebKit/.test(fd.navigator.userAgent) ? -1 : 0;
    $c.touches = function(a, b) {
        return arguments.length < 2 && (b = t().touches), b ? cd(b).map(function(b) {
            var c = T(a, b);
            return c.identifier = b.identifier, c
        }) : []
    }, $c.behavior = {}, $c.behavior.drag = function() {
        function a() {
            this.on("mousedown.drag", e).on("touchstart.drag", f)
        }

        function b(a, b, e, f, g) {
            return function() {
                function h() {
                    var a, c, d = b(m, p);
                    d && (a = d[0] - t[0], c = d[1] - t[1], o |= a | c, t = d, n({
                        type: "drag",
                        x: d[0] + j[0],
                        y: d[1] + j[1],
                        dx: a,
                        dy: c
                    }))
                }

                function i() {
                    b(m, p) && (r.on(f + q, null).on(g + q, null), s(o && $c.event.target === l), n({
                        type: "dragend"
                    }))
                }
                var j, k = this,
                    l = $c.event.target,
                    m = k.parentNode,
                    n = c.of(k, arguments),
                    o = 0,
                    p = a(),
                    q = ".drag" + (null == p ? "" : "-" + p),
                    r = $c.select(e()).on(f + q, h).on(g + q, i),
                    s = S(),
                    t = b(m, p);
                d ? (j = d.apply(k, arguments), j = [j.x - t[0], j.y - t[1]]) : j = [0, 0], n({
                    type: "dragstart"
                })
            }
        }
        var c = u(a, "drag", "dragstart", "dragend"),
            d = null,
            e = b(r, $c.mouse, W, "mousemove", "mouseup"),
            f = b(U, $c.touch, V, "touchmove", "touchend");
        return a.origin = function(b) {
            return arguments.length ? (d = b, a) : d
        }, $c.rebind(a, c, "on")
    };
    var wd, xd, yd, zd, Ad, Bd = fd[q(fd, "requestAnimationFrame")] || function(a) {
        setTimeout(a, 17)
    };
    $c.timer = function(a, b, c) {
        var d = arguments.length;
        2 > d && (b = 0), 3 > d && (c = Date.now());
        var e = c + b,
            f = {
                c: a,
                t: e,
                f: !1,
                n: null
            };
        xd ? xd.n = f : wd = f, xd = f, yd || (zd = clearTimeout(zd), yd = 1, Bd(X))
    }, $c.timer.flush = function() {
        Y(), Z()
    }, $c.functor = $;
    var Cd = Math.abs;
    $c.geom = {}, $c.geom.quadtree = function(a, b, c, d, e) {
        function f(a) {
            function f(a, b, c, d, e, f, g, h) {
                if (!isNaN(c) && !isNaN(d))
                    if (a.leaf) {
                        var i = a.x,
                            k = a.y;
                        if (null != i)
                            if (Cd(i - c) + Cd(k - d) < .01) j(a, b, c, d, e, f, g, h);
                            else {
                                var l = a.point;
                                a.x = a.y = a.point = null, j(a, l, i, k, e, f, g, h), j(a, b, c, d, e, f, g, h)
                            } else a.x = c, a.y = d, a.point = b
                    } else j(a, b, c, d, e, f, g, h)
            }

            function j(a, b, c, d, e, g, h, i) {
                var j = .5 * (e + h),
                    k = .5 * (g + i),
                    l = c >= j,
                    m = d >= k,
                    n = (m << 1) + l;
                a.leaf = !1, a = a.nodes[n] || (a.nodes[n] = db()), l ? e = j : h = j, m ? g = k : i = k, f(a, b, c, d, e, g, h, i)
            }
            var k, l, m, n, o, p, q, r, s, t = $(h),
                u = $(i);
            if (null != b) p = b, q = c, r = d, s = e;
            else if (r = s = -(p = q = 1 / 0), l = [], m = [], o = a.length, g)
                for (n = 0; o > n; ++n) k = a[n], k.x < p && (p = k.x), k.y < q && (q = k.y), k.x > r && (r = k.x), k.y > s && (s = k.y), l.push(k.x), m.push(k.y);
            else
                for (n = 0; o > n; ++n) {
                    var v = +t(k = a[n], n),
                        w = +u(k, n);
                    p > v && (p = v), q > w && (q = w), v > r && (r = v), w > s && (s = w), l.push(v), m.push(w)
                }
            var x = r - p,
                y = s - q;
            x > y ? s = q + x : r = p + y;
            var z = db();
            if (z.add = function(a) {
                f(z, a, +t(a, ++n), +u(a, n), p, q, r, s)
            }, z.visit = function(a) {
                eb(a, z, p, q, r, s)
            }, n = -1, null == b) {
                for (; ++n < o;) f(z, a[n], l[n], m[n], p, q, r, s);
                --n
            } else a.forEach(z.add);
            return l = m = a = k = null, z
        }
        var g, h = _,
            i = ab;
        return (g = arguments.length) ? (h = bb, i = cb, 3 === g && (e = c, d = b, c = b = 0), f(a)) : (f.x = function(a) {
            return arguments.length ? (h = a, f) : h
        }, f.y = function(a) {
            return arguments.length ? (i = a, f) : i
        }, f.extent = function(a) {
            return arguments.length ? (null == a ? b = c = d = e = null : (b = +a[0][0], c = +a[0][1], d = +a[1][0], e = +a[1][1]), f) : null == b ? null : [
                [b, c],
                [d, e]
            ]
        }, f.size = function(a) {
            return arguments.length ? (null == a ? b = c = d = e = null : (b = c = 0, d = +a[0], e = +a[1]), f) : null == b ? null : [d - b, e - c]
        }, f)
    }, $c.layout = {}, $c.layout.force = function() {
        function a(a) {
            return function(b, c, d, e) {
                if (b.point !== a) {
                    var f = b.cx - a.x,
                        g = b.cy - a.y,
                        h = e - c,
                        i = f * f + g * g;
                    if (i > h * h / r) {
                        if (p > i) {
                            var j = b.charge / i;
                            a.px -= f * j, a.py -= g * j
                        }
                        return !0
                    }
                    if (b.point && i && p > i) {
                        var j = b.pointCharge / i;
                        a.px -= f * j, a.py -= g * j
                    }
                }
                return !b.charge
            }
        }

        function b(a) {
            a.px = $c.event.x, a.py = $c.event.y, h.resume()
        }
        var c, d, e, f, g, h = {},
            j = $c.dispatch("start", "tick", "end"),
            k = [1, 1],
            l = .9,
            m = Dd,
            n = Ed,
            o = -30,
            p = Fd,
            q = .1,
            r = .64,
            s = [],
            t = [];
        return h.tick = function() {
            if ((d *= .99) < .005) return j.end({
                type: "end",
                alpha: d = 0
            }), !0;
            var b, c, h, i, m, n, p, r, u, v = s.length,
                w = t.length;
            for (c = 0; w > c; ++c) h = t[c], i = h.source, m = h.target, r = m.x - i.x, u = m.y - i.y, (n = r * r + u * u) && (n = d * f[c] * ((n = Math.sqrt(n)) - e[c]) / n, r *= n, u *= n, m.x -= r * (p = i.weight / (m.weight + i.weight)), m.y -= u * p, i.x += r * (p = 1 - p), i.y += u * p);
            if ((p = d * q) && (r = k[0] / 2, u = k[1] / 2, c = -1, p))
                for (; ++c < v;) h = s[c], h.x += (r - h.x) * p, h.y += (u - h.y) * p;
            if (o)
                for (jb(b = $c.geom.quadtree(s), d, g), c = -1; ++c < v;)(h = s[c]).fixed || b.visit(a(h));
            for (c = -1; ++c < v;) h = s[c], h.fixed ? (h.x = h.px, h.y = h.py) : (h.x -= (h.px - (h.px = h.x)) * l, h.y -= (h.py - (h.py = h.y)) * l);
            j.tick({
                type: "tick",
                alpha: d
            })
        }, h.nodes = function(a) {
            return arguments.length ? (s = a, h) : s
        }, h.links = function(a) {
            return arguments.length ? (t = a, h) : t
        }, h.size = function(a) {
            return arguments.length ? (k = a, h) : k
        }, h.linkDistance = function(a) {
            return arguments.length ? (m = "function" == typeof a ? a : +a, h) : m
        }, h.distance = h.linkDistance, h.linkStrength = function(a) {
            return arguments.length ? (n = "function" == typeof a ? a : +a, h) : n
        }, h.friction = function(a) {
            return arguments.length ? (l = +a, h) : l
        }, h.charge = function(a) {
            return arguments.length ? (o = "function" == typeof a ? a : +a, h) : o
        }, h.chargeDistance = function(a) {
            return arguments.length ? (p = a * a, h) : Math.sqrt(p)
        }, h.gravity = function(a) {
            return arguments.length ? (q = +a, h) : q
        }, h.theta = function(a) {
            return arguments.length ? (r = a * a, h) : Math.sqrt(r)
        }, h.alpha = function(a) {
            return arguments.length ? (a = +a, d ? d = a > 0 ? a : 0 : a > 0 && (j.start({
                type: "start",
                alpha: d = a
            }), $c.timer(h.tick)), h) : d
        }, h.start = function() {
            function a(a, d) {
                if (!c) {
                    for (c = new Array(i), h = 0; i > h; ++h) c[h] = [];
                    for (h = 0; j > h; ++h) {
                        var e = t[h];
                        c[e.source.index].push(e.target), c[e.target.index].push(e.source)
                    }
                }
                for (var f, g = c[b], h = -1, j = g.length; ++h < j;)
                    if (!isNaN(f = g[h][a])) return f;
                return Math.random() * d
            }
            var b, c, d, i = s.length,
                j = t.length,
                l = k[0],
                p = k[1];
            for (b = 0; i > b; ++b)(d = s[b]).index = b, d.weight = 0;
            for (b = 0; j > b; ++b) d = t[b], "number" == typeof d.source && (d.source = s[d.source]), "number" == typeof d.target && (d.target = s[d.target]), ++d.source.weight, ++d.target.weight;
            for (b = 0; i > b; ++b) d = s[b], isNaN(d.x) && (d.x = a("x", l)), isNaN(d.y) && (d.y = a("y", p)), isNaN(d.px) && (d.px = d.x), isNaN(d.py) && (d.py = d.y);
            if (e = [], "function" == typeof m)
                for (b = 0; j > b; ++b) e[b] = +m.call(this, t[b], b);
            else
                for (b = 0; j > b; ++b) e[b] = m; if (f = [], "function" == typeof n)
                for (b = 0; j > b; ++b) f[b] = +n.call(this, t[b], b);
            else
                for (b = 0; j > b; ++b) f[b] = n; if (g = [], "function" == typeof o)
                for (b = 0; i > b; ++b) g[b] = +o.call(this, s[b], b);
            else
                for (b = 0; i > b; ++b) g[b] = o;
            return h.resume()
        }, h.resume = function() {
            return h.alpha(.1)
        }, h.stop = function() {
            return h.alpha(0)
        }, h.drag = function() {
            return c || (c = $c.behavior.drag().origin(i).on("dragstart.force", fb).on("drag.force", b).on("dragend.force", gb)), arguments.length ? void this.on("mouseover.force", hb).on("mouseout.force", ib).call(c) : c
        }, $c.rebind(h, j, "on")
    };
    var Dd = 20,
        Ed = 1,
        Fd = 1 / 0;
    $c.range = function(a, b, c) {
        if (arguments.length < 3 && (c = 1, arguments.length < 2 && (b = a, a = 0)), (b - a) / c === 1 / 0) throw new Error("infinite range");
        var d, e = [],
            f = kb(Cd(c)),
            g = -1;
        if (a *= f, b *= f, c *= f, 0 > c)
            for (;
                (d = a + c * ++g) > b;) e.push(d / f);
        else
            for (;
                (d = a + c * ++g) < b;) e.push(d / f);
        return e
    }, $c.color = lb, lb.prototype.toString = function() {
        return this.rgb() + ""
    }, $c.hsl = mb;
    var Gd = mb.prototype = new lb;
    Gd.brighter = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), new mb(this.h, this.s, this.l / a)
    }, Gd.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), new mb(this.h, this.s, a * this.l)
    }, Gd.rgb = function() {
        return nb(this.h, this.s, this.l)
    };
    var Hd = Math.PI,
        Id = 2 * Hd,
        Jd = Hd / 2,
        Kd = Hd / 180,
        Ld = 180 / Hd;
    $c.hcl = ob;
    var Md = ob.prototype = new lb;
    Md.brighter = function(a) {
        return new ob(this.h, this.c, Math.min(100, this.l + Nd * (arguments.length ? a : 1)))
    }, Md.darker = function(a) {
        return new ob(this.h, this.c, Math.max(0, this.l - Nd * (arguments.length ? a : 1)))
    }, Md.rgb = function() {
        return pb(this.h, this.c, this.l).rgb()
    }, $c.lab = qb;
    var Nd = 18,
        Od = .95047,
        Pd = 1,
        Qd = 1.08883,
        Rd = qb.prototype = new lb;
    Rd.brighter = function(a) {
        return new qb(Math.min(100, this.l + Nd * (arguments.length ? a : 1)), this.a, this.b)
    }, Rd.darker = function(a) {
        return new qb(Math.max(0, this.l - Nd * (arguments.length ? a : 1)), this.a, this.b)
    }, Rd.rgb = function() {
        return rb(this.l, this.a, this.b)
    }, $c.rgb = wb;
    var Sd = wb.prototype = new lb;
    Sd.brighter = function(a) {
        a = Math.pow(.7, arguments.length ? a : 1);
        var b = this.r,
            c = this.g,
            d = this.b,
            e = 30;
        return b || c || d ? (b && e > b && (b = e), c && e > c && (c = e), d && e > d && (d = e), new wb(Math.min(255, b / a), Math.min(255, c / a), Math.min(255, d / a))) : new wb(e, e, e)
    }, Sd.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), new wb(a * this.r, a * this.g, a * this.b)
    }, Sd.hsl = function() {
        return Ab(this.r, this.g, this.b)
    }, Sd.toString = function() {
        return "#" + yb(this.r) + yb(this.g) + yb(this.b)
    };
    var Td = $c.map({
       
    });
    Td.forEach(function(a, b) {
        Td.set(a, xb(b))
    }), $c.interpolateRgb = Eb, $c.interpolateObject = Fb, $c.interpolateArray = Gb, $c.interpolateNumber = Hb, $c.interpolateString = Ib;
    var Ud = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Vd = new RegExp(Ud.source, "g");
    $c.interpolate = Jb, $c.interpolators = [
        function(a, b) {
            var c = typeof b;
            return ("string" === c ? Td.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? Eb : Ib : b instanceof lb ? Eb : Array.isArray(b) ? Gb : "object" === c && isNaN(b) ? Fb : Hb)(a, b)
        }
    ], $c.interpolateRound = Kb, $c.round = function(a, b) {
        return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
    };
    var Wd = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Ob);
    $c.formatPrefix = function(a, b) {
        var c = 0;
        return a && (0 > a && (a *= -1), b && (a = $c.round(a, Nb(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, 3 * Math.floor((c - 1) / 3)))), Wd[8 + c / 3]
    };
    var Xd = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        Yd = $c.map({
            b: function(a) {
                return a.toString(2)
            },
            c: function(a) {
                return String.fromCharCode(a)
            },
            o: function(a) {
                return a.toString(8)
            },
            x: function(a) {
                return a.toString(16)
            },
            X: function(a) {
                return a.toString(16).toUpperCase()
            },
            g: function(a, b) {
                return a.toPrecision(b)
            },
            e: function(a, b) {
                return a.toExponential(b)
            },
            f: function(a, b) {
                return a.toFixed(b)
            },
            r: function(a, b) {
                return (a = $c.round(a, Nb(a, b))).toFixed(Math.max(0, Math.min(20, Nb(a * (1 + 1e-15), b))))
            }
        }),
        Zd = $c.time = {},
        $d = Date;
    Rb.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            _d.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            _d.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            _d.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            _d.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            _d.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            _d.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            _d.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            _d.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            _d.setTime.apply(this._, arguments)
        }
    };
    var _d = Date.prototype;
    Zd.year = Sb(function(a) {
        return a = Zd.day(a), a.setMonth(0, 1), a
    }, function(a, b) {
        a.setFullYear(a.getFullYear() + b)
    }, function(a) {
        return a.getFullYear()
    }), Zd.years = Zd.year.range, Zd.years.utc = Zd.year.utc.range, Zd.day = Sb(function(a) {
        var b = new $d(2e3, 0);
        return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b
    }, function(a, b) {
        a.setDate(a.getDate() + b)
    }, function(a) {
        return a.getDate() - 1
    }), Zd.days = Zd.day.range, Zd.days.utc = Zd.day.utc.range, Zd.dayOfYear = function(a) {
        var b = Zd.year(a);
        return Math.floor((a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(a, b) {
        b = 7 - b;
        var c = Zd[a] = Sb(function(a) {
            return (a = Zd.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7), a
        }, function(a, b) {
            a.setDate(a.getDate() + 7 * Math.floor(b))
        }, function(a) {
            var c = Zd.year(a).getDay();
            return Math.floor((Zd.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
        });
        Zd[a + "s"] = c.range, Zd[a + "s"].utc = c.utc.range, Zd[a + "OfYear"] = function(a) {
            var c = Zd.year(a).getDay();
            return Math.floor((Zd.dayOfYear(a) + (c + b) % 7) / 7)
        }
    }), Zd.week = Zd.sunday, Zd.weeks = Zd.sunday.range, Zd.weeks.utc = Zd.sunday.utc.range, Zd.weekOfYear = Zd.sundayOfYear;
    var ae = {
            "-": "",
            _: " ",
            0: "0"
        },
        be = /^\s*\d+/,
        ce = /^%/;
    $c.locale = function(a) {
        return {
            numberFormat: Pb(a),
            timeFormat: Ub(a)
        }
    };
    var de = $c.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    $c.format = de.numberFormat;
    var ee = {
            floor: i,
            ceil: i
        },
        fe = qc(J);
    $c.bisectLeft = fe.left, $c.bisect = $c.bisectRight = fe.right, $c.bisector = function(a) {
        return qc(1 === a.length ? function(b, c) {
            return J(a(b), c)
        } : a)
    }, $c.scale = {}, $c.scale.linear = function() {
        return tc([0, 1], [0, 1], Jb, !1)
    };
    var ge = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    $c.scale.pow = function() {
        return Bc($c.scale.linear(), 1, [0, 1])
    }, $c.scale.sqrt = function() {
        return $c.scale.pow().exponent(.5)
    };
    var he = function() {
            return i
        },
        ie = $c.map({
            linear: he,
            poly: Kc,
            quad: function() {
                return Hc
            },
            cubic: function() {
                return Ic
            },
            sin: function() {
                return Lc
            },
            exp: function() {
                return Mc
            },
            circle: function() {
                return Nc
            },
            elastic: Oc,
            back: Pc,
            bounce: function() {
                return Qc
            }
        }),
        je = $c.map({
            "in": i,
            out: Fc,
            "in-out": Gc,
            "out-in": function(a) {
                return Gc(Fc(a))
            }
        });
    $c.ease = function(a) {
        var b = a.indexOf("-"),
            c = b >= 0 ? a.substring(0, b) : a,
            d = b >= 0 ? a.substring(b + 1) : "in";
        return c = ie.get(c) || he, d = je.get(d) || i, Ec(d(c.apply(null, bd.call(arguments, 1))))
    };
    var ke, le, me = [],
        ne = 0;
    me.call = od.call, me.empty = od.empty, me.node = od.node, me.size = od.size, $c.transition = function(a) {
        return arguments.length ? ke ? a.transition() : a : rd.transition()
    }, $c.transition.prototype = me, me.select = function(a) {
        var b, c, d, e = this.id,
            f = [];
        a = w(a);
        for (var g = -1, h = this.length; ++g < h;) {
            f.push(b = []);
            for (var i = this[g], j = -1, k = i.length; ++j < k;)(d = i[j]) && (c = a.call(d, d.__data__, j, g)) ? ("__data__" in d && (c.__data__ = d.__data__), Zc(c, j, e, d.__transition__[e]), b.push(c)) : b.push(null)
        }
        return Rc(f, e)
    }, me.selectAll = function(a) {
        var b, c, d, e, f, g = this.id,
            h = [];
        a = x(a);
        for (var i = -1, j = this.length; ++i < j;)
            for (var k = this[i], l = -1, m = k.length; ++l < m;)
                if (d = k[l]) {
                    f = d.__transition__[g], c = a.call(d, d.__data__, l, i), h.push(b = []);
                    for (var n = -1, o = c.length; ++n < o;)(e = c[n]) && Zc(e, n, g, f), b.push(e)
                }
        return Rc(h, g)
    }, me.filter = function(a) {
        var b, c, d, e = [];
        "function" != typeof a && (a = I(a));
        for (var f = 0, g = this.length; g > f; f++) {
            e.push(b = []);
            for (var c = this[f], h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
        }
        return Rc(e, this.id)
    }, $c.transform = function(a) {
        var b = dd.createElementNS($c.ns.prefix.svg, "g");
        return ($c.transform = function(a) {
            if (null != a) {
                b.setAttribute("transform", a);
                var c = b.transform.baseVal.consolidate()
            }
            return new Sc(c ? c.matrix : oe)
        })(a)
    }, Sc.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var oe = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    $c.interpolateTransform = Wc, me.tween = function(a, b) {
        var c = this.id;
        return arguments.length < 2 ? this.node().__transition__[c].tween.get(a) : L(this, null == b ? function(b) {
            b.__transition__[c].tween.remove(a)
        } : function(d) {
            d.__transition__[c].tween.set(a, b)
        })
    }, me.attr = function(a, b) {
        function c() {
            this.removeAttribute(h)
        }

        function d() {
            this.removeAttributeNS(h.space, h.local)
        }

        function e(a) {
            return null == a ? c : (a += "", function() {
                var b, c = this.getAttribute(h);
                return c !== a && (b = g(c, a), function(a) {
                    this.setAttribute(h, b(a))
                })
            })
        }

        function f(a) {
            return null == a ? d : (a += "", function() {
                var b, c = this.getAttributeNS(h.space, h.local);
                return c !== a && (b = g(c, a), function(a) {
                    this.setAttributeNS(h.space, h.local, b(a))
                })
            })
        }
        if (arguments.length < 2) {
            for (b in a) this.attr(b, a[b]);
            return this
        }
        var g = "transform" == a ? Wc : Jb,
            h = $c.ns.qualify(a);
        return Xc(this, "attr." + a, b, h.local ? f : e)
    }, me.attrTween = function(a, b) {
        function c(a, c) {
            var d = b.call(this, a, c, this.getAttribute(e));
            return d && function(a) {
                this.setAttribute(e, d(a))
            }
        }

        function d(a, c) {
            var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
            return d && function(a) {
                this.setAttributeNS(e.space, e.local, d(a))
            }
        }
        var e = $c.ns.qualify(a);
        return this.tween("attr." + a, e.local ? d : c)
    }, me.style = function(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }

        function e(b) {
            return null == b ? d : (b += "", function() {
                var d, e = fd.getComputedStyle(this, null).getPropertyValue(a);
                return e !== b && (d = Jb(e, b), function(b) {
                    this.style.setProperty(a, d(b), c)
                })
            })
        }
        var f = arguments.length;
        if (3 > f) {
            if ("string" != typeof a) {
                2 > f && (b = "");
                for (c in a) this.style(c, a[c], b);
                return this
            }
            c = ""
        }
        return Xc(this, "style." + a, b, e)
    }, me.styleTween = function(a, b, c) {
        function d(d, e) {
            var f = b.call(this, d, e, fd.getComputedStyle(this, null).getPropertyValue(a));
            return f && function(b) {
                this.style.setProperty(a, f(b), c)
            }
        }
        return arguments.length < 3 && (c = ""), this.tween("style." + a, d)
    }, me.text = function(a) {
        return Xc(this, "text", a, Yc)
    }, me.remove = function() {
        return this.each("end.transition", function() {
            var a;
            this.__transition__.count < 2 && (a = this.parentNode) && a.removeChild(this)
        })
    }, me.ease = function(a) {
        var b = this.id;
        return arguments.length < 1 ? this.node().__transition__[b].ease : ("function" != typeof a && (a = $c.ease.apply($c, arguments)), L(this, function(c) {
            c.__transition__[b].ease = a
        }))
    }, me.delay = function(a) {
        var b = this.id;
        return arguments.length < 1 ? this.node().__transition__[b].delay : L(this, "function" == typeof a ? function(c, d, e) {
            c.__transition__[b].delay = +a.call(c, c.__data__, d, e)
        } : (a = +a, function(c) {
            c.__transition__[b].delay = a
        }))
    }, me.duration = function(a) {
        var b = this.id;
        return arguments.length < 1 ? this.node().__transition__[b].duration : L(this, "function" == typeof a ? function(c, d, e) {
            c.__transition__[b].duration = Math.max(1, a.call(c, c.__data__, d, e))
        } : (a = Math.max(1, a), function(c) {
            c.__transition__[b].duration = a
        }))
    }, me.each = function(a, b) {
        var c = this.id;
        if (arguments.length < 2) {
            var d = le,
                e = ke;
            ke = c, L(this, function(b, d, e) {
                le = b.__transition__[c], a.call(b, b.__data__, d, e)
            }), le = d, ke = e
        } else L(this, function(d) {
            var e = d.__transition__[c];
            (e.event || (e.event = $c.dispatch("start", "end"))).on(a, b)
        });
        return this
    }, me.transition = function() {
        for (var a, b, c, d, e = this.id, f = ++ne, g = [], h = 0, i = this.length; i > h; h++) {
            g.push(a = []);
            for (var b = this[h], j = 0, k = b.length; k > j; j++)(c = b[j]) && (d = Object.create(c.__transition__[e]), d.delay += d.duration, Zc(c, j, f, d)), a.push(c)
        }
        return Rc(g, f)
    }, "function" == typeof define && define.amd ? define($c) : "object" == typeof module && module.exports && (module.exports = $c), this.d3 = $c
}(), window.countryComparison = window.countryComparison || {},
function(a) {
    "use strict";
    a.chart = function() {
        function b() {
            y = d3.select("#chart").append("svg"), c(), z = $("#chart-legend")
        }

        function c() {
            r = window.innerWidth, s = window.innerHeight, t = {
                x: r / 3.4,
                y: s / 2
            }, u = .1 * Math.min(r, s), y.attr("width", r).attr("height", s)
        }

        function d(a) {
            v = a, w = [], a.forEach(function(a) {
                v[a.id] = a;
                var b = {
                    id: a.id,
                    name: a.name
                };
                w.push(b)
            })
        }

        function e(b) {
            return $.inArray(b.id, a.countries.getList()) > -1
        }

        function f() {
            x = w.filter(e), x.forEach(function(b) {
                var c = 0;
                a.params.getList().forEach(function(a) {
                    c += +v[b.id][a]
                }), b.value = +parseFloat(c).toFixed(2)
            });
            var b = d3.max(x, function(a) {
                return a.value
            });
            C = d3.scale.pow().exponent(5).domain([0, b]).range([30, u]), x.forEach(function(a) {
                a.radius = C(a.value)
            })
        }

        function g(a) {
            var b = a.radius / u;
            return d3.hsl(250 - 250 * b, b, .4 + .2 * b)
        }

        function h(a) {
            for (var b, c, d = a.text().split(/\s+/).reverse(), e = [], f = 1, g = "", h = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, i = h ? 75 : 80, j = a.text(null).append("tspan"); b = d.pop();) e.push(b), j.text(e.join(" ")), g = e.join(" "), j.node().getComputedTextLength() > i && (e.pop(), "" !== e.join("") && (f++, j.text(e.join(" ")), j = a.append("tspan").attr("x", 0).attr("dy", "1em").text(b)), e = [b]);
            c = i / Math.max(a.node().getBBox().width, a.node().getBBox().height) * 30, a.attr("font-size", c + "px"), a.attr("y", c - (f > 1 ? c * f * .12 : h ? .24 * c : 0) - a.node().getBBox().height / 2 + "px")
        }

        function i() {
            B = y.selectAll("g").data(x, function(a) {
                return a.id
            });
            B.enter().append("g").attr("class", function(b) {
                return b.id === a.countries.getHomeCountry() ? "home-country-circle" : ""
            }).each(function(a) {
                a.x = t.x, a.y = Math.round(Math.random() * s * .2 + .4 * s), d3.select(this).append("circle").attr("r", 0).attr("fill", d3.hsl(0, 0, .5)).transition().delay(500).duration(1e3).attr("fill", g).attr("r", function(a) {
                    return a.radius
                }), d3.select(this).append("text").attr("class", "country-id-text").text(function(a) {
                    return a.id.toUpperCase()
                }).attr("dy", "10px").attr("transform", "scale(0)").attr("opacity", 0).transition().delay(500).duration(1e3).attr("transform", function(a) {
                    return "scale(" + a.radius / 100 + ")"
                }).attr("opacity", function(a) {
                    return a.radius < F ? 1 : 0
                }), d3.select(this).append("text").attr("class", "country-name-text").text(function(a) {
                    return a.name.toUpperCase()
                }).attr("transform", "scale(0)").attr("opacity", 0).transition().delay(500).duration(1e3).attr("transform", function(a) {
                    return "scale(" + a.radius / 100 + ")"
                }).attr("opacity", function(a) {
                    return a.radius < F ? 0 : 1
                }), h(d3.select(this).select(".country-name-text"))
            })
        }

        function j() {
            k(), i(), B.data(x, function(a) {
                return a.id
            }).attr("class", function(b) {
                return b.id === a.countries.getHomeCountry() ? "home-country-circle" : ""
            }).each(function() {
                d3.select(this).select("circle").transition().duration(500).attr("fill", g).attr("r", function(a) {
                    return a.radius
                }), d3.select(this).selectAll(".country-id-text").transition().duration(500).attr("transform", function(a) {
                    return "scale(" + a.radius / 100 + ")"
                }).attr("opacity", function(a) {
                    return a.radius < F ? 1 : 0
                }), d3.select(this).selectAll(".country-name-text").transition().duration(500).attr("transform", function(a) {
                    return "scale(" + a.radius / 100 + ")"
                }).attr("opacity", function(a) {
                    return a.radius < F ? 0 : 1
                })
            })
        }

        function k() {
            B.data(x, function(a) {
                return a.id
            }).exit().each(function() {
                d3.select(this).select("circle").transition().duration(500).attr("fill", g).attr("r", 0), d3.select(this).selectAll("text").transition().duration(500).attr("transform", function() {
                    return "scale(0)"
                })
            }).transition().duration(500).remove()
        }

        function l() {
            A = d3.layout.force().nodes(x).size([r, s]), A.gravity(G).charge(function(a) {
                return .17 * -Math.pow(a.radius, 2)
            }).friction(.9).on("tick", function(a) {
                B.each(m(a.alpha)).attr("transform", function(a) {
                    return "translate(" + a.x + "," + a.y + ")"
                })
            }), A.start()
        }

        function m(a) {
            return function(b) {
                b.x = b.x + (t.x - b.x) * (H + .02) * a, b.y = b.y + (t.y - b.y) * (H + .02) * a
            }
        }

        function n(a) {
            z.html(a), o(!0), D = setTimeout(function() {
                z.fadeIn(500), D = setTimeout(function() {
                    z.fadeOut(500)
                }, Math.min(7e3, 80 * a.length))
            }, 1500)
        }

        function o(a) {
            clearTimeout(D), a || z.fadeOut(500)
        }

        function p() {
            $(window).on("resize", function() {
                clearTimeout(E), E = setTimeout(q, 500)
            })
        }

        function q() {
            c(), A.size([r, s]), a.chart.update()
        }
        var r, s, t, u, v, w, x, y, z, A, B, C, D, E, F = 18,
            G = .01,
            H = .09;
        return {
            setup: function(c) {
                b(), d(c), f(), i(), l(), p();
                var e = a.countries.getHomeCountryAndContinentName();
            },
            update: function(a) {
                f(), j(), A.nodes(x), A.start(), a ? n(a) : o()
            }
        }
    }()
}(window.countryComparison), window.countryComparison = window.countryComparison || {},
function(a) {
    "use strict";
    a.countries = function() {
        function b(b) {
            if (b) {
                var c = "";
                i.forEach(function(a) {
                    return a.name === b ? void(c = a.id) : void 0
                }), l = c, j.push(c), a.chart.update()
            }
            k.val("")
        }

        function c(b) {
            i.forEach(function(a) {
                a.continent === b && -1 === $.inArray(a.id, j) && j.push(a.id)
            }), a.chart.update()
        }

        function d(b) {
            i.forEach(function(a) {
                -1 !== $.inArray(a.id, j) && a.continent === b && a.id !== l && j.splice($.inArray(a.id, j), 1)
            }), a.chart.update()
        }

        function e() {
            k = $("#country-new");
            var a = [];
            i.forEach(function(b) {
                a.push(b.name)
            }), k.autocomplete({
                lookup: a,
                autoSelectFirst: !0,
                triggerSelectOnValidInput: !0,
                onSelect: function(a) {
                    b(a.value)
                },
                onInvalidateSelection: function() {
                    b("")
                }
            }), k.on("blur", function() {
                $(this).val("")
            })
        }

        function f() {
            m = $("#continents-list");
            var b, e = document.createDocumentFragment();
            for (var f in a.main.continents) b = document.createElement("li"), b.innerHTML = a.main.continents[f] + '<div class="continents-list-btns"><a class="continent-add"></a><a class="continent-remove"></a></div>', $(b).data("continent", f), e.appendChild(b);
            m.append(e), m.find("a").on("click", function(a) {
                var b = $(a.target),
                    e = b.parent().parent().data("continent");
                e && ("continent-add" === b.attr("class") ? c(e) : d(e))
            })
        }

        function g() {
            var a = $("#continents-list-container"),
                b = $("#continents-list");
            n = b.outerHeight(!0), b.css("top", -n), $("#continents-list-link").on("click", function() {
                a.height() > 0 ? b.animate({
                    top: -n
                }, {
                    duration: 200,
                    easing: "easingFunction",
                    complete: function() {
                        a.height(0)
                    }
                }) : (a.height(n), b.animate({
                    top: 0
                }, {
                    duration: 300,
                    easing: "easingFunction"
                }))
            }), $("#continents-list-block").on("mouseleave", function() {
                b.animate({
                    top: -n
                }, {
                    duration: 200,
                    easing: "easingFunction",
                    complete: function() {
                        a.height(0)
                    }
                })
            })
        }

        function h() {
            $("#best-countries-link").on("click", function() {
                var b, c, d = [],
                    e = a.countries.getHomeCountryAndContinentName().country,
                    f = a.params.getList().slice();
                if (f.length) {
                    for (j = [l], i.forEach(function(a) {
                        a.value = 0, f.forEach(function(b) {
                            a.value += parseFloat(a[b])
                        }), d.push(a)
                    }), d.sort(function(a, b) {
                        return a.value < b.value ? 1 : a.value > b.value ? -1 : 0
                    }), b = 0; 5 > b; b++) d[0].id !== l && j.push(d[0].id), d.splice(0, 1);
                    c = "These are the 10 most ", f.forEach(function(b, d) {
                        d > 0 && (c += d === f.length - 1 ? " and " : ", "), c += "<span>" + a.main.paramsList[b].title + "</span>"
                    }), c += " countries in the world, ", c += 10 === j.length ? "and <span>" + e + "</span> is one of them!" : " compared to <span>" + e + "</span>", a.chart.update(c)
                }
            })
        }
        var i, j, k, l, m, n;
        return {
            setup: function(a, b, c) {
                $("#country-selection").show(), i = a, j = b.slice(), l = c, e(), f(), g(), h()
            },
            getList: function() {
                return j
            },
            getHomeCountry: function() {
                return l
            },
            getHomeCountryAndContinentName: function() {
                var b = {};
                return i.forEach(function(c) {
                    return c.id === l ? (b.country = c.name, void(b.continent = a.main.continents[c.continent])) : void 0
                }), b
            }
        }
    }()
}(window.countryComparison), window.countryComparison = window.countryComparison || {},
function(a) {
    "use strict";
    a.params = function() {
        function b() {
            var b, g, h = document.createDocumentFragment();
            for (b in a.main.paramsList) g = document.createElement("li"), g.innerHTML = a.main.paramsList[b].title, $(g).data("param", b), h.appendChild(g);
            d.append(h), e = d.find("li"), e.on("click", function() {
                var b = $(this),
                    d = b.data("param");
                b.hasClass("selected") ? f.splice($.inArray(d, f), 1) : f.push(d), c(), a.chart.update()
            })
        }

        function c() {
            e.each(function(a, b) {
                var c = $(b);
                $.inArray(c.data("param"), f) > -1 ? c.addClass("selected") : c.removeClass("selected")
            })
        }
        var d, e, f = [];
        return {
            setup: function(a) {
                d = $("#params-list"), f = a.slice(), b(), c()
            },
            getList: function() {
                return f
            }
        }
    }()
}(window.countryComparison), window.countryComparison = window.countryComparison || {},
function(a) {
    "use strict";
    a.selection = function() {
        function b() {
            l = $("#setup-screens"), m = $("#title"), $(".screen").each(function(a) {
                $(this).data("screenNum", a + 1)
            })
        }

        function c(a) {
            l.animate({
                top: -100 * a + "%"
            }, {
                duration: 800,
                easing: "easingFunction",
                complete: function() {
                    2 === a && (l.remove(), m.remove())
                }
            }), 2 === a && m.animate({
                top: "-100%"
            }, {
                duration: 800,
                easing: "easingFunction"
            })
        }

        function d(a) {
            var b = [];
            o = $("#setup-screen-country button"), o.on("click", e), $(window).bind("keypress", function(a) {
                13 === a.which && s && e()
            }), n = $("#country-home"), a.forEach(function(a) {
                b.push(a.name)
            }), t = {
                lookup: b,
                autoSelectFirst: !0,
                triggerSelectOnValidInput: !0,
                onSelect: function() {
                    s = !0, o.addClass("visible")
                },
                onInvalidateSelection: function() {
                    s = !1, o.removeClass("visible"), n.val("")
                }
            }, n.autocomplete(t)
        }

        function e() {
            $(window).unbind("keypress");
            var a = n.val();
            k.forEach(function(b) {
                return b.name === a ? void(q = b.id) : void 0
            }), c(1), g()
        }

        function f() {
            $(window).unbind("keypress"), j(), c(2)
        }

        function g() {
            var b, c, d, e = $("#setup-params-list"),
                g = $("#setup-screen-params .suggestion"),
                h = document.createDocumentFragment(),
                i = !1;
            for (c in a.main.paramsList) d = document.createElement("li"), d.innerHTML = '<p class="param-title">' + a.main.paramsList[c].title + "</p><span>" + a.main.paramsList[c].description + "</span>", $(d).data("param", c), h.appendChild(d);
            e.append(h), b = e.find("li"), b.on("click", function() {
                var a = $(this),
                    c = a.data("param");
                a.hasClass("selected") ? u.splice($.inArray(c, u), 1) : u.push(c), b.each(function(a, b) {
                    var c = $(b);
                    $.inArray(c.data("param"), u) > -1 ? c.addClass("selected") : c.removeClass("selected")
                }), u.length > 2 ? (g.css("opacity", 0), p.addClass("visible"), i = !0) : (g.css("opacity", 1), p.removeClass("visible"), i = !1)
            }), p = $("#setup-screen-params button"), p.on("click", f), $(window).bind("keypress", function(a) {
                13 === a.which && i && f()
            })
        }

        function h() {
            $(window).on("resize", function() {
                clearTimeout(r), r = setTimeout(i, 500)
            })
        }

        function i() {
            n.autocomplete(t)
        }

        function j() {
            var b, c = [];
            c.push(q), k.forEach(function(a) {
                return a.id === q ? void(b = a.continent) : void 0
            }), k.forEach(function(a) {
                a.continent === b && a.id !== q && c.push(a.id)
            }), a.countries.setup(k, c, q), a.params.setup(u), a.chart.setup(k)
        }
        var k, l, m, n, o, p, q, r, s = !1,
            t = {},
            u = [];
        return {
            show: function(a) {
                k = JSON.parse(JSON.stringify(a)), b(), d(a), n.focus(), h()
            },
            setDefaultCountry: function(a) {
                n.val() || (a = a.toLowerCase(), k.forEach(function(b) {
                    return b.id === a ? (n.val(b.name), s = !0, o.addClass("visible"), void n.focus()) : void 0
                }))
            }
        }
    }()
}(window.countryComparison), window.countryComparison = window.countryComparison || {},
function(a) {
    "use strict";

    function b() {
        (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && $("body").addClass("low-performance")
    }

    function c() {
        $("input").on("blur", function() {
            window.scrollTo(0, 0), document.body.scrollTop = 0
        }), $(document).on("touchmove", function(a) {
            a.preventDefault()
        })
    }
    a.main = function() {
        var b = {
                col1: {
                    title: "Peu ou pas de pluie",
                    description: "Précipitations moyennes depuis 30 ans"
                },
                col2: {
                    title: "Une ville de gens riches",
                    description: "Revenu net moyen par contribuable"
                },
                col3: {
                    title: "Une ville jeune",
                    description: "% des moins de 30 ans"
                },
                col4: {
                    title: "Le respect de la loi",
                    description: "Taux d'infractions constatées pour 1000 hab."
                },
                col5: {
                    title: "Pas trop de voitures",
                    description: "Voitures par habitant"
                },
                col6: {
                    title: "Une ville de culture",
                    description: "% du budget culture et loisirs par commune"
                },
                col7: {
                    title: "Une pop. cosmopolite",
                    description: "% d'étrangers dans la population totale"
                },
                col8: {
                    title: "Le - d'enfants possible",
                    description: "% d'enfants de moins de 14 ans"
                }
                
               
            },
            c = {
                
                sa: "tout"
               
            };
        return {
            init: function(b) {
                a.selection.show(b)
            },
            paramsList: b,
            continents: c
        }
    }(), $.extend($.easing, {
        easingFunction: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        }
    }), $(document).ready(function() {
        c(), b(), d3.csv("data/countries.csv", function(b) {
            a.main.init(b), d3.json("http://ipinfo.io/geo", function(b) {
                b && b.city && a.selection.setDefaultCountry(b.city)
            })
        })
    })
}(window.countryComparison);
