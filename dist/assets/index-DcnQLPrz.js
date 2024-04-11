var Xn = Object.defineProperty;
var Wn = (i, e, n) =>
  e in i
    ? Xn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (i[e] = n);
var E = (i, e, n) => (Wn(i, typeof e != "symbol" ? e + "" : e, n), n);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const p of document.querySelectorAll('link[rel="modulepreload"]')) l(p);
  new MutationObserver((p) => {
    for (const f of p)
      if (f.type === "childList")
        for (const M of f.addedNodes)
          M.tagName === "LINK" && M.rel === "modulepreload" && l(M);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(p) {
    const f = {};
    return (
      p.integrity && (f.integrity = p.integrity),
      p.referrerPolicy && (f.referrerPolicy = p.referrerPolicy),
      p.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : p.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function l(p) {
    if (p.ep) return;
    p.ep = !0;
    const f = n(p);
    fetch(p.href, f);
  }
})();
const Ur = 4,
  Zn = {
    exit: "If you want to exit, just close the tab.",
    tv: "This is my TV, where I watch my favorite series, like <b>Supernatural</b>, <b>Doctor Who</b>, <b>Cobra Kai</b>, <b>Daredevil</b> and <b>Gotham</b>.",
    sofa: "This is my sofa, where I relax myself after work and watch some <b>Scream</b>, <b>Batman</b>, <b>Marvel</b> and <b>Fast & Furious</b> movies.",
    music:
      "Here's the 1st thing that I love: <b>Music</b>. I play the guitar and the drums and I also do music production on Logic Pro, soon I&#39ll upload some on Youtube ;). My favourite genres are rock and metal, with a side of rap.",
    sport:
      "The 2nd thing that I love: <b>Sports</b>. I practice a variety of phisical activities, like the gym, martial arts, Muay Thai and BJJ in particular, running, parkour and skateboarding.",
    "study table": `This is my study table, where I, well, study. I also love to learn languages, right now I'm learning <b>Russian</b>. If you want to see my profile on Duolingo, <a href="https://www.duolingo.com/profile/AndrewRey24?via=share_profile" target='_blank'>check it here</a>.`,
    library:
      "My library. Here I have all my favourite books, going from <b>The Meditations</b> by Marcus Aurelius to <b>The Conte of Montecristo</b>, and even some mangas and manhwas like <b>The Breaker</b>, <b>Sun Ken Rock</b> and <b>Attack on Titan</b>.",
    computer: `Here's my computer, where I work on designs, development, music production, editing and play chess. <a href="">Click here</a> to check my portfolio and see all the projects and the technologies that I use.`,
    dev: "Last but not least, the 3rd thing that I love: <b>Development</b>. Websites, full-stack apps and mobile apps. Here's the link to <a href='https://github.com/reyrot24' target='_blank'>my Github</a> if you want to check it out. ",
  };
var _n = Object.defineProperty,
  o = (i, e) => _n(i, "name", { value: e, configurable: !0 }),
  $n = (() => {
    for (var i = new Uint8Array(128), e = 0; e < 64; e++)
      i[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
    return (n) => {
      for (
        var l = n.length,
          p = new Uint8Array(
            (((l - (n[l - 1] == "=") - (n[l - 2] == "=")) * 3) / 4) | 0
          ),
          f = 0,
          M = 0;
        f < l;

      ) {
        var C = i[n.charCodeAt(f++)],
          U = i[n.charCodeAt(f++)],
          V = i[n.charCodeAt(f++)],
          W = i[n.charCodeAt(f++)];
        (p[M++] = (C << 2) | (U >> 4)),
          (p[M++] = (U << 4) | (V >> 2)),
          (p[M++] = (V << 6) | W);
      }
      return p;
    };
  })();
function Ge(i) {
  return (i * Math.PI) / 180;
}
o(Ge, "deg2rad");
function It(i) {
  return (i * 180) / Math.PI;
}
o(It, "rad2deg");
function Ke(i, e, n) {
  return e > n ? Ke(i, n, e) : Math.min(Math.max(i, e), n);
}
o(Ke, "clamp");
function je(i, e, n) {
  if (typeof i == "number" && typeof e == "number") return i + (e - i) * n;
  if (
    (i instanceof b && e instanceof b) ||
    (i instanceof te && e instanceof te)
  )
    return i.lerp(e, n);
  throw new Error(
    `Bad value for lerp(): ${i}, ${e}. Only number, Vec2 and Color is supported.`
  );
}
o(je, "lerp");
function _e(i, e, n, l, p) {
  return l + ((i - e) / (n - e)) * (p - l);
}
o(_e, "map");
function on(i, e, n, l, p) {
  return Ke(_e(i, e, n, l, p), l, p);
}
o(on, "mapc");
var ae,
  b =
    ((ae = class {
      constructor(e = 0, n = e) {
        E(this, "x", 0);
        E(this, "y", 0);
        (this.x = e), (this.y = n);
      }
      static fromAngle(e) {
        let n = Ge(e);
        return new ae(Math.cos(n), Math.sin(n));
      }
      clone() {
        return new ae(this.x, this.y);
      }
      add(...e) {
        let n = B(...e);
        return new ae(this.x + n.x, this.y + n.y);
      }
      sub(...e) {
        let n = B(...e);
        return new ae(this.x - n.x, this.y - n.y);
      }
      scale(...e) {
        let n = B(...e);
        return new ae(this.x * n.x, this.y * n.y);
      }
      dist(...e) {
        let n = B(...e);
        return this.sub(n).len();
      }
      sdist(...e) {
        let n = B(...e);
        return this.sub(n).slen();
      }
      len() {
        return Math.sqrt(this.dot(this));
      }
      slen() {
        return this.dot(this);
      }
      unit() {
        let e = this.len();
        return e === 0 ? new ae(0) : this.scale(1 / e);
      }
      normal() {
        return new ae(this.y, -this.x);
      }
      reflect(e) {
        return this.sub(e.scale(2 * this.dot(e)));
      }
      project(e) {
        return e.scale(e.dot(this) / e.len());
      }
      reject(e) {
        return this.sub(this.project(e));
      }
      dot(e) {
        return this.x * e.x + this.y * e.y;
      }
      cross(e) {
        return this.x * e.y - this.y * e.x;
      }
      angle(...e) {
        let n = B(...e);
        return It(Math.atan2(this.y - n.y, this.x - n.x));
      }
      angleBetween(...e) {
        let n = B(...e);
        return It(Math.atan2(this.cross(n), this.dot(n)));
      }
      lerp(e, n) {
        return new ae(je(this.x, e.x, n), je(this.y, e.y, n));
      }
      slerp(e, n) {
        let l = this.dot(e),
          p = this.cross(e),
          f = Math.atan2(p, l);
        return this.scale(Math.sin((1 - n) * f))
          .add(e.scale(Math.sin(n * f)))
          .scale(1 / p);
      }
      isZero() {
        return this.x === 0 && this.y === 0;
      }
      toFixed(e) {
        return new ae(Number(this.x.toFixed(e)), Number(this.y.toFixed(e)));
      }
      transform(e) {
        return e.multVec2(this);
      }
      eq(e) {
        return this.x === e.x && this.y === e.y;
      }
      bbox() {
        return new Ee(this, 0, 0);
      }
      toString() {
        return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
      }
    }),
    o(ae, "Vec2"),
    E(ae, "LEFT", new ae(-1, 0)),
    E(ae, "RIGHT", new ae(1, 0)),
    E(ae, "UP", new ae(0, -1)),
    E(ae, "DOWN", new ae(0, 1)),
    ae);
function B(...i) {
  if (i.length === 1) {
    if (i[0] instanceof b) return new b(i[0].x, i[0].y);
    if (Array.isArray(i[0]) && i[0].length === 2) return new b(...i[0]);
  }
  return new b(...i);
}
o(B, "vec2");
var X,
  te =
    ((X = class {
      constructor(e, n, l) {
        E(this, "r", 255);
        E(this, "g", 255);
        E(this, "b", 255);
        (this.r = Ke(e, 0, 255)),
          (this.g = Ke(n, 0, 255)),
          (this.b = Ke(l, 0, 255));
      }
      static fromArray(e) {
        return new X(e[0], e[1], e[2]);
      }
      static fromHex(e) {
        if (typeof e == "number")
          return new X((e >> 16) & 255, (e >> 8) & 255, (e >> 0) & 255);
        if (typeof e == "string") {
          let n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return new X(
            parseInt(n[1], 16),
            parseInt(n[2], 16),
            parseInt(n[3], 16)
          );
        } else throw new Error("Invalid hex color format");
      }
      static fromHSL(e, n, l) {
        if (n == 0) return new X(255 * l, 255 * l, 255 * l);
        let p = o(
            (W, S, z) => (
              z < 0 && (z += 1),
              z > 1 && (z -= 1),
              z < 1 / 6
                ? W + (S - W) * 6 * z
                : z < 1 / 2
                ? S
                : z < 2 / 3
                ? W + (S - W) * (2 / 3 - z) * 6
                : W
            ),
            "hue2rgb"
          ),
          f = l < 0.5 ? l * (1 + n) : l + n - l * n,
          M = 2 * l - f,
          C = p(M, f, e + 1 / 3),
          U = p(M, f, e),
          V = p(M, f, e - 1 / 3);
        return new X(
          Math.round(C * 255),
          Math.round(U * 255),
          Math.round(V * 255)
        );
      }
      clone() {
        return new X(this.r, this.g, this.b);
      }
      lighten(e) {
        return new X(this.r + e, this.g + e, this.b + e);
      }
      darken(e) {
        return this.lighten(-e);
      }
      invert() {
        return new X(255 - this.r, 255 - this.g, 255 - this.b);
      }
      mult(e) {
        return new X(
          (this.r * e.r) / 255,
          (this.g * e.g) / 255,
          (this.b * e.b) / 255
        );
      }
      lerp(e, n) {
        return new X(
          je(this.r, e.r, n),
          je(this.g, e.g, n),
          je(this.b, e.b, n)
        );
      }
      toHSL() {
        let e = this.r / 255,
          n = this.g / 255,
          l = this.b / 255,
          p = Math.max(e, n, l),
          f = Math.min(e, n, l),
          M = (p + f) / 2,
          C = M,
          U = M;
        if (p == f) M = C = 0;
        else {
          let V = p - f;
          switch (((C = U > 0.5 ? V / (2 - p - f) : V / (p + f)), p)) {
            case e:
              M = (n - l) / V + (n < l ? 6 : 0);
              break;
            case n:
              M = (l - e) / V + 2;
              break;
            case l:
              M = (e - n) / V + 4;
              break;
          }
          M /= 6;
        }
        return [M, C, U];
      }
      eq(e) {
        return this.r === e.r && this.g === e.g && this.b === e.b;
      }
      toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
      }
      toHex() {
        return (
          "#" +
          ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
            .toString(16)
            .slice(1)
        );
      }
    }),
    o(X, "Color"),
    E(X, "RED", new X(255, 0, 0)),
    E(X, "GREEN", new X(0, 255, 0)),
    E(X, "BLUE", new X(0, 0, 255)),
    E(X, "YELLOW", new X(255, 255, 0)),
    E(X, "MAGENTA", new X(255, 0, 255)),
    E(X, "CYAN", new X(0, 255, 255)),
    E(X, "WHITE", new X(255, 255, 255)),
    E(X, "BLACK", new X(0, 0, 0)),
    X);
function _(...i) {
  if (i.length === 0) return new te(255, 255, 255);
  if (i.length === 1) {
    if (i[0] instanceof te) return i[0].clone();
    if (typeof i[0] == "string") return te.fromHex(i[0]);
    if (Array.isArray(i[0]) && i[0].length === 3) return te.fromArray(i[0]);
  }
  return new te(...i);
}
o(_, "rgb");
var eo = o((i, e, n) => te.fromHSL(i, e, n), "hsl2rgb"),
  ut,
  me =
    ((ut = class {
      constructor(e, n, l, p) {
        E(this, "x", 0);
        E(this, "y", 0);
        E(this, "w", 1);
        E(this, "h", 1);
        (this.x = e), (this.y = n), (this.w = l), (this.h = p);
      }
      scale(e) {
        return new ut(
          this.x + this.w * e.x,
          this.y + this.h * e.y,
          this.w * e.w,
          this.h * e.h
        );
      }
      pos() {
        return new b(this.x, this.y);
      }
      clone() {
        return new ut(this.x, this.y, this.w, this.h);
      }
      eq(e) {
        return (
          this.x === e.x && this.y === e.y && this.w === e.w && this.h === e.h
        );
      }
      toString() {
        return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
      }
    }),
    o(ut, "Quad"),
    ut);
function le(i, e, n, l) {
  return new me(i, e, n, l);
}
o(le, "quad");
var Te,
  Le =
    ((Te = class {
      constructor(e) {
        E(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        e && (this.m = e);
      }
      static translate(e) {
        return new Te([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e.x, e.y, 0, 1]);
      }
      static scale(e) {
        return new Te([e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      }
      static rotateX(e) {
        e = Ge(-e);
        let n = Math.cos(e),
          l = Math.sin(e);
        return new Te([1, 0, 0, 0, 0, n, -l, 0, 0, l, n, 0, 0, 0, 0, 1]);
      }
      static rotateY(e) {
        e = Ge(-e);
        let n = Math.cos(e),
          l = Math.sin(e);
        return new Te([n, 0, l, 0, 0, 1, 0, 0, -l, 0, n, 0, 0, 0, 0, 1]);
      }
      static rotateZ(e) {
        e = Ge(-e);
        let n = Math.cos(e),
          l = Math.sin(e);
        return new Te([n, -l, 0, 0, l, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      }
      translate(e) {
        return (
          (this.m[12] += this.m[0] * e.x + this.m[4] * e.y),
          (this.m[13] += this.m[1] * e.x + this.m[5] * e.y),
          (this.m[14] += this.m[2] * e.x + this.m[6] * e.y),
          (this.m[15] += this.m[3] * e.x + this.m[7] * e.y),
          this
        );
      }
      scale(e) {
        return (
          (this.m[0] *= e.x),
          (this.m[4] *= e.y),
          (this.m[1] *= e.x),
          (this.m[5] *= e.y),
          (this.m[2] *= e.x),
          (this.m[6] *= e.y),
          (this.m[3] *= e.x),
          (this.m[7] *= e.y),
          this
        );
      }
      rotate(e) {
        e = Ge(-e);
        let n = Math.cos(e),
          l = Math.sin(e),
          p = this.m[0],
          f = this.m[1],
          M = this.m[4],
          C = this.m[5];
        return (
          (this.m[0] = p * n + f * l),
          (this.m[1] = -p * l + f * n),
          (this.m[4] = M * n + C * l),
          (this.m[5] = -M * l + C * n),
          this
        );
      }
      mult(e) {
        let n = [];
        for (let l = 0; l < 4; l++)
          for (let p = 0; p < 4; p++)
            n[l * 4 + p] =
              this.m[0 * 4 + p] * e.m[l * 4 + 0] +
              this.m[1 * 4 + p] * e.m[l * 4 + 1] +
              this.m[2 * 4 + p] * e.m[l * 4 + 2] +
              this.m[3 * 4 + p] * e.m[l * 4 + 3];
        return new Te(n);
      }
      multVec2(e) {
        return new b(
          e.x * this.m[0] + e.y * this.m[4] + this.m[12],
          e.x * this.m[1] + e.y * this.m[5] + this.m[13]
        );
      }
      getTranslation() {
        return new b(this.m[12], this.m[13]);
      }
      getScale() {
        if (this.m[0] != 0 || this.m[1] != 0) {
          let e = this.m[0] * this.m[5] - this.m[1] * this.m[4],
            n = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
          return new b(n, e / n);
        } else if (this.m[4] != 0 || this.m[5] != 0) {
          let e = this.m[0] * this.m[5] - this.m[1] * this.m[4],
            n = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
          return new b(e / n, n);
        } else return new b(0, 0);
      }
      getRotation() {
        if (this.m[0] != 0 || this.m[1] != 0) {
          let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
          return It(
            this.m[1] > 0 ? Math.acos(this.m[0] / e) : -Math.acos(this.m[0] / e)
          );
        } else if (this.m[4] != 0 || this.m[5] != 0) {
          let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
          return It(
            Math.PI / 2 -
              (this.m[5] > 0
                ? Math.acos(-this.m[4] / e)
                : -Math.acos(this.m[4] / e))
          );
        } else return 0;
      }
      getSkew() {
        if (this.m[0] != 0 || this.m[1] != 0) {
          let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
          return new b(
            Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e),
            0
          );
        } else if (this.m[4] != 0 || this.m[5] != 0) {
          let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
          return new b(
            0,
            Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e)
          );
        } else return new b(0, 0);
      }
      invert() {
        let e = [],
          n = this.m[10] * this.m[15] - this.m[14] * this.m[11],
          l = this.m[9] * this.m[15] - this.m[13] * this.m[11],
          p = this.m[9] * this.m[14] - this.m[13] * this.m[10],
          f = this.m[8] * this.m[15] - this.m[12] * this.m[11],
          M = this.m[8] * this.m[14] - this.m[12] * this.m[10],
          C = this.m[8] * this.m[13] - this.m[12] * this.m[9],
          U = this.m[6] * this.m[15] - this.m[14] * this.m[7],
          V = this.m[5] * this.m[15] - this.m[13] * this.m[7],
          W = this.m[5] * this.m[14] - this.m[13] * this.m[6],
          S = this.m[4] * this.m[15] - this.m[12] * this.m[7],
          z = this.m[4] * this.m[14] - this.m[12] * this.m[6],
          x = this.m[5] * this.m[15] - this.m[13] * this.m[7],
          Z = this.m[4] * this.m[13] - this.m[12] * this.m[5],
          we = this.m[6] * this.m[11] - this.m[10] * this.m[7],
          re = this.m[5] * this.m[11] - this.m[9] * this.m[7],
          G = this.m[5] * this.m[10] - this.m[9] * this.m[6],
          pe = this.m[4] * this.m[11] - this.m[8] * this.m[7],
          R = this.m[4] * this.m[10] - this.m[8] * this.m[6],
          Pe = this.m[4] * this.m[9] - this.m[8] * this.m[5];
        (e[0] = this.m[5] * n - this.m[6] * l + this.m[7] * p),
          (e[4] = -(this.m[4] * n - this.m[6] * f + this.m[7] * M)),
          (e[8] = this.m[4] * l - this.m[5] * f + this.m[7] * C),
          (e[12] = -(this.m[4] * p - this.m[5] * M + this.m[6] * C)),
          (e[1] = -(this.m[1] * n - this.m[2] * l + this.m[3] * p)),
          (e[5] = this.m[0] * n - this.m[2] * f + this.m[3] * M),
          (e[9] = -(this.m[0] * l - this.m[1] * f + this.m[3] * C)),
          (e[13] = this.m[0] * p - this.m[1] * M + this.m[2] * C),
          (e[2] = this.m[1] * U - this.m[2] * V + this.m[3] * W),
          (e[6] = -(this.m[0] * U - this.m[2] * S + this.m[3] * z)),
          (e[10] = this.m[0] * x - this.m[1] * S + this.m[3] * Z),
          (e[14] = -(this.m[0] * W - this.m[1] * z + this.m[2] * Z)),
          (e[3] = -(this.m[1] * we - this.m[2] * re + this.m[3] * G)),
          (e[7] = this.m[0] * we - this.m[2] * pe + this.m[3] * R),
          (e[11] = -(this.m[0] * re - this.m[1] * pe + this.m[3] * Pe)),
          (e[15] = this.m[0] * G - this.m[1] * R + this.m[2] * Pe);
        let Y =
          this.m[0] * e[0] +
          this.m[1] * e[4] +
          this.m[2] * e[8] +
          this.m[3] * e[12];
        for (let be = 0; be < 4; be++)
          for (let Ae = 0; Ae < 4; Ae++) e[be * 4 + Ae] *= 1 / Y;
        return new Te(e);
      }
      clone() {
        return new Te([...this.m]);
      }
      toString() {
        return this.m.toString();
      }
    }),
    o(Te, "Mat4"),
    Te);
function xi(i, e, n, l = (p) => -Math.cos(p)) {
  return i + ((l(n) + 1) / 2) * (e - i);
}
o(xi, "wave");
var to = 1103515245,
  ro = 12345,
  Ks = 2147483648,
  cr,
  an =
    ((cr = class {
      constructor(e) {
        E(this, "seed");
        this.seed = e;
      }
      gen() {
        return (this.seed = (to * this.seed + ro) % Ks), this.seed / Ks;
      }
      genNumber(e, n) {
        return e + this.gen() * (n - e);
      }
      genVec2(e, n) {
        return new b(this.genNumber(e.x, n.x), this.genNumber(e.y, n.y));
      }
      genColor(e, n) {
        return new te(
          this.genNumber(e.r, n.r),
          this.genNumber(e.g, n.g),
          this.genNumber(e.b, n.b)
        );
      }
      genAny(...e) {
        if (e.length === 0) return this.gen();
        if (e.length === 1) {
          if (typeof e[0] == "number") return this.genNumber(0, e[0]);
          if (e[0] instanceof b) return this.genVec2(B(0, 0), e[0]);
          if (e[0] instanceof te) return this.genColor(_(0, 0, 0), e[0]);
        } else if (e.length === 2) {
          if (typeof e[0] == "number" && typeof e[1] == "number")
            return this.genNumber(e[0], e[1]);
          if (e[0] instanceof b && e[1] instanceof b)
            return this.genVec2(e[0], e[1]);
          if (e[0] instanceof te && e[1] instanceof te)
            return this.genColor(e[0], e[1]);
        }
      }
    }),
    o(cr, "RNG"),
    cr),
  Ei = new an(Date.now());
function hn(i) {
  return i != null && (Ei.seed = i), Ei.seed;
}
o(hn, "randSeed");
function ur(...i) {
  return Ei.genAny(...i);
}
o(ur, "rand");
function Mi(...i) {
  return Math.floor(ur(...i));
}
o(Mi, "randi");
function ln(i) {
  return ur() <= i;
}
o(ln, "chance");
function un(i) {
  return i[Mi(i.length)];
}
o(un, "choose");
function dn(i, e) {
  return (
    i.pos.x + i.width > e.pos.x &&
    i.pos.x < e.pos.x + e.width &&
    i.pos.y + i.height > e.pos.y &&
    i.pos.y < e.pos.y + e.height
  );
}
o(dn, "testRectRect");
function cn(i, e) {
  if (
    (i.p1.x === i.p2.x && i.p1.y === i.p2.y) ||
    (e.p1.x === e.p2.x && e.p1.y === e.p2.y)
  )
    return null;
  let n =
    (e.p2.y - e.p1.y) * (i.p2.x - i.p1.x) -
    (e.p2.x - e.p1.x) * (i.p2.y - i.p1.y);
  if (n === 0) return null;
  let l =
      ((e.p2.x - e.p1.x) * (i.p1.y - e.p1.y) -
        (e.p2.y - e.p1.y) * (i.p1.x - e.p1.x)) /
      n,
    p =
      ((i.p2.x - i.p1.x) * (i.p1.y - e.p1.y) -
        (i.p2.y - i.p1.y) * (i.p1.x - e.p1.x)) /
      n;
  return l < 0 || l > 1 || p < 0 || p > 1 ? null : l;
}
o(cn, "testLineLineT");
function Pt(i, e) {
  let n = cn(i, e);
  return n
    ? B(i.p1.x + n * (i.p2.x - i.p1.x), i.p1.y + n * (i.p2.y - i.p1.y))
    : null;
}
o(Pt, "testLineLine");
function fn(i, e) {
  if (dr(i, e.p1) || dr(i, e.p2)) return !0;
  let n = i.points();
  return (
    !!Pt(e, new Ft(n[0], n[1])) ||
    !!Pt(e, new Ft(n[1], n[2])) ||
    !!Pt(e, new Ft(n[2], n[3])) ||
    !!Pt(e, new Ft(n[3], n[0]))
  );
}
o(fn, "testRectLine");
function dr(i, e) {
  return (
    e.x > i.pos.x &&
    e.x < i.pos.x + i.width &&
    e.y > i.pos.y &&
    e.y < i.pos.y + i.height
  );
}
o(dr, "testRectPoint");
function pn(i, e) {
  let n = e.sub(i.p1),
    l = i.p2.sub(i.p1);
  if (Math.abs(n.cross(l)) > Number.EPSILON) return !1;
  let p = n.dot(l) / l.dot(l);
  return p >= 0 && p <= 1;
}
o(pn, "testLinePoint");
function Ti(i, e) {
  let n = i.p2.sub(i.p1),
    l = n.dot(n),
    p = i.p1.sub(e.center),
    f = 2 * n.dot(p),
    M = p.dot(p) - e.radius * e.radius,
    C = f * f - 4 * l * M;
  if (l <= Number.EPSILON || C < 0) return !1;
  if (C == 0) {
    let U = -f / (2 * l);
    if (U >= 0 && U <= 1) return !0;
  } else {
    let U = (-f + Math.sqrt(C)) / (2 * l),
      V = (-f - Math.sqrt(C)) / (2 * l);
    if ((U >= 0 && U <= 1) || (V >= 0 && V <= 1)) return !0;
  }
  return Bi(e, i.p1);
}
o(Ti, "testLineCircle");
function Bi(i, e) {
  return i.center.sdist(e) < i.radius * i.radius;
}
o(Bi, "testCirclePoint");
function gn(i, e) {
  let n = e.pts[e.pts.length - 1];
  for (let l of e.pts) {
    if (Ti(new Ft(n, l), i)) return !0;
    n = l;
  }
  return Bi(i, e.pts[0]) ? !0 : Pi(e, i.center);
}
o(gn, "testCirclePolygon");
function Pi(i, e) {
  let n = !1,
    l = i.pts;
  for (let p = 0, f = l.length - 1; p < l.length; f = p++)
    l[p].y > e.y != l[f].y > e.y &&
      e.x < ((l[f].x - l[p].x) * (e.y - l[p].y)) / (l[f].y - l[p].y) + l[p].x &&
      (n = !n);
  return n;
}
o(Pi, "testPolygonPoint");
var dt,
  Ft =
    ((dt = class {
      constructor(e, n) {
        E(this, "p1");
        E(this, "p2");
        (this.p1 = e.clone()), (this.p2 = n.clone());
      }
      transform(e) {
        return new dt(e.multVec2(this.p1), e.multVec2(this.p2));
      }
      bbox() {
        return Ee.fromPoints(this.p1, this.p2);
      }
      area() {
        return this.p1.dist(this.p2);
      }
      clone() {
        return new dt(this.p1, this.p2);
      }
    }),
    o(dt, "Line"),
    dt),
  ct,
  Ee =
    ((ct = class {
      constructor(e, n, l) {
        E(this, "pos");
        E(this, "width");
        E(this, "height");
        (this.pos = e.clone()), (this.width = n), (this.height = l);
      }
      static fromPoints(e, n) {
        return new ct(e.clone(), n.x - e.x, n.y - e.y);
      }
      center() {
        return new b(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
      }
      points() {
        return [
          this.pos,
          this.pos.add(this.width, 0),
          this.pos.add(this.width, this.height),
          this.pos.add(0, this.height),
        ];
      }
      transform(e) {
        return new or(this.points().map((n) => e.multVec2(n)));
      }
      bbox() {
        return this.clone();
      }
      area() {
        return this.width * this.height;
      }
      clone() {
        return new ct(this.pos.clone(), this.width, this.height);
      }
      distToPoint(e) {
        return Math.sqrt(this.sdistToPoint(e));
      }
      sdistToPoint(e) {
        let n = this.pos,
          l = this.pos.add(this.width, this.height),
          p = Math.max(n.x - e.x, 0, e.x - l.x),
          f = Math.max(n.y - e.y, 0, e.y - l.y);
        return p * p + f * f;
      }
    }),
    o(ct, "Rect"),
    ct),
  kt,
  js =
    ((kt = class {
      constructor(e, n) {
        E(this, "center");
        E(this, "radius");
        (this.center = e.clone()), (this.radius = n);
      }
      transform(e) {
        return new io(this.center, this.radius, this.radius).transform(e);
      }
      bbox() {
        return Ee.fromPoints(
          this.center.sub(B(this.radius)),
          this.center.add(B(this.radius))
        );
      }
      area() {
        return this.radius * this.radius * Math.PI;
      }
      clone() {
        return new kt(this.center, this.radius);
      }
    }),
    o(kt, "Circle"),
    kt),
  ft,
  io =
    ((ft = class {
      constructor(e, n, l) {
        E(this, "center");
        E(this, "radiusX");
        E(this, "radiusY");
        (this.center = e.clone()), (this.radiusX = n), (this.radiusY = l);
      }
      transform(e) {
        return new ft(
          e.multVec2(this.center),
          e.m[0] * this.radiusX,
          e.m[5] * this.radiusY
        );
      }
      bbox() {
        return Ee.fromPoints(
          this.center.sub(B(this.radiusX, this.radiusY)),
          this.center.add(B(this.radiusX, this.radiusY))
        );
      }
      area() {
        return this.radiusX * this.radiusY * Math.PI;
      }
      clone() {
        return new ft(this.center, this.radiusX, this.radiusY);
      }
    }),
    o(ft, "Ellipse"),
    ft),
  pt,
  or =
    ((pt = class {
      constructor(e) {
        E(this, "pts");
        if (e.length < 3)
          throw new Error("Polygons should have at least 3 vertices");
        this.pts = e;
      }
      transform(e) {
        return new pt(this.pts.map((n) => e.multVec2(n)));
      }
      bbox() {
        let e = B(Number.MAX_VALUE),
          n = B(-Number.MAX_VALUE);
        for (let l of this.pts)
          (e.x = Math.min(e.x, l.x)),
            (n.x = Math.max(n.x, l.x)),
            (e.y = Math.min(e.y, l.y)),
            (n.y = Math.max(n.y, l.y));
        return Ee.fromPoints(e, n);
      }
      area() {
        let e = 0,
          n = this.pts.length;
        for (let l = 0; l < n; l++) {
          let p = this.pts[l],
            f = this.pts[(l + 1) % n];
          (e += p.x * f.y * 0.5), (e -= f.x * p.y * 0.5);
        }
        return Math.abs(e);
      }
      clone() {
        return new pt(this.pts.map((e) => e.clone()));
      }
    }),
    o(pt, "Polygon"),
    pt);
function mn(i, e) {
  let n = Number.MAX_VALUE,
    l = B(0);
  for (let p of [i, e])
    for (let f = 0; f < p.pts.length; f++) {
      let M = p.pts[f],
        C = p.pts[(f + 1) % p.pts.length].sub(M).normal().unit(),
        U = Number.MAX_VALUE,
        V = -Number.MAX_VALUE;
      for (let x = 0; x < i.pts.length; x++) {
        let Z = i.pts[x].dot(C);
        (U = Math.min(U, Z)), (V = Math.max(V, Z));
      }
      let W = Number.MAX_VALUE,
        S = -Number.MAX_VALUE;
      for (let x = 0; x < e.pts.length; x++) {
        let Z = e.pts[x].dot(C);
        (W = Math.min(W, Z)), (S = Math.max(S, Z));
      }
      let z = Math.min(V, S) - Math.max(U, W);
      if (z < 0) return null;
      if (z < Math.abs(n)) {
        let x = S - U,
          Z = W - V;
        (n = Math.abs(x) < Math.abs(Z) ? x : Z), (l = C.scale(n));
      }
    }
  return l;
}
o(mn, "sat");
var fr,
  wn =
    ((fr = class extends Map {
      constructor(...n) {
        super(...n);
        E(this, "lastID");
        this.lastID = 0;
      }
      push(n) {
        let l = this.lastID;
        return this.set(l, n), this.lastID++, l;
      }
      pushd(n) {
        let l = this.push(n);
        return () => this.delete(l);
      }
    }),
    o(fr, "Registry"),
    fr),
  Dt,
  Bt =
    ((Dt = class {
      constructor(e) {
        E(this, "paused", !1);
        E(this, "cancel");
        this.cancel = e;
      }
      static join(e) {
        let n = new Dt(() => e.forEach((l) => l.cancel()));
        return (
          Object.defineProperty(n, "paused", {
            get: () => e[0].paused,
            set: (l) => e.forEach((p) => (p.paused = l)),
          }),
          (n.paused = !1),
          n
        );
      }
    }),
    o(Dt, "EventController"),
    Dt),
  pr,
  Ce =
    ((pr = class {
      constructor() {
        E(this, "handlers", new wn());
      }
      add(e) {
        let n = this.handlers.pushd((...p) => {
            l.paused || e(...p);
          }),
          l = new Bt(n);
        return l;
      }
      addOnce(e) {
        let n = this.add((...l) => {
          n.cancel(), e(...l);
        });
        return n;
      }
      next() {
        return new Promise((e) => this.addOnce(e));
      }
      trigger(...e) {
        this.handlers.forEach((n) => n(...e));
      }
      numListeners() {
        return this.handlers.size;
      }
      clear() {
        this.handlers.clear();
      }
    }),
    o(pr, "Event"),
    pr),
  gr,
  ar =
    ((gr = class {
      constructor() {
        E(this, "handlers", {});
      }
      on(e, n) {
        return (
          this.handlers[e] || (this.handlers[e] = new Ce()),
          this.handlers[e].add(n)
        );
      }
      onOnce(e, n) {
        let l = this.on(e, (...p) => {
          l.cancel(), n(...p);
        });
        return l;
      }
      next(e) {
        return new Promise((n) => {
          this.onOnce(e, (...l) => n(l[0]));
        });
      }
      trigger(e, ...n) {
        this.handlers[e] && this.handlers[e].trigger(...n);
      }
      remove(e) {
        delete this.handlers[e];
      }
      clear() {
        this.handlers = {};
      }
      numListeners(e) {
        var n;
        return (
          ((n = this.handlers[e]) == null ? void 0 : n.numListeners()) ?? 0
        );
      }
    }),
    o(gr, "EventHandler"),
    gr);
function zr(i, e) {
  if (i === e) return !0;
  let n = typeof i,
    l = typeof e;
  if (n !== l) return !1;
  if (n === "object" && l === "object" && i !== null && e !== null) {
    if (Array.isArray(i) !== Array.isArray(e)) return !1;
    let p = Object.keys(i),
      f = Object.keys(e);
    if (p.length !== f.length) return !1;
    for (let M of p) {
      let C = i[M],
        U = e[M];
      if (!zr(C, U)) return !1;
    }
    return !0;
  }
  return !1;
}
o(zr, "deepEq");
function An(i) {
  let e = window.atob(i),
    n = e.length,
    l = new Uint8Array(n);
  for (let p = 0; p < n; p++) l[p] = e.charCodeAt(p);
  return l.buffer;
}
o(An, "base64ToArrayBuffer");
function yn(i) {
  return An(i.split(",")[1]);
}
o(yn, "dataURLToArrayBuffer");
function Jr(i, e) {
  let n = document.createElement("a");
  (n.href = e), (n.download = i), n.click();
}
o(Jr, "download");
function Fi(i, e) {
  Jr(i, "data:text/plain;charset=utf-8," + e);
}
o(Fi, "downloadText");
function Vn(i, e) {
  Fi(i, JSON.stringify(e));
}
o(Vn, "downloadJSON");
function bi(i, e) {
  let n = URL.createObjectURL(e);
  Jr(i, n), URL.revokeObjectURL(n);
}
o(bi, "downloadBlob");
var Qs = o((i) => i.match(/^data:\w+\/\w+;base64,.+/), "isDataURL"),
  so = o((i) => i.split(".").slice(0, -1).join("."), "getFileName");
function Be(i, e) {
  return (...n) => {
    let l = n.length;
    if (l === i.length) return i(...n);
    if (l === e.length) return e(...n);
  };
}
o(Be, "overload2");
var no = (() => {
    let i = 0;
    return () => i++;
  })(),
  oo = o(
    (i) => (i instanceof Error ? i.message : String(i)),
    "getErrorMessage"
  ),
  mr,
  ao =
    ((mr = class {
      constructor(e = (n, l) => n < l) {
        E(this, "_items");
        E(this, "_compareFn");
        (this._compareFn = e), (this._items = []);
      }
      insert(e) {
        this._items.push(e), this.moveUp(this._items.length - 1);
      }
      remove() {
        if (this._items.length === 0) return null;
        let e = this._items[0],
          n = this._items.pop();
        return (
          this._items.length !== 0 && ((this._items[0] = n), this.moveDown(0)),
          e
        );
      }
      clear() {
        this._items.splice(0, this._items.length);
      }
      moveUp(e) {
        for (; e > 0; ) {
          let n = Math.floor((e - 1) / 2);
          if (
            !this._compareFn(this._items[e], this._items[n]) &&
            this._items[e] >= this._items[n]
          )
            break;
          this.swap(e, n), (e = n);
        }
      }
      moveDown(e) {
        for (; e < Math.floor(this._items.length / 2); ) {
          let n = 2 * e + 1;
          if (
            (n < this._items.length - 1 &&
              !this._compareFn(this._items[n], this._items[n + 1]) &&
              ++n,
            this._compareFn(this._items[e], this._items[n]))
          )
            break;
          this.swap(e, n), (e = n);
        }
      }
      swap(e, n) {
        [this._items[e], this._items[n]] = [this._items[n], this._items[e]];
      }
      get length() {
        return this._items.length;
      }
    }),
    o(mr, "BinaryHeap"),
    mr),
  ho = Object.freeze([
    776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520,
  ]);
function vn(i) {
  if (typeof i != "string")
    throw new TypeError("string cannot be undefined or null");
  let e = [],
    n = 0,
    l = 0;
  for (; n < i.length; ) {
    if (
      ((l += xn(n + l, i)),
      Bn(i[n + l]) && l++,
      Rn(i[n + l]) && l++,
      Mn(i[n + l]) && l++,
      Pn(i[n + l]))
    ) {
      l++;
      continue;
    }
    e.push(i.substring(n, n + l)), (n += l), (l = 0);
  }
  return e;
}
o(vn, "runes");
function xn(i, e) {
  let n = e[i];
  if (!En(n) || i === e.length - 1) return 1;
  let l = n + e[i + 1],
    p = e.substring(i + 2, i + 5);
  return Si(l) && Si(p)
    ? 4
    : bn(l) && Tn(p)
    ? e.slice(i).indexOf(String.fromCodePoint(917631)) + 2
    : Sn(p)
    ? 4
    : 2;
}
o(xn, "nextUnits");
function En(i) {
  return i && $e(i[0].charCodeAt(0), 55296, 56319);
}
o(En, "isFirstOfSurrogatePair");
function Si(i) {
  return $e(Xr(i), 127462, 127487);
}
o(Si, "isRegionalIndicator");
function bn(i) {
  return $e(Xr(i), 127988, 127988);
}
o(bn, "isSubdivisionFlag");
function Sn(i) {
  return $e(Xr(i), 127995, 127999);
}
o(Sn, "isFitzpatrickModifier");
function Rn(i) {
  return typeof i == "string" && $e(i.charCodeAt(0), 65024, 65039);
}
o(Rn, "isVariationSelector");
function Mn(i) {
  return typeof i == "string" && $e(i.charCodeAt(0), 8400, 8447);
}
o(Mn, "isDiacriticalMark");
function Tn(i) {
  let e = i.codePointAt(0);
  return typeof i == "string" && typeof e == "number" && $e(e, 917504, 917631);
}
o(Tn, "isSupplementarySpecialpurposePlane");
function Bn(i) {
  return typeof i == "string" && ho.includes(i.charCodeAt(0));
}
o(Bn, "isGrapheme");
function Pn(i) {
  return typeof i == "string" && i.charCodeAt(0) === 8205;
}
o(Pn, "isZeroWidthJoiner");
function Xr(i) {
  let e = i.charCodeAt(0) - 55296,
    n = i.charCodeAt(1) - 56320;
  return (e << 10) + n + 65536;
}
o(Xr, "codePointFromSurrogatePair");
function $e(i, e, n) {
  return i >= e && i <= n;
}
o($e, "betweenInclusive");
var zs = {
    "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        6: "ltrigger",
        7: "rtrigger",
        8: "select",
        9: "start",
        10: "lstick",
        11: "rstick",
        12: "dpad-up",
        13: "dpad-down",
        14: "dpad-left",
        15: "dpad-right",
        16: "home",
        17: "capture",
      },
      sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
    },
    "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        9: "select",
        10: "lstick",
        16: "start",
      },
      sticks: { left: { x: 0, y: 1 } },
    },
    "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        9: "start",
        10: "lstick",
        16: "select",
      },
      sticks: { left: { x: 0, y: 1 } },
    },
    "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        6: "ltrigger",
        7: "rtrigger",
        8: "select",
        9: "start",
        10: "lstick",
        11: "rstick",
        12: "dpad-up",
        13: "dpad-down",
        14: "dpad-left",
        15: "dpad-right",
        16: "home",
        17: "capture",
      },
      sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
    },
    default: {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        6: "ltrigger",
        7: "rtrigger",
        8: "select",
        9: "start",
        10: "lstick",
        11: "rstick",
        12: "dpad-up",
        13: "dpad-down",
        14: "dpad-left",
        15: "dpad-right",
        16: "home",
      },
      sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
    },
  },
  wr,
  jr =
    ((wr = class {
      constructor() {
        E(this, "pressed", new Set([]));
        E(this, "pressedRepeat", new Set([]));
        E(this, "released", new Set([]));
        E(this, "down", new Set([]));
      }
      update() {
        this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
      }
      press(e) {
        this.pressed.add(e), this.pressedRepeat.add(e), this.down.add(e);
      }
      pressRepeat(e) {
        this.pressedRepeat.add(e);
      }
      release(e) {
        this.down.delete(e), this.pressed.delete(e), this.released.add(e);
      }
    }),
    o(wr, "ButtonState"),
    wr),
  Ar,
  lo =
    ((Ar = class {
      constructor() {
        E(this, "buttonState", new jr());
        E(this, "stickState", new Map());
      }
    }),
    o(Ar, "GamepadState"),
    Ar),
  yr,
  uo =
    ((yr = class {
      constructor() {
        E(this, "dts", []);
        E(this, "timer", 0);
        E(this, "fps", 0);
      }
      tick(e) {
        this.dts.push(e),
          (this.timer += e),
          this.timer >= 1 &&
            ((this.timer = 0),
            (this.fps = Math.round(
              1 / (this.dts.reduce((n, l) => n + l) / this.dts.length)
            )),
            (this.dts = []));
      }
    }),
    o(yr, "FPSCounter"),
    yr),
  co = o((i) => {
    if (!i.canvas) throw new Error("Please provide a canvas");
    let e = {
      canvas: i.canvas,
      loopID: null,
      stopped: !1,
      dt: 0,
      time: 0,
      realTime: 0,
      fpsCounter: new uo(),
      timeScale: 1,
      skipTime: !1,
      numFrames: 0,
      mousePos: new b(0),
      mouseDeltaPos: new b(0),
      keyState: new jr(),
      mouseState: new jr(),
      mergedGamepadState: new lo(),
      gamepadStates: new Map(),
      gamepads: [],
      charInputted: [],
      isMouseMoved: !1,
      lastWidth: i.canvas.offsetWidth,
      lastHeight: i.canvas.offsetHeight,
      events: new ar(),
    };
    function n() {
      return e.dt * e.timeScale;
    }
    o(n, "dt");
    function l() {
      return e.time;
    }
    o(l, "time");
    function p() {
      return e.fpsCounter.fps;
    }
    o(p, "fps");
    function f() {
      return e.numFrames;
    }
    o(f, "numFrames");
    function M() {
      return e.canvas.toDataURL();
    }
    o(M, "screenshot");
    function C(c) {
      e.canvas.style.cursor = c;
    }
    o(C, "setCursor");
    function U() {
      return e.canvas.style.cursor;
    }
    o(U, "getCursor");
    function V(c) {
      if (c)
        try {
          let v = e.canvas.requestPointerLock();
          v.catch && v.catch((T) => console.error(T));
        } catch (v) {
          console.error(v);
        }
      else document.exitPointerLock();
    }
    o(V, "setCursorLocked");
    function W() {
      return !!document.pointerLockElement;
    }
    o(W, "isCursorLocked");
    function S(c) {
      c.requestFullscreen
        ? c.requestFullscreen()
        : c.webkitRequestFullscreen && c.webkitRequestFullscreen();
    }
    o(S, "enterFullscreen");
    function z() {
      document.exitFullscreen
        ? document.exitFullscreen()
        : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    o(z, "exitFullscreen");
    function x() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }
    o(x, "getFullscreenElement");
    function Z(c = !0) {
      c ? S(e.canvas) : z();
    }
    o(Z, "setFullscreen");
    function we() {
      return !!x();
    }
    o(we, "isFullscreen");
    function re() {
      e.stopped = !0;
      for (let c in se) e.canvas.removeEventListener(c, se[c]);
      for (let c in ue) document.removeEventListener(c, ue[c]);
      for (let c in he) window.removeEventListener(c, he[c]);
      Ve.disconnect();
    }
    o(re, "quit");
    function G(c) {
      e.loopID !== null && cancelAnimationFrame(e.loopID);
      let v = 0,
        T = o((H) => {
          if (e.stopped) return;
          if (document.visibilityState !== "visible") {
            e.loopID = requestAnimationFrame(T);
            return;
          }
          let J = H / 1e3,
            ce = J - e.realTime,
            Se = i.maxFPS ? 1 / i.maxFPS : 0;
          (e.realTime = J),
            (v += ce),
            v > Se &&
              (e.skipTime ||
                ((e.dt = v), (e.time += n()), e.fpsCounter.tick(e.dt)),
              (v = 0),
              (e.skipTime = !1),
              e.numFrames++,
              st(),
              c(),
              Xt()),
            (e.loopID = requestAnimationFrame(T));
        }, "frame");
      T(0);
    }
    o(G, "run");
    function pe() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    o(pe, "isTouchscreen");
    function R() {
      return e.mousePos.clone();
    }
    o(R, "mousePos");
    function Pe() {
      return e.mouseDeltaPos.clone();
    }
    o(Pe, "mouseDeltaPos");
    function Y(c = "left") {
      return e.mouseState.pressed.has(c);
    }
    o(Y, "isMousePressed");
    function be(c = "left") {
      return e.mouseState.down.has(c);
    }
    o(be, "isMouseDown");
    function Ae(c = "left") {
      return e.mouseState.released.has(c);
    }
    o(Ae, "isMouseReleased");
    function ye() {
      return e.isMouseMoved;
    }
    o(ye, "isMouseMoved");
    function Qe(c) {
      return c === void 0
        ? e.keyState.pressed.size > 0
        : e.keyState.pressed.has(c);
    }
    o(Qe, "isKeyPressed");
    function Ut(c) {
      return c === void 0
        ? e.keyState.pressedRepeat.size > 0
        : e.keyState.pressedRepeat.has(c);
    }
    o(Ut, "isKeyPressedRepeat");
    function gt(c) {
      return c === void 0 ? e.keyState.down.size > 0 : e.keyState.down.has(c);
    }
    o(gt, "isKeyDown");
    function mt(c) {
      return c === void 0
        ? e.keyState.released.size > 0
        : e.keyState.released.has(c);
    }
    o(mt, "isKeyReleased");
    function wt(c) {
      return c === void 0
        ? e.mergedGamepadState.buttonState.pressed.size > 0
        : e.mergedGamepadState.buttonState.pressed.has(c);
    }
    o(wt, "isGamepadButtonPressed");
    function Oe(c) {
      return c === void 0
        ? e.mergedGamepadState.buttonState.down.size > 0
        : e.mergedGamepadState.buttonState.down.has(c);
    }
    o(Oe, "isGamepadButtonDown");
    function Lt(c) {
      return c === void 0
        ? e.mergedGamepadState.buttonState.released.size > 0
        : e.mergedGamepadState.buttonState.released.has(c);
    }
    o(Lt, "isGamepadButtonReleased");
    function Gt(c) {
      return e.events.on("resize", c);
    }
    o(Gt, "onResize");
    let Sr = Be(
        (c) => e.events.on("keyDown", c),
        (c, v) => e.events.on("keyDown", (T) => T === c && v(c))
      ),
      Rr = Be(
        (c) => e.events.on("keyPress", c),
        (c, v) => e.events.on("keyPress", (T) => T === c && v(c))
      ),
      Mr = Be(
        (c) => e.events.on("keyPressRepeat", c),
        (c, v) => e.events.on("keyPressRepeat", (T) => T === c && v(c))
      ),
      Tr = Be(
        (c) => e.events.on("keyRelease", c),
        (c, v) => e.events.on("keyRelease", (T) => T === c && v(c))
      ),
      Ot = Be(
        (c) => e.events.on("mouseDown", (v) => c(v)),
        (c, v) => e.events.on("mouseDown", (T) => T === c && v(T))
      ),
      qt = Be(
        (c) => e.events.on("mousePress", (v) => c(v)),
        (c, v) => e.events.on("mousePress", (T) => T === c && v(T))
      ),
      Ht = Be(
        (c) => e.events.on("mouseRelease", (v) => c(v)),
        (c, v) => e.events.on("mouseRelease", (T) => T === c && v(T))
      );
    function At(c) {
      return e.events.on("mouseMove", () => c(R(), Pe()));
    }
    o(At, "onMouseMove");
    function yt(c) {
      return e.events.on("charInput", c);
    }
    o(yt, "onCharInput");
    function Yt(c) {
      return e.events.on("touchStart", c);
    }
    o(Yt, "onTouchStart");
    function et(c) {
      return e.events.on("touchMove", c);
    }
    o(et, "onTouchMove");
    function Kt(c) {
      return e.events.on("touchEnd", c);
    }
    o(Kt, "onTouchEnd");
    function jt(c) {
      return e.events.on("scroll", c);
    }
    o(jt, "onScroll");
    function Vt(c) {
      return e.events.on("hide", c);
    }
    o(Vt, "onHide");
    function Qt(c) {
      return e.events.on("show", c);
    }
    o(Qt, "onShow");
    function vt(c, v) {
      if (typeof c == "function") return e.events.on("gamepadButtonDown", c);
      if (typeof c == "string" && typeof v == "function")
        return e.events.on("gamepadButtonDown", (T) => T === c && v(c));
    }
    o(vt, "onGamepadButtonDown");
    function xt(c, v) {
      if (typeof c == "function") return e.events.on("gamepadButtonPress", c);
      if (typeof c == "string" && typeof v == "function")
        return e.events.on("gamepadButtonPress", (T) => T === c && v(c));
    }
    o(xt, "onGamepadButtonPress");
    function zt(c, v) {
      if (typeof c == "function") return e.events.on("gamepadButtonRelease", c);
      if (typeof c == "string" && typeof v == "function")
        return e.events.on("gamepadButtonRelease", (T) => T === c && v(c));
    }
    o(zt, "onGamepadButtonRelease");
    function tt(c, v) {
      return e.events.on("gamepadStick", (T, H) => T === c && v(H));
    }
    o(tt, "onGamepadStick");
    function Jt(c) {
      e.events.on("gamepadConnect", c);
    }
    o(Jt, "onGamepadConnect");
    function rt(c) {
      e.events.on("gamepadDisconnect", c);
    }
    o(rt, "onGamepadDisconnect");
    function Fe(c) {
      return e.mergedGamepadState.stickState.get(c) || new b(0);
    }
    o(Fe, "getGamepadStick");
    function it() {
      return [...e.charInputted];
    }
    o(it, "charInputted");
    function Et() {
      return [...e.gamepads];
    }
    o(Et, "getGamepads");
    function st() {
      e.events.trigger("input"),
        e.keyState.down.forEach((c) => e.events.trigger("keyDown", c)),
        e.mouseState.down.forEach((c) => e.events.trigger("mouseDown", c)),
        Ne();
    }
    o(st, "processInput");
    function Xt() {
      e.keyState.update(),
        e.mouseState.update(),
        e.mergedGamepadState.buttonState.update(),
        e.mergedGamepadState.stickState.forEach((c, v) => {
          e.mergedGamepadState.stickState.set(v, new b(0));
        }),
        (e.charInputted = []),
        (e.isMouseMoved = !1),
        e.gamepadStates.forEach((c) => {
          c.buttonState.update(),
            c.stickState.forEach((v, T) => {
              c.stickState.set(T, new b(0));
            });
        });
    }
    o(Xt, "resetInput");
    function bt(c) {
      let v = {
        index: c.index,
        isPressed: (T) =>
          e.gamepadStates.get(c.index).buttonState.pressed.has(T),
        isDown: (T) => e.gamepadStates.get(c.index).buttonState.down.has(T),
        isReleased: (T) =>
          e.gamepadStates.get(c.index).buttonState.released.has(T),
        getStick: (T) => e.gamepadStates.get(c.index).stickState.get(T),
      };
      return (
        e.gamepads.push(v),
        e.gamepadStates.set(c.index, {
          buttonState: new jr(),
          stickState: new Map([
            ["left", new b(0)],
            ["right", new b(0)],
          ]),
        }),
        v
      );
    }
    o(bt, "registerGamepad");
    function $(c) {
      (e.gamepads = e.gamepads.filter((v) => v.index !== c.index)),
        e.gamepadStates.delete(c.index);
    }
    o($, "removeGamepad");
    function Ne() {
      for (let c of navigator.getGamepads())
        c && !e.gamepadStates.has(c.index) && bt(c);
      for (let c of e.gamepads) {
        let v = navigator.getGamepads()[c.index],
          T = (i.gamepads ?? {})[v.id] ?? zs[v.id] ?? zs.default,
          H = e.gamepadStates.get(c.index);
        for (let J = 0; J < v.buttons.length; J++)
          v.buttons[J].pressed
            ? (H.buttonState.down.has(T.buttons[J]) ||
                (e.mergedGamepadState.buttonState.press(T.buttons[J]),
                H.buttonState.press(T.buttons[J]),
                e.events.trigger("gamepadButtonPress", T.buttons[J])),
              e.events.trigger("gamepadButtonDown", T.buttons[J]))
            : H.buttonState.down.has(T.buttons[J]) &&
              (e.mergedGamepadState.buttonState.release(T.buttons[J]),
              H.buttonState.release(T.buttons[J]),
              e.events.trigger("gamepadButtonRelease", T.buttons[J]));
        for (let J in T.sticks) {
          let ce = T.sticks[J],
            Se = new b(v.axes[ce.x], v.axes[ce.y]);
          H.stickState.set(J, Se),
            e.mergedGamepadState.stickState.set(J, Se),
            e.events.trigger("gamepadStick", J, Se);
        }
      }
    }
    o(Ne, "processGamepad");
    let se = {},
      ue = {},
      he = {},
      Ue = i.pixelDensity || window.devicePixelRatio || 1;
    se.mousemove = (c) => {
      let v = new b(c.offsetX, c.offsetY),
        T = new b(c.movementX, c.movementY);
      if (we()) {
        let H = e.canvas.width / Ue,
          J = e.canvas.height / Ue,
          ce = window.innerWidth,
          Se = window.innerHeight,
          Wt = ce / Se,
          Zt = H / J;
        if (Wt > Zt) {
          let ke = Se / J,
            Re = (ce - H * ke) / 2;
          (v.x = _e(c.offsetX - Re, 0, H * ke, 0, H)),
            (v.y = _e(c.offsetY, 0, J * ke, 0, J));
        } else {
          let ke = ce / H,
            Re = (Se - J * ke) / 2;
          (v.x = _e(c.offsetX, 0, H * ke, 0, H)),
            (v.y = _e(c.offsetY - Re, 0, J * ke, 0, J));
        }
      }
      e.events.onOnce("input", () => {
        (e.isMouseMoved = !0),
          (e.mousePos = v),
          (e.mouseDeltaPos = T),
          e.events.trigger("mouseMove");
      });
    };
    let ze = ["left", "middle", "right", "back", "forward"];
    (se.mousedown = (c) => {
      e.events.onOnce("input", () => {
        let v = ze[c.button];
        v && (e.mouseState.press(v), e.events.trigger("mousePress", v));
      });
    }),
      (se.mouseup = (c) => {
        e.events.onOnce("input", () => {
          let v = ze[c.button];
          v && (e.mouseState.release(v), e.events.trigger("mouseRelease", v));
        });
      });
    let Br = new Set([
        " ",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab",
      ]),
      qe = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
        " ": "space",
      };
    (se.keydown = (c) => {
      Br.has(c.key) && c.preventDefault(),
        e.events.onOnce("input", () => {
          let v = qe[c.key] || c.key.toLowerCase();
          v.length === 1
            ? (e.events.trigger("charInput", v), e.charInputted.push(v))
            : v === "space" &&
              (e.events.trigger("charInput", " "), e.charInputted.push(" ")),
            c.repeat
              ? (e.keyState.pressRepeat(v),
                e.events.trigger("keyPressRepeat", v))
              : (e.keyState.press(v),
                e.events.trigger("keyPressRepeat", v),
                e.events.trigger("keyPress", v));
        });
    }),
      (se.keyup = (c) => {
        e.events.onOnce("input", () => {
          let v = qe[c.key] || c.key.toLowerCase();
          e.keyState.release(v), e.events.trigger("keyRelease", v);
        });
      }),
      (se.touchstart = (c) => {
        c.preventDefault(),
          e.events.onOnce("input", () => {
            let v = [...c.changedTouches],
              T = e.canvas.getBoundingClientRect();
            i.touchToMouse !== !1 &&
              ((e.mousePos = new b(v[0].clientX - T.x, v[0].clientY - T.y)),
              e.mouseState.press("left"),
              e.events.trigger("mousePress", "left")),
              v.forEach((H) => {
                e.events.trigger(
                  "touchStart",
                  new b(H.clientX - T.x, H.clientY - T.y),
                  H
                );
              });
          });
      }),
      (se.touchmove = (c) => {
        c.preventDefault(),
          e.events.onOnce("input", () => {
            let v = [...c.changedTouches],
              T = e.canvas.getBoundingClientRect();
            i.touchToMouse !== !1 &&
              ((e.mousePos = new b(v[0].clientX - T.x, v[0].clientY - T.y)),
              e.events.trigger("mouseMove")),
              v.forEach((H) => {
                e.events.trigger(
                  "touchMove",
                  new b(H.clientX - T.x, H.clientY - T.y),
                  H
                );
              });
          });
      }),
      (se.touchend = (c) => {
        e.events.onOnce("input", () => {
          let v = [...c.changedTouches],
            T = e.canvas.getBoundingClientRect();
          i.touchToMouse !== !1 &&
            ((e.mousePos = new b(v[0].clientX - T.x, v[0].clientY - T.y)),
            e.mouseState.release("left"),
            e.events.trigger("mouseRelease", "left")),
            v.forEach((H) => {
              e.events.trigger(
                "touchEnd",
                new b(H.clientX - T.x, H.clientY - T.y),
                H
              );
            });
        });
      }),
      (se.touchcancel = (c) => {
        e.events.onOnce("input", () => {
          let v = [...c.changedTouches],
            T = e.canvas.getBoundingClientRect();
          i.touchToMouse !== !1 &&
            ((e.mousePos = new b(v[0].clientX - T.x, v[0].clientY - T.y)),
            e.mouseState.release("left"),
            e.events.trigger("mouseRelease", "left")),
            v.forEach((H) => {
              e.events.trigger(
                "touchEnd",
                new b(H.clientX - T.x, H.clientY - T.y),
                H
              );
            });
        });
      }),
      (se.wheel = (c) => {
        c.preventDefault(),
          e.events.onOnce("input", () => {
            e.events.trigger("scroll", new b(c.deltaX, c.deltaY));
          });
      }),
      (se.contextmenu = (c) => c.preventDefault()),
      (ue.visibilitychange = () => {
        document.visibilityState === "visible"
          ? ((e.skipTime = !0), e.events.trigger("show"))
          : e.events.trigger("hide");
      }),
      (he.gamepadconnected = (c) => {
        let v = bt(c.gamepad);
        e.events.onOnce("input", () => {
          e.events.trigger("gamepadConnect", v);
        });
      }),
      (he.gamepaddisconnected = (c) => {
        let v = Et().filter((T) => T.index === c.gamepad.index)[0];
        $(c.gamepad),
          e.events.onOnce("input", () => {
            e.events.trigger("gamepadDisconnect", v);
          });
      });
    for (let c in se) e.canvas.addEventListener(c, se[c]);
    for (let c in ue) document.addEventListener(c, ue[c]);
    for (let c in he) window.addEventListener(c, he[c]);
    let Ve = new ResizeObserver((c) => {
      for (let v of c)
        if (v.target === e.canvas) {
          if (
            e.lastWidth === e.canvas.offsetWidth &&
            e.lastHeight === e.canvas.offsetHeight
          )
            return;
          (e.lastWidth = e.canvas.offsetWidth),
            (e.lastHeight = e.canvas.offsetHeight),
            e.events.onOnce("input", () => {
              e.events.trigger("resize");
            });
        }
    });
    return (
      Ve.observe(e.canvas),
      {
        dt: n,
        time: l,
        run: G,
        canvas: e.canvas,
        fps: p,
        numFrames: f,
        quit: re,
        setFullscreen: Z,
        isFullscreen: we,
        setCursor: C,
        screenshot: M,
        getGamepads: Et,
        getCursor: U,
        setCursorLocked: V,
        isCursorLocked: W,
        isTouchscreen: pe,
        mousePos: R,
        mouseDeltaPos: Pe,
        isKeyDown: gt,
        isKeyPressed: Qe,
        isKeyPressedRepeat: Ut,
        isKeyReleased: mt,
        isMouseDown: be,
        isMousePressed: Y,
        isMouseReleased: Ae,
        isMouseMoved: ye,
        isGamepadButtonPressed: wt,
        isGamepadButtonDown: Oe,
        isGamepadButtonReleased: Lt,
        getGamepadStick: Fe,
        charInputted: it,
        onResize: Gt,
        onKeyDown: Sr,
        onKeyPress: Rr,
        onKeyPressRepeat: Mr,
        onKeyRelease: Tr,
        onMouseDown: Ot,
        onMousePress: qt,
        onMouseRelease: Ht,
        onMouseMove: At,
        onCharInput: yt,
        onTouchStart: Yt,
        onTouchMove: et,
        onTouchEnd: Kt,
        onScroll: jt,
        onHide: Vt,
        onShow: Qt,
        onGamepadButtonDown: vt,
        onGamepadButtonPress: xt,
        onGamepadButtonRelease: zt,
        onGamepadStick: tt,
        onGamepadConnect: Jt,
        onGamepadDisconnect: rt,
        events: e.events,
      }
    );
  }, "default"),
  Ct,
  lt =
    ((Ct = class {
      constructor(e, n, l, p = {}) {
        E(this, "ctx");
        E(this, "src", null);
        E(this, "glTex");
        E(this, "width");
        E(this, "height");
        this.ctx = e;
        let f = e.gl;
        (this.glTex = e.gl.createTexture()),
          e.onDestroy(() => this.free()),
          (this.width = n),
          (this.height = l);
        let M =
            { linear: f.LINEAR, nearest: f.NEAREST }[
              p.filter ?? e.opts.texFilter
            ] ?? f.NEAREST,
          C =
            { repeat: f.REPEAT, clampToEadge: f.CLAMP_TO_EDGE }[p.wrap] ??
            f.CLAMP_TO_EDGE;
        this.bind(),
          n &&
            l &&
            f.texImage2D(
              f.TEXTURE_2D,
              0,
              f.RGBA,
              n,
              l,
              0,
              f.RGBA,
              f.UNSIGNED_BYTE,
              null
            ),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, M),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, M),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, C),
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, C),
          this.unbind();
      }
      static fromImage(e, n, l = {}) {
        let p = new Ct(e, n.width, n.height, l);
        return p.update(n), (p.src = n), p;
      }
      update(e, n = 0, l = 0) {
        let p = this.ctx.gl;
        this.bind(),
          p.texSubImage2D(p.TEXTURE_2D, 0, n, l, p.RGBA, p.UNSIGNED_BYTE, e),
          this.unbind();
      }
      bind() {
        this.ctx.pushTexture2D(this.glTex);
      }
      unbind() {
        this.ctx.popTexture2D();
      }
      free() {
        this.ctx.gl.deleteTexture(this.glTex);
      }
    }),
    o(Ct, "Texture"),
    Ct),
  Vr,
  Lr =
    ((Vr = class {
      constructor(e, n, l, p = {}) {
        E(this, "ctx");
        E(this, "tex");
        E(this, "glFramebuffer");
        E(this, "glRenderbuffer");
        this.ctx = e;
        let f = e.gl;
        e.onDestroy(() => this.free()),
          (this.tex = new lt(e, n, l, p)),
          (this.glFramebuffer = f.createFramebuffer()),
          (this.glRenderbuffer = f.createRenderbuffer()),
          this.bind(),
          f.renderbufferStorage(f.RENDERBUFFER, f.DEPTH_STENCIL, n, l),
          f.framebufferTexture2D(
            f.FRAMEBUFFER,
            f.COLOR_ATTACHMENT0,
            f.TEXTURE_2D,
            this.tex.glTex,
            0
          ),
          f.framebufferRenderbuffer(
            f.FRAMEBUFFER,
            f.DEPTH_STENCIL_ATTACHMENT,
            f.RENDERBUFFER,
            this.glRenderbuffer
          ),
          this.unbind();
      }
      get width() {
        return this.tex.width;
      }
      get height() {
        return this.tex.height;
      }
      toImageData() {
        let e = this.ctx.gl,
          n = new Uint8ClampedArray(this.width * this.height * 4);
        this.bind(),
          e.readPixels(
            0,
            0,
            this.width,
            this.height,
            e.RGBA,
            e.UNSIGNED_BYTE,
            n
          ),
          this.unbind();
        let l = this.width * 4,
          p = new Uint8Array(l);
        for (let f = 0; f < ((this.height / 2) | 0); f++) {
          let M = f * l,
            C = (this.height - f - 1) * l;
          p.set(n.subarray(M, M + l)), n.copyWithin(M, C, C + l), n.set(p, C);
        }
        return new ImageData(n, this.width, this.height);
      }
      toDataURL() {
        let e = document.createElement("canvas"),
          n = e.getContext("2d");
        return (
          (e.width = this.width),
          (e.height = this.height),
          n.putImageData(this.toImageData(), 0, 0),
          e.toDataURL()
        );
      }
      draw(e) {
        this.bind(), e(), this.unbind();
      }
      bind() {
        this.ctx.pushFramebuffer(this.glFramebuffer),
          this.ctx.pushRenderbuffer(this.glRenderbuffer),
          this.ctx.pushViewport({ x: 0, y: 0, w: this.width, h: this.height });
      }
      unbind() {
        this.ctx.popFramebuffer(),
          this.ctx.popRenderbuffer(),
          this.ctx.popViewport();
      }
      free() {
        let e = this.ctx.gl;
        e.deleteFramebuffer(this.glFramebuffer),
          e.deleteRenderbuffer(this.glRenderbuffer),
          this.tex.free();
      }
    }),
    o(Vr, "FrameBuffer"),
    Vr),
  vr,
  fo =
    ((vr = class {
      constructor(e, n, l, p) {
        E(this, "ctx");
        E(this, "glProgram");
        (this.ctx = e), e.onDestroy(() => this.free());
        let f = e.gl,
          M = f.createShader(f.VERTEX_SHADER),
          C = f.createShader(f.FRAGMENT_SHADER);
        f.shaderSource(M, n),
          f.shaderSource(C, l),
          f.compileShader(M),
          f.compileShader(C);
        let U = f.createProgram();
        if (
          ((this.glProgram = U),
          f.attachShader(U, M),
          f.attachShader(U, C),
          p.forEach((V, W) => f.bindAttribLocation(U, W, V)),
          f.linkProgram(U),
          !f.getProgramParameter(U, f.LINK_STATUS))
        ) {
          let V = f.getShaderInfoLog(M);
          if (V) throw new Error("VERTEX SHADER " + V);
          let W = f.getShaderInfoLog(C);
          if (W) throw new Error("FRAGMENT SHADER " + W);
        }
        f.deleteShader(M), f.deleteShader(C);
      }
      bind() {
        this.ctx.pushProgram(this.glProgram);
      }
      unbind() {
        this.ctx.popProgram();
      }
      send(e) {
        let n = this.ctx.gl;
        for (let l in e) {
          let p = e[l],
            f = n.getUniformLocation(this.glProgram, l);
          typeof p == "number"
            ? n.uniform1f(f, p)
            : p instanceof Le
            ? n.uniformMatrix4fv(f, !1, new Float32Array(p.m))
            : p instanceof te
            ? n.uniform3f(f, p.r, p.g, p.b)
            : p instanceof b && n.uniform2f(f, p.x, p.y);
        }
      }
      free() {
        this.ctx.gl.deleteProgram(this.glProgram);
      }
    }),
    o(vr, "Shader"),
    vr),
  xr,
  po =
    ((xr = class {
      constructor(e, n, l, p) {
        E(this, "ctx");
        E(this, "glVBuf");
        E(this, "glIBuf");
        E(this, "vqueue", []);
        E(this, "iqueue", []);
        E(this, "stride");
        E(this, "maxVertices");
        E(this, "maxIndices");
        E(this, "vertexFormat");
        E(this, "numDraws", 0);
        E(this, "curPrimitive", null);
        E(this, "curTex", null);
        E(this, "curShader", null);
        E(this, "curUniform", {});
        let f = e.gl;
        (this.vertexFormat = n),
          (this.ctx = e),
          (this.stride = n.reduce((M, C) => M + C.size, 0)),
          (this.maxVertices = l),
          (this.maxIndices = p),
          (this.glVBuf = f.createBuffer()),
          e.pushArrayBuffer(this.glVBuf),
          f.bufferData(f.ARRAY_BUFFER, l * 4, f.DYNAMIC_DRAW),
          e.popArrayBuffer(),
          (this.glIBuf = f.createBuffer()),
          e.pushElementArrayBuffer(this.glIBuf),
          f.bufferData(f.ELEMENT_ARRAY_BUFFER, p * 4, f.DYNAMIC_DRAW),
          e.popElementArrayBuffer();
      }
      push(e, n, l, p, f = null, M = {}) {
        (e !== this.curPrimitive ||
          f !== this.curTex ||
          p !== this.curShader ||
          !zr(this.curUniform, M) ||
          this.vqueue.length + n.length * this.stride > this.maxVertices ||
          this.iqueue.length + l.length > this.maxIndices) &&
          this.flush();
        let C = this.vqueue.length / this.stride;
        for (let U of n) this.vqueue.push(U);
        for (let U of l) this.iqueue.push(U + C);
        (this.curPrimitive = e),
          (this.curShader = p),
          (this.curTex = f),
          (this.curUniform = M);
      }
      flush() {
        var n, l;
        if (
          !this.curPrimitive ||
          !this.curShader ||
          this.vqueue.length === 0 ||
          this.iqueue.length === 0
        )
          return;
        let e = this.ctx.gl;
        this.ctx.pushArrayBuffer(this.glVBuf),
          e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)),
          this.ctx.pushElementArrayBuffer(this.glIBuf),
          e.bufferSubData(
            e.ELEMENT_ARRAY_BUFFER,
            0,
            new Uint16Array(this.iqueue)
          ),
          this.ctx.setVertexFormat(this.vertexFormat),
          this.curShader.bind(),
          this.curShader.send(this.curUniform),
          (n = this.curTex) == null || n.bind(),
          e.drawElements(
            this.curPrimitive,
            this.iqueue.length,
            e.UNSIGNED_SHORT,
            0
          ),
          (l = this.curTex) == null || l.unbind(),
          this.curShader.unbind(),
          this.ctx.popArrayBuffer(),
          this.ctx.popElementArrayBuffer(),
          (this.vqueue = []),
          (this.iqueue = []),
          this.numDraws++;
      }
      free() {
        let e = this.ctx.gl;
        e.deleteBuffer(this.glVBuf), e.deleteBuffer(this.glIBuf);
      }
    }),
    o(xr, "BatchRenderer"),
    xr);
