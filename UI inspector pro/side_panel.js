(() => {
    "use strict";
    var e = {};
    function t(e) {
        return function () {
            for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                r[a] = arguments[a];
            return new Promise(function (t, a) {
                e.apply(
                    void 0,
                    r.concat([
                        function (e) {
                            chrome.runtime.lastError
                                ? a(
                                    new Error(
                                        chrome.runtime.lastError.message ||
                                        JSON.stringify(chrome.runtime.lastError)
                                    )
                                )
                                : t(e);
                        },
                    ])
                );
            });
        };
    }
    (e.tabsQuery = t(chrome.tabs.query.bind(chrome.tabs))),
        (e.tabsCreate = t(chrome.tabs.create.bind(chrome.tabs))),
        (e.executeScript = t(
            chrome.scripting.executeScript.bind(chrome.scripting)
        )),
        (e.sendMessageToTab = t(chrome.tabs.sendMessage.bind(chrome.tabs))),
        (e.sendMessage = t(chrome.runtime.sendMessage.bind(chrome.runtime))),
        (e.storageLocalGet = t(
            chrome.storage.local.get.bind(chrome.storage.local)
        )),
        (e.storageLocalSet = t(
            chrome.storage.local.set.bind(chrome.storage.local)
        )),
        (e.storageLocalRemove = t(
            chrome.storage.local.remove.bind(chrome.storage.local)
        )),
        (e.onPageChangedRemoveRules = t(
            chrome.declarativeContent.onPageChanged.removeRules.bind(
                chrome.declarativeContent.onPageChanged
            )
        )),
        (e.onPageChangedAddRules = t(
            chrome.declarativeContent.onPageChanged.addRules.bind(
                chrome.declarativeContent.onPageChanged
            )
        )),
        (e.actionDisable = t(chrome.action.disable.bind(chrome.action))),
        (e.setActionIcon = t(chrome.action.setIcon.bind(chrome.action))),
        (e.captureTab = t(chrome.tabs.captureVisibleTab.bind(chrome.tabs)));
    const r = e;
    function a(e) {
        return (
            (a =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                    }
                    : function (e) {
                        return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                    }),
            a(e)
        );
    }
    function n() {
        n = function () {
            return t;
        };
        var e,
            t = {},
            r = Object.prototype,
            o = r.hasOwnProperty,
            c =
                Object.defineProperty ||
                function (e, t, r) {
                    e[t] = r.value;
                },
            l = "function" == typeof Symbol ? Symbol : {},
            u = l.iterator || "@@iterator",
            i = l.asyncIterator || "@@asyncIterator",
            s = l.toStringTag || "@@toStringTag";
        function d(e, t, r) {
            return (
                Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                }),
                e[t]
            );
        }
        try {
            d({}, "");
        } catch (e) {
            d = function (e, t, r) {
                return (e[t] = r);
            };
        }
        function p(e, t, r, a) {
            var n = t && t.prototype instanceof m ? t : m,
                o = Object.create(n.prototype),
                l = new N(a || []);
            return c(o, "_invoke", { value: _(e, r, l) }), o;
        }
        function f(e, t, r) {
            try {
                return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
                return { type: "throw", arg: e };
            }
        }
        t.wrap = p;
        var v = "suspendedStart",
            b = "suspendedYield",
            h = "executing",
            y = "completed",
            g = {};
        function m() { }
        function x() { }
        function k() { }
        var S = {};
        d(S, u, function () {
            return this;
        });
        var w = Object.getPrototypeOf,
            q = w && w(w(I([])));
        q && q !== r && o.call(q, u) && (S = q);
        var E = (k.prototype = m.prototype = Object.create(S));
        function T(e) {
            ["next", "throw", "return"].forEach(function (t) {
                d(e, t, function (e) {
                    return this._invoke(t, e);
                });
            });
        }
        function L(e, t) {
            function r(n, c, l, u) {
                var i = f(e[n], e, c);
                if ("throw" !== i.type) {
                    var s = i.arg,
                        d = s.value;
                    return d && "object" == a(d) && o.call(d, "__await")
                        ? t.resolve(d.__await).then(
                            function (e) {
                                r("next", e, l, u);
                            },
                            function (e) {
                                r("throw", e, l, u);
                            }
                        )
                        : t.resolve(d).then(
                            function (e) {
                                (s.value = e), l(s);
                            },
                            function (e) {
                                return r("throw", e, l, u);
                            }
                        );
                }
                u(i.arg);
            }
            var n;
            c(this, "_invoke", {
                value: function (e, a) {
                    function o() {
                        return new t(function (t, n) {
                            r(e, a, t, n);
                        });
                    }
                    return (n = n ? n.then(o, o) : o());
                },
            });
        }
        function _(t, r, a) {
            var n = v;
            return function (o, c) {
                if (n === h) throw Error("Generator is already running");
                if (n === y) {
                    if ("throw" === o) throw c;
                    return { value: e, done: !0 };
                }
                for (a.method = o, a.arg = c; ;) {
                    var l = a.delegate;
                    if (l) {
                        var u = C(l, a);
                        if (u) {
                            if (u === g) continue;
                            return u;
                        }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if (n === v) throw ((n = y), a.arg);
                        a.dispatchException(a.arg);
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    n = h;
                    var i = f(t, r, a);
                    if ("normal" === i.type) {
                        if (((n = a.done ? y : b), i.arg === g)) continue;
                        return { value: i.arg, done: a.done };
                    }
                    "throw" === i.type &&
                        ((n = y), (a.method = "throw"), (a.arg = i.arg));
                }
            };
        }
        function C(t, r) {
            var a = r.method,
                n = t.iterator[a];
            if (n === e)
                return (
                    (r.delegate = null),
                    ("throw" === a &&
                        t.iterator.return &&
                        ((r.method = "return"),
                            (r.arg = e),
                            C(t, r),
                            "throw" === r.method)) ||
                    ("return" !== a &&
                        ((r.method = "throw"),
                            (r.arg = new TypeError(
                                "The iterator does not provide a '" + a + "' method"
                            )))),
                    g
                );
            var o = f(n, t.iterator, r.arg);
            if ("throw" === o.type)
                return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), g;
            var c = o.arg;
            return c
                ? c.done
                    ? ((r[t.resultName] = c.value),
                        (r.next = t.nextLoc),
                        "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                        (r.delegate = null),
                        g)
                    : c
                : ((r.method = "throw"),
                    (r.arg = new TypeError("iterator result is not an object")),
                    (r.delegate = null),
                    g);
        }
        function M(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
        }
        function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(M, this),
                this.reset(!0);
        }
        function I(t) {
            if (t || "" === t) {
                var r = t[u];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        c = function r() {
                            for (; ++n < t.length;)
                                if (o.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                            return (r.value = e), (r.done = !0), r;
                        };
                    return (c.next = c);
                }
            }
            throw new TypeError(a(t) + " is not iterable");
        }
        return (
            (x.prototype = k),
            c(E, "constructor", { value: k, configurable: !0 }),
            c(k, "constructor", { value: x, configurable: !0 }),
            (x.displayName = d(k, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                    !!t && (t === x || "GeneratorFunction" === (t.displayName || t.name))
                );
            }),
            (t.mark = function (e) {
                return (
                    Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, k)
                        : ((e.__proto__ = k), d(e, s, "GeneratorFunction")),
                    (e.prototype = Object.create(E)),
                    e
                );
            }),
            (t.awrap = function (e) {
                return { __await: e };
            }),
            T(L.prototype),
            d(L.prototype, i, function () {
                return this;
            }),
            (t.AsyncIterator = L),
            (t.async = function (e, r, a, n, o) {
                void 0 === o && (o = Promise);
                var c = new L(p(e, r, a, n), o);
                return t.isGeneratorFunction(r)
                    ? c
                    : c.next().then(function (e) {
                        return e.done ? e.value : c.next();
                    });
            }),
            T(E),
            d(E, s, "Generator"),
            d(E, u, function () {
                return this;
            }),
            d(E, "toString", function () {
                return "[object Generator]";
            }),
            (t.keys = function (e) {
                var t = Object(e),
                    r = [];
                for (var a in t) r.push(a);
                return (
                    r.reverse(),
                    function e() {
                        for (; r.length;) {
                            var a = r.pop();
                            if (a in t) return (e.value = a), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                    }
                );
            }),
            (t.values = I),
            (N.prototype = {
                constructor: N,
                reset: function (t) {
                    if (
                        ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = e),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = "next"),
                            (this.arg = e),
                            this.tryEntries.forEach(A),
                            !t)
                    )
                        for (var r in this)
                            "t" === r.charAt(0) &&
                                o.call(this, r) &&
                                !isNaN(+r.slice(1)) &&
                                (this[r] = e);
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var r = this;
                    function a(a, n) {
                        return (
                            (l.type = "throw"),
                            (l.arg = t),
                            (r.next = a),
                            n && ((r.method = "next"), (r.arg = e)),
                            !!n
                        );
                    }
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var c = this.tryEntries[n],
                            l = c.completion;
                        if ("root" === c.tryLoc) return a("end");
                        if (c.tryLoc <= this.prev) {
                            var u = o.call(c, "catchLoc"),
                                i = o.call(c, "finallyLoc");
                            if (u && i) {
                                if (this.prev < c.catchLoc) return a(c.catchLoc, !0);
                                if (this.prev < c.finallyLoc) return a(c.finallyLoc);
                            } else if (u) {
                                if (this.prev < c.catchLoc) return a(c.catchLoc, !0);
                            } else {
                                if (!i) throw Error("try statement without catch or finally");
                                if (this.prev < c.finallyLoc) return a(c.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (
                            a.tryLoc <= this.prev &&
                            o.call(a, "finallyLoc") &&
                            this.prev < a.finallyLoc
                        ) {
                            var n = a;
                            break;
                        }
                    }
                    n &&
                        ("break" === e || "continue" === e) &&
                        n.tryLoc <= t &&
                        t <= n.finallyLoc &&
                        (n = null);
                    var c = n ? n.completion : {};
                    return (
                        (c.type = e),
                        (c.arg = t),
                        n
                            ? ((this.method = "next"), (this.next = n.finallyLoc), g)
                            : this.complete(c)
                    );
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                        "break" === e.type || "continue" === e.type
                            ? (this.next = e.arg)
                            : "return" === e.type
                                ? ((this.rval = this.arg = e.arg),
                                    (this.method = "return"),
                                    (this.next = "end"))
                                : "normal" === e.type && t && (this.next = t),
                        g
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc), A(r), g;
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var a = r.completion;
                            if ("throw" === a.type) {
                                var n = a.arg;
                                A(r);
                            }
                            return n;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (t, r, a) {
                    return (
                        (this.delegate = { iterator: I(t), resultName: r, nextLoc: a }),
                        "next" === this.method && (this.arg = e),
                        g
                    );
                },
            }),
            t
        );
    }
    function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
                (a = a.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, a);
        }
        return r;
    }
    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? o(Object(r), !0).forEach(function (t) {
                    l(e, t, r[t]);
                })
                : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : o(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
        }
        return e;
    }
    function l(e, t, r) {
        return (
            (t = (function (e) {
                var t = (function (e, t) {
                    if ("object" != a(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != a(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == a(t) ? t : t + "";
            })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                })
                : (e[t] = r),
            e
        );
    }
    function u(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return p(e);
            })(e) ||
            (function (e) {
                if (
                    ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                )
                    return Array.from(e);
            })(e) ||
            d(e) ||
            (function () {
                throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function i(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var r =
                    null == e
                        ? null
                        : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                if (null != r) {
                    var a,
                        n,
                        o,
                        c,
                        l = [],
                        u = !0,
                        i = !1;
                    try {
                        if (((o = (r = r.call(e)).next), 0 === t)) {
                            if (Object(r) !== r) return;
                            u = !1;
                        } else
                            for (
                                ;
                                !(u = (a = o.call(r)).done) &&
                                (l.push(a.value), l.length !== t);
                                u = !0
                            );
                    } catch (e) {
                        (i = !0), (n = e);
                    } finally {
                        try {
                            if (!u && null != r.return && ((c = r.return()), Object(c) !== c))
                                return;
                        } finally {
                            if (i) throw n;
                        }
                    }
                    return l;
                }
            })(e, t) ||
            d(e, t) ||
            (function () {
                throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }
    function s(e, t) {
        var r =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (!r) {
            if (
                Array.isArray(e) ||
                (r = d(e)) ||
                (t && e && "number" == typeof e.length)
            ) {
                r && (e = r);
                var a = 0,
                    n = function () { };
                return {
                    s: n,
                    n: function () {
                        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: n,
                };
            }
            throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
        }
        var o,
            c = !0,
            l = !1;
        return {
            s: function () {
                r = r.call(e);
            },
            n: function () {
                var e = r.next();
                return (c = e.done), e;
            },
            e: function (e) {
                (l = !0), (o = e);
            },
            f: function () {
                try {
                    c || null == r.return || r.return();
                } finally {
                    if (l) throw o;
                }
            },
        };
    }
    function d(e, t) {
        if (e) {
            if ("string" == typeof e) return p(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? p(e, t)
                        : void 0
            );
        }
    }
    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
        return a;
    }
    function f(e, t, r, a, n, o, c) {
        try {
            var l = e[o](c),
                u = l.value;
        } catch (e) {
            return void r(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(a, n);
    }
    function v(e) {
        return function () {
            var t = this,
                r = arguments;
            return new Promise(function (a, n) {
                var o = e.apply(t, r);
                function c(e) {
                    f(o, a, n, c, l, "next", e);
                }
                function l(e) {
                    f(o, a, n, c, l, "throw", e);
                }
                c(void 0);
            });
        };
    }
    var b = null,
        h = null,
        y = !1,
        g = "$default";
    function m() {
        return (
            (m = v(
                n().mark(function e() {
                    return n().wrap(function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), q();
                                case 2:
                                    return x(), (e.next = 5), L();
                                case 5:
                                    return (e.next = 7), k();
                                case 7:
                                    C(),
                                        (function (e) {
                                            var t,
                                                r = new MutationObserver(
                                                    (function () {
                                                        var e = v(
                                                            n().mark(function e(t) {
                                                                var r, a, o, c;
                                                                return n().wrap(function (e) {
                                                                    for (; ;)
                                                                        switch ((e.prev = e.next)) {
                                                                            case 0:
                                                                                r = s(t);
                                                                                try {
                                                                                    for (r.s(); !(a = r.n()).done;)
                                                                                        "attributes" ===
                                                                                            (o = a.value).type &&
                                                                                            "class" === o.attributeName &&
                                                                                            ((c =
                                                                                                o.target).classList.contains(
                                                                                                    "hidden"
                                                                                                ) ||
                                                                                                ("tab-2" === c.dataset.tab &&
                                                                                                    Oe()));
                                                                                } catch (e) {
                                                                                    r.e(e);
                                                                                } finally {
                                                                                    r.f();
                                                                                }
                                                                            case 2:
                                                                            case "end":
                                                                                return e.stop();
                                                                        }
                                                                }, e);
                                                            })
                                                        );
                                                        return function (t) {
                                                            return e.apply(this, arguments);
                                                        };
                                                    })()
                                                ),
                                                a = s(e);
                                            try {
                                                for (a.s(); !(t = a.n()).done;) {
                                                    var o = t.value;
                                                    r.observe(o, { attributes: !0 });
                                                }
                                            } catch (e) {
                                                a.e(e);
                                            } finally {
                                                a.f();
                                            }
                                        })(document.querySelectorAll("[data-tab]"));
                                case 9:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                })
            )),
            m.apply(this, arguments)
        );
    }
    function x() {
        var e = document.querySelectorAll("[data-localize]");
        if (e) {
            var t,
                r = s(e);
            try {
                for (r.s(); !(t = r.n()).done;) {
                    var a = t.value;
                    a.innerHTML = chrome.i18n.getMessage(a.dataset.localize);
                }
            } catch (e) {
                r.e(e);
            } finally {
                r.f();
            }
        }
        var n = document.querySelectorAll("[data-placeholder]");
        if (n) {
            var o,
                c = s(n);
            try {
                for (c.s(); !(o = c.n()).done;) {
                    var l = o.value;
                    l.placeholder = chrome.i18n.getMessage(l.dataset.placeholder);
                }
            } catch (e) {
                c.e(e);
            } finally {
                c.f();
            }
        }
    }
    function k() {
        return S.apply(this, arguments);
    }
    function S() {
        return (S = v(
            n().mark(function e() {
                var t, a, o, c, l, u, i;
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), r.storageLocalGet({ presets: [] });
                            case 2:
                                if (
                                    ((t = e.sent),
                                        (a = t.presets),
                                        ((o = document.getElementById("preset-list")).innerHTML = ""),
                                        a.length > 0)
                                ) {
                                    c = s(a);
                                    try {
                                        for (c.s(); !(l = c.n()).done;)
                                            (u = l.value), (i = w(u)), o.appendChild(i);
                                    } catch (e) {
                                        c.e(e);
                                    } finally {
                                        c.f();
                                    }
                                }
                            case 7:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function w(e) {
        var t = document.createElement("div");
        t.classList.add("preset-item"), (t.dataset.uid = e.id);
        var r = document.createElement("div");
        r.classList.add("preset-left-detail");
        var a = document.createElement("div");
        a.classList.add("preset-preview");
        var n = document.createElement("div");
        if ((n.classList.add("preset-foreground"), e.CSS)) {
            var o = e.CSS;
            o["background-color"] &&
                (a.style.backgroundColor = o["background-color"]),
                o.color && (n.style.backgroundColor = o.color);
        }
        a.appendChild(n);
        var c = document.createElement("div");
        c.classList.add("preset-label"), (c.textContent = e.name);
        var l = document.createElement("button");
        return (
            l.classList.add("delete-preset"),
            (l.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'),
            r.appendChild(a),
            r.appendChild(c),
            t.appendChild(r),
            t.appendChild(l),
            t
        );
    }
    function q() {
        return E.apply(this, arguments);
    }
    function E() {
        return (E = v(
            n().mark(function e() {
                var t, a, o, c;
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                    (t = document.querySelector(
                                        '[data-control="update-common"]'
                                    )),
                                    (e.next = 3),
                                    r.sendMessage({ target: "background", action: "vps" })
                                );
                            case 3:
                                if ((a = e.sent).success) {
                                    e.next = 15;
                                    break;
                                }
                                if ("ready" !== a.status) {
                                    e.next = 11;
                                    break;
                                }
                                return T(), (t.checked = !1), e.abrupt("return");
                            case 11:
                                if ("offline" !== a.status) {
                                    e.next = 15;
                                    break;
                                }
                                return T(), (t.checked = !1), e.abrupt("return");
                            case 15:
                                return (
                                    (e.next = 17),
                                    r.storageLocalGet({ options: { update_common: !1 } })
                                );
                            case 17:
                                (o = e.sent), (c = o.options), (t.checked = c.update_common);
                            case 20:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function T() {
        var e,
            t = s(document.querySelectorAll(".add-badge"));
        try {
            for (t.s(); !(e = t.n()).done;) {
                var r = e.value,
                    a = document.createElement("span");
                (a.className = "pro-badge"),
                    a.setAttribute("data-localize", "PRO_BADGE"),
                    (a.textContent = chrome.i18n.getMessage("PRO_BADGE") || "PRO"),
                    r.appendChild(a);
            }
        } catch (e) {
            t.e(e);
        } finally {
            t.f();
        }
    }
    function L() {
        return _.apply(this, arguments);
    }
    function _() {
        return (_ = v(
            n().mark(function e() {
                var t, a, o, c;
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                    ((t = null),
                                        (a = new URLSearchParams(window.location.search)),
                                        (o = parseInt(a.get("tabId"), 10)) && (t = parseInt(o, 10)),
                                        t && !isNaN(t))
                                ) {
                                    e.next = 9;
                                    break;
                                }
                                return (
                                    (e.next = 7), r.tabsQuery({ active: !0, currentWindow: !0 })
                                );
                            case 7:
                                (c = e.sent), (t = c[0].id);
                            case 9:
                                b = t;
                            case 10:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function C() {
        document.body.addEventListener("input", F),
            document.body.addEventListener("change", F),
            document.body.addEventListener("click", F),
            document.body.addEventListener("blur", F, !0),
            document.body.addEventListener("keydown", ue),
            document.body.addEventListener("click", O),
            document.body.addEventListener("focus", M, !0),
            document.getElementById("preset-list").addEventListener("click", R),
            document.getElementById("upgrade").addEventListener("click", N),
            document.getElementById("tabs").addEventListener("change", Ie);
        var e = document.getElementById("element-list");
        e.addEventListener("click", Be),
            e.addEventListener("mouseover", De),
            e.addEventListener("mouseout", Ge);
    }
    function M(e) {
        var t = e.target,
            r = t.tagName.toLowerCase();
        (("input" === r && "text" === t.type) || "textarea" === r) && t.select();
    }
    function A() {
        document.getElementById("upgrade").classList.remove("hidden");
    }
    function N(e) {
        return I.apply(this, arguments);
    }
    function I() {
        return (I = v(
            n().mark(function e(t) {
                var a, o, c, l, u, i, s, d;
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                    ((a = t.target),
                                        (o = document.getElementById("upgrade")),
                                        (c = a.closest("#close-dialog")),
                                        (l = a.closest("#subscribe")),
                                        (u = a.closest("#validate-key")),
                                        !c)
                                ) {
                                    e.next = 9;
                                    break;
                                }
                                o.classList.add("hidden"), (e.next = 43);
                                break;
                            case 9:
                                if (!l) {
                                    e.next = 14;
                                    break;
                                }
                                return (
                                    (e.next = 12),
                                    r.sendMessage({
                                        target: "background",
                                        action: "open_payment_page",
                                    })
                                );
                            case 12:
                                e.next = 43;
                                break;
                            case 14:
                                if (!u) {
                                    e.next = 43;
                                    break;
                                }
                                if (
                                    ((i = document.getElementById("license-key-input")),
                                        (s = i.value.trim() || 'chinhcp'))
                                ) {
                                    e.next = 19;
                                    break;
                                }
                                return e.abrupt("return");
                            case 19:
                                return (
                                    (e.next = 21),
                                    r.sendMessage({
                                        target: "background",
                                        action: "validate_license",
                                        licenseKey: s,
                                    })
                                );
                            case 21:
                                if (!(d = e.sent).success) {
                                    e.next = 28;
                                    break;
                                }
                                window.alert(chrome.i18n.getMessage("ALERT_KEY_VALIDATED")),
                                    o.classList.add("hidden"),
                                    We(),
                                    (e.next = 43);
                                break;
                            case 28:
                                (e.t0 = d.status),
                                    (e.next =
                                        "offline" === e.t0
                                            ? 31
                                            : "invalid" === e.t0
                                                ? 33
                                                : "missing_key" === e.t0
                                                    ? 35
                                                    : "revoked" === e.t0
                                                        ? 37
                                                        : "overactivated" === e.t0
                                                            ? 39
                                                            : 41);
                                break;
                            case 31:
                                return (
                                    window.alert(
                                        chrome.i18n.getMessage("ALERT_CANNOT_VALIDATE_KEY")
                                    ),
                                    e.abrupt("break", 43)
                                );
                            case 33:
                                return (
                                    window.alert(chrome.i18n.getMessage("ALERT_INVALID_KEY")),
                                    e.abrupt("break", 43)
                                );
                            case 35:
                                return (
                                    window.alert(chrome.i18n.getMessage("ALERT_NO_KEY_PROVIDED")),
                                    e.abrupt("break", 43)
                                );
                            case 37:
                                return (
                                    window.alert(chrome.i18n.getMessage("ALERT_KEY_REVOKED")),
                                    e.abrupt("break", 43)
                                );
                            case 39:
                                return (
                                    window.alert(
                                        chrome.i18n.getMessage("ALERT_KEY_OVERACTIVATED")
                                    ),
                                    e.abrupt("break", 43)
                                );
                            case 41:
                                return (
                                    window.alert(
                                        chrome.i18n.getMessage("ALERT_UNEXPECTED_ERROR")
                                    ),
                                    e.abrupt("break", 43)
                                );
                            case 43:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function O(e) {
        var t = document.getElementById("preset-list");
        e.target.closest("#preset-list") ||
            e.target.closest(".dropdown-toggle") ||
            t.classList.add("hidden");
    }
    function R(e) {
        return U.apply(this, arguments);
    }
    function U() {
        return (U = v(
            n().mark(function e(t) {
                var a, o, c, l, u, i, s, d, p;
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                    ((a = t.target),
                                        (o = a.closest("[data-uid]")),
                                        (c = document.getElementById("preset-list")),
                                        o)
                                ) {
                                    e.next = 5;
                                    break;
                                }
                                return e.abrupt("return");
                            case 5:
                                return (
                                    (l = o.dataset.uid),
                                    (e.next = 8),
                                    r.storageLocalGet({ presets: [] })
                                );
                            case 8:
                                if (
                                    ((u = e.sent),
                                        (i = u.presets),
                                        !(s = i.find(function (e) {
                                            return e.id === l;
                                        })))
                                ) {
                                    e.next = 27;
                                    break;
                                }
                                if (!a.classList.contains("delete-preset")) {
                                    e.next = 22;
                                    break;
                                }
                                if (
                                    !window.confirm(
                                        chrome.i18n.getMessage("CONFIRM_DELETE_PRESET")
                                    )
                                ) {
                                    e.next = 20;
                                    break;
                                }
                                return (
                                    (d = i.filter(function (e) {
                                        return e.id !== l;
                                    })),
                                    (e.next = 18),
                                    r.storageLocalSet({ presets: d })
                                );
                            case 18:
                                return (e.next = 20), k();
                            case 20:
                                e.next = 27;
                                break;
                            case 22:
                                return (e.next = 25), fe(s, "update_css_with_preset");
                            case 25:
                                (p = e.sent) && ((h = p), B(p), j(p), P(p), D(p), H(p), G(p));
                            case 27:
                                c.classList.add("hidden");
                            case 28:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function j(e) {
        !(function (e, t) {
            var r = t["margin-top"],
                a = t["margin-right"],
                n = t["margin-bottom"],
                o = t["margin-left"],
                c = t["padding-top"],
                l = t["padding-right"],
                u = t["padding-bottom"],
                i = t["padding-left"],
                s = e.querySelector('[data-control="margin-top"]');
            s.value = qe(te(r));
            var d = e.querySelector('[data-control="margin-right"]');
            d.value = qe(te(a));
            var p = e.querySelector('[data-control="margin-bottom"]');
            p.value = qe(te(n));
            var f = e.querySelector('[data-control="margin-left"]');
            f.value = qe(te(o));
            var v = e.querySelector('[data-control="padding-top"]');
            v.value = qe(te(c));
            var b = e.querySelector('[data-control="padding-right"]');
            b.value = qe(te(l));
            var h = e.querySelector('[data-control="padding-bottom"]');
            h.value = qe(te(u));
            var y = e.querySelector('[data-control="padding-left"]');
            y.value = qe(te(i));
        })(document.getElementById("spacing"), e);
    }
    function B(e) {
        var t = document.getElementById("background");
        !(function (e, t) {
            var r = e.querySelector('[data-control="color-input"]'),
                a = e.querySelector('[data-control="color-text"]'),
                n = e.querySelector('[data-control="color-opacity"]'),
                o = t["background-color"],
                c = $(o),
                l = J(o);
            (r.value = c), (a.value = K(c).toUpperCase()), (n.value = l);
        })(t, e),
            (function (e, t) {
                var r = e.querySelector('[data-control="background-blur"]'),
                    a = Y(t["backdrop-filter"]);
                (n = a),
                    0 === Object.keys(n).length
                        ? (r.value = "-")
                        : a.blur
                            ? (r.value = qe(te(a.blur)))
                            : (r.value = "-");
                var n;
            })(t, e);
    }
    function P(e) {
        !(function (e, t) {
            he.apply(this, arguments);
        })(document.getElementById("typography"), e);
    }
    function D(e) {
        !(function (e, t) {
            var r = t.opacity,
                a = t.transform,
                n = t["border-top-left-radius"],
                o = t["border-top-right-radius"],
                c = t["border-bottom-left-radius"],
                l = t["border-bottom-right-radius"],
                i = t["mix-blend-mode"],
                s = e.querySelector('[data-control="opacity"]');
            s.value = oe(r);
            var d = e.querySelector('[data-control="rotation"]');
            d.value = le(a);
            var p = e.querySelector('[data-id="border-radius"]'),
                f = e.querySelector('[data-control="link-border-radius"]');
            (p.querySelector('[data-control="top-left"]').value = qe(te(n))),
                (p.querySelector('[data-control="top-right"]').value = qe(te(o))),
                (p.querySelector('[data-control="bottom-left"]').value = qe(te(c))),
                (p.querySelector('[data-control="bottom-right"]').value = qe(te(l)));
            var v = re(n, o, c, l);
            f.checked = v;
            var b = e.querySelector('[data-control="mix-blend-mode"]');
            u(b.options)
                .map(function (e) {
                    return e.value;
                })
                .includes(i)
                ? (b.value = i)
                : (b.value = "normal");
        })(document.getElementById("appearance"), e);
    }
    function H(e) {
        !(function (e, t) {
            var r = e.querySelector('[data-id="border-width"]'),
                a = e.querySelector('[data-id="border-style"]'),
                n = e.querySelector('[data-id="border-color"]'),
                o = t["border-top-width"],
                c = t["border-right-width"],
                l = t["border-bottom-width"],
                i = t["border-left-width"],
                s = t["border-top-style"],
                d = t["border-right-style"],
                p = t["border-bottom-style"],
                f = t["border-left-style"],
                v = t["border-top-color"],
                b = t["border-right-color"],
                h = t["border-bottom-color"],
                y = t["border-left-color"];
            (r.querySelector('[data-control="top"]').value = qe(te(o))),
                (r.querySelector('[data-control="right"]').value = qe(te(c))),
                (r.querySelector('[data-control="bottom"]').value = qe(te(l))),
                (r.querySelector('[data-control="left"]').value = qe(te(i)));
            var g = r.querySelector('[data-control="link-border-width"]'),
                m = re(o, c, l, i);
            g.checked = m;
            var x = a.querySelector('[data-control="top"]');
            u(x.options).some(function (e) {
                return e.value === s;
            })
                ? (x.value = s)
                : (x.value = "none");
            var k = a.querySelector('[data-control="right"]');
            u(k.options).some(function (e) {
                return e.value === d;
            })
                ? (k.value = d)
                : (k.value = "none");
            var S = a.querySelector('[data-control="bottom"]');
            u(S.options).some(function (e) {
                return e.value === p;
            })
                ? (S.value = p)
                : (S.value = "none");
            var w = a.querySelector('[data-control="left"]');
            u(w.options).some(function (e) {
                return e.value === f;
            })
                ? (w.value = f)
                : (w.value = "none");
            var q = a.querySelector('[data-control="link-border-style"]'),
                E = re(s, d, p, f);
            q.checked = E;
            var T = n.querySelector('[data-id="border-top-color"]'),
                L = T.querySelector('[data-control="color-input"]'),
                _ = T.querySelector('[data-control="color-text"]'),
                C = T.querySelector('[data-control="color-opacity"]'),
                M = $(v),
                A = J(v);
            (L.value = M), (_.value = K(M).toUpperCase()), (C.value = A);
            var N = n.querySelector('[data-id="border-right-color"]'),
                I = N.querySelector('[data-control="color-input"]'),
                O = N.querySelector('[data-control="color-text"]'),
                R = N.querySelector('[data-control="color-opacity"]'),
                U = $(b),
                j = J(b);
            (I.value = U), (O.value = K(U).toUpperCase()), (R.value = j);
            var B = n.querySelector('[data-id="border-bottom-color"]'),
                P = B.querySelector('[data-control="color-input"]'),
                D = B.querySelector('[data-control="color-text"]'),
                H = B.querySelector('[data-control="color-opacity"]'),
                G = $(h),
                F = J(h);
            (P.value = G), (D.value = K(G).toUpperCase()), (H.value = F);
            var z = n.querySelector('[data-id="border-left-color"]'),
                W = z.querySelector('[data-control="color-input"]'),
                V = z.querySelector('[data-control="color-text"]'),
                Y = z.querySelector('[data-control="color-opacity"]'),
                X = $(y),
                Z = J(y);
            (W.value = X), (V.value = K(X).toUpperCase()), (Y.value = Z);
            var Q = n.querySelector('[data-control="link-border-color"]'),
                ee = re(v, b, h, y);
            Q.checked = ee;
        })(document.getElementById("border"), e);
    }
    function G(e) {
        !(function (e, t) {
            var r = t["box-shadow"],
                a = ke(r);
            (e.innerHTML = ""),
                a.forEach(function (t, r) {
                    var a = document.createElement("div");
                    (a.className = "form-stack-item"),
                        a.setAttribute("data-stack", "box-shadow-".concat(r));
                    var n,
                        o,
                        c =
                            ((n = (function (e, t, r, a) {
                                var n = document.createElement("div");
                                (n.className = r), n.setAttribute("data-id", a);
                                var o = document.createElement("div");
                                o.className = "fluid-wide control i-select";
                                var c = document.createElement("select");
                                c.setAttribute("data-control", e),
                                    t.forEach(function (e) {
                                        var t = document.createElement("option");
                                        (t.value = e.value),
                                            (t.textContent = e.text),
                                            e.selected && (t.selected = !0),
                                            c.appendChild(t);
                                    }),
                                    o.appendChild(c),
                                    n.appendChild(o);
                                var l = document.createElement("button");
                                return (
                                    l.setAttribute("data-control", "delete"),
                                    (l.innerHTML =
                                        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>'),
                                    (l.className = "delete-button"),
                                    n.appendChild(l),
                                    n
                                );
                            })(
                                "inset",
                                [
                                    { value: "outset", text: "Outer Shadow", selected: !t.inset },
                                    { value: "inset", text: "Inner Shadow", selected: t.inset },
                                ],
                                "inline-controls control",
                                "inset"
                            )),
                                ((o = document.createElement("div")).className = "form-row"),
                                o.appendChild(n),
                                o);
                    a.appendChild(ye(c));
                    var l = (function (e, t) {
                        var r = document.createElement("div");
                        r.className = "form-row";
                        var a = document.createElement("div");
                        (a.className = "control-binding"), a.setAttribute("data-id", e);
                        var n = document.createElement("div");
                        n.className = "color-input control";
                        var o = document.createElement("input");
                        (o.type = "color"),
                            (o.value = $(t)),
                            o.setAttribute("data-control", "".concat(e, "-input")),
                            n.appendChild(o);
                        var c = document.createElement("div");
                        c.className = "fluid-wide control";
                        var l = document.createElement("input");
                        (l.type = "text"),
                            (l.value = K($(t)).toUpperCase()),
                            l.setAttribute("data-control", "".concat(e, "-text")),
                            c.appendChild(l);
                        var u = document.createElement("div");
                        u.className = "fixed-inline control i-percentage";
                        var i = document.createElement("input");
                        return (
                            (i.type = "text"),
                            (i.value = J(t)),
                            i.setAttribute("data-control", "".concat(e, "-opacity")),
                            u.appendChild(i),
                            a.appendChild(n),
                            a.appendChild(c),
                            a.appendChild(u),
                            r.appendChild(a),
                            r
                        );
                    })("shadow-color", t.color);
                    a.appendChild(ye(l, "Color"));
                    var u = ge(
                        "Offset X",
                        xe(
                            "offset-x",
                            te(t.offsetX),
                            "fluid-wide control i-input",
                            "offset-x"
                        ),
                        "Offset Y",
                        xe(
                            "offset-y",
                            te(t.offsetY),
                            "fluid-wide control i-input",
                            "offset-y"
                        )
                    );
                    a.appendChild(ye(u));
                    var i = ge(
                        "Blur",
                        xe("blur", te(t.blurRadius), "fluid-wide control i-input", "blur"),
                        "Spread",
                        xe(
                            "spread",
                            te(t.spreadRadius),
                            "fluid-wide control i-input",
                            "spread"
                        )
                    );
                    a.appendChild(ye(i)), e.appendChild(a);
                });
        })(
            document
                .getElementById("box-shadow")
                .querySelector('[data-id="box-shadow-items"]'),
            e
        );
    }
    function F(e) {
        return z.apply(this, arguments);
    }
    function z() {
        return (z = v(
            n().mark(function e(t) {
                var a,
                    o,
                    c,
                    l,
                    u,
                    s,
                    d,
                    p,
                    f,
                    v,
                    g,
                    m,
                    x,
                    S,
                    w,
                    q,
                    E,
                    T,
                    L,
                    _,
                    C,
                    M,
                    N,
                    I,
                    O,
                    R,
                    U,
                    j,
                    B,
                    P,
                    D,
                    H,
                    G,
                    F,
                    z,
                    V,
                    X,
                    ee,
                    re,
                    ue,
                    pe,
                    fe,
                    ve,
                    be,
                    he,
                    ye,
                    ge,
                    me,
                    xe,
                    we,
                    Le,
                    Me,
                    Ie,
                    Oe,
                    Re,
                    Be,
                    Pe,
                    De,
                    He,
                    Ge,
                    Fe,
                    ze,
                    We,
                    Ye,
                    $e,
                    Ke,
                    Xe,
                    Ze,
                    Je,
                    Qe,
                    et,
                    tt,
                    rt,
                    at,
                    nt,
                    ot,
                    ct,
                    lt,
                    ut,
                    it,
                    st,
                    dt,
                    pt,
                    ft,
                    vt,
                    bt,
                    ht,
                    yt,
                    gt,
                    mt,
                    xt,
                    kt,
                    St,
                    wt,
                    qt,
                    Et,
                    Tt,
                    Lt,
                    _t,
                    Ct,
                    Mt,
                    At,
                    Nt,
                    It,
                    Ot,
                    Rt,
                    Ut,
                    jt,
                    Bt,
                    Pt,
                    Dt,
                    Ht,
                    Gt,
                    Ft,
                    zt,
                    Wt,
                    Vt,
                    Yt,
                    $t,
                    Kt,
                    Xt,
                    Zt,
                    Jt,
                    Qt,
                    er,
                    tr,
                    rr,
                    ar,
                    nr,
                    or,
                    cr,
                    lr,
                    ur,
                    ir,
                    sr,
                    dr,
                    pr,
                    fr,
                    vr,
                    br,
                    hr,
                    yr,
                    gr,
                    mr,
                    xr,
                    kr,
                    Sr,
                    wr,
                    qr,
                    Er,
                    Tr,
                    Lr,
                    _r,
                    Cr,
                    Mr,
                    Ar,
                    Nr,
                    Ir,
                    Or,
                    Rr,
                    Ur,
                    jr,
                    Br,
                    Pr,
                    Dr,
                    Hr,
                    Gr,
                    Fr,
                    zr,
                    Wr,
                    Vr,
                    Yr,
                    $r,
                    Kr,
                    Xr,
                    Zr,
                    Jr,
                    Qr,
                    ea,
                    ta,
                    ra,
                    aa,
                    na,
                    oa,
                    ca,
                    la,
                    ua,
                    ia,
                    sa,
                    da,
                    pa,
                    fa,
                    va,
                    ba,
                    ha,
                    ya,
                    ga,
                    ma,
                    xa,
                    ka,
                    Sa,
                    wa,
                    qa,
                    Ea,
                    Ta,
                    La,
                    _a,
                    Ca,
                    Ma,
                    Aa,
                    Na,
                    Ia,
                    Oa,
                    Ra,
                    Ua,
                    ja,
                    Ba,
                    Pa,
                    Da,
                    Ha,
                    Ga,
                    Fa,
                    za,
                    Wa,
                    Va,
                    Ya,
                    $a,
                    Ka,
                    Xa,
                    Za,
                    Ja,
                    Qa,
                    en,
                    tn,
                    rn,
                    an,
                    nn,
                    on,
                    cn,
                    ln,
                    un,
                    sn,
                    dn,
                    pn,
                    fn,
                    vn,
                    bn,
                    hn,
                    yn,
                    gn,
                    mn,
                    xn,
                    kn,
                    Sn,
                    wn,
                    qn,
                    En,
                    Tn,
                    Ln,
                    _n,
                    Cn,
                    Mn,
                    An,
                    Nn,
                    In,
                    On,
                    Rn,
                    Un,
                    jn,
                    Bn,
                    Pn,
                    Dn,
                    Hn,
                    Gn,
                    Fn,
                    zn,
                    Wn,
                    Vn,
                    Yn,
                    $n,
                    Kn,
                    Xn,
                    Zn,
                    Jn,
                    Qn,
                    eo,
                    to,
                    ro,
                    ao,
                    no,
                    oo,
                    co,
                    lo,
                    uo,
                    io,
                    so,
                    po,
                    fo,
                    vo,
                    bo,
                    ho,
                    yo,
                    go,
                    mo,
                    xo,
                    ko,
                    So,
                    wo,
                    qo,
                    Eo,
                    To,
                    Lo,
                    _o,
                    Co,
                    Mo,
                    Ao,
                    No,
                    Io,
                    Oo,
                    Ro,
                    Uo,
                    jo,
                    Bo,
                    Po,
                    Do,
                    Ho,
                    Go,
                    Fo,
                    zo,
                    Wo,
                    Vo,
                    Yo,
                    $o,
                    Ko,
                    Xo,
                    Zo,
                    Jo,
                    Qo,
                    ec,
                    tc,
                    rc,
                    ac,
                    nc;
                return n().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if (
                                        ((a = t.target),
                                            (o = a.tagName.toLowerCase()),
                                            (c = t.type),
                                            (l = document.querySelector(
                                                '[data-control="update-common"]'
                                            )),
                                            (u = l.checked ? "update_common_elements" : "update_css"),
                                            (s = a.closest("[data-id]")))
                                    ) {
                                        e.next = 8;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    if ("input" !== c) {
                                        e.next = 92;
                                        break;
                                    }
                                    if (
                                        ((("input" === o && "text" === a.type) ||
                                            "textarea" === o) &&
                                            (y = !0),
                                            "color" === a.type)
                                    ) {
                                        e.next = 12;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 12:
                                    if (!a.closest("#box-shadow")) {
                                        e.next = 20;
                                        break;
                                    }
                                    return (
                                        "shadow-color" === s.dataset.id &&
                                        ((d = s.querySelector(
                                            '[data-control="shadow-color-input"]'
                                        )),
                                            (p = s.querySelector(
                                                '[data-control="shadow-color-text"]'
                                            )),
                                            a === d && (p.value = K(d.value).toUpperCase())),
                                        (f = ie()),
                                        (e.next = 17),
                                        de("box-shadow", f, u)
                                    );
                                case 17:
                                    return (v = e.sent) && (h = v), e.abrupt("return");
                                case 20:
                                    if ("background-color" !== s.dataset.id) {
                                        e.next = 30;
                                        break;
                                    }
                                    return (
                                        (g = null),
                                        (m = s.querySelector('[data-control="color-input"]')),
                                        (x = s.querySelector('[data-control="color-text"]')),
                                        (S = s.querySelector('[data-control="color-opacity"]')),
                                        a === m &&
                                        ((x.value = K(m.value).toUpperCase()),
                                            (g = se(m.value, S.value))),
                                        (e.next = 28),
                                        de("background-color", g, u)
                                    );
                                case 28:
                                    (w = e.sent) && (h = w);
                                case 30:
                                    if ("color" !== s.dataset.id) {
                                        e.next = 40;
                                        break;
                                    }
                                    if (
                                        ((q = s.querySelector('[data-control="color-input"]')),
                                            (E = s.querySelector('[data-control="color-text"]')),
                                            a !== q)
                                    ) {
                                        e.next = 40;
                                        break;
                                    }
                                    return (
                                        (E.value = K(q.value).toUpperCase()),
                                        (T = se(q.value, 100)),
                                        (e.next = 38),
                                        de("color", T, u)
                                    );
                                case 38:
                                    (L = e.sent) && (h = L);
                                case 40:
                                    if (
                                        "border-top-color" !== s.dataset.id &&
                                        "border-right-color" !== s.dataset.id &&
                                        "border-bottom-color" !== s.dataset.id &&
                                        "border-left-color" !== s.dataset.id
                                    ) {
                                        e.next = 92;
                                        break;
                                    }
                                    if (
                                        ((_ = s.querySelector('[data-control="color-input"]')),
                                            (C = s.querySelector('[data-control="color-text"]')),
                                            (M = document.querySelector('[data-id="border-color"]')),
                                            (N = M.querySelector('[data-control="link-border-color"]')),
                                            (I = M.querySelector('[data-id="border-top-color"]')),
                                            (O = I.querySelector('[data-control="color-input"]')),
                                            (R = I.querySelector('[data-control="color-text"]')),
                                            (U = I.querySelector('[data-control="color-opacity"]')),
                                            (j = M.querySelector('[data-id="border-right-color"]')),
                                            (B = j.querySelector('[data-control="color-input"]')),
                                            (P = j.querySelector('[data-control="color-text"]')),
                                            (D = j.querySelector('[data-control="color-opacity"]')),
                                            (H = M.querySelector('[data-id="border-bottom-color"]')),
                                            (G = H.querySelector('[data-control="color-input"]')),
                                            (F = H.querySelector('[data-control="color-text"]')),
                                            (z = H.querySelector('[data-control="color-opacity"]')),
                                            (V = M.querySelector('[data-id="border-left-color"]')),
                                            (X = V.querySelector('[data-control="color-input"]')),
                                            (ee = V.querySelector('[data-control="color-text"]')),
                                            (re = V.querySelector('[data-control="color-opacity"]')),
                                            a !== _)
                                    ) {
                                        e.next = 92;
                                        break;
                                    }
                                    if (!N.checked) {
                                        e.next = 82;
                                        break;
                                    }
                                    return (
                                        (R.value = K(_.value).toUpperCase()),
                                        (P.value = K(_.value).toUpperCase()),
                                        (F.value = K(_.value).toUpperCase()),
                                        (ee.value = K(_.value).toUpperCase()),
                                        (O.value = _.value),
                                        (B.value = _.value),
                                        (G.value = _.value),
                                        (X.value = _.value),
                                        (ue = se(_.value, U.value)),
                                        (pe = se(B.value, D.value)),
                                        (fe = se(G.value, z.value)),
                                        (ve = se(X.value, re.value)),
                                        (be = Ve(ue, pe, fe, ve)),
                                        (e.next = 78),
                                        de("border-color", be, u)
                                    );
                                case 78:
                                    (he = e.sent) && (h = he), (e.next = 92);
                                    break;
                                case 82:
                                    return (
                                        (C.value = K(_.value).toUpperCase()),
                                        (ye = se(_.value, U.value)),
                                        (ge = se(B.value, D.value)),
                                        (me = se(G.value, z.value)),
                                        (xe = se(X.value, re.value)),
                                        (we = Ve(ye, ge, me, xe)),
                                        (e.next = 90),
                                        de("border-color", we, u)
                                    );
                                case 90:
                                    (Le = e.sent) && (h = Le);
                                case 92:
                                    if ("change" !== c) {
                                        e.next = 196;
                                        break;
                                    }
                                    if (
                                        "select" === o ||
                                        ("input" === o &&
                                            ("radio" === a.type || "checkbox" === a.type))
                                    ) {
                                        e.next = 95;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 95:
                                    if (!a.closest("#box-shadow")) {
                                        e.next = 102;
                                        break;
                                    }
                                    return (Me = ie()), (e.next = 99), de("box-shadow", Me, u);
                                case 99:
                                    return (Ie = e.sent) && (h = Ie), e.abrupt("return");
                                case 102:
                                    if ("layout" !== s.dataset.id) {
                                        e.next = 125;
                                        break;
                                    }
                                    if (
                                        ((Oe = s.querySelector('[data-control="display"]')),
                                            (Re = s.querySelector('[data-control="horizontal-align"]')),
                                            (Be = s.querySelector('[data-control="vertical-align"]')),
                                            a !== Oe)
                                    ) {
                                        e.next = 113;
                                        break;
                                    }
                                    return (e.next = 109), de("display", Oe.value, u);
                                case 109:
                                    (Pe = e.sent) && (h = Pe), (e.next = 125);
                                    break;
                                case 113:
                                    if (a !== Re) {
                                        e.next = 120;
                                        break;
                                    }
                                    return (e.next = 116), de("justify-content", Re.value, u);
                                case 116:
                                    (De = e.sent) && (h = De), (e.next = 125);
                                    break;
                                case 120:
                                    if (a !== Be) {
                                        e.next = 125;
                                        break;
                                    }
                                    return (e.next = 123), de("align-items", Be.value, u);
                                case 123:
                                    (He = e.sent) && (h = He);
                                case 125:
                                    if ("font-weight" !== s.dataset.id) {
                                        e.next = 131;
                                        break;
                                    }
                                    return (
                                        (Ge = s.querySelector('[data-control="font-weight"]')),
                                        (e.next = 129),
                                        de("font-weight", Ge.value, u)
                                    );
                                case 129:
                                    (Fe = e.sent) && (h = Fe);
                                case 131:
                                    if ("update-common" !== s.dataset.id) {
                                        e.next = 154;
                                        break;
                                    }
                                    return (
                                        (ze = s.querySelector('[data-control="update-common"]')),
                                        (e.next = 135),
                                        r.sendMessage({ target: "background", action: "vps" })
                                    );
                                case 135:
                                    if ((We = e.sent).success) {
                                        e.next = 147;
                                        break;
                                    }
                                    if ("ready" !== We.status) {
                                        e.next = 143;
                                        break;
                                    }
                                    return A(), (ze.checked = !1), e.abrupt("return");
                                case 143:
                                    if ("offline" !== We.status) {
                                        e.next = 147;
                                        break;
                                    }
                                    return (
                                        window.alert(
                                            chrome.i18n.getMessage("ALERT_CANNOT_VALIDATE_USER")
                                        ),
                                        (ze.checked = !1),
                                        e.abrupt("return")
                                    );
                                case 147:
                                    return (
                                        (e.next = 149),
                                        r.storageLocalGet({ options: { update_common: !1 } })
                                    );
                                case 149:
                                    return (
                                        (Ye = e.sent),
                                        (($e = Ye.options).update_common = ze.checked),
                                        (e.next = 154),
                                        r.storageLocalSet({ options: $e })
                                    );
                                case 154:
                                    if ("text-align" !== s.dataset.id) {
                                        e.next = 159;
                                        break;
                                    }
                                    return (e.next = 157), de("text-align", a.value, u);
                                case 157:
                                    (Ke = e.sent) && (h = Ke);
                                case 159:
                                    if ("mix-blend-mode" !== s.dataset.id) {
                                        e.next = 166;
                                        break;
                                    }
                                    if (
                                        ((Xe = s.querySelector('[data-control="mix-blend-mode"]')),
                                            a !== Xe)
                                    ) {
                                        e.next = 166;
                                        break;
                                    }
                                    return (e.next = 164), de("mix-blend-mode", a.value, u);
                                case 164:
                                    (Ze = e.sent) && (h = Ze);
                                case 166:
                                    if ("border-style" !== s.dataset.id) {
                                        e.next = 196;
                                        break;
                                    }
                                    if (
                                        ((Je = s.querySelector('[data-control="top"]')),
                                            (Qe = s.querySelector('[data-control="right"]')),
                                            (et = s.querySelector('[data-control="bottom"]')),
                                            (tt = s.querySelector('[data-control="left"]')),
                                            (rt = s.querySelector(
                                                '[data-control="link-border-style"]'
                                            )),
                                            a !== rt)
                                    ) {
                                        e.next = 174;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 174:
                                    if (!rt.checked) {
                                        e.next = 186;
                                        break;
                                    }
                                    return (
                                        (Je.value = a.value),
                                        (Qe.value = a.value),
                                        (et.value = a.value),
                                        (tt.value = a.value),
                                        (at = a.value),
                                        (e.next = 182),
                                        de("border-style", at, u)
                                    );
                                case 182:
                                    (nt = e.sent) && (h = nt), (e.next = 196);
                                    break;
                                case 186:
                                    if (a !== Je && a !== Qe && a !== et && a !== tt) {
                                        e.next = 196;
                                        break;
                                    }
                                    return (
                                        (ot = Je.value),
                                        (ct = Qe.value),
                                        (lt = et.value),
                                        (ut = tt.value),
                                        (it = Ve(ot, ct, lt, ut)),
                                        (e.next = 194),
                                        de("border-style", it, u)
                                    );
                                case 194:
                                    (st = e.sent) && (h = st);
                                case 196:
                                    if ("click" !== c) {
                                        e.next = 583;
                                        break;
                                    }
                                    if (
                                        "button" === o ||
                                        ("input" === o && "button" === a.type) ||
                                        "a" === o
                                    ) {
                                        e.next = 199;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 199:
                                    if (!a.closest("#box-shadow")) {
                                        e.next = 211;
                                        break;
                                    }
                                    if ("add-shadow" !== a.dataset.control) {
                                        e.next = 203;
                                        break;
                                    }
                                    return (e.next = 203), Se();
                                case 203:
                                    if ("delete" !== a.dataset.control) {
                                        e.next = 211;
                                        break;
                                    }
                                    return (
                                        a.closest('[data-stack^="box-shadow"]').remove(),
                                        (dt = ie()),
                                        (e.next = 209),
                                        de("box-shadow", dt, u)
                                    );
                                case 209:
                                    (pt = e.sent) && (h = pt);
                                case 211:
                                    if ("selector" !== s.dataset.id) {
                                        e.next = 255;
                                        break;
                                    }
                                    if (
                                        ((ft = s.querySelector('[data-control="parent-selector"]')),
                                            (vt = s.querySelector('[data-control="selector"]')),
                                            (bt = s.querySelector('[data-control="child-selector"]')),
                                            !a.closest('[data-control="parent-selector"]'))
                                    ) {
                                        e.next = 229;
                                        break;
                                    }
                                    if (!(ft.innerText.length > 0)) {
                                        e.next = 227;
                                        break;
                                    }
                                    return (
                                        (e.prev = 217),
                                        (e.next = 220),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "select_parent",
                                        })
                                    );
                                case 220:
                                    e.sent ||
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        (e.next = 227);
                                    break;
                                case 224:
                                    return (
                                        (e.prev = 224), (e.t0 = e.catch(217)), e.abrupt("return")
                                    );
                                case 227:
                                    e.next = 255;
                                    break;
                                case 229:
                                    if (!a.closest('[data-control="selector"]')) {
                                        e.next = 243;
                                        break;
                                    }
                                    if (!(vt.innerText.length > 0)) {
                                        e.next = 241;
                                        break;
                                    }
                                    return (
                                        (e.prev = 231),
                                        (e.next = 234),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "go_to_selected_element",
                                        })
                                    );
                                case 234:
                                    e.sent ||
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        (e.next = 241);
                                    break;
                                case 238:
                                    return (
                                        (e.prev = 238), (e.t1 = e.catch(231)), e.abrupt("return")
                                    );
                                case 241:
                                    e.next = 255;
                                    break;
                                case 243:
                                    if (!a.closest('[data-control="child-selector"]')) {
                                        e.next = 255;
                                        break;
                                    }
                                    if (!(bt.innerText.length > 0)) {
                                        e.next = 255;
                                        break;
                                    }
                                    return (
                                        (e.prev = 245),
                                        (e.next = 248),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "select_child",
                                        })
                                    );
                                case 248:
                                    e.sent ||
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        (e.next = 255);
                                    break;
                                case 252:
                                    return (
                                        (e.prev = 252), (e.t2 = e.catch(245)), e.abrupt("return")
                                    );
                                case 255:
                                    if ("export" !== s.dataset.id) {
                                        e.next = 422;
                                        break;
                                    }
                                    if (
                                        ((ht = s.querySelector('[data-control="export-image"]')),
                                            (yt = s.querySelector(
                                                '[data-control="export-full-image"]'
                                            )),
                                            (gt = s.querySelector('[data-control="export-github"]')),
                                            (mt = s.querySelector('[data-control="config-github"]')),
                                            (xt = s.querySelector('[data-control="copy-css"]')),
                                            a !== ht && a !== yt && a !== gt && a !== mt && a !== xt)
                                    ) {
                                        e.next = 274;
                                        break;
                                    }
                                    return (
                                        (e.next = 264),
                                        r.sendMessage({ target: "background", action: "vps" })
                                    );
                                case 264:
                                    if ((kt = e.sent).success) {
                                        e.next = 274;
                                        break;
                                    }
                                    if ("ready" !== kt.status) {
                                        e.next = 271;
                                        break;
                                    }
                                    return A(), e.abrupt("return");
                                case 271:
                                    if ("offline" !== kt.status) {
                                        e.next = 274;
                                        break;
                                    }
                                    return (
                                        window.alert(
                                            chrome.i18n.getMessage("ALERT_CANNOT_VALIDATE_USER")
                                        ),
                                        e.abrupt("return")
                                    );
                                case 274:
                                    if (a !== ht && a !== yt) {
                                        e.next = 316;
                                        break;
                                    }
                                    return (
                                        (e.prev = 275),
                                        (e.next = 278),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "prepare_for_screenshot",
                                        })
                                    );
                                case 278:
                                    (St = e.sent), (e.next = 285);
                                    break;
                                case 281:
                                    return (
                                        (e.prev = 281),
                                        (e.t3 = e.catch(275)),
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        e.abrupt("return")
                                    );
                                case 285:
                                    if (St.success) {
                                        e.next = 288;
                                        break;
                                    }
                                    return (
                                        window.alert(
                                            chrome.i18n.getMessage("ALERT_NO_SELECTED_ELEMENT")
                                        ),
                                        e.abrupt("return")
                                    );
                                case 288:
                                    return (e.next = 290), r.captureTab();
                                case 290:
                                    return (
                                        (wt = e.sent),
                                        (e.prev = 291),
                                        (e.next = 294),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "screenshot_processed",
                                            scrollPosition: St.scrollPosition,
                                        })
                                    );
                                case 294:
                                    e.next = 300;
                                    break;
                                case 296:
                                    return (
                                        (e.prev = 296),
                                        (e.t4 = e.catch(291)),
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        e.abrupt("return")
                                    );
                                case 300:
                                    if (a !== ht) {
                                        e.next = 308;
                                        break;
                                    }
                                    return (e.next = 303), Te(wt, St.elementPosition);
                                case 303:
                                    (qt = e.sent),
                                        (Et = Ae("element")),
                                        _e(qt, Et),
                                        (e.next = 314);
                                    break;
                                case 308:
                                    if (a !== yt) {
                                        e.next = 314;
                                        break;
                                    }
                                    return (e.next = 311), Ce(wt);
                                case 311:
                                    (Tt = e.sent), (Lt = Ae("viewport")), _e(Tt, Lt);
                                case 314:
                                    e.next = 422;
                                    break;
                                case 316:
                                    if (a !== gt) {
                                        e.next = 361;
                                        break;
                                    }
                                    return (
                                        (e.prev = 317),
                                        (e.next = 320),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_host_name",
                                        })
                                    );
                                case 320:
                                    (_t = e.sent), (e.next = 325);
                                    break;
                                case 323:
                                    (e.prev = 323), (e.t5 = e.catch(317));
                                case 325:
                                    if (_t.hostname && _t.success) {
                                        e.next = 327;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 327:
                                    return (
                                        (Ct = _t.hostname),
                                        (e.next = 330),
                                        r.storageLocalGet({ githubRepos: [] })
                                    );
                                case 330:
                                    if (
                                        ((Mt = e.sent),
                                            (At = Mt.githubRepos),
                                            (Nt = At.findIndex(function (e) {
                                                return e.hostname === Ct;
                                            })),
                                            (It = -1 !== Nt ? At[Nt].repoUrl : W()))
                                    ) {
                                        e.next = 336;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 336:
                                    return (
                                        (e.prev = 336),
                                        (e.next = 339),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_changes_for_element",
                                        })
                                    );
                                case 339:
                                    (Ot = e.sent), (e.next = 346);
                                    break;
                                case 342:
                                    return (
                                        (e.prev = 342),
                                        (e.t6 = e.catch(336)),
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        e.abrupt("return")
                                    );
                                case 346:
                                    if (
                                        Ot.success &&
                                        Ot.changes &&
                                        0 !== Object.keys(Ot.changes).length
                                    ) {
                                        e.next = 349;
                                        break;
                                    }
                                    return (
                                        window.alert(chrome.i18n.getMessage("ALERT_NO_CHANGES")),
                                        e.abrupt("return")
                                    );
                                case 349:
                                    for (
                                        Rt = Ne(Ot.changes),
                                        Ut = Ot.selector,
                                        jt = "".concat(Ut, " {\n"),
                                        Bt = 0,
                                        Pt = Object.entries(Rt);
                                        Bt < Pt.length;
                                        Bt++
                                    )
                                        (Dt = i(Pt[Bt], 2)),
                                            (Ht = Dt[0]),
                                            (Gt = Dt[1]),
                                            (jt += "  ".concat(Ht, ": ").concat(Gt, ";\n"));
                                    return (
                                        (jt += "}"),
                                        (Ft = "Changes for ".concat(Ut)),
                                        (zt = "```css\n".concat(jt, "\n```")),
                                        (Wt = ""
                                            .concat(It, "/issues/new?title=")
                                            .concat(encodeURIComponent(Ft), "&body=")
                                            .concat(encodeURIComponent(zt))),
                                        (e.next = 359),
                                        r.tabsCreate({ url: Wt })
                                    );
                                case 359:
                                    e.next = 422;
                                    break;
                                case 361:
                                    if (a !== mt) {
                                        e.next = 388;
                                        break;
                                    }
                                    return (
                                        (e.prev = 362),
                                        (e.next = 365),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_host_name",
                                        })
                                    );
                                case 365:
                                    (Vt = e.sent), (e.next = 371);
                                    break;
                                case 368:
                                    return (
                                        (e.prev = 368), (e.t7 = e.catch(362)), e.abrupt("return")
                                    );
                                case 371:
                                    if (Vt.hostname && Vt.success) {
                                        e.next = 373;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 373:
                                    return (
                                        (Yt = Vt.hostname),
                                        (e.next = 376),
                                        r.storageLocalGet({ githubRepos: [] })
                                    );
                                case 376:
                                    if (
                                        (($t = e.sent),
                                            (Kt = $t.githubRepos),
                                            (Xt = Kt.findIndex(function (e) {
                                                return e.hostname === Yt;
                                            })),
                                            (Zt = -1 !== Xt ? Kt[Xt].repoUrl : ""),
                                            (Jt = W(Zt)))
                                    ) {
                                        e.next = 383;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 383:
                                    return (
                                        -1 !== Xt
                                            ? (Kt[Xt].repoUrl = Jt)
                                            : Kt.push({ hostname: Yt, repoUrl: Jt }),
                                        (e.next = 386),
                                        r.storageLocalSet({ githubRepos: Kt })
                                    );
                                case 386:
                                    e.next = 422;
                                    break;
                                case 388:
                                    if (a !== xt) {
                                        e.next = 422;
                                        break;
                                    }
                                    return (
                                        (e.prev = 389),
                                        (e.next = 392),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_changes_for_element",
                                        })
                                    );
                                case 392:
                                    (Qt = e.sent), (e.next = 398);
                                    break;
                                case 395:
                                    return (
                                        (e.prev = 395), (e.t8 = e.catch(389)), e.abrupt("return")
                                    );
                                case 398:
                                    if (
                                        Qt.success &&
                                        Qt.changes &&
                                        0 !== Object.keys(Qt.changes).length
                                    ) {
                                        e.next = 401;
                                        break;
                                    }
                                    return (
                                        window.alert(chrome.i18n.getMessage("ALERT_NO_CHANGES")),
                                        e.abrupt("return")
                                    );
                                case 401:
                                    for (
                                        er = Ne(Qt.changes),
                                        tr = Qt.selector,
                                        rr = "".concat(tr, " {\n"),
                                        ar = 0,
                                        nr = Object.entries(er);
                                        ar < nr.length;
                                        ar++
                                    )
                                        (or = i(nr[ar], 2)),
                                            (cr = or[0]),
                                            (lr = or[1]),
                                            (rr += "  ".concat(cr, ": ").concat(lr, ";\n"));
                                    return (
                                        (rr += "}"),
                                        (ur = xt.innerText),
                                        (ir = chrome.i18n.getMessage("LABEL_COPIED")),
                                        (xt.disabled = !0),
                                        (e.prev = 409),
                                        (e.next = 412),
                                        navigator.clipboard.writeText(rr)
                                    );
                                case 412:
                                    e.next = 417;
                                    break;
                                case 414:
                                    (e.prev = 414),
                                        (e.t9 = e.catch(409)),
                                        (ir = chrome.i18n.getMessage("LABEL_COPIED_FAILED"));
                                case 417:
                                    return (
                                        (xt.innerText = ir),
                                        (e.next = 420),
                                        new Promise(function (e) {
                                            return setTimeout(e, 1e3);
                                        })
                                    );
                                case 420:
                                    (xt.innerText = ur), (xt.disabled = !1);
                                case 422:
                                    if ("export-all" !== s.dataset.id) {
                                        e.next = 552;
                                        break;
                                    }
                                    if (
                                        ((sr = s.querySelector(
                                            '[data-control="export-github-all"]'
                                        )),
                                            (dr = s.querySelector('[data-control="config-github"]')),
                                            (pr = s.querySelector('[data-control="copy-css"]')),
                                            a !== sr && a !== dr && a !== pr)
                                    ) {
                                        e.next = 439;
                                        break;
                                    }
                                    return (
                                        (e.next = 429),
                                        r.sendMessage({ target: "background", action: "vps" })
                                    );
                                case 429:
                                    if ((fr = e.sent).success) {
                                        e.next = 439;
                                        break;
                                    }
                                    if ("ready" !== fr.status) {
                                        e.next = 436;
                                        break;
                                    }
                                    return A(), e.abrupt("return");
                                case 436:
                                    if ("offline" !== fr.status) {
                                        e.next = 439;
                                        break;
                                    }
                                    return (
                                        window.alert(
                                            chrome.i18n.getMessage("ALERT_CANNOT_VALIDATE_USER")
                                        ),
                                        e.abrupt("return")
                                    );
                                case 439:
                                    if (a !== sr) {
                                        e.next = 494;
                                        break;
                                    }
                                    return (
                                        (vr = null),
                                        (br = null),
                                        (e.prev = 442),
                                        (e.next = 445),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_host_name",
                                        })
                                    );
                                case 445:
                                    (vr = e.sent), (e.next = 452);
                                    break;
                                case 448:
                                    return (
                                        (e.prev = 448),
                                        (e.t10 = e.catch(442)),
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        e.abrupt("return")
                                    );
                                case 452:
                                    return (e.next = 454), r.storageLocalGet({ githubRepos: [] });
                                case 454:
                                    if (
                                        ((hr = e.sent),
                                            (yr = hr.githubRepos),
                                            (gr = yr.findIndex(function (e) {
                                                return e.hostname === xr;
                                            })),
                                            (mr = -1 !== gr ? yr[gr].repoUrl : W()))
                                    ) {
                                        e.next = 460;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 460:
                                    return (
                                        (e.prev = 460),
                                        (e.next = 463),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_host_name",
                                        })
                                    );
                                case 463:
                                    (vr = e.sent), (e.next = 470);
                                    break;
                                case 466:
                                    return (
                                        (e.prev = 466),
                                        (e.t11 = e.catch(460)),
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        e.abrupt("return")
                                    );
                                case 470:
                                    if (
                                        br.success &&
                                        br.changes &&
                                        0 !== Object.keys(br.changes).length
                                    ) {
                                        e.next = 473;
                                        break;
                                    }
                                    return (
                                        window.alert(chrome.i18n.getMessage("ALERT_NO_CHANGES")),
                                        e.abrupt("return")
                                    );
                                case 473:
                                    return (
                                        (xr = vr.hostname),
                                        (kr = je(br.changes)),
                                        (Sr = kr.map(function (e) {
                                            return {
                                                selector: e.selector,
                                                updatedStyles: Ne(e.updatedStyles),
                                            };
                                        })),
                                        (wr = Ue(Sr)),
                                        (e.prev = 477),
                                        (e.next = 480),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_url",
                                        })
                                    );
                                case 480:
                                    (Er = e.sent),
                                        (Tr = Er.url),
                                        (qr = "Changes for ".concat(Tr)),
                                        (e.next = 488);
                                    break;
                                case 485:
                                    (e.prev = 485), (e.t12 = e.catch(477)), (qr = "Changes");
                                case 488:
                                    return (
                                        (Lr = "```css\n".concat(wr, "\n```")),
                                        (_r = ""
                                            .concat(mr, "/issues/new?title=")
                                            .concat(encodeURIComponent(qr), "&body=")
                                            .concat(encodeURIComponent(Lr))),
                                        (e.next = 492),
                                        r.tabsCreate({ url: _r })
                                    );
                                case 492:
                                    e.next = 552;
                                    break;
                                case 494:
                                    if (a !== dr) {
                                        e.next = 521;
                                        break;
                                    }
                                    return (
                                        (e.prev = 495),
                                        (e.next = 498),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_host_name",
                                        })
                                    );
                                case 498:
                                    (Cr = e.sent), (e.next = 504);
                                    break;
                                case 501:
                                    return (
                                        (e.prev = 501), (e.t13 = e.catch(495)), e.abrupt("return")
                                    );
                                case 504:
                                    if (Cr.hostname && Cr.success) {
                                        e.next = 506;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 506:
                                    return (
                                        (Mr = Cr.hostname),
                                        (e.next = 509),
                                        r.storageLocalGet({ githubRepos: [] })
                                    );
                                case 509:
                                    if (
                                        ((Ar = e.sent),
                                            (Nr = Ar.githubRepos),
                                            (Ir = Nr.findIndex(function (e) {
                                                return e.hostname === Mr;
                                            })),
                                            (Or = -1 !== Ir ? Nr[Ir].repoUrl : ""),
                                            (Rr = W(Or)))
                                    ) {
                                        e.next = 516;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 516:
                                    return (
                                        -1 !== Ir
                                            ? (Nr[Ir].repoUrl = Rr)
                                            : Nr.push({ hostname: Mr, repoUrl: Rr }),
                                        (e.next = 519),
                                        r.storageLocalSet({ githubRepos: Nr })
                                    );
                                case 519:
                                    e.next = 552;
                                    break;
                                case 521:
                                    if (a !== pr) {
                                        e.next = 552;
                                        break;
                                    }
                                    return (
                                        (Ur = null),
                                        (e.prev = 523),
                                        (e.next = 526),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_all_changes",
                                        })
                                    );
                                case 526:
                                    (Ur = e.sent), (e.next = 533);
                                    break;
                                case 529:
                                    return (
                                        (e.prev = 529),
                                        (e.t14 = e.catch(523)),
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        e.abrupt("return")
                                    );
                                case 533:
                                    return (
                                        (jr = je(Ur.changes)),
                                        (Br = jr.map(function (e) {
                                            return {
                                                selector: e.selector,
                                                updatedStyles: Ne(e.updatedStyles),
                                            };
                                        })),
                                        (Pr = Ue(Br)),
                                        (Dr = pr.innerText),
                                        (Hr = chrome.i18n.getMessage("LABEL_COPIED")),
                                        (pr.disabled = !0),
                                        (e.prev = 539),
                                        (e.next = 542),
                                        navigator.clipboard.writeText(Pr)
                                    );
                                case 542:
                                    e.next = 547;
                                    break;
                                case 544:
                                    (e.prev = 544),
                                        (e.t15 = e.catch(539)),
                                        (Hr = chrome.i18n.getMessage("LABEL_COPIED_FAILED"));
                                case 547:
                                    return (
                                        (pr.innerText = Hr),
                                        (e.next = 550),
                                        new Promise(function (e) {
                                            return setTimeout(e, 1e3);
                                        })
                                    );
                                case 550:
                                    (pr.innerText = Dr), (pr.disabled = !1);
                                case 552:
                                    if ("presets" !== s.dataset.id) {
                                        e.next = 582;
                                        break;
                                    }
                                    if (
                                        ((Gr = s.querySelector('[data-control="save-preset"]')),
                                            (Fr = s.querySelector('[data-control="select-preset"]')),
                                            a !== Gr)
                                    ) {
                                        e.next = 581;
                                        break;
                                    }
                                    return (
                                        (e.next = 558),
                                        r.sendMessage({ target: "background", action: "vps" })
                                    );
                                case 558:
                                    if ((zr = e.sent).success) {
                                        e.next = 568;
                                        break;
                                    }
                                    if ("ready" !== zr.status) {
                                        e.next = 565;
                                        break;
                                    }
                                    return A(), e.abrupt("return");
                                case 565:
                                    if ("offline" !== zr.status) {
                                        e.next = 568;
                                        break;
                                    }
                                    return (
                                        window.alert(
                                            chrome.i18n.getMessage("ALERT_CANNOT_VALIDATE_USER")
                                        ),
                                        e.abrupt("return")
                                    );
                                case 568:
                                    if (
                                        !(
                                            (Wr = window.prompt(
                                                chrome.i18n.getMessage("PROMPT_CHOOSE_PRESET_NAME")
                                            )) && Wr.length > 0
                                        )
                                    ) {
                                        e.next = 581;
                                        break;
                                    }
                                    return (
                                        (Vr = Ee()),
                                        (e.next = 573),
                                        r.storageLocalGet({ presets: [] })
                                    );
                                case 573:
                                    return (
                                        (Yr = e.sent),
                                        ($r = Yr.presets),
                                        (Kr = {
                                            name: Wr,
                                            CSS: Vr,
                                            id:
                                                ((n = void 0),
                                                    (oc = void 0),
                                                    (n = Date.now().toString(36)),
                                                    (oc = Math.floor(1e6 * Math.random()).toString(36)),
                                                    "".concat(n, "-").concat(oc)),
                                        }),
                                        $r.unshift(Kr),
                                        (e.next = 579),
                                        r.storageLocalSet({ presets: $r })
                                    );
                                case 579:
                                    return (e.next = 581), k();
                                case 581:
                                    a === Fr &&
                                        ((Xr = document.getElementById("preset-list")),
                                            document.querySelectorAll(".preset-item").length > 0
                                                ? Xr.classList.toggle("hidden")
                                                : window.alert(
                                                    chrome.i18n.getMessage("ALERT_NO_PRESETS")
                                                ));
                                case 582:
                                    "no-pro" === s.dataset.id &&
                                        ((Zr = s.querySelector('[data-control="upgrade"]')),
                                            a === Zr && A());
                                case 583:
                                    if ("blur" !== c) {
                                        e.next = 1111;
                                        break;
                                    }
                                    if (
                                        ("input" === o && "text" === a.type) ||
                                        "textarea" === o
                                    ) {
                                        e.next = 586;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 586:
                                    if (!a.closest("#box-shadow") || !y) {
                                        e.next = 668;
                                        break;
                                    }
                                    if (
                                        ((Jr = ke(h["box-shadow"])),
                                            !(Qr = s.closest('[data-stack^="box-shadow"]')) ||
                                            !Qr.dataset.stack)
                                    ) {
                                        e.next = 666;
                                        break;
                                    }
                                    if (!(ea = Qr.dataset.stack.match(/\d+/))) {
                                        e.next = 662;
                                        break;
                                    }
                                    if (
                                        ((ta = ea[0]),
                                            (ra = Jr[ta]),
                                            "shadow-color" !== s.dataset.id)
                                    ) {
                                        e.next = 618;
                                        break;
                                    }
                                    if (
                                        ((aa = s.querySelector(
                                            '[data-control="shadow-color-input"]'
                                        )),
                                            (na = s.querySelector(
                                                '[data-control="shadow-color-text"]'
                                            )),
                                            (oa = s.querySelector(
                                                '[data-control="shadow-color-opacity"]'
                                            )),
                                            a !== na)
                                    ) {
                                        e.next = 609;
                                        break;
                                    }
                                    if (Z((ca = Q(na.value)))) {
                                        e.next = 605;
                                        break;
                                    }
                                    return (
                                        (na.value = K($(ra.color)).toUpperCase()),
                                        e.abrupt("return")
                                    );
                                case 605:
                                    (aa.value = ca), (na.value = K(ca).toUpperCase());
                                case 607:
                                    e.next = 618;
                                    break;
                                case 609:
                                    if (a !== oa) {
                                        e.next = 618;
                                        break;
                                    }
                                    if (
                                        "number" == typeof (la = te(oa.value, !0)) &&
                                        !isNaN(la)
                                    ) {
                                        e.next = 616;
                                        break;
                                    }
                                    return (oa.value = J(ra.color)), e.abrupt("return");
                                case 616:
                                    (ua = ne(la)), (oa.value = ua);
                                case 618:
                                    if ("offset-x" !== s.dataset.id) {
                                        e.next = 627;
                                        break;
                                    }
                                    if (
                                        ((ia = s.querySelector('[data-control="offset-x"]')),
                                            (sa = te(ia.value)),
                                            !isNaN(sa))
                                    ) {
                                        e.next = 626;
                                        break;
                                    }
                                    return (ia.value = te(ra.offsetX)), e.abrupt("return");
                                case 626:
                                    ia.value = sa;
                                case 627:
                                    if ("offset-y" !== s.dataset.id) {
                                        e.next = 636;
                                        break;
                                    }
                                    if (
                                        ((da = s.querySelector('[data-control="offset-y"]')),
                                            (pa = te(da.value)),
                                            !isNaN(pa))
                                    ) {
                                        e.next = 635;
                                        break;
                                    }
                                    return (da.value = te(ra.offsetY)), e.abrupt("return");
                                case 635:
                                    da.value = pa;
                                case 636:
                                    if ("blur" !== s.dataset.id) {
                                        e.next = 645;
                                        break;
                                    }
                                    if (
                                        ((fa = s.querySelector('[data-control="blur"]')),
                                            (va = te(fa.value, !0)),
                                            !(isNaN(va) || va < 0))
                                    ) {
                                        e.next = 644;
                                        break;
                                    }
                                    return (fa.value = te(ra.blurRadius, !0)), e.abrupt("return");
                                case 644:
                                    fa.value = va;
                                case 645:
                                    if ("spread" !== s.dataset.id) {
                                        e.next = 654;
                                        break;
                                    }
                                    if (
                                        ((ba = s.querySelector('[data-control="spread"]')),
                                            (ha = te(ba.value)),
                                            !isNaN(ha))
                                    ) {
                                        e.next = 653;
                                        break;
                                    }
                                    return (ba.value = te(ra.spreadRadius)), e.abrupt("return");
                                case 653:
                                    ba.value = ha;
                                case 654:
                                    return (ya = ie()), (e.next = 657), de("box-shadow", ya, u);
                                case 657:
                                    (ga = e.sent) && (h = ga), (y = !1), (e.next = 664);
                                    break;
                                case 662:
                                    return (
                                        console.warn(
                                            "No valid shadow index found in dataset.stack"
                                        ),
                                        e.abrupt("return")
                                    );
                                case 664:
                                    e.next = 668;
                                    break;
                                case 666:
                                    return (
                                        console.warn(
                                            "No matching parent with data-stack or dataset.stack is missing"
                                        ),
                                        e.abrupt("return")
                                    );
                                case 668:
                                    if ("background-color" !== s.dataset.id) {
                                        e.next = 706;
                                        break;
                                    }
                                    if (
                                        ((ma = s.querySelector('[data-control="color-input"]')),
                                            (xa = s.querySelector('[data-control="color-text"]')),
                                            (ka = s.querySelector('[data-control="color-opacity"]')),
                                            a !== xa)
                                    ) {
                                        e.next = 691;
                                        break;
                                    }
                                    if (Z((Sa = Q(xa.value)))) {
                                        e.next = 680;
                                        break;
                                    }
                                    (wa = $(h["background-color"])),
                                        (ma.value = wa),
                                        (xa.value = K(wa).toUpperCase()),
                                        (e.next = 689);
                                    break;
                                case 680:
                                    if (!y) {
                                        e.next = 689;
                                        break;
                                    }
                                    return (
                                        (ma.value = Sa),
                                        (xa.value = K(Sa).toUpperCase()),
                                        (qa = se(ma.value, ka.value)),
                                        (e.next = 686),
                                        de("background-color", qa, u)
                                    );
                                case 686:
                                    (Ea = e.sent) && (h = Ea), (y = !1);
                                case 689:
                                    e.next = 706;
                                    break;
                                case 691:
                                    if (a !== ka) {
                                        e.next = 706;
                                        break;
                                    }
                                    if (
                                        "number" == typeof (Ta = te(ka.value, !0)) &&
                                        !isNaN(Ta)
                                    ) {
                                        e.next = 697;
                                        break;
                                    }
                                    (ka.value = J(h["background-color"])), (e.next = 706);
                                    break;
                                case 697:
                                    if (!y) {
                                        e.next = 706;
                                        break;
                                    }
                                    return (
                                        (La = ne(Ta)),
                                        (ka.value = La),
                                        (_a = se(ma.value, La)),
                                        (e.next = 703),
                                        de("background-color", _a, u)
                                    );
                                case 703:
                                    (Ca = e.sent) && (h = Ca), (y = !1);
                                case 706:
                                    if ("background-blur" !== s.dataset.id) {
                                        e.next = 725;
                                        break;
                                    }
                                    if (
                                        ((Ma = s.querySelector('[data-control="background-blur"]')),
                                            (Aa = h["backdrop-filter"]),
                                            (Na = Y(Aa)),
                                            (Ia = te(Ma.value, !0)),
                                            a !== Ma)
                                    ) {
                                        e.next = 725;
                                        break;
                                    }
                                    if ("number" == typeof Ia && !isNaN(Ia)) {
                                        e.next = 716;
                                        break;
                                    }
                                    Na.blur ? (Ma.value = qe(te(Na.blur, !0))) : (Ma.value = "-"),
                                        (e.next = 725);
                                    break;
                                case 716:
                                    if (!y) {
                                        e.next = 725;
                                        break;
                                    }
                                    return (
                                        (Ma.value = qe(te(Ia, !0))),
                                        (Na.blur = "".concat(Ia, "px")),
                                        (Oa = Object.entries(Na)
                                            .map(function (e) {
                                                var t = i(e, 2),
                                                    r = t[0],
                                                    a = t[1];
                                                return "".concat(r, "(").concat(a, ")");
                                            })
                                            .join(" ")),
                                        (e.next = 722),
                                        de("backdrop-filter", Oa, u)
                                    );
                                case 722:
                                    (Ra = e.sent) && (h = Ra), (y = !1);
                                case 725:
                                    if ("margin" !== s.dataset.id) {
                                        e.next = 748;
                                        break;
                                    }
                                    if (
                                        ((Ua = s.querySelector('[data-control="margin-top"]')),
                                            (ja = s.querySelector('[data-control="margin-right"]')),
                                            (Ba = s.querySelector('[data-control="margin-bottom"]')),
                                            (Pa = s.querySelector('[data-control="margin-left"]')),
                                            a !== Ua && a !== ja && a !== Ba && a !== Pa)
                                    ) {
                                        e.next = 748;
                                        break;
                                    }
                                    if (null != (Da = ae(a.value))) {
                                        e.next = 736;
                                        break;
                                    }
                                    (a.value = qe(te(h[a.dataset.control]))), (e.next = 748);
                                    break;
                                case 736:
                                    if (!y) {
                                        e.next = 748;
                                        break;
                                    }
                                    return (
                                        (a.value = te(Da)),
                                        (Ha = ae(te(Ua.value)) || "0px"),
                                        (Ga = ae(te(ja.value)) || "0px"),
                                        (Fa = ae(te(Ba.value)) || "0px"),
                                        (za = ae(te(Pa.value)) || "0px"),
                                        (Wa = Ve(Ha, Ga, Fa, za)),
                                        (e.next = 745),
                                        de("margin", Wa, u)
                                    );
                                case 745:
                                    (Va = e.sent) && (h = Va), (y = !1);
                                case 748:
                                    if ("padding" !== s.dataset.id) {
                                        e.next = 771;
                                        break;
                                    }
                                    if (
                                        ((Ya = s.querySelector('[data-control="padding-top"]')),
                                            ($a = s.querySelector('[data-control="padding-right"]')),
                                            (Ka = s.querySelector('[data-control="padding-bottom"]')),
                                            (Xa = s.querySelector('[data-control="padding-left"]')),
                                            a !== Ya && a !== $a && a !== Ka && a !== Xa)
                                    ) {
                                        e.next = 771;
                                        break;
                                    }
                                    if (null != (Za = ae(a.value))) {
                                        e.next = 759;
                                        break;
                                    }
                                    (a.value = qe(te(h[a.dataset.control]))), (e.next = 771);
                                    break;
                                case 759:
                                    if (!y) {
                                        e.next = 771;
                                        break;
                                    }
                                    return (
                                        (a.value = te(Za)),
                                        (Ja = ae(te(Ya.value)) || "0px"),
                                        (Qa = ae(te($a.value)) || "0px"),
                                        (en = ae(te(Ka.value)) || "0px"),
                                        (tn = ae(te(Xa.value)) || "0px"),
                                        (rn = Ve(Ja, Qa, en, tn)),
                                        (e.next = 768),
                                        de("padding", rn, u)
                                    );
                                case 768:
                                    (an = e.sent) && (h = an), (y = !1);
                                case 771:
                                    if ("font-family" !== s.dataset.id) {
                                        e.next = 782;
                                        break;
                                    }
                                    if (
                                        ((nn = s.querySelector('[data-control="font-family"]')),
                                            a !== nn || !y)
                                    ) {
                                        e.next = 782;
                                        break;
                                    }
                                    return (
                                        (on = nn.value.replace(/^"(.*)"$/, "$1")),
                                        (cn = [
                                            "monospace",
                                            "serif",
                                            "sans-serif",
                                            "cursive",
                                            "fantasy",
                                        ].includes(on)
                                            ? on
                                            : '"'.concat(on, '"')),
                                        (e.next = 779),
                                        de("font-family", cn, u)
                                    );
                                case 779:
                                    (ln = e.sent) && (h = ln), (y = !1);
                                case 782:
                                    if ("font-size" !== s.dataset.id) {
                                        e.next = 797;
                                        break;
                                    }
                                    if (
                                        ((un = s.querySelector('[data-control="font-size"]')),
                                            a !== un)
                                    ) {
                                        e.next = 797;
                                        break;
                                    }
                                    if (null != (sn = ae(un.value, !0))) {
                                        e.next = 790;
                                        break;
                                    }
                                    (un.value = te(h["font-size"], !0)), (e.next = 797);
                                    break;
                                case 790:
                                    if (!y) {
                                        e.next = 797;
                                        break;
                                    }
                                    return (
                                        (un.value = te(sn, !0)),
                                        (e.next = 794),
                                        de("font-size", sn, u)
                                    );
                                case 794:
                                    (dn = e.sent) && (h = dn), (y = !1);
                                case 797:
                                    if ("line-height" !== s.dataset.id) {
                                        e.next = 812;
                                        break;
                                    }
                                    if (
                                        ((pn = s.querySelector('[data-control="line-height"]')),
                                            a !== pn)
                                    ) {
                                        e.next = 812;
                                        break;
                                    }
                                    if (null != (fn = ae(pn.value, !0))) {
                                        e.next = 805;
                                        break;
                                    }
                                    (pn.value = te(h["line-height"], !0)), (e.next = 812);
                                    break;
                                case 805:
                                    if (!y) {
                                        e.next = 812;
                                        break;
                                    }
                                    return (
                                        (pn.value = te(fn, !0)),
                                        (e.next = 809),
                                        de("line-height", fn, u)
                                    );
                                case 809:
                                    (vn = e.sent) && (h = vn), (y = !1);
                                case 812:
                                    if ("layout" !== s.dataset.id) {
                                        e.next = 843;
                                        break;
                                    }
                                    if (
                                        ((bn = s.querySelector('[data-control="column-gap"]')),
                                            (hn = s.querySelector('[data-control="row-gap"]')),
                                            a !== bn)
                                    ) {
                                        e.next = 830;
                                        break;
                                    }
                                    if (null != (yn = ae(bn.value, !0))) {
                                        e.next = 821;
                                        break;
                                    }
                                    (bn.value = te(h["column-gap"])), (e.next = 828);
                                    break;
                                case 821:
                                    if (!y) {
                                        e.next = 828;
                                        break;
                                    }
                                    return (
                                        (bn.value = te(yn, !0)),
                                        (e.next = 825),
                                        de("column-gap", yn, u)
                                    );
                                case 825:
                                    (gn = e.sent) && (h = gn), (y = !1);
                                case 828:
                                    e.next = 843;
                                    break;
                                case 830:
                                    if (a !== hn) {
                                        e.next = 843;
                                        break;
                                    }
                                    if (null != (mn = ae(hn.value, !0))) {
                                        e.next = 836;
                                        break;
                                    }
                                    (hn.value = te(h["row-gap"])), (e.next = 843);
                                    break;
                                case 836:
                                    if (!y) {
                                        e.next = 843;
                                        break;
                                    }
                                    return (
                                        (hn.value = te(mn, !0)),
                                        (e.next = 840),
                                        de("row-gap", mn, u)
                                    );
                                case 840:
                                    (xn = e.sent) && (h = xn), (y = !1);
                                case 843:
                                    if ("letter-spacing" !== s.dataset.id) {
                                        e.next = 858;
                                        break;
                                    }
                                    if (
                                        ((kn = s.querySelector('[data-control="letter-spacing"]')),
                                            a !== kn)
                                    ) {
                                        e.next = 858;
                                        break;
                                    }
                                    if (null != (Sn = ae(kn.value))) {
                                        e.next = 851;
                                        break;
                                    }
                                    (kn.value = te(h["letter-spacing"])), (e.next = 858);
                                    break;
                                case 851:
                                    if (!y) {
                                        e.next = 858;
                                        break;
                                    }
                                    return (
                                        (kn.value = te(Sn)),
                                        (e.next = 855),
                                        de("letter-spacing", Sn, u)
                                    );
                                case 855:
                                    (wn = e.sent) && (h = wn), (y = !1);
                                case 858:
                                    if ("color" !== s.dataset.id) {
                                        e.next = 878;
                                        break;
                                    }
                                    if (
                                        ((qn = s.querySelector('[data-control="color-input"]')),
                                            (En = s.querySelector('[data-control="color-text"]')),
                                            a !== En)
                                    ) {
                                        e.next = 878;
                                        break;
                                    }
                                    if (Z((Tn = Q(En.value)))) {
                                        e.next = 869;
                                        break;
                                    }
                                    (Ln = $(h.color)),
                                        (qn.value = Ln),
                                        (En.value = K(Ln).toUpperCase()),
                                        (e.next = 878);
                                    break;
                                case 869:
                                    if (!y) {
                                        e.next = 878;
                                        break;
                                    }
                                    return (
                                        (qn.value = Tn),
                                        (_n = se(Tn, 100)),
                                        (En.value = K(Tn).toUpperCase()),
                                        (e.next = 875),
                                        de("color", _n, u)
                                    );
                                case 875:
                                    (Cn = e.sent) && (h = Cn), (y = !1);
                                case 878:
                                    if ("opacity" !== s.dataset.id) {
                                        e.next = 895;
                                        break;
                                    }
                                    if (
                                        ((Mn = s.querySelector('[data-control="opacity"]')),
                                            a !== Mn)
                                    ) {
                                        e.next = 895;
                                        break;
                                    }
                                    if (
                                        ((An = te(Mn.value, !0)),
                                            "" !== Mn.value.trim() &&
                                            "number" == typeof An &&
                                            !isNaN(An))
                                    ) {
                                        e.next = 886;
                                        break;
                                    }
                                    (Mn.value = oe(h.opacity)), (e.next = 895);
                                    break;
                                case 886:
                                    if (!y) {
                                        e.next = 895;
                                        break;
                                    }
                                    return (
                                        (Nn = ne(An)),
                                        (In = ce(Nn)),
                                        (Mn.value = te(Nn, !0)),
                                        (e.next = 892),
                                        de("opacity", In, u)
                                    );
                                case 892:
                                    (On = e.sent) && (h = On), (y = !1);
                                case 895:
                                    if ("rotation" !== s.dataset.id) {
                                        e.next = 910;
                                        break;
                                    }
                                    if (
                                        ((Rn = s.querySelector('[data-control="rotation"]')),
                                            a !== Rn)
                                    ) {
                                        e.next = 910;
                                        break;
                                    }
                                    if (
                                        ((Un = te(Rn.value)),
                                            "" !== Rn.value.trim() &&
                                            "number" == typeof Un &&
                                            !isNaN(Un))
                                    ) {
                                        e.next = 903;
                                        break;
                                    }
                                    (Rn.value = le(h.transform)), (e.next = 910);
                                    break;
                                case 903:
                                    if (!y) {
                                        e.next = 910;
                                        break;
                                    }
                                    return (
                                        (Rn.value = te(Un)),
                                        (e.next = 907),
                                        de("transform", "rotate(".concat(Un, "deg)"), u)
                                    );
                                case 907:
                                    (jn = e.sent) && (h = jn), (y = !1);
                                case 910:
                                    if ("border-width" !== s.dataset.id) {
                                        e.next = 957;
                                        break;
                                    }
                                    if (
                                        ((Bn = s.querySelector(
                                            '[data-control="link-border-width"]'
                                        )),
                                            (Pn = s.querySelector('[data-control="top"]')),
                                            (Dn = s.querySelector('[data-control="right"]')),
                                            (Hn = s.querySelector('[data-control="bottom"]')),
                                            (Gn = s.querySelector('[data-control="left"]')),
                                            !Bn.checked)
                                    ) {
                                        e.next = 939;
                                        break;
                                    }
                                    if (null != ae(a.value)) {
                                        e.next = 925;
                                        break;
                                    }
                                    (Pn.value = qe(te(h["border-top-width"], !0))),
                                        (Dn.value = qe(te(h["border-right-width"], !0))),
                                        (Hn.value = qe(te(h["border-bottom-width"], !0))),
                                        (Gn.value = qe(te(h["border-left-width"], !0))),
                                        (e.next = 937);
                                    break;
                                case 925:
                                    if (!y) {
                                        e.next = 937;
                                        break;
                                    }
                                    return (
                                        (Fn = te(a.value, !0)),
                                        (Pn.value = Fn),
                                        (Dn.value = Fn),
                                        (Hn.value = Fn),
                                        (Gn.value = Fn),
                                        (zn = "".concat(Fn, "px")),
                                        (e.next = 934),
                                        de("border-width", zn, u)
                                    );
                                case 934:
                                    (Wn = e.sent) && (h = Wn), (y = !1);
                                case 937:
                                    e.next = 957;
                                    break;
                                case 939:
                                    if (
                                        ((Vn = ae(a.value)),
                                            a !== Pn && a !== Dn && a !== Hn && a !== Gn)
                                    ) {
                                        e.next = 957;
                                        break;
                                    }
                                    if (null != Vn) {
                                        e.next = 945;
                                        break;
                                    }
                                    (a.value = qe(
                                        te(h["border-".concat(a.dataset.control, "-width")], !0)
                                    )),
                                        (e.next = 957);
                                    break;
                                case 945:
                                    if (!y) {
                                        e.next = 957;
                                        break;
                                    }
                                    return (
                                        (a.value = te(Vn, !0)),
                                        (Yn = ae(te(Pn.value), !0) || "0px"),
                                        ($n = ae(te(Dn.value), !0) || "0px"),
                                        (Kn = ae(te(Hn.value), !0) || "0px"),
                                        (Xn = ae(te(Gn.value), !0) || "0px"),
                                        (Zn = Ve(Yn, $n, Kn, Xn)),
                                        (e.next = 954),
                                        de("border-width", Zn, u)
                                    );
                                case 954:
                                    (Jn = e.sent) && (h = Jn), (y = !1);
                                case 957:
                                    if (
                                        "border-top-color" !== s.dataset.id &&
                                        "border-right-color" !== s.dataset.id &&
                                        "border-bottom-color" !== s.dataset.id &&
                                        "border-left-color" !== s.dataset.id
                                    ) {
                                        e.next = 1066;
                                        break;
                                    }
                                    if (
                                        ((Qn = s.querySelector('[data-control="color-input"]')),
                                            (eo = s.querySelector('[data-control="color-text"]')),
                                            (to = s.querySelector('[data-control="color-opacity"]')),
                                            (ro = document.querySelector('[data-id="border-color"]')),
                                            (ao = ro.querySelector(
                                                '[data-control="link-border-color"]'
                                            )),
                                            (no = ro.querySelector('[data-id="border-top-color"]')),
                                            (oo = no.querySelector('[data-control="color-input"]')),
                                            (co = no.querySelector('[data-control="color-text"]')),
                                            (lo = no.querySelector('[data-control="color-opacity"]')),
                                            (uo = ro.querySelector('[data-id="border-right-color"]')),
                                            (io = uo.querySelector('[data-control="color-input"]')),
                                            (so = uo.querySelector('[data-control="color-text"]')),
                                            (po = uo.querySelector('[data-control="color-opacity"]')),
                                            (fo = ro.querySelector('[data-id="border-bottom-color"]')),
                                            (vo = fo.querySelector('[data-control="color-input"]')),
                                            (bo = fo.querySelector('[data-control="color-text"]')),
                                            (ho = fo.querySelector('[data-control="color-opacity"]')),
                                            (yo = ro.querySelector('[data-id="border-left-color"]')),
                                            (go = yo.querySelector('[data-control="color-input"]')),
                                            (mo = yo.querySelector('[data-control="color-text"]')),
                                            (xo = yo.querySelector('[data-control="color-opacity"]')),
                                            a !== eo)
                                    ) {
                                        e.next = 1027;
                                        break;
                                    }
                                    if (((ko = Q(eo.value)), !ao.checked)) {
                                        e.next = 1006;
                                        break;
                                    }
                                    if (Z(ko)) {
                                        e.next = 988;
                                        break;
                                    }
                                    (So = $(h[s.dataset.id])),
                                        (Qn.value = So),
                                        (eo.value = K(So).toUpperCase()),
                                        (e.next = 1004);
                                    break;
                                case 988:
                                    if (!y) {
                                        e.next = 1004;
                                        break;
                                    }
                                    return (
                                        (oo.value = ko),
                                        (io.value = ko),
                                        (vo.value = ko),
                                        (go.value = ko),
                                        (co.value = K(ko).toUpperCase()),
                                        (so.value = K(ko).toUpperCase()),
                                        (bo.value = K(ko).toUpperCase()),
                                        (mo.value = K(ko).toUpperCase()),
                                        (wo = se(Qn.value, to.value)),
                                        (qo = "".concat(wo)),
                                        (e.next = 1001),
                                        de("border-color", qo, u)
                                    );
                                case 1001:
                                    (Eo = e.sent) && (h = Eo), (y = !1);
                                case 1004:
                                    e.next = 1025;
                                    break;
                                case 1006:
                                    if (Z(ko)) {
                                        e.next = 1012;
                                        break;
                                    }
                                    (To = $(h[s.dataset.id])),
                                        (Qn.value = To),
                                        (eo.value = K(To).toUpperCase()),
                                        (e.next = 1025);
                                    break;
                                case 1012:
                                    if (!y) {
                                        e.next = 1025;
                                        break;
                                    }
                                    return (
                                        (Qn.value = ko),
                                        (eo.value = K(ko).toUpperCase()),
                                        (Lo = se(co.value, lo.value)),
                                        (_o = se(so.value, po.value)),
                                        (Co = se(bo.value, ho.value)),
                                        (Mo = se(mo.value, xo.value)),
                                        (Ao = Ve(Lo, _o, Co, Mo)),
                                        (e.next = 1022),
                                        de("border-color", Ao, u)
                                    );
                                case 1022:
                                    (No = e.sent) && (h = No), (y = !1);
                                case 1025:
                                    e.next = 1066;
                                    break;
                                case 1027:
                                    if (a !== to) {
                                        e.next = 1066;
                                        break;
                                    }
                                    if (((Io = te(to.value, !0)), !ao.checked)) {
                                        e.next = 1049;
                                        break;
                                    }
                                    if ("number" == typeof Io && !isNaN(Io)) {
                                        e.next = 1034;
                                        break;
                                    }
                                    (to.value = J(h[s.dataset.id])), (e.next = 1047);
                                    break;
                                case 1034:
                                    if (!y) {
                                        e.next = 1047;
                                        break;
                                    }
                                    return (
                                        (Oo = ne(Io)),
                                        (lo.value = Oo),
                                        (po.value = Oo),
                                        (ho.value = Oo),
                                        (xo.value = Oo),
                                        (Ro = se(Qn.value, Oo)),
                                        (Uo = "".concat(Ro)),
                                        (e.next = 1044),
                                        de("border-color", Uo, u)
                                    );
                                case 1044:
                                    (jo = e.sent) && (h = jo), (y = !1);
                                case 1047:
                                    e.next = 1066;
                                    break;
                                case 1049:
                                    if ("number" == typeof Io && !isNaN(Io)) {
                                        e.next = 1053;
                                        break;
                                    }
                                    (to.value = J(h[s.dataset.id])), (e.next = 1066);
                                    break;
                                case 1053:
                                    if (!y) {
                                        e.next = 1066;
                                        break;
                                    }
                                    return (
                                        (Bo = ne(Io)),
                                        (to.value = Bo),
                                        (Po = se(co.value, lo.value)),
                                        (Do = se(so.value, po.value)),
                                        (Ho = se(bo.value, ho.value)),
                                        (Go = se(mo.value, xo.value)),
                                        (Fo = Ve(Po, Do, Ho, Go)),
                                        (e.next = 1063),
                                        de("border-color", Fo, u)
                                    );
                                case 1063:
                                    (zo = e.sent) && (h = zo), (y = !1);
                                case 1066:
                                    if ("border-radius" !== s.dataset.id) {
                                        e.next = 1111;
                                        break;
                                    }
                                    if (
                                        ((Wo = s.querySelector(
                                            '[data-control="link-border-radius"]'
                                        )),
                                            (Vo = s.querySelector('[data-control="top-left"]')),
                                            (Yo = s.querySelector('[data-control="top-right"]')),
                                            ($o = s.querySelector('[data-control="bottom-left"]')),
                                            (Ko = s.querySelector('[data-control="bottom-right"]')),
                                            !Wo.checked)
                                    ) {
                                        e.next = 1093;
                                        break;
                                    }
                                    if (null != (Xo = ae(a.value, !0))) {
                                        e.next = 1081;
                                        break;
                                    }
                                    (Vo.value = qe(te(h["border-top-left-radius"], !0))),
                                        (Yo.value = qe(te(h["border-top-right-radius"], !0))),
                                        ($o.value = qe(te(h["border-bottom-left-radius"], !0))),
                                        (Ko.value = qe(te(h["border-bottom-right-radius"], !0))),
                                        (e.next = 1091);
                                    break;
                                case 1081:
                                    if (!y) {
                                        e.next = 1091;
                                        break;
                                    }
                                    return (
                                        (Vo.value = te(Xo, !0)),
                                        (Yo.value = te(Xo, !0)),
                                        ($o.value = te(Xo, !0)),
                                        (Ko.value = te(Xo, !0)),
                                        (e.next = 1088),
                                        de("border-radius", Xo, u)
                                    );
                                case 1088:
                                    (Zo = e.sent) && (h = Zo), (y = !1);
                                case 1091:
                                    e.next = 1111;
                                    break;
                                case 1093:
                                    if (
                                        ((Jo = ae(a.value)),
                                            a !== Vo && a !== Yo && a !== $o && a !== Ko)
                                    ) {
                                        e.next = 1111;
                                        break;
                                    }
                                    if (null != Jo) {
                                        e.next = 1099;
                                        break;
                                    }
                                    (a.value = qe(te(h[a.dataset.control], !0))), (e.next = 1111);
                                    break;
                                case 1099:
                                    if (!y) {
                                        e.next = 1111;
                                        break;
                                    }
                                    return (
                                        (a.value = te(Jo, !0)),
                                        (Qo = ae(te(Vo.value), !0) || "0px"),
                                        (ec = ae(te(Yo.value), !0) || "0px"),
                                        (tc = ae(te(Ko.value), !0) || "0px"),
                                        (rc = ae(te($o.value), !0) || "0px"),
                                        (ac = Ve(Qo, ec, tc, rc)),
                                        (e.next = 1108),
                                        de("border-radius", ac, u)
                                    );
                                case 1108:
                                    (nc = e.sent) && (h = nc), (y = !1);
                                case 1111:
                                case "end":
                                    return e.stop();
                            }
                        var n, oc;
                    },
                    e,
                    null,
                    [
                        [217, 224],
                        [231, 238],
                        [245, 252],
                        [275, 281],
                        [291, 296],
                        [317, 323],
                        [336, 342],
                        [362, 368],
                        [389, 395],
                        [409, 414],
                        [442, 448],
                        [460, 466],
                        [477, 485],
                        [495, 501],
                        [523, 529],
                        [539, 544],
                    ]
                );
            })
        )).apply(this, arguments);
    }
    function W() {
        for (
            var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            ;

        ) {
            if (
                !(e = window.prompt(chrome.i18n.getMessage("PROMPT_GITHUB_CONFIG"), t))
            )
                return null;
            if (/^https:\/\/github\.com\/[^/]+\/[^/]+$/.test(e)) break;
        }
        return e;
    }
    function V() {
        var e = document.getElementById("app"),
            t = document.getElementById("empty");
        e && e.classList.add("hidden"), t && t.classList.remove("hidden");
    }
    function Y(e) {
        for (
            var t,
            r =
                /(blur|brightness|contrast|grayscale|hue-rotate|invert|opacity|saturate|sepia)\([^)]+\)/g,
            a = {};
            null !== (t = r.exec(e));

        ) {
            var n = i(t[0].split("("), 2),
                o = n[0],
                c = n[1].replace(")", "").trim();
            a[o] = c;
        }
        return a;
    }
    function $(e) {
        if ("string" != typeof e || !e.trim()) return "#000000";
        var t = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
        if (t) {
            var r = i(t, 4),
                a = r[1],
                n = r[2],
                o = r[3];
            if (X(a) && X(n) && X(o))
                return (function (e, t, r) {
                    return "#".concat(
                        ((1 << 24) + (e << 16) + (t << 8) + r)
                            .toString(16)
                            .slice(1)
                            .toUpperCase()
                    );
                })(parseInt(a, 10), parseInt(n, 10), parseInt(o, 10));
        }
        return console.warn("Failed to parse color string to hex:", e), "#000000";
    }
    function K(e) {
        return e.startsWith("#") ? e.slice(1) : e;
    }
    function X(e) {
        var t = parseInt(e);
        return t >= 0 && t <= 255;
    }
    function Z(e) {
        return (
            (e = e.startsWith("#") ? e.slice(1) : e),
            /^[a-fA-F0-9]{3}$|^[a-fA-F0-9]{6}$/.test(e)
        );
    }
    function J(e) {
        if ("string" != typeof e || !e.trim()) return "100";
        var t = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (t) {
            var r = t[4];
            if (void 0 === r) return "100";
            var a = Math.round(100 * parseFloat(r));
            return "".concat(a);
        }
        return "100";
    }
    function Q(e) {
        if ("string" != typeof e) return "#000000";
        if ((e.startsWith("#") || (e = "#".concat(e)), 4 === e.length)) {
            var t = i(e.slice(1), 3),
                r = t[0],
                a = t[1],
                n = t[2];
            e = "#".concat(r).concat(r).concat(a).concat(a).concat(n).concat(n);
        }
        return e;
    }
    function ee(e) {
        for (
            var t = [100, 200, 300, 400, 500, 600, 700, 800, 900],
            r = parseInt(e, 10),
            a = t[0],
            n = 0,
            o = t;
            n < o.length;
            n++
        ) {
            var c = o[n];
            Math.abs(r - c) < Math.abs(r - a) && (a = c);
        }
        return a.toString();
    }
    function te(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ("" === e) return 0;
        var r = parseFloat(e);
        return isNaN(r) ? e : t ? Math.abs(r) : r;
    }
    function re() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        return t.every(function (e) {
            return e === t[0];
        });
    }
    function ae(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (
            "string" == typeof e &&
            ["auto", "normal", "inherit"].includes(e.toLowerCase())
        )
            return e.toLowerCase();
        var r = parseFloat(e);
        if (isNaN(r)) return null;
        var a = t ? Math.abs(r) : r;
        return "".concat(a, "px");
    }
    function ne(e) {
        var t = parseFloat(e);
        return Math.max(0, Math.min(t, 100)).toString();
    }
    function oe(e) {
        var t = 100 * parseFloat(e);
        return Math.round(t).toString();
    }
    function ce(e) {
        var t = parseFloat(e);
        return isNaN(t) ? "1" : (Math.max(0, Math.min(100, t)) / 100).toString();
    }
    function le(e) {
        if ("string" != typeof e || !e.trim()) return 0;
        var t = 0,
            r = e.match(/rotate\(([^)]+)\)/);
        if (r) t = parseFloat(r[1]);
        else {
            var a = e.match(/matrix\((.+)\)/);
            if (a) {
                var n = i(a[1].split(",").map(parseFloat), 2),
                    o = n[0],
                    c = n[1];
                t = Math.atan2(c, o) * (180 / Math.PI);
            }
        }
        return t;
    }
    function ue(e) {
        var t = e.target,
            r = t.tagName.toLowerCase();
        "Enter" === e.key &&
            (("input" === r && "text" === t.type) || "textarea" === r) &&
            t.blur();
    }
    function ie() {
        var e,
            t = [],
            r = s(document.querySelectorAll('[data-stack^="box-shadow"]'));
        try {
            for (r.s(); !(e = r.n()).done;) {
                var a = e.value,
                    n =
                        "inset" === a.querySelector('[data-control="inset"]').value
                            ? " inset"
                            : "",
                    o = a.querySelector('[data-control="shadow-color-input"]'),
                    c = a.querySelector('[data-control="shadow-color-opacity"]'),
                    l = a.querySelector('[data-control="offset-x"]'),
                    u = a.querySelector('[data-control="offset-y"]'),
                    i = a.querySelector('[data-control="blur"]'),
                    d = a.querySelector('[data-control="spread"]'),
                    p = te(l.value),
                    f = te(u.value),
                    v = te(i.value),
                    b = te(d.value),
                    h = se(o.value, c.value),
                    y = ""
                        .concat(h, " ")
                        .concat(p, "px ")
                        .concat(f, "px ")
                        .concat(v, "px ")
                        .concat(b, "px")
                        .concat(n);
                t.push(y);
            }
        } catch (e) {
            r.e(e);
        } finally {
            r.f();
        }
        return 0 === t.length ? "none" : t.join(", ");
    }
    function se(e, t) {
        if (!Z((e = Q(e)))) return "rgba(0, 0, 0)";
        var r = parseInt(e.slice(1, 3), 16),
            a = parseInt(e.slice(3, 5), 16),
            n = parseInt(e.slice(5, 7), 16),
            o = ne(t) / 100;
        return 1 === o
            ? "rgb(".concat(r, ", ").concat(a, ", ").concat(n, ")")
            : "rgba(".concat(r, ", ").concat(a, ", ").concat(n, ", ").concat(o, ")");
    }
    function de(e, t, r) {
        return pe.apply(this, arguments);
    }
    function pe() {
        return (pe = v(
            n().mark(function e(t, a, o) {
                var c;
                return n().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: o,
                                            data: { property: t, value: a },
                                        })
                                    );
                                case 3:
                                    if (!(c = e.sent).success || !c.data) {
                                        e.next = 8;
                                        break;
                                    }
                                    return e.abrupt("return", c.data);
                                case 8:
                                    return (
                                        window.alert(
                                            chrome.i18n.getMessage("ALERT_NO_SELECTED_ELEMENT")
                                        ),
                                        e.abrupt("return", null)
                                    );
                                case 10:
                                    e.next = 16;
                                    break;
                                case 12:
                                    return (
                                        (e.prev = 12),
                                        (e.t0 = e.catch(0)),
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        e.abrupt("return", null)
                                    );
                                case 16:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[0, 12]]
                );
            })
        )).apply(this, arguments);
    }
    function fe(e, t) {
        return ve.apply(this, arguments);
    }
    function ve() {
        return (ve = v(
            n().mark(function e(t, a) {
                var o;
                return n().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: a,
                                            data: t,
                                        })
                                    );
                                case 3:
                                    if (!(o = e.sent).success || !o.data) {
                                        e.next = 8;
                                        break;
                                    }
                                    return e.abrupt("return", o.data);
                                case 8:
                                    return (
                                        window.alert(
                                            chrome.i18n.getMessage("ALERT_NO_SELECTED_ELEMENT")
                                        ),
                                        e.abrupt("return", null)
                                    );
                                case 10:
                                    e.next = 16;
                                    break;
                                case 12:
                                    return (
                                        (e.prev = 12),
                                        (e.t0 = e.catch(0)),
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        ),
                                        e.abrupt("return", null)
                                    );
                                case 16:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[0, 12]]
                );
            })
        )).apply(this, arguments);
    }
    function be(e) {
        return e
            .split(",")[0]
            .trim()
            .replace(/^"(.*)"$/, "$1");
    }
    function he() {
        return (he = v(
            n().mark(function e(t, r) {
                var a, o, c, l, u, i, s, d, p, f, v, b, h, y, g, m;
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                (a = r["font-family"]),
                                    (o = r["font-weight"]),
                                    (c = r["font-size"]),
                                    (l = r["line-height"]),
                                    (u = r["letter-spacing"]),
                                    (i = r["text-align"]),
                                    (s = r.color),
                                    (d = t.querySelector('[data-control="font-family"]')),
                                    (p = be(a)),
                                    (d.value = p),
                                    (t.querySelector('[data-control="font-weight"]').value =
                                        ee(o)),
                                    (t.querySelector('[data-control="font-size"]').value = te(c)),
                                    (t.querySelector('[data-control="line-height"]').value =
                                        te(l)),
                                    (t.querySelector('[data-control="letter-spacing"]').value =
                                        te(u)),
                                    (f = t.querySelector('[data-control="text-align-left"]')),
                                    (v = t.querySelector('[data-control="text-align-center"]')),
                                    (b = t.querySelector('[data-control="text-align-right"]')),
                                    (h = t.querySelector('[data-control="text-align-justify"]')),
                                    "right" === i
                                        ? (b.checked = !0)
                                        : "center" === i
                                            ? (v.checked = !0)
                                            : "justify" === i
                                                ? (h.checked = !0)
                                                : (f.checked = !0),
                                    (y = t.querySelector('[data-control="color-input"]')),
                                    (g = t.querySelector('[data-control="color-text"]')),
                                    (m = $(s)),
                                    (y.value = Z(m) ? m : "#000000"),
                                    (g.value = Z(m)
                                        ? K(m).toUpperCase()
                                        : K("#000000").toUpperCase());
                            case 28:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function ye(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            r = document.createElement("div");
        if (((r.className = "form-section"), t)) {
            var a = document.createElement("div");
            (a.className = "form-section-title"),
                (a.textContent = t),
                r.appendChild(a);
        }
        return r.appendChild(e), r;
    }
    function ge(e, t, r, a) {
        var n = document.createElement("div");
        n.className = "control-split";
        var o = me(e, t),
            c = me(r, a);
        return n.appendChild(o), n.appendChild(c), n;
    }
    function me(e, t) {
        var r = document.createElement("div");
        r.className = "control-title-pair";
        var a = document.createElement("div");
        return (
            (a.className = "form-section-title"),
            (a.textContent = e),
            r.appendChild(a),
            r.appendChild(t),
            r
        );
    }
    function xe(e, t, r, a) {
        var n = document.createElement("div");
        (n.className = r), n.setAttribute("data-id", a);
        var o = document.createElement("input");
        return (
            (o.type = "text"),
            (o.value = t),
            o.setAttribute("data-control", e),
            n.appendChild(o),
            n
        );
    }
    function ke(e) {
        return "string" == typeof e && e.trim()
            ? e
                .split(/,(?![^(]*\))/)
                .map(function (e) {
                    return e.trim();
                })
                .map(function (e) {
                    var t = e.includes("inset");
                    t && (e = e.replace("inset", "").trim());
                    var r = e.match(
                        /(rgba?\([^)]+\))? *(-?\d+px) *(-?\d+px) *(?:(-?\d+px))? *(?:(-?\d+px))?/
                    );
                    if (r) {
                        var a = i(r, 6),
                            n = a[1],
                            o = a[2],
                            c = a[3],
                            l = a[4],
                            u = void 0 === l ? "0px" : l,
                            s = a[5],
                            d = void 0 === s ? "0px" : s;
                        return {
                            color: n ? n.trim() : "rgba(0,0,0,0)",
                            offsetX: o.trim(),
                            offsetY: c.trim(),
                            blurRadius: u.trim(),
                            spreadRadius: d.trim(),
                            inset: t,
                        };
                    }
                    return null;
                })
                .filter(Boolean)
            : [];
    }
    function Se() {
        return we.apply(this, arguments);
    }
    function we() {
        return (we = v(
            n().mark(function e() {
                var t, r, a, o, c, l, i, s;
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                    (t = h["box-shadow"] || ""),
                                    (r = ke(t)),
                                    (a = {
                                        color: "rgba(0, 0, 0, 0.3)",
                                        offsetX: "5px",
                                        offsetY: "5px",
                                        blurRadius: "10px",
                                        spreadRadius: "0px",
                                        inset: !1,
                                    }),
                                    (o = [].concat(u(r), [a])),
                                    (c = o
                                        .map(function (e) {
                                            var t = e.inset ? " inset" : "";
                                            return ""
                                                .concat(e.color, " ")
                                                .concat(e.offsetX, " ")
                                                .concat(e.offsetY, " ")
                                                .concat(e.blurRadius, " ")
                                                .concat(e.spreadRadius)
                                                .concat(t);
                                        })
                                        .join(", ")),
                                    (l = document.querySelector(
                                        '[data-control="update-common"]'
                                    )),
                                    (i = l.checked ? "update_common_elements" : "update_css"),
                                    (e.next = 9),
                                    de("box-shadow", c, i)
                                );
                            case 9:
                                (s = e.sent) && (h = s), G({ "box-shadow": c });
                            case 12:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function qe(e) {
        return 0 === e ? "-" : e;
    }
    function Ee() {
        var e = {},
            t = document.getElementById("layout"),
            r = t.querySelector('[data-control="display"]'),
            a = t.querySelector('[data-control="horizontal-align"]'),
            n = t.querySelector('[data-control="vertical-align"]'),
            o = t.querySelector('[data-control="column-gap"]'),
            c = t.querySelector('[data-control="row-gap"]'),
            l = r.value || g,
            u = a.value || g,
            i = n.value || g,
            s = ae(o.value) || g,
            d = ae(c.value) || g;
        (e.display = l),
            (e["justify-content"] = u),
            (e["align-items"] = i),
            (e["column-gap"] = s),
            (e["row-gap"] = d);
        var p = document.getElementById("background"),
            f = p.querySelector('[data-control="color-input"]'),
            v = p.querySelector('[data-control="color-opacity"]'),
            b = se(f.value || g, v.value || g);
        e["background-color"] = b;
        var h = ae(p.querySelector('[data-control="background-blur"]').value) || g;
        e["backdrop-filter"] = h === g ? h : "blur(".concat(h, "px)");
        var y = document.getElementById("spacing"),
            m = y.querySelector('[data-control="margin-top"]'),
            x = y.querySelector('[data-control="margin-right"]'),
            k = y.querySelector('[data-control="margin-bottom"]'),
            S = y.querySelector('[data-control="margin-left"]'),
            w = Ve(
                ae(m.value) || "0px",
                ae(x.value) || "0px",
                ae(k.value) || "0px",
                ae(S.value) || "0px"
            );
        e.margin = w;
        var q = y.querySelector('[data-control="padding-top"]'),
            E = y.querySelector('[data-control="padding-right"]'),
            T = y.querySelector('[data-control="padding-bottom"]'),
            L = y.querySelector('[data-control="padding-left"]'),
            _ = Ve(
                ae(q.value) || "0px",
                ae(E.value) || "0px",
                ae(T.value) || "0px",
                ae(L.value) || "0px"
            );
        e.padding = _;
        var C = document.getElementById("typography"),
            M = (
                C.querySelector('[data-control="font-family"]').value || "sans-serif"
            ).trim(),
            A = ["monospace", "serif", "sans-serif", "cursive", "fantasy"].includes(
                M.toLowerCase()
            )
                ? M
                : '"'.concat(M, '"'),
            N = C.querySelector('[data-control="font-weight"]').value || g,
            I = ae(C.querySelector('[data-control="font-size"]').value) || g,
            O = ae(C.querySelector('[data-control="line-height"]').value) || g,
            R = ae(C.querySelector('[data-control="letter-spacing"]').value) || g,
            U = g,
            j = C.querySelector('[data-control="text-align-left"]'),
            B = C.querySelector('[data-control="text-align-center"]'),
            P = C.querySelector('[data-control="text-align-right"]'),
            D = C.querySelector('[data-control="text-align-justify"]');
        j.checked
            ? (U = "left")
            : B.checked
                ? (U = "center")
                : P.checked
                    ? (U = "right")
                    : D.checked && (U = "justify");
        var H = se(C.querySelector('[data-control="color-input"]').value, 100) || g;
        (e["font-family"] = A),
            (e["font-weight"] = N),
            (e["font-size"] = I),
            (e["line-height"] = O),
            (e["letter-spacing"] = R),
            (e["text-align"] = U),
            (e.color = H);
        var G = document.getElementById("appearance"),
            F = ce(G.querySelector('[data-control="opacity"]').value || g),
            z = G.querySelector('[data-control="rotation"]'),
            W = parseFloat(z.value) || g,
            V = W === g ? W : "rotate(".concat(W, "deg)"),
            Y = G.querySelector('[data-id="border-radius"]'),
            $ = Y.querySelector('[data-control="top-left"]'),
            K = Y.querySelector('[data-control="top-right"]'),
            X = Y.querySelector('[data-control="bottom-left"]'),
            Z = Y.querySelector('[data-control="bottom-right"]'),
            J = Ve(
                ae($.value) || "0px",
                ae(K.value) || "0px",
                ae(Z.value) || "0px",
                ae(X.value) || "0px"
            ),
            Q = G.querySelector('[data-control="mix-blend-mode"]').value || g;
        (e.opacity = F),
            (e.transform = V),
            (e["border-radius"] = J),
            (e["mix-blend-mode"] = Q);
        var ee = document.getElementById("border"),
            te = ee.querySelector('[data-id="border-width"]'),
            re = te.querySelector('[data-control="top"]'),
            ne = te.querySelector('[data-control="right"]'),
            oe = te.querySelector('[data-control="bottom"]'),
            le = te.querySelector('[data-control="left"]'),
            ue = Ve(
                ae(re.value) || "0px",
                ae(ne.value) || "0px",
                ae(oe.value) || "0px",
                ae(le.value) || "0px"
            );
        e["border-width"] = ue;
        var de = ee.querySelector('[data-id="border-style"]'),
            pe = de.querySelector('[data-control="top"]'),
            fe = de.querySelector('[data-control="right"]'),
            ve = de.querySelector('[data-control="bottom"]'),
            be = de.querySelector('[data-control="left"]'),
            he = Ve(
                pe.value || "0px",
                fe.value || "0px",
                ve.value || "0px",
                be.value || "0px"
            );
        e["border-style"] = he;
        var ye = ee.querySelector('[data-id="border-color"]'),
            ge = ye.querySelector('[data-id="border-top-color"]'),
            me = ge.querySelector('[data-control="color-input"]'),
            xe = ge.querySelector('[data-control="color-opacity"]'),
            ke = se(me.value, xe.value),
            Se = ye.querySelector('[data-id="border-right-color"]'),
            we = Se.querySelector('[data-control="color-input"]'),
            qe = Se.querySelector('[data-control="color-opacity"]'),
            Ee = se(we.value, qe.value),
            Te = ye.querySelector('[data-id="border-bottom-color"]'),
            Le = Te.querySelector('[data-control="color-input"]'),
            _e = Te.querySelector('[data-control="color-opacity"]'),
            Ce = se(Le.value, _e.value),
            Me = ye.querySelector('[data-id="border-left-color"]'),
            Ae = Me.querySelector('[data-control="color-input"]'),
            Ne = Me.querySelector('[data-control="color-opacity"]'),
            Ie = Ve(ke, Ee, Ce, se(Ae.value, Ne.value));
        e["border-color"] = Ie;
        var Oe = ie() || g;
        return (e["box-shadow"] = Oe), e;
    }
    function Te(e, t) {
        return Le.apply(this, arguments);
    }
    function Le() {
        return (Le = v(
            n().mark(function e(t, r) {
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return e.abrupt(
                                    "return",
                                    new Promise(function (e, a) {
                                        var n = new Image();
                                        (n.src = t),
                                            (n.onload = function () {
                                                var t = document.createElement("canvas"),
                                                    a = t.getContext("2d"),
                                                    o = r.width,
                                                    c = r.height;
                                                (t.width = o),
                                                    (t.height = c),
                                                    a.drawImage(n, -r.x, -r.y),
                                                    e(t);
                                            }),
                                            (n.onerror = a);
                                    })
                                );
                            case 1:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function _e(e, t) {
        e.toBlob(function (e) {
            var r = URL.createObjectURL(e),
                a = document.createElement("a");
            (a.href = r),
                (a.download = "".concat(t, ".png")),
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a),
                URL.revokeObjectURL(r);
        }, "image/png");
    }
    function Ce(e) {
        return Me.apply(this, arguments);
    }
    function Me() {
        return (Me = v(
            n().mark(function e(t) {
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return e.abrupt(
                                    "return",
                                    new Promise(function (e, r) {
                                        var a = new Image();
                                        (a.src = t),
                                            (a.onload = function () {
                                                var t = document.createElement("canvas"),
                                                    r = t.getContext("2d");
                                                (t.width = a.width),
                                                    (t.height = a.height),
                                                    r.drawImage(a, 0, 0),
                                                    e(t);
                                            }),
                                            (a.onerror = r);
                                    })
                                );
                            case 1:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function Ae(e) {
        var t = new Date(),
            r = t.getFullYear(),
            a = String(t.getMonth() + 1).padStart(2, "0"),
            n = String(t.getDate()).padStart(2, "0"),
            o = String(t.getHours()).padStart(2, "0"),
            c = String(t.getMinutes()).padStart(2, "0"),
            l = String(t.getSeconds()).padStart(2, "0");
        return ""
            .concat(e, "_")
            .concat(r, "-")
            .concat(a, "-")
            .concat(n, "_")
            .concat(o, "-")
            .concat(c, "-")
            .concat(l, ".png");
    }
    function Ne(e) {
        var t = {
            "border-color": [
                "border-top-color",
                "border-right-color",
                "border-bottom-color",
                "border-left-color",
            ],
            "border-style": [
                "border-top-style",
                "border-right-style",
                "border-bottom-style",
                "border-left-style",
            ],
            "border-width": [
                "border-top-width",
                "border-right-width",
                "border-bottom-width",
                "border-left-width",
            ],
            "border-radius": [
                "border-top-left-radius",
                "border-top-right-radius",
                "border-bottom-right-radius",
                "border-bottom-left-radius",
            ],
            margin: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
            padding: [
                "padding-top",
                "padding-right",
                "padding-bottom",
                "padding-left",
            ],
        },
            r = c({}, e);
        for (var a in t) {
            var n,
                o = t[a],
                l = [],
                u = s(o);
            try {
                for (u.s(); !(n = u.n()).done;) {
                    var i = n.value;
                    l.push(e[i]);
                }
            } catch (e) {
                u.e(e);
            } finally {
                u.f();
            }
            if (
                l.every(function (e) {
                    return void 0 !== e;
                })
            ) {
                var d = l[0],
                    p = l[1],
                    f = l[2],
                    v = l[3],
                    b = void 0;
                (b =
                    d === p && d === f && d === v
                        ? d
                        : d === f && p === v
                            ? "".concat(d, " ").concat(p)
                            : p === v
                                ? "".concat(d, " ").concat(p, " ").concat(f)
                                : "".concat(d, " ").concat(p, " ").concat(f, " ").concat(v)),
                    (r[a] = b);
                var h,
                    y = s(o);
                try {
                    for (y.s(); !(h = y.n()).done;) {
                        delete r[h.value];
                    }
                } catch (e) {
                    y.e(e);
                } finally {
                    y.f();
                }
            }
        }
        return r;
    }
    function Ie(e) {
        if (e.target.matches('input[type="radio"]')) {
            var t,
                r = e.target.id,
                a = s(document.querySelectorAll("[data-tab]"));
            try {
                for (a.s(); !(t = a.n()).done;) {
                    var n = t.value;
                    n.getAttribute("data-tab") === r
                        ? n.classList.remove("hidden")
                        : n.classList.add("hidden");
                }
            } catch (e) {
                a.e(e);
            } finally {
                a.f();
            }
        }
    }
    function Oe() {
        return Re.apply(this, arguments);
    }
    function Re() {
        return (Re = v(
            n().mark(function e() {
                var t, a, o, c, l, u, i, d, p, f, v, h, y, g, m, x, k, S, w, q;
                return n().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (t = document.getElementById("element-list-container")),
                                        (a = document.getElementById("element-list")),
                                        (o = document.getElementById("no-results")),
                                        (c = document.getElementById("loader-tab-2")),
                                        (l = setTimeout(function () {
                                            c.classList.remove("hidden");
                                        }, 150)),
                                        (u = null),
                                        (e.prev = 6),
                                        (e.next = 9),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "get_all_changes",
                                        })
                                    );
                                case 9:
                                    (u = e.sent), (e.next = 19);
                                    break;
                                case 12:
                                    return (
                                        (e.prev = 12),
                                        (e.t0 = e.catch(6)),
                                        o.classList.remove("hidden"),
                                        t.classList.add("hidden"),
                                        clearTimeout(l),
                                        c.classList.add("hidden"),
                                        e.abrupt("return")
                                    );
                                case 19:
                                    if (
                                        (clearTimeout(l),
                                            c.classList.add("hidden"),
                                            u && u.success && u.changes && 0 !== u.changes.length)
                                    ) {
                                        e.next = 27;
                                        break;
                                    }
                                    return (
                                        o.classList.remove("hidden"),
                                        t.classList.add("hidden"),
                                        e.abrupt("return")
                                    );
                                case 27:
                                    o.classList.add("hidden"), t.classList.remove("hidden");
                                case 29:
                                    (i = new Map()), (d = s(u.changes));
                                    try {
                                        for (d.s(); !(p = d.n()).done;)
                                            (f = p.value),
                                                (v = JSON.stringify({
                                                    selector: f.selector,
                                                    updatedStyles: f.updatedStyles,
                                                })),
                                                i.has(v) || i.set(v, []),
                                                i.get(v).push(f);
                                    } catch (e) {
                                        d.e(e);
                                    } finally {
                                        d.f();
                                    }
                                    (a.innerHTML = ""),
                                        (h = Array.from(i.values()).reverse()),
                                        (y = s(h));
                                    try {
                                        for (y.s(); !(g = y.n()).done;) {
                                            (m = g.value),
                                                ((x = document.createElement("ul")).className =
                                                    "element-list"),
                                                (k = s(m));
                                            try {
                                                for (k.s(); !(S = k.n()).done;)
                                                    (w = S.value),
                                                        ((q = document.createElement("li")).className =
                                                            "element-row"),
                                                        (q.innerText = w.selector),
                                                        (q.dataset.elementid = w.id),
                                                        x.appendChild(q);
                                            } catch (e) {
                                                k.e(e);
                                            } finally {
                                                k.f();
                                            }
                                            a.appendChild(x);
                                        }
                                    } catch (e) {
                                        y.e(e);
                                    } finally {
                                        y.f();
                                    }
                                case 36:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[6, 12]]
                );
            })
        )).apply(this, arguments);
    }
    function Ue(e) {
        return e
            .map(function (e) {
                var t = e.selector,
                    r = e.updatedStyles,
                    a = t
                        .split(",")
                        .map(function (e) {
                            return e.trim();
                        })
                        .join(", "),
                    n = Object.entries(r)
                        .map(function (e) {
                            var t = i(e, 2),
                                r = t[0],
                                a = t[1];
                            return "  ".concat(r, ": ").concat(a, ";");
                        })
                        .join("\n");
                return "".concat(a, " {\n").concat(n, "\n}");
            })
            .join("\n\n");
    }
    function je(e) {
        var t = {},
            r = {},
            a = {};
        function n(e) {
            return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(e);
        }
        function o(e) {
            return /^([a-zA-Z][a-zA-Z0-9_-]*)?(\.[^\s>+~:#[\]()]+)+$/.test(e);
        }
        function l(e) {
            for (
                var t, r = [], a = /(^|[\s>+~])([a-zA-Z][a-zA-Z0-9_-]*)/g;
                null !== (t = a.exec(e));

            )
                r.push(t[2]);
            return r;
        }
        function u(e) {
            for (
                var t, r = [], a = /\.([^.#\s>+~:[\]]+)/g;
                null !== (t = a.exec(e));

            )
                r.push(t[1]);
            return r;
        }
        var d,
            p = s(e);
        try {
            for (p.s(); !(d = p.n()).done;) {
                var f = d.value,
                    v = f.selector,
                    b = f.updatedStyles;
                n(v)
                    ? (t[v] = c(c({}, t[v]), b))
                    : o(v)
                        ? (r[v] = c(c({}, r[v]), b))
                        : (a[v] = c(c({}, a[v]), b));
            }
        } catch (e) {
            p.e(e);
        } finally {
            p.f();
        }
        for (var h = [], y = 0, g = Object.entries(a); y < g.length; y++) {
            var m,
                x = i(g[y], 2),
                k = x[0],
                S = x[1],
                w = s(l(k));
            try {
                for (w.s(); !(m = w.n()).done;) {
                    var q = m.value;
                    if (t[q])
                        for (var E = 0, T = Object.entries(t[q]); E < T.length; E++) {
                            var L = i(T[E], 2),
                                _ = L[0],
                                C = L[1];
                            S[_] === C && delete S[_];
                        }
                }
            } catch (e) {
                w.e(e);
            } finally {
                w.f();
            }
            Object.keys(S).length > 0 && h.push({ selector: k, updatedStyles: S });
        }
        for (var M = [], A = 0, N = h; A < N.length; A++) {
            for (
                var I = N[A],
                O = I.selector,
                R = I.updatedStyles,
                U = u(O),
                j = function () {
                    var e = i(P[B], 2),
                        t = e[0],
                        r = e[1],
                        a = u(t);
                    if (
                        U.filter(function (e) {
                            return a.includes(e);
                        }).length > 0
                    )
                        for (var n = 0, o = Object.entries(r); n < o.length; n++) {
                            var c = i(o[n], 2),
                                l = c[0],
                                s = c[1];
                            R[l] === s && delete R[l];
                        }
                },
                B = 0,
                P = Object.entries(r);
                B < P.length;
                B++
            )
                j();
            Object.keys(R).length > 0 && M.push({ selector: O, updatedStyles: R });
        }
        for (var D = [], H = 0, G = Object.entries(t); H < G.length; H++) {
            var F = i(G[H], 2),
                z = F[0],
                W = F[1];
            D.push({ selector: z, updatedStyles: W });
        }
        for (var V = 0, Y = Object.entries(r); V < Y.length; V++) {
            var $ = i(Y[V], 2),
                K = $[0],
                X = $[1];
            D.push({ selector: K, updatedStyles: X });
        }
        D.push.apply(D, M);
        for (var Z = new Map(), J = 0, Q = D; J < Q.length; J++) {
            var ee = Q[J],
                te = ee.selector,
                re = ee.updatedStyles,
                ae = JSON.stringify(re);
            Z.has(ae)
                ? Z.get(ae).selectors.add(te)
                : Z.set(ae, { updatedStyles: re, selectors: new Set([te]) });
        }
        var ne,
            oe = [],
            ce = s(Z.values());
        try {
            for (ce.s(); !(ne = ce.n()).done;) {
                var le = ne.value,
                    ue = le.updatedStyles,
                    ie = le.selectors,
                    se = Array.from(ie).join(", ");
                oe.push({ selector: se, updatedStyles: ue });
            }
        } catch (e) {
            ce.e(e);
        } finally {
            ce.f();
        }
        return oe;
    }
    function Be(e) {
        return Pe.apply(this, arguments);
    }
    function Pe() {
        return (Pe = v(
            n().mark(function e(t) {
                var a, o, c;
                return n().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if (((a = t.target), !(o = a.closest("[data-elementid]")))) {
                                        e.next = 11;
                                        break;
                                    }
                                    return (
                                        (c = o.dataset.elementid),
                                        (e.prev = 4),
                                        (e.next = 7),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "highlight_selected",
                                            elementId: c,
                                        })
                                    );
                                case 7:
                                    e.next = 11;
                                    break;
                                case 9:
                                    (e.prev = 9), (e.t0 = e.catch(4));
                                case 11:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[4, 9]]
                );
            })
        )).apply(this, arguments);
    }
    function De(e) {
        return He.apply(this, arguments);
    }
    function He() {
        return (He = v(
            n().mark(function e(t) {
                var a, o, c;
                return n().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if (((a = t.target), !(o = a.closest("[data-elementid]")))) {
                                        e.next = 11;
                                        break;
                                    }
                                    return (
                                        (c = o.dataset.elementid),
                                        (e.prev = 4),
                                        (e.next = 7),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "highlight_hovered",
                                            elementId: c,
                                        })
                                    );
                                case 7:
                                    e.next = 11;
                                    break;
                                case 9:
                                    (e.prev = 9), (e.t0 = e.catch(4));
                                case 11:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[4, 9]]
                );
            })
        )).apply(this, arguments);
    }
    function Ge(e) {
        return Fe.apply(this, arguments);
    }
    function Fe() {
        return (Fe = v(
            n().mark(function e(t) {
                var a, o, c;
                return n().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if (((a = t.target), !(o = a.closest("[data-elementid]")))) {
                                        e.next = 14;
                                        break;
                                    }
                                    return (
                                        (c = o.dataset.elementid),
                                        (e.prev = 4),
                                        (e.next = 7),
                                        r.sendMessageToTab(b, {
                                            target: "script",
                                            action: "remove_highlight_hovered",
                                            elementId: c,
                                        })
                                    );
                                case 7:
                                    e.sent.success ||
                                        window.alert(
                                            chrome.i18n.getMessage("ALERT_NO_SELECTED_ELEMENT")
                                        ),
                                        (e.next = 14);
                                    break;
                                case 11:
                                    (e.prev = 11),
                                        (e.t0 = e.catch(4)),
                                        window.alert(
                                            chrome.i18n.getMessage(
                                                "ALERT_COULDNT_COMMUNICATE_WITH_TAB"
                                            )
                                        );
                                case 14:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[4, 11]]
                );
            })
        )).apply(this, arguments);
    }
    function ze() {
        return (ze = v(
            n().mark(function e(t, r) {
                return n().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                if (!t.presets || !t.presets.newValue) {
                                    e.next = 3;
                                    break;
                                }
                                return (e.next = 3), k();
                            case 3:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function We() {
        var e,
            t = s(document.querySelectorAll(".pro-badge"));
        try {
            for (t.s(); !(e = t.n()).done;) {
                e.value.remove();
            }
        } catch (e) {
            t.e(e);
        } finally {
            t.f();
        }
    }
    function Ve(e, t, r, a) {
        return e === t && e === r && e === a
            ? e
            : e === r && t === a
                ? "".concat(e, " ").concat(t)
                : t === a
                    ? "".concat(e, " ").concat(t, " ").concat(r)
                    : "".concat(e, " ").concat(t, " ").concat(r, " ").concat(a);
    }
    chrome.runtime.onMessage.addListener(function (e, t, r) {
        if ("side_panel" !== e.target) return;
        switch (e.action) {
            case "select":
                (l = document.getElementById("app")),
                    (i = document.getElementById("empty")),
                    l.classList.remove("hidden"),
                    i.classList.add("hidden"),
                    (c = e.cssProperties),
                    (function (e) {
                        var t = document.getElementById("selector"),
                            r = t.querySelector('[data-control="parent-selector"]'),
                            a = t.querySelector('[data-control="selector"]'),
                            n = t.querySelector('[data-control="child-selector"]');
                        (a.innerHTML = ""),
                            (r.innerHTML = ""),
                            (n.innerHTML = ""),
                            e.elementName && (a.innerText = e.elementName),
                            e.parentName && (r.innerText = e.parentName),
                            e.childName && (n.innerText = e.childName);
                    })(e.elementDetails),
                    B(c),
                    j(c),
                    P(c),
                    D(c),
                    H(c),
                    G(c),
                    (function (e) {
                        !(function (e, t) {
                            var r = t.display,
                                a = t["justify-content"],
                                n = t["align-items"],
                                o = t["column-gap"],
                                c = t["row-gap"],
                                l = e.querySelector('[data-control="column-gap"]');
                            l.value = qe(te(o));
                            var i = e.querySelector('[data-control="row-gap"]');
                            i.value = qe(te(c));
                            var s = e.querySelector('[data-control="display"]');
                            u(s.options)
                                .map(function (e) {
                                    return e.value;
                                })
                                .includes(r)
                                ? (s.value = r)
                                : "inline flex" === r
                                    ? (s.value = "inline-flex")
                                    : "inline grid" === r
                                        ? (s.value = "inline-grid")
                                        : (r.startsWith("block"), (s.value = "block"));
                            var d = ["flex-start", "self-start", "left", "start"],
                                p = ["flex-end", "self-end", "right", "end"],
                                f = ["baseline", "first baseline", "last baseline"],
                                v = e.querySelector('[data-control="horizontal-align"]');
                            u(v.options)
                                .map(function (e) {
                                    return e.value;
                                })
                                .includes(a)
                                ? (v.value = a)
                                : d.includes(a)
                                    ? (v.value = "start")
                                    : p.includes(a)
                                        ? (v.value = "end")
                                        : (v.value = "normal");
                            var b = e.querySelector('[data-control="vertical-align"]');
                            u(b.options)
                                .map(function (e) {
                                    return e.value;
                                })
                                .includes(n)
                                ? (b.value = n)
                                : d.includes(n)
                                    ? (b.value = "start")
                                    : p.includes(n)
                                        ? (b.value = "end")
                                        : f.includes(n)
                                            ? (b.value = "baseline")
                                            : (b.value = "normal");
                        })(document.getElementById("layout"), e);
                    })(c),
                    (h = c);
                break;
            case "clear":
                V();
                break;
            case "page_updated":
                e.tabId === b &&
                    ((h = null),
                        (y = !1),
                        V(),
                        (a = document.getElementById("element-list-container")),
                        (n = document.getElementById("element-list")),
                        (o = document.getElementById("no-results")),
                        (n.innerHTML = ""),
                        o.classList.remove("hidden"),
                        a.classList.add("hidden"));
        }
        var a, n, o;
        var c;
        var l, i;
    }),
        chrome.storage.onChanged.addListener(function (e, t) {
            return ze.apply(this, arguments);
        }),
        document.addEventListener("DOMContentLoaded", function () {
            return m.apply(this, arguments);
        });
})();
