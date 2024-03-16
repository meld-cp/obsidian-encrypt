var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// node_modules/cliui/build/lib/index.js
var align = {
  right: alignRight,
  center: alignCenter
};
var top = 0;
var right = 1;
var bottom = 2;
var left = 3;
var UI = class {
  constructor(opts) {
    var _a2;
    this.width = opts.width;
    this.wrap = (_a2 = opts.wrap) !== null && _a2 !== void 0 ? _a2 : true;
    this.rows = [];
  }
  span(...args) {
    const cols = this.div(...args);
    cols.span = true;
  }
  resetOutput() {
    this.rows = [];
  }
  div(...args) {
    if (args.length === 0) {
      this.div("");
    }
    if (this.wrap && this.shouldApplyLayoutDSL(...args) && typeof args[0] === "string") {
      return this.applyLayoutDSL(args[0]);
    }
    const cols = args.map((arg) => {
      if (typeof arg === "string") {
        return this.colFromString(arg);
      }
      return arg;
    });
    this.rows.push(cols);
    return cols;
  }
  shouldApplyLayoutDSL(...args) {
    return args.length === 1 && typeof args[0] === "string" && /[\t\n]/.test(args[0]);
  }
  applyLayoutDSL(str) {
    const rows = str.split("\n").map((row) => row.split("	"));
    let leftColumnWidth = 0;
    rows.forEach((columns) => {
      if (columns.length > 1 && mixin.stringWidth(columns[0]) > leftColumnWidth) {
        leftColumnWidth = Math.min(Math.floor(this.width * 0.5), mixin.stringWidth(columns[0]));
      }
    });
    rows.forEach((columns) => {
      this.div(...columns.map((r, i) => {
        return {
          text: r.trim(),
          padding: this.measurePadding(r),
          width: i === 0 && columns.length > 1 ? leftColumnWidth : void 0
        };
      }));
    });
    return this.rows[this.rows.length - 1];
  }
  colFromString(text) {
    return {
      text,
      padding: this.measurePadding(text)
    };
  }
  measurePadding(str) {
    const noAnsi = mixin.stripAnsi(str);
    return [0, noAnsi.match(/\s*$/)[0].length, 0, noAnsi.match(/^\s*/)[0].length];
  }
  toString() {
    const lines = [];
    this.rows.forEach((row) => {
      this.rowToString(row, lines);
    });
    return lines.filter((line) => !line.hidden).map((line) => line.text).join("\n");
  }
  rowToString(row, lines) {
    this.rasterize(row).forEach((rrow, r) => {
      let str = "";
      rrow.forEach((col, c) => {
        const { width } = row[c];
        const wrapWidth = this.negatePadding(row[c]);
        let ts = col;
        if (wrapWidth > mixin.stringWidth(col)) {
          ts += " ".repeat(wrapWidth - mixin.stringWidth(col));
        }
        if (row[c].align && row[c].align !== "left" && this.wrap) {
          const fn = align[row[c].align];
          ts = fn(ts, wrapWidth);
          if (mixin.stringWidth(ts) < wrapWidth) {
            ts += " ".repeat((width || 0) - mixin.stringWidth(ts) - 1);
          }
        }
        const padding = row[c].padding || [0, 0, 0, 0];
        if (padding[left]) {
          str += " ".repeat(padding[left]);
        }
        str += addBorder(row[c], ts, "| ");
        str += ts;
        str += addBorder(row[c], ts, " |");
        if (padding[right]) {
          str += " ".repeat(padding[right]);
        }
        if (r === 0 && lines.length > 0) {
          str = this.renderInline(str, lines[lines.length - 1]);
        }
      });
      lines.push({
        text: str.replace(/ +$/, ""),
        span: row.span
      });
    });
    return lines;
  }
  renderInline(source, previousLine) {
    const match = source.match(/^ */);
    const leadingWhitespace = match ? match[0].length : 0;
    const target = previousLine.text;
    const targetTextWidth = mixin.stringWidth(target.trimRight());
    if (!previousLine.span) {
      return source;
    }
    if (!this.wrap) {
      previousLine.hidden = true;
      return target + source;
    }
    if (leadingWhitespace < targetTextWidth) {
      return source;
    }
    previousLine.hidden = true;
    return target.trimRight() + " ".repeat(leadingWhitespace - targetTextWidth) + source.trimLeft();
  }
  rasterize(row) {
    const rrows = [];
    const widths = this.columnWidths(row);
    let wrapped;
    row.forEach((col, c) => {
      col.width = widths[c];
      if (this.wrap) {
        wrapped = mixin.wrap(col.text, this.negatePadding(col), { hard: true }).split("\n");
      } else {
        wrapped = col.text.split("\n");
      }
      if (col.border) {
        wrapped.unshift("." + "-".repeat(this.negatePadding(col) + 2) + ".");
        wrapped.push("'" + "-".repeat(this.negatePadding(col) + 2) + "'");
      }
      if (col.padding) {
        wrapped.unshift(...new Array(col.padding[top] || 0).fill(""));
        wrapped.push(...new Array(col.padding[bottom] || 0).fill(""));
      }
      wrapped.forEach((str, r) => {
        if (!rrows[r]) {
          rrows.push([]);
        }
        const rrow = rrows[r];
        for (let i = 0; i < c; i++) {
          if (rrow[i] === void 0) {
            rrow.push("");
          }
        }
        rrow.push(str);
      });
    });
    return rrows;
  }
  negatePadding(col) {
    let wrapWidth = col.width || 0;
    if (col.padding) {
      wrapWidth -= (col.padding[left] || 0) + (col.padding[right] || 0);
    }
    if (col.border) {
      wrapWidth -= 4;
    }
    return wrapWidth;
  }
  columnWidths(row) {
    if (!this.wrap) {
      return row.map((col) => {
        return col.width || mixin.stringWidth(col.text);
      });
    }
    let unset = row.length;
    let remainingWidth = this.width;
    const widths = row.map((col) => {
      if (col.width) {
        unset--;
        remainingWidth -= col.width;
        return col.width;
      }
      return void 0;
    });
    const unsetWidth = unset ? Math.floor(remainingWidth / unset) : 0;
    return widths.map((w, i) => {
      if (w === void 0) {
        return Math.max(unsetWidth, _minWidth(row[i]));
      }
      return w;
    });
  }
};
function addBorder(col, ts, style) {
  if (col.border) {
    if (/[.']-+[.']/.test(ts)) {
      return "";
    }
    if (ts.trim().length !== 0) {
      return style;
    }
    return "  ";
  }
  return "";
}
function _minWidth(col) {
  const padding = col.padding || [];
  const minWidth = 1 + (padding[left] || 0) + (padding[right] || 0);
  if (col.border) {
    return minWidth + 4;
  }
  return minWidth;
}
function getWindowWidth() {
  if (typeof process === "object" && process.stdout && process.stdout.columns) {
    return process.stdout.columns;
  }
  return 80;
}
function alignRight(str, width) {
  str = str.trim();
  const strWidth = mixin.stringWidth(str);
  if (strWidth < width) {
    return " ".repeat(width - strWidth) + str;
  }
  return str;
}
function alignCenter(str, width) {
  str = str.trim();
  const strWidth = mixin.stringWidth(str);
  if (strWidth >= width) {
    return str;
  }
  return " ".repeat(width - strWidth >> 1) + str;
}
var mixin;
function cliui(opts, _mixin) {
  mixin = _mixin;
  return new UI({
    width: (opts === null || opts === void 0 ? void 0 : opts.width) || getWindowWidth(),
    wrap: opts === null || opts === void 0 ? void 0 : opts.wrap
  });
}

// node_modules/cliui/build/lib/string-utils.js
var ansi = new RegExp("\x1B(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)", "g");
function stripAnsi(str) {
  return str.replace(ansi, "");
}
function wrap(str, width) {
  const [start, end] = str.match(ansi) || ["", ""];
  str = stripAnsi(str);
  let wrapped = "";
  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && i % width === 0) {
      wrapped += "\n";
    }
    wrapped += str.charAt(i);
  }
  if (start && end) {
    wrapped = `${start}${wrapped}${end}`;
  }
  return wrapped;
}

// node_modules/cliui/index.mjs
function ui(opts) {
  return cliui(opts, {
    stringWidth: (str) => {
      return [...str].length;
    },
    stripAnsi,
    wrap
  });
}

// node_modules/escalade/sync/index.mjs
import { dirname, resolve } from "path";
import { readdirSync, statSync } from "fs";
function sync_default(start, callback) {
  let dir = resolve(".", start);
  let tmp, stats = statSync(dir);
  if (!stats.isDirectory()) {
    dir = dirname(dir);
  }
  while (true) {
    tmp = callback(dir, readdirSync(dir));
    if (tmp)
      return resolve(dir, tmp);
    dir = dirname(tmp = dir);
    if (tmp === dir)
      break;
  }
}

// node_modules/yargs-parser/build/lib/string-utils.js
function camelCase(str) {
  const isCamelCase = str !== str.toLowerCase() && str !== str.toUpperCase();
  if (!isCamelCase) {
    str = str.toLowerCase();
  }
  if (str.indexOf("-") === -1 && str.indexOf("_") === -1) {
    return str;
  } else {
    let camelcase = "";
    let nextChrUpper = false;
    const leadingHyphens = str.match(/^-+/);
    for (let i = leadingHyphens ? leadingHyphens[0].length : 0; i < str.length; i++) {
      let chr = str.charAt(i);
      if (nextChrUpper) {
        nextChrUpper = false;
        chr = chr.toUpperCase();
      }
      if (i !== 0 && (chr === "-" || chr === "_")) {
        nextChrUpper = true;
      } else if (chr !== "-" && chr !== "_") {
        camelcase += chr;
      }
    }
    return camelcase;
  }
}
function decamelize(str, joinString) {
  const lowercase = str.toLowerCase();
  joinString = joinString || "-";
  let notCamelcase = "";
  for (let i = 0; i < str.length; i++) {
    const chrLower = lowercase.charAt(i);
    const chrString = str.charAt(i);
    if (chrLower !== chrString && i > 0) {
      notCamelcase += `${joinString}${lowercase.charAt(i)}`;
    } else {
      notCamelcase += chrString;
    }
  }
  return notCamelcase;
}
function looksLikeNumber(x) {
  if (x === null || x === void 0)
    return false;
  if (typeof x === "number")
    return true;
  if (/^0x[0-9a-f]+$/i.test(x))
    return true;
  if (/^0[^.]/.test(x))
    return false;
  return /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
}

// node_modules/yargs-parser/build/lib/tokenize-arg-string.js
function tokenizeArgString(argString) {
  if (Array.isArray(argString)) {
    return argString.map((e) => typeof e !== "string" ? e + "" : e);
  }
  argString = argString.trim();
  let i = 0;
  let prevC = null;
  let c = null;
  let opening = null;
  const args = [];
  for (let ii = 0; ii < argString.length; ii++) {
    prevC = c;
    c = argString.charAt(ii);
    if (c === " " && !opening) {
      if (!(prevC === " ")) {
        i++;
      }
      continue;
    }
    if (c === opening) {
      opening = null;
    } else if ((c === "'" || c === '"') && !opening) {
      opening = c;
    }
    if (!args[i])
      args[i] = "";
    args[i] += c;
  }
  return args;
}

// node_modules/yargs-parser/build/lib/yargs-parser-types.js
var DefaultValuesForTypeKey;
(function(DefaultValuesForTypeKey2) {
  DefaultValuesForTypeKey2["BOOLEAN"] = "boolean";
  DefaultValuesForTypeKey2["STRING"] = "string";
  DefaultValuesForTypeKey2["NUMBER"] = "number";
  DefaultValuesForTypeKey2["ARRAY"] = "array";
})(DefaultValuesForTypeKey || (DefaultValuesForTypeKey = {}));

// node_modules/yargs-parser/build/lib/yargs-parser.js
var mixin2;
var YargsParser = class {
  constructor(_mixin) {
    mixin2 = _mixin;
  }
  parse(argsInput, options) {
    const opts = Object.assign({
      alias: void 0,
      array: void 0,
      boolean: void 0,
      config: void 0,
      configObjects: void 0,
      configuration: void 0,
      coerce: void 0,
      count: void 0,
      default: void 0,
      envPrefix: void 0,
      narg: void 0,
      normalize: void 0,
      string: void 0,
      number: void 0,
      __: void 0,
      key: void 0
    }, options);
    const args = tokenizeArgString(argsInput);
    const inputIsString = typeof argsInput === "string";
    const aliases = combineAliases(Object.assign(/* @__PURE__ */ Object.create(null), opts.alias));
    const configuration = Object.assign({
      "boolean-negation": true,
      "camel-case-expansion": true,
      "combine-arrays": false,
      "dot-notation": true,
      "duplicate-arguments-array": true,
      "flatten-duplicate-arrays": true,
      "greedy-arrays": true,
      "halt-at-non-option": false,
      "nargs-eats-options": false,
      "negation-prefix": "no-",
      "parse-numbers": true,
      "parse-positional-numbers": true,
      "populate--": false,
      "set-placeholder-key": false,
      "short-option-groups": true,
      "strip-aliased": false,
      "strip-dashed": false,
      "unknown-options-as-args": false
    }, opts.configuration);
    const defaults = Object.assign(/* @__PURE__ */ Object.create(null), opts.default);
    const configObjects = opts.configObjects || [];
    const envPrefix = opts.envPrefix;
    const notFlagsOption = configuration["populate--"];
    const notFlagsArgv = notFlagsOption ? "--" : "_";
    const newAliases = /* @__PURE__ */ Object.create(null);
    const defaulted = /* @__PURE__ */ Object.create(null);
    const __ = opts.__ || mixin2.format;
    const flags = {
      aliases: /* @__PURE__ */ Object.create(null),
      arrays: /* @__PURE__ */ Object.create(null),
      bools: /* @__PURE__ */ Object.create(null),
      strings: /* @__PURE__ */ Object.create(null),
      numbers: /* @__PURE__ */ Object.create(null),
      counts: /* @__PURE__ */ Object.create(null),
      normalize: /* @__PURE__ */ Object.create(null),
      configs: /* @__PURE__ */ Object.create(null),
      nargs: /* @__PURE__ */ Object.create(null),
      coercions: /* @__PURE__ */ Object.create(null),
      keys: []
    };
    const negative = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/;
    const negatedBoolean = new RegExp("^--" + configuration["negation-prefix"] + "(.+)");
    [].concat(opts.array || []).filter(Boolean).forEach(function(opt) {
      const key = typeof opt === "object" ? opt.key : opt;
      const assignment = Object.keys(opt).map(function(key2) {
        const arrayFlagKeys = {
          boolean: "bools",
          string: "strings",
          number: "numbers"
        };
        return arrayFlagKeys[key2];
      }).filter(Boolean).pop();
      if (assignment) {
        flags[assignment][key] = true;
      }
      flags.arrays[key] = true;
      flags.keys.push(key);
    });
    [].concat(opts.boolean || []).filter(Boolean).forEach(function(key) {
      flags.bools[key] = true;
      flags.keys.push(key);
    });
    [].concat(opts.string || []).filter(Boolean).forEach(function(key) {
      flags.strings[key] = true;
      flags.keys.push(key);
    });
    [].concat(opts.number || []).filter(Boolean).forEach(function(key) {
      flags.numbers[key] = true;
      flags.keys.push(key);
    });
    [].concat(opts.count || []).filter(Boolean).forEach(function(key) {
      flags.counts[key] = true;
      flags.keys.push(key);
    });
    [].concat(opts.normalize || []).filter(Boolean).forEach(function(key) {
      flags.normalize[key] = true;
      flags.keys.push(key);
    });
    if (typeof opts.narg === "object") {
      Object.entries(opts.narg).forEach(([key, value]) => {
        if (typeof value === "number") {
          flags.nargs[key] = value;
          flags.keys.push(key);
        }
      });
    }
    if (typeof opts.coerce === "object") {
      Object.entries(opts.coerce).forEach(([key, value]) => {
        if (typeof value === "function") {
          flags.coercions[key] = value;
          flags.keys.push(key);
        }
      });
    }
    if (typeof opts.config !== "undefined") {
      if (Array.isArray(opts.config) || typeof opts.config === "string") {
        ;
        [].concat(opts.config).filter(Boolean).forEach(function(key) {
          flags.configs[key] = true;
        });
      } else if (typeof opts.config === "object") {
        Object.entries(opts.config).forEach(([key, value]) => {
          if (typeof value === "boolean" || typeof value === "function") {
            flags.configs[key] = value;
          }
        });
      }
    }
    extendAliases(opts.key, aliases, opts.default, flags.arrays);
    Object.keys(defaults).forEach(function(key) {
      (flags.aliases[key] || []).forEach(function(alias) {
        defaults[alias] = defaults[key];
      });
    });
    let error = null;
    checkConfiguration();
    let notFlags = [];
    const argv = Object.assign(/* @__PURE__ */ Object.create(null), { _: [] });
    const argvReturn = {};
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const truncatedArg = arg.replace(/^-{3,}/, "---");
      let broken;
      let key;
      let letters;
      let m;
      let next;
      let value;
      if (arg !== "--" && /^-/.test(arg) && isUnknownOptionAsArg(arg)) {
        pushPositional(arg);
      } else if (truncatedArg.match(/^---+(=|$)/)) {
        pushPositional(arg);
        continue;
      } else if (arg.match(/^--.+=/) || !configuration["short-option-groups"] && arg.match(/^-.+=/)) {
        m = arg.match(/^--?([^=]+)=([\s\S]*)$/);
        if (m !== null && Array.isArray(m) && m.length >= 3) {
          if (checkAllAliases(m[1], flags.arrays)) {
            i = eatArray(i, m[1], args, m[2]);
          } else if (checkAllAliases(m[1], flags.nargs) !== false) {
            i = eatNargs(i, m[1], args, m[2]);
          } else {
            setArg(m[1], m[2], true);
          }
        }
      } else if (arg.match(negatedBoolean) && configuration["boolean-negation"]) {
        m = arg.match(negatedBoolean);
        if (m !== null && Array.isArray(m) && m.length >= 2) {
          key = m[1];
          setArg(key, checkAllAliases(key, flags.arrays) ? [false] : false);
        }
      } else if (arg.match(/^--.+/) || !configuration["short-option-groups"] && arg.match(/^-[^-]+/)) {
        m = arg.match(/^--?(.+)/);
        if (m !== null && Array.isArray(m) && m.length >= 2) {
          key = m[1];
          if (checkAllAliases(key, flags.arrays)) {
            i = eatArray(i, key, args);
          } else if (checkAllAliases(key, flags.nargs) !== false) {
            i = eatNargs(i, key, args);
          } else {
            next = args[i + 1];
            if (next !== void 0 && (!next.match(/^-/) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
              setArg(key, next);
              i++;
            } else if (/^(true|false)$/.test(next)) {
              setArg(key, next);
              i++;
            } else {
              setArg(key, defaultValue(key));
            }
          }
        }
      } else if (arg.match(/^-.\..+=/)) {
        m = arg.match(/^-([^=]+)=([\s\S]*)$/);
        if (m !== null && Array.isArray(m) && m.length >= 3) {
          setArg(m[1], m[2]);
        }
      } else if (arg.match(/^-.\..+/) && !arg.match(negative)) {
        next = args[i + 1];
        m = arg.match(/^-(.\..+)/);
        if (m !== null && Array.isArray(m) && m.length >= 2) {
          key = m[1];
          if (next !== void 0 && !next.match(/^-/) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
            setArg(key, next);
            i++;
          } else {
            setArg(key, defaultValue(key));
          }
        }
      } else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
        letters = arg.slice(1, -1).split("");
        broken = false;
        for (let j = 0; j < letters.length; j++) {
          next = arg.slice(j + 2);
          if (letters[j + 1] && letters[j + 1] === "=") {
            value = arg.slice(j + 3);
            key = letters[j];
            if (checkAllAliases(key, flags.arrays)) {
              i = eatArray(i, key, args, value);
            } else if (checkAllAliases(key, flags.nargs) !== false) {
              i = eatNargs(i, key, args, value);
            } else {
              setArg(key, value);
            }
            broken = true;
            break;
          }
          if (next === "-") {
            setArg(letters[j], next);
            continue;
          }
          if (/[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) && checkAllAliases(next, flags.bools) === false) {
            setArg(letters[j], next);
            broken = true;
            break;
          }
          if (letters[j + 1] && letters[j + 1].match(/\W/)) {
            setArg(letters[j], next);
            broken = true;
            break;
          } else {
            setArg(letters[j], defaultValue(letters[j]));
          }
        }
        key = arg.slice(-1)[0];
        if (!broken && key !== "-") {
          if (checkAllAliases(key, flags.arrays)) {
            i = eatArray(i, key, args);
          } else if (checkAllAliases(key, flags.nargs) !== false) {
            i = eatNargs(i, key, args);
          } else {
            next = args[i + 1];
            if (next !== void 0 && (!/^(-|--)[^-]/.test(next) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
              setArg(key, next);
              i++;
            } else if (/^(true|false)$/.test(next)) {
              setArg(key, next);
              i++;
            } else {
              setArg(key, defaultValue(key));
            }
          }
        }
      } else if (arg.match(/^-[0-9]$/) && arg.match(negative) && checkAllAliases(arg.slice(1), flags.bools)) {
        key = arg.slice(1);
        setArg(key, defaultValue(key));
      } else if (arg === "--") {
        notFlags = args.slice(i + 1);
        break;
      } else if (configuration["halt-at-non-option"]) {
        notFlags = args.slice(i);
        break;
      } else {
        pushPositional(arg);
      }
    }
    applyEnvVars(argv, true);
    applyEnvVars(argv, false);
    setConfig(argv);
    setConfigObjects();
    applyDefaultsAndAliases(argv, flags.aliases, defaults, true);
    applyCoercions(argv);
    if (configuration["set-placeholder-key"])
      setPlaceholderKeys(argv);
    Object.keys(flags.counts).forEach(function(key) {
      if (!hasKey(argv, key.split(".")))
        setArg(key, 0);
    });
    if (notFlagsOption && notFlags.length)
      argv[notFlagsArgv] = [];
    notFlags.forEach(function(key) {
      argv[notFlagsArgv].push(key);
    });
    if (configuration["camel-case-expansion"] && configuration["strip-dashed"]) {
      Object.keys(argv).filter((key) => key !== "--" && key.includes("-")).forEach((key) => {
        delete argv[key];
      });
    }
    if (configuration["strip-aliased"]) {
      ;
      [].concat(...Object.keys(aliases).map((k) => aliases[k])).forEach((alias) => {
        if (configuration["camel-case-expansion"] && alias.includes("-")) {
          delete argv[alias.split(".").map((prop) => camelCase(prop)).join(".")];
        }
        delete argv[alias];
      });
    }
    function pushPositional(arg) {
      const maybeCoercedNumber = maybeCoerceNumber("_", arg);
      if (typeof maybeCoercedNumber === "string" || typeof maybeCoercedNumber === "number") {
        argv._.push(maybeCoercedNumber);
      }
    }
    function eatNargs(i, key, args2, argAfterEqualSign) {
      let ii;
      let toEat = checkAllAliases(key, flags.nargs);
      toEat = typeof toEat !== "number" || isNaN(toEat) ? 1 : toEat;
      if (toEat === 0) {
        if (!isUndefined(argAfterEqualSign)) {
          error = Error(__("Argument unexpected for: %s", key));
        }
        setArg(key, defaultValue(key));
        return i;
      }
      let available = isUndefined(argAfterEqualSign) ? 0 : 1;
      if (configuration["nargs-eats-options"]) {
        if (args2.length - (i + 1) + available < toEat) {
          error = Error(__("Not enough arguments following: %s", key));
        }
        available = toEat;
      } else {
        for (ii = i + 1; ii < args2.length; ii++) {
          if (!args2[ii].match(/^-[^0-9]/) || args2[ii].match(negative) || isUnknownOptionAsArg(args2[ii]))
            available++;
          else
            break;
        }
        if (available < toEat)
          error = Error(__("Not enough arguments following: %s", key));
      }
      let consumed = Math.min(available, toEat);
      if (!isUndefined(argAfterEqualSign) && consumed > 0) {
        setArg(key, argAfterEqualSign);
        consumed--;
      }
      for (ii = i + 1; ii < consumed + i + 1; ii++) {
        setArg(key, args2[ii]);
      }
      return i + consumed;
    }
    function eatArray(i, key, args2, argAfterEqualSign) {
      let argsToSet = [];
      let next = argAfterEqualSign || args2[i + 1];
      const nargsCount = checkAllAliases(key, flags.nargs);
      if (checkAllAliases(key, flags.bools) && !/^(true|false)$/.test(next)) {
        argsToSet.push(true);
      } else if (isUndefined(next) || isUndefined(argAfterEqualSign) && /^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next)) {
        if (defaults[key] !== void 0) {
          const defVal = defaults[key];
          argsToSet = Array.isArray(defVal) ? defVal : [defVal];
        }
      } else {
        if (!isUndefined(argAfterEqualSign)) {
          argsToSet.push(processValue(key, argAfterEqualSign, true));
        }
        for (let ii = i + 1; ii < args2.length; ii++) {
          if (!configuration["greedy-arrays"] && argsToSet.length > 0 || nargsCount && typeof nargsCount === "number" && argsToSet.length >= nargsCount)
            break;
          next = args2[ii];
          if (/^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next))
            break;
          i = ii;
          argsToSet.push(processValue(key, next, inputIsString));
        }
      }
      if (typeof nargsCount === "number" && (nargsCount && argsToSet.length < nargsCount || isNaN(nargsCount) && argsToSet.length === 0)) {
        error = Error(__("Not enough arguments following: %s", key));
      }
      setArg(key, argsToSet);
      return i;
    }
    function setArg(key, val, shouldStripQuotes = inputIsString) {
      if (/-/.test(key) && configuration["camel-case-expansion"]) {
        const alias = key.split(".").map(function(prop) {
          return camelCase(prop);
        }).join(".");
        addNewAlias(key, alias);
      }
      const value = processValue(key, val, shouldStripQuotes);
      const splitKey = key.split(".");
      setKey(argv, splitKey, value);
      if (flags.aliases[key]) {
        flags.aliases[key].forEach(function(x) {
          const keyProperties = x.split(".");
          setKey(argv, keyProperties, value);
        });
      }
      if (splitKey.length > 1 && configuration["dot-notation"]) {
        ;
        (flags.aliases[splitKey[0]] || []).forEach(function(x) {
          let keyProperties = x.split(".");
          const a = [].concat(splitKey);
          a.shift();
          keyProperties = keyProperties.concat(a);
          if (!(flags.aliases[key] || []).includes(keyProperties.join("."))) {
            setKey(argv, keyProperties, value);
          }
        });
      }
      if (checkAllAliases(key, flags.normalize) && !checkAllAliases(key, flags.arrays)) {
        const keys = [key].concat(flags.aliases[key] || []);
        keys.forEach(function(key2) {
          Object.defineProperty(argvReturn, key2, {
            enumerable: true,
            get() {
              return val;
            },
            set(value2) {
              val = typeof value2 === "string" ? mixin2.normalize(value2) : value2;
            }
          });
        });
      }
    }
    function addNewAlias(key, alias) {
      if (!(flags.aliases[key] && flags.aliases[key].length)) {
        flags.aliases[key] = [alias];
        newAliases[alias] = true;
      }
      if (!(flags.aliases[alias] && flags.aliases[alias].length)) {
        addNewAlias(alias, key);
      }
    }
    function processValue(key, val, shouldStripQuotes) {
      if (shouldStripQuotes) {
        val = stripQuotes(val);
      }
      if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
        if (typeof val === "string")
          val = val === "true";
      }
      let value = Array.isArray(val) ? val.map(function(v) {
        return maybeCoerceNumber(key, v);
      }) : maybeCoerceNumber(key, val);
      if (checkAllAliases(key, flags.counts) && (isUndefined(value) || typeof value === "boolean")) {
        value = increment();
      }
      if (checkAllAliases(key, flags.normalize) && checkAllAliases(key, flags.arrays)) {
        if (Array.isArray(val))
          value = val.map((val2) => {
            return mixin2.normalize(val2);
          });
        else
          value = mixin2.normalize(val);
      }
      return value;
    }
    function maybeCoerceNumber(key, value) {
      if (!configuration["parse-positional-numbers"] && key === "_")
        return value;
      if (!checkAllAliases(key, flags.strings) && !checkAllAliases(key, flags.bools) && !Array.isArray(value)) {
        const shouldCoerceNumber = looksLikeNumber(value) && configuration["parse-numbers"] && Number.isSafeInteger(Math.floor(parseFloat(`${value}`)));
        if (shouldCoerceNumber || !isUndefined(value) && checkAllAliases(key, flags.numbers)) {
          value = Number(value);
        }
      }
      return value;
    }
    function setConfig(argv2) {
      const configLookup = /* @__PURE__ */ Object.create(null);
      applyDefaultsAndAliases(configLookup, flags.aliases, defaults);
      Object.keys(flags.configs).forEach(function(configKey) {
        const configPath = argv2[configKey] || configLookup[configKey];
        if (configPath) {
          try {
            let config = null;
            const resolvedConfigPath = mixin2.resolve(mixin2.cwd(), configPath);
            const resolveConfig = flags.configs[configKey];
            if (typeof resolveConfig === "function") {
              try {
                config = resolveConfig(resolvedConfigPath);
              } catch (e) {
                config = e;
              }
              if (config instanceof Error) {
                error = config;
                return;
              }
            } else {
              config = mixin2.require(resolvedConfigPath);
            }
            setConfigObject(config);
          } catch (ex) {
            if (ex.name === "PermissionDenied")
              error = ex;
            else if (argv2[configKey])
              error = Error(__("Invalid JSON config file: %s", configPath));
          }
        }
      });
    }
    function setConfigObject(config, prev) {
      Object.keys(config).forEach(function(key) {
        const value = config[key];
        const fullKey = prev ? prev + "." + key : key;
        if (typeof value === "object" && value !== null && !Array.isArray(value) && configuration["dot-notation"]) {
          setConfigObject(value, fullKey);
        } else {
          if (!hasKey(argv, fullKey.split(".")) || checkAllAliases(fullKey, flags.arrays) && configuration["combine-arrays"]) {
            setArg(fullKey, value);
          }
        }
      });
    }
    function setConfigObjects() {
      if (typeof configObjects !== "undefined") {
        configObjects.forEach(function(configObject) {
          setConfigObject(configObject);
        });
      }
    }
    function applyEnvVars(argv2, configOnly) {
      if (typeof envPrefix === "undefined")
        return;
      const prefix = typeof envPrefix === "string" ? envPrefix : "";
      const env2 = mixin2.env();
      Object.keys(env2).forEach(function(envVar) {
        if (prefix === "" || envVar.lastIndexOf(prefix, 0) === 0) {
          const keys = envVar.split("__").map(function(key, i) {
            if (i === 0) {
              key = key.substring(prefix.length);
            }
            return camelCase(key);
          });
          if ((configOnly && flags.configs[keys.join(".")] || !configOnly) && !hasKey(argv2, keys)) {
            setArg(keys.join("."), env2[envVar]);
          }
        }
      });
    }
    function applyCoercions(argv2) {
      let coerce;
      const applied = /* @__PURE__ */ new Set();
      Object.keys(argv2).forEach(function(key) {
        if (!applied.has(key)) {
          coerce = checkAllAliases(key, flags.coercions);
          if (typeof coerce === "function") {
            try {
              const value = maybeCoerceNumber(key, coerce(argv2[key]));
              [].concat(flags.aliases[key] || [], key).forEach((ali) => {
                applied.add(ali);
                argv2[ali] = value;
              });
            } catch (err) {
              error = err;
            }
          }
        }
      });
    }
    function setPlaceholderKeys(argv2) {
      flags.keys.forEach((key) => {
        if (~key.indexOf("."))
          return;
        if (typeof argv2[key] === "undefined")
          argv2[key] = void 0;
      });
      return argv2;
    }
    function applyDefaultsAndAliases(obj, aliases2, defaults2, canLog = false) {
      Object.keys(defaults2).forEach(function(key) {
        if (!hasKey(obj, key.split("."))) {
          setKey(obj, key.split("."), defaults2[key]);
          if (canLog)
            defaulted[key] = true;
          (aliases2[key] || []).forEach(function(x) {
            if (hasKey(obj, x.split(".")))
              return;
            setKey(obj, x.split("."), defaults2[key]);
          });
        }
      });
    }
    function hasKey(obj, keys) {
      let o = obj;
      if (!configuration["dot-notation"])
        keys = [keys.join(".")];
      keys.slice(0, -1).forEach(function(key2) {
        o = o[key2] || {};
      });
      const key = keys[keys.length - 1];
      if (typeof o !== "object")
        return false;
      else
        return key in o;
    }
    function setKey(obj, keys, value) {
      let o = obj;
      if (!configuration["dot-notation"])
        keys = [keys.join(".")];
      keys.slice(0, -1).forEach(function(key2) {
        key2 = sanitizeKey(key2);
        if (typeof o === "object" && o[key2] === void 0) {
          o[key2] = {};
        }
        if (typeof o[key2] !== "object" || Array.isArray(o[key2])) {
          if (Array.isArray(o[key2])) {
            o[key2].push({});
          } else {
            o[key2] = [o[key2], {}];
          }
          o = o[key2][o[key2].length - 1];
        } else {
          o = o[key2];
        }
      });
      const key = sanitizeKey(keys[keys.length - 1]);
      const isTypeArray = checkAllAliases(keys.join("."), flags.arrays);
      const isValueArray = Array.isArray(value);
      let duplicate = configuration["duplicate-arguments-array"];
      if (!duplicate && checkAllAliases(key, flags.nargs)) {
        duplicate = true;
        if (!isUndefined(o[key]) && flags.nargs[key] === 1 || Array.isArray(o[key]) && o[key].length === flags.nargs[key]) {
          o[key] = void 0;
        }
      }
      if (value === increment()) {
        o[key] = increment(o[key]);
      } else if (Array.isArray(o[key])) {
        if (duplicate && isTypeArray && isValueArray) {
          o[key] = configuration["flatten-duplicate-arrays"] ? o[key].concat(value) : (Array.isArray(o[key][0]) ? o[key] : [o[key]]).concat([value]);
        } else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) {
          o[key] = value;
        } else {
          o[key] = o[key].concat([value]);
        }
      } else if (o[key] === void 0 && isTypeArray) {
        o[key] = isValueArray ? value : [value];
      } else if (duplicate && !(o[key] === void 0 || checkAllAliases(key, flags.counts) || checkAllAliases(key, flags.bools))) {
        o[key] = [o[key], value];
      } else {
        o[key] = value;
      }
    }
    function extendAliases(...args2) {
      args2.forEach(function(obj) {
        Object.keys(obj || {}).forEach(function(key) {
          if (flags.aliases[key])
            return;
          flags.aliases[key] = [].concat(aliases[key] || []);
          flags.aliases[key].concat(key).forEach(function(x) {
            if (/-/.test(x) && configuration["camel-case-expansion"]) {
              const c = camelCase(x);
              if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                flags.aliases[key].push(c);
                newAliases[c] = true;
              }
            }
          });
          flags.aliases[key].concat(key).forEach(function(x) {
            if (x.length > 1 && /[A-Z]/.test(x) && configuration["camel-case-expansion"]) {
              const c = decamelize(x, "-");
              if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                flags.aliases[key].push(c);
                newAliases[c] = true;
              }
            }
          });
          flags.aliases[key].forEach(function(x) {
            flags.aliases[x] = [key].concat(flags.aliases[key].filter(function(y) {
              return x !== y;
            }));
          });
        });
      });
    }
    function checkAllAliases(key, flag) {
      const toCheck = [].concat(flags.aliases[key] || [], key);
      const keys = Object.keys(flag);
      const setAlias = toCheck.find((key2) => keys.includes(key2));
      return setAlias ? flag[setAlias] : false;
    }
    function hasAnyFlag(key) {
      const flagsKeys = Object.keys(flags);
      const toCheck = [].concat(flagsKeys.map((k) => flags[k]));
      return toCheck.some(function(flag) {
        return Array.isArray(flag) ? flag.includes(key) : flag[key];
      });
    }
    function hasFlagsMatching(arg, ...patterns) {
      const toCheck = [].concat(...patterns);
      return toCheck.some(function(pattern) {
        const match = arg.match(pattern);
        return match && hasAnyFlag(match[1]);
      });
    }
    function hasAllShortFlags(arg) {
      if (arg.match(negative) || !arg.match(/^-[^-]+/)) {
        return false;
      }
      let hasAllFlags = true;
      let next;
      const letters = arg.slice(1).split("");
      for (let j = 0; j < letters.length; j++) {
        next = arg.slice(j + 2);
        if (!hasAnyFlag(letters[j])) {
          hasAllFlags = false;
          break;
        }
        if (letters[j + 1] && letters[j + 1] === "=" || next === "-" || /[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) || letters[j + 1] && letters[j + 1].match(/\W/)) {
          break;
        }
      }
      return hasAllFlags;
    }
    function isUnknownOptionAsArg(arg) {
      return configuration["unknown-options-as-args"] && isUnknownOption(arg);
    }
    function isUnknownOption(arg) {
      arg = arg.replace(/^-{3,}/, "--");
      if (arg.match(negative)) {
        return false;
      }
      if (hasAllShortFlags(arg)) {
        return false;
      }
      const flagWithEquals = /^-+([^=]+?)=[\s\S]*$/;
      const normalFlag = /^-+([^=]+?)$/;
      const flagEndingInHyphen = /^-+([^=]+?)-$/;
      const flagEndingInDigits = /^-+([^=]+?\d+)$/;
      const flagEndingInNonWordCharacters = /^-+([^=]+?)\W+.*$/;
      return !hasFlagsMatching(arg, flagWithEquals, negatedBoolean, normalFlag, flagEndingInHyphen, flagEndingInDigits, flagEndingInNonWordCharacters);
    }
    function defaultValue(key) {
      if (!checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts) && `${key}` in defaults) {
        return defaults[key];
      } else {
        return defaultForType(guessType2(key));
      }
    }
    function defaultForType(type) {
      const def = {
        [DefaultValuesForTypeKey.BOOLEAN]: true,
        [DefaultValuesForTypeKey.STRING]: "",
        [DefaultValuesForTypeKey.NUMBER]: void 0,
        [DefaultValuesForTypeKey.ARRAY]: []
      };
      return def[type];
    }
    function guessType2(key) {
      let type = DefaultValuesForTypeKey.BOOLEAN;
      if (checkAllAliases(key, flags.strings))
        type = DefaultValuesForTypeKey.STRING;
      else if (checkAllAliases(key, flags.numbers))
        type = DefaultValuesForTypeKey.NUMBER;
      else if (checkAllAliases(key, flags.bools))
        type = DefaultValuesForTypeKey.BOOLEAN;
      else if (checkAllAliases(key, flags.arrays))
        type = DefaultValuesForTypeKey.ARRAY;
      return type;
    }
    function isUndefined(num) {
      return num === void 0;
    }
    function checkConfiguration() {
      Object.keys(flags.counts).find((key) => {
        if (checkAllAliases(key, flags.arrays)) {
          error = Error(__("Invalid configuration: %s, opts.count excludes opts.array.", key));
          return true;
        } else if (checkAllAliases(key, flags.nargs)) {
          error = Error(__("Invalid configuration: %s, opts.count excludes opts.narg.", key));
          return true;
        }
        return false;
      });
    }
    return {
      aliases: Object.assign({}, flags.aliases),
      argv: Object.assign(argvReturn, argv),
      configuration,
      defaulted: Object.assign({}, defaulted),
      error,
      newAliases: Object.assign({}, newAliases)
    };
  }
};
function combineAliases(aliases) {
  const aliasArrays = [];
  const combined = /* @__PURE__ */ Object.create(null);
  let change = true;
  Object.keys(aliases).forEach(function(key) {
    aliasArrays.push([].concat(aliases[key], key));
  });
  while (change) {
    change = false;
    for (let i = 0; i < aliasArrays.length; i++) {
      for (let ii = i + 1; ii < aliasArrays.length; ii++) {
        const intersect = aliasArrays[i].filter(function(v) {
          return aliasArrays[ii].indexOf(v) !== -1;
        });
        if (intersect.length) {
          aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii]);
          aliasArrays.splice(ii, 1);
          change = true;
          break;
        }
      }
    }
  }
  aliasArrays.forEach(function(aliasArray) {
    aliasArray = aliasArray.filter(function(v, i, self) {
      return self.indexOf(v) === i;
    });
    const lastAlias = aliasArray.pop();
    if (lastAlias !== void 0 && typeof lastAlias === "string") {
      combined[lastAlias] = aliasArray;
    }
  });
  return combined;
}
function increment(orig) {
  return orig !== void 0 ? orig + 1 : 1;
}
function sanitizeKey(key) {
  if (key === "__proto__")
    return "___proto___";
  return key;
}
function stripQuotes(val) {
  return typeof val === "string" && (val[0] === "'" || val[0] === '"') && val[val.length - 1] === val[0] ? val.substring(1, val.length - 1) : val;
}

// node_modules/yargs-parser/build/lib/index.js
var _a, _b, _c;
import { format } from "util";
import { normalize, resolve as resolve2 } from "path";
import { readFileSync } from "fs";
var minNodeVersion = process && process.env && process.env.YARGS_MIN_NODE_VERSION ? Number(process.env.YARGS_MIN_NODE_VERSION) : 12;
var nodeVersion = (_b = (_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node) !== null && _b !== void 0 ? _b : (_c = process === null || process === void 0 ? void 0 : process.version) === null || _c === void 0 ? void 0 : _c.slice(1);
if (nodeVersion) {
  const major = Number(nodeVersion.match(/^([^.]+)/)[1]);
  if (major < minNodeVersion) {
    throw Error(`yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);
  }
}
var env = process ? process.env : {};
var parser = new YargsParser({
  cwd: process.cwd,
  env: () => {
    return env;
  },
  format,
  normalize,
  resolve: resolve2,
  require: (path2) => {
    if (typeof __require !== "undefined") {
      return __require(path2);
    } else if (path2.match(/\.json$/)) {
      return JSON.parse(readFileSync(path2, "utf8"));
    } else {
      throw Error("only .json config files are supported in ESM");
    }
  }
});
var yargsParser = function Parser(args, opts) {
  const result = parser.parse(args.slice(), opts);
  return result.argv;
};
yargsParser.detailed = function(args, opts) {
  return parser.parse(args.slice(), opts);
};
yargsParser.camelCase = camelCase;
yargsParser.decamelize = decamelize;
yargsParser.looksLikeNumber = looksLikeNumber;
var lib_default = yargsParser;

// node_modules/yargs/build/lib/utils/process-argv.js
function getProcessArgvBinIndex() {
  if (isBundledElectronApp())
    return 0;
  return 1;
}
function isBundledElectronApp() {
  return isElectronApp() && !process.defaultApp;
}
function isElectronApp() {
  return !!process.versions.electron;
}
function hideBin(argv) {
  return argv.slice(getProcessArgvBinIndex() + 1);
}
function getProcessArgvBin() {
  return process.argv[getProcessArgvBinIndex()];
}

// node_modules/yargs/build/lib/yerror.js
var YError = class extends Error {
  constructor(msg) {
    super(msg || "yargs error");
    this.name = "YError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, YError);
    }
  }
};

// node_modules/y18n/build/lib/platform-shims/node.js
import { readFileSync as readFileSync2, statSync as statSync2, writeFile } from "fs";
import { format as format2 } from "util";
import { resolve as resolve3 } from "path";
var node_default = {
  fs: {
    readFileSync: readFileSync2,
    writeFile
  },
  format: format2,
  resolve: resolve3,
  exists: (file) => {
    try {
      return statSync2(file).isFile();
    } catch (err) {
      return false;
    }
  }
};

// node_modules/y18n/build/lib/index.js
var shim;
var Y18N = class {
  constructor(opts) {
    opts = opts || {};
    this.directory = opts.directory || "./locales";
    this.updateFiles = typeof opts.updateFiles === "boolean" ? opts.updateFiles : true;
    this.locale = opts.locale || "en";
    this.fallbackToLanguage = typeof opts.fallbackToLanguage === "boolean" ? opts.fallbackToLanguage : true;
    this.cache = /* @__PURE__ */ Object.create(null);
    this.writeQueue = [];
  }
  __(...args) {
    if (typeof arguments[0] !== "string") {
      return this._taggedLiteral(arguments[0], ...arguments);
    }
    const str = args.shift();
    let cb = function() {
    };
    if (typeof args[args.length - 1] === "function")
      cb = args.pop();
    cb = cb || function() {
    };
    if (!this.cache[this.locale])
      this._readLocaleFile();
    if (!this.cache[this.locale][str] && this.updateFiles) {
      this.cache[this.locale][str] = str;
      this._enqueueWrite({
        directory: this.directory,
        locale: this.locale,
        cb
      });
    } else {
      cb();
    }
    return shim.format.apply(shim.format, [this.cache[this.locale][str] || str].concat(args));
  }
  __n() {
    const args = Array.prototype.slice.call(arguments);
    const singular = args.shift();
    const plural = args.shift();
    const quantity = args.shift();
    let cb = function() {
    };
    if (typeof args[args.length - 1] === "function")
      cb = args.pop();
    if (!this.cache[this.locale])
      this._readLocaleFile();
    let str = quantity === 1 ? singular : plural;
    if (this.cache[this.locale][singular]) {
      const entry = this.cache[this.locale][singular];
      str = entry[quantity === 1 ? "one" : "other"];
    }
    if (!this.cache[this.locale][singular] && this.updateFiles) {
      this.cache[this.locale][singular] = {
        one: singular,
        other: plural
      };
      this._enqueueWrite({
        directory: this.directory,
        locale: this.locale,
        cb
      });
    } else {
      cb();
    }
    const values = [str];
    if (~str.indexOf("%d"))
      values.push(quantity);
    return shim.format.apply(shim.format, values.concat(args));
  }
  setLocale(locale) {
    this.locale = locale;
  }
  getLocale() {
    return this.locale;
  }
  updateLocale(obj) {
    if (!this.cache[this.locale])
      this._readLocaleFile();
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        this.cache[this.locale][key] = obj[key];
      }
    }
  }
  _taggedLiteral(parts, ...args) {
    let str = "";
    parts.forEach(function(part, i) {
      const arg = args[i + 1];
      str += part;
      if (typeof arg !== "undefined") {
        str += "%s";
      }
    });
    return this.__.apply(this, [str].concat([].slice.call(args, 1)));
  }
  _enqueueWrite(work) {
    this.writeQueue.push(work);
    if (this.writeQueue.length === 1)
      this._processWriteQueue();
  }
  _processWriteQueue() {
    const _this = this;
    const work = this.writeQueue[0];
    const directory = work.directory;
    const locale = work.locale;
    const cb = work.cb;
    const languageFile = this._resolveLocaleFile(directory, locale);
    const serializedLocale = JSON.stringify(this.cache[locale], null, 2);
    shim.fs.writeFile(languageFile, serializedLocale, "utf-8", function(err) {
      _this.writeQueue.shift();
      if (_this.writeQueue.length > 0)
        _this._processWriteQueue();
      cb(err);
    });
  }
  _readLocaleFile() {
    let localeLookup = {};
    const languageFile = this._resolveLocaleFile(this.directory, this.locale);
    try {
      if (shim.fs.readFileSync) {
        localeLookup = JSON.parse(shim.fs.readFileSync(languageFile, "utf-8"));
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        err.message = "syntax error in " + languageFile;
      }
      if (err.code === "ENOENT")
        localeLookup = {};
      else
        throw err;
    }
    this.cache[this.locale] = localeLookup;
  }
  _resolveLocaleFile(directory, locale) {
    let file = shim.resolve(directory, "./", locale + ".json");
    if (this.fallbackToLanguage && !this._fileExistsSync(file) && ~locale.lastIndexOf("_")) {
      const languageFile = shim.resolve(directory, "./", locale.split("_")[0] + ".json");
      if (this._fileExistsSync(languageFile))
        file = languageFile;
    }
    return file;
  }
  _fileExistsSync(file) {
    return shim.exists(file);
  }
};
function y18n(opts, _shim) {
  shim = _shim;
  const y18n3 = new Y18N(opts);
  return {
    __: y18n3.__.bind(y18n3),
    __n: y18n3.__n.bind(y18n3),
    setLocale: y18n3.setLocale.bind(y18n3),
    getLocale: y18n3.getLocale.bind(y18n3),
    updateLocale: y18n3.updateLocale.bind(y18n3),
    locale: y18n3.locale
  };
}

// node_modules/y18n/index.mjs
var y18n2 = (opts) => {
  return y18n(opts, node_default);
};
var y18n_default = y18n2;

// node_modules/yargs/lib/platform-shims/esm.mjs
import { notStrictEqual, strictEqual } from "assert";
import { inspect } from "util";
import { readFileSync as readFileSync3 } from "fs";
import { fileURLToPath } from "url";
import { basename, dirname as dirname2, extname, relative, resolve as resolve4 } from "path";
var REQUIRE_ERROR = "require is not supported by ESM";
var REQUIRE_DIRECTORY_ERROR = "loading a directory of commands is not supported yet for ESM";
var __dirname;
try {
  __dirname = fileURLToPath(import.meta.url);
} catch (e) {
  __dirname = process.cwd();
}
var mainFilename = __dirname.substring(0, __dirname.lastIndexOf("node_modules"));
var esm_default = {
  assert: {
    notStrictEqual,
    strictEqual
  },
  cliui: ui,
  findUp: sync_default,
  getEnv: (key) => {
    return process.env[key];
  },
  inspect,
  getCallerFile: () => {
    throw new YError(REQUIRE_DIRECTORY_ERROR);
  },
  getProcessArgvBin,
  mainFilename: mainFilename || process.cwd(),
  Parser: lib_default,
  path: {
    basename,
    dirname: dirname2,
    extname,
    relative,
    resolve: resolve4
  },
  process: {
    argv: () => process.argv,
    cwd: process.cwd,
    emitWarning: (warning, type) => process.emitWarning(warning, type),
    execPath: () => process.execPath,
    exit: process.exit,
    nextTick: process.nextTick,
    stdColumns: typeof process.stdout.columns !== "undefined" ? process.stdout.columns : null
  },
  readFileSync: readFileSync3,
  require: () => {
    throw new YError(REQUIRE_ERROR);
  },
  requireDirectory: () => {
    throw new YError(REQUIRE_DIRECTORY_ERROR);
  },
  stringWidth: (str) => {
    return [...str].length;
  },
  y18n: y18n_default({
    directory: resolve4(__dirname, "../../../locales"),
    updateFiles: false
  })
};

// node_modules/yargs/build/lib/typings/common-types.js
function assertNotStrictEqual(actual, expected, shim3, message) {
  shim3.assert.notStrictEqual(actual, expected, message);
}
function assertSingleKey(actual, shim3) {
  shim3.assert.strictEqual(typeof actual, "string");
}
function objectKeys(object) {
  return Object.keys(object);
}

// node_modules/yargs/build/lib/utils/is-promise.js
function isPromise(maybePromise) {
  return !!maybePromise && !!maybePromise.then && typeof maybePromise.then === "function";
}

// node_modules/yargs/build/lib/parse-command.js
function parseCommand(cmd) {
  const extraSpacesStrippedCommand = cmd.replace(/\s{2,}/g, " ");
  const splitCommand = extraSpacesStrippedCommand.split(/\s+(?![^[]*]|[^<]*>)/);
  const bregex = /\.*[\][<>]/g;
  const firstCommand = splitCommand.shift();
  if (!firstCommand)
    throw new Error(`No command found in: ${cmd}`);
  const parsedCommand = {
    cmd: firstCommand.replace(bregex, ""),
    demanded: [],
    optional: []
  };
  splitCommand.forEach((cmd2, i) => {
    let variadic = false;
    cmd2 = cmd2.replace(/\s/g, "");
    if (/\.+[\]>]/.test(cmd2) && i === splitCommand.length - 1)
      variadic = true;
    if (/^\[/.test(cmd2)) {
      parsedCommand.optional.push({
        cmd: cmd2.replace(bregex, "").split("|"),
        variadic
      });
    } else {
      parsedCommand.demanded.push({
        cmd: cmd2.replace(bregex, "").split("|"),
        variadic
      });
    }
  });
  return parsedCommand;
}

// node_modules/yargs/build/lib/argsert.js
var positionName = ["first", "second", "third", "fourth", "fifth", "sixth"];
function argsert(arg1, arg2, arg3) {
  function parseArgs() {
    return typeof arg1 === "object" ? [{ demanded: [], optional: [] }, arg1, arg2] : [
      parseCommand(`cmd ${arg1}`),
      arg2,
      arg3
    ];
  }
  try {
    let position = 0;
    const [parsed, callerArguments, _length] = parseArgs();
    const args = [].slice.call(callerArguments);
    while (args.length && args[args.length - 1] === void 0)
      args.pop();
    const length = _length || args.length;
    if (length < parsed.demanded.length) {
      throw new YError(`Not enough arguments provided. Expected ${parsed.demanded.length} but received ${args.length}.`);
    }
    const totalCommands = parsed.demanded.length + parsed.optional.length;
    if (length > totalCommands) {
      throw new YError(`Too many arguments provided. Expected max ${totalCommands} but received ${length}.`);
    }
    parsed.demanded.forEach((demanded) => {
      const arg = args.shift();
      const observedType = guessType(arg);
      const matchingTypes = demanded.cmd.filter((type) => type === observedType || type === "*");
      if (matchingTypes.length === 0)
        argumentTypeError(observedType, demanded.cmd, position);
      position += 1;
    });
    parsed.optional.forEach((optional) => {
      if (args.length === 0)
        return;
      const arg = args.shift();
      const observedType = guessType(arg);
      const matchingTypes = optional.cmd.filter((type) => type === observedType || type === "*");
      if (matchingTypes.length === 0)
        argumentTypeError(observedType, optional.cmd, position);
      position += 1;
    });
  } catch (err) {
    console.warn(err.stack);
  }
}
function guessType(arg) {
  if (Array.isArray(arg)) {
    return "array";
  } else if (arg === null) {
    return "null";
  }
  return typeof arg;
}
function argumentTypeError(observedType, allowedTypes, position) {
  throw new YError(`Invalid ${positionName[position] || "manyith"} argument. Expected ${allowedTypes.join(" or ")} but received ${observedType}.`);
}

// node_modules/yargs/build/lib/middleware.js
var GlobalMiddleware = class {
  constructor(yargs) {
    this.globalMiddleware = [];
    this.frozens = [];
    this.yargs = yargs;
  }
  addMiddleware(callback, applyBeforeValidation, global = true, mutates = false) {
    argsert("<array|function> [boolean] [boolean] [boolean]", [callback, applyBeforeValidation, global], arguments.length);
    if (Array.isArray(callback)) {
      for (let i = 0; i < callback.length; i++) {
        if (typeof callback[i] !== "function") {
          throw Error("middleware must be a function");
        }
        const m = callback[i];
        m.applyBeforeValidation = applyBeforeValidation;
        m.global = global;
      }
      Array.prototype.push.apply(this.globalMiddleware, callback);
    } else if (typeof callback === "function") {
      const m = callback;
      m.applyBeforeValidation = applyBeforeValidation;
      m.global = global;
      m.mutates = mutates;
      this.globalMiddleware.push(callback);
    }
    return this.yargs;
  }
  addCoerceMiddleware(callback, option) {
    const aliases = this.yargs.getAliases();
    this.globalMiddleware = this.globalMiddleware.filter((m) => {
      const toCheck = [...aliases[option] || [], option];
      if (!m.option)
        return true;
      else
        return !toCheck.includes(m.option);
    });
    callback.option = option;
    return this.addMiddleware(callback, true, true, true);
  }
  getMiddleware() {
    return this.globalMiddleware;
  }
  freeze() {
    this.frozens.push([...this.globalMiddleware]);
  }
  unfreeze() {
    const frozen = this.frozens.pop();
    if (frozen !== void 0)
      this.globalMiddleware = frozen;
  }
  reset() {
    this.globalMiddleware = this.globalMiddleware.filter((m) => m.global);
  }
};
function commandMiddlewareFactory(commandMiddleware) {
  if (!commandMiddleware)
    return [];
  return commandMiddleware.map((middleware) => {
    middleware.applyBeforeValidation = false;
    return middleware;
  });
}
function applyMiddleware(argv, yargs, middlewares, beforeValidation) {
  return middlewares.reduce((acc, middleware) => {
    if (middleware.applyBeforeValidation !== beforeValidation) {
      return acc;
    }
    if (middleware.mutates) {
      if (middleware.applied)
        return acc;
      middleware.applied = true;
    }
    if (isPromise(acc)) {
      return acc.then((initialObj) => Promise.all([initialObj, middleware(initialObj, yargs)])).then(([initialObj, middlewareObj]) => Object.assign(initialObj, middlewareObj));
    } else {
      const result = middleware(acc, yargs);
      return isPromise(result) ? result.then((middlewareObj) => Object.assign(acc, middlewareObj)) : Object.assign(acc, result);
    }
  }, argv);
}

// node_modules/yargs/build/lib/utils/maybe-async-result.js
function maybeAsyncResult(getResult, resultHandler, errorHandler = (err) => {
  throw err;
}) {
  try {
    const result = isFunction(getResult) ? getResult() : getResult;
    return isPromise(result) ? result.then((result2) => resultHandler(result2)) : resultHandler(result);
  } catch (err) {
    return errorHandler(err);
  }
}
function isFunction(arg) {
  return typeof arg === "function";
}

// node_modules/yargs/build/lib/utils/which-module.js
function whichModule(exported) {
  if (typeof __require === "undefined")
    return null;
  for (let i = 0, files = Object.keys(__require.cache), mod; i < files.length; i++) {
    mod = __require.cache[files[i]];
    if (mod.exports === exported)
      return mod;
  }
  return null;
}

// node_modules/yargs/build/lib/command.js
var DEFAULT_MARKER = /(^\*)|(^\$0)/;
var CommandInstance = class {
  constructor(usage2, validation2, globalMiddleware, shim3) {
    this.requireCache = /* @__PURE__ */ new Set();
    this.handlers = {};
    this.aliasMap = {};
    this.frozens = [];
    this.shim = shim3;
    this.usage = usage2;
    this.globalMiddleware = globalMiddleware;
    this.validation = validation2;
  }
  addDirectory(dir, req, callerFile, opts) {
    opts = opts || {};
    if (typeof opts.recurse !== "boolean")
      opts.recurse = false;
    if (!Array.isArray(opts.extensions))
      opts.extensions = ["js"];
    const parentVisit = typeof opts.visit === "function" ? opts.visit : (o) => o;
    opts.visit = (obj, joined, filename) => {
      const visited = parentVisit(obj, joined, filename);
      if (visited) {
        if (this.requireCache.has(joined))
          return visited;
        else
          this.requireCache.add(joined);
        this.addHandler(visited);
      }
      return visited;
    };
    this.shim.requireDirectory({ require: req, filename: callerFile }, dir, opts);
  }
  addHandler(cmd, description, builder, handler, commandMiddleware, deprecated) {
    let aliases = [];
    const middlewares = commandMiddlewareFactory(commandMiddleware);
    handler = handler || (() => {
    });
    if (Array.isArray(cmd)) {
      if (isCommandAndAliases(cmd)) {
        [cmd, ...aliases] = cmd;
      } else {
        for (const command2 of cmd) {
          this.addHandler(command2);
        }
      }
    } else if (isCommandHandlerDefinition(cmd)) {
      let command2 = Array.isArray(cmd.command) || typeof cmd.command === "string" ? cmd.command : this.moduleName(cmd);
      if (cmd.aliases)
        command2 = [].concat(command2).concat(cmd.aliases);
      this.addHandler(command2, this.extractDesc(cmd), cmd.builder, cmd.handler, cmd.middlewares, cmd.deprecated);
      return;
    } else if (isCommandBuilderDefinition(builder)) {
      this.addHandler([cmd].concat(aliases), description, builder.builder, builder.handler, builder.middlewares, builder.deprecated);
      return;
    }
    if (typeof cmd === "string") {
      const parsedCommand = parseCommand(cmd);
      aliases = aliases.map((alias) => parseCommand(alias).cmd);
      let isDefault = false;
      const parsedAliases = [parsedCommand.cmd].concat(aliases).filter((c) => {
        if (DEFAULT_MARKER.test(c)) {
          isDefault = true;
          return false;
        }
        return true;
      });
      if (parsedAliases.length === 0 && isDefault)
        parsedAliases.push("$0");
      if (isDefault) {
        parsedCommand.cmd = parsedAliases[0];
        aliases = parsedAliases.slice(1);
        cmd = cmd.replace(DEFAULT_MARKER, parsedCommand.cmd);
      }
      aliases.forEach((alias) => {
        this.aliasMap[alias] = parsedCommand.cmd;
      });
      if (description !== false) {
        this.usage.command(cmd, description, isDefault, aliases, deprecated);
      }
      this.handlers[parsedCommand.cmd] = {
        original: cmd,
        description,
        handler,
        builder: builder || {},
        middlewares,
        deprecated,
        demanded: parsedCommand.demanded,
        optional: parsedCommand.optional
      };
      if (isDefault)
        this.defaultCommand = this.handlers[parsedCommand.cmd];
    }
  }
  getCommandHandlers() {
    return this.handlers;
  }
  getCommands() {
    return Object.keys(this.handlers).concat(Object.keys(this.aliasMap));
  }
  hasDefaultCommand() {
    return !!this.defaultCommand;
  }
  runCommand(command2, yargs, parsed, commandIndex, helpOnly, helpOrVersionSet) {
    const commandHandler = this.handlers[command2] || this.handlers[this.aliasMap[command2]] || this.defaultCommand;
    const currentContext = yargs.getInternalMethods().getContext();
    const parentCommands = currentContext.commands.slice();
    const isDefaultCommand = !command2;
    if (command2) {
      currentContext.commands.push(command2);
      currentContext.fullCommands.push(commandHandler.original);
    }
    const builderResult = this.applyBuilderUpdateUsageAndParse(isDefaultCommand, commandHandler, yargs, parsed.aliases, parentCommands, commandIndex, helpOnly, helpOrVersionSet);
    return isPromise(builderResult) ? builderResult.then((result) => this.applyMiddlewareAndGetResult(isDefaultCommand, commandHandler, result.innerArgv, currentContext, helpOnly, result.aliases, yargs)) : this.applyMiddlewareAndGetResult(isDefaultCommand, commandHandler, builderResult.innerArgv, currentContext, helpOnly, builderResult.aliases, yargs);
  }
  applyBuilderUpdateUsageAndParse(isDefaultCommand, commandHandler, yargs, aliases, parentCommands, commandIndex, helpOnly, helpOrVersionSet) {
    const builder = commandHandler.builder;
    let innerYargs = yargs;
    if (isCommandBuilderCallback(builder)) {
      yargs.getInternalMethods().getUsageInstance().freeze();
      const builderOutput = builder(yargs.getInternalMethods().reset(aliases), helpOrVersionSet);
      if (isPromise(builderOutput)) {
        return builderOutput.then((output) => {
          innerYargs = isYargsInstance(output) ? output : yargs;
          return this.parseAndUpdateUsage(isDefaultCommand, commandHandler, innerYargs, parentCommands, commandIndex, helpOnly);
        });
      }
    } else if (isCommandBuilderOptionDefinitions(builder)) {
      yargs.getInternalMethods().getUsageInstance().freeze();
      innerYargs = yargs.getInternalMethods().reset(aliases);
      Object.keys(commandHandler.builder).forEach((key) => {
        innerYargs.option(key, builder[key]);
      });
    }
    return this.parseAndUpdateUsage(isDefaultCommand, commandHandler, innerYargs, parentCommands, commandIndex, helpOnly);
  }
  parseAndUpdateUsage(isDefaultCommand, commandHandler, innerYargs, parentCommands, commandIndex, helpOnly) {
    if (isDefaultCommand)
      innerYargs.getInternalMethods().getUsageInstance().unfreeze(true);
    if (this.shouldUpdateUsage(innerYargs)) {
      innerYargs.getInternalMethods().getUsageInstance().usage(this.usageFromParentCommandsCommandHandler(parentCommands, commandHandler), commandHandler.description);
    }
    const innerArgv = innerYargs.getInternalMethods().runYargsParserAndExecuteCommands(null, void 0, true, commandIndex, helpOnly);
    return isPromise(innerArgv) ? innerArgv.then((argv) => ({
      aliases: innerYargs.parsed.aliases,
      innerArgv: argv
    })) : {
      aliases: innerYargs.parsed.aliases,
      innerArgv
    };
  }
  shouldUpdateUsage(yargs) {
    return !yargs.getInternalMethods().getUsageInstance().getUsageDisabled() && yargs.getInternalMethods().getUsageInstance().getUsage().length === 0;
  }
  usageFromParentCommandsCommandHandler(parentCommands, commandHandler) {
    const c = DEFAULT_MARKER.test(commandHandler.original) ? commandHandler.original.replace(DEFAULT_MARKER, "").trim() : commandHandler.original;
    const pc = parentCommands.filter((c2) => {
      return !DEFAULT_MARKER.test(c2);
    });
    pc.push(c);
    return `$0 ${pc.join(" ")}`;
  }
  handleValidationAndGetResult(isDefaultCommand, commandHandler, innerArgv, currentContext, aliases, yargs, middlewares, positionalMap) {
    if (!yargs.getInternalMethods().getHasOutput()) {
      const validation2 = yargs.getInternalMethods().runValidation(aliases, positionalMap, yargs.parsed.error, isDefaultCommand);
      innerArgv = maybeAsyncResult(innerArgv, (result) => {
        validation2(result);
        return result;
      });
    }
    if (commandHandler.handler && !yargs.getInternalMethods().getHasOutput()) {
      yargs.getInternalMethods().setHasOutput();
      const populateDoubleDash = !!yargs.getOptions().configuration["populate--"];
      yargs.getInternalMethods().postProcess(innerArgv, populateDoubleDash, false, false);
      innerArgv = applyMiddleware(innerArgv, yargs, middlewares, false);
      innerArgv = maybeAsyncResult(innerArgv, (result) => {
        const handlerResult = commandHandler.handler(result);
        return isPromise(handlerResult) ? handlerResult.then(() => result) : result;
      });
      if (!isDefaultCommand) {
        yargs.getInternalMethods().getUsageInstance().cacheHelpMessage();
      }
      if (isPromise(innerArgv) && !yargs.getInternalMethods().hasParseCallback()) {
        innerArgv.catch((error) => {
          try {
            yargs.getInternalMethods().getUsageInstance().fail(null, error);
          } catch (_err) {
          }
        });
      }
    }
    if (!isDefaultCommand) {
      currentContext.commands.pop();
      currentContext.fullCommands.pop();
    }
    return innerArgv;
  }
  applyMiddlewareAndGetResult(isDefaultCommand, commandHandler, innerArgv, currentContext, helpOnly, aliases, yargs) {
    let positionalMap = {};
    if (helpOnly)
      return innerArgv;
    if (!yargs.getInternalMethods().getHasOutput()) {
      positionalMap = this.populatePositionals(commandHandler, innerArgv, currentContext, yargs);
    }
    const middlewares = this.globalMiddleware.getMiddleware().slice(0).concat(commandHandler.middlewares);
    const maybePromiseArgv = applyMiddleware(innerArgv, yargs, middlewares, true);
    return isPromise(maybePromiseArgv) ? maybePromiseArgv.then((resolvedInnerArgv) => this.handleValidationAndGetResult(isDefaultCommand, commandHandler, resolvedInnerArgv, currentContext, aliases, yargs, middlewares, positionalMap)) : this.handleValidationAndGetResult(isDefaultCommand, commandHandler, maybePromiseArgv, currentContext, aliases, yargs, middlewares, positionalMap);
  }
  populatePositionals(commandHandler, argv, context, yargs) {
    argv._ = argv._.slice(context.commands.length);
    const demanded = commandHandler.demanded.slice(0);
    const optional = commandHandler.optional.slice(0);
    const positionalMap = {};
    this.validation.positionalCount(demanded.length, argv._.length);
    while (demanded.length) {
      const demand = demanded.shift();
      this.populatePositional(demand, argv, positionalMap);
    }
    while (optional.length) {
      const maybe = optional.shift();
      this.populatePositional(maybe, argv, positionalMap);
    }
    argv._ = context.commands.concat(argv._.map((a) => "" + a));
    this.postProcessPositionals(argv, positionalMap, this.cmdToParseOptions(commandHandler.original), yargs);
    return positionalMap;
  }
  populatePositional(positional, argv, positionalMap) {
    const cmd = positional.cmd[0];
    if (positional.variadic) {
      positionalMap[cmd] = argv._.splice(0).map(String);
    } else {
      if (argv._.length)
        positionalMap[cmd] = [String(argv._.shift())];
    }
  }
  cmdToParseOptions(cmdString) {
    const parseOptions = {
      array: [],
      default: {},
      alias: {},
      demand: {}
    };
    const parsed = parseCommand(cmdString);
    parsed.demanded.forEach((d) => {
      const [cmd, ...aliases] = d.cmd;
      if (d.variadic) {
        parseOptions.array.push(cmd);
        parseOptions.default[cmd] = [];
      }
      parseOptions.alias[cmd] = aliases;
      parseOptions.demand[cmd] = true;
    });
    parsed.optional.forEach((o) => {
      const [cmd, ...aliases] = o.cmd;
      if (o.variadic) {
        parseOptions.array.push(cmd);
        parseOptions.default[cmd] = [];
      }
      parseOptions.alias[cmd] = aliases;
    });
    return parseOptions;
  }
  postProcessPositionals(argv, positionalMap, parseOptions, yargs) {
    const options = Object.assign({}, yargs.getOptions());
    options.default = Object.assign(parseOptions.default, options.default);
    for (const key of Object.keys(parseOptions.alias)) {
      options.alias[key] = (options.alias[key] || []).concat(parseOptions.alias[key]);
    }
    options.array = options.array.concat(parseOptions.array);
    options.config = {};
    const unparsed = [];
    Object.keys(positionalMap).forEach((key) => {
      positionalMap[key].map((value) => {
        if (options.configuration["unknown-options-as-args"])
          options.key[key] = true;
        unparsed.push(`--${key}`);
        unparsed.push(value);
      });
    });
    if (!unparsed.length)
      return;
    const config = Object.assign({}, options.configuration, {
      "populate--": false
    });
    const parsed = this.shim.Parser.detailed(unparsed, Object.assign({}, options, {
      configuration: config
    }));
    if (parsed.error) {
      yargs.getInternalMethods().getUsageInstance().fail(parsed.error.message, parsed.error);
    } else {
      const positionalKeys = Object.keys(positionalMap);
      Object.keys(positionalMap).forEach((key) => {
        positionalKeys.push(...parsed.aliases[key]);
      });
      Object.keys(parsed.argv).forEach((key) => {
        if (positionalKeys.includes(key)) {
          if (!positionalMap[key])
            positionalMap[key] = parsed.argv[key];
          if (!this.isInConfigs(yargs, key) && !this.isDefaulted(yargs, key) && Object.prototype.hasOwnProperty.call(argv, key) && Object.prototype.hasOwnProperty.call(parsed.argv, key) && (Array.isArray(argv[key]) || Array.isArray(parsed.argv[key]))) {
            argv[key] = [].concat(argv[key], parsed.argv[key]);
          } else {
            argv[key] = parsed.argv[key];
          }
        }
      });
    }
  }
  isDefaulted(yargs, key) {
    const { default: defaults } = yargs.getOptions();
    return Object.prototype.hasOwnProperty.call(defaults, key) || Object.prototype.hasOwnProperty.call(defaults, this.shim.Parser.camelCase(key));
  }
  isInConfigs(yargs, key) {
    const { configObjects } = yargs.getOptions();
    return configObjects.some((c) => Object.prototype.hasOwnProperty.call(c, key)) || configObjects.some((c) => Object.prototype.hasOwnProperty.call(c, this.shim.Parser.camelCase(key)));
  }
  runDefaultBuilderOn(yargs) {
    if (!this.defaultCommand)
      return;
    if (this.shouldUpdateUsage(yargs)) {
      const commandString = DEFAULT_MARKER.test(this.defaultCommand.original) ? this.defaultCommand.original : this.defaultCommand.original.replace(/^[^[\]<>]*/, "$0 ");
      yargs.getInternalMethods().getUsageInstance().usage(commandString, this.defaultCommand.description);
    }
    const builder = this.defaultCommand.builder;
    if (isCommandBuilderCallback(builder)) {
      return builder(yargs, true);
    } else if (!isCommandBuilderDefinition(builder)) {
      Object.keys(builder).forEach((key) => {
        yargs.option(key, builder[key]);
      });
    }
    return void 0;
  }
  moduleName(obj) {
    const mod = whichModule(obj);
    if (!mod)
      throw new Error(`No command name given for module: ${this.shim.inspect(obj)}`);
    return this.commandFromFilename(mod.filename);
  }
  commandFromFilename(filename) {
    return this.shim.path.basename(filename, this.shim.path.extname(filename));
  }
  extractDesc({ describe, description, desc }) {
    for (const test of [describe, description, desc]) {
      if (typeof test === "string" || test === false)
        return test;
      assertNotStrictEqual(test, true, this.shim);
    }
    return false;
  }
  freeze() {
    this.frozens.push({
      handlers: this.handlers,
      aliasMap: this.aliasMap,
      defaultCommand: this.defaultCommand
    });
  }
  unfreeze() {
    const frozen = this.frozens.pop();
    assertNotStrictEqual(frozen, void 0, this.shim);
    ({
      handlers: this.handlers,
      aliasMap: this.aliasMap,
      defaultCommand: this.defaultCommand
    } = frozen);
  }
  reset() {
    this.handlers = {};
    this.aliasMap = {};
    this.defaultCommand = void 0;
    this.requireCache = /* @__PURE__ */ new Set();
    return this;
  }
};
function command(usage2, validation2, globalMiddleware, shim3) {
  return new CommandInstance(usage2, validation2, globalMiddleware, shim3);
}
function isCommandBuilderDefinition(builder) {
  return typeof builder === "object" && !!builder.builder && typeof builder.handler === "function";
}
function isCommandAndAliases(cmd) {
  return cmd.every((c) => typeof c === "string");
}
function isCommandBuilderCallback(builder) {
  return typeof builder === "function";
}
function isCommandBuilderOptionDefinitions(builder) {
  return typeof builder === "object";
}
function isCommandHandlerDefinition(cmd) {
  return typeof cmd === "object" && !Array.isArray(cmd);
}

// node_modules/yargs/build/lib/utils/obj-filter.js
function objFilter(original = {}, filter = () => true) {
  const obj = {};
  objectKeys(original).forEach((key) => {
    if (filter(key, original[key])) {
      obj[key] = original[key];
    }
  });
  return obj;
}

// node_modules/yargs/build/lib/utils/set-blocking.js
function setBlocking(blocking) {
  if (typeof process === "undefined")
    return;
  [process.stdout, process.stderr].forEach((_stream) => {
    const stream = _stream;
    if (stream._handle && stream.isTTY && typeof stream._handle.setBlocking === "function") {
      stream._handle.setBlocking(blocking);
    }
  });
}

// node_modules/yargs/build/lib/usage.js
function isBoolean(fail) {
  return typeof fail === "boolean";
}
function usage(yargs, shim3) {
  const __ = shim3.y18n.__;
  const self = {};
  const fails = [];
  self.failFn = function failFn(f) {
    fails.push(f);
  };
  let failMessage = null;
  let globalFailMessage = null;
  let showHelpOnFail = true;
  self.showHelpOnFail = function showHelpOnFailFn(arg1 = true, arg2) {
    const [enabled, message] = typeof arg1 === "string" ? [true, arg1] : [arg1, arg2];
    if (yargs.getInternalMethods().isGlobalContext()) {
      globalFailMessage = message;
    }
    failMessage = message;
    showHelpOnFail = enabled;
    return self;
  };
  let failureOutput = false;
  self.fail = function fail(msg, err) {
    const logger = yargs.getInternalMethods().getLoggerInstance();
    if (fails.length) {
      for (let i = fails.length - 1; i >= 0; --i) {
        const fail2 = fails[i];
        if (isBoolean(fail2)) {
          if (err)
            throw err;
          else if (msg)
            throw Error(msg);
        } else {
          fail2(msg, err, self);
        }
      }
    } else {
      if (yargs.getExitProcess())
        setBlocking(true);
      if (!failureOutput) {
        failureOutput = true;
        if (showHelpOnFail) {
          yargs.showHelp("error");
          logger.error();
        }
        if (msg || err)
          logger.error(msg || err);
        const globalOrCommandFailMessage = failMessage || globalFailMessage;
        if (globalOrCommandFailMessage) {
          if (msg || err)
            logger.error("");
          logger.error(globalOrCommandFailMessage);
        }
      }
      err = err || new YError(msg);
      if (yargs.getExitProcess()) {
        return yargs.exit(1);
      } else if (yargs.getInternalMethods().hasParseCallback()) {
        return yargs.exit(1, err);
      } else {
        throw err;
      }
    }
  };
  let usages = [];
  let usageDisabled = false;
  self.usage = (msg, description) => {
    if (msg === null) {
      usageDisabled = true;
      usages = [];
      return self;
    }
    usageDisabled = false;
    usages.push([msg, description || ""]);
    return self;
  };
  self.getUsage = () => {
    return usages;
  };
  self.getUsageDisabled = () => {
    return usageDisabled;
  };
  self.getPositionalGroupName = () => {
    return __("Positionals:");
  };
  let examples = [];
  self.example = (cmd, description) => {
    examples.push([cmd, description || ""]);
  };
  let commands = [];
  self.command = function command2(cmd, description, isDefault, aliases, deprecated = false) {
    if (isDefault) {
      commands = commands.map((cmdArray) => {
        cmdArray[2] = false;
        return cmdArray;
      });
    }
    commands.push([cmd, description || "", isDefault, aliases, deprecated]);
  };
  self.getCommands = () => commands;
  let descriptions = {};
  self.describe = function describe(keyOrKeys, desc) {
    if (Array.isArray(keyOrKeys)) {
      keyOrKeys.forEach((k) => {
        self.describe(k, desc);
      });
    } else if (typeof keyOrKeys === "object") {
      Object.keys(keyOrKeys).forEach((k) => {
        self.describe(k, keyOrKeys[k]);
      });
    } else {
      descriptions[keyOrKeys] = desc;
    }
  };
  self.getDescriptions = () => descriptions;
  let epilogs = [];
  self.epilog = (msg) => {
    epilogs.push(msg);
  };
  let wrapSet = false;
  let wrap2;
  self.wrap = (cols) => {
    wrapSet = true;
    wrap2 = cols;
  };
  self.getWrap = () => {
    if (shim3.getEnv("YARGS_DISABLE_WRAP")) {
      return null;
    }
    if (!wrapSet) {
      wrap2 = windowWidth();
      wrapSet = true;
    }
    return wrap2;
  };
  const deferY18nLookupPrefix = "__yargsString__:";
  self.deferY18nLookup = (str) => deferY18nLookupPrefix + str;
  self.help = function help() {
    if (cachedHelpMessage)
      return cachedHelpMessage;
    normalizeAliases();
    const base$0 = yargs.customScriptName ? yargs.$0 : shim3.path.basename(yargs.$0);
    const demandedOptions = yargs.getDemandedOptions();
    const demandedCommands = yargs.getDemandedCommands();
    const deprecatedOptions = yargs.getDeprecatedOptions();
    const groups = yargs.getGroups();
    const options = yargs.getOptions();
    let keys = [];
    keys = keys.concat(Object.keys(descriptions));
    keys = keys.concat(Object.keys(demandedOptions));
    keys = keys.concat(Object.keys(demandedCommands));
    keys = keys.concat(Object.keys(options.default));
    keys = keys.filter(filterHiddenOptions);
    keys = Object.keys(keys.reduce((acc, key) => {
      if (key !== "_")
        acc[key] = true;
      return acc;
    }, {}));
    const theWrap = self.getWrap();
    const ui2 = shim3.cliui({
      width: theWrap,
      wrap: !!theWrap
    });
    if (!usageDisabled) {
      if (usages.length) {
        usages.forEach((usage2) => {
          ui2.div({ text: `${usage2[0].replace(/\$0/g, base$0)}` });
          if (usage2[1]) {
            ui2.div({ text: `${usage2[1]}`, padding: [1, 0, 0, 0] });
          }
        });
        ui2.div();
      } else if (commands.length) {
        let u = null;
        if (demandedCommands._) {
          u = `${base$0} <${__("command")}>
`;
        } else {
          u = `${base$0} [${__("command")}]
`;
        }
        ui2.div(`${u}`);
      }
    }
    if (commands.length > 1 || commands.length === 1 && !commands[0][2]) {
      ui2.div(__("Commands:"));
      const context = yargs.getInternalMethods().getContext();
      const parentCommands = context.commands.length ? `${context.commands.join(" ")} ` : "";
      if (yargs.getInternalMethods().getParserConfiguration()["sort-commands"] === true) {
        commands = commands.sort((a, b) => a[0].localeCompare(b[0]));
      }
      const prefix = base$0 ? `${base$0} ` : "";
      commands.forEach((command2) => {
        const commandString = `${prefix}${parentCommands}${command2[0].replace(/^\$0 ?/, "")}`;
        ui2.span({
          text: commandString,
          padding: [0, 2, 0, 2],
          width: maxWidth(commands, theWrap, `${base$0}${parentCommands}`) + 4
        }, { text: command2[1] });
        const hints = [];
        if (command2[2])
          hints.push(`[${__("default")}]`);
        if (command2[3] && command2[3].length) {
          hints.push(`[${__("aliases:")} ${command2[3].join(", ")}]`);
        }
        if (command2[4]) {
          if (typeof command2[4] === "string") {
            hints.push(`[${__("deprecated: %s", command2[4])}]`);
          } else {
            hints.push(`[${__("deprecated")}]`);
          }
        }
        if (hints.length) {
          ui2.div({
            text: hints.join(" "),
            padding: [0, 0, 0, 2],
            align: "right"
          });
        } else {
          ui2.div();
        }
      });
      ui2.div();
    }
    const aliasKeys = (Object.keys(options.alias) || []).concat(Object.keys(yargs.parsed.newAliases) || []);
    keys = keys.filter((key) => !yargs.parsed.newAliases[key] && aliasKeys.every((alias) => (options.alias[alias] || []).indexOf(key) === -1));
    const defaultGroup = __("Options:");
    if (!groups[defaultGroup])
      groups[defaultGroup] = [];
    addUngroupedKeys(keys, options.alias, groups, defaultGroup);
    const isLongSwitch = (sw) => /^--/.test(getText(sw));
    const displayedGroups = Object.keys(groups).filter((groupName) => groups[groupName].length > 0).map((groupName) => {
      const normalizedKeys = groups[groupName].filter(filterHiddenOptions).map((key) => {
        if (aliasKeys.includes(key))
          return key;
        for (let i = 0, aliasKey; (aliasKey = aliasKeys[i]) !== void 0; i++) {
          if ((options.alias[aliasKey] || []).includes(key))
            return aliasKey;
        }
        return key;
      });
      return { groupName, normalizedKeys };
    }).filter(({ normalizedKeys }) => normalizedKeys.length > 0).map(({ groupName, normalizedKeys }) => {
      const switches = normalizedKeys.reduce((acc, key) => {
        acc[key] = [key].concat(options.alias[key] || []).map((sw) => {
          if (groupName === self.getPositionalGroupName())
            return sw;
          else {
            return (/^[0-9]$/.test(sw) ? options.boolean.includes(key) ? "-" : "--" : sw.length > 1 ? "--" : "-") + sw;
          }
        }).sort((sw1, sw2) => isLongSwitch(sw1) === isLongSwitch(sw2) ? 0 : isLongSwitch(sw1) ? 1 : -1).join(", ");
        return acc;
      }, {});
      return { groupName, normalizedKeys, switches };
    });
    const shortSwitchesUsed = displayedGroups.filter(({ groupName }) => groupName !== self.getPositionalGroupName()).some(({ normalizedKeys, switches }) => !normalizedKeys.every((key) => isLongSwitch(switches[key])));
    if (shortSwitchesUsed) {
      displayedGroups.filter(({ groupName }) => groupName !== self.getPositionalGroupName()).forEach(({ normalizedKeys, switches }) => {
        normalizedKeys.forEach((key) => {
          if (isLongSwitch(switches[key])) {
            switches[key] = addIndentation(switches[key], "-x, ".length);
          }
        });
      });
    }
    displayedGroups.forEach(({ groupName, normalizedKeys, switches }) => {
      ui2.div(groupName);
      normalizedKeys.forEach((key) => {
        const kswitch = switches[key];
        let desc = descriptions[key] || "";
        let type = null;
        if (desc.includes(deferY18nLookupPrefix))
          desc = __(desc.substring(deferY18nLookupPrefix.length));
        if (options.boolean.includes(key))
          type = `[${__("boolean")}]`;
        if (options.count.includes(key))
          type = `[${__("count")}]`;
        if (options.string.includes(key))
          type = `[${__("string")}]`;
        if (options.normalize.includes(key))
          type = `[${__("string")}]`;
        if (options.array.includes(key))
          type = `[${__("array")}]`;
        if (options.number.includes(key))
          type = `[${__("number")}]`;
        const deprecatedExtra = (deprecated) => typeof deprecated === "string" ? `[${__("deprecated: %s", deprecated)}]` : `[${__("deprecated")}]`;
        const extra = [
          key in deprecatedOptions ? deprecatedExtra(deprecatedOptions[key]) : null,
          type,
          key in demandedOptions ? `[${__("required")}]` : null,
          options.choices && options.choices[key] ? `[${__("choices:")} ${self.stringifiedValues(options.choices[key])}]` : null,
          defaultString(options.default[key], options.defaultDescription[key])
        ].filter(Boolean).join(" ");
        ui2.span({
          text: getText(kswitch),
          padding: [0, 2, 0, 2 + getIndentation(kswitch)],
          width: maxWidth(switches, theWrap) + 4
        }, desc);
        const shouldHideOptionExtras = yargs.getInternalMethods().getUsageConfiguration()["hide-types"] === true;
        if (extra && !shouldHideOptionExtras)
          ui2.div({ text: extra, padding: [0, 0, 0, 2], align: "right" });
        else
          ui2.div();
      });
      ui2.div();
    });
    if (examples.length) {
      ui2.div(__("Examples:"));
      examples.forEach((example) => {
        example[0] = example[0].replace(/\$0/g, base$0);
      });
      examples.forEach((example) => {
        if (example[1] === "") {
          ui2.div({
            text: example[0],
            padding: [0, 2, 0, 2]
          });
        } else {
          ui2.div({
            text: example[0],
            padding: [0, 2, 0, 2],
            width: maxWidth(examples, theWrap) + 4
          }, {
            text: example[1]
          });
        }
      });
      ui2.div();
    }
    if (epilogs.length > 0) {
      const e = epilogs.map((epilog) => epilog.replace(/\$0/g, base$0)).join("\n");
      ui2.div(`${e}
`);
    }
    return ui2.toString().replace(/\s*$/, "");
  };
  function maxWidth(table, theWrap, modifier) {
    let width = 0;
    if (!Array.isArray(table)) {
      table = Object.values(table).map((v) => [v]);
    }
    table.forEach((v) => {
      width = Math.max(shim3.stringWidth(modifier ? `${modifier} ${getText(v[0])}` : getText(v[0])) + getIndentation(v[0]), width);
    });
    if (theWrap)
      width = Math.min(width, parseInt((theWrap * 0.5).toString(), 10));
    return width;
  }
  function normalizeAliases() {
    const demandedOptions = yargs.getDemandedOptions();
    const options = yargs.getOptions();
    (Object.keys(options.alias) || []).forEach((key) => {
      options.alias[key].forEach((alias) => {
        if (descriptions[alias])
          self.describe(key, descriptions[alias]);
        if (alias in demandedOptions)
          yargs.demandOption(key, demandedOptions[alias]);
        if (options.boolean.includes(alias))
          yargs.boolean(key);
        if (options.count.includes(alias))
          yargs.count(key);
        if (options.string.includes(alias))
          yargs.string(key);
        if (options.normalize.includes(alias))
          yargs.normalize(key);
        if (options.array.includes(alias))
          yargs.array(key);
        if (options.number.includes(alias))
          yargs.number(key);
      });
    });
  }
  let cachedHelpMessage;
  self.cacheHelpMessage = function() {
    cachedHelpMessage = this.help();
  };
  self.clearCachedHelpMessage = function() {
    cachedHelpMessage = void 0;
  };
  self.hasCachedHelpMessage = function() {
    return !!cachedHelpMessage;
  };
  function addUngroupedKeys(keys, aliases, groups, defaultGroup) {
    let groupedKeys = [];
    let toCheck = null;
    Object.keys(groups).forEach((group) => {
      groupedKeys = groupedKeys.concat(groups[group]);
    });
    keys.forEach((key) => {
      toCheck = [key].concat(aliases[key]);
      if (!toCheck.some((k) => groupedKeys.indexOf(k) !== -1)) {
        groups[defaultGroup].push(key);
      }
    });
    return groupedKeys;
  }
  function filterHiddenOptions(key) {
    return yargs.getOptions().hiddenOptions.indexOf(key) < 0 || yargs.parsed.argv[yargs.getOptions().showHiddenOpt];
  }
  self.showHelp = (level) => {
    const logger = yargs.getInternalMethods().getLoggerInstance();
    if (!level)
      level = "error";
    const emit = typeof level === "function" ? level : logger[level];
    emit(self.help());
  };
  self.functionDescription = (fn) => {
    const description = fn.name ? shim3.Parser.decamelize(fn.name, "-") : __("generated-value");
    return ["(", description, ")"].join("");
  };
  self.stringifiedValues = function stringifiedValues(values, separator) {
    let string = "";
    const sep2 = separator || ", ";
    const array = [].concat(values);
    if (!values || !array.length)
      return string;
    array.forEach((value) => {
      if (string.length)
        string += sep2;
      string += JSON.stringify(value);
    });
    return string;
  };
  function defaultString(value, defaultDescription) {
    let string = `[${__("default:")} `;
    if (value === void 0 && !defaultDescription)
      return null;
    if (defaultDescription) {
      string += defaultDescription;
    } else {
      switch (typeof value) {
        case "string":
          string += `"${value}"`;
          break;
        case "object":
          string += JSON.stringify(value);
          break;
        default:
          string += value;
      }
    }
    return `${string}]`;
  }
  function windowWidth() {
    const maxWidth2 = 80;
    if (shim3.process.stdColumns) {
      return Math.min(maxWidth2, shim3.process.stdColumns);
    } else {
      return maxWidth2;
    }
  }
  let version = null;
  self.version = (ver) => {
    version = ver;
  };
  self.showVersion = (level) => {
    const logger = yargs.getInternalMethods().getLoggerInstance();
    if (!level)
      level = "error";
    const emit = typeof level === "function" ? level : logger[level];
    emit(version);
  };
  self.reset = function reset(localLookup) {
    failMessage = null;
    failureOutput = false;
    usages = [];
    usageDisabled = false;
    epilogs = [];
    examples = [];
    commands = [];
    descriptions = objFilter(descriptions, (k) => !localLookup[k]);
    return self;
  };
  const frozens = [];
  self.freeze = function freeze() {
    frozens.push({
      failMessage,
      failureOutput,
      usages,
      usageDisabled,
      epilogs,
      examples,
      commands,
      descriptions
    });
  };
  self.unfreeze = function unfreeze(defaultCommand = false) {
    const frozen = frozens.pop();
    if (!frozen)
      return;
    if (defaultCommand) {
      descriptions = { ...frozen.descriptions, ...descriptions };
      commands = [...frozen.commands, ...commands];
      usages = [...frozen.usages, ...usages];
      examples = [...frozen.examples, ...examples];
      epilogs = [...frozen.epilogs, ...epilogs];
    } else {
      ({
        failMessage,
        failureOutput,
        usages,
        usageDisabled,
        epilogs,
        examples,
        commands,
        descriptions
      } = frozen);
    }
  };
  return self;
}
function isIndentedText(text) {
  return typeof text === "object";
}
function addIndentation(text, indent) {
  return isIndentedText(text) ? { text: text.text, indentation: text.indentation + indent } : { text, indentation: indent };
}
function getIndentation(text) {
  return isIndentedText(text) ? text.indentation : 0;
}
function getText(text) {
  return isIndentedText(text) ? text.text : text;
}

// node_modules/yargs/build/lib/completion-templates.js
var completionShTemplate = `###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.bashrc
#    or {{app_path}} {{completion_command}} >> ~/.bash_profile on OSX.
#
_{{app_name}}_yargs_completions()
{
    local cur_word args type_list

    cur_word="\${COMP_WORDS[COMP_CWORD]}"
    args=("\${COMP_WORDS[@]}")

    # ask yargs to generate completions.
    type_list=$({{app_path}} --get-yargs-completions "\${args[@]}")

    COMPREPLY=( $(compgen -W "\${type_list}" -- \${cur_word}) )

    # if no match was found, fall back to filename completion
    if [ \${#COMPREPLY[@]} -eq 0 ]; then
      COMPREPLY=()
    fi

    return 0
}
complete -o bashdefault -o default -F _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`;
var completionZshTemplate = `#compdef {{app_name}}
###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.zshrc
#    or {{app_path}} {{completion_command}} >> ~/.zprofile on OSX.
#
_{{app_name}}_yargs_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" {{app_path}} --get-yargs-completions "\${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`;

// node_modules/yargs/build/lib/completion.js
var Completion = class {
  constructor(yargs, usage2, command2, shim3) {
    var _a2, _b2, _c2;
    this.yargs = yargs;
    this.usage = usage2;
    this.command = command2;
    this.shim = shim3;
    this.completionKey = "get-yargs-completions";
    this.aliases = null;
    this.customCompletionFunction = null;
    this.indexAfterLastReset = 0;
    this.zshShell = (_c2 = ((_a2 = this.shim.getEnv("SHELL")) === null || _a2 === void 0 ? void 0 : _a2.includes("zsh")) || ((_b2 = this.shim.getEnv("ZSH_NAME")) === null || _b2 === void 0 ? void 0 : _b2.includes("zsh"))) !== null && _c2 !== void 0 ? _c2 : false;
  }
  defaultCompletion(args, argv, current, done) {
    const handlers = this.command.getCommandHandlers();
    for (let i = 0, ii = args.length; i < ii; ++i) {
      if (handlers[args[i]] && handlers[args[i]].builder) {
        const builder = handlers[args[i]].builder;
        if (isCommandBuilderCallback(builder)) {
          this.indexAfterLastReset = i + 1;
          const y = this.yargs.getInternalMethods().reset();
          builder(y, true);
          return y.argv;
        }
      }
    }
    const completions = [];
    this.commandCompletions(completions, args, current);
    this.optionCompletions(completions, args, argv, current);
    this.choicesFromOptionsCompletions(completions, args, argv, current);
    this.choicesFromPositionalsCompletions(completions, args, argv, current);
    done(null, completions);
  }
  commandCompletions(completions, args, current) {
    const parentCommands = this.yargs.getInternalMethods().getContext().commands;
    if (!current.match(/^-/) && parentCommands[parentCommands.length - 1] !== current && !this.previousArgHasChoices(args)) {
      this.usage.getCommands().forEach((usageCommand) => {
        const commandName = parseCommand(usageCommand[0]).cmd;
        if (args.indexOf(commandName) === -1) {
          if (!this.zshShell) {
            completions.push(commandName);
          } else {
            const desc = usageCommand[1] || "";
            completions.push(commandName.replace(/:/g, "\\:") + ":" + desc);
          }
        }
      });
    }
  }
  optionCompletions(completions, args, argv, current) {
    if ((current.match(/^-/) || current === "" && completions.length === 0) && !this.previousArgHasChoices(args)) {
      const options = this.yargs.getOptions();
      const positionalKeys = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || [];
      Object.keys(options.key).forEach((key) => {
        const negable = !!options.configuration["boolean-negation"] && options.boolean.includes(key);
        const isPositionalKey = positionalKeys.includes(key);
        if (!isPositionalKey && !options.hiddenOptions.includes(key) && !this.argsContainKey(args, key, negable)) {
          this.completeOptionKey(key, completions, current, negable && !!options.default[key]);
        }
      });
    }
  }
  choicesFromOptionsCompletions(completions, args, argv, current) {
    if (this.previousArgHasChoices(args)) {
      const choices = this.getPreviousArgChoices(args);
      if (choices && choices.length > 0) {
        completions.push(...choices.map((c) => c.replace(/:/g, "\\:")));
      }
    }
  }
  choicesFromPositionalsCompletions(completions, args, argv, current) {
    if (current === "" && completions.length > 0 && this.previousArgHasChoices(args)) {
      return;
    }
    const positionalKeys = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || [];
    const offset = Math.max(this.indexAfterLastReset, this.yargs.getInternalMethods().getContext().commands.length + 1);
    const positionalKey = positionalKeys[argv._.length - offset - 1];
    if (!positionalKey) {
      return;
    }
    const choices = this.yargs.getOptions().choices[positionalKey] || [];
    for (const choice of choices) {
      if (choice.startsWith(current)) {
        completions.push(choice.replace(/:/g, "\\:"));
      }
    }
  }
  getPreviousArgChoices(args) {
    if (args.length < 1)
      return;
    let previousArg = args[args.length - 1];
    let filter = "";
    if (!previousArg.startsWith("-") && args.length > 1) {
      filter = previousArg;
      previousArg = args[args.length - 2];
    }
    if (!previousArg.startsWith("-"))
      return;
    const previousArgKey = previousArg.replace(/^-+/, "");
    const options = this.yargs.getOptions();
    const possibleAliases = [
      previousArgKey,
      ...this.yargs.getAliases()[previousArgKey] || []
    ];
    let choices;
    for (const possibleAlias of possibleAliases) {
      if (Object.prototype.hasOwnProperty.call(options.key, possibleAlias) && Array.isArray(options.choices[possibleAlias])) {
        choices = options.choices[possibleAlias];
        break;
      }
    }
    if (choices) {
      return choices.filter((choice) => !filter || choice.startsWith(filter));
    }
  }
  previousArgHasChoices(args) {
    const choices = this.getPreviousArgChoices(args);
    return choices !== void 0 && choices.length > 0;
  }
  argsContainKey(args, key, negable) {
    const argsContains = (s) => args.indexOf((/^[^0-9]$/.test(s) ? "-" : "--") + s) !== -1;
    if (argsContains(key))
      return true;
    if (negable && argsContains(`no-${key}`))
      return true;
    if (this.aliases) {
      for (const alias of this.aliases[key]) {
        if (argsContains(alias))
          return true;
      }
    }
    return false;
  }
  completeOptionKey(key, completions, current, negable) {
    var _a2, _b2, _c2, _d;
    let keyWithDesc = key;
    if (this.zshShell) {
      const descs = this.usage.getDescriptions();
      const aliasKey = (_b2 = (_a2 = this === null || this === void 0 ? void 0 : this.aliases) === null || _a2 === void 0 ? void 0 : _a2[key]) === null || _b2 === void 0 ? void 0 : _b2.find((alias) => {
        const desc2 = descs[alias];
        return typeof desc2 === "string" && desc2.length > 0;
      });
      const descFromAlias = aliasKey ? descs[aliasKey] : void 0;
      const desc = (_d = (_c2 = descs[key]) !== null && _c2 !== void 0 ? _c2 : descFromAlias) !== null && _d !== void 0 ? _d : "";
      keyWithDesc = `${key.replace(/:/g, "\\:")}:${desc.replace("__yargsString__:", "").replace(/(\r\n|\n|\r)/gm, " ")}`;
    }
    const startsByTwoDashes = (s) => /^--/.test(s);
    const isShortOption = (s) => /^[^0-9]$/.test(s);
    const dashes = !startsByTwoDashes(current) && isShortOption(key) ? "-" : "--";
    completions.push(dashes + keyWithDesc);
    if (negable) {
      completions.push(dashes + "no-" + keyWithDesc);
    }
  }
  customCompletion(args, argv, current, done) {
    assertNotStrictEqual(this.customCompletionFunction, null, this.shim);
    if (isSyncCompletionFunction(this.customCompletionFunction)) {
      const result = this.customCompletionFunction(current, argv);
      if (isPromise(result)) {
        return result.then((list) => {
          this.shim.process.nextTick(() => {
            done(null, list);
          });
        }).catch((err) => {
          this.shim.process.nextTick(() => {
            done(err, void 0);
          });
        });
      }
      return done(null, result);
    } else if (isFallbackCompletionFunction(this.customCompletionFunction)) {
      return this.customCompletionFunction(current, argv, (onCompleted = done) => this.defaultCompletion(args, argv, current, onCompleted), (completions) => {
        done(null, completions);
      });
    } else {
      return this.customCompletionFunction(current, argv, (completions) => {
        done(null, completions);
      });
    }
  }
  getCompletion(args, done) {
    const current = args.length ? args[args.length - 1] : "";
    const argv = this.yargs.parse(args, true);
    const completionFunction = this.customCompletionFunction ? (argv2) => this.customCompletion(args, argv2, current, done) : (argv2) => this.defaultCompletion(args, argv2, current, done);
    return isPromise(argv) ? argv.then(completionFunction) : completionFunction(argv);
  }
  generateCompletionScript($0, cmd) {
    let script = this.zshShell ? completionZshTemplate : completionShTemplate;
    const name = this.shim.path.basename($0);
    if ($0.match(/\.js$/))
      $0 = `./${$0}`;
    script = script.replace(/{{app_name}}/g, name);
    script = script.replace(/{{completion_command}}/g, cmd);
    return script.replace(/{{app_path}}/g, $0);
  }
  registerFunction(fn) {
    this.customCompletionFunction = fn;
  }
  setParsed(parsed) {
    this.aliases = parsed.aliases;
  }
};
function completion(yargs, usage2, command2, shim3) {
  return new Completion(yargs, usage2, command2, shim3);
}
function isSyncCompletionFunction(completionFunction) {
  return completionFunction.length < 3;
}
function isFallbackCompletionFunction(completionFunction) {
  return completionFunction.length > 3;
}

// node_modules/yargs/build/lib/utils/levenshtein.js
function levenshtein(a, b) {
  if (a.length === 0)
    return b.length;
  if (b.length === 0)
    return a.length;
  const matrix = [];
  let i;
  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  let j;
  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        if (i > 1 && j > 1 && b.charAt(i - 2) === a.charAt(j - 1) && b.charAt(i - 1) === a.charAt(j - 2)) {
          matrix[i][j] = matrix[i - 2][j - 2] + 1;
        } else {
          matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
        }
      }
    }
  }
  return matrix[b.length][a.length];
}

// node_modules/yargs/build/lib/validation.js
var specialKeys = ["$0", "--", "_"];
function validation(yargs, usage2, shim3) {
  const __ = shim3.y18n.__;
  const __n = shim3.y18n.__n;
  const self = {};
  self.nonOptionCount = function nonOptionCount(argv) {
    const demandedCommands = yargs.getDemandedCommands();
    const positionalCount = argv._.length + (argv["--"] ? argv["--"].length : 0);
    const _s = positionalCount - yargs.getInternalMethods().getContext().commands.length;
    if (demandedCommands._ && (_s < demandedCommands._.min || _s > demandedCommands._.max)) {
      if (_s < demandedCommands._.min) {
        if (demandedCommands._.minMsg !== void 0) {
          usage2.fail(demandedCommands._.minMsg ? demandedCommands._.minMsg.replace(/\$0/g, _s.toString()).replace(/\$1/, demandedCommands._.min.toString()) : null);
        } else {
          usage2.fail(__n("Not enough non-option arguments: got %s, need at least %s", "Not enough non-option arguments: got %s, need at least %s", _s, _s.toString(), demandedCommands._.min.toString()));
        }
      } else if (_s > demandedCommands._.max) {
        if (demandedCommands._.maxMsg !== void 0) {
          usage2.fail(demandedCommands._.maxMsg ? demandedCommands._.maxMsg.replace(/\$0/g, _s.toString()).replace(/\$1/, demandedCommands._.max.toString()) : null);
        } else {
          usage2.fail(__n("Too many non-option arguments: got %s, maximum of %s", "Too many non-option arguments: got %s, maximum of %s", _s, _s.toString(), demandedCommands._.max.toString()));
        }
      }
    }
  };
  self.positionalCount = function positionalCount(required, observed) {
    if (observed < required) {
      usage2.fail(__n("Not enough non-option arguments: got %s, need at least %s", "Not enough non-option arguments: got %s, need at least %s", observed, observed + "", required + ""));
    }
  };
  self.requiredArguments = function requiredArguments(argv, demandedOptions) {
    let missing = null;
    for (const key of Object.keys(demandedOptions)) {
      if (!Object.prototype.hasOwnProperty.call(argv, key) || typeof argv[key] === "undefined") {
        missing = missing || {};
        missing[key] = demandedOptions[key];
      }
    }
    if (missing) {
      const customMsgs = [];
      for (const key of Object.keys(missing)) {
        const msg = missing[key];
        if (msg && customMsgs.indexOf(msg) < 0) {
          customMsgs.push(msg);
        }
      }
      const customMsg = customMsgs.length ? `
${customMsgs.join("\n")}` : "";
      usage2.fail(__n("Missing required argument: %s", "Missing required arguments: %s", Object.keys(missing).length, Object.keys(missing).join(", ") + customMsg));
    }
  };
  self.unknownArguments = function unknownArguments(argv, aliases, positionalMap, isDefaultCommand, checkPositionals = true) {
    var _a2;
    const commandKeys = yargs.getInternalMethods().getCommandInstance().getCommands();
    const unknown = [];
    const currentContext = yargs.getInternalMethods().getContext();
    Object.keys(argv).forEach((key) => {
      if (!specialKeys.includes(key) && !Object.prototype.hasOwnProperty.call(positionalMap, key) && !Object.prototype.hasOwnProperty.call(yargs.getInternalMethods().getParseContext(), key) && !self.isValidAndSomeAliasIsNotNew(key, aliases)) {
        unknown.push(key);
      }
    });
    if (checkPositionals && (currentContext.commands.length > 0 || commandKeys.length > 0 || isDefaultCommand)) {
      argv._.slice(currentContext.commands.length).forEach((key) => {
        if (!commandKeys.includes("" + key)) {
          unknown.push("" + key);
        }
      });
    }
    if (checkPositionals) {
      const demandedCommands = yargs.getDemandedCommands();
      const maxNonOptDemanded = ((_a2 = demandedCommands._) === null || _a2 === void 0 ? void 0 : _a2.max) || 0;
      const expected = currentContext.commands.length + maxNonOptDemanded;
      if (expected < argv._.length) {
        argv._.slice(expected).forEach((key) => {
          key = String(key);
          if (!currentContext.commands.includes(key) && !unknown.includes(key)) {
            unknown.push(key);
          }
        });
      }
    }
    if (unknown.length) {
      usage2.fail(__n("Unknown argument: %s", "Unknown arguments: %s", unknown.length, unknown.map((s) => s.trim() ? s : `"${s}"`).join(", ")));
    }
  };
  self.unknownCommands = function unknownCommands(argv) {
    const commandKeys = yargs.getInternalMethods().getCommandInstance().getCommands();
    const unknown = [];
    const currentContext = yargs.getInternalMethods().getContext();
    if (currentContext.commands.length > 0 || commandKeys.length > 0) {
      argv._.slice(currentContext.commands.length).forEach((key) => {
        if (!commandKeys.includes("" + key)) {
          unknown.push("" + key);
        }
      });
    }
    if (unknown.length > 0) {
      usage2.fail(__n("Unknown command: %s", "Unknown commands: %s", unknown.length, unknown.join(", ")));
      return true;
    } else {
      return false;
    }
  };
  self.isValidAndSomeAliasIsNotNew = function isValidAndSomeAliasIsNotNew(key, aliases) {
    if (!Object.prototype.hasOwnProperty.call(aliases, key)) {
      return false;
    }
    const newAliases = yargs.parsed.newAliases;
    return [key, ...aliases[key]].some((a) => !Object.prototype.hasOwnProperty.call(newAliases, a) || !newAliases[key]);
  };
  self.limitedChoices = function limitedChoices(argv) {
    const options = yargs.getOptions();
    const invalid = {};
    if (!Object.keys(options.choices).length)
      return;
    Object.keys(argv).forEach((key) => {
      if (specialKeys.indexOf(key) === -1 && Object.prototype.hasOwnProperty.call(options.choices, key)) {
        [].concat(argv[key]).forEach((value) => {
          if (options.choices[key].indexOf(value) === -1 && value !== void 0) {
            invalid[key] = (invalid[key] || []).concat(value);
          }
        });
      }
    });
    const invalidKeys = Object.keys(invalid);
    if (!invalidKeys.length)
      return;
    let msg = __("Invalid values:");
    invalidKeys.forEach((key) => {
      msg += `
  ${__("Argument: %s, Given: %s, Choices: %s", key, usage2.stringifiedValues(invalid[key]), usage2.stringifiedValues(options.choices[key]))}`;
    });
    usage2.fail(msg);
  };
  let implied = {};
  self.implies = function implies(key, value) {
    argsert("<string|object> [array|number|string]", [key, value], arguments.length);
    if (typeof key === "object") {
      Object.keys(key).forEach((k) => {
        self.implies(k, key[k]);
      });
    } else {
      yargs.global(key);
      if (!implied[key]) {
        implied[key] = [];
      }
      if (Array.isArray(value)) {
        value.forEach((i) => self.implies(key, i));
      } else {
        assertNotStrictEqual(value, void 0, shim3);
        implied[key].push(value);
      }
    }
  };
  self.getImplied = function getImplied() {
    return implied;
  };
  function keyExists(argv, val) {
    const num = Number(val);
    val = isNaN(num) ? val : num;
    if (typeof val === "number") {
      val = argv._.length >= val;
    } else if (val.match(/^--no-.+/)) {
      val = val.match(/^--no-(.+)/)[1];
      val = !Object.prototype.hasOwnProperty.call(argv, val);
    } else {
      val = Object.prototype.hasOwnProperty.call(argv, val);
    }
    return val;
  }
  self.implications = function implications(argv) {
    const implyFail = [];
    Object.keys(implied).forEach((key) => {
      const origKey = key;
      (implied[key] || []).forEach((value) => {
        let key2 = origKey;
        const origValue = value;
        key2 = keyExists(argv, key2);
        value = keyExists(argv, value);
        if (key2 && !value) {
          implyFail.push(` ${origKey} -> ${origValue}`);
        }
      });
    });
    if (implyFail.length) {
      let msg = `${__("Implications failed:")}
`;
      implyFail.forEach((value) => {
        msg += value;
      });
      usage2.fail(msg);
    }
  };
  let conflicting = {};
  self.conflicts = function conflicts(key, value) {
    argsert("<string|object> [array|string]", [key, value], arguments.length);
    if (typeof key === "object") {
      Object.keys(key).forEach((k) => {
        self.conflicts(k, key[k]);
      });
    } else {
      yargs.global(key);
      if (!conflicting[key]) {
        conflicting[key] = [];
      }
      if (Array.isArray(value)) {
        value.forEach((i) => self.conflicts(key, i));
      } else {
        conflicting[key].push(value);
      }
    }
  };
  self.getConflicting = () => conflicting;
  self.conflicting = function conflictingFn(argv) {
    Object.keys(argv).forEach((key) => {
      if (conflicting[key]) {
        conflicting[key].forEach((value) => {
          if (value && argv[key] !== void 0 && argv[value] !== void 0) {
            usage2.fail(__("Arguments %s and %s are mutually exclusive", key, value));
          }
        });
      }
    });
    if (yargs.getInternalMethods().getParserConfiguration()["strip-dashed"]) {
      Object.keys(conflicting).forEach((key) => {
        conflicting[key].forEach((value) => {
          if (value && argv[shim3.Parser.camelCase(key)] !== void 0 && argv[shim3.Parser.camelCase(value)] !== void 0) {
            usage2.fail(__("Arguments %s and %s are mutually exclusive", key, value));
          }
        });
      });
    }
  };
  self.recommendCommands = function recommendCommands(cmd, potentialCommands) {
    const threshold = 3;
    potentialCommands = potentialCommands.sort((a, b) => b.length - a.length);
    let recommended = null;
    let bestDistance = Infinity;
    for (let i = 0, candidate; (candidate = potentialCommands[i]) !== void 0; i++) {
      const d = levenshtein(cmd, candidate);
      if (d <= threshold && d < bestDistance) {
        bestDistance = d;
        recommended = candidate;
      }
    }
    if (recommended)
      usage2.fail(__("Did you mean %s?", recommended));
  };
  self.reset = function reset(localLookup) {
    implied = objFilter(implied, (k) => !localLookup[k]);
    conflicting = objFilter(conflicting, (k) => !localLookup[k]);
    return self;
  };
  const frozens = [];
  self.freeze = function freeze() {
    frozens.push({
      implied,
      conflicting
    });
  };
  self.unfreeze = function unfreeze() {
    const frozen = frozens.pop();
    assertNotStrictEqual(frozen, void 0, shim3);
    ({ implied, conflicting } = frozen);
  };
  return self;
}

// node_modules/yargs/build/lib/utils/apply-extends.js
var previouslyVisitedConfigs = [];
var shim2;
function applyExtends(config, cwd, mergeExtends, _shim) {
  shim2 = _shim;
  let defaultConfig = {};
  if (Object.prototype.hasOwnProperty.call(config, "extends")) {
    if (typeof config.extends !== "string")
      return defaultConfig;
    const isPath = /\.json|\..*rc$/.test(config.extends);
    let pathToDefault = null;
    if (!isPath) {
      try {
        pathToDefault = __require.resolve(config.extends);
      } catch (_err) {
        return config;
      }
    } else {
      pathToDefault = getPathToDefaultConfig(cwd, config.extends);
    }
    checkForCircularExtends(pathToDefault);
    previouslyVisitedConfigs.push(pathToDefault);
    defaultConfig = isPath ? JSON.parse(shim2.readFileSync(pathToDefault, "utf8")) : __require(config.extends);
    delete config.extends;
    defaultConfig = applyExtends(defaultConfig, shim2.path.dirname(pathToDefault), mergeExtends, shim2);
  }
  previouslyVisitedConfigs = [];
  return mergeExtends ? mergeDeep(defaultConfig, config) : Object.assign({}, defaultConfig, config);
}
function checkForCircularExtends(cfgPath) {
  if (previouslyVisitedConfigs.indexOf(cfgPath) > -1) {
    throw new YError(`Circular extended configurations: '${cfgPath}'.`);
  }
}
function getPathToDefaultConfig(cwd, pathToExtend) {
  return shim2.path.resolve(cwd, pathToExtend);
}
function mergeDeep(config1, config2) {
  const target = {};
  function isObject(obj) {
    return obj && typeof obj === "object" && !Array.isArray(obj);
  }
  Object.assign(target, config1);
  for (const key of Object.keys(config2)) {
    if (isObject(config2[key]) && isObject(target[key])) {
      target[key] = mergeDeep(config1[key], config2[key]);
    } else {
      target[key] = config2[key];
    }
  }
  return target;
}

// node_modules/yargs/build/lib/yargs-factory.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _YargsInstance_command, _YargsInstance_cwd, _YargsInstance_context, _YargsInstance_completion, _YargsInstance_completionCommand, _YargsInstance_defaultShowHiddenOpt, _YargsInstance_exitError, _YargsInstance_detectLocale, _YargsInstance_emittedWarnings, _YargsInstance_exitProcess, _YargsInstance_frozens, _YargsInstance_globalMiddleware, _YargsInstance_groups, _YargsInstance_hasOutput, _YargsInstance_helpOpt, _YargsInstance_isGlobalContext, _YargsInstance_logger, _YargsInstance_output, _YargsInstance_options, _YargsInstance_parentRequire, _YargsInstance_parserConfig, _YargsInstance_parseFn, _YargsInstance_parseContext, _YargsInstance_pkgs, _YargsInstance_preservedGroups, _YargsInstance_processArgs, _YargsInstance_recommendCommands, _YargsInstance_shim, _YargsInstance_strict, _YargsInstance_strictCommands, _YargsInstance_strictOptions, _YargsInstance_usage, _YargsInstance_usageConfig, _YargsInstance_versionOpt, _YargsInstance_validation;
function YargsFactory(_shim) {
  return (processArgs = [], cwd = _shim.process.cwd(), parentRequire) => {
    const yargs = new YargsInstance(processArgs, cwd, parentRequire, _shim);
    Object.defineProperty(yargs, "argv", {
      get: () => {
        return yargs.parse();
      },
      enumerable: true
    });
    yargs.help();
    yargs.version();
    return yargs;
  };
}
var kCopyDoubleDash = Symbol("copyDoubleDash");
var kCreateLogger = Symbol("copyDoubleDash");
var kDeleteFromParserHintObject = Symbol("deleteFromParserHintObject");
var kEmitWarning = Symbol("emitWarning");
var kFreeze = Symbol("freeze");
var kGetDollarZero = Symbol("getDollarZero");
var kGetParserConfiguration = Symbol("getParserConfiguration");
var kGetUsageConfiguration = Symbol("getUsageConfiguration");
var kGuessLocale = Symbol("guessLocale");
var kGuessVersion = Symbol("guessVersion");
var kParsePositionalNumbers = Symbol("parsePositionalNumbers");
var kPkgUp = Symbol("pkgUp");
var kPopulateParserHintArray = Symbol("populateParserHintArray");
var kPopulateParserHintSingleValueDictionary = Symbol("populateParserHintSingleValueDictionary");
var kPopulateParserHintArrayDictionary = Symbol("populateParserHintArrayDictionary");
var kPopulateParserHintDictionary = Symbol("populateParserHintDictionary");
var kSanitizeKey = Symbol("sanitizeKey");
var kSetKey = Symbol("setKey");
var kUnfreeze = Symbol("unfreeze");
var kValidateAsync = Symbol("validateAsync");
var kGetCommandInstance = Symbol("getCommandInstance");
var kGetContext = Symbol("getContext");
var kGetHasOutput = Symbol("getHasOutput");
var kGetLoggerInstance = Symbol("getLoggerInstance");
var kGetParseContext = Symbol("getParseContext");
var kGetUsageInstance = Symbol("getUsageInstance");
var kGetValidationInstance = Symbol("getValidationInstance");
var kHasParseCallback = Symbol("hasParseCallback");
var kIsGlobalContext = Symbol("isGlobalContext");
var kPostProcess = Symbol("postProcess");
var kRebase = Symbol("rebase");
var kReset = Symbol("reset");
var kRunYargsParserAndExecuteCommands = Symbol("runYargsParserAndExecuteCommands");
var kRunValidation = Symbol("runValidation");
var kSetHasOutput = Symbol("setHasOutput");
var kTrackManuallySetKeys = Symbol("kTrackManuallySetKeys");
var YargsInstance = class {
  constructor(processArgs = [], cwd, parentRequire, shim3) {
    this.customScriptName = false;
    this.parsed = false;
    _YargsInstance_command.set(this, void 0);
    _YargsInstance_cwd.set(this, void 0);
    _YargsInstance_context.set(this, { commands: [], fullCommands: [] });
    _YargsInstance_completion.set(this, null);
    _YargsInstance_completionCommand.set(this, null);
    _YargsInstance_defaultShowHiddenOpt.set(this, "show-hidden");
    _YargsInstance_exitError.set(this, null);
    _YargsInstance_detectLocale.set(this, true);
    _YargsInstance_emittedWarnings.set(this, {});
    _YargsInstance_exitProcess.set(this, true);
    _YargsInstance_frozens.set(this, []);
    _YargsInstance_globalMiddleware.set(this, void 0);
    _YargsInstance_groups.set(this, {});
    _YargsInstance_hasOutput.set(this, false);
    _YargsInstance_helpOpt.set(this, null);
    _YargsInstance_isGlobalContext.set(this, true);
    _YargsInstance_logger.set(this, void 0);
    _YargsInstance_output.set(this, "");
    _YargsInstance_options.set(this, void 0);
    _YargsInstance_parentRequire.set(this, void 0);
    _YargsInstance_parserConfig.set(this, {});
    _YargsInstance_parseFn.set(this, null);
    _YargsInstance_parseContext.set(this, null);
    _YargsInstance_pkgs.set(this, {});
    _YargsInstance_preservedGroups.set(this, {});
    _YargsInstance_processArgs.set(this, void 0);
    _YargsInstance_recommendCommands.set(this, false);
    _YargsInstance_shim.set(this, void 0);
    _YargsInstance_strict.set(this, false);
    _YargsInstance_strictCommands.set(this, false);
    _YargsInstance_strictOptions.set(this, false);
    _YargsInstance_usage.set(this, void 0);
    _YargsInstance_usageConfig.set(this, {});
    _YargsInstance_versionOpt.set(this, null);
    _YargsInstance_validation.set(this, void 0);
    __classPrivateFieldSet(this, _YargsInstance_shim, shim3, "f");
    __classPrivateFieldSet(this, _YargsInstance_processArgs, processArgs, "f");
    __classPrivateFieldSet(this, _YargsInstance_cwd, cwd, "f");
    __classPrivateFieldSet(this, _YargsInstance_parentRequire, parentRequire, "f");
    __classPrivateFieldSet(this, _YargsInstance_globalMiddleware, new GlobalMiddleware(this), "f");
    this.$0 = this[kGetDollarZero]();
    this[kReset]();
    __classPrivateFieldSet(this, _YargsInstance_command, __classPrivateFieldGet(this, _YargsInstance_command, "f"), "f");
    __classPrivateFieldSet(this, _YargsInstance_usage, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), "f");
    __classPrivateFieldSet(this, _YargsInstance_validation, __classPrivateFieldGet(this, _YargsInstance_validation, "f"), "f");
    __classPrivateFieldSet(this, _YargsInstance_options, __classPrivateFieldGet(this, _YargsInstance_options, "f"), "f");
    __classPrivateFieldGet(this, _YargsInstance_options, "f").showHiddenOpt = __classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, "f");
    __classPrivateFieldSet(this, _YargsInstance_logger, this[kCreateLogger](), "f");
  }
  addHelpOpt(opt, msg) {
    const defaultHelpOpt = "help";
    argsert("[string|boolean] [string]", [opt, msg], arguments.length);
    if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")) {
      this[kDeleteFromParserHintObject](__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"));
      __classPrivateFieldSet(this, _YargsInstance_helpOpt, null, "f");
    }
    if (opt === false && msg === void 0)
      return this;
    __classPrivateFieldSet(this, _YargsInstance_helpOpt, typeof opt === "string" ? opt : defaultHelpOpt, "f");
    this.boolean(__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"));
    this.describe(__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"), msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup("Show help"));
    return this;
  }
  help(opt, msg) {
    return this.addHelpOpt(opt, msg);
  }
  addShowHiddenOpt(opt, msg) {
    argsert("[string|boolean] [string]", [opt, msg], arguments.length);
    if (opt === false && msg === void 0)
      return this;
    const showHiddenOpt = typeof opt === "string" ? opt : __classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, "f");
    this.boolean(showHiddenOpt);
    this.describe(showHiddenOpt, msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup("Show hidden options"));
    __classPrivateFieldGet(this, _YargsInstance_options, "f").showHiddenOpt = showHiddenOpt;
    return this;
  }
  showHidden(opt, msg) {
    return this.addShowHiddenOpt(opt, msg);
  }
  alias(key, value) {
    argsert("<object|string|array> [string|array]", [key, value], arguments.length);
    this[kPopulateParserHintArrayDictionary](this.alias.bind(this), "alias", key, value);
    return this;
  }
  array(keys) {
    argsert("<array|string>", [keys], arguments.length);
    this[kPopulateParserHintArray]("array", keys);
    this[kTrackManuallySetKeys](keys);
    return this;
  }
  boolean(keys) {
    argsert("<array|string>", [keys], arguments.length);
    this[kPopulateParserHintArray]("boolean", keys);
    this[kTrackManuallySetKeys](keys);
    return this;
  }
  check(f, global) {
    argsert("<function> [boolean]", [f, global], arguments.length);
    this.middleware((argv, _yargs) => {
      return maybeAsyncResult(() => {
        return f(argv, _yargs.getOptions());
      }, (result) => {
        if (!result) {
          __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(__classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.__("Argument check failed: %s", f.toString()));
        } else if (typeof result === "string" || result instanceof Error) {
          __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(result.toString(), result);
        }
        return argv;
      }, (err) => {
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(err.message ? err.message : err.toString(), err);
        return argv;
      });
    }, false, global);
    return this;
  }
  choices(key, value) {
    argsert("<object|string|array> [string|array]", [key, value], arguments.length);
    this[kPopulateParserHintArrayDictionary](this.choices.bind(this), "choices", key, value);
    return this;
  }
  coerce(keys, value) {
    argsert("<object|string|array> [function]", [keys, value], arguments.length);
    if (Array.isArray(keys)) {
      if (!value) {
        throw new YError("coerce callback must be provided");
      }
      for (const key of keys) {
        this.coerce(key, value);
      }
      return this;
    } else if (typeof keys === "object") {
      for (const key of Object.keys(keys)) {
        this.coerce(key, keys[key]);
      }
      return this;
    }
    if (!value) {
      throw new YError("coerce callback must be provided");
    }
    __classPrivateFieldGet(this, _YargsInstance_options, "f").key[keys] = true;
    __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").addCoerceMiddleware((argv, yargs) => {
      let aliases;
      const shouldCoerce = Object.prototype.hasOwnProperty.call(argv, keys);
      if (!shouldCoerce) {
        return argv;
      }
      return maybeAsyncResult(() => {
        aliases = yargs.getAliases();
        return value(argv[keys]);
      }, (result) => {
        argv[keys] = result;
        const stripAliased = yargs.getInternalMethods().getParserConfiguration()["strip-aliased"];
        if (aliases[keys] && stripAliased !== true) {
          for (const alias of aliases[keys]) {
            argv[alias] = result;
          }
        }
        return argv;
      }, (err) => {
        throw new YError(err.message);
      });
    }, keys);
    return this;
  }
  conflicts(key1, key2) {
    argsert("<string|object> [string|array]", [key1, key2], arguments.length);
    __classPrivateFieldGet(this, _YargsInstance_validation, "f").conflicts(key1, key2);
    return this;
  }
  config(key = "config", msg, parseFn) {
    argsert("[object|string] [string|function] [function]", [key, msg, parseFn], arguments.length);
    if (typeof key === "object" && !Array.isArray(key)) {
      key = applyExtends(key, __classPrivateFieldGet(this, _YargsInstance_cwd, "f"), this[kGetParserConfiguration]()["deep-merge-config"] || false, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
      __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = (__classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || []).concat(key);
      return this;
    }
    if (typeof msg === "function") {
      parseFn = msg;
      msg = void 0;
    }
    this.describe(key, msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup("Path to JSON config file"));
    (Array.isArray(key) ? key : [key]).forEach((k) => {
      __classPrivateFieldGet(this, _YargsInstance_options, "f").config[k] = parseFn || true;
    });
    return this;
  }
  completion(cmd, desc, fn) {
    argsert("[string] [string|boolean|function] [function]", [cmd, desc, fn], arguments.length);
    if (typeof desc === "function") {
      fn = desc;
      desc = void 0;
    }
    __classPrivateFieldSet(this, _YargsInstance_completionCommand, cmd || __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") || "completion", "f");
    if (!desc && desc !== false) {
      desc = "generate completion script";
    }
    this.command(__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f"), desc);
    if (fn)
      __classPrivateFieldGet(this, _YargsInstance_completion, "f").registerFunction(fn);
    return this;
  }
  command(cmd, description, builder, handler, middlewares, deprecated) {
    argsert("<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]", [cmd, description, builder, handler, middlewares, deprecated], arguments.length);
    __classPrivateFieldGet(this, _YargsInstance_command, "f").addHandler(cmd, description, builder, handler, middlewares, deprecated);
    return this;
  }
  commands(cmd, description, builder, handler, middlewares, deprecated) {
    return this.command(cmd, description, builder, handler, middlewares, deprecated);
  }
  commandDir(dir, opts) {
    argsert("<string> [object]", [dir, opts], arguments.length);
    const req = __classPrivateFieldGet(this, _YargsInstance_parentRequire, "f") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").require;
    __classPrivateFieldGet(this, _YargsInstance_command, "f").addDirectory(dir, req, __classPrivateFieldGet(this, _YargsInstance_shim, "f").getCallerFile(), opts);
    return this;
  }
  count(keys) {
    argsert("<array|string>", [keys], arguments.length);
    this[kPopulateParserHintArray]("count", keys);
    this[kTrackManuallySetKeys](keys);
    return this;
  }
  default(key, value, defaultDescription) {
    argsert("<object|string|array> [*] [string]", [key, value, defaultDescription], arguments.length);
    if (defaultDescription) {
      assertSingleKey(key, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
      __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key] = defaultDescription;
    }
    if (typeof value === "function") {
      assertSingleKey(key, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
      if (!__classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key])
        __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key] = __classPrivateFieldGet(this, _YargsInstance_usage, "f").functionDescription(value);
      value = value.call();
    }
    this[kPopulateParserHintSingleValueDictionary](this.default.bind(this), "default", key, value);
    return this;
  }
  defaults(key, value, defaultDescription) {
    return this.default(key, value, defaultDescription);
  }
  demandCommand(min = 1, max, minMsg, maxMsg) {
    argsert("[number] [number|string] [string|null|undefined] [string|null|undefined]", [min, max, minMsg, maxMsg], arguments.length);
    if (typeof max !== "number") {
      minMsg = max;
      max = Infinity;
    }
    this.global("_", false);
    __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedCommands._ = {
      min,
      max,
      minMsg,
      maxMsg
    };
    return this;
  }
  demand(keys, max, msg) {
    if (Array.isArray(max)) {
      max.forEach((key) => {
        assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        this.demandOption(key, msg);
      });
      max = Infinity;
    } else if (typeof max !== "number") {
      msg = max;
      max = Infinity;
    }
    if (typeof keys === "number") {
      assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
      this.demandCommand(keys, max, msg, msg);
    } else if (Array.isArray(keys)) {
      keys.forEach((key) => {
        assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        this.demandOption(key, msg);
      });
    } else {
      if (typeof msg === "string") {
        this.demandOption(keys, msg);
      } else if (msg === true || typeof msg === "undefined") {
        this.demandOption(keys);
      }
    }
    return this;
  }
  demandOption(keys, msg) {
    argsert("<object|string|array> [string]", [keys, msg], arguments.length);
    this[kPopulateParserHintSingleValueDictionary](this.demandOption.bind(this), "demandedOptions", keys, msg);
    return this;
  }
  deprecateOption(option, message) {
    argsert("<string> [string|boolean]", [option, message], arguments.length);
    __classPrivateFieldGet(this, _YargsInstance_options, "f").deprecatedOptions[option] = message;
    return this;
  }
  describe(keys, description) {
    argsert("<object|string|array> [string]", [keys, description], arguments.length);
    this[kSetKey](keys, true);
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").describe(keys, description);
    return this;
  }
  detectLocale(detect) {
    argsert("<boolean>", [detect], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_detectLocale, detect, "f");
    return this;
  }
  env(prefix) {
    argsert("[string|boolean]", [prefix], arguments.length);
    if (prefix === false)
      delete __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix;
    else
      __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix = prefix || "";
    return this;
  }
  epilogue(msg) {
    argsert("<string>", [msg], arguments.length);
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").epilog(msg);
    return this;
  }
  epilog(msg) {
    return this.epilogue(msg);
  }
  example(cmd, description) {
    argsert("<string|array> [string]", [cmd, description], arguments.length);
    if (Array.isArray(cmd)) {
      cmd.forEach((exampleParams) => this.example(...exampleParams));
    } else {
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").example(cmd, description);
    }
    return this;
  }
  exit(code, err) {
    __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
    __classPrivateFieldSet(this, _YargsInstance_exitError, err, "f");
    if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
      __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.exit(code);
  }
  exitProcess(enabled = true) {
    argsert("[boolean]", [enabled], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_exitProcess, enabled, "f");
    return this;
  }
  fail(f) {
    argsert("<function|boolean>", [f], arguments.length);
    if (typeof f === "boolean" && f !== false) {
      throw new YError("Invalid first argument. Expected function or boolean 'false'");
    }
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").failFn(f);
    return this;
  }
  getAliases() {
    return this.parsed ? this.parsed.aliases : {};
  }
  async getCompletion(args, done) {
    argsert("<array> [function]", [args, done], arguments.length);
    if (!done) {
      return new Promise((resolve5, reject) => {
        __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(args, (err, completions) => {
          if (err)
            reject(err);
          else
            resolve5(completions);
        });
      });
    } else {
      return __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(args, done);
    }
  }
  getDemandedOptions() {
    argsert([], 0);
    return __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedOptions;
  }
  getDemandedCommands() {
    argsert([], 0);
    return __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedCommands;
  }
  getDeprecatedOptions() {
    argsert([], 0);
    return __classPrivateFieldGet(this, _YargsInstance_options, "f").deprecatedOptions;
  }
  getDetectLocale() {
    return __classPrivateFieldGet(this, _YargsInstance_detectLocale, "f");
  }
  getExitProcess() {
    return __classPrivateFieldGet(this, _YargsInstance_exitProcess, "f");
  }
  getGroups() {
    return Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_groups, "f"), __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f"));
  }
  getHelp() {
    __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
    if (!__classPrivateFieldGet(this, _YargsInstance_usage, "f").hasCachedHelpMessage()) {
      if (!this.parsed) {
        const parse = this[kRunYargsParserAndExecuteCommands](__classPrivateFieldGet(this, _YargsInstance_processArgs, "f"), void 0, void 0, 0, true);
        if (isPromise(parse)) {
          return parse.then(() => {
            return __classPrivateFieldGet(this, _YargsInstance_usage, "f").help();
          });
        }
      }
      const builderResponse = __classPrivateFieldGet(this, _YargsInstance_command, "f").runDefaultBuilderOn(this);
      if (isPromise(builderResponse)) {
        return builderResponse.then(() => {
          return __classPrivateFieldGet(this, _YargsInstance_usage, "f").help();
        });
      }
    }
    return Promise.resolve(__classPrivateFieldGet(this, _YargsInstance_usage, "f").help());
  }
  getOptions() {
    return __classPrivateFieldGet(this, _YargsInstance_options, "f");
  }
  getStrict() {
    return __classPrivateFieldGet(this, _YargsInstance_strict, "f");
  }
  getStrictCommands() {
    return __classPrivateFieldGet(this, _YargsInstance_strictCommands, "f");
  }
  getStrictOptions() {
    return __classPrivateFieldGet(this, _YargsInstance_strictOptions, "f");
  }
  global(globals, global) {
    argsert("<string|array> [boolean]", [globals, global], arguments.length);
    globals = [].concat(globals);
    if (global !== false) {
      __classPrivateFieldGet(this, _YargsInstance_options, "f").local = __classPrivateFieldGet(this, _YargsInstance_options, "f").local.filter((l) => globals.indexOf(l) === -1);
    } else {
      globals.forEach((g) => {
        if (!__classPrivateFieldGet(this, _YargsInstance_options, "f").local.includes(g))
          __classPrivateFieldGet(this, _YargsInstance_options, "f").local.push(g);
      });
    }
    return this;
  }
  group(opts, groupName) {
    argsert("<string|array> <string>", [opts, groupName], arguments.length);
    const existing = __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName] || __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName];
    if (__classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName]) {
      delete __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName];
    }
    const seen = {};
    __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName] = (existing || []).concat(opts).filter((key) => {
      if (seen[key])
        return false;
      return seen[key] = true;
    });
    return this;
  }
  hide(key) {
    argsert("<string>", [key], arguments.length);
    __classPrivateFieldGet(this, _YargsInstance_options, "f").hiddenOptions.push(key);
    return this;
  }
  implies(key, value) {
    argsert("<string|object> [number|string|array]", [key, value], arguments.length);
    __classPrivateFieldGet(this, _YargsInstance_validation, "f").implies(key, value);
    return this;
  }
  locale(locale) {
    argsert("[string]", [locale], arguments.length);
    if (locale === void 0) {
      this[kGuessLocale]();
      return __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.getLocale();
    }
    __classPrivateFieldSet(this, _YargsInstance_detectLocale, false, "f");
    __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.setLocale(locale);
    return this;
  }
  middleware(callback, applyBeforeValidation, global) {
    return __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").addMiddleware(callback, !!applyBeforeValidation, global);
  }
  nargs(key, value) {
    argsert("<string|object|array> [number]", [key, value], arguments.length);
    this[kPopulateParserHintSingleValueDictionary](this.nargs.bind(this), "narg", key, value);
    return this;
  }
  normalize(keys) {
    argsert("<array|string>", [keys], arguments.length);
    this[kPopulateParserHintArray]("normalize", keys);
    return this;
  }
  number(keys) {
    argsert("<array|string>", [keys], arguments.length);
    this[kPopulateParserHintArray]("number", keys);
    this[kTrackManuallySetKeys](keys);
    return this;
  }
  option(key, opt) {
    argsert("<string|object> [object]", [key, opt], arguments.length);
    if (typeof key === "object") {
      Object.keys(key).forEach((k) => {
        this.options(k, key[k]);
      });
    } else {
      if (typeof opt !== "object") {
        opt = {};
      }
      this[kTrackManuallySetKeys](key);
      if (__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f") && (key === "version" || (opt === null || opt === void 0 ? void 0 : opt.alias) === "version")) {
        this[kEmitWarning]([
          '"version" is a reserved word.',
          "Please do one of the following:",
          '- Disable version with `yargs.version(false)` if using "version" as an option',
          "- Use the built-in `yargs.version` method instead (if applicable)",
          "- Use a different option key",
          "https://yargs.js.org/docs/#api-reference-version"
        ].join("\n"), void 0, "versionWarning");
      }
      __classPrivateFieldGet(this, _YargsInstance_options, "f").key[key] = true;
      if (opt.alias)
        this.alias(key, opt.alias);
      const deprecate = opt.deprecate || opt.deprecated;
      if (deprecate) {
        this.deprecateOption(key, deprecate);
      }
      const demand = opt.demand || opt.required || opt.require;
      if (demand) {
        this.demand(key, demand);
      }
      if (opt.demandOption) {
        this.demandOption(key, typeof opt.demandOption === "string" ? opt.demandOption : void 0);
      }
      if (opt.conflicts) {
        this.conflicts(key, opt.conflicts);
      }
      if ("default" in opt) {
        this.default(key, opt.default);
      }
      if (opt.implies !== void 0) {
        this.implies(key, opt.implies);
      }
      if (opt.nargs !== void 0) {
        this.nargs(key, opt.nargs);
      }
      if (opt.config) {
        this.config(key, opt.configParser);
      }
      if (opt.normalize) {
        this.normalize(key);
      }
      if (opt.choices) {
        this.choices(key, opt.choices);
      }
      if (opt.coerce) {
        this.coerce(key, opt.coerce);
      }
      if (opt.group) {
        this.group(key, opt.group);
      }
      if (opt.boolean || opt.type === "boolean") {
        this.boolean(key);
        if (opt.alias)
          this.boolean(opt.alias);
      }
      if (opt.array || opt.type === "array") {
        this.array(key);
        if (opt.alias)
          this.array(opt.alias);
      }
      if (opt.number || opt.type === "number") {
        this.number(key);
        if (opt.alias)
          this.number(opt.alias);
      }
      if (opt.string || opt.type === "string") {
        this.string(key);
        if (opt.alias)
          this.string(opt.alias);
      }
      if (opt.count || opt.type === "count") {
        this.count(key);
      }
      if (typeof opt.global === "boolean") {
        this.global(key, opt.global);
      }
      if (opt.defaultDescription) {
        __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key] = opt.defaultDescription;
      }
      if (opt.skipValidation) {
        this.skipValidation(key);
      }
      const desc = opt.describe || opt.description || opt.desc;
      const descriptions = __classPrivateFieldGet(this, _YargsInstance_usage, "f").getDescriptions();
      if (!Object.prototype.hasOwnProperty.call(descriptions, key) || typeof desc === "string") {
        this.describe(key, desc);
      }
      if (opt.hidden) {
        this.hide(key);
      }
      if (opt.requiresArg) {
        this.requiresArg(key);
      }
    }
    return this;
  }
  options(key, opt) {
    return this.option(key, opt);
  }
  parse(args, shortCircuit, _parseFn) {
    argsert("[string|array] [function|boolean|object] [function]", [args, shortCircuit, _parseFn], arguments.length);
    this[kFreeze]();
    if (typeof args === "undefined") {
      args = __classPrivateFieldGet(this, _YargsInstance_processArgs, "f");
    }
    if (typeof shortCircuit === "object") {
      __classPrivateFieldSet(this, _YargsInstance_parseContext, shortCircuit, "f");
      shortCircuit = _parseFn;
    }
    if (typeof shortCircuit === "function") {
      __classPrivateFieldSet(this, _YargsInstance_parseFn, shortCircuit, "f");
      shortCircuit = false;
    }
    if (!shortCircuit)
      __classPrivateFieldSet(this, _YargsInstance_processArgs, args, "f");
    if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f"))
      __classPrivateFieldSet(this, _YargsInstance_exitProcess, false, "f");
    const parsed = this[kRunYargsParserAndExecuteCommands](args, !!shortCircuit);
    const tmpParsed = this.parsed;
    __classPrivateFieldGet(this, _YargsInstance_completion, "f").setParsed(this.parsed);
    if (isPromise(parsed)) {
      return parsed.then((argv) => {
        if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f"))
          __classPrivateFieldGet(this, _YargsInstance_parseFn, "f").call(this, __classPrivateFieldGet(this, _YargsInstance_exitError, "f"), argv, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
        return argv;
      }).catch((err) => {
        if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f")) {
          __classPrivateFieldGet(this, _YargsInstance_parseFn, "f")(err, this.parsed.argv, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
        }
        throw err;
      }).finally(() => {
        this[kUnfreeze]();
        this.parsed = tmpParsed;
      });
    } else {
      if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f"))
        __classPrivateFieldGet(this, _YargsInstance_parseFn, "f").call(this, __classPrivateFieldGet(this, _YargsInstance_exitError, "f"), parsed, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
      this[kUnfreeze]();
      this.parsed = tmpParsed;
    }
    return parsed;
  }
  parseAsync(args, shortCircuit, _parseFn) {
    const maybePromise = this.parse(args, shortCircuit, _parseFn);
    return !isPromise(maybePromise) ? Promise.resolve(maybePromise) : maybePromise;
  }
  parseSync(args, shortCircuit, _parseFn) {
    const maybePromise = this.parse(args, shortCircuit, _parseFn);
    if (isPromise(maybePromise)) {
      throw new YError(".parseSync() must not be used with asynchronous builders, handlers, or middleware");
    }
    return maybePromise;
  }
  parserConfiguration(config) {
    argsert("<object>", [config], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_parserConfig, config, "f");
    return this;
  }
  pkgConf(key, rootPath) {
    argsert("<string> [string]", [key, rootPath], arguments.length);
    let conf = null;
    const obj = this[kPkgUp](rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, "f"));
    if (obj[key] && typeof obj[key] === "object") {
      conf = applyExtends(obj[key], rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, "f"), this[kGetParserConfiguration]()["deep-merge-config"] || false, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
      __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = (__classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || []).concat(conf);
    }
    return this;
  }
  positional(key, opts) {
    argsert("<string> <object>", [key, opts], arguments.length);
    const supportedOpts = [
      "default",
      "defaultDescription",
      "implies",
      "normalize",
      "choices",
      "conflicts",
      "coerce",
      "type",
      "describe",
      "desc",
      "description",
      "alias"
    ];
    opts = objFilter(opts, (k, v) => {
      if (k === "type" && !["string", "number", "boolean"].includes(v))
        return false;
      return supportedOpts.includes(k);
    });
    const fullCommand = __classPrivateFieldGet(this, _YargsInstance_context, "f").fullCommands[__classPrivateFieldGet(this, _YargsInstance_context, "f").fullCommands.length - 1];
    const parseOptions = fullCommand ? __classPrivateFieldGet(this, _YargsInstance_command, "f").cmdToParseOptions(fullCommand) : {
      array: [],
      alias: {},
      default: {},
      demand: {}
    };
    objectKeys(parseOptions).forEach((pk) => {
      const parseOption = parseOptions[pk];
      if (Array.isArray(parseOption)) {
        if (parseOption.indexOf(key) !== -1)
          opts[pk] = true;
      } else {
        if (parseOption[key] && !(pk in opts))
          opts[pk] = parseOption[key];
      }
    });
    this.group(key, __classPrivateFieldGet(this, _YargsInstance_usage, "f").getPositionalGroupName());
    return this.option(key, opts);
  }
  recommendCommands(recommend = true) {
    argsert("[boolean]", [recommend], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_recommendCommands, recommend, "f");
    return this;
  }
  required(keys, max, msg) {
    return this.demand(keys, max, msg);
  }
  require(keys, max, msg) {
    return this.demand(keys, max, msg);
  }
  requiresArg(keys) {
    argsert("<array|string|object> [number]", [keys], arguments.length);
    if (typeof keys === "string" && __classPrivateFieldGet(this, _YargsInstance_options, "f").narg[keys]) {
      return this;
    } else {
      this[kPopulateParserHintSingleValueDictionary](this.requiresArg.bind(this), "narg", keys, NaN);
    }
    return this;
  }
  showCompletionScript($0, cmd) {
    argsert("[string] [string]", [$0, cmd], arguments.length);
    $0 = $0 || this.$0;
    __classPrivateFieldGet(this, _YargsInstance_logger, "f").log(__classPrivateFieldGet(this, _YargsInstance_completion, "f").generateCompletionScript($0, cmd || __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") || "completion"));
    return this;
  }
  showHelp(level) {
    argsert("[string|function]", [level], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
    if (!__classPrivateFieldGet(this, _YargsInstance_usage, "f").hasCachedHelpMessage()) {
      if (!this.parsed) {
        const parse = this[kRunYargsParserAndExecuteCommands](__classPrivateFieldGet(this, _YargsInstance_processArgs, "f"), void 0, void 0, 0, true);
        if (isPromise(parse)) {
          parse.then(() => {
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
          });
          return this;
        }
      }
      const builderResponse = __classPrivateFieldGet(this, _YargsInstance_command, "f").runDefaultBuilderOn(this);
      if (isPromise(builderResponse)) {
        builderResponse.then(() => {
          __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
        });
        return this;
      }
    }
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
    return this;
  }
  scriptName(scriptName) {
    this.customScriptName = true;
    this.$0 = scriptName;
    return this;
  }
  showHelpOnFail(enabled, message) {
    argsert("[boolean|string] [string]", [enabled, message], arguments.length);
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelpOnFail(enabled, message);
    return this;
  }
  showVersion(level) {
    argsert("[string|function]", [level], arguments.length);
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").showVersion(level);
    return this;
  }
  skipValidation(keys) {
    argsert("<array|string>", [keys], arguments.length);
    this[kPopulateParserHintArray]("skipValidation", keys);
    return this;
  }
  strict(enabled) {
    argsert("[boolean]", [enabled], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_strict, enabled !== false, "f");
    return this;
  }
  strictCommands(enabled) {
    argsert("[boolean]", [enabled], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_strictCommands, enabled !== false, "f");
    return this;
  }
  strictOptions(enabled) {
    argsert("[boolean]", [enabled], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_strictOptions, enabled !== false, "f");
    return this;
  }
  string(keys) {
    argsert("<array|string>", [keys], arguments.length);
    this[kPopulateParserHintArray]("string", keys);
    this[kTrackManuallySetKeys](keys);
    return this;
  }
  terminalWidth() {
    argsert([], 0);
    return __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.stdColumns;
  }
  updateLocale(obj) {
    return this.updateStrings(obj);
  }
  updateStrings(obj) {
    argsert("<object>", [obj], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_detectLocale, false, "f");
    __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.updateLocale(obj);
    return this;
  }
  usage(msg, description, builder, handler) {
    argsert("<string|null|undefined> [string|boolean] [function|object] [function]", [msg, description, builder, handler], arguments.length);
    if (description !== void 0) {
      assertNotStrictEqual(msg, null, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
      if ((msg || "").match(/^\$0( |$)/)) {
        return this.command(msg, description, builder, handler);
      } else {
        throw new YError(".usage() description must start with $0 if being used as alias for .command()");
      }
    } else {
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").usage(msg);
      return this;
    }
  }
  usageConfiguration(config) {
    argsert("<object>", [config], arguments.length);
    __classPrivateFieldSet(this, _YargsInstance_usageConfig, config, "f");
    return this;
  }
  version(opt, msg, ver) {
    const defaultVersionOpt = "version";
    argsert("[boolean|string] [string] [string]", [opt, msg, ver], arguments.length);
    if (__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f")) {
      this[kDeleteFromParserHintObject](__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"));
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").version(void 0);
      __classPrivateFieldSet(this, _YargsInstance_versionOpt, null, "f");
    }
    if (arguments.length === 0) {
      ver = this[kGuessVersion]();
      opt = defaultVersionOpt;
    } else if (arguments.length === 1) {
      if (opt === false) {
        return this;
      }
      ver = opt;
      opt = defaultVersionOpt;
    } else if (arguments.length === 2) {
      ver = msg;
      msg = void 0;
    }
    __classPrivateFieldSet(this, _YargsInstance_versionOpt, typeof opt === "string" ? opt : defaultVersionOpt, "f");
    msg = msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup("Show version number");
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").version(ver || void 0);
    this.boolean(__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"));
    this.describe(__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"), msg);
    return this;
  }
  wrap(cols) {
    argsert("<number|null|undefined>", [cols], arguments.length);
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").wrap(cols);
    return this;
  }
  [(_YargsInstance_command = /* @__PURE__ */ new WeakMap(), _YargsInstance_cwd = /* @__PURE__ */ new WeakMap(), _YargsInstance_context = /* @__PURE__ */ new WeakMap(), _YargsInstance_completion = /* @__PURE__ */ new WeakMap(), _YargsInstance_completionCommand = /* @__PURE__ */ new WeakMap(), _YargsInstance_defaultShowHiddenOpt = /* @__PURE__ */ new WeakMap(), _YargsInstance_exitError = /* @__PURE__ */ new WeakMap(), _YargsInstance_detectLocale = /* @__PURE__ */ new WeakMap(), _YargsInstance_emittedWarnings = /* @__PURE__ */ new WeakMap(), _YargsInstance_exitProcess = /* @__PURE__ */ new WeakMap(), _YargsInstance_frozens = /* @__PURE__ */ new WeakMap(), _YargsInstance_globalMiddleware = /* @__PURE__ */ new WeakMap(), _YargsInstance_groups = /* @__PURE__ */ new WeakMap(), _YargsInstance_hasOutput = /* @__PURE__ */ new WeakMap(), _YargsInstance_helpOpt = /* @__PURE__ */ new WeakMap(), _YargsInstance_isGlobalContext = /* @__PURE__ */ new WeakMap(), _YargsInstance_logger = /* @__PURE__ */ new WeakMap(), _YargsInstance_output = /* @__PURE__ */ new WeakMap(), _YargsInstance_options = /* @__PURE__ */ new WeakMap(), _YargsInstance_parentRequire = /* @__PURE__ */ new WeakMap(), _YargsInstance_parserConfig = /* @__PURE__ */ new WeakMap(), _YargsInstance_parseFn = /* @__PURE__ */ new WeakMap(), _YargsInstance_parseContext = /* @__PURE__ */ new WeakMap(), _YargsInstance_pkgs = /* @__PURE__ */ new WeakMap(), _YargsInstance_preservedGroups = /* @__PURE__ */ new WeakMap(), _YargsInstance_processArgs = /* @__PURE__ */ new WeakMap(), _YargsInstance_recommendCommands = /* @__PURE__ */ new WeakMap(), _YargsInstance_shim = /* @__PURE__ */ new WeakMap(), _YargsInstance_strict = /* @__PURE__ */ new WeakMap(), _YargsInstance_strictCommands = /* @__PURE__ */ new WeakMap(), _YargsInstance_strictOptions = /* @__PURE__ */ new WeakMap(), _YargsInstance_usage = /* @__PURE__ */ new WeakMap(), _YargsInstance_usageConfig = /* @__PURE__ */ new WeakMap(), _YargsInstance_versionOpt = /* @__PURE__ */ new WeakMap(), _YargsInstance_validation = /* @__PURE__ */ new WeakMap(), kCopyDoubleDash)](argv) {
    if (!argv._ || !argv["--"])
      return argv;
    argv._.push.apply(argv._, argv["--"]);
    try {
      delete argv["--"];
    } catch (_err) {
    }
    return argv;
  }
  [kCreateLogger]() {
    return {
      log: (...args) => {
        if (!this[kHasParseCallback]())
          console.log(...args);
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
        if (__classPrivateFieldGet(this, _YargsInstance_output, "f").length)
          __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + "\n", "f");
        __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + args.join(" "), "f");
      },
      error: (...args) => {
        if (!this[kHasParseCallback]())
          console.error(...args);
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
        if (__classPrivateFieldGet(this, _YargsInstance_output, "f").length)
          __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + "\n", "f");
        __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + args.join(" "), "f");
      }
    };
  }
  [kDeleteFromParserHintObject](optionKey) {
    objectKeys(__classPrivateFieldGet(this, _YargsInstance_options, "f")).forEach((hintKey) => {
      if (((key) => key === "configObjects")(hintKey))
        return;
      const hint = __classPrivateFieldGet(this, _YargsInstance_options, "f")[hintKey];
      if (Array.isArray(hint)) {
        if (hint.includes(optionKey))
          hint.splice(hint.indexOf(optionKey), 1);
      } else if (typeof hint === "object") {
        delete hint[optionKey];
      }
    });
    delete __classPrivateFieldGet(this, _YargsInstance_usage, "f").getDescriptions()[optionKey];
  }
  [kEmitWarning](warning, type, deduplicationId) {
    if (!__classPrivateFieldGet(this, _YargsInstance_emittedWarnings, "f")[deduplicationId]) {
      __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.emitWarning(warning, type);
      __classPrivateFieldGet(this, _YargsInstance_emittedWarnings, "f")[deduplicationId] = true;
    }
  }
  [kFreeze]() {
    __classPrivateFieldGet(this, _YargsInstance_frozens, "f").push({
      options: __classPrivateFieldGet(this, _YargsInstance_options, "f"),
      configObjects: __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects.slice(0),
      exitProcess: __classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"),
      groups: __classPrivateFieldGet(this, _YargsInstance_groups, "f"),
      strict: __classPrivateFieldGet(this, _YargsInstance_strict, "f"),
      strictCommands: __classPrivateFieldGet(this, _YargsInstance_strictCommands, "f"),
      strictOptions: __classPrivateFieldGet(this, _YargsInstance_strictOptions, "f"),
      completionCommand: __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f"),
      output: __classPrivateFieldGet(this, _YargsInstance_output, "f"),
      exitError: __classPrivateFieldGet(this, _YargsInstance_exitError, "f"),
      hasOutput: __classPrivateFieldGet(this, _YargsInstance_hasOutput, "f"),
      parsed: this.parsed,
      parseFn: __classPrivateFieldGet(this, _YargsInstance_parseFn, "f"),
      parseContext: __classPrivateFieldGet(this, _YargsInstance_parseContext, "f")
    });
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").freeze();
    __classPrivateFieldGet(this, _YargsInstance_validation, "f").freeze();
    __classPrivateFieldGet(this, _YargsInstance_command, "f").freeze();
    __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").freeze();
  }
  [kGetDollarZero]() {
    let $0 = "";
    let default$0;
    if (/\b(node|iojs|electron)(\.exe)?$/.test(__classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv()[0])) {
      default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv().slice(1, 2);
    } else {
      default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv().slice(0, 1);
    }
    $0 = default$0.map((x) => {
      const b = this[kRebase](__classPrivateFieldGet(this, _YargsInstance_cwd, "f"), x);
      return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x;
    }).join(" ").trim();
    if (__classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("_") && __classPrivateFieldGet(this, _YargsInstance_shim, "f").getProcessArgvBin() === __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("_")) {
      $0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("_").replace(`${__classPrivateFieldGet(this, _YargsInstance_shim, "f").path.dirname(__classPrivateFieldGet(this, _YargsInstance_shim, "f").process.execPath())}/`, "");
    }
    return $0;
  }
  [kGetParserConfiguration]() {
    return __classPrivateFieldGet(this, _YargsInstance_parserConfig, "f");
  }
  [kGetUsageConfiguration]() {
    return __classPrivateFieldGet(this, _YargsInstance_usageConfig, "f");
  }
  [kGuessLocale]() {
    if (!__classPrivateFieldGet(this, _YargsInstance_detectLocale, "f"))
      return;
    const locale = __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("LC_ALL") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("LC_MESSAGES") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("LANG") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv("LANGUAGE") || "en_US";
    this.locale(locale.replace(/[.:].*/, ""));
  }
  [kGuessVersion]() {
    const obj = this[kPkgUp]();
    return obj.version || "unknown";
  }
  [kParsePositionalNumbers](argv) {
    const args = argv["--"] ? argv["--"] : argv._;
    for (let i = 0, arg; (arg = args[i]) !== void 0; i++) {
      if (__classPrivateFieldGet(this, _YargsInstance_shim, "f").Parser.looksLikeNumber(arg) && Number.isSafeInteger(Math.floor(parseFloat(`${arg}`)))) {
        args[i] = Number(arg);
      }
    }
    return argv;
  }
  [kPkgUp](rootPath) {
    const npath = rootPath || "*";
    if (__classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath])
      return __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath];
    let obj = {};
    try {
      let startDir = rootPath || __classPrivateFieldGet(this, _YargsInstance_shim, "f").mainFilename;
      if (!rootPath && __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.extname(startDir)) {
        startDir = __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.dirname(startDir);
      }
      const pkgJsonPath = __classPrivateFieldGet(this, _YargsInstance_shim, "f").findUp(startDir, (dir, names) => {
        if (names.includes("package.json")) {
          return "package.json";
        } else {
          return void 0;
        }
      });
      assertNotStrictEqual(pkgJsonPath, void 0, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
      obj = JSON.parse(__classPrivateFieldGet(this, _YargsInstance_shim, "f").readFileSync(pkgJsonPath, "utf8"));
    } catch (_noop) {
    }
    __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath] = obj || {};
    return __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath];
  }
  [kPopulateParserHintArray](type, keys) {
    keys = [].concat(keys);
    keys.forEach((key) => {
      key = this[kSanitizeKey](key);
      __classPrivateFieldGet(this, _YargsInstance_options, "f")[type].push(key);
    });
  }
  [kPopulateParserHintSingleValueDictionary](builder, type, key, value) {
    this[kPopulateParserHintDictionary](builder, type, key, value, (type2, key2, value2) => {
      __classPrivateFieldGet(this, _YargsInstance_options, "f")[type2][key2] = value2;
    });
  }
  [kPopulateParserHintArrayDictionary](builder, type, key, value) {
    this[kPopulateParserHintDictionary](builder, type, key, value, (type2, key2, value2) => {
      __classPrivateFieldGet(this, _YargsInstance_options, "f")[type2][key2] = (__classPrivateFieldGet(this, _YargsInstance_options, "f")[type2][key2] || []).concat(value2);
    });
  }
  [kPopulateParserHintDictionary](builder, type, key, value, singleKeyHandler) {
    if (Array.isArray(key)) {
      key.forEach((k) => {
        builder(k, value);
      });
    } else if (((key2) => typeof key2 === "object")(key)) {
      for (const k of objectKeys(key)) {
        builder(k, key[k]);
      }
    } else {
      singleKeyHandler(type, this[kSanitizeKey](key), value);
    }
  }
  [kSanitizeKey](key) {
    if (key === "__proto__")
      return "___proto___";
    return key;
  }
  [kSetKey](key, set) {
    this[kPopulateParserHintSingleValueDictionary](this[kSetKey].bind(this), "key", key, set);
    return this;
  }
  [kUnfreeze]() {
    var _a2, _b2, _c2, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const frozen = __classPrivateFieldGet(this, _YargsInstance_frozens, "f").pop();
    assertNotStrictEqual(frozen, void 0, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
    let configObjects;
    _a2 = this, _b2 = this, _c2 = this, _d = this, _e = this, _f = this, _g = this, _h = this, _j = this, _k = this, _l = this, _m = this, {
      options: { set value(_o) {
        __classPrivateFieldSet(_a2, _YargsInstance_options, _o, "f");
      } }.value,
      configObjects,
      exitProcess: { set value(_o) {
        __classPrivateFieldSet(_b2, _YargsInstance_exitProcess, _o, "f");
      } }.value,
      groups: { set value(_o) {
        __classPrivateFieldSet(_c2, _YargsInstance_groups, _o, "f");
      } }.value,
      output: { set value(_o) {
        __classPrivateFieldSet(_d, _YargsInstance_output, _o, "f");
      } }.value,
      exitError: { set value(_o) {
        __classPrivateFieldSet(_e, _YargsInstance_exitError, _o, "f");
      } }.value,
      hasOutput: { set value(_o) {
        __classPrivateFieldSet(_f, _YargsInstance_hasOutput, _o, "f");
      } }.value,
      parsed: this.parsed,
      strict: { set value(_o) {
        __classPrivateFieldSet(_g, _YargsInstance_strict, _o, "f");
      } }.value,
      strictCommands: { set value(_o) {
        __classPrivateFieldSet(_h, _YargsInstance_strictCommands, _o, "f");
      } }.value,
      strictOptions: { set value(_o) {
        __classPrivateFieldSet(_j, _YargsInstance_strictOptions, _o, "f");
      } }.value,
      completionCommand: { set value(_o) {
        __classPrivateFieldSet(_k, _YargsInstance_completionCommand, _o, "f");
      } }.value,
      parseFn: { set value(_o) {
        __classPrivateFieldSet(_l, _YargsInstance_parseFn, _o, "f");
      } }.value,
      parseContext: { set value(_o) {
        __classPrivateFieldSet(_m, _YargsInstance_parseContext, _o, "f");
      } }.value
    } = frozen;
    __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = configObjects;
    __classPrivateFieldGet(this, _YargsInstance_usage, "f").unfreeze();
    __classPrivateFieldGet(this, _YargsInstance_validation, "f").unfreeze();
    __classPrivateFieldGet(this, _YargsInstance_command, "f").unfreeze();
    __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").unfreeze();
  }
  [kValidateAsync](validation2, argv) {
    return maybeAsyncResult(argv, (result) => {
      validation2(result);
      return result;
    });
  }
  getInternalMethods() {
    return {
      getCommandInstance: this[kGetCommandInstance].bind(this),
      getContext: this[kGetContext].bind(this),
      getHasOutput: this[kGetHasOutput].bind(this),
      getLoggerInstance: this[kGetLoggerInstance].bind(this),
      getParseContext: this[kGetParseContext].bind(this),
      getParserConfiguration: this[kGetParserConfiguration].bind(this),
      getUsageConfiguration: this[kGetUsageConfiguration].bind(this),
      getUsageInstance: this[kGetUsageInstance].bind(this),
      getValidationInstance: this[kGetValidationInstance].bind(this),
      hasParseCallback: this[kHasParseCallback].bind(this),
      isGlobalContext: this[kIsGlobalContext].bind(this),
      postProcess: this[kPostProcess].bind(this),
      reset: this[kReset].bind(this),
      runValidation: this[kRunValidation].bind(this),
      runYargsParserAndExecuteCommands: this[kRunYargsParserAndExecuteCommands].bind(this),
      setHasOutput: this[kSetHasOutput].bind(this)
    };
  }
  [kGetCommandInstance]() {
    return __classPrivateFieldGet(this, _YargsInstance_command, "f");
  }
  [kGetContext]() {
    return __classPrivateFieldGet(this, _YargsInstance_context, "f");
  }
  [kGetHasOutput]() {
    return __classPrivateFieldGet(this, _YargsInstance_hasOutput, "f");
  }
  [kGetLoggerInstance]() {
    return __classPrivateFieldGet(this, _YargsInstance_logger, "f");
  }
  [kGetParseContext]() {
    return __classPrivateFieldGet(this, _YargsInstance_parseContext, "f") || {};
  }
  [kGetUsageInstance]() {
    return __classPrivateFieldGet(this, _YargsInstance_usage, "f");
  }
  [kGetValidationInstance]() {
    return __classPrivateFieldGet(this, _YargsInstance_validation, "f");
  }
  [kHasParseCallback]() {
    return !!__classPrivateFieldGet(this, _YargsInstance_parseFn, "f");
  }
  [kIsGlobalContext]() {
    return __classPrivateFieldGet(this, _YargsInstance_isGlobalContext, "f");
  }
  [kPostProcess](argv, populateDoubleDash, calledFromCommand, runGlobalMiddleware) {
    if (calledFromCommand)
      return argv;
    if (isPromise(argv))
      return argv;
    if (!populateDoubleDash) {
      argv = this[kCopyDoubleDash](argv);
    }
    const parsePositionalNumbers = this[kGetParserConfiguration]()["parse-positional-numbers"] || this[kGetParserConfiguration]()["parse-positional-numbers"] === void 0;
    if (parsePositionalNumbers) {
      argv = this[kParsePositionalNumbers](argv);
    }
    if (runGlobalMiddleware) {
      argv = applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), false);
    }
    return argv;
  }
  [kReset](aliases = {}) {
    __classPrivateFieldSet(this, _YargsInstance_options, __classPrivateFieldGet(this, _YargsInstance_options, "f") || {}, "f");
    const tmpOptions = {};
    tmpOptions.local = __classPrivateFieldGet(this, _YargsInstance_options, "f").local || [];
    tmpOptions.configObjects = __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || [];
    const localLookup = {};
    tmpOptions.local.forEach((l) => {
      localLookup[l] = true;
      (aliases[l] || []).forEach((a) => {
        localLookup[a] = true;
      });
    });
    Object.assign(__classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f"), Object.keys(__classPrivateFieldGet(this, _YargsInstance_groups, "f")).reduce((acc, groupName) => {
      const keys = __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName].filter((key) => !(key in localLookup));
      if (keys.length > 0) {
        acc[groupName] = keys;
      }
      return acc;
    }, {}));
    __classPrivateFieldSet(this, _YargsInstance_groups, {}, "f");
    const arrayOptions = [
      "array",
      "boolean",
      "string",
      "skipValidation",
      "count",
      "normalize",
      "number",
      "hiddenOptions"
    ];
    const objectOptions = [
      "narg",
      "key",
      "alias",
      "default",
      "defaultDescription",
      "config",
      "choices",
      "demandedOptions",
      "demandedCommands",
      "deprecatedOptions"
    ];
    arrayOptions.forEach((k) => {
      tmpOptions[k] = (__classPrivateFieldGet(this, _YargsInstance_options, "f")[k] || []).filter((k2) => !localLookup[k2]);
    });
    objectOptions.forEach((k) => {
      tmpOptions[k] = objFilter(__classPrivateFieldGet(this, _YargsInstance_options, "f")[k], (k2) => !localLookup[k2]);
    });
    tmpOptions.envPrefix = __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix;
    __classPrivateFieldSet(this, _YargsInstance_options, tmpOptions, "f");
    __classPrivateFieldSet(this, _YargsInstance_usage, __classPrivateFieldGet(this, _YargsInstance_usage, "f") ? __classPrivateFieldGet(this, _YargsInstance_usage, "f").reset(localLookup) : usage(this, __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
    __classPrivateFieldSet(this, _YargsInstance_validation, __classPrivateFieldGet(this, _YargsInstance_validation, "f") ? __classPrivateFieldGet(this, _YargsInstance_validation, "f").reset(localLookup) : validation(this, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
    __classPrivateFieldSet(this, _YargsInstance_command, __classPrivateFieldGet(this, _YargsInstance_command, "f") ? __classPrivateFieldGet(this, _YargsInstance_command, "f").reset() : command(__classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_validation, "f"), __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
    if (!__classPrivateFieldGet(this, _YargsInstance_completion, "f"))
      __classPrivateFieldSet(this, _YargsInstance_completion, completion(this, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_command, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
    __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").reset();
    __classPrivateFieldSet(this, _YargsInstance_completionCommand, null, "f");
    __classPrivateFieldSet(this, _YargsInstance_output, "", "f");
    __classPrivateFieldSet(this, _YargsInstance_exitError, null, "f");
    __classPrivateFieldSet(this, _YargsInstance_hasOutput, false, "f");
    this.parsed = false;
    return this;
  }
  [kRebase](base, dir) {
    return __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.relative(base, dir);
  }
  [kRunYargsParserAndExecuteCommands](args, shortCircuit, calledFromCommand, commandIndex = 0, helpOnly = false) {
    let skipValidation = !!calledFromCommand || helpOnly;
    args = args || __classPrivateFieldGet(this, _YargsInstance_processArgs, "f");
    __classPrivateFieldGet(this, _YargsInstance_options, "f").__ = __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.__;
    __classPrivateFieldGet(this, _YargsInstance_options, "f").configuration = this[kGetParserConfiguration]();
    const populateDoubleDash = !!__classPrivateFieldGet(this, _YargsInstance_options, "f").configuration["populate--"];
    const config = Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_options, "f").configuration, {
      "populate--": true
    });
    const parsed = __classPrivateFieldGet(this, _YargsInstance_shim, "f").Parser.detailed(args, Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_options, "f"), {
      configuration: { "parse-positional-numbers": false, ...config }
    }));
    const argv = Object.assign(parsed.argv, __classPrivateFieldGet(this, _YargsInstance_parseContext, "f"));
    let argvPromise = void 0;
    const aliases = parsed.aliases;
    let helpOptSet = false;
    let versionOptSet = false;
    Object.keys(argv).forEach((key) => {
      if (key === __classPrivateFieldGet(this, _YargsInstance_helpOpt, "f") && argv[key]) {
        helpOptSet = true;
      } else if (key === __classPrivateFieldGet(this, _YargsInstance_versionOpt, "f") && argv[key]) {
        versionOptSet = true;
      }
    });
    argv.$0 = this.$0;
    this.parsed = parsed;
    if (commandIndex === 0) {
      __classPrivateFieldGet(this, _YargsInstance_usage, "f").clearCachedHelpMessage();
    }
    try {
      this[kGuessLocale]();
      if (shortCircuit) {
        return this[kPostProcess](argv, populateDoubleDash, !!calledFromCommand, false);
      }
      if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")) {
        const helpCmds = [__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")].concat(aliases[__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")] || []).filter((k) => k.length > 1);
        if (helpCmds.includes("" + argv._[argv._.length - 1])) {
          argv._.pop();
          helpOptSet = true;
        }
      }
      __classPrivateFieldSet(this, _YargsInstance_isGlobalContext, false, "f");
      const handlerKeys = __classPrivateFieldGet(this, _YargsInstance_command, "f").getCommands();
      const requestCompletions = __classPrivateFieldGet(this, _YargsInstance_completion, "f").completionKey in argv;
      const skipRecommendation = helpOptSet || requestCompletions || helpOnly;
      if (argv._.length) {
        if (handlerKeys.length) {
          let firstUnknownCommand;
          for (let i = commandIndex || 0, cmd; argv._[i] !== void 0; i++) {
            cmd = String(argv._[i]);
            if (handlerKeys.includes(cmd) && cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) {
              const innerArgv = __classPrivateFieldGet(this, _YargsInstance_command, "f").runCommand(cmd, this, parsed, i + 1, helpOnly, helpOptSet || versionOptSet || helpOnly);
              return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand, false);
            } else if (!firstUnknownCommand && cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) {
              firstUnknownCommand = cmd;
              break;
            }
          }
          if (!__classPrivateFieldGet(this, _YargsInstance_command, "f").hasDefaultCommand() && __classPrivateFieldGet(this, _YargsInstance_recommendCommands, "f") && firstUnknownCommand && !skipRecommendation) {
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").recommendCommands(firstUnknownCommand, handlerKeys);
          }
        }
        if (__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") && argv._.includes(__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) && !requestCompletions) {
          if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
            setBlocking(true);
          this.showCompletionScript();
          this.exit(0);
        }
      }
      if (__classPrivateFieldGet(this, _YargsInstance_command, "f").hasDefaultCommand() && !skipRecommendation) {
        const innerArgv = __classPrivateFieldGet(this, _YargsInstance_command, "f").runCommand(null, this, parsed, 0, helpOnly, helpOptSet || versionOptSet || helpOnly);
        return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand, false);
      }
      if (requestCompletions) {
        if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
          setBlocking(true);
        args = [].concat(args);
        const completionArgs = args.slice(args.indexOf(`--${__classPrivateFieldGet(this, _YargsInstance_completion, "f").completionKey}`) + 1);
        __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(completionArgs, (err, completions) => {
          if (err)
            throw new YError(err.message);
          (completions || []).forEach((completion2) => {
            __classPrivateFieldGet(this, _YargsInstance_logger, "f").log(completion2);
          });
          this.exit(0);
        });
        return this[kPostProcess](argv, !populateDoubleDash, !!calledFromCommand, false);
      }
      if (!__classPrivateFieldGet(this, _YargsInstance_hasOutput, "f")) {
        if (helpOptSet) {
          if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
            setBlocking(true);
          skipValidation = true;
          this.showHelp("log");
          this.exit(0);
        } else if (versionOptSet) {
          if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"))
            setBlocking(true);
          skipValidation = true;
          __classPrivateFieldGet(this, _YargsInstance_usage, "f").showVersion("log");
          this.exit(0);
        }
      }
      if (!skipValidation && __classPrivateFieldGet(this, _YargsInstance_options, "f").skipValidation.length > 0) {
        skipValidation = Object.keys(argv).some((key) => __classPrivateFieldGet(this, _YargsInstance_options, "f").skipValidation.indexOf(key) >= 0 && argv[key] === true);
      }
      if (!skipValidation) {
        if (parsed.error)
          throw new YError(parsed.error.message);
        if (!requestCompletions) {
          const validation2 = this[kRunValidation](aliases, {}, parsed.error);
          if (!calledFromCommand) {
            argvPromise = applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), true);
          }
          argvPromise = this[kValidateAsync](validation2, argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv);
          if (isPromise(argvPromise) && !calledFromCommand) {
            argvPromise = argvPromise.then(() => {
              return applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), false);
            });
          }
        }
      }
    } catch (err) {
      if (err instanceof YError)
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(err.message, err);
      else
        throw err;
    }
    return this[kPostProcess](argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv, populateDoubleDash, !!calledFromCommand, true);
  }
  [kRunValidation](aliases, positionalMap, parseErrors, isDefaultCommand) {
    const demandedOptions = { ...this.getDemandedOptions() };
    return (argv) => {
      if (parseErrors)
        throw new YError(parseErrors.message);
      __classPrivateFieldGet(this, _YargsInstance_validation, "f").nonOptionCount(argv);
      __classPrivateFieldGet(this, _YargsInstance_validation, "f").requiredArguments(argv, demandedOptions);
      let failedStrictCommands = false;
      if (__classPrivateFieldGet(this, _YargsInstance_strictCommands, "f")) {
        failedStrictCommands = __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownCommands(argv);
      }
      if (__classPrivateFieldGet(this, _YargsInstance_strict, "f") && !failedStrictCommands) {
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownArguments(argv, aliases, positionalMap, !!isDefaultCommand);
      } else if (__classPrivateFieldGet(this, _YargsInstance_strictOptions, "f")) {
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownArguments(argv, aliases, {}, false, false);
      }
      __classPrivateFieldGet(this, _YargsInstance_validation, "f").limitedChoices(argv);
      __classPrivateFieldGet(this, _YargsInstance_validation, "f").implications(argv);
      __classPrivateFieldGet(this, _YargsInstance_validation, "f").conflicting(argv);
    };
  }
  [kSetHasOutput]() {
    __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
  }
  [kTrackManuallySetKeys](keys) {
    if (typeof keys === "string") {
      __classPrivateFieldGet(this, _YargsInstance_options, "f").key[keys] = true;
    } else {
      for (const k of keys) {
        __classPrivateFieldGet(this, _YargsInstance_options, "f").key[k] = true;
      }
    }
  }
};
function isYargsInstance(y) {
  return !!y && typeof y.getInternalMethods === "function";
}

// node_modules/yargs/index.mjs
var Yargs = YargsFactory(esm_default);
var yargs_default = Yargs;

// node_modules/yargs/helpers/helpers.mjs
var applyExtends2 = (config, cwd, mergeExtends) => {
  return applyExtends(config, cwd, mergeExtends, esm_default);
};

// src/services/Constants.ts
var ENCRYPTED_FILE_EXTENSION_ENCRYPTED = "encrypted";
var ENCRYPTED_FILE_EXTENSION_MDENC = "mdenc";
var ENCRYPTED_FILE_EXTENSION_DEFAULT = ENCRYPTED_FILE_EXTENSION_MDENC;
var ENCRYPTED_FILE_EXTENSIONS = [
  ENCRYPTED_FILE_EXTENSION_MDENC,
  ENCRYPTED_FILE_EXTENSION_ENCRYPTED
];

// src/features/feature-inplace-encrypt/FeatureInplaceConstants.ts
var _PREFIX_B = "%%\u{1F510}\u03B2 ";
var _PREFIX_B_VISIBLE = "\u{1F510}\u03B2 ";
var _PREFIX_A = "%%\u{1F510}\u03B1 ";
var _PREFIX_A_VISIBLE = "\u{1F510}\u03B1 ";
var _PREFIX_OBSOLETE = "%%\u{1F510} ";
var _PREFIX_ENCODE_DEFAULT = _PREFIX_B;
var _PREFIX_ENCODE_DEFAULT_VISIBLE = _PREFIX_B_VISIBLE;
var _PREFIXES = [
  _PREFIX_B,
  _PREFIX_B_VISIBLE,
  _PREFIX_A,
  _PREFIX_A_VISIBLE,
  _PREFIX_OBSOLETE
];
var _SUFFIX_WITH_COMMENT = " \u{1F510}%%";
var _SUFFIX_NO_COMMENT = " \u{1F510}";
var _SUFFIXES = [
  _SUFFIX_WITH_COMMENT,
  _SUFFIX_NO_COMMENT
];
var _HINT = "\u{1F4A1}";

// src/tools/mdenc.ts
import * as fs from "fs";
import * as path from "path";
var ListCommandHandler = class {
  async argHandler(format3) {
    console.log("argHandler", { format: format3 });
    const cwd = process.cwd();
    const listings = await this.fetchListings(cwd);
    this.outputListings(listings, format3);
  }
  outputListings(listings, format3) {
    if (format3 == "csv") {
      console.log("feature,fullPath,relativePath,extension,");
      for (const l of listings) {
        console.log(`"${l.featureType}","${l.fullPath}","${l.relativePath}","${l.extension}"`);
      }
      return;
    }
    if (format3 == "json") {
      console.log(JSON.stringify(listings, null, 2));
      return;
    }
    console.table(listings);
  }
  async fetchListings(dir) {
    const listing = [];
    for await (const p of Utils.walk(dir)) {
      const relativePath = "." + path.sep + path.relative(dir, p);
      const ext = path.extname(p).toLowerCase().slice(1);
      if (!["md", ...ENCRYPTED_FILE_EXTENSIONS].includes(ext)) {
        continue;
      }
      if (ext == "md") {
        const content = await fs.promises.readFile(p, "utf8");
        if (content.includes(_PREFIX_A_VISIBLE) || content.includes(_PREFIX_B_VISIBLE)) {
          listing.push({
            featureType: "InPlace",
            fullPath: p,
            relativePath,
            extension: ext
          });
        }
        continue;
      }
      listing.push({
        featureType: "WholeNote",
        fullPath: p,
        relativePath,
        extension: ext
      });
    }
    return listing;
  }
};
var Utils = class {
  static async *walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
      const entry = path.join(dir, d.name);
      if (d.isDirectory())
        yield* Utils.walk(entry);
      else if (d.isFile())
        yield entry;
    }
  }
};
var optPasswordList = {
  demandOption: true,
  alias: "pw",
  describe: "passwords to use",
  type: "array"
};
var optListingFormat = {
  alias: "f",
  describe: "format of the listing",
  type: "string",
  choices: ["table", "json", "csv"],
  default: "table",
  demandOption: true
};
var cmdListHandler = new ListCommandHandler();
yargs_default(hideBin(process.argv)).usage("Usage: $0 [command] [options]").command("list", "list all encrypted artifacts within the current directory", (yargs) => yargs.option({
  format: optListingFormat
}), (argv) => cmdListHandler.argHandler(argv.format)).command(["test", "check"], "check that all notes can be decrypted with the given password list", (yargs) => yargs.option({
  passwords: optPasswordList
})).command("decrypt", "decrypt notes given a password list and an output directory", (yargs) => yargs.option({
  passwords: optPasswordList,
  outdir: {
    alias: "o",
    describe: "output directory",
    type: "string",
    demandOption: true
  }
})).demandCommand().help().wrap(null).example([
  ["$0 list", "Processes all *.md and *.mdenc files and list any encrypted artifacts within the current directory"],
  ["$0 test --passwords pw1 pw2", "check that all notes can be decrypted with the given password list"],
  ["$0 decrypt --passwords pw1 pw2 --outdir out", "decrypt notes given a password list and an output directory"]
]).parse();
/**
 * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
 * CJS and ESM environments.
 *
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */
/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2NsaXVpL2J1aWxkL2xpYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvY2xpdWkvYnVpbGQvbGliL3N0cmluZy11dGlscy5qcyIsICIuLi9ub2RlX21vZHVsZXMvY2xpdWkvaW5kZXgubWpzIiwgIi4uL25vZGVfbW9kdWxlcy9lc2NhbGFkZS9zeW5jL2luZGV4Lm1qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi9zdHJpbmctdXRpbHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzLXBhcnNlci9idWlsZC9saWIvdG9rZW5pemUtYXJnLXN0cmluZy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi95YXJncy1wYXJzZXItdHlwZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzLXBhcnNlci9idWlsZC9saWIveWFyZ3MtcGFyc2VyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvcHJvY2Vzcy1hcmd2LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIveWVycm9yLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95MThuL2J1aWxkL2xpYi9wbGF0Zm9ybS1zaGltcy9ub2RlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95MThuL2J1aWxkL2xpYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMveTE4bi9pbmRleC5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2xpYi9wbGF0Zm9ybS1zaGltcy9lc20ubWpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdHlwaW5ncy9jb21tb24tdHlwZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9pcy1wcm9taXNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvcGFyc2UtY29tbWFuZC5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2FyZ3NlcnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi9taWRkbGV3YXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvbWF5YmUtYXN5bmMtcmVzdWx0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvd2hpY2gtbW9kdWxlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvY29tbWFuZC5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3V0aWxzL29iai1maWx0ZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9zZXQtYmxvY2tpbmcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91c2FnZS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2NvbXBsZXRpb24tdGVtcGxhdGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvY29tcGxldGlvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3V0aWxzL2xldmVuc2h0ZWluLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdmFsaWRhdGlvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3V0aWxzL2FwcGx5LWV4dGVuZHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi95YXJncy1mYWN0b3J5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9pbmRleC5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2hlbHBlcnMvaGVscGVycy5tanMiLCAiLi4vc3JjL3NlcnZpY2VzL0NvbnN0YW50cy50cyIsICIuLi9zcmMvZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvRmVhdHVyZUlucGxhY2VDb25zdGFudHMudHMiLCAiLi4vc3JjL3Rvb2xzL21kZW5jLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG5jb25zdCBhbGlnbiA9IHtcbiAgICByaWdodDogYWxpZ25SaWdodCxcbiAgICBjZW50ZXI6IGFsaWduQ2VudGVyXG59O1xuY29uc3QgdG9wID0gMDtcbmNvbnN0IHJpZ2h0ID0gMTtcbmNvbnN0IGJvdHRvbSA9IDI7XG5jb25zdCBsZWZ0ID0gMztcbmV4cG9ydCBjbGFzcyBVSSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRzLndpZHRoO1xuICAgICAgICB0aGlzLndyYXAgPSAoX2EgPSBvcHRzLndyYXApICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRydWU7XG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgIH1cbiAgICBzcGFuKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMuZGl2KC4uLmFyZ3MpO1xuICAgICAgICBjb2xzLnNwYW4gPSB0cnVlO1xuICAgIH1cbiAgICByZXNldE91dHB1dCgpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgfVxuICAgIGRpdiguLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kaXYoJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndyYXAgJiYgdGhpcy5zaG91bGRBcHBseUxheW91dERTTCguLi5hcmdzKSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGx5TGF5b3V0RFNMKGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbHMgPSBhcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sRnJvbVN0cmluZyhhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFyZztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm93cy5wdXNoKGNvbHMpO1xuICAgICAgICByZXR1cm4gY29scztcbiAgICB9XG4gICAgc2hvdWxkQXBwbHlMYXlvdXREU0woLi4uYXJncykge1xuICAgICAgICByZXR1cm4gYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAvW1xcdFxcbl0vLnRlc3QoYXJnc1swXSk7XG4gICAgfVxuICAgIGFwcGx5TGF5b3V0RFNMKHN0cikge1xuICAgICAgICBjb25zdCByb3dzID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAocm93ID0+IHJvdy5zcGxpdCgnXFx0JykpO1xuICAgICAgICBsZXQgbGVmdENvbHVtbldpZHRoID0gMDtcbiAgICAgICAgLy8gc2ltcGxlIGhldXJpc3RpYyBmb3IgbGF5b3V0LCBtYWtlIHN1cmUgdGhlXG4gICAgICAgIC8vIHNlY29uZCBjb2x1bW4gbGluZXMgdXAgYWxvbmcgdGhlIGxlZnQtaGFuZC5cbiAgICAgICAgLy8gZG9uJ3QgYWxsb3cgdGhlIGZpcnN0IGNvbHVtbiB0byB0YWtlIHVwIG1vcmVcbiAgICAgICAgLy8gdGhhbiA1MCUgb2YgdGhlIHNjcmVlbi5cbiAgICAgICAgcm93cy5mb3JFYWNoKGNvbHVtbnMgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbHVtbnMubGVuZ3RoID4gMSAmJiBtaXhpbi5zdHJpbmdXaWR0aChjb2x1bW5zWzBdKSA+IGxlZnRDb2x1bW5XaWR0aCkge1xuICAgICAgICAgICAgICAgIGxlZnRDb2x1bW5XaWR0aCA9IE1hdGgubWluKE1hdGguZmxvb3IodGhpcy53aWR0aCAqIDAuNSksIG1peGluLnN0cmluZ1dpZHRoKGNvbHVtbnNbMF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGdlbmVyYXRlIGEgdGFibGU6XG4gICAgICAgIC8vICByZXBsYWNpbmcgJyAnIHdpdGggcGFkZGluZyBjYWxjdWxhdGlvbnMuXG4gICAgICAgIC8vICB1c2luZyB0aGUgYWxnb3JpdGhtaWNhbGx5IGdlbmVyYXRlZCB3aWR0aC5cbiAgICAgICAgcm93cy5mb3JFYWNoKGNvbHVtbnMgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXYoLi4uY29sdW1ucy5tYXAoKHIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy5tZWFzdXJlUGFkZGluZyhyKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IChpID09PSAwICYmIGNvbHVtbnMubGVuZ3RoID4gMSkgPyBsZWZ0Q29sdW1uV2lkdGggOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93c1t0aGlzLnJvd3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIGNvbEZyb21TdHJpbmcodGV4dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoaXMubWVhc3VyZVBhZGRpbmcodGV4dClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbWVhc3VyZVBhZGRpbmcoc3RyKSB7XG4gICAgICAgIC8vIG1lYXN1cmUgcGFkZGluZyB3aXRob3V0IGFuc2kgZXNjYXBlIGNvZGVzXG4gICAgICAgIGNvbnN0IG5vQW5zaSA9IG1peGluLnN0cmlwQW5zaShzdHIpO1xuICAgICAgICByZXR1cm4gWzAsIG5vQW5zaS5tYXRjaCgvXFxzKiQvKVswXS5sZW5ndGgsIDAsIG5vQW5zaS5tYXRjaCgvXlxccyovKVswXS5sZW5ndGhdO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHRoaXMucm93VG9TdHJpbmcocm93LCBsaW5lcyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkb24ndCBkaXNwbGF5IGFueSBsaW5lcyB3aXRoIHRoZVxuICAgICAgICAvLyBoaWRkZW4gZmxhZyBzZXQuXG4gICAgICAgIHJldHVybiBsaW5lc1xuICAgICAgICAgICAgLmZpbHRlcihsaW5lID0+ICFsaW5lLmhpZGRlbilcbiAgICAgICAgICAgIC5tYXAobGluZSA9PiBsaW5lLnRleHQpXG4gICAgICAgICAgICAuam9pbignXFxuJyk7XG4gICAgfVxuICAgIHJvd1RvU3RyaW5nKHJvdywgbGluZXMpIHtcbiAgICAgICAgdGhpcy5yYXN0ZXJpemUocm93KS5mb3JFYWNoKChycm93LCByKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgICAgICBycm93LmZvckVhY2goKGNvbCwgYykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHJvd1tjXTsgLy8gdGhlIHdpZHRoIHdpdGggcGFkZGluZy5cbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwV2lkdGggPSB0aGlzLm5lZ2F0ZVBhZGRpbmcocm93W2NdKTsgLy8gdGhlIHdpZHRoIHdpdGhvdXQgcGFkZGluZy5cbiAgICAgICAgICAgICAgICBsZXQgdHMgPSBjb2w7IC8vIHRlbXBvcmFyeSBzdHJpbmcgdXNlZCBkdXJpbmcgYWxpZ25tZW50L3BhZGRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKHdyYXBXaWR0aCA+IG1peGluLnN0cmluZ1dpZHRoKGNvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHMgKz0gJyAnLnJlcGVhdCh3cmFwV2lkdGggLSBtaXhpbi5zdHJpbmdXaWR0aChjb2wpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWxpZ24gdGhlIHN0cmluZyB3aXRoaW4gaXRzIGNvbHVtbi5cbiAgICAgICAgICAgICAgICBpZiAocm93W2NdLmFsaWduICYmIHJvd1tjXS5hbGlnbiAhPT0gJ2xlZnQnICYmIHRoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbiA9IGFsaWduW3Jvd1tjXS5hbGlnbl07XG4gICAgICAgICAgICAgICAgICAgIHRzID0gZm4odHMsIHdyYXBXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXhpbi5zdHJpbmdXaWR0aCh0cykgPCB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzICs9ICcgJy5yZXBlYXQoKHdpZHRoIHx8IDApIC0gbWl4aW4uc3RyaW5nV2lkdGgodHMpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYXBwbHkgYm9yZGVyIGFuZCBwYWRkaW5nIHRvIHN0cmluZy5cbiAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gcm93W2NdLnBhZGRpbmcgfHwgWzAsIDAsIDAsIDBdO1xuICAgICAgICAgICAgICAgIGlmIChwYWRkaW5nW2xlZnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnICcucmVwZWF0KHBhZGRpbmdbbGVmdF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHIgKz0gYWRkQm9yZGVyKHJvd1tjXSwgdHMsICd8ICcpO1xuICAgICAgICAgICAgICAgIHN0ciArPSB0cztcbiAgICAgICAgICAgICAgICBzdHIgKz0gYWRkQm9yZGVyKHJvd1tjXSwgdHMsICcgfCcpO1xuICAgICAgICAgICAgICAgIGlmIChwYWRkaW5nW3JpZ2h0XSkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJyAnLnJlcGVhdChwYWRkaW5nW3JpZ2h0XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHByaW9yIHJvdyBpcyBzcGFuLCB0cnkgdG8gcmVuZGVyIHRoZVxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgcm93IG9uIHRoZSBwcmlvciBsaW5lLlxuICAgICAgICAgICAgICAgIGlmIChyID09PSAwICYmIGxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gdGhpcy5yZW5kZXJJbmxpbmUoc3RyLCBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyByZW1vdmUgdHJhaWxpbmcgd2hpdGVzcGFjZS5cbiAgICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQ6IHN0ci5yZXBsYWNlKC8gKyQvLCAnJyksXG4gICAgICAgICAgICAgICAgc3Bhbjogcm93LnNwYW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgZnVsbCAnc291cmNlJyBjYW4gcmVuZGVyIGluXG4gICAgLy8gdGhlIHRhcmdldCBsaW5lLCBkbyBzby5cbiAgICByZW5kZXJJbmxpbmUoc291cmNlLCBwcmV2aW91c0xpbmUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzb3VyY2UubWF0Y2goL14gKi8pO1xuICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZSA9IG1hdGNoID8gbWF0Y2hbMF0ubGVuZ3RoIDogMDtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcHJldmlvdXNMaW5lLnRleHQ7XG4gICAgICAgIGNvbnN0IHRhcmdldFRleHRXaWR0aCA9IG1peGluLnN0cmluZ1dpZHRoKHRhcmdldC50cmltUmlnaHQoKSk7XG4gICAgICAgIGlmICghcHJldmlvdXNMaW5lLnNwYW4pIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UncmUgbm90IGFwcGx5aW5nIHdyYXBwaW5nIGxvZ2ljLFxuICAgICAgICAvLyBqdXN0IGFsd2F5cyBhcHBlbmQgdG8gdGhlIHNwYW4uXG4gICAgICAgIGlmICghdGhpcy53cmFwKSB7XG4gICAgICAgICAgICBwcmV2aW91c0xpbmUuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgKyBzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlIDwgdGFyZ2V0VGV4dFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzTGluZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGFyZ2V0LnRyaW1SaWdodCgpICsgJyAnLnJlcGVhdChsZWFkaW5nV2hpdGVzcGFjZSAtIHRhcmdldFRleHRXaWR0aCkgKyBzb3VyY2UudHJpbUxlZnQoKTtcbiAgICB9XG4gICAgcmFzdGVyaXplKHJvdykge1xuICAgICAgICBjb25zdCBycm93cyA9IFtdO1xuICAgICAgICBjb25zdCB3aWR0aHMgPSB0aGlzLmNvbHVtbldpZHRocyhyb3cpO1xuICAgICAgICBsZXQgd3JhcHBlZDtcbiAgICAgICAgLy8gd29yZCB3cmFwIGFsbCBjb2x1bW5zLCBhbmQgY3JlYXRlXG4gICAgICAgIC8vIGEgZGF0YS1zdHJ1Y3R1cmUgdGhhdCBpcyBlYXN5IHRvIHJhc3Rlcml6ZS5cbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgYykgPT4ge1xuICAgICAgICAgICAgLy8gbGVhdmUgcm9vbSBmb3IgbGVmdCBhbmQgcmlnaHQgcGFkZGluZy5cbiAgICAgICAgICAgIGNvbC53aWR0aCA9IHdpZHRoc1tjXTtcbiAgICAgICAgICAgIGlmICh0aGlzLndyYXApIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkID0gbWl4aW4ud3JhcChjb2wudGV4dCwgdGhpcy5uZWdhdGVQYWRkaW5nKGNvbCksIHsgaGFyZDogdHJ1ZSB9KS5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkID0gY29sLnRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbC5ib3JkZXIpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkLnVuc2hpZnQoJy4nICsgJy0nLnJlcGVhdCh0aGlzLm5lZ2F0ZVBhZGRpbmcoY29sKSArIDIpICsgJy4nKTtcbiAgICAgICAgICAgICAgICB3cmFwcGVkLnB1c2goXCInXCIgKyAnLScucmVwZWF0KHRoaXMubmVnYXRlUGFkZGluZyhjb2wpICsgMikgKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZGQgdG9wIGFuZCBib3R0b20gcGFkZGluZy5cbiAgICAgICAgICAgIGlmIChjb2wucGFkZGluZykge1xuICAgICAgICAgICAgICAgIHdyYXBwZWQudW5zaGlmdCguLi5uZXcgQXJyYXkoY29sLnBhZGRpbmdbdG9wXSB8fCAwKS5maWxsKCcnKSk7XG4gICAgICAgICAgICAgICAgd3JhcHBlZC5wdXNoKC4uLm5ldyBBcnJheShjb2wucGFkZGluZ1tib3R0b21dIHx8IDApLmZpbGwoJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZWQuZm9yRWFjaCgoc3RyLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFycm93c1tyXSkge1xuICAgICAgICAgICAgICAgICAgICBycm93cy5wdXNoKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcnJvdyA9IHJyb3dzW3JdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChycm93W2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJyb3cucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnJvdy5wdXNoKHN0cik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBycm93cztcbiAgICB9XG4gICAgbmVnYXRlUGFkZGluZyhjb2wpIHtcbiAgICAgICAgbGV0IHdyYXBXaWR0aCA9IGNvbC53aWR0aCB8fCAwO1xuICAgICAgICBpZiAoY29sLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIHdyYXBXaWR0aCAtPSAoY29sLnBhZGRpbmdbbGVmdF0gfHwgMCkgKyAoY29sLnBhZGRpbmdbcmlnaHRdIHx8IDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2wuYm9yZGVyKSB7XG4gICAgICAgICAgICB3cmFwV2lkdGggLT0gNDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3JhcFdpZHRoO1xuICAgIH1cbiAgICBjb2x1bW5XaWR0aHMocm93KSB7XG4gICAgICAgIGlmICghdGhpcy53cmFwKSB7XG4gICAgICAgICAgICByZXR1cm4gcm93Lm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2wud2lkdGggfHwgbWl4aW4uc3RyaW5nV2lkdGgoY29sLnRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVuc2V0ID0gcm93Lmxlbmd0aDtcbiAgICAgICAgbGV0IHJlbWFpbmluZ1dpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgLy8gY29sdW1uIHdpZHRocyBjYW4gYmUgc2V0IGluIGNvbmZpZy5cbiAgICAgICAgY29uc3Qgd2lkdGhzID0gcm93Lm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbC53aWR0aCkge1xuICAgICAgICAgICAgICAgIHVuc2V0LS07XG4gICAgICAgICAgICAgICAgcmVtYWluaW5nV2lkdGggLT0gY29sLndpZHRoO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2wud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gYW55IHVuc2V0IHdpZHRocyBzaG91bGQgYmUgY2FsY3VsYXRlZC5cbiAgICAgICAgY29uc3QgdW5zZXRXaWR0aCA9IHVuc2V0ID8gTWF0aC5mbG9vcihyZW1haW5pbmdXaWR0aCAvIHVuc2V0KSA6IDA7XG4gICAgICAgIHJldHVybiB3aWR0aHMubWFwKCh3LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAodyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHVuc2V0V2lkdGgsIF9taW5XaWR0aChyb3dbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRCb3JkZXIoY29sLCB0cywgc3R5bGUpIHtcbiAgICBpZiAoY29sLmJvcmRlcikge1xuICAgICAgICBpZiAoL1suJ10tK1suJ10vLnRlc3QodHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRzLnRyaW0oKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyAgJztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuLy8gY2FsY3VsYXRlcyB0aGUgbWluaW11bSB3aWR0aCBvZlxuLy8gYSBjb2x1bW4sIGJhc2VkIG9uIHBhZGRpbmcgcHJlZmVyZW5jZXMuXG5mdW5jdGlvbiBfbWluV2lkdGgoY29sKSB7XG4gICAgY29uc3QgcGFkZGluZyA9IGNvbC5wYWRkaW5nIHx8IFtdO1xuICAgIGNvbnN0IG1pbldpZHRoID0gMSArIChwYWRkaW5nW2xlZnRdIHx8IDApICsgKHBhZGRpbmdbcmlnaHRdIHx8IDApO1xuICAgIGlmIChjb2wuYm9yZGVyKSB7XG4gICAgICAgIHJldHVybiBtaW5XaWR0aCArIDQ7XG4gICAgfVxuICAgIHJldHVybiBtaW5XaWR0aDtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1dpZHRoKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBkZXBlbmRzIG9uIHRlcm1pbmFsICovXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJiBwcm9jZXNzLnN0ZG91dCAmJiBwcm9jZXNzLnN0ZG91dC5jb2x1bW5zKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLnN0ZG91dC5jb2x1bW5zO1xuICAgIH1cbiAgICByZXR1cm4gODA7XG59XG5mdW5jdGlvbiBhbGlnblJpZ2h0KHN0ciwgd2lkdGgpIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuICAgIGNvbnN0IHN0cldpZHRoID0gbWl4aW4uc3RyaW5nV2lkdGgoc3RyKTtcbiAgICBpZiAoc3RyV2lkdGggPCB3aWR0aCkge1xuICAgICAgICByZXR1cm4gJyAnLnJlcGVhdCh3aWR0aCAtIHN0cldpZHRoKSArIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmZ1bmN0aW9uIGFsaWduQ2VudGVyKHN0ciwgd2lkdGgpIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuICAgIGNvbnN0IHN0cldpZHRoID0gbWl4aW4uc3RyaW5nV2lkdGgoc3RyKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChzdHJXaWR0aCA+PSB3aWR0aCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gJyAnLnJlcGVhdCgod2lkdGggLSBzdHJXaWR0aCkgPj4gMSkgKyBzdHI7XG59XG5sZXQgbWl4aW47XG5leHBvcnQgZnVuY3Rpb24gY2xpdWkob3B0cywgX21peGluKSB7XG4gICAgbWl4aW4gPSBfbWl4aW47XG4gICAgcmV0dXJuIG5ldyBVSSh7XG4gICAgICAgIHdpZHRoOiAob3B0cyA9PT0gbnVsbCB8fCBvcHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRzLndpZHRoKSB8fCBnZXRXaW5kb3dXaWR0aCgpLFxuICAgICAgICB3cmFwOiBvcHRzID09PSBudWxsIHx8IG9wdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdHMud3JhcFxuICAgIH0pO1xufVxuIiwgIi8vIE1pbmltYWwgcmVwbGFjZW1lbnQgZm9yIGFuc2kgc3RyaW5nIGhlbHBlcnMgXCJ3cmFwLWFuc2lcIiBhbmQgXCJzdHJpcC1hbnNpXCIuXG4vLyB0byBmYWNpbGl0YXRlIEVTTSBhbmQgRGVubyBtb2R1bGVzLlxuLy8gVE9ETzogbG9vayBhdCBwb3J0aW5nIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3dyYXAtYW5zaSB0byBFU00uXG4vLyBUaGUgbnBtIGFwcGxpY2F0aW9uXG4vLyBDb3B5cmlnaHQgKGMpIG5wbSwgSW5jLiBhbmQgQ29udHJpYnV0b3JzXG4vLyBMaWNlbnNlZCBvbiB0aGUgdGVybXMgb2YgVGhlIEFydGlzdGljIExpY2Vuc2UgMi4wXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ucG0vY2xpL2Jsb2IvNGM2NWNkOTUyYmM4NjI3ODExNzM1YmVhNzZiOWIxMTBjYzRmYzgwZS9saWIvdXRpbHMvYW5zaS10cmltLmpzXG5jb25zdCBhbnNpID0gbmV3IFJlZ0V4cCgnXFx4MWIoPzpcXFxcWyg/OlxcXFxkK1tBQkNERUZHSktTVG1dfFxcXFxkKztcXFxcZCtbSGZtXXwnICtcbiAgICAnXFxcXGQrO1xcXFxkKztcXFxcZCttfDZufHN8dXxcXFxcPzI1W2xoXSl8XFxcXHcpJywgJ2cnKTtcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcEFuc2koc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKGFuc2ksICcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHN0ciwgd2lkdGgpIHtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSBzdHIubWF0Y2goYW5zaSkgfHwgWycnLCAnJ107XG4gICAgc3RyID0gc3RyaXBBbnNpKHN0cik7XG4gICAgbGV0IHdyYXBwZWQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSAhPT0gMCAmJiAoaSAlIHdpZHRoKSA9PT0gMCkge1xuICAgICAgICAgICAgd3JhcHBlZCArPSAnXFxuJztcbiAgICAgICAgfVxuICAgICAgICB3cmFwcGVkICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgfVxuICAgIGlmIChzdGFydCAmJiBlbmQpIHtcbiAgICAgICAgd3JhcHBlZCA9IGAke3N0YXJ0fSR7d3JhcHBlZH0ke2VuZH1gO1xuICAgIH1cbiAgICByZXR1cm4gd3JhcHBlZDtcbn1cbiIsICIvLyBCb290c3RyYXAgY2xpdWkgd2l0aCBDb21tb25KUyBkZXBlbmRlbmNpZXM6XG5pbXBvcnQgeyBjbGl1aSB9IGZyb20gJy4vYnVpbGQvbGliL2luZGV4LmpzJ1xuaW1wb3J0IHsgd3JhcCwgc3RyaXBBbnNpIH0gZnJvbSAnLi9idWlsZC9saWIvc3RyaW5nLXV0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1aSAob3B0cykge1xuICByZXR1cm4gY2xpdWkob3B0cywge1xuICAgIHN0cmluZ1dpZHRoOiAoc3RyKSA9PiB7XG4gICAgICByZXR1cm4gWy4uLnN0cl0ubGVuZ3RoXG4gICAgfSxcbiAgICBzdHJpcEFuc2ksXG4gICAgd3JhcFxuICB9KVxufVxuIiwgImltcG9ydCB7IGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHJlYWRkaXJTeW5jLCBzdGF0U3luYyB9IGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXJ0LCBjYWxsYmFjaykge1xuXHRsZXQgZGlyID0gcmVzb2x2ZSgnLicsIHN0YXJ0KTtcblx0bGV0IHRtcCwgc3RhdHMgPSBzdGF0U3luYyhkaXIpO1xuXG5cdGlmICghc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuXHRcdGRpciA9IGRpcm5hbWUoZGlyKTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dG1wID0gY2FsbGJhY2soZGlyLCByZWFkZGlyU3luYyhkaXIpKTtcblx0XHRpZiAodG1wKSByZXR1cm4gcmVzb2x2ZShkaXIsIHRtcCk7XG5cdFx0ZGlyID0gZGlybmFtZSh0bXAgPSBkaXIpO1xuXHRcdGlmICh0bXAgPT09IGRpcikgYnJlYWs7XG5cdH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIENvbnRyaWJ1dG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IElTQ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlKHN0cikge1xuICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBhcmd1bWVudCBpcyBwcm92aWRlZCBhcyBjYW1lbCBjYXNlLCBlLmcuLCBmb29CYXIuXG4gICAgLy8gYnkgZW5zdXJpbmcgdGhhdCB0aGUgc3RyaW5nIGlzbid0IGFscmVhZHkgbWl4ZWQgY2FzZTpcbiAgICBjb25zdCBpc0NhbWVsQ2FzZSA9IHN0ciAhPT0gc3RyLnRvTG93ZXJDYXNlKCkgJiYgc3RyICE9PSBzdHIudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoIWlzQ2FtZWxDYXNlKSB7XG4gICAgICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAoc3RyLmluZGV4T2YoJy0nKSA9PT0gLTEgJiYgc3RyLmluZGV4T2YoJ18nKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBjYW1lbGNhc2UgPSAnJztcbiAgICAgICAgbGV0IG5leHRDaHJVcHBlciA9IGZhbHNlO1xuICAgICAgICBjb25zdCBsZWFkaW5nSHlwaGVucyA9IHN0ci5tYXRjaCgvXi0rLyk7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZWFkaW5nSHlwaGVucyA/IGxlYWRpbmdIeXBoZW5zWzBdLmxlbmd0aCA6IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgaWYgKG5leHRDaHJVcHBlcikge1xuICAgICAgICAgICAgICAgIG5leHRDaHJVcHBlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNociA9IGNoci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDAgJiYgKGNociA9PT0gJy0nIHx8IGNociA9PT0gJ18nKSkge1xuICAgICAgICAgICAgICAgIG5leHRDaHJVcHBlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaHIgIT09ICctJyAmJiBjaHIgIT09ICdfJykge1xuICAgICAgICAgICAgICAgIGNhbWVsY2FzZSArPSBjaHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbWVsY2FzZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVjYW1lbGl6ZShzdHIsIGpvaW5TdHJpbmcpIHtcbiAgICBjb25zdCBsb3dlcmNhc2UgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICBqb2luU3RyaW5nID0gam9pblN0cmluZyB8fCAnLSc7XG4gICAgbGV0IG5vdENhbWVsY2FzZSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNockxvd2VyID0gbG93ZXJjYXNlLmNoYXJBdChpKTtcbiAgICAgICAgY29uc3QgY2hyU3RyaW5nID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaWYgKGNockxvd2VyICE9PSBjaHJTdHJpbmcgJiYgaSA+IDApIHtcbiAgICAgICAgICAgIG5vdENhbWVsY2FzZSArPSBgJHtqb2luU3RyaW5nfSR7bG93ZXJjYXNlLmNoYXJBdChpKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm90Q2FtZWxjYXNlICs9IGNoclN0cmluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm90Q2FtZWxjYXNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tzTGlrZU51bWJlcih4KSB7XG4gICAgaWYgKHggPT09IG51bGwgfHwgeCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gaWYgbG9hZGVkIGZyb20gY29uZmlnLCBtYXkgYWxyZWFkeSBiZSBhIG51bWJlci5cbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBoZXhhZGVjaW1hbC5cbiAgICBpZiAoL14weFswLTlhLWZdKyQvaS50ZXN0KHgpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBkb24ndCB0cmVhdCAwMTIzIGFzIGEgbnVtYmVyOyBhcyBpdCBkcm9wcyB0aGUgbGVhZGluZyAnMCcuXG4gICAgaWYgKC9eMFteLl0vLnRlc3QoeCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gL15bLV0/KD86XFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKShlWy0rXT9cXGQrKT8kLy50ZXN0KHgpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbi8vIHRha2UgYW4gdW4tc3BsaXQgYXJndiBzdHJpbmcgYW5kIHRva2VuaXplIGl0LlxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplQXJnU3RyaW5nKGFyZ1N0cmluZykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIGFyZ1N0cmluZy5tYXAoZSA9PiB0eXBlb2YgZSAhPT0gJ3N0cmluZycgPyBlICsgJycgOiBlKTtcbiAgICB9XG4gICAgYXJnU3RyaW5nID0gYXJnU3RyaW5nLnRyaW0oKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHByZXZDID0gbnVsbDtcbiAgICBsZXQgYyA9IG51bGw7XG4gICAgbGV0IG9wZW5pbmcgPSBudWxsO1xuICAgIGNvbnN0IGFyZ3MgPSBbXTtcbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgYXJnU3RyaW5nLmxlbmd0aDsgaWkrKykge1xuICAgICAgICBwcmV2QyA9IGM7XG4gICAgICAgIGMgPSBhcmdTdHJpbmcuY2hhckF0KGlpKTtcbiAgICAgICAgLy8gc3BsaXQgb24gc3BhY2VzIHVubGVzcyB3ZSdyZSBpbiBxdW90ZXMuXG4gICAgICAgIGlmIChjID09PSAnICcgJiYgIW9wZW5pbmcpIHtcbiAgICAgICAgICAgIGlmICghKHByZXZDID09PSAnICcpKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3Qgc3BsaXQgdGhlIHN0cmluZyBpZiB3ZSdyZSBpbiBtYXRjaGluZ1xuICAgICAgICAvLyBvcGVuaW5nIG9yIGNsb3Npbmcgc2luZ2xlIGFuZCBkb3VibGUgcXVvdGVzLlxuICAgICAgICBpZiAoYyA9PT0gb3BlbmluZykge1xuICAgICAgICAgICAgb3BlbmluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGMgPT09IFwiJ1wiIHx8IGMgPT09ICdcIicpICYmICFvcGVuaW5nKSB7XG4gICAgICAgICAgICBvcGVuaW5nID0gYztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZ3NbaV0pXG4gICAgICAgICAgICBhcmdzW2ldID0gJyc7XG4gICAgICAgIGFyZ3NbaV0gKz0gYztcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBDb250cmlidXRvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBJU0NcbiAqL1xuZXhwb3J0IHZhciBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleTtcbihmdW5jdGlvbiAoRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkpIHtcbiAgICBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleVtcIkJPT0xFQU5cIl0gPSBcImJvb2xlYW5cIjtcbiAgICBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleVtcIlNUUklOR1wiXSA9IFwic3RyaW5nXCI7XG4gICAgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXlbXCJOVU1CRVJcIl0gPSBcIm51bWJlclwiO1xuICAgIERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5W1wiQVJSQVlcIl0gPSBcImFycmF5XCI7XG59KShEZWZhdWx0VmFsdWVzRm9yVHlwZUtleSB8fCAoRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkgPSB7fSkpO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbmltcG9ydCB7IHRva2VuaXplQXJnU3RyaW5nIH0gZnJvbSAnLi90b2tlbml6ZS1hcmctc3RyaW5nLmpzJztcbmltcG9ydCB7IERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5IH0gZnJvbSAnLi95YXJncy1wYXJzZXItdHlwZXMuanMnO1xuaW1wb3J0IHsgY2FtZWxDYXNlLCBkZWNhbWVsaXplLCBsb29rc0xpa2VOdW1iZXIgfSBmcm9tICcuL3N0cmluZy11dGlscy5qcyc7XG5sZXQgbWl4aW47XG5leHBvcnQgY2xhc3MgWWFyZ3NQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKF9taXhpbikge1xuICAgICAgICBtaXhpbiA9IF9taXhpbjtcbiAgICB9XG4gICAgcGFyc2UoYXJnc0lucHV0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGFsaWFzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhcnJheTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYm9vbGVhbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29uZmlnOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb25maWdPYmplY3RzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb2VyY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvdW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBlbnZQcmVmaXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5hcmc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vcm1hbGl6ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3RyaW5nOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBudW1iZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9fOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBrZXk6IHVuZGVmaW5lZFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgLy8gYWxsb3cgYSBzdHJpbmcgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGluIHJhdGhlclxuICAgICAgICAvLyB0aGFuIGFuIGFyZ3YgYXJyYXkuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0b2tlbml6ZUFyZ1N0cmluZyhhcmdzSW5wdXQpO1xuICAgICAgICAvLyB0b2tlbml6ZUFyZ1N0cmluZyBhZGRzIGV4dHJhIHF1b3RlcyB0byBhcmdzIGlmIGFyZ3NJbnB1dCBpcyBhIHN0cmluZ1xuICAgICAgICAvLyBvbmx5IHN0cmlwIHRob3NlIGV4dHJhIHF1b3RlcyBpbiBwcm9jZXNzVmFsdWUgaWYgYXJnc0lucHV0IGlzIGEgc3RyaW5nXG4gICAgICAgIGNvbnN0IGlucHV0SXNTdHJpbmcgPSB0eXBlb2YgYXJnc0lucHV0ID09PSAnc3RyaW5nJztcbiAgICAgICAgLy8gYWxpYXNlcyBtaWdodCBoYXZlIHRyYW5zaXRpdmUgcmVsYXRpb25zaGlwcywgbm9ybWFsaXplIHRoaXMuXG4gICAgICAgIGNvbnN0IGFsaWFzZXMgPSBjb21iaW5lQWxpYXNlcyhPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIG9wdHMuYWxpYXMpKTtcbiAgICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgJ2Jvb2xlYW4tbmVnYXRpb24nOiB0cnVlLFxuICAgICAgICAgICAgJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJzogdHJ1ZSxcbiAgICAgICAgICAgICdjb21iaW5lLWFycmF5cyc6IGZhbHNlLFxuICAgICAgICAgICAgJ2RvdC1ub3RhdGlvbic6IHRydWUsXG4gICAgICAgICAgICAnZHVwbGljYXRlLWFyZ3VtZW50cy1hcnJheSc6IHRydWUsXG4gICAgICAgICAgICAnZmxhdHRlbi1kdXBsaWNhdGUtYXJyYXlzJzogdHJ1ZSxcbiAgICAgICAgICAgICdncmVlZHktYXJyYXlzJzogdHJ1ZSxcbiAgICAgICAgICAgICdoYWx0LWF0LW5vbi1vcHRpb24nOiBmYWxzZSxcbiAgICAgICAgICAgICduYXJncy1lYXRzLW9wdGlvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICduZWdhdGlvbi1wcmVmaXgnOiAnbm8tJyxcbiAgICAgICAgICAgICdwYXJzZS1udW1iZXJzJzogdHJ1ZSxcbiAgICAgICAgICAgICdwYXJzZS1wb3NpdGlvbmFsLW51bWJlcnMnOiB0cnVlLFxuICAgICAgICAgICAgJ3BvcHVsYXRlLS0nOiBmYWxzZSxcbiAgICAgICAgICAgICdzZXQtcGxhY2Vob2xkZXIta2V5JzogZmFsc2UsXG4gICAgICAgICAgICAnc2hvcnQtb3B0aW9uLWdyb3Vwcyc6IHRydWUsXG4gICAgICAgICAgICAnc3RyaXAtYWxpYXNlZCc6IGZhbHNlLFxuICAgICAgICAgICAgJ3N0cmlwLWRhc2hlZCc6IGZhbHNlLFxuICAgICAgICAgICAgJ3Vua25vd24tb3B0aW9ucy1hcy1hcmdzJzogZmFsc2VcbiAgICAgICAgfSwgb3B0cy5jb25maWd1cmF0aW9uKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIG9wdHMuZGVmYXVsdCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iamVjdHMgPSBvcHRzLmNvbmZpZ09iamVjdHMgfHwgW107XG4gICAgICAgIGNvbnN0IGVudlByZWZpeCA9IG9wdHMuZW52UHJlZml4O1xuICAgICAgICBjb25zdCBub3RGbGFnc09wdGlvbiA9IGNvbmZpZ3VyYXRpb25bJ3BvcHVsYXRlLS0nXTtcbiAgICAgICAgY29uc3Qgbm90RmxhZ3NBcmd2ID0gbm90RmxhZ3NPcHRpb24gPyAnLS0nIDogJ18nO1xuICAgICAgICBjb25zdCBuZXdBbGlhc2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdGVkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgLy8gYWxsb3cgYSBpMThuIGhhbmRsZXIgdG8gYmUgcGFzc2VkIGluLCBkZWZhdWx0IHRvIGEgZmFrZSBvbmUgKHV0aWwuZm9ybWF0KS5cbiAgICAgICAgY29uc3QgX18gPSBvcHRzLl9fIHx8IG1peGluLmZvcm1hdDtcbiAgICAgICAgY29uc3QgZmxhZ3MgPSB7XG4gICAgICAgICAgICBhbGlhc2VzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgYXJyYXlzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgYm9vbHM6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBzdHJpbmdzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgbnVtYmVyczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGNvdW50czogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZTogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGNvbmZpZ3M6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBuYXJnczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGNvZXJjaW9uczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGtleXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlID0gL14tKFswLTldKyhcXC5bMC05XSspP3xcXC5bMC05XSspJC87XG4gICAgICAgIGNvbnN0IG5lZ2F0ZWRCb29sZWFuID0gbmV3IFJlZ0V4cCgnXi0tJyArIGNvbmZpZ3VyYXRpb25bJ25lZ2F0aW9uLXByZWZpeCddICsgJyguKyknKTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMuYXJyYXkgfHwgW10pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBvcHQgPT09ICdvYmplY3QnID8gb3B0LmtleSA6IG9wdDtcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0byBmbGFnc1tib29sc3xzdHJpbmdzfG51bWJlcnNdXG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50ID0gT2JqZWN0LmtleXMob3B0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5RmxhZ0tleXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2xlYW46ICdib29scycsXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogJ3N0cmluZ3MnLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXI6ICdudW1iZXJzJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5RmxhZ0tleXNba2V5XTtcbiAgICAgICAgICAgIH0pLmZpbHRlcihCb29sZWFuKS5wb3AoKTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBrZXkgdG8gYmUgY29lcmNlZFxuICAgICAgICAgICAgaWYgKGFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBmbGFnc1thc3NpZ25tZW50XVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZsYWdzLmFycmF5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMuYm9vbGVhbiB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3MuYm9vbHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBmbGFncy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFtdLmNvbmNhdChvcHRzLnN0cmluZyB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3Muc3RyaW5nc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMubnVtYmVyIHx8IFtdKS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmbGFncy5udW1iZXJzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5jb3VudCB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3MuY291bnRzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5ub3JtYWxpemUgfHwgW10pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGZsYWdzLm5vcm1hbGl6ZVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLm5hcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzLm5hcmcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLm5hcmdzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmNvZXJjZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdHMuY29lcmNlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmNvZXJjaW9uc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5jb25maWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRzLmNvbmZpZykgfHwgdHlwZW9mIG9wdHMuY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBbXS5jb25jYXQob3B0cy5jb25maWcpLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuY29uZmlnc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRzLmNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzLmNvbmZpZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzLmNvbmZpZ3Nba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIGEgbG9va3VwIHRhYmxlIHRoYXQgdGFrZXMgaW50byBhY2NvdW50IGFsbFxuICAgICAgICAvLyBjb21iaW5hdGlvbnMgb2YgYWxpYXNlczoge2Y6IFsnZm9vJ10sIGZvbzogWydmJ119XG4gICAgICAgIGV4dGVuZEFsaWFzZXMob3B0cy5rZXksIGFsaWFzZXMsIG9wdHMuZGVmYXVsdCwgZmxhZ3MuYXJyYXlzKTtcbiAgICAgICAgLy8gYXBwbHkgZGVmYXVsdCB2YWx1ZXMgdG8gYWxsIGFsaWFzZXMuXG4gICAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIChmbGFncy5hbGlhc2VzW2tleV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHNbYWxpYXNdID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICAgICAgY2hlY2tDb25maWd1cmF0aW9uKCk7XG4gICAgICAgIGxldCBub3RGbGFncyA9IFtdO1xuICAgICAgICBjb25zdCBhcmd2ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7IF86IFtdIH0pO1xuICAgICAgICAvLyBUT0RPKGJjb2UpOiBmb3IgdGhlIGZpcnN0IHBhc3MgYXQgcmVtb3Zpbmcgb2JqZWN0IHByb3RvdHlwZSAgd2UgZGlkbid0XG4gICAgICAgIC8vIHJlbW92ZSBhbGwgcHJvdG90eXBlcyBmcm9tIG9iamVjdHMgcmV0dXJuZWQgYnkgdGhpcyBBUEksIHdlIG1pZ2h0IHdhbnRcbiAgICAgICAgLy8gdG8gZ3JhZHVhbGx5IG1vdmUgdG93YXJkcyBkb2luZyBzby5cbiAgICAgICAgY29uc3QgYXJndlJldHVybiA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaV07XG4gICAgICAgICAgICBjb25zdCB0cnVuY2F0ZWRBcmcgPSBhcmcucmVwbGFjZSgvXi17Myx9LywgJy0tLScpO1xuICAgICAgICAgICAgbGV0IGJyb2tlbjtcbiAgICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgICBsZXQgbGV0dGVycztcbiAgICAgICAgICAgIGxldCBtO1xuICAgICAgICAgICAgbGV0IG5leHQ7XG4gICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAvLyBhbnkgdW5rbm93biBvcHRpb24gKGV4Y2VwdCBmb3IgZW5kLW9mLW9wdGlvbnMsIFwiLS1cIilcbiAgICAgICAgICAgIGlmIChhcmcgIT09ICctLScgJiYgL14tLy50ZXN0KGFyZykgJiYgaXNVbmtub3duT3B0aW9uQXNBcmcoYXJnKSkge1xuICAgICAgICAgICAgICAgIHB1c2hQb3NpdGlvbmFsKGFyZyk7XG4gICAgICAgICAgICAgICAgLy8gLS0tLCAtLS09LCAtLS0tLCBldGMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0cnVuY2F0ZWRBcmcubWF0Y2goL14tLS0rKD18JCkvKSkge1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnMgd2l0aG91dCBrZXkgbmFtZSBhcmUgaW52YWxpZC5cbiAgICAgICAgICAgICAgICBwdXNoUG9zaXRpb25hbChhcmcpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIC8vIC0tIHNlcGFyYXRlZCBieSA9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLS4rPS8pIHx8ICghY29uZmlndXJhdGlvblsnc2hvcnQtb3B0aW9uLWdyb3VwcyddICYmIGFyZy5tYXRjaCgvXi0uKz0vKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBVc2luZyBbXFxzXFxTXSBpbnN0ZWFkIG9mIC4gYmVjYXVzZSBqcyBkb2Vzbid0IHN1cHBvcnQgdGhlXG4gICAgICAgICAgICAgICAgLy8gJ2RvdGFsbCcgcmVnZXggbW9kaWZpZXIuIFNlZTpcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMDY4MzA4LzEzMjE2XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0tPyhbXj1dKyk9KFtcXHNcXFNdKikkLyk7XG4gICAgICAgICAgICAgICAgLy8gYXJyYXlzIGZvcm1hdCA9ICctLWY9YSBiIGMnXG4gICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwgJiYgQXJyYXkuaXNBcnJheShtKSAmJiBtLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMobVsxXSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIG1bMV0sIGFyZ3MsIG1bMl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhtWzFdLCBmbGFncy5uYXJncykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuYXJncyBmb3JtYXQgPSAnLS1mPW1vbmtleSB3YXNoaW5nIGNhdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlYXROYXJncyhpLCBtWzFdLCBhcmdzLCBtWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhtWzFdLCBtWzJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaChuZWdhdGVkQm9vbGVhbikgJiYgY29uZmlndXJhdGlvblsnYm9vbGVhbi1uZWdhdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaChuZWdhdGVkQm9vbGVhbik7XG4gICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwgJiYgQXJyYXkuaXNBcnJheShtKSAmJiBtLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IG1bMV07XG4gICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykgPyBbZmFsc2VdIDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAtLSBzZXBhcmF0ZWQgYnkgc3BhY2UuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLS4rLykgfHwgKCFjb25maWd1cmF0aW9uWydzaG9ydC1vcHRpb24tZ3JvdXBzJ10gJiYgYXJnLm1hdGNoKC9eLVteLV0rLykpKSB7XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0tPyguKykvKTtcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gbVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IGZvcm1hdCA9ICctLWZvbyBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlYXRBcnJheShpLCBrZXksIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctLWZvbyBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSB0cnV0aHkgZXZlbiBpZjogZmxhZ3MubmFyZ3Nba2V5XSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICghbmV4dC5tYXRjaCgvXi0vKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQubWF0Y2gobmVnYXRpdmUpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9eKHRydWV8ZmFsc2UpJC8udGVzdChuZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb3Qtbm90YXRpb24gZmxhZyBzZXBhcmF0ZWQgYnkgJz0nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnLm1hdGNoKC9eLS5cXC4uKz0vKSkge1xuICAgICAgICAgICAgICAgIG0gPSBhcmcubWF0Y2goL14tKFtePV0rKT0oW1xcc1xcU10qKSQvKTtcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXJnKG1bMV0sIG1bMl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb3Qtbm90YXRpb24gZmxhZyBzZXBhcmF0ZWQgYnkgc3BhY2UuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLlxcLi4rLykgJiYgIWFyZy5tYXRjaChuZWdhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0oLlxcLi4rKS8pO1xuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsICYmIEFycmF5LmlzQXJyYXkobSkgJiYgbS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBtWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICFuZXh0Lm1hdGNoKC9eLS8pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBkZWZhdWx0VmFsdWUoa2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tW14tXSsvKSAmJiAhYXJnLm1hdGNoKG5lZ2F0aXZlKSkge1xuICAgICAgICAgICAgICAgIGxldHRlcnMgPSBhcmcuc2xpY2UoMSwgLTEpLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBicm9rZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxldHRlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGFyZy5zbGljZShqICsgMik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJzW2ogKyAxXSAmJiBsZXR0ZXJzW2ogKyAxXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyZy5zbGljZShqICsgMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBsZXR0ZXJzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnJheSBmb3JtYXQgPSAnLWY9YSBiIGMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIGtleSwgYXJncywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctZj1tb25rZXkgd2FzaGluZyBjYXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIGtleSwgYXJncywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgbGV0dGVyIGlzIGFuIGFscGhhYmV0aWMgY2hhcmFjdGVyIGFuZCBuZXh0IHZhbHVlIGlzIGEgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIGlmICgvW0EtWmEtel0vLnRlc3QobGV0dGVyc1tqXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC9eLT9cXGQrKFxcLlxcZCopPyhlLT9cXGQrKT8kLy50ZXN0KG5leHQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0FsbEFsaWFzZXMobmV4dCwgZmxhZ3MuYm9vbHMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJzW2ogKyAxXSAmJiBsZXR0ZXJzW2ogKyAxXS5tYXRjaCgvXFxXLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBkZWZhdWx0VmFsdWUobGV0dGVyc1tqXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGtleSA9IGFyZy5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICAgICAgaWYgKCFicm9rZW4gJiYga2V5ICE9PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IGZvcm1hdCA9ICctZiBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlYXRBcnJheShpLCBrZXksIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctZiBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSB0cnV0aHkgZXZlbiBpZjogZmxhZ3MubmFyZ3Nba2V5XSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICghL14oLXwtLSlbXi1dLy50ZXN0KG5leHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5tYXRjaChuZWdhdGl2ZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL14odHJ1ZXxmYWxzZSkkLy50ZXN0KG5leHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgZGVmYXVsdFZhbHVlKGtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnLm1hdGNoKC9eLVswLTldJC8pICYmXG4gICAgICAgICAgICAgICAgYXJnLm1hdGNoKG5lZ2F0aXZlKSAmJlxuICAgICAgICAgICAgICAgIGNoZWNrQWxsQWxpYXNlcyhhcmcuc2xpY2UoMSksIGZsYWdzLmJvb2xzKSkge1xuICAgICAgICAgICAgICAgIC8vIHNpbmdsZS1kaWdpdCBib29sZWFuIGFsaWFzLCBlLmc6IHhhcmdzIC0wXG4gICAgICAgICAgICAgICAga2V5ID0gYXJnLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZyA9PT0gJy0tJykge1xuICAgICAgICAgICAgICAgIG5vdEZsYWdzID0gYXJncy5zbGljZShpICsgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb25maWd1cmF0aW9uWydoYWx0LWF0LW5vbi1vcHRpb24nXSkge1xuICAgICAgICAgICAgICAgIG5vdEZsYWdzID0gYXJncy5zbGljZShpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHB1c2hQb3NpdGlvbmFsKGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3JkZXIgb2YgcHJlY2VkZW5jZTpcbiAgICAgICAgLy8gMS4gY29tbWFuZCBsaW5lIGFyZ1xuICAgICAgICAvLyAyLiB2YWx1ZSBmcm9tIGVudiB2YXJcbiAgICAgICAgLy8gMy4gdmFsdWUgZnJvbSBjb25maWcgZmlsZVxuICAgICAgICAvLyA0LiB2YWx1ZSBmcm9tIGNvbmZpZyBvYmplY3RzXG4gICAgICAgIC8vIDUuIGNvbmZpZ3VyZWQgZGVmYXVsdCB2YWx1ZVxuICAgICAgICBhcHBseUVudlZhcnMoYXJndiwgdHJ1ZSk7IC8vIHNwZWNpYWwgY2FzZTogY2hlY2sgZW52IHZhcnMgdGhhdCBwb2ludCB0byBjb25maWcgZmlsZVxuICAgICAgICBhcHBseUVudlZhcnMoYXJndiwgZmFsc2UpO1xuICAgICAgICBzZXRDb25maWcoYXJndik7XG4gICAgICAgIHNldENvbmZpZ09iamVjdHMoKTtcbiAgICAgICAgYXBwbHlEZWZhdWx0c0FuZEFsaWFzZXMoYXJndiwgZmxhZ3MuYWxpYXNlcywgZGVmYXVsdHMsIHRydWUpO1xuICAgICAgICBhcHBseUNvZXJjaW9ucyhhcmd2KTtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bJ3NldC1wbGFjZWhvbGRlci1rZXknXSlcbiAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyS2V5cyhhcmd2KTtcbiAgICAgICAgLy8gZm9yIGFueSBjb3VudHMgZWl0aGVyIG5vdCBpbiBhcmdzIG9yIHdpdGhvdXQgYW4gZXhwbGljaXQgZGVmYXVsdCwgc2V0IHRvIDBcbiAgICAgICAgT2JqZWN0LmtleXMoZmxhZ3MuY291bnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICghaGFzS2V5KGFyZ3YsIGtleS5zcGxpdCgnLicpKSlcbiAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vICctLScgZGVmYXVsdHMgdG8gdW5kZWZpbmVkLlxuICAgICAgICBpZiAobm90RmxhZ3NPcHRpb24gJiYgbm90RmxhZ3MubGVuZ3RoKVxuICAgICAgICAgICAgYXJndltub3RGbGFnc0FyZ3ZdID0gW107XG4gICAgICAgIG5vdEZsYWdzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgYXJndltub3RGbGFnc0FyZ3ZdLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddICYmIGNvbmZpZ3VyYXRpb25bJ3N0cmlwLWRhc2hlZCddKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJy0tJyAmJiBrZXkuaW5jbHVkZXMoJy0nKSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcmd2W2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnc3RyaXAtYWxpYXNlZCddKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBbXS5jb25jYXQoLi4uT2JqZWN0LmtleXMoYWxpYXNlcykubWFwKGsgPT4gYWxpYXNlc1trXSkpLmZvckVhY2goYWxpYXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddICYmIGFsaWFzLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFyZ3ZbYWxpYXMuc3BsaXQoJy4nKS5tYXAocHJvcCA9PiBjYW1lbENhc2UocHJvcCkpLmpvaW4oJy4nKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcmd2W2FsaWFzXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFB1c2ggYXJndW1lbnQgaW50byBwb3NpdGlvbmFsIGFycmF5LCBhcHBseWluZyBudW1lcmljIGNvZXJjaW9uOlxuICAgICAgICBmdW5jdGlvbiBwdXNoUG9zaXRpb25hbChhcmcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heWJlQ29lcmNlZE51bWJlciA9IG1heWJlQ29lcmNlTnVtYmVyKCdfJywgYXJnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWF5YmVDb2VyY2VkTnVtYmVyID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWF5YmVDb2VyY2VkTnVtYmVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGFyZ3YuXy5wdXNoKG1heWJlQ29lcmNlZE51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaG93IG1hbnkgYXJndW1lbnRzIHNob3VsZCB3ZSBjb25zdW1lLCBiYXNlZFxuICAgICAgICAvLyBvbiB0aGUgbmFyZ3Mgb3B0aW9uP1xuICAgICAgICBmdW5jdGlvbiBlYXROYXJncyhpLCBrZXksIGFyZ3MsIGFyZ0FmdGVyRXF1YWxTaWduKSB7XG4gICAgICAgICAgICBsZXQgaWk7XG4gICAgICAgICAgICBsZXQgdG9FYXQgPSBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncyk7XG4gICAgICAgICAgICAvLyBOYU4gaGFzIGEgc3BlY2lhbCBtZWFuaW5nIGZvciB0aGUgYXJyYXkgdHlwZSwgaW5kaWNhdGluZyB0aGF0IG9uZSBvclxuICAgICAgICAgICAgLy8gbW9yZSB2YWx1ZXMgYXJlIGV4cGVjdGVkLlxuICAgICAgICAgICAgdG9FYXQgPSB0eXBlb2YgdG9FYXQgIT09ICdudW1iZXInIHx8IGlzTmFOKHRvRWF0KSA/IDEgOiB0b0VhdDtcbiAgICAgICAgICAgIGlmICh0b0VhdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ0FyZ3VtZW50IHVuZXhwZWN0ZWQgZm9yOiAlcycsIGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBkZWZhdWx0VmFsdWUoa2V5KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlID0gaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pID8gMCA6IDE7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnbmFyZ3MtZWF0cy1vcHRpb25zJ10pIHtcbiAgICAgICAgICAgICAgICAvLyBjbGFzc2ljIGJlaGF2aW9yLCB5YXJncyBlYXRzIHBvc2l0aW9uYWwgYW5kIGRhc2ggYXJndW1lbnRzLlxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCAtIChpICsgMSkgKyBhdmFpbGFibGUgPCB0b0VhdCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyBmb2xsb3dpbmc6ICVzJywga2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZSA9IHRvRWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbmFyZ3Mgd2lsbCBub3QgY29uc3VtZSBmbGFnIGFyZ3VtZW50cywgZS5nLiwgLWFiYywgLS1mb28sXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRlcm1pbmF0ZXMgd2hlbiBvbmUgaXMgb2JzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgZm9yIChpaSA9IGkgKyAxOyBpaSA8IGFyZ3MubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJnc1tpaV0ubWF0Y2goL14tW14wLTldLykgfHwgYXJnc1tpaV0ubWF0Y2gobmVnYXRpdmUpIHx8IGlzVW5rbm93bk9wdGlvbkFzQXJnKGFyZ3NbaWldKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSsrO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSA8IHRvRWF0KVxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyBmb2xsb3dpbmc6ICVzJywga2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29uc3VtZWQgPSBNYXRoLm1pbihhdmFpbGFibGUsIHRvRWF0KTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pICYmIGNvbnN1bWVkID4gMCkge1xuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGFyZ0FmdGVyRXF1YWxTaWduKTtcbiAgICAgICAgICAgICAgICBjb25zdW1lZC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpaSA9IGkgKyAxOyBpaSA8IChjb25zdW1lZCArIGkgKyAxKTsgaWkrKykge1xuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGFyZ3NbaWldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoaSArIGNvbnN1bWVkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBhbiBvcHRpb24gaXMgYW4gYXJyYXksIGVhdCBhbGwgbm9uLWh5cGhlbmF0ZWQgYXJndW1lbnRzXG4gICAgICAgIC8vIGZvbGxvd2luZyBpdC4uLiBZVU0hXG4gICAgICAgIC8vIGUuZy4sIC0tZm9vIGFwcGxlIGJhbmFuYSBjYXQgYmVjb21lcyBbXCJhcHBsZVwiLCBcImJhbmFuYVwiLCBcImNhdFwiXVxuICAgICAgICBmdW5jdGlvbiBlYXRBcnJheShpLCBrZXksIGFyZ3MsIGFyZ0FmdGVyRXF1YWxTaWduKSB7XG4gICAgICAgICAgICBsZXQgYXJnc1RvU2V0ID0gW107XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGFyZ0FmdGVyRXF1YWxTaWduIHx8IGFyZ3NbaSArIDFdO1xuICAgICAgICAgICAgLy8gSWYgYm90aCBhcnJheSBhbmQgbmFyZ3MgYXJlIGNvbmZpZ3VyZWQsIGVuZm9yY2UgdGhlIG5hcmdzIGNvdW50OlxuICAgICAgICAgICAgY29uc3QgbmFyZ3NDb3VudCA9IGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKTtcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiYgISgvXih0cnVlfGZhbHNlKSQvLnRlc3QobmV4dCkpKSB7XG4gICAgICAgICAgICAgICAgYXJnc1RvU2V0LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1VuZGVmaW5lZChuZXh0KSB8fFxuICAgICAgICAgICAgICAgIChpc1VuZGVmaW5lZChhcmdBZnRlckVxdWFsU2lnbikgJiYgL14tLy50ZXN0KG5leHQpICYmICFuZWdhdGl2ZS50ZXN0KG5leHQpICYmICFpc1Vua25vd25PcHRpb25Bc0FyZyhuZXh0KSkpIHtcbiAgICAgICAgICAgICAgICAvLyBmb3Iga2V5cyB3aXRob3V0IHZhbHVlID09PiBhcmdzVG9TZXQgcmVtYWlucyBhbiBlbXB0eSBbXVxuICAgICAgICAgICAgICAgIC8vIHNldCB1c2VyIGRlZmF1bHQgdmFsdWUsIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0c1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmVmFsID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1RvU2V0ID0gQXJyYXkuaXNBcnJheShkZWZWYWwpID8gZGVmVmFsIDogW2RlZlZhbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdmFsdWUgaW4gLS1vcHRpb249dmFsdWUgaXMgZWF0ZW4gYXMgaXNcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGFyZ0FmdGVyRXF1YWxTaWduKSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzVG9TZXQucHVzaChwcm9jZXNzVmFsdWUoa2V5LCBhcmdBZnRlckVxdWFsU2lnbiwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpaSA9IGkgKyAxOyBpaSA8IGFyZ3MubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoIWNvbmZpZ3VyYXRpb25bJ2dyZWVkeS1hcnJheXMnXSAmJiBhcmdzVG9TZXQubGVuZ3RoID4gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChuYXJnc0NvdW50ICYmIHR5cGVvZiBuYXJnc0NvdW50ID09PSAnbnVtYmVyJyAmJiBhcmdzVG9TZXQubGVuZ3RoID49IG5hcmdzQ291bnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBhcmdzW2lpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eLS8udGVzdChuZXh0KSAmJiAhbmVnYXRpdmUudGVzdChuZXh0KSAmJiAhaXNVbmtub3duT3B0aW9uQXNBcmcobmV4dCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgaSA9IGlpO1xuICAgICAgICAgICAgICAgICAgICBhcmdzVG9TZXQucHVzaChwcm9jZXNzVmFsdWUoa2V5LCBuZXh0LCBpbnB1dElzU3RyaW5nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYm90aCBhcnJheSBhbmQgbmFyZ3MgYXJlIGNvbmZpZ3VyZWQsIGNyZWF0ZSBhbiBlcnJvciBpZiBsZXNzIHRoYW5cbiAgICAgICAgICAgIC8vIG5hcmdzIHBvc2l0aW9uYWxzIHdlcmUgZm91bmQuIE5hTiBoYXMgc3BlY2lhbCBtZWFuaW5nLCBpbmRpY2F0aW5nXG4gICAgICAgICAgICAvLyB0aGF0IGF0IGxlYXN0IG9uZSB2YWx1ZSBpcyByZXF1aXJlZCAobW9yZSBhcmUgb2theSkuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5hcmdzQ291bnQgPT09ICdudW1iZXInICYmICgobmFyZ3NDb3VudCAmJiBhcmdzVG9TZXQubGVuZ3RoIDwgbmFyZ3NDb3VudCkgfHxcbiAgICAgICAgICAgICAgICAoaXNOYU4obmFyZ3NDb3VudCkgJiYgYXJnc1RvU2V0Lmxlbmd0aCA9PT0gMCkpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnTm90IGVub3VnaCBhcmd1bWVudHMgZm9sbG93aW5nOiAlcycsIGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0QXJnKGtleSwgYXJnc1RvU2V0KTtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldEFyZyhrZXksIHZhbCwgc2hvdWxkU3RyaXBRdW90ZXMgPSBpbnB1dElzU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoLy0vLnRlc3Qoa2V5KSAmJiBjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxpYXMgPSBrZXkuc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbWVsQ2FzZShwcm9wKTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgYWRkTmV3QWxpYXMoa2V5LCBhbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHByb2Nlc3NWYWx1ZShrZXksIHZhbCwgc2hvdWxkU3RyaXBRdW90ZXMpO1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRLZXkgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIHNldEtleShhcmd2LCBzcGxpdEtleSwgdmFsdWUpO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHBvcHVsYXRpbmcgYWxpYXNlcyBvZiB0aGUgZnVsbCBrZXlcbiAgICAgICAgICAgIGlmIChmbGFncy5hbGlhc2VzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlQcm9wZXJ0aWVzID0geC5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICBzZXRLZXkoYXJndiwga2V5UHJvcGVydGllcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIHBvcHVsYXRpbmcgYWxpYXNlcyBvZiB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgZG90LW5vdGF0aW9uIGtleVxuICAgICAgICAgICAgaWYgKHNwbGl0S2V5Lmxlbmd0aCA+IDEgJiYgY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pIHtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgKGZsYWdzLmFsaWFzZXNbc3BsaXRLZXlbMF1dIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlQcm9wZXJ0aWVzID0geC5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBleHBhbmQgYWxpYXMgd2l0aCBuZXN0ZWQgb2JqZWN0cyBpbiBrZXlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IFtdLmNvbmNhdChzcGxpdEtleSk7XG4gICAgICAgICAgICAgICAgICAgIGEuc2hpZnQoKTsgLy8gbnVrZSB0aGUgb2xkIGtleS5cbiAgICAgICAgICAgICAgICAgICAga2V5UHJvcGVydGllcyA9IGtleVByb3BlcnRpZXMuY29uY2F0KGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3B1bGF0ZSBhbGlhcyBvbmx5IGlmIGlzIG5vdCBhbHJlYWR5IGFuIGFsaWFzIG9mIHRoZSBmdWxsIGtleVxuICAgICAgICAgICAgICAgICAgICAvLyAoYWxyZWFkeSBwb3B1bGF0ZWQgYWJvdmUpXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSkuaW5jbHVkZXMoa2V5UHJvcGVydGllcy5qb2luKCcuJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoYXJndiwga2V5UHJvcGVydGllcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgbm9ybWFsaXplIGdldHRlciBhbmQgc2V0dGVyIHdoZW4ga2V5IGlzIGluICdub3JtYWxpemUnIGJ1dCBpc24ndCBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5vcm1hbGl6ZSkgJiYgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gW2tleV0uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSk7XG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3ZSZXR1cm4sIGtleSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBtaXhpbi5ub3JtYWxpemUodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZE5ld0FsaWFzKGtleSwgYWxpYXMpIHtcbiAgICAgICAgICAgIGlmICghKGZsYWdzLmFsaWFzZXNba2V5XSAmJiBmbGFncy5hbGlhc2VzW2tleV0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XSA9IFthbGlhc107XG4gICAgICAgICAgICAgICAgbmV3QWxpYXNlc1thbGlhc10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEoZmxhZ3MuYWxpYXNlc1thbGlhc10gJiYgZmxhZ3MuYWxpYXNlc1thbGlhc10ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGFkZE5ld0FsaWFzKGFsaWFzLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NWYWx1ZShrZXksIHZhbCwgc2hvdWxkU3RyaXBRdW90ZXMpIHtcbiAgICAgICAgICAgIC8vIHN0cmluZ3MgbWF5IGJlIHF1b3RlZCwgY2xlYW4gdGhpcyB1cCBhcyB3ZSBhc3NpZ24gdmFsdWVzLlxuICAgICAgICAgICAgaWYgKHNob3VsZFN0cmlwUXVvdGVzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gc3RyaXBRdW90ZXModmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwYXJzaW5nIGJvb2xlYW4gYXJndW1lbnRzIC0tZm9vPXRydWUgLS1iYXIgZmFsc2UuXG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpIHx8IGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmNvdW50cykpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbCA9PT0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWwpXG4gICAgICAgICAgICAgICAgPyB2YWwubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBtYXliZUNvZXJjZU51bWJlcihrZXksIHYpOyB9KVxuICAgICAgICAgICAgICAgIDogbWF5YmVDb2VyY2VOdW1iZXIoa2V5LCB2YWwpO1xuICAgICAgICAgICAgLy8gaW5jcmVtZW50IGEgY291bnQgZ2l2ZW4gYXMgYXJnIChlaXRoZXIgbm8gdmFsdWUgb3IgdmFsdWUgcGFyc2VkIGFzIGJvb2xlYW4pXG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSAmJiAoaXNVbmRlZmluZWQodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gaW5jcmVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgbm9ybWFsaXplZCB2YWx1ZSB3aGVuIGtleSBpcyBpbiAnbm9ybWFsaXplJyBhbmQgaW4gJ2FycmF5cydcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ub3JtYWxpemUpICYmIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbC5tYXAoKHZhbCkgPT4geyByZXR1cm4gbWl4aW4ubm9ybWFsaXplKHZhbCk7IH0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtaXhpbi5ub3JtYWxpemUodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXliZUNvZXJjZU51bWJlcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ3VyYXRpb25bJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyddICYmIGtleSA9PT0gJ18nKVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGlmICghY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3Muc3RyaW5ncykgJiYgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRDb2VyY2VOdW1iZXIgPSBsb29rc0xpa2VOdW1iZXIodmFsdWUpICYmIGNvbmZpZ3VyYXRpb25bJ3BhcnNlLW51bWJlcnMnXSAmJiAoTnVtYmVyLmlzU2FmZUludGVnZXIoTWF0aC5mbG9vcihwYXJzZUZsb2F0KGAke3ZhbHVlfWApKSkpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRDb2VyY2VOdW1iZXIgfHwgKCFpc1VuZGVmaW5lZCh2YWx1ZSkgJiYgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubnVtYmVycykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGFyZ3MgZnJvbSBjb25maWcuanNvbiBmaWxlLCB0aGlzIHNob3VsZCBiZVxuICAgICAgICAvLyBhcHBsaWVkIGxhc3Qgc28gdGhhdCBkZWZhdWx0cyBjYW4gYmUgYXBwbGllZC5cbiAgICAgICAgZnVuY3Rpb24gc2V0Q29uZmlnKGFyZ3YpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0xvb2t1cCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAvLyBleHBhbmQgZGVmYXVsdHMvYWxpYXNlcywgaW4tY2FzZSBhbnkgaGFwcGVuIHRvIHJlZmVyZW5jZVxuICAgICAgICAgICAgLy8gdGhlIGNvbmZpZy5qc29uIGZpbGUuXG4gICAgICAgICAgICBhcHBseURlZmF1bHRzQW5kQWxpYXNlcyhjb25maWdMb29rdXAsIGZsYWdzLmFsaWFzZXMsIGRlZmF1bHRzKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZsYWdzLmNvbmZpZ3MpLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZ0tleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBhcmd2W2NvbmZpZ0tleV0gfHwgY29uZmlnTG9va3VwW2NvbmZpZ0tleV07XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRDb25maWdQYXRoID0gbWl4aW4ucmVzb2x2ZShtaXhpbi5jd2QoKSwgY29uZmlnUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlQ29uZmlnID0gZmxhZ3MuY29uZmlnc1tjb25maWdLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvbHZlQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gcmVzb2x2ZUNvbmZpZyhyZXNvbHZlZENvbmZpZ1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBjb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBtaXhpbi5yZXF1aXJlKHJlc29sdmVkQ29uZmlnUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maWdPYmplY3QoY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbm8gd2lsbCByZWNlaXZlIGEgUGVybWlzc2lvbkRlbmllZCBlcnJvciBpZiBhbiBhdHRlbXB0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWRlIHRvIGxvYWQgY29uZmlnIHdpdGhvdXQgdGhlIC0tYWxsb3ctcmVhZCBmbGFnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09ICdQZXJtaXNzaW9uRGVuaWVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJndltjb25maWdLZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ0ludmFsaWQgSlNPTiBjb25maWcgZmlsZTogJXMnLCBjb25maWdQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgYXJncyBmcm9tIGNvbmZpZyBvYmplY3QuXG4gICAgICAgIC8vIGl0IHJlY3Vyc2l2ZWx5IGNoZWNrcyBuZXN0ZWQgb2JqZWN0cy5cbiAgICAgICAgZnVuY3Rpb24gc2V0Q29uZmlnT2JqZWN0KGNvbmZpZywgcHJldikge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxLZXkgPSBwcmV2ID8gcHJldiArICcuJyArIGtleSA6IGtleTtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYW4gaW5uZXIgb2JqZWN0IGFuZCB3ZSBoYXZlIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgICAgIC8vIGVuYWJsZWQsIHRyZWF0IGlubmVyIG9iamVjdHMgaW4gY29uZmlnIHRoZSBzYW1lIGFzXG4gICAgICAgICAgICAgICAgLy8gaGVhdmlseSBuZXN0ZWQgZG90IG5vdGF0aW9ucyAoZm9vLmJhci5hcHBsZSkuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIGNvbmZpZ3VyYXRpb25bJ2RvdC1ub3RhdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QgYnV0IG5vdCBhbiBhcnJheSwgY2hlY2sgbmVzdGVkIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBzZXRDb25maWdPYmplY3QodmFsdWUsIGZ1bGxLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZyBhcmd1bWVudHMgdmlhIENMSSB0YWtlcyBwcmVjZWRlbmNlIG92ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVzIHdpdGhpbiB0aGUgY29uZmlnIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzS2V5KGFyZ3YsIGZ1bGxLZXkuc3BsaXQoJy4nKSkgfHwgKGNoZWNrQWxsQWxpYXNlcyhmdWxsS2V5LCBmbGFncy5hcnJheXMpICYmIGNvbmZpZ3VyYXRpb25bJ2NvbWJpbmUtYXJyYXlzJ10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoZnVsbEtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGFsbCBjb25maWcgb2JqZWN0cyBwYXNzZWQgaW4gb3B0c1xuICAgICAgICBmdW5jdGlvbiBzZXRDb25maWdPYmplY3RzKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWdPYmplY3RzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbmZpZ09iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpZ09iamVjdChjb25maWdPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5RW52VmFycyhhcmd2LCBjb25maWdPbmx5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudlByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gdHlwZW9mIGVudlByZWZpeCA9PT0gJ3N0cmluZycgPyBlbnZQcmVmaXggOiAnJztcbiAgICAgICAgICAgIGNvbnN0IGVudiA9IG1peGluLmVudigpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGZ1bmN0aW9uIChlbnZWYXIpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4ID09PSAnJyB8fCBlbnZWYXIubGFzdEluZGV4T2YocHJlZml4LCAwKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgYXJyYXkgb2YgbmVzdGVkIGtleXMgYW5kIGNvbnZlcnQgdGhlbSB0byBjYW1lbCBjYXNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBlbnZWYXIuc3BsaXQoJ19fJykubWFwKGZ1bmN0aW9uIChrZXksIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW1lbENhc2Uoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKGNvbmZpZ09ubHkgJiYgZmxhZ3MuY29uZmlnc1trZXlzLmpvaW4oJy4nKV0pIHx8ICFjb25maWdPbmx5KSAmJiAhaGFzS2V5KGFyZ3YsIGtleXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5cy5qb2luKCcuJyksIGVudltlbnZWYXJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5Q29lcmNpb25zKGFyZ3YpIHtcbiAgICAgICAgICAgIGxldCBjb2VyY2U7XG4gICAgICAgICAgICBjb25zdCBhcHBsaWVkID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhcHBsaWVkLmhhcyhrZXkpKSB7IC8vIElmIHdlIGhhdmVuJ3QgYWxyZWFkeSBjb2VyY2VkIHRoaXMgb3B0aW9uIHZpYSBvbmUgb2YgaXRzIGFsaWFzZXNcbiAgICAgICAgICAgICAgICAgICAgY29lcmNlID0gY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY29lcmNpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtYXliZUNvZXJjZU51bWJlcihrZXksIGNvZXJjZShhcmd2W2tleV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW10uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSwga2V5KSkuZm9yRWFjaChhbGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkLmFkZChhbGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd2W2FsaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldFBsYWNlaG9sZGVyS2V5cyhhcmd2KSB7XG4gICAgICAgICAgICBmbGFncy5rZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IHNldCBwbGFjZWhvbGRlciBrZXlzIGZvciBkb3Qgbm90YXRpb24gb3B0aW9ucyAnZm9vLmJhcicuXG4gICAgICAgICAgICAgICAgaWYgKH5rZXkuaW5kZXhPZignLicpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd2W2tleV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICBhcmd2W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5RGVmYXVsdHNBbmRBbGlhc2VzKG9iaiwgYWxpYXNlcywgZGVmYXVsdHMsIGNhbkxvZyA9IGZhbHNlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkZWZhdWx0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNLZXkob2JqLCBrZXkuc3BsaXQoJy4nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0S2V5KG9iaiwga2V5LnNwbGl0KCcuJyksIGRlZmF1bHRzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuTG9nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdGVkW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAoYWxpYXNlc1trZXldIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzS2V5KG9iaiwgeC5zcGxpdCgnLicpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkob2JqLCB4LnNwbGl0KCcuJyksIGRlZmF1bHRzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYXNLZXkob2JqLCBrZXlzKSB7XG4gICAgICAgICAgICBsZXQgbyA9IG9iajtcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pXG4gICAgICAgICAgICAgICAga2V5cyA9IFtrZXlzLmpvaW4oJy4nKV07XG4gICAgICAgICAgICBrZXlzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBvID0gKG9ba2V5XSB8fCB7fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNba2V5cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXkgaW4gbztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXRLZXkob2JqLCBrZXlzLCB2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG8gPSBvYmo7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ3VyYXRpb25bJ2RvdC1ub3RhdGlvbiddKVxuICAgICAgICAgICAgICAgIGtleXMgPSBba2V5cy5qb2luKCcuJyldO1xuICAgICAgICAgICAga2V5cy5zbGljZSgwLCAtMSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyhiY29lKTogaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiB5YXJncywgc3dpdGNoIHRvXG4gICAgICAgICAgICAgICAgLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBmb3IgZG90IG5vdGF0aW9uOlxuICAgICAgICAgICAgICAgIGtleSA9IHNhbml0aXplS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvW2tleV0gIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhhdCBvW2tleV0gaXMgYW4gYXJyYXksIGFuZCB0aGF0IHRoZSBsYXN0IGl0ZW0gaXMgYW4gZW1wdHkgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW2tleV0ucHVzaCh7fSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSBbb1trZXldLCB7fV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0byB1cGRhdGUgdGhlIGVtcHR5IG9iamVjdCBhdCB0aGUgZW5kIG9mIHRoZSBvW2tleV0gYXJyYXksIHNvIHNldCBvIHRvIHRoYXQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIG8gPSBvW2tleV1bb1trZXldLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbyA9IG9ba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRPRE8oYmNvZSk6IGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgeWFyZ3MsIHN3aXRjaCB0b1xuICAgICAgICAgICAgLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBmb3IgZG90IG5vdGF0aW9uOlxuICAgICAgICAgICAgY29uc3Qga2V5ID0gc2FuaXRpemVLZXkoa2V5c1trZXlzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIGNvbnN0IGlzVHlwZUFycmF5ID0gY2hlY2tBbGxBbGlhc2VzKGtleXMuam9pbignLicpLCBmbGFncy5hcnJheXMpO1xuICAgICAgICAgICAgY29uc3QgaXNWYWx1ZUFycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgICBsZXQgZHVwbGljYXRlID0gY29uZmlndXJhdGlvblsnZHVwbGljYXRlLWFyZ3VtZW50cy1hcnJheSddO1xuICAgICAgICAgICAgLy8gbmFyZ3MgaGFzIGhpZ2hlciBwcmlvcml0eSB0aGFuIGR1cGxpY2F0ZVxuICAgICAgICAgICAgaWYgKCFkdXBsaWNhdGUgJiYgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoKCFpc1VuZGVmaW5lZChvW2tleV0pICYmIGZsYWdzLm5hcmdzW2tleV0gPT09IDEpIHx8IChBcnJheS5pc0FycmF5KG9ba2V5XSkgJiYgb1trZXldLmxlbmd0aCA9PT0gZmxhZ3MubmFyZ3Nba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gaW5jcmVtZW50KCkpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBpbmNyZW1lbnQob1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob1trZXldKSkge1xuICAgICAgICAgICAgICAgIGlmIChkdXBsaWNhdGUgJiYgaXNUeXBlQXJyYXkgJiYgaXNWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IGNvbmZpZ3VyYXRpb25bJ2ZsYXR0ZW4tZHVwbGljYXRlLWFycmF5cyddID8gb1trZXldLmNvbmNhdCh2YWx1ZSkgOiAoQXJyYXkuaXNBcnJheShvW2tleV1bMF0pID8gb1trZXldIDogW29ba2V5XV0pLmNvbmNhdChbdmFsdWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWR1cGxpY2F0ZSAmJiBCb29sZWFuKGlzVHlwZUFycmF5KSA9PT0gQm9vbGVhbihpc1ZhbHVlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gb1trZXldLmNvbmNhdChbdmFsdWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvW2tleV0gPT09IHVuZGVmaW5lZCAmJiBpc1R5cGVBcnJheSkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IGlzVmFsdWVBcnJheSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGR1cGxpY2F0ZSAmJiAhKG9ba2V5XSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSB8fFxuICAgICAgICAgICAgICAgIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSkpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBbb1trZXldLCB2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBleHRlbmQgdGhlIGFsaWFzZXMgbGlzdCB3aXRoIGluZmVycmVkIGFsaWFzZXMuXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZEFsaWFzZXMoLi4uYXJncykge1xuICAgICAgICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvYmogfHwge30pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG9ydC1jaXJjdWl0IGlmIHdlJ3ZlIGFscmVhZHkgYWRkZWQgYSBrZXlcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gdGhlIGFsaWFzZXMgYXJyYXksIGZvciBleGFtcGxlIGl0IG1pZ2h0XG4gICAgICAgICAgICAgICAgICAgIC8vIGV4aXN0IGluIGJvdGggJ29wdHMuZGVmYXVsdCcgYW5kICdvcHRzLmtleScuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFncy5hbGlhc2VzW2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XSA9IFtdLmNvbmNhdChhbGlhc2VzW2tleV0gfHwgW10pO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgXCItLW9wdGlvbi1uYW1lXCIsIGFsc28gc2V0IGFyZ3Yub3B0aW9uTmFtZVxuICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0uY29uY2F0KGtleSkuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC8tLy50ZXN0KHgpICYmIGNvbmZpZ3VyYXRpb25bJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gY2FtZWxDYXNlKHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjICE9PSBrZXkgJiYgZmxhZ3MuYWxpYXNlc1trZXldLmluZGV4T2YoYykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBbGlhc2VzW2NdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgXCItLW9wdGlvbk5hbWVcIiwgYWxzbyBzZXQgYXJndlsnb3B0aW9uLW5hbWUnXVxuICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0uY29uY2F0KGtleSkuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHgubGVuZ3RoID4gMSAmJiAvW0EtWl0vLnRlc3QoeCkgJiYgY29uZmlndXJhdGlvblsnY2FtZWwtY2FzZS1leHBhbnNpb24nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBkZWNhbWVsaXplKHgsICctJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IGtleSAmJiBmbGFncy5hbGlhc2VzW2tleV0uaW5kZXhPZihjKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FsaWFzZXNbY10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW3hdID0gW2tleV0uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XS5maWx0ZXIoZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geCAhPT0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFnKSB7XG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gW10uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSwga2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmbGFnKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEFsaWFzID0gdG9DaGVjay5maW5kKGtleSA9PiBrZXlzLmluY2x1ZGVzKGtleSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNldEFsaWFzID8gZmxhZ1tzZXRBbGlhc10gOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYXNBbnlGbGFnKGtleSkge1xuICAgICAgICAgICAgY29uc3QgZmxhZ3NLZXlzID0gT2JqZWN0LmtleXMoZmxhZ3MpO1xuICAgICAgICAgICAgY29uc3QgdG9DaGVjayA9IFtdLmNvbmNhdChmbGFnc0tleXMubWFwKGsgPT4gZmxhZ3Nba10pKTtcbiAgICAgICAgICAgIHJldHVybiB0b0NoZWNrLnNvbWUoZnVuY3Rpb24gKGZsYWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShmbGFnKSA/IGZsYWcuaW5jbHVkZXMoa2V5KSA6IGZsYWdba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhc0ZsYWdzTWF0Y2hpbmcoYXJnLCAuLi5wYXR0ZXJucykge1xuICAgICAgICAgICAgY29uc3QgdG9DaGVjayA9IFtdLmNvbmNhdCguLi5wYXR0ZXJucyk7XG4gICAgICAgICAgICByZXR1cm4gdG9DaGVjay5zb21lKGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBhcmcubWF0Y2gocGF0dGVybik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoICYmIGhhc0FueUZsYWcobWF0Y2hbMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFzZWQgb24gYSBzaW1wbGlmaWVkIHZlcnNpb24gb2YgdGhlIHNob3J0IGZsYWcgZ3JvdXAgcGFyc2luZyBsb2dpY1xuICAgICAgICBmdW5jdGlvbiBoYXNBbGxTaG9ydEZsYWdzKGFyZykge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIG5lZ2F0aXZlIG51bWJlciwgb3IgZG9lc24ndCBzdGFydCB3aXRoIGEgc2luZ2xlIGh5cGhlbiwgaXQncyBub3QgYSBzaG9ydCBmbGFnIGdyb3VwXG4gICAgICAgICAgICBpZiAoYXJnLm1hdGNoKG5lZ2F0aXZlKSB8fCAhYXJnLm1hdGNoKC9eLVteLV0rLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaGFzQWxsRmxhZ3MgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG5leHQ7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJzID0gYXJnLnNsaWNlKDEpLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG5leHQgPSBhcmcuc2xpY2UoaiArIDIpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzQW55RmxhZyhsZXR0ZXJzW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNBbGxGbGFncyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChsZXR0ZXJzW2ogKyAxXSAmJiBsZXR0ZXJzW2ogKyAxXSA9PT0gJz0nKSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXh0ID09PSAnLScgfHxcbiAgICAgICAgICAgICAgICAgICAgKC9bQS1aYS16XS8udGVzdChsZXR0ZXJzW2pdKSAmJiAvXi0/XFxkKyhcXC5cXGQqKT8oZS0/XFxkKyk/JC8udGVzdChuZXh0KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGxldHRlcnNbaiArIDFdICYmIGxldHRlcnNbaiArIDFdLm1hdGNoKC9cXFcvKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc0FsbEZsYWdzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVW5rbm93bk9wdGlvbkFzQXJnKGFyZykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25bJ3Vua25vd24tb3B0aW9ucy1hcy1hcmdzJ10gJiYgaXNVbmtub3duT3B0aW9uKGFyZyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNVbmtub3duT3B0aW9uKGFyZykge1xuICAgICAgICAgICAgYXJnID0gYXJnLnJlcGxhY2UoL14tezMsfS8sICctLScpO1xuICAgICAgICAgICAgLy8gaWdub3JlIG5lZ2F0aXZlIG51bWJlcnNcbiAgICAgICAgICAgIGlmIChhcmcubWF0Y2gobmVnYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHNob3J0IG9wdGlvbiBncm91cCBhbmQgYWxsIG9mIHRoZW0gYXJlIGNvbmZpZ3VyZWQsIGl0IGlzbid0IHVua25vd25cbiAgICAgICAgICAgIGlmIChoYXNBbGxTaG9ydEZsYWdzKGFyZykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlLmcuICctLWNvdW50PTInXG4gICAgICAgICAgICBjb25zdCBmbGFnV2l0aEVxdWFscyA9IC9eLSsoW149XSs/KT1bXFxzXFxTXSokLztcbiAgICAgICAgICAgIC8vIGUuZy4gJy1hJyBvciAnLS1hcmcnXG4gICAgICAgICAgICBjb25zdCBub3JtYWxGbGFnID0gL14tKyhbXj1dKz8pJC87XG4gICAgICAgICAgICAvLyBlLmcuICctYS0nXG4gICAgICAgICAgICBjb25zdCBmbGFnRW5kaW5nSW5IeXBoZW4gPSAvXi0rKFtePV0rPyktJC87XG4gICAgICAgICAgICAvLyBlLmcuICctYWJjMTIzJ1xuICAgICAgICAgICAgY29uc3QgZmxhZ0VuZGluZ0luRGlnaXRzID0gL14tKyhbXj1dKz9cXGQrKSQvO1xuICAgICAgICAgICAgLy8gZS5nLiAnLWEvdXNyL2xvY2FsJ1xuICAgICAgICAgICAgY29uc3QgZmxhZ0VuZGluZ0luTm9uV29yZENoYXJhY3RlcnMgPSAvXi0rKFtePV0rPylcXFcrLiokLztcbiAgICAgICAgICAgIC8vIGNoZWNrIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgZmxhZyBzdHlsZXMsIGluY2x1ZGluZyBuZWdhdGVkQm9vbGVhbiwgYSBwYXR0ZXJuIGRlZmluZWQgbmVhciB0aGUgc3RhcnQgb2YgdGhlIHBhcnNlIG1ldGhvZFxuICAgICAgICAgICAgcmV0dXJuICFoYXNGbGFnc01hdGNoaW5nKGFyZywgZmxhZ1dpdGhFcXVhbHMsIG5lZ2F0ZWRCb29sZWFuLCBub3JtYWxGbGFnLCBmbGFnRW5kaW5nSW5IeXBoZW4sIGZsYWdFbmRpbmdJbkRpZ2l0cywgZmxhZ0VuZGluZ0luTm9uV29yZENoYXJhY3RlcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1ha2UgYSBiZXN0IGVmZm9ydCB0byBwaWNrIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAvLyBmb3IgYW4gb3B0aW9uIGJhc2VkIG9uIG5hbWUgYW5kIHR5cGUuXG4gICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZShrZXkpIHtcbiAgICAgICAgICAgIGlmICghY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmXG4gICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmNvdW50cykgJiZcbiAgICAgICAgICAgICAgICBgJHtrZXl9YCBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRGb3JUeXBlKGd1ZXNzVHlwZShrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm4gYSBkZWZhdWx0IHZhbHVlLCBnaXZlbiB0aGUgdHlwZSBvZiBhIGZsYWcuLFxuICAgICAgICBmdW5jdGlvbiBkZWZhdWx0Rm9yVHlwZSh0eXBlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWYgPSB7XG4gICAgICAgICAgICAgICAgW0RlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LkJPT0xFQU5dOiB0cnVlLFxuICAgICAgICAgICAgICAgIFtEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5TVFJJTkddOiAnJyxcbiAgICAgICAgICAgICAgICBbRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuTlVNQkVSXTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIFtEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5BUlJBWV06IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGRlZlt0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBnaXZlbiBhIGZsYWcsIGVuZm9yY2UgYSBkZWZhdWx0IHR5cGUuXG4gICAgICAgIGZ1bmN0aW9uIGd1ZXNzVHlwZShrZXkpIHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQk9PTEVBTjtcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5zdHJpbmdzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuU1RSSU5HO1xuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubnVtYmVycykpXG4gICAgICAgICAgICAgICAgdHlwZSA9IERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5Lk5VTUJFUjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQk9PTEVBTjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpXG4gICAgICAgICAgICAgICAgdHlwZSA9IERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LkFSUkFZO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNVbmRlZmluZWQobnVtKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdXNlciBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciBpbmNvbnNpc3RlbmNpZXNcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tDb25maWd1cmF0aW9uKCkge1xuICAgICAgICAgICAgLy8gY291bnQga2V5cyBzaG91bGQgbm90IGJlIHNldCBhcyBhcnJheS9uYXJnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmbGFncy5jb3VudHMpLmZpbmQoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdJbnZhbGlkIGNvbmZpZ3VyYXRpb246ICVzLCBvcHRzLmNvdW50IGV4Y2x1ZGVzIG9wdHMuYXJyYXkuJywga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncykpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnSW52YWxpZCBjb25maWd1cmF0aW9uOiAlcywgb3B0cy5jb3VudCBleGNsdWRlcyBvcHRzLm5hcmcuJywga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxpYXNlczogT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MuYWxpYXNlcyksXG4gICAgICAgICAgICBhcmd2OiBPYmplY3QuYXNzaWduKGFyZ3ZSZXR1cm4sIGFyZ3YpLFxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHRlZDogT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdGVkKSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIG5ld0FsaWFzZXM6IE9iamVjdC5hc3NpZ24oe30sIG5ld0FsaWFzZXMpXG4gICAgICAgIH07XG4gICAgfVxufVxuLy8gaWYgYW55IGFsaWFzZXMgcmVmZXJlbmNlIGVhY2ggb3RoZXIsIHdlIHNob3VsZFxuLy8gbWVyZ2UgdGhlbSB0b2dldGhlci5cbmZ1bmN0aW9uIGNvbWJpbmVBbGlhc2VzKGFsaWFzZXMpIHtcbiAgICBjb25zdCBhbGlhc0FycmF5cyA9IFtdO1xuICAgIGNvbnN0IGNvbWJpbmVkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBsZXQgY2hhbmdlID0gdHJ1ZTtcbiAgICAvLyB0dXJuIGFsaWFzIGxvb2t1cCBoYXNoIHtrZXk6IFsnYWxpYXMxJywgJ2FsaWFzMiddfSBpbnRvXG4gICAgLy8gYSBzaW1wbGUgYXJyYXkgWydrZXknLCAnYWxpYXMxJywgJ2FsaWFzMiddXG4gICAgT2JqZWN0LmtleXMoYWxpYXNlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGFsaWFzQXJyYXlzLnB1c2goW10uY29uY2F0KGFsaWFzZXNba2V5XSwga2V5KSk7XG4gICAgfSk7XG4gICAgLy8gY29tYmluZSBhcnJheXMgdW50aWwgemVybyBjaGFuZ2VzIGFyZVxuICAgIC8vIG1hZGUgaW4gYW4gaXRlcmF0aW9uLlxuICAgIHdoaWxlIChjaGFuZ2UpIHtcbiAgICAgICAgY2hhbmdlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxpYXNBcnJheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGlpID0gaSArIDE7IGlpIDwgYWxpYXNBcnJheXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0ID0gYWxpYXNBcnJheXNbaV0uZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGlhc0FycmF5c1tpaV0uaW5kZXhPZih2KSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXNBcnJheXNbaV0gPSBhbGlhc0FycmF5c1tpXS5jb25jYXQoYWxpYXNBcnJheXNbaWldKTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXNBcnJheXMuc3BsaWNlKGlpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG1hcCBhcnJheXMgYmFjayB0byB0aGUgaGFzaC1sb29rdXAgKGRlLWR1cGUgd2hpbGVcbiAgICAvLyB3ZSdyZSBhdCBpdCkuXG4gICAgYWxpYXNBcnJheXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXNBcnJheSkge1xuICAgICAgICBhbGlhc0FycmF5ID0gYWxpYXNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHYsIGksIHNlbGYpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodikgPT09IGk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsYXN0QWxpYXMgPSBhbGlhc0FycmF5LnBvcCgpO1xuICAgICAgICBpZiAobGFzdEFsaWFzICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGxhc3RBbGlhcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkW2xhc3RBbGlhc10gPSBhbGlhc0FycmF5O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufVxuLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlbiBhIGNvdW50IGlzIGdpdmVuIGFzIGFuIGFyZ1xuLy8gaXQgaXMgTk9UIGNhbGxlZCB0byBzZXQgYSBkZWZhdWx0IHZhbHVlXG4vLyB0aHVzIHdlIGNhbiBzdGFydCB0aGUgY291bnQgYXQgMSBpbnN0ZWFkIG9mIDBcbmZ1bmN0aW9uIGluY3JlbWVudChvcmlnKSB7XG4gICAgcmV0dXJuIG9yaWcgIT09IHVuZGVmaW5lZCA/IG9yaWcgKyAxIDogMTtcbn1cbi8vIFRPRE8oYmNvZSk6IGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgeWFyZ3MsIHN3aXRjaCB0b1xuLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBmb3IgZG90IG5vdGF0aW9uOlxuZnVuY3Rpb24gc2FuaXRpemVLZXkoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ19fcHJvdG9fXycpXG4gICAgICAgIHJldHVybiAnX19fcHJvdG9fX18nO1xuICAgIHJldHVybiBrZXk7XG59XG5mdW5jdGlvbiBzdHJpcFF1b3Rlcyh2YWwpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICh2YWxbMF0gPT09IFwiJ1wiIHx8IHZhbFswXSA9PT0gJ1wiJykgJiZcbiAgICAgICAgdmFsW3ZhbC5sZW5ndGggLSAxXSA9PT0gdmFsWzBdKVxuICAgICAgICA/IHZhbC5zdWJzdHJpbmcoMSwgdmFsLmxlbmd0aCAtIDEpXG4gICAgICAgIDogdmFsO1xufVxuIiwgIi8qKlxuICogQGZpbGVvdmVydmlldyBNYWluIGVudHJ5cG9pbnQgZm9yIGxpYnJhcmllcyB1c2luZyB5YXJncy1wYXJzZXIgaW4gTm9kZS5qc1xuICogQ0pTIGFuZCBFU00gZW52aXJvbm1lbnRzLlxuICpcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIENvbnRyaWJ1dG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IElTQ1xuICovXG52YXIgX2EsIF9iLCBfYztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgbm9ybWFsaXplLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBjYW1lbENhc2UsIGRlY2FtZWxpemUsIGxvb2tzTGlrZU51bWJlciB9IGZyb20gJy4vc3RyaW5nLXV0aWxzLmpzJztcbmltcG9ydCB7IFlhcmdzUGFyc2VyIH0gZnJvbSAnLi95YXJncy1wYXJzZXIuanMnO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS95YXJncy95YXJncy1wYXJzZXIjc3VwcG9ydGVkLW5vZGVqcy12ZXJzaW9ucyBmb3Igb3VyXG4vLyB2ZXJzaW9uIHN1cHBvcnQgcG9saWN5LiBUaGUgWUFSR1NfTUlOX05PREVfVkVSU0lPTiBpcyB1c2VkIGZvciB0ZXN0aW5nIG9ubHkuXG5jb25zdCBtaW5Ob2RlVmVyc2lvbiA9IChwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52LllBUkdTX01JTl9OT0RFX1ZFUlNJT04pXG4gICAgPyBOdW1iZXIocHJvY2Vzcy5lbnYuWUFSR1NfTUlOX05PREVfVkVSU0lPTilcbiAgICA6IDEyO1xuY29uc3Qgbm9kZVZlcnNpb24gPSAoX2IgPSAoX2EgPSBwcm9jZXNzID09PSBudWxsIHx8IHByb2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2Nlc3MudmVyc2lvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAoX2MgPSBwcm9jZXNzID09PSBudWxsIHx8IHByb2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2Nlc3MudmVyc2lvbikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNsaWNlKDEpO1xuaWYgKG5vZGVWZXJzaW9uKSB7XG4gICAgY29uc3QgbWFqb3IgPSBOdW1iZXIobm9kZVZlcnNpb24ubWF0Y2goL14oW14uXSspLylbMV0pO1xuICAgIGlmIChtYWpvciA8IG1pbk5vZGVWZXJzaW9uKSB7XG4gICAgICAgIHRocm93IEVycm9yKGB5YXJncyBwYXJzZXIgc3VwcG9ydHMgYSBtaW5pbXVtIE5vZGUuanMgdmVyc2lvbiBvZiAke21pbk5vZGVWZXJzaW9ufS4gUmVhZCBvdXIgdmVyc2lvbiBzdXBwb3J0IHBvbGljeTogaHR0cHM6Ly9naXRodWIuY29tL3lhcmdzL3lhcmdzLXBhcnNlciNzdXBwb3J0ZWQtbm9kZWpzLXZlcnNpb25zYCk7XG4gICAgfVxufVxuLy8gQ3JlYXRlcyBhIHlhcmdzLXBhcnNlciBpbnN0YW5jZSB1c2luZyBOb2RlLmpzIHN0YW5kYXJkIGxpYnJhcmllczpcbmNvbnN0IGVudiA9IHByb2Nlc3MgPyBwcm9jZXNzLmVudiA6IHt9O1xuY29uc3QgcGFyc2VyID0gbmV3IFlhcmdzUGFyc2VyKHtcbiAgICBjd2Q6IHByb2Nlc3MuY3dkLFxuICAgIGVudjogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW52O1xuICAgIH0sXG4gICAgZm9ybWF0LFxuICAgIG5vcm1hbGl6ZSxcbiAgICByZXNvbHZlLFxuICAgIC8vIFRPRE86IGZpZ3VyZSAgb3V0IGEgIHdheSB0byBjb21iaW5lIEVTTSBhbmQgQ0pTIGNvdmVyYWdlLCBzdWNoICB0aGF0XG4gICAgLy8gd2UgY2FuIGV4ZXJjaXNlIGFsbCB0aGUgbGluZXMgYmVsb3c6XG4gICAgcmVxdWlyZTogKHBhdGgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUocGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aC5tYXRjaCgvXFwuanNvbiQvKSkge1xuICAgICAgICAgICAgLy8gQWRkcmVzc2VzOiBodHRwczovL2dpdGh1Yi5jb20veWFyZ3MveWFyZ3MvaXNzdWVzLzIwNDBcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhwYXRoLCAndXRmOCcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdvbmx5IC5qc29uIGNvbmZpZyBmaWxlcyBhcmUgc3VwcG9ydGVkIGluIEVTTScpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5jb25zdCB5YXJnc1BhcnNlciA9IGZ1bmN0aW9uIFBhcnNlcihhcmdzLCBvcHRzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gcGFyc2VyLnBhcnNlKGFyZ3Muc2xpY2UoKSwgb3B0cyk7XG4gICAgcmV0dXJuIHJlc3VsdC5hcmd2O1xufTtcbnlhcmdzUGFyc2VyLmRldGFpbGVkID0gZnVuY3Rpb24gKGFyZ3MsIG9wdHMpIHtcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGFyZ3Muc2xpY2UoKSwgb3B0cyk7XG59O1xueWFyZ3NQYXJzZXIuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xueWFyZ3NQYXJzZXIuZGVjYW1lbGl6ZSA9IGRlY2FtZWxpemU7XG55YXJnc1BhcnNlci5sb29rc0xpa2VOdW1iZXIgPSBsb29rc0xpa2VOdW1iZXI7XG5leHBvcnQgZGVmYXVsdCB5YXJnc1BhcnNlcjtcbiIsICJmdW5jdGlvbiBnZXRQcm9jZXNzQXJndkJpbkluZGV4KCkge1xuICAgIGlmIChpc0J1bmRsZWRFbGVjdHJvbkFwcCgpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICByZXR1cm4gMTtcbn1cbmZ1bmN0aW9uIGlzQnVuZGxlZEVsZWN0cm9uQXBwKCkge1xuICAgIHJldHVybiBpc0VsZWN0cm9uQXBwKCkgJiYgIXByb2Nlc3MuZGVmYXVsdEFwcDtcbn1cbmZ1bmN0aW9uIGlzRWxlY3Ryb25BcHAoKSB7XG4gICAgcmV0dXJuICEhcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQmluKGFyZ3YpIHtcbiAgICByZXR1cm4gYXJndi5zbGljZShnZXRQcm9jZXNzQXJndkJpbkluZGV4KCkgKyAxKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9jZXNzQXJndkJpbigpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5hcmd2W2dldFByb2Nlc3NBcmd2QmluSW5kZXgoKV07XG59XG4iLCAiZXhwb3J0IGNsYXNzIFlFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnIHx8ICd5YXJncyBlcnJvcicpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnWUVycm9yJztcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBZRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwgImltcG9ydCB7IHJlYWRGaWxlU3luYywgc3RhdFN5bmMsIHdyaXRlRmlsZSB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZzOiB7XG4gICAgICAgIHJlYWRGaWxlU3luYyxcbiAgICAgICAgd3JpdGVGaWxlXG4gICAgfSxcbiAgICBmb3JtYXQsXG4gICAgcmVzb2x2ZSxcbiAgICBleGlzdHM6IChmaWxlKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdFN5bmMoZmlsZSkuaXNGaWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsICJsZXQgc2hpbTtcbmNsYXNzIFkxOE4ge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgLy8gY29uZmlndXJhYmxlIG9wdGlvbnMuXG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICB0aGlzLmRpcmVjdG9yeSA9IG9wdHMuZGlyZWN0b3J5IHx8ICcuL2xvY2FsZXMnO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGVzID0gdHlwZW9mIG9wdHMudXBkYXRlRmlsZXMgPT09ICdib29sZWFuJyA/IG9wdHMudXBkYXRlRmlsZXMgOiB0cnVlO1xuICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdHMubG9jYWxlIHx8ICdlbic7XG4gICAgICAgIHRoaXMuZmFsbGJhY2tUb0xhbmd1YWdlID0gdHlwZW9mIG9wdHMuZmFsbGJhY2tUb0xhbmd1YWdlID09PSAnYm9vbGVhbicgPyBvcHRzLmZhbGxiYWNrVG9MYW5ndWFnZSA6IHRydWU7XG4gICAgICAgIC8vIGludGVybmFsIHN0dWZmLlxuICAgICAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy53cml0ZVF1ZXVlID0gW107XG4gICAgfVxuICAgIF9fKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFnZ2VkTGl0ZXJhbChhcmd1bWVudHNbMF0sIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBsZXQgY2IgPSBmdW5jdGlvbiAoKSB7IH07IC8vIHN0YXJ0IHdpdGggbm9vcC5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYiA9IGFyZ3MucG9wKCk7XG4gICAgICAgIGNiID0gY2IgfHwgZnVuY3Rpb24gKCkgeyB9OyAvLyBub29wLlxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdKVxuICAgICAgICAgICAgdGhpcy5fcmVhZExvY2FsZUZpbGUoKTtcbiAgICAgICAgLy8gd2UndmUgb2JzZXJ2ZWQgYSBuZXcgc3RyaW5nLCB1cGRhdGUgdGhlIGxhbmd1YWdlIGZpbGUuXG4gICAgICAgIGlmICghdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc3RyXSAmJiB0aGlzLnVwZGF0ZUZpbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzdHJdID0gc3RyO1xuICAgICAgICAgICAgLy8gaW5jbHVkZSB0aGUgY3VycmVudCBkaXJlY3RvcnkgYW5kIGxvY2FsZSxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZXNlIHZhbHVlcyBjb3VsZCBjaGFuZ2UgYmVmb3JlIHRoZVxuICAgICAgICAgICAgLy8gd3JpdGUgaXMgcGVyZm9ybWVkLlxuICAgICAgICAgICAgdGhpcy5fZW5xdWV1ZVdyaXRlKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6IHRoaXMuZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgY2JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpbS5mb3JtYXQuYXBwbHkoc2hpbS5mb3JtYXQsIFt0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzdHJdIHx8IHN0cl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgX19uKCkge1xuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgY29uc3Qgc2luZ3VsYXIgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IHBsdXJhbCA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGxldCBjYiA9IGZ1bmN0aW9uICgpIHsgfTsgLy8gc3RhcnQgd2l0aCBub29wLlxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNiID0gYXJncy5wb3AoKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXSlcbiAgICAgICAgICAgIHRoaXMuX3JlYWRMb2NhbGVGaWxlKCk7XG4gICAgICAgIGxldCBzdHIgPSBxdWFudGl0eSA9PT0gMSA/IHNpbmd1bGFyIDogcGx1cmFsO1xuICAgICAgICBpZiAodGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc2luZ3VsYXJdKSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW3Npbmd1bGFyXTtcbiAgICAgICAgICAgIHN0ciA9IGVudHJ5W3F1YW50aXR5ID09PSAxID8gJ29uZScgOiAnb3RoZXInXTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSd2ZSBvYnNlcnZlZCBhIG5ldyBzdHJpbmcsIHVwZGF0ZSB0aGUgbGFuZ3VhZ2UgZmlsZS5cbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzaW5ndWxhcl0gJiYgdGhpcy51cGRhdGVGaWxlcykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc2luZ3VsYXJdID0ge1xuICAgICAgICAgICAgICAgIG9uZTogc2luZ3VsYXIsXG4gICAgICAgICAgICAgICAgb3RoZXI6IHBsdXJhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgdGhlIGN1cnJlbnQgZGlyZWN0b3J5IGFuZCBsb2NhbGUsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVzZSB2YWx1ZXMgY291bGQgY2hhbmdlIGJlZm9yZSB0aGVcbiAgICAgICAgICAgIC8vIHdyaXRlIGlzIHBlcmZvcm1lZC5cbiAgICAgICAgICAgIHRoaXMuX2VucXVldWVXcml0ZSh7XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5OiB0aGlzLmRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGNiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgYSAlZCBwbGFjZWhvbGRlciBpcyBwcm92aWRlZCwgYWRkIHF1YW50aXR5XG4gICAgICAgIC8vIHRvIHRoZSBhcmd1bWVudHMgZXhwYW5kZWQgYnkgdXRpbC5mb3JtYXQuXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtzdHJdO1xuICAgICAgICBpZiAofnN0ci5pbmRleE9mKCclZCcpKVxuICAgICAgICAgICAgdmFsdWVzLnB1c2gocXVhbnRpdHkpO1xuICAgICAgICByZXR1cm4gc2hpbS5mb3JtYXQuYXBwbHkoc2hpbS5mb3JtYXQsIHZhbHVlcy5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgIH1cbiAgICBnZXRMb2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZTtcbiAgICB9XG4gICAgdXBkYXRlTG9jYWxlKG9iaikge1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdKVxuICAgICAgICAgICAgdGhpcy5fcmVhZExvY2FsZUZpbGUoKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfdGFnZ2VkTGl0ZXJhbChwYXJ0cywgLi4uYXJncykge1xuICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaSArIDFdO1xuICAgICAgICAgICAgc3RyICs9IHBhcnQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gJyVzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fLmFwcGx5KHRoaXMsIFtzdHJdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MsIDEpKSk7XG4gICAgfVxuICAgIF9lbnF1ZXVlV3JpdGUod29yaykge1xuICAgICAgICB0aGlzLndyaXRlUXVldWUucHVzaCh3b3JrKTtcbiAgICAgICAgaWYgKHRoaXMud3JpdGVRdWV1ZS5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzV3JpdGVRdWV1ZSgpO1xuICAgIH1cbiAgICBfcHJvY2Vzc1dyaXRlUXVldWUoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgd29yayA9IHRoaXMud3JpdGVRdWV1ZVswXTtcbiAgICAgICAgLy8gZGVzdHJ1Y3R1cmUgdGhlIGVucXVldWVkIHdvcmsuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IHdvcmsuZGlyZWN0b3J5O1xuICAgICAgICBjb25zdCBsb2NhbGUgPSB3b3JrLmxvY2FsZTtcbiAgICAgICAgY29uc3QgY2IgPSB3b3JrLmNiO1xuICAgICAgICBjb25zdCBsYW5ndWFnZUZpbGUgPSB0aGlzLl9yZXNvbHZlTG9jYWxlRmlsZShkaXJlY3RvcnksIGxvY2FsZSk7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRMb2NhbGUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNhY2hlW2xvY2FsZV0sIG51bGwsIDIpO1xuICAgICAgICBzaGltLmZzLndyaXRlRmlsZShsYW5ndWFnZUZpbGUsIHNlcmlhbGl6ZWRMb2NhbGUsICd1dGYtOCcsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIF90aGlzLndyaXRlUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy53cml0ZVF1ZXVlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgX3RoaXMuX3Byb2Nlc3NXcml0ZVF1ZXVlKCk7XG4gICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlYWRMb2NhbGVGaWxlKCkge1xuICAgICAgICBsZXQgbG9jYWxlTG9va3VwID0ge307XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlRmlsZSA9IHRoaXMuX3Jlc29sdmVMb2NhbGVGaWxlKHRoaXMuZGlyZWN0b3J5LCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHVzaW5nIGEgYnVuZGxlciBzdWNoIGFzIHdlYnBhY2ssIHJlYWRGaWxlU3luYyBtYXkgbm90IGJlIGRlZmluZWQ6XG4gICAgICAgICAgICBpZiAoc2hpbS5mcy5yZWFkRmlsZVN5bmMpIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVMb29rdXAgPSBKU09OLnBhcnNlKHNoaW0uZnMucmVhZEZpbGVTeW5jKGxhbmd1YWdlRmlsZSwgJ3V0Zi04JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gJ3N5bnRheCBlcnJvciBpbiAnICsgbGFuZ3VhZ2VGaWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJylcbiAgICAgICAgICAgICAgICBsb2NhbGVMb29rdXAgPSB7fTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV0gPSBsb2NhbGVMb29rdXA7XG4gICAgfVxuICAgIF9yZXNvbHZlTG9jYWxlRmlsZShkaXJlY3RvcnksIGxvY2FsZSkge1xuICAgICAgICBsZXQgZmlsZSA9IHNoaW0ucmVzb2x2ZShkaXJlY3RvcnksICcuLycsIGxvY2FsZSArICcuanNvbicpO1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja1RvTGFuZ3VhZ2UgJiYgIXRoaXMuX2ZpbGVFeGlzdHNTeW5jKGZpbGUpICYmIH5sb2NhbGUubGFzdEluZGV4T2YoJ18nKSkge1xuICAgICAgICAgICAgLy8gYXR0ZW1wdCBmYWxsYmFjayB0byBsYW5ndWFnZSBvbmx5XG4gICAgICAgICAgICBjb25zdCBsYW5ndWFnZUZpbGUgPSBzaGltLnJlc29sdmUoZGlyZWN0b3J5LCAnLi8nLCBsb2NhbGUuc3BsaXQoJ18nKVswXSArICcuanNvbicpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbGVFeGlzdHNTeW5jKGxhbmd1YWdlRmlsZSkpXG4gICAgICAgICAgICAgICAgZmlsZSA9IGxhbmd1YWdlRmlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsZTtcbiAgICB9XG4gICAgX2ZpbGVFeGlzdHNTeW5jKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHNoaW0uZXhpc3RzKGZpbGUpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB5MThuKG9wdHMsIF9zaGltKSB7XG4gICAgc2hpbSA9IF9zaGltO1xuICAgIGNvbnN0IHkxOG4gPSBuZXcgWTE4TihvcHRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBfXzogeTE4bi5fXy5iaW5kKHkxOG4pLFxuICAgICAgICBfX246IHkxOG4uX19uLmJpbmQoeTE4biksXG4gICAgICAgIHNldExvY2FsZTogeTE4bi5zZXRMb2NhbGUuYmluZCh5MThuKSxcbiAgICAgICAgZ2V0TG9jYWxlOiB5MThuLmdldExvY2FsZS5iaW5kKHkxOG4pLFxuICAgICAgICB1cGRhdGVMb2NhbGU6IHkxOG4udXBkYXRlTG9jYWxlLmJpbmQoeTE4biksXG4gICAgICAgIGxvY2FsZTogeTE4bi5sb2NhbGVcbiAgICB9O1xufVxuIiwgImltcG9ydCBzaGltIGZyb20gJy4vYnVpbGQvbGliL3BsYXRmb3JtLXNoaW1zL25vZGUuanMnXG5pbXBvcnQgeyB5MThuIGFzIF95MThuIH0gZnJvbSAnLi9idWlsZC9saWIvaW5kZXguanMnXG5cbmNvbnN0IHkxOG4gPSAob3B0cykgPT4ge1xuICByZXR1cm4gX3kxOG4ob3B0cywgc2hpbSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgeTE4blxuIiwgIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyBub3RTdHJpY3RFcXVhbCwgc3RyaWN0RXF1YWwgfSBmcm9tICdhc3NlcnQnXG5pbXBvcnQgY2xpdWkgZnJvbSAnY2xpdWknXG5pbXBvcnQgZXNjYWxhZGUgZnJvbSAnZXNjYWxhZGUvc3luYydcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJ1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcbmltcG9ydCBQYXJzZXIgZnJvbSAneWFyZ3MtcGFyc2VyJ1xuaW1wb3J0IHsgYmFzZW5hbWUsIGRpcm5hbWUsIGV4dG5hbWUsIHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGdldFByb2Nlc3NBcmd2QmluIH0gZnJvbSAnLi4vLi4vYnVpbGQvbGliL3V0aWxzL3Byb2Nlc3MtYXJndi5qcydcbmltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4uLy4uL2J1aWxkL2xpYi95ZXJyb3IuanMnXG5pbXBvcnQgeTE4biBmcm9tICd5MThuJ1xuXG5jb25zdCBSRVFVSVJFX0VSUk9SID0gJ3JlcXVpcmUgaXMgbm90IHN1cHBvcnRlZCBieSBFU00nXG5jb25zdCBSRVFVSVJFX0RJUkVDVE9SWV9FUlJPUiA9ICdsb2FkaW5nIGEgZGlyZWN0b3J5IG9mIGNvbW1hbmRzIGlzIG5vdCBzdXBwb3J0ZWQgeWV0IGZvciBFU00nXG5cbmxldCBfX2Rpcm5hbWU7XG50cnkge1xuICBfX2Rpcm5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG59IGNhdGNoIChlKSB7XG4gIF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XG59XG5jb25zdCBtYWluRmlsZW5hbWUgPSBfX2Rpcm5hbWUuc3Vic3RyaW5nKDAsIF9fZGlybmFtZS5sYXN0SW5kZXhPZignbm9kZV9tb2R1bGVzJykpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2VydDoge1xuICAgIG5vdFN0cmljdEVxdWFsLFxuICAgIHN0cmljdEVxdWFsXG4gIH0sXG4gIGNsaXVpLFxuICBmaW5kVXA6IGVzY2FsYWRlLFxuICBnZXRFbnY6IChrZXkpID0+IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnZba2V5XVxuICB9LFxuICBpbnNwZWN0LFxuICBnZXRDYWxsZXJGaWxlOiAoKSA9PiB7XG4gICAgdGhyb3cgbmV3IFlFcnJvcihSRVFVSVJFX0RJUkVDVE9SWV9FUlJPUilcbiAgfSxcbiAgZ2V0UHJvY2Vzc0FyZ3ZCaW4sXG4gIG1haW5GaWxlbmFtZTogbWFpbkZpbGVuYW1lIHx8IHByb2Nlc3MuY3dkKCksXG4gIFBhcnNlcixcbiAgcGF0aDoge1xuICAgIGJhc2VuYW1lLFxuICAgIGRpcm5hbWUsXG4gICAgZXh0bmFtZSxcbiAgICByZWxhdGl2ZSxcbiAgICByZXNvbHZlXG4gIH0sXG4gIHByb2Nlc3M6IHtcbiAgICBhcmd2OiAoKSA9PiBwcm9jZXNzLmFyZ3YsXG4gICAgY3dkOiBwcm9jZXNzLmN3ZCxcbiAgICBlbWl0V2FybmluZzogKHdhcm5pbmcsIHR5cGUpID0+IHByb2Nlc3MuZW1pdFdhcm5pbmcod2FybmluZywgdHlwZSksXG4gICAgZXhlY1BhdGg6ICgpID0+IHByb2Nlc3MuZXhlY1BhdGgsXG4gICAgZXhpdDogcHJvY2Vzcy5leGl0LFxuICAgIG5leHRUaWNrOiBwcm9jZXNzLm5leHRUaWNrLFxuICAgIHN0ZENvbHVtbnM6IHR5cGVvZiBwcm9jZXNzLnN0ZG91dC5jb2x1bW5zICE9PSAndW5kZWZpbmVkJyA/IHByb2Nlc3Muc3Rkb3V0LmNvbHVtbnMgOiBudWxsXG4gIH0sXG4gIHJlYWRGaWxlU3luYyxcbiAgcmVxdWlyZTogKCkgPT4ge1xuICAgIHRocm93IG5ldyBZRXJyb3IoUkVRVUlSRV9FUlJPUilcbiAgfSxcbiAgcmVxdWlyZURpcmVjdG9yeTogKCkgPT4ge1xuICAgIHRocm93IG5ldyBZRXJyb3IoUkVRVUlSRV9ESVJFQ1RPUllfRVJST1IpXG4gIH0sXG4gIHN0cmluZ1dpZHRoOiAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zdHJdLmxlbmd0aFxuICB9LFxuICB5MThuOiB5MThuKHtcbiAgICBkaXJlY3Rvcnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vbG9jYWxlcycpLFxuICAgIHVwZGF0ZUZpbGVzOiBmYWxzZVxuICB9KVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBhc3NlcnROb3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBzaGltLCBtZXNzYWdlKSB7XG4gICAgc2hpbS5hc3NlcnQubm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U2luZ2xlS2V5KGFjdHVhbCwgc2hpbSkge1xuICAgIHNoaW0uYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiBhY3R1YWwsICdzdHJpbmcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RLZXlzKG9iamVjdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UobWF5YmVQcm9taXNlKSB7XG4gICAgcmV0dXJuICghIW1heWJlUHJvbWlzZSAmJlxuICAgICAgICAhIW1heWJlUHJvbWlzZS50aGVuICYmXG4gICAgICAgIHR5cGVvZiBtYXliZVByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29tbWFuZChjbWQpIHtcbiAgICBjb25zdCBleHRyYVNwYWNlc1N0cmlwcGVkQ29tbWFuZCA9IGNtZC5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XG4gICAgY29uc3Qgc3BsaXRDb21tYW5kID0gZXh0cmFTcGFjZXNTdHJpcHBlZENvbW1hbmQuc3BsaXQoL1xccysoPyFbXltdKl18W148XSo+KS8pO1xuICAgIGNvbnN0IGJyZWdleCA9IC9cXC4qW1xcXVs8Pl0vZztcbiAgICBjb25zdCBmaXJzdENvbW1hbmQgPSBzcGxpdENvbW1hbmQuc2hpZnQoKTtcbiAgICBpZiAoIWZpcnN0Q29tbWFuZClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjb21tYW5kIGZvdW5kIGluOiAke2NtZH1gKTtcbiAgICBjb25zdCBwYXJzZWRDb21tYW5kID0ge1xuICAgICAgICBjbWQ6IGZpcnN0Q29tbWFuZC5yZXBsYWNlKGJyZWdleCwgJycpLFxuICAgICAgICBkZW1hbmRlZDogW10sXG4gICAgICAgIG9wdGlvbmFsOiBbXSxcbiAgICB9O1xuICAgIHNwbGl0Q29tbWFuZC5mb3JFYWNoKChjbWQsIGkpID0+IHtcbiAgICAgICAgbGV0IHZhcmlhZGljID0gZmFsc2U7XG4gICAgICAgIGNtZCA9IGNtZC5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICBpZiAoL1xcLitbXFxdPl0vLnRlc3QoY21kKSAmJiBpID09PSBzcGxpdENvbW1hbmQubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIHZhcmlhZGljID0gdHJ1ZTtcbiAgICAgICAgaWYgKC9eXFxbLy50ZXN0KGNtZCkpIHtcbiAgICAgICAgICAgIHBhcnNlZENvbW1hbmQub3B0aW9uYWwucHVzaCh7XG4gICAgICAgICAgICAgICAgY21kOiBjbWQucmVwbGFjZShicmVnZXgsICcnKS5zcGxpdCgnfCcpLFxuICAgICAgICAgICAgICAgIHZhcmlhZGljLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWRDb21tYW5kLmRlbWFuZGVkLnB1c2goe1xuICAgICAgICAgICAgICAgIGNtZDogY21kLnJlcGxhY2UoYnJlZ2V4LCAnJykuc3BsaXQoJ3wnKSxcbiAgICAgICAgICAgICAgICB2YXJpYWRpYyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlZENvbW1hbmQ7XG59XG4iLCAiaW1wb3J0IHsgWUVycm9yIH0gZnJvbSAnLi95ZXJyb3IuanMnO1xuaW1wb3J0IHsgcGFyc2VDb21tYW5kIH0gZnJvbSAnLi9wYXJzZS1jb21tYW5kLmpzJztcbmNvbnN0IHBvc2l0aW9uTmFtZSA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdmaWZ0aCcsICdzaXh0aCddO1xuZXhwb3J0IGZ1bmN0aW9uIGFyZ3NlcnQoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGZ1bmN0aW9uIHBhcnNlQXJncygpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmcxID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgPyBbeyBkZW1hbmRlZDogW10sIG9wdGlvbmFsOiBbXSB9LCBhcmcxLCBhcmcyXVxuICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgcGFyc2VDb21tYW5kKGBjbWQgJHthcmcxfWApLFxuICAgICAgICAgICAgICAgIGFyZzIsXG4gICAgICAgICAgICAgICAgYXJnMyxcbiAgICAgICAgICAgIF07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IDA7XG4gICAgICAgIGNvbnN0IFtwYXJzZWQsIGNhbGxlckFyZ3VtZW50cywgX2xlbmd0aF0gPSBwYXJzZUFyZ3MoKTtcbiAgICAgICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoY2FsbGVyQXJndW1lbnRzKTtcbiAgICAgICAgd2hpbGUgKGFyZ3MubGVuZ3RoICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgYXJncy5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gX2xlbmd0aCB8fCBhcmdzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA8IHBhcnNlZC5kZW1hbmRlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoYE5vdCBlbm91Z2ggYXJndW1lbnRzIHByb3ZpZGVkLiBFeHBlY3RlZCAke3BhcnNlZC5kZW1hbmRlZC5sZW5ndGh9IGJ1dCByZWNlaXZlZCAke2FyZ3MubGVuZ3RofS5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b3RhbENvbW1hbmRzID0gcGFyc2VkLmRlbWFuZGVkLmxlbmd0aCArIHBhcnNlZC5vcHRpb25hbC5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPiB0b3RhbENvbW1hbmRzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKGBUb28gbWFueSBhcmd1bWVudHMgcHJvdmlkZWQuIEV4cGVjdGVkIG1heCAke3RvdGFsQ29tbWFuZHN9IGJ1dCByZWNlaXZlZCAke2xlbmd0aH0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmRlbWFuZGVkLmZvckVhY2goZGVtYW5kZWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJnID0gYXJncy5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZWRUeXBlID0gZ3Vlc3NUeXBlKGFyZyk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGluZ1R5cGVzID0gZGVtYW5kZWQuY21kLmZpbHRlcih0eXBlID0+IHR5cGUgPT09IG9ic2VydmVkVHlwZSB8fCB0eXBlID09PSAnKicpO1xuICAgICAgICAgICAgaWYgKG1hdGNoaW5nVHlwZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIGFyZ3VtZW50VHlwZUVycm9yKG9ic2VydmVkVHlwZSwgZGVtYW5kZWQuY21kLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSAxO1xuICAgICAgICB9KTtcbiAgICAgICAgcGFyc2VkLm9wdGlvbmFsLmZvckVhY2gob3B0aW9uYWwgPT4ge1xuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVkVHlwZSA9IGd1ZXNzVHlwZShhcmcpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdUeXBlcyA9IG9wdGlvbmFsLmNtZC5maWx0ZXIodHlwZSA9PiB0eXBlID09PSBvYnNlcnZlZFR5cGUgfHwgdHlwZSA9PT0gJyonKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGluZ1R5cGVzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICBhcmd1bWVudFR5cGVFcnJvcihvYnNlcnZlZFR5cGUsIG9wdGlvbmFsLmNtZCwgcG9zaXRpb24pO1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gMTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGVyci5zdGFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ3Vlc3NUeXBlKGFyZykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIGFyZztcbn1cbmZ1bmN0aW9uIGFyZ3VtZW50VHlwZUVycm9yKG9ic2VydmVkVHlwZSwgYWxsb3dlZFR5cGVzLCBwb3NpdGlvbikge1xuICAgIHRocm93IG5ldyBZRXJyb3IoYEludmFsaWQgJHtwb3NpdGlvbk5hbWVbcG9zaXRpb25dIHx8ICdtYW55aXRoJ30gYXJndW1lbnQuIEV4cGVjdGVkICR7YWxsb3dlZFR5cGVzLmpvaW4oJyBvciAnKX0gYnV0IHJlY2VpdmVkICR7b2JzZXJ2ZWRUeXBlfS5gKTtcbn1cbiIsICJpbXBvcnQgeyBhcmdzZXJ0IH0gZnJvbSAnLi9hcmdzZXJ0LmpzJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4vdXRpbHMvaXMtcHJvbWlzZS5qcyc7XG5leHBvcnQgY2xhc3MgR2xvYmFsTWlkZGxld2FyZSB7XG4gICAgY29uc3RydWN0b3IoeWFyZ3MpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlID0gW107XG4gICAgICAgIHRoaXMuZnJvemVucyA9IFtdO1xuICAgICAgICB0aGlzLnlhcmdzID0geWFyZ3M7XG4gICAgfVxuICAgIGFkZE1pZGRsZXdhcmUoY2FsbGJhY2ssIGFwcGx5QmVmb3JlVmFsaWRhdGlvbiwgZ2xvYmFsID0gdHJ1ZSwgbXV0YXRlcyA9IGZhbHNlKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxmdW5jdGlvbj4gW2Jvb2xlYW5dIFtib29sZWFuXSBbYm9vbGVhbl0nLCBbY2FsbGJhY2ssIGFwcGx5QmVmb3JlVmFsaWRhdGlvbiwgZ2xvYmFsXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2tbaV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ21pZGRsZXdhcmUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBjYWxsYmFja1tpXTtcbiAgICAgICAgICAgICAgICBtLmFwcGx5QmVmb3JlVmFsaWRhdGlvbiA9IGFwcGx5QmVmb3JlVmFsaWRhdGlvbjtcbiAgICAgICAgICAgICAgICBtLmdsb2JhbCA9IGdsb2JhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMuZ2xvYmFsTWlkZGxld2FyZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgbSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgbS5hcHBseUJlZm9yZVZhbGlkYXRpb24gPSBhcHBseUJlZm9yZVZhbGlkYXRpb247XG4gICAgICAgICAgICBtLmdsb2JhbCA9IGdsb2JhbDtcbiAgICAgICAgICAgIG0ubXV0YXRlcyA9IG11dGF0ZXM7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMueWFyZ3M7XG4gICAgfVxuICAgIGFkZENvZXJjZU1pZGRsZXdhcmUoY2FsbGJhY2ssIG9wdGlvbikge1xuICAgICAgICBjb25zdCBhbGlhc2VzID0gdGhpcy55YXJncy5nZXRBbGlhc2VzKCk7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWlkZGxld2FyZSA9IHRoaXMuZ2xvYmFsTWlkZGxld2FyZS5maWx0ZXIobSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gWy4uLihhbGlhc2VzW29wdGlvbl0gfHwgW10pLCBvcHRpb25dO1xuICAgICAgICAgICAgaWYgKCFtLm9wdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRvQ2hlY2suaW5jbHVkZXMobS5vcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgY2FsbGJhY2sub3B0aW9uID0gb3B0aW9uO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRNaWRkbGV3YXJlKGNhbGxiYWNrLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICB9XG4gICAgZ2V0TWlkZGxld2FyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsTWlkZGxld2FyZTtcbiAgICB9XG4gICAgZnJlZXplKCkge1xuICAgICAgICB0aGlzLmZyb3plbnMucHVzaChbLi4udGhpcy5nbG9iYWxNaWRkbGV3YXJlXSk7XG4gICAgfVxuICAgIHVuZnJlZXplKCkge1xuICAgICAgICBjb25zdCBmcm96ZW4gPSB0aGlzLmZyb3plbnMucG9wKCk7XG4gICAgICAgIGlmIChmcm96ZW4gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWlkZGxld2FyZSA9IGZyb3plbjtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWlkZGxld2FyZSA9IHRoaXMuZ2xvYmFsTWlkZGxld2FyZS5maWx0ZXIobSA9PiBtLmdsb2JhbCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRNaWRkbGV3YXJlRmFjdG9yeShjb21tYW5kTWlkZGxld2FyZSkge1xuICAgIGlmICghY29tbWFuZE1pZGRsZXdhcmUpXG4gICAgICAgIHJldHVybiBbXTtcbiAgICByZXR1cm4gY29tbWFuZE1pZGRsZXdhcmUubWFwKG1pZGRsZXdhcmUgPT4ge1xuICAgICAgICBtaWRkbGV3YXJlLmFwcGx5QmVmb3JlVmFsaWRhdGlvbiA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoYXJndiwgeWFyZ3MsIG1pZGRsZXdhcmVzLCBiZWZvcmVWYWxpZGF0aW9uKSB7XG4gICAgcmV0dXJuIG1pZGRsZXdhcmVzLnJlZHVjZSgoYWNjLCBtaWRkbGV3YXJlKSA9PiB7XG4gICAgICAgIGlmIChtaWRkbGV3YXJlLmFwcGx5QmVmb3JlVmFsaWRhdGlvbiAhPT0gYmVmb3JlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuICAgICAgICBpZiAobWlkZGxld2FyZS5tdXRhdGVzKSB7XG4gICAgICAgICAgICBpZiAobWlkZGxld2FyZS5hcHBsaWVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICBtaWRkbGV3YXJlLmFwcGxpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb21pc2UoYWNjKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgICAgICAgIC50aGVuKGluaXRpYWxPYmogPT4gUHJvbWlzZS5hbGwoW2luaXRpYWxPYmosIG1pZGRsZXdhcmUoaW5pdGlhbE9iaiwgeWFyZ3MpXSkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKFtpbml0aWFsT2JqLCBtaWRkbGV3YXJlT2JqXSkgPT4gT2JqZWN0LmFzc2lnbihpbml0aWFsT2JqLCBtaWRkbGV3YXJlT2JqKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBtaWRkbGV3YXJlKGFjYywgeWFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgPyByZXN1bHQudGhlbihtaWRkbGV3YXJlT2JqID0+IE9iamVjdC5hc3NpZ24oYWNjLCBtaWRkbGV3YXJlT2JqKSlcbiAgICAgICAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oYWNjLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSwgYXJndik7XG59XG4iLCAiaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi9pcy1wcm9taXNlLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBtYXliZUFzeW5jUmVzdWx0KGdldFJlc3VsdCwgcmVzdWx0SGFuZGxlciwgZXJyb3JIYW5kbGVyID0gKGVycikgPT4ge1xuICAgIHRocm93IGVycjtcbn0pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpc0Z1bmN0aW9uKGdldFJlc3VsdCkgPyBnZXRSZXN1bHQoKSA6IGdldFJlc3VsdDtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShyZXN1bHQpXG4gICAgICAgICAgICA/IHJlc3VsdC50aGVuKChyZXN1bHQpID0+IHJlc3VsdEhhbmRsZXIocmVzdWx0KSlcbiAgICAgICAgICAgIDogcmVzdWx0SGFuZGxlcihyZXN1bHQpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBlcnJvckhhbmRsZXIoZXJyKTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdoaWNoTW9kdWxlKGV4cG9ydGVkKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1aXJlID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgZm9yIChsZXQgaSA9IDAsIGZpbGVzID0gT2JqZWN0LmtleXMocmVxdWlyZS5jYWNoZSksIG1vZDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1vZCA9IHJlcXVpcmUuY2FjaGVbZmlsZXNbaV1dO1xuICAgICAgICBpZiAobW9kLmV4cG9ydHMgPT09IGV4cG9ydGVkKVxuICAgICAgICAgICAgcmV0dXJuIG1vZDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCAiaW1wb3J0IHsgYXNzZXJ0Tm90U3RyaWN0RXF1YWwsIH0gZnJvbSAnLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuL3V0aWxzL2lzLXByb21pc2UuanMnO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21tYW5kTWlkZGxld2FyZUZhY3RvcnksIH0gZnJvbSAnLi9taWRkbGV3YXJlLmpzJztcbmltcG9ydCB7IHBhcnNlQ29tbWFuZCB9IGZyb20gJy4vcGFyc2UtY29tbWFuZC5qcyc7XG5pbXBvcnQgeyBpc1lhcmdzSW5zdGFuY2UsIH0gZnJvbSAnLi95YXJncy1mYWN0b3J5LmpzJztcbmltcG9ydCB7IG1heWJlQXN5bmNSZXN1bHQgfSBmcm9tICcuL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyc7XG5pbXBvcnQgd2hpY2hNb2R1bGUgZnJvbSAnLi91dGlscy93aGljaC1tb2R1bGUuanMnO1xuY29uc3QgREVGQVVMVF9NQVJLRVIgPSAvKF5cXCopfCheXFwkMCkvO1xuZXhwb3J0IGNsYXNzIENvbW1hbmRJbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3IodXNhZ2UsIHZhbGlkYXRpb24sIGdsb2JhbE1pZGRsZXdhcmUsIHNoaW0pIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlQ2FjaGUgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5hbGlhc01hcCA9IHt9O1xuICAgICAgICB0aGlzLmZyb3plbnMgPSBbXTtcbiAgICAgICAgdGhpcy5zaGltID0gc2hpbTtcbiAgICAgICAgdGhpcy51c2FnZSA9IHVzYWdlO1xuICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUgPSBnbG9iYWxNaWRkbGV3YXJlO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb24gPSB2YWxpZGF0aW9uO1xuICAgIH1cbiAgICBhZGREaXJlY3RvcnkoZGlyLCByZXEsIGNhbGxlckZpbGUsIG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5yZWN1cnNlICE9PSAnYm9vbGVhbicpXG4gICAgICAgICAgICBvcHRzLnJlY3Vyc2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdHMuZXh0ZW5zaW9ucykpXG4gICAgICAgICAgICBvcHRzLmV4dGVuc2lvbnMgPSBbJ2pzJ107XG4gICAgICAgIGNvbnN0IHBhcmVudFZpc2l0ID0gdHlwZW9mIG9wdHMudmlzaXQgPT09ICdmdW5jdGlvbicgPyBvcHRzLnZpc2l0IDogKG8pID0+IG87XG4gICAgICAgIG9wdHMudmlzaXQgPSAob2JqLCBqb2luZWQsIGZpbGVuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aXNpdGVkID0gcGFyZW50VmlzaXQob2JqLCBqb2luZWQsIGZpbGVuYW1lKTtcbiAgICAgICAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZUNhY2hlLmhhcyhqb2luZWQpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZUNhY2hlLmFkZChqb2luZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcih2aXNpdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2aXNpdGVkO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNoaW0ucmVxdWlyZURpcmVjdG9yeSh7IHJlcXVpcmU6IHJlcSwgZmlsZW5hbWU6IGNhbGxlckZpbGUgfSwgZGlyLCBvcHRzKTtcbiAgICB9XG4gICAgYWRkSGFuZGxlcihjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBjb21tYW5kTWlkZGxld2FyZSwgZGVwcmVjYXRlZCkge1xuICAgICAgICBsZXQgYWxpYXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBtaWRkbGV3YXJlcyA9IGNvbW1hbmRNaWRkbGV3YXJlRmFjdG9yeShjb21tYW5kTWlkZGxld2FyZSk7XG4gICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyIHx8ICgoKSA9PiB7IH0pO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbWQpKSB7XG4gICAgICAgICAgICBpZiAoaXNDb21tYW5kQW5kQWxpYXNlcyhjbWQpKSB7XG4gICAgICAgICAgICAgICAgW2NtZCwgLi4uYWxpYXNlc10gPSBjbWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2YgY21kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcihjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDb21tYW5kSGFuZGxlckRlZmluaXRpb24oY21kKSkge1xuICAgICAgICAgICAgbGV0IGNvbW1hbmQgPSBBcnJheS5pc0FycmF5KGNtZC5jb21tYW5kKSB8fCB0eXBlb2YgY21kLmNvbW1hbmQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBjbWQuY29tbWFuZFxuICAgICAgICAgICAgICAgIDogdGhpcy5tb2R1bGVOYW1lKGNtZCk7XG4gICAgICAgICAgICBpZiAoY21kLmFsaWFzZXMpXG4gICAgICAgICAgICAgICAgY29tbWFuZCA9IFtdLmNvbmNhdChjb21tYW5kKS5jb25jYXQoY21kLmFsaWFzZXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRIYW5kbGVyKGNvbW1hbmQsIHRoaXMuZXh0cmFjdERlc2MoY21kKSwgY21kLmJ1aWxkZXIsIGNtZC5oYW5kbGVyLCBjbWQubWlkZGxld2FyZXMsIGNtZC5kZXByZWNhdGVkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0NvbW1hbmRCdWlsZGVyRGVmaW5pdGlvbihidWlsZGVyKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRIYW5kbGVyKFtjbWRdLmNvbmNhdChhbGlhc2VzKSwgZGVzY3JpcHRpb24sIGJ1aWxkZXIuYnVpbGRlciwgYnVpbGRlci5oYW5kbGVyLCBidWlsZGVyLm1pZGRsZXdhcmVzLCBidWlsZGVyLmRlcHJlY2F0ZWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY21kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQ29tbWFuZCA9IHBhcnNlQ29tbWFuZChjbWQpO1xuICAgICAgICAgICAgYWxpYXNlcyA9IGFsaWFzZXMubWFwKGFsaWFzID0+IHBhcnNlQ29tbWFuZChhbGlhcykuY21kKTtcbiAgICAgICAgICAgIGxldCBpc0RlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFsaWFzZXMgPSBbcGFyc2VkQ29tbWFuZC5jbWRdLmNvbmNhdChhbGlhc2VzKS5maWx0ZXIoYyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKERFRkFVTFRfTUFSS0VSLnRlc3QoYykpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHBhcnNlZEFsaWFzZXMubGVuZ3RoID09PSAwICYmIGlzRGVmYXVsdClcbiAgICAgICAgICAgICAgICBwYXJzZWRBbGlhc2VzLnB1c2goJyQwJyk7XG4gICAgICAgICAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkQ29tbWFuZC5jbWQgPSBwYXJzZWRBbGlhc2VzWzBdO1xuICAgICAgICAgICAgICAgIGFsaWFzZXMgPSBwYXJzZWRBbGlhc2VzLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIGNtZCA9IGNtZC5yZXBsYWNlKERFRkFVTFRfTUFSS0VSLCBwYXJzZWRDb21tYW5kLmNtZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGlhc2VzLmZvckVhY2goYWxpYXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxpYXNNYXBbYWxpYXNdID0gcGFyc2VkQ29tbWFuZC5jbWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzYWdlLmNvbW1hbmQoY21kLCBkZXNjcmlwdGlvbiwgaXNEZWZhdWx0LCBhbGlhc2VzLCBkZXByZWNhdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbcGFyc2VkQ29tbWFuZC5jbWRdID0ge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsOiBjbWQsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgICBidWlsZGVyOiBidWlsZGVyIHx8IHt9LFxuICAgICAgICAgICAgICAgIG1pZGRsZXdhcmVzLFxuICAgICAgICAgICAgICAgIGRlcHJlY2F0ZWQsXG4gICAgICAgICAgICAgICAgZGVtYW5kZWQ6IHBhcnNlZENvbW1hbmQuZGVtYW5kZWQsXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHBhcnNlZENvbW1hbmQub3B0aW9uYWwsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGlzRGVmYXVsdClcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRDb21tYW5kID0gdGhpcy5oYW5kbGVyc1twYXJzZWRDb21tYW5kLmNtZF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q29tbWFuZEhhbmRsZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVycztcbiAgICB9XG4gICAgZ2V0Q29tbWFuZHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXJzKS5jb25jYXQoT2JqZWN0LmtleXModGhpcy5hbGlhc01hcCkpO1xuICAgIH1cbiAgICBoYXNEZWZhdWx0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5kZWZhdWx0Q29tbWFuZDtcbiAgICB9XG4gICAgcnVuQ29tbWFuZChjb21tYW5kLCB5YXJncywgcGFyc2VkLCBjb21tYW5kSW5kZXgsIGhlbHBPbmx5LCBoZWxwT3JWZXJzaW9uU2V0KSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRIYW5kbGVyID0gdGhpcy5oYW5kbGVyc1tjb21tYW5kXSB8fFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1t0aGlzLmFsaWFzTWFwW2NvbW1hbmRdXSB8fFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q29tbWFuZDtcbiAgICAgICAgY29uc3QgY3VycmVudENvbnRleHQgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbW1hbmRzID0gY3VycmVudENvbnRleHQuY29tbWFuZHMuc2xpY2UoKTtcbiAgICAgICAgY29uc3QgaXNEZWZhdWx0Q29tbWFuZCA9ICFjb21tYW5kO1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgY3VycmVudENvbnRleHQuY29tbWFuZHMucHVzaChjb21tYW5kKTtcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0LmZ1bGxDb21tYW5kcy5wdXNoKGNvbW1hbmRIYW5kbGVyLm9yaWdpbmFsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWlsZGVyUmVzdWx0ID0gdGhpcy5hcHBseUJ1aWxkZXJVcGRhdGVVc2FnZUFuZFBhcnNlKGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCB5YXJncywgcGFyc2VkLmFsaWFzZXMsIHBhcmVudENvbW1hbmRzLCBjb21tYW5kSW5kZXgsIGhlbHBPbmx5LCBoZWxwT3JWZXJzaW9uU2V0KTtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShidWlsZGVyUmVzdWx0KVxuICAgICAgICAgICAgPyBidWlsZGVyUmVzdWx0LnRoZW4ocmVzdWx0ID0+IHRoaXMuYXBwbHlNaWRkbGV3YXJlQW5kR2V0UmVzdWx0KGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCByZXN1bHQuaW5uZXJBcmd2LCBjdXJyZW50Q29udGV4dCwgaGVscE9ubHksIHJlc3VsdC5hbGlhc2VzLCB5YXJncykpXG4gICAgICAgICAgICA6IHRoaXMuYXBwbHlNaWRkbGV3YXJlQW5kR2V0UmVzdWx0KGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBidWlsZGVyUmVzdWx0LmlubmVyQXJndiwgY3VycmVudENvbnRleHQsIGhlbHBPbmx5LCBidWlsZGVyUmVzdWx0LmFsaWFzZXMsIHlhcmdzKTtcbiAgICB9XG4gICAgYXBwbHlCdWlsZGVyVXBkYXRlVXNhZ2VBbmRQYXJzZShpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgeWFyZ3MsIGFsaWFzZXMsIHBhcmVudENvbW1hbmRzLCBjb21tYW5kSW5kZXgsIGhlbHBPbmx5LCBoZWxwT3JWZXJzaW9uU2V0KSB7XG4gICAgICAgIGNvbnN0IGJ1aWxkZXIgPSBjb21tYW5kSGFuZGxlci5idWlsZGVyO1xuICAgICAgICBsZXQgaW5uZXJZYXJncyA9IHlhcmdzO1xuICAgICAgICBpZiAoaXNDb21tYW5kQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuZnJlZXplKCk7XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyT3V0cHV0ID0gYnVpbGRlcih5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5yZXNldChhbGlhc2VzKSwgaGVscE9yVmVyc2lvblNldCk7XG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlKGJ1aWxkZXJPdXRwdXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJPdXRwdXQudGhlbihvdXRwdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcllhcmdzID0gaXNZYXJnc0luc3RhbmNlKG91dHB1dCkgPyBvdXRwdXQgOiB5YXJncztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VBbmRVcGRhdGVVc2FnZShpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgaW5uZXJZYXJncywgcGFyZW50Q29tbWFuZHMsIGNvbW1hbmRJbmRleCwgaGVscE9ubHkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQ29tbWFuZEJ1aWxkZXJPcHRpb25EZWZpbml0aW9ucyhidWlsZGVyKSkge1xuICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmZyZWV6ZSgpO1xuICAgICAgICAgICAgaW5uZXJZYXJncyA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLnJlc2V0KGFsaWFzZXMpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tbWFuZEhhbmRsZXIuYnVpbGRlcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyWWFyZ3Mub3B0aW9uKGtleSwgYnVpbGRlcltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQW5kVXBkYXRlVXNhZ2UoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGlubmVyWWFyZ3MsIHBhcmVudENvbW1hbmRzLCBjb21tYW5kSW5kZXgsIGhlbHBPbmx5KTtcbiAgICB9XG4gICAgcGFyc2VBbmRVcGRhdGVVc2FnZShpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgaW5uZXJZYXJncywgcGFyZW50Q29tbWFuZHMsIGNvbW1hbmRJbmRleCwgaGVscE9ubHkpIHtcbiAgICAgICAgaWYgKGlzRGVmYXVsdENvbW1hbmQpXG4gICAgICAgICAgICBpbm5lcllhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlSW5zdGFuY2UoKS51bmZyZWV6ZSh0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlVXNhZ2UoaW5uZXJZYXJncykpIHtcbiAgICAgICAgICAgIGlubmVyWWFyZ3NcbiAgICAgICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgICAgICAuZ2V0VXNhZ2VJbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgLnVzYWdlKHRoaXMudXNhZ2VGcm9tUGFyZW50Q29tbWFuZHNDb21tYW5kSGFuZGxlcihwYXJlbnRDb21tYW5kcywgY29tbWFuZEhhbmRsZXIpLCBjb21tYW5kSGFuZGxlci5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5uZXJBcmd2ID0gaW5uZXJZYXJnc1xuICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAucnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHMobnVsbCwgdW5kZWZpbmVkLCB0cnVlLCBjb21tYW5kSW5kZXgsIGhlbHBPbmx5KTtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShpbm5lckFyZ3YpXG4gICAgICAgICAgICA/IGlubmVyQXJndi50aGVuKGFyZ3YgPT4gKHtcbiAgICAgICAgICAgICAgICBhbGlhc2VzOiBpbm5lcllhcmdzLnBhcnNlZC5hbGlhc2VzLFxuICAgICAgICAgICAgICAgIGlubmVyQXJndjogYXJndixcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgYWxpYXNlczogaW5uZXJZYXJncy5wYXJzZWQuYWxpYXNlcyxcbiAgICAgICAgICAgICAgICBpbm5lckFyZ3Y6IGlubmVyQXJndixcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIHNob3VsZFVwZGF0ZVVzYWdlKHlhcmdzKSB7XG4gICAgICAgIHJldHVybiAoIXlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlSW5zdGFuY2UoKS5nZXRVc2FnZURpc2FibGVkKCkgJiZcbiAgICAgICAgICAgIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlSW5zdGFuY2UoKS5nZXRVc2FnZSgpLmxlbmd0aCA9PT0gMCk7XG4gICAgfVxuICAgIHVzYWdlRnJvbVBhcmVudENvbW1hbmRzQ29tbWFuZEhhbmRsZXIocGFyZW50Q29tbWFuZHMsIGNvbW1hbmRIYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGMgPSBERUZBVUxUX01BUktFUi50ZXN0KGNvbW1hbmRIYW5kbGVyLm9yaWdpbmFsKVxuICAgICAgICAgICAgPyBjb21tYW5kSGFuZGxlci5vcmlnaW5hbC5yZXBsYWNlKERFRkFVTFRfTUFSS0VSLCAnJykudHJpbSgpXG4gICAgICAgICAgICA6IGNvbW1hbmRIYW5kbGVyLm9yaWdpbmFsO1xuICAgICAgICBjb25zdCBwYyA9IHBhcmVudENvbW1hbmRzLmZpbHRlcihjID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhREVGQVVMVF9NQVJLRVIudGVzdChjKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBjLnB1c2goYyk7XG4gICAgICAgIHJldHVybiBgJDAgJHtwYy5qb2luKCcgJyl9YDtcbiAgICB9XG4gICAgaGFuZGxlVmFsaWRhdGlvbkFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgaW5uZXJBcmd2LCBjdXJyZW50Q29udGV4dCwgYWxpYXNlcywgeWFyZ3MsIG1pZGRsZXdhcmVzLCBwb3NpdGlvbmFsTWFwKSB7XG4gICAgICAgIGlmICgheWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0SGFzT3V0cHV0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB5YXJnc1xuICAgICAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgICAgIC5ydW5WYWxpZGF0aW9uKGFsaWFzZXMsIHBvc2l0aW9uYWxNYXAsIHlhcmdzLnBhcnNlZC5lcnJvciwgaXNEZWZhdWx0Q29tbWFuZCk7XG4gICAgICAgICAgICBpbm5lckFyZ3YgPSBtYXliZUFzeW5jUmVzdWx0KGlubmVyQXJndiwgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kSGFuZGxlci5oYW5kbGVyICYmICF5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRIYXNPdXRwdXQoKSkge1xuICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuc2V0SGFzT3V0cHV0KCk7XG4gICAgICAgICAgICBjb25zdCBwb3B1bGF0ZURvdWJsZURhc2ggPSAhIXlhcmdzLmdldE9wdGlvbnMoKS5jb25maWd1cmF0aW9uWydwb3B1bGF0ZS0tJ107XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgICAgIC5wb3N0UHJvY2Vzcyhpbm5lckFyZ3YsIHBvcHVsYXRlRG91YmxlRGFzaCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIGlubmVyQXJndiA9IGFwcGx5TWlkZGxld2FyZShpbm5lckFyZ3YsIHlhcmdzLCBtaWRkbGV3YXJlcywgZmFsc2UpO1xuICAgICAgICAgICAgaW5uZXJBcmd2ID0gbWF5YmVBc3luY1Jlc3VsdChpbm5lckFyZ3YsIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlclJlc3VsdCA9IGNvbW1hbmRIYW5kbGVyLmhhbmRsZXIocmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNQcm9taXNlKGhhbmRsZXJSZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgID8gaGFuZGxlclJlc3VsdC50aGVuKCgpID0+IHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgOiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghaXNEZWZhdWx0Q29tbWFuZCkge1xuICAgICAgICAgICAgICAgIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlSW5zdGFuY2UoKS5jYWNoZUhlbHBNZXNzYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlKGlubmVyQXJndikgJiZcbiAgICAgICAgICAgICAgICAheWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuaGFzUGFyc2VDYWxsYmFjaygpKSB7XG4gICAgICAgICAgICAgICAgaW5uZXJBcmd2LmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlSW5zdGFuY2UoKS5mYWlsKG51bGwsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0RlZmF1bHRDb21tYW5kKSB7XG4gICAgICAgICAgICBjdXJyZW50Q29udGV4dC5jb21tYW5kcy5wb3AoKTtcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0LmZ1bGxDb21tYW5kcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5uZXJBcmd2O1xuICAgIH1cbiAgICBhcHBseU1pZGRsZXdhcmVBbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGlubmVyQXJndiwgY3VycmVudENvbnRleHQsIGhlbHBPbmx5LCBhbGlhc2VzLCB5YXJncykge1xuICAgICAgICBsZXQgcG9zaXRpb25hbE1hcCA9IHt9O1xuICAgICAgICBpZiAoaGVscE9ubHkpXG4gICAgICAgICAgICByZXR1cm4gaW5uZXJBcmd2O1xuICAgICAgICBpZiAoIXlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldEhhc091dHB1dCgpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbmFsTWFwID0gdGhpcy5wb3B1bGF0ZVBvc2l0aW9uYWxzKGNvbW1hbmRIYW5kbGVyLCBpbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCB5YXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWlkZGxld2FyZXMgPSB0aGlzLmdsb2JhbE1pZGRsZXdhcmVcbiAgICAgICAgICAgIC5nZXRNaWRkbGV3YXJlKClcbiAgICAgICAgICAgIC5zbGljZSgwKVxuICAgICAgICAgICAgLmNvbmNhdChjb21tYW5kSGFuZGxlci5taWRkbGV3YXJlcyk7XG4gICAgICAgIGNvbnN0IG1heWJlUHJvbWlzZUFyZ3YgPSBhcHBseU1pZGRsZXdhcmUoaW5uZXJBcmd2LCB5YXJncywgbWlkZGxld2FyZXMsIHRydWUpO1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKG1heWJlUHJvbWlzZUFyZ3YpXG4gICAgICAgICAgICA/IG1heWJlUHJvbWlzZUFyZ3YudGhlbihyZXNvbHZlZElubmVyQXJndiA9PiB0aGlzLmhhbmRsZVZhbGlkYXRpb25BbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIHJlc29sdmVkSW5uZXJBcmd2LCBjdXJyZW50Q29udGV4dCwgYWxpYXNlcywgeWFyZ3MsIG1pZGRsZXdhcmVzLCBwb3NpdGlvbmFsTWFwKSlcbiAgICAgICAgICAgIDogdGhpcy5oYW5kbGVWYWxpZGF0aW9uQW5kR2V0UmVzdWx0KGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBtYXliZVByb21pc2VBcmd2LCBjdXJyZW50Q29udGV4dCwgYWxpYXNlcywgeWFyZ3MsIG1pZGRsZXdhcmVzLCBwb3NpdGlvbmFsTWFwKTtcbiAgICB9XG4gICAgcG9wdWxhdGVQb3NpdGlvbmFscyhjb21tYW5kSGFuZGxlciwgYXJndiwgY29udGV4dCwgeWFyZ3MpIHtcbiAgICAgICAgYXJndi5fID0gYXJndi5fLnNsaWNlKGNvbnRleHQuY29tbWFuZHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgZGVtYW5kZWQgPSBjb21tYW5kSGFuZGxlci5kZW1hbmRlZC5zbGljZSgwKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWwgPSBjb21tYW5kSGFuZGxlci5vcHRpb25hbC5zbGljZSgwKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25hbE1hcCA9IHt9O1xuICAgICAgICB0aGlzLnZhbGlkYXRpb24ucG9zaXRpb25hbENvdW50KGRlbWFuZGVkLmxlbmd0aCwgYXJndi5fLmxlbmd0aCk7XG4gICAgICAgIHdoaWxlIChkZW1hbmRlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbWFuZCA9IGRlbWFuZGVkLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlUG9zaXRpb25hbChkZW1hbmQsIGFyZ3YsIHBvc2l0aW9uYWxNYXApO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChvcHRpb25hbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heWJlID0gb3B0aW9uYWwuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVQb3NpdGlvbmFsKG1heWJlLCBhcmd2LCBwb3NpdGlvbmFsTWFwKTtcbiAgICAgICAgfVxuICAgICAgICBhcmd2Ll8gPSBjb250ZXh0LmNvbW1hbmRzLmNvbmNhdChhcmd2Ll8ubWFwKGEgPT4gJycgKyBhKSk7XG4gICAgICAgIHRoaXMucG9zdFByb2Nlc3NQb3NpdGlvbmFscyhhcmd2LCBwb3NpdGlvbmFsTWFwLCB0aGlzLmNtZFRvUGFyc2VPcHRpb25zKGNvbW1hbmRIYW5kbGVyLm9yaWdpbmFsKSwgeWFyZ3MpO1xuICAgICAgICByZXR1cm4gcG9zaXRpb25hbE1hcDtcbiAgICB9XG4gICAgcG9wdWxhdGVQb3NpdGlvbmFsKHBvc2l0aW9uYWwsIGFyZ3YsIHBvc2l0aW9uYWxNYXApIHtcbiAgICAgICAgY29uc3QgY21kID0gcG9zaXRpb25hbC5jbWRbMF07XG4gICAgICAgIGlmIChwb3NpdGlvbmFsLnZhcmlhZGljKSB7XG4gICAgICAgICAgICBwb3NpdGlvbmFsTWFwW2NtZF0gPSBhcmd2Ll8uc3BsaWNlKDApLm1hcChTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFyZ3YuXy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcG9zaXRpb25hbE1hcFtjbWRdID0gW1N0cmluZyhhcmd2Ll8uc2hpZnQoKSldO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNtZFRvUGFyc2VPcHRpb25zKGNtZFN0cmluZykge1xuICAgICAgICBjb25zdCBwYXJzZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhcnJheTogW10sXG4gICAgICAgICAgICBkZWZhdWx0OiB7fSxcbiAgICAgICAgICAgIGFsaWFzOiB7fSxcbiAgICAgICAgICAgIGRlbWFuZDoge30sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlQ29tbWFuZChjbWRTdHJpbmcpO1xuICAgICAgICBwYXJzZWQuZGVtYW5kZWQuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtjbWQsIC4uLmFsaWFzZXNdID0gZC5jbWQ7XG4gICAgICAgICAgICBpZiAoZC52YXJpYWRpYykge1xuICAgICAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5hcnJheS5wdXNoKGNtZCk7XG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb25zLmRlZmF1bHRbY21kXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VPcHRpb25zLmFsaWFzW2NtZF0gPSBhbGlhc2VzO1xuICAgICAgICAgICAgcGFyc2VPcHRpb25zLmRlbWFuZFtjbWRdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcnNlZC5vcHRpb25hbC5mb3JFYWNoKG8gPT4ge1xuICAgICAgICAgICAgY29uc3QgW2NtZCwgLi4uYWxpYXNlc10gPSBvLmNtZDtcbiAgICAgICAgICAgIGlmIChvLnZhcmlhZGljKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb25zLmFycmF5LnB1c2goY21kKTtcbiAgICAgICAgICAgICAgICBwYXJzZU9wdGlvbnMuZGVmYXVsdFtjbWRdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZU9wdGlvbnMuYWxpYXNbY21kXSA9IGFsaWFzZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyc2VPcHRpb25zO1xuICAgIH1cbiAgICBwb3N0UHJvY2Vzc1Bvc2l0aW9uYWxzKGFyZ3YsIHBvc2l0aW9uYWxNYXAsIHBhcnNlT3B0aW9ucywgeWFyZ3MpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHlhcmdzLmdldE9wdGlvbnMoKSk7XG4gICAgICAgIG9wdGlvbnMuZGVmYXVsdCA9IE9iamVjdC5hc3NpZ24ocGFyc2VPcHRpb25zLmRlZmF1bHQsIG9wdGlvbnMuZGVmYXVsdCk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcnNlT3B0aW9ucy5hbGlhcykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYWxpYXNba2V5XSA9IChvcHRpb25zLmFsaWFzW2tleV0gfHwgW10pLmNvbmNhdChwYXJzZU9wdGlvbnMuYWxpYXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5hcnJheSA9IG9wdGlvbnMuYXJyYXkuY29uY2F0KHBhcnNlT3B0aW9ucy5hcnJheSk7XG4gICAgICAgIG9wdGlvbnMuY29uZmlnID0ge307XG4gICAgICAgIGNvbnN0IHVucGFyc2VkID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHBvc2l0aW9uYWxNYXApLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9uYWxNYXBba2V5XS5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbmZpZ3VyYXRpb25bJ3Vua25vd24tb3B0aW9ucy1hcy1hcmdzJ10pXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMua2V5W2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHVucGFyc2VkLnB1c2goYC0tJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgdW5wYXJzZWQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdW5wYXJzZWQubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLmNvbmZpZ3VyYXRpb24sIHtcbiAgICAgICAgICAgICdwb3B1bGF0ZS0tJzogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnNoaW0uUGFyc2VyLmRldGFpbGVkKHVucGFyc2VkLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWcsXG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHBhcnNlZC5lcnJvcikge1xuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgICAgICAuZ2V0VXNhZ2VJbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgLmZhaWwocGFyc2VkLmVycm9yLm1lc3NhZ2UsIHBhcnNlZC5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbmFsS2V5cyA9IE9iamVjdC5rZXlzKHBvc2l0aW9uYWxNYXApO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocG9zaXRpb25hbE1hcCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uYWxLZXlzLnB1c2goLi4ucGFyc2VkLmFsaWFzZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcnNlZC5hcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uYWxLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwb3NpdGlvbmFsTWFwW2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbmFsTWFwW2tleV0gPSBwYXJzZWQuYXJndltrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNJbkNvbmZpZ3MoeWFyZ3MsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmlzRGVmYXVsdGVkKHlhcmdzLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndiwga2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcnNlZC5hcmd2LCBrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheShhcmd2W2tleV0pIHx8IEFycmF5LmlzQXJyYXkocGFyc2VkLmFyZ3Zba2V5XSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2W2tleV0gPSBbXS5jb25jYXQoYXJndltrZXldLCBwYXJzZWQuYXJndltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3Zba2V5XSA9IHBhcnNlZC5hcmd2W2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0RlZmF1bHRlZCh5YXJncywga2V5KSB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdDogZGVmYXVsdHMgfSA9IHlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVmYXVsdHMsIGtleSkgfHxcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0cywgdGhpcy5zaGltLlBhcnNlci5jYW1lbENhc2Uoa2V5KSkpO1xuICAgIH1cbiAgICBpc0luQ29uZmlncyh5YXJncywga2V5KSB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnT2JqZWN0cyB9ID0geWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gKGNvbmZpZ09iamVjdHMuc29tZShjID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLCBrZXkpKSB8fFxuICAgICAgICAgICAgY29uZmlnT2JqZWN0cy5zb21lKGMgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsIHRoaXMuc2hpbS5QYXJzZXIuY2FtZWxDYXNlKGtleSkpKSk7XG4gICAgfVxuICAgIHJ1bkRlZmF1bHRCdWlsZGVyT24oeWFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRDb21tYW5kKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVVc2FnZSh5YXJncykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmRTdHJpbmcgPSBERUZBVUxUX01BUktFUi50ZXN0KHRoaXMuZGVmYXVsdENvbW1hbmQub3JpZ2luYWwpXG4gICAgICAgICAgICAgICAgPyB0aGlzLmRlZmF1bHRDb21tYW5kLm9yaWdpbmFsXG4gICAgICAgICAgICAgICAgOiB0aGlzLmRlZmF1bHRDb21tYW5kLm9yaWdpbmFsLnJlcGxhY2UoL15bXltcXF08Pl0qLywgJyQwICcpO1xuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgICAgICAuZ2V0VXNhZ2VJbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgLnVzYWdlKGNvbW1hbmRTdHJpbmcsIHRoaXMuZGVmYXVsdENvbW1hbmQuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1aWxkZXIgPSB0aGlzLmRlZmF1bHRDb21tYW5kLmJ1aWxkZXI7XG4gICAgICAgIGlmIChpc0NvbW1hbmRCdWlsZGVyQ2FsbGJhY2soYnVpbGRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBidWlsZGVyKHlhcmdzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNDb21tYW5kQnVpbGRlckRlZmluaXRpb24oYnVpbGRlcikpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJ1aWxkZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICB5YXJncy5vcHRpb24oa2V5LCBidWlsZGVyW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbW9kdWxlTmFtZShvYmopIHtcbiAgICAgICAgY29uc3QgbW9kID0gd2hpY2hNb2R1bGUob2JqKTtcbiAgICAgICAgaWYgKCFtb2QpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbW1hbmQgbmFtZSBnaXZlbiBmb3IgbW9kdWxlOiAke3RoaXMuc2hpbS5pbnNwZWN0KG9iail9YCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRGcm9tRmlsZW5hbWUobW9kLmZpbGVuYW1lKTtcbiAgICB9XG4gICAgY29tbWFuZEZyb21GaWxlbmFtZShmaWxlbmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGltLnBhdGguYmFzZW5hbWUoZmlsZW5hbWUsIHRoaXMuc2hpbS5wYXRoLmV4dG5hbWUoZmlsZW5hbWUpKTtcbiAgICB9XG4gICAgZXh0cmFjdERlc2MoeyBkZXNjcmliZSwgZGVzY3JpcHRpb24sIGRlc2MgfSkge1xuICAgICAgICBmb3IgKGNvbnN0IHRlc3Qgb2YgW2Rlc2NyaWJlLCBkZXNjcmlwdGlvbiwgZGVzY10pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycgfHwgdGVzdCA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbCh0ZXN0LCB0cnVlLCB0aGlzLnNoaW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnJlZXplKCkge1xuICAgICAgICB0aGlzLmZyb3plbnMucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyczogdGhpcy5oYW5kbGVycyxcbiAgICAgICAgICAgIGFsaWFzTWFwOiB0aGlzLmFsaWFzTWFwLFxuICAgICAgICAgICAgZGVmYXVsdENvbW1hbmQ6IHRoaXMuZGVmYXVsdENvbW1hbmQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bmZyZWV6ZSgpIHtcbiAgICAgICAgY29uc3QgZnJvemVuID0gdGhpcy5mcm96ZW5zLnBvcCgpO1xuICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChmcm96ZW4sIHVuZGVmaW5lZCwgdGhpcy5zaGltKTtcbiAgICAgICAgKHtcbiAgICAgICAgICAgIGhhbmRsZXJzOiB0aGlzLmhhbmRsZXJzLFxuICAgICAgICAgICAgYWxpYXNNYXA6IHRoaXMuYWxpYXNNYXAsXG4gICAgICAgICAgICBkZWZhdWx0Q29tbWFuZDogdGhpcy5kZWZhdWx0Q29tbWFuZCxcbiAgICAgICAgfSA9IGZyb3plbik7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0ge307XG4gICAgICAgIHRoaXMuYWxpYXNNYXAgPSB7fTtcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29tbWFuZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZXF1aXJlQ2FjaGUgPSBuZXcgU2V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kKHVzYWdlLCB2YWxpZGF0aW9uLCBnbG9iYWxNaWRkbGV3YXJlLCBzaGltKSB7XG4gICAgcmV0dXJuIG5ldyBDb21tYW5kSW5zdGFuY2UodXNhZ2UsIHZhbGlkYXRpb24sIGdsb2JhbE1pZGRsZXdhcmUsIHNoaW0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZEJ1aWxkZXJEZWZpbml0aW9uKGJ1aWxkZXIpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBidWlsZGVyID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAhIWJ1aWxkZXIuYnVpbGRlciAmJlxuICAgICAgICB0eXBlb2YgYnVpbGRlci5oYW5kbGVyID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIGlzQ29tbWFuZEFuZEFsaWFzZXMoY21kKSB7XG4gICAgcmV0dXJuIGNtZC5ldmVyeShjID0+IHR5cGVvZiBjID09PSAnc3RyaW5nJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDb21tYW5kQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGJ1aWxkZXIgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBpc0NvbW1hbmRCdWlsZGVyT3B0aW9uRGVmaW5pdGlvbnMoYnVpbGRlcikge1xuICAgIHJldHVybiB0eXBlb2YgYnVpbGRlciA9PT0gJ29iamVjdCc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDb21tYW5kSGFuZGxlckRlZmluaXRpb24oY21kKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjbWQgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGNtZCk7XG59XG4iLCAiaW1wb3J0IHsgb2JqZWN0S2V5cyB9IGZyb20gJy4uL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBvYmpGaWx0ZXIob3JpZ2luYWwgPSB7fSwgZmlsdGVyID0gKCkgPT4gdHJ1ZSkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIG9iamVjdEtleXMob3JpZ2luYWwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGZpbHRlcihrZXksIG9yaWdpbmFsW2tleV0pKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IG9yaWdpbmFsW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEJsb2NraW5nKGJsb2NraW5nKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuICAgIFtwcm9jZXNzLnN0ZG91dCwgcHJvY2Vzcy5zdGRlcnJdLmZvckVhY2goX3N0cmVhbSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IF9zdHJlYW07XG4gICAgICAgIGlmIChzdHJlYW0uX2hhbmRsZSAmJlxuICAgICAgICAgICAgc3RyZWFtLmlzVFRZICYmXG4gICAgICAgICAgICB0eXBlb2Ygc3RyZWFtLl9oYW5kbGUuc2V0QmxvY2tpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0cmVhbS5faGFuZGxlLnNldEJsb2NraW5nKGJsb2NraW5nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwgImltcG9ydCB7IG9iakZpbHRlciB9IGZyb20gJy4vdXRpbHMvb2JqLWZpbHRlci5qcyc7XG5pbXBvcnQgeyBZRXJyb3IgfSBmcm9tICcuL3llcnJvci5qcyc7XG5pbXBvcnQgc2V0QmxvY2tpbmcgZnJvbSAnLi91dGlscy9zZXQtYmxvY2tpbmcuanMnO1xuZnVuY3Rpb24gaXNCb29sZWFuKGZhaWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIGZhaWwgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2FnZSh5YXJncywgc2hpbSkge1xuICAgIGNvbnN0IF9fID0gc2hpbS55MThuLl9fO1xuICAgIGNvbnN0IHNlbGYgPSB7fTtcbiAgICBjb25zdCBmYWlscyA9IFtdO1xuICAgIHNlbGYuZmFpbEZuID0gZnVuY3Rpb24gZmFpbEZuKGYpIHtcbiAgICAgICAgZmFpbHMucHVzaChmKTtcbiAgICB9O1xuICAgIGxldCBmYWlsTWVzc2FnZSA9IG51bGw7XG4gICAgbGV0IGdsb2JhbEZhaWxNZXNzYWdlID0gbnVsbDtcbiAgICBsZXQgc2hvd0hlbHBPbkZhaWwgPSB0cnVlO1xuICAgIHNlbGYuc2hvd0hlbHBPbkZhaWwgPSBmdW5jdGlvbiBzaG93SGVscE9uRmFpbEZuKGFyZzEgPSB0cnVlLCBhcmcyKSB7XG4gICAgICAgIGNvbnN0IFtlbmFibGVkLCBtZXNzYWdlXSA9IHR5cGVvZiBhcmcxID09PSAnc3RyaW5nJyA/IFt0cnVlLCBhcmcxXSA6IFthcmcxLCBhcmcyXTtcbiAgICAgICAgaWYgKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmlzR2xvYmFsQ29udGV4dCgpKSB7XG4gICAgICAgICAgICBnbG9iYWxGYWlsTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZmFpbE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICBzaG93SGVscE9uRmFpbCA9IGVuYWJsZWQ7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gICAgbGV0IGZhaWx1cmVPdXRwdXQgPSBmYWxzZTtcbiAgICBzZWxmLmZhaWwgPSBmdW5jdGlvbiBmYWlsKG1zZywgZXJyKSB7XG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldExvZ2dlckluc3RhbmNlKCk7XG4gICAgICAgIGlmIChmYWlscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBmYWlscy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZhaWwgPSBmYWlsc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNCb29sZWFuKGZhaWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1zZylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmYWlsKG1zZywgZXJyLCBzZWxmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoeWFyZ3MuZ2V0RXhpdFByb2Nlc3MoKSlcbiAgICAgICAgICAgICAgICBzZXRCbG9ja2luZyh0cnVlKTtcbiAgICAgICAgICAgIGlmICghZmFpbHVyZU91dHB1dCkge1xuICAgICAgICAgICAgICAgIGZhaWx1cmVPdXRwdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChzaG93SGVscE9uRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICB5YXJncy5zaG93SGVscCgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cgfHwgZXJyKVxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IobXNnIHx8IGVycik7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2xvYmFsT3JDb21tYW5kRmFpbE1lc3NhZ2UgPSBmYWlsTWVzc2FnZSB8fCBnbG9iYWxGYWlsTWVzc2FnZTtcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsT3JDb21tYW5kRmFpbE1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZyB8fCBlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJycpO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZ2xvYmFsT3JDb21tYW5kRmFpbE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVyciA9IGVyciB8fCBuZXcgWUVycm9yKG1zZyk7XG4gICAgICAgICAgICBpZiAoeWFyZ3MuZ2V0RXhpdFByb2Nlc3MoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5YXJncy5leGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuaGFzUGFyc2VDYWxsYmFjaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlhcmdzLmV4aXQoMSwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IHVzYWdlcyA9IFtdO1xuICAgIGxldCB1c2FnZURpc2FibGVkID0gZmFsc2U7XG4gICAgc2VsZi51c2FnZSA9IChtc2csIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGlmIChtc2cgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHVzYWdlRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdXNhZ2VzID0gW107XG4gICAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgfVxuICAgICAgICB1c2FnZURpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHVzYWdlcy5wdXNoKFttc2csIGRlc2NyaXB0aW9uIHx8ICcnXSk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gICAgc2VsZi5nZXRVc2FnZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzYWdlcztcbiAgICB9O1xuICAgIHNlbGYuZ2V0VXNhZ2VEaXNhYmxlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzYWdlRGlzYWJsZWQ7XG4gICAgfTtcbiAgICBzZWxmLmdldFBvc2l0aW9uYWxHcm91cE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfXygnUG9zaXRpb25hbHM6Jyk7XG4gICAgfTtcbiAgICBsZXQgZXhhbXBsZXMgPSBbXTtcbiAgICBzZWxmLmV4YW1wbGUgPSAoY21kLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBleGFtcGxlcy5wdXNoKFtjbWQsIGRlc2NyaXB0aW9uIHx8ICcnXSk7XG4gICAgfTtcbiAgICBsZXQgY29tbWFuZHMgPSBbXTtcbiAgICBzZWxmLmNvbW1hbmQgPSBmdW5jdGlvbiBjb21tYW5kKGNtZCwgZGVzY3JpcHRpb24sIGlzRGVmYXVsdCwgYWxpYXNlcywgZGVwcmVjYXRlZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMubWFwKGNtZEFycmF5ID0+IHtcbiAgICAgICAgICAgICAgICBjbWRBcnJheVsyXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbWRBcnJheTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbW1hbmRzLnB1c2goW2NtZCwgZGVzY3JpcHRpb24gfHwgJycsIGlzRGVmYXVsdCwgYWxpYXNlcywgZGVwcmVjYXRlZF0pO1xuICAgIH07XG4gICAgc2VsZi5nZXRDb21tYW5kcyA9ICgpID0+IGNvbW1hbmRzO1xuICAgIGxldCBkZXNjcmlwdGlvbnMgPSB7fTtcbiAgICBzZWxmLmRlc2NyaWJlID0gZnVuY3Rpb24gZGVzY3JpYmUoa2V5T3JLZXlzLCBkZXNjKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleU9yS2V5cykpIHtcbiAgICAgICAgICAgIGtleU9yS2V5cy5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZGVzY3JpYmUoaywgZGVzYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Yga2V5T3JLZXlzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoa2V5T3JLZXlzKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZGVzY3JpYmUoaywga2V5T3JLZXlzW2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25zW2tleU9yS2V5c10gPSBkZXNjO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLmdldERlc2NyaXB0aW9ucyA9ICgpID0+IGRlc2NyaXB0aW9ucztcbiAgICBsZXQgZXBpbG9ncyA9IFtdO1xuICAgIHNlbGYuZXBpbG9nID0gbXNnID0+IHtcbiAgICAgICAgZXBpbG9ncy5wdXNoKG1zZyk7XG4gICAgfTtcbiAgICBsZXQgd3JhcFNldCA9IGZhbHNlO1xuICAgIGxldCB3cmFwO1xuICAgIHNlbGYud3JhcCA9IGNvbHMgPT4ge1xuICAgICAgICB3cmFwU2V0ID0gdHJ1ZTtcbiAgICAgICAgd3JhcCA9IGNvbHM7XG4gICAgfTtcbiAgICBzZWxmLmdldFdyYXAgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzaGltLmdldEVudignWUFSR1NfRElTQUJMRV9XUkFQJykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghd3JhcFNldCkge1xuICAgICAgICAgICAgd3JhcCA9IHdpbmRvd1dpZHRoKCk7XG4gICAgICAgICAgICB3cmFwU2V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3JhcDtcbiAgICB9O1xuICAgIGNvbnN0IGRlZmVyWTE4bkxvb2t1cFByZWZpeCA9ICdfX3lhcmdzU3RyaW5nX186JztcbiAgICBzZWxmLmRlZmVyWTE4bkxvb2t1cCA9IHN0ciA9PiBkZWZlclkxOG5Mb29rdXBQcmVmaXggKyBzdHI7XG4gICAgc2VsZi5oZWxwID0gZnVuY3Rpb24gaGVscCgpIHtcbiAgICAgICAgaWYgKGNhY2hlZEhlbHBNZXNzYWdlKVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEhlbHBNZXNzYWdlO1xuICAgICAgICBub3JtYWxpemVBbGlhc2VzKCk7XG4gICAgICAgIGNvbnN0IGJhc2UkMCA9IHlhcmdzLmN1c3RvbVNjcmlwdE5hbWVcbiAgICAgICAgICAgID8geWFyZ3MuJDBcbiAgICAgICAgICAgIDogc2hpbS5wYXRoLmJhc2VuYW1lKHlhcmdzLiQwKTtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRPcHRpb25zID0geWFyZ3MuZ2V0RGVtYW5kZWRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGRlbWFuZGVkQ29tbWFuZHMgPSB5YXJncy5nZXREZW1hbmRlZENvbW1hbmRzKCk7XG4gICAgICAgIGNvbnN0IGRlcHJlY2F0ZWRPcHRpb25zID0geWFyZ3MuZ2V0RGVwcmVjYXRlZE9wdGlvbnMoKTtcbiAgICAgICAgY29uc3QgZ3JvdXBzID0geWFyZ3MuZ2V0R3JvdXBzKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIGxldCBrZXlzID0gW107XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3Qua2V5cyhkZXNjcmlwdGlvbnMpKTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5rZXlzKGRlbWFuZGVkT3B0aW9ucykpO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmtleXMoZGVtYW5kZWRDb21tYW5kcykpO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmtleXMob3B0aW9ucy5kZWZhdWx0KSk7XG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihmaWx0ZXJIaWRkZW5PcHRpb25zKTtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ18nKVxuICAgICAgICAgICAgICAgIGFjY1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KSk7XG4gICAgICAgIGNvbnN0IHRoZVdyYXAgPSBzZWxmLmdldFdyYXAoKTtcbiAgICAgICAgY29uc3QgdWkgPSBzaGltLmNsaXVpKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGVXcmFwLFxuICAgICAgICAgICAgd3JhcDogISF0aGVXcmFwLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF1c2FnZURpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAodXNhZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHVzYWdlcy5mb3JFYWNoKHVzYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdWkuZGl2KHsgdGV4dDogYCR7dXNhZ2VbMF0ucmVwbGFjZSgvXFwkMC9nLCBiYXNlJDApfWAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2FnZVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdWkuZGl2KHsgdGV4dDogYCR7dXNhZ2VbMV19YCwgcGFkZGluZzogWzEsIDAsIDAsIDBdIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdWkuZGl2KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGRlbWFuZGVkQ29tbWFuZHMuXykge1xuICAgICAgICAgICAgICAgICAgICB1ID0gYCR7YmFzZSQwfSA8JHtfXygnY29tbWFuZCcpfT5cXG5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdSA9IGAke2Jhc2UkMH0gWyR7X18oJ2NvbW1hbmQnKX1dXFxuYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWkuZGl2KGAke3V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmRzLmxlbmd0aCA+IDEgfHwgKGNvbW1hbmRzLmxlbmd0aCA9PT0gMSAmJiAhY29tbWFuZHNbMF1bMl0pKSB7XG4gICAgICAgICAgICB1aS5kaXYoX18oJ0NvbW1hbmRzOicpKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRDb21tYW5kcyA9IGNvbnRleHQuY29tbWFuZHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBgJHtjb250ZXh0LmNvbW1hbmRzLmpvaW4oJyAnKX0gYFxuICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICBpZiAoeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0UGFyc2VyQ29uZmlndXJhdGlvbigpWydzb3J0LWNvbW1hbmRzJ10gPT09XG4gICAgICAgICAgICAgICAgdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMuc29ydCgoYSwgYikgPT4gYVswXS5sb2NhbGVDb21wYXJlKGJbMF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IGJhc2UkMCA/IGAke2Jhc2UkMH0gYCA6ICcnO1xuICAgICAgICAgICAgY29tbWFuZHMuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kU3RyaW5nID0gYCR7cHJlZml4fSR7cGFyZW50Q29tbWFuZHN9JHtjb21tYW5kWzBdLnJlcGxhY2UoL15cXCQwID8vLCAnJyl9YDtcbiAgICAgICAgICAgICAgICB1aS5zcGFuKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogY29tbWFuZFN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogWzAsIDIsIDAsIDJdLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWF4V2lkdGgoY29tbWFuZHMsIHRoZVdyYXAsIGAke2Jhc2UkMH0ke3BhcmVudENvbW1hbmRzfWApICsgNCxcbiAgICAgICAgICAgICAgICB9LCB7IHRleHQ6IGNvbW1hbmRbMV0gfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGludHMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZFsyXSlcbiAgICAgICAgICAgICAgICAgICAgaGludHMucHVzaChgWyR7X18oJ2RlZmF1bHQnKX1dYCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmRbM10gJiYgY29tbWFuZFszXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaGludHMucHVzaChgWyR7X18oJ2FsaWFzZXM6Jyl9ICR7Y29tbWFuZFszXS5qb2luKCcsICcpfV1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmRbNF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21tYW5kWzRdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGludHMucHVzaChgWyR7X18oJ2RlcHJlY2F0ZWQ6ICVzJywgY29tbWFuZFs0XSl9XWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGludHMucHVzaChgWyR7X18oJ2RlcHJlY2F0ZWQnKX1dYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGhpbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaGludHMuam9pbignICcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogWzAsIDAsIDAsIDJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdWkuZGl2KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGlhc0tleXMgPSAoT2JqZWN0LmtleXMob3B0aW9ucy5hbGlhcykgfHwgW10pLmNvbmNhdChPYmplY3Qua2V5cyh5YXJncy5wYXJzZWQubmV3QWxpYXNlcykgfHwgW10pO1xuICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoa2V5ID0+ICF5YXJncy5wYXJzZWQubmV3QWxpYXNlc1trZXldICYmXG4gICAgICAgICAgICBhbGlhc0tleXMuZXZlcnkoYWxpYXMgPT4gKG9wdGlvbnMuYWxpYXNbYWxpYXNdIHx8IFtdKS5pbmRleE9mKGtleSkgPT09IC0xKSk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRHcm91cCA9IF9fKCdPcHRpb25zOicpO1xuICAgICAgICBpZiAoIWdyb3Vwc1tkZWZhdWx0R3JvdXBdKVxuICAgICAgICAgICAgZ3JvdXBzW2RlZmF1bHRHcm91cF0gPSBbXTtcbiAgICAgICAgYWRkVW5ncm91cGVkS2V5cyhrZXlzLCBvcHRpb25zLmFsaWFzLCBncm91cHMsIGRlZmF1bHRHcm91cCk7XG4gICAgICAgIGNvbnN0IGlzTG9uZ1N3aXRjaCA9IChzdykgPT4gL14tLS8udGVzdChnZXRUZXh0KHN3KSk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXllZEdyb3VwcyA9IE9iamVjdC5rZXlzKGdyb3VwcylcbiAgICAgICAgICAgIC5maWx0ZXIoZ3JvdXBOYW1lID0+IGdyb3Vwc1tncm91cE5hbWVdLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAubWFwKGdyb3VwTmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkS2V5cyA9IGdyb3Vwc1tncm91cE5hbWVdXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmaWx0ZXJIaWRkZW5PcHRpb25zKVxuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWxpYXNLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGFsaWFzS2V5OyAoYWxpYXNLZXkgPSBhbGlhc0tleXNbaV0pICE9PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKG9wdGlvbnMuYWxpYXNbYWxpYXNLZXldIHx8IFtdKS5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsaWFzS2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4geyBncm91cE5hbWUsIG5vcm1hbGl6ZWRLZXlzIH07XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKCh7IG5vcm1hbGl6ZWRLZXlzIH0pID0+IG5vcm1hbGl6ZWRLZXlzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAubWFwKCh7IGdyb3VwTmFtZSwgbm9ybWFsaXplZEtleXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3dpdGNoZXMgPSBub3JtYWxpemVkS2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgYWNjW2tleV0gPSBba2V5XVxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG9wdGlvbnMuYWxpYXNba2V5XSB8fCBbXSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChzdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cE5hbWUgPT09IHNlbGYuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN3O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKC9eWzAtOV0kLy50ZXN0KHN3KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5ib29sZWFuLmluY2x1ZGVzKGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnLSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnLS0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJy0tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICctJykgKyBzdyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc29ydCgoc3cxLCBzdzIpID0+IGlzTG9uZ1N3aXRjaChzdzEpID09PSBpc0xvbmdTd2l0Y2goc3cyKVxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBpc0xvbmdTd2l0Y2goc3cxKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICA6IC0xKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgcmV0dXJuIHsgZ3JvdXBOYW1lLCBub3JtYWxpemVkS2V5cywgc3dpdGNoZXMgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNob3J0U3dpdGNoZXNVc2VkID0gZGlzcGxheWVkR3JvdXBzXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGdyb3VwTmFtZSB9KSA9PiBncm91cE5hbWUgIT09IHNlbGYuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSgpKVxuICAgICAgICAgICAgLnNvbWUoKHsgbm9ybWFsaXplZEtleXMsIHN3aXRjaGVzIH0pID0+ICFub3JtYWxpemVkS2V5cy5ldmVyeShrZXkgPT4gaXNMb25nU3dpdGNoKHN3aXRjaGVzW2tleV0pKSk7XG4gICAgICAgIGlmIChzaG9ydFN3aXRjaGVzVXNlZCkge1xuICAgICAgICAgICAgZGlzcGxheWVkR3JvdXBzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeyBncm91cE5hbWUgfSkgPT4gZ3JvdXBOYW1lICE9PSBzZWxmLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoeyBub3JtYWxpemVkS2V5cywgc3dpdGNoZXMgfSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTG9uZ1N3aXRjaChzd2l0Y2hlc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoZXNba2V5XSA9IGFkZEluZGVudGF0aW9uKHN3aXRjaGVzW2tleV0sICcteCwgJy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5ZWRHcm91cHMuZm9yRWFjaCgoeyBncm91cE5hbWUsIG5vcm1hbGl6ZWRLZXlzLCBzd2l0Y2hlcyB9KSA9PiB7XG4gICAgICAgICAgICB1aS5kaXYoZ3JvdXBOYW1lKTtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrc3dpdGNoID0gc3dpdGNoZXNba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IGRlc2NyaXB0aW9uc1trZXldIHx8ICcnO1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoZGVzYy5pbmNsdWRlcyhkZWZlclkxOG5Mb29rdXBQcmVmaXgpKVxuICAgICAgICAgICAgICAgICAgICBkZXNjID0gX18oZGVzYy5zdWJzdHJpbmcoZGVmZXJZMThuTG9va3VwUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmJvb2xlYW4uaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnYm9vbGVhbicpfV1gO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNvdW50LmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ2NvdW50Jyl9XWA7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RyaW5nLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ3N0cmluZycpfV1gO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm5vcm1hbGl6ZS5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYFske19fKCdzdHJpbmcnKX1dYDtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hcnJheS5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYFske19fKCdhcnJheScpfV1gO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm51bWJlci5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYFske19fKCdudW1iZXInKX1dYDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXByZWNhdGVkRXh0cmEgPSAoZGVwcmVjYXRlZCkgPT4gdHlwZW9mIGRlcHJlY2F0ZWQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gYFske19fKCdkZXByZWNhdGVkOiAlcycsIGRlcHJlY2F0ZWQpfV1gXG4gICAgICAgICAgICAgICAgICAgIDogYFske19fKCdkZXByZWNhdGVkJyl9XWA7XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0cmEgPSBbXG4gICAgICAgICAgICAgICAgICAgIGtleSBpbiBkZXByZWNhdGVkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXByZWNhdGVkRXh0cmEoZGVwcmVjYXRlZE9wdGlvbnNba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAga2V5IGluIGRlbWFuZGVkT3B0aW9ucyA/IGBbJHtfXygncmVxdWlyZWQnKX1dYCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuY2hvaWNlcyAmJiBvcHRpb25zLmNob2ljZXNba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgWyR7X18oJ2Nob2ljZXM6Jyl9ICR7c2VsZi5zdHJpbmdpZmllZFZhbHVlcyhvcHRpb25zLmNob2ljZXNba2V5XSl9XWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFN0cmluZyhvcHRpb25zLmRlZmF1bHRba2V5XSwgb3B0aW9ucy5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgdWkuc3Bhbih7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGdldFRleHQoa3N3aXRjaCksXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAyLCAwLCAyICsgZ2V0SW5kZW50YXRpb24oa3N3aXRjaCldLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWF4V2lkdGgoc3dpdGNoZXMsIHRoZVdyYXApICsgNCxcbiAgICAgICAgICAgICAgICB9LCBkZXNjKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRIaWRlT3B0aW9uRXh0cmFzID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VDb25maWd1cmF0aW9uKClbJ2hpZGUtdHlwZXMnXSA9PT1cbiAgICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmEgJiYgIXNob3VsZEhpZGVPcHRpb25FeHRyYXMpXG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdih7IHRleHQ6IGV4dHJhLCBwYWRkaW5nOiBbMCwgMCwgMCwgMl0sIGFsaWduOiAncmlnaHQnIH0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdWkuZGl2KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV4YW1wbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdWkuZGl2KF9fKCdFeGFtcGxlczonKSk7XG4gICAgICAgICAgICBleGFtcGxlcy5mb3JFYWNoKGV4YW1wbGUgPT4ge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVbMF0gPSBleGFtcGxlWzBdLnJlcGxhY2UoL1xcJDAvZywgYmFzZSQwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXhhbXBsZXMuZm9yRWFjaChleGFtcGxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhhbXBsZVsxXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdWkuZGl2KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGV4YW1wbGVbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbMCwgMiwgMCwgMl0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdWkuZGl2KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGV4YW1wbGVbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbMCwgMiwgMCwgMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWF4V2lkdGgoZXhhbXBsZXMsIHRoZVdyYXApICsgNCxcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXhhbXBsZVsxXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXBpbG9ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gZXBpbG9nc1xuICAgICAgICAgICAgICAgIC5tYXAoZXBpbG9nID0+IGVwaWxvZy5yZXBsYWNlKC9cXCQwL2csIGJhc2UkMCkpXG4gICAgICAgICAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgdWkuZGl2KGAke2V9XFxuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBtYXhXaWR0aCh0YWJsZSwgdGhlV3JhcCwgbW9kaWZpZXIpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRhYmxlKSkge1xuICAgICAgICAgICAgdGFibGUgPSBPYmplY3QudmFsdWVzKHRhYmxlKS5tYXAodiA9PiBbdl0pO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHNoaW0uc3RyaW5nV2lkdGgobW9kaWZpZXIgPyBgJHttb2RpZmllcn0gJHtnZXRUZXh0KHZbMF0pfWAgOiBnZXRUZXh0KHZbMF0pKSArIGdldEluZGVudGF0aW9uKHZbMF0pLCB3aWR0aCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhlV3JhcClcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIHBhcnNlSW50KCh0aGVXcmFwICogMC41KS50b1N0cmluZygpLCAxMCkpO1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUFsaWFzZXMoKSB7XG4gICAgICAgIGNvbnN0IGRlbWFuZGVkT3B0aW9ucyA9IHlhcmdzLmdldERlbWFuZGVkT3B0aW9ucygpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0geWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICAoT2JqZWN0LmtleXMob3B0aW9ucy5hbGlhcykgfHwgW10pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMuYWxpYXNba2V5XS5mb3JFYWNoKGFsaWFzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRpb25zW2FsaWFzXSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXNjcmliZShrZXksIGRlc2NyaXB0aW9uc1thbGlhc10pO1xuICAgICAgICAgICAgICAgIGlmIChhbGlhcyBpbiBkZW1hbmRlZE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLmRlbWFuZE9wdGlvbihrZXksIGRlbWFuZGVkT3B0aW9uc1thbGlhc10pO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmJvb2xlYW4uaW5jbHVkZXMoYWxpYXMpKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5ib29sZWFuKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY291bnQuaW5jbHVkZXMoYWxpYXMpKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5jb3VudChrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cmluZy5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLnN0cmluZyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm5vcm1hbGl6ZS5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLm5vcm1hbGl6ZShrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFycmF5LmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3MuYXJyYXkoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5udW1iZXIuaW5jbHVkZXMoYWxpYXMpKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5udW1iZXIoa2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IGNhY2hlZEhlbHBNZXNzYWdlO1xuICAgIHNlbGYuY2FjaGVIZWxwTWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FjaGVkSGVscE1lc3NhZ2UgPSB0aGlzLmhlbHAoKTtcbiAgICB9O1xuICAgIHNlbGYuY2xlYXJDYWNoZWRIZWxwTWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FjaGVkSGVscE1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBzZWxmLmhhc0NhY2hlZEhlbHBNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISFjYWNoZWRIZWxwTWVzc2FnZTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZFVuZ3JvdXBlZEtleXMoa2V5cywgYWxpYXNlcywgZ3JvdXBzLCBkZWZhdWx0R3JvdXApIHtcbiAgICAgICAgbGV0IGdyb3VwZWRLZXlzID0gW107XG4gICAgICAgIGxldCB0b0NoZWNrID0gbnVsbDtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICAgIGdyb3VwZWRLZXlzID0gZ3JvdXBlZEtleXMuY29uY2F0KGdyb3Vwc1tncm91cF0pO1xuICAgICAgICB9KTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0b0NoZWNrID0gW2tleV0uY29uY2F0KGFsaWFzZXNba2V5XSk7XG4gICAgICAgICAgICBpZiAoIXRvQ2hlY2suc29tZShrID0+IGdyb3VwZWRLZXlzLmluZGV4T2YoaykgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgIGdyb3Vwc1tkZWZhdWx0R3JvdXBdLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cGVkS2V5cztcbiAgICB9XG4gICAgZnVuY3Rpb24gZmlsdGVySGlkZGVuT3B0aW9ucyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICh5YXJncy5nZXRPcHRpb25zKCkuaGlkZGVuT3B0aW9ucy5pbmRleE9mKGtleSkgPCAwIHx8XG4gICAgICAgICAgICB5YXJncy5wYXJzZWQuYXJndlt5YXJncy5nZXRPcHRpb25zKCkuc2hvd0hpZGRlbk9wdF0pO1xuICAgIH1cbiAgICBzZWxmLnNob3dIZWxwID0gKGxldmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldExvZ2dlckluc3RhbmNlKCk7XG4gICAgICAgIGlmICghbGV2ZWwpXG4gICAgICAgICAgICBsZXZlbCA9ICdlcnJvcic7XG4gICAgICAgIGNvbnN0IGVtaXQgPSB0eXBlb2YgbGV2ZWwgPT09ICdmdW5jdGlvbicgPyBsZXZlbCA6IGxvZ2dlcltsZXZlbF07XG4gICAgICAgIGVtaXQoc2VsZi5oZWxwKCkpO1xuICAgIH07XG4gICAgc2VsZi5mdW5jdGlvbkRlc2NyaXB0aW9uID0gZm4gPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZuLm5hbWVcbiAgICAgICAgICAgID8gc2hpbS5QYXJzZXIuZGVjYW1lbGl6ZShmbi5uYW1lLCAnLScpXG4gICAgICAgICAgICA6IF9fKCdnZW5lcmF0ZWQtdmFsdWUnKTtcbiAgICAgICAgcmV0dXJuIFsnKCcsIGRlc2NyaXB0aW9uLCAnKSddLmpvaW4oJycpO1xuICAgIH07XG4gICAgc2VsZi5zdHJpbmdpZmllZFZhbHVlcyA9IGZ1bmN0aW9uIHN0cmluZ2lmaWVkVmFsdWVzKHZhbHVlcywgc2VwYXJhdG9yKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICAgICAgY29uc3Qgc2VwID0gc2VwYXJhdG9yIHx8ICcsICc7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW10uY29uY2F0KHZhbHVlcyk7XG4gICAgICAgIGlmICghdmFsdWVzIHx8ICFhcnJheS5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICBhcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmIChzdHJpbmcubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBzZXA7XG4gICAgICAgICAgICBzdHJpbmcgKz0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGRlZmF1bHRTdHJpbmcodmFsdWUsIGRlZmF1bHREZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgc3RyaW5nID0gYFske19fKCdkZWZhdWx0OicpfSBgO1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhZGVmYXVsdERlc2NyaXB0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHN0cmluZyArPSBkZWZhdWx0RGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBgXCIke3ZhbHVlfVwiYDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtzdHJpbmd9XWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdpbmRvd1dpZHRoKCkge1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IDgwO1xuICAgICAgICBpZiAoc2hpbS5wcm9jZXNzLnN0ZENvbHVtbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihtYXhXaWR0aCwgc2hpbS5wcm9jZXNzLnN0ZENvbHVtbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1heFdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCB2ZXJzaW9uID0gbnVsbDtcbiAgICBzZWxmLnZlcnNpb24gPSB2ZXIgPT4ge1xuICAgICAgICB2ZXJzaW9uID0gdmVyO1xuICAgIH07XG4gICAgc2VsZi5zaG93VmVyc2lvbiA9IGxldmVsID0+IHtcbiAgICAgICAgY29uc3QgbG9nZ2VyID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0TG9nZ2VySW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKCFsZXZlbClcbiAgICAgICAgICAgIGxldmVsID0gJ2Vycm9yJztcbiAgICAgICAgY29uc3QgZW1pdCA9IHR5cGVvZiBsZXZlbCA9PT0gJ2Z1bmN0aW9uJyA/IGxldmVsIDogbG9nZ2VyW2xldmVsXTtcbiAgICAgICAgZW1pdCh2ZXJzaW9uKTtcbiAgICB9O1xuICAgIHNlbGYucmVzZXQgPSBmdW5jdGlvbiByZXNldChsb2NhbExvb2t1cCkge1xuICAgICAgICBmYWlsTWVzc2FnZSA9IG51bGw7XG4gICAgICAgIGZhaWx1cmVPdXRwdXQgPSBmYWxzZTtcbiAgICAgICAgdXNhZ2VzID0gW107XG4gICAgICAgIHVzYWdlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgZXBpbG9ncyA9IFtdO1xuICAgICAgICBleGFtcGxlcyA9IFtdO1xuICAgICAgICBjb21tYW5kcyA9IFtdO1xuICAgICAgICBkZXNjcmlwdGlvbnMgPSBvYmpGaWx0ZXIoZGVzY3JpcHRpb25zLCBrID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gICAgY29uc3QgZnJvemVucyA9IFtdO1xuICAgIHNlbGYuZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKCkge1xuICAgICAgICBmcm96ZW5zLnB1c2goe1xuICAgICAgICAgICAgZmFpbE1lc3NhZ2UsXG4gICAgICAgICAgICBmYWlsdXJlT3V0cHV0LFxuICAgICAgICAgICAgdXNhZ2VzLFxuICAgICAgICAgICAgdXNhZ2VEaXNhYmxlZCxcbiAgICAgICAgICAgIGVwaWxvZ3MsXG4gICAgICAgICAgICBleGFtcGxlcyxcbiAgICAgICAgICAgIGNvbW1hbmRzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHNlbGYudW5mcmVlemUgPSBmdW5jdGlvbiB1bmZyZWV6ZShkZWZhdWx0Q29tbWFuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IGZyb3plbnMucG9wKCk7XG4gICAgICAgIGlmICghZnJvemVuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZGVmYXVsdENvbW1hbmQpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9ucyA9IHsgLi4uZnJvemVuLmRlc2NyaXB0aW9ucywgLi4uZGVzY3JpcHRpb25zIH07XG4gICAgICAgICAgICBjb21tYW5kcyA9IFsuLi5mcm96ZW4uY29tbWFuZHMsIC4uLmNvbW1hbmRzXTtcbiAgICAgICAgICAgIHVzYWdlcyA9IFsuLi5mcm96ZW4udXNhZ2VzLCAuLi51c2FnZXNdO1xuICAgICAgICAgICAgZXhhbXBsZXMgPSBbLi4uZnJvemVuLmV4YW1wbGVzLCAuLi5leGFtcGxlc107XG4gICAgICAgICAgICBlcGlsb2dzID0gWy4uLmZyb3plbi5lcGlsb2dzLCAuLi5lcGlsb2dzXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgZmFpbE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgZmFpbHVyZU91dHB1dCxcbiAgICAgICAgICAgICAgICB1c2FnZXMsXG4gICAgICAgICAgICAgICAgdXNhZ2VEaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBlcGlsb2dzLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzLFxuICAgICAgICAgICAgICAgIGNvbW1hbmRzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9ucyxcbiAgICAgICAgICAgIH0gPSBmcm96ZW4pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZjtcbn1cbmZ1bmN0aW9uIGlzSW5kZW50ZWRUZXh0KHRleHQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRleHQgPT09ICdvYmplY3QnO1xufVxuZnVuY3Rpb24gYWRkSW5kZW50YXRpb24odGV4dCwgaW5kZW50KSB7XG4gICAgcmV0dXJuIGlzSW5kZW50ZWRUZXh0KHRleHQpXG4gICAgICAgID8geyB0ZXh0OiB0ZXh0LnRleHQsIGluZGVudGF0aW9uOiB0ZXh0LmluZGVudGF0aW9uICsgaW5kZW50IH1cbiAgICAgICAgOiB7IHRleHQsIGluZGVudGF0aW9uOiBpbmRlbnQgfTtcbn1cbmZ1bmN0aW9uIGdldEluZGVudGF0aW9uKHRleHQpIHtcbiAgICByZXR1cm4gaXNJbmRlbnRlZFRleHQodGV4dCkgPyB0ZXh0LmluZGVudGF0aW9uIDogMDtcbn1cbmZ1bmN0aW9uIGdldFRleHQodGV4dCkge1xuICAgIHJldHVybiBpc0luZGVudGVkVGV4dCh0ZXh0KSA/IHRleHQudGV4dCA6IHRleHQ7XG59XG4iLCAiZXhwb3J0IGNvbnN0IGNvbXBsZXRpb25TaFRlbXBsYXRlID0gYCMjIy1iZWdpbi17e2FwcF9uYW1lfX0tY29tcGxldGlvbnMtIyMjXG4jXG4jIHlhcmdzIGNvbW1hbmQgY29tcGxldGlvbiBzY3JpcHRcbiNcbiMgSW5zdGFsbGF0aW9uOiB7e2FwcF9wYXRofX0ge3tjb21wbGV0aW9uX2NvbW1hbmR9fSA+PiB+Ly5iYXNocmNcbiMgICAgb3Ige3thcHBfcGF0aH19IHt7Y29tcGxldGlvbl9jb21tYW5kfX0gPj4gfi8uYmFzaF9wcm9maWxlIG9uIE9TWC5cbiNcbl97e2FwcF9uYW1lfX1feWFyZ3NfY29tcGxldGlvbnMoKVxue1xuICAgIGxvY2FsIGN1cl93b3JkIGFyZ3MgdHlwZV9saXN0XG5cbiAgICBjdXJfd29yZD1cIlxcJHtDT01QX1dPUkRTW0NPTVBfQ1dPUkRdfVwiXG4gICAgYXJncz0oXCJcXCR7Q09NUF9XT1JEU1tAXX1cIilcblxuICAgICMgYXNrIHlhcmdzIHRvIGdlbmVyYXRlIGNvbXBsZXRpb25zLlxuICAgIHR5cGVfbGlzdD0kKHt7YXBwX3BhdGh9fSAtLWdldC15YXJncy1jb21wbGV0aW9ucyBcIlxcJHthcmdzW0BdfVwiKVxuXG4gICAgQ09NUFJFUExZPSggJChjb21wZ2VuIC1XIFwiXFwke3R5cGVfbGlzdH1cIiAtLSBcXCR7Y3VyX3dvcmR9KSApXG5cbiAgICAjIGlmIG5vIG1hdGNoIHdhcyBmb3VuZCwgZmFsbCBiYWNrIHRvIGZpbGVuYW1lIGNvbXBsZXRpb25cbiAgICBpZiBbIFxcJHsjQ09NUFJFUExZW0BdfSAtZXEgMCBdOyB0aGVuXG4gICAgICBDT01QUkVQTFk9KClcbiAgICBmaVxuXG4gICAgcmV0dXJuIDBcbn1cbmNvbXBsZXRlIC1vIGJhc2hkZWZhdWx0IC1vIGRlZmF1bHQgLUYgX3t7YXBwX25hbWV9fV95YXJnc19jb21wbGV0aW9ucyB7e2FwcF9uYW1lfX1cbiMjIy1lbmQte3thcHBfbmFtZX19LWNvbXBsZXRpb25zLSMjI1xuYDtcbmV4cG9ydCBjb25zdCBjb21wbGV0aW9uWnNoVGVtcGxhdGUgPSBgI2NvbXBkZWYge3thcHBfbmFtZX19XG4jIyMtYmVnaW4te3thcHBfbmFtZX19LWNvbXBsZXRpb25zLSMjI1xuI1xuIyB5YXJncyBjb21tYW5kIGNvbXBsZXRpb24gc2NyaXB0XG4jXG4jIEluc3RhbGxhdGlvbjoge3thcHBfcGF0aH19IHt7Y29tcGxldGlvbl9jb21tYW5kfX0gPj4gfi8uenNocmNcbiMgICAgb3Ige3thcHBfcGF0aH19IHt7Y29tcGxldGlvbl9jb21tYW5kfX0gPj4gfi8uenByb2ZpbGUgb24gT1NYLlxuI1xuX3t7YXBwX25hbWV9fV95YXJnc19jb21wbGV0aW9ucygpXG57XG4gIGxvY2FsIHJlcGx5XG4gIGxvY2FsIHNpPSRJRlNcbiAgSUZTPSQnXFxuJyByZXBseT0oJChDT01QX0NXT1JEPVwiJCgoQ1VSUkVOVC0xKSlcIiBDT01QX0xJTkU9XCIkQlVGRkVSXCIgQ09NUF9QT0lOVD1cIiRDVVJTT1JcIiB7e2FwcF9wYXRofX0gLS1nZXQteWFyZ3MtY29tcGxldGlvbnMgXCJcXCR7d29yZHNbQF19XCIpKVxuICBJRlM9JHNpXG4gIF9kZXNjcmliZSAndmFsdWVzJyByZXBseVxufVxuY29tcGRlZiBfe3thcHBfbmFtZX19X3lhcmdzX2NvbXBsZXRpb25zIHt7YXBwX25hbWV9fVxuIyMjLWVuZC17e2FwcF9uYW1lfX0tY29tcGxldGlvbnMtIyMjXG5gO1xuIiwgImltcG9ydCB7IGlzQ29tbWFuZEJ1aWxkZXJDYWxsYmFjayB9IGZyb20gJy4vY29tbWFuZC5qcyc7XG5pbXBvcnQgeyBhc3NlcnROb3RTdHJpY3RFcXVhbCB9IGZyb20gJy4vdHlwaW5ncy9jb21tb24tdHlwZXMuanMnO1xuaW1wb3J0ICogYXMgdGVtcGxhdGVzIGZyb20gJy4vY29tcGxldGlvbi10ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pcy1wcm9taXNlLmpzJztcbmltcG9ydCB7IHBhcnNlQ29tbWFuZCB9IGZyb20gJy4vcGFyc2UtY29tbWFuZC5qcyc7XG5leHBvcnQgY2xhc3MgQ29tcGxldGlvbiB7XG4gICAgY29uc3RydWN0b3IoeWFyZ3MsIHVzYWdlLCBjb21tYW5kLCBzaGltKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICB0aGlzLnlhcmdzID0geWFyZ3M7XG4gICAgICAgIHRoaXMudXNhZ2UgPSB1c2FnZTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0gY29tbWFuZDtcbiAgICAgICAgdGhpcy5zaGltID0gc2hpbTtcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uS2V5ID0gJ2dldC15YXJncy1jb21wbGV0aW9ucyc7XG4gICAgICAgIHRoaXMuYWxpYXNlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmRleEFmdGVyTGFzdFJlc2V0ID0gMDtcbiAgICAgICAgdGhpcy56c2hTaGVsbCA9XG4gICAgICAgICAgICAoX2MgPSAoKChfYSA9IHRoaXMuc2hpbS5nZXRFbnYoJ1NIRUxMJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbmNsdWRlcygnenNoJykpIHx8XG4gICAgICAgICAgICAgICAgKChfYiA9IHRoaXMuc2hpbS5nZXRFbnYoJ1pTSF9OQU1FJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbmNsdWRlcygnenNoJykpKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZmFsc2U7XG4gICAgfVxuICAgIGRlZmF1bHRDb21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIGRvbmUpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmNvbW1hbmQuZ2V0Q29tbWFuZEhhbmRsZXJzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGFyZ3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2FyZ3NbaV1dICYmIGhhbmRsZXJzW2FyZ3NbaV1dLmJ1aWxkZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidWlsZGVyID0gaGFuZGxlcnNbYXJnc1tpXV0uYnVpbGRlcjtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21tYW5kQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhBZnRlckxhc3RSZXNldCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gdGhpcy55YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICBidWlsZGVyKHksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geS5hcmd2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wbGV0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmNvbW1hbmRDb21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgY3VycmVudCk7XG4gICAgICAgIHRoaXMub3B0aW9uQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpO1xuICAgICAgICB0aGlzLmNob2ljZXNGcm9tT3B0aW9uc0NvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KTtcbiAgICAgICAgdGhpcy5jaG9pY2VzRnJvbVBvc2l0aW9uYWxzQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpO1xuICAgICAgICBkb25lKG51bGwsIGNvbXBsZXRpb25zKTtcbiAgICB9XG4gICAgY29tbWFuZENvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBjdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbW1hbmRzID0gdGhpcy55YXJnc1xuICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAuZ2V0Q29udGV4dCgpLmNvbW1hbmRzO1xuICAgICAgICBpZiAoIWN1cnJlbnQubWF0Y2goL14tLykgJiZcbiAgICAgICAgICAgIHBhcmVudENvbW1hbmRzW3BhcmVudENvbW1hbmRzLmxlbmd0aCAtIDFdICE9PSBjdXJyZW50ICYmXG4gICAgICAgICAgICAhdGhpcy5wcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykpIHtcbiAgICAgICAgICAgIHRoaXMudXNhZ2UuZ2V0Q29tbWFuZHMoKS5mb3JFYWNoKHVzYWdlQ29tbWFuZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZE5hbWUgPSBwYXJzZUNvbW1hbmQodXNhZ2VDb21tYW5kWzBdKS5jbWQ7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXhPZihjb21tYW5kTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy56c2hTaGVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnMucHVzaChjb21tYW5kTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjID0gdXNhZ2VDb21tYW5kWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnMucHVzaChjb21tYW5kTmFtZS5yZXBsYWNlKC86L2csICdcXFxcOicpICsgJzonICsgZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvcHRpb25Db21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCkge1xuICAgICAgICBpZiAoKGN1cnJlbnQubWF0Y2goL14tLykgfHwgKGN1cnJlbnQgPT09ICcnICYmIGNvbXBsZXRpb25zLmxlbmd0aCA9PT0gMCkpICYmXG4gICAgICAgICAgICAhdGhpcy5wcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uYWxLZXlzID0gdGhpcy55YXJncy5nZXRHcm91cHMoKVt0aGlzLnVzYWdlLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKV0gfHwgW107XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmtleSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5lZ2FibGUgPSAhIW9wdGlvbnMuY29uZmlndXJhdGlvblsnYm9vbGVhbi1uZWdhdGlvbiddICYmXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9vbGVhbi5pbmNsdWRlcyhrZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUG9zaXRpb25hbEtleSA9IHBvc2l0aW9uYWxLZXlzLmluY2x1ZGVzKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Bvc2l0aW9uYWxLZXkgJiZcbiAgICAgICAgICAgICAgICAgICAgIW9wdGlvbnMuaGlkZGVuT3B0aW9ucy5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmFyZ3NDb250YWluS2V5KGFyZ3MsIGtleSwgbmVnYWJsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZU9wdGlvbktleShrZXksIGNvbXBsZXRpb25zLCBjdXJyZW50LCBuZWdhYmxlICYmICEhb3B0aW9ucy5kZWZhdWx0W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNob2ljZXNGcm9tT3B0aW9uc0NvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzQXJnSGFzQ2hvaWNlcyhhcmdzKSkge1xuICAgICAgICAgICAgY29uc3QgY2hvaWNlcyA9IHRoaXMuZ2V0UHJldmlvdXNBcmdDaG9pY2VzKGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGNob2ljZXMgJiYgY2hvaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGlvbnMucHVzaCguLi5jaG9pY2VzLm1hcChjID0+IGMucmVwbGFjZSgvOi9nLCAnXFxcXDonKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNob2ljZXNGcm9tUG9zaXRpb25hbHNDb21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCkge1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gJycgJiZcbiAgICAgICAgICAgIGNvbXBsZXRpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNBcmdIYXNDaG9pY2VzKGFyZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9zaXRpb25hbEtleXMgPSB0aGlzLnlhcmdzLmdldEdyb3VwcygpW3RoaXMudXNhZ2UuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSgpXSB8fCBbXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5tYXgodGhpcy5pbmRleEFmdGVyTGFzdFJlc2V0LCB0aGlzLnlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKS5jb21tYW5kcy5sZW5ndGggK1xuICAgICAgICAgICAgMSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uYWxLZXkgPSBwb3NpdGlvbmFsS2V5c1thcmd2Ll8ubGVuZ3RoIC0gb2Zmc2V0IC0gMV07XG4gICAgICAgIGlmICghcG9zaXRpb25hbEtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNob2ljZXMgPSB0aGlzLnlhcmdzLmdldE9wdGlvbnMoKS5jaG9pY2VzW3Bvc2l0aW9uYWxLZXldIHx8IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGNob2ljZSBvZiBjaG9pY2VzKSB7XG4gICAgICAgICAgICBpZiAoY2hvaWNlLnN0YXJ0c1dpdGgoY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGNob2ljZS5yZXBsYWNlKC86L2csICdcXFxcOicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRQcmV2aW91c0FyZ0Nob2ljZXMoYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgcHJldmlvdXNBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgICAgaWYgKCFwcmV2aW91c0FyZy5zdGFydHNXaXRoKCctJykgJiYgYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmaWx0ZXIgPSBwcmV2aW91c0FyZztcbiAgICAgICAgICAgIHByZXZpb3VzQXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDJdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJldmlvdXNBcmcuc3RhcnRzV2l0aCgnLScpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcmV2aW91c0FyZ0tleSA9IHByZXZpb3VzQXJnLnJlcGxhY2UoL14tKy8sICcnKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMueWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICBjb25zdCBwb3NzaWJsZUFsaWFzZXMgPSBbXG4gICAgICAgICAgICBwcmV2aW91c0FyZ0tleSxcbiAgICAgICAgICAgIC4uLih0aGlzLnlhcmdzLmdldEFsaWFzZXMoKVtwcmV2aW91c0FyZ0tleV0gfHwgW10pLFxuICAgICAgICBdO1xuICAgICAgICBsZXQgY2hvaWNlcztcbiAgICAgICAgZm9yIChjb25zdCBwb3NzaWJsZUFsaWFzIG9mIHBvc3NpYmxlQWxpYXNlcykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLmtleSwgcG9zc2libGVBbGlhcykgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KG9wdGlvbnMuY2hvaWNlc1twb3NzaWJsZUFsaWFzXSkpIHtcbiAgICAgICAgICAgICAgICBjaG9pY2VzID0gb3B0aW9ucy5jaG9pY2VzW3Bvc3NpYmxlQWxpYXNdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaG9pY2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+ICFmaWx0ZXIgfHwgY2hvaWNlLnN0YXJ0c1dpdGgoZmlsdGVyKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJldmlvdXNBcmdIYXNDaG9pY2VzKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgY2hvaWNlcyA9IHRoaXMuZ2V0UHJldmlvdXNBcmdDaG9pY2VzKGFyZ3MpO1xuICAgICAgICByZXR1cm4gY2hvaWNlcyAhPT0gdW5kZWZpbmVkICYmIGNob2ljZXMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgYXJnc0NvbnRhaW5LZXkoYXJncywga2V5LCBuZWdhYmxlKSB7XG4gICAgICAgIGNvbnN0IGFyZ3NDb250YWlucyA9IChzKSA9PiBhcmdzLmluZGV4T2YoKC9eW14wLTldJC8udGVzdChzKSA/ICctJyA6ICctLScpICsgcykgIT09IC0xO1xuICAgICAgICBpZiAoYXJnc0NvbnRhaW5zKGtleSkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKG5lZ2FibGUgJiYgYXJnc0NvbnRhaW5zKGBuby0ke2tleX1gKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5hbGlhc2VzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIHRoaXMuYWxpYXNlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3NDb250YWlucyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29tcGxldGVPcHRpb25LZXkoa2V5LCBjb21wbGV0aW9ucywgY3VycmVudCwgbmVnYWJsZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgIGxldCBrZXlXaXRoRGVzYyA9IGtleTtcbiAgICAgICAgaWYgKHRoaXMuenNoU2hlbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NzID0gdGhpcy51c2FnZS5nZXREZXNjcmlwdGlvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzS2V5ID0gKF9iID0gKF9hID0gdGhpcyA9PT0gbnVsbCB8fCB0aGlzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0aGlzLmFsaWFzZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtrZXldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmluZChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzYyA9IGRlc2NzW2FsaWFzXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGRlc2MgPT09ICdzdHJpbmcnICYmIGRlc2MubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGVzY0Zyb21BbGlhcyA9IGFsaWFzS2V5ID8gZGVzY3NbYWxpYXNLZXldIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IChfZCA9IChfYyA9IGRlc2NzW2tleV0pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGRlc2NGcm9tQWxpYXMpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xuICAgICAgICAgICAga2V5V2l0aERlc2MgPSBgJHtrZXkucmVwbGFjZSgvOi9nLCAnXFxcXDonKX06JHtkZXNjXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19feWFyZ3NTdHJpbmdfXzonLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJyAnKX1gO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0c0J5VHdvRGFzaGVzID0gKHMpID0+IC9eLS0vLnRlc3Qocyk7XG4gICAgICAgIGNvbnN0IGlzU2hvcnRPcHRpb24gPSAocykgPT4gL15bXjAtOV0kLy50ZXN0KHMpO1xuICAgICAgICBjb25zdCBkYXNoZXMgPSAhc3RhcnRzQnlUd29EYXNoZXMoY3VycmVudCkgJiYgaXNTaG9ydE9wdGlvbihrZXkpID8gJy0nIDogJy0tJztcbiAgICAgICAgY29tcGxldGlvbnMucHVzaChkYXNoZXMgKyBrZXlXaXRoRGVzYyk7XG4gICAgICAgIGlmIChuZWdhYmxlKSB7XG4gICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGRhc2hlcyArICduby0nICsga2V5V2l0aERlc2MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGN1c3RvbUNvbXBsZXRpb24oYXJncywgYXJndiwgY3VycmVudCwgZG9uZSkge1xuICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbCh0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbiwgbnVsbCwgdGhpcy5zaGltKTtcbiAgICAgICAgaWYgKGlzU3luY0NvbXBsZXRpb25GdW5jdGlvbih0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uKGN1cnJlbnQsIGFyZ3YpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGltLnByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZShudWxsLCBsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpbS5wcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoZXJyLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNGYWxsYmFja0NvbXBsZXRpb25GdW5jdGlvbih0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbihjdXJyZW50LCBhcmd2LCAob25Db21wbGV0ZWQgPSBkb25lKSA9PiB0aGlzLmRlZmF1bHRDb21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIG9uQ29tcGxldGVkKSwgY29tcGxldGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgY29tcGxldGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb24oY3VycmVudCwgYXJndiwgY29tcGxldGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgY29tcGxldGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q29tcGxldGlvbihhcmdzLCBkb25lKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6ICcnO1xuICAgICAgICBjb25zdCBhcmd2ID0gdGhpcy55YXJncy5wYXJzZShhcmdzLCB0cnVlKTtcbiAgICAgICAgY29uc3QgY29tcGxldGlvbkZ1bmN0aW9uID0gdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb25cbiAgICAgICAgICAgID8gKGFyZ3YpID0+IHRoaXMuY3VzdG9tQ29tcGxldGlvbihhcmdzLCBhcmd2LCBjdXJyZW50LCBkb25lKVxuICAgICAgICAgICAgOiAoYXJndikgPT4gdGhpcy5kZWZhdWx0Q29tcGxldGlvbihhcmdzLCBhcmd2LCBjdXJyZW50LCBkb25lKTtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShhcmd2KVxuICAgICAgICAgICAgPyBhcmd2LnRoZW4oY29tcGxldGlvbkZ1bmN0aW9uKVxuICAgICAgICAgICAgOiBjb21wbGV0aW9uRnVuY3Rpb24oYXJndik7XG4gICAgfVxuICAgIGdlbmVyYXRlQ29tcGxldGlvblNjcmlwdCgkMCwgY21kKSB7XG4gICAgICAgIGxldCBzY3JpcHQgPSB0aGlzLnpzaFNoZWxsXG4gICAgICAgICAgICA/IHRlbXBsYXRlcy5jb21wbGV0aW9uWnNoVGVtcGxhdGVcbiAgICAgICAgICAgIDogdGVtcGxhdGVzLmNvbXBsZXRpb25TaFRlbXBsYXRlO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5zaGltLnBhdGguYmFzZW5hbWUoJDApO1xuICAgICAgICBpZiAoJDAubWF0Y2goL1xcLmpzJC8pKVxuICAgICAgICAgICAgJDAgPSBgLi8keyQwfWA7XG4gICAgICAgIHNjcmlwdCA9IHNjcmlwdC5yZXBsYWNlKC97e2FwcF9uYW1lfX0vZywgbmFtZSk7XG4gICAgICAgIHNjcmlwdCA9IHNjcmlwdC5yZXBsYWNlKC97e2NvbXBsZXRpb25fY29tbWFuZH19L2csIGNtZCk7XG4gICAgICAgIHJldHVybiBzY3JpcHQucmVwbGFjZSgve3thcHBfcGF0aH19L2csICQwKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJGdW5jdGlvbihmbikge1xuICAgICAgICB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbiA9IGZuO1xuICAgIH1cbiAgICBzZXRQYXJzZWQocGFyc2VkKSB7XG4gICAgICAgIHRoaXMuYWxpYXNlcyA9IHBhcnNlZC5hbGlhc2VzO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0aW9uKHlhcmdzLCB1c2FnZSwgY29tbWFuZCwgc2hpbSkge1xuICAgIHJldHVybiBuZXcgQ29tcGxldGlvbih5YXJncywgdXNhZ2UsIGNvbW1hbmQsIHNoaW0pO1xufVxuZnVuY3Rpb24gaXNTeW5jQ29tcGxldGlvbkZ1bmN0aW9uKGNvbXBsZXRpb25GdW5jdGlvbikge1xuICAgIHJldHVybiBjb21wbGV0aW9uRnVuY3Rpb24ubGVuZ3RoIDwgMztcbn1cbmZ1bmN0aW9uIGlzRmFsbGJhY2tDb21wbGV0aW9uRnVuY3Rpb24oY29tcGxldGlvbkZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbXBsZXRpb25GdW5jdGlvbi5sZW5ndGggPiAzO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBsZXZlbnNodGVpbihhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gYi5sZW5ndGg7XG4gICAgaWYgKGIubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gYS5sZW5ndGg7XG4gICAgY29uc3QgbWF0cml4ID0gW107XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hdHJpeFtpXSA9IFtpXTtcbiAgICB9XG4gICAgbGV0IGo7XG4gICAgZm9yIChqID0gMDsgaiA8PSBhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIG1hdHJpeFswXVtqXSA9IGo7XG4gICAgfVxuICAgIGZvciAoaSA9IDE7IGkgPD0gYi5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGogPSAxOyBqIDw9IGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChiLmNoYXJBdChpIC0gMSkgPT09IGEuY2hhckF0KGogLSAxKSkge1xuICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IG1hdHJpeFtpIC0gMV1baiAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAxICYmXG4gICAgICAgICAgICAgICAgICAgIGogPiAxICYmXG4gICAgICAgICAgICAgICAgICAgIGIuY2hhckF0KGkgLSAyKSA9PT0gYS5jaGFyQXQoaiAtIDEpICYmXG4gICAgICAgICAgICAgICAgICAgIGIuY2hhckF0KGkgLSAxKSA9PT0gYS5jaGFyQXQoaiAtIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IG1hdHJpeFtpIC0gMl1baiAtIDJdICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IE1hdGgubWluKG1hdHJpeFtpIC0gMV1baiAtIDFdICsgMSwgTWF0aC5taW4obWF0cml4W2ldW2ogLSAxXSArIDEsIG1hdHJpeFtpIC0gMV1bal0gKyAxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXRyaXhbYi5sZW5ndGhdW2EubGVuZ3RoXTtcbn1cbiIsICJpbXBvcnQgeyBhcmdzZXJ0IH0gZnJvbSAnLi9hcmdzZXJ0LmpzJztcbmltcG9ydCB7IGFzc2VydE5vdFN0cmljdEVxdWFsLCB9IGZyb20gJy4vdHlwaW5ncy9jb21tb24tdHlwZXMuanMnO1xuaW1wb3J0IHsgbGV2ZW5zaHRlaW4gYXMgZGlzdGFuY2UgfSBmcm9tICcuL3V0aWxzL2xldmVuc2h0ZWluLmpzJztcbmltcG9ydCB7IG9iakZpbHRlciB9IGZyb20gJy4vdXRpbHMvb2JqLWZpbHRlci5qcyc7XG5jb25zdCBzcGVjaWFsS2V5cyA9IFsnJDAnLCAnLS0nLCAnXyddO1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRpb24oeWFyZ3MsIHVzYWdlLCBzaGltKSB7XG4gICAgY29uc3QgX18gPSBzaGltLnkxOG4uX187XG4gICAgY29uc3QgX19uID0gc2hpbS55MThuLl9fbjtcbiAgICBjb25zdCBzZWxmID0ge307XG4gICAgc2VsZi5ub25PcHRpb25Db3VudCA9IGZ1bmN0aW9uIG5vbk9wdGlvbkNvdW50KGFyZ3YpIHtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRDb21tYW5kcyA9IHlhcmdzLmdldERlbWFuZGVkQ29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25hbENvdW50ID0gYXJndi5fLmxlbmd0aCArIChhcmd2WyctLSddID8gYXJndlsnLS0nXS5sZW5ndGggOiAwKTtcbiAgICAgICAgY29uc3QgX3MgPSBwb3NpdGlvbmFsQ291bnQgLSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRDb250ZXh0KCkuY29tbWFuZHMubGVuZ3RoO1xuICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fICYmXG4gICAgICAgICAgICAoX3MgPCBkZW1hbmRlZENvbW1hbmRzLl8ubWluIHx8IF9zID4gZGVtYW5kZWRDb21tYW5kcy5fLm1heCkpIHtcbiAgICAgICAgICAgIGlmIChfcyA8IGRlbWFuZGVkQ29tbWFuZHMuXy5taW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fLm1pbk1zZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoZGVtYW5kZWRDb21tYW5kcy5fLm1pbk1zZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZW1hbmRlZENvbW1hbmRzLl8ubWluTXNnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcJDAvZywgX3MudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMS8sIGRlbWFuZGVkQ29tbWFuZHMuXy5taW4udG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fbignTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgJ05vdCBlbm91Z2ggbm9uLW9wdGlvbiBhcmd1bWVudHM6IGdvdCAlcywgbmVlZCBhdCBsZWFzdCAlcycsIF9zLCBfcy50b1N0cmluZygpLCBkZW1hbmRlZENvbW1hbmRzLl8ubWluLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfcyA+IGRlbWFuZGVkQ29tbWFuZHMuXy5tYXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fLm1heE1zZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoZGVtYW5kZWRDb21tYW5kcy5fLm1heE1zZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZW1hbmRlZENvbW1hbmRzLl8ubWF4TXNnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcJDAvZywgX3MudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMS8sIGRlbWFuZGVkQ29tbWFuZHMuXy5tYXgudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fbignVG9vIG1hbnkgbm9uLW9wdGlvbiBhcmd1bWVudHM6IGdvdCAlcywgbWF4aW11bSBvZiAlcycsICdUb28gbWFueSBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBtYXhpbXVtIG9mICVzJywgX3MsIF9zLnRvU3RyaW5nKCksIGRlbWFuZGVkQ29tbWFuZHMuXy5tYXgudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5wb3NpdGlvbmFsQ291bnQgPSBmdW5jdGlvbiBwb3NpdGlvbmFsQ291bnQocmVxdWlyZWQsIG9ic2VydmVkKSB7XG4gICAgICAgIGlmIChvYnNlcnZlZCA8IHJlcXVpcmVkKSB7XG4gICAgICAgICAgICB1c2FnZS5mYWlsKF9fbignTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgJ05vdCBlbm91Z2ggbm9uLW9wdGlvbiBhcmd1bWVudHM6IGdvdCAlcywgbmVlZCBhdCBsZWFzdCAlcycsIG9ic2VydmVkLCBvYnNlcnZlZCArICcnLCByZXF1aXJlZCArICcnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYucmVxdWlyZWRBcmd1bWVudHMgPSBmdW5jdGlvbiByZXF1aXJlZEFyZ3VtZW50cyhhcmd2LCBkZW1hbmRlZE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG1pc3NpbmcgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZW1hbmRlZE9wdGlvbnMpKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCBrZXkpIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGFyZ3Zba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nID0gbWlzc2luZyB8fCB7fTtcbiAgICAgICAgICAgICAgICBtaXNzaW5nW2tleV0gPSBkZW1hbmRlZE9wdGlvbnNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWlzc2luZykge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tTXNncyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobWlzc2luZykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBtaXNzaW5nW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKG1zZyAmJiBjdXN0b21Nc2dzLmluZGV4T2YobXNnKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tTXNncy5wdXNoKG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY3VzdG9tTXNnID0gY3VzdG9tTXNncy5sZW5ndGggPyBgXFxuJHtjdXN0b21Nc2dzLmpvaW4oJ1xcbicpfWAgOiAnJztcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OiAlcycsICdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50czogJXMnLCBPYmplY3Qua2V5cyhtaXNzaW5nKS5sZW5ndGgsIE9iamVjdC5rZXlzKG1pc3NpbmcpLmpvaW4oJywgJykgKyBjdXN0b21Nc2cpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi51bmtub3duQXJndW1lbnRzID0gZnVuY3Rpb24gdW5rbm93bkFyZ3VtZW50cyhhcmd2LCBhbGlhc2VzLCBwb3NpdGlvbmFsTWFwLCBpc0RlZmF1bHRDb21tYW5kLCBjaGVja1Bvc2l0aW9uYWxzID0gdHJ1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRLZXlzID0geWFyZ3NcbiAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgLmdldENvbW1hbmRJbnN0YW5jZSgpXG4gICAgICAgICAgICAuZ2V0Q29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgdW5rbm93biA9IFtdO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzcGVjaWFsS2V5cy5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwb3NpdGlvbmFsTWFwLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRQYXJzZUNvbnRleHQoKSwga2V5KSAmJlxuICAgICAgICAgICAgICAgICFzZWxmLmlzVmFsaWRBbmRTb21lQWxpYXNJc05vdE5ldyhrZXksIGFsaWFzZXMpKSB7XG4gICAgICAgICAgICAgICAgdW5rbm93bi5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hlY2tQb3NpdGlvbmFscyAmJlxuICAgICAgICAgICAgKGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICBjb21tYW5kS2V5cy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0Q29tbWFuZCkpIHtcbiAgICAgICAgICAgIGFyZ3YuXy5zbGljZShjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGgpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbW1hbmRLZXlzLmluY2x1ZGVzKCcnICsga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goJycgKyBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja1Bvc2l0aW9uYWxzKSB7XG4gICAgICAgICAgICBjb25zdCBkZW1hbmRlZENvbW1hbmRzID0geWFyZ3MuZ2V0RGVtYW5kZWRDb21tYW5kcygpO1xuICAgICAgICAgICAgY29uc3QgbWF4Tm9uT3B0RGVtYW5kZWQgPSAoKF9hID0gZGVtYW5kZWRDb21tYW5kcy5fKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWF4KSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGggKyBtYXhOb25PcHREZW1hbmRlZDtcbiAgICAgICAgICAgIGlmIChleHBlY3RlZCA8IGFyZ3YuXy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcmd2Ll8uc2xpY2UoZXhwZWN0ZWQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gU3RyaW5nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudENvbnRleHQuY29tbWFuZHMuaW5jbHVkZXMoa2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXVua25vd24uaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93bi5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodW5rbm93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdVbmtub3duIGFyZ3VtZW50OiAlcycsICdVbmtub3duIGFyZ3VtZW50czogJXMnLCB1bmtub3duLmxlbmd0aCwgdW5rbm93bi5tYXAocyA9PiAocy50cmltKCkgPyBzIDogYFwiJHtzfVwiYCkpLmpvaW4oJywgJykpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi51bmtub3duQ29tbWFuZHMgPSBmdW5jdGlvbiB1bmtub3duQ29tbWFuZHMoYXJndikge1xuICAgICAgICBjb25zdCBjb21tYW5kS2V5cyA9IHlhcmdzXG4gICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgIC5nZXRDb21tYW5kSW5zdGFuY2UoKVxuICAgICAgICAgICAgLmdldENvbW1hbmRzKCk7XG4gICAgICAgIGNvbnN0IHVua25vd24gPSBbXTtcbiAgICAgICAgY29uc3QgY3VycmVudENvbnRleHQgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGggPiAwIHx8IGNvbW1hbmRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFyZ3YuXy5zbGljZShjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGgpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbW1hbmRLZXlzLmluY2x1ZGVzKCcnICsga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goJycgKyBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmtub3duLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdVbmtub3duIGNvbW1hbmQ6ICVzJywgJ1Vua25vd24gY29tbWFuZHM6ICVzJywgdW5rbm93bi5sZW5ndGgsIHVua25vd24uam9pbignLCAnKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuaXNWYWxpZEFuZFNvbWVBbGlhc0lzTm90TmV3ID0gZnVuY3Rpb24gaXNWYWxpZEFuZFNvbWVBbGlhc0lzTm90TmV3KGtleSwgYWxpYXNlcykge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbGlhc2VzLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QWxpYXNlcyA9IHlhcmdzLnBhcnNlZC5uZXdBbGlhc2VzO1xuICAgICAgICByZXR1cm4gW2tleSwgLi4uYWxpYXNlc1trZXldXS5zb21lKGEgPT4gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBbGlhc2VzLCBhKSB8fCAhbmV3QWxpYXNlc1trZXldKTtcbiAgICB9O1xuICAgIHNlbGYubGltaXRlZENob2ljZXMgPSBmdW5jdGlvbiBsaW1pdGVkQ2hvaWNlcyhhcmd2KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGludmFsaWQgPSB7fTtcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvcHRpb25zLmNob2ljZXMpLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHNwZWNpYWxLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucy5jaG9pY2VzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgW10uY29uY2F0KGFyZ3Zba2V5XSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNob2ljZXNba2V5XS5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWRba2V5XSA9IChpbnZhbGlkW2tleV0gfHwgW10pLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGludmFsaWRLZXlzID0gT2JqZWN0LmtleXMoaW52YWxpZCk7XG4gICAgICAgIGlmICghaW52YWxpZEtleXMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgbXNnID0gX18oJ0ludmFsaWQgdmFsdWVzOicpO1xuICAgICAgICBpbnZhbGlkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBtc2cgKz0gYFxcbiAgJHtfXygnQXJndW1lbnQ6ICVzLCBHaXZlbjogJXMsIENob2ljZXM6ICVzJywga2V5LCB1c2FnZS5zdHJpbmdpZmllZFZhbHVlcyhpbnZhbGlkW2tleV0pLCB1c2FnZS5zdHJpbmdpZmllZFZhbHVlcyhvcHRpb25zLmNob2ljZXNba2V5XSkpfWA7XG4gICAgICAgIH0pO1xuICAgICAgICB1c2FnZS5mYWlsKG1zZyk7XG4gICAgfTtcbiAgICBsZXQgaW1wbGllZCA9IHt9O1xuICAgIHNlbGYuaW1wbGllcyA9IGZ1bmN0aW9uIGltcGxpZXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW2FycmF5fG51bWJlcnxzdHJpbmddJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbXBsaWVzKGssIGtleVtrXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHlhcmdzLmdsb2JhbChrZXkpO1xuICAgICAgICAgICAgaWYgKCFpbXBsaWVkW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpbXBsaWVkW2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaSA9PiBzZWxmLmltcGxpZXMoa2V5LCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbCh2YWx1ZSwgdW5kZWZpbmVkLCBzaGltKTtcbiAgICAgICAgICAgICAgICBpbXBsaWVkW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuZ2V0SW1wbGllZCA9IGZ1bmN0aW9uIGdldEltcGxpZWQoKSB7XG4gICAgICAgIHJldHVybiBpbXBsaWVkO1xuICAgIH07XG4gICAgZnVuY3Rpb24ga2V5RXhpc3RzKGFyZ3YsIHZhbCkge1xuICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIodmFsKTtcbiAgICAgICAgdmFsID0gaXNOYU4obnVtKSA/IHZhbCA6IG51bTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB2YWwgPSBhcmd2Ll8ubGVuZ3RoID49IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwubWF0Y2goL14tLW5vLS4rLykpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5tYXRjaCgvXi0tbm8tKC4rKS8pWzFdO1xuICAgICAgICAgICAgdmFsID0gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgc2VsZi5pbXBsaWNhdGlvbnMgPSBmdW5jdGlvbiBpbXBsaWNhdGlvbnMoYXJndikge1xuICAgICAgICBjb25zdCBpbXBseUZhaWwgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMoaW1wbGllZCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ0tleSA9IGtleTtcbiAgICAgICAgICAgIChpbXBsaWVkW2tleV0gfHwgW10pLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBvcmlnS2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGtleSA9IGtleUV4aXN0cyhhcmd2LCBrZXkpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0ga2V5RXhpc3RzKGFyZ3YsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbXBseUZhaWwucHVzaChgICR7b3JpZ0tleX0gLT4gJHtvcmlnVmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW1wbHlGYWlsLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IG1zZyA9IGAke19fKCdJbXBsaWNhdGlvbnMgZmFpbGVkOicpfVxcbmA7XG4gICAgICAgICAgICBpbXBseUZhaWwuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbXNnICs9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1c2FnZS5mYWlsKG1zZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCBjb25mbGljdGluZyA9IHt9O1xuICAgIHNlbGYuY29uZmxpY3RzID0gZnVuY3Rpb24gY29uZmxpY3RzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xvYmplY3Q+IFthcnJheXxzdHJpbmddJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25mbGljdHMoaywga2V5W2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWFyZ3MuZ2xvYmFsKGtleSk7XG4gICAgICAgICAgICBpZiAoIWNvbmZsaWN0aW5nW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjb25mbGljdGluZ1trZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGkgPT4gc2VsZi5jb25mbGljdHMoa2V5LCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25mbGljdGluZ1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLmdldENvbmZsaWN0aW5nID0gKCkgPT4gY29uZmxpY3Rpbmc7XG4gICAgc2VsZi5jb25mbGljdGluZyA9IGZ1bmN0aW9uIGNvbmZsaWN0aW5nRm4oYXJndikge1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmxpY3Rpbmdba2V5XSkge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0uZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiBhcmd2W2tleV0gIT09IHVuZGVmaW5lZCAmJiBhcmd2W3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fKCdBcmd1bWVudHMgJXMgYW5kICVzIGFyZSBtdXR1YWxseSBleGNsdXNpdmUnLCBrZXksIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRQYXJzZXJDb25maWd1cmF0aW9uKClbJ3N0cmlwLWRhc2hlZCddKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25mbGljdGluZykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0uZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltzaGltLlBhcnNlci5jYW1lbENhc2Uoa2V5KV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltzaGltLlBhcnNlci5jYW1lbENhc2UodmFsdWUpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fKCdBcmd1bWVudHMgJXMgYW5kICVzIGFyZSBtdXR1YWxseSBleGNsdXNpdmUnLCBrZXksIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLnJlY29tbWVuZENvbW1hbmRzID0gZnVuY3Rpb24gcmVjb21tZW5kQ29tbWFuZHMoY21kLCBwb3RlbnRpYWxDb21tYW5kcykge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAzO1xuICAgICAgICBwb3RlbnRpYWxDb21tYW5kcyA9IHBvdGVudGlhbENvbW1hbmRzLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpO1xuICAgICAgICBsZXQgcmVjb21tZW5kZWQgPSBudWxsO1xuICAgICAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBjYW5kaWRhdGU7IChjYW5kaWRhdGUgPSBwb3RlbnRpYWxDb21tYW5kc1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gZGlzdGFuY2UoY21kLCBjYW5kaWRhdGUpO1xuICAgICAgICAgICAgaWYgKGQgPD0gdGhyZXNob2xkICYmIGQgPCBiZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkO1xuICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkID0gY2FuZGlkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWNvbW1lbmRlZClcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX18oJ0RpZCB5b3UgbWVhbiAlcz8nLCByZWNvbW1lbmRlZCkpO1xuICAgIH07XG4gICAgc2VsZi5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KGxvY2FsTG9va3VwKSB7XG4gICAgICAgIGltcGxpZWQgPSBvYmpGaWx0ZXIoaW1wbGllZCwgayA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICBjb25mbGljdGluZyA9IG9iakZpbHRlcihjb25mbGljdGluZywgayA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIGNvbnN0IGZyb3plbnMgPSBbXTtcbiAgICBzZWxmLmZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICAgICAgZnJvemVucy5wdXNoKHtcbiAgICAgICAgICAgIGltcGxpZWQsXG4gICAgICAgICAgICBjb25mbGljdGluZyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBzZWxmLnVuZnJlZXplID0gZnVuY3Rpb24gdW5mcmVlemUoKSB7XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IGZyb3plbnMucG9wKCk7XG4gICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKGZyb3plbiwgdW5kZWZpbmVkLCBzaGltKTtcbiAgICAgICAgKHsgaW1wbGllZCwgY29uZmxpY3RpbmcgfSA9IGZyb3plbik7XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZjtcbn1cbiIsICJpbXBvcnQgeyBZRXJyb3IgfSBmcm9tICcuLi95ZXJyb3IuanMnO1xubGV0IHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncyA9IFtdO1xubGV0IHNoaW07XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFeHRlbmRzKGNvbmZpZywgY3dkLCBtZXJnZUV4dGVuZHMsIF9zaGltKSB7XG4gICAgc2hpbSA9IF9zaGltO1xuICAgIGxldCBkZWZhdWx0Q29uZmlnID0ge307XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdleHRlbmRzJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuZXh0ZW5kcyAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICAgICAgY29uc3QgaXNQYXRoID0gL1xcLmpzb258XFwuLipyYyQvLnRlc3QoY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICBsZXQgcGF0aFRvRGVmYXVsdCA9IG51bGw7XG4gICAgICAgIGlmICghaXNQYXRoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhdGhUb0RlZmF1bHQgPSByZXF1aXJlLnJlc29sdmUoY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGF0aFRvRGVmYXVsdCA9IGdldFBhdGhUb0RlZmF1bHRDb25maWcoY3dkLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tGb3JDaXJjdWxhckV4dGVuZHMocGF0aFRvRGVmYXVsdCk7XG4gICAgICAgIHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncy5wdXNoKHBhdGhUb0RlZmF1bHQpO1xuICAgICAgICBkZWZhdWx0Q29uZmlnID0gaXNQYXRoXG4gICAgICAgICAgICA/IEpTT04ucGFyc2Uoc2hpbS5yZWFkRmlsZVN5bmMocGF0aFRvRGVmYXVsdCwgJ3V0ZjgnKSlcbiAgICAgICAgICAgIDogcmVxdWlyZShjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuZXh0ZW5kcztcbiAgICAgICAgZGVmYXVsdENvbmZpZyA9IGFwcGx5RXh0ZW5kcyhkZWZhdWx0Q29uZmlnLCBzaGltLnBhdGguZGlybmFtZShwYXRoVG9EZWZhdWx0KSwgbWVyZ2VFeHRlbmRzLCBzaGltKTtcbiAgICB9XG4gICAgcHJldmlvdXNseVZpc2l0ZWRDb25maWdzID0gW107XG4gICAgcmV0dXJuIG1lcmdlRXh0ZW5kc1xuICAgICAgICA/IG1lcmdlRGVlcChkZWZhdWx0Q29uZmlnLCBjb25maWcpXG4gICAgICAgIDogT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbn1cbmZ1bmN0aW9uIGNoZWNrRm9yQ2lyY3VsYXJFeHRlbmRzKGNmZ1BhdGgpIHtcbiAgICBpZiAocHJldmlvdXNseVZpc2l0ZWRDb25maWdzLmluZGV4T2YoY2ZnUGF0aCkgPiAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgWUVycm9yKGBDaXJjdWxhciBleHRlbmRlZCBjb25maWd1cmF0aW9uczogJyR7Y2ZnUGF0aH0nLmApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFBhdGhUb0RlZmF1bHRDb25maWcoY3dkLCBwYXRoVG9FeHRlbmQpIHtcbiAgICByZXR1cm4gc2hpbS5wYXRoLnJlc29sdmUoY3dkLCBwYXRoVG9FeHRlbmQpO1xufVxuZnVuY3Rpb24gbWVyZ2VEZWVwKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmopO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgY29uZmlnMSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY29uZmlnMikpIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGNvbmZpZzJba2V5XSkgJiYgaXNPYmplY3QodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IG1lcmdlRGVlcChjb25maWcxW2tleV0sIGNvbmZpZzJba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGNvbmZpZzJba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuIiwgInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBfWWFyZ3NJbnN0YW5jZV9jd2QsIF9ZYXJnc0luc3RhbmNlX2NvbnRleHQsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBfWWFyZ3NJbnN0YW5jZV9kZWZhdWx0U2hvd0hpZGRlbk9wdCwgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIF9ZYXJnc0luc3RhbmNlX2Zyb3plbnMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQsIF9ZYXJnc0luc3RhbmNlX2xvZ2dlciwgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIF9ZYXJnc0luc3RhbmNlX3BhcnNlQ29udGV4dCwgX1lhcmdzSW5zdGFuY2VfcGtncywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBfWWFyZ3NJbnN0YW5jZV9wcm9jZXNzQXJncywgX1lhcmdzSW5zdGFuY2VfcmVjb21tZW5kQ29tbWFuZHMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbjtcbmltcG9ydCB7IGNvbW1hbmQgYXMgQ29tbWFuZCwgfSBmcm9tICcuL2NvbW1hbmQuanMnO1xuaW1wb3J0IHsgYXNzZXJ0Tm90U3RyaWN0RXF1YWwsIGFzc2VydFNpbmdsZUtleSwgb2JqZWN0S2V5cywgfSBmcm9tICcuL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzJztcbmltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4veWVycm9yLmpzJztcbmltcG9ydCB7IHVzYWdlIGFzIFVzYWdlIH0gZnJvbSAnLi91c2FnZS5qcyc7XG5pbXBvcnQgeyBhcmdzZXJ0IH0gZnJvbSAnLi9hcmdzZXJ0LmpzJztcbmltcG9ydCB7IGNvbXBsZXRpb24gYXMgQ29tcGxldGlvbiwgfSBmcm9tICcuL2NvbXBsZXRpb24uanMnO1xuaW1wb3J0IHsgdmFsaWRhdGlvbiBhcyBWYWxpZGF0aW9uLCB9IGZyb20gJy4vdmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQgeyBvYmpGaWx0ZXIgfSBmcm9tICcuL3V0aWxzL29iai1maWx0ZXIuanMnO1xuaW1wb3J0IHsgYXBwbHlFeHRlbmRzIH0gZnJvbSAnLi91dGlscy9hcHBseS1leHRlbmRzLmpzJztcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgR2xvYmFsTWlkZGxld2FyZSwgfSBmcm9tICcuL21pZGRsZXdhcmUuanMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pcy1wcm9taXNlLmpzJztcbmltcG9ydCB7IG1heWJlQXN5bmNSZXN1bHQgfSBmcm9tICcuL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyc7XG5pbXBvcnQgc2V0QmxvY2tpbmcgZnJvbSAnLi91dGlscy9zZXQtYmxvY2tpbmcuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIFlhcmdzRmFjdG9yeShfc2hpbSkge1xuICAgIHJldHVybiAocHJvY2Vzc0FyZ3MgPSBbXSwgY3dkID0gX3NoaW0ucHJvY2Vzcy5jd2QoKSwgcGFyZW50UmVxdWlyZSkgPT4ge1xuICAgICAgICBjb25zdCB5YXJncyA9IG5ldyBZYXJnc0luc3RhbmNlKHByb2Nlc3NBcmdzLCBjd2QsIHBhcmVudFJlcXVpcmUsIF9zaGltKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHlhcmdzLCAnYXJndicsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB5YXJncy5wYXJzZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB5YXJncy5oZWxwKCk7XG4gICAgICAgIHlhcmdzLnZlcnNpb24oKTtcbiAgICAgICAgcmV0dXJuIHlhcmdzO1xuICAgIH07XG59XG5jb25zdCBrQ29weURvdWJsZURhc2ggPSBTeW1ib2woJ2NvcHlEb3VibGVEYXNoJyk7XG5jb25zdCBrQ3JlYXRlTG9nZ2VyID0gU3ltYm9sKCdjb3B5RG91YmxlRGFzaCcpO1xuY29uc3Qga0RlbGV0ZUZyb21QYXJzZXJIaW50T2JqZWN0ID0gU3ltYm9sKCdkZWxldGVGcm9tUGFyc2VySGludE9iamVjdCcpO1xuY29uc3Qga0VtaXRXYXJuaW5nID0gU3ltYm9sKCdlbWl0V2FybmluZycpO1xuY29uc3Qga0ZyZWV6ZSA9IFN5bWJvbCgnZnJlZXplJyk7XG5jb25zdCBrR2V0RG9sbGFyWmVybyA9IFN5bWJvbCgnZ2V0RG9sbGFyWmVybycpO1xuY29uc3Qga0dldFBhcnNlckNvbmZpZ3VyYXRpb24gPSBTeW1ib2woJ2dldFBhcnNlckNvbmZpZ3VyYXRpb24nKTtcbmNvbnN0IGtHZXRVc2FnZUNvbmZpZ3VyYXRpb24gPSBTeW1ib2woJ2dldFVzYWdlQ29uZmlndXJhdGlvbicpO1xuY29uc3Qga0d1ZXNzTG9jYWxlID0gU3ltYm9sKCdndWVzc0xvY2FsZScpO1xuY29uc3Qga0d1ZXNzVmVyc2lvbiA9IFN5bWJvbCgnZ3Vlc3NWZXJzaW9uJyk7XG5jb25zdCBrUGFyc2VQb3NpdGlvbmFsTnVtYmVycyA9IFN5bWJvbCgncGFyc2VQb3NpdGlvbmFsTnVtYmVycycpO1xuY29uc3Qga1BrZ1VwID0gU3ltYm9sKCdwa2dVcCcpO1xuY29uc3Qga1BvcHVsYXRlUGFyc2VySGludEFycmF5ID0gU3ltYm9sKCdwb3B1bGF0ZVBhcnNlckhpbnRBcnJheScpO1xuY29uc3Qga1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeSA9IFN5bWJvbCgncG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5Jyk7XG5jb25zdCBrUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5ID0gU3ltYm9sKCdwb3B1bGF0ZVBhcnNlckhpbnRBcnJheURpY3Rpb25hcnknKTtcbmNvbnN0IGtQb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5ID0gU3ltYm9sKCdwb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5Jyk7XG5jb25zdCBrU2FuaXRpemVLZXkgPSBTeW1ib2woJ3Nhbml0aXplS2V5Jyk7XG5jb25zdCBrU2V0S2V5ID0gU3ltYm9sKCdzZXRLZXknKTtcbmNvbnN0IGtVbmZyZWV6ZSA9IFN5bWJvbCgndW5mcmVlemUnKTtcbmNvbnN0IGtWYWxpZGF0ZUFzeW5jID0gU3ltYm9sKCd2YWxpZGF0ZUFzeW5jJyk7XG5jb25zdCBrR2V0Q29tbWFuZEluc3RhbmNlID0gU3ltYm9sKCdnZXRDb21tYW5kSW5zdGFuY2UnKTtcbmNvbnN0IGtHZXRDb250ZXh0ID0gU3ltYm9sKCdnZXRDb250ZXh0Jyk7XG5jb25zdCBrR2V0SGFzT3V0cHV0ID0gU3ltYm9sKCdnZXRIYXNPdXRwdXQnKTtcbmNvbnN0IGtHZXRMb2dnZXJJbnN0YW5jZSA9IFN5bWJvbCgnZ2V0TG9nZ2VySW5zdGFuY2UnKTtcbmNvbnN0IGtHZXRQYXJzZUNvbnRleHQgPSBTeW1ib2woJ2dldFBhcnNlQ29udGV4dCcpO1xuY29uc3Qga0dldFVzYWdlSW5zdGFuY2UgPSBTeW1ib2woJ2dldFVzYWdlSW5zdGFuY2UnKTtcbmNvbnN0IGtHZXRWYWxpZGF0aW9uSW5zdGFuY2UgPSBTeW1ib2woJ2dldFZhbGlkYXRpb25JbnN0YW5jZScpO1xuY29uc3Qga0hhc1BhcnNlQ2FsbGJhY2sgPSBTeW1ib2woJ2hhc1BhcnNlQ2FsbGJhY2snKTtcbmNvbnN0IGtJc0dsb2JhbENvbnRleHQgPSBTeW1ib2woJ2lzR2xvYmFsQ29udGV4dCcpO1xuY29uc3Qga1Bvc3RQcm9jZXNzID0gU3ltYm9sKCdwb3N0UHJvY2VzcycpO1xuY29uc3Qga1JlYmFzZSA9IFN5bWJvbCgncmViYXNlJyk7XG5jb25zdCBrUmVzZXQgPSBTeW1ib2woJ3Jlc2V0Jyk7XG5jb25zdCBrUnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHMgPSBTeW1ib2woJ3J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzJyk7XG5jb25zdCBrUnVuVmFsaWRhdGlvbiA9IFN5bWJvbCgncnVuVmFsaWRhdGlvbicpO1xuY29uc3Qga1NldEhhc091dHB1dCA9IFN5bWJvbCgnc2V0SGFzT3V0cHV0Jyk7XG5jb25zdCBrVHJhY2tNYW51YWxseVNldEtleXMgPSBTeW1ib2woJ2tUcmFja01hbnVhbGx5U2V0S2V5cycpO1xuZXhwb3J0IGNsYXNzIFlhcmdzSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb2Nlc3NBcmdzID0gW10sIGN3ZCwgcGFyZW50UmVxdWlyZSwgc2hpbSkge1xuICAgICAgICB0aGlzLmN1c3RvbVNjcmlwdE5hbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY29tbWFuZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY3dkLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LnNldCh0aGlzLCB7IGNvbW1hbmRzOiBbXSwgZnVsbENvbW1hbmRzOiBbXSB9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQuc2V0KHRoaXMsICdzaG93LWhpZGRlbicpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3Iuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUuc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9lbWl0dGVkV2FybmluZ3Muc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3Muc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLnNldCh0aGlzLCBbXSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2dyb3Vwcy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfaGVscE9wdC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2lzR2xvYmFsQ29udGV4dC5zZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2xvZ2dlci5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LnNldCh0aGlzLCAnJyk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BhcmVudFJlcXVpcmUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BhcnNlckNvbmZpZy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcGtncy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3Muc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3JlY29tbWVuZENvbW1hbmRzLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3NoaW0uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3N0cmljdC5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3VzYWdlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBzaGltLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIHByb2Nlc3NBcmdzLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY3dkLCBjd2QsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLCBwYXJlbnRSZXF1aXJlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgbmV3IEdsb2JhbE1pZGRsZXdhcmUodGhpcyksIFwiZlwiKTtcbiAgICAgICAgdGhpcy4kMCA9IHRoaXNba0dldERvbGxhclplcm9dKCk7XG4gICAgICAgIHRoaXNba1Jlc2V0XSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIiksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuc2hvd0hpZGRlbk9wdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIsIHRoaXNba0NyZWF0ZUxvZ2dlcl0oKSwgXCJmXCIpO1xuICAgIH1cbiAgICBhZGRIZWxwT3B0KG9wdCwgbXNnKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRIZWxwT3B0ID0gJ2hlbHAnO1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGJvb2xlYW5dIFtzdHJpbmddJywgW29wdCwgbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKSkge1xuICAgICAgICAgICAgdGhpc1trRGVsZXRlRnJvbVBhcnNlckhpbnRPYmplY3RdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgbnVsbCwgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHQgPT09IGZhbHNlICYmIG1zZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgdHlwZW9mIG9wdCA9PT0gJ3N0cmluZycgPyBvcHQgOiBkZWZhdWx0SGVscE9wdCwgXCJmXCIpO1xuICAgICAgICB0aGlzLmJvb2xlYW4oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIikpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpLCBtc2cgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmRlZmVyWTE4bkxvb2t1cCgnU2hvdyBoZWxwJykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaGVscChvcHQsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRIZWxwT3B0KG9wdCwgbXNnKTtcbiAgICB9XG4gICAgYWRkU2hvd0hpZGRlbk9wdChvcHQsIG1zZykge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGJvb2xlYW5dIFtzdHJpbmddJywgW29wdCwgbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChvcHQgPT09IGZhbHNlICYmIG1zZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGNvbnN0IHNob3dIaWRkZW5PcHQgPSB0eXBlb2Ygb3B0ID09PSAnc3RyaW5nJyA/IG9wdCA6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQsIFwiZlwiKTtcbiAgICAgICAgdGhpcy5ib29sZWFuKHNob3dIaWRkZW5PcHQpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlKHNob3dIaWRkZW5PcHQsIG1zZyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVmZXJZMThuTG9va3VwKCdTaG93IGhpZGRlbiBvcHRpb25zJykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5zaG93SGlkZGVuT3B0ID0gc2hvd0hpZGRlbk9wdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dIaWRkZW4ob3B0LCBtc2cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU2hvd0hpZGRlbk9wdChvcHQsIG1zZyk7XG4gICAgfVxuICAgIGFsaWFzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmd8YXJyYXldJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5XSh0aGlzLmFsaWFzLmJpbmQodGhpcyksICdhbGlhcycsIGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYXJyYXkoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnYXJyYXknLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYm9vbGVhbihrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdib29sZWFuJywga2V5cyk7XG4gICAgICAgIHRoaXNba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNoZWNrKGYsIGdsb2JhbCkge1xuICAgICAgICBhcmdzZXJ0KCc8ZnVuY3Rpb24+IFtib29sZWFuXScsIFtmLCBnbG9iYWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlKChhcmd2LCBfeWFyZ3MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtYXliZUFzeW5jUmVzdWx0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZihhcmd2LCBfeWFyZ3MuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZmFpbChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS55MThuLl9fKCdBcmd1bWVudCBjaGVjayBmYWlsZWQ6ICVzJywgZi50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnIHx8IHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsKHJlc3VsdC50b1N0cmluZygpLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZmFpbChlcnIubWVzc2FnZSA/IGVyci5tZXNzYWdlIDogZXJyLnRvU3RyaW5nKCksIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZmFsc2UsIGdsb2JhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjaG9pY2VzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmd8YXJyYXldJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5XSh0aGlzLmNob2ljZXMuYmluZCh0aGlzKSwgJ2Nob2ljZXMnLCBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvZXJjZShrZXlzLCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW2Z1bmN0aW9uXScsIFtrZXlzLCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoJ2NvZXJjZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2VyY2Uoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Yga2V5cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGtleXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2VyY2Uoa2V5LCBrZXlzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcignY29lcmNlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlba2V5c10gPSB0cnVlO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5hZGRDb2VyY2VNaWRkbGV3YXJlKChhcmd2LCB5YXJncykgPT4ge1xuICAgICAgICAgICAgbGV0IGFsaWFzZXM7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2VyY2UgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndiwga2V5cyk7XG4gICAgICAgICAgICBpZiAoIXNob3VsZENvZXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1heWJlQXN5bmNSZXN1bHQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsaWFzZXMgPSB5YXJncy5nZXRBbGlhc2VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlKGFyZ3Zba2V5c10pO1xuICAgICAgICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGFyZ3Zba2V5c10gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaXBBbGlhc2VkID0geWFyZ3NcbiAgICAgICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgICAgIC5nZXRQYXJzZXJDb25maWd1cmF0aW9uKClbJ3N0cmlwLWFsaWFzZWQnXTtcbiAgICAgICAgICAgICAgICBpZiAoYWxpYXNlc1trZXlzXSAmJiBzdHJpcEFsaWFzZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbGlhcyBvZiBhbGlhc2VzW2tleXNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2W2FsaWFzXSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbmZsaWN0cyhrZXkxLCBrZXkyKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8b2JqZWN0PiBbc3RyaW5nfGFycmF5XScsIFtrZXkxLCBrZXkyXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmNvbmZsaWN0cyhrZXkxLCBrZXkyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbmZpZyhrZXkgPSAnY29uZmlnJywgbXNnLCBwYXJzZUZuKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tvYmplY3R8c3RyaW5nXSBbc3RyaW5nfGZ1bmN0aW9uXSBbZnVuY3Rpb25dJywgW2tleSwgbXNnLCBwYXJzZUZuXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgICBrZXkgPSBhcHBseUV4dGVuZHMoa2V5LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpLCB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpWydkZWVwLW1lcmdlLWNvbmZpZyddIHx8IGZhbHNlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzID0gKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgfHwgW10pLmNvbmNhdChrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHBhcnNlRm4gPSBtc2c7XG4gICAgICAgICAgICBtc2cgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXNjcmliZShrZXksIG1zZyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVmZXJZMThuTG9va3VwKCdQYXRoIHRvIEpTT04gY29uZmlnIGZpbGUnKSk7XG4gICAgICAgIChBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ1trXSA9IHBhcnNlRm4gfHwgdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb21wbGV0aW9uKGNtZCwgZGVzYywgZm4pIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ10gW3N0cmluZ3xib29sZWFufGZ1bmN0aW9uXSBbZnVuY3Rpb25dJywgW2NtZCwgZGVzYywgZm5dLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmbiA9IGRlc2M7XG4gICAgICAgICAgICBkZXNjID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIGNtZCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikgfHwgJ2NvbXBsZXRpb24nLCBcImZcIik7XG4gICAgICAgIGlmICghZGVzYyAmJiBkZXNjICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVzYyA9ICdnZW5lcmF0ZSBjb21wbGV0aW9uIHNjcmlwdCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21tYW5kKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSwgZGVzYyk7XG4gICAgICAgIGlmIChmbilcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLnJlZ2lzdGVyRnVuY3Rpb24oZm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29tbWFuZChjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZCkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfGFycmF5fG9iamVjdD4gW3N0cmluZ3xib29sZWFuXSBbZnVuY3Rpb258b2JqZWN0XSBbZnVuY3Rpb25dIFthcnJheV0gW2Jvb2xlYW58c3RyaW5nXScsIFtjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5hZGRIYW5kbGVyKGNtZCwgZGVzY3JpcHRpb24sIGJ1aWxkZXIsIGhhbmRsZXIsIG1pZGRsZXdhcmVzLCBkZXByZWNhdGVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbW1hbmRzKGNtZCwgZGVzY3JpcHRpb24sIGJ1aWxkZXIsIGhhbmRsZXIsIG1pZGRsZXdhcmVzLCBkZXByZWNhdGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQoY21kLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlciwgbWlkZGxld2FyZXMsIGRlcHJlY2F0ZWQpO1xuICAgIH1cbiAgICBjb21tYW5kRGlyKGRpciwgb3B0cykge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPiBbb2JqZWN0XScsIFtkaXIsIG9wdHNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmVxID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLCBcImZcIikgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucmVxdWlyZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuYWRkRGlyZWN0b3J5KGRpciwgcmVxLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRDYWxsZXJGaWxlKCksIG9wdHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY291bnQoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnY291bnQnLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVmYXVsdChrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFsqXSBbc3RyaW5nXScsIFtrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb25dLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGRlZmF1bHREZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgYXNzZXJ0U2luZ2xlS2V5KGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0gPSBkZWZhdWx0RGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0U2luZ2xlS2V5KGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSlcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSA9XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mdW5jdGlvbkRlc2NyaXB0aW9uKHZhbHVlKTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeV0odGhpcy5kZWZhdWx0LmJpbmQodGhpcyksICdkZWZhdWx0Jywga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWZhdWx0cyhrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdChrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBkZW1hbmRDb21tYW5kKG1pbiA9IDEsIG1heCwgbWluTXNnLCBtYXhNc2cpIHtcbiAgICAgICAgYXJnc2VydCgnW251bWJlcl0gW251bWJlcnxzdHJpbmddIFtzdHJpbmd8bnVsbHx1bmRlZmluZWRdIFtzdHJpbmd8bnVsbHx1bmRlZmluZWRdJywgW21pbiwgbWF4LCBtaW5Nc2csIG1heE1zZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIG1heCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG1pbk1zZyA9IG1heDtcbiAgICAgICAgICAgIG1heCA9IEluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2xvYmFsKCdfJywgZmFsc2UpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZW1hbmRlZENvbW1hbmRzLl8gPSB7XG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICBtaW5Nc2csXG4gICAgICAgICAgICBtYXhNc2csXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZW1hbmQoa2V5cywgbWF4LCBtc2cpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF4KSkge1xuICAgICAgICAgICAgbWF4LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIHRydWUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXksIG1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1heCA9IEluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBtc2cgPSBtYXg7XG4gICAgICAgICAgICBtYXggPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGtleXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIHRydWUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMuZGVtYW5kQ29tbWFuZChrZXlzLCBtYXgsIG1zZywgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIHRydWUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXksIG1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVtYW5kT3B0aW9uKGtleXMsIG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtc2cgPT09IHRydWUgfHwgdHlwZW9mIG1zZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVtYW5kT3B0aW9uKGtleXMsIG1zZykge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW3N0cmluZ10nLCBba2V5cywgbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeV0odGhpcy5kZW1hbmRPcHRpb24uYmluZCh0aGlzKSwgJ2RlbWFuZGVkT3B0aW9ucycsIGtleXMsIG1zZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZXByZWNhdGVPcHRpb24ob3B0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmc+IFtzdHJpbmd8Ym9vbGVhbl0nLCBbb3B0aW9uLCBtZXNzYWdlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmRlcHJlY2F0ZWRPcHRpb25zW29wdGlvbl0gPSBtZXNzYWdlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVzY3JpYmUoa2V5cywgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmddJywgW2tleXMsIGRlc2NyaXB0aW9uXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1NldEtleV0oa2V5cywgdHJ1ZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5kZXNjcmliZShrZXlzLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZXRlY3RMb2NhbGUoZGV0ZWN0KSB7XG4gICAgICAgIGFyZ3NlcnQoJzxib29sZWFuPicsIFtkZXRlY3RdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIGRldGVjdCwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZW52KHByZWZpeCkge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGJvb2xlYW5dJywgW3ByZWZpeF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAocHJlZml4ID09PSBmYWxzZSlcbiAgICAgICAgICAgIGRlbGV0ZSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5lbnZQcmVmaXg7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmVudlByZWZpeCA9IHByZWZpeCB8fCAnJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVwaWxvZ3VlKG1zZykge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPicsIFttc2ddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmVwaWxvZyhtc2cpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZXBpbG9nKG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lcGlsb2d1ZShtc2cpO1xuICAgIH1cbiAgICBleGFtcGxlKGNtZCwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xhcnJheT4gW3N0cmluZ10nLCBbY21kLCBkZXNjcmlwdGlvbl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbWQpKSB7XG4gICAgICAgICAgICBjbWQuZm9yRWFjaChleGFtcGxlUGFyYW1zID0+IHRoaXMuZXhhbXBsZSguLi5leGFtcGxlUGFyYW1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZXhhbXBsZShjbWQsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZXhpdChjb2RlLCBlcnIpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIGVyciwgXCJmXCIpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgIH1cbiAgICBleGl0UHJvY2VzcyhlbmFibGVkID0gdHJ1ZSkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBlbmFibGVkLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmYWlsKGYpIHtcbiAgICAgICAgYXJnc2VydCgnPGZ1bmN0aW9ufGJvb2xlYW4+JywgW2ZdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBmID09PSAnYm9vbGVhbicgJiYgZiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoXCJJbnZhbGlkIGZpcnN0IGFyZ3VtZW50LiBFeHBlY3RlZCBmdW5jdGlvbiBvciBib29sZWFuICdmYWxzZSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmZhaWxGbihmKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldEFsaWFzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlZCA/IHRoaXMucGFyc2VkLmFsaWFzZXMgOiB7fTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q29tcGxldGlvbihhcmdzLCBkb25lKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheT4gW2Z1bmN0aW9uXScsIFthcmdzLCBkb25lXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZXRDb21wbGV0aW9uKGFyZ3MsIChlcnIsIGNvbXBsZXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb21wbGV0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZXRDb21wbGV0aW9uKGFyZ3MsIGRvbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldERlbWFuZGVkT3B0aW9ucygpIHtcbiAgICAgICAgYXJnc2VydChbXSwgMCk7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZW1hbmRlZE9wdGlvbnM7XG4gICAgfVxuICAgIGdldERlbWFuZGVkQ29tbWFuZHMoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVtYW5kZWRDb21tYW5kcztcbiAgICB9XG4gICAgZ2V0RGVwcmVjYXRlZE9wdGlvbnMoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVwcmVjYXRlZE9wdGlvbnM7XG4gICAgfVxuICAgIGdldERldGVjdExvY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLCBcImZcIik7XG4gICAgfVxuICAgIGdldEV4aXRQcm9jZXNzKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRHcm91cHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgXCJmXCIpKTtcbiAgICB9XG4gICAgZ2V0SGVscCgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGFzQ2FjaGVkSGVscE1lc3NhZ2UoKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcnNlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlID0gdGhpc1trUnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHNdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIFwiZlwiKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2UocGFyc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGVscCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyUmVzcG9uc2UgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5ydW5EZWZhdWx0QnVpbGRlck9uKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShidWlsZGVyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJSZXNwb25zZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5oZWxwKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGVscCgpKTtcbiAgICB9XG4gICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRTdHJpY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRTdHJpY3RDb21tYW5kcygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0U3RyaWN0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgXCJmXCIpO1xuICAgIH1cbiAgICBnbG9iYWwoZ2xvYmFscywgZ2xvYmFsKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8YXJyYXk+IFtib29sZWFuXScsIFtnbG9iYWxzLCBnbG9iYWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgZ2xvYmFscyA9IFtdLmNvbmNhdChnbG9iYWxzKTtcbiAgICAgICAgaWYgKGdsb2JhbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwuZmlsdGVyKGwgPT4gZ2xvYmFscy5pbmRleE9mKGwpID09PSAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWxzLmZvckVhY2goZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5sb2NhbC5pbmNsdWRlcyhnKSlcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwucHVzaChnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBncm91cChvcHRzLCBncm91cE5hbWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xhcnJheT4gPHN0cmluZz4nLCBbb3B0cywgZ3JvdXBOYW1lXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMsIFwiZlwiKVtncm91cE5hbWVdIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXSkge1xuICAgICAgICAgICAgZGVsZXRlIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWVuID0ge307XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXSA9IChleGlzdGluZyB8fCBbXSkuY29uY2F0KG9wdHMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlZW5ba2V5XSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gKHNlZW5ba2V5XSA9IHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGhpZGUoa2V5KSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmc+JywgW2tleV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5oaWRkZW5PcHRpb25zLnB1c2goa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGltcGxpZXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW251bWJlcnxzdHJpbmd8YXJyYXldJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuaW1wbGllcyhrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ10nLCBbbG9jYWxlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChsb2NhbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpc1trR3Vlc3NMb2NhbGVdKCk7XG4gICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5nZXRMb2NhbGUoKTtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSwgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5zZXRMb2NhbGUobG9jYWxlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG1pZGRsZXdhcmUoY2FsbGJhY2ssIGFwcGx5QmVmb3JlVmFsaWRhdGlvbiwgZ2xvYmFsKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5hZGRNaWRkbGV3YXJlKGNhbGxiYWNrLCAhIWFwcGx5QmVmb3JlVmFsaWRhdGlvbiwgZ2xvYmFsKTtcbiAgICB9XG4gICAgbmFyZ3Moa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdHxhcnJheT4gW251bWJlcl0nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXMubmFyZ3MuYmluZCh0aGlzKSwgJ25hcmcnLCBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG5vcm1hbGl6ZShrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdub3JtYWxpemUnLCBrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG51bWJlcihrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdudW1iZXInLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb3B0aW9uKGtleSwgb3B0KSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8b2JqZWN0PiBbb2JqZWN0XScsIFtrZXksIG9wdF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMoaywga2V5W2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgb3B0ID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW2tUcmFja01hbnVhbGx5U2V0S2V5c10oa2V5KTtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSAmJiAoa2V5ID09PSAndmVyc2lvbicgfHwgKG9wdCA9PT0gbnVsbCB8fCBvcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdC5hbGlhcykgPT09ICd2ZXJzaW9uJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tFbWl0V2FybmluZ10oW1xuICAgICAgICAgICAgICAgICAgICAnXCJ2ZXJzaW9uXCIgaXMgYSByZXNlcnZlZCB3b3JkLicsXG4gICAgICAgICAgICAgICAgICAgICdQbGVhc2UgZG8gb25lIG9mIHRoZSBmb2xsb3dpbmc6JyxcbiAgICAgICAgICAgICAgICAgICAgJy0gRGlzYWJsZSB2ZXJzaW9uIHdpdGggYHlhcmdzLnZlcnNpb24oZmFsc2UpYCBpZiB1c2luZyBcInZlcnNpb25cIiBhcyBhbiBvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAnLSBVc2UgdGhlIGJ1aWx0LWluIGB5YXJncy52ZXJzaW9uYCBtZXRob2QgaW5zdGVhZCAoaWYgYXBwbGljYWJsZSknLFxuICAgICAgICAgICAgICAgICAgICAnLSBVc2UgYSBkaWZmZXJlbnQgb3B0aW9uIGtleScsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3lhcmdzLmpzLm9yZy9kb2NzLyNhcGktcmVmZXJlbmNlLXZlcnNpb24nLFxuICAgICAgICAgICAgICAgIF0uam9pbignXFxuJyksIHVuZGVmaW5lZCwgJ3ZlcnNpb25XYXJuaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgIHRoaXMuYWxpYXMoa2V5LCBvcHQuYWxpYXMpO1xuICAgICAgICAgICAgY29uc3QgZGVwcmVjYXRlID0gb3B0LmRlcHJlY2F0ZSB8fCBvcHQuZGVwcmVjYXRlZDtcbiAgICAgICAgICAgIGlmIChkZXByZWNhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlcHJlY2F0ZU9wdGlvbihrZXksIGRlcHJlY2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZW1hbmQgPSBvcHQuZGVtYW5kIHx8IG9wdC5yZXF1aXJlZCB8fCBvcHQucmVxdWlyZTtcbiAgICAgICAgICAgIGlmIChkZW1hbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZChrZXksIGRlbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmRlbWFuZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVtYW5kT3B0aW9uKGtleSwgdHlwZW9mIG9wdC5kZW1hbmRPcHRpb24gPT09ICdzdHJpbmcnID8gb3B0LmRlbWFuZE9wdGlvbiA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvbmZsaWN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmxpY3RzKGtleSwgb3B0LmNvbmZsaWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIG9wdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdChrZXksIG9wdC5kZWZhdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQuaW1wbGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsaWVzKGtleSwgb3B0LmltcGxpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5uYXJncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXJncyhrZXksIG9wdC5uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvbmZpZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnKGtleSwgb3B0LmNvbmZpZ1BhcnNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0Lm5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9ybWFsaXplKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNob2ljZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNob2ljZXMoa2V5LCBvcHQuY2hvaWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvZXJjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29lcmNlKGtleSwgb3B0LmNvZXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0Lmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cChrZXksIG9wdC5ncm91cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmJvb2xlYW4gfHwgb3B0LnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9vbGVhbihrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHQuYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbGVhbihvcHQuYWxpYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5hcnJheSB8fCBvcHQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXkoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5KG9wdC5hbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0Lm51bWJlciB8fCBvcHQudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlcihrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHQuYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKG9wdC5hbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LnN0cmluZyB8fCBvcHQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHQuYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nKG9wdC5hbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvdW50IHx8IG9wdC50eXBlID09PSAnY291bnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQuZ2xvYmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbChrZXksIG9wdC5nbG9iYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5kZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSA9IG9wdC5kZWZhdWx0RGVzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LnNraXBWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwVmFsaWRhdGlvbihrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IG9wdC5kZXNjcmliZSB8fCBvcHQuZGVzY3JpcHRpb24gfHwgb3B0LmRlc2M7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbnMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZ2V0RGVzY3JpcHRpb25zKCk7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZXNjcmlwdGlvbnMsIGtleSkgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGVzYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaWJlKGtleSwgZGVzYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmhpZGRlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5yZXF1aXJlc0FyZykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZXNBcmcoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb3B0aW9ucyhrZXksIG9wdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb24oa2V5LCBvcHQpO1xuICAgIH1cbiAgICBwYXJzZShhcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8YXJyYXldIFtmdW5jdGlvbnxib29sZWFufG9iamVjdF0gW2Z1bmN0aW9uXScsIFthcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba0ZyZWV6ZV0oKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXJncyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNob3J0Q2lyY3VpdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBzaG9ydENpcmN1aXQsIFwiZlwiKTtcbiAgICAgICAgICAgIHNob3J0Q2lyY3VpdCA9IF9wYXJzZUZuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2hvcnRDaXJjdWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIHNob3J0Q2lyY3VpdCwgXCJmXCIpO1xuICAgICAgICAgICAgc2hvcnRDaXJjdWl0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaG9ydENpcmN1aXQpXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBhcmdzLCBcImZcIik7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSlcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXShhcmdzLCAhIXNob3J0Q2lyY3VpdCk7XG4gICAgICAgIGNvbnN0IHRtcFBhcnNlZCA9IHRoaXMucGFyc2VkO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5zZXRQYXJzZWQodGhpcy5wYXJzZWQpO1xuICAgICAgICBpZiAoaXNQcm9taXNlKHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRcbiAgICAgICAgICAgICAgICAudGhlbihhcmd2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIikpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIFwiZlwiKSwgYXJndiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKShlcnIsIHRoaXMucGFyc2VkLmFyZ3YsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzW2tVbmZyZWV6ZV0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlZCA9IHRtcFBhcnNlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpKVxuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIFwiZlwiKSwgcGFyc2VkLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXNba1VuZnJlZXplXSgpO1xuICAgICAgICAgICAgdGhpcy5wYXJzZWQgPSB0bXBQYXJzZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gICAgcGFyc2VBc3luYyhhcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuKSB7XG4gICAgICAgIGNvbnN0IG1heWJlUHJvbWlzZSA9IHRoaXMucGFyc2UoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbik7XG4gICAgICAgIHJldHVybiAhaXNQcm9taXNlKG1heWJlUHJvbWlzZSlcbiAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKG1heWJlUHJvbWlzZSlcbiAgICAgICAgICAgIDogbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICBwYXJzZVN5bmMoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbikge1xuICAgICAgICBjb25zdCBtYXliZVByb21pc2UgPSB0aGlzLnBhcnNlKGFyZ3MsIHNob3J0Q2lyY3VpdCwgX3BhcnNlRm4pO1xuICAgICAgICBpZiAoaXNQcm9taXNlKG1heWJlUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoJy5wYXJzZVN5bmMoKSBtdXN0IG5vdCBiZSB1c2VkIHdpdGggYXN5bmNocm9ub3VzIGJ1aWxkZXJzLCBoYW5kbGVycywgb3IgbWlkZGxld2FyZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIHBhcnNlckNvbmZpZ3VyYXRpb24oY29uZmlnKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3Q+JywgW2NvbmZpZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlckNvbmZpZywgY29uZmlnLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwa2dDb25mKGtleSwgcm9vdFBhdGgpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZz4gW3N0cmluZ10nLCBba2V5LCByb290UGF0aF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBsZXQgY29uZiA9IG51bGw7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXNba1BrZ1VwXShyb290UGF0aCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpKTtcbiAgICAgICAgaWYgKG9ialtrZXldICYmIHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmYgPSBhcHBseUV4dGVuZHMob2JqW2tleV0sIHJvb3RQYXRoIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY3dkLCBcImZcIiksIHRoaXNba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKClbJ2RlZXAtbWVyZ2UtY29uZmlnJ10gfHwgZmFsc2UsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgPSAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlnT2JqZWN0cyB8fCBbXSkuY29uY2F0KGNvbmYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwb3NpdGlvbmFsKGtleSwgb3B0cykge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPiA8b2JqZWN0PicsIFtrZXksIG9wdHNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkT3B0cyA9IFtcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgICdkZWZhdWx0RGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2ltcGxpZXMnLFxuICAgICAgICAgICAgJ25vcm1hbGl6ZScsXG4gICAgICAgICAgICAnY2hvaWNlcycsXG4gICAgICAgICAgICAnY29uZmxpY3RzJyxcbiAgICAgICAgICAgICdjb2VyY2UnLFxuICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgJ2Rlc2NyaWJlJyxcbiAgICAgICAgICAgICdkZXNjJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAnYWxpYXMnLFxuICAgICAgICBdO1xuICAgICAgICBvcHRzID0gb2JqRmlsdGVyKG9wdHMsIChrLCB2KSA9PiB7XG4gICAgICAgICAgICBpZiAoayA9PT0gJ3R5cGUnICYmICFbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbiddLmluY2x1ZGVzKHYpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRPcHRzLmluY2x1ZGVzKGspO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZnVsbENvbW1hbmQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbnRleHQsIFwiZlwiKS5mdWxsQ29tbWFuZHNbX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LCBcImZcIikuZnVsbENvbW1hbmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBwYXJzZU9wdGlvbnMgPSBmdWxsQ29tbWFuZFxuICAgICAgICAgICAgPyBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5jbWRUb1BhcnNlT3B0aW9ucyhmdWxsQ29tbWFuZClcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGFycmF5OiBbXSxcbiAgICAgICAgICAgICAgICBhbGlhczoge30sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgICAgICAgICAgZGVtYW5kOiB7fSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIG9iamVjdEtleXMocGFyc2VPcHRpb25zKS5mb3JFYWNoKHBrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlT3B0aW9uID0gcGFyc2VPcHRpb25zW3BrXTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlT3B0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZU9wdGlvbi5pbmRleE9mKGtleSkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBvcHRzW3BrXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VPcHRpb25ba2V5XSAmJiAhKHBrIGluIG9wdHMpKVxuICAgICAgICAgICAgICAgICAgICBvcHRzW3BrXSA9IHBhcnNlT3B0aW9uW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyb3VwKGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbihrZXksIG9wdHMpO1xuICAgIH1cbiAgICByZWNvbW1lbmRDb21tYW5kcyhyZWNvbW1lbmQgPSB0cnVlKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFuXScsIFtyZWNvbW1lbmRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcywgcmVjb21tZW5kLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXF1aXJlZChrZXlzLCBtYXgsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kZW1hbmQoa2V5cywgbWF4LCBtc2cpO1xuICAgIH1cbiAgICByZXF1aXJlKGtleXMsIG1heCwgbXNnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbWFuZChrZXlzLCBtYXgsIG1zZyk7XG4gICAgfVxuICAgIHJlcXVpcmVzQXJnKGtleXMpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fHN0cmluZ3xvYmplY3Q+IFtudW1iZXJdJywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlzID09PSAnc3RyaW5nJyAmJiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5uYXJnW2tleXNdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeV0odGhpcy5yZXF1aXJlc0FyZy5iaW5kKHRoaXMpLCAnbmFyZycsIGtleXMsIE5hTik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dDb21wbGV0aW9uU2NyaXB0KCQwLCBjbWQpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ10gW3N0cmluZ10nLCBbJDAsIGNtZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICAkMCA9ICQwIHx8IHRoaXMuJDA7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIikubG9nKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLmdlbmVyYXRlQ29tcGxldGlvblNjcmlwdCgkMCwgY21kIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSB8fCAnY29tcGxldGlvbicpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dIZWxwKGxldmVsKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8ZnVuY3Rpb25dJywgW2xldmVsXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmhhc0NhY2hlZEhlbHBNZXNzYWdlKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJzZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZSA9IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBcImZcIiksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKHBhcnNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5zaG93SGVscChsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyUmVzcG9uc2UgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5ydW5EZWZhdWx0QnVpbGRlck9uKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShidWlsZGVyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRlclJlc3BvbnNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHAobGV2ZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5zaG93SGVscChsZXZlbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzY3JpcHROYW1lKHNjcmlwdE5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXN0b21TY3JpcHROYW1lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kMCA9IHNjcmlwdE5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93SGVscE9uRmFpbChlbmFibGVkLCBtZXNzYWdlKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFufHN0cmluZ10gW3N0cmluZ10nLCBbZW5hYmxlZCwgbWVzc2FnZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHBPbkZhaWwoZW5hYmxlZCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93VmVyc2lvbihsZXZlbCkge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGZ1bmN0aW9uXScsIFtsZXZlbF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd1ZlcnNpb24obGV2ZWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2tpcFZhbGlkYXRpb24oa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnc2tpcFZhbGlkYXRpb24nLCBrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmljdChlbmFibGVkKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFuXScsIFtlbmFibGVkXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0LCBlbmFibGVkICE9PSBmYWxzZSwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RyaWN0Q29tbWFuZHMoZW5hYmxlZCkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBlbmFibGVkICE9PSBmYWxzZSwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RyaWN0T3B0aW9ucyhlbmFibGVkKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFuXScsIFtlbmFibGVkXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgZW5hYmxlZCAhPT0gZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmluZyhrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdzdHJpbmcnLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGVybWluYWxXaWR0aCgpIHtcbiAgICAgICAgYXJnc2VydChbXSwgMCk7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLnN0ZENvbHVtbnM7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsZShvYmopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlU3RyaW5ncyhvYmopO1xuICAgIH1cbiAgICB1cGRhdGVTdHJpbmdzKG9iaikge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0PicsIFtvYmpdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4udXBkYXRlTG9jYWxlKG9iaik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1c2FnZShtc2csIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8bnVsbHx1bmRlZmluZWQ+IFtzdHJpbmd8Ym9vbGVhbl0gW2Z1bmN0aW9ufG9iamVjdF0gW2Z1bmN0aW9uXScsIFttc2csIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIG51bGwsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIGlmICgobXNnIHx8ICcnKS5tYXRjaCgvXlxcJDAoIHwkKS8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZChtc2csIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoJy51c2FnZSgpIGRlc2NyaXB0aW9uIG11c3Qgc3RhcnQgd2l0aCAkMCBpZiBiZWluZyB1c2VkIGFzIGFsaWFzIGZvciAuY29tbWFuZCgpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikudXNhZ2UobXNnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVzYWdlQ29uZmlndXJhdGlvbihjb25maWcpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdD4nLCBbY29uZmlnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2VDb25maWcsIGNvbmZpZywgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmVyc2lvbihvcHQsIG1zZywgdmVyKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWZXJzaW9uT3B0ID0gJ3ZlcnNpb24nO1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbnxzdHJpbmddIFtzdHJpbmddIFtzdHJpbmddJywgW29wdCwgbXNnLCB2ZXJdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICB0aGlzW2tEZWxldGVGcm9tUGFyc2VySGludE9iamVjdF0oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnZlcnNpb24odW5kZWZpbmVkKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgbnVsbCwgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB2ZXIgPSB0aGlzW2tHdWVzc1ZlcnNpb25dKCk7XG4gICAgICAgICAgICBvcHQgPSBkZWZhdWx0VmVyc2lvbk9wdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAob3B0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVyID0gb3B0O1xuICAgICAgICAgICAgb3B0ID0gZGVmYXVsdFZlcnNpb25PcHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdmVyID0gbXNnO1xuICAgICAgICAgICAgbXNnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgdHlwZW9mIG9wdCA9PT0gJ3N0cmluZycgPyBvcHQgOiBkZWZhdWx0VmVyc2lvbk9wdCwgXCJmXCIpO1xuICAgICAgICBtc2cgPSBtc2cgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmRlZmVyWTE4bkxvb2t1cCgnU2hvdyB2ZXJzaW9uIG51bWJlcicpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikudmVyc2lvbih2ZXIgfHwgdW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5ib29sZWFuKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgXCJmXCIpKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSwgbXNnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHdyYXAoY29scykge1xuICAgICAgICBhcmdzZXJ0KCc8bnVtYmVyfG51bGx8dW5kZWZpbmVkPicsIFtjb2xzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS53cmFwKGNvbHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgWyhfWWFyZ3NJbnN0YW5jZV9jb21tYW5kID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfY3dkID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfY29udGV4dCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24gPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2RlZmF1bHRTaG93SGlkZGVuT3B0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZW1pdHRlZFdhcm5pbmdzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2dyb3VwcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcGFyZW50UmVxdWlyZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3BhcnNlckNvbmZpZyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4gPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wa2dzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3NoaW0gPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3VzYWdlQ29uZmlnID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24gPSBuZXcgV2Vha01hcCgpLCBrQ29weURvdWJsZURhc2gpXShhcmd2KSB7XG4gICAgICAgIGlmICghYXJndi5fIHx8ICFhcmd2WyctLSddKVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgIGFyZ3YuXy5wdXNoLmFwcGx5KGFyZ3YuXywgYXJndlsnLS0nXSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZWxldGUgYXJndlsnLS0nXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2VycikgeyB9XG4gICAgICAgIHJldHVybiBhcmd2O1xuICAgIH1cbiAgICBba0NyZWF0ZUxvZ2dlcl0oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzW2tIYXNQYXJzZUNhbGxiYWNrXSgpKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikgKyAnXFxuJywgXCJmXCIpO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpICsgYXJncy5qb2luKCcgJyksIFwiZlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXNba0hhc1BhcnNlQ2FsbGJhY2tdKCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpICsgJ1xcbicsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSArIGFyZ3Muam9pbignICcpLCBcImZcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBba0RlbGV0ZUZyb21QYXJzZXJIaW50T2JqZWN0XShvcHRpb25LZXkpIHtcbiAgICAgICAgb2JqZWN0S2V5cyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKSkuZm9yRWFjaCgoaGludEtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCgoa2V5KSA9PiBrZXkgPT09ICdjb25maWdPYmplY3RzJykoaGludEtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgaGludCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW2hpbnRLZXldO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGludCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGludC5pbmNsdWRlcyhvcHRpb25LZXkpKVxuICAgICAgICAgICAgICAgICAgICBoaW50LnNwbGljZShoaW50LmluZGV4T2Yob3B0aW9uS2V5KSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgaGludCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgaGludFtvcHRpb25LZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5nZXREZXNjcmlwdGlvbnMoKVtvcHRpb25LZXldO1xuICAgIH1cbiAgICBba0VtaXRXYXJuaW5nXSh3YXJuaW5nLCB0eXBlLCBkZWR1cGxpY2F0aW9uSWQpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncywgXCJmXCIpW2RlZHVwbGljYXRpb25JZF0pIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuZW1pdFdhcm5pbmcod2FybmluZywgdHlwZSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncywgXCJmXCIpW2RlZHVwbGljYXRpb25JZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtrRnJlZXplXSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLCBcImZcIikucHVzaCh7XG4gICAgICAgICAgICBvcHRpb25zOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKSxcbiAgICAgICAgICAgIGNvbmZpZ09iamVjdHM6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMuc2xpY2UoMCksXG4gICAgICAgICAgICBleGl0UHJvY2VzczogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpLFxuICAgICAgICAgICAgZ3JvdXBzOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpLFxuICAgICAgICAgICAgc3RyaWN0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgXCJmXCIpLFxuICAgICAgICAgICAgc3RyaWN0Q29tbWFuZHM6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIFwiZlwiKSxcbiAgICAgICAgICAgIHN0cmljdE9wdGlvbnM6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgXCJmXCIpLFxuICAgICAgICAgICAgY29tcGxldGlvbkNvbW1hbmQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSxcbiAgICAgICAgICAgIG91dHB1dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSxcbiAgICAgICAgICAgIGV4aXRFcnJvcjogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIFwiZlwiKSxcbiAgICAgICAgICAgIGhhc091dHB1dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIFwiZlwiKSxcbiAgICAgICAgICAgIHBhcnNlZDogdGhpcy5wYXJzZWQsXG4gICAgICAgICAgICBwYXJzZUZuOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSxcbiAgICAgICAgICAgIHBhcnNlQ29udGV4dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIFwiZlwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mcmVlemUoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5mcmVlemUoKTtcbiAgICB9XG4gICAgW2tHZXREb2xsYXJaZXJvXSgpIHtcbiAgICAgICAgbGV0ICQwID0gJyc7XG4gICAgICAgIGxldCBkZWZhdWx0JDA7XG4gICAgICAgIGlmICgvXFxiKG5vZGV8aW9qc3xlbGVjdHJvbikoXFwuZXhlKT8kLy50ZXN0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuYXJndigpWzBdKSkge1xuICAgICAgICAgICAgZGVmYXVsdCQwID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5hcmd2KCkuc2xpY2UoMSwgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWZhdWx0JDAgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmFyZ3YoKS5zbGljZSgwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICAkMCA9IGRlZmF1bHQkMFxuICAgICAgICAgICAgLm1hcCh4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0aGlzW2tSZWJhc2VdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY3dkLCBcImZcIiksIHgpO1xuICAgICAgICAgICAgcmV0dXJuIHgubWF0Y2goL14oXFwvfChbYS16QS1aXTopP1xcXFwpLykgJiYgYi5sZW5ndGggPCB4Lmxlbmd0aCA/IGIgOiB4O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJyAnKVxuICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLmdldEVudignXycpICYmXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRQcm9jZXNzQXJndkJpbigpID09PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ18nKSkge1xuICAgICAgICAgICAgJDAgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKVxuICAgICAgICAgICAgICAgIC5nZXRFbnYoJ18nKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnBhdGguZGlybmFtZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmV4ZWNQYXRoKCkpfS9gLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQwO1xuICAgIH1cbiAgICBba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRVc2FnZUNvbmZpZ3VyYXRpb25dKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZywgXCJmXCIpO1xuICAgIH1cbiAgICBba0d1ZXNzTG9jYWxlXSgpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSwgXCJmXCIpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBsb2NhbGUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xDX0FMTCcpIHx8XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xDX01FU1NBR0VTJykgfHxcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLmdldEVudignTEFORycpIHx8XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xBTkdVQUdFJykgfHxcbiAgICAgICAgICAgICdlbl9VUyc7XG4gICAgICAgIHRoaXMubG9jYWxlKGxvY2FsZS5yZXBsYWNlKC9bLjpdLiovLCAnJykpO1xuICAgIH1cbiAgICBba0d1ZXNzVmVyc2lvbl0oKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXNba1BrZ1VwXSgpO1xuICAgICAgICByZXR1cm4gb2JqLnZlcnNpb24gfHwgJ3Vua25vd24nO1xuICAgIH1cbiAgICBba1BhcnNlUG9zaXRpb25hbE51bWJlcnNdKGFyZ3YpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3ZbJy0tJ10gPyBhcmd2WyctLSddIDogYXJndi5fO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgYXJnOyAoYXJnID0gYXJnc1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuUGFyc2VyLmxvb2tzTGlrZU51bWJlcihhcmcpICYmXG4gICAgICAgICAgICAgICAgTnVtYmVyLmlzU2FmZUludGVnZXIoTWF0aC5mbG9vcihwYXJzZUZsb2F0KGAke2FyZ31gKSkpKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IE51bWJlcihhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmd2O1xuICAgIH1cbiAgICBba1BrZ1VwXShyb290UGF0aCkge1xuICAgICAgICBjb25zdCBucGF0aCA9IHJvb3RQYXRoIHx8ICcqJztcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGtncywgXCJmXCIpW25wYXRoXSlcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF07XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBzdGFydERpciA9IHJvb3RQYXRoIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLm1haW5GaWxlbmFtZTtcbiAgICAgICAgICAgIGlmICghcm9vdFBhdGggJiYgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucGF0aC5leHRuYW1lKHN0YXJ0RGlyKSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0RGlyID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucGF0aC5kaXJuYW1lKHN0YXJ0RGlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBrZ0pzb25QYXRoID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZmluZFVwKHN0YXJ0RGlyLCAoZGlyLCBuYW1lcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lcy5pbmNsdWRlcygncGFja2FnZS5qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwYWNrYWdlLmpzb24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKHBrZ0pzb25QYXRoLCB1bmRlZmluZWQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIG9iaiA9IEpTT04ucGFyc2UoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucmVhZEZpbGVTeW5jKHBrZ0pzb25QYXRoLCAndXRmOCcpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX25vb3ApIHsgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF0gPSBvYmogfHwge307XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF07XG4gICAgfVxuICAgIFtrUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKHR5cGUsIGtleXMpIHtcbiAgICAgICAga2V5cyA9IFtdLmNvbmNhdChrZXlzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBrZXkgPSB0aGlzW2tTYW5pdGl6ZUtleV0oa2V5KTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW3R5cGVdLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFtrUG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludERpY3Rpb25hcnldKGJ1aWxkZXIsIHR5cGUsIGtleSwgdmFsdWUsICh0eXBlLCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVt0eXBlXVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBba1BvcHVsYXRlUGFyc2VySGludEFycmF5RGljdGlvbmFyeV0oYnVpbGRlciwgdHlwZSwga2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlLCAodHlwZSwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIilbdHlwZV1ba2V5XSA9IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVt0eXBlXVtrZXldIHx8IFtdKS5jb25jYXQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgW2tQb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlLCBzaW5nbGVLZXlIYW5kbGVyKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgICAgIGtleS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIoaywgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKChrZXkpID0+IHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKShrZXkpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgb2Ygb2JqZWN0S2V5cyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRlcihrLCBrZXlba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2luZ2xlS2V5SGFuZGxlcih0eXBlLCB0aGlzW2tTYW5pdGl6ZUtleV0oa2V5KSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtrU2FuaXRpemVLZXldKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJylcbiAgICAgICAgICAgIHJldHVybiAnX19fcHJvdG9fX18nO1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICBba1NldEtleV0oa2V5LCBzZXQpIHtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5XSh0aGlzW2tTZXRLZXldLmJpbmQodGhpcyksICdrZXknLCBrZXksIHNldCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBba1VuZnJlZXplXSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX207XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZnJvemVucywgXCJmXCIpLnBvcCgpO1xuICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChmcm96ZW4sIHVuZGVmaW5lZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICBsZXQgY29uZmlnT2JqZWN0cztcbiAgICAgICAgKF9hID0gdGhpcywgX2IgPSB0aGlzLCBfYyA9IHRoaXMsIF9kID0gdGhpcywgX2UgPSB0aGlzLCBfZiA9IHRoaXMsIF9nID0gdGhpcywgX2ggPSB0aGlzLCBfaiA9IHRoaXMsIF9rID0gdGhpcywgX2wgPSB0aGlzLCBfbSA9IHRoaXMsIHtcbiAgICAgICAgICAgIG9wdGlvbnM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9hLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgY29uZmlnT2JqZWN0cyxcbiAgICAgICAgICAgIGV4aXRQcm9jZXNzOiAoeyBzZXQgdmFsdWUoX28pIHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldChfYiwgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBncm91cHM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9jLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBvdXRwdXQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9kLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBleGl0RXJyb3I6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9lLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBoYXNPdXRwdXQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9mLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBwYXJzZWQ6IHRoaXMucGFyc2VkLFxuICAgICAgICAgICAgc3RyaWN0OiAoeyBzZXQgdmFsdWUoX28pIHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldChfZywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0LCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgc3RyaWN0Q29tbWFuZHM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9oLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcywgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIHN0cmljdE9wdGlvbnM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9qLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgY29tcGxldGlvbkNvbW1hbmQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9rLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIHBhcnNlRm46ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9sLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgcGFyc2VDb250ZXh0OiAoeyBzZXQgdmFsdWUoX28pIHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldChfbSwgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICB9ID0gZnJvemVuKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlnT2JqZWN0cyA9IGNvbmZpZ09iamVjdHM7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgIH1cbiAgICBba1ZhbGlkYXRlQXN5bmNdKHZhbGlkYXRpb24sIGFyZ3YpIHtcbiAgICAgICAgcmV0dXJuIG1heWJlQXN5bmNSZXN1bHQoYXJndiwgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbnRlcm5hbE1ldGhvZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRDb21tYW5kSW5zdGFuY2U6IHRoaXNba0dldENvbW1hbmRJbnN0YW5jZV0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldENvbnRleHQ6IHRoaXNba0dldENvbnRleHRdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRIYXNPdXRwdXQ6IHRoaXNba0dldEhhc091dHB1dF0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldExvZ2dlckluc3RhbmNlOiB0aGlzW2tHZXRMb2dnZXJJbnN0YW5jZV0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFBhcnNlQ29udGV4dDogdGhpc1trR2V0UGFyc2VDb250ZXh0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0UGFyc2VyQ29uZmlndXJhdGlvbjogdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFVzYWdlQ29uZmlndXJhdGlvbjogdGhpc1trR2V0VXNhZ2VDb25maWd1cmF0aW9uXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0VXNhZ2VJbnN0YW5jZTogdGhpc1trR2V0VXNhZ2VJbnN0YW5jZV0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFZhbGlkYXRpb25JbnN0YW5jZTogdGhpc1trR2V0VmFsaWRhdGlvbkluc3RhbmNlXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaGFzUGFyc2VDYWxsYmFjazogdGhpc1trSGFzUGFyc2VDYWxsYmFja10uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGlzR2xvYmFsQ29udGV4dDogdGhpc1trSXNHbG9iYWxDb250ZXh0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcG9zdFByb2Nlc3M6IHRoaXNba1Bvc3RQcm9jZXNzXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcmVzZXQ6IHRoaXNba1Jlc2V0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcnVuVmFsaWRhdGlvbjogdGhpc1trUnVuVmFsaWRhdGlvbl0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHJ1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzOiB0aGlzW2tSdW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kc10uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNldEhhc091dHB1dDogdGhpc1trU2V0SGFzT3V0cHV0XS5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBba0dldENvbW1hbmRJbnN0YW5jZV0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRDb250ZXh0XSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29udGV4dCwgXCJmXCIpO1xuICAgIH1cbiAgICBba0dldEhhc091dHB1dF0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgXCJmXCIpO1xuICAgIH1cbiAgICBba0dldExvZ2dlckluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0UGFyc2VDb250ZXh0XSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBcImZcIikgfHwge307XG4gICAgfVxuICAgIFtrR2V0VXNhZ2VJbnN0YW5jZV0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0VmFsaWRhdGlvbkluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpO1xuICAgIH1cbiAgICBba0hhc1BhcnNlQ2FsbGJhY2tdKCkge1xuICAgICAgICByZXR1cm4gISFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKTtcbiAgICB9XG4gICAgW2tJc0dsb2JhbENvbnRleHRdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tQb3N0UHJvY2Vzc10oYXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCBjYWxsZWRGcm9tQ29tbWFuZCwgcnVuR2xvYmFsTWlkZGxld2FyZSkge1xuICAgICAgICBpZiAoY2FsbGVkRnJvbUNvbW1hbmQpXG4gICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShhcmd2KSlcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICBpZiAoIXBvcHVsYXRlRG91YmxlRGFzaCkge1xuICAgICAgICAgICAgYXJndiA9IHRoaXNba0NvcHlEb3VibGVEYXNoXShhcmd2KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZVBvc2l0aW9uYWxOdW1iZXJzID0gdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0oKVsncGFyc2UtcG9zaXRpb25hbC1udW1iZXJzJ10gfHxcbiAgICAgICAgICAgIHRoaXNba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKClbJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyddID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwYXJzZVBvc2l0aW9uYWxOdW1iZXJzKSB7XG4gICAgICAgICAgICBhcmd2ID0gdGhpc1trUGFyc2VQb3NpdGlvbmFsTnVtYmVyc10oYXJndik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bkdsb2JhbE1pZGRsZXdhcmUpIHtcbiAgICAgICAgICAgIGFyZ3YgPSBhcHBseU1pZGRsZXdhcmUoYXJndiwgdGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuZ2V0TWlkZGxld2FyZSgpLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgfVxuICAgIFtrUmVzZXRdKGFsaWFzZXMgPSB7fSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpIHx8IHt9LCBcImZcIik7XG4gICAgICAgIGNvbnN0IHRtcE9wdGlvbnMgPSB7fTtcbiAgICAgICAgdG1wT3B0aW9ucy5sb2NhbCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsIHx8IFtdO1xuICAgICAgICB0bXBPcHRpb25zLmNvbmZpZ09iamVjdHMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzIHx8IFtdO1xuICAgICAgICBjb25zdCBsb2NhbExvb2t1cCA9IHt9O1xuICAgICAgICB0bXBPcHRpb25zLmxvY2FsLmZvckVhY2gobCA9PiB7XG4gICAgICAgICAgICBsb2NhbExvb2t1cFtsXSA9IHRydWU7XG4gICAgICAgICAgICAoYWxpYXNlc1tsXSB8fCBbXSkuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhbExvb2t1cFthXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMsIFwiZlwiKSwgT2JqZWN0LmtleXMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIFwiZlwiKSkucmVkdWNlKChhY2MsIGdyb3VwTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXS5maWx0ZXIoa2V5ID0+ICEoa2V5IGluIGxvY2FsTG9va3VwKSk7XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWNjW2dyb3VwTmFtZV0gPSBrZXlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIHt9LCBcImZcIik7XG4gICAgICAgIGNvbnN0IGFycmF5T3B0aW9ucyA9IFtcbiAgICAgICAgICAgICdhcnJheScsXG4gICAgICAgICAgICAnYm9vbGVhbicsXG4gICAgICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgICAgICdza2lwVmFsaWRhdGlvbicsXG4gICAgICAgICAgICAnY291bnQnLFxuICAgICAgICAgICAgJ25vcm1hbGl6ZScsXG4gICAgICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgICAgICdoaWRkZW5PcHRpb25zJyxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgb2JqZWN0T3B0aW9ucyA9IFtcbiAgICAgICAgICAgICduYXJnJyxcbiAgICAgICAgICAgICdrZXknLFxuICAgICAgICAgICAgJ2FsaWFzJyxcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgICdkZWZhdWx0RGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2NvbmZpZycsXG4gICAgICAgICAgICAnY2hvaWNlcycsXG4gICAgICAgICAgICAnZGVtYW5kZWRPcHRpb25zJyxcbiAgICAgICAgICAgICdkZW1hbmRlZENvbW1hbmRzJyxcbiAgICAgICAgICAgICdkZXByZWNhdGVkT3B0aW9ucycsXG4gICAgICAgIF07XG4gICAgICAgIGFycmF5T3B0aW9ucy5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgdG1wT3B0aW9uc1trXSA9IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVtrXSB8fCBbXSkuZmlsdGVyKChrKSA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqZWN0T3B0aW9ucy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICB0bXBPcHRpb25zW2tdID0gb2JqRmlsdGVyKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW2tdLCBrID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0bXBPcHRpb25zLmVudlByZWZpeCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmVudlByZWZpeDtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCB0bXBPcHRpb25zLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKVxuICAgICAgICAgICAgPyBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikucmVzZXQobG9jYWxMb29rdXApXG4gICAgICAgICAgICA6IFVzYWdlKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpXG4gICAgICAgICAgICA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnJlc2V0KGxvY2FsTG9va3VwKVxuICAgICAgICAgICAgOiBWYWxpZGF0aW9uKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIilcbiAgICAgICAgICAgID8gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucmVzZXQoKVxuICAgICAgICAgICAgOiBDb21tYW5kKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSksIFwiZlwiKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKSlcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgQ29tcGxldGlvbih0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikucmVzZXQoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgbnVsbCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgJycsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIG51bGwsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIHRoaXMucGFyc2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBba1JlYmFzZV0oYmFzZSwgZGlyKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wYXRoLnJlbGF0aXZlKGJhc2UsIGRpcik7XG4gICAgfVxuICAgIFtrUnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHNdKGFyZ3MsIHNob3J0Q2lyY3VpdCwgY2FsbGVkRnJvbUNvbW1hbmQsIGNvbW1hbmRJbmRleCA9IDAsIGhlbHBPbmx5ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHNraXBWYWxpZGF0aW9uID0gISFjYWxsZWRGcm9tQ29tbWFuZCB8fCBoZWxwT25seTtcbiAgICAgICAgYXJncyA9IGFyZ3MgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcm9jZXNzQXJncywgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5fXyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4uX187XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ3VyYXRpb24gPSB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpO1xuICAgICAgICBjb25zdCBwb3B1bGF0ZURvdWJsZURhc2ggPSAhIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ3VyYXRpb25bJ3BvcHVsYXRlLS0nXTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlndXJhdGlvbiwge1xuICAgICAgICAgICAgJ3BvcHVsYXRlLS0nOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuUGFyc2VyLmRldGFpbGVkKGFyZ3MsIE9iamVjdC5hc3NpZ24oe30sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLCB7XG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiB7ICdwYXJzZS1wb3NpdGlvbmFsLW51bWJlcnMnOiBmYWxzZSwgLi4uY29uZmlnIH0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgYXJndiA9IE9iamVjdC5hc3NpZ24ocGFyc2VkLmFyZ3YsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBcImZcIikpO1xuICAgICAgICBsZXQgYXJndlByb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGFsaWFzZXMgPSBwYXJzZWQuYWxpYXNlcztcbiAgICAgICAgbGV0IGhlbHBPcHRTZXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZlcnNpb25PcHRTZXQgPSBmYWxzZTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIikgJiYgYXJndltrZXldKSB7XG4gICAgICAgICAgICAgICAgaGVscE9wdFNldCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgXCJmXCIpICYmIGFyZ3Zba2V5XSkge1xuICAgICAgICAgICAgICAgIHZlcnNpb25PcHRTZXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXJndi4kMCA9IHRoaXMuJDA7XG4gICAgICAgIHRoaXMucGFyc2VkID0gcGFyc2VkO1xuICAgICAgICBpZiAoY29tbWFuZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuY2xlYXJDYWNoZWRIZWxwTWVzc2FnZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzW2tHdWVzc0xvY2FsZV0oKTtcbiAgICAgICAgICAgIGlmIChzaG9ydENpcmN1aXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trUG9zdFByb2Nlc3NdKGFyZ3YsIHBvcHVsYXRlRG91YmxlRGFzaCwgISFjYWxsZWRGcm9tQ29tbWFuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVscENtZHMgPSBbX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIildXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQoYWxpYXNlc1tfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKV0gfHwgW10pXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoayA9PiBrLmxlbmd0aCA+IDEpO1xuICAgICAgICAgICAgICAgIGlmIChoZWxwQ21kcy5pbmNsdWRlcygnJyArIGFyZ3YuX1thcmd2Ll8ubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3YuXy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgaGVscE9wdFNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQsIGZhbHNlLCBcImZcIik7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyS2V5cyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmdldENvbW1hbmRzKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0Q29tcGxldGlvbnMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5jb21wbGV0aW9uS2V5IGluIGFyZ3Y7XG4gICAgICAgICAgICBjb25zdCBza2lwUmVjb21tZW5kYXRpb24gPSBoZWxwT3B0U2V0IHx8IHJlcXVlc3RDb21wbGV0aW9ucyB8fCBoZWxwT25seTtcbiAgICAgICAgICAgIGlmIChhcmd2Ll8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RVbmtub3duQ29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbW1hbmRJbmRleCB8fCAwLCBjbWQ7IGFyZ3YuX1tpXSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtZCA9IFN0cmluZyhhcmd2Ll9baV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJLZXlzLmluY2x1ZGVzKGNtZCkgJiYgY21kICE9PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbm5lckFyZ3YgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5ydW5Db21tYW5kKGNtZCwgdGhpcywgcGFyc2VkLCBpICsgMSwgaGVscE9ubHksIGhlbHBPcHRTZXQgfHwgdmVyc2lvbk9wdFNldCB8fCBoZWxwT25seSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba1Bvc3RQcm9jZXNzXShpbm5lckFyZ3YsIHBvcHVsYXRlRG91YmxlRGFzaCwgISFjYWxsZWRGcm9tQ29tbWFuZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWZpcnN0VW5rbm93bkNvbW1hbmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbWQgIT09IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VW5rbm93bkNvbW1hbmQgPSBjbWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5oYXNEZWZhdWx0Q29tbWFuZCgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3JlY29tbWVuZENvbW1hbmRzLCBcImZcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VW5rbm93bkNvbW1hbmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFza2lwUmVjb21tZW5kYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnJlY29tbWVuZENvbW1hbmRzKGZpcnN0VW5rbm93bkNvbW1hbmQsIGhhbmRsZXJLZXlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgXCJmXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGFyZ3YuXy5pbmNsdWRlcyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikpICYmXG4gICAgICAgICAgICAgICAgICAgICFyZXF1ZXN0Q29tcGxldGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJsb2NraW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wbGV0aW9uU2NyaXB0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuaGFzRGVmYXVsdENvbW1hbmQoKSAmJiAhc2tpcFJlY29tbWVuZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXJBcmd2ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucnVuQ29tbWFuZChudWxsLCB0aGlzLCBwYXJzZWQsIDAsIGhlbHBPbmx5LCBoZWxwT3B0U2V0IHx8IHZlcnNpb25PcHRTZXQgfHwgaGVscE9ubHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tQb3N0UHJvY2Vzc10oaW5uZXJBcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsICEhY2FsbGVkRnJvbUNvbW1hbmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Q29tcGxldGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgICAgICAgICBzZXRCbG9ja2luZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBhcmdzID0gW10uY29uY2F0KGFyZ3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRpb25BcmdzID0gYXJncy5zbGljZShhcmdzLmluZGV4T2YoYC0tJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5jb21wbGV0aW9uS2V5fWApICsgMSk7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikuZ2V0Q29tcGxldGlvbihjb21wbGV0aW9uQXJncywgKGVyciwgY29tcGxldGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAoY29tcGxldGlvbnMgfHwgW10pLmZvckVhY2goY29tcGxldGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2xvZ2dlciwgXCJmXCIpLmxvZyhjb21wbGV0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trUG9zdFByb2Nlc3NdKGFyZ3YsICFwb3B1bGF0ZURvdWJsZURhc2gsICEhY2FsbGVkRnJvbUNvbW1hbmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIGlmIChoZWxwT3B0U2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBcImZcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCbG9ja2luZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2tpcFZhbGlkYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIZWxwKCdsb2cnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2ZXJzaW9uT3B0U2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBcImZcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCbG9ja2luZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2tpcFZhbGlkYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd1ZlcnNpb24oJ2xvZycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFza2lwVmFsaWRhdGlvbiAmJiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5za2lwVmFsaWRhdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc2tpcFZhbGlkYXRpb24gPSBPYmplY3Qua2V5cyhhcmd2KS5zb21lKGtleSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5za2lwVmFsaWRhdGlvbi5pbmRleE9mKGtleSkgPj0gMCAmJiBhcmd2W2tleV0gPT09IHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFza2lwVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQuZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IocGFyc2VkLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdENvbXBsZXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzW2tSdW5WYWxpZGF0aW9uXShhbGlhc2VzLCB7fSwgcGFyc2VkLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxsZWRGcm9tQ29tbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndlByb21pc2UgPSBhcHBseU1pZGRsZXdhcmUoYXJndiwgdGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuZ2V0TWlkZGxld2FyZSgpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmd2UHJvbWlzZSA9IHRoaXNba1ZhbGlkYXRlQXN5bmNdKHZhbGlkYXRpb24sIGFyZ3ZQcm9taXNlICE9PSBudWxsICYmIGFyZ3ZQcm9taXNlICE9PSB2b2lkIDAgPyBhcmd2UHJvbWlzZSA6IGFyZ3YpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKGFyZ3ZQcm9taXNlKSAmJiAhY2FsbGVkRnJvbUNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3ZQcm9taXNlID0gYXJndlByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZShhcmd2LCB0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5nZXRNaWRkbGV3YXJlKCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBZRXJyb3IpXG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmZhaWwoZXJyLm1lc3NhZ2UsIGVycik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzW2tQb3N0UHJvY2Vzc10oYXJndlByb21pc2UgIT09IG51bGwgJiYgYXJndlByb21pc2UgIT09IHZvaWQgMCA/IGFyZ3ZQcm9taXNlIDogYXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCAhIWNhbGxlZEZyb21Db21tYW5kLCB0cnVlKTtcbiAgICB9XG4gICAgW2tSdW5WYWxpZGF0aW9uXShhbGlhc2VzLCBwb3NpdGlvbmFsTWFwLCBwYXJzZUVycm9ycywgaXNEZWZhdWx0Q29tbWFuZCkge1xuICAgICAgICBjb25zdCBkZW1hbmRlZE9wdGlvbnMgPSB7IC4uLnRoaXMuZ2V0RGVtYW5kZWRPcHRpb25zKCkgfTtcbiAgICAgICAgcmV0dXJuIChhcmd2KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VFcnJvcnMpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihwYXJzZUVycm9ycy5tZXNzYWdlKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLm5vbk9wdGlvbkNvdW50KGFyZ3YpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikucmVxdWlyZWRBcmd1bWVudHMoYXJndiwgZGVtYW5kZWRPcHRpb25zKTtcbiAgICAgICAgICAgIGxldCBmYWlsZWRTdHJpY3RDb21tYW5kcyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIGZhaWxlZFN0cmljdENvbW1hbmRzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikudW5rbm93bkNvbW1hbmRzKGFyZ3YpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0LCBcImZcIikgJiYgIWZhaWxlZFN0cmljdENvbW1hbmRzKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikudW5rbm93bkFyZ3VtZW50cyhhcmd2LCBhbGlhc2VzLCBwb3NpdGlvbmFsTWFwLCAhIWlzRGVmYXVsdENvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zLCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS51bmtub3duQXJndW1lbnRzKGFyZ3YsIGFsaWFzZXMsIHt9LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikubGltaXRlZENob2ljZXMoYXJndik7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5pbXBsaWNhdGlvbnMoYXJndik7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5jb25mbGljdGluZyhhcmd2KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgW2tTZXRIYXNPdXRwdXRdKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgdHJ1ZSwgXCJmXCIpO1xuICAgIH1cbiAgICBba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmtleVtrZXlzXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmtleVtrXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNZYXJnc0luc3RhbmNlKHkpIHtcbiAgICByZXR1cm4gISF5ICYmIHR5cGVvZiB5LmdldEludGVybmFsTWV0aG9kcyA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbi8vIEJvb3RzdHJhcHMgeWFyZ3MgZm9yIEVTTTpcbmltcG9ydCBlc21QbGF0Zm9ybVNoaW0gZnJvbSAnLi9saWIvcGxhdGZvcm0tc2hpbXMvZXNtLm1qcyc7XG5pbXBvcnQge1lhcmdzRmFjdG9yeX0gZnJvbSAnLi9idWlsZC9saWIveWFyZ3MtZmFjdG9yeS5qcyc7XG5cbmNvbnN0IFlhcmdzID0gWWFyZ3NGYWN0b3J5KGVzbVBsYXRmb3JtU2hpbSk7XG5leHBvcnQgZGVmYXVsdCBZYXJncztcbiIsICJpbXBvcnQge2FwcGx5RXh0ZW5kcyBhcyBfYXBwbHlFeHRlbmRzfSBmcm9tICcuLi9idWlsZC9saWIvdXRpbHMvYXBwbHktZXh0ZW5kcy5qcyc7XG5pbXBvcnQge2hpZGVCaW59IGZyb20gJy4uL2J1aWxkL2xpYi91dGlscy9wcm9jZXNzLWFyZ3YuanMnO1xuaW1wb3J0IFBhcnNlciBmcm9tICd5YXJncy1wYXJzZXInO1xuaW1wb3J0IHNoaW0gZnJvbSAnLi4vbGliL3BsYXRmb3JtLXNoaW1zL2VzbS5tanMnO1xuXG5jb25zdCBhcHBseUV4dGVuZHMgPSAoY29uZmlnLCBjd2QsIG1lcmdlRXh0ZW5kcykgPT4ge1xuICByZXR1cm4gX2FwcGx5RXh0ZW5kcyhjb25maWcsIGN3ZCwgbWVyZ2VFeHRlbmRzLCBzaGltKTtcbn07XG5cbmV4cG9ydCB7YXBwbHlFeHRlbmRzLCBoaWRlQmluLCBQYXJzZXJ9O1xuIiwgImNvbnN0IEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTl9FTkNSWVBURUQgPSAnZW5jcnlwdGVkJztcclxuY29uc3QgRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX01ERU5DID0gJ21kZW5jJztcclxuXHJcbmV4cG9ydCBjb25zdCBFTkNSWVBURURfRklMRV9FWFRFTlNJT05fREVGQVVMVCA9IEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTl9NREVOQztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OUyA9IFtcclxuXHRFTkNSWVBURURfRklMRV9FWFRFTlNJT05fTURFTkMsXHJcblx0RU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX0VOQ1JZUFRFRFxyXG5dOyIsICJcclxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfQiA9ICclJVx1RDgzRFx1REQxMFx1MDNCMiAnO1xyXG5leHBvcnQgY29uc3QgX1BSRUZJWF9CX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwXHUwM0IyICc7XHJcblxyXG5leHBvcnQgY29uc3QgX1BSRUZJWF9BID0gJyUlXHVEODNEXHVERDEwXHUwM0IxICc7XHJcbmV4cG9ydCBjb25zdCBfUFJFRklYX0FfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjEgJztcclxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfT0JTT0xFVEUgPSAnJSVcdUQ4M0RcdUREMTAgJztcclxuXHJcbmV4cG9ydCBjb25zdCBfUFJFRklYX0VOQ09ERV9ERUZBVUxUID0gX1BSRUZJWF9CO1xyXG5leHBvcnQgY29uc3QgX1BSRUZJWF9FTkNPREVfREVGQVVMVF9WSVNJQkxFID0gX1BSRUZJWF9CX1ZJU0lCTEU7XHJcblxyXG4vLyBTaG91bGQgYmUgbGlzdGVkIGJ5IGV2YWx1YXRpb24gcHJpb3JpdHlcclxuZXhwb3J0IGNvbnN0IF9QUkVGSVhFUyA9IFtcclxuXHRfUFJFRklYX0IsXHJcblx0X1BSRUZJWF9CX1ZJU0lCTEUsXHJcblx0X1BSRUZJWF9BLFxyXG5cdF9QUkVGSVhfQV9WSVNJQkxFLFxyXG5cdF9QUkVGSVhfT0JTT0xFVEUsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgX1NVRkZJWF9XSVRIX0NPTU1FTlQgPSAnIFx1RDgzRFx1REQxMCUlJztcclxuZXhwb3J0IGNvbnN0IF9TVUZGSVhfTk9fQ09NTUVOVCA9ICcgXHVEODNEXHVERDEwJztcclxuXHJcbi8vIFNob3VsZCBiZSBsaXN0ZWQgYnkgZXZhbHVhdGlvbiBwcmlvcml0eVxyXG5leHBvcnQgY29uc3QgX1NVRkZJWEVTID0gW1xyXG5cdF9TVUZGSVhfV0lUSF9DT01NRU5ULFxyXG5cdF9TVUZGSVhfTk9fQ09NTUVOVFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgX0hJTlQgPSAnXHVEODNEXHVEQ0ExJzsiLCAiaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnXHJcbmltcG9ydCB7IGhpZGVCaW4gfSBmcm9tICd5YXJncy9oZWxwZXJzJ1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbi8vaW1wb3J0IHsgQ3J5cHRvSGVscGVyRmFjdG9yeSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9DcnlwdG9IZWxwZXJGYWN0b3J5JztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJ3NyYy9zZXJ2aWNlcy9Db25zdGFudHMnO1xyXG5pbXBvcnQgKiBhcyBJblBsYWNlQ29uc3RhbnRzIGZyb20gJ3NyYy9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9GZWF0dXJlSW5wbGFjZUNvbnN0YW50cyc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdGluZyB7XHJcbiAgICBmZWF0dXJlVHlwZTogJ0luUGxhY2UnIHwgJ1dob2xlTm90ZSc7XHJcbiAgICBmdWxsUGF0aDogc3RyaW5nO1xyXG4gICAgcmVsYXRpdmVQYXRoOiBzdHJpbmc7XHJcbiAgICBleHRlbnNpb246IHN0cmluZztcclxuICAgIC8vY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBMaXN0Q29tbWFuZEhhbmRsZXIge1xyXG4gICAgXHJcblxyXG4gICAgYXN5bmMgYXJnSGFuZGxlciggZm9ybWF0IDogc3RyaW5nICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggJ2FyZ0hhbmRsZXInLCB7IGZvcm1hdCB9ICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBsaXN0aW5ncyA9IGF3YWl0IHRoaXMuZmV0Y2hMaXN0aW5ncyggY3dkICk7XHJcblxyXG4gICAgICAgIHRoaXMub3V0cHV0TGlzdGluZ3MoIGxpc3RpbmdzLCBmb3JtYXQgKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG91dHB1dExpc3RpbmdzKGxpc3RpbmdzOiBMaXN0aW5nW10sIGZvcm1hdDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmIChmb3JtYXQgPT0gJ2NzdicpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdmZWF0dXJlLGZ1bGxQYXRoLHJlbGF0aXZlUGF0aCxleHRlbnNpb24sJyApO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGwgb2YgbGlzdGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBgXCIke2wuZmVhdHVyZVR5cGV9XCIsXCIke2wuZnVsbFBhdGh9XCIsXCIke2wucmVsYXRpdmVQYXRofVwiLFwiJHtsLmV4dGVuc2lvbn1cImAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChmb3JtYXQgPT0gJ2pzb24nKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCBsaXN0aW5ncywgbnVsbCwgMiApICk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS50YWJsZSggbGlzdGluZ3MgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZmV0Y2hMaXN0aW5ncyggZGlyIDogc3RyaW5nICkgOiBQcm9taXNlPExpc3RpbmdbXT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coICdmZXRjaExpc3RpbmdzJywgZGlyICk7XHJcbiAgICAgICAgY29uc3QgbGlzdGluZyA6IExpc3RpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHAgb2YgVXRpbHMud2FsayggZGlyICkpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSAnLicgKyBwYXRoLnNlcCArIHBhdGgucmVsYXRpdmUoZGlyLCBwKTtcclxuICAgICAgICAgICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKHApLnRvTG93ZXJDYXNlKCkuc2xpY2UoMSk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICggIVsnbWQnLCAuLi5Db25zdGFudHMuRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OU10uaW5jbHVkZXMoIGV4dCApICl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICggZXh0ID09ICdtZCcgKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZSggcCwgJ3V0ZjgnICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5pbmNsdWRlcyggSW5QbGFjZUNvbnN0YW50cy5fUFJFRklYX0FfVklTSUJMRSApXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgY29udGVudC5pbmNsdWRlcyggSW5QbGFjZUNvbnN0YW50cy5fUFJFRklYX0JfVklTSUJMRSApXHJcbiAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmcucHVzaCgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ0luUGxhY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsUGF0aDogcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnRlbnQ6IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsaXN0aW5nLnB1c2goIHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnV2hvbGVOb3RlJyxcclxuICAgICAgICAgICAgICAgIGZ1bGxQYXRoOiBwLFxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGgsXHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb246IGV4dCxcclxuICAgICAgICAgICAgICAgIC8vY29udGVudDogY29udGVudFxyXG4gICAgICAgICAgICB9IClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlzdGluZztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFV0aWxze1xyXG4gICAgc3RhdGljIGFzeW5jICogd2FsayggZGlyIDogc3RyaW5nICkgOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8c3RyaW5nPiB7XHJcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBkIG9mIGF3YWl0IGZzLnByb21pc2VzLm9wZW5kaXIoZGlyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHBhdGguam9pbihkaXIsIGQubmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChkLmlzRGlyZWN0b3J5KCkpIHlpZWxkKiBVdGlscy53YWxrKGVudHJ5KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZC5pc0ZpbGUoKSkgeWllbGQgZW50cnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBvcHRQYXNzd29yZExpc3QgOiB5YXJncy5PcHRpb25zICA9IHtcclxuICAgIGRlbWFuZE9wdGlvbjogdHJ1ZSxcclxuICAgIGFsaWFzOiAncHcnLFxyXG4gICAgZGVzY3JpYmU6ICdwYXNzd29yZHMgdG8gdXNlJyxcclxuICAgIHR5cGU6ICdhcnJheScsXHJcbn1cclxuXHJcbmNvbnN0IG9wdExpc3RpbmdGb3JtYXQgOiB5YXJncy5PcHRpb25zID0ge1xyXG4gICAgYWxpYXM6ICdmJyxcclxuICAgIGRlc2NyaWJlOiAnZm9ybWF0IG9mIHRoZSBsaXN0aW5nJyxcclxuICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgY2hvaWNlczogWyd0YWJsZScsICdqc29uJywgJ2NzdiddLFxyXG4gICAgZGVmYXVsdDogJ3RhYmxlJyxcclxuICAgIGRlbWFuZE9wdGlvbjogdHJ1ZSxcclxufVxyXG5cclxuY29uc3QgY21kTGlzdEhhbmRsZXIgPSBuZXcgTGlzdENvbW1hbmRIYW5kbGVyKCk7XHJcblxyXG55YXJncy5kZWZhdWx0KGhpZGVCaW4ocHJvY2Vzcy5hcmd2KSlcclxuICAgIC51c2FnZSggJ1VzYWdlOiAkMCBbY29tbWFuZF0gW29wdGlvbnNdJyApXHJcbiAgICAuY29tbWFuZCggJ2xpc3QnLCAnbGlzdCBhbGwgZW5jcnlwdGVkIGFydGlmYWN0cyB3aXRoaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5JywgKHlhcmdzKSA9PiB5YXJncy5vcHRpb24oIHtcclxuICAgICAgICBmb3JtYXQ6IG9wdExpc3RpbmdGb3JtYXRcclxuICAgIH0gKSwgKGFyZ3YpID0+IGNtZExpc3RIYW5kbGVyLmFyZ0hhbmRsZXIoYXJndi5mb3JtYXQgYXMgc3RyaW5nICkgKVxyXG4gICAgXHJcbiAgICAuY29tbWFuZChbJ3Rlc3QnLCAnY2hlY2snXSwgJ2NoZWNrIHRoYXQgYWxsIG5vdGVzIGNhbiBiZSBkZWNyeXB0ZWQgd2l0aCB0aGUgZ2l2ZW4gcGFzc3dvcmQgbGlzdCcsICh5YXJncykgPT4geWFyZ3Mub3B0aW9uKCAge1xyXG4gICAgICAgIHBhc3N3b3Jkczogb3B0UGFzc3dvcmRMaXN0XHJcbiAgICB9ICkgKVxyXG4gICAgXHJcbiAgICAuY29tbWFuZCgnZGVjcnlwdCcsICdkZWNyeXB0IG5vdGVzIGdpdmVuIGEgcGFzc3dvcmQgbGlzdCBhbmQgYW4gb3V0cHV0IGRpcmVjdG9yeScsICAoeWFyZ3MpID0+IHlhcmdzLm9wdGlvbiggIHtcclxuICAgICAgICBwYXNzd29yZHM6IG9wdFBhc3N3b3JkTGlzdCxcclxuICAgICAgICBvdXRkaXI6IHtcclxuICAgICAgICAgICAgYWxpYXM6ICdvJyxcclxuICAgICAgICAgICAgZGVzY3JpYmU6ICdvdXRwdXQgZGlyZWN0b3J5JyxcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlbWFuZE9wdGlvbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0gKSApXHJcbiAgICBcclxuICAgIC5kZW1hbmRDb21tYW5kKClcclxuICAgIC5oZWxwKClcclxuICAgIC53cmFwKCBudWxsIClcclxuICAgIC5leGFtcGxlKFtcclxuICAgICAgICBbJyQwIGxpc3QnLCAnUHJvY2Vzc2VzIGFsbCAqLm1kIGFuZCAqLm1kZW5jIGZpbGVzIGFuZCBsaXN0IGFueSBlbmNyeXB0ZWQgYXJ0aWZhY3RzIHdpdGhpbiB0aGUgY3VycmVudCBkaXJlY3RvcnknXSxcclxuICAgICAgICBbJyQwIHRlc3QgLS1wYXNzd29yZHMgcHcxIHB3MicsICdjaGVjayB0aGF0IGFsbCBub3RlcyBjYW4gYmUgZGVjcnlwdGVkIHdpdGggdGhlIGdpdmVuIHBhc3N3b3JkIGxpc3QnXSxcclxuICAgICAgICBbJyQwIGRlY3J5cHQgLS1wYXNzd29yZHMgcHcxIHB3MiAtLW91dGRpciBvdXQnLCAnZGVjcnlwdCBub3RlcyBnaXZlbiBhIHBhc3N3b3JkIGxpc3QgYW5kIGFuIG91dHB1dCBkaXJlY3RvcnknXSxcclxu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
