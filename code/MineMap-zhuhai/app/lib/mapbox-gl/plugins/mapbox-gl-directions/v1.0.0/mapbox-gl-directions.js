!function t(e, n, r) {
    function i(s, a) {
        if (!n[s]) {
            if (!e[s]) {
                var u = "function" == typeof require && require;
                if (!a && u)return u(s, !0);
                if (o)return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var f = n[s] = {exports: {}};
            e[s][0].call(f.exports, function (t) {
                var n = e[s][1][t];
                return i(n ? n : t)
            }, f, f.exports, t, e, n, r)
        }
        return n[s].exports
    }

    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)i(r[s]);
    return i
}({
    1: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function i(t) {
            return new s["default"](t)
        }

        var o = t("./src/directions"), s = r(o);
        window.mapboxgl ? mapboxgl.Directions = i : "undefined" != typeof e && (e.exports = i)
    }, {"./src/directions": 115}],
    2: [function (t, e, n) {
        function r(t, e) {
            return d.isUndefined(e) ? "" + e : d.isNumber(e) && !isFinite(e) ? e.toString() : d.isFunction(e) || d.isRegExp(e) ? e.toString() : e
        }

        function i(t, e) {
            return d.isString(t) ? t.length < e ? t : t.slice(0, e) : t
        }

        function o(t) {
            return i(JSON.stringify(t.actual, r), 128) + " " + t.operator + " " + i(JSON.stringify(t.expected, r), 128)
        }

        function s(t, e, n, r, i) {
            throw new m.AssertionError({message: n, actual: t, expected: e, operator: r, stackStartFunction: i})
        }

        function a(t, e) {
            t || s(t, !0, e, "==", m.ok)
        }

        function u(t, e) {
            if (t === e)return !0;
            if (d.isBuffer(t) && d.isBuffer(e)) {
                if (t.length != e.length)return !1;
                for (var n = 0; n < t.length; n++)if (t[n] !== e[n])return !1;
                return !0
            }
            return d.isDate(t) && d.isDate(e) ? t.getTime() === e.getTime() : d.isRegExp(t) && d.isRegExp(e) ? t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase : d.isObject(t) || d.isObject(e) ? f(t, e) : t == e
        }

        function c(t) {
            return "[object Arguments]" == Object.prototype.toString.call(t)
        }

        function f(t, e) {
            if (d.isNullOrUndefined(t) || d.isNullOrUndefined(e))return !1;
            if (t.prototype !== e.prototype)return !1;
            if (d.isPrimitive(t) || d.isPrimitive(e))return t === e;
            var n = c(t), r = c(e);
            if (n && !r || !n && r)return !1;
            if (n)return t = h.call(t), e = h.call(e), u(t, e);
            var i, o, s = g(t), a = g(e);
            if (s.length != a.length)return !1;
            for (s.sort(), a.sort(), o = s.length - 1; o >= 0; o--)if (s[o] != a[o])return !1;
            for (o = s.length - 1; o >= 0; o--)if (i = s[o], !u(t[i], e[i]))return !1;
            return !0
        }

        function l(t, e) {
            return t && e ? "[object RegExp]" == Object.prototype.toString.call(e) ? e.test(t) : t instanceof e ? !0 : e.call({}, t) === !0 ? !0 : !1 : !1
        }

        function p(t, e, n, r) {
            var i;
            d.isString(n) && (r = n, n = null);
            try {
                e()
            } catch (o) {
                i = o
            }
            if (r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), t && !i && s(i, n, "Missing expected exception" + r), !t && l(i, n) && s(i, n, "Got unwanted exception" + r), t && i && n && !l(i, n) || !t && i)throw i
        }

        var d = t("util/"), h = Array.prototype.slice, y = Object.prototype.hasOwnProperty, m = e.exports = a;
        m.AssertionError = function (t) {
            this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = o(this), this.generatedMessage = !0);
            var e = t.stackStartFunction || s;
            if (Error.captureStackTrace)Error.captureStackTrace(this, e); else {
                var n = new Error;
                if (n.stack) {
                    var r = n.stack, i = e.name, a = r.indexOf("\n" + i);
                    if (a >= 0) {
                        var u = r.indexOf("\n", a + 1);
                        r = r.substring(u + 1)
                    }
                    this.stack = r
                }
            }
        }, d.inherits(m.AssertionError, Error), m.fail = s, m.ok = a, m.equal = function (t, e, n) {
            t != e && s(t, e, n, "==", m.equal)
        }, m.notEqual = function (t, e, n) {
            t == e && s(t, e, n, "!=", m.notEqual)
        }, m.deepEqual = function (t, e, n) {
            u(t, e) || s(t, e, n, "deepEqual", m.deepEqual)
        }, m.notDeepEqual = function (t, e, n) {
            u(t, e) && s(t, e, n, "notDeepEqual", m.notDeepEqual)
        }, m.strictEqual = function (t, e, n) {
            t !== e && s(t, e, n, "===", m.strictEqual)
        }, m.notStrictEqual = function (t, e, n) {
            t === e && s(t, e, n, "!==", m.notStrictEqual)
        }, m["throws"] = function (t, e, n) {
            p.apply(this, [!0].concat(h.call(arguments)))
        }, m.doesNotThrow = function (t, e) {
            p.apply(this, [!1].concat(h.call(arguments)))
        }, m.ifError = function (t) {
            if (t)throw t
        };
        var g = Object.keys || function (t) {
                var e = [];
                for (var n in t)y.call(t, n) && e.push(n);
                return e
            }
    }, {"util/": 6}],
    3: [function (t, e, n) {
        "function" == typeof Object.create ? e.exports = function (t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function (t, e) {
            t.super_ = e;
            var n = function () {
            };
            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
        }
    }, {}],
    4: [function (t, e, n) {
        function r() {
            f = !1, a.length ? c = a.concat(c) : l = -1, c.length && i()
        }

        function i() {
            if (!f) {
                var t = setTimeout(r);
                f = !0;
                for (var e = c.length; e;) {
                    for (a = c, c = []; ++l < e;)a && a[l].run();
                    l = -1, e = c.length
                }
                a = null, f = !1, clearTimeout(t)
            }
        }

        function o(t, e) {
            this.fun = t, this.array = e
        }

        function s() {
        }

        var a, u = e.exports = {}, c = [], f = !1, l = -1;
        u.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
            c.push(new o(t, e)), 1 !== c.length || f || setTimeout(i, 0)
        }, o.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = s, u.addListener = s, u.once = s, u.off = s, u.removeListener = s, u.removeAllListeners = s, u.emit = s, u.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, u.cwd = function () {
            return "/"
        }, u.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, u.umask = function () {
            return 0
        }
    }, {}],
    5: [function (t, e, n) {
        e.exports = function (t) {
            return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
        }
    }, {}],
    6: [function (t, e, n) {
        (function (e, r) {
            function i(t, e) {
                var r = {seen: [], stylize: s};
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), y(e) ? r.showHidden = e : e && n._extend(r, e), w(r.showHidden) && (r.showHidden = !1), w(r.depth) && (r.depth = 2), w(r.colors) && (r.colors = !1), w(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = o), u(r, t, r.depth)
            }

            function o(t, e) {
                var n = i.styles[e];
                return n ? "[" + i.colors[n][0] + "m" + t + "[" + i.colors[n][1] + "m" : t
            }

            function s(t, e) {
                return t
            }

            function a(t) {
                var e = {};
                return t.forEach(function (t, n) {
                    e[t] = !0
                }), e
            }

            function u(t, e, r) {
                if (t.customInspect && e && A(e.inspect) && e.inspect !== n.inspect && (!e.constructor || e.constructor.prototype !== e)) {
                    var i = e.inspect(r, t);
                    return b(i) || (i = u(t, i, r)), i
                }
                var o = c(t, e);
                if (o)return o;
                var s = Object.keys(e), y = a(s);
                if (t.showHidden && (s = Object.getOwnPropertyNames(e)), T(e) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))return f(e);
                if (0 === s.length) {
                    if (A(e)) {
                        var m = e.name ? ": " + e.name : "";
                        return t.stylize("[Function" + m + "]", "special")
                    }
                    if (x(e))return t.stylize(RegExp.prototype.toString.call(e), "regexp");
                    if (j(e))return t.stylize(Date.prototype.toString.call(e), "date");
                    if (T(e))return f(e)
                }
                var g = "", v = !1, _ = ["{", "}"];
                if (h(e) && (v = !0, _ = ["[", "]"]), A(e)) {
                    var w = e.name ? ": " + e.name : "";
                    g = " [Function" + w + "]"
                }
                if (x(e) && (g = " " + RegExp.prototype.toString.call(e)), j(e) && (g = " " + Date.prototype.toUTCString.call(e)), T(e) && (g = " " + f(e)), 0 === s.length && (!v || 0 == e.length))return _[0] + g + _[1];
                if (0 > r)return x(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
                t.seen.push(e);
                var E;
                return E = v ? l(t, e, r, y, s) : s.map(function (n) {
                    return p(t, e, r, y, n, v)
                }), t.seen.pop(), d(E, g, _)
            }

            function c(t, e) {
                if (w(e))return t.stylize("undefined", "undefined");
                if (b(e)) {
                    var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return t.stylize(n, "string")
                }
                return v(e) ? t.stylize("" + e, "number") : y(e) ? t.stylize("" + e, "boolean") : m(e) ? t.stylize("null", "null") : void 0
            }

            function f(t) {
                return "[" + Error.prototype.toString.call(t) + "]"
            }

            function l(t, e, n, r, i) {
                for (var o = [], s = 0, a = e.length; a > s; ++s)k(e, String(s)) ? o.push(p(t, e, n, r, String(s), !0)) : o.push("");
                return i.forEach(function (i) {
                    i.match(/^\d+$/) || o.push(p(t, e, n, r, i, !0))
                }), o
            }

            function p(t, e, n, r, i, o) {
                var s, a, c;
                if (c = Object.getOwnPropertyDescriptor(e, i) || {value: e[i]}, c.get ? a = c.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : c.set && (a = t.stylize("[Setter]", "special")), k(r, i) || (s = "[" + i + "]"), a || (t.seen.indexOf(c.value) < 0 ? (a = m(n) ? u(t, c.value, null) : u(t, c.value, n - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function (t) {
                        return "  " + t
                    }).join("\n").substr(2) : "\n" + a.split("\n").map(function (t) {
                        return "   " + t
                    }).join("\n"))) : a = t.stylize("[Circular]", "special")), w(s)) {
                    if (o && i.match(/^\d+$/))return a;
                    s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
                }
                return s + ": " + a
            }

            function d(t, e, n) {
                var r = 0, i = t.reduce(function (t, e) {
                    return r++, e.indexOf("\n") >= 0 && r++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0);
                return i > 60 ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1]
            }

            function h(t) {
                return Array.isArray(t)
            }

            function y(t) {
                return "boolean" == typeof t
            }

            function m(t) {
                return null === t
            }

            function g(t) {
                return null == t
            }

            function v(t) {
                return "number" == typeof t
            }

            function b(t) {
                return "string" == typeof t
            }

            function _(t) {
                return "symbol" == typeof t
            }

            function w(t) {
                return void 0 === t
            }

            function x(t) {
                return E(t) && "[object RegExp]" === I(t)
            }

            function E(t) {
                return "object" == typeof t && null !== t
            }

            function j(t) {
                return E(t) && "[object Date]" === I(t)
            }

            function T(t) {
                return E(t) && ("[object Error]" === I(t) || t instanceof Error)
            }

            function A(t) {
                return "function" == typeof t
            }

            function S(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t
            }

            function I(t) {
                return Object.prototype.toString.call(t)
            }

            function O(t) {
                return 10 > t ? "0" + t.toString(10) : t.toString(10)
            }

            function R() {
                var t = new Date, e = [O(t.getHours()), O(t.getMinutes()), O(t.getSeconds())].join(":");
                return [t.getDate(), C[t.getMonth()], e].join(" ")
            }

            function k(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            var D = /%[sdj%]/g;
            n.format = function (t) {
                if (!b(t)) {
                    for (var e = [], n = 0; n < arguments.length; n++)e.push(i(arguments[n]));
                    return e.join(" ")
                }
                for (var n = 1, r = arguments, o = r.length, s = String(t).replace(D, function (t) {
                    if ("%%" === t)return "%";
                    if (n >= o)return t;
                    switch (t) {
                        case"%s":
                            return String(r[n++]);
                        case"%d":
                            return Number(r[n++]);
                        case"%j":
                            try {
                                return JSON.stringify(r[n++])
                            } catch (e) {
                                return "[Circular]"
                            }
                        default:
                            return t
                    }
                }), a = r[n]; o > n; a = r[++n])s += m(a) || !E(a) ? " " + a : " " + i(a);
                return s
            }, n.deprecate = function (t, i) {
                function o() {
                    if (!s) {
                        if (e.throwDeprecation)throw new Error(i);
                        e.traceDeprecation ? console.trace(i) : console.error(i), s = !0
                    }
                    return t.apply(this, arguments)
                }

                if (w(r.process))return function () {
                    return n.deprecate(t, i).apply(this, arguments)
                };
                if (e.noDeprecation === !0)return t;
                var s = !1;
                return o
            };
            var N, P = {};
            n.debuglog = function (t) {
                if (w(N) && (N = e.env.NODE_DEBUG || ""), t = t.toUpperCase(), !P[t])if (new RegExp("\\b" + t + "\\b", "i").test(N)) {
                    var r = e.pid;
                    P[t] = function () {
                        var e = n.format.apply(n, arguments);
                        console.error("%s %d: %s", t, r, e)
                    }
                } else P[t] = function () {
                };
                return P[t]
            }, n.inspect = i, i.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, i.styles = {
                special: "cyan",
                number: "yellow",
                "boolean": "yellow",
                undefined: "grey",
                "null": "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, n.isArray = h, n.isBoolean = y, n.isNull = m, n.isNullOrUndefined = g, n.isNumber = v, n.isString = b, n.isSymbol = _, n.isUndefined = w, n.isRegExp = x, n.isObject = E, n.isDate = j, n.isError = T, n.isFunction = A, n.isPrimitive = S, n.isBuffer = t("./support/isBuffer");
            var C = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            n.log = function () {
                console.log("%s - %s", R(), n.format.apply(n, arguments))
            }, n.inherits = t("inherits"), n._extend = function (t, e) {
                if (!e || !E(e))return t;
                for (var n = Object.keys(e), r = n.length; r--;)t[n[r]] = e[n[r]];
                return t
            }
        }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./support/isBuffer": 5, _process: 4, inherits: 3}],
    7: [function (t, e, n) {
        function r(t, e, n) {
            function r() {
                g && clearTimeout(g), d && clearTimeout(d), b = 0, d = g = v = void 0
            }

            function o(e, n) {
                n && clearTimeout(n), d = g = v = void 0, e && (b = c(), h = t.apply(m, p), g || d || (p = m = void 0))
            }

            function u() {
                var t = e - (c() - y);
                0 >= t || t > e ? o(v, d) : g = setTimeout(u, t)
            }

            function f() {
                o(w, g)
            }

            function l() {
                if (p = arguments, y = c(), m = this, v = w && (g || !x), _ === !1)var n = x && !g; else {
                    d || x || (b = y);
                    var r = _ - (y - b), i = 0 >= r || r > _;
                    i ? (d && (d = clearTimeout(d)), b = y, h = t.apply(m, p)) : d || (d = setTimeout(f, r))
                }
                return i && g ? g = clearTimeout(g) : g || e === _ || (g = setTimeout(u, e)), n && (i = !0, h = t.apply(m, p)), !i || g || d || (p = m = void 0), h
            }

            var p, d, h, y, m, g, v, b = 0, _ = !1, w = !0;
            if ("function" != typeof t)throw new TypeError(s);
            if (e = 0 > e ? 0 : +e || 0, n === !0) {
                var x = !0;
                w = !1
            } else i(n) && (x = !!n.leading, _ = "maxWait" in n && a(+n.maxWait || 0, e), w = "trailing" in n ? !!n.trailing : w);
            return l.cancel = r, l
        }

        function i(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        var o = t("lodash._getnative"), s = "Expected a function", a = Math.max, u = o(Date, "now"), c = u || function () {
                return (new Date).getTime()
            };
        e.exports = r
    }, {"lodash._getnative": 8}],
    8: [function (t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }

        function i(t, e) {
            var n = null == t ? void 0 : t[e];
            return a(n) ? n : void 0
        }

        function o(t) {
            return s(t) && d.call(t) == u
        }

        function s(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function a(t) {
            return null == t ? !1 : o(t) ? h.test(l.call(t)) : r(t) && c.test(t)
        }

        var u = "[object Function]", c = /^\[object .+?Constructor\]$/, f = Object.prototype, l = Function.prototype.toString, p = f.hasOwnProperty, d = f.toString, h = RegExp("^" + l.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = i
    }, {}],
    9: [function (t, e, n) {
        function r(t, e, n, r) {
            n = "function" == typeof n ? o(n, r, 3) : void 0;
            var s = n ? n(t, e) : void 0;
            return void 0 === s ? i(t, e, n) : !!s
        }

        var i = t("lodash._baseisequal"), o = t("lodash._bindcallback");
        e.exports = r
    }, {"lodash._baseisequal": 10, "lodash._bindcallback": 16}],
    10: [function (t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }

        function i(t, e) {
            for (var n = -1, r = t.length; ++n < r;)if (e(t[n], n, t))return !0;
            return !1
        }

        function o(t, e, n, i, a, u) {
            return t === e ? !0 : null == t || null == e || !f(t) && !r(e) ? t !== t && e !== e : s(t, e, o, n, i, a, u)
        }

        function s(t, e, n, r, i, o, s) {
            var f = l(t), d = l(e), m = y, g = y;
            f || (m = T.call(t), m == h ? m = _ : m != _ && (f = p(t))), d || (g = T.call(e), g == h ? g = _ : g != _ && (d = p(e)));
            var v = m == _, b = g == _, w = m == g;
            if (w && !f && !v)return u(t, e, m);
            if (!i) {
                var x = v && j.call(t, "__wrapped__"), E = b && j.call(e, "__wrapped__");
                if (x || E)return n(x ? t.value() : t, E ? e.value() : e, r, i, o, s)
            }
            if (!w)return !1;
            o || (o = []), s || (s = []);
            for (var A = o.length; A--;)if (o[A] == t)return s[A] == e;
            o.push(t), s.push(e);
            var S = (f ? a : c)(t, e, n, r, i, o, s);
            return o.pop(), s.pop(), S
        }

        function a(t, e, n, r, o, s, a) {
            var u = -1, c = t.length, f = e.length;
            if (c != f && !(o && f > c))return !1;
            for (; ++u < c;) {
                var l = t[u], p = e[u], d = r ? r(o ? p : l, o ? l : p, u) : void 0;
                if (void 0 !== d) {
                    if (d)continue;
                    return !1
                }
                if (o) {
                    if (!i(e, function (t) {
                            return l === t || n(l, t, r, o, s, a)
                        }))return !1
                } else if (l !== p && !n(l, p, r, o, s, a))return !1
            }
            return !0
        }

        function u(t, e, n) {
            switch (n) {
                case m:
                case g:
                    return +t == +e;
                case v:
                    return t.name == e.name && t.message == e.message;
                case b:
                    return t != +t ? e != +e : t == +e;
                case w:
                case x:
                    return t == e + ""
            }
            return !1
        }

        function c(t, e, n, r, i, o, s) {
            var a = d(t), u = a.length, c = d(e), f = c.length;
            if (u != f && !i)return !1;
            for (var l = u; l--;) {
                var p = a[l];
                if (!(i ? p in e : j.call(e, p)))return !1
            }
            for (var h = i; ++l < u;) {
                p = a[l];
                var y = t[p], m = e[p], g = r ? r(i ? m : y, i ? y : m, p) : void 0;
                if (!(void 0 === g ? n(y, m, r, i, o, s) : g))return !1;
                h || (h = "constructor" == p)
            }
            if (!h) {
                var v = t.constructor, b = e.constructor;
                if (v != b && "constructor" in t && "constructor" in e && !("function" == typeof v && v instanceof v && "function" == typeof b && b instanceof b))return !1
            }
            return !0
        }

        function f(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        var l = t("lodash.isarray"), p = t("lodash.istypedarray"), d = t("lodash.keys"), h = "[object Arguments]", y = "[object Array]", m = "[object Boolean]", g = "[object Date]", v = "[object Error]", b = "[object Number]", _ = "[object Object]", w = "[object RegExp]", x = "[object String]", E = Object.prototype, j = E.hasOwnProperty, T = E.toString;
        e.exports = o
    }, {"lodash.isarray": 11, "lodash.istypedarray": 12, "lodash.keys": 13}],
    11: [function (t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }

        function i(t, e) {
            var n = null == t ? void 0 : t[e];
            return u(n) ? n : void 0
        }

        function o(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && v >= t
        }

        function s(t) {
            return a(t) && y.call(t) == f
        }

        function a(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function u(t) {
            return null == t ? !1 : s(t) ? m.test(d.call(t)) : r(t) && l.test(t)
        }

        var c = "[object Array]", f = "[object Function]", l = /^\[object .+?Constructor\]$/, p = Object.prototype, d = Function.prototype.toString, h = p.hasOwnProperty, y = p.toString, m = RegExp("^" + d.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), g = i(Array, "isArray"), v = 9007199254740991, b = g || function (t) {
                return r(t) && o(t.length) && y.call(t) == c
            };
        e.exports = b
    }, {}],
    12: [function (t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }

        function i(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && D >= t
        }

        function o(t) {
            return r(t) && i(t.length) && !!O[k.call(t)]
        }

        var s = "[object Arguments]", a = "[object Array]", u = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Function]", p = "[object Map]", d = "[object Number]", h = "[object Object]", y = "[object RegExp]", m = "[object Set]", g = "[object String]", v = "[object WeakMap]", b = "[object ArrayBuffer]", _ = "[object Float32Array]", w = "[object Float64Array]", x = "[object Int8Array]", E = "[object Int16Array]", j = "[object Int32Array]", T = "[object Uint8Array]", A = "[object Uint8ClampedArray]", S = "[object Uint16Array]", I = "[object Uint32Array]", O = {};
        O[_] = O[w] = O[x] = O[E] = O[j] = O[T] = O[A] = O[S] = O[I] = !0, O[s] = O[a] = O[b] = O[u] = O[c] = O[f] = O[l] = O[p] = O[d] = O[h] = O[y] = O[m] = O[g] = O[v] = !1;
        var R = Object.prototype, k = R.toString, D = 9007199254740991;
        e.exports = o
    }, {}],
    13: [function (t, e, n) {
        function r(t) {
            return function (e) {
                return null == e ? void 0 : e[t]
            }
        }

        function i(t) {
            return null != t && s(v(t))
        }

        function o(t, e) {
            return t = "number" == typeof t || d.test(t) ? +t : -1, e = null == e ? g : e, t > -1 && t % 1 == 0 && e > t
        }

        function s(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && g >= t
        }

        function a(t) {
            for (var e = c(t), n = e.length, r = n && t.length, i = !!r && s(r) && (p(t) || l(t)), a = -1, u = []; ++a < n;) {
                var f = e[a];
                (i && o(f, r) || y.call(t, f)) && u.push(f)
            }
            return u
        }

        function u(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function c(t) {
            if (null == t)return [];
            u(t) || (t = Object(t));
            var e = t.length;
            e = e && s(e) && (p(t) || l(t)) && e || 0;
            for (var n = t.constructor, r = -1, i = "function" == typeof n && n.prototype === t, a = Array(e), c = e > 0; ++r < e;)a[r] = r + "";
            for (var f in t)c && o(f, e) || "constructor" == f && (i || !y.call(t, f)) || a.push(f);
            return a
        }

        var f = t("lodash._getnative"), l = t("lodash.isarguments"), p = t("lodash.isarray"), d = /^\d+$/, h = Object.prototype, y = h.hasOwnProperty, m = f(Object, "keys"), g = 9007199254740991, v = r("length"), b = m ? function (t) {
            var e = null == t ? void 0 : t.constructor;
            return "function" == typeof e && e.prototype === t || "function" != typeof t && i(t) ? a(t) : u(t) ? m(t) : []
        } : a;
        e.exports = b
    }, {"lodash._getnative": 14, "lodash.isarguments": 15, "lodash.isarray": 11}],
    14: [function (t, e, n) {
        arguments[4][8][0].apply(n, arguments)
    }, {dup: 8}],
    15: [function (t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }

        function i(t) {
            return function (e) {
                return null == e ? void 0 : e[t]
            }
        }

        function o(t) {
            return null != t && s(p(t))
        }

        function s(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && l >= t
        }

        function a(t) {
            return r(t) && o(t) && c.call(t, "callee") && !f.call(t, "callee")
        }

        var u = Object.prototype, c = u.hasOwnProperty, f = u.propertyIsEnumerable, l = 9007199254740991, p = i("length");
        e.exports = a
    }, {}],
    16: [function (t, e, n) {
        function r(t, e, n) {
            if ("function" != typeof t)return i;
            if (void 0 === e)return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i)
                    };
                case 4:
                    return function (n, r, i, o) {
                        return t.call(e, n, r, i, o)
                    };
                case 5:
                    return function (n, r, i, o, s) {
                        return t.call(e, n, r, i, o, s)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }

        function i(t) {
            return t
        }

        e.exports = r
    }, {}],
    17: [function (t, e, n) {
        function r(t) {
            return "\\" + T[t]
        }

        function i(t) {
            return !!t && "object" == typeof t
        }

        function o(t, e, n, r) {
            return void 0 !== t && S.call(r, n) ? t : e
        }

        function s(t, e, n) {
            for (var r = -1, i = y(e), o = i.length; ++r < o;) {
                var s = i[r], a = t[s], u = n(a, e[s], s, t, e);
                (u === u ? u === a : a !== a) && (void 0 !== a || s in t) || (t[s] = u)
            }
            return t
        }

        function a(t, e) {
            return null == e ? t : f(e, y(e), t)
        }

        function u(t) {
            return i(t) && "string" == typeof t.message && I.call(t) == v
        }

        function c(t, e, n) {
            var i = g.imports._.templateSettings || g;
            n && d(t, e, n) && (e = n = void 0), t = l(t), e = s(a({}, n || e), i, o);
            var c, f, m = s(a({}, e.imports), i.imports, o), v = y(m), T = p(m, v), A = 0, S = e.interpolate || E, I = "__p += '", R = RegExp((e.escape || E).source + "|" + S.source + "|" + (S === h ? x : E).source + "|" + (e.evaluate || E).source + "|$", "g"), k = "sourceURL" in e ? "//# sourceURL=" + e.sourceURL + "\n" : "";
            t.replace(R, function (e, n, i, o, s, a) {
                return i || (i = o), I += t.slice(A, a).replace(j, r), n && (c = !0, I += "' +\n__e(" + n + ") +\n'"), s && (f = !0, I += "';\n" + s + ";\n__p += '"), i && (I += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), A = a + e.length, e
            }), I += "';\n";
            var D = e.variable;
            D || (I = "with (obj) {\n" + I + "\n}\n"), I = (f ? I.replace(b, "") : I).replace(_, "$1").replace(w, "$1;"), I = "function(" + (D || "obj") + ") {\n" + (D ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (c ? ", __e = _.escape" : "") + (f ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + I + "return __p\n}";
            var N = O(function () {
                return Function(v, k + "return " + I).apply(void 0, T)
            });
            if (N.source = I, u(N))throw N;
            return N
        }

        var f = t("lodash._basecopy"), l = t("lodash._basetostring"), p = t("lodash._basevalues"), d = t("lodash._isiterateecall"), h = t("lodash._reinterpolate"), y = t("lodash.keys"), m = t("lodash.restparam"), g = t("lodash.templatesettings"), v = "[object Error]", b = /\b__p \+= '';/g, _ = /\b(__p \+=) '' \+/g, w = /(__e\(.*?\)|\b__t\)) \+\n'';/g, x = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, E = /($^)/, j = /['\n\r\u2028\u2029\\]/g, T = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, A = Object.prototype, S = A.hasOwnProperty, I = A.toString, O = m(function (t, e) {
            try {
                return t.apply(void 0, e)
            } catch (n) {
                return u(n) ? n : new Error(n)
            }
        });
        e.exports = c
    }, {
        "lodash._basecopy": 18,
        "lodash._basetostring": 19,
        "lodash._basevalues": 20,
        "lodash._isiterateecall": 21,
        "lodash._reinterpolate": 22,
        "lodash.keys": 24,
        "lodash.restparam": 28,
        "lodash.templatesettings": 29
    }],
    18: [function (t, e, n) {
        function r(t, e, n) {
            n || (n = {});
            for (var r = -1, i = e.length; ++r < i;) {
                var o = e[r];
                n[o] = t[o]
            }
            return n
        }

        e.exports = r
    }, {}],
    19: [function (t, e, n) {
        function r(t) {
            return null == t ? "" : t + ""
        }

        e.exports = r
    }, {}],
    20: [function (t, e, n) {
        function r(t, e) {
            for (var n = -1, r = e.length, i = Array(r); ++n < r;)i[n] = t[e[n]];
            return i
        }

        e.exports = r
    }, {}],
    21: [function (t, e, n) {
        function r(t) {
            return function (e) {
                return null == e ? void 0 : e[t]
            }
        }

        function i(t) {
            return null != t && a(l(t))
        }

        function o(t, e) {
            return t = "number" == typeof t || c.test(t) ? +t : -1, e = null == e ? f : e, t > -1 && t % 1 == 0 && e > t
        }

        function s(t, e, n) {
            if (!u(n))return !1;
            var r = typeof e;
            if ("number" == r ? i(n) && o(e, n.length) : "string" == r && e in n) {
                var s = n[e];
                return t === t ? t === s : s !== s
            }
            return !1
        }

        function a(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && f >= t
        }

        function u(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        var c = /^\d+$/, f = 9007199254740991, l = r("length");
        e.exports = s
    }, {}],
    22: [function (t, e, n) {
        var r = /<%=([\s\S]+?)%>/g;
        e.exports = r
    }, {}],
    23: [function (t, e, n) {
        function r(t) {
            return u[t]
        }

        function i(t) {
            return t = o(t), t && a.test(t) ? t.replace(s, r) : t
        }

        var o = t("lodash._basetostring"), s = /[&<>"'`]/g, a = RegExp(s.source), u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        };
        e.exports = i
    }, {"lodash._basetostring": 19}],
    24: [function (t, e, n) {
        arguments[4][13][0].apply(n, arguments)
    }, {dup: 13, "lodash._getnative": 25, "lodash.isarguments": 26, "lodash.isarray": 27}],
    25: [function (t, e, n) {
        arguments[4][8][0].apply(n, arguments)
    }, {dup: 8}],
    26: [function (t, e, n) {
        arguments[4][15][0].apply(n, arguments)
    }, {dup: 15}],
    27: [function (t, e, n) {
        arguments[4][11][0].apply(n, arguments)
    }, {dup: 11}],
    28: [function (t, e, n) {
        function r(t, e) {
            if ("function" != typeof t)throw new TypeError(i);
            return e = o(void 0 === e ? t.length - 1 : +e || 0, 0), function () {
                for (var n = arguments, r = -1, i = o(n.length - e, 0), s = Array(i); ++r < i;)s[r] = n[e + r];
                switch (e) {
                    case 0:
                        return t.call(this, s);
                    case 1:
                        return t.call(this, n[0], s);
                    case 2:
                        return t.call(this, n[0], n[1], s)
                }
                var a = Array(e + 1);
                for (r = -1; ++r < e;)a[r] = n[r];
                return a[e] = s, t.apply(this, a)
            }
        }

        var i = "Expected a function", o = Math.max;
        e.exports = r
    }, {}],
    29: [function (t, e, n) {
        var r = t("lodash._reinterpolate"), i = t("lodash.escape"), o = /<%-([\s\S]+?)%>/g, s = /<%([\s\S]+?)%>/g, a = {
            escape: o,
            evaluate: s,
            interpolate: r,
            variable: "",
            imports: {_: {escape: i}}
        };
        e.exports = a
    }, {"lodash._reinterpolate": 22, "lodash.escape": 23}],
    30: [function (t, e, n) {
        "use strict";
        function r(t) {
            i("number" == typeof t.latitude && "number" == typeof t.longitude, "location must be an object with numeric latitude & longitude properties"), void 0 !== t.zoom && i("number" == typeof t.zoom, "zoom must be numeric")
        }

        var i = t("assert");
        e.exports = r
    }, {assert: 2}],
    31: [function (t, e, n) {
        "use strict";
        e.exports = function (t) {
            return window.atob(t)
        }
    }, {}],
    32: [function (t, e, n) {
        "use strict";
        var r = t("rest/interceptor"), i = r({
            success: function (t) {
                var e = t && t.request, n = e && e.callback;
                return "function" == typeof n && n(null, t.entity), t
            }, error: function (t) {
                var e = t && t.request, n = e && e.callback;
                if ("function" == typeof n) {
                    var r = t.error || t.entity;
                    "object" != typeof r && (r = new Error(r)), n(r)
                }
                return t
            }
        });
        e.exports = i
    }, {"rest/interceptor": 54}],
    33: [function (t, e, n) {
        "use strict";
        var r = t("rest"), i = t("./callbackify");
        e.exports = function (e) {
            return r.wrap(t("rest/interceptor/errorCode")).wrap(t("rest/interceptor/pathPrefix"), {prefix: e.endpoint}).wrap(t("rest/interceptor/mime"), {mime: "application/json"}).wrap(t("rest/interceptor/defaultRequest"), {params: {access_token: e.accessToken}}).wrap(t("rest/interceptor/template")).wrap(i)
        }
    }, {
        "./callbackify": 32,
        rest: 50,
        "rest/interceptor/defaultRequest": 55,
        "rest/interceptor/errorCode": 56,
        "rest/interceptor/mime": 57,
        "rest/interceptor/pathPrefix": 58,
        "rest/interceptor/template": 59
    }],
    34: [function (t, e, n) {
        e.exports.DEFAULT_ENDPOINT = "https://api.mapbox.com", e.exports.API_GEOCODER_FORWARD = "/geocoding/v5/{dataset}/{query}.json{?proximity}", e.exports.API_GEOCODER_REVERSE = "/geocoding/v5/{dataset}/{longitude},{latitude}.json", e.exports.API_DIRECTIONS = "/v4/directions/{profile}/{encodedWaypoints}.json{?alternatives,instructions,geometry,steps}", e.exports.API_DISTANCE = "/distances/v1/mapbox/{profile}", e.exports.API_SURFACE = "/v4/surface/{mapid}.json{?layer,fields,points,geojson,interpolate,encoded_polyline}", e.exports.API_UPLOADS = "/uploads/v1/{owner}", e.exports.API_UPLOAD = "/uploads/v1/{owner}/{upload}", e.exports.API_UPLOAD_CREDENTIALS = "/uploads/v1/{owner}/credentials", e.exports.API_MATCHING = "/matching/v4/{profile}.json", e.exports.API_DATASET_DATASETS = "/datasets/v1/{owner}", e.exports.API_DATASET_DATASET = "/datasets/v1/{owner}/{dataset}", e.exports.API_DATASET_FEATURES = "/datasets/v1/{owner}/{dataset}/features", e.exports.API_DATASET_FEATURE = "/datasets/v1/{owner}/{dataset}/features/{id}", e.exports.API_TILESTATS_STATISTICS = "/tilestats/v1/{owner}/{tileset}", e.exports.API_TILESTATS_LAYER = "/tilestats/v1/{owner}/{tileset}/{layer}", e.exports.API_TILESTATS_ATTRIBUTE = "/tilestats/v1/{owner}/{tileset}/{layer}/{attribute}", e.exports.API_STATIC = "/v4/{mapid}{+overlay}/{+xyz}/{width}x{height}{+retina}{.format}"
    }, {}],
    35: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t.map(function (t) {
                return i(t), t.longitude + "," + t.latitude
            }).join(";")
        }

        var i = t("./assert_location");
        e.exports = r
    }, {"./assert_location": 30}],
    36: [function (t, e, n) {
        (function (n) {
            "use strict";
            function r(t) {
                var e = t.split(".")[1];
                if (!e)return null;
                if (e = e.replace(/-/g, "+").replace(/_/g, "/"), n.browser)e = e.replace(/=/g, ""); else {
                    var r = e.length % 4;
                    if (2 === r && (e += "=="), 3 === r && (e += "="), 1 === r || r > 3)return null
                }
                try {
                    return JSON.parse(i(e)).u
                } catch (o) {
                    return null
                }
            }

            var i = t("atob");
            e.exports = r
        }).call(this, t("_process"))
    }, {_process: 4, atob: 31}],
    37: [function (t, e, n) {
        "use strict";
        function r(t) {
            function e(e, n) {
                this.name = t, i("string" == typeof e, "accessToken required to instantiate Mapbox client");
                var r = o.DEFAULT_ENDPOINT;
                void 0 !== n && (i("object" == typeof n, "options must be an object"), n.endpoint && (i("string" == typeof n.endpoint, "endpoint must be a string"), r = n.endpoint), n.account && (i("string" == typeof n.account, "account must be a string"), this.owner = n.account)), this.client = s({
                    endpoint: r,
                    accessToken: e
                }), this.accessToken = e, this.endpoint = r, this.owner = this.owner || a(e), i(!!this.owner, "could not determine account from provided accessToken")
            }

            return e
        }

        var i = t("assert"), o = t("./constants"), s = t("./client"), a = t("./get_user");
        e.exports = r
    }, {"./client": 33, "./constants": 34, "./get_user": 36, assert: 2}],
    38: [function (t, e, n) {
        "use strict";
        var r = t("./make_service"), i = t("xtend/mutable"), o = t("./services/geocoder"), s = t("./services/surface"), a = t("./services/directions"), u = t("./services/uploads"), c = t("./services/matching"), f = t("./services/datasets"), l = t("./services/distance"), p = t("./services/tilestats"), d = r("MapboxClient");
        i(d.prototype, o.prototype, s.prototype, a.prototype, l.prototype, c.prototype, f.prototype, u.prototype, p.prototype), e.exports = d
    }, {
        "./make_service": 37,
        "./services/datasets": 39,
        "./services/directions": 40,
        "./services/distance": 41,
        "./services/geocoder": 42,
        "./services/matching": 43,
        "./services/surface": 44,
        "./services/tilestats": 45,
        "./services/uploads": 46,
        "xtend/mutable": 92
    }],
    39: [function (t, e, n) {
        "use strict";
        var r = t("assert"), i = t("geojsonhint/object"), o = t("hat"), s = t("../make_service"), a = t("../constants"), u = e.exports = s("MapboxDatasets");
        u.prototype.listDatasets = function (t) {
            r("function" == typeof t, "callback must be a function"), this.client({
                path: a.API_DATASET_DATASETS,
                params: {owner: this.owner},
                callback: t
            })
        }, u.prototype.createDataset = function (t, e) {
            void 0 === e && "function" == typeof t && (e = t, t = {}), r("object" == typeof t, "options must be an object"), r("function" == typeof e, "callback must be a function"), this.client({
                path: a.API_DATASET_DATASETS,
                params: {owner: this.owner},
                entity: t,
                callback: e
            })
        }, u.prototype.readDataset = function (t, e) {
            r("string" == typeof t, "dataset must be a string"), r("function" == typeof e, "callback must be a function"), this.client({
                path: a.API_DATASET_DATASET,
                params: {owner: this.owner, dataset: t},
                callback: e
            })
        }, u.prototype.updateDataset = function (t, e, n) {
            r("string" == typeof t, "dataset must be a string"), r("function" == typeof n, "callback must be a function"), r("object" == typeof e, "options must be an object"), r(!!e.name || !!e.description, "options must include a name or a description"), this.client({
                path: a.API_DATASET_DATASET,
                params: {owner: this.owner, dataset: t},
                method: "patch",
                entity: e,
                callback: n
            })
        }, u.prototype.deleteDataset = function (t, e) {
            r("string" == typeof t, "dataset must be a string"), r("function" == typeof e, "callback must be a function"), this.client({
                path: a.API_DATASET_DATASET,
                params: {owner: this.owner, dataset: t},
                method: "delete",
                callback: e
            })
        }, u.prototype.listFeatures = function (t, e) {
            r("string" == typeof t, "dataset must be a string"), r("function" == typeof e, "callback must be a function"), this.client({
                path: a.API_DATASET_FEATURES,
                params: {owner: this.owner, dataset: t},
                callback: e
            })
        }, u.prototype.insertFeature = function (t, e, n) {
            r("string" == typeof e, "dataset must be a string"), r("function" == typeof n, "callback must be a function"), r(0 === i.hint(t).length, "feature must be valid GeoJSON");
            var s = t.id || o();
            r("string" == typeof s, "The GeoJSON feature's id must be a string"), this.client({
                path: a.API_DATASET_FEATURE,
                params: {owner: this.owner, dataset: e, id: s},
                method: "put",
                entity: t,
                callback: n
            })
        }, u.prototype.readFeature = function (t, e, n) {
            r("string" == typeof t, "id must be a string"), r("string" == typeof e, "dataset must be a string"), r("function" == typeof n, "callback must be a function"), this.client({
                path: a.API_DATASET_FEATURE,
                params: {owner: this.owner, dataset: e, id: t},
                callback: n
            })
        }, u.prototype.deleteFeature = function (t, e, n) {
            r("string" == typeof t, "id must be a string"), r("string" == typeof e, "dataset must be a string"), r("function" == typeof n, "callback must be a function"), this.client({
                path: a.API_DATASET_FEATURE,
                params: {owner: this.owner, dataset: e, id: t},
                method: "delete",
                callback: n
            })
        }, u.prototype.bulkFeatureUpdate = function (t, e, n) {
            r("object" == typeof t, "update must be an object"), r("string" == typeof e, "dataset must be a string"), r("function" == typeof n, "callback must be a function");
            var o = t.put || [], s = t["delete"] || [];
            r(0 === i.hint({
                    type: "FeatureCollection",
                    features: o
                }).length, "update.put must be an array of valid GeoJSON features"), r(o.every(function (t) {
                return t.id
            }), "inserted GeoJSON features must include ids"), r(s.every(function (t) {
                return "string" == typeof t
            }), "update.delete must be an array of strings"), this.client({
                path: a.API_DATASET_FEATURES,
                params: {owner: this.owner, dataset: e},
                method: "post",
                entity: {put: o, "delete": s},
                callback: n
            })
        }
    }, {"../constants": 34, "../make_service": 37, assert: 2, "geojsonhint/object": 47, hat: 48}],
    40: [function (t, e, n) {
        "use strict";
        var r = t("assert"), i = t("../format_points"), o = t("../make_service"), s = t("../constants"), a = o("MapboxDirections");
        a.prototype.getDirections = function (t, e, n) {
            void 0 === n && "function" == typeof e && (n = e, e = {}), r(Array.isArray(t), "waypoints must be an array"), r("object" == typeof e, "options must be an object"), r("function" == typeof n, "callback must be a function");
            var o = i(t), a = "mapbox.driving", u = !0, c = !0, f = "geojson", l = "text";
            e.profile && (r("string" == typeof e.profile, "profile option must be string"), a = e.profile), "undefined" != typeof e.alternatives && (r("boolean" == typeof e.alternatives, "alternatives option must be boolean"), u = e.alternatives), "undefined" != typeof e.steps && (r("boolean" == typeof e.steps, "steps option must be boolean"), c = e.steps), e.geometry && (r("string" == typeof e.geometry, "geometry option must be string"), f = e.geometry), e.instructions && (r("string" == typeof e.instructions, "instructions option must be string"), l = e.instructions), this.client({
                path: s.API_DIRECTIONS,
                params: {encodedWaypoints: o, profile: a, instructions: l, geometry: f, alternatives: u, steps: c},
                callback: n
            })
        }, e.exports = a
    }, {"../constants": 34, "../format_points": 35, "../make_service": 37, assert: 2}],
    41: [function (t, e, n) {
        "use strict";
        var r = t("assert"), i = t("../make_service"), o = t("../constants"), s = i("MapboxDistance");
        s.prototype.getDistances = function (t, e, n) {
            void 0 === n && "function" == typeof e && (n = e, e = {}), r(Array.isArray(t), "waypoints must be an array");
            var i = "driving";
            e.profile && (r("string" == typeof e.profile, "profile option must be string"), i = e.profile), this.client({
                path: o.API_DISTANCE,
                params: {profile: i},
                entity: {coordinates: t},
                method: "post",
                callback: n
            })
        }, e.exports = s
    }, {"../constants": 34, "../make_service": 37, assert: 2}],
    42: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            var n = Math.pow(10, e);
            return Math.round(t * n) / n
        }

        var i = t("assert"), o = t("../make_service"), s = t("../constants"), a = o("MapboxGeocoder"), u = 5, c = 3;
        a.prototype.geocodeForward = function (t, e, n) {
            void 0 === n && "function" == typeof e && (n = e, e = {}), i("string" == typeof t, "query must be a string"), i("object" == typeof e, "options must be an object"), i("function" == typeof n, "callback must be a function");
            var o = {query: t, dataset: "mapbox.places"}, a = c;
            e.precision && (i("number" == typeof e.precision, "precision option must be number"), a = e.precision), e.proximity && (i("number" == typeof e.proximity.latitude && "number" == typeof e.proximity.longitude, "proximity must be an object with numeric latitude & longitude properties"), o.proximity = r(e.proximity.longitude, a) + "," + r(e.proximity.latitude, a)), e.dataset && (i("string" == typeof e.dataset, "dataset option must be string"), o.dataset = e.dataset), this.client({
                path: s.API_GEOCODER_FORWARD,
                params: o,
                callback: n
            })
        }, a.prototype.geocodeReverse = function (t, e, n) {
            void 0 === n && "function" == typeof e && (n = e, e = {}), i("object" == typeof t, "location must be an object"), i("object" == typeof e, "options must be an object"), i("function" == typeof n, "callback must be a function"), i("number" == typeof t.latitude && "number" == typeof t.longitude, "location must be an object with numeric latitude & longitude properties");
            var o = "mapbox.places";
            e.dataset && (i("string" == typeof e.dataset, "dataset option must be string"), o = e.dataset);
            var a = u;
            e.precision && (i("number" == typeof e.precision, "precision option must be number"), a = e.precision), this.client({
                path: s.API_GEOCODER_REVERSE,
                params: {longitude: r(t.longitude, a), latitude: r(t.latitude, a), dataset: o},
                callback: n
            })
        }, e.exports = a
    }, {"../constants": 34, "../make_service": 37, assert: 2}],
    43: [function (t, e, n) {
        "use strict";
        var r = t("assert"), i = t("geojsonhint/object"), o = t("../make_service"), s = t("../constants"), a = o("MapboxMatching");
        a.prototype.matching = function (t, e, n) {
            void 0 === n && "function" == typeof e && (n = e, e = {}), r(0 === i.hint(t).length, "trace must be valid GeoJSON"), r("object" == typeof e, "options must be an object"), r("function" == typeof n, "callback must be a function");
            var o = "mapbox.driving", a = 4, u = "geojson";
            void 0 !== e.gps_precision && (r("number" == typeof e.gps_precision, "gps_precision must be a number"), a = e.gps_precision), e.profile && (r("string" == typeof e.profile, "profile option must be string"), o = e.profile), e.geometry && (r("string" == typeof e.geometry, "geometry option must be string"), u = e.geometry), this.client({
                path: s.API_MATCHING,
                params: {profile: o, geometry: u, gps_precision: a},
                method: "post",
                entity: t,
                callback: n
            })
        }, e.exports = a
    }, {"../constants": 34, "../make_service": 37, assert: 2, "geojsonhint/object": 47}],
    44: [function (t, e, n) {
        "use strict";
        var r = t("assert"), i = t("../format_points"), o = t("../make_service"), s = t("../constants"), a = o("MapboxSurface");
        a.prototype.surface = function (t, e, n, o, a, u) {
            void 0 === u && "function" == typeof a && (u = a, a = {}), r("string" == typeof t, "mapid must be a string"), r("string" == typeof e, "layer must be a string"), r(Array.isArray(n), "fields must be an array of strings"), r(Array.isArray(o) || "string" == typeof o, "path must be an array of objects or a string"), r("object" == typeof a, "options must be an object"), r("function" == typeof u, "callback must be a function");
            var c = !0, f = !1;
            void 0 !== a.interpolate && (r("boolean" == typeof a.interpolate, "interpolate must be a boolean"), c = a.interpolate), void 0 !== a.geojson && (r("boolean" == typeof a.geojson, "geojson option must be boolean"), f = a.geojson);
            var l = {geojson: f, layer: e, mapid: t, fields: n.join(","), interpolate: c};
            Array.isArray(o) ? l.points = i(o) : l.encoded_polyline = o, void 0 !== a.zoom && (r("number" == typeof a.zoom, "zoom must be a number"), l.z = a.zoom), this.client({
                path: s.API_SURFACE,
                params: l,
                callback: u
            })
        }, e.exports = a
    }, {"../constants": 34, "../format_points": 35, "../make_service": 37, assert: 2}],
    45: [function (t, e, n) {
        "use strict";
        var r = t("assert"), i = t("../make_service"), o = t("../constants"), s = e.exports = i("MapboxTilestats");
        s.prototype.createTilestats = function (t, e, n) {
            r("string" == typeof t, "tileset must be a string"), r("function" == typeof n, "callback must be a function"), r(Array.isArray(e), "layers must be an array"), r(e.every(function (t) {
                return "string" == typeof t
            }), "layers must be an array of strings");
            var i = t.split(".")[0];
            i === t && (i = this.owner), this.client({
                path: o.API_TILESTATS_STATISTICS,
                params: {owner: i, tileset: t},
                entity: {layers: e},
                method: "post",
                callback: n
            })
        }, s.prototype.deleteTilestats = function (t, e) {
            r("string" == typeof t, "tileset must be a string"), r("function" == typeof e, "callback must be a function");
            var n = t.split(".")[0];
            n === t && (n = this.owner), this.client({
                path: o.API_TILESTATS_STATISTICS,
                params: {owner: n, tileset: t},
                method: "delete",
                callback: e
            })
        }, s.prototype.getTilestats = function (t, e) {
            r("string" == typeof t, "tileset must be a string"), r("function" == typeof e, "callback must be a function");
            var n = t.split(".")[0];
            n === t && (n = this.owner), this.client({
                path: o.API_TILESTATS_STATISTICS,
                params: {owner: n, tileset: t},
                callback: e
            })
        }, s.prototype.updateTilestatsLayer = function (t, e, n, i) {
            r("string" == typeof t, "tileset must be a string"), r("function" == typeof i, "callback must be a function"), r("string" == typeof e, "layer must be a string"), r("object" == typeof n, "geometries must be an object");
            var s = t.split(".")[0];
            s === t && (s = this.owner), this.client({
                path: o.API_TILESTATS_LAYER,
                params: {owner: s, tileset: t, layer: e},
                entity: n,
                method: "post",
                callback: i
            })
        }, s.prototype.updateTilestatsAttribute = function (t, e, n, i, s) {
            r("string" == typeof t, "tileset must be a string"), r("function" == typeof s, "callback must be a function"), r("string" == typeof e, "layer must be a string"), r("string" == typeof n, "attribute must be a string"), r("object" == typeof i, "stats must be an object");
            var a = t.split(".")[0];
            a === t && (a = this.owner), this.client({
                path: o.API_TILESTATS_ATTRIBUTE,
                params: {owner: a, tileset: t, layer: e, attribute: n},
                entity: i,
                method: "post",
                callback: s
            })
        }, s.prototype.getTilestatsAttribute = function (t, e, n, i) {
            r("string" == typeof t, "tileset must be a string"), r("function" == typeof i, "callback must be a function"), r("string" == typeof e, "layer must be a string"), r("string" == typeof n, "attribute must be a string");
            var s = t.split(".")[0];
            s === t && (s = this.owner), this.client({
                path: o.API_TILESTATS_ATTRIBUTE,
                params: {owner: s, tileset: t, layer: e, attribute: n},
                callback: i
            })
        }
    }, {"../constants": 34, "../make_service": 37, assert: 2}],
    46: [function (t, e, n) {
        "use strict";
        var r = t("assert"), i = t("../make_service"), o = t("../constants"), s = e.exports = i("MapboxUploads");
        s.prototype.listUploads = function (t) {
            r("function" == typeof t, "callback must be a function"), this.client({
                path: o.API_UPLOADS,
                params: {owner: this.owner},
                callback: t
            })
        }, s.prototype.createUploadCredentials = function (t) {
            r("function" == typeof t, "callback must be a function"), this.client({
                path: o.API_UPLOAD_CREDENTIALS,
                params: {owner: this.owner},
                callback: t
            })
        }, s.prototype.createUpload = function (t, e) {
            r("object" == typeof t, "options must be an object"), r("function" == typeof e, "callback must be a function"), this.client({
                path: o.API_UPLOADS,
                params: {owner: this.owner},
                entity: t,
                callback: e
            })
        }, s.prototype.readUpload = function (t, e) {
            r("string" == typeof t, "upload must be a string"), r("function" == typeof e, "callback must be a function"), this.client({
                path: o.API_UPLOAD,
                params: {owner: this.owner, upload: t},
                callback: e
            })
        }, s.prototype.deleteUpload = function (t, e) {
            r("string" == typeof t, "upload must be a string"), r("function" == typeof e, "callback must be a function"), this.client({
                method: "delete",
                path: o.API_UPLOAD,
                params: {owner: this.owner, upload: t},
                callback: e
            })
        }
    }, {"../constants": 34, "../make_service": 37, assert: 2}],
    47: [function (t, e, n) {
        function r(t) {
            function e(t) {
                t.type ? v[t.type] ? t && v[t.type](t) : g.push({
                    message: "The type " + t.type + " is unknown",
                    line: t.__line__
                }) : g.push({message: "The type property is required and was not found", line: t.__line__})
            }

            function n(t, e) {
                return t.every(function (t) {
                    return null !== t && typeof t === e
                })
            }

            function r(t, e, n) {
                if ("undefined" == typeof t[e])return g.push({
                    message: '"' + e + '" property required',
                    line: t.__line__
                });
                if ("array" === n) {
                    if (!Array.isArray(t[e]))return g.push({
                        message: '"' + e + '" property should be an array, but is an ' + typeof t[e] + " instead",
                        line: t.__line__
                    })
                } else if (n && typeof t[e] !== n)return g.push({
                    message: '"' + e + '" property should be ' + n + ", but is an " + typeof t[e] + " instead",
                    line: t.__line__
                })
            }

            function i(t) {
                if (a(t), u(t), !r(t, "features", "array")) {
                    if (!n(t.features, "object"))return g.push({
                        message: "Every feature must be an object",
                        line: t.__line__
                    });
                    t.features.forEach(m)
                }
            }

            function o(t, e) {
                return Array.isArray(t) ? t.length < 2 ? g.push({
                    message: "position must have 2 or more elements",
                    line: t.__line__ || e
                }) : n(t, "number") ? void 0 : g.push({
                    message: "each element in a position must be a number",
                    line: t.__line__ || e
                }) : g.push({
                    message: "position should be an array, is a " + typeof t + " instead",
                    line: t.__line__ || e
                })
            }

            function s(t, e, n, r) {
                if (void 0 === r && void 0 !== t.__line__ && (r = t.__line__), 0 === n)return o(t, r);
                if (1 === n && e)if ("LinearRing" === e) {
                    if (!Array.isArray(t[t.length - 1]))return g.push({
                        message: "a number was found where a coordinate array should have been found: this needs to be nested more deeply",
                        line: r
                    });
                    t.length < 4 && g.push({
                        message: "a LinearRing of coordinates needs to have four or more positions",
                        line: r
                    }), !t.length || t[t.length - 1].length === t[0].length && t[t.length - 1].every(function (e, n) {
                        return t[0][n] === e
                    }) || g.push({
                        message: "the first and last positions in a LinearRing of coordinates must be the same",
                        line: r
                    })
                } else"Line" === e && t.length < 2 && g.push({
                    message: "a line needs to have two or more coordinates to be valid",
                    line: r
                });
                t.forEach(function (t) {
                    s(t, e, n - 1, t.__line__ || r)
                })
            }

            function a(t) {
                if (t.crs)if ("object" == typeof t.crs) {
                    var e = r(t.crs, "type", "string"), n = r(t.crs, "properties", "object");
                    e || n || ("name" === t.crs.type ? r(t.crs.properties, "name", "string") : "link" === t.crs.type && r(t.crs.properties, "href", "string"))
                } else g.push({
                    message: "the value of the crs property must be an object, not a " + typeof t.crs,
                    line: t.__line__
                })
            }

            function u(t) {
                if (t.bbox)if (Array.isArray(t.bbox)) {
                    if (!n(t.bbox, "number"))return g.push({
                        message: "each element in a bbox property must be a number",
                        line: t.bbox.__line__
                    })
                } else g.push({
                    message: "bbox property must be an array of numbers, but is a " + typeof t.bbox,
                    line: t.__line__
                })
            }

            function c(t) {
                a(t), u(t), r(t, "coordinates", "array") || o(t.coordinates)
            }

            function f(t) {
                a(t), u(t), r(t, "coordinates", "array") || s(t.coordinates, "LinearRing", 2)
            }

            function l(t) {
                a(t), u(t), r(t, "coordinates", "array") || s(t.coordinates, "LinearRing", 3)
            }

            function p(t) {
                a(t), u(t), r(t, "coordinates", "array") || s(t.coordinates, "Line", 1)
            }

            function d(t) {
                a(t), u(t), r(t, "coordinates", "array") || s(t.coordinates, "Line", 2)
            }

            function h(t) {
                a(t), u(t), r(t, "coordinates", "array") || s(t.coordinates, "", 1)
            }

            function y(t) {
                a(t), u(t), r(t, "geometries", "array") || t.geometries.forEach(function (t) {
                    t && e(t)
                })
            }

            function m(t) {
                a(t), u(t), void 0 !== t.id && "string" != typeof t.id && "number" != typeof t.id && g.push({
                    message: 'Feature "id" property must have a string or number value',
                    line: t.__line__
                }), "Feature" !== t.type && g.push({
                    message: "GeoJSON features must have a type=feature property",
                    line: t.__line__
                }), r(t, "properties", "object"), r(t, "geometry", "object") || t.geometry && e(t.geometry)
            }

            var g = [], v = {
                Point: c,
                Feature: m,
                MultiPoint: h,
                LineString: p,
                MultiLineString: d,
                FeatureCollection: i,
                GeometryCollection: y,
                Polygon: f,
                MultiPolygon: l
            };
            return "object" != typeof t || null === t || void 0 === t ? (g.push({
                message: "The root of a GeoJSON object must be an object.",
                line: 0
            }), g) : (e(t), g.forEach(function (t) {
                t.hasOwnProperty("line") && void 0 === t.line && delete t.line
            }), g)
        }

        e.exports.hint = r
    }, {}],
    48: [function (t, e, n) {
        var r = e.exports = function (t, e) {
            if (e || (e = 16), void 0 === t && (t = 128), 0 >= t)return "0";
            for (var n = Math.log(Math.pow(2, t)) / Math.log(e), i = 2; n === 1 / 0; i *= 2)n = Math.log(Math.pow(2, t / i)) / Math.log(e) * i;
            for (var o = n - Math.floor(n), s = "", i = 0; i < Math.floor(n); i++) {
                var a = Math.floor(Math.random() * e).toString(e);
                s = a + s
            }
            if (o) {
                var u = Math.pow(e, o), a = Math.floor(Math.random() * u).toString(e);
                s = a + s
            }
            var c = parseInt(s, e);
            return c !== 1 / 0 && c >= Math.pow(2, t) ? r(t, e) : s
        };
        r.rack = function (t, e, n) {
            var i = function (i) {
                var s = 0;
                do {
                    if (s++ > 10) {
                        if (!n)throw new Error("too many ID collisions, use more bits");
                        t += n
                    }
                    var a = r(t, e)
                } while (Object.hasOwnProperty.call(o, a));
                return o[a] = i, a
            }, o = i.hats = {};
            return i.get = function (t) {
                return i.hats[t]
            }, i.set = function (t, e) {
                return i.hats[t] = e, i
            }, i.bits = t || 128, i.base = e || 16, i
        }
    }, {}],
    49: [function (t, e, n) {
        !function (t, e) {
            "use strict";
            var n;
            t(function (t) {
                function r(t, e) {
                    var n, r, i, o;
                    if (n = t, i = {}, e) {
                        for (r in e)o = new RegExp("\\{" + r + "\\}"), o.test(n) ? n = n.replace(o, encodeURIComponent(e[r]), "g") : i[r] = e[r];
                        for (r in i)n += -1 === n.indexOf("?") ? "?" : "&", n += encodeURIComponent(r), null !== i[r] && void 0 !== i[r] && (n += "=", n += encodeURIComponent(i[r]))
                    }
                    return n
                }

                function i(t, e) {
                    return 0 === t.indexOf(e)
                }

                function o(t, e) {
                    return this instanceof o ? void(t instanceof o ? (this._template = t.template, this._params = s({}, this._params, e)) : (this._template = (t || "").toString(), this._params = e || {})) : new o(t, e)
                }

                var s, a, u, c, f;
                return s = t("./util/mixin"), u = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*)?(#\S*)?/i, c = /^([a-z][a-z0-9\-\+\.]*:\/\/|\/)/i, f = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?\//i, o.prototype = {
                    append: function (t, e) {
                        return new o(this._template + t, s({}, this._params, e))
                    }, fullyQualify: function () {
                        if (!e)return this;
                        if (this.isFullyQualified())return this;
                        var t = this._template;
                        return i(t, "//") ? t = a.protocol + t : i(t, "/") ? t = a.origin + t : this.isAbsolute() || (t = a.origin + a.pathname.substring(0, a.pathname.lastIndexOf("/") + 1)), -1 === t.indexOf("/", 8) && (t += "/"), new o(t, this._params)
                    }, isAbsolute: function () {
                        return c.test(this.build())
                    }, isFullyQualified: function () {
                        return f.test(this.build())
                    }, isCrossOrigin: function () {
                        if (!a)return !0;
                        var t = this.parts();
                        return t.protocol !== a.protocol || t.hostname !== a.hostname || t.port !== a.port
                    }, parts: function () {
                        var t, e;
                        return t = this.fullyQualify().build().match(u), e = {
                            href: t[0],
                            protocol: t[1],
                            host: t[3] || "",
                            hostname: t[4] || "",
                            port: t[6],
                            pathname: t[7] || "",
                            search: t[8] || "",
                            hash: t[9] || ""
                        }, e.origin = e.protocol + "//" + e.host, e.port = e.port || ("https:" === e.protocol ? "443" : "http:" === e.protocol ? "80" : ""), e
                    }, build: function (t) {
                        return r(this._template, s({}, this._params, t))
                    }, toString: function () {
                        return this.build()
                    }
                }, a = e ? new o(e.href).parts() : n, o
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        }, "undefined" != typeof window ? window.location : void 0)
    }, {"./util/mixin": 87}],
    50: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                var e = t("./client/default"), n = t("./client/xhr");
                return e.setPlatformDefaultClient(n), e
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"./client/default": 52, "./client/xhr": 53}],
    51: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                return function (t, e) {
                    return e && (t.skip = function () {
                        return e
                    }), t.wrap = function (e, n) {
                        return e(t, n)
                    }, t.chain = function () {
                        return "undefined" != typeof console && console.log("rest.js: client.chain() is deprecated, use client.wrap() instead"), t.wrap.apply(this, arguments)
                    }, t
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    52: [function (t, e, n) {
        !function (t) {
            "use strict";
            var e;
            t(function (t) {
                function n() {
                    return i.apply(e, arguments)
                }

                var r, i, o;
                return r = t("../client"), n.setDefaultClient = function (t) {
                    i = t
                }, n.getDefaultClient = function () {
                    return i
                }, n.resetDefaultClient = function () {
                    i = o
                }, n.setPlatformDefaultClient = function (t) {
                    if (o)throw new Error("Unable to redefine platformDefaultClient");
                    i = o = t
                }, r(n)
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../client": 51}],
    53: [function (t, e, n) {
        !function (t, e) {
            "use strict";
            t(function (t) {
                function n(t) {
                    var e = {};
                    return t ? (t.trim().split(c).forEach(function (t) {
                        var n, r, i;
                        n = t.indexOf(":"), r = s(t.substring(0, n).trim()), i = t.substring(n + 1).trim(), e[r] ? Array.isArray(e[r]) ? e[r].push(i) : e[r] = [e[r], i] : e[r] = i
                    }), e) : e
                }

                function r(t, e) {
                    return Object.keys(e || {}).forEach(function (n) {
                        if (e.hasOwnProperty(n) && n in t)try {
                            t[n] = e[n]
                        } catch (r) {
                        }
                    }), t
                }

                var i, o, s, a, u, c;
                return i = t("when"), o = t("../UrlBuilder"), s = t("../util/normalizeHeaderName"), a = t("../util/responsePromise"), u = t("../client"), c = /[\r|\n]+/, u(function (t) {
                    return a.promise(function (i, s) {
                        var a, u, c, f, l, p, d, h;
                        if (t = "string" == typeof t ? {path: t} : t || {}, d = {request: t}, t.canceled)return d.error = "precanceled", void s(d);
                        if (h = t.engine || e.XMLHttpRequest, !h)return void s({
                            request: t,
                            error: "xhr-not-available"
                        });
                        l = t.entity, t.method = t.method || (l ? "POST" : "GET"), u = t.method, c = new o(t.path || "", t.params).build();
                        try {
                            a = d.raw = new h, r(a, t.mixin), a.open(u, c, !0), r(a, t.mixin), f = t.headers;
                            for (p in f)("Content-Type" !== p || "multipart/form-data" !== f[p]) && a.setRequestHeader(p, f[p]);
                            t.canceled = !1, t.cancel = function () {
                                t.canceled = !0, a.abort(), s(d)
                            }, a.onreadystatechange = function () {
                                t.canceled || a.readyState === (h.DONE || 4) && (d.status = {
                                    code: a.status,
                                    text: a.statusText
                                }, d.headers = n(a.getAllResponseHeaders()), d.entity = a.responseText, d.status.code > 0 ? i(d) : setTimeout(function () {
                                    i(d)
                                }, 0))
                            };
                            try {
                                a.onerror = function () {
                                    d.error = "loaderror", s(d)
                                }
                            } catch (y) {
                            }
                            a.send(l)
                        } catch (y) {
                            d.error = "loaderror", s(d)
                        }
                    })
                })
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        }, "undefined" != typeof window ? window : void 0)
    }, {
        "../UrlBuilder": 49,
        "../client": 51,
        "../util/normalizeHeaderName": 88,
        "../util/responsePromise": 89,
        when: 84
    }],
    54: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                function e(t) {
                    return t
                }

                function n(t) {
                    return t
                }

                function r(t) {
                    return t
                }

                function i(t) {
                    return l.promise(function (e, n) {
                        t.forEach(function (t) {
                            l(t, e, n)
                        })
                    })
                }

                function o(t) {
                    return this instanceof o ? void u(this, t) : new o(t)
                }

                function s(t) {
                    var s, u, p, d;
                    return t = t || {}, s = t.init || e, u = t.request || n, p = t.success || t.response || r, d = t.error || function () {
                            return l((t.response || r).apply(this, arguments), l.reject, l.reject)
                        }, function (e, n) {
                        function r(t) {
                            var s, a;
                            return s = {}, a = {
                                arguments: Array.prototype.slice.call(arguments),
                                client: r
                            }, t = "string" == typeof t ? {path: t} : t || {}, t.originator = t.originator || r, c(u.call(s, t, n, a), function (t) {
                                var r, u, c;
                                return c = e, t instanceof o && (u = t.abort, c = t.client || c, r = t.response, t = t.request), r = r || l(t, function (t) {
                                        return l(c(t), function (t) {
                                            return p.call(s, t, n, a)
                                        }, function (t) {
                                            return d.call(s, t, n, a)
                                        })
                                    }), u ? i([r, u]) : r
                            }, function (e) {
                                return l.reject({request: t, error: e})
                            })
                        }

                        return "object" == typeof e && (n = e), "function" != typeof e && (e = t.client || a), n = s(n || {}), f(r, e)
                    }
                }

                var a, u, c, f, l;
                return a = t("./client/default"), u = t("./util/mixin"), c = t("./util/responsePromise"), f = t("./client"), l = t("when"), s.ComplexRequest = o, s
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"./client": 51, "./client/default": 52, "./util/mixin": 87, "./util/responsePromise": 89, when: 84}],
    55: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                var e, n, r;
                return e = t("../interceptor"), n = t("../util/mixin"), r = function () {
                    function t(t, e, r) {
                        (t in e || t in r) && (e[t] = n({}, r[t], e[t]))
                    }

                    function e(t, e, n) {
                        t in n && !(t in e) && (e[t] = n[t])
                    }

                    var r = {method: e, path: e, params: t, headers: t, entity: e, mixin: t};
                    return function (t, e) {
                        for (var n in r)r[n](n, t, e);
                        return t
                    }
                }(), e({
                    request: function (t, e) {
                        return r(t, e)
                    }
                })
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../interceptor": 54, "../util/mixin": 87}],
    56: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                var e, n;
                return e = t("../interceptor"), n = t("when"), e({
                    init: function (t) {
                        return t.code = t.code || 400, t
                    }, response: function (t, e) {
                        return t.status && t.status.code >= e.code ? n.reject(t) : t
                    }
                })
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../interceptor": 54, when: 84}],
    57: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                var e, n, r, i, o;
                return e = t("../interceptor"), n = t("../mime"), r = t("../mime/registry"), o = t("when"), i = {
                    read: function (t) {
                        return t
                    }, write: function (t) {
                        return t
                    }
                }, e({
                    init: function (t) {
                        return t.registry = t.registry || r, t
                    }, request: function (t, e) {
                        var r, s;
                        return s = t.headers || (t.headers = {}), r = n.parse(s["Content-Type"] = s["Content-Type"] || e.mime || "text/plain"), s.Accept = s.Accept || e.accept || r.raw + ", application/json;q=0.8, text/plain;q=0.5, */*;q=0.2", "entity" in t ? e.registry.lookup(r).otherwise(function () {
                            if (e.permissive)return i;
                            throw"mime-unknown"
                        }).then(function (n) {
                            var i = e.client || t.originator;
                            return o.attempt(n.write, t.entity, {
                                client: i,
                                request: t,
                                mime: r,
                                registry: e.registry
                            }).otherwise(function () {
                                throw"mime-serialization"
                            }).then(function (e) {
                                return t.entity = e, t
                            })
                        }) : t
                    }, response: function (t, e) {
                        if (!(t.headers && t.headers["Content-Type"] && t.entity))return t;
                        var r = n.parse(t.headers["Content-Type"]);
                        return e.registry.lookup(r).otherwise(function () {
                            return i
                        }).then(function (n) {
                            var i = e.client || t.request && t.request.originator;
                            return o.attempt(n.read, t.entity, {
                                client: i,
                                response: t,
                                mime: r,
                                registry: e.registry
                            }).otherwise(function (e) {
                                throw t.error = "mime-deserialization", t.cause = e, t
                            }).then(function (e) {
                                return t.entity = e, t
                            })
                        })
                    }
                })
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../interceptor": 54, "../mime": 60, "../mime/registry": 61, when: 84}],
    58: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                function e(t, e) {
                    return 0 === t.indexOf(e)
                }

                function n(t, e) {
                    return t.lastIndexOf(e) + e.length === t.length
                }

                var r, i;
                return r = t("../interceptor"), i = t("../UrlBuilder"), r({
                    request: function (t, r) {
                        var o;
                        return r.prefix && !new i(t.path).isFullyQualified() && (o = r.prefix, t.path && (n(o, "/") || e(t.path, "/") || (o += "/"), o += t.path), t.path = o), t
                    }
                })
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../UrlBuilder": 49, "../interceptor": 54}],
    59: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                var e, n, r;
                return e = t("../interceptor"), n = t("../util/uriTemplate"), r = t("../util/mixin"), e({
                    init: function (t) {
                        return t.params = t.params || {}, t.template = t.template || "", t
                    }, request: function (t, e) {
                        var i, o;
                        return i = t.path || e.template, o = r({}, t.params, e.params), t.path = n.expand(i, o), delete t.params, t
                    }
                })
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../interceptor": 54, "../util/mixin": 87, "../util/uriTemplate": 91}],
    60: [function (t, e, n) {
        !function (t) {
            "use strict";
            var e;
            t(function () {
                function t(t) {
                    var n, r;
                    return n = t.split(";"), r = n[0].trim().split("+"), {
                        raw: t,
                        type: r[0],
                        suffix: r[1] ? "+" + r[1] : "",
                        params: n.slice(1).reduce(function (t, n) {
                            return n = n.split("="), t[n[0].trim()] = n[1] ? n[1].trim() : e, t
                        }, {})
                    }
                }

                return {parse: t}
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    61: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                function e(t) {
                    this.lookup = function (e) {
                        var i;
                        return i = "string" == typeof e ? n.parse(e) : e, t[i.raw] ? t[i.raw] : t[i.type + i.suffix] ? t[i.type + i.suffix] : t[i.type] ? t[i.type] : t[i.suffix] ? t[i.suffix] : r.reject(new Error('Unable to locate converter for mime "' + i.raw + '"'))
                    }, this.delegate = function (t) {
                        return {
                            read: function () {
                                var e = arguments;
                                return this.lookup(t).then(function (t) {
                                    return t.read.apply(this, e)
                                }.bind(this))
                            }.bind(this), write: function () {
                                var e = arguments;
                                return this.lookup(t).then(function (t) {
                                    return t.write.apply(this, e)
                                }.bind(this))
                            }.bind(this)
                        }
                    }, this.register = function (e, n) {
                        return t[e] = r(n), t[e]
                    }, this.child = function () {
                        return new e(Object.create(t))
                    }
                }

                var n, r, i;
                return n = t("../mime"), r = t("when"), i = new e({}), i.register("application/hal", t("./type/application/hal")), i.register("application/json", t("./type/application/json")), i.register("application/x-www-form-urlencoded", t("./type/application/x-www-form-urlencoded")), i.register("multipart/form-data", t("./type/multipart/form-data")), i.register("text/plain", t("./type/text/plain")), i.register("+json", i.delegate("application/json")), i
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {
        "../mime": 60,
        "./type/application/hal": 62,
        "./type/application/json": 63,
        "./type/application/x-www-form-urlencoded": 64,
        "./type/multipart/form-data": 65,
        "./type/text/plain": 66,
        when: 84
    }],
    62: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                function e(t, e, n) {
                    Object.defineProperty(t, e, {value: n, configurable: !0, enumerable: !1, writeable: !0})
                }

                var n, r, i, o, s, a;
                return n = t("../../../interceptor/pathPrefix"), r = t("../../../interceptor/template"), i = t("../../../util/find"), o = t("../../../util/lazyPromise"), s = t("../../../util/responsePromise"), a = t("when"), {
                    read: function (t, u) {
                        function c(t, e) {
                            (e && l && l.warn || l.log) && (l.warn || l.log).call(l, "Relationship '" + t + "' is deprecated, see " + e)
                        }

                        var f, l;
                        return u = u || {}, f = u.client, l = u.console || l, u.registry.lookup(u.mime.suffix).then(function (l) {
                            return a(l.read(t, u)).then(function (t) {
                                return i.findProperties(t, "_embedded", function (t, n, r) {
                                    Object.keys(t).forEach(function (r) {
                                        if (!(r in n)) {
                                            var i = s({entity: t[r]});
                                            e(n, r, i)
                                        }
                                    }), e(n, r, t)
                                }), i.findProperties(t, "_links", function (t, i, a) {
                                    Object.keys(t).forEach(function (n) {
                                        var a = t[n];
                                        n in i || e(i, n, s.make(o(function () {
                                            return a.deprecation && c(n, a.deprecation), a.templated === !0 ? r(f)({path: a.href}) : f({path: a.href})
                                        })))
                                    }), e(i, a, t), e(i, "clientFor", function (e, i) {
                                        var o = t[e];
                                        if (!o)throw new Error("Unknown relationship: " + e);
                                        return o.deprecation && c(e, o.deprecation), o.templated === !0 ? r(i || f, {template: o.href}) : n(i || f, {prefix: o.href})
                                    }), e(i, "requestFor", function (t, e, n) {
                                        var r = this.clientFor(t, n);
                                        return r(e)
                                    })
                                }), t
                            })
                        })
                    }, write: function (t, e) {
                        return e.registry.lookup(e.mime.suffix).then(function (n) {
                            return n.write(t, e)
                        })
                    }
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {
        "../../../interceptor/pathPrefix": 58,
        "../../../interceptor/template": 59,
        "../../../util/find": 85,
        "../../../util/lazyPromise": 86,
        "../../../util/responsePromise": 89,
        when: 84
    }],
    63: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(e, n) {
                    return {
                        read: function (t) {
                            return JSON.parse(t, e)
                        }, write: function (t) {
                            return JSON.stringify(t, n)
                        }, extend: t
                    }
                }

                return t()
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    64: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(t) {
                    return t = encodeURIComponent(t), t.replace(r, "+")
                }

                function e(t) {
                    return t = t.replace(i, " "), decodeURIComponent(t)
                }

                function n(e, r, i) {
                    return Array.isArray(i) ? i.forEach(function (t) {
                        e = n(e, r, t)
                    }) : (e.length > 0 && (e += "&"), e += t(r), void 0 !== i && null !== i && (e += "=" + t(i))), e
                }

                var r, i;
                return r = /%20/g, i = /\+/g, {
                    read: function (t) {
                        var n = {};
                        return t.split("&").forEach(function (t) {
                            var r, i, o;
                            r = t.split("="), i = e(r[0]), o = 2 === r.length ? e(r[1]) : null, i in n ? (Array.isArray(n[i]) || (n[i] = [n[i]]), n[i].push(o)) : n[i] = o
                        }), n
                    }, write: function (t) {
                        var e = "";
                        return Object.keys(t).forEach(function (r) {
                            e = n(e, r, t[r])
                        }), e
                    }
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    65: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(t) {
                    return t && 1 === t.nodeType && "FORM" === t.tagName
                }

                function e(t) {
                    var e, n = new FormData;
                    for (var r in t)t.hasOwnProperty(r) && (e = t[r], e instanceof File ? n.append(r, e, e.name) : e instanceof Blob ? n.append(r, e) : n.append(r, String(e)));
                    return n
                }

                return {
                    write: function (n) {
                        if ("undefined" == typeof FormData)throw new Error("The multipart/form-data mime serializer requires FormData support");
                        if (n instanceof FormData)return n;
                        if (t(n))return new FormData(n);
                        if ("object" == typeof n && null !== n)return e(n);
                        throw new Error("Unable to create FormData from object " + n)
                    }
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    66: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                return {
                    read: function (t) {
                        return t
                    }, write: function (t) {
                        return t.toString()
                    }
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    67: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                var e = t("./makePromise"), n = t("./Scheduler"), r = t("./env").asap;
                return e({scheduler: new n(r)})
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"./Scheduler": 68, "./env": 80, "./makePromise": 82}],
    68: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(t) {
                    this._async = t, this._running = !1, this._queue = this, this._queueLen = 0, this._afterQueue = {}, this._afterQueueLen = 0;
                    var e = this;
                    this.drain = function () {
                        e._drain()
                    }
                }

                return t.prototype.enqueue = function (t) {
                    this._queue[this._queueLen++] = t, this.run()
                }, t.prototype.afterQueue = function (t) {
                    this._afterQueue[this._afterQueueLen++] = t, this.run()
                }, t.prototype.run = function () {
                    this._running || (this._running = !0, this._async(this.drain))
                }, t.prototype._drain = function () {
                    for (var t = 0; t < this._queueLen; ++t)this._queue[t].run(), this._queue[t] = void 0;
                    for (this._queueLen = 0, this._running = !1, t = 0; t < this._afterQueueLen; ++t)this._afterQueue[t].run(), this._afterQueue[t] = void 0;
                    this._afterQueueLen = 0
                }, t
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    69: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(e) {
                    Error.call(this), this.message = e, this.name = t.name, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t)
                }

                return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    70: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(t, n) {
                    function r(e, r, o) {
                        var s = t._defer(), a = o.length, u = new Array(a);
                        return i({f: e, thisArg: r, args: o, params: u, i: a - 1, call: n}, s._handler), s
                    }

                    function i(e, r) {
                        if (e.i < 0)return n(e.f, e.thisArg, e.params, r);
                        var i = t._handler(e.args[e.i]);
                        i.fold(o, e, void 0, r)
                    }

                    function o(t, e, n) {
                        t.params[t.i] = e, t.i -= 1, i(t, n)
                    }

                    return arguments.length < 2 && (n = e), r
                }

                function e(t, e, n, r) {
                    try {
                        r.resolve(t.apply(e, n))
                    } catch (i) {
                        r.reject(i)
                    }
                }

                return t.tryCatchResolve = e, t
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    71: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                var e = t("../state"), n = t("../apply");
                return function (t) {
                    function r(e) {
                        function n(t) {
                            f = null, this.resolve(t)
                        }

                        function r(t) {
                            this.resolved || (f.push(t), 0 === --c && this.reject(f))
                        }

                        for (var i, o, s = t._defer(), a = s._handler, u = e.length >>> 0, c = u, f = [], l = 0; u > l; ++l)if (o = e[l], void 0 !== o || l in e) {
                            if (i = t._handler(o), i.state() > 0) {
                                a.become(i), t._visitRemaining(e, l, i);
                                break
                            }
                            i.visit(a, n, r)
                        } else--c;
                        return 0 === c && a.reject(new RangeError("any(): array must not be empty")), s
                    }

                    function i(e, n) {
                        function r(t) {
                            this.resolved || (f.push(t), 0 === --d && (l = null, this.resolve(f)))
                        }

                        function i(t) {
                            this.resolved || (l.push(t), 0 === --o && (f = null, this.reject(l)))
                        }

                        var o, s, a, u = t._defer(), c = u._handler, f = [], l = [], p = e.length >>> 0, d = 0;
                        for (a = 0; p > a; ++a)s = e[a], (void 0 !== s || a in e) && ++d;
                        for (n = Math.max(n, 0), o = d - n + 1, d = Math.min(n, d), n > d ? c.reject(new RangeError("some(): array must contain at least " + n + " item(s), but had " + d)) : 0 === d && c.resolve(f), a = 0; p > a; ++a)s = e[a], (void 0 !== s || a in e) && t._handler(s).visit(c, r, i, c.notify);
                        return u
                    }

                    function o(e, n) {
                        return t._traverse(n, e)
                    }

                    function s(e, n) {
                        var r = v.call(e);
                        return t._traverse(n, r).then(function (t) {
                            return a(r, t)
                        })
                    }

                    function a(e, n) {
                        for (var r = n.length, i = new Array(r), o = 0, s = 0; r > o; ++o)n[o] && (i[s++] = t._handler(e[o]).value);
                        return i.length = s, i
                    }

                    function u(t) {
                        return y(t.map(c))
                    }

                    function c(n) {
                        var r = t._handler(n);
                        return 0 === r.state() ? h(n).then(e.fulfilled, e.rejected) : (r._unreport(), e.inspect(r));
                    }

                    function f(t, e) {
                        return arguments.length > 2 ? m.call(t, p(e), arguments[2]) : m.call(t, p(e))
                    }

                    function l(t, e) {
                        return arguments.length > 2 ? g.call(t, p(e), arguments[2]) : g.call(t, p(e))
                    }

                    function p(t) {
                        return function (e, n, r) {
                            return d(t, void 0, [e, n, r])
                        }
                    }

                    var d = n(t), h = t.resolve, y = t.all, m = Array.prototype.reduce, g = Array.prototype.reduceRight, v = Array.prototype.slice;
                    return t.any = r, t.some = i, t.settle = u, t.map = o, t.filter = s, t.reduce = f, t.reduceRight = l, t.prototype.spread = function (t) {
                        return this.then(y).then(function (e) {
                            return t.apply(this, e)
                        })
                    }, t
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../apply": 70, "../state": 83}],
    72: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t() {
                    throw new TypeError("catch predicate must be a function")
                }

                function e(t, e) {
                    return n(e) ? t instanceof e : e(t)
                }

                function n(t) {
                    return t === Error || null != t && t.prototype instanceof Error
                }

                function r(t) {
                    return ("object" == typeof t || "function" == typeof t) && null !== t
                }

                function i(t) {
                    return t
                }

                return function (n) {
                    function o(t, n) {
                        return function (r) {
                            return e(r, n) ? t.call(this, r) : c(r)
                        }
                    }

                    function s(t, e, n, i) {
                        var o = t.call(e);
                        return r(o) ? a(o, n, i) : n(i)
                    }

                    function a(t, e, n) {
                        return u(t).then(function () {
                            return e(n)
                        })
                    }

                    var u = n.resolve, c = n.reject, f = n.prototype["catch"];
                    return n.prototype.done = function (t, e) {
                        this._handler.visit(this._handler.receiver, t, e)
                    }, n.prototype["catch"] = n.prototype.otherwise = function (e) {
                        return arguments.length < 2 ? f.call(this, e) : "function" != typeof e ? this.ensure(t) : f.call(this, o(arguments[1], e))
                    }, n.prototype["finally"] = n.prototype.ensure = function (t) {
                        return "function" != typeof t ? this : this.then(function (e) {
                            return s(t, this, i, e)
                        }, function (e) {
                            return s(t, this, c, e)
                        })
                    }, n.prototype["else"] = n.prototype.orElse = function (t) {
                        return this.then(void 0, function () {
                            return t
                        })
                    }, n.prototype["yield"] = function (t) {
                        return this.then(function () {
                            return t
                        })
                    }, n.prototype.tap = function (t) {
                        return this.then(t)["yield"](this)
                    }, n
                }
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    73: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                return function (t) {
                    return t.prototype.fold = function (e, n) {
                        var r = this._beget();
                        return this._handler.fold(function (n, r, i) {
                            t._handler(n).fold(function (t, n, r) {
                                r.resolve(e.call(this, n, t))
                            }, r, this, i)
                        }, n, r._handler.receiver, r._handler), r
                    }, t
                }
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    74: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                var e = t("../state").inspect;
                return function (t) {
                    return t.prototype.inspect = function () {
                        return e(t._handler(this))
                    }, t
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../state": 83}],
    75: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                return function (t) {
                    function e(t, e, r, i) {
                        return n(function (e) {
                            return [e, t(e)]
                        }, e, r, i)
                    }

                    function n(t, e, i, o) {
                        function s(o, s) {
                            return r(i(o)).then(function () {
                                return n(t, e, i, s)
                            })
                        }

                        return r(o).then(function (n) {
                            return r(e(n)).then(function (e) {
                                return e ? n : r(t(n)).spread(s)
                            })
                        })
                    }

                    var r = t.resolve;
                    return t.iterate = e, t.unfold = n, t
                }
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    76: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                return function (t) {
                    return t.prototype.progress = function (t) {
                        return this.then(void 0, void 0, t)
                    }, t
                }
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    77: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                function e(t, e, r, i) {
                    return n.setTimer(function () {
                        t(r, i, e)
                    }, e)
                }

                var n = t("../env"), r = t("../TimeoutError");
                return function (t) {
                    function i(t, n, r) {
                        e(o, t, n, r)
                    }

                    function o(t, e) {
                        e.resolve(t)
                    }

                    function s(t, e, n) {
                        var i = "undefined" == typeof t ? new r("timed out after " + n + "ms") : t;
                        e.reject(i)
                    }

                    return t.prototype.delay = function (t) {
                        var e = this._beget();
                        return this._handler.fold(i, t, void 0, e._handler), e
                    }, t.prototype.timeout = function (t, r) {
                        var i = this._beget(), o = i._handler, a = e(s, t, r, i._handler);
                        return this._handler.visit(o, function (t) {
                            n.clearTimer(a), this.resolve(t)
                        }, function (t) {
                            n.clearTimer(a), this.reject(t)
                        }, o.notify), i
                    }, t
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../TimeoutError": 69, "../env": 80}],
    78: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                function e(t) {
                    throw t
                }

                function n() {
                }

                var r = t("../env").setTimer, i = t("../format");
                return function (t) {
                    function o(t) {
                        t.handled || (d.push(t), f("Potentially unhandled rejection [" + t.id + "] " + i.formatError(t.value)))
                    }

                    function s(t) {
                        var e = d.indexOf(t);
                        e >= 0 && (d.splice(e, 1), l("Handled previous rejection [" + t.id + "] " + i.formatObject(t.value)))
                    }

                    function a(t, e) {
                        p.push(t, e), null === h && (h = r(u, 0))
                    }

                    function u() {
                        for (h = null; p.length > 0;)p.shift()(p.shift())
                    }

                    var c, f = n, l = n;
                    "undefined" != typeof console && (c = console, f = "undefined" != typeof c.error ? function (t) {
                        c.error(t)
                    } : function (t) {
                        c.log(t)
                    }, l = "undefined" != typeof c.info ? function (t) {
                        c.info(t)
                    } : function (t) {
                        c.log(t)
                    }), t.onPotentiallyUnhandledRejection = function (t) {
                        a(o, t)
                    }, t.onPotentiallyUnhandledRejectionHandled = function (t) {
                        a(s, t)
                    }, t.onFatalRejection = function (t) {
                        a(e, t.value)
                    };
                    var p = [], d = [], h = null;
                    return t
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"../env": 80, "../format": 81}],
    79: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                return function (t) {
                    return t.prototype["with"] = t.prototype.withThis = function (t) {
                        var e = this._beget(), n = e._handler;
                        return n.receiver = t, this._handler.chain(n, t), e
                    }, t
                }
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    80: [function (t, e, n) {
        (function (n) {
            !function (t) {
                "use strict";
                t(function (t) {
                    function e() {
                        return "undefined" != typeof n && "[object process]" === Object.prototype.toString.call(n)
                    }

                    function r() {
                        return "function" == typeof MutationObserver && MutationObserver || "function" == typeof WebKitMutationObserver && WebKitMutationObserver
                    }

                    function i(t) {
                        function e() {
                            var t = n;
                            n = void 0, t()
                        }

                        var n, r = document.createTextNode(""), i = new t(e);
                        i.observe(r, {characterData: !0});
                        var o = 0;
                        return function (t) {
                            n = t, r.data = o ^= 1
                        }
                    }

                    var o, s = "undefined" != typeof setTimeout && setTimeout, a = function (t, e) {
                        return setTimeout(t, e)
                    }, u = function (t) {
                        return clearTimeout(t)
                    }, c = function (t) {
                        return s(t, 0)
                    };
                    if (e())c = function (t) {
                        return n.nextTick(t)
                    }; else if (o = r())c = i(o); else if (!s) {
                        var f = t, l = f("vertx");
                        a = function (t, e) {
                            return l.setTimer(e, t)
                        }, u = l.cancelTimer, c = l.runOnLoop || l.runOnContext
                    }
                    return {setTimer: a, clearTimer: u, asap: c}
                })
            }("function" == typeof define && define.amd ? define : function (n) {
                e.exports = n(t)
            })
        }).call(this, t("_process"))
    }, {_process: 4}],
    81: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(t) {
                    var n = "object" == typeof t && null !== t && (t.stack || t.message) ? t.stack || t.message : e(t);
                    return t instanceof Error ? n : n + " (WARNING: non-Error used)"
                }

                function e(t) {
                    var e = String(t);
                    return "[object Object]" === e && "undefined" != typeof JSON && (e = n(t, e)), e
                }

                function n(t, e) {
                    try {
                        return JSON.stringify(t)
                    } catch (n) {
                        return e
                    }
                }

                return {formatError: t, formatObject: e, tryStringify: n}
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    82: [function (t, e, n) {
        (function (t) {
            !function (e) {
                "use strict";
                e(function () {
                    return function (e) {
                        function n(t, e) {
                            this._handler = t === _ ? e : r(t)
                        }

                        function r(t) {
                            function e(t) {
                                i.resolve(t)
                            }

                            function n(t) {
                                i.reject(t)
                            }

                            function r(t) {
                                i.notify(t)
                            }

                            var i = new x;
                            try {
                                t(e, n, r)
                            } catch (o) {
                                n(o)
                            }
                            return i
                        }

                        function i(t) {
                            return C(t) ? t : new n(_, new E(g(t)))
                        }

                        function o(t) {
                            return new n(_, new E(new A(t)))
                        }

                        function s() {
                            return tt
                        }

                        function a() {
                            return new n(_, new x)
                        }

                        function u(t, e) {
                            var n = new x(t.receiver, t.join().context);
                            return new e(_, n)
                        }

                        function c(t) {
                            return l($, null, t)
                        }

                        function f(t, e) {
                            return l(q, t, e)
                        }

                        function l(t, e, r) {
                            function i(n, i, s) {
                                s.resolved || p(r, o, n, t(e, i, n), s)
                            }

                            function o(t, e, n) {
                                f[t] = e, 0 === --c && n.become(new T(f))
                            }

                            for (var s, a = "function" == typeof e ? i : o, u = new x, c = r.length >>> 0, f = new Array(c), l = 0; l < r.length && !u.resolved; ++l)s = r[l], void 0 !== s || l in r ? p(r, a, l, s, u) : --c;
                            return 0 === c && u.become(new T(f)), new n(_, u)
                        }

                        function p(t, e, n, r, i) {
                            if (L(r)) {
                                var o = v(r), s = o.state();
                                0 === s ? o.fold(e, n, void 0, i) : s > 0 ? e(n, o.value, i) : (i.become(o), d(t, n + 1, o))
                            } else e(n, r, i)
                        }

                        function d(t, e, n) {
                            for (var r = e; r < t.length; ++r)h(g(t[r]), n)
                        }

                        function h(t, e) {
                            if (t !== e) {
                                var n = t.state();
                                0 === n ? t.visit(t, void 0, t._unreport) : 0 > n && t._unreport()
                            }
                        }

                        function y(t) {
                            return "object" != typeof t || null === t ? o(new TypeError("non-iterable passed to race()")) : 0 === t.length ? s() : 1 === t.length ? i(t[0]) : m(t)
                        }

                        function m(t) {
                            var e, r, i, o = new x;
                            for (e = 0; e < t.length; ++e)if (r = t[e], void 0 !== r || e in t) {
                                if (i = g(r), 0 !== i.state()) {
                                    o.become(i), d(t, e + 1, i);
                                    break
                                }
                                i.visit(o, o.resolve, o.reject)
                            }
                            return new n(_, o)
                        }

                        function g(t) {
                            return C(t) ? t._handler.join() : L(t) ? b(t) : new T(t)
                        }

                        function v(t) {
                            return C(t) ? t._handler.join() : b(t)
                        }

                        function b(t) {
                            try {
                                var e = t.then;
                                return "function" == typeof e ? new j(e, t) : new T(t)
                            } catch (n) {
                                return new A(n)
                            }
                        }

                        function _() {
                        }

                        function w() {
                        }

                        function x(t, e) {
                            n.createContext(this, e), this.consumers = void 0, this.receiver = t, this.handler = void 0, this.resolved = !1
                        }

                        function E(t) {
                            this.handler = t
                        }

                        function j(t, e) {
                            x.call(this), J.enqueue(new D(t, e, this))
                        }

                        function T(t) {
                            n.createContext(this), this.value = t
                        }

                        function A(t) {
                            n.createContext(this), this.id = ++X, this.value = t, this.handled = !1, this.reported = !1, this._report()
                        }

                        function S(t, e) {
                            this.rejection = t, this.context = e
                        }

                        function I(t) {
                            this.rejection = t
                        }

                        function O() {
                            return new A(new TypeError("Promise cycle"))
                        }

                        function R(t, e) {
                            this.continuation = t, this.handler = e
                        }

                        function k(t, e) {
                            this.handler = e, this.value = t
                        }

                        function D(t, e, n) {
                            this._then = t, this.thenable = e, this.resolver = n
                        }

                        function N(t, e, n, r, i) {
                            try {
                                t.call(e, n, r, i)
                            } catch (o) {
                                r(o)
                            }
                        }

                        function P(t, e, n, r) {
                            this.f = t, this.z = e, this.c = n, this.to = r, this.resolver = K, this.receiver = this
                        }

                        function C(t) {
                            return t instanceof n
                        }

                        function L(t) {
                            return ("object" == typeof t || "function" == typeof t) && null !== t
                        }

                        function M(t, e, r, i) {
                            return "function" != typeof t ? i.become(e) : (n.enterContext(e), G(t, e.value, r, i), void n.exitContext())
                        }

                        function U(t, e, r, i, o) {
                            return "function" != typeof t ? o.become(r) : (n.enterContext(r), z(t, e, r.value, i, o), void n.exitContext())
                        }

                        function F(t, e, r, i, o) {
                            return "function" != typeof t ? o.notify(e) : (n.enterContext(r), Q(t, e, i, o), void n.exitContext())
                        }

                        function q(t, e, n) {
                            try {
                                return t(e, n)
                            } catch (r) {
                                return o(r)
                            }
                        }

                        function G(t, e, n, r) {
                            try {
                                r.become(g(t.call(n, e)))
                            } catch (i) {
                                r.become(new A(i))
                            }
                        }

                        function z(t, e, n, r, i) {
                            try {
                                t.call(r, e, n, i)
                            } catch (o) {
                                i.become(new A(o))
                            }
                        }

                        function Q(t, e, n, r) {
                            try {
                                r.notify(t.call(n, e))
                            } catch (i) {
                                r.notify(i)
                            }
                        }

                        function H(t, e) {
                            e.prototype = Y(t.prototype), e.prototype.constructor = e
                        }

                        function $(t, e) {
                            return e
                        }

                        function W() {
                        }

                        function B() {
                            return "undefined" != typeof t && null !== t && "function" == typeof t.emit ? function (e, n) {
                                return "unhandledRejection" === e ? t.emit(e, n.value, n) : t.emit(e, n)
                            } : "undefined" != typeof self && "function" == typeof CustomEvent ? function (t, e, n) {
                                var r = !1;
                                try {
                                    var i = new n("unhandledRejection");
                                    r = i instanceof n
                                } catch (o) {
                                }
                                return r ? function (t, r) {
                                    var i = new n(t, {detail: {reason: r.value, key: r}, bubbles: !1, cancelable: !0});
                                    return !e.dispatchEvent(i)
                                } : t
                            }(W, self, CustomEvent) : W
                        }

                        var J = e.scheduler, V = B(), Y = Object.create || function (t) {
                                function e() {
                                }

                                return e.prototype = t, new e
                            };
                        n.resolve = i, n.reject = o, n.never = s, n._defer = a, n._handler = g, n.prototype.then = function (t, e, n) {
                            var r = this._handler, i = r.join().state();
                            if ("function" != typeof t && i > 0 || "function" != typeof e && 0 > i)return new this.constructor(_, r);
                            var o = this._beget(), s = o._handler;
                            return r.chain(s, r.receiver, t, e, n), o
                        }, n.prototype["catch"] = function (t) {
                            return this.then(void 0, t)
                        }, n.prototype._beget = function () {
                            return u(this._handler, this.constructor)
                        }, n.all = c, n.race = y, n._traverse = f, n._visitRemaining = d, _.prototype.when = _.prototype.become = _.prototype.notify = _.prototype.fail = _.prototype._unreport = _.prototype._report = W, _.prototype._state = 0, _.prototype.state = function () {
                            return this._state
                        }, _.prototype.join = function () {
                            for (var t = this; void 0 !== t.handler;)t = t.handler;
                            return t
                        }, _.prototype.chain = function (t, e, n, r, i) {
                            this.when({resolver: t, receiver: e, fulfilled: n, rejected: r, progress: i})
                        }, _.prototype.visit = function (t, e, n, r) {
                            this.chain(K, t, e, n, r)
                        }, _.prototype.fold = function (t, e, n, r) {
                            this.when(new P(t, e, n, r))
                        }, H(_, w), w.prototype.become = function (t) {
                            t.fail()
                        };
                        var K = new w;
                        H(_, x), x.prototype._state = 0, x.prototype.resolve = function (t) {
                            this.become(g(t))
                        }, x.prototype.reject = function (t) {
                            this.resolved || this.become(new A(t))
                        }, x.prototype.join = function () {
                            if (!this.resolved)return this;
                            for (var t = this; void 0 !== t.handler;)if (t = t.handler, t === this)return this.handler = O();
                            return t
                        }, x.prototype.run = function () {
                            var t = this.consumers, e = this.handler;
                            this.handler = this.handler.join(), this.consumers = void 0;
                            for (var n = 0; n < t.length; ++n)e.when(t[n])
                        }, x.prototype.become = function (t) {
                            this.resolved || (this.resolved = !0, this.handler = t, void 0 !== this.consumers && J.enqueue(this), void 0 !== this.context && t._report(this.context))
                        }, x.prototype.when = function (t) {
                            this.resolved ? J.enqueue(new R(t, this.handler)) : void 0 === this.consumers ? this.consumers = [t] : this.consumers.push(t)
                        }, x.prototype.notify = function (t) {
                            this.resolved || J.enqueue(new k(t, this))
                        }, x.prototype.fail = function (t) {
                            var e = "undefined" == typeof t ? this.context : t;
                            this.resolved && this.handler.join().fail(e)
                        }, x.prototype._report = function (t) {
                            this.resolved && this.handler.join()._report(t)
                        }, x.prototype._unreport = function () {
                            this.resolved && this.handler.join()._unreport()
                        }, H(_, E), E.prototype.when = function (t) {
                            J.enqueue(new R(t, this))
                        }, E.prototype._report = function (t) {
                            this.join()._report(t)
                        }, E.prototype._unreport = function () {
                            this.join()._unreport()
                        }, H(x, j), H(_, T), T.prototype._state = 1, T.prototype.fold = function (t, e, n, r) {
                            U(t, e, this, n, r)
                        }, T.prototype.when = function (t) {
                            M(t.fulfilled, this, t.receiver, t.resolver)
                        };
                        var X = 0;
                        H(_, A), A.prototype._state = -1, A.prototype.fold = function (t, e, n, r) {
                            r.become(this)
                        }, A.prototype.when = function (t) {
                            "function" == typeof t.rejected && this._unreport(), M(t.rejected, this, t.receiver, t.resolver)
                        }, A.prototype._report = function (t) {
                            J.afterQueue(new S(this, t))
                        }, A.prototype._unreport = function () {
                            this.handled || (this.handled = !0, J.afterQueue(new I(this)))
                        }, A.prototype.fail = function (t) {
                            this.reported = !0, V("unhandledRejection", this), n.onFatalRejection(this, void 0 === t ? this.context : t)
                        }, S.prototype.run = function () {
                            this.rejection.handled || this.rejection.reported || (this.rejection.reported = !0, V("unhandledRejection", this.rejection) || n.onPotentiallyUnhandledRejection(this.rejection, this.context))
                        }, I.prototype.run = function () {
                            this.rejection.reported && (V("rejectionHandled", this.rejection) || n.onPotentiallyUnhandledRejectionHandled(this.rejection))
                        }, n.createContext = n.enterContext = n.exitContext = n.onPotentiallyUnhandledRejection = n.onPotentiallyUnhandledRejectionHandled = n.onFatalRejection = W;
                        var Z = new _, tt = new n(_, Z);
                        return R.prototype.run = function () {
                            this.handler.join().when(this.continuation)
                        }, k.prototype.run = function () {
                            var t = this.handler.consumers;
                            if (void 0 !== t)for (var e, n = 0; n < t.length; ++n)e = t[n], F(e.progress, this.value, this.handler, e.receiver, e.resolver)
                        }, D.prototype.run = function () {
                            function t(t) {
                                r.resolve(t)
                            }

                            function e(t) {
                                r.reject(t)
                            }

                            function n(t) {
                                r.notify(t)
                            }

                            var r = this.resolver;
                            N(this._then, this.thenable, t, e, n)
                        }, P.prototype.fulfilled = function (t) {
                            this.f.call(this.c, this.z, t, this.to)
                        }, P.prototype.rejected = function (t) {
                            this.to.reject(t)
                        }, P.prototype.progress = function (t) {
                            this.to.notify(t)
                        }, n
                    }
                })
            }("function" == typeof define && define.amd ? define : function (t) {
                e.exports = t()
            })
        }).call(this, t("_process"))
    }, {_process: 4}],
    83: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t() {
                    return {state: "pending"}
                }

                function e(t) {
                    return {state: "rejected", reason: t}
                }

                function n(t) {
                    return {state: "fulfilled", value: t}
                }

                function r(r) {
                    var i = r.state();
                    return 0 === i ? t() : i > 0 ? n(r.value) : e(r.value)
                }

                return {pending: t, fulfilled: n, rejected: e, inspect: r}
            })
        }("function" == typeof define && define.amd ? define : function (t) {
            e.exports = t()
        })
    }, {}],
    84: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                function e(t, e, n, r) {
                    var i = E.resolve(t);
                    return arguments.length < 2 ? i : i.then(e, n, r)
                }

                function n(t) {
                    return new E(t)
                }

                function r(t) {
                    return function () {
                        for (var e = 0, n = arguments.length, r = new Array(n); n > e; ++e)r[e] = arguments[e];
                        return j(t, this, r)
                    }
                }

                function i(t) {
                    for (var e = 0, n = arguments.length - 1, r = new Array(n); n > e; ++e)r[e] = arguments[e + 1];
                    return j(t, this, r)
                }

                function o() {
                    return new s
                }

                function s() {
                    function t(t) {
                        r._handler.resolve(t)
                    }

                    function e(t) {
                        r._handler.reject(t)
                    }

                    function n(t) {
                        r._handler.notify(t)
                    }

                    var r = E._defer();
                    this.promise = r, this.resolve = t, this.reject = e, this.notify = n, this.resolver = {
                        resolve: t,
                        reject: e,
                        notify: n
                    }
                }

                function a(t) {
                    return t && "function" == typeof t.then
                }

                function u() {
                    return E.all(arguments)
                }

                function c(t) {
                    return e(t, E.all)
                }

                function f(t) {
                    return e(t, E.settle)
                }

                function l(t, n) {
                    return e(t, function (t) {
                        return E.map(t, n)
                    })
                }

                function p(t, n) {
                    return e(t, function (t) {
                        return E.filter(t, n)
                    })
                }

                var d = t("./lib/decorators/timed"), h = t("./lib/decorators/array"), y = t("./lib/decorators/flow"), m = t("./lib/decorators/fold"), g = t("./lib/decorators/inspect"), v = t("./lib/decorators/iterate"), b = t("./lib/decorators/progress"), _ = t("./lib/decorators/with"), w = t("./lib/decorators/unhandledRejection"), x = t("./lib/TimeoutError"), E = [h, y, m, v, b, g, _, d, w].reduce(function (t, e) {
                    return e(t)
                }, t("./lib/Promise")), j = t("./lib/apply")(E);
                return e.promise = n, e.resolve = E.resolve, e.reject = E.reject, e.lift = r, e["try"] = i, e.attempt = i, e.iterate = E.iterate, e.unfold = E.unfold, e.join = u, e.all = c, e.settle = f, e.any = r(E.any), e.some = r(E.some), e.race = r(E.race), e.map = l, e.filter = p, e.reduce = r(E.reduce), e.reduceRight = r(E.reduceRight), e.isPromiseLike = a, e.Promise = E, e.defer = o, e.TimeoutError = x, e
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {
        "./lib/Promise": 67,
        "./lib/TimeoutError": 69,
        "./lib/apply": 70,
        "./lib/decorators/array": 71,
        "./lib/decorators/flow": 72,
        "./lib/decorators/fold": 73,
        "./lib/decorators/inspect": 74,
        "./lib/decorators/iterate": 75,
        "./lib/decorators/progress": 76,
        "./lib/decorators/timed": 77,
        "./lib/decorators/unhandledRejection": 78,
        "./lib/decorators/with": 79
    }],
    85: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                return {
                    findProperties: function t(e, n, r) {
                        "object" == typeof e && null !== e && (n in e && r(e[n], e, n), Object.keys(e).forEach(function (i) {
                            t(e[i], n, r)
                        }))
                    }
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    86: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                function e(t) {
                    var e, r, i, o, s;
                    return e = n.defer(), r = !1, i = e.resolver, o = e.promise, s = o.then, o.then = function () {
                        return r || (r = !0, n.attempt(t).then(i.resolve, i.reject)), s.apply(o, arguments)
                    }, o
                }

                var n;
                return n = t("when"), e
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {when: 84}],
    87: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(t) {
                    var n, r, i, o;
                    for (t || (t = {}), n = 1, r = arguments.length; r > n; n += 1) {
                        i = arguments[n];
                        for (o in i)o in t && (t[o] === i[o] || o in e && e[o] === i[o]) || (t[o] = i[o])
                    }
                    return t
                }

                var e = {};
                return t
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    88: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(t) {
                    return t.toLowerCase().split("-").map(function (t) {
                        return t.charAt(0).toUpperCase() + t.slice(1)
                    }).join("-")
                }

                return t
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    89: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function (t) {
                function e(t, e) {
                    return t.then(function (t) {
                        return t && t[e]
                    }, function (t) {
                        return c.reject(t && t[e])
                    })
                }

                function n() {
                    return e(this, "entity")
                }

                function r() {
                    return e(e(this, "status"), "code")
                }

                function i() {
                    return e(this, "headers")
                }

                function o(t) {
                    return t = f(t), e(this.headers(), t)
                }

                function s(t) {
                    return t = [].concat(t), a(c.reduce(t, function (t, e) {
                        if ("string" == typeof e && (e = {rel: e}), "function" != typeof t.entity.clientFor)throw new Error("Hypermedia response expected");
                        var n = t.entity.clientFor(e.rel);
                        return n({params: e.params})
                    }, this))
                }

                function a(t) {
                    return t.status = r, t.headers = i, t.header = o, t.entity = n, t.follow = s, t
                }

                function u() {
                    return a(c.apply(c, arguments))
                }

                var c = t("when"), f = t("./normalizeHeaderName");
                return u.make = a, u.reject = function (t) {
                    return a(c.reject(t))
                }, u.promise = function (t) {
                    return a(c.promise(t))
                }, u
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"./normalizeHeaderName": 88, when: 84}],
    90: [function (t, e, n) {
        !function (t) {
            "use strict";
            t(function () {
                function t(t, e) {
                    if ("string" != typeof t)throw new Error("String required for URL encoding");
                    return t.split("").map(function (t) {
                        if (e.hasOwnProperty(t))return t;
                        var n = t.charCodeAt(0);
                        return 127 >= n ? "%" + n.toString(16).toUpperCase() : encodeURIComponent(t).toUpperCase()
                    }).join("")
                }

                function e(e) {
                    return e = e || r.unreserved, function (n) {
                        return t(n, e)
                    }
                }

                function n(t) {
                    return decodeURIComponent(t)
                }

                var r;
                return r = function () {
                    var t = {alpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", digit: "0123456789"};
                    return t.genDelims = ":/?#[]@", t.subDelims = "!$&'()*+,;=", t.reserved = t.genDelims + t.subDelims, t.unreserved = t.alpha + t.digit + "-._~", t.url = t.reserved + t.unreserved, t.scheme = t.alpha + t.digit + "+-.", t.userinfo = t.unreserved + t.subDelims + ":", t.host = t.unreserved + t.subDelims, t.port = t.digit, t.pchar = t.unreserved + t.subDelims + ":@", t.segment = t.pchar, t.path = t.segment + "/", t.query = t.pchar + "/?", t.fragment = t.pchar + "/?", Object.keys(t).reduce(function (e, n) {
                        return e[n] = t[n].split("").reduce(function (t, e) {
                            return t[e] = !0, t
                        }, {}), e
                    }, {})
                }(), {
                    decode: n,
                    encode: e(),
                    encodeURL: e(r.url),
                    encodeScheme: e(r.scheme),
                    encodeUserInfo: e(r.userinfo),
                    encodeHost: e(r.host),
                    encodePort: e(r.port),
                    encodePathSegment: e(r.segment),
                    encodePath: e(r.path),
                    encodeQuery: e(r.query),
                    encodeFragment: e(r.fragment)
                }
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {}],
    91: [function (t, e, n) {
        !function (t) {
            "use strict";
            var e;
            t(function (t) {
                function n(t, n, r) {
                    return n.split(",").reduce(function (n, i) {
                        var s, u;
                        if (s = {}, "*" === i.slice(-1) && (i = i.slice(0, -1), s.explode = !0), a.test(i)) {
                            var c = a.exec(i);
                            i = c[1], s.maxLength = parseInt(c[2])
                        }
                        return i = o.decode(i), u = r[i], u === e || null === u ? n : (Array.isArray(u) ? n += u.reduce(function (e, n) {
                            return e.length ? (e += s.explode ? t.separator : ",", t.named && s.explode && (e += t.encoder(i), e += n.length ? "=" : t.empty)) : (e += t.first, t.named && (e += t.encoder(i), e += n.length ? "=" : t.empty)), e += t.encoder(n)
                        }, "") : "object" == typeof u ? n += Object.keys(u).reduce(function (e, n) {
                            return e.length ? e += s.explode ? t.separator : "," : (e += t.first, t.named && !s.explode && (e += t.encoder(i), e += u[n].length ? "=" : t.empty)), e += t.encoder(n), e += s.explode ? "=" : ",", e += t.encoder(u[n])
                        }, "") : (u = String(u), s.maxLength && (u = u.slice(0, s.maxLength)), n += n.length ? t.separator : t.first, t.named && (n += t.encoder(i), n += u.length ? "=" : t.empty), n += t.encoder(u)), n)
                    }, "")
                }

                function r(t, e) {
                    var r;
                    if (r = s[t.slice(0, 1)], r ? t = t.slice(1) : r = s[""], r.reserved)throw new Error("Reserved expression operations are not supported");
                    return n(r, t, e)
                }

                function i(t, e) {
                    var n, i, o;
                    for (o = "", i = 0; ;) {
                        if (n = t.indexOf("{", i), -1 === n) {
                            o += t.slice(i);
                            break
                        }
                        o += t.slice(i, n), i = t.indexOf("}", n) + 1, o += r(t.slice(n + 1, i - 1), e)
                    }
                    return o
                }

                var o, s, a;
                return o = t("./uriEncoder"), a = /^([^:]*):([0-9]+)$/, s = {
                    "": {
                        first: "",
                        separator: ",",
                        named: !1,
                        empty: "",
                        encoder: o.encode
                    },
                    "+": {first: "", separator: ",", named: !1, empty: "", encoder: o.encodeURL},
                    "#": {first: "#", separator: ",", named: !1, empty: "", encoder: o.encodeURL},
                    ".": {first: ".", separator: ".", named: !1, empty: "", encoder: o.encode},
                    "/": {first: "/", separator: "/", named: !1, empty: "", encoder: o.encode},
                    ";": {first: ";", separator: ";", named: !0, empty: "", encoder: o.encode},
                    "?": {first: "?", separator: "&", named: !0, empty: "=", encoder: o.encode},
                    "&": {first: "&", separator: "&", named: !0, empty: "=", encoder: o.encode},
                    "=": {reserved: !0},
                    ",": {reserved: !0},
                    "!": {reserved: !0},
                    "@": {reserved: !0},
                    "|": {reserved: !0}
                }, {expand: i}
            })
        }("function" == typeof define && define.amd ? define : function (n) {
            e.exports = n(t)
        })
    }, {"./uriEncoder": 90}],
    92: [function (t, e, n) {
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)i.call(n, r) && (t[r] = n[r])
            }
            return t
        }

        e.exports = r;
        var i = Object.prototype.hasOwnProperty
    }, {}],
    93: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            t = Math.round(t * e), t <<= 1, 0 > t && (t = ~t);
            for (var n = ""; t >= 32;)n += String.fromCharCode((32 | 31 & t) + 63), t >>= 5;
            return n += String.fromCharCode(t + 63)
        }

        function i(t) {
            for (var e = [], n = 0; n < t.length; n++)e.push(t[n].slice().reverse());
            return e
        }

        var o = {};
        o.decode = function (t, e) {
            for (var n, r, i = 0, o = 0, s = 0, a = [], u = 0, c = 0, f = null, l = Math.pow(10, e || 5); i < t.length;) {
                f = null, u = 0, c = 0;
                do f = t.charCodeAt(i++) - 63, c |= (31 & f) << u, u += 5; while (f >= 32);
                n = 1 & c ? ~(c >> 1) : c >> 1, u = c = 0;
                do f = t.charCodeAt(i++) - 63, c |= (31 & f) << u, u += 5; while (f >= 32);
                r = 1 & c ? ~(c >> 1) : c >> 1, o += n, s += r, a.push([o / l, s / l])
            }
            return a
        }, o.encode = function (t, e) {
            if (!t.length)return "";
            for (var n = Math.pow(10, e || 5), i = r(t[0][0], n) + r(t[0][1], n), o = 1; o < t.length; o++) {
                var s = t[o], a = t[o - 1];
                i += r(s[0] - a[0], n), i += r(s[1] - a[1], n)
            }
            return i
        }, o.fromGeoJSON = function (t, e) {
            if (t && "Feature" === t.type && (t = t.geometry), !t || "LineString" !== t.type)throw new Error("Input must be a GeoJSON LineString");
            return o.encode(i(t.coordinates), e)
        }, o.toGeoJSON = function (t, e) {
            var n = o.decode(t, e);
            return {type: "LineString", coordinates: i(n)}
        }, "object" == typeof e && e.exports && (e.exports = o)
    }, {}],
    94: [function (t, e, n) {
        "use strict";
        function r(t) {
            var e = t.dispatch, n = t.getState;
            return function (t) {
                return function (r) {
                    return "function" == typeof r ? r(e, n) : t(r)
                }
            }
        }

        Object.defineProperty(n, "__esModule", {value: !0}), n["default"] = r, e.exports = n["default"]
    }, {}],
    95: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function i(t, e) {
            function n() {
                return f
            }

            function r(t) {
                return l.push(t), function () {
                    var e = l.indexOf(t);
                    l.splice(e, 1)
                }
            }

            function i(t) {
                if (!s["default"](t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (p)throw new Error("Reducers may not dispatch actions.");
                try {
                    p = !0, f = c(f, t)
                } finally {
                    p = !1
                }
                return l.slice().forEach(function (t) {
                    return t()
                }), t
            }

            function o() {
                return c
            }

            function u(t) {
                c = t, i({type: a.INIT})
            }

            if ("function" != typeof t)throw new Error("Expected the reducer to be a function.");
            var c = t, f = e, l = [], p = !1;
            return i({type: a.INIT}), {dispatch: i, subscribe: r, getState: n, getReducer: o, replaceReducer: u}
        }

        n.__esModule = !0, n["default"] = i;
        var o = t("./utils/isPlainObject"), s = r(o), a = {INIT: "@@redux/INIT"};
        n.ActionTypes = a
    }, {"./utils/isPlainObject": 101}],
    96: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        n.__esModule = !0;
        var i = t("./createStore"), o = r(i), s = t("./utils/combineReducers"), a = r(s), u = t("./utils/bindActionCreators"), c = r(u), f = t("./utils/applyMiddleware"), l = r(f), p = t("./utils/compose"), d = r(p);
        n.createStore = o["default"], n.combineReducers = a["default"], n.bindActionCreators = c["default"], n.applyMiddleware = l["default"], n.compose = d["default"]
    }, {
        "./createStore": 95,
        "./utils/applyMiddleware": 97,
        "./utils/bindActionCreators": 98,
        "./utils/combineReducers": 99,
        "./utils/compose": 100
    }],
    97: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function i() {
            for (var t = arguments.length, e = Array(t), n = 0; t > n; n++)e[n] = arguments[n];
            return function (t) {
                return function (n, r) {
                    var i = t(n, r), s = i.dispatch, u = [], c = {
                        getState: i.getState, dispatch: function (t) {
                            return s(t)
                        }
                    };
                    return u = e.map(function (t) {
                        return t(c)
                    }), s = a["default"].apply(void 0, u.concat([i.dispatch])), o({}, i, {dispatch: s})
                }
            }
        }

        n.__esModule = !0;
        var o = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            };
        n["default"] = i;
        var s = t("./compose"), a = r(s);
        e.exports = n["default"]
    }, {"./compose": 100}],
    98: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function i(t, e) {
            return function () {
                return e(t.apply(void 0, arguments))
            }
        }

        function o(t, e) {
            if ("function" == typeof t)return i(t, e);
            if ("object" != typeof t || null == t)throw new Error("bindActionCreators expected an object or a function, instead received " + typeof t + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            return a["default"](t, function (t) {
                return i(t, e)
            })
        }

        n.__esModule = !0, n["default"] = o;
        var s = t("../utils/mapValues"), a = r(s);
        e.exports = n["default"]
    }, {"../utils/mapValues": 102}],
    99: [function (t, e, n) {
        (function (r) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function o(t, e) {
                var n = e && e.type, r = n && '"' + n.toString() + '"' || "an action";
                return 'Reducer "' + t + '" returned undefined handling ' + r + ". To ignore an action, you must explicitly return the previous state."
            }

            function s(t, e) {
                var n = Object.keys(e);
                if (0 === n.length)return void console.error("Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.");
                if (!f["default"](t))return void console.error('initialState has unexpected type of "' + {}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1] + '". Expected initialState to be an object with the following ' + ('keys: "' + n.join('", "') + '"'));
                var r = Object.keys(t).filter(function (t) {
                    return n.indexOf(t) < 0
                });
                r.length > 0 && console.error("Unexpected " + (r.length > 1 ? "keys" : "key") + " " + ('"' + r.join('", "') + '" in initialState will be ignored. ') + ('Expected to find one of the known reducer keys instead: "' + n.join('", "') + '"'))
            }

            function a(t) {
                var e = h["default"](t, function (t) {
                    return "function" == typeof t
                });
                Object.keys(e).forEach(function (t) {
                    var n = e[t];
                    if ("undefined" == typeof n(void 0, {type: u.ActionTypes.INIT}))throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    var r = Math.random().toString(36).substring(7).split("").join(".");
                    if ("undefined" == typeof n(void 0, {type: r}))throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + u.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
                });
                var n, i = p["default"](e, function () {
                });
                return function (t, a) {
                    void 0 === t && (t = i);
                    var u = p["default"](e, function (e, n) {
                        var r = e(t[n], a);
                        if ("undefined" == typeof r)throw new Error(o(n, a));
                        return r
                    });
                    return ("undefined" != typeof r && "undefined" != typeof r.env && "production" !== r.env.NODE_ENV || "undefined" != typeof __DEV__ && __DEV__) && (n || (s(t, u), n = !0)), u
                }
            }

            n.__esModule = !0, n["default"] = a;
            var u = t("../createStore"), c = t("../utils/isPlainObject"), f = i(c), l = t("../utils/mapValues"), p = i(l), d = t("../utils/pick"), h = i(d);
            e.exports = n["default"]
        }).call(this, t("_process"))
    }, {
        "../createStore": 95,
        "../utils/isPlainObject": 101,
        "../utils/mapValues": 102,
        "../utils/pick": 103,
        _process: 4
    }],
    100: [function (t, e, n) {
        "use strict";
        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; t > n; n++)e[n] = arguments[n];
            return e.reduceRight(function (t, e) {
                return e(t)
            })
        }

        n.__esModule = !0, n["default"] = r, e.exports = n["default"]
    }, {}],
    101: [function (t, e, n) {
        "use strict";
        function r(t) {
            if (!t || "object" != typeof t)return !1;
            var e = "function" == typeof t.constructor ? Object.getPrototypeOf(t) : Object.prototype;
            if (null === e)return !0;
            var n = e.constructor;
            return "function" == typeof n && n instanceof n && i(n) === i(Object)
        }

        n.__esModule = !0, n["default"] = r;
        var i = function (t) {
            return Function.prototype.toString.call(t)
        };
        e.exports = n["default"]
    }, {}],
    102: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            return Object.keys(t).reduce(function (n, r) {
                return n[r] = e(t[r], r), n
            }, {})
        }

        n.__esModule = !0, n["default"] = r, e.exports = n["default"]
    }, {}],
    103: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            return Object.keys(t).reduce(function (n, r) {
                return e(t[r]) && (n[r] = t[r]), n
            }, {})
        }

        n.__esModule = !0, n["default"] = r, e.exports = n["default"]
    }, {}],
    104: [function (t, e, n) {
        "use strict";
        var r = t("./src/suggestions");
        window.Suggestions = e.exports = r
    }, {"./src/suggestions": 108}],
    105: [function (t, e, n) {
        !function () {
            var t = this, r = {};
            "undefined" != typeof n ? e.exports = r : t.fuzzy = r, r.simpleFilter = function (t, e) {
                return e.filter(function (e) {
                    return r.test(t, e)
                })
            }, r.test = function (t, e) {
                return null !== r.match(t, e)
            }, r.match = function (t, e, n) {
                n = n || {};
                var r, i = 0, o = [], s = e.length, a = 0, u = 0, c = n.pre || "", f = n.post || "", l = n.caseSensitive && e || e.toLowerCase();
                t = n.caseSensitive && t || t.toLowerCase();
                for (var p = 0; s > p; p++)r = e[p], l[p] === t[i] ? (r = c + r + f, i += 1, u += 1 + u) : u = 0, a += u, o[o.length] = r;
                return i === t.length ? {rendered: o.join(""), score: a} : null
            }, r.filter = function (t, e, n) {
                return n = n || {}, e.reduce(function (e, i, o, s) {
                    var a = i;
                    n.extract && (a = n.extract(i));
                    var u = r.match(t, a, n);
                    return null != u && (e[e.length] = {string: u.rendered, score: u.score, index: o, original: i}), e
                }, []).sort(function (t, e) {
                    var n = e.score - t.score;
                    return n ? n : t.index - e.index
                })
            }
        }()
    }, {}],
    106: [function (t, e, n) {
        function r() {
            for (var t = {}, e = 0; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)i.call(n, r) && (t[r] = n[r])
            }
            return t
        }

        e.exports = r;
        var i = Object.prototype.hasOwnProperty
    }, {}],
    107: [function (t, e, n) {
        "Use strict";
        var r = function (t) {
            return this.component = t, this.items = [], this.active = 0, this.element = document.createElement("ul"), this.element.className = "suggestions", t.el.parentNode.insertBefore(this.element, t.el.nextSibling), this
        };
        r.prototype.show = function () {
            this.element.style.display = "block"
        }, r.prototype.hide = function () {
            this.element.style.display = "none"
        }, r.prototype.add = function (t) {
            this.items.push(t)
        }, r.prototype.clear = function () {
            this.items = [], this.active = 0
        }, r.prototype.isEmpty = function () {
            return !this.items.length
        }, r.prototype.draw = function () {
            if (this.element.innerHTML = "", 0 === this.items.length)return void this.hide();
            for (var t = 0; t < this.items.length; t++)this.drawItem(this.items[t], this.active === t);
            this.show()
        }, r.prototype.drawItem = function (t, e) {
            var n = document.createElement("li"), r = document.createElement("a");
            e && (n.className += " active"), r.innerHTML = t.string, n.appendChild(r), this.element.appendChild(n), n.addEventListener("mousedown", function () {
                this.handleMouseDown.call(this, t)
            }.bind(this))
        }, r.prototype.handleMouseDown = function (t) {
            this.component.value(t.original), this.clear(), this.draw()
        }, r.prototype.move = function (t) {
            this.active = t, this.draw()
        }, r.prototype.previous = function () {
            this.move(0 === this.active ? this.items.length - 1 : this.active - 1)
        }, r.prototype.next = function () {
            this.move(this.active === this.items.length - 1 ? 0 : this.active + 1)
        }, e.exports = r
    }, {}],
    108: [function (t, e, n) {
        "use strict";
        var r = t("xtend"), i = t("fuzzy"), o = t("./list"), s = function (t, e, n) {
            return n = n || {}, this.options = r({
                minLength: 2,
                limit: 5
            }, n), this.el = t, this.data = e || [], this.list = new o(this), this.query = "", this.selected = null, this.list.draw(), this.el.addEventListener("keyup", function (t) {
                this.handleKeyUp(t.keyCode)
            }.bind(this), !1), this.el.addEventListener("keydown", function (t) {
                this.handleKeyDown(t)
            }.bind(this)), this.el.addEventListener("focus", function () {
                this.handleFocus()
            }.bind(this)), this.el.addEventListener("blur", function () {
                this.handleBlur()
            }.bind(this)), this
        };
        s.prototype.handleKeyUp = function (t) {
            return 40 !== t && 38 !== t && 27 !== t && 13 !== t && 9 !== t ? (this.query = this.normalize(this.el.value), this.list.clear(), this.query.length < this.options.minLength ? void this.list.draw() : void this.getCandidates(function (t) {
                for (var e = 0; e < t.length && (this.list.add(t[e]), e !== this.options.limit - 1); e++);
                this.list.draw()
            }.bind(this))) : void 0
        }, s.prototype.handleKeyDown = function (t) {
            switch (t.keyCode) {
                case 13:
                case 9:
                    this.list.isEmpty() || (this.value(this.list.items[this.list.active].original), this.list.hide());
                    break;
                case 27:
                    this.list.isEmpty() || this.list.hide();
                    break;
                case 38:
                    this.list.previous();
                    break;
                case 40:
                    this.list.next()
            }
        }, s.prototype.handleBlur = function () {
            this.list.hide()
        }, s.prototype.handleFocus = function () {
            this.list.isEmpty() || this.list.show()
        }, s.prototype.update = function (t) {
            this.data = t, this.list.clear()
        }, s.prototype.normalize = function (t) {
            return t = t.toLowerCase()
        }, s.prototype.match = function (t, e) {
            return t.indexOf(e) > -1
        }, s.prototype.value = function (t) {
            if (this.selected = t, this.el.value = this.getItemValue(t), document.createEvent) {
                var e = document.createEvent("HTMLEvents");
                e.initEvent("change", !0, !1), this.el.dispatchEvent(e)
            } else this.el.fireEvent("onchange")
        }, s.prototype.getCandidates = function (t) {
            var e = {
                pre: "<strong>", post: "</strong>", extract: function (t) {
                    return this.getItemValue(t)
                }.bind(this)
            }, n = i.filter(this.query, this.data, e);
            t(n)
        }, s.prototype.getItemValue = function (t) {
            return t
        }, e.exports = s
    }, {"./list": 107, fuzzy: 105, xtend: 106}],
    109: [function (t, e, n) {
        var r = t("turf-meta").coordEach;
        e.exports = function (t) {
            var e = [1 / 0, 1 / 0, -(1 / 0), -(1 / 0)];
            return r(t, function (t) {
                e[0] > t[0] && (e[0] = t[0]), e[1] > t[1] && (e[1] = t[1]), e[2] < t[0] && (e[2] = t[0]), e[3] < t[1] && (e[3] = t[1])
            }), e
        }
    }, {"turf-meta": 110}],
    110: [function (t, e, n) {
        function r(t, e, n) {
            var r, i, o, s, a, u, c, f, p, d = 0, h = "FeatureCollection" === t.type, y = "Feature" === t.type, m = h ? t.features.length : 1;
            for (r = 0; m > r; r++)for (f = h ? t.features[r].geometry : y ? t.geometry : t, p = "GeometryCollection" === f.type, u = p ? f.geometries.length : 1, s = 0; u > s; s++)if (a = p ? f.geometries[s] : f, c = a.coordinates, d = !n || "Polygon" !== a.type && "MultiPolygon" !== a.type ? 0 : 1, "Point" === a.type)e(c); else if ("LineString" === a.type || "MultiPoint" === a.type)for (i = 0; i < c.length; i++)e(c[i]); else if ("Polygon" === a.type || "MultiLineString" === a.type)for (i = 0; i < c.length; i++)for (o = 0; o < c[i].length - d; o++)e(c[i][o]); else {
                if ("MultiPolygon" !== a.type)throw new Error("Unknown Geometry Type");
                for (i = 0; i < c.length; i++)for (o = 0; o < c[i].length; o++)for (l = 0; l < c[i][o].length - d; l++)e(c[i][o][l])
            }
        }

        function i(t, e, n, i) {
            return r(t, function (t) {
                n = e(n, t)
            }, i), n
        }

        function o(t, e) {
            var n;
            switch (t.type) {
                case"FeatureCollection":
                    for (features = t.features, n = 0; n < t.features.length; n++)e(t.features[n].properties);
                    break;
                case"Feature":
                    e(t.properties)
            }
        }

        function s(t, e, n) {
            return o(t, function (t) {
                n = e(n, t)
            }), n
        }

        e.exports.coordEach = r, e.exports.coordReduce = i, e.exports.propEach = o, e.exports.propReduce = s
    }, {}],
    111: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function i(t) {
            if (t && t.__esModule)return t;
            var e = {};
            if (null != t)for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e["default"] = t, e
        }

        function o(t) {
            return {type: q.ORIGIN_RESULTS, results: t ? t : []}
        }

        function s(t) {
            return {type: q.ORIGIN_QUERY, query: t}
        }

        function a(t) {
            return {type: q.DESTINATION_RESULTS, results: t ? t : []}
        }

        function u(t) {
            return {type: q.DESTINATION_QUERY, query: t}
        }

        function c(t) {
            return function (e) {
                var n = G.createPoint(t, {id: "origin", "marker-symbol": "A"});
                e({type: q.ORIGIN, origin: n}), e(M("directions.origin", {feature: n}))
            }
        }

        function f(t) {
            return function (e) {
                var n = G.createPoint(t, {id: "destination", "marker-symbol": "B"});
                e({type: q.DESTINATION, destination: n}), e(M("directions.destination", {feature: n}))
            }
        }

        function l(t) {
            return function (e) {
                e({type: q.DIRECTIONS, directions: t}), e(M("directions.route", {route: t}))
            }
        }

        function p(t) {
            return {type: q.WAYPOINTS, waypoints: t}
        }

        function d(t) {
            return {type: q.HOVER_MARKER, hoverMarker: t}
        }

        function h(t, e) {
            return function (n, r) {
                var i = r(), o = i.proximity, s = o ? {proximity: {longitude: o[0], latitude: o[1]}} : {};
                return H.geocodeForward(t.trim(), s, function (t, r) {
                    if (t)throw t;
                    return r.error ? n(b(r.error)) : (n(b(null)), n(e(r.features)))
                })
            }
        }

        function y() {
            return function (t, e) {
                var n = e(), r = n.routeIndex, i = n.profile, o = m(e);
                return H.getDirections(o, {profile: "mapbox." + i, geometry: "polyline"}, function (e, n) {
                    if (e)throw e;
                    return n.error ? t(b(n.error)) : (t(b(null)), n.routes[r] || t(j(0)), t(l(n.routes)), t(c(n.origin.geometry.coordinates)), void t(f(n.destination.geometry.coordinates)))
                })
            }
        }

        function m(t) {
            var e = t(), n = e.origin, r = e.destination, i = e.waypoints, o = [{
                longitude: n.geometry.coordinates[0],
                latitude: n.geometry.coordinates[1]
            }];
            return i.length && i.forEach(function (t) {
                o.push({longitude: t.geometry.coordinates[0], latitude: t.geometry.coordinates[1]})
            }), o.push({longitude: r.geometry.coordinates[0], latitude: r.geometry.coordinates[1]}), o
        }

        function g(t) {
            var e = {id: "waypoint"};
            return U(t, {properties: t.properties ? U(t.properties, e) : e})
        }

        function v(t, e) {
            return function (n) {
                n({type: t + "_LOADING", loading: e}), e && n(M("directions.loading", {type: t.toLowerCase()}))
            }
        }

        function b(t) {
            return function (e) {
                e({type: "ERROR", error: t}), t && e(M("directions.error", {error: t}))
            }
        }

        function _() {
            return function (t) {
                t({type: q.ORIGIN_CLEAR}), t(M("directions.clear", {type: "origin"})), t(b(null))
            }
        }

        function w() {
            return function (t) {
                t({type: q.DESTINATION_CLEAR}), t(M("directions.clear", {type: "destination"})), t(b(null))
            }
        }

        function x(t) {
            var e = t.accessToken ? t.accessToken : mapboxgl.accessToken;
            return H = new Q["default"](e), {type: q.SET_OPTIONS, options: t}
        }

        function E(t) {
            return function (e) {
                var n = t ? G.createPoint(t, {id: "hover"}) : {};
                e(d(n))
            }
        }

        function j(t) {
            return {type: q.ROUTE_INDEX, routeIndex: t}
        }

        function T(t) {
            return function (e, n) {
                var r = n(), i = r.destination;
                e(c(t)), i.geometry && e(y())
            }
        }

        function A(t) {
            return function (e, n) {
                var r = n(), i = r.origin;
                e(f(t)), i.geometry && e(y())
            }
        }

        function S(t) {
            return function (e, n) {
                var r = n(), i = r.origin, o = r.destination;
                e({
                    type: q.DIRECTIONS_PROFILE,
                    profile: t
                }), e(M("directions.profile", {profile: t})), i.geometry && o.geometry && e(y())
            }
        }

        function I() {
            return function (t, e) {
                var n = e();
                t(s(n.destinationQuery)), t(o(n.desintationResults)), t(u(n.originQuery)), t(a(n.originResults)), n.destination.geometry && t(c(n.destination.geometry.coordinates)), n.origin.geometry && t(f(n.origin.geometry.coordinates)), n.origin.geometry && n.destination.geometry && t(y())
            }
        }

        function O(t) {
            return function (e) {
                return e(v("ORIGIN", !0)), e(h(t, function (n) {
                    return e(v("ORIGIN", !1)), e(T(n[0].geometry.coordinates)), e(o(n)), e(s(t))
                }))
            }
        }

        function R(t) {
            return function (e) {
                return e(v("DESTINATION", !0)), e(h(t, function (n) {
                    return e(A(n[0].geometry.coordinates)), e(v("DESTINATION", !1)), e(a(n)), e(u(t))
                }))
            }
        }

        function k(t) {
            return function (e) {
                return G.validCoords(t) ? (e(v("ORIGIN", !0)), e(T(t)), e(s(t[0].toFixed(4) + ", " + t[1].toFixed(4))), e(h(t.join(), function (t) {
                    if (e(v("ORIGIN", !1)), !t.length)return {};
                    var n = t[0];
                    return n.context && n.context.length > 2 && e(s(n.place_name)), e(o(t))
                }))) : e(b(new Error("Coordinates are not valid")))
            }
        }

        function D(t) {
            return function (e) {
                return G.validCoords(t) ? (e(v("DESTINATION", !0)), e(A(t)), e(u(t[0].toFixed(4) + ", " + t[1].toFixed(4))), e(h(t.join(), function (t) {
                    if (e(v("DESTINATION", !1)), !t.length)return {};
                    var n = t[0];
                    return n.context && n.context.length > 2 && e(u(n.place_name)), e(a(t))
                }))) : e(b(new Error("Coordinates are not valid")))
            }
        }

        function N(t, e) {
            return function (n, r) {
                var i = r(), o = i.destination, s = i.waypoints;
                s.splice(t, 0, g(e)), n(p(s)), o.geometry && n(y())
            }
        }

        function P(t, e) {
            return function (n, r) {
                var i = r(), o = i.destination, s = i.waypoints;
                s[t] = g(e), n(p(s)), o.geometry && n(y())
            }
        }

        function C(t) {
            return function (e, n) {
                var r = n(), i = r.destination, o = r.waypoints;
                o = o.filter(function (e) {
                    return !G.coordinateMatch(e, t)
                }), e(p(o)), i.geometry && e(y())
            }
        }

        function L(t, e) {
            return function (n, r) {
                var i = r(), o = i.events;
                return o[t] = o[t] || [], o[t].push(e), {type: q.EVENTS, events: o}
            }
        }

        function M(t, e) {
            var n = this;
            return function (r, i) {
                var o = i(), s = o.events;
                if (!s[t])return {type: q.EVENTS, events: s};
                for (var a = s[t].slice(), u = 0; u < a.length; u++)a[u].call(n, e)
            }
        }

        n.__esModule = !0;
        var U = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            };
        n.clearOrigin = _, n.clearDestination = w, n.setOptions = x, n.hoverMarker = E, n.setRouteIndex = j, n.originCoordinates = T, n.destinationCoordinates = A, n.setProfile = S, n.reverse = I, n.queryOrigin = O, n.queryDestination = R, n.setOrigin = k, n.setDestination = D, n.addWaypoint = N, n.setWaypoint = P, n.removeWaypoint = C, n.eventSubscribe = L, n.eventEmit = M;
        var F = t("../constants/action_types"), q = i(F), G = t("../utils"), z = t("mapbox"), Q = r(z), H = void 0
    }, {"../constants/action_types": 112, "../utils": 118, mapbox: 38}],
    112: [function (t, e, n) {
        "use strict";
        n.__esModule = !0;
        var r = "DESTINATION";
        n.DESTINATION = r;
        var i = "DESTINATION_CLEAR";
        n.DESTINATION_CLEAR = i;
        var o = "DESTINATION_LOADING";
        n.DESTINATION_LOADING = o;
        var s = "DESTINATION_RESULTS";
        n.DESTINATION_RESULTS = s;
        var a = "DESTINATION_QUERY";
        n.DESTINATION_QUERY = a;
        var u = "DIRECTIONS";
        n.DIRECTIONS = u;
        var c = "DIRECTIONS_PROFILE";
        n.DIRECTIONS_PROFILE = c;
        var f = "EVENTS";
        n.EVENTS = f;
        var l = "ERROR";
        n.ERROR = l;
        var p = "HOVER_MARKER";
        n.HOVER_MARKER = p;
        var d = "ORIGIN";
        n.ORIGIN = d;
        var h = "ORIGIN_CLEAR";
        n.ORIGIN_CLEAR = h;
        var y = "ORIGIN_LOADING";
        n.ORIGIN_LOADING = y;
        var m = "ORIGIN_RESULTS";
        n.ORIGIN_RESULTS = m;
        var g = "ORIGIN_QUERY";
        n.ORIGIN_QUERY = g;
        var v = "ROUTE_INDEX";
        n.ROUTE_INDEX = v;
        var b = "SET_OPTIONS";
        n.SET_OPTIONS = b;
        var _ = "WAYPOINTS";
        n.WAYPOINTS = _
    }, {}],
    113: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        n.__esModule = !0;
        var o = t("lodash.template"), s = r(o), a = t("lodash.debounce"), u = r(a), c = t("suggestions"), f = r(c), l = t("turf-extent"), p = r(l), d = s["default"]("<div class='mapbox-directions-component mapbox-directions-inputs'>\n  <div class='mapbox-directions-origin'>\n    <label class='mapbox-form-label'>\n      <span class='directions-icon directions-icon-depart'></span>\n    </label>\n    <input\n      type='text'\n      value='<%- originQuery %>'\n      class='js-origin'\n      placeholder='Choose a starting place'\n    />\n    <div class='directions-pin-right'>\n      <button\n        class='directions-icon directions-icon-close js-origin-clear'\n        title='Clear value'>\n      </button>\n      <span class='directions-icon directions-icon-loading js-origin-loading'></span>\n    </div>\n  </div>\n\n  <button\n    class='directions-icon directions-icon-reverse directions-reverse js-reverse-inputs'\n    title='Reverse origin &amp; destination'>\n  </button>\n\n  <div class='mapbox-directions-destination'>\n    <label class='mapbox-form-label'>\n      <span class='directions-icon directions-icon-arrive'></span>\n    </label>\n    <input\n      type='text'\n      class='js-destination'\n      value='<%- destinationQuery %>'\n      placeholder='Choose destination'\n    />\n    <div class='directions-pin-right'>\n      <button\n        class='directions-icon directions-icon-close js-destination-clear'\n        title='Clear value'>\n      </button>\n      <span class='directions-icon directions-icon-loading js-destination-loading'></span>\n    </div>\n  </div>\n\n  <div class='mapbox-directions-profile mapbox-directions-clearfix'>\n    <input\n      type='radio'\n      name='profile'\n      <% if (profile === \"driving\") { %>checked<% } %>\n      id='mapbox-directions-profile-driving'\n    />\n    <label for='mapbox-directions-profile-driving'>Driving</label>\n    <input\n      type='radio'\n      name='profile'\n      <% if (profile === \"walking\") { %>checked<% } %>\n      id='mapbox-directions-profile-walking'\n    />\n    <label for='mapbox-directions-profile-walking'>Walking</label>\n    <input\n      type='radio'\n      name='profile'\n      <% if (profile === \"cycling\") { %>checked<% } %>\n      id='mapbox-directions-profile-cycling'\n    />\n    <label for='mapbox-directions-profile-cycling'>Cycling</label>\n  </div>\n</div>\n"), h = function () {
            function t(e, n, r, o) {
                i(this, t);
                var s = n.getState(), a = s.originQuery, u = s.destinationQuery, c = s.profile;
                e.innerHTML = d({
                    originQuery: a,
                    destinationQuery: u,
                    profile: c
                }), this.container = e, this.actions = r, this.store = n, this.map = o, this.onAdd(), this.render()
            }

            return t.prototype.animateToCoordinates = function (t, e) {
                var n = this.store.getState(), r = n.origin, i = n.destination;
                if (r.type && i.type) {
                    var o = p["default"]({type: "FeatureCollection", features: [r, i]});
                    this.map.fitBounds([[o[0], o[1]], [o[2], o[3]]], {padding: 40})
                } else this.map.flyTo({center: e})
            }, t.prototype.onAdd = function () {
                var t = this, e = this.actions, n = e.queryOrigin, r = e.queryDestination, i = e.originCoordinates, o = e.destinationCoordinates, s = e.clearOrigin, a = e.clearDestination, c = e.setProfile, l = e.reverse;
                this.originInput = this.container.querySelector(".js-origin"), this.destinationInput = this.container.querySelector(".js-destination"), this.originClear = this.container.querySelector(".js-origin-clear"), this.destinationClear = this.container.querySelector(".js-destination-clear"), this.originLoading = this.container.querySelector(".js-origin-loading"), this.destinationLoading = this.container.querySelector(".js-destination-loading"), this.originInput.addEventListener("keypress", u["default"](function (t) {
                    n(t.target.value)
                }), 300), this.originInput.addEventListener("change", function () {
                    if (t.originTypeahead.selected) {
                        var e = t.originTypeahead.selected.center;
                        i(e), t.animateToCoordinates("origin", e)
                    }
                }), this.originClear.addEventListener("click", s), this.destinationClear.addEventListener("click", a), this.destinationInput.addEventListener("keypress", u["default"](function (t) {
                    r(t.target.value)
                }), 300), this.destinationInput.addEventListener("change", function () {
                    if (t.destinationTypeahead.selected) {
                        var e = t.destinationTypeahead.selected.center;
                        o(e), t.animateToCoordinates("destination", e)
                    }
                }), this.originTypeahead = new f["default"](this.originInput, []), this.destinationTypeahead = new f["default"](this.destinationInput, []), this.originTypeahead.getItemValue = function (t) {
                    return t.place_name
                }, this.destinationTypeahead.getItemValue = function (t) {
                    return t.place_name
                };
                var p = this.container.querySelectorAll('input[type="radio"]');
                Array.prototype.forEach.call(p, function (t) {
                    t.addEventListener("change", function () {
                        c(t.id.split("-").pop())
                    })
                }), this.container.querySelector(".js-reverse-inputs").addEventListener("click", l)
            }, t.prototype.render = function () {
                var t = this;
                this.store.subscribe(function () {
                    var e = t.store.getState(), n = e.originQuery, r = e.originLoading, i = e.originResults, o = e.destinationQuery, s = e.destinationLoading, a = e.destinationResults;
                    i.length || (t.originTypeahead.selected = null), a.length || (t.destinationTypeahead.selected = null), t.originTypeahead.update(i), t.destinationTypeahead.update(a), t.originClear.classList.toggle("active", i.length), t.destinationClear.classList.toggle("active", a.length), t.originLoading.classList.toggle("active", r), t.destinationLoading.classList.toggle("active", s);
                    var u = document.createEvent("HTMLEvents");
                    u.initEvent("change", !0, !1), t.originInput !== document.activeElement && t.originInput.value !== n && (t.originInput.value = n, t.originInput.dispatchEvent(u)), t.destinationInput !== document.activeElement && t.destinationInput.value !== o && (t.destinationInput.value = o, t.destinationInput.dispatchEvent(u))
                })
            }, t
        }();
        n["default"] = h, e.exports = n["default"]
    }, {"lodash.debounce": 7, "lodash.template": 17, suggestions: 104, "turf-extent": 109}],
    114: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        n.__esModule = !0;
        var o = t("../utils"), s = t("lodash.template"), a = r(s), u = t("lodash.isequal"), c = r(u), f = a["default"]("<div class='directions-control directions-control-directions'>\n  <div class='mapbox-directions-component mapbox-directions-route-summary<% if (routes > 1) { %> mapbox-directions-multiple<% } %>'>\n    <% if (routes > 1) { %>\n    <div class='mapbox-directions-routes mapbox-directions-clearfix'>\n      <% for (var i = 0; i < routes; i++) { %>\n        <input type='radio' name='routes' id='<%= i %>' <% if (i === routeIndex) { %>checked<% } %>>\n        <label for='<%= i %>' class='mapbox-directions-route'><%= i + 1 %></label>\n      <% } %>\n    </div>\n    <% } %>\n    <h1><%- duration %></h1>\n    <span><%- distance %></span>\n  </div>\n\n  <div class='mapbox-directions-instructions'>\n    <ol class='mapbox-directions-steps'>\n      <% steps.forEach(function(step) { %>\n        <%\n          var distance = step.distance ? format(step.distance) : false;\n          var icon = step.maneuver.type.replace(/\\s+/g, '-').toLowerCase();\n          var lng = step.maneuver.location.coordinates[0];\n          var lat = step.maneuver.location.coordinates[1];\n        %>\n        <li\n          data-lat='<%= lat %>'\n          data-lng='<%= lng %>'\n          class='mapbox-directions-step'>\n          <span class='directions-icon directions-icon-<%= icon %>'></span>\n          <div class='mapbox-directions-step-maneuver'>\n            <%= step.maneuver.instruction %>\n          </div>\n          <% if (step.distance) { %>\n            <div class='mapbox-directions-step-distance'>\n              <%= distance %>\n            </div>\n          <% } %>\n        </li>\n      <% }); %>\n    </ol>\n  </div>\n</div>\n"), l = a["default"]("<div class='directions-control directions-control-directions'>\n  <div class='mapbox-directions-error'>\n    <%= error %>\n  </div>\n</div>\n"), p = function () {
            function t(e, n, r, o) {
                i(this, t), this.container = e, this.actions = r, this.store = n, this.map = o, this.directions = {}, this.render()
            }

            return t.prototype.render = function () {
                var t = this;
                this.store.subscribe(function () {
                    var e = t.actions, n = e.hoverMarker, r = e.setRouteIndex, i = t.store.getState(), s = i.routeIndex, a = i.unit, u = i.directions, p = i.error, d = !c["default"](u[s], t.directions);
                    if (p)return void(t.container.innerHTML = l({error: p}));
                    if (u.length && d) {
                        var h = t.directions = u[s];
                        t.container.innerHTML = f({
                            routeIndex: s,
                            routes: u.length,
                            steps: h.steps,
                            format: o.format[a],
                            duration: o.format[a](h.distance),
                            distance: o.format.duration(h.duration)
                        });
                        var y = t.container.querySelectorAll(".mapbox-directions-step");
                        Array.prototype.forEach.call(y, function (e) {
                            var r = e.getAttribute("data-lng"), i = e.getAttribute("data-lat");
                            e.addEventListener("mouseover", function () {
                                n([r, i])
                            }), e.addEventListener("mouseout", function () {
                                n(null)
                            }), e.addEventListener("click", function () {
                                t.map.flyTo({center: [r, i], zoom: 16})
                            })
                        });
                        var m = t.container.querySelectorAll('input[type="radio"]');
                        Array.prototype.forEach.call(m, function (t) {
                            t.addEventListener("change", function (t) {
                                r(parseInt(t.target.id, 10))
                            })
                        })
                    } else t.container.innerHTML && d && (t.container.innerHTML = "")
                })
            }, t
        }();
        n["default"] = p, e.exports = n["default"]
    }, {"../utils": 118, "lodash.isequal": 9, "lodash.template": 17}],
    115: [function (t, e, n) {
        "use strict";
        function r(t) {
            if (t && t.__esModule)return t;
            var e = {};
            if (null != t)for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e["default"] = t, e
        }

        function i(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        n.__esModule = !0;
        var a = t("redux"), u = t("redux-thunk"), c = i(u), f = t("polyline"), l = t("./utils"), p = t("./reducers"), d = i(p), h = t("./actions"), y = r(h), m = t("./directions_style"), g = i(m), v = t("./controls/inputs"), b = i(v), _ = t("./controls/instructions"), w = i(_), x = a.applyMiddleware(c["default"])(a.createStore), E = x(d["default"]), j = function (t) {
            function e(n) {
                o(this, e), t.call(this), this.actions = a.bindActionCreators(y, E.dispatch), this.actions.setOptions(n || {}), this.onMouseDown = this._onMouseDown.bind(this), this.onMouseMove = this._onMouseMove.bind(this), this.onMouseUp = this._onMouseUp.bind(this)
            }

            return s(e, t), e.prototype.onAdd = function (t) {
                var e = this;
                this.map = t;
                var n = E.getState(), r = n.container;
                this.container = r ? "string" == typeof r ? document.getElementById(r) : r : this.map.getContainer();
                var i = document.createElement("div");
                i.className = "directions-control directions-control-inputs";
                var o = document.createElement("div");
                o.className = "directions-control-directions-container", this.container.appendChild(i), this.container.appendChild(o), new b["default"](i, E, this.actions, this.map), new w["default"](o, E, {
                    hoverMarker: this.actions.hoverMarker,
                    setRouteIndex: this.actions.setRouteIndex
                }, this.map), this.subscribedActions(), t.on("style.load", function () {
                    e.mapState()
                })
            }, e.prototype.mapState = function () {
                var t = this, e = E.getState(), n = e.profile;
                this.actions.eventEmit("directions.profile", {profile: n});
                var r = this.map, i = new mapboxgl.GeoJSONSource({data: {type: "FeatureCollection", features: []}});
                r.addSource("directions", i), g["default"].forEach(function (t) {
                    r.addLayer(t)
                }), r.getContainer().addEventListener("mousedown", this.onMouseDown), r.getContainer().addEventListener("mousemove", this.onMouseMove, !0), r.getContainer().addEventListener("mouseup", this.onMouseUp), r.on("mousemove", function (e) {
                    var n = E.getState(), i = n.hoverMarker;
                    r.featuresAt(e.point, {
                        radius: 10,
                        layer: ["directions-route-line-alt", "directions-route-line"]
                    }, function (t, e) {
                        if (t)throw t;
                        e.length ? r.getContainer().classList.add("directions-select") : r.getContainer().classList.remove("directions-select")
                    }), r.featuresAt(e.point, {radius: 2, layer: ["directions-route-line"]}, function (n, r) {
                        if (n)throw n;
                        if (r.length) {
                            var o = e.lngLat;
                            t.actions.hoverMarker([o.lng, o.lat])
                        } else i.geometry && t.actions.hoverMarker(null)
                    })
                }.bind(this)), r.on("click", function (e) {
                    var n = E.getState(), i = n.origin, o = [e.lngLat.lng, e.lngLat.lat];
                    i.geometry ? r.featuresAt(e.point, {
                        radius: 10,
                        includeGeometry: !0,
                        layer: ["directions-origin-point", "directions-destination-point", "directions-waypoint-point", "directions-route-line-alt"]
                    }, function (e, n) {
                        if (e)throw e;
                        if (n.length) {
                            if (n.forEach(function (e) {
                                    "directions-waypoint-point" === e.layer.id && t.actions.removeWaypoint(e)
                                }), "alternate" === n[0].properties.route) {
                                var r = n[0].properties["route-index"];
                                t.actions.setRouteIndex(r)
                            }
                        } else t.actions.setDestination(o), t.map.flyTo({center: o})
                    }) : t.actions.setOrigin(o)
                }.bind(this))
            }, e.prototype.subscribedActions = function () {
                var t = this;
                E.subscribe(function () {
                    var e = E.getState(), n = e.origin, r = e.destination, i = e.hoverMarker, o = e.directions, s = e.routeIndex, a = {
                        type: "FeatureCollection",
                        features: [n, r, i].filter(function (t) {
                            return t.geometry
                        })
                    };
                    o.length && o.forEach(function (t, e) {
                        var n = {
                            geometry: {
                                type: "LineString", coordinates: f.decode(t.geometry, 6).map(function (t) {
                                    return t.reverse()
                                })
                            }, properties: {"route-index": e, route: e === s ? "selected" : "alternate"}
                        };
                        a.features.push(n), e === s && t.steps.forEach(function (t) {
                            "waypoint" === t.maneuver.type && a.features.push({
                                type: "Feature",
                                geometry: t.maneuver.location,
                                properties: {id: "waypoint"}
                            })
                        })
                    }), t.map.style && t.map.getSource("directions").setData(a)
                })
            }, e.prototype.mousePos = function (t) {
                var e = this.map.getContainer(), n = e.getBoundingClientRect();
                return new mapboxgl.Point(t.clientX - n.left - e.clientLeft, t.clientY - n.top - e.clientTop)
            }, e.prototype._onMouseDown = function (t) {
                var e = this;
                this.map.featuresAt(this.mousePos(t), {
                    radius: 10,
                    includeGeometry: !0,
                    layer: ["directions-origin-point", "directions-destination-point", "directions-hover-point"]
                }, function (t, n) {
                    if (t)throw t;
                    n.length && (e.dragging = n[0], n.forEach(function (t) {
                        "directions-hover-point" === t.layer.id && e.actions.removeWaypoint(t)
                    }))
                })
            }, e.prototype._onMouseMove = function (t) {
                if (this.dragging) {
                    t.stopPropagation(), t.preventDefault(), this.map.getContainer().classList.add("directions-drag");
                    var e = this.map.unproject(this.mousePos(t)), n = [e.lng, e.lat];
                    switch (this.dragging.layer.id) {
                        case"directions-origin-point":
                            this.actions.originCoordinates(n);
                            break;
                        case"directions-destination-point":
                            this.actions.destinationCoordinates(n);
                            break;
                        case"directions-hover-point":
                            this.actions.hoverMarker(n)
                    }
                }
            }, e.prototype._onMouseUp = function () {
                var t = E.getState(), e = t.hoverMarker, n = t.origin, r = t.destination;
                if (this.dragging)switch (this.dragging.layer.id) {
                    case"directions-origin-point":
                        this.actions.setOrigin(n.geometry.coordinates);
                        break;
                    case"directions-destination-point":
                        this.actions.setDestination(r.geometry.coordinates);
                        break;
                    case"directions-hover-point":
                        e.geometry && !l.coordinateMatch(this.dragging, e) && this.actions.addWaypoint(0, e)
                }
                this.dragging = !1, this.map.getContainer().classList.remove("directions-drag")
            }, e.prototype.getOrigin = function () {
                return E.getState().origin
            }, e.prototype.setOrigin = function (t) {
                return "string" == typeof t ? this.actions.queryOrigin(t) : this.actions.setOrigin(t), this
            }, e.prototype.getDestination = function () {
                return E.getState().destination
            }, e.prototype.setDestination = function (t) {
                return "string" == typeof t ? this.actions.queryDestination(t) : this.actions.setDestination(t), this
            }, e.prototype.reverse = function () {
                return this.actions.reverse(), this
            }, e.prototype.addWaypoint = function (t, e) {
                return e.type || (e = l.createPoint(e, {id: "waypoint"})), this.actions.addWaypoint(t, e), this
            }, e.prototype.setWaypoint = function (t, e) {
                return e.type || (e = l.createPoint(e, {id: "waypoint"})), this.actions.setWaypoint(t, e), this
            }, e.prototype.removeWaypoint = function (t) {
                var e = E.getState(), n = e.waypoints;
                return this.actions.removeWaypoint(n[t]), this
            }, e.prototype.getWaypoints = function () {
                return E.getState().waypoints
            }, e.prototype.on = function (t, e) {
                return this.actions.eventSubscribe(t, e), this
            }, e
        }(mapboxgl.Control);
        n["default"] = j, e.exports = n["default"]
    }, {
        "./actions": 111,
        "./controls/inputs": 113,
        "./controls/instructions": 114,
        "./directions_style": 116,
        "./reducers": 117,
        "./utils": 118,
        polyline: 93,
        redux: 96,
        "redux-thunk": 94
    }],
    116: [function (t, e, n) {
        "use strict";
        n.__esModule = !0;
        var r = [{
            id: "directions-route-line-alt",
            type: "line",
            source: "directions",
            filter: ["all", ["in", "$type", "LineString"], ["in", "route", "alternate"]],
            layout: {"line-cap": "round", "line-join": "round"},
            paint: {"line-color": "#bbb", "line-width": 4},
            interactive: !0
        }, {
            id: "directions-route-line",
            type: "line",
            source: "directions",
            filter: ["all", ["in", "$type", "LineString"], ["in", "route", "selected"]],
            layout: {"line-cap": "round", "line-join": "round"},
            paint: {"line-color": "#3bb2d0", "line-width": 4},
            interactive: !0
        }, {
            id: "directions-hover-point",
            type: "circle",
            source: "directions",
            filter: ["all", ["in", "$type", "Point"], ["in", "id", "hover"]],
            paint: {"circle-radius": 5, "circle-color": "#3bb2d0"},
            interactive: !0
        }, {
            id: "directions-waypoint-point",
            type: "circle",
            source: "directions",
            filter: ["all", ["in", "$type", "Point"], ["in", "id", "waypoint"]],
            paint: {"circle-radius": 5, "circle-color": "#8a8bc9"},
            interactive: !0
        }, {
            id: "directions-origin-point",
            type: "circle",
            source: "directions",
            filter: ["all", ["in", "$type", "Point"], ["in", "marker-symbol", "A"]],
            paint: {"circle-radius": 7, "circle-color": "#3bb2d0"},
            interactive: !0
        }, {
            id: "directions-destination-point",
            type: "circle",
            source: "directions",
            filter: ["all", ["in", "$type", "Point"], ["in", "marker-symbol", "B"]],
            paint: {"circle-radius": 7, "circle-color": "#8a8bc9"},
            interactive: !0
        }];
        n["default"] = r, e.exports = n["default"]
    }, {}],
    117: [function (t, e, n) {
        "use strict";
        function r(t) {
            if (t && t.__esModule)return t;
            var e = {};
            if (null != t)for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e["default"] = t, e
        }

        function i(t, e) {
            switch (void 0 === t && (t = u), e.type) {
                case a.SET_OPTIONS:
                    return o({}, t, e.options);
                case a.DIRECTIONS_PROFILE:
                    return o({}, t, {profile: e.profile});
                case a.ORIGIN:
                    return o({}, t, {origin: e.origin, hoverMarker: {}});
                case a.DESTINATION:
                    return o({}, t, {destination: e.destination, hoverMarker: {}});
                case a.HOVER_MARKER:
                    return o({}, t, {hoverMarker: e.hoverMarker});
                case a.WAYPOINTS:
                    return o({}, t, {waypoints: e.waypoints});
                case a.ORIGIN_QUERY:
                    return o({}, t, {originQuery: e.query});
                case a.ORIGIN_RESULTS:
                    return o({}, t, {originResults: e.results});
                case a.DESTINATION_QUERY:
                    return o({}, t, {destinationQuery: e.query});
                case a.DESTINATION_RESULTS:
                    return o({}, t, {destinationResults: e.results});
                case a.ORIGIN_CLEAR:
                    return o({}, t, {origin: {}, originQuery: "", originResults: [], waypoints: [], directions: []});
                case a.DESTINATION_CLEAR:
                    return o({}, t, {
                        destination: {},
                        destinationQuery: "",
                        destinationResults: [],
                        waypoints: [],
                        directions: []
                    });
                case a.ORIGIN_LOADING:
                    return o({}, t, {originLoading: e.loading});
                case a.DESTINATION_LOADING:
                    return o({}, t, {destinationLoading: e.loading});
                case a.DIRECTIONS:
                    return o({}, t, {directions: e.directions});
                case a.ROUTE_INDEX:
                    return o({}, t, {routeIndex: e.routeIndex});
                case a.ERROR:
                    return o({}, t, {error: e.error});
                default:
                    return t
            }
        }

        n.__esModule = !0;
        var o = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }, s = t("../constants/action_types.js"), a = r(s), u = {
            profile: "driving",
            unit: "imperial",
            proximity: !1,
            events: {},
            origin: {},
            destination: {},
            hoverMarker: {},
            waypoints: [],
            originQuery: "",
            destinationQuery: "",
            originLoading: !1,
            destinationLoading: !1,
            originResults: [],
            destinationResults: [],
            directions: [],
            routeIndex: 0
        };
        n["default"] = i, e.exports = n["default"]
    }, {"../constants/action_types.js": 112}],
    118: [function (t, e, n) {
        "use strict";
        function r(t) {
            return t[0] >= -180 && t[0] <= 180 && t[1] >= -90 && t[1] <= 90
        }

        function i(t, e) {
            return t = t.geometry.coordinates, e = e.geometry.coordinates, t.join() === e.join() || t[0].toFixed(3) === e[0].toFixed(3) && t[1].toFixed(3) === e[1].toFixed(3)
        }

        function o(t, e) {
            return {type: "Feature", geometry: {type: "Point", coordinates: t}, properties: e ? e : {}}
        }

        n.__esModule = !0;
        var s = {
            duration: function (t) {
                var e = Math.floor(t / 60), n = Math.floor(e / 60);
                return t %= 60, e %= 60, 0 === n && 0 === e ? t + " s" : 0 === n ? e + " min" : n + " h " + e + " min"
            }, imperial: function (t) {
                var e = t / 1609.344;
                return e >= 100 ? e.toFixed(0) + " mi" : e >= 10 ? e.toFixed(1) + " mi" : e >= .1 ? e.toFixed(2) + " mi" : (5280 * e).toFixed(0) + " ft"
            }, metric: function (t) {
                return t >= 1e5 ? (t / 1e3).toFixed(0) + " km" : t >= 1e4 ? (t / 1e3).toFixed(1) + " km" : t >= 100 ? (t / 1e3).toFixed(2) + " km" : t.toFixed(0) + " m"
            }
        };
        n["default"] = {format: s, coordinateMatch: i, createPoint: o, validCoords: r}, e.exports = n["default"]
    }, {}]
}, {}, [1]);
