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

// src/services/Base64.ts
function bytesToBase64(bytes) {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 8192) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
  }
  return btoa(binary);
}
function base64ToBytes(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

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
  async encryptToBase64(text, password) {
    const finalBytes = await this.encryptToBytes(text, password);
    return bytesToBase64(finalBytes);
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
      const bytesToDecode = base64ToBytes(base64Encoded);
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
  async encryptToBase64(text, password) {
    const finalBytes = await this.encryptToBytes(text, password);
    return bytesToBase64(finalBytes);
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
      const bytesToDecode = base64ToBytes(base64Encoded);
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
    return bytesToBase64(encryptedBytes);
  }
  async decryptFromBase64(base64Encoded, password) {
    try {
      const bytesToDecrypt = base64ToBytes(base64Encoded);
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
function decodeBase64(value) {
  if (typeof value !== "string" || value.length % 4 !== 0 || /[^A-Za-z0-9+/=]/.test(value)) {
    throw new Error("Invalid v3 Base64");
  }
  const bytes = base64ToBytes(value);
  if (bytesToBase64(bytes) !== value) throw new Error("Noncanonical v3 Base64");
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
    kdf: { name: "PBKDF2", hash: "SHA-512", iterations: iterations2, salt: bytesToBase64(salt2) },
    cipher: { name: "AES-GCM", keyLength: 256, iv: bytesToBase64(iv), tagLength: 128 }
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
  return { ...header(kdf.iterations, salt2, iv), encodedData: bytesToBase64(ciphertext) };
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
  return bytesToBase64(bytes);
}
function decodeInlineV3(encoded) {
  const bytes = decodeBase64(encoded);
  if (bytes.length < 48 || bytes[0] !== 1) throw new Error("Invalid v3 inline header");
  const iterations2 = bytes[1] * 65536 + bytes[2] * 256 + bytes[3];
  validateIterations(iterations2);
  return {
    ...header(iterations2, bytes.slice(4, 20), bytes.slice(20, 32)),
    encodedData: bytesToBase64(bytes.slice(32))
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
    return { ...metadata, encodedData: bytesToBase64(new Uint8Array(ciphertext)) };
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
async function tryPasswords(passwords, decrypt) {
  for (const [index, password] of passwords.entries()) {
    const plaintext = await decrypt(password);
    if (plaintext !== null) {
      return { plaintext, passwordNumber: index + 1 };
    }
  }
  return null;
}
function* scanInlineBlocks(content) {
  let lineOffset = 0;
  for (const [lineIndex, line] of content.split("\n").entries()) {
    const matcher = /%%🔐(.*?)🔐%%|🔐(.*?)🔐/g;
    for (const match of line.matchAll(matcher)) {
      const start = lineOffset + match.index;
      yield {
        start,
        end: start + match[0].length,
        line: lineIndex + 1,
        // Keep diagnostics at the lock icon, including for hidden blocks.
        position: match.index + (match[1] !== void 0 ? 2 : 0) + 1,
        encryptedText: `\u{1F510}${match[1] ?? match[2]}\u{1F510}`
      };
    }
    lineOffset += line.length + 1;
  }
}
async function* decryptInlineBlocks(content, passwords) {
  for (const block of scanInlineBlocks(content)) {
    const analysis = new FeatureInplaceTextAnalysis(block.encryptedText);
    if (!analysis.canDecrypt || analysis.decryptable == null) {
      yield { ...block, success: false, error: "cannot decrypt" };
      continue;
    }
    const decryptable = analysis.decryptable;
    const helper = CryptoHelperFactory.BuildFromDecryptableOrNull(decryptable);
    if (helper == null) {
      yield { ...block, success: false, error: "unknown format" };
      continue;
    }
    const match = await tryPasswords(passwords, (password) => helper.decryptFromBase64(decryptable.base64CipherText, password));
    if (match == null) {
      yield { ...block, success: false, error: "unable to decrypt" };
    } else {
      yield { ...block, success: true, match };
    }
  }
}
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
    for await (const result of decryptInlineBlocks(listing.content, passwords)) {
      const message = result.success ? `password #${result.match.passwordNumber}` : result.error;
      yield {
        listing,
        success: result.success,
        message: `line ${result.line}, pos ${result.position}, ${message}`
      };
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
    const match = await tryPasswords(passwords, (password) => FileDataHelper.decrypt(fileData, password));
    if (match != null) {
      return {
        listing,
        success: true,
        message: `password #${match.passwordNumber}`
      };
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
    const content = listing.content;
    const parts = [];
    let offset = 0;
    for await (const result of decryptInlineBlocks(content, passwords)) {
      if (!result.success) {
        return {
          listing,
          success: false,
          message: `ERROR: Line ${result.line}, pos ${result.position}, ${result.error}`,
          outFile: void 0
        };
      }
      parts.push(content.slice(offset, result.start), result.match.plaintext);
      offset = result.end;
    }
    parts.push(content.slice(offset));
    const outFile = path.join(outdir, listing.relativePath);
    if (!dryrun) {
      const outFileDir = path.dirname(outFile);
      if (!fs.existsSync(outFileDir)) {
        fs.mkdirSync(outFileDir, { recursive: true });
      }
      fs.writeFileSync(outFile, parts.join(""));
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
    const match = await tryPasswords(passwords, (password) => FileDataHelper.decrypt(fileData, password));
    if (match != null) {
      if (!dryrun) {
        fs.writeFileSync(outFile, match.plaintext);
      }
      return {
        listing,
        success: true,
        message: `Decrypted`,
        outFile
      };
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2Vtb2ppLXJlZ2V4L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9nZXQtY2FsbGVyLWZpbGUvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2xpYi9wbGF0Zm9ybS1zaGltcy9lc20ubWpzIiwgIi4uL25vZGVfbW9kdWxlcy9jbGl1aS9idWlsZC9saWIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Fuc2ktcmVnZXgvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2dldC1lYXN0LWFzaWFuLXdpZHRoL2xvb2t1cC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZ2V0LWVhc3QtYXNpYW4td2lkdGgvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3JhcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXN0eWxlcy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3JhcC1hbnNpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9jbGl1aS9pbmRleC5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL2VzY2FsYWRlL3N5bmMvaW5kZXgubWpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL3N0cmluZy11dGlscy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi90b2tlbml6ZS1hcmctc3RyaW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL3lhcmdzLXBhcnNlci10eXBlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi95YXJncy1wYXJzZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9wcm9jZXNzLWFyZ3YuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3kxOG4vYnVpbGQvbGliL3BsYXRmb3JtLXNoaW1zL25vZGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3kxOG4vYnVpbGQvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95MThuL2luZGV4Lm1qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvaXMtcHJvbWlzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3llcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3BhcnNlLWNvbW1hbmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi9hcmdzZXJ0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvbWlkZGxld2FyZS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2NvbW1hbmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9vYmotZmlsdGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvc2V0LWJsb2NraW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXNhZ2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi9jb21wbGV0aW9uLXRlbXBsYXRlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2NvbXBsZXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9sZXZlbnNodGVpbi5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3ZhbGlkYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9hcHBseS1leHRlbmRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIveWFyZ3MtZmFjdG9yeS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvaW5kZXgubWpzIiwgIi4uL3NyYy90b29scy9tZGVuYy50cyIsICIuLi9zcmMvc2VydmljZXMvQmFzZTY0LnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9DcnlwdG9IZWxwZXIudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0NyeXB0b0hlbHBlcjIzMDQudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0NyeXB0b0hlbHBlck9ic29sZXRlLnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9DcnlwdG9IZWxwZXJWMy50cyIsICIuLi9zcmMvc2VydmljZXMvQ3J5cHRvSGVscGVyRmFjdG9yeS50cyIsICIuLi9zcmMvc2VydmljZXMvRmlsZURhdGFIZWxwZXIudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0NvbnN0YW50cy50cyIsICIuLi9zcmMvZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvRmVhdHVyZUlucGxhY2VDb25zdGFudHMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2ZlYXR1cmUtaW5wbGFjZS1lbmNyeXB0L0RlY3J5cHRhYmxlLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9mZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG5cdC8vIGh0dHBzOi8vbXRocy5iZS9lbW9qaVxuXHRyZXR1cm4gL1sjKjAtOV1cXHVGRTBGP1xcdTIwRTN8W1xceEE5XFx4QUVcXHUyMDNDXFx1MjA0OVxcdTIxMjJcXHUyMTM5XFx1MjE5NC1cXHUyMTk5XFx1MjFBOVxcdTIxQUFcXHUyMzFBXFx1MjMxQlxcdTIzMjhcXHUyM0NGXFx1MjNFRC1cXHUyM0VGXFx1MjNGMVxcdTIzRjJcXHUyM0Y4LVxcdTIzRkFcXHUyNEMyXFx1MjVBQVxcdTI1QUJcXHUyNUI2XFx1MjVDMFxcdTI1RkJcXHUyNUZDXFx1MjVGRVxcdTI2MDAtXFx1MjYwNFxcdTI2MEVcXHUyNjExXFx1MjYxNFxcdTI2MTVcXHUyNjE4XFx1MjYyMFxcdTI2MjJcXHUyNjIzXFx1MjYyNlxcdTI2MkFcXHUyNjJFXFx1MjYyRlxcdTI2MzgtXFx1MjYzQVxcdTI2NDBcXHUyNjQyXFx1MjY0OC1cXHUyNjUzXFx1MjY1RlxcdTI2NjBcXHUyNjYzXFx1MjY2NVxcdTI2NjZcXHUyNjY4XFx1MjY3QlxcdTI2N0VcXHUyNjdGXFx1MjY5MlxcdTI2OTQtXFx1MjY5N1xcdTI2OTlcXHUyNjlCXFx1MjY5Q1xcdTI2QTBcXHUyNkE3XFx1MjZBQVxcdTI2QjBcXHUyNkIxXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDOFxcdTI2Q0ZcXHUyNkQxXFx1MjZFOVxcdTI2RjAtXFx1MjZGNVxcdTI2RjdcXHUyNkY4XFx1MjZGQVxcdTI3MDJcXHUyNzA4XFx1MjcwOVxcdTI3MEZcXHUyNzEyXFx1MjcxNFxcdTI3MTZcXHUyNzFEXFx1MjcyMVxcdTI3MzNcXHUyNzM0XFx1Mjc0NFxcdTI3NDdcXHUyNzU3XFx1Mjc2M1xcdTI3QTFcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTJCMUJcXHUyQjFDXFx1MkI1NVxcdTMwMzBcXHUzMDNEXFx1MzI5N1xcdTMyOTldXFx1RkUwRj98W1xcdTI2MURcXHUyNzBDXFx1MjcwRF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/fFtcXHUyNzBBXFx1MjcwQl0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1MjNFOS1cXHUyM0VDXFx1MjNGMFxcdTIzRjNcXHUyNUZEXFx1MjY5M1xcdTI2QTFcXHUyNkFCXFx1MjZDNVxcdTI2Q0VcXHUyNkQ0XFx1MjZFQVxcdTI2RkRcXHUyNzA1XFx1MjcyOFxcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc5NS1cXHUyNzk3XFx1MjdCMFxcdTI3QkZcXHUyQjUwXXxcXHUyNkQzXFx1RkUwRj8oPzpcXHUyMDBEXFx1RDgzRFxcdURDQTUpP3xcXHUyNkY5KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHUyNzY0XFx1RkUwRj8oPzpcXHUyMDBEKD86XFx1RDgzRFxcdUREMjV8XFx1RDgzRVxcdURFNzkpKT98XFx1RDgzQyg/OltcXHVEQzA0XFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdURFMDJcXHVERTM3XFx1REYyMVxcdURGMjQtXFx1REYyQ1xcdURGMzZcXHVERjdEXFx1REY5NlxcdURGOTdcXHVERjk5LVxcdURGOUJcXHVERjlFXFx1REY5RlxcdURGQ0RcXHVERkNFXFx1REZENC1cXHVERkRGXFx1REZGNVxcdURGRjddXFx1RkUwRj98W1xcdURGODVcXHVERkMyXFx1REZDN10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REZDNFxcdURGQ0FdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdURGQ0JcXHVERkNDXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVGRTBGKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdURDQ0ZcXHVERDhFXFx1REQ5MS1cXHVERDlBXFx1REUwMVxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTM2XFx1REUzOC1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjBcXHVERjJELVxcdURGMzVcXHVERjM3LVxcdURGNDNcXHVERjQ1LVxcdURGNEFcXHVERjRDLVxcdURGN0NcXHVERjdFLVxcdURGODRcXHVERjg2LVxcdURGOTNcXHVERkEwLVxcdURGQzFcXHVERkM1XFx1REZDNlxcdURGQzhcXHVERkM5XFx1REZDRi1cXHVERkQzXFx1REZFMC1cXHVERkYwXFx1REZGOC1cXHVERkZGXXxcXHVEREU2XFx1RDgzQ1tcXHVEREU4LVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjJcXHVEREY0XFx1RERGNi1cXHVEREZBXFx1RERGQ1xcdURERkRcXHVEREZGXXxcXHVEREU3XFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRlxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRVxcdURERkZdfFxcdURERThcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRVxcdURERjAtXFx1RERGN1xcdURERkEtXFx1RERGRl18XFx1RERFOVxcdUQ4M0NbXFx1RERFQVxcdURERUNcXHVEREVGXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGRl18XFx1RERFQVxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERURcXHVEREY3LVxcdURERkFdfFxcdURERUJcXHVEODNDW1xcdURERUUtXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGN118XFx1RERFQ1xcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUVcXHVEREYxLVxcdURERjNcXHVEREY1LVxcdURERkFcXHVEREZDXFx1RERGRV18XFx1RERFRFxcdUQ4M0NbXFx1RERGMFxcdURERjJcXHVEREYzXFx1RERGN1xcdURERjlcXHVEREZBXXxcXHVEREVFXFx1RDgzQ1tcXHVEREU4LVxcdURERUFcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjldfFxcdURERUZcXHVEODNDW1xcdURERUFcXHVEREYyXFx1RERGNFxcdURERjVdfFxcdURERjBcXHVEODNDW1xcdURERUFcXHVEREVDLVxcdURERUVcXHVEREYyXFx1RERGM1xcdURERjVcXHVEREY3XFx1RERGQ1xcdURERkVcXHVEREZGXXxcXHVEREYxXFx1RDgzQ1tcXHVEREU2LVxcdURERThcXHVEREVFXFx1RERGMFxcdURERjctXFx1RERGQlxcdURERkVdfFxcdURERjJcXHVEODNDW1xcdURERTZcXHVEREU4LVxcdURERURcXHVEREYwLVxcdURERkZdfFxcdURERjNcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQS1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREY0XFx1RERGNVxcdURERjdcXHVEREZBXFx1RERGRl18XFx1RERGNFxcdUQ4M0NcXHVEREYyfFxcdURERjVcXHVEODNDW1xcdURERTZcXHVEREVBLVxcdURERURcXHVEREYwLVxcdURERjNcXHVEREY3LVxcdURERjlcXHVEREZDXFx1RERGRV18XFx1RERGNlxcdUQ4M0NcXHVEREU2fFxcdURERjdcXHVEODNDW1xcdURERUFcXHVEREY0XFx1RERGOFxcdURERkFcXHVEREZDXXxcXHVEREY4XFx1RDgzQ1tcXHVEREU2LVxcdURERUFcXHVEREVDLVxcdURERjRcXHVEREY3LVxcdURERjlcXHVEREZCXFx1RERGRC1cXHVEREZGXXxcXHVEREY5XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERURcXHVEREVGLVxcdURERjRcXHVEREY3XFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRl18XFx1RERGQVxcdUQ4M0NbXFx1RERFNlxcdURERUNcXHVEREYyXFx1RERGM1xcdURERjhcXHVEREZFXFx1RERGRl18XFx1RERGQlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERUVcXHVEREYzXFx1RERGQV18XFx1RERGQ1xcdUQ4M0NbXFx1RERFQlxcdURERjhdfFxcdURERkRcXHVEODNDXFx1RERGMHxcXHVEREZFXFx1RDgzQ1tcXHVEREVBXFx1RERGOV18XFx1RERGRlxcdUQ4M0NbXFx1RERFNlxcdURERjJcXHVEREZDXXxcXHVERjQ0KD86XFx1MjAwRFxcdUQ4M0RcXHVERkVCKT98XFx1REY0Qig/OlxcdTIwMERcXHVEODNEXFx1REZFOSk/fFxcdURGQzMoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMEQoPzpbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98XFx1MjdBMVxcdUZFMEY/KSk/fFxcdURGRjNcXHVGRTBGPyg/OlxcdTIwMEQoPzpcXHUyNkE3XFx1RkUwRj98XFx1RDgzQ1xcdURGMDgpKT98XFx1REZGNCg/OlxcdTIwMERcXHUyNjIwXFx1RkUwRj98XFx1REI0MFxcdURDNjdcXHVEQjQwXFx1REM2MlxcdURCNDAoPzpcXHVEQzY1XFx1REI0MFxcdURDNkVcXHVEQjQwXFx1REM2N3xcXHVEQzczXFx1REI0MFxcdURDNjNcXHVEQjQwXFx1REM3NHxcXHVEQzc3XFx1REI0MFxcdURDNkNcXHVEQjQwXFx1REM3MylcXHVEQjQwXFx1REM3Rik/KXxcXHVEODNEKD86W1xcdURDM0ZcXHVEQ0ZEXFx1REQ0OVxcdURENEFcXHVERDZGXFx1REQ3MFxcdURENzNcXHVERDc2LVxcdURENzlcXHVERDg3XFx1REQ4QS1cXHVERDhEXFx1RERBNVxcdUREQThcXHVEREIxXFx1RERCMlxcdUREQkNcXHVEREMyLVxcdUREQzRcXHVEREQxLVxcdURERDNcXHVERERDLVxcdUREREVcXHVEREUxXFx1RERFM1xcdURERThcXHVEREVGXFx1RERGM1xcdURERkFcXHVERUNCXFx1REVDRC1cXHVERUNGXFx1REVFMC1cXHVERUU1XFx1REVFOVxcdURFRjBcXHVERUYzXVxcdUZFMEY/fFtcXHVEQzQyXFx1REM0M1xcdURDNDYtXFx1REM1MFxcdURDNjZcXHVEQzY3XFx1REM2Qi1cXHVEQzZEXFx1REM3MlxcdURDNzQtXFx1REM3NlxcdURDNzhcXHVEQzdDXFx1REM4M1xcdURDODVcXHVEQzhGXFx1REM5MVxcdURDQUFcXHVERDdBXFx1REQ5NVxcdUREOTZcXHVERTRDXFx1REU0RlxcdURFQzBcXHVERUNDXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHVEQzZFXFx1REM3MFxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNFxcdURFQjVdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdURENzRcXHVERDkwXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVGRTBGKT98W1xcdURDMDAtXFx1REMwN1xcdURDMDktXFx1REMxNFxcdURDMTYtXFx1REMyNVxcdURDMjctXFx1REMzQVxcdURDM0MtXFx1REMzRVxcdURDNDBcXHVEQzQ0XFx1REM0NVxcdURDNTEtXFx1REM2NVxcdURDNkFcXHVEQzc5LVxcdURDN0JcXHVEQzdELVxcdURDODBcXHVEQzg0XFx1REM4OC1cXHVEQzhFXFx1REM5MFxcdURDOTItXFx1RENBOVxcdURDQUItXFx1RENGQ1xcdURDRkYtXFx1REQzRFxcdURENEItXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdUREQTRcXHVEREZCLVxcdURFMkRcXHVERTJGLVxcdURFMzRcXHVERTM3LVxcdURFNDFcXHVERTQzXFx1REU0NFxcdURFNDgtXFx1REU0QVxcdURFODAtXFx1REVBMlxcdURFQTQtXFx1REVCM1xcdURFQjctXFx1REVCRlxcdURFQzEtXFx1REVDNVxcdURFRDAtXFx1REVEMlxcdURFRDUtXFx1REVEN1xcdURFREMtXFx1REVERlxcdURFRUJcXHVERUVDXFx1REVGNC1cXHVERUZDXFx1REZFMC1cXHVERkVCXFx1REZGMF18XFx1REMwOCg/OlxcdTIwMERcXHUyQjFCKT98XFx1REMxNSg/OlxcdTIwMERcXHVEODNFXFx1RERCQSk/fFxcdURDMjYoPzpcXHUyMDBEKD86XFx1MkIxQnxcXHVEODNEXFx1REQyNSkpP3xcXHVEQzNCKD86XFx1MjAwRFxcdTI3NDRcXHVGRTBGPyk/fFxcdURDNDFcXHVGRTBGPyg/OlxcdTIwMERcXHVEODNEXFx1RERFOFxcdUZFMEY/KT98XFx1REM2OCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4fFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldXFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KXxbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM10pKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXSkpKT98XFx1REZGQyg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSkpKT98XFx1REZGRig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSkpKT8pKT98XFx1REM2OSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9bXFx1REM2OFxcdURDNjldfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/fFxcdURDNjlcXHUyMDBEXFx1RDgzRCg/OlxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT8pKXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM10pKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSkpKT98XFx1REZGRCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKSkpPykpP3xcXHVEQzZGKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFxcdURENzUoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFxcdURFMkUoPzpcXHUyMDBEXFx1RDgzRFxcdURDQTgpP3xcXHVERTM1KD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0FCKT98XFx1REUzNig/OlxcdTIwMERcXHVEODNDXFx1REYyQlxcdUZFMEY/KT98XFx1REU0Mig/OlxcdTIwMERbXFx1MjE5NFxcdTIxOTVdXFx1RkUwRj8pP3xcXHVERUI2KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpPyl8XFx1RDgzRSg/OltcXHVERDBDXFx1REQwRlxcdUREMTgtXFx1REQxRlxcdUREMzAtXFx1REQzNFxcdUREMzZcXHVERDc3XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMlxcdURERDNcXHVEREQ1XFx1REVDMy1cXHVERUM1XFx1REVGMFxcdURFRjItXFx1REVGOF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REQyNlxcdUREMzVcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRFxcdUREQ0ZcXHVEREQ0XFx1RERENi1cXHVEREREXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERERFXFx1RERERl0oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdUREMERcXHVERDBFXFx1REQxMC1cXHVERDE3XFx1REQyMC1cXHVERDI1XFx1REQyNy1cXHVERDJGXFx1REQzQVxcdUREM0YtXFx1REQ0NVxcdURENDctXFx1REQ3NlxcdURENzgtXFx1RERCNFxcdUREQjdcXHVEREJBXFx1RERCQy1cXHVERENDXFx1REREMFxcdURERTAtXFx1RERGRlxcdURFNzAtXFx1REU3Q1xcdURFODAtXFx1REU4OVxcdURFOEYtXFx1REVDMlxcdURFQzZcXHVERUNFLVxcdURFRENcXHVERURGLVxcdURFRTldfFxcdUREM0MoPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/fFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFxcdUREQ0UoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMEQoPzpbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98XFx1MjdBMVxcdUZFMEY/KSk/fFxcdURERDEoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdURERDFcXHUyMDBEXFx1RDgzRVxcdURERDIoPzpcXHUyMDBEXFx1RDgzRVxcdURERDIpP3xcXHVEREQyKD86XFx1MjAwRFxcdUQ4M0VcXHVEREQyKT8pKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpPykpP3xcXHVERUYxKD86XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pP3xcXHVERkZDKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSk/fFxcdURGRkQoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKT98XFx1REZGRSg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pP3xcXHVERkZGKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKT8pKT8pL2c7XG59O1xuIiwgbnVsbCwgIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyBub3RTdHJpY3RFcXVhbCwgc3RyaWN0RXF1YWwgfSBmcm9tICdhc3NlcnQnXG5pbXBvcnQgY2xpdWkgZnJvbSAnY2xpdWknXG5pbXBvcnQgZXNjYWxhZGUgZnJvbSAnZXNjYWxhZGUvc3luYydcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgUGFyc2VyIGZyb20gJ3lhcmdzLXBhcnNlcidcbmltcG9ydCB7IGJhc2VuYW1lLCBkaXJuYW1lLCBleHRuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBnZXRQcm9jZXNzQXJndkJpbiB9IGZyb20gJy4uLy4uL2J1aWxkL2xpYi91dGlscy9wcm9jZXNzLWFyZ3YuanMnXG5pbXBvcnQgc3RyaW5nV2lkdGggZnJvbSAnc3RyaW5nLXdpZHRoJztcbmltcG9ydCB5MThuIGZyb20gJ3kxOG4nXG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnO1xuaW1wb3J0IGdldENhbGxlckZpbGUgZnJvbSAnZ2V0LWNhbGxlci1maWxlJztcbmltcG9ydCB7IHJlYWRGaWxlU3luYywgcmVhZGRpclN5bmMgfSBmcm9tICdub2RlOmZzJ1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBtYWluRmlsZW5hbWUgPSBfX2Rpcm5hbWUuc3Vic3RyaW5nKDAsIF9fZGlybmFtZS5sYXN0SW5kZXhPZignbm9kZV9tb2R1bGVzJykpO1xuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3NlcnQ6IHtcbiAgICBub3RTdHJpY3RFcXVhbCxcbiAgICBzdHJpY3RFcXVhbFxuICB9LFxuICBjbGl1aSxcbiAgZmluZFVwOiBlc2NhbGFkZSxcbiAgZ2V0RW52OiAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52W2tleV1cbiAgfSxcbiAgaW5zcGVjdCxcbiAgZ2V0UHJvY2Vzc0FyZ3ZCaW4sXG4gIG1haW5GaWxlbmFtZTogbWFpbkZpbGVuYW1lIHx8IHByb2Nlc3MuY3dkKCksXG4gIFBhcnNlcixcbiAgcGF0aDoge1xuICAgIGJhc2VuYW1lLFxuICAgIGRpcm5hbWUsXG4gICAgZXh0bmFtZSxcbiAgICByZWxhdGl2ZSxcbiAgICByZXNvbHZlLFxuICAgIGpvaW5cbiAgfSxcbiAgcHJvY2Vzczoge1xuICAgIGFyZ3Y6ICgpID0+IHByb2Nlc3MuYXJndixcbiAgICBjd2Q6IHByb2Nlc3MuY3dkLFxuICAgIGVtaXRXYXJuaW5nOiAod2FybmluZywgdHlwZSkgPT4gcHJvY2Vzcy5lbWl0V2FybmluZyh3YXJuaW5nLCB0eXBlKSxcbiAgICBleGVjUGF0aDogKCkgPT4gcHJvY2Vzcy5leGVjUGF0aCxcbiAgICBleGl0OiAoY29kZSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG4vbm8tcHJvY2Vzcy1leGl0XG4gICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgfSxcbiAgICBuZXh0VGljazogcHJvY2Vzcy5uZXh0VGljayxcbiAgICBzdGRDb2x1bW5zOiB0eXBlb2YgcHJvY2Vzcy5zdGRvdXQuY29sdW1ucyAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9jZXNzLnN0ZG91dC5jb2x1bW5zIDogbnVsbFxuICB9LFxuICByZWFkRmlsZVN5bmMsXG4gIHJlYWRkaXJTeW5jLFxuICByZXF1aXJlLFxuICBnZXRDYWxsZXJGaWxlOiAoKSA9PiB7XG4gICAgY29uc3QgY2FsbGVyRmlsZSA9IGdldENhbGxlckZpbGUoMyk7XG4gICAgcmV0dXJuIGNhbGxlckZpbGUubWF0Y2goL15maWxlOlxcL1xcLy8pID8gZmlsZVVSTFRvUGF0aChjYWxsZXJGaWxlKSA6IGNhbGxlckZpbGU7XG4gIH0sXG4gIHN0cmluZ1dpZHRoLFxuICB5MThuOiB5MThuKHtcbiAgICBkaXJlY3Rvcnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vbG9jYWxlcycpLFxuICAgIHVwZGF0ZUZpbGVzOiBmYWxzZVxuICB9KVxufVxuIiwgIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFsaWduID0ge1xuICAgIHJpZ2h0OiBhbGlnblJpZ2h0LFxuICAgIGNlbnRlcjogYWxpZ25DZW50ZXJcbn07XG5jb25zdCB0b3AgPSAwO1xuY29uc3QgcmlnaHQgPSAxO1xuY29uc3QgYm90dG9tID0gMjtcbmNvbnN0IGxlZnQgPSAzO1xuZXhwb3J0IGNsYXNzIFVJIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdHMud2lkdGg7XG4gICAgICAgIHRoaXMud3JhcCA9IChfYSA9IG9wdHMud3JhcCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgfVxuICAgIHNwYW4oLi4uYXJncykge1xuICAgICAgICBjb25zdCBjb2xzID0gdGhpcy5kaXYoLi4uYXJncyk7XG4gICAgICAgIGNvbHMuc3BhbiA9IHRydWU7XG4gICAgfVxuICAgIHJlc2V0T3V0cHV0KCkge1xuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcbiAgICB9XG4gICAgZGl2KC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpdignJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud3JhcCAmJiB0aGlzLnNob3VsZEFwcGx5TGF5b3V0RFNMKC4uLmFyZ3MpICYmIHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlMYXlvdXREU0woYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29scyA9IGFyZ3MubWFwKGFyZyA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xGcm9tU3RyaW5nKGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb3dzLnB1c2goY29scyk7XG4gICAgICAgIHJldHVybiBjb2xzO1xuICAgIH1cbiAgICBzaG91bGRBcHBseUxheW91dERTTCguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgIC9bXFx0XFxuXS8udGVzdChhcmdzWzBdKTtcbiAgICB9XG4gICAgYXBwbHlMYXlvdXREU0woc3RyKSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChyb3cgPT4gcm93LnNwbGl0KCdcXHQnKSk7XG4gICAgICAgIGxldCBsZWZ0Q29sdW1uV2lkdGggPSAwO1xuICAgICAgICAvLyBzaW1wbGUgaGV1cmlzdGljIGZvciBsYXlvdXQsIG1ha2Ugc3VyZSB0aGVcbiAgICAgICAgLy8gc2Vjb25kIGNvbHVtbiBsaW5lcyB1cCBhbG9uZyB0aGUgbGVmdC1oYW5kLlxuICAgICAgICAvLyBkb24ndCBhbGxvdyB0aGUgZmlyc3QgY29sdW1uIHRvIHRha2UgdXAgbW9yZVxuICAgICAgICAvLyB0aGFuIDUwJSBvZiB0aGUgc2NyZWVuLlxuICAgICAgICByb3dzLmZvckVhY2goY29sdW1ucyA9PiB7XG4gICAgICAgICAgICBpZiAoY29sdW1ucy5sZW5ndGggPiAxICYmIG1peGluLnN0cmluZ1dpZHRoKGNvbHVtbnNbMF0pID4gbGVmdENvbHVtbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgbGVmdENvbHVtbldpZHRoID0gTWF0aC5taW4oTWF0aC5mbG9vcih0aGlzLndpZHRoICogMC41KSwgbWl4aW4uc3RyaW5nV2lkdGgoY29sdW1uc1swXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZ2VuZXJhdGUgYSB0YWJsZTpcbiAgICAgICAgLy8gIHJlcGxhY2luZyAnICcgd2l0aCBwYWRkaW5nIGNhbGN1bGF0aW9ucy5cbiAgICAgICAgLy8gIHVzaW5nIHRoZSBhbGdvcml0aG1pY2FsbHkgZ2VuZXJhdGVkIHdpZHRoLlxuICAgICAgICByb3dzLmZvckVhY2goY29sdW1ucyA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpdiguLi5jb2x1bW5zLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHIudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB0aGlzLm1lYXN1cmVQYWRkaW5nKHIpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogKGkgPT09IDAgJiYgY29sdW1ucy5sZW5ndGggPiAxKSA/IGxlZnRDb2x1bW5XaWR0aCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dzW3RoaXMucm93cy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgY29sRnJvbVN0cmluZyh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgcGFkZGluZzogdGhpcy5tZWFzdXJlUGFkZGluZyh0ZXh0KVxuICAgICAgICB9O1xuICAgIH1cbiAgICBtZWFzdXJlUGFkZGluZyhzdHIpIHtcbiAgICAgICAgLy8gbWVhc3VyZSBwYWRkaW5nIHdpdGhvdXQgYW5zaSBlc2NhcGUgY29kZXNcbiAgICAgICAgY29uc3Qgbm9BbnNpID0gbWl4aW4uc3RyaXBBbnNpKHN0cik7XG4gICAgICAgIHJldHVybiBbMCwgbm9BbnNpLm1hdGNoKC9cXHMqJC8pWzBdLmxlbmd0aCwgMCwgbm9BbnNpLm1hdGNoKC9eXFxzKi8pWzBdLmxlbmd0aF07XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3dUb1N0cmluZyhyb3csIGxpbmVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGRvbid0IGRpc3BsYXkgYW55IGxpbmVzIHdpdGggdGhlXG4gICAgICAgIC8vIGhpZGRlbiBmbGFnIHNldC5cbiAgICAgICAgcmV0dXJuIGxpbmVzXG4gICAgICAgICAgICAuZmlsdGVyKGxpbmUgPT4gIWxpbmUuaGlkZGVuKVxuICAgICAgICAgICAgLm1hcChsaW5lID0+IGxpbmUudGV4dClcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICB9XG4gICAgcm93VG9TdHJpbmcocm93LCBsaW5lcykge1xuICAgICAgICB0aGlzLnJhc3Rlcml6ZShyb3cpLmZvckVhY2goKHJyb3csIHIpID0+IHtcbiAgICAgICAgICAgIGxldCBzdHIgPSAnJztcbiAgICAgICAgICAgIHJyb3cuZm9yRWFjaCgoY29sLCBjKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gcm93W2NdOyAvLyB0aGUgd2lkdGggd2l0aCBwYWRkaW5nLlxuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBXaWR0aCA9IHRoaXMubmVnYXRlUGFkZGluZyhyb3dbY10pOyAvLyB0aGUgd2lkdGggd2l0aG91dCBwYWRkaW5nLlxuICAgICAgICAgICAgICAgIGxldCB0cyA9IGNvbDsgLy8gdGVtcG9yYXJ5IHN0cmluZyB1c2VkIGR1cmluZyBhbGlnbm1lbnQvcGFkZGluZy5cbiAgICAgICAgICAgICAgICBpZiAod3JhcFdpZHRoID4gbWl4aW4uc3RyaW5nV2lkdGgoY29sKSkge1xuICAgICAgICAgICAgICAgICAgICB0cyArPSAnICcucmVwZWF0KHdyYXBXaWR0aCAtIG1peGluLnN0cmluZ1dpZHRoKGNvbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhbGlnbiB0aGUgc3RyaW5nIHdpdGhpbiBpdHMgY29sdW1uLlxuICAgICAgICAgICAgICAgIGlmIChyb3dbY10uYWxpZ24gJiYgcm93W2NdLmFsaWduICE9PSAnbGVmdCcgJiYgdGhpcy53cmFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZuID0gYWxpZ25bcm93W2NdLmFsaWduXTtcbiAgICAgICAgICAgICAgICAgICAgdHMgPSBmbih0cywgd3JhcFdpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1peGluLnN0cmluZ1dpZHRoKHRzKSA8IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHMgKz0gJyAnLnJlcGVhdCgod2lkdGggfHwgMCkgLSBtaXhpbi5zdHJpbmdXaWR0aCh0cykgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhcHBseSBib3JkZXIgYW5kIHBhZGRpbmcgdG8gc3RyaW5nLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSByb3dbY10ucGFkZGluZyB8fCBbMCwgMCwgMCwgMF07XG4gICAgICAgICAgICAgICAgaWYgKHBhZGRpbmdbbGVmdF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9ICcgJy5yZXBlYXQocGFkZGluZ1tsZWZ0XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0ciArPSBhZGRCb3JkZXIocm93W2NdLCB0cywgJ3wgJyk7XG4gICAgICAgICAgICAgICAgc3RyICs9IHRzO1xuICAgICAgICAgICAgICAgIHN0ciArPSBhZGRCb3JkZXIocm93W2NdLCB0cywgJyB8Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhZGRpbmdbcmlnaHRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnICcucmVwZWF0KHBhZGRpbmdbcmlnaHRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgcHJpb3Igcm93IGlzIHNwYW4sIHRyeSB0byByZW5kZXIgdGhlXG4gICAgICAgICAgICAgICAgLy8gY3VycmVudCByb3cgb24gdGhlIHByaW9yIGxpbmUuXG4gICAgICAgICAgICAgICAgaWYgKHIgPT09IDAgJiYgbGluZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSB0aGlzLnJlbmRlcklubGluZShzdHIsIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyB3aGl0ZXNwYWNlLlxuICAgICAgICAgICAgbGluZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyLnJlcGxhY2UoLyArJC8sICcnKSxcbiAgICAgICAgICAgICAgICBzcGFuOiByb3cuc3BhblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBmdWxsICdzb3VyY2UnIGNhbiByZW5kZXIgaW5cbiAgICAvLyB0aGUgdGFyZ2V0IGxpbmUsIGRvIHNvLlxuICAgIHJlbmRlcklubGluZShzb3VyY2UsIHByZXZpb3VzTGluZSkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHNvdXJjZS5tYXRjaCgvXiAqLyk7XG4gICAgICAgIGNvbnN0IGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2ggPyBtYXRjaFswXS5sZW5ndGggOiAwO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBwcmV2aW91c0xpbmUudGV4dDtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGV4dFdpZHRoID0gbWl4aW4uc3RyaW5nV2lkdGgodGFyZ2V0LnRyaW1SaWdodCgpKTtcbiAgICAgICAgaWYgKCFwcmV2aW91c0xpbmUuc3Bhbikge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSdyZSBub3QgYXBwbHlpbmcgd3JhcHBpbmcgbG9naWMsXG4gICAgICAgIC8vIGp1c3QgYWx3YXlzIGFwcGVuZCB0byB0aGUgc3Bhbi5cbiAgICAgICAgaWYgKCF0aGlzLndyYXApIHtcbiAgICAgICAgICAgIHByZXZpb3VzTGluZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldCArIHNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVhZGluZ1doaXRlc3BhY2UgPCB0YXJnZXRUZXh0V2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXNMaW5lLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIHJldHVybiB0YXJnZXQudHJpbVJpZ2h0KCkgKyAnICcucmVwZWF0KGxlYWRpbmdXaGl0ZXNwYWNlIC0gdGFyZ2V0VGV4dFdpZHRoKSArIHNvdXJjZS50cmltTGVmdCgpO1xuICAgIH1cbiAgICByYXN0ZXJpemUocm93KSB7XG4gICAgICAgIGNvbnN0IHJyb3dzID0gW107XG4gICAgICAgIGNvbnN0IHdpZHRocyA9IHRoaXMuY29sdW1uV2lkdGhzKHJvdyk7XG4gICAgICAgIGxldCB3cmFwcGVkO1xuICAgICAgICAvLyB3b3JkIHdyYXAgYWxsIGNvbHVtbnMsIGFuZCBjcmVhdGVcbiAgICAgICAgLy8gYSBkYXRhLXN0cnVjdHVyZSB0aGF0IGlzIGVhc3kgdG8gcmFzdGVyaXplLlxuICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjKSA9PiB7XG4gICAgICAgICAgICAvLyBsZWF2ZSByb29tIGZvciBsZWZ0IGFuZCByaWdodCBwYWRkaW5nLlxuICAgICAgICAgICAgY29sLndpZHRoID0gd2lkdGhzW2NdO1xuICAgICAgICAgICAgaWYgKHRoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgIHdyYXBwZWQgPSBtaXhpbi53cmFwKGNvbC50ZXh0LCB0aGlzLm5lZ2F0ZVBhZGRpbmcoY29sKSwgeyBoYXJkOiB0cnVlIH0pLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdyYXBwZWQgPSBjb2wudGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sLmJvcmRlcikge1xuICAgICAgICAgICAgICAgIHdyYXBwZWQudW5zaGlmdCgnLicgKyAnLScucmVwZWF0KHRoaXMubmVnYXRlUGFkZGluZyhjb2wpICsgMikgKyAnLicpO1xuICAgICAgICAgICAgICAgIHdyYXBwZWQucHVzaChcIidcIiArICctJy5yZXBlYXQodGhpcy5uZWdhdGVQYWRkaW5nKGNvbCkgKyAyKSArIFwiJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFkZCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nLlxuICAgICAgICAgICAgaWYgKGNvbC5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlZC51bnNoaWZ0KC4uLm5ldyBBcnJheShjb2wucGFkZGluZ1t0b3BdIHx8IDApLmZpbGwoJycpKTtcbiAgICAgICAgICAgICAgICB3cmFwcGVkLnB1c2goLi4ubmV3IEFycmF5KGNvbC5wYWRkaW5nW2JvdHRvbV0gfHwgMCkuZmlsbCgnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlZC5mb3JFYWNoKChzdHIsIHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJyb3dzW3JdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJyb3dzLnB1c2goW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBycm93ID0gcnJvd3Nbcl07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJyb3dbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnJvdy5wdXNoKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycm93LnB1c2goc3RyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJyb3dzO1xuICAgIH1cbiAgICBuZWdhdGVQYWRkaW5nKGNvbCkge1xuICAgICAgICBsZXQgd3JhcFdpZHRoID0gY29sLndpZHRoIHx8IDA7XG4gICAgICAgIGlmIChjb2wucGFkZGluZykge1xuICAgICAgICAgICAgd3JhcFdpZHRoIC09IChjb2wucGFkZGluZ1tsZWZ0XSB8fCAwKSArIChjb2wucGFkZGluZ1tyaWdodF0gfHwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbC5ib3JkZXIpIHtcbiAgICAgICAgICAgIHdyYXBXaWR0aCAtPSA0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cmFwV2lkdGg7XG4gICAgfVxuICAgIGNvbHVtbldpZHRocyhyb3cpIHtcbiAgICAgICAgaWYgKCF0aGlzLndyYXApIHtcbiAgICAgICAgICAgIHJldHVybiByb3cubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbC53aWR0aCB8fCBtaXhpbi5zdHJpbmdXaWR0aChjb2wudGV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdW5zZXQgPSByb3cubGVuZ3RoO1xuICAgICAgICBsZXQgcmVtYWluaW5nV2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAvLyBjb2x1bW4gd2lkdGhzIGNhbiBiZSBzZXQgaW4gY29uZmlnLlxuICAgICAgICBjb25zdCB3aWR0aHMgPSByb3cubWFwKGNvbCA9PiB7XG4gICAgICAgICAgICBpZiAoY29sLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdW5zZXQtLTtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdXaWR0aCAtPSBjb2wud2lkdGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbC53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhbnkgdW5zZXQgd2lkdGhzIHNob3VsZCBiZSBjYWxjdWxhdGVkLlxuICAgICAgICBjb25zdCB1bnNldFdpZHRoID0gdW5zZXQgPyBNYXRoLmZsb29yKHJlbWFpbmluZ1dpZHRoIC8gdW5zZXQpIDogMDtcbiAgICAgICAgcmV0dXJuIHdpZHRocy5tYXAoKHcsIGkpID0+IHtcbiAgICAgICAgICAgIGlmICh3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodW5zZXRXaWR0aCwgX21pbldpZHRoKHJvd1tpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZEJvcmRlcihjb2wsIHRzLCBzdHlsZSkge1xuICAgIGlmIChjb2wuYm9yZGVyKSB7XG4gICAgICAgIGlmICgvWy4nXS0rWy4nXS8udGVzdCh0cykpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHMudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnICAnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG4vLyBjYWxjdWxhdGVzIHRoZSBtaW5pbXVtIHdpZHRoIG9mXG4vLyBhIGNvbHVtbiwgYmFzZWQgb24gcGFkZGluZyBwcmVmZXJlbmNlcy5cbmZ1bmN0aW9uIF9taW5XaWR0aChjb2wpIHtcbiAgICBjb25zdCBwYWRkaW5nID0gY29sLnBhZGRpbmcgfHwgW107XG4gICAgY29uc3QgbWluV2lkdGggPSAxICsgKHBhZGRpbmdbbGVmdF0gfHwgMCkgKyAocGFkZGluZ1tyaWdodF0gfHwgMCk7XG4gICAgaWYgKGNvbC5ib3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIG1pbldpZHRoICsgNDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbldpZHRoO1xufVxuZnVuY3Rpb24gZ2V0V2luZG93V2lkdGgoKSB7XG4gICAgLyogYzggaWdub3JlIG5leHQgNTogZGVwZW5kcyBvbiB0ZXJtaW5hbCAqL1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy5zdGRvdXQgJiYgcHJvY2Vzcy5zdGRvdXQuY29sdW1ucykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzcy5zdGRvdXQuY29sdW1ucztcbiAgICB9XG4gICAgcmV0dXJuIDgwO1xufVxuZnVuY3Rpb24gYWxpZ25SaWdodChzdHIsIHdpZHRoKSB7XG4gICAgc3RyID0gc3RyLnRyaW0oKTtcbiAgICBjb25zdCBzdHJXaWR0aCA9IG1peGluLnN0cmluZ1dpZHRoKHN0cik7XG4gICAgaWYgKHN0cldpZHRoIDwgd2lkdGgpIHtcbiAgICAgICAgcmV0dXJuICcgJy5yZXBlYXQod2lkdGggLSBzdHJXaWR0aCkgKyBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBhbGlnbkNlbnRlcihzdHIsIHdpZHRoKSB7XG4gICAgc3RyID0gc3RyLnRyaW0oKTtcbiAgICBjb25zdCBzdHJXaWR0aCA9IG1peGluLnN0cmluZ1dpZHRoKHN0cik7XG4gICAgLyogYzggaWdub3JlIG5leHQgMyAqL1xuICAgIGlmIChzdHJXaWR0aCA+PSB3aWR0aCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gJyAnLnJlcGVhdCgod2lkdGggLSBzdHJXaWR0aCkgPj4gMSkgKyBzdHI7XG59XG5sZXQgbWl4aW47XG5leHBvcnQgZnVuY3Rpb24gY2xpdWkob3B0cywgX21peGluKSB7XG4gICAgbWl4aW4gPSBfbWl4aW47XG4gICAgcmV0dXJuIG5ldyBVSSh7XG4gICAgICAgIHdpZHRoOiAob3B0cyA9PT0gbnVsbCB8fCBvcHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRzLndpZHRoKSB8fCBnZXRXaW5kb3dXaWR0aCgpLFxuICAgICAgICB3cmFwOiBvcHRzID09PSBudWxsIHx8IG9wdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdHMud3JhcFxuICAgIH0pO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuc2lSZWdleCh7b25seUZpcnN0ID0gZmFsc2V9ID0ge30pIHtcblx0Ly8gVmFsaWQgc3RyaW5nIHRlcm1pbmF0b3Igc2VxdWVuY2VzIGFyZSBCRUwsIEVTQ1xcLCBhbmQgMHg5Y1xuXHRjb25zdCBTVCA9ICcoPzpcXFxcdTAwMDd8XFxcXHUwMDFCXFxcXHUwMDVDfFxcXFx1MDA5QyknO1xuXHRjb25zdCBwYXR0ZXJuID0gW1xuXHRcdGBbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86KD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKykqfFthLXpBLVpcXFxcZF0rKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT8ke1NUfSlgLFxuXHRcdCcoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW5xLXV5PT48fl0pKScsXG5cdF0uam9pbignfCcpO1xuXG5cdHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sIG9ubHlGaXJzdCA/IHVuZGVmaW5lZCA6ICdnJyk7XG59XG4iLCAiaW1wb3J0IGFuc2lSZWdleCBmcm9tICdhbnNpLXJlZ2V4JztcblxuY29uc3QgcmVnZXggPSBhbnNpUmVnZXgoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaXBBbnNpKHN0cmluZykge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIFxcYHN0cmluZ1xcYCwgZ290IFxcYCR7dHlwZW9mIHN0cmluZ31cXGBgKTtcblx0fVxuXG5cdC8vIEV2ZW4gdGhvdWdoIHRoZSByZWdleCBpcyBnbG9iYWwsIHdlIGRvbid0IG5lZWQgdG8gcmVzZXQgdGhlIGAubGFzdEluZGV4YFxuXHQvLyBiZWNhdXNlIHVubGlrZSBgLmV4ZWMoKWAgYW5kIGAudGVzdCgpYCwgYC5yZXBsYWNlKClgIGRvZXMgaXQgYXV0b21hdGljYWxseVxuXHQvLyBhbmQgZG9pbmcgaXQgbWFudWFsbHkgaGFzIGEgcGVyZm9ybWFuY2UgcGVuYWx0eS5cblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4LCAnJyk7XG59XG4iLCAiLy8gR2VuZXJhdGVkIGNvZGUuXG5cbmZ1bmN0aW9uIGlzQW1iaWd1b3VzKHgpIHtcblx0cmV0dXJuIHggPT09IDB4QTFcblx0XHR8fCB4ID09PSAweEE0XG5cdFx0fHwgeCA9PT0gMHhBN1xuXHRcdHx8IHggPT09IDB4QThcblx0XHR8fCB4ID09PSAweEFBXG5cdFx0fHwgeCA9PT0gMHhBRFxuXHRcdHx8IHggPT09IDB4QUVcblx0XHR8fCB4ID49IDB4QjAgJiYgeCA8PSAweEI0XG5cdFx0fHwgeCA+PSAweEI2ICYmIHggPD0gMHhCQVxuXHRcdHx8IHggPj0gMHhCQyAmJiB4IDw9IDB4QkZcblx0XHR8fCB4ID09PSAweEM2XG5cdFx0fHwgeCA9PT0gMHhEMFxuXHRcdHx8IHggPT09IDB4RDdcblx0XHR8fCB4ID09PSAweEQ4XG5cdFx0fHwgeCA+PSAweERFICYmIHggPD0gMHhFMVxuXHRcdHx8IHggPT09IDB4RTZcblx0XHR8fCB4ID49IDB4RTggJiYgeCA8PSAweEVBXG5cdFx0fHwgeCA9PT0gMHhFQ1xuXHRcdHx8IHggPT09IDB4RURcblx0XHR8fCB4ID09PSAweEYwXG5cdFx0fHwgeCA9PT0gMHhGMlxuXHRcdHx8IHggPT09IDB4RjNcblx0XHR8fCB4ID49IDB4RjcgJiYgeCA8PSAweEZBXG5cdFx0fHwgeCA9PT0gMHhGQ1xuXHRcdHx8IHggPT09IDB4RkVcblx0XHR8fCB4ID09PSAweDEwMVxuXHRcdHx8IHggPT09IDB4MTExXG5cdFx0fHwgeCA9PT0gMHgxMTNcblx0XHR8fCB4ID09PSAweDExQlxuXHRcdHx8IHggPT09IDB4MTI2XG5cdFx0fHwgeCA9PT0gMHgxMjdcblx0XHR8fCB4ID09PSAweDEyQlxuXHRcdHx8IHggPj0gMHgxMzEgJiYgeCA8PSAweDEzM1xuXHRcdHx8IHggPT09IDB4MTM4XG5cdFx0fHwgeCA+PSAweDEzRiAmJiB4IDw9IDB4MTQyXG5cdFx0fHwgeCA9PT0gMHgxNDRcblx0XHR8fCB4ID49IDB4MTQ4ICYmIHggPD0gMHgxNEJcblx0XHR8fCB4ID09PSAweDE0RFxuXHRcdHx8IHggPT09IDB4MTUyXG5cdFx0fHwgeCA9PT0gMHgxNTNcblx0XHR8fCB4ID09PSAweDE2NlxuXHRcdHx8IHggPT09IDB4MTY3XG5cdFx0fHwgeCA9PT0gMHgxNkJcblx0XHR8fCB4ID09PSAweDFDRVxuXHRcdHx8IHggPT09IDB4MUQwXG5cdFx0fHwgeCA9PT0gMHgxRDJcblx0XHR8fCB4ID09PSAweDFENFxuXHRcdHx8IHggPT09IDB4MUQ2XG5cdFx0fHwgeCA9PT0gMHgxRDhcblx0XHR8fCB4ID09PSAweDFEQVxuXHRcdHx8IHggPT09IDB4MURDXG5cdFx0fHwgeCA9PT0gMHgyNTFcblx0XHR8fCB4ID09PSAweDI2MVxuXHRcdHx8IHggPT09IDB4MkM0XG5cdFx0fHwgeCA9PT0gMHgyQzdcblx0XHR8fCB4ID49IDB4MkM5ICYmIHggPD0gMHgyQ0Jcblx0XHR8fCB4ID09PSAweDJDRFxuXHRcdHx8IHggPT09IDB4MkQwXG5cdFx0fHwgeCA+PSAweDJEOCAmJiB4IDw9IDB4MkRCXG5cdFx0fHwgeCA9PT0gMHgyRERcblx0XHR8fCB4ID09PSAweDJERlxuXHRcdHx8IHggPj0gMHgzMDAgJiYgeCA8PSAweDM2RlxuXHRcdHx8IHggPj0gMHgzOTEgJiYgeCA8PSAweDNBMVxuXHRcdHx8IHggPj0gMHgzQTMgJiYgeCA8PSAweDNBOVxuXHRcdHx8IHggPj0gMHgzQjEgJiYgeCA8PSAweDNDMVxuXHRcdHx8IHggPj0gMHgzQzMgJiYgeCA8PSAweDNDOVxuXHRcdHx8IHggPT09IDB4NDAxXG5cdFx0fHwgeCA+PSAweDQxMCAmJiB4IDw9IDB4NDRGXG5cdFx0fHwgeCA9PT0gMHg0NTFcblx0XHR8fCB4ID09PSAweDIwMTBcblx0XHR8fCB4ID49IDB4MjAxMyAmJiB4IDw9IDB4MjAxNlxuXHRcdHx8IHggPT09IDB4MjAxOFxuXHRcdHx8IHggPT09IDB4MjAxOVxuXHRcdHx8IHggPT09IDB4MjAxQ1xuXHRcdHx8IHggPT09IDB4MjAxRFxuXHRcdHx8IHggPj0gMHgyMDIwICYmIHggPD0gMHgyMDIyXG5cdFx0fHwgeCA+PSAweDIwMjQgJiYgeCA8PSAweDIwMjdcblx0XHR8fCB4ID09PSAweDIwMzBcblx0XHR8fCB4ID09PSAweDIwMzJcblx0XHR8fCB4ID09PSAweDIwMzNcblx0XHR8fCB4ID09PSAweDIwMzVcblx0XHR8fCB4ID09PSAweDIwM0Jcblx0XHR8fCB4ID09PSAweDIwM0Vcblx0XHR8fCB4ID09PSAweDIwNzRcblx0XHR8fCB4ID09PSAweDIwN0Zcblx0XHR8fCB4ID49IDB4MjA4MSAmJiB4IDw9IDB4MjA4NFxuXHRcdHx8IHggPT09IDB4MjBBQ1xuXHRcdHx8IHggPT09IDB4MjEwM1xuXHRcdHx8IHggPT09IDB4MjEwNVxuXHRcdHx8IHggPT09IDB4MjEwOVxuXHRcdHx8IHggPT09IDB4MjExM1xuXHRcdHx8IHggPT09IDB4MjExNlxuXHRcdHx8IHggPT09IDB4MjEyMVxuXHRcdHx8IHggPT09IDB4MjEyMlxuXHRcdHx8IHggPT09IDB4MjEyNlxuXHRcdHx8IHggPT09IDB4MjEyQlxuXHRcdHx8IHggPT09IDB4MjE1M1xuXHRcdHx8IHggPT09IDB4MjE1NFxuXHRcdHx8IHggPj0gMHgyMTVCICYmIHggPD0gMHgyMTVFXG5cdFx0fHwgeCA+PSAweDIxNjAgJiYgeCA8PSAweDIxNkJcblx0XHR8fCB4ID49IDB4MjE3MCAmJiB4IDw9IDB4MjE3OVxuXHRcdHx8IHggPT09IDB4MjE4OVxuXHRcdHx8IHggPj0gMHgyMTkwICYmIHggPD0gMHgyMTk5XG5cdFx0fHwgeCA9PT0gMHgyMUI4XG5cdFx0fHwgeCA9PT0gMHgyMUI5XG5cdFx0fHwgeCA9PT0gMHgyMUQyXG5cdFx0fHwgeCA9PT0gMHgyMUQ0XG5cdFx0fHwgeCA9PT0gMHgyMUU3XG5cdFx0fHwgeCA9PT0gMHgyMjAwXG5cdFx0fHwgeCA9PT0gMHgyMjAyXG5cdFx0fHwgeCA9PT0gMHgyMjAzXG5cdFx0fHwgeCA9PT0gMHgyMjA3XG5cdFx0fHwgeCA9PT0gMHgyMjA4XG5cdFx0fHwgeCA9PT0gMHgyMjBCXG5cdFx0fHwgeCA9PT0gMHgyMjBGXG5cdFx0fHwgeCA9PT0gMHgyMjExXG5cdFx0fHwgeCA9PT0gMHgyMjE1XG5cdFx0fHwgeCA9PT0gMHgyMjFBXG5cdFx0fHwgeCA+PSAweDIyMUQgJiYgeCA8PSAweDIyMjBcblx0XHR8fCB4ID09PSAweDIyMjNcblx0XHR8fCB4ID09PSAweDIyMjVcblx0XHR8fCB4ID49IDB4MjIyNyAmJiB4IDw9IDB4MjIyQ1xuXHRcdHx8IHggPT09IDB4MjIyRVxuXHRcdHx8IHggPj0gMHgyMjM0ICYmIHggPD0gMHgyMjM3XG5cdFx0fHwgeCA9PT0gMHgyMjNDXG5cdFx0fHwgeCA9PT0gMHgyMjNEXG5cdFx0fHwgeCA9PT0gMHgyMjQ4XG5cdFx0fHwgeCA9PT0gMHgyMjRDXG5cdFx0fHwgeCA9PT0gMHgyMjUyXG5cdFx0fHwgeCA9PT0gMHgyMjYwXG5cdFx0fHwgeCA9PT0gMHgyMjYxXG5cdFx0fHwgeCA+PSAweDIyNjQgJiYgeCA8PSAweDIyNjdcblx0XHR8fCB4ID09PSAweDIyNkFcblx0XHR8fCB4ID09PSAweDIyNkJcblx0XHR8fCB4ID09PSAweDIyNkVcblx0XHR8fCB4ID09PSAweDIyNkZcblx0XHR8fCB4ID09PSAweDIyODJcblx0XHR8fCB4ID09PSAweDIyODNcblx0XHR8fCB4ID09PSAweDIyODZcblx0XHR8fCB4ID09PSAweDIyODdcblx0XHR8fCB4ID09PSAweDIyOTVcblx0XHR8fCB4ID09PSAweDIyOTlcblx0XHR8fCB4ID09PSAweDIyQTVcblx0XHR8fCB4ID09PSAweDIyQkZcblx0XHR8fCB4ID09PSAweDIzMTJcblx0XHR8fCB4ID49IDB4MjQ2MCAmJiB4IDw9IDB4MjRFOVxuXHRcdHx8IHggPj0gMHgyNEVCICYmIHggPD0gMHgyNTRCXG5cdFx0fHwgeCA+PSAweDI1NTAgJiYgeCA8PSAweDI1NzNcblx0XHR8fCB4ID49IDB4MjU4MCAmJiB4IDw9IDB4MjU4RlxuXHRcdHx8IHggPj0gMHgyNTkyICYmIHggPD0gMHgyNTk1XG5cdFx0fHwgeCA9PT0gMHgyNUEwXG5cdFx0fHwgeCA9PT0gMHgyNUExXG5cdFx0fHwgeCA+PSAweDI1QTMgJiYgeCA8PSAweDI1QTlcblx0XHR8fCB4ID09PSAweDI1QjJcblx0XHR8fCB4ID09PSAweDI1QjNcblx0XHR8fCB4ID09PSAweDI1QjZcblx0XHR8fCB4ID09PSAweDI1Qjdcblx0XHR8fCB4ID09PSAweDI1QkNcblx0XHR8fCB4ID09PSAweDI1QkRcblx0XHR8fCB4ID09PSAweDI1QzBcblx0XHR8fCB4ID09PSAweDI1QzFcblx0XHR8fCB4ID49IDB4MjVDNiAmJiB4IDw9IDB4MjVDOFxuXHRcdHx8IHggPT09IDB4MjVDQlxuXHRcdHx8IHggPj0gMHgyNUNFICYmIHggPD0gMHgyNUQxXG5cdFx0fHwgeCA+PSAweDI1RTIgJiYgeCA8PSAweDI1RTVcblx0XHR8fCB4ID09PSAweDI1RUZcblx0XHR8fCB4ID09PSAweDI2MDVcblx0XHR8fCB4ID09PSAweDI2MDZcblx0XHR8fCB4ID09PSAweDI2MDlcblx0XHR8fCB4ID09PSAweDI2MEVcblx0XHR8fCB4ID09PSAweDI2MEZcblx0XHR8fCB4ID09PSAweDI2MUNcblx0XHR8fCB4ID09PSAweDI2MUVcblx0XHR8fCB4ID09PSAweDI2NDBcblx0XHR8fCB4ID09PSAweDI2NDJcblx0XHR8fCB4ID09PSAweDI2NjBcblx0XHR8fCB4ID09PSAweDI2NjFcblx0XHR8fCB4ID49IDB4MjY2MyAmJiB4IDw9IDB4MjY2NVxuXHRcdHx8IHggPj0gMHgyNjY3ICYmIHggPD0gMHgyNjZBXG5cdFx0fHwgeCA9PT0gMHgyNjZDXG5cdFx0fHwgeCA9PT0gMHgyNjZEXG5cdFx0fHwgeCA9PT0gMHgyNjZGXG5cdFx0fHwgeCA9PT0gMHgyNjlFXG5cdFx0fHwgeCA9PT0gMHgyNjlGXG5cdFx0fHwgeCA9PT0gMHgyNkJGXG5cdFx0fHwgeCA+PSAweDI2QzYgJiYgeCA8PSAweDI2Q0Rcblx0XHR8fCB4ID49IDB4MjZDRiAmJiB4IDw9IDB4MjZEM1xuXHRcdHx8IHggPj0gMHgyNkQ1ICYmIHggPD0gMHgyNkUxXG5cdFx0fHwgeCA9PT0gMHgyNkUzXG5cdFx0fHwgeCA9PT0gMHgyNkU4XG5cdFx0fHwgeCA9PT0gMHgyNkU5XG5cdFx0fHwgeCA+PSAweDI2RUIgJiYgeCA8PSAweDI2RjFcblx0XHR8fCB4ID09PSAweDI2RjRcblx0XHR8fCB4ID49IDB4MjZGNiAmJiB4IDw9IDB4MjZGOVxuXHRcdHx8IHggPT09IDB4MjZGQlxuXHRcdHx8IHggPT09IDB4MjZGQ1xuXHRcdHx8IHggPT09IDB4MjZGRVxuXHRcdHx8IHggPT09IDB4MjZGRlxuXHRcdHx8IHggPT09IDB4MjczRFxuXHRcdHx8IHggPj0gMHgyNzc2ICYmIHggPD0gMHgyNzdGXG5cdFx0fHwgeCA+PSAweDJCNTYgJiYgeCA8PSAweDJCNTlcblx0XHR8fCB4ID49IDB4MzI0OCAmJiB4IDw9IDB4MzI0RlxuXHRcdHx8IHggPj0gMHhFMDAwICYmIHggPD0gMHhGOEZGXG5cdFx0fHwgeCA+PSAweEZFMDAgJiYgeCA8PSAweEZFMEZcblx0XHR8fCB4ID09PSAweEZGRkRcblx0XHR8fCB4ID49IDB4MUYxMDAgJiYgeCA8PSAweDFGMTBBXG5cdFx0fHwgeCA+PSAweDFGMTEwICYmIHggPD0gMHgxRjEyRFxuXHRcdHx8IHggPj0gMHgxRjEzMCAmJiB4IDw9IDB4MUYxNjlcblx0XHR8fCB4ID49IDB4MUYxNzAgJiYgeCA8PSAweDFGMThEXG5cdFx0fHwgeCA9PT0gMHgxRjE4RlxuXHRcdHx8IHggPT09IDB4MUYxOTBcblx0XHR8fCB4ID49IDB4MUYxOUIgJiYgeCA8PSAweDFGMUFDXG5cdFx0fHwgeCA+PSAweEUwMTAwICYmIHggPD0gMHhFMDFFRlxuXHRcdHx8IHggPj0gMHhGMDAwMCAmJiB4IDw9IDB4RkZGRkRcblx0XHR8fCB4ID49IDB4MTAwMDAwICYmIHggPD0gMHgxMEZGRkQ7XG59XG5cbmZ1bmN0aW9uIGlzRnVsbFdpZHRoKHgpIHtcblx0cmV0dXJuIHggPT09IDB4MzAwMFxuXHRcdHx8IHggPj0gMHhGRjAxICYmIHggPD0gMHhGRjYwXG5cdFx0fHwgeCA+PSAweEZGRTAgJiYgeCA8PSAweEZGRTY7XG59XG5cbmZ1bmN0aW9uIGlzV2lkZSh4KSB7XG5cdHJldHVybiB4ID49IDB4MTEwMCAmJiB4IDw9IDB4MTE1RlxuXHRcdHx8IHggPT09IDB4MjMxQVxuXHRcdHx8IHggPT09IDB4MjMxQlxuXHRcdHx8IHggPT09IDB4MjMyOVxuXHRcdHx8IHggPT09IDB4MjMyQVxuXHRcdHx8IHggPj0gMHgyM0U5ICYmIHggPD0gMHgyM0VDXG5cdFx0fHwgeCA9PT0gMHgyM0YwXG5cdFx0fHwgeCA9PT0gMHgyM0YzXG5cdFx0fHwgeCA9PT0gMHgyNUZEXG5cdFx0fHwgeCA9PT0gMHgyNUZFXG5cdFx0fHwgeCA9PT0gMHgyNjE0XG5cdFx0fHwgeCA9PT0gMHgyNjE1XG5cdFx0fHwgeCA+PSAweDI2MzAgJiYgeCA8PSAweDI2Mzdcblx0XHR8fCB4ID49IDB4MjY0OCAmJiB4IDw9IDB4MjY1M1xuXHRcdHx8IHggPT09IDB4MjY3RlxuXHRcdHx8IHggPj0gMHgyNjhBICYmIHggPD0gMHgyNjhGXG5cdFx0fHwgeCA9PT0gMHgyNjkzXG5cdFx0fHwgeCA9PT0gMHgyNkExXG5cdFx0fHwgeCA9PT0gMHgyNkFBXG5cdFx0fHwgeCA9PT0gMHgyNkFCXG5cdFx0fHwgeCA9PT0gMHgyNkJEXG5cdFx0fHwgeCA9PT0gMHgyNkJFXG5cdFx0fHwgeCA9PT0gMHgyNkM0XG5cdFx0fHwgeCA9PT0gMHgyNkM1XG5cdFx0fHwgeCA9PT0gMHgyNkNFXG5cdFx0fHwgeCA9PT0gMHgyNkQ0XG5cdFx0fHwgeCA9PT0gMHgyNkVBXG5cdFx0fHwgeCA9PT0gMHgyNkYyXG5cdFx0fHwgeCA9PT0gMHgyNkYzXG5cdFx0fHwgeCA9PT0gMHgyNkY1XG5cdFx0fHwgeCA9PT0gMHgyNkZBXG5cdFx0fHwgeCA9PT0gMHgyNkZEXG5cdFx0fHwgeCA9PT0gMHgyNzA1XG5cdFx0fHwgeCA9PT0gMHgyNzBBXG5cdFx0fHwgeCA9PT0gMHgyNzBCXG5cdFx0fHwgeCA9PT0gMHgyNzI4XG5cdFx0fHwgeCA9PT0gMHgyNzRDXG5cdFx0fHwgeCA9PT0gMHgyNzRFXG5cdFx0fHwgeCA+PSAweDI3NTMgJiYgeCA8PSAweDI3NTVcblx0XHR8fCB4ID09PSAweDI3NTdcblx0XHR8fCB4ID49IDB4Mjc5NSAmJiB4IDw9IDB4Mjc5N1xuXHRcdHx8IHggPT09IDB4MjdCMFxuXHRcdHx8IHggPT09IDB4MjdCRlxuXHRcdHx8IHggPT09IDB4MkIxQlxuXHRcdHx8IHggPT09IDB4MkIxQ1xuXHRcdHx8IHggPT09IDB4MkI1MFxuXHRcdHx8IHggPT09IDB4MkI1NVxuXHRcdHx8IHggPj0gMHgyRTgwICYmIHggPD0gMHgyRTk5XG5cdFx0fHwgeCA+PSAweDJFOUIgJiYgeCA8PSAweDJFRjNcblx0XHR8fCB4ID49IDB4MkYwMCAmJiB4IDw9IDB4MkZENVxuXHRcdHx8IHggPj0gMHgyRkYwICYmIHggPD0gMHgyRkZGXG5cdFx0fHwgeCA+PSAweDMwMDEgJiYgeCA8PSAweDMwM0Vcblx0XHR8fCB4ID49IDB4MzA0MSAmJiB4IDw9IDB4MzA5NlxuXHRcdHx8IHggPj0gMHgzMDk5ICYmIHggPD0gMHgzMEZGXG5cdFx0fHwgeCA+PSAweDMxMDUgJiYgeCA8PSAweDMxMkZcblx0XHR8fCB4ID49IDB4MzEzMSAmJiB4IDw9IDB4MzE4RVxuXHRcdHx8IHggPj0gMHgzMTkwICYmIHggPD0gMHgzMUU1XG5cdFx0fHwgeCA+PSAweDMxRUYgJiYgeCA8PSAweDMyMUVcblx0XHR8fCB4ID49IDB4MzIyMCAmJiB4IDw9IDB4MzI0N1xuXHRcdHx8IHggPj0gMHgzMjUwICYmIHggPD0gMHhBNDhDXG5cdFx0fHwgeCA+PSAweEE0OTAgJiYgeCA8PSAweEE0QzZcblx0XHR8fCB4ID49IDB4QTk2MCAmJiB4IDw9IDB4QTk3Q1xuXHRcdHx8IHggPj0gMHhBQzAwICYmIHggPD0gMHhEN0EzXG5cdFx0fHwgeCA+PSAweEY5MDAgJiYgeCA8PSAweEZBRkZcblx0XHR8fCB4ID49IDB4RkUxMCAmJiB4IDw9IDB4RkUxOVxuXHRcdHx8IHggPj0gMHhGRTMwICYmIHggPD0gMHhGRTUyXG5cdFx0fHwgeCA+PSAweEZFNTQgJiYgeCA8PSAweEZFNjZcblx0XHR8fCB4ID49IDB4RkU2OCAmJiB4IDw9IDB4RkU2QlxuXHRcdHx8IHggPj0gMHgxNkZFMCAmJiB4IDw9IDB4MTZGRTRcblx0XHR8fCB4ID09PSAweDE2RkYwXG5cdFx0fHwgeCA9PT0gMHgxNkZGMVxuXHRcdHx8IHggPj0gMHgxNzAwMCAmJiB4IDw9IDB4MTg3Rjdcblx0XHR8fCB4ID49IDB4MTg4MDAgJiYgeCA8PSAweDE4Q0Q1XG5cdFx0fHwgeCA+PSAweDE4Q0ZGICYmIHggPD0gMHgxOEQwOFxuXHRcdHx8IHggPj0gMHgxQUZGMCAmJiB4IDw9IDB4MUFGRjNcblx0XHR8fCB4ID49IDB4MUFGRjUgJiYgeCA8PSAweDFBRkZCXG5cdFx0fHwgeCA9PT0gMHgxQUZGRFxuXHRcdHx8IHggPT09IDB4MUFGRkVcblx0XHR8fCB4ID49IDB4MUIwMDAgJiYgeCA8PSAweDFCMTIyXG5cdFx0fHwgeCA9PT0gMHgxQjEzMlxuXHRcdHx8IHggPj0gMHgxQjE1MCAmJiB4IDw9IDB4MUIxNTJcblx0XHR8fCB4ID09PSAweDFCMTU1XG5cdFx0fHwgeCA+PSAweDFCMTY0ICYmIHggPD0gMHgxQjE2N1xuXHRcdHx8IHggPj0gMHgxQjE3MCAmJiB4IDw9IDB4MUIyRkJcblx0XHR8fCB4ID49IDB4MUQzMDAgJiYgeCA8PSAweDFEMzU2XG5cdFx0fHwgeCA+PSAweDFEMzYwICYmIHggPD0gMHgxRDM3NlxuXHRcdHx8IHggPT09IDB4MUYwMDRcblx0XHR8fCB4ID09PSAweDFGMENGXG5cdFx0fHwgeCA9PT0gMHgxRjE4RVxuXHRcdHx8IHggPj0gMHgxRjE5MSAmJiB4IDw9IDB4MUYxOUFcblx0XHR8fCB4ID49IDB4MUYyMDAgJiYgeCA8PSAweDFGMjAyXG5cdFx0fHwgeCA+PSAweDFGMjEwICYmIHggPD0gMHgxRjIzQlxuXHRcdHx8IHggPj0gMHgxRjI0MCAmJiB4IDw9IDB4MUYyNDhcblx0XHR8fCB4ID09PSAweDFGMjUwXG5cdFx0fHwgeCA9PT0gMHgxRjI1MVxuXHRcdHx8IHggPj0gMHgxRjI2MCAmJiB4IDw9IDB4MUYyNjVcblx0XHR8fCB4ID49IDB4MUYzMDAgJiYgeCA8PSAweDFGMzIwXG5cdFx0fHwgeCA+PSAweDFGMzJEICYmIHggPD0gMHgxRjMzNVxuXHRcdHx8IHggPj0gMHgxRjMzNyAmJiB4IDw9IDB4MUYzN0Ncblx0XHR8fCB4ID49IDB4MUYzN0UgJiYgeCA8PSAweDFGMzkzXG5cdFx0fHwgeCA+PSAweDFGM0EwICYmIHggPD0gMHgxRjNDQVxuXHRcdHx8IHggPj0gMHgxRjNDRiAmJiB4IDw9IDB4MUYzRDNcblx0XHR8fCB4ID49IDB4MUYzRTAgJiYgeCA8PSAweDFGM0YwXG5cdFx0fHwgeCA9PT0gMHgxRjNGNFxuXHRcdHx8IHggPj0gMHgxRjNGOCAmJiB4IDw9IDB4MUY0M0Vcblx0XHR8fCB4ID09PSAweDFGNDQwXG5cdFx0fHwgeCA+PSAweDFGNDQyICYmIHggPD0gMHgxRjRGQ1xuXHRcdHx8IHggPj0gMHgxRjRGRiAmJiB4IDw9IDB4MUY1M0Rcblx0XHR8fCB4ID49IDB4MUY1NEIgJiYgeCA8PSAweDFGNTRFXG5cdFx0fHwgeCA+PSAweDFGNTUwICYmIHggPD0gMHgxRjU2N1xuXHRcdHx8IHggPT09IDB4MUY1N0Fcblx0XHR8fCB4ID09PSAweDFGNTk1XG5cdFx0fHwgeCA9PT0gMHgxRjU5NlxuXHRcdHx8IHggPT09IDB4MUY1QTRcblx0XHR8fCB4ID49IDB4MUY1RkIgJiYgeCA8PSAweDFGNjRGXG5cdFx0fHwgeCA+PSAweDFGNjgwICYmIHggPD0gMHgxRjZDNVxuXHRcdHx8IHggPT09IDB4MUY2Q0Ncblx0XHR8fCB4ID49IDB4MUY2RDAgJiYgeCA8PSAweDFGNkQyXG5cdFx0fHwgeCA+PSAweDFGNkQ1ICYmIHggPD0gMHgxRjZEN1xuXHRcdHx8IHggPj0gMHgxRjZEQyAmJiB4IDw9IDB4MUY2REZcblx0XHR8fCB4ID09PSAweDFGNkVCXG5cdFx0fHwgeCA9PT0gMHgxRjZFQ1xuXHRcdHx8IHggPj0gMHgxRjZGNCAmJiB4IDw9IDB4MUY2RkNcblx0XHR8fCB4ID49IDB4MUY3RTAgJiYgeCA8PSAweDFGN0VCXG5cdFx0fHwgeCA9PT0gMHgxRjdGMFxuXHRcdHx8IHggPj0gMHgxRjkwQyAmJiB4IDw9IDB4MUY5M0Fcblx0XHR8fCB4ID49IDB4MUY5M0MgJiYgeCA8PSAweDFGOTQ1XG5cdFx0fHwgeCA+PSAweDFGOTQ3ICYmIHggPD0gMHgxRjlGRlxuXHRcdHx8IHggPj0gMHgxRkE3MCAmJiB4IDw9IDB4MUZBN0Ncblx0XHR8fCB4ID49IDB4MUZBODAgJiYgeCA8PSAweDFGQTg5XG5cdFx0fHwgeCA+PSAweDFGQThGICYmIHggPD0gMHgxRkFDNlxuXHRcdHx8IHggPj0gMHgxRkFDRSAmJiB4IDw9IDB4MUZBRENcblx0XHR8fCB4ID49IDB4MUZBREYgJiYgeCA8PSAweDFGQUU5XG5cdFx0fHwgeCA+PSAweDFGQUYwICYmIHggPD0gMHgxRkFGOFxuXHRcdHx8IHggPj0gMHgyMDAwMCAmJiB4IDw9IDB4MkZGRkRcblx0XHR8fCB4ID49IDB4MzAwMDAgJiYgeCA8PSAweDNGRkZEO1xufVxuXG5mdW5jdGlvbiBnZXRDYXRlZ29yeSh4KSB7XG5cdGlmIChpc0FtYmlndW91cyh4KSkgcmV0dXJuICdhbWJpZ3VvdXMnO1xuXG5cdGlmIChpc0Z1bGxXaWR0aCh4KSkgcmV0dXJuICdmdWxsd2lkdGgnO1xuXG5cdGlmIChcblx0XHR4ID09PSAweDIwQTlcblx0XHR8fCB4ID49IDB4RkY2MSAmJiB4IDw9IDB4RkZCRVxuXHRcdHx8IHggPj0gMHhGRkMyICYmIHggPD0gMHhGRkM3XG5cdFx0fHwgeCA+PSAweEZGQ0EgJiYgeCA8PSAweEZGQ0Zcblx0XHR8fCB4ID49IDB4RkZEMiAmJiB4IDw9IDB4RkZEN1xuXHRcdHx8IHggPj0gMHhGRkRBICYmIHggPD0gMHhGRkRDXG5cdFx0fHwgeCA+PSAweEZGRTggJiYgeCA8PSAweEZGRUVcblx0KSB7XG5cdFx0cmV0dXJuICdoYWxmd2lkdGgnO1xuXHR9XG5cblx0aWYgKFxuXHRcdHggPj0gMHgyMCAmJiB4IDw9IDB4N0Vcblx0XHR8fCB4ID09PSAweEEyXG5cdFx0fHwgeCA9PT0gMHhBM1xuXHRcdHx8IHggPT09IDB4QTVcblx0XHR8fCB4ID09PSAweEE2XG5cdFx0fHwgeCA9PT0gMHhBQ1xuXHRcdHx8IHggPT09IDB4QUZcblx0XHR8fCB4ID49IDB4MjdFNiAmJiB4IDw9IDB4MjdFRFxuXHRcdHx8IHggPT09IDB4Mjk4NVxuXHRcdHx8IHggPT09IDB4Mjk4NlxuXHQpIHtcblx0XHRyZXR1cm4gJ25hcnJvdyc7XG5cdH1cblxuXHRpZiAoaXNXaWRlKHgpKSByZXR1cm4gJ3dpZGUnO1xuXG5cdHJldHVybiAnbmV1dHJhbCc7XG59XG5cbmV4cG9ydCB7aXNBbWJpZ3VvdXMsIGlzRnVsbFdpZHRoLCBpc1dpZGUsIGdldENhdGVnb3J5fTtcbiIsICJpbXBvcnQge2dldENhdGVnb3J5LCBpc0FtYmlndW91cywgaXNGdWxsV2lkdGgsIGlzV2lkZX0gZnJvbSAnLi9sb29rdXAuanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZShjb2RlUG9pbnQpIHtcblx0aWYgKCFOdW1iZXIuaXNTYWZlSW50ZWdlcihjb2RlUG9pbnQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBjb2RlIHBvaW50LCBnb3QgXFxgJHt0eXBlb2YgY29kZVBvaW50fVxcYC5gKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFzdEFzaWFuV2lkdGhUeXBlKGNvZGVQb2ludCkge1xuXHR2YWxpZGF0ZShjb2RlUG9pbnQpO1xuXG5cdHJldHVybiBnZXRDYXRlZ29yeShjb2RlUG9pbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFzdEFzaWFuV2lkdGgoY29kZVBvaW50LCB7YW1iaWd1b3VzQXNXaWRlID0gZmFsc2V9ID0ge30pIHtcblx0dmFsaWRhdGUoY29kZVBvaW50KTtcblxuXHRpZiAoXG5cdFx0aXNGdWxsV2lkdGgoY29kZVBvaW50KVxuXHRcdHx8IGlzV2lkZShjb2RlUG9pbnQpXG5cdFx0fHwgKGFtYmlndW91c0FzV2lkZSAmJiBpc0FtYmlndW91cyhjb2RlUG9pbnQpKVxuXHQpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdHJldHVybiAxO1xufVxuXG4vLyBGb3IgUHJldHRpZXIuIFRoaXMgZG9lc24ndCBjb3VudCBcImFtYmlndW91c1wiIGNoYXJhY3RlcnMgb3IgY2hlY2sgZm9yIHZhbGlkIGlucHV0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9nZXQtZWFzdC1hc2lhbi13aWR0aC9wdWxsLzZcbmV4cG9ydCBjb25zdCBfaXNOYXJyb3dXaWR0aCA9IGNvZGVQb2ludCA9PiAhKGlzRnVsbFdpZHRoKGNvZGVQb2ludCkgfHwgaXNXaWRlKGNvZGVQb2ludCkpO1xuIiwgImltcG9ydCBzdHJpcEFuc2kgZnJvbSAnc3RyaXAtYW5zaSc7XG5pbXBvcnQge2Vhc3RBc2lhbldpZHRofSBmcm9tICdnZXQtZWFzdC1hc2lhbi13aWR0aCc7XG5pbXBvcnQgZW1vamlSZWdleCBmcm9tICdlbW9qaS1yZWdleCc7XG5cbmNvbnN0IHNlZ21lbnRlciA9IG5ldyBJbnRsLlNlZ21lbnRlcigpO1xuXG5jb25zdCBkZWZhdWx0SWdub3JhYmxlQ29kZVBvaW50UmVnZXggPSAvXlxccHtEZWZhdWx0X0lnbm9yYWJsZV9Db2RlX1BvaW50fSQvdTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaW5nV2lkdGgoc3RyaW5nLCBvcHRpb25zID0ge30pIHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IHtcblx0XHRhbWJpZ3VvdXNJc05hcnJvdyA9IHRydWUsXG5cdFx0Y291bnRBbnNpRXNjYXBlQ29kZXMgPSBmYWxzZSxcblx0fSA9IG9wdGlvbnM7XG5cblx0aWYgKCFjb3VudEFuc2lFc2NhcGVDb2Rlcykge1xuXHRcdHN0cmluZyA9IHN0cmlwQW5zaShzdHJpbmcpO1xuXHR9XG5cblx0aWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGxldCB3aWR0aCA9IDA7XG5cdGNvbnN0IGVhc3RBc2lhbldpZHRoT3B0aW9ucyA9IHthbWJpZ3VvdXNBc1dpZGU6ICFhbWJpZ3VvdXNJc05hcnJvd307XG5cblx0Zm9yIChjb25zdCB7c2VnbWVudDogY2hhcmFjdGVyfSBvZiBzZWdtZW50ZXIuc2VnbWVudChzdHJpbmcpKSB7XG5cdFx0Y29uc3QgY29kZVBvaW50ID0gY2hhcmFjdGVyLmNvZGVQb2ludEF0KDApO1xuXG5cdFx0Ly8gSWdub3JlIGNvbnRyb2wgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlUG9pbnQgPD0gMHgxRiB8fCAoY29kZVBvaW50ID49IDB4N0YgJiYgY29kZVBvaW50IDw9IDB4OUYpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgemVyby13aWR0aCBjaGFyYWN0ZXJzXG5cdFx0aWYgKFxuXHRcdFx0KGNvZGVQb2ludCA+PSAweDIwXzBCICYmIGNvZGVQb2ludCA8PSAweDIwXzBGKSAvLyBaZXJvLXdpZHRoIHNwYWNlLCBub24tam9pbmVyLCBqb2luZXIsIGxlZnQtdG8tcmlnaHQgbWFyaywgcmlnaHQtdG8tbGVmdCBtYXJrXG5cdFx0XHR8fCBjb2RlUG9pbnQgPT09IDB4RkVfRkYgLy8gWmVyby13aWR0aCBuby1icmVhayBzcGFjZVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIGNvbWJpbmluZyBjaGFyYWN0ZXJzXG5cdFx0aWYgKFxuXHRcdFx0KGNvZGVQb2ludCA+PSAweDNfMDAgJiYgY29kZVBvaW50IDw9IDB4M182RikgLy8gQ29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXG5cdFx0XHR8fCAoY29kZVBvaW50ID49IDB4MUFfQjAgJiYgY29kZVBvaW50IDw9IDB4MUFfRkYpIC8vIENvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBleHRlbmRlZFxuXHRcdFx0fHwgKGNvZGVQb2ludCA+PSAweDFEX0MwICYmIGNvZGVQb2ludCA8PSAweDFEX0ZGKSAvLyBDb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3Mgc3VwcGxlbWVudFxuXHRcdFx0fHwgKGNvZGVQb2ludCA+PSAweDIwX0QwICYmIGNvZGVQb2ludCA8PSAweDIwX0ZGKSAvLyBDb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3MgZm9yIHN5bWJvbHNcblx0XHRcdHx8IChjb2RlUG9pbnQgPj0gMHhGRV8yMCAmJiBjb2RlUG9pbnQgPD0gMHhGRV8yRikgLy8gQ29tYmluaW5nIGhhbGYgbWFya3Ncblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBzdXJyb2dhdGUgcGFpcnNcblx0XHRpZiAoY29kZVBvaW50ID49IDB4RDhfMDAgJiYgY29kZVBvaW50IDw9IDB4REZfRkYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSB2YXJpYXRpb24gc2VsZWN0b3JzXG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweEZFXzAwICYmIGNvZGVQb2ludCA8PSAweEZFXzBGKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBUaGlzIGNvdmVycyBzb21lIG9mIHRoZSBhYm92ZSBjYXNlcywgYnV0IHdlIHN0aWxsIGtlZXAgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cblx0XHRpZiAoZGVmYXVsdElnbm9yYWJsZUNvZGVQb2ludFJlZ2V4LnRlc3QoY2hhcmFjdGVyKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogVXNlIGAvXFxwe1JHSV9FbW9qaX0vdmAgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAyMC5cblx0XHRpZiAoZW1vamlSZWdleCgpLnRlc3QoY2hhcmFjdGVyKSkge1xuXHRcdFx0d2lkdGggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHdpZHRoICs9IGVhc3RBc2lhbldpZHRoKGNvZGVQb2ludCwgZWFzdEFzaWFuV2lkdGhPcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiB3aWR0aDtcbn1cbiIsICJjb25zdCBBTlNJX0JBQ0tHUk9VTkRfT0ZGU0VUID0gMTA7XG5cbmNvbnN0IHdyYXBBbnNpMTYgPSAob2Zmc2V0ID0gMCkgPT4gY29kZSA9PiBgXFx1MDAxQlske2NvZGUgKyBvZmZzZXR9bWA7XG5cbmNvbnN0IHdyYXBBbnNpMjU2ID0gKG9mZnNldCA9IDApID0+IGNvZGUgPT4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07NTske2NvZGV9bWA7XG5cbmNvbnN0IHdyYXBBbnNpMTZtID0gKG9mZnNldCA9IDApID0+IChyZWQsIGdyZWVuLCBibHVlKSA9PiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTsyOyR7cmVkfTske2dyZWVufTske2JsdWV9bWA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0bW9kaWZpZXI6IHtcblx0XHRyZXNldDogWzAsIDBdLFxuXHRcdC8vIDIxIGlzbid0IHdpZGVseSBzdXBwb3J0ZWQgYW5kIDIyIGRvZXMgdGhlIHNhbWUgdGhpbmdcblx0XHRib2xkOiBbMSwgMjJdLFxuXHRcdGRpbTogWzIsIDIyXSxcblx0XHRpdGFsaWM6IFszLCAyM10sXG5cdFx0dW5kZXJsaW5lOiBbNCwgMjRdLFxuXHRcdG92ZXJsaW5lOiBbNTMsIDU1XSxcblx0XHRpbnZlcnNlOiBbNywgMjddLFxuXHRcdGhpZGRlbjogWzgsIDI4XSxcblx0XHRzdHJpa2V0aHJvdWdoOiBbOSwgMjldLFxuXHR9LFxuXHRjb2xvcjoge1xuXHRcdGJsYWNrOiBbMzAsIDM5XSxcblx0XHRyZWQ6IFszMSwgMzldLFxuXHRcdGdyZWVuOiBbMzIsIDM5XSxcblx0XHR5ZWxsb3c6IFszMywgMzldLFxuXHRcdGJsdWU6IFszNCwgMzldLFxuXHRcdG1hZ2VudGE6IFszNSwgMzldLFxuXHRcdGN5YW46IFszNiwgMzldLFxuXHRcdHdoaXRlOiBbMzcsIDM5XSxcblxuXHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdGJsYWNrQnJpZ2h0OiBbOTAsIDM5XSxcblx0XHRncmF5OiBbOTAsIDM5XSwgLy8gQWxpYXMgb2YgYGJsYWNrQnJpZ2h0YFxuXHRcdGdyZXk6IFs5MCwgMzldLCAvLyBBbGlhcyBvZiBgYmxhY2tCcmlnaHRgXG5cdFx0cmVkQnJpZ2h0OiBbOTEsIDM5XSxcblx0XHRncmVlbkJyaWdodDogWzkyLCAzOV0sXG5cdFx0eWVsbG93QnJpZ2h0OiBbOTMsIDM5XSxcblx0XHRibHVlQnJpZ2h0OiBbOTQsIDM5XSxcblx0XHRtYWdlbnRhQnJpZ2h0OiBbOTUsIDM5XSxcblx0XHRjeWFuQnJpZ2h0OiBbOTYsIDM5XSxcblx0XHR3aGl0ZUJyaWdodDogWzk3LCAzOV0sXG5cdH0sXG5cdGJnQ29sb3I6IHtcblx0XHRiZ0JsYWNrOiBbNDAsIDQ5XSxcblx0XHRiZ1JlZDogWzQxLCA0OV0sXG5cdFx0YmdHcmVlbjogWzQyLCA0OV0sXG5cdFx0YmdZZWxsb3c6IFs0MywgNDldLFxuXHRcdGJnQmx1ZTogWzQ0LCA0OV0sXG5cdFx0YmdNYWdlbnRhOiBbNDUsIDQ5XSxcblx0XHRiZ0N5YW46IFs0NiwgNDldLFxuXHRcdGJnV2hpdGU6IFs0NywgNDldLFxuXG5cdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0YmdCbGFja0JyaWdodDogWzEwMCwgNDldLFxuXHRcdGJnR3JheTogWzEwMCwgNDldLCAvLyBBbGlhcyBvZiBgYmdCbGFja0JyaWdodGBcblx0XHRiZ0dyZXk6IFsxMDAsIDQ5XSwgLy8gQWxpYXMgb2YgYGJnQmxhY2tCcmlnaHRgXG5cdFx0YmdSZWRCcmlnaHQ6IFsxMDEsIDQ5XSxcblx0XHRiZ0dyZWVuQnJpZ2h0OiBbMTAyLCA0OV0sXG5cdFx0YmdZZWxsb3dCcmlnaHQ6IFsxMDMsIDQ5XSxcblx0XHRiZ0JsdWVCcmlnaHQ6IFsxMDQsIDQ5XSxcblx0XHRiZ01hZ2VudGFCcmlnaHQ6IFsxMDUsIDQ5XSxcblx0XHRiZ0N5YW5CcmlnaHQ6IFsxMDYsIDQ5XSxcblx0XHRiZ1doaXRlQnJpZ2h0OiBbMTA3LCA0OV0sXG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgbW9kaWZpZXJOYW1lcyA9IE9iamVjdC5rZXlzKHN0eWxlcy5tb2RpZmllcik7XG5leHBvcnQgY29uc3QgZm9yZWdyb3VuZENvbG9yTmFtZXMgPSBPYmplY3Qua2V5cyhzdHlsZXMuY29sb3IpO1xuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvck5hbWVzID0gT2JqZWN0LmtleXMoc3R5bGVzLmJnQ29sb3IpO1xuZXhwb3J0IGNvbnN0IGNvbG9yTmFtZXMgPSBbLi4uZm9yZWdyb3VuZENvbG9yTmFtZXMsIC4uLmJhY2tncm91bmRDb2xvck5hbWVzXTtcblxuZnVuY3Rpb24gYXNzZW1ibGVTdHlsZXMoKSB7XG5cdGNvbnN0IGNvZGVzID0gbmV3IE1hcCgpO1xuXG5cdGZvciAoY29uc3QgW2dyb3VwTmFtZSwgZ3JvdXBdIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxlcykpIHtcblx0XHRmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlXSBvZiBPYmplY3QuZW50cmllcyhncm91cCkpIHtcblx0XHRcdHN0eWxlc1tzdHlsZU5hbWVdID0ge1xuXHRcdFx0XHRvcGVuOiBgXFx1MDAxQlske3N0eWxlWzBdfW1gLFxuXHRcdFx0XHRjbG9zZTogYFxcdTAwMUJbJHtzdHlsZVsxXX1tYCxcblx0XHRcdH07XG5cblx0XHRcdGdyb3VwW3N0eWxlTmFtZV0gPSBzdHlsZXNbc3R5bGVOYW1lXTtcblxuXHRcdFx0Y29kZXMuc2V0KHN0eWxlWzBdLCBzdHlsZVsxXSk7XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHN0eWxlcywgZ3JvdXBOYW1lLCB7XG5cdFx0XHR2YWx1ZTogZ3JvdXAsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHR9KTtcblx0fVxuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsICdjb2RlcycsIHtcblx0XHR2YWx1ZTogY29kZXMsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdH0pO1xuXG5cdHN0eWxlcy5jb2xvci5jbG9zZSA9ICdcXHUwMDFCWzM5bSc7XG5cdHN0eWxlcy5iZ0NvbG9yLmNsb3NlID0gJ1xcdTAwMUJbNDltJztcblxuXHRzdHlsZXMuY29sb3IuYW5zaSA9IHdyYXBBbnNpMTYoKTtcblx0c3R5bGVzLmNvbG9yLmFuc2kyNTYgPSB3cmFwQW5zaTI1NigpO1xuXHRzdHlsZXMuY29sb3IuYW5zaTE2bSA9IHdyYXBBbnNpMTZtKCk7XG5cdHN0eWxlcy5iZ0NvbG9yLmFuc2kgPSB3cmFwQW5zaTE2KEFOU0lfQkFDS0dST1VORF9PRkZTRVQpO1xuXHRzdHlsZXMuYmdDb2xvci5hbnNpMjU2ID0gd3JhcEFuc2kyNTYoQU5TSV9CQUNLR1JPVU5EX09GRlNFVCk7XG5cdHN0eWxlcy5iZ0NvbG9yLmFuc2kxNm0gPSB3cmFwQW5zaTE2bShBTlNJX0JBQ0tHUk9VTkRfT0ZGU0VUKTtcblxuXHQvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9RaXgtL2NvbG9yLWNvbnZlcnQvYmxvYi8zZjBlMGQ0ZTkyZTIzNTc5NmNjYjE3ZjZlODVjNzIwOTRhNjUxZjQ5L2NvbnZlcnNpb25zLmpzXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0eWxlcywge1xuXHRcdHJnYlRvQW5zaTI1Njoge1xuXHRcdFx0dmFsdWU6IChyZWQsIGdyZWVuLCBibHVlKSA9PiB7XG5cdFx0XHRcdC8vIFdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdFx0XHRcdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRcdFx0XHRpZiAocmVkID09PSBncmVlbiAmJiBncmVlbiA9PT0gYmx1ZSkge1xuXHRcdFx0XHRcdGlmIChyZWQgPCA4KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTY7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlZCA+IDI0OCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDIzMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHJlZCAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAxNlxuXHRcdFx0XHRcdCsgKDM2ICogTWF0aC5yb3VuZChyZWQgLyAyNTUgKiA1KSlcblx0XHRcdFx0XHQrICg2ICogTWF0aC5yb3VuZChncmVlbiAvIDI1NSAqIDUpKVxuXHRcdFx0XHRcdCsgTWF0aC5yb3VuZChibHVlIC8gMjU1ICogNSk7XG5cdFx0XHR9LFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHRoZXhUb1JnYjoge1xuXHRcdFx0dmFsdWU6IGhleCA9PiB7XG5cdFx0XHRcdGNvbnN0IG1hdGNoZXMgPSAvW2EtZlxcZF17Nn18W2EtZlxcZF17M30vaS5leGVjKGhleC50b1N0cmluZygxNikpO1xuXHRcdFx0XHRpZiAoIW1hdGNoZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IFtjb2xvclN0cmluZ10gPSBtYXRjaGVzO1xuXG5cdFx0XHRcdGlmIChjb2xvclN0cmluZy5sZW5ndGggPT09IDMpIHtcblx0XHRcdFx0XHRjb2xvclN0cmluZyA9IFsuLi5jb2xvclN0cmluZ10ubWFwKGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIgKyBjaGFyYWN0ZXIpLmpvaW4oJycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaW50ZWdlciA9IE51bWJlci5wYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXHRcdFx0XHRcdChpbnRlZ2VyID4+IDE2KSAmIDB4RkYsXG5cdFx0XHRcdFx0KGludGVnZXIgPj4gOCkgJiAweEZGLFxuXHRcdFx0XHRcdGludGVnZXIgJiAweEZGLFxuXHRcdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSAqL1xuXHRcdFx0XHRdO1xuXHRcdFx0fSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0aGV4VG9BbnNpMjU2OiB7XG5cdFx0XHR2YWx1ZTogaGV4ID0+IHN0eWxlcy5yZ2JUb0Fuc2kyNTYoLi4uc3R5bGVzLmhleFRvUmdiKGhleCkpLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHRhbnNpMjU2VG9BbnNpOiB7XG5cdFx0XHR2YWx1ZTogY29kZSA9PiB7XG5cdFx0XHRcdGlmIChjb2RlIDwgOCkge1xuXHRcdFx0XHRcdHJldHVybiAzMCArIGNvZGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29kZSA8IDE2KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDkwICsgKGNvZGUgLSA4KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCByZWQ7XG5cdFx0XHRcdGxldCBncmVlbjtcblx0XHRcdFx0bGV0IGJsdWU7XG5cblx0XHRcdFx0aWYgKGNvZGUgPj0gMjMyKSB7XG5cdFx0XHRcdFx0cmVkID0gKCgoY29kZSAtIDIzMikgKiAxMCkgKyA4KSAvIDI1NTtcblx0XHRcdFx0XHRncmVlbiA9IHJlZDtcblx0XHRcdFx0XHRibHVlID0gcmVkO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvZGUgLT0gMTY7XG5cblx0XHRcdFx0XHRjb25zdCByZW1haW5kZXIgPSBjb2RlICUgMzY7XG5cblx0XHRcdFx0XHRyZWQgPSBNYXRoLmZsb29yKGNvZGUgLyAzNikgLyA1O1xuXHRcdFx0XHRcdGdyZWVuID0gTWF0aC5mbG9vcihyZW1haW5kZXIgLyA2KSAvIDU7XG5cdFx0XHRcdFx0Ymx1ZSA9IChyZW1haW5kZXIgJSA2KSAvIDU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpICogMjtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gMzA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gMzAgKyAoKE1hdGgucm91bmQoYmx1ZSkgPDwgMikgfCAoTWF0aC5yb3VuZChncmVlbikgPDwgMSkgfCBNYXRoLnJvdW5kKHJlZCkpO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdFx0XHRcdHJlc3VsdCArPSA2MDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHRyZ2JUb0Fuc2k6IHtcblx0XHRcdHZhbHVlOiAocmVkLCBncmVlbiwgYmx1ZSkgPT4gc3R5bGVzLmFuc2kyNTZUb0Fuc2koc3R5bGVzLnJnYlRvQW5zaTI1NihyZWQsIGdyZWVuLCBibHVlKSksXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHR9LFxuXHRcdGhleFRvQW5zaToge1xuXHRcdFx0dmFsdWU6IGhleCA9PiBzdHlsZXMuYW5zaTI1NlRvQW5zaShzdHlsZXMuaGV4VG9BbnNpMjU2KGhleCkpLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuY29uc3QgYW5zaVN0eWxlcyA9IGFzc2VtYmxlU3R5bGVzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFuc2lTdHlsZXM7XG4iLCAiaW1wb3J0IHN0cmluZ1dpZHRoIGZyb20gJ3N0cmluZy13aWR0aCc7XG5pbXBvcnQgc3RyaXBBbnNpIGZyb20gJ3N0cmlwLWFuc2knO1xuaW1wb3J0IGFuc2lTdHlsZXMgZnJvbSAnYW5zaS1zdHlsZXMnO1xuXG5jb25zdCBFU0NBUEVTID0gbmV3IFNldChbXG5cdCdcXHUwMDFCJyxcblx0J1xcdTAwOUInLFxuXSk7XG5cbmNvbnN0IEVORF9DT0RFID0gMzk7XG5jb25zdCBBTlNJX0VTQ0FQRV9CRUxMID0gJ1xcdTAwMDcnO1xuY29uc3QgQU5TSV9DU0kgPSAnWyc7XG5jb25zdCBBTlNJX09TQyA9ICddJztcbmNvbnN0IEFOU0lfU0dSX1RFUk1JTkFUT1IgPSAnbSc7XG5jb25zdCBBTlNJX0VTQ0FQRV9MSU5LID0gYCR7QU5TSV9PU0N9ODs7YDtcblxuY29uc3Qgd3JhcEFuc2lDb2RlID0gY29kZSA9PiBgJHtFU0NBUEVTLnZhbHVlcygpLm5leHQoKS52YWx1ZX0ke0FOU0lfQ1NJfSR7Y29kZX0ke0FOU0lfU0dSX1RFUk1JTkFUT1J9YDtcbmNvbnN0IHdyYXBBbnNpSHlwZXJsaW5rID0gdXJsID0+IGAke0VTQ0FQRVMudmFsdWVzKCkubmV4dCgpLnZhbHVlfSR7QU5TSV9FU0NBUEVfTElOS30ke3VybH0ke0FOU0lfRVNDQVBFX0JFTEx9YDtcblxuLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2Ygd29yZHMgc3BsaXQgb24gJyAnLCBpZ25vcmluZ1xuLy8gdGhlIGV4dHJhIGNoYXJhY3RlcnMgYWRkZWQgYnkgYW5zaSBlc2NhcGUgY29kZXNcbmNvbnN0IHdvcmRMZW5ndGhzID0gc3RyaW5nID0+IHN0cmluZy5zcGxpdCgnICcpLm1hcChjaGFyYWN0ZXIgPT4gc3RyaW5nV2lkdGgoY2hhcmFjdGVyKSk7XG5cbi8vIFdyYXAgYSBsb25nIHdvcmQgYWNyb3NzIG11bHRpcGxlIHJvd3Ncbi8vIEFuc2kgZXNjYXBlIGNvZGVzIGRvIG5vdCBjb3VudCB0b3dhcmRzIGxlbmd0aFxuY29uc3Qgd3JhcFdvcmQgPSAocm93cywgd29yZCwgY29sdW1ucykgPT4ge1xuXHRjb25zdCBjaGFyYWN0ZXJzID0gWy4uLndvcmRdO1xuXG5cdGxldCBpc0luc2lkZUVzY2FwZSA9IGZhbHNlO1xuXHRsZXQgaXNJbnNpZGVMaW5rRXNjYXBlID0gZmFsc2U7XG5cdGxldCB2aXNpYmxlID0gc3RyaW5nV2lkdGgoc3RyaXBBbnNpKHJvd3MuYXQoLTEpKSk7XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIGNoYXJhY3Rlcl0gb2YgY2hhcmFjdGVycy5lbnRyaWVzKCkpIHtcblx0XHRjb25zdCBjaGFyYWN0ZXJMZW5ndGggPSBzdHJpbmdXaWR0aChjaGFyYWN0ZXIpO1xuXG5cdFx0aWYgKHZpc2libGUgKyBjaGFyYWN0ZXJMZW5ndGggPD0gY29sdW1ucykge1xuXHRcdFx0cm93c1tyb3dzLmxlbmd0aCAtIDFdICs9IGNoYXJhY3Rlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cm93cy5wdXNoKGNoYXJhY3Rlcik7XG5cdFx0XHR2aXNpYmxlID0gMDtcblx0XHR9XG5cblx0XHRpZiAoRVNDQVBFUy5oYXMoY2hhcmFjdGVyKSkge1xuXHRcdFx0aXNJbnNpZGVFc2NhcGUgPSB0cnVlO1xuXG5cdFx0XHRjb25zdCBhbnNpRXNjYXBlTGlua0NhbmRpZGF0ZSA9IGNoYXJhY3RlcnMuc2xpY2UoaW5kZXggKyAxLCBpbmRleCArIDEgKyBBTlNJX0VTQ0FQRV9MSU5LLmxlbmd0aCkuam9pbignJyk7XG5cdFx0XHRpc0luc2lkZUxpbmtFc2NhcGUgPSBhbnNpRXNjYXBlTGlua0NhbmRpZGF0ZSA9PT0gQU5TSV9FU0NBUEVfTElOSztcblx0XHR9XG5cblx0XHRpZiAoaXNJbnNpZGVFc2NhcGUpIHtcblx0XHRcdGlmIChpc0luc2lkZUxpbmtFc2NhcGUpIHtcblx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PT0gQU5TSV9FU0NBUEVfQkVMTCkge1xuXHRcdFx0XHRcdGlzSW5zaWRlRXNjYXBlID0gZmFsc2U7XG5cdFx0XHRcdFx0aXNJbnNpZGVMaW5rRXNjYXBlID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBBTlNJX1NHUl9URVJNSU5BVE9SKSB7XG5cdFx0XHRcdGlzSW5zaWRlRXNjYXBlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZpc2libGUgKz0gY2hhcmFjdGVyTGVuZ3RoO1xuXG5cdFx0aWYgKHZpc2libGUgPT09IGNvbHVtbnMgJiYgaW5kZXggPCBjaGFyYWN0ZXJzLmxlbmd0aCAtIDEpIHtcblx0XHRcdHJvd3MucHVzaCgnJyk7XG5cdFx0XHR2aXNpYmxlID0gMDtcblx0XHR9XG5cdH1cblxuXHQvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhlIGxhc3Qgcm93IHdlIGNvcHkgb3ZlciBpcyBvbmx5XG5cdC8vIGFuc2kgZXNjYXBlIGNoYXJhY3RlcnMsIGhhbmRsZSB0aGlzIGVkZ2UtY2FzZVxuXHRpZiAoIXZpc2libGUgJiYgcm93cy5hdCgtMSkubGVuZ3RoID4gMCAmJiByb3dzLmxlbmd0aCA+IDEpIHtcblx0XHRyb3dzW3Jvd3MubGVuZ3RoIC0gMl0gKz0gcm93cy5wb3AoKTtcblx0fVxufTtcblxuLy8gVHJpbXMgc3BhY2VzIGZyb20gYSBzdHJpbmcgaWdub3JpbmcgaW52aXNpYmxlIHNlcXVlbmNlc1xuY29uc3Qgc3RyaW5nVmlzaWJsZVRyaW1TcGFjZXNSaWdodCA9IHN0cmluZyA9PiB7XG5cdGNvbnN0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcgJyk7XG5cdGxldCBsYXN0ID0gd29yZHMubGVuZ3RoO1xuXG5cdHdoaWxlIChsYXN0ID4gMCkge1xuXHRcdGlmIChzdHJpbmdXaWR0aCh3b3Jkc1tsYXN0IC0gMV0pID4gMCkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0bGFzdC0tO1xuXHR9XG5cblx0aWYgKGxhc3QgPT09IHdvcmRzLmxlbmd0aCkge1xuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gd29yZHMuc2xpY2UoMCwgbGFzdCkuam9pbignICcpICsgd29yZHMuc2xpY2UobGFzdCkuam9pbignJyk7XG59O1xuXG4vLyBUaGUgd3JhcC1hbnNpIG1vZHVsZSBjYW4gYmUgaW52b2tlZCBpbiBlaXRoZXIgJ2hhcmQnIG9yICdzb2Z0JyB3cmFwIG1vZGUuXG4vL1xuLy8gJ2hhcmQnIHdpbGwgbmV2ZXIgYWxsb3cgYSBzdHJpbmcgdG8gdGFrZSB1cCBtb3JlIHRoYW4gY29sdW1ucyBjaGFyYWN0ZXJzLlxuLy9cbi8vICdzb2Z0JyBhbGxvd3MgbG9uZyB3b3JkcyB0byBleHBhbmQgcGFzdCB0aGUgY29sdW1uIGxlbmd0aC5cbmNvbnN0IGV4ZWMgPSAoc3RyaW5nLCBjb2x1bW5zLCBvcHRpb25zID0ge30pID0+IHtcblx0aWYgKG9wdGlvbnMudHJpbSAhPT0gZmFsc2UgJiYgc3RyaW5nLnRyaW0oKSA9PT0gJycpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRsZXQgcmV0dXJuVmFsdWUgPSAnJztcblx0bGV0IGVzY2FwZUNvZGU7XG5cdGxldCBlc2NhcGVVcmw7XG5cblx0Y29uc3QgbGVuZ3RocyA9IHdvcmRMZW5ndGhzKHN0cmluZyk7XG5cdGxldCByb3dzID0gWycnXTtcblxuXHRmb3IgKGNvbnN0IFtpbmRleCwgd29yZF0gb2Ygc3RyaW5nLnNwbGl0KCcgJykuZW50cmllcygpKSB7XG5cdFx0aWYgKG9wdGlvbnMudHJpbSAhPT0gZmFsc2UpIHtcblx0XHRcdHJvd3Nbcm93cy5sZW5ndGggLSAxXSA9IHJvd3MuYXQoLTEpLnRyaW1TdGFydCgpO1xuXHRcdH1cblxuXHRcdGxldCByb3dMZW5ndGggPSBzdHJpbmdXaWR0aChyb3dzLmF0KC0xKSk7XG5cblx0XHRpZiAoaW5kZXggIT09IDApIHtcblx0XHRcdGlmIChyb3dMZW5ndGggPj0gY29sdW1ucyAmJiAob3B0aW9ucy53b3JkV3JhcCA9PT0gZmFsc2UgfHwgb3B0aW9ucy50cmltID09PSBmYWxzZSkpIHtcblx0XHRcdFx0Ly8gSWYgd2Ugc3RhcnQgd2l0aCBhIG5ldyB3b3JkIGJ1dCB0aGUgY3VycmVudCByb3cgbGVuZ3RoIGVxdWFscyB0aGUgbGVuZ3RoIG9mIHRoZSBjb2x1bW5zLCBhZGQgYSBuZXcgcm93XG5cdFx0XHRcdHJvd3MucHVzaCgnJyk7XG5cdFx0XHRcdHJvd0xlbmd0aCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyb3dMZW5ndGggPiAwIHx8IG9wdGlvbnMudHJpbSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cm93c1tyb3dzLmxlbmd0aCAtIDFdICs9ICcgJztcblx0XHRcdFx0cm93TGVuZ3RoKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSW4gJ2hhcmQnIHdyYXAgbW9kZSwgdGhlIGxlbmd0aCBvZiBhIGxpbmUgaXMgbmV2ZXIgYWxsb3dlZCB0byBleHRlbmQgcGFzdCAnY29sdW1ucydcblx0XHRpZiAob3B0aW9ucy5oYXJkICYmIGxlbmd0aHNbaW5kZXhdID4gY29sdW1ucykge1xuXHRcdFx0Y29uc3QgcmVtYWluaW5nQ29sdW1ucyA9IChjb2x1bW5zIC0gcm93TGVuZ3RoKTtcblx0XHRcdGNvbnN0IGJyZWFrc1N0YXJ0aW5nVGhpc0xpbmUgPSAxICsgTWF0aC5mbG9vcigobGVuZ3Roc1tpbmRleF0gLSByZW1haW5pbmdDb2x1bW5zIC0gMSkgLyBjb2x1bW5zKTtcblx0XHRcdGNvbnN0IGJyZWFrc1N0YXJ0aW5nTmV4dExpbmUgPSBNYXRoLmZsb29yKChsZW5ndGhzW2luZGV4XSAtIDEpIC8gY29sdW1ucyk7XG5cdFx0XHRpZiAoYnJlYWtzU3RhcnRpbmdOZXh0TGluZSA8IGJyZWFrc1N0YXJ0aW5nVGhpc0xpbmUpIHtcblx0XHRcdFx0cm93cy5wdXNoKCcnKTtcblx0XHRcdH1cblxuXHRcdFx0d3JhcFdvcmQocm93cywgd29yZCwgY29sdW1ucyk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAocm93TGVuZ3RoICsgbGVuZ3Roc1tpbmRleF0gPiBjb2x1bW5zICYmIHJvd0xlbmd0aCA+IDAgJiYgbGVuZ3Roc1tpbmRleF0gPiAwKSB7XG5cdFx0XHRpZiAob3B0aW9ucy53b3JkV3JhcCA9PT0gZmFsc2UgJiYgcm93TGVuZ3RoIDwgY29sdW1ucykge1xuXHRcdFx0XHR3cmFwV29yZChyb3dzLCB3b3JkLCBjb2x1bW5zKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHJvd3MucHVzaCgnJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHJvd0xlbmd0aCArIGxlbmd0aHNbaW5kZXhdID4gY29sdW1ucyAmJiBvcHRpb25zLndvcmRXcmFwID09PSBmYWxzZSkge1xuXHRcdFx0d3JhcFdvcmQocm93cywgd29yZCwgY29sdW1ucyk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyb3dzW3Jvd3MubGVuZ3RoIC0gMV0gKz0gd29yZDtcblx0fVxuXG5cdGlmIChvcHRpb25zLnRyaW0gIT09IGZhbHNlKSB7XG5cdFx0cm93cyA9IHJvd3MubWFwKHJvdyA9PiBzdHJpbmdWaXNpYmxlVHJpbVNwYWNlc1JpZ2h0KHJvdykpO1xuXHR9XG5cblx0Y29uc3QgcHJlU3RyaW5nID0gcm93cy5qb2luKCdcXG4nKTtcblx0Y29uc3QgcHJlID0gWy4uLnByZVN0cmluZ107XG5cblx0Ly8gV2UgbmVlZCB0byBrZWVwIGEgc2VwYXJhdGUgaW5kZXggYXMgYFN0cmluZyNzbGljZSgpYCB3b3JrcyBvbiBVbmljb2RlIGNvZGUgdW5pdHMsIHdoaWxlIGBwcmVgIGlzIGFuIGFycmF5IG9mIGNvZGVwb2ludHMuXG5cdGxldCBwcmVTdHJpbmdJbmRleCA9IDA7XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIGNoYXJhY3Rlcl0gb2YgcHJlLmVudHJpZXMoKSkge1xuXHRcdHJldHVyblZhbHVlICs9IGNoYXJhY3RlcjtcblxuXHRcdGlmIChFU0NBUEVTLmhhcyhjaGFyYWN0ZXIpKSB7XG5cdFx0XHRjb25zdCB7Z3JvdXBzfSA9IG5ldyBSZWdFeHAoYCg/OlxcXFwke0FOU0lfQ1NJfSg/PGNvZGU+XFxcXGQrKW18XFxcXCR7QU5TSV9FU0NBUEVfTElOS30oPzx1cmk+LiopJHtBTlNJX0VTQ0FQRV9CRUxMfSlgKS5leGVjKHByZVN0cmluZy5zbGljZShwcmVTdHJpbmdJbmRleCkpIHx8IHtncm91cHM6IHt9fTtcblx0XHRcdGlmIChncm91cHMuY29kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnN0IGNvZGUgPSBOdW1iZXIucGFyc2VGbG9hdChncm91cHMuY29kZSk7XG5cdFx0XHRcdGVzY2FwZUNvZGUgPSBjb2RlID09PSBFTkRfQ09ERSA/IHVuZGVmaW5lZCA6IGNvZGU7XG5cdFx0XHR9IGVsc2UgaWYgKGdyb3Vwcy51cmkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlc2NhcGVVcmwgPSBncm91cHMudXJpLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IGdyb3Vwcy51cmk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29kZSA9IGFuc2lTdHlsZXMuY29kZXMuZ2V0KE51bWJlcihlc2NhcGVDb2RlKSk7XG5cblx0XHRpZiAocHJlW2luZGV4ICsgMV0gPT09ICdcXG4nKSB7XG5cdFx0XHRpZiAoZXNjYXBlVXJsKSB7XG5cdFx0XHRcdHJldHVyblZhbHVlICs9IHdyYXBBbnNpSHlwZXJsaW5rKCcnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGVzY2FwZUNvZGUgJiYgY29kZSkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSArPSB3cmFwQW5zaUNvZGUoY29kZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09ICdcXG4nKSB7XG5cdFx0XHRpZiAoZXNjYXBlQ29kZSAmJiBjb2RlKSB7XG5cdFx0XHRcdHJldHVyblZhbHVlICs9IHdyYXBBbnNpQ29kZShlc2NhcGVDb2RlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGVzY2FwZVVybCkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSArPSB3cmFwQW5zaUh5cGVybGluayhlc2NhcGVVcmwpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByZVN0cmluZ0luZGV4ICs9IGNoYXJhY3Rlci5sZW5ndGg7XG5cdH1cblxuXHRyZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vLyBGb3IgZWFjaCBuZXdsaW5lLCBpbnZva2UgdGhlIG1ldGhvZCBzZXBhcmF0ZWx5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3cmFwQW5zaShzdHJpbmcsIGNvbHVtbnMsIG9wdGlvbnMpIHtcblx0cmV0dXJuIFN0cmluZyhzdHJpbmcpXG5cdFx0Lm5vcm1hbGl6ZSgpXG5cdFx0LnJlcGxhY2VBbGwoJ1xcclxcbicsICdcXG4nKVxuXHRcdC5zcGxpdCgnXFxuJylcblx0XHQubWFwKGxpbmUgPT4gZXhlYyhsaW5lLCBjb2x1bW5zLCBvcHRpb25zKSlcblx0XHQuam9pbignXFxuJyk7XG59XG4iLCAiLy8gQm9vdHN0cmFwIGNsaXVpIHdpdGggQ29tbW9uSlMgZGVwZW5kZW5jaWVzOlxuaW1wb3J0IHsgY2xpdWkgfSBmcm9tICcuL2J1aWxkL2xpYi9pbmRleC5qcydcbmltcG9ydCBzdHJpbmdXaWR0aCBmcm9tICdzdHJpbmctd2lkdGgnXG5pbXBvcnQgc3RyaXBBbnNpIGZyb20gJ3N0cmlwLWFuc2knXG5pbXBvcnQgd3JhcEFuc2kgZnJvbSAnd3JhcC1hbnNpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1aSAob3B0cykge1xuICByZXR1cm4gY2xpdWkob3B0cywge1xuICAgIHN0cmluZ1dpZHRoLFxuICAgIHN0cmlwQW5zaSxcbiAgICB3cmFwOiB3cmFwQW5zaVxuICB9KVxufVxuXG5leHBvcnQge3VpIGFzICdtb2R1bGUuZXhwb3J0cyd9O1xuIiwgImltcG9ydCB7IGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHJlYWRkaXJTeW5jLCBzdGF0U3luYyB9IGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXJ0LCBjYWxsYmFjaykge1xuXHRsZXQgZGlyID0gcmVzb2x2ZSgnLicsIHN0YXJ0KTtcblx0bGV0IHRtcCwgc3RhdHMgPSBzdGF0U3luYyhkaXIpO1xuXG5cdGlmICghc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuXHRcdGRpciA9IGRpcm5hbWUoZGlyKTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dG1wID0gY2FsbGJhY2soZGlyLCByZWFkZGlyU3luYyhkaXIpKTtcblx0XHRpZiAodG1wKSByZXR1cm4gcmVzb2x2ZShkaXIsIHRtcCk7XG5cdFx0ZGlyID0gZGlybmFtZSh0bXAgPSBkaXIpO1xuXHRcdGlmICh0bXAgPT09IGRpcikgYnJlYWs7XG5cdH1cbn1cbiIsICIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgTWFpbiBlbnRyeXBvaW50IGZvciBsaWJyYXJpZXMgdXNpbmcgeWFyZ3MtcGFyc2VyIGluIE5vZGUuanNcbiAqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBDb250cmlidXRvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBJU0NcbiAqL1xudmFyIF9hLCBfYiwgX2M7XG4vKiBlc2xpbnQtZGlzYWJsZSBuL25vLXVucHVibGlzaGVkLWltcG9ydCAqL1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBub3JtYWxpemUsIHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGNhbWVsQ2FzZSwgZGVjYW1lbGl6ZSwgbG9va3NMaWtlTnVtYmVyIH0gZnJvbSAnLi9zdHJpbmctdXRpbHMuanMnO1xuaW1wb3J0IHsgWWFyZ3NQYXJzZXIgfSBmcm9tICcuL3lhcmdzLXBhcnNlci5qcyc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnO1xuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS95YXJncy95YXJncy1wYXJzZXIjc3VwcG9ydGVkLW5vZGVqcy12ZXJzaW9ucyBmb3Igb3VyXG4vLyB2ZXJzaW9uIHN1cHBvcnQgcG9saWN5LiBUaGUgWUFSR1NfTUlOX05PREVfVkVSU0lPTiBpcyB1c2VkIGZvciB0ZXN0aW5nIG9ubHkuXG5jb25zdCBtaW5Ob2RlVmVyc2lvbiA9IChwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52LllBUkdTX01JTl9OT0RFX1ZFUlNJT04pXG4gICAgPyBOdW1iZXIocHJvY2Vzcy5lbnYuWUFSR1NfTUlOX05PREVfVkVSU0lPTilcbiAgICA6IDIwO1xuY29uc3Qgbm9kZVZlcnNpb24gPSAoX2IgPSAoX2EgPSBwcm9jZXNzID09PSBudWxsIHx8IHByb2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2Nlc3MudmVyc2lvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAoX2MgPSBwcm9jZXNzID09PSBudWxsIHx8IHByb2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2Nlc3MudmVyc2lvbikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNsaWNlKDEpO1xuaWYgKG5vZGVWZXJzaW9uKSB7XG4gICAgY29uc3QgbWFqb3IgPSBOdW1iZXIobm9kZVZlcnNpb24ubWF0Y2goL14oW14uXSspLylbMV0pO1xuICAgIGlmIChtYWpvciA8IG1pbk5vZGVWZXJzaW9uKSB7XG4gICAgICAgIHRocm93IEVycm9yKGB5YXJncyBwYXJzZXIgc3VwcG9ydHMgYSBtaW5pbXVtIE5vZGUuanMgdmVyc2lvbiBvZiAke21pbk5vZGVWZXJzaW9ufS4gUmVhZCBvdXIgdmVyc2lvbiBzdXBwb3J0IHBvbGljeTogaHR0cHM6Ly9naXRodWIuY29tL3lhcmdzL3lhcmdzLXBhcnNlciNzdXBwb3J0ZWQtbm9kZWpzLXZlcnNpb25zYCk7XG4gICAgfVxufVxuLy8gQ3JlYXRlcyBhIHlhcmdzLXBhcnNlciBpbnN0YW5jZSB1c2luZyBOb2RlLmpzIHN0YW5kYXJkIGxpYnJhcmllczpcbmNvbnN0IGVudiA9IHByb2Nlc3MgPyBwcm9jZXNzLmVudiA6IHt9O1xuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUgPyBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCkgOiB1bmRlZmluZWQ7XG5jb25zdCBwYXJzZXIgPSBuZXcgWWFyZ3NQYXJzZXIoe1xuICAgIGN3ZDogcHJvY2Vzcy5jd2QsXG4gICAgZW52OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbnY7XG4gICAgfSxcbiAgICBmb3JtYXQsXG4gICAgbm9ybWFsaXplLFxuICAgIHJlc29sdmUsXG4gICAgcmVxdWlyZTogKHBhdGgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUocGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aC5tYXRjaCgvXFwuanNvbiQvKSkge1xuICAgICAgICAgICAgLy8gQWRkcmVzc2VzOiBodHRwczovL2dpdGh1Yi5jb20veWFyZ3MveWFyZ3MvaXNzdWVzLzIwNDBcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhwYXRoLCAndXRmOCcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdvbmx5IC5qc29uIGNvbmZpZyBmaWxlcyBhcmUgc3VwcG9ydGVkIGluIEVTTScpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5jb25zdCB5YXJnc1BhcnNlciA9IGZ1bmN0aW9uIFBhcnNlcihhcmdzLCBvcHRzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gcGFyc2VyLnBhcnNlKGFyZ3Muc2xpY2UoKSwgb3B0cyk7XG4gICAgcmV0dXJuIHJlc3VsdC5hcmd2O1xufTtcbnlhcmdzUGFyc2VyLmRldGFpbGVkID0gZnVuY3Rpb24gKGFyZ3MsIG9wdHMpIHtcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlKGFyZ3Muc2xpY2UoKSwgb3B0cyk7XG59O1xueWFyZ3NQYXJzZXIuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xueWFyZ3NQYXJzZXIuZGVjYW1lbGl6ZSA9IGRlY2FtZWxpemU7XG55YXJnc1BhcnNlci5sb29rc0xpa2VOdW1iZXIgPSBsb29rc0xpa2VOdW1iZXI7XG5leHBvcnQgZGVmYXVsdCB5YXJnc1BhcnNlcjtcbi8vIHNwZWNpYWwgc3ludGF4IHRvIGFsbG93IHVucXVhbGlmaWVkIGRlZmF1bHQgZXhwb3J0IGZyb20gQ29tbW9uSlNcbmV4cG9ydCB7IHlhcmdzUGFyc2VyIGFzICdtb2R1bGUuZXhwb3J0cycgfTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIENvbnRyaWJ1dG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IElTQ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlKHN0cikge1xuICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBhbiBhcmd1bWVudCBpcyBwcm92aWRlZCBhcyBjYW1lbCBjYXNlLCBlLmcuLCBmb29CYXIuXG4gICAgLy8gYnkgZW5zdXJpbmcgdGhhdCB0aGUgc3RyaW5nIGlzbid0IGFscmVhZHkgbWl4ZWQgY2FzZTpcbiAgICBjb25zdCBpc0NhbWVsQ2FzZSA9IHN0ciAhPT0gc3RyLnRvTG93ZXJDYXNlKCkgJiYgc3RyICE9PSBzdHIudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoIWlzQ2FtZWxDYXNlKSB7XG4gICAgICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAoc3RyLmluZGV4T2YoJy0nKSA9PT0gLTEgJiYgc3RyLmluZGV4T2YoJ18nKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBjYW1lbGNhc2UgPSAnJztcbiAgICAgICAgbGV0IG5leHRDaHJVcHBlciA9IGZhbHNlO1xuICAgICAgICBjb25zdCBsZWFkaW5nSHlwaGVucyA9IHN0ci5tYXRjaCgvXi0rLyk7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZWFkaW5nSHlwaGVucyA/IGxlYWRpbmdIeXBoZW5zWzBdLmxlbmd0aCA6IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgaWYgKG5leHRDaHJVcHBlcikge1xuICAgICAgICAgICAgICAgIG5leHRDaHJVcHBlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNociA9IGNoci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IDAgJiYgKGNociA9PT0gJy0nIHx8IGNociA9PT0gJ18nKSkge1xuICAgICAgICAgICAgICAgIG5leHRDaHJVcHBlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaHIgIT09ICctJyAmJiBjaHIgIT09ICdfJykge1xuICAgICAgICAgICAgICAgIGNhbWVsY2FzZSArPSBjaHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbWVsY2FzZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVjYW1lbGl6ZShzdHIsIGpvaW5TdHJpbmcpIHtcbiAgICBjb25zdCBsb3dlcmNhc2UgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICBqb2luU3RyaW5nID0gam9pblN0cmluZyB8fCAnLSc7XG4gICAgbGV0IG5vdENhbWVsY2FzZSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNockxvd2VyID0gbG93ZXJjYXNlLmNoYXJBdChpKTtcbiAgICAgICAgY29uc3QgY2hyU3RyaW5nID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgaWYgKGNockxvd2VyICE9PSBjaHJTdHJpbmcgJiYgaSA+IDApIHtcbiAgICAgICAgICAgIG5vdENhbWVsY2FzZSArPSBgJHtqb2luU3RyaW5nfSR7bG93ZXJjYXNlLmNoYXJBdChpKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm90Q2FtZWxjYXNlICs9IGNoclN0cmluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm90Q2FtZWxjYXNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tzTGlrZU51bWJlcih4KSB7XG4gICAgaWYgKHggPT09IG51bGwgfHwgeCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gaWYgbG9hZGVkIGZyb20gY29uZmlnLCBtYXkgYWxyZWFkeSBiZSBhIG51bWJlci5cbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBoZXhhZGVjaW1hbC5cbiAgICBpZiAoL14weFswLTlhLWZdKyQvaS50ZXN0KHgpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyBkb24ndCB0cmVhdCAwMTIzIGFzIGEgbnVtYmVyOyBhcyBpdCBkcm9wcyB0aGUgbGVhZGluZyAnMCcuXG4gICAgaWYgKC9eMFteLl0vLnRlc3QoeCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gL15bLV0/KD86XFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKShlWy0rXT9cXGQrKT8kLy50ZXN0KHgpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbi8vIHRha2UgYW4gdW4tc3BsaXQgYXJndiBzdHJpbmcgYW5kIHRva2VuaXplIGl0LlxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplQXJnU3RyaW5nKGFyZ1N0cmluZykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIGFyZ1N0cmluZy5tYXAoZSA9PiB0eXBlb2YgZSAhPT0gJ3N0cmluZycgPyBlICsgJycgOiBlKTtcbiAgICB9XG4gICAgYXJnU3RyaW5nID0gYXJnU3RyaW5nLnRyaW0oKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHByZXZDID0gbnVsbDtcbiAgICBsZXQgYyA9IG51bGw7XG4gICAgbGV0IG9wZW5pbmcgPSBudWxsO1xuICAgIGNvbnN0IGFyZ3MgPSBbXTtcbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgYXJnU3RyaW5nLmxlbmd0aDsgaWkrKykge1xuICAgICAgICBwcmV2QyA9IGM7XG4gICAgICAgIGMgPSBhcmdTdHJpbmcuY2hhckF0KGlpKTtcbiAgICAgICAgLy8gc3BsaXQgb24gc3BhY2VzIHVubGVzcyB3ZSdyZSBpbiBxdW90ZXMuXG4gICAgICAgIGlmIChjID09PSAnICcgJiYgIW9wZW5pbmcpIHtcbiAgICAgICAgICAgIGlmICghKHByZXZDID09PSAnICcpKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3Qgc3BsaXQgdGhlIHN0cmluZyBpZiB3ZSdyZSBpbiBtYXRjaGluZ1xuICAgICAgICAvLyBvcGVuaW5nIG9yIGNsb3Npbmcgc2luZ2xlIGFuZCBkb3VibGUgcXVvdGVzLlxuICAgICAgICBpZiAoYyA9PT0gb3BlbmluZykge1xuICAgICAgICAgICAgb3BlbmluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGMgPT09IFwiJ1wiIHx8IGMgPT09ICdcIicpICYmICFvcGVuaW5nKSB7XG4gICAgICAgICAgICBvcGVuaW5nID0gYztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZ3NbaV0pXG4gICAgICAgICAgICBhcmdzW2ldID0gJyc7XG4gICAgICAgIGFyZ3NbaV0gKz0gYztcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBDb250cmlidXRvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBJU0NcbiAqL1xuZXhwb3J0IHZhciBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleTtcbihmdW5jdGlvbiAoRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkpIHtcbiAgICBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleVtcIkJPT0xFQU5cIl0gPSBcImJvb2xlYW5cIjtcbiAgICBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleVtcIlNUUklOR1wiXSA9IFwic3RyaW5nXCI7XG4gICAgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXlbXCJOVU1CRVJcIl0gPSBcIm51bWJlclwiO1xuICAgIERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5W1wiQVJSQVlcIl0gPSBcImFycmF5XCI7XG59KShEZWZhdWx0VmFsdWVzRm9yVHlwZUtleSB8fCAoRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkgPSB7fSkpO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1hcnJvdy1jYWxsYmFjayAqL1xuaW1wb3J0IHsgdG9rZW5pemVBcmdTdHJpbmcgfSBmcm9tICcuL3Rva2VuaXplLWFyZy1zdHJpbmcuanMnO1xuaW1wb3J0IHsgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkgfSBmcm9tICcuL3lhcmdzLXBhcnNlci10eXBlcy5qcyc7XG5pbXBvcnQgeyBjYW1lbENhc2UsIGRlY2FtZWxpemUsIGxvb2tzTGlrZU51bWJlciB9IGZyb20gJy4vc3RyaW5nLXV0aWxzLmpzJztcbmxldCBtaXhpbjtcbmV4cG9ydCBjbGFzcyBZYXJnc1BhcnNlciB7XG4gICAgY29uc3RydWN0b3IoX21peGluKSB7XG4gICAgICAgIG1peGluID0gX21peGluO1xuICAgIH1cbiAgICBwYXJzZShhcmdzSW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYWxpYXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFycmF5OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBib29sZWFuOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb25maWc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvbmZpZ09iamVjdHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvZXJjZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY291bnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGVudlByZWZpeDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbmFyZzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbm9ybWFsaXplOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdHJpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG51bWJlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgX186IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGtleTogdW5kZWZpbmVkXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICAvLyBhbGxvdyBhIHN0cmluZyBhcmd1bWVudCB0byBiZSBwYXNzZWQgaW4gcmF0aGVyXG4gICAgICAgIC8vIHRoYW4gYW4gYXJndiBhcnJheS5cbiAgICAgICAgY29uc3QgYXJncyA9IHRva2VuaXplQXJnU3RyaW5nKGFyZ3NJbnB1dCk7XG4gICAgICAgIC8vIHRva2VuaXplQXJnU3RyaW5nIGFkZHMgZXh0cmEgcXVvdGVzIHRvIGFyZ3MgaWYgYXJnc0lucHV0IGlzIGEgc3RyaW5nXG4gICAgICAgIC8vIG9ubHkgc3RyaXAgdGhvc2UgZXh0cmEgcXVvdGVzIGluIHByb2Nlc3NWYWx1ZSBpZiBhcmdzSW5wdXQgaXMgYSBzdHJpbmdcbiAgICAgICAgY29uc3QgaW5wdXRJc1N0cmluZyA9IHR5cGVvZiBhcmdzSW5wdXQgPT09ICdzdHJpbmcnO1xuICAgICAgICAvLyBhbGlhc2VzIG1pZ2h0IGhhdmUgdHJhbnNpdGl2ZSByZWxhdGlvbnNoaXBzLCBub3JtYWxpemUgdGhpcy5cbiAgICAgICAgY29uc3QgYWxpYXNlcyA9IGNvbWJpbmVBbGlhc2VzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgb3B0cy5hbGlhcykpO1xuICAgICAgICBjb25zdCBjb25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAnYm9vbGVhbi1uZWdhdGlvbic6IHRydWUsXG4gICAgICAgICAgICAnY2FtZWwtY2FzZS1leHBhbnNpb24nOiB0cnVlLFxuICAgICAgICAgICAgJ2NvbWJpbmUtYXJyYXlzJzogZmFsc2UsXG4gICAgICAgICAgICAnZG90LW5vdGF0aW9uJzogdHJ1ZSxcbiAgICAgICAgICAgICdkdXBsaWNhdGUtYXJndW1lbnRzLWFycmF5JzogdHJ1ZSxcbiAgICAgICAgICAgICdmbGF0dGVuLWR1cGxpY2F0ZS1hcnJheXMnOiB0cnVlLFxuICAgICAgICAgICAgJ2dyZWVkeS1hcnJheXMnOiB0cnVlLFxuICAgICAgICAgICAgJ2hhbHQtYXQtbm9uLW9wdGlvbic6IGZhbHNlLFxuICAgICAgICAgICAgJ25hcmdzLWVhdHMtb3B0aW9ucyc6IGZhbHNlLFxuICAgICAgICAgICAgJ25lZ2F0aW9uLXByZWZpeCc6ICduby0nLFxuICAgICAgICAgICAgJ3BhcnNlLW51bWJlcnMnOiB0cnVlLFxuICAgICAgICAgICAgJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyc6IHRydWUsXG4gICAgICAgICAgICAncG9wdWxhdGUtLSc6IGZhbHNlLFxuICAgICAgICAgICAgJ3NldC1wbGFjZWhvbGRlci1rZXknOiBmYWxzZSxcbiAgICAgICAgICAgICdzaG9ydC1vcHRpb24tZ3JvdXBzJzogdHJ1ZSxcbiAgICAgICAgICAgICdzdHJpcC1hbGlhc2VkJzogZmFsc2UsXG4gICAgICAgICAgICAnc3RyaXAtZGFzaGVkJzogZmFsc2UsXG4gICAgICAgICAgICAndW5rbm93bi1vcHRpb25zLWFzLWFyZ3MnOiBmYWxzZVxuICAgICAgICB9LCBvcHRzLmNvbmZpZ3VyYXRpb24pO1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgb3B0cy5kZWZhdWx0KTtcbiAgICAgICAgY29uc3QgY29uZmlnT2JqZWN0cyA9IG9wdHMuY29uZmlnT2JqZWN0cyB8fCBbXTtcbiAgICAgICAgY29uc3QgZW52UHJlZml4ID0gb3B0cy5lbnZQcmVmaXg7XG4gICAgICAgIGNvbnN0IG5vdEZsYWdzT3B0aW9uID0gY29uZmlndXJhdGlvblsncG9wdWxhdGUtLSddO1xuICAgICAgICBjb25zdCBub3RGbGFnc0FyZ3YgPSBub3RGbGFnc09wdGlvbiA/ICctLScgOiAnXyc7XG4gICAgICAgIGNvbnN0IG5ld0FsaWFzZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBjb25zdCBkZWZhdWx0ZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAvLyBhbGxvdyBhIGkxOG4gaGFuZGxlciB0byBiZSBwYXNzZWQgaW4sIGRlZmF1bHQgdG8gYSBmYWtlIG9uZSAodXRpbC5mb3JtYXQpLlxuICAgICAgICBjb25zdCBfXyA9IG9wdHMuX18gfHwgbWl4aW4uZm9ybWF0O1xuICAgICAgICBjb25zdCBmbGFncyA9IHtcbiAgICAgICAgICAgIGFsaWFzZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBhcnJheXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBib29sczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIHN0cmluZ3M6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBudW1iZXJzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgY291bnRzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgbm9ybWFsaXplOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgY29uZmlnczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIG5hcmdzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgY29lcmNpb25zOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAga2V5czogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmVnYXRpdmUgPSAvXi0oWzAtOV0rKFxcLlswLTldKyk/fFxcLlswLTldKykkLztcbiAgICAgICAgY29uc3QgbmVnYXRlZEJvb2xlYW4gPSBuZXcgUmVnRXhwKCdeLS0nICsgY29uZmlndXJhdGlvblsnbmVnYXRpb24tcHJlZml4J10gKyAnKC4rKScpO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5hcnJheSB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgPyBvcHQua2V5IDogb3B0O1xuICAgICAgICAgICAgLy8gYXNzaWduIHRvIGZsYWdzW2Jvb2xzfHN0cmluZ3N8bnVtYmVyc11cbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnQgPSBPYmplY3Qua2V5cyhvcHQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXlGbGFnS2V5cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYm9vbGVhbjogJ2Jvb2xzJyxcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nOiAnc3RyaW5ncycsXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcjogJ251bWJlcnMnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlGbGFnS2V5c1trZXldO1xuICAgICAgICAgICAgfSkuZmlsdGVyKEJvb2xlYW4pLnBvcCgpO1xuICAgICAgICAgICAgLy8gYXNzaWduIGtleSB0byBiZSBjb2VyY2VkXG4gICAgICAgICAgICBpZiAoYXNzaWdubWVudCkge1xuICAgICAgICAgICAgICAgIGZsYWdzW2Fzc2lnbm1lbnRdW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmxhZ3MuYXJyYXlzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5ib29sZWFuIHx8IFtdKS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmbGFncy5ib29sc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMuc3RyaW5nIHx8IFtdKS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmbGFncy5zdHJpbmdzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5udW1iZXIgfHwgW10pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGZsYWdzLm51bWJlcnNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBmbGFncy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFtdLmNvbmNhdChvcHRzLmNvdW50IHx8IFtdKS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmbGFncy5jb3VudHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBmbGFncy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFtdLmNvbmNhdChvcHRzLm5vcm1hbGl6ZSB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3Mubm9ybWFsaXplW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIG9wdHMubmFyZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdHMubmFyZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MubmFyZ3Nba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBmbGFncy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMuY29lcmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMob3B0cy5jb2VyY2UpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuY29lcmNpb25zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdHMuY29uZmlnKSB8fCB0eXBlb2Ygb3B0cy5jb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIFtdLmNvbmNhdChvcHRzLmNvbmZpZykuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBmbGFncy5jb25maWdzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG9wdHMuY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdHMuY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MuY29uZmlnc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgYSBsb29rdXAgdGFibGUgdGhhdCB0YWtlcyBpbnRvIGFjY291bnQgYWxsXG4gICAgICAgIC8vIGNvbWJpbmF0aW9ucyBvZiBhbGlhc2VzOiB7ZjogWydmb28nXSwgZm9vOiBbJ2YnXX1cbiAgICAgICAgZXh0ZW5kQWxpYXNlcyhvcHRzLmtleSwgYWxpYXNlcywgb3B0cy5kZWZhdWx0LCBmbGFncy5hcnJheXMpO1xuICAgICAgICAvLyBhcHBseSBkZWZhdWx0IHZhbHVlcyB0byBhbGwgYWxpYXNlcy5cbiAgICAgICAgT2JqZWN0LmtleXMoZGVmYXVsdHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgKGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0c1thbGlhc10gPSBkZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZXJyb3IgPSBudWxsO1xuICAgICAgICBjaGVja0NvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgbGV0IG5vdEZsYWdzID0gW107XG4gICAgICAgIGNvbnN0IGFyZ3YgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHsgXzogW10gfSk7XG4gICAgICAgIC8vIFRPRE8oYmNvZSk6IGZvciB0aGUgZmlyc3QgcGFzcyBhdCByZW1vdmluZyBvYmplY3QgcHJvdG90eXBlICB3ZSBkaWRuJ3RcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBwcm90b3R5cGVzIGZyb20gb2JqZWN0cyByZXR1cm5lZCBieSB0aGlzIEFQSSwgd2UgbWlnaHQgd2FudFxuICAgICAgICAvLyB0byBncmFkdWFsbHkgbW92ZSB0b3dhcmRzIGRvaW5nIHNvLlxuICAgICAgICBjb25zdCBhcmd2UmV0dXJuID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJnID0gYXJnc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHRydW5jYXRlZEFyZyA9IGFyZy5yZXBsYWNlKC9eLXszLH0vLCAnLS0tJyk7XG4gICAgICAgICAgICBsZXQgYnJva2VuO1xuICAgICAgICAgICAgbGV0IGtleTtcbiAgICAgICAgICAgIGxldCBsZXR0ZXJzO1xuICAgICAgICAgICAgbGV0IG07XG4gICAgICAgICAgICBsZXQgbmV4dDtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIC8vIGFueSB1bmtub3duIG9wdGlvbiAoZXhjZXB0IGZvciBlbmQtb2Ytb3B0aW9ucywgXCItLVwiKVxuICAgICAgICAgICAgaWYgKGFyZyAhPT0gJy0tJyAmJiAvXi0vLnRlc3QoYXJnKSAmJiBpc1Vua25vd25PcHRpb25Bc0FyZyhhcmcpKSB7XG4gICAgICAgICAgICAgICAgcHVzaFBvc2l0aW9uYWwoYXJnKTtcbiAgICAgICAgICAgICAgICAvLyAtLS0sIC0tLT0sIC0tLS0sIGV0YyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRydW5jYXRlZEFyZy5tYXRjaCgvXi0tLSsoPXwkKS8pKSB7XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9ucyB3aXRob3V0IGtleSBuYW1lIGFyZSBpbnZhbGlkLlxuICAgICAgICAgICAgICAgIHB1c2hQb3NpdGlvbmFsKGFyZyk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgLy8gLS0gc2VwYXJhdGVkIGJ5ID1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaCgvXi0tLis9LykgfHwgKCFjb25maWd1cmF0aW9uWydzaG9ydC1vcHRpb24tZ3JvdXBzJ10gJiYgYXJnLm1hdGNoKC9eLS4rPS8pKSkge1xuICAgICAgICAgICAgICAgIC8vIFVzaW5nIFtcXHNcXFNdIGluc3RlYWQgb2YgLiBiZWNhdXNlIGpzIGRvZXNuJ3Qgc3VwcG9ydCB0aGVcbiAgICAgICAgICAgICAgICAvLyAnZG90YWxsJyByZWdleCBtb2RpZmllci4gU2VlOlxuICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEwNjgzMDgvMTMyMTZcbiAgICAgICAgICAgICAgICBtID0gYXJnLm1hdGNoKC9eLS0/KFtePV0rKT0oW1xcc1xcU10qKSQvKTtcbiAgICAgICAgICAgICAgICAvLyBhcnJheXMgZm9ybWF0ID0gJy0tZj1hIGIgYydcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhtWzFdLCBmbGFncy5hcnJheXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0QXJyYXkoaSwgbVsxXSwgYXJncywgbVsyXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKG1bMV0sIGZsYWdzLm5hcmdzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctLWY9bW9ua2V5IHdhc2hpbmcgY2F0J1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIG1bMV0sIGFyZ3MsIG1bMl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKG1bMV0sIG1bMl0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnLm1hdGNoKG5lZ2F0ZWRCb29sZWFuKSAmJiBjb25maWd1cmF0aW9uWydib29sZWFuLW5lZ2F0aW9uJ10pIHtcbiAgICAgICAgICAgICAgICBtID0gYXJnLm1hdGNoKG5lZ2F0ZWRCb29sZWFuKTtcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gbVsxXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSA/IFtmYWxzZV0gOiBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIC0tIHNlcGFyYXRlZCBieSBzcGFjZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaCgvXi0tLisvKSB8fCAoIWNvbmZpZ3VyYXRpb25bJ3Nob3J0LW9wdGlvbi1ncm91cHMnXSAmJiBhcmcubWF0Y2goL14tW14tXSsvKSkpIHtcbiAgICAgICAgICAgICAgICBtID0gYXJnLm1hdGNoKC9eLS0/KC4rKS8pO1xuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsICYmIEFycmF5LmlzQXJyYXkobSkgJiYgbS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBtWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgZm9ybWF0ID0gJy0tZm9vIGEgYiBjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFyZ3MgZm9ybWF0ID0gJy0tZm9vIGEgYiBjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIHRydXRoeSBldmVuIGlmOiBmbGFncy5uYXJnc1trZXldID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0TmFyZ3MoaSwga2V5LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBhcmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQgJiYgKCFuZXh0Lm1hdGNoKC9eLS8pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5tYXRjaChuZWdhdGl2ZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL14odHJ1ZXxmYWxzZSkkLy50ZXN0KG5leHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgZGVmYXVsdFZhbHVlKGtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvdC1ub3RhdGlvbiBmbGFnIHNlcGFyYXRlZCBieSAnPScuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLlxcLi4rPS8pKSB7XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0oW149XSspPShbXFxzXFxTXSopJC8pO1xuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsICYmIEFycmF5LmlzQXJyYXkobSkgJiYgbS5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgICAgICBzZXRBcmcobVsxXSwgbVsyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvdC1ub3RhdGlvbiBmbGFnIHNlcGFyYXRlZCBieSBzcGFjZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaCgvXi0uXFwuLisvKSAmJiAhYXJnLm1hdGNoKG5lZ2F0aXZlKSkge1xuICAgICAgICAgICAgICAgIG5leHQgPSBhcmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBtID0gYXJnLm1hdGNoKC9eLSguXFwuLispLyk7XG4gICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwgJiYgQXJyYXkuaXNBcnJheShtKSAmJiBtLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IG1bMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQgJiYgIW5leHQubWF0Y2goL14tLykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaCgvXi1bXi1dKy8pICYmICFhcmcubWF0Y2gobmVnYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgbGV0dGVycyA9IGFyZy5zbGljZSgxLCAtMSkuc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGJyb2tlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gYXJnLnNsaWNlKGogKyAyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldHRlcnNbaiArIDFdICYmIGxldHRlcnNbaiArIDFdID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYXJnLnNsaWNlKGogKyAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGxldHRlcnNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IGZvcm1hdCA9ICctZj1hIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0QXJyYXkoaSwga2V5LCBhcmdzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFyZ3MgZm9ybWF0ID0gJy1mPW1vbmtleSB3YXNoaW5nIGNhdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0TmFyZ3MoaSwga2V5LCBhcmdzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPT09ICctJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudCBsZXR0ZXIgaXMgYW4gYWxwaGFiZXRpYyBjaGFyYWN0ZXIgYW5kIG5leHQgdmFsdWUgaXMgYSBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9bQS1aYS16XS8udGVzdChsZXR0ZXJzW2pdKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgL14tP1xcZCsoXFwuXFxkKik/KGUtP1xcZCspPyQvLnRlc3QobmV4dCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQWxsQWxpYXNlcyhuZXh0LCBmbGFncy5ib29scykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcobGV0dGVyc1tqXSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldHRlcnNbaiArIDFdICYmIGxldHRlcnNbaiArIDFdLm1hdGNoKC9cXFcvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIGRlZmF1bHRWYWx1ZShsZXR0ZXJzW2pdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2V5ID0gYXJnLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoIWJyb2tlbiAmJiBrZXkgIT09ICctJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgZm9ybWF0ID0gJy1mIGEgYiBjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFyZ3MgZm9ybWF0ID0gJy1mIGEgYiBjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIHRydXRoeSBldmVuIGlmOiBmbGFncy5uYXJnc1trZXldID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZWF0TmFyZ3MoaSwga2V5LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBhcmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQgJiYgKCEvXigtfC0tKVteLV0vLnRlc3QobmV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0Lm1hdGNoKG5lZ2F0aXZlKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmNvdW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgvXih0cnVlfGZhbHNlKSQvLnRlc3QobmV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBkZWZhdWx0VmFsdWUoa2V5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tWzAtOV0kLykgJiZcbiAgICAgICAgICAgICAgICBhcmcubWF0Y2gobmVnYXRpdmUpICYmXG4gICAgICAgICAgICAgICAgY2hlY2tBbGxBbGlhc2VzKGFyZy5zbGljZSgxKSwgZmxhZ3MuYm9vbHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gc2luZ2xlLWRpZ2l0IGJvb2xlYW4gYWxpYXMsIGUuZzogeGFyZ3MgLTBcbiAgICAgICAgICAgICAgICBrZXkgPSBhcmcuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgZGVmYXVsdFZhbHVlKGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnID09PSAnLS0nKSB7XG4gICAgICAgICAgICAgICAgbm90RmxhZ3MgPSBhcmdzLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZ3VyYXRpb25bJ2hhbHQtYXQtbm9uLW9wdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgbm90RmxhZ3MgPSBhcmdzLnNsaWNlKGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHVzaFBvc2l0aW9uYWwoYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBvcmRlciBvZiBwcmVjZWRlbmNlOlxuICAgICAgICAvLyAxLiBjb21tYW5kIGxpbmUgYXJnXG4gICAgICAgIC8vIDIuIHZhbHVlIGZyb20gZW52IHZhclxuICAgICAgICAvLyAzLiB2YWx1ZSBmcm9tIGNvbmZpZyBmaWxlXG4gICAgICAgIC8vIDQuIHZhbHVlIGZyb20gY29uZmlnIG9iamVjdHNcbiAgICAgICAgLy8gNS4gY29uZmlndXJlZCBkZWZhdWx0IHZhbHVlXG4gICAgICAgIGFwcGx5RW52VmFycyhhcmd2LCB0cnVlKTsgLy8gc3BlY2lhbCBjYXNlOiBjaGVjayBlbnYgdmFycyB0aGF0IHBvaW50IHRvIGNvbmZpZyBmaWxlXG4gICAgICAgIGFwcGx5RW52VmFycyhhcmd2LCBmYWxzZSk7XG4gICAgICAgIHNldENvbmZpZyhhcmd2KTtcbiAgICAgICAgc2V0Q29uZmlnT2JqZWN0cygpO1xuICAgICAgICBhcHBseURlZmF1bHRzQW5kQWxpYXNlcyhhcmd2LCBmbGFncy5hbGlhc2VzLCBkZWZhdWx0cywgdHJ1ZSk7XG4gICAgICAgIGFwcGx5Q29lcmNpb25zKGFyZ3YpO1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnc2V0LXBsYWNlaG9sZGVyLWtleSddKVxuICAgICAgICAgICAgc2V0UGxhY2Vob2xkZXJLZXlzKGFyZ3YpO1xuICAgICAgICAvLyBmb3IgYW55IGNvdW50cyBlaXRoZXIgbm90IGluIGFyZ3Mgb3Igd2l0aG91dCBhbiBleHBsaWNpdCBkZWZhdWx0LCBzZXQgdG8gMFxuICAgICAgICBPYmplY3Qua2V5cyhmbGFncy5jb3VudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKCFoYXNLZXkoYXJndiwga2V5LnNwbGl0KCcuJykpKVxuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIDApO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gJy0tJyBkZWZhdWx0cyB0byB1bmRlZmluZWQuXG4gICAgICAgIGlmIChub3RGbGFnc09wdGlvbiAmJiBub3RGbGFncy5sZW5ndGgpXG4gICAgICAgICAgICBhcmd2W25vdEZsYWdzQXJndl0gPSBbXTtcbiAgICAgICAgbm90RmxhZ3MuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBhcmd2W25vdEZsYWdzQXJndl0ucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJ10gJiYgY29uZmlndXJhdGlvblsnc3RyaXAtZGFzaGVkJ10pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFyZ3YpLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnLS0nICYmIGtleS5pbmNsdWRlcygnLScpKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFyZ3Zba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uWydzdHJpcC1hbGlhc2VkJ10pIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhhbGlhc2VzKS5tYXAoayA9PiBhbGlhc2VzW2tdKSkuZm9yRWFjaChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJ10gJiYgYWxpYXMuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXJndlthbGlhcy5zcGxpdCgnLicpLm1hcChwcm9wID0+IGNhbWVsQ2FzZShwcm9wKSkuam9pbignLicpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFyZ3ZbYWxpYXNdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHVzaCBhcmd1bWVudCBpbnRvIHBvc2l0aW9uYWwgYXJyYXksIGFwcGx5aW5nIG51bWVyaWMgY29lcmNpb246XG4gICAgICAgIGZ1bmN0aW9uIHB1c2hQb3NpdGlvbmFsKGFyZykge1xuICAgICAgICAgICAgY29uc3QgbWF5YmVDb2VyY2VkTnVtYmVyID0gbWF5YmVDb2VyY2VOdW1iZXIoJ18nLCBhcmcpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXliZUNvZXJjZWROdW1iZXIgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtYXliZUNvZXJjZWROdW1iZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgYXJndi5fLnB1c2gobWF5YmVDb2VyY2VkTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBob3cgbWFueSBhcmd1bWVudHMgc2hvdWxkIHdlIGNvbnN1bWUsIGJhc2VkXG4gICAgICAgIC8vIG9uIHRoZSBuYXJncyBvcHRpb24/XG4gICAgICAgIGZ1bmN0aW9uIGVhdE5hcmdzKGksIGtleSwgYXJncywgYXJnQWZ0ZXJFcXVhbFNpZ24pIHtcbiAgICAgICAgICAgIGxldCBpaTtcbiAgICAgICAgICAgIGxldCB0b0VhdCA9IGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKTtcbiAgICAgICAgICAgIC8vIE5hTiBoYXMgYSBzcGVjaWFsIG1lYW5pbmcgZm9yIHRoZSBhcnJheSB0eXBlLCBpbmRpY2F0aW5nIHRoYXQgb25lIG9yXG4gICAgICAgICAgICAvLyBtb3JlIHZhbHVlcyBhcmUgZXhwZWN0ZWQuXG4gICAgICAgICAgICB0b0VhdCA9IHR5cGVvZiB0b0VhdCAhPT0gJ251bWJlcicgfHwgaXNOYU4odG9FYXQpID8gMSA6IHRvRWF0O1xuICAgICAgICAgICAgaWYgKHRvRWF0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChhcmdBZnRlckVxdWFsU2lnbikpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnQXJndW1lbnQgdW5leHBlY3RlZCBmb3I6ICVzJywga2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhdmFpbGFibGUgPSBpc1VuZGVmaW5lZChhcmdBZnRlckVxdWFsU2lnbikgPyAwIDogMTtcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uWyduYXJncy1lYXRzLW9wdGlvbnMnXSkge1xuICAgICAgICAgICAgICAgIC8vIGNsYXNzaWMgYmVoYXZpb3IsIHlhcmdzIGVhdHMgcG9zaXRpb25hbCBhbmQgZGFzaCBhcmd1bWVudHMuXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIC0gKGkgKyAxKSArIGF2YWlsYWJsZSA8IHRvRWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ05vdCBlbm91Z2ggYXJndW1lbnRzIGZvbGxvd2luZzogJXMnLCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlID0gdG9FYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBuYXJncyB3aWxsIG5vdCBjb25zdW1lIGZsYWcgYXJndW1lbnRzLCBlLmcuLCAtYWJjLCAtLWZvbyxcbiAgICAgICAgICAgICAgICAvLyBhbmQgdGVybWluYXRlcyB3aGVuIG9uZSBpcyBvYnNlcnZlZC5cbiAgICAgICAgICAgICAgICBmb3IgKGlpID0gaSArIDE7IGlpIDwgYXJncy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmdzW2lpXS5tYXRjaCgvXi1bXjAtOV0vKSB8fCBhcmdzW2lpXS5tYXRjaChuZWdhdGl2ZSkgfHwgaXNVbmtub3duT3B0aW9uQXNBcmcoYXJnc1tpaV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlKys7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXZhaWxhYmxlIDwgdG9FYXQpXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ05vdCBlbm91Z2ggYXJndW1lbnRzIGZvbGxvd2luZzogJXMnLCBrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb25zdW1lZCA9IE1hdGgubWluKGF2YWlsYWJsZSwgdG9FYXQpO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChhcmdBZnRlckVxdWFsU2lnbikgJiYgY29uc3VtZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgYXJnQWZ0ZXJFcXVhbFNpZ24pO1xuICAgICAgICAgICAgICAgIGNvbnN1bWVkLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGlpID0gaSArIDE7IGlpIDwgKGNvbnN1bWVkICsgaSArIDEpOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgYXJnc1tpaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChpICsgY29uc3VtZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGFuIG9wdGlvbiBpcyBhbiBhcnJheSwgZWF0IGFsbCBub24taHlwaGVuYXRlZCBhcmd1bWVudHNcbiAgICAgICAgLy8gZm9sbG93aW5nIGl0Li4uIFlVTSFcbiAgICAgICAgLy8gZS5nLiwgLS1mb28gYXBwbGUgYmFuYW5hIGNhdCBiZWNvbWVzIFtcImFwcGxlXCIsIFwiYmFuYW5hXCIsIFwiY2F0XCJdXG4gICAgICAgIGZ1bmN0aW9uIGVhdEFycmF5KGksIGtleSwgYXJncywgYXJnQWZ0ZXJFcXVhbFNpZ24pIHtcbiAgICAgICAgICAgIGxldCBhcmdzVG9TZXQgPSBbXTtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gYXJnQWZ0ZXJFcXVhbFNpZ24gfHwgYXJnc1tpICsgMV07XG4gICAgICAgICAgICAvLyBJZiBib3RoIGFycmF5IGFuZCBuYXJncyBhcmUgY29uZmlndXJlZCwgZW5mb3JjZSB0aGUgbmFyZ3MgY291bnQ6XG4gICAgICAgICAgICBjb25zdCBuYXJnc0NvdW50ID0gY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpO1xuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJiAhKC9eKHRydWV8ZmFsc2UpJC8udGVzdChuZXh0KSkpIHtcbiAgICAgICAgICAgICAgICBhcmdzVG9TZXQucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzVW5kZWZpbmVkKG5leHQpIHx8XG4gICAgICAgICAgICAgICAgKGlzVW5kZWZpbmVkKGFyZ0FmdGVyRXF1YWxTaWduKSAmJiAvXi0vLnRlc3QobmV4dCkgJiYgIW5lZ2F0aXZlLnRlc3QobmV4dCkgJiYgIWlzVW5rbm93bk9wdGlvbkFzQXJnKG5leHQpKSkge1xuICAgICAgICAgICAgICAgIC8vIGZvciBrZXlzIHdpdGhvdXQgdmFsdWUgPT0+IGFyZ3NUb1NldCByZW1haW5zIGFuIGVtcHR5IFtdXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVzZXIgZGVmYXVsdCB2YWx1ZSwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZWYWwgPSBkZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgICAgICAgICBhcmdzVG9TZXQgPSBBcnJheS5pc0FycmF5KGRlZlZhbCkgPyBkZWZWYWwgOiBbZGVmVmFsXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSBpbiAtLW9wdGlvbj12YWx1ZSBpcyBlYXRlbiBhcyBpc1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NUb1NldC5wdXNoKHByb2Nlc3NWYWx1ZShrZXksIGFyZ0FmdGVyRXF1YWxTaWduLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGlpID0gaSArIDE7IGlpIDwgYXJncy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCghY29uZmlndXJhdGlvblsnZ3JlZWR5LWFycmF5cyddICYmIGFyZ3NUb1NldC5sZW5ndGggPiAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKG5hcmdzQ291bnQgJiYgdHlwZW9mIG5hcmdzQ291bnQgPT09ICdudW1iZXInICYmIGFyZ3NUb1NldC5sZW5ndGggPj0gbmFyZ3NDb3VudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGFyZ3NbaWldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoL14tLy50ZXN0KG5leHQpICYmICFuZWdhdGl2ZS50ZXN0KG5leHQpICYmICFpc1Vua25vd25PcHRpb25Bc0FyZyhuZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBpID0gaWk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NUb1NldC5wdXNoKHByb2Nlc3NWYWx1ZShrZXksIG5leHQsIGlucHV0SXNTdHJpbmcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBib3RoIGFycmF5IGFuZCBuYXJncyBhcmUgY29uZmlndXJlZCwgY3JlYXRlIGFuIGVycm9yIGlmIGxlc3MgdGhhblxuICAgICAgICAgICAgLy8gbmFyZ3MgcG9zaXRpb25hbHMgd2VyZSBmb3VuZC4gTmFOIGhhcyBzcGVjaWFsIG1lYW5pbmcsIGluZGljYXRpbmdcbiAgICAgICAgICAgIC8vIHRoYXQgYXQgbGVhc3Qgb25lIHZhbHVlIGlzIHJlcXVpcmVkIChtb3JlIGFyZSBva2F5KS5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmFyZ3NDb3VudCA9PT0gJ251bWJlcicgJiYgKChuYXJnc0NvdW50ICYmIGFyZ3NUb1NldC5sZW5ndGggPCBuYXJnc0NvdW50KSB8fFxuICAgICAgICAgICAgICAgIChpc05hTihuYXJnc0NvdW50KSAmJiBhcmdzVG9TZXQubGVuZ3RoID09PSAwKSkpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyBmb2xsb3dpbmc6ICVzJywga2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRBcmcoa2V5LCBhcmdzVG9TZXQpO1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0QXJnKGtleSwgdmFsLCBzaG91bGRTdHJpcFF1b3RlcyA9IGlucHV0SXNTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICgvLS8udGVzdChrZXkpICYmIGNvbmZpZ3VyYXRpb25bJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJ10pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGlhcyA9IGtleS5zcGxpdCgnLicpLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FtZWxDYXNlKHByb3ApO1xuICAgICAgICAgICAgICAgIH0pLmpvaW4oJy4nKTtcbiAgICAgICAgICAgICAgICBhZGROZXdBbGlhcyhrZXksIGFsaWFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJvY2Vzc1ZhbHVlKGtleSwgdmFsLCBzaG91bGRTdHJpcFF1b3Rlcyk7XG4gICAgICAgICAgICBjb25zdCBzcGxpdEtleSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgc2V0S2V5KGFyZ3YsIHNwbGl0S2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAvLyBoYW5kbGUgcG9wdWxhdGluZyBhbGlhc2VzIG9mIHRoZSBmdWxsIGtleVxuICAgICAgICAgICAgaWYgKGZsYWdzLmFsaWFzZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVByb3BlcnRpZXMgPSB4LnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldEtleShhcmd2LCBrZXlQcm9wZXJ0aWVzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYW5kbGUgcG9wdWxhdGluZyBhbGlhc2VzIG9mIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBkb3Qtbm90YXRpb24ga2V5XG4gICAgICAgICAgICBpZiAoc3BsaXRLZXkubGVuZ3RoID4gMSAmJiBjb25maWd1cmF0aW9uWydkb3Qtbm90YXRpb24nXSkge1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAoZmxhZ3MuYWxpYXNlc1tzcGxpdEtleVswXV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleVByb3BlcnRpZXMgPSB4LnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGV4cGFuZCBhbGlhcyB3aXRoIG5lc3RlZCBvYmplY3RzIGluIGtleVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0gW10uY29uY2F0KHNwbGl0S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgYS5zaGlmdCgpOyAvLyBudWtlIHRoZSBvbGQga2V5LlxuICAgICAgICAgICAgICAgICAgICBrZXlQcm9wZXJ0aWVzID0ga2V5UHJvcGVydGllcy5jb25jYXQoYSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBvcHVsYXRlIGFsaWFzIG9ubHkgaWYgaXMgbm90IGFscmVhZHkgYW4gYWxpYXMgb2YgdGhlIGZ1bGwga2V5XG4gICAgICAgICAgICAgICAgICAgIC8vIChhbHJlYWR5IHBvcHVsYXRlZCBhYm92ZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZmxhZ3MuYWxpYXNlc1trZXldIHx8IFtdKS5pbmNsdWRlcyhrZXlQcm9wZXJ0aWVzLmpvaW4oJy4nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShhcmd2LCBrZXlQcm9wZXJ0aWVzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBub3JtYWxpemUgZ2V0dGVyIGFuZCBzZXR0ZXIgd2hlbiBrZXkgaXMgaW4gJ25vcm1hbGl6ZScgYnV0IGlzbid0IGFuIGFycmF5XG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3Mubm9ybWFsaXplKSAmJiAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBba2V5XS5jb25jYXQoZmxhZ3MuYWxpYXNlc1trZXldIHx8IFtdKTtcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXJndlJldHVybiwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IG1peGluLm5vcm1hbGl6ZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkTmV3QWxpYXMoa2V5LCBhbGlhcykge1xuICAgICAgICAgICAgaWYgKCEoZmxhZ3MuYWxpYXNlc1trZXldICYmIGZsYWdzLmFsaWFzZXNba2V5XS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldID0gW2FsaWFzXTtcbiAgICAgICAgICAgICAgICBuZXdBbGlhc2VzW2FsaWFzXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShmbGFncy5hbGlhc2VzW2FsaWFzXSAmJiBmbGFncy5hbGlhc2VzW2FsaWFzXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgYWRkTmV3QWxpYXMoYWxpYXMsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc1ZhbHVlKGtleSwgdmFsLCBzaG91bGRTdHJpcFF1b3Rlcykge1xuICAgICAgICAgICAgLy8gc3RyaW5ncyBtYXkgYmUgcXVvdGVkLCBjbGVhbiB0aGlzIHVwIGFzIHdlIGFzc2lnbiB2YWx1ZXMuXG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RyaXBRdW90ZXMpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBzdHJpcFF1b3Rlcyh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIHBhcnNpbmcgYm9vbGVhbiBhcmd1bWVudHMgLS1mb289dHJ1ZSAtLWJhciBmYWxzZS5cbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgfHwgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsID09PSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbClcbiAgICAgICAgICAgICAgICA/IHZhbC5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG1heWJlQ29lcmNlTnVtYmVyKGtleSwgdik7IH0pXG4gICAgICAgICAgICAgICAgOiBtYXliZUNvZXJjZU51bWJlcihrZXksIHZhbCk7XG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgYSBjb3VudCBnaXZlbiBhcyBhcmcgKGVpdGhlciBubyB2YWx1ZSBvciB2YWx1ZSBwYXJzZWQgYXMgYm9vbGVhbilcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpICYmIChpc1VuZGVmaW5lZCh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBpbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBub3JtYWxpemVkIHZhbHVlIHdoZW4ga2V5IGlzIGluICdub3JtYWxpemUnIGFuZCBpbiAnYXJyYXlzJ1xuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5vcm1hbGl6ZSkgJiYgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsLm1hcCgodmFsKSA9PiB7IHJldHVybiBtaXhpbi5ub3JtYWxpemUodmFsKTsgfSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1peGluLm5vcm1hbGl6ZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1heWJlQ29lcmNlTnVtYmVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvblsncGFyc2UtcG9zaXRpb25hbC1udW1iZXJzJ10gJiYga2V5ID09PSAnXycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgaWYgKCFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5zdHJpbmdzKSAmJiAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZENvZXJjZU51bWJlciA9IGxvb2tzTGlrZU51bWJlcih2YWx1ZSkgJiYgY29uZmlndXJhdGlvblsncGFyc2UtbnVtYmVycyddICYmIChOdW1iZXIuaXNTYWZlSW50ZWdlcihNYXRoLmZsb29yKHBhcnNlRmxvYXQoYCR7dmFsdWV9YCkpKSk7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZENvZXJjZU51bWJlciB8fCAoIWlzVW5kZWZpbmVkKHZhbHVlKSAmJiBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5udW1iZXJzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgYXJncyBmcm9tIGNvbmZpZy5qc29uIGZpbGUsIHRoaXMgc2hvdWxkIGJlXG4gICAgICAgIC8vIGFwcGxpZWQgbGFzdCBzbyB0aGF0IGRlZmF1bHRzIGNhbiBiZSBhcHBsaWVkLlxuICAgICAgICBmdW5jdGlvbiBzZXRDb25maWcoYXJndikge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnTG9va3VwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIC8vIGV4cGFuZCBkZWZhdWx0cy9hbGlhc2VzLCBpbi1jYXNlIGFueSBoYXBwZW4gdG8gcmVmZXJlbmNlXG4gICAgICAgICAgICAvLyB0aGUgY29uZmlnLmpzb24gZmlsZS5cbiAgICAgICAgICAgIGFwcGx5RGVmYXVsdHNBbmRBbGlhc2VzKGNvbmZpZ0xvb2t1cCwgZmxhZ3MuYWxpYXNlcywgZGVmYXVsdHMpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZmxhZ3MuY29uZmlncykuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnUGF0aCA9IGFyZ3ZbY29uZmlnS2V5XSB8fCBjb25maWdMb29rdXBbY29uZmlnS2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnUGF0aCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZENvbmZpZ1BhdGggPSBtaXhpbi5yZXNvbHZlKG1peGluLmN3ZCgpLCBjb25maWdQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVDb25maWcgPSBmbGFncy5jb25maWdzW2NvbmZpZ0tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc29sdmVDb25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSByZXNvbHZlQ29uZmlnKHJlc29sdmVkQ29uZmlnUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IG1peGluLnJlcXVpcmUocmVzb2x2ZWRDb25maWdQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmZpZ09iamVjdChjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVubyB3aWxsIHJlY2VpdmUgYSBQZXJtaXNzaW9uRGVuaWVkIGVycm9yIGlmIGFuIGF0dGVtcHQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hZGUgdG8gbG9hZCBjb25maWcgd2l0aG91dCB0aGUgLS1hbGxvdy1yZWFkIGZsYWc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXgubmFtZSA9PT0gJ1Blcm1pc3Npb25EZW5pZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmd2W2NvbmZpZ0tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnSW52YWxpZCBKU09OIGNvbmZpZyBmaWxlOiAlcycsIGNvbmZpZ1BhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBhcmdzIGZyb20gY29uZmlnIG9iamVjdC5cbiAgICAgICAgLy8gaXQgcmVjdXJzaXZlbHkgY2hlY2tzIG5lc3RlZCBvYmplY3RzLlxuICAgICAgICBmdW5jdGlvbiBzZXRDb25maWdPYmplY3QoY29uZmlnLCBwcmV2KSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgZnVsbEtleSA9IHByZXYgPyBwcmV2ICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBhbiBpbm5lciBvYmplY3QgYW5kIHdlIGhhdmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgLy8gZW5hYmxlZCwgdHJlYXQgaW5uZXIgb2JqZWN0cyBpbiBjb25maWcgdGhlIHNhbWUgYXNcbiAgICAgICAgICAgICAgICAvLyBoZWF2aWx5IG5lc3RlZCBkb3Qgbm90YXRpb25zIChmb28uYmFyLmFwcGxlKS5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBidXQgbm90IGFuIGFycmF5LCBjaGVjayBuZXN0ZWQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpZ09iamVjdCh2YWx1ZSwgZnVsbEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nIGFyZ3VtZW50cyB2aWEgQ0xJIHRha2VzIHByZWNlZGVuY2Ugb3ZlclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZXMgd2l0aGluIHRoZSBjb25maWcgZmlsZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNLZXkoYXJndiwgZnVsbEtleS5zcGxpdCgnLicpKSB8fCAoY2hlY2tBbGxBbGlhc2VzKGZ1bGxLZXksIGZsYWdzLmFycmF5cykgJiYgY29uZmlndXJhdGlvblsnY29tYmluZS1hcnJheXMnXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhmdWxsS2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgYWxsIGNvbmZpZyBvYmplY3RzIHBhc3NlZCBpbiBvcHRzXG4gICAgICAgIGZ1bmN0aW9uIHNldENvbmZpZ09iamVjdHMoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ09iamVjdHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnT2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWdPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlnT2JqZWN0KGNvbmZpZ09iamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlFbnZWYXJzKGFyZ3YsIGNvbmZpZ09ubHkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW52UHJlZml4ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSB0eXBlb2YgZW52UHJlZml4ID09PSAnc3RyaW5nJyA/IGVudlByZWZpeCA6ICcnO1xuICAgICAgICAgICAgY29uc3QgZW52ID0gbWl4aW4uZW52KCk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goZnVuY3Rpb24gKGVudlZhcikge1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggPT09ICcnIHx8IGVudlZhci5sYXN0SW5kZXhPZihwcmVmaXgsIDApID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCBhcnJheSBvZiBuZXN0ZWQga2V5cyBhbmQgY29udmVydCB0aGVtIHRvIGNhbWVsIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IGVudlZhci5zcGxpdCgnX18nKS5tYXAoZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbWVsQ2FzZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoY29uZmlnT25seSAmJiBmbGFncy5jb25maWdzW2tleXMuam9pbignLicpXSkgfHwgIWNvbmZpZ09ubHkpICYmICFoYXNLZXkoYXJndiwga2V5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXlzLmpvaW4oJy4nKSwgZW52W2VudlZhcl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlDb2VyY2lvbnMoYXJndikge1xuICAgICAgICAgICAgbGV0IGNvZXJjZTtcbiAgICAgICAgICAgIGNvbnN0IGFwcGxpZWQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFwcGxpZWQuaGFzKGtleSkpIHsgLy8gSWYgd2UgaGF2ZW4ndCBhbHJlYWR5IGNvZXJjZWQgdGhpcyBvcHRpb24gdmlhIG9uZSBvZiBpdHMgYWxpYXNlc1xuICAgICAgICAgICAgICAgICAgICBjb2VyY2UgPSBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb2VyY2lvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvZXJjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1heWJlQ29lcmNlTnVtYmVyKGtleSwgY29lcmNlKGFyZ3Zba2V5XSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChbXS5jb25jYXQoZmxhZ3MuYWxpYXNlc1trZXldIHx8IFtdLCBrZXkpKS5mb3JFYWNoKGFsaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWQuYWRkKGFsaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3ZbYWxpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0UGxhY2Vob2xkZXJLZXlzKGFyZ3YpIHtcbiAgICAgICAgICAgIGZsYWdzLmtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZG9uJ3Qgc2V0IHBsYWNlaG9sZGVyIGtleXMgZm9yIGRvdCBub3RhdGlvbiBvcHRpb25zICdmb28uYmFyJy5cbiAgICAgICAgICAgICAgICBpZiAofmtleS5pbmRleE9mKCcuJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3Zba2V5XSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgIGFyZ3Zba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlEZWZhdWx0c0FuZEFsaWFzZXMob2JqLCBhbGlhc2VzLCBkZWZhdWx0cywgY2FuTG9nID0gZmFsc2UpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0tleShvYmosIGtleS5zcGxpdCgnLicpKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRLZXkob2JqLCBrZXkuc3BsaXQoJy4nKSwgZGVmYXVsdHNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5Mb2cpXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0ZWRba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIChhbGlhc2VzW2tleV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNLZXkob2JqLCB4LnNwbGl0KCcuJykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEtleShvYmosIHguc3BsaXQoJy4nKSwgZGVmYXVsdHNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhc0tleShvYmosIGtleXMpIHtcbiAgICAgICAgICAgIGxldCBvID0gb2JqO1xuICAgICAgICAgICAgaWYgKCFjb25maWd1cmF0aW9uWydkb3Qtbm90YXRpb24nXSlcbiAgICAgICAgICAgICAgICBrZXlzID0gW2tleXMuam9pbignLicpXTtcbiAgICAgICAgICAgIGtleXMuc2xpY2UoMCwgLTEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIG8gPSAob1trZXldIHx8IHt9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5c1trZXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvICE9PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleSBpbiBvO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldEtleShvYmosIGtleXMsIHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbyA9IG9iajtcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pXG4gICAgICAgICAgICAgICAga2V5cyA9IFtrZXlzLmpvaW4oJy4nKV07XG4gICAgICAgICAgICBrZXlzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGJjb2UpOiBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIHlhcmdzLCBzd2l0Y2ggdG9cbiAgICAgICAgICAgICAgICAvLyBPYmplY3QuY3JlYXRlKG51bGwpIGZvciBkb3Qgbm90YXRpb246XG4gICAgICAgICAgICAgICAga2V5ID0gc2FuaXRpemVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG9ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ba2V5XSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGF0IG9ba2V5XSBpcyBhbiBhcnJheSwgYW5kIHRoYXQgdGhlIGxhc3QgaXRlbSBpcyBhbiBlbXB0eSBvYmplY3QuXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ba2V5XS5wdXNoKHt9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IFtvW2tleV0sIHt9XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3YW50IHRvIHVwZGF0ZSB0aGUgZW1wdHkgb2JqZWN0IGF0IHRoZSBlbmQgb2YgdGhlIG9ba2V5XSBhcnJheSwgc28gc2V0IG8gdG8gdGhhdCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgbyA9IG9ba2V5XVtvW2tleV0ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvID0gb1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVE9ETyhiY29lKTogaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiB5YXJncywgc3dpdGNoIHRvXG4gICAgICAgICAgICAvLyBPYmplY3QuY3JlYXRlKG51bGwpIGZvciBkb3Qgbm90YXRpb246XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBzYW5pdGl6ZUtleShrZXlzW2tleXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgY29uc3QgaXNUeXBlQXJyYXkgPSBjaGVja0FsbEFsaWFzZXMoa2V5cy5qb2luKCcuJyksIGZsYWdzLmFycmF5cyk7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbHVlQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICAgICAgICAgIGxldCBkdXBsaWNhdGUgPSBjb25maWd1cmF0aW9uWydkdXBsaWNhdGUtYXJndW1lbnRzLWFycmF5J107XG4gICAgICAgICAgICAvLyBuYXJncyBoYXMgaGlnaGVyIHByaW9yaXR5IHRoYW4gZHVwbGljYXRlXG4gICAgICAgICAgICBpZiAoIWR1cGxpY2F0ZSAmJiBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncykpIHtcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICgoIWlzVW5kZWZpbmVkKG9ba2V5XSkgJiYgZmxhZ3MubmFyZ3Nba2V5XSA9PT0gMSkgfHwgKEFycmF5LmlzQXJyYXkob1trZXldKSAmJiBvW2tleV0ubGVuZ3RoID09PSBmbGFncy5uYXJnc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBpbmNyZW1lbnQoKSkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IGluY3JlbWVudChvW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGR1cGxpY2F0ZSAmJiBpc1R5cGVBcnJheSAmJiBpc1ZhbHVlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gY29uZmlndXJhdGlvblsnZmxhdHRlbi1kdXBsaWNhdGUtYXJyYXlzJ10gPyBvW2tleV0uY29uY2F0KHZhbHVlKSA6IChBcnJheS5pc0FycmF5KG9ba2V5XVswXSkgPyBvW2tleV0gOiBbb1trZXldXSkuY29uY2F0KFt2YWx1ZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghZHVwbGljYXRlICYmIEJvb2xlYW4oaXNUeXBlQXJyYXkpID09PSBCb29sZWFuKGlzVmFsdWVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSBvW2tleV0uY29uY2F0KFt2YWx1ZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9ba2V5XSA9PT0gdW5kZWZpbmVkICYmIGlzVHlwZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgb1trZXldID0gaXNWYWx1ZUFycmF5ID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZHVwbGljYXRlICYmICEob1trZXldID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpIHx8XG4gICAgICAgICAgICAgICAgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpKSkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IFtvW2tleV0sIHZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGV4dGVuZCB0aGUgYWxpYXNlcyBsaXN0IHdpdGggaW5mZXJyZWQgYWxpYXNlcy5cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kQWxpYXNlcyguLi5hcmdzKSB7XG4gICAgICAgICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iaiB8fCB7fSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3J0LWNpcmN1aXQgaWYgd2UndmUgYWxyZWFkeSBhZGRlZCBhIGtleVxuICAgICAgICAgICAgICAgICAgICAvLyB0byB0aGUgYWxpYXNlcyBhcnJheSwgZm9yIGV4YW1wbGUgaXQgbWlnaHRcbiAgICAgICAgICAgICAgICAgICAgLy8gZXhpc3QgaW4gYm90aCAnb3B0cy5kZWZhdWx0JyBhbmQgJ29wdHMua2V5Jy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWdzLmFsaWFzZXNba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldID0gW10uY29uY2F0KGFsaWFzZXNba2V5XSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBcIi0tb3B0aW9uLW5hbWVcIiwgYWxzbyBzZXQgYXJndi5vcHRpb25OYW1lXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5jb25jYXQoa2V5KS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLy0vLnRlc3QoeCkgJiYgY29uZmlndXJhdGlvblsnY2FtZWwtY2FzZS1leHBhbnNpb24nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBjYW1lbENhc2UoeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IGtleSAmJiBmbGFncy5hbGlhc2VzW2tleV0uaW5kZXhPZihjKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FsaWFzZXNbY10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBcIi0tb3B0aW9uTmFtZVwiLCBhbHNvIHNldCBhcmd2WydvcHRpb24tbmFtZSddXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5jb25jYXQoa2V5KS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeC5sZW5ndGggPiAxICYmIC9bQS1aXS8udGVzdCh4KSAmJiBjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IGRlY2FtZWxpemUoeCwgJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyAhPT0ga2V5ICYmIGZsYWdzLmFsaWFzZXNba2V5XS5pbmRleE9mKGMpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0ucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QWxpYXNlc1tjXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNbeF0gPSBba2V5XS5jb25jYXQoZmxhZ3MuYWxpYXNlc1trZXldLmZpbHRlcihmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4ICE9PSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvQ2hlY2sgPSBbXS5jb25jYXQoZmxhZ3MuYWxpYXNlc1trZXldIHx8IFtdLCBrZXkpO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZsYWcpO1xuICAgICAgICAgICAgY29uc3Qgc2V0QWxpYXMgPSB0b0NoZWNrLmZpbmQoa2V5ID0+IGtleXMuaW5jbHVkZXMoa2V5KSk7XG4gICAgICAgICAgICByZXR1cm4gc2V0QWxpYXMgPyBmbGFnW3NldEFsaWFzXSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhc0FueUZsYWcoa2V5KSB7XG4gICAgICAgICAgICBjb25zdCBmbGFnc0tleXMgPSBPYmplY3Qua2V5cyhmbGFncyk7XG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gW10uY29uY2F0KGZsYWdzS2V5cy5tYXAoayA9PiBmbGFnc1trXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRvQ2hlY2suc29tZShmdW5jdGlvbiAoZmxhZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGZsYWcpID8gZmxhZy5pbmNsdWRlcyhrZXkpIDogZmxhZ1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFzRmxhZ3NNYXRjaGluZyhhcmcsIC4uLnBhdHRlcm5zKSB7XG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gW10uY29uY2F0KC4uLnBhdHRlcm5zKTtcbiAgICAgICAgICAgIHJldHVybiB0b0NoZWNrLnNvbWUoZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGFyZy5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggJiYgaGFzQW55RmxhZyhtYXRjaFsxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYXNlZCBvbiBhIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiB0aGUgc2hvcnQgZmxhZyBncm91cCBwYXJzaW5nIGxvZ2ljXG4gICAgICAgIGZ1bmN0aW9uIGhhc0FsbFNob3J0RmxhZ3MoYXJnKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbmVnYXRpdmUgbnVtYmVyLCBvciBkb2Vzbid0IHN0YXJ0IHdpdGggYSBzaW5nbGUgaHlwaGVuLCBpdCdzIG5vdCBhIHNob3J0IGZsYWcgZ3JvdXBcbiAgICAgICAgICAgIGlmIChhcmcubWF0Y2gobmVnYXRpdmUpIHx8ICFhcmcubWF0Y2goL14tW14tXSsvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBoYXNBbGxGbGFncyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbmV4dDtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlcnMgPSBhcmcuc2xpY2UoMSkuc3BsaXQoJycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZXR0ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IGFyZy5zbGljZShqICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNBbnlGbGFnKGxldHRlcnNbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0FsbEZsYWdzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKGxldHRlcnNbaiArIDFdICYmIGxldHRlcnNbaiArIDFdID09PSAnPScpIHx8XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPT09ICctJyB8fFxuICAgICAgICAgICAgICAgICAgICAoL1tBLVphLXpdLy50ZXN0KGxldHRlcnNbal0pICYmIC9eLT9cXGQrKFxcLlxcZCopPyhlLT9cXGQrKT8kLy50ZXN0KG5leHQpKSB8fFxuICAgICAgICAgICAgICAgICAgICAobGV0dGVyc1tqICsgMV0gJiYgbGV0dGVyc1tqICsgMV0ubWF0Y2goL1xcVy8pKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzQWxsRmxhZ3M7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNVbmtub3duT3B0aW9uQXNBcmcoYXJnKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlndXJhdGlvblsndW5rbm93bi1vcHRpb25zLWFzLWFyZ3MnXSAmJiBpc1Vua25vd25PcHRpb24oYXJnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1Vua25vd25PcHRpb24oYXJnKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcucmVwbGFjZSgvXi17Myx9LywgJy0tJyk7XG4gICAgICAgICAgICAvLyBpZ25vcmUgbmVnYXRpdmUgbnVtYmVyc1xuICAgICAgICAgICAgaWYgKGFyZy5tYXRjaChuZWdhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGEgc2hvcnQgb3B0aW9uIGdyb3VwIGFuZCBhbGwgb2YgdGhlbSBhcmUgY29uZmlndXJlZCwgaXQgaXNuJ3QgdW5rbm93blxuICAgICAgICAgICAgaWYgKGhhc0FsbFNob3J0RmxhZ3MoYXJnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGUuZy4gJy0tY291bnQ9MidcbiAgICAgICAgICAgIGNvbnN0IGZsYWdXaXRoRXF1YWxzID0gL14tKyhbXj1dKz8pPVtcXHNcXFNdKiQvO1xuICAgICAgICAgICAgLy8gZS5nLiAnLWEnIG9yICctLWFyZydcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbEZsYWcgPSAvXi0rKFtePV0rPykkLztcbiAgICAgICAgICAgIC8vIGUuZy4gJy1hLSdcbiAgICAgICAgICAgIGNvbnN0IGZsYWdFbmRpbmdJbkh5cGhlbiA9IC9eLSsoW149XSs/KS0kLztcbiAgICAgICAgICAgIC8vIGUuZy4gJy1hYmMxMjMnXG4gICAgICAgICAgICBjb25zdCBmbGFnRW5kaW5nSW5EaWdpdHMgPSAvXi0rKFtePV0rP1xcZCspJC87XG4gICAgICAgICAgICAvLyBlLmcuICctYS91c3IvbG9jYWwnXG4gICAgICAgICAgICBjb25zdCBmbGFnRW5kaW5nSW5Ob25Xb3JkQ2hhcmFjdGVycyA9IC9eLSsoW149XSs/KVxcVysuKiQvO1xuICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBmbGFnIHN0eWxlcywgaW5jbHVkaW5nIG5lZ2F0ZWRCb29sZWFuLCBhIHBhdHRlcm4gZGVmaW5lZCBuZWFyIHRoZSBzdGFydCBvZiB0aGUgcGFyc2UgbWV0aG9kXG4gICAgICAgICAgICByZXR1cm4gIWhhc0ZsYWdzTWF0Y2hpbmcoYXJnLCBmbGFnV2l0aEVxdWFscywgbmVnYXRlZEJvb2xlYW4sIG5vcm1hbEZsYWcsIGZsYWdFbmRpbmdJbkh5cGhlbiwgZmxhZ0VuZGluZ0luRGlnaXRzLCBmbGFnRW5kaW5nSW5Ob25Xb3JkQ2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFrZSBhIGJlc3QgZWZmb3J0IHRvIHBpY2sgYSBkZWZhdWx0IHZhbHVlXG4gICAgICAgIC8vIGZvciBhbiBvcHRpb24gYmFzZWQgb24gbmFtZSBhbmQgdHlwZS5cbiAgICAgICAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKGtleSkge1xuICAgICAgICAgICAgaWYgKCFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiZcbiAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSAmJlxuICAgICAgICAgICAgICAgIGAke2tleX1gIGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdEZvclR5cGUoZ3Vlc3NUeXBlKGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBhIGRlZmF1bHQgdmFsdWUsIGdpdmVuIHRoZSB0eXBlIG9mIGEgZmxhZy4sXG4gICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRGb3JUeXBlKHR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgICAgICAgICBbRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQk9PTEVBTl06IHRydWUsXG4gICAgICAgICAgICAgICAgW0RlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LlNUUklOR106ICcnLFxuICAgICAgICAgICAgICAgIFtEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5OVU1CRVJdOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgW0RlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LkFSUkFZXTogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZGVmW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdpdmVuIGEgZmxhZywgZW5mb3JjZSBhIGRlZmF1bHQgdHlwZS5cbiAgICAgICAgZnVuY3Rpb24gZ3Vlc3NUeXBlKGtleSkge1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5CT09MRUFOO1xuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLnN0cmluZ3MpKVxuICAgICAgICAgICAgICAgIHR5cGUgPSBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5TVFJJTkc7XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5udW1iZXJzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuTlVNQkVSO1xuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpKVxuICAgICAgICAgICAgICAgIHR5cGUgPSBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5CT09MRUFOO1xuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQVJSQVk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1VuZGVmaW5lZChudW0pIHtcbiAgICAgICAgICAgIHJldHVybiBudW0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayB1c2VyIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIGluY29uc2lzdGVuY2llc1xuICAgICAgICBmdW5jdGlvbiBjaGVja0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgICAgICAvLyBjb3VudCBrZXlzIHNob3VsZCBub3QgYmUgc2V0IGFzIGFycmF5L25hcmdcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZsYWdzLmNvdW50cykuZmluZChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5hcnJheXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ0ludmFsaWQgY29uZmlndXJhdGlvbjogJXMsIG9wdHMuY291bnQgZXhjbHVkZXMgb3B0cy5hcnJheS4nLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdJbnZhbGlkIGNvbmZpZ3VyYXRpb246ICVzLCBvcHRzLmNvdW50IGV4Y2x1ZGVzIG9wdHMubmFyZy4nLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbGlhc2VzOiBPYmplY3QuYXNzaWduKHt9LCBmbGFncy5hbGlhc2VzKSxcbiAgICAgICAgICAgIGFyZ3Y6IE9iamVjdC5hc3NpZ24oYXJndlJldHVybiwgYXJndiksXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdGVkOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0ZWQpLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgbmV3QWxpYXNlczogT2JqZWN0LmFzc2lnbih7fSwgbmV3QWxpYXNlcylcbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyBpZiBhbnkgYWxpYXNlcyByZWZlcmVuY2UgZWFjaCBvdGhlciwgd2Ugc2hvdWxkXG4vLyBtZXJnZSB0aGVtIHRvZ2V0aGVyLlxuZnVuY3Rpb24gY29tYmluZUFsaWFzZXMoYWxpYXNlcykge1xuICAgIGNvbnN0IGFsaWFzQXJyYXlzID0gW107XG4gICAgY29uc3QgY29tYmluZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGxldCBjaGFuZ2UgPSB0cnVlO1xuICAgIC8vIHR1cm4gYWxpYXMgbG9va3VwIGhhc2gge2tleTogWydhbGlhczEnLCAnYWxpYXMyJ119IGludG9cbiAgICAvLyBhIHNpbXBsZSBhcnJheSBbJ2tleScsICdhbGlhczEnLCAnYWxpYXMyJ11cbiAgICBPYmplY3Qua2V5cyhhbGlhc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgYWxpYXNBcnJheXMucHVzaChbXS5jb25jYXQoYWxpYXNlc1trZXldLCBrZXkpKTtcbiAgICB9KTtcbiAgICAvLyBjb21iaW5lIGFycmF5cyB1bnRpbCB6ZXJvIGNoYW5nZXMgYXJlXG4gICAgLy8gbWFkZSBpbiBhbiBpdGVyYXRpb24uXG4gICAgd2hpbGUgKGNoYW5nZSkge1xuICAgICAgICBjaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGlhc0FycmF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaWkgPSBpICsgMTsgaWkgPCBhbGlhc0FycmF5cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlcnNlY3QgPSBhbGlhc0FycmF5c1tpXS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsaWFzQXJyYXlzW2lpXS5pbmRleE9mKHYpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBhbGlhc0FycmF5c1tpXSA9IGFsaWFzQXJyYXlzW2ldLmNvbmNhdChhbGlhc0FycmF5c1tpaV0pO1xuICAgICAgICAgICAgICAgICAgICBhbGlhc0FycmF5cy5zcGxpY2UoaWksIDEpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gbWFwIGFycmF5cyBiYWNrIHRvIHRoZSBoYXNoLWxvb2t1cCAoZGUtZHVwZSB3aGlsZVxuICAgIC8vIHdlJ3JlIGF0IGl0KS5cbiAgICBhbGlhc0FycmF5cy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhc0FycmF5KSB7XG4gICAgICAgIGFsaWFzQXJyYXkgPSBhbGlhc0FycmF5LmZpbHRlcihmdW5jdGlvbiAodiwgaSwgc2VsZikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2KSA9PT0gaTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGxhc3RBbGlhcyA9IGFsaWFzQXJyYXkucG9wKCk7XG4gICAgICAgIGlmIChsYXN0QWxpYXMgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgbGFzdEFsaWFzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29tYmluZWRbbGFzdEFsaWFzXSA9IGFsaWFzQXJyYXk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29tYmluZWQ7XG59XG4vLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuIGEgY291bnQgaXMgZ2l2ZW4gYXMgYW4gYXJnXG4vLyBpdCBpcyBOT1QgY2FsbGVkIHRvIHNldCBhIGRlZmF1bHQgdmFsdWVcbi8vIHRodXMgd2UgY2FuIHN0YXJ0IHRoZSBjb3VudCBhdCAxIGluc3RlYWQgb2YgMFxuZnVuY3Rpb24gaW5jcmVtZW50KG9yaWcpIHtcbiAgICByZXR1cm4gb3JpZyAhPT0gdW5kZWZpbmVkID8gb3JpZyArIDEgOiAxO1xufVxuLy8gVE9ETyhiY29lKTogaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiB5YXJncywgc3dpdGNoIHRvXG4vLyBPYmplY3QuY3JlYXRlKG51bGwpIGZvciBkb3Qgbm90YXRpb246XG5mdW5jdGlvbiBzYW5pdGl6ZUtleShrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJylcbiAgICAgICAgcmV0dXJuICdfX19wcm90b19fXyc7XG4gICAgcmV0dXJuIGtleTtcbn1cbmZ1bmN0aW9uIHN0cmlwUXVvdGVzKHZhbCkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgKHZhbFswXSA9PT0gXCInXCIgfHwgdmFsWzBdID09PSAnXCInKSAmJlxuICAgICAgICB2YWxbdmFsLmxlbmd0aCAtIDFdID09PSB2YWxbMF0pXG4gICAgICAgID8gdmFsLnN1YnN0cmluZygxLCB2YWwubGVuZ3RoIC0gMSlcbiAgICAgICAgOiB2YWw7XG59XG4iLCAiZnVuY3Rpb24gZ2V0UHJvY2Vzc0FyZ3ZCaW5JbmRleCgpIHtcbiAgICBpZiAoaXNCdW5kbGVkRWxlY3Ryb25BcHAoKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIDE7XG59XG5mdW5jdGlvbiBpc0J1bmRsZWRFbGVjdHJvbkFwcCgpIHtcbiAgICByZXR1cm4gaXNFbGVjdHJvbkFwcCgpICYmICFwcm9jZXNzLmRlZmF1bHRBcHA7XG59XG5mdW5jdGlvbiBpc0VsZWN0cm9uQXBwKCkge1xuICAgIHJldHVybiAhIXByb2Nlc3MudmVyc2lvbnMuZWxlY3Ryb247XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUJpbihhcmd2KSB7XG4gICAgcmV0dXJuIGFyZ3Yuc2xpY2UoZ2V0UHJvY2Vzc0FyZ3ZCaW5JbmRleCgpICsgMSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvY2Vzc0FyZ3ZCaW4oKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuYXJndltnZXRQcm9jZXNzQXJndkJpbkluZGV4KCldO1xufVxuIiwgImltcG9ydCB7IHJlYWRGaWxlU3luYywgc3RhdFN5bmMsIHdyaXRlRmlsZSB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZzOiB7XG4gICAgICAgIHJlYWRGaWxlU3luYyxcbiAgICAgICAgd3JpdGVGaWxlXG4gICAgfSxcbiAgICBmb3JtYXQsXG4gICAgcmVzb2x2ZSxcbiAgICBleGlzdHM6IChmaWxlKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdFN5bmMoZmlsZSkuaXNGaWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsICJsZXQgc2hpbTtcbmNsYXNzIFkxOE4ge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgLy8gY29uZmlndXJhYmxlIG9wdGlvbnMuXG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICB0aGlzLmRpcmVjdG9yeSA9IG9wdHMuZGlyZWN0b3J5IHx8ICcuL2xvY2FsZXMnO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGVzID0gdHlwZW9mIG9wdHMudXBkYXRlRmlsZXMgPT09ICdib29sZWFuJyA/IG9wdHMudXBkYXRlRmlsZXMgOiB0cnVlO1xuICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdHMubG9jYWxlIHx8ICdlbic7XG4gICAgICAgIHRoaXMuZmFsbGJhY2tUb0xhbmd1YWdlID0gdHlwZW9mIG9wdHMuZmFsbGJhY2tUb0xhbmd1YWdlID09PSAnYm9vbGVhbicgPyBvcHRzLmZhbGxiYWNrVG9MYW5ndWFnZSA6IHRydWU7XG4gICAgICAgIC8vIGludGVybmFsIHN0dWZmLlxuICAgICAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy53cml0ZVF1ZXVlID0gW107XG4gICAgfVxuICAgIF9fKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFnZ2VkTGl0ZXJhbChhcmd1bWVudHNbMF0sIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBsZXQgY2IgPSBmdW5jdGlvbiAoKSB7IH07IC8vIHN0YXJ0IHdpdGggbm9vcC5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYiA9IGFyZ3MucG9wKCk7XG4gICAgICAgIGNiID0gY2IgfHwgZnVuY3Rpb24gKCkgeyB9OyAvLyBub29wLlxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdKVxuICAgICAgICAgICAgdGhpcy5fcmVhZExvY2FsZUZpbGUoKTtcbiAgICAgICAgLy8gd2UndmUgb2JzZXJ2ZWQgYSBuZXcgc3RyaW5nLCB1cGRhdGUgdGhlIGxhbmd1YWdlIGZpbGUuXG4gICAgICAgIGlmICghdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc3RyXSAmJiB0aGlzLnVwZGF0ZUZpbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzdHJdID0gc3RyO1xuICAgICAgICAgICAgLy8gaW5jbHVkZSB0aGUgY3VycmVudCBkaXJlY3RvcnkgYW5kIGxvY2FsZSxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZXNlIHZhbHVlcyBjb3VsZCBjaGFuZ2UgYmVmb3JlIHRoZVxuICAgICAgICAgICAgLy8gd3JpdGUgaXMgcGVyZm9ybWVkLlxuICAgICAgICAgICAgdGhpcy5fZW5xdWV1ZVdyaXRlKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6IHRoaXMuZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgY2JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpbS5mb3JtYXQuYXBwbHkoc2hpbS5mb3JtYXQsIFt0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzdHJdIHx8IHN0cl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgX19uKCkge1xuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgY29uc3Qgc2luZ3VsYXIgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IHBsdXJhbCA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGxldCBjYiA9IGZ1bmN0aW9uICgpIHsgfTsgLy8gc3RhcnQgd2l0aCBub29wLlxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNiID0gYXJncy5wb3AoKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXSlcbiAgICAgICAgICAgIHRoaXMuX3JlYWRMb2NhbGVGaWxlKCk7XG4gICAgICAgIGxldCBzdHIgPSBxdWFudGl0eSA9PT0gMSA/IHNpbmd1bGFyIDogcGx1cmFsO1xuICAgICAgICBpZiAodGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc2luZ3VsYXJdKSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW3Npbmd1bGFyXTtcbiAgICAgICAgICAgIHN0ciA9IGVudHJ5W3F1YW50aXR5ID09PSAxID8gJ29uZScgOiAnb3RoZXInXTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSd2ZSBvYnNlcnZlZCBhIG5ldyBzdHJpbmcsIHVwZGF0ZSB0aGUgbGFuZ3VhZ2UgZmlsZS5cbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzaW5ndWxhcl0gJiYgdGhpcy51cGRhdGVGaWxlcykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc2luZ3VsYXJdID0ge1xuICAgICAgICAgICAgICAgIG9uZTogc2luZ3VsYXIsXG4gICAgICAgICAgICAgICAgb3RoZXI6IHBsdXJhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgdGhlIGN1cnJlbnQgZGlyZWN0b3J5IGFuZCBsb2NhbGUsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVzZSB2YWx1ZXMgY291bGQgY2hhbmdlIGJlZm9yZSB0aGVcbiAgICAgICAgICAgIC8vIHdyaXRlIGlzIHBlcmZvcm1lZC5cbiAgICAgICAgICAgIHRoaXMuX2VucXVldWVXcml0ZSh7XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5OiB0aGlzLmRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGNiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgYSAlZCBwbGFjZWhvbGRlciBpcyBwcm92aWRlZCwgYWRkIHF1YW50aXR5XG4gICAgICAgIC8vIHRvIHRoZSBhcmd1bWVudHMgZXhwYW5kZWQgYnkgdXRpbC5mb3JtYXQuXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtzdHJdO1xuICAgICAgICBpZiAofnN0ci5pbmRleE9mKCclZCcpKVxuICAgICAgICAgICAgdmFsdWVzLnB1c2gocXVhbnRpdHkpO1xuICAgICAgICByZXR1cm4gc2hpbS5mb3JtYXQuYXBwbHkoc2hpbS5mb3JtYXQsIHZhbHVlcy5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgIH1cbiAgICBnZXRMb2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZTtcbiAgICB9XG4gICAgdXBkYXRlTG9jYWxlKG9iaikge1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdKVxuICAgICAgICAgICAgdGhpcy5fcmVhZExvY2FsZUZpbGUoKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfdGFnZ2VkTGl0ZXJhbChwYXJ0cywgLi4uYXJncykge1xuICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaSArIDFdO1xuICAgICAgICAgICAgc3RyICs9IHBhcnQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gJyVzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fLmFwcGx5KHRoaXMsIFtzdHJdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MsIDEpKSk7XG4gICAgfVxuICAgIF9lbnF1ZXVlV3JpdGUod29yaykge1xuICAgICAgICB0aGlzLndyaXRlUXVldWUucHVzaCh3b3JrKTtcbiAgICAgICAgaWYgKHRoaXMud3JpdGVRdWV1ZS5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzV3JpdGVRdWV1ZSgpO1xuICAgIH1cbiAgICBfcHJvY2Vzc1dyaXRlUXVldWUoKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgY29uc3Qgd29yayA9IHRoaXMud3JpdGVRdWV1ZVswXTtcbiAgICAgICAgLy8gZGVzdHJ1Y3R1cmUgdGhlIGVucXVldWVkIHdvcmsuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IHdvcmsuZGlyZWN0b3J5O1xuICAgICAgICBjb25zdCBsb2NhbGUgPSB3b3JrLmxvY2FsZTtcbiAgICAgICAgY29uc3QgY2IgPSB3b3JrLmNiO1xuICAgICAgICBjb25zdCBsYW5ndWFnZUZpbGUgPSB0aGlzLl9yZXNvbHZlTG9jYWxlRmlsZShkaXJlY3RvcnksIGxvY2FsZSk7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRMb2NhbGUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNhY2hlW2xvY2FsZV0sIG51bGwsIDIpO1xuICAgICAgICBzaGltLmZzLndyaXRlRmlsZShsYW5ndWFnZUZpbGUsIHNlcmlhbGl6ZWRMb2NhbGUsICd1dGYtOCcsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIF90aGlzLndyaXRlUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy53cml0ZVF1ZXVlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgX3RoaXMuX3Byb2Nlc3NXcml0ZVF1ZXVlKCk7XG4gICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlYWRMb2NhbGVGaWxlKCkge1xuICAgICAgICBsZXQgbG9jYWxlTG9va3VwID0ge307XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlRmlsZSA9IHRoaXMuX3Jlc29sdmVMb2NhbGVGaWxlKHRoaXMuZGlyZWN0b3J5LCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHVzaW5nIGEgYnVuZGxlciBzdWNoIGFzIHdlYnBhY2ssIHJlYWRGaWxlU3luYyBtYXkgbm90IGJlIGRlZmluZWQ6XG4gICAgICAgICAgICBpZiAoc2hpbS5mcy5yZWFkRmlsZVN5bmMpIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVMb29rdXAgPSBKU09OLnBhcnNlKHNoaW0uZnMucmVhZEZpbGVTeW5jKGxhbmd1YWdlRmlsZSwgJ3V0Zi04JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gJ3N5bnRheCBlcnJvciBpbiAnICsgbGFuZ3VhZ2VGaWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJylcbiAgICAgICAgICAgICAgICBsb2NhbGVMb29rdXAgPSB7fTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV0gPSBsb2NhbGVMb29rdXA7XG4gICAgfVxuICAgIF9yZXNvbHZlTG9jYWxlRmlsZShkaXJlY3RvcnksIGxvY2FsZSkge1xuICAgICAgICBsZXQgZmlsZSA9IHNoaW0ucmVzb2x2ZShkaXJlY3RvcnksICcuLycsIGxvY2FsZSArICcuanNvbicpO1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja1RvTGFuZ3VhZ2UgJiYgIXRoaXMuX2ZpbGVFeGlzdHNTeW5jKGZpbGUpICYmIH5sb2NhbGUubGFzdEluZGV4T2YoJ18nKSkge1xuICAgICAgICAgICAgLy8gYXR0ZW1wdCBmYWxsYmFjayB0byBsYW5ndWFnZSBvbmx5XG4gICAgICAgICAgICBjb25zdCBsYW5ndWFnZUZpbGUgPSBzaGltLnJlc29sdmUoZGlyZWN0b3J5LCAnLi8nLCBsb2NhbGUuc3BsaXQoJ18nKVswXSArICcuanNvbicpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbGVFeGlzdHNTeW5jKGxhbmd1YWdlRmlsZSkpXG4gICAgICAgICAgICAgICAgZmlsZSA9IGxhbmd1YWdlRmlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsZTtcbiAgICB9XG4gICAgX2ZpbGVFeGlzdHNTeW5jKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHNoaW0uZXhpc3RzKGZpbGUpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB5MThuKG9wdHMsIF9zaGltKSB7XG4gICAgc2hpbSA9IF9zaGltO1xuICAgIGNvbnN0IHkxOG4gPSBuZXcgWTE4TihvcHRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBfXzogeTE4bi5fXy5iaW5kKHkxOG4pLFxuICAgICAgICBfX246IHkxOG4uX19uLmJpbmQoeTE4biksXG4gICAgICAgIHNldExvY2FsZTogeTE4bi5zZXRMb2NhbGUuYmluZCh5MThuKSxcbiAgICAgICAgZ2V0TG9jYWxlOiB5MThuLmdldExvY2FsZS5iaW5kKHkxOG4pLFxuICAgICAgICB1cGRhdGVMb2NhbGU6IHkxOG4udXBkYXRlTG9jYWxlLmJpbmQoeTE4biksXG4gICAgICAgIGxvY2FsZTogeTE4bi5sb2NhbGVcbiAgICB9O1xufVxuIiwgImltcG9ydCBzaGltIGZyb20gJy4vYnVpbGQvbGliL3BsYXRmb3JtLXNoaW1zL25vZGUuanMnXG5pbXBvcnQgeyB5MThuIGFzIF95MThuIH0gZnJvbSAnLi9idWlsZC9saWIvaW5kZXguanMnXG5cbmNvbnN0IHkxOG4gPSAob3B0cykgPT4ge1xuICByZXR1cm4gX3kxOG4ob3B0cywgc2hpbSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgeTE4blxuIiwgImV4cG9ydCBmdW5jdGlvbiBhc3NlcnROb3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBzaGltLCBtZXNzYWdlKSB7XG4gICAgc2hpbS5hc3NlcnQubm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U2luZ2xlS2V5KGFjdHVhbCwgc2hpbSkge1xuICAgIHNoaW0uYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiBhY3R1YWwsICdzdHJpbmcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RLZXlzKG9iamVjdCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UobWF5YmVQcm9taXNlKSB7XG4gICAgcmV0dXJuICghIW1heWJlUHJvbWlzZSAmJlxuICAgICAgICAhIW1heWJlUHJvbWlzZS50aGVuICYmXG4gICAgICAgIHR5cGVvZiBtYXliZVByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG4iLCAiZXhwb3J0IGNsYXNzIFlFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcbiAgICAgICAgc3VwZXIobXNnIHx8ICd5YXJncyBlcnJvcicpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnWUVycm9yJztcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBZRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbW1hbmQoY21kKSB7XG4gICAgY29uc3QgZXh0cmFTcGFjZXNTdHJpcHBlZENvbW1hbmQgPSBjbWQucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuICAgIGNvbnN0IHNwbGl0Q29tbWFuZCA9IGV4dHJhU3BhY2VzU3RyaXBwZWRDb21tYW5kLnNwbGl0KC9cXHMrKD8hW15bXSpdfFtePF0qPikvKTtcbiAgICBjb25zdCBicmVnZXggPSAvXFwuKltcXF1bPD5dL2c7XG4gICAgY29uc3QgZmlyc3RDb21tYW5kID0gc3BsaXRDb21tYW5kLnNoaWZ0KCk7XG4gICAgaWYgKCFmaXJzdENvbW1hbmQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29tbWFuZCBmb3VuZCBpbjogJHtjbWR9YCk7XG4gICAgY29uc3QgcGFyc2VkQ29tbWFuZCA9IHtcbiAgICAgICAgY21kOiBmaXJzdENvbW1hbmQucmVwbGFjZShicmVnZXgsICcnKSxcbiAgICAgICAgZGVtYW5kZWQ6IFtdLFxuICAgICAgICBvcHRpb25hbDogW10sXG4gICAgfTtcbiAgICBzcGxpdENvbW1hbmQuZm9yRWFjaCgoY21kLCBpKSA9PiB7XG4gICAgICAgIGxldCB2YXJpYWRpYyA9IGZhbHNlO1xuICAgICAgICBjbWQgPSBjbWQucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgaWYgKC9cXC4rW1xcXT5dLy50ZXN0KGNtZCkgJiYgaSA9PT0gc3BsaXRDb21tYW5kLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICB2YXJpYWRpYyA9IHRydWU7XG4gICAgICAgIGlmICgvXlxcWy8udGVzdChjbWQpKSB7XG4gICAgICAgICAgICBwYXJzZWRDb21tYW5kLm9wdGlvbmFsLnB1c2goe1xuICAgICAgICAgICAgICAgIGNtZDogY21kLnJlcGxhY2UoYnJlZ2V4LCAnJykuc3BsaXQoJ3wnKSxcbiAgICAgICAgICAgICAgICB2YXJpYWRpYyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkQ29tbWFuZC5kZW1hbmRlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbWQ6IGNtZC5yZXBsYWNlKGJyZWdleCwgJycpLnNwbGl0KCd8JyksXG4gICAgICAgICAgICAgICAgdmFyaWFkaWMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZWRDb21tYW5kO1xufVxuIiwgImltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4veWVycm9yLmpzJztcbmltcG9ydCB7IHBhcnNlQ29tbWFuZCB9IGZyb20gJy4vcGFyc2UtY29tbWFuZC5qcyc7XG5jb25zdCBwb3NpdGlvbk5hbWUgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnZmlmdGgnLCAnc2l4dGgnXTtcbmV4cG9ydCBmdW5jdGlvbiBhcmdzZXJ0KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBmdW5jdGlvbiBwYXJzZUFyZ3MoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgYXJnMSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgID8gW3sgZGVtYW5kZWQ6IFtdLCBvcHRpb25hbDogW10gfSwgYXJnMSwgYXJnMl1cbiAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgIHBhcnNlQ29tbWFuZChgY21kICR7YXJnMX1gKSxcbiAgICAgICAgICAgICAgICBhcmcyLFxuICAgICAgICAgICAgICAgIGFyZzMsXG4gICAgICAgICAgICBdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgICAgICBjb25zdCBbcGFyc2VkLCBjYWxsZXJBcmd1bWVudHMsIF9sZW5ndGhdID0gcGFyc2VBcmdzKCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGNhbGxlckFyZ3VtZW50cyk7XG4gICAgICAgIHdoaWxlIChhcmdzLmxlbmd0aCAmJiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGFyZ3MucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IF9sZW5ndGggfHwgYXJncy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPCBwYXJzZWQuZGVtYW5kZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKGBOb3QgZW5vdWdoIGFyZ3VtZW50cyBwcm92aWRlZC4gRXhwZWN0ZWQgJHtwYXJzZWQuZGVtYW5kZWQubGVuZ3RofSBidXQgcmVjZWl2ZWQgJHthcmdzLmxlbmd0aH0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG90YWxDb21tYW5kcyA9IHBhcnNlZC5kZW1hbmRlZC5sZW5ndGggKyBwYXJzZWQub3B0aW9uYWwubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoID4gdG90YWxDb21tYW5kcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihgVG9vIG1hbnkgYXJndW1lbnRzIHByb3ZpZGVkLiBFeHBlY3RlZCBtYXggJHt0b3RhbENvbW1hbmRzfSBidXQgcmVjZWl2ZWQgJHtsZW5ndGh9LmApO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5kZW1hbmRlZC5mb3JFYWNoKGRlbWFuZGVkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVkVHlwZSA9IGd1ZXNzVHlwZShhcmcpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdUeXBlcyA9IGRlbWFuZGVkLmNtZC5maWx0ZXIodHlwZSA9PiB0eXBlID09PSBvYnNlcnZlZFR5cGUgfHwgdHlwZSA9PT0gJyonKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGluZ1R5cGVzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICBhcmd1bWVudFR5cGVFcnJvcihvYnNlcnZlZFR5cGUsIGRlbWFuZGVkLmNtZCwgcG9zaXRpb24pO1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcnNlZC5vcHRpb25hbC5mb3JFYWNoKG9wdGlvbmFsID0+IHtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBhcmcgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlZFR5cGUgPSBndWVzc1R5cGUoYXJnKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nVHlwZXMgPSBvcHRpb25hbC5jbWQuZmlsdGVyKHR5cGUgPT4gdHlwZSA9PT0gb2JzZXJ2ZWRUeXBlIHx8IHR5cGUgPT09ICcqJyk7XG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdUeXBlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgYXJndW1lbnRUeXBlRXJyb3Iob2JzZXJ2ZWRUeXBlLCBvcHRpb25hbC5jbWQsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IDE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnIuc3RhY2spO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGd1ZXNzVHlwZShhcmcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcmcgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiBhcmc7XG59XG5mdW5jdGlvbiBhcmd1bWVudFR5cGVFcnJvcihvYnNlcnZlZFR5cGUsIGFsbG93ZWRUeXBlcywgcG9zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgWUVycm9yKGBJbnZhbGlkICR7cG9zaXRpb25OYW1lW3Bvc2l0aW9uXSB8fCAnbWFueWl0aCd9IGFyZ3VtZW50LiBFeHBlY3RlZCAke2FsbG93ZWRUeXBlcy5qb2luKCcgb3IgJyl9IGJ1dCByZWNlaXZlZCAke29ic2VydmVkVHlwZX0uYCk7XG59XG4iLCAiaW1wb3J0IHsgYXJnc2VydCB9IGZyb20gJy4vYXJnc2VydC5qcyc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuL3V0aWxzL2lzLXByb21pc2UuanMnO1xuZXhwb3J0IGNsYXNzIEdsb2JhbE1pZGRsZXdhcmUge1xuICAgIGNvbnN0cnVjdG9yKHlhcmdzKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWlkZGxld2FyZSA9IFtdO1xuICAgICAgICB0aGlzLmZyb3plbnMgPSBbXTtcbiAgICAgICAgdGhpcy55YXJncyA9IHlhcmdzO1xuICAgIH1cbiAgICBhZGRNaWRkbGV3YXJlKGNhbGxiYWNrLCBhcHBseUJlZm9yZVZhbGlkYXRpb24sIGdsb2JhbCA9IHRydWUsIG11dGF0ZXMgPSBmYWxzZSkge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8ZnVuY3Rpb24+IFtib29sZWFuXSBbYm9vbGVhbl0gW2Jvb2xlYW5dJywgW2NhbGxiYWNrLCBhcHBseUJlZm9yZVZhbGlkYXRpb24sIGdsb2JhbF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrW2ldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdtaWRkbGV3YXJlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBtID0gY2FsbGJhY2tbaV07XG4gICAgICAgICAgICAgICAgbS5hcHBseUJlZm9yZVZhbGlkYXRpb24gPSBhcHBseUJlZm9yZVZhbGlkYXRpb247XG4gICAgICAgICAgICAgICAgbS5nbG9iYWwgPSBnbG9iYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLmdsb2JhbE1pZGRsZXdhcmUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IG0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIG0uYXBwbHlCZWZvcmVWYWxpZGF0aW9uID0gYXBwbHlCZWZvcmVWYWxpZGF0aW9uO1xuICAgICAgICAgICAgbS5nbG9iYWwgPSBnbG9iYWw7XG4gICAgICAgICAgICBtLm11dGF0ZXMgPSBtdXRhdGVzO1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnlhcmdzO1xuICAgIH1cbiAgICBhZGRDb2VyY2VNaWRkbGV3YXJlKGNhbGxiYWNrLCBvcHRpb24pIHtcbiAgICAgICAgY29uc3QgYWxpYXNlcyA9IHRoaXMueWFyZ3MuZ2V0QWxpYXNlcygpO1xuICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUgPSB0aGlzLmdsb2JhbE1pZGRsZXdhcmUuZmlsdGVyKG0gPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9DaGVjayA9IFsuLi4oYWxpYXNlc1tvcHRpb25dIHx8IFtdKSwgb3B0aW9uXTtcbiAgICAgICAgICAgIGlmICghbS5vcHRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuICF0b0NoZWNrLmluY2x1ZGVzKG0ub3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrLm9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTWlkZGxld2FyZShjYWxsYmFjaywgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIGdldE1pZGRsZXdhcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdsb2JhbE1pZGRsZXdhcmU7XG4gICAgfVxuICAgIGZyZWV6ZSgpIHtcbiAgICAgICAgdGhpcy5mcm96ZW5zLnB1c2goWy4uLnRoaXMuZ2xvYmFsTWlkZGxld2FyZV0pO1xuICAgIH1cbiAgICB1bmZyZWV6ZSgpIHtcbiAgICAgICAgY29uc3QgZnJvemVuID0gdGhpcy5mcm96ZW5zLnBvcCgpO1xuICAgICAgICBpZiAoZnJvemVuICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUgPSBmcm96ZW47XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUgPSB0aGlzLmdsb2JhbE1pZGRsZXdhcmUuZmlsdGVyKG0gPT4gbS5nbG9iYWwpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kTWlkZGxld2FyZUZhY3RvcnkoY29tbWFuZE1pZGRsZXdhcmUpIHtcbiAgICBpZiAoIWNvbW1hbmRNaWRkbGV3YXJlKVxuICAgICAgICByZXR1cm4gW107XG4gICAgcmV0dXJuIGNvbW1hbmRNaWRkbGV3YXJlLm1hcChtaWRkbGV3YXJlID0+IHtcbiAgICAgICAgbWlkZGxld2FyZS5hcHBseUJlZm9yZVZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmU7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKGFyZ3YsIHlhcmdzLCBtaWRkbGV3YXJlcywgYmVmb3JlVmFsaWRhdGlvbikge1xuICAgIHJldHVybiBtaWRkbGV3YXJlcy5yZWR1Y2UoKGFjYywgbWlkZGxld2FyZSkgPT4ge1xuICAgICAgICBpZiAobWlkZGxld2FyZS5hcHBseUJlZm9yZVZhbGlkYXRpb24gIT09IGJlZm9yZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pZGRsZXdhcmUubXV0YXRlcykge1xuICAgICAgICAgICAgaWYgKG1pZGRsZXdhcmUuYXBwbGllZClcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgbWlkZGxld2FyZS5hcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9taXNlKGFjYykpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgICAgICAudGhlbihpbml0aWFsT2JqID0+IFByb21pc2UuYWxsKFtpbml0aWFsT2JqLCBtaWRkbGV3YXJlKGluaXRpYWxPYmosIHlhcmdzKV0pKVxuICAgICAgICAgICAgICAgIC50aGVuKChbaW5pdGlhbE9iaiwgbWlkZGxld2FyZU9ial0pID0+IE9iamVjdC5hc3NpZ24oaW5pdGlhbE9iaiwgbWlkZGxld2FyZU9iaikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbWlkZGxld2FyZShhY2MsIHlhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiBpc1Byb21pc2UocmVzdWx0KVxuICAgICAgICAgICAgICAgID8gcmVzdWx0LnRoZW4obWlkZGxld2FyZU9iaiA9PiBPYmplY3QuYXNzaWduKGFjYywgbWlkZGxld2FyZU9iaikpXG4gICAgICAgICAgICAgICAgOiBPYmplY3QuYXNzaWduKGFjYywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0sIGFyZ3YpO1xufVxuIiwgImltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4vaXMtcHJvbWlzZS5qcyc7XG5leHBvcnQgZnVuY3Rpb24gbWF5YmVBc3luY1Jlc3VsdChnZXRSZXN1bHQsIHJlc3VsdEhhbmRsZXIsIGVycm9ySGFuZGxlciA9IChlcnIpID0+IHtcbiAgICB0aHJvdyBlcnI7XG59KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaXNGdW5jdGlvbihnZXRSZXN1bHQpID8gZ2V0UmVzdWx0KCkgOiBnZXRSZXN1bHQ7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UocmVzdWx0KVxuICAgICAgICAgICAgPyByZXN1bHQudGhlbigocmVzdWx0KSA9PiByZXN1bHRIYW5kbGVyKHJlc3VsdCkpXG4gICAgICAgICAgICA6IHJlc3VsdEhhbmRsZXIocmVzdWx0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZXJyb3JIYW5kbGVyKGVycik7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsICJpbXBvcnQgeyBhc3NlcnROb3RTdHJpY3RFcXVhbCwgfSBmcm9tICcuL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4vdXRpbHMvaXMtcHJvbWlzZS5qcyc7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbW1hbmRNaWRkbGV3YXJlRmFjdG9yeSwgfSBmcm9tICcuL21pZGRsZXdhcmUuanMnO1xuaW1wb3J0IHsgcGFyc2VDb21tYW5kIH0gZnJvbSAnLi9wYXJzZS1jb21tYW5kLmpzJztcbmltcG9ydCB7IGlzWWFyZ3NJbnN0YW5jZSwgfSBmcm9tICcuL3lhcmdzLWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgbWF5YmVBc3luY1Jlc3VsdCB9IGZyb20gJy4vdXRpbHMvbWF5YmUtYXN5bmMtcmVzdWx0LmpzJztcbmNvbnN0IERFRkFVTFRfTUFSS0VSID0gLyheXFwqKXwoXlxcJDApLztcbmV4cG9ydCBjbGFzcyBDb21tYW5kSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHVzYWdlLCB2YWxpZGF0aW9uLCBnbG9iYWxNaWRkbGV3YXJlLCBzaGltKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZUNhY2hlID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0ge307XG4gICAgICAgIHRoaXMuYWxpYXNNYXAgPSB7fTtcbiAgICAgICAgdGhpcy5mcm96ZW5zID0gW107XG4gICAgICAgIHRoaXMuc2hpbSA9IHNoaW07XG4gICAgICAgIHRoaXMudXNhZ2UgPSB1c2FnZTtcbiAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlID0gZ2xvYmFsTWlkZGxld2FyZTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uID0gdmFsaWRhdGlvbjtcbiAgICB9XG4gICAgYWRkRGlyZWN0b3J5KGRpciwgcmVxLCBjYWxsZXJGaWxlLCBvcHRzKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICB0aGlzLnJlcXVpcmVDYWNoZS5hZGQoY2FsbGVyRmlsZSk7XG4gICAgICAgIGNvbnN0IGZ1bGxEaXJQYXRoID0gdGhpcy5zaGltLnBhdGgucmVzb2x2ZSh0aGlzLnNoaW0ucGF0aC5kaXJuYW1lKGNhbGxlckZpbGUpLCBkaXIpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuc2hpbS5yZWFkZGlyU3luYyhmdWxsRGlyUGF0aCwge1xuICAgICAgICAgICAgcmVjdXJzaXZlOiBvcHRzLnJlY3Vyc2UgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0cy5leHRlbnNpb25zKSlcbiAgICAgICAgICAgIG9wdHMuZXh0ZW5zaW9ucyA9IFsnanMnXTtcbiAgICAgICAgY29uc3QgdmlzaXQgPSB0eXBlb2Ygb3B0cy52aXNpdCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMudmlzaXQgOiAobykgPT4gbztcbiAgICAgICAgZm9yIChjb25zdCBmaWxlYiBvZiBmaWxlcykge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGViLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAob3B0cy5leGNsdWRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4Y2x1ZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMuZXhjbHVkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBleGNsdWRlID0gb3B0cy5leGNsdWRlKGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZSA9IG9wdHMuZXhjbHVkZS50ZXN0KGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0cy5pbmNsdWRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluY2x1ZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdHMuaW5jbHVkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlID0gb3B0cy5pbmNsdWRlKGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSA9IG9wdHMuaW5jbHVkZS50ZXN0KGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN1cHBvcnRlZEV4dGVuc2lvbiA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBleHQgb2Ygb3B0cy5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUuZW5kc1dpdGgoZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkRXh0ZW5zaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZWRFeHRlbnNpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBqb2luZWQgPSB0aGlzLnNoaW0ucGF0aC5qb2luKGZ1bGxEaXJQYXRoLCBmaWxlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGUgPSByZXEoam9pbmVkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbmRhYmxlTW9kdWxlID0gT2JqZWN0LmNyZWF0ZShudWxsLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh7IC4uLm1vZHVsZSB9KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlzaXRlZCA9IHZpc2l0KGV4dGVuZGFibGVNb2R1bGUsIGpvaW5lZCwgZmlsZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWlyZUNhY2hlLmhhcyhqb2luZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZUNhY2hlLmFkZChqb2luZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4dGVuZGFibGVNb2R1bGUuY29tbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kYWJsZU1vZHVsZS5jb21tYW5kID0gdGhpcy5zaGltLnBhdGguYmFzZW5hbWUoam9pbmVkLCB0aGlzLnNoaW0ucGF0aC5leHRuYW1lKGpvaW5lZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcihleHRlbmRhYmxlTW9kdWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkSGFuZGxlcihjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBjb21tYW5kTWlkZGxld2FyZSwgZGVwcmVjYXRlZCkge1xuICAgICAgICBsZXQgYWxpYXNlcyA9IFtdO1xuICAgICAgICBjb25zdCBtaWRkbGV3YXJlcyA9IGNvbW1hbmRNaWRkbGV3YXJlRmFjdG9yeShjb21tYW5kTWlkZGxld2FyZSk7XG4gICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyIHx8ICgoKSA9PiB7IH0pO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbWQpKSB7XG4gICAgICAgICAgICBpZiAoaXNDb21tYW5kQW5kQWxpYXNlcyhjbWQpKSB7XG4gICAgICAgICAgICAgICAgW2NtZCwgLi4uYWxpYXNlc10gPSBjbWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbW1hbmQgb2YgY21kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcihjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDb21tYW5kSGFuZGxlckRlZmluaXRpb24oY21kKSkge1xuICAgICAgICAgICAgbGV0IGNvbW1hbmQgPSBBcnJheS5pc0FycmF5KGNtZC5jb21tYW5kKSB8fCB0eXBlb2YgY21kLmNvbW1hbmQgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBjbWQuY29tbWFuZFxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChjb21tYW5kID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjb21tYW5kIG5hbWUgZ2l2ZW4gZm9yIG1vZHVsZTogJHt0aGlzLnNoaW0uaW5zcGVjdChjbWQpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNtZC5hbGlhc2VzKVxuICAgICAgICAgICAgICAgIGNvbW1hbmQgPSBbXS5jb25jYXQoY29tbWFuZCkuY29uY2F0KGNtZC5hbGlhc2VzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcihjb21tYW5kLCB0aGlzLmV4dHJhY3REZXNjKGNtZCksIGNtZC5idWlsZGVyLCBjbWQuaGFuZGxlciwgY21kLm1pZGRsZXdhcmVzLCBjbWQuZGVwcmVjYXRlZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDb21tYW5kQnVpbGRlckRlZmluaXRpb24oYnVpbGRlcikpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcihbY21kXS5jb25jYXQoYWxpYXNlcyksIGRlc2NyaXB0aW9uLCBidWlsZGVyLmJ1aWxkZXIsIGJ1aWxkZXIuaGFuZGxlciwgYnVpbGRlci5taWRkbGV3YXJlcywgYnVpbGRlci5kZXByZWNhdGVkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNtZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZENvbW1hbmQgPSBwYXJzZUNvbW1hbmQoY21kKTtcbiAgICAgICAgICAgIGFsaWFzZXMgPSBhbGlhc2VzLm1hcChhbGlhcyA9PiBwYXJzZUNvbW1hbmQoYWxpYXMpLmNtZCk7XG4gICAgICAgICAgICBsZXQgaXNEZWZhdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBbGlhc2VzID0gW3BhcnNlZENvbW1hbmQuY21kXS5jb25jYXQoYWxpYXNlcykuZmlsdGVyKGMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChERUZBVUxUX01BUktFUi50ZXN0KGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwYXJzZWRBbGlhc2VzLmxlbmd0aCA9PT0gMCAmJiBpc0RlZmF1bHQpXG4gICAgICAgICAgICAgICAgcGFyc2VkQWxpYXNlcy5wdXNoKCckMCcpO1xuICAgICAgICAgICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIHBhcnNlZENvbW1hbmQuY21kID0gcGFyc2VkQWxpYXNlc1swXTtcbiAgICAgICAgICAgICAgICBhbGlhc2VzID0gcGFyc2VkQWxpYXNlcy5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBjbWQgPSBjbWQucmVwbGFjZShERUZBVUxUX01BUktFUiwgcGFyc2VkQ29tbWFuZC5jbWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxpYXNlcy5mb3JFYWNoKGFsaWFzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsaWFzTWFwW2FsaWFzXSA9IHBhcnNlZENvbW1hbmQuY21kO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRpb24gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2FnZS5jb21tYW5kKGNtZCwgZGVzY3JpcHRpb24sIGlzRGVmYXVsdCwgYWxpYXNlcywgZGVwcmVjYXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW3BhcnNlZENvbW1hbmQuY21kXSA9IHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbDogY21kLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgICAgYnVpbGRlcjogYnVpbGRlciB8fCB7fSxcbiAgICAgICAgICAgICAgICBtaWRkbGV3YXJlcyxcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVkLFxuICAgICAgICAgICAgICAgIGRlbWFuZGVkOiBwYXJzZWRDb21tYW5kLmRlbWFuZGVkLFxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiBwYXJzZWRDb21tYW5kLm9wdGlvbmFsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0RlZmF1bHQpXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q29tbWFuZCA9IHRoaXMuaGFuZGxlcnNbcGFyc2VkQ29tbWFuZC5jbWRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldENvbW1hbmRIYW5kbGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnM7XG4gICAgfVxuICAgIGdldENvbW1hbmRzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYW5kbGVycykuY29uY2F0KE9iamVjdC5rZXlzKHRoaXMuYWxpYXNNYXApKTtcbiAgICB9XG4gICAgaGFzRGVmYXVsdENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZGVmYXVsdENvbW1hbmQ7XG4gICAgfVxuICAgIHJ1bkNvbW1hbmQoY29tbWFuZCwgeWFyZ3MsIHBhcnNlZCwgY29tbWFuZEluZGV4LCBoZWxwT25seSwgaGVscE9yVmVyc2lvblNldCkge1xuICAgICAgICBjb25zdCBjb21tYW5kSGFuZGxlciA9IHRoaXMuaGFuZGxlcnNbY29tbWFuZF0gfHxcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbdGhpcy5hbGlhc01hcFtjb21tYW5kXV0gfHxcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvbW1hbmQ7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCBwYXJlbnRDb21tYW5kcyA9IGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IGlzRGVmYXVsdENvbW1hbmQgPSAhY29tbWFuZDtcbiAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLnB1c2goY29tbWFuZCk7XG4gICAgICAgICAgICBjdXJyZW50Q29udGV4dC5mdWxsQ29tbWFuZHMucHVzaChjb21tYW5kSGFuZGxlci5vcmlnaW5hbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVpbGRlclJlc3VsdCA9IHRoaXMuYXBwbHlCdWlsZGVyVXBkYXRlVXNhZ2VBbmRQYXJzZShpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgeWFyZ3MsIHBhcnNlZC5hbGlhc2VzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSwgaGVscE9yVmVyc2lvblNldCk7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UoYnVpbGRlclJlc3VsdClcbiAgICAgICAgICAgID8gYnVpbGRlclJlc3VsdC50aGVuKHJlc3VsdCA9PiB0aGlzLmFwcGx5TWlkZGxld2FyZUFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgcmVzdWx0LmlubmVyQXJndiwgY3VycmVudENvbnRleHQsIGhlbHBPbmx5LCByZXN1bHQuYWxpYXNlcywgeWFyZ3MpKVxuICAgICAgICAgICAgOiB0aGlzLmFwcGx5TWlkZGxld2FyZUFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgYnVpbGRlclJlc3VsdC5pbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBoZWxwT25seSwgYnVpbGRlclJlc3VsdC5hbGlhc2VzLCB5YXJncyk7XG4gICAgfVxuICAgIGFwcGx5QnVpbGRlclVwZGF0ZVVzYWdlQW5kUGFyc2UoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIHlhcmdzLCBhbGlhc2VzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSwgaGVscE9yVmVyc2lvblNldCkge1xuICAgICAgICBjb25zdCBidWlsZGVyID0gY29tbWFuZEhhbmRsZXIuYnVpbGRlcjtcbiAgICAgICAgbGV0IGlubmVyWWFyZ3MgPSB5YXJncztcbiAgICAgICAgaWYgKGlzQ29tbWFuZEJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKSkge1xuICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmZyZWV6ZSgpO1xuICAgICAgICAgICAgY29uc3QgYnVpbGRlck91dHB1dCA9IGJ1aWxkZXIoeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkucmVzZXQoYWxpYXNlcyksIGhlbHBPclZlcnNpb25TZXQpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShidWlsZGVyT3V0cHV0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyT3V0cHV0LnRoZW4ob3V0cHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJZYXJncyA9IGlzWWFyZ3NJbnN0YW5jZShvdXRwdXQpID8gb3V0cHV0IDogeWFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQW5kVXBkYXRlVXNhZ2UoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGlubmVyWWFyZ3MsIHBhcmVudENvbW1hbmRzLCBjb21tYW5kSW5kZXgsIGhlbHBPbmx5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0NvbW1hbmRCdWlsZGVyT3B0aW9uRGVmaW5pdGlvbnMoYnVpbGRlcikpIHtcbiAgICAgICAgICAgIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlSW5zdGFuY2UoKS5mcmVlemUoKTtcbiAgICAgICAgICAgIGlubmVyWWFyZ3MgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5yZXNldChhbGlhc2VzKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbW1hbmRIYW5kbGVyLmJ1aWxkZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lcllhcmdzLm9wdGlvbihrZXksIGJ1aWxkZXJba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFuZFVwZGF0ZVVzYWdlKGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lcllhcmdzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSk7XG4gICAgfVxuICAgIHBhcnNlQW5kVXBkYXRlVXNhZ2UoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGlubmVyWWFyZ3MsIHBhcmVudENvbW1hbmRzLCBjb21tYW5kSW5kZXgsIGhlbHBPbmx5KSB7XG4gICAgICAgIGlmIChpc0RlZmF1bHRDb21tYW5kKVxuICAgICAgICAgICAgaW5uZXJZYXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkudW5mcmVlemUodHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZVVzYWdlKGlubmVyWWFyZ3MpKSB7XG4gICAgICAgICAgICBpbm5lcllhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLmdldFVzYWdlSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC51c2FnZSh0aGlzLnVzYWdlRnJvbVBhcmVudENvbW1hbmRzQ29tbWFuZEhhbmRsZXIocGFyZW50Q29tbWFuZHMsIGNvbW1hbmRIYW5kbGVyKSwgY29tbWFuZEhhbmRsZXIuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlubmVyQXJndiA9IGlubmVyWWFyZ3NcbiAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgLnJ1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzKG51bGwsIHVuZGVmaW5lZCwgdHJ1ZSwgY29tbWFuZEluZGV4LCBoZWxwT25seSk7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UoaW5uZXJBcmd2KVxuICAgICAgICAgICAgPyBpbm5lckFyZ3YudGhlbihhcmd2ID0+ICh7XG4gICAgICAgICAgICAgICAgYWxpYXNlczogaW5uZXJZYXJncy5wYXJzZWQuYWxpYXNlcyxcbiAgICAgICAgICAgICAgICBpbm5lckFyZ3Y6IGFyZ3YsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGFsaWFzZXM6IGlubmVyWWFyZ3MucGFyc2VkLmFsaWFzZXMsXG4gICAgICAgICAgICAgICAgaW5uZXJBcmd2OiBpbm5lckFyZ3YsXG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgICBzaG91bGRVcGRhdGVVc2FnZSh5YXJncykge1xuICAgICAgICByZXR1cm4gKCF5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuZ2V0VXNhZ2VEaXNhYmxlZCgpICYmXG4gICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuZ2V0VXNhZ2UoKS5sZW5ndGggPT09IDApO1xuICAgIH1cbiAgICB1c2FnZUZyb21QYXJlbnRDb21tYW5kc0NvbW1hbmRIYW5kbGVyKHBhcmVudENvbW1hbmRzLCBjb21tYW5kSGFuZGxlcikge1xuICAgICAgICBjb25zdCBjID0gREVGQVVMVF9NQVJLRVIudGVzdChjb21tYW5kSGFuZGxlci5vcmlnaW5hbClcbiAgICAgICAgICAgID8gY29tbWFuZEhhbmRsZXIub3JpZ2luYWwucmVwbGFjZShERUZBVUxUX01BUktFUiwgJycpLnRyaW0oKVxuICAgICAgICAgICAgOiBjb21tYW5kSGFuZGxlci5vcmlnaW5hbDtcbiAgICAgICAgY29uc3QgcGMgPSBwYXJlbnRDb21tYW5kcy5maWx0ZXIoYyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIURFRkFVTFRfTUFSS0VSLnRlc3QoYyk7XG4gICAgICAgIH0pO1xuICAgICAgICBwYy5wdXNoKGMpO1xuICAgICAgICByZXR1cm4gYCQwICR7cGMuam9pbignICcpfWA7XG4gICAgfVxuICAgIGhhbmRsZVZhbGlkYXRpb25BbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGlubmVyQXJndiwgY3VycmVudENvbnRleHQsIGFsaWFzZXMsIHlhcmdzLCBtaWRkbGV3YXJlcywgcG9zaXRpb25hbE1hcCkge1xuICAgICAgICBpZiAoIXlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldEhhc091dHB1dCgpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0geWFyZ3NcbiAgICAgICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgICAgICAucnVuVmFsaWRhdGlvbihhbGlhc2VzLCBwb3NpdGlvbmFsTWFwLCB5YXJncy5wYXJzZWQuZXJyb3IsIGlzRGVmYXVsdENvbW1hbmQpO1xuICAgICAgICAgICAgaW5uZXJBcmd2ID0gbWF5YmVBc3luY1Jlc3VsdChpbm5lckFyZ3YsIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZEhhbmRsZXIuaGFuZGxlciAmJiAheWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0SGFzT3V0cHV0KCkpIHtcbiAgICAgICAgICAgIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLnNldEhhc091dHB1dCgpO1xuICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVEb3VibGVEYXNoID0gISF5YXJncy5nZXRPcHRpb25zKCkuY29uZmlndXJhdGlvblsncG9wdWxhdGUtLSddO1xuICAgICAgICAgICAgeWFyZ3NcbiAgICAgICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgICAgICAucG9zdFByb2Nlc3MoaW5uZXJBcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICBpbm5lckFyZ3YgPSBhcHBseU1pZGRsZXdhcmUoaW5uZXJBcmd2LCB5YXJncywgbWlkZGxld2FyZXMsIGZhbHNlKTtcbiAgICAgICAgICAgIGlubmVyQXJndiA9IG1heWJlQXN5bmNSZXN1bHQoaW5uZXJBcmd2LCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJSZXN1bHQgPSBjb21tYW5kSGFuZGxlci5oYW5kbGVyKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShoYW5kbGVyUmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZXJSZXN1bHQudGhlbigoKSA9PiByZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIDogcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWlzRGVmYXVsdENvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuY2FjaGVIZWxwTWVzc2FnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShpbm5lckFyZ3YpICYmXG4gICAgICAgICAgICAgICAgIXlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmhhc1BhcnNlQ2FsbGJhY2soKSkge1xuICAgICAgICAgICAgICAgIGlubmVyQXJndi5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuZmFpbChudWxsLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNEZWZhdWx0Q29tbWFuZCkge1xuICAgICAgICAgICAgY3VycmVudENvbnRleHQuY29tbWFuZHMucG9wKCk7XG4gICAgICAgICAgICBjdXJyZW50Q29udGV4dC5mdWxsQ29tbWFuZHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlubmVyQXJndjtcbiAgICB9XG4gICAgYXBwbHlNaWRkbGV3YXJlQW5kR2V0UmVzdWx0KGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBoZWxwT25seSwgYWxpYXNlcywgeWFyZ3MpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uYWxNYXAgPSB7fTtcbiAgICAgICAgaWYgKGhlbHBPbmx5KVxuICAgICAgICAgICAgcmV0dXJuIGlubmVyQXJndjtcbiAgICAgICAgaWYgKCF5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRIYXNPdXRwdXQoKSkge1xuICAgICAgICAgICAgcG9zaXRpb25hbE1hcCA9IHRoaXMucG9wdWxhdGVQb3NpdGlvbmFscyhjb21tYW5kSGFuZGxlciwgaW5uZXJBcmd2LCBjdXJyZW50Q29udGV4dCwgeWFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gdGhpcy5nbG9iYWxNaWRkbGV3YXJlXG4gICAgICAgICAgICAuZ2V0TWlkZGxld2FyZSgpXG4gICAgICAgICAgICAuc2xpY2UoMClcbiAgICAgICAgICAgIC5jb25jYXQoY29tbWFuZEhhbmRsZXIubWlkZGxld2FyZXMpO1xuICAgICAgICBjb25zdCBtYXliZVByb21pc2VBcmd2ID0gYXBwbHlNaWRkbGV3YXJlKGlubmVyQXJndiwgeWFyZ3MsIG1pZGRsZXdhcmVzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShtYXliZVByb21pc2VBcmd2KVxuICAgICAgICAgICAgPyBtYXliZVByb21pc2VBcmd2LnRoZW4ocmVzb2x2ZWRJbm5lckFyZ3YgPT4gdGhpcy5oYW5kbGVWYWxpZGF0aW9uQW5kR2V0UmVzdWx0KGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCByZXNvbHZlZElubmVyQXJndiwgY3VycmVudENvbnRleHQsIGFsaWFzZXMsIHlhcmdzLCBtaWRkbGV3YXJlcywgcG9zaXRpb25hbE1hcCkpXG4gICAgICAgICAgICA6IHRoaXMuaGFuZGxlVmFsaWRhdGlvbkFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgbWF5YmVQcm9taXNlQXJndiwgY3VycmVudENvbnRleHQsIGFsaWFzZXMsIHlhcmdzLCBtaWRkbGV3YXJlcywgcG9zaXRpb25hbE1hcCk7XG4gICAgfVxuICAgIHBvcHVsYXRlUG9zaXRpb25hbHMoY29tbWFuZEhhbmRsZXIsIGFyZ3YsIGNvbnRleHQsIHlhcmdzKSB7XG4gICAgICAgIGFyZ3YuXyA9IGFyZ3YuXy5zbGljZShjb250ZXh0LmNvbW1hbmRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRlbWFuZGVkID0gY29tbWFuZEhhbmRsZXIuZGVtYW5kZWQuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsID0gY29tbWFuZEhhbmRsZXIub3B0aW9uYWwuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uYWxNYXAgPSB7fTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uLnBvc2l0aW9uYWxDb3VudChkZW1hbmRlZC5sZW5ndGgsIGFyZ3YuXy5sZW5ndGgpO1xuICAgICAgICB3aGlsZSAoZGVtYW5kZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkZW1hbmQgPSBkZW1hbmRlZC5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVBvc2l0aW9uYWwoZGVtYW5kLCBhcmd2LCBwb3NpdGlvbmFsTWFwKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAob3B0aW9uYWwubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBtYXliZSA9IG9wdGlvbmFsLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlUG9zaXRpb25hbChtYXliZSwgYXJndiwgcG9zaXRpb25hbE1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgYXJndi5fID0gY29udGV4dC5jb21tYW5kcy5jb25jYXQoYXJndi5fLm1hcChhID0+ICcnICsgYSkpO1xuICAgICAgICB0aGlzLnBvc3RQcm9jZXNzUG9zaXRpb25hbHMoYXJndiwgcG9zaXRpb25hbE1hcCwgdGhpcy5jbWRUb1BhcnNlT3B0aW9ucyhjb21tYW5kSGFuZGxlci5vcmlnaW5hbCksIHlhcmdzKTtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uYWxNYXA7XG4gICAgfVxuICAgIHBvcHVsYXRlUG9zaXRpb25hbChwb3NpdGlvbmFsLCBhcmd2LCBwb3NpdGlvbmFsTWFwKSB7XG4gICAgICAgIGNvbnN0IGNtZCA9IHBvc2l0aW9uYWwuY21kWzBdO1xuICAgICAgICBpZiAocG9zaXRpb25hbC52YXJpYWRpYykge1xuICAgICAgICAgICAgcG9zaXRpb25hbE1hcFtjbWRdID0gYXJndi5fLnNwbGljZSgwKS5tYXAoU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhcmd2Ll8ubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uYWxNYXBbY21kXSA9IFtTdHJpbmcoYXJndi5fLnNoaWZ0KCkpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbWRUb1BhcnNlT3B0aW9ucyhjbWRTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcGFyc2VPcHRpb25zID0ge1xuICAgICAgICAgICAgYXJyYXk6IFtdLFxuICAgICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgICAgICBhbGlhczoge30sXG4gICAgICAgICAgICBkZW1hbmQ6IHt9LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUNvbW1hbmQoY21kU3RyaW5nKTtcbiAgICAgICAgcGFyc2VkLmRlbWFuZGVkLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBbY21kLCAuLi5hbGlhc2VzXSA9IGQuY21kO1xuICAgICAgICAgICAgaWYgKGQudmFyaWFkaWMpIHtcbiAgICAgICAgICAgICAgICBwYXJzZU9wdGlvbnMuYXJyYXkucHVzaChjbWQpO1xuICAgICAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5kZWZhdWx0W2NtZF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5hbGlhc1tjbWRdID0gYWxpYXNlcztcbiAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5kZW1hbmRbY21kXSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJzZWQub3B0aW9uYWwuZm9yRWFjaChvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtjbWQsIC4uLmFsaWFzZXNdID0gby5jbWQ7XG4gICAgICAgICAgICBpZiAoby52YXJpYWRpYykge1xuICAgICAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5hcnJheS5wdXNoKGNtZCk7XG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb25zLmRlZmF1bHRbY21kXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VPcHRpb25zLmFsaWFzW2NtZF0gPSBhbGlhc2VzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcnNlT3B0aW9ucztcbiAgICB9XG4gICAgcG9zdFByb2Nlc3NQb3NpdGlvbmFscyhhcmd2LCBwb3NpdGlvbmFsTWFwLCBwYXJzZU9wdGlvbnMsIHlhcmdzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB5YXJncy5nZXRPcHRpb25zKCkpO1xuICAgICAgICBvcHRpb25zLmRlZmF1bHQgPSBPYmplY3QuYXNzaWduKHBhcnNlT3B0aW9ucy5kZWZhdWx0LCBvcHRpb25zLmRlZmF1bHQpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJzZU9wdGlvbnMuYWxpYXMpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmFsaWFzW2tleV0gPSAob3B0aW9ucy5hbGlhc1trZXldIHx8IFtdKS5jb25jYXQocGFyc2VPcHRpb25zLmFsaWFzW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuYXJyYXkgPSBvcHRpb25zLmFycmF5LmNvbmNhdChwYXJzZU9wdGlvbnMuYXJyYXkpO1xuICAgICAgICBvcHRpb25zLmNvbmZpZyA9IHt9O1xuICAgICAgICBjb25zdCB1bnBhcnNlZCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhwb3NpdGlvbmFsTWFwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBwb3NpdGlvbmFsTWFwW2tleV0ubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb25maWd1cmF0aW9uWyd1bmtub3duLW9wdGlvbnMtYXMtYXJncyddKVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmtleVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB1bnBhcnNlZC5wdXNoKGAtLSR7a2V5fWApO1xuICAgICAgICAgICAgICAgIHVucGFyc2VkLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXVucGFyc2VkLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5jb25maWd1cmF0aW9uLCB7XG4gICAgICAgICAgICAncG9wdWxhdGUtLSc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5zaGltLlBhcnNlci5kZXRhaWxlZCh1bnBhcnNlZCwgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlnLFxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChwYXJzZWQuZXJyb3IpIHtcbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLmdldFVzYWdlSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC5mYWlsKHBhcnNlZC5lcnJvci5tZXNzYWdlLCBwYXJzZWQuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25hbEtleXMgPSBPYmplY3Qua2V5cyhwb3NpdGlvbmFsTWFwKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBvc2l0aW9uYWxNYXApLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbmFsS2V5cy5wdXNoKC4uLnBhcnNlZC5hbGlhc2VzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJzZWQuYXJndikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbmFsS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcG9zaXRpb25hbE1hcFtrZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25hbE1hcFtrZXldID0gcGFyc2VkLmFyZ3Zba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5Db25maWdzKHlhcmdzLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5pc0RlZmF1bHRlZCh5YXJncywga2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJzZWQuYXJndiwga2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkoYXJndltrZXldKSB8fCBBcnJheS5pc0FycmF5KHBhcnNlZC5hcmd2W2tleV0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltrZXldID0gW10uY29uY2F0KGFyZ3Zba2V5XSwgcGFyc2VkLmFyZ3Zba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2W2tleV0gPSBwYXJzZWQuYXJndltrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNEZWZhdWx0ZWQoeWFyZ3MsIGtleSkge1xuICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IGRlZmF1bHRzIH0gPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRzLCBrZXkpIHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVmYXVsdHMsIHRoaXMuc2hpbS5QYXJzZXIuY2FtZWxDYXNlKGtleSkpKTtcbiAgICB9XG4gICAgaXNJbkNvbmZpZ3MoeWFyZ3MsIGtleSkge1xuICAgICAgICBjb25zdCB7IGNvbmZpZ09iamVjdHMgfSA9IHlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIChjb25maWdPYmplY3RzLnNvbWUoYyA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYywga2V5KSkgfHxcbiAgICAgICAgICAgIGNvbmZpZ09iamVjdHMuc29tZShjID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLCB0aGlzLnNoaW0uUGFyc2VyLmNhbWVsQ2FzZShrZXkpKSkpO1xuICAgIH1cbiAgICBydW5EZWZhdWx0QnVpbGRlck9uKHlhcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWZhdWx0Q29tbWFuZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkVXBkYXRlVXNhZ2UoeWFyZ3MpKSB7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kU3RyaW5nID0gREVGQVVMVF9NQVJLRVIudGVzdCh0aGlzLmRlZmF1bHRDb21tYW5kLm9yaWdpbmFsKVxuICAgICAgICAgICAgICAgID8gdGhpcy5kZWZhdWx0Q29tbWFuZC5vcmlnaW5hbFxuICAgICAgICAgICAgICAgIDogdGhpcy5kZWZhdWx0Q29tbWFuZC5vcmlnaW5hbC5yZXBsYWNlKC9eW15bXFxdPD5dKi8sICckMCAnKTtcbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLmdldFVzYWdlSW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgIC51c2FnZShjb21tYW5kU3RyaW5nLCB0aGlzLmRlZmF1bHRDb21tYW5kLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWlsZGVyID0gdGhpcy5kZWZhdWx0Q29tbWFuZC5idWlsZGVyO1xuICAgICAgICBpZiAoaXNDb21tYW5kQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gYnVpbGRlcih5YXJncywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzQ29tbWFuZEJ1aWxkZXJEZWZpbml0aW9uKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhidWlsZGVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgeWFyZ3Mub3B0aW9uKGtleSwgYnVpbGRlcltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGV4dHJhY3REZXNjKHsgZGVzY3JpYmUsIGRlc2NyaXB0aW9uLCBkZXNjIH0pIHtcbiAgICAgICAgZm9yIChjb25zdCB0ZXN0IG9mIFtkZXNjcmliZSwgZGVzY3JpcHRpb24sIGRlc2NdKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdzdHJpbmcnIHx8IHRlc3QgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0O1xuICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwodGVzdCwgdHJ1ZSwgdGhpcy5zaGltKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZyZWV6ZSgpIHtcbiAgICAgICAgdGhpcy5mcm96ZW5zLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcnM6IHRoaXMuaGFuZGxlcnMsXG4gICAgICAgICAgICBhbGlhc01hcDogdGhpcy5hbGlhc01hcCxcbiAgICAgICAgICAgIGRlZmF1bHRDb21tYW5kOiB0aGlzLmRlZmF1bHRDb21tYW5kLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW5mcmVlemUoKSB7XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IHRoaXMuZnJvemVucy5wb3AoKTtcbiAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwoZnJvemVuLCB1bmRlZmluZWQsIHRoaXMuc2hpbSk7XG4gICAgICAgICh7XG4gICAgICAgICAgICBoYW5kbGVyczogdGhpcy5oYW5kbGVycyxcbiAgICAgICAgICAgIGFsaWFzTWFwOiB0aGlzLmFsaWFzTWFwLFxuICAgICAgICAgICAgZGVmYXVsdENvbW1hbmQ6IHRoaXMuZGVmYXVsdENvbW1hbmQsXG4gICAgICAgIH0gPSBmcm96ZW4pO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuICAgICAgICB0aGlzLmFsaWFzTWFwID0ge307XG4gICAgICAgIHRoaXMuZGVmYXVsdENvbW1hbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucmVxdWlyZUNhY2hlID0gbmV3IFNldCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZCh1c2FnZSwgdmFsaWRhdGlvbiwgZ2xvYmFsTWlkZGxld2FyZSwgc2hpbSkge1xuICAgIHJldHVybiBuZXcgQ29tbWFuZEluc3RhbmNlKHVzYWdlLCB2YWxpZGF0aW9uLCBnbG9iYWxNaWRkbGV3YXJlLCBzaGltKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRCdWlsZGVyRGVmaW5pdGlvbihidWlsZGVyKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgYnVpbGRlciA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgISFidWlsZGVyLmJ1aWxkZXIgJiZcbiAgICAgICAgdHlwZW9mIGJ1aWxkZXIuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc0NvbW1hbmRBbmRBbGlhc2VzKGNtZCkge1xuICAgIHJldHVybiBjbWQuZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZEJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBidWlsZGVyID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNDb21tYW5kQnVpbGRlck9wdGlvbkRlZmluaXRpb25zKGJ1aWxkZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGJ1aWxkZXIgPT09ICdvYmplY3QnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZEhhbmRsZXJEZWZpbml0aW9uKGNtZCkge1xuICAgIHJldHVybiB0eXBlb2YgY21kID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShjbWQpO1xufVxuIiwgImltcG9ydCB7IG9iamVjdEtleXMgfSBmcm9tICcuLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gb2JqRmlsdGVyKG9yaWdpbmFsID0ge30sIGZpbHRlciA9ICgpID0+IHRydWUpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBvYmplY3RLZXlzKG9yaWdpbmFsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXIoa2V5LCBvcmlnaW5hbFtrZXldKSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBvcmlnaW5hbFtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRCbG9ja2luZyhibG9ja2luZykge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcbiAgICBbcHJvY2Vzcy5zdGRvdXQsIHByb2Nlc3Muc3RkZXJyXS5mb3JFYWNoKF9zdHJlYW0gPT4ge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBfc3RyZWFtO1xuICAgICAgICBpZiAoc3RyZWFtLl9oYW5kbGUgJiZcbiAgICAgICAgICAgIHN0cmVhbS5pc1RUWSAmJlxuICAgICAgICAgICAgdHlwZW9mIHN0cmVhbS5faGFuZGxlLnNldEJsb2NraW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdHJlYW0uX2hhbmRsZS5zZXRCbG9ja2luZyhibG9ja2luZyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsICJpbXBvcnQgeyBvYmpGaWx0ZXIgfSBmcm9tICcuL3V0aWxzL29iai1maWx0ZXIuanMnO1xuaW1wb3J0IHsgWUVycm9yIH0gZnJvbSAnLi95ZXJyb3IuanMnO1xuaW1wb3J0IHNldEJsb2NraW5nIGZyb20gJy4vdXRpbHMvc2V0LWJsb2NraW5nLmpzJztcbmZ1bmN0aW9uIGlzQm9vbGVhbihmYWlsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBmYWlsID09PSAnYm9vbGVhbic7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNhZ2UoeWFyZ3MsIHNoaW0pIHtcbiAgICBjb25zdCBfXyA9IHNoaW0ueTE4bi5fXztcbiAgICBjb25zdCBzZWxmID0ge307XG4gICAgY29uc3QgZmFpbHMgPSBbXTtcbiAgICBzZWxmLmZhaWxGbiA9IGZ1bmN0aW9uIGZhaWxGbihmKSB7XG4gICAgICAgIGZhaWxzLnB1c2goZik7XG4gICAgfTtcbiAgICBsZXQgZmFpbE1lc3NhZ2UgPSBudWxsO1xuICAgIGxldCBnbG9iYWxGYWlsTWVzc2FnZSA9IG51bGw7XG4gICAgbGV0IHNob3dIZWxwT25GYWlsID0gdHJ1ZTtcbiAgICBzZWxmLnNob3dIZWxwT25GYWlsID0gZnVuY3Rpb24gc2hvd0hlbHBPbkZhaWxGbihhcmcxID0gdHJ1ZSwgYXJnMikge1xuICAgICAgICBjb25zdCBbZW5hYmxlZCwgbWVzc2FnZV0gPSB0eXBlb2YgYXJnMSA9PT0gJ3N0cmluZycgPyBbdHJ1ZSwgYXJnMV0gOiBbYXJnMSwgYXJnMl07XG4gICAgICAgIGlmICh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5pc0dsb2JhbENvbnRleHQoKSkge1xuICAgICAgICAgICAgZ2xvYmFsRmFpbE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGZhaWxNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgc2hvd0hlbHBPbkZhaWwgPSBlbmFibGVkO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIGxldCBmYWlsdXJlT3V0cHV0ID0gZmFsc2U7XG4gICAgc2VsZi5mYWlsID0gZnVuY3Rpb24gZmFpbChtc2csIGVycikge1xuICAgICAgICBjb25zdCBsb2dnZXIgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRMb2dnZXJJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoZmFpbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZmFpbHMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmYWlsID0gZmFpbHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlzQm9vbGVhbihmYWlsKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtc2cpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbChtc2csIGVyciwgc2VsZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHlhcmdzLmdldEV4aXRQcm9jZXNzKCkpXG4gICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIWZhaWx1cmVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlT3V0cHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0hlbHBPbkZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3Muc2hvd0hlbHAoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnIHx8IGVycilcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKG1zZyB8fCBlcnIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdsb2JhbE9yQ29tbWFuZEZhaWxNZXNzYWdlID0gZmFpbE1lc3NhZ2UgfHwgZ2xvYmFsRmFpbE1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbE9yQ29tbWFuZEZhaWxNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgfHwgZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGdsb2JhbE9yQ29tbWFuZEZhaWxNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnIgPSBlcnIgfHwgbmV3IFlFcnJvcihtc2cpO1xuICAgICAgICAgICAgaWYgKHlhcmdzLmdldEV4aXRQcm9jZXNzKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWFyZ3MuZXhpdCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmhhc1BhcnNlQ2FsbGJhY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5YXJncy5leGl0KDEsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCB1c2FnZXMgPSBbXTtcbiAgICBsZXQgdXNhZ2VEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHNlbGYudXNhZ2UgPSAobXNnLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBpZiAobXNnID09PSBudWxsKSB7XG4gICAgICAgICAgICB1c2FnZURpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHVzYWdlcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cbiAgICAgICAgdXNhZ2VEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB1c2FnZXMucHVzaChbbXNnLCBkZXNjcmlwdGlvbiB8fCAnJ10pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIHNlbGYuZ2V0VXNhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2FnZXM7XG4gICAgfTtcbiAgICBzZWxmLmdldFVzYWdlRGlzYWJsZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2FnZURpc2FibGVkO1xuICAgIH07XG4gICAgc2VsZi5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX18oJ1Bvc2l0aW9uYWxzOicpO1xuICAgIH07XG4gICAgbGV0IGV4YW1wbGVzID0gW107XG4gICAgc2VsZi5leGFtcGxlID0gKGNtZCwgZGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgZXhhbXBsZXMucHVzaChbY21kLCBkZXNjcmlwdGlvbiB8fCAnJ10pO1xuICAgIH07XG4gICAgbGV0IGNvbW1hbmRzID0gW107XG4gICAgc2VsZi5jb21tYW5kID0gZnVuY3Rpb24gY29tbWFuZChjbWQsIGRlc2NyaXB0aW9uLCBpc0RlZmF1bHQsIGFsaWFzZXMsIGRlcHJlY2F0ZWQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLm1hcChjbWRBcnJheSA9PiB7XG4gICAgICAgICAgICAgICAgY21kQXJyYXlbMl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY21kQXJyYXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb21tYW5kcy5wdXNoKFtjbWQsIGRlc2NyaXB0aW9uIHx8ICcnLCBpc0RlZmF1bHQsIGFsaWFzZXMsIGRlcHJlY2F0ZWRdKTtcbiAgICB9O1xuICAgIHNlbGYuZ2V0Q29tbWFuZHMgPSAoKSA9PiBjb21tYW5kcztcbiAgICBsZXQgZGVzY3JpcHRpb25zID0ge307XG4gICAgc2VsZi5kZXNjcmliZSA9IGZ1bmN0aW9uIGRlc2NyaWJlKGtleU9yS2V5cywgZGVzYykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlPcktleXMpKSB7XG4gICAgICAgICAgICBrZXlPcktleXMuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmRlc2NyaWJlKGssIGRlc2MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGtleU9yS2V5cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleU9yS2V5cykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmRlc2NyaWJlKGssIGtleU9yS2V5c1trXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uc1trZXlPcktleXNdID0gZGVzYztcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5nZXREZXNjcmlwdGlvbnMgPSAoKSA9PiBkZXNjcmlwdGlvbnM7XG4gICAgbGV0IGVwaWxvZ3MgPSBbXTtcbiAgICBzZWxmLmVwaWxvZyA9IG1zZyA9PiB7XG4gICAgICAgIGVwaWxvZ3MucHVzaChtc2cpO1xuICAgIH07XG4gICAgbGV0IHdyYXBTZXQgPSBmYWxzZTtcbiAgICBsZXQgd3JhcDtcbiAgICBzZWxmLndyYXAgPSBjb2xzID0+IHtcbiAgICAgICAgd3JhcFNldCA9IHRydWU7XG4gICAgICAgIHdyYXAgPSBjb2xzO1xuICAgIH07XG4gICAgc2VsZi5nZXRXcmFwID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2hpbS5nZXRFbnYoJ1lBUkdTX0RJU0FCTEVfV1JBUCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdyYXBTZXQpIHtcbiAgICAgICAgICAgIHdyYXAgPSB3aW5kb3dXaWR0aCgpO1xuICAgICAgICAgICAgd3JhcFNldCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdyYXA7XG4gICAgfTtcbiAgICBjb25zdCBkZWZlclkxOG5Mb29rdXBQcmVmaXggPSAnX195YXJnc1N0cmluZ19fOic7XG4gICAgc2VsZi5kZWZlclkxOG5Mb29rdXAgPSBzdHIgPT4gZGVmZXJZMThuTG9va3VwUHJlZml4ICsgc3RyO1xuICAgIHNlbGYuaGVscCA9IGZ1bmN0aW9uIGhlbHAoKSB7XG4gICAgICAgIGlmIChjYWNoZWRIZWxwTWVzc2FnZSlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRIZWxwTWVzc2FnZTtcbiAgICAgICAgbm9ybWFsaXplQWxpYXNlcygpO1xuICAgICAgICBjb25zdCBiYXNlJDAgPSB5YXJncy5jdXN0b21TY3JpcHROYW1lXG4gICAgICAgICAgICA/IHlhcmdzLiQwXG4gICAgICAgICAgICA6IHNoaW0ucGF0aC5iYXNlbmFtZSh5YXJncy4kMCk7XG4gICAgICAgIGNvbnN0IGRlbWFuZGVkT3B0aW9ucyA9IHlhcmdzLmdldERlbWFuZGVkT3B0aW9ucygpO1xuICAgICAgICBjb25zdCBkZW1hbmRlZENvbW1hbmRzID0geWFyZ3MuZ2V0RGVtYW5kZWRDb21tYW5kcygpO1xuICAgICAgICBjb25zdCBkZXByZWNhdGVkT3B0aW9ucyA9IHlhcmdzLmdldERlcHJlY2F0ZWRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IHlhcmdzLmdldEdyb3VwcygpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0geWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICBsZXQga2V5cyA9IFtdO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmtleXMoZGVzY3JpcHRpb25zKSk7XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3Qua2V5cyhkZW1hbmRlZE9wdGlvbnMpKTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5rZXlzKGRlbWFuZGVkQ29tbWFuZHMpKTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5rZXlzKG9wdGlvbnMuZGVmYXVsdCkpO1xuICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoZmlsdGVySGlkZGVuT3B0aW9ucyk7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICdfJylcbiAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSkpO1xuICAgICAgICBjb25zdCB0aGVXcmFwID0gc2VsZi5nZXRXcmFwKCk7XG4gICAgICAgIGNvbnN0IHVpID0gc2hpbS5jbGl1aSh7XG4gICAgICAgICAgICB3aWR0aDogdGhlV3JhcCxcbiAgICAgICAgICAgIHdyYXA6ICEhdGhlV3JhcCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdXNhZ2VEaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKHVzYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB1c2FnZXMuZm9yRWFjaCh1c2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdih7IHRleHQ6IGAke3VzYWdlWzBdLnJlcGxhY2UoL1xcJDAvZywgYmFzZSQwKX1gIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXNhZ2VbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLmRpdih7IHRleHQ6IGAke3VzYWdlWzFdfWAsIHBhZGRpbmc6IFsxLCAwLCAwLCAwXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChkZW1hbmRlZENvbW1hbmRzLl8pIHtcbiAgICAgICAgICAgICAgICAgICAgdSA9IGAke2Jhc2UkMH0gPCR7X18oJ2NvbW1hbmQnKX0+XFxuYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHUgPSBgJHtiYXNlJDB9IFske19fKCdjb21tYW5kJyl9XVxcbmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVpLmRpdihgJHt1fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kcy5sZW5ndGggPiAxIHx8IChjb21tYW5kcy5sZW5ndGggPT09IDEgJiYgIWNvbW1hbmRzWzBdWzJdKSkge1xuICAgICAgICAgICAgdWkuZGl2KF9fKCdDb21tYW5kczonKSk7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50Q29tbWFuZHMgPSBjb250ZXh0LmNvbW1hbmRzLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gYCR7Y29udGV4dC5jb21tYW5kcy5qb2luKCcgJyl9IGBcbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgaWYgKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFBhcnNlckNvbmZpZ3VyYXRpb24oKVsnc29ydC1jb21tYW5kcyddID09PVxuICAgICAgICAgICAgICAgIHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLnNvcnQoKGEsIGIpID0+IGFbMF0ubG9jYWxlQ29tcGFyZShiWzBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSBiYXNlJDAgPyBgJHtiYXNlJDB9IGAgOiAnJztcbiAgICAgICAgICAgIGNvbW1hbmRzLmZvckVhY2goY29tbWFuZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZFN0cmluZyA9IGAke3ByZWZpeH0ke3BhcmVudENvbW1hbmRzfSR7Y29tbWFuZFswXS5yZXBsYWNlKC9eXFwkMCA/LywgJycpfWA7XG4gICAgICAgICAgICAgICAgdWkuc3Bhbih7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGNvbW1hbmRTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAyLCAwLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoKGNvbW1hbmRzLCB0aGVXcmFwLCBgJHtiYXNlJDB9JHtwYXJlbnRDb21tYW5kc31gKSArIDQsXG4gICAgICAgICAgICAgICAgfSwgeyB0ZXh0OiBjb21tYW5kWzFdIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpbnRzID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmRbMl0pXG4gICAgICAgICAgICAgICAgICAgIGhpbnRzLnB1c2goYFske19fKCdkZWZhdWx0Jyl9XWApO1xuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kWzNdICYmIGNvbW1hbmRbM10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpbnRzLnB1c2goYFske19fKCdhbGlhc2VzOicpfSAke2NvbW1hbmRbM10uam9pbignLCAnKX1dYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kWzRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tbWFuZFs0XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnRzLnB1c2goYFske19fKCdkZXByZWNhdGVkOiAlcycsIGNvbW1hbmRbNF0pfV1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnRzLnB1c2goYFske19fKCdkZXByZWNhdGVkJyl9XWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdWkuZGl2KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGhpbnRzLmpvaW4oJyAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAwLCAwLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdWkuZGl2KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxpYXNLZXlzID0gKE9iamVjdC5rZXlzKG9wdGlvbnMuYWxpYXMpIHx8IFtdKS5jb25jYXQoT2JqZWN0LmtleXMoeWFyZ3MucGFyc2VkLm5ld0FsaWFzZXMpIHx8IFtdKTtcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiAheWFyZ3MucGFyc2VkLm5ld0FsaWFzZXNba2V5XSAmJlxuICAgICAgICAgICAgYWxpYXNLZXlzLmV2ZXJ5KGFsaWFzID0+IChvcHRpb25zLmFsaWFzW2FsaWFzXSB8fCBbXSkuaW5kZXhPZihrZXkpID09PSAtMSkpO1xuICAgICAgICBjb25zdCBkZWZhdWx0R3JvdXAgPSBfXygnT3B0aW9uczonKTtcbiAgICAgICAgaWYgKCFncm91cHNbZGVmYXVsdEdyb3VwXSlcbiAgICAgICAgICAgIGdyb3Vwc1tkZWZhdWx0R3JvdXBdID0gW107XG4gICAgICAgIGFkZFVuZ3JvdXBlZEtleXMoa2V5cywgb3B0aW9ucy5hbGlhcywgZ3JvdXBzLCBkZWZhdWx0R3JvdXApO1xuICAgICAgICBjb25zdCBpc0xvbmdTd2l0Y2ggPSAoc3cpID0+IC9eLS0vLnRlc3QoZ2V0VGV4dChzdykpO1xuICAgICAgICBjb25zdCBkaXNwbGF5ZWRHcm91cHMgPSBPYmplY3Qua2V5cyhncm91cHMpXG4gICAgICAgICAgICAuZmlsdGVyKGdyb3VwTmFtZSA9PiBncm91cHNbZ3JvdXBOYW1lXS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgLm1hcChncm91cE5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZEtleXMgPSBncm91cHNbZ3JvdXBOYW1lXVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZmlsdGVySGlkZGVuT3B0aW9ucylcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFsaWFzS2V5cy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBhbGlhc0tleTsgKGFsaWFzS2V5ID0gYWxpYXNLZXlzW2ldKSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChvcHRpb25zLmFsaWFzW2FsaWFzS2V5XSB8fCBbXSkuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGlhc0tleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgZ3JvdXBOYW1lLCBub3JtYWxpemVkS2V5cyB9O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcigoeyBub3JtYWxpemVkS2V5cyB9KSA9PiBub3JtYWxpemVkS2V5cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgLm1hcCgoeyBncm91cE5hbWUsIG5vcm1hbGl6ZWRLZXlzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN3aXRjaGVzID0gbm9ybWFsaXplZEtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGFjY1trZXldID0gW2tleV1cbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChvcHRpb25zLmFsaWFzW2tleV0gfHwgW10pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoc3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBOYW1lID09PSBzZWxmLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCgvXlswLTldJC8udGVzdChzdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9wdGlvbnMuYm9vbGVhbi5pbmNsdWRlcyhrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy0tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3cubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICctLSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnLScpICsgc3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoKHN3MSwgc3cyKSA9PiBpc0xvbmdTd2l0Y2goc3cxKSA9PT0gaXNMb25nU3dpdGNoKHN3MilcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogaXNMb25nU3dpdGNoKHN3MSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAtMSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIHJldHVybiB7IGdyb3VwTmFtZSwgbm9ybWFsaXplZEtleXMsIHN3aXRjaGVzIH07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaG9ydFN3aXRjaGVzVXNlZCA9IGRpc3BsYXllZEdyb3Vwc1xuICAgICAgICAgICAgLmZpbHRlcigoeyBncm91cE5hbWUgfSkgPT4gZ3JvdXBOYW1lICE9PSBzZWxmLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKSlcbiAgICAgICAgICAgIC5zb21lKCh7IG5vcm1hbGl6ZWRLZXlzLCBzd2l0Y2hlcyB9KSA9PiAhbm9ybWFsaXplZEtleXMuZXZlcnkoa2V5ID0+IGlzTG9uZ1N3aXRjaChzd2l0Y2hlc1trZXldKSkpO1xuICAgICAgICBpZiAoc2hvcnRTd2l0Y2hlc1VzZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXllZEdyb3Vwc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgZ3JvdXBOYW1lIH0pID0+IGdyb3VwTmFtZSAhPT0gc2VsZi5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCkpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHsgbm9ybWFsaXplZEtleXMsIHN3aXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xvbmdTd2l0Y2goc3dpdGNoZXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaGVzW2tleV0gPSBhZGRJbmRlbnRhdGlvbihzd2l0Y2hlc1trZXldLCAnLXgsICcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheWVkR3JvdXBzLmZvckVhY2goKHsgZ3JvdXBOYW1lLCBub3JtYWxpemVkS2V5cywgc3dpdGNoZXMgfSkgPT4ge1xuICAgICAgICAgICAgdWkuZGl2KGdyb3VwTmFtZSk7XG4gICAgICAgICAgICBub3JtYWxpemVkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga3N3aXRjaCA9IHN3aXRjaGVzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IGRlc2MgPSBkZXNjcmlwdGlvbnNba2V5XSB8fCAnJztcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2MuaW5jbHVkZXMoZGVmZXJZMThuTG9va3VwUHJlZml4KSlcbiAgICAgICAgICAgICAgICAgICAgZGVzYyA9IF9fKGRlc2Muc3Vic3RyaW5nKGRlZmVyWTE4bkxvb2t1cFByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ib29sZWFuLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ2Jvb2xlYW4nKX1dYDtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb3VudC5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYFske19fKCdjb3VudCcpfV1gO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cmluZy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYFske19fKCdzdHJpbmcnKX1dYDtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ub3JtYWxpemUuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnc3RyaW5nJyl9XWA7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXJyYXkuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnYXJyYXknKX1dYDtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5udW1iZXIuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnbnVtYmVyJyl9XWA7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwcmVjYXRlZEV4dHJhID0gKGRlcHJlY2F0ZWQpID0+IHR5cGVvZiBkZXByZWNhdGVkID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICA/IGBbJHtfXygnZGVwcmVjYXRlZDogJXMnLCBkZXByZWNhdGVkKX1dYFxuICAgICAgICAgICAgICAgICAgICA6IGBbJHtfXygnZGVwcmVjYXRlZCcpfV1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhID0gW1xuICAgICAgICAgICAgICAgICAgICBrZXkgaW4gZGVwcmVjYXRlZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGVwcmVjYXRlZEV4dHJhKGRlcHJlY2F0ZWRPcHRpb25zW2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGtleSBpbiBkZW1hbmRlZE9wdGlvbnMgPyBgWyR7X18oJ3JlcXVpcmVkJyl9XWAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNob2ljZXMgJiYgb3B0aW9ucy5jaG9pY2VzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgID8gYFske19fKCdjaG9pY2VzOicpfSAke3NlbGYuc3RyaW5naWZpZWRWYWx1ZXMob3B0aW9ucy5jaG9pY2VzW2tleV0pfV1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdHJpbmcob3B0aW9ucy5kZWZhdWx0W2tleV0sIG9wdGlvbnMuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgICAgIHVpLnNwYW4oe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBnZXRUZXh0KGtzd2l0Y2gpLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbMCwgMiwgMCwgMiArIGdldEluZGVudGF0aW9uKGtzd2l0Y2gpXSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoKHN3aXRjaGVzLCB0aGVXcmFwKSArIDQsXG4gICAgICAgICAgICAgICAgfSwgZGVzYyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkSGlkZU9wdGlvbkV4dHJhcyA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlQ29uZmlndXJhdGlvbigpWydoaWRlLXR5cGVzJ10gPT09XG4gICAgICAgICAgICAgICAgICAgIHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhICYmICFzaG91bGRIaWRlT3B0aW9uRXh0cmFzKVxuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoeyB0ZXh0OiBleHRyYSwgcGFkZGluZzogWzAsIDAsIDAsIDJdLCBhbGlnbjogJ3JpZ2h0JyB9KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChleGFtcGxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVpLmRpdihfXygnRXhhbXBsZXM6JykpO1xuICAgICAgICAgICAgZXhhbXBsZXMuZm9yRWFjaChleGFtcGxlID0+IHtcbiAgICAgICAgICAgICAgICBleGFtcGxlWzBdID0gZXhhbXBsZVswXS5yZXBsYWNlKC9cXCQwL2csIGJhc2UkMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV4YW1wbGVzLmZvckVhY2goZXhhbXBsZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4YW1wbGVbMV0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdih7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBleGFtcGxlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogWzAsIDIsIDAsIDJdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdih7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBleGFtcGxlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogWzAsIDIsIDAsIDJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heFdpZHRoKGV4YW1wbGVzLCB0aGVXcmFwKSArIDQsXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGV4YW1wbGVbMV0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdWkuZGl2KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVwaWxvZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZSA9IGVwaWxvZ3NcbiAgICAgICAgICAgICAgICAubWFwKGVwaWxvZyA9PiBlcGlsb2cucmVwbGFjZSgvXFwkMC9nLCBiYXNlJDApKVxuICAgICAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgIHVpLmRpdihgJHtlfVxcbmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1aS50b1N0cmluZygpLnJlcGxhY2UoL1xccyokLywgJycpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbWF4V2lkdGgodGFibGUsIHRoZVdyYXAsIG1vZGlmaWVyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0YWJsZSkpIHtcbiAgICAgICAgICAgIHRhYmxlID0gT2JqZWN0LnZhbHVlcyh0YWJsZSkubWFwKHYgPT4gW3ZdKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZS5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heChzaGltLnN0cmluZ1dpZHRoKG1vZGlmaWVyID8gYCR7bW9kaWZpZXJ9ICR7Z2V0VGV4dCh2WzBdKX1gIDogZ2V0VGV4dCh2WzBdKSkgKyBnZXRJbmRlbnRhdGlvbih2WzBdKSwgd2lkdGgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoZVdyYXApXG4gICAgICAgICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCBwYXJzZUludCgodGhlV3JhcCAqIDAuNSkudG9TdHJpbmcoKSwgMTApKTtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub3JtYWxpemVBbGlhc2VzKCkge1xuICAgICAgICBjb25zdCBkZW1hbmRlZE9wdGlvbnMgPSB5YXJncy5nZXREZW1hbmRlZE9wdGlvbnMoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgKE9iamVjdC5rZXlzKG9wdGlvbnMuYWxpYXMpIHx8IFtdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLmFsaWFzW2tleV0uZm9yRWFjaChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uc1thbGlhc10pXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVzY3JpYmUoa2V5LCBkZXNjcmlwdGlvbnNbYWxpYXNdKTtcbiAgICAgICAgICAgICAgICBpZiAoYWxpYXMgaW4gZGVtYW5kZWRPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5kZW1hbmRPcHRpb24oa2V5LCBkZW1hbmRlZE9wdGlvbnNbYWxpYXNdKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ib29sZWFuLmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3MuYm9vbGVhbihrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNvdW50LmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3MuY291bnQoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJpbmcuaW5jbHVkZXMoYWxpYXMpKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5zdHJpbmcoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ub3JtYWxpemUuaW5jbHVkZXMoYWxpYXMpKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5ub3JtYWxpemUoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hcnJheS5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLmFycmF5KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubnVtYmVyLmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3MubnVtYmVyKGtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBjYWNoZWRIZWxwTWVzc2FnZTtcbiAgICBzZWxmLmNhY2hlSGVscE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhY2hlZEhlbHBNZXNzYWdlID0gdGhpcy5oZWxwKCk7XG4gICAgfTtcbiAgICBzZWxmLmNsZWFyQ2FjaGVkSGVscE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhY2hlZEhlbHBNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgc2VsZi5oYXNDYWNoZWRIZWxwTWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhY2FjaGVkSGVscE1lc3NhZ2U7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRVbmdyb3VwZWRLZXlzKGtleXMsIGFsaWFzZXMsIGdyb3VwcywgZGVmYXVsdEdyb3VwKSB7XG4gICAgICAgIGxldCBncm91cGVkS2V5cyA9IFtdO1xuICAgICAgICBsZXQgdG9DaGVjayA9IG51bGw7XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgICAgICBncm91cGVkS2V5cyA9IGdyb3VwZWRLZXlzLmNvbmNhdChncm91cHNbZ3JvdXBdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdG9DaGVjayA9IFtrZXldLmNvbmNhdChhbGlhc2VzW2tleV0pO1xuICAgICAgICAgICAgaWYgKCF0b0NoZWNrLnNvbWUoayA9PiBncm91cGVkS2V5cy5pbmRleE9mKGspICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBncm91cHNbZGVmYXVsdEdyb3VwXS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ3JvdXBlZEtleXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbHRlckhpZGRlbk9wdGlvbnMoa2V5KSB7XG4gICAgICAgIHJldHVybiAoeWFyZ3MuZ2V0T3B0aW9ucygpLmhpZGRlbk9wdGlvbnMuaW5kZXhPZihrZXkpIDwgMCB8fFxuICAgICAgICAgICAgeWFyZ3MucGFyc2VkLmFyZ3ZbeWFyZ3MuZ2V0T3B0aW9ucygpLnNob3dIaWRkZW5PcHRdKTtcbiAgICB9XG4gICAgc2VsZi5zaG93SGVscCA9IChsZXZlbCkgPT4ge1xuICAgICAgICBjb25zdCBsb2dnZXIgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRMb2dnZXJJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoIWxldmVsKVxuICAgICAgICAgICAgbGV2ZWwgPSAnZXJyb3InO1xuICAgICAgICBjb25zdCBlbWl0ID0gdHlwZW9mIGxldmVsID09PSAnZnVuY3Rpb24nID8gbGV2ZWwgOiBsb2dnZXJbbGV2ZWxdO1xuICAgICAgICBlbWl0KHNlbGYuaGVscCgpKTtcbiAgICB9O1xuICAgIHNlbGYuZnVuY3Rpb25EZXNjcmlwdGlvbiA9IGZuID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBmbi5uYW1lXG4gICAgICAgICAgICA/IHNoaW0uUGFyc2VyLmRlY2FtZWxpemUoZm4ubmFtZSwgJy0nKVxuICAgICAgICAgICAgOiBfXygnZ2VuZXJhdGVkLXZhbHVlJyk7XG4gICAgICAgIHJldHVybiBbJygnLCBkZXNjcmlwdGlvbiwgJyknXS5qb2luKCcnKTtcbiAgICB9O1xuICAgIHNlbGYuc3RyaW5naWZpZWRWYWx1ZXMgPSBmdW5jdGlvbiBzdHJpbmdpZmllZFZhbHVlcyh2YWx1ZXMsIHNlcGFyYXRvcikge1xuICAgICAgICBsZXQgc3RyaW5nID0gJyc7XG4gICAgICAgIGNvbnN0IHNlcCA9IHNlcGFyYXRvciB8fCAnLCAnO1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdLmNvbmNhdCh2YWx1ZXMpO1xuICAgICAgICBpZiAoIXZhbHVlcyB8fCAhYXJyYXkubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgYXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RyaW5nLmxlbmd0aClcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gc2VwO1xuICAgICAgICAgICAgc3RyaW5nICs9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBkZWZhdWx0U3RyaW5nKHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IHN0cmluZyA9IGBbJHtfXygnZGVmYXVsdDonKX0gYDtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIWRlZmF1bHREZXNjcmlwdGlvbilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gZGVmYXVsdERlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gYFwiJHt2YWx1ZX1cImA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7c3RyaW5nfV1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3aW5kb3dXaWR0aCgpIHtcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSA4MDtcbiAgICAgICAgaWYgKHNoaW0ucHJvY2Vzcy5zdGRDb2x1bW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4obWF4V2lkdGgsIHNoaW0ucHJvY2Vzcy5zdGRDb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtYXhXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgdmVyc2lvbiA9IG51bGw7XG4gICAgc2VsZi52ZXJzaW9uID0gdmVyID0+IHtcbiAgICAgICAgdmVyc2lvbiA9IHZlcjtcbiAgICB9O1xuICAgIHNlbGYuc2hvd1ZlcnNpb24gPSBsZXZlbCA9PiB7XG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldExvZ2dlckluc3RhbmNlKCk7XG4gICAgICAgIGlmICghbGV2ZWwpXG4gICAgICAgICAgICBsZXZlbCA9ICdlcnJvcic7XG4gICAgICAgIGNvbnN0IGVtaXQgPSB0eXBlb2YgbGV2ZWwgPT09ICdmdW5jdGlvbicgPyBsZXZlbCA6IGxvZ2dlcltsZXZlbF07XG4gICAgICAgIGVtaXQodmVyc2lvbik7XG4gICAgfTtcbiAgICBzZWxmLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQobG9jYWxMb29rdXApIHtcbiAgICAgICAgZmFpbE1lc3NhZ2UgPSBudWxsO1xuICAgICAgICBmYWlsdXJlT3V0cHV0ID0gZmFsc2U7XG4gICAgICAgIHVzYWdlcyA9IFtdO1xuICAgICAgICB1c2FnZURpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGVwaWxvZ3MgPSBbXTtcbiAgICAgICAgZXhhbXBsZXMgPSBbXTtcbiAgICAgICAgY29tbWFuZHMgPSBbXTtcbiAgICAgICAgZGVzY3JpcHRpb25zID0gb2JqRmlsdGVyKGRlc2NyaXB0aW9ucywgayA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIGNvbnN0IGZyb3plbnMgPSBbXTtcbiAgICBzZWxmLmZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICAgICAgZnJvemVucy5wdXNoKHtcbiAgICAgICAgICAgIGZhaWxNZXNzYWdlLFxuICAgICAgICAgICAgZmFpbHVyZU91dHB1dCxcbiAgICAgICAgICAgIHVzYWdlcyxcbiAgICAgICAgICAgIHVzYWdlRGlzYWJsZWQsXG4gICAgICAgICAgICBlcGlsb2dzLFxuICAgICAgICAgICAgZXhhbXBsZXMsXG4gICAgICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBzZWxmLnVuZnJlZXplID0gZnVuY3Rpb24gdW5mcmVlemUoZGVmYXVsdENvbW1hbmQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBmcm96ZW4gPSBmcm96ZW5zLnBvcCgpO1xuICAgICAgICBpZiAoIWZyb3plbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGRlZmF1bHRDb21tYW5kKSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbnMgPSB7IC4uLmZyb3plbi5kZXNjcmlwdGlvbnMsIC4uLmRlc2NyaXB0aW9ucyB9O1xuICAgICAgICAgICAgY29tbWFuZHMgPSBbLi4uZnJvemVuLmNvbW1hbmRzLCAuLi5jb21tYW5kc107XG4gICAgICAgICAgICB1c2FnZXMgPSBbLi4uZnJvemVuLnVzYWdlcywgLi4udXNhZ2VzXTtcbiAgICAgICAgICAgIGV4YW1wbGVzID0gWy4uLmZyb3plbi5leGFtcGxlcywgLi4uZXhhbXBsZXNdO1xuICAgICAgICAgICAgZXBpbG9ncyA9IFsuLi5mcm96ZW4uZXBpbG9ncywgLi4uZXBpbG9nc107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIGZhaWxNZXNzYWdlLFxuICAgICAgICAgICAgICAgIGZhaWx1cmVPdXRwdXQsXG4gICAgICAgICAgICAgICAgdXNhZ2VzLFxuICAgICAgICAgICAgICAgIHVzYWdlRGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgZXBpbG9ncyxcbiAgICAgICAgICAgICAgICBleGFtcGxlcyxcbiAgICAgICAgICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbnMsXG4gICAgICAgICAgICB9ID0gZnJvemVuKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHNlbGY7XG59XG5mdW5jdGlvbiBpc0luZGVudGVkVGV4dCh0ZXh0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0ZXh0ID09PSAnb2JqZWN0Jztcbn1cbmZ1bmN0aW9uIGFkZEluZGVudGF0aW9uKHRleHQsIGluZGVudCkge1xuICAgIHJldHVybiBpc0luZGVudGVkVGV4dCh0ZXh0KVxuICAgICAgICA/IHsgdGV4dDogdGV4dC50ZXh0LCBpbmRlbnRhdGlvbjogdGV4dC5pbmRlbnRhdGlvbiArIGluZGVudCB9XG4gICAgICAgIDogeyB0ZXh0LCBpbmRlbnRhdGlvbjogaW5kZW50IH07XG59XG5mdW5jdGlvbiBnZXRJbmRlbnRhdGlvbih0ZXh0KSB7XG4gICAgcmV0dXJuIGlzSW5kZW50ZWRUZXh0KHRleHQpID8gdGV4dC5pbmRlbnRhdGlvbiA6IDA7XG59XG5mdW5jdGlvbiBnZXRUZXh0KHRleHQpIHtcbiAgICByZXR1cm4gaXNJbmRlbnRlZFRleHQodGV4dCkgPyB0ZXh0LnRleHQgOiB0ZXh0O1xufVxuIiwgImV4cG9ydCBjb25zdCBjb21wbGV0aW9uU2hUZW1wbGF0ZSA9IGAjIyMtYmVnaW4te3thcHBfbmFtZX19LWNvbXBsZXRpb25zLSMjI1xuI1xuIyB5YXJncyBjb21tYW5kIGNvbXBsZXRpb24gc2NyaXB0XG4jXG4jIEluc3RhbGxhdGlvbjoge3thcHBfcGF0aH19IHt7Y29tcGxldGlvbl9jb21tYW5kfX0gPj4gfi8uYmFzaHJjXG4jICAgIG9yIHt7YXBwX3BhdGh9fSB7e2NvbXBsZXRpb25fY29tbWFuZH19ID4+IH4vLmJhc2hfcHJvZmlsZSBvbiBPU1guXG4jXG5fe3thcHBfbmFtZX19X3lhcmdzX2NvbXBsZXRpb25zKClcbntcbiAgICBsb2NhbCBjdXJfd29yZCBhcmdzIHR5cGVfbGlzdFxuXG4gICAgY3VyX3dvcmQ9XCJcXCR7Q09NUF9XT1JEU1tDT01QX0NXT1JEXX1cIlxuICAgIGFyZ3M9KFwiXFwke0NPTVBfV09SRFNbQF19XCIpXG5cbiAgICAjIGFzayB5YXJncyB0byBnZW5lcmF0ZSBjb21wbGV0aW9ucy5cbiAgICAjIHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDA5NDQxOTUvNzA4MDAzNiBmb3IgdGhlIHNwYWNlcy1oYW5kbGluZyBhd2tcbiAgICBtYXBmaWxlIC10IHR5cGVfbGlzdCA8IDwoe3thcHBfcGF0aH19IC0tZ2V0LXlhcmdzLWNvbXBsZXRpb25zIFwiXFwke2FyZ3NbQF19XCIpXG4gICAgbWFwZmlsZSAtdCBDT01QUkVQTFkgPCA8KGNvbXBnZW4gLVcgXCIkKCBwcmludGYgJyVxICcgXCJcXCR7dHlwZV9saXN0W0BdfVwiIClcIiAtLSBcIlxcJHtjdXJfd29yZH1cIiB8XG4gICAgICAgIGF3ayAnLyAvIHsgcHJpbnQgXCJcXFxcXCJcIiQwXCJcXFxcXCJcIiB9IC9eW14gXSskLyB7IHByaW50ICQwIH0nKVxuXG4gICAgIyBpZiBubyBtYXRjaCB3YXMgZm91bmQsIGZhbGwgYmFjayB0byBmaWxlbmFtZSBjb21wbGV0aW9uXG4gICAgaWYgWyBcXCR7I0NPTVBSRVBMWVtAXX0gLWVxIDAgXTsgdGhlblxuICAgICAgQ09NUFJFUExZPSgpXG4gICAgZmlcblxuICAgIHJldHVybiAwXG59XG5jb21wbGV0ZSAtbyBiYXNoZGVmYXVsdCAtbyBkZWZhdWx0IC1GIF97e2FwcF9uYW1lfX1feWFyZ3NfY29tcGxldGlvbnMge3thcHBfbmFtZX19XG4jIyMtZW5kLXt7YXBwX25hbWV9fS1jb21wbGV0aW9ucy0jIyNcbmA7XG5leHBvcnQgY29uc3QgY29tcGxldGlvblpzaFRlbXBsYXRlID0gYCNjb21wZGVmIHt7YXBwX25hbWV9fVxuIyMjLWJlZ2luLXt7YXBwX25hbWV9fS1jb21wbGV0aW9ucy0jIyNcbiNcbiMgeWFyZ3MgY29tbWFuZCBjb21wbGV0aW9uIHNjcmlwdFxuI1xuIyBJbnN0YWxsYXRpb246IHt7YXBwX3BhdGh9fSB7e2NvbXBsZXRpb25fY29tbWFuZH19ID4+IH4vLnpzaHJjXG4jICAgIG9yIHt7YXBwX3BhdGh9fSB7e2NvbXBsZXRpb25fY29tbWFuZH19ID4+IH4vLnpwcm9maWxlIG9uIE9TWC5cbiNcbl97e2FwcF9uYW1lfX1feWFyZ3NfY29tcGxldGlvbnMoKVxue1xuICBsb2NhbCByZXBseVxuICBsb2NhbCBzaT0kSUZTXG4gIElGUz0kJ1xcbicgcmVwbHk9KCQoQ09NUF9DV09SRD1cIiQoKENVUlJFTlQtMSkpXCIgQ09NUF9MSU5FPVwiJEJVRkZFUlwiIENPTVBfUE9JTlQ9XCIkQ1VSU09SXCIge3thcHBfcGF0aH19IC0tZ2V0LXlhcmdzLWNvbXBsZXRpb25zIFwiXFwke3dvcmRzW0BdfVwiKSlcbiAgSUZTPSRzaVxuICBpZiBbWyBcXCR7I3JlcGx5fSAtZ3QgMCBdXTsgdGhlblxuICAgIF9kZXNjcmliZSAndmFsdWVzJyByZXBseVxuICBlbHNlXG4gICAgX2RlZmF1bHRcbiAgZmlcbn1cbmlmIFtbIFwiJ1xcJHt6c2hfZXZhbF9jb250ZXh0Wy0xXX1cIiA9PSBcImxvYWRhdXRvZnVuY1wiIF1dOyB0aGVuXG4gIF97e2FwcF9uYW1lfX1feWFyZ3NfY29tcGxldGlvbnMgXCIkQFwiXG5lbHNlXG4gIGNvbXBkZWYgX3t7YXBwX25hbWV9fV95YXJnc19jb21wbGV0aW9ucyB7e2FwcF9uYW1lfX1cbmZpXG4jIyMtZW5kLXt7YXBwX25hbWV9fS1jb21wbGV0aW9ucy0jIyNcbmA7XG4iLCAiaW1wb3J0IHsgaXNDb21tYW5kQnVpbGRlckNhbGxiYWNrIH0gZnJvbSAnLi9jb21tYW5kLmpzJztcbmltcG9ydCB7IGFzc2VydE5vdFN0cmljdEVxdWFsIH0gZnJvbSAnLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5pbXBvcnQgKiBhcyB0ZW1wbGF0ZXMgZnJvbSAnLi9jb21wbGV0aW9uLXRlbXBsYXRlcy5qcyc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuL3V0aWxzL2lzLXByb21pc2UuanMnO1xuaW1wb3J0IHsgcGFyc2VDb21tYW5kIH0gZnJvbSAnLi9wYXJzZS1jb21tYW5kLmpzJztcbmV4cG9ydCBjbGFzcyBDb21wbGV0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih5YXJncywgdXNhZ2UsIGNvbW1hbmQsIHNoaW0pIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHRoaXMueWFyZ3MgPSB5YXJncztcbiAgICAgICAgdGhpcy51c2FnZSA9IHVzYWdlO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBjb21tYW5kO1xuICAgICAgICB0aGlzLnNoaW0gPSBzaGltO1xuICAgICAgICB0aGlzLmNvbXBsZXRpb25LZXkgPSAnZ2V0LXlhcmdzLWNvbXBsZXRpb25zJztcbiAgICAgICAgdGhpcy5hbGlhc2VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmluZGV4QWZ0ZXJMYXN0UmVzZXQgPSAwO1xuICAgICAgICB0aGlzLnpzaFNoZWxsID1cbiAgICAgICAgICAgIChfYyA9ICgoKF9hID0gdGhpcy5zaGltLmdldEVudignU0hFTEwnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCd6c2gnKSkgfHxcbiAgICAgICAgICAgICAgICAoKF9iID0gdGhpcy5zaGltLmdldEVudignWlNIX05BTUUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluY2x1ZGVzKCd6c2gnKSkpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBmYWxzZTtcbiAgICB9XG4gICAgZGVmYXVsdENvbXBsZXRpb24oYXJncywgYXJndiwgY3VycmVudCwgZG9uZSkge1xuICAgICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuY29tbWFuZC5nZXRDb21tYW5kSGFuZGxlcnMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gYXJncy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlcnNbYXJnc1tpXV0gJiYgaGFuZGxlcnNbYXJnc1tpXV0uYnVpbGRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1aWxkZXIgPSBoYW5kbGVyc1thcmdzW2ldXS5idWlsZGVyO1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbW1hbmRCdWlsZGVyQ2FsbGJhY2soYnVpbGRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleEFmdGVyTGFzdFJlc2V0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLnlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkZXIoeSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5LmFyZ3Y7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb25zID0gW107XG4gICAgICAgIHRoaXMuY29tbWFuZENvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBjdXJyZW50KTtcbiAgICAgICAgdGhpcy5vcHRpb25Db21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCk7XG4gICAgICAgIHRoaXMuY2hvaWNlc0Zyb21PcHRpb25zQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpO1xuICAgICAgICB0aGlzLmNob2ljZXNGcm9tUG9zaXRpb25hbHNDb21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCk7XG4gICAgICAgIGRvbmUobnVsbCwgY29tcGxldGlvbnMpO1xuICAgIH1cbiAgICBjb21tYW5kQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Q29tbWFuZHMgPSB0aGlzLnlhcmdzXG4gICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgIC5nZXRDb250ZXh0KCkuY29tbWFuZHM7XG4gICAgICAgIGlmICghY3VycmVudC5tYXRjaCgvXi0vKSAmJlxuICAgICAgICAgICAgcGFyZW50Q29tbWFuZHNbcGFyZW50Q29tbWFuZHMubGVuZ3RoIC0gMV0gIT09IGN1cnJlbnQgJiZcbiAgICAgICAgICAgICF0aGlzLnByZXZpb3VzQXJnSGFzQ2hvaWNlcyhhcmdzKSkge1xuICAgICAgICAgICAgdGhpcy51c2FnZS5nZXRDb21tYW5kcygpLmZvckVhY2godXNhZ2VDb21tYW5kID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kTmFtZSA9IHBhcnNlQ29tbWFuZCh1c2FnZUNvbW1hbmRbMF0pLmNtZDtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5pbmRleE9mKGNvbW1hbmROYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnpzaFNoZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGNvbW1hbmROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2MgPSB1c2FnZUNvbW1hbmRbMV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGNvbW1hbmROYW1lLnJlcGxhY2UoLzovZywgJ1xcXFw6JykgKyAnOicgKyBkZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9wdGlvbkNvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KSB7XG4gICAgICAgIGlmICgoY3VycmVudC5tYXRjaCgvXi0vKSB8fCAoY3VycmVudCA9PT0gJycgJiYgY29tcGxldGlvbnMubGVuZ3RoID09PSAwKSkgJiZcbiAgICAgICAgICAgICF0aGlzLnByZXZpb3VzQXJnSGFzQ2hvaWNlcyhhcmdzKSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMueWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25hbEtleXMgPSB0aGlzLnlhcmdzLmdldEdyb3VwcygpW3RoaXMudXNhZ2UuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSgpXSB8fCBbXTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMua2V5KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmVnYWJsZSA9ICEhb3B0aW9ucy5jb25maWd1cmF0aW9uWydib29sZWFuLW5lZ2F0aW9uJ10gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ib29sZWFuLmluY2x1ZGVzKGtleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNQb3NpdGlvbmFsS2V5ID0gcG9zaXRpb25hbEtleXMuaW5jbHVkZXMoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUG9zaXRpb25hbEtleSAmJlxuICAgICAgICAgICAgICAgICAgICAhb3B0aW9ucy5oaWRkZW5PcHRpb25zLmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuYXJnc0NvbnRhaW5LZXkoYXJncywga2V5LCBuZWdhYmxlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlT3B0aW9uS2V5KGtleSwgY29tcGxldGlvbnMsIGN1cnJlbnQsIG5lZ2FibGUgJiYgISFvcHRpb25zLmRlZmF1bHRba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hvaWNlc0Zyb21PcHRpb25zQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNBcmdIYXNDaG9pY2VzKGFyZ3MpKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9pY2VzID0gdGhpcy5nZXRQcmV2aW91c0FyZ0Nob2ljZXMoYXJncyk7XG4gICAgICAgICAgICBpZiAoY2hvaWNlcyAmJiBjaG9pY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKC4uLmNob2ljZXMubWFwKGMgPT4gYy5yZXBsYWNlKC86L2csICdcXFxcOicpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hvaWNlc0Zyb21Qb3NpdGlvbmFsc0NvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KSB7XG4gICAgICAgIGlmIChjdXJyZW50ID09PSAnJyAmJlxuICAgICAgICAgICAgY29tcGxldGlvbnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3NpdGlvbmFsS2V5cyA9IHRoaXMueWFyZ3MuZ2V0R3JvdXBzKClbdGhpcy51c2FnZS5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCldIHx8IFtdO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBNYXRoLm1heCh0aGlzLmluZGV4QWZ0ZXJMYXN0UmVzZXQsIHRoaXMueWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0Q29udGV4dCgpLmNvbW1hbmRzLmxlbmd0aCArXG4gICAgICAgICAgICAxKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25hbEtleSA9IHBvc2l0aW9uYWxLZXlzW2FyZ3YuXy5sZW5ndGggLSBvZmZzZXQgLSAxXTtcbiAgICAgICAgaWYgKCFwb3NpdGlvbmFsS2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hvaWNlcyA9IHRoaXMueWFyZ3MuZ2V0T3B0aW9ucygpLmNob2ljZXNbcG9zaXRpb25hbEtleV0gfHwgW107XG4gICAgICAgIGZvciAoY29uc3QgY2hvaWNlIG9mIGNob2ljZXMpIHtcbiAgICAgICAgICAgIGlmIChjaG9pY2Uuc3RhcnRzV2l0aChjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zLnB1c2goY2hvaWNlLnJlcGxhY2UoLzovZywgJ1xcXFw6JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldFByZXZpb3VzQXJnQ2hvaWNlcyhhcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBwcmV2aW91c0FyZyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgICBpZiAoIXByZXZpb3VzQXJnLnN0YXJ0c1dpdGgoJy0nKSAmJiBhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZpbHRlciA9IHByZXZpb3VzQXJnO1xuICAgICAgICAgICAgcHJldmlvdXNBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcmV2aW91c0FyZy5zdGFydHNXaXRoKCctJykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQXJnS2V5ID0gcHJldmlvdXNBcmcucmVwbGFjZSgvXi0rLywgJycpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy55YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IHBvc3NpYmxlQWxpYXNlcyA9IFtcbiAgICAgICAgICAgIHByZXZpb3VzQXJnS2V5LFxuICAgICAgICAgICAgLi4uKHRoaXMueWFyZ3MuZ2V0QWxpYXNlcygpW3ByZXZpb3VzQXJnS2V5XSB8fCBbXSksXG4gICAgICAgIF07XG4gICAgICAgIGxldCBjaG9pY2VzO1xuICAgICAgICBmb3IgKGNvbnN0IHBvc3NpYmxlQWxpYXMgb2YgcG9zc2libGVBbGlhc2VzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMua2V5LCBwb3NzaWJsZUFsaWFzKSAmJlxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkob3B0aW9ucy5jaG9pY2VzW3Bvc3NpYmxlQWxpYXNdKSkge1xuICAgICAgICAgICAgICAgIGNob2ljZXMgPSBvcHRpb25zLmNob2ljZXNbcG9zc2libGVBbGlhc107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNob2ljZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjaG9pY2VzLmZpbHRlcihjaG9pY2UgPT4gIWZpbHRlciB8fCBjaG9pY2Uuc3RhcnRzV2l0aChmaWx0ZXIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykge1xuICAgICAgICBjb25zdCBjaG9pY2VzID0gdGhpcy5nZXRQcmV2aW91c0FyZ0Nob2ljZXMoYXJncyk7XG4gICAgICAgIHJldHVybiBjaG9pY2VzICE9PSB1bmRlZmluZWQgJiYgY2hvaWNlcy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhcmdzQ29udGFpbktleShhcmdzLCBrZXksIG5lZ2FibGUpIHtcbiAgICAgICAgY29uc3QgYXJnc0NvbnRhaW5zID0gKHMpID0+IGFyZ3MuaW5kZXhPZigoL15bXjAtOV0kLy50ZXN0KHMpID8gJy0nIDogJy0tJykgKyBzKSAhPT0gLTE7XG4gICAgICAgIGlmIChhcmdzQ29udGFpbnMoa2V5KSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAobmVnYWJsZSAmJiBhcmdzQ29udGFpbnMoYG5vLSR7a2V5fWApKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLmFsaWFzZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWxpYXMgb2YgdGhpcy5hbGlhc2VzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJnc0NvbnRhaW5zKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb21wbGV0ZU9wdGlvbktleShrZXksIGNvbXBsZXRpb25zLCBjdXJyZW50LCBuZWdhYmxlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgbGV0IGtleVdpdGhEZXNjID0ga2V5O1xuICAgICAgICBpZiAodGhpcy56c2hTaGVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGVzY3MgPSB0aGlzLnVzYWdlLmdldERlc2NyaXB0aW9ucygpO1xuICAgICAgICAgICAgY29uc3QgYWxpYXNLZXkgPSAoX2IgPSAoX2EgPSB0aGlzID09PSBudWxsIHx8IHRoaXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRoaXMuYWxpYXNlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5maW5kKGFsaWFzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjID0gZGVzY3NbYWxpYXNdO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGVzYyA9PT0gJ3N0cmluZycgJiYgZGVzYy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkZXNjRnJvbUFsaWFzID0gYWxpYXNLZXkgPyBkZXNjc1thbGlhc0tleV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gKF9kID0gKF9jID0gZGVzY3Nba2V5XSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZGVzY0Zyb21BbGlhcykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgICAgICAgICBrZXlXaXRoRGVzYyA9IGAke2tleS5yZXBsYWNlKC86L2csICdcXFxcOicpfToke2Rlc2NcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnX195YXJnc1N0cmluZ19fOicsICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnICcpfWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRzQnlUd29EYXNoZXMgPSAocykgPT4gL14tLS8udGVzdChzKTtcbiAgICAgICAgY29uc3QgaXNTaG9ydE9wdGlvbiA9IChzKSA9PiAvXlteMC05XSQvLnRlc3Qocyk7XG4gICAgICAgIGNvbnN0IGRhc2hlcyA9ICFzdGFydHNCeVR3b0Rhc2hlcyhjdXJyZW50KSAmJiBpc1Nob3J0T3B0aW9uKGtleSkgPyAnLScgOiAnLS0nO1xuICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGRhc2hlcyArIGtleVdpdGhEZXNjKTtcbiAgICAgICAgaWYgKG5lZ2FibGUpIHtcbiAgICAgICAgICAgIGNvbXBsZXRpb25zLnB1c2goZGFzaGVzICsgJ25vLScgKyBrZXlXaXRoRGVzYyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3VzdG9tQ29tcGxldGlvbihhcmdzLCBhcmd2LCBjdXJyZW50LCBkb25lKSB7XG4gICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uLCBudWxsLCB0aGlzLnNoaW0pO1xuICAgICAgICBpZiAoaXNTeW5jQ29tcGxldGlvbkZ1bmN0aW9uKHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb24oY3VycmVudCwgYXJndik7XG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGxpc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaW0ucHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKG51bGwsIGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGltLnByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZShlcnIsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0ZhbGxiYWNrQ29tcGxldGlvbkZ1bmN0aW9uKHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uKGN1cnJlbnQsIGFyZ3YsIChvbkNvbXBsZXRlZCA9IGRvbmUpID0+IHRoaXMuZGVmYXVsdENvbXBsZXRpb24oYXJncywgYXJndiwgY3VycmVudCwgb25Db21wbGV0ZWQpLCBjb21wbGV0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgZG9uZShudWxsLCBjb21wbGV0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbihjdXJyZW50LCBhcmd2LCBjb21wbGV0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgZG9uZShudWxsLCBjb21wbGV0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDb21wbGV0aW9uKGFyZ3MsIGRvbmUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGFyZ3MubGVuZ3RoID8gYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogJyc7XG4gICAgICAgIGNvbnN0IGFyZ3YgPSB0aGlzLnlhcmdzLnBhcnNlKGFyZ3MsIHRydWUpO1xuICAgICAgICBjb25zdCBjb21wbGV0aW9uRnVuY3Rpb24gPSB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvblxuICAgICAgICAgICAgPyAoYXJndikgPT4gdGhpcy5jdXN0b21Db21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIGRvbmUpXG4gICAgICAgICAgICA6IChhcmd2KSA9PiB0aGlzLmRlZmF1bHRDb21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIGRvbmUpO1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKGFyZ3YpXG4gICAgICAgICAgICA/IGFyZ3YudGhlbihjb21wbGV0aW9uRnVuY3Rpb24pXG4gICAgICAgICAgICA6IGNvbXBsZXRpb25GdW5jdGlvbihhcmd2KTtcbiAgICB9XG4gICAgZ2VuZXJhdGVDb21wbGV0aW9uU2NyaXB0KCQwLCBjbWQpIHtcbiAgICAgICAgbGV0IHNjcmlwdCA9IHRoaXMuenNoU2hlbGxcbiAgICAgICAgICAgID8gdGVtcGxhdGVzLmNvbXBsZXRpb25ac2hUZW1wbGF0ZVxuICAgICAgICAgICAgOiB0ZW1wbGF0ZXMuY29tcGxldGlvblNoVGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnNoaW0ucGF0aC5iYXNlbmFtZSgkMCk7XG4gICAgICAgIGlmICgkMC5tYXRjaCgvXFwuanMkLykpXG4gICAgICAgICAgICAkMCA9IGAuLyR7JDB9YDtcbiAgICAgICAgc2NyaXB0ID0gc2NyaXB0LnJlcGxhY2UoL3t7YXBwX25hbWV9fS9nLCBuYW1lKTtcbiAgICAgICAgc2NyaXB0ID0gc2NyaXB0LnJlcGxhY2UoL3t7Y29tcGxldGlvbl9jb21tYW5kfX0vZywgY21kKTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdC5yZXBsYWNlKC97e2FwcF9wYXRofX0vZywgJDApO1xuICAgIH1cbiAgICByZWdpc3RlckZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uID0gZm47XG4gICAgfVxuICAgIHNldFBhcnNlZChwYXJzZWQpIHtcbiAgICAgICAgdGhpcy5hbGlhc2VzID0gcGFyc2VkLmFsaWFzZXM7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRpb24oeWFyZ3MsIHVzYWdlLCBjb21tYW5kLCBzaGltKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wbGV0aW9uKHlhcmdzLCB1c2FnZSwgY29tbWFuZCwgc2hpbSk7XG59XG5mdW5jdGlvbiBpc1N5bmNDb21wbGV0aW9uRnVuY3Rpb24oY29tcGxldGlvbkZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbXBsZXRpb25GdW5jdGlvbi5sZW5ndGggPCAzO1xufVxuZnVuY3Rpb24gaXNGYWxsYmFja0NvbXBsZXRpb25GdW5jdGlvbihjb21wbGV0aW9uRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gY29tcGxldGlvbkZ1bmN0aW9uLmxlbmd0aCA+IDM7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGxldmVuc2h0ZWluKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBiLmxlbmd0aDtcbiAgICBpZiAoYi5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBhLmxlbmd0aDtcbiAgICBjb25zdCBtYXRyaXggPSBbXTtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDw9IGIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWF0cml4W2ldID0gW2ldO1xuICAgIH1cbiAgICBsZXQgajtcbiAgICBmb3IgKGogPSAwOyBqIDw9IGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbWF0cml4WzBdW2pdID0gajtcbiAgICB9XG4gICAgZm9yIChpID0gMTsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAoaiA9IDE7IGogPD0gYS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGIuY2hhckF0KGkgLSAxKSA9PT0gYS5jaGFyQXQoaiAtIDEpKSB7XG4gICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdID0gbWF0cml4W2kgLSAxXVtqIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgaiA+IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgYi5jaGFyQXQoaSAtIDIpID09PSBhLmNoYXJBdChqIC0gMSkgJiZcbiAgICAgICAgICAgICAgICAgICAgYi5jaGFyQXQoaSAtIDEpID09PSBhLmNoYXJBdChqIC0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdID0gbWF0cml4W2kgLSAyXVtqIC0gMl0gKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdID0gTWF0aC5taW4obWF0cml4W2kgLSAxXVtqIC0gMV0gKyAxLCBNYXRoLm1pbihtYXRyaXhbaV1baiAtIDFdICsgMSwgbWF0cml4W2kgLSAxXVtqXSArIDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeFtiLmxlbmd0aF1bYS5sZW5ndGhdO1xufVxuIiwgImltcG9ydCB7IGFyZ3NlcnQgfSBmcm9tICcuL2FyZ3NlcnQuanMnO1xuaW1wb3J0IHsgYXNzZXJ0Tm90U3RyaWN0RXF1YWwsIH0gZnJvbSAnLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5pbXBvcnQgeyBsZXZlbnNodGVpbiBhcyBkaXN0YW5jZSB9IGZyb20gJy4vdXRpbHMvbGV2ZW5zaHRlaW4uanMnO1xuaW1wb3J0IHsgb2JqRmlsdGVyIH0gZnJvbSAnLi91dGlscy9vYmotZmlsdGVyLmpzJztcbmNvbnN0IHNwZWNpYWxLZXlzID0gWyckMCcsICctLScsICdfJ107XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGlvbih5YXJncywgdXNhZ2UsIHNoaW0pIHtcbiAgICBjb25zdCBfXyA9IHNoaW0ueTE4bi5fXztcbiAgICBjb25zdCBfX24gPSBzaGltLnkxOG4uX19uO1xuICAgIGNvbnN0IHNlbGYgPSB7fTtcbiAgICBzZWxmLm5vbk9wdGlvbkNvdW50ID0gZnVuY3Rpb24gbm9uT3B0aW9uQ291bnQoYXJndikge1xuICAgICAgICBjb25zdCBkZW1hbmRlZENvbW1hbmRzID0geWFyZ3MuZ2V0RGVtYW5kZWRDb21tYW5kcygpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbmFsQ291bnQgPSBhcmd2Ll8ubGVuZ3RoICsgKGFyZ3ZbJy0tJ10gPyBhcmd2WyctLSddLmxlbmd0aCA6IDApO1xuICAgICAgICBjb25zdCBfcyA9IHBvc2l0aW9uYWxDb3VudCAtIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKS5jb21tYW5kcy5sZW5ndGg7XG4gICAgICAgIGlmIChkZW1hbmRlZENvbW1hbmRzLl8gJiZcbiAgICAgICAgICAgIChfcyA8IGRlbWFuZGVkQ29tbWFuZHMuXy5taW4gfHwgX3MgPiBkZW1hbmRlZENvbW1hbmRzLl8ubWF4KSkge1xuICAgICAgICAgICAgaWYgKF9zIDwgZGVtYW5kZWRDb21tYW5kcy5fLm1pbikge1xuICAgICAgICAgICAgICAgIGlmIChkZW1hbmRlZENvbW1hbmRzLl8ubWluTXNnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNhZ2UuZmFpbChkZW1hbmRlZENvbW1hbmRzLl8ubWluTXNnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRlbWFuZGVkQ29tbWFuZHMuXy5taW5Nc2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMC9nLCBfcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCQxLywgZGVtYW5kZWRDb21tYW5kcy5fLm1pbi50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdOb3QgZW5vdWdoIG5vbi1vcHRpb24gYXJndW1lbnRzOiBnb3QgJXMsIG5lZWQgYXQgbGVhc3QgJXMnLCAnTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgX3MsIF9zLnRvU3RyaW5nKCksIGRlbWFuZGVkQ29tbWFuZHMuXy5taW4udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9zID4gZGVtYW5kZWRDb21tYW5kcy5fLm1heCkge1xuICAgICAgICAgICAgICAgIGlmIChkZW1hbmRlZENvbW1hbmRzLl8ubWF4TXNnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNhZ2UuZmFpbChkZW1hbmRlZENvbW1hbmRzLl8ubWF4TXNnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRlbWFuZGVkQ29tbWFuZHMuXy5tYXhNc2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMC9nLCBfcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCQxLywgZGVtYW5kZWRDb21tYW5kcy5fLm1heC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdUb28gbWFueSBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBtYXhpbXVtIG9mICVzJywgJ1RvbyBtYW55IG5vbi1vcHRpb24gYXJndW1lbnRzOiBnb3QgJXMsIG1heGltdW0gb2YgJXMnLCBfcywgX3MudG9TdHJpbmcoKSwgZGVtYW5kZWRDb21tYW5kcy5fLm1heC50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLnBvc2l0aW9uYWxDb3VudCA9IGZ1bmN0aW9uIHBvc2l0aW9uYWxDb3VudChyZXF1aXJlZCwgb2JzZXJ2ZWQpIHtcbiAgICAgICAgaWYgKG9ic2VydmVkIDwgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdOb3QgZW5vdWdoIG5vbi1vcHRpb24gYXJndW1lbnRzOiBnb3QgJXMsIG5lZWQgYXQgbGVhc3QgJXMnLCAnTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgb2JzZXJ2ZWQsIG9ic2VydmVkICsgJycsIHJlcXVpcmVkICsgJycpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5yZXF1aXJlZEFyZ3VtZW50cyA9IGZ1bmN0aW9uIHJlcXVpcmVkQXJndW1lbnRzKGFyZ3YsIGRlbWFuZGVkT3B0aW9ucykge1xuICAgICAgICBsZXQgbWlzc2luZyA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRlbWFuZGVkT3B0aW9ucykpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIGtleSkgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgYXJndltrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG1pc3NpbmcgPSBtaXNzaW5nIHx8IHt9O1xuICAgICAgICAgICAgICAgIG1pc3Npbmdba2V5XSA9IGRlbWFuZGVkT3B0aW9uc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtaXNzaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Nc2dzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhtaXNzaW5nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IG1pc3Npbmdba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAobXNnICYmIGN1c3RvbU1zZ3MuaW5kZXhPZihtc2cpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21Nc2dzLnB1c2gobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Nc2cgPSBjdXN0b21Nc2dzLmxlbmd0aCA/IGBcXG4ke2N1c3RvbU1zZ3Muam9pbignXFxuJyl9YCA6ICcnO1xuICAgICAgICAgICAgdXNhZ2UuZmFpbChfX24oJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ6ICVzJywgJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzOiAlcycsIE9iamVjdC5rZXlzKG1pc3NpbmcpLmxlbmd0aCwgT2JqZWN0LmtleXMobWlzc2luZykuam9pbignLCAnKSArIGN1c3RvbU1zZykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLnVua25vd25Bcmd1bWVudHMgPSBmdW5jdGlvbiB1bmtub3duQXJndW1lbnRzKGFyZ3YsIGFsaWFzZXMsIHBvc2l0aW9uYWxNYXAsIGlzRGVmYXVsdENvbW1hbmQsIGNoZWNrUG9zaXRpb25hbHMgPSB0cnVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgY29tbWFuZEtleXMgPSB5YXJnc1xuICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAuZ2V0Q29tbWFuZEluc3RhbmNlKClcbiAgICAgICAgICAgIC5nZXRDb21tYW5kcygpO1xuICAgICAgICBjb25zdCB1bmtub3duID0gW107XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0Q29udGV4dCgpO1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNwZWNpYWxLZXlzLmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBvc2l0aW9uYWxNYXAsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFBhcnNlQ29udGV4dCgpLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuaXNWYWxpZEFuZFNvbWVBbGlhc0lzTm90TmV3KGtleSwgYWxpYXNlcykpIHtcbiAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjaGVja1Bvc2l0aW9uYWxzICYmXG4gICAgICAgICAgICAoY3VycmVudENvbnRleHQuY29tbWFuZHMubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgICAgIGNvbW1hbmRLZXlzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHRDb21tYW5kKSkge1xuICAgICAgICAgICAgYXJndi5fLnNsaWNlKGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY29tbWFuZEtleXMuaW5jbHVkZXMoJycgKyBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVua25vd24ucHVzaCgnJyArIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrUG9zaXRpb25hbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbWFuZGVkQ29tbWFuZHMgPSB5YXJncy5nZXREZW1hbmRlZENvbW1hbmRzKCk7XG4gICAgICAgICAgICBjb25zdCBtYXhOb25PcHREZW1hbmRlZCA9ICgoX2EgPSBkZW1hbmRlZENvbW1hbmRzLl8pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tYXgpIHx8IDA7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCArIG1heE5vbk9wdERlbWFuZGVkO1xuICAgICAgICAgICAgaWYgKGV4cGVjdGVkIDwgYXJndi5fLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFyZ3YuXy5zbGljZShleHBlY3RlZCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBTdHJpbmcoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50Q29udGV4dC5jb21tYW5kcy5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhdW5rbm93bi5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1bmtub3duLmxlbmd0aCkge1xuICAgICAgICAgICAgdXNhZ2UuZmFpbChfX24oJ1Vua25vd24gYXJndW1lbnQ6ICVzJywgJ1Vua25vd24gYXJndW1lbnRzOiAlcycsIHVua25vd24ubGVuZ3RoLCB1bmtub3duLm1hcChzID0+IChzLnRyaW0oKSA/IHMgOiBgXCIke3N9XCJgKSkuam9pbignLCAnKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLnVua25vd25Db21tYW5kcyA9IGZ1bmN0aW9uIHVua25vd25Db21tYW5kcyhhcmd2KSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRLZXlzID0geWFyZ3NcbiAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgLmdldENvbW1hbmRJbnN0YW5jZSgpXG4gICAgICAgICAgICAuZ2V0Q29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgdW5rbm93biA9IFtdO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCA+IDAgfHwgY29tbWFuZEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXJndi5fLnNsaWNlKGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY29tbWFuZEtleXMuaW5jbHVkZXMoJycgKyBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVua25vd24ucHVzaCgnJyArIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVua25vd24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdXNhZ2UuZmFpbChfX24oJ1Vua25vd24gY29tbWFuZDogJXMnLCAnVW5rbm93biBjb21tYW5kczogJXMnLCB1bmtub3duLmxlbmd0aCwgdW5rbm93bi5qb2luKCcsICcpKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5pc1ZhbGlkQW5kU29tZUFsaWFzSXNOb3ROZXcgPSBmdW5jdGlvbiBpc1ZhbGlkQW5kU29tZUFsaWFzSXNOb3ROZXcoa2V5LCBhbGlhc2VzKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFsaWFzZXMsIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBbGlhc2VzID0geWFyZ3MucGFyc2VkLm5ld0FsaWFzZXM7XG4gICAgICAgIHJldHVybiBba2V5LCAuLi5hbGlhc2VzW2tleV1dLnNvbWUoYSA9PiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0FsaWFzZXMsIGEpIHx8ICFuZXdBbGlhc2VzW2tleV0pO1xuICAgIH07XG4gICAgc2VsZi5saW1pdGVkQ2hvaWNlcyA9IGZ1bmN0aW9uIGxpbWl0ZWRDaG9pY2VzKGFyZ3YpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IHt9O1xuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKG9wdGlvbnMuY2hvaWNlcykubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoc3BlY2lhbEtleXMuaW5kZXhPZihrZXkpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLmNob2ljZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBbXS5jb25jYXQoYXJndltrZXldKS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2hvaWNlc1trZXldLmluZGV4T2YodmFsdWUpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZFtrZXldID0gKGludmFsaWRba2V5XSB8fCBbXSkuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW52YWxpZEtleXMgPSBPYmplY3Qua2V5cyhpbnZhbGlkKTtcbiAgICAgICAgaWYgKCFpbnZhbGlkS2V5cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBtc2cgPSBfXygnSW52YWxpZCB2YWx1ZXM6Jyk7XG4gICAgICAgIGludmFsaWRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIG1zZyArPSBgXFxuICAke19fKCdBcmd1bWVudDogJXMsIEdpdmVuOiAlcywgQ2hvaWNlczogJXMnLCBrZXksIHVzYWdlLnN0cmluZ2lmaWVkVmFsdWVzKGludmFsaWRba2V5XSksIHVzYWdlLnN0cmluZ2lmaWVkVmFsdWVzKG9wdGlvbnMuY2hvaWNlc1trZXldKSl9YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHVzYWdlLmZhaWwobXNnKTtcbiAgICB9O1xuICAgIGxldCBpbXBsaWVkID0ge307XG4gICAgc2VsZi5pbXBsaWVzID0gZnVuY3Rpb24gaW1wbGllcyhrZXksIHZhbHVlKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8b2JqZWN0PiBbYXJyYXl8bnVtYmVyfHN0cmluZ10nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmltcGxpZXMoaywga2V5W2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWFyZ3MuZ2xvYmFsKGtleSk7XG4gICAgICAgICAgICBpZiAoIWltcGxpZWRba2V5XSkge1xuICAgICAgICAgICAgICAgIGltcGxpZWRba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChpID0+IHNlbGYuaW1wbGllcyhrZXksIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKHZhbHVlLCB1bmRlZmluZWQsIHNoaW0pO1xuICAgICAgICAgICAgICAgIGltcGxpZWRba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5nZXRJbXBsaWVkID0gZnVuY3Rpb24gZ2V0SW1wbGllZCgpIHtcbiAgICAgICAgcmV0dXJuIGltcGxpZWQ7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBrZXlFeGlzdHMoYXJndiwgdmFsKSB7XG4gICAgICAgIGNvbnN0IG51bSA9IE51bWJlcih2YWwpO1xuICAgICAgICB2YWwgPSBpc05hTihudW0pID8gdmFsIDogbnVtO1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHZhbCA9IGFyZ3YuXy5sZW5ndGggPj0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbC5tYXRjaCgvXi0tbm8tLisvKSkge1xuICAgICAgICAgICAgdmFsID0gdmFsLm1hdGNoKC9eLS1uby0oLispLylbMV07XG4gICAgICAgICAgICB2YWwgPSAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWwgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndiwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBzZWxmLmltcGxpY2F0aW9ucyA9IGZ1bmN0aW9uIGltcGxpY2F0aW9ucyhhcmd2KSB7XG4gICAgICAgIGNvbnN0IGltcGx5RmFpbCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhpbXBsaWVkKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnS2V5ID0ga2V5O1xuICAgICAgICAgICAgKGltcGxpZWRba2V5XSB8fCBbXSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IG9yaWdLZXk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAga2V5ID0ga2V5RXhpc3RzKGFyZ3YsIGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBrZXlFeGlzdHMoYXJndiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkgJiYgIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcGx5RmFpbC5wdXNoKGAgJHtvcmlnS2V5fSAtPiAke29yaWdWYWx1ZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbXBseUZhaWwubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbXNnID0gYCR7X18oJ0ltcGxpY2F0aW9ucyBmYWlsZWQ6Jyl9XFxuYDtcbiAgICAgICAgICAgIGltcGx5RmFpbC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBtc2cgKz0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwobXNnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGNvbmZsaWN0aW5nID0ge307XG4gICAgc2VsZi5jb25mbGljdHMgPSBmdW5jdGlvbiBjb25mbGljdHMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW2FycmF5fHN0cmluZ10nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZsaWN0cyhrLCBrZXlba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5YXJncy5nbG9iYWwoa2V5KTtcbiAgICAgICAgICAgIGlmICghY29uZmxpY3Rpbmdba2V5XSkge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaSA9PiBzZWxmLmNvbmZsaWN0cyhrZXksIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuZ2V0Q29uZmxpY3RpbmcgPSAoKSA9PiBjb25mbGljdGluZztcbiAgICBzZWxmLmNvbmZsaWN0aW5nID0gZnVuY3Rpb24gY29uZmxpY3RpbmdGbihhcmd2KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGFyZ3YpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChjb25mbGljdGluZ1trZXldKSB7XG4gICAgICAgICAgICAgICAgY29uZmxpY3Rpbmdba2V5XS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIGFyZ3Zba2V5XSAhPT0gdW5kZWZpbmVkICYmIGFyZ3ZbdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoX18oJ0FyZ3VtZW50cyAlcyBhbmQgJXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZScsIGtleSwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFBhcnNlckNvbmZpZ3VyYXRpb24oKVsnc3RyaXAtZGFzaGVkJ10pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbmZsaWN0aW5nKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uZmxpY3Rpbmdba2V5XS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2W3NoaW0uUGFyc2VyLmNhbWVsQ2FzZShrZXkpXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2W3NoaW0uUGFyc2VyLmNhbWVsQ2FzZSh2YWx1ZSldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoX18oJ0FyZ3VtZW50cyAlcyBhbmQgJXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZScsIGtleSwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYucmVjb21tZW5kQ29tbWFuZHMgPSBmdW5jdGlvbiByZWNvbW1lbmRDb21tYW5kcyhjbWQsIHBvdGVudGlhbENvbW1hbmRzKSB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDM7XG4gICAgICAgIHBvdGVudGlhbENvbW1hbmRzID0gcG90ZW50aWFsQ29tbWFuZHMuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCk7XG4gICAgICAgIGxldCByZWNvbW1lbmRlZCA9IG51bGw7XG4gICAgICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGNhbmRpZGF0ZTsgKGNhbmRpZGF0ZSA9IHBvdGVudGlhbENvbW1hbmRzW2ldKSAhPT0gdW5kZWZpbmVkOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBkaXN0YW5jZShjbWQsIGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICBpZiAoZCA8PSB0aHJlc2hvbGQgJiYgZCA8IGJlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGJlc3REaXN0YW5jZSA9IGQ7XG4gICAgICAgICAgICAgICAgcmVjb21tZW5kZWQgPSBjYW5kaWRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY29tbWVuZGVkKVxuICAgICAgICAgICAgdXNhZ2UuZmFpbChfXygnRGlkIHlvdSBtZWFuICVzPycsIHJlY29tbWVuZGVkKSk7XG4gICAgfTtcbiAgICBzZWxmLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQobG9jYWxMb29rdXApIHtcbiAgICAgICAgaW1wbGllZCA9IG9iakZpbHRlcihpbXBsaWVkLCBrID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIGNvbmZsaWN0aW5nID0gb2JqRmlsdGVyKGNvbmZsaWN0aW5nLCBrID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gICAgY29uc3QgZnJvemVucyA9IFtdO1xuICAgIHNlbGYuZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKCkge1xuICAgICAgICBmcm96ZW5zLnB1c2goe1xuICAgICAgICAgICAgaW1wbGllZCxcbiAgICAgICAgICAgIGNvbmZsaWN0aW5nLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHNlbGYudW5mcmVlemUgPSBmdW5jdGlvbiB1bmZyZWV6ZSgpIHtcbiAgICAgICAgY29uc3QgZnJvemVuID0gZnJvemVucy5wb3AoKTtcbiAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwoZnJvemVuLCB1bmRlZmluZWQsIHNoaW0pO1xuICAgICAgICAoeyBpbXBsaWVkLCBjb25mbGljdGluZyB9ID0gZnJvemVuKTtcbiAgICB9O1xuICAgIHJldHVybiBzZWxmO1xufVxuIiwgImltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4uL3llcnJvci5qcyc7XG5sZXQgcHJldmlvdXNseVZpc2l0ZWRDb25maWdzID0gW107XG5sZXQgc2hpbTtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUV4dGVuZHMoY29uZmlnLCBjd2QsIG1lcmdlRXh0ZW5kcywgX3NoaW0pIHtcbiAgICBzaGltID0gX3NoaW07XG4gICAgbGV0IGRlZmF1bHRDb25maWcgPSB7fTtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2V4dGVuZHMnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5leHRlbmRzICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29uZmlnO1xuICAgICAgICBjb25zdCBpc1BhdGggPSAvXFwuanNvbnxcXC4uKnJjJC8udGVzdChjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIGxldCBwYXRoVG9EZWZhdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpc1BhdGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGF0aFRvRGVmYXVsdCA9IGltcG9ydC5tZXRhLnJlc29sdmUoY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGF0aFRvRGVmYXVsdCA9IGdldFBhdGhUb0RlZmF1bHRDb25maWcoY3dkLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tGb3JDaXJjdWxhckV4dGVuZHMocGF0aFRvRGVmYXVsdCk7XG4gICAgICAgIHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncy5wdXNoKHBhdGhUb0RlZmF1bHQpO1xuICAgICAgICBkZWZhdWx0Q29uZmlnID0gaXNQYXRoXG4gICAgICAgICAgICA/IEpTT04ucGFyc2Uoc2hpbS5yZWFkRmlsZVN5bmMocGF0aFRvRGVmYXVsdCwgJ3V0ZjgnKSlcbiAgICAgICAgICAgIDogX3NoaW0ucmVxdWlyZShjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuZXh0ZW5kcztcbiAgICAgICAgZGVmYXVsdENvbmZpZyA9IGFwcGx5RXh0ZW5kcyhkZWZhdWx0Q29uZmlnLCBzaGltLnBhdGguZGlybmFtZShwYXRoVG9EZWZhdWx0KSwgbWVyZ2VFeHRlbmRzLCBzaGltKTtcbiAgICB9XG4gICAgcHJldmlvdXNseVZpc2l0ZWRDb25maWdzID0gW107XG4gICAgcmV0dXJuIG1lcmdlRXh0ZW5kc1xuICAgICAgICA/IG1lcmdlRGVlcChkZWZhdWx0Q29uZmlnLCBjb25maWcpXG4gICAgICAgIDogT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbn1cbmZ1bmN0aW9uIGNoZWNrRm9yQ2lyY3VsYXJFeHRlbmRzKGNmZ1BhdGgpIHtcbiAgICBpZiAocHJldmlvdXNseVZpc2l0ZWRDb25maWdzLmluZGV4T2YoY2ZnUGF0aCkgPiAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgWUVycm9yKGBDaXJjdWxhciBleHRlbmRlZCBjb25maWd1cmF0aW9uczogJyR7Y2ZnUGF0aH0nLmApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFBhdGhUb0RlZmF1bHRDb25maWcoY3dkLCBwYXRoVG9FeHRlbmQpIHtcbiAgICByZXR1cm4gc2hpbS5wYXRoLnJlc29sdmUoY3dkLCBwYXRoVG9FeHRlbmQpO1xufVxuZnVuY3Rpb24gbWVyZ2VEZWVwKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmopO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgY29uZmlnMSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY29uZmlnMikpIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGNvbmZpZzJba2V5XSkgJiYgaXNPYmplY3QodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IG1lcmdlRGVlcChjb25maWcxW2tleV0sIGNvbmZpZzJba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGNvbmZpZzJba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuIiwgInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBfWWFyZ3NJbnN0YW5jZV9jd2QsIF9ZYXJnc0luc3RhbmNlX2NvbnRleHQsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBfWWFyZ3NJbnN0YW5jZV9kZWZhdWx0U2hvd0hpZGRlbk9wdCwgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIF9ZYXJnc0luc3RhbmNlX2Zyb3plbnMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQsIF9ZYXJnc0luc3RhbmNlX2xvZ2dlciwgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIF9ZYXJnc0luc3RhbmNlX3BhcnNlQ29udGV4dCwgX1lhcmdzSW5zdGFuY2VfcGtncywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBfWWFyZ3NJbnN0YW5jZV9wcm9jZXNzQXJncywgX1lhcmdzSW5zdGFuY2VfcmVjb21tZW5kQ29tbWFuZHMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbjtcbmltcG9ydCB7IGNvbW1hbmQgYXMgQ29tbWFuZCwgfSBmcm9tICcuL2NvbW1hbmQuanMnO1xuaW1wb3J0IHsgYXNzZXJ0Tm90U3RyaWN0RXF1YWwsIGFzc2VydFNpbmdsZUtleSwgb2JqZWN0S2V5cywgfSBmcm9tICcuL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzJztcbmltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4veWVycm9yLmpzJztcbmltcG9ydCB7IHVzYWdlIGFzIFVzYWdlIH0gZnJvbSAnLi91c2FnZS5qcyc7XG5pbXBvcnQgeyBhcmdzZXJ0IH0gZnJvbSAnLi9hcmdzZXJ0LmpzJztcbmltcG9ydCB7IGNvbXBsZXRpb24gYXMgQ29tcGxldGlvbiwgfSBmcm9tICcuL2NvbXBsZXRpb24uanMnO1xuaW1wb3J0IHsgdmFsaWRhdGlvbiBhcyBWYWxpZGF0aW9uLCB9IGZyb20gJy4vdmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQgeyBvYmpGaWx0ZXIgfSBmcm9tICcuL3V0aWxzL29iai1maWx0ZXIuanMnO1xuaW1wb3J0IHsgYXBwbHlFeHRlbmRzIH0gZnJvbSAnLi91dGlscy9hcHBseS1leHRlbmRzLmpzJztcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgR2xvYmFsTWlkZGxld2FyZSwgfSBmcm9tICcuL21pZGRsZXdhcmUuanMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pcy1wcm9taXNlLmpzJztcbmltcG9ydCB7IG1heWJlQXN5bmNSZXN1bHQgfSBmcm9tICcuL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyc7XG5pbXBvcnQgc2V0QmxvY2tpbmcgZnJvbSAnLi91dGlscy9zZXQtYmxvY2tpbmcuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIFlhcmdzRmFjdG9yeShfc2hpbSkge1xuICAgIHJldHVybiAocHJvY2Vzc0FyZ3MgPSBbXSwgY3dkID0gX3NoaW0ucHJvY2Vzcy5jd2QoKSwgcGFyZW50UmVxdWlyZSkgPT4ge1xuICAgICAgICBjb25zdCB5YXJncyA9IG5ldyBZYXJnc0luc3RhbmNlKHByb2Nlc3NBcmdzLCBjd2QsIHBhcmVudFJlcXVpcmUsIF9zaGltKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHlhcmdzLCAnYXJndicsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB5YXJncy5wYXJzZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB5YXJncy5oZWxwKCk7XG4gICAgICAgIHlhcmdzLnZlcnNpb24oKTtcbiAgICAgICAgcmV0dXJuIHlhcmdzO1xuICAgIH07XG59XG5jb25zdCBrQ29weURvdWJsZURhc2ggPSBTeW1ib2woJ2NvcHlEb3VibGVEYXNoJyk7XG5jb25zdCBrQ3JlYXRlTG9nZ2VyID0gU3ltYm9sKCdjb3B5RG91YmxlRGFzaCcpO1xuY29uc3Qga0RlbGV0ZUZyb21QYXJzZXJIaW50T2JqZWN0ID0gU3ltYm9sKCdkZWxldGVGcm9tUGFyc2VySGludE9iamVjdCcpO1xuY29uc3Qga0VtaXRXYXJuaW5nID0gU3ltYm9sKCdlbWl0V2FybmluZycpO1xuY29uc3Qga0ZyZWV6ZSA9IFN5bWJvbCgnZnJlZXplJyk7XG5jb25zdCBrR2V0RG9sbGFyWmVybyA9IFN5bWJvbCgnZ2V0RG9sbGFyWmVybycpO1xuY29uc3Qga0dldFBhcnNlckNvbmZpZ3VyYXRpb24gPSBTeW1ib2woJ2dldFBhcnNlckNvbmZpZ3VyYXRpb24nKTtcbmNvbnN0IGtHZXRVc2FnZUNvbmZpZ3VyYXRpb24gPSBTeW1ib2woJ2dldFVzYWdlQ29uZmlndXJhdGlvbicpO1xuY29uc3Qga0d1ZXNzTG9jYWxlID0gU3ltYm9sKCdndWVzc0xvY2FsZScpO1xuY29uc3Qga0d1ZXNzVmVyc2lvbiA9IFN5bWJvbCgnZ3Vlc3NWZXJzaW9uJyk7XG5jb25zdCBrUGFyc2VQb3NpdGlvbmFsTnVtYmVycyA9IFN5bWJvbCgncGFyc2VQb3NpdGlvbmFsTnVtYmVycycpO1xuY29uc3Qga1BrZ1VwID0gU3ltYm9sKCdwa2dVcCcpO1xuY29uc3Qga1BvcHVsYXRlUGFyc2VySGludEFycmF5ID0gU3ltYm9sKCdwb3B1bGF0ZVBhcnNlckhpbnRBcnJheScpO1xuY29uc3Qga1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeSA9IFN5bWJvbCgncG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5Jyk7XG5jb25zdCBrUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5ID0gU3ltYm9sKCdwb3B1bGF0ZVBhcnNlckhpbnRBcnJheURpY3Rpb25hcnknKTtcbmNvbnN0IGtQb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5ID0gU3ltYm9sKCdwb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5Jyk7XG5jb25zdCBrU2FuaXRpemVLZXkgPSBTeW1ib2woJ3Nhbml0aXplS2V5Jyk7XG5jb25zdCBrU2V0S2V5ID0gU3ltYm9sKCdzZXRLZXknKTtcbmNvbnN0IGtVbmZyZWV6ZSA9IFN5bWJvbCgndW5mcmVlemUnKTtcbmNvbnN0IGtWYWxpZGF0ZUFzeW5jID0gU3ltYm9sKCd2YWxpZGF0ZUFzeW5jJyk7XG5jb25zdCBrR2V0Q29tbWFuZEluc3RhbmNlID0gU3ltYm9sKCdnZXRDb21tYW5kSW5zdGFuY2UnKTtcbmNvbnN0IGtHZXRDb250ZXh0ID0gU3ltYm9sKCdnZXRDb250ZXh0Jyk7XG5jb25zdCBrR2V0SGFzT3V0cHV0ID0gU3ltYm9sKCdnZXRIYXNPdXRwdXQnKTtcbmNvbnN0IGtHZXRMb2dnZXJJbnN0YW5jZSA9IFN5bWJvbCgnZ2V0TG9nZ2VySW5zdGFuY2UnKTtcbmNvbnN0IGtHZXRQYXJzZUNvbnRleHQgPSBTeW1ib2woJ2dldFBhcnNlQ29udGV4dCcpO1xuY29uc3Qga0dldFVzYWdlSW5zdGFuY2UgPSBTeW1ib2woJ2dldFVzYWdlSW5zdGFuY2UnKTtcbmNvbnN0IGtHZXRWYWxpZGF0aW9uSW5zdGFuY2UgPSBTeW1ib2woJ2dldFZhbGlkYXRpb25JbnN0YW5jZScpO1xuY29uc3Qga0hhc1BhcnNlQ2FsbGJhY2sgPSBTeW1ib2woJ2hhc1BhcnNlQ2FsbGJhY2snKTtcbmNvbnN0IGtJc0dsb2JhbENvbnRleHQgPSBTeW1ib2woJ2lzR2xvYmFsQ29udGV4dCcpO1xuY29uc3Qga1Bvc3RQcm9jZXNzID0gU3ltYm9sKCdwb3N0UHJvY2VzcycpO1xuY29uc3Qga1JlYmFzZSA9IFN5bWJvbCgncmViYXNlJyk7XG5jb25zdCBrUmVzZXQgPSBTeW1ib2woJ3Jlc2V0Jyk7XG5jb25zdCBrUnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHMgPSBTeW1ib2woJ3J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzJyk7XG5jb25zdCBrUnVuVmFsaWRhdGlvbiA9IFN5bWJvbCgncnVuVmFsaWRhdGlvbicpO1xuY29uc3Qga1NldEhhc091dHB1dCA9IFN5bWJvbCgnc2V0SGFzT3V0cHV0Jyk7XG5jb25zdCBrVHJhY2tNYW51YWxseVNldEtleXMgPSBTeW1ib2woJ2tUcmFja01hbnVhbGx5U2V0S2V5cycpO1xuY29uc3QgREVGQVVMVF9MT0NBTEUgPSAnZW5fVVMnO1xuZXhwb3J0IGNsYXNzIFlhcmdzSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb2Nlc3NBcmdzID0gW10sIGN3ZCwgcGFyZW50UmVxdWlyZSwgc2hpbSkge1xuICAgICAgICB0aGlzLmN1c3RvbVNjcmlwdE5hbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY29tbWFuZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY3dkLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LnNldCh0aGlzLCB7IGNvbW1hbmRzOiBbXSwgZnVsbENvbW1hbmRzOiBbXSB9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQuc2V0KHRoaXMsICdzaG93LWhpZGRlbicpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3Iuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUuc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9lbWl0dGVkV2FybmluZ3Muc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3Muc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLnNldCh0aGlzLCBbXSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2dyb3Vwcy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfaGVscE9wdC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2lzR2xvYmFsQ29udGV4dC5zZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2xvZ2dlci5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LnNldCh0aGlzLCAnJyk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BhcmVudFJlcXVpcmUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BhcnNlckNvbmZpZy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcGtncy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3Muc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3JlY29tbWVuZENvbW1hbmRzLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3NoaW0uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3N0cmljdC5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3VzYWdlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZy5zZXQodGhpcywge30pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBzaGltLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIHByb2Nlc3NBcmdzLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY3dkLCBjd2QsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLCBwYXJlbnRSZXF1aXJlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgbmV3IEdsb2JhbE1pZGRsZXdhcmUodGhpcyksIFwiZlwiKTtcbiAgICAgICAgdGhpcy4kMCA9IHRoaXNba0dldERvbGxhclplcm9dKCk7XG4gICAgICAgIHRoaXNba1Jlc2V0XSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIiksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuc2hvd0hpZGRlbk9wdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIsIHRoaXNba0NyZWF0ZUxvZ2dlcl0oKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS55MThuLnNldExvY2FsZShERUZBVUxUX0xPQ0FMRSk7XG4gICAgfVxuICAgIGFkZEhlbHBPcHQob3B0LCBtc2cpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdEhlbHBPcHQgPSAnaGVscCc7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8Ym9vbGVhbl0gW3N0cmluZ10nLCBbb3B0LCBtc2ddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICB0aGlzW2tEZWxldGVGcm9tUGFyc2VySGludE9iamVjdF0oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBudWxsLCBcImZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdCA9PT0gZmFsc2UgJiYgbXNnID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCB0eXBlb2Ygb3B0ID09PSAnc3RyaW5nJyA/IG9wdCA6IGRlZmF1bHRIZWxwT3B0LCBcImZcIik7XG4gICAgICAgIHRoaXMuYm9vbGVhbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIiksIG1zZyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVmZXJZMThuTG9va3VwKCdTaG93IGhlbHAnKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBoZWxwKG9wdCwgbXNnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEhlbHBPcHQob3B0LCBtc2cpO1xuICAgIH1cbiAgICBhZGRTaG93SGlkZGVuT3B0KG9wdCwgbXNnKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8Ym9vbGVhbl0gW3N0cmluZ10nLCBbb3B0LCBtc2ddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKG9wdCA9PT0gZmFsc2UgJiYgbXNnID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY29uc3Qgc2hvd0hpZGRlbk9wdCA9IHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnID8gb3B0IDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZWZhdWx0U2hvd0hpZGRlbk9wdCwgXCJmXCIpO1xuICAgICAgICB0aGlzLmJvb2xlYW4oc2hvd0hpZGRlbk9wdCk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUoc2hvd0hpZGRlbk9wdCwgbXNnIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5kZWZlclkxOG5Mb29rdXAoJ1Nob3cgaGlkZGVuIG9wdGlvbnMnKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLnNob3dIaWRkZW5PcHQgPSBzaG93SGlkZGVuT3B0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2hvd0hpZGRlbihvcHQsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRTaG93SGlkZGVuT3B0KG9wdCwgbXNnKTtcbiAgICB9XG4gICAgYWxpYXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW3N0cmluZ3xhcnJheV0nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheURpY3Rpb25hcnldKHRoaXMuYWxpYXMuYmluZCh0aGlzKSwgJ2FsaWFzJywga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhcnJheShrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdhcnJheScsIGtleXMpO1xuICAgICAgICB0aGlzW2tUcmFja01hbnVhbGx5U2V0S2V5c10oa2V5cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBib29sZWFuKGtleXMpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fHN0cmluZz4nLCBba2V5c10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheV0oJ2Jvb2xlYW4nLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2hlY2soZiwgZ2xvYmFsKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxmdW5jdGlvbj4gW2Jvb2xlYW5dJywgW2YsIGdsb2JhbF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzLm1pZGRsZXdhcmUoKGFyZ3YsIF95YXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1heWJlQXN5bmNSZXN1bHQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmKGFyZ3YsIF95YXJncy5nZXRPcHRpb25zKCkpO1xuICAgICAgICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4uX18oJ0FyZ3VtZW50IGNoZWNrIGZhaWxlZDogJXMnLCBmLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycgfHwgcmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmZhaWwocmVzdWx0LnRvU3RyaW5nKCksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsKGVyci5tZXNzYWdlID8gZXJyLm1lc3NhZ2UgOiBlcnIudG9TdHJpbmcoKSwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmYWxzZSwgZ2xvYmFsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNob2ljZXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW3N0cmluZ3xhcnJheV0nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheURpY3Rpb25hcnldKHRoaXMuY2hvaWNlcy5iaW5kKHRoaXMpLCAnY2hvaWNlcycsIGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29lcmNlKGtleXMsIHZhbHVlKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3R8c3RyaW5nfGFycmF5PiBbZnVuY3Rpb25dJywgW2tleXMsIHZhbHVlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcignY29lcmNlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZXJjZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBrZXlzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoa2V5cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZXJjZShrZXksIGtleXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKCdjb2VyY2UgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvZXJjZUtleSA9IGtleXM7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmtleVtjb2VyY2VLZXldID0gdHJ1ZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuYWRkQ29lcmNlTWlkZGxld2FyZSgoYXJndiwgeWFyZ3MpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGNvZXJjZUtleUFsaWFzZXMgPSAoX2EgPSB5YXJncy5nZXRBbGlhc2VzKClbY29lcmNlS2V5XSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW107XG4gICAgICAgICAgICBjb25zdCBhcmd2S2V5cyA9IFtjb2VyY2VLZXksIC4uLmNvZXJjZUtleUFsaWFzZXNdLmZpbHRlcihrZXkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIGtleSkpO1xuICAgICAgICAgICAgaWYgKGFyZ3ZLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1heWJlQXN5bmNSZXN1bHQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZShhcmd2W2FyZ3ZLZXlzWzBdXSk7XG4gICAgICAgICAgICB9LCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXJndktleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcmd2W2tleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgY29lcmNlS2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbmZsaWN0cyhrZXkxLCBrZXkyKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8b2JqZWN0PiBbc3RyaW5nfGFycmF5XScsIFtrZXkxLCBrZXkyXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmNvbmZsaWN0cyhrZXkxLCBrZXkyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbmZpZyhrZXkgPSAnY29uZmlnJywgbXNnLCBwYXJzZUZuKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tvYmplY3R8c3RyaW5nXSBbc3RyaW5nfGZ1bmN0aW9uXSBbZnVuY3Rpb25dJywgW2tleSwgbXNnLCBwYXJzZUZuXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgICBrZXkgPSBhcHBseUV4dGVuZHMoa2V5LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpLCB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpWydkZWVwLW1lcmdlLWNvbmZpZyddIHx8IGZhbHNlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzID0gKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgfHwgW10pLmNvbmNhdChrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHBhcnNlRm4gPSBtc2c7XG4gICAgICAgICAgICBtc2cgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXNjcmliZShrZXksIG1zZyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVmZXJZMThuTG9va3VwKCdQYXRoIHRvIEpTT04gY29uZmlnIGZpbGUnKSk7XG4gICAgICAgIChBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ1trXSA9IHBhcnNlRm4gfHwgdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb21wbGV0aW9uKGNtZCwgZGVzYywgZm4pIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ10gW3N0cmluZ3xib29sZWFufGZ1bmN0aW9uXSBbZnVuY3Rpb25dJywgW2NtZCwgZGVzYywgZm5dLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmbiA9IGRlc2M7XG4gICAgICAgICAgICBkZXNjID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIGNtZCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikgfHwgJ2NvbXBsZXRpb24nLCBcImZcIik7XG4gICAgICAgIGlmICghZGVzYyAmJiBkZXNjICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVzYyA9ICdnZW5lcmF0ZSBjb21wbGV0aW9uIHNjcmlwdCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21tYW5kKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSwgZGVzYyk7XG4gICAgICAgIGlmIChmbilcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLnJlZ2lzdGVyRnVuY3Rpb24oZm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29tbWFuZChjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZCkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfGFycmF5fG9iamVjdD4gW3N0cmluZ3xib29sZWFuXSBbZnVuY3Rpb258b2JqZWN0XSBbZnVuY3Rpb25dIFthcnJheV0gW2Jvb2xlYW58c3RyaW5nXScsIFtjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5hZGRIYW5kbGVyKGNtZCwgZGVzY3JpcHRpb24sIGJ1aWxkZXIsIGhhbmRsZXIsIG1pZGRsZXdhcmVzLCBkZXByZWNhdGVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbW1hbmRzKGNtZCwgZGVzY3JpcHRpb24sIGJ1aWxkZXIsIGhhbmRsZXIsIG1pZGRsZXdhcmVzLCBkZXByZWNhdGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQoY21kLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlciwgbWlkZGxld2FyZXMsIGRlcHJlY2F0ZWQpO1xuICAgIH1cbiAgICBjb21tYW5kRGlyKGRpciwgb3B0cykge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPiBbb2JqZWN0XScsIFtkaXIsIG9wdHNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmVxID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLCBcImZcIikgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucmVxdWlyZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuYWRkRGlyZWN0b3J5KGRpciwgcmVxLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRDYWxsZXJGaWxlKCksIG9wdHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY291bnQoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnY291bnQnLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVmYXVsdChrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFsqXSBbc3RyaW5nXScsIFtrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb25dLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGRlZmF1bHREZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgYXNzZXJ0U2luZ2xlS2V5KGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0gPSBkZWZhdWx0RGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0U2luZ2xlS2V5KGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSlcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSA9XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mdW5jdGlvbkRlc2NyaXB0aW9uKHZhbHVlKTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeV0odGhpcy5kZWZhdWx0LmJpbmQodGhpcyksICdkZWZhdWx0Jywga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZWZhdWx0cyhrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdChrZXksIHZhbHVlLCBkZWZhdWx0RGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBkZW1hbmRDb21tYW5kKG1pbiA9IDEsIG1heCwgbWluTXNnLCBtYXhNc2cpIHtcbiAgICAgICAgYXJnc2VydCgnW251bWJlcl0gW251bWJlcnxzdHJpbmddIFtzdHJpbmd8bnVsbHx1bmRlZmluZWRdIFtzdHJpbmd8bnVsbHx1bmRlZmluZWRdJywgW21pbiwgbWF4LCBtaW5Nc2csIG1heE1zZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIG1heCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG1pbk1zZyA9IG1heDtcbiAgICAgICAgICAgIG1heCA9IEluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2xvYmFsKCdfJywgZmFsc2UpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZW1hbmRlZENvbW1hbmRzLl8gPSB7XG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICBtaW5Nc2csXG4gICAgICAgICAgICBtYXhNc2csXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZW1hbmQoa2V5cywgbWF4LCBtc2cpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF4KSkge1xuICAgICAgICAgICAgbWF4LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIHRydWUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXksIG1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1heCA9IEluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBtc2cgPSBtYXg7XG4gICAgICAgICAgICBtYXggPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGtleXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIHRydWUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMuZGVtYW5kQ29tbWFuZChrZXlzLCBtYXgsIG1zZywgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIHRydWUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXksIG1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVtYW5kT3B0aW9uKGtleXMsIG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtc2cgPT09IHRydWUgfHwgdHlwZW9mIG1zZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVtYW5kT3B0aW9uKGtleXMsIG1zZykge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW3N0cmluZ10nLCBba2V5cywgbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeV0odGhpcy5kZW1hbmRPcHRpb24uYmluZCh0aGlzKSwgJ2RlbWFuZGVkT3B0aW9ucycsIGtleXMsIG1zZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZXByZWNhdGVPcHRpb24ob3B0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmc+IFtzdHJpbmd8Ym9vbGVhbl0nLCBbb3B0aW9uLCBtZXNzYWdlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmRlcHJlY2F0ZWRPcHRpb25zW29wdGlvbl0gPSBtZXNzYWdlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVzY3JpYmUoa2V5cywgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmddJywgW2tleXMsIGRlc2NyaXB0aW9uXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1NldEtleV0oa2V5cywgdHJ1ZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5kZXNjcmliZShrZXlzLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkZXRlY3RMb2NhbGUoZGV0ZWN0KSB7XG4gICAgICAgIGFyZ3NlcnQoJzxib29sZWFuPicsIFtkZXRlY3RdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIGRldGVjdCwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZW52KHByZWZpeCkge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGJvb2xlYW5dJywgW3ByZWZpeF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAocHJlZml4ID09PSBmYWxzZSlcbiAgICAgICAgICAgIGRlbGV0ZSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5lbnZQcmVmaXg7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmVudlByZWZpeCA9IHByZWZpeCB8fCAnJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVwaWxvZ3VlKG1zZykge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPicsIFttc2ddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmVwaWxvZyhtc2cpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZXBpbG9nKG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lcGlsb2d1ZShtc2cpO1xuICAgIH1cbiAgICBleGFtcGxlKGNtZCwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xhcnJheT4gW3N0cmluZ10nLCBbY21kLCBkZXNjcmlwdGlvbl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbWQpKSB7XG4gICAgICAgICAgICBjbWQuZm9yRWFjaChleGFtcGxlUGFyYW1zID0+IHRoaXMuZXhhbXBsZSguLi5leGFtcGxlUGFyYW1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZXhhbXBsZShjbWQsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZXhpdChjb2RlLCBlcnIpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIGVyciwgXCJmXCIpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgIH1cbiAgICBleGl0UHJvY2VzcyhlbmFibGVkID0gdHJ1ZSkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBlbmFibGVkLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmYWlsKGYpIHtcbiAgICAgICAgYXJnc2VydCgnPGZ1bmN0aW9ufGJvb2xlYW4+JywgW2ZdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBmID09PSAnYm9vbGVhbicgJiYgZiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoXCJJbnZhbGlkIGZpcnN0IGFyZ3VtZW50LiBFeHBlY3RlZCBmdW5jdGlvbiBvciBib29sZWFuICdmYWxzZSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmZhaWxGbihmKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldEFsaWFzZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlZCA/IHRoaXMucGFyc2VkLmFsaWFzZXMgOiB7fTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q29tcGxldGlvbihhcmdzLCBkb25lKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheT4gW2Z1bmN0aW9uXScsIFthcmdzLCBkb25lXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZXRDb21wbGV0aW9uKGFyZ3MsIChlcnIsIGNvbXBsZXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb21wbGV0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZXRDb21wbGV0aW9uKGFyZ3MsIGRvbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldERlbWFuZGVkT3B0aW9ucygpIHtcbiAgICAgICAgYXJnc2VydChbXSwgMCk7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZW1hbmRlZE9wdGlvbnM7XG4gICAgfVxuICAgIGdldERlbWFuZGVkQ29tbWFuZHMoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVtYW5kZWRDb21tYW5kcztcbiAgICB9XG4gICAgZ2V0RGVwcmVjYXRlZE9wdGlvbnMoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVwcmVjYXRlZE9wdGlvbnM7XG4gICAgfVxuICAgIGdldERldGVjdExvY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLCBcImZcIik7XG4gICAgfVxuICAgIGdldEV4aXRQcm9jZXNzKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRHcm91cHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgXCJmXCIpKTtcbiAgICB9XG4gICAgZ2V0SGVscCgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGFzQ2FjaGVkSGVscE1lc3NhZ2UoKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcnNlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlID0gdGhpc1trUnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHNdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIFwiZlwiKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2UocGFyc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGVscCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyUmVzcG9uc2UgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5ydW5EZWZhdWx0QnVpbGRlck9uKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShidWlsZGVyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJSZXNwb25zZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5oZWxwKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGVscCgpKTtcbiAgICB9XG4gICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRTdHJpY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRTdHJpY3RDb21tYW5kcygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0U3RyaWN0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgXCJmXCIpO1xuICAgIH1cbiAgICBnbG9iYWwoZ2xvYmFscywgZ2xvYmFsKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8YXJyYXk+IFtib29sZWFuXScsIFtnbG9iYWxzLCBnbG9iYWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgZ2xvYmFscyA9IFtdLmNvbmNhdChnbG9iYWxzKTtcbiAgICAgICAgaWYgKGdsb2JhbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwuZmlsdGVyKGwgPT4gZ2xvYmFscy5pbmRleE9mKGwpID09PSAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWxzLmZvckVhY2goZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5sb2NhbC5pbmNsdWRlcyhnKSlcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwucHVzaChnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBncm91cChvcHRzLCBncm91cE5hbWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xhcnJheT4gPHN0cmluZz4nLCBbb3B0cywgZ3JvdXBOYW1lXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMsIFwiZlwiKVtncm91cE5hbWVdIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXSkge1xuICAgICAgICAgICAgZGVsZXRlIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWVuID0ge307XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXSA9IChleGlzdGluZyB8fCBbXSkuY29uY2F0KG9wdHMpLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlZW5ba2V5XSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gKHNlZW5ba2V5XSA9IHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGhpZGUoa2V5KSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmc+JywgW2tleV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5oaWRkZW5PcHRpb25zLnB1c2goa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGltcGxpZXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW251bWJlcnxzdHJpbmd8YXJyYXldJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuaW1wbGllcyhrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ10nLCBbbG9jYWxlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChsb2NhbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpc1trR3Vlc3NMb2NhbGVdKCk7XG4gICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5nZXRMb2NhbGUoKTtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSwgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5zZXRMb2NhbGUobG9jYWxlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG1pZGRsZXdhcmUoY2FsbGJhY2ssIGFwcGx5QmVmb3JlVmFsaWRhdGlvbiwgZ2xvYmFsKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5hZGRNaWRkbGV3YXJlKGNhbGxiYWNrLCAhIWFwcGx5QmVmb3JlVmFsaWRhdGlvbiwgZ2xvYmFsKTtcbiAgICB9XG4gICAgbmFyZ3Moa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdHxhcnJheT4gW251bWJlcl0nLCBba2V5LCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXMubmFyZ3MuYmluZCh0aGlzKSwgJ25hcmcnLCBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG5vcm1hbGl6ZShrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdub3JtYWxpemUnLCBrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG51bWJlcihrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdudW1iZXInLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb3B0aW9uKGtleSwgb3B0KSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8b2JqZWN0PiBbb2JqZWN0XScsIFtrZXksIG9wdF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMoaywga2V5W2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgb3B0ID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW2tUcmFja01hbnVhbGx5U2V0S2V5c10oa2V5KTtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSAmJiAoa2V5ID09PSAndmVyc2lvbicgfHwgKG9wdCA9PT0gbnVsbCB8fCBvcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdC5hbGlhcykgPT09ICd2ZXJzaW9uJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tFbWl0V2FybmluZ10oW1xuICAgICAgICAgICAgICAgICAgICAnXCJ2ZXJzaW9uXCIgaXMgYSByZXNlcnZlZCB3b3JkLicsXG4gICAgICAgICAgICAgICAgICAgICdQbGVhc2UgZG8gb25lIG9mIHRoZSBmb2xsb3dpbmc6JyxcbiAgICAgICAgICAgICAgICAgICAgJy0gRGlzYWJsZSB2ZXJzaW9uIHdpdGggYHlhcmdzLnZlcnNpb24oZmFsc2UpYCBpZiB1c2luZyBcInZlcnNpb25cIiBhcyBhbiBvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAnLSBVc2UgdGhlIGJ1aWx0LWluIGB5YXJncy52ZXJzaW9uYCBtZXRob2QgaW5zdGVhZCAoaWYgYXBwbGljYWJsZSknLFxuICAgICAgICAgICAgICAgICAgICAnLSBVc2UgYSBkaWZmZXJlbnQgb3B0aW9uIGtleScsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL3lhcmdzLmpzLm9yZy9kb2NzLyNhcGktcmVmZXJlbmNlLXZlcnNpb24nLFxuICAgICAgICAgICAgICAgIF0uam9pbignXFxuJyksIHVuZGVmaW5lZCwgJ3ZlcnNpb25XYXJuaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgIHRoaXMuYWxpYXMoa2V5LCBvcHQuYWxpYXMpO1xuICAgICAgICAgICAgY29uc3QgZGVwcmVjYXRlID0gb3B0LmRlcHJlY2F0ZSB8fCBvcHQuZGVwcmVjYXRlZDtcbiAgICAgICAgICAgIGlmIChkZXByZWNhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlcHJlY2F0ZU9wdGlvbihrZXksIGRlcHJlY2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZW1hbmQgPSBvcHQuZGVtYW5kIHx8IG9wdC5yZXF1aXJlZCB8fCBvcHQucmVxdWlyZTtcbiAgICAgICAgICAgIGlmIChkZW1hbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZChrZXksIGRlbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmRlbWFuZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVtYW5kT3B0aW9uKGtleSwgdHlwZW9mIG9wdC5kZW1hbmRPcHRpb24gPT09ICdzdHJpbmcnID8gb3B0LmRlbWFuZE9wdGlvbiA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvbmZsaWN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmxpY3RzKGtleSwgb3B0LmNvbmZsaWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIG9wdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdChrZXksIG9wdC5kZWZhdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQuaW1wbGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbXBsaWVzKGtleSwgb3B0LmltcGxpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5uYXJncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXJncyhrZXksIG9wdC5uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvbmZpZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnKGtleSwgb3B0LmNvbmZpZ1BhcnNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0Lm5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9ybWFsaXplKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNob2ljZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNob2ljZXMoa2V5LCBvcHQuY2hvaWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvZXJjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29lcmNlKGtleSwgb3B0LmNvZXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0Lmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cChrZXksIG9wdC5ncm91cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmJvb2xlYW4gfHwgb3B0LnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9vbGVhbihrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHQuYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbGVhbihvcHQuYWxpYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5hcnJheSB8fCBvcHQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXkoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5KG9wdC5hbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0Lm51bWJlciB8fCBvcHQudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlcihrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHQuYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKG9wdC5hbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LnN0cmluZyB8fCBvcHQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHQuYWxpYXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nKG9wdC5hbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmNvdW50IHx8IG9wdC50eXBlID09PSAnY291bnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQuZ2xvYmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbChrZXksIG9wdC5nbG9iYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5kZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZWZhdWx0RGVzY3JpcHRpb25ba2V5XSA9IG9wdC5kZWZhdWx0RGVzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LnNraXBWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwVmFsaWRhdGlvbihrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IG9wdC5kZXNjcmliZSB8fCBvcHQuZGVzY3JpcHRpb24gfHwgb3B0LmRlc2M7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbnMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZ2V0RGVzY3JpcHRpb25zKCk7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZXNjcmlwdGlvbnMsIGtleSkgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZGVzYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaWJlKGtleSwgZGVzYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmhpZGRlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5yZXF1aXJlc0FyZykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZXNBcmcoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb3B0aW9ucyhrZXksIG9wdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb24oa2V5LCBvcHQpO1xuICAgIH1cbiAgICBwYXJzZShhcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8YXJyYXldIFtmdW5jdGlvbnxib29sZWFufG9iamVjdF0gW2Z1bmN0aW9uXScsIFthcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba0ZyZWV6ZV0oKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXJncyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNob3J0Q2lyY3VpdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBzaG9ydENpcmN1aXQsIFwiZlwiKTtcbiAgICAgICAgICAgIHNob3J0Q2lyY3VpdCA9IF9wYXJzZUZuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2hvcnRDaXJjdWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIHNob3J0Q2lyY3VpdCwgXCJmXCIpO1xuICAgICAgICAgICAgc2hvcnRDaXJjdWl0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaG9ydENpcmN1aXQpXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBhcmdzLCBcImZcIik7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSlcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXShhcmdzLCAhIXNob3J0Q2lyY3VpdCk7XG4gICAgICAgIGNvbnN0IHRtcFBhcnNlZCA9IHRoaXMucGFyc2VkO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5zZXRQYXJzZWQodGhpcy5wYXJzZWQpO1xuICAgICAgICBpZiAoaXNQcm9taXNlKHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRcbiAgICAgICAgICAgICAgICAudGhlbihhcmd2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIikpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIFwiZlwiKSwgYXJndiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKShlcnIsIHRoaXMucGFyc2VkLmFyZ3YsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzW2tVbmZyZWV6ZV0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlZCA9IHRtcFBhcnNlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpKVxuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIFwiZlwiKSwgcGFyc2VkLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXNba1VuZnJlZXplXSgpO1xuICAgICAgICAgICAgdGhpcy5wYXJzZWQgPSB0bXBQYXJzZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gICAgcGFyc2VBc3luYyhhcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuKSB7XG4gICAgICAgIGNvbnN0IG1heWJlUHJvbWlzZSA9IHRoaXMucGFyc2UoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbik7XG4gICAgICAgIHJldHVybiAhaXNQcm9taXNlKG1heWJlUHJvbWlzZSlcbiAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKG1heWJlUHJvbWlzZSlcbiAgICAgICAgICAgIDogbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICBwYXJzZVN5bmMoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbikge1xuICAgICAgICBjb25zdCBtYXliZVByb21pc2UgPSB0aGlzLnBhcnNlKGFyZ3MsIHNob3J0Q2lyY3VpdCwgX3BhcnNlRm4pO1xuICAgICAgICBpZiAoaXNQcm9taXNlKG1heWJlUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoJy5wYXJzZVN5bmMoKSBtdXN0IG5vdCBiZSB1c2VkIHdpdGggYXN5bmNocm9ub3VzIGJ1aWxkZXJzLCBoYW5kbGVycywgb3IgbWlkZGxld2FyZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIHBhcnNlckNvbmZpZ3VyYXRpb24oY29uZmlnKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3Q+JywgW2NvbmZpZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlckNvbmZpZywgY29uZmlnLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwa2dDb25mKGtleSwgcm9vdFBhdGgpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZz4gW3N0cmluZ10nLCBba2V5LCByb290UGF0aF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBsZXQgY29uZiA9IG51bGw7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXNba1BrZ1VwXShyb290UGF0aCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpKTtcbiAgICAgICAgaWYgKG9ialtrZXldICYmIHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmYgPSBhcHBseUV4dGVuZHMob2JqW2tleV0sIHJvb3RQYXRoIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY3dkLCBcImZcIiksIHRoaXNba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKClbJ2RlZXAtbWVyZ2UtY29uZmlnJ10gfHwgZmFsc2UsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgPSAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlnT2JqZWN0cyB8fCBbXSkuY29uY2F0KGNvbmYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwb3NpdGlvbmFsKGtleSwgb3B0cykge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPiA8b2JqZWN0PicsIFtrZXksIG9wdHNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkT3B0cyA9IFtcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgICdkZWZhdWx0RGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2ltcGxpZXMnLFxuICAgICAgICAgICAgJ25vcm1hbGl6ZScsXG4gICAgICAgICAgICAnY2hvaWNlcycsXG4gICAgICAgICAgICAnY29uZmxpY3RzJyxcbiAgICAgICAgICAgICdjb2VyY2UnLFxuICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgJ2Rlc2NyaWJlJyxcbiAgICAgICAgICAgICdkZXNjJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAnYWxpYXMnLFxuICAgICAgICBdO1xuICAgICAgICBvcHRzID0gb2JqRmlsdGVyKG9wdHMsIChrLCB2KSA9PiB7XG4gICAgICAgICAgICBpZiAoayA9PT0gJ3R5cGUnICYmICFbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbiddLmluY2x1ZGVzKHYpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRPcHRzLmluY2x1ZGVzKGspO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZnVsbENvbW1hbmQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbnRleHQsIFwiZlwiKS5mdWxsQ29tbWFuZHNbX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LCBcImZcIikuZnVsbENvbW1hbmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBwYXJzZU9wdGlvbnMgPSBmdWxsQ29tbWFuZFxuICAgICAgICAgICAgPyBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5jbWRUb1BhcnNlT3B0aW9ucyhmdWxsQ29tbWFuZClcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGFycmF5OiBbXSxcbiAgICAgICAgICAgICAgICBhbGlhczoge30sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgICAgICAgICAgZGVtYW5kOiB7fSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIG9iamVjdEtleXMocGFyc2VPcHRpb25zKS5mb3JFYWNoKHBrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlT3B0aW9uID0gcGFyc2VPcHRpb25zW3BrXTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlT3B0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZU9wdGlvbi5pbmRleE9mKGtleSkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBvcHRzW3BrXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VPcHRpb25ba2V5XSAmJiAhKHBrIGluIG9wdHMpKVxuICAgICAgICAgICAgICAgICAgICBvcHRzW3BrXSA9IHBhcnNlT3B0aW9uW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyb3VwKGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbihrZXksIG9wdHMpO1xuICAgIH1cbiAgICByZWNvbW1lbmRDb21tYW5kcyhyZWNvbW1lbmQgPSB0cnVlKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFuXScsIFtyZWNvbW1lbmRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcywgcmVjb21tZW5kLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXF1aXJlZChrZXlzLCBtYXgsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kZW1hbmQoa2V5cywgbWF4LCBtc2cpO1xuICAgIH1cbiAgICByZXF1aXJlKGtleXMsIG1heCwgbXNnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbWFuZChrZXlzLCBtYXgsIG1zZyk7XG4gICAgfVxuICAgIHJlcXVpcmVzQXJnKGtleXMpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fHN0cmluZ3xvYmplY3Q+IFtudW1iZXJdJywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlzID09PSAnc3RyaW5nJyAmJiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5uYXJnW2tleXNdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeV0odGhpcy5yZXF1aXJlc0FyZy5iaW5kKHRoaXMpLCAnbmFyZycsIGtleXMsIE5hTik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dDb21wbGV0aW9uU2NyaXB0KCQwLCBjbWQpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ10gW3N0cmluZ10nLCBbJDAsIGNtZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICAkMCA9ICQwIHx8IHRoaXMuJDA7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIikubG9nKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLmdlbmVyYXRlQ29tcGxldGlvblNjcmlwdCgkMCwgY21kIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSB8fCAnY29tcGxldGlvbicpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dIZWxwKGxldmVsKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmd8ZnVuY3Rpb25dJywgW2xldmVsXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmhhc0NhY2hlZEhlbHBNZXNzYWdlKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJzZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZSA9IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBcImZcIiksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKHBhcnNlKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5zaG93SGVscChsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidWlsZGVyUmVzcG9uc2UgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5ydW5EZWZhdWx0QnVpbGRlck9uKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShidWlsZGVyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRlclJlc3BvbnNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHAobGV2ZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5zaG93SGVscChsZXZlbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzY3JpcHROYW1lKHNjcmlwdE5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXN0b21TY3JpcHROYW1lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kMCA9IHNjcmlwdE5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93SGVscE9uRmFpbChlbmFibGVkLCBtZXNzYWdlKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFufHN0cmluZ10gW3N0cmluZ10nLCBbZW5hYmxlZCwgbWVzc2FnZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHBPbkZhaWwoZW5hYmxlZCwgbWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93VmVyc2lvbihsZXZlbCkge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGZ1bmN0aW9uXScsIFtsZXZlbF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd1ZlcnNpb24obGV2ZWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2tpcFZhbGlkYXRpb24oa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnc2tpcFZhbGlkYXRpb24nLCBrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmljdChlbmFibGVkKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFuXScsIFtlbmFibGVkXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0LCBlbmFibGVkICE9PSBmYWxzZSwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RyaWN0Q29tbWFuZHMoZW5hYmxlZCkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBlbmFibGVkICE9PSBmYWxzZSwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RyaWN0T3B0aW9ucyhlbmFibGVkKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tib29sZWFuXScsIFtlbmFibGVkXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgZW5hYmxlZCAhPT0gZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmluZyhrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdzdHJpbmcnLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGVybWluYWxXaWR0aCgpIHtcbiAgICAgICAgYXJnc2VydChbXSwgMCk7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLnN0ZENvbHVtbnM7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsZShvYmopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlU3RyaW5ncyhvYmopO1xuICAgIH1cbiAgICB1cGRhdGVTdHJpbmdzKG9iaikge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0PicsIFtvYmpdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4udXBkYXRlTG9jYWxlKG9iaik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1c2FnZShtc2csIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8bnVsbHx1bmRlZmluZWQ+IFtzdHJpbmd8Ym9vbGVhbl0gW2Z1bmN0aW9ufG9iamVjdF0gW2Z1bmN0aW9uXScsIFttc2csIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChtc2csIG51bGwsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIGlmICgobXNnIHx8ICcnKS5tYXRjaCgvXlxcJDAoIHwkKS8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZChtc2csIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoJy51c2FnZSgpIGRlc2NyaXB0aW9uIG11c3Qgc3RhcnQgd2l0aCAkMCBpZiBiZWluZyB1c2VkIGFzIGFsaWFzIGZvciAuY29tbWFuZCgpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikudXNhZ2UobXNnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVzYWdlQ29uZmlndXJhdGlvbihjb25maWcpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdD4nLCBbY29uZmlnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2VDb25maWcsIGNvbmZpZywgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmVyc2lvbihvcHQsIG1zZywgdmVyKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWZXJzaW9uT3B0ID0gJ3ZlcnNpb24nO1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbnxzdHJpbmddIFtzdHJpbmddIFtzdHJpbmddJywgW29wdCwgbXNnLCB2ZXJdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICB0aGlzW2tEZWxldGVGcm9tUGFyc2VySGludE9iamVjdF0oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnZlcnNpb24odW5kZWZpbmVkKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgbnVsbCwgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB2ZXIgPSB0aGlzW2tHdWVzc1ZlcnNpb25dKCk7XG4gICAgICAgICAgICBvcHQgPSBkZWZhdWx0VmVyc2lvbk9wdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAob3B0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVyID0gb3B0O1xuICAgICAgICAgICAgb3B0ID0gZGVmYXVsdFZlcnNpb25PcHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdmVyID0gbXNnO1xuICAgICAgICAgICAgbXNnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgdHlwZW9mIG9wdCA9PT0gJ3N0cmluZycgPyBvcHQgOiBkZWZhdWx0VmVyc2lvbk9wdCwgXCJmXCIpO1xuICAgICAgICBtc2cgPSBtc2cgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmRlZmVyWTE4bkxvb2t1cCgnU2hvdyB2ZXJzaW9uIG51bWJlcicpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikudmVyc2lvbih2ZXIgfHwgdW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5ib29sZWFuKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgXCJmXCIpKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSwgbXNnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHdyYXAoY29scykge1xuICAgICAgICBhcmdzZXJ0KCc8bnVtYmVyfG51bGx8dW5kZWZpbmVkPicsIFtjb2xzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS53cmFwKGNvbHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgWyhfWWFyZ3NJbnN0YW5jZV9jb21tYW5kID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfY3dkID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfY29udGV4dCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24gPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2RlZmF1bHRTaG93SGlkZGVuT3B0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZW1pdHRlZFdhcm5pbmdzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2dyb3VwcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcGFyZW50UmVxdWlyZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3BhcnNlckNvbmZpZyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4gPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wa2dzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3NoaW0gPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3VzYWdlQ29uZmlnID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24gPSBuZXcgV2Vha01hcCgpLCBrQ29weURvdWJsZURhc2gpXShhcmd2KSB7XG4gICAgICAgIGlmICghYXJndi5fIHx8ICFhcmd2WyctLSddKVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgIGFyZ3YuXy5wdXNoLmFwcGx5KGFyZ3YuXywgYXJndlsnLS0nXSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZWxldGUgYXJndlsnLS0nXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2VycikgeyB9XG4gICAgICAgIHJldHVybiBhcmd2O1xuICAgIH1cbiAgICBba0NyZWF0ZUxvZ2dlcl0oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzW2tIYXNQYXJzZUNhbGxiYWNrXSgpKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikgKyAnXFxuJywgXCJmXCIpO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpICsgYXJncy5qb2luKCcgJyksIFwiZlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXNba0hhc1BhcnNlQ2FsbGJhY2tdKCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpICsgJ1xcbicsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSArIGFyZ3Muam9pbignICcpLCBcImZcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBba0RlbGV0ZUZyb21QYXJzZXJIaW50T2JqZWN0XShvcHRpb25LZXkpIHtcbiAgICAgICAgb2JqZWN0S2V5cyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKSkuZm9yRWFjaCgoaGludEtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCgoa2V5KSA9PiBrZXkgPT09ICdjb25maWdPYmplY3RzJykoaGludEtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgaGludCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW2hpbnRLZXldO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGludCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGludC5pbmNsdWRlcyhvcHRpb25LZXkpKVxuICAgICAgICAgICAgICAgICAgICBoaW50LnNwbGljZShoaW50LmluZGV4T2Yob3B0aW9uS2V5KSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgaGludCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgaGludFtvcHRpb25LZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5nZXREZXNjcmlwdGlvbnMoKVtvcHRpb25LZXldO1xuICAgIH1cbiAgICBba0VtaXRXYXJuaW5nXSh3YXJuaW5nLCB0eXBlLCBkZWR1cGxpY2F0aW9uSWQpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncywgXCJmXCIpW2RlZHVwbGljYXRpb25JZF0pIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuZW1pdFdhcm5pbmcod2FybmluZywgdHlwZSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncywgXCJmXCIpW2RlZHVwbGljYXRpb25JZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtrRnJlZXplXSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLCBcImZcIikucHVzaCh7XG4gICAgICAgICAgICBvcHRpb25zOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKSxcbiAgICAgICAgICAgIGNvbmZpZ09iamVjdHM6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMuc2xpY2UoMCksXG4gICAgICAgICAgICBleGl0UHJvY2VzczogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpLFxuICAgICAgICAgICAgZ3JvdXBzOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpLFxuICAgICAgICAgICAgc3RyaWN0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgXCJmXCIpLFxuICAgICAgICAgICAgc3RyaWN0Q29tbWFuZHM6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMsIFwiZlwiKSxcbiAgICAgICAgICAgIHN0cmljdE9wdGlvbnM6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgXCJmXCIpLFxuICAgICAgICAgICAgY29tcGxldGlvbkNvbW1hbmQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSxcbiAgICAgICAgICAgIG91dHB1dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSxcbiAgICAgICAgICAgIGV4aXRFcnJvcjogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIFwiZlwiKSxcbiAgICAgICAgICAgIGhhc091dHB1dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIFwiZlwiKSxcbiAgICAgICAgICAgIHBhcnNlZDogdGhpcy5wYXJzZWQsXG4gICAgICAgICAgICBwYXJzZUZuOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSxcbiAgICAgICAgICAgIHBhcnNlQ29udGV4dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIFwiZlwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mcmVlemUoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5mcmVlemUoKTtcbiAgICB9XG4gICAgW2tHZXREb2xsYXJaZXJvXSgpIHtcbiAgICAgICAgbGV0ICQwID0gJyc7XG4gICAgICAgIGxldCBkZWZhdWx0JDA7XG4gICAgICAgIGlmICgvXFxiKG5vZGV8aW9qc3xlbGVjdHJvbikoXFwuZXhlKT8kLy50ZXN0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuYXJndigpWzBdKSkge1xuICAgICAgICAgICAgZGVmYXVsdCQwID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5hcmd2KCkuc2xpY2UoMSwgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWZhdWx0JDAgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmFyZ3YoKS5zbGljZSgwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICAkMCA9IGRlZmF1bHQkMFxuICAgICAgICAgICAgLm1hcCh4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0aGlzW2tSZWJhc2VdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY3dkLCBcImZcIiksIHgpO1xuICAgICAgICAgICAgcmV0dXJuIHgubWF0Y2goL14oXFwvfChbYS16QS1aXTopP1xcXFwpLykgJiYgYi5sZW5ndGggPCB4Lmxlbmd0aCA/IGIgOiB4O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJyAnKVxuICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLmdldEVudignXycpICYmXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRQcm9jZXNzQXJndkJpbigpID09PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ18nKSkge1xuICAgICAgICAgICAgJDAgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKVxuICAgICAgICAgICAgICAgIC5nZXRFbnYoJ18nKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnBhdGguZGlybmFtZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmV4ZWNQYXRoKCkpfS9gLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQwO1xuICAgIH1cbiAgICBba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRVc2FnZUNvbmZpZ3VyYXRpb25dKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZywgXCJmXCIpO1xuICAgIH1cbiAgICBba0d1ZXNzTG9jYWxlXSgpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSwgXCJmXCIpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBsb2NhbGUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xDX0FMTCcpIHx8XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xDX01FU1NBR0VTJykgfHxcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLmdldEVudignTEFORycpIHx8XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xBTkdVQUdFJykgfHxcbiAgICAgICAgICAgICdlbl9VUyc7XG4gICAgICAgIHRoaXMubG9jYWxlKGxvY2FsZS5yZXBsYWNlKC9bLjpdLiovLCAnJykpO1xuICAgIH1cbiAgICBba0d1ZXNzVmVyc2lvbl0oKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXNba1BrZ1VwXSgpO1xuICAgICAgICByZXR1cm4gb2JqLnZlcnNpb24gfHwgJ3Vua25vd24nO1xuICAgIH1cbiAgICBba1BhcnNlUG9zaXRpb25hbE51bWJlcnNdKGFyZ3YpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3ZbJy0tJ10gPyBhcmd2WyctLSddIDogYXJndi5fO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgYXJnOyAoYXJnID0gYXJnc1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuUGFyc2VyLmxvb2tzTGlrZU51bWJlcihhcmcpICYmXG4gICAgICAgICAgICAgICAgTnVtYmVyLmlzU2FmZUludGVnZXIoTWF0aC5mbG9vcihwYXJzZUZsb2F0KGAke2FyZ31gKSkpKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IE51bWJlcihhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmd2O1xuICAgIH1cbiAgICBba1BrZ1VwXShyb290UGF0aCkge1xuICAgICAgICBjb25zdCBucGF0aCA9IHJvb3RQYXRoIHx8ICcqJztcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGtncywgXCJmXCIpW25wYXRoXSlcbiAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF07XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBzdGFydERpciA9IHJvb3RQYXRoIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLm1haW5GaWxlbmFtZTtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wYXRoLmV4dG5hbWUoc3RhcnREaXIpKSB7XG4gICAgICAgICAgICAgICAgc3RhcnREaXIgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wYXRoLmRpcm5hbWUoc3RhcnREaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGtnSnNvblBhdGggPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5maW5kVXAoc3RhcnREaXIsIChkaXIsIG5hbWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVzLmluY2x1ZGVzKCdwYWNrYWdlLmpzb24nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3BhY2thZ2UuanNvbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwocGtnSnNvblBhdGgsIHVuZGVmaW5lZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgb2JqID0gSlNPTi5wYXJzZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5yZWFkRmlsZVN5bmMocGtnSnNvblBhdGgsICd1dGY4JykpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfbm9vcCkgeyB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGtncywgXCJmXCIpW25wYXRoXSA9IG9iaiB8fCB7fTtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGtncywgXCJmXCIpW25wYXRoXTtcbiAgICB9XG4gICAgW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheV0odHlwZSwga2V5cykge1xuICAgICAgICBrZXlzID0gW10uY29uY2F0KGtleXMpO1xuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGtleSA9IHRoaXNba1Nhbml0aXplS2V5XShrZXkpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIilbdHlwZV0ucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKGJ1aWxkZXIsIHR5cGUsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50RGljdGlvbmFyeV0oYnVpbGRlciwgdHlwZSwga2V5LCB2YWx1ZSwgKHR5cGUsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW3R5cGVdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFtrUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludERpY3Rpb25hcnldKGJ1aWxkZXIsIHR5cGUsIGtleSwgdmFsdWUsICh0eXBlLCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVt0eXBlXVtrZXldID0gKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW3R5cGVdW2tleV0gfHwgW10pLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBba1BvcHVsYXRlUGFyc2VySGludERpY3Rpb25hcnldKGJ1aWxkZXIsIHR5cGUsIGtleSwgdmFsdWUsIHNpbmdsZUtleUhhbmRsZXIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgICAga2V5LmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgYnVpbGRlcihrLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoKGtleSkgPT4gdHlwZW9mIGtleSA9PT0gJ29iamVjdCcpKGtleSkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBvZiBvYmplY3RLZXlzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyKGssIGtleVtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaW5nbGVLZXlIYW5kbGVyKHR5cGUsIHRoaXNba1Nhbml0aXplS2V5XShrZXkpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgW2tTYW5pdGl6ZUtleV0oa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdfX3Byb3RvX18nKVxuICAgICAgICAgICAgcmV0dXJuICdfX19wcm90b19fXyc7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIFtrU2V0S2V5XShrZXksIHNldCkge1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXNba1NldEtleV0uYmluZCh0aGlzKSwgJ2tleScsIGtleSwgc2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFtrVW5mcmVlemVdKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sLCBfbTtcbiAgICAgICAgY29uc3QgZnJvemVuID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLCBcImZcIikucG9wKCk7XG4gICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKGZyb3plbiwgdW5kZWZpbmVkLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgIGxldCBjb25maWdPYmplY3RzO1xuICAgICAgICAoX2EgPSB0aGlzLCBfYiA9IHRoaXMsIF9jID0gdGhpcywgX2QgPSB0aGlzLCBfZSA9IHRoaXMsIF9mID0gdGhpcywgX2cgPSB0aGlzLCBfaCA9IHRoaXMsIF9qID0gdGhpcywgX2sgPSB0aGlzLCBfbCA9IHRoaXMsIF9tID0gdGhpcywge1xuICAgICAgICAgICAgb3B0aW9uczogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2EsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBjb25maWdPYmplY3RzLFxuICAgICAgICAgICAgZXhpdFByb2Nlc3M6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9iLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIGdyb3VwczogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2MsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIG91dHB1dDogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2QsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIGV4aXRFcnJvcjogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2UsIF9ZYXJnc0luc3RhbmNlX2V4aXRFcnJvciwgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIGhhc091dHB1dDogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2YsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIHBhcnNlZDogdGhpcy5wYXJzZWQsXG4gICAgICAgICAgICBzdHJpY3Q6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9nLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBzdHJpY3RDb21tYW5kczogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2gsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgc3RyaWN0T3B0aW9uczogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2osIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBjb21wbGV0aW9uQ29tbWFuZDogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2ssIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgcGFyc2VGbjogKHsgc2V0IHZhbHVlKF9vKSB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQoX2wsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBwYXJzZUNvbnRleHQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9tLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgIH0gPSBmcm96ZW4pO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzID0gY29uZmlnT2JqZWN0cztcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnVuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnVuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLnVuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLnVuZnJlZXplKCk7XG4gICAgfVxuICAgIFtrVmFsaWRhdGVBc3luY10odmFsaWRhdGlvbiwgYXJndikge1xuICAgICAgICByZXR1cm4gbWF5YmVBc3luY1Jlc3VsdChhcmd2LCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdGlvbihyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEludGVybmFsTWV0aG9kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldENvbW1hbmRJbnN0YW5jZTogdGhpc1trR2V0Q29tbWFuZEluc3RhbmNlXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0Q29udGV4dDogdGhpc1trR2V0Q29udGV4dF0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldEhhc091dHB1dDogdGhpc1trR2V0SGFzT3V0cHV0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0TG9nZ2VySW5zdGFuY2U6IHRoaXNba0dldExvZ2dlckluc3RhbmNlXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0UGFyc2VDb250ZXh0OiB0aGlzW2tHZXRQYXJzZUNvbnRleHRdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRQYXJzZXJDb25maWd1cmF0aW9uOiB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0VXNhZ2VDb25maWd1cmF0aW9uOiB0aGlzW2tHZXRVc2FnZUNvbmZpZ3VyYXRpb25dLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRVc2FnZUluc3RhbmNlOiB0aGlzW2tHZXRVc2FnZUluc3RhbmNlXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0VmFsaWRhdGlvbkluc3RhbmNlOiB0aGlzW2tHZXRWYWxpZGF0aW9uSW5zdGFuY2VdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBoYXNQYXJzZUNhbGxiYWNrOiB0aGlzW2tIYXNQYXJzZUNhbGxiYWNrXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaXNHbG9iYWxDb250ZXh0OiB0aGlzW2tJc0dsb2JhbENvbnRleHRdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBwb3N0UHJvY2VzczogdGhpc1trUG9zdFByb2Nlc3NdLmJpbmQodGhpcyksXG4gICAgICAgICAgICByZXNldDogdGhpc1trUmVzZXRdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBydW5WYWxpZGF0aW9uOiB0aGlzW2tSdW5WYWxpZGF0aW9uXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHM6IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgc2V0SGFzT3V0cHV0OiB0aGlzW2tTZXRIYXNPdXRwdXRdLmJpbmQodGhpcyksXG4gICAgICAgIH07XG4gICAgfVxuICAgIFtrR2V0Q29tbWFuZEluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpO1xuICAgIH1cbiAgICBba0dldENvbnRleHRdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0SGFzT3V0cHV0XSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0TG9nZ2VySW5zdGFuY2VdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRQYXJzZUNvbnRleHRdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIFwiZlwiKSB8fCB7fTtcbiAgICB9XG4gICAgW2tHZXRVc2FnZUluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRWYWxpZGF0aW9uSW5zdGFuY2VdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIik7XG4gICAgfVxuICAgIFtrSGFzUGFyc2VDYWxsYmFja10oKSB7XG4gICAgICAgIHJldHVybiAhIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpO1xuICAgIH1cbiAgICBba0lzR2xvYmFsQ29udGV4dF0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2lzR2xvYmFsQ29udGV4dCwgXCJmXCIpO1xuICAgIH1cbiAgICBba1Bvc3RQcm9jZXNzXShhcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsIGNhbGxlZEZyb21Db21tYW5kLCBydW5HbG9iYWxNaWRkbGV3YXJlKSB7XG4gICAgICAgIGlmIChjYWxsZWRGcm9tQ29tbWFuZClcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICBpZiAoaXNQcm9taXNlKGFyZ3YpKVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgIGlmICghcG9wdWxhdGVEb3VibGVEYXNoKSB7XG4gICAgICAgICAgICBhcmd2ID0gdGhpc1trQ29weURvdWJsZURhc2hdKGFyZ3YpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlUG9zaXRpb25hbE51bWJlcnMgPSB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpWydwYXJzZS1wb3NpdGlvbmFsLW51bWJlcnMnXSB8fFxuICAgICAgICAgICAgdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0oKVsncGFyc2UtcG9zaXRpb25hbC1udW1iZXJzJ10gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHBhcnNlUG9zaXRpb25hbE51bWJlcnMpIHtcbiAgICAgICAgICAgIGFyZ3YgPSB0aGlzW2tQYXJzZVBvc2l0aW9uYWxOdW1iZXJzXShhcmd2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVuR2xvYmFsTWlkZGxld2FyZSkge1xuICAgICAgICAgICAgYXJndiA9IGFwcGx5TWlkZGxld2FyZShhcmd2LCB0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5nZXRNaWRkbGV3YXJlKCksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJndjtcbiAgICB9XG4gICAgW2tSZXNldF0oYWxpYXNlcyA9IHt9KSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikgfHwge30sIFwiZlwiKTtcbiAgICAgICAgY29uc3QgdG1wT3B0aW9ucyA9IHt9O1xuICAgICAgICB0bXBPcHRpb25zLmxvY2FsID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwgfHwgW107XG4gICAgICAgIHRtcE9wdGlvbnMuY29uZmlnT2JqZWN0cyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgfHwgW107XG4gICAgICAgIGNvbnN0IGxvY2FsTG9va3VwID0ge307XG4gICAgICAgIHRtcE9wdGlvbnMubG9jYWwuZm9yRWFjaChsID0+IHtcbiAgICAgICAgICAgIGxvY2FsTG9va3VwW2xdID0gdHJ1ZTtcbiAgICAgICAgICAgIChhbGlhc2VzW2xdIHx8IFtdKS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsTG9va3VwW2FdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgXCJmXCIpLCBPYmplY3Qua2V5cyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpKS5yZWR1Y2UoKGFjYywgZ3JvdXBOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIFwiZlwiKVtncm91cE5hbWVdLmZpbHRlcihrZXkgPT4gIShrZXkgaW4gbG9jYWxMb29rdXApKTtcbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhY2NbZ3JvdXBOYW1lXSA9IGtleXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSkpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3Vwcywge30sIFwiZlwiKTtcbiAgICAgICAgY29uc3QgYXJyYXlPcHRpb25zID0gW1xuICAgICAgICAgICAgJ2FycmF5JyxcbiAgICAgICAgICAgICdib29sZWFuJyxcbiAgICAgICAgICAgICdzdHJpbmcnLFxuICAgICAgICAgICAgJ3NraXBWYWxpZGF0aW9uJyxcbiAgICAgICAgICAgICdjb3VudCcsXG4gICAgICAgICAgICAnbm9ybWFsaXplJyxcbiAgICAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgICAgJ2hpZGRlbk9wdGlvbnMnLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBvYmplY3RPcHRpb25zID0gW1xuICAgICAgICAgICAgJ25hcmcnLFxuICAgICAgICAgICAgJ2tleScsXG4gICAgICAgICAgICAnYWxpYXMnLFxuICAgICAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAgICAgJ2RlZmF1bHREZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAnY29uZmlnJyxcbiAgICAgICAgICAgICdjaG9pY2VzJyxcbiAgICAgICAgICAgICdkZW1hbmRlZE9wdGlvbnMnLFxuICAgICAgICAgICAgJ2RlbWFuZGVkQ29tbWFuZHMnLFxuICAgICAgICAgICAgJ2RlcHJlY2F0ZWRPcHRpb25zJyxcbiAgICAgICAgXTtcbiAgICAgICAgYXJyYXlPcHRpb25zLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICB0bXBPcHRpb25zW2tdID0gKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW2tdIHx8IFtdKS5maWx0ZXIoKGspID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYmplY3RPcHRpb25zLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgIHRtcE9wdGlvbnNba10gPSBvYmpGaWx0ZXIoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIilba10sIGsgPT4gIWxvY2FsTG9va3VwW2tdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRtcE9wdGlvbnMuZW52UHJlZml4ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZW52UHJlZml4O1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIHRtcE9wdGlvbnMsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpXG4gICAgICAgICAgICA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5yZXNldChsb2NhbExvb2t1cClcbiAgICAgICAgICAgIDogVXNhZ2UodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIilcbiAgICAgICAgICAgID8gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikucmVzZXQobG9jYWxMb29rdXApXG4gICAgICAgICAgICA6IFZhbGlkYXRpb24odGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKVxuICAgICAgICAgICAgPyBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5yZXNldCgpXG4gICAgICAgICAgICA6IENvbW1hbmQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKSwgXCJmXCIpO1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpKVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBDb21wbGV0aW9uKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5yZXNldCgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBudWxsLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCAnJywgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRFcnJvciwgbnVsbCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgdGhpcy5wYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFtrUmViYXNlXShiYXNlLCBkaXIpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnBhdGgucmVsYXRpdmUoYmFzZSwgZGlyKTtcbiAgICB9XG4gICAgW2tSdW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kc10oYXJncywgc2hvcnRDaXJjdWl0LCBjYWxsZWRGcm9tQ29tbWFuZCwgY29tbWFuZEluZGV4ID0gMCwgaGVscE9ubHkgPSBmYWxzZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgIGxldCBza2lwVmFsaWRhdGlvbiA9ICEhY2FsbGVkRnJvbUNvbW1hbmQgfHwgaGVscE9ubHk7XG4gICAgICAgIGFyZ3MgPSBhcmdzIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuX18gPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS55MThuLl9fO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWd1cmF0aW9uID0gdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0oKTtcbiAgICAgICAgY29uc3QgcG9wdWxhdGVEb3VibGVEYXNoID0gISFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWd1cmF0aW9uWydwb3B1bGF0ZS0tJ107XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ3VyYXRpb24sIHtcbiAgICAgICAgICAgICdwb3B1bGF0ZS0tJzogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLlBhcnNlci5kZXRhaWxlZChhcmdzLCBPYmplY3QuYXNzaWduKHt9LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKSwge1xuICAgICAgICAgICAgY29uZmlndXJhdGlvbjogeyAncGFyc2UtcG9zaXRpb25hbC1udW1iZXJzJzogZmFsc2UsIC4uLmNvbmZpZyB9LFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGFyZ3YgPSBPYmplY3QuYXNzaWduKHBhcnNlZC5hcmd2LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlQ29udGV4dCwgXCJmXCIpKTtcbiAgICAgICAgbGV0IGFyZ3ZQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBhbGlhc2VzID0gcGFyc2VkLmFsaWFzZXM7XG4gICAgICAgIGxldCBoZWxwT3B0U2V0ID0gZmFsc2U7XG4gICAgICAgIGxldCB2ZXJzaW9uT3B0U2V0ID0gZmFsc2U7XG4gICAgICAgIE9iamVjdC5rZXlzKGFyZ3YpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpICYmIGFyZ3Zba2V5XSkge1xuICAgICAgICAgICAgICAgIGhlbHBPcHRTZXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSAmJiBhcmd2W2tleV0pIHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uT3B0U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFyZ3YuJDAgPSB0aGlzLiQwO1xuICAgICAgICB0aGlzLnBhcnNlZCA9IHBhcnNlZDtcbiAgICAgICAgaWYgKGNvbW1hbmRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmNsZWFyQ2FjaGVkSGVscE1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpc1trR3Vlc3NMb2NhbGVdKCk7XG4gICAgICAgICAgICBpZiAoc2hvcnRDaXJjdWl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba1Bvc3RQcm9jZXNzXShhcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsICEhY2FsbGVkRnJvbUNvbW1hbmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlbHBDbWRzID0gW19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpXVxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGFsaWFzZXNbX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIildIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGsgPT4gay5sZW5ndGggPiAxKTtcbiAgICAgICAgICAgICAgICBpZiAoaGVscENtZHMuaW5jbHVkZXMoJycgKyBhcmd2Ll9bYXJndi5fLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICBhcmd2Ll8ucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGhlbHBPcHRTZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaXNHbG9iYWxDb250ZXh0LCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlcktleXMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5nZXRDb21tYW5kcygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdENvbXBsZXRpb25zID0gKChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29tcGxldGlvbktleSlcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jb21wbGV0aW9uS2V5LFxuICAgICAgICAgICAgICAgICAgICAuLi4oKF9kID0gdGhpcy5nZXRBbGlhc2VzKClbKF9jID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb21wbGV0aW9uS2V5XSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogW10pLFxuICAgICAgICAgICAgICAgIF0uc29tZSgoa2V5KSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndiwga2V5KSlcbiAgICAgICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICAgICAgY29uc3Qgc2tpcFJlY29tbWVuZGF0aW9uID0gaGVscE9wdFNldCB8fCByZXF1ZXN0Q29tcGxldGlvbnMgfHwgaGVscE9ubHk7XG4gICAgICAgICAgICBpZiAoYXJndi5fLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0VW5rbm93bkNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb21tYW5kSW5kZXggfHwgMCwgY21kOyBhcmd2Ll9baV0gIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbWQgPSBTdHJpbmcoYXJndi5fW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyS2V5cy5pbmNsdWRlcyhjbWQpICYmIGNtZCAhPT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5uZXJBcmd2ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucnVuQ29tbWFuZChjbWQsIHRoaXMsIHBhcnNlZCwgaSArIDEsIGhlbHBPbmx5LCBoZWxwT3B0U2V0IHx8IHZlcnNpb25PcHRTZXQgfHwgaGVscE9ubHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tQb3N0UHJvY2Vzc10oaW5uZXJBcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsICEhY2FsbGVkRnJvbUNvbW1hbmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFmaXJzdFVua25vd25Db21tYW5kICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21kICE9PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFVua25vd25Db21tYW5kID0gY21kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuaGFzRGVmYXVsdENvbW1hbmQoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcywgXCJmXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFVua25vd25Db21tYW5kICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhc2tpcFJlY29tbWVuZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5yZWNvbW1lbmRDb21tYW5kcyhmaXJzdFVua25vd25Db21tYW5kLCBoYW5kbGVyS2V5cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBhcmd2Ll8uaW5jbHVkZXMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgXCJmXCIpKSAmJlxuICAgICAgICAgICAgICAgICAgICAhcmVxdWVzdENvbXBsZXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBcImZcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCbG9ja2luZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29tcGxldGlvblNjcmlwdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmhhc0RlZmF1bHRDb21tYW5kKCkgJiYgIXNraXBSZWNvbW1lbmRhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyQXJndiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLnJ1bkNvbW1hbmQobnVsbCwgdGhpcywgcGFyc2VkLCAwLCBoZWxwT25seSwgaGVscE9wdFNldCB8fCB2ZXJzaW9uT3B0U2V0IHx8IGhlbHBPbmx5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trUG9zdFByb2Nlc3NdKGlubmVyQXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCAhIWNhbGxlZEZyb21Db21tYW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVxdWVzdENvbXBsZXRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSlcbiAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgYXJncyA9IFtdLmNvbmNhdChhcmdzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0aW9uQXJncyA9IGFyZ3Muc2xpY2UoYXJncy5pbmRleE9mKGAtLSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikuY29tcGxldGlvbktleX1gKSArIDEpO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLmdldENvbXBsZXRpb24oY29tcGxldGlvbkFyZ3MsIChlcnIsIGNvbXBsZXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgKGNvbXBsZXRpb25zIHx8IFtdKS5mb3JFYWNoKGNvbXBsZXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIsIFwiZlwiKS5sb2coY29tcGxldGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQoMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba1Bvc3RQcm9jZXNzXShhcmd2LCAhcG9wdWxhdGVEb3VibGVEYXNoLCAhIWNhbGxlZEZyb21Db21tYW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGVscE9wdFNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGVscChtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIikubG9nKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmVyc2lvbk9wdFNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnNob3dWZXJzaW9uKCdsb2cnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2tpcFZhbGlkYXRpb24gJiYgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuc2tpcFZhbGlkYXRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uID0gT2JqZWN0LmtleXMoYXJndikuc29tZShrZXkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuc2tpcFZhbGlkYXRpb24uaW5kZXhPZihrZXkpID49IDAgJiYgYXJndltrZXldID09PSB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2tpcFZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLmVycm9yKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKHBhcnNlZC5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcXVlc3RDb21wbGV0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpc1trUnVuVmFsaWRhdGlvbl0oYWxpYXNlcywge30sIHBhcnNlZC5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FsbGVkRnJvbUNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3ZQcm9taXNlID0gYXBwbHlNaWRkbGV3YXJlKGFyZ3YsIHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLmdldE1pZGRsZXdhcmUoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJndlByb21pc2UgPSB0aGlzW2tWYWxpZGF0ZUFzeW5jXSh2YWxpZGF0aW9uLCBhcmd2UHJvbWlzZSAhPT0gbnVsbCAmJiBhcmd2UHJvbWlzZSAhPT0gdm9pZCAwID8gYXJndlByb21pc2UgOiBhcmd2KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShhcmd2UHJvbWlzZSkgJiYgIWNhbGxlZEZyb21Db21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2UHJvbWlzZSA9IGFyZ3ZQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcHBseU1pZGRsZXdhcmUoYXJndiwgdGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuZ2V0TWlkZGxld2FyZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgWUVycm9yKVxuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsKGVyci5tZXNzYWdlLCBlcnIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1trUG9zdFByb2Nlc3NdKGFyZ3ZQcm9taXNlICE9PSBudWxsICYmIGFyZ3ZQcm9taXNlICE9PSB2b2lkIDAgPyBhcmd2UHJvbWlzZSA6IGFyZ3YsIHBvcHVsYXRlRG91YmxlRGFzaCwgISFjYWxsZWRGcm9tQ29tbWFuZCwgdHJ1ZSk7XG4gICAgfVxuICAgIFtrUnVuVmFsaWRhdGlvbl0oYWxpYXNlcywgcG9zaXRpb25hbE1hcCwgcGFyc2VFcnJvcnMsIGlzRGVmYXVsdENvbW1hbmQpIHtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRPcHRpb25zID0geyAuLi50aGlzLmdldERlbWFuZGVkT3B0aW9ucygpIH07XG4gICAgICAgIHJldHVybiAoYXJndikgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcnNlRXJyb3JzKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IocGFyc2VFcnJvcnMubWVzc2FnZSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5ub25PcHRpb25Db3VudChhcmd2KTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnJlcXVpcmVkQXJndW1lbnRzKGFyZ3YsIGRlbWFuZGVkT3B0aW9ucyk7XG4gICAgICAgICAgICBsZXQgZmFpbGVkU3RyaWN0Q29tbWFuZHMgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICBmYWlsZWRTdHJpY3RDb21tYW5kcyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnVua25vd25Db21tYW5kcyhhcmd2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgXCJmXCIpICYmICFmYWlsZWRTdHJpY3RDb21tYW5kcykge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnVua25vd25Bcmd1bWVudHMoYXJndiwgYWxpYXNlcywgcG9zaXRpb25hbE1hcCwgISFpc0RlZmF1bHRDb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucywgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikudW5rbm93bkFyZ3VtZW50cyhhcmd2LCBhbGlhc2VzLCB7fSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmxpbWl0ZWRDaG9pY2VzKGFyZ3YpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuaW1wbGljYXRpb25zKGFyZ3YpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikuY29uZmxpY3RpbmcoYXJndik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFtrU2V0SGFzT3V0cHV0XSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tUcmFja01hbnVhbGx5U2V0S2V5c10oa2V5cykge1xuICAgICAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlba2V5c10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlba10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlzWWFyZ3NJbnN0YW5jZSh5KSB7XG4gICAgcmV0dXJuICEheSAmJiB0eXBlb2YgeS5nZXRJbnRlcm5hbE1ldGhvZHMgPT09ICdmdW5jdGlvbic7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vLyBCb290c3RyYXBzIHlhcmdzIGZvciBFU006XG5pbXBvcnQgZXNtUGxhdGZvcm1TaGltIGZyb20gJy4vbGliL3BsYXRmb3JtLXNoaW1zL2VzbS5tanMnO1xuaW1wb3J0IHtZYXJnc0ZhY3Rvcnl9IGZyb20gJy4vYnVpbGQvbGliL3lhcmdzLWZhY3RvcnkuanMnO1xuXG5jb25zdCBZYXJncyA9IFlhcmdzRmFjdG9yeShlc21QbGF0Zm9ybVNoaW0pO1xuZXhwb3J0IGRlZmF1bHQgWWFyZ3M7XG5cbmV4cG9ydCB7WWFyZ3MgYXMgJ21vZHVsZS5leHBvcnRzJ307XG4iLCAiaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnXG5pbXBvcnQgeyBoaWRlQmluIH0gZnJvbSAneWFyZ3MvaGVscGVycydcbmltcG9ydCAqIGFzIGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgQ3J5cHRvSGVscGVyRmFjdG9yeSB9IGZyb20gJy4uL3NlcnZpY2VzL0NyeXB0b0hlbHBlckZhY3RvcnkudHMnO1xuaW1wb3J0IHsgRmlsZURhdGFIZWxwZXIsIEpzb25GaWxlRW5jb2RpbmcgfSBmcm9tIFwiLi4vc2VydmljZXMvRmlsZURhdGFIZWxwZXIudHNcIjtcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi9zZXJ2aWNlcy9Db25zdGFudHMudHMnO1xuaW1wb3J0ICogYXMgSW5QbGFjZUNvbnN0YW50cyBmcm9tICcuLi9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9GZWF0dXJlSW5wbGFjZUNvbnN0YW50cy50cyc7XG5pbXBvcnQgeyBGZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcyB9IGZyb20gJy4uL2ZlYXR1cmVzL2ZlYXR1cmUtaW5wbGFjZS1lbmNyeXB0L2ZlYXR1cmVJbnBsYWNlVGV4dEFuYWx5c2lzLnRzJztcblxuaW50ZXJmYWNlIExpc3Rpbmcge1xuICAgIGZlYXR1cmVUeXBlOiAnSW5QbGFjZScgfCAnV2hvbGVOb3RlJztcbiAgICBmdWxsUGF0aDogc3RyaW5nO1xuICAgIHJlbGF0aXZlUGF0aDogc3RyaW5nO1xuICAgIGV4dGVuc2lvbjogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn1cblxuaW50ZXJmYWNlIFRlc3RSZXN1bHR7XG4gICAgbGlzdGluZzogTGlzdGluZztcbiAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERlY3J5cHRSZXN1bHR7XG4gICAgbGlzdGluZzogTGlzdGluZztcbiAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBvdXRGaWxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmludGVyZmFjZSBQYXNzd29yZE1hdGNoIHtcbiAgICBwbGFpbnRleHQ6IHN0cmluZztcbiAgICBwYXNzd29yZE51bWJlcjogbnVtYmVyO1xufVxuXG5hc3luYyBmdW5jdGlvbiB0cnlQYXNzd29yZHMoXG4gICAgcGFzc3dvcmRzOiBzdHJpbmdbXSxcbiAgICBkZWNyeXB0OiAocGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmcgfCBudWxsPlxuKTogUHJvbWlzZTxQYXNzd29yZE1hdGNoIHwgbnVsbD4ge1xuICAgIGZvciAoY29uc3QgW2luZGV4LCBwYXNzd29yZF0gb2YgcGFzc3dvcmRzLmVudHJpZXMoKSkge1xuICAgICAgICBjb25zdCBwbGFpbnRleHQgPSBhd2FpdCBkZWNyeXB0KHBhc3N3b3JkKTtcbiAgICAgICAgaWYgKHBsYWludGV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcGxhaW50ZXh0LCBwYXNzd29yZE51bWJlcjogaW5kZXggKyAxIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmludGVyZmFjZSBJbmxpbmVCbG9jayB7XG4gICAgc3RhcnQ6IG51bWJlcjtcbiAgICBlbmQ6IG51bWJlcjtcbiAgICBsaW5lOiBudW1iZXI7XG4gICAgcG9zaXRpb246IG51bWJlcjtcbiAgICBlbmNyeXB0ZWRUZXh0OiBzdHJpbmc7XG59XG5cbnR5cGUgSW5saW5lRGVjcnlwdGlvbiA9IElubGluZUJsb2NrICYgKFxuICAgIHwgeyBzdWNjZXNzOiB0cnVlOyBtYXRjaDogUGFzc3dvcmRNYXRjaCB9XG4gICAgfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcjogJ2Nhbm5vdCBkZWNyeXB0JyB8ICd1bmtub3duIGZvcm1hdCcgfCAndW5hYmxlIHRvIGRlY3J5cHQnIH1cbik7XG5cbmZ1bmN0aW9uKiBzY2FuSW5saW5lQmxvY2tzKGNvbnRlbnQ6IHN0cmluZyk6IEl0ZXJhYmxlSXRlcmF0b3I8SW5saW5lQmxvY2s+IHtcbiAgICBsZXQgbGluZU9mZnNldCA9IDA7XG4gICAgZm9yIChjb25zdCBbbGluZUluZGV4LCBsaW5lXSBvZiBjb250ZW50LnNwbGl0KCdcXG4nKS5lbnRyaWVzKCkpIHtcbiAgICAgICAgLy8gUHJlZmVyIHRoZSBjb21wbGV0ZSBoaWRkZW4gd3JhcHBlciwgYW5kIHNjYW4gb25seSB0aGUgb3JpZ2luYWwgc291cmNlLlxuICAgICAgICBjb25zdCBtYXRjaGVyID0gLyUlXHVEODNEXHVERDEwKC4qPylcdUQ4M0RcdUREMTAlJXxcdUQ4M0RcdUREMTAoLio/KVx1RDgzRFx1REQxMC9nO1xuICAgICAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIGxpbmUubWF0Y2hBbGwobWF0Y2hlcikpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbGluZU9mZnNldCArIG1hdGNoLmluZGV4O1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDogc3RhcnQgKyBtYXRjaFswXS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbGluZTogbGluZUluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAvLyBLZWVwIGRpYWdub3N0aWNzIGF0IHRoZSBsb2NrIGljb24sIGluY2x1ZGluZyBmb3IgaGlkZGVuIGJsb2Nrcy5cbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbWF0Y2guaW5kZXggKyAobWF0Y2hbMV0gIT09IHVuZGVmaW5lZCA/IDIgOiAwKSArIDEsXG4gICAgICAgICAgICAgICAgZW5jcnlwdGVkVGV4dDogYFx1RDgzRFx1REQxMCR7bWF0Y2hbMV0gPz8gbWF0Y2hbMl19XHVEODNEXHVERDEwYCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbGluZU9mZnNldCArPSBsaW5lLmxlbmd0aCArIDE7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiogZGVjcnlwdElubGluZUJsb2Nrcyhjb250ZW50OiBzdHJpbmcsIHBhc3N3b3Jkczogc3RyaW5nW10pOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8SW5saW5lRGVjcnlwdGlvbj4ge1xuICAgIGZvciAoY29uc3QgYmxvY2sgb2Ygc2NhbklubGluZUJsb2Nrcyhjb250ZW50KSkge1xuICAgICAgICBjb25zdCBhbmFseXNpcyA9IG5ldyBGZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcyhibG9jay5lbmNyeXB0ZWRUZXh0KTtcbiAgICAgICAgaWYgKCFhbmFseXNpcy5jYW5EZWNyeXB0IHx8IGFuYWx5c2lzLmRlY3J5cHRhYmxlID09IG51bGwpIHtcbiAgICAgICAgICAgIHlpZWxkIHsgLi4uYmxvY2ssIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ2Nhbm5vdCBkZWNyeXB0JyB9O1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjcnlwdGFibGUgPSBhbmFseXNpcy5kZWNyeXB0YWJsZTtcbiAgICAgICAgY29uc3QgaGVscGVyID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21EZWNyeXB0YWJsZU9yTnVsbChkZWNyeXB0YWJsZSk7XG4gICAgICAgIGlmIChoZWxwZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgeWllbGQgeyAuLi5ibG9jaywgc3VjY2VzczogZmFsc2UsIGVycm9yOiAndW5rbm93biBmb3JtYXQnIH07XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9IGF3YWl0IHRyeVBhc3N3b3JkcyhwYXNzd29yZHMsIHBhc3N3b3JkID0+IGhlbHBlci5kZWNyeXB0RnJvbUJhc2U2NChkZWNyeXB0YWJsZS5iYXNlNjRDaXBoZXJUZXh0LCBwYXNzd29yZCkpO1xuICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgeWllbGQgeyAuLi5ibG9jaywgc3VjY2VzczogZmFsc2UsIGVycm9yOiAndW5hYmxlIHRvIGRlY3J5cHQnIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCB7IC4uLmJsb2NrLCBzdWNjZXNzOiB0cnVlLCBtYXRjaCB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBMaXN0Q29tbWFuZEhhbmRsZXIge1xuICAgIFxuXG4gICAgYXN5bmMgYXJnSGFuZGxlciggZm9ybWF0IDogc3RyaW5nICkge1xuXG4gICAgICAgIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAgICAgbGV0IG9uU3RhcnQgOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgb25MaXN0aW5nIDogKGw6TGlzdGluZykgPT4gdm9pZDtcbiAgICAgICAgbGV0IG9uRW5kIDogKCkgPT4gdm9pZDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpc3RpbmdzOiBMaXN0aW5nW10gPSBbXTtcblxuXG4gICAgICAgIGlmICggZm9ybWF0ID09PSAnY3N2Jykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBvblN0YXJ0ID0gKCkgPT4gY29uc29sZS5sb2coICdmZWF0dXJlLGZ1bGxQYXRoLHJlbGF0aXZlUGF0aCxleHRlbnNpb24nICk7XG4gICAgICAgICAgICBvbkxpc3RpbmcgPSAobCkgPT4gY29uc29sZS5sb2coIGBcIiR7bC5mZWF0dXJlVHlwZX1cIixcIiR7bC5mdWxsUGF0aH1cIixcIiR7bC5yZWxhdGl2ZVBhdGh9XCIsXCIke2wuZXh0ZW5zaW9ufVwiYCApO1xuICAgICAgICAgICAgb25FbmQgPSAoKSA9PiB7fTtcblxuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PSAnanNvbicpIHtcblxuICAgICAgICAgICAgb25TdGFydCA9ICgpID0+IHt9O1xuICAgICAgICAgICAgb25MaXN0aW5nID0gKGwpID0+IGxpc3RpbmdzLnB1c2goIGwgKTtcbiAgICAgICAgICAgIG9uRW5kID0gKCkgPT4gY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCBsaXN0aW5ncywgbnVsbCwgMiApICk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICd0YWJsZScpIHtcblxuICAgICAgICAgICAgb25TdGFydCA9ICgpID0+IHt9O1xuICAgICAgICAgICAgb25MaXN0aW5nID0gKGwpID0+IGxpc3RpbmdzLnB1c2goIGwgKTtcbiAgICAgICAgICAgIG9uRW5kID0gKCkgPT4gY29uc29sZS50YWJsZSggbGlzdGluZ3MgKTtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIERlZmF1bHRcbiAgICAgICAgICAgIG9uU3RhcnQgPSAoKSA9PiB7fTtcbiAgICAgICAgICAgIG9uTGlzdGluZyA9IChsKSA9PiBjb25zb2xlLmxvZyggYCR7bC5yZWxhdGl2ZVBhdGh9YCApO1xuICAgICAgICAgICAgb25FbmQgPSAoKSA9PiB7fTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5vdXRwdXQoXG4gICAgICAgICAgICBjd2QsXG4gICAgICAgICAgICBvblN0YXJ0LFxuICAgICAgICAgICAgb25MaXN0aW5nLFxuICAgICAgICAgICAgb25FbmRcbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIGFzeW5jIG91dHB1dChcbiAgICAgICAgZGlyIDogc3RyaW5nLFxuICAgICAgICBzdGFydENhbGxiYWNrIDogKCkgPT4gdm9pZCxcbiAgICAgICAgcGVySXRlbUNhbGxiYWNrIDogKGw6TGlzdGluZykgPT4gdm9pZCxcbiAgICAgICAgZW5kQ2FsbGJhY2sgOiAoKSA9PiB2b2lkXG4gICAgKSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBzdGFydENhbGxiYWNrKCk7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbCBvZiBVdGlscy5saXN0aW5ncyhkaXIsIGZhbHNlKSkge1xuICAgICAgICAgICAgcGVySXRlbUNhbGxiYWNrKGwpO1xuICAgICAgICB9XG4gICAgICAgIGVuZENhbGxiYWNrKCk7XG4gICAgfVxuXG5cbn1cblxuY2xhc3MgVGVzdENvbW1hbmRIYW5kbGVyIHtcblxuICAgIGFzeW5jIGFyZ0hhbmRsZXIoIHBhc3N3b3JkczpzdHJpbmdbXSwgb25seUxpc3RGYWlsczpib29sZWFuICkge1xuXG4gICAgICAgIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIGxldCBoYXNGYWlsdXJlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBsaXN0aW5nIG9mIFV0aWxzLmxpc3RpbmdzKGN3ZCwgdHJ1ZSkpIHtcblxuICAgICAgICAgICAgaWYgKGxpc3RpbmcuZmVhdHVyZVR5cGUgPT0gJ0luUGxhY2UnKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHJlc3VsdCBvZiB0aGlzLnRlc3RGb3JJblBsYWNlRGVjcnlwdGlvbiggbGlzdGluZywgcGFzc3dvcmRzICkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzRmFpbHVyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRSZXN1bHQoIHJlc3VsdCwgb25seUxpc3RGYWlscyApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0aW5nLmZlYXR1cmVUeXBlID09ICdXaG9sZU5vdGUnKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnRlc3RGb3JXaG9sZU5vdGVEZWNyeXB0aW9uKCBsaXN0aW5nLCBwYXNzd29yZHMgKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0ZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJlc3VsdCggcmVzdWx0LCBvbmx5TGlzdEZhaWxzICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNGYWlsdXJlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYXN5bmMgKiB0ZXN0Rm9ySW5QbGFjZURlY3J5cHRpb24oIGxpc3Rpbmc6IExpc3RpbmcsIHBhc3N3b3JkczpzdHJpbmdbXSApIDogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFRlc3RSZXN1bHQ+IHtcblxuICAgICAgICBpZiAoIGxpc3RpbmcuY29udGVudCA9PSBudWxsICkge1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25vIGNvbnRlbnQnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCByZXN1bHQgb2YgZGVjcnlwdElubGluZUJsb2NrcyhsaXN0aW5nLmNvbnRlbnQsIHBhc3N3b3JkcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXN1bHQuc3VjY2VzcyA/IGBwYXNzd29yZCAjJHtyZXN1bHQubWF0Y2gucGFzc3dvcmROdW1iZXJ9YCA6IHJlc3VsdC5lcnJvcjtcbiAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc3VsdC5zdWNjZXNzLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBsaW5lICR7cmVzdWx0LmxpbmV9LCBwb3MgJHtyZXN1bHQucG9zaXRpb259LCAke21lc3NhZ2V9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jIHRlc3RGb3JXaG9sZU5vdGVEZWNyeXB0aW9uKCBsaXN0aW5nOiBMaXN0aW5nLCBwYXNzd29yZHM6c3RyaW5nW10gKSA6IFByb21pc2U8VGVzdFJlc3VsdD4ge1xuICAgICAgICBpZiggbGlzdGluZy5jb250ZW50ID09IG51bGwgfHwgbGlzdGluZy5jb250ZW50Lmxlbmd0aCA9PSAwICl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25vIGNvbnRlbnQnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBKc29uRmlsZUVuY29kaW5nLmRlY29kZSggbGlzdGluZy5jb250ZW50IHx8ICcnICk7XG5cbiAgICAgICAgY29uc3QgY2ggPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbUZpbGVEYXRhT3JOdWxsKCBmaWxlRGF0YSApO1xuICAgICAgICBpZiAoIGNoID09IG51bGwgKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVW5rbm93biBmb3JtYXQnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtYXRjaCA9IGF3YWl0IHRyeVBhc3N3b3JkcyhwYXNzd29yZHMsIHBhc3N3b3JkID0+IEZpbGVEYXRhSGVscGVyLmRlY3J5cHQoZmlsZURhdGEsIHBhc3N3b3JkKSk7XG4gICAgICAgIGlmIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgcGFzc3dvcmQgIyR7bWF0Y2gucGFzc3dvcmROdW1iZXJ9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ3VuYWJsZSB0byBkZWNyeXB0J1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG91dHB1dFJlc3VsdChyZXN1bHQ6IFRlc3RSZXN1bHQsIG9ubHlMaXN0RmFpbHM6Ym9vbGVhbikge1xuICAgICAgICBpZiAob25seUxpc3RGYWlscyAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCBgJHtyZXN1bHQuc3VjY2VzcyA/ICdQQVNTRUQnIDogJ0ZBSUxFRCd9ID0+ICR7cmVzdWx0Lmxpc3RpbmcucmVsYXRpdmVQYXRofSA9PiAke3Jlc3VsdC5tZXNzYWdlfSA9PiAke3Jlc3VsdC5saXN0aW5nLmZlYXR1cmVUeXBlfWAgKTtcbiAgICB9XG5cbiAgICBvdXRwdXRSZXN1bHRzKHJlc3VsdHM6IFRlc3RSZXN1bHRbXSwgb25seUxpc3RGYWlsczpib29sZWFuKSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0UmVzdWx0KCByZXN1bHQsIG9ubHlMaXN0RmFpbHMgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgRGVjcnlwdENvbW1hbmRIYW5kbGVye1xuICAgIGFzeW5jIGFyZ0hhbmRsZXIoIHBhc3N3b3JkczpzdHJpbmdbXSwgb3V0ZGlyOnN0cmluZywgZHJ5cnVuOmJvb2xlYW4gKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyggYGRlY3J5cHRpbmcke2RyeXJ1bj8nIChkcnkgcnVuKSc6Jyd9Li4uYCApO1xuXG4gICAgICAgIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIGxldCBoYXNGYWlsdXJlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBsaXN0aW5nIG9mIFV0aWxzLmxpc3RpbmdzKGN3ZCwgdHJ1ZSkpIHtcblxuICAgICAgICAgICAgaWYgKGxpc3RpbmcuZmVhdHVyZVR5cGUgPT0gJ0luUGxhY2UnKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kZWNyeXB0SW5QbGFjZUxpc3RpbmcoIGxpc3RpbmcsIHBhc3N3b3Jkcywgb3V0ZGlyLCBkcnlydW4gKTtcbiAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgaGFzRmFpbHVyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRSZXN1bHQoIHJlc3VsdCApO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGluZy5mZWF0dXJlVHlwZSA9PSAnV2hvbGVOb3RlJyl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kZWNyeXB0V2hvbGVOb3RlTGlzdGluZyggbGlzdGluZywgcGFzc3dvcmRzLCBvdXRkaXIsIGRyeXJ1biApO1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzRmFpbHVyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0UmVzdWx0KCByZXN1bHQgKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc0ZhaWx1cmUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdENvZGUgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGRlY3J5cHRJblBsYWNlTGlzdGluZyhsaXN0aW5nOiBMaXN0aW5nLCBwYXNzd29yZHM6IHN0cmluZ1tdLCBvdXRkaXI6IHN0cmluZywgZHJ5cnVuOiBib29sZWFuKSA6IFByb21pc2U8RGVjcnlwdFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbGlzdGluZy5jb250ZW50ITtcbiAgICAgICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHJlc3VsdCBvZiBkZWNyeXB0SW5saW5lQmxvY2tzKGNvbnRlbnQsIHBhc3N3b3JkcykpIHtcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYEVSUk9SOiBMaW5lICR7cmVzdWx0LmxpbmV9LCBwb3MgJHtyZXN1bHQucG9zaXRpb259LCAke3Jlc3VsdC5lcnJvcn1gLFxuICAgICAgICAgICAgICAgICAgICBvdXRGaWxlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnRzLnB1c2goY29udGVudC5zbGljZShvZmZzZXQsIHJlc3VsdC5zdGFydCksIHJlc3VsdC5tYXRjaC5wbGFpbnRleHQpO1xuICAgICAgICAgICAgb2Zmc2V0ID0gcmVzdWx0LmVuZDtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGNvbnRlbnQuc2xpY2Uob2Zmc2V0KSk7XG5cbiAgICAgICAgY29uc3Qgb3V0RmlsZSA9IHBhdGguam9pbiggb3V0ZGlyLCBsaXN0aW5nLnJlbGF0aXZlUGF0aCApO1xuXG4gICAgICAgIGlmICghZHJ5cnVuKXtcbiAgICAgICAgICAgIGNvbnN0IG91dEZpbGVEaXIgPSBwYXRoLmRpcm5hbWUoIG91dEZpbGUgKTtcbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyggb3V0RmlsZURpciApKXtcbiAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmMoIG91dEZpbGVEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoIG91dEZpbGUsIHBhcnRzLmpvaW4oJycpICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0RlY3J5cHRlZCcsXG4gICAgICAgICAgICBvdXRGaWxlOiBvdXRGaWxlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG91dHB1dFJlc3VsdChyZXN1bHQ6IERlY3J5cHRSZXN1bHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coIGAke3Jlc3VsdC5tZXNzYWdlfSA6ICR7cmVzdWx0Lmxpc3RpbmcucmVsYXRpdmVQYXRofSR7cmVzdWx0Lm91dEZpbGUgPT0gbnVsbCA/ICcnIDogJyA9PiBgJyArIHJlc3VsdC5vdXRGaWxlICsgJ2AnfWAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWNyeXB0V2hvbGVOb3RlTGlzdGluZyhsaXN0aW5nOiBMaXN0aW5nLCBwYXNzd29yZHM6IHN0cmluZ1tdLCBvdXRkaXI6IHN0cmluZywgZHJ5cnVuOmJvb2xlYW4gKSA6IFByb21pc2U8RGVjcnlwdFJlc3VsdD4ge1xuXG4gICAgICAgIGxldCBvdXRGaWxlID0gcGF0aC5qb2luKCBvdXRkaXIsIGxpc3RpbmcucmVsYXRpdmVQYXRoICk7XG5cbiAgICAgICAgLy8gY2hhbmdlIGV4dGVuc2lvblxuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUob3V0RmlsZSk7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShvdXRGaWxlKTtcbiAgICAgICAgY29uc3QgbmV3RmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKGV4dGVuc2lvbiwgJy5tZCcpO1xuXG4gICAgICAgIC8vIGZpbmFsIG91dGZpbGVcbiAgICAgICAgb3V0RmlsZSA9IHBhdGguam9pbihwYXRoLmRpcm5hbWUob3V0RmlsZSksIG5ld0ZpbGVOYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghZHJ5cnVuKXtcbiAgICAgICAgICAgIGNvbnN0IG91dEZpbGVEaXIgPSBwYXRoLmRpcm5hbWUoIG91dEZpbGUgKTtcbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyggb3V0RmlsZURpciApKXtcbiAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmMoIG91dEZpbGVEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBsaXN0aW5nLmNvbnRlbnQgPT0gbnVsbCB8fCBsaXN0aW5nLmNvbnRlbnQubGVuZ3RoID09IDAgKXtcblxuICAgICAgICAgICAgaWYgKCFkcnlydW4pe1xuICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoIG91dEZpbGUsICcnICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdXQVJOOiBFbXB0eSBmaWxlJyxcbiAgICAgICAgICAgICAgICBvdXRGaWxlOiBvdXRGaWxlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBKc29uRmlsZUVuY29kaW5nLmRlY29kZSggbGlzdGluZy5jb250ZW50IHx8ICcnICk7XG5cbiAgICAgICAgY29uc3QgY2ggPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbUZpbGVEYXRhT3JOdWxsKCBmaWxlRGF0YSApO1xuICAgICAgICBpZiAoIGNoID09IG51bGwgKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRVJST1I6IFVua25vd24gZm9ybWF0JyxcbiAgICAgICAgICAgICAgICBvdXRGaWxlOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1hdGNoID0gYXdhaXQgdHJ5UGFzc3dvcmRzKHBhc3N3b3JkcywgcGFzc3dvcmQgPT4gRmlsZURhdGFIZWxwZXIuZGVjcnlwdChmaWxlRGF0YSwgcGFzc3dvcmQpKTtcbiAgICAgICAgaWYgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICghZHJ5cnVuKXtcbiAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCBvdXRGaWxlLCBtYXRjaC5wbGFpbnRleHQgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYERlY3J5cHRlZGAsXG4gICAgICAgICAgICAgICAgb3V0RmlsZTogb3V0RmlsZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBgRVJST1I6IFVuYWJsZSB0byBkZWNyeXB0YCxcbiAgICAgICAgICAgIG91dEZpbGU6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgVXRpbHN7XG4gICAgc3RhdGljIGFzeW5jICogd2FsayggZGlyIDogc3RyaW5nICkgOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8c3RyaW5nPiB7XG4gICAgICAgIFxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IGQgb2YgYXdhaXQgZnMucHJvbWlzZXMub3BlbmRpcihkaXIpKSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHBhdGguam9pbihkaXIsIGQubmFtZSk7XG4gICAgICAgICAgICBpZiAoZC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgeWllbGQqIFV0aWxzLndhbGsoZW50cnkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmlzRmlsZSgpKXtcbiAgICAgICAgICAgICAgICB5aWVsZCBlbnRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyAqIGxpc3RpbmdzKCBkaXIgOiBzdHJpbmcsIGluY2x1ZGVDb250ZW50OiBib29sZWFuICkgOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8TGlzdGluZz4ge1xuICAgICAgICBcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBwIG9mIFV0aWxzLndhbGsoIGRpciApKSB7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBleHQgPSBwYXRoLmV4dG5hbWUocCkudG9Mb3dlckNhc2UoKS5zbGljZSgxKTtcblxuICAgICAgICAgICAgLy8gZXhpdCBlYXJseSBpZiBub3QgYSByZWxldmFudCBmaWxlXG4gICAgICAgICAgICBpZiAoICFbJ21kJywgLi4uQ29uc3RhbnRzLkVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTlNdLmluY2x1ZGVzKCBleHQgKSApe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSAnLicgKyBwYXRoLnNlcCArIHBhdGgucmVsYXRpdmUoZGlyLCBwKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoIGluY2x1ZGVDb250ZW50IHx8IGV4dCA9PSAnbWQnICkgPyBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZSggcCwgJ3V0ZjgnICkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBcblx0XHRcdC8vIGNvdWxkIGhhdmUgaW5wbGFjZSBlbmNyeXB0ZWQgbm90ZXNcblx0XHRcdGlmICggZXh0ID09ICdtZCcgKXtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICggSW5QbGFjZUNvbnN0YW50cy5fUFJFRklYRVMuc29tZSggKHByZWZpeCkgPT4gY29udGVudCEuaW5jbHVkZXMocHJlZml4KSApICl7XG5cdFx0XHRcdFx0eWllbGQge1xuXHRcdFx0XHRcdFx0ZmVhdHVyZVR5cGU6ICdJblBsYWNlJyxcblx0XHRcdFx0XHRcdGZ1bGxQYXRoOiBwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb246IGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGluY2x1ZGVDb250ZW50ID8gY29udGVudCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBtdXN0IGJlIHdob2xlIG5vdGUgZW5jcnlwdGVkXG4gICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdXaG9sZU5vdGUnLFxuICAgICAgICAgICAgICAgIGZ1bGxQYXRoOiBwLFxuICAgICAgICAgICAgICAgIHJlbGF0aXZlUGF0aDogcmVsYXRpdmVQYXRoLFxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogZXh0LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuY29uc3Qgb3B0UGFzc3dvcmRMaXN0IDogeWFyZ3MuT3B0aW9ucyAgPSB7XG4gICAgZGVtYW5kT3B0aW9uOiB0cnVlLFxuICAgIGFsaWFzOiBbJ3AnLCAncHcnXSxcbiAgICBkZXNjcmliZTogJ3Bhc3N3b3JkcyB0byB1c2UnLFxuICAgIHR5cGU6ICdhcnJheScsXG59XG5cbmNvbnN0IG9wdExpc3RpbmdGb3JtYXQgOiB5YXJncy5PcHRpb25zID0ge1xuICAgIGFsaWFzOiAnZicsXG4gICAgZGVzY3JpYmU6ICdmb3JtYXQgb2YgdGhlIGxpc3RpbmcnLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGNob2ljZXM6IFsgJ2RlZmF1bHQnLCAndGFibGUnLCAnanNvbicsICdjc3YnXSxcbiAgICBkZWZhdWx0OiAnZGVmYXVsdCcsXG59XG5cblxuXG55YXJncy5kZWZhdWx0KGhpZGVCaW4ocHJvY2Vzcy5hcmd2KSlcbiAgICAuc2NyaXB0TmFtZSgnbWRlbmMnKVxuICAgIC51c2FnZSggJ1VzYWdlOiAkMCBbY29tbWFuZF0gW29wdGlvbnNdJyApXG5cbiAgICAuY29tbWFuZCggJ2xpc3QnLCAnbGlzdCBhbGwgZW5jcnlwdGVkIGFydGlmYWN0cyB3aXRoaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5JywgKHlhcmdzKSA9PiB5YXJncy5vcHRpb24oIHtcbiAgICAgICAgZm9ybWF0OiBvcHRMaXN0aW5nRm9ybWF0XG4gICAgfSApLCAoYXJndikgPT4gbmV3IExpc3RDb21tYW5kSGFuZGxlcigpLmFyZ0hhbmRsZXIoYXJndi5mb3JtYXQgYXMgc3RyaW5nICkgKVxuICAgIFxuICAgIC5jb21tYW5kKFsndGVzdCcsICdjaGVjayddLCAnY2hlY2sgdGhhdCBhbGwgbm90ZXMgY2FuIGJlIGRlY3J5cHRlZCB3aXRoIHRoZSBnaXZlbiBwYXNzd29yZCBsaXN0JywgKHlhcmdzKSA9PiB5YXJncy5vcHRpb24oICB7XG4gICAgICAgIHBhc3N3b3Jkczogb3B0UGFzc3dvcmRMaXN0LFxuICAgICAgICBmYWlsczoge1xuICAgICAgICAgICAgYWxpYXM6IFsnZicsICdmYWlsJ10sXG4gICAgICAgICAgICBkZXNjcmliZTogJ29ubHkgbGlzdCBmYWlscycsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfSApLCAoYXJndikgPT4gbmV3IFRlc3RDb21tYW5kSGFuZGxlcigpLmFyZ0hhbmRsZXIoIGFyZ3YucGFzc3dvcmRzIGFzIHN0cmluZ1tdLCBhcmd2LmZhaWxzIGFzIGJvb2xlYW4gKSApXG4gICAgXG4gICAgLmNvbW1hbmQoJ2RlY3J5cHQnLCAnZGVjcnlwdCBub3RlcyB0byBwbGFpbiB0ZXh0IGdpdmVuIGEgcGFzc3dvcmQgbGlzdCBhbmQgYW4gb3V0cHV0IGRpcmVjdG9yeScsICAoeWFyZ3MpID0+IHlhcmdzLm9wdGlvbiggIHtcbiAgICAgICAgcGFzc3dvcmRzOiBvcHRQYXNzd29yZExpc3QsXG4gICAgICAgIG91dGRpcjoge1xuICAgICAgICAgICAgYWxpYXM6IFsnbycsICdvdXQnLCAndG8nXSxcbiAgICAgICAgICAgIGRlc2NyaWJlOiAnb3V0cHV0IGRpcmVjdG9yeScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlbWFuZE9wdGlvbjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkcnlydW46IHtcbiAgICAgICAgICAgIGFsaWFzOiBbJ2RyJywgJ2RyeSddLFxuICAgICAgICAgICAgZGVzY3JpYmU6ICdkcnkgcnVuJyxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9ICksIChhcmd2KSA9PiBuZXcgRGVjcnlwdENvbW1hbmRIYW5kbGVyKCkuYXJnSGFuZGxlciggYXJndi5wYXNzd29yZHMgYXMgc3RyaW5nW10sIGFyZ3Yub3V0ZGlyIGFzIHN0cmluZywgYXJndi5kcnlydW4gIT09IGZhbHNlICkgKSBcbiAgICBcbiAgICAuZGVtYW5kQ29tbWFuZCgpXG4gICAgLmhlbHAoKVxuICAgIC53cmFwKCBudWxsIClcbiAgICAuZXhhbXBsZShbXG4gICAgICAgIFsnJDAgbGlzdCcsICdQcm9jZXNzZXMgYWxsICoubWQgYW5kICoubWRlbmMgZmlsZXMgYW5kIGxpc3QgYW55IGVuY3J5cHRlZCBhcnRpZmFjdHMgd2l0aGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeSddLFxuICAgICAgICBbJyQwIHRlc3QgLS1wYXNzd29yZHMgcHcxIHB3MicsICdjaGVjayB0aGF0IGFsbCBub3RlcyBjYW4gYmUgZGVjcnlwdGVkIHdpdGggdGhlIGdpdmVuIHBhc3N3b3JkIGxpc3QnXSxcbiAgICAgICAgWyckMCBkZWNyeXB0IC0tcHcgcHcxIHB3MiAtLW91dGRpciBcXFxccGF0aFxcXFx0b1xcXFxvdXRwdXRcXFxcJywgJ2RlY3J5cHQgbm90ZXMgdG8gYW4gb3V0cHV0IGRpcmVjdG9yeSddLFxuICAgICAgXSlcbiAgICAucGFyc2UoKVxuO1xuIFxuXG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9CYXNlNjQoYnl0ZXM6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuXHRsZXQgYmluYXJ5ID0gJyc7XG5cdGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVzLmxlbmd0aDsgb2Zmc2V0ICs9IDgxOTIpIHtcblx0XHRiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSguLi5ieXRlcy5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIDgxOTIpKTtcblx0fVxuXHRyZXR1cm4gYnRvYShiaW5hcnkpO1xufVxuXG4vLyBQcmVzZXJ2ZSBhdG9iJ3MgbGVnYWN5IHRvbGVyYW5jZTsgZm9ybWF0LXNwZWNpZmljIHZhbGlkYXRpb24gYmVsb25ncyB0byByZWFkZXJzLlxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXModmFsdWU6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuXHRyZXR1cm4gVWludDhBcnJheS5mcm9tKGF0b2IodmFsdWUpLCBjaGFyYWN0ZXIgPT4gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkpO1xufVxuIiwgImltcG9ydCB7IGJhc2U2NFRvQnl0ZXMsIGJ5dGVzVG9CYXNlNjQgfSBmcm9tICcuL0Jhc2U2NC50cyc7XG5cbmNvbnN0IHZlY3RvclNpemVcdD0gMTY7XG5jb25zdCB1dGY4RW5jb2Rlclx0PSBuZXcgVGV4dEVuY29kZXIoKTtcbmNvbnN0IHV0ZjhEZWNvZGVyXHQ9IG5ldyBUZXh0RGVjb2RlcigpO1xuY29uc3QgaXRlcmF0aW9uc1x0PSAxMDAwO1xuY29uc3Qgc2FsdFx0XHRcdD0gdXRmOEVuY29kZXIuZW5jb2RlKCdYSFduREFUNmVoTVZZMnpEJyk7XG5cbmV4cG9ydCBjbGFzcyBDcnlwdG9IZWxwZXIge1xuXG5cdC8vIGNvbnN0cnVjdG9yKCl7XG5cdC8vIFx0Y29uc29sZS5kZWJ1ZygnbmV3IENyeXB0b0hlbHBlcicpO1xuXHQvLyB9XG5cblx0cHJpdmF0ZSBhc3luYyBkZXJpdmVLZXkocGFzc3dvcmQ6c3RyaW5nKSA6UHJvbWlzZTxDcnlwdG9LZXk+IHtcblx0XHRjb25zdCBidWZmZXIgICAgID0gdXRmOEVuY29kZXIuZW5jb2RlKHBhc3N3b3JkKTtcblx0XHRjb25zdCBrZXkgICAgICAgID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoJ3JhdycsIGJ1ZmZlciwge25hbWU6ICdQQktERjInfSwgZmFsc2UsIFsnZGVyaXZlS2V5J10pO1xuXHRcdGNvbnN0IHByaXZhdGVLZXkgPSBjcnlwdG8uc3VidGxlLmRlcml2ZUtleShcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ1BCS0RGMicsXG5cdFx0XHRcdGhhc2g6IHtuYW1lOiAnU0hBLTI1Nid9LFxuXHRcdFx0XHRpdGVyYXRpb25zLFxuXHRcdFx0XHRzYWx0XG5cdFx0XHR9LFxuXHRcdFx0a2V5LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnQUVTLUdDTScsXG5cdFx0XHRcdGxlbmd0aDogMjU2XG5cdFx0XHR9LFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHRbJ2VuY3J5cHQnLCAnZGVjcnlwdCddXG5cdFx0KTtcblx0XHRcblx0XHRyZXR1cm4gcHJpdmF0ZUtleTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0VG9CeXRlcyh0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcblxuXHRcdGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuZGVyaXZlS2V5KHBhc3N3b3JkKTtcblx0XHRcblx0XHRjb25zdCB0ZXh0Qnl0ZXNUb0VuY3J5cHQgPSB1dGY4RW5jb2Rlci5lbmNvZGUodGV4dCk7XG5cdFx0Y29uc3QgdmVjdG9yID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSh2ZWN0b3JTaXplKSk7XG5cdFx0XG5cdFx0Ly8gZW5jcnlwdCBpbnRvIGJ5dGVzXG5cdFx0Y29uc3QgZW5jcnlwdGVkQnl0ZXMgPSBuZXcgVWludDhBcnJheShcblx0XHRcdGF3YWl0IGNyeXB0by5zdWJ0bGUuZW5jcnlwdChcblx0XHRcdFx0e25hbWU6ICdBRVMtR0NNJywgaXY6IHZlY3Rvcn0sXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dGV4dEJ5dGVzVG9FbmNyeXB0XG5cdFx0XHQpXG5cdFx0KTtcblx0XHRcblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoIHZlY3Rvci5ieXRlTGVuZ3RoICsgZW5jcnlwdGVkQnl0ZXMuYnl0ZUxlbmd0aCApO1xuXHRcdGZpbmFsQnl0ZXMuc2V0KCB2ZWN0b3IsIDAgKTtcblx0XHRmaW5hbEJ5dGVzLnNldCggZW5jcnlwdGVkQnl0ZXMsIHZlY3Rvci5ieXRlTGVuZ3RoICk7XG5cblx0XHRyZXR1cm4gZmluYWxCeXRlcztcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0VG9CYXNlNjQodGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuXHRcdGNvbnN0IGZpbmFsQnl0ZXMgPSBhd2FpdCB0aGlzLmVuY3J5cHRUb0J5dGVzKHRleHQsIHBhc3N3b3JkKTtcblx0XHRyZXR1cm4gYnl0ZXNUb0Jhc2U2NChmaW5hbEJ5dGVzKTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJ5dGVzKGVuY3J5cHRlZEJ5dGVzOiBVaW50OEFycmF5LCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xuXHRcdHRyeSB7XG5cblx0XHRcdC8vIGV4dHJhY3QgaXZcblx0XHRcdGNvbnN0IHZlY3RvciA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKDAsdmVjdG9yU2l6ZSk7XG5cblx0XHRcdC8vIGV4dHJhY3QgZW5jcnlwdGVkIHRleHRcblx0XHRcdGNvbnN0IGVuY3J5cHRlZFRleHRCeXRlcyA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKHZlY3RvclNpemUpO1xuXG5cdFx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmRlcml2ZUtleShwYXNzd29yZCk7XG5cblx0XHRcdC8vIGRlY3J5cHQgaW50byBieXRlc1xuXHRcdFx0Y29uc3QgZGVjcnlwdGVkQnl0ZXMgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlY3J5cHQoXG5cdFx0XHRcdHtuYW1lOiAnQUVTLUdDTScsIGl2OiB2ZWN0b3J9LFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdGVuY3J5cHRlZFRleHRCeXRlc1xuXHRcdFx0KTtcblxuXHRcdFx0Ly8gY29udmVydCBieXRlcyB0byB0ZXh0XG5cdFx0XHRjb25zdCBkZWNyeXB0ZWRUZXh0ID0gdXRmOERlY29kZXIuZGVjb2RlKGRlY3J5cHRlZEJ5dGVzKTtcblx0XHRcdHJldHVybiBkZWNyeXB0ZWRUZXh0O1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEZyb21CYXNlNjQoYmFzZTY0RW5jb2RlZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xuXHRcdHRyeSB7XG5cblx0XHRcdGNvbnN0IGJ5dGVzVG9EZWNvZGUgPSBiYXNlNjRUb0J5dGVzKGJhc2U2NEVuY29kZWQpO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kZWNyeXB0RnJvbUJ5dGVzKGJ5dGVzVG9EZWNvZGUsIHBhc3N3b3JkKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG5cbiIsICJpbXBvcnQgeyBJQ3J5cHRvSGVscGVyIH0gZnJvbSBcIi4vSUNyeXB0b0hlbHBlci50c1wiO1xuaW1wb3J0IHsgYmFzZTY0VG9CeXRlcywgYnl0ZXNUb0Jhc2U2NCB9IGZyb20gJy4vQmFzZTY0LnRzJztcblxuZXhwb3J0IGNsYXNzIENyeXB0b0hlbHBlcjIzMDQgaW1wbGVtZW50cyBJQ3J5cHRvSGVscGVyIHtcblx0cHVibGljIHZlY3RvclNpemU6IG51bWJlcjtcblx0cHVibGljIHNhbHRTaXplOiBudW1iZXI7XG5cdHB1YmxpYyBpdGVyYXRpb25zOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoIHZlY3RvclNpemU6IG51bWJlciwgc2FsdFNpemU6IG51bWJlciwgaXRlcmF0aW9uczogbnVtYmVyICl7XG5cdFx0Ly9jb25zb2xlLmRlYnVnKCduZXcgQ3J5cHRvSGVscGVyMjMwNCcsIHt2ZWN0b3JTaXplLCBzYWx0U2l6ZSwgaXRlcmF0aW9uc30pO1xuXHRcdHRoaXMudmVjdG9yU2l6ZSA9IHZlY3RvclNpemU7XG5cdFx0dGhpcy5zYWx0U2l6ZSA9IHNhbHRTaXplO1xuXHRcdHRoaXMuaXRlcmF0aW9ucyA9IGl0ZXJhdGlvbnM7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGRlcml2ZUtleSggcGFzc3dvcmQ6c3RyaW5nLCBzYWx0OlVpbnQ4QXJyYXkgKSA6UHJvbWlzZTxDcnlwdG9LZXk+IHtcblx0XHQvLyBjb25zb2xlLnRyYWNlKCdDcnlwdG9IZWxwZXIyMzA0LmRlcml2ZUtleScpO1xuXHRcdC8vU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU3VidGxlQ3J5cHRvXG5cdFx0Y29uc3QgdXRmOEVuY29kZXJcdD0gbmV3IFRleHRFbmNvZGVyKCk7XG5cdFx0Y29uc3QgYnVmZmVyICAgICA9IHV0ZjhFbmNvZGVyLmVuY29kZShwYXNzd29yZCk7XG5cdFx0Y29uc3Qga2V5ICAgICAgICA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KFxuXHRcdFx0Lypmb3JtYXQqLyAncmF3Jyxcblx0XHRcdC8qa2V5RGF0YSovIGJ1ZmZlcixcblx0XHRcdC8qYWxnb3JpdGhtKi8gJ1BCS0RGMicsXG5cdFx0XHQvKmV4dHJhY3RhYmxlKi8gZmFsc2UsXG5cdFx0XHQvKmtleVVzYWdlcyovIFsnZGVyaXZlS2V5J11cblx0XHQpO1xuXHRcdFxuXHRcdC8vY29uc29sZS50aW1lKCdDcnlwdG9IZWxwZXIyMzA0LmRlcml2ZUtleScpO1xuXHRcdHRyeXtcblx0XHRcdGNvbnN0IHByaXZhdGVLZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlcml2ZUtleShcblx0XHRcdFx0LyphbGdvcml0aG0qLyB7XG5cdFx0XHRcdFx0bmFtZTogJ1BCS0RGMicsXG5cdFx0XHRcdFx0aGFzaDogJ1NIQS01MTInLFxuXHRcdFx0XHRcdHNhbHQ6IHNhbHQuYnVmZmVyIGFzIEFycmF5QnVmZmVyLFxuXHRcdFx0XHRcdGl0ZXJhdGlvbnM6IHRoaXMuaXRlcmF0aW9ucyxcblx0XHRcdFx0fSxcblx0XHRcdFx0LypiYXNlS2V5Ki8ga2V5LFxuXHRcdFx0XHQvKmRlcml2ZWRLZXlBbGdvcml0aG0qLyB7XG5cdFx0XHRcdFx0bmFtZTogJ0FFUy1HQ00nLFxuXHRcdFx0XHRcdGxlbmd0aDogMjU2XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8qZXh0cmFjdGFibGUqLyBmYWxzZSxcblx0XHRcdFx0LyprZXlVc2FnZXMqLyBbJ2VuY3J5cHQnLCAnZGVjcnlwdCddXG5cdFx0XHQpO1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gcHJpdmF0ZUtleTtcblx0XHR9ZmluYWxseXtcblx0XHRcdC8vY29uc29sZS50aW1lRW5kKCdDcnlwdG9IZWxwZXIyMzA0LmRlcml2ZUtleScpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgZW5jcnlwdFRvQnl0ZXMoIHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyApOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcblxuXHRcdGNvbnN0IHNhbHQgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCBuZXcgVWludDhBcnJheSh0aGlzLnNhbHRTaXplKSApO1xuXG5cdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5kZXJpdmVLZXkoIHBhc3N3b3JkLCBzYWx0ICk7XG5cdFx0XG5cdFx0Y29uc3QgdXRmOEVuY29kZXJcdD0gbmV3IFRleHRFbmNvZGVyKCk7XG5cdFx0Y29uc3QgdGV4dEJ5dGVzVG9FbmNyeXB0ID0gdXRmOEVuY29kZXIuZW5jb2RlKHRleHQpO1xuXHRcdGNvbnN0IHZlY3RvciA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkodGhpcy52ZWN0b3JTaXplKSk7XG5cdFx0XG5cdFx0Ly8gZW5jcnlwdCBpbnRvIGJ5dGVzXG5cdFx0Y29uc3QgZW5jcnlwdGVkQnl0ZXMgPSBuZXcgVWludDhBcnJheShcblx0XHRcdGF3YWl0IGNyeXB0by5zdWJ0bGUuZW5jcnlwdChcblx0XHRcdFx0LyphbGdvcml0aG0qLyB7XG5cdFx0XHRcdFx0bmFtZTogJ0FFUy1HQ00nLFxuXHRcdFx0XHRcdGl2OiB2ZWN0b3Jcblx0XHRcdFx0fSxcblx0XHRcdFx0LyprZXkqLyBrZXksXG5cdFx0XHRcdC8qZGF0YSovIHRleHRCeXRlc1RvRW5jcnlwdFxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0XG5cdFx0Y29uc3QgZmluYWxCeXRlcyA9IG5ldyBVaW50OEFycmF5KCB2ZWN0b3IuYnl0ZUxlbmd0aCArIHNhbHQuYnl0ZUxlbmd0aCArIGVuY3J5cHRlZEJ5dGVzLmJ5dGVMZW5ndGggKTtcblx0XHRmaW5hbEJ5dGVzLnNldCggdmVjdG9yLCAwICk7XG5cdFx0ZmluYWxCeXRlcy5zZXQoIHNhbHQsIHZlY3Rvci5ieXRlTGVuZ3RoICk7XG5cdFx0ZmluYWxCeXRlcy5zZXQoIGVuY3J5cHRlZEJ5dGVzLCB2ZWN0b3IuYnl0ZUxlbmd0aCArIHNhbHQuYnl0ZUxlbmd0aCApO1xuXG5cdFx0cmV0dXJuIGZpbmFsQnl0ZXM7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQmFzZTY0KHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gYXdhaXQgdGhpcy5lbmNyeXB0VG9CeXRlcyh0ZXh0LCBwYXNzd29yZCk7XG5cdFx0cmV0dXJuIGJ5dGVzVG9CYXNlNjQoZmluYWxCeXRlcyk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGRlY3J5cHRGcm9tQnl0ZXMoXG5cdFx0ZW5jcnlwdGVkQnl0ZXM6IFVpbnQ4QXJyYXksXG5cdFx0cGFzc3dvcmQ6IHN0cmluZ1xuXHQpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XG5cdFx0dHJ5IHtcblx0XHRcdFxuXHRcdFx0bGV0IG9mZnNldDogbnVtYmVyO1xuXHRcdFx0bGV0IG5leHRPZmZzZXQgOiBudW1iZXJ8dW5kZWZpbmVkO1xuXHRcdFx0XG5cdFx0XHQvLyBleHRyYWN0IGl2XG5cdFx0XHRvZmZzZXQgPSAwO1xuXHRcdFx0bmV4dE9mZnNldCA9IG9mZnNldCArIHRoaXMudmVjdG9yU2l6ZTtcblx0XHRcdGNvbnN0IHZlY3RvciA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKG9mZnNldCwgbmV4dE9mZnNldCk7XG5cdFx0XHRcblx0XHRcdC8vIGV4dHJhY3Qgc2FsdFxuXHRcdFx0b2Zmc2V0ID0gbmV4dE9mZnNldDtcblx0XHRcdG5leHRPZmZzZXQgPSBvZmZzZXQgKyB0aGlzLnNhbHRTaXplO1xuXHRcdFx0Y29uc3Qgc2FsdCA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKG9mZnNldCwgbmV4dE9mZnNldCk7XG5cdFx0XHRcblx0XHRcdC8vIGV4dHJhY3QgZW5jcnlwdGVkIHRleHRcblx0XHRcdG9mZnNldCA9IG5leHRPZmZzZXQ7XG5cdFx0XHRuZXh0T2Zmc2V0ID0gdW5kZWZpbmVkO1xuXHRcdFx0Y29uc3QgZW5jcnlwdGVkVGV4dEJ5dGVzID0gZW5jcnlwdGVkQnl0ZXMuc2xpY2Uob2Zmc2V0KTtcblx0XHRcdFxuXHRcdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5kZXJpdmVLZXkocGFzc3dvcmQsIHNhbHQpO1xuXHRcdFx0XG5cdFx0XHQvLyBkZWNyeXB0IGludG8gYnl0ZXNcblx0XHRcdGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KFxuXHRcdFx0XHQvKmFsZ29yaXRobSovIHtcblx0XHRcdFx0XHRuYW1lOiAnQUVTLUdDTScsXG5cdFx0XHRcdFx0aXY6IHZlY3RvclxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKmtleSovIGtleSxcblx0XHRcdFx0LypkYXRhKi8gZW5jcnlwdGVkVGV4dEJ5dGVzXG5cdFx0XHQpO1xuXHRcdFx0XG5cdFx0XHQvLyBjb252ZXJ0IGJ5dGVzIHRvIHRleHRcblx0XHRcdGNvbnN0IHV0ZjhEZWNvZGVyXHQ9IG5ldyBUZXh0RGVjb2RlcigpO1xuXHRcdFx0Y29uc3QgZGVjcnlwdGVkVGV4dCA9IHV0ZjhEZWNvZGVyLmRlY29kZShkZWNyeXB0ZWRCeXRlcyk7XG5cdFx0XHRyZXR1cm4gZGVjcnlwdGVkVGV4dDtcblx0XHRcdFxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEZyb21CYXNlNjQoIGJhc2U2NEVuY29kZWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyApOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGJ5dGVzVG9EZWNvZGUgPSBiYXNlNjRUb0J5dGVzKGJhc2U2NEVuY29kZWQpO1xuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuZGVjcnlwdEZyb21CeXRlcyggYnl0ZXNUb0RlY29kZSwgcGFzc3dvcmQgKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiIsICJpbXBvcnQgeyBiYXNlNjRUb0J5dGVzLCBieXRlc1RvQmFzZTY0IH0gZnJvbSAnLi9CYXNlNjQudHMnO1xuXG5leHBvcnQgY29uc3QgYWxnb3JpdGhtT2Jzb2xldGUgPSB7XG5cdG5hbWU6ICdBRVMtR0NNJyxcblx0aXY6IG5ldyBVaW50OEFycmF5KFsxOTYsIDE5MCwgMjQwLCAxOTAsIDE4OCwgNzgsIDQxLCAxMzIsIDE1LCAyMjAsIDg0LCAyMTFdKSxcblx0dGFnTGVuZ3RoOiAxMjhcbn1cblxuZXhwb3J0IGNsYXNzIENyeXB0b0hlbHBlck9ic29sZXRlIHtcblxuXHRwcml2YXRlIGFzeW5jIGJ1aWxkS2V5KHBhc3N3b3JkOiBzdHJpbmcpIHtcblx0XHRjb25zdCB1dGY4RW5jb2RlID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cdFx0Y29uc3QgcGFzc3dvcmRCeXRlcyA9IHV0ZjhFbmNvZGUuZW5jb2RlKHBhc3N3b3JkKTtcblxuXHRcdGNvbnN0IHBhc3N3b3JkRGlnZXN0ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoeyBuYW1lOiAnU0hBLTI1NicgfSwgcGFzc3dvcmRCeXRlcyk7XG5cblx0XHRjb25zdCBrZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcblx0XHRcdCdyYXcnLFxuXHRcdFx0cGFzc3dvcmREaWdlc3QsXG5cdFx0XHRhbGdvcml0aG1PYnNvbGV0ZSxcblx0XHRcdGZhbHNlLFxuXHRcdFx0WydlbmNyeXB0JywgJ2RlY3J5cHQnXVxuXHRcdCk7XG5cblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cdFxuXHQvKipcbiAgXHQqIEBkZXByZWNhdGVkXG4gXHQqL1xuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQmFzZTY0KHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5idWlsZEtleShwYXNzd29yZCk7XG5cblx0XHRjb25zdCB1dGY4RW5jb2RlID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cdFx0Y29uc3QgYnl0ZXNUb0VuY3J5cHQgPSB1dGY4RW5jb2RlLmVuY29kZSh0ZXh0KTtcblxuXHRcdC8vIGVuY3J5cHQgaW50byBieXRlc1xuXHRcdGNvbnN0IGVuY3J5cHRlZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KFxuXHRcdFx0YWxnb3JpdGhtT2Jzb2xldGUsIGtleSwgYnl0ZXNUb0VuY3J5cHRcblx0XHQpKTtcblxuXHRcdHJldHVybiBieXRlc1RvQmFzZTY0KGVuY3J5cHRlZEJ5dGVzKTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJhc2U2NChiYXNlNjRFbmNvZGVkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIGNvbnZlcnQgYmFzZSA2NCB0byBhcnJheVxuXHRcdFx0Y29uc3QgYnl0ZXNUb0RlY3J5cHQgPSBiYXNlNjRUb0J5dGVzKGJhc2U2NEVuY29kZWQpO1xuXG5cdFx0XHRjb25zdCBrZXkgPSBhd2FpdCB0aGlzLmJ1aWxkS2V5KHBhc3N3b3JkKTtcblxuXHRcdFx0Ly8gZGVjcnlwdCBpbnRvIGJ5dGVzXG5cdFx0XHRjb25zdCBkZWNyeXB0ZWRCeXRlcyA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdChhbGdvcml0aG1PYnNvbGV0ZSwga2V5LCBieXRlc1RvRGVjcnlwdC5idWZmZXIgYXMgQXJyYXlCdWZmZXIpO1xuXG5cdFx0XHQvLyBjb252ZXJ0IGJ5dGVzIHRvIHRleHRcblx0XHRcdGNvbnN0IHV0ZjhEZWNvZGUgPSBuZXcgVGV4dERlY29kZXIoKTtcblx0XHRcdGNvbnN0IGRlY3J5cHRlZFRleHQgPSB1dGY4RGVjb2RlLmRlY29kZShkZWNyeXB0ZWRCeXRlcyk7XG5cdFx0XHRyZXR1cm4gZGVjcnlwdGVkVGV4dDtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cbn1cbiIsICJpbXBvcnQgdHlwZSB7IElDcnlwdG9IZWxwZXIgfSBmcm9tICcuL0lDcnlwdG9IZWxwZXIudHMnO1xuaW1wb3J0IHsgYmFzZTY0VG9CeXRlcywgYnl0ZXNUb0Jhc2U2NCBhcyBlbmNvZGVCYXNlNjQgfSBmcm9tICcuL0Jhc2U2NC50cyc7XG5cbmV4cG9ydCB7IGVuY29kZUJhc2U2NCB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIENyeXB0b0VudmVsb3BlVjMge1xuXHR2ZXJzaW9uOiAnMy4wJztcblx0a2RmOiB7IG5hbWU6ICdQQktERjInOyBoYXNoOiAnU0hBLTUxMic7IGl0ZXJhdGlvbnM6IG51bWJlcjsgc2FsdDogc3RyaW5nIH07XG5cdGNpcGhlcjogeyBuYW1lOiAnQUVTLUdDTSc7IGtleUxlbmd0aDogMjU2OyBpdjogc3RyaW5nOyB0YWdMZW5ndGg6IDEyOCB9O1xuXHRlbmNvZGVkRGF0YTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVjNfREVGQVVMVF9JVEVSQVRJT05TID0gMjIwMDAwO1xuLy8gUmVhZGVyIGJvdW5kcyBhcmUgZm9ybWF0IHBvbGljeSwgaW5kZXBlbmRlbnQgb2YgZnV0dXJlIHdyaXRlciBkZWZhdWx0cy5cbmV4cG9ydCBjb25zdCBWM19NSU5fSVRFUkFUSU9OUyA9IDIyMDAwMDtcbmV4cG9ydCBjb25zdCBWM19NQVhfSVRFUkFUSU9OUyA9IDIwMDAwMDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVCYXNlNjQodmFsdWU6IHVua25vd24pOiBVaW50OEFycmF5IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWUubGVuZ3RoICUgNCAhPT0gMCB8fCAvW15BLVphLXowLTkrLz1dLy50ZXN0KHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2MyBCYXNlNjQnKTtcblx0fVxuXHRjb25zdCBieXRlcyA9IGJhc2U2NFRvQnl0ZXModmFsdWUpO1xuXHRpZiAoZW5jb2RlQmFzZTY0KGJ5dGVzKSAhPT0gdmFsdWUpIHRocm93IG5ldyBFcnJvcignTm9uY2Fub25pY2FsIHYzIEJhc2U2NCcpO1xuXHRyZXR1cm4gYnl0ZXM7XG59XG5cbmZ1bmN0aW9uIHJlY29yZCh2YWx1ZTogdW5rbm93biwga2V5czogc3RyaW5nW10pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpXG5cdFx0fHwgT2JqZWN0LmtleXModmFsdWUpLnNvbWUoa2V5ID0+ICFrZXlzLmluY2x1ZGVzKGtleSkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHYzIG1ldGFkYXRhJyk7XG5cdH1cblx0cmV0dXJuIHZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUl0ZXJhdGlvbnMoaXRlcmF0aW9uczogdW5rbm93bik6IGFzc2VydHMgaXRlcmF0aW9ucyBpcyBudW1iZXIge1xuXHRpZiAodHlwZW9mIGl0ZXJhdGlvbnMgIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKGl0ZXJhdGlvbnMpXG5cdFx0fHwgaXRlcmF0aW9ucyA8IFYzX01JTl9JVEVSQVRJT05TIHx8IGl0ZXJhdGlvbnMgPiBWM19NQVhfSVRFUkFUSU9OUykge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdjMgaXRlcmF0aW9uIGNvdW50Jyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGVhZGVyKGl0ZXJhdGlvbnM6IG51bWJlciwgc2FsdDogVWludDhBcnJheSwgaXY6IFVpbnQ4QXJyYXkpOiBPbWl0PENyeXB0b0VudmVsb3BlVjMsICdlbmNvZGVkRGF0YSc+IHtcblx0cmV0dXJuIHtcblx0XHR2ZXJzaW9uOiAnMy4wJyxcblx0XHRrZGY6IHsgbmFtZTogJ1BCS0RGMicsIGhhc2g6ICdTSEEtNTEyJywgaXRlcmF0aW9ucywgc2FsdDogZW5jb2RlQmFzZTY0KHNhbHQpIH0sXG5cdFx0Y2lwaGVyOiB7IG5hbWU6ICdBRVMtR0NNJywga2V5TGVuZ3RoOiAyNTYsIGl2OiBlbmNvZGVCYXNlNjQoaXYpLCB0YWdMZW5ndGg6IDEyOCB9LFxuXHR9O1xufVxuXG4vLyBSZWNvbnN0cnVjdCBhIGNhbm9uaWNhbCBoZWFkZXIgc28gaW5wdXQgSlNPTiBwcm9wZXJ0eSBvcmRlciBjYW5ub3QgY2hhbmdlIEFBRC5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVudmVsb3BlVjModmFsdWU6IHVua25vd24pOiBDcnlwdG9FbnZlbG9wZVYzIHtcblx0Y29uc3QgZGF0YSA9IHJlY29yZCh2YWx1ZSwgWyd2ZXJzaW9uJywgJ2hpbnQnLCAna2RmJywgJ2NpcGhlcicsICdlbmNvZGVkRGF0YSddKTtcblx0Y29uc3Qga2RmID0gcmVjb3JkKGRhdGEua2RmLCBbJ25hbWUnLCAnaGFzaCcsICdpdGVyYXRpb25zJywgJ3NhbHQnXSk7XG5cdGNvbnN0IGNpcGhlciA9IHJlY29yZChkYXRhLmNpcGhlciwgWyduYW1lJywgJ2tleUxlbmd0aCcsICdpdicsICd0YWdMZW5ndGgnXSk7XG5cdGlmIChkYXRhLnZlcnNpb24gIT09ICczLjAnIHx8IGtkZi5uYW1lICE9PSAnUEJLREYyJyB8fCBrZGYuaGFzaCAhPT0gJ1NIQS01MTInXG5cdFx0fHwgY2lwaGVyLm5hbWUgIT09ICdBRVMtR0NNJyB8fCBjaXBoZXIua2V5TGVuZ3RoICE9PSAyNTYgfHwgY2lwaGVyLnRhZ0xlbmd0aCAhPT0gMTI4XG5cdFx0fHwgKCdoaW50JyBpbiBkYXRhICYmIHR5cGVvZiBkYXRhLmhpbnQgIT09ICdzdHJpbmcnKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdjMgY3J5cHRvIHN1aXRlJyk7XG5cdH1cblx0dmFsaWRhdGVJdGVyYXRpb25zKGtkZi5pdGVyYXRpb25zKTtcblx0Y29uc3Qgc2FsdCA9IGRlY29kZUJhc2U2NChrZGYuc2FsdCk7XG5cdGNvbnN0IGl2ID0gZGVjb2RlQmFzZTY0KGNpcGhlci5pdik7XG5cdGNvbnN0IGNpcGhlcnRleHQgPSBkZWNvZGVCYXNlNjQoZGF0YS5lbmNvZGVkRGF0YSk7XG5cdGlmIChzYWx0Lmxlbmd0aCAhPT0gMTYgfHwgaXYubGVuZ3RoICE9PSAxMiB8fCBjaXBoZXJ0ZXh0Lmxlbmd0aCA8IDE2KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHYzIHBheWxvYWQgbGVuZ3RocycpO1xuXHR9XG5cdHJldHVybiB7IC4uLmhlYWRlcihrZGYuaXRlcmF0aW9ucywgc2FsdCwgaXYpLCBlbmNvZGVkRGF0YTogZW5jb2RlQmFzZTY0KGNpcGhlcnRleHQpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVJbmxpbmVWMyh2YWx1ZTogQ3J5cHRvRW52ZWxvcGVWMyk6IHN0cmluZyB7XG5cdGNvbnN0IGVudmVsb3BlID0gdmFsaWRhdGVFbnZlbG9wZVYzKHZhbHVlKTtcblx0Y29uc3QgY2lwaGVydGV4dCA9IGRlY29kZUJhc2U2NChlbnZlbG9wZS5lbmNvZGVkRGF0YSk7XG5cdGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMzIgKyBjaXBoZXJ0ZXh0Lmxlbmd0aCk7XG5cdC8vIFN1aXRlIDEgaXMgcGVybWFuZW50bHkgUEJLREYyLVNIQTUxMiAvIEFFUy0yNTYtR0NNLCBzYWx0MTYgLyBJVjEyIC8gdGFnMTYuXG5cdGJ5dGVzWzBdID0gMTtcblx0Y29uc3QgaXRlcmF0aW9ucyA9IGVudmVsb3BlLmtkZi5pdGVyYXRpb25zO1xuXHRieXRlc1sxXSA9IGl0ZXJhdGlvbnMgPj4+IDE2O1xuXHRieXRlc1syXSA9IGl0ZXJhdGlvbnMgPj4+IDg7XG5cdGJ5dGVzWzNdID0gaXRlcmF0aW9ucztcblx0Ynl0ZXMuc2V0KGRlY29kZUJhc2U2NChlbnZlbG9wZS5rZGYuc2FsdCksIDQpO1xuXHRieXRlcy5zZXQoZGVjb2RlQmFzZTY0KGVudmVsb3BlLmNpcGhlci5pdiksIDIwKTtcblx0Ynl0ZXMuc2V0KGNpcGhlcnRleHQsIDMyKTtcblx0cmV0dXJuIGVuY29kZUJhc2U2NChieXRlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVJbmxpbmVWMyhlbmNvZGVkOiBzdHJpbmcpOiBDcnlwdG9FbnZlbG9wZVYzIHtcblx0Y29uc3QgYnl0ZXMgPSBkZWNvZGVCYXNlNjQoZW5jb2RlZCk7XG5cdGlmIChieXRlcy5sZW5ndGggPCA0OCB8fCBieXRlc1swXSAhPT0gMSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHYzIGlubGluZSBoZWFkZXInKTtcblx0Y29uc3QgaXRlcmF0aW9ucyA9IGJ5dGVzWzFdICogNjU1MzYgKyBieXRlc1syXSAqIDI1NiArIGJ5dGVzWzNdO1xuXHR2YWxpZGF0ZUl0ZXJhdGlvbnMoaXRlcmF0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0Li4uaGVhZGVyKGl0ZXJhdGlvbnMsIGJ5dGVzLnNsaWNlKDQsIDIwKSwgYnl0ZXMuc2xpY2UoMjAsIDMyKSksXG5cdFx0ZW5jb2RlZERhdGE6IGVuY29kZUJhc2U2NChieXRlcy5zbGljZSgzMikpLFxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRpdGlvbmFsRGF0YShlbnZlbG9wZTogQ3J5cHRvRW52ZWxvcGVWMyk6IFVpbnQ4QXJyYXkge1xuXHRjb25zdCB7IHZlcnNpb24sIGtkZiwgY2lwaGVyIH0gPSBlbnZlbG9wZTtcblx0cmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShKU09OLnN0cmluZ2lmeSh7IHZlcnNpb24sIGtkZiwgY2lwaGVyIH0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVyaXZlS2V5KHBhc3N3b3JkOiBzdHJpbmcsIGVudmVsb3BlOiBDcnlwdG9FbnZlbG9wZVYzKTogUHJvbWlzZTxDcnlwdG9LZXk+IHtcblx0Y29uc3QgbWF0ZXJpYWwgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgncmF3JywgbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHBhc3N3b3JkKSwgJ1BCS0RGMicsIGZhbHNlLCBbJ2Rlcml2ZUtleSddKTtcblx0cmV0dXJuIGNyeXB0by5zdWJ0bGUuZGVyaXZlS2V5KHtcblx0XHRuYW1lOiAnUEJLREYyJywgaGFzaDogZW52ZWxvcGUua2RmLmhhc2gsXG5cdFx0c2FsdDogZGVjb2RlQmFzZTY0KGVudmVsb3BlLmtkZi5zYWx0KS5idWZmZXIgYXMgQXJyYXlCdWZmZXIsXG5cdFx0aXRlcmF0aW9uczogZW52ZWxvcGUua2RmLml0ZXJhdGlvbnMsXG5cdH0sIG1hdGVyaWFsLCB7IG5hbWU6ICdBRVMtR0NNJywgbGVuZ3RoOiBlbnZlbG9wZS5jaXBoZXIua2V5TGVuZ3RoIH0sIGZhbHNlLCBbJ2VuY3J5cHQnLCAnZGVjcnlwdCddKTtcbn1cblxuZXhwb3J0IGNsYXNzIENyeXB0b0hlbHBlclYzIGltcGxlbWVudHMgSUNyeXB0b0hlbHBlciB7XG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0RW52ZWxvcGUodGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxDcnlwdG9FbnZlbG9wZVYzPiB7XG5cdFx0Y29uc3QgbWV0YWRhdGEgPSBoZWFkZXIoVjNfREVGQVVMVF9JVEVSQVRJT05TLCBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDE2KSksIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTIpKSk7XG5cdFx0Y29uc3QgZW52ZWxvcGUgPSB7IC4uLm1ldGFkYXRhLCBlbmNvZGVkRGF0YTogJycgfTtcblx0XHRjb25zdCBrZXkgPSBhd2FpdCBkZXJpdmVLZXkocGFzc3dvcmQsIGVudmVsb3BlKTtcblx0XHRjb25zdCBjaXBoZXJ0ZXh0ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KHtcblx0XHRcdG5hbWU6ICdBRVMtR0NNJywgaXY6IGRlY29kZUJhc2U2NChtZXRhZGF0YS5jaXBoZXIuaXYpLmJ1ZmZlciBhcyBBcnJheUJ1ZmZlcixcblx0XHRcdHRhZ0xlbmd0aDogMTI4LCBhZGRpdGlvbmFsRGF0YTogYWRkaXRpb25hbERhdGEoZW52ZWxvcGUpLmJ1ZmZlciBhcyBBcnJheUJ1ZmZlcixcblx0XHR9LCBrZXksIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSh0ZXh0KSk7XG5cdFx0cmV0dXJuIHsgLi4ubWV0YWRhdGEsIGVuY29kZWREYXRhOiBlbmNvZGVCYXNlNjQobmV3IFVpbnQ4QXJyYXkoY2lwaGVydGV4dCkpIH07XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEVudmVsb3BlKHZhbHVlOiB1bmtub3duLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGVudmVsb3BlID0gdmFsaWRhdGVFbnZlbG9wZVYzKHZhbHVlKTtcblx0XHRcdGNvbnN0IGtleSA9IGF3YWl0IGRlcml2ZUtleShwYXNzd29yZCwgZW52ZWxvcGUpO1xuXHRcdFx0Y29uc3QgcGxhaW50ZXh0ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KHtcblx0XHRcdFx0bmFtZTogJ0FFUy1HQ00nLCBpdjogZGVjb2RlQmFzZTY0KGVudmVsb3BlLmNpcGhlci5pdikuYnVmZmVyIGFzIEFycmF5QnVmZmVyLFxuXHRcdFx0XHR0YWdMZW5ndGg6IDEyOCwgYWRkaXRpb25hbERhdGE6IGFkZGl0aW9uYWxEYXRhKGVudmVsb3BlKS5idWZmZXIgYXMgQXJyYXlCdWZmZXIsXG5cdFx0XHR9LCBrZXksIGRlY29kZUJhc2U2NChlbnZlbG9wZS5lbmNvZGVkRGF0YSkuYnVmZmVyIGFzIEFycmF5QnVmZmVyKTtcblx0XHRcdHJldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUocGxhaW50ZXh0KTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0VG9CYXNlNjQodGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZW5jb2RlSW5saW5lVjMoYXdhaXQgdGhpcy5lbmNyeXB0RW52ZWxvcGUodGV4dCwgcGFzc3dvcmQpKTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJhc2U2NChlbmNvZGVkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuZGVjcnlwdEVudmVsb3BlKGRlY29kZUlubGluZVYzKGVuY29kZWQpLCBwYXNzd29yZCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cbn1cbiIsICJpbXBvcnQgeyBGaWxlRGF0YSB9IGZyb20gXCIuL0ZpbGVEYXRhSGVscGVyLnRzXCI7XG5pbXBvcnQgeyBEZWNyeXB0YWJsZSB9IGZyb20gXCIuLi9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9EZWNyeXB0YWJsZS50c1wiO1xuaW1wb3J0IHsgQ3J5cHRvSGVscGVyIH0gZnJvbSBcIi4vQ3J5cHRvSGVscGVyLnRzXCI7XG5pbXBvcnQgeyBJQ3J5cHRvSGVscGVyIH0gZnJvbSBcIi4vSUNyeXB0b0hlbHBlci50c1wiO1xuaW1wb3J0IHsgQ3J5cHRvSGVscGVyMjMwNCB9IGZyb20gXCIuL0NyeXB0b0hlbHBlcjIzMDQudHNcIjtcbmltcG9ydCB7IENyeXB0b0hlbHBlck9ic29sZXRlIH0gZnJvbSBcIi4vQ3J5cHRvSGVscGVyT2Jzb2xldGUudHNcIjtcblxuaW1wb3J0IHsgQ3J5cHRvSGVscGVyVjMgfSBmcm9tICcuL0NyeXB0b0hlbHBlclYzLnRzJztcblxuZXhwb3J0IGNsYXNzIENyeXB0b0hlbHBlckZhY3Rvcnl7XG5cblx0cHVibGljIHN0YXRpYyBjcnlwdG9IZWxwZXIyMzA0X3YyID0gbmV3IENyeXB0b0hlbHBlcjIzMDQoIDE2LCAxNiwgMjEwMDAwICk7XG5cdC8vIFBCS0RGMi1ITUFDLVNIQTUxMiB1c2VzIGEgMjIwLDAwMC1pdGVyYXRpb24gd29yayBmYWN0b3IgKE9XQVNQKS5cblx0Ly8gVjMgc3RvcmVzIGl0cyBwYXJhbWV0ZXJzIGluIGFuIGF1dGhlbnRpY2F0ZWQgZW52ZWxvcGUuXG5cdHB1YmxpYyBzdGF0aWMgY3J5cHRvSGVscGVyX3YzID0gbmV3IENyeXB0b0hlbHBlclYzKCk7XG5cblx0cHVibGljIHN0YXRpYyBCdWlsZERlZmF1bHQoKTogQ3J5cHRvSGVscGVyVjN7XG5cdFx0cmV0dXJuIHRoaXMuY3J5cHRvSGVscGVyX3YzO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21GaWxlRGF0YU9yVGhyb3coIGRhdGE6IEZpbGVEYXRhICkgOiBJQ3J5cHRvSGVscGVyIHtcblx0XHRjb25zdCByZXN1bHQgPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbUZpbGVEYXRhT3JOdWxsKGRhdGEpO1xuXHRcdGlmICggcmVzdWx0ICE9IG51bGwgKXtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvciggYFVuYWJsZSB0byBkZXRlcm1pbmUgSUNyeXB0b0hlbHBlciBmb3IgRmlsZSB2ZXIgJHtkYXRhLnZlcnNpb259YCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIEJ1aWxkRnJvbUZpbGVEYXRhT3JOdWxsKCBkYXRhOiBGaWxlRGF0YSApIDogSUNyeXB0b0hlbHBlciB8IG51bGwge1xuXHRcdGlmICggZGF0YS52ZXJzaW9uID09ICcxLjAnICl7XG5cdFx0XHRyZXR1cm4gbmV3IENyeXB0b0hlbHBlcigpO1xuXHRcdH1cblxuXHRcdC8vIG5vdGVcdFx0XHRcdHYyLjBcdENyeXB0b0hlbHBlcjIzMDRcblx0XHRpZiAoIGRhdGEudmVyc2lvbiA9PSAnMi4wJyApe1xuXHRcdFx0cmV0dXJuIHRoaXMuY3J5cHRvSGVscGVyMjMwNF92Mjtcblx0XHR9XG5cblx0XHQvLyBub3RlIHYzLjA6IGF1dGhlbnRpY2F0ZWQsIHNlbGYtZGVzY3JpYmluZyBlbnZlbG9wZVxuXHRcdGlmICggZGF0YS52ZXJzaW9uID09ICczLjAnICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcnlwdG9IZWxwZXJfdjM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIEJ1aWxkRnJvbURlY3J5cHRhYmxlT3JUaHJvdyggZGVjcnlwdGFibGU6IERlY3J5cHRhYmxlICkgOiBJQ3J5cHRvSGVscGVyIHtcblx0XHRjb25zdCByZXN1bHQgPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbURlY3J5cHRhYmxlT3JOdWxsKCBkZWNyeXB0YWJsZSApO1xuXG5cdFx0aWYgKHJlc3VsdCAhPSBudWxsKXtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvciggYFVuYWJsZSB0byBkZXRlcm1pbmUgSUNyeXB0b0hlbHBlciBmb3IgRGVjcnlwdGFibGUgdmVyICR7ZGVjcnlwdGFibGUudmVyc2lvbi50b1N0cmluZygpfWApO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21EZWNyeXB0YWJsZU9yTnVsbCggZGVjcnlwdGFibGU6IERlY3J5cHRhYmxlICkgOiBJQ3J5cHRvSGVscGVyIHwgbnVsbCB7XG5cdFx0Ly8gVmVyc2lvbnNcblx0XHQvLyBpbnBsYWNlIG9yaWdpbmFsXHRfUFJFRklYX09CU09MRVRFID0gJyUlXHVEODNEXHVERDEwICcgIENyeXB0b0hlbHBlck9ic29sZXRlXG5cdFx0XG5cdFx0Ly8gaW5wbGFjZSBhbHBoYVx0X1BSRUZJWF9BID0gJyUlXHVEODNEXHVERDEwXHUwM0IxICdcdFx0Q3J5cHRvSGVscGVyXG5cdFx0Ly8gXHRcdFx0XHRcdF9QUkVGSVhfQV9WSVNJQkxFID0gJ1x1RDgzRFx1REQxMFx1MDNCMSAnXHRDcnlwdG9IZWxwZXJcblxuXHRcdC8vIGlucGxhY2UgYmV0YSBcdF9QUkVGSVhfQiA9ICclJVx1RDgzRFx1REQxMFx1MDNCMiAnXHRcdENyeXB0b0hlbHBlcjIzMDQoIDE2LCAxNiwgMjEwMDAwIClcblx0XHQvL1x0XHRcdFx0XHRfUFJFRklYX0JfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjIgJ1x0Q3J5cHRvSGVscGVyMjMwNCggMTYsIDE2LCAyMTAwMDAgKVxuXHRcdFxuXHRcdC8vIGlucGxhY2UgZ2FtbWE6IGNvbXBhY3Qgc3VpdGUvaXRlcmF0aW9ucy9zYWx0L0lWL2NpcGhlcnRleHQgZW52ZWxvcGVcblx0XHQvLyBCb3RoIGhpZGRlbiBhbmQgdmlzaWJsZSBnYW1tYSBtYXJrZXJzIHVzZSBDcnlwdG9IZWxwZXJWMy5cblxuXHRcdGlmICggZGVjcnlwdGFibGUudmVyc2lvbiA9PSAwICl7XG5cdFx0XHRyZXR1cm4gbmV3IENyeXB0b0hlbHBlck9ic29sZXRlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWNyeXB0YWJsZS52ZXJzaW9uID09IDEgKXtcblx0XHRcdHJldHVybiBuZXcgQ3J5cHRvSGVscGVyKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWNyeXB0YWJsZS52ZXJzaW9uID09IDIgKXtcblx0XHRcdHJldHVybiB0aGlzLmNyeXB0b0hlbHBlcjIzMDRfdjI7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWNyeXB0YWJsZS52ZXJzaW9uID09IDMgKXtcblx0XHRcdHJldHVybiB0aGlzLmNyeXB0b0hlbHBlcl92Mztcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG59XG4iLCAiaW1wb3J0IHsgQ3J5cHRvSGVscGVyRmFjdG9yeSB9IGZyb20gXCIuL0NyeXB0b0hlbHBlckZhY3RvcnkudHNcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVFbnZlbG9wZVYzIH0gZnJvbSAnLi9DcnlwdG9IZWxwZXJWMy50cyc7XG5pbXBvcnQgdHlwZSB7IENyeXB0b0VudmVsb3BlVjMgfSBmcm9tICcuL0NyeXB0b0hlbHBlclYzLnRzJztcblxuY29uc3QgYmxhbmtGaWxlID0gU3ltYm9sKCdibGFuay1maWxlJyk7XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGF0YSB7XG5cdFxuXHRwdWJsaWMgdmVyc2lvbiA9ICcxLjAnO1xuXHRwdWJsaWMgaGludDogc3RyaW5nO1xuXHRwdWJsaWMgZW5jb2RlZERhdGE6c3RyaW5nO1xuXHRwdWJsaWMga2RmPzogQ3J5cHRvRW52ZWxvcGVWM1sna2RmJ107XG5cdHB1YmxpYyBjaXBoZXI/OiBDcnlwdG9FbnZlbG9wZVYzWydjaXBoZXInXTtcblx0cHVibGljIFtibGFua0ZpbGVdPzogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvciggdmVyc2lvbjpzdHJpbmcsIGhpbnQ6c3RyaW5nLCBlbmNvZGVkRGF0YTpzdHJpbmcgKXtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRcdHRoaXMuaGludCA9IGhpbnQ7XG5cdFx0dGhpcy5lbmNvZGVkRGF0YSA9IGVuY29kZWREYXRhO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGF0YUhlbHBlcntcblxuXHRwdWJsaWMgc3RhdGljIERFRkFVTFRfVkVSU0lPTiA9ICczLjAnO1xuXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgZW5jcnlwdCggcGFzczogc3RyaW5nLCBoaW50OnN0cmluZywgdGV4dDpzdHJpbmcgKSA6IFByb21pc2U8RmlsZURhdGE+e1xuXHRcdGNvbnN0IGNyeXB0byA9IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGREZWZhdWx0KCk7XG5cdFx0Y29uc3QgZW52ZWxvcGUgPSBhd2FpdCBjcnlwdG8uZW5jcnlwdEVudmVsb3BlKHRleHQsIHBhc3MpO1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBGaWxlRGF0YShlbnZlbG9wZS52ZXJzaW9uLCBoaW50LCBlbnZlbG9wZS5lbmNvZGVkRGF0YSksIHsga2RmOiBlbnZlbG9wZS5rZGYsIGNpcGhlcjogZW52ZWxvcGUuY2lwaGVyIH0pO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBhc3luYyBkZWNyeXB0KCBkYXRhOiBGaWxlRGF0YSwgcGFzczpzdHJpbmcgKSA6IFByb21pc2U8c3RyaW5nfG51bGw+e1xuXHRcdGlmIChkYXRhW2JsYW5rRmlsZV0pIHJldHVybiAnJztcblx0XHRpZiAoZGF0YS52ZXJzaW9uID09PSAnMy4wJykge1xuXHRcdFx0cmV0dXJuIGF3YWl0IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGREZWZhdWx0KCkuZGVjcnlwdEVudmVsb3BlKGRhdGEsIHBhc3MpO1xuXHRcdH1cblx0XHRpZiAoIGRhdGEuZW5jb2RlZERhdGEgPT0gJycgKXtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgY3J5cHRvID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yVGhyb3coIGRhdGEgKTtcblx0XHRyZXR1cm4gYXdhaXQgY3J5cHRvLmRlY3J5cHRGcm9tQmFzZTY0KCBkYXRhLmVuY29kZWREYXRhLCBwYXNzICk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEpzb25GaWxlRW5jb2Rpbmcge1xuXG5cdHB1YmxpYyBzdGF0aWMgZW5jb2RlKCBkYXRhOiBGaWxlRGF0YSApIDogc3RyaW5ne1xuXHRcdC8vY29uc29sZS5kZWJ1ZyggJ0pzb25GaWxlRW5jb2RpbmcuZW5jb2RlJywge2RhdGF9ICk7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBpc0VuY29kZWQoIHRleHQ6IHN0cmluZyApIDogYm9vbGVhbiB7XG5cdFx0dHJ5IHtcblx0XHRcdEpTT04ucGFyc2UoIHRleHQgKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGVycm9yICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBkZWNvZGUoIGVuY29kZWRUZXh0OnN0cmluZyApIDogRmlsZURhdGEge1xuXHRcdC8vY29uc29sZS5kZWJ1ZygnSnNvbkZpbGVFbmNvZGluZy5kZWNvZGUnLHtlbmNvZGVkVGV4dH0pO1xuXHRcdGlmICggZW5jb2RlZFRleHQgPT09ICcnICl7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRmlsZURhdGEoRmlsZURhdGFIZWxwZXIuREVGQVVMVF9WRVJTSU9OLCAnJywgJycpLCB7IFtibGFua0ZpbGVdOiB0cnVlIH0pO1xuXHRcdH1cblx0XHRjb25zdCBwYXJzZWQ6IHVua25vd24gPSBKU09OLnBhcnNlKCBlbmNvZGVkVGV4dCApO1xuXHRcdGlmICggcGFyc2VkID09PSBudWxsIHx8IHR5cGVvZiBwYXJzZWQgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkocGFyc2VkKSApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBGaWxlRGF0YSBKU09OJyk7XG5cdFx0fVxuXHRcdGNvbnN0IGRhdGEgPSBwYXJzZWQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cdFx0aWYgKFxuXHRcdFx0dHlwZW9mIGRhdGEudmVyc2lvbiAhPT0gJ3N0cmluZydcblx0XHRcdHx8IHR5cGVvZiBkYXRhLmhpbnQgIT09ICdzdHJpbmcnXG5cdFx0XHR8fCB0eXBlb2YgZGF0YS5lbmNvZGVkRGF0YSAhPT0gJ3N0cmluZydcblx0XHQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBGaWxlRGF0YSBKU09OJyk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLnZlcnNpb24gPT09ICczLjAnKSB7XG5cdFx0XHRjb25zdCBlbnZlbG9wZSA9IHZhbGlkYXRlRW52ZWxvcGVWMyhkYXRhKTtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBGaWxlRGF0YShlbnZlbG9wZS52ZXJzaW9uLCBkYXRhLmhpbnQsIGVudmVsb3BlLmVuY29kZWREYXRhKSwgeyBrZGY6IGVudmVsb3BlLmtkZiwgY2lwaGVyOiBlbnZlbG9wZS5jaXBoZXIgfSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgRmlsZURhdGEoIGRhdGEudmVyc2lvbiwgZGF0YS5oaW50LCBkYXRhLmVuY29kZWREYXRhICk7XG5cdH1cbn1cbiIsICJjb25zdCBFTkNSWVBURURfRklMRV9FWFRFTlNJT05fRU5DUllQVEVEID0gJ2VuY3J5cHRlZCc7XG5jb25zdCBFTkNSWVBURURfRklMRV9FWFRFTlNJT05fTURFTkMgPSAnbWRlbmMnO1xuXG5leHBvcnQgY29uc3QgRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX0RFRkFVTFQgPSBFTkNSWVBURURfRklMRV9FWFRFTlNJT05fTURFTkM7XG5cblxuZXhwb3J0IGNvbnN0IEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTlMgPSBbXG5cdEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTl9NREVOQyxcblx0RU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX0VOQ1JZUFRFRFxuXTsiLCAiXG5leHBvcnQgY29uc3QgRU5DUllQVEVEX0lDT04gPSAnXHVEODNEXHVERDEwJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0MgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjMgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0NfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjMgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0IgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjIgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0JfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjIgJztcblxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfQSA9ICclJVx1RDgzRFx1REQxMFx1MDNCMSAnO1xuZXhwb3J0IGNvbnN0IF9QUkVGSVhfQV9WSVNJQkxFID0gJ1x1RDgzRFx1REQxMFx1MDNCMSAnO1xuZXhwb3J0IGNvbnN0IF9QUkVGSVhfT0JTT0xFVEUgPSAnJSVcdUQ4M0RcdUREMTAgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX09CU09MRVRFX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwICc7XG5cbmV4cG9ydCBjb25zdCBfUFJFRklYX0VOQ09ERV9ERUZBVUxUID0gX1BSRUZJWF9DO1xuZXhwb3J0IGNvbnN0IF9QUkVGSVhfRU5DT0RFX0RFRkFVTFRfVklTSUJMRSA9IF9QUkVGSVhfQ19WSVNJQkxFO1xuXG4vLyBTaG91bGQgYmUgbGlzdGVkIGJ5IGV2YWx1YXRpb24gcHJpb3JpdHlcbmV4cG9ydCBjb25zdCBfUFJFRklYRVMgPSBbXG5cdF9QUkVGSVhfQyxcblx0X1BSRUZJWF9DX1ZJU0lCTEUsXG5cdF9QUkVGSVhfQixcblx0X1BSRUZJWF9CX1ZJU0lCTEUsXG5cdF9QUkVGSVhfQSxcblx0X1BSRUZJWF9BX1ZJU0lCTEUsXG5cdF9QUkVGSVhfT0JTT0xFVEUsXG5cdF9QUkVGSVhfT0JTT0xFVEVfVklTSUJMRVxuXTtcblxuZXhwb3J0IGNvbnN0IF9TVUZGSVhfV0lUSF9DT01NRU5UID0gJyBcdUQ4M0RcdUREMTAlJSc7XG5leHBvcnQgY29uc3QgX1NVRkZJWF9OT19DT01NRU5UID0gJyBcdUQ4M0RcdUREMTAnO1xuXG4vLyBTaG91bGQgYmUgbGlzdGVkIGJ5IGV2YWx1YXRpb24gcHJpb3JpdHlcbmV4cG9ydCBjb25zdCBfU1VGRklYRVMgPSBbXG5cdF9TVUZGSVhfV0lUSF9DT01NRU5ULFxuXHRfU1VGRklYX05PX0NPTU1FTlRcbl1cblxuZXhwb3J0IGNvbnN0IF9ISU5UID0gJ1x1RDgzRFx1RENBMSc7XG4iLCAiZXhwb3J0IGNsYXNzIERlY3J5cHRhYmxle1xuXHR2ZXJzaW9uOiBudW1iZXI7XG5cdGJhc2U2NENpcGhlclRleHQ6c3RyaW5nO1xuXHRoaW50OnN0cmluZztcblx0c2hvd0luUmVhZGluZ1ZpZXc6IGJvb2xlYW47XG59IiwgImltcG9ydCB7IERlY3J5cHRhYmxlIH0gZnJvbSBcIi4vRGVjcnlwdGFibGUudHNcIjtcbmltcG9ydCB7IF9ISU5ULCBfUFJFRklYRVMsIF9QUkVGSVhfQSwgX1BSRUZJWF9BX1ZJU0lCTEUsIF9QUkVGSVhfQiwgX1BSRUZJWF9CX1ZJU0lCTEUsIF9QUkVGSVhfQywgX1BSRUZJWF9DX1ZJU0lCTEUsIF9QUkVGSVhfT0JTT0xFVEUsIF9QUkVGSVhfT0JTT0xFVEVfVklTSUJMRSwgX1NVRkZJWEVTIH0gZnJvbSBcIi4vRmVhdHVyZUlucGxhY2VDb25zdGFudHMudHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVJbnBsYWNlVGV4dEFuYWx5c2lze1xuXHRwcm9jZXNzZWRUZXh0OnN0cmluZztcblx0aXNFbXB0eTogYm9vbGVhbjtcblx0XG5cdHByZWZpeDogc3RyaW5nO1xuXHRzdWZmaXg6IHN0cmluZztcblxuXHRoYXNPYnNvbGV0ZUVuY3J5cHRlZFByZWZpeDogYm9vbGVhbjtcblx0aGFzRW5jcnlwdGVkUHJlZml4OiBib29sZWFuO1xuXHRoYXNFbmNyeXB0ZWRTdWZmaXg6IGJvb2xlYW47XG5cdGNhbkRlY3J5cHQ6IGJvb2xlYW47XG5cdGNhbkVuY3J5cHQ6IGJvb2xlYW47XG5cdGNvbnRhaW5zRW5jcnlwdGVkTWFya2VyczogYm9vbGVhbjtcblx0ZGVjcnlwdGFibGU/IDogRGVjcnlwdGFibGU7XG5cblx0Y29uc3RydWN0b3IodGV4dDogc3RyaW5nKXtcblx0XHR0aGlzLnByb2Nlc3ModGV4dCk7XG5cdH1cblxuXHRwcml2YXRlIHByb2Nlc3MoIHRleHQ6IHN0cmluZyApIDogdm9pZHtcblx0XHRcblx0XHR0aGlzLnByb2Nlc3NlZFRleHQgPSB0ZXh0O1xuXG5cdFx0dGhpcy5pc0VtcHR5ID0gdGV4dC5sZW5ndGggPT09IDA7XG5cblx0XHR0aGlzLnByZWZpeCA9IF9QUkVGSVhFUy5maW5kKCAocHJlZml4KSA9PiB0ZXh0LnN0YXJ0c1dpdGgocHJlZml4KSApID8/ICcnO1xuXHRcdHRoaXMuc3VmZml4ID0gX1NVRkZJWEVTLmZpbmQoIChzdWZmaXgpID0+IHRleHQuZW5kc1dpdGgoc3VmZml4KSApID8/ICcnO1xuXHRcdFxuXHRcdHRoaXMuaGFzRW5jcnlwdGVkUHJlZml4ID0gdGhpcy5wcmVmaXgubGVuZ3RoID4gMDtcblx0XHR0aGlzLmhhc0VuY3J5cHRlZFN1ZmZpeCA9IHRoaXMuc3VmZml4Lmxlbmd0aCA+IDA7XG5cblx0XHR0aGlzLmhhc09ic29sZXRlRW5jcnlwdGVkUHJlZml4ID0gdGhpcy5wcmVmaXggPT09IF9QUkVGSVhfT0JTT0xFVEUgfHwgdGhpcy5wcmVmaXggPT09IF9QUkVGSVhfT0JTT0xFVEVfVklTSUJMRTtcblxuXHRcdHRoaXMuY29udGFpbnNFbmNyeXB0ZWRNYXJrZXJzID0gWy4uLl9QUkVGSVhFUywgLi4uX1NVRkZJWEVTXS5zb21lKCAobWFya2VyKSA9PiB0ZXh0LmluY2x1ZGVzKG1hcmtlciApKTtcblxuXHRcdHRoaXMuY2FuRGVjcnlwdCA9IHRoaXMuaGFzRW5jcnlwdGVkUHJlZml4ICYmIHRoaXMuaGFzRW5jcnlwdGVkU3VmZml4O1xuXHRcdHRoaXMuY2FuRW5jcnlwdCA9ICF0aGlzLmhhc0VuY3J5cHRlZFByZWZpeCAmJiAhdGhpcy5jb250YWluc0VuY3J5cHRlZE1hcmtlcnM7XG5cdFx0XG5cdFx0aWYgKHRoaXMuY2FuRGVjcnlwdCl7XG5cdFx0XHRjb25zdCBkZWNyeXB0YWJsZSA9IHRoaXMucGFyc2VEZWNyeXB0YWJsZUNvbnRlbnQodGV4dCk7XG5cblx0XHRcdGlmICggZGVjcnlwdGFibGUgIT0gbnVsbCApe1xuXHRcdFx0XHR0aGlzLmRlY3J5cHRhYmxlID0gZGVjcnlwdGFibGU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5jYW5EZWNyeXB0ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZURlY3J5cHRhYmxlQ29udGVudCh0ZXh0OiBzdHJpbmcpIDogRGVjcnlwdGFibGUgfCBudWxsIHtcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgRGVjcnlwdGFibGUoKTtcblxuXHRcdGlmIChcblx0XHRcdCF0aGlzLmhhc0VuY3J5cHRlZFByZWZpeFxuXHRcdFx0fHwgIXRoaXMuaGFzRW5jcnlwdGVkU3VmZml4XG5cdFx0KXtcblx0XHRcdHJldHVybiBudWxsOyAvLyBpbnZhbGlkIGZvcm1hdFxuXHRcdH1cblx0XHRcblx0XHRpZiAoIHRoaXMuaGFzT2Jzb2xldGVFbmNyeXB0ZWRQcmVmaXggKXtcblx0XHRcdHJlc3VsdC52ZXJzaW9uID0gMDtcblx0XHR9ZWxzZSBpZiAoIHRoaXMucHJlZml4ID09IF9QUkVGSVhfQyB8fCB0aGlzLnByZWZpeCA9PSBfUFJFRklYX0NfVklTSUJMRSApe1xuXHRcdFx0cmVzdWx0LnZlcnNpb24gPSAzO1xuXHRcdH1lbHNlIGlmICggdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9CIHx8IHRoaXMucHJlZml4ID09IF9QUkVGSVhfQl9WSVNJQkxFICl7XG5cdFx0XHRyZXN1bHQudmVyc2lvbiA9IDI7XG5cdFx0fWVsc2UgaWYgKCB0aGlzLnByZWZpeCA9PSBfUFJFRklYX0EgfHwgdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9BX1ZJU0lCTEUgKXtcblx0XHRcdHJlc3VsdC52ZXJzaW9uID0gMTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgbWFya2VycyBmcm9tIHN0YXJ0IGFuZCBlbmRcdFxuXHRcdGNvbnN0IGNvbnRlbnQgPSB0ZXh0LnN1YnN0cmluZyh0aGlzLnByZWZpeC5sZW5ndGgsIHRleHQubGVuZ3RoIC0gdGhpcy5zdWZmaXgubGVuZ3RoKTtcblxuXHRcdGlmICggWy4uLl9QUkVGSVhFUywgLi4uX1NVRkZJWEVTXS5zb21lKCAobWFya2VyKSA9PiBjb250ZW50LmluY2x1ZGVzKCBtYXJrZXIgKSkgKXtcblx0XHRcdC8vIGNvbnRlbnQsIGl0c2VsZiBoYXMgbWFya2Vyc1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gY2hlY2sgaWYgdGhlcmUgaXMgYSBoaW50XG5cdFx0aWYgKGNvbnRlbnQuc3Vic3RyaW5nKDAsX0hJTlQubGVuZ3RoKSA9PSBfSElOVCl7XG5cdFx0XHRjb25zdCBlbmRIaW50TWFya2VyID0gY29udGVudC5pbmRleE9mKF9ISU5ULF9ISU5ULmxlbmd0aCk7XG5cdFx0XHRpZiAoZW5kSGludE1hcmtlcjwwKXtcblx0XHRcdFx0cmV0dXJuIG51bGw7IC8vIGludmFsaWQgZm9ybWF0XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQuaGludCA9IGNvbnRlbnQuc3Vic3RyaW5nKF9ISU5ULmxlbmd0aCxlbmRIaW50TWFya2VyKVxuXHRcdFx0cmVzdWx0LmJhc2U2NENpcGhlclRleHQgPSBjb250ZW50LnN1YnN0cmluZyhlbmRIaW50TWFya2VyK19ISU5ULmxlbmd0aCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXN1bHQuYmFzZTY0Q2lwaGVyVGV4dCA9IGNvbnRlbnQ7XG5cdFx0fVxuXHRcdHJlc3VsdC5zaG93SW5SZWFkaW5nVmlldyA9ICF0aGlzLnByZWZpeC5pbmNsdWRlcyhcIiUlXCIpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVSxNQUFNO0FBRXRCLGFBQU87QUFBQSxJQUNSO0FBQUE7QUFBQTs7Ozs7O0FDRUEsV0FBQSxVQUFTLFNBQVNBLGVBQWMsVUFBWTtBQUFaLFVBQUEsYUFBQSxRQUFBO0FBQUEsbUJBQUE7TUFBWTtBQUMxQyxVQUFJLFlBQVksTUFBTSxpQkFBaUI7QUFDckMsY0FBTSxJQUFJLFVBQVUscUdBQXFHLFdBQVcsdUNBQXVDLE1BQU0sa0JBQWtCLEdBQUc7O0FBR3hNLFVBQU0sdUJBQXVCLE1BQU07QUFDbkMsWUFBTSxvQkFBb0IsU0FBQyxHQUFHQyxRQUFLO0FBQU0sZUFBQUE7TUFBQTtBQUN6QyxVQUFNLFFBQVEsSUFBSSxNQUFLLEVBQUc7QUFDMUIsWUFBTSxvQkFBb0I7QUFHMUIsVUFBSSxVQUFVLFFBQVEs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QU0sT0FDTixLQUFLLE9BQVMsS0FBSyxPQUNuQixNQUFNLE9BQ04sTUFBTSxPQUNOLEtBQUssT0FBUyxLQUFLLE9BQ25CLEtBQUssT0FBUyxLQUFLLE9BQ25CLEtBQUssT0FBUyxLQUFLLE9BQ25CLEtBQUssT0FBUyxLQUFLLE9BQ25CLEtBQUssT0FBUyxLQUFLLE9BQ25CLE1BQU0sUUFDTixLQUFLLFFBQVMsS0FBSyxRQUNuQixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFNBQ04sS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUssU0FDcEIsTUFBTSxTQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssV0FDckIsS0FBSyxXQUFZLEtBQUs7QUFDM0I7QUFFQSxTQUFTLFlBQVksR0FBRztBQUN2QixTQUFPLE1BQU0sU0FDVCxLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSztBQUN6QjtBQUVBLFNBQVMsT0FBTyxHQUFHO0FBQ2xCLFNBQU8sS0FBSyxRQUFVLEtBQUssUUFDdkIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxTQUNOLE1BQU0sU0FDTixNQUFNLFNBQ04sS0FBSyxTQUFVLEtBQUssU0FDcEIsTUFBTSxTQUNOLEtBQUssU0FBVSxLQUFLLFNBQ3BCLE1BQU0sU0FDTixNQUFNLFNBQ04sTUFBTSxTQUNOLE1BQU0sU0FDTixNQUFNLFNBQ04sTUFBTSxTQUNOLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVyxLQUFLLFNBQ3JCLE1BQU0sU0FDTixNQUFNLFNBQ04sS0FBSyxTQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLE1BQU0sVUFDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixNQUFNLFVBQ04sTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sTUFBTSxVQUNOLE1BQU0sVUFDTixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLO0FBQzFCOzs7QUN6V0EsU0FBUyxTQUFTLFdBQVc7QUFDNUIsTUFBSSxDQUFDLE9BQU8sY0FBYyxTQUFTLEdBQUc7QUFDckMsVUFBTSxJQUFJLFVBQVUsZ0NBQWdDLE9BQU8sU0FB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QUFBQSxJQUNILE9BQU8sQ0FBQyxLQUFLLE1BQU07QUFBQSxJQUNuQixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDYjtBQUNKLENBQUUsR0FBRyxDQUFDLFNBQVMsSUFBSSxtQkFBbUIsRUFBRSxXQUFZLEtBQUssV0FBdUIsS0FBSyxLQUFpQixDQUFFLEVBRXZHLFFBQVEsV0FBVyw2RUFBOEUsQ0FBQyxVQUFVLE1BQU0sT0FBUztBQUFBLEVBQ3hILFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxJQUNKLE9BQU8sQ0FBQyxLQUFLLE9BQU8sSUFBSTtBQUFBLElBQ3hCLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osT0FBTyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ25CLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxFQUNiO0FBQ0osQ0FBRSxHQUFHLENBQUMsU0FBUyxJQUFJLHNCQUFzQixFQUFFLFdBQVksS0FBSyxXQUF1QixLQUFLLFFBQWtCLEtBQUssV0FBVyxLQUFNLENBQUUsRUFFakksY0FBYyxFQUNkLEtBQUssRUFDTCxLQUFNLElBQUssRUFDWCxRQUFRO0FBQUEsRUFDTCxDQUFDLFdBQVcsb0dBQW9HO0FBQUEsRUFDaEgsQ0FBQywrQkFBK0Isb0VBQW9FO0FBQUEsRUFDcEcsQ0FBQyx5REFBeUQsc0NBQXNDO0FBQ2xHLENBQUMsRUFDRixNQUFNOyIsCiAgIm5hbWVzIjogWyJnZXRDYWxsZXJGaWxlIiwgInN0YWNrIiwgIl9hIiwgImVtb2ppUmVnZXgiLCAiY29kZSIsICJyZXNvbHZlIiwgIkRlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5IiwgIm1peGluIiwgImtleSIsICJhcmdzIiwgInZhbHVlIiwgInZhbCIsICJhcmd2IiwgImVudiIsICJhbGlhc2VzIiwgImRlZmF1bHRzIiwgImd1ZXNzVHlwZSIsICJyZXF1aXJlIiwgInJlc29sdmUiLCAicGF0aCIsICJkaXJuYW1lIiwgInJlc29sdmUiLCAicmVhZEZpbGVTeW5jIiwgInN0YXRTeW5jIiwgImZvcm1hdCIsICJyZXNvbHZlIiwgInkxOG4iLCAieTE4biIsICJjcmVhdGVSZXF1aXJlIiwgInJlYWRGaWxlU3luYyIsICJyZWFkZGlyU3luYyIsICJyZXF1aXJlIiwgImRpcm5hbWUiLCAicmVzb2x2ZSIsICJnZXRDYWxsZXJGaWxlIiwgInNoaW0iLCAiY21kIiwgInJlc3VsdCIsICJ1c2FnZSIsICJ2YWxpZGF0aW9uIiwgInNoaW0iLCAiY29tbWFuZCIsICJjIiwgInNoaW0iLCAiZmFpbCIsICJjb21tYW5kIiwgInVpIiwgInVzYWdlIiwgInNlcCIsICJtYXhXaWR0aCIsICJ1c2FnZSIsICJjb21tYW5kIiwgInNoaW0iLCAiX2EiLCAiX2IiLCAiX2MiLCAiZGVzYyIsICJhcmd2IiwgInVzYWdlIiwgInNoaW0iLCAiX2EiLCAia2V5IiwgInNoaW0iLCAic2hpbSIsICJfYSIsICJyZXNvbHZlIiwgInR5cGUiLCAia2V5IiwgInZhbHVlIiwgIl9iIiwgIl9jIiwgInZhbGlkYXRpb24iLCAiayIsICJjb21wbGV0aW9uIiwgInZlY3RvclNpemUiLCAiaXRlcmF0aW9ucyIsICJzYWx0IiwgInV0ZjhFbmNvZGVyIiwgInV0ZjhEZWNvZGVyIiwgIml0ZXJhdGlvbnMiLCAic2FsdCIsICJjcnlwdG8iLCAiZm9ybWF0Il0KfQo=
