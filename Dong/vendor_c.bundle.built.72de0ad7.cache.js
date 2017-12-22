!function(t) {
        function e(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                        exports: {},
                        id: i,
                        loaded: !1
                };
                return t[i].call(r.exports, r, r.exports, e),
                r.loaded = !0,
                r.exports
        }
        var i = window.webpackJsonp;
        window.webpackJsonp = function(s, a) {
                for (var o, h, l = 0,
                u = []; l < s.length; l++) h = s[l],
                r[h] && u.push.apply(u, r[h]),
                r[h] = 0;
                for (o in a) t[o] = a[o];
                for (i && i(s, a); u.length;) u.shift().call(null, e);
                if (a[0]) return n[0] = 0,
                e(0)
        };
        var n = {},
        r = {
                1 : 0
        };
        return e.e = function(t, i) {
                if (0 === r[t]) return i.call(null, e);
                if (void 0 !== r[t]) r[t].push(i);
                else {
                        r[t] = [i];
                        var n = document.getElementsByTagName("head")[0],
                        s = document.createElement("script");
                        s.type = "text/javascript",
                        s.charset = "utf-8",
                        s.async = !0,
                        s.src = e.p + "" + t + "." + ({
                                0 : "pack"
                        } [t] || t) + ".built.js",
                        n.appendChild(s)
                }
        },
        e.m = t,
        e.c = n,
        e.p = "",
        e(0)
} ([function(t, e, i) {
        i(2),
        i(4),
        i(6),
        i(10),
        i(11),
        t.exports = i(12)
},
,
function(t, e, i) { (function(e) {
                "use strict";
                t.exports = e._ = i(3)
        }).call(e,
        function() {
                return this
        } ())
},
function(t, e, i) { (function() {
                var i = this,
                n = i._,
                r = {},
                s = Array.prototype,
                a = Object.prototype,
                o = Function.prototype,
                h = s.push,
                l = s.slice,
                u = s.concat,
                c = a.toString,
                f = a.hasOwnProperty,
                p = s.forEach,
                _ = s.map,
                d = s.reduce,
                m = s.reduceRight,
                g = s.filter,
                v = s.every,
                y = s.some,
                T = s.indexOf,
                b = s.lastIndexOf,
                x = Array.isArray,
                w = Object.keys,
                P = o.bind,
                E = function(t) {
                        return t instanceof E ? t: this instanceof E ? void(this._wrapped = t) : new E(t)
                };
                "undefined" != typeof t && t.exports && (e = t.exports = E),
                e._ = E,
                E.VERSION = "1.4.4";
                var S = E.each = E.forEach = function(t, e, i) {
                        if (null != t) if (p && t.forEach === p) t.forEach(e, i);
                        else if (t.length === +t.length) {
                                for (var n = 0,
                                s = t.length; n < s; n++) if (e.call(i, t[n], n, t) === r) return
                        } else for (var a in t) if (E.has(t, a) && e.call(i, t[a], a, t) === r) return
                };
                E.map = E.collect = function(t, e, i) {
                        var n = [];
                        return null == t ? n: _ && t.map === _ ? t.map(e, i) : (S(t,
                        function(t, r, s) {
                                n[n.length] = e.call(i, t, r, s)
                        }), n)
                };
                var O = "Reduce of empty array with no initial value";
                E.reduce = E.foldl = E.inject = function(t, e, i, n) {
                        var r = arguments.length > 2;
                        if (null == t && (t = []), d && t.reduce === d) return n && (e = E.bind(e, n)),
                        r ? t.reduce(e, i) : t.reduce(e);
                        if (S(t,
                        function(t, s, a) {
                                r ? i = e.call(n, i, t, s, a) : (i = t, r = !0)
                        }), !r) throw new TypeError(O);
                        return i
                },
                E.reduceRight = E.foldr = function(t, e, i, n) {
                        var r = arguments.length > 2;
                        if (null == t && (t = []), m && t.reduceRight === m) return n && (e = E.bind(e, n)),
                        r ? t.reduceRight(e, i) : t.reduceRight(e);
                        var s = t.length;
                        if (s !== +s) {
                                var a = E.keys(t);
                                s = a.length
                        }
                        if (S(t,
                        function(o, h, l) {
                                h = a ? a[--s] : --s,
                                r ? i = e.call(n, i, t[h], h, l) : (i = t[h], r = !0)
                        }), !r) throw new TypeError(O);
                        return i
                },
                E.find = E.detect = function(t, e, i) {
                        var n;
                        return k(t,
                        function(t, r, s) {
                                if (e.call(i, t, r, s)) return n = t,
                                !0
                        }),
                        n
                },
                E.filter = E.select = function(t, e, i) {
                        var n = [];
                        return null == t ? n: g && t.filter === g ? t.filter(e, i) : (S(t,
                        function(t, r, s) {
                                e.call(i, t, r, s) && (n[n.length] = t)
                        }), n)
                },
                E.reject = function(t, e, i) {
                        return E.filter(t,
                        function(t, n, r) {
                                return ! e.call(i, t, n, r)
                        },
                        i)
                },
                E.every = E.all = function(t, e, i) {
                        e || (e = E.identity);
                        var n = !0;
                        return null == t ? n: v && t.every === v ? t.every(e, i) : (S(t,
                        function(t, s, a) {
                                if (! (n = n && e.call(i, t, s, a))) return r
                        }), !!n)
                };
                var k = E.some = E.any = function(t, e, i) {
                        e || (e = E.identity);
                        var n = !1;
                        return null == t ? n: y && t.some === y ? t.some(e, i) : (S(t,
                        function(t, s, a) {
                                if (n || (n = e.call(i, t, s, a))) return r
                        }), !!n)
                };
                E.contains = E.include = function(t, e) {
                        return null != t && (T && t.indexOf === T ? t.indexOf(e) != -1 : k(t,
                        function(t) {
                                return t === e
                        }))
                },
                E.invoke = function(t, e) {
                        var i = l.call(arguments, 2),
                        n = E.isFunction(e);
                        return E.map(t,
                        function(t) {
                                return (n ? e: t[e]).apply(t, i)
                        })
                },
                E.pluck = function(t, e) {
                        return E.map(t,
                        function(t) {
                                return t[e]
                        })
                },
                E.where = function(t, e, i) {
                        return E.isEmpty(e) ? i ? null: [] : E[i ? "find": "filter"](t,
                        function(t) {
                                for (var i in e) if (e[i] !== t[i]) return ! 1;
                                return ! 0
                        })
                },
                E.findWhere = function(t, e) {
                        return E.where(t, e, !0)
                },
                E.max = function(t, e, i) {
                        if (!e && E.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
                        if (!e && E.isEmpty(t)) return - (1 / 0);
                        var n = {
                                computed: -(1 / 0),
                                value: -(1 / 0)
                        };
                        return S(t,
                        function(t, r, s) {
                                var a = e ? e.call(i, t, r, s) : t;
                                a >= n.computed && (n = {
                                        value: t,
                                        computed: a
                                })
                        }),
                        n.value
                },
                E.min = function(t, e, i) {
                        if (!e && E.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
                        if (!e && E.isEmpty(t)) return 1 / 0;
                        var n = {
                                computed: 1 / 0,
                                value: 1 / 0
                        };
                        return S(t,
                        function(t, r, s) {
                                var a = e ? e.call(i, t, r, s) : t;
                                a < n.computed && (n = {
                                        value: t,
                                        computed: a
                                })
                        }),
                        n.value
                },
                E.shuffle = function(t) {
                        var e, i = 0,
                        n = [];
                        return S(t,
                        function(t) {
                                e = E.random(i++),
                                n[i - 1] = n[e],
                                n[e] = t
                        }),
                        n
                };
                var R = function(t) {
                        return E.isFunction(t) ? t: function(e) {
                                return e[t]
                        }
                };
                E.sortBy = function(t, e, i) {
                        var n = R(e);
                        return E.pluck(E.map(t,
                        function(t, e, r) {
                                return {
                                        value: t,
                                        index: e,
                                        criteria: n.call(i, t, e, r)
                                }
                        }).sort(function(t, e) {
                                var i = t.criteria,
                                n = e.criteria;
                                if (i !== n) {
                                        if (i > n || void 0 === i) return 1;
                                        if (i < n || void 0 === n) return - 1
                                }
                                return t.index < e.index ? -1 : 1
                        }), "value")
                };
                var A = function(t, e, i, n) {
                        var r = {},
                        s = R(e || E.identity);
                        return S(t,
                        function(e, a) {
                                var o = s.call(i, e, a, t);
                                n(r, o, e)
                        }),
                        r
                };
                E.groupBy = function(t, e, i) {
                        return A(t, e, i,
                        function(t, e, i) { (E.has(t, e) ? t[e] : t[e] = []).push(i)
                        })
                },
                E.countBy = function(t, e, i) {
                        return A(t, e, i,
                        function(t, e) {
                                E.has(t, e) || (t[e] = 0),
                                t[e]++
                        })
                },
                E.sortedIndex = function(t, e, i, n) {
                        i = null == i ? E.identity: R(i);
                        for (var r = i.call(n, e), s = 0, a = t.length; s < a;) {
                                var o = s + a >>> 1;
                                i.call(n, t[o]) < r ? s = o + 1 : a = o
                        }
                        return s
                },
                E.toArray = function(t) {
                        return t ? E.isArray(t) ? l.call(t) : t.length === +t.length ? E.map(t, E.identity) : E.values(t) : []
                },
                E.size = function(t) {
                        return null == t ? 0 : t.length === +t.length ? t.length: E.keys(t).length
                },
                E.first = E.head = E.take = function(t, e, i) {
                        if (null != t) return null == e || i ? t[0] : l.call(t, 0, e)
                },
                E.initial = function(t, e, i) {
                        return l.call(t, 0, t.length - (null == e || i ? 1 : e))
                },
                E.last = function(t, e, i) {
                        if (null != t) return null == e || i ? t[t.length - 1] : l.call(t, Math.max(t.length - e, 0))
                },
                E.rest = E.tail = E.drop = function(t, e, i) {
                        return l.call(t, null == e || i ? 1 : e)
                },
                E.compact = function(t) {
                        return E.filter(t, E.identity)
                };
                var D = function(t, e, i) {
                        return S(t,
                        function(t) {
                                E.isArray(t) ? e ? h.apply(i, t) : D(t, e, i) : i.push(t)
                        }),
                        i
                };
                E.flatten = function(t, e) {
                        return D(t, e, [])
                },
                E.without = function(t) {
                        return E.difference(t, l.call(arguments, 1))
                },
                E.uniq = E.unique = function(t, e, i, n) {
                        E.isFunction(e) && (n = i, i = e, e = !1);
                        var r = i ? E.map(t, i, n) : t,
                        s = [],
                        a = [];
                        return S(r,
                        function(i, n) { (e ? n && a[a.length - 1] === i: E.contains(a, i)) || (a.push(i), s.push(t[n]))
                        }),
                        s
                },
                E.union = function() {
                        return E.uniq(u.apply(s, arguments))
                },
                E.intersection = function(t) {
                        var e = l.call(arguments, 1);
                        return E.filter(E.uniq(t),
                        function(t) {
                                return E.every(e,
                                function(e) {
                                        return E.indexOf(e, t) >= 0
                                })
                        })
                },
                E.difference = function(t) {
                        var e = u.apply(s, l.call(arguments, 1));
                        return E.filter(t,
                        function(t) {
                                return ! E.contains(e, t)
                        })
                },
                E.zip = function() {
                        for (var t = l.call(arguments), e = E.max(E.pluck(t, "length")), i = new Array(e), n = 0; n < e; n++) i[n] = E.pluck(t, "" + n);
                        return i
                },
                E.object = function(t, e) {
                        if (null == t) return {};
                        for (var i = {},
                        n = 0,
                        r = t.length; n < r; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
                        return i
                },
                E.indexOf = function(t, e, i) {
                        if (null == t) return - 1;
                        var n = 0,
                        r = t.length;
                        if (i) {
                                if ("number" != typeof i) return n = E.sortedIndex(t, e),
                                t[n] === e ? n: -1;
                                n = i < 0 ? Math.max(0, r + i) : i
                        }
                        if (T && t.indexOf === T) return t.indexOf(e, i);
                        for (; n < r; n++) if (t[n] === e) return n;
                        return - 1
                },
                E.lastIndexOf = function(t, e, i) {
                        if (null == t) return - 1;
                        var n = null != i;
                        if (b && t.lastIndexOf === b) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
                        for (var r = n ? i: t.length; r--;) if (t[r] === e) return r;
                        return - 1
                },
                E.range = function(t, e, i) {
                        arguments.length <= 1 && (e = t || 0, t = 0),
                        i = arguments[2] || 1;
                        for (var n = Math.max(Math.ceil((e - t) / i), 0), r = 0, s = new Array(n); r < n;) s[r++] = t,
                        t += i;
                        return s
                },
                E.bind = function(t, e) {
                        if (t.bind === P && P) return P.apply(t, l.call(arguments, 1));
                        var i = l.call(arguments, 2);
                        return function() {
                                return t.apply(e, i.concat(l.call(arguments)))
                        }
                },
                E.partial = function(t) {
                        var e = l.call(arguments, 1);
                        return function() {
                                return t.apply(this, e.concat(l.call(arguments)))
                        }
                },
                E.bindAll = function(t) {
                        var e = l.call(arguments, 1);
                        return 0 === e.length && (e = E.functions(t)),
                        S(e,
                        function(e) {
                                t[e] = E.bind(t[e], t)
                        }),
                        t
                },
                E.memoize = function(t, e) {
                        var i = {};
                        return e || (e = E.identity),
                        function() {
                                var n = e.apply(this, arguments);
                                return E.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
                        }
                },
                E.delay = function(t, e) {
                        var i = l.call(arguments, 2);
                        return setTimeout(function() {
                                return t.apply(null, i)
                        },
                        e)
                },
                E.defer = function(t) {
                        return E.delay.apply(E, [t, 1].concat(l.call(arguments, 1)))
                },
                E.throttle = function(t, e) {
                        var i, n, r, s, a = 0,
                        o = function() {
                                a = new Date,
                                r = null,
                                s = t.apply(i, n)
                        };
                        return function() {
                                var h = new Date,
                                l = e - (h - a);
                                return i = this,
                                n = arguments,
                                l <= 0 ? (clearTimeout(r), r = null, a = h, s = t.apply(i, n)) : r || (r = setTimeout(o, l)),
                                s
                        }
                },
                E.debounce = function(t, e, i) {
                        var n, r;
                        return function() {
                                var s = this,
                                a = arguments,
                                o = function() {
                                        n = null,
                                        i || (r = t.apply(s, a))
                                },
                                h = i && !n;
                                return clearTimeout(n),
                                n = setTimeout(o, e),
                                h && (r = t.apply(s, a)),
                                r
                        }
                },
                E.once = function(t) {
                        var e, i = !1;
                        return function() {
                                return i ? e: (i = !0, e = t.apply(this, arguments), t = null, e)
                        }
                },
                E.wrap = function(t, e) {
                        return function() {
                                var i = [t];
                                return h.apply(i, arguments),
                                e.apply(this, i)
                        }
                },
                E.compose = function() {
                        var t = arguments;
                        return function() {
                                for (var e = arguments,
                                i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
                                return e[0]
                        }
                },
                E.after = function(t, e) {
                        return t <= 0 ? e() : function() {
                                if (--t < 1) return e.apply(this, arguments)
                        }
                },
                E.keys = w ||
                function(t) {
                        if (t !== Object(t)) throw new TypeError("Invalid object");
                        var e = [];
                        for (var i in t) E.has(t, i) && (e[e.length] = i);
                        return e
                },
                E.values = function(t) {
                        var e = [];
                        for (var i in t) E.has(t, i) && e.push(t[i]);
                        return e
                },
                E.pairs = function(t) {
                        var e = [];
                        for (var i in t) E.has(t, i) && e.push([i, t[i]]);
                        return e
                },
                E.invert = function(t) {
                        var e = {};
                        for (var i in t) E.has(t, i) && (e[t[i]] = i);
                        return e
                },
                E.functions = E.methods = function(t) {
                        var e = [];
                        for (var i in t) E.isFunction(t[i]) && e.push(i);
                        return e.sort()
                },
                E.extend = function(t) {
                        return S(l.call(arguments, 1),
                        function(e) {
                                if (e) for (var i in e) t[i] = e[i]
                        }),
                        t
                },
                E.pick = function(t) {
                        var e = {},
                        i = u.apply(s, l.call(arguments, 1));
                        return S(i,
                        function(i) {
                                i in t && (e[i] = t[i])
                        }),
                        e
                },
                E.omit = function(t) {
                        var e = {},
                        i = u.apply(s, l.call(arguments, 1));
                        for (var n in t) E.contains(i, n) || (e[n] = t[n]);
                        return e
                },
                E.defaults = function(t) {
                        return S(l.call(arguments, 1),
                        function(e) {
                                if (e) for (var i in e) null == t[i] && (t[i] = e[i])
                        }),
                        t
                },
                E.clone = function(t) {
                        return E.isObject(t) ? E.isArray(t) ? t.slice() : E.extend({},
                        t) : t
                },
                E.tap = function(t, e) {
                        return e(t),
                        t
                };
                var M = function(t, e, i, n) {
                        if (t === e) return 0 !== t || 1 / t == 1 / e;
                        if (null == t || null == e) return t === e;
                        t instanceof E && (t = t._wrapped),
                        e instanceof E && (e = e._wrapped);
                        var r = c.call(t);
                        if (r != c.call(e)) return ! 1;
                        switch (r) {
                        case "[object String]":
                                return t == String(e);
                        case "[object Number]":
                                return t != +t ? e != +e: 0 == t ? 1 / t == 1 / e: t == +e;
                        case "[object Date]":
                        case "[object Boolean]":
                                return + t == +e;
                        case "[object RegExp]":
                                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
                        }
                        if ("object" != typeof t || "object" != typeof e) return ! 1;
                        for (var s = i.length; s--;) if (i[s] == t) return n[s] == e;
                        i.push(t),
                        n.push(e);
                        var a = 0,
                        o = !0;
                        if ("[object Array]" == r) {
                                if (a = t.length, o = a == e.length) for (; a--&&(o = M(t[a], e[a], i, n)););
                        } else {
                                var h = t.constructor,
                                l = e.constructor;
                                if (h !== l && !(E.isFunction(h) && h instanceof h && E.isFunction(l) && l instanceof l)) return ! 1;
                                for (var u in t) if (E.has(t, u) && (a++, !(o = E.has(e, u) && M(t[u], e[u], i, n)))) break;
                                if (o) {
                                        for (u in e) if (E.has(e, u) && !a--) break;
                                        o = !a
                                }
                        }
                        return i.pop(),
                        n.pop(),
                        o
                };
                E.isEqual = function(t, e) {
                        return M(t, e, [], [])
                },
                E.isEmpty = function(t) {
                        if (null == t) return ! 0;
                        if (E.isArray(t) || E.isString(t)) return 0 === t.length;
                        for (var e in t) if (E.has(t, e)) return ! 1;
                        return ! 0
                },
                E.isElement = function(t) {
                        return ! (!t || 1 !== t.nodeType)
                },
                E.isArray = x ||
                function(t) {
                        return "[object Array]" == c.call(t)
                },
                E.isObject = function(t) {
                        return t === Object(t)
                },
                S(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
                function(t) {
                        E["is" + t] = function(e) {
                                return c.call(e) == "[object " + t + "]"
                        }
                }),
                E.isArguments(arguments) || (E.isArguments = function(t) {
                        return ! (!t || !E.has(t, "callee"))
                }),
                E.isFunction = function(t) {
                        return "function" == typeof t
                },
                E.isFinite = function(t) {
                        return isFinite(t) && !isNaN(parseFloat(t))
                },
                E.isNaN = function(t) {
                        return E.isNumber(t) && t != +t
                },
                E.isBoolean = function(t) {
                        return t === !0 || t === !1 || "[object Boolean]" == c.call(t)
                },
                E.isNull = function(t) {
                        return null === t
                },
                E.isUndefined = function(t) {
                        return void 0 === t
                },
                E.has = function(t, e) {
                        return f.call(t, e)
                },
                E.noConflict = function() {
                        return i._ = n,
                        this
                },
                E.identity = function(t) {
                        return t
                },
                E.times = function(t, e, i) {
                        for (var n = Array(t), r = 0; r < t; r++) n[r] = e.call(i, r);
                        return n
                },
                E.random = function(t, e) {
                        return null == e && (e = t, t = 0),
                        t + Math.floor(Math.random() * (e - t + 1))
                };
                var C = {
                        escape: {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#x27;",
                                "/": "&#x2F;"
                        }
                };
                C.unescape = E.invert(C.escape);
                var N = {
                        escape: new RegExp("[" + E.keys(C.escape).join("") + "]", "g"),
                        unescape: new RegExp("(" + E.keys(C.unescape).join("|") + ")", "g")
                };
                E.each(["escape", "unescape"],
                function(t) {
                        E[t] = function(e) {
                                return null == e ? "": ("" + e).replace(N[t],
                                function(e) {
                                        return C[t][e]
                                })
                        }
                }),
                E.result = function(t, e) {
                        if (null == t) return null;
                        var i = t[e];
                        return E.isFunction(i) ? i.call(t) : i
                },
                E.mixin = function(t) {
                        S(E.functions(t),
                        function(e) {
                                var i = E[e] = t[e];
                                E.prototype[e] = function() {
                                        var t = [this._wrapped];
                                        return h.apply(t, arguments),
                                        F.call(this, i.apply(E, t))
                                }
                        })
                };
                var I = 0;
                E.uniqueId = function(t) {
                        var e = ++I + "";
                        return t ? t + e: e
                },
                E.templateSettings = {
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g,
                        escape: /<%-([\s\S]+?)%>/g
                };
                var z = /(.)^/,
                X = {
                        "'": "'",
                        "\\": "\\",
                        "\r": "r",
                        "\n": "n",
                        "\t": "t",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                },
                Y = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                E.template = function(t, e, i) {
                        if (E.isFunction(t)) return e ? t(e) : t;
                        var n;
                        i = E.defaults({},
                        i, E.templateSettings);
                        var r = new RegExp([(i.escape || z).source, (i.interpolate || z).source, (i.evaluate || z).source].join("|") + "|$", "g"),
                        s = 0,
                        a = "__p+='",
                        o = t;
                        t.replace(r,
                        function(e, i, n, r, o) {
                                return a += t.slice(s, o).replace(Y,
                                function(t) {
                                        return "\\" + X[t]
                                }),
                                i && (a += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"),
                                n && (a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"),
                                r && (a += "';\n" + r + "\n__p+='"),
                                s = o + e.length,
                                e
                        }),
                        a += "';\n",
                        i.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                        a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                        try {
                                n = new Function(i.variable || "obj", "_", a)
                        } catch(t) {
                                throw t.source = a,
                                t
                        }
                        if (e) return n(e, E);
                        var h = function(t) {
                                return n.call(this, t, E)
                        };
                        return h.source = "function(" + (i.variable || "obj") + "){\n" + a + "}",
                        h.textsource = o,
                        h
                },
                E.chain = function(t) {
                        return E(t).chain()
                };
                var F = function(t) {
                        return this._chain ? E(t).chain() : t
                };
                E.mixin(E),
                S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
                function(t) {
                        var e = s[t];
                        E.prototype[t] = function() {
                                var i = this._wrapped;
                                return e.apply(i, arguments),
                                "shift" != t && "splice" != t || 0 !== i.length || delete i[0],
                                F.call(this, i)
                        }
                }),
                S(["concat", "join", "slice"],
                function(t) {
                        var e = s[t];
                        E.prototype[t] = function() {
                                return F.call(this, e.apply(this._wrapped, arguments))
                        }
                }),
                E.extend(E.prototype, {
                        chain: function() {
                                return this._chain = !0,
                                this
                        },
                        value: function() {
                                return this._wrapped
                        }
                })
        }).call(this)
},
function(t, e, i) { (function(e) {
                "use strict";
                t.exports = e.Backbone = i(5)
        }).call(e,
        function() {
                return this
        } ())
},
function(t, e, i) { (function() {
                var t, n = window || this,
                r = n.Backbone,
                s = [],
                a = s.push,
                o = s.slice,
                h = s.splice;
                t = e,
                t.VERSION = "0.9.10";
                var l = n._;
                l || (l = i(2)),
                t.$ = n.jQuery || n.Zepto || n.ender,
                t.noConflict = function() {
                        return n.Backbone = r,
                        this
                },
                t.emulateHTTP = !1,
                t.emulateJSON = !1;
                var u = /\s+/,
                c = function(t, e, i, n) {
                        if (!i) return ! 0;
                        if ("object" == typeof i) for (var r in i) t[e].apply(t, [r, i[r]].concat(n));
                        else {
                                if (!u.test(i)) return ! 0;
                                for (var s = i.split(u), a = 0, o = s.length; a < o; a++) t[e].apply(t, [s[a]].concat(n))
                        }
                },
                f = function(t, e) {
                        var i, n = -1,
                        r = t.length;
                        switch (e.length) {
                        case 0:
                                for (; ++n < r;)(i = t[n]).callback.call(i.ctx);
                                return;
                        case 1:
                                for (; ++n < r;)(i = t[n]).callback.call(i.ctx, e[0]);
                                return;
                        case 2:
                                for (; ++n < r;)(i = t[n]).callback.call(i.ctx, e[0], e[1]);
                                return;
                        case 3:
                                for (; ++n < r;)(i = t[n]).callback.call(i.ctx, e[0], e[1], e[2]);
                                return;
                        default:
                                for (; ++n < r;)(i = t[n]).callback.apply(i.ctx, e)
                        }
                },
                p = t.Events = {
                        on: function(t, e, i) {
                                if (!c(this, "on", t, [e, i]) || !e) return this;
                                this._events || (this._events = {});
                                var n = this._events[t] || (this._events[t] = []);
                                return n.push({
                                        callback: e,
                                        context: i,
                                        ctx: i || this
                                }),
                                this
                        },
                        once: function(t, e, i) {
                                if (!c(this, "once", t, [e, i]) || !e) return this;
                                var n = this,
                                r = l.once(function() {
                                        n.off(t, r),
                                        e.apply(this, arguments)
                                });
                                return r._callback = e,
                                this.on(t, r, i),
                                this
                        },
                        off: function(t, e, i) {
                                var n, r, s, a, o, h, u, f;
                                if (!this._events || !c(this, "off", t, [e, i])) return this;
                                if (!t && !e && !i) return this._events = {},
                                this;
                                for (a = t ? [t] : l.keys(this._events), o = 0, h = a.length; o < h; o++) if (t = a[o], n = this._events[t]) {
                                        if (s = [], e || i) for (u = 0, f = n.length; u < f; u++) r = n[u],
                                        (e && e !== r.callback && e !== r.callback._callback || i && i !== r.context) && s.push(r);
                                        this._events[t] = s
                                }
                                return this
                        },
                        trigger: function(t) {
                                if (!this._events) return this;
                                var e = o.call(arguments, 1);
                                if (!c(this, "trigger", t, e)) return this;
                                var i = this._events[t],
                                n = this._events.all;
                                return i && f(i, e),
                                n && f(n, arguments),
                                this
                        },
                        listenTo: function(t, e, i) {
                                var n = this._listeners || (this._listeners = {}),
                                r = t._listenerId || (t._listenerId = l.uniqueId("l"));
                                return n[r] = t,
                                t.on(e, "object" == typeof e ? this: i, this),
                                this
                        },
                        stopListening: function(t, e, i) {
                                var n = this._listeners;
                                if (n) {
                                        if (t) t.off(e, "object" == typeof e ? this: i, this),
                                        e || i || delete n[t._listenerId];
                                        else {
                                                "object" == typeof e && (i = this);
                                                for (var r in n) n[r].off(e, i, this);
                                                this._listeners = {}
                                        }
                                        return this
                                }
                        }
                };
                p.bind = p.on,
                p.unbind = p.off,
                l.extend(t, p);
                var _ = t.Model = function(t, e) {
                        var i, n = t || {};
                        this.cid = l.uniqueId("c"),
                        this.attributes = {},
                        e && e.collection && (this.collection = e.collection),
                        e && e.parse && (n = this.parse(n, e) || {}),
                        (i = l.result(this, "defaults")) && (n = l.defaults({},
                        n, i)),
                        this.set(n, e),
                        this.changed = {},
                        this.initialize.apply(this, arguments)
                };
                l.extend(_.prototype, p, {
                        changed: null,
                        idAttribute: "id",
                        initialize: function() {},
                        toJSON: function(t) {
                                return l.clone(this.attributes)
                        },
                        sync: function() {
                                return t.sync.apply(this, arguments)
                        },
                        get: function(t) {
                                return this.attributes[t]
                        },
                        escape: function(t) {
                                return l.escape(this.get(t))
                        },
                        has: function(t) {
                                return null != this.get(t)
                        },
                        set: function(t, e, i) {
                                var n, r, s, a, o, h, u, c;
                                if (null == t) return this;
                                if ("object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i || (i = {}), !this._validate(r, i)) return ! 1;
                                s = i.unset,
                                o = i.silent,
                                a = [],
                                h = this._changing,
                                this._changing = !0,
                                h || (this._previousAttributes = l.clone(this.attributes), this.changed = {}),
                                c = this.attributes,
                                u = this._previousAttributes,
                                this.idAttribute in r && (this.id = r[this.idAttribute]);
                                for (n in r) e = r[n],
                                l.isEqual(c[n], e) || a.push(n),
                                l.isEqual(u[n], e) ? delete this.changed[n] : this.changed[n] = e,
                                s ? delete c[n] : c[n] = e;
                                if (!o) {
                                        a.length && (this._pending = !0);
                                        for (var f = 0,
                                        p = a.length; f < p; f++) this.trigger("change:" + a[f], this, c[a[f]], i)
                                }
                                if (h) return this;
                                if (!o) for (; this._pending;) this._pending = !1,
                                this.trigger("change", this, i);
                                return this._pending = !1,
                                this._changing = !1,
                                this
                        },
                        unset: function(t, e) {
                                return this.set(t, void 0, l.extend({},
                                e, {
                                        unset: !0
                                }))
                        },
                        clear: function(t) {
                                var e = {};
                                for (var i in this.attributes) e[i] = void 0;
                                return this.set(e, l.extend({},
                                t, {
                                        unset: !0
                                }))
                        },
                        hasChanged: function(t) {
                                return null == t ? !l.isEmpty(this.changed) : l.has(this.changed, t)
                        },
                        changedAttributes: function(t) {
                                if (!t) return !! this.hasChanged() && l.clone(this.changed);
                                var e, i = !1,
                                n = this._changing ? this._previousAttributes: this.attributes;
                                for (var r in t) l.isEqual(n[r], e = t[r]) || ((i || (i = {}))[r] = e);
                                return i
                        },
                        previous: function(t) {
                                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
                        },
                        previousAttributes: function() {
                                return l.clone(this._previousAttributes)
                        },
                        fetch: function(t) {
                                t = t ? l.clone(t) : {},
                                void 0 === t.parse && (t.parse = !0);
                                var e = t.success;
                                return t.success = function(t, i, n) {
                                        return !! t.set(t.parse(i, n), n) && void(e && e(t, i, n))
                                },
                                this.sync("read", this, t)
                        },
                        save: function(t, e, i) {
                                var n, r, s, a, o = this.attributes;
                                return null == t || "object" == typeof t ? (n = t, i = e) : (n = {})[t] = e,
                                !!(!n || i && i.wait || this.set(n, i)) && (i = l.extend({
                                        validate: !0
                                },
                                i), !!this._validate(n, i) && (n && i.wait && (this.attributes = l.extend({},
                                o, n)), void 0 === i.parse && (i.parse = !0), r = i.success, i.success = function(t, e, i) {
                                        t.attributes = o;
                                        var s = t.parse(e, i);
                                        return i.wait && (s = l.extend(n || {},
                                        s)),
                                        !(l.isObject(s) && !t.set(s, i)) && void(r && r(t, e, i))
                                },
                                s = this.isNew() ? "create": i.patch ? "patch": "update", "patch" === s && (i.attrs = n), a = this.sync(s, this, i), n && i.wait && (this.attributes = o), a))
                        },
                        destroy: function(t) {
                                t = t ? l.clone(t) : {};
                                var e = this,
                                i = t.success,
                                n = function() {
                                        e.trigger("destroy", e, e.collection, t)
                                };
                                if (t.success = function(t, e, r) { (r.wait || t.isNew()) && n(),
                                        i && i(t, e, r)
                                },
                                this.isNew()) return t.success(this, null, t),
                                !1;
                                var r = this.sync("delete", this, t);
                                return t.wait || n(),
                                r
                        },
                        url: function() {
                                var t = l.result(this, "urlRoot") || l.result(this.collection, "url") || C();
                                return this.isNew() ? t: t + ("/" === t.charAt(t.length - 1) ? "": "/") + encodeURIComponent(this.id)
                        },
                        parse: function(t, e) {
                                return t
                        },
                        clone: function() {
                                return new this.constructor(this.attributes)
                        },
                        isNew: function() {
                                return null == this.id
                        },
                        isValid: function(t) {
                                return ! this.validate || !this.validate(this.attributes, t)
                        },
                        _validate: function(t, e) {
                                if (!e.validate || !this.validate) return ! 0;
                                t = l.extend({},
                                this.attributes, t);
                                var i = this.validationError = this.validate(t, e) || null;
                                return ! i || (this.trigger("invalid", this, i, e || {}), !1)
                        }
                });
                var d = t.Collection = function(t, e) {
                        e || (e = {}),
                        e.model && (this.model = e.model),
                        void 0 !== e.comparator && (this.comparator = e.comparator),
                        this.models = [],
                        this._reset(),
                        this.initialize.apply(this, arguments),
                        t && this.reset(t, l.extend({
                                silent: !0
                        },
                        e))
                };
                l.extend(d.prototype, p, {
                        model: _,
                        initialize: function() {},
                        toJSON: function(t) {
                                return this.map(function(e) {
                                        return e.toJSON(t)
                                })
                        },
                        sync: function() {
                                return t.sync.apply(this, arguments)
                        },
                        add: function(t, e) {
                                t = l.isArray(t) ? t.slice() : [t],
                                e || (e = {});
                                var i, n, r, s, o, u, c, f, p, _;
                                for (c = [], f = e.at, p = this.comparator && null == f && 0 != e.sort, _ = l.isString(this.comparator) ? this.comparator: null, i = 0, n = t.length; i < n; i++)(r = this._prepareModel(s = t[i], e)) ? (o = this.get(r)) ? e.merge && (o.set(s === r ? r.attributes: s, e), p && !u && o.hasChanged(_) && (u = !0)) : (c.push(r), r.on("all", this._onModelEvent, this), this._byId[r.cid] = r, null != r.id && (this._byId[r.id] = r)) : this.trigger("invalid", this, s, e);
                                if (c.length && (p && (u = !0), this.length += c.length, null != f ? h.apply(this.models, [f, 0].concat(c)) : a.apply(this.models, c)), u && this.sort({
                                        silent: !0
                                }), e.silent) return this;
                                for (i = 0, n = c.length; i < n; i++)(r = c[i]).trigger("add", r, this, e);
                                return u && this.trigger("sort", this, e),
                                this
                        },
                        remove: function(t, e) {
                                t = l.isArray(t) ? t.slice() : [t],
                                e || (e = {});
                                var i, n, r, s;
                                for (i = 0, n = t.length; i < n; i++) s = this.get(t[i]),
                                s && (delete this._byId[s.id], delete this._byId[s.cid], r = this.indexOf(s), this.models.splice(r, 1), this.length--, e.silent || (e.index = r, s.trigger("remove", s, this, e)), this._removeReference(s));
                                return this
                        },
                        push: function(t, e) {
                                return t = this._prepareModel(t, e),
                                this.add(t, l.extend({
                                        at: this.length
                                },
                                e)),
                                t
                        },
                        pop: function(t) {
                                var e = this.at(this.length - 1);
                                return this.remove(e, t),
                                e
                        },
                        unshift: function(t, e) {
                                return t = this._prepareModel(t, e),
                                this.add(t, l.extend({
                                        at: 0
                                },
                                e)),
                                t
                        },
                        shift: function(t) {
                                var e = this.at(0);
                                return this.remove(e, t),
                                e
                        },
                        slice: function(t, e) {
                                return this.models.slice(t, e)
                        },
                        get: function(t) {
                                if (null != t) return this._idAttr || (this._idAttr = this.model.prototype.idAttribute),
                                this._byId[t.id || t.cid || t[this._idAttr] || t]
                        },
                        at: function(t) {
                                return this.models[t]
                        },
                        where: function(t) {
                                return l.isEmpty(t) ? [] : this.filter(function(e) {
                                        for (var i in t) if (t[i] !== e.get(i)) return ! 1;
                                        return ! 0
                                })
                        },
                        sort: function(t) {
                                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                                return t || (t = {}),
                                l.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(l.bind(this.comparator, this)),
                                t.silent || this.trigger("sort", this, t),
                                this
                        },
                        pluck: function(t) {
                                return l.invoke(this.models, "get", t)
                        },
                        update: function(t, e) {
                                e = l.extend({
                                        add: !0,
                                        merge: !0,
                                        remove: !0
                                },
                                e),
                                e.parse && (t = this.parse(t, e));
                                var i, n, r, s, a = [],
                                o = [],
                                h = {};
                                if (l.isArray(t) || (t = t ? [t] : []), e.add && !e.remove) return this.add(t, e);
                                for (n = 0, r = t.length; n < r; n++) i = t[n],
                                s = this.get(i),
                                e.remove && s && (h[s.cid] = !0),
                                (e.add && !s || e.merge && s) && a.push(i);
                                if (e.remove) for (n = 0, r = this.models.length; n < r; n++) i = this.models[n],
                                h[i.cid] || o.push(i);
                                return o.length && this.remove(o, e),
                                a.length && this.add(a, e),
                                this
                        },
                        reset: function(t, e) {
                                e || (e = {}),
                                e.parse && (t = this.parse(t, e));
                                for (var i = 0,
                                n = this.models.length; i < n; i++) this._removeReference(this.models[i]);
                                return e.previousModels = this.models.slice(),
                                this._reset(),
                                t && this.add(t, l.extend({
                                        silent: !0
                                },
                                e)),
                                e.silent || this.trigger("reset", this, e),
                                this
                        },
                        fetch: function(t) {
                                t = t ? l.clone(t) : {},
                                void 0 === t.parse && (t.parse = !0);
                                var e = t.success;
                                return t.success = function(t, i, n) {
                                        var r = n.update ? "update": "reset";
                                        t[r](i, n),
                                        e && e(t, i, n)
                                },
                                this.sync("read", this, t)
                        },
                        create: function(t, e) {
                                if (e = e ? l.clone(e) : {},
                                !(t = this._prepareModel(t, e))) return ! 1;
                                e.wait || this.add(t, e);
                                var i = this,
                                n = e.success;
                                return e.success = function(t, e, r) {
                                        r.wait && i.add(t, r),
                                        n && n(t, e, r)
                                },
                                t.save(null, e),
                                t
                        },
                        parse: function(t, e) {
                                return t
                        },
                        clone: function() {
                                return new this.constructor(this.models)
                        },
                        _reset: function() {
                                this.length = 0,
                                this.models.length = 0,
                                this._byId = {}
                        },
                        _prepareModel: function(t, e) {
                                if (t instanceof _) return t.collection || (t.collection = this),
                                t;
                                e || (e = {}),
                                e.collection = this;
                                var i = new this.model(t, e);
                                return !! i._validate(t, e) && i
                        },
                        _removeReference: function(t) {
                                this === t.collection && delete t.collection,
                                t.off("all", this._onModelEvent, this)
                        },
                        _onModelEvent: function(t, e, i, n) { ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, n), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
                        },
                        sortedIndex: function(t, e, i) {
                                e || (e = this.comparator);
                                var n = l.isFunction(e) ? e: function(t) {
                                        return t.get(e)
                                };
                                return l.sortedIndex(this.models, t, n, i)
                        }
                });
                var m = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
                l.each(m,
                function(t) {
                        d.prototype[t] = function() {
                                var e = o.call(arguments);
                                return e.unshift(this.models),
                                l[t].apply(l, e)
                        }
                });
                var g = ["groupBy", "countBy", "sortBy"];
                l.each(g,
                function(t) {
                        d.prototype[t] = function(e, i) {
                                var n = l.isFunction(e) ? e: function(t) {
                                        return t.get(e)
                                };
                                return l[t](this.models, n, i)
                        }
                });
                var v = t.Router = function(t) {
                        t || (t = {}),
                        t.routes && (this.routes = t.routes),
                        this._bindRoutes(),
                        this.initialize.apply(this, arguments)
                },
                y = /\((.*?)\)/g,
                T = /(\(\?)?:\w+/g,
                b = /\*\w+/g,
                x = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                l.extend(v.prototype, p, {
                        initialize: function() {},
                        route: function(e, i, n) {
                                return l.isRegExp(e) || (e = this._routeToRegExp(e)),
                                n || (n = this[i]),
                                t.history.route(e, l.bind(function(r) {
                                        var s = this._extractParameters(e, r);
                                        n && n.apply(this, s),
                                        this.trigger.apply(this, ["route:" + i].concat(s)),
                                        this.trigger("route", i, s),
                                        t.history.trigger("route", this, i, s)
                                },
                                this)),
                                this
                        },
                        navigate: function(e, i) {
                                return t.history.navigate(e, i),
                                this
                        },
                        _bindRoutes: function() {
                                if (this.routes) for (var t, e = l.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                        },
                        _routeToRegExp: function(t) {
                                return t = t.replace(x, "\\$&").replace(y, "(?:$1)?").replace(T,
                                function(t, e) {
                                        return e ? t: "([^/]+)"
                                }).replace(b, "(.*?)"),
                                new RegExp("^" + t + "$")
                        },
                        _extractParameters: function(t, e) {
                                return t.exec(e).slice(1)
                        }
                });
                var w = t.History = function() {
                        this.handlers = [],
                        l.bindAll(this, "checkUrl"),
                        "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                },
                P = /^[#\/]|\s+$/g,
                E = /^\/+|\/+$/g,
                S = /msie [\w.]+/,
                O = /\/$/;
                w.started = !1,
                l.extend(w.prototype, p, {
                        interval: 50,
                        getHash: function(t) {
                                var e = (t || this).location.href.match(/#(.*)$/);
                                return e ? e[1] : ""
                        },
                        getFragment: function(t, e) {
                                if (null == t) if (this._hasPushState || !this._wantsHashChange || e) {
                                        t = this.location.pathname;
                                        var i = this.root.replace(O, "");
                                        t.indexOf(i) || (t = t.substr(i.length))
                                } else t = this.getHash();
                                return t.replace(P, "")
                        },
                        start: function(e) {
                                if (w.started) throw new Error("Backbone.history has already been started");
                                w.started = !0,
                                this.options = l.extend({},
                                {
                                        root: "/"
                                },
                                this.options, e),
                                this.root = this.options.root,
                                this._wantsHashChange = this.options.hashChange !== !1,
                                this._wantsPushState = !!this.options.pushState,
                                this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                                var i = this.getFragment(),
                                n = document.documentMode,
                                r = S.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
                                this.root = ("/" + this.root + "/").replace(E, "/"),
                                r && this._wantsHashChange && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(i)),
                                this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                                this.fragment = i;
                                var s = this.location,
                                a = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
                                return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !a ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && a && s.hash && (this.fragment = this.getHash().replace(P, ""), this.history.replaceState({},
                                document.title, this.root + this.fragment + s.search)), this.options.silent ? void 0 : this.loadUrl())
                        },
                        stop: function() {
                                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
                                clearInterval(this._checkUrlInterval),
                                w.started = !1
                        },
                        route: function(t, e) {
                                this.handlers.unshift({
                                        route: t,
                                        callback: e
                                })
                        },
                        checkUrl: function(t) {
                                var e = this.getFragment();
                                return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))),
                                e !== this.fragment && (this.iframe && this.navigate(e), void(this.loadUrl() || this.loadUrl(this.getHash())))
                        },
                        loadUrl: function(t) {
                                var e = this.fragment = this.getFragment(t),
                                i = l.any(this.handlers,
                                function(t) {
                                        if (t.route.test(e)) return t.callback(e),
                                        !0
                                });
                                return i
                        },
                        navigate: function(t, e) {
                                if (!w.started) return ! 1;
                                if (e && e !== !0 || (e = {
                                        trigger: e
                                }), t = this.getFragment(t || ""), this.fragment !== t) {
                                        this.fragment = t;
                                        var i = this.root + t;
                                        if (this._hasPushState) this.history[e.replace ? "replaceState": "pushState"]({},
                                        document.title, i);
                                        else {
                                                if (!this._wantsHashChange) return this.location.assign(i);
                                                this._updateHash(this.location, t, e.replace),
                                                this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                                        }
                                        e.trigger && this.loadUrl(t)
                                }
                        },
                        _updateHash: function(t, e, i) {
                                if (i) {
                                        var n = t.href.replace(/(javascript:|#).*$/, "");
                                        t.replace(n + "#" + e)
                                } else t.hash = "#" + e
                        }
                }),
                t.history = new w;
                var k = t.View = function(t) {
                        this.cid = l.uniqueId("view"),
                        this._configure(t || {}),
                        this._ensureElement(),
                        this.initialize.apply(this, arguments),
                        this.delegateEvents()
                },
                R = /^(\S+)\s*(.*)$/,
                A = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                l.extend(k.prototype, p, {
                        tagName: "div",
                        $: function(t) {
                                return this.$el.find(t)
                        },
                        initialize: function() {},
                        render: function() {
                                return this
                        },
                        remove: function() {
                                return this.$el.remove(),
                                this.stopListening(),
                                this
                        },
                        setElement: function(e, i) {
                                return this.$el && this.undelegateEvents(),
                                this.$el = e instanceof t.$ ? e: t.$(e),
                                this.el = this.$el[0],
                                i !== !1 && this.delegateEvents(),
                                this
                        },
                        delegateEvents: function(t) {
                                if (t || (t = l.result(this, "events"))) {
                                        this.undelegateEvents();
                                        for (var e in t) {
                                                var i = t[e];
                                                if (l.isFunction(i) || (i = this[t[e]]), !i) throw new Error('Method "' + t[e] + '" does not exist');
                                                var n = e.match(R),
                                                r = n[1],
                                                s = n[2];
                                                i = l.bind(i, this),
                                                r += ".delegateEvents" + this.cid,
                                                "" === s ? this.$el.on(r, i) : this.$el.on(r, s, i)
                                        }
                                }
                        },
                        undelegateEvents: function() {
                                this.$el.off(".delegateEvents" + this.cid)
                        },
                        _configure: function(t) {
                                this.options && (t = l.extend({},
                                l.result(this, "options"), t)),
                                l.extend(this, l.pick(t, A)),
                                this.options = t
                        },
                        _ensureElement: function() {
                                if (this.el) this.setElement(l.result(this, "el"), !1);
                                else {
                                        var e = l.extend({},
                                        l.result(this, "attributes"));
                                        this.id && (e.id = l.result(this, "id")),
                                        this.className && (e.class = l.result(this, "className"));
                                        var i = t.$("<" + l.result(this, "tagName") + ">").attr(e);
                                        this.setElement(i, !1)
                                }
                        }
                });
                var D = {
                        create: "POST",
                        update: "PUT",
                        patch: "PATCH",
                        delete: "DELETE",
                        read: "GET"
                };
                t.sync = function(e, i, n) {
                        var r = D[e];
                        l.defaults(n || (n = {}), {
                                emulateHTTP: t.emulateHTTP,
                                emulateJSON: t.emulateJSON
                        });
                        var s = {
                                type: r,
                                dataType: "json"
                        };
                        if (n.url || (s.url = l.result(i, "url") || C()), null != n.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(n.attrs || i.toJSON(n))), n.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                                model: s.data
                        }: {}), n.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
                                s.type = "POST",
                                n.emulateJSON && (s.data._method = r);
                                var a = n.beforeSend;
                                n.beforeSend = function(t) {
                                        if (t.setRequestHeader("X-HTTP-Method-Override", r), a) return a.apply(this, arguments)
                                }
                        }
                        "GET" === s.type || n.emulateJSON || (s.processData = !1);
                        var o = n.success;
                        n.success = function(t) {
                                o && o(i, t, n),
                                i.trigger("sync", i, t, n)
                        };
                        var h = n.error;
                        n.error = function(t) {
                                h && h(i, t, n),
                                i.trigger("error", i, t, n)
                        };
                        var u = n.xhr = t.ajax(l.extend(s, n));
                        return i.trigger("request", i, u, n),
                        u
                },
                t.ajax = function() {
                        return t.$.ajax.apply(t.$, arguments)
                };
                var M = function(t, e) {
                        var i, n = this;
                        i = t && l.has(t, "constructor") ? t.constructor: function() {
                                return n.apply(this, arguments)
                        },
                        l.extend(i, n, e);
                        var r = function() {
                                this.constructor = i
                        };
                        return r.prototype = n.prototype,
                        i.prototype = new r,
                        t && l.extend(i.prototype, t),
                        i.__super__ = n.prototype,
                        i
                };
                _.extend = d.extend = v.extend = k.extend = w.extend = M;
                var C = function() {
                        throw new Error('A "url" property or function must be specified')
                }
        }).call(this)
},
function(t, e, i) {
        var n, r, s, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
                return typeof t
        }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
        };
        /*! jQuery plugin for Hammer.JS - v1.0.1 - 2014-02-03
	 * http://eightmedia.github.com/hammer.js
	 *
	 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
	 * Licensed under the MIT license */
        !
        function(o, h) {
                "use strict";
                function l(t, e) {
                        t.event.bindDom = function(t, i, n) {
                                e(t).on(i,
                                function(t) {
                                        var e = t.originalEvent || t;
                                        e.pageX === h && (e.pageX = t.pageX, e.pageY = t.pageY),
                                        e.target || (e.target = t.target),
                                        e.which === h && (e.which = e.button),
                                        e.preventDefault || (e.preventDefault = t.preventDefault),
                                        e.stopPropagation || (e.stopPropagation = t.stopPropagation),
                                        n.call(this, e)
                                })
                        },
                        t.Instance.prototype.on = function(t, i) {
                                return e(this.element).on(t, i)
                        },
                        t.Instance.prototype.off = function(t, i) {
                                return e(this.element).off(t, i)
                        },
                        t.Instance.prototype.trigger = function(t, i) {
                                var n = e(this.element);
                                return n.has(i.target).length && (n = e(i.target)),
                                n.trigger({
                                        type: t,
                                        gesture: i
                                })
                        },
                        e.fn.hammer = function(i) {
                                return this.each(function() {
                                        var n = e(this),
                                        r = n.data("hammer");
                                        r ? "reset" == i ? t.detection.current = null: r && i && t.utils.extend(r.options, i) : n.data("hammer", new t(this, i || {}))
                                })
                        }
                }
                "object" == a(i(7)) && i(7) ? (r = [i(8), i(9)], n = l, s = "function" == typeof n ? n.apply(e, r) : n, !(s !== h && (t.exports = s))) : l(o.Hammer, o.jQuery || o.Zepto)
        } (void 0)
},
function(t, e) { (function(e) {
                t.exports = e
        }).call(e, {})
},
function(t, e) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
                return typeof t
        }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
        };
        /*! Hammer.JS - v1.0.7dev - 2014-01-15
	 * http://eightmedia.github.com/hammer.js
	 *
	 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
	 * Licensed under the MIT license */
        !
        function(e, n) {
                function r() {
                        s.READY || (s.event.determineEventTypes(), s.utils.each(s.gestures,
                        function(t) {
                                s.detection.register(t)
                        }), s.event.onTouch(s.DOCUMENT, s.EVENT_MOVE, s.detection.detect), s.event.onTouch(s.DOCUMENT, s.EVENT_END, s.detection.detect), s.READY = !0)
                }
                var s = function t(e, i) {
                        return new t.Instance(e, i || {})
                };
                s.defaults = {
                        stop_browser_behavior: {
                                userSelect: "none",
                                touchAction: "none",
                                touchCallout: "none",
                                contentZooming: "none",
                                userDrag: "none",
                                tapHighlightColor: "rgba(0,0,0,0)"
                        }
                },
                s.HAS_POINTEREVENTS = e.navigator.pointerEnabled || e.navigator.msPointerEnabled,
                s.HAS_TOUCHEVENTS = "ontouchstart" in e,
                s.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i,
                s.NO_MOUSEEVENTS = s.HAS_TOUCHEVENTS && e.navigator.userAgent.match(s.MOBILE_REGEX),
                s.EVENT_TYPES = {},
                s.DIRECTION_DOWN = "down",
                s.DIRECTION_LEFT = "left",
                s.DIRECTION_UP = "up",
                s.DIRECTION_RIGHT = "right",
                s.POINTER_MOUSE = "mouse",
                s.POINTER_TOUCH = "touch",
                s.POINTER_PEN = "pen",
                s.EVENT_START = "start",
                s.EVENT_MOVE = "move",
                s.EVENT_END = "end",
                s.DOCUMENT = e.document,
                s.plugins = s.plugins || {},
                s.gestures = s.gestures || {},
                s.READY = !1,
                s.utils = {
                        extend: function(t, e, i) {
                                for (var r in e) t[r] !== n && i || (t[r] = e[r]);
                                return t
                        },
                        each: function(t, e, i) {
                                var r, s;
                                if ("forEach" in t) t.forEach(e, i);
                                else if (t.length !== n) {
                                        for (r = 0, s = t.length; s > r; r++) if (e.call(i, t[r], r, t) === !1) return
                                } else for (r in t) if (t.hasOwnProperty(r) && e.call(i, t[r], r, t) === !1) return
                        },
                        hasParent: function(t, e) {
                                for (; t;) {
                                        if (t == e) return ! 0;
                                        t = t.parentNode
                                }
                                return ! 1
                        },
                        getCenter: function(t) {
                                var e = [],
                                i = [];
                                return s.utils.each(t,
                                function(t) {
                                        e.push("undefined" != typeof t.clientX ? t.clientX: t.pageX),
                                        i.push("undefined" != typeof t.clientY ? t.clientY: t.pageY)
                                }),
                                {
                                        pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2,
                                        pageY: (Math.min.apply(Math, i) + Math.max.apply(Math, i)) / 2
                                }
                        },
                        getVelocity: function(t, e, i) {
                                return {
                                        x: Math.abs(e / t) || 0,
                                        y: Math.abs(i / t) || 0
                                }
                        },
                        getAngle: function(t, e) {
                                var i = e.pageY - t.pageY,
                                n = e.pageX - t.pageX;
                                return 180 * Math.atan2(i, n) / Math.PI
                        },
                        getDirection: function(t, e) {
                                var i = Math.abs(t.pageX - e.pageX),
                                n = Math.abs(t.pageY - e.pageY);
                                return i >= n ? t.pageX - e.pageX > 0 ? s.DIRECTION_LEFT: s.DIRECTION_RIGHT: t.pageY - e.pageY > 0 ? s.DIRECTION_UP: s.DIRECTION_DOWN
                        },
                        getDistance: function(t, e) {
                                var i = e.pageX - t.pageX,
                                n = e.pageY - t.pageY;
                                return Math.sqrt(i * i + n * n)
                        },
                        getScale: function(t, e) {
                                return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
                        },
                        getRotation: function(t, e) {
                                return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
                        },
                        isVertical: function(t) {
                                return t == s.DIRECTION_UP || t == s.DIRECTION_DOWN
                        },
                        stopDefaultBrowserBehavior: function(t, e) {
                                e && t && t.style && (s.utils.each(["webkit", "khtml", "moz", "Moz", "ms", "o", ""],
                                function(i) {
                                        s.utils.each(e,
                                        function(e, n) {
                                                i && (n = i + n.substring(0, 1).toUpperCase() + n.substring(1)),
                                                n in t.style && (t.style[n] = e)
                                        })
                                }), "none" == e.userSelect && (t.onselectstart = function() {
                                        return ! 1
                                }), "none" == e.userDrag && (t.ondragstart = function() {
                                        return ! 1
                                }))
                        }
                },
                s.Instance = function(t, e) {
                        var i = this;
                        return r(),
                        this.element = t,
                        this.enabled = !0,
                        this.options = s.utils.extend(s.utils.extend({},
                        s.defaults), e || {}),
                        this.options.stop_browser_behavior && s.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior),
                        s.event.onTouch(t, s.EVENT_START,
                        function(t) {
                                i.enabled && s.detection.startDetect(i, t)
                        }),
                        this
                },
                s.Instance.prototype = {
                        on: function(t, e) {
                                var i = t.split(" ");
                                return s.utils.each(i,
                                function(t) {
                                        this.element.addEventListener(t, e, !1)
                                },
                                this),
                                this
                        },
                        off: function(t, e) {
                                var i = t.split(" ");
                                return s.utils.each(i,
                                function(t) {
                                        this.element.removeEventListener(t, e, !1)
                                },
                                this),
                                this
                        },
                        trigger: function(t, e) {
                                e || (e = {});
                                var i = s.DOCUMENT.createEvent("Event");
                                i.initEvent(t, !0, !0),
                                i.gesture = e;
                                var n = this.element;
                                return s.utils.hasParent(e.target, n) && (n = e.target),
                                n.dispatchEvent(i),
                                this
                        },
                        enable: function(t) {
                                return this.enabled = t,
                                this
                        }
                };
                var a = null,
                o = !1,
                h = !1;
                s.event = {
                        bindDom: function(t, e, i) {
                                var n = e.split(" ");
                                s.utils.each(n,
                                function(e) {
                                        t.addEventListener(e, i, !1)
                                })
                        },
                        onTouch: function(t, e, i) {
                                var n = this;
                                this.bindDom(t, s.EVENT_TYPES[e],
                                function(r) {
                                        var l = r.type.toLowerCase();
                                        if (!l.match(/mouse/) || !h) {
                                                l.match(/touch/) || l.match(/pointerdown/) || l.match(/mouse/) && 1 === r.which ? o = !0 : l.match(/mouse/) && !r.which && (o = !1),
                                                l.match(/touch|pointer/) && (h = !0);
                                                var u = 0;
                                                o && (s.HAS_POINTEREVENTS && e != s.EVENT_END ? u = s.PointerEvent.updatePointer(e, r) : l.match(/touch/) ? u = r.touches.length: h || (u = l.match(/up/) ? 0 : 1), u > 0 && e == s.EVENT_END ? e = s.EVENT_MOVE: u || (e = s.EVENT_END), (u || null === a) && (a = r), i.call(s.detection, n.collectEventData(t, e, n.getTouchList(a, e), r)), s.HAS_POINTEREVENTS && e == s.EVENT_END && (u = s.PointerEvent.updatePointer(e, r))),
                                                u || (a = null, o = !1, h = !1, s.PointerEvent.reset())
                                        }
                                })
                        },
                        determineEventTypes: function() {
                                var t;
                                t = s.HAS_POINTEREVENTS ? s.PointerEvent.getEvents() : s.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"],
                                s.EVENT_TYPES[s.EVENT_START] = t[0],
                                s.EVENT_TYPES[s.EVENT_MOVE] = t[1],
                                s.EVENT_TYPES[s.EVENT_END] = t[2]
                        },
                        getTouchList: function(t) {
                                return s.HAS_POINTEREVENTS ? s.PointerEvent.getTouchList() : t.touches ? t.touches: (t.identifier = 1, [t])
                        },
                        collectEventData: function(t, e, i, n) {
                                var r = s.POINTER_TOUCH;
                                return (n.type.match(/mouse/) || s.PointerEvent.matchType(s.POINTER_MOUSE, n)) && (r = s.POINTER_MOUSE),
                                {
                                        center: s.utils.getCenter(i),
                                        timeStamp: (new Date).getTime(),
                                        target: n.target,
                                        touches: i,
                                        eventType: e,
                                        pointerType: r,
                                        srcEvent: n,
                                        preventDefault: function() {
                                                this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(),
                                                this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                                        },
                                        stopPropagation: function() {
                                                this.srcEvent.stopPropagation()
                                        },
                                        stopDetect: function() {
                                                return s.detection.stopDetect()
                                        }
                                }
                        }
                },
                s.PointerEvent = {
                        pointers: {},
                        getTouchList: function() {
                                var t = this,
                                e = [];
                                return s.utils.each(t.pointers,
                                function(t) {
                                        e.push(t)
                                }),
                                e
                        },
                        updatePointer: function(t, e) {
                                return t == s.EVENT_END ? this.pointers = {}: (e.identifier = e.pointerId, this.pointers[e.pointerId] = e),
                                Object.keys(this.pointers).length
                        },
                        matchType: function(t, e) {
                                if (!e.pointerType) return ! 1;
                                var i = e.pointerType,
                                n = {};
                                return n[s.POINTER_MOUSE] = i === e.MSPOINTER_TYPE_MOUSE || i === s.POINTER_MOUSE,
                                n[s.POINTER_TOUCH] = i === e.MSPOINTER_TYPE_TOUCH || i === s.POINTER_TOUCH,
                                n[s.POINTER_PEN] = i === e.MSPOINTER_TYPE_PEN || i === s.POINTER_PEN,
                                n[t]
                        },
                        getEvents: function() {
                                return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
                        },
                        reset: function() {
                                this.pointers = {}
                        }
                },
                s.detection = {
                        gestures: [],
                        current: null,
                        previous: null,
                        stopped: !1,
                        startDetect: function(t, e) {
                                this.current || (this.stopped = !1, this.current = {
                                        inst: t,
                                        startEvent: s.utils.extend({},
                                        e),
                                        lastEvent: !1,
                                        name: ""
                                },
                                this.detect(e))
                        },
                        detect: function(t) {
                                if (this.current && !this.stopped) {
                                        t = this.extendEventData(t);
                                        var e = this.current.inst.options;
                                        return s.utils.each(this.gestures,
                                        function(i) {
                                                return this.stopped || e[i.name] === !1 || i.handler.call(i, t, this.current.inst) !== !1 ? void 0 : (this.stopDetect(), !1)
                                        },
                                        this),
                                        this.current && (this.current.lastEvent = t),
                                        t.eventType == s.EVENT_END && !t.touches.length - 1 && this.stopDetect(),
                                        t
                                }
                        },
                        stopDetect: function() {
                                this.previous = s.utils.extend({},
                                this.current),
                                this.current = null,
                                this.stopped = !0
                        },
                        extendEventData: function(t) {
                                var e = this.current.startEvent; ! e || t.touches.length == e.touches.length && t.touches !== e.touches || (e.touches = [], s.utils.each(t.touches,
                                function(t) {
                                        e.touches.push(s.utils.extend({},
                                        t))
                                }));
                                var i, n, r = t.timeStamp - e.timeStamp,
                                a = t.center.pageX - e.center.pageX,
                                o = t.center.pageY - e.center.pageY,
                                h = s.utils.getVelocity(r, a, o);
                                return "end" === t.eventType ? (i = this.current.lastEvent && this.current.lastEvent.interimAngle, n = this.current.lastEvent && this.current.lastEvent.interimDirection) : (i = this.current.lastEvent && s.utils.getAngle(this.current.lastEvent.center, t.center), n = this.current.lastEvent && s.utils.getDirection(this.current.lastEvent.center, t.center)),
                                s.utils.extend(t, {
                                        deltaTime: r,
                                        deltaX: a,
                                        deltaY: o,
                                        velocityX: h.x,
                                        velocityY: h.y,
                                        distance: s.utils.getDistance(e.center, t.center),
                                        angle: s.utils.getAngle(e.center, t.center),
                                        interimAngle: i,
                                        direction: s.utils.getDirection(e.center, t.center),
                                        interimDirection: n,
                                        scale: s.utils.getScale(e.touches, t.touches),
                                        rotation: s.utils.getRotation(e.touches, t.touches),
                                        startEvent: e
                                }),
                                t
                        },
                        register: function(t) {
                                var e = t.defaults || {};
                                return e[t.name] === n && (e[t.name] = !0),
                                s.utils.extend(s.defaults, e, !0),
                                t.index = t.index || 1e3,
                                this.gestures.push(t),
                                this.gestures.sort(function(t, e) {
                                        return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
                                }),
                                this.gestures
                        }
                },
                s.gestures.Drag = {
                        name: "drag",
                        index: 50,
                        defaults: {
                                drag_min_distance: 10,
                                correct_for_drag_min_distance: !0,
                                drag_max_touches: 1,
                                drag_block_horizontal: !1,
                                drag_block_vertical: !1,
                                drag_lock_to_axis: !1,
                                drag_lock_min_distance: 25
                        },
                        triggered: !1,
                        handler: function(t, e) {
                                if (s.detection.current.name != this.name && this.triggered) return e.trigger(this.name + "end", t),
                                void(this.triggered = !1);
                                if (! (e.options.drag_max_touches > 0 && t.touches.length > e.options.drag_max_touches)) switch (t.eventType) {
                                case s.EVENT_START:
                                        this.triggered = !1;
                                        break;
                                case s.EVENT_MOVE:
                                        if (t.distance < e.options.drag_min_distance && s.detection.current.name != this.name) return;
                                        if (s.detection.current.name != this.name && (s.detection.current.name = this.name, e.options.correct_for_drag_min_distance && t.distance > 0)) {
                                                var i = Math.abs(e.options.drag_min_distance / t.distance);
                                                s.detection.current.startEvent.center.pageX += t.deltaX * i,
                                                s.detection.current.startEvent.center.pageY += t.deltaY * i,
                                                t = s.detection.extendEventData(t)
                                        } (s.detection.current.lastEvent.drag_locked_to_axis || e.options.drag_lock_to_axis && e.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
                                        var n = s.detection.current.lastEvent.direction;
                                        t.drag_locked_to_axis && n !== t.direction && (t.direction = s.utils.isVertical(n) ? t.deltaY < 0 ? s.DIRECTION_UP: s.DIRECTION_DOWN: t.deltaX < 0 ? s.DIRECTION_LEFT: s.DIRECTION_RIGHT),
                                        this.triggered || (e.trigger(this.name + "start", t), this.triggered = !0),
                                        e.trigger(this.name, t),
                                        e.trigger(this.name + t.direction, t),
                                        (e.options.drag_block_vertical && s.utils.isVertical(t.direction) || e.options.drag_block_horizontal && !s.utils.isVertical(t.direction)) && t.preventDefault();
                                        break;
                                case s.EVENT_END:
                                        this.triggered && e.trigger(this.name + "end", t),
                                        this.triggered = !1
                                }
                        }
                },
                s.gestures.Hold = {
                        name: "hold",
                        index: 10,
                        defaults: {
                                hold_timeout: 500,
                                hold_threshold: 1
                        },
                        timer: null,
                        handler: function(t, e) {
                                switch (t.eventType) {
                                case s.EVENT_START:
                                        clearTimeout(this.timer),
                                        s.detection.current.name = this.name,
                                        this.timer = setTimeout(function() {
                                                "hold" == s.detection.current.name && e.trigger("hold", t)
                                        },
                                        e.options.hold_timeout);
                                        break;
                                case s.EVENT_MOVE:
                                        t.distance > e.options.hold_threshold && clearTimeout(this.timer);
                                        break;
                                case s.EVENT_END:
                                        clearTimeout(this.timer)
                                }
                        }
                },
                s.gestures.Release = {
                        name: "release",
                        index: 1 / 0,
                        handler: function(t, e) {
                                t.eventType == s.EVENT_END && e.trigger(this.name, t)
                        }
                },
                s.gestures.Swipe = {
                        name: "swipe",
                        index: 40,
                        defaults: {
                                swipe_min_touches: 1,
                                swipe_max_touches: 1,
                                swipe_velocity: .7
                        },
                        handler: function(t, e) {
                                if (t.eventType == s.EVENT_END) {
                                        if (e.options.swipe_max_touches > 0 && t.touches.length < e.options.swipe_min_touches && t.touches.length > e.options.swipe_max_touches) return; (t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
                                }
                        }
                },
                s.gestures.Tap = {
                        name: "tap",
                        index: 100,
                        defaults: {
                                tap_max_touchtime: 250,
                                tap_max_distance: 10,
                                tap_always: !0,
                                doubletap_distance: 20,
                                doubletap_interval: 300
                        },
                        handler: function(t, e) {
                                if (t.eventType == s.EVENT_END && "touchcancel" != t.srcEvent.type) {
                                        var i = s.detection.previous,
                                        n = !1;
                                        if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
                                        i && "tap" == i.name && t.timeStamp - i.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), n = !0),
                                        (!n || e.options.tap_always) && (s.detection.current.name = "tap", e.trigger(s.detection.current.name, t))
                                }
                        }
                },
                s.gestures.Touch = {
                        name: "touch",
                        index: -1 / 0,
                        defaults: {
                                prevent_default: !1,
                                prevent_mouseevents: !1
                        },
                        handler: function(t, e) {
                                return e.options.prevent_mouseevents && t.pointerType == s.POINTER_MOUSE ? void t.stopDetect() : (e.options.prevent_default && t.preventDefault(), void(t.eventType == s.EVENT_START && e.trigger(this.name, t)))
                        }
                },
                s.gestures.Transform = {
                        name: "transform",
                        index: 45,
                        defaults: {
                                transform_min_scale: .01,
                                transform_min_rotation: 1,
                                transform_always_block: !1
                        },
                        triggered: !1,
                        handler: function(t, e) {
                                if (s.detection.current.name != this.name && this.triggered) return e.trigger(this.name + "end", t),
                                void(this.triggered = !1);
                                if (! (t.touches.length < 2)) switch (e.options.transform_always_block && t.preventDefault(), t.eventType) {
                                case s.EVENT_START:
                                        this.triggered = !1;
                                        break;
                                case s.EVENT_MOVE:
                                        var i = Math.abs(1 - t.scale),
                                        n = Math.abs(t.rotation);
                                        if (i < e.options.transform_min_scale && n < e.options.transform_min_rotation) return;
                                        s.detection.current.name = this.name,
                                        this.triggered || (e.trigger(this.name + "start", t), this.triggered = !0),
                                        e.trigger(this.name, t),
                                        n > e.options.transform_min_rotation && e.trigger("rotate", t),
                                        i > e.options.transform_min_scale && (e.trigger("pinch", t), e.trigger("pinch" + (t.scale < 1 ? "in": "out"), t));
                                        break;
                                case s.EVENT_END:
                                        this.triggered && e.trigger(this.name + "end", t),
                                        this.triggered = !1
                                }
                        }
                },
                "function" == typeof define && define.amd ? define(function() {
                        return s
                }) : "object" == ("undefined" == typeof t ? "undefined": i(t)) && t.exports ? t.exports = s: e.Hammer = s
        } (window)
},
function(t, e) {
        t.exports = jQuery
},
function(t, e) {
        "use strict";
        /*!
	 * jQuery Transit - CSS3 transitions and transformations
	 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
	 * MIT Licensed.
	 *
	 * http://ricostacruz.com/jquery.transit
	 * http://github.com/rstacruz/jquery.transit
	 */
        !
        function(t) {
                function e(t) {
                        if (t in c.style) return t;
                        var e = ["Moz", "Webkit", "O", "ms"],
                        i = t.charAt(0).toUpperCase() + t.substr(1);
                        if (t in c.style) return t;
                        for (var n = 0; n < e.length; ++n) {
                                var r = e[n] + i;
                                if (r in c.style) return r
                        }
                }
                function i() {
                        return c.style[f.transform] = "",
                        c.style[f.transform] = "rotateY(90deg)",
                        "" !== c.style[f.transform]
                }
                function n(t) {
                        return "string" == typeof t && this.parse(t),
                        this
                }
                function r(t, e, i) {
                        e === !0 ? t.queue(i) : e ? t.queue(e, i) : i()
                }
                function s(e) {
                        var i = [];
                        return t.each(e,
                        function(e) {
                                e = t.camelCase(e),
                                e = t.transit.propertyMap[e] || t.cssProps[e] || e,
                                e = h(e),
                                t.inArray(e, i) === -1 && i.push(e)
                        }),
                        i
                }
                function a(e, i, n, r) {
                        var a = s(e);
                        t.cssEase[n] && (n = t.cssEase[n]);
                        var o = "" + u(i) + " " + n;
                        parseInt(r, 10) > 0 && (o += " " + u(r));
                        var h = [];
                        return t.each(a,
                        function(t, e) {
                                h.push(e + " " + o)
                        }),
                        h.join(", ")
                }
                function o(e, i) {
                        i || (t.cssNumber[e] = !0),
                        t.transit.propertyMap[e] = f.transform,
                        t.cssHooks[e] = {
                                get: function(i) {
                                        var n = t(i).css("transit:transform");
                                        return n.get(e)
                                },
                                set: function(i, n) {
                                        var r = t(i).css("transit:transform");
                                        r.setFromString(e, n),
                                        t(i).css({
                                                "transit:transform": r
                                        })
                                }
                        }
                }
                function h(t) {
                        return t.replace(/([A-Z])/g,
                        function(t) {
                                return "-" + t.toLowerCase()
                        })
                }
                function l(t, e) {
                        return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e: t
                }
                function u(e) {
                        var i = e;
                        return t.fx.speeds[i] && (i = t.fx.speeds[i]),
                        l(i, "ms")
                }
                t.transit = {
                        version: "0.9.9",
                        propertyMap: {
                                marginLeft: "margin",
                                marginRight: "margin",
                                marginBottom: "margin",
                                marginTop: "margin",
                                paddingLeft: "padding",
                                paddingRight: "padding",
                                paddingBottom: "padding",
                                paddingTop: "padding"
                        },
                        enabled: !0,
                        useTransitionEnd: !1
                };
                var c = document.createElement("div"),
                f = {},
                p = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
                f.transition = e("transition"),
                f.transitionDelay = e("transitionDelay"),
                f.transform = e("transform"),
                f.transformOrigin = e("transformOrigin"),
                f.transform3d = i();
                var _ = {
                        transition: "transitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        WebkitTransition: "webkitTransitionEnd",
                        msTransition: "MSTransitionEnd"
                },
                d = f.transitionEnd = _[f.transition] || null;
                for (var m in f) f.hasOwnProperty(m) && "undefined" == typeof t.support[m] && (t.support[m] = f[m]);
                c = null,
                t.cssEase = {
                        _default: "ease",
                        in:"ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
                        epubOut: "cubic-bezier(.3,1,.0,1)"
                },
                t.cssHooks["transit:transform"] = {
                        get: function(e) {
                                return t(e).data("transform") || new n
                        },
                        set: function(e, i) {
                                var r = i;
                                r instanceof n || (r = new n(r)),
                                "WebkitTransform" !== f.transform || p ? e.style[f.transform] = r.toString() : e.style[f.transform] = r.toString(!0),
                                t(e).data("transform", r)
                        }
                },
                t.cssHooks.transform = {
                        set: t.cssHooks["transit:transform"].set
                },
                t.fn.jquery < "1.8" && (t.cssHooks.transformOrigin = {
                        get: function(t) {
                                return t.style[f.transformOrigin]
                        },
                        set: function(t, e) {
                                t.style[f.transformOrigin] = e
                        }
                },
                t.cssHooks.transition = {
                        get: function(t) {
                                return t.style[f.transition]
                        },
                        set: function(t, e) {
                                t.style[f.transition] = e
                        }
                }),
                o("scale"),
                o("translate"),
                o("translateZ"),
                o("rotate"),
                o("rotateX"),
                o("rotateY"),
                o("rotate3d"),
                o("perspective"),
                o("skewX"),
                o("skewY"),
                o("x", !0),
                o("y", !0),
                n.prototype = {
                        setFromString: function(t, e) {
                                var i = "string" == typeof e ? e.split(",") : e.constructor === Array ? e: [e];
                                i.unshift(t),
                                n.prototype.set.apply(this, i)
                        },
                        set: function(t) {
                                var e = Array.prototype.slice.apply(arguments, [1]);
                                this.setter[t] ? this.setter[t].apply(this, e) : this[t] = e.join(",")
                        },
                        get: function(t) {
                                return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0
                        },
                        setter: {
                                rotate: function(t) {
                                        this.rotate = l(t, "deg")
                                },
                                rotateX: function(t) {
                                        this.rotateX = l(t, "deg")
                                },
                                rotateY: function(t) {
                                        this.rotateY = l(t, "deg")
                                },
                                scale: function(t, e) {
                                        void 0 === e && (e = t),
                                        this.scale = t + "," + e
                                },
                                skewX: function(t) {
                                        this.skewX = l(t, "deg")
                                },
                                skewY: function(t) {
                                        this.skewY = l(t, "deg")
                                },
                                perspective: function(t) {
                                        this.perspective = l(t, "px")
                                },
                                x: function(t) {
                                        this.set("translate", t, null)
                                },
                                y: function(t) {
                                        this.set("translate", null, t)
                                },
                                translate: function(t, e) {
                                        void 0 === this._translateX && (this._translateX = 0),
                                        void 0 === this._translateY && (this._translateY = 0),
                                        null !== t && void 0 !== t && (this._translateX = l(t, "px")),
                                        null !== e && void 0 !== e && (this._translateY = l(e, "px")),
                                        this.translate = this._translateX + "," + this._translateY
                                },
                                translateZ: function(t) {
                                        this.translateZ = l(t, "px")
                                }
                        },
                        getter: {
                                x: function() {
                                        return this._translateX || 0
                                },
                                y: function() {
                                        return this._translateY || 0
                                },
                                translateZ: function() {
                                        return this.translateZ || 0
                                },
                                scale: function() {
                                        var t = (this.scale || "1,1").split(",");
                                        return t[0] && (t[0] = parseFloat(t[0])),
                                        t[1] && (t[1] = parseFloat(t[1])),
                                        t[0] === t[1] ? t[0] : t
                                },
                                rotate3d: function() {
                                        for (var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0; e <= 3; ++e) t[e] && (t[e] = parseFloat(t[e]));
                                        return t[3] && (t[3] = l(t[3], "deg")),
                                        t
                                }
                        },
                        parse: function(t) {
                                var e = this;
                                t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,
                                function(t, i, n) {
                                        e.setFromString(i, n)
                                })
                        },
                        toString: function(t) {
                                var e = [];
                                for (var i in this) if (this.hasOwnProperty(i)) {
                                        if (!f.transform3d && ("rotateX" === i || "rotateY" === i || "translateZ" === i || "perspective" === i || "transformOrigin" === i)) continue;
                                        "_" !== i[0] && (t && "scale" === i ? e.push(i + "3d(" + this[i] + ",1)") : t && "translate" === i ? e.push(i + "3d(" + this[i] + ",0)") : e.push(i + "(" + this[i] + ")"))
                                }
                                return e.join(" ")
                        }
                },
                t.fn.transition = t.fn.transit = function(e, i, n, s) {
                        var o = this,
                        h = 0,
                        l = !0;
                        "function" == typeof i && (s = i, i = void 0),
                        "function" == typeof n && (s = n, n = void 0),
                        "undefined" != typeof e.easing && (n = e.easing, delete e.easing),
                        "undefined" != typeof e.duration && (i = e.duration, delete e.duration),
                        "undefined" != typeof e.complete && (s = e.complete, delete e.complete),
                        "undefined" != typeof e.queue && (l = e.queue, delete e.queue),
                        "undefined" != typeof e.delay && (h = e.delay, delete e.delay),
                        "undefined" == typeof i && (i = t.fx.speeds._default),
                        "undefined" == typeof n && (n = t.cssEase._default),
                        t.fx.off && (i = 0),
                        i = u(i);
                        var c = a(e, i, n, h),
                        p = t.transit.enabled && f.transition,
                        _ = p ? parseInt(i, 10) + parseInt(h, 10) : 0;
                        if (0 === _) {
                                var m = function(t) {
                                        o.css(e),
                                        s && s.apply(o),
                                        t && t()
                                };
                                return r(o, l, m),
                                o
                        }
                        var g = {},
                        v = function(i) {
                                var n = !1,
                                r = function t() {
                                        n && o.unbind(d, t),
                                        _ > 0 && o.each(function() {
                                                this.style[f.transition] = g[this] || null
                                        }),
                                        "function" == typeof s && s.apply(o),
                                        "function" == typeof i && i()
                                };
                                _ > 0 && d && t.transit.useTransitionEnd ? (n = !0, o.bind(d, r)) : window.setTimeout(r, _),
                                o.each(function() {
                                        _ > 0 && (this.style[f.transition] = c),
                                        t(this).css(e)
                                })
                        },
                        y = function(t) {
                                this.offsetWidth,
                                v(t)
                        };
                        return r(o, l, y),
                        this
                },
                t.transit.getTransitionValue = a
        } (jQuery)
},
function(t, e, i) {
        var n, r, s;
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
                return typeof t
        }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
        };
        /*!
	 * jQuery Mousewheel 3.1.12
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */
        !
        function(a) {
                r = [i(9)],
                n = a,
                s = "function" == typeof n ? n.apply(e, r) : n,
                !(void 0 !== s && (t.exports = s))
        } (function(t) {
                function e(e) {
                        var a = e || window.event,
                        o = h.call(arguments, 1),
                        l = 0,
                        c = 0,
                        f = 0,
                        p = 0,
                        _ = 0,
                        d = 0;
                        if (e = t.event.fix(a), e.type = "mousewheel", "detail" in a && (f = a.detail * -1), "wheelDelta" in a && (f = a.wheelDelta), "wheelDeltaY" in a && (f = a.wheelDeltaY), "wheelDeltaX" in a && (c = a.wheelDeltaX * -1), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (c = f * -1, f = 0), l = 0 === f ? c: f, "deltaY" in a && (f = a.deltaY * -1, l = f), "deltaX" in a && (c = a.deltaX, 0 === f && (l = c * -1)), 0 !== f || 0 !== c) {
                                if (1 === a.deltaMode) {
                                        var m = t.data(this, "mousewheel-line-height");
                                        l *= m,
                                        f *= m,
                                        c *= m
                                } else if (2 === a.deltaMode) {
                                        var g = t.data(this, "mousewheel-page-height");
                                        l *= g,
                                        f *= g,
                                        c *= g
                                }
                                if (p = Math.max(Math.abs(f), Math.abs(c)), (!s || p < s) && (s = p, n(a, p) && (s /= 40)), n(a, p) && (l /= 40, c /= 40, f /= 40), l = Math[l >= 1 ? "floor": "ceil"](l / s), c = Math[c >= 1 ? "floor": "ceil"](c / s), f = Math[f >= 1 ? "floor": "ceil"](f / s), u.settings.normalizeOffset && this.getBoundingClientRect) {
                                        var v = this.getBoundingClientRect();
                                        _ = e.clientX - v.left,
                                        d = e.clientY - v.top
                                }
                                return e.deltaX = c,
                                e.deltaY = f,
                                e.deltaFactor = s,
                                e.offsetX = _,
                                e.offsetY = d,
                                e.deltaMode = 0,
                                o.unshift(e, l, c, f),
                                r && clearTimeout(r),
                                r = setTimeout(i, 200),
                                (t.event.dispatch || t.event.handle).apply(this, o)
                        }
                }
                function i() {
                        s = null
                }
                function n(t, e) {
                        return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
                }
                var r, s, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                h = Array.prototype.slice;
                if (t.event.fixHooks) for (var l = a.length; l;) t.event.fixHooks[a[--l]] = t.event.mouseHooks;
                var u = t.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                                if (this.addEventListener) for (var i = o.length; i;) this.addEventListener(o[--i], e, !1);
                                else this.onmousewheel = e;
                                t.data(this, "mousewheel-line-height", u.getLineHeight(this)),
                                t.data(this, "mousewheel-page-height", u.getPageHeight(this))
                        },
                        teardown: function() {
                                if (this.removeEventListener) for (var i = o.length; i;) this.removeEventListener(o[--i], e, !1);
                                else this.onmousewheel = null;
                                t.removeData(this, "mousewheel-line-height"),
                                t.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function(e) {
                                var i = t(e),
                                n = i["offsetParent" in t.fn ? "offsetParent": "parent"]();
                                return n.length || (n = t("body")),
                                parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function(e) {
                                return t(e).height()
                        },
                        settings: {
                                adjustOldDeltas: !0,
                                normalizeOffset: !0
                        }
                };
                t.fn.extend({
                        mousewheel: function(t) {
                                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(t) {
                                return this.unbind("mousewheel", t)
                        }
                })
        })
},
function(t, e) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
                return typeof t
        }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
        },
        n = "undefined" != typeof t && t.exports && "undefined" != typeof global ? global: window; (n._gsQueue || (n._gsQueue = [])).push(function() {
                n._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
                function(t, e, i) {
                        var n = function(t) {
                                var e, i = [],
                                n = t.length;
                                for (e = 0; e !== n; i.push(t[e++]));
                                return i
                        },
                        r = function t(e, n, r) {
                                i.call(this, e, n, r),
                                this._cycle = 0,
                                this._yoyo = this.vars.yoyo === !0,
                                this._repeat = this.vars.repeat || 0,
                                this._repeatDelay = this.vars.repeatDelay || 0,
                                this._dirty = !0,
                                this.render = t.prototype.render
                        },
                        s = 1e-10,
                        a = i._internals,
                        o = a.isSelector,
                        h = a.isArray,
                        l = r.prototype = i.to({},
                        .1, {}),
                        u = [];
                        r.version = "1.13.2",
                        l.constructor = r,
                        l.kill()._gc = !1,
                        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
                        r.getTweensOf = i.getTweensOf,
                        r.lagSmoothing = i.lagSmoothing,
                        r.ticker = i.ticker,
                        r.render = i.render,
                        l.invalidate = function() {
                                return this._yoyo = this.vars.yoyo === !0,
                                this._repeat = this.vars.repeat || 0,
                                this._repeatDelay = this.vars.repeatDelay || 0,
                                this._uncache(!0),
                                i.prototype.invalidate.call(this)
                        },
                        l.updateTo = function(t, e) {
                                var n, r = this.ratio;
                                e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                                for (n in t) this.vars[n] = t[n];
                                if (this._initted) if (e) this._initted = !1;
                                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                        var s = this._time;
                                        this.render(0, !0, !1),
                                        this._initted = !1,
                                        this.render(s, !0, !1)
                                } else if (this._time > 0) {
                                        this._initted = !1,
                                        this._init();
                                        for (var a, o = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c,
                                        h.c *= o,
                                        h.s = a - h.c,
                                        h = h._next
                                }
                                return this
                        },
                        l.render = function(t, e, i) {
                                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                                var n, r, o, h, l, c, f, p, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                                d = this._time,
                                m = this._totalTime,
                                g = this._cycle,
                                v = this._duration,
                                y = this._rawPrevTime;
                                if (t >= _ ? (this._totalTime = _, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || y < 0 || y === s) && y !== t && (i = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t: s)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0 && y !== s) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t: s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v: this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / v, c = this._easeType, f = this._easePower, (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === f ? l *= l: 2 === f ? l *= l * l: 3 === f ? l *= l * l * l: 4 === f && (l *= l * l * l * l), 1 === c ? this.ratio = 1 - l: 2 === c ? this.ratio = l: this._time / v < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), d === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)));
                                if (!this._initted) {
                                        if (this._init(), !this._initted || this._gc) return;
                                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d,
                                        this._totalTime = m,
                                        this._rawPrevTime = y,
                                        this._cycle = g,
                                        a.lazyTweens.push(this),
                                        void(this._lazy = [t, e]);
                                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                                }
                                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                                o = o._next;
                                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)),
                                this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)),
                                r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || u), 0 === v && this._rawPrevTime === s && p !== s && (this._rawPrevTime = 0)))
                        },
                        r.to = function(t, e, i) {
                                return new r(t, e, i)
                        },
                        r.from = function(t, e, i) {
                                return i.runBackwards = !0,
                                i.immediateRender = 0 != i.immediateRender,
                                new r(t, e, i)
                        },
                        r.fromTo = function(t, e, i, n) {
                                return n.startAt = i,
                                n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                                new r(t, e, n)
                        },
                        r.staggerTo = r.allTo = function(t, e, s, a, l, c, f) {
                                a = a || 0;
                                var p, _, d, m, g = s.delay || 0,
                                v = [],
                                y = function() {
                                        s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments),
                                        l.apply(f || this, c || u)
                                };
                                for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t))), p = t.length, d = 0; d < p; d++) {
                                        _ = {};
                                        for (m in s) _[m] = s[m];
                                        _.delay = g,
                                        d === p - 1 && l && (_.onComplete = y),
                                        v[d] = new r(t[d], e, _),
                                        g += a
                                }
                                return v
                        },
                        r.staggerFrom = r.allFrom = function(t, e, i, n, s, a, o) {
                                return i.runBackwards = !0,
                                i.immediateRender = 0 != i.immediateRender,
                                r.staggerTo(t, e, i, n, s, a, o)
                        },
                        r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, a, o, h) {
                                return n.startAt = i,
                                n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                                r.staggerTo(t, e, n, s, a, o, h)
                        },
                        r.delayedCall = function(t, e, i, n, s) {
                                return new r(e, 0, {
                                        delay: t,
                                        onComplete: e,
                                        onCompleteParams: i,
                                        onCompleteScope: n,
                                        onReverseComplete: e,
                                        onReverseCompleteParams: i,
                                        onReverseCompleteScope: n,
                                        immediateRender: !1,
                                        useFrames: s,
                                        overwrite: 0
                                })
                        },
                        r.set = function(t, e) {
                                return new r(t, 0, e)
                        },
                        r.isTweening = function(t) {
                                return i.getTweensOf(t, !0).length > 0
                        };
                        var c = function t(e, n) {
                                for (var r = [], s = 0, a = e._first; a;) a instanceof i ? r[s++] = a: (n && (r[s++] = a), r = r.concat(t(a, n)), s = r.length),
                                a = a._next;
                                return r
                        },
                        f = r.getAllTweens = function(e) {
                                return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                        };
                        r.killAll = function(t, i, n, r) {
                                null == i && (i = !0),
                                null == n && (n = !0);
                                var s, a, o, h = f(0 != r),
                                l = h.length,
                                u = i && n && r;
                                for (o = 0; o < l; o++) a = h[o],
                                (u || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                        },
                        r.killChildTweensOf = function(t, e) {
                                if (null != t) {
                                        var s, l, u, c, f, p = a.tweenLookup;
                                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t)), h(t)) for (c = t.length; --c > -1;) r.killChildTweensOf(t[c], e);
                                        else {
                                                s = [];
                                                for (u in p) for (l = p[u].target.parentNode; l;) l === t && (s = s.concat(p[u].tweens)),
                                                l = l.parentNode;
                                                for (f = s.length, c = 0; c < f; c++) e && s[c].totalTime(s[c].totalDuration()),
                                                s[c]._enabled(!1, !1)
                                        }
                                }
                        };
                        var p = function(t, i, n, r) {
                                i = i !== !1,
                                n = n !== !1,
                                r = r !== !1;
                                for (var s, a, o = f(r), h = i && n && r, l = o.length; --l > -1;) a = o[l],
                                (h || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && a.paused(t)
                        };
                        return r.pauseAll = function(t, e, i) {
                                p(!0, t, e, i)
                        },
                        r.resumeAll = function(t, e, i) {
                                p(!1, t, e, i)
                        },
                        r.globalTimeScale = function(e) {
                                var n = t._rootTimeline,
                                r = i.ticker.time;
                                return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                        },
                        l.progress = function(t) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t: t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                        },
                        l.totalProgress = function(t) {
                                return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                        },
                        l.time = function(t, e) {
                                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        },
                        l.duration = function(e) {
                                return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                        },
                        l.totalDuration = function(t) {
                                return arguments.length ? this._repeat === -1 ? this: this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                        },
                        l.repeat = function(t) {
                                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        },
                        l.repeatDelay = function(t) {
                                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        },
                        l.yoyo = function(t) {
                                return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        },
                        r
                },
                !0),
                n._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
                function(t, e, i) {
                        var r = function(t) {
                                e.call(this, t),
                                this._labels = {},
                                this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
                                this.smoothChildTiming = this.vars.smoothChildTiming === !0,
                                this._sortChildren = !0,
                                this._onUpdate = this.vars.onUpdate;
                                var i, n, r = this.vars;
                                for (n in r) i = r[n],
                                h(i) && i.join("").indexOf("{self}") !== -1 && (r[n] = this._swapSelfInParams(i));
                                h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                        },
                        s = 1e-10,
                        a = i._internals,
                        o = a.isSelector,
                        h = a.isArray,
                        l = a.lazyTweens,
                        u = a.lazyRender,
                        c = [],
                        f = n._gsDefine.globals,
                        p = function(t) {
                                var e, i = {};
                                for (e in t) i[e] = t[e];
                                return i
                        },
                        _ = function(t, e, i, n) {
                                var r = t._timeline._totalTime; ! e && this._forcingPlayhead || (t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || c), this._forcingPlayhead && t._timeline.seek(r))
                        },
                        d = function(t) {
                                var e, i = [],
                                n = t.length;
                                for (e = 0; e !== n; i.push(t[e++]));
                                return i
                        },
                        m = r.prototype = new e;
                        return r.version = "1.13.2",
                        m.constructor = r,
                        m.kill()._gc = m._forcingPlayhead = !1,
                        m.to = function(t, e, n, r) {
                                var s = n.repeat && f.TweenMax || i;
                                return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                        },
                        m.from = function(t, e, n, r) {
                                return this.add((n.repeat && f.TweenMax || i).from(t, e, n), r)
                        },
                        m.fromTo = function(t, e, n, r, s) {
                                var a = r.repeat && f.TweenMax || i;
                                return e ? this.add(a.fromTo(t, e, n, r), s) : this.set(t, r, s)
                        },
                        m.staggerTo = function(t, e, n, s, a, h, l, u) {
                                var c, f = new r({
                                        onComplete: h,
                                        onCompleteParams: l,
                                        onCompleteScope: u,
                                        smoothChildTiming: this.smoothChildTiming
                                });
                                for ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = d(t)), s = s || 0, c = 0; c < t.length; c++) n.startAt && (n.startAt = p(n.startAt)),
                                f.to(t[c], e, p(n), c * s);
                                return this.add(f, a)
                        },
                        m.staggerFrom = function(t, e, i, n, r, s, a, o) {
                                return i.immediateRender = 0 != i.immediateRender,
                                i.runBackwards = !0,
                                this.staggerTo(t, e, i, n, r, s, a, o)
                        },
                        m.staggerFromTo = function(t, e, i, n, r, s, a, o, h) {
                                return n.startAt = i,
                                n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                                this.staggerTo(t, e, n, r, s, a, o, h)
                        },
                        m.call = function(t, e, n, r) {
                                return this.add(i.delayedCall(0, t, e, n), r)
                        },
                        m.set = function(t, e, n) {
                                return n = this._parseTimeOrLabel(n, 0, !0),
                                null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
                                this.add(new i(t, 0, e), n)
                        },
                        r.exportRoot = function(t, e) {
                                t = t || {},
                                null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                                var n, s, a = new r(t),
                                o = a._timeline;
                                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, n = o._first; n;) s = n._next,
                                e && n instanceof i && n.target === n.vars.onComplete || a.add(n, n._startTime - n._delay),
                                n = s;
                                return o.add(a, 0),
                                a
                        },
                        m.add = function(n, s, a, o) {
                                var l, u, c, f, p, _;
                                if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, n)), !(n instanceof t)) {
                                        if (n instanceof Array || n && n.push && h(n)) {
                                                for (a = a || "normal", o = o || 0, l = s, u = n.length, c = 0; c < u; c++) h(f = n[c]) && (f = new r({
                                                        tweens: f
                                                })),
                                                this.add(f, l),
                                                "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale: "start" === a && (f._startTime -= f.delay())),
                                                l += o;
                                                return this._uncache(!0)
                                        }
                                        if ("string" == typeof n) return this.addLabel(n, s);
                                        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                                        n = i.delayedCall(0, n)
                                }
                                if (e.prototype.add.call(this, n, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (p = this, _ = p.rawTime() > n._startTime; p._timeline;) _ && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1),
                                p = p._timeline;
                                return this
                        },
                        m.remove = function(e) {
                                if (e instanceof t) return this._remove(e, !1);
                                if (e instanceof Array || e && e.push && h(e)) {
                                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                                        return this
                                }
                                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                        },
                        m._remove = function(t, i) {
                                e.prototype._remove.call(this, t, i);
                                var n = this._last;
                                return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
                                this
                        },
                        m.append = function(t, e) {
                                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                        },
                        m.insert = m.insertMultiple = function(t, e, i, n) {
                                return this.add(t, e || 0, i, n)
                        },
                        m.appendMultiple = function(t, e, i, n) {
                                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                        },
                        m.addLabel = function(t, e) {
                                return this._labels[t] = this._parseTimeOrLabel(e),
                                this
                        },
                        m.addPause = function(t, e, i, n) {
                                return this.call(_, ["{self}", e, i, n], this, t)
                        },
                        m.removeLabel = function(t) {
                                return delete this._labels[t],
                                this
                        },
                        m.getLabelTime = function(t) {
                                return null != this._labels[t] ? this._labels[t] : -1
                        },
                        m._parseTimeOrLabel = function(e, i, n, r) {
                                var s;
                                if (r instanceof t && r.timeline === this) this.remove(r);
                                else if (r && (r instanceof Array || r.push && h(r))) for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                                if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                                else {
                                        if (s = e.indexOf("="), s === -1) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i: i: this._labels[e] + i;
                                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)),
                                        e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                                }
                                return Number(e) + i
                        },
                        m.seek = function(t, e) {
                                return this.totalTime("number" == typeof t ? t: this._parseTimeOrLabel(t), e !== !1)
                        },
                        m.stop = function() {
                                return this.paused(!0)
                        },
                        m.gotoAndPlay = function(t, e) {
                                return this.play(t, e)
                        },
                        m.gotoAndStop = function(t, e) {
                                return this.pause(t, e)
                        },
                        m.render = function(t, e, i) {
                                this._gc && this._enabled(!0, !1);
                                var n, r, a, o, h, f = this._dirty ? this.totalDuration() : this._totalDuration,
                                p = this._time,
                                _ = this._startTime,
                                d = this._timeScale,
                                m = this._paused;
                                if (t >= f ? (this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > s && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: s, t = f + 1e-4) : t < 1e-7 ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), t < 0 ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: s, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || h) {
                                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= p) for (n = this._first; n && (a = n._next, !this._paused || m);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                        n = a;
                                        else for (n = this._last; n && (a = n._prev, !this._paused || m);)(n._active || n._startTime <= p && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                        n = a;
                                        this._onUpdate && (e || (l.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))),
                                        o && (this._gc || _ !== this._startTime && d === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (l.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || c)))
                                }
                        },
                        m._hasPausedChild = function() {
                                for (var t = this._first; t;) {
                                        if (t._paused || t instanceof r && t._hasPausedChild()) return ! 0;
                                        t = t._next
                                }
                                return ! 1
                        },
                        m.getChildren = function(t, e, n, r) {
                                r = r || -9999999999;
                                for (var s = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof i ? e !== !1 && (s[o++] = a) : (n !== !1 && (s[o++] = a), t !== !1 && (s = s.concat(a.getChildren(!0, e, n)), o = s.length))),
                                a = a._next;
                                return s
                        },
                        m.getTweensOf = function(t, e) {
                                var n, r, s = this._gc,
                                a = [],
                                o = 0;
                                for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (a[o++] = n[r]);
                                return s && this._enabled(!1, !0),
                                a
                        },
                        m._contains = function(t) {
                                for (var e = t.timeline; e;) {
                                        if (e === this) return ! 0;
                                        e = e.timeline
                                }
                                return ! 1
                        },
                        m.shiftChildren = function(t, e, i) {
                                i = i || 0;
                                for (var n, r = this._first,
                                s = this._labels; r;) r._startTime >= i && (r._startTime += t),
                                r = r._next;
                                if (e) for (n in s) s[n] >= i && (s[n] += t);
                                return this._uncache(!0)
                        },
                        m._kill = function(t, e) {
                                if (!t && !e) return this._enabled(!1, !1);
                                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                                return r
                        },
                        m.clear = function(t) {
                                var e = this.getChildren(!1, !0, !0),
                                i = e.length;
                                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                                return t !== !1 && (this._labels = {}),
                                this._uncache(!0)
                        },
                        m.invalidate = function() {
                                for (var e = this._first; e;) e.invalidate(),
                                e = e._next;
                                return t.prototype.invalidate.call(this)
                        },
                        m._enabled = function(t, i) {
                                if (t === this._gc) for (var n = this._first; n;) n._enabled(t, !0),
                                n = n._next;
                                return e.prototype._enabled.call(this, t, i)
                        },
                        m.totalTime = function(e, i, n) {
                                this._forcingPlayhead = !0;
                                var r = t.prototype.totalTime.apply(this, arguments);
                                return this._forcingPlayhead = !1,
                                r
                        },
                        m.duration = function(t) {
                                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                        },
                        m.totalDuration = function(t) {
                                if (!arguments.length) {
                                        if (this._dirty) {
                                                for (var e, i, n = 0,
                                                r = this._last,
                                                s = 999999999999; r;) e = r._prev,
                                                r._dirty && r.totalDuration(),
                                                r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime,
                                                r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren( - r._startTime, !1, -9999999999), s = 0),
                                                i = r._startTime + r._totalDuration / r._timeScale,
                                                i > n && (n = i),
                                                r = e;
                                                this._duration = this._totalDuration = n,
                                                this._dirty = !1
                                        }
                                        return this._totalDuration
                                }
                                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t),
                                this
                        },
                        m.usesFrames = function() {
                                for (var e = this._timeline; e._timeline;) e = e._timeline;
                                return e === t._rootFramesTimeline
                        },
                        m.rawTime = function() {
                                return this._paused ? this._totalTime: (this._timeline.rawTime() - this._startTime) * this._timeScale
                        },
                        r
                },
                !0),
                n._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
                function(t, e, i) {
                        var n = function(e) {
                                t.call(this, e),
                                this._repeat = this.vars.repeat || 0,
                                this._repeatDelay = this.vars.repeatDelay || 0,
                                this._cycle = 0,
                                this._yoyo = this.vars.yoyo === !0,
                                this._dirty = !0
                        },
                        r = 1e-10,
                        s = [],
                        a = e._internals,
                        o = a.lazyTweens,
                        h = a.lazyRender,
                        l = new i(null, null, 1, 0),
                        u = n.prototype = new t;
                        return u.constructor = n,
                        u.kill()._gc = !1,
                        n.version = "1.13.2",
                        u.invalidate = function() {
                                return this._yoyo = this.vars.yoyo === !0,
                                this._repeat = this.vars.repeat || 0,
                                this._repeatDelay = this.vars.repeatDelay || 0,
                                this._uncache(!0),
                                t.prototype.invalidate.call(this)
                        },
                        u.addCallback = function(t, i, n, r) {
                                return this.add(e.delayedCall(0, t, n, r), i)
                        },
                        u.removeCallback = function(t, e) {
                                if (t) if (null == e) this._kill(null, t);
                                else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                                return this
                        },
                        u.tweenTo = function(t, i) {
                                i = i || {};
                                var n, r, a, o = {
                                        ease: l,
                                        overwrite: i.delay ? 2 : 1,
                                        useFrames: this.usesFrames(),
                                        immediateRender: !1
                                };
                                for (r in i) o[r] = i[r];
                                return o.time = this._parseTimeOrLabel(t),
                                n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
                                a = new e(this, n, o),
                                o.onStart = function() {
                                        a.target.paused(!0),
                                        a.vars.time !== a.target.time() && n === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale),
                                        i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || s)
                                },
                                a
                        },
                        u.tweenFromTo = function(t, e, i) {
                                i = i || {},
                                t = this._parseTimeOrLabel(t),
                                i.startAt = {
                                        onComplete: this.seek,
                                        onCompleteParams: [t],
                                        onCompleteScope: this
                                },
                                i.immediateRender = i.immediateRender !== !1;
                                var n = this.tweenTo(e, i);
                                return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                        },
                        u.render = function(t, e, i) {
                                this._gc && this._enabled(!0, !1);
                                var n, a, l, u, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                                _ = this._duration,
                                d = this._time,
                                m = this._totalTime,
                                g = this._startTime,
                                v = this._timeScale,
                                y = this._rawPrevTime,
                                T = this._paused,
                                b = this._cycle;
                                if (t >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, u = "onComplete", 0 === this._duration && (0 === t || y < 0 || y === r) && y !== t && this._first && (c = !0, y > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = _, t = _ + 1e-4)) : t < 1e-7 ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === _ && y !== r && (y > 0 || t < 0 && y >= 0) && !this._locked) && (u = "onReverseComplete", a = this._reversed), t < 0 ? (this._active = !1, y >= 0 && this._first && (c = !0), this._rawPrevTime = t) : (this._rawPrevTime = _ || !e || t || this._rawPrevTime === t ? t: r, t = 0, this._initted || (c = !0))) : (0 === _ && y < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (f = _ + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? (this._time = _, t = _ + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time))), this._cycle !== b && !this._locked) {
                                        var x = this._yoyo && 0 !== (1 & b),
                                        w = x === (this._yoyo && 0 !== (1 & this._cycle)),
                                        P = this._totalTime,
                                        E = this._cycle,
                                        S = this._rawPrevTime,
                                        O = this._time;
                                        if (this._totalTime = b * _, this._cycle < b ? x = !x: this._totalTime += _, this._time = d, this._rawPrevTime = 0 === _ ? y - 1e-4: y, this._cycle = b, this._locked = !0, d = x ? 0 : _, this.render(d, e, 0 === _), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), w && (d = x ? _ + 1e-4: -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !T) return;
                                        this._time = O,
                                        this._totalTime = P,
                                        this._cycle = E,
                                        this._rawPrevTime = S
                                }
                                if (! (this._time !== d && this._first || i || c)) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= d) for (n = this._first; n && (l = n._next, !this._paused || T);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                n = l;
                                else for (n = this._last; n && (l = n._prev, !this._paused || T);)(n._active || n._startTime <= d && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                n = l;
                                this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))),
                                u && (this._locked || this._gc || g !== this._startTime && v === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || s)))
                        },
                        u.getActive = function(t, e, i) {
                                null == t && (t = !0),
                                null == e && (e = !0),
                                null == i && (i = !1);
                                var n, r, s = [],
                                a = this.getChildren(t, e, i),
                                o = 0,
                                h = a.length;
                                for (n = 0; n < h; n++) r = a[n],
                                r.isActive() && (s[o++] = r);
                                return s
                        },
                        u.getLabelAfter = function(t) {
                                t || 0 !== t && (t = this._time);
                                var e, i = this.getLabelsArray(),
                                n = i.length;
                                for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
                                return null
                        },
                        u.getLabelBefore = function(t) {
                                null == t && (t = this._time);
                                for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
                                return null
                        },
                        u.getLabelsArray = function() {
                                var t, e = [],
                                i = 0;
                                for (t in this._labels) e[i++] = {
                                        time: this._labels[t],
                                        name: t
                                };
                                return e.sort(function(t, e) {
                                        return t.time - e.time
                                }),
                                e
                        },
                        u.progress = function(t, e) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t: t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                        },
                        u.totalProgress = function(t, e) {
                                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                        },
                        u.totalDuration = function(e) {
                                return arguments.length ? this._repeat === -1 ? this: this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                        },
                        u.time = function(t, e) {
                                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        },
                        u.repeat = function(t) {
                                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        },
                        u.repeatDelay = function(t) {
                                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        },
                        u.yoyo = function(t) {
                                return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        },
                        u.currentLabel = function(t) {
                                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                        },
                        n
                },
                !0),
                function() {
                        var t = 180 / Math.PI,
                        e = [],
                        i = [],
                        r = [],
                        s = {},
                        a = function(t, e, i, n) {
                                this.a = t,
                                this.b = e,
                                this.c = i,
                                this.d = n,
                                this.da = n - t,
                                this.ca = i - t,
                                this.ba = e - t
                        },
                        o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                        h = function(t, e, i, n) {
                                var r = {
                                        a: t
                                },
                                s = {},
                                a = {},
                                o = {
                                        c: n
                                },
                                h = (t + e) / 2,
                                l = (e + i) / 2,
                                u = (i + n) / 2,
                                c = (h + l) / 2,
                                f = (l + u) / 2,
                                p = (f - c) / 8;
                                return r.b = h + (t - h) / 4,
                                s.b = c + p,
                                r.c = s.a = (r.b + s.b) / 2,
                                s.c = a.a = (c + f) / 2,
                                a.b = f - p,
                                o.b = u + (n - u) / 4,
                                a.c = o.a = (a.b + o.b) / 2,
                                [r, s, a, o]
                        },
                        l = function(t, n, s, a, o) {
                                var l, u, c, f, p, _, d, m, g, v, y, T, b, x = t.length - 1,
                                w = 0,
                                P = t[0].a;
                                for (l = 0; l < x; l++) p = t[w],
                                u = p.a,
                                c = p.d,
                                f = t[w + 1].d,
                                o ? (y = e[l], T = i[l], b = (T + y) * n * .25 / (a ? .5 : r[l] || .5), _ = c - (c - u) * (a ? .5 * n: 0 !== y ? b / y: 0), d = c + (f - c) * (a ? .5 * n: 0 !== T ? b / T: 0), m = c - (_ + ((d - _) * (3 * y / (y + T) + .5) / 4 || 0))) : (_ = c - (c - u) * n * .5, d = c + (f - c) * n * .5, m = c - (_ + d) / 2),
                                _ += m,
                                d += m,
                                p.c = g = _,
                                0 !== l ? p.b = P: p.b = P = p.a + .6 * (p.c - p.a),
                                p.da = c - u,
                                p.ca = g - u,
                                p.ba = P - u,
                                s ? (v = h(u, P, g, c), t.splice(w, 1, v[0], v[1], v[2], v[3]), w += 4) : w++,
                                P = d;
                                p = t[w],
                                p.b = P,
                                p.c = P + .4 * (p.d - P),
                                p.da = p.d - p.a,
                                p.ca = p.c - p.a,
                                p.ba = P - p.a,
                                s && (v = h(p.a, P, p.c, p.d), t.splice(w, 1, v[0], v[1], v[2], v[3]))
                        },
                        u = function(t, n, r, s) {
                                var o, h, l, u, c, f, p = [];
                                if (s) for (t = [s].concat(t), h = t.length; --h > -1;)"string" == typeof(f = t[h][n]) && "=" === f.charAt(1) && (t[h][n] = s[n] + Number(f.charAt(0) + f.substr(2)));
                                if (o = t.length - 2, o < 0) return p[0] = new a(t[0][n], 0, 0, t[o < -1 ? 0 : 1][n]),
                                p;
                                for (h = 0; h < o; h++) l = t[h][n],
                                u = t[h + 1][n],
                                p[h] = new a(l, 0, 0, u),
                                r && (c = t[h + 2][n], e[h] = (e[h] || 0) + (u - l) * (u - l), i[h] = (i[h] || 0) + (c - u) * (c - u));
                                return p[h] = new a(t[h][n], 0, 0, t[h + 1][n]),
                                p
                        },
                        c = function(t, n, a, h, c, f) {
                                var p, _, d, m, g, v, y, T, b = {},
                                x = [],
                                w = f || t[0];
                                c = "string" == typeof c ? "," + c + ",": o,
                                null == n && (n = 1);
                                for (_ in t[0]) x.push(_);
                                if (t.length > 1) {
                                        for (T = t[t.length - 1], y = !0, p = x.length; --p > -1;) if (_ = x[p], Math.abs(w[_] - T[_]) > .05) {
                                                y = !1;
                                                break
                                        }
                                        y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                                }
                                for (e.length = i.length = r.length = 0, p = x.length; --p > -1;) _ = x[p],
                                s[_] = c.indexOf("," + _ + ",") !== -1,
                                b[_] = u(t, _, s[_], f);
                                for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]),
                                i[p] = Math.sqrt(i[p]);
                                if (!h) {
                                        for (p = x.length; --p > -1;) if (s[_]) for (d = b[x[p]], v = d.length - 1, m = 0; m < v; m++) g = d[m + 1].da / i[m] + d[m].da / e[m],
                                        r[m] = (r[m] || 0) + g * g;
                                        for (p = r.length; --p > -1;) r[p] = Math.sqrt(r[p])
                                }
                                for (p = x.length, m = a ? 4 : 1; --p > -1;) _ = x[p],
                                d = b[_],
                                l(d, n, a, h, s[_]),
                                y && (d.splice(0, m), d.splice(d.length - m, m));
                                return b
                        },
                        f = function(t, e, i) {
                                e = e || "soft";
                                var n, r, s, o, h, l, u, c, f, p, _, d = {},
                                m = "cubic" === e ? 3 : 2,
                                g = "soft" === e,
                                v = [];
                                if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                                for (f in t[0]) v.push(f);
                                for (l = v.length; --l > -1;) {
                                        for (f = v[l], d[f] = h = [], p = 0, c = t.length, u = 0; u < c; u++) n = null == i ? t[u][f] : "string" == typeof(_ = t[u][f]) && "=" === _.charAt(1) ? i[f] + Number(_.charAt(0) + _.substr(2)) : Number(_),
                                        g && u > 1 && u < c - 1 && (h[p++] = (n + h[p - 2]) / 2),
                                        h[p++] = n;
                                        for (c = p - m + 1, p = 0, u = 0; u < c; u += m) n = h[u],
                                        r = h[u + 1],
                                        s = h[u + 2],
                                        o = 2 === m ? 0 : h[u + 3],
                                        h[p++] = _ = 3 === m ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                                        h.length = p
                                }
                                return d
                        },
                        p = function(t, e, i) {
                                for (var n, r, s, a, o, h, l, u, c, f, p, _ = 1 / i,
                                d = t.length; --d > -1;) for (f = t[d], s = f.a, a = f.d - s, o = f.c - s, h = f.b - s, n = r = 0, u = 1; u <= i; u++) l = _ * u,
                                c = 1 - l,
                                n = r - (r = (l * l * a + 3 * c * (l * o + c * h)) * l),
                                p = d * i + u - 1,
                                e[p] = (e[p] || 0) + n * n
                        },
                        _ = function(t, e) {
                                e = e >> 0 || 6;
                                var i, n, r, s, a = [],
                                o = [],
                                h = 0,
                                l = 0,
                                u = e - 1,
                                c = [],
                                f = [];
                                for (i in t) p(t[i], a, e);
                                for (r = a.length, n = 0; n < r; n++) h += Math.sqrt(a[n]),
                                s = n % e,
                                f[s] = h,
                                s === u && (l += h, s = n / e >> 0, c[s] = f, o[s] = l, h = 0, f = []);
                                return {
                                        length: l,
                                        lengths: o,
                                        segments: c
                                }
                        },
                        d = n._gsDefine.plugin({
                                propName: "bezier",
                                priority: -1,
                                version: "1.3.3",
                                API: 2,
                                global: !0,
                                init: function(t, e, i) {
                                        this._target = t,
                                        e instanceof Array && (e = {
                                                values: e
                                        }),
                                        this._func = {},
                                        this._round = {},
                                        this._props = [],
                                        this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                        var n, r, s, a, o, h = e.values || [],
                                        l = {},
                                        u = h[0],
                                        p = e.autoRotate || i.vars.orientToBezier;
                                        this._autoRotate = p ? p instanceof Array ? p: [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]] : null;
                                        for (n in u) this._props.push(n);
                                        for (s = this._props.length; --s > -1;) n = this._props[s],
                                        this._overwriteProps.push(n),
                                        r = this._func[n] = "function" == typeof t[n],
                                        l[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n: "get" + n.substr(3)]() : parseFloat(t[n]),
                                        o || l[n] !== h[0][n] && (o = l);
                                        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : f(h, e.type, l), this._segCount = this._beziers[n].length, this._timeRes) {
                                                var d = _(this._beziers, this._timeRes);
                                                this._length = d.length,
                                                this._lengths = d.lengths,
                                                this._segments = d.segments,
                                                this._l1 = this._li = this._s1 = this._si = 0,
                                                this._l2 = this._lengths[0],
                                                this._curSeg = this._segments[0],
                                                this._s2 = this._curSeg[0],
                                                this._prec = 1 / this._curSeg.length
                                        }
                                        if (p = this._autoRotate) for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                                                for (a = 0; a < 3; a++) n = p[s][a],
                                                this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n: "get" + n.substr(3)];
                                                n = p[s][2],
                                                this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                        }
                                        return this._startRatio = i.vars.runBackwards ? 1 : 0,
                                        !0
                                },
                                set: function(e) {
                                        var i, n, r, s, a, o, h, l, u, c, f = this._segCount,
                                        p = this._func,
                                        _ = this._target,
                                        d = e !== this._startRatio;
                                        if (this._timeRes) {
                                                if (u = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < f - 1) {
                                                        for (l = f - 1; r < l && (this._l2 = u[++r]) <= e;);
                                                        this._l1 = u[r - 1],
                                                        this._li = r,
                                                        this._curSeg = c = this._segments[r],
                                                        this._s2 = c[this._s1 = this._si = 0]
                                                } else if (e < this._l1 && r > 0) {
                                                        for (; r > 0 && (this._l1 = u[--r]) >= e;);
                                                        0 === r && e < this._l1 ? this._l1 = 0 : r++,
                                                        this._l2 = u[r],
                                                        this._li = r,
                                                        this._curSeg = c = this._segments[r],
                                                        this._s1 = c[(this._si = c.length - 1) - 1] || 0,
                                                        this._s2 = c[this._si]
                                                }
                                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < c.length - 1) {
                                                        for (l = c.length - 1; r < l && (this._s2 = c[++r]) <= e;);
                                                        this._s1 = c[r - 1],
                                                        this._si = r
                                                } else if (e < this._s1 && r > 0) {
                                                        for (; r > 0 && (this._s1 = c[--r]) >= e;);
                                                        0 === r && e < this._s1 ? this._s1 = 0 : r++,
                                                        this._s2 = c[r],
                                                        this._si = r
                                                }
                                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                                        } else i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0,
                                        o = (e - i * (1 / f)) * f;
                                        for (n = 1 - o, r = this._props.length; --r > -1;) s = this._props[r],
                                        a = this._beziers[s][i],
                                        h = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a,
                                        this._round[s] && (h = Math.round(h)),
                                        p[s] ? _[s](h) : _[s] = h;
                                        if (this._autoRotate) {
                                                var m, g, v, y, T, b, x, w = this._autoRotate;
                                                for (r = w.length; --r > -1;) s = w[r][2],
                                                b = w[r][3] || 0,
                                                x = w[r][4] === !0 ? 1 : t,
                                                a = this._beziers[w[r][0]],
                                                m = this._beziers[w[r][1]],
                                                a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, T = m.b + (m.c - m.b) * o, v += (T - v) * o, T += (m.c + (m.d - m.c) * o - T) * o, h = d ? (Math.atan2(T - v, y - g) + 3.1415) * x + b: this._initialRotations[r], p[s] ? _[s](h) : _[s] = h)
                                        }
                                }
                        }),
                        m = d.prototype;
                        d.bezierThrough = c,
                        d.cubicToQuadratic = h,
                        d._autoCSS = !0,
                        d.quadraticToCubic = function(t, e, i) {
                                return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                        },
                        d._cssRegister = function() {
                                var t = n._gsDefine.globals.CSSPlugin;
                                if (t) {
                                        var e = t._internals,
                                        i = e._parseToProxy,
                                        r = e._setPluginRatio,
                                        s = e.CSSPropTween;
                                        e._registerComplexSpecialProp("bezier", {
                                                parser: function(t, e, n, a, o, h) {
                                                        e instanceof Array && (e = {
                                                                values: e
                                                        }),
                                                        h = new d;
                                                        var l, u, c, f = e.values,
                                                        p = f.length - 1,
                                                        _ = [],
                                                        m = {};
                                                        if (p < 0) return o;
                                                        for (l = 0; l <= p; l++) c = i(t, f[l], a, o, h, p !== l),
                                                        _[l] = c.end;
                                                        for (u in e) m[u] = e[u];
                                                        return m.values = _,
                                                        o = new s(t, "bezier", 0, 0, c.pt, 2),
                                                        o.data = c,
                                                        o.plugin = h,
                                                        o.setRatio = r,
                                                        0 === m.autoRotate && (m.autoRotate = !0),
                                                        !m.autoRotate || m.autoRotate instanceof Array || (l = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [["left", "top", "rotation", l, !1]] : null != c.end.x && [["x", "y", "rotation", l, !1]]),
                                                        m.autoRotate && (a._transform || a._enableTransforms(!1), c.autoRotate = a._target._gsTransform),
                                                        h._onInitTween(c.proxy, m, a._tween),
                                                        o
                                                }
                                        })
                                }
                        },
                        m._roundProps = function(t, e) {
                                for (var i = this._overwriteProps,
                                n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                        },
                        m._kill = function(t) {
                                var e, i, n = this._props;
                                for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                                return this._super._kill.call(this, t)
                        }
                } (),
                n._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
                function(t, e) {
                        var r, s, a, o, h = function e() {
                                t.call(this, "css"),
                                this._overwriteProps.length = 0,
                                this.setRatio = e.prototype.setRatio
                        },
                        l = {},
                        u = h.prototype = new t("css");
                        u.constructor = h,
                        h.version = "1.13.2",
                        h.API = 2,
                        h.defaultTransformPerspective = 0,
                        h.defaultSkewType = "compensated",
                        u = "px",
                        h.suffixMap = {
                                top: u,
                                right: u,
                                bottom: u,
                                left: u,
                                width: u,
                                height: u,
                                fontSize: u,
                                padding: u,
                                margin: u,
                                perspective: u,
                                lineHeight: ""
                        };
                        var c, f, p, _, d, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                        v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        T = /[^\d\-\.]/g,
                        b = /(?:\d|\-|\+|=|#|\.)*/g,
                        x = /opacity *= *([^)]*)/i,
                        w = /opacity:([^;]*)/i,
                        P = /alpha\(opacity *=.+?\)/i,
                        E = /^(rgb|hsl)/,
                        S = /([A-Z])/g,
                        O = /-([a-z])/gi,
                        k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        R = function(t, e) {
                                return e.toUpperCase()
                        },
                        A = /(?:Left|Right|Width)/i,
                        D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        C = /,(?=[^\)]*(?:\(|$))/gi,
                        N = Math.PI / 180,
                        I = 180 / Math.PI,
                        z = {},
                        X = document,
                        Y = X.createElement("div"),
                        F = X.createElement("img"),
                        L = h._internals = {
                                _specialProps: l
                        },
                        j = navigator.userAgent,
                        U = function() {
                                var t, e = j.indexOf("Android"),
                                i = X.createElement("div");
                                return p = j.indexOf("Safari") !== -1 && j.indexOf("Chrome") === -1 && (e === -1 || Number(j.substr(e + 8, 1)) > 3),
                                d = p && Number(j.substr(j.indexOf("Version/") + 8, 1)) < 6,
                                _ = j.indexOf("Firefox") !== -1,
                                /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) && (m = parseFloat(RegExp.$1)),
                                i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>",
                                t = i.getElementsByTagName("a")[0],
                                !!t && /^0.55/.test(t.style.opacity)
                        } (),
                        V = function(t) {
                                return x.test("string" == typeof t ? t: (t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                        },
                        H = function(t) {
                                window.console && console.log(t)
                        },
                        B = "",
                        q = "",
                        $ = function(t, e) {
                                e = e || Y;
                                var i, n, r = e.style;
                                if (void 0 !== r[t]) return t;
                                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                                return n >= 0 ? (q = 3 === n ? "ms": i[n], B = "-" + q.toLowerCase() + "-", q + t) : null
                        },
                        W = X.defaultView ? X.defaultView.getComputedStyle: function() {},
                        Z = h.getStyle = function(t, e, i, n, r) {
                                var s;
                                return U || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || W(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s: r) : V(t)
                        },
                        Q = L.convertToPixels = function(t, i, n, r, s) {
                                if ("px" === r || !r) return n;
                                if ("auto" === r || !n) return 0;
                                var a, o, l, u = A.test(i),
                                c = t,
                                f = Y.style,
                                p = n < 0;
                                if (p && (n = -n), "%" === r && i.indexOf("border") !== -1) a = n / 100 * (u ? t.clientWidth: t.clientHeight);
                                else {
                                        if (f.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== r && c.appendChild) f[u ? "borderLeftWidth": "borderTopWidth"] = n + r;
                                        else {
                                                if (c = t.parentNode || X.body, o = c._gsCache, l = e.ticker.frame, o && u && o.time === l) return o.width * n / 100;
                                                f[u ? "width": "height"] = n + r
                                        }
                                        c.appendChild(Y),
                                        a = parseFloat(Y[u ? "offsetWidth": "offsetHeight"]),
                                        c.removeChild(Y),
                                        u && "%" === r && h.cacheWidths !== !1 && (o = c._gsCache = c._gsCache || {},
                                        o.time = l, o.width = a / n * 100),
                                        0 !== a || s || (a = Q(t, i, n, r, !0))
                                }
                                return p ? -a: a
                        },
                        G = L.calculateOffset = function(t, e, i) {
                                if ("absolute" !== Z(t, "position", i)) return 0;
                                var n = "left" === e ? "Left": "Top",
                                r = Z(t, "margin" + n, i);
                                return t["offset" + n] - (Q(t, e, parseFloat(r), r.replace(b, "")) || 0)
                        },
                        J = function(t, e) {
                                var i, n, r = {};
                                if (e = e || W(t, null)) if (i = e.length) for (; --i > -1;) r[e[i].replace(O, R)] = e.getPropertyValue(e[i]);
                                else for (i in e) r[i] = e[i];
                                else if (e = t.currentStyle || t.style) for (i in e)"string" == typeof i && void 0 === r[i] && (r[i.replace(O, R)] = e[i]);
                                return U || (r.opacity = V(t)),
                                n = St(t, e, !1),
                                r.rotation = n.rotation,
                                r.skewX = n.skewX,
                                r.scaleX = n.scaleX,
                                r.scaleY = n.scaleY,
                                r.x = n.x,
                                r.y = n.y,
                                Pt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ),
                                r.filters && delete r.filters,
                                r
                        },
                        K = function(t, e, i, n, r) {
                                var s, a, o, h = {},
                                l = t.style;
                                for (a in i)"cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || r && r[a]) && a.indexOf("Origin") === -1 && ("number" != typeof s && "string" != typeof s || (h[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(T, "") ? s: 0 : G(t, a), void 0 !== l[a] && (o = new pt(l, a, l[a], o))));
                                if (n) for (a in n)"className" !== a && (h[a] = n[a]);
                                return {
                                        difs: h,
                                        firstMPT: o
                                }
                        },
                        tt = {
                                width: ["Left", "Right"],
                                height: ["Top", "Bottom"]
                        },
                        et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        it = function(t, e, i) {
                                var n = parseFloat("width" === e ? t.offsetWidth: t.offsetHeight),
                                r = tt[e],
                                s = r.length;
                                for (i = i || W(t, null); --s > -1;) n -= parseFloat(Z(t, "padding" + r[s], i, !0)) || 0,
                                n -= parseFloat(Z(t, "border" + r[s] + "Width", i, !0)) || 0;
                                return n
                        },
                        nt = function(t, e) {
                                null != t && "" !== t && "auto" !== t && "auto auto" !== t || (t = "0 0");
                                var i = t.split(" "),
                                n = t.indexOf("left") !== -1 ? "0%": t.indexOf("right") !== -1 ? "100%": i[0],
                                r = t.indexOf("top") !== -1 ? "0%": t.indexOf("bottom") !== -1 ? "100%": i[1];
                                return null == r ? r = "0": "center" === r && (r = "50%"),
                                ("center" === n || isNaN(parseFloat(n)) && (n + "").indexOf("=") === -1) && (n = "50%"),
                                e && (e.oxp = n.indexOf("%") !== -1, e.oyp = r.indexOf("%") !== -1, e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(T, "")), e.oy = parseFloat(r.replace(T, ""))),
                                n + " " + r + (i.length > 2 ? " " + i[2] : "")
                        },
                        rt = function(t, e) {
                                return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                        },
                        st = function(t, e) {
                                return null == t ? e: "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e: parseFloat(t)
                        },
                        at = function(t, e, i, n) {
                                var r, s, a, o, h = 1e-6;
                                return null == t ? o = e: "number" == typeof t ? o = t: (r = 360, s = t.split("_"), a = Number(s[0].replace(T, "")) * (t.indexOf("rad") === -1 ? 1 : I) - ("=" === t.charAt(1) ? 0 : e), s.length && (n && (n[i] = e + a), t.indexOf("short") !== -1 && (a %= r, a !== a % (r / 2) && (a = a < 0 ? a + r: a - r)), t.indexOf("_cw") !== -1 && a < 0 ? a = (a + 9999999999 * r) % r - (a / r | 0) * r: t.indexOf("ccw") !== -1 && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a),
                                o < h && o > -h && (o = 0),
                                o
                        },
                        ot = {
                                aqua: [0, 255, 255],
                                lime: [0, 255, 0],
                                silver: [192, 192, 192],
                                black: [0, 0, 0],
                                maroon: [128, 0, 0],
                                teal: [0, 128, 128],
                                blue: [0, 0, 255],
                                navy: [0, 0, 128],
                                white: [255, 255, 255],
                                fuchsia: [255, 0, 255],
                                olive: [128, 128, 0],
                                yellow: [255, 255, 0],
                                orange: [255, 165, 0],
                                gray: [128, 128, 128],
                                purple: [128, 0, 128],
                                green: [0, 128, 0],
                                red: [255, 0, 0],
                                pink: [255, 192, 203],
                                cyan: [0, 255, 255],
                                transparent: [255, 255, 255, 0]
                        },
                        ht = function(t, e, i) {
                                return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t,
                                255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i: 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                        },
                        lt = function(t) {
                                var e, i, n, r, s, a;
                                return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, a = Number(t[2]) / 100, i = a <= .5 ? a * (s + 1) : a + s - a * s, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ht(r + 1 / 3, e, i), t[1] = ht(r, e, i), t[2] = ht(r - 1 / 3, e, i), t) : (t = t.match(g) || ot.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ot.black
                        },
                        ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                        for (u in ot) ut += "|" + u + "\\b";
                        ut = new RegExp(ut + ")", "gi");
                        var ct = function(t, e, i, n) {
                                if (null == t) return function(t) {
                                        return t
                                };
                                var r, s = e ? (t.match(ut) || [""])[0] : "",
                                a = t.split(s).join("").match(y) || [],
                                o = t.substr(0, t.indexOf(a[0])),
                                h = ")" === t.charAt(t.length - 1) ? ")": "",
                                l = t.indexOf(" ") !== -1 ? " ": ",",
                                u = a.length,
                                c = u > 0 ? a[0].replace(g, "") : "";
                                return u ? r = e ?
                                function(t) {
                                        var e, f, p, _;
                                        if ("number" == typeof t) t += c;
                                        else if (n && C.test(t)) {
                                                for (_ = t.replace(C, "|").split("|"), p = 0; p < _.length; p++) _[p] = r(_[p]);
                                                return _.join(",")
                                        }
                                        if (e = (t.match(ut) || [s])[0], f = t.split(e).join("").match(y) || [], p = f.length, u > p--) for (; ++p < u;) f[p] = i ? f[(p - 1) / 2 | 0] : a[p];
                                        return o + f.join(l) + l + e + h + (t.indexOf("inset") !== -1 ? " inset": "")
                                }: function(t) {
                                        var e, s, f;
                                        if ("number" == typeof t) t += c;
                                        else if (n && C.test(t)) {
                                                for (s = t.replace(C, "|").split("|"), f = 0; f < s.length; f++) s[f] = r(s[f]);
                                                return s.join(",")
                                        }
                                        if (e = t.match(y) || [], f = e.length, u > f--) for (; ++f < u;) e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
                                        return o + e.join(l) + h
                                }: function(t) {
                                        return t
                                }
                        },
                        ft = function(t) {
                                return t = t.split(","),
                                function(e, i, n, r, s, a, o) {
                                        var h, l = (i + "").split(" ");
                                        for (o = {},
                                        h = 0; h < 4; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                        return r.parse(e, o, s, a)
                                }
                        },
                        pt = (L._setPluginRatio = function(t) {
                                this.plugin.setRatio(t);
                                for (var e, i, n, r, s = this.data,
                                a = s.proxy,
                                o = s.firstMPT,
                                h = 1e-6; o;) e = a[o.v],
                                o.r ? e = Math.round(e) : e < h && e > -h && (e = 0),
                                o.t[o.p] = e,
                                o = o._next;
                                if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t) for (o = s.firstMPT; o;) {
                                        if (i = o.t, i.type) {
                                                if (1 === i.type) {
                                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                                        i.e = r
                                                }
                                        } else i.e = i.s + i.xs0;
                                        o = o._next
                                }
                        },
                        function(t, e, i, n, r) {
                                this.t = t,
                                this.p = e,
                                this.v = i,
                                this.r = r,
                                n && (n._prev = this, this._next = n)
                        }),
                        _t = (L._parseToProxy = function(t, e, i, n, r, s) {
                                var a, o, h, l, u, c = n,
                                f = {},
                                p = {},
                                _ = i._transform,
                                d = z;
                                for (i._transform = null, z = e, n = u = i.parse(t, e, n, r), z = d, s && (i._transform = _, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                                        if (n.type <= 1 && (o = n.p, p[o] = n.s + n.c, f[o] = n.s, s || (l = new pt(n, "s", o, l, n.r), n.c = 0), 1 === n.type)) for (a = n.l; --a > 0;) h = "xn" + a,
                                        o = n.p + "_" + h,
                                        p[o] = n.data[h],
                                        f[o] = n[h],
                                        s || (l = new pt(n, h, o, l, n.rxp[h]));
                                        n = n._next
                                }
                                return {
                                        proxy: f,
                                        end: p,
                                        firstMPT: l,
                                        pt: u
                                }
                        },
                        L.CSSPropTween = function(t, e, i, n, s, a, h, l, u, c, f) {
                                this.t = t,
                                this.p = e,
                                this.s = i,
                                this.c = n,
                                this.n = h || e,
                                t instanceof _t || o.push(this.n),
                                this.r = l,
                                this.type = a || 0,
                                u && (this.pr = u, r = !0),
                                this.b = void 0 === c ? i: c,
                                this.e = void 0 === f ? i + n: f,
                                s && (this._next = s, s._prev = this)
                        }),
                        dt = h.parseComplex = function(t, e, i, n, r, s, a, o, h, l) {
                                i = i || s || "",
                                a = new _t(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, n),
                                n += "";
                                var u, f, p, _, d, m, y, T, b, x, w, P, S = i.split(", ").join(",").split(" "),
                                O = n.split(", ").join(",").split(" "),
                                k = S.length,
                                R = c !== !1;
                                for (n.indexOf(",") === -1 && i.indexOf(",") === -1 || (S = S.join(" ").replace(C, ", ").split(" "), O = O.join(" ").replace(C, ", ").split(" "), k = S.length), k !== O.length && (S = (s || "").split(" "), k = S.length), a.plugin = h, a.setRatio = l, u = 0; u < k; u++) if (_ = S[u], d = O[u], T = parseFloat(_), T || 0 === T) a.appendXtra("", T, rt(d, T), d.replace(v, ""), R && d.indexOf("px") !== -1, !0);
                                else if (r && ("#" === _.charAt(0) || ot[_] || E.test(_))) P = "," === d.charAt(d.length - 1) ? "),": ")",
                                _ = lt(_),
                                d = lt(d),
                                b = _.length + d.length > 6,
                                b && !U && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent": "transparent", a.e = a.e.split(O[u]).join("transparent")) : (U || (b = !1), a.appendXtra(b ? "rgba(": "rgb(", _[0], d[0] - _[0], ",", !0, !0).appendXtra("", _[1], d[1] - _[1], ",", !0).appendXtra("", _[2], d[2] - _[2], b ? ",": P, !0), b && (_ = _.length < 4 ? 1 : _[3], a.appendXtra("", _, (d.length < 4 ? 1 : d[3]) - _, P, !1)));
                                else if (m = _.match(g)) {
                                        if (y = d.match(v), !y || y.length !== m.length) return a;
                                        for (p = 0, f = 0; f < m.length; f++) w = m[f],
                                        x = _.indexOf(w, p),
                                        a.appendXtra(_.substr(p, x - p), Number(w), rt(y[f], w), "", R && "px" === _.substr(x + w.length, 2), 0 === f),
                                        p = x + w.length;
                                        a["xs" + a.l] += _.substr(p)
                                } else a["xs" + a.l] += a.l ? " " + _: _;
                                if (n.indexOf("=") !== -1 && a.data) {
                                        for (P = a.xs0 + a.data.s, u = 1; u < a.l; u++) P += a["xs" + u] + a.data["xn" + u];
                                        a.e = P + a["xs" + u]
                                }
                                return a.l || (a.type = -1, a.xs0 = a.e),
                                a.xfirst || a
                        },
                        mt = 9;
                        for (u = _t.prototype, u.l = u.pr = 0; --mt > 0;) u["xn" + mt] = 0,
                        u["xs" + mt] = "";
                        u.xs0 = "",
                        u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null,
                        u.appendXtra = function(t, e, i, n, r, s) {
                                var a = this,
                                o = a.l;
                                return a["xs" + o] += s && o ? " " + t: t || "",
                                i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new _t(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                                        s: e + i
                                },
                                a.rxp = {},
                                a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (n || ""), a)
                        };
                        var gt = function(t, e) {
                                e = e || {},
                                this.p = e.prefix ? $(t) || t: t,
                                l[t] = l[this.p] = this,
                                this.format = e.formatter || ct(e.defaultValue, e.color, e.collapsible, e.multi),
                                e.parser && (this.parse = e.parser),
                                this.clrs = e.color,
                                this.multi = e.multi,
                                this.keyword = e.keyword,
                                this.dflt = e.defaultValue,
                                this.pr = e.priority || 0
                        },
                        vt = L._registerComplexSpecialProp = function(t, e, n) {
                                "object" !== ("undefined" == typeof e ? "undefined": i(e)) && (e = {
                                        parser: n
                                });
                                var r, s, a = t.split(","),
                                o = e.defaultValue;
                                for (n = n || [o], r = 0; r < a.length; r++) e.prefix = 0 === r && e.prefix,
                                e.defaultValue = n[r] || o,
                                s = new gt(a[r], e)
                        },
                        yt = function(t) {
                                if (!l[t]) {
                                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                        vt(t, {
                                                parser: function(t, i, r, s, a, o, h) {
                                                        var u = (n.GreenSockGlobals || n).com.greensock.plugins[e];
                                                        return u ? (u._cssRegister(), l[r].parse(t, i, r, s, a, o, h)) : (H("Error: " + e + " js file not loaded."), a)
                                                }
                                        })
                                }
                        };
                        u = gt.prototype,
                        u.parseComplex = function(t, e, i, n, r, s) {
                                var a, o, h, l, u, c, f = this.keyword;
                                if (this.multi && (C.test(i) || C.test(e) ? (o = e.replace(C, "|").split("|"), h = i.replace(C, "|").split("|")) : f && (o = [e], h = [i])), h) {
                                        for (l = h.length > o.length ? h.length: o.length, a = 0; a < l; a++) e = o[a] = o[a] || this.dflt,
                                        i = h[a] = h[a] || this.dflt,
                                        f && (u = e.indexOf(f), c = i.indexOf(f), u !== c && (i = c === -1 ? h: o, i[a] += " " + f));
                                        e = o.join(", "),
                                        i = h.join(", ")
                                }
                                return dt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                        },
                        u.parse = function(t, e, i, n, r, s, o) {
                                return this.parseComplex(t.style, this.format(Z(t, this.p, a, !1, this.dflt)), this.format(e), r, s)
                        },
                        h.registerSpecialProp = function(t, e, i) {
                                vt(t, {
                                        parser: function(t, n, r, s, a, o, h) {
                                                var l = new _t(t, r, 0, 0, a, 2, r, !1, i);
                                                return l.plugin = o,
                                                l.setRatio = e(t, n, s._tween, r),
                                                l
                                        },
                                        priority: i
                                })
                        };
                        var Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                        bt = $("transform"),
                        xt = B + "transform",
                        wt = $("transformOrigin"),
                        Pt = null !== $("perspective"),
                        Et = L.Transform = function() {
                                this.skewY = 0
                        },
                        St = L.getTransform = function(t, e, i, n) {
                                if (t._gsTransform && i && !n) return t._gsTransform;
                                var r, s, a, o, l, u, c, f, p, _, d, m, g, v = i ? t._gsTransform || new Et: new Et,
                                y = v.scaleX < 0,
                                T = 2e-5,
                                b = 1e5,
                                x = 179.99,
                                w = x * N,
                                P = Pt ? parseFloat(Z(t, wt, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0,
                                E = parseFloat(h.defaultTransformPerspective) || 0;
                                if (bt ? r = Z(t, xt, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(D), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), r && "none" !== r && "matrix(1, 0, 0, 1, 0, 0)" !== r) {
                                        for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], a = s.length; --a > -1;) o = Number(s[a]),
                                        s[a] = (l = o - (o |= 0)) ? (l * b + (l < 0 ? -.5 : .5) | 0) / b + o: o;
                                        if (16 === s.length) {
                                                var S = s[8],
                                                O = s[9],
                                                k = s[10],
                                                R = s[12],
                                                A = s[13],
                                                M = s[14];
                                                if (v.zOrigin && (M = -v.zOrigin, R = S * M - s[12], A = O * M - s[13], M = k * M + v.zOrigin - s[14]), !i || n || null == v.rotationX) {
                                                        var C, z, X, Y, F, L, j, U = s[0],
                                                        V = s[1],
                                                        H = s[2],
                                                        B = s[3],
                                                        q = s[4],
                                                        $ = s[5],
                                                        W = s[6],
                                                        Q = s[7],
                                                        G = s[11],
                                                        J = Math.atan2(W, k),
                                                        K = J < -w || J > w;
                                                        v.rotationX = J * I,
                                                        J && (Y = Math.cos( - J), F = Math.sin( - J), C = q * Y + S * F, z = $ * Y + O * F, X = W * Y + k * F, S = q * -F + S * Y, O = $ * -F + O * Y, k = W * -F + k * Y, G = Q * -F + G * Y, q = C, $ = z, W = X),
                                                        J = Math.atan2(S, U),
                                                        v.rotationY = J * I,
                                                        J && (L = J < -w || J > w, Y = Math.cos( - J), F = Math.sin( - J), C = U * Y - S * F, z = V * Y - O * F, X = H * Y - k * F, O = V * F + O * Y, k = H * F + k * Y, G = B * F + G * Y, U = C, V = z, H = X),
                                                        J = Math.atan2(V, $),
                                                        v.rotation = J * I,
                                                        J && (j = J < -w || J > w, Y = Math.cos( - J), F = Math.sin( - J), U = U * Y + q * F, z = V * Y + $ * F, $ = V * -F + $ * Y, W = H * -F + W * Y, V = z),
                                                        j && K ? v.rotation = v.rotationX = 0 : j && L ? v.rotation = v.rotationY = 0 : L && K && (v.rotationY = v.rotationX = 0),
                                                        v.scaleX = (Math.sqrt(U * U + V * V) * b + .5 | 0) / b,
                                                        v.scaleY = (Math.sqrt($ * $ + O * O) * b + .5 | 0) / b,
                                                        v.scaleZ = (Math.sqrt(W * W + k * k) * b + .5 | 0) / b,
                                                        v.skewX = 0,
                                                        v.perspective = G ? 1 / (G < 0 ? -G: G) : 0,
                                                        v.x = R,
                                                        v.y = A,
                                                        v.z = M
                                                }
                                        } else if ((!Pt || n || !s.length || v.x !== s[4] || v.y !== s[5] || !v.rotationX && !v.rotationY) && (void 0 === v.x || "none" !== Z(t, "display", e))) {
                                                var tt = s.length >= 6,
                                                et = tt ? s[0] : 1,
                                                it = s[1] || 0,
                                                nt = s[2] || 0,
                                                rt = tt ? s[3] : 1;
                                                v.x = s[4] || 0,
                                                v.y = s[5] || 0,
                                                u = Math.sqrt(et * et + it * it),
                                                c = Math.sqrt(rt * rt + nt * nt),
                                                f = et || it ? Math.atan2(it, et) * I: v.rotation || 0,
                                                p = nt || rt ? Math.atan2(nt, rt) * I + f: v.skewX || 0,
                                                _ = u - Math.abs(v.scaleX || 0),
                                                d = c - Math.abs(v.scaleY || 0),
                                                Math.abs(p) > 90 && Math.abs(p) < 270 && (y ? (u *= -1, p += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (c *= -1, p += p <= 0 ? 180 : -180)),
                                                m = (f - v.rotation) % 180,
                                                g = (p - v.skewX) % 180,
                                                (void 0 === v.skewX || _ > T || _ < -T || d > T || d < -T || m > -x && m < x && m * b | !1 || g > -x && g < x && g * b | !1) && (v.scaleX = u, v.scaleY = c, v.rotation = f, v.skewX = p),
                                                Pt && (v.rotationX = v.rotationY = v.z = 0, v.perspective = E, v.scaleZ = 1)
                                        }
                                        v.zOrigin = P;
                                        for (a in v) v[a] < T && v[a] > -T && (v[a] = 0)
                                } else v = {
                                        x: 0,
                                        y: 0,
                                        z: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        scaleZ: 1,
                                        skewX: 0,
                                        perspective: E,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        zOrigin: 0
                                };
                                return i && (t._gsTransform = v),
                                v.xPercent = v.yPercent = 0,
                                v
                        },
                        Ot = function(t) {
                                var e, i, n = this.data,
                                r = -n.rotation * N,
                                s = r + n.skewX * N,
                                a = 1e5,
                                o = (Math.cos(r) * n.scaleX * a | 0) / a,
                                h = (Math.sin(r) * n.scaleX * a | 0) / a,
                                l = (Math.sin(s) * -n.scaleY * a | 0) / a,
                                u = (Math.cos(s) * n.scaleY * a | 0) / a,
                                c = this.t.style,
                                f = this.t.currentStyle;
                                if (f) {
                                        i = h,
                                        h = -l,
                                        l = -i,
                                        e = f.filter,
                                        c.filter = "";
                                        var p, _, d = this.t.offsetWidth,
                                        g = this.t.offsetHeight,
                                        v = "absolute" !== f.position,
                                        y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + u,
                                        T = n.x + d * n.xPercent / 100,
                                        w = n.y + g * n.yPercent / 100;
                                        if (null != n.ox && (p = (n.oxp ? d * n.ox * .01 : n.ox) - d / 2, _ = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2, T += p - (p * o + _ * h), w += _ - (p * l + _ * u)), v ? (p = d / 2, _ = g / 2, y += ", Dx=" + (p - (p * o + _ * h) + T) + ", Dy=" + (_ - (p * l + _ * u) + w) + ")") : y += ", sizingMethod='auto expand')", e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? c.filter = e.replace(M, y) : c.filter = y + " " + e, 0 !== t && 1 !== t || 1 === o && 0 === h && 0 === l && 1 === u && (v && y.indexOf("Dx=0, Dy=0") === -1 || x.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && c.removeAttribute("filter")), !v) {
                                                var P, E, S, O = m < 8 ? 1 : -1;
                                                for (p = n.ieOffsetX || 0, _ = n.ieOffsetY || 0, n.ieOffsetX = Math.round((d - ((o < 0 ? -o: o) * d + (h < 0 ? -h: h) * g)) / 2 + T), n.ieOffsetY = Math.round((g - ((u < 0 ? -u: u) * g + (l < 0 ? -l: l) * d)) / 2 + w), mt = 0; mt < 4; mt++) E = et[mt],
                                                P = f[E],
                                                i = P.indexOf("px") !== -1 ? parseFloat(P) : Q(this.t, E, parseFloat(P), P.replace(b, "")) || 0,
                                                S = i !== n[E] ? mt < 2 ? -n.ieOffsetX: -n.ieOffsetY: mt < 2 ? p - n.ieOffsetX: _ - n.ieOffsetY,
                                                c[E] = (n[E] = Math.round(i - S * (0 === mt || 2 === mt ? 1 : O))) + "px"
                                        }
                                }
                        },
                        kt = L.set3DTransformRatio = function(t) {
                                var e, i, n, r, s, a, o, h, l, u, c, f, p, d, m, g, v, y, T, b, x, w, P, E = this.data,
                                S = this.t.style,
                                O = E.rotation * N,
                                k = E.scaleX,
                                R = E.scaleY,
                                A = E.scaleZ,
                                D = E.x,
                                M = E.y,
                                C = E.z,
                                I = E.perspective;
                                if ((1 === t || 0 === t) && "auto" === E.force3D && !(E.rotationY || E.rotationX || 1 !== A || I || C)) return void Rt.call(this, t);
                                if (_) {
                                        var z = 1e-4;
                                        k < z && k > -z && (k = A = 2e-5),
                                        R < z && R > -z && (R = A = 2e-5),
                                        !I || E.z || E.rotationX || E.rotationY || (I = 0)
                                }
                                if (O || E.skewX) y = Math.cos(O),
                                T = Math.sin(O),
                                e = y,
                                s = T,
                                E.skewX && (O -= E.skewX * N, y = Math.cos(O), T = Math.sin(O), "simple" === E.skewType && (b = Math.tan(E.skewX * N), b = Math.sqrt(1 + b * b), y *= b, T *= b)),
                                i = -T,
                                a = y;
                                else {
                                        if (! (E.rotationY || E.rotationX || 1 !== A || I)) return void(S[bt] = (E.xPercent || E.yPercent ? "translate(" + E.xPercent + "%," + E.yPercent + "%) translate3d(": "translate3d(") + D + "px," + M + "px," + C + "px)" + (1 !== k || 1 !== R ? " scale(" + k + "," + R + ")": ""));
                                        e = a = 1,
                                        i = s = 0
                                }
                                c = 1,
                                n = r = o = h = l = u = f = p = d = 0,
                                m = I ? -1 / I: 0,
                                g = E.zOrigin,
                                v = 1e5,
                                O = E.rotationY * N,
                                O && (y = Math.cos(O), T = Math.sin(O), l = c * -T, p = m * -T, n = e * T, o = s * T, c *= y, m *= y, e *= y, s *= y),
                                O = E.rotationX * N,
                                O && (y = Math.cos(O), T = Math.sin(O), b = i * y + n * T, x = a * y + o * T, w = u * y + c * T, P = d * y + m * T, n = i * -T + n * y, o = a * -T + o * y, c = u * -T + c * y, m = d * -T + m * y, i = b, a = x, u = w, d = P),
                                1 !== A && (n *= A, o *= A, c *= A, m *= A),
                                1 !== R && (i *= R, a *= R, u *= R, d *= R),
                                1 !== k && (e *= k, s *= k, l *= k, p *= k),
                                g && (f -= g, r = n * f, h = o * f, f = c * f + g),
                                r = (b = (r += D) - (r |= 0)) ? (b * v + (b < 0 ? -.5 : .5) | 0) / v + r: r,
                                h = (b = (h += M) - (h |= 0)) ? (b * v + (b < 0 ? -.5 : .5) | 0) / v + h: h,
                                f = (b = (f += C) - (f |= 0)) ? (b * v + (b < 0 ? -.5 : .5) | 0) / v + f: f,
                                S[bt] = (E.xPercent || E.yPercent ? "translate(" + E.xPercent + "%," + E.yPercent + "%) matrix3d(": "matrix3d(") + [(e * v | 0) / v, (s * v | 0) / v, (l * v | 0) / v, (p * v | 0) / v, (i * v | 0) / v, (a * v | 0) / v, (u * v | 0) / v, (d * v | 0) / v, (n * v | 0) / v, (o * v | 0) / v, (c * v | 0) / v, (m * v | 0) / v, r, h, f, I ? 1 + -f / I: 1].join(",") + ")"
                        },
                        Rt = L.set2DTransformRatio = function(t) {
                                var e, i, n, r, s, a = this.data,
                                o = this.t,
                                h = o.style,
                                l = a.x,
                                u = a.y;
                                return a.rotationX || a.rotationY || a.z || a.force3D === !0 || "auto" === a.force3D && 1 !== t && 0 !== t ? (this.setRatio = kt, void kt.call(this, t)) : void(a.rotation || a.skewX ? (e = a.rotation * N, i = e - a.skewX * N, n = 1e5, r = a.scaleX * n, s = a.scaleY * n, h[bt] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(": "matrix(") + (Math.cos(e) * r | 0) / n + "," + (Math.sin(e) * r | 0) / n + "," + (Math.sin(i) * -s | 0) / n + "," + (Math.cos(i) * s | 0) / n + "," + l + "," + u + ")") : h[bt] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(": "matrix(") + a.scaleX + ",0,0," + a.scaleY + "," + l + "," + u + ")")
                        };
                        vt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                                parser: function(t, e, n, r, s, o, l) {
                                        if (r._transform) return s;
                                        var u, c, f, p, _, d, m, g = r._transform = St(t, a, !0, l.parseTransform),
                                        v = t.style,
                                        y = 1e-6,
                                        T = Tt.length,
                                        b = l,
                                        x = {};
                                        if ("string" == typeof b.transform && bt) f = Y.style,
                                        f[bt] = b.transform,
                                        f.display = "block",
                                        f.position = "absolute",
                                        X.body.appendChild(Y),
                                        u = St(Y, null, !1),
                                        X.body.removeChild(Y);
                                        else if ("object" === ("undefined" == typeof b ? "undefined": i(b))) {
                                                if (u = {
                                                        scaleX: st(null != b.scaleX ? b.scaleX: b.scale, g.scaleX),
                                                        scaleY: st(null != b.scaleY ? b.scaleY: b.scale, g.scaleY),
                                                        scaleZ: st(b.scaleZ, g.scaleZ),
                                                        x: st(b.x, g.x),
                                                        y: st(b.y, g.y),
                                                        z: st(b.z, g.z),
                                                        xPercent: st(b.xPercent, g.xPercent),
                                                        yPercent: st(b.yPercent, g.yPercent),
                                                        perspective: st(b.transformPerspective, g.perspective)
                                                },
                                                m = b.directionalRotation, null != m) if ("object" === ("undefined" == typeof m ? "undefined": i(m))) for (f in m) b[f] = m[f];
                                                else b.rotation = m;
                                                "string" == typeof b.x && b.x.indexOf("%") !== -1 && (u.x = 0, u.xPercent = st(b.x, g.xPercent)),
                                                "string" == typeof b.y && b.y.indexOf("%") !== -1 && (u.y = 0, u.yPercent = st(b.y, g.yPercent)),
                                                u.rotation = at("rotation" in b ? b.rotation: "shortRotation" in b ? b.shortRotation + "_short": "rotationZ" in b ? b.rotationZ: g.rotation, g.rotation, "rotation", x),
                                                Pt && (u.rotationX = at("rotationX" in b ? b.rotationX: "shortRotationX" in b ? b.shortRotationX + "_short": g.rotationX || 0, g.rotationX, "rotationX", x), u.rotationY = at("rotationY" in b ? b.rotationY: "shortRotationY" in b ? b.shortRotationY + "_short": g.rotationY || 0, g.rotationY, "rotationY", x)),
                                                u.skewX = null == b.skewX ? g.skewX: at(b.skewX, g.skewX),
                                                u.skewY = null == b.skewY ? g.skewY: at(b.skewY, g.skewY),
                                                (c = u.skewY - g.skewY) && (u.skewX += c, u.rotation += c)
                                        }
                                        for (Pt && null != b.force3D && (g.force3D = b.force3D, d = !0), g.skewType = b.skewType || g.skewType || h.defaultSkewType, _ = g.force3D || g.z || g.rotationX || g.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, _ || null == b.scale || (u.scaleZ = 1); --T > -1;) n = Tt[T],
                                        p = u[n] - g[n],
                                        (p > y || p < -y || null != z[n]) && (d = !0, s = new _t(g, n, g[n], p, s), n in x && (s.e = x[n]), s.xs0 = 0, s.plugin = o, r._overwriteProps.push(s.n));
                                        return p = b.transformOrigin,
                                        (p || Pt && _ && g.zOrigin) && (bt ? (d = !0, n = wt, p = (p || Z(t, n, a, !1, "50% 50%")) + "", s = new _t(v, n, 0, 0, s, -1, "transformOrigin"), s.b = v[n], s.plugin = o, Pt ? (f = g.zOrigin, p = p.split(" "), g.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, s.xs0 = s.e = p[0] + " " + (p[1] || "50%") + " 0px", s = new _t(g, "zOrigin", 0, 0, s, -1, s.n), s.b = f, s.xs0 = s.e = g.zOrigin) : s.xs0 = s.e = p) : nt(p + "", g)),
                                        d && (r._transformType = _ || 3 === this._transformType ? 3 : 2),
                                        s
                                },
                                prefix: !0
                        }),
                        vt("boxShadow", {
                                defaultValue: "0px 0px 0px 0px #999",
                                prefix: !0,
                                color: !0,
                                multi: !0,
                                keyword: "inset"
                        }),
                        vt("borderRadius", {
                                defaultValue: "0px",
                                parser: function(t, e, i, n, r, o) {
                                        e = this.format(e);
                                        var h, l, u, c, f, p, _, d, m, g, v, y, T, b, x, w, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                        E = t.style;
                                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), h = e.split(" "), l = 0; l < P.length; l++) this.p.indexOf("border") && (P[l] = $(P[l])),
                                        f = c = Z(t, P[l], a, !1, "0px"),
                                        f.indexOf(" ") !== -1 && (c = f.split(" "), f = c[0], c = c[1]),
                                        p = u = h[l],
                                        _ = parseFloat(f),
                                        y = f.substr((_ + "").length),
                                        T = "=" === p.charAt(1),
                                        T ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), v = p.substr((d + "").length - (d < 0 ? 1 : 0)) || "") : (d = parseFloat(p), v = p.substr((d + "").length)),
                                        "" === v && (v = s[i] || y),
                                        v !== y && (b = Q(t, "borderLeft", _, y), x = Q(t, "borderTop", _, y), "%" === v ? (f = b / m * 100 + "%", c = x / g * 100 + "%") : "em" === v ? (w = Q(t, "borderLeft", 1, "em"), f = b / w + "em", c = x / w + "em") : (f = b + "px", c = x + "px"), T && (p = parseFloat(f) + d + v, u = parseFloat(c) + d + v)),
                                        r = dt(E, P[l], f + " " + c, p + " " + u, !1, "0px", r);
                                        return r
                                },
                                prefix: !0,
                                formatter: ct("0px 0px 0px 0px", !1, !0)
                        }),
                        vt("backgroundPosition", {
                                defaultValue: "0 0",
                                parser: function(t, e, i, n, r, s) {
                                        var o, h, l, u, c, f, p = "background-position",
                                        _ = a || W(t, null),
                                        d = this.format((_ ? m ? _.getPropertyValue(p + "-x") + " " + _.getPropertyValue(p + "-y") : _.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                        g = this.format(e);
                                        if (d.indexOf("%") !== -1 != (g.indexOf("%") !== -1) && (f = Z(t, "backgroundImage").replace(k, ""), f && "none" !== f)) {
                                                for (o = d.split(" "), h = g.split(" "), F.setAttribute("src", f), l = 2; --l > -1;) d = o[l],
                                                u = d.indexOf("%") !== -1,
                                                u !== (h[l].indexOf("%") !== -1) && (c = 0 === l ? t.offsetWidth - F.width: t.offsetHeight - F.height, o[l] = u ? parseFloat(d) / 100 * c + "px": parseFloat(d) / c * 100 + "%");
                                                d = o.join(" ")
                                        }
                                        return this.parseComplex(t.style, d, g, r, s)
                                },
                                formatter: nt
                        }),
                        vt("backgroundSize", {
                                defaultValue: "0 0",
                                formatter: nt
                        }),
                        vt("perspective", {
                                defaultValue: "0px",
                                prefix: !0
                        }),
                        vt("perspectiveOrigin", {
                                defaultValue: "50% 50%",
                                prefix: !0
                        }),
                        vt("transformStyle", {
                                prefix: !0
                        }),
                        vt("backfaceVisibility", {
                                prefix: !0
                        }),
                        vt("userSelect", {
                                prefix: !0
                        }),
                        vt("margin", {
                                parser: ft("marginTop,marginRight,marginBottom,marginLeft")
                        }),
                        vt("padding", {
                                parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
                        }),
                        vt("clip", {
                                defaultValue: "rect(0px,0px,0px,0px)",
                                parser: function(t, e, i, n, r, s) {
                                        var o, h, l;
                                        return m < 9 ? (h = t.currentStyle, l = m < 8 ? " ": ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Z(t, this.p, a, !1, this.dflt)), e = this.format(e)),
                                        this.parseComplex(t.style, o, e, r, s)
                                }
                        }),
                        vt("textShadow", {
                                defaultValue: "0px 0px 0px #999",
                                color: !0,
                                multi: !0
                        }),
                        vt("autoRound,strictUnits", {
                                parser: function(t, e, i, n, r) {
                                        return r
                                }
                        }),
                        vt("border", {
                                defaultValue: "0px solid #000",
                                parser: function(t, e, i, n, r, s) {
                                        return this.parseComplex(t.style, this.format(Z(t, "borderTopWidth", a, !1, "0px") + " " + Z(t, "borderTopStyle", a, !1, "solid") + " " + Z(t, "borderTopColor", a, !1, "#000")), this.format(e), r, s)
                                },
                                color: !0,
                                formatter: function(t) {
                                        var e = t.split(" ");
                                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
                                }
                        }),
                        vt("borderWidth", {
                                parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                        }),
                        vt("float,cssFloat,styleFloat", {
                                parser: function(t, e, i, n, r, s) {
                                        var a = t.style,
                                        o = "cssFloat" in a ? "cssFloat": "styleFloat";
                                        return new _t(a, o, 0, 0, r, -1, i, !1, 0, a[o], e)
                                }
                        });
                        var At = function(t) {
                                var e, i = this.t,
                                n = i.filter || Z(this.data, "filter"),
                                r = this.s + this.c * t | 0;
                                100 === r && (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1 && n.indexOf("oader(") === -1 ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = n.replace(P, ""), e = !0)),
                                e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), n.indexOf("pacity") === -1 ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
                        };
                        vt("opacity,alpha,autoAlpha", {
                                defaultValue: "1",
                                parser: function(t, e, i, n, r, s) {
                                        var o = parseFloat(Z(t, "opacity", a, !1, "1")),
                                        h = t.style,
                                        l = "autoAlpha" === i;
                                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                                        l && 1 === o && "hidden" === Z(t, "visibility", a) && 0 !== e && (o = 0),
                                        U ? r = new _t(h, "opacity", o, e - o, r) : (r = new _t(h, "opacity", 100 * o, 100 * (e - o), r), r.xn1 = l ? 1 : 0, h.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = s, r.setRatio = At),
                                        l && (r = new _t(h, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit": "hidden", 0 === e ? "hidden": "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)),
                                        r
                                }
                        });
                        var Dt = function(t, e) {
                                e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                        },
                        Mt = function(t) {
                                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                        this.t.setAttribute("class", 0 === t ? this.b: this.e);
                                        for (var e = this.data,
                                        i = this.t.style; e;) e.v ? i[e.p] = e.v: Dt(i, e.p),
                                        e = e._next;
                                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                        };
                        vt("className", {
                                parser: function(t, e, i, n, s, o, h) {
                                        var l, u, c, f, p, _ = t.getAttribute("class") || "",
                                        d = t.style.cssText;
                                        if (s = n._classNamePT = new _t(t, i, 0, 0, s, 2), s.setRatio = Mt, s.pr = -11, r = !0, s.b = _, u = J(t, a), c = t._gsClassPT) {
                                                for (f = {},
                                                p = c.data; p;) f[p.p] = 1,
                                                p = p._next;
                                                c.setRatio(1)
                                        }
                                        return t._gsClassPT = s,
                                        s.e = "=" !== e.charAt(1) ? e: _.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                                        n._tween._duration && (t.setAttribute("class", s.e), l = K(t, u, J(t), h, f), t.setAttribute("class", _), s.data = l.firstMPT, t.style.cssText = d, s = s.xfirst = n.parse(t, l.difs, s, o)),
                                        s
                                }
                        });
                        var Ct = function(t) {
                                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                        var e, i, n, r, s = this.t.style,
                                        a = l.transform.parse;
                                        if ("all" === this.e) s.cssText = "",
                                        r = !0;
                                        else for (e = this.e.split(","), n = e.length; --n > -1;) i = e[n],
                                        l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? wt: l[i].p),
                                        Dt(s, i);
                                        r && (Dt(s, bt), this.t._gsTransform && delete this.t._gsTransform)
                                }
                        };
                        for (vt("clearProps", {
                                parser: function(t, e, i, n, s) {
                                        return s = new _t(t, i, 0, 0, s, 2),
                                        s.setRatio = Ct,
                                        s.e = e,
                                        s.pr = -10,
                                        s.data = n._tween,
                                        r = !0,
                                        s
                                }
                        }), u = "bezier,throwProps,physicsProps,physics2D".split(","), mt = u.length; mt--;) yt(u[mt]);
                        u = h.prototype,
                        u._firstPT = null,
                        u._onInitTween = function(t, e, i) {
                                if (!t.nodeType) return ! 1;
                                this._target = t,
                                this._tween = i,
                                this._vars = e,
                                c = e.autoRound,
                                r = !1,
                                s = e.suffixMap || h.suffixMap,
                                a = W(t, ""),
                                o = this._overwriteProps;
                                var n, l, u, _, m, g, v, y, T, b = t.style;
                                if (f && "" === b.zIndex && (n = Z(t, "zIndex", a), "auto" !== n && "" !== n || this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (_ = b.cssText, n = J(t, a), b.cssText = _ + ";" + e, n = K(t, n, J(t)).difs, !U && w.test(e) && (n.opacity = parseFloat(RegExp.$1)), e = n, b.cssText = _), this._firstPT = l = this.parse(t, e, null), this._transformType) {
                                        for (T = 3 === this._transformType, bt ? p && (f = !0, "" === b.zIndex && (v = Z(t, "zIndex", a), "auto" !== v && "" !== v || this._addLazySet(b, "zIndex", 0)), d && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible": "hidden"))) : b.zoom = 1, u = l; u && u._next;) u = u._next;
                                        y = new _t(t, "transform", 0, 0, null, 2),
                                        this._linkCSSP(y, null, u),
                                        y.setRatio = T && Pt ? kt: bt ? Rt: Ot,
                                        y.data = this._transform || St(t, a, !0),
                                        o.pop()
                                }
                                if (r) {
                                        for (; l;) {
                                                for (g = l._next, u = _; u && u.pr > l.pr;) u = u._next; (l._prev = u ? u._prev: m) ? l._prev._next = l: _ = l,
                                                (l._next = u) ? u._prev = l: m = l,
                                                l = g
                                        }
                                        this._firstPT = _
                                }
                                return ! 0
                        },
                        u.parse = function(t, e, i, n) {
                                var r, o, h, u, f, p, _, d, m, g, v = t.style;
                                for (r in e) p = e[r],
                                o = l[r],
                                o ? i = o.parse(t, p, r, this, i, n, e) : (f = Z(t, r, a) + "", m = "string" == typeof p, "color" === r || "fill" === r || "stroke" === r || r.indexOf("Color") !== -1 || m && E.test(p) ? (m || (p = lt(p), p = (p.length > 3 ? "rgba(": "rgb(") + p.join(",") + ")"), i = dt(v, r, f, p, !0, "transparent", i, 0, n)) : !m || p.indexOf(" ") === -1 && p.indexOf(",") === -1 ? (h = parseFloat(f), _ = h || 0 === h ? f.substr((h + "").length) : "", "" !== f && "auto" !== f || ("width" === r || "height" === r ? (h = it(t, r, a), _ = "px") : "left" === r || "top" === r ? (h = G(t, r, a), _ = "px") : (h = "opacity" !== r ? 0 : 1, _ = "")), g = m && "=" === p.charAt(1), g ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), d = p.replace(b, "")) : (u = parseFloat(p), d = m ? p.substr((u + "").length) || "": ""), "" === d && (d = r in s ? s[r] : _), p = u || 0 === u ? (g ? u + h: u) + d: e[r], _ !== d && "" !== d && (u || 0 === u) && h && (h = Q(t, r, h, _), "%" === d ? (h /= Q(t, r, 100, "%") / 100, e.strictUnits !== !0 && (f = h + "%")) : "em" === d ? h /= Q(t, r, 1, "em") : "px" !== d && (u = Q(t, r, u, d), d = "px"), g && (u || 0 === u) && (p = u + h + d)), g && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[r] && (p || p + "" != "NaN" && null != p) ? (i = new _t(v, r, u || h || 0, 0, i, -1, r, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== r && r.indexOf("Style") === -1 ? p: f) : H("invalid " + r + " tween value: " + e[r]) : (i = new _t(v, r, h, u - h, i, 0, r, c !== !1 && ("px" === d || "zIndex" === r), 0, f, p), i.xs0 = d)) : i = dt(v, r, f, p, !0, null, i, 0, n)),
                                n && i && !i.plugin && (i.plugin = n);
                                return i
                        },
                        u.setRatio = function(t) {
                                var e, i, n, r = this._firstPT,
                                s = 1e-6;
                                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                                        if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < s && e > -s && (e = 0), r.type) if (1 === r.type) if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                        else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                        else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                        else {
                                                for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                        } else r.type === -1 ? r.t[r.p] = r.xs0: r.setRatio && r.setRatio(t);
                                        else r.t[r.p] = e + r.xs0;
                                        r = r._next
                                } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b: r.setRatio(t),
                                r = r._next;
                                else for (; r;) 2 !== r.type ? r.t[r.p] = r.e: r.setRatio(t),
                                r = r._next
                        },
                        u._enableTransforms = function(t) {
                                this._transformType = t || 3 === this._transformType ? 3 : 2,
                                this._transform = this._transform || St(this._target, a, !0)
                        };
                        var Nt = function(t) {
                                this.t[this.p] = this.e,
                                this.data._linkCSSP(this, this._next, null, !0)
                        };
                        u._addLazySet = function(t, e, i) {
                                var n = this._firstPT = new _t(t, e, 0, 0, this._firstPT, 2);
                                n.e = i,
                                n.setRatio = Nt,
                                n.data = this
                        },
                        u._linkCSSP = function(t, e, i, n) {
                                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next: this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t: n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i),
                                t
                        },
                        u._kill = function(e) {
                                var i, n, r, s = e;
                                if (e.autoAlpha || e.alpha) {
                                        s = {};
                                        for (n in e) s[n] = e[n];
                                        s.opacity = 1,
                                        s.autoAlpha && (s.visibility = 1)
                                }
                                return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null),
                                t.prototype._kill.call(this, s)
                        };
                        var It = function t(e, i, n) {
                                var r, s, a, o;
                                if (e.slice) for (s = e.length; --s > -1;) t(e[s], i, n);
                                else for (r = e.childNodes, s = r.length; --s > -1;) a = r[s],
                                o = a.type,
                                a.style && (i.push(J(a)), n && n.push(a)),
                                1 !== o && 9 !== o && 11 !== o || !a.childNodes.length || t(a, i, n)
                        };
                        return h.cascadeTo = function(t, i, n) {
                                var r, s, a, o = e.to(t, i, n),
                                h = [o],
                                l = [],
                                u = [],
                                c = [],
                                f = e._internals.reservedProps;
                                for (t = o._targets || o.target, It(t, l, c), o.render(i, !0), It(t, u), o.render(0, !0), o._enabled(!0), r = c.length; --r > -1;) if (s = K(c[r], l[r], u[r]), s.firstMPT) {
                                        s = s.difs;
                                        for (a in n) f[a] && (s[a] = n[a]);
                                        h.push(e.to(c[r], i, s))
                                }
                                return h
                        },
                        t.activate([h]),
                        h
                },
                !0),
                function() {
                        var t = n._gsDefine.plugin({
                                propName: "roundProps",
                                priority: -1,
                                API: 2,
                                init: function(t, e, i) {
                                        return this._tween = i,
                                        !0
                                }
                        }),
                        e = t.prototype;
                        e._onInitAllProps = function() {
                                for (var t, e, i, n = this._tween,
                                r = n.vars.roundProps instanceof Array ? n.vars.roundProps: n.vars.roundProps.split(","), s = r.length, a = {},
                                o = n._propLookup.roundProps; --s > -1;) a[r[s]] = 1;
                                for (s = r.length; --s > -1;) for (t = r[s], e = n._firstPT; e;) i = e._next,
                                e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i: n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = o),
                                e = i;
                                return ! 1
                        },
                        e._add = function(t, e, i, n) {
                                this._addTween(t, e, i, i + n, e, !0),
                                this._overwriteProps.push(e)
                        }
                } (),
                n._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.3.3",
                        init: function(t, e, i) {
                                var n, r, s;
                                if ("function" != typeof t.setAttribute) return ! 1;
                                this._target = t,
                                this._proxy = {},
                                this._start = {},
                                this._end = {};
                                for (n in e) this._start[n] = this._proxy[n] = r = t.getAttribute(n),
                                s = this._addTween(this._proxy, n, parseFloat(r), e[n], n),
                                this._end[n] = s ? s.s + s.c: e[n],
                                this._overwriteProps.push(n);
                                return ! 0
                        },
                        set: function(t) {
                                this._super.setRatio.call(this, t);
                                for (var e, i = this._overwriteProps,
                                n = i.length,
                                r = 1 === t ? this._end: t ? this._proxy: this._start; --n > -1;) e = i[n],
                                this._target.setAttribute(e, r[e] + "")
                        }
                }),
                n._gsDefine.plugin({
                        propName: "directionalRotation",
                        version: "0.2.1",
                        API: 2,
                        init: function(t, e, n) {
                                "object" !== ("undefined" == typeof e ? "undefined": i(e)) && (e = {
                                        rotation: e
                                }),
                                this.finals = {};
                                var r, s, a, o, h, l, u = e.useRadians === !0 ? 2 * Math.PI: 360,
                                c = 1e-6;
                                for (r in e)"useRadians" !== r && (l = (e[r] + "").split("_"), s = l[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r: "get" + r.substr(3)]()), o = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, h = o - a, l.length && (s = l.join("_"), s.indexOf("short") !== -1 && (h %= u, h !== h % (u / 2) && (h = h < 0 ? h + u: h - u)), s.indexOf("_cw") !== -1 && h < 0 ? h = (h + 9999999999 * u) % u - (h / u | 0) * u: s.indexOf("ccw") !== -1 && h > 0 && (h = (h - 9999999999 * u) % u - (h / u | 0) * u)), (h > c || h < -c) && (this._addTween(t, r, a, a + h, r), this._overwriteProps.push(r)));
                                return ! 0
                        },
                        set: function(t) {
                                var e;
                                if (1 !== t) this._super.setRatio.call(this, t);
                                else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                                e = e._next
                        }
                })._autoCSS = !0,
                n._gsDefine("easing.Back", ["easing.Ease"],
                function(t) {
                        var e, i, r, s = n.GreenSockGlobals || n,
                        a = s.com.greensock,
                        o = 2 * Math.PI,
                        h = Math.PI / 2,
                        l = a._class,
                        u = function(e, i) {
                                var n = l("easing." + e,
                                function() {},
                                !0),
                                r = n.prototype = new t;
                                return r.constructor = n,
                                r.getRatio = i,
                                n
                        },
                        c = t.register ||
                        function() {},
                        f = function(t, e, i, n, r) {
                                var s = l("easing." + t, {
                                        easeOut: new e,
                                        easeIn: new i,
                                        easeInOut: new n
                                },
                                !0);
                                return c(s, t),
                                s
                        },
                        p = function(t, e, i) {
                                this.t = t,
                                this.v = e,
                                i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                        },
                        _ = function(e, i) {
                                var n = l("easing." + e,
                                function(t) {
                                        this._p1 = t || 0 === t ? t: 1.70158,
                                        this._p2 = 1.525 * this._p1
                                },
                                !0),
                                r = n.prototype = new t;
                                return r.constructor = n,
                                r.getRatio = i,
                                r.config = function(t) {
                                        return new n(t)
                                },
                                n
                        },
                        d = f("Back", _("BackOut",
                        function(t) {
                                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                        }), _("BackIn",
                        function(t) {
                                return t * t * ((this._p1 + 1) * t - this._p1)
                        }), _("BackInOut",
                        function(t) {
                                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                        })),
                        m = l("easing.SlowMo",
                        function(t, e, i) {
                                e = e || 0 === e ? e: .7,
                                null == t ? t = .7 : t > 1 && (t = 1),
                                this._p = 1 !== t ? e: 0,
                                this._p1 = (1 - t) / 2,
                                this._p2 = t,
                                this._p3 = this._p1 + this._p2,
                                this._calcEnd = i === !0
                        },
                        !0),
                        g = m.prototype = new t;
                        return g.constructor = m,
                        g.getRatio = function(t) {
                                var e = t + (.5 - t) * this._p;
                                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t: e - (t = 1 - t / this._p1) * t * t * t * e: t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t: e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t: this._calcEnd ? 1 : e
                        },
                        m.ease = new m(.7, .7),
                        g.config = m.config = function(t, e, i) {
                                return new m(t, e, i)
                        },
                        e = l("easing.SteppedEase",
                        function(t) {
                                t = t || 1,
                                this._p1 = 1 / t,
                                this._p2 = t + 1
                        },
                        !0),
                        g = e.prototype = new t,
                        g.constructor = e,
                        g.getRatio = function(t) {
                                return t < 0 ? t = 0 : t >= 1 && (t = .999999999),
                                (this._p2 * t >> 0) * this._p1
                        },
                        g.config = e.config = function(t) {
                                return new e(t)
                        },
                        i = l("easing.RoughEase",
                        function(e) {
                                e = e || {};
                                for (var i, n, r, s, a, o, h = e.taper || "none",
                                l = [], u = 0, c = 0 | (e.points || 20), f = c, _ = e.randomize !== !1, d = e.clamp === !0, m = e.template instanceof t ? e.template: null, g = "number" == typeof e.strength ? .4 * e.strength: .4; --f > -1;) i = _ ? Math.random() : 1 / c * f,
                                n = m ? m.getRatio(i) : i,
                                "none" === h ? r = g: "out" === h ? (s = 1 - i, r = s * s * g) : "in" === h ? r = i * i * g: i < .5 ? (s = 2 * i, r = s * s * .5 * g) : (s = 2 * (1 - i), r = s * s * .5 * g),
                                _ ? n += Math.random() * r - .5 * r: f % 2 ? n += .5 * r: n -= .5 * r,
                                d && (n > 1 ? n = 1 : n < 0 && (n = 0)),
                                l[u++] = {
                                        x: i,
                                        y: n
                                };
                                for (l.sort(function(t, e) {
                                        return t.x - e.x
                                }), o = new p(1, 1, null), f = c; --f > -1;) a = l[f],
                                o = new p(a.x, a.y, o);
                                this._prev = new p(0, 0, 0 !== o.t ? o: o.next)
                        },
                        !0),
                        g = i.prototype = new t,
                        g.constructor = i,
                        g.getRatio = function(t) {
                                var e = this._prev;
                                if (t > e.t) {
                                        for (; e.next && t >= e.t;) e = e.next;
                                        e = e.prev
                                } else for (; e.prev && t <= e.t;) e = e.prev;
                                return this._prev = e,
                                e.v + (t - e.t) / e.gap * e.c
                        },
                        g.config = function(t) {
                                return new i(t)
                        },
                        i.ease = new i,
                        f("Bounce", u("BounceOut",
                        function(t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t: t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }), u("BounceIn",
                        function(t) {
                                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t: t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                        }), u("BounceInOut",
                        function(t) {
                                var e = t < .5;
                                return t = e ? 1 - 2 * t: 2 * t - 1,
                                t < 1 / 2.75 ? t *= 7.5625 * t: t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
                                e ? .5 * (1 - t) : .5 * t + .5
                        })),
                        f("Circ", u("CircOut",
                        function(t) {
                                return Math.sqrt(1 - (t -= 1) * t)
                        }), u("CircIn",
                        function(t) {
                                return - (Math.sqrt(1 - t * t) - 1)
                        }), u("CircInOut",
                        function(t) {
                                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        })),
                        r = function(e, i, n) {
                                var r = l("easing." + e,
                                function(t, e) {
                                        this._p1 = t || 1,
                                        this._p2 = e || n,
                                        this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
                                },
                                !0),
                                s = r.prototype = new t;
                                return s.constructor = r,
                                s.getRatio = i,
                                s.config = function(t, e) {
                                        return new r(t, e)
                                },
                                r
                        },
                        f("Elastic", r("ElasticOut",
                        function(t) {
                                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * o / this._p2) + 1
                        },
                        .3), r("ElasticIn",
                        function(t) {
                                return - (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2))
                        },
                        .3), r("ElasticInOut",
                        function(t) {
                                return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) * .5 + 1
                        },
                        .45)),
                        f("Expo", u("ExpoOut",
                        function(t) {
                                return 1 - Math.pow(2, -10 * t)
                        }), u("ExpoIn",
                        function(t) {
                                return Math.pow(2, 10 * (t - 1)) - .001
                        }), u("ExpoInOut",
                        function(t) {
                                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                        })),
                        f("Sine", u("SineOut",
                        function(t) {
                                return Math.sin(t * h)
                        }), u("SineIn",
                        function(t) {
                                return - Math.cos(t * h) + 1
                        }), u("SineInOut",
                        function(t) {
                                return - .5 * (Math.cos(Math.PI * t) - 1)
                        })),
                        l("easing.EaseLookup", {
                                find: function(e) {
                                        return t.map[e]
                                }
                        },
                        !0),
                        c(s.SlowMo, "SlowMo", "ease,"),
                        c(i, "RoughEase", "ease,"),
                        c(e, "SteppedEase", "ease,"),
                        d
                },
                !0)
        }),
        n._gsDefine && n._gsQueue.pop()(),
        function(e, n) {
                var r = e.GreenSockGlobals = e.GreenSockGlobals || e;
                if (!r.TweenLite) {
                        var s, a, o, h, l, u = function(t) {
                                var e, i = t.split("."),
                                n = r;
                                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                                return n
                        },
                        c = u("com.greensock"),
                        f = 1e-10,
                        p = function(t) {
                                var e, i = [],
                                n = t.length;
                                for (e = 0; e !== n; i.push(t[e++]));
                                return i
                        },
                        _ = function() {},
                        d = function() {
                                var t = Object.prototype.toString,
                                e = t.call([]);
                                return function(n) {
                                        return null != n && (n instanceof Array || "object" === ("undefined" == typeof n ? "undefined": i(n)) && !!n.push && t.call(n) === e)
                                }
                        } (),
                        m = {},
                        g = function i(s, a, o, h) {
                                this.sc = m[s] ? m[s].sc: [],
                                m[s] = this,
                                this.gsClass = null,
                                this.func = o;
                                var l = [];
                                this.check = function(c) {
                                        for (var f, p, _, d, g = a.length,
                                        v = g; --g > -1;)(f = m[a[g]] || new i(a[g], [])).gsClass ? (l[g] = f.gsClass, v--) : c && f.sc.push(this);
                                        if (0 === v && o) for (p = ("com.greensock." + s).split("."), _ = p.pop(), d = u(p.join("."))[_] = this.gsClass = o.apply(o, l), h && (r[_] = d, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/": "") + s.split(".").pop(), [],
                                        function() {
                                                return d
                                        }) : s === n && "undefined" != typeof t && t.exports && (t.exports = d)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                                },
                                this.check(!0)
                        },
                        v = e._gsDefine = function(t, e, i, n) {
                                return new g(t, e, i, n)
                        },
                        y = c._class = function(t, e, i) {
                                return e = e ||
                                function() {},
                                v(t, [],
                                function() {
                                        return e
                                },
                                i),
                                e
                        };
                        v.globals = r;
                        var T = [0, 0, 1, 1],
                        b = [],
                        x = y("easing.Ease",
                        function(t, e, i, n) {
                                this._func = t,
                                this._type = i || 0,
                                this._power = n || 0,
                                this._params = e ? T.concat(e) : T
                        },
                        !0),
                        w = x.map = {},
                        P = x.register = function(t, e, i, n) {
                                for (var r, s, a, o, h = e.split(","), l = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --l > -1;) for (s = h[l], r = n ? y("easing." + s, null, !0) : c.easing[s] || {},
                                a = u.length; --a > -1;) o = u[a],
                                w[s + "." + o] = w[o + s] = r[o] = t.getRatio ? t: t[o] || new t
                        };
                        for (o = x.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                                if (this._func) return this._params[0] = t,
                                this._func.apply(null, this._params);
                                var e = this._type,
                                i = this._power,
                                n = 1 === e ? 1 - t: 2 === e ? t: t < .5 ? 2 * t: 2 * (1 - t);
                                return 1 === i ? n *= n: 2 === i ? n *= n * n: 3 === i ? n *= n * n * n: 4 === i && (n *= n * n * n * n),
                                1 === e ? 1 - n: 2 === e ? n: t < .5 ? n / 2 : 1 - n / 2
                        },
                        s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = s.length; --a > -1;) o = s[a] + ",Power" + a,
                        P(new x(null, null, 1, a), o, "easeOut", !0),
                        P(new x(null, null, 2, a), o, "easeIn" + (0 === a ? ",easeNone": "")),
                        P(new x(null, null, 3, a), o, "easeInOut");
                        w.linear = c.easing.Linear.easeIn,
                        w.swing = c.easing.Quad.easeInOut;
                        var E = y("events.EventDispatcher",
                        function(t) {
                                this._listeners = {},
                                this._eventTarget = t || this
                        });
                        o = E.prototype,
                        o.addEventListener = function(t, e, i, n, r) {
                                r = r || 0;
                                var s, a, o = this._listeners[t],
                                u = 0;
                                for (null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;) s = o[a],
                                s.c === e && s.s === i ? o.splice(a, 1) : 0 === u && s.pr < r && (u = a + 1);
                                o.splice(u, 0, {
                                        c: e,
                                        s: i,
                                        up: n,
                                        pr: r
                                }),
                                this !== h || l || h.wake()
                        },
                        o.removeEventListener = function(t, e) {
                                var i, n = this._listeners[t];
                                if (n) for (i = n.length; --i > -1;) if (n[i].c === e) return void n.splice(i, 1)
                        },
                        o.dispatchEvent = function(t) {
                                var e, i, n, r = this._listeners[t];
                                if (r) for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e],
                                n.up ? n.c.call(n.s || i, {
                                        type: t,
                                        target: i
                                }) : n.c.call(n.s || i)
                        };
                        var S = e.requestAnimationFrame,
                        O = e.cancelAnimationFrame,
                        k = Date.now ||
                        function() {
                                return (new Date).getTime()
                        },
                        R = k();
                        for (s = ["ms", "moz", "webkit", "o"], a = s.length; --a > -1 && !S;) S = e[s[a] + "RequestAnimationFrame"],
                        O = e[s[a] + "CancelAnimationFrame"] || e[s[a] + "CancelRequestAnimationFrame"];
                        y("Ticker",
                        function(t, e) {
                                var i, n, r, s, a, o = this,
                                u = k(),
                                c = e !== !1 && S,
                                p = 500,
                                d = 33,
                                m = function t(e) {
                                        var h, l, c = k() - R;
                                        c > p && (u += c - d),
                                        R += c,
                                        o.time = (R - u) / 1e3,
                                        h = o.time - a,
                                        (!i || h > 0 || e === !0) && (o.frame++, a += h + (h >= s ? .004 : s - h), l = !0),
                                        e !== !0 && (r = n(t)),
                                        l && o.dispatchEvent("tick")
                                };
                                E.call(o),
                                o.time = o.frame = 0,
                                o.tick = function() {
                                        m(!0)
                                },
                                o.lagSmoothing = function(t, e) {
                                        p = t || 1 / f,
                                        d = Math.min(e, p, 0)
                                },
                                o.sleep = function() {
                                        null != r && (c && O ? O(r) : clearTimeout(r), n = _, r = null, o === h && (l = !1))
                                },
                                o.wake = function() {
                                        null !== r ? o.sleep() : o.frame > 10 && (R = k() - p + 5),
                                        n = 0 === i ? _: c && S ? S: function(t) {
                                                return setTimeout(t, 1e3 * (a - o.time) + 1 | 0)
                                        },
                                        o === h && (l = !0),
                                        m(2)
                                },
                                o.fps = function(t) {
                                        return arguments.length ? (i = t, s = 1 / (i || 60), a = this.time + s, void o.wake()) : i
                                },
                                o.useRAF = function(t) {
                                        return arguments.length ? (o.sleep(), c = t, void o.fps(i)) : c
                                },
                                o.fps(t),
                                setTimeout(function() {
                                        c && (!r || o.frame < 5) && o.useRAF(!1)
                                },
                                1500)
                        }),
                        o = c.Ticker.prototype = new c.events.EventDispatcher,
                        o.constructor = c.Ticker;
                        var A = y("core.Animation",
                        function(t, e) {
                                if (this.vars = e = e || {},
                                this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                                        l || h.wake();
                                        var i = this.vars.useFrames ? H: B;
                                        i.add(this, i._time),
                                        this.vars.paused && this.paused(!0)
                                }
                        });
                        h = A.ticker = new c.Ticker,
                        o = A.prototype,
                        o._dirty = o._gc = o._initted = o._paused = !1,
                        o._totalTime = o._time = 0,
                        o._rawPrevTime = -1,
                        o._next = o._last = o._onUpdate = o._timeline = o.timeline = null,
                        o._paused = !1;
                        var D = function t() {
                                l && k() - R > 2e3 && h.wake(),
                                setTimeout(t, 2e3)
                        };
                        D(),
                        o.play = function(t, e) {
                                return null != t && this.seek(t, e),
                                this.reversed(!1).paused(!1)
                        },
                        o.pause = function(t, e) {
                                return null != t && this.seek(t, e),
                                this.paused(!0)
                        },
                        o.resume = function(t, e) {
                                return null != t && this.seek(t, e),
                                this.paused(!1)
                        },
                        o.seek = function(t, e) {
                                return this.totalTime(Number(t), e !== !1)
                        },
                        o.restart = function(t, e) {
                                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay: 0, e !== !1, !0)
                        },
                        o.reverse = function(t, e) {
                                return null != t && this.seek(t || this.totalDuration(), e),
                                this.reversed(!0).paused(!1)
                        },
                        o.render = function(t, e, i) {},
                        o.invalidate = function() {
                                return this._time = this._totalTime = 0,
                                this._initted = this._gc = !1,
                                this._rawPrevTime = -1,
                                !this._gc && this.timeline || this._enabled(!0),
                                this
                        },
                        o.isActive = function() {
                                var t, e = this._timeline,
                                i = this._startTime;
                                return ! e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
                        },
                        o._enabled = function(t, e) {
                                return l || h.wake(),
                                this._gc = !t,
                                this._active = this.isActive(),
                                e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                                !1
                        },
                        o._kill = function(t, e) {
                                return this._enabled(!1, !1)
                        },
                        o.kill = function(t, e) {
                                return this._kill(t, e),
                                this
                        },
                        o._uncache = function(t) {
                                for (var e = t ? this: this.timeline; e;) e._dirty = !0,
                                e = e.timeline;
                                return this
                        },
                        o._swapSelfInParams = function(t) {
                                for (var e = t.length,
                                i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
                                return i
                        },
                        o.eventCallback = function(t, e, i, n) {
                                if ("on" === (t || "").substr(0, 2)) {
                                        var r = this.vars;
                                        if (1 === arguments.length) return r[t];
                                        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n),
                                        "onUpdate" === t && (this._onUpdate = e)
                                }
                                return this
                        },
                        o.delay = function(t) {
                                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                        },
                        o.duration = function(t) {
                                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                        },
                        o.totalDuration = function(t) {
                                return this._dirty = !1,
                                arguments.length ? this.duration(t) : this._totalDuration
                        },
                        o.time = function(t, e) {
                                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration: t, e)) : this._time
                        },
                        o.totalTime = function(t, e, i) {
                                if (l || h.wake(), !arguments.length) return this._totalTime;
                                if (this._timeline) {
                                        if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                                this._dirty && this.totalDuration();
                                                var n = this._totalDuration,
                                                r = this._timeline;
                                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime: r._time) - (this._reversed ? n - t: t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                                                r = r._timeline
                                        }
                                        this._gc && this._enabled(!0, !1),
                                        this._totalTime === t && 0 !== this._duration || (this.render(t, e, !1), z.length && q())
                                }
                                return this
                        },
                        o.progress = o.totalProgress = function(t, e) {
                                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
                        },
                        o.startTime = function(t) {
                                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                        },
                        o.timeScale = function(t) {
                                if (!arguments.length) return this._timeScale;
                                if (t = t || f, this._timeline && this._timeline.smoothChildTiming) {
                                        var e = this._pauseTime,
                                        i = e || 0 === e ? e: this._timeline.totalTime();
                                        this._startTime = i - (i - this._startTime) * this._timeScale / t
                                }
                                return this._timeScale = t,
                                this._uncache(!1)
                        },
                        o.reversed = function(t) {
                                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime: this._totalTime, !0)), this) : this._reversed
                        },
                        o.paused = function(t) {
                                if (!arguments.length) return this._paused;
                                if (t != this._paused && this._timeline) {
                                        l || t || h.wake();
                                        var e = this._timeline,
                                        i = e.rawTime(),
                                        n = i - this._pauseTime; ! t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)),
                                        this._pauseTime = t ? i: null,
                                        this._paused = t,
                                        this._active = this.isActive(),
                                        !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime: (i - this._startTime) / this._timeScale, !0, !0)
                                }
                                return this._gc && !t && this._enabled(!0, !1),
                                this
                        };
                        var M = y("core.SimpleTimeline",
                        function(t) {
                                A.call(this, 0, t),
                                this.autoRemoveChildren = this.smoothChildTiming = !0
                        });
                        o = M.prototype = new A,
                        o.constructor = M,
                        o.kill()._gc = !1,
                        o._first = o._last = null,
                        o._sortChildren = !1,
                        o.add = o.insert = function(t, e, i, n) {
                                var r, s;
                                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren) for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t),
                                t._next ? t._next._prev = t: this._last = t,
                                t._prev = r,
                                this._timeline && this._uncache(!0),
                                this
                        },
                        o._remove = function(t, e) {
                                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next: this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev: this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, this._timeline && this._uncache(!0)),
                                this
                        },
                        o.render = function(t, e, i) {
                                var n, r = this._first;
                                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next,
                                (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                                r = n
                        },
                        o.rawTime = function() {
                                return l || h.wake(),

                                this._totalTime
                        };
                        var C = y("TweenLite",
                        function(t, i, n) {
                                if (A.call(this, i, n), this.render = C.prototype.render, null == t) throw "Cannot tween a null target.";
                                this.target = t = "string" != typeof t ? t: C.selector(t) || t;
                                var r, s, a, o = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                                h = this.vars.overwrite;
                                if (this._overwrite = h = null == h ? V[C.defaultOverwrite] : "number" == typeof h ? h >> 0 : V[h], (o || t instanceof Array || t.push && d(t)) && "number" != typeof t[0]) for (this._targets = a = p(t), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) s = a[r],
                                s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(p(s))) : (this._siblings[r] = $(s, this, !1), 1 === h && this._siblings[r].length > 1 && W(s, this, null, 1, this._siblings[r])) : (s = a[r--] = C.selector(s), "string" == typeof s && a.splice(r + 1, 1)) : a.splice(r--, 1);
                                else this._propLookup = {},
                                this._siblings = $(t, this, !1),
                                1 === h && this._siblings.length > 1 && W(t, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -f, this.render( - this._delay))
                        },
                        !0),
                        N = function(t) {
                                return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                        },
                        I = function(t, e) {
                                var i, n = {};
                                for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                                t.css = n
                        };
                        o = C.prototype = new A,
                        o.constructor = C,
                        o.kill()._gc = !1,
                        o.ratio = 0,
                        o._firstPT = o._targets = o._overwrittenProps = o._startAt = null,
                        o._notifyPluginsOfEnabled = o._lazy = !1,
                        C.version = "1.13.2",
                        C.defaultEase = o._ease = new x(null, null, 1, 1),
                        C.defaultOverwrite = "auto",
                        C.ticker = h,
                        C.autoSleep = !0,
                        C.lagSmoothing = function(t, e) {
                                h.lagSmoothing(t, e)
                        },
                        C.selector = e.$ || e.jQuery ||
                        function(t) {
                                var i = e.$ || e.jQuery;
                                return i ? (C.selector = i, i(t)) : "undefined" == typeof document ? t: document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                        };
                        var z = [],
                        X = {},
                        Y = C._internals = {
                                isArray: d,
                                isSelector: N,
                                lazyTweens: z
                        },
                        F = C._plugins = {},
                        L = Y.tweenLookup = {},
                        j = 0,
                        U = Y.reservedProps = {
                                ease: 1,
                                delay: 1,
                                overwrite: 1,
                                onComplete: 1,
                                onCompleteParams: 1,
                                onCompleteScope: 1,
                                useFrames: 1,
                                runBackwards: 1,
                                startAt: 1,
                                onUpdate: 1,
                                onUpdateParams: 1,
                                onUpdateScope: 1,
                                onStart: 1,
                                onStartParams: 1,
                                onStartScope: 1,
                                onReverseComplete: 1,
                                onReverseCompleteParams: 1,
                                onReverseCompleteScope: 1,
                                onRepeat: 1,
                                onRepeatParams: 1,
                                onRepeatScope: 1,
                                easeParams: 1,
                                yoyo: 1,
                                immediateRender: 1,
                                repeat: 1,
                                repeatDelay: 1,
                                data: 1,
                                paused: 1,
                                reversed: 1,
                                autoCSS: 1,
                                lazy: 1
                        },
                        V = {
                                none: 0,
                                all: 1,
                                auto: 2,
                                concurrent: 3,
                                allOnStart: 4,
                                preexisting: 5,
                                true: 1,
                                false: 0
                        },
                        H = A._rootFramesTimeline = new M,
                        B = A._rootTimeline = new M,
                        q = Y.lazyRender = function() {
                                var t = z.length;
                                for (X = {}; --t > -1;) s = z[t],
                                s && s._lazy !== !1 && (s.render(s._lazy[0], s._lazy[1], !0), s._lazy = !1);
                                z.length = 0
                        };
                        B._startTime = h.time,
                        H._startTime = h.frame,
                        B._active = H._active = !0,
                        setTimeout(q, 1),
                        A._updateRoot = C.render = function() {
                                var t, e, i;
                                if (z.length && q(), B.render((h.time - B._startTime) * B._timeScale, !1, !1), H.render((h.frame - H._startTime) * H._timeScale, !1, !1), z.length && q(), !(h.frame % 120)) {
                                        for (i in L) {
                                                for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                                0 === e.length && delete L[i]
                                        }
                                        if (i = B._first, (!i || i._paused) && C.autoSleep && !H._first && 1 === h._listeners.tick.length) {
                                                for (; i && i._paused;) i = i._next;
                                                i || h.sleep()
                                        }
                                }
                        },
                        h.addEventListener("tick", A._updateRoot);
                        var $ = function(t, e, i) {
                                var n, r, s = t._gsTweenID;
                                if (L[s || (t._gsTweenID = s = "t" + j++)] || (L[s] = {
                                        target: t,
                                        tweens: []
                                }), e && (n = L[s].tweens, n[r = n.length] = e, i)) for (; --r > -1;) n[r] === e && n.splice(r, 1);
                                return L[s].tweens
                        },
                        W = function(t, e, i, n, r) {
                                var s, a, o, h;
                                if (1 === n || n >= 4) {
                                        for (h = r.length, s = 0; s < h; s++) if ((o = r[s]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                                        else if (5 === n) break;
                                        return a
                                }
                                var l, u = e._startTime + f,
                                c = [],
                                p = 0,
                                _ = 0 === e._duration;
                                for (s = r.length; --s > -1;)(o = r[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Z(e, 0, _), 0 === Z(o, l, _) && (c[p++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((_ || !o._initted) && u - o._startTime <= 2e-10 || (c[p++] = o)));
                                for (s = p; --s > -1;) o = c[s],
                                2 === n && o._kill(i, t) && (a = !0),
                                (2 !== n || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                                return a
                        },
                        Z = function(t, e, i) {
                                for (var n = t._timeline,
                                r = n._timeScale,
                                s = t._startTime; n._timeline;) {
                                        if (s += n._startTime, r *= n._timeScale, n._paused) return - 100;
                                        n = n._timeline
                                }
                                return s /= r,
                                s > e ? s - e: i && s === e || !t._initted && s - e < 2 * f ? f: (s += t.totalDuration() / t._timeScale / r) > e + f ? 0 : s - e - f
                        };
                        o._init = function() {
                                var t, e, i, n, r, s = this.vars,
                                a = this._overwrittenProps,
                                o = this._duration,
                                h = !!s.immediateRender,
                                l = s.ease;
                                if (s.startAt) {
                                        this._startAt && (this._startAt.render( - 1, !0), this._startAt.kill()),
                                        r = {};
                                        for (n in s.startAt) r[n] = s.startAt[n];
                                        if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = C.to(this.target, 0, r), h) if (this._time > 0) this._startAt = null;
                                        else if (0 !== o) return
                                } else if (s.runBackwards && 0 !== o) if (this._startAt) this._startAt.render( - 1, !0),
                                this._startAt.kill(),
                                this._startAt = null;
                                else {
                                        0 !== this._time && (h = !1),
                                        i = {};
                                        for (n in s) U[n] && "autoCSS" !== n || (i[n] = s[n]);
                                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && s.lazy !== !1, i.immediateRender = h, this._startAt = C.to(this.target, 0, i), h) {
                                                if (0 === this._time) return
                                        } else this._startAt._init(),
                                        this._startAt._enabled(!1),
                                        this.vars.immediateRender && (this._startAt = null)
                                }
                                if (this._ease = l = l ? l instanceof x ? l: "function" == typeof l ? new x(l, s.easeParams) : w[l] || C.defaultEase: C.defaultEase, s.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {},
                                this._siblings[t], a ? a[t] : null) && (e = !0);
                                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                                if (e && C._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards) for (i = this._firstPT; i;) i.s += i.c,
                                i.c = -i.c,
                                i = i._next;
                                this._onUpdate = s.onUpdate,
                                this._initted = !0
                        },
                        o._initProps = function(t, i, n, r) {
                                var s, a, o, h, l, u;
                                if (null == t) return ! 1;
                                X[t._gsTweenID] && q(),
                                this.vars.css || t.style && t !== e && t.nodeType && F.css && this.vars.autoCSS !== !1 && I(this.vars, t);
                                for (s in this.vars) {
                                        if (u = this.vars[s], U[s]) u && (u instanceof Array || u.push && d(u)) && u.join("").indexOf("{self}") !== -1 && (this.vars[s] = u = this._swapSelfInParams(u, this));
                                        else if (F[s] && (h = new F[s])._onInitTween(t, this.vars[s], this)) {
                                                for (this._firstPT = l = {
                                                        _next: this._firstPT,
                                                        t: h,
                                                        p: "setRatio",
                                                        s: 0,
                                                        c: 1,
                                                        f: !0,
                                                        n: s,
                                                        pg: !0,
                                                        pr: h._priority
                                                },
                                                a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT; (h._priority || h._onInitAllProps) && (o = !0),
                                                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                                        } else this._firstPT = i[s] = l = {
                                                _next: this._firstPT,
                                                t: t,
                                                p: s,
                                                f: "function" == typeof t[s],
                                                n: s,
                                                pg: !1,
                                                pr: 0
                                        },
                                        l.s = l.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s: "get" + s.substr(3)]() : parseFloat(t[s]),
                                        l.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - l.s || 0;
                                        l && l._next && (l._next._prev = l)
                                }
                                return r && this._kill(r, t) ? this._initProps(t, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && W(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (X[t._gsTweenID] = !0), o)
                        },
                        o.render = function(t, e, i) {
                                var n, r, s, a, o = this._time,
                                h = this._duration,
                                l = this._rawPrevTime;
                                if (t >= h) this._totalTime = this._time = h,
                                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                                this._reversed || (n = !0, r = "onComplete"),
                                0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || l < 0 || l === f) && l !== t && (i = !0, l > f && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t: f);
                                else if (t < 1e-7) this._totalTime = this._time = 0,
                                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                                (0 !== o || 0 === h && l > 0 && l !== f) && (r = "onReverseComplete", n = this._reversed),
                                t < 0 && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t: f)),
                                this._initted || (i = !0);
                                else if (this._totalTime = this._time = t, this._easeType) {
                                        var u = t / h,
                                        c = this._easeType,
                                        p = this._easePower; (1 === c || 3 === c && u >= .5) && (u = 1 - u),
                                        3 === c && (u *= 2),
                                        1 === p ? u *= u: 2 === p ? u *= u * u: 3 === p ? u *= u * u * u: 4 === p && (u *= u * u * u * u),
                                        1 === c ? this.ratio = 1 - u: 2 === c ? this.ratio = u: t / h < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                                } else this.ratio = this._ease.getRatio(t / h);
                                if (this._time !== o || i) {
                                        if (!this._initted) {
                                                if (this._init(), !this._initted || this._gc) return;
                                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o,
                                                this._rawPrevTime = l,
                                                z.push(this),
                                                void(this._lazy = [t, e]);
                                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / h) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                                        }
                                        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== h || e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || b))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s,
                                        s = s._next;
                                        this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== o || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b)),
                                        r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || b), 0 === h && this._rawPrevTime === f && a !== f && (this._rawPrevTime = 0)))
                                }
                        },
                        o._kill = function(t, e) {
                                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1,
                                this._enabled(!1, !1);
                                e = "string" != typeof e ? e || this._targets || this.target: C.selector(e) || e;
                                var n, r, s, a, o, h, l, u;
                                if ((d(e) || N(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;) this._kill(t, e[n]) && (h = !0);
                                else {
                                        if (this._targets) {
                                                for (n = this._targets.length; --n > -1;) if (e === this._targets[n]) {
                                                        o = this._propLookup[n] || {},
                                                        this._overwrittenProps = this._overwrittenProps || [],
                                                        r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {}: "all";
                                                        break
                                                }
                                        } else {
                                                if (e !== this.target) return ! 1;
                                                o = this._propLookup,
                                                r = this._overwrittenProps = t ? this._overwrittenProps || {}: "all"
                                        }
                                        if (o) {
                                                l = t || o,
                                                u = t !== r && "all" !== r && t !== o && ("object" !== ("undefined" == typeof t ? "undefined": i(t)) || !t._tempKill);
                                                for (s in l)(a = o[s]) && (a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next: a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]),
                                                u && (r[s] = 1); ! this._firstPT && this._initted && this._enabled(!1, !1)
                                        }
                                }
                                return h
                        },
                        o.invalidate = function() {
                                return this._notifyPluginsOfEnabled && C._onPluginEvent("_onDisable", this),
                                this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                                this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                                this._propLookup = this._targets ? {}: [],
                                A.prototype.invalidate.call(this),
                                this.vars.immediateRender && (this._time = -f, this.render( - this._delay)),
                                this
                        },
                        o._enabled = function(t, e) {
                                if (l || h.wake(), t && this._gc) {
                                        var i, n = this._targets;
                                        if (n) for (i = n.length; --i > -1;) this._siblings[i] = $(n[i], this, !0);
                                        else this._siblings = $(this.target, this, !0)
                                }
                                return A.prototype._enabled.call(this, t, e),
                                !(!this._notifyPluginsOfEnabled || !this._firstPT) && C._onPluginEvent(t ? "_onEnable": "_onDisable", this)
                        },
                        C.to = function(t, e, i) {
                                return new C(t, e, i)
                        },
                        C.from = function(t, e, i) {
                                return i.runBackwards = !0,
                                i.immediateRender = 0 != i.immediateRender,
                                new C(t, e, i)
                        },
                        C.fromTo = function(t, e, i, n) {
                                return n.startAt = i,
                                n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                                new C(t, e, n)
                        },
                        C.delayedCall = function(t, e, i, n, r) {
                                return new C(e, 0, {
                                        delay: t,
                                        onComplete: e,
                                        onCompleteParams: i,
                                        onCompleteScope: n,
                                        onReverseComplete: e,
                                        onReverseCompleteParams: i,
                                        onReverseCompleteScope: n,
                                        immediateRender: !1,
                                        useFrames: r,
                                        overwrite: 0
                                })
                        },
                        C.set = function(t, e) {
                                return new C(t, 0, e)
                        },
                        C.getTweensOf = function(t, e) {
                                if (null == t) return [];
                                t = "string" != typeof t ? t: C.selector(t) || t;
                                var i, n, r, s;
                                if ((d(t) || N(t)) && "number" != typeof t[0]) {
                                        for (i = t.length, n = []; --i > -1;) n = n.concat(C.getTweensOf(t[i], e));
                                        for (i = n.length; --i > -1;) for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                                } else for (n = $(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                                return n
                        },
                        C.killTweensOf = C.killDelayedCallsTo = function(t, e, n) {
                                "object" === ("undefined" == typeof e ? "undefined": i(e)) && (n = e, e = !1);
                                for (var r = C.getTweensOf(t, e), s = r.length; --s > -1;) r[s]._kill(n, t)
                        };
                        var Q = y("plugins.TweenPlugin",
                        function(t, e) {
                                this._overwriteProps = (t || "").split(","),
                                this._propName = this._overwriteProps[0],
                                this._priority = e || 0,
                                this._super = Q.prototype
                        },
                        !0);
                        if (o = Q.prototype, Q.version = "1.10.1", Q.API = 2, o._firstPT = null, o._addTween = function(t, e, i, n, r, s) {
                                var a, o;
                                if (null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i: parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)))) return this._firstPT = o = {
                                        _next: this._firstPT,
                                        t: t,
                                        p: e,
                                        s: i,
                                        c: a,
                                        f: "function" == typeof t[e],
                                        n: r || e,
                                        r: s
                                },
                                o._next && (o._next._prev = o),
                                o
                        },
                        o.setRatio = function(t) {
                                for (var e, i = this._firstPT,
                                n = 1e-6; i;) e = i.c * t + i.s,
                                i.r ? e = Math.round(e) : e < n && e > -n && (e = 0),
                                i.f ? i.t[i.p](e) : i.t[i.p] = e,
                                i = i._next
                        },
                        o._kill = function(t) {
                                var e, i = this._overwriteProps,
                                n = this._firstPT;
                                if (null != t[this._propName]) this._overwriteProps = [];
                                else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                                n = n._next;
                                return ! 1
                        },
                        o._roundProps = function(t, e) {
                                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
                                i = i._next
                        },
                        C._onPluginEvent = function(t, e) {
                                var i, n, r, s, a, o = e._firstPT;
                                if ("_onInitAllProps" === t) {
                                        for (; o;) {
                                                for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next; (o._prev = n ? n._prev: s) ? o._prev._next = o: r = o,
                                                (o._next = n) ? n._prev = o: s = o,
                                                o = a
                                        }
                                        o = e._firstPT = r
                                }
                                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                                o = o._next;
                                return i
                        },
                        Q.activate = function(t) {
                                for (var e = t.length; --e > -1;) t[e].API === Q.API && (F[(new t[e])._propName] = t[e]);
                                return ! 0
                        },
                        v.plugin = function(t) {
                                if (! (t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                                var e, i = t.propName,
                                n = t.priority || 0,
                                r = t.overwriteProps,
                                s = {
                                        init: "_onInitTween",
                                        set: "setRatio",
                                        kill: "_kill",
                                        round: "_roundProps",
                                        initAll: "_onInitAllProps"
                                },
                                a = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                                function() {
                                        Q.call(this, i, n),
                                        this._overwriteProps = r || []
                                },
                                t.global === !0),
                                o = a.prototype = new Q(i);
                                o.constructor = a,
                                a.API = t.API;
                                for (e in s)"function" == typeof t[e] && (o[s[e]] = t[e]);
                                return a.version = t.version,
                                Q.activate([a]),
                                a
                        },
                        s = e._gsQueue) {
                                for (a = 0; a < s.length; a++) s[a]();
                                for (o in m) m[o].func || e.console.log("GSAP encountered missing dependency: com.greensock." + o)
                        }
                        l = !1
                }
        } ("undefined" != typeof t && t.exports && "undefined" != typeof global ? global: window, "TweenMax")
}]);