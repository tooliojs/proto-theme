! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).DarkReader = {})
  }(this, function(e) {
    "use strict";
    var t = function() {
      return (t = Object.assign || function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e
      }).apply(this, arguments)
    };
  
    function r(e, t, r, n) {
      return new(r || (r = Promise))(function(a, o) {
        function i(e) {
          try {
            s(n.next(e))
          } catch (e) {
            o(e)
          }
        }
  
        function u(e) {
          try {
            s(n.throw(e))
          } catch (e) {
            o(e)
          }
        }
  
        function s(e) {
          e.done ? a(e.value) : new r(function(t) {
            t(e.value)
          }).then(i, u)
        }
        s((n = n.apply(e, t || [])).next())
      })
    }
  
    function n(e, t) {
      var r, n, a, o, i = {
        label: 0,
        sent: function() {
          if (1 & a[0]) throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return o = {
        next: u(0),
        throw: u(1),
        return: u(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
      }), o;
  
      function u(o) {
        return function(u) {
          return function(o) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; i;) try {
              if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
              switch (n = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                case 0:
                case 1:
                  a = o;
                  break;
                case 4:
                  return i.label++, {
                    value: o[1],
                    done: !1
                  };
                case 5:
                  i.label++, n = o[1], o = [0];
                  continue;
                case 7:
                  o = i.ops.pop(), i.trys.pop();
                  continue;
                default:
                  if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                    i = 0;
                    continue
                  }
                  if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                    i.label = o[1];
                    break
                  }
                  if (6 === o[0] && i.label < a[1]) {
                    i.label = a[1], a = o;
                    break
                  }
                  if (a && i.label < a[2]) {
                    i.label = a[2], i.ops.push(o);
                    break
                  }
                  a[2] && i.ops.pop(), i.trys.pop();
                  continue
              }
              o = t.call(e, i)
            } catch (e) {
              o = [6, e], n = 0
            } finally {
              r = a = 0
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            }
          }([o, u])
        }
      }
    }
  
    function a() {
      return navigator.userAgent.includes("Firefox")
    }
  
    function o(e, t) {
      return r(this, void 0, void 0, function() {
        var r;
        return n(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, fetch(e, {
                cache: "force-cache",
                credentials: "omit"
              })];
            case 1:
              if (r = n.sent(), a() && "text/css" === t && e.startsWith("moz-extension://") && e.endsWith(".css")) return [2, r];
              if (t && !r.headers.get("Content-Type").startsWith(t)) throw new Error("Mime type mismatch when loading " + e);
              if (!r.ok) throw new Error("Unable to load " + e + " " + r.status + " " + r.statusText);
              return [2, r]
          }
        })
      })
    }
  
    function i(e, t) {
      return r(this, void 0, void 0, function() {
        return n(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, o(e, t)];
            case 1:
              return [4, u(r.sent())];
            case 2:
              return [2, r.sent()]
          }
        })
      })
    }
  
    function u(e) {
      return r(this, void 0, void 0, function() {
        var t;
        return n(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, e.blob()];
            case 1:
              return t = r.sent(), [4, new Promise(function(e) {
                var r = new FileReader;
                r.onloadend = function() {
                  return e(r.result)
                }, r.readAsDataURL(t)
              })];
            case 2:
              return [2, r.sent()]
          }
        })
      })
    }
    var s = function(e) {
        return r(void 0, void 0, void 0, function() {
          return n(this, function(t) {
            return [2, Promise.reject(new Error(["Embedded Dark Reader cannot access a cross-origin resource", e, "Overview your URLs and CORS policies or use", "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.", "See if using `DarkReader.setFetchMethod(window.fetch)`", "before `DarkReader.enable()` works."].join(" ")))]
          })
        })
      },
      c = s;
  
    function l(e) {
      return r(this, void 0, void 0, function() {
        return n(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, c(e)];
            case 1:
              return [2, t.sent()]
          }
        })
      })
    }
    window.chrome || (window.chrome = {}), chrome.runtime || (chrome.runtime = {});
    var d = new Set;
  
    function f() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return r(this, void 0, void 0, function() {
        var t, r, a, o, i, s, c;
        return n(this, function(n) {
          switch (n.label) {
            case 0:
              if (!e[0] || "fetch" !== e[0].type) return [3, 8];
              t = e[0].id, n.label = 1;
            case 1:
              return n.trys.push([1, 7, , 8]), r = e[0].data, a = r.url, o = r.responseType, [4, l(a)];
            case 2:
              return i = n.sent(), "data-url" !== o ? [3, 4] : [4, u(i)];
            case 3:
              return s = n.sent(), [3, 6];
            case 4:
              return [4, i.text()];
            case 5:
              s = n.sent(), n.label = 6;
            case 6:
              return d.forEach(function(e) {
                return e({
                  type: "fetch-response",
                  data: s,
                  error: null,
                  id: t
                })
              }), [3, 8];
            case 7:
              return c = n.sent(), console.error(c), d.forEach(function(e) {
                return e({
                  type: "fetch-response",
                  data: null,
                  error: c,
                  id: t
                })
              }), [3, 8];
            case 8:
              return [2]
          }
        })
      })
    }
  
    function h(e) {
      d.add(e)
    }
    if ("function" == typeof chrome.runtime.sendMessage) {
      var m = chrome.runtime.sendMessage;
      chrome.runtime.sendMessage = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        f.apply(void 0, e), m.apply(chrome.runtime, e)
      }
    } else chrome.runtime.sendMessage = f;
    if (chrome.runtime.onMessage || (chrome.runtime.onMessage = {}), "function" == typeof chrome.runtime.onMessage.addListener) {
      var p = chrome.runtime.onMessage.addListener;
      chrome.runtime.onMessage.addListener = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        h.apply(void 0, e), p.apply(chrome.runtime.onMessage, e)
      }
    } else chrome.runtime.onMessage.addListener = h;
    var v = {
      cssFilter: "cssFilter",
      svgFilter: "svgFilter",
      staticTheme: "staticTheme",
      dynamicTheme: "dynamicTheme"
    };
  
    function g(e) {
      var t = document.createElement("a");
      return t.href = e, t
    }
  
    function b(e, t) {
      if (t.match(/^.*?\/\//) || t.match(/^data\:/)) return t.startsWith("//") ? "" + location.protocol + t : t;
      var r = g(e);
      if (t.startsWith("/")) return g(r.protocol + "//" + r.host + t).href;
      for (var n, a = r.pathname.split("/").concat(t.split("/")).filter(function(e) {
          return e
        });
        (n = a.indexOf("..")) > 0;) a.splice(n - 1, 2);
      return g(r.protocol + "//" + r.host + "/" + a.join("/")).href
    }
  
    function y() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    }
  
    function w() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    }
  
    function k(e, t) {
      Array.from(e).forEach(function(e) {
        if (e instanceof CSSMediaRule) {
          var r = Array.from(e.media);
          (r.includes("screen") || r.includes("all") || !r.includes("print") && !r.includes("speech")) && k(e.cssRules, t)
        } else if (e instanceof CSSStyleRule) t(e);
        else if (e instanceof CSSImportRule) try {
          k(e.styleSheet.cssRules, t)
        } catch (e) {
          w(e)
        } else w("CSSRule type not supported", e)
      })
    }
  
    function S(e, t) {
      Array.from(e).forEach(function(r) {
        var n = e.getPropertyValue(r).trim();
        n && t(r, n)
      })
    }
  
    function x(e) {
      return e.startsWith("--") && !e.startsWith("--darkreader")
    }
  
    function E(e) {
      var t = new Map;
      return S(e.style, function(e, r) {
        x(e) && t.set(e, r)
      }), t
    }
    var M = /url\((('.+?')|(".+?")|([^\)]*?))\)/g,
      A = /@import (url\()?(('.+?')|(".+?")|([^\)]*?))\)?;?/g;
  
    function R(e) {
      return e.replace(/^url\((.*)\)$/, "$1").replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1")
    }
  
    function L(e) {
      var t = g(e);
      return t.protocol + "//" + t.host + t.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1")
    }
    var P = /\/\*[\s\S]*?\*\//g;
    var C = /@font-face\s*{[^}]*}/g;
    var T = /var\((--[^\s,]+),?\s*([^\(\)]*(\([^\(\)]*\)[^\(\)]*)*\s*)\)/g;
  
    function j(e, t) {
      var r = !1,
        n = e.replace(T, function(e, n, a) {
          return t.has(n) ? t.get(n) : a || (w("Variable " + n + " not found"), r = !0, e)
        });
      return r ? n : n.match(T) ? j(n, t) : n
    }
  
    function q(e) {
      var t, r = !1,
        n = null;
      return Object.assign(function() {
        for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
        t = a, n ? r = !0 : (e.apply(void 0, t), n = requestAnimationFrame(function() {
          n = null, r && (e.apply(void 0, t), r = !1)
        }))
      }, {
        cancel: function() {
          cancelAnimationFrame(n), r = !1, n = null
        }
      })
    }
  
    function F(e) {
      e && e.parentNode && e.parentNode.removeChild(e)
    }
  
    function O(e, t) {
      var r, n, a = t.onRestore,
        o = void 0 === a ? Function.prototype : a,
        i = t.watchParent,
        u = void 0 === i || i,
        s = t.watchSibling,
        c = void 0 !== s && s,
        l = (n = 0, (r = {
          seconds: 10
        }).seconds && (n += 1e3 * r.seconds), r.minutes && (n += 60 * r.minutes * 1e3), r.hours && (n += 60 * r.hours * 60 * 1e3), r.days && (n += 24 * r.days * 60 * 60 * 1e3), n),
        d = e.previousSibling,
        f = e.parentNode;
      if (!f) return w("Unable to watch for node position: parent element not found", e, d), {
        stop: Function.prototype
      };
      var h = 0,
        m = null,
        p = q(function() {
          h++;
          var t = Date.now();
          if (null == m) m = t;
          else if (h >= 10) {
            if (t - m < l) return w("Node position watcher stopped: some script conflicts with Dark Reader and can cause high CPU usage", e, d), void b();
            m = t, h = 1
          }
          if (d && d.parentNode !== f) return w("Unable to restore node position: sibling was removed", e, d, f), void b();
          w("Node was removed, restoring it's position", e, d, f), f.insertBefore(e, d ? d.nextSibling : f.firstChild), o && o()
        }),
        v = new MutationObserver(function() {
          (u && !e.parentNode || c && e.previousSibling !== d) && (p(), v.takeRecords())
        }),
        g = function() {
          v.observe(f, {
            childList: !0
          })
        },
        b = function() {
          v.disconnect()
        };
      return g(), {
        run: g,
        stop: b
      }
    }
  
    function W(e, t) {
      for (var r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: function(e) {
            return null == e.shadowRoot ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
          }
        }, !1), n = e.shadowRoot ? r.currentNode : r.nextNode(); null != n; n = r.nextNode()) t(n), W(n.shadowRoot, t)
    }
  
    function N(e) {
      var t = e.h,
        r = e.s,
        n = e.l,
        a = e.a,
        o = void 0 === a ? 1 : a;
      if (0 === r) {
        var i = [n, n, n].map(function(e) {
            return Math.round(255 * e)
          }),
          u = i[0],
          s = i[1];
        return {
          r: u,
          g: i[2],
          b: s,
          a: o
        }
      }
      var c = (1 - Math.abs(2 * n - 1)) * r,
        l = c * (1 - Math.abs(t / 60 % 2 - 1)),
        d = n - c / 2,
        f = (t < 60 ? [c, l, 0] : t < 120 ? [l, c, 0] : t < 180 ? [0, c, l] : t < 240 ? [0, l, c] : t < 300 ? [l, 0, c] : [c, 0, l]).map(function(e) {
          return Math.round(255 * (e + d))
        });
      return {
        r: f[0],
        g: f[1],
        b: f[2],
        a: o
      }
    }
  
    function B(e, t) {
      void 0 === t && (t = 0);
      var r = e.toFixed(t);
      if (0 === t) return r;
      var n = r.indexOf(".");
      if (n >= 0) {
        var a = r.match(/0+$/);
        if (a) return a.index === n + 1 ? r.substring(0, n) : r.substring(0, a.index)
      }
      return r
    }
    var $ = /^rgba?\([^\(\)]+\)$/,
      z = /^hsla?\([^\(\)]+\)$/,
      D = /^#[0-9a-f]+$/i;
  
    function I(e) {
      var t, r, n, a, o, i = e.trim().toLowerCase();
      if (i.match($)) return t = U(i, V, H, G), r = t[0], n = t[1], a = t[2], o = t[3], {
        r: r,
        g: n,
        b: a,
        a: void 0 === o ? 1 : o
      };
      if (i.match(z)) return function(e) {
        var t = U(e, _, K, J),
          r = t[0],
          n = t[1],
          a = t[2],
          o = t[3];
        return N({
          h: r,
          s: n,
          l: a,
          a: void 0 === o ? 1 : o
        })
      }(i);
      if (i.match(D)) return function(e) {
        var t = e.substring(1);
        switch (t.length) {
          case 3:
          case 4:
            var r = [0, 1, 2].map(function(e) {
                return parseInt("" + t[e] + t[e], 16)
              }),
              n = r[0],
              a = r[1],
              o = r[2],
              i = 3 === t.length ? 1 : parseInt("" + t[3] + t[3], 16) / 255;
            return {
              r: n, g: a, b: o, a: i
            };
          case 6:
          case 8:
            var u = [0, 2, 4].map(function(e) {
                return parseInt(t.substring(e, e + 2), 16)
              }),
              n = u[0],
              a = u[1],
              o = u[2],
              i = 6 === t.length ? 1 : parseInt(t.substring(6, 8), 16) / 255;
            return {
              r: n, g: a, b: o, a: i
            }
        }
        throw new Error("Unable to parse " + e)
      }(i);
      if (Q.has(i)) return function(e) {
        var t = Q.get(e);
        return {
          r: t >> 16 & 255,
          g: t >> 8 & 255,
          b: t >> 0 & 255,
          a: 1
        }
      }(i);
      if (X.has(i)) return function(e) {
        var t = X.get(e);
        return {
          r: t >> 16 & 255,
          g: t >> 8 & 255,
          b: t >> 0 & 255,
          a: 1
        }
      }(i);
      if ("transparent" === e) return {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      };
      throw new Error("Unable to parse " + e)
    }
  
    function U(e, t, r, n) {
      var a = e.split(t).filter(function(e) {
          return e
        }),
        o = Object.entries(n);
      return a.map(function(e) {
        return e.trim()
      }).map(function(e, t) {
        var n, a = o.find(function(t) {
          var r = t[0];
          return e.endsWith(r)
        });
        return n = a ? parseFloat(e.substring(0, e.length - a[0].length)) / a[1] * r[t] : parseFloat(e), r[t] > 1 ? Math.round(n) : n
      })
    }
    var V = /rgba?|\(|\)|\/|,|\s/gi,
      H = [255, 255, 255, 1],
      G = {
        "%": 100
      };
    var _ = /hsla?|\(|\)|\/|,|\s/gi,
      K = [360, 1, 1, 1],
      J = {
        "%": 100,
        deg: 360,
        rad: 2 * Math.PI,
        turn: 1
      };
    var Q = new Map(Object.entries({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgrey: 11119017,
        darkgreen: 25600,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        grey: 8421504,
        green: 32768,
        greenyellow: 11403055,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgrey: 13882323,
        lightgreen: 9498256,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      })),
      X = new Map(Object.entries({
        ActiveBorder: 3906044,
        ActiveCaption: 0,
        AppWorkspace: 11184810,
        Background: 6513614,
        ButtonFace: 16777215,
        ButtonHighlight: 15329769,
        ButtonShadow: 10461343,
        ButtonText: 0,
        CaptionText: 0,
        GrayText: 8355711,
        Highlight: 11720703,
        HighlightText: 0,
        InactiveBorder: 16777215,
        InactiveCaption: 16777215,
        InactiveCaptionText: 0,
        InfoBackground: 16514245,
        InfoText: 0,
        Menu: 16185078,
        MenuText: 16777215,
        Scrollbar: 11184810,
        ThreeDDarkShadow: 0,
        ThreeDFace: 12632256,
        ThreeDHighlight: 16777215,
        ThreeDLightShadow: 16777215,
        ThreeDShadow: 0,
        Window: 15527148,
        WindowFrame: 11184810,
        WindowText: 0,
        "-webkit-focus-ring-color": 15046400
      }).map(function(e) {
        var t = e[0],
          r = e[1];
        return [t.toLowerCase(), r]
      }));
  
    function Y(e, t, r, n, a) {
      return (e - t) * (a - n) / (r - t) + n
    }
  
    function Z(e, t, r) {
      return Math.min(r, Math.max(t, e))
    }
  
    function ee(e, t) {
      for (var r = [], n = 0; n < e.length; n++) {
        r[n] = [];
        for (var a = 0; a < t[0].length; a++) {
          for (var o = 0, i = 0; i < e[0].length; i++) o += e[n][i] * t[i][a];
          r[n][a] = o
        }
      }
      return r
    }
  
    function te(e, t, r) {
      void 0 === r && (r = 0);
      for (var n, a = []; n = e.exec(t);) a.push(n[r]);
      return a
    }
  
    function re(e) {
      var t = ae.identity();
      return 0 !== e.sepia && (t = ee(t, ae.sepia(e.sepia / 100))), 0 !== e.grayscale && (t = ee(t, ae.grayscale(e.grayscale / 100))), 100 !== e.contrast && (t = ee(t, ae.contrast(e.contrast / 100))), 100 !== e.brightness && (t = ee(t, ae.brightness(e.brightness / 100))), 1 === e.mode && (t = ee(t, ae.invertNHue())), t
    }
    var ne, ae = {
        identity: function() {
          return [
            [1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
          ]
        },
        invertNHue: function() {
          return [
            [.333, -.667, -.667, 0, 1],
            [-.667, .333, -.667, 0, 1],
            [-.667, -.667, .333, 0, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
          ]
        },
        brightness: function(e) {
          return [
            [e, 0, 0, 0, 0],
            [0, e, 0, 0, 0],
            [0, 0, e, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
          ]
        },
        contrast: function(e) {
          var t = (1 - e) / 2;
          return [
            [e, 0, 0, 0, t],
            [0, e, 0, 0, t],
            [0, 0, e, 0, t],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
          ]
        },
        sepia: function(e) {
          return [
            [.393 + .607 * (1 - e), .769 - .769 * (1 - e), .189 - .189 * (1 - e), 0, 0],
            [.349 - .349 * (1 - e), .686 + .314 * (1 - e), .168 - .168 * (1 - e), 0, 0],
            [.272 - .272 * (1 - e), .534 - .534 * (1 - e), .131 + .869 * (1 - e), 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
          ]
        },
        grayscale: function(e) {
          return [
            [.2126 + .7874 * (1 - e), .7152 - .7152 * (1 - e), .0722 - .0722 * (1 - e), 0, 0],
            [.2126 - .2126 * (1 - e), .7152 + .2848 * (1 - e), .0722 - .0722 * (1 - e), 0, 0],
            [.2126 - .2126 * (1 - e), .7152 - .7152 * (1 - e), .0722 + .9278 * (1 - e), 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
          ]
        }
      },
      oe = new Map;
  
    function ie(e, t, r) {
      var n;
      oe.has(r) ? n = oe.get(r) : (n = new Map, oe.set(r, n));
      var a = Object.entries(e).concat(Object.entries(t).filter(function(e) {
        var t = e[0];
        return ["mode", "brightness", "contrast", "grayscale", "sepia"].indexOf(t) >= 0
      })).map(function(e) {
        return e[0] + ":" + e[1]
      }).join(";");
      if (n.has(a)) return n.get(a);
      var o = N(r(function(e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = void 0 === a ? 1 : a,
            i = t / 255,
            u = r / 255,
            s = n / 255,
            c = Math.max(i, u, s),
            l = Math.min(i, u, s),
            d = c - l,
            f = (c + l) / 2;
          if (0 === d) return {
            h: 0,
            s: 0,
            l: f,
            a: o
          };
          var h = 60 * (c === i ? (u - s) / d % 6 : c === u ? (s - i) / d + 2 : (i - u) / d + 4);
          return h < 0 && (h += 360), {
            h: h,
            s: d / (1 - Math.abs(2 * f - 1)),
            l: f,
            a: o
          }
        }(e))),
        i = o.r,
        u = o.g,
        s = o.b,
        c = o.a,
        l = function(e, t) {
          var r = ee(t, [
            [e[0] / 255],
            [e[1] / 255],
            [e[2] / 255],
            [1],
            [1]
          ]);
          return [0, 1, 2].map(function(e) {
            return Z(Math.round(255 * r[e][0]), 0, 255)
          })
        }([i, u, s], re(t)),
        d = l[0],
        f = l[1],
        h = l[2],
        m = 1 === c ? function(e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a;
          return "#" + (null != a && a < 1 ? [t, r, n, Math.round(255 * a)] : [t, r, n]).map(function(e) {
            return (e < 16 ? "0" : "") + e.toString(16)
          }).join("")
        }({
          r: d,
          g: f,
          b: h
        }) : function(e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a;
          return null != a && a < 1 ? "rgba(" + B(t) + ", " + B(r) + ", " + B(n) + ", " + B(a, 2) + ")" : "rgb(" + B(t) + ", " + B(r) + ", " + B(n) + ")"
        }({
          r: d,
          g: f,
          b: h,
          a: c
        });
      return n.set(a, m), m
    }
  
    function ue(e) {
      return e
    }
  
    function se(e) {
      var t = e.h,
        r = e.s,
        n = e.l,
        a = e.a,
        o = Y(n, 0, 1, 0, .9),
        i = t,
        u = r;
      return (n < .2 || n > .8 || r < .36) && (u = n < .4 ? Y(n, 0, .4, .16, 0) : Y(n, .4, 1, 0, .16), i = n < .4 ? 205 : 40), {
        h: i,
        s: u,
        l: o,
        a: a
      }
    }
  
    function ce(e) {
      var t = e.h,
        r = e.s,
        n = e.l,
        a = e.a,
        o = Y(r, 0, 1, .25, .4),
        i = t,
        u = r;
      return (n >= .8 && t > 200 && t < 280 || r < .12) && (u = .05, i = 205), {
        h: i,
        s: u,
        l: n < o ? n : n < .5 ? o : Y(n, .5, 1, o, .1),
        a: a
      }
    }
  
    function le(e, r) {
      return 0 === r.mode ? ie(e, r, se) : ie(e, t(t({}, r), {
        mode: 0
      }), ce)
    }
  
    function de(e) {
      var t = e.h,
        r = e.s,
        n = e.l,
        a = e.a,
        o = t > 205 && t <= 245,
        i = Y(r, 0, 1, o ? Y(t, 205, 245, .7, .7) : .7, .6),
        u = n < .5 ? Y(n, 0, .5, .9, i) : n < i ? i : n,
        s = t,
        c = r;
      return o && (s = Y(s, 205, 245, 205, 220)), (n < .2 || r < .24) && (c = .1, s = 40), {
        h: s,
        s: c,
        l: u,
        a: a
      }
    }
  
    function fe(e, r) {
      return 0 === r.mode ? ie(e, r, se) : ie(e, t(t({}, r), {
        mode: 0
      }), de)
    }
  
    function he(e) {
      var t = e.h,
        r = e.s,
        n = e.l,
        a = e.a,
        o = Y(r, 0, 1, .2, .3),
        i = Y(r, 0, 1, .4, .5);
      return {
        h: t,
        s: r,
        l: Y(n, 0, 1, i, o),
        a: a
      }
    }
  
    function me(e, r) {
      return 0 === r.mode ? ie(e, r, se) : ie(e, t(t({}, r), {
        mode: 0
      }), he)
    }
  
    function pe(e, t) {
      return le(e, t)
    }
  
    function ve(e) {
      var t = [];
      return e.mode === ne.dark && t.push("invert(100%) hue-rotate(180deg)"), 100 !== e.brightness && t.push("brightness(" + e.brightness + "%)"), 100 !== e.contrast && t.push("contrast(" + e.contrast + "%)"), 0 !== e.grayscale && t.push("grayscale(" + e.grayscale + "%)"), 0 !== e.sepia && t.push("sepia(" + e.sepia + "%)"), 0 === t.length ? null : t.join(" ")
    }! function(e) {
      e[e.light = 0] = "light", e[e.dark = 1] = "dark"
    }(ne || (ne = {}));
    var ge = 0,
      be = new Map,
      ye = new Map;
  
    function we(e) {
      return new Promise(function(t, r) {
        var n = ++ge;
        be.set(n, t), ye.set(n, r), chrome.runtime.sendMessage({
          type: "fetch",
          data: e,
          id: n
        })
      })
    }
  
    function ke(e) {
      return r(this, void 0, void 0, function() {
        var r, a, o;
        return n(this, function(n) {
          switch (n.label) {
            case 0:
              return e.startsWith("data:") ? (r = e, [3, 3]) : [3, 1];
            case 1:
              return [4, Se(e)];
            case 2:
              r = n.sent(), n.label = 3;
            case 3:
              return [4, xe(r)];
            case 4:
              return a = n.sent(), o = function(e) {
                var t = e.naturalWidth * e.naturalHeight,
                  r = Math.min(1, Math.sqrt(1024 / t)),
                  n = Math.max(1, Math.round(e.naturalWidth * r)),
                  a = Math.max(1, Math.round(e.naturalHeight * r)),
                  o = document.createElement("canvas");
                o.width = n, o.height = a;
                var i = o.getContext("2d");
                i.imageSmoothingEnabled = !1, i.drawImage(e, 0, 0, n, a);
                var u, s, c, l, d, f, h, m, p, v = i.getImageData(0, 0, n, a).data,
                  g = 0,
                  b = 0,
                  y = 0;
                for (c = 0; c < a; c++)
                  for (s = 0; s < n; s++) l = v[(u = 4 * (c * n + s)) + 0] / 255, d = v[u + 1] / 255, f = v[u + 2] / 255, v[u + 3] / 255 < .05 ? g++ : (m = Math.min(l, d, f), p = Math.max(l, d, f), (h = (p + m) / 2) < .4 && b++, h > .7 && y++);
                var w = n * a,
                  k = w - g;
                return {
                  isDark: b / k >= .7,
                  isLight: y / k >= .7,
                  isTransparent: g / w >= .1,
                  isLarge: t >= 48e4
                }
              }(a), [2, t({
                src: e,
                dataURL: r,
                width: a.naturalWidth,
                height: a.naturalHeight
              }, o)]
          }
        })
      })
    }
  
    function Se(e) {
      return r(this, void 0, void 0, function() {
        return n(this, function(t) {
          switch (t.label) {
            case 0:
              return function(e) {
                return e.match(/^(.*?\/{2,3})?(.+?)(\/|$)/)[2]
              }(e) !== location.host ? [3, 2] : [4, i(e)];
            case 1:
              return [2, t.sent()];
            case 2:
              return [4, we({
                url: e,
                responseType: "data-url"
              })];
            case 3:
              return [2, t.sent()]
          }
        })
      })
    }
  
    function xe(e) {
      return r(this, void 0, void 0, function() {
        return n(this, function(t) {
          return [2, new Promise(function(t, r) {
            var n = new Image;
            n.onload = function() {
              return t(n)
            }, n.onerror = function() {
              return r("Unable to load image " + e)
            }, n.src = e
          })]
        })
      })
    }
  
    function Ee(e, t) {
      for (var r = e.dataURL, n = e.width, a = e.height, o = ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + n + '" height="' + a + '">', "<defs>", '<filter id="darkreader-image-filter">', '<feColorMatrix type="matrix" values="' + re(t).slice(0, 4).map(function(e) {
          return e.map(function(e) {
            return e.toFixed(3)
          }).join(" ")
        }).join(" ") + '" />', "</filter>", "</defs>", '<image width="' + n + '" height="' + a + '" filter="url(#darkreader-image-filter)" xlink:href="' + r + '" />', "</svg>"].join(""), i = new Uint8Array(o.length), u = 0; u < o.length; u++) i[u] = o.charCodeAt(u);
      var s = new Blob([i], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(s)
    }
  
    function Me(e, a, o, i) {
      var u = Boolean(o && o.style && o.style.getPropertyPriority(e)),
        s = a;
      if (e.startsWith("--")) return null;
      if (e.indexOf("color") >= 0 && "-webkit-print-color-adjust" !== e || "fill" === e || "stroke" === e) {
        if (c = function(e, t) {
            if (Le.has(t.toLowerCase())) return t;
            try {
              var r = Ce(t);
              return e.indexOf("background") >= 0 ? function(e) {
                return le(r, e)
              } : e.indexOf("border") >= 0 || e.indexOf("outline") >= 0 ? function(e) {
                return me(r, e)
              } : function(e) {
                return fe(r, e)
              }
            } catch (e) {
              return w("Color parse error", e), null
            }
          }(e, a)) return {
          property: e,
          value: c,
          important: u,
          sourceValue: s
        }
      } else if ("background-image" === e) {
        if (c = function(e, a, o, i) {
            var u = this;
            try {
              var s = te(je, a),
                c = te(M, a);
              if (0 === c.length && 0 === s.length) return a;
              var l = function(e) {
                  var t = 0;
                  return e.map(function(e) {
                    var r = a.indexOf(e, t);
                    return t = r + e.length, {
                      match: e,
                      index: r
                    }
                  })
                },
                d = l(c).map(function(e) {
                  return t({
                    type: "url"
                  }, e)
                }).concat(l(s).map(function(e) {
                  return t({
                    type: "gradient"
                  }, e)
                })).sort(function(e, t) {
                  return e.index - t.index
                }),
                f = function(e, r) {
                  var n, a = e.isDark,
                    o = e.isLight,
                    i = e.isTransparent,
                    u = e.isLarge,
                    s = e.width;
                  if (a && i && 1 === r.mode && !u && s > 2) {
                    y("Inverting dark image " + e.src);
                    var c = Ee(e, t(t({}, r), {
                      sepia: Z(r.sepia + 10, 0, 100)
                    }));
                    n = 'url("' + c + '")'
                  } else if (o && !i && 1 === r.mode)
                    if (u) n = "none";
                    else {
                      y("Dimming light image " + e.src);
                      var l = Ee(e, r);
                      n = 'url("' + l + '")'
                    }
                  else if (0 === r.mode && o && !u) {
                    y("Applying filter to image " + e.src);
                    var d = Ee(e, t(t({}, r), {
                      brightness: Z(r.brightness - 10, 5, 200),
                      sepia: Z(r.sepia + 10, 0, 100)
                    }));
                    n = 'url("' + d + '")'
                  } else n = null;
                  return n
                },
                h = [],
                m = 0;
              return d.forEach(function(e, t) {
                  var s = e.match,
                    c = e.type,
                    l = e.index,
                    p = m,
                    v = l + s.length;
                  m = v, h.push(function() {
                    return a.substring(p, l)
                  }), h.push("url" === c ? function(e) {
                    var t = R(e);
                    if (o.parentStyleSheet.href) {
                      var a = L(o.parentStyleSheet.href);
                      t = b(a, t)
                    } else t = o.parentStyleSheet.ownerNode && o.parentStyleSheet.ownerNode.baseURI ? b(o.parentStyleSheet.ownerNode.baseURI, t) : b(location.origin, t);
                    var s = 'url("' + t + '")';
                    return function(e) {
                      return r(u, void 0, void 0, function() {
                        var r, a;
                        return n(this, function(n) {
                          switch (n.label) {
                            case 0:
                              return qe.has(t) ? (r = qe.get(t), [3, 7]) : [3, 1];
                            case 1:
                              return n.trys.push([1, 6, , 7]), Fe.has(t) ? (a = Fe.get(t), [4, new Promise(function(e) {
                                return a.push(e)
                              })]) : [3, 3];
                            case 2:
                              return (r = n.sent()) ? [3, 5] : [2, null];
                            case 3:
                              return Fe.set(t, []), [4, ke(t)];
                            case 4:
                              r = n.sent(), qe.set(t, r), Fe.get(t).forEach(function(e) {
                                return e(r)
                              }), Fe.delete(t), n.label = 5;
                            case 5:
                              return i() ? [2, null] : [3, 7];
                            case 6:
                              return w(n.sent()), Fe.has(t) && (Fe.get(t).forEach(function(e) {
                                return e(null)
                              }), Fe.delete(t)), [2, s];
                            case 7:
                              return [2, f(r, e) || s]
                          }
                        })
                      })
                    }
                  }(s) : function(e) {
                    var t = e.match(/^(.*-gradient)\((.*)\)$/),
                      r = t[1],
                      n = t[2],
                      a = /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/,
                      o = te(/([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?[^\(\),]*),?/g, n, 1).map(function(e) {
                        var t = Te(e = e.trim());
                        if (t) return function(e) {
                          return pe(t, e)
                        };
                        var r = e.lastIndexOf(" ");
                        if (t = Te(e.substring(0, r))) return function(n) {
                          return pe(t, n) + " " + e.substring(r + 1)
                        };
                        var n = e.match(a);
                        return n && (t = Te(n[3])) ? function(e) {
                          return n[1] + "(" + (n[2] ? n[2] + ", " : "") + pe(t, e) + ")"
                        } : function() {
                          return e
                        }
                      });
                    return function(e) {
                      return r + "(" + o.map(function(t) {
                        return t(e)
                      }).join(", ") + ")"
                    }
                  }(s)), t === d.length - 1 && h.push(function() {
                    return a.substring(v)
                  })
                }),
                function(e) {
                  var t = h.map(function(t) {
                    return t(e)
                  });
                  return t.some(function(e) {
                    return e instanceof Promise
                  }) ? Promise.all(t).then(function(e) {
                    return e.join("")
                  }) : t.join("")
                }
            } catch (e) {
              return w("Unable to parse gradient " + a, e), null
            }
          }(0, a, o, i)) return {
          property: e,
          value: c,
          important: u,
          sourceValue: s
        }
      } else if (e.indexOf("shadow") >= 0) {
        var c;
        if (c = function(e, t) {
            try {
              var r = 0,
                n = te(/(^|\s)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi, t, 2),
                a = n.map(function(e, a) {
                  var o = r,
                    i = t.indexOf(e, r),
                    u = i + e.length;
                  r = u;
                  var s = Te(e);
                  return s ? function(e) {
                    return "" + t.substring(o, i) + function(e, t) {
                      return le(e, t)
                    }(s, e) + (a === n.length - 1 ? t.substring(u) : "")
                  } : function() {
                    return t.substring(o, u)
                  }
                });
              return function(e) {
                return a.map(function(t) {
                  return t(e)
                }).join("")
              }
            } catch (e) {
              return w("Unable to parse shadow " + t, e), null
            }
          }(0, a)) return {
          property: e,
          value: c,
          important: u,
          sourceValue: s
        }
      }
      return null
    }
  
    function Ae(e, t) {
      var r = [];
      return t || (r.push("html {"), r.push("    background-color: " + le({
        r: 255,
        g: 255,
        b: 255
      }, e) + " !important;"), r.push("}")), r.push((t ? "" : "html, body, ") + "input, textarea, select, button {"), r.push("    background-color: " + le({
        r: 255,
        g: 255,
        b: 255
      }, e) + ";"), r.push("}"), r.push("html, body, input, textarea, select, button {"), r.push("    border-color: " + me({
        r: 76,
        g: 76,
        b: 76
      }, e) + ";"), r.push("    color: " + fe({
        r: 0,
        g: 0,
        b: 0
      }, e) + ";"), r.push("}"), r.push("a {"), r.push("    color: " + fe({
        r: 0,
        g: 64,
        b: 255
      }, e) + ";"), r.push("}"), r.push("table {"), r.push("    border-color: " + me({
        r: 128,
        g: 128,
        b: 128
      }, e) + ";"), r.push("}"), r.push("::placeholder {"), r.push("    color: " + fe({
        r: 169,
        g: 169,
        b: 169
      }, e) + ";"), r.push("}"), ["::selection", "::-moz-selection"].forEach(function(t) {
        r.push(t + " {"), r.push("    background-color: " + le({
          r: 0,
          g: 96,
          b: 212
        }, e) + ";"), r.push("    color: " + fe({
          r: 255,
          g: 255,
          b: 255
        }, e) + ";"), r.push("}")
      }), r.push("input:-webkit-autofill,"), r.push("textarea:-webkit-autofill,"), r.push("select:-webkit-autofill {"), r.push("    background-color: " + le({
        r: 250,
        g: 255,
        b: 189
      }, e) + " !important;"), r.push("    color: " + fe({
        r: 0,
        g: 0,
        b: 0
      }, e) + " !important;"), r.push("}"), navigator.platform.toLowerCase().startsWith("mac") || (r.push("::-webkit-scrollbar {"), r.push("    background-color: " + le({
        r: 241,
        g: 241,
        b: 241
      }, e) + ";"), r.push("    color: " + fe({
        r: 96,
        g: 96,
        b: 96
      }, e) + ";"), r.push("}"), r.push("::-webkit-scrollbar-thumb {"), r.push("    background-color: " + le({
        r: 193,
        g: 193,
        b: 193
      }, e) + ";"), r.push("}"), r.push("::-webkit-scrollbar-thumb:hover {"), r.push("    background-color: " + le({
        r: 166,
        g: 166,
        b: 166
      }, e) + ";"), r.push("}"), r.push("::-webkit-scrollbar-thumb:active {"), r.push("    background-color: " + le({
        r: 96,
        g: 96,
        b: 96
      }, e) + ";"), r.push("}"), r.push("::-webkit-scrollbar-corner {"), r.push("    background-color: " + le({
        r: 255,
        g: 255,
        b: 255
      }, e) + ";"), r.push("}"), r.push("* {"), r.push("    scrollbar-color: " + le({
        r: 193,
        g: 193,
        b: 193
      }, e) + " " + le({
        r: 241,
        g: 241,
        b: 241
      }, e) + ";"), r.push("}")), r.join("\n")
    }
  
    function Re(e, t) {
      var r = t.strict,
        n = [];
      return n.push("html, body, " + (r ? "body *" : "body > *") + " {"), n.push("    background-color: " + le({
        r: 255,
        g: 255,
        b: 255
      }, e) + " !important;"), n.push("    border-color: " + me({
        r: 64,
        g: 64,
        b: 64
      }, e) + " !important;"), n.push("    color: " + fe({
        r: 0,
        g: 0,
        b: 0
      }, e) + " !important;"), n.push("}"), n.join("\n")
    }
    chrome.runtime.onMessage.addListener(function(e) {
      var t = e.type,
        r = e.data,
        n = e.error,
        a = e.id;
      if ("fetch-response" === t) {
        var o = be.get(a),
          i = ye.get(a);
        be.delete(a), ye.delete(a), n ? i && i(n) : o && o(r)
      }
    });
    var Le = new Set(["inherit", "transparent", "initial", "currentcolor", "none"]),
      Pe = new Map;
  
    function Ce(e) {
      if (e = e.trim(), Pe.has(e)) return Pe.get(e);
      var t = I(e);
      return Pe.set(e, t), t
    }
  
    function Te(e) {
      try {
        return Ce(e)
      } catch (e) {
        return null
      }
    }
    var je = /[\-a-z]+gradient\(([^\(\)]*(\(([^\(\)]*(\(.*?\)))*[^\(\)]*\))){0,15}[^\(\)]*\)/g,
      qe = new Map,
      Fe = new Map;
  
    function Oe() {
      Pe.clear(), oe.clear(), qe.clear(), Fe.clear()
    }
    var We = {
        "background-color": {
          customProp: "--darkreader-inline-bgcolor",
          cssProp: "background-color",
          dataAttr: "data-darkreader-inline-bgcolor",
          store: new WeakSet
        },
        "background-image": {
          customProp: "--darkreader-inline-bgimage",
          cssProp: "background-image",
          dataAttr: "data-darkreader-inline-bgimage",
          store: new WeakSet
        },
        "border-color": {
          customProp: "--darkreader-inline-border",
          cssProp: "border-color",
          dataAttr: "data-darkreader-inline-border",
          store: new WeakSet
        },
        "border-bottom-color": {
          customProp: "--darkreader-inline-border-bottom",
          cssProp: "border-bottom-color",
          dataAttr: "data-darkreader-inline-border-bottom",
          store: new WeakSet
        },
        "border-left-color": {
          customProp: "--darkreader-inline-border-left",
          cssProp: "border-left-color",
          dataAttr: "data-darkreader-inline-border-left",
          store: new WeakSet
        },
        "border-right-color": {
          customProp: "--darkreader-inline-border-right",
          cssProp: "border-right-color",
          dataAttr: "data-darkreader-inline-border-right",
          store: new WeakSet
        },
        "border-top-color": {
          customProp: "--darkreader-inline-border-top",
          cssProp: "border-top-color",
          dataAttr: "data-darkreader-inline-border-top",
          store: new WeakSet
        },
        "box-shadow": {
          customProp: "--darkreader-inline-boxshadow",
          cssProp: "box-shadow",
          dataAttr: "data-darkreader-inline-boxshadow",
          store: new WeakSet
        },
        color: {
          customProp: "--darkreader-inline-color",
          cssProp: "color",
          dataAttr: "data-darkreader-inline-color",
          store: new WeakSet
        },
        fill: {
          customProp: "--darkreader-inline-fill",
          cssProp: "fill",
          dataAttr: "data-darkreader-inline-fill",
          store: new WeakSet
        },
        stroke: {
          customProp: "--darkreader-inline-stroke",
          cssProp: "stroke",
          dataAttr: "data-darkreader-inline-stroke",
          store: new WeakSet
        },
        "outline-color": {
          customProp: "--darkreader-inline-outline",
          cssProp: "outline-color",
          dataAttr: "data-darkreader-inline-outline",
          store: new WeakSet
        }
      },
      Ne = Object.values(We),
      Be = ["style", "fill", "stroke", "bgcolor", "color"],
      $e = Be.map(function(e) {
        return "[" + e + "]"
      }).join(", ");
  
    function ze() {
      return Ne.map(function(e) {
        var t = e.dataAttr,
          r = e.customProp;
        return ["[" + t + "] {", "  " + e.cssProp + ": var(" + r + ") !important;", "}"].join("\n")
      }).join("\n")
    }
    var De = new Map;
  
    function Ie(e, t, r) {
      De.has(e) && De.get(e).disconnect();
      var n = new MutationObserver(function(e) {
        e.forEach(function(e) {
          var r, n, a, o = (r = Array.from(e.addedNodes), n = $e, a = [], r.forEach(function(e) {
            e instanceof Element && (e.matches(n) && a.push(e), a.push.apply(a, Array.from(e.querySelectorAll(n))))
          }), a);
          o.length > 0 && o.forEach(function(e) {
            return t(e)
          }), "attributes" === e.type && (Be.includes(e.attributeName) && t(e.target), Ne.filter(function(t) {
            var r = t.store,
              n = t.dataAttr;
            return r.has(e.target) && !e.target.hasAttribute(n)
          }).forEach(function(t) {
            var r = t.dataAttr;
            return e.target.setAttribute(r, "")
          }))
        }), e.forEach(function(e) {
          e.addedNodes.forEach(function(e) {
            e.isConnected && W(e, function(e) {
              r(e.shadowRoot), Ie(e.shadowRoot, t, r)
            })
          })
        })
      });
      n.observe(e, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: Be.concat(Ne.map(function(e) {
          return e.dataAttr
        }))
      }), De.set(e, n)
    }
    var Ue = new WeakMap,
      Ve = ["brightness", "contrast", "grayscale", "sepia", "mode"];
  
    function He(e, t) {
      return Be.map(function(t) {
        return t + '="' + e.getAttribute(t) + '"'
      }).concat(Ve.map(function(e) {
        return e + '="' + t[e] + '"'
      })).join(" ")
    }
  
    function Ge(e, t) {
      if (He(e, t) !== Ue.get(e)) {
        var r = new Set(Object.keys(We));
        if (e.hasAttribute("bgcolor"))((n = e.getAttribute("bgcolor")).match(/^[0-9a-f]{3}$/i) || n.match(/^[0-9a-f]{6}$/i)) && (n = "#" + n), s("background-color", "background-color", n);
        if (e.hasAttribute("color"))((n = e.getAttribute("color")).match(/^[0-9a-f]{3}$/i) || n.match(/^[0-9a-f]{6}$/i)) && (n = "#" + n), s("color", "color", n);
        if (e.hasAttribute("fill") && e instanceof SVGElement) {
          var n = e.getAttribute("fill"),
            a = !1;
          if (!(e instanceof SVGTextElement)) {
            var o = e.getBoundingClientRect(),
              i = o.width,
              u = o.height;
            a = i > 32 || u > 32
          }
          s("fill", a ? "background-color" : "color", n)
        }
        if (e.hasAttribute("stroke")) {
          n = e.getAttribute("stroke");
          s("stroke", e instanceof SVGLineElement || e instanceof SVGTextElement ? "border-color" : "color", n)
        }
        e.style && S(e.style, function(e, t) {
          "background-image" === e && t.indexOf("url") >= 0 || We.hasOwnProperty(e) && s(e, e, t)
        }), e.style && e instanceof SVGTextElement && e.style.fill && s("fill", "color", e.style.getPropertyValue("fill")), Array.from(r).forEach(function(t) {
          var r = We[t],
            n = r.store,
            a = r.dataAttr;
          n.delete(e), e.removeAttribute(a)
        }), Ue.set(e, He(e, t))
      }
  
      function s(n, a, o) {
        var i = We[n],
          u = i.customProp,
          s = i.dataAttr,
          c = Me(a, o, null, null);
        if (c) {
          var l = c.value;
          "function" == typeof l && (l = l(t)), e.style.setProperty(u, l), e.hasAttribute(s) || e.setAttribute(s, ""), r.delete(n)
        }
      }
    }
    var _e = "theme-color",
      Ke = 'meta[name="' + _e + '"]',
      Je = null,
      Qe = null;
  
    function Xe(e, t) {
      Je = Je || e.content;
      try {
        var r = I(Je);
        e.content = le(r, t)
      } catch (e) {
        w(e)
      }
    }
    var Ye, Ze = (Ye = ['html /deep/ link[rel*="stylesheet" i]:not([disabled])', "html /deep/ style", ':host /deep/ link[rel*="stylesheet" i]:not([disabled])', ":host /deep/ style", ':host link[rel*="stylesheet" i]:not([disabled])', ":host style"], function() {
      try {
        return document.querySelector("x /deep/ x"), !0
      } catch (e) {
        return !1
      }
    }() || (Ye = Ye.map(function(e) {
      return e.replace("/deep/ ", "")
    })), function() {
      try {
        return document.querySelector(":host x"), !0
      } catch (e) {
        return !1
      }
    }() || (Ye = Ye.filter(function(e) {
      return !e.startsWith(":host")
    })), Ye.join(", "));
  
    function et(e) {
      return (e instanceof HTMLStyleElement || e instanceof SVGStyleElement || e instanceof HTMLLinkElement && e.rel && e.rel.toLowerCase().includes("stylesheet") && !e.disabled) && !e.classList.contains("darkreader") && "print" !== e.media
    }
    var tt = function() {
      var e = [],
        t = null;
  
      function r() {
        for (var r; r = e.shift();) r();
        t = null
      }
      return {
        add: function(n) {
          e.push(n), t || (t = requestAnimationFrame(r))
        },
        cancel: function() {
          e.splice(0), cancelAnimationFrame(t), t = null
        }
      }
    }();
  
    function rt(e, t) {
      for (var a = t.update, o = t.loadingStart, i = t.loadingEnd, u = [], s = e;
        (s = s.nextElementSibling) && s.matches(".darkreader");) u.push(s);
      var c = u.find(function(e) {
          return e.matches(".darkreader--cors")
        }) || null,
        l = u.find(function(e) {
          return e.matches(".darkreader--sync")
        }) || null,
        d = null,
        f = null,
        h = !1;
  
      function m() {
        return h
      }
      var p = new MutationObserver(function() {
          a()
        }),
        v = {
          attributes: !0,
          childList: !0,
          characterData: !0
        };
  
      function g() {
        return e instanceof HTMLStyleElement && e.textContent.trim().match(A)
      }
  
      function b() {
        if (c) return c.sheet.cssRules;
        if (null == e.sheet) return null;
        if (e instanceof HTMLLinkElement) try {
          return e.sheet.cssRules
        } catch (e) {
          return w(e), null
        }
        return g() ? null : $()
      }
  
      function y() {
        c ? (e.nextSibling !== c && e.parentNode.insertBefore(c, e.nextSibling), c.nextSibling !== l && e.parentNode.insertBefore(l, c.nextSibling)) : e.nextSibling !== l && e.parentNode.insertBefore(l, e.nextSibling)
      }
      var E = !1,
        M = !1;
  
      function R() {
        return r(this, void 0, void 0, function() {
          var t, r, a;
          return n(this, function(n) {
            switch (n.label) {
              case 0:
                if (!(e instanceof HTMLLinkElement)) return [3, 6];
                if (null != e.sheet) return [3, 4];
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, (o = e, new Promise(function(e, t) {
                  var r = function() {
                      o.removeEventListener("load", n), o.removeEventListener("error", a)
                    },
                    n = function() {
                      r(), e()
                    },
                    a = function() {
                      r(), t("Link loading failed " + o.href)
                    };
                  o.addEventListener("load", n), o.addEventListener("error", a)
                }))];
              case 2:
                return n.sent(), h ? [2, null] : [3, 4];
              case 3:
                return w(n.sent()), M = !0, [2, null];
              case 4:
                try {
                  if (null != e.sheet.cssRules) return [2, e.sheet.cssRules]
                } catch (e) {
                  w(e)
                }
                return [4, nt(e.href)];
              case 5:
                return t = n.sent(), r = L(e.href), h ? [2, null] : [3, 7];
              case 6:
                if (!g()) return [2, null];
                t = e.textContent.trim(), r = L(location.href), n.label = 7;
              case 7:
                if (!t) return [3, 12];
                n.label = 8;
              case 8:
                return n.trys.push([8, 10, , 11]), [4, at(t, r)];
              case 9:
                return a = n.sent(), c = function(e, t) {
                  if (!t) return null;
                  var r = document.createElement("style");
                  return r.classList.add("darkreader"), r.classList.add("darkreader--cors"), r.media = "screen", r.textContent = t, e.parentNode.insertBefore(r, e.nextSibling), r.sheet.disabled = !0, r
                }(e, a), [3, 11];
              case 10:
                return w(n.sent()), [3, 11];
              case 11:
                if (c) return d = O(c, {
                  watchParent: !0,
                  watchSibling: !0
                }), [2, c.sheet.cssRules];
                n.label = 12;
              case 12:
                return [2, null]
            }
            var o
          })
        })
      }
      var P = 0,
        C = new Map,
        T = new Map,
        q = null,
        W = !1;
      var N = null,
        B = null;
  
      function $() {
        try {
          return null == e.sheet ? null : e.sheet.cssRules
        } catch (e) {
          return w(e), null
        }
      }
  
      function z() {
        var e = $();
        e && (N = e.length)
      }
  
      function D() {
        z(), I();
        var e = function() {
          var t;
          (t = $()) && t.length !== N && (z(), a()), B = requestAnimationFrame(e)
        };
        e()
      }
  
      function I() {
        cancelAnimationFrame(B)
      }
  
      function U() {
        p.disconnect(), h = !0, d && d.stop(), f && f.stop(), I()
      }
      var V = 10,
        H = 0;
      return {
        details: function() {
          var e = b();
          return e ? {
            variables: function(e) {
              var t = new Map;
              return e && k(e, function(e) {
                e.style && S(e.style, function(e, r) {
                  x(e) && t.set(e, r)
                })
              }), t
            }(e)
          } : E || M ? null : (E = !0, o(), R().then(function(e) {
            E = !1, i(), e && a()
          }).catch(function(e) {
            w(e), E = !1, i()
          }), null)
        },
        render: function(t, r) {
          var n = b();
          if (n) {
            h = !1;
            var a = 0 === T.size,
              o = new Set(T.keys()),
              i = function(e) {
                return ["mode", "brightness", "contrast", "grayscale", "sepia"].map(function(t) {
                  return t + ":" + e[t]
                }).join(";")
              }(t),
              u = i !== q,
              s = [];
            if (k(n, function(t) {
                var n = t.cssText,
                  i = !1;
                o.delete(n), C.has(n) || (C.set(n, n), i = !0);
                var u = null,
                  c = null;
                if (r.size > 0 || n.includes("var(")) {
                  var l = j(n, r);
                  C.get(n) !== l && (C.set(n, l), i = !0, (u = document.createElement("style")).classList.add("darkreader"), u.classList.add("darkreader--vars"), u.media = "screen", u.textContent = l, e.parentNode.insertBefore(u, e.nextSibling), c = u.sheet.cssRules[0])
                }
                if (i) {
                  a = !0;
                  var d = [],
                    f = c || t;
                  f && f.style && S(f.style, function(e, r) {
                    var n = Me(e, r, t, m);
                    n && d.push(n)
                  });
                  var h = null;
                  d.length > 0 && (h = {
                    selector: t.selectorText,
                    declarations: d
                  }, t.parentRule instanceof CSSMediaRule && (h.media = t.parentRule.media.mediaText), s.push(h)), T.set(n, h), F(u)
                } else s.push(T.get(n))
              }), o.forEach(function(e) {
                C.delete(e), T.delete(e)
              }), q = i, W || a || u) {
              P++, W = !1;
              var c = [],
                d = new Map,
                p = 0;
              s.filter(function(e) {
                  return e
                }).forEach(function(e) {
                  var r = e.selector,
                    n = e.declarations,
                    a = e.media;
                  n.forEach(function(e) {
                    var n = e.property,
                      o = e.value,
                      i = e.important,
                      u = e.sourceValue;
                    if ("function" == typeof o) {
                      var s = o(t);
                      if (s instanceof Promise) {
                        var l = c.length,
                          f = p++;
                        c.push({
                          media: a,
                          selector: r,
                          property: n,
                          value: null,
                          important: i,
                          asyncKey: f,
                          sourceValue: u
                        });
                        var m = P;
                        s.then(function(e) {
                          e && !h && m === P && (c[l].value = e, tt.add(function() {
                            var e, t, r, n, a;
                            h || m !== P || (e = f, t = d.get(e), r = t.declarations, n = t.target, a = t.index, n.deleteRule(a), v(n, a, r), d.delete(e))
                          }))
                        })
                      } else c.push({
                        media: a,
                        selector: r,
                        property: n,
                        value: s,
                        important: i,
                        sourceValue: u
                      })
                    } else c.push({
                      media: a,
                      selector: r,
                      property: n,
                      value: o,
                      important: i,
                      sourceValue: u
                    })
                  })
                }),
                function t() {
                  var r = [];
                  c.forEach(function(e, t) {
                    var n, a, o = 0 === t ? null : c[t - 1],
                      i = o && o.media === e.media,
                      u = o && i && o.selector === e.selector;
                    i ? n = r[r.length - 1] : (n = [], r.push(n)), u ? a = n[n.length - 1] : (a = [], n.push(a)), a.push(e)
                  }), l || ((l = e instanceof SVGStyleElement ? document.createElementNS("http://www.w3.org/2000/svg", "style") : document.createElement("style")).classList.add("darkreader"), l.classList.add("darkreader--sync"), l.media = "screen"), f && f.stop(), y();
                  for (var n = l.sheet, a = n.cssRules.length - 1; a >= 0; a--) n.deleteRule(a);
                  r.forEach(function(e) {
                    var t, r = e[0][0].media;
                    r ? (n.insertRule("@media " + r + " {}", n.cssRules.length), t = n.cssRules[n.cssRules.length - 1]) : t = n, e.forEach(function(e) {
                      var r = e.filter(function(e) {
                        return null == e.value
                      });
                      r.length > 0 && r.forEach(function(r) {
                        var n = r.asyncKey;
                        return d.set(n, {
                          declarations: e,
                          target: t,
                          index: t.cssRules.length
                        })
                      }), v(t, t.cssRules.length, e)
                    })
                  }), f ? f.run() : f = O(l, {
                    onRestore: t,
                    watchSibling: !0,
                    watchParent: !0
                  })
                }()
            }
          }
  
          function v(e, t, r) {
            var n = r[0].selector;
            e.insertRule(n + " {}", t);
            var a = e.cssRules.item(t).style;
            r.forEach(function(e) {
              var t = e.property,
                r = e.value,
                n = e.important,
                o = e.sourceValue;
              a.setProperty(t, null == r ? o : r, n ? "important" : "")
            })
          }
        },
        pause: U,
        destroy: function() {
          U(), F(c), F(l)
        },
        watch: function() {
          p.observe(e, v), e instanceof HTMLStyleElement && D()
        },
        restore: function() {
          if (l)
            if (++H > V) w("Style sheet was moved multiple times", e);
            else {
              w("Restore style", l, e);
              var t = null == l.sheet || l.sheet.cssRules.length > 0;
              y(), t && (W = !0, z(), a())
            }
        }
      }
    }
  
    function nt(e) {
      return r(this, void 0, void 0, function() {
        return n(this, function(t) {
          switch (t.label) {
            case 0:
              return e.startsWith("data:") ? [4, fetch(e)] : [3, 3];
            case 1:
              return [4, t.sent().text()];
            case 2:
              return [2, t.sent()];
            case 3:
              return [4, we({
                url: e,
                responseType: "text",
                mimeType: "text/css"
              })];
            case 4:
              return [2, t.sent()]
          }
        })
      })
    }
  
    function at(e, t) {
      return r(this, void 0, void 0, function() {
        var r, a, o, i, u, s, c;
        return n(this, function(n) {
          switch (n.label) {
            case 0:
              e = function(e, t) {
                return e.replace(M, function(e) {
                  var r = R(e);
                  return 'url("' + b(t, r) + '")'
                })
              }(e = function(e) {
                return e.replace(C, "")
              }(e = e.replace(P, "")), t), r = te(A, e), a = 0, o = r, n.label = 1;
            case 1:
              if (!(a < o.length)) return [3, 8];
              i = o[a], u = R(i.substring(8).replace(/;$/, "")), s = b(t, u), c = void 0, n.label = 2;
            case 2:
              return n.trys.push([2, 5, , 6]), [4, nt(s)];
            case 3:
              return [4, at(c = n.sent(), L(s))];
            case 4:
              return c = n.sent(), [3, 6];
            case 5:
              return w(n.sent()), c = "", [3, 6];
            case 6:
              e = e.split(i).join(c), n.label = 7;
            case 7:
              return a++, [3, 1];
            case 8:
              return [2, e = e.trim()]
          }
        })
      })
    }
    var ot = null;
  
    function it(e) {
      var t = [];
      return Array.from(e).forEach(function(e) {
        e instanceof Element && et(e) && t.push(e), (e instanceof Element || e instanceof ShadowRoot) && t.push.apply(t, Array.from(e.querySelectorAll(Ze)).filter(et))
      }), t
    }
    var ut, st = new Map;
  
    function ct(e) {
      (function() {
        try {
          return document.querySelector(":defined"), !0
        } catch (e) {
          return !1
        }
      })() && e.querySelectorAll(":not(:defined)").forEach(function(e) {
        var t = e.tagName.toLowerCase();
        st.has(t) || (st.set(t, new Set), function(e) {
          return new Promise(function(t) {
            if (window.customElements && "function" == typeof window.customElements.whenDefined) customElements.whenDefined(e).then(t);
            else {
              var r = function() {
                var n = st.get(e);
                n && n.size > 0 && (n.values().next().value.matches(":defined") ? t() : requestAnimationFrame(r))
              };
              requestAnimationFrame(r)
            }
          })
        }(t).then(function() {
          if (ut) {
            var e = st.get(t);
            st.delete(t), ut(Array.from(e))
          }
        })), st.get(t).add(e)
      })
    }
    var lt = new Set,
      dt = new WeakMap;
  
    function ft(e) {
      function t(t) {
        var n = new Set,
          a = new Set,
          o = new Set,
          i = new Set,
          u = new Set,
          s = new Set,
          c = new Set;
        t.forEach(function(e) {
          e.addedNodes.forEach(function(e) {
            return u.add(e)
          }), e.removedNodes.forEach(function(e) {
            return s.add(e)
          }), "attributes" === e.type && et(e.target) && c.add(e.target)
        });
        var l = it(u),
          d = it(s);
        u.forEach(function(e) {
          W(e, function(e) {
            var t = it(e.shadowRoot.children);
            t.length > 0 && l.push.apply(l, t)
          })
        }), s.forEach(function(e) {
          W(e, function(e) {
            var t = it(e.shadowRoot.children);
            t.length > 0 && d.push.apply(d, t)
          })
        }), d.forEach(function(e) {
          e.isConnected ? i.add(e) : o.add(e)
        }), c.forEach(function(e) {
          o.has(e) || a.add(e)
        }), l.forEach(function(e) {
          o.has(e) || i.has(e) || a.has(e) || n.add(e)
        }), n.size + o.size + a.size > 0 && e({
          created: Array.from(n),
          updated: Array.from(a),
          removed: Array.from(o),
          moved: Array.from(i)
        }), u.forEach(function(e) {
          e.isConnected && (W(e, r), e instanceof Element && ct(e))
        })
      }
  
      function r(e) {
        if (!dt.has(e)) {
          var r = new MutationObserver(t);
          r.observe(e.shadowRoot, n), lt.add(r), dt.set(e, r)
        }
      }
      ot && (ot.disconnect(), lt.forEach(function(e) {
        return e.disconnect()
      }), lt.clear(), dt = new WeakMap);
      var n = {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["rel", "disabled"]
      };
      (ot = new MutationObserver(t)).observe(document.documentElement, n), W(document.documentElement, r), ut = function(t) {
        var n = it(t.map(function(e) {
          return e.shadowRoot
        }));
        e({
          created: n,
          updated: [],
          removed: [],
          moved: []
        }), t.forEach(function(e) {
          return r(e)
        })
      }, ct(document)
    }
  
    function ht() {
      ot && (ot.disconnect(), ot = null, lt.forEach(function(e) {
        return e.disconnect()
      }), lt.clear(), dt = new WeakMap, ut = null, st.clear())
    }
    var mt = new Map,
      pt = new Map,
      vt = null,
      gt = null,
      bt = null;
  
    function yt(e, t) {
      void 0 === t && (t = document.head || document);
      var r = t.querySelector("." + e);
      return r || ((r = document.createElement("style")).classList.add("darkreader"), r.classList.add(e), r.media = "screen"), r
    }
    var wt = new Map;
  
    function kt(e, t) {
      wt.has(t) && wt.get(t).stop(), wt.set(t, O(e, {
        watchParent: !0,
        watchSibling: !1
      }))
    }
  
    function St() {
      var e = yt("darkreader--fallback");
      document.head.insertBefore(e, document.head.firstChild), e.textContent = Re(vt, {
        strict: !0
      }), kt(e, "fallback");
      var r = yt("darkreader--user-agent");
      document.head.insertBefore(r, e.nextSibling), r.textContent = Ae(vt, bt), kt(r, "user-agent");
      var n, a, o = yt("darkreader--text");
      document.head.insertBefore(o, e.nextSibling), vt.useFont || vt.textStroke > 0 ? o.textContent = (n = vt, (a = []).push("* {"), n.useFont && n.fontFamily && a.push("  font-family: " + n.fontFamily + " !important;"), n.textStroke > 0 && (a.push("  -webkit-text-stroke: " + n.textStroke + "px !important;"), a.push("  text-stroke: " + n.textStroke + "px !important;")), a.push("}"), a.join("\n")) : o.textContent = "", kt(o, "text");
      var i = yt("darkreader--invert");
      document.head.insertBefore(i, o.nextSibling), gt && Array.isArray(gt.invert) && gt.invert.length > 0 ? i.textContent = [gt.invert.join(", ") + " {", "    filter: " + ve(t(t({}, vt), {
        contrast: 0 === vt.mode ? vt.contrast : Z(vt.contrast - 10, 0, 100)
      })) + " !important;", "}"].join("\n") : i.textContent = "", kt(i, "invert");
      var u = yt("darkreader--inline");
      document.head.insertBefore(u, i.nextSibling), u.textContent = ze(), kt(u, "inline");
      var s = yt("darkreader--override");
      document.head.appendChild(s), s.textContent = gt && gt.css ? gt.css.replace(/\${(.+?)}/g, function(e, t) {
        try {
          var r = Ce(t);
          return ie(r, vt, ue)
        } catch (e) {
          return w(e), t
        }
      }) : "", kt(s, "override")
    }
    var xt = new Set;
  
    function Et(e) {
      var t = yt("darkreader--inline", e);
      e.insertBefore(t, e.firstChild), t.textContent = ze(), xt.add(e)
    }
  
    function Mt() {
      var e = document.head.querySelector(".darkreader--fallback");
      e && (e.textContent = "")
    }
    var At = 0,
      Rt = new Set;
  
    function Lt(e) {
      if (!mt.has(e)) {
        var t = ++At,
          r = rt(e, {
            update: function() {
              var e = r.details();
              e && (0 === e.variables.size ? r.render(vt, pt) : (Pt(e.variables), Tt()))
            },
            loadingStart: function() {
              if (!qt() || !Wt) {
                Rt.add(t);
                var e = document.querySelector(".darkreader--fallback");
                e.textContent || (e.textContent = Re(vt, {
                  strict: !1
                }))
              }
            },
            loadingEnd: function() {
              Rt.delete(t), 0 === Rt.size && qt() && Mt()
            }
          });
        return mt.set(e, r), r
      }
    }
  
    function Pt(e) {
      0 !== e.size && (e.forEach(function(e, t) {
        return pt.set(t, e)
      }), pt.forEach(function(e, t) {
        return pt.set(t, j(e, pt))
      }))
    }
  
    function Ct(e) {
      var t = mt.get(e);
      t && (t.destroy(), mt.delete(e))
    }
    var Tt = q(function(e) {
        mt.forEach(function(e) {
          return e.render(vt, pt)
        }), e && e()
      }),
      jt = function() {
        Tt.cancel()
      };
  
    function qt() {
      return "complete" === document.readyState || "interactive" === document.readyState
    }
  
    function Ft() {
      qt() && (document.removeEventListener("readystatechange", Ft), 0 === Rt.size && Mt())
    }
    var Ot = null,
      Wt = !document.hidden;
  
    function Nt() {
      document.removeEventListener("visibilitychange", Ot), Ot = null
    }
  
    function Bt() {
      function e() {
        var e, t;
        ! function() {
          jt(), Pt(E(document.documentElement));
          var e = Array.from(document.querySelectorAll(Ze));
          W(document.documentElement, function(t) {
            var r = t.shadowRoot.querySelectorAll(Ze);
            r.length > 0 && e.push.apply(e, Array.from(r))
          });
          var t = Array.from(e).filter(function(e) {
              return !mt.has(e) && et(e)
            }).map(function(e) {
              return Lt(e)
            }),
            r = t.map(function(e) {
              return e.details()
            }).filter(function(e) {
              return e && e.variables.size > 0
            }).map(function(e) {
              return e.variables
            });
          0 === r.length ? (mt.forEach(function(e) {
            return e.render(vt, pt)
          }), 0 === Rt.size && Mt()) : (r.forEach(function(e) {
            return Pt(e)
          }), Tt(function() {
            0 === Rt.size && Mt()
          })), t.forEach(function(e) {
            return e.watch()
          });
          var n = Array.from(document.querySelectorAll($e));
          W(document.documentElement, function(e) {
            var t = e.shadowRoot.querySelectorAll($e);
            t.length > 0 && (Et(e.shadowRoot), n.push.apply(n, Array.from(t)))
          }), n.forEach(function(e) {
            return Ge(e, vt)
          })
        }(), ft(function(e) {
          var t = e.created,
            r = e.updated,
            n = e.removed,
            a = e.moved,
            o = n,
            i = t.concat(r).concat(a).filter(function(e) {
              return !mt.has(e)
            }),
            u = a.filter(function(e) {
              return mt.has(e)
            });
          o.forEach(function(e) {
            return Ct(e)
          });
          var s = i.map(function(e) {
              return Lt(e)
            }),
            c = s.map(function(e) {
              return e.details()
            }).filter(function(e) {
              return e && e.variables.size > 0
            }).map(function(e) {
              var t = e.variables;
              return t
            });
          0 === c.length ? s.forEach(function(e) {
            return e.render(vt, pt)
          }) : (c.forEach(function(e) {
            return Pt(e)
          }), Tt()), s.forEach(function(e) {
            return e.watch()
          }), u.forEach(function(e) {
            return mt.get(e).restore()
          })
        }), e = function(e) {
          if (Ge(e, vt), e === document.documentElement) {
            var t = E(document.documentElement);
            t.size > 0 && (Pt(t), Tt())
          }
        }, t = function(e) {
          var t = e.querySelectorAll($e);
          t.length > 0 && (Et(e), t.forEach(function(e) {
            return Ge(e, vt)
          }))
        }, Ie(document.documentElement, e, t), W(document.documentElement, function(r) {
          Ie(r.shadowRoot, e, t)
        }), document.addEventListener("readystatechange", Ft)
      }
      var t, r, n, a;
      St(), document.hidden ? (t = e, r = Boolean(Ot), Ot = function() {
        document.hidden || (Nt(), t(), Wt = !0)
      }, r || document.addEventListener("visibilitychange", Ot)) : e(), n = vt, (a = document.querySelector(Ke)) ? Xe(a, n) : (Qe && Qe.disconnect(), (Qe = new MutationObserver(function(e) {
        e: for (var t = 0, r = e; t < r.length; t++)
          for (var a = r[t], o = 0, i = Array.from(a.addedNodes); o < i.length; o++) {
            var u = i[o];
            if (u instanceof HTMLMetaElement && u.name === _e) {
              Qe.disconnect(), Qe = null, Xe(u, n);
              break e
            }
          }
      })).observe(document.head, {
        childList: !0
      }))
    }
  
    function $t() {
      mt.forEach(function(e) {
        return e.pause()
      }), Array.from(wt.values()).forEach(function(e) {
        return e.stop()
      }), wt.clear(), ht(), De.forEach(function(e) {
        return e.disconnect()
      }), De.clear(), document.removeEventListener("readystatechange", Ft)
    }
  
    function zt(e, t, r) {
      if (vt = e, gt = t, bt = r, document.head) Bt();
      else {
        if (!a()) {
          var n = yt("darkreader--fallback");
          document.documentElement.appendChild(n), n.textContent = Re(vt, {
            strict: !0
          })
        }
        var o = new MutationObserver(function() {
          document.head && (o.disconnect(), Bt())
        });
        o.observe(document, {
          childList: !0,
          subtree: !0
        })
      }
    }
  
    function Dt() {
      Nt(), jt(), $t(), Oe(), F(document.querySelector(".darkreader--fallback")), document.head && (! function() {
        Qe && (Qe.disconnect(), Qe = null);
        var e = document.querySelector(Ke);
        e && Je && (e.content = Je)
      }(), F(document.head.querySelector(".darkreader--user-agent")), F(document.head.querySelector(".darkreader--text")), F(document.head.querySelector(".darkreader--invert")), F(document.head.querySelector(".darkreader--inline")), F(document.head.querySelector(".darkreader--override"))), xt.forEach(function(e) {
        F(e.querySelector(".darkreader--inline"))
      }), xt.clear(), Array.from(mt.keys()).forEach(function(e) {
        return Ct(e)
      }), Array.from(document.querySelectorAll(".darkreader")).forEach(F)
    }
    var It = {
        mode: 1,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        sepia: 0,
        useFont: !1,
        fontFamily: "",
        textStroke: 0,
        engine: v.dynamicTheme,
        stylesheet: ""
      },
      Ut = function() {
        try {
          return window.self !== window.top
        } catch (e) {
          return console.warn(e), !0
        }
      }();
  
    function Vt(e, r) {
      void 0 === e && (e = {}), void 0 === r && (r = null);
      var n = t(t({}, It), e);
      if (n.engine !== v.dynamicTheme) throw new Error("Theme engine is not supported");
      zt(n, r, Ut)
    }
  
    function Ht() {
      Dt()
    }
    var Gt = matchMedia("(prefers-color-scheme: dark)"),
      _t = {
        themeOptions: null,
        fixes: null
      };
  
    function Kt() {
      Gt.matches ? Vt(_t.themeOptions, _t.fixes) : Ht()
    }
    var Jt = function(e) {
      c = e || s
    };
    e.auto = function(e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = null), e ? (_t = {
        themeOptions: e,
        fixes: t
      }, Kt(), Gt.addListener(Kt)) : (Gt.removeListener(Kt), Ht())
    }, e.disable = Ht, e.enable = Vt, e.setFetchMethod = Jt, Object.defineProperty(e, "__esModule", {
      value: !0
    })
  });