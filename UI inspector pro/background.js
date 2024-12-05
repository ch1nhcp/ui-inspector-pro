(() => {
    "use strict";
    var e = {};
    function t(e) {
        return function () {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
            return new Promise(function (t, n) {
                e.apply(
                    void 0,
                    r.concat([
                        function (e) {
                            chrome.runtime.lastError
                                ? n(
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
    function n(e) {
        return (
            (n =
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
            n(e)
        );
    }
    function a() {
        a = function () {
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
            i = "function" == typeof Symbol ? Symbol : {},
            s = i.iterator || "@@iterator",
            u = i.asyncIterator || "@@asyncIterator",
            l = i.toStringTag || "@@toStringTag";
        function p(e, t, r) {
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
            p({}, "");
        } catch (e) {
            p = function (e, t, r) {
                return (e[t] = r);
            };
        }
        function h(e, t, r, n) {
            var a = t && t.prototype instanceof b ? t : b,
                o = Object.create(a.prototype),
                i = new C(n || []);
            return c(o, "_invoke", { value: S(e, r, i) }), o;
        }
        function f(e, t, r) {
            try {
                return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
                return { type: "throw", arg: e };
            }
        }
        t.wrap = h;
        var d = "suspendedStart",
            v = "suspendedYield",
            m = "executing",
            g = "completed",
            y = {};
        function b() { }
        function x() { }
        function w() { }
        var k = {};
        p(k, s, function () {
            return this;
        });
        var _ = Object.getPrototypeOf,
            L = _ && _(_(A([])));
        L && L !== r && o.call(L, s) && (k = L);
        var E = (w.prototype = b.prototype = Object.create(k));
        function P(e) {
            ["next", "throw", "return"].forEach(function (t) {
                p(e, t, function (e) {
                    return this._invoke(t, e);
                });
            });
        }
        function I(e, t) {
            function r(a, c, i, s) {
                var u = f(e[a], e, c);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        p = l.value;
                    return p && "object" == n(p) && o.call(p, "__await")
                        ? t.resolve(p.__await).then(
                            function (e) {
                                r("next", e, i, s);
                            },
                            function (e) {
                                r("throw", e, i, s);
                            }
                        )
                        : t.resolve(p).then(
                            function (e) {
                                (l.value = e), i(l);
                            },
                            function (e) {
                                return r("throw", e, i, s);
                            }
                        );
                }
                s(u.arg);
            }
            var a;
            c(this, "_invoke", {
                value: function (e, n) {
                    function o() {
                        return new t(function (t, a) {
                            r(e, n, t, a);
                        });
                    }
                    return (a = a ? a.then(o, o) : o());
                },
            });
        }
        function S(t, r, n) {
            var a = d;
            return function (o, c) {
                if (a === m) throw Error("Generator is already running");
                if (a === g) {
                    if ("throw" === o) throw c;
                    return { value: e, done: !0 };
                }
                for (n.method = o, n.arg = c; ;) {
                    var i = n.delegate;
                    if (i) {
                        var s = T(i, n);
                        if (s) {
                            if (s === y) continue;
                            return s;
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (a === d) throw ((a = g), n.arg);
                        n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    a = m;
                    var u = f(t, r, n);
                    if ("normal" === u.type) {
                        if (((a = n.done ? g : v), u.arg === y)) continue;
                        return { value: u.arg, done: n.done };
                    }
                    "throw" === u.type &&
                        ((a = g), (n.method = "throw"), (n.arg = u.arg));
                }
            };
        }
        function T(t, r) {
            var n = r.method,
                a = t.iterator[n];
            if (a === e)
                return (
                    (r.delegate = null),
                    ("throw" === n &&
                        t.iterator.return &&
                        ((r.method = "return"),
                            (r.arg = e),
                            T(t, r),
                            "throw" === r.method)) ||
                    ("return" !== n &&
                        ((r.method = "throw"),
                            (r.arg = new TypeError(
                                "The iterator does not provide a '" + n + "' method"
                            )))),
                    y
                );
            var o = f(a, t.iterator, r.arg);
            if ("throw" === o.type)
                return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), y;
            var c = o.arg;
            return c
                ? c.done
                    ? ((r[t.resultName] = c.value),
                        (r.next = t.nextLoc),
                        "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                        (r.delegate = null),
                        y)
                    : c
                : ((r.method = "throw"),
                    (r.arg = new TypeError("iterator result is not an object")),
                    (r.delegate = null),
                    y);
        }
        function O(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
        }
        function j(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function C(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(O, this),
                this.reset(!0);
        }
        function A(t) {
            if (t || "" === t) {
                var r = t[s];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var a = -1,
                        c = function r() {
                            for (; ++a < t.length;)
                                if (o.call(t, a)) return (r.value = t[a]), (r.done = !1), r;
                            return (r.value = e), (r.done = !0), r;
                        };
                    return (c.next = c);
                }
            }
            throw new TypeError(n(t) + " is not iterable");
        }
        return (
            (x.prototype = w),
            c(E, "constructor", { value: w, configurable: !0 }),
            c(w, "constructor", { value: x, configurable: !0 }),
            (x.displayName = p(w, l, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                    !!t && (t === x || "GeneratorFunction" === (t.displayName || t.name))
                );
            }),
            (t.mark = function (e) {
                return (
                    Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, w)
                        : ((e.__proto__ = w), p(e, l, "GeneratorFunction")),
                    (e.prototype = Object.create(E)),
                    e
                );
            }),
            (t.awrap = function (e) {
                return { __await: e };
            }),
            P(I.prototype),
            p(I.prototype, u, function () {
                return this;
            }),
            (t.AsyncIterator = I),
            (t.async = function (e, r, n, a, o) {
                void 0 === o && (o = Promise);
                var c = new I(h(e, r, n, a), o);
                return t.isGeneratorFunction(r)
                    ? c
                    : c.next().then(function (e) {
                        return e.done ? e.value : c.next();
                    });
            }),
            P(E),
            p(E, l, "Generator"),
            p(E, s, function () {
                return this;
            }),
            p(E, "toString", function () {
                return "[object Generator]";
            }),
            (t.keys = function (e) {
                var t = Object(e),
                    r = [];
                for (var n in t) r.push(n);
                return (
                    r.reverse(),
                    function e() {
                        for (; r.length;) {
                            var n = r.pop();
                            if (n in t) return (e.value = n), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                    }
                );
            }),
            (t.values = A),
            (C.prototype = {
                constructor: C,
                reset: function (t) {
                    if (
                        ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = e),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = "next"),
                            (this.arg = e),
                            this.tryEntries.forEach(j),
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
                    function n(n, a) {
                        return (
                            (i.type = "throw"),
                            (i.arg = t),
                            (r.next = n),
                            a && ((r.method = "next"), (r.arg = e)),
                            !!a
                        );
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var c = this.tryEntries[a],
                            i = c.completion;
                        if ("root" === c.tryLoc) return n("end");
                        if (c.tryLoc <= this.prev) {
                            var s = o.call(c, "catchLoc"),
                                u = o.call(c, "finallyLoc");
                            if (s && u) {
                                if (this.prev < c.catchLoc) return n(c.catchLoc, !0);
                                if (this.prev < c.finallyLoc) return n(c.finallyLoc);
                            } else if (s) {
                                if (this.prev < c.catchLoc) return n(c.catchLoc, !0);
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < c.finallyLoc) return n(c.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (
                            n.tryLoc <= this.prev &&
                            o.call(n, "finallyLoc") &&
                            this.prev < n.finallyLoc
                        ) {
                            var a = n;
                            break;
                        }
                    }
                    a &&
                        ("break" === e || "continue" === e) &&
                        a.tryLoc <= t &&
                        t <= a.finallyLoc &&
                        (a = null);
                    var c = a ? a.completion : {};
                    return (
                        (c.type = e),
                        (c.arg = t),
                        a
                            ? ((this.method = "next"), (this.next = a.finallyLoc), y)
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
                        y
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc), j(r), y;
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var a = n.arg;
                                j(r);
                            }
                            return a;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (t, r, n) {
                    return (
                        (this.delegate = { iterator: A(t), resultName: r, nextLoc: n }),
                        "next" === this.method && (this.arg = e),
                        y
                    );
                },
            }),
            t
        );
    }
    function o(e, t, r, n, a, o, c) {
        try {
            var i = e[o](c),
                s = i.value;
        } catch (e) {
            return void r(e);
        }
        i.done ? t(s) : Promise.resolve(s).then(n, a);
    }
    function c(e) {
        return function () {
            var t = this,
                r = arguments;
            return new Promise(function (n, a) {
                var c = e.apply(t, r);
                function i(e) {
                    o(c, n, a, i, s, "next", e);
                }
                function s(e) {
                    o(c, n, a, i, s, "throw", e);
                }
                i(void 0);
            });
        };
    }
    chrome.runtime.onInstalled.addListener(function (e) {
        return l.apply(this, arguments);
    }),
        chrome.runtime.onStartup.addListener(function () {
            return p.apply(this, arguments);
        }),
        chrome.action.onClicked.addListener(function (e) {
            return d.apply(this, arguments);
        }),
        chrome.tabs.onUpdated.addListener(function (e, t, r) {
            return y.apply(this, arguments);
        }),
        chrome.runtime.onMessage.addListener(function (e, t, n) {
            if ("background" !== e.target) return;
            switch (e.action) {
                case "vps":
                    return (
                        (function () {
                            return _.apply(this, arguments);
                        })()
                            .then(function (e) {
                                n(
                                    null === e
                                        ? { success: !1, status: "offline" }
                                        : e
                                            ? { success: !0, status: "ready" }
                                            : { success: !1, status: "ready" }
                                );
                            })
                            .catch(function () {
                                n({ success: !1, status: "offline" });
                            }),
                        !0
                    );
                case "open_payment_page":
                    return (
                        r
                            .tabsCreate({ url: u })
                            .then(function () {
                                n({ success: !0 });
                            })
                            .catch(function () {
                                n({ success: !1 });
                            }),
                        !0
                    );
                case "validate_license":
                    return e.licenseKey
                        ? ((function (e) {
                            return L.apply(this, arguments);
                        })(e.licenseKey)
                            .then(function (e) {
                                switch (e) {
                                    case "validated":
                                        n({ success: !0, status: "validated" });
                                        break;
                                    case "overactivated":
                                        n({ success: !1, status: "overactivated" });
                                        break;
                                    case "revoked":
                                        n({ success: !1, status: "revoked" });
                                        break;
                                    case "invalid":
                                        n({ success: !1, status: "invalid" });
                                        break;
                                    default:
                                        n({ success: !1, status: "error" });
                                }
                            })
                            .catch(function () {
                                n({ success: !1, status: "error" });
                            }),
                            !0)
                        : void n({ success: !1, status: "missing_key" });
                default:
                    return n({ success: !1, message: "Unknown action." }), !0;
            }
        }),
        chrome.tabs.onActivated.addListener(function (e) {
            return E.apply(this, arguments);
        });
    var i = new Map(),
        s = "im3R_mGi5J8rPyc9OctE-w==",
        u = "https://4480672302747.gumroad.com/l/ui-inspector";
    function l() {
        return (l = c(
            a().mark(function e(t) {
                return a().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), h();
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function p() {
        return (p = c(
            a().mark(function e() {
                return a().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), h();
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function h() {
        return f.apply(this, arguments);
    }
    function f() {
        return (f = c(
            a().mark(function e() {
                var t;
                return a().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), r.actionDisable();
                                case 2:
                                    return (
                                        (e.prev = 2),
                                        (e.next = 5),
                                        r.onPageChangedRemoveRules(void 0)
                                    );
                                case 5:
                                    return (
                                        (t = {
                                            conditions: [
                                                new chrome.declarativeContent.PageStateMatcher({
                                                    pageUrl: {
                                                        schemes: ["http", "https", "file", "ftp"],
                                                    },
                                                }),
                                            ],
                                            actions: [new chrome.declarativeContent.ShowAction()],
                                        }),
                                        (e.next = 8),
                                        r.onPageChangedAddRules([t])
                                    );
                                case 8:
                                    e.next = 13;
                                    break;
                                case 10:
                                    (e.prev = 10), (e.t0 = e.catch(2)), console.error(e.t0);
                                case 13:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[2, 10]]
                );
            })
        )).apply(this, arguments);
    }
    function d() {
        return (d = c(
            a().mark(function e(t) {
                return a().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                    g(t.url.toLowerCase()) &&
                                    !t.discarded &&
                                    "unloaded" !== t.status
                                ) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return");
                            case 3:
                                return (
                                    chrome.sidePanel.setOptions({
                                        tabId: t.id,
                                        path: "side_panel.html?tabId=".concat(t.id),
                                        enabled: !0,
                                    }),
                                    chrome.sidePanel.open({ tabId: t.id }),
                                    (e.next = 7),
                                    v(t)
                                );
                            case 7:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function v(e) {
        return m.apply(this, arguments);
    }
    function m() {
        return (m = c(
            a().mark(function e(t) {
                var n, o;
                return a().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        r.sendMessageToTab(t.id, {
                                            target: "script",
                                            action: "check_script_is_active",
                                        })
                                    );
                                case 3:
                                    e.next = 17;
                                    break;
                                case 5:
                                    if (
                                        ((e.prev = 5),
                                            (e.t0 = e.catch(0)),
                                            console.log(
                                                "No content script found, attempting to inject script now"
                                            ),
                                            !t.id)
                                    ) {
                                        e.next = 17;
                                        break;
                                    }
                                    return (
                                        (e.prev = 9),
                                        (e.next = 12),
                                        r.executeScript({
                                            target: { tabId: t.id },
                                            files: ["content_script.js"],
                                        })
                                    );
                                case 12:
                                    e.next = 17;
                                    break;
                                case 14:
                                    (e.prev = 14),
                                        (e.t1 = e.catch(9)),
                                        console.log("Error injecting content script:", e.t1);
                                case 17:
                                    return (
                                        (e.prev = 17),
                                        (e.prev = 18),
                                        (e.next = 21),
                                        r.sendMessageToTab(t.id, {
                                            target: "script",
                                            action: "toggle_script",
                                        })
                                    );
                                case 21:
                                    (n = e.sent),
                                        (o = n.scriptIsActive) ||
                                        chrome.sidePanel.setOptions({
                                            tabId: t.id,
                                            path: "side_panel.html",
                                            enabled: !1,
                                        }),
                                        w(t.id, o),
                                        (e.next = 30);
                                    break;
                                case 27:
                                    (e.prev = 27), (e.t2 = e.catch(18)), console.log(e.t2);
                                case 30:
                                    return e.finish(17);
                                case 31:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [
                        [0, 5, 17, 31],
                        [9, 14],
                        [18, 27],
                    ]
                );
            })
        )).apply(this, arguments);
    }
    function g(e) {
        return ![
            /^chrome:/,
            /^edge:/,
            /^chrome-extension:/,
            /^(https?:\/\/)?(www\.)?chrome\.google\.com\/webstore/,
            /^(https?:\/\/)?chromewebstore\.google\.com/,
        ].some(function (t) {
            return t.test(e);
        });
    }
    function y() {
        return (y = c(
            a().mark(function e(t, n, o) {
                return a().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    if ("complete" !== n.status) {
                                        e.next = 19;
                                        break;
                                    }
                                    if (g(o.url) && !o.discarded && "unloaded" !== o.status) {
                                        e.next = 3;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return (e.next = 5), b(t);
                                case 5:
                                    return (
                                        (e.prev = 5),
                                        (e.next = 8),
                                        r.sendMessageToTab(o.id, {
                                            target: "script",
                                            action: "check_script_is_active",
                                        })
                                    );
                                case 8:
                                    e.next = 19;
                                    break;
                                case 10:
                                    return (
                                        (e.prev = 10),
                                        (e.t0 = e.catch(5)),
                                        (e.prev = 12),
                                        (e.next = 15),
                                        r.sendMessage({
                                            target: "side_panel",
                                            action: "page_updated",
                                            tabId: o.id,
                                        })
                                    );
                                case 15:
                                    e.next = 19;
                                    break;
                                case 17:
                                    (e.prev = 17), (e.t1 = e.catch(12));
                                case 19:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [
                        [5, 10],
                        [12, 17],
                    ]
                );
            })
        )).apply(this, arguments);
    }
    function b(e) {
        return x.apply(this, arguments);
    }
    function x() {
        return (x = c(
            a().mark(function e(t) {
                var n;
                return a().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        r.sendMessageToTab(t, {
                                            target: "script",
                                            action: "check_script_is_active",
                                        })
                                    );
                                case 3:
                                    return (n = e.sent), (e.next = 6), w(t, n.scriptIsActive);
                                case 6:
                                    e.next = 11;
                                    break;
                                case 8:
                                    (e.prev = 8),
                                        (e.t0 = e.catch(0)),
                                        console.log(
                                            "Error or no content script running in tab",
                                            e.t0
                                        );
                                case 11:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[0, 8]]
                );
            })
        )).apply(this, arguments);
    }
    function w(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        return (k = c(
            a().mark(function e(t, n) {
                var o, s;
                return a().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                i.has(t) && (clearInterval(i.get(t)), i.delete(t)),
                                    (o = n ? 1 : 17),
                                    (s = setInterval(
                                        c(
                                            a().mark(function e() {
                                                var c;
                                                return a().wrap(function (e) {
                                                    for (; ;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (c = ""
                                                                        .concat("icons/iconframe_")
                                                                        .concat(o, ".png")),
                                                                    (e.next = 3),
                                                                    r.setActionIcon({ path: c, tabId: t })
                                                                );
                                                            case 3:
                                                                if (!n) {
                                                                    e.next = 14;
                                                                    break;
                                                                }
                                                                if (17 !== o) {
                                                                    e.next = 11;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 7),
                                                                    r.setActionIcon({
                                                                        path: "icons/icon32_active.png",
                                                                        tabId: t,
                                                                    })
                                                                );
                                                            case 7:
                                                                clearInterval(s), i.delete(t), (e.next = 12);
                                                                break;
                                                            case 11:
                                                                o++;
                                                            case 12:
                                                                e.next = 22;
                                                                break;
                                                            case 14:
                                                                if (1 !== o) {
                                                                    e.next = 21;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 17),
                                                                    r.setActionIcon({
                                                                        path: "icons/icon32.png",
                                                                        tabId: t,
                                                                    })
                                                                );
                                                            case 17:
                                                                clearInterval(s), i.delete(t), (e.next = 22);
                                                                break;
                                                            case 21:
                                                                o--;
                                                            case 22:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        ),
                                        17
                                    )),
                                    i.set(t, s);
                            case 4:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function _() {
        return (_ = c(
            a().mark(function e() {
                return a().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        e.abrupt("return", true)
                                    );
                                case 1:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e
                );
            })
        )).apply(this, arguments);
    }
    function L() {
        return (L = c(
            a().mark(function e(t) {
                return a().wrap(function (e) {
                    for (; ;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return e.abrupt("return", {
                                    success: true,
                                    status: "validated"
                                });
                            case 1:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )).apply(this, arguments);
    }
    function E() {
        return (E = c(
            a().mark(function e(t) {
                return a().wrap(
                    function (e) {
                        for (; ;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        r.sendMessageToTab(t.tabId, {
                                            target: "script",
                                            action: "tab_activated",
                                        })
                                    );
                                case 3:
                                    e.next = 8;
                                    break;
                                case 5:
                                    (e.prev = 5),
                                        (e.t0 = e.catch(0)),
                                        console.log("No content script running in tab");
                                case 8:
                                case "end":
                                    return e.stop();
                            }
                    },
                    e,
                    null,
                    [[0, 5]]
                );
            })
        )).apply(this, arguments);
    }
})();
