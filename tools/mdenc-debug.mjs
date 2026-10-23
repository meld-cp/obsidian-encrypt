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
var kCopyDoubleDash = /* @__PURE__ */ Symbol("copyDoubleDash");
var kCreateLogger = /* @__PURE__ */ Symbol("copyDoubleDash");
var kDeleteFromParserHintObject = /* @__PURE__ */ Symbol("deleteFromParserHintObject");
var kEmitWarning = /* @__PURE__ */ Symbol("emitWarning");
var kFreeze = /* @__PURE__ */ Symbol("freeze");
var kGetDollarZero = /* @__PURE__ */ Symbol("getDollarZero");
var kGetParserConfiguration = /* @__PURE__ */ Symbol("getParserConfiguration");
var kGetUsageConfiguration = /* @__PURE__ */ Symbol("getUsageConfiguration");
var kGuessLocale = /* @__PURE__ */ Symbol("guessLocale");
var kGuessVersion = /* @__PURE__ */ Symbol("guessVersion");
var kParsePositionalNumbers = /* @__PURE__ */ Symbol("parsePositionalNumbers");
var kPkgUp = /* @__PURE__ */ Symbol("pkgUp");
var kPopulateParserHintArray = /* @__PURE__ */ Symbol("populateParserHintArray");
var kPopulateParserHintSingleValueDictionary = /* @__PURE__ */ Symbol("populateParserHintSingleValueDictionary");
var kPopulateParserHintArrayDictionary = /* @__PURE__ */ Symbol("populateParserHintArrayDictionary");
var kPopulateParserHintDictionary = /* @__PURE__ */ Symbol("populateParserHintDictionary");
var kSanitizeKey = /* @__PURE__ */ Symbol("sanitizeKey");
var kSetKey = /* @__PURE__ */ Symbol("setKey");
var kUnfreeze = /* @__PURE__ */ Symbol("unfreeze");
var kValidateAsync = /* @__PURE__ */ Symbol("validateAsync");
var kGetCommandInstance = /* @__PURE__ */ Symbol("getCommandInstance");
var kGetContext = /* @__PURE__ */ Symbol("getContext");
var kGetHasOutput = /* @__PURE__ */ Symbol("getHasOutput");
var kGetLoggerInstance = /* @__PURE__ */ Symbol("getLoggerInstance");
var kGetParseContext = /* @__PURE__ */ Symbol("getParseContext");
var kGetUsageInstance = /* @__PURE__ */ Symbol("getUsageInstance");
var kGetValidationInstance = /* @__PURE__ */ Symbol("getValidationInstance");
var kHasParseCallback = /* @__PURE__ */ Symbol("hasParseCallback");
var kIsGlobalContext = /* @__PURE__ */ Symbol("isGlobalContext");
var kPostProcess = /* @__PURE__ */ Symbol("postProcess");
var kRebase = /* @__PURE__ */ Symbol("rebase");
var kReset = /* @__PURE__ */ Symbol("reset");
var kRunYargsParserAndExecuteCommands = /* @__PURE__ */ Symbol("runYargsParserAndExecuteCommands");
var kRunValidation = /* @__PURE__ */ Symbol("runValidation");
var kSetHasOutput = /* @__PURE__ */ Symbol("setHasOutput");
var kTrackManuallySetKeys = /* @__PURE__ */ Symbol("kTrackManuallySetKeys");
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
      console.error(e);
      return null;
    }
  }
  async decryptFromBase64(base64Encoded, password) {
    try {
      const bytesToDecode = this.stringToArray(atob(base64Encoded));
      return await this.decryptFromBytes(bytesToDecode, password);
    } catch (e) {
      console.error(e);
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
          salt: salt2.buffer,
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
      console.error(e);
      return null;
    }
  }
  async decryptFromBase64(base64Encoded, password) {
    try {
      const bytesToDecode = this.stringToArray(atob(base64Encoded));
      return await this.decryptFromBytes(bytesToDecode, password);
    } catch (e) {
      console.error(e);
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
      const decryptedBytes = await crypto.subtle.decrypt(algorithmObsolete, key, bytesToDecrypt.buffer);
      const utf8Decode = new TextDecoder();
      const decryptedText = utf8Decode.decode(decryptedBytes);
      return decryptedText;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
};

// src/services/CryptoHelperV3.ts
var V3_DEFAULT_ITERATIONS = 22e4;
var V3_MIN_ITERATIONS = 22e4;
var V3_MAX_ITERATIONS = 2e6;
function encodeBase64(bytes) {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 8192) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
  }
  return btoa(binary);
}
function decodeBase64(value) {
  if (typeof value !== "string" || value.length % 4 !== 0 || /[^A-Za-z0-9+/=]/.test(value)) {
    throw new Error("Invalid v3 Base64");
  }
  const bytes = Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
  if (encodeBase64(bytes) !== value) throw new Error("Noncanonical v3 Base64");
  return bytes;
}
function record(value, keys) {
  if (value === null || typeof value !== "object" || Array.isArray(value) || Object.keys(value).some((key) => !keys.includes(key))) {
    throw new Error("Invalid v3 metadata");
  }
  return value;
}
function validateIterations(iterations2) {
  if (typeof iterations2 !== "number" || !Number.isInteger(iterations2) || iterations2 < V3_MIN_ITERATIONS || iterations2 > V3_MAX_ITERATIONS) {
    throw new Error("Unsupported v3 iteration count");
  }
}
function header(iterations2, salt2, iv) {
  return {
    version: "3.0",
    kdf: { name: "PBKDF2", hash: "SHA-512", iterations: iterations2, salt: encodeBase64(salt2) },
    cipher: { name: "AES-GCM", keyLength: 256, iv: encodeBase64(iv), tagLength: 128 }
  };
}
function validateEnvelopeV3(value) {
  const data = record(value, ["version", "hint", "kdf", "cipher", "encodedData"]);
  const kdf = record(data.kdf, ["name", "hash", "iterations", "salt"]);
  const cipher = record(data.cipher, ["name", "keyLength", "iv", "tagLength"]);
  if (data.version !== "3.0" || kdf.name !== "PBKDF2" || kdf.hash !== "SHA-512" || cipher.name !== "AES-GCM" || cipher.keyLength !== 256 || cipher.tagLength !== 128 || "hint" in data && typeof data.hint !== "string") {
    throw new Error("Unsupported v3 crypto suite");
  }
  validateIterations(kdf.iterations);
  const salt2 = decodeBase64(kdf.salt);
  const iv = decodeBase64(cipher.iv);
  const ciphertext = decodeBase64(data.encodedData);
  if (salt2.length !== 16 || iv.length !== 12 || ciphertext.length < 16) {
    throw new Error("Invalid v3 payload lengths");
  }
  return { ...header(kdf.iterations, salt2, iv), encodedData: encodeBase64(ciphertext) };
}
function encodeInlineV3(value) {
  const envelope = validateEnvelopeV3(value);
  const ciphertext = decodeBase64(envelope.encodedData);
  const bytes = new Uint8Array(32 + ciphertext.length);
  bytes[0] = 1;
  const iterations2 = envelope.kdf.iterations;
  bytes[1] = iterations2 >>> 16;
  bytes[2] = iterations2 >>> 8;
  bytes[3] = iterations2;
  bytes.set(decodeBase64(envelope.kdf.salt), 4);
  bytes.set(decodeBase64(envelope.cipher.iv), 20);
  bytes.set(ciphertext, 32);
  return encodeBase64(bytes);
}
function decodeInlineV3(encoded) {
  const bytes = decodeBase64(encoded);
  if (bytes.length < 48 || bytes[0] !== 1) throw new Error("Invalid v3 inline header");
  const iterations2 = bytes[1] * 65536 + bytes[2] * 256 + bytes[3];
  validateIterations(iterations2);
  return {
    ...header(iterations2, bytes.slice(4, 20), bytes.slice(20, 32)),
    encodedData: encodeBase64(bytes.slice(32))
  };
}
function additionalData(envelope) {
  const { version, kdf, cipher } = envelope;
  return new TextEncoder().encode(JSON.stringify({ version, kdf, cipher }));
}
async function deriveKey(password, envelope) {
  const material = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({
    name: "PBKDF2",
    hash: envelope.kdf.hash,
    salt: decodeBase64(envelope.kdf.salt).buffer,
    iterations: envelope.kdf.iterations
  }, material, { name: "AES-GCM", length: envelope.cipher.keyLength }, false, ["encrypt", "decrypt"]);
}
var CryptoHelperV3 = class {
  async encryptEnvelope(text, password) {
    const metadata = header(V3_DEFAULT_ITERATIONS, crypto.getRandomValues(new Uint8Array(16)), crypto.getRandomValues(new Uint8Array(12)));
    const envelope = { ...metadata, encodedData: "" };
    const key = await deriveKey(password, envelope);
    const ciphertext = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: decodeBase64(metadata.cipher.iv).buffer,
      tagLength: 128,
      additionalData: additionalData(envelope).buffer
    }, key, new TextEncoder().encode(text));
    return { ...metadata, encodedData: encodeBase64(new Uint8Array(ciphertext)) };
  }
  async decryptEnvelope(value, password) {
    try {
      const envelope = validateEnvelopeV3(value);
      const key = await deriveKey(password, envelope);
      const plaintext = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: decodeBase64(envelope.cipher.iv).buffer,
        tagLength: 128,
        additionalData: additionalData(envelope).buffer
      }, key, decodeBase64(envelope.encodedData).buffer);
      return new TextDecoder().decode(plaintext);
    } catch {
      return null;
    }
  }
  async encryptToBase64(text, password) {
    return encodeInlineV3(await this.encryptEnvelope(text, password));
  }
  async decryptFromBase64(encoded, password) {
    try {
      return await this.decryptEnvelope(decodeInlineV3(encoded), password);
    } catch {
      return null;
    }
  }
};

// src/services/CryptoHelperFactory.ts
var _CryptoHelperFactory = class _CryptoHelperFactory {
  static BuildDefault() {
    return this.cryptoHelper_v3;
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
    if (data.version == "3.0") {
      return this.cryptoHelper_v3;
    }
    return null;
  }
  static BuildFromDecryptableOrThrow(decryptable) {
    const result = _CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
    if (result != null) {
      return result;
    }
    throw new Error(`Unable to determine ICryptoHelper for Decryptable ver ${decryptable.version.toString()}`);
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
    if (decryptable.version == 3) {
      return this.cryptoHelper_v3;
    }
    return null;
  }
};
_CryptoHelperFactory.cryptoHelper2304_v2 = new CryptoHelper2304(16, 16, 21e4);
// PBKDF2-HMAC-SHA512 uses a 220,000-iteration work factor (OWASP).
// V3 stores its parameters in an authenticated envelope.
_CryptoHelperFactory.cryptoHelper_v3 = new CryptoHelperV3();
var CryptoHelperFactory = _CryptoHelperFactory;

// src/services/FileDataHelper.ts
var blankFile = /* @__PURE__ */ Symbol("blank-file");
blankFile;
var FileData = class {
  constructor(version, hint, encodedData) {
    this.version = "1.0";
    this.version = version;
    this.hint = hint;
    this.encodedData = encodedData;
  }
};
var FileDataHelper = class {
  static async encrypt(pass, hint, text) {
    const crypto2 = CryptoHelperFactory.BuildDefault();
    const envelope = await crypto2.encryptEnvelope(text, pass);
    return Object.assign(new FileData(envelope.version, hint, envelope.encodedData), { kdf: envelope.kdf, cipher: envelope.cipher });
  }
  static async decrypt(data, pass) {
    if (data[blankFile]) return "";
    if (data.version === "3.0") {
      return await CryptoHelperFactory.BuildDefault().decryptEnvelope(data, pass);
    }
    if (data.encodedData == "") {
      return "";
    }
    const crypto2 = CryptoHelperFactory.BuildFromFileDataOrThrow(data);
    return await crypto2.decryptFromBase64(data.encodedData, pass);
  }
};
FileDataHelper.DEFAULT_VERSION = "3.0";
var JsonFileEncoding = class {
  static encode(data) {
    return JSON.stringify(data, null, 2);
  }
  static isEncoded(text) {
    try {
      JSON.parse(text);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  static decode(encodedText) {
    if (encodedText === "") {
      return Object.assign(new FileData(FileDataHelper.DEFAULT_VERSION, "", ""), { [blankFile]: true });
    }
    const parsed = JSON.parse(encodedText);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Invalid FileData JSON");
    }
    const data = parsed;
    if (typeof data.version !== "string" || typeof data.hint !== "string" || typeof data.encodedData !== "string") {
      throw new Error("Invalid FileData JSON");
    }
    if (data.version === "3.0") {
      const envelope = validateEnvelopeV3(data);
      return Object.assign(new FileData(envelope.version, data.hint, envelope.encodedData), { kdf: envelope.kdf, cipher: envelope.cipher });
    }
    return new FileData(data.version, data.hint, data.encodedData);
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
var _PREFIX_C = "%%\u{1F510}\u03B3 ";
var _PREFIX_C_VISIBLE = "\u{1F510}\u03B3 ";
var _PREFIX_B = "%%\u{1F510}\u03B2 ";
var _PREFIX_B_VISIBLE = "\u{1F510}\u03B2 ";
var _PREFIX_A = "%%\u{1F510}\u03B1 ";
var _PREFIX_A_VISIBLE = "\u{1F510}\u03B1 ";
var _PREFIX_OBSOLETE = "%%\u{1F510} ";
var _PREFIX_OBSOLETE_VISIBLE = "\u{1F510} ";
var _PREFIXES = [
  _PREFIX_C,
  _PREFIX_C_VISIBLE,
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
    } else if (this.prefix == _PREFIX_C || this.prefix == _PREFIX_C_VISIBLE) {
      result.version = 3;
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
    let hasFailure = false;
    for await (const listing of Utils.listings(cwd, true)) {
      if (listing.featureType == "InPlace") {
        for await (const result of this.testForInPlaceDecryption(listing, passwords)) {
          if (!result.success) {
            hasFailure = true;
          }
          this.outputResult(result, onlyListFails);
        }
      } else if (listing.featureType == "WholeNote") {
        const result = await this.testForWholeNoteDecryption(listing, passwords);
        if (!result.success) {
          hasFailure = true;
        }
        this.outputResult(result, onlyListFails);
      }
    }
    if (hasFailure) {
      process.exitCode = 1;
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
        if (!wasDecrypted) {
          yield {
            listing,
            success: false,
            message: `${matchLoc}, unable to decrypt`
          };
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
      const decoded = await FileDataHelper.decrypt(fileData, pw);
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
    let hasFailure = false;
    for await (const listing of Utils.listings(cwd, true)) {
      if (listing.featureType == "InPlace") {
        const result = await this.decryptInPlaceListing(listing, passwords, outdir, dryrun);
        if (!result.success) {
          hasFailure = true;
        }
        this.outputResult(result);
      } else if (listing.featureType == "WholeNote") {
        const result = await this.decryptWholeNoteListing(listing, passwords, outdir, dryrun);
        if (!result.success) {
          hasFailure = true;
        }
        this.outputResult(result);
      }
    }
    if (hasFailure) {
      process.exitCode = 1;
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
            const plaintext = decryptedText;
            decryptedLine = decryptedLine.replace(matchedText, () => plaintext);
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
      const decoded = await FileDataHelper.decrypt(fileData, pw);
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
        if (_PREFIXES.some((prefix) => content.includes(prefix))) {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2Vtb2ppLXJlZ2V4L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9nZXQtY2FsbGVyLWZpbGUvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2xpYi9wbGF0Zm9ybS1zaGltcy9lc20ubWpzIiwgIi4uL25vZGVfbW9kdWxlcy9jbGl1aS9idWlsZC9saWIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Fuc2ktcmVnZXgvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2dldC1lYXN0LWFzaWFuLXdpZHRoL2xvb2t1cC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZ2V0LWVhc3QtYXNpYW4td2lkdGgvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3JhcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXN0eWxlcy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3JhcC1hbnNpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9jbGl1aS9pbmRleC5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL2VzY2FsYWRlL3N5bmMvaW5kZXgubWpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL3N0cmluZy11dGlscy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi90b2tlbml6ZS1hcmctc3RyaW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL3lhcmdzLXBhcnNlci10eXBlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi95YXJncy1wYXJzZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9wcm9jZXNzLWFyZ3YuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3kxOG4vYnVpbGQvbGliL3BsYXRmb3JtLXNoaW1zL25vZGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3kxOG4vYnVpbGQvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95MThuL2luZGV4Lm1qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvaXMtcHJvbWlzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3llcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3BhcnNlLWNvbW1hbmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi9hcmdzZXJ0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvbWlkZGxld2FyZS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2NvbW1hbmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9vYmotZmlsdGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvc2V0LWJsb2NraW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXNhZ2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi9jb21wbGV0aW9uLXRlbXBsYXRlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2NvbXBsZXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9sZXZlbnNodGVpbi5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3ZhbGlkYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9hcHBseS1leHRlbmRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIveWFyZ3MtZmFjdG9yeS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvaW5kZXgubWpzIiwgIi4uL3NyYy90b29scy9tZGVuYy50cyIsICIuLi9zcmMvc2VydmljZXMvQ3J5cHRvSGVscGVyLnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9DcnlwdG9IZWxwZXIyMzA0LnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9DcnlwdG9IZWxwZXJPYnNvbGV0ZS50cyIsICIuLi9zcmMvc2VydmljZXMvQ3J5cHRvSGVscGVyVjMudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0NyeXB0b0hlbHBlckZhY3RvcnkudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0ZpbGVEYXRhSGVscGVyLnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9Db25zdGFudHMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2ZlYXR1cmUtaW5wbGFjZS1lbmNyeXB0L0ZlYXR1cmVJbnBsYWNlQ29uc3RhbnRzLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9EZWNyeXB0YWJsZS50cyIsICIuLi9zcmMvZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvZmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuXHQvLyBodHRwczovL210aHMuYmUvZW1vamlcblx0cmV0dXJuIC9bIyowLTldXFx1RkUwRj9cXHUyMEUzfFtcXHhBOVxceEFFXFx1MjAzQ1xcdTIwNDlcXHUyMTIyXFx1MjEzOVxcdTIxOTQtXFx1MjE5OVxcdTIxQTlcXHUyMUFBXFx1MjMxQVxcdTIzMUJcXHUyMzI4XFx1MjNDRlxcdTIzRUQtXFx1MjNFRlxcdTIzRjFcXHUyM0YyXFx1MjNGOC1cXHUyM0ZBXFx1MjRDMlxcdTI1QUFcXHUyNUFCXFx1MjVCNlxcdTI1QzBcXHUyNUZCXFx1MjVGQ1xcdTI1RkVcXHUyNjAwLVxcdTI2MDRcXHUyNjBFXFx1MjYxMVxcdTI2MTRcXHUyNjE1XFx1MjYxOFxcdTI2MjBcXHUyNjIyXFx1MjYyM1xcdTI2MjZcXHUyNjJBXFx1MjYyRVxcdTI2MkZcXHUyNjM4LVxcdTI2M0FcXHUyNjQwXFx1MjY0MlxcdTI2NDgtXFx1MjY1M1xcdTI2NUZcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdFXFx1MjY3RlxcdTI2OTJcXHUyNjk0LVxcdTI2OTdcXHUyNjk5XFx1MjY5QlxcdTI2OUNcXHUyNkEwXFx1MjZBN1xcdTI2QUFcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzhcXHUyNkNGXFx1MjZEMVxcdTI2RTlcXHUyNkYwLVxcdTI2RjVcXHUyNkY3XFx1MjZGOFxcdTI2RkFcXHUyNzAyXFx1MjcwOFxcdTI3MDlcXHUyNzBGXFx1MjcxMlxcdTI3MTRcXHUyNzE2XFx1MjcxRFxcdTI3MjFcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc1N1xcdTI3NjNcXHUyN0ExXFx1MjkzNFxcdTI5MzVcXHUyQjA1LVxcdTJCMDdcXHUyQjFCXFx1MkIxQ1xcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XVxcdUZFMEY/fFtcXHUyNjFEXFx1MjcwQ1xcdTI3MERdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpP3xbXFx1MjcwQVxcdTI3MEJdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI2OTNcXHUyNkExXFx1MjZBQlxcdTI2QzVcXHUyNkNFXFx1MjZENFxcdTI2RUFcXHUyNkZEXFx1MjcwNVxcdTI3MjhcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkI1MF18XFx1MjZEM1xcdUZFMEY/KD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E1KT98XFx1MjZGOSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVGRTBGKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98XFx1Mjc2NFxcdUZFMEY/KD86XFx1MjAwRCg/OlxcdUQ4M0RcXHVERDI1fFxcdUQ4M0VcXHVERTc5KSk/fFxcdUQ4M0MoPzpbXFx1REMwNFxcdURENzBcXHVERDcxXFx1REQ3RVxcdUREN0ZcXHVERTAyXFx1REUzN1xcdURGMjFcXHVERjI0LVxcdURGMkNcXHVERjM2XFx1REY3RFxcdURGOTZcXHVERjk3XFx1REY5OS1cXHVERjlCXFx1REY5RVxcdURGOUZcXHVERkNEXFx1REZDRVxcdURGRDQtXFx1REZERlxcdURGRjVcXHVERkY3XVxcdUZFMEY/fFtcXHVERjg1XFx1REZDMlxcdURGQzddKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdURGQzRcXHVERkNBXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERkNCXFx1REZDQ10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVEQ0NGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURFMDFcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzNlxcdURFMzgtXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIwXFx1REYyRC1cXHVERjM1XFx1REYzNy1cXHVERjQzXFx1REY0NS1cXHVERjRBXFx1REY0Qy1cXHVERjdDXFx1REY3RS1cXHVERjg0XFx1REY4Ni1cXHVERjkzXFx1REZBMC1cXHVERkMxXFx1REZDNVxcdURGQzZcXHVERkM4XFx1REZDOVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjgtXFx1REZGRl18XFx1RERFNlxcdUQ4M0NbXFx1RERFOC1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREYyXFx1RERGNFxcdURERjYtXFx1RERGQVxcdURERkNcXHVEREZEXFx1RERGRl18XFx1RERFN1xcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXXxcXHVEREU4XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERUVcXHVEREYwLVxcdURERjdcXHVEREZBLVxcdURERkZdfFxcdURERTlcXHVEODNDW1xcdURERUFcXHVEREVDXFx1RERFRlxcdURERjBcXHVEREYyXFx1RERGNFxcdURERkZdfFxcdURERUFcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXXxcXHVEREVCXFx1RDgzQ1tcXHVEREVFLVxcdURERjBcXHVEREYyXFx1RERGNFxcdURERjddfFxcdURERUNcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdfFxcdURERURcXHVEODNDW1xcdURERjBcXHVEREYyXFx1RERGM1xcdURERjdcXHVEREY5XFx1RERGQV18XFx1RERFRVxcdUQ4M0NbXFx1RERFOC1cXHVEREVBXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XXxcXHVEREVGXFx1RDgzQ1tcXHVEREVBXFx1RERGMlxcdURERjRcXHVEREY1XXxcXHVEREYwXFx1RDgzQ1tcXHVEREVBXFx1RERFQy1cXHVEREVFXFx1RERGMlxcdURERjNcXHVEREY1XFx1RERGN1xcdURERkNcXHVEREZFXFx1RERGRl18XFx1RERGMVxcdUQ4M0NbXFx1RERFNi1cXHVEREU4XFx1RERFRVxcdURERjBcXHVEREY3LVxcdURERkJcXHVEREZFXXxcXHVEREYyXFx1RDgzQ1tcXHVEREU2XFx1RERFOC1cXHVEREVEXFx1RERGMC1cXHVEREZGXXxcXHVEREYzXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUEtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGNFxcdURERjVcXHVEREY3XFx1RERGQVxcdURERkZdfFxcdURERjRcXHVEODNDXFx1RERGMnxcXHVEREY1XFx1RDgzQ1tcXHVEREU2XFx1RERFQS1cXHVEREVEXFx1RERGMC1cXHVEREYzXFx1RERGNy1cXHVEREY5XFx1RERGQ1xcdURERkVdfFxcdURERjZcXHVEODNDXFx1RERFNnxcXHVEREY3XFx1RDgzQ1tcXHVEREVBXFx1RERGNFxcdURERjhcXHVEREZBXFx1RERGQ118XFx1RERGOFxcdUQ4M0NbXFx1RERFNi1cXHVEREVBXFx1RERFQy1cXHVEREY0XFx1RERGNy1cXHVEREY5XFx1RERGQlxcdURERkQtXFx1RERGRl18XFx1RERGOVxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVEXFx1RERFRi1cXHVEREY0XFx1RERGN1xcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkZdfFxcdURERkFcXHVEODNDW1xcdURERTZcXHVEREVDXFx1RERGMlxcdURERjNcXHVEREY4XFx1RERGRVxcdURERkZdfFxcdURERkJcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdfFxcdURERkNcXHVEODNDW1xcdURERUJcXHVEREY4XXxcXHVEREZEXFx1RDgzQ1xcdURERjB8XFx1RERGRVxcdUQ4M0NbXFx1RERFQVxcdURERjldfFxcdURERkZcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ118XFx1REY0NCg/OlxcdTIwMERcXHVEODNEXFx1REZFQik/fFxcdURGNEIoPzpcXHUyMDBEXFx1RDgzRFxcdURGRTkpP3xcXHVERkMzKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVERkYzXFx1RkUwRj8oPzpcXHUyMDBEKD86XFx1MjZBN1xcdUZFMEY/fFxcdUQ4M0NcXHVERjA4KSk/fFxcdURGRjQoPzpcXHUyMDBEXFx1MjYyMFxcdUZFMEY/fFxcdURCNDBcXHVEQzY3XFx1REI0MFxcdURDNjJcXHVEQjQwKD86XFx1REM2NVxcdURCNDBcXHVEQzZFXFx1REI0MFxcdURDNjd8XFx1REM3M1xcdURCNDBcXHVEQzYzXFx1REI0MFxcdURDNzR8XFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzMpXFx1REI0MFxcdURDN0YpPyl8XFx1RDgzRCg/OltcXHVEQzNGXFx1RENGRFxcdURENDlcXHVERDRBXFx1REQ2RlxcdURENzBcXHVERDczXFx1REQ3Ni1cXHVERDc5XFx1REQ4N1xcdUREOEEtXFx1REQ4RFxcdUREQTVcXHVEREE4XFx1RERCMVxcdUREQjJcXHVEREJDXFx1RERDMi1cXHVEREM0XFx1REREMS1cXHVEREQzXFx1REREQy1cXHVERERFXFx1RERFMVxcdURERTNcXHVEREU4XFx1RERFRlxcdURERjNcXHVEREZBXFx1REVDQlxcdURFQ0QtXFx1REVDRlxcdURFRTAtXFx1REVFNVxcdURFRTlcXHVERUYwXFx1REVGM11cXHVGRTBGP3xbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNkItXFx1REM2RFxcdURDNzJcXHVEQzc0LVxcdURDNzZcXHVEQzc4XFx1REM3Q1xcdURDODNcXHVEQzg1XFx1REM4RlxcdURDOTFcXHVEQ0FBXFx1REQ3QVxcdUREOTVcXHVERDk2XFx1REU0Q1xcdURFNEZcXHVERUMwXFx1REVDQ10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REM2RVxcdURDNzBcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjRcXHVERUI1XSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDc0XFx1REQ5MF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/fFtcXHVEQzAwLVxcdURDMDdcXHVEQzA5LVxcdURDMTRcXHVEQzE2LVxcdURDMjVcXHVEQzI3LVxcdURDM0FcXHVEQzNDLVxcdURDM0VcXHVEQzQwXFx1REM0NFxcdURDNDVcXHVEQzUxLVxcdURDNjVcXHVEQzZBXFx1REM3OS1cXHVEQzdCXFx1REM3RC1cXHVEQzgwXFx1REM4NFxcdURDODgtXFx1REM4RVxcdURDOTBcXHVEQzkyLVxcdURDQTlcXHVEQ0FCLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVEREE0XFx1RERGQi1cXHVERTJEXFx1REUyRi1cXHVERTM0XFx1REUzNy1cXHVERTQxXFx1REU0M1xcdURFNDRcXHVERTQ4LVxcdURFNEFcXHVERTgwLVxcdURFQTJcXHVERUE0LVxcdURFQjNcXHVERUI3LVxcdURFQkZcXHVERUMxLVxcdURFQzVcXHVERUQwLVxcdURFRDJcXHVERUQ1LVxcdURFRDdcXHVERURDLVxcdURFREZcXHVERUVCXFx1REVFQ1xcdURFRjQtXFx1REVGQ1xcdURGRTAtXFx1REZFQlxcdURGRjBdfFxcdURDMDgoPzpcXHUyMDBEXFx1MkIxQik/fFxcdURDMTUoPzpcXHUyMDBEXFx1RDgzRVxcdUREQkEpP3xcXHVEQzI2KD86XFx1MjAwRCg/OlxcdTJCMUJ8XFx1RDgzRFxcdUREMjUpKT98XFx1REMzQig/OlxcdTIwMERcXHUyNzQ0XFx1RkUwRj8pP3xcXHVEQzQxXFx1RkUwRj8oPzpcXHUyMDBEXFx1RDgzRFxcdURERThcXHVGRTBGPyk/fFxcdURDNjgoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OHxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XVxcdTIwMERcXHVEODNEKD86XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKSkpP3xcXHVERkZEKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRV0pKSk/KSk/fFxcdURDNjkoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/W1xcdURDNjhcXHVEQzY5XXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pP3xcXHVEQzY5XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSkpKT8pKT98XFx1REM2Rig/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERDc1KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERTJFKD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E4KT98XFx1REUzNSg/OlxcdTIwMERcXHVEODNEXFx1RENBQik/fFxcdURFMzYoPzpcXHUyMDBEXFx1RDgzQ1xcdURGMkJcXHVGRTBGPyk/fFxcdURFNDIoPzpcXHUyMDBEW1xcdTIxOTRcXHUyMTk1XVxcdUZFMEY/KT98XFx1REVCNig/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRCg/OltcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xcXHUyN0ExXFx1RkUwRj8pKT8pfFxcdUQ4M0UoPzpbXFx1REQwQ1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDMwLVxcdUREMzRcXHVERDM2XFx1REQ3N1xcdUREQjVcXHVEREI2XFx1RERCQlxcdURERDJcXHVEREQzXFx1RERENVxcdURFQzMtXFx1REVDNVxcdURFRjBcXHVERUYyLVxcdURFRjhdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdUREMjZcXHVERDM1XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0RcXHVERENGXFx1RERENFxcdURERDYtXFx1RERERF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1RERERVxcdUREREZdKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDBEXFx1REQwRVxcdUREMTAtXFx1REQxN1xcdUREMjAtXFx1REQyNVxcdUREMjctXFx1REQyRlxcdUREM0FcXHVERDNGLVxcdURENDVcXHVERDQ3LVxcdURENzZcXHVERDc4LVxcdUREQjRcXHVEREI3XFx1RERCQVxcdUREQkMtXFx1RERDQ1xcdURERDBcXHVEREUwLVxcdURERkZcXHVERTcwLVxcdURFN0NcXHVERTgwLVxcdURFODlcXHVERThGLVxcdURFQzJcXHVERUM2XFx1REVDRS1cXHVERURDXFx1REVERi1cXHVERUU5XXxcXHVERDNDKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGP3xcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xcXHVERENFKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVEREQxKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEREQxXFx1MjAwRFxcdUQ4M0VcXHVEREQyKD86XFx1MjAwRFxcdUQ4M0VcXHVEREQyKT98XFx1REREMig/OlxcdTIwMERcXHVEODNFXFx1REREMik/KSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRV18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT8pKT98XFx1REVGMSg/OlxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKT98XFx1REZGQyg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pP3xcXHVERkZEKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSk/fFxcdURGRkUoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKT98XFx1REZGRig/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSk/KSk/KS9nO1xufTtcbiIsIG51bGwsICIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgbm90U3RyaWN0RXF1YWwsIHN0cmljdEVxdWFsIH0gZnJvbSAnYXNzZXJ0J1xuaW1wb3J0IGNsaXVpIGZyb20gJ2NsaXVpJ1xuaW1wb3J0IGVzY2FsYWRlIGZyb20gJ2VzY2FsYWRlL3N5bmMnXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSAndXRpbCdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IFBhcnNlciBmcm9tICd5YXJncy1wYXJzZXInXG5pbXBvcnQgeyBiYXNlbmFtZSwgZGlybmFtZSwgZXh0bmFtZSwgcmVsYXRpdmUsIHJlc29sdmUsIGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc0FyZ3ZCaW4gfSBmcm9tICcuLi8uLi9idWlsZC9saWIvdXRpbHMvcHJvY2Vzcy1hcmd2LmpzJ1xuaW1wb3J0IHN0cmluZ1dpZHRoIGZyb20gJ3N0cmluZy13aWR0aCc7XG5pbXBvcnQgeTE4biBmcm9tICd5MThuJ1xuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ25vZGU6bW9kdWxlJztcbmltcG9ydCBnZXRDYWxsZXJGaWxlIGZyb20gJ2dldC1jYWxsZXItZmlsZSc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnbm9kZTpmcydcblxuY29uc3QgX19kaXJuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgbWFpbkZpbGVuYW1lID0gX19kaXJuYW1lLnN1YnN0cmluZygwLCBfX2Rpcm5hbWUubGFzdEluZGV4T2YoJ25vZGVfbW9kdWxlcycpKTtcbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzZXJ0OiB7XG4gICAgbm90U3RyaWN0RXF1YWwsXG4gICAgc3RyaWN0RXF1YWxcbiAgfSxcbiAgY2xpdWksXG4gIGZpbmRVcDogZXNjYWxhZGUsXG4gIGdldEVudjogKGtleSkgPT4ge1xuICAgIHJldHVybiBwcm9jZXNzLmVudltrZXldXG4gIH0sXG4gIGluc3BlY3QsXG4gIGdldFByb2Nlc3NBcmd2QmluLFxuICBtYWluRmlsZW5hbWU6IG1haW5GaWxlbmFtZSB8fCBwcm9jZXNzLmN3ZCgpLFxuICBQYXJzZXIsXG4gIHBhdGg6IHtcbiAgICBiYXNlbmFtZSxcbiAgICBkaXJuYW1lLFxuICAgIGV4dG5hbWUsXG4gICAgcmVsYXRpdmUsXG4gICAgcmVzb2x2ZSxcbiAgICBqb2luXG4gIH0sXG4gIHByb2Nlc3M6IHtcbiAgICBhcmd2OiAoKSA9PiBwcm9jZXNzLmFyZ3YsXG4gICAgY3dkOiBwcm9jZXNzLmN3ZCxcbiAgICBlbWl0V2FybmluZzogKHdhcm5pbmcsIHR5cGUpID0+IHByb2Nlc3MuZW1pdFdhcm5pbmcod2FybmluZywgdHlwZSksXG4gICAgZXhlY1BhdGg6ICgpID0+IHByb2Nlc3MuZXhlY1BhdGgsXG4gICAgZXhpdDogKGNvZGUpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuL25vLXByb2Nlc3MtZXhpdFxuICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgIH0sXG4gICAgbmV4dFRpY2s6IHByb2Nlc3MubmV4dFRpY2ssXG4gICAgc3RkQ29sdW1uczogdHlwZW9mIHByb2Nlc3Muc3Rkb3V0LmNvbHVtbnMgIT09ICd1bmRlZmluZWQnID8gcHJvY2Vzcy5zdGRvdXQuY29sdW1ucyA6IG51bGxcbiAgfSxcbiAgcmVhZEZpbGVTeW5jLFxuICByZWFkZGlyU3luYyxcbiAgcmVxdWlyZSxcbiAgZ2V0Q2FsbGVyRmlsZTogKCkgPT4ge1xuICAgIGNvbnN0IGNhbGxlckZpbGUgPSBnZXRDYWxsZXJGaWxlKDMpO1xuICAgIHJldHVybiBjYWxsZXJGaWxlLm1hdGNoKC9eZmlsZTpcXC9cXC8vKSA/IGZpbGVVUkxUb1BhdGgoY2FsbGVyRmlsZSkgOiBjYWxsZXJGaWxlO1xuICB9LFxuICBzdHJpbmdXaWR0aCxcbiAgeTE4bjogeTE4bih7XG4gICAgZGlyZWN0b3J5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uL2xvY2FsZXMnKSxcbiAgICB1cGRhdGVGaWxlczogZmFsc2VcbiAgfSlcbn1cbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBhbGlnbiA9IHtcbiAgICByaWdodDogYWxpZ25SaWdodCxcbiAgICBjZW50ZXI6IGFsaWduQ2VudGVyXG59O1xuY29uc3QgdG9wID0gMDtcbmNvbnN0IHJpZ2h0ID0gMTtcbmNvbnN0IGJvdHRvbSA9IDI7XG5jb25zdCBsZWZ0ID0gMztcbmV4cG9ydCBjbGFzcyBVSSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRzLndpZHRoO1xuICAgICAgICB0aGlzLndyYXAgPSAoX2EgPSBvcHRzLndyYXApICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRydWU7XG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgIH1cbiAgICBzcGFuKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMuZGl2KC4uLmFyZ3MpO1xuICAgICAgICBjb2xzLnNwYW4gPSB0cnVlO1xuICAgIH1cbiAgICByZXNldE91dHB1dCgpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgfVxuICAgIGRpdiguLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kaXYoJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndyYXAgJiYgdGhpcy5zaG91bGRBcHBseUxheW91dERTTCguLi5hcmdzKSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGx5TGF5b3V0RFNMKGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbHMgPSBhcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sRnJvbVN0cmluZyhhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFyZztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm93cy5wdXNoKGNvbHMpO1xuICAgICAgICByZXR1cm4gY29scztcbiAgICB9XG4gICAgc2hvdWxkQXBwbHlMYXlvdXREU0woLi4uYXJncykge1xuICAgICAgICByZXR1cm4gYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAvW1xcdFxcbl0vLnRlc3QoYXJnc1swXSk7XG4gICAgfVxuICAgIGFwcGx5TGF5b3V0RFNMKHN0cikge1xuICAgICAgICBjb25zdCByb3dzID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAocm93ID0+IHJvdy5zcGxpdCgnXFx0JykpO1xuICAgICAgICBsZXQgbGVmdENvbHVtbldpZHRoID0gMDtcbiAgICAgICAgLy8gc2ltcGxlIGhldXJpc3RpYyBmb3IgbGF5b3V0LCBtYWtlIHN1cmUgdGhlXG4gICAgICAgIC8vIHNlY29uZCBjb2x1bW4gbGluZXMgdXAgYWxvbmcgdGhlIGxlZnQtaGFuZC5cbiAgICAgICAgLy8gZG9uJ3QgYWxsb3cgdGhlIGZpcnN0IGNvbHVtbiB0byB0YWtlIHVwIG1vcmVcbiAgICAgICAgLy8gdGhhbiA1MCUgb2YgdGhlIHNjcmVlbi5cbiAgICAgICAgcm93cy5mb3JFYWNoKGNvbHVtbnMgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbHVtbnMubGVuZ3RoID4gMSAmJiBtaXhpbi5zdHJpbmdXaWR0aChjb2x1bW5zWzBdKSA+IGxlZnRDb2x1bW5XaWR0aCkge1xuICAgICAgICAgICAgICAgIGxlZnRDb2x1bW5XaWR0aCA9IE1hdGgubWluKE1hdGguZmxvb3IodGhpcy53aWR0aCAqIDAuNSksIG1peGluLnN0cmluZ1dpZHRoKGNvbHVtbnNbMF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGdlbmVyYXRlIGEgdGFibGU6XG4gICAgICAgIC8vICByZXBsYWNpbmcgJyAnIHdpdGggcGFkZGluZyBjYWxjdWxhdGlvbnMuXG4gICAgICAgIC8vICB1c2luZyB0aGUgYWxnb3JpdGhtaWNhbGx5IGdlbmVyYXRlZCB3aWR0aC5cbiAgICAgICAgcm93cy5mb3JFYWNoKGNvbHVtbnMgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXYoLi4uY29sdW1ucy5tYXAoKHIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy5tZWFzdXJlUGFkZGluZyhyKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IChpID09PSAwICYmIGNvbHVtbnMubGVuZ3RoID4gMSkgPyBsZWZ0Q29sdW1uV2lkdGggOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93c1t0aGlzLnJvd3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIGNvbEZyb21TdHJpbmcodGV4dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoaXMubWVhc3VyZVBhZGRpbmcodGV4dClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbWVhc3VyZVBhZGRpbmcoc3RyKSB7XG4gICAgICAgIC8vIG1lYXN1cmUgcGFkZGluZyB3aXRob3V0IGFuc2kgZXNjYXBlIGNvZGVzXG4gICAgICAgIGNvbnN0IG5vQW5zaSA9IG1peGluLnN0cmlwQW5zaShzdHIpO1xuICAgICAgICByZXR1cm4gWzAsIG5vQW5zaS5tYXRjaCgvXFxzKiQvKVswXS5sZW5ndGgsIDAsIG5vQW5zaS5tYXRjaCgvXlxccyovKVswXS5sZW5ndGhdO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHRoaXMucm93VG9TdHJpbmcocm93LCBsaW5lcyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkb24ndCBkaXNwbGF5IGFueSBsaW5lcyB3aXRoIHRoZVxuICAgICAgICAvLyBoaWRkZW4gZmxhZyBzZXQuXG4gICAgICAgIHJldHVybiBsaW5lc1xuICAgICAgICAgICAgLmZpbHRlcihsaW5lID0+ICFsaW5lLmhpZGRlbilcbiAgICAgICAgICAgIC5tYXAobGluZSA9PiBsaW5lLnRleHQpXG4gICAgICAgICAgICAuam9pbignXFxuJyk7XG4gICAgfVxuICAgIHJvd1RvU3RyaW5nKHJvdywgbGluZXMpIHtcbiAgICAgICAgdGhpcy5yYXN0ZXJpemUocm93KS5mb3JFYWNoKChycm93LCByKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgICAgICBycm93LmZvckVhY2goKGNvbCwgYykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHJvd1tjXTsgLy8gdGhlIHdpZHRoIHdpdGggcGFkZGluZy5cbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwV2lkdGggPSB0aGlzLm5lZ2F0ZVBhZGRpbmcocm93W2NdKTsgLy8gdGhlIHdpZHRoIHdpdGhvdXQgcGFkZGluZy5cbiAgICAgICAgICAgICAgICBsZXQgdHMgPSBjb2w7IC8vIHRlbXBvcmFyeSBzdHJpbmcgdXNlZCBkdXJpbmcgYWxpZ25tZW50L3BhZGRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKHdyYXBXaWR0aCA+IG1peGluLnN0cmluZ1dpZHRoKGNvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHMgKz0gJyAnLnJlcGVhdCh3cmFwV2lkdGggLSBtaXhpbi5zdHJpbmdXaWR0aChjb2wpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWxpZ24gdGhlIHN0cmluZyB3aXRoaW4gaXRzIGNvbHVtbi5cbiAgICAgICAgICAgICAgICBpZiAocm93W2NdLmFsaWduICYmIHJvd1tjXS5hbGlnbiAhPT0gJ2xlZnQnICYmIHRoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbiA9IGFsaWduW3Jvd1tjXS5hbGlnbl07XG4gICAgICAgICAgICAgICAgICAgIHRzID0gZm4odHMsIHdyYXBXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXhpbi5zdHJpbmdXaWR0aCh0cykgPCB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzICs9ICcgJy5yZXBlYXQoKHdpZHRoIHx8IDApIC0gbWl4aW4uc3RyaW5nV2lkdGgodHMpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYXBwbHkgYm9yZGVyIGFuZCBwYWRkaW5nIHRvIHN0cmluZy5cbiAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gcm93W2NdLnBhZGRpbmcgfHwgWzAsIDAsIDAsIDBdO1xuICAgICAgICAgICAgICAgIGlmIChwYWRkaW5nW2xlZnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnICcucmVwZWF0KHBhZGRpbmdbbGVmdF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHIgKz0gYWRkQm9yZGVyKHJvd1tjXSwgdHMsICd8ICcpO1xuICAgICAgICAgICAgICAgIHN0ciArPSB0cztcbiAgICAgICAgICAgICAgICBzdHIgKz0gYWRkQm9yZGVyKHJvd1tjXSwgdHMsICcgfCcpO1xuICAgICAgICAgICAgICAgIGlmIChwYWRkaW5nW3JpZ2h0XSkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJyAnLnJlcGVhdChwYWRkaW5nW3JpZ2h0XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHByaW9yIHJvdyBpcyBzcGFuLCB0cnkgdG8gcmVuZGVyIHRoZVxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgcm93IG9uIHRoZSBwcmlvciBsaW5lLlxuICAgICAgICAgICAgICAgIGlmIChyID09PSAwICYmIGxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gdGhpcy5yZW5kZXJJbmxpbmUoc3RyLCBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyByZW1vdmUgdHJhaWxpbmcgd2hpdGVzcGFjZS5cbiAgICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQ6IHN0ci5yZXBsYWNlKC8gKyQvLCAnJyksXG4gICAgICAgICAgICAgICAgc3Bhbjogcm93LnNwYW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgZnVsbCAnc291cmNlJyBjYW4gcmVuZGVyIGluXG4gICAgLy8gdGhlIHRhcmdldCBsaW5lLCBkbyBzby5cbiAgICByZW5kZXJJbmxpbmUoc291cmNlLCBwcmV2aW91c0xpbmUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzb3VyY2UubWF0Y2goL14gKi8pO1xuICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZSA9IG1hdGNoID8gbWF0Y2hbMF0ubGVuZ3RoIDogMDtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcHJldmlvdXNMaW5lLnRleHQ7XG4gICAgICAgIGNvbnN0IHRhcmdldFRleHRXaWR0aCA9IG1peGluLnN0cmluZ1dpZHRoKHRhcmdldC50cmltUmlnaHQoKSk7XG4gICAgICAgIGlmICghcHJldmlvdXNMaW5lLnNwYW4pIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UncmUgbm90IGFwcGx5aW5nIHdyYXBwaW5nIGxvZ2ljLFxuICAgICAgICAvLyBqdXN0IGFsd2F5cyBhcHBlbmQgdG8gdGhlIHNwYW4uXG4gICAgICAgIGlmICghdGhpcy53cmFwKSB7XG4gICAgICAgICAgICBwcmV2aW91c0xpbmUuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgKyBzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlIDwgdGFyZ2V0VGV4dFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzTGluZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGFyZ2V0LnRyaW1SaWdodCgpICsgJyAnLnJlcGVhdChsZWFkaW5nV2hpdGVzcGFjZSAtIHRhcmdldFRleHRXaWR0aCkgKyBzb3VyY2UudHJpbUxlZnQoKTtcbiAgICB9XG4gICAgcmFzdGVyaXplKHJvdykge1xuICAgICAgICBjb25zdCBycm93cyA9IFtdO1xuICAgICAgICBjb25zdCB3aWR0aHMgPSB0aGlzLmNvbHVtbldpZHRocyhyb3cpO1xuICAgICAgICBsZXQgd3JhcHBlZDtcbiAgICAgICAgLy8gd29yZCB3cmFwIGFsbCBjb2x1bW5zLCBhbmQgY3JlYXRlXG4gICAgICAgIC8vIGEgZGF0YS1zdHJ1Y3R1cmUgdGhhdCBpcyBlYXN5IHRvIHJhc3Rlcml6ZS5cbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgYykgPT4ge1xuICAgICAgICAgICAgLy8gbGVhdmUgcm9vbSBmb3IgbGVmdCBhbmQgcmlnaHQgcGFkZGluZy5cbiAgICAgICAgICAgIGNvbC53aWR0aCA9IHdpZHRoc1tjXTtcbiAgICAgICAgICAgIGlmICh0aGlzLndyYXApIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkID0gbWl4aW4ud3JhcChjb2wudGV4dCwgdGhpcy5uZWdhdGVQYWRkaW5nKGNvbCksIHsgaGFyZDogdHJ1ZSB9KS5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkID0gY29sLnRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbC5ib3JkZXIpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkLnVuc2hpZnQoJy4nICsgJy0nLnJlcGVhdCh0aGlzLm5lZ2F0ZVBhZGRpbmcoY29sKSArIDIpICsgJy4nKTtcbiAgICAgICAgICAgICAgICB3cmFwcGVkLnB1c2goXCInXCIgKyAnLScucmVwZWF0KHRoaXMubmVnYXRlUGFkZGluZyhjb2wpICsgMikgKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZGQgdG9wIGFuZCBib3R0b20gcGFkZGluZy5cbiAgICAgICAgICAgIGlmIChjb2wucGFkZGluZykge1xuICAgICAgICAgICAgICAgIHdyYXBwZWQudW5zaGlmdCguLi5uZXcgQXJyYXkoY29sLnBhZGRpbmdbdG9wXSB8fCAwKS5maWxsKCcnKSk7XG4gICAgICAgICAgICAgICAgd3JhcHBlZC5wdXNoKC4uLm5ldyBBcnJheShjb2wucGFkZGluZ1tib3R0b21dIHx8IDApLmZpbGwoJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZWQuZm9yRWFjaCgoc3RyLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFycm93c1tyXSkge1xuICAgICAgICAgICAgICAgICAgICBycm93cy5wdXNoKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcnJvdyA9IHJyb3dzW3JdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChycm93W2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJyb3cucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnJvdy5wdXNoKHN0cik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBycm93cztcbiAgICB9XG4gICAgbmVnYXRlUGFkZGluZyhjb2wpIHtcbiAgICAgICAgbGV0IHdyYXBXaWR0aCA9IGNvbC53aWR0aCB8fCAwO1xuICAgICAgICBpZiAoY29sLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIHdyYXBXaWR0aCAtPSAoY29sLnBhZGRpbmdbbGVmdF0gfHwgMCkgKyAoY29sLnBhZGRpbmdbcmlnaHRdIHx8IDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2wuYm9yZGVyKSB7XG4gICAgICAgICAgICB3cmFwV2lkdGggLT0gNDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3JhcFdpZHRoO1xuICAgIH1cbiAgICBjb2x1bW5XaWR0aHMocm93KSB7XG4gICAgICAgIGlmICghdGhpcy53cmFwKSB7XG4gICAgICAgICAgICByZXR1cm4gcm93Lm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2wud2lkdGggfHwgbWl4aW4uc3RyaW5nV2lkdGgoY29sLnRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVuc2V0ID0gcm93Lmxlbmd0aDtcbiAgICAgICAgbGV0IHJlbWFpbmluZ1dpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgLy8gY29sdW1uIHdpZHRocyBjYW4gYmUgc2V0IGluIGNvbmZpZy5cbiAgICAgICAgY29uc3Qgd2lkdGhzID0gcm93Lm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbC53aWR0aCkge1xuICAgICAgICAgICAgICAgIHVuc2V0LS07XG4gICAgICAgICAgICAgICAgcmVtYWluaW5nV2lkdGggLT0gY29sLndpZHRoO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2wud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gYW55IHVuc2V0IHdpZHRocyBzaG91bGQgYmUgY2FsY3VsYXRlZC5cbiAgICAgICAgY29uc3QgdW5zZXRXaWR0aCA9IHVuc2V0ID8gTWF0aC5mbG9vcihyZW1haW5pbmdXaWR0aCAvIHVuc2V0KSA6IDA7XG4gICAgICAgIHJldHVybiB3aWR0aHMubWFwKCh3LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAodyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHVuc2V0V2lkdGgsIF9taW5XaWR0aChyb3dbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRCb3JkZXIoY29sLCB0cywgc3R5bGUpIHtcbiAgICBpZiAoY29sLmJvcmRlcikge1xuICAgICAgICBpZiAoL1suJ10tK1suJ10vLnRlc3QodHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRzLnRyaW0oKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyAgJztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuLy8gY2FsY3VsYXRlcyB0aGUgbWluaW11bSB3aWR0aCBvZlxuLy8gYSBjb2x1bW4sIGJhc2VkIG9uIHBhZGRpbmcgcHJlZmVyZW5jZXMuXG5mdW5jdGlvbiBfbWluV2lkdGgoY29sKSB7XG4gICAgY29uc3QgcGFkZGluZyA9IGNvbC5wYWRkaW5nIHx8IFtdO1xuICAgIGNvbnN0IG1pbldpZHRoID0gMSArIChwYWRkaW5nW2xlZnRdIHx8IDApICsgKHBhZGRpbmdbcmlnaHRdIHx8IDApO1xuICAgIGlmIChjb2wuYm9yZGVyKSB7XG4gICAgICAgIHJldHVybiBtaW5XaWR0aCArIDQ7XG4gICAgfVxuICAgIHJldHVybiBtaW5XaWR0aDtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1dpZHRoKCkge1xuICAgIC8qIGM4IGlnbm9yZSBuZXh0IDU6IGRlcGVuZHMgb24gdGVybWluYWwgKi9cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3Muc3Rkb3V0ICYmIHByb2Nlc3Muc3Rkb3V0LmNvbHVtbnMpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3Muc3Rkb3V0LmNvbHVtbnM7XG4gICAgfVxuICAgIHJldHVybiA4MDtcbn1cbmZ1bmN0aW9uIGFsaWduUmlnaHQoc3RyLCB3aWR0aCkge1xuICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgY29uc3Qgc3RyV2lkdGggPSBtaXhpbi5zdHJpbmdXaWR0aChzdHIpO1xuICAgIGlmIChzdHJXaWR0aCA8IHdpZHRoKSB7XG4gICAgICAgIHJldHVybiAnICcucmVwZWF0KHdpZHRoIC0gc3RyV2lkdGgpICsgc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gYWxpZ25DZW50ZXIoc3RyLCB3aWR0aCkge1xuICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgY29uc3Qgc3RyV2lkdGggPSBtaXhpbi5zdHJpbmdXaWR0aChzdHIpO1xuICAgIC8qIGM4IGlnbm9yZSBuZXh0IDMgKi9cbiAgICBpZiAoc3RyV2lkdGggPj0gd2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuICcgJy5yZXBlYXQoKHdpZHRoIC0gc3RyV2lkdGgpID4+IDEpICsgc3RyO1xufVxubGV0IG1peGluO1xuZXhwb3J0IGZ1bmN0aW9uIGNsaXVpKG9wdHMsIF9taXhpbikge1xuICAgIG1peGluID0gX21peGluO1xuICAgIHJldHVybiBuZXcgVUkoe1xuICAgICAgICB3aWR0aDogKG9wdHMgPT09IG51bGwgfHwgb3B0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0cy53aWR0aCkgfHwgZ2V0V2luZG93V2lkdGgoKSxcbiAgICAgICAgd3JhcDogb3B0cyA9PT0gbnVsbCB8fCBvcHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRzLndyYXBcbiAgICB9KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbnNpUmVnZXgoe29ubHlGaXJzdCA9IGZhbHNlfSA9IHt9KSB7XG5cdC8vIFZhbGlkIHN0cmluZyB0ZXJtaW5hdG9yIHNlcXVlbmNlcyBhcmUgQkVMLCBFU0NcXCwgYW5kIDB4OWNcblx0Y29uc3QgU1QgPSAnKD86XFxcXHUwMDA3fFxcXFx1MDAxQlxcXFx1MDA1Q3xcXFxcdTAwOUMpJztcblx0Y29uc3QgcGF0dGVybiA9IFtcblx0XHRgW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSspKnxbYS16QS1aXFxcXGRdKyg/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/JHtTVH0pYCxcblx0XHQnKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1ucS11eT0+PH5dKSknLFxuXHRdLmpvaW4oJ3wnKTtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBvbmx5Rmlyc3QgPyB1bmRlZmluZWQgOiAnZycpO1xufVxuIiwgImltcG9ydCBhbnNpUmVnZXggZnJvbSAnYW5zaS1yZWdleCc7XG5cbmNvbnN0IHJlZ2V4ID0gYW5zaVJlZ2V4KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmlwQW5zaShzdHJpbmcpIHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBcXGBzdHJpbmdcXGAsIGdvdCBcXGAke3R5cGVvZiBzdHJpbmd9XFxgYCk7XG5cdH1cblxuXHQvLyBFdmVuIHRob3VnaCB0aGUgcmVnZXggaXMgZ2xvYmFsLCB3ZSBkb24ndCBuZWVkIHRvIHJlc2V0IHRoZSBgLmxhc3RJbmRleGBcblx0Ly8gYmVjYXVzZSB1bmxpa2UgYC5leGVjKClgIGFuZCBgLnRlc3QoKWAsIGAucmVwbGFjZSgpYCBkb2VzIGl0IGF1dG9tYXRpY2FsbHlcblx0Ly8gYW5kIGRvaW5nIGl0IG1hbnVhbGx5IGhhcyBhIHBlcmZvcm1hbmNlIHBlbmFsdHkuXG5cdHJldHVybiBzdHJpbmcucmVwbGFjZShyZWdleCwgJycpO1xufVxuIiwgIi8vIEdlbmVyYXRlZCBjb2RlLlxuXG5mdW5jdGlvbiBpc0FtYmlndW91cyh4KSB7XG5cdHJldHVybiB4ID09PSAweEExXG5cdFx0fHwgeCA9PT0gMHhBNFxuXHRcdHx8IHggPT09IDB4QTdcblx0XHR8fCB4ID09PSAweEE4XG5cdFx0fHwgeCA9PT0gMHhBQVxuXHRcdHx8IHggPT09IDB4QURcblx0XHR8fCB4ID09PSAweEFFXG5cdFx0fHwgeCA+PSAweEIwICYmIHggPD0gMHhCNFxuXHRcdHx8IHggPj0gMHhCNiAmJiB4IDw9IDB4QkFcblx0XHR8fCB4ID49IDB4QkMgJiYgeCA8PSAweEJGXG5cdFx0fHwgeCA9PT0gMHhDNlxuXHRcdHx8IHggPT09IDB4RDBcblx0XHR8fCB4ID09PSAweEQ3XG5cdFx0fHwgeCA9PT0gMHhEOFxuXHRcdHx8IHggPj0gMHhERSAmJiB4IDw9IDB4RTFcblx0XHR8fCB4ID09PSAweEU2XG5cdFx0fHwgeCA+PSAweEU4ICYmIHggPD0gMHhFQVxuXHRcdHx8IHggPT09IDB4RUNcblx0XHR8fCB4ID09PSAweEVEXG5cdFx0fHwgeCA9PT0gMHhGMFxuXHRcdHx8IHggPT09IDB4RjJcblx0XHR8fCB4ID09PSAweEYzXG5cdFx0fHwgeCA+PSAweEY3ICYmIHggPD0gMHhGQVxuXHRcdHx8IHggPT09IDB4RkNcblx0XHR8fCB4ID09PSAweEZFXG5cdFx0fHwgeCA9PT0gMHgxMDFcblx0XHR8fCB4ID09PSAweDExMVxuXHRcdHx8IHggPT09IDB4MTEzXG5cdFx0fHwgeCA9PT0gMHgxMUJcblx0XHR8fCB4ID09PSAweDEyNlxuXHRcdHx8IHggPT09IDB4MTI3XG5cdFx0fHwgeCA9PT0gMHgxMkJcblx0XHR8fCB4ID49IDB4MTMxICYmIHggPD0gMHgxMzNcblx0XHR8fCB4ID09PSAweDEzOFxuXHRcdHx8IHggPj0gMHgxM0YgJiYgeCA8PSAweDE0MlxuXHRcdHx8IHggPT09IDB4MTQ0XG5cdFx0fHwgeCA+PSAweDE0OCAmJiB4IDw9IDB4MTRCXG5cdFx0fHwgeCA9PT0gMHgxNERcblx0XHR8fCB4ID09PSAweDE1MlxuXHRcdHx8IHggPT09IDB4MTUzXG5cdFx0fHwgeCA9PT0gMHgxNjZcblx0XHR8fCB4ID09PSAweDE2N1xuXHRcdHx8IHggPT09IDB4MTZCXG5cdFx0fHwgeCA9PT0gMHgxQ0Vcblx0XHR8fCB4ID09PSAweDFEMFxuXHRcdHx8IHggPT09IDB4MUQyXG5cdFx0fHwgeCA9PT0gMHgxRDRcblx0XHR8fCB4ID09PSAweDFENlxuXHRcdHx8IHggPT09IDB4MUQ4XG5cdFx0fHwgeCA9PT0gMHgxREFcblx0XHR8fCB4ID09PSAweDFEQ1xuXHRcdHx8IHggPT09IDB4MjUxXG5cdFx0fHwgeCA9PT0gMHgyNjFcblx0XHR8fCB4ID09PSAweDJDNFxuXHRcdHx8IHggPT09IDB4MkM3XG5cdFx0fHwgeCA+PSAweDJDOSAmJiB4IDw9IDB4MkNCXG5cdFx0fHwgeCA9PT0gMHgyQ0Rcblx0XHR8fCB4ID09PSAweDJEMFxuXHRcdHx8IHggPj0gMHgyRDggJiYgeCA8PSAweDJEQlxuXHRcdHx8IHggPT09IDB4MkREXG5cdFx0fHwgeCA9PT0gMHgyREZcblx0XHR8fCB4ID49IDB4MzAwICYmIHggPD0gMHgzNkZcblx0XHR8fCB4ID49IDB4MzkxICYmIHggPD0gMHgzQTFcblx0XHR8fCB4ID49IDB4M0EzICYmIHggPD0gMHgzQTlcblx0XHR8fCB4ID49IDB4M0IxICYmIHggPD0gMHgzQzFcblx0XHR8fCB4ID49IDB4M0MzICYmIHggPD0gMHgzQzlcblx0XHR8fCB4ID09PSAweDQwMVxuXHRcdHx8IHggPj0gMHg0MTAgJiYgeCA8PSAweDQ0RlxuXHRcdHx8IHggPT09IDB4NDUxXG5cdFx0fHwgeCA9PT0gMHgyMDEwXG5cdFx0fHwgeCA+PSAweDIwMTMgJiYgeCA8PSAweDIwMTZcblx0XHR8fCB4ID09PSAweDIwMThcblx0XHR8fCB4ID09PSAweDIwMTlcblx0XHR8fCB4ID09PSAweDIwMUNcblx0XHR8fCB4ID09PSAweDIwMURcblx0XHR8fCB4ID49IDB4MjAyMCAmJiB4IDw9IDB4MjAyMlxuXHRcdHx8IHggPj0gMHgyMDI0ICYmIHggPD0gMHgyMDI3XG5cdFx0fHwgeCA9PT0gMHgyMDMwXG5cdFx0fHwgeCA9PT0gMHgyMDMyXG5cdFx0fHwgeCA9PT0gMHgyMDMzXG5cdFx0fHwgeCA9PT0gMHgyMDM1XG5cdFx0fHwgeCA9PT0gMHgyMDNCXG5cdFx0fHwgeCA9PT0gMHgyMDNFXG5cdFx0fHwgeCA9PT0gMHgyMDc0XG5cdFx0fHwgeCA9PT0gMHgyMDdGXG5cdFx0fHwgeCA+PSAweDIwODEgJiYgeCA8PSAweDIwODRcblx0XHR8fCB4ID09PSAweDIwQUNcblx0XHR8fCB4ID09PSAweDIxMDNcblx0XHR8fCB4ID09PSAweDIxMDVcblx0XHR8fCB4ID09PSAweDIxMDlcblx0XHR8fCB4ID09PSAweDIxMTNcblx0XHR8fCB4ID09PSAweDIxMTZcblx0XHR8fCB4ID09PSAweDIxMjFcblx0XHR8fCB4ID09PSAweDIxMjJcblx0XHR8fCB4ID09PSAweDIxMjZcblx0XHR8fCB4ID09PSAweDIxMkJcblx0XHR8fCB4ID09PSAweDIxNTNcblx0XHR8fCB4ID09PSAweDIxNTRcblx0XHR8fCB4ID49IDB4MjE1QiAmJiB4IDw9IDB4MjE1RVxuXHRcdHx8IHggPj0gMHgyMTYwICYmIHggPD0gMHgyMTZCXG5cdFx0fHwgeCA+PSAweDIxNzAgJiYgeCA8PSAweDIxNzlcblx0XHR8fCB4ID09PSAweDIxODlcblx0XHR8fCB4ID49IDB4MjE5MCAmJiB4IDw9IDB4MjE5OVxuXHRcdHx8IHggPT09IDB4MjFCOFxuXHRcdHx8IHggPT09IDB4MjFCOVxuXHRcdHx8IHggPT09IDB4MjFEMlxuXHRcdHx8IHggPT09IDB4MjFENFxuXHRcdHx8IHggPT09IDB4MjFFN1xuXHRcdHx8IHggPT09IDB4MjIwMFxuXHRcdHx8IHggPT09IDB4MjIwMlxuXHRcdHx8IHggPT09IDB4MjIwM1xuXHRcdHx8IHggPT09IDB4MjIwN1xuXHRcdHx8IHggPT09IDB4MjIwOFxuXHRcdHx8IHggPT09IDB4MjIwQlxuXHRcdHx8IHggPT09IDB4MjIwRlxuXHRcdHx8IHggPT09IDB4MjIxMVxuXHRcdHx8IHggPT09IDB4MjIxNVxuXHRcdHx8IHggPT09IDB4MjIxQVxuXHRcdHx8IHggPj0gMHgyMjFEICYmIHggPD0gMHgyMjIwXG5cdFx0fHwgeCA9PT0gMHgyMjIzXG5cdFx0fHwgeCA9PT0gMHgyMjI1XG5cdFx0fHwgeCA+PSAweDIyMjcgJiYgeCA8PSAweDIyMkNcblx0XHR8fCB4ID09PSAweDIyMkVcblx0XHR8fCB4ID49IDB4MjIzNCAmJiB4IDw9IDB4MjIzN1xuXHRcdHx8IHggPT09IDB4MjIzQ1xuXHRcdHx8IHggPT09IDB4MjIzRFxuXHRcdHx8IHggPT09IDB4MjI0OFxuXHRcdHx8IHggPT09IDB4MjI0Q1xuXHRcdHx8IHggPT09IDB4MjI1MlxuXHRcdHx8IHggPT09IDB4MjI2MFxuXHRcdHx8IHggPT09IDB4MjI2MVxuXHRcdHx8IHggPj0gMHgyMjY0ICYmIHggPD0gMHgyMjY3XG5cdFx0fHwgeCA9PT0gMHgyMjZBXG5cdFx0fHwgeCA9PT0gMHgyMjZCXG5cdFx0fHwgeCA9PT0gMHgyMjZFXG5cdFx0fHwgeCA9PT0gMHgyMjZGXG5cdFx0fHwgeCA9PT0gMHgyMjgyXG5cdFx0fHwgeCA9PT0gMHgyMjgzXG5cdFx0fHwgeCA9PT0gMHgyMjg2XG5cdFx0fHwgeCA9PT0gMHgyMjg3XG5cdFx0fHwgeCA9PT0gMHgyMjk1XG5cdFx0fHwgeCA9PT0gMHgyMjk5XG5cdFx0fHwgeCA9PT0gMHgyMkE1XG5cdFx0fHwgeCA9PT0gMHgyMkJGXG5cdFx0fHwgeCA9PT0gMHgyMzEyXG5cdFx0fHwgeCA+PSAweDI0NjAgJiYgeCA8PSAweDI0RTlcblx0XHR8fCB4ID49IDB4MjRFQiAmJiB4IDw9IDB4MjU0QlxuXHRcdHx8IHggPj0gMHgyNTUwICYmIHggPD0gMHgyNTczXG5cdFx0fHwgeCA+PSAweDI1ODAgJiYgeCA8PSAweDI1OEZcblx0XHR8fCB4ID49IDB4MjU5MiAmJiB4IDw9IDB4MjU5NVxuXHRcdHx8IHggPT09IDB4MjVBMFxuXHRcdHx8IHggPT09IDB4MjVBMVxuXHRcdHx8IHggPj0gMHgyNUEzICYmIHggPD0gMHgyNUE5XG5cdFx0fHwgeCA9PT0gMHgyNUIyXG5cdFx0fHwgeCA9PT0gMHgyNUIzXG5cdFx0fHwgeCA9PT0gMHgyNUI2XG5cdFx0fHwgeCA9PT0gMHgyNUI3XG5cdFx0fHwgeCA9PT0gMHgyNUJDXG5cdFx0fHwgeCA9PT0gMHgyNUJEXG5cdFx0fHwgeCA9PT0gMHgyNUMwXG5cdFx0fHwgeCA9PT0gMHgyNUMxXG5cdFx0fHwgeCA+PSAweDI1QzYgJiYgeCA8PSAweDI1Qzhcblx0XHR8fCB4ID09PSAweDI1Q0Jcblx0XHR8fCB4ID49IDB4MjVDRSAmJiB4IDw9IDB4MjVEMVxuXHRcdHx8IHggPj0gMHgyNUUyICYmIHggPD0gMHgyNUU1XG5cdFx0fHwgeCA9PT0gMHgyNUVGXG5cdFx0fHwgeCA9PT0gMHgyNjA1XG5cdFx0fHwgeCA9PT0gMHgyNjA2XG5cdFx0fHwgeCA9PT0gMHgyNjA5XG5cdFx0fHwgeCA9PT0gMHgyNjBFXG5cdFx0fHwgeCA9PT0gMHgyNjBGXG5cdFx0fHwgeCA9PT0gMHgyNjFDXG5cdFx0fHwgeCA9PT0gMHgyNjFFXG5cdFx0fHwgeCA9PT0gMHgyNjQwXG5cdFx0fHwgeCA9PT0gMHgyNjQyXG5cdFx0fHwgeCA9PT0gMHgyNjYwXG5cdFx0fHwgeCA9PT0gMHgyNjYxXG5cdFx0fHwgeCA+PSAweDI2NjMgJiYgeCA8PSAweDI2NjVcblx0XHR8fCB4ID49IDB4MjY2NyAmJiB4IDw9IDB4MjY2QVxuXHRcdHx8IHggPT09IDB4MjY2Q1xuXHRcdHx8IHggPT09IDB4MjY2RFxuXHRcdHx8IHggPT09IDB4MjY2RlxuXHRcdHx8IHggPT09IDB4MjY5RVxuXHRcdHx8IHggPT09IDB4MjY5RlxuXHRcdHx8IHggPT09IDB4MjZCRlxuXHRcdHx8IHggPj0gMHgyNkM2ICYmIHggPD0gMHgyNkNEXG5cdFx0fHwgeCA+PSAweDI2Q0YgJiYgeCA8PSAweDI2RDNcblx0XHR8fCB4ID49IDB4MjZENSAmJiB4IDw9IDB4MjZFMVxuXHRcdHx8IHggPT09IDB4MjZFM1xuXHRcdHx8IHggPT09IDB4MjZFOFxuXHRcdHx8IHggPT09IDB4MjZFOVxuXHRcdHx8IHggPj0gMHgyNkVCICYmIHggPD0gMHgyNkYxXG5cdFx0fHwgeCA9PT0gMHgyNkY0XG5cdFx0fHwgeCA+PSAweDI2RjYgJiYgeCA8PSAweDI2Rjlcblx0XHR8fCB4ID09PSAweDI2RkJcblx0XHR8fCB4ID09PSAweDI2RkNcblx0XHR8fCB4ID09PSAweDI2RkVcblx0XHR8fCB4ID09PSAweDI2RkZcblx0XHR8fCB4ID09PSAweDI3M0Rcblx0XHR8fCB4ID49IDB4Mjc3NiAmJiB4IDw9IDB4Mjc3RlxuXHRcdHx8IHggPj0gMHgyQjU2ICYmIHggPD0gMHgyQjU5XG5cdFx0fHwgeCA+PSAweDMyNDggJiYgeCA8PSAweDMyNEZcblx0XHR8fCB4ID49IDB4RTAwMCAmJiB4IDw9IDB4RjhGRlxuXHRcdHx8IHggPj0gMHhGRTAwICYmIHggPD0gMHhGRTBGXG5cdFx0fHwgeCA9PT0gMHhGRkZEXG5cdFx0fHwgeCA+PSAweDFGMTAwICYmIHggPD0gMHgxRjEwQVxuXHRcdHx8IHggPj0gMHgxRjExMCAmJiB4IDw9IDB4MUYxMkRcblx0XHR8fCB4ID49IDB4MUYxMzAgJiYgeCA8PSAweDFGMTY5XG5cdFx0fHwgeCA+PSAweDFGMTcwICYmIHggPD0gMHgxRjE4RFxuXHRcdHx8IHggPT09IDB4MUYxOEZcblx0XHR8fCB4ID09PSAweDFGMTkwXG5cdFx0fHwgeCA+PSAweDFGMTlCICYmIHggPD0gMHgxRjFBQ1xuXHRcdHx8IHggPj0gMHhFMDEwMCAmJiB4IDw9IDB4RTAxRUZcblx0XHR8fCB4ID49IDB4RjAwMDAgJiYgeCA8PSAweEZGRkZEXG5cdFx0fHwgeCA+PSAweDEwMDAwMCAmJiB4IDw9IDB4MTBGRkZEO1xufVxuXG5mdW5jdGlvbiBpc0Z1bGxXaWR0aCh4KSB7XG5cdHJldHVybiB4ID09PSAweDMwMDBcblx0XHR8fCB4ID49IDB4RkYwMSAmJiB4IDw9IDB4RkY2MFxuXHRcdHx8IHggPj0gMHhGRkUwICYmIHggPD0gMHhGRkU2O1xufVxuXG5mdW5jdGlvbiBpc1dpZGUoeCkge1xuXHRyZXR1cm4geCA+PSAweDExMDAgJiYgeCA8PSAweDExNUZcblx0XHR8fCB4ID09PSAweDIzMUFcblx0XHR8fCB4ID09PSAweDIzMUJcblx0XHR8fCB4ID09PSAweDIzMjlcblx0XHR8fCB4ID09PSAweDIzMkFcblx0XHR8fCB4ID49IDB4MjNFOSAmJiB4IDw9IDB4MjNFQ1xuXHRcdHx8IHggPT09IDB4MjNGMFxuXHRcdHx8IHggPT09IDB4MjNGM1xuXHRcdHx8IHggPT09IDB4MjVGRFxuXHRcdHx8IHggPT09IDB4MjVGRVxuXHRcdHx8IHggPT09IDB4MjYxNFxuXHRcdHx8IHggPT09IDB4MjYxNVxuXHRcdHx8IHggPj0gMHgyNjMwICYmIHggPD0gMHgyNjM3XG5cdFx0fHwgeCA+PSAweDI2NDggJiYgeCA8PSAweDI2NTNcblx0XHR8fCB4ID09PSAweDI2N0Zcblx0XHR8fCB4ID49IDB4MjY4QSAmJiB4IDw9IDB4MjY4RlxuXHRcdHx8IHggPT09IDB4MjY5M1xuXHRcdHx8IHggPT09IDB4MjZBMVxuXHRcdHx8IHggPT09IDB4MjZBQVxuXHRcdHx8IHggPT09IDB4MjZBQlxuXHRcdHx8IHggPT09IDB4MjZCRFxuXHRcdHx8IHggPT09IDB4MjZCRVxuXHRcdHx8IHggPT09IDB4MjZDNFxuXHRcdHx8IHggPT09IDB4MjZDNVxuXHRcdHx8IHggPT09IDB4MjZDRVxuXHRcdHx8IHggPT09IDB4MjZENFxuXHRcdHx8IHggPT09IDB4MjZFQVxuXHRcdHx8IHggPT09IDB4MjZGMlxuXHRcdHx8IHggPT09IDB4MjZGM1xuXHRcdHx8IHggPT09IDB4MjZGNVxuXHRcdHx8IHggPT09IDB4MjZGQVxuXHRcdHx8IHggPT09IDB4MjZGRFxuXHRcdHx8IHggPT09IDB4MjcwNVxuXHRcdHx8IHggPT09IDB4MjcwQVxuXHRcdHx8IHggPT09IDB4MjcwQlxuXHRcdHx8IHggPT09IDB4MjcyOFxuXHRcdHx8IHggPT09IDB4Mjc0Q1xuXHRcdHx8IHggPT09IDB4Mjc0RVxuXHRcdHx8IHggPj0gMHgyNzUzICYmIHggPD0gMHgyNzU1XG5cdFx0fHwgeCA9PT0gMHgyNzU3XG5cdFx0fHwgeCA+PSAweDI3OTUgJiYgeCA8PSAweDI3OTdcblx0XHR8fCB4ID09PSAweDI3QjBcblx0XHR8fCB4ID09PSAweDI3QkZcblx0XHR8fCB4ID09PSAweDJCMUJcblx0XHR8fCB4ID09PSAweDJCMUNcblx0XHR8fCB4ID09PSAweDJCNTBcblx0XHR8fCB4ID09PSAweDJCNTVcblx0XHR8fCB4ID49IDB4MkU4MCAmJiB4IDw9IDB4MkU5OVxuXHRcdHx8IHggPj0gMHgyRTlCICYmIHggPD0gMHgyRUYzXG5cdFx0fHwgeCA+PSAweDJGMDAgJiYgeCA8PSAweDJGRDVcblx0XHR8fCB4ID49IDB4MkZGMCAmJiB4IDw9IDB4MkZGRlxuXHRcdHx8IHggPj0gMHgzMDAxICYmIHggPD0gMHgzMDNFXG5cdFx0fHwgeCA+PSAweDMwNDEgJiYgeCA8PSAweDMwOTZcblx0XHR8fCB4ID49IDB4MzA5OSAmJiB4IDw9IDB4MzBGRlxuXHRcdHx8IHggPj0gMHgzMTA1ICYmIHggPD0gMHgzMTJGXG5cdFx0fHwgeCA+PSAweDMxMzEgJiYgeCA8PSAweDMxOEVcblx0XHR8fCB4ID49IDB4MzE5MCAmJiB4IDw9IDB4MzFFNVxuXHRcdHx8IHggPj0gMHgzMUVGICYmIHggPD0gMHgzMjFFXG5cdFx0fHwgeCA+PSAweDMyMjAgJiYgeCA8PSAweDMyNDdcblx0XHR8fCB4ID49IDB4MzI1MCAmJiB4IDw9IDB4QTQ4Q1xuXHRcdHx8IHggPj0gMHhBNDkwICYmIHggPD0gMHhBNEM2XG5cdFx0fHwgeCA+PSAweEE5NjAgJiYgeCA8PSAweEE5N0Ncblx0XHR8fCB4ID49IDB4QUMwMCAmJiB4IDw9IDB4RDdBM1xuXHRcdHx8IHggPj0gMHhGOTAwICYmIHggPD0gMHhGQUZGXG5cdFx0fHwgeCA+PSAweEZFMTAgJiYgeCA8PSAweEZFMTlcblx0XHR8fCB4ID49IDB4RkUzMCAmJiB4IDw9IDB4RkU1MlxuXHRcdHx8IHggPj0gMHhGRTU0ICYmIHggPD0gMHhGRTY2XG5cdFx0fHwgeCA+PSAweEZFNjggJiYgeCA8PSAweEZFNkJcblx0XHR8fCB4ID49IDB4MTZGRTAgJiYgeCA8PSAweDE2RkU0XG5cdFx0fHwgeCA9PT0gMHgxNkZGMFxuXHRcdHx8IHggPT09IDB4MTZGRjFcblx0XHR8fCB4ID49IDB4MTcwMDAgJiYgeCA8PSAweDE4N0Y3XG5cdFx0fHwgeCA+PSAweDE4ODAwICYmIHggPD0gMHgxOENENVxuXHRcdHx8IHggPj0gMHgxOENGRiAmJiB4IDw9IDB4MThEMDhcblx0XHR8fCB4ID49IDB4MUFGRjAgJiYgeCA8PSAweDFBRkYzXG5cdFx0fHwgeCA+PSAweDFBRkY1ICYmIHggPD0gMHgxQUZGQlxuXHRcdHx8IHggPT09IDB4MUFGRkRcblx0XHR8fCB4ID09PSAweDFBRkZFXG5cdFx0fHwgeCA+PSAweDFCMDAwICYmIHggPD0gMHgxQjEyMlxuXHRcdHx8IHggPT09IDB4MUIxMzJcblx0XHR8fCB4ID49IDB4MUIxNTAgJiYgeCA8PSAweDFCMTUyXG5cdFx0fHwgeCA9PT0gMHgxQjE1NVxuXHRcdHx8IHggPj0gMHgxQjE2NCAmJiB4IDw9IDB4MUIxNjdcblx0XHR8fCB4ID49IDB4MUIxNzAgJiYgeCA8PSAweDFCMkZCXG5cdFx0fHwgeCA+PSAweDFEMzAwICYmIHggPD0gMHgxRDM1NlxuXHRcdHx8IHggPj0gMHgxRDM2MCAmJiB4IDw9IDB4MUQzNzZcblx0XHR8fCB4ID09PSAweDFGMDA0XG5cdFx0fHwgeCA9PT0gMHgxRjBDRlxuXHRcdHx8IHggPT09IDB4MUYxOEVcblx0XHR8fCB4ID49IDB4MUYxOTEgJiYgeCA8PSAweDFGMTlBXG5cdFx0fHwgeCA+PSAweDFGMjAwICYmIHggPD0gMHgxRjIwMlxuXHRcdHx8IHggPj0gMHgxRjIxMCAmJiB4IDw9IDB4MUYyM0Jcblx0XHR8fCB4ID49IDB4MUYyNDAgJiYgeCA8PSAweDFGMjQ4XG5cdFx0fHwgeCA9PT0gMHgxRjI1MFxuXHRcdHx8IHggPT09IDB4MUYyNTFcblx0XHR8fCB4ID49IDB4MUYyNjAgJiYgeCA8PSAweDFGMjY1XG5cdFx0fHwgeCA+PSAweDFGMzAwICYmIHggPD0gMHgxRjMyMFxuXHRcdHx8IHggPj0gMHgxRjMyRCAmJiB4IDw9IDB4MUYzMzVcblx0XHR8fCB4ID49IDB4MUYzMzcgJiYgeCA8PSAweDFGMzdDXG5cdFx0fHwgeCA+PSAweDFGMzdFICYmIHggPD0gMHgxRjM5M1xuXHRcdHx8IHggPj0gMHgxRjNBMCAmJiB4IDw9IDB4MUYzQ0Fcblx0XHR8fCB4ID49IDB4MUYzQ0YgJiYgeCA8PSAweDFGM0QzXG5cdFx0fHwgeCA+PSAweDFGM0UwICYmIHggPD0gMHgxRjNGMFxuXHRcdHx8IHggPT09IDB4MUYzRjRcblx0XHR8fCB4ID49IDB4MUYzRjggJiYgeCA8PSAweDFGNDNFXG5cdFx0fHwgeCA9PT0gMHgxRjQ0MFxuXHRcdHx8IHggPj0gMHgxRjQ0MiAmJiB4IDw9IDB4MUY0RkNcblx0XHR8fCB4ID49IDB4MUY0RkYgJiYgeCA8PSAweDFGNTNEXG5cdFx0fHwgeCA+PSAweDFGNTRCICYmIHggPD0gMHgxRjU0RVxuXHRcdHx8IHggPj0gMHgxRjU1MCAmJiB4IDw9IDB4MUY1Njdcblx0XHR8fCB4ID09PSAweDFGNTdBXG5cdFx0fHwgeCA9PT0gMHgxRjU5NVxuXHRcdHx8IHggPT09IDB4MUY1OTZcblx0XHR8fCB4ID09PSAweDFGNUE0XG5cdFx0fHwgeCA+PSAweDFGNUZCICYmIHggPD0gMHgxRjY0RlxuXHRcdHx8IHggPj0gMHgxRjY4MCAmJiB4IDw9IDB4MUY2QzVcblx0XHR8fCB4ID09PSAweDFGNkNDXG5cdFx0fHwgeCA+PSAweDFGNkQwICYmIHggPD0gMHgxRjZEMlxuXHRcdHx8IHggPj0gMHgxRjZENSAmJiB4IDw9IDB4MUY2RDdcblx0XHR8fCB4ID49IDB4MUY2REMgJiYgeCA8PSAweDFGNkRGXG5cdFx0fHwgeCA9PT0gMHgxRjZFQlxuXHRcdHx8IHggPT09IDB4MUY2RUNcblx0XHR8fCB4ID49IDB4MUY2RjQgJiYgeCA8PSAweDFGNkZDXG5cdFx0fHwgeCA+PSAweDFGN0UwICYmIHggPD0gMHgxRjdFQlxuXHRcdHx8IHggPT09IDB4MUY3RjBcblx0XHR8fCB4ID49IDB4MUY5MEMgJiYgeCA8PSAweDFGOTNBXG5cdFx0fHwgeCA+PSAweDFGOTNDICYmIHggPD0gMHgxRjk0NVxuXHRcdHx8IHggPj0gMHgxRjk0NyAmJiB4IDw9IDB4MUY5RkZcblx0XHR8fCB4ID49IDB4MUZBNzAgJiYgeCA8PSAweDFGQTdDXG5cdFx0fHwgeCA+PSAweDFGQTgwICYmIHggPD0gMHgxRkE4OVxuXHRcdHx8IHggPj0gMHgxRkE4RiAmJiB4IDw9IDB4MUZBQzZcblx0XHR8fCB4ID49IDB4MUZBQ0UgJiYgeCA8PSAweDFGQURDXG5cdFx0fHwgeCA+PSAweDFGQURGICYmIHggPD0gMHgxRkFFOVxuXHRcdHx8IHggPj0gMHgxRkFGMCAmJiB4IDw9IDB4MUZBRjhcblx0XHR8fCB4ID49IDB4MjAwMDAgJiYgeCA8PSAweDJGRkZEXG5cdFx0fHwgeCA+PSAweDMwMDAwICYmIHggPD0gMHgzRkZGRDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoeCkge1xuXHRpZiAoaXNBbWJpZ3VvdXMoeCkpIHJldHVybiAnYW1iaWd1b3VzJztcblxuXHRpZiAoaXNGdWxsV2lkdGgoeCkpIHJldHVybiAnZnVsbHdpZHRoJztcblxuXHRpZiAoXG5cdFx0eCA9PT0gMHgyMEE5XG5cdFx0fHwgeCA+PSAweEZGNjEgJiYgeCA8PSAweEZGQkVcblx0XHR8fCB4ID49IDB4RkZDMiAmJiB4IDw9IDB4RkZDN1xuXHRcdHx8IHggPj0gMHhGRkNBICYmIHggPD0gMHhGRkNGXG5cdFx0fHwgeCA+PSAweEZGRDIgJiYgeCA8PSAweEZGRDdcblx0XHR8fCB4ID49IDB4RkZEQSAmJiB4IDw9IDB4RkZEQ1xuXHRcdHx8IHggPj0gMHhGRkU4ICYmIHggPD0gMHhGRkVFXG5cdCkge1xuXHRcdHJldHVybiAnaGFsZndpZHRoJztcblx0fVxuXG5cdGlmIChcblx0XHR4ID49IDB4MjAgJiYgeCA8PSAweDdFXG5cdFx0fHwgeCA9PT0gMHhBMlxuXHRcdHx8IHggPT09IDB4QTNcblx0XHR8fCB4ID09PSAweEE1XG5cdFx0fHwgeCA9PT0gMHhBNlxuXHRcdHx8IHggPT09IDB4QUNcblx0XHR8fCB4ID09PSAweEFGXG5cdFx0fHwgeCA+PSAweDI3RTYgJiYgeCA8PSAweDI3RURcblx0XHR8fCB4ID09PSAweDI5ODVcblx0XHR8fCB4ID09PSAweDI5ODZcblx0KSB7XG5cdFx0cmV0dXJuICduYXJyb3cnO1xuXHR9XG5cblx0aWYgKGlzV2lkZSh4KSkgcmV0dXJuICd3aWRlJztcblxuXHRyZXR1cm4gJ25ldXRyYWwnO1xufVxuXG5leHBvcnQge2lzQW1iaWd1b3VzLCBpc0Z1bGxXaWR0aCwgaXNXaWRlLCBnZXRDYXRlZ29yeX07XG4iLCAiaW1wb3J0IHtnZXRDYXRlZ29yeSwgaXNBbWJpZ3VvdXMsIGlzRnVsbFdpZHRoLCBpc1dpZGV9IGZyb20gJy4vbG9va3VwLmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUoY29kZVBvaW50KSB7XG5cdGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIoY29kZVBvaW50KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgY29kZSBwb2ludCwgZ290IFxcYCR7dHlwZW9mIGNvZGVQb2ludH1cXGAuYCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhc3RBc2lhbldpZHRoVHlwZShjb2RlUG9pbnQpIHtcblx0dmFsaWRhdGUoY29kZVBvaW50KTtcblxuXHRyZXR1cm4gZ2V0Q2F0ZWdvcnkoY29kZVBvaW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhc3RBc2lhbldpZHRoKGNvZGVQb2ludCwge2FtYmlndW91c0FzV2lkZSA9IGZhbHNlfSA9IHt9KSB7XG5cdHZhbGlkYXRlKGNvZGVQb2ludCk7XG5cblx0aWYgKFxuXHRcdGlzRnVsbFdpZHRoKGNvZGVQb2ludClcblx0XHR8fCBpc1dpZGUoY29kZVBvaW50KVxuXHRcdHx8IChhbWJpZ3VvdXNBc1dpZGUgJiYgaXNBbWJpZ3VvdXMoY29kZVBvaW50KSlcblx0KSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRyZXR1cm4gMTtcbn1cblxuLy8gRm9yIFByZXR0aWVyLiBUaGlzIGRvZXNuJ3QgY291bnQgXCJhbWJpZ3VvdXNcIiBjaGFyYWN0ZXJzIG9yIGNoZWNrIGZvciB2YWxpZCBpbnB1dC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZ2V0LWVhc3QtYXNpYW4td2lkdGgvcHVsbC82XG5leHBvcnQgY29uc3QgX2lzTmFycm93V2lkdGggPSBjb2RlUG9pbnQgPT4gIShpc0Z1bGxXaWR0aChjb2RlUG9pbnQpIHx8IGlzV2lkZShjb2RlUG9pbnQpKTtcbiIsICJpbXBvcnQgc3RyaXBBbnNpIGZyb20gJ3N0cmlwLWFuc2knO1xuaW1wb3J0IHtlYXN0QXNpYW5XaWR0aH0gZnJvbSAnZ2V0LWVhc3QtYXNpYW4td2lkdGgnO1xuaW1wb3J0IGVtb2ppUmVnZXggZnJvbSAnZW1vamktcmVnZXgnO1xuXG5jb25zdCBzZWdtZW50ZXIgPSBuZXcgSW50bC5TZWdtZW50ZXIoKTtcblxuY29uc3QgZGVmYXVsdElnbm9yYWJsZUNvZGVQb2ludFJlZ2V4ID0gL15cXHB7RGVmYXVsdF9JZ25vcmFibGVfQ29kZV9Qb2ludH0kL3U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmluZ1dpZHRoKHN0cmluZywgb3B0aW9ucyA9IHt9KSB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCBzdHJpbmcubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCB7XG5cdFx0YW1iaWd1b3VzSXNOYXJyb3cgPSB0cnVlLFxuXHRcdGNvdW50QW5zaUVzY2FwZUNvZGVzID0gZmFsc2UsXG5cdH0gPSBvcHRpb25zO1xuXG5cdGlmICghY291bnRBbnNpRXNjYXBlQ29kZXMpIHtcblx0XHRzdHJpbmcgPSBzdHJpcEFuc2koc3RyaW5nKTtcblx0fVxuXG5cdGlmIChzdHJpbmcubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRsZXQgd2lkdGggPSAwO1xuXHRjb25zdCBlYXN0QXNpYW5XaWR0aE9wdGlvbnMgPSB7YW1iaWd1b3VzQXNXaWRlOiAhYW1iaWd1b3VzSXNOYXJyb3d9O1xuXG5cdGZvciAoY29uc3Qge3NlZ21lbnQ6IGNoYXJhY3Rlcn0gb2Ygc2VnbWVudGVyLnNlZ21lbnQoc3RyaW5nKSkge1xuXHRcdGNvbnN0IGNvZGVQb2ludCA9IGNoYXJhY3Rlci5jb2RlUG9pbnRBdCgwKTtcblxuXHRcdC8vIElnbm9yZSBjb250cm9sIGNoYXJhY3RlcnNcblx0XHRpZiAoY29kZVBvaW50IDw9IDB4MUYgfHwgKGNvZGVQb2ludCA+PSAweDdGICYmIGNvZGVQb2ludCA8PSAweDlGKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIHplcm8td2lkdGggY2hhcmFjdGVyc1xuXHRcdGlmIChcblx0XHRcdChjb2RlUG9pbnQgPj0gMHgyMF8wQiAmJiBjb2RlUG9pbnQgPD0gMHgyMF8wRikgLy8gWmVyby13aWR0aCBzcGFjZSwgbm9uLWpvaW5lciwgam9pbmVyLCBsZWZ0LXRvLXJpZ2h0IG1hcmssIHJpZ2h0LXRvLWxlZnQgbWFya1xuXHRcdFx0fHwgY29kZVBvaW50ID09PSAweEZFX0ZGIC8vIFplcm8td2lkdGggbm8tYnJlYWsgc3BhY2Vcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBjb21iaW5pbmcgY2hhcmFjdGVyc1xuXHRcdGlmIChcblx0XHRcdChjb2RlUG9pbnQgPj0gMHgzXzAwICYmIGNvZGVQb2ludCA8PSAweDNfNkYpIC8vIENvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc1xuXHRcdFx0fHwgKGNvZGVQb2ludCA+PSAweDFBX0IwICYmIGNvZGVQb2ludCA8PSAweDFBX0ZGKSAvLyBDb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3MgZXh0ZW5kZWRcblx0XHRcdHx8IChjb2RlUG9pbnQgPj0gMHgxRF9DMCAmJiBjb2RlUG9pbnQgPD0gMHgxRF9GRikgLy8gQ29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIHN1cHBsZW1lbnRcblx0XHRcdHx8IChjb2RlUG9pbnQgPj0gMHgyMF9EMCAmJiBjb2RlUG9pbnQgPD0gMHgyMF9GRikgLy8gQ29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIGZvciBzeW1ib2xzXG5cdFx0XHR8fCAoY29kZVBvaW50ID49IDB4RkVfMjAgJiYgY29kZVBvaW50IDw9IDB4RkVfMkYpIC8vIENvbWJpbmluZyBoYWxmIG1hcmtzXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgc3Vycm9nYXRlIHBhaXJzXG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweEQ4XzAwICYmIGNvZGVQb2ludCA8PSAweERGX0ZGKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgdmFyaWF0aW9uIHNlbGVjdG9yc1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHhGRV8wMCAmJiBjb2RlUG9pbnQgPD0gMHhGRV8wRikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gVGhpcyBjb3ZlcnMgc29tZSBvZiB0aGUgYWJvdmUgY2FzZXMsIGJ1dCB3ZSBzdGlsbCBrZWVwIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG5cdFx0aWYgKGRlZmF1bHRJZ25vcmFibGVDb2RlUG9pbnRSZWdleC50ZXN0KGNoYXJhY3RlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IFVzZSBgL1xccHtSR0lfRW1vaml9L3ZgIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgMjAuXG5cdFx0aWYgKGVtb2ppUmVnZXgoKS50ZXN0KGNoYXJhY3RlcikpIHtcblx0XHRcdHdpZHRoICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR3aWR0aCArPSBlYXN0QXNpYW5XaWR0aChjb2RlUG9pbnQsIGVhc3RBc2lhbldpZHRoT3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gd2lkdGg7XG59XG4iLCAiY29uc3QgQU5TSV9CQUNLR1JPVU5EX09GRlNFVCA9IDEwO1xuXG5jb25zdCB3cmFwQW5zaTE2ID0gKG9mZnNldCA9IDApID0+IGNvZGUgPT4gYFxcdTAwMUJbJHtjb2RlICsgb2Zmc2V0fW1gO1xuXG5jb25zdCB3cmFwQW5zaTI1NiA9IChvZmZzZXQgPSAwKSA9PiBjb2RlID0+IGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzU7JHtjb2RlfW1gO1xuXG5jb25zdCB3cmFwQW5zaTE2bSA9IChvZmZzZXQgPSAwKSA9PiAocmVkLCBncmVlbiwgYmx1ZSkgPT4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07Mjske3JlZH07JHtncmVlbn07JHtibHVlfW1gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdG1vZGlmaWVyOiB7XG5cdFx0cmVzZXQ6IFswLCAwXSxcblx0XHQvLyAyMSBpc24ndCB3aWRlbHkgc3VwcG9ydGVkIGFuZCAyMiBkb2VzIHRoZSBzYW1lIHRoaW5nXG5cdFx0Ym9sZDogWzEsIDIyXSxcblx0XHRkaW06IFsyLCAyMl0sXG5cdFx0aXRhbGljOiBbMywgMjNdLFxuXHRcdHVuZGVybGluZTogWzQsIDI0XSxcblx0XHRvdmVybGluZTogWzUzLCA1NV0sXG5cdFx0aW52ZXJzZTogWzcsIDI3XSxcblx0XHRoaWRkZW46IFs4LCAyOF0sXG5cdFx0c3RyaWtldGhyb3VnaDogWzksIDI5XSxcblx0fSxcblx0Y29sb3I6IHtcblx0XHRibGFjazogWzMwLCAzOV0sXG5cdFx0cmVkOiBbMzEsIDM5XSxcblx0XHRncmVlbjogWzMyLCAzOV0sXG5cdFx0eWVsbG93OiBbMzMsIDM5XSxcblx0XHRibHVlOiBbMzQsIDM5XSxcblx0XHRtYWdlbnRhOiBbMzUsIDM5XSxcblx0XHRjeWFuOiBbMzYsIDM5XSxcblx0XHR3aGl0ZTogWzM3LCAzOV0sXG5cblx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRibGFja0JyaWdodDogWzkwLCAzOV0sXG5cdFx0Z3JheTogWzkwLCAzOV0sIC8vIEFsaWFzIG9mIGBibGFja0JyaWdodGBcblx0XHRncmV5OiBbOTAsIDM5XSwgLy8gQWxpYXMgb2YgYGJsYWNrQnJpZ2h0YFxuXHRcdHJlZEJyaWdodDogWzkxLCAzOV0sXG5cdFx0Z3JlZW5CcmlnaHQ6IFs5MiwgMzldLFxuXHRcdHllbGxvd0JyaWdodDogWzkzLCAzOV0sXG5cdFx0Ymx1ZUJyaWdodDogWzk0LCAzOV0sXG5cdFx0bWFnZW50YUJyaWdodDogWzk1LCAzOV0sXG5cdFx0Y3lhbkJyaWdodDogWzk2LCAzOV0sXG5cdFx0d2hpdGVCcmlnaHQ6IFs5NywgMzldLFxuXHR9LFxuXHRiZ0NvbG9yOiB7XG5cdFx0YmdCbGFjazogWzQwLCA0OV0sXG5cdFx0YmdSZWQ6IFs0MSwgNDldLFxuXHRcdGJnR3JlZW46IFs0MiwgNDldLFxuXHRcdGJnWWVsbG93OiBbNDMsIDQ5XSxcblx0XHRiZ0JsdWU6IFs0NCwgNDldLFxuXHRcdGJnTWFnZW50YTogWzQ1LCA0OV0sXG5cdFx0YmdDeWFuOiBbNDYsIDQ5XSxcblx0XHRiZ1doaXRlOiBbNDcsIDQ5XSxcblxuXHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdGJnQmxhY2tCcmlnaHQ6IFsxMDAsIDQ5XSxcblx0XHRiZ0dyYXk6IFsxMDAsIDQ5XSwgLy8gQWxpYXMgb2YgYGJnQmxhY2tCcmlnaHRgXG5cdFx0YmdHcmV5OiBbMTAwLCA0OV0sIC8vIEFsaWFzIG9mIGBiZ0JsYWNrQnJpZ2h0YFxuXHRcdGJnUmVkQnJpZ2h0OiBbMTAxLCA0OV0sXG5cdFx0YmdHcmVlbkJyaWdodDogWzEwMiwgNDldLFxuXHRcdGJnWWVsbG93QnJpZ2h0OiBbMTAzLCA0OV0sXG5cdFx0YmdCbHVlQnJpZ2h0OiBbMTA0LCA0OV0sXG5cdFx0YmdNYWdlbnRhQnJpZ2h0OiBbMTA1LCA0OV0sXG5cdFx0YmdDeWFuQnJpZ2h0OiBbMTA2LCA0OV0sXG5cdFx0YmdXaGl0ZUJyaWdodDogWzEwNywgNDldLFxuXHR9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1vZGlmaWVyTmFtZXMgPSBPYmplY3Qua2V5cyhzdHlsZXMubW9kaWZpZXIpO1xuZXhwb3J0IGNvbnN0IGZvcmVncm91bmRDb2xvck5hbWVzID0gT2JqZWN0LmtleXMoc3R5bGVzLmNvbG9yKTtcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3JOYW1lcyA9IE9iamVjdC5rZXlzKHN0eWxlcy5iZ0NvbG9yKTtcbmV4cG9ydCBjb25zdCBjb2xvck5hbWVzID0gWy4uLmZvcmVncm91bmRDb2xvck5hbWVzLCAuLi5iYWNrZ3JvdW5kQ29sb3JOYW1lc107XG5cbmZ1bmN0aW9uIGFzc2VtYmxlU3R5bGVzKCkge1xuXHRjb25zdCBjb2RlcyA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKGNvbnN0IFtncm91cE5hbWUsIGdyb3VwXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZXMpKSB7XG5cdFx0Zm9yIChjb25zdCBbc3R5bGVOYW1lLCBzdHlsZV0gb2YgT2JqZWN0LmVudHJpZXMoZ3JvdXApKSB7XG5cdFx0XHRzdHlsZXNbc3R5bGVOYW1lXSA9IHtcblx0XHRcdFx0b3BlbjogYFxcdTAwMUJbJHtzdHlsZVswXX1tYCxcblx0XHRcdFx0Y2xvc2U6IGBcXHUwMDFCWyR7c3R5bGVbMV19bWAsXG5cdFx0XHR9O1xuXG5cdFx0XHRncm91cFtzdHlsZU5hbWVdID0gc3R5bGVzW3N0eWxlTmFtZV07XG5cblx0XHRcdGNvZGVzLnNldChzdHlsZVswXSwgc3R5bGVbMV0pO1xuXHRcdH1cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsIGdyb3VwTmFtZSwge1xuXHRcdFx0dmFsdWU6IGdyb3VwLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSk7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCAnY29kZXMnLCB7XG5cdFx0dmFsdWU6IGNvZGVzLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9KTtcblxuXHRzdHlsZXMuY29sb3IuY2xvc2UgPSAnXFx1MDAxQlszOW0nO1xuXHRzdHlsZXMuYmdDb2xvci5jbG9zZSA9ICdcXHUwMDFCWzQ5bSc7XG5cblx0c3R5bGVzLmNvbG9yLmFuc2kgPSB3cmFwQW5zaTE2KCk7XG5cdHN0eWxlcy5jb2xvci5hbnNpMjU2ID0gd3JhcEFuc2kyNTYoKTtcblx0c3R5bGVzLmNvbG9yLmFuc2kxNm0gPSB3cmFwQW5zaTE2bSgpO1xuXHRzdHlsZXMuYmdDb2xvci5hbnNpID0gd3JhcEFuc2kxNihBTlNJX0JBQ0tHUk9VTkRfT0ZGU0VUKTtcblx0c3R5bGVzLmJnQ29sb3IuYW5zaTI1NiA9IHdyYXBBbnNpMjU2KEFOU0lfQkFDS0dST1VORF9PRkZTRVQpO1xuXHRzdHlsZXMuYmdDb2xvci5hbnNpMTZtID0gd3JhcEFuc2kxNm0oQU5TSV9CQUNLR1JPVU5EX09GRlNFVCk7XG5cblx0Ly8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vUWl4LS9jb2xvci1jb252ZXJ0L2Jsb2IvM2YwZTBkNGU5MmUyMzU3OTZjY2IxN2Y2ZTg1YzcyMDk0YTY1MWY0OS9jb252ZXJzaW9ucy5qc1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHlsZXMsIHtcblx0XHRyZ2JUb0Fuc2kyNTY6IHtcblx0XHRcdHZhbHVlOiAocmVkLCBncmVlbiwgYmx1ZSkgPT4ge1xuXHRcdFx0XHQvLyBXZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHRcdFx0XHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0XHRcdFx0aWYgKHJlZCA9PT0gZ3JlZW4gJiYgZ3JlZW4gPT09IGJsdWUpIHtcblx0XHRcdFx0XHRpZiAocmVkIDwgOCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE2O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChyZWQgPiAyNDgpIHtcblx0XHRcdFx0XHRcdHJldHVybiAyMzE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIE1hdGgucm91bmQoKChyZWQgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gMTZcblx0XHRcdFx0XHQrICgzNiAqIE1hdGgucm91bmQocmVkIC8gMjU1ICogNSkpXG5cdFx0XHRcdFx0KyAoNiAqIE1hdGgucm91bmQoZ3JlZW4gLyAyNTUgKiA1KSlcblx0XHRcdFx0XHQrIE1hdGgucm91bmQoYmx1ZSAvIDI1NSAqIDUpO1xuXHRcdFx0fSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0aGV4VG9SZ2I6IHtcblx0XHRcdHZhbHVlOiBoZXggPT4ge1xuXHRcdFx0XHRjb25zdCBtYXRjaGVzID0gL1thLWZcXGRdezZ9fFthLWZcXGRdezN9L2kuZXhlYyhoZXgudG9TdHJpbmcoMTYpKTtcblx0XHRcdFx0aWYgKCFtYXRjaGVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBbY29sb3JTdHJpbmddID0gbWF0Y2hlcztcblxuXHRcdFx0XHRpZiAoY29sb3JTdHJpbmcubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRcdFx0Y29sb3JTdHJpbmcgPSBbLi4uY29sb3JTdHJpbmddLm1hcChjaGFyYWN0ZXIgPT4gY2hhcmFjdGVyICsgY2hhcmFjdGVyKS5qb2luKCcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGludGVnZXIgPSBOdW1iZXIucGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcblxuXHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblx0XHRcdFx0XHQoaW50ZWdlciA+PiAxNikgJiAweEZGLFxuXHRcdFx0XHRcdChpbnRlZ2VyID4+IDgpICYgMHhGRixcblx0XHRcdFx0XHRpbnRlZ2VyICYgMHhGRixcblx0XHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cblx0XHRcdFx0XTtcblx0XHRcdH0sXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHR9LFxuXHRcdGhleFRvQW5zaTI1Njoge1xuXHRcdFx0dmFsdWU6IGhleCA9PiBzdHlsZXMucmdiVG9BbnNpMjU2KC4uLnN0eWxlcy5oZXhUb1JnYihoZXgpKSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0YW5zaTI1NlRvQW5zaToge1xuXHRcdFx0dmFsdWU6IGNvZGUgPT4ge1xuXHRcdFx0XHRpZiAoY29kZSA8IDgpIHtcblx0XHRcdFx0XHRyZXR1cm4gMzAgKyBjb2RlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNvZGUgPCAxNikge1xuXHRcdFx0XHRcdHJldHVybiA5MCArIChjb2RlIC0gOCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgcmVkO1xuXHRcdFx0XHRsZXQgZ3JlZW47XG5cdFx0XHRcdGxldCBibHVlO1xuXG5cdFx0XHRcdGlmIChjb2RlID49IDIzMikge1xuXHRcdFx0XHRcdHJlZCA9ICgoKGNvZGUgLSAyMzIpICogMTApICsgOCkgLyAyNTU7XG5cdFx0XHRcdFx0Z3JlZW4gPSByZWQ7XG5cdFx0XHRcdFx0Ymx1ZSA9IHJlZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb2RlIC09IDE2O1xuXG5cdFx0XHRcdFx0Y29uc3QgcmVtYWluZGVyID0gY29kZSAlIDM2O1xuXG5cdFx0XHRcdFx0cmVkID0gTWF0aC5mbG9vcihjb2RlIC8gMzYpIC8gNTtcblx0XHRcdFx0XHRncmVlbiA9IE1hdGguZmxvb3IocmVtYWluZGVyIC8gNikgLyA1O1xuXHRcdFx0XHRcdGJsdWUgPSAocmVtYWluZGVyICUgNikgLyA1O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBNYXRoLm1heChyZWQsIGdyZWVuLCBibHVlKSAqIDI7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDMwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0bGV0IHJlc3VsdCA9IDMwICsgKChNYXRoLnJvdW5kKGJsdWUpIDw8IDIpIHwgKE1hdGgucm91bmQoZ3JlZW4pIDw8IDEpIHwgTWF0aC5yb3VuZChyZWQpKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gNjA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0cmdiVG9BbnNpOiB7XG5cdFx0XHR2YWx1ZTogKHJlZCwgZ3JlZW4sIGJsdWUpID0+IHN0eWxlcy5hbnNpMjU2VG9BbnNpKHN0eWxlcy5yZ2JUb0Fuc2kyNTYocmVkLCBncmVlbiwgYmx1ZSkpLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHRoZXhUb0Fuc2k6IHtcblx0XHRcdHZhbHVlOiBoZXggPT4gc3R5bGVzLmFuc2kyNTZUb0Fuc2koc3R5bGVzLmhleFRvQW5zaTI1NihoZXgpKSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmNvbnN0IGFuc2lTdHlsZXMgPSBhc3NlbWJsZVN0eWxlcygpO1xuXG5leHBvcnQgZGVmYXVsdCBhbnNpU3R5bGVzO1xuIiwgImltcG9ydCBzdHJpbmdXaWR0aCBmcm9tICdzdHJpbmctd2lkdGgnO1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tICdzdHJpcC1hbnNpJztcbmltcG9ydCBhbnNpU3R5bGVzIGZyb20gJ2Fuc2ktc3R5bGVzJztcblxuY29uc3QgRVNDQVBFUyA9IG5ldyBTZXQoW1xuXHQnXFx1MDAxQicsXG5cdCdcXHUwMDlCJyxcbl0pO1xuXG5jb25zdCBFTkRfQ09ERSA9IDM5O1xuY29uc3QgQU5TSV9FU0NBUEVfQkVMTCA9ICdcXHUwMDA3JztcbmNvbnN0IEFOU0lfQ1NJID0gJ1snO1xuY29uc3QgQU5TSV9PU0MgPSAnXSc7XG5jb25zdCBBTlNJX1NHUl9URVJNSU5BVE9SID0gJ20nO1xuY29uc3QgQU5TSV9FU0NBUEVfTElOSyA9IGAke0FOU0lfT1NDfTg7O2A7XG5cbmNvbnN0IHdyYXBBbnNpQ29kZSA9IGNvZGUgPT4gYCR7RVNDQVBFUy52YWx1ZXMoKS5uZXh0KCkudmFsdWV9JHtBTlNJX0NTSX0ke2NvZGV9JHtBTlNJX1NHUl9URVJNSU5BVE9SfWA7XG5jb25zdCB3cmFwQW5zaUh5cGVybGluayA9IHVybCA9PiBgJHtFU0NBUEVTLnZhbHVlcygpLm5leHQoKS52YWx1ZX0ke0FOU0lfRVNDQVBFX0xJTkt9JHt1cmx9JHtBTlNJX0VTQ0FQRV9CRUxMfWA7XG5cbi8vIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHdvcmRzIHNwbGl0IG9uICcgJywgaWdub3Jpbmdcbi8vIHRoZSBleHRyYSBjaGFyYWN0ZXJzIGFkZGVkIGJ5IGFuc2kgZXNjYXBlIGNvZGVzXG5jb25zdCB3b3JkTGVuZ3RocyA9IHN0cmluZyA9PiBzdHJpbmcuc3BsaXQoJyAnKS5tYXAoY2hhcmFjdGVyID0+IHN0cmluZ1dpZHRoKGNoYXJhY3RlcikpO1xuXG4vLyBXcmFwIGEgbG9uZyB3b3JkIGFjcm9zcyBtdWx0aXBsZSByb3dzXG4vLyBBbnNpIGVzY2FwZSBjb2RlcyBkbyBub3QgY291bnQgdG93YXJkcyBsZW5ndGhcbmNvbnN0IHdyYXBXb3JkID0gKHJvd3MsIHdvcmQsIGNvbHVtbnMpID0+IHtcblx0Y29uc3QgY2hhcmFjdGVycyA9IFsuLi53b3JkXTtcblxuXHRsZXQgaXNJbnNpZGVFc2NhcGUgPSBmYWxzZTtcblx0bGV0IGlzSW5zaWRlTGlua0VzY2FwZSA9IGZhbHNlO1xuXHRsZXQgdmlzaWJsZSA9IHN0cmluZ1dpZHRoKHN0cmlwQW5zaShyb3dzLmF0KC0xKSkpO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBjaGFyYWN0ZXJdIG9mIGNoYXJhY3RlcnMuZW50cmllcygpKSB7XG5cdFx0Y29uc3QgY2hhcmFjdGVyTGVuZ3RoID0gc3RyaW5nV2lkdGgoY2hhcmFjdGVyKTtcblxuXHRcdGlmICh2aXNpYmxlICsgY2hhcmFjdGVyTGVuZ3RoIDw9IGNvbHVtbnMpIHtcblx0XHRcdHJvd3Nbcm93cy5sZW5ndGggLSAxXSArPSBjaGFyYWN0ZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJvd3MucHVzaChjaGFyYWN0ZXIpO1xuXHRcdFx0dmlzaWJsZSA9IDA7XG5cdFx0fVxuXG5cdFx0aWYgKEVTQ0FQRVMuaGFzKGNoYXJhY3RlcikpIHtcblx0XHRcdGlzSW5zaWRlRXNjYXBlID0gdHJ1ZTtcblxuXHRcdFx0Y29uc3QgYW5zaUVzY2FwZUxpbmtDYW5kaWRhdGUgPSBjaGFyYWN0ZXJzLnNsaWNlKGluZGV4ICsgMSwgaW5kZXggKyAxICsgQU5TSV9FU0NBUEVfTElOSy5sZW5ndGgpLmpvaW4oJycpO1xuXHRcdFx0aXNJbnNpZGVMaW5rRXNjYXBlID0gYW5zaUVzY2FwZUxpbmtDYW5kaWRhdGUgPT09IEFOU0lfRVNDQVBFX0xJTks7XG5cdFx0fVxuXG5cdFx0aWYgKGlzSW5zaWRlRXNjYXBlKSB7XG5cdFx0XHRpZiAoaXNJbnNpZGVMaW5rRXNjYXBlKSB7XG5cdFx0XHRcdGlmIChjaGFyYWN0ZXIgPT09IEFOU0lfRVNDQVBFX0JFTEwpIHtcblx0XHRcdFx0XHRpc0luc2lkZUVzY2FwZSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlzSW5zaWRlTGlua0VzY2FwZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQU5TSV9TR1JfVEVSTUlOQVRPUikge1xuXHRcdFx0XHRpc0luc2lkZUVzY2FwZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2aXNpYmxlICs9IGNoYXJhY3Rlckxlbmd0aDtcblxuXHRcdGlmICh2aXNpYmxlID09PSBjb2x1bW5zICYmIGluZGV4IDwgY2hhcmFjdGVycy5sZW5ndGggLSAxKSB7XG5cdFx0XHRyb3dzLnB1c2goJycpO1xuXHRcdFx0dmlzaWJsZSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSXQncyBwb3NzaWJsZSB0aGF0IHRoZSBsYXN0IHJvdyB3ZSBjb3B5IG92ZXIgaXMgb25seVxuXHQvLyBhbnNpIGVzY2FwZSBjaGFyYWN0ZXJzLCBoYW5kbGUgdGhpcyBlZGdlLWNhc2Vcblx0aWYgKCF2aXNpYmxlICYmIHJvd3MuYXQoLTEpLmxlbmd0aCA+IDAgJiYgcm93cy5sZW5ndGggPiAxKSB7XG5cdFx0cm93c1tyb3dzLmxlbmd0aCAtIDJdICs9IHJvd3MucG9wKCk7XG5cdH1cbn07XG5cbi8vIFRyaW1zIHNwYWNlcyBmcm9tIGEgc3RyaW5nIGlnbm9yaW5nIGludmlzaWJsZSBzZXF1ZW5jZXNcbmNvbnN0IHN0cmluZ1Zpc2libGVUcmltU3BhY2VzUmlnaHQgPSBzdHJpbmcgPT4ge1xuXHRjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnICcpO1xuXHRsZXQgbGFzdCA9IHdvcmRzLmxlbmd0aDtcblxuXHR3aGlsZSAobGFzdCA+IDApIHtcblx0XHRpZiAoc3RyaW5nV2lkdGgod29yZHNbbGFzdCAtIDFdKSA+IDApIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGxhc3QtLTtcblx0fVxuXG5cdGlmIChsYXN0ID09PSB3b3Jkcy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0cmV0dXJuIHdvcmRzLnNsaWNlKDAsIGxhc3QpLmpvaW4oJyAnKSArIHdvcmRzLnNsaWNlKGxhc3QpLmpvaW4oJycpO1xufTtcblxuLy8gVGhlIHdyYXAtYW5zaSBtb2R1bGUgY2FuIGJlIGludm9rZWQgaW4gZWl0aGVyICdoYXJkJyBvciAnc29mdCcgd3JhcCBtb2RlLlxuLy9cbi8vICdoYXJkJyB3aWxsIG5ldmVyIGFsbG93IGEgc3RyaW5nIHRvIHRha2UgdXAgbW9yZSB0aGFuIGNvbHVtbnMgY2hhcmFjdGVycy5cbi8vXG4vLyAnc29mdCcgYWxsb3dzIGxvbmcgd29yZHMgdG8gZXhwYW5kIHBhc3QgdGhlIGNvbHVtbiBsZW5ndGguXG5jb25zdCBleGVjID0gKHN0cmluZywgY29sdW1ucywgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGlmIChvcHRpb25zLnRyaW0gIT09IGZhbHNlICYmIHN0cmluZy50cmltKCkgPT09ICcnKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0bGV0IHJldHVyblZhbHVlID0gJyc7XG5cdGxldCBlc2NhcGVDb2RlO1xuXHRsZXQgZXNjYXBlVXJsO1xuXG5cdGNvbnN0IGxlbmd0aHMgPSB3b3JkTGVuZ3RocyhzdHJpbmcpO1xuXHRsZXQgcm93cyA9IFsnJ107XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIHdvcmRdIG9mIHN0cmluZy5zcGxpdCgnICcpLmVudHJpZXMoKSkge1xuXHRcdGlmIChvcHRpb25zLnRyaW0gIT09IGZhbHNlKSB7XG5cdFx0XHRyb3dzW3Jvd3MubGVuZ3RoIC0gMV0gPSByb3dzLmF0KC0xKS50cmltU3RhcnQoKTtcblx0XHR9XG5cblx0XHRsZXQgcm93TGVuZ3RoID0gc3RyaW5nV2lkdGgocm93cy5hdCgtMSkpO1xuXG5cdFx0aWYgKGluZGV4ICE9PSAwKSB7XG5cdFx0XHRpZiAocm93TGVuZ3RoID49IGNvbHVtbnMgJiYgKG9wdGlvbnMud29yZFdyYXAgPT09IGZhbHNlIHx8IG9wdGlvbnMudHJpbSA9PT0gZmFsc2UpKSB7XG5cdFx0XHRcdC8vIElmIHdlIHN0YXJ0IHdpdGggYSBuZXcgd29yZCBidXQgdGhlIGN1cnJlbnQgcm93IGxlbmd0aCBlcXVhbHMgdGhlIGxlbmd0aCBvZiB0aGUgY29sdW1ucywgYWRkIGEgbmV3IHJvd1xuXHRcdFx0XHRyb3dzLnB1c2goJycpO1xuXHRcdFx0XHRyb3dMZW5ndGggPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocm93TGVuZ3RoID4gMCB8fCBvcHRpb25zLnRyaW0gPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJvd3Nbcm93cy5sZW5ndGggLSAxXSArPSAnICc7XG5cdFx0XHRcdHJvd0xlbmd0aCsrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEluICdoYXJkJyB3cmFwIG1vZGUsIHRoZSBsZW5ndGggb2YgYSBsaW5lIGlzIG5ldmVyIGFsbG93ZWQgdG8gZXh0ZW5kIHBhc3QgJ2NvbHVtbnMnXG5cdFx0aWYgKG9wdGlvbnMuaGFyZCAmJiBsZW5ndGhzW2luZGV4XSA+IGNvbHVtbnMpIHtcblx0XHRcdGNvbnN0IHJlbWFpbmluZ0NvbHVtbnMgPSAoY29sdW1ucyAtIHJvd0xlbmd0aCk7XG5cdFx0XHRjb25zdCBicmVha3NTdGFydGluZ1RoaXNMaW5lID0gMSArIE1hdGguZmxvb3IoKGxlbmd0aHNbaW5kZXhdIC0gcmVtYWluaW5nQ29sdW1ucyAtIDEpIC8gY29sdW1ucyk7XG5cdFx0XHRjb25zdCBicmVha3NTdGFydGluZ05leHRMaW5lID0gTWF0aC5mbG9vcigobGVuZ3Roc1tpbmRleF0gLSAxKSAvIGNvbHVtbnMpO1xuXHRcdFx0aWYgKGJyZWFrc1N0YXJ0aW5nTmV4dExpbmUgPCBicmVha3NTdGFydGluZ1RoaXNMaW5lKSB7XG5cdFx0XHRcdHJvd3MucHVzaCgnJyk7XG5cdFx0XHR9XG5cblx0XHRcdHdyYXBXb3JkKHJvd3MsIHdvcmQsIGNvbHVtbnMpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHJvd0xlbmd0aCArIGxlbmd0aHNbaW5kZXhdID4gY29sdW1ucyAmJiByb3dMZW5ndGggPiAwICYmIGxlbmd0aHNbaW5kZXhdID4gMCkge1xuXHRcdFx0aWYgKG9wdGlvbnMud29yZFdyYXAgPT09IGZhbHNlICYmIHJvd0xlbmd0aCA8IGNvbHVtbnMpIHtcblx0XHRcdFx0d3JhcFdvcmQocm93cywgd29yZCwgY29sdW1ucyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyb3dzLnB1c2goJycpO1xuXHRcdH1cblxuXHRcdGlmIChyb3dMZW5ndGggKyBsZW5ndGhzW2luZGV4XSA+IGNvbHVtbnMgJiYgb3B0aW9ucy53b3JkV3JhcCA9PT0gZmFsc2UpIHtcblx0XHRcdHdyYXBXb3JkKHJvd3MsIHdvcmQsIGNvbHVtbnMpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cm93c1tyb3dzLmxlbmd0aCAtIDFdICs9IHdvcmQ7XG5cdH1cblxuXHRpZiAob3B0aW9ucy50cmltICE9PSBmYWxzZSkge1xuXHRcdHJvd3MgPSByb3dzLm1hcChyb3cgPT4gc3RyaW5nVmlzaWJsZVRyaW1TcGFjZXNSaWdodChyb3cpKTtcblx0fVxuXG5cdGNvbnN0IHByZVN0cmluZyA9IHJvd3Muam9pbignXFxuJyk7XG5cdGNvbnN0IHByZSA9IFsuLi5wcmVTdHJpbmddO1xuXG5cdC8vIFdlIG5lZWQgdG8ga2VlcCBhIHNlcGFyYXRlIGluZGV4IGFzIGBTdHJpbmcjc2xpY2UoKWAgd29ya3Mgb24gVW5pY29kZSBjb2RlIHVuaXRzLCB3aGlsZSBgcHJlYCBpcyBhbiBhcnJheSBvZiBjb2RlcG9pbnRzLlxuXHRsZXQgcHJlU3RyaW5nSW5kZXggPSAwO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBjaGFyYWN0ZXJdIG9mIHByZS5lbnRyaWVzKCkpIHtcblx0XHRyZXR1cm5WYWx1ZSArPSBjaGFyYWN0ZXI7XG5cblx0XHRpZiAoRVNDQVBFUy5oYXMoY2hhcmFjdGVyKSkge1xuXHRcdFx0Y29uc3Qge2dyb3Vwc30gPSBuZXcgUmVnRXhwKGAoPzpcXFxcJHtBTlNJX0NTSX0oPzxjb2RlPlxcXFxkKyltfFxcXFwke0FOU0lfRVNDQVBFX0xJTkt9KD88dXJpPi4qKSR7QU5TSV9FU0NBUEVfQkVMTH0pYCkuZXhlYyhwcmVTdHJpbmcuc2xpY2UocHJlU3RyaW5nSW5kZXgpKSB8fCB7Z3JvdXBzOiB7fX07XG5cdFx0XHRpZiAoZ3JvdXBzLmNvZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb25zdCBjb2RlID0gTnVtYmVyLnBhcnNlRmxvYXQoZ3JvdXBzLmNvZGUpO1xuXHRcdFx0XHRlc2NhcGVDb2RlID0gY29kZSA9PT0gRU5EX0NPREUgPyB1bmRlZmluZWQgOiBjb2RlO1xuXHRcdFx0fSBlbHNlIGlmIChncm91cHMudXJpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZXNjYXBlVXJsID0gZ3JvdXBzLnVyaS5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiBncm91cHMudXJpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGNvZGUgPSBhbnNpU3R5bGVzLmNvZGVzLmdldChOdW1iZXIoZXNjYXBlQ29kZSkpO1xuXG5cdFx0aWYgKHByZVtpbmRleCArIDFdID09PSAnXFxuJykge1xuXHRcdFx0aWYgKGVzY2FwZVVybCkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSArPSB3cmFwQW5zaUh5cGVybGluaygnJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlc2NhcGVDb2RlICYmIGNvZGUpIHtcblx0XHRcdFx0cmV0dXJuVmFsdWUgKz0gd3JhcEFuc2lDb2RlKGNvZGUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSAnXFxuJykge1xuXHRcdFx0aWYgKGVzY2FwZUNvZGUgJiYgY29kZSkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSArPSB3cmFwQW5zaUNvZGUoZXNjYXBlQ29kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlc2NhcGVVcmwpIHtcblx0XHRcdFx0cmV0dXJuVmFsdWUgKz0gd3JhcEFuc2lIeXBlcmxpbmsoZXNjYXBlVXJsKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcmVTdHJpbmdJbmRleCArPSBjaGFyYWN0ZXIubGVuZ3RoO1xuXHR9XG5cblx0cmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuLy8gRm9yIGVhY2ggbmV3bGluZSwgaW52b2tlIHRoZSBtZXRob2Qgc2VwYXJhdGVseVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JhcEFuc2koc3RyaW5nLCBjb2x1bW5zLCBvcHRpb25zKSB7XG5cdHJldHVybiBTdHJpbmcoc3RyaW5nKVxuXHRcdC5ub3JtYWxpemUoKVxuXHRcdC5yZXBsYWNlQWxsKCdcXHJcXG4nLCAnXFxuJylcblx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0Lm1hcChsaW5lID0+IGV4ZWMobGluZSwgY29sdW1ucywgb3B0aW9ucykpXG5cdFx0LmpvaW4oJ1xcbicpO1xufVxuIiwgIi8vIEJvb3RzdHJhcCBjbGl1aSB3aXRoIENvbW1vbkpTIGRlcGVuZGVuY2llczpcbmltcG9ydCB7IGNsaXVpIH0gZnJvbSAnLi9idWlsZC9saWIvaW5kZXguanMnXG5pbXBvcnQgc3RyaW5nV2lkdGggZnJvbSAnc3RyaW5nLXdpZHRoJ1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tICdzdHJpcC1hbnNpJ1xuaW1wb3J0IHdyYXBBbnNpIGZyb20gJ3dyYXAtYW5zaSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdWkgKG9wdHMpIHtcbiAgcmV0dXJuIGNsaXVpKG9wdHMsIHtcbiAgICBzdHJpbmdXaWR0aCxcbiAgICBzdHJpcEFuc2ksXG4gICAgd3JhcDogd3JhcEFuc2lcbiAgfSlcbn1cblxuZXhwb3J0IHt1aSBhcyAnbW9kdWxlLmV4cG9ydHMnfTtcbiIsICJpbXBvcnQgeyBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyByZWFkZGlyU3luYywgc3RhdFN5bmMgfSBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGFydCwgY2FsbGJhY2spIHtcblx0bGV0IGRpciA9IHJlc29sdmUoJy4nLCBzdGFydCk7XG5cdGxldCB0bXAsIHN0YXRzID0gc3RhdFN5bmMoZGlyKTtcblxuXHRpZiAoIXN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcblx0XHRkaXIgPSBkaXJuYW1lKGRpcik7XG5cdH1cblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdHRtcCA9IGNhbGxiYWNrKGRpciwgcmVhZGRpclN5bmMoZGlyKSk7XG5cdFx0aWYgKHRtcCkgcmV0dXJuIHJlc29sdmUoZGlyLCB0bXApO1xuXHRcdGRpciA9IGRpcm5hbWUodG1wID0gZGlyKTtcblx0XHRpZiAodG1wID09PSBkaXIpIGJyZWFrO1xuXHR9XG59XG4iLCAiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1haW4gZW50cnlwb2ludCBmb3IgbGlicmFyaWVzIHVzaW5nIHlhcmdzLXBhcnNlciBpbiBOb2RlLmpzXG4gKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbnZhciBfYSwgX2IsIF9jO1xuLyogZXNsaW50LWRpc2FibGUgbi9uby11bnB1Ymxpc2hlZC1pbXBvcnQgKi9cbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgbm9ybWFsaXplLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBjYW1lbENhc2UsIGRlY2FtZWxpemUsIGxvb2tzTGlrZU51bWJlciB9IGZyb20gJy4vc3RyaW5nLXV0aWxzLmpzJztcbmltcG9ydCB7IFlhcmdzUGFyc2VyIH0gZnJvbSAnLi95YXJncy1wYXJzZXIuanMnO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ25vZGU6bW9kdWxlJztcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20veWFyZ3MveWFyZ3MtcGFyc2VyI3N1cHBvcnRlZC1ub2RlanMtdmVyc2lvbnMgZm9yIG91clxuLy8gdmVyc2lvbiBzdXBwb3J0IHBvbGljeS4gVGhlIFlBUkdTX01JTl9OT0RFX1ZFUlNJT04gaXMgdXNlZCBmb3IgdGVzdGluZyBvbmx5LlxuY29uc3QgbWluTm9kZVZlcnNpb24gPSAocHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5ZQVJHU19NSU5fTk9ERV9WRVJTSU9OKVxuICAgID8gTnVtYmVyKHByb2Nlc3MuZW52LllBUkdTX01JTl9OT0RFX1ZFUlNJT04pXG4gICAgOiAyMDtcbmNvbnN0IG5vZGVWZXJzaW9uID0gKF9iID0gKF9hID0gcHJvY2VzcyA9PT0gbnVsbCB8fCBwcm9jZXNzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9jZXNzLnZlcnNpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKF9jID0gcHJvY2VzcyA9PT0gbnVsbCB8fCBwcm9jZXNzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9jZXNzLnZlcnNpb24pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zbGljZSgxKTtcbmlmIChub2RlVmVyc2lvbikge1xuICAgIGNvbnN0IG1ham9yID0gTnVtYmVyKG5vZGVWZXJzaW9uLm1hdGNoKC9eKFteLl0rKS8pWzFdKTtcbiAgICBpZiAobWFqb3IgPCBtaW5Ob2RlVmVyc2lvbikge1xuICAgICAgICB0aHJvdyBFcnJvcihgeWFyZ3MgcGFyc2VyIHN1cHBvcnRzIGEgbWluaW11bSBOb2RlLmpzIHZlcnNpb24gb2YgJHttaW5Ob2RlVmVyc2lvbn0uIFJlYWQgb3VyIHZlcnNpb24gc3VwcG9ydCBwb2xpY3k6IGh0dHBzOi8vZ2l0aHViLmNvbS95YXJncy95YXJncy1wYXJzZXIjc3VwcG9ydGVkLW5vZGVqcy12ZXJzaW9uc2ApO1xuICAgIH1cbn1cbi8vIENyZWF0ZXMgYSB5YXJncy1wYXJzZXIgaW5zdGFuY2UgdXNpbmcgTm9kZS5qcyBzdGFuZGFyZCBsaWJyYXJpZXM6XG5jb25zdCBlbnYgPSBwcm9jZXNzID8gcHJvY2Vzcy5lbnYgOiB7fTtcbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlID8gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpIDogdW5kZWZpbmVkO1xuY29uc3QgcGFyc2VyID0gbmV3IFlhcmdzUGFyc2VyKHtcbiAgICBjd2Q6IHByb2Nlc3MuY3dkLFxuICAgIGVudjogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW52O1xuICAgIH0sXG4gICAgZm9ybWF0LFxuICAgIG5vcm1hbGl6ZSxcbiAgICByZXNvbHZlLFxuICAgIHJlcXVpcmU6IChwYXRoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlKHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGgubWF0Y2goL1xcLmpzb24kLykpIHtcbiAgICAgICAgICAgIC8vIEFkZHJlc3NlczogaHR0cHM6Ly9naXRodWIuY29tL3lhcmdzL3lhcmdzL2lzc3Vlcy8yMDQwXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMocGF0aCwgJ3V0ZjgnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignb25seSAuanNvbiBjb25maWcgZmlsZXMgYXJlIHN1cHBvcnRlZCBpbiBFU00nKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuY29uc3QgeWFyZ3NQYXJzZXIgPSBmdW5jdGlvbiBQYXJzZXIoYXJncywgb3B0cykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlci5wYXJzZShhcmdzLnNsaWNlKCksIG9wdHMpO1xuICAgIHJldHVybiByZXN1bHQuYXJndjtcbn07XG55YXJnc1BhcnNlci5kZXRhaWxlZCA9IGZ1bmN0aW9uIChhcmdzLCBvcHRzKSB7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZShhcmdzLnNsaWNlKCksIG9wdHMpO1xufTtcbnlhcmdzUGFyc2VyLmNhbWVsQ2FzZSA9IGNhbWVsQ2FzZTtcbnlhcmdzUGFyc2VyLmRlY2FtZWxpemUgPSBkZWNhbWVsaXplO1xueWFyZ3NQYXJzZXIubG9va3NMaWtlTnVtYmVyID0gbG9va3NMaWtlTnVtYmVyO1xuZXhwb3J0IGRlZmF1bHQgeWFyZ3NQYXJzZXI7XG4vLyBzcGVjaWFsIHN5bnRheCB0byBhbGxvdyB1bnF1YWxpZmllZCBkZWZhdWx0IGV4cG9ydCBmcm9tIENvbW1vbkpTXG5leHBvcnQgeyB5YXJnc1BhcnNlciBhcyAnbW9kdWxlLmV4cG9ydHMnIH07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBDb250cmlidXRvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBJU0NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZShzdHIpIHtcbiAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gYXJndW1lbnQgaXMgcHJvdmlkZWQgYXMgY2FtZWwgY2FzZSwgZS5nLiwgZm9vQmFyLlxuICAgIC8vIGJ5IGVuc3VyaW5nIHRoYXQgdGhlIHN0cmluZyBpc24ndCBhbHJlYWR5IG1peGVkIGNhc2U6XG4gICAgY29uc3QgaXNDYW1lbENhc2UgPSBzdHIgIT09IHN0ci50b0xvd2VyQ2FzZSgpICYmIHN0ciAhPT0gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKCFpc0NhbWVsQ2FzZSkge1xuICAgICAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgaWYgKHN0ci5pbmRleE9mKCctJykgPT09IC0xICYmIHN0ci5pbmRleE9mKCdfJykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgY2FtZWxjYXNlID0gJyc7XG4gICAgICAgIGxldCBuZXh0Q2hyVXBwZXIgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgbGVhZGluZ0h5cGhlbnMgPSBzdHIubWF0Y2goL14tKy8pO1xuICAgICAgICBmb3IgKGxldCBpID0gbGVhZGluZ0h5cGhlbnMgPyBsZWFkaW5nSHlwaGVuc1swXS5sZW5ndGggOiAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hyID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGlmIChuZXh0Q2hyVXBwZXIpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2hyVXBwZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjaHIgPSBjaHIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9PSAwICYmIChjaHIgPT09ICctJyB8fCBjaHIgPT09ICdfJykpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2hyVXBwZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hyICE9PSAnLScgJiYgY2hyICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBjYW1lbGNhc2UgKz0gY2hyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW1lbGNhc2U7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlY2FtZWxpemUoc3RyLCBqb2luU3RyaW5nKSB7XG4gICAgY29uc3QgbG93ZXJjYXNlID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgam9pblN0cmluZyA9IGpvaW5TdHJpbmcgfHwgJy0nO1xuICAgIGxldCBub3RDYW1lbGNhc2UgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaHJMb3dlciA9IGxvd2VyY2FzZS5jaGFyQXQoaSk7XG4gICAgICAgIGNvbnN0IGNoclN0cmluZyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIGlmIChjaHJMb3dlciAhPT0gY2hyU3RyaW5nICYmIGkgPiAwKSB7XG4gICAgICAgICAgICBub3RDYW1lbGNhc2UgKz0gYCR7am9pblN0cmluZ30ke2xvd2VyY2FzZS5jaGFyQXQoaSl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vdENhbWVsY2FzZSArPSBjaHJTdHJpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vdENhbWVsY2FzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb29rc0xpa2VOdW1iZXIoeCkge1xuICAgIGlmICh4ID09PSBudWxsIHx8IHggPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGlmIGxvYWRlZCBmcm9tIGNvbmZpZywgbWF5IGFscmVhZHkgYmUgYSBudW1iZXIuXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gaGV4YWRlY2ltYWwuXG4gICAgaWYgKC9eMHhbMC05YS1mXSskL2kudGVzdCh4KSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gZG9uJ3QgdHJlYXQgMDEyMyBhcyBhIG51bWJlcjsgYXMgaXQgZHJvcHMgdGhlIGxlYWRpbmcgJzAnLlxuICAgIGlmICgvXjBbXi5dLy50ZXN0KHgpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIC9eWy1dPyg/OlxcZCsoPzpcXC5cXGQqKT98XFwuXFxkKykoZVstK10/XFxkKyk/JC8udGVzdCh4KTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIENvbnRyaWJ1dG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IElTQ1xuICovXG4vLyB0YWtlIGFuIHVuLXNwbGl0IGFyZ3Ygc3RyaW5nIGFuZCB0b2tlbml6ZSBpdC5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZUFyZ1N0cmluZyhhcmdTdHJpbmcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiBhcmdTdHJpbmcubWFwKGUgPT4gdHlwZW9mIGUgIT09ICdzdHJpbmcnID8gZSArICcnIDogZSk7XG4gICAgfVxuICAgIGFyZ1N0cmluZyA9IGFyZ1N0cmluZy50cmltKCk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBwcmV2QyA9IG51bGw7XG4gICAgbGV0IGMgPSBudWxsO1xuICAgIGxldCBvcGVuaW5nID0gbnVsbDtcbiAgICBjb25zdCBhcmdzID0gW107XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGFyZ1N0cmluZy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgcHJldkMgPSBjO1xuICAgICAgICBjID0gYXJnU3RyaW5nLmNoYXJBdChpaSk7XG4gICAgICAgIC8vIHNwbGl0IG9uIHNwYWNlcyB1bmxlc3Mgd2UncmUgaW4gcXVvdGVzLlxuICAgICAgICBpZiAoYyA9PT0gJyAnICYmICFvcGVuaW5nKSB7XG4gICAgICAgICAgICBpZiAoIShwcmV2QyA9PT0gJyAnKSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvbid0IHNwbGl0IHRoZSBzdHJpbmcgaWYgd2UncmUgaW4gbWF0Y2hpbmdcbiAgICAgICAgLy8gb3BlbmluZyBvciBjbG9zaW5nIHNpbmdsZSBhbmQgZG91YmxlIHF1b3Rlcy5cbiAgICAgICAgaWYgKGMgPT09IG9wZW5pbmcpIHtcbiAgICAgICAgICAgIG9wZW5pbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChjID09PSBcIidcIiB8fCBjID09PSAnXCInKSAmJiAhb3BlbmluZykge1xuICAgICAgICAgICAgb3BlbmluZyA9IGM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhcmdzW2ldKVxuICAgICAgICAgICAgYXJnc1tpXSA9ICcnO1xuICAgICAgICBhcmdzW2ldICs9IGM7XG4gICAgfVxuICAgIHJldHVybiBhcmdzO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbmV4cG9ydCB2YXIgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXk7XG4oZnVuY3Rpb24gKERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5KSB7XG4gICAgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXlbXCJCT09MRUFOXCJdID0gXCJib29sZWFuXCI7XG4gICAgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXlbXCJTVFJJTkdcIl0gPSBcInN0cmluZ1wiO1xuICAgIERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5W1wiTlVNQkVSXCJdID0gXCJudW1iZXJcIjtcbiAgICBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleVtcIkFSUkFZXCJdID0gXCJhcnJheVwiO1xufSkoRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkgfHwgKERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5ID0ge30pKTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIENvbnRyaWJ1dG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IElTQ1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItYXJyb3ctY2FsbGJhY2sgKi9cbmltcG9ydCB7IHRva2VuaXplQXJnU3RyaW5nIH0gZnJvbSAnLi90b2tlbml6ZS1hcmctc3RyaW5nLmpzJztcbmltcG9ydCB7IERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5IH0gZnJvbSAnLi95YXJncy1wYXJzZXItdHlwZXMuanMnO1xuaW1wb3J0IHsgY2FtZWxDYXNlLCBkZWNhbWVsaXplLCBsb29rc0xpa2VOdW1iZXIgfSBmcm9tICcuL3N0cmluZy11dGlscy5qcyc7XG5sZXQgbWl4aW47XG5leHBvcnQgY2xhc3MgWWFyZ3NQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKF9taXhpbikge1xuICAgICAgICBtaXhpbiA9IF9taXhpbjtcbiAgICB9XG4gICAgcGFyc2UoYXJnc0lucHV0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGFsaWFzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhcnJheTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYm9vbGVhbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29uZmlnOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb25maWdPYmplY3RzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb2VyY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvdW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBlbnZQcmVmaXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5hcmc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vcm1hbGl6ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3RyaW5nOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBudW1iZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9fOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBrZXk6IHVuZGVmaW5lZFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgLy8gYWxsb3cgYSBzdHJpbmcgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGluIHJhdGhlclxuICAgICAgICAvLyB0aGFuIGFuIGFyZ3YgYXJyYXkuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0b2tlbml6ZUFyZ1N0cmluZyhhcmdzSW5wdXQpO1xuICAgICAgICAvLyB0b2tlbml6ZUFyZ1N0cmluZyBhZGRzIGV4dHJhIHF1b3RlcyB0byBhcmdzIGlmIGFyZ3NJbnB1dCBpcyBhIHN0cmluZ1xuICAgICAgICAvLyBvbmx5IHN0cmlwIHRob3NlIGV4dHJhIHF1b3RlcyBpbiBwcm9jZXNzVmFsdWUgaWYgYXJnc0lucHV0IGlzIGEgc3RyaW5nXG4gICAgICAgIGNvbnN0IGlucHV0SXNTdHJpbmcgPSB0eXBlb2YgYXJnc0lucHV0ID09PSAnc3RyaW5nJztcbiAgICAgICAgLy8gYWxpYXNlcyBtaWdodCBoYXZlIHRyYW5zaXRpdmUgcmVsYXRpb25zaGlwcywgbm9ybWFsaXplIHRoaXMuXG4gICAgICAgIGNvbnN0IGFsaWFzZXMgPSBjb21iaW5lQWxpYXNlcyhPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIG9wdHMuYWxpYXMpKTtcbiAgICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgJ2Jvb2xlYW4tbmVnYXRpb24nOiB0cnVlLFxuICAgICAgICAgICAgJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJzogdHJ1ZSxcbiAgICAgICAgICAgICdjb21iaW5lLWFycmF5cyc6IGZhbHNlLFxuICAgICAgICAgICAgJ2RvdC1ub3RhdGlvbic6IHRydWUsXG4gICAgICAgICAgICAnZHVwbGljYXRlLWFyZ3VtZW50cy1hcnJheSc6IHRydWUsXG4gICAgICAgICAgICAnZmxhdHRlbi1kdXBsaWNhdGUtYXJyYXlzJzogdHJ1ZSxcbiAgICAgICAgICAgICdncmVlZHktYXJyYXlzJzogdHJ1ZSxcbiAgICAgICAgICAgICdoYWx0LWF0LW5vbi1vcHRpb24nOiBmYWxzZSxcbiAgICAgICAgICAgICduYXJncy1lYXRzLW9wdGlvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICduZWdhdGlvbi1wcmVmaXgnOiAnbm8tJyxcbiAgICAgICAgICAgICdwYXJzZS1udW1iZXJzJzogdHJ1ZSxcbiAgICAgICAgICAgICdwYXJzZS1wb3NpdGlvbmFsLW51bWJlcnMnOiB0cnVlLFxuICAgICAgICAgICAgJ3BvcHVsYXRlLS0nOiBmYWxzZSxcbiAgICAgICAgICAgICdzZXQtcGxhY2Vob2xkZXIta2V5JzogZmFsc2UsXG4gICAgICAgICAgICAnc2hvcnQtb3B0aW9uLWdyb3Vwcyc6IHRydWUsXG4gICAgICAgICAgICAnc3RyaXAtYWxpYXNlZCc6IGZhbHNlLFxuICAgICAgICAgICAgJ3N0cmlwLWRhc2hlZCc6IGZhbHNlLFxuICAgICAgICAgICAgJ3Vua25vd24tb3B0aW9ucy1hcy1hcmdzJzogZmFsc2VcbiAgICAgICAgfSwgb3B0cy5jb25maWd1cmF0aW9uKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIG9wdHMuZGVmYXVsdCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iamVjdHMgPSBvcHRzLmNvbmZpZ09iamVjdHMgfHwgW107XG4gICAgICAgIGNvbnN0IGVudlByZWZpeCA9IG9wdHMuZW52UHJlZml4O1xuICAgICAgICBjb25zdCBub3RGbGFnc09wdGlvbiA9IGNvbmZpZ3VyYXRpb25bJ3BvcHVsYXRlLS0nXTtcbiAgICAgICAgY29uc3Qgbm90RmxhZ3NBcmd2ID0gbm90RmxhZ3NPcHRpb24gPyAnLS0nIDogJ18nO1xuICAgICAgICBjb25zdCBuZXdBbGlhc2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdGVkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgLy8gYWxsb3cgYSBpMThuIGhhbmRsZXIgdG8gYmUgcGFzc2VkIGluLCBkZWZhdWx0IHRvIGEgZmFrZSBvbmUgKHV0aWwuZm9ybWF0KS5cbiAgICAgICAgY29uc3QgX18gPSBvcHRzLl9fIHx8IG1peGluLmZvcm1hdDtcbiAgICAgICAgY29uc3QgZmxhZ3MgPSB7XG4gICAgICAgICAgICBhbGlhc2VzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgYXJyYXlzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgYm9vbHM6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBzdHJpbmdzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgbnVtYmVyczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGNvdW50czogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZTogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGNvbmZpZ3M6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBuYXJnczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGNvZXJjaW9uczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGtleXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlID0gL14tKFswLTldKyhcXC5bMC05XSspP3xcXC5bMC05XSspJC87XG4gICAgICAgIGNvbnN0IG5lZ2F0ZWRCb29sZWFuID0gbmV3IFJlZ0V4cCgnXi0tJyArIGNvbmZpZ3VyYXRpb25bJ25lZ2F0aW9uLXByZWZpeCddICsgJyguKyknKTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMuYXJyYXkgfHwgW10pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBvcHQgPT09ICdvYmplY3QnID8gb3B0LmtleSA6IG9wdDtcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0byBmbGFnc1tib29sc3xzdHJpbmdzfG51bWJlcnNdXG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50ID0gT2JqZWN0LmtleXMob3B0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5RmxhZ0tleXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2xlYW46ICdib29scycsXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogJ3N0cmluZ3MnLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXI6ICdudW1iZXJzJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5RmxhZ0tleXNba2V5XTtcbiAgICAgICAgICAgIH0pLmZpbHRlcihCb29sZWFuKS5wb3AoKTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBrZXkgdG8gYmUgY29lcmNlZFxuICAgICAgICAgICAgaWYgKGFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBmbGFnc1thc3NpZ25tZW50XVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZsYWdzLmFycmF5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMuYm9vbGVhbiB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3MuYm9vbHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBmbGFncy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFtdLmNvbmNhdChvcHRzLnN0cmluZyB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3Muc3RyaW5nc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMubnVtYmVyIHx8IFtdKS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmbGFncy5udW1iZXJzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5jb3VudCB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3MuY291bnRzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5ub3JtYWxpemUgfHwgW10pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGZsYWdzLm5vcm1hbGl6ZVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLm5hcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzLm5hcmcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLm5hcmdzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmNvZXJjZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdHMuY29lcmNlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmNvZXJjaW9uc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5jb25maWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRzLmNvbmZpZykgfHwgdHlwZW9mIG9wdHMuY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBbXS5jb25jYXQob3B0cy5jb25maWcpLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuY29uZmlnc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRzLmNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzLmNvbmZpZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzLmNvbmZpZ3Nba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIGEgbG9va3VwIHRhYmxlIHRoYXQgdGFrZXMgaW50byBhY2NvdW50IGFsbFxuICAgICAgICAvLyBjb21iaW5hdGlvbnMgb2YgYWxpYXNlczoge2Y6IFsnZm9vJ10sIGZvbzogWydmJ119XG4gICAgICAgIGV4dGVuZEFsaWFzZXMob3B0cy5rZXksIGFsaWFzZXMsIG9wdHMuZGVmYXVsdCwgZmxhZ3MuYXJyYXlzKTtcbiAgICAgICAgLy8gYXBwbHkgZGVmYXVsdCB2YWx1ZXMgdG8gYWxsIGFsaWFzZXMuXG4gICAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIChmbGFncy5hbGlhc2VzW2tleV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHNbYWxpYXNdID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICAgICAgY2hlY2tDb25maWd1cmF0aW9uKCk7XG4gICAgICAgIGxldCBub3RGbGFncyA9IFtdO1xuICAgICAgICBjb25zdCBhcmd2ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7IF86IFtdIH0pO1xuICAgICAgICAvLyBUT0RPKGJjb2UpOiBmb3IgdGhlIGZpcnN0IHBhc3MgYXQgcmVtb3Zpbmcgb2JqZWN0IHByb3RvdHlwZSAgd2UgZGlkbid0XG4gICAgICAgIC8vIHJlbW92ZSBhbGwgcHJvdG90eXBlcyBmcm9tIG9iamVjdHMgcmV0dXJuZWQgYnkgdGhpcyBBUEksIHdlIG1pZ2h0IHdhbnRcbiAgICAgICAgLy8gdG8gZ3JhZHVhbGx5IG1vdmUgdG93YXJkcyBkb2luZyBzby5cbiAgICAgICAgY29uc3QgYXJndlJldHVybiA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaV07XG4gICAgICAgICAgICBjb25zdCB0cnVuY2F0ZWRBcmcgPSBhcmcucmVwbGFjZSgvXi17Myx9LywgJy0tLScpO1xuICAgICAgICAgICAgbGV0IGJyb2tlbjtcbiAgICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgICBsZXQgbGV0dGVycztcbiAgICAgICAgICAgIGxldCBtO1xuICAgICAgICAgICAgbGV0IG5leHQ7XG4gICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAvLyBhbnkgdW5rbm93biBvcHRpb24gKGV4Y2VwdCBmb3IgZW5kLW9mLW9wdGlvbnMsIFwiLS1cIilcbiAgICAgICAgICAgIGlmIChhcmcgIT09ICctLScgJiYgL14tLy50ZXN0KGFyZykgJiYgaXNVbmtub3duT3B0aW9uQXNBcmcoYXJnKSkge1xuICAgICAgICAgICAgICAgIHB1c2hQb3NpdGlvbmFsKGFyZyk7XG4gICAgICAgICAgICAgICAgLy8gLS0tLCAtLS09LCAtLS0tLCBldGMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0cnVuY2F0ZWRBcmcubWF0Y2goL14tLS0rKD18JCkvKSkge1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnMgd2l0aG91dCBrZXkgbmFtZSBhcmUgaW52YWxpZC5cbiAgICAgICAgICAgICAgICBwdXNoUG9zaXRpb25hbChhcmcpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIC8vIC0tIHNlcGFyYXRlZCBieSA9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLS4rPS8pIHx8ICghY29uZmlndXJhdGlvblsnc2hvcnQtb3B0aW9uLWdyb3VwcyddICYmIGFyZy5tYXRjaCgvXi0uKz0vKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBVc2luZyBbXFxzXFxTXSBpbnN0ZWFkIG9mIC4gYmVjYXVzZSBqcyBkb2Vzbid0IHN1cHBvcnQgdGhlXG4gICAgICAgICAgICAgICAgLy8gJ2RvdGFsbCcgcmVnZXggbW9kaWZpZXIuIFNlZTpcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMDY4MzA4LzEzMjE2XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0tPyhbXj1dKyk9KFtcXHNcXFNdKikkLyk7XG4gICAgICAgICAgICAgICAgLy8gYXJyYXlzIGZvcm1hdCA9ICctLWY9YSBiIGMnXG4gICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwgJiYgQXJyYXkuaXNBcnJheShtKSAmJiBtLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMobVsxXSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIG1bMV0sIGFyZ3MsIG1bMl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhtWzFdLCBmbGFncy5uYXJncykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuYXJncyBmb3JtYXQgPSAnLS1mPW1vbmtleSB3YXNoaW5nIGNhdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlYXROYXJncyhpLCBtWzFdLCBhcmdzLCBtWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhtWzFdLCBtWzJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaChuZWdhdGVkQm9vbGVhbikgJiYgY29uZmlndXJhdGlvblsnYm9vbGVhbi1uZWdhdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaChuZWdhdGVkQm9vbGVhbik7XG4gICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwgJiYgQXJyYXkuaXNBcnJheShtKSAmJiBtLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IG1bMV07XG4gICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykgPyBbZmFsc2VdIDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAtLSBzZXBhcmF0ZWQgYnkgc3BhY2UuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLS4rLykgfHwgKCFjb25maWd1cmF0aW9uWydzaG9ydC1vcHRpb24tZ3JvdXBzJ10gJiYgYXJnLm1hdGNoKC9eLVteLV0rLykpKSB7XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0tPyguKykvKTtcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gbVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IGZvcm1hdCA9ICctLWZvbyBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlYXRBcnJheShpLCBrZXksIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctLWZvbyBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSB0cnV0aHkgZXZlbiBpZjogZmxhZ3MubmFyZ3Nba2V5XSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICghbmV4dC5tYXRjaCgvXi0vKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQubWF0Y2gobmVnYXRpdmUpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9eKHRydWV8ZmFsc2UpJC8udGVzdChuZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb3Qtbm90YXRpb24gZmxhZyBzZXBhcmF0ZWQgYnkgJz0nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnLm1hdGNoKC9eLS5cXC4uKz0vKSkge1xuICAgICAgICAgICAgICAgIG0gPSBhcmcubWF0Y2goL14tKFtePV0rKT0oW1xcc1xcU10qKSQvKTtcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXJnKG1bMV0sIG1bMl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb3Qtbm90YXRpb24gZmxhZyBzZXBhcmF0ZWQgYnkgc3BhY2UuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLlxcLi4rLykgJiYgIWFyZy5tYXRjaChuZWdhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0oLlxcLi4rKS8pO1xuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsICYmIEFycmF5LmlzQXJyYXkobSkgJiYgbS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBtWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICFuZXh0Lm1hdGNoKC9eLS8pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBkZWZhdWx0VmFsdWUoa2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tW14tXSsvKSAmJiAhYXJnLm1hdGNoKG5lZ2F0aXZlKSkge1xuICAgICAgICAgICAgICAgIGxldHRlcnMgPSBhcmcuc2xpY2UoMSwgLTEpLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBicm9rZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxldHRlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGFyZy5zbGljZShqICsgMik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJzW2ogKyAxXSAmJiBsZXR0ZXJzW2ogKyAxXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyZy5zbGljZShqICsgMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBsZXR0ZXJzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnJheSBmb3JtYXQgPSAnLWY9YSBiIGMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIGtleSwgYXJncywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctZj1tb25rZXkgd2FzaGluZyBjYXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIGtleSwgYXJncywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgbGV0dGVyIGlzIGFuIGFscGhhYmV0aWMgY2hhcmFjdGVyIGFuZCBuZXh0IHZhbHVlIGlzIGEgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIGlmICgvW0EtWmEtel0vLnRlc3QobGV0dGVyc1tqXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC9eLT9cXGQrKFxcLlxcZCopPyhlLT9cXGQrKT8kLy50ZXN0KG5leHQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0FsbEFsaWFzZXMobmV4dCwgZmxhZ3MuYm9vbHMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJzW2ogKyAxXSAmJiBsZXR0ZXJzW2ogKyAxXS5tYXRjaCgvXFxXLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBkZWZhdWx0VmFsdWUobGV0dGVyc1tqXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGtleSA9IGFyZy5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICAgICAgaWYgKCFicm9rZW4gJiYga2V5ICE9PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IGZvcm1hdCA9ICctZiBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlYXRBcnJheShpLCBrZXksIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctZiBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSB0cnV0aHkgZXZlbiBpZjogZmxhZ3MubmFyZ3Nba2V5XSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICghL14oLXwtLSlbXi1dLy50ZXN0KG5leHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5tYXRjaChuZWdhdGl2ZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL14odHJ1ZXxmYWxzZSkkLy50ZXN0KG5leHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgZGVmYXVsdFZhbHVlKGtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnLm1hdGNoKC9eLVswLTldJC8pICYmXG4gICAgICAgICAgICAgICAgYXJnLm1hdGNoKG5lZ2F0aXZlKSAmJlxuICAgICAgICAgICAgICAgIGNoZWNrQWxsQWxpYXNlcyhhcmcuc2xpY2UoMSksIGZsYWdzLmJvb2xzKSkge1xuICAgICAgICAgICAgICAgIC8vIHNpbmdsZS1kaWdpdCBib29sZWFuIGFsaWFzLCBlLmc6IHhhcmdzIC0wXG4gICAgICAgICAgICAgICAga2V5ID0gYXJnLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZyA9PT0gJy0tJykge1xuICAgICAgICAgICAgICAgIG5vdEZsYWdzID0gYXJncy5zbGljZShpICsgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb25maWd1cmF0aW9uWydoYWx0LWF0LW5vbi1vcHRpb24nXSkge1xuICAgICAgICAgICAgICAgIG5vdEZsYWdzID0gYXJncy5zbGljZShpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHB1c2hQb3NpdGlvbmFsKGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3JkZXIgb2YgcHJlY2VkZW5jZTpcbiAgICAgICAgLy8gMS4gY29tbWFuZCBsaW5lIGFyZ1xuICAgICAgICAvLyAyLiB2YWx1ZSBmcm9tIGVudiB2YXJcbiAgICAgICAgLy8gMy4gdmFsdWUgZnJvbSBjb25maWcgZmlsZVxuICAgICAgICAvLyA0LiB2YWx1ZSBmcm9tIGNvbmZpZyBvYmplY3RzXG4gICAgICAgIC8vIDUuIGNvbmZpZ3VyZWQgZGVmYXVsdCB2YWx1ZVxuICAgICAgICBhcHBseUVudlZhcnMoYXJndiwgdHJ1ZSk7IC8vIHNwZWNpYWwgY2FzZTogY2hlY2sgZW52IHZhcnMgdGhhdCBwb2ludCB0byBjb25maWcgZmlsZVxuICAgICAgICBhcHBseUVudlZhcnMoYXJndiwgZmFsc2UpO1xuICAgICAgICBzZXRDb25maWcoYXJndik7XG4gICAgICAgIHNldENvbmZpZ09iamVjdHMoKTtcbiAgICAgICAgYXBwbHlEZWZhdWx0c0FuZEFsaWFzZXMoYXJndiwgZmxhZ3MuYWxpYXNlcywgZGVmYXVsdHMsIHRydWUpO1xuICAgICAgICBhcHBseUNvZXJjaW9ucyhhcmd2KTtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bJ3NldC1wbGFjZWhvbGRlci1rZXknXSlcbiAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyS2V5cyhhcmd2KTtcbiAgICAgICAgLy8gZm9yIGFueSBjb3VudHMgZWl0aGVyIG5vdCBpbiBhcmdzIG9yIHdpdGhvdXQgYW4gZXhwbGljaXQgZGVmYXVsdCwgc2V0IHRvIDBcbiAgICAgICAgT2JqZWN0LmtleXMoZmxhZ3MuY291bnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICghaGFzS2V5KGFyZ3YsIGtleS5zcGxpdCgnLicpKSlcbiAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vICctLScgZGVmYXVsdHMgdG8gdW5kZWZpbmVkLlxuICAgICAgICBpZiAobm90RmxhZ3NPcHRpb24gJiYgbm90RmxhZ3MubGVuZ3RoKVxuICAgICAgICAgICAgYXJndltub3RGbGFnc0FyZ3ZdID0gW107XG4gICAgICAgIG5vdEZsYWdzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgYXJndltub3RGbGFnc0FyZ3ZdLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddICYmIGNvbmZpZ3VyYXRpb25bJ3N0cmlwLWRhc2hlZCddKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJy0tJyAmJiBrZXkuaW5jbHVkZXMoJy0nKSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcmd2W2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnc3RyaXAtYWxpYXNlZCddKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBbXS5jb25jYXQoLi4uT2JqZWN0LmtleXMoYWxpYXNlcykubWFwKGsgPT4gYWxpYXNlc1trXSkpLmZvckVhY2goYWxpYXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddICYmIGFsaWFzLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFyZ3ZbYWxpYXMuc3BsaXQoJy4nKS5tYXAocHJvcCA9PiBjYW1lbENhc2UocHJvcCkpLmpvaW4oJy4nKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcmd2W2FsaWFzXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFB1c2ggYXJndW1lbnQgaW50byBwb3NpdGlvbmFsIGFycmF5LCBhcHBseWluZyBudW1lcmljIGNvZXJjaW9uOlxuICAgICAgICBmdW5jdGlvbiBwdXNoUG9zaXRpb25hbChhcmcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heWJlQ29lcmNlZE51bWJlciA9IG1heWJlQ29lcmNlTnVtYmVyKCdfJywgYXJnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWF5YmVDb2VyY2VkTnVtYmVyID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWF5YmVDb2VyY2VkTnVtYmVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGFyZ3YuXy5wdXNoKG1heWJlQ29lcmNlZE51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaG93IG1hbnkgYXJndW1lbnRzIHNob3VsZCB3ZSBjb25zdW1lLCBiYXNlZFxuICAgICAgICAvLyBvbiB0aGUgbmFyZ3Mgb3B0aW9uP1xuICAgICAgICBmdW5jdGlvbiBlYXROYXJncyhpLCBrZXksIGFyZ3MsIGFyZ0FmdGVyRXF1YWxTaWduKSB7XG4gICAgICAgICAgICBsZXQgaWk7XG4gICAgICAgICAgICBsZXQgdG9FYXQgPSBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncyk7XG4gICAgICAgICAgICAvLyBOYU4gaGFzIGEgc3BlY2lhbCBtZWFuaW5nIGZvciB0aGUgYXJyYXkgdHlwZSwgaW5kaWNhdGluZyB0aGF0IG9uZSBvclxuICAgICAgICAgICAgLy8gbW9yZSB2YWx1ZXMgYXJlIGV4cGVjdGVkLlxuICAgICAgICAgICAgdG9FYXQgPSB0eXBlb2YgdG9FYXQgIT09ICdudW1iZXInIHx8IGlzTmFOKHRvRWF0KSA/IDEgOiB0b0VhdDtcbiAgICAgICAgICAgIGlmICh0b0VhdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ0FyZ3VtZW50IHVuZXhwZWN0ZWQgZm9yOiAlcycsIGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBkZWZhdWx0VmFsdWUoa2V5KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlID0gaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pID8gMCA6IDE7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnbmFyZ3MtZWF0cy1vcHRpb25zJ10pIHtcbiAgICAgICAgICAgICAgICAvLyBjbGFzc2ljIGJlaGF2aW9yLCB5YXJncyBlYXRzIHBvc2l0aW9uYWwgYW5kIGRhc2ggYXJndW1lbnRzLlxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCAtIChpICsgMSkgKyBhdmFpbGFibGUgPCB0b0VhdCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyBmb2xsb3dpbmc6ICVzJywga2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZSA9IHRvRWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbmFyZ3Mgd2lsbCBub3QgY29uc3VtZSBmbGFnIGFyZ3VtZW50cywgZS5nLiwgLWFiYywgLS1mb28sXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRlcm1pbmF0ZXMgd2hlbiBvbmUgaXMgb2JzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgZm9yIChpaSA9IGkgKyAxOyBpaSA8IGFyZ3MubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJnc1tpaV0ubWF0Y2goL14tW14wLTldLykgfHwgYXJnc1tpaV0ubWF0Y2gobmVnYXRpdmUpIHx8IGlzVW5rbm93bk9wdGlvbkFzQXJnKGFyZ3NbaWldKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSsrO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSA8IHRvRWF0KVxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyBmb2xsb3dpbmc6ICVzJywga2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29uc3VtZWQgPSBNYXRoLm1pbihhdmFpbGFibGUsIHRvRWF0KTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pICYmIGNvbnN1bWVkID4gMCkge1xuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGFyZ0FmdGVyRXF1YWxTaWduKTtcbiAgICAgICAgICAgICAgICBjb25zdW1lZC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpaSA9IGkgKyAxOyBpaSA8IChjb25zdW1lZCArIGkgKyAxKTsgaWkrKykge1xuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGFyZ3NbaWldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoaSArIGNvbnN1bWVkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBhbiBvcHRpb24gaXMgYW4gYXJyYXksIGVhdCBhbGwgbm9uLWh5cGhlbmF0ZWQgYXJndW1lbnRzXG4gICAgICAgIC8vIGZvbGxvd2luZyBpdC4uLiBZVU0hXG4gICAgICAgIC8vIGUuZy4sIC0tZm9vIGFwcGxlIGJhbmFuYSBjYXQgYmVjb21lcyBbXCJhcHBsZVwiLCBcImJhbmFuYVwiLCBcImNhdFwiXVxuICAgICAgICBmdW5jdGlvbiBlYXRBcnJheShpLCBrZXksIGFyZ3MsIGFyZ0FmdGVyRXF1YWxTaWduKSB7XG4gICAgICAgICAgICBsZXQgYXJnc1RvU2V0ID0gW107XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGFyZ0FmdGVyRXF1YWxTaWduIHx8IGFyZ3NbaSArIDFdO1xuICAgICAgICAgICAgLy8gSWYgYm90aCBhcnJheSBhbmQgbmFyZ3MgYXJlIGNvbmZpZ3VyZWQsIGVuZm9yY2UgdGhlIG5hcmdzIGNvdW50OlxuICAgICAgICAgICAgY29uc3QgbmFyZ3NDb3VudCA9IGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKTtcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiYgISgvXih0cnVlfGZhbHNlKSQvLnRlc3QobmV4dCkpKSB7XG4gICAgICAgICAgICAgICAgYXJnc1RvU2V0LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1VuZGVmaW5lZChuZXh0KSB8fFxuICAgICAgICAgICAgICAgIChpc1VuZGVmaW5lZChhcmdBZnRlckVxdWFsU2lnbikgJiYgL14tLy50ZXN0KG5leHQpICYmICFuZWdhdGl2ZS50ZXN0KG5leHQpICYmICFpc1Vua25vd25PcHRpb25Bc0FyZyhuZXh0KSkpIHtcbiAgICAgICAgICAgICAgICAvLyBmb3Iga2V5cyB3aXRob3V0IHZhbHVlID09PiBhcmdzVG9TZXQgcmVtYWlucyBhbiBlbXB0eSBbXVxuICAgICAgICAgICAgICAgIC8vIHNldCB1c2VyIGRlZmF1bHQgdmFsdWUsIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0c1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmVmFsID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1RvU2V0ID0gQXJyYXkuaXNBcnJheShkZWZWYWwpID8gZGVmVmFsIDogW2RlZlZhbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdmFsdWUgaW4gLS1vcHRpb249dmFsdWUgaXMgZWF0ZW4gYXMgaXNcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGFyZ0FmdGVyRXF1YWxTaWduKSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzVG9TZXQucHVzaChwcm9jZXNzVmFsdWUoa2V5LCBhcmdBZnRlckVxdWFsU2lnbiwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpaSA9IGkgKyAxOyBpaSA8IGFyZ3MubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoIWNvbmZpZ3VyYXRpb25bJ2dyZWVkeS1hcnJheXMnXSAmJiBhcmdzVG9TZXQubGVuZ3RoID4gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChuYXJnc0NvdW50ICYmIHR5cGVvZiBuYXJnc0NvdW50ID09PSAnbnVtYmVyJyAmJiBhcmdzVG9TZXQubGVuZ3RoID49IG5hcmdzQ291bnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBhcmdzW2lpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eLS8udGVzdChuZXh0KSAmJiAhbmVnYXRpdmUudGVzdChuZXh0KSAmJiAhaXNVbmtub3duT3B0aW9uQXNBcmcobmV4dCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgaSA9IGlpO1xuICAgICAgICAgICAgICAgICAgICBhcmdzVG9TZXQucHVzaChwcm9jZXNzVmFsdWUoa2V5LCBuZXh0LCBpbnB1dElzU3RyaW5nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYm90aCBhcnJheSBhbmQgbmFyZ3MgYXJlIGNvbmZpZ3VyZWQsIGNyZWF0ZSBhbiBlcnJvciBpZiBsZXNzIHRoYW5cbiAgICAgICAgICAgIC8vIG5hcmdzIHBvc2l0aW9uYWxzIHdlcmUgZm91bmQuIE5hTiBoYXMgc3BlY2lhbCBtZWFuaW5nLCBpbmRpY2F0aW5nXG4gICAgICAgICAgICAvLyB0aGF0IGF0IGxlYXN0IG9uZSB2YWx1ZSBpcyByZXF1aXJlZCAobW9yZSBhcmUgb2theSkuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5hcmdzQ291bnQgPT09ICdudW1iZXInICYmICgobmFyZ3NDb3VudCAmJiBhcmdzVG9TZXQubGVuZ3RoIDwgbmFyZ3NDb3VudCkgfHxcbiAgICAgICAgICAgICAgICAoaXNOYU4obmFyZ3NDb3VudCkgJiYgYXJnc1RvU2V0Lmxlbmd0aCA9PT0gMCkpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnTm90IGVub3VnaCBhcmd1bWVudHMgZm9sbG93aW5nOiAlcycsIGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0QXJnKGtleSwgYXJnc1RvU2V0KTtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldEFyZyhrZXksIHZhbCwgc2hvdWxkU3RyaXBRdW90ZXMgPSBpbnB1dElzU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoLy0vLnRlc3Qoa2V5KSAmJiBjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxpYXMgPSBrZXkuc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbWVsQ2FzZShwcm9wKTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgYWRkTmV3QWxpYXMoa2V5LCBhbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHByb2Nlc3NWYWx1ZShrZXksIHZhbCwgc2hvdWxkU3RyaXBRdW90ZXMpO1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRLZXkgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIHNldEtleShhcmd2LCBzcGxpdEtleSwgdmFsdWUpO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHBvcHVsYXRpbmcgYWxpYXNlcyBvZiB0aGUgZnVsbCBrZXlcbiAgICAgICAgICAgIGlmIChmbGFncy5hbGlhc2VzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlQcm9wZXJ0aWVzID0geC5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICBzZXRLZXkoYXJndiwga2V5UHJvcGVydGllcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIHBvcHVsYXRpbmcgYWxpYXNlcyBvZiB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgZG90LW5vdGF0aW9uIGtleVxuICAgICAgICAgICAgaWYgKHNwbGl0S2V5Lmxlbmd0aCA+IDEgJiYgY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pIHtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgKGZsYWdzLmFsaWFzZXNbc3BsaXRLZXlbMF1dIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlQcm9wZXJ0aWVzID0geC5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBleHBhbmQgYWxpYXMgd2l0aCBuZXN0ZWQgb2JqZWN0cyBpbiBrZXlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IFtdLmNvbmNhdChzcGxpdEtleSk7XG4gICAgICAgICAgICAgICAgICAgIGEuc2hpZnQoKTsgLy8gbnVrZSB0aGUgb2xkIGtleS5cbiAgICAgICAgICAgICAgICAgICAga2V5UHJvcGVydGllcyA9IGtleVByb3BlcnRpZXMuY29uY2F0KGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3B1bGF0ZSBhbGlhcyBvbmx5IGlmIGlzIG5vdCBhbHJlYWR5IGFuIGFsaWFzIG9mIHRoZSBmdWxsIGtleVxuICAgICAgICAgICAgICAgICAgICAvLyAoYWxyZWFkeSBwb3B1bGF0ZWQgYWJvdmUpXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSkuaW5jbHVkZXMoa2V5UHJvcGVydGllcy5qb2luKCcuJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoYXJndiwga2V5UHJvcGVydGllcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgbm9ybWFsaXplIGdldHRlciBhbmQgc2V0dGVyIHdoZW4ga2V5IGlzIGluICdub3JtYWxpemUnIGJ1dCBpc24ndCBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5vcm1hbGl6ZSkgJiYgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gW2tleV0uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSk7XG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3ZSZXR1cm4sIGtleSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBtaXhpbi5ub3JtYWxpemUodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZE5ld0FsaWFzKGtleSwgYWxpYXMpIHtcbiAgICAgICAgICAgIGlmICghKGZsYWdzLmFsaWFzZXNba2V5XSAmJiBmbGFncy5hbGlhc2VzW2tleV0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XSA9IFthbGlhc107XG4gICAgICAgICAgICAgICAgbmV3QWxpYXNlc1thbGlhc10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEoZmxhZ3MuYWxpYXNlc1thbGlhc10gJiYgZmxhZ3MuYWxpYXNlc1thbGlhc10ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGFkZE5ld0FsaWFzKGFsaWFzLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NWYWx1ZShrZXksIHZhbCwgc2hvdWxkU3RyaXBRdW90ZXMpIHtcbiAgICAgICAgICAgIC8vIHN0cmluZ3MgbWF5IGJlIHF1b3RlZCwgY2xlYW4gdGhpcyB1cCBhcyB3ZSBhc3NpZ24gdmFsdWVzLlxuICAgICAgICAgICAgaWYgKHNob3VsZFN0cmlwUXVvdGVzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gc3RyaXBRdW90ZXModmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwYXJzaW5nIGJvb2xlYW4gYXJndW1lbnRzIC0tZm9vPXRydWUgLS1iYXIgZmFsc2UuXG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpIHx8IGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmNvdW50cykpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbCA9PT0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWwpXG4gICAgICAgICAgICAgICAgPyB2YWwubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBtYXliZUNvZXJjZU51bWJlcihrZXksIHYpOyB9KVxuICAgICAgICAgICAgICAgIDogbWF5YmVDb2VyY2VOdW1iZXIoa2V5LCB2YWwpO1xuICAgICAgICAgICAgLy8gaW5jcmVtZW50IGEgY291bnQgZ2l2ZW4gYXMgYXJnIChlaXRoZXIgbm8gdmFsdWUgb3IgdmFsdWUgcGFyc2VkIGFzIGJvb2xlYW4pXG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSAmJiAoaXNVbmRlZmluZWQodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gaW5jcmVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgbm9ybWFsaXplZCB2YWx1ZSB3aGVuIGtleSBpcyBpbiAnbm9ybWFsaXplJyBhbmQgaW4gJ2FycmF5cydcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ub3JtYWxpemUpICYmIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbC5tYXAoKHZhbCkgPT4geyByZXR1cm4gbWl4aW4ubm9ybWFsaXplKHZhbCk7IH0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtaXhpbi5ub3JtYWxpemUodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXliZUNvZXJjZU51bWJlcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ3VyYXRpb25bJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyddICYmIGtleSA9PT0gJ18nKVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGlmICghY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3Muc3RyaW5ncykgJiYgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRDb2VyY2VOdW1iZXIgPSBsb29rc0xpa2VOdW1iZXIodmFsdWUpICYmIGNvbmZpZ3VyYXRpb25bJ3BhcnNlLW51bWJlcnMnXSAmJiAoTnVtYmVyLmlzU2FmZUludGVnZXIoTWF0aC5mbG9vcihwYXJzZUZsb2F0KGAke3ZhbHVlfWApKSkpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRDb2VyY2VOdW1iZXIgfHwgKCFpc1VuZGVmaW5lZCh2YWx1ZSkgJiYgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubnVtYmVycykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGFyZ3MgZnJvbSBjb25maWcuanNvbiBmaWxlLCB0aGlzIHNob3VsZCBiZVxuICAgICAgICAvLyBhcHBsaWVkIGxhc3Qgc28gdGhhdCBkZWZhdWx0cyBjYW4gYmUgYXBwbGllZC5cbiAgICAgICAgZnVuY3Rpb24gc2V0Q29uZmlnKGFyZ3YpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0xvb2t1cCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAvLyBleHBhbmQgZGVmYXVsdHMvYWxpYXNlcywgaW4tY2FzZSBhbnkgaGFwcGVuIHRvIHJlZmVyZW5jZVxuICAgICAgICAgICAgLy8gdGhlIGNvbmZpZy5qc29uIGZpbGUuXG4gICAgICAgICAgICBhcHBseURlZmF1bHRzQW5kQWxpYXNlcyhjb25maWdMb29rdXAsIGZsYWdzLmFsaWFzZXMsIGRlZmF1bHRzKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZsYWdzLmNvbmZpZ3MpLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZ0tleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBhcmd2W2NvbmZpZ0tleV0gfHwgY29uZmlnTG9va3VwW2NvbmZpZ0tleV07XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRDb25maWdQYXRoID0gbWl4aW4ucmVzb2x2ZShtaXhpbi5jd2QoKSwgY29uZmlnUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlQ29uZmlnID0gZmxhZ3MuY29uZmlnc1tjb25maWdLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvbHZlQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gcmVzb2x2ZUNvbmZpZyhyZXNvbHZlZENvbmZpZ1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBjb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBtaXhpbi5yZXF1aXJlKHJlc29sdmVkQ29uZmlnUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maWdPYmplY3QoY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbm8gd2lsbCByZWNlaXZlIGEgUGVybWlzc2lvbkRlbmllZCBlcnJvciBpZiBhbiBhdHRlbXB0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWRlIHRvIGxvYWQgY29uZmlnIHdpdGhvdXQgdGhlIC0tYWxsb3ctcmVhZCBmbGFnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09ICdQZXJtaXNzaW9uRGVuaWVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJndltjb25maWdLZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ0ludmFsaWQgSlNPTiBjb25maWcgZmlsZTogJXMnLCBjb25maWdQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgYXJncyBmcm9tIGNvbmZpZyBvYmplY3QuXG4gICAgICAgIC8vIGl0IHJlY3Vyc2l2ZWx5IGNoZWNrcyBuZXN0ZWQgb2JqZWN0cy5cbiAgICAgICAgZnVuY3Rpb24gc2V0Q29uZmlnT2JqZWN0KGNvbmZpZywgcHJldikge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxLZXkgPSBwcmV2ID8gcHJldiArICcuJyArIGtleSA6IGtleTtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYW4gaW5uZXIgb2JqZWN0IGFuZCB3ZSBoYXZlIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgICAgIC8vIGVuYWJsZWQsIHRyZWF0IGlubmVyIG9iamVjdHMgaW4gY29uZmlnIHRoZSBzYW1lIGFzXG4gICAgICAgICAgICAgICAgLy8gaGVhdmlseSBuZXN0ZWQgZG90IG5vdGF0aW9ucyAoZm9vLmJhci5hcHBsZSkuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIGNvbmZpZ3VyYXRpb25bJ2RvdC1ub3RhdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QgYnV0IG5vdCBhbiBhcnJheSwgY2hlY2sgbmVzdGVkIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBzZXRDb25maWdPYmplY3QodmFsdWUsIGZ1bGxLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZyBhcmd1bWVudHMgdmlhIENMSSB0YWtlcyBwcmVjZWRlbmNlIG92ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVzIHdpdGhpbiB0aGUgY29uZmlnIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzS2V5KGFyZ3YsIGZ1bGxLZXkuc3BsaXQoJy4nKSkgfHwgKGNoZWNrQWxsQWxpYXNlcyhmdWxsS2V5LCBmbGFncy5hcnJheXMpICYmIGNvbmZpZ3VyYXRpb25bJ2NvbWJpbmUtYXJyYXlzJ10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoZnVsbEtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGFsbCBjb25maWcgb2JqZWN0cyBwYXNzZWQgaW4gb3B0c1xuICAgICAgICBmdW5jdGlvbiBzZXRDb25maWdPYmplY3RzKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWdPYmplY3RzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbmZpZ09iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpZ09iamVjdChjb25maWdPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5RW52VmFycyhhcmd2LCBjb25maWdPbmx5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudlByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gdHlwZW9mIGVudlByZWZpeCA9PT0gJ3N0cmluZycgPyBlbnZQcmVmaXggOiAnJztcbiAgICAgICAgICAgIGNvbnN0IGVudiA9IG1peGluLmVudigpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGZ1bmN0aW9uIChlbnZWYXIpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4ID09PSAnJyB8fCBlbnZWYXIubGFzdEluZGV4T2YocHJlZml4LCAwKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgYXJyYXkgb2YgbmVzdGVkIGtleXMgYW5kIGNvbnZlcnQgdGhlbSB0byBjYW1lbCBjYXNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBlbnZWYXIuc3BsaXQoJ19fJykubWFwKGZ1bmN0aW9uIChrZXksIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW1lbENhc2Uoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKGNvbmZpZ09ubHkgJiYgZmxhZ3MuY29uZmlnc1trZXlzLmpvaW4oJy4nKV0pIHx8ICFjb25maWdPbmx5KSAmJiAhaGFzS2V5KGFyZ3YsIGtleXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5cy5qb2luKCcuJyksIGVudltlbnZWYXJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5Q29lcmNpb25zKGFyZ3YpIHtcbiAgICAgICAgICAgIGxldCBjb2VyY2U7XG4gICAgICAgICAgICBjb25zdCBhcHBsaWVkID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhcHBsaWVkLmhhcyhrZXkpKSB7IC8vIElmIHdlIGhhdmVuJ3QgYWxyZWFkeSBjb2VyY2VkIHRoaXMgb3B0aW9uIHZpYSBvbmUgb2YgaXRzIGFsaWFzZXNcbiAgICAgICAgICAgICAgICAgICAgY29lcmNlID0gY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY29lcmNpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtYXliZUNvZXJjZU51bWJlcihrZXksIGNvZXJjZShhcmd2W2tleV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW10uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSwga2V5KSkuZm9yRWFjaChhbGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkLmFkZChhbGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd2W2FsaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldFBsYWNlaG9sZGVyS2V5cyhhcmd2KSB7XG4gICAgICAgICAgICBmbGFncy5rZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IHNldCBwbGFjZWhvbGRlciBrZXlzIGZvciBkb3Qgbm90YXRpb24gb3B0aW9ucyAnZm9vLmJhcicuXG4gICAgICAgICAgICAgICAgaWYgKH5rZXkuaW5kZXhPZignLicpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd2W2tleV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICBhcmd2W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5RGVmYXVsdHNBbmRBbGlhc2VzKG9iaiwgYWxpYXNlcywgZGVmYXVsdHMsIGNhbkxvZyA9IGZhbHNlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkZWZhdWx0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNLZXkob2JqLCBrZXkuc3BsaXQoJy4nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0S2V5KG9iaiwga2V5LnNwbGl0KCcuJyksIGRlZmF1bHRzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuTG9nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdGVkW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAoYWxpYXNlc1trZXldIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzS2V5KG9iaiwgeC5zcGxpdCgnLicpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkob2JqLCB4LnNwbGl0KCcuJyksIGRlZmF1bHRzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYXNLZXkob2JqLCBrZXlzKSB7XG4gICAgICAgICAgICBsZXQgbyA9IG9iajtcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pXG4gICAgICAgICAgICAgICAga2V5cyA9IFtrZXlzLmpvaW4oJy4nKV07XG4gICAgICAgICAgICBrZXlzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBvID0gKG9ba2V5XSB8fCB7fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNba2V5cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXkgaW4gbztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXRLZXkob2JqLCBrZXlzLCB2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG8gPSBvYmo7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ3VyYXRpb25bJ2RvdC1ub3RhdGlvbiddKVxuICAgICAgICAgICAgICAgIGtleXMgPSBba2V5cy5qb2luKCcuJyldO1xuICAgICAgICAgICAga2V5cy5zbGljZSgwLCAtMSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyhiY29lKTogaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiB5YXJncywgc3dpdGNoIHRvXG4gICAgICAgICAgICAgICAgLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBmb3IgZG90IG5vdGF0aW9uOlxuICAgICAgICAgICAgICAgIGtleSA9IHNhbml0aXplS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvW2tleV0gIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhhdCBvW2tleV0gaXMgYW4gYXJyYXksIGFuZCB0aGF0IHRoZSBsYXN0IGl0ZW0gaXMgYW4gZW1wdHkgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW2tleV0ucHVzaCh7fSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSBbb1trZXldLCB7fV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0byB1cGRhdGUgdGhlIGVtcHR5IG9iamVjdCBhdCB0aGUgZW5kIG9mIHRoZSBvW2tleV0gYXJyYXksIHNvIHNldCBvIHRvIHRoYXQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIG8gPSBvW2tleV1bb1trZXldLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbyA9IG9ba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRPRE8oYmNvZSk6IGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgeWFyZ3MsIHN3aXRjaCB0b1xuICAgICAgICAgICAgLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBmb3IgZG90IG5vdGF0aW9uOlxuICAgICAgICAgICAgY29uc3Qga2V5ID0gc2FuaXRpemVLZXkoa2V5c1trZXlzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIGNvbnN0IGlzVHlwZUFycmF5ID0gY2hlY2tBbGxBbGlhc2VzKGtleXMuam9pbignLicpLCBmbGFncy5hcnJheXMpO1xuICAgICAgICAgICAgY29uc3QgaXNWYWx1ZUFycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgICBsZXQgZHVwbGljYXRlID0gY29uZmlndXJhdGlvblsnZHVwbGljYXRlLWFyZ3VtZW50cy1hcnJheSddO1xuICAgICAgICAgICAgLy8gbmFyZ3MgaGFzIGhpZ2hlciBwcmlvcml0eSB0aGFuIGR1cGxpY2F0ZVxuICAgICAgICAgICAgaWYgKCFkdXBsaWNhdGUgJiYgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoKCFpc1VuZGVmaW5lZChvW2tleV0pICYmIGZsYWdzLm5hcmdzW2tleV0gPT09IDEpIHx8IChBcnJheS5pc0FycmF5KG9ba2V5XSkgJiYgb1trZXldLmxlbmd0aCA9PT0gZmxhZ3MubmFyZ3Nba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gaW5jcmVtZW50KCkpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBpbmNyZW1lbnQob1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob1trZXldKSkge1xuICAgICAgICAgICAgICAgIGlmIChkdXBsaWNhdGUgJiYgaXNUeXBlQXJyYXkgJiYgaXNWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IGNvbmZpZ3VyYXRpb25bJ2ZsYXR0ZW4tZHVwbGljYXRlLWFycmF5cyddID8gb1trZXldLmNvbmNhdCh2YWx1ZSkgOiAoQXJyYXkuaXNBcnJheShvW2tleV1bMF0pID8gb1trZXldIDogW29ba2V5XV0pLmNvbmNhdChbdmFsdWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWR1cGxpY2F0ZSAmJiBCb29sZWFuKGlzVHlwZUFycmF5KSA9PT0gQm9vbGVhbihpc1ZhbHVlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gb1trZXldLmNvbmNhdChbdmFsdWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvW2tleV0gPT09IHVuZGVmaW5lZCAmJiBpc1R5cGVBcnJheSkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IGlzVmFsdWVBcnJheSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGR1cGxpY2F0ZSAmJiAhKG9ba2V5XSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSB8fFxuICAgICAgICAgICAgICAgIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSkpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBbb1trZXldLCB2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBleHRlbmQgdGhlIGFsaWFzZXMgbGlzdCB3aXRoIGluZmVycmVkIGFsaWFzZXMuXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZEFsaWFzZXMoLi4uYXJncykge1xuICAgICAgICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvYmogfHwge30pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG9ydC1jaXJjdWl0IGlmIHdlJ3ZlIGFscmVhZHkgYWRkZWQgYSBrZXlcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gdGhlIGFsaWFzZXMgYXJyYXksIGZvciBleGFtcGxlIGl0IG1pZ2h0XG4gICAgICAgICAgICAgICAgICAgIC8vIGV4aXN0IGluIGJvdGggJ29wdHMuZGVmYXVsdCcgYW5kICdvcHRzLmtleScuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFncy5hbGlhc2VzW2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XSA9IFtdLmNvbmNhdChhbGlhc2VzW2tleV0gfHwgW10pO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgXCItLW9wdGlvbi1uYW1lXCIsIGFsc28gc2V0IGFyZ3Yub3B0aW9uTmFtZVxuICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0uY29uY2F0KGtleSkuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC8tLy50ZXN0KHgpICYmIGNvbmZpZ3VyYXRpb25bJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gY2FtZWxDYXNlKHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjICE9PSBrZXkgJiYgZmxhZ3MuYWxpYXNlc1trZXldLmluZGV4T2YoYykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBbGlhc2VzW2NdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgXCItLW9wdGlvbk5hbWVcIiwgYWxzbyBzZXQgYXJndlsnb3B0aW9uLW5hbWUnXVxuICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0uY29uY2F0KGtleSkuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHgubGVuZ3RoID4gMSAmJiAvW0EtWl0vLnRlc3QoeCkgJiYgY29uZmlndXJhdGlvblsnY2FtZWwtY2FzZS1leHBhbnNpb24nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBkZWNhbWVsaXplKHgsICctJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IGtleSAmJiBmbGFncy5hbGlhc2VzW2tleV0uaW5kZXhPZihjKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FsaWFzZXNbY10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW3hdID0gW2tleV0uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XS5maWx0ZXIoZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geCAhPT0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFnKSB7XG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gW10uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSwga2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmbGFnKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEFsaWFzID0gdG9DaGVjay5maW5kKGtleSA9PiBrZXlzLmluY2x1ZGVzKGtleSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNldEFsaWFzID8gZmxhZ1tzZXRBbGlhc10gOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYXNBbnlGbGFnKGtleSkge1xuICAgICAgICAgICAgY29uc3QgZmxhZ3NLZXlzID0gT2JqZWN0LmtleXMoZmxhZ3MpO1xuICAgICAgICAgICAgY29uc3QgdG9DaGVjayA9IFtdLmNvbmNhdChmbGFnc0tleXMubWFwKGsgPT4gZmxhZ3Nba10pKTtcbiAgICAgICAgICAgIHJldHVybiB0b0NoZWNrLnNvbWUoZnVuY3Rpb24gKGZsYWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShmbGFnKSA/IGZsYWcuaW5jbHVkZXMoa2V5KSA6IGZsYWdba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhc0ZsYWdzTWF0Y2hpbmcoYXJnLCAuLi5wYXR0ZXJucykge1xuICAgICAgICAgICAgY29uc3QgdG9DaGVjayA9IFtdLmNvbmNhdCguLi5wYXR0ZXJucyk7XG4gICAgICAgICAgICByZXR1cm4gdG9DaGVjay5zb21lKGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBhcmcubWF0Y2gocGF0dGVybik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoICYmIGhhc0FueUZsYWcobWF0Y2hbMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFzZWQgb24gYSBzaW1wbGlmaWVkIHZlcnNpb24gb2YgdGhlIHNob3J0IGZsYWcgZ3JvdXAgcGFyc2luZyBsb2dpY1xuICAgICAgICBmdW5jdGlvbiBoYXNBbGxTaG9ydEZsYWdzKGFyZykge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIG5lZ2F0aXZlIG51bWJlciwgb3IgZG9lc24ndCBzdGFydCB3aXRoIGEgc2luZ2xlIGh5cGhlbiwgaXQncyBub3QgYSBzaG9ydCBmbGFnIGdyb3VwXG4gICAgICAgICAgICBpZiAoYXJnLm1hdGNoKG5lZ2F0aXZlKSB8fCAhYXJnLm1hdGNoKC9eLVteLV0rLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaGFzQWxsRmxhZ3MgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG5leHQ7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJzID0gYXJnLnNsaWNlKDEpLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG5leHQgPSBhcmcuc2xpY2UoaiArIDIpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzQW55RmxhZyhsZXR0ZXJzW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNBbGxGbGFncyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChsZXR0ZXJzW2ogKyAxXSAmJiBsZXR0ZXJzW2ogKyAxXSA9PT0gJz0nKSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXh0ID09PSAnLScgfHxcbiAgICAgICAgICAgICAgICAgICAgKC9bQS1aYS16XS8udGVzdChsZXR0ZXJzW2pdKSAmJiAvXi0/XFxkKyhcXC5cXGQqKT8oZS0/XFxkKyk/JC8udGVzdChuZXh0KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGxldHRlcnNbaiArIDFdICYmIGxldHRlcnNbaiArIDFdLm1hdGNoKC9cXFcvKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc0FsbEZsYWdzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVW5rbm93bk9wdGlvbkFzQXJnKGFyZykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25bJ3Vua25vd24tb3B0aW9ucy1hcy1hcmdzJ10gJiYgaXNVbmtub3duT3B0aW9uKGFyZyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNVbmtub3duT3B0aW9uKGFyZykge1xuICAgICAgICAgICAgYXJnID0gYXJnLnJlcGxhY2UoL14tezMsfS8sICctLScpO1xuICAgICAgICAgICAgLy8gaWdub3JlIG5lZ2F0aXZlIG51bWJlcnNcbiAgICAgICAgICAgIGlmIChhcmcubWF0Y2gobmVnYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHNob3J0IG9wdGlvbiBncm91cCBhbmQgYWxsIG9mIHRoZW0gYXJlIGNvbmZpZ3VyZWQsIGl0IGlzbid0IHVua25vd25cbiAgICAgICAgICAgIGlmIChoYXNBbGxTaG9ydEZsYWdzKGFyZykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlLmcuICctLWNvdW50PTInXG4gICAgICAgICAgICBjb25zdCBmbGFnV2l0aEVxdWFscyA9IC9eLSsoW149XSs/KT1bXFxzXFxTXSokLztcbiAgICAgICAgICAgIC8vIGUuZy4gJy1hJyBvciAnLS1hcmcnXG4gICAgICAgICAgICBjb25zdCBub3JtYWxGbGFnID0gL14tKyhbXj1dKz8pJC87XG4gICAgICAgICAgICAvLyBlLmcuICctYS0nXG4gICAgICAgICAgICBjb25zdCBmbGFnRW5kaW5nSW5IeXBoZW4gPSAvXi0rKFtePV0rPyktJC87XG4gICAgICAgICAgICAvLyBlLmcuICctYWJjMTIzJ1xuICAgICAgICAgICAgY29uc3QgZmxhZ0VuZGluZ0luRGlnaXRzID0gL14tKyhbXj1dKz9cXGQrKSQvO1xuICAgICAgICAgICAgLy8gZS5nLiAnLWEvdXNyL2xvY2FsJ1xuICAgICAgICAgICAgY29uc3QgZmxhZ0VuZGluZ0luTm9uV29yZENoYXJhY3RlcnMgPSAvXi0rKFtePV0rPylcXFcrLiokLztcbiAgICAgICAgICAgIC8vIGNoZWNrIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgZmxhZyBzdHlsZXMsIGluY2x1ZGluZyBuZWdhdGVkQm9vbGVhbiwgYSBwYXR0ZXJuIGRlZmluZWQgbmVhciB0aGUgc3RhcnQgb2YgdGhlIHBhcnNlIG1ldGhvZFxuICAgICAgICAgICAgcmV0dXJuICFoYXNGbGFnc01hdGNoaW5nKGFyZywgZmxhZ1dpdGhFcXVhbHMsIG5lZ2F0ZWRCb29sZWFuLCBub3JtYWxGbGFnLCBmbGFnRW5kaW5nSW5IeXBoZW4sIGZsYWdFbmRpbmdJbkRpZ2l0cywgZmxhZ0VuZGluZ0luTm9uV29yZENoYXJhY3RlcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1ha2UgYSBiZXN0IGVmZm9ydCB0byBwaWNrIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAvLyBmb3IgYW4gb3B0aW9uIGJhc2VkIG9uIG5hbWUgYW5kIHR5cGUuXG4gICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZShrZXkpIHtcbiAgICAgICAgICAgIGlmICghY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmXG4gICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmNvdW50cykgJiZcbiAgICAgICAgICAgICAgICBgJHtrZXl9YCBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRGb3JUeXBlKGd1ZXNzVHlwZShrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm4gYSBkZWZhdWx0IHZhbHVlLCBnaXZlbiB0aGUgdHlwZSBvZiBhIGZsYWcuLFxuICAgICAgICBmdW5jdGlvbiBkZWZhdWx0Rm9yVHlwZSh0eXBlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWYgPSB7XG4gICAgICAgICAgICAgICAgW0RlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LkJPT0xFQU5dOiB0cnVlLFxuICAgICAgICAgICAgICAgIFtEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5TVFJJTkddOiAnJyxcbiAgICAgICAgICAgICAgICBbRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuTlVNQkVSXTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIFtEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5BUlJBWV06IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGRlZlt0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBnaXZlbiBhIGZsYWcsIGVuZm9yY2UgYSBkZWZhdWx0IHR5cGUuXG4gICAgICAgIGZ1bmN0aW9uIGd1ZXNzVHlwZShrZXkpIHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQk9PTEVBTjtcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5zdHJpbmdzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuU1RSSU5HO1xuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubnVtYmVycykpXG4gICAgICAgICAgICAgICAgdHlwZSA9IERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5Lk5VTUJFUjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQk9PTEVBTjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpXG4gICAgICAgICAgICAgICAgdHlwZSA9IERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LkFSUkFZO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNVbmRlZmluZWQobnVtKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdXNlciBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciBpbmNvbnNpc3RlbmNpZXNcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tDb25maWd1cmF0aW9uKCkge1xuICAgICAgICAgICAgLy8gY291bnQga2V5cyBzaG91bGQgbm90IGJlIHNldCBhcyBhcnJheS9uYXJnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmbGFncy5jb3VudHMpLmZpbmQoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdJbnZhbGlkIGNvbmZpZ3VyYXRpb246ICVzLCBvcHRzLmNvdW50IGV4Y2x1ZGVzIG9wdHMuYXJyYXkuJywga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncykpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnSW52YWxpZCBjb25maWd1cmF0aW9uOiAlcywgb3B0cy5jb3VudCBleGNsdWRlcyBvcHRzLm5hcmcuJywga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxpYXNlczogT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MuYWxpYXNlcyksXG4gICAgICAgICAgICBhcmd2OiBPYmplY3QuYXNzaWduKGFyZ3ZSZXR1cm4sIGFyZ3YpLFxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHRlZDogT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdGVkKSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIG5ld0FsaWFzZXM6IE9iamVjdC5hc3NpZ24oe30sIG5ld0FsaWFzZXMpXG4gICAgICAgIH07XG4gICAgfVxufVxuLy8gaWYgYW55IGFsaWFzZXMgcmVmZXJlbmNlIGVhY2ggb3RoZXIsIHdlIHNob3VsZFxuLy8gbWVyZ2UgdGhlbSB0b2dldGhlci5cbmZ1bmN0aW9uIGNvbWJpbmVBbGlhc2VzKGFsaWFzZXMpIHtcbiAgICBjb25zdCBhbGlhc0FycmF5cyA9IFtdO1xuICAgIGNvbnN0IGNvbWJpbmVkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBsZXQgY2hhbmdlID0gdHJ1ZTtcbiAgICAvLyB0dXJuIGFsaWFzIGxvb2t1cCBoYXNoIHtrZXk6IFsnYWxpYXMxJywgJ2FsaWFzMiddfSBpbnRvXG4gICAgLy8gYSBzaW1wbGUgYXJyYXkgWydrZXknLCAnYWxpYXMxJywgJ2FsaWFzMiddXG4gICAgT2JqZWN0LmtleXMoYWxpYXNlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGFsaWFzQXJyYXlzLnB1c2goW10uY29uY2F0KGFsaWFzZXNba2V5XSwga2V5KSk7XG4gICAgfSk7XG4gICAgLy8gY29tYmluZSBhcnJheXMgdW50aWwgemVybyBjaGFuZ2VzIGFyZVxuICAgIC8vIG1hZGUgaW4gYW4gaXRlcmF0aW9uLlxuICAgIHdoaWxlIChjaGFuZ2UpIHtcbiAgICAgICAgY2hhbmdlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxpYXNBcnJheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGlpID0gaSArIDE7IGlpIDwgYWxpYXNBcnJheXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0ID0gYWxpYXNBcnJheXNbaV0uZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGlhc0FycmF5c1tpaV0uaW5kZXhPZih2KSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXNBcnJheXNbaV0gPSBhbGlhc0FycmF5c1tpXS5jb25jYXQoYWxpYXNBcnJheXNbaWldKTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXNBcnJheXMuc3BsaWNlKGlpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG1hcCBhcnJheXMgYmFjayB0byB0aGUgaGFzaC1sb29rdXAgKGRlLWR1cGUgd2hpbGVcbiAgICAvLyB3ZSdyZSBhdCBpdCkuXG4gICAgYWxpYXNBcnJheXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXNBcnJheSkge1xuICAgICAgICBhbGlhc0FycmF5ID0gYWxpYXNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHYsIGksIHNlbGYpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodikgPT09IGk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsYXN0QWxpYXMgPSBhbGlhc0FycmF5LnBvcCgpO1xuICAgICAgICBpZiAobGFzdEFsaWFzICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGxhc3RBbGlhcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkW2xhc3RBbGlhc10gPSBhbGlhc0FycmF5O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufVxuLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlbiBhIGNvdW50IGlzIGdpdmVuIGFzIGFuIGFyZ1xuLy8gaXQgaXMgTk9UIGNhbGxlZCB0byBzZXQgYSBkZWZhdWx0IHZhbHVlXG4vLyB0aHVzIHdlIGNhbiBzdGFydCB0aGUgY291bnQgYXQgMSBpbnN0ZWFkIG9mIDBcbmZ1bmN0aW9uIGluY3JlbWVudChvcmlnKSB7XG4gICAgcmV0dXJuIG9yaWcgIT09IHVuZGVmaW5lZCA/IG9yaWcgKyAxIDogMTtcbn1cbi8vIFRPRE8oYmNvZSk6IGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgeWFyZ3MsIHN3aXRjaCB0b1xuLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBmb3IgZG90IG5vdGF0aW9uOlxuZnVuY3Rpb24gc2FuaXRpemVLZXkoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ19fcHJvdG9fXycpXG4gICAgICAgIHJldHVybiAnX19fcHJvdG9fX18nO1xuICAgIHJldHVybiBrZXk7XG59XG5mdW5jdGlvbiBzdHJpcFF1b3Rlcyh2YWwpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICh2YWxbMF0gPT09IFwiJ1wiIHx8IHZhbFswXSA9PT0gJ1wiJykgJiZcbiAgICAgICAgdmFsW3ZhbC5sZW5ndGggLSAxXSA9PT0gdmFsWzBdKVxuICAgICAgICA/IHZhbC5zdWJzdHJpbmcoMSwgdmFsLmxlbmd0aCAtIDEpXG4gICAgICAgIDogdmFsO1xufVxuIiwgImZ1bmN0aW9uIGdldFByb2Nlc3NBcmd2QmluSW5kZXgoKSB7XG4gICAgaWYgKGlzQnVuZGxlZEVsZWN0cm9uQXBwKCkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHJldHVybiAxO1xufVxuZnVuY3Rpb24gaXNCdW5kbGVkRWxlY3Ryb25BcHAoKSB7XG4gICAgcmV0dXJuIGlzRWxlY3Ryb25BcHAoKSAmJiAhcHJvY2Vzcy5kZWZhdWx0QXBwO1xufVxuZnVuY3Rpb24gaXNFbGVjdHJvbkFwcCgpIHtcbiAgICByZXR1cm4gISFwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVCaW4oYXJndikge1xuICAgIHJldHVybiBhcmd2LnNsaWNlKGdldFByb2Nlc3NBcmd2QmluSW5kZXgoKSArIDEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Nlc3NBcmd2QmluKCkge1xuICAgIHJldHVybiBwcm9jZXNzLmFyZ3ZbZ2V0UHJvY2Vzc0FyZ3ZCaW5JbmRleCgpXTtcbn1cbiIsICJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHN0YXRTeW5jLCB3cml0ZUZpbGUgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmczoge1xuICAgICAgICByZWFkRmlsZVN5bmMsXG4gICAgICAgIHdyaXRlRmlsZVxuICAgIH0sXG4gICAgZm9ybWF0LFxuICAgIHJlc29sdmUsXG4gICAgZXhpc3RzOiAoZmlsZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRTeW5jKGZpbGUpLmlzRmlsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCAibGV0IHNoaW07XG5jbGFzcyBZMThOIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIC8vIGNvbmZpZ3VyYWJsZSBvcHRpb25zLlxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnkgPSBvcHRzLmRpcmVjdG9yeSB8fCAnLi9sb2NhbGVzJztcbiAgICAgICAgdGhpcy51cGRhdGVGaWxlcyA9IHR5cGVvZiBvcHRzLnVwZGF0ZUZpbGVzID09PSAnYm9vbGVhbicgPyBvcHRzLnVwZGF0ZUZpbGVzIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuICAgICAgICB0aGlzLmZhbGxiYWNrVG9MYW5ndWFnZSA9IHR5cGVvZiBvcHRzLmZhbGxiYWNrVG9MYW5ndWFnZSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5mYWxsYmFja1RvTGFuZ3VhZ2UgOiB0cnVlO1xuICAgICAgICAvLyBpbnRlcm5hbCBzdHVmZi5cbiAgICAgICAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMud3JpdGVRdWV1ZSA9IFtdO1xuICAgIH1cbiAgICBfXyguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhZ2dlZExpdGVyYWwoYXJndW1lbnRzWzBdLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ciA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgbGV0IGNiID0gZnVuY3Rpb24gKCkgeyB9OyAvLyBzdGFydCB3aXRoIG5vb3AuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgY2IgPSBhcmdzLnBvcCgpO1xuICAgICAgICBjYiA9IGNiIHx8IGZ1bmN0aW9uICgpIHsgfTsgLy8gbm9vcC5cbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXSlcbiAgICAgICAgICAgIHRoaXMuX3JlYWRMb2NhbGVGaWxlKCk7XG4gICAgICAgIC8vIHdlJ3ZlIG9ic2VydmVkIGEgbmV3IHN0cmluZywgdXBkYXRlIHRoZSBsYW5ndWFnZSBmaWxlLlxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW3N0cl0gJiYgdGhpcy51cGRhdGVGaWxlcykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc3RyXSA9IHN0cjtcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgdGhlIGN1cnJlbnQgZGlyZWN0b3J5IGFuZCBsb2NhbGUsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVzZSB2YWx1ZXMgY291bGQgY2hhbmdlIGJlZm9yZSB0aGVcbiAgICAgICAgICAgIC8vIHdyaXRlIGlzIHBlcmZvcm1lZC5cbiAgICAgICAgICAgIHRoaXMuX2VucXVldWVXcml0ZSh7XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5OiB0aGlzLmRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGNiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaW0uZm9ybWF0LmFwcGx5KHNoaW0uZm9ybWF0LCBbdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc3RyXSB8fCBzdHJdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICAgIF9fbigpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnN0IHNpbmd1bGFyID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBjb25zdCBwbHVyYWwgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBsZXQgY2IgPSBmdW5jdGlvbiAoKSB7IH07IC8vIHN0YXJ0IHdpdGggbm9vcC5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYiA9IGFyZ3MucG9wKCk7XG4gICAgICAgIGlmICghdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV0pXG4gICAgICAgICAgICB0aGlzLl9yZWFkTG9jYWxlRmlsZSgpO1xuICAgICAgICBsZXQgc3RyID0gcXVhbnRpdHkgPT09IDEgPyBzaW5ndWxhciA6IHBsdXJhbDtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW3Npbmd1bGFyXSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzaW5ndWxhcl07XG4gICAgICAgICAgICBzdHIgPSBlbnRyeVtxdWFudGl0eSA9PT0gMSA/ICdvbmUnIDogJ290aGVyJ107XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UndmUgb2JzZXJ2ZWQgYSBuZXcgc3RyaW5nLCB1cGRhdGUgdGhlIGxhbmd1YWdlIGZpbGUuXG4gICAgICAgIGlmICghdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc2luZ3VsYXJdICYmIHRoaXMudXBkYXRlRmlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW3Npbmd1bGFyXSA9IHtcbiAgICAgICAgICAgICAgICBvbmU6IHNpbmd1bGFyLFxuICAgICAgICAgICAgICAgIG90aGVyOiBwbHVyYWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBpbmNsdWRlIHRoZSBjdXJyZW50IGRpcmVjdG9yeSBhbmQgbG9jYWxlLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlc2UgdmFsdWVzIGNvdWxkIGNoYW5nZSBiZWZvcmUgdGhlXG4gICAgICAgICAgICAvLyB3cml0ZSBpcyBwZXJmb3JtZWQuXG4gICAgICAgICAgICB0aGlzLl9lbnF1ZXVlV3JpdGUoe1xuICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogdGhpcy5kaXJlY3RvcnksXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBjYlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGEgJWQgcGxhY2Vob2xkZXIgaXMgcHJvdmlkZWQsIGFkZCBxdWFudGl0eVxuICAgICAgICAvLyB0byB0aGUgYXJndW1lbnRzIGV4cGFuZGVkIGJ5IHV0aWwuZm9ybWF0LlxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbc3RyXTtcbiAgICAgICAgaWYgKH5zdHIuaW5kZXhPZignJWQnKSlcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHF1YW50aXR5KTtcbiAgICAgICAgcmV0dXJuIHNoaW0uZm9ybWF0LmFwcGx5KHNoaW0uZm9ybWF0LCB2YWx1ZXMuY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB9XG4gICAgZ2V0TG9jYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGU7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsZShvYmopIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXSlcbiAgICAgICAgICAgIHRoaXMuX3JlYWRMb2NhbGVGaWxlKCk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3RhZ2dlZExpdGVyYWwocGFydHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0LCBpKSB7XG4gICAgICAgICAgICBjb25zdCBhcmcgPSBhcmdzW2kgKyAxXTtcbiAgICAgICAgICAgIHN0ciArPSBwYXJ0O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgc3RyICs9ICclcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fXy5hcHBseSh0aGlzLCBbc3RyXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzLCAxKSkpO1xuICAgIH1cbiAgICBfZW5xdWV1ZVdyaXRlKHdvcmspIHtcbiAgICAgICAgdGhpcy53cml0ZVF1ZXVlLnB1c2god29yayk7XG4gICAgICAgIGlmICh0aGlzLndyaXRlUXVldWUubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc1dyaXRlUXVldWUoKTtcbiAgICB9XG4gICAgX3Byb2Nlc3NXcml0ZVF1ZXVlKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHdvcmsgPSB0aGlzLndyaXRlUXVldWVbMF07XG4gICAgICAgIC8vIGRlc3RydWN0dXJlIHRoZSBlbnF1ZXVlZCB3b3JrLlxuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSB3b3JrLmRpcmVjdG9yeTtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gd29yay5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGNiID0gd29yay5jYjtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VGaWxlID0gdGhpcy5fcmVzb2x2ZUxvY2FsZUZpbGUoZGlyZWN0b3J5LCBsb2NhbGUpO1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkTG9jYWxlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jYWNoZVtsb2NhbGVdLCBudWxsLCAyKTtcbiAgICAgICAgc2hpbS5mcy53cml0ZUZpbGUobGFuZ3VhZ2VGaWxlLCBzZXJpYWxpemVkTG9jYWxlLCAndXRmLTgnLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBfdGhpcy53cml0ZVF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMud3JpdGVRdWV1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIF90aGlzLl9wcm9jZXNzV3JpdGVRdWV1ZSgpO1xuICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZWFkTG9jYWxlRmlsZSgpIHtcbiAgICAgICAgbGV0IGxvY2FsZUxvb2t1cCA9IHt9O1xuICAgICAgICBjb25zdCBsYW5ndWFnZUZpbGUgPSB0aGlzLl9yZXNvbHZlTG9jYWxlRmlsZSh0aGlzLmRpcmVjdG9yeSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB1c2luZyBhIGJ1bmRsZXIgc3VjaCBhcyB3ZWJwYWNrLCByZWFkRmlsZVN5bmMgbWF5IG5vdCBiZSBkZWZpbmVkOlxuICAgICAgICAgICAgaWYgKHNoaW0uZnMucmVhZEZpbGVTeW5jKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlTG9va3VwID0gSlNPTi5wYXJzZShzaGltLmZzLnJlYWRGaWxlU3luYyhsYW5ndWFnZUZpbGUsICd1dGYtOCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9ICdzeW50YXggZXJyb3IgaW4gJyArIGxhbmd1YWdlRmlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpXG4gICAgICAgICAgICAgICAgbG9jYWxlTG9va3VwID0ge307XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdID0gbG9jYWxlTG9va3VwO1xuICAgIH1cbiAgICBfcmVzb2x2ZUxvY2FsZUZpbGUoZGlyZWN0b3J5LCBsb2NhbGUpIHtcbiAgICAgICAgbGV0IGZpbGUgPSBzaGltLnJlc29sdmUoZGlyZWN0b3J5LCAnLi8nLCBsb2NhbGUgKyAnLmpzb24nKTtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tUb0xhbmd1YWdlICYmICF0aGlzLl9maWxlRXhpc3RzU3luYyhmaWxlKSAmJiB+bG9jYWxlLmxhc3RJbmRleE9mKCdfJykpIHtcbiAgICAgICAgICAgIC8vIGF0dGVtcHQgZmFsbGJhY2sgdG8gbGFuZ3VhZ2Ugb25seVxuICAgICAgICAgICAgY29uc3QgbGFuZ3VhZ2VGaWxlID0gc2hpbS5yZXNvbHZlKGRpcmVjdG9yeSwgJy4vJywgbG9jYWxlLnNwbGl0KCdfJylbMF0gKyAnLmpzb24nKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9maWxlRXhpc3RzU3luYyhsYW5ndWFnZUZpbGUpKVxuICAgICAgICAgICAgICAgIGZpbGUgPSBsYW5ndWFnZUZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgfVxuICAgIF9maWxlRXhpc3RzU3luYyhmaWxlKSB7XG4gICAgICAgIHJldHVybiBzaGltLmV4aXN0cyhmaWxlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24geTE4bihvcHRzLCBfc2hpbSkge1xuICAgIHNoaW0gPSBfc2hpbTtcbiAgICBjb25zdCB5MThuID0gbmV3IFkxOE4ob3B0cyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgX186IHkxOG4uX18uYmluZCh5MThuKSxcbiAgICAgICAgX19uOiB5MThuLl9fbi5iaW5kKHkxOG4pLFxuICAgICAgICBzZXRMb2NhbGU6IHkxOG4uc2V0TG9jYWxlLmJpbmQoeTE4biksXG4gICAgICAgIGdldExvY2FsZTogeTE4bi5nZXRMb2NhbGUuYmluZCh5MThuKSxcbiAgICAgICAgdXBkYXRlTG9jYWxlOiB5MThuLnVwZGF0ZUxvY2FsZS5iaW5kKHkxOG4pLFxuICAgICAgICBsb2NhbGU6IHkxOG4ubG9jYWxlXG4gICAgfTtcbn1cbiIsICJpbXBvcnQgc2hpbSBmcm9tICcuL2J1aWxkL2xpYi9wbGF0Zm9ybS1zaGltcy9ub2RlLmpzJ1xuaW1wb3J0IHsgeTE4biBhcyBfeTE4biB9IGZyb20gJy4vYnVpbGQvbGliL2luZGV4LmpzJ1xuXG5jb25zdCB5MThuID0gKG9wdHMpID0+IHtcbiAgcmV0dXJuIF95MThuKG9wdHMsIHNoaW0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHkxOG5cbiIsICJleHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgc2hpbSwgbWVzc2FnZSkge1xuICAgIHNoaW0uYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFNpbmdsZUtleShhY3R1YWwsIHNoaW0pIHtcbiAgICBzaGltLmFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgYWN0dWFsLCAnc3RyaW5nJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0S2V5cyhvYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKG1heWJlUHJvbWlzZSkge1xuICAgIHJldHVybiAoISFtYXliZVByb21pc2UgJiZcbiAgICAgICAgISFtYXliZVByb21pc2UudGhlbiAmJlxuICAgICAgICB0eXBlb2YgbWF5YmVQcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpO1xufVxuIiwgImV4cG9ydCBjbGFzcyBZRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgICAgIHN1cGVyKG1zZyB8fCAneWFyZ3MgZXJyb3InKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1lFcnJvcic7XG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgWUVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gcGFyc2VDb21tYW5kKGNtZCkge1xuICAgIGNvbnN0IGV4dHJhU3BhY2VzU3RyaXBwZWRDb21tYW5kID0gY21kLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKTtcbiAgICBjb25zdCBzcGxpdENvbW1hbmQgPSBleHRyYVNwYWNlc1N0cmlwcGVkQ29tbWFuZC5zcGxpdCgvXFxzKyg/IVteW10qXXxbXjxdKj4pLyk7XG4gICAgY29uc3QgYnJlZ2V4ID0gL1xcLipbXFxdWzw+XS9nO1xuICAgIGNvbnN0IGZpcnN0Q29tbWFuZCA9IHNwbGl0Q29tbWFuZC5zaGlmdCgpO1xuICAgIGlmICghZmlyc3RDb21tYW5kKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbW1hbmQgZm91bmQgaW46ICR7Y21kfWApO1xuICAgIGNvbnN0IHBhcnNlZENvbW1hbmQgPSB7XG4gICAgICAgIGNtZDogZmlyc3RDb21tYW5kLnJlcGxhY2UoYnJlZ2V4LCAnJyksXG4gICAgICAgIGRlbWFuZGVkOiBbXSxcbiAgICAgICAgb3B0aW9uYWw6IFtdLFxuICAgIH07XG4gICAgc3BsaXRDb21tYW5kLmZvckVhY2goKGNtZCwgaSkgPT4ge1xuICAgICAgICBsZXQgdmFyaWFkaWMgPSBmYWxzZTtcbiAgICAgICAgY21kID0gY21kLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIGlmICgvXFwuK1tcXF0+XS8udGVzdChjbWQpICYmIGkgPT09IHNwbGl0Q29tbWFuZC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgdmFyaWFkaWMgPSB0cnVlO1xuICAgICAgICBpZiAoL15cXFsvLnRlc3QoY21kKSkge1xuICAgICAgICAgICAgcGFyc2VkQ29tbWFuZC5vcHRpb25hbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbWQ6IGNtZC5yZXBsYWNlKGJyZWdleCwgJycpLnNwbGl0KCd8JyksXG4gICAgICAgICAgICAgICAgdmFyaWFkaWMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZENvbW1hbmQuZGVtYW5kZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgY21kOiBjbWQucmVwbGFjZShicmVnZXgsICcnKS5zcGxpdCgnfCcpLFxuICAgICAgICAgICAgICAgIHZhcmlhZGljLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VkQ29tbWFuZDtcbn1cbiIsICJpbXBvcnQgeyBZRXJyb3IgfSBmcm9tICcuL3llcnJvci5qcyc7XG5pbXBvcnQgeyBwYXJzZUNvbW1hbmQgfSBmcm9tICcuL3BhcnNlLWNvbW1hbmQuanMnO1xuY29uc3QgcG9zaXRpb25OYW1lID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2ZpZnRoJywgJ3NpeHRoJ107XG5leHBvcnQgZnVuY3Rpb24gYXJnc2VydChhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgZnVuY3Rpb24gcGFyc2VBcmdzKCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGFyZzEgPT09ICdvYmplY3QnXG4gICAgICAgICAgICA/IFt7IGRlbWFuZGVkOiBbXSwgb3B0aW9uYWw6IFtdIH0sIGFyZzEsIGFyZzJdXG4gICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICBwYXJzZUNvbW1hbmQoYGNtZCAke2FyZzF9YCksXG4gICAgICAgICAgICAgICAgYXJnMixcbiAgICAgICAgICAgICAgICBhcmczLFxuICAgICAgICAgICAgXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICAgICAgY29uc3QgW3BhcnNlZCwgY2FsbGVyQXJndW1lbnRzLCBfbGVuZ3RoXSA9IHBhcnNlQXJncygpO1xuICAgICAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChjYWxsZXJBcmd1bWVudHMpO1xuICAgICAgICB3aGlsZSAoYXJncy5sZW5ndGggJiYgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBhcmdzLnBvcCgpO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBfbGVuZ3RoIHx8IGFyZ3MubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoIDwgcGFyc2VkLmRlbWFuZGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihgTm90IGVub3VnaCBhcmd1bWVudHMgcHJvdmlkZWQuIEV4cGVjdGVkICR7cGFyc2VkLmRlbWFuZGVkLmxlbmd0aH0gYnV0IHJlY2VpdmVkICR7YXJncy5sZW5ndGh9LmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvdGFsQ29tbWFuZHMgPSBwYXJzZWQuZGVtYW5kZWQubGVuZ3RoICsgcGFyc2VkLm9wdGlvbmFsLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA+IHRvdGFsQ29tbWFuZHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoYFRvbyBtYW55IGFyZ3VtZW50cyBwcm92aWRlZC4gRXhwZWN0ZWQgbWF4ICR7dG90YWxDb21tYW5kc30gYnV0IHJlY2VpdmVkICR7bGVuZ3RofS5gKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZGVtYW5kZWQuZm9yRWFjaChkZW1hbmRlZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcmcgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlZFR5cGUgPSBndWVzc1R5cGUoYXJnKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nVHlwZXMgPSBkZW1hbmRlZC5jbWQuZmlsdGVyKHR5cGUgPT4gdHlwZSA9PT0gb2JzZXJ2ZWRUeXBlIHx8IHR5cGUgPT09ICcqJyk7XG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdUeXBlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgYXJndW1lbnRUeXBlRXJyb3Iob2JzZXJ2ZWRUeXBlLCBkZW1hbmRlZC5jbWQsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IDE7XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJzZWQub3B0aW9uYWwuZm9yRWFjaChvcHRpb25hbCA9PiB7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgYXJnID0gYXJncy5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZWRUeXBlID0gZ3Vlc3NUeXBlKGFyZyk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGluZ1R5cGVzID0gb3B0aW9uYWwuY21kLmZpbHRlcih0eXBlID0+IHR5cGUgPT09IG9ic2VydmVkVHlwZSB8fCB0eXBlID09PSAnKicpO1xuICAgICAgICAgICAgaWYgKG1hdGNoaW5nVHlwZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIGFyZ3VtZW50VHlwZUVycm9yKG9ic2VydmVkVHlwZSwgb3B0aW9uYWwuY21kLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSAxO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLndhcm4oZXJyLnN0YWNrKTtcbiAgICB9XG59XG5mdW5jdGlvbiBndWVzc1R5cGUoYXJnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJnID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgYXJnO1xufVxuZnVuY3Rpb24gYXJndW1lbnRUeXBlRXJyb3Iob2JzZXJ2ZWRUeXBlLCBhbGxvd2VkVHlwZXMsIHBvc2l0aW9uKSB7XG4gICAgdGhyb3cgbmV3IFlFcnJvcihgSW52YWxpZCAke3Bvc2l0aW9uTmFtZVtwb3NpdGlvbl0gfHwgJ21hbnlpdGgnfSBhcmd1bWVudC4gRXhwZWN0ZWQgJHthbGxvd2VkVHlwZXMuam9pbignIG9yICcpfSBidXQgcmVjZWl2ZWQgJHtvYnNlcnZlZFR5cGV9LmApO1xufVxuIiwgImltcG9ydCB7IGFyZ3NlcnQgfSBmcm9tICcuL2FyZ3NlcnQuanMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pcy1wcm9taXNlLmpzJztcbmV4cG9ydCBjbGFzcyBHbG9iYWxNaWRkbGV3YXJlIHtcbiAgICBjb25zdHJ1Y3Rvcih5YXJncykge1xuICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUgPSBbXTtcbiAgICAgICAgdGhpcy5mcm96ZW5zID0gW107XG4gICAgICAgIHRoaXMueWFyZ3MgPSB5YXJncztcbiAgICB9XG4gICAgYWRkTWlkZGxld2FyZShjYWxsYmFjaywgYXBwbHlCZWZvcmVWYWxpZGF0aW9uLCBnbG9iYWwgPSB0cnVlLCBtdXRhdGVzID0gZmFsc2UpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fGZ1bmN0aW9uPiBbYm9vbGVhbl0gW2Jvb2xlYW5dIFtib29sZWFuXScsIFtjYWxsYmFjaywgYXBwbHlCZWZvcmVWYWxpZGF0aW9uLCBnbG9iYWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFja1tpXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignbWlkZGxld2FyZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbSA9IGNhbGxiYWNrW2ldO1xuICAgICAgICAgICAgICAgIG0uYXBwbHlCZWZvcmVWYWxpZGF0aW9uID0gYXBwbHlCZWZvcmVWYWxpZGF0aW9uO1xuICAgICAgICAgICAgICAgIG0uZ2xvYmFsID0gZ2xvYmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5nbG9iYWxNaWRkbGV3YXJlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBtID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBtLmFwcGx5QmVmb3JlVmFsaWRhdGlvbiA9IGFwcGx5QmVmb3JlVmFsaWRhdGlvbjtcbiAgICAgICAgICAgIG0uZ2xvYmFsID0gZ2xvYmFsO1xuICAgICAgICAgICAgbS5tdXRhdGVzID0gbXV0YXRlcztcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWlkZGxld2FyZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy55YXJncztcbiAgICB9XG4gICAgYWRkQ29lcmNlTWlkZGxld2FyZShjYWxsYmFjaywgb3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IGFsaWFzZXMgPSB0aGlzLnlhcmdzLmdldEFsaWFzZXMoKTtcbiAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlID0gdGhpcy5nbG9iYWxNaWRkbGV3YXJlLmZpbHRlcihtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvQ2hlY2sgPSBbLi4uKGFsaWFzZXNbb3B0aW9uXSB8fCBbXSksIG9wdGlvbl07XG4gICAgICAgICAgICBpZiAoIW0ub3B0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAhdG9DaGVjay5pbmNsdWRlcyhtLm9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFjay5vcHRpb24gPSBvcHRpb247XG4gICAgICAgIHJldHVybiB0aGlzLmFkZE1pZGRsZXdhcmUoY2FsbGJhY2ssIHRydWUsIHRydWUsIHRydWUpO1xuICAgIH1cbiAgICBnZXRNaWRkbGV3YXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxNaWRkbGV3YXJlO1xuICAgIH1cbiAgICBmcmVlemUoKSB7XG4gICAgICAgIHRoaXMuZnJvemVucy5wdXNoKFsuLi50aGlzLmdsb2JhbE1pZGRsZXdhcmVdKTtcbiAgICB9XG4gICAgdW5mcmVlemUoKSB7XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IHRoaXMuZnJvemVucy5wb3AoKTtcbiAgICAgICAgaWYgKGZyb3plbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlID0gZnJvemVuO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlID0gdGhpcy5nbG9iYWxNaWRkbGV3YXJlLmZpbHRlcihtID0+IG0uZ2xvYmFsKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZE1pZGRsZXdhcmVGYWN0b3J5KGNvbW1hbmRNaWRkbGV3YXJlKSB7XG4gICAgaWYgKCFjb21tYW5kTWlkZGxld2FyZSlcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIHJldHVybiBjb21tYW5kTWlkZGxld2FyZS5tYXAobWlkZGxld2FyZSA9PiB7XG4gICAgICAgIG1pZGRsZXdhcmUuYXBwbHlCZWZvcmVWYWxpZGF0aW9uID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZShhcmd2LCB5YXJncywgbWlkZGxld2FyZXMsIGJlZm9yZVZhbGlkYXRpb24pIHtcbiAgICByZXR1cm4gbWlkZGxld2FyZXMucmVkdWNlKChhY2MsIG1pZGRsZXdhcmUpID0+IHtcbiAgICAgICAgaWYgKG1pZGRsZXdhcmUuYXBwbHlCZWZvcmVWYWxpZGF0aW9uICE9PSBiZWZvcmVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaWRkbGV3YXJlLm11dGF0ZXMpIHtcbiAgICAgICAgICAgIGlmIChtaWRkbGV3YXJlLmFwcGxpZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIG1pZGRsZXdhcmUuYXBwbGllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZShhY2MpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgICAgICAgICAgLnRoZW4oaW5pdGlhbE9iaiA9PiBQcm9taXNlLmFsbChbaW5pdGlhbE9iaiwgbWlkZGxld2FyZShpbml0aWFsT2JqLCB5YXJncyldKSlcbiAgICAgICAgICAgICAgICAudGhlbigoW2luaXRpYWxPYmosIG1pZGRsZXdhcmVPYmpdKSA9PiBPYmplY3QuYXNzaWduKGluaXRpYWxPYmosIG1pZGRsZXdhcmVPYmopKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG1pZGRsZXdhcmUoYWNjLCB5YXJncyk7XG4gICAgICAgICAgICByZXR1cm4gaXNQcm9taXNlKHJlc3VsdClcbiAgICAgICAgICAgICAgICA/IHJlc3VsdC50aGVuKG1pZGRsZXdhcmVPYmogPT4gT2JqZWN0LmFzc2lnbihhY2MsIG1pZGRsZXdhcmVPYmopKVxuICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbihhY2MsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9LCBhcmd2KTtcbn1cbiIsICJpbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuL2lzLXByb21pc2UuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIG1heWJlQXN5bmNSZXN1bHQoZ2V0UmVzdWx0LCByZXN1bHRIYW5kbGVyLCBlcnJvckhhbmRsZXIgPSAoZXJyKSA9PiB7XG4gICAgdGhyb3cgZXJyO1xufSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGlzRnVuY3Rpb24oZ2V0UmVzdWx0KSA/IGdldFJlc3VsdCgpIDogZ2V0UmVzdWx0O1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKHJlc3VsdClcbiAgICAgICAgICAgID8gcmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0SGFuZGxlcihyZXN1bHQpKVxuICAgICAgICAgICAgOiByZXN1bHRIYW5kbGVyKHJlc3VsdCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGVycm9ySGFuZGxlcihlcnIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG4iLCAiaW1wb3J0IHsgYXNzZXJ0Tm90U3RyaWN0RXF1YWwsIH0gZnJvbSAnLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuL3V0aWxzL2lzLXByb21pc2UuanMnO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21tYW5kTWlkZGxld2FyZUZhY3RvcnksIH0gZnJvbSAnLi9taWRkbGV3YXJlLmpzJztcbmltcG9ydCB7IHBhcnNlQ29tbWFuZCB9IGZyb20gJy4vcGFyc2UtY29tbWFuZC5qcyc7XG5pbXBvcnQgeyBpc1lhcmdzSW5zdGFuY2UsIH0gZnJvbSAnLi95YXJncy1mYWN0b3J5LmpzJztcbmltcG9ydCB7IG1heWJlQXN5bmNSZXN1bHQgfSBmcm9tICcuL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyc7XG5jb25zdCBERUZBVUxUX01BUktFUiA9IC8oXlxcKil8KF5cXCQwKS87XG5leHBvcnQgY2xhc3MgQ29tbWFuZEluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2FnZSwgdmFsaWRhdGlvbiwgZ2xvYmFsTWlkZGxld2FyZSwgc2hpbSkge1xuICAgICAgICB0aGlzLnJlcXVpcmVDYWNoZSA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuICAgICAgICB0aGlzLmFsaWFzTWFwID0ge307XG4gICAgICAgIHRoaXMuZnJvemVucyA9IFtdO1xuICAgICAgICB0aGlzLnNoaW0gPSBzaGltO1xuICAgICAgICB0aGlzLnVzYWdlID0gdXNhZ2U7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWlkZGxld2FyZSA9IGdsb2JhbE1pZGRsZXdhcmU7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbiA9IHZhbGlkYXRpb247XG4gICAgfVxuICAgIGFkZERpcmVjdG9yeShkaXIsIHJlcSwgY2FsbGVyRmlsZSwgb3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgdGhpcy5yZXF1aXJlQ2FjaGUuYWRkKGNhbGxlckZpbGUpO1xuICAgICAgICBjb25zdCBmdWxsRGlyUGF0aCA9IHRoaXMuc2hpbS5wYXRoLnJlc29sdmUodGhpcy5zaGltLnBhdGguZGlybmFtZShjYWxsZXJGaWxlKSwgZGlyKTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLnNoaW0ucmVhZGRpclN5bmMoZnVsbERpclBhdGgsIHtcbiAgICAgICAgICAgIHJlY3Vyc2l2ZTogb3B0cy5yZWN1cnNlID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdHMuZXh0ZW5zaW9ucykpXG4gICAgICAgICAgICBvcHRzLmV4dGVuc2lvbnMgPSBbJ2pzJ107XG4gICAgICAgIGNvbnN0IHZpc2l0ID0gdHlwZW9mIG9wdHMudmlzaXQgPT09ICdmdW5jdGlvbicgPyBvcHRzLnZpc2l0IDogKG8pID0+IG87XG4gICAgICAgIGZvciAoY29uc3QgZmlsZWIgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlYi50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKG9wdHMuZXhjbHVkZSkge1xuICAgICAgICAgICAgICAgIGxldCBleGNsdWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmV4Y2x1ZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZSA9IG9wdHMuZXhjbHVkZShmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGUgPSBvcHRzLmV4Y2x1ZGUudGVzdChmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdHMuaW5jbHVkZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmNsdWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmluY2x1ZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSA9IG9wdHMuaW5jbHVkZShmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgPSBvcHRzLmluY2x1ZGUudGVzdChmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdXBwb3J0ZWRFeHRlbnNpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXh0IG9mIG9wdHMuZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLmVuZHNXaXRoKGV4dCkpXG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZEV4dGVuc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkRXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgam9pbmVkID0gdGhpcy5zaGltLnBhdGguam9pbihmdWxsRGlyUGF0aCwgZmlsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gcmVxKGpvaW5lZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5kYWJsZU1vZHVsZSA9IE9iamVjdC5jcmVhdGUobnVsbCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoeyAuLi5tb2R1bGUgfSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpc2l0ZWQgPSB2aXNpdChleHRlbmRhYmxlTW9kdWxlLCBqb2luZWQsIGZpbGUpO1xuICAgICAgICAgICAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVDYWNoZS5oYXMoam9pbmVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmVDYWNoZS5hZGQoam9pbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHRlbmRhYmxlTW9kdWxlLmNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGFibGVNb2R1bGUuY29tbWFuZCA9IHRoaXMuc2hpbS5wYXRoLmJhc2VuYW1lKGpvaW5lZCwgdGhpcy5zaGltLnBhdGguZXh0bmFtZShqb2luZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEhhbmRsZXIoZXh0ZW5kYWJsZU1vZHVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEhhbmRsZXIoY21kLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlciwgY29tbWFuZE1pZGRsZXdhcmUsIGRlcHJlY2F0ZWQpIHtcbiAgICAgICAgbGV0IGFsaWFzZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbWlkZGxld2FyZXMgPSBjb21tYW5kTWlkZGxld2FyZUZhY3RvcnkoY29tbWFuZE1pZGRsZXdhcmUpO1xuICAgICAgICBoYW5kbGVyID0gaGFuZGxlciB8fCAoKCkgPT4geyB9KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY21kKSkge1xuICAgICAgICAgICAgaWYgKGlzQ29tbWFuZEFuZEFsaWFzZXMoY21kKSkge1xuICAgICAgICAgICAgICAgIFtjbWQsIC4uLmFsaWFzZXNdID0gY21kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb21tYW5kIG9mIGNtZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEhhbmRsZXIoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQ29tbWFuZEhhbmRsZXJEZWZpbml0aW9uKGNtZCkpIHtcbiAgICAgICAgICAgIGxldCBjb21tYW5kID0gQXJyYXkuaXNBcnJheShjbWQuY29tbWFuZCkgfHwgdHlwZW9mIGNtZC5jb21tYW5kID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gY21kLmNvbW1hbmRcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29tbWFuZCBuYW1lIGdpdmVuIGZvciBtb2R1bGU6ICR7dGhpcy5zaGltLmluc3BlY3QoY21kKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbWQuYWxpYXNlcylcbiAgICAgICAgICAgICAgICBjb21tYW5kID0gW10uY29uY2F0KGNvbW1hbmQpLmNvbmNhdChjbWQuYWxpYXNlcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEhhbmRsZXIoY29tbWFuZCwgdGhpcy5leHRyYWN0RGVzYyhjbWQpLCBjbWQuYnVpbGRlciwgY21kLmhhbmRsZXIsIGNtZC5taWRkbGV3YXJlcywgY21kLmRlcHJlY2F0ZWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQ29tbWFuZEJ1aWxkZXJEZWZpbml0aW9uKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEhhbmRsZXIoW2NtZF0uY29uY2F0KGFsaWFzZXMpLCBkZXNjcmlwdGlvbiwgYnVpbGRlci5idWlsZGVyLCBidWlsZGVyLmhhbmRsZXIsIGJ1aWxkZXIubWlkZGxld2FyZXMsIGJ1aWxkZXIuZGVwcmVjYXRlZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjbWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRDb21tYW5kID0gcGFyc2VDb21tYW5kKGNtZCk7XG4gICAgICAgICAgICBhbGlhc2VzID0gYWxpYXNlcy5tYXAoYWxpYXMgPT4gcGFyc2VDb21tYW5kKGFsaWFzKS5jbWQpO1xuICAgICAgICAgICAgbGV0IGlzRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQWxpYXNlcyA9IFtwYXJzZWRDb21tYW5kLmNtZF0uY29uY2F0KGFsaWFzZXMpLmZpbHRlcihjID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoREVGQVVMVF9NQVJLRVIudGVzdChjKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocGFyc2VkQWxpYXNlcy5sZW5ndGggPT09IDAgJiYgaXNEZWZhdWx0KVxuICAgICAgICAgICAgICAgIHBhcnNlZEFsaWFzZXMucHVzaCgnJDAnKTtcbiAgICAgICAgICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRDb21tYW5kLmNtZCA9IHBhcnNlZEFsaWFzZXNbMF07XG4gICAgICAgICAgICAgICAgYWxpYXNlcyA9IHBhcnNlZEFsaWFzZXMuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgY21kID0gY21kLnJlcGxhY2UoREVGQVVMVF9NQVJLRVIsIHBhcnNlZENvbW1hbmQuY21kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsaWFzZXMuZm9yRWFjaChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGlhc01hcFthbGlhc10gPSBwYXJzZWRDb21tYW5kLmNtZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNhZ2UuY29tbWFuZChjbWQsIGRlc2NyaXB0aW9uLCBpc0RlZmF1bHQsIGFsaWFzZXMsIGRlcHJlY2F0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1twYXJzZWRDb21tYW5kLmNtZF0gPSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWw6IGNtZCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICAgIGJ1aWxkZXI6IGJ1aWxkZXIgfHwge30sXG4gICAgICAgICAgICAgICAgbWlkZGxld2FyZXMsXG4gICAgICAgICAgICAgICAgZGVwcmVjYXRlZCxcbiAgICAgICAgICAgICAgICBkZW1hbmRlZDogcGFyc2VkQ29tbWFuZC5kZW1hbmRlZCxcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogcGFyc2VkQ29tbWFuZC5vcHRpb25hbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNEZWZhdWx0KVxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvbW1hbmQgPSB0aGlzLmhhbmRsZXJzW3BhcnNlZENvbW1hbmQuY21kXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDb21tYW5kSGFuZGxlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzO1xuICAgIH1cbiAgICBnZXRDb21tYW5kcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFuZGxlcnMpLmNvbmNhdChPYmplY3Qua2V5cyh0aGlzLmFsaWFzTWFwKSk7XG4gICAgfVxuICAgIGhhc0RlZmF1bHRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmRlZmF1bHRDb21tYW5kO1xuICAgIH1cbiAgICBydW5Db21tYW5kKGNvbW1hbmQsIHlhcmdzLCBwYXJzZWQsIGNvbW1hbmRJbmRleCwgaGVscE9ubHksIGhlbHBPclZlcnNpb25TZXQpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZEhhbmRsZXIgPSB0aGlzLmhhbmRsZXJzW2NvbW1hbmRdIHx8XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW3RoaXMuYWxpYXNNYXBbY29tbWFuZF1dIHx8XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb21tYW5kO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgcGFyZW50Q29tbWFuZHMgPSBjdXJyZW50Q29udGV4dC5jb21tYW5kcy5zbGljZSgpO1xuICAgICAgICBjb25zdCBpc0RlZmF1bHRDb21tYW5kID0gIWNvbW1hbmQ7XG4gICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjdXJyZW50Q29udGV4dC5jb21tYW5kcy5wdXNoKGNvbW1hbmQpO1xuICAgICAgICAgICAgY3VycmVudENvbnRleHQuZnVsbENvbW1hbmRzLnB1c2goY29tbWFuZEhhbmRsZXIub3JpZ2luYWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1aWxkZXJSZXN1bHQgPSB0aGlzLmFwcGx5QnVpbGRlclVwZGF0ZVVzYWdlQW5kUGFyc2UoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIHlhcmdzLCBwYXJzZWQuYWxpYXNlcywgcGFyZW50Q29tbWFuZHMsIGNvbW1hbmRJbmRleCwgaGVscE9ubHksIGhlbHBPclZlcnNpb25TZXQpO1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKGJ1aWxkZXJSZXN1bHQpXG4gICAgICAgICAgICA/IGJ1aWxkZXJSZXN1bHQudGhlbihyZXN1bHQgPT4gdGhpcy5hcHBseU1pZGRsZXdhcmVBbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIHJlc3VsdC5pbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBoZWxwT25seSwgcmVzdWx0LmFsaWFzZXMsIHlhcmdzKSlcbiAgICAgICAgICAgIDogdGhpcy5hcHBseU1pZGRsZXdhcmVBbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGJ1aWxkZXJSZXN1bHQuaW5uZXJBcmd2LCBjdXJyZW50Q29udGV4dCwgaGVscE9ubHksIGJ1aWxkZXJSZXN1bHQuYWxpYXNlcywgeWFyZ3MpO1xuICAgIH1cbiAgICBhcHBseUJ1aWxkZXJVcGRhdGVVc2FnZUFuZFBhcnNlKGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCB5YXJncywgYWxpYXNlcywgcGFyZW50Q29tbWFuZHMsIGNvbW1hbmRJbmRleCwgaGVscE9ubHksIGhlbHBPclZlcnNpb25TZXQpIHtcbiAgICAgICAgY29uc3QgYnVpbGRlciA9IGNvbW1hbmRIYW5kbGVyLmJ1aWxkZXI7XG4gICAgICAgIGxldCBpbm5lcllhcmdzID0geWFyZ3M7XG4gICAgICAgIGlmIChpc0NvbW1hbmRCdWlsZGVyQ2FsbGJhY2soYnVpbGRlcikpIHtcbiAgICAgICAgICAgIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlSW5zdGFuY2UoKS5mcmVlemUoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkZXJPdXRwdXQgPSBidWlsZGVyKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLnJlc2V0KGFsaWFzZXMpLCBoZWxwT3JWZXJzaW9uU2V0KTtcbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UoYnVpbGRlck91dHB1dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlck91dHB1dC50aGVuKG91dHB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyWWFyZ3MgPSBpc1lhcmdzSW5zdGFuY2Uob3V0cHV0KSA/IG91dHB1dCA6IHlhcmdzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFuZFVwZGF0ZVVzYWdlKGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lcllhcmdzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDb21tYW5kQnVpbGRlck9wdGlvbkRlZmluaXRpb25zKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuZnJlZXplKCk7XG4gICAgICAgICAgICBpbm5lcllhcmdzID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkucmVzZXQoYWxpYXNlcyk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21tYW5kSGFuZGxlci5idWlsZGVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaW5uZXJZYXJncy5vcHRpb24oa2V5LCBidWlsZGVyW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VBbmRVcGRhdGVVc2FnZShpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgaW5uZXJZYXJncywgcGFyZW50Q29tbWFuZHMsIGNvbW1hbmRJbmRleCwgaGVscE9ubHkpO1xuICAgIH1cbiAgICBwYXJzZUFuZFVwZGF0ZVVzYWdlKGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lcllhcmdzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSkge1xuICAgICAgICBpZiAoaXNEZWZhdWx0Q29tbWFuZClcbiAgICAgICAgICAgIGlubmVyWWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLnVuZnJlZXplKHRydWUpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVVc2FnZShpbm5lcllhcmdzKSkge1xuICAgICAgICAgICAgaW5uZXJZYXJnc1xuICAgICAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgICAgIC5nZXRVc2FnZUluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAudXNhZ2UodGhpcy51c2FnZUZyb21QYXJlbnRDb21tYW5kc0NvbW1hbmRIYW5kbGVyKHBhcmVudENvbW1hbmRzLCBjb21tYW5kSGFuZGxlciksIGNvbW1hbmRIYW5kbGVyLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbm5lckFyZ3YgPSBpbm5lcllhcmdzXG4gICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgIC5ydW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kcyhudWxsLCB1bmRlZmluZWQsIHRydWUsIGNvbW1hbmRJbmRleCwgaGVscE9ubHkpO1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKGlubmVyQXJndilcbiAgICAgICAgICAgID8gaW5uZXJBcmd2LnRoZW4oYXJndiA9PiAoe1xuICAgICAgICAgICAgICAgIGFsaWFzZXM6IGlubmVyWWFyZ3MucGFyc2VkLmFsaWFzZXMsXG4gICAgICAgICAgICAgICAgaW5uZXJBcmd2OiBhcmd2LFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBhbGlhc2VzOiBpbm5lcllhcmdzLnBhcnNlZC5hbGlhc2VzLFxuICAgICAgICAgICAgICAgIGlubmVyQXJndjogaW5uZXJBcmd2LFxuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgc2hvdWxkVXBkYXRlVXNhZ2UoeWFyZ3MpIHtcbiAgICAgICAgcmV0dXJuICgheWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmdldFVzYWdlRGlzYWJsZWQoKSAmJlxuICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmdldFVzYWdlKCkubGVuZ3RoID09PSAwKTtcbiAgICB9XG4gICAgdXNhZ2VGcm9tUGFyZW50Q29tbWFuZHNDb21tYW5kSGFuZGxlcihwYXJlbnRDb21tYW5kcywgY29tbWFuZEhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgYyA9IERFRkFVTFRfTUFSS0VSLnRlc3QoY29tbWFuZEhhbmRsZXIub3JpZ2luYWwpXG4gICAgICAgICAgICA/IGNvbW1hbmRIYW5kbGVyLm9yaWdpbmFsLnJlcGxhY2UoREVGQVVMVF9NQVJLRVIsICcnKS50cmltKClcbiAgICAgICAgICAgIDogY29tbWFuZEhhbmRsZXIub3JpZ2luYWw7XG4gICAgICAgIGNvbnN0IHBjID0gcGFyZW50Q29tbWFuZHMuZmlsdGVyKGMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFERUZBVUxUX01BUktFUi50ZXN0KGMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGMucHVzaChjKTtcbiAgICAgICAgcmV0dXJuIGAkMCAke3BjLmpvaW4oJyAnKX1gO1xuICAgIH1cbiAgICBoYW5kbGVWYWxpZGF0aW9uQW5kR2V0UmVzdWx0KGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBhbGlhc2VzLCB5YXJncywgbWlkZGxld2FyZXMsIHBvc2l0aW9uYWxNYXApIHtcbiAgICAgICAgaWYgKCF5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRIYXNPdXRwdXQoKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHlhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLnJ1blZhbGlkYXRpb24oYWxpYXNlcywgcG9zaXRpb25hbE1hcCwgeWFyZ3MucGFyc2VkLmVycm9yLCBpc0RlZmF1bHRDb21tYW5kKTtcbiAgICAgICAgICAgIGlubmVyQXJndiA9IG1heWJlQXN5bmNSZXN1bHQoaW5uZXJBcmd2LCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmRIYW5kbGVyLmhhbmRsZXIgJiYgIXlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldEhhc091dHB1dCgpKSB7XG4gICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5zZXRIYXNPdXRwdXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVsYXRlRG91YmxlRGFzaCA9ICEheWFyZ3MuZ2V0T3B0aW9ucygpLmNvbmZpZ3VyYXRpb25bJ3BvcHVsYXRlLS0nXTtcbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLnBvc3RQcm9jZXNzKGlubmVyQXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgaW5uZXJBcmd2ID0gYXBwbHlNaWRkbGV3YXJlKGlubmVyQXJndiwgeWFyZ3MsIG1pZGRsZXdhcmVzLCBmYWxzZSk7XG4gICAgICAgICAgICBpbm5lckFyZ3YgPSBtYXliZUFzeW5jUmVzdWx0KGlubmVyQXJndiwgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyUmVzdWx0ID0gY29tbWFuZEhhbmRsZXIuaGFuZGxlcihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1Byb21pc2UoaGFuZGxlclJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgPyBoYW5kbGVyUmVzdWx0LnRoZW4oKCkgPT4gcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICA6IHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFpc0RlZmF1bHRDb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmNhY2hlSGVscE1lc3NhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UoaW5uZXJBcmd2KSAmJlxuICAgICAgICAgICAgICAgICF5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5oYXNQYXJzZUNhbGxiYWNrKCkpIHtcbiAgICAgICAgICAgICAgICBpbm5lckFyZ3YuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmZhaWwobnVsbCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRGVmYXVsdENvbW1hbmQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLnBvcCgpO1xuICAgICAgICAgICAgY3VycmVudENvbnRleHQuZnVsbENvbW1hbmRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbm5lckFyZ3Y7XG4gICAgfVxuICAgIGFwcGx5TWlkZGxld2FyZUFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgaW5uZXJBcmd2LCBjdXJyZW50Q29udGV4dCwgaGVscE9ubHksIGFsaWFzZXMsIHlhcmdzKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbmFsTWFwID0ge307XG4gICAgICAgIGlmIChoZWxwT25seSlcbiAgICAgICAgICAgIHJldHVybiBpbm5lckFyZ3Y7XG4gICAgICAgIGlmICgheWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0SGFzT3V0cHV0KCkpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uYWxNYXAgPSB0aGlzLnBvcHVsYXRlUG9zaXRpb25hbHMoY29tbWFuZEhhbmRsZXIsIGlubmVyQXJndiwgY3VycmVudENvbnRleHQsIHlhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtaWRkbGV3YXJlcyA9IHRoaXMuZ2xvYmFsTWlkZGxld2FyZVxuICAgICAgICAgICAgLmdldE1pZGRsZXdhcmUoKVxuICAgICAgICAgICAgLnNsaWNlKDApXG4gICAgICAgICAgICAuY29uY2F0KGNvbW1hbmRIYW5kbGVyLm1pZGRsZXdhcmVzKTtcbiAgICAgICAgY29uc3QgbWF5YmVQcm9taXNlQXJndiA9IGFwcGx5TWlkZGxld2FyZShpbm5lckFyZ3YsIHlhcmdzLCBtaWRkbGV3YXJlcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UobWF5YmVQcm9taXNlQXJndilcbiAgICAgICAgICAgID8gbWF5YmVQcm9taXNlQXJndi50aGVuKHJlc29sdmVkSW5uZXJBcmd2ID0+IHRoaXMuaGFuZGxlVmFsaWRhdGlvbkFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgcmVzb2x2ZWRJbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBhbGlhc2VzLCB5YXJncywgbWlkZGxld2FyZXMsIHBvc2l0aW9uYWxNYXApKVxuICAgICAgICAgICAgOiB0aGlzLmhhbmRsZVZhbGlkYXRpb25BbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIG1heWJlUHJvbWlzZUFyZ3YsIGN1cnJlbnRDb250ZXh0LCBhbGlhc2VzLCB5YXJncywgbWlkZGxld2FyZXMsIHBvc2l0aW9uYWxNYXApO1xuICAgIH1cbiAgICBwb3B1bGF0ZVBvc2l0aW9uYWxzKGNvbW1hbmRIYW5kbGVyLCBhcmd2LCBjb250ZXh0LCB5YXJncykge1xuICAgICAgICBhcmd2Ll8gPSBhcmd2Ll8uc2xpY2UoY29udGV4dC5jb21tYW5kcy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBkZW1hbmRlZCA9IGNvbW1hbmRIYW5kbGVyLmRlbWFuZGVkLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBvcHRpb25hbCA9IGNvbW1hbmRIYW5kbGVyLm9wdGlvbmFsLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBwb3NpdGlvbmFsTWFwID0ge307XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbi5wb3NpdGlvbmFsQ291bnQoZGVtYW5kZWQubGVuZ3RoLCBhcmd2Ll8ubGVuZ3RoKTtcbiAgICAgICAgd2hpbGUgKGRlbWFuZGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZGVtYW5kID0gZGVtYW5kZWQuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVQb3NpdGlvbmFsKGRlbWFuZCwgYXJndiwgcG9zaXRpb25hbE1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKG9wdGlvbmFsLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbWF5YmUgPSBvcHRpb25hbC5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVBvc2l0aW9uYWwobWF5YmUsIGFyZ3YsIHBvc2l0aW9uYWxNYXApO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3YuXyA9IGNvbnRleHQuY29tbWFuZHMuY29uY2F0KGFyZ3YuXy5tYXAoYSA9PiAnJyArIGEpKTtcbiAgICAgICAgdGhpcy5wb3N0UHJvY2Vzc1Bvc2l0aW9uYWxzKGFyZ3YsIHBvc2l0aW9uYWxNYXAsIHRoaXMuY21kVG9QYXJzZU9wdGlvbnMoY29tbWFuZEhhbmRsZXIub3JpZ2luYWwpLCB5YXJncyk7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbmFsTWFwO1xuICAgIH1cbiAgICBwb3B1bGF0ZVBvc2l0aW9uYWwocG9zaXRpb25hbCwgYXJndiwgcG9zaXRpb25hbE1hcCkge1xuICAgICAgICBjb25zdCBjbWQgPSBwb3NpdGlvbmFsLmNtZFswXTtcbiAgICAgICAgaWYgKHBvc2l0aW9uYWwudmFyaWFkaWMpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uYWxNYXBbY21kXSA9IGFyZ3YuXy5zcGxpY2UoMCkubWFwKFN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoYXJndi5fLmxlbmd0aClcbiAgICAgICAgICAgICAgICBwb3NpdGlvbmFsTWFwW2NtZF0gPSBbU3RyaW5nKGFyZ3YuXy5zaGlmdCgpKV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY21kVG9QYXJzZU9wdGlvbnMoY21kU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFycmF5OiBbXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHt9LFxuICAgICAgICAgICAgYWxpYXM6IHt9LFxuICAgICAgICAgICAgZGVtYW5kOiB7fSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VDb21tYW5kKGNtZFN0cmluZyk7XG4gICAgICAgIHBhcnNlZC5kZW1hbmRlZC5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2NtZCwgLi4uYWxpYXNlc10gPSBkLmNtZDtcbiAgICAgICAgICAgIGlmIChkLnZhcmlhZGljKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb25zLmFycmF5LnB1c2goY21kKTtcbiAgICAgICAgICAgICAgICBwYXJzZU9wdGlvbnMuZGVmYXVsdFtjbWRdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZU9wdGlvbnMuYWxpYXNbY21kXSA9IGFsaWFzZXM7XG4gICAgICAgICAgICBwYXJzZU9wdGlvbnMuZGVtYW5kW2NtZF0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcGFyc2VkLm9wdGlvbmFsLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICBjb25zdCBbY21kLCAuLi5hbGlhc2VzXSA9IG8uY21kO1xuICAgICAgICAgICAgaWYgKG8udmFyaWFkaWMpIHtcbiAgICAgICAgICAgICAgICBwYXJzZU9wdGlvbnMuYXJyYXkucHVzaChjbWQpO1xuICAgICAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5kZWZhdWx0W2NtZF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5hbGlhc1tjbWRdID0gYWxpYXNlcztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJzZU9wdGlvbnM7XG4gICAgfVxuICAgIHBvc3RQcm9jZXNzUG9zaXRpb25hbHMoYXJndiwgcG9zaXRpb25hbE1hcCwgcGFyc2VPcHRpb25zLCB5YXJncykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgeWFyZ3MuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgb3B0aW9ucy5kZWZhdWx0ID0gT2JqZWN0LmFzc2lnbihwYXJzZU9wdGlvbnMuZGVmYXVsdCwgb3B0aW9ucy5kZWZhdWx0KTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyc2VPcHRpb25zLmFsaWFzKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5hbGlhc1trZXldID0gKG9wdGlvbnMuYWxpYXNba2V5XSB8fCBbXSkuY29uY2F0KHBhcnNlT3B0aW9ucy5hbGlhc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmFycmF5ID0gb3B0aW9ucy5hcnJheS5jb25jYXQocGFyc2VPcHRpb25zLmFycmF5KTtcbiAgICAgICAgb3B0aW9ucy5jb25maWcgPSB7fTtcbiAgICAgICAgY29uc3QgdW5wYXJzZWQgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMocG9zaXRpb25hbE1hcCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgcG9zaXRpb25hbE1hcFtrZXldLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29uZmlndXJhdGlvblsndW5rbm93bi1vcHRpb25zLWFzLWFyZ3MnXSlcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5rZXlba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdW5wYXJzZWQucHVzaChgLS0ke2tleX1gKTtcbiAgICAgICAgICAgICAgICB1bnBhcnNlZC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF1bnBhcnNlZC5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMuY29uZmlndXJhdGlvbiwge1xuICAgICAgICAgICAgJ3BvcHVsYXRlLS0nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMuc2hpbS5QYXJzZXIuZGV0YWlsZWQodW5wYXJzZWQsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZyxcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAocGFyc2VkLmVycm9yKSB7XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgICAgIC5nZXRVc2FnZUluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAuZmFpbChwYXJzZWQuZXJyb3IubWVzc2FnZSwgcGFyc2VkLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uYWxLZXlzID0gT2JqZWN0LmtleXMocG9zaXRpb25hbE1hcCk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwb3NpdGlvbmFsTWFwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25hbEtleXMucHVzaCguLi5wYXJzZWQuYWxpYXNlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyc2VkLmFyZ3YpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25hbEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBvc2l0aW9uYWxNYXBba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uYWxNYXBba2V5XSA9IHBhcnNlZC5hcmd2W2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0luQ29uZmlncyh5YXJncywga2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuaXNEZWZhdWx0ZWQoeWFyZ3MsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCBrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyc2VkLmFyZ3YsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KGFyZ3Zba2V5XSkgfHwgQXJyYXkuaXNBcnJheShwYXJzZWQuYXJndltrZXldKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3Zba2V5XSA9IFtdLmNvbmNhdChhcmd2W2tleV0sIHBhcnNlZC5hcmd2W2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltrZXldID0gcGFyc2VkLmFyZ3Zba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRGVmYXVsdGVkKHlhcmdzLCBrZXkpIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBkZWZhdWx0cyB9ID0geWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0cywga2V5KSB8fFxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRzLCB0aGlzLnNoaW0uUGFyc2VyLmNhbWVsQ2FzZShrZXkpKSk7XG4gICAgfVxuICAgIGlzSW5Db25maWdzKHlhcmdzLCBrZXkpIHtcbiAgICAgICAgY29uc3QgeyBjb25maWdPYmplY3RzIH0gPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIHJldHVybiAoY29uZmlnT2JqZWN0cy5zb21lKGMgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsIGtleSkpIHx8XG4gICAgICAgICAgICBjb25maWdPYmplY3RzLnNvbWUoYyA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYywgdGhpcy5zaGltLlBhcnNlci5jYW1lbENhc2Uoa2V5KSkpKTtcbiAgICB9XG4gICAgcnVuRGVmYXVsdEJ1aWxkZXJPbih5YXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdENvbW1hbmQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZVVzYWdlKHlhcmdzKSkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZFN0cmluZyA9IERFRkFVTFRfTUFSS0VSLnRlc3QodGhpcy5kZWZhdWx0Q29tbWFuZC5vcmlnaW5hbClcbiAgICAgICAgICAgICAgICA/IHRoaXMuZGVmYXVsdENvbW1hbmQub3JpZ2luYWxcbiAgICAgICAgICAgICAgICA6IHRoaXMuZGVmYXVsdENvbW1hbmQub3JpZ2luYWwucmVwbGFjZSgvXlteW1xcXTw+XSovLCAnJDAgJyk7XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgICAgIC5nZXRVc2FnZUluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAudXNhZ2UoY29tbWFuZFN0cmluZywgdGhpcy5kZWZhdWx0Q29tbWFuZC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVpbGRlciA9IHRoaXMuZGVmYXVsdENvbW1hbmQuYnVpbGRlcjtcbiAgICAgICAgaWYgKGlzQ29tbWFuZEJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXIoeWFyZ3MsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc0NvbW1hbmRCdWlsZGVyRGVmaW5pdGlvbihidWlsZGVyKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYnVpbGRlcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHlhcmdzLm9wdGlvbihrZXksIGJ1aWxkZXJba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBleHRyYWN0RGVzYyh7IGRlc2NyaWJlLCBkZXNjcmlwdGlvbiwgZGVzYyB9KSB7XG4gICAgICAgIGZvciAoY29uc3QgdGVzdCBvZiBbZGVzY3JpYmUsIGRlc2NyaXB0aW9uLCBkZXNjXSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJyB8fCB0ZXN0ID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdDtcbiAgICAgICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKHRlc3QsIHRydWUsIHRoaXMuc2hpbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmcmVlemUoKSB7XG4gICAgICAgIHRoaXMuZnJvemVucy5wdXNoKHtcbiAgICAgICAgICAgIGhhbmRsZXJzOiB0aGlzLmhhbmRsZXJzLFxuICAgICAgICAgICAgYWxpYXNNYXA6IHRoaXMuYWxpYXNNYXAsXG4gICAgICAgICAgICBkZWZhdWx0Q29tbWFuZDogdGhpcy5kZWZhdWx0Q29tbWFuZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVuZnJlZXplKCkge1xuICAgICAgICBjb25zdCBmcm96ZW4gPSB0aGlzLmZyb3plbnMucG9wKCk7XG4gICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKGZyb3plbiwgdW5kZWZpbmVkLCB0aGlzLnNoaW0pO1xuICAgICAgICAoe1xuICAgICAgICAgICAgaGFuZGxlcnM6IHRoaXMuaGFuZGxlcnMsXG4gICAgICAgICAgICBhbGlhc01hcDogdGhpcy5hbGlhc01hcCxcbiAgICAgICAgICAgIGRlZmF1bHRDb21tYW5kOiB0aGlzLmRlZmF1bHRDb21tYW5kLFxuICAgICAgICB9ID0gZnJvemVuKTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5hbGlhc01hcCA9IHt9O1xuICAgICAgICB0aGlzLmRlZmF1bHRDb21tYW5kID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlcXVpcmVDYWNoZSA9IG5ldyBTZXQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmQodXNhZ2UsIHZhbGlkYXRpb24sIGdsb2JhbE1pZGRsZXdhcmUsIHNoaW0pIHtcbiAgICByZXR1cm4gbmV3IENvbW1hbmRJbnN0YW5jZSh1c2FnZSwgdmFsaWRhdGlvbiwgZ2xvYmFsTWlkZGxld2FyZSwgc2hpbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDb21tYW5kQnVpbGRlckRlZmluaXRpb24oYnVpbGRlcikge1xuICAgIHJldHVybiAodHlwZW9mIGJ1aWxkZXIgPT09ICdvYmplY3QnICYmXG4gICAgICAgICEhYnVpbGRlci5idWlsZGVyICYmXG4gICAgICAgIHR5cGVvZiBidWlsZGVyLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gaXNDb21tYW5kQW5kQWxpYXNlcyhjbWQpIHtcbiAgICByZXR1cm4gY21kLmV2ZXJ5KGMgPT4gdHlwZW9mIGMgPT09ICdzdHJpbmcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRCdWlsZGVyQ2FsbGJhY2soYnVpbGRlcikge1xuICAgIHJldHVybiB0eXBlb2YgYnVpbGRlciA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGlzQ29tbWFuZEJ1aWxkZXJPcHRpb25EZWZpbml0aW9ucyhidWlsZGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBidWlsZGVyID09PSAnb2JqZWN0Jztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRIYW5kbGVyRGVmaW5pdGlvbihjbWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNtZCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoY21kKTtcbn1cbiIsICJpbXBvcnQgeyBvYmplY3RLZXlzIH0gZnJvbSAnLi4vdHlwaW5ncy9jb21tb24tdHlwZXMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIG9iakZpbHRlcihvcmlnaW5hbCA9IHt9LCBmaWx0ZXIgPSAoKSA9PiB0cnVlKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG4gICAgb2JqZWN0S2V5cyhvcmlnaW5hbCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyKGtleSwgb3JpZ2luYWxba2V5XSkpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gb3JpZ2luYWxba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QmxvY2tpbmcoYmxvY2tpbmcpIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG4gICAgW3Byb2Nlc3Muc3Rkb3V0LCBwcm9jZXNzLnN0ZGVycl0uZm9yRWFjaChfc3RyZWFtID0+IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gX3N0cmVhbTtcbiAgICAgICAgaWYgKHN0cmVhbS5faGFuZGxlICYmXG4gICAgICAgICAgICBzdHJlYW0uaXNUVFkgJiZcbiAgICAgICAgICAgIHR5cGVvZiBzdHJlYW0uX2hhbmRsZS5zZXRCbG9ja2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RyZWFtLl9oYW5kbGUuc2V0QmxvY2tpbmcoYmxvY2tpbmcpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCAiaW1wb3J0IHsgb2JqRmlsdGVyIH0gZnJvbSAnLi91dGlscy9vYmotZmlsdGVyLmpzJztcbmltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4veWVycm9yLmpzJztcbmltcG9ydCBzZXRCbG9ja2luZyBmcm9tICcuL3V0aWxzL3NldC1ibG9ja2luZy5qcyc7XG5mdW5jdGlvbiBpc0Jvb2xlYW4oZmFpbCkge1xuICAgIHJldHVybiB0eXBlb2YgZmFpbCA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzYWdlKHlhcmdzLCBzaGltKSB7XG4gICAgY29uc3QgX18gPSBzaGltLnkxOG4uX187XG4gICAgY29uc3Qgc2VsZiA9IHt9O1xuICAgIGNvbnN0IGZhaWxzID0gW107XG4gICAgc2VsZi5mYWlsRm4gPSBmdW5jdGlvbiBmYWlsRm4oZikge1xuICAgICAgICBmYWlscy5wdXNoKGYpO1xuICAgIH07XG4gICAgbGV0IGZhaWxNZXNzYWdlID0gbnVsbDtcbiAgICBsZXQgZ2xvYmFsRmFpbE1lc3NhZ2UgPSBudWxsO1xuICAgIGxldCBzaG93SGVscE9uRmFpbCA9IHRydWU7XG4gICAgc2VsZi5zaG93SGVscE9uRmFpbCA9IGZ1bmN0aW9uIHNob3dIZWxwT25GYWlsRm4oYXJnMSA9IHRydWUsIGFyZzIpIHtcbiAgICAgICAgY29uc3QgW2VuYWJsZWQsIG1lc3NhZ2VdID0gdHlwZW9mIGFyZzEgPT09ICdzdHJpbmcnID8gW3RydWUsIGFyZzFdIDogW2FyZzEsIGFyZzJdO1xuICAgICAgICBpZiAoeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuaXNHbG9iYWxDb250ZXh0KCkpIHtcbiAgICAgICAgICAgIGdsb2JhbEZhaWxNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBmYWlsTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHNob3dIZWxwT25GYWlsID0gZW5hYmxlZDtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBsZXQgZmFpbHVyZU91dHB1dCA9IGZhbHNlO1xuICAgIHNlbGYuZmFpbCA9IGZ1bmN0aW9uIGZhaWwobXNnLCBlcnIpIHtcbiAgICAgICAgY29uc3QgbG9nZ2VyID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0TG9nZ2VySW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKGZhaWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGZhaWxzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmFpbCA9IGZhaWxzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpc0Jvb2xlYW4oZmFpbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobXNnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWwobXNnLCBlcnIsIHNlbGYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh5YXJncy5nZXRFeGl0UHJvY2VzcygpKVxuICAgICAgICAgICAgICAgIHNldEJsb2NraW5nKHRydWUpO1xuICAgICAgICAgICAgaWYgKCFmYWlsdXJlT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZU91dHB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHNob3dIZWxwT25GYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLnNob3dIZWxwKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZyB8fCBlcnIpXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihtc2cgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnbG9iYWxPckNvbW1hbmRGYWlsTWVzc2FnZSA9IGZhaWxNZXNzYWdlIHx8IGdsb2JhbEZhaWxNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxPckNvbW1hbmRGYWlsTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobXNnIHx8IGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihnbG9iYWxPckNvbW1hbmRGYWlsTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyID0gZXJyIHx8IG5ldyBZRXJyb3IobXNnKTtcbiAgICAgICAgICAgIGlmICh5YXJncy5nZXRFeGl0UHJvY2VzcygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlhcmdzLmV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5oYXNQYXJzZUNhbGxiYWNrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWFyZ3MuZXhpdCgxLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgdXNhZ2VzID0gW107XG4gICAgbGV0IHVzYWdlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBzZWxmLnVzYWdlID0gKG1zZywgZGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdXNhZ2VEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB1c2FnZXMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG4gICAgICAgIHVzYWdlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdXNhZ2VzLnB1c2goW21zZywgZGVzY3JpcHRpb24gfHwgJyddKTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBzZWxmLmdldFVzYWdlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdXNhZ2VzO1xuICAgIH07XG4gICAgc2VsZi5nZXRVc2FnZURpc2FibGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdXNhZ2VEaXNhYmxlZDtcbiAgICB9O1xuICAgIHNlbGYuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9fKCdQb3NpdGlvbmFsczonKTtcbiAgICB9O1xuICAgIGxldCBleGFtcGxlcyA9IFtdO1xuICAgIHNlbGYuZXhhbXBsZSA9IChjbWQsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGV4YW1wbGVzLnB1c2goW2NtZCwgZGVzY3JpcHRpb24gfHwgJyddKTtcbiAgICB9O1xuICAgIGxldCBjb21tYW5kcyA9IFtdO1xuICAgIHNlbGYuY29tbWFuZCA9IGZ1bmN0aW9uIGNvbW1hbmQoY21kLCBkZXNjcmlwdGlvbiwgaXNEZWZhdWx0LCBhbGlhc2VzLCBkZXByZWNhdGVkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5tYXAoY21kQXJyYXkgPT4ge1xuICAgICAgICAgICAgICAgIGNtZEFycmF5WzJdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNtZEFycmF5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFuZHMucHVzaChbY21kLCBkZXNjcmlwdGlvbiB8fCAnJywgaXNEZWZhdWx0LCBhbGlhc2VzLCBkZXByZWNhdGVkXSk7XG4gICAgfTtcbiAgICBzZWxmLmdldENvbW1hbmRzID0gKCkgPT4gY29tbWFuZHM7XG4gICAgbGV0IGRlc2NyaXB0aW9ucyA9IHt9O1xuICAgIHNlbGYuZGVzY3JpYmUgPSBmdW5jdGlvbiBkZXNjcmliZShrZXlPcktleXMsIGRlc2MpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5T3JLZXlzKSkge1xuICAgICAgICAgICAga2V5T3JLZXlzLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZXNjcmliZShrLCBkZXNjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBrZXlPcktleXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXlPcktleXMpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZXNjcmliZShrLCBrZXlPcktleXNba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbnNba2V5T3JLZXlzXSA9IGRlc2M7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuZ2V0RGVzY3JpcHRpb25zID0gKCkgPT4gZGVzY3JpcHRpb25zO1xuICAgIGxldCBlcGlsb2dzID0gW107XG4gICAgc2VsZi5lcGlsb2cgPSBtc2cgPT4ge1xuICAgICAgICBlcGlsb2dzLnB1c2gobXNnKTtcbiAgICB9O1xuICAgIGxldCB3cmFwU2V0ID0gZmFsc2U7XG4gICAgbGV0IHdyYXA7XG4gICAgc2VsZi53cmFwID0gY29scyA9PiB7XG4gICAgICAgIHdyYXBTZXQgPSB0cnVlO1xuICAgICAgICB3cmFwID0gY29scztcbiAgICB9O1xuICAgIHNlbGYuZ2V0V3JhcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaW0uZ2V0RW52KCdZQVJHU19ESVNBQkxFX1dSQVAnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3cmFwU2V0KSB7XG4gICAgICAgICAgICB3cmFwID0gd2luZG93V2lkdGgoKTtcbiAgICAgICAgICAgIHdyYXBTZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cmFwO1xuICAgIH07XG4gICAgY29uc3QgZGVmZXJZMThuTG9va3VwUHJlZml4ID0gJ19feWFyZ3NTdHJpbmdfXzonO1xuICAgIHNlbGYuZGVmZXJZMThuTG9va3VwID0gc3RyID0+IGRlZmVyWTE4bkxvb2t1cFByZWZpeCArIHN0cjtcbiAgICBzZWxmLmhlbHAgPSBmdW5jdGlvbiBoZWxwKCkge1xuICAgICAgICBpZiAoY2FjaGVkSGVscE1lc3NhZ2UpXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkSGVscE1lc3NhZ2U7XG4gICAgICAgIG5vcm1hbGl6ZUFsaWFzZXMoKTtcbiAgICAgICAgY29uc3QgYmFzZSQwID0geWFyZ3MuY3VzdG9tU2NyaXB0TmFtZVxuICAgICAgICAgICAgPyB5YXJncy4kMFxuICAgICAgICAgICAgOiBzaGltLnBhdGguYmFzZW5hbWUoeWFyZ3MuJDApO1xuICAgICAgICBjb25zdCBkZW1hbmRlZE9wdGlvbnMgPSB5YXJncy5nZXREZW1hbmRlZE9wdGlvbnMoKTtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRDb21tYW5kcyA9IHlhcmdzLmdldERlbWFuZGVkQ29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgZGVwcmVjYXRlZE9wdGlvbnMgPSB5YXJncy5nZXREZXByZWNhdGVkT3B0aW9ucygpO1xuICAgICAgICBjb25zdCBncm91cHMgPSB5YXJncy5nZXRHcm91cHMoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgbGV0IGtleXMgPSBbXTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5rZXlzKGRlc2NyaXB0aW9ucykpO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmtleXMoZGVtYW5kZWRPcHRpb25zKSk7XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3Qua2V5cyhkZW1hbmRlZENvbW1hbmRzKSk7XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3Qua2V5cyhvcHRpb25zLmRlZmF1bHQpKTtcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGZpbHRlckhpZGRlbk9wdGlvbnMpO1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoa2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnXycpXG4gICAgICAgICAgICAgICAgYWNjW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pKTtcbiAgICAgICAgY29uc3QgdGhlV3JhcCA9IHNlbGYuZ2V0V3JhcCgpO1xuICAgICAgICBjb25zdCB1aSA9IHNoaW0uY2xpdWkoe1xuICAgICAgICAgICAgd2lkdGg6IHRoZVdyYXAsXG4gICAgICAgICAgICB3cmFwOiAhIXRoZVdyYXAsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXVzYWdlRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICh1c2FnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdXNhZ2VzLmZvckVhY2godXNhZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoeyB0ZXh0OiBgJHt1c2FnZVswXS5yZXBsYWNlKC9cXCQwL2csIGJhc2UkMCl9YCB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzYWdlWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aS5kaXYoeyB0ZXh0OiBgJHt1c2FnZVsxXX1gLCBwYWRkaW5nOiBbMSwgMCwgMCwgMF0gfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCB1ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fKSB7XG4gICAgICAgICAgICAgICAgICAgIHUgPSBgJHtiYXNlJDB9IDwke19fKCdjb21tYW5kJyl9PlxcbmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1ID0gYCR7YmFzZSQwfSBbJHtfXygnY29tbWFuZCcpfV1cXG5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1aS5kaXYoYCR7dX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZHMubGVuZ3RoID4gMSB8fCAoY29tbWFuZHMubGVuZ3RoID09PSAxICYmICFjb21tYW5kc1swXVsyXSkpIHtcbiAgICAgICAgICAgIHVpLmRpdihfXygnQ29tbWFuZHM6JykpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudENvbW1hbmRzID0gY29udGV4dC5jb21tYW5kcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IGAke2NvbnRleHQuY29tbWFuZHMuam9pbignICcpfSBgXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgIGlmICh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRQYXJzZXJDb25maWd1cmF0aW9uKClbJ3NvcnQtY29tbWFuZHMnXSA9PT1cbiAgICAgICAgICAgICAgICB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5zb3J0KChhLCBiKSA9PiBhWzBdLmxvY2FsZUNvbXBhcmUoYlswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gYmFzZSQwID8gYCR7YmFzZSQwfSBgIDogJyc7XG4gICAgICAgICAgICBjb21tYW5kcy5mb3JFYWNoKGNvbW1hbmQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmRTdHJpbmcgPSBgJHtwcmVmaXh9JHtwYXJlbnRDb21tYW5kc30ke2NvbW1hbmRbMF0ucmVwbGFjZSgvXlxcJDAgPy8sICcnKX1gO1xuICAgICAgICAgICAgICAgIHVpLnNwYW4oe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb21tYW5kU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbMCwgMiwgMCwgMl0sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXhXaWR0aChjb21tYW5kcywgdGhlV3JhcCwgYCR7YmFzZSQwfSR7cGFyZW50Q29tbWFuZHN9YCkgKyA0LFxuICAgICAgICAgICAgICAgIH0sIHsgdGV4dDogY29tbWFuZFsxXSB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBoaW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kWzJdKVxuICAgICAgICAgICAgICAgICAgICBoaW50cy5wdXNoKGBbJHtfXygnZGVmYXVsdCcpfV1gKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZFszXSAmJiBjb21tYW5kWzNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBoaW50cy5wdXNoKGBbJHtfXygnYWxpYXNlczonKX0gJHtjb21tYW5kWzNdLmpvaW4oJywgJyl9XWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZFs0XSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbW1hbmRbNF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50cy5wdXNoKGBbJHtfXygnZGVwcmVjYXRlZDogJXMnLCBjb21tYW5kWzRdKX1dYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50cy5wdXNoKGBbJHtfXygnZGVwcmVjYXRlZCcpfV1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdih7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBoaW50cy5qb2luKCcgJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbMCwgMCwgMCwgMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsaWFzS2V5cyA9IChPYmplY3Qua2V5cyhvcHRpb25zLmFsaWFzKSB8fCBbXSkuY29uY2F0KE9iamVjdC5rZXlzKHlhcmdzLnBhcnNlZC5uZXdBbGlhc2VzKSB8fCBbXSk7XG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihrZXkgPT4gIXlhcmdzLnBhcnNlZC5uZXdBbGlhc2VzW2tleV0gJiZcbiAgICAgICAgICAgIGFsaWFzS2V5cy5ldmVyeShhbGlhcyA9PiAob3B0aW9ucy5hbGlhc1thbGlhc10gfHwgW10pLmluZGV4T2Yoa2V5KSA9PT0gLTEpKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdEdyb3VwID0gX18oJ09wdGlvbnM6Jyk7XG4gICAgICAgIGlmICghZ3JvdXBzW2RlZmF1bHRHcm91cF0pXG4gICAgICAgICAgICBncm91cHNbZGVmYXVsdEdyb3VwXSA9IFtdO1xuICAgICAgICBhZGRVbmdyb3VwZWRLZXlzKGtleXMsIG9wdGlvbnMuYWxpYXMsIGdyb3VwcywgZGVmYXVsdEdyb3VwKTtcbiAgICAgICAgY29uc3QgaXNMb25nU3dpdGNoID0gKHN3KSA9PiAvXi0tLy50ZXN0KGdldFRleHQoc3cpKTtcbiAgICAgICAgY29uc3QgZGlzcGxheWVkR3JvdXBzID0gT2JqZWN0LmtleXMoZ3JvdXBzKVxuICAgICAgICAgICAgLmZpbHRlcihncm91cE5hbWUgPT4gZ3JvdXBzW2dyb3VwTmFtZV0ubGVuZ3RoID4gMClcbiAgICAgICAgICAgIC5tYXAoZ3JvdXBOYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRLZXlzID0gZ3JvdXBzW2dyb3VwTmFtZV1cbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZpbHRlckhpZGRlbk9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhbGlhc0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgYWxpYXNLZXk7IChhbGlhc0tleSA9IGFsaWFzS2V5c1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgob3B0aW9ucy5hbGlhc1thbGlhc0tleV0gfHwgW10pLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxpYXNLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7IGdyb3VwTmFtZSwgbm9ybWFsaXplZEtleXMgfTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgbm9ybWFsaXplZEtleXMgfSkgPT4gbm9ybWFsaXplZEtleXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIC5tYXAoKHsgZ3JvdXBOYW1lLCBub3JtYWxpemVkS2V5cyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2l0Y2hlcyA9IG5vcm1hbGl6ZWRLZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IFtrZXldXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQob3B0aW9ucy5hbGlhc1trZXldIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHN3ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTmFtZSA9PT0gc2VsZi5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3c7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoL15bMC05XSQvLnRlc3Qoc3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmJvb2xlYW4uaW5jbHVkZXMoa2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICctJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICctLSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN3Lmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnLS0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy0nKSArIHN3KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zb3J0KChzdzEsIHN3MikgPT4gaXNMb25nU3dpdGNoKHN3MSkgPT09IGlzTG9uZ1N3aXRjaChzdzIpXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IGlzTG9uZ1N3aXRjaChzdzEpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogLTEpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICByZXR1cm4geyBncm91cE5hbWUsIG5vcm1hbGl6ZWRLZXlzLCBzd2l0Y2hlcyB9O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc2hvcnRTd2l0Y2hlc1VzZWQgPSBkaXNwbGF5ZWRHcm91cHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgZ3JvdXBOYW1lIH0pID0+IGdyb3VwTmFtZSAhPT0gc2VsZi5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCkpXG4gICAgICAgICAgICAuc29tZSgoeyBub3JtYWxpemVkS2V5cywgc3dpdGNoZXMgfSkgPT4gIW5vcm1hbGl6ZWRLZXlzLmV2ZXJ5KGtleSA9PiBpc0xvbmdTd2l0Y2goc3dpdGNoZXNba2V5XSkpKTtcbiAgICAgICAgaWYgKHNob3J0U3dpdGNoZXNVc2VkKSB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRHcm91cHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IGdyb3VwTmFtZSB9KSA9PiBncm91cE5hbWUgIT09IHNlbGYuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSgpKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh7IG5vcm1hbGl6ZWRLZXlzLCBzd2l0Y2hlcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMb25nU3dpdGNoKHN3aXRjaGVzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hlc1trZXldID0gYWRkSW5kZW50YXRpb24oc3dpdGNoZXNba2V5XSwgJy14LCAnLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXllZEdyb3Vwcy5mb3JFYWNoKCh7IGdyb3VwTmFtZSwgbm9ybWFsaXplZEtleXMsIHN3aXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgIHVpLmRpdihncm91cE5hbWUpO1xuICAgICAgICAgICAgbm9ybWFsaXplZEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtzd2l0Y2ggPSBzd2l0Y2hlc1trZXldO1xuICAgICAgICAgICAgICAgIGxldCBkZXNjID0gZGVzY3JpcHRpb25zW2tleV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChkZXNjLmluY2x1ZGVzKGRlZmVyWTE4bkxvb2t1cFByZWZpeCkpXG4gICAgICAgICAgICAgICAgICAgIGRlc2MgPSBfXyhkZXNjLnN1YnN0cmluZyhkZWZlclkxOG5Mb29rdXBQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYm9vbGVhbi5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYFske19fKCdib29sZWFuJyl9XWA7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY291bnQuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnY291bnQnKX1dYDtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJpbmcuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnc3RyaW5nJyl9XWA7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubm9ybWFsaXplLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ3N0cmluZycpfV1gO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFycmF5LmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ2FycmF5Jyl9XWA7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubnVtYmVyLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ251bWJlcicpfV1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlcHJlY2F0ZWRFeHRyYSA9IChkZXByZWNhdGVkKSA9PiB0eXBlb2YgZGVwcmVjYXRlZCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgPyBgWyR7X18oJ2RlcHJlY2F0ZWQ6ICVzJywgZGVwcmVjYXRlZCl9XWBcbiAgICAgICAgICAgICAgICAgICAgOiBgWyR7X18oJ2RlcHJlY2F0ZWQnKX1dYDtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRyYSA9IFtcbiAgICAgICAgICAgICAgICAgICAga2V5IGluIGRlcHJlY2F0ZWRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRlcHJlY2F0ZWRFeHRyYShkZXByZWNhdGVkT3B0aW9uc1trZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBrZXkgaW4gZGVtYW5kZWRPcHRpb25zID8gYFske19fKCdyZXF1aXJlZCcpfV1gIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jaG9pY2VzICYmIG9wdGlvbnMuY2hvaWNlc1trZXldXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBbJHtfXygnY2hvaWNlczonKX0gJHtzZWxmLnN0cmluZ2lmaWVkVmFsdWVzKG9wdGlvbnMuY2hvaWNlc1trZXldKX1dYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U3RyaW5nKG9wdGlvbnMuZGVmYXVsdFtrZXldLCBvcHRpb25zLmRlZmF1bHREZXNjcmlwdGlvbltrZXldKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgICB1aS5zcGFuKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZ2V0VGV4dChrc3dpdGNoKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogWzAsIDIsIDAsIDIgKyBnZXRJbmRlbnRhdGlvbihrc3dpdGNoKV0sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXhXaWR0aChzd2l0Y2hlcywgdGhlV3JhcCkgKyA0LFxuICAgICAgICAgICAgICAgIH0sIGRlc2MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZEhpZGVPcHRpb25FeHRyYXMgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUNvbmZpZ3VyYXRpb24oKVsnaGlkZS10eXBlcyddID09PVxuICAgICAgICAgICAgICAgICAgICB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChleHRyYSAmJiAhc2hvdWxkSGlkZU9wdGlvbkV4dHJhcylcbiAgICAgICAgICAgICAgICAgICAgdWkuZGl2KHsgdGV4dDogZXh0cmEsIHBhZGRpbmc6IFswLCAwLCAwLCAyXSwgYWxpZ246ICdyaWdodCcgfSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdWkuZGl2KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZXhhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB1aS5kaXYoX18oJ0V4YW1wbGVzOicpKTtcbiAgICAgICAgICAgIGV4YW1wbGVzLmZvckVhY2goZXhhbXBsZSA9PiB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZVswXSA9IGV4YW1wbGVbMF0ucmVwbGFjZSgvXFwkMC9nLCBiYXNlJDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBleGFtcGxlcy5mb3JFYWNoKGV4YW1wbGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleGFtcGxlWzFdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXhhbXBsZVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAyLCAwLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXhhbXBsZVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAyLCAwLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXhXaWR0aChleGFtcGxlcywgdGhlV3JhcCkgKyA0LFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBleGFtcGxlWzFdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcGlsb2dzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBlcGlsb2dzXG4gICAgICAgICAgICAgICAgLm1hcChlcGlsb2cgPT4gZXBpbG9nLnJlcGxhY2UoL1xcJDAvZywgYmFzZSQwKSlcbiAgICAgICAgICAgICAgICAuam9pbignXFxuJyk7XG4gICAgICAgICAgICB1aS5kaXYoYCR7ZX1cXG5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG1heFdpZHRoKHRhYmxlLCB0aGVXcmFwLCBtb2RpZmllcikge1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFibGUpKSB7XG4gICAgICAgICAgICB0YWJsZSA9IE9iamVjdC52YWx1ZXModGFibGUpLm1hcCh2ID0+IFt2XSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgoc2hpbS5zdHJpbmdXaWR0aChtb2RpZmllciA/IGAke21vZGlmaWVyfSAke2dldFRleHQodlswXSl9YCA6IGdldFRleHQodlswXSkpICsgZ2V0SW5kZW50YXRpb24odlswXSksIHdpZHRoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGVXcmFwKVxuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgcGFyc2VJbnQoKHRoZVdyYXAgKiAwLjUpLnRvU3RyaW5nKCksIDEwKSk7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplQWxpYXNlcygpIHtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRPcHRpb25zID0geWFyZ3MuZ2V0RGVtYW5kZWRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIChPYmplY3Qua2V5cyhvcHRpb25zLmFsaWFzKSB8fCBbXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy5hbGlhc1trZXldLmZvckVhY2goYWxpYXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbnNbYWxpYXNdKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRlc2NyaWJlKGtleSwgZGVzY3JpcHRpb25zW2FsaWFzXSk7XG4gICAgICAgICAgICAgICAgaWYgKGFsaWFzIGluIGRlbWFuZGVkT3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3MuZGVtYW5kT3B0aW9uKGtleSwgZGVtYW5kZWRPcHRpb25zW2FsaWFzXSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYm9vbGVhbi5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLmJvb2xlYW4oa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb3VudC5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLmNvdW50KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RyaW5nLmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3Muc3RyaW5nKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubm9ybWFsaXplLmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3Mubm9ybWFsaXplKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXJyYXkuaW5jbHVkZXMoYWxpYXMpKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5hcnJheShrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm51bWJlci5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLm51bWJlcihrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgY2FjaGVkSGVscE1lc3NhZ2U7XG4gICAgc2VsZi5jYWNoZUhlbHBNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWNoZWRIZWxwTWVzc2FnZSA9IHRoaXMuaGVscCgpO1xuICAgIH07XG4gICAgc2VsZi5jbGVhckNhY2hlZEhlbHBNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWNoZWRIZWxwTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHNlbGYuaGFzQ2FjaGVkSGVscE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhIWNhY2hlZEhlbHBNZXNzYWdlO1xuICAgIH07XG4gICAgZnVuY3Rpb24gYWRkVW5ncm91cGVkS2V5cyhrZXlzLCBhbGlhc2VzLCBncm91cHMsIGRlZmF1bHRHcm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBlZEtleXMgPSBbXTtcbiAgICAgICAgbGV0IHRvQ2hlY2sgPSBudWxsO1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICAgICAgZ3JvdXBlZEtleXMgPSBncm91cGVkS2V5cy5jb25jYXQoZ3JvdXBzW2dyb3VwXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRvQ2hlY2sgPSBba2V5XS5jb25jYXQoYWxpYXNlc1trZXldKTtcbiAgICAgICAgICAgIGlmICghdG9DaGVjay5zb21lKGsgPT4gZ3JvdXBlZEtleXMuaW5kZXhPZihrKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzW2RlZmF1bHRHcm91cF0ucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwZWRLZXlzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaWx0ZXJIaWRkZW5PcHRpb25zKGtleSkge1xuICAgICAgICByZXR1cm4gKHlhcmdzLmdldE9wdGlvbnMoKS5oaWRkZW5PcHRpb25zLmluZGV4T2Yoa2V5KSA8IDAgfHxcbiAgICAgICAgICAgIHlhcmdzLnBhcnNlZC5hcmd2W3lhcmdzLmdldE9wdGlvbnMoKS5zaG93SGlkZGVuT3B0XSk7XG4gICAgfVxuICAgIHNlbGYuc2hvd0hlbHAgPSAobGV2ZWwpID0+IHtcbiAgICAgICAgY29uc3QgbG9nZ2VyID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0TG9nZ2VySW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKCFsZXZlbClcbiAgICAgICAgICAgIGxldmVsID0gJ2Vycm9yJztcbiAgICAgICAgY29uc3QgZW1pdCA9IHR5cGVvZiBsZXZlbCA9PT0gJ2Z1bmN0aW9uJyA/IGxldmVsIDogbG9nZ2VyW2xldmVsXTtcbiAgICAgICAgZW1pdChzZWxmLmhlbHAoKSk7XG4gICAgfTtcbiAgICBzZWxmLmZ1bmN0aW9uRGVzY3JpcHRpb24gPSBmbiA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm4ubmFtZVxuICAgICAgICAgICAgPyBzaGltLlBhcnNlci5kZWNhbWVsaXplKGZuLm5hbWUsICctJylcbiAgICAgICAgICAgIDogX18oJ2dlbmVyYXRlZC12YWx1ZScpO1xuICAgICAgICByZXR1cm4gWycoJywgZGVzY3JpcHRpb24sICcpJ10uam9pbignJyk7XG4gICAgfTtcbiAgICBzZWxmLnN0cmluZ2lmaWVkVmFsdWVzID0gZnVuY3Rpb24gc3RyaW5naWZpZWRWYWx1ZXModmFsdWVzLCBzZXBhcmF0b3IpIHtcbiAgICAgICAgbGV0IHN0cmluZyA9ICcnO1xuICAgICAgICBjb25zdCBzZXAgPSBzZXBhcmF0b3IgfHwgJywgJztcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXS5jb25jYXQodmFsdWVzKTtcbiAgICAgICAgaWYgKCF2YWx1ZXMgfHwgIWFycmF5Lmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIGFycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKHN0cmluZy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IHNlcDtcbiAgICAgICAgICAgIHN0cmluZyArPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZGVmYXVsdFN0cmluZyh2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSBgWyR7X18oJ2RlZmF1bHQ6Jyl9IGA7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICFkZWZhdWx0RGVzY3JpcHRpb24pXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGRlZmF1bHREZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgc3RyaW5nICs9IGRlZmF1bHREZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IGBcIiR7dmFsdWV9XCJgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3N0cmluZ31dYDtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2luZG93V2lkdGgoKSB7XG4gICAgICAgIGNvbnN0IG1heFdpZHRoID0gODA7XG4gICAgICAgIGlmIChzaGltLnByb2Nlc3Muc3RkQ29sdW1ucykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKG1heFdpZHRoLCBzaGltLnByb2Nlc3Muc3RkQ29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWF4V2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHZlcnNpb24gPSBudWxsO1xuICAgIHNlbGYudmVyc2lvbiA9IHZlciA9PiB7XG4gICAgICAgIHZlcnNpb24gPSB2ZXI7XG4gICAgfTtcbiAgICBzZWxmLnNob3dWZXJzaW9uID0gbGV2ZWwgPT4ge1xuICAgICAgICBjb25zdCBsb2dnZXIgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRMb2dnZXJJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoIWxldmVsKVxuICAgICAgICAgICAgbGV2ZWwgPSAnZXJyb3InO1xuICAgICAgICBjb25zdCBlbWl0ID0gdHlwZW9mIGxldmVsID09PSAnZnVuY3Rpb24nID8gbGV2ZWwgOiBsb2dnZXJbbGV2ZWxdO1xuICAgICAgICBlbWl0KHZlcnNpb24pO1xuICAgIH07XG4gICAgc2VsZi5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KGxvY2FsTG9va3VwKSB7XG4gICAgICAgIGZhaWxNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgZmFpbHVyZU91dHB1dCA9IGZhbHNlO1xuICAgICAgICB1c2FnZXMgPSBbXTtcbiAgICAgICAgdXNhZ2VEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBlcGlsb2dzID0gW107XG4gICAgICAgIGV4YW1wbGVzID0gW107XG4gICAgICAgIGNvbW1hbmRzID0gW107XG4gICAgICAgIGRlc2NyaXB0aW9ucyA9IG9iakZpbHRlcihkZXNjcmlwdGlvbnMsIGsgPT4gIWxvY2FsTG9va3VwW2tdKTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBjb25zdCBmcm96ZW5zID0gW107XG4gICAgc2VsZi5mcmVlemUgPSBmdW5jdGlvbiBmcmVlemUoKSB7XG4gICAgICAgIGZyb3plbnMucHVzaCh7XG4gICAgICAgICAgICBmYWlsTWVzc2FnZSxcbiAgICAgICAgICAgIGZhaWx1cmVPdXRwdXQsXG4gICAgICAgICAgICB1c2FnZXMsXG4gICAgICAgICAgICB1c2FnZURpc2FibGVkLFxuICAgICAgICAgICAgZXBpbG9ncyxcbiAgICAgICAgICAgIGV4YW1wbGVzLFxuICAgICAgICAgICAgY29tbWFuZHMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgc2VsZi51bmZyZWV6ZSA9IGZ1bmN0aW9uIHVuZnJlZXplKGRlZmF1bHRDb21tYW5kID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZnJvemVuID0gZnJvemVucy5wb3AoKTtcbiAgICAgICAgaWYgKCFmcm96ZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChkZWZhdWx0Q29tbWFuZCkge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25zID0geyAuLi5mcm96ZW4uZGVzY3JpcHRpb25zLCAuLi5kZXNjcmlwdGlvbnMgfTtcbiAgICAgICAgICAgIGNvbW1hbmRzID0gWy4uLmZyb3plbi5jb21tYW5kcywgLi4uY29tbWFuZHNdO1xuICAgICAgICAgICAgdXNhZ2VzID0gWy4uLmZyb3plbi51c2FnZXMsIC4uLnVzYWdlc107XG4gICAgICAgICAgICBleGFtcGxlcyA9IFsuLi5mcm96ZW4uZXhhbXBsZXMsIC4uLmV4YW1wbGVzXTtcbiAgICAgICAgICAgIGVwaWxvZ3MgPSBbLi4uZnJvemVuLmVwaWxvZ3MsIC4uLmVwaWxvZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBmYWlsTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlT3V0cHV0LFxuICAgICAgICAgICAgICAgIHVzYWdlcyxcbiAgICAgICAgICAgICAgICB1c2FnZURpc2FibGVkLFxuICAgICAgICAgICAgICAgIGVwaWxvZ3MsXG4gICAgICAgICAgICAgICAgZXhhbXBsZXMsXG4gICAgICAgICAgICAgICAgY29tbWFuZHMsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25zLFxuICAgICAgICAgICAgfSA9IGZyb3plbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBzZWxmO1xufVxuZnVuY3Rpb24gaXNJbmRlbnRlZFRleHQodGV4dCkge1xuICAgIHJldHVybiB0eXBlb2YgdGV4dCA9PT0gJ29iamVjdCc7XG59XG5mdW5jdGlvbiBhZGRJbmRlbnRhdGlvbih0ZXh0LCBpbmRlbnQpIHtcbiAgICByZXR1cm4gaXNJbmRlbnRlZFRleHQodGV4dClcbiAgICAgICAgPyB7IHRleHQ6IHRleHQudGV4dCwgaW5kZW50YXRpb246IHRleHQuaW5kZW50YXRpb24gKyBpbmRlbnQgfVxuICAgICAgICA6IHsgdGV4dCwgaW5kZW50YXRpb246IGluZGVudCB9O1xufVxuZnVuY3Rpb24gZ2V0SW5kZW50YXRpb24odGV4dCkge1xuICAgIHJldHVybiBpc0luZGVudGVkVGV4dCh0ZXh0KSA/IHRleHQuaW5kZW50YXRpb24gOiAwO1xufVxuZnVuY3Rpb24gZ2V0VGV4dCh0ZXh0KSB7XG4gICAgcmV0dXJuIGlzSW5kZW50ZWRUZXh0KHRleHQpID8gdGV4dC50ZXh0IDogdGV4dDtcbn1cbiIsICJleHBvcnQgY29uc3QgY29tcGxldGlvblNoVGVtcGxhdGUgPSBgIyMjLWJlZ2luLXt7YXBwX25hbWV9fS1jb21wbGV0aW9ucy0jIyNcbiNcbiMgeWFyZ3MgY29tbWFuZCBjb21wbGV0aW9uIHNjcmlwdFxuI1xuIyBJbnN0YWxsYXRpb246IHt7YXBwX3BhdGh9fSB7e2NvbXBsZXRpb25fY29tbWFuZH19ID4+IH4vLmJhc2hyY1xuIyAgICBvciB7e2FwcF9wYXRofX0ge3tjb21wbGV0aW9uX2NvbW1hbmR9fSA+PiB+Ly5iYXNoX3Byb2ZpbGUgb24gT1NYLlxuI1xuX3t7YXBwX25hbWV9fV95YXJnc19jb21wbGV0aW9ucygpXG57XG4gICAgbG9jYWwgY3VyX3dvcmQgYXJncyB0eXBlX2xpc3RcblxuICAgIGN1cl93b3JkPVwiXFwke0NPTVBfV09SRFNbQ09NUF9DV09SRF19XCJcbiAgICBhcmdzPShcIlxcJHtDT01QX1dPUkRTW0BdfVwiKVxuXG4gICAgIyBhc2sgeWFyZ3MgdG8gZ2VuZXJhdGUgY29tcGxldGlvbnMuXG4gICAgIyBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwOTQ0MTk1LzcwODAwMzYgZm9yIHRoZSBzcGFjZXMtaGFuZGxpbmcgYXdrXG4gICAgbWFwZmlsZSAtdCB0eXBlX2xpc3QgPCA8KHt7YXBwX3BhdGh9fSAtLWdldC15YXJncy1jb21wbGV0aW9ucyBcIlxcJHthcmdzW0BdfVwiKVxuICAgIG1hcGZpbGUgLXQgQ09NUFJFUExZIDwgPChjb21wZ2VuIC1XIFwiJCggcHJpbnRmICclcSAnIFwiXFwke3R5cGVfbGlzdFtAXX1cIiApXCIgLS0gXCJcXCR7Y3VyX3dvcmR9XCIgfFxuICAgICAgICBhd2sgJy8gLyB7IHByaW50IFwiXFxcXFwiXCIkMFwiXFxcXFwiXCIgfSAvXlteIF0rJC8geyBwcmludCAkMCB9JylcblxuICAgICMgaWYgbm8gbWF0Y2ggd2FzIGZvdW5kLCBmYWxsIGJhY2sgdG8gZmlsZW5hbWUgY29tcGxldGlvblxuICAgIGlmIFsgXFwkeyNDT01QUkVQTFlbQF19IC1lcSAwIF07IHRoZW5cbiAgICAgIENPTVBSRVBMWT0oKVxuICAgIGZpXG5cbiAgICByZXR1cm4gMFxufVxuY29tcGxldGUgLW8gYmFzaGRlZmF1bHQgLW8gZGVmYXVsdCAtRiBfe3thcHBfbmFtZX19X3lhcmdzX2NvbXBsZXRpb25zIHt7YXBwX25hbWV9fVxuIyMjLWVuZC17e2FwcF9uYW1lfX0tY29tcGxldGlvbnMtIyMjXG5gO1xuZXhwb3J0IGNvbnN0IGNvbXBsZXRpb25ac2hUZW1wbGF0ZSA9IGAjY29tcGRlZiB7e2FwcF9uYW1lfX1cbiMjIy1iZWdpbi17e2FwcF9uYW1lfX0tY29tcGxldGlvbnMtIyMjXG4jXG4jIHlhcmdzIGNvbW1hbmQgY29tcGxldGlvbiBzY3JpcHRcbiNcbiMgSW5zdGFsbGF0aW9uOiB7e2FwcF9wYXRofX0ge3tjb21wbGV0aW9uX2NvbW1hbmR9fSA+PiB+Ly56c2hyY1xuIyAgICBvciB7e2FwcF9wYXRofX0ge3tjb21wbGV0aW9uX2NvbW1hbmR9fSA+PiB+Ly56cHJvZmlsZSBvbiBPU1guXG4jXG5fe3thcHBfbmFtZX19X3lhcmdzX2NvbXBsZXRpb25zKClcbntcbiAgbG9jYWwgcmVwbHlcbiAgbG9jYWwgc2k9JElGU1xuICBJRlM9JCdcXG4nIHJlcGx5PSgkKENPTVBfQ1dPUkQ9XCIkKChDVVJSRU5ULTEpKVwiIENPTVBfTElORT1cIiRCVUZGRVJcIiBDT01QX1BPSU5UPVwiJENVUlNPUlwiIHt7YXBwX3BhdGh9fSAtLWdldC15YXJncy1jb21wbGV0aW9ucyBcIlxcJHt3b3Jkc1tAXX1cIikpXG4gIElGUz0kc2lcbiAgaWYgW1sgXFwkeyNyZXBseX0gLWd0IDAgXV07IHRoZW5cbiAgICBfZGVzY3JpYmUgJ3ZhbHVlcycgcmVwbHlcbiAgZWxzZVxuICAgIF9kZWZhdWx0XG4gIGZpXG59XG5pZiBbWyBcIidcXCR7enNoX2V2YWxfY29udGV4dFstMV19XCIgPT0gXCJsb2FkYXV0b2Z1bmNcIiBdXTsgdGhlblxuICBfe3thcHBfbmFtZX19X3lhcmdzX2NvbXBsZXRpb25zIFwiJEBcIlxuZWxzZVxuICBjb21wZGVmIF97e2FwcF9uYW1lfX1feWFyZ3NfY29tcGxldGlvbnMge3thcHBfbmFtZX19XG5maVxuIyMjLWVuZC17e2FwcF9uYW1lfX0tY29tcGxldGlvbnMtIyMjXG5gO1xuIiwgImltcG9ydCB7IGlzQ29tbWFuZEJ1aWxkZXJDYWxsYmFjayB9IGZyb20gJy4vY29tbWFuZC5qcyc7XG5pbXBvcnQgeyBhc3NlcnROb3RTdHJpY3RFcXVhbCB9IGZyb20gJy4vdHlwaW5ncy9jb21tb24tdHlwZXMuanMnO1xuaW1wb3J0ICogYXMgdGVtcGxhdGVzIGZyb20gJy4vY29tcGxldGlvbi10ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pcy1wcm9taXNlLmpzJztcbmltcG9ydCB7IHBhcnNlQ29tbWFuZCB9IGZyb20gJy4vcGFyc2UtY29tbWFuZC5qcyc7XG5leHBvcnQgY2xhc3MgQ29tcGxldGlvbiB7XG4gICAgY29uc3RydWN0b3IoeWFyZ3MsIHVzYWdlLCBjb21tYW5kLCBzaGltKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICB0aGlzLnlhcmdzID0geWFyZ3M7XG4gICAgICAgIHRoaXMudXNhZ2UgPSB1c2FnZTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0gY29tbWFuZDtcbiAgICAgICAgdGhpcy5zaGltID0gc2hpbTtcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uS2V5ID0gJ2dldC15YXJncy1jb21wbGV0aW9ucyc7XG4gICAgICAgIHRoaXMuYWxpYXNlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmRleEFmdGVyTGFzdFJlc2V0ID0gMDtcbiAgICAgICAgdGhpcy56c2hTaGVsbCA9XG4gICAgICAgICAgICAoX2MgPSAoKChfYSA9IHRoaXMuc2hpbS5nZXRFbnYoJ1NIRUxMJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbmNsdWRlcygnenNoJykpIHx8XG4gICAgICAgICAgICAgICAgKChfYiA9IHRoaXMuc2hpbS5nZXRFbnYoJ1pTSF9OQU1FJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbmNsdWRlcygnenNoJykpKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZmFsc2U7XG4gICAgfVxuICAgIGRlZmF1bHRDb21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIGRvbmUpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmNvbW1hbmQuZ2V0Q29tbWFuZEhhbmRsZXJzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGFyZ3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2FyZ3NbaV1dICYmIGhhbmRsZXJzW2FyZ3NbaV1dLmJ1aWxkZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidWlsZGVyID0gaGFuZGxlcnNbYXJnc1tpXV0uYnVpbGRlcjtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21tYW5kQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhBZnRlckxhc3RSZXNldCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gdGhpcy55YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICBidWlsZGVyKHksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geS5hcmd2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wbGV0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmNvbW1hbmRDb21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgY3VycmVudCk7XG4gICAgICAgIHRoaXMub3B0aW9uQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpO1xuICAgICAgICB0aGlzLmNob2ljZXNGcm9tT3B0aW9uc0NvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KTtcbiAgICAgICAgdGhpcy5jaG9pY2VzRnJvbVBvc2l0aW9uYWxzQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpO1xuICAgICAgICBkb25lKG51bGwsIGNvbXBsZXRpb25zKTtcbiAgICB9XG4gICAgY29tbWFuZENvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBjdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbW1hbmRzID0gdGhpcy55YXJnc1xuICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAuZ2V0Q29udGV4dCgpLmNvbW1hbmRzO1xuICAgICAgICBpZiAoIWN1cnJlbnQubWF0Y2goL14tLykgJiZcbiAgICAgICAgICAgIHBhcmVudENvbW1hbmRzW3BhcmVudENvbW1hbmRzLmxlbmd0aCAtIDFdICE9PSBjdXJyZW50ICYmXG4gICAgICAgICAgICAhdGhpcy5wcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykpIHtcbiAgICAgICAgICAgIHRoaXMudXNhZ2UuZ2V0Q29tbWFuZHMoKS5mb3JFYWNoKHVzYWdlQ29tbWFuZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZE5hbWUgPSBwYXJzZUNvbW1hbmQodXNhZ2VDb21tYW5kWzBdKS5jbWQ7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXhPZihjb21tYW5kTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy56c2hTaGVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnMucHVzaChjb21tYW5kTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjID0gdXNhZ2VDb21tYW5kWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnMucHVzaChjb21tYW5kTmFtZS5yZXBsYWNlKC86L2csICdcXFxcOicpICsgJzonICsgZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvcHRpb25Db21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCkge1xuICAgICAgICBpZiAoKGN1cnJlbnQubWF0Y2goL14tLykgfHwgKGN1cnJlbnQgPT09ICcnICYmIGNvbXBsZXRpb25zLmxlbmd0aCA9PT0gMCkpICYmXG4gICAgICAgICAgICAhdGhpcy5wcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uYWxLZXlzID0gdGhpcy55YXJncy5nZXRHcm91cHMoKVt0aGlzLnVzYWdlLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKV0gfHwgW107XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmtleSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5lZ2FibGUgPSAhIW9wdGlvbnMuY29uZmlndXJhdGlvblsnYm9vbGVhbi1uZWdhdGlvbiddICYmXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9vbGVhbi5pbmNsdWRlcyhrZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUG9zaXRpb25hbEtleSA9IHBvc2l0aW9uYWxLZXlzLmluY2x1ZGVzKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Bvc2l0aW9uYWxLZXkgJiZcbiAgICAgICAgICAgICAgICAgICAgIW9wdGlvbnMuaGlkZGVuT3B0aW9ucy5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmFyZ3NDb250YWluS2V5KGFyZ3MsIGtleSwgbmVnYWJsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZU9wdGlvbktleShrZXksIGNvbXBsZXRpb25zLCBjdXJyZW50LCBuZWdhYmxlICYmICEhb3B0aW9ucy5kZWZhdWx0W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNob2ljZXNGcm9tT3B0aW9uc0NvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzQXJnSGFzQ2hvaWNlcyhhcmdzKSkge1xuICAgICAgICAgICAgY29uc3QgY2hvaWNlcyA9IHRoaXMuZ2V0UHJldmlvdXNBcmdDaG9pY2VzKGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGNob2ljZXMgJiYgY2hvaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGlvbnMucHVzaCguLi5jaG9pY2VzLm1hcChjID0+IGMucmVwbGFjZSgvOi9nLCAnXFxcXDonKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNob2ljZXNGcm9tUG9zaXRpb25hbHNDb21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCkge1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gJycgJiZcbiAgICAgICAgICAgIGNvbXBsZXRpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNBcmdIYXNDaG9pY2VzKGFyZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9zaXRpb25hbEtleXMgPSB0aGlzLnlhcmdzLmdldEdyb3VwcygpW3RoaXMudXNhZ2UuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSgpXSB8fCBbXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5tYXgodGhpcy5pbmRleEFmdGVyTGFzdFJlc2V0LCB0aGlzLnlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKS5jb21tYW5kcy5sZW5ndGggK1xuICAgICAgICAgICAgMSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uYWxLZXkgPSBwb3NpdGlvbmFsS2V5c1thcmd2Ll8ubGVuZ3RoIC0gb2Zmc2V0IC0gMV07XG4gICAgICAgIGlmICghcG9zaXRpb25hbEtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNob2ljZXMgPSB0aGlzLnlhcmdzLmdldE9wdGlvbnMoKS5jaG9pY2VzW3Bvc2l0aW9uYWxLZXldIHx8IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGNob2ljZSBvZiBjaG9pY2VzKSB7XG4gICAgICAgICAgICBpZiAoY2hvaWNlLnN0YXJ0c1dpdGgoY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGNob2ljZS5yZXBsYWNlKC86L2csICdcXFxcOicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRQcmV2aW91c0FyZ0Nob2ljZXMoYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgcHJldmlvdXNBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgICAgaWYgKCFwcmV2aW91c0FyZy5zdGFydHNXaXRoKCctJykgJiYgYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmaWx0ZXIgPSBwcmV2aW91c0FyZztcbiAgICAgICAgICAgIHByZXZpb3VzQXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDJdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJldmlvdXNBcmcuc3RhcnRzV2l0aCgnLScpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcmV2aW91c0FyZ0tleSA9IHByZXZpb3VzQXJnLnJlcGxhY2UoL14tKy8sICcnKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMueWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICBjb25zdCBwb3NzaWJsZUFsaWFzZXMgPSBbXG4gICAgICAgICAgICBwcmV2aW91c0FyZ0tleSxcbiAgICAgICAgICAgIC4uLih0aGlzLnlhcmdzLmdldEFsaWFzZXMoKVtwcmV2aW91c0FyZ0tleV0gfHwgW10pLFxuICAgICAgICBdO1xuICAgICAgICBsZXQgY2hvaWNlcztcbiAgICAgICAgZm9yIChjb25zdCBwb3NzaWJsZUFsaWFzIG9mIHBvc3NpYmxlQWxpYXNlcykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLmtleSwgcG9zc2libGVBbGlhcykgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KG9wdGlvbnMuY2hvaWNlc1twb3NzaWJsZUFsaWFzXSkpIHtcbiAgICAgICAgICAgICAgICBjaG9pY2VzID0gb3B0aW9ucy5jaG9pY2VzW3Bvc3NpYmxlQWxpYXNdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaG9pY2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+ICFmaWx0ZXIgfHwgY2hvaWNlLnN0YXJ0c1dpdGgoZmlsdGVyKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJldmlvdXNBcmdIYXNDaG9pY2VzKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgY2hvaWNlcyA9IHRoaXMuZ2V0UHJldmlvdXNBcmdDaG9pY2VzKGFyZ3MpO1xuICAgICAgICByZXR1cm4gY2hvaWNlcyAhPT0gdW5kZWZpbmVkICYmIGNob2ljZXMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgYXJnc0NvbnRhaW5LZXkoYXJncywga2V5LCBuZWdhYmxlKSB7XG4gICAgICAgIGNvbnN0IGFyZ3NDb250YWlucyA9IChzKSA9PiBhcmdzLmluZGV4T2YoKC9eW14wLTldJC8udGVzdChzKSA/ICctJyA6ICctLScpICsgcykgIT09IC0xO1xuICAgICAgICBpZiAoYXJnc0NvbnRhaW5zKGtleSkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKG5lZ2FibGUgJiYgYXJnc0NvbnRhaW5zKGBuby0ke2tleX1gKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5hbGlhc2VzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIHRoaXMuYWxpYXNlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3NDb250YWlucyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29tcGxldGVPcHRpb25LZXkoa2V5LCBjb21wbGV0aW9ucywgY3VycmVudCwgbmVnYWJsZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgIGxldCBrZXlXaXRoRGVzYyA9IGtleTtcbiAgICAgICAgaWYgKHRoaXMuenNoU2hlbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NzID0gdGhpcy51c2FnZS5nZXREZXNjcmlwdGlvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzS2V5ID0gKF9iID0gKF9hID0gdGhpcyA9PT0gbnVsbCB8fCB0aGlzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0aGlzLmFsaWFzZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtrZXldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmluZChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzYyA9IGRlc2NzW2FsaWFzXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGRlc2MgPT09ICdzdHJpbmcnICYmIGRlc2MubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGVzY0Zyb21BbGlhcyA9IGFsaWFzS2V5ID8gZGVzY3NbYWxpYXNLZXldIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IChfZCA9IChfYyA9IGRlc2NzW2tleV0pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGRlc2NGcm9tQWxpYXMpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xuICAgICAgICAgICAga2V5V2l0aERlc2MgPSBgJHtrZXkucmVwbGFjZSgvOi9nLCAnXFxcXDonKX06JHtkZXNjXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19feWFyZ3NTdHJpbmdfXzonLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJyAnKX1gO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0c0J5VHdvRGFzaGVzID0gKHMpID0+IC9eLS0vLnRlc3Qocyk7XG4gICAgICAgIGNvbnN0IGlzU2hvcnRPcHRpb24gPSAocykgPT4gL15bXjAtOV0kLy50ZXN0KHMpO1xuICAgICAgICBjb25zdCBkYXNoZXMgPSAhc3RhcnRzQnlUd29EYXNoZXMoY3VycmVudCkgJiYgaXNTaG9ydE9wdGlvbihrZXkpID8gJy0nIDogJy0tJztcbiAgICAgICAgY29tcGxldGlvbnMucHVzaChkYXNoZXMgKyBrZXlXaXRoRGVzYyk7XG4gICAgICAgIGlmIChuZWdhYmxlKSB7XG4gICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGRhc2hlcyArICduby0nICsga2V5V2l0aERlc2MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGN1c3RvbUNvbXBsZXRpb24oYXJncywgYXJndiwgY3VycmVudCwgZG9uZSkge1xuICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbCh0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbiwgbnVsbCwgdGhpcy5zaGltKTtcbiAgICAgICAgaWYgKGlzU3luY0NvbXBsZXRpb25GdW5jdGlvbih0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uKGN1cnJlbnQsIGFyZ3YpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGltLnByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZShudWxsLCBsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpbS5wcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoZXJyLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNGYWxsYmFja0NvbXBsZXRpb25GdW5jdGlvbih0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbihjdXJyZW50LCBhcmd2LCAob25Db21wbGV0ZWQgPSBkb25lKSA9PiB0aGlzLmRlZmF1bHRDb21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIG9uQ29tcGxldGVkKSwgY29tcGxldGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgY29tcGxldGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb24oY3VycmVudCwgYXJndiwgY29tcGxldGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgY29tcGxldGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q29tcGxldGlvbihhcmdzLCBkb25lKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6ICcnO1xuICAgICAgICBjb25zdCBhcmd2ID0gdGhpcy55YXJncy5wYXJzZShhcmdzLCB0cnVlKTtcbiAgICAgICAgY29uc3QgY29tcGxldGlvbkZ1bmN0aW9uID0gdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb25cbiAgICAgICAgICAgID8gKGFyZ3YpID0+IHRoaXMuY3VzdG9tQ29tcGxldGlvbihhcmdzLCBhcmd2LCBjdXJyZW50LCBkb25lKVxuICAgICAgICAgICAgOiAoYXJndikgPT4gdGhpcy5kZWZhdWx0Q29tcGxldGlvbihhcmdzLCBhcmd2LCBjdXJyZW50LCBkb25lKTtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShhcmd2KVxuICAgICAgICAgICAgPyBhcmd2LnRoZW4oY29tcGxldGlvbkZ1bmN0aW9uKVxuICAgICAgICAgICAgOiBjb21wbGV0aW9uRnVuY3Rpb24oYXJndik7XG4gICAgfVxuICAgIGdlbmVyYXRlQ29tcGxldGlvblNjcmlwdCgkMCwgY21kKSB7XG4gICAgICAgIGxldCBzY3JpcHQgPSB0aGlzLnpzaFNoZWxsXG4gICAgICAgICAgICA/IHRlbXBsYXRlcy5jb21wbGV0aW9uWnNoVGVtcGxhdGVcbiAgICAgICAgICAgIDogdGVtcGxhdGVzLmNvbXBsZXRpb25TaFRlbXBsYXRlO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5zaGltLnBhdGguYmFzZW5hbWUoJDApO1xuICAgICAgICBpZiAoJDAubWF0Y2goL1xcLmpzJC8pKVxuICAgICAgICAgICAgJDAgPSBgLi8keyQwfWA7XG4gICAgICAgIHNjcmlwdCA9IHNjcmlwdC5yZXBsYWNlKC97e2FwcF9uYW1lfX0vZywgbmFtZSk7XG4gICAgICAgIHNjcmlwdCA9IHNjcmlwdC5yZXBsYWNlKC97e2NvbXBsZXRpb25fY29tbWFuZH19L2csIGNtZCk7XG4gICAgICAgIHJldHVybiBzY3JpcHQucmVwbGFjZSgve3thcHBfcGF0aH19L2csICQwKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJGdW5jdGlvbihmbikge1xuICAgICAgICB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbiA9IGZuO1xuICAgIH1cbiAgICBzZXRQYXJzZWQocGFyc2VkKSB7XG4gICAgICAgIHRoaXMuYWxpYXNlcyA9IHBhcnNlZC5hbGlhc2VzO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0aW9uKHlhcmdzLCB1c2FnZSwgY29tbWFuZCwgc2hpbSkge1xuICAgIHJldHVybiBuZXcgQ29tcGxldGlvbih5YXJncywgdXNhZ2UsIGNvbW1hbmQsIHNoaW0pO1xufVxuZnVuY3Rpb24gaXNTeW5jQ29tcGxldGlvbkZ1bmN0aW9uKGNvbXBsZXRpb25GdW5jdGlvbikge1xuICAgIHJldHVybiBjb21wbGV0aW9uRnVuY3Rpb24ubGVuZ3RoIDwgMztcbn1cbmZ1bmN0aW9uIGlzRmFsbGJhY2tDb21wbGV0aW9uRnVuY3Rpb24oY29tcGxldGlvbkZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbXBsZXRpb25GdW5jdGlvbi5sZW5ndGggPiAzO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBsZXZlbnNodGVpbihhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gYi5sZW5ndGg7XG4gICAgaWYgKGIubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gYS5sZW5ndGg7XG4gICAgY29uc3QgbWF0cml4ID0gW107XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hdHJpeFtpXSA9IFtpXTtcbiAgICB9XG4gICAgbGV0IGo7XG4gICAgZm9yIChqID0gMDsgaiA8PSBhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIG1hdHJpeFswXVtqXSA9IGo7XG4gICAgfVxuICAgIGZvciAoaSA9IDE7IGkgPD0gYi5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGogPSAxOyBqIDw9IGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChiLmNoYXJBdChpIC0gMSkgPT09IGEuY2hhckF0KGogLSAxKSkge1xuICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IG1hdHJpeFtpIC0gMV1baiAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAxICYmXG4gICAgICAgICAgICAgICAgICAgIGogPiAxICYmXG4gICAgICAgICAgICAgICAgICAgIGIuY2hhckF0KGkgLSAyKSA9PT0gYS5jaGFyQXQoaiAtIDEpICYmXG4gICAgICAgICAgICAgICAgICAgIGIuY2hhckF0KGkgLSAxKSA9PT0gYS5jaGFyQXQoaiAtIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IG1hdHJpeFtpIC0gMl1baiAtIDJdICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IE1hdGgubWluKG1hdHJpeFtpIC0gMV1baiAtIDFdICsgMSwgTWF0aC5taW4obWF0cml4W2ldW2ogLSAxXSArIDEsIG1hdHJpeFtpIC0gMV1bal0gKyAxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXRyaXhbYi5sZW5ndGhdW2EubGVuZ3RoXTtcbn1cbiIsICJpbXBvcnQgeyBhcmdzZXJ0IH0gZnJvbSAnLi9hcmdzZXJ0LmpzJztcbmltcG9ydCB7IGFzc2VydE5vdFN0cmljdEVxdWFsLCB9IGZyb20gJy4vdHlwaW5ncy9jb21tb24tdHlwZXMuanMnO1xuaW1wb3J0IHsgbGV2ZW5zaHRlaW4gYXMgZGlzdGFuY2UgfSBmcm9tICcuL3V0aWxzL2xldmVuc2h0ZWluLmpzJztcbmltcG9ydCB7IG9iakZpbHRlciB9IGZyb20gJy4vdXRpbHMvb2JqLWZpbHRlci5qcyc7XG5jb25zdCBzcGVjaWFsS2V5cyA9IFsnJDAnLCAnLS0nLCAnXyddO1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRpb24oeWFyZ3MsIHVzYWdlLCBzaGltKSB7XG4gICAgY29uc3QgX18gPSBzaGltLnkxOG4uX187XG4gICAgY29uc3QgX19uID0gc2hpbS55MThuLl9fbjtcbiAgICBjb25zdCBzZWxmID0ge307XG4gICAgc2VsZi5ub25PcHRpb25Db3VudCA9IGZ1bmN0aW9uIG5vbk9wdGlvbkNvdW50KGFyZ3YpIHtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRDb21tYW5kcyA9IHlhcmdzLmdldERlbWFuZGVkQ29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25hbENvdW50ID0gYXJndi5fLmxlbmd0aCArIChhcmd2WyctLSddID8gYXJndlsnLS0nXS5sZW5ndGggOiAwKTtcbiAgICAgICAgY29uc3QgX3MgPSBwb3NpdGlvbmFsQ291bnQgLSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRDb250ZXh0KCkuY29tbWFuZHMubGVuZ3RoO1xuICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fICYmXG4gICAgICAgICAgICAoX3MgPCBkZW1hbmRlZENvbW1hbmRzLl8ubWluIHx8IF9zID4gZGVtYW5kZWRDb21tYW5kcy5fLm1heCkpIHtcbiAgICAgICAgICAgIGlmIChfcyA8IGRlbWFuZGVkQ29tbWFuZHMuXy5taW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fLm1pbk1zZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoZGVtYW5kZWRDb21tYW5kcy5fLm1pbk1zZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZW1hbmRlZENvbW1hbmRzLl8ubWluTXNnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcJDAvZywgX3MudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMS8sIGRlbWFuZGVkQ29tbWFuZHMuXy5taW4udG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fbignTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgJ05vdCBlbm91Z2ggbm9uLW9wdGlvbiBhcmd1bWVudHM6IGdvdCAlcywgbmVlZCBhdCBsZWFzdCAlcycsIF9zLCBfcy50b1N0cmluZygpLCBkZW1hbmRlZENvbW1hbmRzLl8ubWluLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfcyA+IGRlbWFuZGVkQ29tbWFuZHMuXy5tYXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fLm1heE1zZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoZGVtYW5kZWRDb21tYW5kcy5fLm1heE1zZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZW1hbmRlZENvbW1hbmRzLl8ubWF4TXNnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcJDAvZywgX3MudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMS8sIGRlbWFuZGVkQ29tbWFuZHMuXy5tYXgudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fbignVG9vIG1hbnkgbm9uLW9wdGlvbiBhcmd1bWVudHM6IGdvdCAlcywgbWF4aW11bSBvZiAlcycsICdUb28gbWFueSBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBtYXhpbXVtIG9mICVzJywgX3MsIF9zLnRvU3RyaW5nKCksIGRlbWFuZGVkQ29tbWFuZHMuXy5tYXgudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5wb3NpdGlvbmFsQ291bnQgPSBmdW5jdGlvbiBwb3NpdGlvbmFsQ291bnQocmVxdWlyZWQsIG9ic2VydmVkKSB7XG4gICAgICAgIGlmIChvYnNlcnZlZCA8IHJlcXVpcmVkKSB7XG4gICAgICAgICAgICB1c2FnZS5mYWlsKF9fbignTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgJ05vdCBlbm91Z2ggbm9uLW9wdGlvbiBhcmd1bWVudHM6IGdvdCAlcywgbmVlZCBhdCBsZWFzdCAlcycsIG9ic2VydmVkLCBvYnNlcnZlZCArICcnLCByZXF1aXJlZCArICcnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYucmVxdWlyZWRBcmd1bWVudHMgPSBmdW5jdGlvbiByZXF1aXJlZEFyZ3VtZW50cyhhcmd2LCBkZW1hbmRlZE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG1pc3NpbmcgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZW1hbmRlZE9wdGlvbnMpKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCBrZXkpIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGFyZ3Zba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nID0gbWlzc2luZyB8fCB7fTtcbiAgICAgICAgICAgICAgICBtaXNzaW5nW2tleV0gPSBkZW1hbmRlZE9wdGlvbnNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWlzc2luZykge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tTXNncyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobWlzc2luZykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBtaXNzaW5nW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKG1zZyAmJiBjdXN0b21Nc2dzLmluZGV4T2YobXNnKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tTXNncy5wdXNoKG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY3VzdG9tTXNnID0gY3VzdG9tTXNncy5sZW5ndGggPyBgXFxuJHtjdXN0b21Nc2dzLmpvaW4oJ1xcbicpfWAgOiAnJztcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OiAlcycsICdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50czogJXMnLCBPYmplY3Qua2V5cyhtaXNzaW5nKS5sZW5ndGgsIE9iamVjdC5rZXlzKG1pc3NpbmcpLmpvaW4oJywgJykgKyBjdXN0b21Nc2cpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi51bmtub3duQXJndW1lbnRzID0gZnVuY3Rpb24gdW5rbm93bkFyZ3VtZW50cyhhcmd2LCBhbGlhc2VzLCBwb3NpdGlvbmFsTWFwLCBpc0RlZmF1bHRDb21tYW5kLCBjaGVja1Bvc2l0aW9uYWxzID0gdHJ1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRLZXlzID0geWFyZ3NcbiAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgLmdldENvbW1hbmRJbnN0YW5jZSgpXG4gICAgICAgICAgICAuZ2V0Q29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgdW5rbm93biA9IFtdO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzcGVjaWFsS2V5cy5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwb3NpdGlvbmFsTWFwLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRQYXJzZUNvbnRleHQoKSwga2V5KSAmJlxuICAgICAgICAgICAgICAgICFzZWxmLmlzVmFsaWRBbmRTb21lQWxpYXNJc05vdE5ldyhrZXksIGFsaWFzZXMpKSB7XG4gICAgICAgICAgICAgICAgdW5rbm93bi5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hlY2tQb3NpdGlvbmFscyAmJlxuICAgICAgICAgICAgKGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICBjb21tYW5kS2V5cy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0Q29tbWFuZCkpIHtcbiAgICAgICAgICAgIGFyZ3YuXy5zbGljZShjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGgpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbW1hbmRLZXlzLmluY2x1ZGVzKCcnICsga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goJycgKyBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja1Bvc2l0aW9uYWxzKSB7XG4gICAgICAgICAgICBjb25zdCBkZW1hbmRlZENvbW1hbmRzID0geWFyZ3MuZ2V0RGVtYW5kZWRDb21tYW5kcygpO1xuICAgICAgICAgICAgY29uc3QgbWF4Tm9uT3B0RGVtYW5kZWQgPSAoKF9hID0gZGVtYW5kZWRDb21tYW5kcy5fKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWF4KSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGggKyBtYXhOb25PcHREZW1hbmRlZDtcbiAgICAgICAgICAgIGlmIChleHBlY3RlZCA8IGFyZ3YuXy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcmd2Ll8uc2xpY2UoZXhwZWN0ZWQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gU3RyaW5nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudENvbnRleHQuY29tbWFuZHMuaW5jbHVkZXMoa2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXVua25vd24uaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93bi5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodW5rbm93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdVbmtub3duIGFyZ3VtZW50OiAlcycsICdVbmtub3duIGFyZ3VtZW50czogJXMnLCB1bmtub3duLmxlbmd0aCwgdW5rbm93bi5tYXAocyA9PiAocy50cmltKCkgPyBzIDogYFwiJHtzfVwiYCkpLmpvaW4oJywgJykpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi51bmtub3duQ29tbWFuZHMgPSBmdW5jdGlvbiB1bmtub3duQ29tbWFuZHMoYXJndikge1xuICAgICAgICBjb25zdCBjb21tYW5kS2V5cyA9IHlhcmdzXG4gICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgIC5nZXRDb21tYW5kSW5zdGFuY2UoKVxuICAgICAgICAgICAgLmdldENvbW1hbmRzKCk7XG4gICAgICAgIGNvbnN0IHVua25vd24gPSBbXTtcbiAgICAgICAgY29uc3QgY3VycmVudENvbnRleHQgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGggPiAwIHx8IGNvbW1hbmRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFyZ3YuXy5zbGljZShjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGgpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbW1hbmRLZXlzLmluY2x1ZGVzKCcnICsga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goJycgKyBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmtub3duLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdVbmtub3duIGNvbW1hbmQ6ICVzJywgJ1Vua25vd24gY29tbWFuZHM6ICVzJywgdW5rbm93bi5sZW5ndGgsIHVua25vd24uam9pbignLCAnKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuaXNWYWxpZEFuZFNvbWVBbGlhc0lzTm90TmV3ID0gZnVuY3Rpb24gaXNWYWxpZEFuZFNvbWVBbGlhc0lzTm90TmV3KGtleSwgYWxpYXNlcykge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbGlhc2VzLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QWxpYXNlcyA9IHlhcmdzLnBhcnNlZC5uZXdBbGlhc2VzO1xuICAgICAgICByZXR1cm4gW2tleSwgLi4uYWxpYXNlc1trZXldXS5zb21lKGEgPT4gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBbGlhc2VzLCBhKSB8fCAhbmV3QWxpYXNlc1trZXldKTtcbiAgICB9O1xuICAgIHNlbGYubGltaXRlZENob2ljZXMgPSBmdW5jdGlvbiBsaW1pdGVkQ2hvaWNlcyhhcmd2KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGludmFsaWQgPSB7fTtcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvcHRpb25zLmNob2ljZXMpLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHNwZWNpYWxLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucy5jaG9pY2VzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgW10uY29uY2F0KGFyZ3Zba2V5XSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNob2ljZXNba2V5XS5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWRba2V5XSA9IChpbnZhbGlkW2tleV0gfHwgW10pLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGludmFsaWRLZXlzID0gT2JqZWN0LmtleXMoaW52YWxpZCk7XG4gICAgICAgIGlmICghaW52YWxpZEtleXMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgbXNnID0gX18oJ0ludmFsaWQgdmFsdWVzOicpO1xuICAgICAgICBpbnZhbGlkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBtc2cgKz0gYFxcbiAgJHtfXygnQXJndW1lbnQ6ICVzLCBHaXZlbjogJXMsIENob2ljZXM6ICVzJywga2V5LCB1c2FnZS5zdHJpbmdpZmllZFZhbHVlcyhpbnZhbGlkW2tleV0pLCB1c2FnZS5zdHJpbmdpZmllZFZhbHVlcyhvcHRpb25zLmNob2ljZXNba2V5XSkpfWA7XG4gICAgICAgIH0pO1xuICAgICAgICB1c2FnZS5mYWlsKG1zZyk7XG4gICAgfTtcbiAgICBsZXQgaW1wbGllZCA9IHt9O1xuICAgIHNlbGYuaW1wbGllcyA9IGZ1bmN0aW9uIGltcGxpZXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW2FycmF5fG51bWJlcnxzdHJpbmddJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbXBsaWVzKGssIGtleVtrXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHlhcmdzLmdsb2JhbChrZXkpO1xuICAgICAgICAgICAgaWYgKCFpbXBsaWVkW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpbXBsaWVkW2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaSA9PiBzZWxmLmltcGxpZXMoa2V5LCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbCh2YWx1ZSwgdW5kZWZpbmVkLCBzaGltKTtcbiAgICAgICAgICAgICAgICBpbXBsaWVkW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuZ2V0SW1wbGllZCA9IGZ1bmN0aW9uIGdldEltcGxpZWQoKSB7XG4gICAgICAgIHJldHVybiBpbXBsaWVkO1xuICAgIH07XG4gICAgZnVuY3Rpb24ga2V5RXhpc3RzKGFyZ3YsIHZhbCkge1xuICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIodmFsKTtcbiAgICAgICAgdmFsID0gaXNOYU4obnVtKSA/IHZhbCA6IG51bTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB2YWwgPSBhcmd2Ll8ubGVuZ3RoID49IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwubWF0Y2goL14tLW5vLS4rLykpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5tYXRjaCgvXi0tbm8tKC4rKS8pWzFdO1xuICAgICAgICAgICAgdmFsID0gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgc2VsZi5pbXBsaWNhdGlvbnMgPSBmdW5jdGlvbiBpbXBsaWNhdGlvbnMoYXJndikge1xuICAgICAgICBjb25zdCBpbXBseUZhaWwgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMoaW1wbGllZCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ0tleSA9IGtleTtcbiAgICAgICAgICAgIChpbXBsaWVkW2tleV0gfHwgW10pLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBvcmlnS2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGtleSA9IGtleUV4aXN0cyhhcmd2LCBrZXkpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0ga2V5RXhpc3RzKGFyZ3YsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbXBseUZhaWwucHVzaChgICR7b3JpZ0tleX0gLT4gJHtvcmlnVmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW1wbHlGYWlsLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IG1zZyA9IGAke19fKCdJbXBsaWNhdGlvbnMgZmFpbGVkOicpfVxcbmA7XG4gICAgICAgICAgICBpbXBseUZhaWwuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbXNnICs9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1c2FnZS5mYWlsKG1zZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCBjb25mbGljdGluZyA9IHt9O1xuICAgIHNlbGYuY29uZmxpY3RzID0gZnVuY3Rpb24gY29uZmxpY3RzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xvYmplY3Q+IFthcnJheXxzdHJpbmddJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25mbGljdHMoaywga2V5W2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWFyZ3MuZ2xvYmFsKGtleSk7XG4gICAgICAgICAgICBpZiAoIWNvbmZsaWN0aW5nW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjb25mbGljdGluZ1trZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGkgPT4gc2VsZi5jb25mbGljdHMoa2V5LCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25mbGljdGluZ1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLmdldENvbmZsaWN0aW5nID0gKCkgPT4gY29uZmxpY3Rpbmc7XG4gICAgc2VsZi5jb25mbGljdGluZyA9IGZ1bmN0aW9uIGNvbmZsaWN0aW5nRm4oYXJndikge1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmxpY3Rpbmdba2V5XSkge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0uZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiBhcmd2W2tleV0gIT09IHVuZGVmaW5lZCAmJiBhcmd2W3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fKCdBcmd1bWVudHMgJXMgYW5kICVzIGFyZSBtdXR1YWxseSBleGNsdXNpdmUnLCBrZXksIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRQYXJzZXJDb25maWd1cmF0aW9uKClbJ3N0cmlwLWRhc2hlZCddKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25mbGljdGluZykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0uZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltzaGltLlBhcnNlci5jYW1lbENhc2Uoa2V5KV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltzaGltLlBhcnNlci5jYW1lbENhc2UodmFsdWUpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fKCdBcmd1bWVudHMgJXMgYW5kICVzIGFyZSBtdXR1YWxseSBleGNsdXNpdmUnLCBrZXksIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLnJlY29tbWVuZENvbW1hbmRzID0gZnVuY3Rpb24gcmVjb21tZW5kQ29tbWFuZHMoY21kLCBwb3RlbnRpYWxDb21tYW5kcykge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAzO1xuICAgICAgICBwb3RlbnRpYWxDb21tYW5kcyA9IHBvdGVudGlhbENvbW1hbmRzLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpO1xuICAgICAgICBsZXQgcmVjb21tZW5kZWQgPSBudWxsO1xuICAgICAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBjYW5kaWRhdGU7IChjYW5kaWRhdGUgPSBwb3RlbnRpYWxDb21tYW5kc1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gZGlzdGFuY2UoY21kLCBjYW5kaWRhdGUpO1xuICAgICAgICAgICAgaWYgKGQgPD0gdGhyZXNob2xkICYmIGQgPCBiZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkO1xuICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkID0gY2FuZGlkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWNvbW1lbmRlZClcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX18oJ0RpZCB5b3UgbWVhbiAlcz8nLCByZWNvbW1lbmRlZCkpO1xuICAgIH07XG4gICAgc2VsZi5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KGxvY2FsTG9va3VwKSB7XG4gICAgICAgIGltcGxpZWQgPSBvYmpGaWx0ZXIoaW1wbGllZCwgayA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICBjb25mbGljdGluZyA9IG9iakZpbHRlcihjb25mbGljdGluZywgayA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIGNvbnN0IGZyb3plbnMgPSBbXTtcbiAgICBzZWxmLmZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICAgICAgZnJvemVucy5wdXNoKHtcbiAgICAgICAgICAgIGltcGxpZWQsXG4gICAgICAgICAgICBjb25mbGljdGluZyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBzZWxmLnVuZnJlZXplID0gZnVuY3Rpb24gdW5mcmVlemUoKSB7XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IGZyb3plbnMucG9wKCk7XG4gICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKGZyb3plbiwgdW5kZWZpbmVkLCBzaGltKTtcbiAgICAgICAgKHsgaW1wbGllZCwgY29uZmxpY3RpbmcgfSA9IGZyb3plbik7XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZjtcbn1cbiIsICJpbXBvcnQgeyBZRXJyb3IgfSBmcm9tICcuLi95ZXJyb3IuanMnO1xubGV0IHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncyA9IFtdO1xubGV0IHNoaW07XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFeHRlbmRzKGNvbmZpZywgY3dkLCBtZXJnZUV4dGVuZHMsIF9zaGltKSB7XG4gICAgc2hpbSA9IF9zaGltO1xuICAgIGxldCBkZWZhdWx0Q29uZmlnID0ge307XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdleHRlbmRzJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuZXh0ZW5kcyAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICAgICAgY29uc3QgaXNQYXRoID0gL1xcLmpzb258XFwuLipyYyQvLnRlc3QoY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICBsZXQgcGF0aFRvRGVmYXVsdCA9IG51bGw7XG4gICAgICAgIGlmICghaXNQYXRoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhdGhUb0RlZmF1bHQgPSBpbXBvcnQubWV0YS5yZXNvbHZlKGNvbmZpZy5leHRlbmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhdGhUb0RlZmF1bHQgPSBnZXRQYXRoVG9EZWZhdWx0Q29uZmlnKGN3ZCwgY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrRm9yQ2lyY3VsYXJFeHRlbmRzKHBhdGhUb0RlZmF1bHQpO1xuICAgICAgICBwcmV2aW91c2x5VmlzaXRlZENvbmZpZ3MucHVzaChwYXRoVG9EZWZhdWx0KTtcbiAgICAgICAgZGVmYXVsdENvbmZpZyA9IGlzUGF0aFxuICAgICAgICAgICAgPyBKU09OLnBhcnNlKHNoaW0ucmVhZEZpbGVTeW5jKHBhdGhUb0RlZmF1bHQsICd1dGY4JykpXG4gICAgICAgICAgICA6IF9zaGltLnJlcXVpcmUoY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICBkZWxldGUgY29uZmlnLmV4dGVuZHM7XG4gICAgICAgIGRlZmF1bHRDb25maWcgPSBhcHBseUV4dGVuZHMoZGVmYXVsdENvbmZpZywgc2hpbS5wYXRoLmRpcm5hbWUocGF0aFRvRGVmYXVsdCksIG1lcmdlRXh0ZW5kcywgc2hpbSk7XG4gICAgfVxuICAgIHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncyA9IFtdO1xuICAgIHJldHVybiBtZXJnZUV4dGVuZHNcbiAgICAgICAgPyBtZXJnZURlZXAoZGVmYXVsdENvbmZpZywgY29uZmlnKVxuICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG59XG5mdW5jdGlvbiBjaGVja0ZvckNpcmN1bGFyRXh0ZW5kcyhjZmdQYXRoKSB7XG4gICAgaWYgKHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncy5pbmRleE9mKGNmZ1BhdGgpID4gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihgQ2lyY3VsYXIgZXh0ZW5kZWQgY29uZmlndXJhdGlvbnM6ICcke2NmZ1BhdGh9Jy5gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRQYXRoVG9EZWZhdWx0Q29uZmlnKGN3ZCwgcGF0aFRvRXh0ZW5kKSB7XG4gICAgcmV0dXJuIHNoaW0ucGF0aC5yZXNvbHZlKGN3ZCwgcGF0aFRvRXh0ZW5kKTtcbn1cbmZ1bmN0aW9uIG1lcmdlRGVlcChjb25maWcxLCBjb25maWcyKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIGNvbmZpZzEpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGNvbmZpZzIpKSB7XG4gICAgICAgIGlmIChpc09iamVjdChjb25maWcyW2tleV0pICYmIGlzT2JqZWN0KHRhcmdldFtrZXldKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBtZXJnZURlZXAoY29uZmlnMVtrZXldLCBjb25maWcyW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBjb25maWcyW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbiIsICJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgX1lhcmdzSW5zdGFuY2VfY3dkLCBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQsIF9ZYXJnc0luc3RhbmNlX2V4aXRFcnJvciwgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLCBfWWFyZ3NJbnN0YW5jZV9lbWl0dGVkV2FybmluZ3MsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgX1lhcmdzSW5zdGFuY2VfaXNHbG9iYWxDb250ZXh0LCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgX1lhcmdzSW5zdGFuY2VfcGFyZW50UmVxdWlyZSwgX1lhcmdzSW5zdGFuY2VfcGFyc2VyQ29uZmlnLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIF9ZYXJnc0luc3RhbmNlX3JlY29tbWVuZENvbW1hbmRzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgX1lhcmdzSW5zdGFuY2VfdXNhZ2VDb25maWcsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb247XG5pbXBvcnQgeyBjb21tYW5kIGFzIENvbW1hbmQsIH0gZnJvbSAnLi9jb21tYW5kLmpzJztcbmltcG9ydCB7IGFzc2VydE5vdFN0cmljdEVxdWFsLCBhc3NlcnRTaW5nbGVLZXksIG9iamVjdEtleXMsIH0gZnJvbSAnLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5pbXBvcnQgeyBZRXJyb3IgfSBmcm9tICcuL3llcnJvci5qcyc7XG5pbXBvcnQgeyB1c2FnZSBhcyBVc2FnZSB9IGZyb20gJy4vdXNhZ2UuanMnO1xuaW1wb3J0IHsgYXJnc2VydCB9IGZyb20gJy4vYXJnc2VydC5qcyc7XG5pbXBvcnQgeyBjb21wbGV0aW9uIGFzIENvbXBsZXRpb24sIH0gZnJvbSAnLi9jb21wbGV0aW9uLmpzJztcbmltcG9ydCB7IHZhbGlkYXRpb24gYXMgVmFsaWRhdGlvbiwgfSBmcm9tICcuL3ZhbGlkYXRpb24uanMnO1xuaW1wb3J0IHsgb2JqRmlsdGVyIH0gZnJvbSAnLi91dGlscy9vYmotZmlsdGVyLmpzJztcbmltcG9ydCB7IGFwcGx5RXh0ZW5kcyB9IGZyb20gJy4vdXRpbHMvYXBwbHktZXh0ZW5kcy5qcyc7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIEdsb2JhbE1pZGRsZXdhcmUsIH0gZnJvbSAnLi9taWRkbGV3YXJlLmpzJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4vdXRpbHMvaXMtcHJvbWlzZS5qcyc7XG5pbXBvcnQgeyBtYXliZUFzeW5jUmVzdWx0IH0gZnJvbSAnLi91dGlscy9tYXliZS1hc3luYy1yZXN1bHQuanMnO1xuaW1wb3J0IHNldEJsb2NraW5nIGZyb20gJy4vdXRpbHMvc2V0LWJsb2NraW5nLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBZYXJnc0ZhY3RvcnkoX3NoaW0pIHtcbiAgICByZXR1cm4gKHByb2Nlc3NBcmdzID0gW10sIGN3ZCA9IF9zaGltLnByb2Nlc3MuY3dkKCksIHBhcmVudFJlcXVpcmUpID0+IHtcbiAgICAgICAgY29uc3QgeWFyZ3MgPSBuZXcgWWFyZ3NJbnN0YW5jZShwcm9jZXNzQXJncywgY3dkLCBwYXJlbnRSZXF1aXJlLCBfc2hpbSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh5YXJncywgJ2FyZ3YnLCB7XG4gICAgICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWFyZ3MucGFyc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgeWFyZ3MuaGVscCgpO1xuICAgICAgICB5YXJncy52ZXJzaW9uKCk7XG4gICAgICAgIHJldHVybiB5YXJncztcbiAgICB9O1xufVxuY29uc3Qga0NvcHlEb3VibGVEYXNoID0gU3ltYm9sKCdjb3B5RG91YmxlRGFzaCcpO1xuY29uc3Qga0NyZWF0ZUxvZ2dlciA9IFN5bWJvbCgnY29weURvdWJsZURhc2gnKTtcbmNvbnN0IGtEZWxldGVGcm9tUGFyc2VySGludE9iamVjdCA9IFN5bWJvbCgnZGVsZXRlRnJvbVBhcnNlckhpbnRPYmplY3QnKTtcbmNvbnN0IGtFbWl0V2FybmluZyA9IFN5bWJvbCgnZW1pdFdhcm5pbmcnKTtcbmNvbnN0IGtGcmVlemUgPSBTeW1ib2woJ2ZyZWV6ZScpO1xuY29uc3Qga0dldERvbGxhclplcm8gPSBTeW1ib2woJ2dldERvbGxhclplcm8nKTtcbmNvbnN0IGtHZXRQYXJzZXJDb25maWd1cmF0aW9uID0gU3ltYm9sKCdnZXRQYXJzZXJDb25maWd1cmF0aW9uJyk7XG5jb25zdCBrR2V0VXNhZ2VDb25maWd1cmF0aW9uID0gU3ltYm9sKCdnZXRVc2FnZUNvbmZpZ3VyYXRpb24nKTtcbmNvbnN0IGtHdWVzc0xvY2FsZSA9IFN5bWJvbCgnZ3Vlc3NMb2NhbGUnKTtcbmNvbnN0IGtHdWVzc1ZlcnNpb24gPSBTeW1ib2woJ2d1ZXNzVmVyc2lvbicpO1xuY29uc3Qga1BhcnNlUG9zaXRpb25hbE51bWJlcnMgPSBTeW1ib2woJ3BhcnNlUG9zaXRpb25hbE51bWJlcnMnKTtcbmNvbnN0IGtQa2dVcCA9IFN5bWJvbCgncGtnVXAnKTtcbmNvbnN0IGtQb3B1bGF0ZVBhcnNlckhpbnRBcnJheSA9IFN5bWJvbCgncG9wdWxhdGVQYXJzZXJIaW50QXJyYXknKTtcbmNvbnN0IGtQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnkgPSBTeW1ib2woJ3BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeScpO1xuY29uc3Qga1BvcHVsYXRlUGFyc2VySGludEFycmF5RGljdGlvbmFyeSA9IFN5bWJvbCgncG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5Jyk7XG5jb25zdCBrUG9wdWxhdGVQYXJzZXJIaW50RGljdGlvbmFyeSA9IFN5bWJvbCgncG9wdWxhdGVQYXJzZXJIaW50RGljdGlvbmFyeScpO1xuY29uc3Qga1Nhbml0aXplS2V5ID0gU3ltYm9sKCdzYW5pdGl6ZUtleScpO1xuY29uc3Qga1NldEtleSA9IFN5bWJvbCgnc2V0S2V5Jyk7XG5jb25zdCBrVW5mcmVlemUgPSBTeW1ib2woJ3VuZnJlZXplJyk7XG5jb25zdCBrVmFsaWRhdGVBc3luYyA9IFN5bWJvbCgndmFsaWRhdGVBc3luYycpO1xuY29uc3Qga0dldENvbW1hbmRJbnN0YW5jZSA9IFN5bWJvbCgnZ2V0Q29tbWFuZEluc3RhbmNlJyk7XG5jb25zdCBrR2V0Q29udGV4dCA9IFN5bWJvbCgnZ2V0Q29udGV4dCcpO1xuY29uc3Qga0dldEhhc091dHB1dCA9IFN5bWJvbCgnZ2V0SGFzT3V0cHV0Jyk7XG5jb25zdCBrR2V0TG9nZ2VySW5zdGFuY2UgPSBTeW1ib2woJ2dldExvZ2dlckluc3RhbmNlJyk7XG5jb25zdCBrR2V0UGFyc2VDb250ZXh0ID0gU3ltYm9sKCdnZXRQYXJzZUNvbnRleHQnKTtcbmNvbnN0IGtHZXRVc2FnZUluc3RhbmNlID0gU3ltYm9sKCdnZXRVc2FnZUluc3RhbmNlJyk7XG5jb25zdCBrR2V0VmFsaWRhdGlvbkluc3RhbmNlID0gU3ltYm9sKCdnZXRWYWxpZGF0aW9uSW5zdGFuY2UnKTtcbmNvbnN0IGtIYXNQYXJzZUNhbGxiYWNrID0gU3ltYm9sKCdoYXNQYXJzZUNhbGxiYWNrJyk7XG5jb25zdCBrSXNHbG9iYWxDb250ZXh0ID0gU3ltYm9sKCdpc0dsb2JhbENvbnRleHQnKTtcbmNvbnN0IGtQb3N0UHJvY2VzcyA9IFN5bWJvbCgncG9zdFByb2Nlc3MnKTtcbmNvbnN0IGtSZWJhc2UgPSBTeW1ib2woJ3JlYmFzZScpO1xuY29uc3Qga1Jlc2V0ID0gU3ltYm9sKCdyZXNldCcpO1xuY29uc3Qga1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzID0gU3ltYm9sKCdydW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kcycpO1xuY29uc3Qga1J1blZhbGlkYXRpb24gPSBTeW1ib2woJ3J1blZhbGlkYXRpb24nKTtcbmNvbnN0IGtTZXRIYXNPdXRwdXQgPSBTeW1ib2woJ3NldEhhc091dHB1dCcpO1xuY29uc3Qga1RyYWNrTWFudWFsbHlTZXRLZXlzID0gU3ltYm9sKCdrVHJhY2tNYW51YWxseVNldEtleXMnKTtcbmNvbnN0IERFRkFVTFRfTE9DQUxFID0gJ2VuX1VTJztcbmV4cG9ydCBjbGFzcyBZYXJnc0luc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9jZXNzQXJncyA9IFtdLCBjd2QsIHBhcmVudFJlcXVpcmUsIHNoaW0pIHtcbiAgICAgICAgdGhpcy5jdXN0b21TY3JpcHROYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFyc2VkID0gZmFsc2U7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2N3ZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY29udGV4dC5zZXQodGhpcywgeyBjb21tYW5kczogW10sIGZ1bGxDb21tYW5kczogW10gfSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24uc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2RlZmF1bHRTaG93SGlkZGVuT3B0LnNldCh0aGlzLCAnc2hvdy1oaWRkZW4nKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZW1pdHRlZFdhcm5pbmdzLnNldCh0aGlzLCB7fSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZnJvemVucy5zZXQodGhpcywgW10pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9ncm91cHMuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQuc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX291dHB1dC5zZXQodGhpcywgJycpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BhcnNlQ29udGV4dC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BrZ3Muc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLnNldCh0aGlzLCB7fSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zaGltLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zdHJpY3Quc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV91c2FnZS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfdXNhZ2VDb25maWcuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgc2hpbSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBwcm9jZXNzQXJncywgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgY3dkLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyZW50UmVxdWlyZSwgcGFyZW50UmVxdWlyZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIG5ldyBHbG9iYWxNaWRkbGV3YXJlKHRoaXMpLCBcImZcIik7XG4gICAgICAgIHRoaXMuJDAgPSB0aGlzW2tHZXREb2xsYXJaZXJvXSgpO1xuICAgICAgICB0aGlzW2tSZXNldF0oKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIiksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLnNob3dIaWRkZW5PcHQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RlZmF1bHRTaG93SGlkZGVuT3B0LCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCB0aGlzW2tDcmVhdGVMb2dnZXJdKCksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5zZXRMb2NhbGUoREVGQVVMVF9MT0NBTEUpO1xuICAgIH1cbiAgICBhZGRIZWxwT3B0KG9wdCwgbXNnKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRIZWxwT3B0ID0gJ2hlbHAnO1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGJvb2xlYW5dIFtzdHJpbmddJywgW29wdCwgbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKSkge1xuICAgICAgICAgICAgdGhpc1trRGVsZXRlRnJvbVBhcnNlckhpbnRPYmplY3RdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgbnVsbCwgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHQgPT09IGZhbHNlICYmIG1zZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgdHlwZW9mIG9wdCA9PT0gJ3N0cmluZycgPyBvcHQgOiBkZWZhdWx0SGVscE9wdCwgXCJmXCIpO1xuICAgICAgICB0aGlzLmJvb2xlYW4oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIikpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpLCBtc2cgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmRlZmVyWTE4bkxvb2t1cCgnU2hvdyBoZWxwJykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaGVscChvcHQsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRIZWxwT3B0KG9wdCwgbXNnKTtcbiAgICB9XG4gICAgYWRkU2hvd0hpZGRlbk9wdChvcHQsIG1zZykge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGJvb2xlYW5dIFtzdHJpbmddJywgW29wdCwgbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChvcHQgPT09IGZhbHNlICYmIG1zZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGNvbnN0IHNob3dIaWRkZW5PcHQgPSB0eXBlb2Ygb3B0ID09PSAnc3RyaW5nJyA/IG9wdCA6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQsIFwiZlwiKTtcbiAgICAgICAgdGhpcy5ib29sZWFuKHNob3dIaWRkZW5PcHQpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlKHNob3dIaWRkZW5PcHQsIG1zZyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVmZXJZMThuTG9va3VwKCdTaG93IGhpZGRlbiBvcHRpb25zJykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5zaG93SGlkZGVuT3B0ID0gc2hvd0hpZGRlbk9wdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dIaWRkZW4ob3B0LCBtc2cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU2hvd0hpZGRlbk9wdChvcHQsIG1zZyk7XG4gICAgfVxuICAgIGFsaWFzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmd8YXJyYXldJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5XSh0aGlzLmFsaWFzLmJpbmQodGhpcyksICdhbGlhcycsIGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYXJyYXkoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnYXJyYXknLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYm9vbGVhbihrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdib29sZWFuJywga2V5cyk7XG4gICAgICAgIHRoaXNba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNoZWNrKGYsIGdsb2JhbCkge1xuICAgICAgICBhcmdzZXJ0KCc8ZnVuY3Rpb24+IFtib29sZWFuXScsIFtmLCBnbG9iYWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlKChhcmd2LCBfeWFyZ3MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtYXliZUFzeW5jUmVzdWx0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZihhcmd2LCBfeWFyZ3MuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZmFpbChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS55MThuLl9fKCdBcmd1bWVudCBjaGVjayBmYWlsZWQ6ICVzJywgZi50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnIHx8IHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsKHJlc3VsdC50b1N0cmluZygpLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZmFpbChlcnIubWVzc2FnZSA/IGVyci5tZXNzYWdlIDogZXJyLnRvU3RyaW5nKCksIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZmFsc2UsIGdsb2JhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjaG9pY2VzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmd8YXJyYXldJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5XSh0aGlzLmNob2ljZXMuYmluZCh0aGlzKSwgJ2Nob2ljZXMnLCBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvZXJjZShrZXlzLCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW2Z1bmN0aW9uXScsIFtrZXlzLCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoJ2NvZXJjZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2VyY2Uoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Yga2V5cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGtleXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2VyY2Uoa2V5LCBrZXlzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcignY29lcmNlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2VyY2VLZXkgPSBrZXlzO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlbY29lcmNlS2V5XSA9IHRydWU7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLmFkZENvZXJjZU1pZGRsZXdhcmUoKGFyZ3YsIHlhcmdzKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBjb2VyY2VLZXlBbGlhc2VzID0gKF9hID0geWFyZ3MuZ2V0QWxpYXNlcygpW2NvZXJjZUtleV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdO1xuICAgICAgICAgICAgY29uc3QgYXJndktleXMgPSBbY29lcmNlS2V5LCAuLi5jb2VyY2VLZXlBbGlhc2VzXS5maWx0ZXIoa2V5ID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCBrZXkpKTtcbiAgICAgICAgICAgIGlmIChhcmd2S2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXliZUFzeW5jUmVzdWx0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUoYXJndlthcmd2S2V5c1swXV0pO1xuICAgICAgICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGFyZ3ZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXJndltrZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGNvZXJjZUtleSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25mbGljdHMoa2V5MSwga2V5Mikge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW3N0cmluZ3xhcnJheV0nLCBba2V5MSwga2V5Ml0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5jb25mbGljdHMoa2V5MSwga2V5Mik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25maWcoa2V5ID0gJ2NvbmZpZycsIG1zZywgcGFyc2VGbikge1xuICAgICAgICBhcmdzZXJ0KCdbb2JqZWN0fHN0cmluZ10gW3N0cmluZ3xmdW5jdGlvbl0gW2Z1bmN0aW9uXScsIFtrZXksIG1zZywgcGFyc2VGbl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgICAga2V5ID0gYXBwbHlFeHRlbmRzKGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jd2QsIFwiZlwiKSwgdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0oKVsnZGVlcC1tZXJnZS1jb25maWcnXSB8fCBmYWxzZSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlnT2JqZWN0cyA9IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzIHx8IFtdKS5jb25jYXQoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwYXJzZUZuID0gbXNnO1xuICAgICAgICAgICAgbXNnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzY3JpYmUoa2V5LCBtc2cgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmRlZmVyWTE4bkxvb2t1cCgnUGF0aCB0byBKU09OIGNvbmZpZyBmaWxlJykpO1xuICAgICAgICAoQXJyYXkuaXNBcnJheShrZXkpID8ga2V5IDogW2tleV0pLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdba10gPSBwYXJzZUZuIHx8IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29tcGxldGlvbihjbWQsIGRlc2MsIGZuKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmddIFtzdHJpbmd8Ym9vbGVhbnxmdW5jdGlvbl0gW2Z1bmN0aW9uXScsIFtjbWQsIGRlc2MsIGZuXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZm4gPSBkZXNjO1xuICAgICAgICAgICAgZGVzYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBjbWQgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgXCJmXCIpIHx8ICdjb21wbGV0aW9uJywgXCJmXCIpO1xuICAgICAgICBpZiAoIWRlc2MgJiYgZGVzYyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlc2MgPSAnZ2VuZXJhdGUgY29tcGxldGlvbiBzY3JpcHQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tbWFuZChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIiksIGRlc2MpO1xuICAgICAgICBpZiAoZm4pXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5yZWdpc3RlckZ1bmN0aW9uKGZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbW1hbmQoY21kLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlciwgbWlkZGxld2FyZXMsIGRlcHJlY2F0ZWQpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xhcnJheXxvYmplY3Q+IFtzdHJpbmd8Ym9vbGVhbl0gW2Z1bmN0aW9ufG9iamVjdF0gW2Z1bmN0aW9uXSBbYXJyYXldIFtib29sZWFufHN0cmluZ10nLCBbY21kLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlciwgbWlkZGxld2FyZXMsIGRlcHJlY2F0ZWRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuYWRkSGFuZGxlcihjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb21tYW5kcyhjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kKGNtZCwgZGVzY3JpcHRpb24sIGJ1aWxkZXIsIGhhbmRsZXIsIG1pZGRsZXdhcmVzLCBkZXByZWNhdGVkKTtcbiAgICB9XG4gICAgY29tbWFuZERpcihkaXIsIG9wdHMpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZz4gW29iamVjdF0nLCBbZGlyLCBvcHRzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJlcSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyZW50UmVxdWlyZSwgXCJmXCIpIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnJlcXVpcmU7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmFkZERpcmVjdG9yeShkaXIsIHJlcSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0Q2FsbGVyRmlsZSgpLCBvcHRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvdW50KGtleXMpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fHN0cmluZz4nLCBba2V5c10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheV0oJ2NvdW50Jywga2V5cyk7XG4gICAgICAgIHRoaXNba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlZmF1bHQoa2V5LCB2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3R8c3RyaW5nfGFycmF5PiBbKl0gW3N0cmluZ10nLCBba2V5LCB2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGFzc2VydFNpbmdsZUtleShrZXksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmRlZmF1bHREZXNjcmlwdGlvbltrZXldID0gZGVmYXVsdERlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydFNpbmdsZUtleShrZXksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0pXG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0gPVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZnVuY3Rpb25EZXNjcmlwdGlvbih2YWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXMuZGVmYXVsdC5iaW5kKHRoaXMpLCAnZGVmYXVsdCcsIGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVmYXVsdHMoa2V5LCB2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHQoa2V5LCB2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgZGVtYW5kQ29tbWFuZChtaW4gPSAxLCBtYXgsIG1pbk1zZywgbWF4TXNnKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tudW1iZXJdIFtudW1iZXJ8c3RyaW5nXSBbc3RyaW5nfG51bGx8dW5kZWZpbmVkXSBbc3RyaW5nfG51bGx8dW5kZWZpbmVkXScsIFttaW4sIG1heCwgbWluTXNnLCBtYXhNc2ddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBtaW5Nc2cgPSBtYXg7XG4gICAgICAgICAgICBtYXggPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbCgnXycsIGZhbHNlKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVtYW5kZWRDb21tYW5kcy5fID0ge1xuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgbWluTXNnLFxuICAgICAgICAgICAgbWF4TXNnLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVtYW5kKGtleXMsIG1heCwgbXNnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1heCkpIHtcbiAgICAgICAgICAgIG1heC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwobXNnLCB0cnVlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZW1hbmRPcHRpb24oa2V5LCBtc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYXggPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbXNnID0gbWF4O1xuICAgICAgICAgICAgbWF4ID0gSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXlzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwobXNnLCB0cnVlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLmRlbWFuZENvbW1hbmQoa2V5cywgbWF4LCBtc2csIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwobXNnLCB0cnVlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZW1hbmRPcHRpb24oa2V5LCBtc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXlzLCBtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobXNnID09PSB0cnVlIHx8IHR5cGVvZiBtc2cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZW1hbmRPcHRpb24oa2V5cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlbWFuZE9wdGlvbihrZXlzLCBtc2cpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmddJywgW2tleXMsIG1zZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXMuZGVtYW5kT3B0aW9uLmJpbmQodGhpcyksICdkZW1hbmRlZE9wdGlvbnMnLCBrZXlzLCBtc2cpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVwcmVjYXRlT3B0aW9uKG9wdGlvbiwgbWVzc2FnZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPiBbc3RyaW5nfGJvb2xlYW5dJywgW29wdGlvbiwgbWVzc2FnZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZXByZWNhdGVkT3B0aW9uc1tvcHRpb25dID0gbWVzc2FnZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlc2NyaWJlKGtleXMsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3R8c3RyaW5nfGFycmF5PiBbc3RyaW5nXScsIFtrZXlzLCBkZXNjcmlwdGlvbl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tTZXRLZXldKGtleXMsIHRydWUpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVzY3JpYmUoa2V5cywgZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGV0ZWN0TG9jYWxlKGRldGVjdCkge1xuICAgICAgICBhcmdzZXJ0KCc8Ym9vbGVhbj4nLCBbZGV0ZWN0XSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLCBkZXRlY3QsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVudihwcmVmaXgpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ3xib29sZWFuXScsIFtwcmVmaXhdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gZmFsc2UpXG4gICAgICAgICAgICBkZWxldGUgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZW52UHJlZml4O1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5lbnZQcmVmaXggPSBwcmVmaXggfHwgJyc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBlcGlsb2d1ZShtc2cpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZz4nLCBbbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5lcGlsb2cobXNnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVwaWxvZyhtc2cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXBpbG9ndWUobXNnKTtcbiAgICB9XG4gICAgZXhhbXBsZShjbWQsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8YXJyYXk+IFtzdHJpbmddJywgW2NtZCwgZGVzY3JpcHRpb25dLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY21kKSkge1xuICAgICAgICAgICAgY21kLmZvckVhY2goZXhhbXBsZVBhcmFtcyA9PiB0aGlzLmV4YW1wbGUoLi4uZXhhbXBsZVBhcmFtcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmV4YW1wbGUoY21kLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGV4aXQoY29kZSwgZXJyKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBlcnIsIFwiZlwiKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSlcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICB9XG4gICAgZXhpdFByb2Nlc3MoZW5hYmxlZCA9IHRydWUpIHtcbiAgICAgICAgYXJnc2VydCgnW2Jvb2xlYW5dJywgW2VuYWJsZWRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgZW5hYmxlZCwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmFpbChmKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxmdW5jdGlvbnxib29sZWFuPicsIFtmXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Jvb2xlYW4nICYmIGYgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKFwiSW52YWxpZCBmaXJzdCBhcmd1bWVudC4gRXhwZWN0ZWQgZnVuY3Rpb24gb3IgYm9vbGVhbiAnZmFsc2UnXCIpO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsRm4oZik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRBbGlhc2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZWQgPyB0aGlzLnBhcnNlZC5hbGlhc2VzIDoge307XG4gICAgfVxuICAgIGFzeW5jIGdldENvbXBsZXRpb24oYXJncywgZG9uZSkge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXk+IFtmdW5jdGlvbl0nLCBbYXJncywgZG9uZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikuZ2V0Q29tcGxldGlvbihhcmdzLCAoZXJyLCBjb21wbGV0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tcGxldGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikuZ2V0Q29tcGxldGlvbihhcmdzLCBkb25lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXREZW1hbmRlZE9wdGlvbnMoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVtYW5kZWRPcHRpb25zO1xuICAgIH1cbiAgICBnZXREZW1hbmRlZENvbW1hbmRzKCkge1xuICAgICAgICBhcmdzZXJ0KFtdLCAwKTtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmRlbWFuZGVkQ29tbWFuZHM7XG4gICAgfVxuICAgIGdldERlcHJlY2F0ZWRPcHRpb25zKCkge1xuICAgICAgICBhcmdzZXJ0KFtdLCAwKTtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmRlcHJlY2F0ZWRPcHRpb25zO1xuICAgIH1cbiAgICBnZXREZXRlY3RMb2NhbGUoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRFeGl0UHJvY2VzcygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0R3JvdXBzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMsIFwiZlwiKSk7XG4gICAgfVxuICAgIGdldEhlbHAoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmhhc0NhY2hlZEhlbHBNZXNzYWdlKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJzZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZSA9IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBcImZcIiksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKHBhcnNlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmhlbHAoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYnVpbGRlclJlc3BvbnNlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucnVuRGVmYXVsdEJ1aWxkZXJPbih0aGlzKTtcbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UoYnVpbGRlclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyUmVzcG9uc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGVscCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmhlbHAoKSk7XG4gICAgfVxuICAgIGdldE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0U3RyaWN0KCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0U3RyaWN0Q29tbWFuZHMoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBcImZcIik7XG4gICAgfVxuICAgIGdldFN0cmljdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2xvYmFsKGdsb2JhbHMsIGdsb2JhbCkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfGFycmF5PiBbYm9vbGVhbl0nLCBbZ2xvYmFscywgZ2xvYmFsXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGdsb2JhbHMgPSBbXS5jb25jYXQoZ2xvYmFscyk7XG4gICAgICAgIGlmIChnbG9iYWwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5sb2NhbCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsLmZpbHRlcihsID0+IGdsb2JhbHMuaW5kZXhPZihsKSA9PT0gLTEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFscy5mb3JFYWNoKGcgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwuaW5jbHVkZXMoZykpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsLnB1c2goZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ3JvdXAob3B0cywgZ3JvdXBOYW1lKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8YXJyYXk+IDxzdHJpbmc+JywgW29wdHMsIGdyb3VwTmFtZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXSB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpW2dyb3VwTmFtZV07XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgXCJmXCIpW2dyb3VwTmFtZV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgXCJmXCIpW2dyb3VwTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VlbiA9IHt9O1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpW2dyb3VwTmFtZV0gPSAoZXhpc3RpbmcgfHwgW10pLmNvbmNhdChvcHRzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChzZWVuW2tleV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIChzZWVuW2tleV0gPSB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBoaWRlKGtleSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPicsIFtrZXldLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuaGlkZGVuT3B0aW9ucy5wdXNoKGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpbXBsaWVzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xvYmplY3Q+IFtudW1iZXJ8c3RyaW5nfGFycmF5XScsIFtrZXksIHZhbHVlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmltcGxpZXMoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsb2NhbGUobG9jYWxlKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmddJywgW2xvY2FsZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAobG9jYWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXNba0d1ZXNzTG9jYWxlXSgpO1xuICAgICAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4uZ2V0TG9jYWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4uc2V0TG9jYWxlKGxvY2FsZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBtaWRkbGV3YXJlKGNhbGxiYWNrLCBhcHBseUJlZm9yZVZhbGlkYXRpb24sIGdsb2JhbCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuYWRkTWlkZGxld2FyZShjYWxsYmFjaywgISFhcHBseUJlZm9yZVZhbGlkYXRpb24sIGdsb2JhbCk7XG4gICAgfVxuICAgIG5hcmdzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xvYmplY3R8YXJyYXk+IFtudW1iZXJdJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5XSh0aGlzLm5hcmdzLmJpbmQodGhpcyksICduYXJnJywga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBub3JtYWxpemUoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnbm9ybWFsaXplJywga2V5cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBudW1iZXIoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnbnVtYmVyJywga2V5cyk7XG4gICAgICAgIHRoaXNba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG9wdGlvbihrZXksIG9wdCkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW29iamVjdF0nLCBba2V5LCBvcHRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zKGssIGtleVtrXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIG9wdCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleSk7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LCBcImZcIikgJiYgKGtleSA9PT0gJ3ZlcnNpb24nIHx8IChvcHQgPT09IG51bGwgfHwgb3B0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHQuYWxpYXMpID09PSAndmVyc2lvbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trRW1pdFdhcm5pbmddKFtcbiAgICAgICAgICAgICAgICAgICAgJ1widmVyc2lvblwiIGlzIGEgcmVzZXJ2ZWQgd29yZC4nLFxuICAgICAgICAgICAgICAgICAgICAnUGxlYXNlIGRvIG9uZSBvZiB0aGUgZm9sbG93aW5nOicsXG4gICAgICAgICAgICAgICAgICAgICctIERpc2FibGUgdmVyc2lvbiB3aXRoIGB5YXJncy52ZXJzaW9uKGZhbHNlKWAgaWYgdXNpbmcgXCJ2ZXJzaW9uXCIgYXMgYW4gb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJy0gVXNlIHRoZSBidWlsdC1pbiBgeWFyZ3MudmVyc2lvbmAgbWV0aG9kIGluc3RlYWQgKGlmIGFwcGxpY2FibGUpJyxcbiAgICAgICAgICAgICAgICAgICAgJy0gVXNlIGEgZGlmZmVyZW50IG9wdGlvbiBrZXknLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly95YXJncy5qcy5vcmcvZG9jcy8jYXBpLXJlZmVyZW5jZS12ZXJzaW9uJyxcbiAgICAgICAgICAgICAgICBdLmpvaW4oJ1xcbicpLCB1bmRlZmluZWQsICd2ZXJzaW9uV2FybmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikua2V5W2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKG9wdC5hbGlhcylcbiAgICAgICAgICAgICAgICB0aGlzLmFsaWFzKGtleSwgb3B0LmFsaWFzKTtcbiAgICAgICAgICAgIGNvbnN0IGRlcHJlY2F0ZSA9IG9wdC5kZXByZWNhdGUgfHwgb3B0LmRlcHJlY2F0ZWQ7XG4gICAgICAgICAgICBpZiAoZGVwcmVjYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXByZWNhdGVPcHRpb24oa2V5LCBkZXByZWNhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVtYW5kID0gb3B0LmRlbWFuZCB8fCBvcHQucmVxdWlyZWQgfHwgb3B0LnJlcXVpcmU7XG4gICAgICAgICAgICBpZiAoZGVtYW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZW1hbmQoa2V5LCBkZW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5kZW1hbmRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXksIHR5cGVvZiBvcHQuZGVtYW5kT3B0aW9uID09PSAnc3RyaW5nJyA/IG9wdC5kZW1hbmRPcHRpb24gOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jb25mbGljdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZsaWN0cyhrZXksIG9wdC5jb25mbGljdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBvcHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHQoa2V5LCBvcHQuZGVmYXVsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmltcGxpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGllcyhrZXksIG9wdC5pbXBsaWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQubmFyZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmFyZ3Moa2V5LCBvcHQubmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jb25maWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyhrZXksIG9wdC5jb25maWdQYXJzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5ub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vcm1hbGl6ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jaG9pY2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaG9pY2VzKGtleSwgb3B0LmNob2ljZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jb2VyY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZXJjZShrZXksIG9wdC5jb2VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5ncm91cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAoa2V5LCBvcHQuZ3JvdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5ib29sZWFuIHx8IG9wdC50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2xlYW4oa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2xlYW4ob3B0LmFsaWFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQuYXJyYXkgfHwgb3B0LnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdC5hbGlhcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheShvcHQuYWxpYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5udW1iZXIgfHwgb3B0LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXIoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlcihvcHQuYWxpYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5zdHJpbmcgfHwgb3B0LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmcoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhvcHQuYWxpYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jb3VudCB8fCBvcHQudHlwZSA9PT0gJ2NvdW50Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0Lmdsb2JhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWwoa2V5LCBvcHQuZ2xvYmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQuZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0gPSBvcHQuZGVmYXVsdERlc2NyaXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5za2lwVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpcFZhbGlkYXRpb24oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBvcHQuZGVzY3JpYmUgfHwgb3B0LmRlc2NyaXB0aW9uIHx8IG9wdC5kZXNjO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25zID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmdldERlc2NyaXB0aW9ucygpO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVzY3JpcHRpb25zLCBrZXkpIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGRlc2MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmliZShrZXksIGRlc2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQucmVxdWlyZXNBcmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmVzQXJnKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG9wdGlvbnMoa2V5LCBvcHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uKGtleSwgb3B0KTtcbiAgICB9XG4gICAgcGFyc2UoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbikge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGFycmF5XSBbZnVuY3Rpb258Ym9vbGVhbnxvYmplY3RdIFtmdW5jdGlvbl0nLCBbYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tGcmVlemVdKCk7XG4gICAgICAgIGlmICh0eXBlb2YgYXJncyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBcImZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaG9ydENpcmN1aXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlQ29udGV4dCwgc2hvcnRDaXJjdWl0LCBcImZcIik7XG4gICAgICAgICAgICBzaG9ydENpcmN1aXQgPSBfcGFyc2VGbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNob3J0Q2lyY3VpdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBzaG9ydENpcmN1aXQsIFwiZlwiKTtcbiAgICAgICAgICAgIHNob3J0Q2lyY3VpdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2hvcnRDaXJjdWl0KVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcm9jZXNzQXJncywgYXJncywgXCJmXCIpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIikpXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzW2tSdW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kc10oYXJncywgISFzaG9ydENpcmN1aXQpO1xuICAgICAgICBjb25zdCB0bXBQYXJzZWQgPSB0aGlzLnBhcnNlZDtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikuc2V0UGFyc2VkKHRoaXMucGFyc2VkKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShwYXJzZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkXG4gICAgICAgICAgICAgICAgLnRoZW4oYXJndiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpKVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBcImZcIiksIGFyZ3YsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIikoZXJyLCB0aGlzLnBhcnNlZC5hcmd2LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpc1trVW5mcmVlemVdKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZWQgPSB0bXBQYXJzZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSlcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBcImZcIiksIHBhcnNlZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzW2tVbmZyZWV6ZV0oKTtcbiAgICAgICAgICAgIHRoaXMucGFyc2VkID0gdG1wUGFyc2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICAgIHBhcnNlQXN5bmMoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbikge1xuICAgICAgICBjb25zdCBtYXliZVByb21pc2UgPSB0aGlzLnBhcnNlKGFyZ3MsIHNob3J0Q2lyY3VpdCwgX3BhcnNlRm4pO1xuICAgICAgICByZXR1cm4gIWlzUHJvbWlzZShtYXliZVByb21pc2UpXG4gICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZShtYXliZVByb21pc2UpXG4gICAgICAgICAgICA6IG1heWJlUHJvbWlzZTtcbiAgICB9XG4gICAgcGFyc2VTeW5jKGFyZ3MsIHNob3J0Q2lyY3VpdCwgX3BhcnNlRm4pIHtcbiAgICAgICAgY29uc3QgbWF5YmVQcm9taXNlID0gdGhpcy5wYXJzZShhcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShtYXliZVByb21pc2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKCcucGFyc2VTeW5jKCkgbXVzdCBub3QgYmUgdXNlZCB3aXRoIGFzeW5jaHJvbm91cyBidWlsZGVycywgaGFuZGxlcnMsIG9yIG1pZGRsZXdhcmUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICBwYXJzZXJDb25maWd1cmF0aW9uKGNvbmZpZykge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0PicsIFtjb25maWddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcsIGNvbmZpZywgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcGtnQ29uZihrZXksIHJvb3RQYXRoKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmc+IFtzdHJpbmddJywgW2tleSwgcm9vdFBhdGhdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgbGV0IGNvbmYgPSBudWxsO1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzW2tQa2dVcF0ocm9vdFBhdGggfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jd2QsIFwiZlwiKSk7XG4gICAgICAgIGlmIChvYmpba2V5XSAmJiB0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25mID0gYXBwbHlFeHRlbmRzKG9ialtrZXldLCByb290UGF0aCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpLCB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpWydkZWVwLW1lcmdlLWNvbmZpZyddIHx8IGZhbHNlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzID0gKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgfHwgW10pLmNvbmNhdChjb25mKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcG9zaXRpb25hbChrZXksIG9wdHMpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZz4gPG9iamVjdD4nLCBba2V5LCBvcHRzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZE9wdHMgPSBbXG4gICAgICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICAgICAnZGVmYXVsdERlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICdpbXBsaWVzJyxcbiAgICAgICAgICAgICdub3JtYWxpemUnLFxuICAgICAgICAgICAgJ2Nob2ljZXMnLFxuICAgICAgICAgICAgJ2NvbmZsaWN0cycsXG4gICAgICAgICAgICAnY29lcmNlJyxcbiAgICAgICAgICAgICd0eXBlJyxcbiAgICAgICAgICAgICdkZXNjcmliZScsXG4gICAgICAgICAgICAnZGVzYycsXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2FsaWFzJyxcbiAgICAgICAgXTtcbiAgICAgICAgb3B0cyA9IG9iakZpbHRlcihvcHRzLCAoaywgdikgPT4ge1xuICAgICAgICAgICAgaWYgKGsgPT09ICd0eXBlJyAmJiAhWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXS5pbmNsdWRlcyh2KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkT3B0cy5pbmNsdWRlcyhrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZ1bGxDb21tYW5kID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LCBcImZcIikuZnVsbENvbW1hbmRzW19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29udGV4dCwgXCJmXCIpLmZ1bGxDb21tYW5kcy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgcGFyc2VPcHRpb25zID0gZnVsbENvbW1hbmRcbiAgICAgICAgICAgID8gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuY21kVG9QYXJzZU9wdGlvbnMoZnVsbENvbW1hbmQpXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBhcnJheTogW10sXG4gICAgICAgICAgICAgICAgYWxpYXM6IHt9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHt9LFxuICAgICAgICAgICAgICAgIGRlbWFuZDoge30sXG4gICAgICAgICAgICB9O1xuICAgICAgICBvYmplY3RLZXlzKHBhcnNlT3B0aW9ucykuZm9yRWFjaChwayA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZU9wdGlvbiA9IHBhcnNlT3B0aW9uc1twa107XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZU9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VPcHRpb24uaW5kZXhPZihrZXkpICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgb3B0c1twa10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlT3B0aW9uW2tleV0gJiYgIShwayBpbiBvcHRzKSlcbiAgICAgICAgICAgICAgICAgICAgb3B0c1twa10gPSBwYXJzZU9wdGlvbltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncm91cChrZXksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb24oa2V5LCBvcHRzKTtcbiAgICB9XG4gICAgcmVjb21tZW5kQ29tbWFuZHMocmVjb21tZW5kID0gdHJ1ZSkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbcmVjb21tZW5kXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcmVjb21tZW5kQ29tbWFuZHMsIHJlY29tbWVuZCwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVxdWlyZWQoa2V5cywgbWF4LCBtc2cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVtYW5kKGtleXMsIG1heCwgbXNnKTtcbiAgICB9XG4gICAgcmVxdWlyZShrZXlzLCBtYXgsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kZW1hbmQoa2V5cywgbWF4LCBtc2cpO1xuICAgIH1cbiAgICByZXF1aXJlc0FyZyhrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmd8b2JqZWN0PiBbbnVtYmVyXScsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5cyA9PT0gJ3N0cmluZycgJiYgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubmFyZ1trZXlzXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXMucmVxdWlyZXNBcmcuYmluZCh0aGlzKSwgJ25hcmcnLCBrZXlzLCBOYU4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93Q29tcGxldGlvblNjcmlwdCgkMCwgY21kKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmddIFtzdHJpbmddJywgWyQwLCBjbWRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgJDAgPSAkMCB8fCB0aGlzLiQwO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2xvZ2dlciwgXCJmXCIpLmxvZyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZW5lcmF0ZUNvbXBsZXRpb25TY3JpcHQoJDAsIGNtZCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikgfHwgJ2NvbXBsZXRpb24nKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93SGVscChsZXZlbCkge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGZ1bmN0aW9uXScsIFtsZXZlbF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5oYXNDYWNoZWRIZWxwTWVzc2FnZSgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2UgPSB0aGlzW2tSdW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kc10oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcm9jZXNzQXJncywgXCJmXCIpLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShwYXJzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHAobGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYnVpbGRlclJlc3BvbnNlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucnVuRGVmYXVsdEJ1aWxkZXJPbih0aGlzKTtcbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UoYnVpbGRlclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXJSZXNwb25zZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnNob3dIZWxwKGxldmVsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHAobGV2ZWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2NyaXB0TmFtZShzY3JpcHROYW1lKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tU2NyaXB0TmFtZSA9IHRydWU7XG4gICAgICAgIHRoaXMuJDAgPSBzY3JpcHROYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2hvd0hlbHBPbkZhaWwoZW5hYmxlZCwgbWVzc2FnZSkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbnxzdHJpbmddIFtzdHJpbmddJywgW2VuYWJsZWQsIG1lc3NhZ2VdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnNob3dIZWxwT25GYWlsKGVuYWJsZWQsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2hvd1ZlcnNpb24obGV2ZWwpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ3xmdW5jdGlvbl0nLCBbbGV2ZWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnNob3dWZXJzaW9uKGxldmVsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNraXBWYWxpZGF0aW9uKGtleXMpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fHN0cmluZz4nLCBba2V5c10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheV0oJ3NraXBWYWxpZGF0aW9uJywga2V5cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdHJpY3QoZW5hYmxlZCkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgZW5hYmxlZCAhPT0gZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmljdENvbW1hbmRzKGVuYWJsZWQpIHtcbiAgICAgICAgYXJnc2VydCgnW2Jvb2xlYW5dJywgW2VuYWJsZWRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcywgZW5hYmxlZCAhPT0gZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmljdE9wdGlvbnMoZW5hYmxlZCkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIGVuYWJsZWQgIT09IGZhbHNlLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdHJpbmcoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnc3RyaW5nJywga2V5cyk7XG4gICAgICAgIHRoaXNba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRlcm1pbmFsV2lkdGgoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5zdGRDb2x1bW5zO1xuICAgIH1cbiAgICB1cGRhdGVMb2NhbGUob2JqKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVN0cmluZ3Mob2JqKTtcbiAgICB9XG4gICAgdXBkYXRlU3RyaW5ncyhvYmopIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdD4nLCBbb2JqXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS55MThuLnVwZGF0ZUxvY2FsZShvYmopO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdXNhZ2UobXNnLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlcikge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG51bGx8dW5kZWZpbmVkPiBbc3RyaW5nfGJvb2xlYW5dIFtmdW5jdGlvbnxvYmplY3RdIFtmdW5jdGlvbl0nLCBbbXNnLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlcl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwobXNnLCBudWxsLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICBpZiAoKG1zZyB8fCAnJykubWF0Y2goL15cXCQwKCB8JCkvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQobXNnLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKCcudXNhZ2UoKSBkZXNjcmlwdGlvbiBtdXN0IHN0YXJ0IHdpdGggJDAgaWYgYmVpbmcgdXNlZCBhcyBhbGlhcyBmb3IgLmNvbW1hbmQoKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnVzYWdlKG1zZyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2FnZUNvbmZpZ3VyYXRpb24oY29uZmlnKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3Q+JywgW2NvbmZpZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlQ29uZmlnLCBjb25maWcsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZlcnNpb24ob3B0LCBtc2csIHZlcikge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmVyc2lvbk9wdCA9ICd2ZXJzaW9uJztcbiAgICAgICAgYXJnc2VydCgnW2Jvb2xlYW58c3RyaW5nXSBbc3RyaW5nXSBbc3RyaW5nXScsIFtvcHQsIG1zZywgdmVyXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSkge1xuICAgICAgICAgICAgdGhpc1trRGVsZXRlRnJvbVBhcnNlckhpbnRPYmplY3RdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS52ZXJzaW9uKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIG51bGwsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdmVyID0gdGhpc1trR3Vlc3NWZXJzaW9uXSgpO1xuICAgICAgICAgICAgb3B0ID0gZGVmYXVsdFZlcnNpb25PcHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKG9wdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZlciA9IG9wdDtcbiAgICAgICAgICAgIG9wdCA9IGRlZmF1bHRWZXJzaW9uT3B0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHZlciA9IG1zZztcbiAgICAgICAgICAgIG1zZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnID8gb3B0IDogZGVmYXVsdFZlcnNpb25PcHQsIFwiZlwiKTtcbiAgICAgICAgbXNnID0gbXNnIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5kZWZlclkxOG5Mb29rdXAoJ1Nob3cgdmVyc2lvbiBudW1iZXInKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnZlcnNpb24odmVyIHx8IHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuYm9vbGVhbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LCBcImZcIiksIG1zZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB3cmFwKGNvbHMpIHtcbiAgICAgICAgYXJnc2VydCgnPG51bWJlcnxudWxsfHVuZGVmaW5lZD4nLCBbY29sc10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikud3JhcChjb2xzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFsoX1lhcmdzSW5zdGFuY2VfY29tbWFuZCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2N3ZCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2NvbnRleHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9kZWZhdWx0U2hvd0hpZGRlbk9wdCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2V4aXRFcnJvciA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZnJvemVucyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfaXNHbG9iYWxDb250ZXh0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3BhcmVudFJlcXVpcmUgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcGtncyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcmVjb21tZW5kQ29tbWFuZHMgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zaGltID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfdXNhZ2UgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uID0gbmV3IFdlYWtNYXAoKSwga0NvcHlEb3VibGVEYXNoKV0oYXJndikge1xuICAgICAgICBpZiAoIWFyZ3YuXyB8fCAhYXJndlsnLS0nXSlcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICBhcmd2Ll8ucHVzaC5hcHBseShhcmd2Ll8sIGFyZ3ZbJy0tJ10pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGVsZXRlIGFyZ3ZbJy0tJ107XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9lcnIpIHsgfVxuICAgICAgICByZXR1cm4gYXJndjtcbiAgICB9XG4gICAgW2tDcmVhdGVMb2dnZXJdKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpc1trSGFzUGFyc2VDYWxsYmFja10oKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpICsgJ1xcbicsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSArIGFyZ3Muam9pbignICcpLCBcImZcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzW2tIYXNQYXJzZUNhbGxiYWNrXSgpKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSArICdcXG4nLCBcImZcIik7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikgKyBhcmdzLmpvaW4oJyAnKSwgXCJmXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgW2tEZWxldGVGcm9tUGFyc2VySGludE9iamVjdF0ob3B0aW9uS2V5KSB7XG4gICAgICAgIG9iamVjdEtleXMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikpLmZvckVhY2goKGhpbnRLZXkpID0+IHtcbiAgICAgICAgICAgIGlmICgoKGtleSkgPT4ga2V5ID09PSAnY29uZmlnT2JqZWN0cycpKGhpbnRLZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGhpbnQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVtoaW50S2V5XTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhpbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhpbnQuaW5jbHVkZXMob3B0aW9uS2V5KSlcbiAgICAgICAgICAgICAgICAgICAgaGludC5zcGxpY2UoaGludC5pbmRleE9mKG9wdGlvbktleSksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGhpbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGhpbnRbb3B0aW9uS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZ2V0RGVzY3JpcHRpb25zKClbb3B0aW9uS2V5XTtcbiAgICB9XG4gICAgW2tFbWl0V2FybmluZ10od2FybmluZywgdHlwZSwgZGVkdXBsaWNhdGlvbklkKSB7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9lbWl0dGVkV2FybmluZ3MsIFwiZlwiKVtkZWR1cGxpY2F0aW9uSWRdKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmVtaXRXYXJuaW5nKHdhcm5pbmcsIHR5cGUpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9lbWl0dGVkV2FybmluZ3MsIFwiZlwiKVtkZWR1cGxpY2F0aW9uSWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBba0ZyZWV6ZV0oKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZnJvemVucywgXCJmXCIpLnB1c2goe1xuICAgICAgICAgICAgb3B0aW9uczogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIiksXG4gICAgICAgICAgICBjb25maWdPYmplY3RzOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzLnNsaWNlKDApLFxuICAgICAgICAgICAgZXhpdFByb2Nlc3M6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSxcbiAgICAgICAgICAgIGdyb3VwczogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIFwiZlwiKSxcbiAgICAgICAgICAgIHN0cmljdDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIFwiZlwiKSxcbiAgICAgICAgICAgIHN0cmljdENvbW1hbmRzOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBcImZcIiksXG4gICAgICAgICAgICBzdHJpY3RPcHRpb25zOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIFwiZlwiKSxcbiAgICAgICAgICAgIGNvbXBsZXRpb25Db21tYW5kOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIiksXG4gICAgICAgICAgICBvdXRwdXQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIiksXG4gICAgICAgICAgICBleGl0RXJyb3I6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBcImZcIiksXG4gICAgICAgICAgICBoYXNPdXRwdXQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCBcImZcIiksXG4gICAgICAgICAgICBwYXJzZWQ6IHRoaXMucGFyc2VkLFxuICAgICAgICAgICAgcGFyc2VGbjogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIiksXG4gICAgICAgICAgICBwYXJzZUNvbnRleHQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBcImZcIiksXG4gICAgICAgIH0pO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5mcmVlemUoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuZnJlZXplKCk7XG4gICAgfVxuICAgIFtrR2V0RG9sbGFyWmVyb10oKSB7XG4gICAgICAgIGxldCAkMCA9ICcnO1xuICAgICAgICBsZXQgZGVmYXVsdCQwO1xuICAgICAgICBpZiAoL1xcYihub2RlfGlvanN8ZWxlY3Ryb24pKFxcLmV4ZSk/JC8udGVzdChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmFyZ3YoKVswXSkpIHtcbiAgICAgICAgICAgIGRlZmF1bHQkMCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuYXJndigpLnNsaWNlKDEsIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVmYXVsdCQwID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5hcmd2KCkuc2xpY2UoMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgJDAgPSBkZWZhdWx0JDBcbiAgICAgICAgICAgIC5tYXAoeCA9PiB7XG4gICAgICAgICAgICBjb25zdCBiID0gdGhpc1trUmViYXNlXShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpLCB4KTtcbiAgICAgICAgICAgIHJldHVybiB4Lm1hdGNoKC9eKFxcL3woW2EtekEtWl06KT9cXFxcKS8pICYmIGIubGVuZ3RoIDwgeC5sZW5ndGggPyBiIDogeDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJylcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ18nKSAmJlxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0UHJvY2Vzc0FyZ3ZCaW4oKSA9PT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0RW52KCdfJykpIHtcbiAgICAgICAgICAgICQwID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIilcbiAgICAgICAgICAgICAgICAuZ2V0RW52KCdfJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wYXRoLmRpcm5hbWUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5leGVjUGF0aCgpKX0vYCwgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkMDtcbiAgICB9XG4gICAgW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VyQ29uZmlnLCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0VXNhZ2VDb25maWd1cmF0aW9uXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2VDb25maWcsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHdWVzc0xvY2FsZV0oKSB7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIFwiZlwiKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0RW52KCdMQ19BTEwnKSB8fFxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0RW52KCdMQ19NRVNTQUdFUycpIHx8XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xBTkcnKSB8fFxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0RW52KCdMQU5HVUFHRScpIHx8XG4gICAgICAgICAgICAnZW5fVVMnO1xuICAgICAgICB0aGlzLmxvY2FsZShsb2NhbGUucmVwbGFjZSgvWy46XS4qLywgJycpKTtcbiAgICB9XG4gICAgW2tHdWVzc1ZlcnNpb25dKCkge1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzW2tQa2dVcF0oKTtcbiAgICAgICAgcmV0dXJuIG9iai52ZXJzaW9uIHx8ICd1bmtub3duJztcbiAgICB9XG4gICAgW2tQYXJzZVBvc2l0aW9uYWxOdW1iZXJzXShhcmd2KSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd2WyctLSddID8gYXJndlsnLS0nXSA6IGFyZ3YuXztcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGFyZzsgKGFyZyA9IGFyZ3NbaV0pICE9PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLlBhcnNlci5sb29rc0xpa2VOdW1iZXIoYXJnKSAmJlxuICAgICAgICAgICAgICAgIE51bWJlci5pc1NhZmVJbnRlZ2VyKE1hdGguZmxvb3IocGFyc2VGbG9hdChgJHthcmd9YCkpKSkge1xuICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBOdW1iZXIoYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJndjtcbiAgICB9XG4gICAgW2tQa2dVcF0ocm9vdFBhdGgpIHtcbiAgICAgICAgY29uc3QgbnBhdGggPSByb290UGF0aCB8fCAnKic7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF0pXG4gICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wa2dzLCBcImZcIilbbnBhdGhdO1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgc3RhcnREaXIgPSByb290UGF0aCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5tYWluRmlsZW5hbWU7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucGF0aC5leHRuYW1lKHN0YXJ0RGlyKSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0RGlyID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucGF0aC5kaXJuYW1lKHN0YXJ0RGlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBrZ0pzb25QYXRoID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZmluZFVwKHN0YXJ0RGlyLCAoZGlyLCBuYW1lcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lcy5pbmNsdWRlcygncGFja2FnZS5qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwYWNrYWdlLmpzb24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKHBrZ0pzb25QYXRoLCB1bmRlZmluZWQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIG9iaiA9IEpTT04ucGFyc2UoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucmVhZEZpbGVTeW5jKHBrZ0pzb25QYXRoLCAndXRmOCcpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX25vb3ApIHsgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF0gPSBvYmogfHwge307XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF07XG4gICAgfVxuICAgIFtrUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKHR5cGUsIGtleXMpIHtcbiAgICAgICAga2V5cyA9IFtdLmNvbmNhdChrZXlzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBrZXkgPSB0aGlzW2tTYW5pdGl6ZUtleV0oa2V5KTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW3R5cGVdLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFtrUG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludERpY3Rpb25hcnldKGJ1aWxkZXIsIHR5cGUsIGtleSwgdmFsdWUsICh0eXBlLCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVt0eXBlXVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBba1BvcHVsYXRlUGFyc2VySGludEFycmF5RGljdGlvbmFyeV0oYnVpbGRlciwgdHlwZSwga2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlLCAodHlwZSwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIilbdHlwZV1ba2V5XSA9IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVt0eXBlXVtrZXldIHx8IFtdKS5jb25jYXQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgW2tQb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlLCBzaW5nbGVLZXlIYW5kbGVyKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgICAgIGtleS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIoaywgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKChrZXkpID0+IHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKShrZXkpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgb2Ygb2JqZWN0S2V5cyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRlcihrLCBrZXlba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2luZ2xlS2V5SGFuZGxlcih0eXBlLCB0aGlzW2tTYW5pdGl6ZUtleV0oa2V5KSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtrU2FuaXRpemVLZXldKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJylcbiAgICAgICAgICAgIHJldHVybiAnX19fcHJvdG9fX18nO1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICBba1NldEtleV0oa2V5LCBzZXQpIHtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5XSh0aGlzW2tTZXRLZXldLmJpbmQodGhpcyksICdrZXknLCBrZXksIHNldCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBba1VuZnJlZXplXSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX207XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZnJvemVucywgXCJmXCIpLnBvcCgpO1xuICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChmcm96ZW4sIHVuZGVmaW5lZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICBsZXQgY29uZmlnT2JqZWN0cztcbiAgICAgICAgKF9hID0gdGhpcywgX2IgPSB0aGlzLCBfYyA9IHRoaXMsIF9kID0gdGhpcywgX2UgPSB0aGlzLCBfZiA9IHRoaXMsIF9nID0gdGhpcywgX2ggPSB0aGlzLCBfaiA9IHRoaXMsIF9rID0gdGhpcywgX2wgPSB0aGlzLCBfbSA9IHRoaXMsIHtcbiAgICAgICAgICAgIG9wdGlvbnM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9hLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgY29uZmlnT2JqZWN0cyxcbiAgICAgICAgICAgIGV4aXRQcm9jZXNzOiAoeyBzZXQgdmFsdWUoX28pIHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldChfYiwgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBncm91cHM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9jLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBvdXRwdXQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9kLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBleGl0RXJyb3I6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9lLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBoYXNPdXRwdXQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9mLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBwYXJzZWQ6IHRoaXMucGFyc2VkLFxuICAgICAgICAgICAgc3RyaWN0OiAoeyBzZXQgdmFsdWUoX28pIHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldChfZywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0LCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgc3RyaWN0Q29tbWFuZHM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9oLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcywgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIHN0cmljdE9wdGlvbnM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9qLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgY29tcGxldGlvbkNvbW1hbmQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9rLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIHBhcnNlRm46ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9sLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgcGFyc2VDb250ZXh0OiAoeyBzZXQgdmFsdWUoX28pIHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldChfbSwgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICB9ID0gZnJvemVuKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlnT2JqZWN0cyA9IGNvbmZpZ09iamVjdHM7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgIH1cbiAgICBba1ZhbGlkYXRlQXN5bmNdKHZhbGlkYXRpb24sIGFyZ3YpIHtcbiAgICAgICAgcmV0dXJuIG1heWJlQXN5bmNSZXN1bHQoYXJndiwgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbnRlcm5hbE1ldGhvZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRDb21tYW5kSW5zdGFuY2U6IHRoaXNba0dldENvbW1hbmRJbnN0YW5jZV0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldENvbnRleHQ6IHRoaXNba0dldENvbnRleHRdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRIYXNPdXRwdXQ6IHRoaXNba0dldEhhc091dHB1dF0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldExvZ2dlckluc3RhbmNlOiB0aGlzW2tHZXRMb2dnZXJJbnN0YW5jZV0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFBhcnNlQ29udGV4dDogdGhpc1trR2V0UGFyc2VDb250ZXh0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0UGFyc2VyQ29uZmlndXJhdGlvbjogdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFVzYWdlQ29uZmlndXJhdGlvbjogdGhpc1trR2V0VXNhZ2VDb25maWd1cmF0aW9uXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0VXNhZ2VJbnN0YW5jZTogdGhpc1trR2V0VXNhZ2VJbnN0YW5jZV0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFZhbGlkYXRpb25JbnN0YW5jZTogdGhpc1trR2V0VmFsaWRhdGlvbkluc3RhbmNlXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaGFzUGFyc2VDYWxsYmFjazogdGhpc1trSGFzUGFyc2VDYWxsYmFja10uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGlzR2xvYmFsQ29udGV4dDogdGhpc1trSXNHbG9iYWxDb250ZXh0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcG9zdFByb2Nlc3M6IHRoaXNba1Bvc3RQcm9jZXNzXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcmVzZXQ6IHRoaXNba1Jlc2V0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcnVuVmFsaWRhdGlvbjogdGhpc1trUnVuVmFsaWRhdGlvbl0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHJ1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzOiB0aGlzW2tSdW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kc10uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNldEhhc091dHB1dDogdGhpc1trU2V0SGFzT3V0cHV0XS5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBba0dldENvbW1hbmRJbnN0YW5jZV0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRDb250ZXh0XSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29udGV4dCwgXCJmXCIpO1xuICAgIH1cbiAgICBba0dldEhhc091dHB1dF0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgXCJmXCIpO1xuICAgIH1cbiAgICBba0dldExvZ2dlckluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0UGFyc2VDb250ZXh0XSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBcImZcIikgfHwge307XG4gICAgfVxuICAgIFtrR2V0VXNhZ2VJbnN0YW5jZV0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0VmFsaWRhdGlvbkluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpO1xuICAgIH1cbiAgICBba0hhc1BhcnNlQ2FsbGJhY2tdKCkge1xuICAgICAgICByZXR1cm4gISFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKTtcbiAgICB9XG4gICAgW2tJc0dsb2JhbENvbnRleHRdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tQb3N0UHJvY2Vzc10oYXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCBjYWxsZWRGcm9tQ29tbWFuZCwgcnVuR2xvYmFsTWlkZGxld2FyZSkge1xuICAgICAgICBpZiAoY2FsbGVkRnJvbUNvbW1hbmQpXG4gICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShhcmd2KSlcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICBpZiAoIXBvcHVsYXRlRG91YmxlRGFzaCkge1xuICAgICAgICAgICAgYXJndiA9IHRoaXNba0NvcHlEb3VibGVEYXNoXShhcmd2KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZVBvc2l0aW9uYWxOdW1iZXJzID0gdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0oKVsncGFyc2UtcG9zaXRpb25hbC1udW1iZXJzJ10gfHxcbiAgICAgICAgICAgIHRoaXNba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKClbJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyddID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwYXJzZVBvc2l0aW9uYWxOdW1iZXJzKSB7XG4gICAgICAgICAgICBhcmd2ID0gdGhpc1trUGFyc2VQb3NpdGlvbmFsTnVtYmVyc10oYXJndik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bkdsb2JhbE1pZGRsZXdhcmUpIHtcbiAgICAgICAgICAgIGFyZ3YgPSBhcHBseU1pZGRsZXdhcmUoYXJndiwgdGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuZ2V0TWlkZGxld2FyZSgpLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgfVxuICAgIFtrUmVzZXRdKGFsaWFzZXMgPSB7fSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpIHx8IHt9LCBcImZcIik7XG4gICAgICAgIGNvbnN0IHRtcE9wdGlvbnMgPSB7fTtcbiAgICAgICAgdG1wT3B0aW9ucy5sb2NhbCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsIHx8IFtdO1xuICAgICAgICB0bXBPcHRpb25zLmNvbmZpZ09iamVjdHMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzIHx8IFtdO1xuICAgICAgICBjb25zdCBsb2NhbExvb2t1cCA9IHt9O1xuICAgICAgICB0bXBPcHRpb25zLmxvY2FsLmZvckVhY2gobCA9PiB7XG4gICAgICAgICAgICBsb2NhbExvb2t1cFtsXSA9IHRydWU7XG4gICAgICAgICAgICAoYWxpYXNlc1tsXSB8fCBbXSkuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhbExvb2t1cFthXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMsIFwiZlwiKSwgT2JqZWN0LmtleXMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIFwiZlwiKSkucmVkdWNlKChhY2MsIGdyb3VwTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXS5maWx0ZXIoa2V5ID0+ICEoa2V5IGluIGxvY2FsTG9va3VwKSk7XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWNjW2dyb3VwTmFtZV0gPSBrZXlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIHt9LCBcImZcIik7XG4gICAgICAgIGNvbnN0IGFycmF5T3B0aW9ucyA9IFtcbiAgICAgICAgICAgICdhcnJheScsXG4gICAgICAgICAgICAnYm9vbGVhbicsXG4gICAgICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgICAgICdza2lwVmFsaWRhdGlvbicsXG4gICAgICAgICAgICAnY291bnQnLFxuICAgICAgICAgICAgJ25vcm1hbGl6ZScsXG4gICAgICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgICAgICdoaWRkZW5PcHRpb25zJyxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgb2JqZWN0T3B0aW9ucyA9IFtcbiAgICAgICAgICAgICduYXJnJyxcbiAgICAgICAgICAgICdrZXknLFxuICAgICAgICAgICAgJ2FsaWFzJyxcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgICdkZWZhdWx0RGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2NvbmZpZycsXG4gICAgICAgICAgICAnY2hvaWNlcycsXG4gICAgICAgICAgICAnZGVtYW5kZWRPcHRpb25zJyxcbiAgICAgICAgICAgICdkZW1hbmRlZENvbW1hbmRzJyxcbiAgICAgICAgICAgICdkZXByZWNhdGVkT3B0aW9ucycsXG4gICAgICAgIF07XG4gICAgICAgIGFycmF5T3B0aW9ucy5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgdG1wT3B0aW9uc1trXSA9IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVtrXSB8fCBbXSkuZmlsdGVyKChrKSA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqZWN0T3B0aW9ucy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICB0bXBPcHRpb25zW2tdID0gb2JqRmlsdGVyKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW2tdLCBrID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0bXBPcHRpb25zLmVudlByZWZpeCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmVudlByZWZpeDtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCB0bXBPcHRpb25zLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKVxuICAgICAgICAgICAgPyBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikucmVzZXQobG9jYWxMb29rdXApXG4gICAgICAgICAgICA6IFVzYWdlKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpXG4gICAgICAgICAgICA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnJlc2V0KGxvY2FsTG9va3VwKVxuICAgICAgICAgICAgOiBWYWxpZGF0aW9uKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIilcbiAgICAgICAgICAgID8gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucmVzZXQoKVxuICAgICAgICAgICAgOiBDb21tYW5kKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSksIFwiZlwiKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKSlcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgQ29tcGxldGlvbih0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikucmVzZXQoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgbnVsbCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgJycsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIG51bGwsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIHRoaXMucGFyc2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBba1JlYmFzZV0oYmFzZSwgZGlyKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wYXRoLnJlbGF0aXZlKGJhc2UsIGRpcik7XG4gICAgfVxuICAgIFtrUnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHNdKGFyZ3MsIHNob3J0Q2lyY3VpdCwgY2FsbGVkRnJvbUNvbW1hbmQsIGNvbW1hbmRJbmRleCA9IDAsIGhlbHBPbmx5ID0gZmFsc2UpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICBsZXQgc2tpcFZhbGlkYXRpb24gPSAhIWNhbGxlZEZyb21Db21tYW5kIHx8IGhlbHBPbmx5O1xuICAgICAgICBhcmdzID0gYXJncyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLl9fID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5fXztcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlndXJhdGlvbiA9IHRoaXNba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKCk7XG4gICAgICAgIGNvbnN0IHBvcHVsYXRlRG91YmxlRGFzaCA9ICEhX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlndXJhdGlvblsncG9wdWxhdGUtLSddO1xuICAgICAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWd1cmF0aW9uLCB7XG4gICAgICAgICAgICAncG9wdWxhdGUtLSc6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5QYXJzZXIuZGV0YWlsZWQoYXJncywgT2JqZWN0LmFzc2lnbih7fSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIiksIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHsgJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyc6IGZhbHNlLCAuLi5jb25maWcgfSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBhcmd2ID0gT2JqZWN0LmFzc2lnbihwYXJzZWQuYXJndiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIFwiZlwiKSk7XG4gICAgICAgIGxldCBhcmd2UHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgYWxpYXNlcyA9IHBhcnNlZC5hbGlhc2VzO1xuICAgICAgICBsZXQgaGVscE9wdFNldCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmVyc2lvbk9wdFNldCA9IGZhbHNlO1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKSAmJiBhcmd2W2tleV0pIHtcbiAgICAgICAgICAgICAgICBoZWxwT3B0U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LCBcImZcIikgJiYgYXJndltrZXldKSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbk9wdFNldCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhcmd2LiQwID0gdGhpcy4kMDtcbiAgICAgICAgdGhpcy5wYXJzZWQgPSBwYXJzZWQ7XG4gICAgICAgIGlmIChjb21tYW5kSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5jbGVhckNhY2hlZEhlbHBNZXNzYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXNba0d1ZXNzTG9jYWxlXSgpO1xuICAgICAgICAgICAgaWYgKHNob3J0Q2lyY3VpdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tQb3N0UHJvY2Vzc10oYXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCAhIWNhbGxlZEZyb21Db21tYW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWxwQ21kcyA9IFtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKV1cbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChhbGlhc2VzW19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpXSB8fCBbXSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihrID0+IGsubGVuZ3RoID4gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGhlbHBDbWRzLmluY2x1ZGVzKCcnICsgYXJndi5fW2FyZ3YuXy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJndi5fLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBoZWxwT3B0U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2lzR2xvYmFsQ29udGV4dCwgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJLZXlzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuZ2V0Q29tbWFuZHMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RDb21wbGV0aW9ucyA9ICgoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbXBsZXRpb25LZXkpXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgIChfYiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY29tcGxldGlvbktleSxcbiAgICAgICAgICAgICAgICAgICAgLi4uKChfZCA9IHRoaXMuZ2V0QWxpYXNlcygpWyhfYyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29tcGxldGlvbktleV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLnNvbWUoKGtleSkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIGtleSkpXG4gICAgICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHNraXBSZWNvbW1lbmRhdGlvbiA9IGhlbHBPcHRTZXQgfHwgcmVxdWVzdENvbXBsZXRpb25zIHx8IGhlbHBPbmx5O1xuICAgICAgICAgICAgaWYgKGFyZ3YuXy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcktleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdFVua25vd25Db21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY29tbWFuZEluZGV4IHx8IDAsIGNtZDsgYXJndi5fW2ldICE9PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY21kID0gU3RyaW5nKGFyZ3YuX1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcktleXMuaW5jbHVkZXMoY21kKSAmJiBjbWQgIT09IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyQXJndiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLnJ1bkNvbW1hbmQoY21kLCB0aGlzLCBwYXJzZWQsIGkgKyAxLCBoZWxwT25seSwgaGVscE9wdFNldCB8fCB2ZXJzaW9uT3B0U2V0IHx8IGhlbHBPbmx5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trUG9zdFByb2Nlc3NdKGlubmVyQXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCAhIWNhbGxlZEZyb21Db21tYW5kLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghZmlyc3RVbmtub3duQ29tbWFuZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtZCAhPT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RVbmtub3duQ29tbWFuZCA9IGNtZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmhhc0RlZmF1bHRDb21tYW5kKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcmVjb21tZW5kQ29tbWFuZHMsIFwiZlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RVbmtub3duQ29tbWFuZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXNraXBSZWNvbW1lbmRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikucmVjb21tZW5kQ29tbWFuZHMoZmlyc3RVbmtub3duQ29tbWFuZCwgaGFuZGxlcktleXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgYXJndi5fLmluY2x1ZGVzKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIXJlcXVlc3RDb21wbGV0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbXBsZXRpb25TY3JpcHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5oYXNEZWZhdWx0Q29tbWFuZCgpICYmICFza2lwUmVjb21tZW5kYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lckFyZ3YgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5ydW5Db21tYW5kKG51bGwsIHRoaXMsIHBhcnNlZCwgMCwgaGVscE9ubHksIGhlbHBPcHRTZXQgfHwgdmVyc2lvbk9wdFNldCB8fCBoZWxwT25seSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba1Bvc3RQcm9jZXNzXShpbm5lckFyZ3YsIHBvcHVsYXRlRG91YmxlRGFzaCwgISFjYWxsZWRGcm9tQ29tbWFuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcXVlc3RDb21wbGV0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBcImZcIikpXG4gICAgICAgICAgICAgICAgICAgIHNldEJsb2NraW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIGFyZ3MgPSBbXS5jb25jYXQoYXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGlvbkFyZ3MgPSBhcmdzLnNsaWNlKGFyZ3MuaW5kZXhPZihgLS0ke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLmNvbXBsZXRpb25LZXl9YCkgKyAxKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZXRDb21wbGV0aW9uKGNvbXBsZXRpb25BcmdzLCAoZXJyLCBjb21wbGV0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIChjb21wbGV0aW9ucyB8fCBbXSkuZm9yRWFjaChjb21wbGV0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIikubG9nKGNvbXBsZXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tQb3N0UHJvY2Vzc10oYXJndiwgIXBvcHVsYXRlRG91YmxlRGFzaCwgISFjYWxsZWRGcm9tQ29tbWFuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhlbHBPcHRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJsb2NraW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBza2lwVmFsaWRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hlbHAobWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2xvZ2dlciwgXCJmXCIpLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZlcnNpb25PcHRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJsb2NraW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBza2lwVmFsaWRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5zaG93VmVyc2lvbignbG9nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNraXBWYWxpZGF0aW9uICYmIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLnNraXBWYWxpZGF0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBza2lwVmFsaWRhdGlvbiA9IE9iamVjdC5rZXlzKGFyZ3YpLnNvbWUoa2V5ID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLnNraXBWYWxpZGF0aW9uLmluZGV4T2Yoa2V5KSA+PSAwICYmIGFyZ3Zba2V5XSA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNraXBWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5lcnJvcilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihwYXJzZWQuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXF1ZXN0Q29tcGxldGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHRoaXNba1J1blZhbGlkYXRpb25dKGFsaWFzZXMsIHt9LCBwYXJzZWQuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbGxlZEZyb21Db21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2UHJvbWlzZSA9IGFwcGx5TWlkZGxld2FyZShhcmd2LCB0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5nZXRNaWRkbGV3YXJlKCksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyZ3ZQcm9taXNlID0gdGhpc1trVmFsaWRhdGVBc3luY10odmFsaWRhdGlvbiwgYXJndlByb21pc2UgIT09IG51bGwgJiYgYXJndlByb21pc2UgIT09IHZvaWQgMCA/IGFyZ3ZQcm9taXNlIDogYXJndik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2UoYXJndlByb21pc2UpICYmICFjYWxsZWRGcm9tQ29tbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndlByb21pc2UgPSBhcmd2UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKGFyZ3YsIHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLmdldE1pZGRsZXdhcmUoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFlFcnJvcilcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZmFpbChlcnIubWVzc2FnZSwgZXJyKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNba1Bvc3RQcm9jZXNzXShhcmd2UHJvbWlzZSAhPT0gbnVsbCAmJiBhcmd2UHJvbWlzZSAhPT0gdm9pZCAwID8gYXJndlByb21pc2UgOiBhcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsICEhY2FsbGVkRnJvbUNvbW1hbmQsIHRydWUpO1xuICAgIH1cbiAgICBba1J1blZhbGlkYXRpb25dKGFsaWFzZXMsIHBvc2l0aW9uYWxNYXAsIHBhcnNlRXJyb3JzLCBpc0RlZmF1bHRDb21tYW5kKSB7XG4gICAgICAgIGNvbnN0IGRlbWFuZGVkT3B0aW9ucyA9IHsgLi4udGhpcy5nZXREZW1hbmRlZE9wdGlvbnMoKSB9O1xuICAgICAgICByZXR1cm4gKGFyZ3YpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUVycm9ycylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKHBhcnNlRXJyb3JzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikubm9uT3B0aW9uQ291bnQoYXJndik7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5yZXF1aXJlZEFyZ3VtZW50cyhhcmd2LCBkZW1hbmRlZE9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IGZhaWxlZFN0cmljdENvbW1hbmRzID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcywgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgZmFpbGVkU3RyaWN0Q29tbWFuZHMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS51bmtub3duQ29tbWFuZHMoYXJndik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIFwiZlwiKSAmJiAhZmFpbGVkU3RyaWN0Q29tbWFuZHMpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS51bmtub3duQXJndW1lbnRzKGFyZ3YsIGFsaWFzZXMsIHBvc2l0aW9uYWxNYXAsICEhaXNEZWZhdWx0Q29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnVua25vd25Bcmd1bWVudHMoYXJndiwgYWxpYXNlcywge30sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5saW1pdGVkQ2hvaWNlcyhhcmd2KTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmltcGxpY2F0aW9ucyhhcmd2KTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmNvbmZsaWN0aW5nKGFyZ3YpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBba1NldEhhc091dHB1dF0oKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgfVxuICAgIFtrVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikua2V5W2tleXNdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikua2V5W2tdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1lhcmdzSW5zdGFuY2UoeSkge1xuICAgIHJldHVybiAhIXkgJiYgdHlwZW9mIHkuZ2V0SW50ZXJuYWxNZXRob2RzID09PSAnZnVuY3Rpb24nO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuLy8gQm9vdHN0cmFwcyB5YXJncyBmb3IgRVNNOlxuaW1wb3J0IGVzbVBsYXRmb3JtU2hpbSBmcm9tICcuL2xpYi9wbGF0Zm9ybS1zaGltcy9lc20ubWpzJztcbmltcG9ydCB7WWFyZ3NGYWN0b3J5fSBmcm9tICcuL2J1aWxkL2xpYi95YXJncy1mYWN0b3J5LmpzJztcblxuY29uc3QgWWFyZ3MgPSBZYXJnc0ZhY3RvcnkoZXNtUGxhdGZvcm1TaGltKTtcbmV4cG9ydCBkZWZhdWx0IFlhcmdzO1xuXG5leHBvcnQge1lhcmdzIGFzICdtb2R1bGUuZXhwb3J0cyd9O1xuIiwgImltcG9ydCAqIGFzIHlhcmdzIGZyb20gJ3lhcmdzJ1xuaW1wb3J0IHsgaGlkZUJpbiB9IGZyb20gJ3lhcmdzL2hlbHBlcnMnXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IENyeXB0b0hlbHBlckZhY3RvcnkgfSBmcm9tICcuLi9zZXJ2aWNlcy9DcnlwdG9IZWxwZXJGYWN0b3J5LnRzJztcbmltcG9ydCB7IEZpbGVEYXRhSGVscGVyLCBKc29uRmlsZUVuY29kaW5nIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0ZpbGVEYXRhSGVscGVyLnRzXCI7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vc2VydmljZXMvQ29uc3RhbnRzLnRzJztcbmltcG9ydCAqIGFzIEluUGxhY2VDb25zdGFudHMgZnJvbSAnLi4vZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvRmVhdHVyZUlucGxhY2VDb25zdGFudHMudHMnO1xuaW1wb3J0IHsgRmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXMgfSBmcm9tICcuLi9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9mZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcy50cyc7XG5cbmludGVyZmFjZSBMaXN0aW5nIHtcbiAgICBmZWF0dXJlVHlwZTogJ0luUGxhY2UnIHwgJ1dob2xlTm90ZSc7XG4gICAgZnVsbFBhdGg6IHN0cmluZztcbiAgICByZWxhdGl2ZVBhdGg6IHN0cmluZztcbiAgICBleHRlbnNpb246IHN0cmluZztcbiAgICBjb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmludGVyZmFjZSBUZXN0UmVzdWx0e1xuICAgIGxpc3Rpbmc6IExpc3Rpbmc7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEZWNyeXB0UmVzdWx0e1xuICAgIGxpc3Rpbmc6IExpc3Rpbmc7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgb3V0RmlsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5jbGFzcyBMaXN0Q29tbWFuZEhhbmRsZXIge1xuICAgIFxuXG4gICAgYXN5bmMgYXJnSGFuZGxlciggZm9ybWF0IDogc3RyaW5nICkge1xuXG4gICAgICAgIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAgICAgbGV0IG9uU3RhcnQgOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgb25MaXN0aW5nIDogKGw6TGlzdGluZykgPT4gdm9pZDtcbiAgICAgICAgbGV0IG9uRW5kIDogKCkgPT4gdm9pZDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpc3RpbmdzOiBMaXN0aW5nW10gPSBbXTtcblxuXG4gICAgICAgIGlmICggZm9ybWF0ID09PSAnY3N2Jykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBvblN0YXJ0ID0gKCkgPT4gY29uc29sZS5sb2coICdmZWF0dXJlLGZ1bGxQYXRoLHJlbGF0aXZlUGF0aCxleHRlbnNpb24nICk7XG4gICAgICAgICAgICBvbkxpc3RpbmcgPSAobCkgPT4gY29uc29sZS5sb2coIGBcIiR7bC5mZWF0dXJlVHlwZX1cIixcIiR7bC5mdWxsUGF0aH1cIixcIiR7bC5yZWxhdGl2ZVBhdGh9XCIsXCIke2wuZXh0ZW5zaW9ufVwiYCApO1xuICAgICAgICAgICAgb25FbmQgPSAoKSA9PiB7fTtcblxuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PSAnanNvbicpIHtcblxuICAgICAgICAgICAgb25TdGFydCA9ICgpID0+IHt9O1xuICAgICAgICAgICAgb25MaXN0aW5nID0gKGwpID0+IGxpc3RpbmdzLnB1c2goIGwgKTtcbiAgICAgICAgICAgIG9uRW5kID0gKCkgPT4gY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCBsaXN0aW5ncywgbnVsbCwgMiApICk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICd0YWJsZScpIHtcblxuICAgICAgICAgICAgb25TdGFydCA9ICgpID0+IHt9O1xuICAgICAgICAgICAgb25MaXN0aW5nID0gKGwpID0+IGxpc3RpbmdzLnB1c2goIGwgKTtcbiAgICAgICAgICAgIG9uRW5kID0gKCkgPT4gY29uc29sZS50YWJsZSggbGlzdGluZ3MgKTtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIERlZmF1bHRcbiAgICAgICAgICAgIG9uU3RhcnQgPSAoKSA9PiB7fTtcbiAgICAgICAgICAgIG9uTGlzdGluZyA9IChsKSA9PiBjb25zb2xlLmxvZyggYCR7bC5yZWxhdGl2ZVBhdGh9YCApO1xuICAgICAgICAgICAgb25FbmQgPSAoKSA9PiB7fTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5vdXRwdXQoXG4gICAgICAgICAgICBjd2QsXG4gICAgICAgICAgICBvblN0YXJ0LFxuICAgICAgICAgICAgb25MaXN0aW5nLFxuICAgICAgICAgICAgb25FbmRcbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIGFzeW5jIG91dHB1dChcbiAgICAgICAgZGlyIDogc3RyaW5nLFxuICAgICAgICBzdGFydENhbGxiYWNrIDogKCkgPT4gdm9pZCxcbiAgICAgICAgcGVySXRlbUNhbGxiYWNrIDogKGw6TGlzdGluZykgPT4gdm9pZCxcbiAgICAgICAgZW5kQ2FsbGJhY2sgOiAoKSA9PiB2b2lkXG4gICAgKSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBzdGFydENhbGxiYWNrKCk7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbCBvZiBVdGlscy5saXN0aW5ncyhkaXIsIGZhbHNlKSkge1xuICAgICAgICAgICAgcGVySXRlbUNhbGxiYWNrKGwpO1xuICAgICAgICB9XG4gICAgICAgIGVuZENhbGxiYWNrKCk7XG4gICAgfVxuXG5cbn1cblxuY2xhc3MgVGVzdENvbW1hbmRIYW5kbGVyIHtcblxuICAgIGFzeW5jIGFyZ0hhbmRsZXIoIHBhc3N3b3JkczpzdHJpbmdbXSwgb25seUxpc3RGYWlsczpib29sZWFuICkge1xuXG4gICAgICAgIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIGxldCBoYXNGYWlsdXJlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBsaXN0aW5nIG9mIFV0aWxzLmxpc3RpbmdzKGN3ZCwgdHJ1ZSkpIHtcblxuICAgICAgICAgICAgaWYgKGxpc3RpbmcuZmVhdHVyZVR5cGUgPT0gJ0luUGxhY2UnKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHJlc3VsdCBvZiB0aGlzLnRlc3RGb3JJblBsYWNlRGVjcnlwdGlvbiggbGlzdGluZywgcGFzc3dvcmRzICkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzRmFpbHVyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRSZXN1bHQoIHJlc3VsdCwgb25seUxpc3RGYWlscyApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0aW5nLmZlYXR1cmVUeXBlID09ICdXaG9sZU5vdGUnKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnRlc3RGb3JXaG9sZU5vdGVEZWNyeXB0aW9uKCBsaXN0aW5nLCBwYXNzd29yZHMgKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0ZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJlc3VsdCggcmVzdWx0LCBvbmx5TGlzdEZhaWxzICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNGYWlsdXJlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYXN5bmMgKiB0ZXN0Rm9ySW5QbGFjZURlY3J5cHRpb24oIGxpc3Rpbmc6IExpc3RpbmcsIHBhc3N3b3JkczpzdHJpbmdbXSApIDogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFRlc3RSZXN1bHQ+IHtcblxuICAgICAgICBpZiAoIGxpc3RpbmcuY29udGVudCA9PSBudWxsICkge1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25vIGNvbnRlbnQnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluZXMgPSBsaXN0aW5nLmNvbnRlbnQhLnNwbGl0KCAnXFxuJyApO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgbGluZUlkeCA9IDA7IGxpbmVJZHggPCBsaW5lcy5sZW5ndGg7IGxpbmVJZHgrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2xpbmVJZHhdO1xuICAgICAgICAgICAgY29uc3QgbGluZU5vID0gbGluZUlkeCArIDE7XG4gICAgICAgICAgICBjb25zdCByZUlucGxhY2VNYXRjaGVyID0gL1x1RDgzRFx1REQxMCguKj8pXHVEODNEXHVERDEwL2c7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gQXJyYXkuZnJvbSggbGluZS5tYXRjaEFsbCggcmVJbnBsYWNlTWF0Y2hlciApICk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIG1hdGNoZXMpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTG9jID0gYGxpbmUgJHtsaW5lTm99LCBwb3MgJHttYXRjaC5pbmRleCErMX1gO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZW5jcnlwdGVkVGV4dCA9IGBcdUQ4M0RcdUREMTAke21hdGNoWzFdfVx1RDgzRFx1REQxMGA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0eHRBbmFseXNpcyA9IG5ldyBGZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcyggZW5jcnlwdGVkVGV4dCApO1xuICAgICAgICAgICAgICAgIGlmICghdHh0QW5hbHlzaXMuY2FuRGVjcnlwdCB8fCB0eHRBbmFseXNpcy5kZWNyeXB0YWJsZSA9PSBudWxsICl7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke21hdGNoTG9jfSwgY2Fubm90IGRlY3J5cHRgXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbURlY3J5cHRhYmxlT3JOdWxsKCB0eHRBbmFseXNpcy5kZWNyeXB0YWJsZSApO1xuICAgICAgICAgICAgICAgIGlmICggY2ggPT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHttYXRjaExvY30sIHVua25vd24gZm9ybWF0YFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgd2FzRGVjcnlwdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHdJZHggPSAwOyBwd0lkeCA8IHBhc3N3b3Jkcy5sZW5ndGg7IHB3SWR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHcgPSBwYXNzd29yZHNbcHdJZHhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwd05vID0gcHdJZHggKyAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWNyeXB0ZWRUZXh0ID0gYXdhaXQgY2guZGVjcnlwdEZyb21CYXNlNjQodHh0QW5hbHlzaXMuZGVjcnlwdGFibGUuYmFzZTY0Q2lwaGVyVGV4dCwgcHcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRlY3J5cHRlZFRleHQgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FzRGVjcnlwdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7bWF0Y2hMb2N9LCBwYXNzd29yZCAjJHtwd05vfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghd2FzRGVjcnlwdGVkKXtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7bWF0Y2hMb2N9LCB1bmFibGUgdG8gZGVjcnlwdGBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhc3luYyB0ZXN0Rm9yV2hvbGVOb3RlRGVjcnlwdGlvbiggbGlzdGluZzogTGlzdGluZywgcGFzc3dvcmRzOnN0cmluZ1tdICkgOiBQcm9taXNlPFRlc3RSZXN1bHQ+IHtcbiAgICAgICAgaWYoIGxpc3RpbmcuY29udGVudCA9PSBudWxsIHx8IGxpc3RpbmcuY29udGVudC5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdubyBjb250ZW50J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbGVEYXRhID0gSnNvbkZpbGVFbmNvZGluZy5kZWNvZGUoIGxpc3RpbmcuY29udGVudCB8fCAnJyApO1xuXG4gICAgICAgIGNvbnN0IGNoID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yTnVsbCggZmlsZURhdGEgKTtcbiAgICAgICAgaWYgKCBjaCA9PSBudWxsICl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1Vua25vd24gZm9ybWF0J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHB3ID0gcGFzc3dvcmRzW2ldO1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IEZpbGVEYXRhSGVscGVyLmRlY3J5cHQoZmlsZURhdGEsIHB3KVxuICAgICAgICAgICAgaWYgKCBkZWNvZGVkICE9IG51bGwgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgcGFzc3dvcmQgIyR7aSsxfWBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICd1bmFibGUgdG8gZGVjcnlwdCdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvdXRwdXRSZXN1bHQocmVzdWx0OiBUZXN0UmVzdWx0LCBvbmx5TGlzdEZhaWxzOmJvb2xlYW4pIHtcbiAgICAgICAgaWYgKG9ubHlMaXN0RmFpbHMgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyggYCR7cmVzdWx0LnN1Y2Nlc3MgPyAnUEFTU0VEJyA6ICdGQUlMRUQnfSA9PiAke3Jlc3VsdC5saXN0aW5nLnJlbGF0aXZlUGF0aH0gPT4gJHtyZXN1bHQubWVzc2FnZX0gPT4gJHtyZXN1bHQubGlzdGluZy5mZWF0dXJlVHlwZX1gICk7XG4gICAgfVxuXG4gICAgb3V0cHV0UmVzdWx0cyhyZXN1bHRzOiBUZXN0UmVzdWx0W10sIG9ubHlMaXN0RmFpbHM6Ym9vbGVhbikge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dFJlc3VsdCggcmVzdWx0LCBvbmx5TGlzdEZhaWxzICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIERlY3J5cHRDb21tYW5kSGFuZGxlcntcbiAgICBhc3luYyBhcmdIYW5kbGVyKCBwYXNzd29yZHM6c3RyaW5nW10sIG91dGRpcjpzdHJpbmcsIGRyeXJ1bjpib29sZWFuICkge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coIGBkZWNyeXB0aW5nJHtkcnlydW4/JyAoZHJ5IHJ1biknOicnfS4uLmAgKTtcblxuICAgICAgICBjb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICBsZXQgaGFzRmFpbHVyZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbGlzdGluZyBvZiBVdGlscy5saXN0aW5ncyhjd2QsIHRydWUpKSB7XG5cbiAgICAgICAgICAgIGlmIChsaXN0aW5nLmZlYXR1cmVUeXBlID09ICdJblBsYWNlJyl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGVjcnlwdEluUGxhY2VMaXN0aW5nKCBsaXN0aW5nLCBwYXNzd29yZHMsIG91dGRpciwgZHJ5cnVuICk7XG4gICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgIGhhc0ZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0UmVzdWx0KCByZXN1bHQgKTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RpbmcuZmVhdHVyZVR5cGUgPT0gJ1dob2xlTm90ZScpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGVjcnlwdFdob2xlTm90ZUxpc3RpbmcoIGxpc3RpbmcsIHBhc3N3b3Jkcywgb3V0ZGlyLCBkcnlydW4gKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0ZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJlc3VsdCggcmVzdWx0ICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNGYWlsdXJlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBkZWNyeXB0SW5QbGFjZUxpc3RpbmcobGlzdGluZzogTGlzdGluZywgcGFzc3dvcmRzOiBzdHJpbmdbXSwgb3V0ZGlyOiBzdHJpbmcsIGRyeXJ1bjogYm9vbGVhbikgOiBQcm9taXNlPERlY3J5cHRSZXN1bHQ+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpbmVzID0gbGlzdGluZy5jb250ZW50IS5zcGxpdCggJ1xcbicgKTtcbiAgICAgICAgY29uc3QgZGVjcnlwdGVkTGluZXMgOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgbGluZUlkeCA9IDA7IGxpbmVJZHggPCBsaW5lcy5sZW5ndGg7IGxpbmVJZHgrKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbbGluZUlkeF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxpbmVObyA9IGxpbmVJZHggKyAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZUlucGxhY2VNYXRjaGVycyA9IFtcbiAgICAgICAgICAgICAgICAvJSVcdUQ4M0RcdUREMTAoLio/KVx1RDgzRFx1REQxMCUlL2csXG4gICAgICAgICAgICAgICAgL1x1RDgzRFx1REQxMCguKj8pXHVEODNEXHVERDEwL2dcbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgbGV0IGRlY3J5cHRlZExpbmUgPSBsaW5lO1xuICAgICAgICAgICAgbGV0IG1hdGNoQ291bnQgPSAwO1xuICAgICAgICAgICAgbGV0IGRlY3J5cHRlZENvdW50ID0gMDtcblxuICAgICAgICAgICAgZm9yIChjb25zdCByZUlucGxhY2VNYXRjaGVyIG9mIHJlSW5wbGFjZU1hdGNoZXJzKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IG1hdGNoIG9mIGRlY3J5cHRlZExpbmUubWF0Y2hBbGwoIHJlSW5wbGFjZU1hdGNoZXIgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExvYyA9IGBMaW5lICR7bGluZU5vfSwgcG9zICR7bWF0Y2guaW5kZXghKzF9YDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkVGV4dCA9IG1hdGNoWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmNyeXB0ZWRUZXh0ID0gYFx1RDgzRFx1REQxMCR7bWF0Y2hbMV19XHVEODNEXHVERDEwYDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHRBbmFseXNpcyA9IG5ldyBGZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcyggZW5jcnlwdGVkVGV4dCApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR4dEFuYWx5c2lzLmNhbkRlY3J5cHQgfHwgdHh0QW5hbHlzaXMuZGVjcnlwdGFibGUgPT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBFUlJPUjogJHttYXRjaExvY30sIGNhbm5vdCBkZWNyeXB0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRGaWxlOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaCA9IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGRGcm9tRGVjcnlwdGFibGVPck51bGwoIHR4dEFuYWx5c2lzLmRlY3J5cHRhYmxlICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY2ggPT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBFUlJPUjogJHttYXRjaExvY30sIHVua25vd24gZm9ybWF0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRGaWxlOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVjcnlwdGVkVGV4dCA6ICBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHdJZHggPSAwOyBwd0lkeCA8IHBhc3N3b3Jkcy5sZW5ndGg7IHB3SWR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHB3ID0gcGFzc3dvcmRzW3B3SWR4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZFRleHQgPSBhd2FpdCBjaC5kZWNyeXB0RnJvbUJhc2U2NCh0eHRBbmFseXNpcy5kZWNyeXB0YWJsZS5iYXNlNjRDaXBoZXJUZXh0LCBwdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGRlY3J5cHRlZFRleHQgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlY3J5cHRlZFRleHQhPT1udWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZENvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxhaW50ZXh0ID0gZGVjcnlwdGVkVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRlZExpbmUgPSBkZWNyeXB0ZWRMaW5lLnJlcGxhY2UoIG1hdGNoZWRUZXh0LCAoKSA9PiBwbGFpbnRleHQgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2hDb3VudCAhPSBkZWNyeXB0ZWRDb3VudCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBFUlJPUjogVW5hYmxlIHRvIGRlY3J5cHQgYWxsIG1hdGNoZXMuIExpbmUgJHtsaW5lTm99LCBtYXRjaCBjb3VudCAke21hdGNoQ291bnR9ICE9IGRlY3J5cHRlZCBjb3VudCAke2RlY3J5cHRlZENvdW50fWAsXG4gICAgICAgICAgICAgICAgICAgIG91dEZpbGU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlY3J5cHRlZExpbmVzLnB1c2goIGRlY3J5cHRlZExpbmUgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG91dEZpbGUgPSBwYXRoLmpvaW4oIG91dGRpciwgbGlzdGluZy5yZWxhdGl2ZVBhdGggKTtcblxuICAgICAgICBpZiAoIWRyeXJ1bil7XG4gICAgICAgICAgICBjb25zdCBvdXRGaWxlRGlyID0gcGF0aC5kaXJuYW1lKCBvdXRGaWxlICk7XG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoIG91dEZpbGVEaXIgKSl7XG4gICAgICAgICAgICAgICAgZnMubWtkaXJTeW5jKCBvdXRGaWxlRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCBvdXRGaWxlLCBkZWNyeXB0ZWRMaW5lcy5qb2luKCAnXFxuJyApICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0RlY3J5cHRlZCcsXG4gICAgICAgICAgICBvdXRGaWxlOiBvdXRGaWxlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG91dHB1dFJlc3VsdChyZXN1bHQ6IERlY3J5cHRSZXN1bHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coIGAke3Jlc3VsdC5tZXNzYWdlfSA6ICR7cmVzdWx0Lmxpc3RpbmcucmVsYXRpdmVQYXRofSR7cmVzdWx0Lm91dEZpbGUgPT0gbnVsbCA/ICcnIDogJyA9PiBgJyArIHJlc3VsdC5vdXRGaWxlICsgJ2AnfWAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWNyeXB0V2hvbGVOb3RlTGlzdGluZyhsaXN0aW5nOiBMaXN0aW5nLCBwYXNzd29yZHM6IHN0cmluZ1tdLCBvdXRkaXI6IHN0cmluZywgZHJ5cnVuOmJvb2xlYW4gKSA6IFByb21pc2U8RGVjcnlwdFJlc3VsdD4ge1xuXG4gICAgICAgIGxldCBvdXRGaWxlID0gcGF0aC5qb2luKCBvdXRkaXIsIGxpc3RpbmcucmVsYXRpdmVQYXRoICk7XG5cbiAgICAgICAgLy8gY2hhbmdlIGV4dGVuc2lvblxuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUob3V0RmlsZSk7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShvdXRGaWxlKTtcbiAgICAgICAgY29uc3QgbmV3RmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKGV4dGVuc2lvbiwgJy5tZCcpO1xuXG4gICAgICAgIC8vIGZpbmFsIG91dGZpbGVcbiAgICAgICAgb3V0RmlsZSA9IHBhdGguam9pbihwYXRoLmRpcm5hbWUob3V0RmlsZSksIG5ld0ZpbGVOYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghZHJ5cnVuKXtcbiAgICAgICAgICAgIGNvbnN0IG91dEZpbGVEaXIgPSBwYXRoLmRpcm5hbWUoIG91dEZpbGUgKTtcbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyggb3V0RmlsZURpciApKXtcbiAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmMoIG91dEZpbGVEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBsaXN0aW5nLmNvbnRlbnQgPT0gbnVsbCB8fCBsaXN0aW5nLmNvbnRlbnQubGVuZ3RoID09IDAgKXtcblxuICAgICAgICAgICAgaWYgKCFkcnlydW4pe1xuICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoIG91dEZpbGUsICcnICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdXQVJOOiBFbXB0eSBmaWxlJyxcbiAgICAgICAgICAgICAgICBvdXRGaWxlOiBvdXRGaWxlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBKc29uRmlsZUVuY29kaW5nLmRlY29kZSggbGlzdGluZy5jb250ZW50IHx8ICcnICk7XG5cbiAgICAgICAgY29uc3QgY2ggPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbUZpbGVEYXRhT3JOdWxsKCBmaWxlRGF0YSApO1xuICAgICAgICBpZiAoIGNoID09IG51bGwgKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRVJST1I6IFVua25vd24gZm9ybWF0JyxcbiAgICAgICAgICAgICAgICBvdXRGaWxlOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwdyA9IHBhc3N3b3Jkc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBGaWxlRGF0YUhlbHBlci5kZWNyeXB0KGZpbGVEYXRhLCBwdylcbiAgICAgICAgICAgIGlmICggZGVjb2RlZCAhPSBudWxsICl7XG4gICAgICAgICAgICAgICAgaWYgKCFkcnlydW4pe1xuICAgICAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCBvdXRGaWxlLCBkZWNvZGVkICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYERlY3J5cHRlZGAsXG4gICAgICAgICAgICAgICAgICAgIG91dEZpbGU6IG91dEZpbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBFUlJPUjogVW5hYmxlIHRvIGRlY3J5cHRgLFxuICAgICAgICAgICAgb3V0RmlsZTogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBVdGlsc3tcbiAgICBzdGF0aWMgYXN5bmMgKiB3YWxrKCBkaXIgOiBzdHJpbmcgKSA6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxzdHJpbmc+IHtcbiAgICAgICAgXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgZCBvZiBhd2FpdCBmcy5wcm9taXNlcy5vcGVuZGlyKGRpcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gcGF0aC5qb2luKGRpciwgZC5uYW1lKTtcbiAgICAgICAgICAgIGlmIChkLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCogVXRpbHMud2FsayhlbnRyeSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGQuaXNGaWxlKCkpe1xuICAgICAgICAgICAgICAgIHlpZWxkIGVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jICogbGlzdGluZ3MoIGRpciA6IHN0cmluZywgaW5jbHVkZUNvbnRlbnQ6IGJvb2xlYW4gKSA6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxMaXN0aW5nPiB7XG4gICAgICAgIFxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHAgb2YgVXRpbHMud2FsayggZGlyICkpIHtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShwKS50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xuXG4gICAgICAgICAgICAvLyBleGl0IGVhcmx5IGlmIG5vdCBhIHJlbGV2YW50IGZpbGVcbiAgICAgICAgICAgIGlmICggIVsnbWQnLCAuLi5Db25zdGFudHMuRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OU10uaW5jbHVkZXMoIGV4dCApICl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9ICcuJyArIHBhdGguc2VwICsgcGF0aC5yZWxhdGl2ZShkaXIsIHApO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9ICggaW5jbHVkZUNvbnRlbnQgfHwgZXh0ID09ICdtZCcgKSA/IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKCBwLCAndXRmOCcgKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIFxuXHRcdFx0Ly8gY291bGQgaGF2ZSBpbnBsYWNlIGVuY3J5cHRlZCBub3Rlc1xuXHRcdFx0aWYgKCBleHQgPT0gJ21kJyApe1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCBJblBsYWNlQ29uc3RhbnRzLl9QUkVGSVhFUy5zb21lKCAocHJlZml4KSA9PiBjb250ZW50IS5pbmNsdWRlcyhwcmVmaXgpICkgKXtcblx0XHRcdFx0XHR5aWVsZCB7XG5cdFx0XHRcdFx0XHRmZWF0dXJlVHlwZTogJ0luUGxhY2UnLFxuXHRcdFx0XHRcdFx0ZnVsbFBhdGg6IHAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVBhdGg6IHJlbGF0aXZlUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogaW5jbHVkZUNvbnRlbnQgPyBjb250ZW50IDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIG11c3QgYmUgd2hvbGUgbm90ZSBlbmNyeXB0ZWRcbiAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ1dob2xlTm90ZScsXG4gICAgICAgICAgICAgICAgZnVsbFBhdGg6IHAsXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGgsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBleHQsXG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5jb25zdCBvcHRQYXNzd29yZExpc3QgOiB5YXJncy5PcHRpb25zICA9IHtcbiAgICBkZW1hbmRPcHRpb246IHRydWUsXG4gICAgYWxpYXM6IFsncCcsICdwdyddLFxuICAgIGRlc2NyaWJlOiAncGFzc3dvcmRzIHRvIHVzZScsXG4gICAgdHlwZTogJ2FycmF5Jyxcbn1cblxuY29uc3Qgb3B0TGlzdGluZ0Zvcm1hdCA6IHlhcmdzLk9wdGlvbnMgPSB7XG4gICAgYWxpYXM6ICdmJyxcbiAgICBkZXNjcmliZTogJ2Zvcm1hdCBvZiB0aGUgbGlzdGluZycsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgY2hvaWNlczogWyAnZGVmYXVsdCcsICd0YWJsZScsICdqc29uJywgJ2NzdiddLFxuICAgIGRlZmF1bHQ6ICdkZWZhdWx0Jyxcbn1cblxuXG5cbnlhcmdzLmRlZmF1bHQoaGlkZUJpbihwcm9jZXNzLmFyZ3YpKVxuICAgIC5zY3JpcHROYW1lKCdtZGVuYycpXG4gICAgLnVzYWdlKCAnVXNhZ2U6ICQwIFtjb21tYW5kXSBbb3B0aW9uc10nIClcblxuICAgIC5jb21tYW5kKCAnbGlzdCcsICdsaXN0IGFsbCBlbmNyeXB0ZWQgYXJ0aWZhY3RzIHdpdGhpbiB0aGUgY3VycmVudCBkaXJlY3RvcnknLCAoeWFyZ3MpID0+IHlhcmdzLm9wdGlvbigge1xuICAgICAgICBmb3JtYXQ6IG9wdExpc3RpbmdGb3JtYXRcbiAgICB9ICksIChhcmd2KSA9PiBuZXcgTGlzdENvbW1hbmRIYW5kbGVyKCkuYXJnSGFuZGxlcihhcmd2LmZvcm1hdCBhcyBzdHJpbmcgKSApXG4gICAgXG4gICAgLmNvbW1hbmQoWyd0ZXN0JywgJ2NoZWNrJ10sICdjaGVjayB0aGF0IGFsbCBub3RlcyBjYW4gYmUgZGVjcnlwdGVkIHdpdGggdGhlIGdpdmVuIHBhc3N3b3JkIGxpc3QnLCAoeWFyZ3MpID0+IHlhcmdzLm9wdGlvbiggIHtcbiAgICAgICAgcGFzc3dvcmRzOiBvcHRQYXNzd29yZExpc3QsXG4gICAgICAgIGZhaWxzOiB7XG4gICAgICAgICAgICBhbGlhczogWydmJywgJ2ZhaWwnXSxcbiAgICAgICAgICAgIGRlc2NyaWJlOiAnb25seSBsaXN0IGZhaWxzJyxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9ICksIChhcmd2KSA9PiBuZXcgVGVzdENvbW1hbmRIYW5kbGVyKCkuYXJnSGFuZGxlciggYXJndi5wYXNzd29yZHMgYXMgc3RyaW5nW10sIGFyZ3YuZmFpbHMgYXMgYm9vbGVhbiApIClcbiAgICBcbiAgICAuY29tbWFuZCgnZGVjcnlwdCcsICdkZWNyeXB0IG5vdGVzIHRvIHBsYWluIHRleHQgZ2l2ZW4gYSBwYXNzd29yZCBsaXN0IGFuZCBhbiBvdXRwdXQgZGlyZWN0b3J5JywgICh5YXJncykgPT4geWFyZ3Mub3B0aW9uKCAge1xuICAgICAgICBwYXNzd29yZHM6IG9wdFBhc3N3b3JkTGlzdCxcbiAgICAgICAgb3V0ZGlyOiB7XG4gICAgICAgICAgICBhbGlhczogWydvJywgJ291dCcsICd0byddLFxuICAgICAgICAgICAgZGVzY3JpYmU6ICdvdXRwdXQgZGlyZWN0b3J5JyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZGVtYW5kT3B0aW9uOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGRyeXJ1bjoge1xuICAgICAgICAgICAgYWxpYXM6IFsnZHInLCAnZHJ5J10sXG4gICAgICAgICAgICBkZXNjcmliZTogJ2RyeSBydW4nLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0gKSwgKGFyZ3YpID0+IG5ldyBEZWNyeXB0Q29tbWFuZEhhbmRsZXIoKS5hcmdIYW5kbGVyKCBhcmd2LnBhc3N3b3JkcyBhcyBzdHJpbmdbXSwgYXJndi5vdXRkaXIgYXMgc3RyaW5nLCBhcmd2LmRyeXJ1biAhPT0gZmFsc2UgKSApIFxuICAgIFxuICAgIC5kZW1hbmRDb21tYW5kKClcbiAgICAuaGVscCgpXG4gICAgLndyYXAoIG51bGwgKVxuICAgIC5leGFtcGxlKFtcbiAgICAgICAgWyckMCBsaXN0JywgJ1Byb2Nlc3NlcyBhbGwgKi5tZCBhbmQgKi5tZGVuYyBmaWxlcyBhbmQgbGlzdCBhbnkgZW5jcnlwdGVkIGFydGlmYWN0cyB3aXRoaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5J10sXG4gICAgICAgIFsnJDAgdGVzdCAtLXBhc3N3b3JkcyBwdzEgcHcyJywgJ2NoZWNrIHRoYXQgYWxsIG5vdGVzIGNhbiBiZSBkZWNyeXB0ZWQgd2l0aCB0aGUgZ2l2ZW4gcGFzc3dvcmQgbGlzdCddLFxuICAgICAgICBbJyQwIGRlY3J5cHQgLS1wdyBwdzEgcHcyIC0tb3V0ZGlyIFxcXFxwYXRoXFxcXHRvXFxcXG91dHB1dFxcXFwnLCAnZGVjcnlwdCBub3RlcyB0byBhbiBvdXRwdXQgZGlyZWN0b3J5J10sXG4gICAgICBdKVxuICAgIC5wYXJzZSgpXG47XG4gXG5cbiIsICJjb25zdCB2ZWN0b3JTaXplXHQ9IDE2O1xuY29uc3QgdXRmOEVuY29kZXJcdD0gbmV3IFRleHRFbmNvZGVyKCk7XG5jb25zdCB1dGY4RGVjb2Rlclx0PSBuZXcgVGV4dERlY29kZXIoKTtcbmNvbnN0IGl0ZXJhdGlvbnNcdD0gMTAwMDtcbmNvbnN0IHNhbHRcdFx0XHQ9IHV0ZjhFbmNvZGVyLmVuY29kZSgnWEhXbkRBVDZlaE1WWTJ6RCcpO1xuXG5leHBvcnQgY2xhc3MgQ3J5cHRvSGVscGVyIHtcblxuXHQvLyBjb25zdHJ1Y3Rvcigpe1xuXHQvLyBcdGNvbnNvbGUuZGVidWcoJ25ldyBDcnlwdG9IZWxwZXInKTtcblx0Ly8gfVxuXG5cdHByaXZhdGUgYXN5bmMgZGVyaXZlS2V5KHBhc3N3b3JkOnN0cmluZykgOlByb21pc2U8Q3J5cHRvS2V5PiB7XG5cdFx0Y29uc3QgYnVmZmVyICAgICA9IHV0ZjhFbmNvZGVyLmVuY29kZShwYXNzd29yZCk7XG5cdFx0Y29uc3Qga2V5ICAgICAgICA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KCdyYXcnLCBidWZmZXIsIHtuYW1lOiAnUEJLREYyJ30sIGZhbHNlLCBbJ2Rlcml2ZUtleSddKTtcblx0XHRjb25zdCBwcml2YXRlS2V5ID0gY3J5cHRvLnN1YnRsZS5kZXJpdmVLZXkoXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdQQktERjInLFxuXHRcdFx0XHRoYXNoOiB7bmFtZTogJ1NIQS0yNTYnfSxcblx0XHRcdFx0aXRlcmF0aW9ucyxcblx0XHRcdFx0c2FsdFxuXHRcdFx0fSxcblx0XHRcdGtleSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ0FFUy1HQ00nLFxuXHRcdFx0XHRsZW5ndGg6IDI1NlxuXHRcdFx0fSxcblx0XHRcdGZhbHNlLFxuXHRcdFx0WydlbmNyeXB0JywgJ2RlY3J5cHQnXVxuXHRcdCk7XG5cdFx0XG5cdFx0cmV0dXJuIHByaXZhdGVLZXk7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQnl0ZXModGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XG5cblx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmRlcml2ZUtleShwYXNzd29yZCk7XG5cdFx0XG5cdFx0Y29uc3QgdGV4dEJ5dGVzVG9FbmNyeXB0ID0gdXRmOEVuY29kZXIuZW5jb2RlKHRleHQpO1xuXHRcdGNvbnN0IHZlY3RvciA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkodmVjdG9yU2l6ZSkpO1xuXHRcdFxuXHRcdC8vIGVuY3J5cHQgaW50byBieXRlc1xuXHRcdGNvbnN0IGVuY3J5cHRlZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoXG5cdFx0XHRhd2FpdCBjcnlwdG8uc3VidGxlLmVuY3J5cHQoXG5cdFx0XHRcdHtuYW1lOiAnQUVTLUdDTScsIGl2OiB2ZWN0b3J9LFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHRleHRCeXRlc1RvRW5jcnlwdFxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0XG5cdFx0Y29uc3QgZmluYWxCeXRlcyA9IG5ldyBVaW50OEFycmF5KCB2ZWN0b3IuYnl0ZUxlbmd0aCArIGVuY3J5cHRlZEJ5dGVzLmJ5dGVMZW5ndGggKTtcblx0XHRmaW5hbEJ5dGVzLnNldCggdmVjdG9yLCAwICk7XG5cdFx0ZmluYWxCeXRlcy5zZXQoIGVuY3J5cHRlZEJ5dGVzLCB2ZWN0b3IuYnl0ZUxlbmd0aCApO1xuXG5cdFx0cmV0dXJuIGZpbmFsQnl0ZXM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUb1N0cmluZyggYnl0ZXMgOiBVaW50OEFycmF5ICk6IHN0cmluZyB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGJ5dGVzLmxlbmd0aDsgaWR4KyspIHtcblx0XHRcdC8vIGFwcGVuZCB0byByZXN1bHRcblx0XHRcdHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2lkeF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGVuY3J5cHRUb0Jhc2U2NCh0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXG5cdFx0Y29uc3QgZmluYWxCeXRlcyA9IGF3YWl0IHRoaXMuZW5jcnlwdFRvQnl0ZXModGV4dCwgcGFzc3dvcmQpO1xuXG5cdFx0Ly9jb252ZXJ0IGFycmF5IHRvIGJhc2U2NFxuXHRcdGNvbnN0IGJhc2U2NFRleHQgPSBidG9hKCB0aGlzLmNvbnZlcnRUb1N0cmluZyhmaW5hbEJ5dGVzKSApO1xuXG5cdFx0cmV0dXJuIGJhc2U2NFRleHQ7XG5cdH1cblxuXHRwcml2YXRlIHN0cmluZ1RvQXJyYXkoc3RyOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJ5dGVzKGVuY3J5cHRlZEJ5dGVzOiBVaW50OEFycmF5LCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xuXHRcdHRyeSB7XG5cblx0XHRcdC8vIGV4dHJhY3QgaXZcblx0XHRcdGNvbnN0IHZlY3RvciA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKDAsdmVjdG9yU2l6ZSk7XG5cblx0XHRcdC8vIGV4dHJhY3QgZW5jcnlwdGVkIHRleHRcblx0XHRcdGNvbnN0IGVuY3J5cHRlZFRleHRCeXRlcyA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKHZlY3RvclNpemUpO1xuXG5cdFx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmRlcml2ZUtleShwYXNzd29yZCk7XG5cblx0XHRcdC8vIGRlY3J5cHQgaW50byBieXRlc1xuXHRcdFx0Y29uc3QgZGVjcnlwdGVkQnl0ZXMgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlY3J5cHQoXG5cdFx0XHRcdHtuYW1lOiAnQUVTLUdDTScsIGl2OiB2ZWN0b3J9LFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdGVuY3J5cHRlZFRleHRCeXRlc1xuXHRcdFx0KTtcblxuXHRcdFx0Ly8gY29udmVydCBieXRlcyB0byB0ZXh0XG5cdFx0XHRjb25zdCBkZWNyeXB0ZWRUZXh0ID0gdXRmOERlY29kZXIuZGVjb2RlKGRlY3J5cHRlZEJ5dGVzKTtcblx0XHRcdHJldHVybiBkZWNyeXB0ZWRUZXh0O1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEZyb21CYXNlNjQoYmFzZTY0RW5jb2RlZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xuXHRcdHRyeSB7XG5cblx0XHRcdGNvbnN0IGJ5dGVzVG9EZWNvZGUgPSB0aGlzLnN0cmluZ1RvQXJyYXkoYXRvYihiYXNlNjRFbmNvZGVkKSk7XG5cdFx0XHRcblx0XHRcdHJldHVybiBhd2FpdCB0aGlzLmRlY3J5cHRGcm9tQnl0ZXMoYnl0ZXNUb0RlY29kZSwgcGFzc3dvcmQpO1xuXG5cdFx0XHQvLyAvLyBleHRyYWN0IGl2XG5cdFx0XHQvLyBjb25zdCB2ZWN0b3IgPSBieXRlc1RvRGVjb2RlLnNsaWNlKDAsdmVjdG9yU2l6ZSk7XG5cblx0XHRcdC8vIC8vIGV4dHJhY3QgZW5jcnlwdGVkIHRleHRcblx0XHRcdC8vIGNvbnN0IGVuY3J5cHRlZFRleHRCeXRlcyA9IGJ5dGVzVG9EZWNvZGUuc2xpY2UodmVjdG9yU2l6ZSk7XG5cblx0XHRcdC8vIGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuZGVyaXZlS2V5KHBhc3N3b3JkKTtcblxuXHRcdFx0Ly8gLy8gZGVjcnlwdCBpbnRvIGJ5dGVzXG5cdFx0XHQvLyBsZXQgZGVjcnlwdGVkQnl0ZXMgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlY3J5cHQoXG5cdFx0XHQvLyBcdHtuYW1lOiAnQUVTLUdDTScsIGl2OiB2ZWN0b3J9LFxuXHRcdFx0Ly8gXHRrZXksXG5cdFx0XHQvLyBcdGVuY3J5cHRlZFRleHRCeXRlc1xuXHRcdFx0Ly8gKTtcblxuXHRcdFx0Ly8gLy8gY29udmVydCBieXRlcyB0byB0ZXh0XG5cdFx0XHQvLyBsZXQgZGVjcnlwdGVkVGV4dCA9IHV0ZjhEZWNvZGVyLmRlY29kZShkZWNyeXB0ZWRCeXRlcyk7XG5cdFx0XHQvLyByZXR1cm4gZGVjcnlwdGVkVGV4dDtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG5cbiIsICJpbXBvcnQgeyBJQ3J5cHRvSGVscGVyIH0gZnJvbSBcIi4vSUNyeXB0b0hlbHBlci50c1wiO1xuXG5leHBvcnQgY2xhc3MgQ3J5cHRvSGVscGVyMjMwNCBpbXBsZW1lbnRzIElDcnlwdG9IZWxwZXIge1xuXHRwdWJsaWMgdmVjdG9yU2l6ZTogbnVtYmVyO1xuXHRwdWJsaWMgc2FsdFNpemU6IG51bWJlcjtcblx0cHVibGljIGl0ZXJhdGlvbnM6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvciggdmVjdG9yU2l6ZTogbnVtYmVyLCBzYWx0U2l6ZTogbnVtYmVyLCBpdGVyYXRpb25zOiBudW1iZXIgKXtcblx0XHQvL2NvbnNvbGUuZGVidWcoJ25ldyBDcnlwdG9IZWxwZXIyMzA0Jywge3ZlY3RvclNpemUsIHNhbHRTaXplLCBpdGVyYXRpb25zfSk7XG5cdFx0dGhpcy52ZWN0b3JTaXplID0gdmVjdG9yU2l6ZTtcblx0XHR0aGlzLnNhbHRTaXplID0gc2FsdFNpemU7XG5cdFx0dGhpcy5pdGVyYXRpb25zID0gaXRlcmF0aW9ucztcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgZGVyaXZlS2V5KCBwYXNzd29yZDpzdHJpbmcsIHNhbHQ6VWludDhBcnJheSApIDpQcm9taXNlPENyeXB0b0tleT4ge1xuXHRcdC8vIGNvbnNvbGUudHJhY2UoJ0NyeXB0b0hlbHBlcjIzMDQuZGVyaXZlS2V5Jyk7XG5cdFx0Ly9TZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TdWJ0bGVDcnlwdG9cblx0XHRjb25zdCB1dGY4RW5jb2Rlclx0PSBuZXcgVGV4dEVuY29kZXIoKTtcblx0XHRjb25zdCBidWZmZXIgICAgID0gdXRmOEVuY29kZXIuZW5jb2RlKHBhc3N3b3JkKTtcblx0XHRjb25zdCBrZXkgICAgICAgID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXG5cdFx0XHQvKmZvcm1hdCovICdyYXcnLFxuXHRcdFx0LyprZXlEYXRhKi8gYnVmZmVyLFxuXHRcdFx0LyphbGdvcml0aG0qLyAnUEJLREYyJyxcblx0XHRcdC8qZXh0cmFjdGFibGUqLyBmYWxzZSxcblx0XHRcdC8qa2V5VXNhZ2VzKi8gWydkZXJpdmVLZXknXVxuXHRcdCk7XG5cdFx0XG5cdFx0Ly9jb25zb2xlLnRpbWUoJ0NyeXB0b0hlbHBlcjIzMDQuZGVyaXZlS2V5Jyk7XG5cdFx0dHJ5e1xuXHRcdFx0Y29uc3QgcHJpdmF0ZUtleSA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVyaXZlS2V5KFxuXHRcdFx0XHQvKmFsZ29yaXRobSovIHtcblx0XHRcdFx0XHRuYW1lOiAnUEJLREYyJyxcblx0XHRcdFx0XHRoYXNoOiAnU0hBLTUxMicsXG5cdFx0XHRcdFx0c2FsdDogc2FsdC5idWZmZXIgYXMgQXJyYXlCdWZmZXIsXG5cdFx0XHRcdFx0aXRlcmF0aW9uczogdGhpcy5pdGVyYXRpb25zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKmJhc2VLZXkqLyBrZXksXG5cdFx0XHRcdC8qZGVyaXZlZEtleUFsZ29yaXRobSovIHtcblx0XHRcdFx0XHRuYW1lOiAnQUVTLUdDTScsXG5cdFx0XHRcdFx0bGVuZ3RoOiAyNTZcblx0XHRcdFx0fSxcblx0XHRcdFx0LypleHRyYWN0YWJsZSovIGZhbHNlLFxuXHRcdFx0XHQvKmtleVVzYWdlcyovIFsnZW5jcnlwdCcsICdkZWNyeXB0J11cblx0XHRcdCk7XG5cdFx0XHRcblx0XHRcdHJldHVybiBwcml2YXRlS2V5O1xuXHRcdH1maW5hbGx5e1xuXHRcdFx0Ly9jb25zb2xlLnRpbWVFbmQoJ0NyeXB0b0hlbHBlcjIzMDQuZGVyaXZlS2V5Jyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBlbmNyeXB0VG9CeXRlcyggdGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nICk6IFByb21pc2U8VWludDhBcnJheT4ge1xuXG5cdFx0Y29uc3Qgc2FsdCA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoIG5ldyBVaW50OEFycmF5KHRoaXMuc2FsdFNpemUpICk7XG5cblx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmRlcml2ZUtleSggcGFzc3dvcmQsIHNhbHQgKTtcblx0XHRcblx0XHRjb25zdCB1dGY4RW5jb2Rlclx0PSBuZXcgVGV4dEVuY29kZXIoKTtcblx0XHRjb25zdCB0ZXh0Qnl0ZXNUb0VuY3J5cHQgPSB1dGY4RW5jb2Rlci5lbmNvZGUodGV4dCk7XG5cdFx0Y29uc3QgdmVjdG9yID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSh0aGlzLnZlY3RvclNpemUpKTtcblx0XHRcblx0XHQvLyBlbmNyeXB0IGludG8gYnl0ZXNcblx0XHRjb25zdCBlbmNyeXB0ZWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KFxuXHRcdFx0YXdhaXQgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KFxuXHRcdFx0XHQvKmFsZ29yaXRobSovIHtcblx0XHRcdFx0XHRuYW1lOiAnQUVTLUdDTScsXG5cdFx0XHRcdFx0aXY6IHZlY3RvclxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKmtleSovIGtleSxcblx0XHRcdFx0LypkYXRhKi8gdGV4dEJ5dGVzVG9FbmNyeXB0XG5cdFx0XHQpXG5cdFx0KTtcblx0XHRcblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoIHZlY3Rvci5ieXRlTGVuZ3RoICsgc2FsdC5ieXRlTGVuZ3RoICsgZW5jcnlwdGVkQnl0ZXMuYnl0ZUxlbmd0aCApO1xuXHRcdGZpbmFsQnl0ZXMuc2V0KCB2ZWN0b3IsIDAgKTtcblx0XHRmaW5hbEJ5dGVzLnNldCggc2FsdCwgdmVjdG9yLmJ5dGVMZW5ndGggKTtcblx0XHRmaW5hbEJ5dGVzLnNldCggZW5jcnlwdGVkQnl0ZXMsIHZlY3Rvci5ieXRlTGVuZ3RoICsgc2FsdC5ieXRlTGVuZ3RoICk7XG5cblx0XHRyZXR1cm4gZmluYWxCeXRlcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFRvU3RyaW5nKCBieXRlcyA6IFVpbnQ4QXJyYXkgKTogc3RyaW5nIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0Zm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgYnl0ZXMubGVuZ3RoOyBpZHgrKykge1xuXHRcdFx0Ly8gYXBwZW5kIHRvIHJlc3VsdFxuXHRcdFx0cmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaWR4XSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQmFzZTY0KHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gYXdhaXQgdGhpcy5lbmNyeXB0VG9CeXRlcyh0ZXh0LCBwYXNzd29yZCk7XG5cblx0XHQvL2NvbnZlcnQgYXJyYXkgdG8gYmFzZTY0XG5cdFx0Y29uc3QgYmFzZTY0VGV4dCA9IGJ0b2EoIHRoaXMuY29udmVydFRvU3RyaW5nKGZpbmFsQnl0ZXMpICk7XG5cblx0XHRyZXR1cm4gYmFzZTY0VGV4dDtcblx0fVxuXG5cdHByaXZhdGUgc3RyaW5nVG9BcnJheShzdHI6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBkZWNyeXB0RnJvbUJ5dGVzKFxuXHRcdGVuY3J5cHRlZEJ5dGVzOiBVaW50OEFycmF5LFxuXHRcdHBhc3N3b3JkOiBzdHJpbmdcblx0KTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRcblx0XHRcdGxldCBvZmZzZXQ6IG51bWJlcjtcblx0XHRcdGxldCBuZXh0T2Zmc2V0IDogbnVtYmVyfHVuZGVmaW5lZDtcblx0XHRcdFxuXHRcdFx0Ly8gZXh0cmFjdCBpdlxuXHRcdFx0b2Zmc2V0ID0gMDtcblx0XHRcdG5leHRPZmZzZXQgPSBvZmZzZXQgKyB0aGlzLnZlY3RvclNpemU7XG5cdFx0XHRjb25zdCB2ZWN0b3IgPSBlbmNyeXB0ZWRCeXRlcy5zbGljZShvZmZzZXQsIG5leHRPZmZzZXQpO1xuXHRcdFx0XG5cdFx0XHQvLyBleHRyYWN0IHNhbHRcblx0XHRcdG9mZnNldCA9IG5leHRPZmZzZXQ7XG5cdFx0XHRuZXh0T2Zmc2V0ID0gb2Zmc2V0ICsgdGhpcy5zYWx0U2l6ZTtcblx0XHRcdGNvbnN0IHNhbHQgPSBlbmNyeXB0ZWRCeXRlcy5zbGljZShvZmZzZXQsIG5leHRPZmZzZXQpO1xuXHRcdFx0XG5cdFx0XHQvLyBleHRyYWN0IGVuY3J5cHRlZCB0ZXh0XG5cdFx0XHRvZmZzZXQgPSBuZXh0T2Zmc2V0O1xuXHRcdFx0bmV4dE9mZnNldCA9IHVuZGVmaW5lZDtcblx0XHRcdGNvbnN0IGVuY3J5cHRlZFRleHRCeXRlcyA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKG9mZnNldCk7XG5cdFx0XHRcblx0XHRcdGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuZGVyaXZlS2V5KHBhc3N3b3JkLCBzYWx0KTtcblx0XHRcdFxuXHRcdFx0Ly8gZGVjcnlwdCBpbnRvIGJ5dGVzXG5cdFx0XHRjb25zdCBkZWNyeXB0ZWRCeXRlcyA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdChcblx0XHRcdFx0LyphbGdvcml0aG0qLyB7XG5cdFx0XHRcdFx0bmFtZTogJ0FFUy1HQ00nLFxuXHRcdFx0XHRcdGl2OiB2ZWN0b3Jcblx0XHRcdFx0fSxcblx0XHRcdFx0LyprZXkqLyBrZXksXG5cdFx0XHRcdC8qZGF0YSovIGVuY3J5cHRlZFRleHRCeXRlc1xuXHRcdFx0KTtcblx0XHRcdFxuXHRcdFx0Ly8gY29udmVydCBieXRlcyB0byB0ZXh0XG5cdFx0XHRjb25zdCB1dGY4RGVjb2Rlclx0PSBuZXcgVGV4dERlY29kZXIoKTtcblx0XHRcdGNvbnN0IGRlY3J5cHRlZFRleHQgPSB1dGY4RGVjb2Rlci5kZWNvZGUoZGVjcnlwdGVkQnl0ZXMpO1xuXHRcdFx0cmV0dXJuIGRlY3J5cHRlZFRleHQ7XG5cdFx0XHRcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGFzeW5jIGRlY3J5cHRGcm9tQmFzZTY0KCBiYXNlNjRFbmNvZGVkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcgKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBieXRlc1RvRGVjb2RlID0gdGhpcy5zdHJpbmdUb0FycmF5KGF0b2IoYmFzZTY0RW5jb2RlZCkpO1xuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuZGVjcnlwdEZyb21CeXRlcyggYnl0ZXNUb0RlY29kZSwgcGFzc3dvcmQgKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cbn0iLCAiZXhwb3J0IGNvbnN0IGFsZ29yaXRobU9ic29sZXRlID0ge1xuXHRuYW1lOiAnQUVTLUdDTScsXG5cdGl2OiBuZXcgVWludDhBcnJheShbMTk2LCAxOTAsIDI0MCwgMTkwLCAxODgsIDc4LCA0MSwgMTMyLCAxNSwgMjIwLCA4NCwgMjExXSksXG5cdHRhZ0xlbmd0aDogMTI4XG59XG5cbmV4cG9ydCBjbGFzcyBDcnlwdG9IZWxwZXJPYnNvbGV0ZSB7XG5cblx0cHJpdmF0ZSBhc3luYyBidWlsZEtleShwYXNzd29yZDogc3RyaW5nKSB7XG5cdFx0Y29uc3QgdXRmOEVuY29kZSA9IG5ldyBUZXh0RW5jb2RlcigpO1xuXHRcdGNvbnN0IHBhc3N3b3JkQnl0ZXMgPSB1dGY4RW5jb2RlLmVuY29kZShwYXNzd29yZCk7XG5cblx0XHRjb25zdCBwYXNzd29yZERpZ2VzdCA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KHsgbmFtZTogJ1NIQS0yNTYnIH0sIHBhc3N3b3JkQnl0ZXMpO1xuXG5cdFx0Y29uc3Qga2V5ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXG5cdFx0XHQncmF3Jyxcblx0XHRcdHBhc3N3b3JkRGlnZXN0LFxuXHRcdFx0YWxnb3JpdGhtT2Jzb2xldGUsXG5cdFx0XHRmYWxzZSxcblx0XHRcdFsnZW5jcnlwdCcsICdkZWNyeXB0J11cblx0XHQpO1xuXG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXHRcblx0LyoqXG4gIFx0KiBAZGVwcmVjYXRlZFxuIFx0Ki9cblx0cHVibGljIGFzeW5jIGVuY3J5cHRUb0Jhc2U2NCh0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuYnVpbGRLZXkocGFzc3dvcmQpO1xuXG5cdFx0Y29uc3QgdXRmOEVuY29kZSA9IG5ldyBUZXh0RW5jb2RlcigpO1xuXHRcdGNvbnN0IGJ5dGVzVG9FbmNyeXB0ID0gdXRmOEVuY29kZS5lbmNvZGUodGV4dCk7XG5cblx0XHQvLyBlbmNyeXB0IGludG8gYnl0ZXNcblx0XHRjb25zdCBlbmNyeXB0ZWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KGF3YWl0IGNyeXB0by5zdWJ0bGUuZW5jcnlwdChcblx0XHRcdGFsZ29yaXRobU9ic29sZXRlLCBrZXksIGJ5dGVzVG9FbmNyeXB0XG5cdFx0KSk7XG5cblx0XHQvL2NvbnZlcnQgYXJyYXkgdG8gYmFzZTY0XG5cdFx0Y29uc3QgYmFzZTY0VGV4dCA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZSguLi5lbmNyeXB0ZWRCeXRlcykpO1xuXG5cdFx0cmV0dXJuIGJhc2U2NFRleHQ7XG5cdH1cblxuXHRwcml2YXRlIHN0cmluZ1RvQXJyYXkoc3RyOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJhc2U2NChiYXNlNjRFbmNvZGVkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIGNvbnZlcnQgYmFzZSA2NCB0byBhcnJheVxuXHRcdFx0Y29uc3QgYnl0ZXNUb0RlY3J5cHQgPSB0aGlzLnN0cmluZ1RvQXJyYXkoYXRvYihiYXNlNjRFbmNvZGVkKSk7XG5cblx0XHRcdGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuYnVpbGRLZXkocGFzc3dvcmQpO1xuXG5cdFx0XHQvLyBkZWNyeXB0IGludG8gYnl0ZXNcblx0XHRcdGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KGFsZ29yaXRobU9ic29sZXRlLCBrZXksIGJ5dGVzVG9EZWNyeXB0LmJ1ZmZlciBhcyBBcnJheUJ1ZmZlcik7XG5cblx0XHRcdC8vIGNvbnZlcnQgYnl0ZXMgdG8gdGV4dFxuXHRcdFx0Y29uc3QgdXRmOERlY29kZSA9IG5ldyBUZXh0RGVjb2RlcigpO1xuXHRcdFx0Y29uc3QgZGVjcnlwdGVkVGV4dCA9IHV0ZjhEZWNvZGUuZGVjb2RlKGRlY3J5cHRlZEJ5dGVzKTtcblx0XHRcdHJldHVybiBkZWNyeXB0ZWRUZXh0O1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIiwgImltcG9ydCB0eXBlIHsgSUNyeXB0b0hlbHBlciB9IGZyb20gJy4vSUNyeXB0b0hlbHBlci50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3J5cHRvRW52ZWxvcGVWMyB7XG5cdHZlcnNpb246ICczLjAnO1xuXHRrZGY6IHsgbmFtZTogJ1BCS0RGMic7IGhhc2g6ICdTSEEtNTEyJzsgaXRlcmF0aW9uczogbnVtYmVyOyBzYWx0OiBzdHJpbmcgfTtcblx0Y2lwaGVyOiB7IG5hbWU6ICdBRVMtR0NNJzsga2V5TGVuZ3RoOiAyNTY7IGl2OiBzdHJpbmc7IHRhZ0xlbmd0aDogMTI4IH07XG5cdGVuY29kZWREYXRhOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBWM19ERUZBVUxUX0lURVJBVElPTlMgPSAyMjAwMDA7XG4vLyBSZWFkZXIgYm91bmRzIGFyZSBmb3JtYXQgcG9saWN5LCBpbmRlcGVuZGVudCBvZiBmdXR1cmUgd3JpdGVyIGRlZmF1bHRzLlxuZXhwb3J0IGNvbnN0IFYzX01JTl9JVEVSQVRJT05TID0gMjIwMDAwO1xuZXhwb3J0IGNvbnN0IFYzX01BWF9JVEVSQVRJT05TID0gMjAwMDAwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUJhc2U2NChieXRlczogVWludDhBcnJheSk6IHN0cmluZyB7XG5cdGxldCBiaW5hcnkgPSAnJztcblx0Zm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgYnl0ZXMubGVuZ3RoOyBvZmZzZXQgKz0gODE5Mikge1xuXHRcdGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmJ5dGVzLnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgODE5MikpO1xuXHR9XG5cdHJldHVybiBidG9hKGJpbmFyeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVCYXNlNjQodmFsdWU6IHVua25vd24pOiBVaW50OEFycmF5IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWUubGVuZ3RoICUgNCAhPT0gMCB8fCAvW15BLVphLXowLTkrLz1dLy50ZXN0KHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2MyBCYXNlNjQnKTtcblx0fVxuXHRjb25zdCBieXRlcyA9IFVpbnQ4QXJyYXkuZnJvbShhdG9iKHZhbHVlKSwgY2hhcmFjdGVyID0+IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApKTtcblx0aWYgKGVuY29kZUJhc2U2NChieXRlcykgIT09IHZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoJ05vbmNhbm9uaWNhbCB2MyBCYXNlNjQnKTtcblx0cmV0dXJuIGJ5dGVzO1xufVxuXG5mdW5jdGlvbiByZWNvcmQodmFsdWU6IHVua25vd24sIGtleXM6IHN0cmluZ1tdKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuXHRpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHZhbHVlKVxuXHRcdHx8IE9iamVjdC5rZXlzKHZhbHVlKS5zb21lKGtleSA9PiAha2V5cy5pbmNsdWRlcyhrZXkpKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2MyBtZXRhZGF0YScpO1xuXHR9XG5cdHJldHVybiB2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVJdGVyYXRpb25zKGl0ZXJhdGlvbnM6IHVua25vd24pOiBhc3NlcnRzIGl0ZXJhdGlvbnMgaXMgbnVtYmVyIHtcblx0aWYgKHR5cGVvZiBpdGVyYXRpb25zICE9PSAnbnVtYmVyJyB8fCAhTnVtYmVyLmlzSW50ZWdlcihpdGVyYXRpb25zKVxuXHRcdHx8IGl0ZXJhdGlvbnMgPCBWM19NSU5fSVRFUkFUSU9OUyB8fCBpdGVyYXRpb25zID4gVjNfTUFYX0lURVJBVElPTlMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHYzIGl0ZXJhdGlvbiBjb3VudCcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhlYWRlcihpdGVyYXRpb25zOiBudW1iZXIsIHNhbHQ6IFVpbnQ4QXJyYXksIGl2OiBVaW50OEFycmF5KTogT21pdDxDcnlwdG9FbnZlbG9wZVYzLCAnZW5jb2RlZERhdGEnPiB7XG5cdHJldHVybiB7XG5cdFx0dmVyc2lvbjogJzMuMCcsXG5cdFx0a2RmOiB7IG5hbWU6ICdQQktERjInLCBoYXNoOiAnU0hBLTUxMicsIGl0ZXJhdGlvbnMsIHNhbHQ6IGVuY29kZUJhc2U2NChzYWx0KSB9LFxuXHRcdGNpcGhlcjogeyBuYW1lOiAnQUVTLUdDTScsIGtleUxlbmd0aDogMjU2LCBpdjogZW5jb2RlQmFzZTY0KGl2KSwgdGFnTGVuZ3RoOiAxMjggfSxcblx0fTtcbn1cblxuLy8gUmVjb25zdHJ1Y3QgYSBjYW5vbmljYWwgaGVhZGVyIHNvIGlucHV0IEpTT04gcHJvcGVydHkgb3JkZXIgY2Fubm90IGNoYW5nZSBBQUQuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbnZlbG9wZVYzKHZhbHVlOiB1bmtub3duKTogQ3J5cHRvRW52ZWxvcGVWMyB7XG5cdGNvbnN0IGRhdGEgPSByZWNvcmQodmFsdWUsIFsndmVyc2lvbicsICdoaW50JywgJ2tkZicsICdjaXBoZXInLCAnZW5jb2RlZERhdGEnXSk7XG5cdGNvbnN0IGtkZiA9IHJlY29yZChkYXRhLmtkZiwgWyduYW1lJywgJ2hhc2gnLCAnaXRlcmF0aW9ucycsICdzYWx0J10pO1xuXHRjb25zdCBjaXBoZXIgPSByZWNvcmQoZGF0YS5jaXBoZXIsIFsnbmFtZScsICdrZXlMZW5ndGgnLCAnaXYnLCAndGFnTGVuZ3RoJ10pO1xuXHRpZiAoZGF0YS52ZXJzaW9uICE9PSAnMy4wJyB8fCBrZGYubmFtZSAhPT0gJ1BCS0RGMicgfHwga2RmLmhhc2ggIT09ICdTSEEtNTEyJ1xuXHRcdHx8IGNpcGhlci5uYW1lICE9PSAnQUVTLUdDTScgfHwgY2lwaGVyLmtleUxlbmd0aCAhPT0gMjU2IHx8IGNpcGhlci50YWdMZW5ndGggIT09IDEyOFxuXHRcdHx8ICgnaGludCcgaW4gZGF0YSAmJiB0eXBlb2YgZGF0YS5oaW50ICE9PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHYzIGNyeXB0byBzdWl0ZScpO1xuXHR9XG5cdHZhbGlkYXRlSXRlcmF0aW9ucyhrZGYuaXRlcmF0aW9ucyk7XG5cdGNvbnN0IHNhbHQgPSBkZWNvZGVCYXNlNjQoa2RmLnNhbHQpO1xuXHRjb25zdCBpdiA9IGRlY29kZUJhc2U2NChjaXBoZXIuaXYpO1xuXHRjb25zdCBjaXBoZXJ0ZXh0ID0gZGVjb2RlQmFzZTY0KGRhdGEuZW5jb2RlZERhdGEpO1xuXHRpZiAoc2FsdC5sZW5ndGggIT09IDE2IHx8IGl2Lmxlbmd0aCAhPT0gMTIgfHwgY2lwaGVydGV4dC5sZW5ndGggPCAxNikge1xuXHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2MyBwYXlsb2FkIGxlbmd0aHMnKTtcblx0fVxuXHRyZXR1cm4geyAuLi5oZWFkZXIoa2RmLml0ZXJhdGlvbnMsIHNhbHQsIGl2KSwgZW5jb2RlZERhdGE6IGVuY29kZUJhc2U2NChjaXBoZXJ0ZXh0KSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlSW5saW5lVjModmFsdWU6IENyeXB0b0VudmVsb3BlVjMpOiBzdHJpbmcge1xuXHRjb25zdCBlbnZlbG9wZSA9IHZhbGlkYXRlRW52ZWxvcGVWMyh2YWx1ZSk7XG5cdGNvbnN0IGNpcGhlcnRleHQgPSBkZWNvZGVCYXNlNjQoZW52ZWxvcGUuZW5jb2RlZERhdGEpO1xuXHRjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KDMyICsgY2lwaGVydGV4dC5sZW5ndGgpO1xuXHQvLyBTdWl0ZSAxIGlzIHBlcm1hbmVudGx5IFBCS0RGMi1TSEE1MTIgLyBBRVMtMjU2LUdDTSwgc2FsdDE2IC8gSVYxMiAvIHRhZzE2LlxuXHRieXRlc1swXSA9IDE7XG5cdGNvbnN0IGl0ZXJhdGlvbnMgPSBlbnZlbG9wZS5rZGYuaXRlcmF0aW9ucztcblx0Ynl0ZXNbMV0gPSBpdGVyYXRpb25zID4+PiAxNjtcblx0Ynl0ZXNbMl0gPSBpdGVyYXRpb25zID4+PiA4O1xuXHRieXRlc1szXSA9IGl0ZXJhdGlvbnM7XG5cdGJ5dGVzLnNldChkZWNvZGVCYXNlNjQoZW52ZWxvcGUua2RmLnNhbHQpLCA0KTtcblx0Ynl0ZXMuc2V0KGRlY29kZUJhc2U2NChlbnZlbG9wZS5jaXBoZXIuaXYpLCAyMCk7XG5cdGJ5dGVzLnNldChjaXBoZXJ0ZXh0LCAzMik7XG5cdHJldHVybiBlbmNvZGVCYXNlNjQoYnl0ZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSW5saW5lVjMoZW5jb2RlZDogc3RyaW5nKTogQ3J5cHRvRW52ZWxvcGVWMyB7XG5cdGNvbnN0IGJ5dGVzID0gZGVjb2RlQmFzZTY0KGVuY29kZWQpO1xuXHRpZiAoYnl0ZXMubGVuZ3RoIDwgNDggfHwgYnl0ZXNbMF0gIT09IDEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2MyBpbmxpbmUgaGVhZGVyJyk7XG5cdGNvbnN0IGl0ZXJhdGlvbnMgPSBieXRlc1sxXSAqIDY1NTM2ICsgYnl0ZXNbMl0gKiAyNTYgKyBieXRlc1szXTtcblx0dmFsaWRhdGVJdGVyYXRpb25zKGl0ZXJhdGlvbnMpO1xuXHRyZXR1cm4ge1xuXHRcdC4uLmhlYWRlcihpdGVyYXRpb25zLCBieXRlcy5zbGljZSg0LCAyMCksIGJ5dGVzLnNsaWNlKDIwLCAzMikpLFxuXHRcdGVuY29kZWREYXRhOiBlbmNvZGVCYXNlNjQoYnl0ZXMuc2xpY2UoMzIpKSxcblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkaXRpb25hbERhdGEoZW52ZWxvcGU6IENyeXB0b0VudmVsb3BlVjMpOiBVaW50OEFycmF5IHtcblx0Y29uc3QgeyB2ZXJzaW9uLCBrZGYsIGNpcGhlciB9ID0gZW52ZWxvcGU7XG5cdHJldHVybiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uLCBrZGYsIGNpcGhlciB9KSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlcml2ZUtleShwYXNzd29yZDogc3RyaW5nLCBlbnZlbG9wZTogQ3J5cHRvRW52ZWxvcGVWMyk6IFByb21pc2U8Q3J5cHRvS2V5PiB7XG5cdGNvbnN0IG1hdGVyaWFsID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoJ3JhdycsIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwYXNzd29yZCksICdQQktERjInLCBmYWxzZSwgWydkZXJpdmVLZXknXSk7XG5cdHJldHVybiBjcnlwdG8uc3VidGxlLmRlcml2ZUtleSh7XG5cdFx0bmFtZTogJ1BCS0RGMicsIGhhc2g6IGVudmVsb3BlLmtkZi5oYXNoLFxuXHRcdHNhbHQ6IGRlY29kZUJhc2U2NChlbnZlbG9wZS5rZGYuc2FsdCkuYnVmZmVyIGFzIEFycmF5QnVmZmVyLFxuXHRcdGl0ZXJhdGlvbnM6IGVudmVsb3BlLmtkZi5pdGVyYXRpb25zLFxuXHR9LCBtYXRlcmlhbCwgeyBuYW1lOiAnQUVTLUdDTScsIGxlbmd0aDogZW52ZWxvcGUuY2lwaGVyLmtleUxlbmd0aCB9LCBmYWxzZSwgWydlbmNyeXB0JywgJ2RlY3J5cHQnXSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDcnlwdG9IZWxwZXJWMyBpbXBsZW1lbnRzIElDcnlwdG9IZWxwZXIge1xuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdEVudmVsb3BlKHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8Q3J5cHRvRW52ZWxvcGVWMz4ge1xuXHRcdGNvbnN0IG1ldGFkYXRhID0gaGVhZGVyKFYzX0RFRkFVTFRfSVRFUkFUSU9OUywgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxNikpLCBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEyKSkpO1xuXHRcdGNvbnN0IGVudmVsb3BlID0geyAuLi5tZXRhZGF0YSwgZW5jb2RlZERhdGE6ICcnIH07XG5cdFx0Y29uc3Qga2V5ID0gYXdhaXQgZGVyaXZlS2V5KHBhc3N3b3JkLCBlbnZlbG9wZSk7XG5cdFx0Y29uc3QgY2lwaGVydGV4dCA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZW5jcnlwdCh7XG5cdFx0XHRuYW1lOiAnQUVTLUdDTScsIGl2OiBkZWNvZGVCYXNlNjQobWV0YWRhdGEuY2lwaGVyLml2KS5idWZmZXIgYXMgQXJyYXlCdWZmZXIsXG5cdFx0XHR0YWdMZW5ndGg6IDEyOCwgYWRkaXRpb25hbERhdGE6IGFkZGl0aW9uYWxEYXRhKGVudmVsb3BlKS5idWZmZXIgYXMgQXJyYXlCdWZmZXIsXG5cdFx0fSwga2V5LCBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUodGV4dCkpO1xuXHRcdHJldHVybiB7IC4uLm1ldGFkYXRhLCBlbmNvZGVkRGF0YTogZW5jb2RlQmFzZTY0KG5ldyBVaW50OEFycmF5KGNpcGhlcnRleHQpKSB9O1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGRlY3J5cHRFbnZlbG9wZSh2YWx1ZTogdW5rbm93biwgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBlbnZlbG9wZSA9IHZhbGlkYXRlRW52ZWxvcGVWMyh2YWx1ZSk7XG5cdFx0XHRjb25zdCBrZXkgPSBhd2FpdCBkZXJpdmVLZXkocGFzc3dvcmQsIGVudmVsb3BlKTtcblx0XHRcdGNvbnN0IHBsYWludGV4dCA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7XG5cdFx0XHRcdG5hbWU6ICdBRVMtR0NNJywgaXY6IGRlY29kZUJhc2U2NChlbnZlbG9wZS5jaXBoZXIuaXYpLmJ1ZmZlciBhcyBBcnJheUJ1ZmZlcixcblx0XHRcdFx0dGFnTGVuZ3RoOiAxMjgsIGFkZGl0aW9uYWxEYXRhOiBhZGRpdGlvbmFsRGF0YShlbnZlbG9wZSkuYnVmZmVyIGFzIEFycmF5QnVmZmVyLFxuXHRcdFx0fSwga2V5LCBkZWNvZGVCYXNlNjQoZW52ZWxvcGUuZW5jb2RlZERhdGEpLmJ1ZmZlciBhcyBBcnJheUJ1ZmZlcik7XG5cdFx0XHRyZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHBsYWludGV4dCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQmFzZTY0KHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIGVuY29kZUlubGluZVYzKGF3YWl0IHRoaXMuZW5jcnlwdEVudmVsb3BlKHRleHQsIHBhc3N3b3JkKSk7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEZyb21CYXNlNjQoZW5jb2RlZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBhd2FpdCB0aGlzLmRlY3J5cHRFbnZlbG9wZShkZWNvZGVJbmxpbmVWMyhlbmNvZGVkKSwgcGFzc3dvcmQpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG59XG4iLCAiaW1wb3J0IHsgRmlsZURhdGEgfSBmcm9tIFwiLi9GaWxlRGF0YUhlbHBlci50c1wiO1xuaW1wb3J0IHsgRGVjcnlwdGFibGUgfSBmcm9tIFwiLi4vZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvRGVjcnlwdGFibGUudHNcIjtcbmltcG9ydCB7IENyeXB0b0hlbHBlciB9IGZyb20gXCIuL0NyeXB0b0hlbHBlci50c1wiO1xuaW1wb3J0IHsgSUNyeXB0b0hlbHBlciB9IGZyb20gXCIuL0lDcnlwdG9IZWxwZXIudHNcIjtcbmltcG9ydCB7IENyeXB0b0hlbHBlcjIzMDQgfSBmcm9tIFwiLi9DcnlwdG9IZWxwZXIyMzA0LnRzXCI7XG5pbXBvcnQgeyBDcnlwdG9IZWxwZXJPYnNvbGV0ZSB9IGZyb20gXCIuL0NyeXB0b0hlbHBlck9ic29sZXRlLnRzXCI7XG5cbmltcG9ydCB7IENyeXB0b0hlbHBlclYzIH0gZnJvbSAnLi9DcnlwdG9IZWxwZXJWMy50cyc7XG5cbmV4cG9ydCBjbGFzcyBDcnlwdG9IZWxwZXJGYWN0b3J5e1xuXG5cdHB1YmxpYyBzdGF0aWMgY3J5cHRvSGVscGVyMjMwNF92MiA9IG5ldyBDcnlwdG9IZWxwZXIyMzA0KCAxNiwgMTYsIDIxMDAwMCApO1xuXHQvLyBQQktERjItSE1BQy1TSEE1MTIgdXNlcyBhIDIyMCwwMDAtaXRlcmF0aW9uIHdvcmsgZmFjdG9yIChPV0FTUCkuXG5cdC8vIFYzIHN0b3JlcyBpdHMgcGFyYW1ldGVycyBpbiBhbiBhdXRoZW50aWNhdGVkIGVudmVsb3BlLlxuXHRwdWJsaWMgc3RhdGljIGNyeXB0b0hlbHBlcl92MyA9IG5ldyBDcnlwdG9IZWxwZXJWMygpO1xuXG5cdHB1YmxpYyBzdGF0aWMgQnVpbGREZWZhdWx0KCk6IENyeXB0b0hlbHBlclYze1xuXHRcdHJldHVybiB0aGlzLmNyeXB0b0hlbHBlcl92Mztcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgQnVpbGRGcm9tRmlsZURhdGFPclRocm93KCBkYXRhOiBGaWxlRGF0YSApIDogSUNyeXB0b0hlbHBlciB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yTnVsbChkYXRhKTtcblx0XHRpZiAoIHJlc3VsdCAhPSBudWxsICl7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBVbmFibGUgdG8gZGV0ZXJtaW5lIElDcnlwdG9IZWxwZXIgZm9yIEZpbGUgdmVyICR7ZGF0YS52ZXJzaW9ufWApO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21GaWxlRGF0YU9yTnVsbCggZGF0YTogRmlsZURhdGEgKSA6IElDcnlwdG9IZWxwZXIgfCBudWxsIHtcblx0XHRpZiAoIGRhdGEudmVyc2lvbiA9PSAnMS4wJyApe1xuXHRcdFx0cmV0dXJuIG5ldyBDcnlwdG9IZWxwZXIoKTtcblx0XHR9XG5cblx0XHQvLyBub3RlXHRcdFx0XHR2Mi4wXHRDcnlwdG9IZWxwZXIyMzA0XG5cdFx0aWYgKCBkYXRhLnZlcnNpb24gPT0gJzIuMCcgKXtcblx0XHRcdHJldHVybiB0aGlzLmNyeXB0b0hlbHBlcjIzMDRfdjI7XG5cdFx0fVxuXG5cdFx0Ly8gbm90ZSB2My4wOiBhdXRoZW50aWNhdGVkLCBzZWxmLWRlc2NyaWJpbmcgZW52ZWxvcGVcblx0XHRpZiAoIGRhdGEudmVyc2lvbiA9PSAnMy4wJyApe1xuXHRcdFx0cmV0dXJuIHRoaXMuY3J5cHRvSGVscGVyX3YzO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21EZWNyeXB0YWJsZU9yVGhyb3coIGRlY3J5cHRhYmxlOiBEZWNyeXB0YWJsZSApIDogSUNyeXB0b0hlbHBlciB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21EZWNyeXB0YWJsZU9yTnVsbCggZGVjcnlwdGFibGUgKTtcblxuXHRcdGlmIChyZXN1bHQgIT0gbnVsbCl7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBVbmFibGUgdG8gZGV0ZXJtaW5lIElDcnlwdG9IZWxwZXIgZm9yIERlY3J5cHRhYmxlIHZlciAke2RlY3J5cHRhYmxlLnZlcnNpb24udG9TdHJpbmcoKX1gKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgQnVpbGRGcm9tRGVjcnlwdGFibGVPck51bGwoIGRlY3J5cHRhYmxlOiBEZWNyeXB0YWJsZSApIDogSUNyeXB0b0hlbHBlciB8IG51bGwge1xuXHRcdC8vIFZlcnNpb25zXG5cdFx0Ly8gaW5wbGFjZSBvcmlnaW5hbFx0X1BSRUZJWF9PQlNPTEVURSA9ICclJVx1RDgzRFx1REQxMCAnICBDcnlwdG9IZWxwZXJPYnNvbGV0ZVxuXHRcdFxuXHRcdC8vIGlucGxhY2UgYWxwaGFcdF9QUkVGSVhfQSA9ICclJVx1RDgzRFx1REQxMFx1MDNCMSAnXHRcdENyeXB0b0hlbHBlclxuXHRcdC8vIFx0XHRcdFx0XHRfUFJFRklYX0FfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjEgJ1x0Q3J5cHRvSGVscGVyXG5cblx0XHQvLyBpbnBsYWNlIGJldGEgXHRfUFJFRklYX0IgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjIgJ1x0XHRDcnlwdG9IZWxwZXIyMzA0KCAxNiwgMTYsIDIxMDAwMCApXG5cdFx0Ly9cdFx0XHRcdFx0X1BSRUZJWF9CX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwXHUwM0IyICdcdENyeXB0b0hlbHBlcjIzMDQoIDE2LCAxNiwgMjEwMDAwIClcblx0XHRcblx0XHQvLyBpbnBsYWNlIGdhbW1hOiBjb21wYWN0IHN1aXRlL2l0ZXJhdGlvbnMvc2FsdC9JVi9jaXBoZXJ0ZXh0IGVudmVsb3BlXG5cdFx0Ly8gQm90aCBoaWRkZW4gYW5kIHZpc2libGUgZ2FtbWEgbWFya2VycyB1c2UgQ3J5cHRvSGVscGVyVjMuXG5cblx0XHRpZiAoIGRlY3J5cHRhYmxlLnZlcnNpb24gPT0gMCApe1xuXHRcdFx0cmV0dXJuIG5ldyBDcnlwdG9IZWxwZXJPYnNvbGV0ZSgpO1xuXHRcdH1cblxuXHRcdGlmICggZGVjcnlwdGFibGUudmVyc2lvbiA9PSAxICl7XG5cdFx0XHRyZXR1cm4gbmV3IENyeXB0b0hlbHBlcigpO1xuXHRcdH1cblxuXHRcdGlmICggZGVjcnlwdGFibGUudmVyc2lvbiA9PSAyICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcnlwdG9IZWxwZXIyMzA0X3YyO1xuXHRcdH1cblxuXHRcdGlmICggZGVjcnlwdGFibGUudmVyc2lvbiA9PSAzICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcnlwdG9IZWxwZXJfdjM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxufVxuIiwgImltcG9ydCB7IENyeXB0b0hlbHBlckZhY3RvcnkgfSBmcm9tIFwiLi9DcnlwdG9IZWxwZXJGYWN0b3J5LnRzXCI7XG5cbmltcG9ydCB7IHZhbGlkYXRlRW52ZWxvcGVWMyB9IGZyb20gJy4vQ3J5cHRvSGVscGVyVjMudHMnO1xuaW1wb3J0IHR5cGUgeyBDcnlwdG9FbnZlbG9wZVYzIH0gZnJvbSAnLi9DcnlwdG9IZWxwZXJWMy50cyc7XG5cbmNvbnN0IGJsYW5rRmlsZSA9IFN5bWJvbCgnYmxhbmstZmlsZScpO1xuXG5leHBvcnQgY2xhc3MgRmlsZURhdGEge1xuXHRcblx0cHVibGljIHZlcnNpb24gPSAnMS4wJztcblx0cHVibGljIGhpbnQ6IHN0cmluZztcblx0cHVibGljIGVuY29kZWREYXRhOnN0cmluZztcblx0cHVibGljIGtkZj86IENyeXB0b0VudmVsb3BlVjNbJ2tkZiddO1xuXHRwdWJsaWMgY2lwaGVyPzogQ3J5cHRvRW52ZWxvcGVWM1snY2lwaGVyJ107XG5cdHB1YmxpYyBbYmxhbmtGaWxlXT86IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoIHZlcnNpb246c3RyaW5nLCBoaW50OnN0cmluZywgZW5jb2RlZERhdGE6c3RyaW5nICl7XG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcblx0XHR0aGlzLmhpbnQgPSBoaW50O1xuXHRcdHRoaXMuZW5jb2RlZERhdGEgPSBlbmNvZGVkRGF0YTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZURhdGFIZWxwZXJ7XG5cblx0cHVibGljIHN0YXRpYyBERUZBVUxUX1ZFUlNJT04gPSAnMy4wJztcblxuXHRwdWJsaWMgc3RhdGljIGFzeW5jIGVuY3J5cHQoIHBhc3M6IHN0cmluZywgaGludDpzdHJpbmcsIHRleHQ6c3RyaW5nICkgOiBQcm9taXNlPEZpbGVEYXRhPntcblx0XHRjb25zdCBjcnlwdG8gPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRGVmYXVsdCgpO1xuXHRcdGNvbnN0IGVudmVsb3BlID0gYXdhaXQgY3J5cHRvLmVuY3J5cHRFbnZlbG9wZSh0ZXh0LCBwYXNzKTtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRmlsZURhdGEoZW52ZWxvcGUudmVyc2lvbiwgaGludCwgZW52ZWxvcGUuZW5jb2RlZERhdGEpLCB7IGtkZjogZW52ZWxvcGUua2RmLCBjaXBoZXI6IGVudmVsb3BlLmNpcGhlciB9KTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVjcnlwdCggZGF0YTogRmlsZURhdGEsIHBhc3M6c3RyaW5nICkgOiBQcm9taXNlPHN0cmluZ3xudWxsPntcblx0XHRpZiAoZGF0YVtibGFua0ZpbGVdKSByZXR1cm4gJyc7XG5cdFx0aWYgKGRhdGEudmVyc2lvbiA9PT0gJzMuMCcpIHtcblx0XHRcdHJldHVybiBhd2FpdCBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRGVmYXVsdCgpLmRlY3J5cHRFbnZlbG9wZShkYXRhLCBwYXNzKTtcblx0XHR9XG5cdFx0aWYgKCBkYXRhLmVuY29kZWREYXRhID09ICcnICl7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGNvbnN0IGNyeXB0byA9IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGRGcm9tRmlsZURhdGFPclRocm93KCBkYXRhICk7XG5cdFx0cmV0dXJuIGF3YWl0IGNyeXB0by5kZWNyeXB0RnJvbUJhc2U2NCggZGF0YS5lbmNvZGVkRGF0YSwgcGFzcyApO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBKc29uRmlsZUVuY29kaW5nIHtcblxuXHRwdWJsaWMgc3RhdGljIGVuY29kZSggZGF0YTogRmlsZURhdGEgKSA6IHN0cmluZ3tcblx0XHQvL2NvbnNvbGUuZGVidWcoICdKc29uRmlsZUVuY29kaW5nLmVuY29kZScsIHtkYXRhfSApO1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgaXNFbmNvZGVkKCB0ZXh0OiBzdHJpbmcgKSA6IGJvb2xlYW4ge1xuXHRcdHRyeSB7XG5cdFx0XHRKU09OLnBhcnNlKCB0ZXh0ICk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCBlcnJvciApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZGVjb2RlKCBlbmNvZGVkVGV4dDpzdHJpbmcgKSA6IEZpbGVEYXRhIHtcblx0XHQvL2NvbnNvbGUuZGVidWcoJ0pzb25GaWxlRW5jb2RpbmcuZGVjb2RlJyx7ZW5jb2RlZFRleHR9KTtcblx0XHRpZiAoIGVuY29kZWRUZXh0ID09PSAnJyApe1xuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEZpbGVEYXRhKEZpbGVEYXRhSGVscGVyLkRFRkFVTFRfVkVSU0lPTiwgJycsICcnKSwgeyBbYmxhbmtGaWxlXTogdHJ1ZSB9KTtcblx0XHR9XG5cdFx0Y29uc3QgcGFyc2VkOiB1bmtub3duID0gSlNPTi5wYXJzZSggZW5jb2RlZFRleHQgKTtcblx0XHRpZiAoIHBhcnNlZCA9PT0gbnVsbCB8fCB0eXBlb2YgcGFyc2VkICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHBhcnNlZCkgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRmlsZURhdGEgSlNPTicpO1xuXHRcdH1cblx0XHRjb25zdCBkYXRhID0gcGFyc2VkIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXHRcdGlmIChcblx0XHRcdHR5cGVvZiBkYXRhLnZlcnNpb24gIT09ICdzdHJpbmcnXG5cdFx0XHR8fCB0eXBlb2YgZGF0YS5oaW50ICE9PSAnc3RyaW5nJ1xuXHRcdFx0fHwgdHlwZW9mIGRhdGEuZW5jb2RlZERhdGEgIT09ICdzdHJpbmcnXG5cdFx0KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRmlsZURhdGEgSlNPTicpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS52ZXJzaW9uID09PSAnMy4wJykge1xuXHRcdFx0Y29uc3QgZW52ZWxvcGUgPSB2YWxpZGF0ZUVudmVsb3BlVjMoZGF0YSk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRmlsZURhdGEoZW52ZWxvcGUudmVyc2lvbiwgZGF0YS5oaW50LCBlbnZlbG9wZS5lbmNvZGVkRGF0YSksIHsga2RmOiBlbnZlbG9wZS5rZGYsIGNpcGhlcjogZW52ZWxvcGUuY2lwaGVyIH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEZpbGVEYXRhKCBkYXRhLnZlcnNpb24sIGRhdGEuaGludCwgZGF0YS5lbmNvZGVkRGF0YSApO1xuXHR9XG59XG4iLCAiY29uc3QgRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX0VOQ1JZUFRFRCA9ICdlbmNyeXB0ZWQnO1xuY29uc3QgRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX01ERU5DID0gJ21kZW5jJztcblxuZXhwb3J0IGNvbnN0IEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTl9ERUZBVUxUID0gRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX01ERU5DO1xuXG5cbmV4cG9ydCBjb25zdCBFTkNSWVBURURfRklMRV9FWFRFTlNJT05TID0gW1xuXHRFTkNSWVBURURfRklMRV9FWFRFTlNJT05fTURFTkMsXG5cdEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTl9FTkNSWVBURURcbl07IiwgIlxuZXhwb3J0IGNvbnN0IEVOQ1JZUFRFRF9JQ09OID0gJ1x1RDgzRFx1REQxMCc7XG5leHBvcnQgY29uc3QgX1BSRUZJWF9DID0gJyUlXHVEODNEXHVERDEwXHUwM0IzICc7XG5leHBvcnQgY29uc3QgX1BSRUZJWF9DX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwXHUwM0IzICc7XG5leHBvcnQgY29uc3QgX1BSRUZJWF9CID0gJyUlXHVEODNEXHVERDEwXHUwM0IyICc7XG5leHBvcnQgY29uc3QgX1BSRUZJWF9CX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwXHUwM0IyICc7XG5cbmV4cG9ydCBjb25zdCBfUFJFRklYX0EgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjEgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0FfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjEgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX09CU09MRVRFID0gJyUlXHVEODNEXHVERDEwICc7XG5leHBvcnQgY29uc3QgX1BSRUZJWF9PQlNPTEVURV9WSVNJQkxFID0gJ1x1RDgzRFx1REQxMCAnO1xuXG5leHBvcnQgY29uc3QgX1BSRUZJWF9FTkNPREVfREVGQVVMVCA9IF9QUkVGSVhfQztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0VOQ09ERV9ERUZBVUxUX1ZJU0lCTEUgPSBfUFJFRklYX0NfVklTSUJMRTtcblxuLy8gU2hvdWxkIGJlIGxpc3RlZCBieSBldmFsdWF0aW9uIHByaW9yaXR5XG5leHBvcnQgY29uc3QgX1BSRUZJWEVTID0gW1xuXHRfUFJFRklYX0MsXG5cdF9QUkVGSVhfQ19WSVNJQkxFLFxuXHRfUFJFRklYX0IsXG5cdF9QUkVGSVhfQl9WSVNJQkxFLFxuXHRfUFJFRklYX0EsXG5cdF9QUkVGSVhfQV9WSVNJQkxFLFxuXHRfUFJFRklYX09CU09MRVRFLFxuXHRfUFJFRklYX09CU09MRVRFX1ZJU0lCTEVcbl07XG5cbmV4cG9ydCBjb25zdCBfU1VGRklYX1dJVEhfQ09NTUVOVCA9ICcgXHVEODNEXHVERDEwJSUnO1xuZXhwb3J0IGNvbnN0IF9TVUZGSVhfTk9fQ09NTUVOVCA9ICcgXHVEODNEXHVERDEwJztcblxuLy8gU2hvdWxkIGJlIGxpc3RlZCBieSBldmFsdWF0aW9uIHByaW9yaXR5XG5leHBvcnQgY29uc3QgX1NVRkZJWEVTID0gW1xuXHRfU1VGRklYX1dJVEhfQ09NTUVOVCxcblx0X1NVRkZJWF9OT19DT01NRU5UXG5dXG5cbmV4cG9ydCBjb25zdCBfSElOVCA9ICdcdUQ4M0RcdURDQTEnO1xuIiwgImV4cG9ydCBjbGFzcyBEZWNyeXB0YWJsZXtcblx0dmVyc2lvbjogbnVtYmVyO1xuXHRiYXNlNjRDaXBoZXJUZXh0OnN0cmluZztcblx0aGludDpzdHJpbmc7XG5cdHNob3dJblJlYWRpbmdWaWV3OiBib29sZWFuO1xufSIsICJpbXBvcnQgeyBEZWNyeXB0YWJsZSB9IGZyb20gXCIuL0RlY3J5cHRhYmxlLnRzXCI7XG5pbXBvcnQgeyBfSElOVCwgX1BSRUZJWEVTLCBfUFJFRklYX0EsIF9QUkVGSVhfQV9WSVNJQkxFLCBfUFJFRklYX0IsIF9QUkVGSVhfQl9WSVNJQkxFLCBfUFJFRklYX0MsIF9QUkVGSVhfQ19WSVNJQkxFLCBfUFJFRklYX09CU09MRVRFLCBfUFJFRklYX09CU09MRVRFX1ZJU0lCTEUsIF9TVUZGSVhFUyB9IGZyb20gXCIuL0ZlYXR1cmVJbnBsYWNlQ29uc3RhbnRzLnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpc3tcblx0cHJvY2Vzc2VkVGV4dDpzdHJpbmc7XG5cdGlzRW1wdHk6IGJvb2xlYW47XG5cdFxuXHRwcmVmaXg6IHN0cmluZztcblx0c3VmZml4OiBzdHJpbmc7XG5cblx0aGFzT2Jzb2xldGVFbmNyeXB0ZWRQcmVmaXg6IGJvb2xlYW47XG5cdGhhc0VuY3J5cHRlZFByZWZpeDogYm9vbGVhbjtcblx0aGFzRW5jcnlwdGVkU3VmZml4OiBib29sZWFuO1xuXHRjYW5EZWNyeXB0OiBib29sZWFuO1xuXHRjYW5FbmNyeXB0OiBib29sZWFuO1xuXHRjb250YWluc0VuY3J5cHRlZE1hcmtlcnM6IGJvb2xlYW47XG5cdGRlY3J5cHRhYmxlPyA6IERlY3J5cHRhYmxlO1xuXG5cdGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZyl7XG5cdFx0dGhpcy5wcm9jZXNzKHRleHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBwcm9jZXNzKCB0ZXh0OiBzdHJpbmcgKSA6IHZvaWR7XG5cdFx0XG5cdFx0dGhpcy5wcm9jZXNzZWRUZXh0ID0gdGV4dDtcblxuXHRcdHRoaXMuaXNFbXB0eSA9IHRleHQubGVuZ3RoID09PSAwO1xuXG5cdFx0dGhpcy5wcmVmaXggPSBfUFJFRklYRVMuZmluZCggKHByZWZpeCkgPT4gdGV4dC5zdGFydHNXaXRoKHByZWZpeCkgKSA/PyAnJztcblx0XHR0aGlzLnN1ZmZpeCA9IF9TVUZGSVhFUy5maW5kKCAoc3VmZml4KSA9PiB0ZXh0LmVuZHNXaXRoKHN1ZmZpeCkgKSA/PyAnJztcblx0XHRcblx0XHR0aGlzLmhhc0VuY3J5cHRlZFByZWZpeCA9IHRoaXMucHJlZml4Lmxlbmd0aCA+IDA7XG5cdFx0dGhpcy5oYXNFbmNyeXB0ZWRTdWZmaXggPSB0aGlzLnN1ZmZpeC5sZW5ndGggPiAwO1xuXG5cdFx0dGhpcy5oYXNPYnNvbGV0ZUVuY3J5cHRlZFByZWZpeCA9IHRoaXMucHJlZml4ID09PSBfUFJFRklYX09CU09MRVRFIHx8IHRoaXMucHJlZml4ID09PSBfUFJFRklYX09CU09MRVRFX1ZJU0lCTEU7XG5cblx0XHR0aGlzLmNvbnRhaW5zRW5jcnlwdGVkTWFya2VycyA9IFsuLi5fUFJFRklYRVMsIC4uLl9TVUZGSVhFU10uc29tZSggKG1hcmtlcikgPT4gdGV4dC5pbmNsdWRlcyhtYXJrZXIgKSk7XG5cblx0XHR0aGlzLmNhbkRlY3J5cHQgPSB0aGlzLmhhc0VuY3J5cHRlZFByZWZpeCAmJiB0aGlzLmhhc0VuY3J5cHRlZFN1ZmZpeDtcblx0XHR0aGlzLmNhbkVuY3J5cHQgPSAhdGhpcy5oYXNFbmNyeXB0ZWRQcmVmaXggJiYgIXRoaXMuY29udGFpbnNFbmNyeXB0ZWRNYXJrZXJzO1xuXHRcdFxuXHRcdGlmICh0aGlzLmNhbkRlY3J5cHQpe1xuXHRcdFx0Y29uc3QgZGVjcnlwdGFibGUgPSB0aGlzLnBhcnNlRGVjcnlwdGFibGVDb250ZW50KHRleHQpO1xuXG5cdFx0XHRpZiAoIGRlY3J5cHRhYmxlICE9IG51bGwgKXtcblx0XHRcdFx0dGhpcy5kZWNyeXB0YWJsZSA9IGRlY3J5cHRhYmxlO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuY2FuRGVjcnlwdCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcGFyc2VEZWNyeXB0YWJsZUNvbnRlbnQodGV4dDogc3RyaW5nKSA6IERlY3J5cHRhYmxlIHwgbnVsbCB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IERlY3J5cHRhYmxlKCk7XG5cblx0XHRpZiAoXG5cdFx0XHQhdGhpcy5oYXNFbmNyeXB0ZWRQcmVmaXhcblx0XHRcdHx8ICF0aGlzLmhhc0VuY3J5cHRlZFN1ZmZpeFxuXHRcdCl7XG5cdFx0XHRyZXR1cm4gbnVsbDsgLy8gaW52YWxpZCBmb3JtYXRcblx0XHR9XG5cdFx0XG5cdFx0aWYgKCB0aGlzLmhhc09ic29sZXRlRW5jcnlwdGVkUHJlZml4ICl7XG5cdFx0XHRyZXN1bHQudmVyc2lvbiA9IDA7XG5cdFx0fWVsc2UgaWYgKCB0aGlzLnByZWZpeCA9PSBfUFJFRklYX0MgfHwgdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9DX1ZJU0lCTEUgKXtcblx0XHRcdHJlc3VsdC52ZXJzaW9uID0gMztcblx0XHR9ZWxzZSBpZiAoIHRoaXMucHJlZml4ID09IF9QUkVGSVhfQiB8fCB0aGlzLnByZWZpeCA9PSBfUFJFRklYX0JfVklTSUJMRSApe1xuXHRcdFx0cmVzdWx0LnZlcnNpb24gPSAyO1xuXHRcdH1lbHNlIGlmICggdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9BIHx8IHRoaXMucHJlZml4ID09IF9QUkVGSVhfQV9WSVNJQkxFICl7XG5cdFx0XHRyZXN1bHQudmVyc2lvbiA9IDE7XG5cdFx0fVxuXG5cdFx0Ly8gcmVtb3ZlIG1hcmtlcnMgZnJvbSBzdGFydCBhbmQgZW5kXHRcblx0XHRjb25zdCBjb250ZW50ID0gdGV4dC5zdWJzdHJpbmcodGhpcy5wcmVmaXgubGVuZ3RoLCB0ZXh0Lmxlbmd0aCAtIHRoaXMuc3VmZml4Lmxlbmd0aCk7XG5cblx0XHRpZiAoIFsuLi5fUFJFRklYRVMsIC4uLl9TVUZGSVhFU10uc29tZSggKG1hcmtlcikgPT4gY29udGVudC5pbmNsdWRlcyggbWFya2VyICkpICl7XG5cdFx0XHQvLyBjb250ZW50LCBpdHNlbGYgaGFzIG1hcmtlcnNcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGlzIGEgaGludFxuXHRcdGlmIChjb250ZW50LnN1YnN0cmluZygwLF9ISU5ULmxlbmd0aCkgPT0gX0hJTlQpe1xuXHRcdFx0Y29uc3QgZW5kSGludE1hcmtlciA9IGNvbnRlbnQuaW5kZXhPZihfSElOVCxfSElOVC5sZW5ndGgpO1xuXHRcdFx0aWYgKGVuZEhpbnRNYXJrZXI8MCl7XG5cdFx0XHRcdHJldHVybiBudWxsOyAvLyBpbnZhbGlkIGZvcm1hdFxuXHRcdFx0fVxuXHRcdFx0cmVzdWx0LmhpbnQgPSBjb250ZW50LnN1YnN0cmluZyhfSElOVC5sZW5ndGgsZW5kSGludE1hcmtlcilcblx0XHRcdHJlc3VsdC5iYXNlNjRDaXBoZXJUZXh0ID0gY29udGVudC5zdWJzdHJpbmcoZW5kSGludE1hcmtlcitfSElOVC5sZW5ndGgpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmVzdWx0LmJhc2U2NENpcGhlclRleHQgPSBjb250ZW50O1xuXHRcdH1cblx0XHRyZXN1bHQuc2hvd0luUmVhZGluZ1ZpZXcgPSAhdGhpcy5wcmVmaXguaW5jbHVkZXMoXCIlJVwiKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxXQUFPLFVBQVUsTUFBTTtBQUV0QixhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUE7Ozs7OztBQ0VBLFdBQUEsVUFBUyxTQUFTQSxlQUFjLFVBQVk7QUFBWixVQUFBLGFBQUEsUUFBQTtBQUFBLG1CQUFBO01BQVk7QUFDMUMsVUFBSSxZQUFZLE1BQU0saUJBQWlCO0FBQ3JDLGNBQU0sSUFBSSxVQUFVLHFHQUFxRyxXQUFXLHVDQUF1QyxNQUFNLGtCQUFrQixHQUFHOztBQUd4TSxVQUFNLHVCQUF1QixNQUFNO0FBQ25DLFlBQU0sb0JBQW9CLFNBQUMsR0FBR0MsUUFBSztBQUFNLGVBQUFBO01BQUE7QUFDekMsVUFBTSxRQUFRLElBQUksTUFBSyxFQUFHO0FBQzFCLFlBQU0sb0JBQW9CO0FBRzFCLFVBQUksVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVO0FBSS9DLGVBQU8sTUFBTSxRQUFRLElBQUssTUFBTSxRQUFRLEVBQVUsWUFBVyxJQUFLOztJQUV0RTs7Ozs7QUNwQkEsU0FBUyxnQkFBZ0IsbUJBQW1COzs7QUNENUMsSUFBTSxRQUFRO0FBQUEsRUFDVixPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQ1o7QUFDQSxJQUFNLE1BQU07QUFDWixJQUFNLFFBQVE7QUFDZCxJQUFNLFNBQVM7QUFDZixJQUFNLE9B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LFNBQU8sTUFBTSxPQUNULE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLEtBQUssT0FBUSxLQUFLLE9BQ2xCLEtBQUssT0FBUSxLQUFLLE9BQ2xCLEtBQUssT0FBUSxLQUFLLE9BQ2xCLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixLQUFLLE9BQVEsS0FBSyxPQUNsQixNQUFNLE9BQ04sS0FBSyxPQUFRLEtBQUssT0FDbEIsTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixLQUFLLE9BQVEsS0FBSyxPQUNsQixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixLQUFLLE9BQVMsS0FBSyxPQUNuQixNQUFNLE9BQ04sS0FBSyxPQUFTLEtBQUssT0FDbkIsTUFBTSxPQUNOLEtBQUssT0FBUyxLQUFLLE9BQ25CLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLEtBQUssT0FBUyxLQUFLLE9BQ25CLE1BQU0sT0FDTixNQUFNLE9BQ04sS0FBSyxPQUFTLEtBQUssT0FDbkIsTUFBTSxPQUNOLE1BQU0sT0FDTixLQUFLLE9BQVMsS0FBSyxPQUNuQixLQUFLLE9BQVMsS0FBSyxPQUNuQixLQUFLLE9BQVMsS0FBSyxPQUNuQixLQUFLLE9BQVMsS0FBSyxPQUNuQixLQUFLLE9BQVMsS0FBSyxPQUNuQixNQUFNLFFBQ04sS0FBSyxRQUFTLEtBQUssUUFDbkIsTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxTQUNOLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLE1BQU0sU0FDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFdBQ3JCLEtBQUssV0FBWSxLQUFLO0FBQzNCO0FBRUEsU0FBUyxZQUFZLEdBQUc7QUFDdkIsU0FBTyxNQUFNLFNBQ1QsS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUs7QUFDekI7QUFFQSxTQUFTLE9BQU8sR0FBRztBQUNsQixTQUFPLEtBQUssUUFBVSxLQUFLLFFBQ3ZCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sU0FDTixNQUFNLFNBQ04sTUFBTSxTQUNOLEtBQUssU0FBVSxLQUFLLFNBQ3BCLE1BQU0sU0FDTixLQUFLLFNBQVUsS0FBSyxTQUNwQixNQUFNLFNBQ04sTUFBTSxTQUNOLE1BQU0sU0FDTixNQUFNLFNBQ04sTUFBTSxTQUNOLE1BQU0sU0FDTixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVcsS0FBSyxTQUNyQixNQUFNLFNBQ04sTUFBTSxTQUNOLEtBQUssU0FBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sTUFBTSxVQUNOLE1BQU0sVUFDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxL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QUNkLEtBQUssRUFDTCxLQUFNLElBQUssRUFDWCxRQUFRO0FBQUEsRUFDTCxDQUFDLFdBQVcsb0dBQW9HO0FBQUEsRUFDaEgsQ0FBQywrQkFBK0Isb0VBQW9FO0FBQUEsRUFDcEcsQ0FBQyx5REFBeUQsc0NBQXNDO0FBQ2xHLENBQUMsRUFDRixNQUFNOyIsCiAgIm5hbWVzIjogWyJnZXRDYWxsZXJGaWxlIiwgInN0YWNrIiwgIl9hIiwgImVtb2ppUmVnZXgiLCAiY29kZSIsICJyZXNvbHZlIiwgIkRlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5IiwgIm1peGluIiwgImtleSIsICJhcmdzIiwgInZhbHVlIiwgInZhbCIsICJhcmd2IiwgImVudiIsICJhbGlhc2VzIiwgImRlZmF1bHRzIiwgImd1ZXNzVHlwZSIsICJyZXF1aXJlIiwgInJlc29sdmUiLCAicGF0aCIsICJkaXJuYW1lIiwgInJlc29sdmUiLCAicmVhZEZpbGVTeW5jIiwgInN0YXRTeW5jIiwgImZvcm1hdCIsICJyZXNvbHZlIiwgInkxOG4iLCAieTE4biIsICJjcmVhdGVSZXF1aXJlIiwgInJlYWRGaWxlU3luYyIsICJyZWFkZGlyU3luYyIsICJyZXF1aXJlIiwgImRpcm5hbWUiLCAicmVzb2x2ZSIsICJnZXRDYWxsZXJGaWxlIiwgInNoaW0iLCAiY21kIiwgInJlc3VsdCIsICJ1c2FnZSIsICJ2YWxpZGF0aW9uIiwgInNoaW0iLCAiY29tbWFuZCIsICJjIiwgInNoaW0iLCAiZmFpbCIsICJjb21tYW5kIiwgInVpIiwgInVzYWdlIiwgInNlcCIsICJtYXhXaWR0aCIsICJ1c2FnZSIsICJjb21tYW5kIiwgInNoaW0iLCAiX2EiLCAiX2IiLCAiX2MiLCAiZGVzYyIsICJhcmd2IiwgInVzYWdlIiwgInNoaW0iLCAiX2EiLCAia2V5IiwgInNoaW0iLCAic2hpbSIsICJfYSIsICJyZXNvbHZlIiwgInR5cGUiLCAia2V5IiwgInZhbHVlIiwgIl9iIiwgIl9jIiwgInZhbGlkYXRpb24iLCAiayIsICJjb21wbGV0aW9uIiwgInZlY3RvclNpemUiLCAiaXRlcmF0aW9ucyIsICJzYWx0IiwgInV0ZjhFbmNvZGVyIiwgInV0ZjhEZWNvZGVyIiwgIml0ZXJhdGlvbnMiLCAic2FsdCIsICJjcnlwdG8iLCAiZm9ybWF0Il0KfQo=