function Ze(i) {
  let e = [],
    n = o((f) => {
      e.push(f), i(f);
    }, "push"),
    l = o(() => {
      e.pop(), i(p() ?? null);
    }, "pop"),
    p = o(() => e[e.length - 1], "cur");
  return [n, l, p];
}
o(Ze, "genStack");
function Fn(i, e = {}) {
  let n = [];
  function l(Y) {
    n.push(Y);
  }
  o(l, "onDestroy");
  function p() {
    n.forEach((Y) => Y()), i.getExtension("WEBGL_lose_context").loseContext();
  }
  o(p, "destroy");
  let f = null;
  function M(Y) {
    if (zr(Y, f)) return;
    f = Y;
    let be = Y.reduce((Ae, ye) => Ae + ye.size, 0);
    Y.reduce(
      (Ae, ye, Qe) => (
        i.vertexAttribPointer(Qe, ye.size, i.FLOAT, !1, be * 4, Ae),
        i.enableVertexAttribArray(Qe),
        Ae + ye.size * 4
      ),
      0
    );
  }
  o(M, "setVertexFormat");
  let [C, U] = Ze((Y) => i.bindTexture(i.TEXTURE_2D, Y)),
    [V, W] = Ze((Y) => i.bindBuffer(i.ARRAY_BUFFER, Y)),
    [S, z] = Ze((Y) => i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, Y)),
    [x, Z] = Ze((Y) => i.bindFramebuffer(i.FRAMEBUFFER, Y)),
    [we, re] = Ze((Y) => i.bindRenderbuffer(i.RENDERBUFFER, Y)),
    [G, pe] = Ze(({ x: Y, y: be, w: Ae, h: ye }) => {
      i.viewport(Y, be, Ae, ye);
    }),
    [R, Pe] = Ze((Y) => i.useProgram(Y));
  return (
    G({ x: 0, y: 0, w: i.drawingBufferWidth, h: i.drawingBufferHeight }),
    {
      gl: i,
      opts: e,
      onDestroy: l,
      destroy: p,
      pushTexture2D: C,
      popTexture2D: U,
      pushArrayBuffer: V,
      popArrayBuffer: W,
      pushElementArrayBuffer: S,
      popElementArrayBuffer: z,
      pushFramebuffer: x,
      popFramebuffer: Z,
      pushRenderbuffer: we,
      popRenderbuffer: re,
      pushViewport: G,
      popViewport: pe,
      pushProgram: R,
      popProgram: Pe,
      setVertexFormat: M,
    }
  );
}
o(Fn, "initGfx");
var Nt,
  Ie =
    ((Nt = class {
      constructor(e) {
        E(this, "loaded", !1);
        E(this, "data", null);
        E(this, "error", null);
        E(this, "onLoadEvents", new Ce());
        E(this, "onErrorEvents", new Ce());
        E(this, "onFinishEvents", new Ce());
        e.then((n) => {
          (this.data = n), this.onLoadEvents.trigger(n);
        })
          .catch((n) => {
            if (((this.error = n), this.onErrorEvents.numListeners() > 0))
              this.onErrorEvents.trigger(n);
            else throw n;
          })
          .finally(() => {
            this.onFinishEvents.trigger(), (this.loaded = !0);
          });
      }
      static loaded(e) {
        let n = new Nt(Promise.resolve(e));
        return (n.data = e), (n.loaded = !0), n;
      }
      onLoad(e) {
        return (
          this.loaded && this.data ? e(this.data) : this.onLoadEvents.add(e),
          this
        );
      }
      onError(e) {
        return (
          this.loaded && this.error ? e(this.error) : this.onErrorEvents.add(e),
          this
        );
      }
      onFinish(e) {
        return this.loaded ? e() : this.onFinishEvents.add(e), this;
      }
      then(e) {
        return this.onLoad(e);
      }
      catch(e) {
        return this.onError(e);
      }
      finally(e) {
        return this.onFinish(e);
      }
    }),
    o(Nt, "Asset"),
    Nt),
  Er,
  Tt =
    ((Er = class {
      constructor() {
        E(this, "assets", new Map());
        E(this, "lastUID", 0);
      }
      add(e, n) {
        let l = e ?? this.lastUID++ + "",
          p = new Ie(n);
        return this.assets.set(l, p), p;
      }
      addLoaded(e, n) {
        let l = e ?? this.lastUID++ + "",
          p = Ie.loaded(n);
        return this.assets.set(l, p), p;
      }
      get(e) {
        return this.assets.get(e);
      }
      progress() {
        if (this.assets.size === 0) return 1;
        let e = 0;
        return (
          this.assets.forEach((n) => {
            n.loaded && e++;
          }),
          e / this.assets.size
        );
      }
    }),
    o(Er, "AssetBucket"),
    Er);
