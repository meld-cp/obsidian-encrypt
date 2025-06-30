var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "node_modules/emoji-regex/index.js"(exports, module) {
    module.exports = () => {
      return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    };
  }
});

// node_modules/get-caller-file/index.js
var require_get_caller_file = __commonJS({
  "node_modules/get-caller-file/index.js"(exports, module) {
    "use strict";
    module.exports = function getCallerFile2(position) {
      if (position === void 0) {
        position = 2;
      }
      if (position >= Error.stackTraceLimit) {
        throw new TypeError("getCallerFile(position) requires position be less then Error.stackTraceLimit but position was: `" + position + "` and Error.stackTraceLimit was: `" + Error.stackTraceLimit + "`");
      }
      var oldPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = function(_, stack2) {
        return stack2;
      };
      var stack = new Error().stack;
      Error.prepareStackTrace = oldPrepareStackTrace;
      if (stack !== null && typeof stack === "object") {
        return stack[position] ? stack[position].getFileName() : void 0;
      }
    };
  }
});

// node_modules/yargs/lib/platform-shims/esm.mjs
import { notStrictEqual, strictEqual } from "assert";

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
  // if the full 'source' can render in
  // the target line, do so.
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

// node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const pattern = [
    `[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?${ST})`,
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}

// node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex, "");
}

// node_modules/get-east-asian-width/lookup.js
function isAmbiguous(x) {
  return x === 161 || x === 164 || x === 167 || x === 168 || x === 170 || x === 173 || x === 174 || x >= 176 && x <= 180 || x >= 182 && x <= 186 || x >= 188 && x <= 191 || x === 198 || x === 208 || x === 215 || x === 216 || x >= 222 && x <= 225 || x === 230 || x >= 232 && x <= 234 || x === 236 || x === 237 || x === 240 || x === 242 || x === 243 || x >= 247 && x <= 250 || x === 252 || x === 254 || x === 257 || x === 273 || x === 275 || x === 283 || x === 294 || x === 295 || x === 299 || x >= 305 && x <= 307 || x === 312 || x >= 319 && x <= 322 || x === 324 || x >= 328 && x <= 331 || x === 333 || x === 338 || x === 339 || x === 358 || x === 359 || x === 363 || x === 462 || x === 464 || x === 466 || x === 468 || x === 470 || x === 472 || x === 474 || x === 476 || x === 593 || x === 609 || x === 708 || x === 711 || x >= 713 && x <= 715 || x === 717 || x === 720 || x >= 728 && x <= 731 || x === 733 || x === 735 || x >= 768 && x <= 879 || x >= 913 && x <= 929 || x >= 931 && x <= 937 || x >= 945 && x <= 961 || x >= 963 && x <= 969 || x === 1025 || x >= 1040 && x <= 1103 || x === 1105 || x === 8208 || x >= 8211 && x <= 8214 || x === 8216 || x === 8217 || x === 8220 || x === 8221 || x >= 8224 && x <= 8226 || x >= 8228 && x <= 8231 || x === 8240 || x === 8242 || x === 8243 || x === 8245 || x === 8251 || x === 8254 || x === 8308 || x === 8319 || x >= 8321 && x <= 8324 || x === 8364 || x === 8451 || x === 8453 || x === 8457 || x === 8467 || x === 8470 || x === 8481 || x === 8482 || x === 8486 || x === 8491 || x === 8531 || x === 8532 || x >= 8539 && x <= 8542 || x >= 8544 && x <= 8555 || x >= 8560 && x <= 8569 || x === 8585 || x >= 8592 && x <= 8601 || x === 8632 || x === 8633 || x === 8658 || x === 8660 || x === 8679 || x === 8704 || x === 8706 || x === 8707 || x === 8711 || x === 8712 || x === 8715 || x === 8719 || x === 8721 || x === 8725 || x === 8730 || x >= 8733 && x <= 8736 || x === 8739 || x === 8741 || x >= 8743 && x <= 8748 || x === 8750 || x >= 8756 && x <= 8759 || x === 8764 || x === 8765 || x === 8776 || x === 8780 || x === 8786 || x === 8800 || x === 8801 || x >= 8804 && x <= 8807 || x === 8810 || x === 8811 || x === 8814 || x === 8815 || x === 8834 || x === 8835 || x === 8838 || x === 8839 || x === 8853 || x === 8857 || x === 8869 || x === 8895 || x === 8978 || x >= 9312 && x <= 9449 || x >= 9451 && x <= 9547 || x >= 9552 && x <= 9587 || x >= 9600 && x <= 9615 || x >= 9618 && x <= 9621 || x === 9632 || x === 9633 || x >= 9635 && x <= 9641 || x === 9650 || x === 9651 || x === 9654 || x === 9655 || x === 9660 || x === 9661 || x === 9664 || x === 9665 || x >= 9670 && x <= 9672 || x === 9675 || x >= 9678 && x <= 9681 || x >= 9698 && x <= 9701 || x === 9711 || x === 9733 || x === 9734 || x === 9737 || x === 9742 || x === 9743 || x === 9756 || x === 9758 || x === 9792 || x === 9794 || x === 9824 || x === 9825 || x >= 9827 && x <= 9829 || x >= 9831 && x <= 9834 || x === 9836 || x === 9837 || x === 9839 || x === 9886 || x === 9887 || x === 9919 || x >= 9926 && x <= 9933 || x >= 9935 && x <= 9939 || x >= 9941 && x <= 9953 || x === 9955 || x === 9960 || x === 9961 || x >= 9963 && x <= 9969 || x === 9972 || x >= 9974 && x <= 9977 || x === 9979 || x === 9980 || x === 9982 || x === 9983 || x === 10045 || x >= 10102 && x <= 10111 || x >= 11094 && x <= 11097 || x >= 12872 && x <= 12879 || x >= 57344 && x <= 63743 || x >= 65024 && x <= 65039 || x === 65533 || x >= 127232 && x <= 127242 || x >= 127248 && x <= 127277 || x >= 127280 && x <= 127337 || x >= 127344 && x <= 127373 || x === 127375 || x === 127376 || x >= 127387 && x <= 127404 || x >= 917760 && x <= 917999 || x >= 983040 && x <= 1048573 || x >= 1048576 && x <= 1114109;
}
function isFullWidth(x) {
  return x === 12288 || x >= 65281 && x <= 65376 || x >= 65504 && x <= 65510;
}
function isWide(x) {
  return x >= 4352 && x <= 4447 || x === 8986 || x === 8987 || x === 9001 || x === 9002 || x >= 9193 && x <= 9196 || x === 9200 || x === 9203 || x === 9725 || x === 9726 || x === 9748 || x === 9749 || x >= 9776 && x <= 9783 || x >= 9800 && x <= 9811 || x === 9855 || x >= 9866 && x <= 9871 || x === 9875 || x === 9889 || x === 9898 || x === 9899 || x === 9917 || x === 9918 || x === 9924 || x === 9925 || x === 9934 || x === 9940 || x === 9962 || x === 9970 || x === 9971 || x === 9973 || x === 9978 || x === 9981 || x === 9989 || x === 9994 || x === 9995 || x === 10024 || x === 10060 || x === 10062 || x >= 10067 && x <= 10069 || x === 10071 || x >= 10133 && x <= 10135 || x === 10160 || x === 10175 || x === 11035 || x === 11036 || x === 11088 || x === 11093 || x >= 11904 && x <= 11929 || x >= 11931 && x <= 12019 || x >= 12032 && x <= 12245 || x >= 12272 && x <= 12287 || x >= 12289 && x <= 12350 || x >= 12353 && x <= 12438 || x >= 12441 && x <= 12543 || x >= 12549 && x <= 12591 || x >= 12593 && x <= 12686 || x >= 12688 && x <= 12773 || x >= 12783 && x <= 12830 || x >= 12832 && x <= 12871 || x >= 12880 && x <= 42124 || x >= 42128 && x <= 42182 || x >= 43360 && x <= 43388 || x >= 44032 && x <= 55203 || x >= 63744 && x <= 64255 || x >= 65040 && x <= 65049 || x >= 65072 && x <= 65106 || x >= 65108 && x <= 65126 || x >= 65128 && x <= 65131 || x >= 94176 && x <= 94180 || x === 94192 || x === 94193 || x >= 94208 && x <= 100343 || x >= 100352 && x <= 101589 || x >= 101631 && x <= 101640 || x >= 110576 && x <= 110579 || x >= 110581 && x <= 110587 || x === 110589 || x === 110590 || x >= 110592 && x <= 110882 || x === 110898 || x >= 110928 && x <= 110930 || x === 110933 || x >= 110948 && x <= 110951 || x >= 110960 && x <= 111355 || x >= 119552 && x <= 119638 || x >= 119648 && x <= 119670 || x === 126980 || x === 127183 || x === 127374 || x >= 127377 && x <= 127386 || x >= 127488 && x <= 127490 || x >= 127504 && x <= 127547 || x >= 127552 && x <= 127560 || x === 127568 || x === 127569 || x >= 127584 && x <= 127589 || x >= 127744 && x <= 127776 || x >= 127789 && x <= 127797 || x >= 127799 && x <= 127868 || x >= 127870 && x <= 127891 || x >= 127904 && x <= 127946 || x >= 127951 && x <= 127955 || x >= 127968 && x <= 127984 || x === 127988 || x >= 127992 && x <= 128062 || x === 128064 || x >= 128066 && x <= 128252 || x >= 128255 && x <= 128317 || x >= 128331 && x <= 128334 || x >= 128336 && x <= 128359 || x === 128378 || x === 128405 || x === 128406 || x === 128420 || x >= 128507 && x <= 128591 || x >= 128640 && x <= 128709 || x === 128716 || x >= 128720 && x <= 128722 || x >= 128725 && x <= 128727 || x >= 128732 && x <= 128735 || x === 128747 || x === 128748 || x >= 128756 && x <= 128764 || x >= 128992 && x <= 129003 || x === 129008 || x >= 129292 && x <= 129338 || x >= 129340 && x <= 129349 || x >= 129351 && x <= 129535 || x >= 129648 && x <= 129660 || x >= 129664 && x <= 129673 || x >= 129679 && x <= 129734 || x >= 129742 && x <= 129756 || x >= 129759 && x <= 129769 || x >= 129776 && x <= 129784 || x >= 131072 && x <= 196605 || x >= 196608 && x <= 262141;
}

// node_modules/get-east-asian-width/index.js
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}

// node_modules/string-width/index.js
var import_emoji_regex = __toESM(require_emoji_regex(), 1);
var segmenter = new Intl.Segmenter();
var defaultIgnorableCodePointRegex = new RegExp("^\\p{Default_Ignorable_Code_Point}$", "u");
function stringWidth(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment: character } of segmenter.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex.test(character)) {
      continue;
    }
    if ((0, import_emoji_regex.default)().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}

// node_modules/wrap-ansi/node_modules/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value: (red, green, blue) => {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value: (hex) => {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value: (code) => {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/wrap-ansi/index.js
var ESCAPES = /* @__PURE__ */ new Set([
  "\x1B",
  "\x9B"
]);
var END_CODE = 39;
var ANSI_ESCAPE_BELL = "\x07";
var ANSI_CSI = "[";
var ANSI_OSC = "]";
var ANSI_SGR_TERMINATOR = "m";
var ANSI_ESCAPE_LINK = `${ANSI_OSC}8;;`;
var wrapAnsiCode = (code) => `${ESCAPES.values().next().value}${ANSI_CSI}${code}${ANSI_SGR_TERMINATOR}`;
var wrapAnsiHyperlink = (url) => `${ESCAPES.values().next().value}${ANSI_ESCAPE_LINK}${url}${ANSI_ESCAPE_BELL}`;
var wordLengths = (string) => string.split(" ").map((character) => stringWidth(character));
var wrapWord = (rows, word, columns) => {
  const characters = [...word];
  let isInsideEscape = false;
  let isInsideLinkEscape = false;
  let visible = stringWidth(stripAnsi(rows.at(-1)));
  for (const [index, character] of characters.entries()) {
    const characterLength = stringWidth(character);
    if (visible + characterLength <= columns) {
      rows[rows.length - 1] += character;
    } else {
      rows.push(character);
      visible = 0;
    }
    if (ESCAPES.has(character)) {
      isInsideEscape = true;
      const ansiEscapeLinkCandidate = characters.slice(index + 1, index + 1 + ANSI_ESCAPE_LINK.length).join("");
      isInsideLinkEscape = ansiEscapeLinkCandidate === ANSI_ESCAPE_LINK;
    }
    if (isInsideEscape) {
      if (isInsideLinkEscape) {
        if (character === ANSI_ESCAPE_BELL) {
          isInsideEscape = false;
          isInsideLinkEscape = false;
        }
      } else if (character === ANSI_SGR_TERMINATOR) {
        isInsideEscape = false;
      }
      continue;
    }
    visible += characterLength;
    if (visible === columns && index < characters.length - 1) {
      rows.push("");
      visible = 0;
    }
  }
  if (!visible && rows.at(-1).length > 0 && rows.length > 1) {
    rows[rows.length - 2] += rows.pop();
  }
};
var stringVisibleTrimSpacesRight = (string) => {
  const words = string.split(" ");
  let last = words.length;
  while (last > 0) {
    if (stringWidth(words[last - 1]) > 0) {
      break;
    }
    last--;
  }
  if (last === words.length) {
    return string;
  }
  return words.slice(0, last).join(" ") + words.slice(last).join("");
};
var exec = (string, columns, options = {}) => {
  if (options.trim !== false && string.trim() === "") {
    return "";
  }
  let returnValue = "";
  let escapeCode;
  let escapeUrl;
  const lengths = wordLengths(string);
  let rows = [""];
  for (const [index, word] of string.split(" ").entries()) {
    if (options.trim !== false) {
      rows[rows.length - 1] = rows.at(-1).trimStart();
    }
    let rowLength = stringWidth(rows.at(-1));
    if (index !== 0) {
      if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
        rows.push("");
        rowLength = 0;
      }
      if (rowLength > 0 || options.trim === false) {
        rows[rows.length - 1] += " ";
        rowLength++;
      }
    }
    if (options.hard && lengths[index] > columns) {
      const remainingColumns = columns - rowLength;
      const breaksStartingThisLine = 1 + Math.floor((lengths[index] - remainingColumns - 1) / columns);
      const breaksStartingNextLine = Math.floor((lengths[index] - 1) / columns);
      if (breaksStartingNextLine < breaksStartingThisLine) {
        rows.push("");
      }
      wrapWord(rows, word, columns);
      continue;
    }
    if (rowLength + lengths[index] > columns && rowLength > 0 && lengths[index] > 0) {
      if (options.wordWrap === false && rowLength < columns) {
        wrapWord(rows, word, columns);
        continue;
      }
      rows.push("");
    }
    if (rowLength + lengths[index] > columns && options.wordWrap === false) {
      wrapWord(rows, word, columns);
      continue;
    }
    rows[rows.length - 1] += word;
  }
  if (options.trim !== false) {
    rows = rows.map((row) => stringVisibleTrimSpacesRight(row));
  }
  const preString = rows.join("\n");
  const pre = [...preString];
  let preStringIndex = 0;
  for (const [index, character] of pre.entries()) {
    returnValue += character;
    if (ESCAPES.has(character)) {
      const { groups } = new RegExp(`(?:\\${ANSI_CSI}(?<code>\\d+)m|\\${ANSI_ESCAPE_LINK}(?<uri>.*)${ANSI_ESCAPE_BELL})`).exec(preString.slice(preStringIndex)) || { groups: {} };
      if (groups.code !== void 0) {
        const code2 = Number.parseFloat(groups.code);
        escapeCode = code2 === END_CODE ? void 0 : code2;
      } else if (groups.uri !== void 0) {
        escapeUrl = groups.uri.length === 0 ? void 0 : groups.uri;
      }
    }
    const code = ansi_styles_default.codes.get(Number(escapeCode));
    if (pre[index + 1] === "\n") {
      if (escapeUrl) {
        returnValue += wrapAnsiHyperlink("");
      }
      if (escapeCode && code) {
        returnValue += wrapAnsiCode(code);
      }
    } else if (character === "\n") {
      if (escapeCode && code) {
        returnValue += wrapAnsiCode(escapeCode);
      }
      if (escapeUrl) {
        returnValue += wrapAnsiHyperlink(escapeUrl);
      }
    }
    preStringIndex += character.length;
  }
  return returnValue;
};
function wrapAnsi(string, columns, options) {
  return String(string).normalize().replaceAll("\r\n", "\n").split("\n").map((line) => exec(line, columns, options)).join("\n");
}

// node_modules/cliui/index.mjs
function ui(opts) {
  return cliui(opts, {
    stringWidth,
    stripAnsi,
    wrap: wrapAnsi
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
    if (tmp) return resolve(dir, tmp);
    dir = dirname(tmp = dir);
    if (tmp === dir) break;
  }
}

// node_modules/yargs/lib/platform-shims/esm.mjs
import { inspect } from "util";
import { fileURLToPath } from "url";

// node_modules/yargs-parser/build/lib/index.js
import { format } from "util";
import { normalize, resolve as resolve2 } from "path";

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
import { readFileSync } from "fs";
import { createRequire } from "node:module";
var _a;
var _b;
var _c;
var minNodeVersion = process && process.env && process.env.YARGS_MIN_NODE_VERSION ? Number(process.env.YARGS_MIN_NODE_VERSION) : 20;
var nodeVersion = (_b = (_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node) !== null && _b !== void 0 ? _b : (_c = process === null || process === void 0 ? void 0 : process.version) === null || _c === void 0 ? void 0 : _c.slice(1);
if (nodeVersion) {
  const major = Number(nodeVersion.match(/^([^.]+)/)[1]);
  if (major < minNodeVersion) {
    throw Error(`yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);
  }
}
var env = process ? process.env : {};
var require2 = createRequire ? createRequire(import.meta.url) : void 0;
var parser = new YargsParser({
  cwd: process.cwd,
  env: () => {
    return env;
  },
  format,
  normalize,
  resolve: resolve2,
  require: (path2) => {
    if (typeof require2 !== "undefined") {
      return require2(path2);
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

// node_modules/yargs/lib/platform-shims/esm.mjs
import { basename, dirname as dirname2, extname, relative, resolve as resolve4, join } from "path";

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
var import_get_caller_file = __toESM(require_get_caller_file(), 1);
import { createRequire as createRequire2 } from "node:module";
import { readFileSync as readFileSync3, readdirSync as readdirSync2 } from "node:fs";
var __dirname = fileURLToPath(import.meta.url);
var mainFilename = __dirname.substring(0, __dirname.lastIndexOf("node_modules"));
var require3 = createRequire2(import.meta.url);
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
  getProcessArgvBin,
  mainFilename: mainFilename || process.cwd(),
  Parser: lib_default,
  path: {
    basename,
    dirname: dirname2,
    extname,
    relative,
    resolve: resolve4,
    join
  },
  process: {
    argv: () => process.argv,
    cwd: process.cwd,
    emitWarning: (warning, type) => process.emitWarning(warning, type),
    execPath: () => process.execPath,
    exit: (code) => {
      process.exit(code);
    },
    nextTick: process.nextTick,
    stdColumns: typeof process.stdout.columns !== "undefined" ? process.stdout.columns : null
  },
  readFileSync: readFileSync3,
  readdirSync: readdirSync2,
  require: require3,
  getCallerFile: () => {
    const callerFile = (0, import_get_caller_file.default)(3);
    return callerFile.match(/^file:\/\//) ? fileURLToPath(callerFile) : callerFile;
  },
  stringWidth,
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

// node_modules/yargs/build/lib/yerror.js
var YError = class _YError extends Error {
  constructor(msg) {
    super(msg || "yargs error");
    this.name = "YError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _YError);
    }
  }
};

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
    this.requireCache.add(callerFile);
    const fullDirPath = this.shim.path.resolve(this.shim.path.dirname(callerFile), dir);
    const files = this.shim.readdirSync(fullDirPath, {
      recursive: opts.recurse ? true : false
    });
    if (!Array.isArray(opts.extensions))
      opts.extensions = ["js"];
    const visit = typeof opts.visit === "function" ? opts.visit : (o) => o;
    for (const fileb of files) {
      const file = fileb.toString();
      if (opts.exclude) {
        let exclude = false;
        if (typeof opts.exclude === "function") {
          exclude = opts.exclude(file);
        } else {
          exclude = opts.exclude.test(file);
        }
        if (exclude)
          continue;
      }
      if (opts.include) {
        let include = false;
        if (typeof opts.include === "function") {
          include = opts.include(file);
        } else {
          include = opts.include.test(file);
        }
        if (!include)
          continue;
      }
      let supportedExtension = false;
      for (const ext of opts.extensions) {
        if (file.endsWith(ext))
          supportedExtension = true;
      }
      if (supportedExtension) {
        const joined = this.shim.path.join(fullDirPath, file);
        const module = req(joined);
        const extendableModule = Object.create(null, Object.getOwnPropertyDescriptors({ ...module }));
        const visited = visit(extendableModule, joined, file);
        if (visited) {
          if (this.requireCache.has(joined))
            continue;
          else
            this.requireCache.add(joined);
          if (!extendableModule.command) {
            extendableModule.command = this.shim.path.basename(joined, this.shim.path.extname(joined));
          }
          this.addHandler(extendableModule);
        }
      }
    }
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
      let command2 = Array.isArray(cmd.command) || typeof cmd.command === "string" ? cmd.command : null;
      if (command2 === null) {
        throw new Error(`No command name given for module: ${this.shim.inspect(cmd)}`);
      }
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
  let wrap;
  self.wrap = (cols) => {
    wrapSet = true;
    wrap = cols;
  };
  self.getWrap = () => {
    if (shim3.getEnv("YARGS_DISABLE_WRAP")) {
      return null;
    }
    if (!wrapSet) {
      wrap = windowWidth();
      wrapSet = true;
    }
    return wrap;
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
    # see https://stackoverflow.com/a/40944195/7080036 for the spaces-handling awk
    mapfile -t type_list < <({{app_path}} --get-yargs-completions "\${args[@]}")
    mapfile -t COMPREPLY < <(compgen -W "$( printf '%q ' "\${type_list[@]}" )" -- "\${cur_word}" |
        awk '/ / { print "\\""$0"\\"" } /^[^ ]+$/ { print $0 }')

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
  if [[ \${#reply} -gt 0 ]]; then
    _describe 'values' reply
  else
    _default
  fi
}
if [[ "'\${zsh_eval_context[-1]}" == "loadautofunc" ]]; then
  _{{app_name}}_yargs_completions "$@"
else
  compdef _{{app_name}}_yargs_completions {{app_name}}
fi
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
        pathToDefault = import.meta.resolve(config.extends);
      } catch (_err) {
        return config;
      }
    } else {
      pathToDefault = getPathToDefaultConfig(cwd, config.extends);
    }
    checkForCircularExtends(pathToDefault);
    previouslyVisitedConfigs.push(pathToDefault);
    defaultConfig = isPath ? JSON.parse(shim2.readFileSync(pathToDefault, "utf8")) : _shim.require(config.extends);
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
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _YargsInstance_command;
var _YargsInstance_cwd;
var _YargsInstance_context;
var _YargsInstance_completion;
var _YargsInstance_completionCommand;
var _YargsInstance_defaultShowHiddenOpt;
var _YargsInstance_exitError;
var _YargsInstance_detectLocale;
var _YargsInstance_emittedWarnings;
var _YargsInstance_exitProcess;
var _YargsInstance_frozens;
var _YargsInstance_globalMiddleware;
var _YargsInstance_groups;
var _YargsInstance_hasOutput;
var _YargsInstance_helpOpt;
var _YargsInstance_isGlobalContext;
var _YargsInstance_logger;
var _YargsInstance_output;
var _YargsInstance_options;
var _YargsInstance_parentRequire;
var _YargsInstance_parserConfig;
var _YargsInstance_parseFn;
var _YargsInstance_parseContext;
var _YargsInstance_pkgs;
var _YargsInstance_preservedGroups;
var _YargsInstance_processArgs;
var _YargsInstance_recommendCommands;
var _YargsInstance_shim;
var _YargsInstance_strict;
var _YargsInstance_strictCommands;
var _YargsInstance_strictOptions;
var _YargsInstance_usage;
var _YargsInstance_usageConfig;
var _YargsInstance_versionOpt;
var _YargsInstance_validation;
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
var DEFAULT_LOCALE = "en_US";
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
    __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.setLocale(DEFAULT_LOCALE);
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
    const coerceKey = keys;
    __classPrivateFieldGet(this, _YargsInstance_options, "f").key[coerceKey] = true;
    __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").addCoerceMiddleware((argv, yargs) => {
      var _a2;
      const coerceKeyAliases = (_a2 = yargs.getAliases()[coerceKey]) !== null && _a2 !== void 0 ? _a2 : [];
      const argvKeys = [coerceKey, ...coerceKeyAliases].filter((key) => Object.prototype.hasOwnProperty.call(argv, key));
      if (argvKeys.length === 0) {
        return argv;
      }
      return maybeAsyncResult(() => {
        return value(argv[argvKeys[0]]);
      }, (result) => {
        argvKeys.forEach((key) => {
          argv[key] = result;
        });
        return argv;
      }, (err) => {
        throw new YError(err.message);
      });
    }, coerceKey);
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
      if (/* @__PURE__ */ ((key) => key === "configObjects")(hintKey))
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
      if (__classPrivateFieldGet(this, _YargsInstance_shim, "f").path.extname(startDir)) {
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
    } else if (/* @__PURE__ */ ((key2) => typeof key2 === "object")(key)) {
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
    var _a2, _b2, _c2, _d;
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
      const requestCompletions = ((_a2 = __classPrivateFieldGet(this, _YargsInstance_completion, "f")) === null || _a2 === void 0 ? void 0 : _a2.completionKey) ? [
        (_b2 = __classPrivateFieldGet(this, _YargsInstance_completion, "f")) === null || _b2 === void 0 ? void 0 : _b2.completionKey,
        ...(_d = this.getAliases()[(_c2 = __classPrivateFieldGet(this, _YargsInstance_completion, "f")) === null || _c2 === void 0 ? void 0 : _c2.completionKey]) !== null && _d !== void 0 ? _d : []
      ].some((key) => Object.prototype.hasOwnProperty.call(argv, key)) : false;
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
          this.showHelp((message) => {
            __classPrivateFieldGet(this, _YargsInstance_logger, "f").log(message);
            this.exit(0);
          });
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

// src/tools/mdenc.ts
import * as fs from "node:fs";
import * as path from "node:path";

// src/services/CryptoHelper.ts
var vectorSize = 16;
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();
var iterations = 1e3;
var salt = utf8Encoder.encode("XHWnDAT6ehMVY2zD");
var CryptoHelper = class {
  // constructor(){
  // 	console.debug('new CryptoHelper');
  // }
  async deriveKey(password) {
    const buffer = utf8Encoder.encode(password);
    const key = await crypto.subtle.importKey("raw", buffer, { name: "PBKDF2" }, false, ["deriveKey"]);
    const privateKey = crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        hash: { name: "SHA-256" },
        iterations,
        salt
      },
      key,
      {
        name: "AES-GCM",
        length: 256
      },
      false,
      ["encrypt", "decrypt"]
    );
    return privateKey;
  }
  async encryptToBytes(text, password) {
    const key = await this.deriveKey(password);
    const textBytesToEncrypt = utf8Encoder.encode(text);
    const vector = crypto.getRandomValues(new Uint8Array(vectorSize));
    const encryptedBytes = new Uint8Array(
      await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: vector },
        key,
        textBytesToEncrypt
      )
    );
    const finalBytes = new Uint8Array(vector.byteLength + encryptedBytes.byteLength);
    finalBytes.set(vector, 0);
    finalBytes.set(encryptedBytes, vector.byteLength);
    return finalBytes;
  }
  convertToString(bytes) {
    let result = "";
    for (let idx = 0; idx < bytes.length; idx++) {
      result += String.fromCharCode(bytes[idx]);
    }
    return result;
  }
  async encryptToBase64(text, password) {
    const finalBytes = await this.encryptToBytes(text, password);
    const base64Text = btoa(this.convertToString(finalBytes));
    return base64Text;
  }
  stringToArray(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(str.charCodeAt(i));
    }
    return new Uint8Array(result);
  }
  async decryptFromBytes(encryptedBytes, password) {
    try {
      const vector = encryptedBytes.slice(0, vectorSize);
      const encryptedTextBytes = encryptedBytes.slice(vectorSize);
      const key = await this.deriveKey(password);
      const decryptedBytes = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: vector },
        key,
        encryptedTextBytes
      );
      const decryptedText = utf8Decoder.decode(decryptedBytes);
      return decryptedText;
    } catch (e) {
      return null;
    }
  }
  async decryptFromBase64(base64Encoded, password) {
    try {
      const bytesToDecode = this.stringToArray(atob(base64Encoded));
      return await this.decryptFromBytes(bytesToDecode, password);
    } catch (e) {
      return null;
    }
  }
};

// src/services/CryptoHelper2304.ts
var CryptoHelper2304 = class {
  constructor(vectorSize2, saltSize, iterations2) {
    this.vectorSize = vectorSize2;
    this.saltSize = saltSize;
    this.iterations = iterations2;
  }
  async deriveKey(password, salt2) {
    const utf8Encoder2 = new TextEncoder();
    const buffer = utf8Encoder2.encode(password);
    const key = await crypto.subtle.importKey(
      /*format*/
      "raw",
      /*keyData*/
      buffer,
      /*algorithm*/
      "PBKDF2",
      /*extractable*/
      false,
      /*keyUsages*/
      ["deriveKey"]
    );
    try {
      const privateKey = await crypto.subtle.deriveKey(
        /*algorithm*/
        {
          name: "PBKDF2",
          hash: "SHA-512",
          salt: salt2,
          iterations: this.iterations
        },
        /*baseKey*/
        key,
        /*derivedKeyAlgorithm*/
        {
          name: "AES-GCM",
          length: 256
        },
        /*extractable*/
        false,
        /*keyUsages*/
        ["encrypt", "decrypt"]
      );
      return privateKey;
    } finally {
    }
  }
  async encryptToBytes(text, password) {
    const salt2 = crypto.getRandomValues(new Uint8Array(this.saltSize));
    const key = await this.deriveKey(password, salt2);
    const utf8Encoder2 = new TextEncoder();
    const textBytesToEncrypt = utf8Encoder2.encode(text);
    const vector = crypto.getRandomValues(new Uint8Array(this.vectorSize));
    const encryptedBytes = new Uint8Array(
      await crypto.subtle.encrypt(
        /*algorithm*/
        {
          name: "AES-GCM",
          iv: vector
        },
        /*key*/
        key,
        /*data*/
        textBytesToEncrypt
      )
    );
    const finalBytes = new Uint8Array(vector.byteLength + salt2.byteLength + encryptedBytes.byteLength);
    finalBytes.set(vector, 0);
    finalBytes.set(salt2, vector.byteLength);
    finalBytes.set(encryptedBytes, vector.byteLength + salt2.byteLength);
    return finalBytes;
  }
  convertToString(bytes) {
    let result = "";
    for (let idx = 0; idx < bytes.length; idx++) {
      result += String.fromCharCode(bytes[idx]);
    }
    return result;
  }
  async encryptToBase64(text, password) {
    const finalBytes = await this.encryptToBytes(text, password);
    const base64Text = btoa(this.convertToString(finalBytes));
    return base64Text;
  }
  stringToArray(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(str.charCodeAt(i));
    }
    return new Uint8Array(result);
  }
  async decryptFromBytes(encryptedBytes, password) {
    try {
      let offset;
      let nextOffset;
      offset = 0;
      nextOffset = offset + this.vectorSize;
      const vector = encryptedBytes.slice(offset, nextOffset);
      offset = nextOffset;
      nextOffset = offset + this.saltSize;
      const salt2 = encryptedBytes.slice(offset, nextOffset);
      offset = nextOffset;
      nextOffset = void 0;
      const encryptedTextBytes = encryptedBytes.slice(offset);
      const key = await this.deriveKey(password, salt2);
      const decryptedBytes = await crypto.subtle.decrypt(
        /*algorithm*/
        {
          name: "AES-GCM",
          iv: vector
        },
        /*key*/
        key,
        /*data*/
        encryptedTextBytes
      );
      const utf8Decoder2 = new TextDecoder();
      const decryptedText = utf8Decoder2.decode(decryptedBytes);
      return decryptedText;
    } catch (e) {
      return null;
    }
  }
  async decryptFromBase64(base64Encoded, password) {
    try {
      const bytesToDecode = this.stringToArray(atob(base64Encoded));
      return await this.decryptFromBytes(bytesToDecode, password);
    } catch (e) {
      return null;
    }
  }
};

// src/services/CryptoHelperObsolete.ts
var algorithmObsolete = {
  name: "AES-GCM",
  iv: new Uint8Array([196, 190, 240, 190, 188, 78, 41, 132, 15, 220, 84, 211]),
  tagLength: 128
};
var CryptoHelperObsolete = class {
  async buildKey(password) {
    const utf8Encode = new TextEncoder();
    const passwordBytes = utf8Encode.encode(password);
    const passwordDigest = await crypto.subtle.digest({ name: "SHA-256" }, passwordBytes);
    const key = await crypto.subtle.importKey(
      "raw",
      passwordDigest,
      algorithmObsolete,
      false,
      ["encrypt", "decrypt"]
    );
    return key;
  }
  /**
   	* @deprecated
  	*/
  async encryptToBase64(text, password) {
    const key = await this.buildKey(password);
    const utf8Encode = new TextEncoder();
    const bytesToEncrypt = utf8Encode.encode(text);
    const encryptedBytes = new Uint8Array(await crypto.subtle.encrypt(
      algorithmObsolete,
      key,
      bytesToEncrypt
    ));
    const base64Text = btoa(String.fromCharCode(...encryptedBytes));
    return base64Text;
  }
  stringToArray(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(str.charCodeAt(i));
    }
    return new Uint8Array(result);
  }
  async decryptFromBase64(base64Encoded, password) {
    try {
      const bytesToDecrypt = this.stringToArray(atob(base64Encoded));
      const key = await this.buildKey(password);
      const decryptedBytes = await crypto.subtle.decrypt(algorithmObsolete, key, bytesToDecrypt);
      const utf8Decode = new TextDecoder();
      const decryptedText = utf8Decode.decode(decryptedBytes);
      return decryptedText;
    } catch (e) {
      return null;
    }
  }
};

// src/services/CryptoHelperFactory.ts
var _CryptoHelperFactory = class _CryptoHelperFactory {
  static BuildDefault() {
    return this.cryptoHelper2304_v2;
  }
  static BuildFromFileDataOrThrow(data) {
    const result = _CryptoHelperFactory.BuildFromFileDataOrNull(data);
    if (result != null) {
      return result;
    }
    throw new Error(`Unable to determine ICryptoHelper for File ver ${data.version}`);
  }
  static BuildFromFileDataOrNull(data) {
    if (data.version == "1.0") {
      return new CryptoHelper();
    }
    if (data.version == "2.0") {
      return this.cryptoHelper2304_v2;
    }
    return null;
  }
  static BuildFromDecryptableOrThrow(decryptable) {
    const result = _CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
    if (result != null) {
      return result;
    }
    throw new Error(`Unable to determine ICryptoHelper for Decryptable ver ${decryptable.version}`);
  }
  static BuildFromDecryptableOrNull(decryptable) {
    if (decryptable.version == 0) {
      return new CryptoHelperObsolete();
    }
    if (decryptable.version == 1) {
      return new CryptoHelper();
    }
    if (decryptable.version == 2) {
      return this.cryptoHelper2304_v2;
    }
    return null;
  }
};
_CryptoHelperFactory.cryptoHelper2304_v2 = new CryptoHelper2304(16, 16, 21e4);
var CryptoHelperFactory = _CryptoHelperFactory;

// src/services/FileDataHelper.ts
var FileData = class {
  constructor(version, hint, encodedData) {
    this.version = "1.0";
    this.version = version;
    this.hint = hint;
    this.encodedData = encodedData;
  }
};
var _FileDataHelper = class _FileDataHelper {
  static async encrypt(pass, hint, text) {
    const crypto2 = CryptoHelperFactory.BuildDefault();
    const encryptedData = await crypto2.encryptToBase64(text, pass);
    return new FileData(_FileDataHelper.DEFAULT_VERSION, hint, encryptedData);
  }
  static async decrypt(data, pass) {
    if (data.encodedData == "") {
      return "";
    }
    const crypto2 = CryptoHelperFactory.BuildFromFileDataOrThrow(data);
    return await crypto2.decryptFromBase64(data.encodedData, pass);
  }
};
_FileDataHelper.DEFAULT_VERSION = "2.0";
var FileDataHelper = _FileDataHelper;
var JsonFileEncoding = class {
  static encode(data) {
    return JSON.stringify(data, null, 2);
  }
  static isEncoded(text) {
    try {
      JSON.parse(text);
      return true;
    } catch (error) {
      return false;
    }
  }
  static decode(encodedText) {
    if (encodedText === "") {
      return new FileData(FileDataHelper.DEFAULT_VERSION, "", "");
    }
    return JSON.parse(encodedText);
  }
};

// src/services/Constants.ts
var ENCRYPTED_FILE_EXTENSION_ENCRYPTED = "encrypted";
var ENCRYPTED_FILE_EXTENSION_MDENC = "mdenc";
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
var _PREFIX_OBSOLETE_VISIBLE = "\u{1F510} ";
var _PREFIXES = [
  _PREFIX_B,
  _PREFIX_B_VISIBLE,
  _PREFIX_A,
  _PREFIX_A_VISIBLE,
  _PREFIX_OBSOLETE,
  _PREFIX_OBSOLETE_VISIBLE
];
var _SUFFIX_WITH_COMMENT = " \u{1F510}%%";
var _SUFFIX_NO_COMMENT = " \u{1F510}";
var _SUFFIXES = [
  _SUFFIX_WITH_COMMENT,
  _SUFFIX_NO_COMMENT
];
var _HINT = "\u{1F4A1}";

// src/features/feature-inplace-encrypt/Decryptable.ts
var Decryptable = class {
};

// src/features/feature-inplace-encrypt/featureInplaceTextAnalysis.ts
var FeatureInplaceTextAnalysis = class {
  constructor(text) {
    this.process(text);
  }
  process(text) {
    this.processedText = text;
    this.isEmpty = text.length === 0;
    this.prefix = _PREFIXES.find((prefix) => text.startsWith(prefix)) ?? "";
    this.suffix = _SUFFIXES.find((suffix) => text.endsWith(suffix)) ?? "";
    this.hasEncryptedPrefix = this.prefix.length > 0;
    this.hasEncryptedSuffix = this.suffix.length > 0;
    this.hasObsoleteEncryptedPrefix = this.prefix === _PREFIX_OBSOLETE || this.prefix === _PREFIX_OBSOLETE_VISIBLE;
    this.containsEncryptedMarkers = [..._PREFIXES, ..._SUFFIXES].some((marker) => text.includes(marker));
    this.canDecrypt = this.hasEncryptedPrefix && this.hasEncryptedSuffix;
    this.canEncrypt = !this.hasEncryptedPrefix && !this.containsEncryptedMarkers;
    if (this.canDecrypt) {
      const decryptable = this.parseDecryptableContent(text);
      if (decryptable != null) {
        this.decryptable = decryptable;
      } else {
        this.canDecrypt = false;
      }
    }
  }
  parseDecryptableContent(text) {
    const result = new Decryptable();
    if (!this.hasEncryptedPrefix || !this.hasEncryptedSuffix) {
      return null;
    }
    if (this.hasObsoleteEncryptedPrefix) {
      result.version = 0;
    } else if (this.prefix == _PREFIX_B || this.prefix == _PREFIX_B_VISIBLE) {
      result.version = 2;
    } else if (this.prefix == _PREFIX_A || this.prefix == _PREFIX_A_VISIBLE) {
      result.version = 1;
    }
    const content = text.substring(this.prefix.length, text.length - this.suffix.length);
    if ([..._PREFIXES, ..._SUFFIXES].some((marker) => content.includes(marker))) {
      return null;
    }
    if (content.substring(0, _HINT.length) == _HINT) {
      const endHintMarker = content.indexOf(_HINT, _HINT.length);
      if (endHintMarker < 0) {
        return null;
      }
      result.hint = content.substring(_HINT.length, endHintMarker);
      result.base64CipherText = content.substring(endHintMarker + _HINT.length);
    } else {
      result.base64CipherText = content;
    }
    result.showInReadingView = !this.prefix.includes("%%");
    return result;
  }
};

// src/tools/mdenc.ts
var ListCommandHandler = class {
  async argHandler(format3) {
    const cwd = process.cwd();
    let onStart;
    let onListing;
    let onEnd;
    const listings = [];
    if (format3 === "csv") {
      onStart = () => console.log("feature,fullPath,relativePath,extension");
      onListing = (l) => console.log(`"${l.featureType}","${l.fullPath}","${l.relativePath}","${l.extension}"`);
      onEnd = () => {
      };
    } else if (format3 == "json") {
      onStart = () => {
      };
      onListing = (l) => listings.push(l);
      onEnd = () => console.log(JSON.stringify(listings, null, 2));
    } else if (format3 === "table") {
      onStart = () => {
      };
      onListing = (l) => listings.push(l);
      onEnd = () => console.table(listings);
    } else {
      onStart = () => {
      };
      onListing = (l) => console.log(`${l.relativePath}`);
      onEnd = () => {
      };
    }
    await this.output(
      cwd,
      onStart,
      onListing,
      onEnd
    );
  }
  async output(dir, startCallback, perItemCallback, endCallback) {
    startCallback();
    for await (const l of Utils.listings(dir, false)) {
      perItemCallback(l);
    }
    endCallback();
  }
};
var TestCommandHandler = class {
  async argHandler(passwords, onlyListFails) {
    const cwd = process.cwd();
    for await (const listing of Utils.listings(cwd, true)) {
      if (listing.featureType == "InPlace") {
        for await (const result of this.testForInPlaceDecryption(listing, passwords)) {
          this.outputResult(result, onlyListFails);
        }
      } else if (listing.featureType == "WholeNote") {
        const result = await this.testForWholeNoteDecryption(listing, passwords);
        this.outputResult(result, onlyListFails);
      }
    }
  }
  async *testForInPlaceDecryption(listing, passwords) {
    if (listing.content == null) {
      yield {
        listing,
        success: false,
        message: "no content"
      };
      return;
    }
    const lines = listing.content.split("\n");
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      const line = lines[lineIdx];
      const lineNo = lineIdx + 1;
      const reInplaceMatcher = /🔐(.*?)🔐/g;
      const matches = Array.from(line.matchAll(reInplaceMatcher));
      for (const match of matches) {
        const matchLoc = `line ${lineNo}, pos ${match.index + 1}`;
        const encryptedText = `\u{1F510}${match[1]}\u{1F510}`;
        const txtAnalysis = new FeatureInplaceTextAnalysis(encryptedText);
        if (!txtAnalysis.canDecrypt || txtAnalysis.decryptable == null) {
          yield {
            listing,
            success: false,
            message: `${matchLoc}, cannot decrypt`
          };
          continue;
        }
        const ch = CryptoHelperFactory.BuildFromDecryptableOrNull(txtAnalysis.decryptable);
        if (ch == null) {
          yield {
            listing,
            success: false,
            message: `${matchLoc}, unknown format`
          };
          continue;
        }
        let wasDecrypted = false;
        for (let pwIdx = 0; pwIdx < passwords.length; pwIdx++) {
          const pw = passwords[pwIdx];
          const pwNo = pwIdx + 1;
          const decryptedText = await ch.decryptFromBase64(txtAnalysis.decryptable.base64CipherText, pw);
          if (decryptedText != null) {
            wasDecrypted = true;
            yield {
              listing,
              success: true,
              message: `${matchLoc}, password #${pwNo}`
            };
            break;
          }
        }
        if (wasDecrypted) {
          break;
        }
      }
    }
  }
  async testForWholeNoteDecryption(listing, passwords) {
    if (listing.content == null || listing.content.length == 0) {
      return {
        listing,
        success: false,
        message: "no content"
      };
    }
    const fileData = JsonFileEncoding.decode(listing.content || "");
    const ch = CryptoHelperFactory.BuildFromFileDataOrNull(fileData);
    if (ch == null) {
      return {
        listing,
        success: false,
        message: "Unknown format"
      };
    }
    for (let i = 0; i < passwords.length; i++) {
      const pw = passwords[i];
      const decoded = await ch.decryptFromBase64(fileData.encodedData, pw);
      if (decoded != null) {
        return {
          listing,
          success: true,
          message: `password #${i + 1}`
        };
      }
    }
    return {
      listing,
      success: false,
      message: "unable to decrypt"
    };
  }
  outputResult(result, onlyListFails) {
    if (onlyListFails && result.success) {
      return;
    }
    console.log(`${result.success ? "PASSED" : "FAILED"} => ${result.listing.relativePath} => ${result.message} => ${result.listing.featureType}`);
  }
  outputResults(results, onlyListFails) {
    for (const result of results) {
      this.outputResult(result, onlyListFails);
    }
  }
};
var DecryptCommandHandler = class {
  async argHandler(passwords, outdir, dryrun) {
    console.log(`decrypting${dryrun ? " (dry run)" : ""}...`);
    const cwd = process.cwd();
    for await (const listing of Utils.listings(cwd, true)) {
      if (listing.featureType == "InPlace") {
        const result = await this.decryptInPlaceListing(listing, passwords, outdir, dryrun);
        this.outputResult(result);
      } else if (listing.featureType == "WholeNote") {
        const result = await this.decryptWholeNoteListing(listing, passwords, outdir, dryrun);
        this.outputResult(result);
      }
    }
  }
  async decryptInPlaceListing(listing, passwords, outdir, dryrun) {
    const lines = listing.content.split("\n");
    const decryptedLines = [];
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      const line = lines[lineIdx];
      const lineNo = lineIdx + 1;
      const reInplaceMatchers = [
        /%%🔐(.*?)🔐%%/g,
        /🔐(.*?)🔐/g
      ];
      let decryptedLine = line;
      let matchCount = 0;
      let decryptedCount = 0;
      for (const reInplaceMatcher of reInplaceMatchers) {
        for await (const match of decryptedLine.matchAll(reInplaceMatcher)) {
          matchCount++;
          const matchLoc = `Line ${lineNo}, pos ${match.index + 1}`;
          const matchedText = match[0];
          const encryptedText = `\u{1F510}${match[1]}\u{1F510}`;
          const txtAnalysis = new FeatureInplaceTextAnalysis(encryptedText);
          if (!txtAnalysis.canDecrypt || txtAnalysis.decryptable == null) {
            return {
              listing,
              success: false,
              message: `ERROR: ${matchLoc}, cannot decrypt`,
              outFile: void 0
            };
          }
          const ch = CryptoHelperFactory.BuildFromDecryptableOrNull(txtAnalysis.decryptable);
          if (ch == null) {
            return {
              listing,
              success: false,
              message: `ERROR: ${matchLoc}, unknown format`,
              outFile: void 0
            };
          }
          let decryptedText = null;
          for (let pwIdx = 0; pwIdx < passwords.length; pwIdx++) {
            const pw = passwords[pwIdx];
            decryptedText = await ch.decryptFromBase64(txtAnalysis.decryptable.base64CipherText, pw);
            if (decryptedText != null) {
              break;
            }
          }
          if (decryptedText !== null) {
            decryptedCount++;
            decryptedLine = decryptedLine.replace(matchedText, decryptedText);
          }
        }
      }
      if (matchCount != decryptedCount) {
        return {
          listing,
          success: false,
          message: `ERROR: Unable to decrypt all matches. Line ${lineNo}, match count ${matchCount} != decrypted count ${decryptedCount}`,
          outFile: void 0
        };
      }
      decryptedLines.push(decryptedLine);
    }
    let outFile = path.join(outdir, listing.relativePath);
    if (!dryrun) {
      const outFileDir = path.dirname(outFile);
      if (!fs.existsSync(outFileDir)) {
        fs.mkdirSync(outFileDir, { recursive: true });
      }
      fs.writeFileSync(outFile, decryptedLines.join("\n"));
    }
    return Promise.resolve({
      listing,
      success: true,
      message: "Decrypted",
      outFile
    });
  }
  outputResult(result) {
    console.log(`${result.message} : ${result.listing.relativePath}${result.outFile == null ? "" : " => `" + result.outFile + "`"}`);
  }
  async decryptWholeNoteListing(listing, passwords, outdir, dryrun) {
    let outFile = path.join(outdir, listing.relativePath);
    const fileName = path.basename(outFile);
    const extension = path.extname(outFile);
    const newFileName = fileName.replace(extension, ".md");
    outFile = path.join(path.dirname(outFile), newFileName);
    if (!dryrun) {
      const outFileDir = path.dirname(outFile);
      if (!fs.existsSync(outFileDir)) {
        fs.mkdirSync(outFileDir, { recursive: true });
      }
    }
    if (listing.content == null || listing.content.length == 0) {
      if (!dryrun) {
        fs.writeFileSync(outFile, "");
      }
      return {
        listing,
        success: true,
        message: "WARN: Empty file",
        outFile
      };
    }
    const fileData = JsonFileEncoding.decode(listing.content || "");
    const ch = CryptoHelperFactory.BuildFromFileDataOrNull(fileData);
    if (ch == null) {
      return {
        listing,
        success: false,
        message: "ERROR: Unknown format",
        outFile: void 0
      };
    }
    for (let i = 0; i < passwords.length; i++) {
      const pw = passwords[i];
      const decoded = await ch.decryptFromBase64(fileData.encodedData, pw);
      if (decoded != null) {
        if (!dryrun) {
          fs.writeFileSync(outFile, decoded);
        }
        return {
          listing,
          success: true,
          message: `Decrypted`,
          outFile
        };
      }
    }
    return {
      listing,
      success: false,
      message: `ERROR: Unable to decrypt`,
      outFile: void 0
    };
  }
};
var Utils = class _Utils {
  static async *walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
      const entry = path.join(dir, d.name);
      if (d.isDirectory()) {
        yield* _Utils.walk(entry);
      } else if (d.isFile()) {
        yield entry;
      }
    }
  }
  static async *listings(dir, includeContent) {
    for await (const p of _Utils.walk(dir)) {
      const ext = path.extname(p).toLowerCase().slice(1);
      if (!["md", ...ENCRYPTED_FILE_EXTENSIONS].includes(ext)) {
        continue;
      }
      const relativePath = "." + path.sep + path.relative(dir, p);
      const content = includeContent || ext == "md" ? await fs.promises.readFile(p, "utf8") : void 0;
      if (ext == "md") {
        if (content.includes(_PREFIX_A_VISIBLE) || content.includes(_PREFIX_B_VISIBLE)) {
          yield {
            featureType: "InPlace",
            fullPath: p,
            relativePath,
            extension: ext,
            content: includeContent ? content : void 0
          };
        }
        continue;
      }
      yield {
        featureType: "WholeNote",
        fullPath: p,
        relativePath,
        extension: ext,
        content
      };
    }
  }
};
var optPasswordList = {
  demandOption: true,
  alias: ["p", "pw"],
  describe: "passwords to use",
  type: "array"
};
var optListingFormat = {
  alias: "f",
  describe: "format of the listing",
  type: "string",
  choices: ["default", "table", "json", "csv"],
  default: "default"
};
yargs_default(hideBin(process.argv)).scriptName("mdenc").usage("Usage: $0 [command] [options]").command("list", "list all encrypted artifacts within the current directory", (yargs) => yargs.option({
  format: optListingFormat
}), (argv) => new ListCommandHandler().argHandler(argv.format)).command(["test", "check"], "check that all notes can be decrypted with the given password list", (yargs) => yargs.option({
  passwords: optPasswordList,
  fails: {
    alias: ["f", "fail"],
    describe: "only list fails",
    type: "boolean",
    default: false
  }
}), (argv) => new TestCommandHandler().argHandler(argv.passwords, argv.fails)).command("decrypt", "decrypt notes to plain text given a password list and an output directory", (yargs) => yargs.option({
  passwords: optPasswordList,
  outdir: {
    alias: ["o", "out", "to"],
    describe: "output directory",
    type: "string",
    demandOption: true
  },
  dryrun: {
    alias: ["dr", "dry"],
    describe: "dry run",
    type: "boolean",
    default: false
  }
}), (argv) => new DecryptCommandHandler().argHandler(argv.passwords, argv.outdir, argv.dryrun !== false)).demandCommand().help().wrap(null).example([
  ["$0 list", "Processes all *.md and *.mdenc files and list any encrypted artifacts within the current directory"],
  ["$0 test --passwords pw1 pw2", "check that all notes can be decrypted with the given password list"],
  ["$0 decrypt --pw pw1 pw2 --outdir \\path\\to\\output\\", "decrypt notes to an output directory"]
]).parse();
/*! Bundled license information:

yargs-parser/build/lib/string-utils.js:
yargs-parser/build/lib/tokenize-arg-string.js:
yargs-parser/build/lib/yargs-parser-types.js:
yargs-parser/build/lib/yargs-parser.js:
  (**
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)

yargs-parser/build/lib/index.js:
  (**
   * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
   *
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2Vtb2ppLXJlZ2V4L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9nZXQtY2FsbGVyLWZpbGUvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2xpYi9wbGF0Zm9ybS1zaGltcy9lc20ubWpzIiwgIi4uL25vZGVfbW9kdWxlcy9jbGl1aS9idWlsZC9saWIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Fuc2ktcmVnZXgvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2dldC1lYXN0LWFzaWFuLXdpZHRoL2xvb2t1cC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZ2V0LWVhc3QtYXNpYW4td2lkdGgvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3JhcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXN0eWxlcy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3JhcC1hbnNpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9jbGl1aS9pbmRleC5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL2VzY2FsYWRlL3N5bmMvaW5kZXgubWpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL3N0cmluZy11dGlscy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi90b2tlbml6ZS1hcmctc3RyaW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL3lhcmdzLXBhcnNlci10eXBlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi95YXJncy1wYXJzZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9wcm9jZXNzLWFyZ3YuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3kxOG4vYnVpbGQvbGliL3BsYXRmb3JtLXNoaW1zL25vZGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3kxOG4vYnVpbGQvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95MThuL2luZGV4Lm1qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvaXMtcHJvbWlzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3llcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3BhcnNlLWNvbW1hbmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi9hcmdzZXJ0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvbWlkZGxld2FyZS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2NvbW1hbmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9vYmotZmlsdGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvc2V0LWJsb2NraW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXNhZ2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi9jb21wbGV0aW9uLXRlbXBsYXRlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2NvbXBsZXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9sZXZlbnNodGVpbi5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3ZhbGlkYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9hcHBseS1leHRlbmRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIveWFyZ3MtZmFjdG9yeS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvaW5kZXgubWpzIiwgIi4uL3NyYy90b29scy9tZGVuYy50cyIsICIuLi9zcmMvc2VydmljZXMvQ3J5cHRvSGVscGVyLnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9DcnlwdG9IZWxwZXIyMzA0LnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9DcnlwdG9IZWxwZXJPYnNvbGV0ZS50cyIsICIuLi9zcmMvc2VydmljZXMvQ3J5cHRvSGVscGVyRmFjdG9yeS50cyIsICIuLi9zcmMvc2VydmljZXMvRmlsZURhdGFIZWxwZXIudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0NvbnN0YW50cy50cyIsICIuLi9zcmMvZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvRmVhdHVyZUlucGxhY2VDb25zdGFudHMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2ZlYXR1cmUtaW5wbGFjZS1lbmNyeXB0L0RlY3J5cHRhYmxlLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9mZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG5cdC8vIGh0dHBzOi8vbXRocy5iZS9lbW9qaVxuXHRyZXR1cm4gL1sjKjAtOV1cXHVGRTBGP1xcdTIwRTN8W1xceEE5XFx4QUVcXHUyMDNDXFx1MjA0OVxcdTIxMjJcXHUyMTM5XFx1MjE5NC1cXHUyMTk5XFx1MjFBOVxcdTIxQUFcXHUyMzFBXFx1MjMxQlxcdTIzMjhcXHUyM0NGXFx1MjNFRC1cXHUyM0VGXFx1MjNGMVxcdTIzRjJcXHUyM0Y4LVxcdTIzRkFcXHUyNEMyXFx1MjVBQVxcdTI1QUJcXHUyNUI2XFx1MjVDMFxcdTI1RkJcXHUyNUZDXFx1MjVGRVxcdTI2MDAtXFx1MjYwNFxcdTI2MEVcXHUyNjExXFx1MjYxNFxcdTI2MTVcXHUyNjE4XFx1MjYyMFxcdTI2MjJcXHUyNjIzXFx1MjYyNlxcdTI2MkFcXHUyNjJFXFx1MjYyRlxcdTI2MzgtXFx1MjYzQVxcdTI2NDBcXHUyNjQyXFx1MjY0OC1cXHUyNjUzXFx1MjY1RlxcdTI2NjBcXHUyNjYzXFx1MjY2NVxcdTI2NjZcXHUyNjY4XFx1MjY3QlxcdTI2N0VcXHUyNjdGXFx1MjY5MlxcdTI2OTQtXFx1MjY5N1xcdTI2OTlcXHUyNjlCXFx1MjY5Q1xcdTI2QTBcXHUyNkE3XFx1MjZBQVxcdTI2QjBcXHUyNkIxXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDOFxcdTI2Q0ZcXHUyNkQxXFx1MjZFOVxcdTI2RjAtXFx1MjZGNVxcdTI2RjdcXHUyNkY4XFx1MjZGQVxcdTI3MDJcXHUyNzA4XFx1MjcwOVxcdTI3MEZcXHUyNzEyXFx1MjcxNFxcdTI3MTZcXHUyNzFEXFx1MjcyMVxcdTI3MzNcXHUyNzM0XFx1Mjc0NFxcdTI3NDdcXHUyNzU3XFx1Mjc2M1xcdTI3QTFcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTJCMUJcXHUyQjFDXFx1MkI1NVxcdTMwMzBcXHUzMDNEXFx1MzI5N1xcdTMyOTldXFx1RkUwRj98W1xcdTI2MURcXHUyNzBDXFx1MjcwRF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/fFtcXHUyNzBBXFx1MjcwQl0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1MjNFOS1cXHUyM0VDXFx1MjNGMFxcdTIzRjNcXHUyNUZEXFx1MjY5M1xcdTI2QTFcXHUyNkFCXFx1MjZDNVxcdTI2Q0VcXHUyNkQ0XFx1MjZFQVxcdTI2RkRcXHUyNzA1XFx1MjcyOFxcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc5NS1cXHUyNzk3XFx1MjdCMFxcdTI3QkZcXHUyQjUwXXxcXHUyNkQzXFx1RkUwRj8oPzpcXHUyMDBEXFx1RDgzRFxcdURDQTUpP3xcXHUyNkY5KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHUyNzY0XFx1RkUwRj8oPzpcXHUyMDBEKD86XFx1RDgzRFxcdUREMjV8XFx1RDgzRVxcdURFNzkpKT98XFx1RDgzQyg/OltcXHVEQzA0XFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdURFMDJcXHVERTM3XFx1REYyMVxcdURGMjQtXFx1REYyQ1xcdURGMzZcXHVERjdEXFx1REY5NlxcdURGOTdcXHVERjk5LVxcdURGOUJcXHVERjlFXFx1REY5RlxcdURGQ0RcXHVERkNFXFx1REZENC1cXHVERkRGXFx1REZGNVxcdURGRjddXFx1RkUwRj98W1xcdURGODVcXHVERkMyXFx1REZDN10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REZDNFxcdURGQ0FdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdURGQ0JcXHVERkNDXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVGRTBGKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdURDQ0ZcXHVERDhFXFx1REQ5MS1cXHVERDlBXFx1REUwMVxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTM2XFx1REUzOC1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjBcXHVERjJELVxcdURGMzVcXHVERjM3LVxcdURGNDNcXHVERjQ1LVxcdURGNEFcXHVERjRDLVxcdURGN0NcXHVERjdFLVxcdURGODRcXHVERjg2LVxcdURGOTNcXHVERkEwLVxcdURGQzFcXHVERkM1XFx1REZDNlxcdURGQzhcXHVERkM5XFx1REZDRi1cXHVERkQzXFx1REZFMC1cXHVERkYwXFx1REZGOC1cXHVERkZGXXxcXHVEREU2XFx1RDgzQ1tcXHVEREU4LVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjJcXHVEREY0XFx1RERGNi1cXHVEREZBXFx1RERGQ1xcdURERkRcXHVEREZGXXxcXHVEREU3XFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRlxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRVxcdURERkZdfFxcdURERThcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRVxcdURERjAtXFx1RERGN1xcdURERkEtXFx1RERGRl18XFx1RERFOVxcdUQ4M0NbXFx1RERFQVxcdURERUNcXHVEREVGXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGRl18XFx1RERFQVxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERURcXHVEREY3LVxcdURERkFdfFxcdURERUJcXHVEODNDW1xcdURERUUtXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGN118XFx1RERFQ1xcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUVcXHVEREYxLVxcdURERjNcXHVEREY1LVxcdURERkFcXHVEREZDXFx1RERGRV18XFx1RERFRFxcdUQ4M0NbXFx1RERGMFxcdURERjJcXHVEREYzXFx1RERGN1xcdURERjlcXHVEREZBXXxcXHVEREVFXFx1RDgzQ1tcXHVEREU4LVxcdURERUFcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjldfFxcdURERUZcXHVEODNDW1xcdURERUFcXHVEREYyXFx1RERGNFxcdURERjVdfFxcdURERjBcXHVEODNDW1xcdURERUFcXHVEREVDLVxcdURERUVcXHVEREYyXFx1RERGM1xcdURERjVcXHVEREY3XFx1RERGQ1xcdURERkVcXHVEREZGXXxcXHVEREYxXFx1RDgzQ1tcXHVEREU2LVxcdURERThcXHVEREVFXFx1RERGMFxcdURERjctXFx1RERGQlxcdURERkVdfFxcdURERjJcXHVEODNDW1xcdURERTZcXHVEREU4LVxcdURERURcXHVEREYwLVxcdURERkZdfFxcdURERjNcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQS1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREY0XFx1RERGNVxcdURERjdcXHVEREZBXFx1RERGRl18XFx1RERGNFxcdUQ4M0NcXHVEREYyfFxcdURERjVcXHVEODNDW1xcdURERTZcXHVEREVBLVxcdURERURcXHVEREYwLVxcdURERjNcXHVEREY3LVxcdURERjlcXHVEREZDXFx1RERGRV18XFx1RERGNlxcdUQ4M0NcXHVEREU2fFxcdURERjdcXHVEODNDW1xcdURERUFcXHVEREY0XFx1RERGOFxcdURERkFcXHVEREZDXXxcXHVEREY4XFx1RDgzQ1tcXHVEREU2LVxcdURERUFcXHVEREVDLVxcdURERjRcXHVEREY3LVxcdURERjlcXHVEREZCXFx1RERGRC1cXHVEREZGXXxcXHVEREY5XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERURcXHVEREVGLVxcdURERjRcXHVEREY3XFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRl18XFx1RERGQVxcdUQ4M0NbXFx1RERFNlxcdURERUNcXHVEREYyXFx1RERGM1xcdURERjhcXHVEREZFXFx1RERGRl18XFx1RERGQlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERUVcXHVEREYzXFx1RERGQV18XFx1RERGQ1xcdUQ4M0NbXFx1RERFQlxcdURERjhdfFxcdURERkRcXHVEODNDXFx1RERGMHxcXHVEREZFXFx1RDgzQ1tcXHVEREVBXFx1RERGOV18XFx1RERGRlxcdUQ4M0NbXFx1RERFNlxcdURERjJcXHVEREZDXXxcXHVERjQ0KD86XFx1MjAwRFxcdUQ4M0RcXHVERkVCKT98XFx1REY0Qig/OlxcdTIwMERcXHVEODNEXFx1REZFOSk/fFxcdURGQzMoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMEQoPzpbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98XFx1MjdBMVxcdUZFMEY/KSk/fFxcdURGRjNcXHVGRTBGPyg/OlxcdTIwMEQoPzpcXHUyNkE3XFx1RkUwRj98XFx1RDgzQ1xcdURGMDgpKT98XFx1REZGNCg/OlxcdTIwMERcXHUyNjIwXFx1RkUwRj98XFx1REI0MFxcdURDNjdcXHVEQjQwXFx1REM2MlxcdURCNDAoPzpcXHVEQzY1XFx1REI0MFxcdURDNkVcXHVEQjQwXFx1REM2N3xcXHVEQzczXFx1REI0MFxcdURDNjNcXHVEQjQwXFx1REM3NHxcXHVEQzc3XFx1REI0MFxcdURDNkNcXHVEQjQwXFx1REM3MylcXHVEQjQwXFx1REM3Rik/KXxcXHVEODNEKD86W1xcdURDM0ZcXHVEQ0ZEXFx1REQ0OVxcdURENEFcXHVERDZGXFx1REQ3MFxcdURENzNcXHVERDc2LVxcdURENzlcXHVERDg3XFx1REQ4QS1cXHVERDhEXFx1RERBNVxcdUREQThcXHVEREIxXFx1RERCMlxcdUREQkNcXHVEREMyLVxcdUREQzRcXHVEREQxLVxcdURERDNcXHVERERDLVxcdUREREVcXHVEREUxXFx1RERFM1xcdURERThcXHVEREVGXFx1RERGM1xcdURERkFcXHVERUNCXFx1REVDRC1cXHVERUNGXFx1REVFMC1cXHVERUU1XFx1REVFOVxcdURFRjBcXHVERUYzXVxcdUZFMEY/fFtcXHVEQzQyXFx1REM0M1xcdURDNDYtXFx1REM1MFxcdURDNjZcXHVEQzY3XFx1REM2Qi1cXHVEQzZEXFx1REM3MlxcdURDNzQtXFx1REM3NlxcdURDNzhcXHVEQzdDXFx1REM4M1xcdURDODVcXHVEQzhGXFx1REM5MVxcdURDQUFcXHVERDdBXFx1REQ5NVxcdUREOTZcXHVERTRDXFx1REU0RlxcdURFQzBcXHVERUNDXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHVEQzZFXFx1REM3MFxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNFxcdURFQjVdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdURENzRcXHVERDkwXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVGRTBGKT98W1xcdURDMDAtXFx1REMwN1xcdURDMDktXFx1REMxNFxcdURDMTYtXFx1REMyNVxcdURDMjctXFx1REMzQVxcdURDM0MtXFx1REMzRVxcdURDNDBcXHVEQzQ0XFx1REM0NVxcdURDNTEtXFx1REM2NVxcdURDNkFcXHVEQzc5LVxcdURDN0JcXHVEQzdELVxcdURDODBcXHVEQzg0XFx1REM4OC1cXHVEQzhFXFx1REM5MFxcdURDOTItXFx1RENBOVxcdURDQUItXFx1RENGQ1xcdURDRkYtXFx1REQzRFxcdURENEItXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdUREQTRcXHVEREZCLVxcdURFMkRcXHVERTJGLVxcdURFMzRcXHVERTM3LVxcdURFNDFcXHVERTQzXFx1REU0NFxcdURFNDgtXFx1REU0QVxcdURFODAtXFx1REVBMlxcdURFQTQtXFx1REVCM1xcdURFQjctXFx1REVCRlxcdURFQzEtXFx1REVDNVxcdURFRDAtXFx1REVEMlxcdURFRDUtXFx1REVEN1xcdURFREMtXFx1REVERlxcdURFRUJcXHVERUVDXFx1REVGNC1cXHVERUZDXFx1REZFMC1cXHVERkVCXFx1REZGMF18XFx1REMwOCg/OlxcdTIwMERcXHUyQjFCKT98XFx1REMxNSg/OlxcdTIwMERcXHVEODNFXFx1RERCQSk/fFxcdURDMjYoPzpcXHUyMDBEKD86XFx1MkIxQnxcXHVEODNEXFx1REQyNSkpP3xcXHVEQzNCKD86XFx1MjAwRFxcdTI3NDRcXHVGRTBGPyk/fFxcdURDNDFcXHVGRTBGPyg/OlxcdTIwMERcXHVEODNEXFx1RERFOFxcdUZFMEY/KT98XFx1REM2OCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4fFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldXFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KXxbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM10pKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXSkpKT98XFx1REZGQyg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSkpKT98XFx1REZGRig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSkpKT8pKT98XFx1REM2OSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9bXFx1REM2OFxcdURDNjldfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/fFxcdURDNjlcXHUyMDBEXFx1RDgzRCg/OlxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT8pKXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM10pKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSkpKT98XFx1REZGRCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKSkpPykpP3xcXHVEQzZGKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFxcdURENzUoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFxcdURFMkUoPzpcXHUyMDBEXFx1RDgzRFxcdURDQTgpP3xcXHVERTM1KD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0FCKT98XFx1REUzNig/OlxcdTIwMERcXHVEODNDXFx1REYyQlxcdUZFMEY/KT98XFx1REU0Mig/OlxcdTIwMERbXFx1MjE5NFxcdTIxOTVdXFx1RkUwRj8pP3xcXHVERUI2KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpPyl8XFx1RDgzRSg/OltcXHVERDBDXFx1REQwRlxcdUREMTgtXFx1REQxRlxcdUREMzAtXFx1REQzNFxcdUREMzZcXHVERDc3XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMlxcdURERDNcXHVEREQ1XFx1REVDMy1cXHVERUM1XFx1REVGMFxcdURFRjItXFx1REVGOF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REQyNlxcdUREMzVcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRFxcdUREQ0ZcXHVEREQ0XFx1RERENi1cXHVEREREXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERERFXFx1RERERl0oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdUREMERcXHVERDBFXFx1REQxMC1cXHVERDE3XFx1REQyMC1cXHVERDI1XFx1REQyNy1cXHVERDJGXFx1REQzQVxcdUREM0YtXFx1REQ0NVxcdURENDctXFx1REQ3NlxcdURENzgtXFx1RERCNFxcdUREQjdcXHVEREJBXFx1RERCQy1cXHVERENDXFx1REREMFxcdURERTAtXFx1RERGRlxcdURFNzAtXFx1REU3Q1xcdURFODAtXFx1REU4OVxcdURFOEYtXFx1REVDMlxcdURFQzZcXHVERUNFLVxcdURFRENcXHVERURGLVxcdURFRTldfFxcdUREM0MoPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/fFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFxcdUREQ0UoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMEQoPzpbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98XFx1MjdBMVxcdUZFMEY/KSk/fFxcdURERDEoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdURERDFcXHUyMDBEXFx1RDgzRVxcdURERDIoPzpcXHUyMDBEXFx1RDgzRVxcdURERDIpP3xcXHVEREQyKD86XFx1MjAwRFxcdUQ4M0VcXHVEREQyKT8pKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpPykpP3xcXHVERUYxKD86XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pP3xcXHVERkZDKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSk/fFxcdURGRkQoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKT98XFx1REZGRSg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pP3xcXHVERkZGKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKT8pKT8pL2c7XG59O1xuIiwgbnVsbCwgIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyBub3RTdHJpY3RFcXVhbCwgc3RyaWN0RXF1YWwgfSBmcm9tICdhc3NlcnQnXG5pbXBvcnQgY2xpdWkgZnJvbSAnY2xpdWknXG5pbXBvcnQgZXNjYWxhZGUgZnJvbSAnZXNjYWxhZGUvc3luYydcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgUGFyc2VyIGZyb20gJ3lhcmdzLXBhcnNlcidcbmltcG9ydCB7IGJhc2VuYW1lLCBkaXJuYW1lLCBleHRuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRQcm9jZXNzQXJndkJpbiB9IGZyb20gJy4uLy4uL2J1aWxkL2xpYi91dGlscy9wcm9jZXNzLWFyZ3YuanMnXG5pbXBvcnQgc3RyaW5nV2lkdGggZnJvbSAnc3RyaW5nLXdpZHRoJztcbmltcG9ydCB5MThuIGZyb20gJ3kxOG4nXG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnO1xuaW1wb3J0IGdldENhbGxlckZpbGUgZnJvbSAnZ2V0LWNhbGxlci1maWxlJztcbmltcG9ydCB7IHJlYWRGaWxlU3luYywgcmVhZGRpclN5bmMgfSBmcm9tICdub2RlOmZzJ1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBtYWluRmlsZW5hbWUgPSBfX2Rpcm5hbWUuc3Vic3RyaW5nKDAsIF9fZGlybmFtZS5sYXN0SW5kZXhPZignbm9kZV9tb2R1bGVzJykpO1xuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3NlcnQ6IHtcbiAgICBub3RTdHJpY3RFcXVhbCxcbiAgICBzdHJpY3RFcXVhbFxuICB9LFxuICBjbGl1aSxcbiAgZmluZFVwOiBlc2NhbGFkZSxcbiAgZ2V0RW52OiAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52W2tleV1cbiAgfSxcbiAgaW5zcGVjdCxcbiAgZ2V0UHJvY2Vzc0FyZ3ZCaW4sXG4gIG1haW5GaWxlbmFtZTogbWFpbkZpbGVuYW1lIHx8IHByb2Nlc3MuY3dkKCksXG4gIFBhcnNlcixcbiAgcGF0aDoge1xuICAgIGJhc2VuYW1lLFxuICAgIGRpcm5hbWUsXG4gICAgZXh0bmFtZSxcbiAgICByZWxhdGl2ZSxcbiAgICByZXNvbHZlLFxuICAgIGpvaW5cbiAgfSxcbiAgcHJvY2Vzczoge1xuICAgIGFyZ3Y6ICgpID0+IHByb2Nlc3MuYXJndixcbiAgICBjd2Q6IHByb2Nlc3MuY3dkLFxuICAgIGVtaXRXYXJuaW5nOiAod2FybmluZywgdHlwZSkgPT4gcHJvY2Vzcy5lbWl0V2FybmluZyh3YXJuaW5nLCB0eXBlKSxcbiAgICBleGVjUGF0aDogKCkgPT4gcHJvY2Vzcy5leGVjUGF0aCxcbiAgICBleGl0OiAoY29kZSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG4vbm8tcHJvY2Vzcy1leGl0XG4gICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgfSxcbiAgICBuZXh0VGljazogcHJvY2Vzcy5uZXh0VGljayxcbiAgICBzdGRDb2x1bW5zOiB0eXBlb2YgcHJvY2Vzcy5zdGRvdXQuY29sdW1ucyAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9jZXNzLnN0ZG91dC5jb2x1bW5zIDogbnVsbFxuICB9LFxuICByZWFkRmlsZVN5bmMsXG4gIHJlYWRkaXJTeW5jLFxuICByZXF1aXJlLFxuICBnZXRDYWxsZXJGaWxlOiAoKSA9PiB7XG4gICAgY29uc3QgY2FsbGVyRmlsZSA9IGdldENhbGxlckZpbGUoMyk7XG4gICAgcmV0dXJuIGNhbGxlckZpbGUubWF0Y2goL15maWxlOlxcL1xcLy8pID8gZmlsZVVSTFRvUGF0aChjYWxsZXJGaWxlKSA6IGNhbGxlckZpbGU7XG4gIH0sXG4gIHN0cmluZ1dpZHRoLFxuICB5MThuOiB5MThuKHtcbiAgICBkaXJlY3Rvcnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vbG9jYWxlcycpLFxuICAgIHVwZGF0ZUZpbGVzOiBmYWxzZVxuICB9KVxufVxuIiwgIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFsaWduID0ge1xuICAgIHJpZ2h0OiBhbGlnblJpZ2h0LFxuICAgIGNlbnRlcjogYWxpZ25DZW50ZXJcbn07XG5jb25zdCB0b3AgPSAwO1xuY29uc3QgcmlnaHQgPSAxO1xuY29uc3QgYm90dG9tID0gMjtcbmNvbnN0IGxlZnQgPSAzO1xuZXhwb3J0IGNsYXNzIFVJIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdHMud2lkdGg7XG4gICAgICAgIHRoaXMud3JhcCA9IChfYSA9IG9wdHMud3JhcCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgfVxuICAgIHNwYW4oLi4uYXJncykge1xuICAgICAgICBjb25zdCBjb2xzID0gdGhpcy5kaXYoLi4uYXJncyk7XG4gICAgICAgIGNvbHMuc3BhbiA9IHRydWU7XG4gICAgfVxuICAgIHJlc2V0T3V0cHV0KCkge1xuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcbiAgICB9XG4gICAgZGl2KC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpdignJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud3JhcCAmJiB0aGlzLnNob3VsZEFwcGx5TGF5b3V0RFNMKC4uLmFyZ3MpICYmIHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlMYXlvdXREU0woYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29scyA9IGFyZ3MubWFwKGFyZyA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xGcm9tU3RyaW5nKGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb3dzLnB1c2goY29scyk7XG4gICAgICAgIHJldHVybiBjb2xzO1xuICAgIH1cbiAgICBzaG91bGRBcHBseUxheW91dERTTCguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgIC9bXFx0XFxuXS8udGVzdChhcmdzWzBdKTtcbiAgICB9XG4gICAgYXBwbHlMYXlvdXREU0woc3RyKSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChyb3cgPT4gcm93LnNwbGl0KCdcXHQnKSk7XG4gICAgICAgIGxldCBsZWZ0Q29sdW1uV2lkdGggPSAwO1xuICAgICAgICAvLyBzaW1wbGUgaGV1cmlzdGljIGZvciBsYXlvdXQsIG1ha2Ugc3VyZSB0aGVcbiAgICAgICAgLy8gc2Vjb25kIGNvbHVtbiBsaW5lcyB1cCBhbG9uZyB0aGUgbGVmdC1oYW5kLlxuICAgICAgICAvLyBkb24ndCBhbGxvdyB0aGUgZmlyc3QgY29sdW1uIHRvIHRha2UgdXAgbW9yZVxuICAgICAgICAvLyB0aGFuIDUwJSBvZiB0aGUgc2NyZWVuLlxuICAgICAgICByb3dzLmZvckVhY2goY29sdW1ucyA9PiB7XG4gICAgICAgICAgICBpZiAoY29sdW1ucy5sZW5ndGggPiAxICYmIG1peGluLnN0cmluZ1dpZHRoKGNvbHVtbnNbMF0pID4gbGVmdENvbHVtbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgbGVmdENvbHVtbldpZHRoID0gTWF0aC5taW4oTWF0aC5mbG9vcih0aGlzLndpZHRoICogMC41KSwgbWl4aW4uc3RyaW5nV2lkdGgoY29sdW1uc1swXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZ2VuZXJhdGUgYSB0YWJsZTpcbiAgICAgICAgLy8gIHJlcGxhY2luZyAnICcgd2l0aCBwYWRkaW5nIGNhbGN1bGF0aW9ucy5cbiAgICAgICAgLy8gIHVzaW5nIHRoZSBhbGdvcml0aG1pY2FsbHkgZ2VuZXJhdGVkIHdpZHRoLlxuICAgICAgICByb3dzLmZvckVhY2goY29sdW1ucyA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpdiguLi5jb2x1bW5zLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHIudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGlzLm1lYXN1cmVQYWRkaW5nKHIpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogKGkgPT09IDAgJiYgY29sdW1ucy5sZW5ndGggPiAxKSA/IGxlZnRDb2x1bW5XaWR0aCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dzW3RoaXMucm93cy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgY29sRnJvbVN0cmluZyh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgcGFkZGluZzogdGhpcy5tZWFzdXJlUGFkZGluZyh0ZXh0KVxuICAgICAgICB9O1xuICAgIH1cbiAgICBtZWFzdXJlUGFkZGluZyhzdHIpIHtcbiAgICAgICAgLy8gbWVhc3VyZSBwYWRkaW5nIHdpdGhvdXQgYW5zaSBlc2NhcGUgY29kZXNcbiAgICAgICAgY29uc3Qgbm9BbnNpID0gbWl4aW4uc3RyaXBBbnNpKHN0cik7XG4gICAgICAgIHJldHVybiBbMCwgbm9BbnNpLm1hdGNoKC9cXHMqJC8pWzBdLmxlbmd0aCwgMCwgbm9BbnNpLm1hdGNoKC9eXFxzKi8pWzBdLmxlbmd0aF07XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3dUb1N0cmluZyhyb3csIGxpbmVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGRvbid0IGRpc3BsYXkgYW55IGxpbmVzIHdpdGggdGhlXG4gICAgICAgIC8vIGhpZGRlbiBmbGFnIHNldC5cbiAgICAgICAgcmV0dXJuIGxpbmVzXG4gICAgICAgICAgICAuZmlsdGVyKGxpbmUgPT4gIWxpbmUuaGlkZGVuKVxuICAgICAgICAgICAgLm1hcChsaW5lID0+IGxpbmUudGV4dClcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICB9XG4gICAgcm93VG9TdHJpbmcocm93LCBsaW5lcykge1xuICAgICAgICB0aGlzLnJhc3Rlcml6ZShyb3cpLmZvckVhY2goKHJyb3csIHIpID0+IHtcbiAgICAgICAgICAgIGxldCBzdHIgPSAnJztcbiAgICAgICAgICAgIHJyb3cuZm9yRWFjaCgoY29sLCBjKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gcm93W2NdOyAvLyB0aGUgd2lkdGggd2l0aCBwYWRkaW5nLlxuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBXaWR0aCA9IHRoaXMubmVnYXRlUGFkZGluZyhyb3dbY10pOyAvLyB0aGUgd2lkdGggd2l0aG91dCBwYWRkaW5nLlxuICAgICAgICAgICAgICAgIGxldCB0cyA9IGNvbDsgLy8gdGVtcG9yYXJ5IHN0cmluZyB1c2VkIGR1cmluZyBhbGlnbm1lbnQvcGFkZGluZy5cbiAgICAgICAgICAgICAgICBpZiAod3JhcFdpZHRoID4gbWl4aW4uc3RyaW5nV2lkdGgoY29sKSkge1xuICAgICAgICAgICAgICAgICAgICB0cyArPSAnICcucmVwZWF0KHdyYXBXaWR0aCAtIG1peGluLnN0cmluZ1dpZHRoKGNvbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhbGlnbiB0aGUgc3RyaW5nIHdpdGhpbiBpdHMgY29sdW1uLlxuICAgICAgICAgICAgICAgIGlmIChyb3dbY10uYWxpZ24gJiYgcm93W2NdLmFsaWduICE9PSAnbGVmdCcgJiYgdGhpcy53cmFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZuID0gYWxpZ25bcm93W2NdLmFsaWduXTtcbiAgICAgICAgICAgICAgICAgICAgdHMgPSBmbih0cywgd3JhcFdpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1peGluLnN0cmluZ1dpZHRoKHRzKSA8IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHMgKz0gJyAnLnJlcGVhdCgod2lkdGggfHwgMCkgLSBtaXhpbi5zdHJpbmdXaWR0aCh0cykgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhcHBseSBib3JkZXIgYW5kIHBhZGRpbmcgdG8gc3RyaW5nLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSByb3dbY10ucGFkZGluZyB8fCBbMCwgMCwgMCwgMF07XG4gICAgICAgICAgICAgICAgaWYgKHBhZGRpbmdbbGVmdF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9ICcgJy5yZXBlYXQocGFkZGluZ1tsZWZ0XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0ciArPSBhZGRCb3JkZXIocm93W2NdLCB0cywgJ3wgJyk7XG4gICAgICAgICAgICAgICAgc3RyICs9IHRzO1xuICAgICAgICAgICAgICAgIHN0ciArPSBhZGRCb3JkZXIocm93W2NdLCB0cywgJyB8Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhZGRpbmdbcmlnaHRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnICcucmVwZWF0KHBhZGRpbmdbcmlnaHRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgcHJpb3Igcm93IGlzIHNwYW4sIHRyeSB0byByZW5kZXIgdGhlXG4gICAgICAgICAgICAgICAgLy8gY3VycmVudCByb3cgb24gdGhlIHByaW9yIGxpbmUuXG4gICAgICAgICAgICAgICAgaWYgKHIgPT09IDAgJiYgbGluZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSB0aGlzLnJlbmRlcklubGluZShzdHIsIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyB3aGl0ZXNwYWNlLlxuICAgICAgICAgICAgbGluZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyLnJlcGxhY2UoLyArJC8sICcnKSxcbiAgICAgICAgICAgICAgICBzcGFuOiByb3cuc3BhblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBmdWxsICdzb3VyY2UnIGNhbiByZW5kZXIgaW5cbiAgICAvLyB0aGUgdGFyZ2V0IGxpbmUsIGRvIHNvLlxuICAgIHJlbmRlcklubGluZShzb3VyY2UsIHByZXZpb3VzTGluZSkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHNvdXJjZS5tYXRjaCgvXiAqLyk7XG4gICAgICAgIGNvbnN0IGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2ggPyBtYXRjaFswXS5sZW5ndGggOiAwO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBwcmV2aW91c0xpbmUudGV4dDtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGV4dFdpZHRoID0gbWl4aW4uc3RyaW5nV2lkdGgodGFyZ2V0LnRyaW1SaWdodCgpKTtcbiAgICAgICAgaWYgKCFwcmV2aW91c0xpbmUuc3Bhbikge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSdyZSBub3QgYXBwbHlpbmcgd3JhcHBpbmcgbG9naWMsXG4gICAgICAgIC8vIGp1c3QgYWx3YXlzIGFwcGVuZCB0byB0aGUgc3Bhbi5cbiAgICAgICAgaWYgKCF0aGlzLndyYXApIHtcbiAgICAgICAgICAgIHByZXZpb3VzTGluZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldCArIHNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2UgPCB0YXJnZXRUZXh0V2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXNMaW5lLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIHJldHVybiB0YXJnZXQudHJpbVJpZ2h0KCkgKyAnICcucmVwZWF0KGxlYWRpbmdXaGl0ZXNwYWNlIC0gdGFyZ2V0VGV4dFdpZHRoKSArIHNvdXJjZS50cmltTGVmdCgpO1xuICAgIH1cbiAgICByYXN0ZXJpemUocm93KSB7XG4gICAgICAgIGNvbnN0IHJyb3dzID0gW107XG4gICAgICAgIGNvbnN0IHdpZHRocyA9IHRoaXMuY29sdW1uV2lkdGhzKHJvdyk7XG4gICAgICAgIGxldCB3cmFwcGVkO1xuICAgICAgICAvLyB3b3JkIHdyYXAgYWxsIGNvbHVtbnMsIGFuZCBjcmVhdGVcbiAgICAgICAgLy8gYSBkYXRhLXN0cnVjdHVyZSB0aGF0IGlzIGVhc3kgdG8gcmFzdGVyaXplLlxuICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjKSA9PiB7XG4gICAgICAgICAgICAvLyBsZWF2ZSByb29tIGZvciBsZWZ0IGFuZCByaWdodCBwYWRkaW5nLlxuICAgICAgICAgICAgY29sLndpZHRoID0gd2lkdGhzW2NdO1xuICAgICAgICAgICAgaWYgKHRoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZWQgPSBtaXhpbi53cmFwKGNvbC50ZXh0LCB0aGlzLm5lZ2F0ZVBhZGRpbmcoY29sKSwgeyBoYXJkOiB0cnVlIH0pLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdyYXBwZWQgPSBjb2wudGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sLmJvcmRlcikge1xuICAgICAgICAgICAgICAgIHdyYXBwZWQudW5zaGlmdCgnLicgKyAnLScucmVwZWF0KHRoaXMubmVnYXRlUGFkZGluZyhjb2wpICsgMikgKyAnLicpO1xuICAgICAgICAgICAgICAgIHdyYXBwZWQucHVzaChcIidcIiArICctJy5yZXBlYXQodGhpcy5uZWdhdGVQYWRkaW5nKGNvbCkgKyAyKSArIFwiJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFkZCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nLlxuICAgICAgICAgICAgaWYgKGNvbC5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlZC51bnNoaWZ0KC4uLm5ldyBBcnJheShjb2wucGFkZGluZ1t0b3BdIHx8IDApLmZpbGwoJycpKTtcbiAgICAgICAgICAgICAgICB3cmFwcGVkLnB1c2goLi4ubmV3IEFycmF5KGNvbC5wYWRkaW5nW2JvdHRvbV0gfHwgMCkuZmlsbCgnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlZC5mb3JFYWNoKChzdHIsIHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJyb3dzW3JdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJyb3dzLnB1c2goW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBycm93ID0gcnJvd3Nbcl07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJyb3dbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnJvdy5wdXNoKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycm93LnB1c2goc3RyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJyb3dzO1xuICAgIH1cbiAgICBuZWdhdGVQYWRkaW5nKGNvbCkge1xuICAgICAgICBsZXQgd3JhcFdpZHRoID0gY29sLndpZHRoIHx8IDA7XG4gICAgICAgIGlmIChjb2wucGFkZGluZykge1xuICAgICAgICAgICAgd3JhcFdpZHRoIC09IChjb2wucGFkZGluZ1tsZWZ0XSB8fCAwKSArIChjb2wucGFkZGluZ1tyaWdodF0gfHwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbC5ib3JkZXIpIHtcbiAgICAgICAgICAgIHdyYXBXaWR0aCAtPSA0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cmFwV2lkdGg7XG4gICAgfVxuICAgIGNvbHVtbldpZHRocyhyb3cpIHtcbiAgICAgICAgaWYgKCF0aGlzLndyYXApIHtcbiAgICAgICAgICAgIHJldHVybiByb3cubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbC53aWR0aCB8fCBtaXhpbi5zdHJpbmdXaWR0aChjb2wudGV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdW5zZXQgPSByb3cubGVuZ3RoO1xuICAgICAgICBsZXQgcmVtYWluaW5nV2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAvLyBjb2x1bW4gd2lkdGhzIGNhbiBiZSBzZXQgaW4gY29uZmlnLlxuICAgICAgICBjb25zdCB3aWR0aHMgPSByb3cubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICBpZiAoY29sLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdW5zZXQtLTtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdXaWR0aCAtPSBjb2wud2lkdGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbC53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhbnkgdW5zZXQgd2lkdGhzIHNob3VsZCBiZSBjYWxjdWxhdGVkLlxuICAgICAgICBjb25zdCB1bnNldFdpZHRoID0gdW5zZXQgPyBNYXRoLmZsb29yKHJlbWFpbmluZ1dpZHRoIC8gdW5zZXQpIDogMDtcbiAgICAgICAgcmV0dXJuIHdpZHRocy5tYXAoKHcsIGkpID0+IHtcbiAgICAgICAgICAgIGlmICh3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodW5zZXRXaWR0aCwgX21pbldpZHRoKHJvd1tpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZEJvcmRlcihjb2wsIHRzLCBzdHlsZSkge1xuICAgIGlmIChjb2wuYm9yZGVyKSB7XG4gICAgICAgIGlmICgvWy4nXS0rWy4nXS8udGVzdCh0cykpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHMudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnICAnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG4vLyBjYWxjdWxhdGVzIHRoZSBtaW5pbXVtIHdpZHRoIG9mXG4vLyBhIGNvbHVtbiwgYmFzZWQgb24gcGFkZGluZyBwcmVmZXJlbmNlcy5cbmZ1bmN0aW9uIF9taW5XaWR0aChjb2wpIHtcbiAgICBjb25zdCBwYWRkaW5nID0gY29sLnBhZGRpbmcgfHwgW107XG4gICAgY29uc3QgbWluV2lkdGggPSAxICsgKHBhZGRpbmdbbGVmdF0gfHwgMCkgKyAocGFkZGluZ1tyaWdodF0gfHwgMCk7XG4gICAgaWYgKGNvbC5ib3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIG1pbldpZHRoICsgNDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbldpZHRoO1xufVxuZnVuY3Rpb24gZ2V0V2luZG93V2lkdGgoKSB7XG4gICAgLyogYzggaWdub3JlIG5leHQgNTogZGVwZW5kcyBvbiB0ZXJtaW5hbCAqL1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5zdGRvdXQgJiYgcHJvY2Vzcy5zdGRvdXQuY29sdW1ucykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzcy5zdGRvdXQuY29sdW1ucztcbiAgICB9XG4gICAgcmV0dXJuIDgwO1xufVxuZnVuY3Rpb24gYWxpZ25SaWdodChzdHIsIHdpZHRoKSB7XG4gICAgc3RyID0gc3RyLnRyaW0oKTtcbiAgICBjb25zdCBzdHJXaWR0aCA9IG1peGluLnN0cmluZ1dpZHRoKHN0cik7XG4gICAgaWYgKHN0cldpZHRoIDwgd2lkdGgpIHtcbiAgICAgICAgcmV0dXJuICcgJy5yZXBlYXQod2lkdGggLSBzdHJXaWR0aCkgKyBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBhbGlnbkNlbnRlcihzdHIsIHdpZHRoKSB7XG4gICAgc3RyID0gc3RyLnRyaW0oKTtcbiAgICBjb25zdCBzdHJXaWR0aCA9IG1peGluLnN0cmluZ1dpZHRoKHN0cik7XG4gICAgLyogYzggaWdub3JlIG5leHQgMyAqL1xuICAgIGlmIChzdHJXaWR0aCA+PSB3aWR0aCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gJyAnLnJlcGVhdCgod2lkdGggLSBzdHJXaWR0aCkgPj4gMSkgKyBzdHI7XG59XG5sZXQgbWl4aW47XG5leHBvcnQgZnVuY3Rpb24gY2xpdWkob3B0cywgX21peGluKSB7XG4gICAgbWl4aW4gPSBfbWl4aW47XG4gICAgcmV0dXJuIG5ldyBVSSh7XG4gICAgICAgIHdpZHRoOiAob3B0cyA9PT0gbnVsbCB8fCBvcHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRzLndpZHRoKSB8fCBnZXRXaW5kb3dXaWR0aCgpLFxuICAgICAgICB3cmFwOiBvcHRzID09PSBudWxsIHx8IG9wdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdHMud3JhcFxuICAgIH0pO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuc2lSZWdleCh7b25seUZpcnN0ID0gZmFsc2V9ID0ge30pIHtcblx0Ly8gVmFsaWQgc3RyaW5nIHRlcm1pbmF0b3Igc2VxdWVuY2VzIGFyZSBCRUwsIEVTQ1xcLCBhbmQgMHg5Y1xuXHRjb25zdCBTVCA9ICcoPzpcXFxcdTAwMDd8XFxcXHUwMDFCXFxcXHUwMDVDfFxcXFx1MDA5QyknO1xuXHRjb25zdCBwYXR0ZXJuID0gW1xuXHRcdGBbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86KD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKykqfFthLXpBLVpcXFxcZF0rKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT8ke1NUfSlgLFxuXHRcdCcoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW5xLXV5PT48fl0pKScsXG5cdF0uam9pbignfCcpO1xuXG5cdHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sIG9ubHlGaXJzdCA/IHVuZGVmaW5lZCA6ICdnJyk7XG59XG4iLCAiaW1wb3J0IGFuc2lSZWdleCBmcm9tICdhbnNpLXJlZ2V4JztcblxuY29uc3QgcmVnZXggPSBhbnNpUmVnZXgoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaXBBbnNpKHN0cmluZykge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIFxcYHN0cmluZ1xcYCwgZ290IFxcYCR7dHlwZW9mIHN0cmluZ31cXGBgKTtcblx0fVxuXG5cdC8vIEV2ZW4gdGhvdWdoIHRoZSByZWdleCBpcyBnbG9iYWwsIHdlIGRvbid0IG5lZWQgdG8gcmVzZXQgdGhlIGAubGFzdEluZGV4YFxuXHQvLyBiZWNhdXNlIHVubGlrZSBgLmV4ZWMoKWAgYW5kIGAudGVzdCgpYCwgYC5yZXBsYWNlKClgIGRvZXMgaXQgYXV0b21hdGljYWxseVxuXHQvLyBhbmQgZG9pbmcgaXQgbWFudWFsbHkgaGFzIGEgcGVyZm9ybWFuY2UgcGVuYWx0eS5cblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4LCAnJyk7XG59XG4iLCAiLy8gR2VuZXJhdGVkIGNvZGUuXG5cbmZ1bmN0aW9uIGlzQW1iaWd1b3VzKHgpIHtcblx0cmV0dXJuIHggPT09IDB4QTFcblx0XHR8fCB4ID09PSAweEE0XG5cdFx0fHwgeCA9PT0gMHhBN1xuXHRcdHx8IHggPT09IDB4QThcblx0XHR8fCB4ID09PSAweEFBXG5cdFx0fHwgeCA9PT0gMHhBRFxuXHRcdHx8IHggPT09IDB4QUVcblx0XHR8fCB4ID49IDB4QjAgJiYgeCA8PSAweEI0XG5cdFx0fHwgeCA+PSAweEI2ICYmIHggPD0gMHhCQVxuXHRcdHx8IHggPj0gMHhCQyAmJiB4IDw9IDB4QkZcblx0XHR8fCB4ID09PSAweEM2XG5cdFx0fHwgeCA9PT0gMHhEMFxuXHRcdHx8IHggPT09IDB4RDdcblx0XHR8fCB4ID09PSAweEQ4XG5cdFx0fHwgeCA+PSAweERFICYmIHggPD0gMHhFMVxuXHRcdHx8IHggPT09IDB4RTZcblx0XHR8fCB4ID49IDB4RTggJiYgeCA8PSAweEVBXG5cdFx0fHwgeCA9PT0gMHhFQ1xuXHRcdHx8IHggPT09IDB4RURcblx0XHR8fCB4ID09PSAweEYwXG5cdFx0fHwgeCA9PT0gMHhGMlxuXHRcdHx8IHggPT09IDB4RjNcblx0XHR8fCB4ID49IDB4RjcgJiYgeCA8PSAweEZBXG5cdFx0fHwgeCA9PT0gMHhGQ1xuXHRcdHx8IHggPT09IDB4RkVcblx0XHR8fCB4ID09PSAweDEwMVxuXHRcdHx8IHggPT09IDB4MTExXG5cdFx0fHwgeCA9PT0gMHgxMTNcblx0XHR8fCB4ID09PSAweDExQlxuXHRcdHx8IHggPT09IDB4MTI2XG5cdFx0fHwgeCA9PT0gMHgxMjdcblx0XHR8fCB4ID09PSAweDEyQlxuXHRcdHx8IHggPj0gMHgxMzEgJiYgeCA8PSAweDEzM1xuXHRcdHx8IHggPT09IDB4MTM4XG5cdFx0fHwgeCA+PSAweDEzRiAmJiB4IDw9IDB4MTQyXG5cdFx0fHwgeCA9PT0gMHgxNDRcblx0XHR8fCB4ID49IDB4MTQ4ICYmIHggPD0gMHgxNEJcblx0XHR8fCB4ID09PSAweDE0RFxuXHRcdHx8IHggPT09IDB4MTUyXG5cdFx0fHwgeCA9PT0gMHgxNTNcblx0XHR8fCB4ID09PSAweDE2NlxuXHRcdHx8IHggPT09IDB4MTY3XG5cdFx0fHwgeCA9PT0gMHgxNkJcblx0XHR8fCB4ID09PSAweDFDRVxuXHRcdHx8IHggPT09IDB4MUQwXG5cdFx0fHwgeCA9PT0gMHgxRDJcblx0XHR8fCB4ID09PSAweDFENFxuXHRcdHx8IHggPT09IDB4MUQ2XG5cdFx0fHwgeCA9PT0gMHgxRDhcblx0XHR8fCB4ID09PSAweDFEQVxuXHRcdHx8IHggPT09IDB4MURDXG5cdFx0fHwgeCA9PT0gMHgyNTFcblx0XHR8fCB4ID09PSAweDI2MVxuXHRcdHx8IHggPT09IDB4MkM0XG5cdFx0fHwgeCA9PT0gMHgyQzdcblx0XHR8fCB4ID49IDB4MkM5ICYmIHggPD0gMHgyQ0Jcblx0XHR8fCB4ID09PSAweDJDRFxuXHRcdHx8IHggPT09IDB4MkQwXG5cdFx0fHwgeCA+PSAweDJEOCAmJiB4IDw9IDB4MkRCXG5cdFx0fHwgeCA9PT0gMHgyRERcblx0XHR8fCB4ID09PSAweDJERlxuXHRcdHx8IHggPj0gMHgzMDAgJiYgeCA8PSAweDM2RlxuXHRcdHx8IHggPj0gMHgzOTEgJiYgeCA8PSAweDNBMVxuXHRcdHx8IHggPj0gMHgzQTMgJiYgeCA8PSAweDNBOVxuXHRcdHx8IHggPj0gMHgzQjEgJiYgeCA8PSAweDNDMVxuXHRcdHx8IHggPj0gMHgzQzMgJiYgeCA8PSAweDNDOVxuXHRcdHx8IHggPT09IDB4NDAxXG5cdFx0fHwgeCA+PSAweDQxMCAmJiB4IDw9IDB4NDRGXG5cdFx0fHwgeCA9PT0gMHg0NTFcblx0XHR8fCB4ID09PSAweDIwMTBcblx0XHR8fCB4ID49IDB4MjAxMyAmJiB4IDw9IDB4MjAxNlxuXHRcdHx8IHggPT09IDB4MjAxOFxuXHRcdHx8IHggPT09IDB4MjAxOVxuXHRcdHx8IHggPT09IDB4MjAxQ1xuXHRcdHx8IHggPT09IDB4MjAxRFxuXHRcdHx8IHggPj0gMHgyMDIwICYmIHggPD0gMHgyMDIyXG5cdFx0fHwgeCA+PSAweDIwMjQgJiYgeCA8PSAweDIwMjdcblx0XHR8fCB4ID09PSAweDIwMzBcblx0XHR8fCB4ID09PSAweDIwMzJcblx0XHR8fCB4ID09PSAweDIwMzNcblx0XHR8fCB4ID09PSAweDIwMzVcblx0XHR8fCB4ID09PSAweDIwM0Jcblx0XHR8fCB4ID09PSAweDIwM0Vcblx0XHR8fCB4ID09PSAweDIwNzRcblx0XHR8fCB4ID09PSAweDIwN0Zcblx0XHR8fCB4ID49IDB4MjA4MSAmJiB4IDw9IDB4MjA4NFxuXHRcdHx8IHggPT09IDB4MjBBQ1xuXHRcdHx8IHggPT09IDB4MjEwM1xuXHRcdHx8IHggPT09IDB4MjEwNVxuXHRcdHx8IHggPT09IDB4MjEwOVxuXHRcdHx8IHggPT09IDB4MjExM1xuXHRcdHx8IHggPT09IDB4MjExNlxuXHRcdHx8IHggPT09IDB4MjEyMVxuXHRcdHx8IHggPT09IDB4MjEyMlxuXHRcdHx8IHggPT09IDB4MjEyNlxuXHRcdHx8IHggPT09IDB4MjEyQlxuXHRcdHx8IHggPT09IDB4MjE1M1xuXHRcdHx8IHggPT09IDB4MjE1NFxuXHRcdHx8IHggPj0gMHgyMTVCICYmIHggPD0gMHgyMTVFXG5cdFx0fHwgeCA+PSAweDIxNjAgJiYgeCA8PSAweDIxNkJcblx0XHR8fCB4ID49IDB4MjE3MCAmJiB4IDw9IDB4MjE3OVxuXHRcdHx8IHggPT09IDB4MjE4OVxuXHRcdHx8IHggPj0gMHgyMTkwICYmIHggPD0gMHgyMTk5XG5cdFx0fHwgeCA9PT0gMHgyMUI4XG5cdFx0fHwgeCA9PT0gMHgyMUI5XG5cdFx0fHwgeCA9PT0gMHgyMUQyXG5cdFx0fHwgeCA9PT0gMHgyMUQ0XG5cdFx0fHwgeCA9PT0gMHgyMUU3XG5cdFx0fHwgeCA9PT0gMHgyMjAwXG5cdFx0fHwgeCA9PT0gMHgyMjAyXG5cdFx0fHwgeCA9PT0gMHgyMjAzXG5cdFx0fHwgeCA9PT0gMHgyMjA3XG5cdFx0fHwgeCA9PT0gMHgyMjA4XG5cdFx0fHwgeCA9PT0gMHgyMjBCXG5cdFx0fHwgeCA9PT0gMHgyMjBGXG5cdFx0fHwgeCA9PT0gMHgyMjExXG5cdFx0fHwgeCA9PT0gMHgyMjE1XG5cdFx0fHwgeCA9PT0gMHgyMjFBXG5cdFx0fHwgeCA+PSAweDIyMUQgJiYgeCA8PSAweDIyMjBcblx0XHR8fCB4ID09PSAweDIyMjNcblx0XHR8fCB4ID09PSAweDIyMjVcblx0XHR8fCB4ID49IDB4MjIyNyAmJiB4IDw9IDB4MjIyQ1xuXHRcdHx8IHggPT09IDB4MjIyRVxuXHRcdHx8IHggPj0gMHgyMjM0ICYmIHggPD0gMHgyMjM3XG5cdFx0fHwgeCA9PT0gMHgyMjNDXG5cdFx0fHwgeCA9PT0gMHgyMjNEXG5cdFx0fHwgeCA9PT0gMHgyMjQ4XG5cdFx0fHwgeCA9PT0gMHgyMjRDXG5cdFx0fHwgeCA9PT0gMHgyMjUyXG5cdFx0fHwgeCA9PT0gMHgyMjYwXG5cdFx0fHwgeCA9PT0gMHgyMjYxXG5cdFx0fHwgeCA+PSAweDIyNjQgJiYgeCA8PSAweDIyNjdcblx0XHR8fCB4ID09PSAweDIyNkFcblx0XHR8fCB4ID09PSAweDIyNkJcblx0XHR8fCB4ID09PSAweDIyNkVcblx0XHR8fCB4ID09PSAweDIyNkZcblx0XHR8fCB4ID09PSAweDIyODJcblx0XHR8fCB4ID09PSAweDIyODNcblx0XHR8fCB4ID09PSAweDIyODZcblx0XHR8fCB4ID09PSAweDIyODdcblx0XHR8fCB4ID09PSAweDIyOTVcblx0XHR8fCB4ID09PSAweDIyOTlcblx0XHR8fCB4ID09PSAweDIyQTVcblx0XHR8fCB4ID09PSAweDIyQkZcblx0XHR8fCB4ID09PSAweDIzMTJcblx0XHR8fCB4ID49IDB4MjQ2MCAmJiB4IDw9IDB4MjRFOVxuXHRcdHx8IHggPj0gMHgyNEVCICYmIHggPD0gMHgyNTRCXG5cdFx0fHwgeCA+PSAweDI1NTAgJiYgeCA8PSAweDI1NzNcblx0XHR8fCB4ID49IDB4MjU4MCAmJiB4IDw9IDB4MjU4RlxuXHRcdHx8IHggPj0gMHgyNTkyICYmIHggPD0gMHgyNTk1XG5cdFx0fHwgeCA9PT0gMHgyNUEwXG5cdFx0fHwgeCA9PT0gMHgyNUExXG5cdFx0fHwgeCA+PSAweDI1QTMgJiYgeCA8PSAweDI1QTlcblx0XHR8fCB4ID09PSAweDI1QjJcblx0XHR8fCB4ID09PSAweDI1QjNcblx0XHR8fCB4ID09PSAweDI1QjZcblx0XHR8fCB4ID09PSAweDI1Qjdcblx0XHR8fCB4ID09PSAweDI1QkNcblx0XHR8fCB4ID09PSAweDI1QkRcblx0XHR8fCB4ID09PSAweDI1QzBcblx0XHR8fCB4ID09PSAweDI1QzFcblx0XHR8fCB4ID49IDB4MjVDNiAmJiB4IDw9IDB4MjVDOFxuXHRcdHx8IHggPT09IDB4MjVDQlxuXHRcdHx8IHggPj0gMHgyNUNFICYmIHggPD0gMHgyNUQxXG5cdFx0fHwgeCA+PSAweDI1RTIgJiYgeCA8PSAweDI1RTVcblx0XHR8fCB4ID09PSAweDI1RUZcblx0XHR8fCB4ID09PSAweDI2MDVcblx0XHR8fCB4ID09PSAweDI2MDZcblx0XHR8fCB4ID09PSAweDI2MDlcblx0XHR8fCB4ID09PSAweDI2MEVcblx0XHR8fCB4ID09PSAweDI2MEZcblx0XHR8fCB4ID09PSAweDI2MUNcblx0XHR8fCB4ID09PSAweDI2MUVcblx0XHR8fCB4ID09PSAweDI2NDBcblx0XHR8fCB4ID09PSAweDI2NDJcblx0XHR8fCB4ID09PSAweDI2NjBcblx0XHR8fCB4ID09PSAweDI2NjFcblx0XHR8fCB4ID49IDB4MjY2MyAmJiB4IDw9IDB4MjY2NVxuXHRcdHx8IHggPj0gMHgyNjY3ICYmIHggPD0gMHgyNjZBXG5cdFx0fHwgeCA9PT0gMHgyNjZDXG5cdFx0fHwgeCA9PT0gMHgyNjZEXG5cdFx0fHwgeCA9PT0gMHgyNjZGXG5cdFx0fHwgeCA9PT0gMHgyNjlFXG5cdFx0fHwgeCA9PT0gMHgyNjlGXG5cdFx0fHwgeCA9PT0gMHgyNkJGXG5cdFx0fHwgeCA+PSAweDI2QzYgJiYgeCA8PSAweDI2Q0Rcblx0XHR8fCB4ID49IDB4MjZDRiAmJiB4IDw9IDB4MjZEM1xuXHRcdHx8IHggPj0gMHgyNkQ1ICYmIHggPD0gMHgyNkUxXG5cdFx0fHwgeCA9PT0gMHgyNkUzXG5cdFx0fHwgeCA9PT0gMHgyNkU4XG5cdFx0fHwgeCA9PT0gMHgyNkU5XG5cdFx0fHwgeCA+PSAweDI2RUIgJiYgeCA8PSAweDI2RjFcblx0XHR8fCB4ID09PSAweDI2RjRcblx0XHR8fCB4ID49IDB4MjZGNiAmJiB4IDw9IDB4MjZGOVxuXHRcdHx8IHggPT09IDB4MjZGQlxuXHRcdHx8IHggPT09IDB4MjZGQ1xuXHRcdHx8IHggPT09IDB4MjZGRVxuXHRcdHx8IHggPT09IDB4MjZGRlxuXHRcdHx8IHggPT09IDB4MjczRFxuXHRcdHx8IHggPj0gMHgyNzc2ICYmIHggPD0gMHgyNzdGXG5cdFx0fHwgeCA+PSAweDJCNTYgJiYgeCA8PSAweDJCNTlcblx0XHR8fCB4ID49IDB4MzI0OCAmJiB4IDw9IDB4MzI0RlxuXHRcdHx8IHggPj0gMHhFMDAwICYmIHggPD0gMHhGOEZGXG5cdFx0fHwgeCA+PSAweEZFMDAgJiYgeCA8PSAweEZFMEZcblx0XHR8fCB4ID09PSAweEZGRkRcblx0XHR8fCB4ID49IDB4MUYxMDAgJiYgeCA8PSAweDFGMTBBXG5cdFx0fHwgeCA+PSAweDFGMTEwICYmIHggPD0gMHgxRjEyRFxuXHRcdHx8IHggPj0gMHgxRjEzMCAmJiB4IDw9IDB4MUYxNjlcblx0XHR8fCB4ID49IDB4MUYxNzAgJiYgeCA8PSAweDFGMThEXG5cdFx0fHwgeCA9PT0gMHgxRjE4RlxuXHRcdHx8IHggPT09IDB4MUYxOTBcblx0XHR8fCB4ID49IDB4MUYxOUIgJiYgeCA8PSAweDFGMUFDXG5cdFx0fHwgeCA+PSAweEUwMTAwICYmIHggPD0gMHhFMDFFRlxuXHRcdHx8IHggPj0gMHhGMDAwMCAmJiB4IDw9IDB4RkZGRkRcblx0XHR8fCB4ID49IDB4MTAwMDAwICYmIHggPD0gMHgxMEZGRkQ7XG59XG5cbmZ1bmN0aW9uIGlzRnVsbFdpZHRoKHgpIHtcblx0cmV0dXJuIHggPT09IDB4MzAwMFxuXHRcdHx8IHggPj0gMHhGRjAxICYmIHggPD0gMHhGRjYwXG5cdFx0fHwgeCA+PSAweEZGRTAgJiYgeCA8PSAweEZGRTY7XG59XG5cbmZ1bmN0aW9uIGlzV2lkZSh4KSB7XG5cdHJldHVybiB4ID49IDB4MTEwMCAmJiB4IDw9IDB4MTE1RlxuXHRcdHx8IHggPT09IDB4MjMxQVxuXHRcdHx8IHggPT09IDB4MjMxQlxuXHRcdHx8IHggPT09IDB4MjMyOVxuXHRcdHx8IHggPT09IDB4MjMyQVxuXHRcdHx8IHggPj0gMHgyM0U5ICYmIHggPD0gMHgyM0VDXG5cdFx0fHwgeCA9PT0gMHgyM0YwXG5cdFx0fHwgeCA9PT0gMHgyM0YzXG5cdFx0fHwgeCA9PT0gMHgyNUZEXG5cdFx0fHwgeCA9PT0gMHgyNUZFXG5cdFx0fHwgeCA9PT0gMHgyNjE0XG5cdFx0fHwgeCA9PT0gMHgyNjE1XG5cdFx0fHwgeCA+PSAweDI2MzAgJiYgeCA8PSAweDI2Mzdcblx0XHR8fCB4ID49IDB4MjY0OCAmJiB4IDw9IDB4MjY1M1xuXHRcdHx8IHggPT09IDB4MjY3RlxuXHRcdHx8IHggPj0gMHgyNjhBICYmIHggPD0gMHgyNjhGXG5cdFx0fHwgeCA9PT0gMHgyNjkzXG5cdFx0fHwgeCA9PT0gMHgyNkExXG5cdFx0fHwgeCA9PT0gMHgyNkFBXG5cdFx0fHwgeCA9PT0gMHgyNkFCXG5cdFx0fHwgeCA9PT0gMHgyNkJEXG5cdFx0fHwgeCA9PT0gMHgyNkJFXG5cdFx0fHwgeCA9PT0gMHgyNkM0XG5cdFx0fHwgeCA9PT0gMHgyNkM1XG5cdFx0fHwgeCA9PT0gMHgyNkNFXG5cdFx0fHwgeCA9PT0gMHgyNkQ0XG5cdFx0fHwgeCA9PT0gMHgyNkVBXG5cdFx0fHwgeCA9PT0gMHgyNkYyXG5cdFx0fHwgeCA9PT0gMHgyNkYzXG5cdFx0fHwgeCA9PT0gMHgyNkY1XG5cdFx0fHwgeCA9PT0gMHgyNkZBXG5cdFx0fHwgeCA9PT0gMHgyNkZEXG5cdFx0fHwgeCA9PT0gMHgyNzA1XG5cdFx0fHwgeCA9PT0gMHgyNzBBXG5cdFx0fHwgeCA9PT0gMHgyNzBCXG5cdFx0fHwgeCA9PT0gMHgyNzI4XG5cdFx0fHwgeCA9PT0gMHgyNzRDXG5cdFx0fHwgeCA9PT0gMHgyNzRFXG5cdFx0fHwgeCA+PSAweDI3NTMgJiYgeCA8PSAweDI3NTVcblx0XHR8fCB4ID09PSAweDI3NTdcblx0XHR8fCB4ID49IDB4Mjc5NSAmJiB4IDw9IDB4Mjc5N1xuXHRcdHx8IHggPT09IDB4MjdCMFxuXHRcdHx8IHggPT09IDB4MjdCRlxuXHRcdHx8IHggPT09IDB4MkIxQlxuXHRcdHx8IHggPT09IDB4MkIxQ1xuXHRcdHx8IHggPT09IDB4MkI1MFxuXHRcdHx8IHggPT09IDB4MkI1NVxuXHRcdHx8IHggPj0gMHgyRTgwICYmIHggPD0gMHgyRTk5XG5cdFx0fHwgeCA+PSAweDJFOUIgJiYgeCA8PSAweDJFRjNcblx0XHR8fCB4ID49IDB4MkYwMCAmJiB4IDw9IDB4MkZENVxuXHRcdHx8IHggPj0gMHgyRkYwICYmIHggPD0gMHgyRkZGXG5cdFx0fHwgeCA+PSAweDMwMDEgJiYgeCA8PSAweDMwM0Vcblx0XHR8fCB4ID49IDB4MzA0MSAmJiB4IDw9IDB4MzA5NlxuXHRcdHx8IHggPj0gMHgzMDk5ICYmIHggPD0gMHgzMEZGXG5cdFx0fHwgeCA+PSAweDMxMDUgJiYgeCA8PSAweDMxMkZcblx0XHR8fCB4ID49IDB4MzEzMSAmJiB4IDw9IDB4MzE4RVxuXHRcdHx8IHggPj0gMHgzMTkwICYmIHggPD0gMHgzMUU1XG5cdFx0fHwgeCA+PSAweDMxRUYgJiYgeCA8PSAweDMyMUVcblx0XHR8fCB4ID49IDB4MzIyMCAmJiB4IDw9IDB4MzI0N1xuXHRcdHx8IHggPj0gMHgzMjUwICYmIHggPD0gMHhBNDhDXG5cdFx0fHwgeCA+PSAweEE0OTAgJiYgeCA8PSAweEE0QzZcblx0XHR8fCB4ID49IDB4QTk2MCAmJiB4IDw9IDB4QTk3Q1xuXHRcdHx8IHggPj0gMHhBQzAwICYmIHggPD0gMHhEN0EzXG5cdFx0fHwgeCA+PSAweEY5MDAgJiYgeCA8PSAweEZBRkZcblx0XHR8fCB4ID49IDB4RkUxMCAmJiB4IDw9IDB4RkUxOVxuXHRcdHx8IHggPj0gMHhGRTMwICYmIHggPD0gMHhGRTUyXG5cdFx0fHwgeCA+PSAweEZFNTQgJiYgeCA8PSAweEZFNjZcblx0XHR8fCB4ID49IDB4RkU2OCAmJiB4IDw9IDB4RkU2QlxuXHRcdHx8IHggPj0gMHgxNkZFMCAmJiB4IDw9IDB4MTZGRTRcblx0XHR8fCB4ID09PSAweDE2RkYwXG5cdFx0fHwgeCA9PT0gMHgxNkZGMVxuXHRcdHx8IHggPj0gMHgxNzAwMCAmJiB4IDw9IDB4MTg3Rjdcblx0XHR8fCB4ID49IDB4MTg4MDAgJiYgeCA8PSAweDE4Q0Q1XG5cdFx0fHwgeCA+PSAweDE4Q0ZGICYmIHggPD0gMHgxOEQwOFxuXHRcdHx8IHggPj0gMHgxQUZGMCAmJiB4IDw9IDB4MUFGRjNcblx0XHR8fCB4ID49IDB4MUFGRjUgJiYgeCA8PSAweDFBRkZCXG5cdFx0fHwgeCA9PT0gMHgxQUZGRFxuXHRcdHx8IHggPT09IDB4MUFGRkVcblx0XHR8fCB4ID49IDB4MUIwMDAgJiYgeCA8PSAweDFCMTIyXG5cdFx0fHwgeCA9PT0gMHgxQjEzMlxuXHRcdHx8IHggPj0gMHgxQjE1MCAmJiB4IDw9IDB4MUIxNTJcblx0XHR8fCB4ID09PSAweDFCMTU1XG5cdFx0fHwgeCA+PSAweDFCMTY0ICYmIHggPD0gMHgxQjE2N1xuXHRcdHx8IHggPj0gMHgxQjE3MCAmJiB4IDw9IDB4MUIyRkJcblx0XHR8fCB4ID49IDB4MUQzMDAgJiYgeCA8PSAweDFEMzU2XG5cdFx0fHwgeCA+PSAweDFEMzYwICYmIHggPD0gMHgxRDM3NlxuXHRcdHx8IHggPT09IDB4MUYwMDRcblx0XHR8fCB4ID09PSAweDFGMENGXG5cdFx0fHwgeCA9PT0gMHgxRjE4RVxuXHRcdHx8IHggPj0gMHgxRjE5MSAmJiB4IDw9IDB4MUYxOUFcblx0XHR8fCB4ID49IDB4MUYyMDAgJiYgeCA8PSAweDFGMjAyXG5cdFx0fHwgeCA+PSAweDFGMjEwICYmIHggPD0gMHgxRjIzQlxuXHRcdHx8IHggPj0gMHgxRjI0MCAmJiB4IDw9IDB4MUYyNDhcblx0XHR8fCB4ID09PSAweDFGMjUwXG5cdFx0fHwgeCA9PT0gMHgxRjI1MVxuXHRcdHx8IHggPj0gMHgxRjI2MCAmJiB4IDw9IDB4MUYyNjVcblx0XHR8fCB4ID49IDB4MUYzMDAgJiYgeCA8PSAweDFGMzIwXG5cdFx0fHwgeCA+PSAweDFGMzJEICYmIHggPD0gMHgxRjMzNVxuXHRcdHx8IHggPj0gMHgxRjMzNyAmJiB4IDw9IDB4MUYzN0Ncblx0XHR8fCB4ID49IDB4MUYzN0UgJiYgeCA8PSAweDFGMzkzXG5cdFx0fHwgeCA+PSAweDFGM0EwICYmIHggPD0gMHgxRjNDQVxuXHRcdHx8IHggPj0gMHgxRjNDRiAmJiB4IDw9IDB4MUYzRDNcblx0XHR8fCB4ID49IDB4MUYzRTAgJiYgeCA8PSAweDFGM0YwXG5cdFx0fHwgeCA9PT0gMHgxRjNGNFxuXHRcdHx8IHggPj0gMHgxRjNGOCAmJiB4IDw9IDB4MUY0M0Vcblx0XHR8fCB4ID09PSAweDFGNDQwXG5cdFx0fHwgeCA+PSAweDFGNDQyICYmIHggPD0gMHgxRjRGQ1xuXHRcdHx8IHggPj0gMHgxRjRGRiAmJiB4IDw9IDB4MUY1M0Rcblx0XHR8fCB4ID49IDB4MUY1NEIgJiYgeCA8PSAweDFGNTRFXG5cdFx0fHwgeCA+PSAweDFGNTUwICYmIHggPD0gMHgxRjU2N1xuXHRcdHx8IHggPT09IDB4MUY1N0Fcblx0XHR8fCB4ID09PSAweDFGNTk1XG5cdFx0fHwgeCA9PT0gMHgxRjU5NlxuXHRcdHx8IHggPT09IDB4MUY1QTRcblx0XHR8fCB4ID49IDB4MUY1RkIgJiYgeCA8PSAweDFGNjRGXG5cdFx0fHwgeCA+PSAweDFGNjgwICYmIHggPD0gMHgxRjZDNVxuXHRcdHx8IHggPT09IDB4MUY2Q0Ncblx0XHR8fCB4ID49IDB4MUY2RDAgJiYgeCA8PSAweDFGNkQyXG5cdFx0fHwgeCA+PSAweDFGNkQ1ICYmIHggPD0gMHgxRjZEN1xuXHRcdHx8IHggPj0gMHgxRjZEQyAmJiB4IDw9IDB4MUY2REZcblx0XHR8fCB4ID09PSAweDFGNkVCXG5cdFx0fHwgeCA9PT0gMHgxRjZFQ1xuXHRcdHx8IHggPj0gMHgxRjZGNCAmJiB4IDw9IDB4MUY2RkNcblx0XHR8fCB4ID49IDB4MUY3RTAgJiYgeCA8PSAweDFGN0VCXG5cdFx0fHwgeCA9PT0gMHgxRjdGMFxuXHRcdHx8IHggPj0gMHgxRjkwQyAmJiB4IDw9IDB4MUY5M0Fcblx0XHR8fCB4ID49IDB4MUY5M0MgJiYgeCA8PSAweDFGOTQ1XG5cdFx0fHwgeCA+PSAweDFGOTQ3ICYmIHggPD0gMHgxRjlGRlxuXHRcdHx8IHggPj0gMHgxRkE3MCAmJiB4IDw9IDB4MUZBN0Ncblx0XHR8fCB4ID49IDB4MUZBODAgJiYgeCA8PSAweDFGQTg5XG5cdFx0fHwgeCA+PSAweDFGQThGICYmIHggPD0gMHgxRkFDNlxuXHRcdHx8IHggPj0gMHgxRkFDRSAmJiB4IDw9IDB4MUZBRENcblx0XHR8fCB4ID49IDB4MUZBREYgJiYgeCA8PSAweDFGQUU5XG5cdFx0fHwgeCA+PSAweDFGQUYwICYmIHggPD0gMHgxRkFGOFxuXHRcdHx8IHggPj0gMHgyMDAwMCAmJiB4IDw9IDB4MkZGRkRcblx0XHR8fCB4ID49IDB4MzAwMDAgJiYgeCA8PSAweDNGRkZEO1xufVxuXG5mdW5jdGlvbiBnZXRDYXRlZ29yeSh4KSB7XG5cdGlmIChpc0FtYmlndW91cyh4KSkgcmV0dXJuICdhbWJpZ3VvdXMnO1xuXG5cdGlmIChpc0Z1bGxXaWR0aCh4KSkgcmV0dXJuICdmdWxsd2lkdGgnO1xuXG5cdGlmIChcblx0XHR4ID09PSAweDIwQTlcblx0XHR8fCB4ID49IDB4RkY2MSAmJiB4IDw9IDB4RkZCRVxuXHRcdHx8IHggPj0gMHhGRkMyICYmIHggPD0gMHhGRkM3XG5cdFx0fHwgeCA+PSAweEZGQ0EgJiYgeCA8PSAweEZGQ0Zcblx0XHR8fCB4ID49IDB4RkZEMiAmJiB4IDw9IDB4RkZEN1xuXHRcdHx8IHggPj0gMHhGRkRBICYmIHggPD0gMHhGRkRDXG5cdFx0fHwgeCA+PSAweEZGRTggJiYgeCA8PSAweEZGRUVcblx0KSB7XG5cdFx0cmV0dXJuICdoYWxmd2lkdGgnO1xuXHR9XG5cblx0aWYgKFxuXHRcdHggPj0gMHgyMCAmJiB4IDw9IDB4N0Vcblx0XHR8fCB4ID09PSAweEEyXG5cdFx0fHwgeCA9PT0gMHhBM1xuXHRcdHx8IHggPT09IDB4QTVcblx0XHR8fCB4ID09PSAweEE2XG5cdFx0fHwgeCA9PT0gMHhBQ1xuXHRcdHx8IHggPT09IDB4QUZcblx0XHR8fCB4ID49IDB4MjdFNiAmJiB4IDw9IDB4MjdFRFxuXHRcdHx8IHggPT09IDB4Mjk4NVxuXHRcdHx8IHggPT09IDB4Mjk4NlxuXHQpIHtcblx0XHRyZXR1cm4gJ25hcnJvdyc7XG5cdH1cblxuXHRpZiAoaXNXaWRlKHgpKSByZXR1cm4gJ3dpZGUnO1xuXG5cdHJldHVybiAnbmV1dHJhbCc7XG59XG5cbmV4cG9ydCB7aXNBbWJpZ3VvdXMsIGlzRnVsbFdpZHRoLCBpc1dpZGUsIGdldENhdGVnb3J5fTtcbiIsICJpbXBvcnQge2dldENhdGVnb3J5LCBpc0FtYmlndW91cywgaXNGdWxsV2lkdGgsIGlzV2lkZX0gZnJvbSAnLi9sb29rdXAuanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZShjb2RlUG9pbnQpIHtcblx0aWYgKCFOdW1iZXIuaXNTYWZlSW50ZWdlcihjb2RlUG9pbnQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBjb2RlIHBvaW50LCBnb3QgXFxgJHt0eXBlb2YgY29kZVBvaW50fVxcYC5gKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFzdEFzaWFuV2lkdGhUeXBlKGNvZGVQb2ludCkge1xuXHR2YWxpZGF0ZShjb2RlUG9pbnQpO1xuXG5cdHJldHVybiBnZXRDYXRlZ29yeShjb2RlUG9pbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFzdEFzaWFuV2lkdGgoY29kZVBvaW50LCB7YW1iaWd1b3VzQXNXaWRlID0gZmFsc2V9ID0ge30pIHtcblx0dmFsaWRhdGUoY29kZVBvaW50KTtcblxuXHRpZiAoXG5cdFx0aXNGdWxsV2lkdGgoY29kZVBvaW50KVxuXHRcdHx8IGlzV2lkZShjb2RlUG9pbnQpXG5cdFx0fHwgKGFtYmlndW91c0FzV2lkZSAmJiBpc0FtYmlndW91cyhjb2RlUG9pbnQpKVxuXHQpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdHJldHVybiAxO1xufVxuXG4vLyBGb3IgUHJldHRpZXIuIFRoaXMgZG9lc24ndCBjb3VudCBcImFtYmlndW91c1wiIGNoYXJhY3RlcnMgb3IgY2hlY2sgZm9yIHZhbGlkIGlucHV0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9nZXQtZWFzdC1hc2lhbi13aWR0aC9wdWxsLzZcbmV4cG9ydCBjb25zdCBfaXNOYXJyb3dXaWR0aCA9IGNvZGVQb2ludCA9PiAhKGlzRnVsbFdpZHRoKGNvZGVQb2ludCkgfHwgaXNXaWRlKGNvZGVQb2ludCkpO1xuIiwgImltcG9ydCBzdHJpcEFuc2kgZnJvbSAnc3RyaXAtYW5zaSc7XG5pbXBvcnQge2Vhc3RBc2lhbldpZHRofSBmcm9tICdnZXQtZWFzdC1hc2lhbi13aWR0aCc7XG5pbXBvcnQgZW1vamlSZWdleCBmcm9tICdlbW9qaS1yZWdleCc7XG5cbmNvbnN0IHNlZ21lbnRlciA9IG5ldyBJbnRsLlNlZ21lbnRlcigpO1xuXG5jb25zdCBkZWZhdWx0SWdub3JhYmxlQ29kZVBvaW50UmVnZXggPSAvXlxccHtEZWZhdWx0X0lnbm9yYWJsZV9Db2RlX1BvaW50fSQvdTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaW5nV2lkdGgoc3RyaW5nLCBvcHRpb25zID0ge30pIHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IHtcblx0XHRhbWJpZ3VvdXNJc05hcnJvdyA9IHRydWUsXG5cdFx0Y291bnRBbnNpRXNjYXBlQ29kZXMgPSBmYWxzZSxcblx0fSA9IG9wdGlvbnM7XG5cblx0aWYgKCFjb3VudEFuc2lFc2NhcGVDb2Rlcykge1xuXHRcdHN0cmluZyA9IHN0cmlwQW5zaShzdHJpbmcpO1xuXHR9XG5cblx0aWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGxldCB3aWR0aCA9IDA7XG5cdGNvbnN0IGVhc3RBc2lhbldpZHRoT3B0aW9ucyA9IHthbWJpZ3VvdXNBc1dpZGU6ICFhbWJpZ3VvdXNJc05hcnJvd307XG5cblx0Zm9yIChjb25zdCB7c2VnbWVudDogY2hhcmFjdGVyfSBvZiBzZWdtZW50ZXIuc2VnbWVudChzdHJpbmcpKSB7XG5cdFx0Y29uc3QgY29kZVBvaW50ID0gY2hhcmFjdGVyLmNvZGVQb2ludEF0KDApO1xuXG5cdFx0Ly8gSWdub3JlIGNvbnRyb2wgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlUG9pbnQgPD0gMHgxRiB8fCAoY29kZVBvaW50ID49IDB4N0YgJiYgY29kZVBvaW50IDw9IDB4OUYpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgemVyby13aWR0aCBjaGFyYWN0ZXJzXG5cdFx0aWYgKFxuXHRcdFx0KGNvZGVQb2ludCA+PSAweDIwXzBCICYmIGNvZGVQb2ludCA8PSAweDIwXzBGKSAvLyBaZXJvLXdpZHRoIHNwYWNlLCBub24tam9pbmVyLCBqb2luZXIsIGxlZnQtdG8tcmlnaHQgbWFyaywgcmlnaHQtdG8tbGVmdCBtYXJrXG5cdFx0XHR8fCBjb2RlUG9pbnQgPT09IDB4RkVfRkYgLy8gWmVyby13aWR0aCBuby1icmVhayBzcGFjZVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIGNvbWJpbmluZyBjaGFyYWN0ZXJzXG5cdFx0aWYgKFxuXHRcdFx0KGNvZGVQb2ludCA+PSAweDNfMDAgJiYgY29kZVBvaW50IDw9IDB4M182RikgLy8gQ29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXG5cdFx0XHR8fCAoY29kZVBvaW50ID49IDB4MUFfQjAgJiYgY29kZVBvaW50IDw9IDB4MUFfRkYpIC8vIENvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBleHRlbmRlZFxuXHRcdFx0fHwgKGNvZGVQb2ludCA+PSAweDFEX0MwICYmIGNvZGVQb2ludCA8PSAweDFEX0ZGKSAvLyBDb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3Mgc3VwcGxlbWVudFxuXHRcdFx0fHwgKGNvZGVQb2ludCA+PSAweDIwX0QwICYmIGNvZGVQb2ludCA8PSAweDIwX0ZGKSAvLyBDb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3MgZm9yIHN5bWJvbHNcblx0XHRcdHx8IChjb2RlUG9pbnQgPj0gMHhGRV8yMCAmJiBjb2RlUG9pbnQgPD0gMHhGRV8yRikgLy8gQ29tYmluaW5nIGhhbGYgbWFya3Ncblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBzdXJyb2dhdGUgcGFpcnNcblx0XHRpZiAoY29kZVBvaW50ID49IDB4RDhfMDAgJiYgY29kZVBvaW50IDw9IDB4REZfRkYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSB2YXJpYXRpb24gc2VsZWN0b3JzXG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweEZFXzAwICYmIGNvZGVQb2ludCA8PSAweEZFXzBGKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBUaGlzIGNvdmVycyBzb21lIG9mIHRoZSBhYm92ZSBjYXNlcywgYnV0IHdlIHN0aWxsIGtlZXAgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cblx0XHRpZiAoZGVmYXVsdElnbm9yYWJsZUNvZGVQb2ludFJlZ2V4LnRlc3QoY2hhcmFjdGVyKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogVXNlIGAvXFxwe1JHSV9FbW9qaX0vdmAgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAyMC5cblx0XHRpZiAoZW1vamlSZWdleCgpLnRlc3QoY2hhcmFjdGVyKSkge1xuXHRcdFx0d2lkdGggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHdpZHRoICs9IGVhc3RBc2lhbldpZHRoKGNvZGVQb2ludCwgZWFzdEFzaWFuV2lkdGhPcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiB3aWR0aDtcbn1cbiIsICJjb25zdCBBTlNJX0JBQ0tHUk9VTkRfT0ZGU0VUID0gMTA7XG5cbmNvbnN0IHdyYXBBbnNpMTYgPSAob2Zmc2V0ID0gMCkgPT4gY29kZSA9PiBgXFx1MDAxQlske2NvZGUgKyBvZmZzZXR9bWA7XG5cbmNvbnN0IHdyYXBBbnNpMjU2ID0gKG9mZnNldCA9IDApID0+IGNvZGUgPT4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07NTske2NvZGV9bWA7XG5cbmNvbnN0IHdyYXBBbnNpMTZtID0gKG9mZnNldCA9IDApID0+IChyZWQsIGdyZWVuLCBibHVlKSA9PiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTsyOyR7cmVkfTske2dyZWVufTske2JsdWV9bWA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0bW9kaWZpZXI6IHtcblx0XHRyZXNldDogWzAsIDBdLFxuXHRcdC8vIDIxIGlzbid0IHdpZGVseSBzdXBwb3J0ZWQgYW5kIDIyIGRvZXMgdGhlIHNhbWUgdGhpbmdcblx0XHRib2xkOiBbMSwgMjJdLFxuXHRcdGRpbTogWzIsIDIyXSxcblx0XHRpdGFsaWM6IFszLCAyM10sXG5cdFx0dW5kZXJsaW5lOiBbNCwgMjRdLFxuXHRcdG92ZXJsaW5lOiBbNTMsIDU1XSxcblx0XHRpbnZlcnNlOiBbNywgMjddLFxuXHRcdGhpZGRlbjogWzgsIDI4XSxcblx0XHRzdHJpa2V0aHJvdWdoOiBbOSwgMjldLFxuXHR9LFxuXHRjb2xvcjoge1xuXHRcdGJsYWNrOiBbMzAsIDM5XSxcblx0XHRyZWQ6IFszMSwgMzldLFxuXHRcdGdyZWVuOiBbMzIsIDM5XSxcblx0XHR5ZWxsb3c6IFszMywgMzldLFxuXHRcdGJsdWU6IFszNCwgMzldLFxuXHRcdG1hZ2VudGE6IFszNSwgMzldLFxuXHRcdGN5YW46IFszNiwgMzldLFxuXHRcdHdoaXRlOiBbMzcsIDM5XSxcblxuXHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdGJsYWNrQnJpZ2h0OiBbOTAsIDM5XSxcblx0XHRncmF5OiBbOTAsIDM5XSwgLy8gQWxpYXMgb2YgYGJsYWNrQnJpZ2h0YFxuXHRcdGdyZXk6IFs5MCwgMzldLCAvLyBBbGlhcyBvZiBgYmxhY2tCcmlnaHRgXG5cdFx0cmVkQnJpZ2h0OiBbOTEsIDM5XSxcblx0XHRncmVlbkJyaWdodDogWzkyLCAzOV0sXG5cdFx0eWVsbG93QnJpZ2h0OiBbOTMsIDM5XSxcblx0XHRibHVlQnJpZ2h0OiBbOTQsIDM5XSxcblx0XHRtYWdlbnRhQnJpZ2h0OiBbOTUsIDM5XSxcblx0XHRjeWFuQnJpZ2h0OiBbOTYsIDM5XSxcblx0XHR3aGl0ZUJyaWdodDogWzk3LCAzOV0sXG5cdH0sXG5cdGJnQ29sb3I6IHtcblx0XHRiZ0JsYWNrOiBbNDAsIDQ5XSxcblx0XHRiZ1JlZDogWzQxLCA0OV0sXG5cdFx0YmdHcmVlbjogWzQyLCA0OV0sXG5cdFx0YmdZZWxsb3c6IFs0MywgNDldLFxuXHRcdGJnQmx1ZTogWzQ0LCA0OV0sXG5cdFx0YmdNYWdlbnRhOiBbNDUsIDQ5XSxcblx0XHRiZ0N5YW46IFs0NiwgNDldLFxuXHRcdGJnV2hpdGU6IFs0NywgNDldLFxuXG5cdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0YmdCbGFja0JyaWdodDogWzEwMCwgNDldLFxuXHRcdGJnR3JheTogWzEwMCwgNDldLCAvLyBBbGlhcyBvZiBgYmdCbGFja0JyaWdodGBcblx0XHRiZ0dyZXk6IFsxMDAsIDQ5XSwgLy8gQWxpYXMgb2YgYGJnQmxhY2tCcmlnaHRgXG5cdFx0YmdSZWRCcmlnaHQ6IFsxMDEsIDQ5XSxcblx0XHRiZ0dyZWVuQnJpZ2h0OiBbMTAyLCA0OV0sXG5cdFx0YmdZZWxsb3dCcmlnaHQ6IFsxMDMsIDQ5XSxcblx0XHRiZ0JsdWVCcmlnaHQ6IFsxMDQsIDQ5XSxcblx0XHRiZ01hZ2VudGFCcmlnaHQ6IFsxMDUsIDQ5XSxcblx0XHRiZ0N5YW5CcmlnaHQ6IFsxMDYsIDQ5XSxcblx0XHRiZ1doaXRlQnJpZ2h0OiBbMTA3LCA0OV0sXG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgbW9kaWZpZXJOYW1lcyA9IE9iamVjdC5rZXlzKHN0eWxlcy5tb2RpZmllcik7XG5leHBvcnQgY29uc3QgZm9yZWdyb3VuZENvbG9yTmFtZXMgPSBPYmplY3Qua2V5cyhzdHlsZXMuY29sb3IpO1xuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvck5hbWVzID0gT2JqZWN0LmtleXMoc3R5bGVzLmJnQ29sb3IpO1xuZXhwb3J0IGNvbnN0IGNvbG9yTmFtZXMgPSBbLi4uZm9yZWdyb3VuZENvbG9yTmFtZXMsIC4uLmJhY2tncm91bmRDb2xvck5hbWVzXTtcblxuZnVuY3Rpb24gYXNzZW1ibGVTdHlsZXMoKSB7XG5cdGNvbnN0IGNvZGVzID0gbmV3IE1hcCgpO1xuXG5cdGZvciAoY29uc3QgW2dyb3VwTmFtZSwgZ3JvdXBdIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxlcykpIHtcblx0XHRmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlXSBvZiBPYmplY3QuZW50cmllcyhncm91cCkpIHtcblx0XHRcdHN0eWxlc1tzdHlsZU5hbWVdID0ge1xuXHRcdFx0XHRvcGVuOiBgXFx1MDAxQlske3N0eWxlWzBdfW1gLFxuXHRcdFx0XHRjbG9zZTogYFxcdTAwMUJbJHtzdHlsZVsxXX1tYCxcblx0XHRcdH07XG5cblx0XHRcdGdyb3VwW3N0eWxlTmFtZV0gPSBzdHlsZXNbc3R5bGVOYW1lXTtcblxuXHRcdFx0Y29kZXMuc2V0KHN0eWxlWzBdLCBzdHlsZVsxXSk7XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHN0eWxlcywgZ3JvdXBOYW1lLCB7XG5cdFx0XHR2YWx1ZTogZ3JvdXAsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHR9KTtcblx0fVxuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsICdjb2RlcycsIHtcblx0XHR2YWx1ZTogY29kZXMsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdH0pO1xuXG5cdHN0eWxlcy5jb2xvci5jbG9zZSA9ICdcXHUwMDFCWzM5bSc7XG5cdHN0eWxlcy5iZ0NvbG9yLmNsb3NlID0gJ1xcdTAwMUJbNDltJztcblxuXHRzdHlsZXMuY29sb3IuYW5zaSA9IHdyYXBBbnNpMTYoKTtcblx0c3R5bGVzLmNvbG9yLmFuc2kyNTYgPSB3cmFwQW5zaTI1NigpO1xuXHRzdHlsZXMuY29sb3IuYW5zaTE2bSA9IHdyYXBBbnNpMTZtKCk7XG5cdHN0eWxlcy5iZ0NvbG9yLmFuc2kgPSB3cmFwQW5zaTE2KEFOU0lfQkFDS0dST1VORF9PRkZTRVQpO1xuXHRzdHlsZXMuYmdDb2xvci5hbnNpMjU2ID0gd3JhcEFuc2kyNTYoQU5TSV9CQUNLR1JPVU5EX09GRlNFVCk7XG5cdHN0eWxlcy5iZ0NvbG9yLmFuc2kxNm0gPSB3cmFwQW5zaTE2bShBTlNJX0JBQ0tHUk9VTkRfT0ZGU0VUKTtcblxuXHQvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9RaXgtL2NvbG9yLWNvbnZlcnQvYmxvYi8zZjBlMGQ0ZTkyZTIzNTc5NmNjYjE3ZjZlODVjNzIwOTRhNjUxZjQ5L2NvbnZlcnNpb25zLmpzXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0eWxlcywge1xuXHRcdHJnYlRvQW5zaTI1Njoge1xuXHRcdFx0dmFsdWU6IChyZWQsIGdyZWVuLCBibHVlKSA9PiB7XG5cdFx0XHRcdC8vIFdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdFx0XHRcdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRcdFx0XHRpZiAocmVkID09PSBncmVlbiAmJiBncmVlbiA9PT0gYmx1ZSkge1xuXHRcdFx0XHRcdGlmIChyZWQgPCA4KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTY7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlZCA+IDI0OCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDIzMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHJlZCAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAxNlxuXHRcdFx0XHRcdCsgKDM2ICogTWF0aC5yb3VuZChyZWQgLyAyNTUgKiA1KSlcblx0XHRcdFx0XHQrICg2ICogTWF0aC5yb3VuZChncmVlbiAvIDI1NSAqIDUpKVxuXHRcdFx0XHRcdCsgTWF0aC5yb3VuZChibHVlIC8gMjU1ICogNSk7XG5cdFx0XHR9LFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHRoZXhUb1JnYjoge1xuXHRcdFx0dmFsdWU6IGhleCA9PiB7XG5cdFx0XHRcdGNvbnN0IG1hdGNoZXMgPSAvW2EtZlxcZF17Nn18W2EtZlxcZF17M30vaS5leGVjKGhleC50b1N0cmluZygxNikpO1xuXHRcdFx0XHRpZiAoIW1hdGNoZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IFtjb2xvclN0cmluZ10gPSBtYXRjaGVzO1xuXG5cdFx0XHRcdGlmIChjb2xvclN0cmluZy5sZW5ndGggPT09IDMpIHtcblx0XHRcdFx0XHRjb2xvclN0cmluZyA9IFsuLi5jb2xvclN0cmluZ10ubWFwKGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIgKyBjaGFyYWN0ZXIpLmpvaW4oJycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaW50ZWdlciA9IE51bWJlci5wYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXHRcdFx0XHRcdChpbnRlZ2VyID4+IDE2KSAmIDB4RkYsXG5cdFx0XHRcdFx0KGludGVnZXIgPj4gOCkgJiAweEZGLFxuXHRcdFx0XHRcdGludGVnZXIgJiAweEZGLFxuXHRcdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSAqL1xuXHRcdFx0XHRdO1xuXHRcdFx0fSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0aGV4VG9BbnNpMjU2OiB7XG5cdFx0XHR2YWx1ZTogaGV4ID0+IHN0eWxlcy5yZ2JUb0Fuc2kyNTYoLi4uc3R5bGVzLmhleFRvUmdiKGhleCkpLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHRhbnNpMjU2VG9BbnNpOiB7XG5cdFx0XHR2YWx1ZTogY29kZSA9PiB7XG5cdFx0XHRcdGlmIChjb2RlIDwgOCkge1xuXHRcdFx0XHRcdHJldHVybiAzMCArIGNvZGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29kZSA8IDE2KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDkwICsgKGNvZGUgLSA4KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCByZWQ7XG5cdFx0XHRcdGxldCBncmVlbjtcblx0XHRcdFx0bGV0IGJsdWU7XG5cblx0XHRcdFx0aWYgKGNvZGUgPj0gMjMyKSB7XG5cdFx0XHRcdFx0cmVkID0gKCgoY29kZSAtIDIzMikgKiAxMCkgKyA4KSAvIDI1NTtcblx0XHRcdFx0XHRncmVlbiA9IHJlZDtcblx0XHRcdFx0XHRibHVlID0gcmVkO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvZGUgLT0gMTY7XG5cblx0XHRcdFx0XHRjb25zdCByZW1haW5kZXIgPSBjb2RlICUgMzY7XG5cblx0XHRcdFx0XHRyZWQgPSBNYXRoLmZsb29yKGNvZGUgLyAzNikgLyA1O1xuXHRcdFx0XHRcdGdyZWVuID0gTWF0aC5mbG9vcihyZW1haW5kZXIgLyA2KSAvIDU7XG5cdFx0XHRcdFx0Ymx1ZSA9IChyZW1haW5kZXIgJSA2KSAvIDU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpICogMjtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gMzA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gMzAgKyAoKE1hdGgucm91bmQoYmx1ZSkgPDwgMikgfCAoTWF0aC5yb3VuZChncmVlbikgPDwgMSkgfCBNYXRoLnJvdW5kKHJlZCkpO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdFx0XHRcdHJlc3VsdCArPSA2MDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHRyZ2JUb0Fuc2k6IHtcblx0XHRcdHZhbHVlOiAocmVkLCBncmVlbiwgYmx1ZSkgPT4gc3R5bGVzLmFuc2kyNTZUb0Fuc2koc3R5bGVzLnJnYlRvQW5zaTI1NihyZWQsIGdyZWVuLCBibHVlKSksXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHR9LFxuXHRcdGhleFRvQW5zaToge1xuXHRcdFx0dmFsdWU6IGhleCA9PiBzdHlsZXMuYW5zaTI1NlRvQW5zaShzdHlsZXMuaGV4VG9BbnNpMjU2KGhleCkpLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuY29uc3QgYW5zaVN0eWxlcyA9IGFzc2VtYmxlU3R5bGVzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFuc2lTdHlsZXM7XG4iLCAiaW1wb3J0IHN0cmluZ1dpZHRoIGZyb20gJ3N0cmluZy13aWR0aCc7XG5pbXBvcnQgc3RyaXBBbnNpIGZyb20gJ3N0cmlwLWFuc2knO1xuaW1wb3J0IGFuc2lTdHlsZXMgZnJvbSAnYW5zaS1zdHlsZXMnO1xuXG5jb25zdCBFU0NBUEVTID0gbmV3IFNldChbXG5cdCdcXHUwMDFCJyxcblx0J1xcdTAwOUInLFxuXSk7XG5cbmNvbnN0IEVORF9DT0RFID0gMzk7XG5jb25zdCBBTlNJX0VTQ0FQRV9CRUxMID0gJ1xcdTAwMDcnO1xuY29uc3QgQU5TSV9DU0kgPSAnWyc7XG5jb25zdCBBTlNJX09TQyA9ICddJztcbmNvbnN0IEFOU0lfU0dSX1RFUk1JTkFUT1IgPSAnbSc7XG5jb25zdCBBTlNJX0VTQ0FQRV9MSU5LID0gYCR7QU5TSV9PU0N9ODs7YDtcblxuY29uc3Qgd3JhcEFuc2lDb2RlID0gY29kZSA9PiBgJHtFU0NBUEVTLnZhbHVlcygpLm5leHQoKS52YWx1ZX0ke0FOU0lfQ1NJfSR7Y29kZX0ke0FOU0lfU0dSX1RFUk1JTkFUT1J9YDtcbmNvbnN0IHdyYXBBbnNpSHlwZXJsaW5rID0gdXJsID0+IGAke0VTQ0FQRVMudmFsdWVzKCkubmV4dCgpLnZhbHVlfSR7QU5TSV9FU0NBUEVfTElOS30ke3VybH0ke0FOU0lfRVNDQVBFX0JFTEx9YDtcblxuLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2Ygd29yZHMgc3BsaXQgb24gJyAnLCBpZ25vcmluZ1xuLy8gdGhlIGV4dHJhIGNoYXJhY3RlcnMgYWRkZWQgYnkgYW5zaSBlc2NhcGUgY29kZXNcbmNvbnN0IHdvcmRMZW5ndGhzID0gc3RyaW5nID0+IHN0cmluZy5zcGxpdCgnICcpLm1hcChjaGFyYWN0ZXIgPT4gc3RyaW5nV2lkdGgoY2hhcmFjdGVyKSk7XG5cbi8vIFdyYXAgYSBsb25nIHdvcmQgYWNyb3NzIG11bHRpcGxlIHJvd3Ncbi8vIEFuc2kgZXNjYXBlIGNvZGVzIGRvIG5vdCBjb3VudCB0b3dhcmRzIGxlbmd0aFxuY29uc3Qgd3JhcFdvcmQgPSAocm93cywgd29yZCwgY29sdW1ucykgPT4ge1xuXHRjb25zdCBjaGFyYWN0ZXJzID0gWy4uLndvcmRdO1xuXG5cdGxldCBpc0luc2lkZUVzY2FwZSA9IGZhbHNlO1xuXHRsZXQgaXNJbnNpZGVMaW5rRXNjYXBlID0gZmFsc2U7XG5cdGxldCB2aXNpYmxlID0gc3RyaW5nV2lkdGgoc3RyaXBBbnNpKHJvd3MuYXQoLTEpKSk7XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIGNoYXJhY3Rlcl0gb2YgY2hhcmFjdGVycy5lbnRyaWVzKCkpIHtcblx0XHRjb25zdCBjaGFyYWN0ZXJMZW5ndGggPSBzdHJpbmdXaWR0aChjaGFyYWN0ZXIpO1xuXG5cdFx0aWYgKHZpc2libGUgKyBjaGFyYWN0ZXJMZW5ndGggPD0gY29sdW1ucykge1xuXHRcdFx0cm93c1tyb3dzLmxlbmd0aCAtIDFdICs9IGNoYXJhY3Rlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cm93cy5wdXNoKGNoYXJhY3Rlcik7XG5cdFx0XHR2aXNpYmxlID0gMDtcblx0XHR9XG5cblx0XHRpZiAoRVNDQVBFUy5oYXMoY2hhcmFjdGVyKSkge1xuXHRcdFx0aXNJbnNpZGVFc2NhcGUgPSB0cnVlO1xuXG5cdFx0XHRjb25zdCBhbnNpRXNjYXBlTGlua0NhbmRpZGF0ZSA9IGNoYXJhY3RlcnMuc2xpY2UoaW5kZXggKyAxLCBpbmRleCArIDEgKyBBTlNJX0VTQ0FQRV9MSU5LLmxlbmd0aCkuam9pbignJyk7XG5cdFx0XHRpc0luc2lkZUxpbmtFc2NhcGUgPSBhbnNpRXNjYXBlTGlua0NhbmRpZGF0ZSA9PT0gQU5TSV9FU0NBUEVfTElOSztcblx0XHR9XG5cblx0XHRpZiAoaXNJbnNpZGVFc2NhcGUpIHtcblx0XHRcdGlmIChpc0luc2lkZUxpbmtFc2NhcGUpIHtcblx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PT0gQU5TSV9FU0NBUEVfQkVMTCkge1xuXHRcdFx0XHRcdGlzSW5zaWRlRXNjYXBlID0gZmFsc2U7XG5cdFx0XHRcdFx0aXNJbnNpZGVMaW5rRXNjYXBlID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBBTlNJX1NHUl9URVJNSU5BVE9SKSB7XG5cdFx0XHRcdGlzSW5zaWRlRXNjYXBlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZpc2libGUgKz0gY2hhcmFjdGVyTGVuZ3RoO1xuXG5cdFx0aWYgKHZpc2libGUgPT09IGNvbHVtbnMgJiYgaW5kZXggPCBjaGFyYWN0ZXJzLmxlbmd0aCAtIDEpIHtcblx0XHRcdHJvd3MucHVzaCgnJyk7XG5cdFx0XHR2aXNpYmxlID0gMDtcblx0XHR9XG5cdH1cblxuXHQvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhlIGxhc3Qgcm93IHdlIGNvcHkgb3ZlciBpcyBvbmx5XG5cdC8vIGFuc2kgZXNjYXBlIGNoYXJhY3RlcnMsIGhhbmRsZSB0aGlzIGVkZ2UtY2FzZVxuXHRpZiAoIXZpc2libGUgJiYgcm93cy5hdCgtMSkubGVuZ3RoID4gMCAmJiByb3dzLmxlbmd0aCA+IDEpIHtcblx0XHRyb3dzW3Jvd3MubGVuZ3RoIC0gMl0gKz0gcm93cy5wb3AoKTtcblx0fVxufTtcblxuLy8gVHJpbXMgc3BhY2VzIGZyb20gYSBzdHJpbmcgaWdub3JpbmcgaW52aXNpYmxlIHNlcXVlbmNlc1xuY29uc3Qgc3RyaW5nVmlzaWJsZVRyaW1TcGFjZXNSaWdodCA9IHN0cmluZyA9PiB7XG5cdGNvbnN0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcgJyk7XG5cdGxldCBsYXN0ID0gd29yZHMubGVuZ3RoO1xuXG5cdHdoaWxlIChsYXN0ID4gMCkge1xuXHRcdGlmIChzdHJpbmdXaWR0aCh3b3Jkc1tsYXN0IC0gMV0pID4gMCkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0bGFzdC0tO1xuXHR9XG5cblx0aWYgKGxhc3QgPT09IHdvcmRzLmxlbmd0aCkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gd29yZHMuc2xpY2UoMCwgbGFzdCkuam9pbignICcpICsgd29yZHMuc2xpY2UobGFzdCkuam9pbignJyk7XG59O1xuXG4vLyBUaGUgd3JhcC1hbnNpIG1vZHVsZSBjYW4gYmUgaW52b2tlZCBpbiBlaXRoZXIgJ2hhcmQnIG9yICdzb2Z0JyB3cmFwIG1vZGUuXG4vL1xuLy8gJ2hhcmQnIHdpbGwgbmV2ZXIgYWxsb3cgYSBzdHJpbmcgdG8gdGFrZSB1cCBtb3JlIHRoYW4gY29sdW1ucyBjaGFyYWN0ZXJzLlxuLy9cbi8vICdzb2Z0JyBhbGxvd3MgbG9uZyB3b3JkcyB0byBleHBhbmQgcGFzdCB0aGUgY29sdW1uIGxlbmd0aC5cbmNvbnN0IGV4ZWMgPSAoc3RyaW5nLCBjb2x1bW5zLCBvcHRpb25zID0ge30pID0+IHtcblx0aWYgKG9wdGlvbnMudHJpbSAhPT0gZmFsc2UgJiYgc3RyaW5nLnRyaW0oKSA9PT0gJycpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRsZXQgcmV0dXJuVmFsdWUgPSAnJztcblx0bGV0IGVzY2FwZUNvZGU7XG5cdGxldCBlc2NhcGVVcmw7XG5cblx0Y29uc3QgbGVuZ3RocyA9IHdvcmRMZW5ndGhzKHN0cmluZyk7XG5cdGxldCByb3dzID0gWycnXTtcblxuXHRmb3IgKGNvbnN0IFtpbmRleCwgd29yZF0gb2Ygc3RyaW5nLnNwbGl0KCcgJykuZW50cmllcygpKSB7XG5cdFx0aWYgKG9wdGlvbnMudHJpbSAhPT0gZmFsc2UpIHtcblx0XHRcdHJvd3Nbcm93cy5sZW5ndGggLSAxXSA9IHJvd3MuYXQoLTEpLnRyaW1TdGFydCgpO1xuXHRcdH1cblxuXHRcdGxldCByb3dMZW5ndGggPSBzdHJpbmdXaWR0aChyb3dzLmF0KC0xKSk7XG5cblx0XHRpZiAoaW5kZXggIT09IDApIHtcblx0XHRcdGlmIChyb3dMZW5ndGggPj0gY29sdW1ucyAmJiAob3B0aW9ucy53b3JkV3JhcCA9PT0gZmFsc2UgfHwgb3B0aW9ucy50cmltID09PSBmYWxzZSkpIHtcblx0XHRcdFx0Ly8gSWYgd2Ugc3RhcnQgd2l0aCBhIG5ldyB3b3JkIGJ1dCB0aGUgY3VycmVudCByb3cgbGVuZ3RoIGVxdWFscyB0aGUgbGVuZ3RoIG9mIHRoZSBjb2x1bW5zLCBhZGQgYSBuZXcgcm93XG5cdFx0XHRcdHJvd3MucHVzaCgnJyk7XG5cdFx0XHRcdHJvd0xlbmd0aCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyb3dMZW5ndGggPiAwIHx8IG9wdGlvbnMudHJpbSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cm93c1tyb3dzLmxlbmd0aCAtIDFdICs9ICcgJztcblx0XHRcdFx0cm93TGVuZ3RoKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSW4gJ2hhcmQnIHdyYXAgbW9kZSwgdGhlIGxlbmd0aCBvZiBhIGxpbmUgaXMgbmV2ZXIgYWxsb3dlZCB0byBleHRlbmQgcGFzdCAnY29sdW1ucydcblx0XHRpZiAob3B0aW9ucy5oYXJkICYmIGxlbmd0aHNbaW5kZXhdID4gY29sdW1ucykge1xuXHRcdFx0Y29uc3QgcmVtYWluaW5nQ29sdW1ucyA9IChjb2x1bW5zIC0gcm93TGVuZ3RoKTtcblx0XHRcdGNvbnN0IGJyZWFrc1N0YXJ0aW5nVGhpc0xpbmUgPSAxICsgTWF0aC5mbG9vcigobGVuZ3Roc1tpbmRleF0gLSByZW1haW5pbmdDb2x1bW5zIC0gMSkgLyBjb2x1bW5zKTtcblx0XHRcdGNvbnN0IGJyZWFrc1N0YXJ0aW5nTmV4dExpbmUgPSBNYXRoLmZsb29yKChsZW5ndGhzW2luZGV4XSAtIDEpIC8gY29sdW1ucyk7XG5cdFx0XHRpZiAoYnJlYWtzU3RhcnRpbmdOZXh0TGluZSA8IGJyZWFrc1N0YXJ0aW5nVGhpc0xpbmUpIHtcblx0XHRcdFx0cm93cy5wdXNoKCcnKTtcblx0XHRcdH1cblxuXHRcdFx0d3JhcFdvcmQocm93cywgd29yZCwgY29sdW1ucyk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAocm93TGVuZ3RoICsgbGVuZ3Roc1tpbmRleF0gPiBjb2x1bW5zICYmIHJvd0xlbmd0aCA+IDAgJiYgbGVuZ3Roc1tpbmRleF0gPiAwKSB7XG5cdFx0XHRpZiAob3B0aW9ucy53b3JkV3JhcCA9PT0gZmFsc2UgJiYgcm93TGVuZ3RoIDwgY29sdW1ucykge1xuXHRcdFx0XHR3cmFwV29yZChyb3dzLCB3b3JkLCBjb2x1bW5zKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHJvd3MucHVzaCgnJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHJvd0xlbmd0aCArIGxlbmd0aHNbaW5kZXhdID4gY29sdW1ucyAmJiBvcHRpb25zLndvcmRXcmFwID09PSBmYWxzZSkge1xuXHRcdFx0d3JhcFdvcmQocm93cywgd29yZCwgY29sdW1ucyk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyb3dzW3Jvd3MubGVuZ3RoIC0gMV0gKz0gd29yZDtcblx0fVxuXG5cdGlmIChvcHRpb25zLnRyaW0gIT09IGZhbHNlKSB7XG5cdFx0cm93cyA9IHJvd3MubWFwKHJvdyA9PiBzdHJpbmdWaXNpYmxlVHJpbVNwYWNlc1JpZ2h0KHJvdykpO1xuXHR9XG5cblx0Y29uc3QgcHJlU3RyaW5nID0gcm93cy5qb2luKCdcXG4nKTtcblx0Y29uc3QgcHJlID0gWy4uLnByZVN0cmluZ107XG5cblx0Ly8gV2UgbmVlZCB0byBrZWVwIGEgc2VwYXJhdGUgaW5kZXggYXMgYFN0cmluZyNzbGljZSgpYCB3b3JrcyBvbiBVbmljb2RlIGNvZGUgdW5pdHMsIHdoaWxlIGBwcmVgIGlzIGFuIGFycmF5IG9mIGNvZGVwb2ludHMuXG5cdGxldCBwcmVTdHJpbmdJbmRleCA9IDA7XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIGNoYXJhY3Rlcl0gb2YgcHJlLmVudHJpZXMoKSkge1xuXHRcdHJldHVyblZhbHVlICs9IGNoYXJhY3RlcjtcblxuXHRcdGlmIChFU0NBUEVTLmhhcyhjaGFyYWN0ZXIpKSB7XG5cdFx0XHRjb25zdCB7Z3JvdXBzfSA9IG5ldyBSZWdFeHAoYCg/OlxcXFwke0FOU0lfQ1NJfSg/PGNvZGU+XFxcXGQrKW18XFxcXCR7QU5TSV9FU0NBUEVfTElOS30oPzx1cmk+LiopJHtBTlNJX0VTQ0FQRV9CRUxMfSlgKS5leGVjKHByZVN0cmluZy5zbGljZShwcmVTdHJpbmdJbmRleCkpIHx8IHtncm91cHM6IHt9fTtcblx0XHRcdGlmIChncm91cHMuY29kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnN0IGNvZGUgPSBOdW1iZXIucGFyc2VGbG9hdChncm91cHMuY29kZSk7XG5cdFx0XHRcdGVzY2FwZUNvZGUgPSBjb2RlID09PSBFTkRfQ09ERSA/IHVuZGVmaW5lZCA6IGNvZGU7XG5cdFx0XHR9IGVsc2UgaWYgKGdyb3Vwcy51cmkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlc2NhcGVVcmwgPSBncm91cHMudXJpLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IGdyb3Vwcy51cmk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29kZSA9IGFuc2lTdHlsZXMuY29kZXMuZ2V0KE51bWJlcihlc2NhcGVDb2RlKSk7XG5cblx0XHRpZiAocHJlW2luZGV4ICsgMV0gPT09ICdcXG4nKSB7XG5cdFx0XHRpZiAoZXNjYXBlVXJsKSB7XG5cdFx0XHRcdHJldHVyblZhbHVlICs9IHdyYXBBbnNpSHlwZXJsaW5rKCcnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGVzY2FwZUNvZGUgJiYgY29kZSkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSArPSB3cmFwQW5zaUNvZGUoY29kZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09ICdcXG4nKSB7XG5cdFx0XHRpZiAoZXNjYXBlQ29kZSAmJiBjb2RlKSB7XG5cdFx0XHRcdHJldHVyblZhbHVlICs9IHdyYXBBbnNpQ29kZShlc2NhcGVDb2RlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGVzY2FwZVVybCkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSArPSB3cmFwQW5zaUh5cGVybGluayhlc2NhcGVVcmwpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByZVN0cmluZ0luZGV4ICs9IGNoYXJhY3Rlci5sZW5ndGg7XG5cdH1cblxuXHRyZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vLyBGb3IgZWFjaCBuZXdsaW5lLCBpbnZva2UgdGhlIG1ldGhvZCBzZXBhcmF0ZWx5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3cmFwQW5zaShzdHJpbmcsIGNvbHVtbnMsIG9wdGlvbnMpIHtcblx0cmV0dXJuIFN0cmluZyhzdHJpbmcpXG5cdFx0Lm5vcm1hbGl6ZSgpXG5cdFx0LnJlcGxhY2VBbGwoJ1xcclxcbicsICdcXG4nKVxuXHRcdC5zcGxpdCgnXFxuJylcblx0XHQubWFwKGxpbmUgPT4gZXhlYyhsaW5lLCBjb2x1bW5zLCBvcHRpb25zKSlcblx0XHQuam9pbignXFxuJyk7XG59XG4iLCAiLy8gQm9vdHN0cmFwIGNsaXVpIHdpdGggQ29tbW9uSlMgZGVwZW5kZW5jaWVzOlxuaW1wb3J0IHsgY2xpdWkgfSBmcm9tICcuL2J1aWxkL2xpYi9pbmRleC5qcydcbmltcG9ydCBzdHJpbmdXaWR0aCBmcm9tICdzdHJpbmctd2lkdGgnXG5pbXBvcnQgc3RyaXBBbnNpIGZyb20gJ3N0cmlwLWFuc2knXG5pbXBvcnQgd3JhcEFuc2kgZnJvbSAnd3JhcC1hbnNpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1aSAob3B0cykge1xuICByZXR1cm4gY2xpdWkob3B0cywge1xuICAgIHN0cmluZ1dpZHRoLFxuICAgIHN0cmlwQW5zaSxcbiAgICB3cmFwOiB3cmFwQW5zaVxuICB9KVxufVxuXG5leHBvcnQge3VpIGFzICdtb2R1bGUuZXhwb3J0cyd9O1xuIiwgImltcG9ydCB7IGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHJlYWRkaXJTeW5jLCBzdGF0U3luYyB9IGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXJ0LCBjYWxsYmFjaykge1xuXHRsZXQgZGlyID0gcmVzb2x2ZSgnLicsIHN0YXJ0KTtcblx0bGV0IHRtcCwgc3RhdHMgPSBzdGF0U3luYyhkaXIpO1xuXG5cdGlmICghc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuXHRcdGRpciA9IGRpcm5hbWUoZGlyKTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dG1wID0gY2FsbGJhY2soZGlyLCByZWFkZGlyU3luYyhkaXIpKTtcblx0XHRpZiAodG1wKSByZXR1cm4gcmVzb2x2ZShkaXIsIHRtcCk7XG5cdFx0ZGlyID0gZGlybmFtZSh0bXAgPSBkaXIpO1xuXHRcdGlmICh0bXAgPT09IGRpcikgYnJlYWs7XG5cdH1cbn1cbiIsICIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgTWFpbiBlbnRyeXBvaW50IGZvciBsaWJyYXJpZXMgdXNpbmcgeWFyZ3MtcGFyc2VyIGluIE5vZGUuanNcbiAqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBDb250cmlidXRvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBJU0NcbiAqL1xudmFyIF9hLCBfYiwgX2M7XG4vKiBlc2xpbnQtZGlzYWJsZSBuL25vLXVucHVibGlzaGVkLWltcG9ydCAqL1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBub3JtYWxpemUsIHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGNhbWVsQ2FzZSwgZGVjYW1lbGl6ZSwgbG9va3NMaWtlTnVtYmVyIH0gZnJvbSAnLi9zdHJpbmctdXRpbHMuanMnO1xuaW1wb3J0IHsgWWFyZ3NQYXJzZXIgfSBmcm9tICcuL3lhcmdzLXBhcnNlci5qcyc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnO1xuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS95YXJncy95YXJncy1wYXJzZXIjc3VwcG9ydGVkLW5vZGVqcy12ZXJzaW9ucyBmb3Igb3VyXG4vLyB2ZXJzaW9uIHN1cHBvcnQgcG9saWN5LiBUaGUgWUFSR1NfTUlOX05PREVfVkVSU0lPTiBpcyB1c2VkIGZvciB0ZXN0aW5nIG9ubHkuXG5jb25zdCBtaW5Ob2RlVmVyc2lvbiA9IChwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52LllBUkdTX01JTl9OT0RFX1ZFUlNJT04pXG4gICAgPyBOdW1iZXIocHJvY2Vzcy5lbnYuWUFSR1NfTUlOX05PREVfVkVSU0lPTilcbiAgICA6IDIwO1xuY29uc3Qgbm9kZVZlcnNpb24gPSAoX2IgPSAoX2EgPSBwcm9jZXNzID09PSBudWxsIHx8IHByb2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2Nlc3MudmVyc2lvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAoX2MgPSBwcm9jZXNzID09PSBudWxsIHx8IHByb2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2Nlc3MudmVyc2lvbikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNsaWNlKDEpO1xuaWYgKG5vZGVWZXJzaW9uKSB7XG4gICAgY29uc3QgbWFqb3IgPSBOdW1iZXIobm9kZVZlcnNpb24ubWF0Y2goL14oW14uXSspLylbMV0pO1xuICAgIGlmIChtYWpvciA8IG1pbk5vZGVWZXJzaW9uKSB7XG4gICAgICAgIHRocm93IEVycm9yKGB5YXJncyBwYXJzZXIgc3VwcG9ydHMgYSBtaW5pbXVtIE5vZGUuanMgdmVyc2lvbiBvZiAke21pbk5vZGVWZXJzaW9ufS4gUmVhZCBvdXIgdmVyc2lvbiBzdXBwb3J0IHBvbGljeTogaHR0cHM6Ly9naXRodWIuY29tL3lhcmdzL3lhcmdzLXBhcnNlciNzdXBwb3J0ZWQtbm9kZWpzLXZlcnNpb25zYCk7XG4gICAgfVxufVxuLy8gQ3JlYXRlcyBhIHlhcmdzLXBhcnNlciBpbnN0YW5jZSB1c2luZyBOb2RlLmpzIHN0YW5kYXJkIGxpYnJhcmllczpcbmNvbnN0IGVudiA9IHByb2Nlc3MgPyBwcm9jZXNzLmVudiA6IHt9O1xuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUgPyBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCkgOiB1bmRlZmluZWQ7XG5jb25zdCBwYXJzZXIgPSBuZXcgWWFyZ3NQYXJzZXIoe1xuICAgIGN3ZDogcHJvY2Vzcy5jd2QsXG4gICAgZW52OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbnY7XG4gICAgfSxcbiAgICBmb3JtYXQsXG4gICAgbm9ybWFsaXplLFxuICAgIHJlc29sdmUsXG4gICAgcmVxdWlyZTogKHBhdGgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUocGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aC5tYXRjaCgvXFwuanNvbiQvKSkge1xuICAgICAgICAgICAgLy8gQWRkcmVzc2VzOiBodHRwczovL2dpdGh1Yi5jb20veWFyZ3MveWFyZ3MvaXNzdWVzLzIwNDBcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhwYXRoLCAndXRmOCcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdvbmx5IC5qc29uIGNvbmZpZyBmaWxlcyBhcmUgc3VwcG9ydGVkIGluIEVTTScpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5jb25zdCB5YXJnc1BhcnNlciA9IGZ1bmN0aW9uIFBhcnNlcihhcmdzLCBvcHRzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gcGFyc2VyLnBhcnNlKGFyZ3Muc2xpY2UoKSwgb3B0cyk7XG4gICAgcmV0dXJuIHJlc3VsdC5hcmd2O1xufTtcbnlhcmdzUGFyc2VyLmRldGFpbGVkID0gZnVuY3Rpb24gKGFyZ3MsIG9wdHMpIHtcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGFyZ3Muc2xpY2UoKSwgb3B0cyk7XG59O1xueWFyZ3NQYXJzZXIuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xueWFyZ3NQYXJzZXIuZGVjYW1lbGl6ZSA9IGRlY2FtZWxpemU7XG55YXJnc1BhcnNlci5sb29rc0xpa2VOdW1iZXIgPSBsb29rc0xpa2VOdW1iZXI7XG5leHBvcnQgZGVmYXVsdCB5YXJnc1BhcnNlcjtcbi8vIHNwZWNpYWwgc3ludGF4IHRvIGFsbG93IHVucXVhbGlmaWVkIGRlZmF1bHQgZXhwb3J0IGZyb20gQ29tbW9uSlNcbmV4cG9ydCB7IHlhcmdzUGFyc2VyIGFzICdtb2R1bGUuZXhwb3J0cycgfTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIENvbnRyaWJ1dG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IElTQ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlKHN0cikge1xuICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBhcmd1bWVudCBpcyBwcm92aWRlZCBhcyBjYW1lbCBjYXNlLCBlLmcuLCBmb29CYXIuXG4gICAgLy8gYnkgZW5zdXJpbmcgdGhhdCB0aGUgc3RyaW5nIGlzbid0IGFscmVhZHkgbWl4ZWQgY2FzZTpcbiAgICBjb25zdCBpc0NhbWVsQ2FzZSA9IHN0ciAhPT0gc3RyLnRvTG93ZXJDYXNlKCkgJiYgc3RyICE9PSBzdHIudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoIWlzQ2FtZWxDYXNlKSB7XG4gICAgICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAoc3RyLmluZGV4T2YoJy0nKSA9PT0gLTEgJiYgc3RyLmluZGV4T2YoJ18nKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBjYW1lbGNhc2UgPSAnJztcbiAgICAgICAgbGV0IG5leHRDaHJVcHBlciA9IGZhbHNlO1xuICAgICAgICBjb25zdCBsZWFkaW5nSHlwaGVucyA9IHN0ci5tYXRjaCgvXi0rLyk7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZWFkaW5nSHlwaGVucyA/IGxlYWRpbmdIeXBoZW5zWzBdLmxlbmd0aCA6IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgaWYgKG5leHRDaHJVcHBlcikge1xuICAgICAgICAgICAgICAgIG5leHRDaHJVcHBlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNociA9IGNoci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDAgJiYgKGNociA9PT0gJy0nIHx8IGNociA9PT0gJ18nKSkge1xuICAgICAgICAgICAgICAgIG5leHRDaHJVcHBlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaHIgIT09ICctJyAmJiBjaHIgIT09ICdfJykge1xuICAgICAgICAgICAgICAgIGNhbWVsY2FzZSArPSBjaHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbWVsY2FzZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVjYW1lbGl6ZShzdHIsIGpvaW5TdHJpbmcpIHtcbiAgICBjb25zdCBsb3dlcmNhc2UgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICBqb2luU3RyaW5nID0gam9pblN0cmluZyB8fCAnLSc7XG4gICAgbGV0IG5vdENhbWVsY2FzZSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNockxvd2VyID0gbG93ZXJjYXNlLmNoYXJBdChpKTtcbiAgICAgICAgY29uc3QgY2hyU3RyaW5nID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaWYgKGNockxvd2VyICE9PSBjaHJTdHJpbmcgJiYgaSA+IDApIHtcbiAgICAgICAgICAgIG5vdENhbWVsY2FzZSArPSBgJHtqb2luU3RyaW5nfSR7bG93ZXJjYXNlLmNoYXJBdChpKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm90Q2FtZWxjYXNlICs9IGNoclN0cmluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm90Q2FtZWxjYXNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tzTGlrZU51bWJlcih4KSB7XG4gICAgaWYgKHggPT09IG51bGwgfHwgeCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gaWYgbG9hZGVkIGZyb20gY29uZmlnLCBtYXkgYWxyZWFkeSBiZSBhIG51bWJlci5cbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBoZXhhZGVjaW1hbC5cbiAgICBpZiAoL14weFswLTlhLWZdKyQvaS50ZXN0KHgpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBkb24ndCB0cmVhdCAwMTIzIGFzIGEgbnVtYmVyOyBhcyBpdCBkcm9wcyB0aGUgbGVhZGluZyAnMCcuXG4gICAgaWYgKC9eMFteLl0vLnRlc3QoeCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gL15bLV0/KD86XFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKShlWy0rXT9cXGQrKT8kLy50ZXN0KHgpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbi8vIHRha2UgYW4gdW4tc3BsaXQgYXJndiBzdHJpbmcgYW5kIHRva2VuaXplIGl0LlxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplQXJnU3RyaW5nKGFyZ1N0cmluZykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIGFyZ1N0cmluZy5tYXAoZSA9PiB0eXBlb2YgZSAhPT0gJ3N0cmluZycgPyBlICsgJycgOiBlKTtcbiAgICB9XG4gICAgYXJnU3RyaW5nID0gYXJnU3RyaW5nLnRyaW0oKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHByZXZDID0gbnVsbDtcbiAgICBsZXQgYyA9IG51bGw7XG4gICAgbGV0IG9wZW5pbmcgPSBudWxsO1xuICAgIGNvbnN0IGFyZ3MgPSBbXTtcbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgYXJnU3RyaW5nLmxlbmd0aDsgaWkrKykge1xuICAgICAgICBwcmV2QyA9IGM7XG4gICAgICAgIGMgPSBhcmdTdHJpbmcuY2hhckF0KGlpKTtcbiAgICAgICAgLy8gc3BsaXQgb24gc3BhY2VzIHVubGVzcyB3ZSdyZSBpbiBxdW90ZXMuXG4gICAgICAgIGlmIChjID09PSAnICcgJiYgIW9wZW5pbmcpIHtcbiAgICAgICAgICAgIGlmICghKHByZXZDID09PSAnICcpKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3Qgc3BsaXQgdGhlIHN0cmluZyBpZiB3ZSdyZSBpbiBtYXRjaGluZ1xuICAgICAgICAvLyBvcGVuaW5nIG9yIGNsb3Npbmcgc2luZ2xlIGFuZCBkb3VibGUgcXVvdGVzLlxuICAgICAgICBpZiAoYyA9PT0gb3BlbmluZykge1xuICAgICAgICAgICAgb3BlbmluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGMgPT09IFwiJ1wiIHx8IGMgPT09ICdcIicpICYmICFvcGVuaW5nKSB7XG4gICAgICAgICAgICBvcGVuaW5nID0gYztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZ3NbaV0pXG4gICAgICAgICAgICBhcmdzW2ldID0gJyc7XG4gICAgICAgIGFyZ3NbaV0gKz0gYztcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBDb250cmlidXRvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBJU0NcbiAqL1xuZXhwb3J0IHZhciBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleTtcbihmdW5jdGlvbiAoRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkpIHtcbiAgICBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleVtcIkJPT0xFQU5cIl0gPSBcImJvb2xlYW5cIjtcbiAgICBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleVtcIlNUUklOR1wiXSA9IFwic3RyaW5nXCI7XG4gICAgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXlbXCJOVU1CRVJcIl0gPSBcIm51bWJlclwiO1xuICAgIERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5W1wiQVJSQVlcIl0gPSBcImFycmF5XCI7XG59KShEZWZhdWx0VmFsdWVzRm9yVHlwZUtleSB8fCAoRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkgPSB7fSkpO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1hcnJvdy1jYWxsYmFjayAqL1xuaW1wb3J0IHsgdG9rZW5pemVBcmdTdHJpbmcgfSBmcm9tICcuL3Rva2VuaXplLWFyZy1zdHJpbmcuanMnO1xuaW1wb3J0IHsgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkgfSBmcm9tICcuL3lhcmdzLXBhcnNlci10eXBlcy5qcyc7XG5pbXBvcnQgeyBjYW1lbENhc2UsIGRlY2FtZWxpemUsIGxvb2tzTGlrZU51bWJlciB9IGZyb20gJy4vc3RyaW5nLXV0aWxzLmpzJztcbmxldCBtaXhpbjtcbmV4cG9ydCBjbGFzcyBZYXJnc1BhcnNlciB7XG4gICAgY29uc3RydWN0b3IoX21peGluKSB7XG4gICAgICAgIG1peGluID0gX21peGluO1xuICAgIH1cbiAgICBwYXJzZShhcmdzSW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYWxpYXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFycmF5OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBib29sZWFuOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb25maWc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvbmZpZ09iamVjdHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvZXJjZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY291bnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGVudlByZWZpeDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbmFyZzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbm9ybWFsaXplOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdHJpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG51bWJlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgX186IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGtleTogdW5kZWZpbmVkXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICAvLyBhbGxvdyBhIHN0cmluZyBhcmd1bWVudCB0byBiZSBwYXNzZWQgaW4gcmF0aGVyXG4gICAgICAgIC8vIHRoYW4gYW4gYXJndiBhcnJheS5cbiAgICAgICAgY29uc3QgYXJncyA9IHRva2VuaXplQXJnU3RyaW5nKGFyZ3NJbnB1dCk7XG4gICAgICAgIC8vIHRva2VuaXplQXJnU3RyaW5nIGFkZHMgZXh0cmEgcXVvdGVzIHRvIGFyZ3MgaWYgYXJnc0lucHV0IGlzIGEgc3RyaW5nXG4gICAgICAgIC8vIG9ubHkgc3RyaXAgdGhvc2UgZXh0cmEgcXVvdGVzIGluIHByb2Nlc3NWYWx1ZSBpZiBhcmdzSW5wdXQgaXMgYSBzdHJpbmdcbiAgICAgICAgY29uc3QgaW5wdXRJc1N0cmluZyA9IHR5cGVvZiBhcmdzSW5wdXQgPT09ICdzdHJpbmcnO1xuICAgICAgICAvLyBhbGlhc2VzIG1pZ2h0IGhhdmUgdHJhbnNpdGl2ZSByZWxhdGlvbnNoaXBzLCBub3JtYWxpemUgdGhpcy5cbiAgICAgICAgY29uc3QgYWxpYXNlcyA9IGNvbWJpbmVBbGlhc2VzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgb3B0cy5hbGlhcykpO1xuICAgICAgICBjb25zdCBjb25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAnYm9vbGVhbi1uZWdhdGlvbic6IHRydWUsXG4gICAgICAgICAgICAnY2FtZWwtY2FzZS1leHBhbnNpb24nOiB0cnVlLFxuICAgICAgICAgICAgJ2NvbWJpbmUtYXJyYXlzJzogZmFsc2UsXG4gICAgICAgICAgICAnZG90LW5vdGF0aW9uJzogdHJ1ZSxcbiAgICAgICAgICAgICdkdXBsaWNhdGUtYXJndW1lbnRzLWFycmF5JzogdHJ1ZSxcbiAgICAgICAgICAgICdmbGF0dGVuLWR1cGxpY2F0ZS1hcnJheXMnOiB0cnVlLFxuICAgICAgICAgICAgJ2dyZWVkeS1hcnJheXMnOiB0cnVlLFxuICAgICAgICAgICAgJ2hhbHQtYXQtbm9uLW9wdGlvbic6IGZhbHNlLFxuICAgICAgICAgICAgJ25hcmdzLWVhdHMtb3B0aW9ucyc6IGZhbHNlLFxuICAgICAgICAgICAgJ25lZ2F0aW9uLXByZWZpeCc6ICduby0nLFxuICAgICAgICAgICAgJ3BhcnNlLW51bWJlcnMnOiB0cnVlLFxuICAgICAgICAgICAgJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyc6IHRydWUsXG4gICAgICAgICAgICAncG9wdWxhdGUtLSc6IGZhbHNlLFxuICAgICAgICAgICAgJ3NldC1wbGFjZWhvbGRlci1rZXknOiBmYWxzZSxcbiAgICAgICAgICAgICdzaG9ydC1vcHRpb24tZ3JvdXBzJzogdHJ1ZSxcbiAgICAgICAgICAgICdzdHJpcC1hbGlhc2VkJzogZmFsc2UsXG4gICAgICAgICAgICAnc3RyaXAtZGFzaGVkJzogZmFsc2UsXG4gICAgICAgICAgICAndW5rbm93bi1vcHRpb25zLWFzLWFyZ3MnOiBmYWxzZVxuICAgICAgICB9LCBvcHRzLmNvbmZpZ3VyYXRpb24pO1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgb3B0cy5kZWZhdWx0KTtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqZWN0cyA9IG9wdHMuY29uZmlnT2JqZWN0cyB8fCBbXTtcbiAgICAgICAgY29uc3QgZW52UHJlZml4ID0gb3B0cy5lbnZQcmVmaXg7XG4gICAgICAgIGNvbnN0IG5vdEZsYWdzT3B0aW9uID0gY29uZmlndXJhdGlvblsncG9wdWxhdGUtLSddO1xuICAgICAgICBjb25zdCBub3RGbGFnc0FyZ3YgPSBub3RGbGFnc09wdGlvbiA/ICctLScgOiAnXyc7XG4gICAgICAgIGNvbnN0IG5ld0FsaWFzZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBjb25zdCBkZWZhdWx0ZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAvLyBhbGxvdyBhIGkxOG4gaGFuZGxlciB0byBiZSBwYXNzZWQgaW4sIGRlZmF1bHQgdG8gYSBmYWtlIG9uZSAodXRpbC5mb3JtYXQpLlxuICAgICAgICBjb25zdCBfXyA9IG9wdHMuX18gfHwgbWl4aW4uZm9ybWF0O1xuICAgICAgICBjb25zdCBmbGFncyA9IHtcbiAgICAgICAgICAgIGFsaWFzZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBhcnJheXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBib29sczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIHN0cmluZ3M6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBudW1iZXJzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgY291bnRzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgbm9ybWFsaXplOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgY29uZmlnczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIG5hcmdzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgY29lcmNpb25zOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAga2V5czogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmVnYXRpdmUgPSAvXi0oWzAtOV0rKFxcLlswLTldKyk/fFxcLlswLTldKykkLztcbiAgICAgICAgY29uc3QgbmVnYXRlZEJvb2xlYW4gPSBuZXcgUmVnRXhwKCdeLS0nICsgY29uZmlndXJhdGlvblsnbmVnYXRpb24tcHJlZml4J10gKyAnKC4rKScpO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5hcnJheSB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgPyBvcHQua2V5IDogb3B0O1xuICAgICAgICAgICAgLy8gYXNzaWduIHRvIGZsYWdzW2Jvb2xzfHN0cmluZ3N8bnVtYmVyc11cbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnQgPSBPYmplY3Qua2V5cyhvcHQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXlGbGFnS2V5cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYm9vbGVhbjogJ2Jvb2xzJyxcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiAnc3RyaW5ncycsXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcjogJ251bWJlcnMnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlGbGFnS2V5c1trZXldO1xuICAgICAgICAgICAgfSkuZmlsdGVyKEJvb2xlYW4pLnBvcCgpO1xuICAgICAgICAgICAgLy8gYXNzaWduIGtleSB0byBiZSBjb2VyY2VkXG4gICAgICAgICAgICBpZiAoYXNzaWdubWVudCkge1xuICAgICAgICAgICAgICAgIGZsYWdzW2Fzc2lnbm1lbnRdW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmxhZ3MuYXJyYXlzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5ib29sZWFuIHx8IFtdKS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmbGFncy5ib29sc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMuc3RyaW5nIHx8IFtdKS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmbGFncy5zdHJpbmdzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5udW1iZXIgfHwgW10pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGZsYWdzLm51bWJlcnNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBmbGFncy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFtdLmNvbmNhdChvcHRzLmNvdW50IHx8IFtdKS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmbGFncy5jb3VudHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBmbGFncy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFtdLmNvbmNhdChvcHRzLm5vcm1hbGl6ZSB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3Mubm9ybWFsaXplW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIG9wdHMubmFyZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdHMubmFyZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MubmFyZ3Nba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBmbGFncy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMuY29lcmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMob3B0cy5jb2VyY2UpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuY29lcmNpb25zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdHMuY29uZmlnKSB8fCB0eXBlb2Ygb3B0cy5jb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIFtdLmNvbmNhdChvcHRzLmNvbmZpZykuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBmbGFncy5jb25maWdzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG9wdHMuY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdHMuY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MuY29uZmlnc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgYSBsb29rdXAgdGFibGUgdGhhdCB0YWtlcyBpbnRvIGFjY291bnQgYWxsXG4gICAgICAgIC8vIGNvbWJpbmF0aW9ucyBvZiBhbGlhc2VzOiB7ZjogWydmb28nXSwgZm9vOiBbJ2YnXX1cbiAgICAgICAgZXh0ZW5kQWxpYXNlcyhvcHRzLmtleSwgYWxpYXNlcywgb3B0cy5kZWZhdWx0LCBmbGFncy5hcnJheXMpO1xuICAgICAgICAvLyBhcHBseSBkZWZhdWx0IHZhbHVlcyB0byBhbGwgYWxpYXNlcy5cbiAgICAgICAgT2JqZWN0LmtleXMoZGVmYXVsdHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgKGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0c1thbGlhc10gPSBkZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZXJyb3IgPSBudWxsO1xuICAgICAgICBjaGVja0NvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgbGV0IG5vdEZsYWdzID0gW107XG4gICAgICAgIGNvbnN0IGFyZ3YgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHsgXzogW10gfSk7XG4gICAgICAgIC8vIFRPRE8oYmNvZSk6IGZvciB0aGUgZmlyc3QgcGFzcyBhdCByZW1vdmluZyBvYmplY3QgcHJvdG90eXBlICB3ZSBkaWRuJ3RcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBwcm90b3R5cGVzIGZyb20gb2JqZWN0cyByZXR1cm5lZCBieSB0aGlzIEFQSSwgd2UgbWlnaHQgd2FudFxuICAgICAgICAvLyB0byBncmFkdWFsbHkgbW92ZSB0b3dhcmRzIGRvaW5nIHNvLlxuICAgICAgICBjb25zdCBhcmd2UmV0dXJuID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJnID0gYXJnc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHRydW5jYXRlZEFyZyA9IGFyZy5yZXBsYWNlKC9eLXszLH0vLCAnLS0tJyk7XG4gICAgICAgICAgICBsZXQgYnJva2VuO1xuICAgICAgICAgICAgbGV0IGtleTtcbiAgICAgICAgICAgIGxldCBsZXR0ZXJzO1xuICAgICAgICAgICAgbGV0IG07XG4gICAgICAgICAgICBsZXQgbmV4dDtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIC8vIGFueSB1bmtub3duIG9wdGlvbiAoZXhjZXB0IGZvciBlbmQtb2Ytb3B0aW9ucywgXCItLVwiKVxuICAgICAgICAgICAgaWYgKGFyZyAhPT0gJy0tJyAmJiAvXi0vLnRlc3QoYXJnKSAmJiBpc1Vua25vd25PcHRpb25Bc0FyZyhhcmcpKSB7XG4gICAgICAgICAgICAgICAgcHVzaFBvc2l0aW9uYWwoYXJnKTtcbiAgICAgICAgICAgICAgICAvLyAtLS0sIC0tLT0sIC0tLS0sIGV0YyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRydW5jYXRlZEFyZy5tYXRjaCgvXi0tLSsoPXwkKS8pKSB7XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9ucyB3aXRob3V0IGtleSBuYW1lIGFyZSBpbnZhbGlkLlxuICAgICAgICAgICAgICAgIHB1c2hQb3NpdGlvbmFsKGFyZyk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgLy8gLS0gc2VwYXJhdGVkIGJ5ID1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaCgvXi0tLis9LykgfHwgKCFjb25maWd1cmF0aW9uWydzaG9ydC1vcHRpb24tZ3JvdXBzJ10gJiYgYXJnLm1hdGNoKC9eLS4rPS8pKSkge1xuICAgICAgICAgICAgICAgIC8vIFVzaW5nIFtcXHNcXFNdIGluc3RlYWQgb2YgLiBiZWNhdXNlIGpzIGRvZXNuJ3Qgc3VwcG9ydCB0aGVcbiAgICAgICAgICAgICAgICAvLyAnZG90YWxsJyByZWdleCBtb2RpZmllci4gU2VlOlxuICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEwNjgzMDgvMTMyMTZcbiAgICAgICAgICAgICAgICBtID0gYXJnLm1hdGNoKC9eLS0/KFtePV0rKT0oW1xcc1xcU10qKSQvKTtcbiAgICAgICAgICAgICAgICAvLyBhcnJheXMgZm9ybWF0ID0gJy0tZj1hIGIgYydcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhtWzFdLCBmbGFncy5hcnJheXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0QXJyYXkoaSwgbVsxXSwgYXJncywgbVsyXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKG1bMV0sIGZsYWdzLm5hcmdzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctLWY9bW9ua2V5IHdhc2hpbmcgY2F0J1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIG1bMV0sIGFyZ3MsIG1bMl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKG1bMV0sIG1bMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnLm1hdGNoKG5lZ2F0ZWRCb29sZWFuKSAmJiBjb25maWd1cmF0aW9uWydib29sZWFuLW5lZ2F0aW9uJ10pIHtcbiAgICAgICAgICAgICAgICBtID0gYXJnLm1hdGNoKG5lZ2F0ZWRCb29sZWFuKTtcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gbVsxXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSA/IFtmYWxzZV0gOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIC0tIHNlcGFyYXRlZCBieSBzcGFjZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaCgvXi0tLisvKSB8fCAoIWNvbmZpZ3VyYXRpb25bJ3Nob3J0LW9wdGlvbi1ncm91cHMnXSAmJiBhcmcubWF0Y2goL14tW14tXSsvKSkpIHtcbiAgICAgICAgICAgICAgICBtID0gYXJnLm1hdGNoKC9eLS0/KC4rKS8pO1xuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsICYmIEFycmF5LmlzQXJyYXkobSkgJiYgbS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBtWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgZm9ybWF0ID0gJy0tZm9vIGEgYiBjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFyZ3MgZm9ybWF0ID0gJy0tZm9vIGEgYiBjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIHRydXRoeSBldmVuIGlmOiBmbGFncy5uYXJnc1trZXldID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0TmFyZ3MoaSwga2V5LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBhcmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQgJiYgKCFuZXh0Lm1hdGNoKC9eLS8pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5tYXRjaChuZWdhdGl2ZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL14odHJ1ZXxmYWxzZSkkLy50ZXN0KG5leHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgZGVmYXVsdFZhbHVlKGtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvdC1ub3RhdGlvbiBmbGFnIHNlcGFyYXRlZCBieSAnPScuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLlxcLi4rPS8pKSB7XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0oW149XSspPShbXFxzXFxTXSopJC8pO1xuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsICYmIEFycmF5LmlzQXJyYXkobSkgJiYgbS5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgICAgICBzZXRBcmcobVsxXSwgbVsyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvdC1ub3RhdGlvbiBmbGFnIHNlcGFyYXRlZCBieSBzcGFjZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaCgvXi0uXFwuLisvKSAmJiAhYXJnLm1hdGNoKG5lZ2F0aXZlKSkge1xuICAgICAgICAgICAgICAgIG5leHQgPSBhcmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBtID0gYXJnLm1hdGNoKC9eLSguXFwuLispLyk7XG4gICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwgJiYgQXJyYXkuaXNBcnJheShtKSAmJiBtLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IG1bMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQgJiYgIW5leHQubWF0Y2goL14tLykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaCgvXi1bXi1dKy8pICYmICFhcmcubWF0Y2gobmVnYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgbGV0dGVycyA9IGFyZy5zbGljZSgxLCAtMSkuc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGJyb2tlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gYXJnLnNsaWNlKGogKyAyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldHRlcnNbaiArIDFdICYmIGxldHRlcnNbaiArIDFdID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYXJnLnNsaWNlKGogKyAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGxldHRlcnNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IGZvcm1hdCA9ICctZj1hIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0QXJyYXkoaSwga2V5LCBhcmdzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFyZ3MgZm9ybWF0ID0gJy1mPW1vbmtleSB3YXNoaW5nIGNhdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0TmFyZ3MoaSwga2V5LCBhcmdzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPT09ICctJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudCBsZXR0ZXIgaXMgYW4gYWxwaGFiZXRpYyBjaGFyYWN0ZXIgYW5kIG5leHQgdmFsdWUgaXMgYSBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9bQS1aYS16XS8udGVzdChsZXR0ZXJzW2pdKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgL14tP1xcZCsoXFwuXFxkKik/KGUtP1xcZCspPyQvLnRlc3QobmV4dCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQWxsQWxpYXNlcyhuZXh0LCBmbGFncy5ib29scykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcobGV0dGVyc1tqXSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldHRlcnNbaiArIDFdICYmIGxldHRlcnNbaiArIDFdLm1hdGNoKC9cXFcvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIGRlZmF1bHRWYWx1ZShsZXR0ZXJzW2pdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2V5ID0gYXJnLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoIWJyb2tlbiAmJiBrZXkgIT09ICctJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgZm9ybWF0ID0gJy1mIGEgYiBjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFyZ3MgZm9ybWF0ID0gJy1mIGEgYiBjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIHRydXRoeSBldmVuIGlmOiBmbGFncy5uYXJnc1trZXldID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0TmFyZ3MoaSwga2V5LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBhcmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQgJiYgKCEvXigtfC0tKVteLV0vLnRlc3QobmV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0Lm1hdGNoKG5lZ2F0aXZlKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmNvdW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgvXih0cnVlfGZhbHNlKSQvLnRlc3QobmV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBkZWZhdWx0VmFsdWUoa2V5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tWzAtOV0kLykgJiZcbiAgICAgICAgICAgICAgICBhcmcubWF0Y2gobmVnYXRpdmUpICYmXG4gICAgICAgICAgICAgICAgY2hlY2tBbGxBbGlhc2VzKGFyZy5zbGljZSgxKSwgZmxhZ3MuYm9vbHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gc2luZ2xlLWRpZ2l0IGJvb2xlYW4gYWxpYXMsIGUuZzogeGFyZ3MgLTBcbiAgICAgICAgICAgICAgICBrZXkgPSBhcmcuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgZGVmYXVsdFZhbHVlKGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnID09PSAnLS0nKSB7XG4gICAgICAgICAgICAgICAgbm90RmxhZ3MgPSBhcmdzLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZ3VyYXRpb25bJ2hhbHQtYXQtbm9uLW9wdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgbm90RmxhZ3MgPSBhcmdzLnNsaWNlKGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHVzaFBvc2l0aW9uYWwoYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBvcmRlciBvZiBwcmVjZWRlbmNlOlxuICAgICAgICAvLyAxLiBjb21tYW5kIGxpbmUgYXJnXG4gICAgICAgIC8vIDIuIHZhbHVlIGZyb20gZW52IHZhclxuICAgICAgICAvLyAzLiB2YWx1ZSBmcm9tIGNvbmZpZyBmaWxlXG4gICAgICAgIC8vIDQuIHZhbHVlIGZyb20gY29uZmlnIG9iamVjdHNcbiAgICAgICAgLy8gNS4gY29uZmlndXJlZCBkZWZhdWx0IHZhbHVlXG4gICAgICAgIGFwcGx5RW52VmFycyhhcmd2LCB0cnVlKTsgLy8gc3BlY2lhbCBjYXNlOiBjaGVjayBlbnYgdmFycyB0aGF0IHBvaW50IHRvIGNvbmZpZyBmaWxlXG4gICAgICAgIGFwcGx5RW52VmFycyhhcmd2LCBmYWxzZSk7XG4gICAgICAgIHNldENvbmZpZyhhcmd2KTtcbiAgICAgICAgc2V0Q29uZmlnT2JqZWN0cygpO1xuICAgICAgICBhcHBseURlZmF1bHRzQW5kQWxpYXNlcyhhcmd2LCBmbGFncy5hbGlhc2VzLCBkZWZhdWx0cywgdHJ1ZSk7XG4gICAgICAgIGFwcGx5Q29lcmNpb25zKGFyZ3YpO1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnc2V0LXBsYWNlaG9sZGVyLWtleSddKVxuICAgICAgICAgICAgc2V0UGxhY2Vob2xkZXJLZXlzKGFyZ3YpO1xuICAgICAgICAvLyBmb3IgYW55IGNvdW50cyBlaXRoZXIgbm90IGluIGFyZ3Mgb3Igd2l0aG91dCBhbiBleHBsaWNpdCBkZWZhdWx0LCBzZXQgdG8gMFxuICAgICAgICBPYmplY3Qua2V5cyhmbGFncy5jb3VudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKCFoYXNLZXkoYXJndiwga2V5LnNwbGl0KCcuJykpKVxuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIDApO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gJy0tJyBkZWZhdWx0cyB0byB1bmRlZmluZWQuXG4gICAgICAgIGlmIChub3RGbGFnc09wdGlvbiAmJiBub3RGbGFncy5sZW5ndGgpXG4gICAgICAgICAgICBhcmd2W25vdEZsYWdzQXJndl0gPSBbXTtcbiAgICAgICAgbm90RmxhZ3MuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBhcmd2W25vdEZsYWdzQXJndl0ucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJ10gJiYgY29uZmlndXJhdGlvblsnc3RyaXAtZGFzaGVkJ10pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFyZ3YpLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnLS0nICYmIGtleS5pbmNsdWRlcygnLScpKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFyZ3Zba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uWydzdHJpcC1hbGlhc2VkJ10pIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhhbGlhc2VzKS5tYXAoayA9PiBhbGlhc2VzW2tdKSkuZm9yRWFjaChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJ10gJiYgYWxpYXMuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXJndlthbGlhcy5zcGxpdCgnLicpLm1hcChwcm9wID0+IGNhbWVsQ2FzZShwcm9wKSkuam9pbignLicpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFyZ3ZbYWxpYXNdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHVzaCBhcmd1bWVudCBpbnRvIHBvc2l0aW9uYWwgYXJyYXksIGFwcGx5aW5nIG51bWVyaWMgY29lcmNpb246XG4gICAgICAgIGZ1bmN0aW9uIHB1c2hQb3NpdGlvbmFsKGFyZykge1xuICAgICAgICAgICAgY29uc3QgbWF5YmVDb2VyY2VkTnVtYmVyID0gbWF5YmVDb2VyY2VOdW1iZXIoJ18nLCBhcmcpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXliZUNvZXJjZWROdW1iZXIgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtYXliZUNvZXJjZWROdW1iZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgYXJndi5fLnB1c2gobWF5YmVDb2VyY2VkTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBob3cgbWFueSBhcmd1bWVudHMgc2hvdWxkIHdlIGNvbnN1bWUsIGJhc2VkXG4gICAgICAgIC8vIG9uIHRoZSBuYXJncyBvcHRpb24/XG4gICAgICAgIGZ1bmN0aW9uIGVhdE5hcmdzKGksIGtleSwgYXJncywgYXJnQWZ0ZXJFcXVhbFNpZ24pIHtcbiAgICAgICAgICAgIGxldCBpaTtcbiAgICAgICAgICAgIGxldCB0b0VhdCA9IGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKTtcbiAgICAgICAgICAgIC8vIE5hTiBoYXMgYSBzcGVjaWFsIG1lYW5pbmcgZm9yIHRoZSBhcnJheSB0eXBlLCBpbmRpY2F0aW5nIHRoYXQgb25lIG9yXG4gICAgICAgICAgICAvLyBtb3JlIHZhbHVlcyBhcmUgZXhwZWN0ZWQuXG4gICAgICAgICAgICB0b0VhdCA9IHR5cGVvZiB0b0VhdCAhPT0gJ251bWJlcicgfHwgaXNOYU4odG9FYXQpID8gMSA6IHRvRWF0O1xuICAgICAgICAgICAgaWYgKHRvRWF0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChhcmdBZnRlckVxdWFsU2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnQXJndW1lbnQgdW5leHBlY3RlZCBmb3I6ICVzJywga2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhdmFpbGFibGUgPSBpc1VuZGVmaW5lZChhcmdBZnRlckVxdWFsU2lnbikgPyAwIDogMTtcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uWyduYXJncy1lYXRzLW9wdGlvbnMnXSkge1xuICAgICAgICAgICAgICAgIC8vIGNsYXNzaWMgYmVoYXZpb3IsIHlhcmdzIGVhdHMgcG9zaXRpb25hbCBhbmQgZGFzaCBhcmd1bWVudHMuXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIC0gKGkgKyAxKSArIGF2YWlsYWJsZSA8IHRvRWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ05vdCBlbm91Z2ggYXJndW1lbnRzIGZvbGxvd2luZzogJXMnLCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlID0gdG9FYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBuYXJncyB3aWxsIG5vdCBjb25zdW1lIGZsYWcgYXJndW1lbnRzLCBlLmcuLCAtYWJjLCAtLWZvbyxcbiAgICAgICAgICAgICAgICAvLyBhbmQgdGVybWluYXRlcyB3aGVuIG9uZSBpcyBvYnNlcnZlZC5cbiAgICAgICAgICAgICAgICBmb3IgKGlpID0gaSArIDE7IGlpIDwgYXJncy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmdzW2lpXS5tYXRjaCgvXi1bXjAtOV0vKSB8fCBhcmdzW2lpXS5tYXRjaChuZWdhdGl2ZSkgfHwgaXNVbmtub3duT3B0aW9uQXNBcmcoYXJnc1tpaV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlKys7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXZhaWxhYmxlIDwgdG9FYXQpXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ05vdCBlbm91Z2ggYXJndW1lbnRzIGZvbGxvd2luZzogJXMnLCBrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb25zdW1lZCA9IE1hdGgubWluKGF2YWlsYWJsZSwgdG9FYXQpO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChhcmdBZnRlckVxdWFsU2lnbikgJiYgY29uc3VtZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgYXJnQWZ0ZXJFcXVhbFNpZ24pO1xuICAgICAgICAgICAgICAgIGNvbnN1bWVkLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGlpID0gaSArIDE7IGlpIDwgKGNvbnN1bWVkICsgaSArIDEpOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgYXJnc1tpaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChpICsgY29uc3VtZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGFuIG9wdGlvbiBpcyBhbiBhcnJheSwgZWF0IGFsbCBub24taHlwaGVuYXRlZCBhcmd1bWVudHNcbiAgICAgICAgLy8gZm9sbG93aW5nIGl0Li4uIFlVTSFcbiAgICAgICAgLy8gZS5nLiwgLS1mb28gYXBwbGUgYmFuYW5hIGNhdCBiZWNvbWVzIFtcImFwcGxlXCIsIFwiYmFuYW5hXCIsIFwiY2F0XCJdXG4gICAgICAgIGZ1bmN0aW9uIGVhdEFycmF5KGksIGtleSwgYXJncywgYXJnQWZ0ZXJFcXVhbFNpZ24pIHtcbiAgICAgICAgICAgIGxldCBhcmdzVG9TZXQgPSBbXTtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gYXJnQWZ0ZXJFcXVhbFNpZ24gfHwgYXJnc1tpICsgMV07XG4gICAgICAgICAgICAvLyBJZiBib3RoIGFycmF5IGFuZCBuYXJncyBhcmUgY29uZmlndXJlZCwgZW5mb3JjZSB0aGUgbmFyZ3MgY291bnQ6XG4gICAgICAgICAgICBjb25zdCBuYXJnc0NvdW50ID0gY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpO1xuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJiAhKC9eKHRydWV8ZmFsc2UpJC8udGVzdChuZXh0KSkpIHtcbiAgICAgICAgICAgICAgICBhcmdzVG9TZXQucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzVW5kZWZpbmVkKG5leHQpIHx8XG4gICAgICAgICAgICAgICAgKGlzVW5kZWZpbmVkKGFyZ0FmdGVyRXF1YWxTaWduKSAmJiAvXi0vLnRlc3QobmV4dCkgJiYgIW5lZ2F0aXZlLnRlc3QobmV4dCkgJiYgIWlzVW5rbm93bk9wdGlvbkFzQXJnKG5leHQpKSkge1xuICAgICAgICAgICAgICAgIC8vIGZvciBrZXlzIHdpdGhvdXQgdmFsdWUgPT0+IGFyZ3NUb1NldCByZW1haW5zIGFuIGVtcHR5IFtdXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVzZXIgZGVmYXVsdCB2YWx1ZSwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZWYWwgPSBkZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgICAgICAgICBhcmdzVG9TZXQgPSBBcnJheS5pc0FycmF5KGRlZlZhbCkgPyBkZWZWYWwgOiBbZGVmVmFsXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSBpbiAtLW9wdGlvbj12YWx1ZSBpcyBlYXRlbiBhcyBpc1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NUb1NldC5wdXNoKHByb2Nlc3NWYWx1ZShrZXksIGFyZ0FmdGVyRXF1YWxTaWduLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGlpID0gaSArIDE7IGlpIDwgYXJncy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCghY29uZmlndXJhdGlvblsnZ3JlZWR5LWFycmF5cyddICYmIGFyZ3NUb1NldC5sZW5ndGggPiAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKG5hcmdzQ291bnQgJiYgdHlwZW9mIG5hcmdzQ291bnQgPT09ICdudW1iZXInICYmIGFyZ3NUb1NldC5sZW5ndGggPj0gbmFyZ3NDb3VudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGFyZ3NbaWldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoL14tLy50ZXN0KG5leHQpICYmICFuZWdhdGl2ZS50ZXN0KG5leHQpICYmICFpc1Vua25vd25PcHRpb25Bc0FyZyhuZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBpID0gaWk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NUb1NldC5wdXNoKHByb2Nlc3NWYWx1ZShrZXksIG5leHQsIGlucHV0SXNTdHJpbmcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBib3RoIGFycmF5IGFuZCBuYXJncyBhcmUgY29uZmlndXJlZCwgY3JlYXRlIGFuIGVycm9yIGlmIGxlc3MgdGhhblxuICAgICAgICAgICAgLy8gbmFyZ3MgcG9zaXRpb25hbHMgd2VyZSBmb3VuZC4gTmFOIGhhcyBzcGVjaWFsIG1lYW5pbmcsIGluZGljYXRpbmdcbiAgICAgICAgICAgIC8vIHRoYXQgYXQgbGVhc3Qgb25lIHZhbHVlIGlzIHJlcXVpcmVkIChtb3JlIGFyZSBva2F5KS5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmFyZ3NDb3VudCA9PT0gJ251bWJlcicgJiYgKChuYXJnc0NvdW50ICYmIGFyZ3NUb1NldC5sZW5ndGggPCBuYXJnc0NvdW50KSB8fFxuICAgICAgICAgICAgICAgIChpc05hTihuYXJnc0NvdW50KSAmJiBhcmdzVG9TZXQubGVuZ3RoID09PSAwKSkpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyBmb2xsb3dpbmc6ICVzJywga2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRBcmcoa2V5LCBhcmdzVG9TZXQpO1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0QXJnKGtleSwgdmFsLCBzaG91bGRTdHJpcFF1b3RlcyA9IGlucHV0SXNTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICgvLS8udGVzdChrZXkpICYmIGNvbmZpZ3VyYXRpb25bJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJ10pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGlhcyA9IGtleS5zcGxpdCgnLicpLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FtZWxDYXNlKHByb3ApO1xuICAgICAgICAgICAgICAgIH0pLmpvaW4oJy4nKTtcbiAgICAgICAgICAgICAgICBhZGROZXdBbGlhcyhrZXksIGFsaWFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJvY2Vzc1ZhbHVlKGtleSwgdmFsLCBzaG91bGRTdHJpcFF1b3Rlcyk7XG4gICAgICAgICAgICBjb25zdCBzcGxpdEtleSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgc2V0S2V5KGFyZ3YsIHNwbGl0S2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAvLyBoYW5kbGUgcG9wdWxhdGluZyBhbGlhc2VzIG9mIHRoZSBmdWxsIGtleVxuICAgICAgICAgICAgaWYgKGZsYWdzLmFsaWFzZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVByb3BlcnRpZXMgPSB4LnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldEtleShhcmd2LCBrZXlQcm9wZXJ0aWVzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYW5kbGUgcG9wdWxhdGluZyBhbGlhc2VzIG9mIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBkb3Qtbm90YXRpb24ga2V5XG4gICAgICAgICAgICBpZiAoc3BsaXRLZXkubGVuZ3RoID4gMSAmJiBjb25maWd1cmF0aW9uWydkb3Qtbm90YXRpb24nXSkge1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAoZmxhZ3MuYWxpYXNlc1tzcGxpdEtleVswXV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleVByb3BlcnRpZXMgPSB4LnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGV4cGFuZCBhbGlhcyB3aXRoIG5lc3RlZCBvYmplY3RzIGluIGtleVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0gW10uY29uY2F0KHNwbGl0S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgYS5zaGlmdCgpOyAvLyBudWtlIHRoZSBvbGQga2V5LlxuICAgICAgICAgICAgICAgICAgICBrZXlQcm9wZXJ0aWVzID0ga2V5UHJvcGVydGllcy5jb25jYXQoYSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBvcHVsYXRlIGFsaWFzIG9ubHkgaWYgaXMgbm90IGFscmVhZHkgYW4gYWxpYXMgb2YgdGhlIGZ1bGwga2V5XG4gICAgICAgICAgICAgICAgICAgIC8vIChhbHJlYWR5IHBvcHVsYXRlZCBhYm92ZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmxhZ3MuYWxpYXNlc1trZXldIHx8IFtdKS5pbmNsdWRlcyhrZXlQcm9wZXJ0aWVzLmpvaW4oJy4nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShhcmd2LCBrZXlQcm9wZXJ0aWVzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBub3JtYWxpemUgZ2V0dGVyIGFuZCBzZXR0ZXIgd2hlbiBrZXkgaXMgaW4gJ25vcm1hbGl6ZScgYnV0IGlzbid0IGFuIGFycmF5XG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3Mubm9ybWFsaXplKSAmJiAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBba2V5XS5jb25jYXQoZmxhZ3MuYWxpYXNlc1trZXldIHx8IFtdKTtcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXJndlJldHVybiwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IG1peGluLm5vcm1hbGl6ZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkTmV3QWxpYXMoa2V5LCBhbGlhcykge1xuICAgICAgICAgICAgaWYgKCEoZmxhZ3MuYWxpYXNlc1trZXldICYmIGZsYWdzLmFsaWFzZXNba2V5XS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldID0gW2FsaWFzXTtcbiAgICAgICAgICAgICAgICBuZXdBbGlhc2VzW2FsaWFzXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShmbGFncy5hbGlhc2VzW2FsaWFzXSAmJiBmbGFncy5hbGlhc2VzW2FsaWFzXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgYWRkTmV3QWxpYXMoYWxpYXMsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc1ZhbHVlKGtleSwgdmFsLCBzaG91bGRTdHJpcFF1b3Rlcykge1xuICAgICAgICAgICAgLy8gc3RyaW5ncyBtYXkgYmUgcXVvdGVkLCBjbGVhbiB0aGlzIHVwIGFzIHdlIGFzc2lnbiB2YWx1ZXMuXG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RyaXBRdW90ZXMpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBzdHJpcFF1b3Rlcyh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIHBhcnNpbmcgYm9vbGVhbiBhcmd1bWVudHMgLS1mb289dHJ1ZSAtLWJhciBmYWxzZS5cbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgfHwgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsID09PSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbClcbiAgICAgICAgICAgICAgICA/IHZhbC5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG1heWJlQ29lcmNlTnVtYmVyKGtleSwgdik7IH0pXG4gICAgICAgICAgICAgICAgOiBtYXliZUNvZXJjZU51bWJlcihrZXksIHZhbCk7XG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgYSBjb3VudCBnaXZlbiBhcyBhcmcgKGVpdGhlciBubyB2YWx1ZSBvciB2YWx1ZSBwYXJzZWQgYXMgYm9vbGVhbilcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpICYmIChpc1VuZGVmaW5lZCh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBpbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBub3JtYWxpemVkIHZhbHVlIHdoZW4ga2V5IGlzIGluICdub3JtYWxpemUnIGFuZCBpbiAnYXJyYXlzJ1xuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5vcm1hbGl6ZSkgJiYgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsLm1hcCgodmFsKSA9PiB7IHJldHVybiBtaXhpbi5ub3JtYWxpemUodmFsKTsgfSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1peGluLm5vcm1hbGl6ZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1heWJlQ29lcmNlTnVtYmVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvblsncGFyc2UtcG9zaXRpb25hbC1udW1iZXJzJ10gJiYga2V5ID09PSAnXycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgaWYgKCFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5zdHJpbmdzKSAmJiAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZENvZXJjZU51bWJlciA9IGxvb2tzTGlrZU51bWJlcih2YWx1ZSkgJiYgY29uZmlndXJhdGlvblsncGFyc2UtbnVtYmVycyddICYmIChOdW1iZXIuaXNTYWZlSW50ZWdlcihNYXRoLmZsb29yKHBhcnNlRmxvYXQoYCR7dmFsdWV9YCkpKSk7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZENvZXJjZU51bWJlciB8fCAoIWlzVW5kZWZpbmVkKHZhbHVlKSAmJiBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5udW1iZXJzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgYXJncyBmcm9tIGNvbmZpZy5qc29uIGZpbGUsIHRoaXMgc2hvdWxkIGJlXG4gICAgICAgIC8vIGFwcGxpZWQgbGFzdCBzbyB0aGF0IGRlZmF1bHRzIGNhbiBiZSBhcHBsaWVkLlxuICAgICAgICBmdW5jdGlvbiBzZXRDb25maWcoYXJndikge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnTG9va3VwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIC8vIGV4cGFuZCBkZWZhdWx0cy9hbGlhc2VzLCBpbi1jYXNlIGFueSBoYXBwZW4gdG8gcmVmZXJlbmNlXG4gICAgICAgICAgICAvLyB0aGUgY29uZmlnLmpzb24gZmlsZS5cbiAgICAgICAgICAgIGFwcGx5RGVmYXVsdHNBbmRBbGlhc2VzKGNvbmZpZ0xvb2t1cCwgZmxhZ3MuYWxpYXNlcywgZGVmYXVsdHMpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZmxhZ3MuY29uZmlncykuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnUGF0aCA9IGFyZ3ZbY29uZmlnS2V5XSB8fCBjb25maWdMb29rdXBbY29uZmlnS2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZENvbmZpZ1BhdGggPSBtaXhpbi5yZXNvbHZlKG1peGluLmN3ZCgpLCBjb25maWdQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVDb25maWcgPSBmbGFncy5jb25maWdzW2NvbmZpZ0tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc29sdmVDb25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSByZXNvbHZlQ29uZmlnKHJlc29sdmVkQ29uZmlnUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IG1peGluLnJlcXVpcmUocmVzb2x2ZWRDb25maWdQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpZ09iamVjdChjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVubyB3aWxsIHJlY2VpdmUgYSBQZXJtaXNzaW9uRGVuaWVkIGVycm9yIGlmIGFuIGF0dGVtcHQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hZGUgdG8gbG9hZCBjb25maWcgd2l0aG91dCB0aGUgLS1hbGxvdy1yZWFkIGZsYWc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXgubmFtZSA9PT0gJ1Blcm1pc3Npb25EZW5pZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmd2W2NvbmZpZ0tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnSW52YWxpZCBKU09OIGNvbmZpZyBmaWxlOiAlcycsIGNvbmZpZ1BhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBhcmdzIGZyb20gY29uZmlnIG9iamVjdC5cbiAgICAgICAgLy8gaXQgcmVjdXJzaXZlbHkgY2hlY2tzIG5lc3RlZCBvYmplY3RzLlxuICAgICAgICBmdW5jdGlvbiBzZXRDb25maWdPYmplY3QoY29uZmlnLCBwcmV2KSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgZnVsbEtleSA9IHByZXYgPyBwcmV2ICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBhbiBpbm5lciBvYmplY3QgYW5kIHdlIGhhdmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgLy8gZW5hYmxlZCwgdHJlYXQgaW5uZXIgb2JqZWN0cyBpbiBjb25maWcgdGhlIHNhbWUgYXNcbiAgICAgICAgICAgICAgICAvLyBoZWF2aWx5IG5lc3RlZCBkb3Qgbm90YXRpb25zIChmb28uYmFyLmFwcGxlKS5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBidXQgbm90IGFuIGFycmF5LCBjaGVjayBuZXN0ZWQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpZ09iamVjdCh2YWx1ZSwgZnVsbEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nIGFyZ3VtZW50cyB2aWEgQ0xJIHRha2VzIHByZWNlZGVuY2Ugb3ZlclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZXMgd2l0aGluIHRoZSBjb25maWcgZmlsZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNLZXkoYXJndiwgZnVsbEtleS5zcGxpdCgnLicpKSB8fCAoY2hlY2tBbGxBbGlhc2VzKGZ1bGxLZXksIGZsYWdzLmFycmF5cykgJiYgY29uZmlndXJhdGlvblsnY29tYmluZS1hcnJheXMnXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhmdWxsS2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgYWxsIGNvbmZpZyBvYmplY3RzIHBhc3NlZCBpbiBvcHRzXG4gICAgICAgIGZ1bmN0aW9uIHNldENvbmZpZ09iamVjdHMoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ09iamVjdHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnT2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWdPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlnT2JqZWN0KGNvbmZpZ09iamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlFbnZWYXJzKGFyZ3YsIGNvbmZpZ09ubHkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW52UHJlZml4ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSB0eXBlb2YgZW52UHJlZml4ID09PSAnc3RyaW5nJyA/IGVudlByZWZpeCA6ICcnO1xuICAgICAgICAgICAgY29uc3QgZW52ID0gbWl4aW4uZW52KCk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goZnVuY3Rpb24gKGVudlZhcikge1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggPT09ICcnIHx8IGVudlZhci5sYXN0SW5kZXhPZihwcmVmaXgsIDApID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCBhcnJheSBvZiBuZXN0ZWQga2V5cyBhbmQgY29udmVydCB0aGVtIHRvIGNhbWVsIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IGVudlZhci5zcGxpdCgnX18nKS5tYXAoZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbWVsQ2FzZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoY29uZmlnT25seSAmJiBmbGFncy5jb25maWdzW2tleXMuam9pbignLicpXSkgfHwgIWNvbmZpZ09ubHkpICYmICFoYXNLZXkoYXJndiwga2V5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXlzLmpvaW4oJy4nKSwgZW52W2VudlZhcl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlDb2VyY2lvbnMoYXJndikge1xuICAgICAgICAgICAgbGV0IGNvZXJjZTtcbiAgICAgICAgICAgIGNvbnN0IGFwcGxpZWQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFwcGxpZWQuaGFzKGtleSkpIHsgLy8gSWYgd2UgaGF2ZW4ndCBhbHJlYWR5IGNvZXJjZWQgdGhpcyBvcHRpb24gdmlhIG9uZSBvZiBpdHMgYWxpYXNlc1xuICAgICAgICAgICAgICAgICAgICBjb2VyY2UgPSBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb2VyY2lvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvZXJjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1heWJlQ29lcmNlTnVtYmVyKGtleSwgY29lcmNlKGFyZ3Zba2V5XSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChbXS5jb25jYXQoZmxhZ3MuYWxpYXNlc1trZXldIHx8IFtdLCBrZXkpKS5mb3JFYWNoKGFsaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWQuYWRkKGFsaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3ZbYWxpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0UGxhY2Vob2xkZXJLZXlzKGFyZ3YpIHtcbiAgICAgICAgICAgIGZsYWdzLmtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZG9uJ3Qgc2V0IHBsYWNlaG9sZGVyIGtleXMgZm9yIGRvdCBub3RhdGlvbiBvcHRpb25zICdmb28uYmFyJy5cbiAgICAgICAgICAgICAgICBpZiAofmtleS5pbmRleE9mKCcuJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3Zba2V5XSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgIGFyZ3Zba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlEZWZhdWx0c0FuZEFsaWFzZXMob2JqLCBhbGlhc2VzLCBkZWZhdWx0cywgY2FuTG9nID0gZmFsc2UpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0tleShvYmosIGtleS5zcGxpdCgnLicpKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRLZXkob2JqLCBrZXkuc3BsaXQoJy4nKSwgZGVmYXVsdHNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5Mb2cpXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0ZWRba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIChhbGlhc2VzW2tleV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNLZXkob2JqLCB4LnNwbGl0KCcuJykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShvYmosIHguc3BsaXQoJy4nKSwgZGVmYXVsdHNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhc0tleShvYmosIGtleXMpIHtcbiAgICAgICAgICAgIGxldCBvID0gb2JqO1xuICAgICAgICAgICAgaWYgKCFjb25maWd1cmF0aW9uWydkb3Qtbm90YXRpb24nXSlcbiAgICAgICAgICAgICAgICBrZXlzID0gW2tleXMuam9pbignLicpXTtcbiAgICAgICAgICAgIGtleXMuc2xpY2UoMCwgLTEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIG8gPSAob1trZXldIHx8IHt9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5c1trZXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvICE9PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleSBpbiBvO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldEtleShvYmosIGtleXMsIHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbyA9IG9iajtcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pXG4gICAgICAgICAgICAgICAga2V5cyA9IFtrZXlzLmpvaW4oJy4nKV07XG4gICAgICAgICAgICBrZXlzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGJjb2UpOiBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIHlhcmdzLCBzd2l0Y2ggdG9cbiAgICAgICAgICAgICAgICAvLyBPYmplY3QuY3JlYXRlKG51bGwpIGZvciBkb3Qgbm90YXRpb246XG4gICAgICAgICAgICAgICAga2V5ID0gc2FuaXRpemVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG9ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ba2V5XSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGF0IG9ba2V5XSBpcyBhbiBhcnJheSwgYW5kIHRoYXQgdGhlIGxhc3QgaXRlbSBpcyBhbiBlbXB0eSBvYmplY3QuXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ba2V5XS5wdXNoKHt9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IFtvW2tleV0sIHt9XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3YW50IHRvIHVwZGF0ZSB0aGUgZW1wdHkgb2JqZWN0IGF0IHRoZSBlbmQgb2YgdGhlIG9ba2V5XSBhcnJheSwgc28gc2V0IG8gdG8gdGhhdCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgbyA9IG9ba2V5XVtvW2tleV0ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvID0gb1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVE9ETyhiY29lKTogaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiB5YXJncywgc3dpdGNoIHRvXG4gICAgICAgICAgICAvLyBPYmplY3QuY3JlYXRlKG51bGwpIGZvciBkb3Qgbm90YXRpb246XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBzYW5pdGl6ZUtleShrZXlzW2tleXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgY29uc3QgaXNUeXBlQXJyYXkgPSBjaGVja0FsbEFsaWFzZXMoa2V5cy5qb2luKCcuJyksIGZsYWdzLmFycmF5cyk7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbHVlQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICAgICAgICAgIGxldCBkdXBsaWNhdGUgPSBjb25maWd1cmF0aW9uWydkdXBsaWNhdGUtYXJndW1lbnRzLWFycmF5J107XG4gICAgICAgICAgICAvLyBuYXJncyBoYXMgaGlnaGVyIHByaW9yaXR5IHRoYW4gZHVwbGljYXRlXG4gICAgICAgICAgICBpZiAoIWR1cGxpY2F0ZSAmJiBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncykpIHtcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICgoIWlzVW5kZWZpbmVkKG9ba2V5XSkgJiYgZmxhZ3MubmFyZ3Nba2V5XSA9PT0gMSkgfHwgKEFycmF5LmlzQXJyYXkob1trZXldKSAmJiBvW2tleV0ubGVuZ3RoID09PSBmbGFncy5uYXJnc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBpbmNyZW1lbnQoKSkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IGluY3JlbWVudChvW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGR1cGxpY2F0ZSAmJiBpc1R5cGVBcnJheSAmJiBpc1ZhbHVlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gY29uZmlndXJhdGlvblsnZmxhdHRlbi1kdXBsaWNhdGUtYXJyYXlzJ10gPyBvW2tleV0uY29uY2F0KHZhbHVlKSA6IChBcnJheS5pc0FycmF5KG9ba2V5XVswXSkgPyBvW2tleV0gOiBbb1trZXldXSkuY29uY2F0KFt2YWx1ZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghZHVwbGljYXRlICYmIEJvb2xlYW4oaXNUeXBlQXJyYXkpID09PSBCb29sZWFuKGlzVmFsdWVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSBvW2tleV0uY29uY2F0KFt2YWx1ZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9ba2V5XSA9PT0gdW5kZWZpbmVkICYmIGlzVHlwZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgb1trZXldID0gaXNWYWx1ZUFycmF5ID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZHVwbGljYXRlICYmICEob1trZXldID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpIHx8XG4gICAgICAgICAgICAgICAgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpKSkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IFtvW2tleV0sIHZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGV4dGVuZCB0aGUgYWxpYXNlcyBsaXN0IHdpdGggaW5mZXJyZWQgYWxpYXNlcy5cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kQWxpYXNlcyguLi5hcmdzKSB7XG4gICAgICAgICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iaiB8fCB7fSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3J0LWNpcmN1aXQgaWYgd2UndmUgYWxyZWFkeSBhZGRlZCBhIGtleVxuICAgICAgICAgICAgICAgICAgICAvLyB0byB0aGUgYWxpYXNlcyBhcnJheSwgZm9yIGV4YW1wbGUgaXQgbWlnaHRcbiAgICAgICAgICAgICAgICAgICAgLy8gZXhpc3QgaW4gYm90aCAnb3B0cy5kZWZhdWx0JyBhbmQgJ29wdHMua2V5Jy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWdzLmFsaWFzZXNba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldID0gW10uY29uY2F0KGFsaWFzZXNba2V5XSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBcIi0tb3B0aW9uLW5hbWVcIiwgYWxzbyBzZXQgYXJndi5vcHRpb25OYW1lXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5jb25jYXQoa2V5KS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLy0vLnRlc3QoeCkgJiYgY29uZmlndXJhdGlvblsnY2FtZWwtY2FzZS1leHBhbnNpb24nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBjYW1lbENhc2UoeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IGtleSAmJiBmbGFncy5hbGlhc2VzW2tleV0uaW5kZXhPZihjKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FsaWFzZXNbY10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBcIi0tb3B0aW9uTmFtZVwiLCBhbHNvIHNldCBhcmd2WydvcHRpb24tbmFtZSddXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5jb25jYXQoa2V5KS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeC5sZW5ndGggPiAxICYmIC9bQS1aXS8udGVzdCh4KSAmJiBjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IGRlY2FtZWxpemUoeCwgJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyAhPT0ga2V5ICYmIGZsYWdzLmFsaWFzZXNba2V5XS5pbmRleE9mKGMpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0ucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QWxpYXNlc1tjXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNbeF0gPSBba2V5XS5jb25jYXQoZmxhZ3MuYWxpYXNlc1trZXldLmZpbHRlcihmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4ICE9PSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvQ2hlY2sgPSBbXS5jb25jYXQoZmxhZ3MuYWxpYXNlc1trZXldIHx8IFtdLCBrZXkpO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZsYWcpO1xuICAgICAgICAgICAgY29uc3Qgc2V0QWxpYXMgPSB0b0NoZWNrLmZpbmQoa2V5ID0+IGtleXMuaW5jbHVkZXMoa2V5KSk7XG4gICAgICAgICAgICByZXR1cm4gc2V0QWxpYXMgPyBmbGFnW3NldEFsaWFzXSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhc0FueUZsYWcoa2V5KSB7XG4gICAgICAgICAgICBjb25zdCBmbGFnc0tleXMgPSBPYmplY3Qua2V5cyhmbGFncyk7XG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gW10uY29uY2F0KGZsYWdzS2V5cy5tYXAoayA9PiBmbGFnc1trXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRvQ2hlY2suc29tZShmdW5jdGlvbiAoZmxhZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGZsYWcpID8gZmxhZy5pbmNsdWRlcyhrZXkpIDogZmxhZ1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFzRmxhZ3NNYXRjaGluZyhhcmcsIC4uLnBhdHRlcm5zKSB7XG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gW10uY29uY2F0KC4uLnBhdHRlcm5zKTtcbiAgICAgICAgICAgIHJldHVybiB0b0NoZWNrLnNvbWUoZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGFyZy5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggJiYgaGFzQW55RmxhZyhtYXRjaFsxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYXNlZCBvbiBhIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiB0aGUgc2hvcnQgZmxhZyBncm91cCBwYXJzaW5nIGxvZ2ljXG4gICAgICAgIGZ1bmN0aW9uIGhhc0FsbFNob3J0RmxhZ3MoYXJnKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbmVnYXRpdmUgbnVtYmVyLCBvciBkb2Vzbid0IHN0YXJ0IHdpdGggYSBzaW5nbGUgaHlwaGVuLCBpdCdzIG5vdCBhIHNob3J0IGZsYWcgZ3JvdXBcbiAgICAgICAgICAgIGlmIChhcmcubWF0Y2gobmVnYXRpdmUpIHx8ICFhcmcubWF0Y2goL14tW14tXSsvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBoYXNBbGxGbGFncyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbmV4dDtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlcnMgPSBhcmcuc2xpY2UoMSkuc3BsaXQoJycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZXR0ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IGFyZy5zbGljZShqICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNBbnlGbGFnKGxldHRlcnNbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0FsbEZsYWdzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKGxldHRlcnNbaiArIDFdICYmIGxldHRlcnNbaiArIDFdID09PSAnPScpIHx8XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPT09ICctJyB8fFxuICAgICAgICAgICAgICAgICAgICAoL1tBLVphLXpdLy50ZXN0KGxldHRlcnNbal0pICYmIC9eLT9cXGQrKFxcLlxcZCopPyhlLT9cXGQrKT8kLy50ZXN0KG5leHQpKSB8fFxuICAgICAgICAgICAgICAgICAgICAobGV0dGVyc1tqICsgMV0gJiYgbGV0dGVyc1tqICsgMV0ubWF0Y2goL1xcVy8pKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzQWxsRmxhZ3M7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNVbmtub3duT3B0aW9uQXNBcmcoYXJnKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlndXJhdGlvblsndW5rbm93bi1vcHRpb25zLWFzLWFyZ3MnXSAmJiBpc1Vua25vd25PcHRpb24oYXJnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1Vua25vd25PcHRpb24oYXJnKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcucmVwbGFjZSgvXi17Myx9LywgJy0tJyk7XG4gICAgICAgICAgICAvLyBpZ25vcmUgbmVnYXRpdmUgbnVtYmVyc1xuICAgICAgICAgICAgaWYgKGFyZy5tYXRjaChuZWdhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgc2hvcnQgb3B0aW9uIGdyb3VwIGFuZCBhbGwgb2YgdGhlbSBhcmUgY29uZmlndXJlZCwgaXQgaXNuJ3QgdW5rbm93blxuICAgICAgICAgICAgaWYgKGhhc0FsbFNob3J0RmxhZ3MoYXJnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGUuZy4gJy0tY291bnQ9MidcbiAgICAgICAgICAgIGNvbnN0IGZsYWdXaXRoRXF1YWxzID0gL14tKyhbXj1dKz8pPVtcXHNcXFNdKiQvO1xuICAgICAgICAgICAgLy8gZS5nLiAnLWEnIG9yICctLWFyZydcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbEZsYWcgPSAvXi0rKFtePV0rPykkLztcbiAgICAgICAgICAgIC8vIGUuZy4gJy1hLSdcbiAgICAgICAgICAgIGNvbnN0IGZsYWdFbmRpbmdJbkh5cGhlbiA9IC9eLSsoW149XSs/KS0kLztcbiAgICAgICAgICAgIC8vIGUuZy4gJy1hYmMxMjMnXG4gICAgICAgICAgICBjb25zdCBmbGFnRW5kaW5nSW5EaWdpdHMgPSAvXi0rKFtePV0rP1xcZCspJC87XG4gICAgICAgICAgICAvLyBlLmcuICctYS91c3IvbG9jYWwnXG4gICAgICAgICAgICBjb25zdCBmbGFnRW5kaW5nSW5Ob25Xb3JkQ2hhcmFjdGVycyA9IC9eLSsoW149XSs/KVxcVysuKiQvO1xuICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBmbGFnIHN0eWxlcywgaW5jbHVkaW5nIG5lZ2F0ZWRCb29sZWFuLCBhIHBhdHRlcm4gZGVmaW5lZCBuZWFyIHRoZSBzdGFydCBvZiB0aGUgcGFyc2UgbWV0aG9kXG4gICAgICAgICAgICByZXR1cm4gIWhhc0ZsYWdzTWF0Y2hpbmcoYXJnLCBmbGFnV2l0aEVxdWFscywgbmVnYXRlZEJvb2xlYW4sIG5vcm1hbEZsYWcsIGZsYWdFbmRpbmdJbkh5cGhlbiwgZmxhZ0VuZGluZ0luRGlnaXRzLCBmbGFnRW5kaW5nSW5Ob25Xb3JkQ2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFrZSBhIGJlc3QgZWZmb3J0IHRvIHBpY2sgYSBkZWZhdWx0IHZhbHVlXG4gICAgICAgIC8vIGZvciBhbiBvcHRpb24gYmFzZWQgb24gbmFtZSBhbmQgdHlwZS5cbiAgICAgICAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKGtleSkge1xuICAgICAgICAgICAgaWYgKCFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiZcbiAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSAmJlxuICAgICAgICAgICAgICAgIGAke2tleX1gIGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdEZvclR5cGUoZ3Vlc3NUeXBlKGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBhIGRlZmF1bHQgdmFsdWUsIGdpdmVuIHRoZSB0eXBlIG9mIGEgZmxhZy4sXG4gICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRGb3JUeXBlKHR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgICAgICAgICBbRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQk9PTEVBTl06IHRydWUsXG4gICAgICAgICAgICAgICAgW0RlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LlNUUklOR106ICcnLFxuICAgICAgICAgICAgICAgIFtEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5OVU1CRVJdOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgW0RlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LkFSUkFZXTogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZGVmW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdpdmVuIGEgZmxhZywgZW5mb3JjZSBhIGRlZmF1bHQgdHlwZS5cbiAgICAgICAgZnVuY3Rpb24gZ3Vlc3NUeXBlKGtleSkge1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5CT09MRUFOO1xuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLnN0cmluZ3MpKVxuICAgICAgICAgICAgICAgIHR5cGUgPSBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5TVFJJTkc7XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5udW1iZXJzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuTlVNQkVSO1xuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpKVxuICAgICAgICAgICAgICAgIHR5cGUgPSBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5CT09MRUFOO1xuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQVJSQVk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1VuZGVmaW5lZChudW0pIHtcbiAgICAgICAgICAgIHJldHVybiBudW0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayB1c2VyIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIGluY29uc2lzdGVuY2llc1xuICAgICAgICBmdW5jdGlvbiBjaGVja0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgICAgICAvLyBjb3VudCBrZXlzIHNob3VsZCBub3QgYmUgc2V0IGFzIGFycmF5L25hcmdcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZsYWdzLmNvdW50cykuZmluZChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5hcnJheXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ0ludmFsaWQgY29uZmlndXJhdGlvbjogJXMsIG9wdHMuY291bnQgZXhjbHVkZXMgb3B0cy5hcnJheS4nLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdJbnZhbGlkIGNvbmZpZ3VyYXRpb246ICVzLCBvcHRzLmNvdW50IGV4Y2x1ZGVzIG9wdHMubmFyZy4nLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbGlhc2VzOiBPYmplY3QuYXNzaWduKHt9LCBmbGFncy5hbGlhc2VzKSxcbiAgICAgICAgICAgIGFyZ3Y6IE9iamVjdC5hc3NpZ24oYXJndlJldHVybiwgYXJndiksXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdGVkOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0ZWQpLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgbmV3QWxpYXNlczogT2JqZWN0LmFzc2lnbih7fSwgbmV3QWxpYXNlcylcbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyBpZiBhbnkgYWxpYXNlcyByZWZlcmVuY2UgZWFjaCBvdGhlciwgd2Ugc2hvdWxkXG4vLyBtZXJnZSB0aGVtIHRvZ2V0aGVyLlxuZnVuY3Rpb24gY29tYmluZUFsaWFzZXMoYWxpYXNlcykge1xuICAgIGNvbnN0IGFsaWFzQXJyYXlzID0gW107XG4gICAgY29uc3QgY29tYmluZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGxldCBjaGFuZ2UgPSB0cnVlO1xuICAgIC8vIHR1cm4gYWxpYXMgbG9va3VwIGhhc2gge2tleTogWydhbGlhczEnLCAnYWxpYXMyJ119IGludG9cbiAgICAvLyBhIHNpbXBsZSBhcnJheSBbJ2tleScsICdhbGlhczEnLCAnYWxpYXMyJ11cbiAgICBPYmplY3Qua2V5cyhhbGlhc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgYWxpYXNBcnJheXMucHVzaChbXS5jb25jYXQoYWxpYXNlc1trZXldLCBrZXkpKTtcbiAgICB9KTtcbiAgICAvLyBjb21iaW5lIGFycmF5cyB1bnRpbCB6ZXJvIGNoYW5nZXMgYXJlXG4gICAgLy8gbWFkZSBpbiBhbiBpdGVyYXRpb24uXG4gICAgd2hpbGUgKGNoYW5nZSkge1xuICAgICAgICBjaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGlhc0FycmF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaWkgPSBpICsgMTsgaWkgPCBhbGlhc0FycmF5cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlcnNlY3QgPSBhbGlhc0FycmF5c1tpXS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsaWFzQXJyYXlzW2lpXS5pbmRleE9mKHYpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhc0FycmF5c1tpXSA9IGFsaWFzQXJyYXlzW2ldLmNvbmNhdChhbGlhc0FycmF5c1tpaV0pO1xuICAgICAgICAgICAgICAgICAgICBhbGlhc0FycmF5cy5zcGxpY2UoaWksIDEpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gbWFwIGFycmF5cyBiYWNrIHRvIHRoZSBoYXNoLWxvb2t1cCAoZGUtZHVwZSB3aGlsZVxuICAgIC8vIHdlJ3JlIGF0IGl0KS5cbiAgICBhbGlhc0FycmF5cy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhc0FycmF5KSB7XG4gICAgICAgIGFsaWFzQXJyYXkgPSBhbGlhc0FycmF5LmZpbHRlcihmdW5jdGlvbiAodiwgaSwgc2VsZikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2KSA9PT0gaTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGxhc3RBbGlhcyA9IGFsaWFzQXJyYXkucG9wKCk7XG4gICAgICAgIGlmIChsYXN0QWxpYXMgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbGFzdEFsaWFzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29tYmluZWRbbGFzdEFsaWFzXSA9IGFsaWFzQXJyYXk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29tYmluZWQ7XG59XG4vLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuIGEgY291bnQgaXMgZ2l2ZW4gYXMgYW4gYXJnXG4vLyBpdCBpcyBOT1QgY2FsbGVkIHRvIHNldCBhIGRlZmF1bHQgdmFsdWVcbi8vIHRodXMgd2UgY2FuIHN0YXJ0IHRoZSBjb3VudCBhdCAxIGluc3RlYWQgb2YgMFxuZnVuY3Rpb24gaW5jcmVtZW50KG9yaWcpIHtcbiAgICByZXR1cm4gb3JpZyAhPT0gdW5kZWZpbmVkID8gb3JpZyArIDEgOiAxO1xufVxuLy8gVE9ETyhiY29lKTogaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiB5YXJncywgc3dpdGNoIHRvXG4vLyBPYmplY3QuY3JlYXRlKG51bGwpIGZvciBkb3Qgbm90YXRpb246XG5mdW5jdGlvbiBzYW5pdGl6ZUtleShrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJylcbiAgICAgICAgcmV0dXJuICdfX19wcm90b19fXyc7XG4gICAgcmV0dXJuIGtleTtcbn1cbmZ1bmN0aW9uIHN0cmlwUXVvdGVzKHZhbCkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgKHZhbFswXSA9PT0gXCInXCIgfHwgdmFsWzBdID09PSAnXCInKSAmJlxuICAgICAgICB2YWxbdmFsLmxlbmd0aCAtIDFdID09PSB2YWxbMF0pXG4gICAgICAgID8gdmFsLnN1YnN0cmluZygxLCB2YWwubGVuZ3RoIC0gMSlcbiAgICAgICAgOiB2YWw7XG59XG4iLCAiZnVuY3Rpb24gZ2V0UHJvY2Vzc0FyZ3ZCaW5JbmRleCgpIHtcbiAgICBpZiAoaXNCdW5kbGVkRWxlY3Ryb25BcHAoKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIDE7XG59XG5mdW5jdGlvbiBpc0J1bmRsZWRFbGVjdHJvbkFwcCgpIHtcbiAgICByZXR1cm4gaXNFbGVjdHJvbkFwcCgpICYmICFwcm9jZXNzLmRlZmF1bHRBcHA7XG59XG5mdW5jdGlvbiBpc0VsZWN0cm9uQXBwKCkge1xuICAgIHJldHVybiAhIXByb2Nlc3MudmVyc2lvbnMuZWxlY3Ryb247XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUJpbihhcmd2KSB7XG4gICAgcmV0dXJuIGFyZ3Yuc2xpY2UoZ2V0UHJvY2Vzc0FyZ3ZCaW5JbmRleCgpICsgMSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvY2Vzc0FyZ3ZCaW4oKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuYXJndltnZXRQcm9jZXNzQXJndkJpbkluZGV4KCldO1xufVxuIiwgImltcG9ydCB7IHJlYWRGaWxlU3luYywgc3RhdFN5bmMsIHdyaXRlRmlsZSB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZzOiB7XG4gICAgICAgIHJlYWRGaWxlU3luYyxcbiAgICAgICAgd3JpdGVGaWxlXG4gICAgfSxcbiAgICBmb3JtYXQsXG4gICAgcmVzb2x2ZSxcbiAgICBleGlzdHM6IChmaWxlKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdFN5bmMoZmlsZSkuaXNGaWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsICJsZXQgc2hpbTtcbmNsYXNzIFkxOE4ge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgLy8gY29uZmlndXJhYmxlIG9wdGlvbnMuXG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICB0aGlzLmRpcmVjdG9yeSA9IG9wdHMuZGlyZWN0b3J5IHx8ICcuL2xvY2FsZXMnO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGVzID0gdHlwZW9mIG9wdHMudXBkYXRlRmlsZXMgPT09ICdib29sZWFuJyA/IG9wdHMudXBkYXRlRmlsZXMgOiB0cnVlO1xuICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdHMubG9jYWxlIHx8ICdlbic7XG4gICAgICAgIHRoaXMuZmFsbGJhY2tUb0xhbmd1YWdlID0gdHlwZW9mIG9wdHMuZmFsbGJhY2tUb0xhbmd1YWdlID09PSAnYm9vbGVhbicgPyBvcHRzLmZhbGxiYWNrVG9MYW5ndWFnZSA6IHRydWU7XG4gICAgICAgIC8vIGludGVybmFsIHN0dWZmLlxuICAgICAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy53cml0ZVF1ZXVlID0gW107XG4gICAgfVxuICAgIF9fKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFnZ2VkTGl0ZXJhbChhcmd1bWVudHNbMF0sIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBsZXQgY2IgPSBmdW5jdGlvbiAoKSB7IH07IC8vIHN0YXJ0IHdpdGggbm9vcC5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYiA9IGFyZ3MucG9wKCk7XG4gICAgICAgIGNiID0gY2IgfHwgZnVuY3Rpb24gKCkgeyB9OyAvLyBub29wLlxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdKVxuICAgICAgICAgICAgdGhpcy5fcmVhZExvY2FsZUZpbGUoKTtcbiAgICAgICAgLy8gd2UndmUgb2JzZXJ2ZWQgYSBuZXcgc3RyaW5nLCB1cGRhdGUgdGhlIGxhbmd1YWdlIGZpbGUuXG4gICAgICAgIGlmICghdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc3RyXSAmJiB0aGlzLnVwZGF0ZUZpbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzdHJdID0gc3RyO1xuICAgICAgICAgICAgLy8gaW5jbHVkZSB0aGUgY3VycmVudCBkaXJlY3RvcnkgYW5kIGxvY2FsZSxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZXNlIHZhbHVlcyBjb3VsZCBjaGFuZ2UgYmVmb3JlIHRoZVxuICAgICAgICAgICAgLy8gd3JpdGUgaXMgcGVyZm9ybWVkLlxuICAgICAgICAgICAgdGhpcy5fZW5xdWV1ZVdyaXRlKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6IHRoaXMuZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgY2JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpbS5mb3JtYXQuYXBwbHkoc2hpbS5mb3JtYXQsIFt0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzdHJdIHx8IHN0cl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgX19uKCkge1xuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgY29uc3Qgc2luZ3VsYXIgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IHBsdXJhbCA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGxldCBjYiA9IGZ1bmN0aW9uICgpIHsgfTsgLy8gc3RhcnQgd2l0aCBub29wLlxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNiID0gYXJncy5wb3AoKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXSlcbiAgICAgICAgICAgIHRoaXMuX3JlYWRMb2NhbGVGaWxlKCk7XG4gICAgICAgIGxldCBzdHIgPSBxdWFudGl0eSA9PT0gMSA/IHNpbmd1bGFyIDogcGx1cmFsO1xuICAgICAgICBpZiAodGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc2luZ3VsYXJdKSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW3Npbmd1bGFyXTtcbiAgICAgICAgICAgIHN0ciA9IGVudHJ5W3F1YW50aXR5ID09PSAxID8gJ29uZScgOiAnb3RoZXInXTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSd2ZSBvYnNlcnZlZCBhIG5ldyBzdHJpbmcsIHVwZGF0ZSB0aGUgbGFuZ3VhZ2UgZmlsZS5cbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzaW5ndWxhcl0gJiYgdGhpcy51cGRhdGVGaWxlcykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc2luZ3VsYXJdID0ge1xuICAgICAgICAgICAgICAgIG9uZTogc2luZ3VsYXIsXG4gICAgICAgICAgICAgICAgb3RoZXI6IHBsdXJhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgdGhlIGN1cnJlbnQgZGlyZWN0b3J5IGFuZCBsb2NhbGUsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVzZSB2YWx1ZXMgY291bGQgY2hhbmdlIGJlZm9yZSB0aGVcbiAgICAgICAgICAgIC8vIHdyaXRlIGlzIHBlcmZvcm1lZC5cbiAgICAgICAgICAgIHRoaXMuX2VucXVldWVXcml0ZSh7XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5OiB0aGlzLmRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGNiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgYSAlZCBwbGFjZWhvbGRlciBpcyBwcm92aWRlZCwgYWRkIHF1YW50aXR5XG4gICAgICAgIC8vIHRvIHRoZSBhcmd1bWVudHMgZXhwYW5kZWQgYnkgdXRpbC5mb3JtYXQuXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtzdHJdO1xuICAgICAgICBpZiAofnN0ci5pbmRleE9mKCclZCcpKVxuICAgICAgICAgICAgdmFsdWVzLnB1c2gocXVhbnRpdHkpO1xuICAgICAgICByZXR1cm4gc2hpbS5mb3JtYXQuYXBwbHkoc2hpbS5mb3JtYXQsIHZhbHVlcy5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgIH1cbiAgICBnZXRMb2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZTtcbiAgICB9XG4gICAgdXBkYXRlTG9jYWxlKG9iaikge1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdKVxuICAgICAgICAgICAgdGhpcy5fcmVhZExvY2FsZUZpbGUoKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfdGFnZ2VkTGl0ZXJhbChwYXJ0cywgLi4uYXJncykge1xuICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaSArIDFdO1xuICAgICAgICAgICAgc3RyICs9IHBhcnQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gJyVzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fLmFwcGx5KHRoaXMsIFtzdHJdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MsIDEpKSk7XG4gICAgfVxuICAgIF9lbnF1ZXVlV3JpdGUod29yaykge1xuICAgICAgICB0aGlzLndyaXRlUXVldWUucHVzaCh3b3JrKTtcbiAgICAgICAgaWYgKHRoaXMud3JpdGVRdWV1ZS5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzV3JpdGVRdWV1ZSgpO1xuICAgIH1cbiAgICBfcHJvY2Vzc1dyaXRlUXVldWUoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgd29yayA9IHRoaXMud3JpdGVRdWV1ZVswXTtcbiAgICAgICAgLy8gZGVzdHJ1Y3R1cmUgdGhlIGVucXVldWVkIHdvcmsuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IHdvcmsuZGlyZWN0b3J5O1xuICAgICAgICBjb25zdCBsb2NhbGUgPSB3b3JrLmxvY2FsZTtcbiAgICAgICAgY29uc3QgY2IgPSB3b3JrLmNiO1xuICAgICAgICBjb25zdCBsYW5ndWFnZUZpbGUgPSB0aGlzLl9yZXNvbHZlTG9jYWxlRmlsZShkaXJlY3RvcnksIGxvY2FsZSk7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRMb2NhbGUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNhY2hlW2xvY2FsZV0sIG51bGwsIDIpO1xuICAgICAgICBzaGltLmZzLndyaXRlRmlsZShsYW5ndWFnZUZpbGUsIHNlcmlhbGl6ZWRMb2NhbGUsICd1dGYtOCcsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIF90aGlzLndyaXRlUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy53cml0ZVF1ZXVlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgX3RoaXMuX3Byb2Nlc3NXcml0ZVF1ZXVlKCk7XG4gICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlYWRMb2NhbGVGaWxlKCkge1xuICAgICAgICBsZXQgbG9jYWxlTG9va3VwID0ge307XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlRmlsZSA9IHRoaXMuX3Jlc29sdmVMb2NhbGVGaWxlKHRoaXMuZGlyZWN0b3J5LCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHVzaW5nIGEgYnVuZGxlciBzdWNoIGFzIHdlYnBhY2ssIHJlYWRGaWxlU3luYyBtYXkgbm90IGJlIGRlZmluZWQ6XG4gICAgICAgICAgICBpZiAoc2hpbS5mcy5yZWFkRmlsZVN5bmMpIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVMb29rdXAgPSBKU09OLnBhcnNlKHNoaW0uZnMucmVhZEZpbGVTeW5jKGxhbmd1YWdlRmlsZSwgJ3V0Zi04JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gJ3N5bnRheCBlcnJvciBpbiAnICsgbGFuZ3VhZ2VGaWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJylcbiAgICAgICAgICAgICAgICBsb2NhbGVMb29rdXAgPSB7fTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV0gPSBsb2NhbGVMb29rdXA7XG4gICAgfVxuICAgIF9yZXNvbHZlTG9jYWxlRmlsZShkaXJlY3RvcnksIGxvY2FsZSkge1xuICAgICAgICBsZXQgZmlsZSA9IHNoaW0ucmVzb2x2ZShkaXJlY3RvcnksICcuLycsIGxvY2FsZSArICcuanNvbicpO1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja1RvTGFuZ3VhZ2UgJiYgIXRoaXMuX2ZpbGVFeGlzdHNTeW5jKGZpbGUpICYmIH5sb2NhbGUubGFzdEluZGV4T2YoJ18nKSkge1xuICAgICAgICAgICAgLy8gYXR0ZW1wdCBmYWxsYmFjayB0byBsYW5ndWFnZSBvbmx5XG4gICAgICAgICAgICBjb25zdCBsYW5ndWFnZUZpbGUgPSBzaGltLnJlc29sdmUoZGlyZWN0b3J5LCAnLi8nLCBsb2NhbGUuc3BsaXQoJ18nKVswXSArICcuanNvbicpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbGVFeGlzdHNTeW5jKGxhbmd1YWdlRmlsZSkpXG4gICAgICAgICAgICAgICAgZmlsZSA9IGxhbmd1YWdlRmlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsZTtcbiAgICB9XG4gICAgX2ZpbGVFeGlzdHNTeW5jKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHNoaW0uZXhpc3RzKGZpbGUpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB5MThuKG9wdHMsIF9zaGltKSB7XG4gICAgc2hpbSA9IF9zaGltO1xuICAgIGNvbnN0IHkxOG4gPSBuZXcgWTE4TihvcHRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBfXzogeTE4bi5fXy5iaW5kKHkxOG4pLFxuICAgICAgICBfX246IHkxOG4uX19uLmJpbmQoeTE4biksXG4gICAgICAgIHNldExvY2FsZTogeTE4bi5zZXRMb2NhbGUuYmluZCh5MThuKSxcbiAgICAgICAgZ2V0TG9jYWxlOiB5MThuLmdldExvY2FsZS5iaW5kKHkxOG4pLFxuICAgICAgICB1cGRhdGVMb2NhbGU6IHkxOG4udXBkYXRlTG9jYWxlLmJpbmQoeTE4biksXG4gICAgICAgIGxvY2FsZTogeTE4bi5sb2NhbGVcbiAgICB9O1xufVxuIiwgImltcG9ydCBzaGltIGZyb20gJy4vYnVpbGQvbGliL3BsYXRmb3JtLXNoaW1zL25vZGUuanMnXG5pbXBvcnQgeyB5MThuIGFzIF95MThuIH0gZnJvbSAnLi9idWlsZC9saWIvaW5kZXguanMnXG5cbmNvbnN0IHkxOG4gPSAob3B0cykgPT4ge1xuICByZXR1cm4gX3kxOG4ob3B0cywgc2hpbSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgeTE4blxuIiwgImV4cG9ydCBmdW5jdGlvbiBhc3NlcnROb3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBzaGltLCBtZXNzYWdlKSB7XG4gICAgc2hpbS5hc3NlcnQubm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U2luZ2xlS2V5KGFjdHVhbCwgc2hpbSkge1xuICAgIHNoaW0uYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiBhY3R1YWwsICdzdHJpbmcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RLZXlzKG9iamVjdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UobWF5YmVQcm9taXNlKSB7XG4gICAgcmV0dXJuICghIW1heWJlUHJvbWlzZSAmJlxuICAgICAgICAhIW1heWJlUHJvbWlzZS50aGVuICYmXG4gICAgICAgIHR5cGVvZiBtYXliZVByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG4iLCAiZXhwb3J0IGNsYXNzIFlFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnIHx8ICd5YXJncyBlcnJvcicpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnWUVycm9yJztcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBZRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbW1hbmQoY21kKSB7XG4gICAgY29uc3QgZXh0cmFTcGFjZXNTdHJpcHBlZENvbW1hbmQgPSBjbWQucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuICAgIGNvbnN0IHNwbGl0Q29tbWFuZCA9IGV4dHJhU3BhY2VzU3RyaXBwZWRDb21tYW5kLnNwbGl0KC9cXHMrKD8hW15bXSpdfFtePF0qPikvKTtcbiAgICBjb25zdCBicmVnZXggPSAvXFwuKltcXF1bPD5dL2c7XG4gICAgY29uc3QgZmlyc3RDb21tYW5kID0gc3BsaXRDb21tYW5kLnNoaWZ0KCk7XG4gICAgaWYgKCFmaXJzdENvbW1hbmQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29tbWFuZCBmb3VuZCBpbjogJHtjbWR9YCk7XG4gICAgY29uc3QgcGFyc2VkQ29tbWFuZCA9IHtcbiAgICAgICAgY21kOiBmaXJzdENvbW1hbmQucmVwbGFjZShicmVnZXgsICcnKSxcbiAgICAgICAgZGVtYW5kZWQ6IFtdLFxuICAgICAgICBvcHRpb25hbDogW10sXG4gICAgfTtcbiAgICBzcGxpdENvbW1hbmQuZm9yRWFjaCgoY21kLCBpKSA9PiB7XG4gICAgICAgIGxldCB2YXJpYWRpYyA9IGZhbHNlO1xuICAgICAgICBjbWQgPSBjbWQucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgaWYgKC9cXC4rW1xcXT5dLy50ZXN0KGNtZCkgJiYgaSA9PT0gc3BsaXRDb21tYW5kLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICB2YXJpYWRpYyA9IHRydWU7XG4gICAgICAgIGlmICgvXlxcWy8udGVzdChjbWQpKSB7XG4gICAgICAgICAgICBwYXJzZWRDb21tYW5kLm9wdGlvbmFsLnB1c2goe1xuICAgICAgICAgICAgICAgIGNtZDogY21kLnJlcGxhY2UoYnJlZ2V4LCAnJykuc3BsaXQoJ3wnKSxcbiAgICAgICAgICAgICAgICB2YXJpYWRpYyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkQ29tbWFuZC5kZW1hbmRlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbWQ6IGNtZC5yZXBsYWNlKGJyZWdleCwgJycpLnNwbGl0KCd8JyksXG4gICAgICAgICAgICAgICAgdmFyaWFkaWMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZWRDb21tYW5kO1xufVxuIiwgImltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4veWVycm9yLmpzJztcbmltcG9ydCB7IHBhcnNlQ29tbWFuZCB9IGZyb20gJy4vcGFyc2UtY29tbWFuZC5qcyc7XG5jb25zdCBwb3NpdGlvbk5hbWUgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnZmlmdGgnLCAnc2l4dGgnXTtcbmV4cG9ydCBmdW5jdGlvbiBhcmdzZXJ0KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBmdW5jdGlvbiBwYXJzZUFyZ3MoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgYXJnMSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgID8gW3sgZGVtYW5kZWQ6IFtdLCBvcHRpb25hbDogW10gfSwgYXJnMSwgYXJnMl1cbiAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgIHBhcnNlQ29tbWFuZChgY21kICR7YXJnMX1gKSxcbiAgICAgICAgICAgICAgICBhcmcyLFxuICAgICAgICAgICAgICAgIGFyZzMsXG4gICAgICAgICAgICBdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgICAgICBjb25zdCBbcGFyc2VkLCBjYWxsZXJBcmd1bWVudHMsIF9sZW5ndGhdID0gcGFyc2VBcmdzKCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGNhbGxlckFyZ3VtZW50cyk7XG4gICAgICAgIHdoaWxlIChhcmdzLmxlbmd0aCAmJiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGFyZ3MucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IF9sZW5ndGggfHwgYXJncy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPCBwYXJzZWQuZGVtYW5kZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKGBOb3QgZW5vdWdoIGFyZ3VtZW50cyBwcm92aWRlZC4gRXhwZWN0ZWQgJHtwYXJzZWQuZGVtYW5kZWQubGVuZ3RofSBidXQgcmVjZWl2ZWQgJHthcmdzLmxlbmd0aH0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG90YWxDb21tYW5kcyA9IHBhcnNlZC5kZW1hbmRlZC5sZW5ndGggKyBwYXJzZWQub3B0aW9uYWwubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoID4gdG90YWxDb21tYW5kcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihgVG9vIG1hbnkgYXJndW1lbnRzIHByb3ZpZGVkLiBFeHBlY3RlZCBtYXggJHt0b3RhbENvbW1hbmRzfSBidXQgcmVjZWl2ZWQgJHtsZW5ndGh9LmApO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5kZW1hbmRlZC5mb3JFYWNoKGRlbWFuZGVkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVkVHlwZSA9IGd1ZXNzVHlwZShhcmcpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdUeXBlcyA9IGRlbWFuZGVkLmNtZC5maWx0ZXIodHlwZSA9PiB0eXBlID09PSBvYnNlcnZlZFR5cGUgfHwgdHlwZSA9PT0gJyonKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGluZ1R5cGVzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICBhcmd1bWVudFR5cGVFcnJvcihvYnNlcnZlZFR5cGUsIGRlbWFuZGVkLmNtZCwgcG9zaXRpb24pO1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcnNlZC5vcHRpb25hbC5mb3JFYWNoKG9wdGlvbmFsID0+IHtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBhcmcgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlZFR5cGUgPSBndWVzc1R5cGUoYXJnKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nVHlwZXMgPSBvcHRpb25hbC5jbWQuZmlsdGVyKHR5cGUgPT4gdHlwZSA9PT0gb2JzZXJ2ZWRUeXBlIHx8IHR5cGUgPT09ICcqJyk7XG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdUeXBlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgYXJndW1lbnRUeXBlRXJyb3Iob2JzZXJ2ZWRUeXBlLCBvcHRpb25hbC5jbWQsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IDE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnIuc3RhY2spO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGd1ZXNzVHlwZShhcmcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcmcgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiBhcmc7XG59XG5mdW5jdGlvbiBhcmd1bWVudFR5cGVFcnJvcihvYnNlcnZlZFR5cGUsIGFsbG93ZWRUeXBlcywgcG9zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgWUVycm9yKGBJbnZhbGlkICR7cG9zaXRpb25OYW1lW3Bvc2l0aW9uXSB8fCAnbWFueWl0aCd9IGFyZ3VtZW50LiBFeHBlY3RlZCAke2FsbG93ZWRUeXBlcy5qb2luKCcgb3IgJyl9IGJ1dCByZWNlaXZlZCAke29ic2VydmVkVHlwZX0uYCk7XG59XG4iLCAiaW1wb3J0IHsgYXJnc2VydCB9IGZyb20gJy4vYXJnc2VydC5qcyc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuL3V0aWxzL2lzLXByb21pc2UuanMnO1xuZXhwb3J0IGNsYXNzIEdsb2JhbE1pZGRsZXdhcmUge1xuICAgIGNvbnN0cnVjdG9yKHlhcmdzKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWlkZGxld2FyZSA9IFtdO1xuICAgICAgICB0aGlzLmZyb3plbnMgPSBbXTtcbiAgICAgICAgdGhpcy55YXJncyA9IHlhcmdzO1xuICAgIH1cbiAgICBhZGRNaWRkbGV3YXJlKGNhbGxiYWNrLCBhcHBseUJlZm9yZVZhbGlkYXRpb24sIGdsb2JhbCA9IHRydWUsIG11dGF0ZXMgPSBmYWxzZSkge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8ZnVuY3Rpb24+IFtib29sZWFuXSBbYm9vbGVhbl0gW2Jvb2xlYW5dJywgW2NhbGxiYWNrLCBhcHBseUJlZm9yZVZhbGlkYXRpb24sIGdsb2JhbF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrW2ldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdtaWRkbGV3YXJlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBtID0gY2FsbGJhY2tbaV07XG4gICAgICAgICAgICAgICAgbS5hcHBseUJlZm9yZVZhbGlkYXRpb24gPSBhcHBseUJlZm9yZVZhbGlkYXRpb247XG4gICAgICAgICAgICAgICAgbS5nbG9iYWwgPSBnbG9iYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLmdsb2JhbE1pZGRsZXdhcmUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IG0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIG0uYXBwbHlCZWZvcmVWYWxpZGF0aW9uID0gYXBwbHlCZWZvcmVWYWxpZGF0aW9uO1xuICAgICAgICAgICAgbS5nbG9iYWwgPSBnbG9iYWw7XG4gICAgICAgICAgICBtLm11dGF0ZXMgPSBtdXRhdGVzO1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnlhcmdzO1xuICAgIH1cbiAgICBhZGRDb2VyY2VNaWRkbGV3YXJlKGNhbGxiYWNrLCBvcHRpb24pIHtcbiAgICAgICAgY29uc3QgYWxpYXNlcyA9IHRoaXMueWFyZ3MuZ2V0QWxpYXNlcygpO1xuICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUgPSB0aGlzLmdsb2JhbE1pZGRsZXdhcmUuZmlsdGVyKG0gPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9DaGVjayA9IFsuLi4oYWxpYXNlc1tvcHRpb25dIHx8IFtdKSwgb3B0aW9uXTtcbiAgICAgICAgICAgIGlmICghbS5vcHRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICF0b0NoZWNrLmluY2x1ZGVzKG0ub3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrLm9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTWlkZGxld2FyZShjYWxsYmFjaywgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIGdldE1pZGRsZXdhcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdsb2JhbE1pZGRsZXdhcmU7XG4gICAgfVxuICAgIGZyZWV6ZSgpIHtcbiAgICAgICAgdGhpcy5mcm96ZW5zLnB1c2goWy4uLnRoaXMuZ2xvYmFsTWlkZGxld2FyZV0pO1xuICAgIH1cbiAgICB1bmZyZWV6ZSgpIHtcbiAgICAgICAgY29uc3QgZnJvemVuID0gdGhpcy5mcm96ZW5zLnBvcCgpO1xuICAgICAgICBpZiAoZnJvemVuICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUgPSBmcm96ZW47XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUgPSB0aGlzLmdsb2JhbE1pZGRsZXdhcmUuZmlsdGVyKG0gPT4gbS5nbG9iYWwpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kTWlkZGxld2FyZUZhY3RvcnkoY29tbWFuZE1pZGRsZXdhcmUpIHtcbiAgICBpZiAoIWNvbW1hbmRNaWRkbGV3YXJlKVxuICAgICAgICByZXR1cm4gW107XG4gICAgcmV0dXJuIGNvbW1hbmRNaWRkbGV3YXJlLm1hcChtaWRkbGV3YXJlID0+IHtcbiAgICAgICAgbWlkZGxld2FyZS5hcHBseUJlZm9yZVZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmU7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKGFyZ3YsIHlhcmdzLCBtaWRkbGV3YXJlcywgYmVmb3JlVmFsaWRhdGlvbikge1xuICAgIHJldHVybiBtaWRkbGV3YXJlcy5yZWR1Y2UoKGFjYywgbWlkZGxld2FyZSkgPT4ge1xuICAgICAgICBpZiAobWlkZGxld2FyZS5hcHBseUJlZm9yZVZhbGlkYXRpb24gIT09IGJlZm9yZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pZGRsZXdhcmUubXV0YXRlcykge1xuICAgICAgICAgICAgaWYgKG1pZGRsZXdhcmUuYXBwbGllZClcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgbWlkZGxld2FyZS5hcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9taXNlKGFjYykpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgICAgICAudGhlbihpbml0aWFsT2JqID0+IFByb21pc2UuYWxsKFtpbml0aWFsT2JqLCBtaWRkbGV3YXJlKGluaXRpYWxPYmosIHlhcmdzKV0pKVxuICAgICAgICAgICAgICAgIC50aGVuKChbaW5pdGlhbE9iaiwgbWlkZGxld2FyZU9ial0pID0+IE9iamVjdC5hc3NpZ24oaW5pdGlhbE9iaiwgbWlkZGxld2FyZU9iaikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbWlkZGxld2FyZShhY2MsIHlhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiBpc1Byb21pc2UocmVzdWx0KVxuICAgICAgICAgICAgICAgID8gcmVzdWx0LnRoZW4obWlkZGxld2FyZU9iaiA9PiBPYmplY3QuYXNzaWduKGFjYywgbWlkZGxld2FyZU9iaikpXG4gICAgICAgICAgICAgICAgOiBPYmplY3QuYXNzaWduKGFjYywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0sIGFyZ3YpO1xufVxuIiwgImltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4vaXMtcHJvbWlzZS5qcyc7XG5leHBvcnQgZnVuY3Rpb24gbWF5YmVBc3luY1Jlc3VsdChnZXRSZXN1bHQsIHJlc3VsdEhhbmRsZXIsIGVycm9ySGFuZGxlciA9IChlcnIpID0+IHtcbiAgICB0aHJvdyBlcnI7XG59KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaXNGdW5jdGlvbihnZXRSZXN1bHQpID8gZ2V0UmVzdWx0KCkgOiBnZXRSZXN1bHQ7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UocmVzdWx0KVxuICAgICAgICAgICAgPyByZXN1bHQudGhlbigocmVzdWx0KSA9PiByZXN1bHRIYW5kbGVyKHJlc3VsdCkpXG4gICAgICAgICAgICA6IHJlc3VsdEhhbmRsZXIocmVzdWx0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZXJyb3JIYW5kbGVyKGVycik7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsICJpbXBvcnQgeyBhc3NlcnROb3RTdHJpY3RFcXVhbCwgfSBmcm9tICcuL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4vdXRpbHMvaXMtcHJvbWlzZS5qcyc7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbW1hbmRNaWRkbGV3YXJlRmFjdG9yeSwgfSBmcm9tICcuL21pZGRsZXdhcmUuanMnO1xuaW1wb3J0IHsgcGFyc2VDb21tYW5kIH0gZnJvbSAnLi9wYXJzZS1jb21tYW5kLmpzJztcbmltcG9ydCB7IGlzWWFyZ3NJbnN0YW5jZSwgfSBmcm9tICcuL3lhcmdzLWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgbWF5YmVBc3luY1Jlc3VsdCB9IGZyb20gJy4vdXRpbHMvbWF5YmUtYXN5bmMtcmVzdWx0LmpzJztcbmNvbnN0IERFRkFVTFRfTUFSS0VSID0gLyheXFwqKXwoXlxcJDApLztcbmV4cG9ydCBjbGFzcyBDb21tYW5kSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHVzYWdlLCB2YWxpZGF0aW9uLCBnbG9iYWxNaWRkbGV3YXJlLCBzaGltKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZUNhY2hlID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0ge307XG4gICAgICAgIHRoaXMuYWxpYXNNYXAgPSB7fTtcbiAgICAgICAgdGhpcy5mcm96ZW5zID0gW107XG4gICAgICAgIHRoaXMuc2hpbSA9IHNoaW07XG4gICAgICAgIHRoaXMudXNhZ2UgPSB1c2FnZTtcbiAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlID0gZ2xvYmFsTWlkZGxld2FyZTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uID0gdmFsaWRhdGlvbjtcbiAgICB9XG4gICAgYWRkRGlyZWN0b3J5KGRpciwgcmVxLCBjYWxsZXJGaWxlLCBvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICB0aGlzLnJlcXVpcmVDYWNoZS5hZGQoY2FsbGVyRmlsZSk7XG4gICAgICAgIGNvbnN0IGZ1bGxEaXJQYXRoID0gdGhpcy5zaGltLnBhdGgucmVzb2x2ZSh0aGlzLnNoaW0ucGF0aC5kaXJuYW1lKGNhbGxlckZpbGUpLCBkaXIpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuc2hpbS5yZWFkZGlyU3luYyhmdWxsRGlyUGF0aCwge1xuICAgICAgICAgICAgcmVjdXJzaXZlOiBvcHRzLnJlY3Vyc2UgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0cy5leHRlbnNpb25zKSlcbiAgICAgICAgICAgIG9wdHMuZXh0ZW5zaW9ucyA9IFsnanMnXTtcbiAgICAgICAgY29uc3QgdmlzaXQgPSB0eXBlb2Ygb3B0cy52aXNpdCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMudmlzaXQgOiAobykgPT4gbztcbiAgICAgICAgZm9yIChjb25zdCBmaWxlYiBvZiBmaWxlcykge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGViLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAob3B0cy5leGNsdWRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4Y2x1ZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMuZXhjbHVkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBleGNsdWRlID0gb3B0cy5leGNsdWRlKGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZSA9IG9wdHMuZXhjbHVkZS50ZXN0KGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0cy5pbmNsdWRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluY2x1ZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMuaW5jbHVkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlID0gb3B0cy5pbmNsdWRlKGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSA9IG9wdHMuaW5jbHVkZS50ZXN0KGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN1cHBvcnRlZEV4dGVuc2lvbiA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBleHQgb2Ygb3B0cy5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUuZW5kc1dpdGgoZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkRXh0ZW5zaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZWRFeHRlbnNpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBqb2luZWQgPSB0aGlzLnNoaW0ucGF0aC5qb2luKGZ1bGxEaXJQYXRoLCBmaWxlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGUgPSByZXEoam9pbmVkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbmRhYmxlTW9kdWxlID0gT2JqZWN0LmNyZWF0ZShudWxsLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh7IC4uLm1vZHVsZSB9KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlzaXRlZCA9IHZpc2l0KGV4dGVuZGFibGVNb2R1bGUsIGpvaW5lZCwgZmlsZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZUNhY2hlLmhhcyhqb2luZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZUNhY2hlLmFkZChqb2luZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4dGVuZGFibGVNb2R1bGUuY29tbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kYWJsZU1vZHVsZS5jb21tYW5kID0gdGhpcy5zaGltLnBhdGguYmFzZW5hbWUoam9pbmVkLCB0aGlzLnNoaW0ucGF0aC5leHRuYW1lKGpvaW5lZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcihleHRlbmRhYmxlTW9kdWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkSGFuZGxlcihjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBjb21tYW5kTWlkZGxld2FyZSwgZGVwcmVjYXRlZCkge1xuICAgICAgICBsZXQgYWxpYXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBtaWRkbGV3YXJlcyA9IGNvbW1hbmRNaWRkbGV3YXJlRmFjdG9yeShjb21tYW5kTWlkZGxld2FyZSk7XG4gICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyIHx8ICgoKSA9PiB7IH0pO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbWQpKSB7XG4gICAgICAgICAgICBpZiAoaXNDb21tYW5kQW5kQWxpYXNlcyhjbWQpKSB7XG4gICAgICAgICAgICAgICAgW2NtZCwgLi4uYWxpYXNlc10gPSBjbWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2YgY21kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcihjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDb21tYW5kSGFuZGxlckRlZmluaXRpb24oY21kKSkge1xuICAgICAgICAgICAgbGV0IGNvbW1hbmQgPSBBcnJheS5pc0FycmF5KGNtZC5jb21tYW5kKSB8fCB0eXBlb2YgY21kLmNvbW1hbmQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBjbWQuY29tbWFuZFxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChjb21tYW5kID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjb21tYW5kIG5hbWUgZ2l2ZW4gZm9yIG1vZHVsZTogJHt0aGlzLnNoaW0uaW5zcGVjdChjbWQpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNtZC5hbGlhc2VzKVxuICAgICAgICAgICAgICAgIGNvbW1hbmQgPSBbXS5jb25jYXQoY29tbWFuZCkuY29uY2F0KGNtZC5hbGlhc2VzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcihjb21tYW5kLCB0aGlzLmV4dHJhY3REZXNjKGNtZCksIGNtZC5idWlsZGVyLCBjbWQuaGFuZGxlciwgY21kLm1pZGRsZXdhcmVzLCBjbWQuZGVwcmVjYXRlZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDb21tYW5kQnVpbGRlckRlZmluaXRpb24oYnVpbGRlcikpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcihbY21kXS5jb25jYXQoYWxpYXNlcyksIGRlc2NyaXB0aW9uLCBidWlsZGVyLmJ1aWxkZXIsIGJ1aWxkZXIuaGFuZGxlciwgYnVpbGRlci5taWRkbGV3YXJlcywgYnVpbGRlci5kZXByZWNhdGVkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNtZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZENvbW1hbmQgPSBwYXJzZUNvbW1hbmQoY21kKTtcbiAgICAgICAgICAgIGFsaWFzZXMgPSBhbGlhc2VzLm1hcChhbGlhcyA9PiBwYXJzZUNvbW1hbmQoYWxpYXMpLmNtZCk7XG4gICAgICAgICAgICBsZXQgaXNEZWZhdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBbGlhc2VzID0gW3BhcnNlZENvbW1hbmQuY21kXS5jb25jYXQoYWxpYXNlcykuZmlsdGVyKGMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChERUZBVUxUX01BUktFUi50ZXN0KGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwYXJzZWRBbGlhc2VzLmxlbmd0aCA9PT0gMCAmJiBpc0RlZmF1bHQpXG4gICAgICAgICAgICAgICAgcGFyc2VkQWxpYXNlcy5wdXNoKCckMCcpO1xuICAgICAgICAgICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIHBhcnNlZENvbW1hbmQuY21kID0gcGFyc2VkQWxpYXNlc1swXTtcbiAgICAgICAgICAgICAgICBhbGlhc2VzID0gcGFyc2VkQWxpYXNlcy5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBjbWQgPSBjbWQucmVwbGFjZShERUZBVUxUX01BUktFUiwgcGFyc2VkQ29tbWFuZC5jbWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxpYXNlcy5mb3JFYWNoKGFsaWFzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsaWFzTWFwW2FsaWFzXSA9IHBhcnNlZENvbW1hbmQuY21kO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRpb24gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2FnZS5jb21tYW5kKGNtZCwgZGVzY3JpcHRpb24sIGlzRGVmYXVsdCwgYWxpYXNlcywgZGVwcmVjYXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW3BhcnNlZENvbW1hbmQuY21kXSA9IHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbDogY21kLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgICAgYnVpbGRlcjogYnVpbGRlciB8fCB7fSxcbiAgICAgICAgICAgICAgICBtaWRkbGV3YXJlcyxcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVkLFxuICAgICAgICAgICAgICAgIGRlbWFuZGVkOiBwYXJzZWRDb21tYW5kLmRlbWFuZGVkLFxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBwYXJzZWRDb21tYW5kLm9wdGlvbmFsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0RlZmF1bHQpXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q29tbWFuZCA9IHRoaXMuaGFuZGxlcnNbcGFyc2VkQ29tbWFuZC5jbWRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENvbW1hbmRIYW5kbGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnM7XG4gICAgfVxuICAgIGdldENvbW1hbmRzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYW5kbGVycykuY29uY2F0KE9iamVjdC5rZXlzKHRoaXMuYWxpYXNNYXApKTtcbiAgICB9XG4gICAgaGFzRGVmYXVsdENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZGVmYXVsdENvbW1hbmQ7XG4gICAgfVxuICAgIHJ1bkNvbW1hbmQoY29tbWFuZCwgeWFyZ3MsIHBhcnNlZCwgY29tbWFuZEluZGV4LCBoZWxwT25seSwgaGVscE9yVmVyc2lvblNldCkge1xuICAgICAgICBjb25zdCBjb21tYW5kSGFuZGxlciA9IHRoaXMuaGFuZGxlcnNbY29tbWFuZF0gfHxcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbdGhpcy5hbGlhc01hcFtjb21tYW5kXV0gfHxcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvbW1hbmQ7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCBwYXJlbnRDb21tYW5kcyA9IGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IGlzRGVmYXVsdENvbW1hbmQgPSAhY29tbWFuZDtcbiAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLnB1c2goY29tbWFuZCk7XG4gICAgICAgICAgICBjdXJyZW50Q29udGV4dC5mdWxsQ29tbWFuZHMucHVzaChjb21tYW5kSGFuZGxlci5vcmlnaW5hbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVpbGRlclJlc3VsdCA9IHRoaXMuYXBwbHlCdWlsZGVyVXBkYXRlVXNhZ2VBbmRQYXJzZShpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgeWFyZ3MsIHBhcnNlZC5hbGlhc2VzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSwgaGVscE9yVmVyc2lvblNldCk7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UoYnVpbGRlclJlc3VsdClcbiAgICAgICAgICAgID8gYnVpbGRlclJlc3VsdC50aGVuKHJlc3VsdCA9PiB0aGlzLmFwcGx5TWlkZGxld2FyZUFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgcmVzdWx0LmlubmVyQXJndiwgY3VycmVudENvbnRleHQsIGhlbHBPbmx5LCByZXN1bHQuYWxpYXNlcywgeWFyZ3MpKVxuICAgICAgICAgICAgOiB0aGlzLmFwcGx5TWlkZGxld2FyZUFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgYnVpbGRlclJlc3VsdC5pbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBoZWxwT25seSwgYnVpbGRlclJlc3VsdC5hbGlhc2VzLCB5YXJncyk7XG4gICAgfVxuICAgIGFwcGx5QnVpbGRlclVwZGF0ZVVzYWdlQW5kUGFyc2UoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIHlhcmdzLCBhbGlhc2VzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSwgaGVscE9yVmVyc2lvblNldCkge1xuICAgICAgICBjb25zdCBidWlsZGVyID0gY29tbWFuZEhhbmRsZXIuYnVpbGRlcjtcbiAgICAgICAgbGV0IGlubmVyWWFyZ3MgPSB5YXJncztcbiAgICAgICAgaWYgKGlzQ29tbWFuZEJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKSkge1xuICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmZyZWV6ZSgpO1xuICAgICAgICAgICAgY29uc3QgYnVpbGRlck91dHB1dCA9IGJ1aWxkZXIoeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkucmVzZXQoYWxpYXNlcyksIGhlbHBPclZlcnNpb25TZXQpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShidWlsZGVyT3V0cHV0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyT3V0cHV0LnRoZW4ob3V0cHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJZYXJncyA9IGlzWWFyZ3NJbnN0YW5jZShvdXRwdXQpID8gb3V0cHV0IDogeWFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQW5kVXBkYXRlVXNhZ2UoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGlubmVyWWFyZ3MsIHBhcmVudENvbW1hbmRzLCBjb21tYW5kSW5kZXgsIGhlbHBPbmx5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0NvbW1hbmRCdWlsZGVyT3B0aW9uRGVmaW5pdGlvbnMoYnVpbGRlcikpIHtcbiAgICAgICAgICAgIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlSW5zdGFuY2UoKS5mcmVlemUoKTtcbiAgICAgICAgICAgIGlubmVyWWFyZ3MgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5yZXNldChhbGlhc2VzKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbW1hbmRIYW5kbGVyLmJ1aWxkZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lcllhcmdzLm9wdGlvbihrZXksIGJ1aWxkZXJba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFuZFVwZGF0ZVVzYWdlKGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lcllhcmdzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSk7XG4gICAgfVxuICAgIHBhcnNlQW5kVXBkYXRlVXNhZ2UoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGlubmVyWWFyZ3MsIHBhcmVudENvbW1hbmRzLCBjb21tYW5kSW5kZXgsIGhlbHBPbmx5KSB7XG4gICAgICAgIGlmIChpc0RlZmF1bHRDb21tYW5kKVxuICAgICAgICAgICAgaW5uZXJZYXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkudW5mcmVlemUodHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZVVzYWdlKGlubmVyWWFyZ3MpKSB7XG4gICAgICAgICAgICBpbm5lcllhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLmdldFVzYWdlSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC51c2FnZSh0aGlzLnVzYWdlRnJvbVBhcmVudENvbW1hbmRzQ29tbWFuZEhhbmRsZXIocGFyZW50Q29tbWFuZHMsIGNvbW1hbmRIYW5kbGVyKSwgY29tbWFuZEhhbmRsZXIuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlubmVyQXJndiA9IGlubmVyWWFyZ3NcbiAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgLnJ1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzKG51bGwsIHVuZGVmaW5lZCwgdHJ1ZSwgY29tbWFuZEluZGV4LCBoZWxwT25seSk7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UoaW5uZXJBcmd2KVxuICAgICAgICAgICAgPyBpbm5lckFyZ3YudGhlbihhcmd2ID0+ICh7XG4gICAgICAgICAgICAgICAgYWxpYXNlczogaW5uZXJZYXJncy5wYXJzZWQuYWxpYXNlcyxcbiAgICAgICAgICAgICAgICBpbm5lckFyZ3Y6IGFyZ3YsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGFsaWFzZXM6IGlubmVyWWFyZ3MucGFyc2VkLmFsaWFzZXMsXG4gICAgICAgICAgICAgICAgaW5uZXJBcmd2OiBpbm5lckFyZ3YsXG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgICBzaG91bGRVcGRhdGVVc2FnZSh5YXJncykge1xuICAgICAgICByZXR1cm4gKCF5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuZ2V0VXNhZ2VEaXNhYmxlZCgpICYmXG4gICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuZ2V0VXNhZ2UoKS5sZW5ndGggPT09IDApO1xuICAgIH1cbiAgICB1c2FnZUZyb21QYXJlbnRDb21tYW5kc0NvbW1hbmRIYW5kbGVyKHBhcmVudENvbW1hbmRzLCBjb21tYW5kSGFuZGxlcikge1xuICAgICAgICBjb25zdCBjID0gREVGQVVMVF9NQVJLRVIudGVzdChjb21tYW5kSGFuZGxlci5vcmlnaW5hbClcbiAgICAgICAgICAgID8gY29tbWFuZEhhbmRsZXIub3JpZ2luYWwucmVwbGFjZShERUZBVUxUX01BUktFUiwgJycpLnRyaW0oKVxuICAgICAgICAgICAgOiBjb21tYW5kSGFuZGxlci5vcmlnaW5hbDtcbiAgICAgICAgY29uc3QgcGMgPSBwYXJlbnRDb21tYW5kcy5maWx0ZXIoYyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIURFRkFVTFRfTUFSS0VSLnRlc3QoYyk7XG4gICAgICAgIH0pO1xuICAgICAgICBwYy5wdXNoKGMpO1xuICAgICAgICByZXR1cm4gYCQwICR7cGMuam9pbignICcpfWA7XG4gICAgfVxuICAgIGhhbmRsZVZhbGlkYXRpb25BbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGlubmVyQXJndiwgY3VycmVudENvbnRleHQsIGFsaWFzZXMsIHlhcmdzLCBtaWRkbGV3YXJlcywgcG9zaXRpb25hbE1hcCkge1xuICAgICAgICBpZiAoIXlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldEhhc091dHB1dCgpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0geWFyZ3NcbiAgICAgICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgICAgICAucnVuVmFsaWRhdGlvbihhbGlhc2VzLCBwb3NpdGlvbmFsTWFwLCB5YXJncy5wYXJzZWQuZXJyb3IsIGlzRGVmYXVsdENvbW1hbmQpO1xuICAgICAgICAgICAgaW5uZXJBcmd2ID0gbWF5YmVBc3luY1Jlc3VsdChpbm5lckFyZ3YsIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZEhhbmRsZXIuaGFuZGxlciAmJiAheWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0SGFzT3V0cHV0KCkpIHtcbiAgICAgICAgICAgIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLnNldEhhc091dHB1dCgpO1xuICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVEb3VibGVEYXNoID0gISF5YXJncy5nZXRPcHRpb25zKCkuY29uZmlndXJhdGlvblsncG9wdWxhdGUtLSddO1xuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgICAgICAucG9zdFByb2Nlc3MoaW5uZXJBcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICBpbm5lckFyZ3YgPSBhcHBseU1pZGRsZXdhcmUoaW5uZXJBcmd2LCB5YXJncywgbWlkZGxld2FyZXMsIGZhbHNlKTtcbiAgICAgICAgICAgIGlubmVyQXJndiA9IG1heWJlQXN5bmNSZXN1bHQoaW5uZXJBcmd2LCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJSZXN1bHQgPSBjb21tYW5kSGFuZGxlci5oYW5kbGVyKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShoYW5kbGVyUmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZXJSZXN1bHQudGhlbigoKSA9PiByZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIDogcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWlzRGVmYXVsdENvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuY2FjaGVIZWxwTWVzc2FnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShpbm5lckFyZ3YpICYmXG4gICAgICAgICAgICAgICAgIXlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmhhc1BhcnNlQ2FsbGJhY2soKSkge1xuICAgICAgICAgICAgICAgIGlubmVyQXJndi5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuZmFpbChudWxsLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNEZWZhdWx0Q29tbWFuZCkge1xuICAgICAgICAgICAgY3VycmVudENvbnRleHQuY29tbWFuZHMucG9wKCk7XG4gICAgICAgICAgICBjdXJyZW50Q29udGV4dC5mdWxsQ29tbWFuZHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlubmVyQXJndjtcbiAgICB9XG4gICAgYXBwbHlNaWRkbGV3YXJlQW5kR2V0UmVzdWx0KGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBoZWxwT25seSwgYWxpYXNlcywgeWFyZ3MpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uYWxNYXAgPSB7fTtcbiAgICAgICAgaWYgKGhlbHBPbmx5KVxuICAgICAgICAgICAgcmV0dXJuIGlubmVyQXJndjtcbiAgICAgICAgaWYgKCF5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRIYXNPdXRwdXQoKSkge1xuICAgICAgICAgICAgcG9zaXRpb25hbE1hcCA9IHRoaXMucG9wdWxhdGVQb3NpdGlvbmFscyhjb21tYW5kSGFuZGxlciwgaW5uZXJBcmd2LCBjdXJyZW50Q29udGV4dCwgeWFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gdGhpcy5nbG9iYWxNaWRkbGV3YXJlXG4gICAgICAgICAgICAuZ2V0TWlkZGxld2FyZSgpXG4gICAgICAgICAgICAuc2xpY2UoMClcbiAgICAgICAgICAgIC5jb25jYXQoY29tbWFuZEhhbmRsZXIubWlkZGxld2FyZXMpO1xuICAgICAgICBjb25zdCBtYXliZVByb21pc2VBcmd2ID0gYXBwbHlNaWRkbGV3YXJlKGlubmVyQXJndiwgeWFyZ3MsIG1pZGRsZXdhcmVzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShtYXliZVByb21pc2VBcmd2KVxuICAgICAgICAgICAgPyBtYXliZVByb21pc2VBcmd2LnRoZW4ocmVzb2x2ZWRJbm5lckFyZ3YgPT4gdGhpcy5oYW5kbGVWYWxpZGF0aW9uQW5kR2V0UmVzdWx0KGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCByZXNvbHZlZElubmVyQXJndiwgY3VycmVudENvbnRleHQsIGFsaWFzZXMsIHlhcmdzLCBtaWRkbGV3YXJlcywgcG9zaXRpb25hbE1hcCkpXG4gICAgICAgICAgICA6IHRoaXMuaGFuZGxlVmFsaWRhdGlvbkFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgbWF5YmVQcm9taXNlQXJndiwgY3VycmVudENvbnRleHQsIGFsaWFzZXMsIHlhcmdzLCBtaWRkbGV3YXJlcywgcG9zaXRpb25hbE1hcCk7XG4gICAgfVxuICAgIHBvcHVsYXRlUG9zaXRpb25hbHMoY29tbWFuZEhhbmRsZXIsIGFyZ3YsIGNvbnRleHQsIHlhcmdzKSB7XG4gICAgICAgIGFyZ3YuXyA9IGFyZ3YuXy5zbGljZShjb250ZXh0LmNvbW1hbmRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRlbWFuZGVkID0gY29tbWFuZEhhbmRsZXIuZGVtYW5kZWQuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsID0gY29tbWFuZEhhbmRsZXIub3B0aW9uYWwuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uYWxNYXAgPSB7fTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uLnBvc2l0aW9uYWxDb3VudChkZW1hbmRlZC5sZW5ndGgsIGFyZ3YuXy5sZW5ndGgpO1xuICAgICAgICB3aGlsZSAoZGVtYW5kZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkZW1hbmQgPSBkZW1hbmRlZC5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVBvc2l0aW9uYWwoZGVtYW5kLCBhcmd2LCBwb3NpdGlvbmFsTWFwKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAob3B0aW9uYWwubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBtYXliZSA9IG9wdGlvbmFsLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlUG9zaXRpb25hbChtYXliZSwgYXJndiwgcG9zaXRpb25hbE1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgYXJndi5fID0gY29udGV4dC5jb21tYW5kcy5jb25jYXQoYXJndi5fLm1hcChhID0+ICcnICsgYSkpO1xuICAgICAgICB0aGlzLnBvc3RQcm9jZXNzUG9zaXRpb25hbHMoYXJndiwgcG9zaXRpb25hbE1hcCwgdGhpcy5jbWRUb1BhcnNlT3B0aW9ucyhjb21tYW5kSGFuZGxlci5vcmlnaW5hbCksIHlhcmdzKTtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uYWxNYXA7XG4gICAgfVxuICAgIHBvcHVsYXRlUG9zaXRpb25hbChwb3NpdGlvbmFsLCBhcmd2LCBwb3NpdGlvbmFsTWFwKSB7XG4gICAgICAgIGNvbnN0IGNtZCA9IHBvc2l0aW9uYWwuY21kWzBdO1xuICAgICAgICBpZiAocG9zaXRpb25hbC52YXJpYWRpYykge1xuICAgICAgICAgICAgcG9zaXRpb25hbE1hcFtjbWRdID0gYXJndi5fLnNwbGljZSgwKS5tYXAoU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhcmd2Ll8ubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uYWxNYXBbY21kXSA9IFtTdHJpbmcoYXJndi5fLnNoaWZ0KCkpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbWRUb1BhcnNlT3B0aW9ucyhjbWRTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcGFyc2VPcHRpb25zID0ge1xuICAgICAgICAgICAgYXJyYXk6IFtdLFxuICAgICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgICAgICBhbGlhczoge30sXG4gICAgICAgICAgICBkZW1hbmQ6IHt9LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUNvbW1hbmQoY21kU3RyaW5nKTtcbiAgICAgICAgcGFyc2VkLmRlbWFuZGVkLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBbY21kLCAuLi5hbGlhc2VzXSA9IGQuY21kO1xuICAgICAgICAgICAgaWYgKGQudmFyaWFkaWMpIHtcbiAgICAgICAgICAgICAgICBwYXJzZU9wdGlvbnMuYXJyYXkucHVzaChjbWQpO1xuICAgICAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5kZWZhdWx0W2NtZF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5hbGlhc1tjbWRdID0gYWxpYXNlcztcbiAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5kZW1hbmRbY21kXSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJzZWQub3B0aW9uYWwuZm9yRWFjaChvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtjbWQsIC4uLmFsaWFzZXNdID0gby5jbWQ7XG4gICAgICAgICAgICBpZiAoby52YXJpYWRpYykge1xuICAgICAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5hcnJheS5wdXNoKGNtZCk7XG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb25zLmRlZmF1bHRbY21kXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VPcHRpb25zLmFsaWFzW2NtZF0gPSBhbGlhc2VzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcnNlT3B0aW9ucztcbiAgICB9XG4gICAgcG9zdFByb2Nlc3NQb3NpdGlvbmFscyhhcmd2LCBwb3NpdGlvbmFsTWFwLCBwYXJzZU9wdGlvbnMsIHlhcmdzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB5YXJncy5nZXRPcHRpb25zKCkpO1xuICAgICAgICBvcHRpb25zLmRlZmF1bHQgPSBPYmplY3QuYXNzaWduKHBhcnNlT3B0aW9ucy5kZWZhdWx0LCBvcHRpb25zLmRlZmF1bHQpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJzZU9wdGlvbnMuYWxpYXMpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmFsaWFzW2tleV0gPSAob3B0aW9ucy5hbGlhc1trZXldIHx8IFtdKS5jb25jYXQocGFyc2VPcHRpb25zLmFsaWFzW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuYXJyYXkgPSBvcHRpb25zLmFycmF5LmNvbmNhdChwYXJzZU9wdGlvbnMuYXJyYXkpO1xuICAgICAgICBvcHRpb25zLmNvbmZpZyA9IHt9O1xuICAgICAgICBjb25zdCB1bnBhcnNlZCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhwb3NpdGlvbmFsTWFwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBwb3NpdGlvbmFsTWFwW2tleV0ubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb25maWd1cmF0aW9uWyd1bmtub3duLW9wdGlvbnMtYXMtYXJncyddKVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmtleVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB1bnBhcnNlZC5wdXNoKGAtLSR7a2V5fWApO1xuICAgICAgICAgICAgICAgIHVucGFyc2VkLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXVucGFyc2VkLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5jb25maWd1cmF0aW9uLCB7XG4gICAgICAgICAgICAncG9wdWxhdGUtLSc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5zaGltLlBhcnNlci5kZXRhaWxlZCh1bnBhcnNlZCwgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlnLFxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChwYXJzZWQuZXJyb3IpIHtcbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLmdldFVzYWdlSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC5mYWlsKHBhcnNlZC5lcnJvci5tZXNzYWdlLCBwYXJzZWQuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25hbEtleXMgPSBPYmplY3Qua2V5cyhwb3NpdGlvbmFsTWFwKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBvc2l0aW9uYWxNYXApLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbmFsS2V5cy5wdXNoKC4uLnBhcnNlZC5hbGlhc2VzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJzZWQuYXJndikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbmFsS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcG9zaXRpb25hbE1hcFtrZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25hbE1hcFtrZXldID0gcGFyc2VkLmFyZ3Zba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5Db25maWdzKHlhcmdzLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5pc0RlZmF1bHRlZCh5YXJncywga2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJzZWQuYXJndiwga2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkoYXJndltrZXldKSB8fCBBcnJheS5pc0FycmF5KHBhcnNlZC5hcmd2W2tleV0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltrZXldID0gW10uY29uY2F0KGFyZ3Zba2V5XSwgcGFyc2VkLmFyZ3Zba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2W2tleV0gPSBwYXJzZWQuYXJndltrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNEZWZhdWx0ZWQoeWFyZ3MsIGtleSkge1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGRlZmF1bHRzIH0gPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRzLCBrZXkpIHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVmYXVsdHMsIHRoaXMuc2hpbS5QYXJzZXIuY2FtZWxDYXNlKGtleSkpKTtcbiAgICB9XG4gICAgaXNJbkNvbmZpZ3MoeWFyZ3MsIGtleSkge1xuICAgICAgICBjb25zdCB7IGNvbmZpZ09iamVjdHMgfSA9IHlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIChjb25maWdPYmplY3RzLnNvbWUoYyA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYywga2V5KSkgfHxcbiAgICAgICAgICAgIGNvbmZpZ09iamVjdHMuc29tZShjID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLCB0aGlzLnNoaW0uUGFyc2VyLmNhbWVsQ2FzZShrZXkpKSkpO1xuICAgIH1cbiAgICBydW5EZWZhdWx0QnVpbGRlck9uKHlhcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWZhdWx0Q29tbWFuZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlVXNhZ2UoeWFyZ3MpKSB7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kU3RyaW5nID0gREVGQVVMVF9NQVJLRVIudGVzdCh0aGlzLmRlZmF1bHRDb21tYW5kLm9yaWdpbmFsKVxuICAgICAgICAgICAgICAgID8gdGhpcy5kZWZhdWx0Q29tbWFuZC5vcmlnaW5hbFxuICAgICAgICAgICAgICAgIDogdGhpcy5kZWZhdWx0Q29tbWFuZC5vcmlnaW5hbC5yZXBsYWNlKC9eW15bXFxdPD5dKi8sICckMCAnKTtcbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLmdldFVzYWdlSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC51c2FnZShjb21tYW5kU3RyaW5nLCB0aGlzLmRlZmF1bHRDb21tYW5kLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWlsZGVyID0gdGhpcy5kZWZhdWx0Q29tbWFuZC5idWlsZGVyO1xuICAgICAgICBpZiAoaXNDb21tYW5kQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gYnVpbGRlcih5YXJncywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzQ29tbWFuZEJ1aWxkZXJEZWZpbml0aW9uKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhidWlsZGVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKGtleSwgYnVpbGRlcltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGV4dHJhY3REZXNjKHsgZGVzY3JpYmUsIGRlc2NyaXB0aW9uLCBkZXNjIH0pIHtcbiAgICAgICAgZm9yIChjb25zdCB0ZXN0IG9mIFtkZXNjcmliZSwgZGVzY3JpcHRpb24sIGRlc2NdKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnIHx8IHRlc3QgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0O1xuICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwodGVzdCwgdHJ1ZSwgdGhpcy5zaGltKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZyZWV6ZSgpIHtcbiAgICAgICAgdGhpcy5mcm96ZW5zLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcnM6IHRoaXMuaGFuZGxlcnMsXG4gICAgICAgICAgICBhbGlhc01hcDogdGhpcy5hbGlhc01hcCxcbiAgICAgICAgICAgIGRlZmF1bHRDb21tYW5kOiB0aGlzLmRlZmF1bHRDb21tYW5kLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW5mcmVlemUoKSB7XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IHRoaXMuZnJvemVucy5wb3AoKTtcbiAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwoZnJvemVuLCB1bmRlZmluZWQsIHRoaXMuc2hpbSk7XG4gICAgICAgICh7XG4gICAgICAgICAgICBoYW5kbGVyczogdGhpcy5oYW5kbGVycyxcbiAgICAgICAgICAgIGFsaWFzTWFwOiB0aGlzLmFsaWFzTWFwLFxuICAgICAgICAgICAgZGVmYXVsdENvbW1hbmQ6IHRoaXMuZGVmYXVsdENvbW1hbmQsXG4gICAgICAgIH0gPSBmcm96ZW4pO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuICAgICAgICB0aGlzLmFsaWFzTWFwID0ge307XG4gICAgICAgIHRoaXMuZGVmYXVsdENvbW1hbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucmVxdWlyZUNhY2hlID0gbmV3IFNldCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZCh1c2FnZSwgdmFsaWRhdGlvbiwgZ2xvYmFsTWlkZGxld2FyZSwgc2hpbSkge1xuICAgIHJldHVybiBuZXcgQ29tbWFuZEluc3RhbmNlKHVzYWdlLCB2YWxpZGF0aW9uLCBnbG9iYWxNaWRkbGV3YXJlLCBzaGltKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRCdWlsZGVyRGVmaW5pdGlvbihidWlsZGVyKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgYnVpbGRlciA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgISFidWlsZGVyLmJ1aWxkZXIgJiZcbiAgICAgICAgdHlwZW9mIGJ1aWxkZXIuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc0NvbW1hbmRBbmRBbGlhc2VzKGNtZCkge1xuICAgIHJldHVybiBjbWQuZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZEJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBidWlsZGVyID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNDb21tYW5kQnVpbGRlck9wdGlvbkRlZmluaXRpb25zKGJ1aWxkZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGJ1aWxkZXIgPT09ICdvYmplY3QnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZEhhbmRsZXJEZWZpbml0aW9uKGNtZCkge1xuICAgIHJldHVybiB0eXBlb2YgY21kID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShjbWQpO1xufVxuIiwgImltcG9ydCB7IG9iamVjdEtleXMgfSBmcm9tICcuLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gb2JqRmlsdGVyKG9yaWdpbmFsID0ge30sIGZpbHRlciA9ICgpID0+IHRydWUpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBvYmplY3RLZXlzKG9yaWdpbmFsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXIoa2V5LCBvcmlnaW5hbFtrZXldKSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBvcmlnaW5hbFtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRCbG9ja2luZyhibG9ja2luZykge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcbiAgICBbcHJvY2Vzcy5zdGRvdXQsIHByb2Nlc3Muc3RkZXJyXS5mb3JFYWNoKF9zdHJlYW0gPT4ge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBfc3RyZWFtO1xuICAgICAgICBpZiAoc3RyZWFtLl9oYW5kbGUgJiZcbiAgICAgICAgICAgIHN0cmVhbS5pc1RUWSAmJlxuICAgICAgICAgICAgdHlwZW9mIHN0cmVhbS5faGFuZGxlLnNldEJsb2NraW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdHJlYW0uX2hhbmRsZS5zZXRCbG9ja2luZyhibG9ja2luZyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsICJpbXBvcnQgeyBvYmpGaWx0ZXIgfSBmcm9tICcuL3V0aWxzL29iai1maWx0ZXIuanMnO1xuaW1wb3J0IHsgWUVycm9yIH0gZnJvbSAnLi95ZXJyb3IuanMnO1xuaW1wb3J0IHNldEJsb2NraW5nIGZyb20gJy4vdXRpbHMvc2V0LWJsb2NraW5nLmpzJztcbmZ1bmN0aW9uIGlzQm9vbGVhbihmYWlsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBmYWlsID09PSAnYm9vbGVhbic7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNhZ2UoeWFyZ3MsIHNoaW0pIHtcbiAgICBjb25zdCBfXyA9IHNoaW0ueTE4bi5fXztcbiAgICBjb25zdCBzZWxmID0ge307XG4gICAgY29uc3QgZmFpbHMgPSBbXTtcbiAgICBzZWxmLmZhaWxGbiA9IGZ1bmN0aW9uIGZhaWxGbihmKSB7XG4gICAgICAgIGZhaWxzLnB1c2goZik7XG4gICAgfTtcbiAgICBsZXQgZmFpbE1lc3NhZ2UgPSBudWxsO1xuICAgIGxldCBnbG9iYWxGYWlsTWVzc2FnZSA9IG51bGw7XG4gICAgbGV0IHNob3dIZWxwT25GYWlsID0gdHJ1ZTtcbiAgICBzZWxmLnNob3dIZWxwT25GYWlsID0gZnVuY3Rpb24gc2hvd0hlbHBPbkZhaWxGbihhcmcxID0gdHJ1ZSwgYXJnMikge1xuICAgICAgICBjb25zdCBbZW5hYmxlZCwgbWVzc2FnZV0gPSB0eXBlb2YgYXJnMSA9PT0gJ3N0cmluZycgPyBbdHJ1ZSwgYXJnMV0gOiBbYXJnMSwgYXJnMl07XG4gICAgICAgIGlmICh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5pc0dsb2JhbENvbnRleHQoKSkge1xuICAgICAgICAgICAgZ2xvYmFsRmFpbE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGZhaWxNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgc2hvd0hlbHBPbkZhaWwgPSBlbmFibGVkO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIGxldCBmYWlsdXJlT3V0cHV0ID0gZmFsc2U7XG4gICAgc2VsZi5mYWlsID0gZnVuY3Rpb24gZmFpbChtc2csIGVycikge1xuICAgICAgICBjb25zdCBsb2dnZXIgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRMb2dnZXJJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoZmFpbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZmFpbHMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmYWlsID0gZmFpbHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlzQm9vbGVhbihmYWlsKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtc2cpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbChtc2csIGVyciwgc2VsZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHlhcmdzLmdldEV4aXRQcm9jZXNzKCkpXG4gICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIWZhaWx1cmVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlT3V0cHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0hlbHBPbkZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3Muc2hvd0hlbHAoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnIHx8IGVycilcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKG1zZyB8fCBlcnIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdsb2JhbE9yQ29tbWFuZEZhaWxNZXNzYWdlID0gZmFpbE1lc3NhZ2UgfHwgZ2xvYmFsRmFpbE1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbE9yQ29tbWFuZEZhaWxNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgfHwgZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGdsb2JhbE9yQ29tbWFuZEZhaWxNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnIgPSBlcnIgfHwgbmV3IFlFcnJvcihtc2cpO1xuICAgICAgICAgICAgaWYgKHlhcmdzLmdldEV4aXRQcm9jZXNzKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWFyZ3MuZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmhhc1BhcnNlQ2FsbGJhY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5YXJncy5leGl0KDEsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCB1c2FnZXMgPSBbXTtcbiAgICBsZXQgdXNhZ2VEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHNlbGYudXNhZ2UgPSAobXNnLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBpZiAobXNnID09PSBudWxsKSB7XG4gICAgICAgICAgICB1c2FnZURpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHVzYWdlcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cbiAgICAgICAgdXNhZ2VEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB1c2FnZXMucHVzaChbbXNnLCBkZXNjcmlwdGlvbiB8fCAnJ10pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIHNlbGYuZ2V0VXNhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2FnZXM7XG4gICAgfTtcbiAgICBzZWxmLmdldFVzYWdlRGlzYWJsZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2FnZURpc2FibGVkO1xuICAgIH07XG4gICAgc2VsZi5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX18oJ1Bvc2l0aW9uYWxzOicpO1xuICAgIH07XG4gICAgbGV0IGV4YW1wbGVzID0gW107XG4gICAgc2VsZi5leGFtcGxlID0gKGNtZCwgZGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgZXhhbXBsZXMucHVzaChbY21kLCBkZXNjcmlwdGlvbiB8fCAnJ10pO1xuICAgIH07XG4gICAgbGV0IGNvbW1hbmRzID0gW107XG4gICAgc2VsZi5jb21tYW5kID0gZnVuY3Rpb24gY29tbWFuZChjbWQsIGRlc2NyaXB0aW9uLCBpc0RlZmF1bHQsIGFsaWFzZXMsIGRlcHJlY2F0ZWQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLm1hcChjbWRBcnJheSA9PiB7XG4gICAgICAgICAgICAgICAgY21kQXJyYXlbMl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY21kQXJyYXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb21tYW5kcy5wdXNoKFtjbWQsIGRlc2NyaXB0aW9uIHx8ICcnLCBpc0RlZmF1bHQsIGFsaWFzZXMsIGRlcHJlY2F0ZWRdKTtcbiAgICB9O1xuICAgIHNlbGYuZ2V0Q29tbWFuZHMgPSAoKSA9PiBjb21tYW5kcztcbiAgICBsZXQgZGVzY3JpcHRpb25zID0ge307XG4gICAgc2VsZi5kZXNjcmliZSA9IGZ1bmN0aW9uIGRlc2NyaWJlKGtleU9yS2V5cywgZGVzYykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlPcktleXMpKSB7XG4gICAgICAgICAgICBrZXlPcktleXMuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmRlc2NyaWJlKGssIGRlc2MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGtleU9yS2V5cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleU9yS2V5cykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmRlc2NyaWJlKGssIGtleU9yS2V5c1trXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uc1trZXlPcktleXNdID0gZGVzYztcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5nZXREZXNjcmlwdGlvbnMgPSAoKSA9PiBkZXNjcmlwdGlvbnM7XG4gICAgbGV0IGVwaWxvZ3MgPSBbXTtcbiAgICBzZWxmLmVwaWxvZyA9IG1zZyA9PiB7XG4gICAgICAgIGVwaWxvZ3MucHVzaChtc2cpO1xuICAgIH07XG4gICAgbGV0IHdyYXBTZXQgPSBmYWxzZTtcbiAgICBsZXQgd3JhcDtcbiAgICBzZWxmLndyYXAgPSBjb2xzID0+IHtcbiAgICAgICAgd3JhcFNldCA9IHRydWU7XG4gICAgICAgIHdyYXAgPSBjb2xzO1xuICAgIH07XG4gICAgc2VsZi5nZXRXcmFwID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2hpbS5nZXRFbnYoJ1lBUkdTX0RJU0FCTEVfV1JBUCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdyYXBTZXQpIHtcbiAgICAgICAgICAgIHdyYXAgPSB3aW5kb3dXaWR0aCgpO1xuICAgICAgICAgICAgd3JhcFNldCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdyYXA7XG4gICAgfTtcbiAgICBjb25zdCBkZWZlclkxOG5Mb29rdXBQcmVmaXggPSAnX195YXJnc1N0cmluZ19fOic7XG4gICAgc2VsZi5kZWZlclkxOG5Mb29rdXAgPSBzdHIgPT4gZGVmZXJZMThuTG9va3VwUHJlZml4ICsgc3RyO1xuICAgIHNlbGYuaGVscCA9IGZ1bmN0aW9uIGhlbHAoKSB7XG4gICAgICAgIGlmIChjYWNoZWRIZWxwTWVzc2FnZSlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRIZWxwTWVzc2FnZTtcbiAgICAgICAgbm9ybWFsaXplQWxpYXNlcygpO1xuICAgICAgICBjb25zdCBiYXNlJDAgPSB5YXJncy5jdXN0b21TY3JpcHROYW1lXG4gICAgICAgICAgICA/IHlhcmdzLiQwXG4gICAgICAgICAgICA6IHNoaW0ucGF0aC5iYXNlbmFtZSh5YXJncy4kMCk7XG4gICAgICAgIGNvbnN0IGRlbWFuZGVkT3B0aW9ucyA9IHlhcmdzLmdldERlbWFuZGVkT3B0aW9ucygpO1xuICAgICAgICBjb25zdCBkZW1hbmRlZENvbW1hbmRzID0geWFyZ3MuZ2V0RGVtYW5kZWRDb21tYW5kcygpO1xuICAgICAgICBjb25zdCBkZXByZWNhdGVkT3B0aW9ucyA9IHlhcmdzLmdldERlcHJlY2F0ZWRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IHlhcmdzLmdldEdyb3VwcygpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0geWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICBsZXQga2V5cyA9IFtdO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmtleXMoZGVzY3JpcHRpb25zKSk7XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3Qua2V5cyhkZW1hbmRlZE9wdGlvbnMpKTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5rZXlzKGRlbWFuZGVkQ29tbWFuZHMpKTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5rZXlzKG9wdGlvbnMuZGVmYXVsdCkpO1xuICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoZmlsdGVySGlkZGVuT3B0aW9ucyk7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICdfJylcbiAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSkpO1xuICAgICAgICBjb25zdCB0aGVXcmFwID0gc2VsZi5nZXRXcmFwKCk7XG4gICAgICAgIGNvbnN0IHVpID0gc2hpbS5jbGl1aSh7XG4gICAgICAgICAgICB3aWR0aDogdGhlV3JhcCxcbiAgICAgICAgICAgIHdyYXA6ICEhdGhlV3JhcCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdXNhZ2VEaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKHVzYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB1c2FnZXMuZm9yRWFjaCh1c2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdih7IHRleHQ6IGAke3VzYWdlWzBdLnJlcGxhY2UoL1xcJDAvZywgYmFzZSQwKX1gIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXNhZ2VbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLmRpdih7IHRleHQ6IGAke3VzYWdlWzFdfWAsIHBhZGRpbmc6IFsxLCAwLCAwLCAwXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChkZW1hbmRlZENvbW1hbmRzLl8pIHtcbiAgICAgICAgICAgICAgICAgICAgdSA9IGAke2Jhc2UkMH0gPCR7X18oJ2NvbW1hbmQnKX0+XFxuYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHUgPSBgJHtiYXNlJDB9IFske19fKCdjb21tYW5kJyl9XVxcbmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVpLmRpdihgJHt1fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kcy5sZW5ndGggPiAxIHx8IChjb21tYW5kcy5sZW5ndGggPT09IDEgJiYgIWNvbW1hbmRzWzBdWzJdKSkge1xuICAgICAgICAgICAgdWkuZGl2KF9fKCdDb21tYW5kczonKSk7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50Q29tbWFuZHMgPSBjb250ZXh0LmNvbW1hbmRzLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gYCR7Y29udGV4dC5jb21tYW5kcy5qb2luKCcgJyl9IGBcbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgaWYgKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFBhcnNlckNvbmZpZ3VyYXRpb24oKVsnc29ydC1jb21tYW5kcyddID09PVxuICAgICAgICAgICAgICAgIHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLnNvcnQoKGEsIGIpID0+IGFbMF0ubG9jYWxlQ29tcGFyZShiWzBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSBiYXNlJDAgPyBgJHtiYXNlJDB9IGAgOiAnJztcbiAgICAgICAgICAgIGNvbW1hbmRzLmZvckVhY2goY29tbWFuZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZFN0cmluZyA9IGAke3ByZWZpeH0ke3BhcmVudENvbW1hbmRzfSR7Y29tbWFuZFswXS5yZXBsYWNlKC9eXFwkMCA/LywgJycpfWA7XG4gICAgICAgICAgICAgICAgdWkuc3Bhbih7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGNvbW1hbmRTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAyLCAwLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoKGNvbW1hbmRzLCB0aGVXcmFwLCBgJHtiYXNlJDB9JHtwYXJlbnRDb21tYW5kc31gKSArIDQsXG4gICAgICAgICAgICAgICAgfSwgeyB0ZXh0OiBjb21tYW5kWzFdIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpbnRzID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmRbMl0pXG4gICAgICAgICAgICAgICAgICAgIGhpbnRzLnB1c2goYFske19fKCdkZWZhdWx0Jyl9XWApO1xuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kWzNdICYmIGNvbW1hbmRbM10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpbnRzLnB1c2goYFske19fKCdhbGlhc2VzOicpfSAke2NvbW1hbmRbM10uam9pbignLCAnKX1dYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kWzRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tbWFuZFs0XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnRzLnB1c2goYFske19fKCdkZXByZWNhdGVkOiAlcycsIGNvbW1hbmRbNF0pfV1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnRzLnB1c2goYFske19fKCdkZXByZWNhdGVkJyl9XWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdWkuZGl2KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGhpbnRzLmpvaW4oJyAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAwLCAwLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdWkuZGl2KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxpYXNLZXlzID0gKE9iamVjdC5rZXlzKG9wdGlvbnMuYWxpYXMpIHx8IFtdKS5jb25jYXQoT2JqZWN0LmtleXMoeWFyZ3MucGFyc2VkLm5ld0FsaWFzZXMpIHx8IFtdKTtcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiAheWFyZ3MucGFyc2VkLm5ld0FsaWFzZXNba2V5XSAmJlxuICAgICAgICAgICAgYWxpYXNLZXlzLmV2ZXJ5KGFsaWFzID0+IChvcHRpb25zLmFsaWFzW2FsaWFzXSB8fCBbXSkuaW5kZXhPZihrZXkpID09PSAtMSkpO1xuICAgICAgICBjb25zdCBkZWZhdWx0R3JvdXAgPSBfXygnT3B0aW9uczonKTtcbiAgICAgICAgaWYgKCFncm91cHNbZGVmYXVsdEdyb3VwXSlcbiAgICAgICAgICAgIGdyb3Vwc1tkZWZhdWx0R3JvdXBdID0gW107XG4gICAgICAgIGFkZFVuZ3JvdXBlZEtleXMoa2V5cywgb3B0aW9ucy5hbGlhcywgZ3JvdXBzLCBkZWZhdWx0R3JvdXApO1xuICAgICAgICBjb25zdCBpc0xvbmdTd2l0Y2ggPSAoc3cpID0+IC9eLS0vLnRlc3QoZ2V0VGV4dChzdykpO1xuICAgICAgICBjb25zdCBkaXNwbGF5ZWRHcm91cHMgPSBPYmplY3Qua2V5cyhncm91cHMpXG4gICAgICAgICAgICAuZmlsdGVyKGdyb3VwTmFtZSA9PiBncm91cHNbZ3JvdXBOYW1lXS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgLm1hcChncm91cE5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEtleXMgPSBncm91cHNbZ3JvdXBOYW1lXVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZmlsdGVySGlkZGVuT3B0aW9ucylcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFsaWFzS2V5cy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBhbGlhc0tleTsgKGFsaWFzS2V5ID0gYWxpYXNLZXlzW2ldKSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChvcHRpb25zLmFsaWFzW2FsaWFzS2V5XSB8fCBbXSkuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGlhc0tleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgZ3JvdXBOYW1lLCBub3JtYWxpemVkS2V5cyB9O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcigoeyBub3JtYWxpemVkS2V5cyB9KSA9PiBub3JtYWxpemVkS2V5cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgLm1hcCgoeyBncm91cE5hbWUsIG5vcm1hbGl6ZWRLZXlzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN3aXRjaGVzID0gbm9ybWFsaXplZEtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGFjY1trZXldID0gW2tleV1cbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChvcHRpb25zLmFsaWFzW2tleV0gfHwgW10pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoc3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBOYW1lID09PSBzZWxmLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCgvXlswLTldJC8udGVzdChzdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9wdGlvbnMuYm9vbGVhbi5pbmNsdWRlcyhrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy0tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3cubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICctLSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnLScpICsgc3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoKHN3MSwgc3cyKSA9PiBpc0xvbmdTd2l0Y2goc3cxKSA9PT0gaXNMb25nU3dpdGNoKHN3MilcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogaXNMb25nU3dpdGNoKHN3MSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAtMSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIHJldHVybiB7IGdyb3VwTmFtZSwgbm9ybWFsaXplZEtleXMsIHN3aXRjaGVzIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaG9ydFN3aXRjaGVzVXNlZCA9IGRpc3BsYXllZEdyb3Vwc1xuICAgICAgICAgICAgLmZpbHRlcigoeyBncm91cE5hbWUgfSkgPT4gZ3JvdXBOYW1lICE9PSBzZWxmLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKSlcbiAgICAgICAgICAgIC5zb21lKCh7IG5vcm1hbGl6ZWRLZXlzLCBzd2l0Y2hlcyB9KSA9PiAhbm9ybWFsaXplZEtleXMuZXZlcnkoa2V5ID0+IGlzTG9uZ1N3aXRjaChzd2l0Y2hlc1trZXldKSkpO1xuICAgICAgICBpZiAoc2hvcnRTd2l0Y2hlc1VzZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXllZEdyb3Vwc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgZ3JvdXBOYW1lIH0pID0+IGdyb3VwTmFtZSAhPT0gc2VsZi5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCkpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHsgbm9ybWFsaXplZEtleXMsIHN3aXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xvbmdTd2l0Y2goc3dpdGNoZXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaGVzW2tleV0gPSBhZGRJbmRlbnRhdGlvbihzd2l0Y2hlc1trZXldLCAnLXgsICcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheWVkR3JvdXBzLmZvckVhY2goKHsgZ3JvdXBOYW1lLCBub3JtYWxpemVkS2V5cywgc3dpdGNoZXMgfSkgPT4ge1xuICAgICAgICAgICAgdWkuZGl2KGdyb3VwTmFtZSk7XG4gICAgICAgICAgICBub3JtYWxpemVkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga3N3aXRjaCA9IHN3aXRjaGVzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IGRlc2MgPSBkZXNjcmlwdGlvbnNba2V5XSB8fCAnJztcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2MuaW5jbHVkZXMoZGVmZXJZMThuTG9va3VwUHJlZml4KSlcbiAgICAgICAgICAgICAgICAgICAgZGVzYyA9IF9fKGRlc2Muc3Vic3RyaW5nKGRlZmVyWTE4bkxvb2t1cFByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ib29sZWFuLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ2Jvb2xlYW4nKX1dYDtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb3VudC5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYFske19fKCdjb3VudCcpfV1gO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cmluZy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYFske19fKCdzdHJpbmcnKX1dYDtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ub3JtYWxpemUuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnc3RyaW5nJyl9XWA7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXJyYXkuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnYXJyYXknKX1dYDtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5udW1iZXIuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnbnVtYmVyJyl9XWA7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwcmVjYXRlZEV4dHJhID0gKGRlcHJlY2F0ZWQpID0+IHR5cGVvZiBkZXByZWNhdGVkID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICA/IGBbJHtfXygnZGVwcmVjYXRlZDogJXMnLCBkZXByZWNhdGVkKX1dYFxuICAgICAgICAgICAgICAgICAgICA6IGBbJHtfXygnZGVwcmVjYXRlZCcpfV1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhID0gW1xuICAgICAgICAgICAgICAgICAgICBrZXkgaW4gZGVwcmVjYXRlZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGVwcmVjYXRlZEV4dHJhKGRlcHJlY2F0ZWRPcHRpb25zW2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGtleSBpbiBkZW1hbmRlZE9wdGlvbnMgPyBgWyR7X18oJ3JlcXVpcmVkJyl9XWAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNob2ljZXMgJiYgb3B0aW9ucy5jaG9pY2VzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgID8gYFske19fKCdjaG9pY2VzOicpfSAke3NlbGYuc3RyaW5naWZpZWRWYWx1ZXMob3B0aW9ucy5jaG9pY2VzW2tleV0pfV1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdHJpbmcob3B0aW9ucy5kZWZhdWx0W2tleV0sIG9wdGlvbnMuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgICAgIHVpLnNwYW4oe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBnZXRUZXh0KGtzd2l0Y2gpLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbMCwgMiwgMCwgMiArIGdldEluZGVudGF0aW9uKGtzd2l0Y2gpXSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoKHN3aXRjaGVzLCB0aGVXcmFwKSArIDQsXG4gICAgICAgICAgICAgICAgfSwgZGVzYyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkSGlkZU9wdGlvbkV4dHJhcyA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlQ29uZmlndXJhdGlvbigpWydoaWRlLXR5cGVzJ10gPT09XG4gICAgICAgICAgICAgICAgICAgIHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhICYmICFzaG91bGRIaWRlT3B0aW9uRXh0cmFzKVxuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoeyB0ZXh0OiBleHRyYSwgcGFkZGluZzogWzAsIDAsIDAsIDJdLCBhbGlnbjogJ3JpZ2h0JyB9KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChleGFtcGxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVpLmRpdihfXygnRXhhbXBsZXM6JykpO1xuICAgICAgICAgICAgZXhhbXBsZXMuZm9yRWFjaChleGFtcGxlID0+IHtcbiAgICAgICAgICAgICAgICBleGFtcGxlWzBdID0gZXhhbXBsZVswXS5yZXBsYWNlKC9cXCQwL2csIGJhc2UkMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV4YW1wbGVzLmZvckVhY2goZXhhbXBsZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4YW1wbGVbMV0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdih7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBleGFtcGxlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogWzAsIDIsIDAsIDJdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdih7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBleGFtcGxlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogWzAsIDIsIDAsIDJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoKGV4YW1wbGVzLCB0aGVXcmFwKSArIDQsXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGV4YW1wbGVbMV0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdWkuZGl2KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVwaWxvZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZSA9IGVwaWxvZ3NcbiAgICAgICAgICAgICAgICAubWFwKGVwaWxvZyA9PiBlcGlsb2cucmVwbGFjZSgvXFwkMC9nLCBiYXNlJDApKVxuICAgICAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgIHVpLmRpdihgJHtlfVxcbmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1aS50b1N0cmluZygpLnJlcGxhY2UoL1xccyokLywgJycpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbWF4V2lkdGgodGFibGUsIHRoZVdyYXAsIG1vZGlmaWVyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0YWJsZSkpIHtcbiAgICAgICAgICAgIHRhYmxlID0gT2JqZWN0LnZhbHVlcyh0YWJsZSkubWFwKHYgPT4gW3ZdKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZS5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heChzaGltLnN0cmluZ1dpZHRoKG1vZGlmaWVyID8gYCR7bW9kaWZpZXJ9ICR7Z2V0VGV4dCh2WzBdKX1gIDogZ2V0VGV4dCh2WzBdKSkgKyBnZXRJbmRlbnRhdGlvbih2WzBdKSwgd2lkdGgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoZVdyYXApXG4gICAgICAgICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCBwYXJzZUludCgodGhlV3JhcCAqIDAuNSkudG9TdHJpbmcoKSwgMTApKTtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub3JtYWxpemVBbGlhc2VzKCkge1xuICAgICAgICBjb25zdCBkZW1hbmRlZE9wdGlvbnMgPSB5YXJncy5nZXREZW1hbmRlZE9wdGlvbnMoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgKE9iamVjdC5rZXlzKG9wdGlvbnMuYWxpYXMpIHx8IFtdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLmFsaWFzW2tleV0uZm9yRWFjaChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uc1thbGlhc10pXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVzY3JpYmUoa2V5LCBkZXNjcmlwdGlvbnNbYWxpYXNdKTtcbiAgICAgICAgICAgICAgICBpZiAoYWxpYXMgaW4gZGVtYW5kZWRPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5kZW1hbmRPcHRpb24oa2V5LCBkZW1hbmRlZE9wdGlvbnNbYWxpYXNdKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ib29sZWFuLmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3MuYm9vbGVhbihrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNvdW50LmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3MuY291bnQoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJpbmcuaW5jbHVkZXMoYWxpYXMpKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5zdHJpbmcoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ub3JtYWxpemUuaW5jbHVkZXMoYWxpYXMpKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5ub3JtYWxpemUoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hcnJheS5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLmFycmF5KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubnVtYmVyLmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3MubnVtYmVyKGtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBjYWNoZWRIZWxwTWVzc2FnZTtcbiAgICBzZWxmLmNhY2hlSGVscE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhY2hlZEhlbHBNZXNzYWdlID0gdGhpcy5oZWxwKCk7XG4gICAgfTtcbiAgICBzZWxmLmNsZWFyQ2FjaGVkSGVscE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhY2hlZEhlbHBNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgc2VsZi5oYXNDYWNoZWRIZWxwTWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhY2FjaGVkSGVscE1lc3NhZ2U7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRVbmdyb3VwZWRLZXlzKGtleXMsIGFsaWFzZXMsIGdyb3VwcywgZGVmYXVsdEdyb3VwKSB7XG4gICAgICAgIGxldCBncm91cGVkS2V5cyA9IFtdO1xuICAgICAgICBsZXQgdG9DaGVjayA9IG51bGw7XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgICBncm91cGVkS2V5cyA9IGdyb3VwZWRLZXlzLmNvbmNhdChncm91cHNbZ3JvdXBdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdG9DaGVjayA9IFtrZXldLmNvbmNhdChhbGlhc2VzW2tleV0pO1xuICAgICAgICAgICAgaWYgKCF0b0NoZWNrLnNvbWUoayA9PiBncm91cGVkS2V5cy5pbmRleE9mKGspICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBncm91cHNbZGVmYXVsdEdyb3VwXS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ3JvdXBlZEtleXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbHRlckhpZGRlbk9wdGlvbnMoa2V5KSB7XG4gICAgICAgIHJldHVybiAoeWFyZ3MuZ2V0T3B0aW9ucygpLmhpZGRlbk9wdGlvbnMuaW5kZXhPZihrZXkpIDwgMCB8fFxuICAgICAgICAgICAgeWFyZ3MucGFyc2VkLmFyZ3ZbeWFyZ3MuZ2V0T3B0aW9ucygpLnNob3dIaWRkZW5PcHRdKTtcbiAgICB9XG4gICAgc2VsZi5zaG93SGVscCA9IChsZXZlbCkgPT4ge1xuICAgICAgICBjb25zdCBsb2dnZXIgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRMb2dnZXJJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoIWxldmVsKVxuICAgICAgICAgICAgbGV2ZWwgPSAnZXJyb3InO1xuICAgICAgICBjb25zdCBlbWl0ID0gdHlwZW9mIGxldmVsID09PSAnZnVuY3Rpb24nID8gbGV2ZWwgOiBsb2dnZXJbbGV2ZWxdO1xuICAgICAgICBlbWl0KHNlbGYuaGVscCgpKTtcbiAgICB9O1xuICAgIHNlbGYuZnVuY3Rpb25EZXNjcmlwdGlvbiA9IGZuID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBmbi5uYW1lXG4gICAgICAgICAgICA/IHNoaW0uUGFyc2VyLmRlY2FtZWxpemUoZm4ubmFtZSwgJy0nKVxuICAgICAgICAgICAgOiBfXygnZ2VuZXJhdGVkLXZhbHVlJyk7XG4gICAgICAgIHJldHVybiBbJygnLCBkZXNjcmlwdGlvbiwgJyknXS5qb2luKCcnKTtcbiAgICB9O1xuICAgIHNlbGYuc3RyaW5naWZpZWRWYWx1ZXMgPSBmdW5jdGlvbiBzdHJpbmdpZmllZFZhbHVlcyh2YWx1ZXMsIHNlcGFyYXRvcikge1xuICAgICAgICBsZXQgc3RyaW5nID0gJyc7XG4gICAgICAgIGNvbnN0IHNlcCA9IHNlcGFyYXRvciB8fCAnLCAnO1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdLmNvbmNhdCh2YWx1ZXMpO1xuICAgICAgICBpZiAoIXZhbHVlcyB8fCAhYXJyYXkubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgYXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RyaW5nLmxlbmd0aClcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gc2VwO1xuICAgICAgICAgICAgc3RyaW5nICs9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBkZWZhdWx0U3RyaW5nKHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IHN0cmluZyA9IGBbJHtfXygnZGVmYXVsdDonKX0gYDtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIWRlZmF1bHREZXNjcmlwdGlvbilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gZGVmYXVsdERlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gYFwiJHt2YWx1ZX1cImA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7c3RyaW5nfV1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3aW5kb3dXaWR0aCgpIHtcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSA4MDtcbiAgICAgICAgaWYgKHNoaW0ucHJvY2Vzcy5zdGRDb2x1bW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4obWF4V2lkdGgsIHNoaW0ucHJvY2Vzcy5zdGRDb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtYXhXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgdmVyc2lvbiA9IG51bGw7XG4gICAgc2VsZi52ZXJzaW9uID0gdmVyID0+IHtcbiAgICAgICAgdmVyc2lvbiA9IHZlcjtcbiAgICB9O1xuICAgIHNlbGYuc2hvd1ZlcnNpb24gPSBsZXZlbCA9PiB7XG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldExvZ2dlckluc3RhbmNlKCk7XG4gICAgICAgIGlmICghbGV2ZWwpXG4gICAgICAgICAgICBsZXZlbCA9ICdlcnJvcic7XG4gICAgICAgIGNvbnN0IGVtaXQgPSB0eXBlb2YgbGV2ZWwgPT09ICdmdW5jdGlvbicgPyBsZXZlbCA6IGxvZ2dlcltsZXZlbF07XG4gICAgICAgIGVtaXQodmVyc2lvbik7XG4gICAgfTtcbiAgICBzZWxmLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQobG9jYWxMb29rdXApIHtcbiAgICAgICAgZmFpbE1lc3NhZ2UgPSBudWxsO1xuICAgICAgICBmYWlsdXJlT3V0cHV0ID0gZmFsc2U7XG4gICAgICAgIHVzYWdlcyA9IFtdO1xuICAgICAgICB1c2FnZURpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGVwaWxvZ3MgPSBbXTtcbiAgICAgICAgZXhhbXBsZXMgPSBbXTtcbiAgICAgICAgY29tbWFuZHMgPSBbXTtcbiAgICAgICAgZGVzY3JpcHRpb25zID0gb2JqRmlsdGVyKGRlc2NyaXB0aW9ucywgayA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIGNvbnN0IGZyb3plbnMgPSBbXTtcbiAgICBzZWxmLmZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICAgICAgZnJvemVucy5wdXNoKHtcbiAgICAgICAgICAgIGZhaWxNZXNzYWdlLFxuICAgICAgICAgICAgZmFpbHVyZU91dHB1dCxcbiAgICAgICAgICAgIHVzYWdlcyxcbiAgICAgICAgICAgIHVzYWdlRGlzYWJsZWQsXG4gICAgICAgICAgICBlcGlsb2dzLFxuICAgICAgICAgICAgZXhhbXBsZXMsXG4gICAgICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBzZWxmLnVuZnJlZXplID0gZnVuY3Rpb24gdW5mcmVlemUoZGVmYXVsdENvbW1hbmQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBmcm96ZW4gPSBmcm96ZW5zLnBvcCgpO1xuICAgICAgICBpZiAoIWZyb3plbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGRlZmF1bHRDb21tYW5kKSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbnMgPSB7IC4uLmZyb3plbi5kZXNjcmlwdGlvbnMsIC4uLmRlc2NyaXB0aW9ucyB9O1xuICAgICAgICAgICAgY29tbWFuZHMgPSBbLi4uZnJvemVuLmNvbW1hbmRzLCAuLi5jb21tYW5kc107XG4gICAgICAgICAgICB1c2FnZXMgPSBbLi4uZnJvemVuLnVzYWdlcywgLi4udXNhZ2VzXTtcbiAgICAgICAgICAgIGV4YW1wbGVzID0gWy4uLmZyb3plbi5leGFtcGxlcywgLi4uZXhhbXBsZXNdO1xuICAgICAgICAgICAgZXBpbG9ncyA9IFsuLi5mcm96ZW4uZXBpbG9ncywgLi4uZXBpbG9nc107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIGZhaWxNZXNzYWdlLFxuICAgICAgICAgICAgICAgIGZhaWx1cmVPdXRwdXQsXG4gICAgICAgICAgICAgICAgdXNhZ2VzLFxuICAgICAgICAgICAgICAgIHVzYWdlRGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgZXBpbG9ncyxcbiAgICAgICAgICAgICAgICBleGFtcGxlcyxcbiAgICAgICAgICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbnMsXG4gICAgICAgICAgICB9ID0gZnJvemVuKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHNlbGY7XG59XG5mdW5jdGlvbiBpc0luZGVudGVkVGV4dCh0ZXh0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0ZXh0ID09PSAnb2JqZWN0Jztcbn1cbmZ1bmN0aW9uIGFkZEluZGVudGF0aW9uKHRleHQsIGluZGVudCkge1xuICAgIHJldHVybiBpc0luZGVudGVkVGV4dCh0ZXh0KVxuICAgICAgICA/IHsgdGV4dDogdGV4dC50ZXh0LCBpbmRlbnRhdGlvbjogdGV4dC5pbmRlbnRhdGlvbiArIGluZGVudCB9XG4gICAgICAgIDogeyB0ZXh0LCBpbmRlbnRhdGlvbjogaW5kZW50IH07XG59XG5mdW5jdGlvbiBnZXRJbmRlbnRhdGlvbih0ZXh0KSB7XG4gICAgcmV0dXJuIGlzSW5kZW50ZWRUZXh0KHRleHQpID8gdGV4dC5pbmRlbnRhdGlvbiA6IDA7XG59XG5mdW5jdGlvbiBnZXRUZXh0KHRleHQpIHtcbiAgICByZXR1cm4gaXNJbmRlbnRlZFRleHQodGV4dCkgPyB0ZXh0LnRleHQgOiB0ZXh0O1xufVxuIiwgImV4cG9ydCBjb25zdCBjb21wbGV0aW9uU2hUZW1wbGF0ZSA9IGAjIyMtYmVnaW4te3thcHBfbmFtZX19LWNvbXBsZXRpb25zLSMjI1xuI1xuIyB5YXJncyBjb21tYW5kIGNvbXBsZXRpb24gc2NyaXB0XG4jXG4jIEluc3RhbGxhdGlvbjoge3thcHBfcGF0aH19IHt7Y29tcGxldGlvbl9jb21tYW5kfX0gPj4gfi8uYmFzaHJjXG4jICAgIG9yIHt7YXBwX3BhdGh9fSB7e2NvbXBsZXRpb25fY29tbWFuZH19ID4+IH4vLmJhc2hfcHJvZmlsZSBvbiBPU1guXG4jXG5fe3thcHBfbmFtZX19X3lhcmdzX2NvbXBsZXRpb25zKClcbntcbiAgICBsb2NhbCBjdXJfd29yZCBhcmdzIHR5cGVfbGlzdFxuXG4gICAgY3VyX3dvcmQ9XCJcXCR7Q09NUF9XT1JEU1tDT01QX0NXT1JEXX1cIlxuICAgIGFyZ3M9KFwiXFwke0NPTVBfV09SRFNbQF19XCIpXG5cbiAgICAjIGFzayB5YXJncyB0byBnZW5lcmF0ZSBjb21wbGV0aW9ucy5cbiAgICAjIHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDA5NDQxOTUvNzA4MDAzNiBmb3IgdGhlIHNwYWNlcy1oYW5kbGluZyBhd2tcbiAgICBtYXBmaWxlIC10IHR5cGVfbGlzdCA8IDwoe3thcHBfcGF0aH19IC0tZ2V0LXlhcmdzLWNvbXBsZXRpb25zIFwiXFwke2FyZ3NbQF19XCIpXG4gICAgbWFwZmlsZSAtdCBDT01QUkVQTFkgPCA8KGNvbXBnZW4gLVcgXCIkKCBwcmludGYgJyVxICcgXCJcXCR7dHlwZV9saXN0W0BdfVwiIClcIiAtLSBcIlxcJHtjdXJfd29yZH1cIiB8XG4gICAgICAgIGF3ayAnLyAvIHsgcHJpbnQgXCJcXFxcXCJcIiQwXCJcXFxcXCJcIiB9IC9eW14gXSskLyB7IHByaW50ICQwIH0nKVxuXG4gICAgIyBpZiBubyBtYXRjaCB3YXMgZm91bmQsIGZhbGwgYmFjayB0byBmaWxlbmFtZSBjb21wbGV0aW9uXG4gICAgaWYgWyBcXCR7I0NPTVBSRVBMWVtAXX0gLWVxIDAgXTsgdGhlblxuICAgICAgQ09NUFJFUExZPSgpXG4gICAgZmlcblxuICAgIHJldHVybiAwXG59XG5jb21wbGV0ZSAtbyBiYXNoZGVmYXVsdCAtbyBkZWZhdWx0IC1GIF97e2FwcF9uYW1lfX1feWFyZ3NfY29tcGxldGlvbnMge3thcHBfbmFtZX19XG4jIyMtZW5kLXt7YXBwX25hbWV9fS1jb21wbGV0aW9ucy0jIyNcbmA7XG5leHBvcnQgY29uc3QgY29tcGxldGlvblpzaFRlbXBsYXRlID0gYCNjb21wZGVmIHt7YXBwX25hbWV9fVxuIyMjLWJlZ2luLXt7YXBwX25hbWV9fS1jb21wbGV0aW9ucy0jIyNcbiNcbiMgeWFyZ3MgY29tbWFuZCBjb21wbGV0aW9uIHNjcmlwdFxuI1xuIyBJbnN0YWxsYXRpb246IHt7YXBwX3BhdGh9fSB7e2NvbXBsZXRpb25fY29tbWFuZH19ID4+IH4vLnpzaHJjXG4jICAgIG9yIHt7YXBwX3BhdGh9fSB7e2NvbXBsZXRpb25fY29tbWFuZH19ID4+IH4vLnpwcm9maWxlIG9uIE9TWC5cbiNcbl97e2FwcF9uYW1lfX1feWFyZ3NfY29tcGxldGlvbnMoKVxue1xuICBsb2NhbCByZXBseVxuICBsb2NhbCBzaT0kSUZTXG4gIElGUz0kJ1xcbicgcmVwbHk9KCQoQ09NUF9DV09SRD1cIiQoKENVUlJFTlQtMSkpXCIgQ09NUF9MSU5FPVwiJEJVRkZFUlwiIENPTVBfUE9JTlQ9XCIkQ1VSU09SXCIge3thcHBfcGF0aH19IC0tZ2V0LXlhcmdzLWNvbXBsZXRpb25zIFwiXFwke3dvcmRzW0BdfVwiKSlcbiAgSUZTPSRzaVxuICBpZiBbWyBcXCR7I3JlcGx5fSAtZ3QgMCBdXTsgdGhlblxuICAgIF9kZXNjcmliZSAndmFsdWVzJyByZXBseVxuICBlbHNlXG4gICAgX2RlZmF1bHRcbiAgZmlcbn1cbmlmIFtbIFwiJ1xcJHt6c2hfZXZhbF9jb250ZXh0Wy0xXX1cIiA9PSBcImxvYWRhdXRvZnVuY1wiIF1dOyB0aGVuXG4gIF97e2FwcF9uYW1lfX1feWFyZ3NfY29tcGxldGlvbnMgXCIkQFwiXG5lbHNlXG4gIGNvbXBkZWYgX3t7YXBwX25hbWV9fV95YXJnc19jb21wbGV0aW9ucyB7e2FwcF9uYW1lfX1cbmZpXG4jIyMtZW5kLXt7YXBwX25hbWV9fS1jb21wbGV0aW9ucy0jIyNcbmA7XG4iLCAiaW1wb3J0IHsgaXNDb21tYW5kQnVpbGRlckNhbGxiYWNrIH0gZnJvbSAnLi9jb21tYW5kLmpzJztcbmltcG9ydCB7IGFzc2VydE5vdFN0cmljdEVxdWFsIH0gZnJvbSAnLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5pbXBvcnQgKiBhcyB0ZW1wbGF0ZXMgZnJvbSAnLi9jb21wbGV0aW9uLXRlbXBsYXRlcy5qcyc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuL3V0aWxzL2lzLXByb21pc2UuanMnO1xuaW1wb3J0IHsgcGFyc2VDb21tYW5kIH0gZnJvbSAnLi9wYXJzZS1jb21tYW5kLmpzJztcbmV4cG9ydCBjbGFzcyBDb21wbGV0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih5YXJncywgdXNhZ2UsIGNvbW1hbmQsIHNoaW0pIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHRoaXMueWFyZ3MgPSB5YXJncztcbiAgICAgICAgdGhpcy51c2FnZSA9IHVzYWdlO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBjb21tYW5kO1xuICAgICAgICB0aGlzLnNoaW0gPSBzaGltO1xuICAgICAgICB0aGlzLmNvbXBsZXRpb25LZXkgPSAnZ2V0LXlhcmdzLWNvbXBsZXRpb25zJztcbiAgICAgICAgdGhpcy5hbGlhc2VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmluZGV4QWZ0ZXJMYXN0UmVzZXQgPSAwO1xuICAgICAgICB0aGlzLnpzaFNoZWxsID1cbiAgICAgICAgICAgIChfYyA9ICgoKF9hID0gdGhpcy5zaGltLmdldEVudignU0hFTEwnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCd6c2gnKSkgfHxcbiAgICAgICAgICAgICAgICAoKF9iID0gdGhpcy5zaGltLmdldEVudignWlNIX05BTUUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluY2x1ZGVzKCd6c2gnKSkpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBmYWxzZTtcbiAgICB9XG4gICAgZGVmYXVsdENvbXBsZXRpb24oYXJncywgYXJndiwgY3VycmVudCwgZG9uZSkge1xuICAgICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuY29tbWFuZC5nZXRDb21tYW5kSGFuZGxlcnMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gYXJncy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlcnNbYXJnc1tpXV0gJiYgaGFuZGxlcnNbYXJnc1tpXV0uYnVpbGRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1aWxkZXIgPSBoYW5kbGVyc1thcmdzW2ldXS5idWlsZGVyO1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbW1hbmRCdWlsZGVyQ2FsbGJhY2soYnVpbGRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleEFmdGVyTGFzdFJlc2V0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLnlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkZXIoeSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5LmFyZ3Y7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb25zID0gW107XG4gICAgICAgIHRoaXMuY29tbWFuZENvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBjdXJyZW50KTtcbiAgICAgICAgdGhpcy5vcHRpb25Db21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCk7XG4gICAgICAgIHRoaXMuY2hvaWNlc0Zyb21PcHRpb25zQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpO1xuICAgICAgICB0aGlzLmNob2ljZXNGcm9tUG9zaXRpb25hbHNDb21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCk7XG4gICAgICAgIGRvbmUobnVsbCwgY29tcGxldGlvbnMpO1xuICAgIH1cbiAgICBjb21tYW5kQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Q29tbWFuZHMgPSB0aGlzLnlhcmdzXG4gICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgIC5nZXRDb250ZXh0KCkuY29tbWFuZHM7XG4gICAgICAgIGlmICghY3VycmVudC5tYXRjaCgvXi0vKSAmJlxuICAgICAgICAgICAgcGFyZW50Q29tbWFuZHNbcGFyZW50Q29tbWFuZHMubGVuZ3RoIC0gMV0gIT09IGN1cnJlbnQgJiZcbiAgICAgICAgICAgICF0aGlzLnByZXZpb3VzQXJnSGFzQ2hvaWNlcyhhcmdzKSkge1xuICAgICAgICAgICAgdGhpcy51c2FnZS5nZXRDb21tYW5kcygpLmZvckVhY2godXNhZ2VDb21tYW5kID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kTmFtZSA9IHBhcnNlQ29tbWFuZCh1c2FnZUNvbW1hbmRbMF0pLmNtZDtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5pbmRleE9mKGNvbW1hbmROYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnpzaFNoZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGNvbW1hbmROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2MgPSB1c2FnZUNvbW1hbmRbMV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGNvbW1hbmROYW1lLnJlcGxhY2UoLzovZywgJ1xcXFw6JykgKyAnOicgKyBkZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9wdGlvbkNvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KSB7XG4gICAgICAgIGlmICgoY3VycmVudC5tYXRjaCgvXi0vKSB8fCAoY3VycmVudCA9PT0gJycgJiYgY29tcGxldGlvbnMubGVuZ3RoID09PSAwKSkgJiZcbiAgICAgICAgICAgICF0aGlzLnByZXZpb3VzQXJnSGFzQ2hvaWNlcyhhcmdzKSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMueWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25hbEtleXMgPSB0aGlzLnlhcmdzLmdldEdyb3VwcygpW3RoaXMudXNhZ2UuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSgpXSB8fCBbXTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMua2V5KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmVnYWJsZSA9ICEhb3B0aW9ucy5jb25maWd1cmF0aW9uWydib29sZWFuLW5lZ2F0aW9uJ10gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ib29sZWFuLmluY2x1ZGVzKGtleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNQb3NpdGlvbmFsS2V5ID0gcG9zaXRpb25hbEtleXMuaW5jbHVkZXMoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUG9zaXRpb25hbEtleSAmJlxuICAgICAgICAgICAgICAgICAgICAhb3B0aW9ucy5oaWRkZW5PcHRpb25zLmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuYXJnc0NvbnRhaW5LZXkoYXJncywga2V5LCBuZWdhYmxlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlT3B0aW9uS2V5KGtleSwgY29tcGxldGlvbnMsIGN1cnJlbnQsIG5lZ2FibGUgJiYgISFvcHRpb25zLmRlZmF1bHRba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hvaWNlc0Zyb21PcHRpb25zQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNBcmdIYXNDaG9pY2VzKGFyZ3MpKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9pY2VzID0gdGhpcy5nZXRQcmV2aW91c0FyZ0Nob2ljZXMoYXJncyk7XG4gICAgICAgICAgICBpZiAoY2hvaWNlcyAmJiBjaG9pY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKC4uLmNob2ljZXMubWFwKGMgPT4gYy5yZXBsYWNlKC86L2csICdcXFxcOicpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hvaWNlc0Zyb21Qb3NpdGlvbmFsc0NvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KSB7XG4gICAgICAgIGlmIChjdXJyZW50ID09PSAnJyAmJlxuICAgICAgICAgICAgY29tcGxldGlvbnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3NpdGlvbmFsS2V5cyA9IHRoaXMueWFyZ3MuZ2V0R3JvdXBzKClbdGhpcy51c2FnZS5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCldIHx8IFtdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBNYXRoLm1heCh0aGlzLmluZGV4QWZ0ZXJMYXN0UmVzZXQsIHRoaXMueWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0Q29udGV4dCgpLmNvbW1hbmRzLmxlbmd0aCArXG4gICAgICAgICAgICAxKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25hbEtleSA9IHBvc2l0aW9uYWxLZXlzW2FyZ3YuXy5sZW5ndGggLSBvZmZzZXQgLSAxXTtcbiAgICAgICAgaWYgKCFwb3NpdGlvbmFsS2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hvaWNlcyA9IHRoaXMueWFyZ3MuZ2V0T3B0aW9ucygpLmNob2ljZXNbcG9zaXRpb25hbEtleV0gfHwgW107XG4gICAgICAgIGZvciAoY29uc3QgY2hvaWNlIG9mIGNob2ljZXMpIHtcbiAgICAgICAgICAgIGlmIChjaG9pY2Uuc3RhcnRzV2l0aChjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zLnB1c2goY2hvaWNlLnJlcGxhY2UoLzovZywgJ1xcXFw6JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldFByZXZpb3VzQXJnQ2hvaWNlcyhhcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBwcmV2aW91c0FyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgICBpZiAoIXByZXZpb3VzQXJnLnN0YXJ0c1dpdGgoJy0nKSAmJiBhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZpbHRlciA9IHByZXZpb3VzQXJnO1xuICAgICAgICAgICAgcHJldmlvdXNBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcmV2aW91c0FyZy5zdGFydHNXaXRoKCctJykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQXJnS2V5ID0gcHJldmlvdXNBcmcucmVwbGFjZSgvXi0rLywgJycpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy55YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IHBvc3NpYmxlQWxpYXNlcyA9IFtcbiAgICAgICAgICAgIHByZXZpb3VzQXJnS2V5LFxuICAgICAgICAgICAgLi4uKHRoaXMueWFyZ3MuZ2V0QWxpYXNlcygpW3ByZXZpb3VzQXJnS2V5XSB8fCBbXSksXG4gICAgICAgIF07XG4gICAgICAgIGxldCBjaG9pY2VzO1xuICAgICAgICBmb3IgKGNvbnN0IHBvc3NpYmxlQWxpYXMgb2YgcG9zc2libGVBbGlhc2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMua2V5LCBwb3NzaWJsZUFsaWFzKSAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkob3B0aW9ucy5jaG9pY2VzW3Bvc3NpYmxlQWxpYXNdKSkge1xuICAgICAgICAgICAgICAgIGNob2ljZXMgPSBvcHRpb25zLmNob2ljZXNbcG9zc2libGVBbGlhc107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNob2ljZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjaG9pY2VzLmZpbHRlcihjaG9pY2UgPT4gIWZpbHRlciB8fCBjaG9pY2Uuc3RhcnRzV2l0aChmaWx0ZXIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykge1xuICAgICAgICBjb25zdCBjaG9pY2VzID0gdGhpcy5nZXRQcmV2aW91c0FyZ0Nob2ljZXMoYXJncyk7XG4gICAgICAgIHJldHVybiBjaG9pY2VzICE9PSB1bmRlZmluZWQgJiYgY2hvaWNlcy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmdzQ29udGFpbktleShhcmdzLCBrZXksIG5lZ2FibGUpIHtcbiAgICAgICAgY29uc3QgYXJnc0NvbnRhaW5zID0gKHMpID0+IGFyZ3MuaW5kZXhPZigoL15bXjAtOV0kLy50ZXN0KHMpID8gJy0nIDogJy0tJykgKyBzKSAhPT0gLTE7XG4gICAgICAgIGlmIChhcmdzQ29udGFpbnMoa2V5KSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAobmVnYWJsZSAmJiBhcmdzQ29udGFpbnMoYG5vLSR7a2V5fWApKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLmFsaWFzZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgdGhpcy5hbGlhc2VzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJnc0NvbnRhaW5zKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb21wbGV0ZU9wdGlvbktleShrZXksIGNvbXBsZXRpb25zLCBjdXJyZW50LCBuZWdhYmxlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgbGV0IGtleVdpdGhEZXNjID0ga2V5O1xuICAgICAgICBpZiAodGhpcy56c2hTaGVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGVzY3MgPSB0aGlzLnVzYWdlLmdldERlc2NyaXB0aW9ucygpO1xuICAgICAgICAgICAgY29uc3QgYWxpYXNLZXkgPSAoX2IgPSAoX2EgPSB0aGlzID09PSBudWxsIHx8IHRoaXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRoaXMuYWxpYXNlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5maW5kKGFsaWFzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjID0gZGVzY3NbYWxpYXNdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGVzYyA9PT0gJ3N0cmluZycgJiYgZGVzYy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkZXNjRnJvbUFsaWFzID0gYWxpYXNLZXkgPyBkZXNjc1thbGlhc0tleV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gKF9kID0gKF9jID0gZGVzY3Nba2V5XSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZGVzY0Zyb21BbGlhcykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgICAgICAgICBrZXlXaXRoRGVzYyA9IGAke2tleS5yZXBsYWNlKC86L2csICdcXFxcOicpfToke2Rlc2NcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnX195YXJnc1N0cmluZ19fOicsICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnICcpfWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRzQnlUd29EYXNoZXMgPSAocykgPT4gL14tLS8udGVzdChzKTtcbiAgICAgICAgY29uc3QgaXNTaG9ydE9wdGlvbiA9IChzKSA9PiAvXlteMC05XSQvLnRlc3Qocyk7XG4gICAgICAgIGNvbnN0IGRhc2hlcyA9ICFzdGFydHNCeVR3b0Rhc2hlcyhjdXJyZW50KSAmJiBpc1Nob3J0T3B0aW9uKGtleSkgPyAnLScgOiAnLS0nO1xuICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGRhc2hlcyArIGtleVdpdGhEZXNjKTtcbiAgICAgICAgaWYgKG5lZ2FibGUpIHtcbiAgICAgICAgICAgIGNvbXBsZXRpb25zLnB1c2goZGFzaGVzICsgJ25vLScgKyBrZXlXaXRoRGVzYyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3VzdG9tQ29tcGxldGlvbihhcmdzLCBhcmd2LCBjdXJyZW50LCBkb25lKSB7XG4gICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uLCBudWxsLCB0aGlzLnNoaW0pO1xuICAgICAgICBpZiAoaXNTeW5jQ29tcGxldGlvbkZ1bmN0aW9uKHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb24oY3VycmVudCwgYXJndik7XG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGxpc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaW0ucHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKG51bGwsIGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGltLnByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZShlcnIsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0ZhbGxiYWNrQ29tcGxldGlvbkZ1bmN0aW9uKHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uKGN1cnJlbnQsIGFyZ3YsIChvbkNvbXBsZXRlZCA9IGRvbmUpID0+IHRoaXMuZGVmYXVsdENvbXBsZXRpb24oYXJncywgYXJndiwgY3VycmVudCwgb25Db21wbGV0ZWQpLCBjb21wbGV0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgZG9uZShudWxsLCBjb21wbGV0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbihjdXJyZW50LCBhcmd2LCBjb21wbGV0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgZG9uZShudWxsLCBjb21wbGV0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDb21wbGV0aW9uKGFyZ3MsIGRvbmUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGFyZ3MubGVuZ3RoID8gYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogJyc7XG4gICAgICAgIGNvbnN0IGFyZ3YgPSB0aGlzLnlhcmdzLnBhcnNlKGFyZ3MsIHRydWUpO1xuICAgICAgICBjb25zdCBjb21wbGV0aW9uRnVuY3Rpb24gPSB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvblxuICAgICAgICAgICAgPyAoYXJndikgPT4gdGhpcy5jdXN0b21Db21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIGRvbmUpXG4gICAgICAgICAgICA6IChhcmd2KSA9PiB0aGlzLmRlZmF1bHRDb21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIGRvbmUpO1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKGFyZ3YpXG4gICAgICAgICAgICA/IGFyZ3YudGhlbihjb21wbGV0aW9uRnVuY3Rpb24pXG4gICAgICAgICAgICA6IGNvbXBsZXRpb25GdW5jdGlvbihhcmd2KTtcbiAgICB9XG4gICAgZ2VuZXJhdGVDb21wbGV0aW9uU2NyaXB0KCQwLCBjbWQpIHtcbiAgICAgICAgbGV0IHNjcmlwdCA9IHRoaXMuenNoU2hlbGxcbiAgICAgICAgICAgID8gdGVtcGxhdGVzLmNvbXBsZXRpb25ac2hUZW1wbGF0ZVxuICAgICAgICAgICAgOiB0ZW1wbGF0ZXMuY29tcGxldGlvblNoVGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnNoaW0ucGF0aC5iYXNlbmFtZSgkMCk7XG4gICAgICAgIGlmICgkMC5tYXRjaCgvXFwuanMkLykpXG4gICAgICAgICAgICAkMCA9IGAuLyR7JDB9YDtcbiAgICAgICAgc2NyaXB0ID0gc2NyaXB0LnJlcGxhY2UoL3t7YXBwX25hbWV9fS9nLCBuYW1lKTtcbiAgICAgICAgc2NyaXB0ID0gc2NyaXB0LnJlcGxhY2UoL3t7Y29tcGxldGlvbl9jb21tYW5kfX0vZywgY21kKTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdC5yZXBsYWNlKC97e2FwcF9wYXRofX0vZywgJDApO1xuICAgIH1cbiAgICByZWdpc3RlckZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uID0gZm47XG4gICAgfVxuICAgIHNldFBhcnNlZChwYXJzZWQpIHtcbiAgICAgICAgdGhpcy5hbGlhc2VzID0gcGFyc2VkLmFsaWFzZXM7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRpb24oeWFyZ3MsIHVzYWdlLCBjb21tYW5kLCBzaGltKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wbGV0aW9uKHlhcmdzLCB1c2FnZSwgY29tbWFuZCwgc2hpbSk7XG59XG5mdW5jdGlvbiBpc1N5bmNDb21wbGV0aW9uRnVuY3Rpb24oY29tcGxldGlvbkZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbXBsZXRpb25GdW5jdGlvbi5sZW5ndGggPCAzO1xufVxuZnVuY3Rpb24gaXNGYWxsYmFja0NvbXBsZXRpb25GdW5jdGlvbihjb21wbGV0aW9uRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gY29tcGxldGlvbkZ1bmN0aW9uLmxlbmd0aCA+IDM7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGxldmVuc2h0ZWluKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBiLmxlbmd0aDtcbiAgICBpZiAoYi5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBhLmxlbmd0aDtcbiAgICBjb25zdCBtYXRyaXggPSBbXTtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDw9IGIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWF0cml4W2ldID0gW2ldO1xuICAgIH1cbiAgICBsZXQgajtcbiAgICBmb3IgKGogPSAwOyBqIDw9IGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbWF0cml4WzBdW2pdID0gajtcbiAgICB9XG4gICAgZm9yIChpID0gMTsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAoaiA9IDE7IGogPD0gYS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGIuY2hhckF0KGkgLSAxKSA9PT0gYS5jaGFyQXQoaiAtIDEpKSB7XG4gICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdID0gbWF0cml4W2kgLSAxXVtqIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgaiA+IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgYi5jaGFyQXQoaSAtIDIpID09PSBhLmNoYXJBdChqIC0gMSkgJiZcbiAgICAgICAgICAgICAgICAgICAgYi5jaGFyQXQoaSAtIDEpID09PSBhLmNoYXJBdChqIC0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdID0gbWF0cml4W2kgLSAyXVtqIC0gMl0gKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdID0gTWF0aC5taW4obWF0cml4W2kgLSAxXVtqIC0gMV0gKyAxLCBNYXRoLm1pbihtYXRyaXhbaV1baiAtIDFdICsgMSwgbWF0cml4W2kgLSAxXVtqXSArIDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeFtiLmxlbmd0aF1bYS5sZW5ndGhdO1xufVxuIiwgImltcG9ydCB7IGFyZ3NlcnQgfSBmcm9tICcuL2FyZ3NlcnQuanMnO1xuaW1wb3J0IHsgYXNzZXJ0Tm90U3RyaWN0RXF1YWwsIH0gZnJvbSAnLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5pbXBvcnQgeyBsZXZlbnNodGVpbiBhcyBkaXN0YW5jZSB9IGZyb20gJy4vdXRpbHMvbGV2ZW5zaHRlaW4uanMnO1xuaW1wb3J0IHsgb2JqRmlsdGVyIH0gZnJvbSAnLi91dGlscy9vYmotZmlsdGVyLmpzJztcbmNvbnN0IHNwZWNpYWxLZXlzID0gWyckMCcsICctLScsICdfJ107XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGlvbih5YXJncywgdXNhZ2UsIHNoaW0pIHtcbiAgICBjb25zdCBfXyA9IHNoaW0ueTE4bi5fXztcbiAgICBjb25zdCBfX24gPSBzaGltLnkxOG4uX19uO1xuICAgIGNvbnN0IHNlbGYgPSB7fTtcbiAgICBzZWxmLm5vbk9wdGlvbkNvdW50ID0gZnVuY3Rpb24gbm9uT3B0aW9uQ291bnQoYXJndikge1xuICAgICAgICBjb25zdCBkZW1hbmRlZENvbW1hbmRzID0geWFyZ3MuZ2V0RGVtYW5kZWRDb21tYW5kcygpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbmFsQ291bnQgPSBhcmd2Ll8ubGVuZ3RoICsgKGFyZ3ZbJy0tJ10gPyBhcmd2WyctLSddLmxlbmd0aCA6IDApO1xuICAgICAgICBjb25zdCBfcyA9IHBvc2l0aW9uYWxDb3VudCAtIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKS5jb21tYW5kcy5sZW5ndGg7XG4gICAgICAgIGlmIChkZW1hbmRlZENvbW1hbmRzLl8gJiZcbiAgICAgICAgICAgIChfcyA8IGRlbWFuZGVkQ29tbWFuZHMuXy5taW4gfHwgX3MgPiBkZW1hbmRlZENvbW1hbmRzLl8ubWF4KSkge1xuICAgICAgICAgICAgaWYgKF9zIDwgZGVtYW5kZWRDb21tYW5kcy5fLm1pbikge1xuICAgICAgICAgICAgICAgIGlmIChkZW1hbmRlZENvbW1hbmRzLl8ubWluTXNnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNhZ2UuZmFpbChkZW1hbmRlZENvbW1hbmRzLl8ubWluTXNnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRlbWFuZGVkQ29tbWFuZHMuXy5taW5Nc2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMC9nLCBfcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCQxLywgZGVtYW5kZWRDb21tYW5kcy5fLm1pbi50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdOb3QgZW5vdWdoIG5vbi1vcHRpb24gYXJndW1lbnRzOiBnb3QgJXMsIG5lZWQgYXQgbGVhc3QgJXMnLCAnTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgX3MsIF9zLnRvU3RyaW5nKCksIGRlbWFuZGVkQ29tbWFuZHMuXy5taW4udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9zID4gZGVtYW5kZWRDb21tYW5kcy5fLm1heCkge1xuICAgICAgICAgICAgICAgIGlmIChkZW1hbmRlZENvbW1hbmRzLl8ubWF4TXNnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNhZ2UuZmFpbChkZW1hbmRlZENvbW1hbmRzLl8ubWF4TXNnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRlbWFuZGVkQ29tbWFuZHMuXy5tYXhNc2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMC9nLCBfcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCQxLywgZGVtYW5kZWRDb21tYW5kcy5fLm1heC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdUb28gbWFueSBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBtYXhpbXVtIG9mICVzJywgJ1RvbyBtYW55IG5vbi1vcHRpb24gYXJndW1lbnRzOiBnb3QgJXMsIG1heGltdW0gb2YgJXMnLCBfcywgX3MudG9TdHJpbmcoKSwgZGVtYW5kZWRDb21tYW5kcy5fLm1heC50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLnBvc2l0aW9uYWxDb3VudCA9IGZ1bmN0aW9uIHBvc2l0aW9uYWxDb3VudChyZXF1aXJlZCwgb2JzZXJ2ZWQpIHtcbiAgICAgICAgaWYgKG9ic2VydmVkIDwgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdOb3QgZW5vdWdoIG5vbi1vcHRpb24gYXJndW1lbnRzOiBnb3QgJXMsIG5lZWQgYXQgbGVhc3QgJXMnLCAnTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgb2JzZXJ2ZWQsIG9ic2VydmVkICsgJycsIHJlcXVpcmVkICsgJycpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5yZXF1aXJlZEFyZ3VtZW50cyA9IGZ1bmN0aW9uIHJlcXVpcmVkQXJndW1lbnRzKGFyZ3YsIGRlbWFuZGVkT3B0aW9ucykge1xuICAgICAgICBsZXQgbWlzc2luZyA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRlbWFuZGVkT3B0aW9ucykpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIGtleSkgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgYXJndltrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG1pc3NpbmcgPSBtaXNzaW5nIHx8IHt9O1xuICAgICAgICAgICAgICAgIG1pc3Npbmdba2V5XSA9IGRlbWFuZGVkT3B0aW9uc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtaXNzaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Nc2dzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhtaXNzaW5nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IG1pc3Npbmdba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAobXNnICYmIGN1c3RvbU1zZ3MuaW5kZXhPZihtc2cpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21Nc2dzLnB1c2gobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Nc2cgPSBjdXN0b21Nc2dzLmxlbmd0aCA/IGBcXG4ke2N1c3RvbU1zZ3Muam9pbignXFxuJyl9YCA6ICcnO1xuICAgICAgICAgICAgdXNhZ2UuZmFpbChfX24oJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ6ICVzJywgJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzOiAlcycsIE9iamVjdC5rZXlzKG1pc3NpbmcpLmxlbmd0aCwgT2JqZWN0LmtleXMobWlzc2luZykuam9pbignLCAnKSArIGN1c3RvbU1zZykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLnVua25vd25Bcmd1bWVudHMgPSBmdW5jdGlvbiB1bmtub3duQXJndW1lbnRzKGFyZ3YsIGFsaWFzZXMsIHBvc2l0aW9uYWxNYXAsIGlzRGVmYXVsdENvbW1hbmQsIGNoZWNrUG9zaXRpb25hbHMgPSB0cnVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgY29tbWFuZEtleXMgPSB5YXJnc1xuICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAuZ2V0Q29tbWFuZEluc3RhbmNlKClcbiAgICAgICAgICAgIC5nZXRDb21tYW5kcygpO1xuICAgICAgICBjb25zdCB1bmtub3duID0gW107XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0Q29udGV4dCgpO1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNwZWNpYWxLZXlzLmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBvc2l0aW9uYWxNYXAsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFBhcnNlQ29udGV4dCgpLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuaXNWYWxpZEFuZFNvbWVBbGlhc0lzTm90TmV3KGtleSwgYWxpYXNlcykpIHtcbiAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjaGVja1Bvc2l0aW9uYWxzICYmXG4gICAgICAgICAgICAoY3VycmVudENvbnRleHQuY29tbWFuZHMubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgIGNvbW1hbmRLZXlzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHRDb21tYW5kKSkge1xuICAgICAgICAgICAgYXJndi5fLnNsaWNlKGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY29tbWFuZEtleXMuaW5jbHVkZXMoJycgKyBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVua25vd24ucHVzaCgnJyArIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrUG9zaXRpb25hbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbWFuZGVkQ29tbWFuZHMgPSB5YXJncy5nZXREZW1hbmRlZENvbW1hbmRzKCk7XG4gICAgICAgICAgICBjb25zdCBtYXhOb25PcHREZW1hbmRlZCA9ICgoX2EgPSBkZW1hbmRlZENvbW1hbmRzLl8pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tYXgpIHx8IDA7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCArIG1heE5vbk9wdERlbWFuZGVkO1xuICAgICAgICAgICAgaWYgKGV4cGVjdGVkIDwgYXJndi5fLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFyZ3YuXy5zbGljZShleHBlY3RlZCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBTdHJpbmcoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50Q29udGV4dC5jb21tYW5kcy5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhdW5rbm93bi5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1bmtub3duLmxlbmd0aCkge1xuICAgICAgICAgICAgdXNhZ2UuZmFpbChfX24oJ1Vua25vd24gYXJndW1lbnQ6ICVzJywgJ1Vua25vd24gYXJndW1lbnRzOiAlcycsIHVua25vd24ubGVuZ3RoLCB1bmtub3duLm1hcChzID0+IChzLnRyaW0oKSA/IHMgOiBgXCIke3N9XCJgKSkuam9pbignLCAnKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLnVua25vd25Db21tYW5kcyA9IGZ1bmN0aW9uIHVua25vd25Db21tYW5kcyhhcmd2KSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRLZXlzID0geWFyZ3NcbiAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgLmdldENvbW1hbmRJbnN0YW5jZSgpXG4gICAgICAgICAgICAuZ2V0Q29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgdW5rbm93biA9IFtdO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCA+IDAgfHwgY29tbWFuZEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXJndi5fLnNsaWNlKGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY29tbWFuZEtleXMuaW5jbHVkZXMoJycgKyBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVua25vd24ucHVzaCgnJyArIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVua25vd24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdXNhZ2UuZmFpbChfX24oJ1Vua25vd24gY29tbWFuZDogJXMnLCAnVW5rbm93biBjb21tYW5kczogJXMnLCB1bmtub3duLmxlbmd0aCwgdW5rbm93bi5qb2luKCcsICcpKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5pc1ZhbGlkQW5kU29tZUFsaWFzSXNOb3ROZXcgPSBmdW5jdGlvbiBpc1ZhbGlkQW5kU29tZUFsaWFzSXNOb3ROZXcoa2V5LCBhbGlhc2VzKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFsaWFzZXMsIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBbGlhc2VzID0geWFyZ3MucGFyc2VkLm5ld0FsaWFzZXM7XG4gICAgICAgIHJldHVybiBba2V5LCAuLi5hbGlhc2VzW2tleV1dLnNvbWUoYSA9PiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0FsaWFzZXMsIGEpIHx8ICFuZXdBbGlhc2VzW2tleV0pO1xuICAgIH07XG4gICAgc2VsZi5saW1pdGVkQ2hvaWNlcyA9IGZ1bmN0aW9uIGxpbWl0ZWRDaG9pY2VzKGFyZ3YpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IHt9O1xuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKG9wdGlvbnMuY2hvaWNlcykubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoc3BlY2lhbEtleXMuaW5kZXhPZihrZXkpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLmNob2ljZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBbXS5jb25jYXQoYXJndltrZXldKS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2hvaWNlc1trZXldLmluZGV4T2YodmFsdWUpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZFtrZXldID0gKGludmFsaWRba2V5XSB8fCBbXSkuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW52YWxpZEtleXMgPSBPYmplY3Qua2V5cyhpbnZhbGlkKTtcbiAgICAgICAgaWYgKCFpbnZhbGlkS2V5cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBtc2cgPSBfXygnSW52YWxpZCB2YWx1ZXM6Jyk7XG4gICAgICAgIGludmFsaWRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIG1zZyArPSBgXFxuICAke19fKCdBcmd1bWVudDogJXMsIEdpdmVuOiAlcywgQ2hvaWNlczogJXMnLCBrZXksIHVzYWdlLnN0cmluZ2lmaWVkVmFsdWVzKGludmFsaWRba2V5XSksIHVzYWdlLnN0cmluZ2lmaWVkVmFsdWVzKG9wdGlvbnMuY2hvaWNlc1trZXldKSl9YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHVzYWdlLmZhaWwobXNnKTtcbiAgICB9O1xuICAgIGxldCBpbXBsaWVkID0ge307XG4gICAgc2VsZi5pbXBsaWVzID0gZnVuY3Rpb24gaW1wbGllcyhrZXksIHZhbHVlKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8b2JqZWN0PiBbYXJyYXl8bnVtYmVyfHN0cmluZ10nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmltcGxpZXMoaywga2V5W2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWFyZ3MuZ2xvYmFsKGtleSk7XG4gICAgICAgICAgICBpZiAoIWltcGxpZWRba2V5XSkge1xuICAgICAgICAgICAgICAgIGltcGxpZWRba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChpID0+IHNlbGYuaW1wbGllcyhrZXksIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKHZhbHVlLCB1bmRlZmluZWQsIHNoaW0pO1xuICAgICAgICAgICAgICAgIGltcGxpZWRba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5nZXRJbXBsaWVkID0gZnVuY3Rpb24gZ2V0SW1wbGllZCgpIHtcbiAgICAgICAgcmV0dXJuIGltcGxpZWQ7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBrZXlFeGlzdHMoYXJndiwgdmFsKSB7XG4gICAgICAgIGNvbnN0IG51bSA9IE51bWJlcih2YWwpO1xuICAgICAgICB2YWwgPSBpc05hTihudW0pID8gdmFsIDogbnVtO1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHZhbCA9IGFyZ3YuXy5sZW5ndGggPj0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbC5tYXRjaCgvXi0tbm8tLisvKSkge1xuICAgICAgICAgICAgdmFsID0gdmFsLm1hdGNoKC9eLS1uby0oLispLylbMV07XG4gICAgICAgICAgICB2YWwgPSAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWwgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndiwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBzZWxmLmltcGxpY2F0aW9ucyA9IGZ1bmN0aW9uIGltcGxpY2F0aW9ucyhhcmd2KSB7XG4gICAgICAgIGNvbnN0IGltcGx5RmFpbCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhpbXBsaWVkKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnS2V5ID0ga2V5O1xuICAgICAgICAgICAgKGltcGxpZWRba2V5XSB8fCBbXSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IG9yaWdLZXk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAga2V5ID0ga2V5RXhpc3RzKGFyZ3YsIGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBrZXlFeGlzdHMoYXJndiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkgJiYgIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcGx5RmFpbC5wdXNoKGAgJHtvcmlnS2V5fSAtPiAke29yaWdWYWx1ZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbXBseUZhaWwubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbXNnID0gYCR7X18oJ0ltcGxpY2F0aW9ucyBmYWlsZWQ6Jyl9XFxuYDtcbiAgICAgICAgICAgIGltcGx5RmFpbC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBtc2cgKz0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwobXNnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGNvbmZsaWN0aW5nID0ge307XG4gICAgc2VsZi5jb25mbGljdHMgPSBmdW5jdGlvbiBjb25mbGljdHMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW2FycmF5fHN0cmluZ10nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZsaWN0cyhrLCBrZXlba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5YXJncy5nbG9iYWwoa2V5KTtcbiAgICAgICAgICAgIGlmICghY29uZmxpY3Rpbmdba2V5XSkge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaSA9PiBzZWxmLmNvbmZsaWN0cyhrZXksIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuZ2V0Q29uZmxpY3RpbmcgPSAoKSA9PiBjb25mbGljdGluZztcbiAgICBzZWxmLmNvbmZsaWN0aW5nID0gZnVuY3Rpb24gY29uZmxpY3RpbmdGbihhcmd2KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGFyZ3YpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChjb25mbGljdGluZ1trZXldKSB7XG4gICAgICAgICAgICAgICAgY29uZmxpY3Rpbmdba2V5XS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIGFyZ3Zba2V5XSAhPT0gdW5kZWZpbmVkICYmIGFyZ3ZbdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoX18oJ0FyZ3VtZW50cyAlcyBhbmQgJXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZScsIGtleSwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFBhcnNlckNvbmZpZ3VyYXRpb24oKVsnc3RyaXAtZGFzaGVkJ10pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbmZsaWN0aW5nKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uZmxpY3Rpbmdba2V5XS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2W3NoaW0uUGFyc2VyLmNhbWVsQ2FzZShrZXkpXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2W3NoaW0uUGFyc2VyLmNhbWVsQ2FzZSh2YWx1ZSldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoX18oJ0FyZ3VtZW50cyAlcyBhbmQgJXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZScsIGtleSwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYucmVjb21tZW5kQ29tbWFuZHMgPSBmdW5jdGlvbiByZWNvbW1lbmRDb21tYW5kcyhjbWQsIHBvdGVudGlhbENvbW1hbmRzKSB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDM7XG4gICAgICAgIHBvdGVudGlhbENvbW1hbmRzID0gcG90ZW50aWFsQ29tbWFuZHMuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCk7XG4gICAgICAgIGxldCByZWNvbW1lbmRlZCA9IG51bGw7XG4gICAgICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGNhbmRpZGF0ZTsgKGNhbmRpZGF0ZSA9IHBvdGVudGlhbENvbW1hbmRzW2ldKSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBkaXN0YW5jZShjbWQsIGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICBpZiAoZCA8PSB0aHJlc2hvbGQgJiYgZCA8IGJlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGJlc3REaXN0YW5jZSA9IGQ7XG4gICAgICAgICAgICAgICAgcmVjb21tZW5kZWQgPSBjYW5kaWRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY29tbWVuZGVkKVxuICAgICAgICAgICAgdXNhZ2UuZmFpbChfXygnRGlkIHlvdSBtZWFuICVzPycsIHJlY29tbWVuZGVkKSk7XG4gICAgfTtcbiAgICBzZWxmLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQobG9jYWxMb29rdXApIHtcbiAgICAgICAgaW1wbGllZCA9IG9iakZpbHRlcihpbXBsaWVkLCBrID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIGNvbmZsaWN0aW5nID0gb2JqRmlsdGVyKGNvbmZsaWN0aW5nLCBrID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gICAgY29uc3QgZnJvemVucyA9IFtdO1xuICAgIHNlbGYuZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKCkge1xuICAgICAgICBmcm96ZW5zLnB1c2goe1xuICAgICAgICAgICAgaW1wbGllZCxcbiAgICAgICAgICAgIGNvbmZsaWN0aW5nLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHNlbGYudW5mcmVlemUgPSBmdW5jdGlvbiB1bmZyZWV6ZSgpIHtcbiAgICAgICAgY29uc3QgZnJvemVuID0gZnJvemVucy5wb3AoKTtcbiAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwoZnJvemVuLCB1bmRlZmluZWQsIHNoaW0pO1xuICAgICAgICAoeyBpbXBsaWVkLCBjb25mbGljdGluZyB9ID0gZnJvemVuKTtcbiAgICB9O1xuICAgIHJldHVybiBzZWxmO1xufVxuIiwgImltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4uL3llcnJvci5qcyc7XG5sZXQgcHJldmlvdXNseVZpc2l0ZWRDb25maWdzID0gW107XG5sZXQgc2hpbTtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUV4dGVuZHMoY29uZmlnLCBjd2QsIG1lcmdlRXh0ZW5kcywgX3NoaW0pIHtcbiAgICBzaGltID0gX3NoaW07XG4gICAgbGV0IGRlZmF1bHRDb25maWcgPSB7fTtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2V4dGVuZHMnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5leHRlbmRzICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29uZmlnO1xuICAgICAgICBjb25zdCBpc1BhdGggPSAvXFwuanNvbnxcXC4uKnJjJC8udGVzdChjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIGxldCBwYXRoVG9EZWZhdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpc1BhdGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGF0aFRvRGVmYXVsdCA9IGltcG9ydC5tZXRhLnJlc29sdmUoY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGF0aFRvRGVmYXVsdCA9IGdldFBhdGhUb0RlZmF1bHRDb25maWcoY3dkLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tGb3JDaXJjdWxhckV4dGVuZHMocGF0aFRvRGVmYXVsdCk7XG4gICAgICAgIHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncy5wdXNoKHBhdGhUb0RlZmF1bHQpO1xuICAgICAgICBkZWZhdWx0Q29uZmlnID0gaXNQYXRoXG4gICAgICAgICAgICA/IEpTT04ucGFyc2Uoc2hpbS5yZWFkRmlsZVN5bmMocGF0aFRvRGVmYXVsdCwgJ3V0ZjgnKSlcbiAgICAgICAgICAgIDogX3NoaW0ucmVxdWlyZShjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuZXh0ZW5kcztcbiAgICAgICAgZGVmYXVsdENvbmZpZyA9IGFwcGx5RXh0ZW5kcyhkZWZhdWx0Q29uZmlnLCBzaGltLnBhdGguZGlybmFtZShwYXRoVG9EZWZhdWx0KSwgbWVyZ2VFeHRlbmRzLCBzaGltKTtcbiAgICB9XG4gICAgcHJldmlvdXNseVZpc2l0ZWRDb25maWdzID0gW107XG4gICAgcmV0dXJuIG1lcmdlRXh0ZW5kc1xuICAgICAgICA/IG1lcmdlRGVlcChkZWZhdWx0Q29uZmlnLCBjb25maWcpXG4gICAgICAgIDogT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbn1cbmZ1bmN0aW9uIGNoZWNrRm9yQ2lyY3VsYXJFeHRlbmRzKGNmZ1BhdGgpIHtcbiAgICBpZiAocHJldmlvdXNseVZpc2l0ZWRDb25maWdzLmluZGV4T2YoY2ZnUGF0aCkgPiAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgWUVycm9yKGBDaXJjdWxhciBleHRlbmRlZCBjb25maWd1cmF0aW9uczogJyR7Y2ZnUGF0aH0nLmApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFBhdGhUb0RlZmF1bHRDb25maWcoY3dkLCBwYXRoVG9FeHRlbmQpIHtcbiAgICByZXR1cm4gc2hpbS5wYXRoLnJlc29sdmUoY3dkLCBwYXRoVG9FeHRlbmQpO1xufVxuZnVuY3Rpb24gbWVyZ2VEZWVwKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmopO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgY29uZmlnMSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY29uZmlnMikpIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGNvbmZpZzJba2V5XSkgJiYgaXNPYmplY3QodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IG1lcmdlRGVlcChjb25maWcxW2tleV0sIGNvbmZpZzJba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGNvbmZpZzJba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuIiwgInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBfWWFyZ3NJbnN0YW5jZV9jd2QsIF9ZYXJnc0luc3RhbmNlX2NvbnRleHQsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBfWWFyZ3NJbnN0YW5jZV9kZWZhdWx0U2hvd0hpZGRlbk9wdCwgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIF9ZYXJnc0luc3RhbmNlX2Zyb3plbnMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQsIF9ZYXJnc0luc3RhbmNlX2xvZ2dlciwgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIF9ZYXJnc0luc3RhbmNlX3BhcnNlQ29udGV4dCwgX1lhcmdzSW5zdGFuY2VfcGtncywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBfWWFyZ3NJbnN0YW5jZV9wcm9jZXNzQXJncywgX1lhcmdzSW5zdGFuY2VfcmVjb21tZW5kQ29tbWFuZHMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbjtcbmltcG9ydCB7IGNvbW1hbmQgYXMgQ29tbWFuZCwgfSBmcm9tICcuL2NvbW1hbmQuanMnO1xuaW1wb3J0IHsgYXNzZXJ0Tm90U3RyaWN0RXF1YWwsIGFzc2VydFNpbmdsZUtleSwgb2JqZWN0S2V5cywgfSBmcm9tICcuL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzJztcbmltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4veWVycm9yLmpzJztcbmltcG9ydCB7IHVzYWdlIGFzIFVzYWdlIH0gZnJvbSAnLi91c2FnZS5qcyc7XG5pbXBvcnQgeyBhcmdzZXJ0IH0gZnJvbSAnLi9hcmdzZXJ0LmpzJztcbmltcG9ydCB7IGNvbXBsZXRpb24gYXMgQ29tcGxldGlvbiwgfSBmcm9tICcuL2NvbXBsZXRpb24uanMnO1xuaW1wb3J0IHsgdmFsaWRhdGlvbiBhcyBWYWxpZGF0aW9uLCB9IGZyb20gJy4vdmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQgeyBvYmpGaWx0ZXIgfSBmcm9tICcuL3V0aWxzL29iai1maWx0ZXIuanMnO1xuaW1wb3J0IHsgYXBwbHlFeHRlbmRzIH0gZnJvbSAnLi91dGlscy9hcHBseS1leHRlbmRzLmpzJztcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgR2xvYmFsTWlkZGxld2FyZSwgfSBmcm9tICcuL21pZGRsZXdhcmUuanMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pcy1wcm9taXNlLmpzJztcbmltcG9ydCB7IG1heWJlQXN5bmNSZXN1bHQgfSBmcm9tICcuL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyc7XG5pbXBvcnQgc2V0QmxvY2tpbmcgZnJvbSAnLi91dGlscy9zZXQtYmxvY2tpbmcuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIFlhcmdzRmFjdG9yeShfc2hpbSkge1xuICAgIHJldHVybiAocHJvY2Vzc0FyZ3MgPSBbXSwgY3dkID0gX3NoaW0ucHJvY2Vzcy5jd2QoKSwgcGFyZW50UmVxdWlyZSkgPT4ge1xuICAgICAgICBjb25zdCB5YXJncyA9IG5ldyBZYXJnc0luc3RhbmNlKHByb2Nlc3NBcmdzLCBjd2QsIHBhcmVudFJlcXVpcmUsIF9zaGltKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHlhcmdzLCAnYXJndicsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB5YXJncy5wYXJzZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB5YXJncy5oZWxwKCk7XG4gICAgICAgIHlhcmdzLnZlcnNpb24oKTtcbiAgICAgICAgcmV0dXJuIHlhcmdzO1xuICAgIH07XG59XG5jb25zdCBrQ29weURvdWJsZURhc2ggPSBTeW1ib2woJ2NvcHlEb3VibGVEYXNoJyk7XG5jb25zdCBrQ3JlYXRlTG9nZ2VyID0gU3ltYm9sKCdjb3B5RG91YmxlRGFzaCcpO1xuY29uc3Qga0RlbGV0ZUZyb21QYXJzZXJIaW50T2JqZWN0ID0gU3ltYm9sKCdkZWxldGVGcm9tUGFyc2VySGludE9iamVjdCcpO1xuY29uc3Qga0VtaXRXYXJuaW5nID0gU3ltYm9sKCdlbWl0V2FybmluZycpO1xuY29uc3Qga0ZyZWV6ZSA9IFN5bWJvbCgnZnJlZXplJyk7XG5jb25zdCBrR2V0RG9sbGFyWmVybyA9IFN5bWJvbCgnZ2V0RG9sbGFyWmVybycpO1xuY29uc3Qga0dldFBhcnNlckNvbmZpZ3VyYXRpb24gPSBTeW1ib2woJ2dldFBhcnNlckNvbmZpZ3VyYXRpb24nKTtcbmNvbnN0IGtHZXRVc2FnZUNvbmZpZ3VyYXRpb24gPSBTeW1ib2woJ2dldFVzYWdlQ29uZmlndXJhdGlvbicpO1xuY29uc3Qga0d1ZXNzTG9jYWxlID0gU3ltYm9sKCdndWVzc0xvY2FsZScpO1xuY29uc3Qga0d1ZXNzVmVyc2lvbiA9IFN5bWJvbCgnZ3Vlc3NWZXJzaW9uJyk7XG5jb25zdCBrUGFyc2VQb3NpdGlvbmFsTnVtYmVycyA9IFN5bWJvbCgncGFyc2VQb3NpdGlvbmFsTnVtYmVycycpO1xuY29uc3Qga1BrZ1VwID0gU3ltYm9sKCdwa2dVcCcpO1xuY29uc3Qga1BvcHVsYXRlUGFyc2VySGludEFycmF5ID0gU3ltYm9sKCdwb3B1bGF0ZVBhcnNlckhpbnRBcnJheScpO1xuY29uc3Qga1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeSA9IFN5bWJvbCgncG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5Jyk7XG5jb25zdCBrUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5ID0gU3ltYm9sKCdwb3B1bGF0ZVBhcnNlckhpbnRBcnJheURpY3Rpb25hcnknKTtcbmNvbnN0IGtQb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5ID0gU3ltYm9sKCdwb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5Jyk7XG5jb25zdCBrU2FuaXRpemVLZXkgPSBTeW1ib2woJ3Nhbml0aXplS2V5Jyk7XG5jb25zdCBrU2V0S2V5ID0gU3ltYm9sKCdzZXRLZXknKTtcbmNvbnN0IGtVbmZyZWV6ZSA9IFN5bWJvbCgndW5mcmVlemUnKTtcbmNvbnN0IGtWYWxpZGF0ZUFzeW5jID0gU3ltYm9sKCd2YWxpZGF0ZUFzeW5jJyk7XG5jb25zdCBrR2V0Q29tbWFuZEluc3RhbmNlID0gU3ltYm9sKCdnZXRDb21tYW5kSW5zdGFuY2UnKTtcbmNvbnN0IGtHZXRDb250ZXh0ID0gU3ltYm9sKCdnZXRDb250ZXh0Jyk7XG5jb25zdCBrR2V0SGFzT3V0cHV0ID0gU3ltYm9sKCdnZXRIYXNPdXRwdXQnKTtcbmNvbnN0IGtHZXRMb2dnZXJJbnN0YW5jZSA9IFN5bWJvbCgnZ2V0TG9nZ2VySW5zdGFuY2UnKTtcbmNvbnN0IGtHZXRQYXJzZUNvbnRleHQgPSBTeW1ib2woJ2dldFBhcnNlQ29udGV4dCcpO1xuY29uc3Qga0dldFVzYWdlSW5zdGFuY2UgPSBTeW1ib2woJ2dldFVzYWdlSW5zdGFuY2UnKTtcbmNvbnN0IGtHZXRWYWxpZGF0aW9uSW5zdGFuY2UgPSBTeW1ib2woJ2dldFZhbGlkYXRpb25JbnN0YW5jZScpO1xuY29uc3Qga0hhc1BhcnNlQ2FsbGJhY2sgPSBTeW1ib2woJ2hhc1BhcnNlQ2FsbGJhY2snKTtcbmNvbnN0IGtJc0dsb2JhbENvbnRleHQgPSBTeW1ib2woJ2lzR2xvYmFsQ29udGV4dCcpO1xuY29uc3Qga1Bvc3RQcm9jZXNzID0gU3ltYm9sKCdwb3N0UHJvY2VzcycpO1xuY29uc3Qga1JlYmFzZSA9IFN5bWJvbCgncmViYXNlJyk7XG5jb25zdCBrUmVzZXQgPSBTeW1ib2woJ3Jlc2V0Jyk7XG5jb25zdCBrUnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHMgPSBTeW1ib2woJ3J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzJyk7XG5jb25zdCBrUnVuVmFsaWRhdGlvbiA9IFN5bWJvbCgncnVuVmFsaWRhdGlvbicpO1xuY29uc3Qga1NldEhhc091dHB1dCA9IFN5bWJvbCgnc2V0SGFzT3V0cHV0Jyk7XG5jb25zdCBrVHJhY2tNYW51YWxseVNldEtleXMgPSBTeW1ib2woJ2tUcmFja01hbnVhbGx5U2V0S2V5cycpO1xuY29uc3QgREVGQVVMVF9MT0NBTEUgPSAnZW5fVVMnO1xuZXhwb3J0IGNsYXNzIFlhcmdzSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb2Nlc3NBcmdzID0gW10sIGN3ZCwgcGFyZW50UmVxdWlyZSwgc2hpbSkge1xuICAgICAgICB0aGlzLmN1c3RvbVNjcmlwdE5hbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY29tbWFuZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY3dkLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LnNldCh0aGlzLCB7IGNvbW1hbmRzOiBbXSwgZnVsbENvbW1hbmRzOiBbXSB9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQuc2V0KHRoaXMsICdzaG93LWhpZGRlbicpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3Iuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUuc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9lbWl0dGVkV2FybmluZ3Muc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3Muc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLnNldCh0aGlzLCBbXSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2dyb3Vwcy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfaGVscE9wdC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2lzR2xvYmFsQ29udGV4dC5zZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2xvZ2dlci5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LnNldCh0aGlzLCAnJyk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BhcmVudFJlcXVpcmUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BhcnNlckNvbmZpZy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcGtncy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3Muc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3JlY29tbWVuZENvbW1hbmRzLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3NoaW0uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3N0cmljdC5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3VzYWdlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBzaGltLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIHByb2Nlc3NBcmdzLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY3dkLCBjd2QsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLCBwYXJlbnRSZXF1aXJlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgbmV3IEdsb2JhbE1pZGRsZXdhcmUodGhpcyksIFwiZlwiKTtcbiAgICAgICAgdGhpcy4kMCA9IHRoaXNba0dldERvbGxhclplcm9dKCk7XG4gICAgICAgIHRoaXNba1Jlc2V0XSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIiksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuc2hvd0hpZGRlbk9wdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIsIHRoaXNba0NyZWF0ZUxvZ2dlcl0oKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS55MThuLnNldExvY2FsZShERUZBVUxUX0xPQ0FMRSk7XG4gICAgfVxuICAgIGFkZEhlbHBPcHQob3B0LCBtc2cpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdEhlbHBPcHQgPSAnaGVscCc7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8Ym9vbGVhbl0gW3N0cmluZ10nLCBbb3B0LCBtc2ddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICB0aGlzW2tEZWxldGVGcm9tUGFyc2VySGludE9iamVjdF0oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBudWxsLCBcImZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdCA9PT0gZmFsc2UgJiYgbXNnID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCB0eXBlb2Ygb3B0ID09PSAnc3RyaW5nJyA/IG9wdCA6IGRlZmF1bHRIZWxwT3B0LCBcImZcIik7XG4gICAgICAgIHRoaXMuYm9vbGVhbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIiksIG1zZyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVmZXJZMThuTG9va3VwKCdTaG93IGhlbHAnKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBoZWxwKG9wdCwgbXNnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEhlbHBPcHQob3B0LCBtc2cpO1xuICAgIH1cbiAgICBhZGRTaG93SGlkZGVuT3B0KG9wdCwgbXNnKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8Ym9vbGVhbl0gW3N0cmluZ10nLCBbb3B0LCBtc2ddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKG9wdCA9PT0gZmFsc2UgJiYgbXNnID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY29uc3Qgc2hvd0hpZGRlbk9wdCA9IHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnID8gb3B0IDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZWZhdWx0U2hvd0hpZGRlbk9wdCwgXCJmXCIpO1xuICAgICAgICB0aGlzLmJvb2xlYW4oc2hvd0hpZGRlbk9wdCk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUoc2hvd0hpZGRlbk9wdCwgbXNnIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5kZWZlclkxOG5Mb29rdXAoJ1Nob3cgaGlkZGVuIG9wdGlvbnMnKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLnNob3dIaWRkZW5PcHQgPSBzaG93SGlkZGVuT3B0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2hvd0hpZGRlbihvcHQsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRTaG93SGlkZGVuT3B0KG9wdCwgbXNnKTtcbiAgICB9XG4gICAgYWxpYXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW3N0cmluZ3xhcnJheV0nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheURpY3Rpb25hcnldKHRoaXMuYWxpYXMuYmluZCh0aGlzKSwgJ2FsaWFzJywga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhcnJheShrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdhcnJheScsIGtleXMpO1xuICAgICAgICB0aGlzW2tUcmFja01hbnVhbGx5U2V0S2V5c10oa2V5cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBib29sZWFuKGtleXMpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fHN0cmluZz4nLCBba2V5c10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheV0oJ2Jvb2xlYW4nLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2hlY2soZiwgZ2xvYmFsKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxmdW5jdGlvbj4gW2Jvb2xlYW5dJywgW2YsIGdsb2JhbF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmUoKGFyZ3YsIF95YXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1heWJlQXN5bmNSZXN1bHQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmKGFyZ3YsIF95YXJncy5nZXRPcHRpb25zKCkpO1xuICAgICAgICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4uX18oJ0FyZ3VtZW50IGNoZWNrIGZhaWxlZDogJXMnLCBmLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycgfHwgcmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmZhaWwocmVzdWx0LnRvU3RyaW5nKCksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsKGVyci5tZXNzYWdlID8gZXJyLm1lc3NhZ2UgOiBlcnIudG9TdHJpbmcoKSwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmYWxzZSwgZ2xvYmFsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNob2ljZXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW3N0cmluZ3xhcnJheV0nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheURpY3Rpb25hcnldKHRoaXMuY2hvaWNlcy5iaW5kKHRoaXMpLCAnY2hvaWNlcycsIGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29lcmNlKGtleXMsIHZhbHVlKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3R8c3RyaW5nfGFycmF5PiBbZnVuY3Rpb25dJywgW2tleXMsIHZhbHVlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcignY29lcmNlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZXJjZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBrZXlzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoa2V5cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZXJjZShrZXksIGtleXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKCdjb2VyY2UgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvZXJjZUtleSA9IGtleXM7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmtleVtjb2VyY2VLZXldID0gdHJ1ZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuYWRkQ29lcmNlTWlkZGxld2FyZSgoYXJndiwgeWFyZ3MpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGNvZXJjZUtleUFsaWFzZXMgPSAoX2EgPSB5YXJncy5nZXRBbGlhc2VzKClbY29lcmNlS2V5XSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW107XG4gICAgICAgICAgICBjb25zdCBhcmd2S2V5cyA9IFtjb2VyY2VLZXksIC4uLmNvZXJjZUtleUFsaWFzZXNdLmZpbHRlcihrZXkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIGtleSkpO1xuICAgICAgICAgICAgaWYgKGFyZ3ZLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1heWJlQXN5bmNSZXN1bHQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZShhcmd2W2FyZ3ZLZXlzWzBdXSk7XG4gICAgICAgICAgICB9LCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXJndktleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcmd2W2tleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgY29lcmNlS2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbmZsaWN0cyhrZXkxLCBrZXkyKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8b2JqZWN0PiBbc3RyaW5nfGFycmF5XScsIFtrZXkxLCBrZXkyXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmNvbmZsaWN0cyhrZXkxLCBrZXkyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbmZpZyhrZXkgPSAnY29uZmlnJywgbXNnLCBwYXJzZUZuKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tvYmplY3R8c3RyaW5nXSBbc3RyaW5nfGZ1bmN0aW9uXSBbZnVuY3Rpb25dJywgW2tleSwgbXNnLCBwYXJzZUZuXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgICBrZXkgPSBhcHBseUV4dGVuZHMoa2V5LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpLCB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpWydkZWVwLW1lcmdlLWNvbmZpZyddIHx8IGZhbHNlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzID0gKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgfHwgW10pLmNvbmNhdChrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHBhcnNlRm4gPSBtc2c7XG4gICAgICAgICAgICBtc2cgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXNjcmliZShrZXksIG1zZyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVmZXJZMThuTG9va3VwKCdQYXRoIHRvIEpTT04gY29uZmlnIGZpbGUnKSk7XG4gICAgICAgIChBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ1trXSA9IHBhcnNlRm4gfHwgdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb21wbGV0aW9uKGNtZCwgZGVzYywgZm4pIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ10gW3N0cmluZ3xib29sZWFufGZ1bmN0aW9uXSBbZnVuY3Rpb25dJywgW2NtZCwgZGVzYywgZm5dLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmbiA9IGRlc2M7XG4gICAgICAgICAgICBkZXNjID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIGNtZCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikgfHwgJ2NvbXBsZXRpb24nLCBcImZcIik7XG4gICAgICAgIGlmICghZGVzYyAmJiBkZXNjICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVzYyA9ICdnZW5lcmF0ZSBjb21wbGV0aW9uIHNjcmlwdCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21tYW5kKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSwgZGVzYyk7XG4gICAgICAgIGlmIChmbilcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLnJlZ2lzdGVyRnVuY3Rpb24oZm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29tbWFuZChjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZCkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfGFycmF5fG9iamVjdD4gW3N0cmluZ3xib29sZWFuXSBbZnVuY3Rpb258b2JqZWN0XSBbZnVuY3Rpb25dIFthcnJheV0gW2Jvb2xlYW58c3RyaW5nXScsIFtjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5hZGRIYW5kbGVyKGNtZCwgZGVzY3JpcHRpb24sIGJ1aWxkZXIsIGhhbmRsZXIsIG1pZGRsZXdhcmVzLCBkZXByZWNhdGVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbW1hbmRzKGNtZCwgZGVzY3JpcHRpb24sIGJ1aWxkZXIsIGhhbmRsZXIsIG1pZGRsZXdhcmVzLCBkZXByZWNhdGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQoY21kLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlciwgbWlkZGxld2FyZXMsIGRlcHJlY2F0ZWQpO1xuICAgIH1cbiAgICBjb21tYW5kRGlyKGRpciwgb3B0cykge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPiBbb2JqZWN0XScsIFtkaXIsIG9wdHNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmVxID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLCBcImZcIikgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucmVxdWlyZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuYWRkRGlyZWN0b3J5KGRpciwgcmVxLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRDYWxsZXJGaWxlKCksIG9wdHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY291bnQoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnY291bnQnLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVmYXVsdChrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFsqXSBbc3RyaW5nXScsIFtrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb25dLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGRlZmF1bHREZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgYXNzZXJ0U2luZ2xlS2V5KGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0gPSBkZWZhdWx0RGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0U2luZ2xlS2V5KGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSlcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSA9XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mdW5jdGlvbkRlc2NyaXB0aW9uKHZhbHVlKTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeV0odGhpcy5kZWZhdWx0LmJpbmQodGhpcyksICdkZWZhdWx0Jywga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWZhdWx0cyhrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdChrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBkZW1hbmRDb21tYW5kKG1pbiA9IDEsIG1heCwgbWluTXNnLCBtYXhNc2cpIHtcbiAgICAgICAgYXJnc2VydCgnW251bWJlcl0gW251bWJlcnxzdHJpbmddIFtzdHJpbmd8bnVsbHx1bmRlZmluZWRdIFtzdHJpbmd8bnVsbHx1bmRlZmluZWRdJywgW21pbiwgbWF4LCBtaW5Nc2csIG1heE1zZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIG1heCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG1pbk1zZyA9IG1heDtcbiAgICAgICAgICAgIG1heCA9IEluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2xvYmFsKCdfJywgZmFsc2UpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZW1hbmRlZENvbW1hbmRzLl8gPSB7XG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICBtaW5Nc2csXG4gICAgICAgICAgICBtYXhNc2csXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZW1hbmQoa2V5cywgbWF4LCBtc2cpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF4KSkge1xuICAgICAgICAgICAgbWF4LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIHRydWUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXksIG1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1heCA9IEluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBtc2cgPSBtYXg7XG4gICAgICAgICAgICBtYXggPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGtleXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIHRydWUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMuZGVtYW5kQ29tbWFuZChrZXlzLCBtYXgsIG1zZywgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIHRydWUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXksIG1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVtYW5kT3B0aW9uKGtleXMsIG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtc2cgPT09IHRydWUgfHwgdHlwZW9mIG1zZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVtYW5kT3B0aW9uKGtleXMsIG1zZykge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW3N0cmluZ10nLCBba2V5cywgbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeV0odGhpcy5kZW1hbmRPcHRpb24uYmluZCh0aGlzKSwgJ2RlbWFuZGVkT3B0aW9ucycsIGtleXMsIG1zZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZXByZWNhdGVPcHRpb24ob3B0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmc+IFtzdHJpbmd8Ym9vbGVhbl0nLCBbb3B0aW9uLCBtZXNzYWdlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmRlcHJlY2F0ZWRPcHRpb25zW29wdGlvbl0gPSBtZXNzYWdlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVzY3JpYmUoa2V5cywgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmddJywgW2tleXMsIGRlc2NyaXB0aW9uXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1NldEtleV0oa2V5cywgdHJ1ZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5kZXNjcmliZShrZXlzLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZXRlY3RMb2NhbGUoZGV0ZWN0KSB7XG4gICAgICAgIGFyZ3NlcnQoJzxib29sZWFuPicsIFtkZXRlY3RdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIGRldGVjdCwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZW52KHByZWZpeCkge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGJvb2xlYW5dJywgW3ByZWZpeF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAocHJlZml4ID09PSBmYWxzZSlcbiAgICAgICAgICAgIGRlbGV0ZSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5lbnZQcmVmaXg7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmVudlByZWZpeCA9IHByZWZpeCB8fCAnJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVwaWxvZ3VlKG1zZykge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPicsIFttc2ddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmVwaWxvZyhtc2cpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZXBpbG9nKG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lcGlsb2d1ZShtc2cpO1xuICAgIH1cbiAgICBleGFtcGxlKGNtZCwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xhcnJheT4gW3N0cmluZ10nLCBbY21kLCBkZXNjcmlwdGlvbl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbWQpKSB7XG4gICAgICAgICAgICBjbWQuZm9yRWFjaChleGFtcGxlUGFyYW1zID0+IHRoaXMuZXhhbXBsZSguLi5leGFtcGxlUGFyYW1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZXhhbXBsZShjbWQsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZXhpdChjb2RlLCBlcnIpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIGVyciwgXCJmXCIpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgIH1cbiAgICBleGl0UHJvY2VzcyhlbmFibGVkID0gdHJ1ZSkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBlbmFibGVkLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmYWlsKGYpIHtcbiAgICAgICAgYXJnc2VydCgnPGZ1bmN0aW9ufGJvb2xlYW4+JywgW2ZdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBmID09PSAnYm9vbGVhbicgJiYgZiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoXCJJbnZhbGlkIGZpcnN0IGFyZ3VtZW50LiBFeHBlY3RlZCBmdW5jdGlvbiBvciBib29sZWFuICdmYWxzZSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmZhaWxGbihmKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldEFsaWFzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlZCA/IHRoaXMucGFyc2VkLmFsaWFzZXMgOiB7fTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q29tcGxldGlvbihhcmdzLCBkb25lKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheT4gW2Z1bmN0aW9uXScsIFthcmdzLCBkb25lXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZXRDb21wbGV0aW9uKGFyZ3MsIChlcnIsIGNvbXBsZXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb21wbGV0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZXRDb21wbGV0aW9uKGFyZ3MsIGRvbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldERlbWFuZGVkT3B0aW9ucygpIHtcbiAgICAgICAgYXJnc2VydChbXSwgMCk7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZW1hbmRlZE9wdGlvbnM7XG4gICAgfVxuICAgIGdldERlbWFuZGVkQ29tbWFuZHMoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVtYW5kZWRDb21tYW5kcztcbiAgICB9XG4gICAgZ2V0RGVwcmVjYXRlZE9wdGlvbnMoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVwcmVjYXRlZE9wdGlvbnM7XG4gICAgfVxuICAgIGdldERldGVjdExvY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLCBcImZcIik7XG4gICAgfVxuICAgIGdldEV4aXRQcm9jZXNzKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRHcm91cHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgXCJmXCIpKTtcbiAgICB9XG4gICAgZ2V0SGVscCgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGFzQ2FjaGVkSGVscE1lc3NhZ2UoKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcnNlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlID0gdGhpc1trUnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHNdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIFwiZlwiKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2UocGFyc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGVscCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyUmVzcG9uc2UgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5ydW5EZWZhdWx0QnVpbGRlck9uKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShidWlsZGVyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJSZXNwb25zZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5oZWxwKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGVscCgpKTtcbiAgICB9XG4gICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRTdHJpY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRTdHJpY3RDb21tYW5kcygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0U3RyaWN0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgXCJmXCIpO1xuICAgIH1cbiAgICBnbG9iYWwoZ2xvYmFscywgZ2xvYmFsKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8YXJyYXk+IFtib29sZWFuXScsIFtnbG9iYWxzLCBnbG9iYWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgZ2xvYmFscyA9IFtdLmNvbmNhdChnbG9iYWxzKTtcbiAgICAgICAgaWYgKGdsb2JhbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwuZmlsdGVyKGwgPT4gZ2xvYmFscy5pbmRleE9mKGwpID09PSAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWxzLmZvckVhY2goZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5sb2NhbC5pbmNsdWRlcyhnKSlcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwucHVzaChnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBncm91cChvcHRzLCBncm91cE5hbWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xhcnJheT4gPHN0cmluZz4nLCBbb3B0cywgZ3JvdXBOYW1lXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMsIFwiZlwiKVtncm91cE5hbWVdIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXSkge1xuICAgICAgICAgICAgZGVsZXRlIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWVuID0ge307XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXSA9IChleGlzdGluZyB8fCBbXSkuY29uY2F0KG9wdHMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlZW5ba2V5XSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gKHNlZW5ba2V5XSA9IHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGhpZGUoa2V5KSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmc+JywgW2tleV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5oaWRkZW5PcHRpb25zLnB1c2goa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGltcGxpZXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW251bWJlcnxzdHJpbmd8YXJyYXldJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuaW1wbGllcyhrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ10nLCBbbG9jYWxlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChsb2NhbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpc1trR3Vlc3NMb2NhbGVdKCk7XG4gICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5nZXRMb2NhbGUoKTtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSwgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5zZXRMb2NhbGUobG9jYWxlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG1pZGRsZXdhcmUoY2FsbGJhY2ssIGFwcGx5QmVmb3JlVmFsaWRhdGlvbiwgZ2xvYmFsKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5hZGRNaWRkbGV3YXJlKGNhbGxiYWNrLCAhIWFwcGx5QmVmb3JlVmFsaWRhdGlvbiwgZ2xvYmFsKTtcbiAgICB9XG4gICAgbmFyZ3Moa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdHxhcnJheT4gW251bWJlcl0nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXMubmFyZ3MuYmluZCh0aGlzKSwgJ25hcmcnLCBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG5vcm1hbGl6ZShrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdub3JtYWxpemUnLCBrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG51bWJlcihrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdudW1iZXInLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb3B0aW9uKGtleSwgb3B0KSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8b2JqZWN0PiBbb2JqZWN0XScsIFtrZXksIG9wdF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMoaywga2V5W2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgb3B0ID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW2tUcmFja01hbnVhbGx5U2V0S2V5c10oa2V5KTtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSAmJiAoa2V5ID09PSAndmVyc2lvbicgfHwgKG9wdCA9PT0gbnVsbCB8fCBvcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdC5hbGlhcykgPT09ICd2ZXJzaW9uJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tFbWl0V2FybmluZ10oW1xuICAgICAgICAgICAgICAgICAgICAnXCJ2ZXJzaW9uXCIgaXMgYSByZXNlcnZlZCB3b3JkLicsXG4gICAgICAgICAgICAgICAgICAgICdQbGVhc2UgZG8gb25lIG9mIHRoZSBmb2xsb3dpbmc6JyxcbiAgICAgICAgICAgICAgICAgICAgJy0gRGlzYWJsZSB2ZXJzaW9uIHdpdGggYHlhcmdzLnZlcnNpb24oZmFsc2UpYCBpZiB1c2luZyBcInZlcnNpb25cIiBhcyBhbiBvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAnLSBVc2UgdGhlIGJ1aWx0LWluIGB5YXJncy52ZXJzaW9uYCBtZXRob2QgaW5zdGVhZCAoaWYgYXBwbGljYWJsZSknLFxuICAgICAgICAgICAgICAgICAgICAnLSBVc2UgYSBkaWZmZXJlbnQgb3B0aW9uIGtleScsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3lhcmdzLmpzLm9yZy9kb2NzLyNhcGktcmVmZXJlbmNlLXZlcnNpb24nLFxuICAgICAgICAgICAgICAgIF0uam9pbignXFxuJyksIHVuZGVmaW5lZCwgJ3ZlcnNpb25XYXJuaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgIHRoaXMuYWxpYXMoa2V5LCBvcHQuYWxpYXMpO1xuICAgICAgICAgICAgY29uc3QgZGVwcmVjYXRlID0gb3B0LmRlcHJlY2F0ZSB8fCBvcHQuZGVwcmVjYXRlZDtcbiAgICAgICAgICAgIGlmIChkZXByZWNhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlcHJlY2F0ZU9wdGlvbihrZXksIGRlcHJlY2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZW1hbmQgPSBvcHQuZGVtYW5kIHx8IG9wdC5yZXF1aXJlZCB8fCBvcHQucmVxdWlyZTtcbiAgICAgICAgICAgIGlmIChkZW1hbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZChrZXksIGRlbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmRlbWFuZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVtYW5kT3B0aW9uKGtleSwgdHlwZW9mIG9wdC5kZW1hbmRPcHRpb24gPT09ICdzdHJpbmcnID8gb3B0LmRlbWFuZE9wdGlvbiA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvbmZsaWN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmxpY3RzKGtleSwgb3B0LmNvbmZsaWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIG9wdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdChrZXksIG9wdC5kZWZhdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQuaW1wbGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsaWVzKGtleSwgb3B0LmltcGxpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5uYXJncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXJncyhrZXksIG9wdC5uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvbmZpZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnKGtleSwgb3B0LmNvbmZpZ1BhcnNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0Lm5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9ybWFsaXplKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNob2ljZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNob2ljZXMoa2V5LCBvcHQuY2hvaWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvZXJjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29lcmNlKGtleSwgb3B0LmNvZXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0Lmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cChrZXksIG9wdC5ncm91cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmJvb2xlYW4gfHwgb3B0LnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9vbGVhbihrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHQuYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbGVhbihvcHQuYWxpYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5hcnJheSB8fCBvcHQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXkoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5KG9wdC5hbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0Lm51bWJlciB8fCBvcHQudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlcihrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHQuYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKG9wdC5hbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LnN0cmluZyB8fCBvcHQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHQuYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nKG9wdC5hbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvdW50IHx8IG9wdC50eXBlID09PSAnY291bnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQuZ2xvYmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbChrZXksIG9wdC5nbG9iYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5kZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSA9IG9wdC5kZWZhdWx0RGVzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LnNraXBWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwVmFsaWRhdGlvbihrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IG9wdC5kZXNjcmliZSB8fCBvcHQuZGVzY3JpcHRpb24gfHwgb3B0LmRlc2M7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbnMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZ2V0RGVzY3JpcHRpb25zKCk7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZXNjcmlwdGlvbnMsIGtleSkgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGVzYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaWJlKGtleSwgZGVzYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmhpZGRlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5yZXF1aXJlc0FyZykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZXNBcmcoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb3B0aW9ucyhrZXksIG9wdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb24oa2V5LCBvcHQpO1xuICAgIH1cbiAgICBwYXJzZShhcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8YXJyYXldIFtmdW5jdGlvbnxib29sZWFufG9iamVjdF0gW2Z1bmN0aW9uXScsIFthcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba0ZyZWV6ZV0oKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXJncyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNob3J0Q2lyY3VpdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBzaG9ydENpcmN1aXQsIFwiZlwiKTtcbiAgICAgICAgICAgIHNob3J0Q2lyY3VpdCA9IF9wYXJzZUZuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2hvcnRDaXJjdWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIHNob3J0Q2lyY3VpdCwgXCJmXCIpO1xuICAgICAgICAgICAgc2hvcnRDaXJjdWl0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaG9ydENpcmN1aXQpXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBhcmdzLCBcImZcIik7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSlcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXShhcmdzLCAhIXNob3J0Q2lyY3VpdCk7XG4gICAgICAgIGNvbnN0IHRtcFBhcnNlZCA9IHRoaXMucGFyc2VkO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5zZXRQYXJzZWQodGhpcy5wYXJzZWQpO1xuICAgICAgICBpZiAoaXNQcm9taXNlKHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRcbiAgICAgICAgICAgICAgICAudGhlbihhcmd2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIikpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIFwiZlwiKSwgYXJndiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKShlcnIsIHRoaXMucGFyc2VkLmFyZ3YsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzW2tVbmZyZWV6ZV0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlZCA9IHRtcFBhcnNlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpKVxuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIFwiZlwiKSwgcGFyc2VkLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXNba1VuZnJlZXplXSgpO1xuICAgICAgICAgICAgdGhpcy5wYXJzZWQgPSB0bXBQYXJzZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gICAgcGFyc2VBc3luYyhhcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuKSB7XG4gICAgICAgIGNvbnN0IG1heWJlUHJvbWlzZSA9IHRoaXMucGFyc2UoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbik7XG4gICAgICAgIHJldHVybiAhaXNQcm9taXNlKG1heWJlUHJvbWlzZSlcbiAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKG1heWJlUHJvbWlzZSlcbiAgICAgICAgICAgIDogbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICBwYXJzZVN5bmMoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbikge1xuICAgICAgICBjb25zdCBtYXliZVByb21pc2UgPSB0aGlzLnBhcnNlKGFyZ3MsIHNob3J0Q2lyY3VpdCwgX3BhcnNlRm4pO1xuICAgICAgICBpZiAoaXNQcm9taXNlKG1heWJlUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoJy5wYXJzZVN5bmMoKSBtdXN0IG5vdCBiZSB1c2VkIHdpdGggYXN5bmNocm9ub3VzIGJ1aWxkZXJzLCBoYW5kbGVycywgb3IgbWlkZGxld2FyZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIHBhcnNlckNvbmZpZ3VyYXRpb24oY29uZmlnKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3Q+JywgW2NvbmZpZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlckNvbmZpZywgY29uZmlnLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwa2dDb25mKGtleSwgcm9vdFBhdGgpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZz4gW3N0cmluZ10nLCBba2V5LCByb290UGF0aF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBsZXQgY29uZiA9IG51bGw7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXNba1BrZ1VwXShyb290UGF0aCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpKTtcbiAgICAgICAgaWYgKG9ialtrZXldICYmIHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmYgPSBhcHBseUV4dGVuZHMob2JqW2tleV0sIHJvb3RQYXRoIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY3dkLCBcImZcIiksIHRoaXNba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKClbJ2RlZXAtbWVyZ2UtY29uZmlnJ10gfHwgZmFsc2UsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgPSAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlnT2JqZWN0cyB8fCBbXSkuY29uY2F0KGNvbmYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwb3NpdGlvbmFsKGtleSwgb3B0cykge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPiA8b2JqZWN0PicsIFtrZXksIG9wdHNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkT3B0cyA9IFtcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgICdkZWZhdWx0RGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2ltcGxpZXMnLFxuICAgICAgICAgICAgJ25vcm1hbGl6ZScsXG4gICAgICAgICAgICAnY2hvaWNlcycsXG4gICAgICAgICAgICAnY29uZmxpY3RzJyxcbiAgICAgICAgICAgICdjb2VyY2UnLFxuICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgJ2Rlc2NyaWJlJyxcbiAgICAgICAgICAgICdkZXNjJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAnYWxpYXMnLFxuICAgICAgICBdO1xuICAgICAgICBvcHRzID0gb2JqRmlsdGVyKG9wdHMsIChrLCB2KSA9PiB7XG4gICAgICAgICAgICBpZiAoayA9PT0gJ3R5cGUnICYmICFbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbiddLmluY2x1ZGVzKHYpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRPcHRzLmluY2x1ZGVzKGspO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZnVsbENvbW1hbmQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbnRleHQsIFwiZlwiKS5mdWxsQ29tbWFuZHNbX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LCBcImZcIikuZnVsbENvbW1hbmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBwYXJzZU9wdGlvbnMgPSBmdWxsQ29tbWFuZFxuICAgICAgICAgICAgPyBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5jbWRUb1BhcnNlT3B0aW9ucyhmdWxsQ29tbWFuZClcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGFycmF5OiBbXSxcbiAgICAgICAgICAgICAgICBhbGlhczoge30sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgICAgICAgICAgZGVtYW5kOiB7fSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIG9iamVjdEtleXMocGFyc2VPcHRpb25zKS5mb3JFYWNoKHBrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlT3B0aW9uID0gcGFyc2VPcHRpb25zW3BrXTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlT3B0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZU9wdGlvbi5pbmRleE9mKGtleSkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBvcHRzW3BrXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VPcHRpb25ba2V5XSAmJiAhKHBrIGluIG9wdHMpKVxuICAgICAgICAgICAgICAgICAgICBvcHRzW3BrXSA9IHBhcnNlT3B0aW9uW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyb3VwKGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbihrZXksIG9wdHMpO1xuICAgIH1cbiAgICByZWNvbW1lbmRDb21tYW5kcyhyZWNvbW1lbmQgPSB0cnVlKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFuXScsIFtyZWNvbW1lbmRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcywgcmVjb21tZW5kLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXF1aXJlZChrZXlzLCBtYXgsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kZW1hbmQoa2V5cywgbWF4LCBtc2cpO1xuICAgIH1cbiAgICByZXF1aXJlKGtleXMsIG1heCwgbXNnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbWFuZChrZXlzLCBtYXgsIG1zZyk7XG4gICAgfVxuICAgIHJlcXVpcmVzQXJnKGtleXMpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fHN0cmluZ3xvYmplY3Q+IFtudW1iZXJdJywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlzID09PSAnc3RyaW5nJyAmJiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5uYXJnW2tleXNdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeV0odGhpcy5yZXF1aXJlc0FyZy5iaW5kKHRoaXMpLCAnbmFyZycsIGtleXMsIE5hTik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dDb21wbGV0aW9uU2NyaXB0KCQwLCBjbWQpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ10gW3N0cmluZ10nLCBbJDAsIGNtZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICAkMCA9ICQwIHx8IHRoaXMuJDA7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIikubG9nKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLmdlbmVyYXRlQ29tcGxldGlvblNjcmlwdCgkMCwgY21kIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSB8fCAnY29tcGxldGlvbicpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dIZWxwKGxldmVsKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8ZnVuY3Rpb25dJywgW2xldmVsXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmhhc0NhY2hlZEhlbHBNZXNzYWdlKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJzZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZSA9IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBcImZcIiksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKHBhcnNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5zaG93SGVscChsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyUmVzcG9uc2UgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5ydW5EZWZhdWx0QnVpbGRlck9uKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShidWlsZGVyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRlclJlc3BvbnNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHAobGV2ZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5zaG93SGVscChsZXZlbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzY3JpcHROYW1lKHNjcmlwdE5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXN0b21TY3JpcHROYW1lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kMCA9IHNjcmlwdE5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93SGVscE9uRmFpbChlbmFibGVkLCBtZXNzYWdlKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFufHN0cmluZ10gW3N0cmluZ10nLCBbZW5hYmxlZCwgbWVzc2FnZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHBPbkZhaWwoZW5hYmxlZCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93VmVyc2lvbihsZXZlbCkge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGZ1bmN0aW9uXScsIFtsZXZlbF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd1ZlcnNpb24obGV2ZWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2tpcFZhbGlkYXRpb24oa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnc2tpcFZhbGlkYXRpb24nLCBrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmljdChlbmFibGVkKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFuXScsIFtlbmFibGVkXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0LCBlbmFibGVkICE9PSBmYWxzZSwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RyaWN0Q29tbWFuZHMoZW5hYmxlZCkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBlbmFibGVkICE9PSBmYWxzZSwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RyaWN0T3B0aW9ucyhlbmFibGVkKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFuXScsIFtlbmFibGVkXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgZW5hYmxlZCAhPT0gZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmluZyhrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdzdHJpbmcnLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGVybWluYWxXaWR0aCgpIHtcbiAgICAgICAgYXJnc2VydChbXSwgMCk7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLnN0ZENvbHVtbnM7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsZShvYmopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlU3RyaW5ncyhvYmopO1xuICAgIH1cbiAgICB1cGRhdGVTdHJpbmdzKG9iaikge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0PicsIFtvYmpdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4udXBkYXRlTG9jYWxlKG9iaik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1c2FnZShtc2csIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8bnVsbHx1bmRlZmluZWQ+IFtzdHJpbmd8Ym9vbGVhbl0gW2Z1bmN0aW9ufG9iamVjdF0gW2Z1bmN0aW9uXScsIFttc2csIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIG51bGwsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIGlmICgobXNnIHx8ICcnKS5tYXRjaCgvXlxcJDAoIHwkKS8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZChtc2csIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoJy51c2FnZSgpIGRlc2NyaXB0aW9uIG11c3Qgc3RhcnQgd2l0aCAkMCBpZiBiZWluZyB1c2VkIGFzIGFsaWFzIGZvciAuY29tbWFuZCgpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikudXNhZ2UobXNnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVzYWdlQ29uZmlndXJhdGlvbihjb25maWcpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdD4nLCBbY29uZmlnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2VDb25maWcsIGNvbmZpZywgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmVyc2lvbihvcHQsIG1zZywgdmVyKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWZXJzaW9uT3B0ID0gJ3ZlcnNpb24nO1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbnxzdHJpbmddIFtzdHJpbmddIFtzdHJpbmddJywgW29wdCwgbXNnLCB2ZXJdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICB0aGlzW2tEZWxldGVGcm9tUGFyc2VySGludE9iamVjdF0oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnZlcnNpb24odW5kZWZpbmVkKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgbnVsbCwgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB2ZXIgPSB0aGlzW2tHdWVzc1ZlcnNpb25dKCk7XG4gICAgICAgICAgICBvcHQgPSBkZWZhdWx0VmVyc2lvbk9wdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAob3B0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVyID0gb3B0O1xuICAgICAgICAgICAgb3B0ID0gZGVmYXVsdFZlcnNpb25PcHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdmVyID0gbXNnO1xuICAgICAgICAgICAgbXNnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgdHlwZW9mIG9wdCA9PT0gJ3N0cmluZycgPyBvcHQgOiBkZWZhdWx0VmVyc2lvbk9wdCwgXCJmXCIpO1xuICAgICAgICBtc2cgPSBtc2cgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmRlZmVyWTE4bkxvb2t1cCgnU2hvdyB2ZXJzaW9uIG51bWJlcicpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikudmVyc2lvbih2ZXIgfHwgdW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5ib29sZWFuKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgXCJmXCIpKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSwgbXNnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHdyYXAoY29scykge1xuICAgICAgICBhcmdzZXJ0KCc8bnVtYmVyfG51bGx8dW5kZWZpbmVkPicsIFtjb2xzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS53cmFwKGNvbHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgWyhfWWFyZ3NJbnN0YW5jZV9jb21tYW5kID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfY3dkID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfY29udGV4dCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24gPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2RlZmF1bHRTaG93SGlkZGVuT3B0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZW1pdHRlZFdhcm5pbmdzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2dyb3VwcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcGFyZW50UmVxdWlyZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3BhcnNlckNvbmZpZyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4gPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wa2dzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3NoaW0gPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3VzYWdlQ29uZmlnID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24gPSBuZXcgV2Vha01hcCgpLCBrQ29weURvdWJsZURhc2gpXShhcmd2KSB7XG4gICAgICAgIGlmICghYXJndi5fIHx8ICFhcmd2WyctLSddKVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgIGFyZ3YuXy5wdXNoLmFwcGx5KGFyZ3YuXywgYXJndlsnLS0nXSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZWxldGUgYXJndlsnLS0nXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2VycikgeyB9XG4gICAgICAgIHJldHVybiBhcmd2O1xuICAgIH1cbiAgICBba0NyZWF0ZUxvZ2dlcl0oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzW2tIYXNQYXJzZUNhbGxiYWNrXSgpKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikgKyAnXFxuJywgXCJmXCIpO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpICsgYXJncy5qb2luKCcgJyksIFwiZlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXNba0hhc1BhcnNlQ2FsbGJhY2tdKCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpICsgJ1xcbicsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSArIGFyZ3Muam9pbignICcpLCBcImZcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBba0RlbGV0ZUZyb21QYXJzZXJIaW50T2JqZWN0XShvcHRpb25LZXkpIHtcbiAgICAgICAgb2JqZWN0S2V5cyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKSkuZm9yRWFjaCgoaGludEtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCgoa2V5KSA9PiBrZXkgPT09ICdjb25maWdPYmplY3RzJykoaGludEtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgaGludCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW2hpbnRLZXldO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGludCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGludC5pbmNsdWRlcyhvcHRpb25LZXkpKVxuICAgICAgICAgICAgICAgICAgICBoaW50LnNwbGljZShoaW50LmluZGV4T2Yob3B0aW9uS2V5KSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgaGludCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgaGludFtvcHRpb25LZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5nZXREZXNjcmlwdGlvbnMoKVtvcHRpb25LZXldO1xuICAgIH1cbiAgICBba0VtaXRXYXJuaW5nXSh3YXJuaW5nLCB0eXBlLCBkZWR1cGxpY2F0aW9uSWQpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncywgXCJmXCIpW2RlZHVwbGljYXRpb25JZF0pIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuZW1pdFdhcm5pbmcod2FybmluZywgdHlwZSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncywgXCJmXCIpW2RlZHVwbGljYXRpb25JZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtrRnJlZXplXSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLCBcImZcIikucHVzaCh7XG4gICAgICAgICAgICBvcHRpb25zOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKSxcbiAgICAgICAgICAgIGNvbmZpZ09iamVjdHM6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMuc2xpY2UoMCksXG4gICAgICAgICAgICBleGl0UHJvY2VzczogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpLFxuICAgICAgICAgICAgZ3JvdXBzOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpLFxuICAgICAgICAgICAgc3RyaWN0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgXCJmXCIpLFxuICAgICAgICAgICAgc3RyaWN0Q29tbWFuZHM6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIFwiZlwiKSxcbiAgICAgICAgICAgIHN0cmljdE9wdGlvbnM6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgXCJmXCIpLFxuICAgICAgICAgICAgY29tcGxldGlvbkNvbW1hbmQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSxcbiAgICAgICAgICAgIG91dHB1dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSxcbiAgICAgICAgICAgIGV4aXRFcnJvcjogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIFwiZlwiKSxcbiAgICAgICAgICAgIGhhc091dHB1dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIFwiZlwiKSxcbiAgICAgICAgICAgIHBhcnNlZDogdGhpcy5wYXJzZWQsXG4gICAgICAgICAgICBwYXJzZUZuOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSxcbiAgICAgICAgICAgIHBhcnNlQ29udGV4dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIFwiZlwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mcmVlemUoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5mcmVlemUoKTtcbiAgICB9XG4gICAgW2tHZXREb2xsYXJaZXJvXSgpIHtcbiAgICAgICAgbGV0ICQwID0gJyc7XG4gICAgICAgIGxldCBkZWZhdWx0JDA7XG4gICAgICAgIGlmICgvXFxiKG5vZGV8aW9qc3xlbGVjdHJvbikoXFwuZXhlKT8kLy50ZXN0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuYXJndigpWzBdKSkge1xuICAgICAgICAgICAgZGVmYXVsdCQwID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5hcmd2KCkuc2xpY2UoMSwgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWZhdWx0JDAgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmFyZ3YoKS5zbGljZSgwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICAkMCA9IGRlZmF1bHQkMFxuICAgICAgICAgICAgLm1hcCh4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0aGlzW2tSZWJhc2VdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY3dkLCBcImZcIiksIHgpO1xuICAgICAgICAgICAgcmV0dXJuIHgubWF0Y2goL14oXFwvfChbYS16QS1aXTopP1xcXFwpLykgJiYgYi5sZW5ndGggPCB4Lmxlbmd0aCA/IGIgOiB4O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJyAnKVxuICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLmdldEVudignXycpICYmXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRQcm9jZXNzQXJndkJpbigpID09PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ18nKSkge1xuICAgICAgICAgICAgJDAgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKVxuICAgICAgICAgICAgICAgIC5nZXRFbnYoJ18nKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnBhdGguZGlybmFtZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmV4ZWNQYXRoKCkpfS9gLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQwO1xuICAgIH1cbiAgICBba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRVc2FnZUNvbmZpZ3VyYXRpb25dKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZywgXCJmXCIpO1xuICAgIH1cbiAgICBba0d1ZXNzTG9jYWxlXSgpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSwgXCJmXCIpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBsb2NhbGUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xDX0FMTCcpIHx8XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xDX01FU1NBR0VTJykgfHxcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLmdldEVudignTEFORycpIHx8XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xBTkdVQUdFJykgfHxcbiAgICAgICAgICAgICdlbl9VUyc7XG4gICAgICAgIHRoaXMubG9jYWxlKGxvY2FsZS5yZXBsYWNlKC9bLjpdLiovLCAnJykpO1xuICAgIH1cbiAgICBba0d1ZXNzVmVyc2lvbl0oKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXNba1BrZ1VwXSgpO1xuICAgICAgICByZXR1cm4gb2JqLnZlcnNpb24gfHwgJ3Vua25vd24nO1xuICAgIH1cbiAgICBba1BhcnNlUG9zaXRpb25hbE51bWJlcnNdKGFyZ3YpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3ZbJy0tJ10gPyBhcmd2WyctLSddIDogYXJndi5fO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgYXJnOyAoYXJnID0gYXJnc1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuUGFyc2VyLmxvb2tzTGlrZU51bWJlcihhcmcpICYmXG4gICAgICAgICAgICAgICAgTnVtYmVyLmlzU2FmZUludGVnZXIoTWF0aC5mbG9vcihwYXJzZUZsb2F0KGAke2FyZ31gKSkpKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IE51bWJlcihhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmd2O1xuICAgIH1cbiAgICBba1BrZ1VwXShyb290UGF0aCkge1xuICAgICAgICBjb25zdCBucGF0aCA9IHJvb3RQYXRoIHx8ICcqJztcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGtncywgXCJmXCIpW25wYXRoXSlcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF07XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBzdGFydERpciA9IHJvb3RQYXRoIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLm1haW5GaWxlbmFtZTtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wYXRoLmV4dG5hbWUoc3RhcnREaXIpKSB7XG4gICAgICAgICAgICAgICAgc3RhcnREaXIgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wYXRoLmRpcm5hbWUoc3RhcnREaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGtnSnNvblBhdGggPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5maW5kVXAoc3RhcnREaXIsIChkaXIsIG5hbWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVzLmluY2x1ZGVzKCdwYWNrYWdlLmpzb24nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3BhY2thZ2UuanNvbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwocGtnSnNvblBhdGgsIHVuZGVmaW5lZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgb2JqID0gSlNPTi5wYXJzZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5yZWFkRmlsZVN5bmMocGtnSnNvblBhdGgsICd1dGY4JykpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfbm9vcCkgeyB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGtncywgXCJmXCIpW25wYXRoXSA9IG9iaiB8fCB7fTtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGtncywgXCJmXCIpW25wYXRoXTtcbiAgICB9XG4gICAgW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheV0odHlwZSwga2V5cykge1xuICAgICAgICBrZXlzID0gW10uY29uY2F0KGtleXMpO1xuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGtleSA9IHRoaXNba1Nhbml0aXplS2V5XShrZXkpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIilbdHlwZV0ucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKGJ1aWxkZXIsIHR5cGUsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50RGljdGlvbmFyeV0oYnVpbGRlciwgdHlwZSwga2V5LCB2YWx1ZSwgKHR5cGUsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW3R5cGVdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFtrUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludERpY3Rpb25hcnldKGJ1aWxkZXIsIHR5cGUsIGtleSwgdmFsdWUsICh0eXBlLCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVt0eXBlXVtrZXldID0gKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW3R5cGVdW2tleV0gfHwgW10pLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBba1BvcHVsYXRlUGFyc2VySGludERpY3Rpb25hcnldKGJ1aWxkZXIsIHR5cGUsIGtleSwgdmFsdWUsIHNpbmdsZUtleUhhbmRsZXIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgICAga2V5LmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgYnVpbGRlcihrLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoKGtleSkgPT4gdHlwZW9mIGtleSA9PT0gJ29iamVjdCcpKGtleSkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBvZiBvYmplY3RLZXlzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyKGssIGtleVtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaW5nbGVLZXlIYW5kbGVyKHR5cGUsIHRoaXNba1Nhbml0aXplS2V5XShrZXkpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW2tTYW5pdGl6ZUtleV0oa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdfX3Byb3RvX18nKVxuICAgICAgICAgICAgcmV0dXJuICdfX19wcm90b19fXyc7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIFtrU2V0S2V5XShrZXksIHNldCkge1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXNba1NldEtleV0uYmluZCh0aGlzKSwgJ2tleScsIGtleSwgc2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFtrVW5mcmVlemVdKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sLCBfbTtcbiAgICAgICAgY29uc3QgZnJvemVuID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLCBcImZcIikucG9wKCk7XG4gICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKGZyb3plbiwgdW5kZWZpbmVkLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgIGxldCBjb25maWdPYmplY3RzO1xuICAgICAgICAoX2EgPSB0aGlzLCBfYiA9IHRoaXMsIF9jID0gdGhpcywgX2QgPSB0aGlzLCBfZSA9IHRoaXMsIF9mID0gdGhpcywgX2cgPSB0aGlzLCBfaCA9IHRoaXMsIF9qID0gdGhpcywgX2sgPSB0aGlzLCBfbCA9IHRoaXMsIF9tID0gdGhpcywge1xuICAgICAgICAgICAgb3B0aW9uczogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2EsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBjb25maWdPYmplY3RzLFxuICAgICAgICAgICAgZXhpdFByb2Nlc3M6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9iLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIGdyb3VwczogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2MsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIG91dHB1dDogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2QsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIGV4aXRFcnJvcjogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2UsIF9ZYXJnc0luc3RhbmNlX2V4aXRFcnJvciwgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIGhhc091dHB1dDogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2YsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIHBhcnNlZDogdGhpcy5wYXJzZWQsXG4gICAgICAgICAgICBzdHJpY3Q6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9nLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBzdHJpY3RDb21tYW5kczogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2gsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgc3RyaWN0T3B0aW9uczogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2osIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBjb21wbGV0aW9uQ29tbWFuZDogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2ssIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgcGFyc2VGbjogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2wsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBwYXJzZUNvbnRleHQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9tLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgIH0gPSBmcm96ZW4pO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzID0gY29uZmlnT2JqZWN0cztcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnVuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnVuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLnVuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLnVuZnJlZXplKCk7XG4gICAgfVxuICAgIFtrVmFsaWRhdGVBc3luY10odmFsaWRhdGlvbiwgYXJndikge1xuICAgICAgICByZXR1cm4gbWF5YmVBc3luY1Jlc3VsdChhcmd2LCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdGlvbihyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEludGVybmFsTWV0aG9kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldENvbW1hbmRJbnN0YW5jZTogdGhpc1trR2V0Q29tbWFuZEluc3RhbmNlXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0Q29udGV4dDogdGhpc1trR2V0Q29udGV4dF0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldEhhc091dHB1dDogdGhpc1trR2V0SGFzT3V0cHV0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0TG9nZ2VySW5zdGFuY2U6IHRoaXNba0dldExvZ2dlckluc3RhbmNlXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0UGFyc2VDb250ZXh0OiB0aGlzW2tHZXRQYXJzZUNvbnRleHRdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRQYXJzZXJDb25maWd1cmF0aW9uOiB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0VXNhZ2VDb25maWd1cmF0aW9uOiB0aGlzW2tHZXRVc2FnZUNvbmZpZ3VyYXRpb25dLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRVc2FnZUluc3RhbmNlOiB0aGlzW2tHZXRVc2FnZUluc3RhbmNlXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0VmFsaWRhdGlvbkluc3RhbmNlOiB0aGlzW2tHZXRWYWxpZGF0aW9uSW5zdGFuY2VdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBoYXNQYXJzZUNhbGxiYWNrOiB0aGlzW2tIYXNQYXJzZUNhbGxiYWNrXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaXNHbG9iYWxDb250ZXh0OiB0aGlzW2tJc0dsb2JhbENvbnRleHRdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBwb3N0UHJvY2VzczogdGhpc1trUG9zdFByb2Nlc3NdLmJpbmQodGhpcyksXG4gICAgICAgICAgICByZXNldDogdGhpc1trUmVzZXRdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBydW5WYWxpZGF0aW9uOiB0aGlzW2tSdW5WYWxpZGF0aW9uXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHM6IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgc2V0SGFzT3V0cHV0OiB0aGlzW2tTZXRIYXNPdXRwdXRdLmJpbmQodGhpcyksXG4gICAgICAgIH07XG4gICAgfVxuICAgIFtrR2V0Q29tbWFuZEluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpO1xuICAgIH1cbiAgICBba0dldENvbnRleHRdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0SGFzT3V0cHV0XSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0TG9nZ2VySW5zdGFuY2VdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRQYXJzZUNvbnRleHRdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIFwiZlwiKSB8fCB7fTtcbiAgICB9XG4gICAgW2tHZXRVc2FnZUluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRWYWxpZGF0aW9uSW5zdGFuY2VdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIik7XG4gICAgfVxuICAgIFtrSGFzUGFyc2VDYWxsYmFja10oKSB7XG4gICAgICAgIHJldHVybiAhIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpO1xuICAgIH1cbiAgICBba0lzR2xvYmFsQ29udGV4dF0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2lzR2xvYmFsQ29udGV4dCwgXCJmXCIpO1xuICAgIH1cbiAgICBba1Bvc3RQcm9jZXNzXShhcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsIGNhbGxlZEZyb21Db21tYW5kLCBydW5HbG9iYWxNaWRkbGV3YXJlKSB7XG4gICAgICAgIGlmIChjYWxsZWRGcm9tQ29tbWFuZClcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICBpZiAoaXNQcm9taXNlKGFyZ3YpKVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgIGlmICghcG9wdWxhdGVEb3VibGVEYXNoKSB7XG4gICAgICAgICAgICBhcmd2ID0gdGhpc1trQ29weURvdWJsZURhc2hdKGFyZ3YpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlUG9zaXRpb25hbE51bWJlcnMgPSB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpWydwYXJzZS1wb3NpdGlvbmFsLW51bWJlcnMnXSB8fFxuICAgICAgICAgICAgdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0oKVsncGFyc2UtcG9zaXRpb25hbC1udW1iZXJzJ10gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHBhcnNlUG9zaXRpb25hbE51bWJlcnMpIHtcbiAgICAgICAgICAgIGFyZ3YgPSB0aGlzW2tQYXJzZVBvc2l0aW9uYWxOdW1iZXJzXShhcmd2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVuR2xvYmFsTWlkZGxld2FyZSkge1xuICAgICAgICAgICAgYXJndiA9IGFwcGx5TWlkZGxld2FyZShhcmd2LCB0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5nZXRNaWRkbGV3YXJlKCksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJndjtcbiAgICB9XG4gICAgW2tSZXNldF0oYWxpYXNlcyA9IHt9KSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikgfHwge30sIFwiZlwiKTtcbiAgICAgICAgY29uc3QgdG1wT3B0aW9ucyA9IHt9O1xuICAgICAgICB0bXBPcHRpb25zLmxvY2FsID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwgfHwgW107XG4gICAgICAgIHRtcE9wdGlvbnMuY29uZmlnT2JqZWN0cyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgfHwgW107XG4gICAgICAgIGNvbnN0IGxvY2FsTG9va3VwID0ge307XG4gICAgICAgIHRtcE9wdGlvbnMubG9jYWwuZm9yRWFjaChsID0+IHtcbiAgICAgICAgICAgIGxvY2FsTG9va3VwW2xdID0gdHJ1ZTtcbiAgICAgICAgICAgIChhbGlhc2VzW2xdIHx8IFtdKS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsTG9va3VwW2FdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgXCJmXCIpLCBPYmplY3Qua2V5cyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpKS5yZWR1Y2UoKGFjYywgZ3JvdXBOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIFwiZlwiKVtncm91cE5hbWVdLmZpbHRlcihrZXkgPT4gIShrZXkgaW4gbG9jYWxMb29rdXApKTtcbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhY2NbZ3JvdXBOYW1lXSA9IGtleXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSkpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3Vwcywge30sIFwiZlwiKTtcbiAgICAgICAgY29uc3QgYXJyYXlPcHRpb25zID0gW1xuICAgICAgICAgICAgJ2FycmF5JyxcbiAgICAgICAgICAgICdib29sZWFuJyxcbiAgICAgICAgICAgICdzdHJpbmcnLFxuICAgICAgICAgICAgJ3NraXBWYWxpZGF0aW9uJyxcbiAgICAgICAgICAgICdjb3VudCcsXG4gICAgICAgICAgICAnbm9ybWFsaXplJyxcbiAgICAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgICAgJ2hpZGRlbk9wdGlvbnMnLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBvYmplY3RPcHRpb25zID0gW1xuICAgICAgICAgICAgJ25hcmcnLFxuICAgICAgICAgICAgJ2tleScsXG4gICAgICAgICAgICAnYWxpYXMnLFxuICAgICAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAgICAgJ2RlZmF1bHREZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAnY29uZmlnJyxcbiAgICAgICAgICAgICdjaG9pY2VzJyxcbiAgICAgICAgICAgICdkZW1hbmRlZE9wdGlvbnMnLFxuICAgICAgICAgICAgJ2RlbWFuZGVkQ29tbWFuZHMnLFxuICAgICAgICAgICAgJ2RlcHJlY2F0ZWRPcHRpb25zJyxcbiAgICAgICAgXTtcbiAgICAgICAgYXJyYXlPcHRpb25zLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICB0bXBPcHRpb25zW2tdID0gKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW2tdIHx8IFtdKS5maWx0ZXIoKGspID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYmplY3RPcHRpb25zLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgIHRtcE9wdGlvbnNba10gPSBvYmpGaWx0ZXIoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIilba10sIGsgPT4gIWxvY2FsTG9va3VwW2tdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRtcE9wdGlvbnMuZW52UHJlZml4ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZW52UHJlZml4O1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIHRtcE9wdGlvbnMsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpXG4gICAgICAgICAgICA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5yZXNldChsb2NhbExvb2t1cClcbiAgICAgICAgICAgIDogVXNhZ2UodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIilcbiAgICAgICAgICAgID8gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikucmVzZXQobG9jYWxMb29rdXApXG4gICAgICAgICAgICA6IFZhbGlkYXRpb24odGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKVxuICAgICAgICAgICAgPyBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5yZXNldCgpXG4gICAgICAgICAgICA6IENvbW1hbmQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKSwgXCJmXCIpO1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpKVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBDb21wbGV0aW9uKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5yZXNldCgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBudWxsLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCAnJywgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRFcnJvciwgbnVsbCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgdGhpcy5wYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFtrUmViYXNlXShiYXNlLCBkaXIpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnBhdGgucmVsYXRpdmUoYmFzZSwgZGlyKTtcbiAgICB9XG4gICAgW2tSdW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kc10oYXJncywgc2hvcnRDaXJjdWl0LCBjYWxsZWRGcm9tQ29tbWFuZCwgY29tbWFuZEluZGV4ID0gMCwgaGVscE9ubHkgPSBmYWxzZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgIGxldCBza2lwVmFsaWRhdGlvbiA9ICEhY2FsbGVkRnJvbUNvbW1hbmQgfHwgaGVscE9ubHk7XG4gICAgICAgIGFyZ3MgPSBhcmdzIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuX18gPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS55MThuLl9fO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWd1cmF0aW9uID0gdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0oKTtcbiAgICAgICAgY29uc3QgcG9wdWxhdGVEb3VibGVEYXNoID0gISFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWd1cmF0aW9uWydwb3B1bGF0ZS0tJ107XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ3VyYXRpb24sIHtcbiAgICAgICAgICAgICdwb3B1bGF0ZS0tJzogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLlBhcnNlci5kZXRhaWxlZChhcmdzLCBPYmplY3QuYXNzaWduKHt9LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKSwge1xuICAgICAgICAgICAgY29uZmlndXJhdGlvbjogeyAncGFyc2UtcG9zaXRpb25hbC1udW1iZXJzJzogZmFsc2UsIC4uLmNvbmZpZyB9LFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGFyZ3YgPSBPYmplY3QuYXNzaWduKHBhcnNlZC5hcmd2LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlQ29udGV4dCwgXCJmXCIpKTtcbiAgICAgICAgbGV0IGFyZ3ZQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBhbGlhc2VzID0gcGFyc2VkLmFsaWFzZXM7XG4gICAgICAgIGxldCBoZWxwT3B0U2V0ID0gZmFsc2U7XG4gICAgICAgIGxldCB2ZXJzaW9uT3B0U2V0ID0gZmFsc2U7XG4gICAgICAgIE9iamVjdC5rZXlzKGFyZ3YpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpICYmIGFyZ3Zba2V5XSkge1xuICAgICAgICAgICAgICAgIGhlbHBPcHRTZXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSAmJiBhcmd2W2tleV0pIHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uT3B0U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFyZ3YuJDAgPSB0aGlzLiQwO1xuICAgICAgICB0aGlzLnBhcnNlZCA9IHBhcnNlZDtcbiAgICAgICAgaWYgKGNvbW1hbmRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmNsZWFyQ2FjaGVkSGVscE1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpc1trR3Vlc3NMb2NhbGVdKCk7XG4gICAgICAgICAgICBpZiAoc2hvcnRDaXJjdWl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba1Bvc3RQcm9jZXNzXShhcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsICEhY2FsbGVkRnJvbUNvbW1hbmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlbHBDbWRzID0gW19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpXVxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGFsaWFzZXNbX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIildIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGsgPT4gay5sZW5ndGggPiAxKTtcbiAgICAgICAgICAgICAgICBpZiAoaGVscENtZHMuaW5jbHVkZXMoJycgKyBhcmd2Ll9bYXJndi5fLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICBhcmd2Ll8ucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGhlbHBPcHRTZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaXNHbG9iYWxDb250ZXh0LCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlcktleXMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5nZXRDb21tYW5kcygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdENvbXBsZXRpb25zID0gKChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29tcGxldGlvbktleSlcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jb21wbGV0aW9uS2V5LFxuICAgICAgICAgICAgICAgICAgICAuLi4oKF9kID0gdGhpcy5nZXRBbGlhc2VzKClbKF9jID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb21wbGV0aW9uS2V5XSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogW10pLFxuICAgICAgICAgICAgICAgIF0uc29tZSgoa2V5KSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndiwga2V5KSlcbiAgICAgICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICAgICAgY29uc3Qgc2tpcFJlY29tbWVuZGF0aW9uID0gaGVscE9wdFNldCB8fCByZXF1ZXN0Q29tcGxldGlvbnMgfHwgaGVscE9ubHk7XG4gICAgICAgICAgICBpZiAoYXJndi5fLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0VW5rbm93bkNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb21tYW5kSW5kZXggfHwgMCwgY21kOyBhcmd2Ll9baV0gIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbWQgPSBTdHJpbmcoYXJndi5fW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyS2V5cy5pbmNsdWRlcyhjbWQpICYmIGNtZCAhPT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5uZXJBcmd2ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucnVuQ29tbWFuZChjbWQsIHRoaXMsIHBhcnNlZCwgaSArIDEsIGhlbHBPbmx5LCBoZWxwT3B0U2V0IHx8IHZlcnNpb25PcHRTZXQgfHwgaGVscE9ubHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tQb3N0UHJvY2Vzc10oaW5uZXJBcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsICEhY2FsbGVkRnJvbUNvbW1hbmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFmaXJzdFVua25vd25Db21tYW5kICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kICE9PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFVua25vd25Db21tYW5kID0gY21kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuaGFzRGVmYXVsdENvbW1hbmQoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcywgXCJmXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFVua25vd25Db21tYW5kICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhc2tpcFJlY29tbWVuZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5yZWNvbW1lbmRDb21tYW5kcyhmaXJzdFVua25vd25Db21tYW5kLCBoYW5kbGVyS2V5cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBhcmd2Ll8uaW5jbHVkZXMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgXCJmXCIpKSAmJlxuICAgICAgICAgICAgICAgICAgICAhcmVxdWVzdENvbXBsZXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBcImZcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCbG9ja2luZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29tcGxldGlvblNjcmlwdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmhhc0RlZmF1bHRDb21tYW5kKCkgJiYgIXNraXBSZWNvbW1lbmRhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyQXJndiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLnJ1bkNvbW1hbmQobnVsbCwgdGhpcywgcGFyc2VkLCAwLCBoZWxwT25seSwgaGVscE9wdFNldCB8fCB2ZXJzaW9uT3B0U2V0IHx8IGhlbHBPbmx5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trUG9zdFByb2Nlc3NdKGlubmVyQXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCAhIWNhbGxlZEZyb21Db21tYW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVxdWVzdENvbXBsZXRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSlcbiAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgYXJncyA9IFtdLmNvbmNhdChhcmdzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0aW9uQXJncyA9IGFyZ3Muc2xpY2UoYXJncy5pbmRleE9mKGAtLSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikuY29tcGxldGlvbktleX1gKSArIDEpO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLmdldENvbXBsZXRpb24oY29tcGxldGlvbkFyZ3MsIChlcnIsIGNvbXBsZXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgKGNvbXBsZXRpb25zIHx8IFtdKS5mb3JFYWNoKGNvbXBsZXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIsIFwiZlwiKS5sb2coY29tcGxldGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba1Bvc3RQcm9jZXNzXShhcmd2LCAhcG9wdWxhdGVEb3VibGVEYXNoLCAhIWNhbGxlZEZyb21Db21tYW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGVscE9wdFNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGVscChtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIikubG9nKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmVyc2lvbk9wdFNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnNob3dWZXJzaW9uKCdsb2cnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2tpcFZhbGlkYXRpb24gJiYgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuc2tpcFZhbGlkYXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uID0gT2JqZWN0LmtleXMoYXJndikuc29tZShrZXkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuc2tpcFZhbGlkYXRpb24uaW5kZXhPZihrZXkpID49IDAgJiYgYXJndltrZXldID09PSB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2tpcFZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLmVycm9yKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKHBhcnNlZC5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcXVlc3RDb21wbGV0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpc1trUnVuVmFsaWRhdGlvbl0oYWxpYXNlcywge30sIHBhcnNlZC5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FsbGVkRnJvbUNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3ZQcm9taXNlID0gYXBwbHlNaWRkbGV3YXJlKGFyZ3YsIHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLmdldE1pZGRsZXdhcmUoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJndlByb21pc2UgPSB0aGlzW2tWYWxpZGF0ZUFzeW5jXSh2YWxpZGF0aW9uLCBhcmd2UHJvbWlzZSAhPT0gbnVsbCAmJiBhcmd2UHJvbWlzZSAhPT0gdm9pZCAwID8gYXJndlByb21pc2UgOiBhcmd2KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShhcmd2UHJvbWlzZSkgJiYgIWNhbGxlZEZyb21Db21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2UHJvbWlzZSA9IGFyZ3ZQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcHBseU1pZGRsZXdhcmUoYXJndiwgdGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuZ2V0TWlkZGxld2FyZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgWUVycm9yKVxuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsKGVyci5tZXNzYWdlLCBlcnIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1trUG9zdFByb2Nlc3NdKGFyZ3ZQcm9taXNlICE9PSBudWxsICYmIGFyZ3ZQcm9taXNlICE9PSB2b2lkIDAgPyBhcmd2UHJvbWlzZSA6IGFyZ3YsIHBvcHVsYXRlRG91YmxlRGFzaCwgISFjYWxsZWRGcm9tQ29tbWFuZCwgdHJ1ZSk7XG4gICAgfVxuICAgIFtrUnVuVmFsaWRhdGlvbl0oYWxpYXNlcywgcG9zaXRpb25hbE1hcCwgcGFyc2VFcnJvcnMsIGlzRGVmYXVsdENvbW1hbmQpIHtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRPcHRpb25zID0geyAuLi50aGlzLmdldERlbWFuZGVkT3B0aW9ucygpIH07XG4gICAgICAgIHJldHVybiAoYXJndikgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcnNlRXJyb3JzKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IocGFyc2VFcnJvcnMubWVzc2FnZSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5ub25PcHRpb25Db3VudChhcmd2KTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnJlcXVpcmVkQXJndW1lbnRzKGFyZ3YsIGRlbWFuZGVkT3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgZmFpbGVkU3RyaWN0Q29tbWFuZHMgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICBmYWlsZWRTdHJpY3RDb21tYW5kcyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnVua25vd25Db21tYW5kcyhhcmd2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgXCJmXCIpICYmICFmYWlsZWRTdHJpY3RDb21tYW5kcykge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnVua25vd25Bcmd1bWVudHMoYXJndiwgYWxpYXNlcywgcG9zaXRpb25hbE1hcCwgISFpc0RlZmF1bHRDb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikudW5rbm93bkFyZ3VtZW50cyhhcmd2LCBhbGlhc2VzLCB7fSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmxpbWl0ZWRDaG9pY2VzKGFyZ3YpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuaW1wbGljYXRpb25zKGFyZ3YpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuY29uZmxpY3RpbmcoYXJndik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFtrU2V0SGFzT3V0cHV0XSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tUcmFja01hbnVhbGx5U2V0S2V5c10oa2V5cykge1xuICAgICAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlba2V5c10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlba10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlzWWFyZ3NJbnN0YW5jZSh5KSB7XG4gICAgcmV0dXJuICEheSAmJiB0eXBlb2YgeS5nZXRJbnRlcm5hbE1ldGhvZHMgPT09ICdmdW5jdGlvbic7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vLyBCb290c3RyYXBzIHlhcmdzIGZvciBFU006XG5pbXBvcnQgZXNtUGxhdGZvcm1TaGltIGZyb20gJy4vbGliL3BsYXRmb3JtLXNoaW1zL2VzbS5tanMnO1xuaW1wb3J0IHtZYXJnc0ZhY3Rvcnl9IGZyb20gJy4vYnVpbGQvbGliL3lhcmdzLWZhY3RvcnkuanMnO1xuXG5jb25zdCBZYXJncyA9IFlhcmdzRmFjdG9yeShlc21QbGF0Zm9ybVNoaW0pO1xuZXhwb3J0IGRlZmF1bHQgWWFyZ3M7XG5cbmV4cG9ydCB7WWFyZ3MgYXMgJ21vZHVsZS5leHBvcnRzJ307XG4iLCAiaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnXHJcbmltcG9ydCB7IGhpZGVCaW4gfSBmcm9tICd5YXJncy9oZWxwZXJzJ1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdub2RlOmZzJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xyXG5pbXBvcnQgeyBDcnlwdG9IZWxwZXJGYWN0b3J5IH0gZnJvbSAnLi4vc2VydmljZXMvQ3J5cHRvSGVscGVyRmFjdG9yeS50cyc7XHJcbmltcG9ydCB7IEpzb25GaWxlRW5jb2RpbmcgfSBmcm9tIFwiLi4vc2VydmljZXMvRmlsZURhdGFIZWxwZXIudHNcIjtcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uL3NlcnZpY2VzL0NvbnN0YW50cy50cyc7XHJcbmltcG9ydCAqIGFzIEluUGxhY2VDb25zdGFudHMgZnJvbSAnLi4vZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvRmVhdHVyZUlucGxhY2VDb25zdGFudHMudHMnO1xyXG5pbXBvcnQgeyBGZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcyB9IGZyb20gJy4uL2ZlYXR1cmVzL2ZlYXR1cmUtaW5wbGFjZS1lbmNyeXB0L2ZlYXR1cmVJbnBsYWNlVGV4dEFuYWx5c2lzLnRzJztcclxuXHJcbmludGVyZmFjZSBMaXN0aW5nIHtcclxuICAgIGZlYXR1cmVUeXBlOiAnSW5QbGFjZScgfCAnV2hvbGVOb3RlJztcclxuICAgIGZ1bGxQYXRoOiBzdHJpbmc7XHJcbiAgICByZWxhdGl2ZVBhdGg6IHN0cmluZztcclxuICAgIGV4dGVuc2lvbjogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdHtcclxuICAgIGxpc3Rpbmc6IExpc3Rpbmc7XHJcbiAgICBzdWNjZXNzOiBib29sZWFuO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRGVjcnlwdFJlc3VsdHtcclxuICAgIGxpc3Rpbmc6IExpc3Rpbmc7XHJcbiAgICBzdWNjZXNzOiBib29sZWFuO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgb3V0RmlsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5jbGFzcyBMaXN0Q29tbWFuZEhhbmRsZXIge1xyXG4gICAgXHJcblxyXG4gICAgYXN5bmMgYXJnSGFuZGxlciggZm9ybWF0IDogc3RyaW5nICkge1xyXG5cclxuICAgICAgICBjb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgICAgICBsZXQgb25TdGFydCA6ICgpID0+IHZvaWQ7XHJcbiAgICAgICAgbGV0IG9uTGlzdGluZyA6IChsOkxpc3RpbmcpID0+IHZvaWQ7XHJcbiAgICAgICAgbGV0IG9uRW5kIDogKCkgPT4gdm9pZDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBsaXN0aW5nczogTGlzdGluZ1tdID0gW107XHJcblxyXG5cclxuICAgICAgICBpZiAoIGZvcm1hdCA9PT0gJ2NzdicpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9uU3RhcnQgPSAoKSA9PiBjb25zb2xlLmxvZyggJ2ZlYXR1cmUsZnVsbFBhdGgscmVsYXRpdmVQYXRoLGV4dGVuc2lvbicgKTtcclxuICAgICAgICAgICAgb25MaXN0aW5nID0gKGwpID0+IGNvbnNvbGUubG9nKCBgXCIke2wuZmVhdHVyZVR5cGV9XCIsXCIke2wuZnVsbFBhdGh9XCIsXCIke2wucmVsYXRpdmVQYXRofVwiLFwiJHtsLmV4dGVuc2lvbn1cImAgKTtcclxuICAgICAgICAgICAgb25FbmQgPSAoKSA9PiB7fTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT0gJ2pzb24nKSB7XHJcblxyXG4gICAgICAgICAgICBvblN0YXJ0ID0gKCkgPT4ge307XHJcbiAgICAgICAgICAgIG9uTGlzdGluZyA9IChsKSA9PiBsaXN0aW5ncy5wdXNoKCBsICk7XHJcbiAgICAgICAgICAgIG9uRW5kID0gKCkgPT4gY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCBsaXN0aW5ncywgbnVsbCwgMiApICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAndGFibGUnKSB7XHJcblxyXG4gICAgICAgICAgICBvblN0YXJ0ID0gKCkgPT4ge307XHJcbiAgICAgICAgICAgIG9uTGlzdGluZyA9IChsKSA9PiBsaXN0aW5ncy5wdXNoKCBsICk7XHJcbiAgICAgICAgICAgIG9uRW5kID0gKCkgPT4gY29uc29sZS50YWJsZSggbGlzdGluZ3MgKTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIERlZmF1bHRcclxuICAgICAgICAgICAgb25TdGFydCA9ICgpID0+IHt9O1xyXG4gICAgICAgICAgICBvbkxpc3RpbmcgPSAobCkgPT4gY29uc29sZS5sb2coIGAke2wucmVsYXRpdmVQYXRofWAgKTtcclxuICAgICAgICAgICAgb25FbmQgPSAoKSA9PiB7fTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLm91dHB1dChcclxuICAgICAgICAgICAgY3dkLFxyXG4gICAgICAgICAgICBvblN0YXJ0LFxyXG4gICAgICAgICAgICBvbkxpc3RpbmcsXHJcbiAgICAgICAgICAgIG9uRW5kXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb3V0cHV0KFxyXG4gICAgICAgIGRpciA6IHN0cmluZyxcclxuICAgICAgICBzdGFydENhbGxiYWNrIDogKCkgPT4gdm9pZCxcclxuICAgICAgICBwZXJJdGVtQ2FsbGJhY2sgOiAobDpMaXN0aW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIGVuZENhbGxiYWNrIDogKCkgPT4gdm9pZFxyXG4gICAgKSA6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHN0YXJ0Q2FsbGJhY2soKTtcclxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IGwgb2YgVXRpbHMubGlzdGluZ3MoZGlyLCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgcGVySXRlbUNhbGxiYWNrKGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbmRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmNsYXNzIFRlc3RDb21tYW5kSGFuZGxlciB7XHJcblxyXG4gICAgYXN5bmMgYXJnSGFuZGxlciggcGFzc3dvcmRzOnN0cmluZ1tdLCBvbmx5TGlzdEZhaWxzOmJvb2xlYW4gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XHJcblxyXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbGlzdGluZyBvZiBVdGlscy5saXN0aW5ncyhjd2QsIHRydWUpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAobGlzdGluZy5mZWF0dXJlVHlwZSA9PSAnSW5QbGFjZScpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHJlc3VsdCBvZiB0aGlzLnRlc3RGb3JJblBsYWNlRGVjcnlwdGlvbiggbGlzdGluZywgcGFzc3dvcmRzICkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJlc3VsdCggcmVzdWx0LCBvbmx5TGlzdEZhaWxzICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RpbmcuZmVhdHVyZVR5cGUgPT0gJ1dob2xlTm90ZScpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnRlc3RGb3JXaG9sZU5vdGVEZWNyeXB0aW9uKCBsaXN0aW5nLCBwYXNzd29yZHMgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0UmVzdWx0KCByZXN1bHQsIG9ubHlMaXN0RmFpbHMgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jICogdGVzdEZvckluUGxhY2VEZWNyeXB0aW9uKCBsaXN0aW5nOiBMaXN0aW5nLCBwYXNzd29yZHM6c3RyaW5nW10gKSA6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxUZXN0UmVzdWx0PiB7XHJcblxyXG4gICAgICAgIGlmICggbGlzdGluZy5jb250ZW50ID09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHtcclxuICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdubyBjb250ZW50J1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsaW5lcyA9IGxpc3RpbmcuY29udGVudCEuc3BsaXQoICdcXG4nICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgbGluZUlkeCA9IDA7IGxpbmVJZHggPCBsaW5lcy5sZW5ndGg7IGxpbmVJZHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbbGluZUlkeF07XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVObyA9IGxpbmVJZHggKyAxO1xyXG4gICAgICAgICAgICBjb25zdCByZUlucGxhY2VNYXRjaGVyID0gL1x1RDgzRFx1REQxMCguKj8pXHVEODNEXHVERDEwL2c7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBBcnJheS5mcm9tKCBsaW5lLm1hdGNoQWxsKCByZUlucGxhY2VNYXRjaGVyICkgKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtYXRjaCBvZiBtYXRjaGVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMb2MgPSBgbGluZSAke2xpbmVOb30sIHBvcyAke21hdGNoLmluZGV4ISsxfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5jcnlwdGVkVGV4dCA9IGBcdUQ4M0RcdUREMTAke21hdGNoWzFdfVx1RDgzRFx1REQxMGA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdHh0QW5hbHlzaXMgPSBuZXcgRmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXMoIGVuY3J5cHRlZFRleHQgKTtcclxuICAgICAgICAgICAgICAgIGlmICghdHh0QW5hbHlzaXMuY2FuRGVjcnlwdCB8fCB0eHRBbmFseXNpcy5kZWNyeXB0YWJsZSA9PSBudWxsICl7XHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7bWF0Y2hMb2N9LCBjYW5ub3QgZGVjcnlwdGBcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaCA9IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGRGcm9tRGVjcnlwdGFibGVPck51bGwoIHR4dEFuYWx5c2lzLmRlY3J5cHRhYmxlICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNoID09IG51bGwgKXtcclxuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHttYXRjaExvY30sIHVua25vd24gZm9ybWF0YFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdhc0RlY3J5cHRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHdJZHggPSAwOyBwd0lkeCA8IHBhc3N3b3Jkcy5sZW5ndGg7IHB3SWR4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwdyA9IHBhc3N3b3Jkc1twd0lkeF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHdObyA9IHB3SWR4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWNyeXB0ZWRUZXh0ID0gYXdhaXQgY2guZGVjcnlwdEZyb21CYXNlNjQodHh0QW5hbHlzaXMuZGVjcnlwdGFibGUuYmFzZTY0Q2lwaGVyVGV4dCwgcHcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZGVjcnlwdGVkVGV4dCAhPSBudWxsICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhc0RlY3J5cHRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7bWF0Y2hMb2N9LCBwYXNzd29yZCAjJHtwd05vfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3YXNEZWNyeXB0ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRlc3RGb3JXaG9sZU5vdGVEZWNyeXB0aW9uKCBsaXN0aW5nOiBMaXN0aW5nLCBwYXNzd29yZHM6c3RyaW5nW10gKSA6IFByb21pc2U8VGVzdFJlc3VsdD4ge1xyXG4gICAgICAgIGlmKCBsaXN0aW5nLmNvbnRlbnQgPT0gbnVsbCB8fCBsaXN0aW5nLmNvbnRlbnQubGVuZ3RoID09IDAgKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdubyBjb250ZW50J1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBKc29uRmlsZUVuY29kaW5nLmRlY29kZSggbGlzdGluZy5jb250ZW50IHx8ICcnICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yTnVsbCggZmlsZURhdGEgKTtcclxuICAgICAgICBpZiAoIGNoID09IG51bGwgKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbmtub3duIGZvcm1hdCdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzd29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcHcgPSBwYXNzd29yZHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBjaC5kZWNyeXB0RnJvbUJhc2U2NChmaWxlRGF0YS5lbmNvZGVkRGF0YSwgcHcpXHJcbiAgICAgICAgICAgIGlmICggZGVjb2RlZCAhPSBudWxsICl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgcGFzc3dvcmQgIyR7aSsxfWBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAndW5hYmxlIHRvIGRlY3J5cHQnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRwdXRSZXN1bHQocmVzdWx0OiBUZXN0UmVzdWx0LCBvbmx5TGlzdEZhaWxzOmJvb2xlYW4pIHtcclxuICAgICAgICBpZiAob25seUxpc3RGYWlscyAmJiByZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBgJHtyZXN1bHQuc3VjY2VzcyA/ICdQQVNTRUQnIDogJ0ZBSUxFRCd9ID0+ICR7cmVzdWx0Lmxpc3RpbmcucmVsYXRpdmVQYXRofSA9PiAke3Jlc3VsdC5tZXNzYWdlfSA9PiAke3Jlc3VsdC5saXN0aW5nLmZlYXR1cmVUeXBlfWAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRwdXRSZXN1bHRzKHJlc3VsdHM6IFRlc3RSZXN1bHRbXSwgb25seUxpc3RGYWlsczpib29sZWFuKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dFJlc3VsdCggcmVzdWx0LCBvbmx5TGlzdEZhaWxzICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBEZWNyeXB0Q29tbWFuZEhhbmRsZXJ7XHJcbiAgICBhc3luYyBhcmdIYW5kbGVyKCBwYXNzd29yZHM6c3RyaW5nW10sIG91dGRpcjpzdHJpbmcsIGRyeXJ1bjpib29sZWFuICkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBgZGVjcnlwdGluZyR7ZHJ5cnVuPycgKGRyeSBydW4pJzonJ30uLi5gICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XHJcblxyXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbGlzdGluZyBvZiBVdGlscy5saXN0aW5ncyhjd2QsIHRydWUpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAobGlzdGluZy5mZWF0dXJlVHlwZSA9PSAnSW5QbGFjZScpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kZWNyeXB0SW5QbGFjZUxpc3RpbmcoIGxpc3RpbmcsIHBhc3N3b3Jkcywgb3V0ZGlyLCBkcnlydW4gKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJlc3VsdCggcmVzdWx0ICk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGluZy5mZWF0dXJlVHlwZSA9PSAnV2hvbGVOb3RlJyl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGVjcnlwdFdob2xlTm90ZUxpc3RpbmcoIGxpc3RpbmcsIHBhc3N3b3Jkcywgb3V0ZGlyLCBkcnlydW4gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0UmVzdWx0KCByZXN1bHQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGRlY3J5cHRJblBsYWNlTGlzdGluZyhsaXN0aW5nOiBMaXN0aW5nLCBwYXNzd29yZHM6IHN0cmluZ1tdLCBvdXRkaXI6IHN0cmluZywgZHJ5cnVuOiBib29sZWFuKSA6IFByb21pc2U8RGVjcnlwdFJlc3VsdD4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gbGlzdGluZy5jb250ZW50IS5zcGxpdCggJ1xcbicgKTtcclxuICAgICAgICBjb25zdCBkZWNyeXB0ZWRMaW5lcyA6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgbGluZUlkeCA9IDA7IGxpbmVJZHggPCBsaW5lcy5sZW5ndGg7IGxpbmVJZHgrKykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2xpbmVJZHhdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbGluZU5vID0gbGluZUlkeCArIDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZUlucGxhY2VNYXRjaGVycyA9IFtcclxuICAgICAgICAgICAgICAgIC8lJVx1RDgzRFx1REQxMCguKj8pXHVEODNEXHVERDEwJSUvZyxcclxuICAgICAgICAgICAgICAgIC9cdUQ4M0RcdUREMTAoLio/KVx1RDgzRFx1REQxMC9nXHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgIGxldCBkZWNyeXB0ZWRMaW5lID0gbGluZTtcclxuICAgICAgICAgICAgbGV0IG1hdGNoQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgZGVjcnlwdGVkQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCByZUlucGxhY2VNYXRjaGVyIG9mIHJlSW5wbGFjZU1hdGNoZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IG1hdGNoIG9mIGRlY3J5cHRlZExpbmUubWF0Y2hBbGwoIHJlSW5wbGFjZU1hdGNoZXIgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaENvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTG9jID0gYExpbmUgJHtsaW5lTm99LCBwb3MgJHttYXRjaC5pbmRleCErMX1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkVGV4dCA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuY3J5cHRlZFRleHQgPSBgXHVEODNEXHVERDEwJHttYXRjaFsxXX1cdUQ4M0RcdUREMTBgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHRBbmFseXNpcyA9IG5ldyBGZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcyggZW5jcnlwdGVkVGV4dCApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHh0QW5hbHlzaXMuY2FuRGVjcnlwdCB8fCB0eHRBbmFseXNpcy5kZWNyeXB0YWJsZSA9PSBudWxsICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRVJST1I6ICR7bWF0Y2hMb2N9LCBjYW5ub3QgZGVjcnlwdGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRGaWxlOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21EZWNyeXB0YWJsZU9yTnVsbCggdHh0QW5hbHlzaXMuZGVjcnlwdGFibGUgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGNoID09IG51bGwgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBFUlJPUjogJHttYXRjaExvY30sIHVua25vd24gZm9ybWF0YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dEZpbGU6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlY3J5cHRlZFRleHQgOiAgc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHdJZHggPSAwOyBwd0lkeCA8IHBhc3N3b3Jkcy5sZW5ndGg7IHB3SWR4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHcgPSBwYXNzd29yZHNbcHdJZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRUZXh0ID0gYXdhaXQgY2guZGVjcnlwdEZyb21CYXNlNjQodHh0QW5hbHlzaXMuZGVjcnlwdGFibGUuYmFzZTY0Q2lwaGVyVGV4dCwgcHcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGRlY3J5cHRlZFRleHQgIT0gbnVsbCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWNyeXB0ZWRUZXh0IT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZENvdW50ICsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0ZWRMaW5lID0gZGVjcnlwdGVkTGluZS5yZXBsYWNlKCBtYXRjaGVkVGV4dCwgZGVjcnlwdGVkVGV4dCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaENvdW50ICE9IGRlY3J5cHRlZENvdW50KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRVJST1I6IFVuYWJsZSB0byBkZWNyeXB0IGFsbCBtYXRjaGVzLiBMaW5lICR7bGluZU5vfSwgbWF0Y2ggY291bnQgJHttYXRjaENvdW50fSAhPSBkZWNyeXB0ZWQgY291bnQgJHtkZWNyeXB0ZWRDb3VudH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dEZpbGU6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVjcnlwdGVkTGluZXMucHVzaCggZGVjcnlwdGVkTGluZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvdXRGaWxlID0gcGF0aC5qb2luKCBvdXRkaXIsIGxpc3RpbmcucmVsYXRpdmVQYXRoICk7XHJcblxyXG4gICAgICAgIGlmICghZHJ5cnVuKXtcclxuICAgICAgICAgICAgY29uc3Qgb3V0RmlsZURpciA9IHBhdGguZGlybmFtZSggb3V0RmlsZSApO1xyXG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoIG91dEZpbGVEaXIgKSl7XHJcbiAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmMoIG91dEZpbGVEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCBvdXRGaWxlLCBkZWNyeXB0ZWRMaW5lcy5qb2luKCAnXFxuJyApICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcclxuICAgICAgICAgICAgbGlzdGluZyxcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0RlY3J5cHRlZCcsXHJcbiAgICAgICAgICAgIG91dEZpbGU6IG91dEZpbGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRwdXRSZXN1bHQocmVzdWx0OiBEZWNyeXB0UmVzdWx0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIGAke3Jlc3VsdC5tZXNzYWdlfSA6ICR7cmVzdWx0Lmxpc3RpbmcucmVsYXRpdmVQYXRofSR7cmVzdWx0Lm91dEZpbGUgPT0gbnVsbCA/ICcnIDogJyA9PiBgJyArIHJlc3VsdC5vdXRGaWxlICsgJ2AnfWAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWNyeXB0V2hvbGVOb3RlTGlzdGluZyhsaXN0aW5nOiBMaXN0aW5nLCBwYXNzd29yZHM6IHN0cmluZ1tdLCBvdXRkaXI6IHN0cmluZywgZHJ5cnVuOmJvb2xlYW4gKSA6IFByb21pc2U8RGVjcnlwdFJlc3VsdD4ge1xyXG5cclxuICAgICAgICBsZXQgb3V0RmlsZSA9IHBhdGguam9pbiggb3V0ZGlyLCBsaXN0aW5nLnJlbGF0aXZlUGF0aCApO1xyXG5cclxuICAgICAgICAvLyBjaGFuZ2UgZXh0ZW5zaW9uXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBwYXRoLmJhc2VuYW1lKG91dEZpbGUpO1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShvdXRGaWxlKTtcclxuICAgICAgICBjb25zdCBuZXdGaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoZXh0ZW5zaW9uLCAnLm1kJyk7XHJcblxyXG4gICAgICAgIC8vIGZpbmFsIG91dGZpbGVcclxuICAgICAgICBvdXRGaWxlID0gcGF0aC5qb2luKHBhdGguZGlybmFtZShvdXRGaWxlKSwgbmV3RmlsZU5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZHJ5cnVuKXtcclxuICAgICAgICAgICAgY29uc3Qgb3V0RmlsZURpciA9IHBhdGguZGlybmFtZSggb3V0RmlsZSApO1xyXG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoIG91dEZpbGVEaXIgKSl7XHJcbiAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmMoIG91dEZpbGVEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIGxpc3RpbmcuY29udGVudCA9PSBudWxsIHx8IGxpc3RpbmcuY29udGVudC5sZW5ndGggPT0gMCApe1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkcnlydW4pe1xyXG4gICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyggb3V0RmlsZSwgJycgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1dBUk46IEVtcHR5IGZpbGUnLFxyXG4gICAgICAgICAgICAgICAgb3V0RmlsZTogb3V0RmlsZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBKc29uRmlsZUVuY29kaW5nLmRlY29kZSggbGlzdGluZy5jb250ZW50IHx8ICcnICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yTnVsbCggZmlsZURhdGEgKTtcclxuICAgICAgICBpZiAoIGNoID09IG51bGwgKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFUlJPUjogVW5rbm93biBmb3JtYXQnLFxyXG4gICAgICAgICAgICAgICAgb3V0RmlsZTogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHB3ID0gcGFzc3dvcmRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gYXdhaXQgY2guZGVjcnlwdEZyb21CYXNlNjQoZmlsZURhdGEuZW5jb2RlZERhdGEsIHB3KVxyXG4gICAgICAgICAgICBpZiAoIGRlY29kZWQgIT0gbnVsbCApe1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkcnlydW4pe1xyXG4gICAgICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoIG91dEZpbGUsIGRlY29kZWQgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRGVjcnlwdGVkYCxcclxuICAgICAgICAgICAgICAgICAgICBvdXRGaWxlOiBvdXRGaWxlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsaXN0aW5nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogYEVSUk9SOiBVbmFibGUgdG8gZGVjcnlwdGAsXHJcbiAgICAgICAgICAgIG91dEZpbGU6IHVuZGVmaW5lZFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFV0aWxze1xyXG4gICAgc3RhdGljIGFzeW5jICogd2FsayggZGlyIDogc3RyaW5nICkgOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8c3RyaW5nPiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBkIG9mIGF3YWl0IGZzLnByb21pc2VzLm9wZW5kaXIoZGlyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHBhdGguam9pbihkaXIsIGQubmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChkLmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkKiBVdGlscy53YWxrKGVudHJ5KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmlzRmlsZSgpKXtcclxuICAgICAgICAgICAgICAgIHlpZWxkIGVudHJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyAqIGxpc3RpbmdzKCBkaXIgOiBzdHJpbmcsIGluY2x1ZGVDb250ZW50OiBib29sZWFuICkgOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8TGlzdGluZz4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgcCBvZiBVdGlscy53YWxrKCBkaXIgKSkge1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShwKS50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xyXG5cclxuICAgICAgICAgICAgLy8gZXhpdCBlYXJseSBpZiBub3QgYSByZWxldmFudCBmaWxlXHJcbiAgICAgICAgICAgIGlmICggIVsnbWQnLCAuLi5Db25zdGFudHMuRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OU10uaW5jbHVkZXMoIGV4dCApICl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gJy4nICsgcGF0aC5zZXAgKyBwYXRoLnJlbGF0aXZlKGRpciwgcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoIGluY2x1ZGVDb250ZW50IHx8IGV4dCA9PSAnbWQnICkgPyBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZSggcCwgJ3V0ZjgnICkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjb3VsZCBoYXZlIGlucGxhY2UgZW5jcnlwdGVkIG5vdGVzXHJcbiAgICAgICAgICAgIGlmICggZXh0ID09ICdtZCcgKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQhLmluY2x1ZGVzKCBJblBsYWNlQ29uc3RhbnRzLl9QUkVGSVhfQV9WSVNJQkxFIClcclxuICAgICAgICAgICAgICAgICAgICB8fCBjb250ZW50IS5pbmNsdWRlcyggSW5QbGFjZUNvbnN0YW50cy5fUFJFRklYX0JfVklTSUJMRSApXHJcbiAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdJblBsYWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFBhdGg6IHAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlUGF0aDogcmVsYXRpdmVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb246IGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogaW5jbHVkZUNvbnRlbnQgPyBjb250ZW50IDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIG11c3QgYmUgd2hvbGUgbm90ZSBlbmNyeXB0ZWRcclxuICAgICAgICAgICAgeWllbGQge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdXaG9sZU5vdGUnLFxyXG4gICAgICAgICAgICAgICAgZnVsbFBhdGg6IHAsXHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVBhdGg6IHJlbGF0aXZlUGF0aCxcclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogZXh0LFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBvcHRQYXNzd29yZExpc3QgOiB5YXJncy5PcHRpb25zICA9IHtcclxuICAgIGRlbWFuZE9wdGlvbjogdHJ1ZSxcclxuICAgIGFsaWFzOiBbJ3AnLCAncHcnXSxcclxuICAgIGRlc2NyaWJlOiAncGFzc3dvcmRzIHRvIHVzZScsXHJcbiAgICB0eXBlOiAnYXJyYXknLFxyXG59XHJcblxyXG5jb25zdCBvcHRMaXN0aW5nRm9ybWF0IDogeWFyZ3MuT3B0aW9ucyA9IHtcclxuICAgIGFsaWFzOiAnZicsXHJcbiAgICBkZXNjcmliZTogJ2Zvcm1hdCBvZiB0aGUgbGlzdGluZycsXHJcbiAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgIGNob2ljZXM6IFsgJ2RlZmF1bHQnLCAndGFibGUnLCAnanNvbicsICdjc3YnXSxcclxuICAgIGRlZmF1bHQ6ICdkZWZhdWx0JyxcclxufVxyXG5cclxuXHJcblxyXG55YXJncy5kZWZhdWx0KGhpZGVCaW4ocHJvY2Vzcy5hcmd2KSlcclxuICAgIC5zY3JpcHROYW1lKCdtZGVuYycpXHJcbiAgICAudXNhZ2UoICdVc2FnZTogJDAgW2NvbW1hbmRdIFtvcHRpb25zXScgKVxyXG5cclxuICAgIC5jb21tYW5kKCAnbGlzdCcsICdsaXN0IGFsbCBlbmNyeXB0ZWQgYXJ0aWZhY3RzIHdpdGhpbiB0aGUgY3VycmVudCBkaXJlY3RvcnknLCAoeWFyZ3MpID0+IHlhcmdzLm9wdGlvbigge1xyXG4gICAgICAgIGZvcm1hdDogb3B0TGlzdGluZ0Zvcm1hdFxyXG4gICAgfSApLCAoYXJndikgPT4gbmV3IExpc3RDb21tYW5kSGFuZGxlcigpLmFyZ0hhbmRsZXIoYXJndi5mb3JtYXQgYXMgc3RyaW5nICkgKVxyXG4gICAgXHJcbiAgICAuY29tbWFuZChbJ3Rlc3QnLCAnY2hlY2snXSwgJ2NoZWNrIHRoYXQgYWxsIG5vdGVzIGNhbiBiZSBkZWNyeXB0ZWQgd2l0aCB0aGUgZ2l2ZW4gcGFzc3dvcmQgbGlzdCcsICh5YXJncykgPT4geWFyZ3Mub3B0aW9uKCAge1xyXG4gICAgICAgIHBhc3N3b3Jkczogb3B0UGFzc3dvcmRMaXN0LFxyXG4gICAgICAgIGZhaWxzOiB7XHJcbiAgICAgICAgICAgIGFsaWFzOiBbJ2YnLCAnZmFpbCddLFxyXG4gICAgICAgICAgICBkZXNjcmliZTogJ29ubHkgbGlzdCBmYWlscycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9ICksIChhcmd2KSA9PiBuZXcgVGVzdENvbW1hbmRIYW5kbGVyKCkuYXJnSGFuZGxlciggYXJndi5wYXNzd29yZHMgYXMgc3RyaW5nW10sIGFyZ3YuZmFpbHMgYXMgYm9vbGVhbiApIClcclxuICAgIFxyXG4gICAgLmNvbW1hbmQoJ2RlY3J5cHQnLCAnZGVjcnlwdCBub3RlcyB0byBwbGFpbiB0ZXh0IGdpdmVuIGEgcGFzc3dvcmQgbGlzdCBhbmQgYW4gb3V0cHV0IGRpcmVjdG9yeScsICAoeWFyZ3MpID0+IHlhcmdzLm9wdGlvbiggIHtcclxuICAgICAgICBwYXNzd29yZHM6IG9wdFBhc3N3b3JkTGlzdCxcclxuICAgICAgICBvdXRkaXI6IHtcclxuICAgICAgICAgICAgYWxpYXM6IFsnbycsICdvdXQnLCAndG8nXSxcclxuICAgICAgICAgICAgZGVzY3JpYmU6ICdvdXRwdXQgZGlyZWN0b3J5JyxcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlbWFuZE9wdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHJ5cnVuOiB7XHJcbiAgICAgICAgICAgIGFsaWFzOiBbJ2RyJywgJ2RyeSddLFxyXG4gICAgICAgICAgICBkZXNjcmliZTogJ2RyeSBydW4nLFxyXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSApLCAoYXJndikgPT4gbmV3IERlY3J5cHRDb21tYW5kSGFuZGxlcigpLmFyZ0hhbmRsZXIoIGFyZ3YucGFzc3dvcmRzIGFzIHN0cmluZ1tdLCBhcmd2Lm91dGRpciBhcyBzdHJpbmcsIGFyZ3YuZHJ5cnVuICE9PSBmYWxzZSApICkgXHJcbiAgICBcclxuICAgIC5kZW1hbmRDb21tYW5kKClcclxuICAgIC5oZWxwKClcclxuICAgIC53cmFwKCBudWxsIClcclxuICAgIC5leGFtcGxlKFtcclxuICAgICAgICBbJyQwIGxpc3QnLCAnUHJvY2Vzc2VzIGFsbCAqLm1kIGFuZCAqLm1kZW5jIGZpbGVzIGFuZCBsaXN0IGFueSBlbmNyeXB0ZWQgYXJ0aWZhY3RzIHdpdGhpbiB0aGUgY3VycmVudCBkaXJlY3RvcnknXSxcclxuICAgICAgICBbJyQwIHRlc3QgLS1wYXNzd29yZHMgcHcxIHB3MicsICdjaGVjayB0aGF0IGFsbCBub3RlcyBjYW4gYmUgZGVjcnlwdGVkIHdpdGggdGhlIGdpdmVuIHBhc3N3b3JkIGxpc3QnXSxcclxuICAgICAgICBbJyQwIGRlY3J5cHQgLS1wdyBwdzEgcHcyIC0tb3V0ZGlyIFxcXFxwYXRoXFxcXHRvXFxcXG91dHB1dFxcXFwnLCAnZGVjcnlwdCBub3RlcyB0byBhbiBvdXRwdXQgZGlyZWN0b3J5J10sXHJcbiAgICAgIF0pXHJcbiAgICAucGFyc2UoKVxyXG47XHJcbiBcclxuXHJcbiIsICJjb25zdCB2ZWN0b3JTaXplXHQ9IDE2O1xyXG5jb25zdCB1dGY4RW5jb2Rlclx0PSBuZXcgVGV4dEVuY29kZXIoKTtcclxuY29uc3QgdXRmOERlY29kZXJcdD0gbmV3IFRleHREZWNvZGVyKCk7XHJcbmNvbnN0IGl0ZXJhdGlvbnNcdD0gMTAwMDtcclxuY29uc3Qgc2FsdFx0XHRcdD0gdXRmOEVuY29kZXIuZW5jb2RlKCdYSFduREFUNmVoTVZZMnpEJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3J5cHRvSGVscGVyIHtcclxuXHJcblx0Ly8gY29uc3RydWN0b3IoKXtcclxuXHQvLyBcdGNvbnNvbGUuZGVidWcoJ25ldyBDcnlwdG9IZWxwZXInKTtcclxuXHQvLyB9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgZGVyaXZlS2V5KHBhc3N3b3JkOnN0cmluZykgOlByb21pc2U8Q3J5cHRvS2V5PiB7XHJcblx0XHRjb25zdCBidWZmZXIgICAgID0gdXRmOEVuY29kZXIuZW5jb2RlKHBhc3N3b3JkKTtcclxuXHRcdGNvbnN0IGtleSAgICAgICAgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgncmF3JywgYnVmZmVyLCB7bmFtZTogJ1BCS0RGMid9LCBmYWxzZSwgWydkZXJpdmVLZXknXSk7XHJcblx0XHRjb25zdCBwcml2YXRlS2V5ID0gY3J5cHRvLnN1YnRsZS5kZXJpdmVLZXkoXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnUEJLREYyJyxcclxuXHRcdFx0XHRoYXNoOiB7bmFtZTogJ1NIQS0yNTYnfSxcclxuXHRcdFx0XHRpdGVyYXRpb25zLFxyXG5cdFx0XHRcdHNhbHRcclxuXHRcdFx0fSxcclxuXHRcdFx0a2V5LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ0FFUy1HQ00nLFxyXG5cdFx0XHRcdGxlbmd0aDogMjU2XHJcblx0XHRcdH0sXHJcblx0XHRcdGZhbHNlLFxyXG5cdFx0XHRbJ2VuY3J5cHQnLCAnZGVjcnlwdCddXHJcblx0XHQpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gcHJpdmF0ZUtleTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0VG9CeXRlcyh0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcclxuXHJcblx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmRlcml2ZUtleShwYXNzd29yZCk7XHJcblx0XHRcclxuXHRcdGNvbnN0IHRleHRCeXRlc1RvRW5jcnlwdCA9IHV0ZjhFbmNvZGVyLmVuY29kZSh0ZXh0KTtcclxuXHRcdGNvbnN0IHZlY3RvciA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkodmVjdG9yU2l6ZSkpO1xyXG5cdFx0XHJcblx0XHQvLyBlbmNyeXB0IGludG8gYnl0ZXNcclxuXHRcdGNvbnN0IGVuY3J5cHRlZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoXHJcblx0XHRcdGF3YWl0IGNyeXB0by5zdWJ0bGUuZW5jcnlwdChcclxuXHRcdFx0XHR7bmFtZTogJ0FFUy1HQ00nLCBpdjogdmVjdG9yfSxcclxuXHRcdFx0XHRrZXksXHJcblx0XHRcdFx0dGV4dEJ5dGVzVG9FbmNyeXB0XHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0XHRcclxuXHRcdGNvbnN0IGZpbmFsQnl0ZXMgPSBuZXcgVWludDhBcnJheSggdmVjdG9yLmJ5dGVMZW5ndGggKyBlbmNyeXB0ZWRCeXRlcy5ieXRlTGVuZ3RoICk7XHJcblx0XHRmaW5hbEJ5dGVzLnNldCggdmVjdG9yLCAwICk7XHJcblx0XHRmaW5hbEJ5dGVzLnNldCggZW5jcnlwdGVkQnl0ZXMsIHZlY3Rvci5ieXRlTGVuZ3RoICk7XHJcblxyXG5cdFx0cmV0dXJuIGZpbmFsQnl0ZXM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNvbnZlcnRUb1N0cmluZyggYnl0ZXMgOiBVaW50OEFycmF5ICk6IHN0cmluZyB7XHJcblx0XHRsZXQgcmVzdWx0ID0gJyc7XHJcblx0XHRmb3IgKGxldCBpZHggPSAwOyBpZHggPCBieXRlcy5sZW5ndGg7IGlkeCsrKSB7XHJcblx0XHRcdC8vIGFwcGVuZCB0byByZXN1bHRcclxuXHRcdFx0cmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaWR4XSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGVuY3J5cHRUb0Jhc2U2NCh0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuXHRcdGNvbnN0IGZpbmFsQnl0ZXMgPSBhd2FpdCB0aGlzLmVuY3J5cHRUb0J5dGVzKHRleHQsIHBhc3N3b3JkKTtcclxuXHJcblx0XHQvL2NvbnZlcnQgYXJyYXkgdG8gYmFzZTY0XHJcblx0XHRjb25zdCBiYXNlNjRUZXh0ID0gYnRvYSggdGhpcy5jb252ZXJ0VG9TdHJpbmcoZmluYWxCeXRlcykgKTtcclxuXHJcblx0XHRyZXR1cm4gYmFzZTY0VGV4dDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RyaW5nVG9BcnJheShzdHI6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRyZXN1bHQucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJ5dGVzKGVuY3J5cHRlZEJ5dGVzOiBVaW50OEFycmF5LCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xyXG5cdFx0dHJ5IHtcclxuXHJcblx0XHRcdC8vIGV4dHJhY3QgaXZcclxuXHRcdFx0Y29uc3QgdmVjdG9yID0gZW5jcnlwdGVkQnl0ZXMuc2xpY2UoMCx2ZWN0b3JTaXplKTtcclxuXHJcblx0XHRcdC8vIGV4dHJhY3QgZW5jcnlwdGVkIHRleHRcclxuXHRcdFx0Y29uc3QgZW5jcnlwdGVkVGV4dEJ5dGVzID0gZW5jcnlwdGVkQnl0ZXMuc2xpY2UodmVjdG9yU2l6ZSk7XHJcblxyXG5cdFx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmRlcml2ZUtleShwYXNzd29yZCk7XHJcblxyXG5cdFx0XHQvLyBkZWNyeXB0IGludG8gYnl0ZXNcclxuXHRcdFx0Y29uc3QgZGVjcnlwdGVkQnl0ZXMgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlY3J5cHQoXHJcblx0XHRcdFx0e25hbWU6ICdBRVMtR0NNJywgaXY6IHZlY3Rvcn0sXHJcblx0XHRcdFx0a2V5LFxyXG5cdFx0XHRcdGVuY3J5cHRlZFRleHRCeXRlc1xyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Ly8gY29udmVydCBieXRlcyB0byB0ZXh0XHJcblx0XHRcdGNvbnN0IGRlY3J5cHRlZFRleHQgPSB1dGY4RGVjb2Rlci5kZWNvZGUoZGVjcnlwdGVkQnl0ZXMpO1xyXG5cdFx0XHRyZXR1cm4gZGVjcnlwdGVkVGV4dDtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Ly9jb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJhc2U2NChiYXNlNjRFbmNvZGVkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XHJcblx0XHR0cnkge1xyXG5cclxuXHRcdFx0Y29uc3QgYnl0ZXNUb0RlY29kZSA9IHRoaXMuc3RyaW5nVG9BcnJheShhdG9iKGJhc2U2NEVuY29kZWQpKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBhd2FpdCB0aGlzLmRlY3J5cHRGcm9tQnl0ZXMoYnl0ZXNUb0RlY29kZSwgcGFzc3dvcmQpO1xyXG5cclxuXHRcdFx0Ly8gLy8gZXh0cmFjdCBpdlxyXG5cdFx0XHQvLyBjb25zdCB2ZWN0b3IgPSBieXRlc1RvRGVjb2RlLnNsaWNlKDAsdmVjdG9yU2l6ZSk7XHJcblxyXG5cdFx0XHQvLyAvLyBleHRyYWN0IGVuY3J5cHRlZCB0ZXh0XHJcblx0XHRcdC8vIGNvbnN0IGVuY3J5cHRlZFRleHRCeXRlcyA9IGJ5dGVzVG9EZWNvZGUuc2xpY2UodmVjdG9yU2l6ZSk7XHJcblxyXG5cdFx0XHQvLyBjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmRlcml2ZUtleShwYXNzd29yZCk7XHJcblxyXG5cdFx0XHQvLyAvLyBkZWNyeXB0IGludG8gYnl0ZXNcclxuXHRcdFx0Ly8gbGV0IGRlY3J5cHRlZEJ5dGVzID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KFxyXG5cdFx0XHQvLyBcdHtuYW1lOiAnQUVTLUdDTScsIGl2OiB2ZWN0b3J9LFxyXG5cdFx0XHQvLyBcdGtleSxcclxuXHRcdFx0Ly8gXHRlbmNyeXB0ZWRUZXh0Qnl0ZXNcclxuXHRcdFx0Ly8gKTtcclxuXHJcblx0XHRcdC8vIC8vIGNvbnZlcnQgYnl0ZXMgdG8gdGV4dFxyXG5cdFx0XHQvLyBsZXQgZGVjcnlwdGVkVGV4dCA9IHV0ZjhEZWNvZGVyLmRlY29kZShkZWNyeXB0ZWRCeXRlcyk7XHJcblx0XHRcdC8vIHJldHVybiBkZWNyeXB0ZWRUZXh0O1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHQvL2NvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwgImltcG9ydCB7IElDcnlwdG9IZWxwZXIgfSBmcm9tIFwiLi9JQ3J5cHRvSGVscGVyLnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3J5cHRvSGVscGVyMjMwNCBpbXBsZW1lbnRzIElDcnlwdG9IZWxwZXIge1xyXG5cdHB1YmxpYyB2ZWN0b3JTaXplOiBudW1iZXI7XHJcblx0cHVibGljIHNhbHRTaXplOiBudW1iZXI7XHJcblx0cHVibGljIGl0ZXJhdGlvbnM6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHZlY3RvclNpemU6IG51bWJlciwgc2FsdFNpemU6IG51bWJlciwgaXRlcmF0aW9uczogbnVtYmVyICl7XHJcblx0XHQvL2NvbnNvbGUuZGVidWcoJ25ldyBDcnlwdG9IZWxwZXIyMzA0Jywge3ZlY3RvclNpemUsIHNhbHRTaXplLCBpdGVyYXRpb25zfSk7XHJcblx0XHR0aGlzLnZlY3RvclNpemUgPSB2ZWN0b3JTaXplO1xyXG5cdFx0dGhpcy5zYWx0U2l6ZSA9IHNhbHRTaXplO1xyXG5cdFx0dGhpcy5pdGVyYXRpb25zID0gaXRlcmF0aW9ucztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgZGVyaXZlS2V5KCBwYXNzd29yZDpzdHJpbmcsIHNhbHQ6VWludDhBcnJheSApIDpQcm9taXNlPENyeXB0b0tleT4ge1xyXG5cdFx0Ly8gY29uc29sZS50cmFjZSgnQ3J5cHRvSGVscGVyMjMwNC5kZXJpdmVLZXknKTtcclxuXHRcdC8vU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU3VidGxlQ3J5cHRvXHJcblx0XHRjb25zdCB1dGY4RW5jb2Rlclx0PSBuZXcgVGV4dEVuY29kZXIoKTtcclxuXHRcdGNvbnN0IGJ1ZmZlciAgICAgPSB1dGY4RW5jb2Rlci5lbmNvZGUocGFzc3dvcmQpO1xyXG5cdFx0Y29uc3Qga2V5ICAgICAgICA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KFxyXG5cdFx0XHQvKmZvcm1hdCovICdyYXcnLFxyXG5cdFx0XHQvKmtleURhdGEqLyBidWZmZXIsXHJcblx0XHRcdC8qYWxnb3JpdGhtKi8gJ1BCS0RGMicsXHJcblx0XHRcdC8qZXh0cmFjdGFibGUqLyBmYWxzZSxcclxuXHRcdFx0LyprZXlVc2FnZXMqLyBbJ2Rlcml2ZUtleSddXHJcblx0XHQpO1xyXG5cdFx0XHJcblx0XHQvL2NvbnNvbGUudGltZSgnQ3J5cHRvSGVscGVyMjMwNC5kZXJpdmVLZXknKTtcclxuXHRcdHRyeXtcclxuXHRcdFx0Y29uc3QgcHJpdmF0ZUtleSA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVyaXZlS2V5KFxyXG5cdFx0XHRcdC8qYWxnb3JpdGhtKi8ge1xyXG5cdFx0XHRcdFx0bmFtZTogJ1BCS0RGMicsXHJcblx0XHRcdFx0XHRoYXNoOiAnU0hBLTUxMicsXHJcblx0XHRcdFx0XHRzYWx0LFxyXG5cdFx0XHRcdFx0aXRlcmF0aW9uczogdGhpcy5pdGVyYXRpb25zLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0LypiYXNlS2V5Ki8ga2V5LFxyXG5cdFx0XHRcdC8qZGVyaXZlZEtleUFsZ29yaXRobSovIHtcclxuXHRcdFx0XHRcdG5hbWU6ICdBRVMtR0NNJyxcclxuXHRcdFx0XHRcdGxlbmd0aDogMjU2XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKmV4dHJhY3RhYmxlKi8gZmFsc2UsXHJcblx0XHRcdFx0LyprZXlVc2FnZXMqLyBbJ2VuY3J5cHQnLCAnZGVjcnlwdCddXHJcblx0XHRcdCk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcHJpdmF0ZUtleTtcclxuXHRcdH1maW5hbGx5e1xyXG5cdFx0XHQvL2NvbnNvbGUudGltZUVuZCgnQ3J5cHRvSGVscGVyMjMwNC5kZXJpdmVLZXknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgZW5jcnlwdFRvQnl0ZXMoIHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyApOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcclxuXHJcblx0XHRjb25zdCBzYWx0ID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyggbmV3IFVpbnQ4QXJyYXkodGhpcy5zYWx0U2l6ZSkgKTtcclxuXHJcblx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmRlcml2ZUtleSggcGFzc3dvcmQsIHNhbHQgKTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgdXRmOEVuY29kZXJcdD0gbmV3IFRleHRFbmNvZGVyKCk7XHJcblx0XHRjb25zdCB0ZXh0Qnl0ZXNUb0VuY3J5cHQgPSB1dGY4RW5jb2Rlci5lbmNvZGUodGV4dCk7XHJcblx0XHRjb25zdCB2ZWN0b3IgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHRoaXMudmVjdG9yU2l6ZSkpO1xyXG5cdFx0XHJcblx0XHQvLyBlbmNyeXB0IGludG8gYnl0ZXNcclxuXHRcdGNvbnN0IGVuY3J5cHRlZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoXHJcblx0XHRcdGF3YWl0IGNyeXB0by5zdWJ0bGUuZW5jcnlwdChcclxuXHRcdFx0XHQvKmFsZ29yaXRobSovIHtcclxuXHRcdFx0XHRcdG5hbWU6ICdBRVMtR0NNJyxcclxuXHRcdFx0XHRcdGl2OiB2ZWN0b3JcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8qa2V5Ki8ga2V5LFxyXG5cdFx0XHRcdC8qZGF0YSovIHRleHRCeXRlc1RvRW5jcnlwdFxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoIHZlY3Rvci5ieXRlTGVuZ3RoICsgc2FsdC5ieXRlTGVuZ3RoICsgZW5jcnlwdGVkQnl0ZXMuYnl0ZUxlbmd0aCApO1xyXG5cdFx0ZmluYWxCeXRlcy5zZXQoIHZlY3RvciwgMCApO1xyXG5cdFx0ZmluYWxCeXRlcy5zZXQoIHNhbHQsIHZlY3Rvci5ieXRlTGVuZ3RoICk7XHJcblx0XHRmaW5hbEJ5dGVzLnNldCggZW5jcnlwdGVkQnl0ZXMsIHZlY3Rvci5ieXRlTGVuZ3RoICsgc2FsdC5ieXRlTGVuZ3RoICk7XHJcblxyXG5cdFx0cmV0dXJuIGZpbmFsQnl0ZXM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNvbnZlcnRUb1N0cmluZyggYnl0ZXMgOiBVaW50OEFycmF5ICk6IHN0cmluZyB7XHJcblx0XHRsZXQgcmVzdWx0ID0gJyc7XHJcblx0XHRmb3IgKGxldCBpZHggPSAwOyBpZHggPCBieXRlcy5sZW5ndGg7IGlkeCsrKSB7XHJcblx0XHRcdC8vIGFwcGVuZCB0byByZXN1bHRcclxuXHRcdFx0cmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaWR4XSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGVuY3J5cHRUb0Jhc2U2NCh0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuXHRcdGNvbnN0IGZpbmFsQnl0ZXMgPSBhd2FpdCB0aGlzLmVuY3J5cHRUb0J5dGVzKHRleHQsIHBhc3N3b3JkKTtcclxuXHJcblx0XHQvL2NvbnZlcnQgYXJyYXkgdG8gYmFzZTY0XHJcblx0XHRjb25zdCBiYXNlNjRUZXh0ID0gYnRvYSggdGhpcy5jb252ZXJ0VG9TdHJpbmcoZmluYWxCeXRlcykgKTtcclxuXHJcblx0XHRyZXR1cm4gYmFzZTY0VGV4dDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RyaW5nVG9BcnJheShzdHI6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRyZXN1bHQucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgZGVjcnlwdEZyb21CeXRlcyhcclxuXHRcdGVuY3J5cHRlZEJ5dGVzOiBVaW50OEFycmF5LFxyXG5cdFx0cGFzc3dvcmQ6IHN0cmluZ1xyXG5cdCk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgb2Zmc2V0OiBudW1iZXI7XHJcblx0XHRcdGxldCBuZXh0T2Zmc2V0IDogbnVtYmVyfHVuZGVmaW5lZDtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGV4dHJhY3QgaXZcclxuXHRcdFx0b2Zmc2V0ID0gMDtcclxuXHRcdFx0bmV4dE9mZnNldCA9IG9mZnNldCArIHRoaXMudmVjdG9yU2l6ZTtcclxuXHRcdFx0Y29uc3QgdmVjdG9yID0gZW5jcnlwdGVkQnl0ZXMuc2xpY2Uob2Zmc2V0LCBuZXh0T2Zmc2V0KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGV4dHJhY3Qgc2FsdFxyXG5cdFx0XHRvZmZzZXQgPSBuZXh0T2Zmc2V0O1xyXG5cdFx0XHRuZXh0T2Zmc2V0ID0gb2Zmc2V0ICsgdGhpcy5zYWx0U2l6ZTtcclxuXHRcdFx0Y29uc3Qgc2FsdCA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKG9mZnNldCwgbmV4dE9mZnNldCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBleHRyYWN0IGVuY3J5cHRlZCB0ZXh0XHJcblx0XHRcdG9mZnNldCA9IG5leHRPZmZzZXQ7XHJcblx0XHRcdG5leHRPZmZzZXQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGNvbnN0IGVuY3J5cHRlZFRleHRCeXRlcyA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKG9mZnNldCk7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmRlcml2ZUtleShwYXNzd29yZCwgc2FsdCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBkZWNyeXB0IGludG8gYnl0ZXNcclxuXHRcdFx0Y29uc3QgZGVjcnlwdGVkQnl0ZXMgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlY3J5cHQoXHJcblx0XHRcdFx0LyphbGdvcml0aG0qLyB7XHJcblx0XHRcdFx0XHRuYW1lOiAnQUVTLUdDTScsXHJcblx0XHRcdFx0XHRpdjogdmVjdG9yXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvKmtleSovIGtleSxcclxuXHRcdFx0XHQvKmRhdGEqLyBlbmNyeXB0ZWRUZXh0Qnl0ZXNcclxuXHRcdFx0KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGNvbnZlcnQgYnl0ZXMgdG8gdGV4dFxyXG5cdFx0XHRjb25zdCB1dGY4RGVjb2Rlclx0PSBuZXcgVGV4dERlY29kZXIoKTtcclxuXHRcdFx0Y29uc3QgZGVjcnlwdGVkVGV4dCA9IHV0ZjhEZWNvZGVyLmRlY29kZShkZWNyeXB0ZWRCeXRlcyk7XHJcblx0XHRcdHJldHVybiBkZWNyeXB0ZWRUZXh0O1xyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Ly9jb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJhc2U2NCggYmFzZTY0RW5jb2RlZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nICk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGJ5dGVzVG9EZWNvZGUgPSB0aGlzLnN0cmluZ1RvQXJyYXkoYXRvYihiYXNlNjRFbmNvZGVkKSk7XHJcblx0XHRcdHJldHVybiBhd2FpdCB0aGlzLmRlY3J5cHRGcm9tQnl0ZXMoIGJ5dGVzVG9EZWNvZGUsIHBhc3N3b3JkICk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0iLCAiZXhwb3J0IGNvbnN0IGFsZ29yaXRobU9ic29sZXRlID0ge1xyXG5cdG5hbWU6ICdBRVMtR0NNJyxcclxuXHRpdjogbmV3IFVpbnQ4QXJyYXkoWzE5NiwgMTkwLCAyNDAsIDE5MCwgMTg4LCA3OCwgNDEsIDEzMiwgMTUsIDIyMCwgODQsIDIxMV0pLFxyXG5cdHRhZ0xlbmd0aDogMTI4XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcnlwdG9IZWxwZXJPYnNvbGV0ZSB7XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgYnVpbGRLZXkocGFzc3dvcmQ6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgdXRmOEVuY29kZSA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG5cdFx0Y29uc3QgcGFzc3dvcmRCeXRlcyA9IHV0ZjhFbmNvZGUuZW5jb2RlKHBhc3N3b3JkKTtcclxuXHJcblx0XHRjb25zdCBwYXNzd29yZERpZ2VzdCA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KHsgbmFtZTogJ1NIQS0yNTYnIH0sIHBhc3N3b3JkQnl0ZXMpO1xyXG5cclxuXHRcdGNvbnN0IGtleSA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KFxyXG5cdFx0XHQncmF3JyxcclxuXHRcdFx0cGFzc3dvcmREaWdlc3QsXHJcblx0XHRcdGFsZ29yaXRobU9ic29sZXRlLFxyXG5cdFx0XHRmYWxzZSxcclxuXHRcdFx0WydlbmNyeXB0JywgJ2RlY3J5cHQnXVxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4ga2V5O1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuICBcdCogQGRlcHJlY2F0ZWRcclxuIFx0Ki9cclxuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQmFzZTY0KHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcblx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmJ1aWxkS2V5KHBhc3N3b3JkKTtcclxuXHJcblx0XHRjb25zdCB1dGY4RW5jb2RlID0gbmV3IFRleHRFbmNvZGVyKCk7XHJcblx0XHRjb25zdCBieXRlc1RvRW5jcnlwdCA9IHV0ZjhFbmNvZGUuZW5jb2RlKHRleHQpO1xyXG5cclxuXHRcdC8vIGVuY3J5cHQgaW50byBieXRlc1xyXG5cdFx0Y29uc3QgZW5jcnlwdGVkQnl0ZXMgPSBuZXcgVWludDhBcnJheShhd2FpdCBjcnlwdG8uc3VidGxlLmVuY3J5cHQoXHJcblx0XHRcdGFsZ29yaXRobU9ic29sZXRlLCBrZXksIGJ5dGVzVG9FbmNyeXB0XHJcblx0XHQpKTtcclxuXHJcblx0XHQvL2NvbnZlcnQgYXJyYXkgdG8gYmFzZTY0XHJcblx0XHRjb25zdCBiYXNlNjRUZXh0ID0gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmVuY3J5cHRlZEJ5dGVzKSk7XHJcblxyXG5cdFx0cmV0dXJuIGJhc2U2NFRleHQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0cmluZ1RvQXJyYXkoc3RyOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBVaW50OEFycmF5KHJlc3VsdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEZyb21CYXNlNjQoYmFzZTY0RW5jb2RlZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Ly8gY29udmVydCBiYXNlIDY0IHRvIGFycmF5XHJcblx0XHRcdGNvbnN0IGJ5dGVzVG9EZWNyeXB0ID0gdGhpcy5zdHJpbmdUb0FycmF5KGF0b2IoYmFzZTY0RW5jb2RlZCkpO1xyXG5cclxuXHRcdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5idWlsZEtleShwYXNzd29yZCk7XHJcblxyXG5cdFx0XHQvLyBkZWNyeXB0IGludG8gYnl0ZXNcclxuXHRcdFx0Y29uc3QgZGVjcnlwdGVkQnl0ZXMgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlY3J5cHQoYWxnb3JpdGhtT2Jzb2xldGUsIGtleSwgYnl0ZXNUb0RlY3J5cHQpO1xyXG5cclxuXHRcdFx0Ly8gY29udmVydCBieXRlcyB0byB0ZXh0XHJcblx0XHRcdGNvbnN0IHV0ZjhEZWNvZGUgPSBuZXcgVGV4dERlY29kZXIoKTtcclxuXHRcdFx0Y29uc3QgZGVjcnlwdGVkVGV4dCA9IHV0ZjhEZWNvZGUuZGVjb2RlKGRlY3J5cHRlZEJ5dGVzKTtcclxuXHRcdFx0cmV0dXJuIGRlY3J5cHRlZFRleHQ7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIiwgImltcG9ydCB7IEZpbGVEYXRhIH0gZnJvbSBcIi4vRmlsZURhdGFIZWxwZXIudHNcIjtcclxuaW1wb3J0IHsgRGVjcnlwdGFibGUgfSBmcm9tIFwiLi4vZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvRGVjcnlwdGFibGUudHNcIjtcclxuaW1wb3J0IHsgQ3J5cHRvSGVscGVyIH0gZnJvbSBcIi4vQ3J5cHRvSGVscGVyLnRzXCI7XHJcbmltcG9ydCB7IElDcnlwdG9IZWxwZXIgfSBmcm9tIFwiLi9JQ3J5cHRvSGVscGVyLnRzXCI7XHJcbmltcG9ydCB7IENyeXB0b0hlbHBlcjIzMDQgfSBmcm9tIFwiLi9DcnlwdG9IZWxwZXIyMzA0LnRzXCI7XHJcbmltcG9ydCB7IENyeXB0b0hlbHBlck9ic29sZXRlIH0gZnJvbSBcIi4vQ3J5cHRvSGVscGVyT2Jzb2xldGUudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcnlwdG9IZWxwZXJGYWN0b3J5e1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGNyeXB0b0hlbHBlcjIzMDRfdjIgPSBuZXcgQ3J5cHRvSGVscGVyMjMwNCggMTYsIDE2LCAyMTAwMDAgKTtcclxuXHJcblx0cHVibGljIHN0YXRpYyBCdWlsZERlZmF1bHQoKTogSUNyeXB0b0hlbHBlcntcclxuXHRcdHJldHVybiB0aGlzLmNyeXB0b0hlbHBlcjIzMDRfdjI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIEJ1aWxkRnJvbUZpbGVEYXRhT3JUaHJvdyggZGF0YTogRmlsZURhdGEgKSA6IElDcnlwdG9IZWxwZXIge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yTnVsbChkYXRhKTtcclxuXHRcdGlmICggcmVzdWx0ICE9IG51bGwgKXtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHRcdHRocm93IG5ldyBFcnJvciggYFVuYWJsZSB0byBkZXRlcm1pbmUgSUNyeXB0b0hlbHBlciBmb3IgRmlsZSB2ZXIgJHtkYXRhLnZlcnNpb259YCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIEJ1aWxkRnJvbUZpbGVEYXRhT3JOdWxsKCBkYXRhOiBGaWxlRGF0YSApIDogSUNyeXB0b0hlbHBlciB8IG51bGwge1xyXG5cdFx0aWYgKCBkYXRhLnZlcnNpb24gPT0gJzEuMCcgKXtcclxuXHRcdFx0cmV0dXJuIG5ldyBDcnlwdG9IZWxwZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBub3RlXHRcdFx0XHR2Mi4wXHRDcnlwdG9IZWxwZXIyMzA0XHJcblx0XHRpZiAoIGRhdGEudmVyc2lvbiA9PSAnMi4wJyApe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcnlwdG9IZWxwZXIyMzA0X3YyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21EZWNyeXB0YWJsZU9yVGhyb3coIGRlY3J5cHRhYmxlOiBEZWNyeXB0YWJsZSApIDogSUNyeXB0b0hlbHBlciB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbURlY3J5cHRhYmxlT3JOdWxsKCBkZWNyeXB0YWJsZSApO1xyXG5cclxuXHRcdGlmIChyZXN1bHQgIT0gbnVsbCl7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBVbmFibGUgdG8gZGV0ZXJtaW5lIElDcnlwdG9IZWxwZXIgZm9yIERlY3J5cHRhYmxlIHZlciAke2RlY3J5cHRhYmxlLnZlcnNpb259YCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIEJ1aWxkRnJvbURlY3J5cHRhYmxlT3JOdWxsKCBkZWNyeXB0YWJsZTogRGVjcnlwdGFibGUgKSA6IElDcnlwdG9IZWxwZXIgfCBudWxsIHtcclxuXHRcdC8vIFZlcnNpb25zXHJcblx0XHQvLyBpbnBsYWNlIG9yaWdpbmFsXHRfUFJFRklYX09CU09MRVRFID0gJyUlXHVEODNEXHVERDEwICcgIENyeXB0b0hlbHBlck9ic29sZXRlXHJcblx0XHRcclxuXHRcdC8vIGlucGxhY2UgYWxwaGFcdF9QUkVGSVhfQSA9ICclJVx1RDgzRFx1REQxMFx1MDNCMSAnXHRcdENyeXB0b0hlbHBlclxyXG5cdFx0Ly8gXHRcdFx0XHRcdF9QUkVGSVhfQV9WSVNJQkxFID0gJ1x1RDgzRFx1REQxMFx1MDNCMSAnXHRDcnlwdG9IZWxwZXJcclxuXHJcblx0XHQvLyBpbnBsYWNlIGJldGEgXHRfUFJFRklYX0IgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjIgJ1x0XHRDcnlwdG9IZWxwZXIyMzA0KCAxNiwgMTYsIDIxMDAwMCApXHJcblx0XHQvL1x0XHRcdFx0XHRfUFJFRklYX0JfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjIgJ1x0Q3J5cHRvSGVscGVyMjMwNCggMTYsIDE2LCAyMTAwMDAgKVxyXG5cdFx0XHJcblx0XHRpZiAoIGRlY3J5cHRhYmxlLnZlcnNpb24gPT0gMCApe1xyXG5cdFx0XHRyZXR1cm4gbmV3IENyeXB0b0hlbHBlck9ic29sZXRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBkZWNyeXB0YWJsZS52ZXJzaW9uID09IDEgKXtcclxuXHRcdFx0cmV0dXJuIG5ldyBDcnlwdG9IZWxwZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGRlY3J5cHRhYmxlLnZlcnNpb24gPT0gMiApe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jcnlwdG9IZWxwZXIyMzA0X3YyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcbn0iLCAiaW1wb3J0IHsgQ3J5cHRvSGVscGVyRmFjdG9yeSB9IGZyb20gXCIuL0NyeXB0b0hlbHBlckZhY3RvcnkudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlRGF0YSB7XHJcblx0XHJcblx0cHVibGljIHZlcnNpb24gPSAnMS4wJztcclxuXHRwdWJsaWMgaGludDogc3RyaW5nO1xyXG5cdHB1YmxpYyBlbmNvZGVkRGF0YTpzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCB2ZXJzaW9uOnN0cmluZywgaGludDpzdHJpbmcsIGVuY29kZWREYXRhOnN0cmluZyApe1xyXG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcclxuXHRcdHRoaXMuaGludCA9IGhpbnQ7XHJcblx0XHR0aGlzLmVuY29kZWREYXRhID0gZW5jb2RlZERhdGE7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZURhdGFIZWxwZXJ7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgREVGQVVMVF9WRVJTSU9OID0gJzIuMCc7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgZW5jcnlwdCggcGFzczogc3RyaW5nLCBoaW50OnN0cmluZywgdGV4dDpzdHJpbmcgKSA6IFByb21pc2U8RmlsZURhdGE+e1xyXG5cdFx0Y29uc3QgY3J5cHRvID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IGVuY3J5cHRlZERhdGEgPSBhd2FpdCBjcnlwdG8uZW5jcnlwdFRvQmFzZTY0KHRleHQsIHBhc3MpO1xyXG5cdFx0cmV0dXJuIG5ldyBGaWxlRGF0YSggRmlsZURhdGFIZWxwZXIuREVGQVVMVF9WRVJTSU9OLCBoaW50LCBlbmNyeXB0ZWREYXRhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVjcnlwdCggZGF0YTogRmlsZURhdGEsIHBhc3M6c3RyaW5nICkgOiBQcm9taXNlPHN0cmluZ3xudWxsPntcclxuXHRcdGlmICggZGF0YS5lbmNvZGVkRGF0YSA9PSAnJyApe1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjcnlwdG8gPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbUZpbGVEYXRhT3JUaHJvdyggZGF0YSApO1xyXG5cdFx0cmV0dXJuIGF3YWl0IGNyeXB0by5kZWNyeXB0RnJvbUJhc2U2NCggZGF0YS5lbmNvZGVkRGF0YSwgcGFzcyApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEpzb25GaWxlRW5jb2Rpbmcge1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIGVuY29kZSggZGF0YTogRmlsZURhdGEgKSA6IHN0cmluZ3tcclxuXHRcdC8vY29uc29sZS5kZWJ1ZyggJ0pzb25GaWxlRW5jb2RpbmcuZW5jb2RlJywge2RhdGF9ICk7XHJcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGlzRW5jb2RlZCggdGV4dDogc3RyaW5nICkgOiBib29sZWFuIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdEpTT04ucGFyc2UoIHRleHQgKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZGVjb2RlKCBlbmNvZGVkVGV4dDpzdHJpbmcgKSA6IEZpbGVEYXRhIHtcclxuXHRcdC8vY29uc29sZS5kZWJ1ZygnSnNvbkZpbGVFbmNvZGluZy5kZWNvZGUnLHtlbmNvZGVkVGV4dH0pO1xyXG5cdFx0aWYgKCBlbmNvZGVkVGV4dCA9PT0gJycgKXtcclxuXHRcdFx0cmV0dXJuIG5ldyBGaWxlRGF0YSggRmlsZURhdGFIZWxwZXIuREVGQVVMVF9WRVJTSU9OLCAnJywgJycgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBKU09OLnBhcnNlKCBlbmNvZGVkVGV4dCApIGFzIEZpbGVEYXRhO1xyXG5cdH1cclxufSIsICJjb25zdCBFTkNSWVBURURfRklMRV9FWFRFTlNJT05fRU5DUllQVEVEID0gJ2VuY3J5cHRlZCc7XHJcbmNvbnN0IEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTl9NREVOQyA9ICdtZGVuYyc7XHJcblxyXG5leHBvcnQgY29uc3QgRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX0RFRkFVTFQgPSBFTkNSWVBURURfRklMRV9FWFRFTlNJT05fTURFTkM7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTlMgPSBbXHJcblx0RU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX01ERU5DLFxyXG5cdEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTl9FTkNSWVBURURcclxuXTsiLCAiXHJcbmV4cG9ydCBjb25zdCBfUFJFRklYX0IgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjIgJztcclxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfQl9WSVNJQkxFID0gJ1x1RDgzRFx1REQxMFx1MDNCMiAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfQSA9ICclJVx1RDgzRFx1REQxMFx1MDNCMSAnO1xyXG5leHBvcnQgY29uc3QgX1BSRUZJWF9BX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwXHUwM0IxICc7XHJcbmV4cG9ydCBjb25zdCBfUFJFRklYX09CU09MRVRFID0gJyUlXHVEODNEXHVERDEwICc7XHJcbmV4cG9ydCBjb25zdCBfUFJFRklYX09CU09MRVRFX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwICc7XHJcblxyXG5leHBvcnQgY29uc3QgX1BSRUZJWF9FTkNPREVfREVGQVVMVCA9IF9QUkVGSVhfQjtcclxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfRU5DT0RFX0RFRkFVTFRfVklTSUJMRSA9IF9QUkVGSVhfQl9WSVNJQkxFO1xyXG5cclxuLy8gU2hvdWxkIGJlIGxpc3RlZCBieSBldmFsdWF0aW9uIHByaW9yaXR5XHJcbmV4cG9ydCBjb25zdCBfUFJFRklYRVMgPSBbXHJcblx0X1BSRUZJWF9CLFxyXG5cdF9QUkVGSVhfQl9WSVNJQkxFLFxyXG5cdF9QUkVGSVhfQSxcclxuXHRfUFJFRklYX0FfVklTSUJMRSxcclxuXHRfUFJFRklYX09CU09MRVRFLFxyXG5cdF9QUkVGSVhfT0JTT0xFVEVfVklTSUJMRVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IF9TVUZGSVhfV0lUSF9DT01NRU5UID0gJyBcdUQ4M0RcdUREMTAlJSc7XHJcbmV4cG9ydCBjb25zdCBfU1VGRklYX05PX0NPTU1FTlQgPSAnIFx1RDgzRFx1REQxMCc7XHJcblxyXG4vLyBTaG91bGQgYmUgbGlzdGVkIGJ5IGV2YWx1YXRpb24gcHJpb3JpdHlcclxuZXhwb3J0IGNvbnN0IF9TVUZGSVhFUyA9IFtcclxuXHRfU1VGRklYX1dJVEhfQ09NTUVOVCxcclxuXHRfU1VGRklYX05PX0NPTU1FTlRcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IF9ISU5UID0gJ1x1RDgzRFx1RENBMSc7IiwgImV4cG9ydCBjbGFzcyBEZWNyeXB0YWJsZXtcclxuXHR2ZXJzaW9uOiBudW1iZXI7XHJcblx0YmFzZTY0Q2lwaGVyVGV4dDpzdHJpbmc7XHJcblx0aGludDpzdHJpbmc7XHJcblx0c2hvd0luUmVhZGluZ1ZpZXc6IGJvb2xlYW47XHJcbn0iLCAiaW1wb3J0IHsgRGVjcnlwdGFibGUgfSBmcm9tIFwiLi9EZWNyeXB0YWJsZS50c1wiO1xyXG5pbXBvcnQgeyBfSElOVCwgX1BSRUZJWEVTLCBfUFJFRklYX0EsIF9QUkVGSVhfQV9WSVNJQkxFLCBfUFJFRklYX0IsIF9QUkVGSVhfQl9WSVNJQkxFLCBfUFJFRklYX09CU09MRVRFLCBfUFJFRklYX09CU09MRVRFX1ZJU0lCTEUsIF9TVUZGSVhFUyB9IGZyb20gXCIuL0ZlYXR1cmVJbnBsYWNlQ29uc3RhbnRzLnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXN7XHJcblx0cHJvY2Vzc2VkVGV4dDpzdHJpbmc7XHJcblx0aXNFbXB0eTogYm9vbGVhbjtcclxuXHRcclxuXHRwcmVmaXg6IHN0cmluZztcclxuXHRzdWZmaXg6IHN0cmluZztcclxuXHJcblx0aGFzT2Jzb2xldGVFbmNyeXB0ZWRQcmVmaXg6IGJvb2xlYW47XHJcblx0aGFzRW5jcnlwdGVkUHJlZml4OiBib29sZWFuO1xyXG5cdGhhc0VuY3J5cHRlZFN1ZmZpeDogYm9vbGVhbjtcclxuXHRjYW5EZWNyeXB0OiBib29sZWFuO1xyXG5cdGNhbkVuY3J5cHQ6IGJvb2xlYW47XHJcblx0Y29udGFpbnNFbmNyeXB0ZWRNYXJrZXJzOiBib29sZWFuO1xyXG5cdGRlY3J5cHRhYmxlPyA6IERlY3J5cHRhYmxlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpe1xyXG5cdFx0dGhpcy5wcm9jZXNzKHRleHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwcm9jZXNzKCB0ZXh0OiBzdHJpbmcgKSA6IHZvaWR7XHJcblx0XHRcclxuXHRcdHRoaXMucHJvY2Vzc2VkVGV4dCA9IHRleHQ7XHJcblxyXG5cdFx0dGhpcy5pc0VtcHR5ID0gdGV4dC5sZW5ndGggPT09IDA7XHJcblxyXG5cdFx0dGhpcy5wcmVmaXggPSBfUFJFRklYRVMuZmluZCggKHByZWZpeCkgPT4gdGV4dC5zdGFydHNXaXRoKHByZWZpeCkgKSA/PyAnJztcclxuXHRcdHRoaXMuc3VmZml4ID0gX1NVRkZJWEVTLmZpbmQoIChzdWZmaXgpID0+IHRleHQuZW5kc1dpdGgoc3VmZml4KSApID8/ICcnO1xyXG5cdFx0XHJcblx0XHR0aGlzLmhhc0VuY3J5cHRlZFByZWZpeCA9IHRoaXMucHJlZml4Lmxlbmd0aCA+IDA7XHJcblx0XHR0aGlzLmhhc0VuY3J5cHRlZFN1ZmZpeCA9IHRoaXMuc3VmZml4Lmxlbmd0aCA+IDA7XHJcblxyXG5cdFx0dGhpcy5oYXNPYnNvbGV0ZUVuY3J5cHRlZFByZWZpeCA9IHRoaXMucHJlZml4ID09PSBfUFJFRklYX09CU09MRVRFIHx8IHRoaXMucHJlZml4ID09PSBfUFJFRklYX09CU09MRVRFX1ZJU0lCTEU7XHJcblxyXG5cdFx0dGhpcy5jb250YWluc0VuY3J5cHRlZE1hcmtlcnMgPSBbLi4uX1BSRUZJWEVTLCAuLi5fU1VGRklYRVNdLnNvbWUoIChtYXJrZXIpID0+IHRleHQuaW5jbHVkZXMobWFya2VyICkpO1xyXG5cclxuXHRcdHRoaXMuY2FuRGVjcnlwdCA9IHRoaXMuaGFzRW5jcnlwdGVkUHJlZml4ICYmIHRoaXMuaGFzRW5jcnlwdGVkU3VmZml4O1xyXG5cdFx0dGhpcy5jYW5FbmNyeXB0ID0gIXRoaXMuaGFzRW5jcnlwdGVkUHJlZml4ICYmICF0aGlzLmNvbnRhaW5zRW5jcnlwdGVkTWFya2VycztcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMuY2FuRGVjcnlwdCl7XHJcblx0XHRcdGNvbnN0IGRlY3J5cHRhYmxlID0gdGhpcy5wYXJzZURlY3J5cHRhYmxlQ29udGVudCh0ZXh0KTtcclxuXHJcblx0XHRcdGlmICggZGVjcnlwdGFibGUgIT0gbnVsbCApe1xyXG5cdFx0XHRcdHRoaXMuZGVjcnlwdGFibGUgPSBkZWNyeXB0YWJsZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5jYW5EZWNyeXB0ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VEZWNyeXB0YWJsZUNvbnRlbnQodGV4dDogc3RyaW5nKSA6IERlY3J5cHRhYmxlIHwgbnVsbCB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgRGVjcnlwdGFibGUoKTtcclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdCF0aGlzLmhhc0VuY3J5cHRlZFByZWZpeFxyXG5cdFx0XHR8fCAhdGhpcy5oYXNFbmNyeXB0ZWRTdWZmaXhcclxuXHRcdCl7XHJcblx0XHRcdHJldHVybiBudWxsOyAvLyBpbnZhbGlkIGZvcm1hdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoIHRoaXMuaGFzT2Jzb2xldGVFbmNyeXB0ZWRQcmVmaXggKXtcclxuXHRcdFx0cmVzdWx0LnZlcnNpb24gPSAwO1xyXG5cdFx0fWVsc2UgaWYgKCB0aGlzLnByZWZpeCA9PSBfUFJFRklYX0IgfHwgdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9CX1ZJU0lCTEUgKXtcclxuXHRcdFx0cmVzdWx0LnZlcnNpb24gPSAyO1xyXG5cdFx0fWVsc2UgaWYgKCB0aGlzLnByZWZpeCA9PSBfUFJFRklYX0EgfHwgdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9BX1ZJU0lCTEUgKXtcclxuXHRcdFx0cmVzdWx0LnZlcnNpb24gPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbW92ZSBtYXJrZXJzIGZyb20gc3RhcnQgYW5kIGVuZFx0XHJcblx0XHRjb25zdCBjb250ZW50ID0gdGV4dC5zdWJzdHJpbmcodGhpcy5wcmVmaXgubGVuZ3RoLCB0ZXh0Lmxlbmd0aCAtIHRoaXMuc3VmZml4Lmxlbmd0aCk7XHJcblxyXG5cdFx0aWYgKCBbLi4uX1BSRUZJWEVTLCAuLi5fU1VGRklYRVNdLnNvbWUoIChtYXJrZXIpID0+IGNvbnRlbnQuaW5jbHVkZXMoIG1hcmtlciApKSApe1xyXG5cdFx0XHQvLyBjb250ZW50LCBpdHNlbGYgaGFzIG1hcmtlcnNcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2hlY2sgaWYgdGhlcmUgaXMgYSBoaW50XHJcblx0XHRpZiAoY29udGVudC5zdWJzdHJpbmcoMCxfSElOVC5sZW5ndGgpID09IF9ISU5UKXtcclxuXHRcdFx0Y29uc3QgZW5kSGludE1hcmtlciA9IGNvbnRlbnQuaW5kZXhPZihfSElOVCxfSElOVC5sZW5ndGgpO1xyXG5cdFx0XHRpZiAoZW5kSGludE1hcmtlcjwwKXtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDsgLy8gaW52YWxpZCBmb3JtYXRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXN1bHQuaGludCA9IGNvbnRlbnQuc3Vic3RyaW5nKF9ISU5ULmxlbmd0aCxlbmRIaW50TWFya2VyKVxyXG5cdFx0XHRyZXN1bHQuYmFzZTY0Q2lwaGVyVGV4dCA9IGNvbnRlbnQuc3Vic3RyaW5nKGVuZEhpbnRNYXJrZXIrX0hJTlQubGVuZ3RoKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXN1bHQuYmFzZTY0Q2lwaGVyVGV4dCA9IGNvbnRlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXN1bHQuc2hvd0luUmVhZGluZ1ZpZXcgPSAhdGhpcy5wcmVmaXguaW5jbHVkZXMoXCIlJVwiKTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxXQUFPLFVBQVUsTUFBTTtBQUV0QixhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUE7Ozs7OztBQ0VBLFdBQUEsVUFBUyxTQUFTQSxlQUFjLFVBQVk7QUFBWixVQUFBLGFBQUEsUUFBQTtBQUFBLG1CQUFBO01BQVk7QUFDMUMsVUFBSSxZQUFZLE1BQU0saUJBQWlCO0FBQ3JDLGNBQU0sSUFBSSxVQUFVLHFHQUFxRyxXQUFXLHVDQUF1QyxNQUFNLGtCQUFrQixHQUFHOztBQUd4TSxVQUFNLHVCQUF1QixNQUFNO0FBQ25DLFlBQU0sb0JBQW9CLFNBQUMsR0FBR0MsUUFBSztBQUFNLGVBQUFBO01BQUE7QUFDekMsVUFBTSxRQUFRLElBQUksTUFBSyxFQUFHO0FBQzFCLFlBQU0sb0JBQW9CO0FBRzFCLFVBQUksVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVO0FBSS9DLGVBQU8sTUFBTSxRQUFRLElBQUssTUFBTSxRQUFRLEVBQVUsWUFBVyxJQUFLOztJQUV0RTs7Ozs7QUNwQkEsU0FBUyxnQkFBZ0IsbUJBQW1COzs7QUNENUMsSUFBTSxRQUFRO0FBQUEsRUFDVixPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQ1o7QUFDQSxJQUFNLE1BQU07QUFDWixJQUFNLFFBQVE7QUFDZCxJQUFNLFNBQVM7QUFDZixJQUFNLE9BQU87QUFDTixJQUFNLEtBQU4sTUFBUztBQUFBLEVBQ1osWUFBWSxNQUFNO0FBQ2QsUUFBSUM7QUFDSixTQUFLLFFBQVEsS0FBSztBQUNsQixTQUFLLFFBQVFBLE1BQUssS0FBSyxVQUFVLFFBQVFBLFFBQU8sU0FBU0EsTUFBSztBQUM5RCxTQUFLLE9BQU8sQ0FBQztBQUFBLEVBQ2pCO0FB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TSxPQUNOLE1BQU0sT0FDTixLQUFLLE9BQVEsS0FBSyxPQUNsQixNQUFNLE9BQ04sS0FBSyxPQUFRLEtBQUssT0FDbEIsTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixLQUFLLE9BQVEsS0FBSyxPQUNsQixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixLQUFLLE9BQVMsS0FBSyxPQUNuQixNQUFNLE9BQ04sS0FBSyxPQUFTLEtBQUssT0FDbkIsTUFBTSxPQUNOLEtBQUssT0FBUyxLQUFLLE9BQ25CLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLEtBQUssT0FBUyxLQUFLLE9BQ25CLE1BQU0sT0FDTixNQUFNLE9BQ04sS0FBSyxPQUFTLEtBQUssT0FDbkIsTUFBTSxPQUNOLE1BQU0sT0FDTixLQUFLLE9BQVMsS0FBSyxPQUNuQixLQUFLLE9BQVMsS0FBSyxPQUNuQixLQUFLLE9BQVMsS0FBSyxPQUNuQixLQUFLLE9BQVMsS0FBSyxPQUNuQixLQUFLLE9BQVMsS0FBSyxPQUNuQixNQUFNLFFBQ04sS0FBSyxRQUFTLEtBQUssUUFDbkIsTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxTQUNOLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLE1BQU0sU0FDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFdBQ3JCLEtBQUssV0FBWSxLQUFLO0FBQzNCO0FBRUEsU0FBUyxZQUFZLEdBQUc7QUFDdkIsU0FBTyxNQUFNLFNBQ1QsS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUs7QUFDekI7QUFFQSxTQUFTLE9BQU8sR0FBRztBQUNsQixTQUFPLEtBQUssUUFBVSxLQUFLLFFBQ3ZCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sU0FDTixNQUFNLFNBQ04sTUFBTSxTQUNOLEtBQUssU0FBVSxLQUFLLFNBQ3BCLE1BQU0sU0FDTixLQUFLLFNBQVUsS0FBSyxTQUNwQixNQUFNLFNBQ04sTUFBTSxTQUNOLE1BQU0sU0FDTixNQUFNLFNBQ04sTUFBTSxTQUNOLE1BQU0sU0FDTixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVcsS0FBSyxTQUNyQixNQUFNLFNBQ04sTUFBTSxTQUNOLEtBQUssU0FBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sTUFBTSxVQUNOLE1BQU0sVUFDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLE1BQU0sVUFDTixNQUFNLFVB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QXNFLENBQUMsVUFBVSxNQUFNLE9BQVM7QUFBQSxFQUN4SCxXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsSUFDSCxPQUFPLENBQUMsS0FBSyxNQUFNO0FBQUEsSUFDbkIsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ2I7QUFDSixDQUFFLEdBQUcsQ0FBQyxTQUFTLElBQUksbUJBQW1CLEVBQUUsV0FBWSxLQUFLLFdBQXVCLEtBQUssS0FBaUIsQ0FBRSxFQUV2RyxRQUFRLFdBQVcsNkVBQThFLENBQUMsVUFBVSxNQUFNLE9BQVM7QUFBQSxFQUN4SCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsSUFDSixPQUFPLENBQUMsS0FBSyxPQUFPLElBQUk7QUFBQSxJQUN4QixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsRUFDbEI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE9BQU8sQ0FBQyxNQUFNLEtBQUs7QUFBQSxJQUNuQixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDYjtBQUNKLENBQUUsR0FBRyxDQUFDLFNBQVMsSUFBSSxzQkFBc0IsRUFBRSxXQUFZLEtBQUssV0FBdUIsS0FBSyxRQUFrQixLQUFLLFdBQVcsS0FBTSxDQUFFLEVBRWpJLGNBQWMsRUFDZCxLQUFLLEVBQ0wsS0FBTSxJQUFLLEVBQ1gsUUFBUTtBQUFBLEVBQ0wsQ0FBQyxXQUFXLG9HQUFvRztBQUFBLEVBQ2hILENBQUMsK0JBQStCLG9FQUFvRTtBQUFBLEVBQ3BHLENBQUMseURBQXlELHNDQUFzQztBQUNsRyxDQUFDLEVBQ0YsTUFBTTsiLAogICJuYW1lcyI6IFsiZ2V0Q2FsbGVyRmlsZSIsICJzdGFjayIsICJfYSIsICJlbW9qaVJlZ2V4IiwgImNvZGUiLCAicmVzb2x2ZSIsICJEZWZhdWx0VmFsdWVzRm9yVHlwZUtleSIsICJtaXhpbiIsICJrZXkiLCAiYXJncyIsICJ2YWx1ZSIsICJ2YWwiLCAiYXJndiIsICJlbnYiLCAiYWxpYXNlcyIsICJkZWZhdWx0cyIsICJndWVzc1R5cGUiLCAicmVxdWlyZSIsICJyZXNvbHZlIiwgInBhdGgiLCAiZGlybmFtZSIsICJyZXNvbHZlIiwgInJlYWRGaWxlU3luYyIsICJzdGF0U3luYyIsICJmb3JtYXQiLCAicmVzb2x2ZSIsICJ5MThuIiwgInkxOG4iLCAiY3JlYXRlUmVxdWlyZSIsICJyZWFkRmlsZVN5bmMiLCAicmVhZGRpclN5bmMiLCAicmVxdWlyZSIsICJkaXJuYW1lIiwgInJlc29sdmUiLCAiZ2V0Q2FsbGVyRmlsZSIsICJzaGltIiwgImNtZCIsICJyZXN1bHQiLCAidXNhZ2UiLCAidmFsaWRhdGlvbiIsICJzaGltIiwgImNvbW1hbmQiLCAiYyIsICJzaGltIiwgImZhaWwiLCAiY29tbWFuZCIsICJ1aSIsICJ1c2FnZSIsICJzZXAiLCAibWF4V2lkdGgiLCAidXNhZ2UiLCAiY29tbWFuZCIsICJzaGltIiwgIl9hIiwgIl9iIiwgIl9jIiwgImRlc2MiLCAiYXJndiIsICJ1c2FnZSIsICJzaGltIiwgIl9hIiwgImtleSIsICJzaGltIiwgInNoaW0iLCAiX2EiLCAicmVzb2x2ZSIsICJ0eXBlIiwgImtleSIsICJ2YWx1ZSIsICJfYiIsICJfYyIsICJ2YWxpZGF0aW9uIiwgImsiLCAiY29tcGxldGlvbiIsICJ2ZWN0b3JTaXplIiwgIml0ZXJhdGlvbnMiLCAic2FsdCIsICJ1dGY4RW5jb2RlciIsICJ1dGY4RGVjb2RlciIsICJjcnlwdG8iLCAiZm9ybWF0Il0KfQo=
