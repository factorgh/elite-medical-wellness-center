// source --> https://zoewellness.com/wp-content/plugins/smart-slider-3/Public/SmartSlider3/Application/Frontend/Assets/dist/n2.min.js?ver=40b842f2 
! function(t) {
    var i = t;
    i._N2 = i._N2 || {
        _r: [],
        _d: [],
        r: function() {
            this._r.push(arguments)
        },
        d: function() {
            this._d.push(arguments)
        }
    };
    var n, s, r = t.document,
        o = r.documentElement,
        h = t.setTimeout,
        a = t.clearTimeout,
        u = i._N2,
        c = (t.requestAnimationFrame, function(t, i = null, n = null, s = null) {
            const o = r.createElement(t);
            return i && ("string" == typeof i ? g(o, i) : b(o, i)), n && v(o, n), s && m(o, s), o
        }),
        f = Object.assign,
        l = function(t, i, n) {
            t.setAttribute(i, n)
        },
        v = function(t, i) {
            for (var n in i) l(t, n, i[n])
        },
        d = function(t, i) {
            return t.dataset[i]
        },
        p = function(t, i, n) {
            t.dataset[i] = n
        },
        m = function(t, i) {
            for (let n in i) p(t, n, i[n])
        },
        g = function(t, i) {
            t.classList.add(i)
        },
        b = function(t, i) {
            i.forEach((function(i) {
                t.classList.add(i)
            }))
        },
        w = function(t, i) {
            return t.dispatchEvent(i)
        },
        y = function(t, i, n) {
            return n = f({
                bubbles: !0,
                cancelable: !0
            }, n), w(t, new Event(i, n))
        },
        M = function(t, i, n, s) {
            return s = s || {}, t.addEventListener(i, n, s), t.removeEventListener.bind(t, i, n, s)
        },
        x = function(t) {
            if ("complete" === r.readyState || "interactive" === r.readyState) t();
            else if (Document && Document.prototype && Document.prototype.addEventListener && Document.prototype.addEventListener !== r.addEventListener) {
                const i = () => {
                    t(), t = () => {}
                };
                r.addEventListener("DOMContentLoaded", i), r.addEventListener("readystatechange", (() => {
                    "complete" !== r.readyState && "interactive" !== r.readyState || i()
                })), Document.prototype.addEventListener.call(r, "DOMContentLoaded", i)
            } else r.addEventListener("DOMContentLoaded", t)
        },
        _ = navigator.userAgent.indexOf("+http://www.google.com/bot.html") > -1 ? function(t) {
            t()
        } : i.requestIdleCallback || function(t) {
            return h(t, 1)
        };
    i.cancelIdleCallback;
    x((function() {
            n = r.body
        })),
        function() {
            "use strict";
            var t = {},
                n = {};
            i.n2Slow = navigator.userAgent.indexOf("Chrome-Lighthouse") > -1 && navigator.userAgent.indexOf("Android") > -1;
            var r = [],
                o = !1;

            function a() {
                var t = performance.now(),
                    n = r;
                r = [];
                for (var s = n.length - 1; s >= 0 && (n.pop().call(), !(performance.now() - t > 7)); s--);
                !i.n2Slow && n.length && (i.n2Slow = !0), n.unshift.apply(n, r), (r = n).length ? _(a, {
                    timeout: 2e3
                }) : o = !1
            }

            function f(t) {
                r.unshift(t), o || (o = !0, _(a, {
                    timeout: 2e3
                }))
            }
            var l = new Date,
                v = function() {
                    if (i.jQuery) {
                        var $ = i.jQuery;
                        u.d("$", (function() {
                            return $
                        }))
                    } else {
                        if (h(v, 20), (new Date).getTime() - l.getTime() > 1e3) c("script").src = u._jQueryFallback
                    }
                };

            function d(i) {
                return !(!i || t[i] !== s) && (t[i] = new Promise((function(t) {
                    n[i] = t
                })), "$" === i && v(), !0)
            }

            function p(i, s, r) {
                var o = [];
                if (d(i) || n[i]) {
                    if ("function" == typeof s ? (r = s, s = []) : "string" == typeof s && (s = [s]), (s = s || []).length)
                        for (var h = 0; h < s.length; h++) d(s[h]), o.push(t[s[h]]);
                    Promise.all(o).then(function(t) {
                        u[i] = "function" != typeof r || r.call(u), t()
                    }.bind(this, n[i])), delete n[i]
                }
            }

            function m(i, n) {
                var r = [];
                if (n === s ? (n = i, i = []) : "string" == typeof i && (i = [i]), i = i || [])
                    for (var o = 0; o < i.length; o++) d(i[o]), r.push(t[i[o]]);
                Promise.all(r).then((function() {
                    n.call(u)
                }))
            }
            i.N2DISABLESCHEDULER ? (u.d = p, u.r = m) : (u.d = function(t, i, n) {
                f(p.bind(this, t, i, n))
            }, u.r = function(t, i) {
                f(m.bind(this, t, i))
            });
            for (var g = 0; g < this._N2._d.length; g++) u.d.apply(this, this._N2._d[g]);
            for (var b = 0; b < this._N2._r.length; b++) u.r.apply(this, this._N2._r[b])
        }.call(i), i.NextendThrottle = function(t, i) {
            var n, s;
            return i || (i = 250),
                function() {
                    var r = this,
                        o = +new Date,
                        u = arguments;
                    n && o < n + i ? (a(s), s = h((function() {
                        n = o, t.apply(r, u)
                    }), i)) : (n = o, t.apply(r, u))
                }
        }, i.NextendDeBounce = function(t, i, n) {
            var s;
            return function() {
                var r = this,
                    o = arguments,
                    u = function() {
                        s = null, n || t.apply(r, o)
                    },
                    c = n && !s;
                a(s), s = h(u, i), c && t.apply(r, o)
            }
        }, u.r("nextend-frontend", (function() {
            if (x((function() {
                    u.d("documentReady")
                })), "complete" === r.readyState) u.d("windowLoad");
            else {
                let s;
                const o = navigator.userAgent;
                o.indexOf("Safari") > 0 && -1 === o.indexOf("Chrome") && (s = setInterval((function() {
                    "interactive" !== r.readyState && "complete" !== r.readyState || (u.d("windowLoad"), clearInterval(s))
                }), 2e3)), t = "load", n = function() {
                    u.d("windowLoad"), clearInterval(s)
                }, i.addEventListener(t, n, {
                    once: !0
                })
            }
            var t, n
        })), i.ResizeObserver || (i.ResizeObserver = function() {
            "use strict";
            var t = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, i) {
                        var n = -1;
                        return t.some((function(t, s) {
                            return t[0] === i && (n = s, !0)
                        })), n
                    }
                    return function() {
                        function i() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(i.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), i.prototype.get = function(i) {
                            var n = t(this.__entries__, i),
                                s = this.__entries__[n];
                            return s && s[1]
                        }, i.prototype.set = function(i, n) {
                            var s = t(this.__entries__, i);
                            ~s ? this.__entries__[s][1] = n : this.__entries__.push([i, n])
                        }, i.prototype.delete = function(i) {
                            var n = this.__entries__,
                                s = t(n, i);
                            ~s && n.splice(s, 1)
                        }, i.prototype.has = function(i) {
                            return !!~t(this.__entries__, i)
                        }, i.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, i.prototype.forEach = function(t, i) {
                            void 0 === i && (i = null);
                            for (var n = 0, s = this.__entries__; n < s.length; n++) {
                                var r = s[n];
                                t.call(i, r[1], r[0])
                            }
                        }, i
                    }()
                }(),
                n = void 0 !== i && void 0 !== r && i.document === r,
                s = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : void 0 !== i && i.Math === Math ? i : Function("return this")(),
                o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(s) : function(t) {
                    return h((function() {
                        return t(Date.now())
                    }), 1e3 / 60)
                },
                a = 2;

            function u(t, i) {
                var n = !1,
                    s = !1,
                    r = 0;

                function u() {
                    n && (n = !1, t()), s && f()
                }

                function c() {
                    o(u)
                }

                function f() {
                    var t = Date.now();
                    if (n) {
                        if (t - r < a) return;
                        s = !0
                    } else n = !0, s = !1, h(c, i);
                    r = t
                }
                return f
            }
            var c = 20,
                f = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                l = "undefined" != typeof MutationObserver,
                v = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = u(this.refresh.bind(this), c)
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var i = this.observers_,
                            n = i.indexOf(t);
                        ~n && i.splice(n, 1), !i.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter((function(t) {
                            return t.gatherActive(), t.hasActive()
                        }));
                        return t.forEach((function(t) {
                            return t.broadcastActive()
                        })), t.length > 0
                    }, t.prototype.connect_ = function() {
                        n && !this.connected_ && (r.addEventListener("transitionend", this.onTransitionEnd_), i.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(r, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (r.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        n && this.connected_ && (r.removeEventListener("transitionend", this.onTransitionEnd_), i.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && r.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var i = t.propertyName,
                            n = void 0 === i ? "" : i;
                        f.some((function(t) {
                            return !!~n.indexOf(t)
                        })) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                d = function(t, i) {
                    for (var n = 0, s = Object.keys(i); n < s.length; n++) {
                        var r = s[n];
                        Object.defineProperty(t, r, {
                            value: i[r],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                p = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || s
                },
                m = k(0, 0, 0, 0);

            function g(t) {
                return parseFloat(t) || 0
            }

            function b(t) {
                for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                return i.reduce((function(i, n) {
                    return i + g(t["border-" + n + "-width"])
                }), 0)
            }

            function w(t) {
                for (var i = {}, n = 0, s = ["top", "right", "bottom", "left"]; n < s.length; n++) {
                    var r = s[n],
                        o = t["padding-" + r];
                    i[r] = g(o)
                }
                return i
            }

            function y(t) {
                var i = t.getBBox();
                return k(0, 0, i.width, i.height)
            }

            function M(t) {
                var i = t.clientWidth,
                    n = t.clientHeight;
                if (!i && !n) return m;
                var s = p(t).getComputedStyle(t),
                    r = w(s),
                    o = r.left + r.right,
                    h = r.top + r.bottom,
                    a = g(s.width),
                    u = g(s.height);
                if ("border-box" === s.boxSizing && (Math.round(a + o) !== i && (a -= b(s, "left", "right") + o), Math.round(u + h) !== n && (u -= b(s, "top", "bottom") + h)), !_(t)) {
                    var c = Math.round(a + o) - i,
                        f = Math.round(u + h) - n;
                    1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(f) && (u -= f)
                }
                return k(r.left, r.top, a, u)
            }
            var x = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof p(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof p(t).SVGElement && "function" == typeof t.getBBox
            };

            function _(t) {
                return t === p(t).document.documentElement
            }

            function O(t) {
                return n ? x(t) ? y(t) : M(t) : m
            }

            function P(t) {
                var i = t.x,
                    n = t.y,
                    s = t.width,
                    r = t.height,
                    o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                    h = Object.create(o.prototype);
                return d(h, {
                    x: i,
                    y: n,
                    width: s,
                    height: r,
                    top: n,
                    right: i + s,
                    bottom: r + n,
                    left: i
                }), h
            }

            function k(t, i, n, s) {
                return {
                    x: t,
                    y: i,
                    width: n,
                    height: s
                }
            }
            var S = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = k(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = O(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                E = function() {
                    function t(t, i) {
                        var n = P(i);
                        d(this, {
                            target: t,
                            contentRect: n
                        })
                    }
                    return t
                }(),
                A = function() {
                    function i(i, n, s) {
                        if (this.activeObservations_ = [], this.observations_ = new t, "function" != typeof i) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = i, this.controller_ = n, this.callbackCtx_ = s
                    }
                    return i.prototype.observe = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof p(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var i = this.observations_;
                            i.has(t) || (i.set(t, new S(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, i.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof p(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var i = this.observations_;
                            i.has(t) && (i.delete(t), i.size || this.controller_.removeObserver(this))
                        }
                    }, i.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, i.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach((function(i) {
                            i.isActive() && t.activeObservations_.push(i)
                        }))
                    }, i.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                i = this.activeObservations_.map((function(t) {
                                    return new E(t.target, t.broadcastRect())
                                }));
                            this.callback_.call(t, i, t), this.clearActive()
                        }
                    }, i.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, i.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, i
                }(),
                C = "undefined" != typeof WeakMap ? new WeakMap : new t,
                D = function() {
                    function t(i) {
                        if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var n = v.getInstance(),
                            s = new A(i, n, this);
                        C.set(this, s)
                    }
                    return t
                }();
            return ["observe", "unobserve", "disconnect"].forEach((function(t) {
                D.prototype[t] = function() {
                    var i;
                    return (i = C.get(this))[t].apply(i, arguments)
                }
            })), void 0 !== s.ResizeObserver ? s.ResizeObserver : D
        }()), u.StringHelper = {
            capitalize: function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
        },
        function() {
            var t = function(t) {
                    return Symbol.iterator in Object(t)
                },
                i = {
                    add: function(t) {
                        requestAnimationFrame(t)
                    },
                    remove: function() {}
                };
            u.t = u.t || i;
            var n, r = new class {
                    constructor() {
                        this.i = !1, this.o = new Set, this.h = this.u.bind(this)
                    }
                    add(t) {
                        this.o.add(t), this.i || (this.i = !0, u.t.add(this.h))
                    }
                    u() {
                        for (let t of this.o) t.render ? t.render() : t();
                        this.o.clear(), this.i = !1, u.t.remove(this.h)
                    }
                },
                o = {};
            n = /Safari/i.test(navigator.userAgent) && !/Chrom[ei]/i.test(navigator.userAgent) ? function(t, i, n, s) {
                var r = "";
                return s && (t || i || n) ? "translate3d(" + (t || 0) + "px, " + (i || 0) + "px, " + (n || 0) + "px) " : ((t || i) && (r += "translate(" + (t || 0) + "px, " + (i || 0) + "px) "), n && (r += "translateZ(" + n + "px) "), r)
            } : function(t, i, n, s) {
                return t || i || n ? "translate3d(" + (t || 0) + "px, " + (i || 0) + "px, " + (n || 0) + "px) " : ""
            };
            class h {
                constructor(i, n) {
                    t(i) ? this.l = Array.from(i) : this.l = [i], this.v = f({}, n), this.p = new Set
                }
                get scale() {
                    return this.scaleX
                }
                set scale(t) {
                    this.scaleX = t, this.scaleY = t
                }
                render() {
                    for (let i of this.p) {
                        var t = this.v[i];
                        switch (i) {
                            case "transform":
                                t = this.m();
                                break;
                            case "filter":
                                t = this.g();
                                break;
                            case "n2AutoAlpha":
                                0 === this.opacity ? this.M || (this.M = !0, this._("data-force-hidden", "")) : this.M && (this.M = !1, this.O("data-force-hidden"));
                                continue;
                            case "opacity":
                                this.v.n2AutoAlpha && (0 === t ? this.M || (this.M = !0, this._("data-force-hidden", "")) : this.M && (this.M = !1, this.O("data-force-hidden")));
                                break;
                            case "width":
                            case "height":
                            case "perspective":
                                "number" == typeof t && (t += "px")
                        }
                        for (let n of this.l) n.style.setProperty(i, t)
                    }
                    this.p.clear()
                }
                m() {
                    let {
                        xP: t,
                        yP: i,
                        x: r,
                        y: o,
                        z: h,
                        xAbs: a,
                        yAbs: u,
                        xPAbs: c,
                        yPAbs: f,
                        parallaxX: l,
                        parallaxY: v,
                        parallaxRotationX: d,
                        parallaxRotationY: p,
                        layerRotation: m,
                        rotationZ: g,
                        rotationY: b,
                        rotationX: w,
                        scaleX: y,
                        scaleY: M,
                        scaleZ: x,
                        skewX: _,
                        skewY: O,
                        transformPerspective: P,
                        force3D: k
                    } = this.v, S = "";
                    return P && (S += "perspective(" + P + "px) "), (t || i) && (S += "translate(" + (t || 0) + "%, " + (i || 0) + "%) "), (a || u) && (S += "translate(" + (a || 0) + "px, " + (u || 0) + "px) "), (c || f) && (S += "translate(" + (c || 0) + "%, " + (f || 0) + "%) "), S += n(r, o, h, k), _ && (S += "skewX(" + _ + "deg) "), O && (S += "skewY(" + O + "deg) "), m && (S += "rotate(" + m + "deg) "), g && (S += "rotate(" + g + "deg) "), b && (S += "rotateY(" + b + "deg) "), w && (S += "rotateX(" + w + "deg) "), y === s && (y = 1), M === s && (M = 1), 1 === y && 1 === M || (S += "scale(" + y + ", " + M + ") "), x === s && (x = 1), 1 !== x && (S += "scaleZ(" + x + ") "), S || "translate3d(0, 0, 0)"
                }
                g() {
                    let {
                        n2blur: t
                    } = this.v, i = "";
                    return t > .1 && (i = "blur(" + t + "px) "), i || "none"
                }
                _(t, i) {
                    for (let n of this.l)(n.relatedLayer || n).setAttribute(t, i)
                }
                O(t) {
                    for (let i of this.l)(i.relatedLayer || i).removeAttribute(t)
                }
                setValues(t) {
                    for (var i in t) this[i] = t[i]
                }
            }
            class a {
                constructor(t, i) {
                    this.P = [];
                    for (var n = 0; n < t.length; n++) t[n] && this.P.push(b.k(t[n], i))
                }
                setValues(t) {
                    for (var i = 0; i < this.P.length; i++) this.P[i].setValues(t)
                }
            }
            var c = {},
                l = function(t) {
                    Object.defineProperty(a.prototype, t, {
                        get: function() {
                            return this.P[0][t]
                        },
                        set: function(i) {
                            i instanceof Function && (i = i());
                            for (var n = 0; n < this.P.length; n++) this.P[n][t] = i
                        }
                    })
                },
                v = function(t, i, n) {
                    Object.getOwnPropertyDescriptor(h.prototype, t) || (i === s && (i = ""), n === s && (n = t), c[n] === s && (c[n] = []), c[n].push(t), o[t] = i, Object.defineProperty(h.prototype, t, {
                        get: function() {
                            return this.v[t] === s && (this.v[t] = o[t]), this.v[t]
                        },
                        set: function(i) {
                            i instanceof Function && (i = i()), this.v[t] !== i && (this.v[t] = i, this.p.add(n), r.add(this))
                        }
                    }), l(t))
                },
                d = function(t, i) {
                    Object.defineProperty(h.prototype, t, {
                        get: function() {
                            return this[i]
                        },
                        set: function(t) {
                            this[i] = t
                        }
                    }), l(t)
                };
            v("property"), v("display"), v("z-index", 1), v("overflow", "visible"), v("overflow-x", "visible"), v("backface-visibility", "visible"), v("transform-origin", "50% 50% 0"), v("opacity", 1), v("width", 0), v("height", 0), v("justify-content"), v("background"), v("color"), v("will-change", ""), v("stroke-dasharray", ""), v("visibility"), v("perspective", 0), v("transform-style"), v("cursor", ""), v("top"), v("right"), v("bottom"), v("left");
            var p = "transform";
            v("force3D", 0, p), v("transformPerspective", 0, p), v("xP", 0, p), v("yP", 0, p), v("x", 0, p), v("y", 0, p), v("z", 0, p), v("xAbs", 0, p), v("yAbs", 0, p), v("xPAbs", 0, p), v("yPAbs", 0, p), v("scaleX", 1, p), v("scaleY", 1, p), v("scaleZ", 1, p), v("rotationZ", 0, p), v("rotationX", 0, p), v("rotationY", 0, p), v("skewX", 0, p), v("skewY", 0, p), v("layerRotation", 0, p), v("n2blur", 0, "filter"), v("n2AutoAlpha", 0), d("zIndex", "z-index"), d("backfaceVisibility", "backface-visibility"), d("transformOrigin", "transform-origin"), d("justifyContent", "justify-content"), d("transformStyle", "transform-style"), d("overflowX", "overflow-x"), d("clipPath", "clip-path");
            var m = {
                0: function(t) {
                    this.classList.add(t)
                },
                1: function(t) {
                    this.classList.remove(t)
                }
            };
            class g {
                constructor(i) {
                    t(i) ? this.l = Array.from(i) : this.l = [i], this.S = []
                }
                addClass(t) {
                    this.S.push([0, t]), r.add(this)
                }
                removeClass(t) {
                    this.S.push([1, t]), r.add(this)
                }
                render() {
                    for (var t = 0; t < this.S.length; t++) {
                        var i = this.S[t];
                        for (let t of this.l) m[i[0]].apply(t, i.splice(1))
                    }
                    this.S = []
                }
            }
            var b = u.MW = {
                A: v,
                k: function(t, i) {
                    return t.smw || (t.smw = new h(t, i)), t.smw
                },
                C: function(t, i) {
                    for (var n = [], s = 0; s < t.length; s++) n.push(b.k(t[s], i));
                    return n
                },
                D: function(t, i) {
                    return new a(t, i)
                },
                R: function(t, i) {
                    t.forEach((function(t) {
                        t.setValues(i)
                    }))
                },
                T: function(t, i) {
                    i.forEach((function(i) {
                        c[i] && c[i].forEach((function(i) {
                            t[i] = o[i]
                        }))
                    }))
                },
                j: function(t, i) {
                    r.add((function() {
                        t.className.add(i)
                    }))
                },
                F: function(t, i) {
                    r.add((function() {
                        t.className.remove(i)
                    }))
                },
                L: function(t) {
                    r.add(t)
                },
                N: function(t) {
                    return t.umw || (t.umw = new g(t)), t.umw
                },
                flush() {
                    r.u()
                }
            }
        }(), customElements.define("ss3-force-full-width", class extends HTMLElement {
            connectedCallback() {
                if (this.isConnected) {
                    n = n || r.body, this.I = "rtl" === o.getAttribute("dir"), this._width = 0, this._offset = Number.MAX_SAFE_INTEGER, this.X = u.MW.k(this, {
                        x: Number.MAX_SAFE_INTEGER,
                        opacity: 0
                    });
                    var t = d(this, "overflowX");
                    t && "none" !== t && r.querySelectorAll(t).forEach((function(t) {
                        u.MW.k(t).overflowX = "hidden"
                    }));
                    var s = n;
                    if (i.ssForceFullHorizontalSelector) s = i.ssForceFullHorizontalSelector;
                    else {
                        var h = d(this, "horizontalSelector");
                        if (h && "body" !== h) try {
                            s = this.closest(h)
                        } catch (t) {}
                    }
                    if (s === n)
                        for (var a = [".elementor-section-stretched", '.siteorigin-panels-stretch[data-stretch-type="full-stretched"]', '.siteorigin-panels-stretch[data-stretch-type="full-stretched-padded"]', ".themify_builder_row.fullwidth", '.vce-row[data-vce-stretch-content="true"]'], c = 0; c < a.length; c++) {
                            var f = this.closest(a[c]);
                            if (f) {
                                s = f;
                                break
                            }
                        }
                    this.fullWidthTo = s, this.resizeObserver = new ResizeObserver(this.doResize.bind(this)), this.resizeObserver.observe(this.parentNode), i.addEventListener("resize", this.doResize.bind(this))
                }
            }
            doResize() {
                var t = 0,
                    s = 0;
                if (this.fullWidthTo) {
                    var r = this.fullWidthTo.getBoundingClientRect();
                    s = r.width, t = this.I ? -s + r.right : r.left
                }
                var o, h, a = s > 0 ? s : n.clientWidth,
                    u = i.getComputedStyle(this.parentNode);
                o = this.I ? a - this.parentNode.getBoundingClientRect().right - parseInt(u.getPropertyValue("padding-right")) - parseInt(u.getPropertyValue("border-right-width")) + t : -this.parentNode.getBoundingClientRect().left - parseInt(u.getPropertyValue("padding-left")) - parseInt(u.getPropertyValue("border-left-width")) + t, o += h = o % 1, a -= Math.floor(h), (this._width - a <= 0 || this._width - a > 1 || this._offset - o < -1 || this._offset - o >= 0) && (this._offset !== o && (this.X.x = o, this._offset = o, 0 !== o && this.classList.add("n2-ss-no-bga-fixed")), this._width !== a && (this.X.width = a, this._width = a)), this.setVisible && this.setVisible()
            }
            setVisible() {
                this.X.opacity = 1, delete this.setVisible
            }
        }), customElements.define("ss3-loader", class extends HTMLElement {
            connectedCallback() {
                this.B = []
            }
            set display(t) {
                this.V !== t && (this.V = t, this.style.display = t)
            }
            show() {
                this.display = "grid"
            }
            addPromise(t) {
                this.B.push(t), this.syncStyle(), t.finally(this.removePromise.bind(this, t))
            }
            removePromise(t) {
                var i = this.B.indexOf(t);
                i > -1 && (this.B.splice(i, 1), this.syncStyle())
            }
            syncStyle() {
                this.B.length ? this.Y || (this.Y = h(this.show.bind(this), 100)) : (this.Y && (a(this.Y), delete this.Y), this.display = "")
            }
        });
    var O, P = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
    i.n2const = {
            devicePixelRatio: i.devicePixelRatio || 1,
            isFirefox: /Firefox/i.test(navigator.userAgent),
            isIOS: /iPad|iPhone|iPod/.test(navigator.platform) || P,
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Silk/i.test(navigator.userAgent) || P,
            isPhone: /Android/i.test(navigator.userAgent) && /mobile/i.test(navigator.userAgent) || /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isSamsungBrowser: navigator.userAgent.match(/SamsungBrowser/i),
            isBot: /bot|googlebot|crawler|spider|robot|crawling|Google Search Console/i.test(navigator.userAgent),
            isLighthouse: navigator.userAgent.indexOf("Chrome-Lighthouse") > -1,
            lightboxMobileNewTab: 1,
            isVideoAutoplayAllowed: function() {
                var t = !!(navigator.platform.match(/(Win|Mac)/) || !/Mobi/.test(navigator.userAgent) || "playsInline" in c("video") || "webkit-playsinline" in c("video") || navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./) && parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]) >= 53 || navigator.userAgent.match(/Android.*(Firefox|Edge|Opera)/));
                return i.n2const.isVideoAutoplayAllowed = function() {
                    return t
                }, t
            },
            isWaybackMachine: function() {
                var t = void 0 !== i.__wm;
                return i.n2const.isWaybackMachine = function() {
                    return t
                }, t
            },
            setLocation: function(t) {
                "function" == typeof i.zajax_goto ? i.zajax_goto(t) : i.location = t
            },
            isParentSameOrigin: function() {
                try {
                    return parent.document, !0
                } catch (t) {}
                return !1
            },
            activeElementBlur: function() {
                r.activeElement && r.activeElement.blur()
            },
            getScrollbarSize: function() {
                var t, i, s, r = c("div", t, i, s);
                r.style.visibility = "hidden", r.style.overflow = "scroll", n.appendChild(r);
                var o = r.offsetHeight - r.clientHeight;
                return n.removeChild(r), n2const.getScrollbarSize = function() {
                    return o
                }, o
            },
            fonts: new Promise((function(t) {
                if ("fonts" in r) {
                    r.fonts.ready.then(t);
                    const i = navigator.userAgent;
                    i.indexOf("Safari") > 0 && -1 === i.indexOf("Chrome") && u.r("windowLoad", t)
                } else u.r("windowLoad", t)
            }))
        }, i.n2const.isTablet = !i.n2const.isPhone && (/Android|iPad|tablet|Silk/i.test(navigator.userAgent) || P), i.n2const.rtl = (i.n2const.isRTL = function() {
            return i.n2const.rtl.isRtl
        }, "rtl" === o.getAttribute("dir") ? {
            isRtl: !0,
            marginLeft: "marginRight",
            marginRight: "marginLeft",
            "margin-left": "margin-right",
            "margin-right": "margin-left",
            left: "right",
            right: "left",
            modifier: -1
        } : {
            isRtl: !1,
            marginLeft: "marginLeft",
            marginRight: "marginRight",
            "margin-left": "margin-left",
            "margin-right": "margin-right",
            left: "left",
            right: "right",
            modifier: 1
        }), u._triggerResize = (O = null, function() {
            O && a(O), O = h((function() {
                y(i, "resize"), O = null
            }), 100)
        }), u._shouldPreventClick = !1, u._preventClick = function() {
            u._shouldPreventClick || (u._shouldPreventClick = !0, h((function() {
                u._shouldPreventClick = !1
            }), 300))
        }, u.d("ImagesLoaded", (function() {
            return function(t) {
                var i, n = [];
                i = "IMG" === t.tagName ? [t] : t.querySelectorAll("img");
                for (var s = 0; s < i.length; s++) {
                    var r = i[s];
                    r.loading = "eager", r.complete ? r.naturalWidth || n.push(new Promise(function(t) {
                        h(t, 16)
                    }.bind(r))) : n.push(new Promise(function(t, i) {
                        this.addEventListener("load", (function() {
                            t()
                        })), this.addEventListener("error", (function() {
                            i()
                        }))
                    }.bind(r)))
                }
                return Promise.all(n)
            }
        })), u.d("UniversalPointer", (function() {
            var t = !!i.PointerEvent,
                n = !!i.TouchEvent;

            function r(t, i) {
                this.el = t, this.handler = i, this.preventMouse = !1, this.timeouts = [], this.localListeners = [], this.globalListeners = []
            }

            function c(i, s, h) {
                var a = this.context = new r(i, s);
                a.addGlobalEventListener("click", (function(e) {
                    a.preventMouse || a.click(e)
                })), t ? a.addGlobalEventListener("pointerdown", (function(t) {
                    t.isPrimary && (a.startComplexInteraction(t.currentTarget), a.addLocalEventListener(o, "pointerup", (function(i) {
                        i.isPrimary && t.pointerId === i.pointerId && (Math.abs(i.clientX - t.clientX) < 10 && Math.abs(i.clientY - t.clientY) < 10 ? a.click(i) : a.clear(), a.endComplexInteraction())
                    })))
                })) : n && a.addGlobalEventListener("touchstart", (function(t) {
                    a.clearTimeouts(), a.startComplexInteraction(t.currentTarget), a.addLocalEventListener(o, "touchend", (function(i) {
                        Math.abs(i.changedTouches[0].clientX - t.changedTouches[0].clientX) < 10 && Math.abs(i.changedTouches[0].clientY - t.changedTouches[0].clientY) < 10 ? a.click(i) : a.clear(), a.endComplexInteraction()
                    }), {
                        passive: !0
                    })
                }), {
                    passive: !0
                })
            }

            function l(t, i, n) {
                this.el = t, this.handler = i, this.leaveOnSecond = n, this.preventMouse = !1, this.isActive = !1, this.timeouts = [], this.localListeners = [], this.globalListeners = []
            }

            function v(i, s, r) {
                r = f({
                    leaveOnSecond: !1
                }, r);
                var a = this.context = new l(i, s, r.leaveOnSecond);
                t ? (a.addGlobalEventListener("pointerenter", (function(e) {
                    e.isPrimary && (a.clearTimeouts(), a.enter(e) && "mouse" !== e.pointerType && (a.addLocalEventListener(o, "pointerdown", (function(e) {
                        e.isPrimary && a.testLeave(e.target)
                    })), a.addTimeout(h((function() {
                        a.leave()
                    }), 5e3))))
                })), a.addGlobalEventListener("pointerleave", (function(e) {
                    e.isPrimary && "mouse" === e.pointerType && a.leave()
                }))) : (a.addGlobalEventListener("mouseenter", (function(e) {
                    a.preventMouse || a.enter(e)
                })), a.addGlobalEventListener("mouseleave", (function() {
                    a.preventMouse || a.leave()
                })), n && a.addGlobalEventListener("touchstart", (function(e) {
                    a.preventMouse = !0, a.clearTimeouts(), a.enter(e) && (a.addLocalEventListener(o, "touchstart", (function(e) {
                        a.testLeave(e.target)
                    })), a.addTimeout(h((function() {
                        a.leave(), a.preventMouse = !1
                    }), 5e3)))
                }), {
                    passive: !0
                }))
            }
            r.prototype.addTimeout = function(t) {
                this.timeouts.push(t)
            }, r.prototype.clearTimeouts = function() {
                for (var t = 0; t < this.timeouts.length; t++) a(this.timeouts[t]);
                this.timeouts = []
            }, r.prototype.click = function(e) {
                this.currentTarget !== s && (e = {
                    currentTarget: this.currentTarget,
                    target: this.el
                }), this.handler.call(this.el, e), this.clear()
            }, r.prototype.clear = function() {
                for (var t = 0; t < this.localListeners.length; t++) this.localListeners[t][0].removeEventListener(this.localListeners[t][1], this.localListeners[t][2], this.localListeners[t][3])
            }, r.prototype.addGlobalEventListener = function(t, i, n) {
                this.globalListeners.push(M(this.el, t, i, n))
            }, r.prototype.addLocalEventListener = function(t, i, n, s) {
                this.localListeners.push([t, i, n, s]), t.addEventListener(i, n, s)
            }, r.prototype.remove = function() {
                this.clear(), this.clearTimeouts();
                for (var t = 0; t < this.globalListeners.length; t++) this.globalListeners[t]();
                delete this.globalListeners
            }, r.prototype.startComplexInteraction = function(t) {
                this.clearTimeouts(), this.preventMouse = !0, this.currentTarget = t
            }, r.prototype.endComplexInteraction = function() {
                delete this.currentTarget, this.addTimeout(h(function() {
                    this.preventMouse = !1
                }.bind(this), 1e3))
            }, c.prototype.remove = function() {
                this.context.remove(), delete this.context
            }, u.UniversalClick = c, l.prototype.enter = function(e) {
                return this.leaveOnSecond && this.isActive ? (this.leave(), !1) : (this.handler.apply(this.el, arguments), this.isActive = !0, !0)
            }, l.prototype.leave = function() {
                this.clearTimeouts();
                for (var t = 0; t < this.localListeners.length; t++) this.localListeners[t][0].removeEventListener(this.localListeners[t][1], this.localListeners[t][2], this.localListeners[t][3]);
                var i;
                this.isActive = !1, i = this.el, w(i, new Event("universalleave", {
                    bubbles: !1,
                    cancelable: !1
                }))
            }, l.prototype.testLeave = function(t) {
                !this.el === t && this.el.contains(t) && this.leave()
            }, l.prototype.addTimeout = function(t) {
                this.timeouts.push(t)
            }, l.prototype.clearTimeouts = function() {
                for (var t = 0; t < this.timeouts.length; t++) a(this.timeouts[t]);
                this.timeouts = []
            }, l.prototype.addGlobalEventListener = function(t, i, n) {
                this.globalListeners.push(M(this.el, t, i, n))
            }, l.prototype.remove = function() {
                this.isActive && this.leave(), this.clearTimeouts();
                for (var t = 0; t < this.globalListeners.length; t++) this.globalListeners[t]();
                delete this.globalListeners
            }, l.prototype.addLocalEventListener = function(t, i, n, s) {
                this.localListeners.push([t, i, n, s]), t.addEventListener(i, n, s)
            }, v.prototype.remove = function() {
                this.context.remove(), delete this.context
            }, u.UniversalEnter = v
        })), u.d("EventBurrito", (function() {
            var t = function() {
                    return !0
                },
                o = !1;
            return function(a, u) {
                var c = {
                    preventDefault: !0,
                    preventScroll: !1,
                    mouse: !0,
                    axis: "x",
                    start: t,
                    move: t,
                    end: t,
                    click: t
                };
                f(c, u);
                var l, v, d, p, m = {
                        pointerEvents: !(n2const.isIOS && i.TouchEvent || !i.PointerEvent && !i.PointerEventsPolyfill)
                    },
                    g = {},
                    b = {},
                    w = [],
                    x = !0,
                    _ = m.pointerEvents ? 1 : 0,
                    O = [
                        ["touchstart", "touchmove", "touchend", "touchcancel"],
                        ["pointerdown", "pointermove", "pointerup", "pointercancel", "pointerleave"],
                        ["mousedown", "mousemove", "mouseup", "", "mouseleave"]
                    ],
                    P = [function(e) {
                        return e.touches && e.touches.length > 1 || e.scale && 1 !== e.scale
                    }, function(e) {
                        return !e.isPrimary || e.buttons && 1 !== e.buttons || !c.mouse && "touch" !== e.pointerType && "pen" !== e.pointerType
                    }, function(e) {
                        return e.buttons && 1 !== e.buttons
                    }],
                    k = function(t, i) {
                        var n = t.tagName;
                        return "INPUT" === n || "TEXTAREA" === n || "SELECT" === n || "BUTTON" === n || "VIDEO" === n || t.classList.contains("n2_container_scrollable") || t.closest(".n2_container_scrollable")
                    };

                function S(t) {
                    t.preventDefault ? t.preventDefault() : t.returnValue = !1
                }

                function E(t) {
                    b = {
                        x: (p ? t.clientX : t.touches[0].clientX) - g.x,
                        y: (p ? t.clientY : t.touches[0].clientY) - g.y,
                        time: Date.now()
                    }
                }

                function A(e, t) {
                    if ((e.isPrimary === s || e.isPrimary) && !o && (l = [], x = !0, !P[p = t](e) && !k(e.target)))
                        if ("pointerdown" === e.type && "mouse" === e.pointerType && e.target.closest(".n2-ss-text")) {
                            var i = M(e.target, "click", (function(t) {
                                i(), Math.abs(e.clientX - t.clientX) < 10 && Math.abs(e.clientY - t.clientY) < 10 && y(e.target, "n2click")
                            }));
                            h(i, 2e3)
                        } else o = !0, 0 !== p && l.push(M(r, O[p][1], C, {
                            passive: !1,
                            capture: !0
                        })), l.push(M(r, O[p][2], R, {
                            passive: !1,
                            capture: !0
                        })), l.push(M(r, O[p][3], R, {
                            passive: !1,
                            capture: !0
                        })), l.push(M(n, O[p][4], D, {
                            passive: !1,
                            capture: !0
                        })), g = {
                            x: p ? e.clientX : e.touches[0].clientX,
                            y: p ? e.clientY : e.touches[0].clientY,
                            time: Date.now()
                        }, v = s, d = !1, b = {
                            x: 0,
                            y: 0
                        }, c.start(e, g), C(e)
                }

                function C(t) {
                    (t.isPrimary === s || t.isPrimary) && ("x" === c.axis && (!c.preventScroll && v || P[p](t)) || k(t.target) || (E(t), (Math.abs(b.x) > 10 || Math.abs(b.y) > 10) && (x = !1), v === s && 2 !== p && (v = Math.abs(b.x) < Math.abs(b.y) && !c.preventScroll) || c.move(t, g, b, d) && c.preventDefault && S(t)))
                }

                function D(t) {
                    t.target === t.currentTarget && R(t)
                }

                function R(t) {
                    if (t.isPrimary === s || t.isPrimary) {
                        p && E(t), !x && t.target && t.target.blur && t.target.blur();
                        for (var i = l.length - 1; i >= 0; i--) l[i]();
                        l = null, n2const.isFirefox && (d = !1), c.end(t, g, b, d), d = !1, o = !1
                    }
                }
                return w.push(M(r, "scroll", (function() {
                    i.nextendScrollFocus !== s && i.nextendScrollFocus || (d = !0)
                }))), 1 === _ && (a.style.touchAction = "y" === c.axis ? "pan-x" : "pan-y"), w.push(M(a, O[_][0], (function(e) {
                    A(e, _)
                }), {
                    passive: !1,
                    capture: !0
                })), 0 === _ && w.push(M(a, O[0][1], (function(e) {
                    C(e)
                }), {
                    passive: !1,
                    capture: !0
                })), w.push(M(a, "dragstart", S)), c.mouse && 0 === _ && w.push(M(a, O[2][0], (function(e) {
                    A(e, 2)
                }))), w.push(M(a, "click", (function(t) {
                    x ? c.click(t) : S(t)
                }))), {
                    supportsPointerEvents: m.pointerEvents,
                    getClicksAllowed: function() {
                        return x
                    },
                    kill: function() {
                        for (var t = w.length - 1; t >= 0; t--) w[t]()
                    }
                }
            }
        })),
        function() {
            var t, n = !1,
                s = -1,
                r = new Set,
                o = new Set,
                a = i.requestAnimationFrame || (t = 0, function(i) {
                    var n = (new Date).getTime(),
                        s = Math.max(0, 16 - (n - t));
                    return t = n + s, h((function() {
                        i(n + s)
                    }), s)
                });

            function c(t) {
                s = t, n && (s = t, a(f))
            }

            function f(t) {
                if (n && 0 === r.size && 0 === o.size) s = -1, n = !1;
                else if (-1 !== s) {
                    var i = (t - s) / 1e3;
                    0 !== i && (r.forEach((function(t) {
                        t(i)
                    })), o.forEach((function(t) {
                        t()
                    })))
                }! function(t) {
                    n && (s = t, a(f))
                }(t)
            }
            u.t = {
                addP: function(t) {
                    r.add(t), n || (n = !0, a(c))
                },
                removeP: function(t) {
                    r.delete(t)
                },
                add: function(t) {
                    o.add(t), n || (n = !0, a(c))
                },
                remove: function(t) {
                    o.delete(t)
                }
            }
        }(), u.d("Animation", (function() {
            function t(t) {
                this._tickCallback = null, this._progress = 0, this._delayTimeout = !1, this._delay = 0, this._duration = 4, this._timeScale = 1, this._isPlaying = !1, this._startTime = 0, this._eventCallbacks = {}, this._immediateRender = !0, this._timeline = null, this._isCompleted = !1, this._isStarted = !1, this._isReversed = !1, this.toParams = t, this.initParameters()
            }
            return t.prototype.initParameters = function() {
                this.parseParameters(this.toParams), "object" != typeof this.toParams && this.paused(!1)
            }, t.prototype.parseParameters = function(t) {
                t && (t.delay && (this.delay(t.delay), delete t.delay), t.duration !== s && (this.duration(t.duration), delete t.duration), t.onComplete && (this.eventCallback("onComplete", t.onComplete), delete t.onComplete), t.onStart && (this.eventCallback("onStart", t.onStart), delete t.onStart), t.onUpdate && (this.eventCallback("onUpdate", t.onUpdate), delete t.onUpdate), t.immediateRender && (this._immediateRender = t.immediateRender, delete t.immediateRender), t.paused && (this.paused(!0), delete t.paused))
            }, t.prototype.setTimeline = function(t) {
                this._timeline = t
            }, t.prototype._tick = function(t) {
                var i = this._progress;
                this._isReversed ? (this._progress -= t / this._duration * this._timeScale, 1 != i && this._isStarted ? this._progress <= 0 ? (this._progress = 0, this._isPlaying = !1, u.t.removeP(this.getTickCallback()), this._onUpdate(), this._onReverseComplete()) : this._onUpdate() : this._onReverseStart()) : (this._progress += t / this._duration * this._timeScale, 0 != i && this._isStarted ? this._progress >= 1 ? (this._progress = 1, this._isPlaying = !1, u.t.removeP(this.getTickCallback()), this._onUpdate(), this._onComplete()) : this._onUpdate() : this._onStart())
            }, t.prototype._onStart = function() {
                this._isStarted = !0, this._isCompleted = !1, this._dispatch("onStart"), this._onUpdate()
            }, t.prototype._onUpdate = function() {
                this._dispatch("onUpdate")
            }, t.prototype._onComplete = function() {
                this._isCompleted = !0, this._onUpdate(), this._dispatch("onComplete")
            }, t.prototype._onReverseComplete = function() {
                this._isCompleted = !0, this._isReversed = !1, this._onUpdate(), this._dispatch("onReverseComplete")
            }, t.prototype._onReverseStart = function() {
                this._isStarted = !0, this._isCompleted = !1, this._dispatch("onReverseStart"), this._onUpdate()
            }, t.prototype.getTickCallback = function() {
                if (!this._tickCallback) {
                    var t = this;
                    this._tickCallback = function() {
                        t._tick.apply(t, arguments)
                    }
                }
                return this._tickCallback
            }, t.prototype._clearDelayTimeout = function() {
                this._delayTimeout && (a(this._delayTimeout), this._delayTimeout = !1)
            }, t.prototype._timeToProgress = function(t) {
                return t / this._duration * this._timeScale
            }, t.prototype.delay = function() {
                if (arguments.length > 0) {
                    var t = parseFloat(arguments[0]);
                    return !isNaN(t) && t != 1 / 0 && t || (t = 0), this._delay = Math.max(0, t), this
                }
                return this._delay
            }, t.prototype.duration = function() {
                if (arguments.length > 0) {
                    var t = parseFloat(arguments[0]);
                    return !isNaN(t) && t != 1 / 0 && t || (t = 0), this._duration = Math.max(0, t), this
                }
                return this._duration
            }, t.prototype.eventCallback = function(t) {
                return arguments.length > 3 ? this._eventCallbacks[t] = [arguments[1], arguments[2], arguments[3]] : arguments.length > 2 ? this._eventCallbacks[t] = [arguments[1], arguments[2], this] : arguments.length > 1 && (this._eventCallbacks[t] = [arguments[1],
                    [], this
                ]), this._eventCallbacks[t]
            }, t.prototype.pause = function() {
                return this._isPlaying = !1, u.t.removeP(this.getTickCallback()), arguments.length > 0 && null != arguments[0] && this.progress(this._timeToProgress(arguments[0])), this
            }, t.prototype.paused = function() {
                return arguments.length > 0 ? (arguments[0] ? this._isPlaying && this.pause() : this._isPlaying || this.play(), this) : !this._isPlaying
            }, t.prototype.play = function() {
                var t = !0;
                arguments.length > 0 && null != arguments[0] && (t = !1, this._progress = this._timeToProgress(arguments[0])), this._play(t)
            }, t.prototype._play = function(t) {
                if (this._progress < 1)
                    if (0 == this._progress && t && this._delay > 0) {
                        if (!this._delayTimeout) {
                            var i = this;
                            this._delayTimeout = h((function() {
                                i.__play.apply(i, arguments)
                            }), 1e3 * this._delay)
                        }
                    } else this.__play();
                else this._isCompleted || (this._isReversed ? this._onReverseComplete() : this._onComplete())
            }, t.prototype.__play = function() {
                this._clearDelayTimeout(), this._isPlaying || (u.t.addP(this.getTickCallback()), this._isPlaying = !0)
            }, t.prototype.progress = function() {
                if (arguments.length > 0) {
                    var t = parseFloat(arguments[0]);
                    return isNaN(t) && (t = 0), t = Math.min(1, Math.max(0, t)), this._progress = t, this._isPlaying || (this._isStarted || this._onStart(), this._onUpdate()), this
                }
                return this._progress
            }, t.prototype.reverse = function() {
                this._isReversed = !0, 0 != this.progress() && this.play()
            }, t.prototype.restart = function() {
                return arguments.length > 0 && arguments[0] ? (this.pause(0), this.play(), this) : (this.play(0), this)
            }, t.prototype.seek = function(t) {
                null != t && (this._progress = this._timeToProgress(arguments[0]), this._isPlaying || this._onUpdate())
            }, t.prototype.startTime = function() {
                if (arguments.length > 0) {
                    var t = parseFloat(arguments[0]);
                    return isNaN(t) && (t = 0), this._startTime = Math.max(0, t), this
                }
                return this._startTime
            }, t.prototype.timeScale = function() {
                if (arguments.length > 0) {
                    var t = parseFloat(arguments[0]);
                    return isNaN(t) && (t = 1), t = Math.max(.01, t), this._timeScale != t && (this._timeScale = t), this
                }
                return this._timeScale
            }, t.prototype._dispatch = function(t) {
                "object" == typeof this._eventCallbacks[t] && this._eventCallbacks[t][0].apply(this._eventCallbacks[t][2], this._eventCallbacks[t][1])
            }, t.prototype.totalDuration = function() {
                if (arguments.length > 0) {
                    var t = parseFloat(arguments[0]);
                    return isNaN(t) && (t = 0), t = Math.max(0, t), this.timeScale(this._duration / t), this
                }
                return this._duration * this._timeScale
            }, t.prototype.reset = function() {
                this._isCompleted = !1, this._isStarted = !1, this.progress(0)
            }, t
        })), u.d("Tween", (function() {
            var t = 2,
                i = 3,
                n = function(t) {
                    return Symbol.iterator in Object(t)
                };

            function r(s, r) {
                var o, h;
                switch (this.ease = "linear", this._tweenContainer = null, this._setContainer = null, this._roundProps = {}, arguments.length) {
                    case 4:
                        o = arguments[2], h = arguments[3], this._mode = t;
                        break;
                    default:
                        this._mode = i, o = {}, h = arguments[2]
                }
                if (n(s) || (s = [s]), this._target = s, this.fromParams = o, u.Animation.call(this, h), this.parseParameters({
                        duration: r
                    }), this._mode === t && this._immediateRender) {
                    for (var a in null === this._tweenContainer && this._makeTweenContainer(this.fromParams, this.toParams), this._tweenContainer) {
                        var c = this._tweenContainer[a];
                        this._target.forEach((function(t) {
                            t[a] = c.unit ? c.startValue + c.unit : c.startValue
                        }))
                    }
                    for (var a in this._setContainer) {
                        c = this._setContainer[a];
                        this._target.forEach((function(t) {
                            t[a] = c.unit ? c.endValue + c.unit : c.endValue
                        }))
                    }
                }
            }

            function o(t) {
                var i = [t, ""];
                t = String(t);
                var n = parseFloat(t);
                return isNaN(n) || (i[0] = n, i[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || ""), i
            }

            function h(t, i, n, r) {
                n === s && (n = t[0][i]), r === s && (r = t[0][i]), n = o(n);
                var h = 0;
                return "" !== (r = o(r))[1] && n[1] !== r[1] && (n[0] = 0, n[1] = r[1]), "number" == typeof n[0] && "number" == typeof r[0] && (h = r[0] - n[0]), {
                    startValue: n[0],
                    endValue: r[0],
                    unit: r[1],
                    range: h
                }
            }
            return r.prototype = Object.create(u.Animation.prototype), r.prototype.constructor = r, r.prototype.initParameters = function() {
                this.parseParameters(this.fromParams), u.Animation.prototype.initParameters.apply(this, arguments)
            }, r.prototype.parseParameters = function(t) {
                t && (t.ease && (this.ease = t.ease, delete t.ease), u.Animation.prototype.parseParameters.apply(this, arguments))
            }, r.prototype._onStart = function() {
                for (var t in null === this._tweenContainer && this._makeTweenContainer(this.fromParams, this.toParams), this._setContainer) {
                    var i = this._setContainer[t];
                    this._target.forEach((function(n) {
                        n[t] = i.unit ? i.endValue + i.unit : i.endValue
                    }))
                }
                u.Animation.prototype._onStart.call(this)
            }, r.prototype._onUpdate = function() {
                for (var t in this._tweenContainer) {
                    var i = this._tweenContainer[t],
                        n = u.Easings[this.ease] ? u.Easings[this.ease](this._progress) : this._progress,
                        s = i.startValue + i.range * n;
                    this._roundProps[t] && (s = Math.round((10 * s | 0) / 10)), this._target.forEach((function(n) {
                        n[t] = i.unit ? s + i.unit : s
                    }))
                }
                u.Animation.prototype._onUpdate.call(this)
            }, r.prototype.initRoundProps = function(t) {
                for (var i = t.split(","), n = 0; n < i.length; n++) this._roundProps[i[n]] = !0
            }, r.prototype._makeTweenContainer = function(t, i) {
                for (var n in t.snap !== s && (this.initRoundProps(t.snap), delete t.snap), this._setContainer = {}, this._tweenContainer = {}, i.snap !== s && (this.initRoundProps(i.snap), delete i.snap), i) {
                    var r = h(this._target, n, t[n], i[n]);
                    0 == r.range ? this._setContainer[n] = r : this._tweenContainer[n] = r
                }
            }, r.to = function(t, i, n) {
                var o = new r(t, i, n);
                return n.paused !== s && n.paused || o.play(), o
            }, r.fromTo = function(t, i, n, o) {
                var h = new r(t, i, n, o);
                return o.paused !== s && o.paused || h.play(), h
            }, u.W = r, r
        })), u.d("Timeline", (function() {
            function t(t) {
                this.originalParams = f({}, t), this._tweens = [], u.Animation.call(this, t), this._duration = 0
            }
            return t.prototype = Object.create(u.Animation.prototype), t.prototype.constructor = t, t.prototype._onUpdate = function() {
                if (this.tweensContainer)
                    for (var t = 0; t < this.tweensContainer.length; t++) {
                        var i = this.tweensContainer[t],
                            n = Math.min(1, (this._progress - i.startProgress) / (i.endProgress - i.startProgress));
                        i.tween._isCompleted && n <= i.endProgress && i.tween.reset(), !i.tween._isStarted && n >= 0 && 0 == i.tween.progress() && i.tween._onStart(), i.tween._isStarted && (1 != n || i.tween._isCompleted ? n >= 0 && n < 1 ? i.tween.progress(n) : n < 0 && 0 != i.tween.progress() && i.tween.progress(0) : (i.tween.progress(n), i.tween._onComplete()))
                    }
                u.Animation.prototype._onUpdate.call(this)
            }, t.prototype.addTween = function(t) {
                t.pause(), t.setTimeline(this);
                var i = 0;
                i = arguments.length > 1 ? this._parsePosition(arguments[1]) : this._parsePosition();
                var n = t.delay();
                n > 0 && (i += n, t.delay(0)), t.startTime(i), this._tweens.push(t);
                var s = t.totalDuration() + i;
                s > this._duration && (this._duration = s), this.makeCache()
            }, t.prototype.clear = function() {
                this.paused() || this.pause(), t.call(this, this.originalParams)
            }, t.prototype.add = function(t, i) {
                this.addTween(t, i)
            }, t.prototype.set = function(t, i, n) {
                this.addTween(u.W.to(t, .05, i), n)
            }, t.prototype.to = function(t, i, n, s) {
                n.paused = !0, this.addTween(u.W.to(t, i, n), s)
            }, t.prototype.fromTo = function(t, i, n, s, r) {
                s.paused = !0, this.addTween(u.W.fromTo(t, i, n, s), r)
            }, t.prototype._play = function() {
                if (0 == this._progress)
                    for (var t = 0; t < this._tweens.length; t++) this._tweens[t].pause(0);
                u.Animation.prototype._play.apply(this, arguments)
            }, t.prototype._parsePosition = function() {
                var t = "+=0";
                arguments.length > 0 && arguments[0] !== s && !isNaN(arguments[0]) && (t = arguments[0]);
                var i = 0;
                switch (typeof t) {
                    case "string":
                        switch (t.substr(0, 2)) {
                            case "+=":
                                i = this.duration() + parseFloat(t.substr(2));
                                break;
                            case "-=":
                                i = this.duration() - parseFloat(t.substr(2))
                        }
                        break;
                    default:
                        i = parseFloat(t)
                }
                return Math.max(0, i)
            }, t.prototype.makeCache = function() {
                var t = this.totalDuration();
                this.tweensContainer = [];
                for (var i = 0; i < this._tweens.length; i++) {
                    var n = this._tweens[i],
                        s = n.startTime() / t,
                        r = (n.startTime() + n.totalDuration()) / t;
                    this.tweensContainer.push({
                        tween: n,
                        startProgress: s,
                        endProgress: r,
                        range: r - s
                    })
                }
            }, u.q = t, t
        })), u.d("Easings", (function() {
            var t = {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var i, n = 4; t < ((i = Math.pow(2, --n)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * i - 2) / 22 - t, 2)
                }
            };
            ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(i, n) {
                t[i] = function(t) {
                    return Math.pow(t, n + 2)
                }
            }));
            var i = {};
            for (var n in t) ! function(t, n) {
                i["easeIn" + t] = n, i["easeOut" + t] = function(t) {
                    return 1 - n(1 - t)
                }, i["easeInOut" + t] = function(t) {
                    return t < .5 ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2
                }
            }(n, t[n]);
            return i
        })), u.d("nextend-frontend"), u.d("n2")
}(window);
// source --> https://zoewellness.com/wp-content/plugins/smart-slider-3/Public/SmartSlider3/Application/Frontend/Assets/dist/smartslider-frontend.min.js?ver=40b842f2 
! function(t) {
    var i = t;
    i._N2 = i._N2 || {
        _r: [],
        _d: [],
        r: function() {
            this._r.push(arguments)
        },
        d: function() {
            this._d.push(arguments)
        }
    };
    var s, n, h = t.document,
        o = h.documentElement,
        r = t.setTimeout,
        a = t.clearTimeout,
        u = i._N2,
        c = (t.requestAnimationFrame, function(t, i = null, s = null, n = null) {
            const o = h.createElement(t);
            return i && ("string" == typeof i ? A(o, i) : P(o, i)), s && v(o, s), n && S(o, n), o
        }),
        f = Object.assign,
        l = function(t, i) {
            return t.getAttribute(i)
        },
        d = function(t, i, s) {
            t.setAttribute(i, s)
        },
        v = function(t, i) {
            for (var s in i) d(t, s, i[s])
        },
        p = function(t, i) {
            t.removeAttribute(i)
        },
        m = function(t, i) {
            return t.dataset[i]
        },
        b = function(t, i, s) {
            t.dataset[i] = s
        },
        S = function(t, i) {
            for (let s in i) b(t, s, i[s])
        },
        w = function(t, s) {
            return i.getComputedStyle(t).getPropertyValue(s)
        },
        y = function(t, i, s) {
            t.style.setProperty(i, s)
        },
        g = function(t, i) {
            for (var s in i) y(t, s, i[s])
        },
        k = function(t, i) {
            t.style.removeProperty(i)
        },
        C = function(t, i, s) {
            t.forEach((function(t) {
                y(t, i, s)
            }))
        },
        x = function(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        },
        A = function(t, i) {
            t.classList.add(i)
        },
        P = function(t, i) {
            i.forEach((function(i) {
                t.classList.add(i)
            }))
        },
        I = function(t, i) {
            t.classList.remove(i)
        },
        M = function(t, i) {
            return t.dispatchEvent(i)
        },
        F = function(t, i, s) {
            return s = f({
                bubbles: !0,
                cancelable: !0
            }, s), M(t, new Event(i, s))
        },
        R = function(t, i) {
            return M(t, new Event(i, {
                bubbles: !1,
                cancelable: !1
            }))
        },
        D = function(t, i, s) {
            return M(t, new CustomEvent(i, {
                bubbles: !1,
                cancelable: !1,
                detail: s
            }))
        },
        z = function(t) {
            t.forEach((function(t) {
                t()
            })), t.splice(0, t.length)
        },
        L = function(t, i, s, n) {
            return n = n || {}, t.addEventListener(i, s, n), t.removeEventListener.bind(t, i, s, n)
        },
        O = function(t, i, s, n) {
            n = n || {}, t.addEventListener(i, s, n)
        },
        T = function(t, i, s) {
            t.addEventListener(i, s, {
                once: !0
            })
        },
        _ = function() {
            return o.scrollTop
        },
        V = function(t) {
            o.scrollTop = t
        },
        E = function(t) {
            return t.getBoundingClientRect().height
        },
        B = function(t) {
            return h.scrollingElement.scrollTop + t.getBoundingClientRect().top
        },
        j = function(t) {
            if ("complete" === h.readyState || "interactive" === h.readyState) t();
            else if (Document && Document.prototype && Document.prototype.addEventListener && Document.prototype.addEventListener !== h.addEventListener) {
                const i = () => {
                    t(), t = () => {}
                };
                h.addEventListener("DOMContentLoaded", i), h.addEventListener("readystatechange", (() => {
                    "complete" !== h.readyState && "interactive" !== h.readyState || i()
                })), Document.prototype.addEventListener.call(h, "DOMContentLoaded", i)
            } else h.addEventListener("DOMContentLoaded", t)
        },
        W = function(t, i, s, n) {
            if (Math.abs(t.scrollTop - i) < 1) n && n();
            else {
                s = Math.max(300, s || 300);
                var h = t.scrollTop,
                    o = i - h,
                    r = performance.now(),
                    a = function(i) {
                        var u = Math.min(1, (i - r) / s);
                        u < .5 ? u *= 2 * u : u = (4 - 2 * u) * u - 1, t.scrollTop = h + u * o, u < 1 ? requestAnimationFrame(a) : n && n()
                    };
                a(r)
            }
        },
        H = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        Y = navigator.userAgent.indexOf("+http://www.google.com/bot.html") > -1 ? function(t) {
            t()
        } : i.requestIdleCallback || function(t) {
            return r(t, 1)
        };
    i.cancelIdleCallback;

    function q(t) {
        var i = h.getElementById(t);
        if (i && i.sheet) {
            var s, n = i.sheet;
            for (s = n.cssRules.length - 1; s >= 0; s--) n.cssRules[s].selectorText && n.cssRules[s].selectorText.includes("div#n2-ss-") && n.deleteRule(s)
        }
    }
    j((function() {
        s = h.body
    })), u.d("SmartSliderBackgrounds", (function() {
        function t(t) {
            this.device = null, this.slider = t, this.hasFixed = !1, this.lazyLoad = parseInt(t.parameters.lazyLoad), this.lazyLoadNeighbor = parseInt(t.parameters.lazyLoadNeighbor), this.promise = new Promise(function(t) {
                this.resolve = t
            }.bind(this)), this.slider.stages.done("Resized", this.onResized.bind(this)), this.slider.stages.done("StarterSlide", this.onStarterSlide.bind(this))
        }
        return t.prototype.preLoad = function(t) {
            Promise.all(t).then(this.resolve)
        }, t.prototype.getBackgroundImages = function() {
            for (var t = [], i = 0; i < this.slider.realSlides.length; i++) t.push(this.slider.realSlides[i].background);
            return t
        }, t.prototype.onResized = function() {
            this.onSlideDeviceChanged(this.slider.responsive.getDeviceMode()), O(this.slider.sliderElement, "SliderDevice", function(e) {
                this.onSlideDeviceChanged(e.detail.device)
            }.bind(this))
        }, t.prototype.onStarterSlide = function() {
            1 === this.lazyLoad ? (this.preLoadSlides = this.preloadSlidesLazyNeighbor, this.preLoad(this.preLoadSlides(this.slider.getVisibleSlides(this.slider.currentSlide)))) : 2 === this.lazyLoad ? (this.preLoadSlides = this._preLoadSlides, this.slider.stages.done("SlidesReady", function() {
                u.r("windowLoad", this.preLoadAll.bind(this))
            }.bind(this)), this.preLoad(this.preLoadSlides(this.slider.getVisibleSlides(this.slider.currentSlide)))) : (this.preLoadSlides = this._preLoadSlides, this.preLoad(this.preLoadAll())), O(this.slider.sliderElement, "visibleSlidesChanged", this.onVisibleSlidesChanged.bind(this))
        }, t.prototype.onVisibleSlidesChanged = function() {
            1 !== this.lazyLoad && 2 !== this.lazyLoad || this.preLoadSlides(this.slider.getVisibleSlides())
        }, t.prototype.onSlideDeviceChanged = function(t) {
            this.device = t;
            for (var i = 0; i < this.slider.visibleRealSlides.length; i++) this.slider.visibleRealSlides[i].background && this.slider.visibleRealSlides[i].background.onSlideDeviceChanged(t)
        }, t.prototype.preLoadAll = function() {
            for (var t = [], i = 0; i < this.slider.visibleRealSlides.length; i++) t.push(this.slider.visibleRealSlides[i].preLoad());
            return t
        }, t.prototype._preLoadSlides = function(t) {
            for (var i = [], s = 0; s < t.length; s++) i.push(t[s].preLoad());
            return i
        }, t.prototype.preloadSlidesLazyNeighbor = function(t) {
            var i = this._preLoadSlides(t);
            if (this.lazyLoadNeighbor)
                for (var s = 0, n = t[0].getPrevious(), h = t[t.length - 1].getNext(); s < this.lazyLoadNeighbor;) n && (i.push(n.preLoad()), n = n.getPrevious()), h && (i.push(h.preLoad()), h = h.getNext()), s++;
            if (this.slider.stages.resolved("Visible"))
                for (var o = 0; o < i.length; o++) this.slider.U.addPromise(i[o]);
            return i
        }, t
    })), q("litespeed-optm-css-rules"), q("rocket-critical-css"), u.d("SmartSliderLoad", (function() {
        var t = performance.now();

        function s(t) {
            this.slider = t
        }
        return s.prototype.start = function() {
            this.showSlider()
        }, s.prototype.loadLayerImages = function() {
            var t = [];
            return this.slider.sliderElement.querySelectorAll(".n2-ss-layers-container").forEach((function(i) {
                u.ImagesLoaded(i), t.push(u.ImagesLoaded(i))
            })), Promise.all(t)
        }, s.prototype.showSlider = function() {
            this.slider.stages.done("ResizeFirst", this.stage1.bind(this))
        }, s.prototype.stage1 = function() {
            this.slider.responsive.isReadyToResize = !0, this.stage2()
        }, s.prototype.stage2 = function() {
            requestAnimationFrame(function() {
                this.slider.responsive.doResize(), this.slider.finalizeStarterSlide();
                var i = Promise.all([this.slider.backgrounds.promise, this.loadLayerImages(), this.slider.stages.get("Fonts").getPromise()]).finally(this.stage3.bind(this)),
                    s = r(function() {
                        this.slider.U.addPromise(i)
                    }.bind(this), Math.max(1, this.slider.parameters.loadingTime - (performance.now() - t)));
                i.finally(a.bind(null, s))
            }.bind(this))
        }, s.prototype.stage3 = function() {
            this.slider.responsive.doResize(), this.slider.stages.resolve("LayerAnimations"), this.slider.stages.done("LayerAnimations", this.stage4.bind(this))
        }, s.prototype.stage4 = function() {
            this.slider.stages.resolve("BeforeShow"), this.slider.widgets.onReady(), u.MW.L(function() {
                A(this.slider.responsive.alignElement, "n2-ss-align-visible"), A(this.slider.sliderElement, "n2-ss-loaded"), I(this.slider.sliderElement, "n2notransition"), requestAnimationFrame((function() {
                    F(i, "scroll")
                })), Y(this.slider.startVisibilityCheck.bind(this.slider), {
                    timeout: 2e3
                })
            }.bind(this)), this.slider.stages.resolve("Show")
        }, s
    })), u.d("SmartSliderPlugins", (function() {
        function t(t) {
            this.slider = t, this.plugins = {}
        }
        t.prototype.add = function(t, i) {
            this.plugins[t] = new i(this.slider)
        }, t.prototype.get = function(t) {
            return this.plugins[t] || !1
        };
        var i = {},
            s = [];
        return {
            addPlugin: function(t, n) {
                for (var h = 0; h < s.length; h++) s[h].plugins.add(t, n);
                i[t] = n
            },
            addSlider: function(h) {
                if (h.plugins === n)
                    for (var o in h.plugins = new t(h), i) h.plugins.add(o, i[o]);
                s.push(h)
            }
        }
    })), u.d("ScrollTracker", (function() {
        function t() {
            this.started = !1, this.items = [], this.onScrollCallback = this.onScroll.bind(this)
        }
        return t.prototype.add = function(t, s, n, h) {
            var r = {
                el: t,
                mode: s,
                onVisible: n,
                onHide: h,
                state: "unknown"
            };
            this.items.push(r), this._onScroll(r, Math.max(o.clientHeight, i.innerHeight)), this.started || this.start()
        }, t.prototype.start = function() {
            this.started || (i.addEventListener("scroll", this.onScrollCallback, {
                capture: !0,
                passive: !0
            }), this.started = !0)
        }, t.prototype.onScroll = function(e) {
            for (var t = Math.max(o.clientHeight, i.innerHeight), s = 0; s < this.items.length; s++) this._onScroll(this.items[s], t)
        }, t.prototype._onScroll = function(t, i) {
            var s = t.el.closest(".n2-section-smartslider").getBoundingClientRect(),
                n = s.height > .7 * i,
                h = !0;
            "partly-visible" === t.mode ? (n && (s.bottom < 0 || s.top >= s.height) || !n && (s.bottom - s.height < 0 || s.top - i + s.height >= 0)) && (h = !1) : "not-visible" === t.mode && (h = s.top - i < 0 && s.top + s.height > 0), !1 === h ? "hidden" !== t.state && ("function" == typeof t.onHide && t.onHide(), t.state = "hidden") : "visible" !== t.state && ("function" == typeof t.onVisible && t.onVisible(), t.state = "visible")
        }, new t
    })), u.d("SmartSliderApi", (function() {
        function t() {
            this.sliders = {}, this.readys = {}, this.eventListeners = {}
        }
        t.prototype.makeReady = function(t, i) {
            if (this.sliders[t] = i, this.readys[t] !== n)
                for (var s = 0; s < this.readys[t].length; s++) this.readys[t][s].call(i, i, i.sliderElement)
        }, t.prototype.ready = function(t, i) {
            this.sliders[t] !== n ? i.call(this.sliders[t], this.sliders[t], this.sliders[t].sliderElement) : (this.readys[t] === n && (this.readys[t] = []), this.readys[t].push(i))
        }, t.prototype.on = function(t, i) {
            this.eventListeners[t] === n && (this.eventListeners[t] = []), this.eventListeners[t].push(i)
        }, t.prototype.off = function(t, i) {
            if (this.eventListeners[t] !== n)
                for (var s = this.eventListeners[t].length - 1; s >= 0; s--) this.eventListeners[t][s] === i && this.eventListeners[t].splice(s, 1)
        }, t.prototype.dispatch = function(t, i) {
            if (this.eventListeners[t] !== n && this.eventListeners[t].length)
                for (var s = this.eventListeners[t].length - 1; s >= 0; s--) this.eventListeners[t][s] && this.eventListeners[t][s].call(i, i)
        }, t.prototype.trigger = function(t, i, e) {
            e && e.preventDefault();
            var s = i.split(","),
                n = t.closest(".n2-ss-slide,.n2-ss-static-slide"),
                h = n.ssLastEvent;
            t.ssResetEvents || (t.ssResetEvents = 1, O(n, "layerAnimationPlayIn", function(t) {
                t.ssLastEvent = ""
            }.bind(this, n)));
            for (var o = s.length - 1, r = 0; r < s.length; r++) s[r] === h && (o = r);
            i = o === s.length - 1 ? s[0] : s[o + 1], n.ssLastEvent = i, R(n, "ss" + i)
        }, t.prototype.applyAction = function(e, t) {
            if (this.isClickAllowed(e)) {
                var i = e.currentTarget,
                    s = this.findSliderByElement(i);
                s[t].apply(s, Array.prototype.slice.call(arguments, 2))
            }
        }, t.prototype.applyActionWithClick = function(e) {
            this.isClickAllowed(e) && (u._shouldPreventClick || (e.preventDefault(), this.applyAction.apply(this, arguments)))
        }, t.prototype.isClickAllowed = function(e) {
            var t = e.target.closest('a:not([href="#"]), *[onclick]:not([onclick=""]), *[data-n2click]:not([data-n2click=""]), *[data-n2-lightbox]');
            return !t || e.currentTarget === t || !e.currentTarget.contains(t)
        }, t.prototype.openUrl = function(e, t) {
            if (this.isClickAllowed(e)) {
                var s = m(e.currentTarget, "href");
                if (t === n && (t = m(e.currentTarget, "target")), "_blank" === t) {
                    var h = i.open();
                    h.opener = null, h.location = s
                } else n2const.setLocation(s)
            }
        }, t.prototype.openUrlKeyDown = function(e, t) {
            "Enter" !== e.code && "Space" !== e.code || !e.target.matches(":not(input,select,textarea)") || this.openUrl(e, t)
        };
        var r = {
            focusOffsetTop: 0,
            to: function(t) {
                var s = h.querySelector("html, body, .n2_iframe_application__content");
                "smooth" === w(o, "scroll-behavior") ? s.scrollTop = t : W(s, t, i.n2ScrollSpeed || 400)
            },
            top: function() {
                r.to(0)
            },
            bottom: function() {
                r.to(s.scrollHeight - i.innerHeight)
            },
            before: function(t) {
                r.to(B(t) - i.innerHeight)
            },
            after: function(t) {
                r.to(B(t) + E(t) - r.focusOffsetTop)
            },
            next: function(t, i) {
                var s = h.querySelectorAll(i),
                    n = -1;
                s.forEach((function(i, s) {
                    if (t === i || i.contains(t)) return n = s + 1, !1
                })), -1 !== n && n <= s.length && r.element(s[n])
            },
            previous: function(t, i) {
                var s = h.querySelectorAll(i),
                    n = -1;
                s.forEach((function(i, s) {
                    if (t === i || i.contains(t)) return n = s - 1, !1
                })), n >= 0 && r.element(s[n])
            },
            element: function(t) {
                "string" == typeof t && (t = h.querySelector(t)), r.to(B(t) - r.focusOffsetTop)
            }
        };
        return t.prototype.scroll = function(e, t) {
            if (this.isClickAllowed(e)) {
                e.preventDefault();
                var s = this.findSliderByElement(e.target);
                s && (r.focusOffsetTop = s.responsive.focusOffsetTop, e.currentTarget.blur()), r[t].apply(i, Array.prototype.slice.call(arguments, 2))
            }
        }, t.prototype.findSliderByElement = function(t) {
            return (t = t.closest(".n2-ss-slider")) ? t.ss : null
        }, i.n2ss = new t, i.n2ss
    })), u.d("SmartSliderAbstract", (function() {
        function t(h, o) {
            if (this.editor = null, this.elementID = h, i[h] && i[h] instanceof t)
                if (i[h].__sliderElement && !s.contains(i[h].__sliderElement));
                else {
                    if (i[h].sliderElement === n) return void console.error("Slider [#" + h + "] inited multiple times");
                    if (s.contains(i[h].sliderElement)) return void console.error("Slider [#" + h + "] embedded multiple times")
                }
            this.stages = new u.Stages, u.d("#" + h, function() {
                return this
            }.bind(this)), this.isAdmin = !!o.admin, u.SmartSliderPlugins.addSlider(this), this.id = parseInt(h.replace("n2-ss-", "")), i[h] = this, o.isDelayed !== n && o.isDelayed ? j(function() {
                this.waitForExists(h, o)
            }.bind(this)) : this.waitForExists(h, o)
        }
        t.prototype.kill = function() {
            this.killed = !0;
            var t = this.sliderElement.closest(".n2-ss-margin");
            t ? x(t) : u.r("documentReady", function() {
                x(this.sliderElement.closest(".n2-ss-margin"))
            }.bind(this));
            var i = this.sliderElement.closest(".n2-ss-align");
            i ? x(i) : u.r("documentReady", function() {
                x(this.sliderElement.closest(".n2-ss-align"))
            }.bind(this)), n2ss.makeReady(this.id, this)
        }, t.prototype.waitForExists = function(t, i) {
            new Promise((function(i) {
                var s = function() {
                    var n = h.getElementById(t) || h.getElementById(t + "_t");
                    n ? i(n) : r(s, 500)
                };
                s()
            })).then(this.onSliderExists.bind(this, t, i))
        };
        var c = [];

        function l(t, s) {
            if (i.IntersectionObserver) new IntersectionObserver(function(t, i) {
                for (var n = 0; n < t.length; n++) {
                    t[n].isIntersecting && (s(), i.disconnect())
                }
            }.bind(this), {
                rootMargin: "200px 0px 200px 0px"
            }).observe(t);
            else if (c.push({
                    element: t,
                    callback: s
                }), 1 === c.length) {
                var n = [],
                    h = function() {
                        for (var t = 1.4 * i.innerHeight, s = 0; s < c.length; s++)
                            if (c[s].element.getBoundingClientRect().y < t) {
                                var o = c[s].callback;
                                c.splice(s, 1), s--, o()
                            }
                        0 === c.length && (z(n), u.SmartSliderApi.off("SliderResize", h))
                    };
                n.push(L(i, "resize", h, {
                    capture: !0
                })), n.push(L(i, "scroll", h, {
                    capture: !0,
                    passive: !0
                })), u.SmartSliderApi.on("SliderResize", h), h()
            }
        }
        return t.prototype.onSliderExists = function(t, s, n) {
            if (this.__sliderElement = n, this.K = n.closest(".n2-section-smartslider"), this.U = this.K.querySelector("ss3-loader"), this.stages.resolve("Exists"), "TEMPLATE" === n.tagName) {
                var h = n.parentNode;
                h.removeChild(n);
                var o = m(n, "loadingType"),
                    a = n.content.children[0],
                    c = function() {
                        h.appendChild(a), k(this.K, "height"), this.waitForDimension(a, s), D(i, "n2Rocket", {
                            sliderElement: a
                        })
                    }.bind(this);
                "afterOnLoad" === o ? u.r("windowLoad", l.bind(this, this.K, c)) : "afterDelay" === o ? r(c, m(n, "loadingDelay")) : c()
            } else this.waitForDimension(n, s)
        }, t.prototype.waitForDimension = function(t, i) {
            n2const.isRTL() && g(t, {
                "--ss-fs": "flex-end",
                "--ss-fe": "flex-start",
                "--ss-r": "row-reverse",
                "--ss-rr": "row"
            });
            var s = new ResizeObserver(function() {
                s.disconnect(), this.onSliderHasDimension(t, i)
            }.bind(this));
            s.observe(t)
        }, t.prototype.onSliderHasDimension = function(t, i) {
            this.stages.resolve("HasDimension"), this.killed = !1, this.isVisible = !0, this.responsive = !1, this.mainAnimationLastChangeTime = 0, this.currentSlide = null, this.currentRealSlide = null, this.staticSlides = [], this.slides = [], this.visibleRealSlides = [], this.visibleSlides = [], t.ss = this, this.sliderElement = t, this.needBackgroundWrap = !1, this.blockCarousel = !1, this.parameters = f({
                plugins: [],
                admin: !1,
                playWhenVisible: 1,
                playWhenVisibleAt: .5,
                perspective: 1e3,
                callbacks: "",
                autoplay: {},
                blockrightclick: !1,
                maintainSession: 0,
                align: "normal",
                controls: {
                    touch: "horizontal",
                    keyboard: !1,
                    mousewheel: !1,
                    blockCarouselInteraction: 1
                },
                hardwareAcceleration: !0,
                layerMode: {
                    playOnce: 0,
                    playFirstLayer: 1,
                    mode: "skippable",
                    inAnimation: "mainInEnd"
                },
                parallax: {
                    enabled: 0,
                    mobile: 0,
                    horizontal: "mouse",
                    vertical: "mouse",
                    origin: "enter"
                },
                mainanimation: {},
                randomize: {
                    randomize: 0,
                    randomizeFirst: 0
                },
                responsive: {},
                lazyload: {
                    enabled: 0
                },
                postBackgroundAnimations: !1,
                initCallbacks: !1,
                titles: [],
                descriptions: [],
                alias: {
                    id: 0,
                    smoothScroll: 0,
                    slideSwitch: 0
                }
            }, i), this.stages.resolve("Parameters"), this.disabled = {
                layerAnimations: !1,
                layerSplitTextAnimations: !1,
                backgroundAnimations: !1,
                postBackgroundAnimations: !1
            }, n2const.isSamsungBrowser && (this.disabled.layerSplitTextAnimations = !0, this.disabled.postBackgroundAnimations = !0, this.parameters.postBackgroundAnimations && I(this.sliderElement, "n2-ss-feature-post-bg-loader")), n2ss.makeReady(this.id, this), this.isAdmin && (this.changeTo = function() {}), this.load = new u.SmartSliderLoad(this), this.backgrounds = new u.SmartSliderBackgrounds(this), this.initSlides(), "function" == typeof this.parameters.initCallbacks && this.parameters.initCallbacks.call(this), this.stages.done("VisibleSlides", this.onSlidesReady.bind(this)), requestAnimationFrame(this.initUI.bind(this))
        }, t.prototype.onSlidesReady = function() {
            this.stages.resolve("SlidesReady")
        }, t.prototype.initUI = function() {
            for (var t = 0; t < this.realSlides.length; t++) this.realSlides[t].setNext(this.realSlides[t + 1 > this.realSlides.length - 1 ? 0 : t + 1]);
            this.widgets = new u.SmartSliderWidgets(this);
            var s;
            if (new u.UniversalEnter(this.sliderElement, function(e) {
                    e.target.closest(".n2-full-screen-widget") || (a(s), !0, A(this.sliderElement, "n2-hover"), this.widgets.setState("hover", !0), T(this.sliderElement, "universalleave", function(e) {
                        e.stopPropagation(), s = r(function() {
                            !1, I(this.sliderElement, "n2-hover"), this.widgets.setState("hover", !1)
                        }.bind(this), 1e3)
                    }.bind(this)))
                }.bind(this)), this.parameters.carousel || this.initNotCarousel(), this.initHideArrow(), this.controls = {}, this.parameters.blockrightclick && O(this.sliderElement, "contextmenu", (function(e) {
                    e.preventDefault()
                })), this.initMainAnimation(), this.initResponsiveMode(), !this.killed) {
                if (O(this.sliderElement, "touchstart", function() {
                        I(this.sliderElement, "n2-has-hover")
                    }.bind(this), {
                        passive: !0,
                        once: !0
                    }), this.initControls(), this.stages.resolve("UIReady"), !this.isAdmin) {
                    var n = "click";
                    this.hasTouch() && (n = "n2click"), this.sliderElement.querySelectorAll('[data-n2click="url"]').forEach((function(t) {
                        O(t, n, (function(e) {
                            n2ss.openUrl(e)
                        })), O(t, "mousedown", (function(e) {
                            1 === e.button && (e.preventDefault(), n2ss.openUrl(e, "_blank"))
                        })), O(t, "keydown", (function(e) {
                            n2ss.openUrlKeyDown(e)
                        }))
                    }))
                }
                this.load.start(), O(this.sliderElement, "keydown", (function(t) {
                    "Space" !== t.code && "Enter" !== t.code || t.target.matches('[role="button"],[tabindex]') && t.target.matches(":not(a,input,select,textarea)") && (t.preventDefault(), t.target.click(), R(t.target, "n2Activate"))
                })), O(this.sliderElement, "mouseleave", (function(e) {
                    e.currentTarget.blur()
                })), i.jQuery && i.jQuery(this.sliderElement).find("[tabindex]").off("focus")
            }
        }, t.prototype.initSlides = function() {
            var t, i = this.sliderElement.querySelectorAll(".n2-ss-slide");
            for (t = 0; t < i.length; t++) this.slides.push(this.createSlide(i[t], t));
            for (t = 0; t < this.slides.length; t++) this.slides[t].init(), 1 == +m(this.slides[t].element, "first") && (this.originalRealStarterSlide = this.slides[t]);
            this.realSlides = this.slides, this.visibleSlides = this.slides, this.initSlidesEnd()
        }, t.prototype.initSlidesEnd = function() {
            this.afterRawSlidesReady(), this.stages.resolve("RawSlides"), this.randomize(this.realSlides), this.stages.resolve("RawSlidesOrdered"), this.Z()
        }, t.prototype.Z = function() {
            for (var t = this.sliderElement.querySelectorAll(".n2-ss-static-slide"), i = 0; i < t.length; i++) this.staticSlides.push(new u.FrontendSliderStaticSlide(this, t[i]))
        }, t.prototype.createSlide = function(t, i) {
            return new u.FrontendSliderSlide(this, t, i)
        }, t.prototype.afterRawSlidesReady = function() {}, t.prototype.G = function(t, i) {
            D(this.sliderElement, t, i)
        }, t.prototype.publicDispatchEvent = function(t, i) {
            this.G(t, i), u.SmartSliderApi.dispatch(t, this)
        }, t.prototype.getVisibleSlides = function(t) {
            return t === n && (t = this.currentSlide), [t]
        }, t.prototype.getActiveSlides = function(t) {
            return this.getVisibleSlides(t)
        }, t.prototype.findSlideBackground = function(t) {
            return this.sliderElement.querySelector('.n2-ss-slide-background[data-public-id="' + m(t.element, "slidePublicId") + '"]')
        }, t.prototype.getRealIndex = function(t) {
            return t
        }, t.prototype.finalizeStarterSlide = function() {
            var t = this.originalRealStarterSlide;
            if (this.isAdmin) this.finalizeStarterSlideComplete(t);
            else if (this.parameters.randomize.randomizeFirst) t = this.visibleRealSlides[Math.floor(Math.random() * this.visibleRealSlides.length)], this.finalizeStarterSlideComplete(t);
            else if (i["ss" + this.id] !== n) "object" == typeof i["ss" + this.id] ? i["ss" + this.id].done(this.overrideStarterSlideIndex.bind(this)) : this.overrideStarterSlideIndex(i["ss" + this.id]);
            else if (!this.isAdmin && this.parameters.maintainSession && i.localStorage !== n) {
                var s = i.localStorage.getItem("ss-" + this.id);
                this.overrideStarterSlideIndex(s), O(this.sliderElement, "mainAnimationComplete", function(e) {
                    i.localStorage.setItem("ss-" + this.id, e.detail.currentSlideIndex)
                }.bind(this))
            } else this.finalizeStarterSlideComplete(t)
        }, t.prototype.overrideStarterSlideIndex = function(t) {
            var i;
            null !== t && this.realSlides[t] && (i = this.realSlides[t]), this.finalizeStarterSlideComplete(i)
        }, t.prototype.finalizeStarterSlideComplete = function(t) {
            t !== n && t.isVisible || (t = this.visibleRealSlides[0]), t !== n ? this.finalizeStarterSlideComplete2(t) : (this.hide(), T(this.sliderElement, "SliderResize", function() {
                this.finalizeStarterSlideComplete(t)
            }.bind(this)))
        }, t.prototype.finalizeStarterSlideComplete2 = function(t) {
            t !== this.originalRealStarterSlide && this.originalRealStarterSlide !== n && this.originalRealStarterSlide.unsetActive(), this.responsive.onStarterSlide(t), this.stages.resolve("StarterSlide")
        }, t.prototype.randomize = function(t) {
            this.parameters.randomize.randomize && this.shuffleSlides(t)
        }, t.prototype.shuffleSlides = function(t) {
            t.sort((function() {
                return .5 - Math.random()
            }));
            for (var i = t[0].element.parentNode, s = 0; s < t.length; s++) i.appendChild(t[s].element), t[s].setIndex(s)
        }, t.prototype.started = function(t) {
            this.stages.done("UIReady", t.bind(this))
        }, t.prototype.ready = function(t) {
            this.stages.done("Show", t.bind(this))
        }, t.prototype.startVisibilityCheck = function() {
            if (!this.isAdmin && this.parameters.playWhenVisible && i.IntersectionObserver) {
                var t = this.parameters.playWhenVisibleAt,
                    s = t / 2,
                    n = 1 - t / 2,
                    h = new IntersectionObserver(function(t) {
                        t[0].isIntersecting && this._markVisible()
                    }.bind(this), {
                        rootMargin: -50 * t + "% 0px"
                    });
                h.observe(this.sliderElement);
                var o = new IntersectionObserver(function(t) {
                    t[0].isIntersecting && this._markVisible()
                }.bind(this), {
                    threshold: [s, n]
                });
                o.observe(this.sliderElement), this.J = [h.disconnect.bind(h), o.disconnect.bind(o), L(this.sliderElement, "pointerover", this._markVisible.bind(this))]
            } else this.stages.resolve("Visible")
        }, t.prototype._markVisible = function() {
            this.J && z(this.J), this.stages.resolve("Visible")
        }, t.prototype.visible = function(t) {
            this.stages.done("Visible", t.bind(this))
        }, t.prototype.isPlaying = function() {
            return "ended" !== this.mainAnimation.getState()
        }, t.prototype.focus = function(t) {
            var s = !1;
            if (this.responsive.parameters.focusUser && !t && (s = !0), s) {
                var n = _(),
                    h = this.responsive.focusOffsetTop,
                    o = this.responsive.focusOffsetBottom,
                    r = i.innerHeight,
                    a = this.sliderElement.getBoundingClientRect(),
                    u = a.top - h,
                    c = r - a.bottom - o,
                    f = this.responsive.parameters.focusEdge,
                    l = "";
                "top-force" === f ? l = "top" : "bottom-force" === f ? l = "bottom" : u <= 0 && c <= 0 || u > 0 && c > 0 || (u < 0 ? l = "top" === f ? "top" : "bottom" === f ? "bottom" : -u <= c ? "top" : "bottom" : c < 0 && (l = "top" === f ? "top" : "bottom" === f || -c <= u ? "bottom" : "top"));
                var d = n;
                if ("top" === l ? d = n - h + a.top : "bottom" === l && (d = n + o + a.bottom - r), (d = Math.round(d)) !== n) return this._scrollTo(d, Math.abs(n - d))
            }
            return !0
        }, t.prototype._scrollTo = function(t, s) {
            var n = !1;
            return "smooth" === w(o, "scroll-behavior") && (y(o, "scroll-behavior", ""), n = !0), i.nextendScrollFocus = !0, new Promise((function(i) {
                W(h.scrollingElement, t, s, i)
            })).then((function() {
                n && y(o, "scroll-behavior", "smooth"), i.nextendScrollFocus = !1
            }))
        }, t.prototype.isChangeCarousel = function(t) {
            return "next" === t ? this.currentSlide.index + 1 >= this.slides.length : "previous" === t && this.currentSlide.index - 1 < 0
        }, t.prototype.initNotCarousel = function() {
            this.realSlides[0].setPrevious(!1), this.realSlides[this.realSlides.length - 1].setNext(!1)
        }, t.prototype.initHideArrow = function() {
            var t = function(t) {
                this.widgets.setState("nonCarouselFirst", !this.getUIPreviousSlide(t)), this.widgets.setState("nonCarouselLast", !this.getUINextSlide(t))
            }.bind(this);
            this.stages.done("StarterSlide", function() {
                t(this.currentSlide), O(this.sliderElement, "SliderResize", function() {
                    t(this.currentSlide)
                }.bind(this))
            }.bind(this)), O(this.sliderElement, "SlideWillChange", (function(e) {
                t(e.detail.targetSlide)
            }))
        }, t.prototype.next = function(t, i) {
            var s = this.currentSlide.getNext();
            return !(!s || !this.getUINextSlide(this.currentSlide)) && this.changeTo(s.index, !1, t, i)
        }, t.prototype.previous = function(t, i) {
            var s = this.getUIPreviousSlide(this.currentSlide);
            return !!s && this.changeTo(s.index, !0, t, i)
        }, t.prototype.isChangePossible = function(t) {
            var i = !1;
            if ("next" === t) {
                var s = this.currentSlide.getNext();
                s && (i = s.index)
            } else if ("previous" === t) {
                var n = this.currentSlide.getPrevious();
                n && (i = n.index)
            }
            return !1 !== i && i !== this.currentSlide.index
        }, t.prototype.nextCarousel = function(t, i) {
            return this.parameters.carousel ? !!this.next(t, i) || this.changeTo(this.getFirstSlide().index, !1, t, i) : this.next(t, i)
        }, t.prototype.getFirstSlide = function() {
            return this.slides[0].isVisible ? this.slides[0] : this.slides[0].getNext()
        }, t.prototype.getSlideCount = function() {
            for (var t = 0, i = 0; i < this.slides.length; i++) this.slides[i].isVisible && t++;
            return t
        }, t.prototype.directionalChangeToReal = function(t) {
            this.directionalChangeTo(t)
        }, t.prototype.directionalChangeTo = function(t) {
            t > this.currentSlide.index ? this.changeTo(t, !1) : this.changeTo(t, !0)
        }, t.prototype.changeTo = function(t, i, s, h) {
            if ((t = parseInt(t)) !== this.currentSlide.index) {
                if (!this.slides[t].isVisible) return console.error("this slide is not visible on this device"), !1;
                this.G("SlideWillChange", {
                    targetSlide: this.slides[t]
                }), this.G("SlideLoading");
                var o = performance.now();
                return Promise.all([Promise.all(this.backgrounds.preLoadSlides(this.getVisibleSlides(this.slides[t]))), this.focus(s)]).then(function() {
                    if (t !== this.currentSlide.index) {
                        if (this.mainAnimationLastChangeTime < o) {
                            this.mainAnimationLastChangeTime = o;
                            var r = this.mainAnimation.getState();
                            if ("ended" === r) {
                                s === n && (s = !1);
                                var a = this.mainAnimation;
                                h !== n && (a = h), this._changeTo(t, i, s, h), a.changeTo(this.currentSlide, this.slides[t], i, s), this._changeCurrentSlide(t)
                            } else "initAnimation" !== r && "playing" !== r || (this.__fastChangeRemoveCallback && this.__fastChangeRemoveCallback(), this.__fastChangeRemoveCallback = L(this.sliderElement, "mainAnimationComplete", function() {
                                this.changeTo.call(this, t, i, s, h)
                            }.bind(this), {
                                once: !0
                            }), this.mainAnimation.timeScale(2 * this.mainAnimation.timeScale()))
                        }
                        this.G("SlideLoaded")
                    }
                }.bind(this)), !0
            }
            return !1
        }, t.prototype.setCurrentRealSlide = function(t) {
            this.currentRealSlide = this.currentSlide = t
        }, t.prototype._changeCurrentSlide = function(t) {
            this.setCurrentRealSlide(this.slides[t]), this.G("sliderChangeCurrentSlide")
        }, t.prototype._changeTo = function(t, i, s, n) {}, t.prototype.revertTo = function(t, i) {
            this.slides[i].unsetActive(), this.slides[t].setActive(), this._changeCurrentSlide(t), this.G("SlideWillChange", {
                targetSlide: this.slides[t]
            })
        }, t.prototype.forceSetActiveSlide = function(t) {
            t.setActive()
        }, t.prototype.forceUnsetActiveSlide = function(t) {
            t.unsetActive()
        }, t.prototype.updateInsideSlides = function(t) {
            for (var i = 0; i < this.slides.length; i++) this.slides[i].setInside(t.indexOf(this.slides[i]) >= 0)
        }, t.prototype.findSlideByElement = function(t) {
            var i;
            for (i = 0; i < this.realSlides.length; i++)
                if (this.realSlides[i].element.contains(t)) return this.realSlides[i];
            for (i = 0; i < this.staticSlides.length; i++)
                if (this.staticSlides[i].element.contains(t)) return this.staticSlides[i];
            return null
        }, t.prototype.findSlideIndexByElement = function(t) {
            var i = this.findSlideByElement(t);
            return i || -1
        }, t.prototype.initMainAnimation = function() {
            this.mainAnimation = !1
        }, t.prototype.initResponsiveMode = function() {}, t.prototype.hasTouch = function() {
            return "0" != this.parameters.controls.touch
        }, t.prototype.initControls = function() {
            if (!this.parameters.admin) {
                if (this.hasTouch()) switch (this.parameters.controls.touch) {
                    case "vertical":
                        new u.SmartSliderControlTouchVertical(this);
                        break;
                    case "horizontal":
                        new u.SmartSliderControlTouchHorizontal(this)
                }
                this.parameters.controls.keyboard && (this.controls.touch !== n ? new u.SmartSliderControlKeyboard(this, this.controls.touch.axis) : new u.SmartSliderControlKeyboard(this, "horizontal")), this.parameters.controls.mousewheel && new u.SmartSliderControlMouseWheel(this, this.parameters.controls.mousewheel), this.controlAutoplay = new u.SmartSliderControlAutoplay(this, this.parameters.autoplay), u.SmartSliderControlFullscreen.isSupported && (this.controlFullscreen = new u.SmartSliderControlFullscreen(this)), this.parameters.alias.id && new u.SmartSliderControlAlias(this, this.parameters.alias)
            }
        }, t.prototype.getSlideIndex = function(t) {
            return t
        }, t.prototype.slideToID = function(t, i, s) {
            for (var n = 0; n < this.realSlides.length; n++)
                if (+this.realSlides[n].id === t) return this.slide(this.getSlideIndex(n), i, s);
            var o = h.querySelector('[data-id="' + t + '"]');
            if (o && (o = o.closest(".n2-ss-slider")), o) return this.id === o.ss.id || (W(h.scrollingElement, B(o), 400), o.ss.slideToID(t, i, !0))
        }, t.prototype.slide = function(t, i, s) {
            return t >= 0 && t < this.slides.length && (i === n ? this.parameters.carousel && this.currentSlide.index === this.slides.length - 1 && 0 === t ? this.next(s) : this.currentSlide.index > t ? this.changeTo(t, !0, s) : this.changeTo(t, !1, s) : this.changeTo(t, !i, s))
        }, t.prototype.hide = function() {
            this.isVisible && (A(this.responsive.alignElement, "n2-ss-slider-has-no-slide"), this.load.placeholder && A(this.load.placeholder, "n2-ss-slider-has-no-slide"), this.isVisible = !1)
        }, t.prototype.show = function() {
            this.isVisible || (A(this.responsive.alignElement, "n2-ss-slider-has-no-slide"), this.load.placeholder && I(this.load.placeholder, "n2-ss-slider-has-no-slide"), F(i, "scroll"), this.isVisible = !0)
        }, t.prototype.startAutoplay = function() {
            return this.controlAutoplay !== n && (this.controlAutoplay.setState("pausedSecondary", 0), !0)
        }, t.prototype.pauseAutoplay = function() {
            return this.controlAutoplay !== n && (this.controlAutoplay.setState("pausedSecondary", 1), !0)
        }, t.prototype.getAnimationAxis = function() {
            return "horizontal"
        }, t.prototype.getDirectionPrevious = function() {
            return n2const.isRTL() && "horizontal" === this.getAnimationAxis() ? "next" : "previous"
        }, t.prototype.getDirectionNext = function() {
            return n2const.isRTL() && "horizontal" === this.getAnimationAxis() ? "previous" : "next"
        }, t.prototype.previousWithDirection = function() {
            return this[this.getDirectionPrevious()]()
        }, t.prototype.nextWithDirection = function() {
            return this[this.getDirectionNext()]()
        }, t.prototype.getUIPreviousSlide = function(t) {
            return t.getPrevious()
        }, t.prototype.getUINextSlide = function(t) {
            return t.getNext()
        }, t.prototype.getHorizontalTouchDimension = function() {
            return this.responsive.resizeContext.sliderWidth
        }, t.prototype.getVerticalTouchDimension = function() {
            return this.responsive.resizeContext.sliderHeight
        }, t
    })), u.d("Stages", (function() {
        function t() {
            this.stages = {}
        }

        function i(t) {
            this.n = t, this._isResolved = !1, this._promise = new Promise(function(t, i) {
                this._resolve = t, this._reject = i
            }.bind(this)), this._promise.then(function() {
                this._isResolved = !0
            }.bind(this))
        }
        return t.prototype.get = function(t) {
            return this.stages[t] === n && (this.stages[t] = new i(t)), this.stages[t]
        }, t.prototype.resolve = function(t) {
            this.get(t).resolve()
        }, t.prototype.done = function(t, i) {
            var s;
            if ("string" == typeof t) s = this.get(t).getPromise();
            else {
                for (var n = [], h = 0; h < t.length; h++) n.push(this.get(t[h]).getPromise());
                s = Promise.all(n)
            }
            s.then(i)
        }, t.prototype.resolved = function(t) {
            return this.get(t).resolved()
        }, i.prototype.getPromise = function() {
            return this._promise
        }, i.prototype.resolve = function() {
            this.resolved() || this._resolve()
        }, i.prototype.done = function(t) {
            this._promise.then(t)
        }, i.prototype.resolved = function() {
            return this._isResolved
        }, t
    })), u.d("SmartSliderWidget", (function() {
        "use strict";

        function t(t, i, s) {
            this.slider = t, this.key = i, this.selector = s, this.slider.started(this.register.bind(this))
        }
        return t.prototype.register = function() {
            this.slider.widgets.has(this.key) || (this.widget = this.slider.sliderElement.querySelector(this.selector), this.widget && (this.slider.widgets.register(this.key, this), this.onStart()))
        }, t.prototype.onStart = function() {}, t.prototype.isVisible = function() {
            var t = this.widget.getBoundingClientRect();
            return !(!t.width || !t.height)
        }, t.prototype.getWidth = function() {
            return this.widget.getBoundingClientRect().width
        }, t.prototype.getHeight = function() {
            return this.widget.getBoundingClientRect().height
        }, t
    })), u.d("SmartSliderWidgets", (function() {
        function t(t) {
            this.slider = t, this.sliderElement = t.sliderElement, this.controls = {
                previous: n,
                next: n,
                bullet: n,
                autoplay: n,
                indicator: n,
                bar: n,
                thumbnail: n,
                shadow: n,
                fullscreen: n,
                html: n
            }, this._controlDimensionRegexp = new RegExp("^(" + Object.keys(this.controls).join("|") + ")(width|height)$", "i"), this.excludedSlides = {}, this.states = {
                hover: !1,
                nonCarouselFirst: !1,
                nonCarouselLast: !1,
                currentSlideIndex: -1,
                singleSlide: !1
            }
        }
        return t.prototype.register = function(t, i) {
            this.controls[t] = i
        }, t.prototype.has = function(t) {
            return this.controls[t] !== n
        }, t.prototype.setState = function(t, i) {
            if (this.states[t] != i) {
                this.states[t] = i;
                var s = t.split(".");
                switch (s[0]) {
                    case "hide":
                        this.onStateChangeSingle(s[1]);
                        break;
                    case "nonCarouselFirst":
                        this.onStateChangeSingle(this.slider.getDirectionPrevious());
                        break;
                    case "nonCarouselLast":
                        this.onStateChangeSingle(this.slider.getDirectionNext());
                        break;
                    default:
                        this.onStateChangeAll()
                }
            }
        }, t.prototype.onStateChangeAll = function() {
            for (var t in this.controls) this.onStateChangeSingle(t)
        }, t.prototype.onStateChangeSingle = function(t) {
            if (this.controls[t]) {
                var i = !0;
                if (this.controls[t].widget.classList.contains("n2-ss-widget-display-hover") && (i = this.states.hover), i && (t === this.slider.getDirectionPrevious() && this.states.nonCarouselFirst || t === this.slider.getDirectionNext() && this.states.nonCarouselLast) && (i = !1), i) {
                    var s = t + "-" + (this.states.currentSlideIndex + 1);
                    this.excludedSlides[s] && (i = !1)
                }
                i && this.states["hide." + t] !== n && this.states["hide." + t] && (i = !1), i && this.states.singleSlide && ("previous" !== t && "next" !== t && "bullet" !== t && "autoplay" !== t && "indicator" !== t || (i = !1)), this.controls[t].widget.classList.toggle("n2-ss-widget-hidden", !i)
            }
        }, t.prototype.getVerticalsHeight = function() {
            var t = 0;
            if (this._verticals)
                for (var i = 0; i < this._verticals.length; i++) t += this._verticals[i].offsetHeight;
            return t
        }, t.prototype.onReady = function() {
            this.advancedElement = this.slider.sliderElement.querySelector(".n2-ss-slider-controls-advanced"), this.requiredVariables = this.advancedElement ? (m(this.advancedElement, "variables") || "").split(",") : [], O(this.slider.sliderElement, "visibleSlidesChanged", function() {
                this.setState("singleSlide", this.slider.visibleSlides.length <= 1)
            }.bind(this)), this.setState("singleSlide", this.slider.visibleSlides.length <= 1), this._verticals = this.sliderElement.querySelectorAll('.n2-ss-widget[data-position="above"]:not(.nextend-shadow),.n2-ss-widget[data-position="below"]:not(.nextend-shadow)');
            var t = !1;
            for (var i in this.controls)
                if (this.controls[i] !== n) {
                    var s = m(this.controls[i].widget, "excludeSlides");
                    if (s !== n) {
                        for (var h = s.split(","), o = h.length - 1; o >= 0; o--) {
                            var r = h[o].split("-");
                            if (2 === r.length) {
                                var a = parseInt(r[0]),
                                    u = parseInt(r[1]);
                                if (a <= u)
                                    for (var c = a; c <= u; c++) h.push(c)
                            } else h[o] = parseInt(h[o])
                        }
                        if (h.length > 0) {
                            for (o = 0; o < h.length; o++) this.excludedSlides[i + "-" + h[o]] = !0;
                            t = !0
                        }
                    }
                }
            if (t) {
                var f = function(e) {
                    this.setState("currentSlideIndex", e.detail.targetSlide.index)
                }.bind(this);
                f({
                    detail: {
                        targetSlide: this.slider.currentRealSlide
                    }
                }), O(this.slider.sliderElement, "SlideWillChange", f)
            }
            this.requiredVariables.length && this.advancedElement && (this.flushAdvancedVariables(), O(this.slider.sliderElement, "SliderResize", this.flushAdvancedVariables.bind(this))), this.onStateChangeAll(), this.slider.stages.resolve("WidgetsReady"), this.advancedElement && this.slider.stages.done("BeforeShow", function() {
                A(this.advancedElement, "n2-ss-slider-controls-advanced--ready")
            }.bind(this))
        }, t.prototype.flushAdvancedVariables = function() {
            for (var t = {}, i = 0; i < this.requiredVariables.length; i++) t[this.requiredVariables[i]] = this.getAdvancedVariable(this.requiredVariables[i]);
            for (var s in t) y(this.advancedElement, "--" + s, parseInt(t[s]))
        }, t.prototype.getAdvancedVariable = function(t) {
            var i = this.slider.responsive.resizeContext;
            switch (t) {
                case "outerwidth":
                    return this.sliderElement.parentNode.getBoundingClientRect().width;
                case "outerheight":
                    return E(this.sliderElement.parentNode);
                case "width":
                    return i.sliderWidth;
                case "height":
                    return i.sliderHeight;
                case "canvaswidth":
                    return i.slideWidth;
                case "canvasheight":
                    return i.slideHeight;
                case "panewidth":
                case "paneWidth":
                    if (i.paneWidth || i.panewidth) return i.paneWidth || i.panewidth
            }
            var s = t.match(this._controlDimensionRegexp);
            if (s) {
                var n = this.controls[s[1]];
                if (n) switch (s[2]) {
                    case "width":
                        return n.getWidth();
                    case "height":
                        return n.getHeight()
                }
            }
            return 0
        }, t.prototype.onAdvancedVariableWidgetChanged = function(t) {
            this.advancedElement && (m(this.advancedElement, "variables") || "").match(t) && this.slider.stages.done("BeforeShow", function() {
                this.flushAdvancedVariables()
            }.bind(this))
        }, t
    })), u.d("SmartSliderMainAnimationAbstract", (function() {
        function t(t, i) {
            this.state = "ended", this.isTouch = !1, this.isReverseAllowed = !0, this.isReverseEnabled = !1, this.reverseSlideIndex = null, this.isNoAnimation = !1, this.slider = t, this.parameters = f({
                duration: 1500,
                ease: "easeInOutQuint"
            }, i), this.parameters.duration = Math.max(.01, this.parameters.duration / 1e3), this.sliderElement = t.sliderElement, this.timeline = new u.q({
                paused: !0
            }), O(this.sliderElement, "mainAnimationStart", function(e) {
                this._revertCurrentSlideIndex = e.detail.previousSlideIndex, this._revertNextSlideIndex = e.detail.currentSlideIndex
            }.bind(this)), this.slider.stages.done("ResponsiveStart", this.init.bind(this))
        }
        return t.prototype.init = function() {
            this.responsive = this.slider.responsive
        }, t.prototype.enableReverseMode = function() {
            this.isReverseEnabled = !0, this.reverseTimeline = new u.q({
                paused: !0
            }), D(this.slider.sliderElement, "reverseModeEnabled", {
                reverseSlideIndex: this.reverseSlideIndex
            })
        }, t.prototype.disableReverseMode = function() {
            this.isReverseEnabled = !1
        }, t.prototype.setTouch = function(t) {
            this.isTouch = t
        }, t.prototype.setTouchProgress = function(t) {
            this.parameters.duration < .3 && (t < 0 ? t = -1 : t > 0 && (t = 1)), "ended" !== this.state && (this.isReverseEnabled ? 0 === t ? (this.reverseTimeline.progress(0), this.timeline.progress(t, !1)) : t >= 0 && t <= 1 ? (this.reverseTimeline.progress(0), this.timeline.progress(t)) : t < 0 && t >= -1 && (this.timeline.progress(0), this.reverseTimeline.progress(Math.abs(t))) : t <= 0 ? this.timeline.progress(Math.max(t, 1e-6), !1) : t >= 0 && t <= 1 && this.timeline.progress(t))
        }, t.prototype.setTouchEnd = function(t, i, s) {
            "ended" !== this.state && (this.isReverseEnabled ? this._setTouchEndWithReverse(t, i, s) : this._setTouchEnd(t, i, s))
        }, t.prototype._setTouchEnd = function(t, i, s) {
            t && i > 0 ? (this.fixTouchDuration(this.timeline, i, s), this.timeline.play()) : (this.revertCB(this.timeline), this.fixTouchDuration(this.timeline, 1 - i, s), this.timeline.reverse(), this.willRevertTo(this._revertCurrentSlideIndex, this._revertNextSlideIndex))
        }, t.prototype._setTouchEndWithReverse = function(t, i, s) {
            t ? i < 0 && this.reverseTimeline.totalDuration() > 0 ? (this.fixTouchDuration(this.reverseTimeline, i, s), this.reverseTimeline.play(), this.willRevertTo(this.reverseSlideIndex, this._revertNextSlideIndex)) : (this.willCleanSlideIndex(this.reverseSlideIndex), this.fixTouchDuration(this.timeline, i, s), this.timeline.play()) : (i < 0 ? (this.revertCB(this.reverseTimeline), this.fixTouchDuration(this.reverseTimeline, 1 - i, s), this.reverseTimeline.reverse()) : (this.revertCB(this.timeline), this.fixTouchDuration(this.timeline, 1 - i, s), this.timeline.reverse()), this.willCleanSlideIndex(this.reverseSlideIndex), this.willRevertTo(this._revertCurrentSlideIndex, this._revertNextSlideIndex))
        }, t.prototype.fixTouchDuration = function(t, i, s) {
            var n = t.totalDuration(),
                h = Math.max(n / 3, Math.min(n, s / Math.abs(i) / 1e3));
            h !== n && t.totalDuration(h)
        }, t.prototype.getState = function() {
            return this.state
        }, t.prototype.timeScale = function() {
            return arguments.length > 0 ? (this.timeline.timeScale(arguments[0]), this) : this.timeline.timeScale()
        }, t.prototype.changeTo = function(t, i, s, n) {
            this._initAnimation(t, i, s), this.state = "initAnimation", this.timeline.paused(!0), this.timeline.eventCallback("onStart", this.onChangeToStart.bind(this), [t, i, n]), this.timeline.eventCallback("onComplete", this.onChangeToComplete.bind(this), [t, i, n]), this.timeline.eventCallback("onReverseComplete", null), this.revertCB = function(s) {
                s.eventCallback("onReverseComplete", this.onReverseChangeToComplete.bind(this), [i, t, n])
            }.bind(this), this.isTouch || this.timeline.play()
        }, t.prototype.willRevertTo = function(t, i) {
            D(this.slider.sliderElement, "mainAnimationWillRevertTo", {
                slideIndex: t,
                originalNextSlideIndex: i
            }), T(this.sliderElement, "mainAnimationComplete", this.revertTo.bind(this, t, i))
        }, t.prototype.revertTo = function(t, i) {
            this.slider.revertTo(t, i), R(this.slider.slides[i].element, "mainAnimationStartInCancel")
        }, t.prototype.willCleanSlideIndex = function(t) {
            T(this.sliderElement, "mainAnimationComplete", this.cleanSlideIndex.bind(this, t))
        }, t.prototype.cleanSlideIndex = function() {}, t.prototype._initAnimation = function(t, i, s) {
            this.slider.updateInsideSlides([t, i])
        }, t.prototype.onChangeToStart = function(t, i, s) {
            this.state = "playing";
            var n = {
                mainAnimation: this,
                previousSlideIndex: t.index,
                currentSlideIndex: i.index,
                isSystem: s
            };
            this.slider.G("mainAnimationStart", n), t.G("mainAnimationStartOut", n), i.G("mainAnimationStartIn", n)
        }, t.prototype.onChangeToComplete = function(t, i, s) {
            var n = {
                mainAnimation: this,
                previousSlideIndex: t.index,
                currentSlideIndex: i.index,
                isSystem: s
            };
            this.clearTimelines(), this.disableReverseMode(), t.G("mainAnimationCompleteOut", n), i.G("mainAnimationCompleteIn", n), this.state = "ended", this.slider.updateInsideSlides([i]), s || i.focus(), this.slider.G("mainAnimationComplete", n)
        }, t.prototype.onReverseChangeToComplete = function(i, s, n) {
            t.prototype.onChangeToComplete.apply(this, arguments)
        }, t.prototype.clearTimelines = function() {
            this.revertCB = function() {}, this.timeline.clear(), this.timeline.timeScale(1)
        }, t.prototype.getEase = function() {
            return this.isTouch ? "linear" : this.parameters.ease
        }, t
    })), u.d("SmartSliderControlAlias", (function() {
        "use strict";

        function t(t, s) {
            this.tt = t, this.it = t.sliderElement, this.st = t.K, this.nt = m(this.st, "alias"), this.ht = f({
                id: 0,
                smoothScroll: 0,
                slideSwitch: 0,
                scroll: 1
            }, s), this.nt && (this.ht.smoothScroll && y(o, "scroll-behavior", "smooth"), this.ht.slideSwitch && (this.switchOnLoad(), O(i, "hashchange", function() {
                var t = this.getAnchor();
                t > 0 && (1 === this.tt.responsive.parameters.focusUser ? (this.tt.responsive.parameters.focusUser = 0, this.switchToSlide(t - 1), this.tt.responsive.parameters.focusUser = 1) : this.switchToSlide(t - 1), this.replaceHash())
            }.bind(this))))
        }
        return t.prototype.getAnchor = function() {
            var t = i.location.hash.substr(1);
            if (t) {
                if (t === this.nt) return !0;
                if (this.ht.slideSwitch && 0 === t.indexOf(this.nt)) {
                    var s = +t.substr(this.nt.length + 1);
                    if (s > 0) return s
                }
            }
            return !1
        }, t.prototype.switchOnLoad = function() {
            var t = this.getAnchor();
            if (t > 0) {
                var s = t - 1,
                    n = i["n2-ss-" + this.tt.id];
                n && n.stages.resolved("StarterSlide") ? n.stages.done("BeforeShow", function() {
                    this.switchToSlide(s)
                }.bind(this)) : i["ss" + this.tt.id] = s, this.replaceHash()
            }
        }, t.prototype.replaceHash = function() {
            var t = "#" + this.nt;
            history.replaceState ? history.replaceState(null, null, t) : location.hash = t
        }, t.prototype.switchToSlide = function(t) {
            this.tt.slide(t)
        }, t
    })), u.d("SmartSliderControlAutoplay", (function() {
        "use strict";

        function t(t, i) {
            this.slider = t, this.state = {
                enabled: 1,
                paused: 1,
                pausedSecondary: 0,
                mainAnimationPlaying: 0,
                wait: 0
            }, this._listeners = [], this.wait = new u.SmartSliderControlAutoplayWait(this), this._currentCount = 1, this.autoplayToSlide = 0, this.autoplayToSlideIndex = -1, this.parameters = f({
                enabled: 0,
                start: 1,
                duration: 8e3,
                autoplayLoop: 0,
                allowReStart: 0,
                pause: {
                    mouse: "enter",
                    click: !0,
                    mediaStarted: !0
                },
                resume: {
                    click: 0,
                    mouse: 0,
                    mediaEnded: !0
                },
                interval: 1,
                intervalModifier: "loop",
                intervalSlide: "current"
            }, i), this.clickHandled = !1, t.controls.autoplay = this, this.parameters.enabled ? (this.parameters.duration /= 1e3, this.slider.visible(this.onReady.bind(this))) : this.disable()
        }
        return t.prototype.preventClickHandle = function() {
            this.clickHandled = !0, r(function() {
                this.clickHandled = !1
            }.bind(this), 300)
        }, t.prototype.onReady = function() {
            this.et = !0;
            this.timeline = u.W.to({
                _progress: 0
            }, this.getSlideDuration(this.slider.currentSlide.index), {
                _progress: 1,
                paused: !0,
                onComplete: this.next.bind(this)
            });
            var t = this.slider.sliderElement;
            this._listeners.push(L(t, "SlideLoading", function() {
                this.wait.add("load")
            }.bind(this))), this._listeners.push(L(t, "SlideLoaded", function(e) {
                this.wait.resolve("load")
            }.bind(this))), this._listeners.push(L(t, "BeforeCurrentSlideChange", function() {
                this.wait.resolveWeak(), this.setState("mainAnimationPlaying", 1)
            }.bind(this))), this._listeners.push(L(t, "mainAnimationStart", function() {
                this._currentCount++, this.setState("mainAnimationPlaying", 1), this.wait.resolveWeak()
            }.bind(this))), this._listeners.push(L(t, "mainAnimationComplete", function(e) {
                this.timeline.duration(this.getSlideDuration(e.detail.currentSlideIndex)), this.et = !0, this.timeline.pause(0, !1), this.setState("mainAnimationPlaying", 0)
            }.bind(this))), this._listeners.push(L(t, "autoplayPause", function(e) {
                this.setState("paused", 1)
            }.bind(this))), this._listeners.push(L(t, "autoplayResume", function(e) {
                (this.state.paused || 0 === parseInt(this.parameters.start) && 0 === parseInt(this.state.paused)) && (this._currentCount = 1), this.setState("pausedSecondary", 0), this.setState("paused", 0);
                var t = e.detail.progress;
                t !== n && this.timeline.progress(t)
            }.bind(this))), this._listeners.push(L(t, "CurrentSlideChanged", function(e) {
                this.timeline.duration(this.getSlideDuration(e.detail.currentSlide.index)), this.et = !0, this.timeline.pause(0, !1), this.setState("mainAnimationPlaying", 0)
            }.bind(this))), this.initClick(this.parameters.pause.click, this.parameters.resume.click), this.initHover(this.parameters.pause.mouse, this.parameters.resume.mouse), this.initMedia(this.parameters.pause.mediaStarted, this.parameters.resume.mediaEnded), this.slider.stages.resolve("AutoplayReady"), this.slider.G("autoplay", {
                progress: 0
            }), this.parameters.start || this.setState("pausedSecondary", 1), this.setState("paused", 0)
        }, t.prototype.setState = function(t, i) {
            this.state[t] !== i && (this.state[t] = i, this.timeline !== n && (!this.state.enabled || this.state.paused || this.state.pausedSecondary || this.state.wait || this.state.mainAnimationPlaying ? (this.timeline.paused() || this.timeline.pause(), this.state.mainAnimationPlaying || this.isPaused !== n && this.isPaused || (this.isPaused = !0, this.slider.G("autoplayPaused"))) : (this.timeline.paused() && this.timeline.play(), (this.isPaused === n || this.isPaused) && (this.isPaused = !1, this.slider.G("autoplayStarted")))))
        }, t.prototype.initClick = function(t, i) {
            (t || i) && (this.universalClick = new u.UniversalClick(this.slider.sliderElement, function(e) {
                this.clickHandled || (this.state.pausedSecondary ? i && this.setState("pausedSecondary", 0) : t && this.setState("pausedSecondary", 1))
            }.bind(this)))
        }, t.prototype.initHover = function(t, i) {
            if (t || i) {
                var s = !1;
                this._listeners.push(L(this.slider.sliderElement, "touchend", (function() {
                    s = !0, r((function() {
                        s = !1
                    }), 300)
                }))), this._listeners.push(L(this.slider.sliderElement, "mouseenter", function(e) {
                    this.state.pausedSecondary ? "enter" === i && this.setState("pausedSecondary", 0) : s || "enter" !== t || this.setState("pausedSecondary", 1)
                }.bind(this))), this._listeners.push(L(this.slider.sliderElement, "mouseleave", function(e) {
                    this.state.pausedSecondary ? "leave" === i && this.setState("pausedSecondary", 0) : "leave" === t && this.setState("pausedSecondary", 1)
                }.bind(this)))
            }
        }, t.prototype.initMedia = function(t, i) {
            var s = this.slider.sliderElement;
            t ? (this._listeners.push(L(s, "mediaStarted", function(e) {
                this.wait.add(e.detail.id)
            }.bind(this))), this._listeners.push(L(s, "mediaEnded", function(e) {
                this.wait.resolve(e.detail.id)
            }.bind(this)))) : i && this._listeners.push(L(s, "mediaEnded", function() {
                this.setState("pausedSecondary", 0)
            }.bind(this)))
        }, t.prototype.enableProgress = function() {
            this.timeline && this.timeline.eventCallback("onUpdate", function() {
                this.slider.G("autoplay", {
                    progress: this.timeline.progress()
                })
            }.bind(this))
        }, t.prototype.next = function() {
            if (this.et) {
                if (this.et = !1, this.timeline.pause(), !this.parameters.autoplayLoop) {
                    switch (this.parameters.intervalModifier) {
                        case "slide":
                            this.slideSwitchingSlideCount();
                            break;
                        case "slideindex":
                            this.slideSwitchingIndex();
                            break;
                        default:
                            this.slideSwitchingLoop()
                    }
                    this.autoplayToSlide > 0 && this._currentCount >= this.autoplayToSlide && this.limitAutoplay(), this.autoplayToSlideIndex >= 0 && this.slider.slides.length === this.slider.visibleSlides.length && (this.autoplayToSlideIndex === this.slider.currentRealSlide.index + 2 || 1 === this.autoplayToSlideIndex && this.slider.currentRealSlide.index + this.autoplayToSlideIndex === this.slider.slides.length) && this.limitAutoplay()
                }
                this.slider.nextCarousel(!0)
            }
        }, t.prototype.slideSwitchingLoop = function() {
            this.autoplayToSlide = this.parameters.interval * this.slider.visibleSlides.length - 1, "next" === this.parameters.intervalSlide && this.autoplayToSlide++
        }, t.prototype.slideSwitchingSlideCount = function() {
            this.autoplayToSlide = this.parameters.interval
        }, t.prototype.slideSwitchingIndex = function() {
            var t = Math.max(1, this.parameters.interval);
            t > this.slider.slides.length && (t = 1), this.autoplayToSlideIndex = t
        }, t.prototype.limitAutoplay = function() {
            this.parameters.allowReStart ? (this._currentCount = 0, this.setState("paused", 1)) : this.disable()
        }, t.prototype.disable = function() {
            this.setState("enabled", 0), z(this._listeners), this.universalClick && (this.universalClick.remove(), delete this.universalClick), this.slider.stages.resolve("AutoplayDestroyed")
        }, t.prototype.getSlideDuration = function(t) {
            var i = this.slider.realSlides[this.slider.getRealIndex(t)],
                s = i.minimumSlideDuration;
            return 0 === parseFloat(i.minimumSlideDuration) && (s = this.parameters.duration), s
        }, t
    })), u.d("SmartSliderControlFullscreen", (function() {
        "use strict";

        function t(i, s, n) {
            this.slider = i, this.responsive = this.slider.responsive, this._type = this.responsive.parameters.type, this._upscale = this.responsive.parameters.upscale, this.ot = !1, this.it = this.slider.sliderElement, this.rt = this.it.closest(".n2-section-smartslider"), O(h, t.event, this.fullScreenChange.bind(this))
        }
        return t.isSupported = !(!h.exitFullscreen && !h.webkitExitFullscreen), t.isSupported && (t.requestFullscreen = o.requestFullscreen || o.webkitRequestFullscreen, t.exitFullscreen = h.exitFullscreen || h.webkitExitFullscreen, t.event = o.requestFullscreen ? "fullscreenchange" : o.webkitRequestFullscreen ? "webkitfullscreenchange" : null), t.prototype.switchState = function() {
            this.ot = !this.ot, this.ot ? this._fullScreen() : this._normalScreen()
        }, t.prototype.requestFullscreen = function() {
            return !this.ot && (this.ot = !0, this._fullScreen(), !0)
        }, t.prototype.exitFullscreen = function() {
            return !!this.ot && (this.ot = !1, this._normalScreen(), !0)
        }, t.prototype._fullScreen = function() {
            this.responsive.ot = !0, this.responsive.parameters.type = "fullpage", this.it.dataset.responsive = this.responsive.parameters.type, this.responsive.parameters.upscale = !0, this._marginLeft = this.responsive.containerElement.style.marginLeft, this._marginRight = this.responsive.containerElement.style.marginRight, g(this.responsive.containerElement, {
                marginLeft: 0,
                marginRight: 0
            }), g(this.rt, {
                width: "100%",
                height: "100%",
                "background-color": i.getComputedStyle(s).backgroundColor
            }), t.requestFullscreen.call(this.rt)
        }, t.prototype._normalScreen = function() {
            t.exitFullscreen.call(h)
        }, t.prototype.fullScreenChange = function() {
            this.isDocumentInFullScreenMode() ? (this.slider.G("n2FullScreen"), A(o, "n2-in-fullscreen"), A(this.slider.sliderElement, "n2-ss-slider--fullscreen"), this.ot = !0, "auto" === this._type && y(this.slider.responsive.alignElement, "max-width", "none"), F(i, "resize")) : (this.responsive.ot = !1, this.responsive.parameters.type = this._type, this.it.dataset.responsive = this._type, this.responsive.parameters.upscale = this._upscale, g(this.responsive.containerElement, {
                marginLeft: this._marginLeft,
                marginRight: this._marginRight
            }), g(this.rt, {
                width: "",
                height: "",
                "background-color": ""
            }), I(this.slider.sliderElement, "n2-ss-slider--fullscreen"), I(o, "n2-in-fullscreen"), "auto" === this._type && k(this.slider.responsive.alignElement, "max-width"), F(i, "resize"), this.ot = !1, this.slider.G("n2ExitFullScreen"))
        }, t.prototype.isDocumentInFullScreenMode = function() {
            return h.fullscreenElement || h.webkitIsFullScreen
        }, t
    })), u.d("SmartSliderControlKeyboard", (function() {
        "use strict";
        var t;

        function n() {
            this.controls = [], h.addEventListener("keydown", this.onKeyDown.bind(this)), h.addEventListener("mousemove", this.onMouseMove.bind(this), {
                capture: !0
            })
        }

        function o(i, s, h) {
            this.slider = i, this.parameters = f({}, h), this.parseEvent = "vertical" === s ? o.prototype.parseEventVertical : o.prototype.parseEventHorizontal, t || (t = new n), t.addControl(this), O(this.slider.sliderElement, "SliderKeyDown", function(e) {
                this.onKeyDown(e.detail.e)
            }.bind(this)), i.controls.keyboard = this
        }
        return n.prototype.onMouseMove = function(e) {
            this.mouseEvent = e
        }, n.prototype.addControl = function(t) {
            this.controls.push(t)
        }, n.prototype.onKeyDown = function(e) {
            if (e.target.tagName.match(/BODY|DIV|IMG/) && !e.target.isContentEditable) {
                var t;
                if (this.mouseEvent && (t = this.findSlider(h.elementFromPoint(this.mouseEvent.clientX, this.mouseEvent.clientY)))) return void D(t, "SliderKeyDown", {
                    e: e
                });
                if (h.activeElement !== s && (t = this.findSlider(h.activeElement))) return void D(t, "SliderKeyDown", {
                    e: e
                });
                for (var i = 0; i < this.controls.length; i++) this.controls[i].onKeyDown(e)
            }
        }, n.prototype.findSlider = function(t) {
            return t ? t.classList.contains("n2-ss-slider") ? t : t.closest(".n2-ss-slider") : null
        }, o.prototype.isSliderOnScreen = function() {
            var t = this.slider.sliderElement.getBoundingClientRect(),
                s = t.height / 2;
            return t.top + s >= 0 && t.top + s <= i.innerHeight
        }, o.prototype.onKeyDown = function(e) {
            !e.defaultPrevented && this.isSliderOnScreen() && this.parseEvent.call(this, e) && e.preventDefault()
        }, o.prototype.parseEventHorizontal = function(e) {
            switch (e.code) {
                case "ArrowRight":
                    return n2const.activeElementBlur(), this.slider[n2const.isRTL() ? "previous" : "next"](), !0;
                case "ArrowLeft":
                    return n2const.activeElementBlur(), this.slider[n2const.isRTL() ? "next" : "previous"](), !0;
                default:
                    return !1
            }
        }, o.prototype.parseEventVertical = function(e) {
            switch (e.code) {
                case "ArrowDown":
                    return (!this.slider.isChangeCarousel("next") || !this.slider.parameters.controls.blockCarouselInteraction) && (n2const.activeElementBlur(), this.slider.next(), !0);
                case "ArrowUp":
                    return (!this.slider.isChangeCarousel("previous") || !this.slider.parameters.controls.blockCarouselInteraction) && (n2const.activeElementBlur(), this.slider.previous(), !0);
                default:
                    return !1
            }
        }, o
    })), u.d("SmartSliderControlMouseWheel", (function() {
        "use strict";

        function t(t, i) {
            this.preventScroll = {
                local: !1,
                curve: !1,
                curveGlobal: !1,
                global: !1,
                localTimeout: !1,
                curveTimeout: !1,
                curveGlobalTimeout: !1,
                globalTimeout: !1
            }, this.maxDelta = 0, this.slider = t, this.at = 2 === i ? "deltaX" : "deltaY", h.addEventListener("wheel", this.onGlobalMouseWheel.bind(this), {
                passive: !1
            }), t.controls.mouseWheel = this
        }
        return t.prototype.hasScrollableParentVertical = function(t, s) {
            for (; s && s !== this.slider.sliderElement;) {
                if (s.scrollHeight > s.clientHeight) {
                    var n = i.getComputedStyle(s).overflowY;
                    if ("scroll" === n || "auto" === n)
                        if (t) {
                            if (s.scrollTop > 0) return !0
                        } else if (s.scrollTop + s.clientHeight < s.scrollHeight) return !0
                }
                s = s.parentNode
            }
            return !1
        }, t.prototype.hasScrollableParentHorizontal = function(t) {
            for (; t && t !== this.slider.sliderElement;) {
                var s = i.getComputedStyle(t).overflowX;
                if (("scroll" === s || "auto" === s) && t.scrollWidth > t.offsetWidth) return !0;
                t = t.parentNode
            }
            return !1
        }, t.prototype.onGlobalMouseWheel = function(e) {
            e.target.closest(".n2-ss-slider") && 0 !== e[this.at] && (this.onCurveEvent(e), this.preventScroll.local || this.preventScroll.curve || Math.abs(e[this.at]) < this.maxDelta / 2 ? e.preventDefault() : (this.preventScroll.global && e.preventDefault(), (this.slider.sliderElement === e.target || this.slider.sliderElement.contains(e.target)) && ("deltaY" === this.at ? e.shiftKey || this.hasScrollableParentVertical(e.deltaY < 0, e.target) || this.onMouseWheel(e) : "deltaX" === this.at && (this.hasScrollableParentHorizontal(e.target) || this.onMouseWheel(e)))))
        }, t.prototype.onMouseWheel = function(e) {
            e[this.at] < 0 ? this.slider.isChangeCarousel("previous") && this.slider.parameters.controls.blockCarouselInteraction || (this.slider.previous(), e.preventDefault(), this.startCurveWatcher(e), this.local(), this.global()) : e[this.at] > 0 && (this.slider.isChangeCarousel("next") && this.slider.parameters.controls.blockCarouselInteraction || (this.slider.next(), e.preventDefault(), this.startCurveWatcher(e), this.local(), this.global()))
        }, t.prototype.startCurveWatcher = function(e) {
            !1 !== this.preventScroll.curve && a(this.preventScroll.curveTimeout), this.preventScroll.curveGlobal || (this.dynamicDelta = !1, this.lastDelta = e[this.at], this.preventScroll.curveGlobal = !0, this.preventScroll.curveGlobalTimeout = r(function() {
                this.preventScroll.curveGlobal = !1, this.maxDelta = 0
            }.bind(this), 500)), this.preventScroll.curve = !0, this.preventScroll.curveTimeout = r(this.releaseCurveLock.bind(this), 1500)
        }, t.prototype.onCurveEvent = function(e) {
            if (this.preventScroll.curveGlobal) {
                this.dynamicDelta || this.lastDelta === e[this.at] || (this.lastDelta = e[this.at], this.dynamicDelta = !0);
                var t = Math.abs(e[this.at]);
                this.preventScroll.curve && this.maxDelta / 2 > t && this.releaseCurveLock(), this.maxDelta = Math.max(this.maxDelta, t), this.preventScroll.curveGlobalTimeout && a(this.preventScroll.curveGlobalTimeout), this.preventScroll.curveGlobalTimeout = r(function() {
                    this.preventScroll.curveGlobal = !1, this.maxDelta = 0
                }.bind(this), 500)
            }
        }, t.prototype.releaseCurveLock = function() {
            this.preventScroll.curve = !1, a(this.preventScroll.curveTimeout)
        }, t.prototype.local = function() {
            !1 !== this.preventScroll.local && a(this.preventScroll.localTimeout), this.preventScroll.local = !0, this.preventScroll.localTimeout = r(function() {
                this.preventScroll.local = !1, this.dynamicDelta || this.releaseCurveLock()
            }.bind(this), 1e3)
        }, t.prototype.global = function() {
            !1 !== this.preventScroll.global && a(this.preventScroll.globalTimeout), this.preventScroll.global = !0, this.preventScroll.globalTimeout = r(function() {
                this.preventScroll.global = !1
            }.bind(this), 1e3)
        }, t
    })), u.d("SmartSliderControlTouch", (function() {
        "use strict";

        function t(t) {
            this.slider = t, this.interactiveDrag = !0, this.preventMultipleTap = !1, this._animation = t.mainAnimation, this.swipeElement = this.slider.sliderElement.querySelector(".n2_ss__touch_element"), t.controls.touch = this, t.stages.done("StarterSlide", this.onStarterSlide.bind(this)), O(t.sliderElement, "visibleSlidesChanged", this.onVisibleSlidesChanged.bind(this))
        }
        return t.prototype.onStarterSlide = function() {
            this.initTouch(), O(this.slider.sliderElement, "sliderChangeCurrentSlide", this.updatePanDirections.bind(this))
        }, t.prototype.onVisibleSlidesChanged = function() {
            var t;
            this.slider.visibleSlides.length > 1 ? g(this.swipeElement, {
                cursor: "grab",
                userSelect: "none"
            }) : (t = this.swipeElement, ["cursor", "userSelect"].forEach((function(i) {
                k(t, i)
            })))
        }, t.prototype.initTouch = function() {
            this._animation.isNoAnimation && (this.interactiveDrag = !1), this.eventBurrito = u.EventBurrito(this.swipeElement, {
                mouse: !0,
                axis: "horizontal" === this.axis ? "x" : "y",
                start: this._start.bind(this),
                move: this._move.bind(this),
                end: this._end.bind(this)
            }), this.updatePanDirections(), this.cancelKineticScroll = function() {
                this.kineticScrollCancelled = !0
            }.bind(this)
        }, t.prototype._start = function(t) {
            this.currentInteraction = {
                type: "pointerdown" === t.type ? "pointer" : "touchstart" === t.type ? "touch" : "mouse",
                state: f({}, this.state),
                action: "unknown",
                distance: [],
                distanceY: [],
                percent: 0,
                progress: 0,
                scrollTop: _(),
                animationStartDirection: "unknown",
                hadDirection: !1,
                startDistance: 0
            }, this.logDistance(0, 0)
        }, t.prototype._move = function(t, i, s, n) {
            if (!n || "unknown" !== this.currentInteraction.action) {
                this.currentInteraction.direction = this.measure(s);
                var h = this.get(s);
                if ((this.currentInteraction.hadDirection || Math.abs(h) > 10 || Math.abs(s.y) > 10) && (this.logDistance(h, s.y), this.currentInteraction.percent < 1 && this.setTouchProgress(h, s.y), "touch" === this.currentInteraction.type && t.cancelable && ("switch" !== this.currentInteraction.action && "hold" !== this.currentInteraction.action || (this.currentInteraction.hadDirection = !0))), "switch" === this.currentInteraction.action) return !0
            }
            return !1
        }, t.prototype._end = function(t, i, s, n) {
            if ("switch" === this.currentInteraction.action) {
                var h = n ? 0 : this.measureRealDirection();
                if (this.interactiveDrag) this._animation.timeline.progress() < 1 && this._animation.setTouchEnd(h, this.currentInteraction.progress, s.time), this._animation.setTouch(!1);
                else h && this.callAction(this.currentInteraction.animationStartDirection);
                I(this.swipeElement, "n2-grabbing")
            }
            this.onEnd(), delete this.currentInteraction, Math.abs(s.x) < 10 && Math.abs(s.y) < 10 ? this.onTap(t) : u._preventClick()
        }, t.prototype.onEnd = function() {
            if ("scroll" === this.currentInteraction.action && "pointer" === this.currentInteraction.type) {
                var t = this.currentInteraction.distanceY[0],
                    i = this.currentInteraction.distanceY[this.currentInteraction.distanceY.length - 1],
                    s = (t.d - i.d) / (i.t - t.t) * 10,
                    n = Date.now(),
                    o = function() {
                        requestAnimationFrame(function() {
                            var t, i;
                            if (!this.kineticScrollCancelled && s && (t = Date.now() - n, (i = s * Math.exp(-t / 325)) > 1 || i < -1)) return V(_() + i), void o();
                            this.onEndKineticScroll()
                        }.bind(this))
                    }.bind(this);
                this.kineticScrollCancelled = !1, o(), h.addEventListener("pointerdown", this.cancelKineticScroll)
            }
        }, t.prototype.onEndKineticScroll = function() {
            delete this.kineticScrollCancelled, h.removeEventListener("pointerdown", this.cancelKineticScroll), y(o, "scroll-behavior", "")
        }, t.prototype.setTouchProgress = function(t, i) {
            this.recognizeSwitchInteraction(), 0 === this.currentInteraction.startDistance && (this.currentInteraction.startDistance = t < 0 ? t + 1 : t - 1);
            var s, n = this.getPercent(t - this.currentInteraction.startDistance);
            if (this.currentInteraction.percent = n, "switch" === this.currentInteraction.action) {
                if (this.interactiveDrag) {
                    switch (this.currentInteraction.animationStartDirection) {
                        case "up":
                            s = -1 * n;
                            break;
                        case "down":
                            s = n;
                            break;
                        case "left":
                            s = -1 * n;
                            break;
                        case "right":
                            s = n
                    }
                    this.currentInteraction.progress = s, this._animation.setTouchProgress(s)
                }
            } else "unknown" !== this.currentInteraction.action && "scroll" !== this.currentInteraction.action || this.startScrollInteraction(i)
        }, t.prototype.startScrollInteraction = function(t) {
            "vertical" === this.axis && (this.slider.controlFullscreen && this.slider.controlFullscreen.ot || (this.currentInteraction.action = "scroll", "pointer" === this.currentInteraction.type && (y(o, "scroll-behavior", "auto"), V(Math.max(0, this.currentInteraction.scrollTop - t)))))
        }, t.prototype.recognizeSwitchInteraction = function() {
            if ("unknown" === this.currentInteraction.action && this.slider.visibleSlides.length > 1)
                if ("ended" === this._animation.state) {
                    var t = this.currentInteraction.direction;
                    if ("unknown" !== t && this.currentInteraction.state[t]) {
                        if (this.currentInteraction.animationStartDirection = t, this.interactiveDrag) {
                            this._animation.setTouch(this.axis);
                            this.callAction(t, !1)
                        }
                        this.currentInteraction.action = "switch", A(this.swipeElement, "n2-grabbing")
                    }
                } else "playing" === this._animation.state && (this.currentInteraction.action = "hold")
        }, t.prototype.logDistance = function(t, i) {
            this.currentInteraction.distance.length > 3 && (this.currentInteraction.distance.shift(), this.currentInteraction.distanceY.shift()), this.currentInteraction.distance.push({
                d: t,
                t: Date.now()
            }), this.currentInteraction.distanceY.push({
                d: i,
                t: Date.now()
            })
        }, t.prototype.measureRealDirection = function() {
            var t = this.currentInteraction.distance[0],
                i = this.currentInteraction.distance[this.currentInteraction.distance.length - 1];
            return i.d >= 0 && t.d > i.d || i.d < 0 && t.d < i.d ? 0 : 1
        }, t.prototype.onTap = function(e) {
            this.preventMultipleTap || (F(e.target, "n2click"), this.preventMultipleTap = !0, r(function() {
                this.preventMultipleTap = !1
            }.bind(this), 500))
        }, t.prototype.updatePanDirections = function() {}, t.prototype.setState = function(t, i) {
            "object" != typeof arguments[0] && ((t = {})[arguments[0]] = arguments[1], i = arguments[2]);
            var s = !1;
            for (var n in t) this.state[n] !== t[n] && (this.state[n] = t[n], s = !0);
            s && i && this.eventBurrito.supportsPointerEvents && this.syncTouchAction()
        }, t
    })), u.d("SmartSliderControlTouchHorizontal", "SmartSliderControlTouch", (function() {
        "use strict";

        function t() {
            this.state = {
                left: !1,
                right: !1
            }, this.axis = "horizontal", u.SmartSliderControlTouch.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.SmartSliderControlTouch.prototype), t.prototype.constructor = t, t.prototype.callAction = function(t, i) {
            switch (t) {
                case "left":
                    return this.slider[n2const.isRTL() ? "previous" : "next"].call(this.slider, i);
                case "right":
                    return this.slider[n2const.isRTL() ? "next" : "previous"].call(this.slider, i)
            }
            return !1
        }, t.prototype.measure = function(t) {
            return !this.currentInteraction.hadDirection && Math.abs(t.x) < 10 || 0 === t.x || Math.abs(t.x) < Math.abs(t.y) ? "unknown" : t.x < 0 ? "left" : "right"
        }, t.prototype.get = function(t) {
            return t.x
        }, t.prototype.getPercent = function(t) {
            return Math.max(-.99999, Math.min(.99999, t / this.slider.getHorizontalTouchDimension()))
        }, t.prototype.updatePanDirections = function() {
            var t = this.slider.currentSlide.index,
                i = t + 1 < this.slider.slides.length,
                s = t - 1 >= 0;
            this.slider.parameters.carousel && (i = !0, s = !0), n2const.isRTL() && "vertical" !== this.slider.getAnimationAxis() ? this.setState({
                right: i,
                left: s
            }, !0) : this.setState({
                right: s,
                left: i
            }, !0)
        }, t.prototype.syncTouchAction = function() {
            var t = this.state.left || this.state.right ? "pan-y" : "";
            y(this.swipeElement, "touch-action", t), i.PointerEventsPolyfill && d(this.swipeElement, "touch-action", t)
        }, t
    })), u.d("SmartSliderControlTouchVertical", "SmartSliderControlTouch", (function() {
        "use strict";

        function t() {
            this.state = {
                up: !1,
                down: !1
            }, this.action = {
                up: "next",
                down: "previous"
            }, this.axis = "vertical", u.SmartSliderControlTouch.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.SmartSliderControlTouch.prototype), t.prototype.constructor = t, t.prototype.callAction = function(t, i) {
            switch (t) {
                case "up":
                    return this.slider.next.call(this.slider, i);
                case "down":
                    return this.slider.previous.call(this.slider, i)
            }
            return !1
        }, t.prototype.measure = function(t) {
            return !this.currentInteraction.hadDirection && Math.abs(t.y) < 1 || 0 == t.y || Math.abs(t.y) < Math.abs(t.x) ? "unknown" : t.y < 0 ? "up" : "down"
        }, t.prototype.get = function(t) {
            return t.y
        }, t.prototype.getPercent = function(t) {
            return Math.max(-.99999, Math.min(.99999, t / this.slider.getVerticalTouchDimension()))
        }, t.prototype.updatePanDirections = function() {
            this.setState({
                down: !this.slider.isChangeCarousel("previous") || !this.slider.parameters.controls.blockCarouselInteraction,
                up: !this.slider.isChangeCarousel("next") || !this.slider.parameters.controls.blockCarouselInteraction
            }, !0)
        }, t.prototype.syncTouchAction = function() {
            var t = this.state.up || this.state.down ? "pan-x" : "";
            y(this.swipeElement, "touch-action", t), i.PointerEventsPolyfill && d(this.swipeElement, "touch-action", t)
        }, t.prototype._start = function(t) {
            this.slider.blockCarousel = !0, u.SmartSliderControlTouch.prototype._start.apply(this, arguments)
        }, t.prototype.onEnd = function(t) {
            u.SmartSliderControlTouch.prototype.onEnd.apply(this, arguments), this.slider.blockCarousel = !1
        }, t
    })), u.d("SmartSliderControlAutoplayWait", (function() {
        "use strict";

        function t(t) {
            this.autoplay = t, this.waits = {}
        }
        return t.Strong = ["lightbox", "load"], t.prototype.add = function(t) {
            this.waits[t] = 1, this._refresh()
        }, t.prototype.resolve = function(t) {
            delete this.waits[t], this._refresh()
        }, t.prototype.resolveWeak = function() {
            var i = {};
            for (var s in this.waits) 1 === this.waits[s] && -1 !== t.Strong.indexOf(s) && (i[s] = 1);
            this.waits = i, this._refresh()
        }, t.prototype.resolveAll = function() {
            this.waits = {}, this._refresh()
        }, t.prototype._refresh = function() {
            var t = !1;
            for (var i in this.waits)
                if (this.waits[i]) {
                    t = !0;
                    break
                }
            this.autoplay.setState("wait", t)
        }, t
    })), u.d("SmartSliderSlideBackgroundColor", (function() {
        function t(t, i) {
            this.el = i
        }
        return t.prototype.getLoadPromise = function() {
            return !0
        }, t
    })), u.d("SmartSliderSlideBackgroundImage", (function() {
        function t(t, i, s, n) {
            this.slide = t, this.manager = i, this.background = s, this._promise = new Promise(function(t) {
                this._resolve = t
            }.bind(this)), this.imageElements = Array.from(n)
        }
        return t.prototype.getLoadPromise = function() {
            return this._promise
        }, t.prototype.preLoad = function() {
            this.blur = m(this.imageElements[0], "blur");
            const t = m(this.imageElements[0].parentElement, "mode"),
                i = [];
            this.blur && i.push({
                item: this.imageElements[this.imageElements.length - 1],
                blur: this.blur
            }), "blurfit" === t && (this.blurFitMode = m(this.imageElements[0], "blurfitmode"), this.globalBlurFit = m(this.imageElements[0], "globalblur"), this.editorBlur = m(this.imageElements[0], "bgblur"), i.push({
                item: this.imageElements[0],
                blur: this.blurFitMode ? this.globalBlurFit : this.editorBlur
            })), i.length && i.forEach((function(t) {
                g(t.item, {
                    margin: -2 * t.blur + "px",
                    padding: 2 * t.blur + "px"
                }), y(t.item.children[0], "filter", "blur(" + t.blur + "px)")
            }));
            var s = this.imageElements[0].querySelector("img");
            s.loading = "eager", s.complete ? this.onImageLoaded(s) : (s.addEventListener("load", this.onImageLoaded.bind(this, s)), s.addEventListener("error", this.onImageLoaded.bind(this, s)))
        }, t.prototype.onImageLoaded = function(t) {
            "function" == typeof t.decode ? (t.decode().then(this._resolve.bind(this)).catch(function(t) {
                console.error(t), this._resolve()
            }.bind(this)), r(this._resolve.bind(this), 50)) : this._resolve()
        }, t.prototype.fadeOut = function() {
            u.W.to(u.MW.C(this.imageElements), .3, {
                opacity: 0
            })
        }, t.prototype.onSlideDeviceChanged = function() {}, t
    })), u.d("SmartSliderSlideBackground", (function() {
        function t(t, i, s) {
            this.types = this.types || {
                color: "SmartSliderSlideBackgroundColor",
                image: "SmartSliderSlideBackgroundImage",
                video: "SmartSliderSlideBackgroundVideo"
            }, this.width = 0, this.height = 0, this.slide = t, this.element = i, this.manager = s, this.readyPromise = new Promise(function(t) {
                this.readyPromiseResolve = t
            }.bind(this)), this.promise = new Promise(function(t) {
                this.resolve = function() {
                    t(), delete this.resolve
                }.bind(this)
            }.bind(this))
        }
        return t.prototype.preloadOnce = function() {
            if (!this.elements) {
                this.elements = {
                    color: !1,
                    image: !1,
                    video: !1
                }, this.currentSrc = "", this.mode = m(this.element, "mode"), this.opacity = m(this.element, "opacity");
                var t = this.element.querySelectorAll(".n2-ss-slide-background-image");
                t.length && (this.elements.image = new u[this.types.image](this.slide, this.manager, this, t), this.elements.image.preLoad());
                var i = this.element.querySelector(".n2-ss-slide-background-color");
                i && (this.elements.color = new u[this.types.color](this, i)), this.readyPromiseResolve(), delete this.readyPromiseResolve, delete this.readyPromise;
                var s = [];
                for (var n in this.elements) this.elements[n] && s.push(this.elements[n].getLoadPromise());
                Promise.all(s).then(this.resolve)
            }
        }, t.prototype.onReady = function(t) {
            this.readyPromise ? this.readyPromise.then(t) : t()
        }, t.prototype.preLoad = function() {
            return this.preloadOnce(), this.promise
        }, t.prototype.fadeOut = function() {
            this.hasImage() && this.elements.image.fadeOut()
        }, t.prototype.hasColor = function() {
            return this.elements && this.elements.color
        }, t.prototype.hasImage = function() {
            return this.elements && this.elements.image
        }, t.prototype.hasVideo = function() {
            return this.elements && this.elements.video
        }, t.prototype.hasBackground = function() {
            return this.elements && (this.elements.color || this.elements.image || this.elements.video)
        }, t.prototype.onSlideDeviceChanged = function(t) {
            this.hasImage() && this.elements.image.onSlideDeviceChanged(t)
        }, t
    })), u.d("FrontendComponentCommon", ["FrontendComponent"], (function() {
        function t(t, i, s, n) {
            this.wraps = {}, u.FrontendComponent.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.FrontendComponent.prototype), t.prototype.constructor = t, t.prototype.init = function(t) {
            this.stateCBs = [], this.state = {
                InComplete: !1
            };
            var i = this.layer.querySelector(":scope > .n2-ss-layer-mask");
            switch (i && (this.wraps.mask = i), m(this.layer, "pm")) {
                case "absolute":
                    this.placement = new u.FrontendPlacementAbsolute(this);
                    break;
                case "normal":
                    this.placement = new u.FrontendPlacementNormal(this);
                    break;
                case "content":
                    this.placement = new u.FrontendPlacementContent(this);
                    break;
                default:
                    this.placement = new u.FrontendPlacementDefault(this)
            }
            u.FrontendComponent.prototype.init.call(this, t)
        }, t.prototype.setState = function(t, i) {
            this.state[t] = i;
            for (var s = 0; s < this.stateCBs.length; s++) this.stateCBs[s].call(this, this.state)
        }, t.prototype.addStateCallback = function(t) {
            this.stateCBs.push(t), t.call(this, this.state)
        }, t.prototype.start = function() {
            this.placement.start(), u.FrontendComponent.prototype.start.call(this);
            var t = parseFloat(this.get("rotation"));
            t && (u.MW.k(this.layer).layerRotation = t)
        }, t.prototype.onDeviceChange = function(t) {
            u.FrontendComponent.prototype.onDeviceChange.call(this, t);
            for (var i = 0; i < this.children.length; i++) this.children[i].onDeviceChange(t);
            this.placement.onDeviceChange(t), this.onAfterDeviceChange(t)
        }, t.prototype.onAfterDeviceChange = function(t) {}, t.prototype.onResize = function(t, i) {
            u.FrontendComponent.prototype.onResize.apply(this, arguments), this.placement.onResize(t, i)
        }, t.prototype.hasLayerAnimation = function() {
            return this.animationManager !== n
        }, t.prototype.addWrap = function(t, i) {
            return this.wraps[t] === n && (this.wraps[t] = i), i
        }, t.prototype.getContents = function() {
            return []
        }, t
    })), u.d("FrontendComponent", (function() {
        function t(t, i, s, n) {
            this.device = "", this.children = [], this.slide = t, this.parent = i, this.layer = s, s.layer = this, this.isVisible = !0, this.init(n)
        }
        return t.prototype.init = function(t) {
            if (t)
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    switch (m(s, "sstype")) {
                        case "content":
                            this.children.push(new u.FrontendComponentContent(this.slide, this, s));
                            break;
                        case "row":
                            this.children.push(new u.FrontendComponentRow(this.slide, this, s));
                            break;
                        case "col":
                            this.children.push(new u.FrontendComponentCol(this.slide, this, s));
                            break;
                        default:
                            this.children.push(new u.FrontendComponentLayer(this.slide, this, s))
                    }
                }
        }, t.prototype.start = function() {
            for (var t = 0; t < this.children.length; t++) this.children[t].start()
        }, t.prototype.onDeviceChange = function(t) {
            this.device = t
        }, t.prototype.onResize = function(t, i) {
            for (var s = 0; s < this.children.length; s++) this.children[s].onResize(t, i)
        }, t.prototype.getDevice = function(t, i) {
            var s = m(this.layer, this.device + t);
            return s !== n ? s : "desktopportrait" !== this.device ? m(this.layer, "desktopportrait" + t) : i !== n ? i : 0
        }, t.prototype.get = function(t) {
            return m(this.layer, t)
        }, t
    })), u.d("FrontendSlideControls", (function() {
        function t(t, i) {
            this.slider = t, this.element = i, this.element.ssSlide = this, this.status = new u.SlideStatus
        }
        return t.prototype.isCurrentlyEdited = function() {
            return this._isCurrentlyEdited
        }, t.prototype.is = function(t) {
            return this === t
        }, t.prototype.G = function(t, i) {
            D(this.element, t, i)
        }, t.prototype.isVisibleWhen = function(t) {
            return !0
        }, t.prototype.isActiveWhen = function(t) {
            return !0
        }, t.prototype.isStatic = function() {
            return !1
        }, t
    })), u.d("FrontendPlacement", (function() {
        function t(t) {
            this.layer = t, this.linked = []
        }
        return t.prototype.start = function() {}, t.prototype.onDeviceChange = function(t) {}, t.prototype.ut = function() {
            if (this.linked.length) {
                var t = this.layer.layer;
                this._sizePosition = {
                    left: t.offsetLeft,
                    top: t.offsetTop,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }
        }, t.prototype.onResize = function(t, i) {
            if (this.linked.length) {
                this.ut();
                for (var s = 0; s < this.linked.length; s++) this.linked[s].onResizeLinked(t, i)
            }
        }, t.prototype.addLinked = function(t) {
            this.linked.push(t)
        }, t.prototype.isVisible = function() {
            return 1 != +m(this.layer.layer, "hide" + this.layer.device)
        }, t.prototype.getPositionSize = function() {
            return f({}, this._sizePosition)
        }, t
    })), u.d("FrontendSliderSlide", ["FrontendSliderSlideAbstract"], (function() {
        function t(t, i, s) {
            this.slides = [this], this.playCount = 0, u.FrontendSliderSlideAbstract.prototype.constructor.apply(this, arguments), this.id = m(i, "id"), this._slideFocus = i.querySelector(".n2-ss-slide--focus"), this.focusableElements = Array.from(i.querySelectorAll('a[href]:not([href=""]),link,button,input:not([type="hidden"]),select,textarea,audio[controls],video[controls],[tabindex]:not([tabindex="-1"])'));
            var n = l(i, "tabindex");
            ("0" === n || +n > 0) && this.focusableElements.push(i), this.disableFocus(), this.background = !1, t.parameters.admin ? this.minimumSlideDuration = 0 : (this.minimumSlideDuration = +m(i, "slideDuration"), this.minimumSlideDuration || (this.minimumSlideDuration = 0)), this._isCurrentlyEdited = this.slider.parameters.admin && i.classList.contains("n2-ss-currently-edited-slide"), this.isCurrentlyEdited() ? (this.layer = i.querySelector('.n2-ss-layer[data-sstype="slide"]'), O(t.sliderElement, "SliderDeviceOrientation", function() {
                this.slider.visibleRealSlides.push(this), this.isVisible = !0, this.slider.responsive.visibleRealSlidesChanged = !0, this.G("Visible")
            }.bind(this))) : (this.component = new u.FrontendComponentSectionSlide(this, t, i.querySelector('.n2-ss-layer[data-sstype="slide"]')), this.layer = this.component.layer)
        }
        t.prototype = Object.create(u.FrontendSliderSlideAbstract.prototype), t.prototype.constructor = t, t.prototype._setInside = function(t) {
            this.isInside !== t && (this.isInside = t)
        };
        var i = !1;
        try {
            c("div").focus(Object.defineProperty({}, "preventScroll", {
                get: function() {
                    i = !0
                }
            }))
        } catch (t) {}
        return t.prototype.focus = function() {
            i && this._slideFocus.focus({
                preventScroll: !0
            })
        }, t.prototype.allowFocus = function() {
            for (var t = 0; t < this.focusableElements.length; t++) d(this.focusableElements[t], "tabindex", 0);
            p(this.element, "aria-hidden")
        }, t.prototype.disableFocus = function() {
            for (var t = 0; t < this.focusableElements.length; t++) d(this.focusableElements[t], "tabindex", -1);
            d(this.element, "aria-hidden", "true")
        }, t.prototype.init = function() {
            var t = this.slider.findSlideBackground(this);
            t && (this.slider.isAdmin ? this.background = new u.SmartSliderSlideBackgroundAdmin(this, t, this.slider.backgrounds) : this.background = new u.SmartSliderSlideBackground(this, t, this.slider.backgrounds)), this.element.ssSlideBackground = this.background
        }, t.prototype.onDeviceChange = function(t) {
            m(this.element, "hide" + H(t)) ? !1 !== this.isVisible && (this.isVisible = !1, this.slider.responsive.visibleRealSlidesChanged = !0, this.G("Hidden")) : (this.slider.visibleRealSlides.push(this), !0 !== this.isVisible && (this.isVisible = !0, this.slider.responsive.visibleRealSlidesChanged = !0, this.G("Visible")))
        }, t.prototype.hasLayers = function() {
            return this.component.children.length > 0
        }, t.prototype.hasBackgroundVideo = function() {
            return this.background.hasVideo()
        }, t.prototype.hasLink = function() {
            return !!m(this.element, "haslink")
        }, t
    })), u.d("FrontendSliderSlideAbstract", ["FrontendSlideControls"], (function() {
        function t(t, i, s) {
            u.FrontendSlideControls.prototype.constructor.call(this, t, i), this.slides = this.slides || [], this.group = this, this.originalIndex = s, this.index = s, this.localIndex = s, this.groupIndex = 0, this.isVisible = !0, this.isInside = -1
        }
        for (var i in u.FrontendSlideControls.prototype) t.prototype[i] = u.FrontendSlideControls.prototype[i];
        return t.prototype.setIndex = function(t) {
            for (var i = 0; i < this.slides.length; i++) this.slides[i]._setIndex(t)
        }, t.prototype._setIndex = function(t) {
            this.localIndex = this.index = t
        }, t.prototype.preLoad = function() {
            for (var t = [], i = 0; i < this.slides.length; i++) t.push(this.slides[i]._preLoad());
            return Promise.all(t)
        }, t.prototype._preLoad = function() {
            return this.element.querySelectorAll("[data-lazysrc]").forEach((function(t) {
                d(t, "src", m(t, "lazysrc"))
            })), !this.background || this.background.preLoad()
        }, t.prototype.setPrevious = function(t) {
            this.previousSlide = t
        }, t.prototype.getPrevious = function() {
            var t = this;
            do {
                t = t.previousSlide
            } while (t && t !== this && !t.isVisible);
            return t
        }, t.prototype.setNext = function(t) {
            this.nextSlide = t, t && t.setPrevious(this)
        }, t.prototype.getNext = function() {
            var t = this;
            do {
                t = t.nextSlide
            } while (t && t !== this && !t.isVisible);
            return t
        }, t.prototype.getTitle = function() {
            return m(this.slides[0].element, "title") || ""
        }, t.prototype.getDescription = function() {
            return m(this.slides[0].element, "description") || ""
        }, t.prototype.getThumbnail = function() {
            var t = this.slides[0].element.querySelector(".n2-ss-slide-thumbnail");
            return t ? l(t, "src") : ""
        }, t.prototype.hasLink = function() {
            return !1
        }, t.prototype.setActive = function() {
            this.allowFocus(), A(this.element, "n2-ss-slide-active")
        }, t.prototype.unsetActive = function() {
            this.disableFocus(), I(this.element, "n2-ss-slide-active")
        }, t.prototype.setInside = function(t) {
            for (var i = 0; i < this.slides.length; i++) this.slides[i]._setInside(t)
        }, t.prototype._setInside = function(t) {}, t.prototype.focus = function() {}, t.prototype.allowFocus = function() {}, t.prototype.disableFocus = function() {}, t.prototype.isVisibleWhen = function(t) {
            return -1 !== this.slider.getVisibleSlides(t).indexOf(this)
        }, t.prototype.isActiveWhen = function(t) {
            return -1 !== this.slider.getActiveSlides(t).indexOf(this)
        }, t
    })), u.d("SlideStatus", (function() {
        var t = {
            NOT_INITIALIZED: -1,
            INITIALIZED: 0,
            READY_TO_START: 1,
            PLAYING: 2,
            ENDED: 3,
            SUSPENDED: 4
        };

        function i() {
            this.status = t.NOT_INITIALIZED
        }
        return i.prototype.set = function(i) {
            this.status = t[i]
        }, i.prototype.is = function(i) {
            return this.status === t[i]
        }, i
    })), u.d("FrontendSliderStaticSlide", ["FrontendSlideControls"], (function() {
        function t(t, i) {
            u.FrontendSlideControls.prototype.constructor.call(this, t, i), this.slides = [this], this.isVisible = !0, this._isCurrentlyEdited = this.slider.parameters.admin && i.classList.contains("n2-ss-currently-edited-slide"), this.isCurrentlyEdited() ? this.layer = i.querySelector('.n2-ss-layer[data-sstype="slide"]') : (this.component = new u.FrontendComponentSectionSlide(this, t, i.querySelector('.n2-ss-layer[data-sstype="slide"]')), this.layer = this.component.layer)
        }
        for (var i in u.FrontendSlideControls.prototype) t.prototype[i] = u.FrontendSlideControls.prototype[i];
        return t.prototype.isStatic = function() {
            return !0
        }, t.prototype.onDeviceChange = function(t) {
            m(this.element, "hide" + H(t)) ? !1 !== this.isVisible && (this.isVisible = !1, this.G("Hidden")) : !0 !== this.isVisible && (this.isVisible = !0, this.status.is("INITIALIZED") && this.playIn(), this.G("Visible"))
        }, t
    })), u.d("FrontendPlacementAbsolute", ["FrontendPlacement"], (function() {
        var t = new class {
            constructor() {
                this.ct = new Set, this.ft = new Set, this.h = this.u.bind(this)
            }
            add(t) {
                this.ct.add(t)
            }
            invalidate(t) {
                this.ft.add(t), 1 === this.ft.size && u.t.add(this.h)
            }
            u() {
                for (let t of this.ft) t.ut();
                for (let t of this.ft) t.onResizeSize();
                for (let t of this.ft) t.onResizePosition();
                this.ft.clear(), u.t.remove(this.h)
            }
        };

        function i(t) {
            this.parentLayer = !1, this.parentLayerPlacement = !1, u.FrontendPlacement.prototype.constructor.apply(this, arguments)
        }
        return i.prototype = Object.create(u.FrontendPlacement.prototype), i.prototype.constructor = i, i.prototype.start = function() {
            var i = this.layer.get("parentid");
            if (i) {
                var s = h.getElementById(i);
                s && (this.parentLayer = s.layer, this.parentLayerPlacement = this.parentLayer.placement, this.parentLayerPlacement.addLinked(this), this.onResize = function() {})
            }
            t.add(this)
        }, i.prototype.isSingleAxis = function() {
            if (this.layer.parent instanceof u.FrontendComponentSectionSlide) {
                if (!this.parentLayer) return !1;
                if (this.parentLayer.placement instanceof u.FrontendPlacementAbsolute) return !1
            }
            return !0
        }, i.prototype.ut = function() {
            u.FrontendPlacement.prototype.ut.apply(this, arguments);
            var t = this.layer.layer.parentNode;
            this.lt = {
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }, i.prototype.onResizeSize = function() {
            var t = u.MW.k(this.layer.layer),
                i = this.dt.slideW,
                s = this.dt.slideH;
            this.isSingleAxis() && (s = i);
            var n = i,
                h = s;
            parseInt(this.layer.get("responsivesize")) || (n = h = 1);
            var o = this.getWidth(n),
                r = "number" == typeof o,
                a = this.getHeight(h),
                c = "number" == typeof a;
            this._sizePosition && (r && (this._sizePosition.width = o, c || (y(this.layer.layer, "width", o + "px"), this._sizePosition.height = this.layer.layer.offsetHeight)), c && (this._sizePosition.height = a)), t.width = o + (r ? "px" : ""), t.height = a + (c ? "px" : "")
        }, i.prototype.onResizePosition = function() {
            var t = this.dt,
                i = this.layer.layer,
                s = u.MW.k(i),
                n = t.slideW,
                h = t.slideH;
            this.isSingleAxis() && (h = n), parseInt(this.layer.get("responsiveposition")) || (n = h = 1);
            var o = this.layer.getDevice("left") * n,
                r = this.layer.getDevice("top") * h,
                a = this.layer.getDevice("align"),
                c = this.layer.getDevice("valign");
            if (this.parentLayerPlacement && this.parentLayerPlacement.isVisible()) {
                var f = this.parentLayerPlacement.getPositionSize(),
                    l = {
                        left: 0,
                        top: 0
                    };
                if (this.parentLayerPlacement instanceof u.FrontendPlacementAbsolute) {
                    var d = u.MW.k(this.parentLayerPlacement.layer.layer);
                    f.left += d.xAbs + d.xPAbs / 100 * f.width, f.top += d.yAbs + d.yPAbs / 100 * f.height
                }
                switch (this.layer.getDevice("parentalign")) {
                    case "right":
                        l.left = f.left + f.width;
                        break;
                    case "center":
                        l.left = f.left + f.width / 2;
                        break;
                    default:
                        l.left = f.left
                }
                switch (this.layer.getDevice("parentvalign")) {
                    case "bottom":
                        l.top = f.top + f.height;
                        break;
                    case "middle":
                        l.top = f.top + f.height / 2;
                        break;
                    default:
                        l.top = f.top
                }
                switch (a) {
                    case "right":
                        s.xAbs = Math.round(l.left + o), s.xPAbs = -100;
                        break;
                    case "center":
                        s.xAbs = Math.round(l.left + o), s.xPAbs = -50;
                        break;
                    default:
                        s.xAbs = Math.round(l.left + o), s.xPAbs = 0
                }
                switch (c) {
                    case "bottom":
                        s.yAbs = Math.round(l.top + r), s.yPAbs = -100;
                        break;
                    case "middle":
                        s.yAbs = Math.round(l.top + r), s.yPAbs = -50;
                        break;
                    default:
                        s.yAbs = Math.round(l.top + r), s.yPAbs = 0
                }
            } else {
                var v, p;
                switch (a) {
                    case "right":
                        v = !this.layer.slide.isStatic && this.layer.parent instanceof u.FrontendComponentSectionSlide ? this.vt.slideWidth : this.lt.width, s.xAbs = Math.round(v + o), s.xPAbs = -100;
                        break;
                    case "center":
                        v = !this.layer.slide.isStatic && this.layer.parent instanceof u.FrontendComponentSectionSlide ? this.vt.slideWidth : this.lt.width, s.xAbs = Math.round(v / 2 + o), s.xPAbs = -50;
                        break;
                    default:
                        s.xAbs = Math.round(o), s.xPAbs = 0
                }
                switch (c) {
                    case "bottom":
                        p = !this.layer.slide.isStatic && this.layer.parent instanceof u.FrontendComponentSectionSlide ? this.vt.slideHeight : this.lt.height, s.yAbs = Math.round(p + r), s.yPAbs = -100;
                        break;
                    case "middle":
                        p = !this.layer.slide.isStatic && this.layer.parent instanceof u.FrontendComponentSectionSlide ? this.vt.slideHeight : this.lt.height, s.yAbs = Math.round(p / 2 + r), s.yPAbs = -50;
                        break;
                    default:
                        s.yAbs = Math.round(r), s.yPAbs = 0
                }
            }
        }, i.prototype.onResize = function(i, s) {
            this.isVisible() && (this.dt = i, this.vt = s, t.invalidate(this), u.FrontendPlacement.prototype.onResize.apply(this, arguments))
        }, i.prototype.onResizeLinked = function(t, s) {
            i.prototype.onResize.call(this, t, s)
        }, i.prototype.getWidth = function(t) {
            var i = this.layer.getDevice("width");
            return this.isDimensionPropertyAccepted(i) ? i : i * t
        }, i.prototype.getHeight = function(t) {
            var i = this.layer.getDevice("height");
            return this.isDimensionPropertyAccepted(i) ? i : i * t
        }, i.prototype.isDimensionPropertyAccepted = function(t) {
            return (t + "").match(/[0-9]+%/) || "auto" === t
        }, i
    })), u.d("FrontendPlacementContent", ["FrontendPlacement"], (function() {
        function t(t) {
            u.FrontendPlacement.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.FrontendPlacement.prototype), t.prototype.constructor = t, t
    })), u.d("FrontendPlacementDefault", ["FrontendPlacement"], (function() {
        function t(t) {
            u.FrontendPlacement.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.FrontendPlacement.prototype), t.prototype.constructor = t, t
    })), u.d("FrontendPlacementNormal", ["FrontendPlacement"], (function() {
        function t(t) {
            u.FrontendPlacement.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.FrontendPlacement.prototype), t.prototype.constructor = t, t
    })), u.d("FrontendComponentCol", ["FrontendComponentCommon"], (function() {
        function t(t, i, s) {
            this.content = s.querySelector(".n2-ss-layer-col"), u.FrontendComponentCommon.prototype.constructor.call(this, t, i, s, this.content.querySelectorAll(":scope > .n2-ss-layer"))
        }
        return t.prototype = Object.create(u.FrontendComponentCommon.prototype), t.prototype.constructor = t, t.prototype.getContents = function() {
            return [this.content]
        }, t
    })), u.d("FrontendComponentContent", ["FrontendComponentCommon"], (function() {
        function t(t, i, s) {
            this.content = s.querySelector(".n2-ss-section-main-content"), u.FrontendComponentCommon.prototype.constructor.call(this, t, i, s, this.content.querySelectorAll(":scope > .n2-ss-layer"))
        }
        return t.prototype = Object.create(u.FrontendComponentCommon.prototype), t.prototype.constructor = t, t.prototype.getContents = function() {
            return [this.content]
        }, t
    })), u.d("FrontendComponentLayer", ["FrontendComponentCommon"], (function() {
        function t(t, i, s) {
            u.FrontendComponentCommon.prototype.constructor.call(this, t, i, s);
            var n = s;
            this.wraps.mask && (n = this.wraps.mask), this.item = n.querySelectorAll(":scope > *")
        }
        return t.prototype = Object.create(u.FrontendComponentCommon.prototype), t.prototype.constructor = t, t.prototype.getContents = function() {
            return this.item
        }, t
    })), u.d("FrontendComponentRow", ["FrontendComponentCommon"], (function() {
        function t(t, i, s) {
            this.row = s.querySelector(".n2-ss-layer-row"), this.rowInner = s.querySelector(".n2-ss-layer-row-inner"), u.FrontendComponentCommon.prototype.constructor.call(this, t, i, s, this.rowInner.querySelectorAll(":scope > .n2-ss-layer"))
        }
        return t.prototype = Object.create(u.FrontendComponentCommon.prototype), t.prototype.constructor = t, t.prototype.getContents = function() {
            return [this.row]
        }, t
    })), u.d("FrontendComponentSectionSlide", ["FrontendComponent"], (function() {
        function t(t, i, s) {
            this.realSlide = t, this.slider = i, this.element = t.element, this.layer = s, this.isStatic = t.isStatic(), u.FrontendComponent.prototype.constructor.call(this, this, this, s, s.querySelectorAll(":scope > .n2-ss-layer")), O(i.sliderElement, "SliderDeviceOrientation", function(e) {
                this.onDeviceChange(e.detail.device.toLowerCase())
            }.bind(this)), O(i.sliderElement, "SliderResize", function(e) {
                this.onResize(e.detail.ratios, e.detail.responsive.resizeContext)
            }.bind(this)), this.start()
        }
        return t.prototype = Object.create(u.FrontendComponent.prototype), t.prototype.constructor = t, t.prototype.onDeviceChange = function(t) {
            u.FrontendComponent.prototype.onDeviceChange.call(this, t);
            for (var i = 0; i < this.children.length; i++) this.children[i].onDeviceChange(t);
            this.realSlide.onDeviceChange(t)
        }, t
    })), u.d("SmartSliderResponsive", (function() {
        let t, c = !1;

        function l(t, s) {
            for (var n in this.state = {
                    StarterSlide: !1
                }, this.isVisible = !0, this.isResetActiveSlideEarly = this.isResetActiveSlideEarly || !1, this.focusOffsetTop = 0, this.focusOffsetBottom = 0, this.minimumSlideHeight = 0, this.ot = !1, this.visibleRealSlidesChanged = !0, this.bt = -1, this.St = -1, this.wt = -1, this.yt = -1, this.filters = {
                    SliderWidth: [],
                    SliderHeight: [],
                    SlideHeight: [],
                    SliderVerticalCSS: []
                }, this.parameters = f({
                    mediaQueries: {},
                    hideOn: {
                        desktopLandscape: 0,
                        desktopPortrait: 0,
                        tabletLandscape: 0,
                        tabletPortrait: 0,
                        mobileLandscape: 0,
                        mobilePortrait: 0
                    },
                    onResizeEnabled: !0,
                    type: "auto",
                    focusUser: 1,
                    focusEdge: "auto",
                    enabledDevices: {
                        desktopLandscape: 1,
                        desktopPortrait: 0,
                        mobileLandscape: 0,
                        mobilePortrait: 0,
                        tabletLandscape: 0,
                        tabletPortrait: 0
                    },
                    breakpoints: [],
                    sizes: {
                        desktopPortrait: {
                            width: 1200,
                            height: 600,
                            max: 1e4,
                            min: 40
                        }
                    },
                    ratioToDevice: {
                        Portrait: {
                            tablet: 0,
                            mobile: 0
                        },
                        Landscape: {
                            tablet: 0,
                            mobile: 0
                        }
                    },
                    overflowHiddenPage: 0,
                    focus: {
                        offsetTop: "",
                        offsetBottom: ""
                    }
                }, s), this.mediaQueries = {}, this.parameters.mediaQueries) this.parameters.mediaQueries[n] && (this.mediaQueries[n] = i.matchMedia(this.parameters.mediaQueries[n].join(",")));
            this.parameters.hideOn = i.ssOverrideHideOn || this.parameters.hideOn, this.doThrottledResize = NextendThrottle(this.doResize.bind(this), 50), this.slider = t, this.sliderElement = t.sliderElement, this.gt = "1" === m(this.sliderElement, "ssLegacyFontScale"), this.addFilter("SliderWidth", this.filterSliderWidthHorizontalSpacing.bind(this))
        }
        return h.addEventListener("scroll", (function() {
            t && a(t), c = !0, t = r((function() {
                c = !1
            }), 300)
        }), {
            capture: !0,
            passive: !0
        }), l.DeviceMode = {
            unknown: 0,
            desktoplandscape: 1,
            desktopportrait: 2,
            tabletlandscape: 3,
            tabletportrait: 4,
            mobilelandscape: 5,
            mobileportrait: 6
        }, l._DeviceMode = {
            0: "unknown",
            1: "desktopLandscape",
            2: "desktopPortrait",
            3: "tabletLandscape",
            4: "tabletPortrait",
            5: "mobileLandscape",
            6: "mobilePortrait"
        }, l._DeviceGroup = {
            desktopLandscape: "desktop",
            desktopPortrait: "desktop",
            tabletLandscape: "tablet",
            tabletPortrait: "tablet",
            mobileLandscape: "mobile",
            mobilePortrait: "mobile"
        }, l.prototype.init = function() {
            this.base = this.parameters.base
        }, l.prototype.setDeviceID = function(t) {
            this.deviceID = t, this.device = l._DeviceMode[t]
        }, l.prototype.start = function() {
            if (this.slider.stages.done("ResizeFirst", function() {
                    n2const.fonts.then(function() {
                        this.slider.stages.resolve("Fonts")
                    }.bind(this))
                }.bind(this)), this.normalizeTimeout = null, this.setDeviceID(l.DeviceMode.unknown), this.ratios = {
                    slideW: 1,
                    slideH: 1
                }, this.horizontalSpacingControls = {
                    right: [],
                    left: []
                }, this.horizontalSpacing = {
                    right: 0,
                    left: 0
                }, this.staticSizes = {
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0
                }, this.alignElement = this.slider.sliderElement.closest(".n2-ss-align"), this.K = this.slider.K, this.containerElementPadding = this.sliderElement.parentNode, this.containerElement = this.containerElementPadding.parentNode, !this.slider.isAdmin && this.parameters.overflowHiddenPage && C([o, s], "overflow", "hidden"), u._smallestZoom = 320, this.initFocusOffsetObserver(), this.slider.stages.resolve("ResponsiveStart"), this.init(), this.parameters.onResizeEnabled) {
                O(i, "resize", this.onResize.bind(this)), this.lastROWidth = 0;
                var t = this.containerElement.parentNode,
                    n = new ResizeObserver(function(t) {
                        this.processResizeObserverRect(t[0].contentRect)
                    }.bind(this));
                requestAnimationFrame(function() {
                    this.processResizeObserverRect(t.getBoundingClientRect()), n.observe(t)
                }.bind(this))
            } else this.onResize()
        }, l.prototype.processResizeObserverRect = function(t) {
            this.isVisible = !!t.width, this.lastROWidth !== t.width && (this.lastROWidth = t.width, this.internalResize())
        }, l.prototype.internalResize = function() {
            this.onResize()
        }, l.prototype.getDeviceMode = function() {
            return l._DeviceMode[this.deviceID]
        }, l.prototype.getDeviceGroup = function() {
            return l._DeviceGroup[this.getDeviceMode()]
        }, l.prototype.onResize = function(e) {
            this.bt = i.innerWidth, this.St = i.innerHeight, this.slider.mainAnimation && "playing" === this.slider.mainAnimation.getState() ? this.kt || (this.kt = !0, T(this.sliderElement, "mainAnimationComplete", this._onResize.bind(this, e))) : this._onResize(e)
        }, l.prototype._onResize = function(e) {
            this.doResize(e), delete this.kt
        }, l.prototype.doNormalizedResize = function() {
            this.normalizeTimeout && a(this.normalizeTimeout), this.normalizeTimeout = r(this.doResize.bind(this), 10)
        }, l.prototype.identifyDeviceID = function() {
            for (var t in this.mediaQueries)
                if (this.mediaQueries[t].matches) return l.DeviceMode[t];
            return l.DeviceMode.desktopportrait
        }, l.prototype.initFocusOffsetObserver = function() {
            if ("" !== this.parameters.focus.offsetTop) {
                var t;
                try {
                    t = h.querySelectorAll(this.parameters.focus.offsetTop)
                } catch (t) {
                    console.error('The Top CSS selector: "' + this.parameters.focus.offsetTop + '" used in the slider is invalid!')
                }
                if (t && t.length)
                    for (var i = new ResizeObserver(function(t) {
                            this.focusOffsetTop = 0;
                            for (var i = 0; i < t.length; i++) this.focusOffsetTop += t[i].target.getBoundingClientRect().height;
                            this.Ct()
                        }.bind(this)), s = 0; s < t.length; s++) i.observe(t[s])
            }
            if ("" !== this.parameters.focus.offsetBottom) {
                var n;
                try {
                    n = h.querySelectorAll(this.parameters.focus.offsetBottom)
                } catch (t) {
                    console.error('The Bottom CSS selector: "' + this.parameters.focus.offsetBottom + '" used in the slider is invalid!')
                }
                if (n && n.length) {
                    var o = new ResizeObserver(function(t) {
                        this.focusOffsetBottom = 0;
                        for (var i = 0; i < t.length; i++) this.focusOffsetBottom += t[i].target.getBoundingClientRect().height;
                        this.Ct()
                    }.bind(this));
                    for (s = 0; s < n.length; s++) o.observe(n[s])
                }
            }
        }, l.prototype.Ct = function() {
            y(this.sliderElement, "--subtract-vertical-offset", (i.n2OffsetTop || this.focusOffsetTop) + (i.n2OffsetBottom || this.focusOffsetBottom) + "px"), this.doResize()
        }, l.prototype.doResize = function(e) {
            if (!this.slider.isAdmin && c && this.wt === this.bt) {
                const t = Math.abs(this.yt - this.St);
                if (t > 0 && t < 100) return
            }
            this.wt = this.bt, this.yt = this.St;
            var t = this.identifyDeviceID();
            if (this.parameters.hideOn[l._DeviceMode[t]]) return A(this.K, "n2-section-smartslider--hidden"), !1;
            if (I(this.K, "n2-section-smartslider--hidden"), !this.isVisible) return !1;
            var i = !1,
                s = this.device;
            if (this.deviceID !== t && (this.setDeviceID(t), s && I(this.sliderElement, "n2-ss-" + s), b(this.sliderElement, "deviceMode", this.device), A(this.sliderElement, "n2-ss-" + this.device), this.slider.G("SliderDevice", {
                    lastDevice: s,
                    device: this.device,
                    group: l._DeviceGroup[this.device]
                }), i = !0, this.slider.stages.resolve("Device")), i && (this.slider.visibleRealSlides = [], this.slider.publicDispatchEvent("SliderDeviceOrientation", {
                    slider: this.slider,
                    lastDevice: s,
                    device: this.device,
                    group: l._DeviceGroup[this.device]
                }), this.slider.stages.resolve("DeviceOrientation"), this.finalizeVisibleSlidesStage1()), !this.slider.visibleRealSlides.length) return this.parameters.hideOn[l._DeviceMode[t]] = !0, A(this.K, "n2-section-smartslider--hidden"), !1;
            if (this.slider.isVisible || this.visibleRealSlidesChanged) {
                for (var n = 0; n < this.slider.realSlides.length; n++) u.MW.k(this.slider.realSlides[n].element).setValues({
                    width: "",
                    height: ""
                }), g(this.slider.realSlides[n].element, {
                    width: "",
                    height: ""
                });
                this.resizeStage1Width(), this.slider.G("SliderResizeHorizontal"), this.resizeStage2Height()
            }
        }, l.prototype.resizeStage1Width = function() {
            this.resizeContext = {}
        }, l.prototype.resizeStage2Height = function() {
            this.finalizeVisibleSlidesStage2(), this.calculateResponsiveValues(), this.slider.stages.resolve("ResizeFirst"), this.triggerResize()
        }, l.prototype.calculateResponsiveValues = function() {
            this.ratios = {
                slideW: this.resizeContext.slideWidth / this.base.slideWidth,
                slideH: this.resizeContext.slideHeight / this.base.slideHeight
            }, this.gt && C(this.sliderElement.querySelectorAll('.n2-ss-layer[data-sstype="slide"] > .n2-ss-layer[data-pm="absolute"][data-adaptivefont="0"]'), "font-size", "calc(" + 16 * this.ratios.slideW + "px * var(--ssfont-scale, 1))");
            for (var t = 0; t < this.slider.realSlides.length; t++) u.MW.k(this.slider.realSlides[t].element).setValues({
                width: this.resizeContext.slideSelfWidth,
                height: this.resizeContext.slideSelfHeight
            })
        }, l.prototype.onStarterSlide = function(t) {
            this.state.StarterSlide = !0, this.calibrateActiveSlide(t), delete this.targetCurrentSlide
        }, l.prototype.finalizeVisibleSlidesStage1 = function() {
            this.visibleRealSlidesChanged && (this.slider.visibleRealSlides.sort((function(t, i) {
                return t.index - i.index
            })), this.updateVisibleSlides(), this.slider.G("visibleRealSlidesChanged"), this.slider.stages.resolve("VisibleRealSlides"), this.isResetActiveSlideEarly && this.calibrateActiveSlide())
        }, l.prototype.updateVisibleSlides = function() {
            this.slider.visibleSlides = this.slider.visibleRealSlides
        }, l.prototype.calibrateActiveSlide = function(t) {
            if (this.state.StarterSlide && this.slider.visibleSlides.length > 0) {
                var i = t || this.slider.currentRealSlide;
                i.isVisible || (i = i.getNext()) || (i = this.slider.currentSlide.getPrevious()), this.resetActiveRealSlide(i)
            }
        }, l.prototype.resetActiveRealSlide = function(t) {
            var i, s;
            t && t !== this.slider.currentRealSlide ? (this.slider.G("BeforeCurrentSlideChange", t), (i = this.slider.currentSlide) && this.slider.forceUnsetActiveSlide(i), this.slider.setCurrentRealSlide(t), s = this.slider.currentSlide, this.targetCurrentSlide = s, this.slider.forceSetActiveSlide(s), this.slider.G("SlideForceChange", {
                oldSlide: i,
                currentSlide: s
            })) : s = this.slider.currentSlide, this.slider.updateInsideSlides([s])
        }, l.prototype.finalizeVisibleSlidesStage2 = function() {
            this.visibleRealSlidesChanged && (this.visibleRealSlidesChanged = !1, this.isResetActiveSlideEarly || this.calibrateActiveSlide(), this.triggerVisibleSlidesChanged(), this.targetCurrentSlide !== n && (this.slider.G("SlideWillChange", {
                targetSlide: this.targetCurrentSlide
            }), this.slider.G("CurrentSlideChanged", {
                currentSlide: this.targetCurrentSlide
            }), this.slider.stages.resolved("Visible") && this.slider.playSlide(this.targetCurrentSlide), delete this.targetCurrentSlide))
        }, l.prototype.triggerVisibleSlidesChanged = function() {
            this.slider.G("visibleSlidesChanged"), this.slider.stages.resolve("VisibleSlides"), this.slider.visibleRealSlides.length ? this.slider.isVisible || this.slider.show() : this.slider.isVisible && this.slider.hide()
        }, l.prototype.getNormalizedModeString = function() {
            return l._DeviceMode[this.deviceID]
        }, l.prototype.triggerResize = function() {
            this.slider.publicDispatchEvent("SliderResize", {
                ratios: this.ratios,
                responsive: this
            }), this.slider.stages.resolve("Resized")
        }, l.prototype.getVerticalOffsetHeight = function() {
            return this.ot ? 0 : this.slider.widgets.getVerticalsHeight()
        }, l.prototype.addHorizontalSpacingControl = function(t, i) {
            this.horizontalSpacingControls[t].push(i), this.slider.stages.resolved("ResizeFirst") && this.doNormalizedResize()
        }, l.prototype.filterSliderWidthHorizontalSpacing = function(t) {
            for (var i in this.horizontalSpacing = {
                    right: 0,
                    left: 0
                }, this.horizontalSpacingControls)
                for (var s = this.horizontalSpacingControls[i], n = s.length - 1; n >= 0; n--) {
                    var h = s[n];
                    h.isVisible() && (h.refreshSliderSize(t), this.horizontalSpacing[i] += h.getSize())
                }
            return g(this.containerElementPadding, {
                paddingLeft: this.horizontalSpacing.left + "px",
                paddingRight: this.horizontalSpacing.right + "px"
            }), t - this.horizontalSpacing.left - this.horizontalSpacing.right
        }, l.prototype.addFilter = function(t, i) {
            this.filters[t].push(i)
        }, l.prototype.removeFilter = function(t, i) {
            this.filters[t].push(i)
        }, l.prototype.applyFilter = function(t, i) {
            for (var s = 0; s < this.filters[t].length; s++) i = this.filters[t][s].call(this, i);
            return i
        }, l
    })), u.d("FrontendItemVimeo", (function() {
        function t(t, i, s, n, o, r) {
            if (this.state = {
                    slideVisible: !1,
                    visible: !1,
                    scroll: !1,
                    slide: !1,
                    InComplete: !1,
                    play: !1,
                    continuePlay: !1
                }, this.promise = new Promise(function(t) {
                    this._resolve = t
                }.bind(this)), this.slider = t, this.playerId = i, this.playerElement = h.getElementById(this.playerId), this.cover = this.playerElement.querySelector(".n2_ss_video_player__cover"), this.hasImage = o, this.start = r, this.parameters = f({
                    vimeourl: "//vimeo.com/144598279",
                    privateid: "",
                    autoplay: "0",
                    ended: "",
                    reset: "0",
                    title: "1",
                    byline: "1",
                    portrait: "0",
                    loop: "0",
                    color: "00adef",
                    volume: "-1",
                    dnt: "0"
                }, n), 1 === parseInt(this.parameters.autoplay))
                if (navigator.userAgent.toLowerCase().indexOf("android") > -1) this.parameters.volume = 0;
                else if (n2const.isIOS) {
                this.parameters.autoplay = 0;
                try {
                    "playsInline" in c("video") && (this.parameters.autoplay = 1, this.parameters.volume = 0)
                } catch (t) {}
            }
            n2const.isLighthouse || u.r("windowLoad", this.whenLoaded.bind(this))
        }
        var i;
        return t.prototype.whenLoaded = function() {
            1 === parseInt(this.parameters.autoplay) || !this.hasImage || n2const.isMobile ? this.ready(this.initVimeoPlayer.bind(this)) : this.ready(function() {
                var t = function(e) {
                        z(i), e.preventDefault(), e.stopPropagation(), this.initVimeoPlayer(), this.safePlay()
                    }.bind(this),
                    i = [L(this.playerElement, "click", t), L(this.playerElement, "n2click", t)]
            }.bind(this))
        }, t.prototype.ready = function(t) {
            i || (i = new Promise((function(t) {
                var i = c("script");
                i.onload = t, i.src = "https://player.vimeo.com/api/player.js", h.head.appendChild(i)
            }))), i.then(t)
        }, t.prototype.initVimeoPlayer = function() {
            var t = c("iframe");
            t.className = "intrinsic-ignore", t.allow = "fullscreen; autoplay; encrypted-media", t.id = this.playerId + "-frame", t.src = "https://player.vimeo.com/video/" + this.parameters.vimeocode + "?autoplay=0&_video&title=" + this.parameters.title + "&byline=" + this.parameters.byline + "&background=" + this.parameters.background + "&portrait=" + this.parameters.portrait + "&color=" + this.parameters.color + "&loop=" + this.parameters.loop + ("-1" == this.parameters.quality ? "" : "&quality=" + this.parameters.quality) + "&dnt=" + this.parameters["privacy-enhanced"] + ("" !== this.parameters.privateid ? "&h=" + this.parameters.privateid : "") + "&playsinline=1", t.webkitAllowFullScreen = !0, t.allowFullScreen = !0, this.parameters["iframe-title"] !== n && "" !== this.parameters["iframe-title"] && (t.title = this.parameters["iframe-title"]), g(t, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }), this.playerElement.prepend(t), this.player = new Vimeo.Player(t, {
                autoplay: !1
            }), this.promise = this.player.ready(), this.slider.stages.done("BeforeShow", function() {
                this.promise.then(this.onReady.bind(this))
            }.bind(this))
        }, t.prototype.onReady = function() {
            var t = parseFloat(this.parameters.volume);
            t >= 0 && this.setVolume(t), this.slide = this.slider.findSlideByElement(this.playerElement), this.isStatic = this.slide.isStatic();
            var i = this.playerElement.closest(".n2-ss-layer");
            this.layer = i.layer, new ResizeObserver(function(t) {
                var i = t[0].contentRect;
                if (i.width && i.height) this.state.visible || this.setState("visible", !0, !0);
                else if (this.state.visible) {
                    var s = this.state.play;
                    this.setState("visible", !1, !0), s && this.setState("continuePlay", !0)
                }
            }.bind(this)).observe(this.layer.layer), this.slide.isVisible && this.setState("slideVisible", !0, !0), O(this.slide.element, "Hidden", function() {
                var t = this.state.play;
                this.setState("slideVisible", !1, !0), t && this.setState("continuePlay", !0)
            }.bind(this)), O(this.slide.element, "Visible", function() {
                this.setState("slideVisible", !0, !0)
            }.bind(this)), this.cover && (n2const.isMobile && T(this.cover, "click", this.safePlay.bind(this)), T(i, "n2play", function() {
                u.W.to(u.MW.k(this.cover), .3, {
                    opacity: 0,
                    onComplete: function() {
                        x(this.cover)
                    }.bind(this)
                })
            }.bind(this))), this.player.on("play", function() {
                this.isStatic || D(this.slider.sliderElement, "mediaStarted", {
                    id: this.playerId
                }), R(i, "n2play")
            }.bind(this)), this.player.on("pause", function() {
                R(i, "n2pause"), this.state.continuePlay ? (this.setState("continuePlay", !1), this.setState("play", !0)) : this.setState("play", !1)
            }.bind(this)), this.player.on("ended", function() {
                this.isStatic || D(this.slider.sliderElement, "mediaEnded", {
                    id: this.playerId
                }), R(i, "n2stop"), this.setState("play", !1), "next" === this.parameters.ended && 0 == this.parameters.loop && ((h.fullscreenElement || h.webkitFullscreenElement) && (h.exitFullscreen || h.webkitExitFullscreen).call(h), this.slider.next(!0))
            }.bind(this)), this.isStatic || (O(this.slider.sliderElement, "CurrentSlideChanged", function(e) {
                this.onCurrentSlideChange(e.detail.currentSlide)
            }.bind(this)), O(this.slider.sliderElement, "mainAnimationStart", function(e) {
                this.onCurrentSlideChange(this.slider.slides[e.detail.currentSlideIndex])
            }.bind(this))), "" !== this.parameters["scroll-pause"] ? u.ScrollTracker.add(this.playerElement, this.parameters["scroll-pause"], function() {
                this.setState("scroll", !0, !0)
            }.bind(this), function() {
                this.setState("continuePlay", !0), this.setState("scroll", !1, !0)
            }.bind(this)) : this.setState("scroll", !0, !0), this.slide.isActiveWhen() && this.setState("slide", !0, !0), 1 === parseInt(this.parameters.autoplay) && this.slider.visible(this.initAutoplay.bind(this)), this._resolve()
        }, t.prototype.onCurrentSlideChange = function(t) {
            this.slide.isActiveWhen(t) ? (1 == this.parameters.autoplay && this.setState("play", !0), this.setState("slide", !0, !0)) : (parseInt(this.parameters.reset) && this.reset(), this.setState("slide", !0, !0))
        }, t.prototype.initAutoplay = function() {
            this.setState("InComplete", !0, !0), this.isStatic ? (this.setState("play", !0), this.setState("slide", !0, !0)) : (O(this.slider.sliderElement, "mainAnimationComplete", function(e) {
                this.slide.isActiveWhen(this.slider.slides[e.detail.currentSlideIndex]) ? (this.setState("play", !0), this.setState("slide", !0, !0)) : this.setState("slide", !1, !0)
            }.bind(this)), this.slide.isActiveWhen() && (this.setState("play", !0), this.setState("slide", !0, !0)))
        }, t.prototype.setState = function(t, i, s) {
            s = s || !1, this.state[t] = i, s && (this.state.slideVisible && this.state.visible && this.state.play && this.state.slide && this.state.InComplete && this.state.scroll && this.layer.isVisible ? this.play() : this.pause(), this.state.slideVisible && this.state.visible && this.state.slide && this.layer.isVisible ? p(this.player.element, "tabindex") : d(this.player.element, "tabindex", "-1"))
        }, t.prototype.play = function() {
            D(this.slider.sliderElement, "mediaStarted", {
                id: this.playerId
            }), 0 != this.start && this.safeSetCurrentTime(this.start), this.safePlay(), this.player.getCurrentTime().then(function(t) {
                t < this.start && 0 != this.start && this.safeSetCurrentTime(this.start), this.safePlay()
            }.bind(this)).catch(function(t) {
                this.safePlay()
            }.bind(this))
        }, t.prototype.pause = function() {
            this.safePause()
        }, t.prototype.reset = function() {
            this.safeSetCurrentTime(this.start)
        }, t.prototype.setVolume = function(t) {
            this.safeCallback(function() {
                this.promise = this.player.setVolume(t)
            }.bind(this))
        }, t.prototype.safeSetCurrentTime = function(t) {
            this.safeCallback(function() {
                this.promise = this.player.setCurrentTime(t)
            }.bind(this))
        }, t.prototype.safePlay = function() {
            this.safeCallback(function() {
                this.promise = this.player.getPaused(), this.safeCallback(function(t) {
                    t && (this.promise = this.player.play())
                }.bind(this))
            }.bind(this))
        }, t.prototype.safePause = function() {
            this.safeCallback(function() {
                this.promise = this.player.getPaused(), this.safeCallback(function(t) {
                    t || (this.promise = this.player.pause())
                }.bind(this))
            }.bind(this))
        }, t.prototype.safeCallback = function(t) {
            this.promise && Promise !== n ? this.promise.then(t).catch(t) : t()
        }, t
    })), u.d("FrontendItemYouTube", (function() {
        function t(t, i, s, n) {
            this.listeners = {
                play: []
            }, this.state = {
                slideVisible: !1,
                visible: !1,
                scroll: !1,
                slide: !1,
                InComplete: !1,
                play: !1,
                continuePlay: !1
            }, this.promise = new Promise(function(t) {
                this._resolve = t
            }.bind(this)), this.slider = t, this.playerId = i, this.playerElement = h.getElementById(this.playerId), this.cover = this.playerElement.querySelector(".n2_ss_video_player__cover"), this.hasImage = n, this.parameters = f({
                youtubeurl: "//www.youtube.com/watch?v=3PPtkRU7D74",
                youtubecode: "3PPtkRU7D74",
                center: 0,
                autoplay: 1,
                ended: "",
                related: "1",
                volume: "-1",
                loop: 0,
                modestbranding: 1,
                reset: 0,
                query: [],
                playsinline: 1
            }, s), n2const.isLighthouse || u.r("windowLoad", this.whenLoaded.bind(this)), this.shouldPlayWhenReady = !1
        }
        var s;
        return t.prototype.whenLoaded = function() {
            if (1 === parseInt(this.parameters.autoplay) || !this.hasImage || n2const.isMobile) this.ready(this.initYoutubePlayer.bind(this));
            else var t = function(e) {
                    z(i), e.preventDefault(), e.stopPropagation(), this.ready(function() {
                        this.promise.then(this.play.bind(this)), this.initYoutubePlayer()
                    }.bind(this))
                }.bind(this),
                i = [L(this.playerElement, "click", t), L(this.playerElement, "n2click", t)]
        }, t.prototype.ready = function(t) {
            if (!s && (s = new Promise((function(t) {
                    var s;
                    (s = i._EPYT_ !== n ? function() {
                        !0 === i._EPADashboard_.initStarted ? t() : r(s, 100)
                    } : function() {
                        i.YT !== n && i.YT.loaded ? t() : r(s, 100)
                    })()
                })), i.YT === n)) {
                var o = c("script");
                o.src = "https://www.youtube.com/iframe_api", h.head.appendChild(o)
            }
            s.then(t)
        }, t.prototype.fadeOutCover = function() {
            this.coverFadedOut === n && this.cover && (this.coverFadedOut = !0, u.W.to(u.MW.k(this.cover), .3, {
                opacity: 0,
                onComplete: function() {
                    x(this.cover)
                }.bind(this)
            }))
        }, t.prototype.initYoutubePlayer = function() {
            var t = this.layerElement = this.playerElement.closest(".n2-ss-layer");
            this.layer = t.layer, this.cover && n2const.isMobile && this.listeners.play.push(L(this.cover, "click", (() => {
                this.shouldPlayWhenReady = !0, z(this.listeners.play)
            }))), this.slide = this.slider.findSlideByElement(this.playerElement), this.isStatic = this.slide.isStatic();
            var s = {
                enablejsapi: 1,
                origin: i.location.protocol + "//" + i.location.host,
                wmode: "opaque",
                rel: 1 - this.parameters.related,
                start: this.parameters.start,
                end: this.parameters.end,
                modestbranding: this.parameters.modestbranding,
                playsinline: this.parameters.playsinline
            };
            if (1 === parseInt(this.parameters.autoplay))
                if (navigator.userAgent.toLowerCase().indexOf("android") > -1) this.parameters.volume = 0;
                else if (n2const.isIOS) {
                this.parameters.autoplay = 0;
                try {
                    "playsInline" in c("video") && (this.parameters.autoplay = 1, this.parameters.volume = 0, s.playsinline = 1)
                } catch (t) {}
            }
            for (var n in n2const.isIOS && this.parameters.controls && (s.use_native_controls = 1), 1 == this.parameters.center && (s.controls = 0), 1 != this.parameters.controls && (s.autohide = 1, s.controls = 0), +(navigator.platform.toUpperCase().indexOf("MAC") >= 0 && navigator.userAgent.search("Firefox") > -1) && (s.html5 = 1), this.parameters.query) this.parameters.query.hasOwnProperty(n) && (s[n] = this.parameters.query[n]);
            var o = {
                videoId: this.parameters.youtubecode,
                wmode: "opaque",
                playerVars: s,
                events: {
                    onReady: this.onReady.bind(this),
                    onStateChange: function(i) {
                        switch (i.data) {
                            case YT.PlayerState.PLAYING:
                            case YT.PlayerState.BUFFERING:
                                this.isStatic || this.slide.isActiveWhen(this.slider.currentSlide) && D(this.slider.sliderElement, "mediaStarted", {
                                    id: this.playerId
                                }), R(t, "n2play");
                                break;
                            case YT.PlayerState.PAUSED:
                                R(t, "n2pause"), this.state.continuePlay ? (this.setState("continuePlay", !1), this.setState("play", !0)) : this.setState("play", !1);
                                break;
                            case YT.PlayerState.ENDED:
                                1 == this.parameters.loop ? (this.player.seekTo(this.parameters.start), this.player.playVideo()) : (this.isStatic || D(this.slider.sliderElement, "mediaEnded", {
                                    id: this.playerId
                                }), R(t, "n2stop"), this.setState("play", !1), "next" === this.parameters.ended && ((h.fullscreenElement || h.webkitFullscreenElement) && (h.exitFullscreen || h.webkitExitFullscreen).call(h), this.slider.next(!0)))
                        }
                    }.bind(this)
                }
            };
            (this.parameters["privacy-enhanced"] || i.jQuery && i.jQuery.fn.revolution) && (o.host = "https://www.youtube-nocookie.com"), this.player = new YT.Player(this.playerId + "-frame", o), 1 == this.parameters.center && (y(this.playerElement.parentNode, "overflow", "hidden"), this.onResize(), O(this.slider.sliderElement, "SliderResize", this.onResize.bind(this)))
        }, t.prototype.onReady = function() {
            this.cover && (n2const.isMobile && T(this.cover, "click", this.play.bind(this)), T(this.layerElement, "n2play", this.fadeOutCover.bind(this))), z(this.listeners.play), this.shouldPlayWhenReady && this.play(), this.slider.stages.done("BeforeShow", this.onBeforeShow.bind(this))
        }, t.prototype.onBeforeShow = function() {
            var t = parseFloat(this.parameters.volume);
            t > 0 ? this.setVolume(t) : -1 !== t && this.player.mute(), new ResizeObserver(function(t) {
                var i = t[0].contentRect;
                if (i.width && i.height) this.state.visible || this.setState("visible", !0, !0);
                else if (this.state.visible) {
                    var s = this.state.play;
                    this.setState("visible", !1, !0), s && this.setState("continuePlay", !0)
                }
            }.bind(this)).observe(this.layer.layer), this.slide.isVisible && this.setState("slideVisible", !0, !0), O(this.slide.element, "Hidden", function() {
                var t = this.state.play;
                this.setState("slideVisible", !1, !0), t && this.setState("continuePlay", !0)
            }.bind(this)), O(this.slide.element, "Visible", function() {
                this.setState("slideVisible", !0, !0)
            }.bind(this)), this.slide.isActiveWhen() && this.setState("slide", !0, !0), 1 == this.parameters.autoplay && this.slider.visible(this.initAutoplay.bind(this)), this.isStatic || (O(this.slider.sliderElement, "CurrentSlideChanged", function(e) {
                this.onCurrentSlideChange(e.detail.currentSlide)
            }.bind(this)), O(this.slider.sliderElement, "mainAnimationStart", function(e) {
                this.onCurrentSlideChange(this.slider.slides[e.detail.currentSlideIndex])
            }.bind(this)), parseInt(this.parameters.reset) && O(this.slider.sliderElement, "mainAnimationComplete", function(e) {
                this.slide.isActiveWhen(this.slider.slides[e.detail.currentSlideIndex]) || 0 !== this.player.getCurrentTime() && this.player.seekTo(this.parameters.start)
            }.bind(this))), this._resolve(), "" !== this.parameters["scroll-pause"] ? u.ScrollTracker.add(this.playerElement, this.parameters["scroll-pause"], function() {
                this.setState("scroll", !0, !0)
            }.bind(this), function() {
                this.setState("continuePlay", !0), this.setState("scroll", !1, !0)
            }.bind(this)) : this.setState("scroll", !0, !0)
        }, t.prototype.onCurrentSlideChange = function(t) {
            var i = this.slide.isActiveWhen(t);
            i && 1 == this.parameters.autoplay && this.setState("play", !0), this.setState("slide", i, !0)
        }, t.prototype.onResize = function() {
            var t = this.playerElement.parentNode.getBoundingClientRect(),
                i = t.width,
                s = t.height + 100,
                n = 16 / 9,
                h = {
                    width: i + "px",
                    height: s + "px",
                    "margin-top": 0
                };
            h[n2const.rtl["margin-left"]] = 0, i / s > n ? (h.height = i * n + "px", h["margin-top"] = (s - i * n) / 2 + "px") : (h.width = s * n + "px", h[n2const.rtl["margin-left"]] = (i - s * n) / 2 + "px"), g(this.playerElement, h)
        }, t.prototype.initAutoplay = function() {
            this.setState("InComplete", !0, !0), this.isStatic ? (this.setState("play", !0), this.setState("slide", !0, !0)) : (O(this.slider.sliderElement, "mainAnimationComplete", function(e) {
                this.slide.isActiveWhen(this.slider.slides[e.detail.currentSlideIndex]) ? (this.setState("play", !0), this.setState("slide", !0, !0)) : this.setState("slide", !1, !0)
            }.bind(this)), this.slide.isActiveWhen() && (this.setState("play", !0), this.setState("slide", !0, !0)))
        }, t.prototype.setState = function(t, i, s) {
            s = s || !1, this.state[t] = i, s && (this.state.slideVisible && this.state.visible && this.state.play && this.state.slide && this.state.InComplete && this.state.scroll ? this.play() : this.pause())
        }, t.prototype.play = function() {
            this.isStopped() && (this.coverFadedOut === n && r(this.fadeOutCover.bind(this), 200), D(this.slider.sliderElement, "mediaStarted", {
                id: this.playerId
            }), this.player.playVideo())
        }, t.prototype.pause = function() {
            this.isStopped() || this.player.pauseVideo()
        }, t.prototype.stop = function() {
            this.player.stopVideo()
        }, t.prototype.isStopped = function() {
            switch (this.player.getPlayerState()) {
                case -1:
                case 2:
                case 5:
                    return !0;
                default:
                    return !1
            }
        }, t.prototype.setVolume = function(t) {
            this.player.setVolume(100 * t)
        }, t
    })), u.d("smartslider-frontend")
}(window);
// source --> https://zoewellness.com/wp-content/plugins/smart-slider-3/Public/SmartSlider3/Slider/SliderType/Simple/Assets/dist/ss-simple.min.js?ver=40b842f2 
! function(t) {
    var i = t;
    i._N2 = i._N2 || {
        _r: [],
        _d: [],
        r: function() {
            this._r.push(arguments)
        },
        d: function() {
            this._d.push(arguments)
        }
    };
    var s = t.document,
        n = (s.documentElement, t.setTimeout),
        h = t.clearTimeout,
        a = i._N2,
        o = (t.requestAnimationFrame, Object.assign),
        r = function(t, i) {
            return t.dispatchEvent(i)
        },
        c = function(t, i) {
            return r(t, new Event(i, {
                bubbles: !1,
                cancelable: !1
            }))
        },
        u = function(t, i, s) {
            t.addEventListener(i, s, {
                once: !0
            })
        };
    navigator.userAgent.indexOf("+http://www.google.com/bot.html") > -1 || i.requestIdleCallback, i.cancelIdleCallback;
    ! function(t) {
        if ("complete" === s.readyState || "interactive" === s.readyState) t();
        else if (Document && Document.prototype && Document.prototype.addEventListener && Document.prototype.addEventListener !== s.addEventListener) {
            const i = () => {
                t(), t = () => {}
            };
            s.addEventListener("DOMContentLoaded", i), s.addEventListener("readystatechange", (() => {
                "complete" !== s.readyState && "interactive" !== s.readyState || i()
            })), Document.prototype.addEventListener.call(s, "DOMContentLoaded", i)
        } else s.addEventListener("DOMContentLoaded", t)
    }((function() {
        s.body
    })), a.d("SmartSliderMainAnimationSimple", ["SmartSliderMainAnimationAbstract"], (function() {
        function t(t, i) {
            switch (this.postBackgroundAnimation = !1, this._currentBackgroundAnimation = !1, this.reverseSlideIndex = null, (i = o({
                delay: 0,
                type: "horizontal",
                shiftedBackgroundAnimation: "auto"
            }, i)).delay /= 1e3, i.duration < 300 && (i.type = "no"), a.SmartSliderMainAnimationAbstract.prototype.constructor.call(this, t, i), this.parameters.type) {
                case "no":
                    this.animation = this._mainAnimationNo, this.isNoAnimation = !0;
                    break;
                case "fade":
                    this.animation = this._mainAnimationFade;
                    break;
                case "crossfade":
                    this.animation = this._mainAnimationCrossFade;
                    break;
                case "vertical":
                    t.backgrounds.hasFixed ? this.animation = this._mainAnimationFade : this.animation = this._mainAnimationVertical;
                    break;
                case "vertical-reversed":
                    t.backgrounds.hasFixed ? this.animation = this._mainAnimationFade : this.animation = this._mainAnimationVerticalReversed;
                    break;
                case "horizontal-reversed":
                    this.animation = this._mainAnimationHorizontalReversed;
                    break;
                default:
                    this.animation = this._mainAnimationHorizontal
            }
        }
        return t.prototype = Object.create(a.SmartSliderMainAnimationAbstract.prototype), t.prototype.constructor = t, t.prototype.changeTo = function(t, i, s, n) {
            this.postBackgroundAnimation && this.postBackgroundAnimation.prepareToSwitchSlide(t, i), a.SmartSliderMainAnimationAbstract.prototype.changeTo.apply(this, arguments)
        }, t.prototype.setActiveSlide = function(t) {
            for (var i = 0; i < this.slider.slides.length; i++) this.slider.slides[i] !== t && this.hideSlide(this.slider.slides[i])
        }, t.prototype.hideSlide = function(t) {
            a.MW.R(t.SMWs, {
                x: -1e5 * n2const.rtl.modifier
            })
        }, t.prototype.showSlide = function(t) {
            a.MW.R(t.SMWs, {
                x: 0,
                y: 0
            })
        }, t.prototype.cleanSlideIndex = function(t) {
            this.hideSlide(this.slider.slides[t])
        }, t.prototype.revertTo = function(t, i) {
            a.MW.R(this.slider.slides[i].SMWs, {
                zIndex: ""
            }), this.hideSlide(this.slider.slides[i]), a.SmartSliderMainAnimationAbstract.prototype.revertTo.apply(this, arguments)
        }, t.prototype._initAnimation = function(t, i, s) {
            this.animation(t, i, s)
        }, t.prototype.onBackwardChangeToComplete = function(t, i, s) {
            this.reverseSlideIndex = null, this.onChangeToComplete(t, i, s)
        }, t.prototype.onChangeToComplete = function(t, i, s) {
            null !== this.reverseSlideIndex && (c(this.slider.slides[this.reverseSlideIndex].element, "mainAnimationStartInCancel"), this.reverseSlideIndex = null), this.hideSlide(t), a.SmartSliderMainAnimationAbstract.prototype.onChangeToComplete.apply(this, arguments)
        }, t.prototype.onReverseChangeToComplete = function(t, i, s) {
            this.hideSlide(t), a.SmartSliderMainAnimationAbstract.prototype.onReverseChangeToComplete.apply(this, arguments)
        }, t.prototype._mainAnimationNo = function(t, i) {
            this.parameters.delay = 0, this.parameters.duration = .1, this._mainAnimationFade(t, i)
        }, t.prototype._mainAnimationFade = function(t, i) {
            a.MW.R(t.SMWs, {
                zIndex: 23
            }), this.showSlide(i), t.unsetActive(), i.setActive();
            var s = this.adjustMainAnimation();
            if (0 !== this.parameters.shiftedBackgroundAnimation) {
                var n = !1,
                    h = !1;
                if ("auto" === this.parameters.shiftedBackgroundAnimation ? t.hasLayers() ? n = !0 : h = !0 : n = !0, this._currentBackgroundAnimation && n) {
                    var o = s.outDuration - s.extraDelay;
                    o > 0 && this.timeline.shiftChildren(o), this._currentBackgroundAnimation.shiftedPreSetup && this._currentBackgroundAnimation._preSetup()
                } else h && (s.extraDelay > 0 && this.timeline.shiftChildren(s.extraDelay), this._currentBackgroundAnimation.shiftedPreSetup && this._currentBackgroundAnimation._preSetup())
            } else s.outDelay += .1;
            var r = [t.SMWs[0]];
            !this._currentBackgroundAnimation && t.SMWs[1] && r.push(t.SMWs[1]), this.timeline.fromTo(r, s.outDuration, {
                opacity: 1
            }, {
                opacity: 0,
                ease: this.getEase()
            }, s.outDelay);
            var c = a.MW.k(i.element);
            this.timeline.fromTo(c, s.inDuration, {
                opacity: 0
            }, {
                opacity: 1,
                ease: this.getEase()
            }, s.inDelay), !this._currentBackgroundAnimation && i.background && (a.MW.k(i.background.element).opacity = 1), u(this.sliderElement, "mainAnimationComplete", function(e) {
                var t = this.slider.slides[e.detail.previousSlideIndex];
                a.MW.R(t.SMWs, {
                    zIndex: "",
                    opacity: 1
                })
            }.bind(this)), this.slider.updateInsideSlides([t, i])
        }, t.prototype._mainAnimationCrossFade = function(t, i) {
            a.MW.R(t.SMWs, {
                zIndex: 23
            }), this.showSlide(i), t.unsetActive(), i.setActive();
            var s = this.adjustMainAnimation();
            if (0 != this.parameters.shiftedBackgroundAnimation) {
                var n = !1,
                    h = !1;
                if ("auto" == this.parameters.shiftedBackgroundAnimation ? t.hasLayers() ? n = !0 : h = !0 : n = !0, this._currentBackgroundAnimation && n) {
                    var o = s.outDuration - s.extraDelay;
                    o > 0 && this.timeline.shiftChildren(o), this._currentBackgroundAnimation.shiftedPreSetup && this._currentBackgroundAnimation._preSetup()
                } else h && (s.extraDelay > 0 && this.timeline.shiftChildren(s.extraDelay), this._currentBackgroundAnimation.shiftedPreSetup && this._currentBackgroundAnimation._preSetup())
            } else s.outDelay += .1;
            var r = [t.SMWs[0]];
            !this._currentBackgroundAnimation && t.SMWs[1] && r.push(t.SMWs[1]), this.timeline.fromTo(r, s.outDuration, {
                opacity: 1
            }, {
                opacity: 0,
                ease: this.getEase()
            }, s.outDelay);
            var c = [i.SMWs[0]];
            !this._currentBackgroundAnimation && i.SMWs[1] && c.push(i.SMWs[1]), this.timeline.fromTo(c, s.inDuration, {
                opacity: 0
            }, {
                opacity: 1,
                ease: this.getEase()
            }, s.inDelay), u(this.sliderElement, "mainAnimationComplete", function(e) {
                var t = this.slider.slides[e.detail.previousSlideIndex],
                    i = this.slider.slides[e.detail.currentSlideIndex];
                a.MW.R(t.SMWs, {
                    zIndex: "",
                    opacity: 1
                }), a.MW.R(i.SMWs, {
                    opacity: 1
                })
            }.bind(this)), this.slider.updateInsideSlides([t, i])
        }, t.prototype._mainAnimationHorizontal = function(t, i, s) {
            this.__mainAnimationDirection(t, i, "horizontal", s)
        }, t.prototype._mainAnimationVertical = function(t, i, s) {
            this.showSlide(i), this.__mainAnimationDirection(t, i, "vertical", s)
        }, t.prototype._mainAnimationHorizontalReversed = function(t, i, s) {
            this.__mainAnimationDirection(t, i, "horizontal", !s)
        }, t.prototype._mainAnimationVerticalReversed = function(t, i, s) {
            this.showSlide(i), this.__mainAnimationDirection(t, i, "vertical", !s)
        }, t.prototype.__mainAnimationDirection = function(t, i, s, n) {
            var h = t.SMWs,
                o = i.SMWs,
                r = [t, i],
                c = "",
                l = 0;
            "horizontal" === s ? (c = "x", l = Math.floor(this.slider.responsive.resizeContext.slideOuterWidth), n2const.rtl.isRtl && (n = !n)) : "vertical" === s && (c = "y", l = Math.floor(this.slider.responsive.resizeContext.slideOuterHeight)), n && (l *= -1);
            var f = {},
                v = {
                    snap: "x,y",
                    ease: this.getEase()
                },
                d = {
                    snap: "x,y",
                    ease: this.getEase()
                };
            f[c] = l, d[c] = -l, a.MW.R(h, {
                zIndex: 23
            });
            var m = {
                zIndex: 23
            };
            m[c] = l, a.MW.R(o, m), t.unsetActive(), i.setActive();
            var p, S = this.adjustMainAnimation();
            if (v[c] = 0, this.timeline.fromTo(o, S.inDuration, f, v, S.inDelay), 0 != this.parameters.shiftedBackgroundAnimation) {
                var y = !1,
                    x = !1;
                if ("auto" === this.parameters.shiftedBackgroundAnimation ? t.hasLayers() ? y = !0 : x = !0 : y = !0, this._currentBackgroundAnimation && y) {
                    var b = S.outDuration - S.extraDelay;
                    b > 0 && this.timeline.shiftChildren(b), this._currentBackgroundAnimation.shiftedPreSetup && this._currentBackgroundAnimation._preSetup()
                } else x && (S.extraDelay > 0 && this.timeline.shiftChildren(S.extraDelay), this._currentBackgroundAnimation.shiftedPreSetup && this._currentBackgroundAnimation._preSetup())
            } else S.outDelay += .1;
            if (this.timeline.to(h, S.outDuration, d, S.outDelay), this.isTouch && this.isReverseAllowed)
                if (n ? this.slider.blockCarousel && this.slider.isChangeCarousel("next") || (p = t.getNext()) : this.slider.blockCarousel && this.slider.isChangeCarousel("previous") || (p = t.getPrevious()), p && p !== i) {
                    this.reverseSlideIndex = p.index, this.enableReverseMode(), r.push(p), "vertical" === s && this.showSlide(p);
                    var D = p.SMWs,
                        z = {};
                    z[c] = l, a.MW.R(D, z);
                    var A = {},
                        I = {
                            snap: "x,y",
                            ease: this.getEase()
                        },
                        w = {},
                        C = {
                            snap: "x,y",
                            ease: this.getEase()
                        };
                    I[c] = 0, A[c] = -l, C[c] = l, w[c] = 0, p.G("mainAnimationStartIn", {
                        mainAnimation: this,
                        previousSlideIndex: t.index,
                        currentSlideIndex: p.index,
                        isSystem: !1
                    }), this.reverseTimeline.paused(!0), this.reverseTimeline.eventCallback("onComplete", this.onBackwardChangeToComplete.bind(this), [t, p, !1]), this.reverseTimeline.fromTo(D, S.inDuration, A, I, S.inDelay), this.reverseTimeline.fromTo(h, S.inDuration, w, C, S.inDelay)
                } else this.reverseSlideIndex = null;
            u(this.sliderElement, "mainAnimationComplete", function(e) {
                var t = this.slider.slides[e.detail.previousSlideIndex],
                    i = this.slider.slides[e.detail.currentSlideIndex];
                a.MW.R(t.SMWs, {
                    zIndex: ""
                }), a.MW.R(i.SMWs, {
                    zIndex: ""
                })
            }.bind(this)), this.slider.updateInsideSlides(r)
        }, t.prototype.getExtraDelay = function() {
            return 0
        }, t.prototype.adjustMainAnimation = function() {
            var t = this.parameters.duration,
                i = this.parameters.delay,
                s = this.timeline.totalDuration(),
                n = this.getExtraDelay();
            if (s > 0) {
                var h = t + i;
                if (!(h > (s -= .05))) return {
                    inDuration: t,
                    outDuration: t,
                    inDelay: s - t,
                    outDelay: n,
                    extraDelay: n
                };
                t = t * s / h, (i = i * s / h) < n && (t -= n - i, i = n)
            } else i += n;
            return {
                inDuration: t,
                outDuration: t,
                inDelay: i,
                outDelay: i,
                extraDelay: n
            }
        }, t.prototype.hasBackgroundAnimation = function() {
            return !1
        }, t
    })), a.d("SmartSliderResponsiveSimple", ["SmartSliderResponsive"], (function() {
        function t() {
            this.round = 1, a.SmartSliderResponsive.prototype.constructor.apply(this, arguments), this.H = this.sliderElement.classList.contains("n2-ss-full-page--constrain-ratio"), this.mainAnimation = this.slider.mainAnimation
        }
        return t.prototype = Object.create(a.SmartSliderResponsive.prototype), t.prototype.constructor = t, t.prototype.init = function() {
            a.SmartSliderResponsive.prototype.init.call(this), this._cacheEl = {
                slider: this.sliderElement.querySelector(".n2-ss-slider-wrapper-inside") || this.sliderElement,
                "n2-ss-slider-2": this.sliderElement.querySelector(".n2-ss-slider-2"),
                "n2-ss-slider-3": this.sliderElement.querySelector(".n2-ss-slider-3")
            }, this._cacheEl["n2-ss-slider-3"].addEventListener("scroll", (function(e) {
                e.currentTarget.scrollTop = 0, e.currentTarget.scrollLeft = 0
            }), {
                capture: !0
            })
        }, t.prototype.calculateResponsiveValues = function() {
            var t = this.slider.visibleRealSlides[0].element,
                i = t.getBoundingClientRect();
            this.resizeContext.slideSelfWidth = i.width, this.resizeContext.slideSelfHeight = i.height;
            var s = t.querySelector(".n2-ss-layers-container").getBoundingClientRect();
            this.resizeContext.slideWidth = s.width, this.resizeContext.slideHeight = s.height;
            var n = this._cacheEl.slider.getBoundingClientRect();
            this.resizeContext.sliderWidth = n.width, this.resizeContext.sliderHeight = n.height;
            var h = this._cacheEl["n2-ss-slider-3"].getBoundingClientRect();
            if (this.resizeContext.slideOuterWidth = h.width, this.resizeContext.slideOuterHeight = h.height, a.SmartSliderResponsive.prototype.calculateResponsiveValues.call(this), this.H) {
                var o = (this.resizeContext.sliderWidth - this.resizeContext.slideWidth) / -2 + "px",
                    r = (this.resizeContext.sliderHeight - this.resizeContext.slideHeight) / -2 + "px";
                a.MW.k(this._cacheEl.slider)["--ss-clip-path"] = "inset(" + r + " " + o + " " + r + " " + o + ")"
            }
        }, t.prototype.onStarterSlide = function(t) {
            this.slider.slides.forEach((function(t) {
                t.SMWs = [a.MW.k(t.element, {
                    x: "-10000px"
                })], t.background && t.SMWs.push(a.MW.k(t.background.element, {
                    x: "-10000px"
                }))
            })), a.SmartSliderResponsive.prototype.onStarterSlide.apply(this, arguments), this.mainAnimation.setActiveSlide(this.slider.currentSlide)
        }, t
    })), a.d("SmartSliderSimple", ["SmartSliderAbstract"], (function() {
        function t(t, i) {
            this.type = "simple", a.SmartSliderAbstract.prototype.constructor.call(this, t, o({
                bgAnimations: 0,
                carousel: 1
            }, i))
        }
        return t.prototype = Object.create(a.SmartSliderAbstract.prototype), t.prototype.constructor = t, t.prototype.initResponsiveMode = function() {
            this.responsive = new a.SmartSliderResponsiveSimple(this, this.parameters.responsive), this.responsive.start(), a.SmartSliderAbstract.prototype.initResponsiveMode.call(this)
        }, t.prototype.initMainAnimation = function() {
            !this.disabled.backgroundAnimations && this.parameters.bgAnimations ? this.mainAnimation = new a.SmartSliderFrontendBackgroundAnimation(this, this.parameters.mainanimation, this.parameters.bgAnimations) : this.mainAnimation = new a.SmartSliderMainAnimationSimple(this, this.parameters.mainanimation)
        }, t.prototype.afterRawSlidesReady = function() {
            if (this.parameters.postBackgroundAnimations && this.parameters.postBackgroundAnimations.slides) {
                for (var t = 0; t < this.slides.length; t++) this.slides[t].postBackgroundAnimation = this.parameters.postBackgroundAnimations.slides[t];
                delete this.parameters.postBackgroundAnimations.slides
            }
            if (this.parameters.bgAnimations && this.parameters.bgAnimations.slides) {
                for (var i = 0; i < this.slides.length; i++) this.slides[i].backgroundAnimation = this.parameters.bgAnimations.slides[i];
                delete this.parameters.bgAnimations.slides
            }
        }, t.prototype.forceSetActiveSlide = function(t) {
            t.setActive(), this.mainAnimation.showSlide(t)
        }, t.prototype.forceUnsetActiveSlide = function(t) {
            t.unsetActive(), this.mainAnimation.hideSlide(t)
        }, t.prototype.getAnimationAxis = function() {
            switch (this.mainAnimation.parameters.type) {
                case "vertical":
                case "vertical-reversed":
                    return "vertical"
            }
            return "horizontal"
        }, t
    })), a.d("ss-simple", ["SmartSliderSimple", "SmartSliderResponsiveSimple", "SmartSliderMainAnimationSimple"])
}(window);
// source --> https://zoewellness.com/wp-content/plugins/smart-slider-3/Public/SmartSlider3/Widget/Arrow/ArrowImage/Assets/dist/w-arrow-image.min.js?ver=40b842f2 
! function(t) {
    var n = t;
    n._N2 = n._N2 || {
        _r: [],
        _d: [],
        r: function() {
            this._r.push(arguments)
        },
        d: function() {
            this._d.push(arguments)
        }
    };
    var i = t.document,
        o = (i.documentElement, t.setTimeout),
        c = t.clearTimeout,
        r = n._N2;
    t.requestAnimationFrame, Object.assign, navigator.userAgent.indexOf("+http://www.google.com/bot.html") > -1 || n.requestIdleCallback, n.cancelIdleCallback;
    ! function(t) {
        if ("complete" === i.readyState || "interactive" === i.readyState) t();
        else if (Document && Document.prototype && Document.prototype.addEventListener && Document.prototype.addEventListener !== i.addEventListener) {
            const n = () => {
                t(), t = () => {}
            };
            i.addEventListener("DOMContentLoaded", n), i.addEventListener("readystatechange", (() => {
                "complete" !== i.readyState && "interactive" !== i.readyState || n()
            })), Document.prototype.addEventListener.call(i, "DOMContentLoaded", n)
        } else i.addEventListener("DOMContentLoaded", t)
    }((function() {
        i.body
    })), r.d("SmartSliderWidgetArrowImage", "SmartSliderWidget", (function() {
        function t(t, n, i) {
            this.Dt = i, r.SmartSliderWidget.prototype.constructor.call(this, n, t, "#" + n.elementID + "-arrow-" + t)
        }
        return t.prototype = Object.create(r.SmartSliderWidget.prototype), t.prototype.constructor = t, t.prototype.onStart = function() {
                var t, n, i, o;
                t = this.widget, n = "click", i = function(e) {
                    e.stopPropagation(), this.slider[this.Dt]()
                }.bind(this), o = o || {}, t.addEventListener(n, i, o)
            },
            function(n) {
                this.key = "arrow", this.previous = new t("previous", n, "previousWithDirection"), this.next = new t("next", n, "nextWithDirection")
            }
    }))
}(window);
// source --> https://zoewellness.com/wp-content/plugins/smart-slider-3/Public/SmartSlider3/Widget/Bullet/Assets/dist/w-bullet.min.js?ver=40b842f2 
! function(t) {
    var i = t;
    i._N2 = i._N2 || {
        _r: [],
        _d: [],
        r: function() {
            this._r.push(arguments)
        },
        d: function() {
            this._d.push(arguments)
        }
    };
    var n, s = t.document,
        o = (s.documentElement, t.setTimeout),
        a = t.clearTimeout,
        r = i._N2,
        h = (t.requestAnimationFrame, function(t, i = null, n = null, o = null) {
            const a = s.createElement(t);
            return i && ("string" == typeof i ? g(a, i) : v(a, i)), n && l(a, n), o && d(a, o), a
        }),
        c = function(t, i, n) {
            return h("div", t, i, n)
        },
        u = (Object.assign, function(t, i, n) {
            t.setAttribute(i, n)
        }),
        l = function(t, i) {
            for (var n in i) u(t, n, i[n])
        },
        f = function(t, i) {
            t.removeAttribute(i)
        },
        p = function(t, i, n) {
            t.dataset[i] = n
        },
        d = function(t, i) {
            for (let n in i) p(t, n, i[n])
        },
        m = function(t, i, n) {
            t.style.setProperty(i, n)
        },
        b = function(t, i) {
            for (var n in i) m(t, n, i[n])
        },
        g = function(t, i) {
            t.classList.add(i)
        },
        v = function(t, i) {
            i.forEach((function(i) {
                t.classList.add(i)
            }))
        },
        x = function(t, i) {
            t.classList.remove(i)
        },
        w = function(t, i, n, s) {
            s = s || {}, t.addEventListener(i, n, s)
        };
    navigator.userAgent.indexOf("+http://www.google.com/bot.html") > -1 || i.requestIdleCallback, i.cancelIdleCallback;
    ! function(t) {
        if ("complete" === s.readyState || "interactive" === s.readyState) t();
        else if (Document && Document.prototype && Document.prototype.addEventListener && Document.prototype.addEventListener !== s.addEventListener) {
            const i = () => {
                t(), t = () => {}
            };
            s.addEventListener("DOMContentLoaded", i), s.addEventListener("readystatechange", (() => {
                "complete" !== s.readyState && "interactive" !== s.readyState || i()
            })), Document.prototype.addEventListener.call(s, "DOMContentLoaded", i)
        } else s.addEventListener("DOMContentLoaded", t)
    }((function() {
        s.body
    })), r.d("SmartSliderWidgetBulletTransition", "SmartSliderWidget", (function() {
        function t(t, i) {
            this.parameters = i, r.SmartSliderWidget.prototype.constructor.call(this, t, "bullet", ".n2-ss-control-bullet")
        }
        return t.prototype = Object.create(r.SmartSliderWidget.prototype), t.prototype.constructor = t, t.prototype.onStart = function() {
            switch (this.hasDots = !0, this.axis = "horizontal", this.bar = this.widget.querySelector(".nextend-bullet-bar"), this.parameters.area) {
                case 5:
                case 8:
                    this.axis = "vertical"
            }
            this.slider.stages.done("BeforeShow", this.onBeforeShow.bind(this))
        }, t.prototype.onBeforeShow = function() {
            if (this.onVisibleSlidesChanged(), this.hasDots) {
                var t = this.slider.currentSlide.ssdot;
                g(t, "n2-active"), f(t, "tabindex"), u(t, "aria-current", "true")
            }
            w(this.slider.sliderElement, "SlideWillChange", this.onSlideSwitch.bind(this)), w(this.slider.sliderElement, "visibleSlidesChanged", this.onVisibleSlidesChanged.bind(this))
        }, t.prototype.onSlideSwitch = function(e) {
            if (this.hasDots) {
                for (var t, i = 0; i < this._dots.length; i++) t = this._dots[i], x(t, "n2-active"), u(t, "tabindex", 0), f(t, "aria-current");
                t = e.detail.targetSlide.ssdot || e.detail.targetSlide.group.ssdot, g(t, "n2-active"), f(t, "tabindex"), u(t, "aria-current", "true")
            }
        }, t.prototype.showThumbnail = function(t, e) {
            var i, n, s, o = this.getThumbnail(t);
            r.W.to(r.MW.k(o), .3, {
                opacity: 1
            }), i = t.ssdot, n = "universalleave", s = this.hideThumbnail.bind(this, o), i.addEventListener(n, s, {
                once: !0
            })
        }, t.prototype.hideThumbnail = function(t, e) {
            e.stopPropagation(), r.W.to(r.MW.k(t), .3, {
                opacity: 0,
                onComplete: function() {
                    t.remove()
                }
            })
        }, t.prototype.getThumbnail = function(t) {
            var n = t.ssdot,
                s = this.slider.sliderElement.getBoundingClientRect(),
                o = n.getBoundingClientRect(),
                a = c(),
                h = c();
            h.className = "n2-ss-bullet-thumbnail", b(h, {
                width: this.parameters.thumbnailWidth + "px",
                height: this.parameters.thumbnailHeight + "px",
                "background-image": 'url("' + t.getThumbnail() + '")'
            }), a.appendChild(h), r.MW.k(a).opacity = 0, a.className = this.parameters.thumbnailStyle + " n2-ss-bullet-thumbnail-container", this.slider.sliderElement.appendChild(a);
            var u = i.getComputedStyle(a),
                l = a.getBoundingClientRect();
            switch (this.parameters.thumbnailPosition) {
                case "right":
                    b(a, {
                        left: o.left - s.left + o.width - parseInt(u.getPropertyValue("margin-left")) - parseInt(u.getPropertyValue("margin-right")) + "px",
                        top: o.top - s.top + o.height / 2 - l.height / 2 + "px"
                    });
                    break;
                case "left":
                    b(a, {
                        left: o.left - s.left - l.width - parseInt(u.getPropertyValue("margin-left")) - parseInt(u.getPropertyValue("margin-right")) + "px",
                        top: o.top - s.top + o.height / 2 - l.height / 2 + "px"
                    });
                    break;
                case "top":
                    b(a, {
                        left: o.left - s.left + o.width / 2 - l.width / 2 + "px",
                        top: o.top - s.top - l.height - parseInt(u.getPropertyValue("margin-top")) - parseInt(u.getPropertyValue("margin-bottom")) + "px"
                    });
                    break;
                case "bottom":
                    b(a, {
                        left: o.left - s.left + o.width / 2 - l.width / 2 + "px",
                        top: o.top - s.top + o.height - parseInt(u.getPropertyValue("margin-top")) - parseInt(u.getPropertyValue("margin-bottom")) + "px"
                    })
            }
            return a
        }, t.prototype.onVisibleSlidesChanged = function() {
            if (this._dotsOuter !== n && this._dotsOuter.forEach((function(t) {
                    ! function(t) {
                        t && t.parentNode && t.parentNode.removeChild(t)
                    }(t)
                })), this.bar.innerText = "", this.slider.visibleSlides.length <= 1) this.hasDots = !1;
            else {
                this.hasDots = !0, this._dots = [], this._dotsOuter = [];
                for (var t = 0; t < this.slider.visibleSlides.length; t++) {
                    var i = this.slider.visibleSlides[t],
                        s = c(),
                        o = c();
                    switch (o.className = "n2-bullet " + this.parameters.dotClasses, l(o, {
                        tabindex: 0,
                        role: "button",
                        "aria-label": i.getTitle()
                    }), s.appendChild(o), this.bar.appendChild(s), "mouseenter" === this.parameters.action ? new r.UniversalEnter(o, this.onDotClick.bind(this, i)) : new r.UniversalClick(o, this.onDotClick.bind(this, i)), w(s, "n2Activate", this.onDotClick.bind(this, i)), this._dotsOuter.push(s), i.ssdot = o, this._dots.push(o), this.parameters.mode) {
                        case "numeric":
                            o.innerText = t + 1;
                            break;
                        case "title":
                            o.innerText = i.getTitle()
                    }
                    if (1 === this.parameters.thumbnail) i.getThumbnail() && new r.UniversalEnter(o, this.showThumbnail.bind(this, i), {
                        leaveOnSecond: !0
                    })
                }
                this.onSlideSwitch({
                    detail: {
                        targetSlide: this.slider.currentRealSlide
                    }
                })
            }
            this.slider.widgets.onAdvancedVariableWidgetChanged(this.key)
        }, t.prototype.onDotClick = function(t, e) {
            this.slider.directionalChangeTo(t.index)
        }, t
    }))
}(window);