function Wr(i) {
  return fetch(i).then((e) => {
    if (!e.ok) throw new Error(`Failed to fetch "${i}"`);
    return e;
  });
}
o(Wr, "fetchURL");
function hr(i) {
  return Wr(i).then((e) => e.json());
}
o(hr, "fetchJSON");
function In(i) {
  return Wr(i).then((e) => e.text());
}
o(In, "fetchText");
function kn(i) {
  return Wr(i).then((e) => e.arrayBuffer());
}
o(kn, "fetchArrayBuffer");
function lr(i) {
  let e = new Image();
  return (
    (e.crossOrigin = "anonymous"),
    (e.src = i),
    new Promise((n, l) => {
      (e.onload = () => n(e)),
        (e.onerror = () => l(new Error(`Failed to load image from "${i}"`)));
    })
  );
}
o(lr, "loadImg");
var Gr = 2.5949095,
  Js = 1.70158 + 1,
  Xs = (2 * Math.PI) / 3,
  Ws = (2 * Math.PI) / 4.5,
  Qr = {
    linear: (i) => i,
    easeInSine: (i) => 1 - Math.cos((i * Math.PI) / 2),
    easeOutSine: (i) => Math.sin((i * Math.PI) / 2),
    easeInOutSine: (i) => -(Math.cos(Math.PI * i) - 1) / 2,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => 1 - (1 - i) * (1 - i),
    easeInOutQuad: (i) =>
      i < 0.5 ? 2 * i * i : 1 - Math.pow(-2 * i + 2, 2) / 2,
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => 1 - Math.pow(1 - i, 3),
    easeInOutCubic: (i) =>
      i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2,
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => 1 - Math.pow(1 - i, 4),
    easeInOutQuart: (i) =>
      i < 0.5 ? 8 * i * i * i * i : 1 - Math.pow(-2 * i + 2, 4) / 2,
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => 1 - Math.pow(1 - i, 5),
    easeInOutQuint: (i) =>
      i < 0.5 ? 16 * i * i * i * i * i : 1 - Math.pow(-2 * i + 2, 5) / 2,
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * i - 10)),
    easeOutExpo: (i) => (i === 1 ? 1 : 1 - Math.pow(2, -10 * i)),
    easeInOutExpo: (i) =>
      i === 0
        ? 0
        : i === 1
        ? 1
        : i < 0.5
        ? Math.pow(2, 20 * i - 10) / 2
        : (2 - Math.pow(2, -20 * i + 10)) / 2,
    easeInCirc: (i) => 1 - Math.sqrt(1 - Math.pow(i, 2)),
    easeOutCirc: (i) => Math.sqrt(1 - Math.pow(i - 1, 2)),
    easeInOutCirc: (i) =>
      i < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * i, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * i + 2, 2)) + 1) / 2,
    easeInBack: (i) => Js * i * i * i - 1.70158 * i * i,
    easeOutBack: (i) =>
      1 + Js * Math.pow(i - 1, 3) + 1.70158 * Math.pow(i - 1, 2),
    easeInOutBack: (i) =>
      i < 0.5
        ? (Math.pow(2 * i, 2) * ((Gr + 1) * 2 * i - Gr)) / 2
        : (Math.pow(2 * i - 2, 2) * ((Gr + 1) * (i * 2 - 2) + Gr) + 2) / 2,
    easeInElastic: (i) =>
      i === 0
        ? 0
        : i === 1
        ? 1
        : -Math.pow(2, 10 * i - 10) * Math.sin((i * 10 - 10.75) * Xs),
    easeOutElastic: (i) =>
      i === 0
        ? 0
        : i === 1
        ? 1
        : Math.pow(2, -10 * i) * Math.sin((i * 10 - 0.75) * Xs) + 1,
    easeInOutElastic: (i) =>
      i === 0
        ? 0
        : i === 1
        ? 1
        : i < 0.5
        ? -(Math.pow(2, 20 * i - 10) * Math.sin((20 * i - 11.125) * Ws)) / 2
        : (Math.pow(2, -20 * i + 10) * Math.sin((20 * i - 11.125) * Ws)) / 2 +
          1,
    easeInBounce: (i) => 1 - Qr.easeOutBounce(1 - i),
    easeOutBounce: (i) =>
      i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
        ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
        : i < 2.5 / 2.75
        ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
        : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375,
    easeInOutBounce: (i) =>
      i < 0.5
        ? (1 - Qr.easeOutBounce(1 - 2 * i)) / 2
        : (1 + Qr.easeOutBounce(2 * i - 1)) / 2,
  },
  Or = Qr,
  br,
  go =
    ((br = class {
      constructor(e, n, l) {
        E(this, "textures", []);
        E(this, "canvas");
        E(this, "c2d");
        E(this, "x", 0);
        E(this, "y", 0);
        E(this, "curHeight", 0);
        E(this, "gfx");
        (this.gfx = e),
          (this.canvas = document.createElement("canvas")),
          (this.canvas.width = n),
          (this.canvas.height = l),
          (this.textures = [lt.fromImage(e, this.canvas)]),
          (this.c2d = this.canvas.getContext("2d"));
      }
      add(e) {
        if (e.width > this.canvas.width || e.height > this.canvas.height)
          throw new Error(
            `Texture size (${e.width} x ${e.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`
          );
        this.x + e.width > this.canvas.width &&
          ((this.x = 0), (this.y += this.curHeight), (this.curHeight = 0)),
          this.y + e.height > this.canvas.height &&
            (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.textures.push(lt.fromImage(this.gfx, this.canvas)),
            (this.x = 0),
            (this.y = 0),
            (this.curHeight = 0));
        let n = this.textures[this.textures.length - 1],
          l = new b(this.x, this.y);
        return (
          (this.x += e.width),
          e.height > this.curHeight && (this.curHeight = e.height),
          e instanceof ImageData
            ? this.c2d.putImageData(e, l.x, l.y)
            : this.c2d.drawImage(e, l.x, l.y),
          n.update(this.canvas),
          [
            n,
            new me(
              l.x / this.canvas.width,
              l.y / this.canvas.height,
              e.width / this.canvas.width,
              e.height / this.canvas.height
            ),
          ]
        );
      }
      free() {
        for (let e of this.textures) e.free();
      }
    }),
    o(br, "TexPacker"),
    br),
  mo =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==",
  wo = $n(
    "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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
  ),
  Ao =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABdRJREFUeJzt3d3N3TYMgGG16ADdoAhyl7UyV9bqXRB0g2zQXgRGDcOWSIoUaX3vAwQBknMk/4gWLcnHrQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDEb9kb8FH99eeXf6Wf/efn35ynDyj1pEsb6G6NUxOYZ7sdB/QtPdnWRnn29gbKMYDUspPs0SgPb22cHANo/JG9AZF6wWBp3JLgeir36bvff3x9LOvzp2/dbSFA97bk5I4a9VMD7TXOUcP0uJ+d6emu5d6V1QvMs5nj8FZPx37X/b2TFpzShtnafeP0DipJMFnLnN3/w1OQ7tZgP+pA4VVKcHo0TG36KNULKGt5XsHZmi1APS5WM2Vqg0i7vbsG6YcIznN9vRTxXHavgdxtv6Tc3vc1pAHqdaG6ipwKYprpf1sFp6aH0gRTrxxLubPB2avHu+c/l3mICvqnsr//+Cq+qGrK1Xw/wzbBaRkNvSv3yew9cq+cu89L6nu6F/cMzCgzF1ftANlbe+Otp1IkDVxyVfbo6Z481f3507dhvXfbrk3HpdtjKTNqKuio8678c7mzF6ns6arfMyrVNoA75wMfNU2hKSeCx3Fq7dc+SPfDc39H9Vqn2CT//4bsYeT1PecOJyGSJdh6PZOlbElPZz2PHtlD1cUeS4LT4z5IOihwfNaD5ERm9qxH/dZ7Vmt9M999CtCZbdLUP/p3r2zFQ0paG8lr4Eb6+ZWBcSeq/qhyK6bXUfXOSgtO7/tOb9eT1NveqKttpYbiyXu/euV51JV16/T6e86zyF5TUp731V5Sp+Z7M71h9QvFNWWuvr0Sy4LzLfNvrel6zRX1e+hN2VzrnNlfaYD0xhCs++851lDh3vNV95xe6YvHgb8bwbNcuc+f09wbaUj2dzYgjz93//5kh94t0quCM8OKK6glKKuM0EYHfhUZWd8WwenZa0rLsp6s2YY66o0k9WUvS4NManBaGuo1eDIHgUZ1ePdkntsfFaCz5VZJdStsxyt7ziMNXHEAK5yk1mqmhrMPf1fcp57Vqe3SqZTMEduZhqAZyaywFne0DVHngHTZ11bznE88l/1lBZ9meP8851plWkBCO7drmQvWnL/sY/fKtFaqN3iy6iofsQxNktJnTMgfPXJUz3w3VaP5vOQ7Iyszvy2DczSi+aYFET2jINUEqFcAS4+rV480WlwRWXe07dLa0YGvfl9kmbTvPZJ1TXGvn4t4yuRp+2aMgk27wkm63DIztU3vOVfueC8wK4zKWtK0M+nvJXmOdlt65MgFFCva06qsKz044SvjIiN5TjLaaHxhtNyyouXBGZ1WSn66Ivt+M7pRZAWoZsDq+t2emeM1am/WtHxFG9runrO1/n1CxLK7CilxJM/H4bwuTJJBvWtgvm0gcNu01uvpd8la1soLE7xkpYDea4Ot6W3GOSzRc3o/qHw2M9qmXWA+uw+jbd0hyO9Yz0+vJ9QGcO/8ZV2YUqYVPN8dImXp3aJ/w1XTGGYfKZN+P7IXiXqO1uINLzFOm/Pz+BV4C03PNEqpZl//ELXP1ro8nhLyKLPHMyAiXyvh4cMFZ2uyAJXc62gzgJl1nhrSLMEzcLx+5qQnIhgqv6qhTHC2Zmus1tUuowCVDkRU6j0jgiJqhLPSSq2q7wMtMSBkdbcQWjNCq2nMlRrTnajAPP/t+c5Sj3K8VNueQ+pGzaa2MyOb2sZseW2dpL6ZnjMzfeQFt/Fe3XP2WIfGvRY6a569jCJ9TaIlcCS9KQE5p1TP2VrMbwLNDlZEvpE5AkGxh9f2nLO/QOetytIwAnMf6SfS2ns+jaZ6B4i2sWvSvF0HWOAj/aRGNFAaPXbw2rS2Rzr0T/ChshKNM3qd4135BCaqK9VAKy+lAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4DBC0k0jFtF9wAAAAASUVORK5CYII=",
  yo =
    "data:image/png;base64,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",
  Vo = "3000.1.17",
  Zs =
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
  qr = "topleft",
  _s = 64,
  vo = "monospace",
  Hr = "monospace",
  xo = 36,
  Yr = 64,
  Kr = 256,
  $s = 2048,
  en = 2048,
  tn = 2048,
  rn = 2048,
  sn = 0.1,
  Eo = 64,
  yi = "linear",
  bo = 8,
  So = 4,
  Ri = [
    { name: "a_pos", size: 2 },
    { name: "a_uv", size: 2 },
    { name: "a_color", size: 4 },
  ],
  Ro = Ri.reduce((i, e) => i + e.size, 0),
  Dn = 2048,
  Mo = Dn * 4 * Ro,
  To = Dn * 6,
  Bo = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`,
  Po = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`,
  Vi = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`,
  vi = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`,
  Fo = new Set(["id", "require"]),
  Io = new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
