/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (E, w, Va) {
  'use strict';
  function ya(a, b, c) {
    if (!a) throw Ka("areq", b || "?", c || "required");return a;
  }function za(a, b) {
    if (!a && !b) return "";if (!a) return b;if (!b) return a;ba(a) && (a = a.join(" "));ba(b) && (b = b.join(" "));return a + " " + b;
  }function La(a) {
    var b = {};a && (a.to || a.from) && (b.to = a.to, b.from = a.from);return b;
  }function V(a, b, c) {
    var d = "";a = ba(a) ? a : a && I(a) && a.length ? a.split(/\s+/) : [];q(a, function (a, f) {
      a && 0 < a.length && (d += 0 < f ? " " : "", d += c ? b + a : a + b);
    });return d;
  }function Ma(a) {
    if (a instanceof H) switch (a.length) {case 0:
        return [];
      case 1:
        if (1 === a[0].nodeType) return a;break;default:
        return H(ga(a));}if (1 === a.nodeType) return H(a);
  }function ga(a) {
    if (!a[0]) return a;for (var b = 0; b < a.length; b++) {
      var c = a[b];if (1 == c.nodeType) return c;
    }
  }function Na(a, b, c) {
    q(b, function (b) {
      a.addClass(b, c);
    });
  }function Oa(a, b, c) {
    q(b, function (b) {
      a.removeClass(b, c);
    });
  }function Q(a) {
    return function (b, c) {
      c.addClass && (Na(a, b, c.addClass), c.addClass = null);c.removeClass && (Oa(a, b, c.removeClass), c.removeClass = null);
    };
  }function oa(a) {
    a = a || {};if (!a.$$prepared) {
      var b = a.domOperation || O;a.domOperation = function () {
        a.$$domOperationFired = !0;b();b = O;
      };a.$$prepared = !0;
    }return a;
  }function ha(a, b) {
    Aa(a, b);Ba(a, b);
  }function Aa(a, b) {
    b.from && (a.css(b.from), b.from = null);
  }function Ba(a, b) {
    b.to && (a.css(b.to), b.to = null);
  }function T(a, b, c) {
    var d = b.options || {};c = c.options || {};var e = (d.addClass || "") + " " + (c.addClass || ""),
        f = (d.removeClass || "") + " " + (c.removeClass || "");a = Pa(a.attr("class"), e, f);c.preparationClasses && (d.preparationClasses = W(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
    e = d.domOperation !== O ? d.domOperation : null;Ca(d, c);e && (d.domOperation = e);d.addClass = a.addClass ? a.addClass : null;d.removeClass = a.removeClass ? a.removeClass : null;b.addClass = d.addClass;b.removeClass = d.removeClass;return d;
  }function Pa(a, b, c) {
    function d(a) {
      I(a) && (a = a.split(" "));var b = {};q(a, function (a) {
        a.length && (b[a] = !0);
      });return b;
    }var e = {};a = d(a);b = d(b);q(b, function (a, b) {
      e[b] = 1;
    });c = d(c);q(c, function (a, b) {
      e[b] = 1 === e[b] ? null : -1;
    });var f = { addClass: "", removeClass: "" };q(e, function (b, c) {
      var d, e;1 === b ? (d = "addClass", e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]);e && (f[d].length && (f[d] += " "), f[d] += c);
    });return f;
  }function A(a) {
    return a instanceof w.element ? a[0] : a;
  }function Qa(a, b, c) {
    var d = "";b && (d = V(b, "ng-", !0));c.addClass && (d = W(d, V(c.addClass, "-add")));c.removeClass && (d = W(d, V(c.removeClass, "-remove")));d.length && (c.preparationClasses = d, a.addClass(d));
  }function pa(a, b) {
    var c = b ? "-" + b + "s" : "";la(a, [ma, c]);return [ma, c];
  }function ra(a, b) {
    var c = b ? "paused" : "",
        d = X + "PlayState";la(a, [d, c]);return [d, c];
  }function la(a, b) {
    a.style[b[0]] = b[1];
  }function W(a, b) {
    return a ? b ? a + " " + b : a : b;
  }function Da(a, b, c) {
    var d = Object.create(null),
        e = a.getComputedStyle(b) || {};q(c, function (a, b) {
      var c = e[a];if (c) {
        var F = c.charAt(0);if ("-" === F || "+" === F || 0 <= F) c = Ra(c);0 === c && (c = null);d[b] = c;
      }
    });return d;
  }function Ra(a) {
    var b = 0;a = a.split(/\s*,\s*/);q(a, function (a) {
      "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));a = parseFloat(a) || 0;b = b ? Math.max(a, b) : a;
    });return b;
  }function sa(a) {
    return 0 === a || null != a;
  }function Ea(a, b) {
    var c = R,
        d = a + "s";b ? c += "Duration" : d += " linear all";
    return [c, d];
  }function Fa() {
    var a = Object.create(null);return { flush: function () {
        a = Object.create(null);
      }, count: function (b) {
        return (b = a[b]) ? b.total : 0;
      }, get: function (b) {
        return (b = a[b]) && b.value;
      }, put: function (b, c) {
        a[b] ? a[b].total++ : a[b] = { total: 1, value: c };
      } };
  }function Ga(a, b, c) {
    q(c, function (c) {
      a[c] = Y(a[c]) ? a[c] : b.style.getPropertyValue(c);
    });
  }var O = w.noop,
      Ha = w.copy,
      Ca = w.extend,
      H = w.element,
      q = w.forEach,
      ba = w.isArray,
      I = w.isString,
      ca = w.isObject,
      N = w.isUndefined,
      Y = w.isDefined,
      Ia = w.isFunction,
      ta = w.isElement,
      R,
      ua,
      X,
      va;N(E.ontransitionend) && Y(E.onwebkittransitionend) ? (R = "WebkitTransition", ua = "webkitTransitionEnd transitionend") : (R = "transition", ua = "transitionend");N(E.onanimationend) && Y(E.onwebkitanimationend) ? (X = "WebkitAnimation", va = "webkitAnimationEnd animationend") : (X = "animation", va = "animationend");var qa = X + "Delay",
      wa = X + "Duration",
      ma = R + "Delay";E = R + "Duration";var Ka = w.$$minErr("ng"),
      Sa = { transitionDuration: E, transitionDelay: ma, transitionProperty: R + "Property", animationDuration: wa, animationDelay: qa, animationIterationCount: X + "IterationCount" },
      Ta = { transitionDuration: E, transitionDelay: ma, animationDuration: wa, animationDelay: qa };w.module("ngAnimate", []).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
    return { restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function (b, d, e, f, r) {
        var x, F;b.$watchCollection(e.ngAnimateSwap || e["for"], function (e) {
          x && a.leave(x);F && (F.$destroy(), F = null);if (e || 0 === e) F = b.$new(), r(F, function (b) {
            x = b;a.enter(b, null, d);
          });
        });
      } };
  }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
    return { link: function (b, c, d) {
        function e(a) {
          c.data("$$ngAnimateChildren", "on" === a || "true" === a);
        }var f = d.ngAnimateChildren;w.isString(f) && 0 === f.length ? c.data("$$ngAnimateChildren", !0) : (e(a(f)(b)), d.$observe("ngAnimateChildren", e));
      } };
  }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
    function b(a) {
      d = d.concat(a);c();
    }function c() {
      if (d.length) {
        for (var b = d.shift(), r = 0; r < b.length; r++) b[r]();e || a(function () {
          e || c();
        });
      }
    }var d, e;d = b.queue = [];b.waitUntilQuiet = function (b) {
      e && e();e = a(function () {
        e = null;b();c();
      });
    };return b;
  }]).provider("$$animateQueue", ["$animateProvider", function (a) {
    function b(a) {
      if (!a) return null;a = a.split(" ");var b = Object.create(null);q(a, function (a) {
        b[a] = !0;
      });return b;
    }function c(a, c) {
      if (a && c) {
        var d = b(c);return a.split(" ").some(function (a) {
          return d[a];
        });
      }
    }function d(a, b, c, d) {
      return f[a].some(function (a) {
        return a(b, c, d);
      });
    }function e(a, b) {
      var c = 0 < (a.addClass || "").length,
          d = 0 < (a.removeClass || "").length;return b ? c && d : c || d;
    }var f = this.rules = { skip: [], cancel: [], join: [] };f.join.push(function (a, b, c) {
      return !b.structural && e(b);
    });f.skip.push(function (a, b, c) {
      return !b.structural && !e(b);
    });f.skip.push(function (a, b, c) {
      return "leave" == c.event && b.structural;
    });f.skip.push(function (a, b, c) {
      return c.structural && 2 === c.state && !b.structural;
    });f.cancel.push(function (a, b, c) {
      return c.structural && b.structural;
    });f.cancel.push(function (a, b, c) {
      return 2 === c.state && b.structural;
    });f.cancel.push(function (a, b, d) {
      if (d.structural) return !1;a = b.addClass;b = b.removeClass;var e = d.addClass;d = d.removeClass;return N(a) && N(b) || N(e) && N(d) ? !1 : c(a, d) || c(b, e);
    });this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (b, c, f, u, l, w, s, M, v, h) {
      function P() {
        var a = !1;return function (b) {
          a ? b() : c.$$postDigest(function () {
            a = !0;b();
          });
        };
      }function y(a, b, c) {
        var g = A(b),
            d = A(a),
            k = [];(a = G[c]) && q(a, function (a) {
          t.call(a.node, g) ? k.push(a.callback) : "leave" === c && t.call(a.node, d) && k.push(a.callback);
        });return k;
      }function k(a, g, k) {
        function m(c, g, d, k) {
          F(function () {
            var c = y(J, a, g);c.length && b(function () {
              q(c, function (b) {
                b(a, d, k);
              });
            });
          });c.progress(g, d, k);
        }function G(b) {
          var c = a,
              g = h;g.preparationClasses && (c.removeClass(g.preparationClasses), g.preparationClasses = null);g.activeClasses && (c.removeClass(g.activeClasses), g.activeClasses = null);Ja(a, h);ha(a, h);h.domOperation();f.complete(!b);
        }var h = Ha(k),
            t,
            J;if (a = Ma(a)) t = A(a), J = a.parent();var h = oa(h),
            f = new s(),
            F = P();ba(h.addClass) && (h.addClass = h.addClass.join(" "));h.addClass && !I(h.addClass) && (h.addClass = null);ba(h.removeClass) && (h.removeClass = h.removeClass.join(" "));h.removeClass && !I(h.removeClass) && (h.removeClass = null);h.from && !ca(h.from) && (h.from = null);h.to && !ca(h.to) && (h.to = null);if (!t) return G(), f;k = [t.className, h.addClass, h.removeClass].join(" ");if (!Ua(k)) return G(), f;var v = 0 <= ["enter", "move", "leave"].indexOf(g),
            l = !K || u[0].hidden || C.get(t);k = !l && z.get(t) || {};var Z = !!k.state;l || Z && 1 == k.state || (l = !n(a, J, g));if (l) return G(), f;v && xa(a);l = { structural: v, element: a, event: g, addClass: h.addClass, removeClass: h.removeClass, close: G, options: h, runner: f };if (Z) {
          if (d("skip", a, l, k)) {
            if (2 === k.state) return G(), f;T(a, k, l);return k.runner;
          }if (d("cancel", a, l, k)) {
            if (2 === k.state) k.runner.end();else if (k.structural) k.close();else return T(a, k, l), k.runner;
          } else if (d("join", a, l, k)) if (2 === k.state) T(a, l, {});else return Qa(a, v ? g : null, h), g = l.event = k.event, h = T(a, k, l), k.runner;
        } else T(a, l, {});(Z = l.structural) || (Z = "animate" === l.event && 0 < Object.keys(l.options.to || {}).length || e(l));if (!Z) return G(), ka(a), f;var M = (k.counter || 0) + 1;l.counter = M;D(a, 1, l);c.$$postDigest(function () {
          var b = z.get(t),
              c = !b,
              b = b || {},
              d = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || e(b));if (c || b.counter !== M || !d) {
            c && (Ja(a, h), ha(a, h));if (c || v && b.event !== g) h.domOperation(), f.end();d || ka(a);
          } else g = !b.structural && e(b, !0) ? "setClass" : b.event, D(a, 2), b = w(a, g, b.options), b.done(function (b) {
            G(!b);(b = z.get(t)) && b.counter === M && ka(A(a));m(f, g, "close", {});
          }), f.setHost(b), m(f, g, "start", {});
        });return f;
      }function xa(a) {
        a = A(a).querySelectorAll("[data-ng-animate]");q(a, function (a) {
          var b = parseInt(a.getAttribute("data-ng-animate")),
              c = z.get(a);
          if (c) switch (b) {case 2:
              c.runner.end();case 1:
              z.remove(a);}
        });
      }function ka(a) {
        a = A(a);a.removeAttribute("data-ng-animate");z.remove(a);
      }function J(a, b) {
        return A(a) === A(b);
      }function n(a, b, c) {
        c = H(u[0].body);var g = J(a, c) || "HTML" === a[0].nodeName,
            d = J(a, f),
            k = !1,
            h,
            m = C.get(A(a));(a = H.data(a[0], "$ngAnimatePin")) && (b = a);for (b = A(b); b;) {
          d || (d = J(b, f));if (1 !== b.nodeType) break;a = z.get(b) || {};if (!k) {
            var e = C.get(b);if (!0 === e && !1 !== m) {
              m = !0;break;
            } else !1 === e && (m = !1);k = a.structural;
          }if (N(h) || !0 === h) a = H.data(b, "$$ngAnimateChildren"), Y(a) && (h = a);if (k && !1 === h) break;g || (g = J(b, c));if (g && d) break;if (!d && (a = H.data(b, "$ngAnimatePin"))) {
            b = A(a);continue;
          }b = b.parentNode;
        }return (!k || h) && !0 !== m && d && g;
      }function D(a, b, c) {
        c = c || {};c.state = b;a = A(a);a.setAttribute("data-ng-animate", b);c = (b = z.get(a)) ? Ca(b, c) : c;z.put(a, c);
      }var z = new l(),
          C = new l(),
          K = null,
          g = c.$watch(function () {
        return 0 === M.totalPendingRequests;
      }, function (a) {
        a && (g(), c.$$postDigest(function () {
          c.$$postDigest(function () {
            null === K && (K = !0);
          });
        }));
      }),
          G = {},
          m = a.classNameFilter(),
          Ua = m ? function (a) {
        return m.test(a);
      } : function () {
        return !0;
      },
          Ja = Q(v),
          t = Node.prototype.contains || function (a) {
        return this === a || !!(this.compareDocumentPosition(a) & 16);
      },
          Z = { on: function (a, b, c) {
          var g = ga(b);G[a] = G[a] || [];G[a].push({ node: g, callback: c });H(b).on("$destroy", function () {
            Z.off(a, b, c);
          });
        }, off: function (a, b, c) {
          function g(a, b, c) {
            var d = ga(b);return a.filter(function (a) {
              return !(a.node === d && (!c || a.callback === c));
            });
          }var d = G[a];d && (G[a] = 1 === arguments.length ? null : g(d, b, c));
        }, pin: function (a, b) {
          ya(ta(a), "element", "not an element");ya(ta(b), "parentElement", "not an element");a.data("$ngAnimatePin", b);
        }, push: function (a, b, c, g) {
          c = c || {};c.domOperation = g;return k(a, b, c);
        }, enabled: function (a, b) {
          var c = arguments.length;if (0 === c) b = !!K;else if (ta(a)) {
            var g = A(a),
                d = C.get(g);1 === c ? b = !d : C.put(g, !b);
          } else b = K = !!a;return b;
        } };return Z;
    }];
  }]).provider("$$animation", ["$animateProvider", function (a) {
    function b(a) {
      return a.data("$$animationRunner");
    }var c = this.drivers = [];this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, e, f, r, x, F) {
      function u(a) {
        function b(a) {
          if (a.processed) return a;a.processed = !0;var d = a.domNode,
              h = d.parentNode;e.put(d, a);for (var f; h;) {
            if (f = e.get(h)) {
              f.processed || (f = b(f));break;
            }h = h.parentNode;
          }(f || c).children.push(a);return a;
        }var c = { children: [] },
            d,
            e = new x();for (d = 0; d < a.length; d++) {
          var f = a[d];e.put(f.domNode, a[d] = { domNode: f.domNode, fn: f.fn, children: [] });
        }for (d = 0; d < a.length; d++) b(a[d]);return function (a) {
          var b = [],
              c = [],
              d;for (d = 0; d < a.children.length; d++) c.push(a.children[d]);a = c.length;var h = 0,
              e = [];for (d = 0; d < c.length; d++) {
            var f = c[d];0 >= a && (a = h, h = 0, b.push(e), e = []);e.push(f.fn);f.children.forEach(function (a) {
              h++;c.push(a);
            });a--;
          }e.length && b.push(e);return b;
        }(c);
      }var l = [],
          w = Q(a);return function (s, x, v) {
        function h(a) {
          a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");var b = [];q(a, function (a) {
            var c = a.getAttribute("ng-animate-ref");c && c.length && b.push(a);
          });return b;
        }function P(a) {
          var b = [],
              c = {};q(a, function (a, g) {
            var d = A(a.element),
                k = 0 <= ["enter", "move"].indexOf(a.event),
                d = a.structural ? h(d) : [];if (d.length) {
              var e = k ? "to" : "from";q(d, function (a) {
                var b = a.getAttribute("ng-animate-ref");c[b] = c[b] || {};c[b][e] = { animationID: g, element: H(a) };
              });
            } else b.push(a);
          });var d = {},
              k = {};q(c, function (c, h) {
            var e = c.from,
                f = c.to;if (e && f) {
              var m = a[e.animationID],
                  C = a[f.animationID],
                  n = e.animationID.toString();if (!k[n]) {
                var D = k[n] = { structural: !0, beforeStart: function () {
                    m.beforeStart();C.beforeStart();
                  }, close: function () {
                    m.close();C.close();
                  }, classes: y(m.classes, C.classes), from: m, to: C, anchors: [] };D.classes.length ? b.push(D) : (b.push(m), b.push(C));
              }k[n].anchors.push({ out: e.element, "in": f.element });
            } else e = e ? e.animationID : f.animationID, f = e.toString(), d[f] || (d[f] = !0, b.push(a[e]));
          });return b;
        }function y(a, b) {
          a = a.split(" ");b = b.split(" ");for (var c = [], d = 0; d < a.length; d++) {
            var k = a[d];if ("ng-" !== k.substring(0, 3)) for (var e = 0; e < b.length; e++) if (k === b[e]) {
              c.push(k);break;
            }
          }return c.join(" ");
        }function k(a) {
          for (var b = c.length - 1; 0 <= b; b--) {
            var d = c[b];if (f.has(d) && (d = f.get(d)(a))) return d;
          }
        }function xa(a, c) {
          a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c);
        }function ka() {
          var a = b(s);!a || "leave" === x && v.$$domOperationFired || a.end();
        }function J(b) {
          s.off("$destroy", ka);s.removeData("$$animationRunner");w(s, v);ha(s, v);v.domOperation();C && a.removeClass(s, C);s.removeClass("ng-animate");D.complete(!b);
        }v = oa(v);var n = 0 <= ["enter", "move", "leave"].indexOf(x),
            D = new r({ end: function () {
            J();
          }, cancel: function () {
            J(!0);
          } });if (!c.length) return J(), D;s.data("$$animationRunner", D);var z = za(s.attr("class"), za(v.addClass, v.removeClass)),
            C = v.tempClasses;C && (z += " " + C, v.tempClasses = null);var K;n && (K = "ng-" + x + "-prepare", a.addClass(s, K));l.push({ element: s, classes: z, event: x, structural: n, options: v, beforeStart: function () {
            s.addClass("ng-animate");C && a.addClass(s, C);K && (a.removeClass(s, K), K = null);
          }, close: J });s.on("$destroy", ka);if (1 < l.length) return D;e.$$postDigest(function () {
          var a = [];q(l, function (c) {
            b(c.element) ? a.push(c) : c.close();
          });l.length = 0;var c = P(a),
              d = [];q(c, function (a) {
            d.push({ domNode: A(a.from ? a.from.element : a.element), fn: function () {
                a.beforeStart();
                var c,
                    d = a.close;if (b(a.anchors ? a.from.element || a.to.element : a.element)) {
                  var g = k(a);g && (c = g.start);
                }c ? (c = c(), c.done(function (a) {
                  d(!a);
                }), xa(a, c)) : d();
              } });
          });F(u(d));
        });return D;
      };
    }];
  }]).provider("$animateCss", ["$animateProvider", function (a) {
    var b = Fa(),
        c = Fa();this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, e, f, r, x, F, u, l) {
      function w(a, b) {
        var c = a.parentNode;return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++P)) + "-" + a.getAttribute("class") + "-" + b;
      }function s(k, h, f, l) {
        var n;0 < b.count(f) && (n = c.get(f), n || (h = V(h, "-stagger"), e.addClass(k, h), n = Da(a, k, l), n.animationDuration = Math.max(n.animationDuration, 0), n.transitionDuration = Math.max(n.transitionDuration, 0), e.removeClass(k, h), c.put(f, n)));return n || {};
      }function M(a) {
        y.push(a);u.waitUntilQuiet(function () {
          b.flush();c.flush();for (var a = x(), d = 0; d < y.length; d++) y[d](a);y.length = 0;
        });
      }function v(c, h, e) {
        h = b.get(e);h || (h = Da(a, c, Sa), "infinite" === h.animationIterationCount && (h.animationIterationCount = 1));
        b.put(e, h);c = h;e = c.animationDelay;h = c.transitionDelay;c.maxDelay = e && h ? Math.max(e, h) : e || h;c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);return c;
      }var h = Q(e),
          P = 0,
          y = [];return function (a, c) {
        function d() {
          n();
        }function u() {
          n(!0);
        }function n(b) {
          if (!(P || H && da)) {
            P = !0;da = !1;g.$$skipPreparationClasses || e.removeClass(a, fa);e.removeClass(a, ga);ra(m, !1);pa(m, !1);q(y, function (a) {
              m.style[a[0]] = "";
            });h(a, g);ha(a, g);Object.keys(G).length && q(G, function (a, b) {
              a ? m.style.setProperty(b, a) : m.style.removeProperty(b);
            });if (g.onDone) g.onDone();ea && ea.length && a.off(ea.join(" "), C);var c = a.data("$$animateCss");c && (r.cancel(c[0].timer), a.removeData("$$animateCss"));E && E.complete(!b);
          }
        }function D(a) {
          p.blockTransition && pa(m, a);p.blockKeyframeAnimation && ra(m, !!a);
        }function z() {
          E = new f({ end: d, cancel: u });M(O);n();return { $$willAnimate: !1, start: function () {
              return E;
            }, end: d };
        }function C(a) {
          a.stopPropagation();var b = a.originalEvent || a;a = b.$manualTimeStamp || Date.now();b = parseFloat(b.elapsedTime.toFixed(3));
          Math.max(a - W, 0) >= Q && b >= L && (H = !0, n());
        }function K() {
          function b() {
            if (!P) {
              D(!1);q(y, function (a) {
                m.style[a[0]] = a[1];
              });h(a, g);e.addClass(a, ga);if (p.recalculateTimingStyles) {
                na = m.className + " " + fa;ia = w(m, na);B = v(m, na, ia);$ = B.maxDelay;I = Math.max($, 0);L = B.maxDuration;if (0 === L) {
                  n();return;
                }p.hasTransitions = 0 < B.transitionDuration;p.hasAnimations = 0 < B.animationDuration;
              }p.applyAnimationDelay && ($ = "boolean" !== typeof g.delay && sa(g.delay) ? parseFloat(g.delay) : $, I = Math.max($, 0), B.animationDelay = $, aa = [qa, $ + "s"], y.push(aa), m.style[aa[0]] = aa[1]);Q = 1E3 * I;T = 1E3 * L;if (g.easing) {
                var d,
                    f = g.easing;p.hasTransitions && (d = R + "TimingFunction", y.push([d, f]), m.style[d] = f);p.hasAnimations && (d = X + "TimingFunction", y.push([d, f]), m.style[d] = f);
              }B.transitionDuration && ea.push(ua);B.animationDuration && ea.push(va);W = Date.now();var l = Q + 1.5 * T;d = W + l;var f = a.data("$$animateCss") || [],
                  K = !0;if (f.length) {
                var z = f[0];(K = d > z.expectedEndTime) ? r.cancel(z.timer) : f.push(n);
              }K && (l = r(c, l, !1), f[0] = { timer: l, expectedEndTime: d }, f.push(n), a.data("$$animateCss", f));
              if (ea.length) a.on(ea.join(" "), C);g.to && (g.cleanupStyles && Ga(G, m, Object.keys(g.to)), Ba(a, g));
            }
          }function c() {
            var b = a.data("$$animateCss");if (b) {
              for (var d = 1; d < b.length; d++) b[d]();a.removeData("$$animateCss");
            }
          }if (!P) if (m.parentNode) {
            var d = function (a) {
              if (H) da && a && (da = !1, n());else if (da = !a, B.animationDuration) if (a = ra(m, da), da) y.push(a);else {
                var b = y,
                    c = b.indexOf(a);0 <= a && b.splice(c, 1);
              }
            },
                f = 0 < ca && (B.transitionDuration && 0 === U.transitionDuration || B.animationDuration && 0 === U.animationDuration) && Math.max(U.animationDelay, U.transitionDelay);f ? r(b, Math.floor(f * ca * 1E3), !1) : b();N.resume = function () {
              d(!0);
            };N.pause = function () {
              d(!1);
            };
          } else n();
        }var g = c || {};g.$$prepared || (g = oa(Ha(g)));var G = {},
            m = A(a);if (!m || !m.parentNode || !l.enabled()) return z();var y = [],
            x = a.attr("class"),
            t = La(g),
            P,
            da,
            H,
            E,
            N,
            I,
            Q,
            L,
            T,
            W,
            ea = [];if (0 === g.duration || !F.animations && !F.transitions) return z();var ja = g.event && ba(g.event) ? g.event.join(" ") : g.event,
            Y = "",
            S = "";ja && g.structural ? Y = V(ja, "ng-", !0) : ja && (Y = ja);g.addClass && (S += V(g.addClass, "-add"));g.removeClass && (S.length && (S += " "), S += V(g.removeClass, "-remove"));g.applyClassesEarly && S.length && h(a, g);var fa = [Y, S].join(" ").trim(),
            na = x + " " + fa,
            ga = V(fa, "-active"),
            x = t.to && 0 < Object.keys(t.to).length;if (!(0 < (g.keyframeStyle || "").length || x || fa)) return z();var ia, U;0 < g.stagger ? (t = parseFloat(g.stagger), U = { transitionDelay: t, animationDelay: t, transitionDuration: 0, animationDuration: 0 }) : (ia = w(m, na), U = s(m, fa, ia, Ta));g.$$skipPreparationClasses || e.addClass(a, fa);g.transitionStyle && (t = [R, g.transitionStyle], la(m, t), y.push(t));
        0 <= g.duration && (t = 0 < m.style[R].length, t = Ea(g.duration, t), la(m, t), y.push(t));g.keyframeStyle && (t = [X, g.keyframeStyle], la(m, t), y.push(t));var ca = U ? 0 <= g.staggerIndex ? g.staggerIndex : b.count(ia) : 0;(ja = 0 === ca) && !g.skipBlocking && pa(m, 9999);var B = v(m, na, ia),
            $ = B.maxDelay;I = Math.max($, 0);L = B.maxDuration;var p = {};p.hasTransitions = 0 < B.transitionDuration;p.hasAnimations = 0 < B.animationDuration;p.hasTransitionAll = p.hasTransitions && "all" == B.transitionProperty;p.applyTransitionDuration = x && (p.hasTransitions && !p.hasTransitionAll || p.hasAnimations && !p.hasTransitions);p.applyAnimationDuration = g.duration && p.hasAnimations;p.applyTransitionDelay = sa(g.delay) && (p.applyTransitionDuration || p.hasTransitions);p.applyAnimationDelay = sa(g.delay) && p.hasAnimations;p.recalculateTimingStyles = 0 < S.length;if (p.applyTransitionDuration || p.applyAnimationDuration) L = g.duration ? parseFloat(g.duration) : L, p.applyTransitionDuration && (p.hasTransitions = !0, B.transitionDuration = L, t = 0 < m.style[R + "Property"].length, y.push(Ea(L, t))), p.applyAnimationDuration && (p.hasAnimations = !0, B.animationDuration = L, y.push([wa, L + "s"]));if (0 === L && !p.recalculateTimingStyles) return z();if (null != g.delay) {
          var aa;"boolean" !== typeof g.delay && (aa = parseFloat(g.delay), I = Math.max(aa, 0));p.applyTransitionDelay && y.push([ma, aa + "s"]);p.applyAnimationDelay && y.push([qa, aa + "s"]);
        }null == g.duration && 0 < B.transitionDuration && (p.recalculateTimingStyles = p.recalculateTimingStyles || ja);Q = 1E3 * I;T = 1E3 * L;g.skipBlocking || (p.blockTransition = 0 < B.transitionDuration, p.blockKeyframeAnimation = 0 < B.animationDuration && 0 < U.animationDelay && 0 === U.animationDuration);g.from && (g.cleanupStyles && Ga(G, m, Object.keys(g.from)), Aa(a, g));p.blockTransition || p.blockKeyframeAnimation ? D(L) : g.skipBlocking || pa(m, !1);return { $$willAnimate: !0, end: d, start: function () {
            if (!P) return N = { end: d, cancel: u, resume: null, pause: null }, E = new f(N), M(K), E;
          } };
      };
    }];
  }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateCssDriver");this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, f, r, x) {
      function F(a) {
        return a.replace(/\bng-\S+\b/g, "");
      }function u(a, b) {
        I(a) && (a = a.split(" "));I(b) && (b = b.split(" "));return a.filter(function (a) {
          return -1 === b.indexOf(a);
        }).join(" ");
      }function l(c, e, f) {
        function k(a) {
          var b = {},
              c = A(a).getBoundingClientRect();q(["width", "height", "top", "left"], function (a) {
            var d = c[a];switch (a) {case "top":
                d += M.scrollTop;break;case "left":
                d += M.scrollLeft;}b[a] = Math.floor(d) + "px";
          });return b;
        }function l() {
          var c = F(f.attr("class") || ""),
              d = u(c, n),
              c = u(n, c),
              d = a(r, { to: k(f), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 });return d.$$willAnimate ? d : null;
        }function x() {
          r.remove();e.removeClass("ng-animate-shim");f.removeClass("ng-animate-shim");
        }var r = H(A(e).cloneNode(!0)),
            n = F(r.attr("class") || "");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");r.addClass("ng-anchor");v.append(r);var D;c = function () {
          var c = a(r, { addClass: "ng-anchor-out", delay: !0, from: k(e) });return c.$$willAnimate ? c : null;
        }();if (!c && (D = l(), !D)) return x();var z = c || D;return { start: function () {
            function a() {
              c && c.end();
            }var b,
                c = z.start();c.done(function () {
              c = null;if (!D && (D = l())) return c = D.start(), c.done(function () {
                c = null;x();b.complete();
              }), c;x();b.complete();
            });return b = new d({ end: a, cancel: a });
          } };
      }function w(a, b, c, e) {
        var f = s(a, O),
            r = s(b, O),
            x = [];q(e, function (a) {
          (a = l(c, a.out, a["in"])) && x.push(a);
        });if (f || r || 0 !== x.length) return { start: function () {
            function a() {
              q(b, function (a) {
                a.end();
              });
            }var b = [];f && b.push(f.start());r && b.push(r.start());q(x, function (a) {
              b.push(a.start());
            });var c = new d({ end: a, cancel: a });d.all(b, function (a) {
              c.complete(a);
            });
            return c;
          } };
      }function s(c) {
        var d = c.element,
            e = c.options || {};c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));e.preparationClasses && (e.event = W(e.event, e.preparationClasses));c = a(d, e);return c.$$willAnimate ? c : null;
      }if (!f.animations && !f.transitions) return O;var M = x[0].body;c = A(e);var v = H(c.parentNode && 11 === c.parentNode.nodeType || M.contains(c) ? c : M);Q(r);return function (a) {
        return a.from && a.to ? w(a.from, a.to, a.classes, a.anchors) : s(a);
      };
    }];
  }]).provider("$$animateJs", ["$animateProvider", function (a) {
    this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
      function e(c) {
        c = ba(c) ? c : c.split(" ");for (var d = [], e = {}, f = 0; f < c.length; f++) {
          var l = c[f],
              q = a.$$registeredAnimations[l];q && !e[l] && (d.push(b.get(q)), e[l] = !0);
        }return d;
      }var f = Q(d);return function (a, b, d, u) {
        function l() {
          u.domOperation();f(a, u);
        }function w(a, b, d, e, g) {
          switch (d) {case "animate":
              b = [b, e.from, e.to, g];break;case "setClass":
              b = [b, h, H, g];break;case "addClass":
              b = [b, h, g];break;case "removeClass":
              b = [b, H, g];
              break;default:
              b = [b, g];}b.push(e);if (a = a.apply(a, b)) if (Ia(a.start) && (a = a.start()), a instanceof c) a.done(g);else if (Ia(a)) return a;return O;
        }function s(a, b, d, e, g) {
          var f = [];q(e, function (e) {
            var h = e[g];h && f.push(function () {
              var e,
                  g,
                  f = !1,
                  k = function (a) {
                f || (f = !0, (g || O)(a), e.complete(!a));
              };e = new c({ end: function () {
                  k();
                }, cancel: function () {
                  k(!0);
                } });g = w(h, a, b, d, function (a) {
                k(!1 === a);
              });return e;
            });
          });return f;
        }function A(a, b, d, e, g) {
          var f = s(a, b, d, e, g);if (0 === f.length) {
            var h, k;"beforeSetClass" === g ? (h = s(a, "removeClass", d, e, "beforeRemoveClass"), k = s(a, "addClass", d, e, "beforeAddClass")) : "setClass" === g && (h = s(a, "removeClass", d, e, "removeClass"), k = s(a, "addClass", d, e, "addClass"));h && (f = f.concat(h));k && (f = f.concat(k));
          }if (0 !== f.length) return function (a) {
            var b = [];f.length && q(f, function (a) {
              b.push(a());
            });b.length ? c.all(b, a) : a();return function (a) {
              q(b, function (b) {
                a ? b.cancel() : b.end();
              });
            };
          };
        }var v = !1;3 === arguments.length && ca(d) && (u = d, d = null);u = oa(u);d || (d = a.attr("class") || "", u.addClass && (d += " " + u.addClass), u.removeClass && (d += " " + u.removeClass));var h = u.addClass,
            H = u.removeClass,
            y = e(d),
            k,
            E;if (y.length) {
          var I, J;"leave" == b ? (J = "leave", I = "afterLeave") : (J = "before" + b.charAt(0).toUpperCase() + b.substr(1), I = b);"enter" !== b && "move" !== b && (k = A(a, b, u, y, J));E = A(a, b, u, y, I);
        }if (k || E) {
          var n;return { $$willAnimate: !0, end: function () {
              n ? n.end() : (v = !0, l(), ha(a, u), n = new c(), n.complete(!0));return n;
            }, start: function () {
              function b(c) {
                v = !0;l();ha(a, u);n.complete(c);
              }if (n) return n;n = new c();var d,
                  e = [];k && e.push(function (a) {
                d = k(a);
              });e.length ? e.push(function (a) {
                l();
                a(!0);
              }) : l();E && e.push(function (a) {
                d = E(a);
              });n.setHost({ end: function () {
                  v || ((d || O)(void 0), b(void 0));
                }, cancel: function () {
                  v || ((d || O)(!0), b(!0));
                } });c.chain(e, b);return n;
            } };
        }
      };
    }];
  }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateJsDriver");this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
      function d(c) {
        return a(c.element, c.event, c.classes, c.options);
      }return function (a) {
        if (a.from && a.to) {
          var b = d(a.from),
              r = d(a.to);if (b || r) return { start: function () {
              function a() {
                return function () {
                  q(d, function (a) {
                    a.end();
                  });
                };
              }var d = [];b && d.push(b.start());r && d.push(r.start());c.all(d, function (a) {
                e.complete(a);
              });var e = new c({ end: a(), cancel: a() });return e;
            } };
        } else return d(a);
      };
    }];
  }]);
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map

//# sourceMappingURL=angular-animate.min-compiled.js.map