function ht(i) {
  switch (i) {
    case "topleft":
      return new b(-1, -1);
    case "top":
      return new b(0, -1);
    case "topright":
      return new b(1, -1);
    case "left":
      return new b(-1, 0);
    case "center":
      return new b(0, 0);
    case "right":
      return new b(1, 0);
    case "botleft":
      return new b(-1, 1);
    case "bot":
      return new b(0, 1);
    case "botright":
      return new b(1, 1);
    default:
      return i;
  }
}
o(ht, "anchorPt");
function Cn(i) {
  switch (i) {
    case "left":
      return 0;
    case "center":
      return 0.5;
    case "right":
      return 1;
    default:
      return 0;
  }
}
o(Cn, "alignPt");
function Nn(i) {
  return i.createBuffer(1, 1, 44100);
}
o(Nn, "createEmptyAudioBuffer");
var ko = o((i = {}) => {
  let e = i.root ?? document.body;
  e === document.body &&
    ((document.body.style.width = "100%"),
    (document.body.style.height = "100%"),
    (document.body.style.margin = "0px"),
    (document.documentElement.style.width = "100%"),
    (document.documentElement.style.height = "100%"));
  let n =
      i.canvas ??
      (() => {
        let t = document.createElement("canvas");
        return e.appendChild(t), t;
      })(),
    l = i.scale ?? 1,
    p = i.width && i.height && !i.stretch && !i.letterbox;
  p
    ? ((n.width = i.width * l), (n.height = i.height * l))
    : ((n.width = n.parentElement.offsetWidth),
      (n.height = n.parentElement.offsetHeight));
  let f = ["outline: none", "cursor: default"];
  if (p) {
    let t = n.width,
      r = n.height;
    f.push(`width: ${t}px`), f.push(`height: ${r}px`);
  } else f.push("width: 100%"), f.push("height: 100%");
  i.crisp &&
    (f.push("image-rendering: pixelated"),
    f.push("image-rendering: crisp-edges")),
    (n.style.cssText = f.join(";"));
  let M = i.pixelDensity || window.devicePixelRatio;
  (n.width *= M), (n.height *= M), (n.tabIndex = 0);
  let C = document.createElement("canvas");
  (C.width = Kr), (C.height = Kr);
  let U = C.getContext("2d", { willReadFrequently: !0 }),
    V = co({
      canvas: n,
      touchToMouse: i.touchToMouse,
      gamepads: i.gamepads,
      pixelDensity: i.pixelDensity,
      maxFPS: i.maxFPS,
    }),
    W = [],
    S = V.canvas.getContext("webgl", {
      antialias: !0,
      depth: !0,
      stencil: !0,
      alpha: !0,
      preserveDrawingBuffer: !0,
    }),
    z = Fn(S, { texFilter: i.texFilter }),
    x = (() => {
      let t = tt(Vi, vi),
        r = lt.fromImage(
          z,
          new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)
        ),
        s =
          i.width && i.height
            ? new Lr(z, i.width * M * l, i.height * M * l)
            : new Lr(z, S.drawingBufferWidth, S.drawingBufferHeight),
        a = null,
        h = 1;
      i.background &&
        ((a = _(i.background)),
        (h = Array.isArray(i.background) ? i.background[3] : 1),
        S.clearColor(a.r / 255, a.g / 255, a.b / 255, h ?? 1)),
        S.enable(S.BLEND),
        S.blendFuncSeparate(
          S.SRC_ALPHA,
          S.ONE_MINUS_SRC_ALPHA,
          S.ONE,
          S.ONE_MINUS_SRC_ALPHA
        );
      let u = new po(z, Ri, Mo, To),
        g = lt.fromImage(
          z,
          new ImageData(
            new Uint8ClampedArray([
              128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128,
              128, 128, 255,
            ]),
            2,
            2
          ),
          { wrap: "repeat", filter: "nearest" }
        );
      return {
        lastDrawCalls: 0,
        defShader: t,
        defTex: r,
        frameBuffer: s,
        postShader: null,
        postShaderUniform: null,
        renderer: u,
        transform: new Le(),
        transformStack: [],
        bgTex: g,
        bgColor: a,
        bgAlpha: h,
        width: i.width ?? S.drawingBufferWidth / M / l,
        height: i.height ?? S.drawingBufferHeight / M / l,
        viewport: {
          x: 0,
          y: 0,
          width: S.drawingBufferWidth,
          height: S.drawingBufferHeight,
        },
        fixed: !1,
      };
    })();
  const ot = class ot {
    constructor(r, s, a = {}, h = null) {
      E(this, "tex");
      E(this, "frames", [new me(0, 0, 1, 1)]);
      E(this, "anims", {});
      E(this, "slice9", null);
      (this.tex = r),
        s && (this.frames = s),
        (this.anims = a),
        (this.slice9 = h);
    }
    get width() {
      return this.tex.width * this.frames[0].w;
    }
    get height() {
      return this.tex.height * this.frames[0].h;
    }
    static from(r, s = {}) {
      return typeof r == "string"
        ? ot.fromURL(r, s)
        : Promise.resolve(ot.fromImage(r, s));
    }
    static fromImage(r, s = {}) {
      let [a, h] = G.packer.add(r),
        u = s.frames
          ? s.frames.map(
              (g) =>
                new me(h.x + g.x * h.w, h.y + g.y * h.h, g.w * h.w, g.h * h.h)
            )
          : gt(s.sliceX || 1, s.sliceY || 1, h.x, h.y, h.w, h.h);
      return new ot(a, u, s.anims, s.slice9);
    }
    static fromURL(r, s = {}) {
      return lr(r).then((a) => ot.fromImage(a, s));
    }
  };
  o(ot, "SpriteData");
  let Z = ot;
  const Mt = class Mt {
    constructor(r) {
      E(this, "buf");
      this.buf = r;
    }
    static fromArrayBuffer(r) {
      return new Promise((s, a) => re.ctx.decodeAudioData(r, s, a)).then(
        (s) => new Mt(s)
      );
    }
    static fromURL(r) {
      return Qs(r)
        ? Mt.fromArrayBuffer(yn(r))
        : kn(r).then((s) => Mt.fromArrayBuffer(s));
    }
  };
  o(Mt, "SoundData");
  let we = Mt,
    re = (() => {
      let t = new (window.AudioContext || window.webkitAudioContext)(),
        r = t.createGain();
      r.connect(t.destination);
      let s = new we(Nn(t));
      return (
        t
          .decodeAudioData(wo.buffer.slice(0))
          .then((a) => {
            s.buf = a;
          })
          .catch((a) => {
            console.error("Failed to load burp: ", a);
          }),
        { ctx: t, masterNode: r, burpSnd: s }
      );
    })(),
    G = {
      urlPrefix: "",
      sprites: new Tt(),
      fonts: new Tt(),
      bitmapFonts: new Tt(),
      sounds: new Tt(),
      shaders: new Tt(),
      custom: new Tt(),
      packer: new go(z, tn, rn),
      loaded: !1,
    };
  function pe(t) {
    return typeof t != "string" || Qs(t) ? t : G.urlPrefix + t;
  }
  o(pe, "fixURL");
  let R = {
    events: new ar(),
    objEvents: new ar(),
    root: Pr([]),
    gravity: 0,
    scenes: {},
    logs: [],
    cam: {
      pos: null,
      scale: new b(1),
      angle: 0,
      shake: 0,
      transform: new Le(),
    },
  };
  R.root.use(kr());
  function Pe(t) {
    return G.custom.add(null, t);
  }
  o(Pe, "load");
  function Y() {
    let t = [G.sprites, G.sounds, G.shaders, G.fonts, G.bitmapFonts, G.custom];
    return t.reduce((r, s) => r + s.progress(), 0) / t.length;
  }
  o(Y, "loadProgress");
  function be(t) {
    return t !== void 0 && (G.urlPrefix = t), G.urlPrefix;
  }
  o(be, "loadRoot");
  function Ae(t, r) {
    return G.custom.add(t, hr(r));
  }
  o(Ae, "loadJSON");
  const gi = class gi {
    constructor(r, s = {}) {
      E(this, "fontface");
      E(this, "filter", yi);
      E(this, "outline", null);
      E(this, "size", Yr);
      if (
        ((this.fontface = r),
        (this.filter = s.filter ?? yi),
        (this.size = s.size ?? Yr),
        this.size > Kr)
      )
        throw new Error(`Max font size: ${Kr}`);
      s.outline &&
        ((this.outline = { width: 1, color: _(0, 0, 0) }),
        typeof s.outline == "number"
          ? (this.outline.width = s.outline)
          : typeof s.outline == "object" &&
            (s.outline.width && (this.outline.width = s.outline.width),
            s.outline.color && (this.outline.color = s.outline.color)));
    }
  };
  o(gi, "FontData");
  let ye = gi;
  function Qe(t, r, s = {}) {
    let a = new FontFace(t, typeof r == "string" ? `url(${r})` : r);
    return (
      document.fonts.add(a),
      G.fonts.add(
        t,
        a
          .load()
          .catch((h) => {
            throw new Error(`Failed to load font from "${r}": ${h}`);
          })
          .then((h) => new ye(h, s))
      )
    );
  }
  o(Qe, "loadFont");
  function Ut(t, r, s, a, h = {}) {
    return G.bitmapFonts.add(
      t,
      lr(r).then((u) => Jt(lt.fromImage(z, u, h), s, a, h.chars ?? Zs))
    );
  }
  o(Ut, "loadBitmapFont");
  function gt(t = 1, r = 1, s = 0, a = 0, h = 1, u = 1) {
    let g = [],
      y = h / t,
      m = u / r;
    for (let d = 0; d < r; d++)
      for (let w = 0; w < t; w++) g.push(new me(s + w * y, a + d * m, y, m));
    return g;
  }
  o(gt, "slice");
  function mt(t, r) {
    return (
      (t = pe(t)),
      Pe(
        typeof r == "string"
          ? new Promise((s, a) => {
              hr(r).then((h) => {
                mt(t, h).then(s).catch(a);
              });
            })
          : Z.from(t).then((s) => {
              let a = {};
              for (let h in r) {
                let u = r[h],
                  g = s.frames[0],
                  y = tn * g.w,
                  m = rn * g.h,
                  d = u.frames
                    ? u.frames.map(
                        (P) =>
                          new me(
                            g.x + ((u.x + P.x) / y) * g.w,
                            g.y + ((u.y + P.y) / m) * g.h,
                            (P.w / y) * g.w,
                            (P.h / m) * g.h
                          )
                      )
                    : gt(
                        u.sliceX || 1,
                        u.sliceY || 1,
                        g.x + (u.x / y) * g.w,
                        g.y + (u.y / m) * g.h,
                        (u.width / y) * g.w,
                        (u.height / m) * g.h
                      ),
                  w = new Z(s.tex, d, u.anims);
                G.sprites.addLoaded(h, w), (a[h] = w);
              }
              return a;
            })
      )
    );
  }
  o(mt, "loadSpriteAtlas");
  function wt(t, r = {}) {
    let s = document.createElement("canvas"),
      a = t[0].width,
      h = t[0].height;
    (s.width = a * t.length), (s.height = h);
    let u = s.getContext("2d");
    t.forEach((y, m) => {
      y instanceof ImageData
        ? u.putImageData(y, m * a, 0)
        : u.drawImage(y, m * a, 0);
    });
    let g = u.getImageData(0, 0, t.length * a, h);
    return Z.fromImage(g, { ...r, sliceX: t.length, sliceY: 1 });
  }
  o(wt, "createSpriteSheet");
  function Oe(t, r, s = { sliceX: 1, sliceY: 1, anims: {} }) {
    return (
      (r = pe(r)),
      Array.isArray(r)
        ? r.some((a) => typeof a == "string")
          ? G.sprites.add(
              t,
              Promise.all(
                r.map((a) =>
                  typeof a == "string" ? lr(a) : Promise.resolve(a)
                )
              ).then((a) => wt(a, s))
            )
          : G.sprites.addLoaded(t, wt(r, s))
        : typeof r == "string"
        ? G.sprites.add(t, Z.from(r, s))
        : G.sprites.addLoaded(t, Z.fromImage(r, s))
    );
  }
  o(Oe, "loadSprite");
  function Lt(t, r) {
    return (
      (r = pe(r)),
      G.sprites.add(
        t,
        new Promise(async (s) => {
          let a = typeof r == "string" ? await hr(r) : r,
            h = await Promise.all(a.frames.map(lr)),
            u = document.createElement("canvas");
          (u.width = a.width), (u.height = a.height * a.frames.length);
          let g = u.getContext("2d");
          h.forEach((m, d) => {
            g.drawImage(m, 0, d * a.height);
          });
          let y = await Oe(null, u, {
            sliceY: a.frames.length,
            anims: a.anims,
          });
          s(y);
        })
      )
    );
  }
  o(Lt, "loadPedit");
  function Gt(t, r, s) {
    (r = pe(r)),
      (s = pe(s)),
      typeof r == "string" && !s && (s = so(r) + ".json");
    let a = typeof s == "string" ? hr(s) : Promise.resolve(s);
    return G.sprites.add(
      t,
      a.then((h) => {
        let u = h.meta.size,
          g = h.frames.map(
            (m) =>
              new me(
                m.frame.x / u.w,
                m.frame.y / u.h,
                m.frame.w / u.w,
                m.frame.h / u.h
              )
          ),
          y = {};
        for (let m of h.meta.frameTags)
          m.from === m.to
            ? (y[m.name] = m.from)
            : (y[m.name] = {
                from: m.from,
                to: m.to,
                speed: 10,
                loop: !0,
                pingpong: m.direction === "pingpong",
              });
        return Z.from(r, { frames: g, anims: y });
      })
    );
  }
  o(Gt, "loadAseprite");
  function Sr(t, r, s) {
    return G.shaders.addLoaded(t, tt(r, s));
  }
  o(Sr, "loadShader");
  function Rr(t, r, s) {
    (r = pe(r)), (s = pe(s));
    let a = o((u) => (u ? In(u) : Promise.resolve(null)), "resolveUrl"),
      h = Promise.all([a(r), a(s)]).then(([u, g]) => tt(u, g));
    return G.shaders.add(t, h);
  }
  o(Rr, "loadShaderURL");
  function Mr(t, r) {
    return (
      (r = pe(r)),
      G.sounds.add(
        t,
        typeof r == "string" ? we.fromURL(r) : we.fromArrayBuffer(r)
      )
    );
  }
  o(Mr, "loadSound");
  function Tr(t = "bean") {
    return Oe(t, mo);
  }
  o(Tr, "loadBean");
  function Ot(t) {
    return G.sprites.get(t);
  }
  o(Ot, "getSprite");
  function qt(t) {
    return G.sounds.get(t);
  }
  o(qt, "getSound");
  function Ht(t) {
    return G.fonts.get(t);
  }
  o(Ht, "getFont");
  function At(t) {
    return G.bitmapFonts.get(t);
  }
  o(At, "getBitmapFont");
  function yt(t) {
    return G.shaders.get(t);
  }
  o(yt, "getShader");
  function Yt(t) {
    return G.custom.get(t);
  }
  o(Yt, "getAsset");
  function et(t) {
    if (typeof t == "string") {
      let r = Ot(t);
      if (r) return r;
      if (Y() < 1) return null;
      throw new Error(`Sprite not found: ${t}`);
    } else {
      if (t instanceof Z) return Ie.loaded(t);
      if (t instanceof Ie) return t;
      throw new Error(`Invalid sprite: ${t}`);
    }
  }
  o(et, "resolveSprite");
  function Kt(t) {
    if (typeof t == "string") {
      let r = qt(t);
      if (r) return r;
      if (Y() < 1) return null;
      throw new Error(`Sound not found: ${t}`);
    } else {
      if (t instanceof we) return Ie.loaded(t);
      if (t instanceof Ie) return t;
      throw new Error(`Invalid sound: ${t}`);
    }
  }
  o(Kt, "resolveSound");
  function jt(t) {
    if (!t) return x.defShader;
    if (typeof t == "string") {
      let r = yt(t);
      if (r) return r.data ?? r;
      if (Y() < 1) return null;
      throw new Error(`Shader not found: ${t}`);
    } else if (t instanceof Ie) return t.data ? t.data : t;
    return t;
  }
  o(jt, "resolveShader");
  function Vt(t) {
    if (!t) return Vt(i.font ?? vo);
    if (typeof t == "string") {
      let r = At(t),
        s = Ht(t);
      if (r) return r.data ?? r;
      if (s) return s.data ?? s;
      if (document.fonts.check(`${Yr}px ${t}`)) return t;
      if (Y() < 1) return null;
      throw new Error(`Font not found: ${t}`);
    } else if (t instanceof Ie) return t.data ? t.data : t;
    return t;
  }
  o(Vt, "resolveFont");
  function Qt(t) {
    return (
      t !== void 0 && (re.masterNode.gain.value = t), re.masterNode.gain.value
    );
  }
  o(Qt, "volume");
  function vt(t, r = {}) {
    let s = re.ctx,
      a = r.paused ?? !1,
      h = s.createBufferSource(),
      u = new Ce(),
      g = s.createGain(),
      y = r.seek ?? 0,
      m = 0,
      d = 0,
      w = !1;
    (h.loop = !!r.loop),
      (h.detune.value = r.detune ?? 0),
      (h.playbackRate.value = r.speed ?? 1),
      h.connect(g),
      (h.onended = () => {
        var I;
        O() >= ((I = h.buffer) == null ? void 0 : I.duration) && u.trigger();
      }),
      g.connect(re.masterNode),
      (g.gain.value = r.volume ?? 1);
    let P = o((I) => {
        (h.buffer = I.buf), a || ((m = s.currentTime), h.start(0, y), (w = !0));
      }, "start"),
      D = Kt(t);
    D instanceof Ie && D.onLoad(P);
    let O = o(() => {
        if (!h.buffer) return 0;
        let I = a ? d - m : s.currentTime - m,
          L = h.buffer.duration;
        return h.loop ? I % L : Math.min(I, L);
      }, "getTime"),
      q = o((I) => {
        let L = s.createBufferSource();
        return (
          (L.buffer = I.buffer),
          (L.loop = I.loop),
          (L.playbackRate.value = I.playbackRate.value),
          (L.detune.value = I.detune.value),
          (L.onended = I.onended),
          L.connect(g),
          L
        );
      }, "cloneNode");
    return {
      stop() {
        (this.paused = !0), this.seek(0);
      },
      set paused(I) {
        if (a !== I)
          if (((a = I), I)) w && (h.stop(), (w = !1)), (d = s.currentTime);
          else {
            h = q(h);
            let L = d - m;
            h.start(0, L), (w = !0), (m = s.currentTime - L), (d = 0);
          }
      },
      get paused() {
        return a;
      },
      play(I = 0) {
        this.seek(I), (this.paused = !1);
      },
      seek(I) {
        var L;
        (L = h.buffer) != null &&
          L.duration &&
          (I > h.buffer.duration ||
            (a
              ? ((h = q(h)), (m = d - I))
              : (h.stop(),
                (h = q(h)),
                (m = s.currentTime - I),
                h.start(0, I),
                (w = !0),
                (d = 0))));
      },
      set speed(I) {
        h.playbackRate.value = I;
      },
      get speed() {
        return h.playbackRate.value;
      },
      set detune(I) {
        h.detune.value = I;
      },
      get detune() {
        return h.detune.value;
      },
      set volume(I) {
        g.gain.value = Math.max(I, 0);
      },
      get volume() {
        return g.gain.value;
      },
      set loop(I) {
        h.loop = I;
      },
      get loop() {
        return h.loop;
      },
      duration() {
        var I;
        return ((I = h.buffer) == null ? void 0 : I.duration) ?? 0;
      },
      time() {
        return O() % this.duration();
      },
      onEnd(I) {
        return u.add(I);
      },
      then(I) {
        return this.onEnd(I);
      },
    };
  }
  o(vt, "play");
  function xt(t) {
    return vt(re.burpSnd, t);
  }
  o(xt, "burp");
  function zt(t, r) {
    return new Lr(z, t, r);
  }
  o(zt, "makeCanvas");
  function tt(t = Vi, r = vi) {
    let s = Bo.replace("{{user}}", t ?? Vi),
      a = Po.replace("{{user}}", r ?? vi);
    try {
      return new fo(
        z,
        s,
        a,
        Ri.map((h) => h.name)
      );
    } catch (h) {
      let u = /(?<type>^\w+) SHADER ERROR: 0:(?<line>\d+): (?<msg>.+)/,
        g = oo(h).match(u),
        y = Number(g.groups.line) - 14,
        m = g.groups.msg.trim(),
        d = g.groups.type.toLowerCase();
      throw new Error(`${d} shader line ${y}: ${m}`);
    }
  }
  o(tt, "makeShader");
  function Jt(t, r, s, a) {
    let h = t.width / r,
      u = {},
      g = a.split("").entries();
    for (let [y, m] of g)
      u[m] = new me((y % h) * r, Math.floor(y / h) * s, r, s);
    return { tex: t, map: u, size: s };
  }
  o(Jt, "makeFont");
  function rt(t, r, s, a = x.defTex, h = x.defShader, u = {}) {
    let g = jt(h);
    if (!g || g instanceof Ie) return;
    let y = x.fixed || s ? x.transform : R.cam.transform.mult(x.transform),
      m = [];
    for (let d of t) {
      let w = Xt(y.multVec2(d.pos));
      m.push(
        w.x,
        w.y,
        d.uv.x,
        d.uv.y,
        d.color.r / 255,
        d.color.g / 255,
        d.color.b / 255,
        d.opacity
      );
    }
    x.renderer.push(S.TRIANGLES, m, r, g, a, u);
  }
  o(rt, "drawRaw");
  function Fe() {
    x.renderer.flush();
  }
  o(Fe, "flush");
  function it() {
    S.clear(S.COLOR_BUFFER_BIT),
      x.frameBuffer.bind(),
      S.clear(S.COLOR_BUFFER_BIT),
      x.bgColor ||
        Re(() => {
          Ue({
            width: ve(),
            height: xe(),
            quad: new me(0, 0, ve() / _s, xe() / _s),
            tex: x.bgTex,
            fixed: !0,
          });
        }),
      (x.renderer.numDraws = 0),
      (x.fixed = !1),
      (x.transformStack.length = 0),
      (x.transform = new Le());
  }
  o(it, "frameStart");
  function Et(t, r) {
    (x.postShader = t), (x.postShaderUniform = r ?? null);
  }
  o(Et, "usePostEffect");
  function st() {
    Fe(),
      (x.lastDrawCalls = x.renderer.numDraws),
      x.frameBuffer.unbind(),
      S.viewport(0, 0, S.drawingBufferWidth, S.drawingBufferHeight);
    let t = x.width,
      r = x.height;
    (x.width = S.drawingBufferWidth / M),
      (x.height = S.drawingBufferHeight / M),
      ze({
        flipY: !0,
        tex: x.frameBuffer.tex,
        pos: new b(x.viewport.x, x.viewport.y),
        width: x.viewport.width,
        height: x.viewport.height,
        shader: x.postShader,
        uniform:
          typeof x.postShaderUniform == "function"
            ? x.postShaderUniform()
            : x.postShaderUniform,
        fixed: !0,
      }),
      Fe(),
      (x.width = t),
      (x.height = r);
  }
  o(st, "frameEnd");
  function Xt(t) {
    return new b((t.x / ve()) * 2 - 1, (-t.y / xe()) * 2 + 1);
  }
  o(Xt, "screen2ndc");
  function bt(t) {
    x.transform = t.clone();
  }
  o(bt, "pushMatrix");
  function $(...t) {
    if (t[0] === void 0) return;
    let r = B(...t);
    (r.x === 0 && r.y === 0) || x.transform.translate(r);
  }
  o($, "pushTranslate");
  function Ne(...t) {
    if (t[0] === void 0) return;
    let r = B(...t);
    (r.x === 1 && r.y === 1) || x.transform.scale(r);
  }
  o(Ne, "pushScale");
  function se(t) {
    t && x.transform.rotate(t);
  }
  o(se, "pushRotate");
  function ue() {
    x.transformStack.push(x.transform.clone());
  }
  o(ue, "pushTransform");
  function he() {
    x.transformStack.length > 0 && (x.transform = x.transformStack.pop());
  }
  o(he, "popTransform");
  function Ue(t) {
    if (t.width === void 0 || t.height === void 0)
      throw new Error('drawUVQuad() requires property "width" and "height".');
    if (t.width <= 0 || t.height <= 0) return;
    let r = t.width,
      s = t.height,
      a = ht(t.anchor || qr).scale(new b(r, s).scale(-0.5)),
      h = t.quad || new me(0, 0, 1, 1),
      u = t.color || _(255, 255, 255),
      g = t.opacity ?? 1,
      y = t.tex ? sn / t.tex.width : 0,
      m = t.tex ? sn / t.tex.height : 0,
      d = h.x + y,
      w = h.y + m,
      P = h.w - y * 2,
      D = h.h - m * 2;
    ue(),
      $(t.pos),
      se(t.angle),
      Ne(t.scale),
      $(a),
      rt(
        [
          {
            pos: new b(-r / 2, s / 2),
            uv: new b(t.flipX ? d + P : d, t.flipY ? w : w + D),
            color: u,
            opacity: g,
          },
          {
            pos: new b(-r / 2, -s / 2),
            uv: new b(t.flipX ? d + P : d, t.flipY ? w + D : w),
            color: u,
            opacity: g,
          },
          {
            pos: new b(r / 2, -s / 2),
            uv: new b(t.flipX ? d : d + P, t.flipY ? w + D : w),
            color: u,
            opacity: g,
          },
          {
            pos: new b(r / 2, s / 2),
            uv: new b(t.flipX ? d : d + P, t.flipY ? w : w + D),
            color: u,
            opacity: g,
          },
        ],
        [0, 1, 3, 1, 2, 3],
        t.fixed,
        t.tex,
        t.shader,
        t.uniform
      ),
      he();
  }
  o(Ue, "drawUVQuad");
  function ze(t) {
    if (!t.tex) throw new Error('drawTexture() requires property "tex".');
    let r = t.quad ?? new me(0, 0, 1, 1),
      s = t.tex.width * r.w,
      a = t.tex.height * r.h,
      h = new b(1);
    if (t.tiled) {
      let u = Math.ceil((t.width || s) / s),
        g = Math.ceil((t.height || a) / a),
        y = ht(t.anchor || qr)
          .add(new b(1, 1))
          .scale(0.5)
          .scale(u * s, g * a);
      for (let m = 0; m < u; m++)
        for (let d = 0; d < g; d++)
          Ue(
            Object.assign({}, t, {
              pos: (t.pos || new b(0)).add(new b(s * m, a * d)).sub(y),
              scale: h.scale(t.scale || new b(1)),
              tex: t.tex,
              quad: r,
              width: s,
              height: a,
              anchor: "topleft",
            })
          );
    } else
      t.width && t.height
        ? ((h.x = t.width / s), (h.y = t.height / a))
        : t.width
        ? ((h.x = t.width / s), (h.y = h.x))
        : t.height && ((h.y = t.height / a), (h.x = h.y)),
        Ue(
          Object.assign({}, t, {
            scale: h.scale(t.scale || new b(1)),
            tex: t.tex,
            quad: r,
            width: s,
            height: a,
          })
        );
  }
  o(ze, "drawTexture");
  function Br(t) {
    if (!t.sprite) throw new Error('drawSprite() requires property "sprite"');
    let r = et(t.sprite);
    if (!r || !r.data) return;
    let s = r.data.frames[t.frame ?? 0];
    if (!s) throw new Error(`Frame not found: ${t.frame ?? 0}`);
    ze(
      Object.assign({}, t, {
        tex: r.data.tex,
        quad: s.scale(t.quad ?? new me(0, 0, 1, 1)),
      })
    );
  }
  o(Br, "drawSprite");
  function qe(t, r, s, a, h, u = 1) {
    (a = Ge(a % 360)), (h = Ge(h % 360)), h <= a && (h += Math.PI * 2);
    let g = [],
      y = Math.ceil(((h - a) / Ge(8)) * u),
      m = (h - a) / y;
    for (let d = a; d < h; d += m)
      g.push(t.add(r * Math.cos(d), s * Math.sin(d)));
    return g.push(t.add(r * Math.cos(h), s * Math.sin(h))), g;
  }
  o(qe, "getArcPts");
  function Ve(t) {
    if (t.width === void 0 || t.height === void 0)
      throw new Error('drawRect() requires property "width" and "height".');
    if (t.width <= 0 || t.height <= 0) return;
    let r = t.width,
      s = t.height,
      a = ht(t.anchor || qr)
        .add(1, 1)
        .scale(new b(r, s).scale(-0.5)),
      h = [new b(0, 0), new b(r, 0), new b(r, s), new b(0, s)];
    if (t.radius) {
      let u = Math.min(Math.min(r, s) / 2, t.radius);
      h = [
        new b(u, 0),
        new b(r - u, 0),
        ...qe(new b(r - u, u), u, u, 270, 360),
        new b(r, u),
        new b(r, s - u),
        ...qe(new b(r - u, s - u), u, u, 0, 90),
        new b(r - u, s),
        new b(u, s),
        ...qe(new b(u, s - u), u, u, 90, 180),
        new b(0, s - u),
        new b(0, u),
        ...qe(new b(u, u), u, u, 180, 270),
      ];
    }
    ce(
      Object.assign({}, t, {
        offset: a,
        pts: h,
        ...(t.gradient
          ? {
              colors: t.horizontal
                ? [t.gradient[0], t.gradient[1], t.gradient[1], t.gradient[0]]
                : [t.gradient[0], t.gradient[0], t.gradient[1], t.gradient[1]],
            }
          : {}),
      })
    );
  }
  o(Ve, "drawRect");
  function c(t) {
    let { p1: r, p2: s } = t;
    if (!r || !s)
      throw new Error('drawLine() requires properties "p1" and "p2".');
    let a = t.width || 1,
      h = s
        .sub(r)
        .unit()
        .normal()
        .scale(a * 0.5),
      u = [r.sub(h), r.add(h), s.add(h), s.sub(h)].map((g) => ({
        pos: new b(g.x, g.y),
        uv: new b(0),
        color: t.color ?? te.WHITE,
        opacity: t.opacity ?? 1,
      }));
    rt(u, [0, 1, 3, 1, 2, 3], t.fixed, x.defTex, t.shader, t.uniform);
  }
  o(c, "drawLine");
  function v(t) {
    let r = t.pts;
    if (!r) throw new Error('drawLines() requires property "pts".');
    if (!(r.length < 2))
      if (t.radius && r.length >= 3) {
        let s = r[0].sdist(r[1]);
        for (let a = 1; a < r.length - 1; a++)
          s = Math.min(r[a].sdist(r[a + 1]), s);
        Math.min(t.radius, Math.sqrt(s) / 2),
          c(Object.assign({}, t, { p1: r[0], p2: r[1] }));
        for (let a = 1; a < r.length - 2; a++) {
          let h = r[a],
            u = r[a + 1];
          c(Object.assign({}, t, { p1: h, p2: u }));
        }
        c(Object.assign({}, t, { p1: r[r.length - 2], p2: r[r.length - 1] }));
      } else
        for (let s = 0; s < r.length - 1; s++)
          c(Object.assign({}, t, { p1: r[s], p2: r[s + 1] })),
            t.join !== "none" &&
              H(Object.assign({}, t, { pos: r[s], radius: t.width / 2 }));
  }
  o(v, "drawLines");
  function T(t) {
    if (!t.p1 || !t.p2 || !t.p3)
      throw new Error(
        'drawTriangle() requires properties "p1", "p2" and "p3".'
      );
    return ce(Object.assign({}, t, { pts: [t.p1, t.p2, t.p3] }));
  }
  o(T, "drawTriangle");
  function H(t) {
    if (typeof t.radius != "number")
      throw new Error('drawCircle() requires property "radius".');
    t.radius !== 0 &&
      J(
        Object.assign({}, t, { radiusX: t.radius, radiusY: t.radius, angle: 0 })
      );
  }
  o(H, "drawCircle");
  function J(t) {
    if (t.radiusX === void 0 || t.radiusY === void 0)
      throw new Error(
        'drawEllipse() requires properties "radiusX" and "radiusY".'
      );
    if (t.radiusX === 0 || t.radiusY === 0) return;
    let r = t.start ?? 0,
      s = t.end ?? 360,
      a = ht(t.anchor ?? "center").scale(new b(-t.radiusX, -t.radiusY)),
      h = qe(a, t.radiusX, t.radiusY, r, s, t.resolution);
    h.unshift(a);
    let u = Object.assign({}, t, {
      pts: h,
      radius: 0,
      ...(t.gradient
        ? {
            colors: [t.gradient[0], ...Array(h.length - 1).fill(t.gradient[1])],
          }
        : {}),
    });
    if (s - r >= 360 && t.outline) {
      t.fill !== !1 && ce(Object.assign(u, { outline: null })),
        ce(Object.assign(u, { pts: h.slice(1), fill: !1 }));
      return;
    }
    ce(u);
  }
  o(J, "drawEllipse");
  function ce(t) {
    if (!t.pts) throw new Error('drawPolygon() requires property "pts".');
    let r = t.pts.length;
    if (!(r < 3)) {
      if (
        (ue(), $(t.pos), Ne(t.scale), se(t.angle), $(t.offset), t.fill !== !1)
      ) {
        let s = t.color ?? te.WHITE,
          a = t.pts.map((u, g) => ({
            pos: new b(u.x, u.y),
            uv: new b(0, 0),
            color: t.colors && t.colors[g] ? t.colors[g].mult(s) : s,
            opacity: t.opacity ?? 1,
          })),
          h = [...Array(r - 2).keys()].map((u) => [0, u + 1, u + 2]).flat();
        rt(a, t.indices ?? h, t.fixed, x.defTex, t.shader, t.uniform);
      }
      t.outline &&
        v({
          pts: [...t.pts, t.pts[0]],
          radius: t.radius,
          width: t.outline.width,
          color: t.outline.color,
          join: t.outline.join,
          uniform: t.uniform,
          fixed: t.fixed,
          opacity: t.opacity,
        }),
        he();
    }
  }
  o(ce, "drawPolygon");
  function Se(t, r, s) {
    Fe(),
      S.clear(S.STENCIL_BUFFER_BIT),
      S.enable(S.STENCIL_TEST),
      S.stencilFunc(S.NEVER, 1, 255),
      S.stencilOp(S.REPLACE, S.REPLACE, S.REPLACE),
      r(),
      Fe(),
      S.stencilFunc(s, 1, 255),
      S.stencilOp(S.KEEP, S.KEEP, S.KEEP),
      t(),
      Fe(),
      S.disable(S.STENCIL_TEST);
  }
  o(Se, "drawStenciled");
  function Wt(t, r) {
    Se(t, r, S.EQUAL);
  }
  o(Wt, "drawMasked");
  function Zt(t, r) {
    Se(t, r, S.NOTEQUAL);
  }
  o(Zt, "drawSubtracted");
  function ke() {
    return (x.viewport.width + x.viewport.height) / (x.width + x.height);
  }
  o(ke, "getViewportScale");
  function Re(t) {
    Fe();
    let r = x.width,
      s = x.height;
    (x.width = x.viewport.width),
      (x.height = x.viewport.height),
      t(),
      Fe(),
      (x.width = r),
      (x.height = s);
  }
  o(Re, "drawUnscaled");
  function Zr(t, r) {
    r.pos && (t.pos = t.pos.add(r.pos)),
      r.scale && (t.scale = t.scale.scale(B(r.scale))),
      r.angle && (t.angle += r.angle),
      r.color && t.ch.length === 1 && (t.color = t.color.mult(r.color)),
      r.opacity && (t.opacity *= r.opacity);
  }
  o(Zr, "applyCharTransform");
  let Ii = /\[(?<style>\w+)\](?<text>.*?)\[\/\k<style>\]/g;
  function ki(t) {
    let r = {},
      s = t.replace(Ii, "$2"),
      a = 0;
    for (let h of t.matchAll(Ii)) {
      let u = h.index - a;
      for (let g = 0; g < h.groups.text.length; g++)
        r[g + u] = [h.groups.style];
      a += h[0].length - h.groups.text.length;
    }
    return { charStyleMap: r, text: s };
  }
  o(ki, "compileStyledText");
  let _r = {};
  function Je(t) {
    var de, fe;
    if (t.text === void 0)
      throw new Error('formatText() requires property "text".');
    let r = Vt(t.font);
    if (t.text === "" || r instanceof Ie || !r)
      return { width: 0, height: 0, chars: [], opt: t };
    let { charStyleMap: s, text: a } = ki(t.text + ""),
      h = vn(a);
    if (r instanceof ye || typeof r == "string") {
      let oe = r instanceof ye ? r.fontface.family : r,
        ie =
          r instanceof ye
            ? { outline: r.outline, filter: r.filter }
            : { outline: null, filter: yi },
        A = _r[oe] ?? {
          font: {
            tex: new lt(z, $s, en, { filter: ie.filter }),
            map: {},
            size: Yr,
          },
          cursor: new b(0),
          outline: ie.outline,
        };
      _r[oe] || (_r[oe] = A), (r = A.font);
      for (let k of h)
        if (!A.font.map[k]) {
          let F = U;
          F.clearRect(0, 0, C.width, C.height),
            (F.font = `${r.size}px ${oe}`),
            (F.textBaseline = "top"),
            (F.textAlign = "left"),
            (F.fillStyle = "#ffffff");
          let N = F.measureText(k),
            Q = Math.ceil(N.width),
            K = r.size;
          A.outline &&
            ((F.lineJoin = "round"),
            (F.lineWidth = A.outline.width * 2),
            (F.strokeStyle = A.outline.color.toHex()),
            F.strokeText(k, A.outline.width, A.outline.width),
            (Q += A.outline.width * 2),
            (K += A.outline.width * 3)),
            F.fillText(
              k,
              ((de = A.outline) == null ? void 0 : de.width) ?? 0,
              ((fe = A.outline) == null ? void 0 : fe.width) ?? 0
            );
          let ee = F.getImageData(0, 0, Q, K);
          if (
            A.cursor.x + Q > $s &&
            ((A.cursor.x = 0), (A.cursor.y += K), A.cursor.y > en)
          )
            throw new Error("Font atlas exceeds character limit");
          r.tex.update(ee, A.cursor.x, A.cursor.y),
            (r.map[k] = new me(A.cursor.x, A.cursor.y, Q, K)),
            (A.cursor.x += Q);
        }
    }
    let u = t.size || r.size,
      g = B(t.scale ?? 1).scale(u / r.size),
      y = t.lineSpacing ?? 0,
      m = t.letterSpacing ?? 0,
      d = 0,
      w = 0,
      P = 0,
      D = [],
      O = [],
      q = 0,
      I = null,
      L = null;
    for (; q < h.length; ) {
      let oe = h[q];
      if (
        oe ===
        `
`
      )
        (P += u + y),
          D.push({ width: d - m, chars: O }),
          (I = null),
          (L = null),
          (d = 0),
          (O = []);
      else {
        let ie = r.map[oe];
        if (ie) {
          let A = ie.w * g.x;
          t.width &&
            d + A > t.width &&
            ((P += u + y),
            I != null &&
              ((q -= O.length - I),
              (oe = h[q]),
              (ie = r.map[oe]),
              (A = ie.w * g.x),
              (O = O.slice(0, I - 1)),
              (d = L)),
            (I = null),
            (L = null),
            D.push({ width: d - m, chars: O }),
            (d = 0),
            (O = [])),
            O.push({
              tex: r.tex,
              width: ie.w,
              height: ie.h,
              quad: new me(
                ie.x / r.tex.width,
                ie.y / r.tex.height,
                ie.w / r.tex.width,
                ie.h / r.tex.height
              ),
              ch: oe,
              pos: new b(d, P),
              opacity: t.opacity ?? 1,
              color: t.color ?? te.WHITE,
              scale: B(g),
              angle: 0,
            }),
            oe === " " && ((I = O.length), (L = d)),
            (d += A),
            (w = Math.max(w, d)),
            (d += m);
        }
      }
      q++;
    }
    D.push({ width: d - m, chars: O }), (P += u), t.width && (w = t.width);
    let Me = [];
    for (let oe of D) {
      let ie = (w - oe.width) * Cn(t.align ?? "left");
      for (let A of oe.chars) {
        let k = r.map[A.ch],
          F = Me.length;
        if (
          ((A.pos = A.pos.add(ie, 0).add(k.w * g.x * 0.5, k.h * g.y * 0.5)),
          t.transform)
        ) {
          let N =
            typeof t.transform == "function"
              ? t.transform(F, A.ch)
              : t.transform;
          N && Zr(A, N);
        }
        if (s[F]) {
          let N = s[F];
          for (let Q of N) {
            let K = t.styles[Q],
              ee = typeof K == "function" ? K(F, A.ch) : K;
            ee && Zr(A, ee);
          }
        }
        Me.push(A);
      }
    }
    return { width: w, height: P, chars: Me, opt: t };
  }
  o(Je, "formatText");
  function $r(t) {
    Xe(Je(t));
  }
  o($r, "drawText");
  function Xe(t) {
    ue(),
      $(t.opt.pos),
      se(t.opt.angle),
      $(
        ht(t.opt.anchor ?? "topleft")
          .add(1, 1)
          .scale(t.width, t.height)
          .scale(-0.5)
      ),
      t.chars.forEach((r) => {
        Ue({
          tex: r.tex,
          width: r.width,
          height: r.height,
          pos: r.pos,
          scale: r.scale,
          angle: r.angle,
          color: r.color,
          opacity: r.opacity,
          quad: r.quad,
          anchor: "center",
          uniform: t.opt.uniform,
          shader: t.opt.shader,
          fixed: t.opt.fixed,
        });
      }),
      he();
  }
  o(Xe, "drawFormattedText");
  function ve() {
    return x.width;
  }
  o(ve, "width");
  function xe() {
    return x.height;
  }
  o(xe, "height");
  function Di(t) {
    return new b(
      ((t.x - x.viewport.x) * ve()) / x.viewport.width,
      ((t.y - x.viewport.y) * xe()) / x.viewport.height
    );
  }
  o(Di, "windowToContent");
  function Ci(t) {
    return new b(
      (t.x * x.viewport.width) / x.width,
      (t.y * x.viewport.height) / x.height
    );
  }
  o(Ci, "contentToView");
  function _t() {
    return Di(V.mousePos());
  }
  o(_t, "mousePos");
  let Ni = !1,
    ne = {
      inspect: !1,
      timeScale: 1,
      showLog: !0,
      fps: () => V.fps(),
      numFrames: () => V.numFrames(),
      stepFrame: ui,
      drawCalls: () => x.lastDrawCalls,
      clearLog: () => (R.logs = []),
      log: (t) => {
        let r = i.logMax ?? bo;
        R.logs.unshift({ msg: t, time: V.time() }),
          R.logs.length > r && (R.logs = R.logs.slice(0, r));
      },
      error: (t) => ne.log(new Error(t.toString ? t.toString() : t)),
      curRecording: null,
      numObjects: () => ai("*", { recursive: !0 }).length,
      get paused() {
        return Ni;
      },
      set paused(t) {
        (Ni = t), t ? re.ctx.suspend() : re.ctx.resume();
      },
    };
  function De() {
    return V.dt() * ne.timeScale;
  }
  o(De, "dt");
  function Ui(...t) {
    return (
      t.length > 0 && (R.cam.pos = B(...t)),
      R.cam.pos ? R.cam.pos.clone() : ir()
    );
  }
  o(Ui, "camPos");
  function Li(...t) {
    return t.length > 0 && (R.cam.scale = B(...t)), R.cam.scale.clone();
  }
  o(Li, "camScale");
  function Gi(t) {
    return t !== void 0 && (R.cam.angle = t), R.cam.angle;
  }
  o(Gi, "camRot");
  function Oi(t = 12) {
    R.cam.shake += t;
  }
  o(Oi, "shake");
  function ei(t) {
    return R.cam.transform.multVec2(t);
  }
  o(ei, "toScreen");
  function ti(t) {
    return R.cam.transform.invert().multVec2(t);
  }
  o(ti, "toWorld");
  function $t(t) {
    let r = new Le();
    return (
      t.pos && r.translate(t.pos),
      t.scale && r.scale(t.scale),
      t.angle && r.rotate(t.angle),
      t.parent ? r.mult(t.parent.transform) : r
    );
  }
  o($t, "calcTransform");
  function Pr(t = []) {
    let r = new Map(),
      s = {},
      a = new ar(),
      h = [],
      u = null,
      g = !1,
      y = {
        id: no(),
        hidden: !1,
        transform: new Le(),
        children: [],
        parent: null,
        set paused(d) {
          if (d !== g) {
            g = d;
            for (let w of h) w.paused = d;
          }
        },
        get paused() {
          return g;
        },
        add(d = []) {
          let w = Array.isArray(d) ? Pr(d) : d;
          if (w.parent)
            throw new Error("Cannot add a game obj that already has a parent.");
          return (
            (w.parent = this),
            (w.transform = $t(w)),
            this.children.push(w),
            w.trigger("add", w),
            R.events.trigger("add", w),
            w
          );
        },
        readd(d) {
          let w = this.children.indexOf(d);
          return (
            w !== -1 && (this.children.splice(w, 1), this.children.push(d)), d
          );
        },
        remove(d) {
          let w = this.children.indexOf(d);
          if (w !== -1) {
            (d.parent = null), this.children.splice(w, 1);
            let P = o((D) => {
              D.trigger("destroy"),
                R.events.trigger("destroy", D),
                D.children.forEach((O) => P(O));
            }, "trigger");
            P(d);
          }
        },
        removeAll(d) {
          if (d) this.get(d).forEach((w) => this.remove(w));
          else for (let w of [...this.children]) this.remove(w);
        },
        update() {
          this.paused ||
            (this.children
              .sort((d, w) => (d.z ?? 0) - (w.z ?? 0))
              .forEach((d) => d.update()),
            this.trigger("update"));
        },
        draw() {
          if (this.hidden) return;
          this.canvas && this.canvas.bind();
          let d = x.fixed;
          this.fixed && (x.fixed = !0),
            ue(),
            $(this.pos),
            Ne(this.scale),
            se(this.angle);
          let w = this.children.sort((P, D) => (P.z ?? 0) - (D.z ?? 0));
          if (this.mask) {
            let P = { intersect: Wt, subtract: Zt }[this.mask];
            if (!P) throw new Error(`Invalid mask func: "${this.mask}"`);
            P(
              () => {
                w.forEach((D) => D.draw());
              },
              () => {
                this.trigger("draw");
              }
            );
          } else this.trigger("draw"), w.forEach((P) => P.draw());
          he(), (x.fixed = d), this.canvas && this.canvas.unbind();
        },
        drawInspect() {
          this.hidden ||
            (ue(),
            $(this.pos),
            Ne(this.scale),
            se(this.angle),
            this.children
              .sort((d, w) => (d.z ?? 0) - (w.z ?? 0))
              .forEach((d) => d.drawInspect()),
            this.trigger("drawInspect"),
            he());
        },
        use(d) {
          if (!d) return;
          if (typeof d == "string") return this.use({ id: d });
          let w = [];
          d.id &&
            (this.unuse(d.id), (s[d.id] = []), (w = s[d.id]), r.set(d.id, d));
          for (let D in d) {
            if (Fo.has(D)) continue;
            let O = Object.getOwnPropertyDescriptor(d, D);
            if (
              (typeof O.value == "function" && (d[D] = d[D].bind(this)),
              O.set && Object.defineProperty(d, D, { set: O.set.bind(this) }),
              O.get && Object.defineProperty(d, D, { get: O.get.bind(this) }),
              Io.has(D))
            ) {
              let q =
                D === "add"
                  ? () => {
                      (u = o((I) => w.push(I), "onCurCompCleanup")),
                        d[D](),
                        (u = null);
                    }
                  : d[D];
              w.push(this.on(D, q).cancel);
            } else if (this[D] === void 0)
              Object.defineProperty(this, D, {
                get: () => d[D],
                set: (q) => (d[D] = q),
                configurable: !0,
                enumerable: !0,
              }),
                w.push(() => delete this[D]);
            else throw new Error(`Duplicate component property: "${D}"`);
          }
          let P = o(() => {
            if (d.require) {
              for (let D of d.require)
                if (!this.c(D))
                  throw new Error(
                    `Component "${d.id}" requires component "${D}"`
                  );
            }
          }, "checkDeps");
          d.destroy && w.push(d.destroy.bind(this)),
            this.exists()
              ? (P(),
                d.add &&
                  ((u = o((D) => w.push(D), "onCurCompCleanup")),
                  d.add.call(this),
                  (u = null)))
              : d.require && w.push(this.on("add", P).cancel);
        },
        unuse(d) {
          s[d] && (s[d].forEach((w) => w()), delete s[d]),
            r.has(d) && r.delete(d);
        },
        c(d) {
          return r.get(d);
        },
        get(d, w = {}) {
          let P = w.recursive
            ? this.children.flatMap(
                o(function D(O) {
                  return [O, ...O.children.flatMap(D)];
                }, "recurse")
              )
            : this.children;
          if (((P = P.filter((D) => (d ? D.is(d) : !0))), w.liveUpdate)) {
            let D = o(
                (q) => (w.recursive ? this.isAncestorOf(q) : q.parent === this),
                "isChild"
              ),
              O = [];
            O.push(
              ri((q) => {
                D(q) && q.is(d) && P.push(q);
              })
            ),
              O.push(
                qi((q) => {
                  if (D(q) && q.is(d)) {
                    let I = P.findIndex((L) => L.id === q.id);
                    I !== -1 && P.splice(I, 1);
                  }
                })
              ),
              this.onDestroy(() => {
                for (let q of O) q.cancel();
              });
          }
          return P;
        },
        isAncestorOf(d) {
          return d.parent
            ? d.parent === this || this.isAncestorOf(d.parent)
            : !1;
        },
        exists() {
          return R.root.isAncestorOf(this);
        },
        is(d) {
          if (d === "*") return !0;
          if (Array.isArray(d)) {
            for (let w of d) if (!this.c(w)) return !1;
            return !0;
          } else return this.c(d) != null;
        },
        on(d, w) {
          let P = a.on(d, w.bind(this));
          return u && u(() => P.cancel()), P;
        },
        trigger(d, ...w) {
          a.trigger(d, ...w), R.objEvents.trigger(d, this, ...w);
        },
        destroy() {
          this.parent && this.parent.remove(this);
        },
        inspect() {
          let d = {};
          for (let [w, P] of r) d[w] = P.inspect ? P.inspect() : null;
          return d;
        },
        onAdd(d) {
          return this.on("add", d);
        },
        onUpdate(d) {
          return this.on("update", d);
        },
        onDraw(d) {
          return this.on("draw", d);
        },
        onDestroy(d) {
          return this.on("destroy", d);
        },
        clearEvents() {
          a.clear();
        },
      },
      m = [
        "onKeyPress",
        "onKeyPressRepeat",
        "onKeyDown",
        "onKeyRelease",
        "onMousePress",
        "onMouseDown",
        "onMouseRelease",
        "onMouseMove",
        "onCharInput",
        "onMouseMove",
        "onTouchStart",
        "onTouchMove",
        "onTouchEnd",
        "onScroll",
        "onGamepadButtonPress",
        "onGamepadButtonDown",
        "onGamepadButtonRelease",
        "onGamepadStick",
      ];
    for (let d of m)
      y[d] = (...w) => {
        let P = V[d](...w);
        return h.push(P), y.onDestroy(() => P.cancel()), P;
      };
    for (let d of t) y.use(d);
    return y;
  }
  o(Pr, "make");
  function He(t, r, s) {
    return (
      R.objEvents[t] || (R.objEvents[t] = new wn()),
      R.objEvents.on(t, (a, ...h) => {
        a.is(r) && s(a, ...h);
      })
    );
  }
  o(He, "on");
  let Un = Be(
      (t) => {
        let r = sr([{ update: t }]);
        return {
          get paused() {
            return r.paused;
          },
          set paused(s) {
            r.paused = s;
          },
          cancel: () => r.destroy(),
        };
      },
      (t, r) => He("update", t, r)
    ),
    Ln = Be(
      (t) => {
        let r = sr([{ draw: t }]);
        return {
          get paused() {
            return r.hidden;
          },
          set paused(s) {
            r.hidden = s;
          },
          cancel: () => r.destroy(),
        };
      },
      (t, r) => He("draw", t, r)
    ),
    ri = Be(
      (t) => R.events.on("add", t),
      (t, r) => He("add", t, r)
    ),
    qi = Be(
      (t) => R.events.on("destroy", t),
      (t, r) => He("destroy", t, r)
    );
  function Hi(t, r, s) {
    return He("collide", t, (a, h, u) => h.is(r) && s(a, h, u));
  }
  o(Hi, "onCollide");
  function Yi(t, r, s) {
    return He("collideUpdate", t, (a, h, u) => h.is(r) && s(a, h, u));
  }
  o(Yi, "onCollideUpdate");
  function Ki(t, r, s) {
    return He("collideEnd", t, (a, h, u) => h.is(r) && s(a, h, u));
  }
  o(Ki, "onCollideEnd");
  function er(t, r) {
    ai(t, { recursive: !0 }).forEach(r), ri(t, r);
  }
  o(er, "forAllCurrentAndFuture");
  let Gn = Be(
    (t) => V.onMousePress(t),
    (t, r) => {
      let s = [];
      return (
        er(t, (a) => {
          if (!a.area)
            throw new Error(
              "onClick() requires the object to have area() component"
            );
          s.push(a.onClick(() => r(a)));
        }),
        Bt.join(s)
      );
    }
  );
  function ji(t, r) {
    let s = [];
    return (
      er(t, (a) => {
        if (!a.area)
          throw new Error(
            "onHover() requires the object to have area() component"
          );
        s.push(a.onHover(() => r(a)));
      }),
      Bt.join(s)
    );
  }
  o(ji, "onHover");
  function Qi(t, r) {
    let s = [];
    return (
      er(t, (a) => {
        if (!a.area)
          throw new Error(
            "onHoverUpdate() requires the object to have area() component"
          );
        s.push(a.onHoverUpdate(() => r(a)));
      }),
      Bt.join(s)
    );
  }
  o(Qi, "onHoverUpdate");
  function zi(t, r) {
    let s = [];
    return (
      er(t, (a) => {
        if (!a.area)
          throw new Error(
            "onHoverEnd() requires the object to have area() component"
          );
        s.push(a.onHoverEnd(() => r(a)));
      }),
      Bt.join(s)
    );
  }
  o(zi, "onHoverEnd");
  function Ji(t) {
    R.gravity = t;
  }
  o(Ji, "setGravity");
  function Xi() {
    return R.gravity;
  }
  o(Xi, "getGravity");
  function Wi(...t) {
    t.length === 1 || t.length === 2
      ? ((x.bgColor = _(t[0])), t[1] && (x.bgAlpha = t[1]))
      : (t.length === 3 || t.length === 4) &&
        ((x.bgColor = _(t[0], t[1], t[2])), t[3] && (x.bgAlpha = t[3])),
      S.clearColor(
        x.bgColor.r / 255,
        x.bgColor.g / 255,
        x.bgColor.b / 255,
        x.bgAlpha
      );
  }
  o(Wi, "setBackground");
  function Zi() {
    return x.bgColor.clone();
  }
  o(Zi, "getBackground");
  function tr(...t) {
    return {
      id: "pos",
      pos: B(...t),
      moveBy(...r) {
        this.pos = this.pos.add(B(...r));
      },
      move(...r) {
        this.moveBy(B(...r).scale(De()));
      },
      moveTo(...r) {
        if (typeof r[0] == "number" && typeof r[1] == "number")
          return this.moveTo(B(r[0], r[1]), r[2]);
        let s = r[0],
          a = r[1];
        if (a === void 0) {
          this.pos = B(s);
          return;
        }
        let h = s.sub(this.pos);
        if (h.len() <= a * De()) {
          this.pos = B(s);
          return;
        }
        this.move(h.unit().scale(a));
      },
      worldPos() {
        return this.parent
          ? this.parent.transform.multVec2(this.pos)
          : this.pos;
      },
      screenPos() {
        let r = this.worldPos();
        return Rt(this) ? r : ei(r);
      },
      inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      },
      drawInspect() {
        H({ color: _(255, 0, 0), radius: 4 / ke() });
      },
    };
  }
  o(tr, "pos");
  function rr(...t) {
    return t.length === 0
      ? rr(1)
      : {
          id: "scale",
          scale: B(...t),
          scaleTo(...r) {
            this.scale = B(...r);
          },
          scaleBy(...r) {
            this.scale.scale(B(...r));
          },
          inspect() {
            return `(${St(this.scale.x, 2)}, ${St(this.scale.y, 2)})`;
          },
        };
  }
  o(rr, "scale");
  function _i(t) {
    return {
      id: "rotate",
      angle: t ?? 0,
      rotateBy(r) {
        this.angle += r;
      },
      rotateTo(r) {
        this.angle = r;
      },
      inspect() {
        return `${Math.round(this.angle)}`;
      },
    };
  }
  o(_i, "rotate");
  function $i(...t) {
    return {
      id: "color",
      color: _(...t),
      inspect() {
        return this.color.toString();
      },
    };
  }
  o($i, "color");
  function St(t, r) {
    return Number(t.toFixed(r));
  }
  o(St, "toFixed");
  function es(t) {
    return {
      id: "opacity",
      opacity: t ?? 1,
      inspect() {
        return `${St(this.opacity, 1)}`;
      },
      fadeOut(r = 1, s = Or.linear) {
        return hi(this.opacity, 0, r, (a) => (this.opacity = a), s);
      },
    };
  }
  o(es, "opacity");
  function Fr(t) {
    if (!t) throw new Error("Please define an anchor");
    return {
      id: "anchor",
      anchor: t,
      inspect() {
        return typeof this.anchor == "string"
          ? this.anchor
          : this.anchor.toString();
      },
    };
  }
  o(Fr, "anchor");
  function ts(t) {
    return {
      id: "z",
      z: t,
      inspect() {
        return `${this.z}`;
      },
    };
  }
  o(ts, "z");
  function rs(t, r) {
    return {
      id: "follow",
      require: ["pos"],
      follow: { obj: t, offset: r ?? B(0) },
      add() {
        t.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      },
      update() {
        t.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      },
    };
  }
  o(rs, "follow");
  function is(t, r) {
    let s = typeof t == "number" ? b.fromAngle(t) : t.unit();
    return {
      id: "move",
      require: ["pos"],
      update() {
        this.move(s.scale(r));
      },
    };
  }
  o(is, "move");
  let On = 200;
  function ss(t = {}) {
    let r = t.distance ?? On,
      s = !1;
    return {
      id: "offscreen",
      require: ["pos"],
      isOffScreen() {
        let a = this.screenPos(),
          h = new Ee(B(0), ve(), xe());
        return !dr(h, a) && h.sdistToPoint(a) > r * r;
      },
      onExitScreen(a) {
        return this.on("exitView", a);
      },
      onEnterScreen(a) {
        return this.on("enterView", a);
      },
      update() {
        this.isOffScreen()
          ? (s || (this.trigger("exitView"), (s = !0)),
            t.hide && (this.hidden = !0),
            t.pause && (this.paused = !0),
            t.destroy && this.destroy())
          : (s && (this.trigger("enterView"), (s = !1)),
            t.hide && (this.hidden = !1),
            t.pause && (this.paused = !1));
      },
    };
  }
  o(ss, "offscreen");
  function Rt(t) {
    return t.fixed ? !0 : t.parent ? Rt(t.parent) : !1;
  }
  o(Rt, "isFixed");
  function ns(t = {}) {
    let r = {},
      s = new Set();
    return {
      id: "area",
      collisionIgnore: t.collisionIgnore ?? [],
      add() {
        this.area.cursor && this.onHover(() => V.setCursor(this.area.cursor)),
          this.onCollideUpdate((a, h) => {
            r[a.id] || this.trigger("collide", a, h),
              (r[a.id] = h),
              s.add(a.id);
          });
      },
      update() {
        for (let a in r)
          s.has(Number(a)) ||
            (this.trigger("collideEnd", r[a].target), delete r[a]);
        s.clear();
      },
      drawInspect() {
        let a = this.localArea();
        ue(), Ne(this.area.scale), $(this.area.offset);
        let h = {
          outline: { width: 4 / ke(), color: _(0, 0, 255) },
          anchor: this.anchor,
          fill: !1,
          fixed: Rt(this),
        };
        a instanceof Ee
          ? Ve({ ...h, pos: a.pos, width: a.width, height: a.height })
          : a instanceof or
          ? ce({ ...h, pts: a.pts })
          : a instanceof js && H({ ...h, pos: a.center, radius: a.radius }),
          he();
      },
      area: {
        shape: t.shape ?? null,
        scale: t.scale ? B(t.scale) : B(1),
        offset: t.offset ?? B(0),
        cursor: t.cursor ?? null,
      },
      isClicked() {
        return V.isMousePressed() && this.isHovering();
      },
      isHovering() {
        let a = Rt(this) ? _t() : ti(_t());
        return this.hasPoint(a);
      },
      checkCollision(a) {
        return r[a.id] ?? null;
      },
      getCollisions() {
        return Object.values(r);
      },
      isColliding(a) {
        return !!r[a.id];
      },
      isOverlapping(a) {
        let h = r[a.id];
        return h && h.hasOverlap();
      },
      onClick(a) {
        let h = V.onMousePress("left", () => {
          this.isHovering() && a();
        });
        return this.onDestroy(() => h.cancel()), h;
      },
      onHover(a) {
        let h = !1;
        return this.onUpdate(() => {
          h ? (h = this.isHovering()) : this.isHovering() && ((h = !0), a());
        });
      },
      onHoverUpdate(a) {
        return this.onUpdate(() => {
          this.isHovering() && a();
        });
      },
      onHoverEnd(a) {
        let h = !1;
        return this.onUpdate(() => {
          h ? this.isHovering() || ((h = !1), a()) : (h = this.isHovering());
        });
      },
      onCollide(a, h) {
        if (typeof a == "function" && h === void 0)
          return this.on("collide", a);
        if (typeof a == "string")
          return this.onCollide((u, g) => {
            u.is(a) && h(u, g);
          });
      },
      onCollideUpdate(a, h) {
        if (typeof a == "function" && h === void 0)
          return this.on("collideUpdate", a);
        if (typeof a == "string")
          return this.on("collideUpdate", (u, g) => u.is(a) && h(u, g));
      },
      onCollideEnd(a, h) {
        if (typeof a == "function" && h === void 0)
          return this.on("collideEnd", a);
        if (typeof a == "string")
          return this.on("collideEnd", (u) => u.is(a) && h(u));
      },
      hasPoint(a) {
        return Pi(this.worldArea(), a);
      },
      resolveCollision(a) {
        let h = this.checkCollision(a);
        h &&
          !h.resolved &&
          ((this.pos = this.pos.add(h.displacement)), (h.resolved = !0));
      },
      localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      },
      worldArea() {
        let a = this.localArea();
        if (!(a instanceof or || a instanceof Ee))
          throw new Error("Only support polygon and rect shapes for now");
        let h = this.transform
          .clone()
          .scale(B(this.area.scale ?? 1))
          .translate(this.area.offset);
        if (a instanceof Ee) {
          let u = ht(this.anchor || qr)
            .add(1, 1)
            .scale(-0.5)
            .scale(a.width, a.height);
          h.translate(u);
        }
        return a.transform(h);
      },
      screenArea() {
        let a = this.worldArea();
        return Rt(this) ? a : a.transform(R.cam.transform);
      },
    };
  }
  o(ns, "area");
  function We(t) {
    return {
      color: t.color,
      opacity: t.opacity,
      anchor: t.anchor,
      outline: t.outline,
      shader: t.shader,
      uniform: t.uniform,
    };
  }
  o(We, "getRenderProps");
  function Ir(t, r = {}) {
    let s = null,
      a = null,
      h = null,
      u = new Ce();
    if (!t)
      throw new Error("Please pass the resource name or data to sprite()");
    let g = o((y, m, d, w) => {
      let P = B(1, 1);
      return (
        d && w
          ? ((P.x = d / (y.width * m.w)), (P.y = w / (y.height * m.h)))
          : d
          ? ((P.x = d / (y.width * m.w)), (P.y = P.x))
          : w && ((P.y = w / (y.height * m.h)), (P.x = P.y)),
        P
      );
    }, "calcTexScale");
    return {
      id: "sprite",
      width: 0,
      height: 0,
      frame: r.frame || 0,
      quad: r.quad || new me(0, 0, 1, 1),
      animSpeed: r.animSpeed ?? 1,
      flipX: r.flipX ?? !1,
      flipY: r.flipY ?? !1,
      draw() {
        if (!s) return;
        let y = s.frames[this.frame ?? 0];
        if (!y) throw new Error(`Frame not found: ${this.frame ?? 0}`);
        if (s.slice9) {
          let { left: m, right: d, top: w, bottom: P } = s.slice9,
            D = s.tex.width * y.w,
            O = s.tex.height * y.h,
            q = this.width - m - d,
            I = this.height - w - P,
            L = m / D,
            Me = d / D,
            de = 1 - L - Me,
            fe = w / O,
            oe = P / O,
            ie = 1 - fe - oe,
            A = [
              le(0, 0, L, fe),
              le(L, 0, de, fe),
              le(L + de, 0, Me, fe),
              le(0, fe, L, ie),
              le(L, fe, de, ie),
              le(L + de, fe, Me, ie),
              le(0, fe + ie, L, oe),
              le(L, fe + ie, de, oe),
              le(L + de, fe + ie, Me, oe),
              le(0, 0, m, w),
              le(m, 0, q, w),
              le(m + q, 0, d, w),
              le(0, w, m, I),
              le(m, w, q, I),
              le(m + q, w, d, I),
              le(0, w + I, m, P),
              le(m, w + I, q, P),
              le(m + q, w + I, d, P),
            ];
          for (let k = 0; k < 9; k++) {
            let F = A[k],
              N = A[k + 9];
            ze(
              Object.assign(We(this), {
                pos: N.pos(),
                tex: s.tex,
                quad: y.scale(F),
                flipX: this.flipX,
                flipY: this.flipY,
                tiled: r.tiled,
                width: N.w,
                height: N.h,
              })
            );
          }
        } else
          ze(
            Object.assign(We(this), {
              tex: s.tex,
              quad: y.scale(this.quad ?? new me(0, 0, 1, 1)),
              flipX: this.flipX,
              flipY: this.flipY,
              tiled: r.tiled,
              width: this.width,
              height: this.height,
            })
          );
      },
      add() {
        let y = o((d) => {
            let w = d.frames[0].clone();
            r.quad && (w = w.scale(r.quad));
            let P = g(d.tex, w, r.width, r.height);
            (this.width = d.tex.width * w.w * P.x),
              (this.height = d.tex.height * w.h * P.y),
              r.anim && this.play(r.anim),
              (s = d),
              u.trigger(s);
          }, "setSpriteData"),
          m = et(t);
        m ? m.onLoad(y) : Dr(() => y(et(t).data));
      },
      update() {
        if (!a) return;
        let y = s.anims[a.name];
        if (typeof y == "number") {
          this.frame = y;
          return;
        }
        if (y.speed === 0) throw new Error("Sprite anim speed cannot be 0");
        (a.timer += De() * this.animSpeed),
          a.timer >= 1 / a.speed &&
            ((a.timer = 0),
            (this.frame += h),
            (this.frame < Math.min(y.from, y.to) ||
              this.frame > Math.max(y.from, y.to)) &&
              (a.loop
                ? a.pingpong
                  ? ((this.frame -= h), (h *= -1), (this.frame += h))
                  : (this.frame = y.from)
                : ((this.frame = y.to), a.onEnd(), this.stop())));
      },
      play(y, m = {}) {
        if (!s) {
          u.add(() => this.play(y, m));
          return;
        }
        let d = s.anims[y];
        if (d === void 0) throw new Error(`Anim not found: ${y}`);
        a && this.stop(),
          (a =
            typeof d == "number"
              ? {
                  name: y,
                  timer: 0,
                  loop: !1,
                  pingpong: !1,
                  speed: 0,
                  onEnd: () => {},
                }
              : {
                  name: y,
                  timer: 0,
                  loop: m.loop ?? d.loop ?? !1,
                  pingpong: m.pingpong ?? d.pingpong ?? !1,
                  speed: m.speed ?? d.speed ?? 10,
                  onEnd: m.onEnd ?? (() => {}),
                }),
          (h = typeof d == "number" ? null : d.from < d.to ? 1 : -1),
          (this.frame = typeof d == "number" ? d : d.from),
          this.trigger("animStart", y);
      },
      stop() {
        if (!a) return;
        let y = a.name;
        (a = null), this.trigger("animEnd", y);
      },
      numFrames() {
        return (s == null ? void 0 : s.frames.length) ?? 0;
      },
      curAnim() {
        return a == null ? void 0 : a.name;
      },
      onAnimEnd(y) {
        return this.on("animEnd", y);
      },
      onAnimStart(y) {
        return this.on("animStart", y);
      },
      renderArea() {
        return new Ee(B(0), this.width, this.height);
      },
      inspect() {
        if (typeof t == "string") return `"${t}"`;
      },
    };
  }
  o(Ir, "sprite");
  function os(t, r = {}) {
    function s(h) {
      var g, y;
      let u = Je(
        Object.assign(We(h), {
          text: h.text + "",
          size: h.textSize,
          font: h.font,
          width: r.width && h.width,
          align: h.align,
          letterSpacing: h.letterSpacing,
          lineSpacing: h.lineSpacing,
          transform: h.textTransform,
          styles: h.textStyles,
        })
      );
      return (
        r.width ||
          (h.width = u.width / (((g = h.scale) == null ? void 0 : g.x) || 1)),
        (h.height = u.height / (((y = h.scale) == null ? void 0 : y.y) || 1)),
        u
      );
    }
    o(s, "update");
    let a = {
      id: "text",
      set text(h) {
        (t = h), s(this);
      },
      get text() {
        return t;
      },
      textSize: r.size ?? xo,
      font: r.font,
      width: r.width ?? 0,
      height: 0,
      align: r.align,
      lineSpacing: r.lineSpacing,
      letterSpacing: r.letterSpacing,
      textTransform: r.transform,
      textStyles: r.styles,
      add() {
        Dr(() => s(this));
      },
      draw() {
        Xe(s(this));
      },
      renderArea() {
        return new Ee(B(0), this.width, this.height);
      },
    };
    return s(a), a;
  }
  o(os, "text");
  function as(t, r = {}) {
    if (t.length < 3)
      throw new Error(
        `Polygon's need more than two points, ${t.length} points provided`
      );
    return {
      id: "polygon",
      pts: t,
      colors: r.colors,
      radius: r.radius,
      draw() {
        ce(
          Object.assign(We(this), {
            pts: this.pts,
            colors: this.colors,
            radius: this.radius,
            fill: r.fill,
          })
        );
      },
      renderArea() {
        return new or(this.pts);
      },
      inspect() {
        return this.pts.map((s) => `[${s.x},${s.y}]`).join(",");
      },
    };
  }
  o(as, "polygon");
  function hs(t, r, s = {}) {
    return {
      id: "rect",
      width: t,
      height: r,
      radius: s.radius || 0,
      draw() {
        Ve(
          Object.assign(We(this), {
            width: this.width,
            height: this.height,
            radius: this.radius,
            fill: s.fill,
          })
        );
      },
      renderArea() {
        return new Ee(B(0), this.width, this.height);
      },
      inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      },
    };
  }
  o(hs, "rect");
  function ls(t, r) {
    return {
      id: "rect",
      width: t,
      height: r,
      draw() {
        Ue(Object.assign(We(this), { width: this.width, height: this.height }));
      },
      renderArea() {
        return new Ee(B(0), this.width, this.height);
      },
      inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      },
    };
  }
  o(ls, "uvquad");
  function us(t, r = {}) {
    return {
      id: "circle",
      radius: t,
      draw() {
        H(Object.assign(We(this), { radius: this.radius, fill: r.fill }));
      },
      renderArea() {
        return new Ee(
          new b(this.anchor ? 0 : -this.radius),
          this.radius * 2,
          this.radius * 2
        );
      },
      inspect() {
        return `${Math.ceil(this.radius)}`;
      },
    };
  }
  o(us, "circle");
  function ds(t = 1, r = _(0, 0, 0)) {
    return { id: "outline", outline: { width: t, color: r } };
  }
  o(ds, "outline");
  function kr() {
    return {
      id: "timer",
      wait(t, r) {
        let s = [];
        r && s.push(r);
        let a = 0,
          h = this.onUpdate(() => {
            (a += De()), a >= t && (s.forEach((u) => u()), h.cancel());
          });
        return {
          get paused() {
            return h.paused;
          },
          set paused(u) {
            h.paused = u;
          },
          cancel: h.cancel,
          onEnd(u) {
            s.push(u);
          },
          then(u) {
            return this.onEnd(u), this;
          },
        };
      },
      loop(t, r) {
        let s = null,
          a = o(() => {
            (s = this.wait(t, a)), r();
          }, "newAction");
        return (
          (s = this.wait(0, a)),
          {
            get paused() {
              return s.paused;
            },
            set paused(h) {
              s.paused = h;
            },
            cancel: () => s.cancel(),
          }
        );
      },
      tween(t, r, s, a, h = Or.linear) {
        let u = 0,
          g = [],
          y = this.onUpdate(() => {
            u += De();
            let m = Math.min(u / s, 1);
            a(je(t, r, h(m))),
              m === 1 && (y.cancel(), a(r), g.forEach((d) => d()));
          });
        return {
          get paused() {
            return y.paused;
          },
          set paused(m) {
            y.paused = m;
          },
          onEnd(m) {
            g.push(m);
          },
          then(m) {
            return this.onEnd(m), this;
          },
          cancel() {
            y.cancel();
          },
          finish() {
            y.cancel(), a(r), g.forEach((m) => m());
          },
        };
      },
    };
  }
  o(kr, "timer");
  let qn = 640,
    Hn = 65536;
  function cs(t = {}) {
    let r = null,
      s = null,
      a = !1;
    return {
      id: "body",
      require: ["pos", "area"],
      vel: new b(0),
      jumpForce: t.jumpForce ?? qn,
      gravityScale: t.gravityScale ?? 1,
      isStatic: t.isStatic ?? !1,
      mass: t.mass ?? 1,
      add() {
        if (this.mass === 0) throw new Error("Can't set body mass to 0");
        this.onCollideUpdate((h, u) => {
          if (
            h.is("body") &&
            !u.resolved &&
            (this.trigger("beforePhysicsResolve", u),
            h.trigger("beforePhysicsResolve", u.reverse()),
            !u.resolved && !(this.isStatic && h.isStatic))
          ) {
            if (!this.isStatic && !h.isStatic) {
              let g = this.mass + h.mass;
              (this.pos = this.pos.add(u.displacement.scale(h.mass / g))),
                (h.pos = h.pos.add(u.displacement.scale(-this.mass / g))),
                (this.transform = $t(this)),
                (h.transform = $t(h));
            } else {
              let g = !this.isStatic && h.isStatic ? u : u.reverse();
              (g.source.pos = g.source.pos.add(g.displacement)),
                (g.source.transform = $t(g.source));
            }
            (u.resolved = !0),
              this.trigger("physicsResolve", u),
              h.trigger("physicsResolve", u.reverse());
          }
        }),
          this.onPhysicsResolve((h) => {
            R.gravity &&
              (h.isBottom() && this.isFalling()
                ? ((this.vel.y = 0),
                  (r = h.target),
                  (s = h.target.pos),
                  a ? (a = !1) : this.trigger("ground", r))
                : h.isTop() &&
                  this.isJumping() &&
                  ((this.vel.y = 0), this.trigger("headbutt", h.target)));
          });
      },
      update() {
        if (!R.gravity || this.isStatic) return;
        if (
          (a && ((r = null), (s = null), this.trigger("fallOff"), (a = !1)), r)
        )
          if (!this.isColliding(r) || !r.exists() || !r.is("body")) a = !0;
          else {
            !r.pos.eq(s) &&
              t.stickToPlatform !== !1 &&
              this.moveBy(r.pos.sub(s)),
              (s = r.pos);
            return;
          }
        let h = this.vel.y;
        (this.vel.y += R.gravity * this.gravityScale * De()),
          (this.vel.y = Math.min(this.vel.y, t.maxVelocity ?? Hn)),
          h < 0 && this.vel.y >= 0 && this.trigger("fall"),
          this.move(this.vel);
      },
      onPhysicsResolve(h) {
        return this.on("physicsResolve", h);
      },
      onBeforePhysicsResolve(h) {
        return this.on("beforePhysicsResolve", h);
      },
      curPlatform() {
        return r;
      },
      isGrounded() {
        return r !== null;
      },
      isFalling() {
        return this.vel.y > 0;
      },
      isJumping() {
        return this.vel.y < 0;
      },
      jump(h) {
        (r = null), (s = null), (this.vel.y = -h || -this.jumpForce);
      },
      onGround(h) {
        return this.on("ground", h);
      },
      onFall(h) {
        return this.on("fall", h);
      },
      onFallOff(h) {
        return this.on("fallOff", h);
      },
      onHeadbutt(h) {
        return this.on("headbutt", h);
      },
    };
  }
  o(cs, "body");
  function fs(t = 2) {
    let r = t;
    return {
      id: "doubleJump",
      require: ["body"],
      numJumps: t,
      add() {
        this.onGround(() => {
          r = this.numJumps;
        });
      },
      doubleJump(s) {
        r <= 0 ||
          (r < this.numJumps && this.trigger("doubleJump"), r--, this.jump(s));
      },
      onDoubleJump(s) {
        return this.on("doubleJump", s);
      },
      inspect() {
        return `${r}`;
      },
    };
  }
  o(fs, "doubleJump");
  function ps(t, r) {
    return {
      id: "shader",
      shader: t,
      ...(typeof r == "function"
        ? {
            uniform: r(),
            update() {
              this.uniform = r();
            },
          }
        : { uniform: r }),
    };
  }
  o(ps, "shader");
  function gs() {
    return { id: "fixed", fixed: !0 };
  }
  o(gs, "fixed");
  function ii(t) {
    return { id: "stay", stay: !0, scenesToStay: t };
  }
  o(ii, "stay");
  function ms(t, r) {
    if (t == null)
      throw new Error("health() requires the initial amount of hp");
    return {
      id: "health",
      hurt(s = 1) {
        this.setHP(t - s), this.trigger("hurt", s);
      },
      heal(s = 1) {
        let a = t;
        this.setHP(t + s), this.trigger("heal", t - a);
      },
      hp() {
        return t;
      },
      maxHP() {
        return r ?? null;
      },
      setMaxHP(s) {
        r = s;
      },
      setHP(s) {
        (t = r ? Math.min(r, s) : s), t <= 0 && this.trigger("death");
      },
      onHurt(s) {
        return this.on("hurt", s);
      },
      onHeal(s) {
        return this.on("heal", s);
      },
      onDeath(s) {
        return this.on("death", s);
      },
      inspect() {
        return `${t}`;
      },
    };
  }
  o(ms, "health");
  function ws(t, r = {}) {
    if (t == null) throw new Error("lifespan() requires time");
    let s = r.fade ?? 0;
    return {
      id: "lifespan",
      async add() {
        await Fs(t),
          s > 0 &&
            this.opacity &&
            (await hi(
              this.opacity,
              0,
              s,
              (a) => (this.opacity = a),
              Or.linear
            )),
          this.destroy();
      },
    };
  }
  o(ws, "lifespan");
  function As(t, r, s) {
    if (!t) throw new Error("state() requires an initial state");
    let a = {};
    function h(m) {
      a[m] ||
        (a[m] = {
          enter: new Ce(),
          end: new Ce(),
          update: new Ce(),
          draw: new Ce(),
        });
    }
    o(h, "initStateEvents");
    function u(m, d, w) {
      return h(d), a[d][m].add(w);
    }
    o(u, "on");
    function g(m, d, ...w) {
      h(d), a[d][m].trigger(...w);
    }
    o(g, "trigger");
    let y = !1;
    return {
      id: "state",
      state: t,
      enterState(m, ...d) {
        if (((y = !0), r && !r.includes(m)))
          throw new Error(`State not found: ${m}`);
        let w = this.state;
        if (s) {
          if (!(s != null && s[w])) return;
          let P = typeof s[w] == "string" ? [s[w]] : s[w];
          if (!P.includes(m))
            throw new Error(
              `Cannot transition state from "${w}" to "${m}". Available transitions: ${P.map(
                (D) => `"${D}"`
              ).join(", ")}`
            );
        }
        g("end", w, ...d),
          (this.state = m),
          g("enter", m, ...d),
          g("enter", `${w} -> ${m}`, ...d);
      },
      onStateTransition(m, d, w) {
        return u("enter", `${m} -> ${d}`, w);
      },
      onStateEnter(m, d) {
        return u("enter", m, d);
      },
      onStateUpdate(m, d) {
        return u("update", m, d);
      },
      onStateDraw(m, d) {
        return u("draw", m, d);
      },
      onStateEnd(m, d) {
        return u("end", m, d);
      },
      update() {
        y || (g("enter", t), (y = !0)), g("update", this.state);
      },
      draw() {
        g("draw", this.state);
      },
      inspect() {
        return this.state;
      },
    };
  }
  o(As, "state");
  function ys(t = 1) {
    let r = 0,
      s = !1;
    return {
      require: ["opacity"],
      add() {
        this.opacity = 0;
      },
      update() {
        s ||
          ((r += De()),
          (this.opacity = _e(r, 0, t, 0, 1)),
          r >= t && ((this.opacity = 1), (s = !0)));
      },
    };
  }
  o(ys, "fadeIn");
  function Vs(t = "intersect") {
    return { id: "mask", mask: t };
  }
  o(Vs, "mask");
  function vs(t) {
    return {
      add() {
        this.canvas = t;
      },
    };
  }
  o(vs, "drawon");
  function Dr(t) {
    G.loaded ? t() : R.events.on("load", t);
  }
  o(Dr, "onLoad");
  function xs(t, r) {
    R.scenes[t] = r;
  }
  o(xs, "scene");
  function Es(t, ...r) {
    if (!R.scenes[t]) throw new Error(`Scene not found: ${t}`);
    R.events.onOnce("frameEnd", () => {
      R.events.trigger("sceneLeave", t),
        V.events.clear(),
        R.events.clear(),
        R.objEvents.clear(),
        [...R.root.children].forEach((s) => {
          (!s.stay || (s.scenesToStay && !s.scenesToStay.includes(t))) &&
            R.root.remove(s);
        }),
        R.root.clearEvents(),
        pi(),
        (R.cam = {
          pos: null,
          scale: B(1),
          angle: 0,
          shake: 0,
          transform: new Le(),
        }),
        R.scenes[t](...r);
    });
  }
  o(Es, "go");
  function bs(t) {
    return R.events.on("sceneLeave", t);
  }
  o(bs, "onSceneLeave");
  function Ss(t, r) {
    try {
      return JSON.parse(window.localStorage[t]);
    } catch {
      return r ? (si(t, r), r) : null;
    }
  }
  o(Ss, "getData");
  function si(t, r) {
    window.localStorage[t] = JSON.stringify(r);
  }
  o(si, "setData");
  function ni(t, ...r) {
    let s = t(nt),
      a;
    typeof s == "function" ? (a = s(...r)(nt)) : (a = s);
    for (let h in a) (nt[h] = a[h]), i.global !== !1 && (window[h] = a[h]);
    return nt;
  }
  o(ni, "plug");
  function ir() {
    return B(ve() / 2, xe() / 2);
  }
  o(ir, "center"),
    ((t) => (
      (t[(t.None = 0)] = "None"),
      (t[(t.Left = 1)] = "Left"),
      (t[(t.Top = 2)] = "Top"),
      (t[(t.LeftTop = 3)] = "LeftTop"),
      (t[(t.Right = 4)] = "Right"),
      (t[(t.Horizontal = 5)] = "Horizontal"),
      (t[(t.RightTop = 6)] = "RightTop"),
      (t[(t.HorizontalTop = 7)] = "HorizontalTop"),
      (t[(t.Bottom = 8)] = "Bottom"),
      (t[(t.LeftBottom = 9)] = "LeftBottom"),
      (t[(t.Vertical = 10)] = "Vertical"),
      (t[(t.LeftVertical = 11)] = "LeftVertical"),
      (t[(t.RightBottom = 12)] = "RightBottom"),
      (t[(t.HorizontalBottom = 13)] = "HorizontalBottom"),
      (t[(t.RightVertical = 14)] = "RightVertical"),
      (t[(t.All = 15)] = "All")
    ))(void 0 || (co = {}));
  function oi(t = {}) {
    let r = B(0),
      s = t.isObstacle ?? !1,
      a = t.cost ?? 0,
      h = t.edges ?? [],
      u = o(() => {
        let y = { left: 1, top: 2, right: 4, bottom: 8 };
        return h.map((m) => y[m] || 0).reduce((m, d) => m | d, 0);
      }, "getEdgeMask"),
      g = u();
    return {
      id: "tile",
      tilePosOffset: t.offset ?? B(0),
      set tilePos(y) {
        let m = this.getLevel();
        (r = y.clone()),
          (this.pos = B(
            this.tilePos.x * m.tileWidth(),
            this.tilePos.y * m.tileHeight()
          ).add(this.tilePosOffset));
      },
      get tilePos() {
        return r;
      },
      set isObstacle(y) {
        s !== y && ((s = y), this.getLevel().invalidateNavigationMap());
      },
      get isObstacle() {
        return s;
      },
      set cost(y) {
        a !== y && ((a = y), this.getLevel().invalidateNavigationMap());
      },
      get cost() {
        return a;
      },
      set edges(y) {
        (h = y), (g = u()), this.getLevel().invalidateNavigationMap();
      },
      get edges() {
        return h;
      },
      get edgeMask() {
        return g;
      },
      getLevel() {
        return this.parent;
      },
      moveLeft() {
        this.tilePos = this.tilePos.add(B(-1, 0));
      },
      moveRight() {
        this.tilePos = this.tilePos.add(B(1, 0));
      },
      moveUp() {
        this.tilePos = this.tilePos.add(B(0, -1));
      },
      moveDown() {
        this.tilePos = this.tilePos.add(B(0, 1));
      },
    };
  }
  o(oi, "tile");
  function Rs(t, r) {
    if (!r.tileWidth || !r.tileHeight)
      throw new Error("Must provide tileWidth and tileHeight.");
    let s = sr([tr(r.pos ?? B(0))]),
      a = t.length,
      h = 0,
      u = null,
      g = null,
      y = null,
      m = null,
      d = o((A) => A.x + A.y * h, "tile2Hash"),
      w = o((A) => B(Math.floor(A % h), Math.floor(A / h)), "hash2Tile"),
      P = o(() => {
        u = [];
        for (let A of s.children) D(A);
      }, "createSpatialMap"),
      D = o((A) => {
        let k = d(A.tilePos);
        u[k] ? u[k].push(A) : (u[k] = [A]);
      }, "insertIntoSpatialMap"),
      O = o((A) => {
        let k = d(A.tilePos);
        if (u[k]) {
          let F = u[k].indexOf(A);
          F >= 0 && u[k].splice(F, 1);
        }
      }, "removeFromSpatialMap"),
      q = o(() => {
        let A = !1;
        for (let k of s.children) {
          let F = s.pos2Tile(k.pos);
          (k.tilePos.x != F.x || k.tilePos.y != F.y) &&
            ((A = !0), O(k), (k.tilePos.x = F.x), (k.tilePos.y = F.y), D(k));
        }
        A && s.trigger("spatial_map_changed");
      }, "updateSpatialMap"),
      I = o(() => {
        let A = s.getSpatialMap(),
          k = s.numRows() * s.numColumns();
        g ? (g.length = k) : (g = new Array(k)), g.fill(1, 0, k);
        for (let F = 0; F < A.length; F++) {
          let N = A[F];
          if (N) {
            let Q = 0;
            for (let K of N)
              if (K.isObstacle) {
                Q = 1 / 0;
                break;
              } else Q += K.cost;
            g[F] = Q || 1;
          }
        }
      }, "createCostMap"),
      L = o(() => {
        let A = s.getSpatialMap(),
          k = s.numRows() * s.numColumns();
        y ? (y.length = k) : (y = new Array(k)), y.fill(15, 0, k);
        for (let F = 0; F < A.length; F++) {
          let N = A[F];
          if (N) {
            let Q = N.length,
              K = 15;
            for (let ee = 0; ee < Q; ee++) K |= N[ee].edgeMask;
            y[F] = K;
          }
        }
      }, "createEdgeMap"),
      Me = o(() => {
        let A = s.numRows() * s.numColumns(),
          k = o((N, Q) => {
            let K = [];
            for (K.push(N); K.length > 0; ) {
              let ee = K.pop();
              oe(ee).forEach((ge) => {
                m[ge] < 0 && ((m[ge] = Q), K.push(ge));
              });
            }
          }, "traverse");
        m ? (m.length = A) : (m = new Array(A)), m.fill(-1, 0, A);
        let F = 0;
        for (let N = 0; N < g.length; N++) {
          if (m[N] >= 0) {
            F++;
            continue;
          }
          k(N, F), F++;
        }
      }, "createConnectivityMap"),
      de = o((A, k) => g[k], "getCost"),
      fe = o((A, k) => {
        let F = w(A),
          N = w(k);
        return F.dist(N);
      }, "getHeuristic"),
      oe = o((A, k) => {
        let F = [],
          N = Math.floor(A % h),
          Q = N > 0 && y[A] & 1 && g[A - 1] !== 1 / 0,
          K = A >= h && y[A] & 2 && g[A - h] !== 1 / 0,
          ee = N < h - 1 && y[A] & 4 && g[A + 1] !== 1 / 0,
          ge = A < h * a - h - 1 && y[A] & 8 && g[A + h] !== 1 / 0;
        return (
          k
            ? (Q &&
                (K && F.push(A - h - 1),
                F.push(A - 1),
                ge && F.push(A + h - 1)),
              K && F.push(A - h),
              ee &&
                (K && F.push(A - h + 1),
                F.push(A + 1),
                ge && F.push(A + h + 1)),
              ge && F.push(A + h))
            : (Q && F.push(A - 1),
              K && F.push(A - h),
              ee && F.push(A + 1),
              ge && F.push(A + h)),
          F
        );
      }, "getNeighbours"),
      ie = {
        id: "level",
        tileWidth() {
          return r.tileWidth;
        },
        tileHeight() {
          return r.tileHeight;
        },
        spawn(A, ...k) {
          let F = B(...k),
            N = (() => {
              if (typeof A == "string") {
                if (r.tiles[A]) {
                  if (typeof r.tiles[A] != "function")
                    throw new Error(
                      "Level symbol def must be a function returning a component list"
                    );
                  return r.tiles[A](F);
                } else if (r.wildcardTile) return r.wildcardTile(A, F);
              } else {
                if (Array.isArray(A)) return A;
                throw new Error("Expected a symbol or a component list");
              }
            })();
          if (!N) return null;
          let Q = !1,
            K = !1;
          for (let ge of N)
            ge.id === "tile" && (K = !0), ge.id === "pos" && (Q = !0);
          Q || N.push(tr()), K || N.push(oi());
          let ee = s.add(N);
          return (
            Q && (ee.tilePosOffset = ee.pos.clone()),
            (ee.tilePos = F),
            u &&
              (D(ee),
              this.trigger("spatial_map_changed"),
              this.trigger("navigation_map_invalid")),
            ee
          );
        },
        numColumns() {
          return h;
        },
        numRows() {
          return a;
        },
        levelWidth() {
          return h * this.tileWidth();
        },
        levelHeight() {
          return a * this.tileHeight();
        },
        tile2Pos(...A) {
          return B(...A).scale(this.tileWidth(), this.tileHeight());
        },
        pos2Tile(...A) {
          let k = B(...A);
          return B(
            Math.floor(k.x / this.tileWidth()),
            Math.floor(k.y / this.tileHeight())
          );
        },
        getSpatialMap() {
          return u || P(), u;
        },
        onSpatialMapChanged(A) {
          return this.on("spatial_map_changed", A);
        },
        onNavigationMapInvalid(A) {
          return this.on("navigation_map_invalid", A);
        },
        getAt(A) {
          u || P();
          let k = d(A);
          return u[k] || [];
        },
        update() {
          u && q();
        },
        invalidateNavigationMap() {
          (g = null), (y = null), (m = null);
        },
        onNavigationMapChanged(A) {
          return this.on("navigation_map_changed", A);
        },
        getTilePath(A, k, F = {}) {
          var Ys;
          if (
            (g || I(),
            y || L(),
            m || Me(),
            A.x < 0 ||
              A.x >= h ||
              A.y < 0 ||
              A.y >= a ||
              k.x < 0 ||
              k.x >= h ||
              k.y < 0 ||
              k.y >= a)
          )
            return null;
          let N = d(A),
            Q = d(k);
          if (g[Q] === 1 / 0) return null;
          if (N === Q) return [];
          if (m[N] != -1 && m[N] !== m[Q]) return null;
          let K = new ao((Ye, wi) => Ye.cost < wi.cost);
          K.insert({ cost: 0, node: N });
          let ee = new Map();
          ee.set(N, N);
          let ge = new Map();
          for (ge.set(N, 0); K.length !== 0; ) {
            let Ye = (Ys = K.remove()) == null ? void 0 : Ys.node;
            if (Ye === Q) break;
            let wi = oe(Ye, F.allowDiagonals);
            for (let at of wi) {
              let Ai = (ge.get(Ye) || 0) + de(Ye, at) + fe(at, Q);
              (!ge.has(at) || Ai < ge.get(at)) &&
                (ge.set(at, Ai),
                K.insert({ cost: Ai, node: at }),
                ee.set(at, Ye));
            }
          }
          let mi = [],
            nr = Q,
            Jn = w(nr);
          for (mi.push(Jn); nr !== N; ) {
            nr = ee.get(nr);
            let Ye = w(nr);
            mi.push(Ye);
          }
          return mi.reverse();
        },
        getPath(A, k, F = {}) {
          let N = this.tileWidth(),
            Q = this.tileHeight(),
            K = this.getTilePath(this.pos2Tile(A), this.pos2Tile(k), F);
          return K
            ? [
                A,
                ...K.slice(1, -1).map((ee) => ee.scale(N, Q).add(N / 2, Q / 2)),
                k,
              ]
            : null;
        },
      };
    return (
      s.use(ie),
      s.onNavigationMapInvalid(() => {
        s.invalidateNavigationMap(), s.trigger("navigation_map_changed");
      }),
      t.forEach((A, k) => {
        let F = A.split("");
        (h = Math.max(F.length, h)),
          F.forEach((N, Q) => {
            s.spawn(N, B(Q, k));
          });
      }),
      s
    );
  }
  o(Rs, "addLevel");
  function Ms(t = {}) {
    let r = null,
      s = null,
      a = null,
      h = null;
    return {
      id: "agent",
      require: ["pos", "tile"],
      agentSpeed: t.speed ?? 100,
      allowDiagonals: t.allowDiagonals ?? !0,
      getDistanceToTarget() {
        return r ? this.pos.dist(r) : 0;
      },
      getNextLocation() {
        return s && a ? s[a] : null;
      },
      getPath() {
        return s ? s.slice() : null;
      },
      getTarget() {
        return r;
      },
      isNavigationFinished() {
        return s ? a === null : !0;
      },
      isTargetReachable() {
        return s !== null;
      },
      isTargetReached() {
        return r ? this.pos.eq(r) : !0;
      },
      setTarget(u) {
        (r = u),
          (s = this.getLevel().getPath(this.pos, r, {
            allowDiagonals: this.allowDiagonals,
          })),
          (a = s ? 0 : null),
          s
            ? (h ||
                ((h = this.getLevel().onNavigationMapChanged(() => {
                  s &&
                    a !== null &&
                    ((s = this.getLevel().getPath(this.pos, r, {
                      allowDiagonals: this.allowDiagonals,
                    })),
                    (a = s ? 0 : null),
                    s
                      ? this.trigger("navigation-next", this, s[a])
                      : this.trigger("navigation-ended", this));
                })),
                this.onDestroy(() => h.cancel())),
              this.trigger("navigation-started", this),
              this.trigger("navigation-next", this, s[a]))
            : this.trigger("navigation-ended", this);
      },
      update() {
        if (s && a !== null) {
          if (this.pos.sdist(s[a]) < 2)
            if (a === s.length - 1) {
              (this.pos = r.clone()),
                (a = null),
                this.trigger("navigation-ended", this),
                this.trigger("target-reached", this);
              return;
            } else a++, this.trigger("navigation-next", this, s[a]);
          this.moveTo(s[a], this.agentSpeed);
        }
      },
      onNavigationStarted(u) {
        return this.on("navigation-started", u);
      },
      onNavigationNext(u) {
        return this.on("navigation-next", u);
      },
      onNavigationEnded(u) {
        return this.on("navigation-ended", u);
      },
      onTargetReached(u) {
        return this.on("target-reached", u);
      },
      inspect() {
        return JSON.stringify({
          target: JSON.stringify(r),
          path: JSON.stringify(s),
        });
      },
    };
  }
  o(Ms, "agent");
  function Ts(t) {
    let r = V.canvas.captureStream(t),
      s = re.ctx.createMediaStreamDestination();
    re.masterNode.connect(s);
    let a = new MediaRecorder(r),
      h = [];
    return (
      (a.ondataavailable = (u) => {
        u.data.size > 0 && h.push(u.data);
      }),
      (a.onerror = () => {
        re.masterNode.disconnect(s), r.getTracks().forEach((u) => u.stop());
      }),
      a.start(),
      {
        resume() {
          a.resume();
        },
        pause() {
          a.pause();
        },
        stop() {
          return (
            a.stop(),
            re.masterNode.disconnect(s),
            r.getTracks().forEach((u) => u.stop()),
            new Promise((u) => {
              a.onstop = () => {
                u(new Blob(h, { type: "video/mp4" }));
              };
            })
          );
        },
        download(u = "kaboom.mp4") {
          this.stop().then((g) => bi(u, g));
        },
      }
    );
  }
  o(Ts, "record");
  function Bs() {
    return document.activeElement === V.canvas;
  }
  o(Bs, "isFocused");
  function Ps(t) {
    t.destroy();
  }
  o(Ps, "destroy");
  let sr = R.root.add.bind(R.root),
    Yn = R.root.readd.bind(R.root),
    Kn = R.root.removeAll.bind(R.root),
    ai = R.root.get.bind(R.root),
    Fs = R.root.wait.bind(R.root),
    jn = R.root.loop.bind(R.root),
    hi = R.root.tween.bind(R.root);
  function li(t = 2, r = 1) {
    let s = 0;
    return {
      require: ["scale"],
      update() {
        let a = Math.sin(s * t) * r;
        a < 0 && this.destroy(), (this.scale = B(a)), (s += De());
      },
    };
  }
  o(li, "boom");
  let Qn = Oe(null, Ao),
    zn = Oe(null, yo);
  function Is(t, r = {}) {
    let s = sr([tr(t), ii()]),
      a = (r.speed || 1) * 5,
      h = r.scale || 1;
    s.add([Ir(zn), rr(0), Fr("center"), li(a, h), ...(r.comps ?? [])]);
    let u = s.add([Ir(Qn), rr(0), Fr("center"), kr(), ...(r.comps ?? [])]);
    return (
      u.wait(0.4 / a, () => u.use(li(a, h))), u.onDestroy(() => s.destroy()), s
    );
  }
  o(Is, "addKaboom");
  function ui() {
    R.root.update();
  }
  o(ui, "updateFrame");
  const Nr = class Nr {
    constructor(r, s, a, h = !1) {
      E(this, "source");
      E(this, "target");
      E(this, "displacement");
      E(this, "resolved", !1);
      (this.source = r),
        (this.target = s),
        (this.displacement = a),
        (this.resolved = h);
    }
    reverse() {
      return new Nr(
        this.target,
        this.source,
        this.displacement.scale(-1),
        this.resolved
      );
    }
    hasOverlap() {
      return !this.displacement.isZero();
    }
    isLeft() {
      return this.displacement.x > 0;
    }
    isRight() {
      return this.displacement.x < 0;
    }
    isTop() {
      return this.displacement.y > 0;
    }
    isBottom() {
      return this.displacement.y < 0;
    }
    preventResolution() {
      this.resolved = !0;
    }
  };
  o(Nr, "Collision");
  let di = Nr;
  function ks() {
    let t = {},
      r = i.hashGridSize || Eo,
      s = new Le(),
      a = [];
    function h(u) {
      if (
        (a.push(s.clone()),
        u.pos && s.translate(u.pos),
        u.scale && s.scale(u.scale),
        u.angle && s.rotate(u.angle),
        (u.transform = s.clone()),
        u.c("area") && !u.paused)
      ) {
        let g = u,
          y = g.worldArea().bbox(),
          m = Math.floor(y.pos.x / r),
          d = Math.floor(y.pos.y / r),
          w = Math.ceil((y.pos.x + y.width) / r),
          P = Math.ceil((y.pos.y + y.height) / r),
          D = new Set();
        for (let O = m; O <= w; O++)
          for (let q = d; q <= P; q++)
            if (!t[O]) (t[O] = {}), (t[O][q] = [g]);
            else if (!t[O][q]) t[O][q] = [g];
            else {
              let I = t[O][q];
              e: for (let L of I) {
                if (L.paused || !L.exists() || D.has(L.id)) continue;
                for (let de of g.collisionIgnore) if (L.is(de)) continue e;
                for (let de of L.collisionIgnore) if (g.is(de)) continue e;
                let Me = mn(g.worldArea(), L.worldArea());
                if (Me) {
                  let de = new di(g, L, Me);
                  g.trigger("collideUpdate", L, de);
                  let fe = de.reverse();
                  (fe.resolved = de.resolved),
                    L.trigger("collideUpdate", g, fe);
                }
                D.add(L.id);
              }
              I.push(g);
            }
      }
      u.children.forEach(h), (s = a.pop());
    }
    o(h, "checkObj"), h(R.root);
  }
  o(ks, "checkFrame");
  function Ds() {
    let t = R.cam,
      r = b.fromAngle(ur(0, 360)).scale(t.shake);
    (t.shake = je(t.shake, 0, 5 * De())),
      (t.transform = new Le()
        .translate(ir())
        .scale(t.scale)
        .rotate(t.angle)
        .translate((t.pos ?? ir()).scale(-1).add(r))),
      R.root.draw(),
      Fe();
  }
  o(Ds, "drawFrame");
  function Cs() {
    let t = Y();
    R.events.numListeners("loading") > 0
      ? R.events.trigger("loading", t)
      : Re(() => {
          let r = ve() / 2,
            s = 24,
            a = B(ve() / 2, xe() / 2).sub(B(r / 2, s / 2));
          Ve({ pos: B(0), width: ve(), height: xe(), color: _(0, 0, 0) }),
            Ve({
              pos: a,
              width: r,
              height: s,
              fill: !1,
              outline: { width: 4 },
            }),
            Ve({ pos: a, width: r * t, height: s });
        });
  }
  o(Cs, "drawLoadScreen");
  function ci(t, r) {
    Re(() => {
      let s = B(8);
      ue(), $(t);
      let a = Je({
          text: r,
          font: Hr,
          size: 16,
          pos: s,
          color: _(255, 255, 255),
          fixed: !0,
        }),
        h = a.width + s.x * 2,
        u = a.height + s.x * 2;
      t.x + h >= ve() && $(B(-h, 0)),
        t.y + u >= xe() && $(B(0, -u)),
        Ve({
          width: h,
          height: u,
          color: _(0, 0, 0),
          radius: 4,
          opacity: 0.8,
          fixed: !0,
        }),
        Xe(a),
        he();
    });
  }
  o(ci, "drawInspectText");
  function Ns() {
    if (ne.inspect) {
      let t = null;
      for (let r of R.root.get("*", { recursive: !0 }))
        if (r.c("area") && r.isHovering()) {
          t = r;
          break;
        }
      if ((R.root.drawInspect(), t)) {
        let r = [],
          s = t.inspect();
        for (let a in s) s[a] ? r.push(`${a}: ${s[a]}`) : r.push(`${a}`);
        ci(
          Ci(_t()),
          r.join(`
`)
        );
      }
      ci(B(8), `FPS: ${ne.fps()}`);
    }
    ne.paused &&
      Re(() => {
        ue(), $(ve(), 0), $(-8, 8);
        let t = 32;
        Ve({
          width: t,
          height: t,
          anchor: "topright",
          color: _(0, 0, 0),
          opacity: 0.8,
          radius: 4,
          fixed: !0,
        });
        for (let r = 1; r <= 2; r++)
          Ve({
            width: 4,
            height: t * 0.6,
            anchor: "center",
            pos: B((-t / 3) * r, t * 0.5),
            color: _(255, 255, 255),
            radius: 2,
            fixed: !0,
          });
        he();
      }),
      ne.timeScale !== 1 &&
        Re(() => {
          ue(), $(ve(), xe()), $(-8, -8);
          let t = 8,
            r = Je({
              text: ne.timeScale.toFixed(1),
              font: Hr,
              size: 16,
              color: _(255, 255, 255),
              pos: B(-t),
              anchor: "botright",
              fixed: !0,
            });
          Ve({
            width: r.width + t * 2 + t * 4,
            height: r.height + t * 2,
            anchor: "botright",
            color: _(0, 0, 0),
            opacity: 0.8,
            radius: 4,
            fixed: !0,
          });
          for (let s = 0; s < 2; s++) {
            let a = ne.timeScale < 1;
            T({
              p1: B(-r.width - t * (a ? 2 : 3.5), -t),
              p2: B(-r.width - t * (a ? 2 : 3.5), -t - r.height),
              p3: B(-r.width - t * (a ? 3.5 : 2), -t - r.height / 2),
              pos: B(-s * t * 1 + (a ? -t * 0.5 : 0), 0),
              color: _(255, 255, 255),
              fixed: !0,
            });
          }
          Xe(r), he();
        }),
      ne.curRecording &&
        Re(() => {
          ue(),
            $(0, xe()),
            $(24, -24),
            H({
              radius: 12,
              color: _(255, 0, 0),
              opacity: xi(0, 1, V.time() * 4),
              fixed: !0,
            }),
            he();
        }),
      ne.showLog &&
        R.logs.length > 0 &&
        Re(() => {
          var a;
          ue(), $(0, xe()), $(8, -8);
          let t = 8,
            r = [];
          for (let h of R.logs) {
            let u = "",
              g = h.msg instanceof Error ? "error" : "info";
            (u += `[time]${h.time.toFixed(2)}[/time]`),
              (u += " "),
              (u += `[${g}]${
                (a = h.msg) != null && a.toString ? h.msg.toString() : h.msg
              }[/${g}]`),
              r.push(u);
          }
          R.logs = R.logs.filter((h) => V.time() - h.time < (i.logTime || So));
          let s = Je({
            text: r.join(`
`),
            font: Hr,
            pos: B(t, -t),
            anchor: "botleft",
            size: 16,
            width: ve() * 0.6,
            lineSpacing: t / 2,
            fixed: !0,
            styles: {
              time: { color: _(127, 127, 127) },
              info: { color: _(255, 255, 255) },
              error: { color: _(255, 0, 127) },
            },
          });
          Ve({
            width: s.width + t * 2,
            height: s.height + t * 2,
            anchor: "botleft",
            color: _(0, 0, 0),
            radius: 4,
            opacity: 0.8,
            fixed: !0,
          }),
            Xe(s),
            he();
        });
  }
  o(Ns, "drawDebug");
  function Us(t) {
    R.events.on("loading", t);
  }
  o(Us, "onLoading");
  function Ls(t) {
    V.onResize(t);
  }
  o(Ls, "onResize");
  function Gs(t) {
    R.events.on("error", t);
  }
  o(Gs, "onError");
  function Os(t) {
    console.error(t),
      re.ctx.suspend(),
      V.run(() => {
        it(),
          Re(() => {
            let r = ve(),
              s = xe(),
              a = {
                size: 36,
                width: r - 32 * 2,
                letterSpacing: 4,
                lineSpacing: 4,
                font: Hr,
                fixed: !0,
              };
            Ve({ width: r, height: s, color: _(0, 0, 255), fixed: !0 });
            let h = Je({
              ...a,
              text: "Error",
              pos: B(32),
              color: _(255, 128, 0),
              fixed: !0,
            });
            Xe(h),
              $r({
                ...a,
                text: t.message,
                pos: B(32, 32 + h.height + 16),
                fixed: !0,
              }),
              he(),
              R.events.trigger("error", t);
          }),
          st();
      });
  }
  o(Os, "handleErr");
  function qs(t) {
    W.push(t);
  }
  o(qs, "onCleanup");
  function Hs() {
    R.events.onOnce("frameEnd", () => {
      V.quit(),
        S.clear(S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT | S.STENCIL_BUFFER_BIT);
      let t = S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS);
      for (let r = 0; r < t; r++)
        S.activeTexture(S.TEXTURE0 + r),
          S.bindTexture(S.TEXTURE_2D, null),
          S.bindTexture(S.TEXTURE_CUBE_MAP, null);
      S.bindBuffer(S.ARRAY_BUFFER, null),
        S.bindBuffer(S.ELEMENT_ARRAY_BUFFER, null),
        S.bindRenderbuffer(S.RENDERBUFFER, null),
        S.bindFramebuffer(S.FRAMEBUFFER, null),
        z.destroy(),
        W.forEach((r) => r());
    });
  }
  o(Hs, "quit");
  let Cr = !0;
  V.run(() => {
    try {
      G.loaded ||
        (Y() === 1 && !Cr && ((G.loaded = !0), R.events.trigger("load"))),
        (!G.loaded && i.loadingScreen !== !1) || Cr
          ? (it(), Cs(), st())
          : (ne.paused || ui(), ks(), it(), Ds(), i.debug !== !1 && Ns(), st()),
        Cr && (Cr = !1),
        R.events.trigger("frameEnd");
    } catch (t) {
      Os(t);
    }
  });
  function fi() {
    let t = M,
      r = S.drawingBufferWidth / t,
      s = S.drawingBufferHeight / t;
    if (i.letterbox) {
      if (!i.width || !i.height)
        throw new Error("Letterboxing requires width and height defined.");
      let a = r / s,
        h = i.width / i.height;
      if (a > h) {
        let u = s * h,
          g = (r - u) / 2;
        x.viewport = { x: g, y: 0, width: u, height: s };
      } else {
        let u = r / h,
          g = (s - u) / 2;
        x.viewport = { x: 0, y: g, width: r, height: u };
      }
      return;
    }
    if (i.stretch && (!i.width || !i.height))
      throw new Error("Stretching requires width and height defined.");
    x.viewport = { x: 0, y: 0, width: r, height: s };
  }
  o(fi, "updateViewport");
  function pi() {
    V.onHide(() => {
      i.backgroundAudio || re.ctx.suspend();
    }),
      V.onShow(() => {
        !i.backgroundAudio && !ne.paused && re.ctx.resume();
      }),
      V.onResize(() => {
        if (V.isFullscreen()) return;
        let t = i.width && i.height;
        (t && !i.stretch && !i.letterbox) ||
          ((n.width = n.offsetWidth * M),
          (n.height = n.offsetHeight * M),
          fi(),
          t ||
            (x.frameBuffer.free(),
            (x.frameBuffer = new Lr(
              z,
              S.drawingBufferWidth,
              S.drawingBufferHeight
            )),
            (x.width = S.drawingBufferWidth / M),
            (x.height = S.drawingBufferHeight / M)));
      }),
      i.debug !== !1 &&
        (V.onKeyPress("f1", () => (ne.inspect = !ne.inspect)),
        V.onKeyPress("f2", () => ne.clearLog()),
        V.onKeyPress("f8", () => (ne.paused = !ne.paused)),
        V.onKeyPress("f7", () => {
          ne.timeScale = St(Ke(ne.timeScale - 0.2, 0, 2), 1);
        }),
        V.onKeyPress("f9", () => {
          ne.timeScale = St(Ke(ne.timeScale + 0.2, 0, 2), 1);
        }),
        V.onKeyPress("f10", () => ne.stepFrame())),
      i.burp && V.onKeyPress("b", () => xt());
  }
  o(pi, "initEvents"), fi(), pi();
  let nt = {
    VERSION: Vo,
    loadRoot: be,
    loadProgress: Y,
    loadSprite: Oe,
    loadSpriteAtlas: mt,
    loadSound: Mr,
    loadBitmapFont: Ut,
    loadFont: Qe,
    loadShader: Sr,
    loadShaderURL: Rr,
    loadAseprite: Gt,
    loadPedit: Lt,
    loadBean: Tr,
    loadJSON: Ae,
    load: Pe,
    getSprite: Ot,
    getSound: qt,
    getFont: Ht,
    getBitmapFont: At,
    getShader: yt,
    getAsset: Yt,
    Asset: Ie,
    SpriteData: Z,
    SoundData: we,
    width: ve,
    height: xe,
    center: ir,
    dt: De,
    time: V.time,
    screenshot: V.screenshot,
    record: Ts,
    isFocused: Bs,
    setCursor: V.setCursor,
    getCursor: V.getCursor,
    setCursorLocked: V.setCursorLocked,
    isCursorLocked: V.isCursorLocked,
    setFullscreen: V.setFullscreen,
    isFullscreen: V.isFullscreen,
    isTouchscreen: V.isTouchscreen,
    onLoad: Dr,
    onLoading: Us,
    onResize: Ls,
    onGamepadConnect: V.onGamepadConnect,
    onGamepadDisconnect: V.onGamepadDisconnect,
    onError: Gs,
    onCleanup: qs,
    camPos: Ui,
    camScale: Li,
    camRot: Gi,
    shake: Oi,
    toScreen: ei,
    toWorld: ti,
    setGravity: Ji,
    getGravity: Xi,
    setBackground: Wi,
    getBackground: Zi,
    getGamepads: V.getGamepads,
    add: sr,
    make: Pr,
    destroy: Ps,
    destroyAll: Kn,
    get: ai,
    readd: Yn,
    pos: tr,
    scale: rr,
    rotate: _i,
    color: $i,
    opacity: es,
    anchor: Fr,
    area: ns,
    sprite: Ir,
    text: os,
    polygon: as,
    rect: hs,
    circle: us,
    uvquad: ls,
    outline: ds,
    body: cs,
    doubleJump: fs,
    shader: ps,
    timer: kr,
    fixed: gs,
    stay: ii,
    health: ms,
    lifespan: ws,
    z: ts,
    move: is,
    offscreen: ss,
    follow: rs,
    state: As,
    fadeIn: ys,
    mask: Vs,
    drawon: vs,
    tile: oi,
    agent: Ms,
    on: He,
    onUpdate: Un,
    onDraw: Ln,
    onAdd: ri,
    onDestroy: qi,
    onClick: Gn,
    onCollide: Hi,
    onCollideUpdate: Yi,
    onCollideEnd: Ki,
    onHover: ji,
    onHoverUpdate: Qi,
    onHoverEnd: zi,
    onKeyDown: V.onKeyDown,
    onKeyPress: V.onKeyPress,
    onKeyPressRepeat: V.onKeyPressRepeat,
    onKeyRelease: V.onKeyRelease,
    onMouseDown: V.onMouseDown,
    onMousePress: V.onMousePress,
    onMouseRelease: V.onMouseRelease,
    onMouseMove: V.onMouseMove,
    onCharInput: V.onCharInput,
    onTouchStart: V.onTouchStart,
    onTouchMove: V.onTouchMove,
    onTouchEnd: V.onTouchEnd,
    onScroll: V.onScroll,
    onHide: V.onHide,
    onShow: V.onShow,
    onGamepadButtonDown: V.onGamepadButtonDown,
    onGamepadButtonPress: V.onGamepadButtonPress,
    onGamepadButtonRelease: V.onGamepadButtonRelease,
    onGamepadStick: V.onGamepadStick,
    mousePos: _t,
    mouseDeltaPos: V.mouseDeltaPos,
    isKeyDown: V.isKeyDown,
    isKeyPressed: V.isKeyPressed,
    isKeyPressedRepeat: V.isKeyPressedRepeat,
    isKeyReleased: V.isKeyReleased,
    isMouseDown: V.isMouseDown,
    isMousePressed: V.isMousePressed,
    isMouseReleased: V.isMouseReleased,
    isMouseMoved: V.isMouseMoved,
    isGamepadButtonPressed: V.isGamepadButtonPressed,
    isGamepadButtonDown: V.isGamepadButtonDown,
    isGamepadButtonReleased: V.isGamepadButtonReleased,
    getGamepadStick: V.getGamepadStick,
    charInputted: V.charInputted,
    loop: jn,
    wait: Fs,
    play: vt,
    volume: Qt,
    burp: xt,
    audioCtx: re.ctx,
    Line: Ft,
    Rect: Ee,
    Circle: js,
    Polygon: or,
    Vec2: b,
    Color: te,
    Mat4: Le,
    Quad: me,
    RNG: an,
    rand: ur,
    randi: Mi,
    randSeed: hn,
    vec2: B,
    rgb: _,
    hsl2rgb: eo,
    quad: le,
    choose: un,
    chance: ln,
    lerp: je,
    tween: hi,
    easings: Or,
    map: _e,
    mapc: on,
    wave: xi,
    deg2rad: Ge,
    rad2deg: It,
    clamp: Ke,
    testLineLine: Pt,
    testRectRect: dn,
    testRectLine: fn,
    testRectPoint: dr,
    testCirclePolygon: gn,
    testLinePoint: pn,
    testLineCircle: Ti,
    drawSprite: Br,
    drawText: $r,
    formatText: Je,
    drawRect: Ve,
    drawLine: c,
    drawLines: v,
    drawTriangle: T,
    drawCircle: H,
    drawEllipse: J,
    drawUVQuad: Ue,
    drawPolygon: ce,
    drawFormattedText: Xe,
    drawMasked: Wt,
    drawSubtracted: Zt,
    pushTransform: ue,
    popTransform: he,
    pushTranslate: $,
    pushScale: Ne,
    pushRotate: se,
    pushMatrix: bt,
    usePostEffect: Et,
    makeCanvas: zt,
    debug: ne,
    scene: xs,
    go: Es,
    onSceneLeave: bs,
    addLevel: Rs,
    getData: Ss,
    setData: si,
    download: Jr,
    downloadJSON: Vn,
    downloadText: Fi,
    downloadBlob: bi,
    plug: ni,
    ASCII_CHARS: Zs,
    canvas: V.canvas,
    addKaboom: Is,
    LEFT: b.LEFT,
    RIGHT: b.RIGHT,
    UP: b.UP,
    DOWN: b.DOWN,
    RED: te.RED,
    GREEN: te.GREEN,
    BLUE: te.BLUE,
    YELLOW: te.YELLOW,
    MAGENTA: te.MAGENTA,
    CYAN: te.CYAN,
    WHITE: te.WHITE,
    BLACK: te.BLACK,
    quit: Hs,
    Event: Ce,
    EventHandler: ar,
    EventController: Bt,
  };
  if ((i.plugins && i.plugins.forEach(ni), i.global !== !1))
    for (let t in nt) window[t] = nt[t];
  return i.focus !== !1 && V.canvas.focus(), nt;
}, "default");
const j = ko({
  global: !1,
  touchToMouse: !0,
  canvas: document.getElementById("game"),
});
function Do(i, e) {
  const n = document.getElementById("textbox-container"),
    l = document.getElementById("dialogue");
  n.style.display = "block";
  let p = 0,
    f = "";
  const M = setInterval(() => {
      if (p < i.length) {
        (f += i[p]), (l.innerHTML = f), p++;
        return;
      }
      clearInterval(M);
    }, 5),
    C = document.getElementById("close");
  function U() {
    e(),
      (n.style.display = "none"),
      (l.innerHTML = ""),
      clearInterval(M),
      C.removeEventListener("click", U);
  }
  C.addEventListener("click", U);
}
function nn(i) {
  if (i.width() / i.height() < 1) {
    i.camScale(i.vec2(1));
    return;
  }
  i.camScale(i.vec2(1.5));
}
j.loadSprite("spritesheet", "./spritesheet.png", {
  sliceX: 39,
  sliceY: 31,
  anims: {
    "idle-down": 936,
    "walk-down": { from: 936, to: 939, loop: !0, speed: 8 },
    "idle-side": 975,
    "walk-side": { from: 975, to: 978, loop: !0, speed: 8 },
    "idle-up": 1014,
    "walk-up": { from: 1014, to: 1017, loop: !0, speed: 8 },
  },
});
j.loadSprite("mappa", "./mappa.png");
j.setBackground(j.Color.fromHex("#311047"));
j.scene("main", async () => {
  const e = (await (await fetch("./mappa.json")).json()).layers,
    n = j.add([j.sprite("mappa"), j.pos(0), j.scale(Ur)]),
    l = j.make([
      j.sprite("spritesheet", { anim: "idle-down" }),
      j.area({ shape: new j.Rect(j.vec2(0, 3), 8, 8) }),
      j.body(),
      j.anchor("center"),
      j.pos(),
      j.scale(Ur),
      { speed: 250, direction: "down", isInDialogue: !1 },
      "player",
    ]);
  for (const p of e) {
    if (p.name === "boundaries") {
      for (const f of p.objects)
        n.add([
          j.area({ shape: new j.Rect(j.vec2(0), f.width, f.height) }),
          j.body({ isStatic: !0 }),
          j.pos(f.x, f.y),
          f.name,
        ]),
          f.name &&
            l.onCollide(f.name, () => {
              (l.isInDialogue = !0),
                Do(Zn[f.name], () => (l.isInDialogue = !1));
            });
      continue;
    }
    if (p.name === "spawn") {
      for (const f of p.objects)
        if (f.name === "player") {
          (l.pos = j.vec2((n.pos.x + f.x) * Ur, (n.pos.y + f.y) * Ur)),
            j.add(l);
          continue;
        }
    }
  }
  nn(j),
    j.onResize(() => {
      nn(j);
    }),
    j.onUpdate(() => {
      j.camPos(l.pos.x, l.pos.y + 100);
    }),
    j.onMouseDown((p) => {
      if (p !== "left" || l.isInDialogue) return;
      const f = j.toWorld(j.mousePos());
      l.moveTo(f, l.speed);
      const M = l.pos.angle(f),
        C = 50,
        U = 125;
      if (M > C && M < U && l.curAnim() !== "walk-up") {
        l.play("walk-up"), (l.direction = "up");
        return;
      }
      if (M < -C && M > -U && l.curAnim() !== "walk-down") {
        l.play("walk-down"), (l.direction = "down");
        return;
      }
      if (Math.abs(M) > U) {
        (l.flipX = !1),
          l.curAnim() !== "walk-side" && l.play("walk-side"),
          (l.direction = "right");
        return;
      }
      if (Math.abs(M) < C) {
        (l.flipX = !0),
          l.curAnim() !== "walk-side" && l.play("walk-side"),
          (l.direction = "left");
        return;
      }
    }),
    j.onMouseRelease(() => {
      if (l.direction === "down") {
        l.play("idle-down");
        return;
      }
      if (l.direction === "up") {
        l.play("idle-up");
        return;
      }
      l.play("idle-side");
    });
});
j.go("main");
