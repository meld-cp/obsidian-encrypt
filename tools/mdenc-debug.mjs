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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2Vtb2ppLXJlZ2V4L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9nZXQtY2FsbGVyLWZpbGUvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2xpYi9wbGF0Zm9ybS1zaGltcy9lc20ubWpzIiwgIi4uL25vZGVfbW9kdWxlcy9jbGl1aS9idWlsZC9saWIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Fuc2ktcmVnZXgvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2dldC1lYXN0LWFzaWFuLXdpZHRoL2xvb2t1cC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZ2V0LWVhc3QtYXNpYW4td2lkdGgvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3JhcC1hbnNpL25vZGVfbW9kdWxlcy9hbnNpLXN0eWxlcy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvd3JhcC1hbnNpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9jbGl1aS9pbmRleC5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL2VzY2FsYWRlL3N5bmMvaW5kZXgubWpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL3N0cmluZy11dGlscy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi90b2tlbml6ZS1hcmctc3RyaW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy1wYXJzZXIvYnVpbGQvbGliL3lhcmdzLXBhcnNlci10eXBlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MtcGFyc2VyL2J1aWxkL2xpYi95YXJncy1wYXJzZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9wcm9jZXNzLWFyZ3YuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3kxOG4vYnVpbGQvbGliL3BsYXRmb3JtLXNoaW1zL25vZGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3kxOG4vYnVpbGQvbGliL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95MThuL2luZGV4Lm1qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3R5cGluZ3MvY29tbW9uLXR5cGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvaXMtcHJvbWlzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3llcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3BhcnNlLWNvbW1hbmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi9hcmdzZXJ0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvbWlkZGxld2FyZS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2NvbW1hbmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9vYmotZmlsdGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXRpbHMvc2V0LWJsb2NraW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIvdXNhZ2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi9jb21wbGV0aW9uLXRlbXBsYXRlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL2NvbXBsZXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9sZXZlbnNodGVpbi5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvYnVpbGQvbGliL3ZhbGlkYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3lhcmdzL2J1aWxkL2xpYi91dGlscy9hcHBseS1leHRlbmRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy95YXJncy9idWlsZC9saWIveWFyZ3MtZmFjdG9yeS5qcyIsICIuLi9ub2RlX21vZHVsZXMveWFyZ3MvaW5kZXgubWpzIiwgIi4uL3NyYy90b29scy9tZGVuYy50cyIsICIuLi9zcmMvc2VydmljZXMvQ3J5cHRvSGVscGVyLnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9DcnlwdG9IZWxwZXIyMzA0LnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9DcnlwdG9IZWxwZXJPYnNvbGV0ZS50cyIsICIuLi9zcmMvc2VydmljZXMvQ3J5cHRvSGVscGVyVjMudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0NyeXB0b0hlbHBlckZhY3RvcnkudHMiLCAiLi4vc3JjL3NlcnZpY2VzL0ZpbGVEYXRhSGVscGVyLnRzIiwgIi4uL3NyYy9zZXJ2aWNlcy9Db25zdGFudHMudHMiLCAiLi4vc3JjL2ZlYXR1cmVzL2ZlYXR1cmUtaW5wbGFjZS1lbmNyeXB0L0ZlYXR1cmVJbnBsYWNlQ29uc3RhbnRzLnRzIiwgIi4uL3NyYy9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9EZWNyeXB0YWJsZS50cyIsICIuLi9zcmMvZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvZmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuXHQvLyBodHRwczovL210aHMuYmUvZW1vamlcblx0cmV0dXJuIC9bIyowLTldXFx1RkUwRj9cXHUyMEUzfFtcXHhBOVxceEFFXFx1MjAzQ1xcdTIwNDlcXHUyMTIyXFx1MjEzOVxcdTIxOTQtXFx1MjE5OVxcdTIxQTlcXHUyMUFBXFx1MjMxQVxcdTIzMUJcXHUyMzI4XFx1MjNDRlxcdTIzRUQtXFx1MjNFRlxcdTIzRjFcXHUyM0YyXFx1MjNGOC1cXHUyM0ZBXFx1MjRDMlxcdTI1QUFcXHUyNUFCXFx1MjVCNlxcdTI1QzBcXHUyNUZCXFx1MjVGQ1xcdTI1RkVcXHUyNjAwLVxcdTI2MDRcXHUyNjBFXFx1MjYxMVxcdTI2MTRcXHUyNjE1XFx1MjYxOFxcdTI2MjBcXHUyNjIyXFx1MjYyM1xcdTI2MjZcXHUyNjJBXFx1MjYyRVxcdTI2MkZcXHUyNjM4LVxcdTI2M0FcXHUyNjQwXFx1MjY0MlxcdTI2NDgtXFx1MjY1M1xcdTI2NUZcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdFXFx1MjY3RlxcdTI2OTJcXHUyNjk0LVxcdTI2OTdcXHUyNjk5XFx1MjY5QlxcdTI2OUNcXHUyNkEwXFx1MjZBN1xcdTI2QUFcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzhcXHUyNkNGXFx1MjZEMVxcdTI2RTlcXHUyNkYwLVxcdTI2RjVcXHUyNkY3XFx1MjZGOFxcdTI2RkFcXHUyNzAyXFx1MjcwOFxcdTI3MDlcXHUyNzBGXFx1MjcxMlxcdTI3MTRcXHUyNzE2XFx1MjcxRFxcdTI3MjFcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc1N1xcdTI3NjNcXHUyN0ExXFx1MjkzNFxcdTI5MzVcXHUyQjA1LVxcdTJCMDdcXHUyQjFCXFx1MkIxQ1xcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XVxcdUZFMEY/fFtcXHUyNjFEXFx1MjcwQ1xcdTI3MERdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpP3xbXFx1MjcwQVxcdTI3MEJdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI2OTNcXHUyNkExXFx1MjZBQlxcdTI2QzVcXHUyNkNFXFx1MjZENFxcdTI2RUFcXHUyNkZEXFx1MjcwNVxcdTI3MjhcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkI1MF18XFx1MjZEM1xcdUZFMEY/KD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E1KT98XFx1MjZGOSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVGRTBGKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98XFx1Mjc2NFxcdUZFMEY/KD86XFx1MjAwRCg/OlxcdUQ4M0RcXHVERDI1fFxcdUQ4M0VcXHVERTc5KSk/fFxcdUQ4M0MoPzpbXFx1REMwNFxcdURENzBcXHVERDcxXFx1REQ3RVxcdUREN0ZcXHVERTAyXFx1REUzN1xcdURGMjFcXHVERjI0LVxcdURGMkNcXHVERjM2XFx1REY3RFxcdURGOTZcXHVERjk3XFx1REY5OS1cXHVERjlCXFx1REY5RVxcdURGOUZcXHVERkNEXFx1REZDRVxcdURGRDQtXFx1REZERlxcdURGRjVcXHVERkY3XVxcdUZFMEY/fFtcXHVERjg1XFx1REZDMlxcdURGQzddKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdURGQzRcXHVERkNBXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERkNCXFx1REZDQ10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVEQ0NGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURFMDFcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzNlxcdURFMzgtXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIwXFx1REYyRC1cXHVERjM1XFx1REYzNy1cXHVERjQzXFx1REY0NS1cXHVERjRBXFx1REY0Qy1cXHVERjdDXFx1REY3RS1cXHVERjg0XFx1REY4Ni1cXHVERjkzXFx1REZBMC1cXHVERkMxXFx1REZDNVxcdURGQzZcXHVERkM4XFx1REZDOVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjgtXFx1REZGRl18XFx1RERFNlxcdUQ4M0NbXFx1RERFOC1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREYyXFx1RERGNFxcdURERjYtXFx1RERGQVxcdURERkNcXHVEREZEXFx1RERGRl18XFx1RERFN1xcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXXxcXHVEREU4XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERUVcXHVEREYwLVxcdURERjdcXHVEREZBLVxcdURERkZdfFxcdURERTlcXHVEODNDW1xcdURERUFcXHVEREVDXFx1RERFRlxcdURERjBcXHVEREYyXFx1RERGNFxcdURERkZdfFxcdURERUFcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXXxcXHVEREVCXFx1RDgzQ1tcXHVEREVFLVxcdURERjBcXHVEREYyXFx1RERGNFxcdURERjddfFxcdURERUNcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdfFxcdURERURcXHVEODNDW1xcdURERjBcXHVEREYyXFx1RERGM1xcdURERjdcXHVEREY5XFx1RERGQV18XFx1RERFRVxcdUQ4M0NbXFx1RERFOC1cXHVEREVBXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XXxcXHVEREVGXFx1RDgzQ1tcXHVEREVBXFx1RERGMlxcdURERjRcXHVEREY1XXxcXHVEREYwXFx1RDgzQ1tcXHVEREVBXFx1RERFQy1cXHVEREVFXFx1RERGMlxcdURERjNcXHVEREY1XFx1RERGN1xcdURERkNcXHVEREZFXFx1RERGRl18XFx1RERGMVxcdUQ4M0NbXFx1RERFNi1cXHVEREU4XFx1RERFRVxcdURERjBcXHVEREY3LVxcdURERkJcXHVEREZFXXxcXHVEREYyXFx1RDgzQ1tcXHVEREU2XFx1RERFOC1cXHVEREVEXFx1RERGMC1cXHVEREZGXXxcXHVEREYzXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUEtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGNFxcdURERjVcXHVEREY3XFx1RERGQVxcdURERkZdfFxcdURERjRcXHVEODNDXFx1RERGMnxcXHVEREY1XFx1RDgzQ1tcXHVEREU2XFx1RERFQS1cXHVEREVEXFx1RERGMC1cXHVEREYzXFx1RERGNy1cXHVEREY5XFx1RERGQ1xcdURERkVdfFxcdURERjZcXHVEODNDXFx1RERFNnxcXHVEREY3XFx1RDgzQ1tcXHVEREVBXFx1RERGNFxcdURERjhcXHVEREZBXFx1RERGQ118XFx1RERGOFxcdUQ4M0NbXFx1RERFNi1cXHVEREVBXFx1RERFQy1cXHVEREY0XFx1RERGNy1cXHVEREY5XFx1RERGQlxcdURERkQtXFx1RERGRl18XFx1RERGOVxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVEXFx1RERFRi1cXHVEREY0XFx1RERGN1xcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkZdfFxcdURERkFcXHVEODNDW1xcdURERTZcXHVEREVDXFx1RERGMlxcdURERjNcXHVEREY4XFx1RERGRVxcdURERkZdfFxcdURERkJcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdfFxcdURERkNcXHVEODNDW1xcdURERUJcXHVEREY4XXxcXHVEREZEXFx1RDgzQ1xcdURERjB8XFx1RERGRVxcdUQ4M0NbXFx1RERFQVxcdURERjldfFxcdURERkZcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ118XFx1REY0NCg/OlxcdTIwMERcXHVEODNEXFx1REZFQik/fFxcdURGNEIoPzpcXHUyMDBEXFx1RDgzRFxcdURGRTkpP3xcXHVERkMzKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVERkYzXFx1RkUwRj8oPzpcXHUyMDBEKD86XFx1MjZBN1xcdUZFMEY/fFxcdUQ4M0NcXHVERjA4KSk/fFxcdURGRjQoPzpcXHUyMDBEXFx1MjYyMFxcdUZFMEY/fFxcdURCNDBcXHVEQzY3XFx1REI0MFxcdURDNjJcXHVEQjQwKD86XFx1REM2NVxcdURCNDBcXHVEQzZFXFx1REI0MFxcdURDNjd8XFx1REM3M1xcdURCNDBcXHVEQzYzXFx1REI0MFxcdURDNzR8XFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzMpXFx1REI0MFxcdURDN0YpPyl8XFx1RDgzRCg/OltcXHVEQzNGXFx1RENGRFxcdURENDlcXHVERDRBXFx1REQ2RlxcdURENzBcXHVERDczXFx1REQ3Ni1cXHVERDc5XFx1REQ4N1xcdUREOEEtXFx1REQ4RFxcdUREQTVcXHVEREE4XFx1RERCMVxcdUREQjJcXHVEREJDXFx1RERDMi1cXHVEREM0XFx1REREMS1cXHVEREQzXFx1REREQy1cXHVERERFXFx1RERFMVxcdURERTNcXHVEREU4XFx1RERFRlxcdURERjNcXHVEREZBXFx1REVDQlxcdURFQ0QtXFx1REVDRlxcdURFRTAtXFx1REVFNVxcdURFRTlcXHVERUYwXFx1REVGM11cXHVGRTBGP3xbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNkItXFx1REM2RFxcdURDNzJcXHVEQzc0LVxcdURDNzZcXHVEQzc4XFx1REM3Q1xcdURDODNcXHVEQzg1XFx1REM4RlxcdURDOTFcXHVEQ0FBXFx1REQ3QVxcdUREOTVcXHVERDk2XFx1REU0Q1xcdURFNEZcXHVERUMwXFx1REVDQ10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REM2RVxcdURDNzBcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjRcXHVERUI1XSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDc0XFx1REQ5MF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/fFtcXHVEQzAwLVxcdURDMDdcXHVEQzA5LVxcdURDMTRcXHVEQzE2LVxcdURDMjVcXHVEQzI3LVxcdURDM0FcXHVEQzNDLVxcdURDM0VcXHVEQzQwXFx1REM0NFxcdURDNDVcXHVEQzUxLVxcdURDNjVcXHVEQzZBXFx1REM3OS1cXHVEQzdCXFx1REM3RC1cXHVEQzgwXFx1REM4NFxcdURDODgtXFx1REM4RVxcdURDOTBcXHVEQzkyLVxcdURDQTlcXHVEQ0FCLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVEREE0XFx1RERGQi1cXHVERTJEXFx1REUyRi1cXHVERTM0XFx1REUzNy1cXHVERTQxXFx1REU0M1xcdURFNDRcXHVERTQ4LVxcdURFNEFcXHVERTgwLVxcdURFQTJcXHVERUE0LVxcdURFQjNcXHVERUI3LVxcdURFQkZcXHVERUMxLVxcdURFQzVcXHVERUQwLVxcdURFRDJcXHVERUQ1LVxcdURFRDdcXHVERURDLVxcdURFREZcXHVERUVCXFx1REVFQ1xcdURFRjQtXFx1REVGQ1xcdURGRTAtXFx1REZFQlxcdURGRjBdfFxcdURDMDgoPzpcXHUyMDBEXFx1MkIxQik/fFxcdURDMTUoPzpcXHUyMDBEXFx1RDgzRVxcdUREQkEpP3xcXHVEQzI2KD86XFx1MjAwRCg/OlxcdTJCMUJ8XFx1RDgzRFxcdUREMjUpKT98XFx1REMzQig/OlxcdTIwMERcXHUyNzQ0XFx1RkUwRj8pP3xcXHVEQzQxXFx1RkUwRj8oPzpcXHUyMDBEXFx1RDgzRFxcdURERThcXHVGRTBGPyk/fFxcdURDNjgoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OHxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XVxcdTIwMERcXHVEODNEKD86XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKSkpP3xcXHVERkZEKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRV0pKSk/KSk/fFxcdURDNjkoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/W1xcdURDNjhcXHVEQzY5XXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pP3xcXHVEQzY5XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSkpKT8pKT98XFx1REM2Rig/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERDc1KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERTJFKD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E4KT98XFx1REUzNSg/OlxcdTIwMERcXHVEODNEXFx1RENBQik/fFxcdURFMzYoPzpcXHUyMDBEXFx1RDgzQ1xcdURGMkJcXHVGRTBGPyk/fFxcdURFNDIoPzpcXHUyMDBEW1xcdTIxOTRcXHUyMTk1XVxcdUZFMEY/KT98XFx1REVCNig/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRCg/OltcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xcXHUyN0ExXFx1RkUwRj8pKT8pfFxcdUQ4M0UoPzpbXFx1REQwQ1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDMwLVxcdUREMzRcXHVERDM2XFx1REQ3N1xcdUREQjVcXHVEREI2XFx1RERCQlxcdURERDJcXHVEREQzXFx1RERENVxcdURFQzMtXFx1REVDNVxcdURFRjBcXHVERUYyLVxcdURFRjhdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdUREMjZcXHVERDM1XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0RcXHVERENGXFx1RERENFxcdURERDYtXFx1RERERF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1RERERVxcdUREREZdKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDBEXFx1REQwRVxcdUREMTAtXFx1REQxN1xcdUREMjAtXFx1REQyNVxcdUREMjctXFx1REQyRlxcdUREM0FcXHVERDNGLVxcdURENDVcXHVERDQ3LVxcdURENzZcXHVERDc4LVxcdUREQjRcXHVEREI3XFx1RERCQVxcdUREQkMtXFx1RERDQ1xcdURERDBcXHVEREUwLVxcdURERkZcXHVERTcwLVxcdURFN0NcXHVERTgwLVxcdURFODlcXHVERThGLVxcdURFQzJcXHVERUM2XFx1REVDRS1cXHVERURDXFx1REVERi1cXHVERUU5XXxcXHVERDNDKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGP3xcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xcXHVERENFKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVEREQxKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEREQxXFx1MjAwRFxcdUQ4M0VcXHVEREQyKD86XFx1MjAwRFxcdUQ4M0VcXHVEREQyKT98XFx1REREMig/OlxcdTIwMERcXHVEODNFXFx1REREMik/KSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRV18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT8pKT98XFx1REVGMSg/OlxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKT98XFx1REZGQyg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pP3xcXHVERkZEKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSk/fFxcdURGRkUoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKT98XFx1REZGRig/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSk/KSk/KS9nO1xufTtcbiIsIG51bGwsICIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgbm90U3RyaWN0RXF1YWwsIHN0cmljdEVxdWFsIH0gZnJvbSAnYXNzZXJ0J1xuaW1wb3J0IGNsaXVpIGZyb20gJ2NsaXVpJ1xuaW1wb3J0IGVzY2FsYWRlIGZyb20gJ2VzY2FsYWRlL3N5bmMnXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSAndXRpbCdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IFBhcnNlciBmcm9tICd5YXJncy1wYXJzZXInXG5pbXBvcnQgeyBiYXNlbmFtZSwgZGlybmFtZSwgZXh0bmFtZSwgcmVsYXRpdmUsIHJlc29sdmUsIGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc0FyZ3ZCaW4gfSBmcm9tICcuLi8uLi9idWlsZC9saWIvdXRpbHMvcHJvY2Vzcy1hcmd2LmpzJ1xuaW1wb3J0IHN0cmluZ1dpZHRoIGZyb20gJ3N0cmluZy13aWR0aCc7XG5pbXBvcnQgeTE4biBmcm9tICd5MThuJ1xuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ25vZGU6bW9kdWxlJztcbmltcG9ydCBnZXRDYWxsZXJGaWxlIGZyb20gJ2dldC1jYWxsZXItZmlsZSc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnbm9kZTpmcydcblxuY29uc3QgX19kaXJuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgbWFpbkZpbGVuYW1lID0gX19kaXJuYW1lLnN1YnN0cmluZygwLCBfX2Rpcm5hbWUubGFzdEluZGV4T2YoJ25vZGVfbW9kdWxlcycpKTtcbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzZXJ0OiB7XG4gICAgbm90U3RyaWN0RXF1YWwsXG4gICAgc3RyaWN0RXF1YWxcbiAgfSxcbiAgY2xpdWksXG4gIGZpbmRVcDogZXNjYWxhZGUsXG4gIGdldEVudjogKGtleSkgPT4ge1xuICAgIHJldHVybiBwcm9jZXNzLmVudltrZXldXG4gIH0sXG4gIGluc3BlY3QsXG4gIGdldFByb2Nlc3NBcmd2QmluLFxuICBtYWluRmlsZW5hbWU6IG1haW5GaWxlbmFtZSB8fCBwcm9jZXNzLmN3ZCgpLFxuICBQYXJzZXIsXG4gIHBhdGg6IHtcbiAgICBiYXNlbmFtZSxcbiAgICBkaXJuYW1lLFxuICAgIGV4dG5hbWUsXG4gICAgcmVsYXRpdmUsXG4gICAgcmVzb2x2ZSxcbiAgICBqb2luXG4gIH0sXG4gIHByb2Nlc3M6IHtcbiAgICBhcmd2OiAoKSA9PiBwcm9jZXNzLmFyZ3YsXG4gICAgY3dkOiBwcm9jZXNzLmN3ZCxcbiAgICBlbWl0V2FybmluZzogKHdhcm5pbmcsIHR5cGUpID0+IHByb2Nlc3MuZW1pdFdhcm5pbmcod2FybmluZywgdHlwZSksXG4gICAgZXhlY1BhdGg6ICgpID0+IHByb2Nlc3MuZXhlY1BhdGgsXG4gICAgZXhpdDogKGNvZGUpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuL25vLXByb2Nlc3MtZXhpdFxuICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgIH0sXG4gICAgbmV4dFRpY2s6IHByb2Nlc3MubmV4dFRpY2ssXG4gICAgc3RkQ29sdW1uczogdHlwZW9mIHByb2Nlc3Muc3Rkb3V0LmNvbHVtbnMgIT09ICd1bmRlZmluZWQnID8gcHJvY2Vzcy5zdGRvdXQuY29sdW1ucyA6IG51bGxcbiAgfSxcbiAgcmVhZEZpbGVTeW5jLFxuICByZWFkZGlyU3luYyxcbiAgcmVxdWlyZSxcbiAgZ2V0Q2FsbGVyRmlsZTogKCkgPT4ge1xuICAgIGNvbnN0IGNhbGxlckZpbGUgPSBnZXRDYWxsZXJGaWxlKDMpO1xuICAgIHJldHVybiBjYWxsZXJGaWxlLm1hdGNoKC9eZmlsZTpcXC9cXC8vKSA/IGZpbGVVUkxUb1BhdGgoY2FsbGVyRmlsZSkgOiBjYWxsZXJGaWxlO1xuICB9LFxuICBzdHJpbmdXaWR0aCxcbiAgeTE4bjogeTE4bih7XG4gICAgZGlyZWN0b3J5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uL2xvY2FsZXMnKSxcbiAgICB1cGRhdGVGaWxlczogZmFsc2VcbiAgfSlcbn1cbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBhbGlnbiA9IHtcbiAgICByaWdodDogYWxpZ25SaWdodCxcbiAgICBjZW50ZXI6IGFsaWduQ2VudGVyXG59O1xuY29uc3QgdG9wID0gMDtcbmNvbnN0IHJpZ2h0ID0gMTtcbmNvbnN0IGJvdHRvbSA9IDI7XG5jb25zdCBsZWZ0ID0gMztcbmV4cG9ydCBjbGFzcyBVSSB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRzLndpZHRoO1xuICAgICAgICB0aGlzLndyYXAgPSAoX2EgPSBvcHRzLndyYXApICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRydWU7XG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgIH1cbiAgICBzcGFuKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMuZGl2KC4uLmFyZ3MpO1xuICAgICAgICBjb2xzLnNwYW4gPSB0cnVlO1xuICAgIH1cbiAgICByZXNldE91dHB1dCgpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgfVxuICAgIGRpdiguLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kaXYoJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndyYXAgJiYgdGhpcy5zaG91bGRBcHBseUxheW91dERTTCguLi5hcmdzKSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGx5TGF5b3V0RFNMKGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbHMgPSBhcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sRnJvbVN0cmluZyhhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFyZztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm93cy5wdXNoKGNvbHMpO1xuICAgICAgICByZXR1cm4gY29scztcbiAgICB9XG4gICAgc2hvdWxkQXBwbHlMYXlvdXREU0woLi4uYXJncykge1xuICAgICAgICByZXR1cm4gYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAvW1xcdFxcbl0vLnRlc3QoYXJnc1swXSk7XG4gICAgfVxuICAgIGFwcGx5TGF5b3V0RFNMKHN0cikge1xuICAgICAgICBjb25zdCByb3dzID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAocm93ID0+IHJvdy5zcGxpdCgnXFx0JykpO1xuICAgICAgICBsZXQgbGVmdENvbHVtbldpZHRoID0gMDtcbiAgICAgICAgLy8gc2ltcGxlIGhldXJpc3RpYyBmb3IgbGF5b3V0LCBtYWtlIHN1cmUgdGhlXG4gICAgICAgIC8vIHNlY29uZCBjb2x1bW4gbGluZXMgdXAgYWxvbmcgdGhlIGxlZnQtaGFuZC5cbiAgICAgICAgLy8gZG9uJ3QgYWxsb3cgdGhlIGZpcnN0IGNvbHVtbiB0byB0YWtlIHVwIG1vcmVcbiAgICAgICAgLy8gdGhhbiA1MCUgb2YgdGhlIHNjcmVlbi5cbiAgICAgICAgcm93cy5mb3JFYWNoKGNvbHVtbnMgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbHVtbnMubGVuZ3RoID4gMSAmJiBtaXhpbi5zdHJpbmdXaWR0aChjb2x1bW5zWzBdKSA+IGxlZnRDb2x1bW5XaWR0aCkge1xuICAgICAgICAgICAgICAgIGxlZnRDb2x1bW5XaWR0aCA9IE1hdGgubWluKE1hdGguZmxvb3IodGhpcy53aWR0aCAqIDAuNSksIG1peGluLnN0cmluZ1dpZHRoKGNvbHVtbnNbMF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGdlbmVyYXRlIGEgdGFibGU6XG4gICAgICAgIC8vICByZXBsYWNpbmcgJyAnIHdpdGggcGFkZGluZyBjYWxjdWxhdGlvbnMuXG4gICAgICAgIC8vICB1c2luZyB0aGUgYWxnb3JpdGhtaWNhbGx5IGdlbmVyYXRlZCB3aWR0aC5cbiAgICAgICAgcm93cy5mb3JFYWNoKGNvbHVtbnMgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXYoLi4uY29sdW1ucy5tYXAoKHIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdGhpcy5tZWFzdXJlUGFkZGluZyhyKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IChpID09PSAwICYmIGNvbHVtbnMubGVuZ3RoID4gMSkgPyBsZWZ0Q29sdW1uV2lkdGggOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93c1t0aGlzLnJvd3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIGNvbEZyb21TdHJpbmcodGV4dCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoaXMubWVhc3VyZVBhZGRpbmcodGV4dClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbWVhc3VyZVBhZGRpbmcoc3RyKSB7XG4gICAgICAgIC8vIG1lYXN1cmUgcGFkZGluZyB3aXRob3V0IGFuc2kgZXNjYXBlIGNvZGVzXG4gICAgICAgIGNvbnN0IG5vQW5zaSA9IG1peGluLnN0cmlwQW5zaShzdHIpO1xuICAgICAgICByZXR1cm4gWzAsIG5vQW5zaS5tYXRjaCgvXFxzKiQvKVswXS5sZW5ndGgsIDAsIG5vQW5zaS5tYXRjaCgvXlxccyovKVswXS5sZW5ndGhdO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHRoaXMucm93VG9TdHJpbmcocm93LCBsaW5lcyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkb24ndCBkaXNwbGF5IGFueSBsaW5lcyB3aXRoIHRoZVxuICAgICAgICAvLyBoaWRkZW4gZmxhZyBzZXQuXG4gICAgICAgIHJldHVybiBsaW5lc1xuICAgICAgICAgICAgLmZpbHRlcihsaW5lID0+ICFsaW5lLmhpZGRlbilcbiAgICAgICAgICAgIC5tYXAobGluZSA9PiBsaW5lLnRleHQpXG4gICAgICAgICAgICAuam9pbignXFxuJyk7XG4gICAgfVxuICAgIHJvd1RvU3RyaW5nKHJvdywgbGluZXMpIHtcbiAgICAgICAgdGhpcy5yYXN0ZXJpemUocm93KS5mb3JFYWNoKChycm93LCByKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgICAgICBycm93LmZvckVhY2goKGNvbCwgYykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IHJvd1tjXTsgLy8gdGhlIHdpZHRoIHdpdGggcGFkZGluZy5cbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwV2lkdGggPSB0aGlzLm5lZ2F0ZVBhZGRpbmcocm93W2NdKTsgLy8gdGhlIHdpZHRoIHdpdGhvdXQgcGFkZGluZy5cbiAgICAgICAgICAgICAgICBsZXQgdHMgPSBjb2w7IC8vIHRlbXBvcmFyeSBzdHJpbmcgdXNlZCBkdXJpbmcgYWxpZ25tZW50L3BhZGRpbmcuXG4gICAgICAgICAgICAgICAgaWYgKHdyYXBXaWR0aCA+IG1peGluLnN0cmluZ1dpZHRoKGNvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHMgKz0gJyAnLnJlcGVhdCh3cmFwV2lkdGggLSBtaXhpbi5zdHJpbmdXaWR0aChjb2wpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWxpZ24gdGhlIHN0cmluZyB3aXRoaW4gaXRzIGNvbHVtbi5cbiAgICAgICAgICAgICAgICBpZiAocm93W2NdLmFsaWduICYmIHJvd1tjXS5hbGlnbiAhPT0gJ2xlZnQnICYmIHRoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbiA9IGFsaWduW3Jvd1tjXS5hbGlnbl07XG4gICAgICAgICAgICAgICAgICAgIHRzID0gZm4odHMsIHdyYXBXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXhpbi5zdHJpbmdXaWR0aCh0cykgPCB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzICs9ICcgJy5yZXBlYXQoKHdpZHRoIHx8IDApIC0gbWl4aW4uc3RyaW5nV2lkdGgodHMpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYXBwbHkgYm9yZGVyIGFuZCBwYWRkaW5nIHRvIHN0cmluZy5cbiAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gcm93W2NdLnBhZGRpbmcgfHwgWzAsIDAsIDAsIDBdO1xuICAgICAgICAgICAgICAgIGlmIChwYWRkaW5nW2xlZnRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnICcucmVwZWF0KHBhZGRpbmdbbGVmdF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHIgKz0gYWRkQm9yZGVyKHJvd1tjXSwgdHMsICd8ICcpO1xuICAgICAgICAgICAgICAgIHN0ciArPSB0cztcbiAgICAgICAgICAgICAgICBzdHIgKz0gYWRkQm9yZGVyKHJvd1tjXSwgdHMsICcgfCcpO1xuICAgICAgICAgICAgICAgIGlmIChwYWRkaW5nW3JpZ2h0XSkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJyAnLnJlcGVhdChwYWRkaW5nW3JpZ2h0XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHByaW9yIHJvdyBpcyBzcGFuLCB0cnkgdG8gcmVuZGVyIHRoZVxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgcm93IG9uIHRoZSBwcmlvciBsaW5lLlxuICAgICAgICAgICAgICAgIGlmIChyID09PSAwICYmIGxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gdGhpcy5yZW5kZXJJbmxpbmUoc3RyLCBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyByZW1vdmUgdHJhaWxpbmcgd2hpdGVzcGFjZS5cbiAgICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQ6IHN0ci5yZXBsYWNlKC8gKyQvLCAnJyksXG4gICAgICAgICAgICAgICAgc3Bhbjogcm93LnNwYW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgZnVsbCAnc291cmNlJyBjYW4gcmVuZGVyIGluXG4gICAgLy8gdGhlIHRhcmdldCBsaW5lLCBkbyBzby5cbiAgICByZW5kZXJJbmxpbmUoc291cmNlLCBwcmV2aW91c0xpbmUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzb3VyY2UubWF0Y2goL14gKi8pO1xuICAgICAgICBjb25zdCBsZWFkaW5nV2hpdGVzcGFjZSA9IG1hdGNoID8gbWF0Y2hbMF0ubGVuZ3RoIDogMDtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcHJldmlvdXNMaW5lLnRleHQ7XG4gICAgICAgIGNvbnN0IHRhcmdldFRleHRXaWR0aCA9IG1peGluLnN0cmluZ1dpZHRoKHRhcmdldC50cmltUmlnaHQoKSk7XG4gICAgICAgIGlmICghcHJldmlvdXNMaW5lLnNwYW4pIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2UncmUgbm90IGFwcGx5aW5nIHdyYXBwaW5nIGxvZ2ljLFxuICAgICAgICAvLyBqdXN0IGFsd2F5cyBhcHBlbmQgdG8gdGhlIHNwYW4uXG4gICAgICAgIGlmICghdGhpcy53cmFwKSB7XG4gICAgICAgICAgICBwcmV2aW91c0xpbmUuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgKyBzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlYWRpbmdXaGl0ZXNwYWNlIDwgdGFyZ2V0VGV4dFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9XG4gICAgICAgIHByZXZpb3VzTGluZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGFyZ2V0LnRyaW1SaWdodCgpICsgJyAnLnJlcGVhdChsZWFkaW5nV2hpdGVzcGFjZSAtIHRhcmdldFRleHRXaWR0aCkgKyBzb3VyY2UudHJpbUxlZnQoKTtcbiAgICB9XG4gICAgcmFzdGVyaXplKHJvdykge1xuICAgICAgICBjb25zdCBycm93cyA9IFtdO1xuICAgICAgICBjb25zdCB3aWR0aHMgPSB0aGlzLmNvbHVtbldpZHRocyhyb3cpO1xuICAgICAgICBsZXQgd3JhcHBlZDtcbiAgICAgICAgLy8gd29yZCB3cmFwIGFsbCBjb2x1bW5zLCBhbmQgY3JlYXRlXG4gICAgICAgIC8vIGEgZGF0YS1zdHJ1Y3R1cmUgdGhhdCBpcyBlYXN5IHRvIHJhc3Rlcml6ZS5cbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgYykgPT4ge1xuICAgICAgICAgICAgLy8gbGVhdmUgcm9vbSBmb3IgbGVmdCBhbmQgcmlnaHQgcGFkZGluZy5cbiAgICAgICAgICAgIGNvbC53aWR0aCA9IHdpZHRoc1tjXTtcbiAgICAgICAgICAgIGlmICh0aGlzLndyYXApIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkID0gbWl4aW4ud3JhcChjb2wudGV4dCwgdGhpcy5uZWdhdGVQYWRkaW5nKGNvbCksIHsgaGFyZDogdHJ1ZSB9KS5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkID0gY29sLnRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbC5ib3JkZXIpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkLnVuc2hpZnQoJy4nICsgJy0nLnJlcGVhdCh0aGlzLm5lZ2F0ZVBhZGRpbmcoY29sKSArIDIpICsgJy4nKTtcbiAgICAgICAgICAgICAgICB3cmFwcGVkLnB1c2goXCInXCIgKyAnLScucmVwZWF0KHRoaXMubmVnYXRlUGFkZGluZyhjb2wpICsgMikgKyBcIidcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZGQgdG9wIGFuZCBib3R0b20gcGFkZGluZy5cbiAgICAgICAgICAgIGlmIChjb2wucGFkZGluZykge1xuICAgICAgICAgICAgICAgIHdyYXBwZWQudW5zaGlmdCguLi5uZXcgQXJyYXkoY29sLnBhZGRpbmdbdG9wXSB8fCAwKS5maWxsKCcnKSk7XG4gICAgICAgICAgICAgICAgd3JhcHBlZC5wdXNoKC4uLm5ldyBBcnJheShjb2wucGFkZGluZ1tib3R0b21dIHx8IDApLmZpbGwoJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZWQuZm9yRWFjaCgoc3RyLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFycm93c1tyXSkge1xuICAgICAgICAgICAgICAgICAgICBycm93cy5wdXNoKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcnJvdyA9IHJyb3dzW3JdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChycm93W2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJyb3cucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnJvdy5wdXNoKHN0cik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBycm93cztcbiAgICB9XG4gICAgbmVnYXRlUGFkZGluZyhjb2wpIHtcbiAgICAgICAgbGV0IHdyYXBXaWR0aCA9IGNvbC53aWR0aCB8fCAwO1xuICAgICAgICBpZiAoY29sLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIHdyYXBXaWR0aCAtPSAoY29sLnBhZGRpbmdbbGVmdF0gfHwgMCkgKyAoY29sLnBhZGRpbmdbcmlnaHRdIHx8IDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2wuYm9yZGVyKSB7XG4gICAgICAgICAgICB3cmFwV2lkdGggLT0gNDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3JhcFdpZHRoO1xuICAgIH1cbiAgICBjb2x1bW5XaWR0aHMocm93KSB7XG4gICAgICAgIGlmICghdGhpcy53cmFwKSB7XG4gICAgICAgICAgICByZXR1cm4gcm93Lm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2wud2lkdGggfHwgbWl4aW4uc3RyaW5nV2lkdGgoY29sLnRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVuc2V0ID0gcm93Lmxlbmd0aDtcbiAgICAgICAgbGV0IHJlbWFpbmluZ1dpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgLy8gY29sdW1uIHdpZHRocyBjYW4gYmUgc2V0IGluIGNvbmZpZy5cbiAgICAgICAgY29uc3Qgd2lkdGhzID0gcm93Lm1hcChjb2wgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbC53aWR0aCkge1xuICAgICAgICAgICAgICAgIHVuc2V0LS07XG4gICAgICAgICAgICAgICAgcmVtYWluaW5nV2lkdGggLT0gY29sLndpZHRoO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2wud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gYW55IHVuc2V0IHdpZHRocyBzaG91bGQgYmUgY2FsY3VsYXRlZC5cbiAgICAgICAgY29uc3QgdW5zZXRXaWR0aCA9IHVuc2V0ID8gTWF0aC5mbG9vcihyZW1haW5pbmdXaWR0aCAvIHVuc2V0KSA6IDA7XG4gICAgICAgIHJldHVybiB3aWR0aHMubWFwKCh3LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAodyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHVuc2V0V2lkdGgsIF9taW5XaWR0aChyb3dbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRCb3JkZXIoY29sLCB0cywgc3R5bGUpIHtcbiAgICBpZiAoY29sLmJvcmRlcikge1xuICAgICAgICBpZiAoL1suJ10tK1suJ10vLnRlc3QodHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRzLnRyaW0oKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyAgJztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuLy8gY2FsY3VsYXRlcyB0aGUgbWluaW11bSB3aWR0aCBvZlxuLy8gYSBjb2x1bW4sIGJhc2VkIG9uIHBhZGRpbmcgcHJlZmVyZW5jZXMuXG5mdW5jdGlvbiBfbWluV2lkdGgoY29sKSB7XG4gICAgY29uc3QgcGFkZGluZyA9IGNvbC5wYWRkaW5nIHx8IFtdO1xuICAgIGNvbnN0IG1pbldpZHRoID0gMSArIChwYWRkaW5nW2xlZnRdIHx8IDApICsgKHBhZGRpbmdbcmlnaHRdIHx8IDApO1xuICAgIGlmIChjb2wuYm9yZGVyKSB7XG4gICAgICAgIHJldHVybiBtaW5XaWR0aCArIDQ7XG4gICAgfVxuICAgIHJldHVybiBtaW5XaWR0aDtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1dpZHRoKCkge1xuICAgIC8qIGM4IGlnbm9yZSBuZXh0IDU6IGRlcGVuZHMgb24gdGVybWluYWwgKi9cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3Muc3Rkb3V0ICYmIHByb2Nlc3Muc3Rkb3V0LmNvbHVtbnMpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3Muc3Rkb3V0LmNvbHVtbnM7XG4gICAgfVxuICAgIHJldHVybiA4MDtcbn1cbmZ1bmN0aW9uIGFsaWduUmlnaHQoc3RyLCB3aWR0aCkge1xuICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgY29uc3Qgc3RyV2lkdGggPSBtaXhpbi5zdHJpbmdXaWR0aChzdHIpO1xuICAgIGlmIChzdHJXaWR0aCA8IHdpZHRoKSB7XG4gICAgICAgIHJldHVybiAnICcucmVwZWF0KHdpZHRoIC0gc3RyV2lkdGgpICsgc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gYWxpZ25DZW50ZXIoc3RyLCB3aWR0aCkge1xuICAgIHN0ciA9IHN0ci50cmltKCk7XG4gICAgY29uc3Qgc3RyV2lkdGggPSBtaXhpbi5zdHJpbmdXaWR0aChzdHIpO1xuICAgIC8qIGM4IGlnbm9yZSBuZXh0IDMgKi9cbiAgICBpZiAoc3RyV2lkdGggPj0gd2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuICcgJy5yZXBlYXQoKHdpZHRoIC0gc3RyV2lkdGgpID4+IDEpICsgc3RyO1xufVxubGV0IG1peGluO1xuZXhwb3J0IGZ1bmN0aW9uIGNsaXVpKG9wdHMsIF9taXhpbikge1xuICAgIG1peGluID0gX21peGluO1xuICAgIHJldHVybiBuZXcgVUkoe1xuICAgICAgICB3aWR0aDogKG9wdHMgPT09IG51bGwgfHwgb3B0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0cy53aWR0aCkgfHwgZ2V0V2luZG93V2lkdGgoKSxcbiAgICAgICAgd3JhcDogb3B0cyA9PT0gbnVsbCB8fCBvcHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRzLndyYXBcbiAgICB9KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbnNpUmVnZXgoe29ubHlGaXJzdCA9IGZhbHNlfSA9IHt9KSB7XG5cdC8vIFZhbGlkIHN0cmluZyB0ZXJtaW5hdG9yIHNlcXVlbmNlcyBhcmUgQkVMLCBFU0NcXCwgYW5kIDB4OWNcblx0Y29uc3QgU1QgPSAnKD86XFxcXHUwMDA3fFxcXFx1MDAxQlxcXFx1MDA1Q3xcXFxcdTAwOUMpJztcblx0Y29uc3QgcGF0dGVybiA9IFtcblx0XHRgW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSspKnxbYS16QS1aXFxcXGRdKyg/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/JHtTVH0pYCxcblx0XHQnKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1ucS11eT0+PH5dKSknLFxuXHRdLmpvaW4oJ3wnKTtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBvbmx5Rmlyc3QgPyB1bmRlZmluZWQgOiAnZycpO1xufVxuIiwgImltcG9ydCBhbnNpUmVnZXggZnJvbSAnYW5zaS1yZWdleCc7XG5cbmNvbnN0IHJlZ2V4ID0gYW5zaVJlZ2V4KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmlwQW5zaShzdHJpbmcpIHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBcXGBzdHJpbmdcXGAsIGdvdCBcXGAke3R5cGVvZiBzdHJpbmd9XFxgYCk7XG5cdH1cblxuXHQvLyBFdmVuIHRob3VnaCB0aGUgcmVnZXggaXMgZ2xvYmFsLCB3ZSBkb24ndCBuZWVkIHRvIHJlc2V0IHRoZSBgLmxhc3RJbmRleGBcblx0Ly8gYmVjYXVzZSB1bmxpa2UgYC5leGVjKClgIGFuZCBgLnRlc3QoKWAsIGAucmVwbGFjZSgpYCBkb2VzIGl0IGF1dG9tYXRpY2FsbHlcblx0Ly8gYW5kIGRvaW5nIGl0IG1hbnVhbGx5IGhhcyBhIHBlcmZvcm1hbmNlIHBlbmFsdHkuXG5cdHJldHVybiBzdHJpbmcucmVwbGFjZShyZWdleCwgJycpO1xufVxuIiwgIi8vIEdlbmVyYXRlZCBjb2RlLlxuXG5mdW5jdGlvbiBpc0FtYmlndW91cyh4KSB7XG5cdHJldHVybiB4ID09PSAweEExXG5cdFx0fHwgeCA9PT0gMHhBNFxuXHRcdHx8IHggPT09IDB4QTdcblx0XHR8fCB4ID09PSAweEE4XG5cdFx0fHwgeCA9PT0gMHhBQVxuXHRcdHx8IHggPT09IDB4QURcblx0XHR8fCB4ID09PSAweEFFXG5cdFx0fHwgeCA+PSAweEIwICYmIHggPD0gMHhCNFxuXHRcdHx8IHggPj0gMHhCNiAmJiB4IDw9IDB4QkFcblx0XHR8fCB4ID49IDB4QkMgJiYgeCA8PSAweEJGXG5cdFx0fHwgeCA9PT0gMHhDNlxuXHRcdHx8IHggPT09IDB4RDBcblx0XHR8fCB4ID09PSAweEQ3XG5cdFx0fHwgeCA9PT0gMHhEOFxuXHRcdHx8IHggPj0gMHhERSAmJiB4IDw9IDB4RTFcblx0XHR8fCB4ID09PSAweEU2XG5cdFx0fHwgeCA+PSAweEU4ICYmIHggPD0gMHhFQVxuXHRcdHx8IHggPT09IDB4RUNcblx0XHR8fCB4ID09PSAweEVEXG5cdFx0fHwgeCA9PT0gMHhGMFxuXHRcdHx8IHggPT09IDB4RjJcblx0XHR8fCB4ID09PSAweEYzXG5cdFx0fHwgeCA+PSAweEY3ICYmIHggPD0gMHhGQVxuXHRcdHx8IHggPT09IDB4RkNcblx0XHR8fCB4ID09PSAweEZFXG5cdFx0fHwgeCA9PT0gMHgxMDFcblx0XHR8fCB4ID09PSAweDExMVxuXHRcdHx8IHggPT09IDB4MTEzXG5cdFx0fHwgeCA9PT0gMHgxMUJcblx0XHR8fCB4ID09PSAweDEyNlxuXHRcdHx8IHggPT09IDB4MTI3XG5cdFx0fHwgeCA9PT0gMHgxMkJcblx0XHR8fCB4ID49IDB4MTMxICYmIHggPD0gMHgxMzNcblx0XHR8fCB4ID09PSAweDEzOFxuXHRcdHx8IHggPj0gMHgxM0YgJiYgeCA8PSAweDE0MlxuXHRcdHx8IHggPT09IDB4MTQ0XG5cdFx0fHwgeCA+PSAweDE0OCAmJiB4IDw9IDB4MTRCXG5cdFx0fHwgeCA9PT0gMHgxNERcblx0XHR8fCB4ID09PSAweDE1MlxuXHRcdHx8IHggPT09IDB4MTUzXG5cdFx0fHwgeCA9PT0gMHgxNjZcblx0XHR8fCB4ID09PSAweDE2N1xuXHRcdHx8IHggPT09IDB4MTZCXG5cdFx0fHwgeCA9PT0gMHgxQ0Vcblx0XHR8fCB4ID09PSAweDFEMFxuXHRcdHx8IHggPT09IDB4MUQyXG5cdFx0fHwgeCA9PT0gMHgxRDRcblx0XHR8fCB4ID09PSAweDFENlxuXHRcdHx8IHggPT09IDB4MUQ4XG5cdFx0fHwgeCA9PT0gMHgxREFcblx0XHR8fCB4ID09PSAweDFEQ1xuXHRcdHx8IHggPT09IDB4MjUxXG5cdFx0fHwgeCA9PT0gMHgyNjFcblx0XHR8fCB4ID09PSAweDJDNFxuXHRcdHx8IHggPT09IDB4MkM3XG5cdFx0fHwgeCA+PSAweDJDOSAmJiB4IDw9IDB4MkNCXG5cdFx0fHwgeCA9PT0gMHgyQ0Rcblx0XHR8fCB4ID09PSAweDJEMFxuXHRcdHx8IHggPj0gMHgyRDggJiYgeCA8PSAweDJEQlxuXHRcdHx8IHggPT09IDB4MkREXG5cdFx0fHwgeCA9PT0gMHgyREZcblx0XHR8fCB4ID49IDB4MzAwICYmIHggPD0gMHgzNkZcblx0XHR8fCB4ID49IDB4MzkxICYmIHggPD0gMHgzQTFcblx0XHR8fCB4ID49IDB4M0EzICYmIHggPD0gMHgzQTlcblx0XHR8fCB4ID49IDB4M0IxICYmIHggPD0gMHgzQzFcblx0XHR8fCB4ID49IDB4M0MzICYmIHggPD0gMHgzQzlcblx0XHR8fCB4ID09PSAweDQwMVxuXHRcdHx8IHggPj0gMHg0MTAgJiYgeCA8PSAweDQ0RlxuXHRcdHx8IHggPT09IDB4NDUxXG5cdFx0fHwgeCA9PT0gMHgyMDEwXG5cdFx0fHwgeCA+PSAweDIwMTMgJiYgeCA8PSAweDIwMTZcblx0XHR8fCB4ID09PSAweDIwMThcblx0XHR8fCB4ID09PSAweDIwMTlcblx0XHR8fCB4ID09PSAweDIwMUNcblx0XHR8fCB4ID09PSAweDIwMURcblx0XHR8fCB4ID49IDB4MjAyMCAmJiB4IDw9IDB4MjAyMlxuXHRcdHx8IHggPj0gMHgyMDI0ICYmIHggPD0gMHgyMDI3XG5cdFx0fHwgeCA9PT0gMHgyMDMwXG5cdFx0fHwgeCA9PT0gMHgyMDMyXG5cdFx0fHwgeCA9PT0gMHgyMDMzXG5cdFx0fHwgeCA9PT0gMHgyMDM1XG5cdFx0fHwgeCA9PT0gMHgyMDNCXG5cdFx0fHwgeCA9PT0gMHgyMDNFXG5cdFx0fHwgeCA9PT0gMHgyMDc0XG5cdFx0fHwgeCA9PT0gMHgyMDdGXG5cdFx0fHwgeCA+PSAweDIwODEgJiYgeCA8PSAweDIwODRcblx0XHR8fCB4ID09PSAweDIwQUNcblx0XHR8fCB4ID09PSAweDIxMDNcblx0XHR8fCB4ID09PSAweDIxMDVcblx0XHR8fCB4ID09PSAweDIxMDlcblx0XHR8fCB4ID09PSAweDIxMTNcblx0XHR8fCB4ID09PSAweDIxMTZcblx0XHR8fCB4ID09PSAweDIxMjFcblx0XHR8fCB4ID09PSAweDIxMjJcblx0XHR8fCB4ID09PSAweDIxMjZcblx0XHR8fCB4ID09PSAweDIxMkJcblx0XHR8fCB4ID09PSAweDIxNTNcblx0XHR8fCB4ID09PSAweDIxNTRcblx0XHR8fCB4ID49IDB4MjE1QiAmJiB4IDw9IDB4MjE1RVxuXHRcdHx8IHggPj0gMHgyMTYwICYmIHggPD0gMHgyMTZCXG5cdFx0fHwgeCA+PSAweDIxNzAgJiYgeCA8PSAweDIxNzlcblx0XHR8fCB4ID09PSAweDIxODlcblx0XHR8fCB4ID49IDB4MjE5MCAmJiB4IDw9IDB4MjE5OVxuXHRcdHx8IHggPT09IDB4MjFCOFxuXHRcdHx8IHggPT09IDB4MjFCOVxuXHRcdHx8IHggPT09IDB4MjFEMlxuXHRcdHx8IHggPT09IDB4MjFENFxuXHRcdHx8IHggPT09IDB4MjFFN1xuXHRcdHx8IHggPT09IDB4MjIwMFxuXHRcdHx8IHggPT09IDB4MjIwMlxuXHRcdHx8IHggPT09IDB4MjIwM1xuXHRcdHx8IHggPT09IDB4MjIwN1xuXHRcdHx8IHggPT09IDB4MjIwOFxuXHRcdHx8IHggPT09IDB4MjIwQlxuXHRcdHx8IHggPT09IDB4MjIwRlxuXHRcdHx8IHggPT09IDB4MjIxMVxuXHRcdHx8IHggPT09IDB4MjIxNVxuXHRcdHx8IHggPT09IDB4MjIxQVxuXHRcdHx8IHggPj0gMHgyMjFEICYmIHggPD0gMHgyMjIwXG5cdFx0fHwgeCA9PT0gMHgyMjIzXG5cdFx0fHwgeCA9PT0gMHgyMjI1XG5cdFx0fHwgeCA+PSAweDIyMjcgJiYgeCA8PSAweDIyMkNcblx0XHR8fCB4ID09PSAweDIyMkVcblx0XHR8fCB4ID49IDB4MjIzNCAmJiB4IDw9IDB4MjIzN1xuXHRcdHx8IHggPT09IDB4MjIzQ1xuXHRcdHx8IHggPT09IDB4MjIzRFxuXHRcdHx8IHggPT09IDB4MjI0OFxuXHRcdHx8IHggPT09IDB4MjI0Q1xuXHRcdHx8IHggPT09IDB4MjI1MlxuXHRcdHx8IHggPT09IDB4MjI2MFxuXHRcdHx8IHggPT09IDB4MjI2MVxuXHRcdHx8IHggPj0gMHgyMjY0ICYmIHggPD0gMHgyMjY3XG5cdFx0fHwgeCA9PT0gMHgyMjZBXG5cdFx0fHwgeCA9PT0gMHgyMjZCXG5cdFx0fHwgeCA9PT0gMHgyMjZFXG5cdFx0fHwgeCA9PT0gMHgyMjZGXG5cdFx0fHwgeCA9PT0gMHgyMjgyXG5cdFx0fHwgeCA9PT0gMHgyMjgzXG5cdFx0fHwgeCA9PT0gMHgyMjg2XG5cdFx0fHwgeCA9PT0gMHgyMjg3XG5cdFx0fHwgeCA9PT0gMHgyMjk1XG5cdFx0fHwgeCA9PT0gMHgyMjk5XG5cdFx0fHwgeCA9PT0gMHgyMkE1XG5cdFx0fHwgeCA9PT0gMHgyMkJGXG5cdFx0fHwgeCA9PT0gMHgyMzEyXG5cdFx0fHwgeCA+PSAweDI0NjAgJiYgeCA8PSAweDI0RTlcblx0XHR8fCB4ID49IDB4MjRFQiAmJiB4IDw9IDB4MjU0QlxuXHRcdHx8IHggPj0gMHgyNTUwICYmIHggPD0gMHgyNTczXG5cdFx0fHwgeCA+PSAweDI1ODAgJiYgeCA8PSAweDI1OEZcblx0XHR8fCB4ID49IDB4MjU5MiAmJiB4IDw9IDB4MjU5NVxuXHRcdHx8IHggPT09IDB4MjVBMFxuXHRcdHx8IHggPT09IDB4MjVBMVxuXHRcdHx8IHggPj0gMHgyNUEzICYmIHggPD0gMHgyNUE5XG5cdFx0fHwgeCA9PT0gMHgyNUIyXG5cdFx0fHwgeCA9PT0gMHgyNUIzXG5cdFx0fHwgeCA9PT0gMHgyNUI2XG5cdFx0fHwgeCA9PT0gMHgyNUI3XG5cdFx0fHwgeCA9PT0gMHgyNUJDXG5cdFx0fHwgeCA9PT0gMHgyNUJEXG5cdFx0fHwgeCA9PT0gMHgyNUMwXG5cdFx0fHwgeCA9PT0gMHgyNUMxXG5cdFx0fHwgeCA+PSAweDI1QzYgJiYgeCA8PSAweDI1Qzhcblx0XHR8fCB4ID09PSAweDI1Q0Jcblx0XHR8fCB4ID49IDB4MjVDRSAmJiB4IDw9IDB4MjVEMVxuXHRcdHx8IHggPj0gMHgyNUUyICYmIHggPD0gMHgyNUU1XG5cdFx0fHwgeCA9PT0gMHgyNUVGXG5cdFx0fHwgeCA9PT0gMHgyNjA1XG5cdFx0fHwgeCA9PT0gMHgyNjA2XG5cdFx0fHwgeCA9PT0gMHgyNjA5XG5cdFx0fHwgeCA9PT0gMHgyNjBFXG5cdFx0fHwgeCA9PT0gMHgyNjBGXG5cdFx0fHwgeCA9PT0gMHgyNjFDXG5cdFx0fHwgeCA9PT0gMHgyNjFFXG5cdFx0fHwgeCA9PT0gMHgyNjQwXG5cdFx0fHwgeCA9PT0gMHgyNjQyXG5cdFx0fHwgeCA9PT0gMHgyNjYwXG5cdFx0fHwgeCA9PT0gMHgyNjYxXG5cdFx0fHwgeCA+PSAweDI2NjMgJiYgeCA8PSAweDI2NjVcblx0XHR8fCB4ID49IDB4MjY2NyAmJiB4IDw9IDB4MjY2QVxuXHRcdHx8IHggPT09IDB4MjY2Q1xuXHRcdHx8IHggPT09IDB4MjY2RFxuXHRcdHx8IHggPT09IDB4MjY2RlxuXHRcdHx8IHggPT09IDB4MjY5RVxuXHRcdHx8IHggPT09IDB4MjY5RlxuXHRcdHx8IHggPT09IDB4MjZCRlxuXHRcdHx8IHggPj0gMHgyNkM2ICYmIHggPD0gMHgyNkNEXG5cdFx0fHwgeCA+PSAweDI2Q0YgJiYgeCA8PSAweDI2RDNcblx0XHR8fCB4ID49IDB4MjZENSAmJiB4IDw9IDB4MjZFMVxuXHRcdHx8IHggPT09IDB4MjZFM1xuXHRcdHx8IHggPT09IDB4MjZFOFxuXHRcdHx8IHggPT09IDB4MjZFOVxuXHRcdHx8IHggPj0gMHgyNkVCICYmIHggPD0gMHgyNkYxXG5cdFx0fHwgeCA9PT0gMHgyNkY0XG5cdFx0fHwgeCA+PSAweDI2RjYgJiYgeCA8PSAweDI2Rjlcblx0XHR8fCB4ID09PSAweDI2RkJcblx0XHR8fCB4ID09PSAweDI2RkNcblx0XHR8fCB4ID09PSAweDI2RkVcblx0XHR8fCB4ID09PSAweDI2RkZcblx0XHR8fCB4ID09PSAweDI3M0Rcblx0XHR8fCB4ID49IDB4Mjc3NiAmJiB4IDw9IDB4Mjc3RlxuXHRcdHx8IHggPj0gMHgyQjU2ICYmIHggPD0gMHgyQjU5XG5cdFx0fHwgeCA+PSAweDMyNDggJiYgeCA8PSAweDMyNEZcblx0XHR8fCB4ID49IDB4RTAwMCAmJiB4IDw9IDB4RjhGRlxuXHRcdHx8IHggPj0gMHhGRTAwICYmIHggPD0gMHhGRTBGXG5cdFx0fHwgeCA9PT0gMHhGRkZEXG5cdFx0fHwgeCA+PSAweDFGMTAwICYmIHggPD0gMHgxRjEwQVxuXHRcdHx8IHggPj0gMHgxRjExMCAmJiB4IDw9IDB4MUYxMkRcblx0XHR8fCB4ID49IDB4MUYxMzAgJiYgeCA8PSAweDFGMTY5XG5cdFx0fHwgeCA+PSAweDFGMTcwICYmIHggPD0gMHgxRjE4RFxuXHRcdHx8IHggPT09IDB4MUYxOEZcblx0XHR8fCB4ID09PSAweDFGMTkwXG5cdFx0fHwgeCA+PSAweDFGMTlCICYmIHggPD0gMHgxRjFBQ1xuXHRcdHx8IHggPj0gMHhFMDEwMCAmJiB4IDw9IDB4RTAxRUZcblx0XHR8fCB4ID49IDB4RjAwMDAgJiYgeCA8PSAweEZGRkZEXG5cdFx0fHwgeCA+PSAweDEwMDAwMCAmJiB4IDw9IDB4MTBGRkZEO1xufVxuXG5mdW5jdGlvbiBpc0Z1bGxXaWR0aCh4KSB7XG5cdHJldHVybiB4ID09PSAweDMwMDBcblx0XHR8fCB4ID49IDB4RkYwMSAmJiB4IDw9IDB4RkY2MFxuXHRcdHx8IHggPj0gMHhGRkUwICYmIHggPD0gMHhGRkU2O1xufVxuXG5mdW5jdGlvbiBpc1dpZGUoeCkge1xuXHRyZXR1cm4geCA+PSAweDExMDAgJiYgeCA8PSAweDExNUZcblx0XHR8fCB4ID09PSAweDIzMUFcblx0XHR8fCB4ID09PSAweDIzMUJcblx0XHR8fCB4ID09PSAweDIzMjlcblx0XHR8fCB4ID09PSAweDIzMkFcblx0XHR8fCB4ID49IDB4MjNFOSAmJiB4IDw9IDB4MjNFQ1xuXHRcdHx8IHggPT09IDB4MjNGMFxuXHRcdHx8IHggPT09IDB4MjNGM1xuXHRcdHx8IHggPT09IDB4MjVGRFxuXHRcdHx8IHggPT09IDB4MjVGRVxuXHRcdHx8IHggPT09IDB4MjYxNFxuXHRcdHx8IHggPT09IDB4MjYxNVxuXHRcdHx8IHggPj0gMHgyNjMwICYmIHggPD0gMHgyNjM3XG5cdFx0fHwgeCA+PSAweDI2NDggJiYgeCA8PSAweDI2NTNcblx0XHR8fCB4ID09PSAweDI2N0Zcblx0XHR8fCB4ID49IDB4MjY4QSAmJiB4IDw9IDB4MjY4RlxuXHRcdHx8IHggPT09IDB4MjY5M1xuXHRcdHx8IHggPT09IDB4MjZBMVxuXHRcdHx8IHggPT09IDB4MjZBQVxuXHRcdHx8IHggPT09IDB4MjZBQlxuXHRcdHx8IHggPT09IDB4MjZCRFxuXHRcdHx8IHggPT09IDB4MjZCRVxuXHRcdHx8IHggPT09IDB4MjZDNFxuXHRcdHx8IHggPT09IDB4MjZDNVxuXHRcdHx8IHggPT09IDB4MjZDRVxuXHRcdHx8IHggPT09IDB4MjZENFxuXHRcdHx8IHggPT09IDB4MjZFQVxuXHRcdHx8IHggPT09IDB4MjZGMlxuXHRcdHx8IHggPT09IDB4MjZGM1xuXHRcdHx8IHggPT09IDB4MjZGNVxuXHRcdHx8IHggPT09IDB4MjZGQVxuXHRcdHx8IHggPT09IDB4MjZGRFxuXHRcdHx8IHggPT09IDB4MjcwNVxuXHRcdHx8IHggPT09IDB4MjcwQVxuXHRcdHx8IHggPT09IDB4MjcwQlxuXHRcdHx8IHggPT09IDB4MjcyOFxuXHRcdHx8IHggPT09IDB4Mjc0Q1xuXHRcdHx8IHggPT09IDB4Mjc0RVxuXHRcdHx8IHggPj0gMHgyNzUzICYmIHggPD0gMHgyNzU1XG5cdFx0fHwgeCA9PT0gMHgyNzU3XG5cdFx0fHwgeCA+PSAweDI3OTUgJiYgeCA8PSAweDI3OTdcblx0XHR8fCB4ID09PSAweDI3QjBcblx0XHR8fCB4ID09PSAweDI3QkZcblx0XHR8fCB4ID09PSAweDJCMUJcblx0XHR8fCB4ID09PSAweDJCMUNcblx0XHR8fCB4ID09PSAweDJCNTBcblx0XHR8fCB4ID09PSAweDJCNTVcblx0XHR8fCB4ID49IDB4MkU4MCAmJiB4IDw9IDB4MkU5OVxuXHRcdHx8IHggPj0gMHgyRTlCICYmIHggPD0gMHgyRUYzXG5cdFx0fHwgeCA+PSAweDJGMDAgJiYgeCA8PSAweDJGRDVcblx0XHR8fCB4ID49IDB4MkZGMCAmJiB4IDw9IDB4MkZGRlxuXHRcdHx8IHggPj0gMHgzMDAxICYmIHggPD0gMHgzMDNFXG5cdFx0fHwgeCA+PSAweDMwNDEgJiYgeCA8PSAweDMwOTZcblx0XHR8fCB4ID49IDB4MzA5OSAmJiB4IDw9IDB4MzBGRlxuXHRcdHx8IHggPj0gMHgzMTA1ICYmIHggPD0gMHgzMTJGXG5cdFx0fHwgeCA+PSAweDMxMzEgJiYgeCA8PSAweDMxOEVcblx0XHR8fCB4ID49IDB4MzE5MCAmJiB4IDw9IDB4MzFFNVxuXHRcdHx8IHggPj0gMHgzMUVGICYmIHggPD0gMHgzMjFFXG5cdFx0fHwgeCA+PSAweDMyMjAgJiYgeCA8PSAweDMyNDdcblx0XHR8fCB4ID49IDB4MzI1MCAmJiB4IDw9IDB4QTQ4Q1xuXHRcdHx8IHggPj0gMHhBNDkwICYmIHggPD0gMHhBNEM2XG5cdFx0fHwgeCA+PSAweEE5NjAgJiYgeCA8PSAweEE5N0Ncblx0XHR8fCB4ID49IDB4QUMwMCAmJiB4IDw9IDB4RDdBM1xuXHRcdHx8IHggPj0gMHhGOTAwICYmIHggPD0gMHhGQUZGXG5cdFx0fHwgeCA+PSAweEZFMTAgJiYgeCA8PSAweEZFMTlcblx0XHR8fCB4ID49IDB4RkUzMCAmJiB4IDw9IDB4RkU1MlxuXHRcdHx8IHggPj0gMHhGRTU0ICYmIHggPD0gMHhGRTY2XG5cdFx0fHwgeCA+PSAweEZFNjggJiYgeCA8PSAweEZFNkJcblx0XHR8fCB4ID49IDB4MTZGRTAgJiYgeCA8PSAweDE2RkU0XG5cdFx0fHwgeCA9PT0gMHgxNkZGMFxuXHRcdHx8IHggPT09IDB4MTZGRjFcblx0XHR8fCB4ID49IDB4MTcwMDAgJiYgeCA8PSAweDE4N0Y3XG5cdFx0fHwgeCA+PSAweDE4ODAwICYmIHggPD0gMHgxOENENVxuXHRcdHx8IHggPj0gMHgxOENGRiAmJiB4IDw9IDB4MThEMDhcblx0XHR8fCB4ID49IDB4MUFGRjAgJiYgeCA8PSAweDFBRkYzXG5cdFx0fHwgeCA+PSAweDFBRkY1ICYmIHggPD0gMHgxQUZGQlxuXHRcdHx8IHggPT09IDB4MUFGRkRcblx0XHR8fCB4ID09PSAweDFBRkZFXG5cdFx0fHwgeCA+PSAweDFCMDAwICYmIHggPD0gMHgxQjEyMlxuXHRcdHx8IHggPT09IDB4MUIxMzJcblx0XHR8fCB4ID49IDB4MUIxNTAgJiYgeCA8PSAweDFCMTUyXG5cdFx0fHwgeCA9PT0gMHgxQjE1NVxuXHRcdHx8IHggPj0gMHgxQjE2NCAmJiB4IDw9IDB4MUIxNjdcblx0XHR8fCB4ID49IDB4MUIxNzAgJiYgeCA8PSAweDFCMkZCXG5cdFx0fHwgeCA+PSAweDFEMzAwICYmIHggPD0gMHgxRDM1NlxuXHRcdHx8IHggPj0gMHgxRDM2MCAmJiB4IDw9IDB4MUQzNzZcblx0XHR8fCB4ID09PSAweDFGMDA0XG5cdFx0fHwgeCA9PT0gMHgxRjBDRlxuXHRcdHx8IHggPT09IDB4MUYxOEVcblx0XHR8fCB4ID49IDB4MUYxOTEgJiYgeCA8PSAweDFGMTlBXG5cdFx0fHwgeCA+PSAweDFGMjAwICYmIHggPD0gMHgxRjIwMlxuXHRcdHx8IHggPj0gMHgxRjIxMCAmJiB4IDw9IDB4MUYyM0Jcblx0XHR8fCB4ID49IDB4MUYyNDAgJiYgeCA8PSAweDFGMjQ4XG5cdFx0fHwgeCA9PT0gMHgxRjI1MFxuXHRcdHx8IHggPT09IDB4MUYyNTFcblx0XHR8fCB4ID49IDB4MUYyNjAgJiYgeCA8PSAweDFGMjY1XG5cdFx0fHwgeCA+PSAweDFGMzAwICYmIHggPD0gMHgxRjMyMFxuXHRcdHx8IHggPj0gMHgxRjMyRCAmJiB4IDw9IDB4MUYzMzVcblx0XHR8fCB4ID49IDB4MUYzMzcgJiYgeCA8PSAweDFGMzdDXG5cdFx0fHwgeCA+PSAweDFGMzdFICYmIHggPD0gMHgxRjM5M1xuXHRcdHx8IHggPj0gMHgxRjNBMCAmJiB4IDw9IDB4MUYzQ0Fcblx0XHR8fCB4ID49IDB4MUYzQ0YgJiYgeCA8PSAweDFGM0QzXG5cdFx0fHwgeCA+PSAweDFGM0UwICYmIHggPD0gMHgxRjNGMFxuXHRcdHx8IHggPT09IDB4MUYzRjRcblx0XHR8fCB4ID49IDB4MUYzRjggJiYgeCA8PSAweDFGNDNFXG5cdFx0fHwgeCA9PT0gMHgxRjQ0MFxuXHRcdHx8IHggPj0gMHgxRjQ0MiAmJiB4IDw9IDB4MUY0RkNcblx0XHR8fCB4ID49IDB4MUY0RkYgJiYgeCA8PSAweDFGNTNEXG5cdFx0fHwgeCA+PSAweDFGNTRCICYmIHggPD0gMHgxRjU0RVxuXHRcdHx8IHggPj0gMHgxRjU1MCAmJiB4IDw9IDB4MUY1Njdcblx0XHR8fCB4ID09PSAweDFGNTdBXG5cdFx0fHwgeCA9PT0gMHgxRjU5NVxuXHRcdHx8IHggPT09IDB4MUY1OTZcblx0XHR8fCB4ID09PSAweDFGNUE0XG5cdFx0fHwgeCA+PSAweDFGNUZCICYmIHggPD0gMHgxRjY0RlxuXHRcdHx8IHggPj0gMHgxRjY4MCAmJiB4IDw9IDB4MUY2QzVcblx0XHR8fCB4ID09PSAweDFGNkNDXG5cdFx0fHwgeCA+PSAweDFGNkQwICYmIHggPD0gMHgxRjZEMlxuXHRcdHx8IHggPj0gMHgxRjZENSAmJiB4IDw9IDB4MUY2RDdcblx0XHR8fCB4ID49IDB4MUY2REMgJiYgeCA8PSAweDFGNkRGXG5cdFx0fHwgeCA9PT0gMHgxRjZFQlxuXHRcdHx8IHggPT09IDB4MUY2RUNcblx0XHR8fCB4ID49IDB4MUY2RjQgJiYgeCA8PSAweDFGNkZDXG5cdFx0fHwgeCA+PSAweDFGN0UwICYmIHggPD0gMHgxRjdFQlxuXHRcdHx8IHggPT09IDB4MUY3RjBcblx0XHR8fCB4ID49IDB4MUY5MEMgJiYgeCA8PSAweDFGOTNBXG5cdFx0fHwgeCA+PSAweDFGOTNDICYmIHggPD0gMHgxRjk0NVxuXHRcdHx8IHggPj0gMHgxRjk0NyAmJiB4IDw9IDB4MUY5RkZcblx0XHR8fCB4ID49IDB4MUZBNzAgJiYgeCA8PSAweDFGQTdDXG5cdFx0fHwgeCA+PSAweDFGQTgwICYmIHggPD0gMHgxRkE4OVxuXHRcdHx8IHggPj0gMHgxRkE4RiAmJiB4IDw9IDB4MUZBQzZcblx0XHR8fCB4ID49IDB4MUZBQ0UgJiYgeCA8PSAweDFGQURDXG5cdFx0fHwgeCA+PSAweDFGQURGICYmIHggPD0gMHgxRkFFOVxuXHRcdHx8IHggPj0gMHgxRkFGMCAmJiB4IDw9IDB4MUZBRjhcblx0XHR8fCB4ID49IDB4MjAwMDAgJiYgeCA8PSAweDJGRkZEXG5cdFx0fHwgeCA+PSAweDMwMDAwICYmIHggPD0gMHgzRkZGRDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoeCkge1xuXHRpZiAoaXNBbWJpZ3VvdXMoeCkpIHJldHVybiAnYW1iaWd1b3VzJztcblxuXHRpZiAoaXNGdWxsV2lkdGgoeCkpIHJldHVybiAnZnVsbHdpZHRoJztcblxuXHRpZiAoXG5cdFx0eCA9PT0gMHgyMEE5XG5cdFx0fHwgeCA+PSAweEZGNjEgJiYgeCA8PSAweEZGQkVcblx0XHR8fCB4ID49IDB4RkZDMiAmJiB4IDw9IDB4RkZDN1xuXHRcdHx8IHggPj0gMHhGRkNBICYmIHggPD0gMHhGRkNGXG5cdFx0fHwgeCA+PSAweEZGRDIgJiYgeCA8PSAweEZGRDdcblx0XHR8fCB4ID49IDB4RkZEQSAmJiB4IDw9IDB4RkZEQ1xuXHRcdHx8IHggPj0gMHhGRkU4ICYmIHggPD0gMHhGRkVFXG5cdCkge1xuXHRcdHJldHVybiAnaGFsZndpZHRoJztcblx0fVxuXG5cdGlmIChcblx0XHR4ID49IDB4MjAgJiYgeCA8PSAweDdFXG5cdFx0fHwgeCA9PT0gMHhBMlxuXHRcdHx8IHggPT09IDB4QTNcblx0XHR8fCB4ID09PSAweEE1XG5cdFx0fHwgeCA9PT0gMHhBNlxuXHRcdHx8IHggPT09IDB4QUNcblx0XHR8fCB4ID09PSAweEFGXG5cdFx0fHwgeCA+PSAweDI3RTYgJiYgeCA8PSAweDI3RURcblx0XHR8fCB4ID09PSAweDI5ODVcblx0XHR8fCB4ID09PSAweDI5ODZcblx0KSB7XG5cdFx0cmV0dXJuICduYXJyb3cnO1xuXHR9XG5cblx0aWYgKGlzV2lkZSh4KSkgcmV0dXJuICd3aWRlJztcblxuXHRyZXR1cm4gJ25ldXRyYWwnO1xufVxuXG5leHBvcnQge2lzQW1iaWd1b3VzLCBpc0Z1bGxXaWR0aCwgaXNXaWRlLCBnZXRDYXRlZ29yeX07XG4iLCAiaW1wb3J0IHtnZXRDYXRlZ29yeSwgaXNBbWJpZ3VvdXMsIGlzRnVsbFdpZHRoLCBpc1dpZGV9IGZyb20gJy4vbG9va3VwLmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUoY29kZVBvaW50KSB7XG5cdGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIoY29kZVBvaW50KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgY29kZSBwb2ludCwgZ290IFxcYCR7dHlwZW9mIGNvZGVQb2ludH1cXGAuYCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhc3RBc2lhbldpZHRoVHlwZShjb2RlUG9pbnQpIHtcblx0dmFsaWRhdGUoY29kZVBvaW50KTtcblxuXHRyZXR1cm4gZ2V0Q2F0ZWdvcnkoY29kZVBvaW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhc3RBc2lhbldpZHRoKGNvZGVQb2ludCwge2FtYmlndW91c0FzV2lkZSA9IGZhbHNlfSA9IHt9KSB7XG5cdHZhbGlkYXRlKGNvZGVQb2ludCk7XG5cblx0aWYgKFxuXHRcdGlzRnVsbFdpZHRoKGNvZGVQb2ludClcblx0XHR8fCBpc1dpZGUoY29kZVBvaW50KVxuXHRcdHx8IChhbWJpZ3VvdXNBc1dpZGUgJiYgaXNBbWJpZ3VvdXMoY29kZVBvaW50KSlcblx0KSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRyZXR1cm4gMTtcbn1cblxuLy8gRm9yIFByZXR0aWVyLiBUaGlzIGRvZXNuJ3QgY291bnQgXCJhbWJpZ3VvdXNcIiBjaGFyYWN0ZXJzIG9yIGNoZWNrIGZvciB2YWxpZCBpbnB1dC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZ2V0LWVhc3QtYXNpYW4td2lkdGgvcHVsbC82XG5leHBvcnQgY29uc3QgX2lzTmFycm93V2lkdGggPSBjb2RlUG9pbnQgPT4gIShpc0Z1bGxXaWR0aChjb2RlUG9pbnQpIHx8IGlzV2lkZShjb2RlUG9pbnQpKTtcbiIsICJpbXBvcnQgc3RyaXBBbnNpIGZyb20gJ3N0cmlwLWFuc2knO1xuaW1wb3J0IHtlYXN0QXNpYW5XaWR0aH0gZnJvbSAnZ2V0LWVhc3QtYXNpYW4td2lkdGgnO1xuaW1wb3J0IGVtb2ppUmVnZXggZnJvbSAnZW1vamktcmVnZXgnO1xuXG5jb25zdCBzZWdtZW50ZXIgPSBuZXcgSW50bC5TZWdtZW50ZXIoKTtcblxuY29uc3QgZGVmYXVsdElnbm9yYWJsZUNvZGVQb2ludFJlZ2V4ID0gL15cXHB7RGVmYXVsdF9JZ25vcmFibGVfQ29kZV9Qb2ludH0kL3U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmluZ1dpZHRoKHN0cmluZywgb3B0aW9ucyA9IHt9KSB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCBzdHJpbmcubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCB7XG5cdFx0YW1iaWd1b3VzSXNOYXJyb3cgPSB0cnVlLFxuXHRcdGNvdW50QW5zaUVzY2FwZUNvZGVzID0gZmFsc2UsXG5cdH0gPSBvcHRpb25zO1xuXG5cdGlmICghY291bnRBbnNpRXNjYXBlQ29kZXMpIHtcblx0XHRzdHJpbmcgPSBzdHJpcEFuc2koc3RyaW5nKTtcblx0fVxuXG5cdGlmIChzdHJpbmcubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRsZXQgd2lkdGggPSAwO1xuXHRjb25zdCBlYXN0QXNpYW5XaWR0aE9wdGlvbnMgPSB7YW1iaWd1b3VzQXNXaWRlOiAhYW1iaWd1b3VzSXNOYXJyb3d9O1xuXG5cdGZvciAoY29uc3Qge3NlZ21lbnQ6IGNoYXJhY3Rlcn0gb2Ygc2VnbWVudGVyLnNlZ21lbnQoc3RyaW5nKSkge1xuXHRcdGNvbnN0IGNvZGVQb2ludCA9IGNoYXJhY3Rlci5jb2RlUG9pbnRBdCgwKTtcblxuXHRcdC8vIElnbm9yZSBjb250cm9sIGNoYXJhY3RlcnNcblx0XHRpZiAoY29kZVBvaW50IDw9IDB4MUYgfHwgKGNvZGVQb2ludCA+PSAweDdGICYmIGNvZGVQb2ludCA8PSAweDlGKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIHplcm8td2lkdGggY2hhcmFjdGVyc1xuXHRcdGlmIChcblx0XHRcdChjb2RlUG9pbnQgPj0gMHgyMF8wQiAmJiBjb2RlUG9pbnQgPD0gMHgyMF8wRikgLy8gWmVyby13aWR0aCBzcGFjZSwgbm9uLWpvaW5lciwgam9pbmVyLCBsZWZ0LXRvLXJpZ2h0IG1hcmssIHJpZ2h0LXRvLWxlZnQgbWFya1xuXHRcdFx0fHwgY29kZVBvaW50ID09PSAweEZFX0ZGIC8vIFplcm8td2lkdGggbm8tYnJlYWsgc3BhY2Vcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBjb21iaW5pbmcgY2hhcmFjdGVyc1xuXHRcdGlmIChcblx0XHRcdChjb2RlUG9pbnQgPj0gMHgzXzAwICYmIGNvZGVQb2ludCA8PSAweDNfNkYpIC8vIENvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc1xuXHRcdFx0fHwgKGNvZGVQb2ludCA+PSAweDFBX0IwICYmIGNvZGVQb2ludCA8PSAweDFBX0ZGKSAvLyBDb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3MgZXh0ZW5kZWRcblx0XHRcdHx8IChjb2RlUG9pbnQgPj0gMHgxRF9DMCAmJiBjb2RlUG9pbnQgPD0gMHgxRF9GRikgLy8gQ29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIHN1cHBsZW1lbnRcblx0XHRcdHx8IChjb2RlUG9pbnQgPj0gMHgyMF9EMCAmJiBjb2RlUG9pbnQgPD0gMHgyMF9GRikgLy8gQ29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIGZvciBzeW1ib2xzXG5cdFx0XHR8fCAoY29kZVBvaW50ID49IDB4RkVfMjAgJiYgY29kZVBvaW50IDw9IDB4RkVfMkYpIC8vIENvbWJpbmluZyBoYWxmIG1hcmtzXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgc3Vycm9nYXRlIHBhaXJzXG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweEQ4XzAwICYmIGNvZGVQb2ludCA8PSAweERGX0ZGKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgdmFyaWF0aW9uIHNlbGVjdG9yc1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHhGRV8wMCAmJiBjb2RlUG9pbnQgPD0gMHhGRV8wRikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gVGhpcyBjb3ZlcnMgc29tZSBvZiB0aGUgYWJvdmUgY2FzZXMsIGJ1dCB3ZSBzdGlsbCBrZWVwIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG5cdFx0aWYgKGRlZmF1bHRJZ25vcmFibGVDb2RlUG9pbnRSZWdleC50ZXN0KGNoYXJhY3RlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IFVzZSBgL1xccHtSR0lfRW1vaml9L3ZgIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgMjAuXG5cdFx0aWYgKGVtb2ppUmVnZXgoKS50ZXN0KGNoYXJhY3RlcikpIHtcblx0XHRcdHdpZHRoICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR3aWR0aCArPSBlYXN0QXNpYW5XaWR0aChjb2RlUG9pbnQsIGVhc3RBc2lhbldpZHRoT3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gd2lkdGg7XG59XG4iLCAiY29uc3QgQU5TSV9CQUNLR1JPVU5EX09GRlNFVCA9IDEwO1xuXG5jb25zdCB3cmFwQW5zaTE2ID0gKG9mZnNldCA9IDApID0+IGNvZGUgPT4gYFxcdTAwMUJbJHtjb2RlICsgb2Zmc2V0fW1gO1xuXG5jb25zdCB3cmFwQW5zaTI1NiA9IChvZmZzZXQgPSAwKSA9PiBjb2RlID0+IGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzU7JHtjb2RlfW1gO1xuXG5jb25zdCB3cmFwQW5zaTE2bSA9IChvZmZzZXQgPSAwKSA9PiAocmVkLCBncmVlbiwgYmx1ZSkgPT4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07Mjske3JlZH07JHtncmVlbn07JHtibHVlfW1gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdG1vZGlmaWVyOiB7XG5cdFx0cmVzZXQ6IFswLCAwXSxcblx0XHQvLyAyMSBpc24ndCB3aWRlbHkgc3VwcG9ydGVkIGFuZCAyMiBkb2VzIHRoZSBzYW1lIHRoaW5nXG5cdFx0Ym9sZDogWzEsIDIyXSxcblx0XHRkaW06IFsyLCAyMl0sXG5cdFx0aXRhbGljOiBbMywgMjNdLFxuXHRcdHVuZGVybGluZTogWzQsIDI0XSxcblx0XHRvdmVybGluZTogWzUzLCA1NV0sXG5cdFx0aW52ZXJzZTogWzcsIDI3XSxcblx0XHRoaWRkZW46IFs4LCAyOF0sXG5cdFx0c3RyaWtldGhyb3VnaDogWzksIDI5XSxcblx0fSxcblx0Y29sb3I6IHtcblx0XHRibGFjazogWzMwLCAzOV0sXG5cdFx0cmVkOiBbMzEsIDM5XSxcblx0XHRncmVlbjogWzMyLCAzOV0sXG5cdFx0eWVsbG93OiBbMzMsIDM5XSxcblx0XHRibHVlOiBbMzQsIDM5XSxcblx0XHRtYWdlbnRhOiBbMzUsIDM5XSxcblx0XHRjeWFuOiBbMzYsIDM5XSxcblx0XHR3aGl0ZTogWzM3LCAzOV0sXG5cblx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRibGFja0JyaWdodDogWzkwLCAzOV0sXG5cdFx0Z3JheTogWzkwLCAzOV0sIC8vIEFsaWFzIG9mIGBibGFja0JyaWdodGBcblx0XHRncmV5OiBbOTAsIDM5XSwgLy8gQWxpYXMgb2YgYGJsYWNrQnJpZ2h0YFxuXHRcdHJlZEJyaWdodDogWzkxLCAzOV0sXG5cdFx0Z3JlZW5CcmlnaHQ6IFs5MiwgMzldLFxuXHRcdHllbGxvd0JyaWdodDogWzkzLCAzOV0sXG5cdFx0Ymx1ZUJyaWdodDogWzk0LCAzOV0sXG5cdFx0bWFnZW50YUJyaWdodDogWzk1LCAzOV0sXG5cdFx0Y3lhbkJyaWdodDogWzk2LCAzOV0sXG5cdFx0d2hpdGVCcmlnaHQ6IFs5NywgMzldLFxuXHR9LFxuXHRiZ0NvbG9yOiB7XG5cdFx0YmdCbGFjazogWzQwLCA0OV0sXG5cdFx0YmdSZWQ6IFs0MSwgNDldLFxuXHRcdGJnR3JlZW46IFs0MiwgNDldLFxuXHRcdGJnWWVsbG93OiBbNDMsIDQ5XSxcblx0XHRiZ0JsdWU6IFs0NCwgNDldLFxuXHRcdGJnTWFnZW50YTogWzQ1LCA0OV0sXG5cdFx0YmdDeWFuOiBbNDYsIDQ5XSxcblx0XHRiZ1doaXRlOiBbNDcsIDQ5XSxcblxuXHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdGJnQmxhY2tCcmlnaHQ6IFsxMDAsIDQ5XSxcblx0XHRiZ0dyYXk6IFsxMDAsIDQ5XSwgLy8gQWxpYXMgb2YgYGJnQmxhY2tCcmlnaHRgXG5cdFx0YmdHcmV5OiBbMTAwLCA0OV0sIC8vIEFsaWFzIG9mIGBiZ0JsYWNrQnJpZ2h0YFxuXHRcdGJnUmVkQnJpZ2h0OiBbMTAxLCA0OV0sXG5cdFx0YmdHcmVlbkJyaWdodDogWzEwMiwgNDldLFxuXHRcdGJnWWVsbG93QnJpZ2h0OiBbMTAzLCA0OV0sXG5cdFx0YmdCbHVlQnJpZ2h0OiBbMTA0LCA0OV0sXG5cdFx0YmdNYWdlbnRhQnJpZ2h0OiBbMTA1LCA0OV0sXG5cdFx0YmdDeWFuQnJpZ2h0OiBbMTA2LCA0OV0sXG5cdFx0YmdXaGl0ZUJyaWdodDogWzEwNywgNDldLFxuXHR9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1vZGlmaWVyTmFtZXMgPSBPYmplY3Qua2V5cyhzdHlsZXMubW9kaWZpZXIpO1xuZXhwb3J0IGNvbnN0IGZvcmVncm91bmRDb2xvck5hbWVzID0gT2JqZWN0LmtleXMoc3R5bGVzLmNvbG9yKTtcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3JOYW1lcyA9IE9iamVjdC5rZXlzKHN0eWxlcy5iZ0NvbG9yKTtcbmV4cG9ydCBjb25zdCBjb2xvck5hbWVzID0gWy4uLmZvcmVncm91bmRDb2xvck5hbWVzLCAuLi5iYWNrZ3JvdW5kQ29sb3JOYW1lc107XG5cbmZ1bmN0aW9uIGFzc2VtYmxlU3R5bGVzKCkge1xuXHRjb25zdCBjb2RlcyA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKGNvbnN0IFtncm91cE5hbWUsIGdyb3VwXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZXMpKSB7XG5cdFx0Zm9yIChjb25zdCBbc3R5bGVOYW1lLCBzdHlsZV0gb2YgT2JqZWN0LmVudHJpZXMoZ3JvdXApKSB7XG5cdFx0XHRzdHlsZXNbc3R5bGVOYW1lXSA9IHtcblx0XHRcdFx0b3BlbjogYFxcdTAwMUJbJHtzdHlsZVswXX1tYCxcblx0XHRcdFx0Y2xvc2U6IGBcXHUwMDFCWyR7c3R5bGVbMV19bWAsXG5cdFx0XHR9O1xuXG5cdFx0XHRncm91cFtzdHlsZU5hbWVdID0gc3R5bGVzW3N0eWxlTmFtZV07XG5cblx0XHRcdGNvZGVzLnNldChzdHlsZVswXSwgc3R5bGVbMV0pO1xuXHRcdH1cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsZXMsIGdyb3VwTmFtZSwge1xuXHRcdFx0dmFsdWU6IGdyb3VwLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSk7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCAnY29kZXMnLCB7XG5cdFx0dmFsdWU6IGNvZGVzLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHR9KTtcblxuXHRzdHlsZXMuY29sb3IuY2xvc2UgPSAnXFx1MDAxQlszOW0nO1xuXHRzdHlsZXMuYmdDb2xvci5jbG9zZSA9ICdcXHUwMDFCWzQ5bSc7XG5cblx0c3R5bGVzLmNvbG9yLmFuc2kgPSB3cmFwQW5zaTE2KCk7XG5cdHN0eWxlcy5jb2xvci5hbnNpMjU2ID0gd3JhcEFuc2kyNTYoKTtcblx0c3R5bGVzLmNvbG9yLmFuc2kxNm0gPSB3cmFwQW5zaTE2bSgpO1xuXHRzdHlsZXMuYmdDb2xvci5hbnNpID0gd3JhcEFuc2kxNihBTlNJX0JBQ0tHUk9VTkRfT0ZGU0VUKTtcblx0c3R5bGVzLmJnQ29sb3IuYW5zaTI1NiA9IHdyYXBBbnNpMjU2KEFOU0lfQkFDS0dST1VORF9PRkZTRVQpO1xuXHRzdHlsZXMuYmdDb2xvci5hbnNpMTZtID0gd3JhcEFuc2kxNm0oQU5TSV9CQUNLR1JPVU5EX09GRlNFVCk7XG5cblx0Ly8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vUWl4LS9jb2xvci1jb252ZXJ0L2Jsb2IvM2YwZTBkNGU5MmUyMzU3OTZjY2IxN2Y2ZTg1YzcyMDk0YTY1MWY0OS9jb252ZXJzaW9ucy5qc1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHlsZXMsIHtcblx0XHRyZ2JUb0Fuc2kyNTY6IHtcblx0XHRcdHZhbHVlOiAocmVkLCBncmVlbiwgYmx1ZSkgPT4ge1xuXHRcdFx0XHQvLyBXZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHRcdFx0XHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0XHRcdFx0aWYgKHJlZCA9PT0gZ3JlZW4gJiYgZ3JlZW4gPT09IGJsdWUpIHtcblx0XHRcdFx0XHRpZiAocmVkIDwgOCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE2O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChyZWQgPiAyNDgpIHtcblx0XHRcdFx0XHRcdHJldHVybiAyMzE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIE1hdGgucm91bmQoKChyZWQgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gMTZcblx0XHRcdFx0XHQrICgzNiAqIE1hdGgucm91bmQocmVkIC8gMjU1ICogNSkpXG5cdFx0XHRcdFx0KyAoNiAqIE1hdGgucm91bmQoZ3JlZW4gLyAyNTUgKiA1KSlcblx0XHRcdFx0XHQrIE1hdGgucm91bmQoYmx1ZSAvIDI1NSAqIDUpO1xuXHRcdFx0fSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0aGV4VG9SZ2I6IHtcblx0XHRcdHZhbHVlOiBoZXggPT4ge1xuXHRcdFx0XHRjb25zdCBtYXRjaGVzID0gL1thLWZcXGRdezZ9fFthLWZcXGRdezN9L2kuZXhlYyhoZXgudG9TdHJpbmcoMTYpKTtcblx0XHRcdFx0aWYgKCFtYXRjaGVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBbY29sb3JTdHJpbmddID0gbWF0Y2hlcztcblxuXHRcdFx0XHRpZiAoY29sb3JTdHJpbmcubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRcdFx0Y29sb3JTdHJpbmcgPSBbLi4uY29sb3JTdHJpbmddLm1hcChjaGFyYWN0ZXIgPT4gY2hhcmFjdGVyICsgY2hhcmFjdGVyKS5qb2luKCcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGludGVnZXIgPSBOdW1iZXIucGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcblxuXHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblx0XHRcdFx0XHQoaW50ZWdlciA+PiAxNikgJiAweEZGLFxuXHRcdFx0XHRcdChpbnRlZ2VyID4+IDgpICYgMHhGRixcblx0XHRcdFx0XHRpbnRlZ2VyICYgMHhGRixcblx0XHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cblx0XHRcdFx0XTtcblx0XHRcdH0sXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHR9LFxuXHRcdGhleFRvQW5zaTI1Njoge1xuXHRcdFx0dmFsdWU6IGhleCA9PiBzdHlsZXMucmdiVG9BbnNpMjU2KC4uLnN0eWxlcy5oZXhUb1JnYihoZXgpKSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0YW5zaTI1NlRvQW5zaToge1xuXHRcdFx0dmFsdWU6IGNvZGUgPT4ge1xuXHRcdFx0XHRpZiAoY29kZSA8IDgpIHtcblx0XHRcdFx0XHRyZXR1cm4gMzAgKyBjb2RlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNvZGUgPCAxNikge1xuXHRcdFx0XHRcdHJldHVybiA5MCArIChjb2RlIC0gOCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgcmVkO1xuXHRcdFx0XHRsZXQgZ3JlZW47XG5cdFx0XHRcdGxldCBibHVlO1xuXG5cdFx0XHRcdGlmIChjb2RlID49IDIzMikge1xuXHRcdFx0XHRcdHJlZCA9ICgoKGNvZGUgLSAyMzIpICogMTApICsgOCkgLyAyNTU7XG5cdFx0XHRcdFx0Z3JlZW4gPSByZWQ7XG5cdFx0XHRcdFx0Ymx1ZSA9IHJlZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb2RlIC09IDE2O1xuXG5cdFx0XHRcdFx0Y29uc3QgcmVtYWluZGVyID0gY29kZSAlIDM2O1xuXG5cdFx0XHRcdFx0cmVkID0gTWF0aC5mbG9vcihjb2RlIC8gMzYpIC8gNTtcblx0XHRcdFx0XHRncmVlbiA9IE1hdGguZmxvb3IocmVtYWluZGVyIC8gNikgLyA1O1xuXHRcdFx0XHRcdGJsdWUgPSAocmVtYWluZGVyICUgNikgLyA1O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBNYXRoLm1heChyZWQsIGdyZWVuLCBibHVlKSAqIDI7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDMwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0bGV0IHJlc3VsdCA9IDMwICsgKChNYXRoLnJvdW5kKGJsdWUpIDw8IDIpIHwgKE1hdGgucm91bmQoZ3JlZW4pIDw8IDEpIHwgTWF0aC5yb3VuZChyZWQpKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gNjA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0cmdiVG9BbnNpOiB7XG5cdFx0XHR2YWx1ZTogKHJlZCwgZ3JlZW4sIGJsdWUpID0+IHN0eWxlcy5hbnNpMjU2VG9BbnNpKHN0eWxlcy5yZ2JUb0Fuc2kyNTYocmVkLCBncmVlbiwgYmx1ZSkpLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHRoZXhUb0Fuc2k6IHtcblx0XHRcdHZhbHVlOiBoZXggPT4gc3R5bGVzLmFuc2kyNTZUb0Fuc2koc3R5bGVzLmhleFRvQW5zaTI1NihoZXgpKSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmNvbnN0IGFuc2lTdHlsZXMgPSBhc3NlbWJsZVN0eWxlcygpO1xuXG5leHBvcnQgZGVmYXVsdCBhbnNpU3R5bGVzO1xuIiwgImltcG9ydCBzdHJpbmdXaWR0aCBmcm9tICdzdHJpbmctd2lkdGgnO1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tICdzdHJpcC1hbnNpJztcbmltcG9ydCBhbnNpU3R5bGVzIGZyb20gJ2Fuc2ktc3R5bGVzJztcblxuY29uc3QgRVNDQVBFUyA9IG5ldyBTZXQoW1xuXHQnXFx1MDAxQicsXG5cdCdcXHUwMDlCJyxcbl0pO1xuXG5jb25zdCBFTkRfQ09ERSA9IDM5O1xuY29uc3QgQU5TSV9FU0NBUEVfQkVMTCA9ICdcXHUwMDA3JztcbmNvbnN0IEFOU0lfQ1NJID0gJ1snO1xuY29uc3QgQU5TSV9PU0MgPSAnXSc7XG5jb25zdCBBTlNJX1NHUl9URVJNSU5BVE9SID0gJ20nO1xuY29uc3QgQU5TSV9FU0NBUEVfTElOSyA9IGAke0FOU0lfT1NDfTg7O2A7XG5cbmNvbnN0IHdyYXBBbnNpQ29kZSA9IGNvZGUgPT4gYCR7RVNDQVBFUy52YWx1ZXMoKS5uZXh0KCkudmFsdWV9JHtBTlNJX0NTSX0ke2NvZGV9JHtBTlNJX1NHUl9URVJNSU5BVE9SfWA7XG5jb25zdCB3cmFwQW5zaUh5cGVybGluayA9IHVybCA9PiBgJHtFU0NBUEVTLnZhbHVlcygpLm5leHQoKS52YWx1ZX0ke0FOU0lfRVNDQVBFX0xJTkt9JHt1cmx9JHtBTlNJX0VTQ0FQRV9CRUxMfWA7XG5cbi8vIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHdvcmRzIHNwbGl0IG9uICcgJywgaWdub3Jpbmdcbi8vIHRoZSBleHRyYSBjaGFyYWN0ZXJzIGFkZGVkIGJ5IGFuc2kgZXNjYXBlIGNvZGVzXG5jb25zdCB3b3JkTGVuZ3RocyA9IHN0cmluZyA9PiBzdHJpbmcuc3BsaXQoJyAnKS5tYXAoY2hhcmFjdGVyID0+IHN0cmluZ1dpZHRoKGNoYXJhY3RlcikpO1xuXG4vLyBXcmFwIGEgbG9uZyB3b3JkIGFjcm9zcyBtdWx0aXBsZSByb3dzXG4vLyBBbnNpIGVzY2FwZSBjb2RlcyBkbyBub3QgY291bnQgdG93YXJkcyBsZW5ndGhcbmNvbnN0IHdyYXBXb3JkID0gKHJvd3MsIHdvcmQsIGNvbHVtbnMpID0+IHtcblx0Y29uc3QgY2hhcmFjdGVycyA9IFsuLi53b3JkXTtcblxuXHRsZXQgaXNJbnNpZGVFc2NhcGUgPSBmYWxzZTtcblx0bGV0IGlzSW5zaWRlTGlua0VzY2FwZSA9IGZhbHNlO1xuXHRsZXQgdmlzaWJsZSA9IHN0cmluZ1dpZHRoKHN0cmlwQW5zaShyb3dzLmF0KC0xKSkpO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBjaGFyYWN0ZXJdIG9mIGNoYXJhY3RlcnMuZW50cmllcygpKSB7XG5cdFx0Y29uc3QgY2hhcmFjdGVyTGVuZ3RoID0gc3RyaW5nV2lkdGgoY2hhcmFjdGVyKTtcblxuXHRcdGlmICh2aXNpYmxlICsgY2hhcmFjdGVyTGVuZ3RoIDw9IGNvbHVtbnMpIHtcblx0XHRcdHJvd3Nbcm93cy5sZW5ndGggLSAxXSArPSBjaGFyYWN0ZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJvd3MucHVzaChjaGFyYWN0ZXIpO1xuXHRcdFx0dmlzaWJsZSA9IDA7XG5cdFx0fVxuXG5cdFx0aWYgKEVTQ0FQRVMuaGFzKGNoYXJhY3RlcikpIHtcblx0XHRcdGlzSW5zaWRlRXNjYXBlID0gdHJ1ZTtcblxuXHRcdFx0Y29uc3QgYW5zaUVzY2FwZUxpbmtDYW5kaWRhdGUgPSBjaGFyYWN0ZXJzLnNsaWNlKGluZGV4ICsgMSwgaW5kZXggKyAxICsgQU5TSV9FU0NBUEVfTElOSy5sZW5ndGgpLmpvaW4oJycpO1xuXHRcdFx0aXNJbnNpZGVMaW5rRXNjYXBlID0gYW5zaUVzY2FwZUxpbmtDYW5kaWRhdGUgPT09IEFOU0lfRVNDQVBFX0xJTks7XG5cdFx0fVxuXG5cdFx0aWYgKGlzSW5zaWRlRXNjYXBlKSB7XG5cdFx0XHRpZiAoaXNJbnNpZGVMaW5rRXNjYXBlKSB7XG5cdFx0XHRcdGlmIChjaGFyYWN0ZXIgPT09IEFOU0lfRVNDQVBFX0JFTEwpIHtcblx0XHRcdFx0XHRpc0luc2lkZUVzY2FwZSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlzSW5zaWRlTGlua0VzY2FwZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQU5TSV9TR1JfVEVSTUlOQVRPUikge1xuXHRcdFx0XHRpc0luc2lkZUVzY2FwZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2aXNpYmxlICs9IGNoYXJhY3Rlckxlbmd0aDtcblxuXHRcdGlmICh2aXNpYmxlID09PSBjb2x1bW5zICYmIGluZGV4IDwgY2hhcmFjdGVycy5sZW5ndGggLSAxKSB7XG5cdFx0XHRyb3dzLnB1c2goJycpO1xuXHRcdFx0dmlzaWJsZSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSXQncyBwb3NzaWJsZSB0aGF0IHRoZSBsYXN0IHJvdyB3ZSBjb3B5IG92ZXIgaXMgb25seVxuXHQvLyBhbnNpIGVzY2FwZSBjaGFyYWN0ZXJzLCBoYW5kbGUgdGhpcyBlZGdlLWNhc2Vcblx0aWYgKCF2aXNpYmxlICYmIHJvd3MuYXQoLTEpLmxlbmd0aCA+IDAgJiYgcm93cy5sZW5ndGggPiAxKSB7XG5cdFx0cm93c1tyb3dzLmxlbmd0aCAtIDJdICs9IHJvd3MucG9wKCk7XG5cdH1cbn07XG5cbi8vIFRyaW1zIHNwYWNlcyBmcm9tIGEgc3RyaW5nIGlnbm9yaW5nIGludmlzaWJsZSBzZXF1ZW5jZXNcbmNvbnN0IHN0cmluZ1Zpc2libGVUcmltU3BhY2VzUmlnaHQgPSBzdHJpbmcgPT4ge1xuXHRjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnICcpO1xuXHRsZXQgbGFzdCA9IHdvcmRzLmxlbmd0aDtcblxuXHR3aGlsZSAobGFzdCA+IDApIHtcblx0XHRpZiAoc3RyaW5nV2lkdGgod29yZHNbbGFzdCAtIDFdKSA+IDApIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGxhc3QtLTtcblx0fVxuXG5cdGlmIChsYXN0ID09PSB3b3Jkcy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0cmV0dXJuIHdvcmRzLnNsaWNlKDAsIGxhc3QpLmpvaW4oJyAnKSArIHdvcmRzLnNsaWNlKGxhc3QpLmpvaW4oJycpO1xufTtcblxuLy8gVGhlIHdyYXAtYW5zaSBtb2R1bGUgY2FuIGJlIGludm9rZWQgaW4gZWl0aGVyICdoYXJkJyBvciAnc29mdCcgd3JhcCBtb2RlLlxuLy9cbi8vICdoYXJkJyB3aWxsIG5ldmVyIGFsbG93IGEgc3RyaW5nIHRvIHRha2UgdXAgbW9yZSB0aGFuIGNvbHVtbnMgY2hhcmFjdGVycy5cbi8vXG4vLyAnc29mdCcgYWxsb3dzIGxvbmcgd29yZHMgdG8gZXhwYW5kIHBhc3QgdGhlIGNvbHVtbiBsZW5ndGguXG5jb25zdCBleGVjID0gKHN0cmluZywgY29sdW1ucywgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGlmIChvcHRpb25zLnRyaW0gIT09IGZhbHNlICYmIHN0cmluZy50cmltKCkgPT09ICcnKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0bGV0IHJldHVyblZhbHVlID0gJyc7XG5cdGxldCBlc2NhcGVDb2RlO1xuXHRsZXQgZXNjYXBlVXJsO1xuXG5cdGNvbnN0IGxlbmd0aHMgPSB3b3JkTGVuZ3RocyhzdHJpbmcpO1xuXHRsZXQgcm93cyA9IFsnJ107XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIHdvcmRdIG9mIHN0cmluZy5zcGxpdCgnICcpLmVudHJpZXMoKSkge1xuXHRcdGlmIChvcHRpb25zLnRyaW0gIT09IGZhbHNlKSB7XG5cdFx0XHRyb3dzW3Jvd3MubGVuZ3RoIC0gMV0gPSByb3dzLmF0KC0xKS50cmltU3RhcnQoKTtcblx0XHR9XG5cblx0XHRsZXQgcm93TGVuZ3RoID0gc3RyaW5nV2lkdGgocm93cy5hdCgtMSkpO1xuXG5cdFx0aWYgKGluZGV4ICE9PSAwKSB7XG5cdFx0XHRpZiAocm93TGVuZ3RoID49IGNvbHVtbnMgJiYgKG9wdGlvbnMud29yZFdyYXAgPT09IGZhbHNlIHx8IG9wdGlvbnMudHJpbSA9PT0gZmFsc2UpKSB7XG5cdFx0XHRcdC8vIElmIHdlIHN0YXJ0IHdpdGggYSBuZXcgd29yZCBidXQgdGhlIGN1cnJlbnQgcm93IGxlbmd0aCBlcXVhbHMgdGhlIGxlbmd0aCBvZiB0aGUgY29sdW1ucywgYWRkIGEgbmV3IHJvd1xuXHRcdFx0XHRyb3dzLnB1c2goJycpO1xuXHRcdFx0XHRyb3dMZW5ndGggPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocm93TGVuZ3RoID4gMCB8fCBvcHRpb25zLnRyaW0gPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJvd3Nbcm93cy5sZW5ndGggLSAxXSArPSAnICc7XG5cdFx0XHRcdHJvd0xlbmd0aCsrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEluICdoYXJkJyB3cmFwIG1vZGUsIHRoZSBsZW5ndGggb2YgYSBsaW5lIGlzIG5ldmVyIGFsbG93ZWQgdG8gZXh0ZW5kIHBhc3QgJ2NvbHVtbnMnXG5cdFx0aWYgKG9wdGlvbnMuaGFyZCAmJiBsZW5ndGhzW2luZGV4XSA+IGNvbHVtbnMpIHtcblx0XHRcdGNvbnN0IHJlbWFpbmluZ0NvbHVtbnMgPSAoY29sdW1ucyAtIHJvd0xlbmd0aCk7XG5cdFx0XHRjb25zdCBicmVha3NTdGFydGluZ1RoaXNMaW5lID0gMSArIE1hdGguZmxvb3IoKGxlbmd0aHNbaW5kZXhdIC0gcmVtYWluaW5nQ29sdW1ucyAtIDEpIC8gY29sdW1ucyk7XG5cdFx0XHRjb25zdCBicmVha3NTdGFydGluZ05leHRMaW5lID0gTWF0aC5mbG9vcigobGVuZ3Roc1tpbmRleF0gLSAxKSAvIGNvbHVtbnMpO1xuXHRcdFx0aWYgKGJyZWFrc1N0YXJ0aW5nTmV4dExpbmUgPCBicmVha3NTdGFydGluZ1RoaXNMaW5lKSB7XG5cdFx0XHRcdHJvd3MucHVzaCgnJyk7XG5cdFx0XHR9XG5cblx0XHRcdHdyYXBXb3JkKHJvd3MsIHdvcmQsIGNvbHVtbnMpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHJvd0xlbmd0aCArIGxlbmd0aHNbaW5kZXhdID4gY29sdW1ucyAmJiByb3dMZW5ndGggPiAwICYmIGxlbmd0aHNbaW5kZXhdID4gMCkge1xuXHRcdFx0aWYgKG9wdGlvbnMud29yZFdyYXAgPT09IGZhbHNlICYmIHJvd0xlbmd0aCA8IGNvbHVtbnMpIHtcblx0XHRcdFx0d3JhcFdvcmQocm93cywgd29yZCwgY29sdW1ucyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyb3dzLnB1c2goJycpO1xuXHRcdH1cblxuXHRcdGlmIChyb3dMZW5ndGggKyBsZW5ndGhzW2luZGV4XSA+IGNvbHVtbnMgJiYgb3B0aW9ucy53b3JkV3JhcCA9PT0gZmFsc2UpIHtcblx0XHRcdHdyYXBXb3JkKHJvd3MsIHdvcmQsIGNvbHVtbnMpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cm93c1tyb3dzLmxlbmd0aCAtIDFdICs9IHdvcmQ7XG5cdH1cblxuXHRpZiAob3B0aW9ucy50cmltICE9PSBmYWxzZSkge1xuXHRcdHJvd3MgPSByb3dzLm1hcChyb3cgPT4gc3RyaW5nVmlzaWJsZVRyaW1TcGFjZXNSaWdodChyb3cpKTtcblx0fVxuXG5cdGNvbnN0IHByZVN0cmluZyA9IHJvd3Muam9pbignXFxuJyk7XG5cdGNvbnN0IHByZSA9IFsuLi5wcmVTdHJpbmddO1xuXG5cdC8vIFdlIG5lZWQgdG8ga2VlcCBhIHNlcGFyYXRlIGluZGV4IGFzIGBTdHJpbmcjc2xpY2UoKWAgd29ya3Mgb24gVW5pY29kZSBjb2RlIHVuaXRzLCB3aGlsZSBgcHJlYCBpcyBhbiBhcnJheSBvZiBjb2RlcG9pbnRzLlxuXHRsZXQgcHJlU3RyaW5nSW5kZXggPSAwO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBjaGFyYWN0ZXJdIG9mIHByZS5lbnRyaWVzKCkpIHtcblx0XHRyZXR1cm5WYWx1ZSArPSBjaGFyYWN0ZXI7XG5cblx0XHRpZiAoRVNDQVBFUy5oYXMoY2hhcmFjdGVyKSkge1xuXHRcdFx0Y29uc3Qge2dyb3Vwc30gPSBuZXcgUmVnRXhwKGAoPzpcXFxcJHtBTlNJX0NTSX0oPzxjb2RlPlxcXFxkKyltfFxcXFwke0FOU0lfRVNDQVBFX0xJTkt9KD88dXJpPi4qKSR7QU5TSV9FU0NBUEVfQkVMTH0pYCkuZXhlYyhwcmVTdHJpbmcuc2xpY2UocHJlU3RyaW5nSW5kZXgpKSB8fCB7Z3JvdXBzOiB7fX07XG5cdFx0XHRpZiAoZ3JvdXBzLmNvZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb25zdCBjb2RlID0gTnVtYmVyLnBhcnNlRmxvYXQoZ3JvdXBzLmNvZGUpO1xuXHRcdFx0XHRlc2NhcGVDb2RlID0gY29kZSA9PT0gRU5EX0NPREUgPyB1bmRlZmluZWQgOiBjb2RlO1xuXHRcdFx0fSBlbHNlIGlmIChncm91cHMudXJpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZXNjYXBlVXJsID0gZ3JvdXBzLnVyaS5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiBncm91cHMudXJpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGNvZGUgPSBhbnNpU3R5bGVzLmNvZGVzLmdldChOdW1iZXIoZXNjYXBlQ29kZSkpO1xuXG5cdFx0aWYgKHByZVtpbmRleCArIDFdID09PSAnXFxuJykge1xuXHRcdFx0aWYgKGVzY2FwZVVybCkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSArPSB3cmFwQW5zaUh5cGVybGluaygnJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlc2NhcGVDb2RlICYmIGNvZGUpIHtcblx0XHRcdFx0cmV0dXJuVmFsdWUgKz0gd3JhcEFuc2lDb2RlKGNvZGUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSAnXFxuJykge1xuXHRcdFx0aWYgKGVzY2FwZUNvZGUgJiYgY29kZSkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSArPSB3cmFwQW5zaUNvZGUoZXNjYXBlQ29kZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlc2NhcGVVcmwpIHtcblx0XHRcdFx0cmV0dXJuVmFsdWUgKz0gd3JhcEFuc2lIeXBlcmxpbmsoZXNjYXBlVXJsKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcmVTdHJpbmdJbmRleCArPSBjaGFyYWN0ZXIubGVuZ3RoO1xuXHR9XG5cblx0cmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuLy8gRm9yIGVhY2ggbmV3bGluZSwgaW52b2tlIHRoZSBtZXRob2Qgc2VwYXJhdGVseVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JhcEFuc2koc3RyaW5nLCBjb2x1bW5zLCBvcHRpb25zKSB7XG5cdHJldHVybiBTdHJpbmcoc3RyaW5nKVxuXHRcdC5ub3JtYWxpemUoKVxuXHRcdC5yZXBsYWNlQWxsKCdcXHJcXG4nLCAnXFxuJylcblx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0Lm1hcChsaW5lID0+IGV4ZWMobGluZSwgY29sdW1ucywgb3B0aW9ucykpXG5cdFx0LmpvaW4oJ1xcbicpO1xufVxuIiwgIi8vIEJvb3RzdHJhcCBjbGl1aSB3aXRoIENvbW1vbkpTIGRlcGVuZGVuY2llczpcbmltcG9ydCB7IGNsaXVpIH0gZnJvbSAnLi9idWlsZC9saWIvaW5kZXguanMnXG5pbXBvcnQgc3RyaW5nV2lkdGggZnJvbSAnc3RyaW5nLXdpZHRoJ1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tICdzdHJpcC1hbnNpJ1xuaW1wb3J0IHdyYXBBbnNpIGZyb20gJ3dyYXAtYW5zaSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdWkgKG9wdHMpIHtcbiAgcmV0dXJuIGNsaXVpKG9wdHMsIHtcbiAgICBzdHJpbmdXaWR0aCxcbiAgICBzdHJpcEFuc2ksXG4gICAgd3JhcDogd3JhcEFuc2lcbiAgfSlcbn1cblxuZXhwb3J0IHt1aSBhcyAnbW9kdWxlLmV4cG9ydHMnfTtcbiIsICJpbXBvcnQgeyBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyByZWFkZGlyU3luYywgc3RhdFN5bmMgfSBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGFydCwgY2FsbGJhY2spIHtcblx0bGV0IGRpciA9IHJlc29sdmUoJy4nLCBzdGFydCk7XG5cdGxldCB0bXAsIHN0YXRzID0gc3RhdFN5bmMoZGlyKTtcblxuXHRpZiAoIXN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcblx0XHRkaXIgPSBkaXJuYW1lKGRpcik7XG5cdH1cblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdHRtcCA9IGNhbGxiYWNrKGRpciwgcmVhZGRpclN5bmMoZGlyKSk7XG5cdFx0aWYgKHRtcCkgcmV0dXJuIHJlc29sdmUoZGlyLCB0bXApO1xuXHRcdGRpciA9IGRpcm5hbWUodG1wID0gZGlyKTtcblx0XHRpZiAodG1wID09PSBkaXIpIGJyZWFrO1xuXHR9XG59XG4iLCAiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1haW4gZW50cnlwb2ludCBmb3IgbGlicmFyaWVzIHVzaW5nIHlhcmdzLXBhcnNlciBpbiBOb2RlLmpzXG4gKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbnZhciBfYSwgX2IsIF9jO1xuLyogZXNsaW50LWRpc2FibGUgbi9uby11bnB1Ymxpc2hlZC1pbXBvcnQgKi9cbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgbm9ybWFsaXplLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBjYW1lbENhc2UsIGRlY2FtZWxpemUsIGxvb2tzTGlrZU51bWJlciB9IGZyb20gJy4vc3RyaW5nLXV0aWxzLmpzJztcbmltcG9ydCB7IFlhcmdzUGFyc2VyIH0gZnJvbSAnLi95YXJncy1wYXJzZXIuanMnO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ25vZGU6bW9kdWxlJztcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20veWFyZ3MveWFyZ3MtcGFyc2VyI3N1cHBvcnRlZC1ub2RlanMtdmVyc2lvbnMgZm9yIG91clxuLy8gdmVyc2lvbiBzdXBwb3J0IHBvbGljeS4gVGhlIFlBUkdTX01JTl9OT0RFX1ZFUlNJT04gaXMgdXNlZCBmb3IgdGVzdGluZyBvbmx5LlxuY29uc3QgbWluTm9kZVZlcnNpb24gPSAocHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5ZQVJHU19NSU5fTk9ERV9WRVJTSU9OKVxuICAgID8gTnVtYmVyKHByb2Nlc3MuZW52LllBUkdTX01JTl9OT0RFX1ZFUlNJT04pXG4gICAgOiAyMDtcbmNvbnN0IG5vZGVWZXJzaW9uID0gKF9iID0gKF9hID0gcHJvY2VzcyA9PT0gbnVsbCB8fCBwcm9jZXNzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9jZXNzLnZlcnNpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKF9jID0gcHJvY2VzcyA9PT0gbnVsbCB8fCBwcm9jZXNzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9jZXNzLnZlcnNpb24pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zbGljZSgxKTtcbmlmIChub2RlVmVyc2lvbikge1xuICAgIGNvbnN0IG1ham9yID0gTnVtYmVyKG5vZGVWZXJzaW9uLm1hdGNoKC9eKFteLl0rKS8pWzFdKTtcbiAgICBpZiAobWFqb3IgPCBtaW5Ob2RlVmVyc2lvbikge1xuICAgICAgICB0aHJvdyBFcnJvcihgeWFyZ3MgcGFyc2VyIHN1cHBvcnRzIGEgbWluaW11bSBOb2RlLmpzIHZlcnNpb24gb2YgJHttaW5Ob2RlVmVyc2lvbn0uIFJlYWQgb3VyIHZlcnNpb24gc3VwcG9ydCBwb2xpY3k6IGh0dHBzOi8vZ2l0aHViLmNvbS95YXJncy95YXJncy1wYXJzZXIjc3VwcG9ydGVkLW5vZGVqcy12ZXJzaW9uc2ApO1xuICAgIH1cbn1cbi8vIENyZWF0ZXMgYSB5YXJncy1wYXJzZXIgaW5zdGFuY2UgdXNpbmcgTm9kZS5qcyBzdGFuZGFyZCBsaWJyYXJpZXM6XG5jb25zdCBlbnYgPSBwcm9jZXNzID8gcHJvY2Vzcy5lbnYgOiB7fTtcbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlID8gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpIDogdW5kZWZpbmVkO1xuY29uc3QgcGFyc2VyID0gbmV3IFlhcmdzUGFyc2VyKHtcbiAgICBjd2Q6IHByb2Nlc3MuY3dkLFxuICAgIGVudjogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW52O1xuICAgIH0sXG4gICAgZm9ybWF0LFxuICAgIG5vcm1hbGl6ZSxcbiAgICByZXNvbHZlLFxuICAgIHJlcXVpcmU6IChwYXRoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlKHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGgubWF0Y2goL1xcLmpzb24kLykpIHtcbiAgICAgICAgICAgIC8vIEFkZHJlc3NlczogaHR0cHM6Ly9naXRodWIuY29tL3lhcmdzL3lhcmdzL2lzc3Vlcy8yMDQwXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMocGF0aCwgJ3V0ZjgnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignb25seSAuanNvbiBjb25maWcgZmlsZXMgYXJlIHN1cHBvcnRlZCBpbiBFU00nKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuY29uc3QgeWFyZ3NQYXJzZXIgPSBmdW5jdGlvbiBQYXJzZXIoYXJncywgb3B0cykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlci5wYXJzZShhcmdzLnNsaWNlKCksIG9wdHMpO1xuICAgIHJldHVybiByZXN1bHQuYXJndjtcbn07XG55YXJnc1BhcnNlci5kZXRhaWxlZCA9IGZ1bmN0aW9uIChhcmdzLCBvcHRzKSB7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZShhcmdzLnNsaWNlKCksIG9wdHMpO1xufTtcbnlhcmdzUGFyc2VyLmNhbWVsQ2FzZSA9IGNhbWVsQ2FzZTtcbnlhcmdzUGFyc2VyLmRlY2FtZWxpemUgPSBkZWNhbWVsaXplO1xueWFyZ3NQYXJzZXIubG9va3NMaWtlTnVtYmVyID0gbG9va3NMaWtlTnVtYmVyO1xuZXhwb3J0IGRlZmF1bHQgeWFyZ3NQYXJzZXI7XG4vLyBzcGVjaWFsIHN5bnRheCB0byBhbGxvdyB1bnF1YWxpZmllZCBkZWZhdWx0IGV4cG9ydCBmcm9tIENvbW1vbkpTXG5leHBvcnQgeyB5YXJnc1BhcnNlciBhcyAnbW9kdWxlLmV4cG9ydHMnIH07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBDb250cmlidXRvcnNcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBJU0NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZShzdHIpIHtcbiAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYW4gYXJndW1lbnQgaXMgcHJvdmlkZWQgYXMgY2FtZWwgY2FzZSwgZS5nLiwgZm9vQmFyLlxuICAgIC8vIGJ5IGVuc3VyaW5nIHRoYXQgdGhlIHN0cmluZyBpc24ndCBhbHJlYWR5IG1peGVkIGNhc2U6XG4gICAgY29uc3QgaXNDYW1lbENhc2UgPSBzdHIgIT09IHN0ci50b0xvd2VyQ2FzZSgpICYmIHN0ciAhPT0gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKCFpc0NhbWVsQ2FzZSkge1xuICAgICAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgaWYgKHN0ci5pbmRleE9mKCctJykgPT09IC0xICYmIHN0ci5pbmRleE9mKCdfJykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgY2FtZWxjYXNlID0gJyc7XG4gICAgICAgIGxldCBuZXh0Q2hyVXBwZXIgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgbGVhZGluZ0h5cGhlbnMgPSBzdHIubWF0Y2goL14tKy8pO1xuICAgICAgICBmb3IgKGxldCBpID0gbGVhZGluZ0h5cGhlbnMgPyBsZWFkaW5nSHlwaGVuc1swXS5sZW5ndGggOiAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hyID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGlmIChuZXh0Q2hyVXBwZXIpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2hyVXBwZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjaHIgPSBjaHIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9PSAwICYmIChjaHIgPT09ICctJyB8fCBjaHIgPT09ICdfJykpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2hyVXBwZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hyICE9PSAnLScgJiYgY2hyICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBjYW1lbGNhc2UgKz0gY2hyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW1lbGNhc2U7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlY2FtZWxpemUoc3RyLCBqb2luU3RyaW5nKSB7XG4gICAgY29uc3QgbG93ZXJjYXNlID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgam9pblN0cmluZyA9IGpvaW5TdHJpbmcgfHwgJy0nO1xuICAgIGxldCBub3RDYW1lbGNhc2UgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaHJMb3dlciA9IGxvd2VyY2FzZS5jaGFyQXQoaSk7XG4gICAgICAgIGNvbnN0IGNoclN0cmluZyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIGlmIChjaHJMb3dlciAhPT0gY2hyU3RyaW5nICYmIGkgPiAwKSB7XG4gICAgICAgICAgICBub3RDYW1lbGNhc2UgKz0gYCR7am9pblN0cmluZ30ke2xvd2VyY2FzZS5jaGFyQXQoaSl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vdENhbWVsY2FzZSArPSBjaHJTdHJpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vdENhbWVsY2FzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb29rc0xpa2VOdW1iZXIoeCkge1xuICAgIGlmICh4ID09PSBudWxsIHx8IHggPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGlmIGxvYWRlZCBmcm9tIGNvbmZpZywgbWF5IGFscmVhZHkgYmUgYSBudW1iZXIuXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gaGV4YWRlY2ltYWwuXG4gICAgaWYgKC9eMHhbMC05YS1mXSskL2kudGVzdCh4KSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gZG9uJ3QgdHJlYXQgMDEyMyBhcyBhIG51bWJlcjsgYXMgaXQgZHJvcHMgdGhlIGxlYWRpbmcgJzAnLlxuICAgIGlmICgvXjBbXi5dLy50ZXN0KHgpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIC9eWy1dPyg/OlxcZCsoPzpcXC5cXGQqKT98XFwuXFxkKykoZVstK10/XFxkKyk/JC8udGVzdCh4KTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIENvbnRyaWJ1dG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IElTQ1xuICovXG4vLyB0YWtlIGFuIHVuLXNwbGl0IGFyZ3Ygc3RyaW5nIGFuZCB0b2tlbml6ZSBpdC5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZUFyZ1N0cmluZyhhcmdTdHJpbmcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiBhcmdTdHJpbmcubWFwKGUgPT4gdHlwZW9mIGUgIT09ICdzdHJpbmcnID8gZSArICcnIDogZSk7XG4gICAgfVxuICAgIGFyZ1N0cmluZyA9IGFyZ1N0cmluZy50cmltKCk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBwcmV2QyA9IG51bGw7XG4gICAgbGV0IGMgPSBudWxsO1xuICAgIGxldCBvcGVuaW5nID0gbnVsbDtcbiAgICBjb25zdCBhcmdzID0gW107XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGFyZ1N0cmluZy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgcHJldkMgPSBjO1xuICAgICAgICBjID0gYXJnU3RyaW5nLmNoYXJBdChpaSk7XG4gICAgICAgIC8vIHNwbGl0IG9uIHNwYWNlcyB1bmxlc3Mgd2UncmUgaW4gcXVvdGVzLlxuICAgICAgICBpZiAoYyA9PT0gJyAnICYmICFvcGVuaW5nKSB7XG4gICAgICAgICAgICBpZiAoIShwcmV2QyA9PT0gJyAnKSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvbid0IHNwbGl0IHRoZSBzdHJpbmcgaWYgd2UncmUgaW4gbWF0Y2hpbmdcbiAgICAgICAgLy8gb3BlbmluZyBvciBjbG9zaW5nIHNpbmdsZSBhbmQgZG91YmxlIHF1b3Rlcy5cbiAgICAgICAgaWYgKGMgPT09IG9wZW5pbmcpIHtcbiAgICAgICAgICAgIG9wZW5pbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChjID09PSBcIidcIiB8fCBjID09PSAnXCInKSAmJiAhb3BlbmluZykge1xuICAgICAgICAgICAgb3BlbmluZyA9IGM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhcmdzW2ldKVxuICAgICAgICAgICAgYXJnc1tpXSA9ICcnO1xuICAgICAgICBhcmdzW2ldICs9IGM7XG4gICAgfVxuICAgIHJldHVybiBhcmdzO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgQ29udHJpYnV0b3JzXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogSVNDXG4gKi9cbmV4cG9ydCB2YXIgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXk7XG4oZnVuY3Rpb24gKERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5KSB7XG4gICAgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXlbXCJCT09MRUFOXCJdID0gXCJib29sZWFuXCI7XG4gICAgRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXlbXCJTVFJJTkdcIl0gPSBcInN0cmluZ1wiO1xuICAgIERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5W1wiTlVNQkVSXCJdID0gXCJudW1iZXJcIjtcbiAgICBEZWZhdWx0VmFsdWVzRm9yVHlwZUtleVtcIkFSUkFZXCJdID0gXCJhcnJheVwiO1xufSkoRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkgfHwgKERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5ID0ge30pKTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIENvbnRyaWJ1dG9yc1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IElTQ1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItYXJyb3ctY2FsbGJhY2sgKi9cbmltcG9ydCB7IHRva2VuaXplQXJnU3RyaW5nIH0gZnJvbSAnLi90b2tlbml6ZS1hcmctc3RyaW5nLmpzJztcbmltcG9ydCB7IERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5IH0gZnJvbSAnLi95YXJncy1wYXJzZXItdHlwZXMuanMnO1xuaW1wb3J0IHsgY2FtZWxDYXNlLCBkZWNhbWVsaXplLCBsb29rc0xpa2VOdW1iZXIgfSBmcm9tICcuL3N0cmluZy11dGlscy5qcyc7XG5sZXQgbWl4aW47XG5leHBvcnQgY2xhc3MgWWFyZ3NQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKF9taXhpbikge1xuICAgICAgICBtaXhpbiA9IF9taXhpbjtcbiAgICB9XG4gICAgcGFyc2UoYXJnc0lucHV0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGFsaWFzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhcnJheTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYm9vbGVhbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29uZmlnOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb25maWdPYmplY3RzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb2VyY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvdW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBlbnZQcmVmaXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5hcmc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vcm1hbGl6ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3RyaW5nOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBudW1iZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9fOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBrZXk6IHVuZGVmaW5lZFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgLy8gYWxsb3cgYSBzdHJpbmcgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGluIHJhdGhlclxuICAgICAgICAvLyB0aGFuIGFuIGFyZ3YgYXJyYXkuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSB0b2tlbml6ZUFyZ1N0cmluZyhhcmdzSW5wdXQpO1xuICAgICAgICAvLyB0b2tlbml6ZUFyZ1N0cmluZyBhZGRzIGV4dHJhIHF1b3RlcyB0byBhcmdzIGlmIGFyZ3NJbnB1dCBpcyBhIHN0cmluZ1xuICAgICAgICAvLyBvbmx5IHN0cmlwIHRob3NlIGV4dHJhIHF1b3RlcyBpbiBwcm9jZXNzVmFsdWUgaWYgYXJnc0lucHV0IGlzIGEgc3RyaW5nXG4gICAgICAgIGNvbnN0IGlucHV0SXNTdHJpbmcgPSB0eXBlb2YgYXJnc0lucHV0ID09PSAnc3RyaW5nJztcbiAgICAgICAgLy8gYWxpYXNlcyBtaWdodCBoYXZlIHRyYW5zaXRpdmUgcmVsYXRpb25zaGlwcywgbm9ybWFsaXplIHRoaXMuXG4gICAgICAgIGNvbnN0IGFsaWFzZXMgPSBjb21iaW5lQWxpYXNlcyhPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIG9wdHMuYWxpYXMpKTtcbiAgICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgJ2Jvb2xlYW4tbmVnYXRpb24nOiB0cnVlLFxuICAgICAgICAgICAgJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJzogdHJ1ZSxcbiAgICAgICAgICAgICdjb21iaW5lLWFycmF5cyc6IGZhbHNlLFxuICAgICAgICAgICAgJ2RvdC1ub3RhdGlvbic6IHRydWUsXG4gICAgICAgICAgICAnZHVwbGljYXRlLWFyZ3VtZW50cy1hcnJheSc6IHRydWUsXG4gICAgICAgICAgICAnZmxhdHRlbi1kdXBsaWNhdGUtYXJyYXlzJzogdHJ1ZSxcbiAgICAgICAgICAgICdncmVlZHktYXJyYXlzJzogdHJ1ZSxcbiAgICAgICAgICAgICdoYWx0LWF0LW5vbi1vcHRpb24nOiBmYWxzZSxcbiAgICAgICAgICAgICduYXJncy1lYXRzLW9wdGlvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICduZWdhdGlvbi1wcmVmaXgnOiAnbm8tJyxcbiAgICAgICAgICAgICdwYXJzZS1udW1iZXJzJzogdHJ1ZSxcbiAgICAgICAgICAgICdwYXJzZS1wb3NpdGlvbmFsLW51bWJlcnMnOiB0cnVlLFxuICAgICAgICAgICAgJ3BvcHVsYXRlLS0nOiBmYWxzZSxcbiAgICAgICAgICAgICdzZXQtcGxhY2Vob2xkZXIta2V5JzogZmFsc2UsXG4gICAgICAgICAgICAnc2hvcnQtb3B0aW9uLWdyb3Vwcyc6IHRydWUsXG4gICAgICAgICAgICAnc3RyaXAtYWxpYXNlZCc6IGZhbHNlLFxuICAgICAgICAgICAgJ3N0cmlwLWRhc2hlZCc6IGZhbHNlLFxuICAgICAgICAgICAgJ3Vua25vd24tb3B0aW9ucy1hcy1hcmdzJzogZmFsc2VcbiAgICAgICAgfSwgb3B0cy5jb25maWd1cmF0aW9uKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIG9wdHMuZGVmYXVsdCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZ09iamVjdHMgPSBvcHRzLmNvbmZpZ09iamVjdHMgfHwgW107XG4gICAgICAgIGNvbnN0IGVudlByZWZpeCA9IG9wdHMuZW52UHJlZml4O1xuICAgICAgICBjb25zdCBub3RGbGFnc09wdGlvbiA9IGNvbmZpZ3VyYXRpb25bJ3BvcHVsYXRlLS0nXTtcbiAgICAgICAgY29uc3Qgbm90RmxhZ3NBcmd2ID0gbm90RmxhZ3NPcHRpb24gPyAnLS0nIDogJ18nO1xuICAgICAgICBjb25zdCBuZXdBbGlhc2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdGVkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgLy8gYWxsb3cgYSBpMThuIGhhbmRsZXIgdG8gYmUgcGFzc2VkIGluLCBkZWZhdWx0IHRvIGEgZmFrZSBvbmUgKHV0aWwuZm9ybWF0KS5cbiAgICAgICAgY29uc3QgX18gPSBvcHRzLl9fIHx8IG1peGluLmZvcm1hdDtcbiAgICAgICAgY29uc3QgZmxhZ3MgPSB7XG4gICAgICAgICAgICBhbGlhc2VzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgYXJyYXlzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgYm9vbHM6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBzdHJpbmdzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgbnVtYmVyczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGNvdW50czogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZTogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGNvbmZpZ3M6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICBuYXJnczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGNvZXJjaW9uczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgICAgIGtleXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlID0gL14tKFswLTldKyhcXC5bMC05XSspP3xcXC5bMC05XSspJC87XG4gICAgICAgIGNvbnN0IG5lZ2F0ZWRCb29sZWFuID0gbmV3IFJlZ0V4cCgnXi0tJyArIGNvbmZpZ3VyYXRpb25bJ25lZ2F0aW9uLXByZWZpeCddICsgJyguKyknKTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMuYXJyYXkgfHwgW10pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBvcHQgPT09ICdvYmplY3QnID8gb3B0LmtleSA6IG9wdDtcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0byBmbGFnc1tib29sc3xzdHJpbmdzfG51bWJlcnNdXG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50ID0gT2JqZWN0LmtleXMob3B0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5RmxhZ0tleXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2xlYW46ICdib29scycsXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogJ3N0cmluZ3MnLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXI6ICdudW1iZXJzJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5RmxhZ0tleXNba2V5XTtcbiAgICAgICAgICAgIH0pLmZpbHRlcihCb29sZWFuKS5wb3AoKTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBrZXkgdG8gYmUgY29lcmNlZFxuICAgICAgICAgICAgaWYgKGFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICBmbGFnc1thc3NpZ25tZW50XVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZsYWdzLmFycmF5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMuYm9vbGVhbiB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3MuYm9vbHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICBmbGFncy5rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFtdLmNvbmNhdChvcHRzLnN0cmluZyB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3Muc3RyaW5nc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgW10uY29uY2F0KG9wdHMubnVtYmVyIHx8IFtdKS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBmbGFncy5udW1iZXJzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5jb3VudCB8fCBbXSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmxhZ3MuY291bnRzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBbXS5jb25jYXQob3B0cy5ub3JtYWxpemUgfHwgW10pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGZsYWdzLm5vcm1hbGl6ZVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLm5hcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzLm5hcmcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLm5hcmdzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3Mua2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmNvZXJjZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdHMuY29lcmNlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmNvZXJjaW9uc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5jb25maWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRzLmNvbmZpZykgfHwgdHlwZW9mIG9wdHMuY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBbXS5jb25jYXQob3B0cy5jb25maWcpLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuY29uZmlnc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRzLmNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzLmNvbmZpZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzLmNvbmZpZ3Nba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIGEgbG9va3VwIHRhYmxlIHRoYXQgdGFrZXMgaW50byBhY2NvdW50IGFsbFxuICAgICAgICAvLyBjb21iaW5hdGlvbnMgb2YgYWxpYXNlczoge2Y6IFsnZm9vJ10sIGZvbzogWydmJ119XG4gICAgICAgIGV4dGVuZEFsaWFzZXMob3B0cy5rZXksIGFsaWFzZXMsIG9wdHMuZGVmYXVsdCwgZmxhZ3MuYXJyYXlzKTtcbiAgICAgICAgLy8gYXBwbHkgZGVmYXVsdCB2YWx1ZXMgdG8gYWxsIGFsaWFzZXMuXG4gICAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIChmbGFncy5hbGlhc2VzW2tleV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHNbYWxpYXNdID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICAgICAgY2hlY2tDb25maWd1cmF0aW9uKCk7XG4gICAgICAgIGxldCBub3RGbGFncyA9IFtdO1xuICAgICAgICBjb25zdCBhcmd2ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7IF86IFtdIH0pO1xuICAgICAgICAvLyBUT0RPKGJjb2UpOiBmb3IgdGhlIGZpcnN0IHBhc3MgYXQgcmVtb3Zpbmcgb2JqZWN0IHByb3RvdHlwZSAgd2UgZGlkbid0XG4gICAgICAgIC8vIHJlbW92ZSBhbGwgcHJvdG90eXBlcyBmcm9tIG9iamVjdHMgcmV0dXJuZWQgYnkgdGhpcyBBUEksIHdlIG1pZ2h0IHdhbnRcbiAgICAgICAgLy8gdG8gZ3JhZHVhbGx5IG1vdmUgdG93YXJkcyBkb2luZyBzby5cbiAgICAgICAgY29uc3QgYXJndlJldHVybiA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaV07XG4gICAgICAgICAgICBjb25zdCB0cnVuY2F0ZWRBcmcgPSBhcmcucmVwbGFjZSgvXi17Myx9LywgJy0tLScpO1xuICAgICAgICAgICAgbGV0IGJyb2tlbjtcbiAgICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgICBsZXQgbGV0dGVycztcbiAgICAgICAgICAgIGxldCBtO1xuICAgICAgICAgICAgbGV0IG5leHQ7XG4gICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAvLyBhbnkgdW5rbm93biBvcHRpb24gKGV4Y2VwdCBmb3IgZW5kLW9mLW9wdGlvbnMsIFwiLS1cIilcbiAgICAgICAgICAgIGlmIChhcmcgIT09ICctLScgJiYgL14tLy50ZXN0KGFyZykgJiYgaXNVbmtub3duT3B0aW9uQXNBcmcoYXJnKSkge1xuICAgICAgICAgICAgICAgIHB1c2hQb3NpdGlvbmFsKGFyZyk7XG4gICAgICAgICAgICAgICAgLy8gLS0tLCAtLS09LCAtLS0tLCBldGMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0cnVuY2F0ZWRBcmcubWF0Y2goL14tLS0rKD18JCkvKSkge1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbnMgd2l0aG91dCBrZXkgbmFtZSBhcmUgaW52YWxpZC5cbiAgICAgICAgICAgICAgICBwdXNoUG9zaXRpb25hbChhcmcpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIC8vIC0tIHNlcGFyYXRlZCBieSA9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLS4rPS8pIHx8ICghY29uZmlndXJhdGlvblsnc2hvcnQtb3B0aW9uLWdyb3VwcyddICYmIGFyZy5tYXRjaCgvXi0uKz0vKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBVc2luZyBbXFxzXFxTXSBpbnN0ZWFkIG9mIC4gYmVjYXVzZSBqcyBkb2Vzbid0IHN1cHBvcnQgdGhlXG4gICAgICAgICAgICAgICAgLy8gJ2RvdGFsbCcgcmVnZXggbW9kaWZpZXIuIFNlZTpcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMDY4MzA4LzEzMjE2XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0tPyhbXj1dKyk9KFtcXHNcXFNdKikkLyk7XG4gICAgICAgICAgICAgICAgLy8gYXJyYXlzIGZvcm1hdCA9ICctLWY9YSBiIGMnXG4gICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwgJiYgQXJyYXkuaXNBcnJheShtKSAmJiBtLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMobVsxXSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIG1bMV0sIGFyZ3MsIG1bMl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhtWzFdLCBmbGFncy5uYXJncykgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuYXJncyBmb3JtYXQgPSAnLS1mPW1vbmtleSB3YXNoaW5nIGNhdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlYXROYXJncyhpLCBtWzFdLCBhcmdzLCBtWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhtWzFdLCBtWzJdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZy5tYXRjaChuZWdhdGVkQm9vbGVhbikgJiYgY29uZmlndXJhdGlvblsnYm9vbGVhbi1uZWdhdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaChuZWdhdGVkQm9vbGVhbik7XG4gICAgICAgICAgICAgICAgaWYgKG0gIT09IG51bGwgJiYgQXJyYXkuaXNBcnJheShtKSAmJiBtLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IG1bMV07XG4gICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykgPyBbZmFsc2VdIDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAtLSBzZXBhcmF0ZWQgYnkgc3BhY2UuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLS4rLykgfHwgKCFjb25maWd1cmF0aW9uWydzaG9ydC1vcHRpb24tZ3JvdXBzJ10gJiYgYXJnLm1hdGNoKC9eLVteLV0rLykpKSB7XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0tPyguKykvKTtcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gbVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IGZvcm1hdCA9ICctLWZvbyBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlYXRBcnJheShpLCBrZXksIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctLWZvbyBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSB0cnV0aHkgZXZlbiBpZjogZmxhZ3MubmFyZ3Nba2V5XSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICghbmV4dC5tYXRjaCgvXi0vKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQubWF0Y2gobmVnYXRpdmUpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9eKHRydWV8ZmFsc2UpJC8udGVzdChuZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb3Qtbm90YXRpb24gZmxhZyBzZXBhcmF0ZWQgYnkgJz0nLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnLm1hdGNoKC9eLS5cXC4uKz0vKSkge1xuICAgICAgICAgICAgICAgIG0gPSBhcmcubWF0Y2goL14tKFtePV0rKT0oW1xcc1xcU10qKSQvKTtcbiAgICAgICAgICAgICAgICBpZiAobSAhPT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KG0pICYmIG0ubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXJnKG1bMV0sIG1bMl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb3Qtbm90YXRpb24gZmxhZyBzZXBhcmF0ZWQgYnkgc3BhY2UuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tLlxcLi4rLykgJiYgIWFyZy5tYXRjaChuZWdhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICAgICAgbSA9IGFyZy5tYXRjaCgvXi0oLlxcLi4rKS8pO1xuICAgICAgICAgICAgICAgIGlmIChtICE9PSBudWxsICYmIEFycmF5LmlzQXJyYXkobSkgJiYgbS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBtWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICFuZXh0Lm1hdGNoKC9eLS8pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBkZWZhdWx0VmFsdWUoa2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcmcubWF0Y2goL14tW14tXSsvKSAmJiAhYXJnLm1hdGNoKG5lZ2F0aXZlKSkge1xuICAgICAgICAgICAgICAgIGxldHRlcnMgPSBhcmcuc2xpY2UoMSwgLTEpLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBicm9rZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxldHRlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGFyZy5zbGljZShqICsgMik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJzW2ogKyAxXSAmJiBsZXR0ZXJzW2ogKyAxXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyZy5zbGljZShqICsgMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBsZXR0ZXJzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnJheSBmb3JtYXQgPSAnLWY9YSBiIGMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdEFycmF5KGksIGtleSwgYXJncywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctZj1tb25rZXkgd2FzaGluZyBjYXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIGtleSwgYXJncywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgbGV0dGVyIGlzIGFuIGFscGhhYmV0aWMgY2hhcmFjdGVyIGFuZCBuZXh0IHZhbHVlIGlzIGEgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIGlmICgvW0EtWmEtel0vLnRlc3QobGV0dGVyc1tqXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC9eLT9cXGQrKFxcLlxcZCopPyhlLT9cXGQrKT8kLy50ZXN0KG5leHQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0FsbEFsaWFzZXMobmV4dCwgZmxhZ3MuYm9vbHMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJzW2ogKyAxXSAmJiBsZXR0ZXJzW2ogKyAxXS5tYXRjaCgvXFxXLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBkZWZhdWx0VmFsdWUobGV0dGVyc1tqXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGtleSA9IGFyZy5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICAgICAgaWYgKCFicm9rZW4gJiYga2V5ICE9PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IGZvcm1hdCA9ICctZiBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlYXRBcnJheShpLCBrZXksIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcmdzIGZvcm1hdCA9ICctZiBhIGIgYydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSB0cnV0aHkgZXZlbiBpZjogZmxhZ3MubmFyZ3Nba2V5XSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVhdE5hcmdzKGksIGtleSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICghL14oLXwtLSlbXi1dLy50ZXN0KG5leHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5tYXRjaChuZWdhdGl2ZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5jb3VudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL14odHJ1ZXxmYWxzZSkkLy50ZXN0KG5leHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgZGVmYXVsdFZhbHVlKGtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJnLm1hdGNoKC9eLVswLTldJC8pICYmXG4gICAgICAgICAgICAgICAgYXJnLm1hdGNoKG5lZ2F0aXZlKSAmJlxuICAgICAgICAgICAgICAgIGNoZWNrQWxsQWxpYXNlcyhhcmcuc2xpY2UoMSksIGZsYWdzLmJvb2xzKSkge1xuICAgICAgICAgICAgICAgIC8vIHNpbmdsZS1kaWdpdCBib29sZWFuIGFsaWFzLCBlLmc6IHhhcmdzIC0wXG4gICAgICAgICAgICAgICAga2V5ID0gYXJnLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRWYWx1ZShrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFyZyA9PT0gJy0tJykge1xuICAgICAgICAgICAgICAgIG5vdEZsYWdzID0gYXJncy5zbGljZShpICsgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb25maWd1cmF0aW9uWydoYWx0LWF0LW5vbi1vcHRpb24nXSkge1xuICAgICAgICAgICAgICAgIG5vdEZsYWdzID0gYXJncy5zbGljZShpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHB1c2hQb3NpdGlvbmFsKGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3JkZXIgb2YgcHJlY2VkZW5jZTpcbiAgICAgICAgLy8gMS4gY29tbWFuZCBsaW5lIGFyZ1xuICAgICAgICAvLyAyLiB2YWx1ZSBmcm9tIGVudiB2YXJcbiAgICAgICAgLy8gMy4gdmFsdWUgZnJvbSBjb25maWcgZmlsZVxuICAgICAgICAvLyA0LiB2YWx1ZSBmcm9tIGNvbmZpZyBvYmplY3RzXG4gICAgICAgIC8vIDUuIGNvbmZpZ3VyZWQgZGVmYXVsdCB2YWx1ZVxuICAgICAgICBhcHBseUVudlZhcnMoYXJndiwgdHJ1ZSk7IC8vIHNwZWNpYWwgY2FzZTogY2hlY2sgZW52IHZhcnMgdGhhdCBwb2ludCB0byBjb25maWcgZmlsZVxuICAgICAgICBhcHBseUVudlZhcnMoYXJndiwgZmFsc2UpO1xuICAgICAgICBzZXRDb25maWcoYXJndik7XG4gICAgICAgIHNldENvbmZpZ09iamVjdHMoKTtcbiAgICAgICAgYXBwbHlEZWZhdWx0c0FuZEFsaWFzZXMoYXJndiwgZmxhZ3MuYWxpYXNlcywgZGVmYXVsdHMsIHRydWUpO1xuICAgICAgICBhcHBseUNvZXJjaW9ucyhhcmd2KTtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bJ3NldC1wbGFjZWhvbGRlci1rZXknXSlcbiAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyS2V5cyhhcmd2KTtcbiAgICAgICAgLy8gZm9yIGFueSBjb3VudHMgZWl0aGVyIG5vdCBpbiBhcmdzIG9yIHdpdGhvdXQgYW4gZXhwbGljaXQgZGVmYXVsdCwgc2V0IHRvIDBcbiAgICAgICAgT2JqZWN0LmtleXMoZmxhZ3MuY291bnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICghaGFzS2V5KGFyZ3YsIGtleS5zcGxpdCgnLicpKSlcbiAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vICctLScgZGVmYXVsdHMgdG8gdW5kZWZpbmVkLlxuICAgICAgICBpZiAobm90RmxhZ3NPcHRpb24gJiYgbm90RmxhZ3MubGVuZ3RoKVxuICAgICAgICAgICAgYXJndltub3RGbGFnc0FyZ3ZdID0gW107XG4gICAgICAgIG5vdEZsYWdzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgYXJndltub3RGbGFnc0FyZ3ZdLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddICYmIGNvbmZpZ3VyYXRpb25bJ3N0cmlwLWRhc2hlZCddKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJy0tJyAmJiBrZXkuaW5jbHVkZXMoJy0nKSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcmd2W2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnc3RyaXAtYWxpYXNlZCddKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBbXS5jb25jYXQoLi4uT2JqZWN0LmtleXMoYWxpYXNlcykubWFwKGsgPT4gYWxpYXNlc1trXSkpLmZvckVhY2goYWxpYXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddICYmIGFsaWFzLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFyZ3ZbYWxpYXMuc3BsaXQoJy4nKS5tYXAocHJvcCA9PiBjYW1lbENhc2UocHJvcCkpLmpvaW4oJy4nKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBhcmd2W2FsaWFzXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFB1c2ggYXJndW1lbnQgaW50byBwb3NpdGlvbmFsIGFycmF5LCBhcHBseWluZyBudW1lcmljIGNvZXJjaW9uOlxuICAgICAgICBmdW5jdGlvbiBwdXNoUG9zaXRpb25hbChhcmcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heWJlQ29lcmNlZE51bWJlciA9IG1heWJlQ29lcmNlTnVtYmVyKCdfJywgYXJnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWF5YmVDb2VyY2VkTnVtYmVyID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWF5YmVDb2VyY2VkTnVtYmVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGFyZ3YuXy5wdXNoKG1heWJlQ29lcmNlZE51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaG93IG1hbnkgYXJndW1lbnRzIHNob3VsZCB3ZSBjb25zdW1lLCBiYXNlZFxuICAgICAgICAvLyBvbiB0aGUgbmFyZ3Mgb3B0aW9uP1xuICAgICAgICBmdW5jdGlvbiBlYXROYXJncyhpLCBrZXksIGFyZ3MsIGFyZ0FmdGVyRXF1YWxTaWduKSB7XG4gICAgICAgICAgICBsZXQgaWk7XG4gICAgICAgICAgICBsZXQgdG9FYXQgPSBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncyk7XG4gICAgICAgICAgICAvLyBOYU4gaGFzIGEgc3BlY2lhbCBtZWFuaW5nIGZvciB0aGUgYXJyYXkgdHlwZSwgaW5kaWNhdGluZyB0aGF0IG9uZSBvclxuICAgICAgICAgICAgLy8gbW9yZSB2YWx1ZXMgYXJlIGV4cGVjdGVkLlxuICAgICAgICAgICAgdG9FYXQgPSB0eXBlb2YgdG9FYXQgIT09ICdudW1iZXInIHx8IGlzTmFOKHRvRWF0KSA/IDEgOiB0b0VhdDtcbiAgICAgICAgICAgIGlmICh0b0VhdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ0FyZ3VtZW50IHVuZXhwZWN0ZWQgZm9yOiAlcycsIGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBkZWZhdWx0VmFsdWUoa2V5KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlID0gaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pID8gMCA6IDE7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvblsnbmFyZ3MtZWF0cy1vcHRpb25zJ10pIHtcbiAgICAgICAgICAgICAgICAvLyBjbGFzc2ljIGJlaGF2aW9yLCB5YXJncyBlYXRzIHBvc2l0aW9uYWwgYW5kIGRhc2ggYXJndW1lbnRzLlxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCAtIChpICsgMSkgKyBhdmFpbGFibGUgPCB0b0VhdCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyBmb2xsb3dpbmc6ICVzJywga2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZSA9IHRvRWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbmFyZ3Mgd2lsbCBub3QgY29uc3VtZSBmbGFnIGFyZ3VtZW50cywgZS5nLiwgLWFiYywgLS1mb28sXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRlcm1pbmF0ZXMgd2hlbiBvbmUgaXMgb2JzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgZm9yIChpaSA9IGkgKyAxOyBpaSA8IGFyZ3MubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJnc1tpaV0ubWF0Y2goL14tW14wLTldLykgfHwgYXJnc1tpaV0ubWF0Y2gobmVnYXRpdmUpIHx8IGlzVW5rbm93bk9wdGlvbkFzQXJnKGFyZ3NbaWldKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSsrO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSA8IHRvRWF0KVxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyBmb2xsb3dpbmc6ICVzJywga2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29uc3VtZWQgPSBNYXRoLm1pbihhdmFpbGFibGUsIHRvRWF0KTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnQWZ0ZXJFcXVhbFNpZ24pICYmIGNvbnN1bWVkID4gMCkge1xuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGFyZ0FmdGVyRXF1YWxTaWduKTtcbiAgICAgICAgICAgICAgICBjb25zdW1lZC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpaSA9IGkgKyAxOyBpaSA8IChjb25zdW1lZCArIGkgKyAxKTsgaWkrKykge1xuICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGFyZ3NbaWldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoaSArIGNvbnN1bWVkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBhbiBvcHRpb24gaXMgYW4gYXJyYXksIGVhdCBhbGwgbm9uLWh5cGhlbmF0ZWQgYXJndW1lbnRzXG4gICAgICAgIC8vIGZvbGxvd2luZyBpdC4uLiBZVU0hXG4gICAgICAgIC8vIGUuZy4sIC0tZm9vIGFwcGxlIGJhbmFuYSBjYXQgYmVjb21lcyBbXCJhcHBsZVwiLCBcImJhbmFuYVwiLCBcImNhdFwiXVxuICAgICAgICBmdW5jdGlvbiBlYXRBcnJheShpLCBrZXksIGFyZ3MsIGFyZ0FmdGVyRXF1YWxTaWduKSB7XG4gICAgICAgICAgICBsZXQgYXJnc1RvU2V0ID0gW107XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGFyZ0FmdGVyRXF1YWxTaWduIHx8IGFyZ3NbaSArIDFdO1xuICAgICAgICAgICAgLy8gSWYgYm90aCBhcnJheSBhbmQgbmFyZ3MgYXJlIGNvbmZpZ3VyZWQsIGVuZm9yY2UgdGhlIG5hcmdzIGNvdW50OlxuICAgICAgICAgICAgY29uc3QgbmFyZ3NDb3VudCA9IGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5hcmdzKTtcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ib29scykgJiYgISgvXih0cnVlfGZhbHNlKSQvLnRlc3QobmV4dCkpKSB7XG4gICAgICAgICAgICAgICAgYXJnc1RvU2V0LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1VuZGVmaW5lZChuZXh0KSB8fFxuICAgICAgICAgICAgICAgIChpc1VuZGVmaW5lZChhcmdBZnRlckVxdWFsU2lnbikgJiYgL14tLy50ZXN0KG5leHQpICYmICFuZWdhdGl2ZS50ZXN0KG5leHQpICYmICFpc1Vua25vd25PcHRpb25Bc0FyZyhuZXh0KSkpIHtcbiAgICAgICAgICAgICAgICAvLyBmb3Iga2V5cyB3aXRob3V0IHZhbHVlID09PiBhcmdzVG9TZXQgcmVtYWlucyBhbiBlbXB0eSBbXVxuICAgICAgICAgICAgICAgIC8vIHNldCB1c2VyIGRlZmF1bHQgdmFsdWUsIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0c1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmVmFsID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1RvU2V0ID0gQXJyYXkuaXNBcnJheShkZWZWYWwpID8gZGVmVmFsIDogW2RlZlZhbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdmFsdWUgaW4gLS1vcHRpb249dmFsdWUgaXMgZWF0ZW4gYXMgaXNcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGFyZ0FmdGVyRXF1YWxTaWduKSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzVG9TZXQucHVzaChwcm9jZXNzVmFsdWUoa2V5LCBhcmdBZnRlckVxdWFsU2lnbiwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpaSA9IGkgKyAxOyBpaSA8IGFyZ3MubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoIWNvbmZpZ3VyYXRpb25bJ2dyZWVkeS1hcnJheXMnXSAmJiBhcmdzVG9TZXQubGVuZ3RoID4gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChuYXJnc0NvdW50ICYmIHR5cGVvZiBuYXJnc0NvdW50ID09PSAnbnVtYmVyJyAmJiBhcmdzVG9TZXQubGVuZ3RoID49IG5hcmdzQ291bnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBhcmdzW2lpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eLS8udGVzdChuZXh0KSAmJiAhbmVnYXRpdmUudGVzdChuZXh0KSAmJiAhaXNVbmtub3duT3B0aW9uQXNBcmcobmV4dCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgaSA9IGlpO1xuICAgICAgICAgICAgICAgICAgICBhcmdzVG9TZXQucHVzaChwcm9jZXNzVmFsdWUoa2V5LCBuZXh0LCBpbnB1dElzU3RyaW5nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYm90aCBhcnJheSBhbmQgbmFyZ3MgYXJlIGNvbmZpZ3VyZWQsIGNyZWF0ZSBhbiBlcnJvciBpZiBsZXNzIHRoYW5cbiAgICAgICAgICAgIC8vIG5hcmdzIHBvc2l0aW9uYWxzIHdlcmUgZm91bmQuIE5hTiBoYXMgc3BlY2lhbCBtZWFuaW5nLCBpbmRpY2F0aW5nXG4gICAgICAgICAgICAvLyB0aGF0IGF0IGxlYXN0IG9uZSB2YWx1ZSBpcyByZXF1aXJlZCAobW9yZSBhcmUgb2theSkuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5hcmdzQ291bnQgPT09ICdudW1iZXInICYmICgobmFyZ3NDb3VudCAmJiBhcmdzVG9TZXQubGVuZ3RoIDwgbmFyZ3NDb3VudCkgfHxcbiAgICAgICAgICAgICAgICAoaXNOYU4obmFyZ3NDb3VudCkgJiYgYXJnc1RvU2V0Lmxlbmd0aCA9PT0gMCkpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnTm90IGVub3VnaCBhcmd1bWVudHMgZm9sbG93aW5nOiAlcycsIGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0QXJnKGtleSwgYXJnc1RvU2V0KTtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldEFyZyhrZXksIHZhbCwgc2hvdWxkU3RyaXBRdW90ZXMgPSBpbnB1dElzU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoLy0vLnRlc3Qoa2V5KSAmJiBjb25maWd1cmF0aW9uWydjYW1lbC1jYXNlLWV4cGFuc2lvbiddKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxpYXMgPSBrZXkuc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbWVsQ2FzZShwcm9wKTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgYWRkTmV3QWxpYXMoa2V5LCBhbGlhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHByb2Nlc3NWYWx1ZShrZXksIHZhbCwgc2hvdWxkU3RyaXBRdW90ZXMpO1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRLZXkgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIHNldEtleShhcmd2LCBzcGxpdEtleSwgdmFsdWUpO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHBvcHVsYXRpbmcgYWxpYXNlcyBvZiB0aGUgZnVsbCBrZXlcbiAgICAgICAgICAgIGlmIChmbGFncy5hbGlhc2VzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlQcm9wZXJ0aWVzID0geC5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICBzZXRLZXkoYXJndiwga2V5UHJvcGVydGllcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIHBvcHVsYXRpbmcgYWxpYXNlcyBvZiB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgZG90LW5vdGF0aW9uIGtleVxuICAgICAgICAgICAgaWYgKHNwbGl0S2V5Lmxlbmd0aCA+IDEgJiYgY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pIHtcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgKGZsYWdzLmFsaWFzZXNbc3BsaXRLZXlbMF1dIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlQcm9wZXJ0aWVzID0geC5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBleHBhbmQgYWxpYXMgd2l0aCBuZXN0ZWQgb2JqZWN0cyBpbiBrZXlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IFtdLmNvbmNhdChzcGxpdEtleSk7XG4gICAgICAgICAgICAgICAgICAgIGEuc2hpZnQoKTsgLy8gbnVrZSB0aGUgb2xkIGtleS5cbiAgICAgICAgICAgICAgICAgICAga2V5UHJvcGVydGllcyA9IGtleVByb3BlcnRpZXMuY29uY2F0KGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3B1bGF0ZSBhbGlhcyBvbmx5IGlmIGlzIG5vdCBhbHJlYWR5IGFuIGFsaWFzIG9mIHRoZSBmdWxsIGtleVxuICAgICAgICAgICAgICAgICAgICAvLyAoYWxyZWFkeSBwb3B1bGF0ZWQgYWJvdmUpXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSkuaW5jbHVkZXMoa2V5UHJvcGVydGllcy5qb2luKCcuJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkoYXJndiwga2V5UHJvcGVydGllcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgbm9ybWFsaXplIGdldHRlciBhbmQgc2V0dGVyIHdoZW4ga2V5IGlzIGluICdub3JtYWxpemUnIGJ1dCBpc24ndCBhbiBhcnJheVxuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLm5vcm1hbGl6ZSkgJiYgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gW2tleV0uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSk7XG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3ZSZXR1cm4sIGtleSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBtaXhpbi5ub3JtYWxpemUodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZE5ld0FsaWFzKGtleSwgYWxpYXMpIHtcbiAgICAgICAgICAgIGlmICghKGZsYWdzLmFsaWFzZXNba2V5XSAmJiBmbGFncy5hbGlhc2VzW2tleV0ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XSA9IFthbGlhc107XG4gICAgICAgICAgICAgICAgbmV3QWxpYXNlc1thbGlhc10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEoZmxhZ3MuYWxpYXNlc1thbGlhc10gJiYgZmxhZ3MuYWxpYXNlc1thbGlhc10ubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGFkZE5ld0FsaWFzKGFsaWFzLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NWYWx1ZShrZXksIHZhbCwgc2hvdWxkU3RyaXBRdW90ZXMpIHtcbiAgICAgICAgICAgIC8vIHN0cmluZ3MgbWF5IGJlIHF1b3RlZCwgY2xlYW4gdGhpcyB1cCBhcyB3ZSBhc3NpZ24gdmFsdWVzLlxuICAgICAgICAgICAgaWYgKHNob3VsZFN0cmlwUXVvdGVzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gc3RyaXBRdW90ZXModmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwYXJzaW5nIGJvb2xlYW4gYXJndW1lbnRzIC0tZm9vPXRydWUgLS1iYXIgZmFsc2UuXG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpIHx8IGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmNvdW50cykpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbCA9PT0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWwpXG4gICAgICAgICAgICAgICAgPyB2YWwubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBtYXliZUNvZXJjZU51bWJlcihrZXksIHYpOyB9KVxuICAgICAgICAgICAgICAgIDogbWF5YmVDb2VyY2VOdW1iZXIoa2V5LCB2YWwpO1xuICAgICAgICAgICAgLy8gaW5jcmVtZW50IGEgY291bnQgZ2l2ZW4gYXMgYXJnIChlaXRoZXIgbm8gdmFsdWUgb3IgdmFsdWUgcGFyc2VkIGFzIGJvb2xlYW4pXG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSAmJiAoaXNVbmRlZmluZWQodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gaW5jcmVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgbm9ybWFsaXplZCB2YWx1ZSB3aGVuIGtleSBpcyBpbiAnbm9ybWFsaXplJyBhbmQgaW4gJ2FycmF5cydcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5ub3JtYWxpemUpICYmIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbC5tYXAoKHZhbCkgPT4geyByZXR1cm4gbWl4aW4ubm9ybWFsaXplKHZhbCk7IH0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtaXhpbi5ub3JtYWxpemUodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXliZUNvZXJjZU51bWJlcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ3VyYXRpb25bJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyddICYmIGtleSA9PT0gJ18nKVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGlmICghY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3Muc3RyaW5ncykgJiYgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRDb2VyY2VOdW1iZXIgPSBsb29rc0xpa2VOdW1iZXIodmFsdWUpICYmIGNvbmZpZ3VyYXRpb25bJ3BhcnNlLW51bWJlcnMnXSAmJiAoTnVtYmVyLmlzU2FmZUludGVnZXIoTWF0aC5mbG9vcihwYXJzZUZsb2F0KGAke3ZhbHVlfWApKSkpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRDb2VyY2VOdW1iZXIgfHwgKCFpc1VuZGVmaW5lZCh2YWx1ZSkgJiYgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubnVtYmVycykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGFyZ3MgZnJvbSBjb25maWcuanNvbiBmaWxlLCB0aGlzIHNob3VsZCBiZVxuICAgICAgICAvLyBhcHBsaWVkIGxhc3Qgc28gdGhhdCBkZWZhdWx0cyBjYW4gYmUgYXBwbGllZC5cbiAgICAgICAgZnVuY3Rpb24gc2V0Q29uZmlnKGFyZ3YpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0xvb2t1cCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAvLyBleHBhbmQgZGVmYXVsdHMvYWxpYXNlcywgaW4tY2FzZSBhbnkgaGFwcGVuIHRvIHJlZmVyZW5jZVxuICAgICAgICAgICAgLy8gdGhlIGNvbmZpZy5qc29uIGZpbGUuXG4gICAgICAgICAgICBhcHBseURlZmF1bHRzQW5kQWxpYXNlcyhjb25maWdMb29rdXAsIGZsYWdzLmFsaWFzZXMsIGRlZmF1bHRzKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZsYWdzLmNvbmZpZ3MpLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZ0tleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBhcmd2W2NvbmZpZ0tleV0gfHwgY29uZmlnTG9va3VwW2NvbmZpZ0tleV07XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRDb25maWdQYXRoID0gbWl4aW4ucmVzb2x2ZShtaXhpbi5jd2QoKSwgY29uZmlnUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlQ29uZmlnID0gZmxhZ3MuY29uZmlnc1tjb25maWdLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvbHZlQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gcmVzb2x2ZUNvbmZpZyhyZXNvbHZlZENvbmZpZ1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBjb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBtaXhpbi5yZXF1aXJlKHJlc29sdmVkQ29uZmlnUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25maWdPYmplY3QoY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbm8gd2lsbCByZWNlaXZlIGEgUGVybWlzc2lvbkRlbmllZCBlcnJvciBpZiBhbiBhdHRlbXB0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWRlIHRvIGxvYWQgY29uZmlnIHdpdGhvdXQgdGhlIC0tYWxsb3ctcmVhZCBmbGFnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09ICdQZXJtaXNzaW9uRGVuaWVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXJndltjb25maWdLZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gRXJyb3IoX18oJ0ludmFsaWQgSlNPTiBjb25maWcgZmlsZTogJXMnLCBjb25maWdQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgYXJncyBmcm9tIGNvbmZpZyBvYmplY3QuXG4gICAgICAgIC8vIGl0IHJlY3Vyc2l2ZWx5IGNoZWNrcyBuZXN0ZWQgb2JqZWN0cy5cbiAgICAgICAgZnVuY3Rpb24gc2V0Q29uZmlnT2JqZWN0KGNvbmZpZywgcHJldikge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxLZXkgPSBwcmV2ID8gcHJldiArICcuJyArIGtleSA6IGtleTtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYW4gaW5uZXIgb2JqZWN0IGFuZCB3ZSBoYXZlIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgICAgIC8vIGVuYWJsZWQsIHRyZWF0IGlubmVyIG9iamVjdHMgaW4gY29uZmlnIHRoZSBzYW1lIGFzXG4gICAgICAgICAgICAgICAgLy8gaGVhdmlseSBuZXN0ZWQgZG90IG5vdGF0aW9ucyAoZm9vLmJhci5hcHBsZSkuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIGNvbmZpZ3VyYXRpb25bJ2RvdC1ub3RhdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QgYnV0IG5vdCBhbiBhcnJheSwgY2hlY2sgbmVzdGVkIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBzZXRDb25maWdPYmplY3QodmFsdWUsIGZ1bGxLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZyBhcmd1bWVudHMgdmlhIENMSSB0YWtlcyBwcmVjZWRlbmNlIG92ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVzIHdpdGhpbiB0aGUgY29uZmlnIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzS2V5KGFyZ3YsIGZ1bGxLZXkuc3BsaXQoJy4nKSkgfHwgKGNoZWNrQWxsQWxpYXNlcyhmdWxsS2V5LCBmbGFncy5hcnJheXMpICYmIGNvbmZpZ3VyYXRpb25bJ2NvbWJpbmUtYXJyYXlzJ10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoZnVsbEtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGFsbCBjb25maWcgb2JqZWN0cyBwYXNzZWQgaW4gb3B0c1xuICAgICAgICBmdW5jdGlvbiBzZXRDb25maWdPYmplY3RzKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWdPYmplY3RzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbmZpZ09iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbmZpZ09iamVjdChjb25maWdPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5RW52VmFycyhhcmd2LCBjb25maWdPbmx5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudlByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gdHlwZW9mIGVudlByZWZpeCA9PT0gJ3N0cmluZycgPyBlbnZQcmVmaXggOiAnJztcbiAgICAgICAgICAgIGNvbnN0IGVudiA9IG1peGluLmVudigpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGZ1bmN0aW9uIChlbnZWYXIpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4ID09PSAnJyB8fCBlbnZWYXIubGFzdEluZGV4T2YocHJlZml4LCAwKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgYXJyYXkgb2YgbmVzdGVkIGtleXMgYW5kIGNvbnZlcnQgdGhlbSB0byBjYW1lbCBjYXNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBlbnZWYXIuc3BsaXQoJ19fJykubWFwKGZ1bmN0aW9uIChrZXksIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW1lbENhc2Uoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKGNvbmZpZ09ubHkgJiYgZmxhZ3MuY29uZmlnc1trZXlzLmpvaW4oJy4nKV0pIHx8ICFjb25maWdPbmx5KSAmJiAhaGFzS2V5KGFyZ3YsIGtleXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5cy5qb2luKCcuJyksIGVudltlbnZWYXJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5Q29lcmNpb25zKGFyZ3YpIHtcbiAgICAgICAgICAgIGxldCBjb2VyY2U7XG4gICAgICAgICAgICBjb25zdCBhcHBsaWVkID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhcHBsaWVkLmhhcyhrZXkpKSB7IC8vIElmIHdlIGhhdmVuJ3QgYWxyZWFkeSBjb2VyY2VkIHRoaXMgb3B0aW9uIHZpYSBvbmUgb2YgaXRzIGFsaWFzZXNcbiAgICAgICAgICAgICAgICAgICAgY29lcmNlID0gY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY29lcmNpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtYXliZUNvZXJjZU51bWJlcihrZXksIGNvZXJjZShhcmd2W2tleV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW10uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSwga2V5KSkuZm9yRWFjaChhbGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkLmFkZChhbGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd2W2FsaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldFBsYWNlaG9sZGVyS2V5cyhhcmd2KSB7XG4gICAgICAgICAgICBmbGFncy5rZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IHNldCBwbGFjZWhvbGRlciBrZXlzIGZvciBkb3Qgbm90YXRpb24gb3B0aW9ucyAnZm9vLmJhcicuXG4gICAgICAgICAgICAgICAgaWYgKH5rZXkuaW5kZXhPZignLicpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd2W2tleV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICBhcmd2W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5RGVmYXVsdHNBbmRBbGlhc2VzKG9iaiwgYWxpYXNlcywgZGVmYXVsdHMsIGNhbkxvZyA9IGZhbHNlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkZWZhdWx0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNLZXkob2JqLCBrZXkuc3BsaXQoJy4nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0S2V5KG9iaiwga2V5LnNwbGl0KCcuJyksIGRlZmF1bHRzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuTG9nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdGVkW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAoYWxpYXNlc1trZXldIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzS2V5KG9iaiwgeC5zcGxpdCgnLicpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXkob2JqLCB4LnNwbGl0KCcuJyksIGRlZmF1bHRzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYXNLZXkob2JqLCBrZXlzKSB7XG4gICAgICAgICAgICBsZXQgbyA9IG9iajtcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvblsnZG90LW5vdGF0aW9uJ10pXG4gICAgICAgICAgICAgICAga2V5cyA9IFtrZXlzLmpvaW4oJy4nKV07XG4gICAgICAgICAgICBrZXlzLnNsaWNlKDAsIC0xKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBvID0gKG9ba2V5XSB8fCB7fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNba2V5cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXkgaW4gbztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXRLZXkob2JqLCBrZXlzLCB2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG8gPSBvYmo7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ3VyYXRpb25bJ2RvdC1ub3RhdGlvbiddKVxuICAgICAgICAgICAgICAgIGtleXMgPSBba2V5cy5qb2luKCcuJyldO1xuICAgICAgICAgICAga2V5cy5zbGljZSgwLCAtMSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyhiY29lKTogaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiB5YXJncywgc3dpdGNoIHRvXG4gICAgICAgICAgICAgICAgLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBmb3IgZG90IG5vdGF0aW9uOlxuICAgICAgICAgICAgICAgIGtleSA9IHNhbml0aXplS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvW2tleV0gIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhhdCBvW2tleV0gaXMgYW4gYXJyYXksIGFuZCB0aGF0IHRoZSBsYXN0IGl0ZW0gaXMgYW4gZW1wdHkgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW2tleV0ucHVzaCh7fSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW2tleV0gPSBbb1trZXldLCB7fV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0byB1cGRhdGUgdGhlIGVtcHR5IG9iamVjdCBhdCB0aGUgZW5kIG9mIHRoZSBvW2tleV0gYXJyYXksIHNvIHNldCBvIHRvIHRoYXQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIG8gPSBvW2tleV1bb1trZXldLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbyA9IG9ba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRPRE8oYmNvZSk6IGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgeWFyZ3MsIHN3aXRjaCB0b1xuICAgICAgICAgICAgLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBmb3IgZG90IG5vdGF0aW9uOlxuICAgICAgICAgICAgY29uc3Qga2V5ID0gc2FuaXRpemVLZXkoa2V5c1trZXlzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIGNvbnN0IGlzVHlwZUFycmF5ID0gY2hlY2tBbGxBbGlhc2VzKGtleXMuam9pbignLicpLCBmbGFncy5hcnJheXMpO1xuICAgICAgICAgICAgY29uc3QgaXNWYWx1ZUFycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgICBsZXQgZHVwbGljYXRlID0gY29uZmlndXJhdGlvblsnZHVwbGljYXRlLWFyZ3VtZW50cy1hcnJheSddO1xuICAgICAgICAgICAgLy8gbmFyZ3MgaGFzIGhpZ2hlciBwcmlvcml0eSB0aGFuIGR1cGxpY2F0ZVxuICAgICAgICAgICAgaWYgKCFkdXBsaWNhdGUgJiYgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubmFyZ3MpKSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoKCFpc1VuZGVmaW5lZChvW2tleV0pICYmIGZsYWdzLm5hcmdzW2tleV0gPT09IDEpIHx8IChBcnJheS5pc0FycmF5KG9ba2V5XSkgJiYgb1trZXldLmxlbmd0aCA9PT0gZmxhZ3MubmFyZ3Nba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gaW5jcmVtZW50KCkpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBpbmNyZW1lbnQob1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob1trZXldKSkge1xuICAgICAgICAgICAgICAgIGlmIChkdXBsaWNhdGUgJiYgaXNUeXBlQXJyYXkgJiYgaXNWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IGNvbmZpZ3VyYXRpb25bJ2ZsYXR0ZW4tZHVwbGljYXRlLWFycmF5cyddID8gb1trZXldLmNvbmNhdCh2YWx1ZSkgOiAoQXJyYXkuaXNBcnJheShvW2tleV1bMF0pID8gb1trZXldIDogW29ba2V5XV0pLmNvbmNhdChbdmFsdWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWR1cGxpY2F0ZSAmJiBCb29sZWFuKGlzVHlwZUFycmF5KSA9PT0gQm9vbGVhbihpc1ZhbHVlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gb1trZXldLmNvbmNhdChbdmFsdWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvW2tleV0gPT09IHVuZGVmaW5lZCAmJiBpc1R5cGVBcnJheSkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IGlzVmFsdWVBcnJheSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGR1cGxpY2F0ZSAmJiAhKG9ba2V5XSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuY291bnRzKSB8fFxuICAgICAgICAgICAgICAgIGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSkpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBbb1trZXldLCB2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBleHRlbmQgdGhlIGFsaWFzZXMgbGlzdCB3aXRoIGluZmVycmVkIGFsaWFzZXMuXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZEFsaWFzZXMoLi4uYXJncykge1xuICAgICAgICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvYmogfHwge30pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG9ydC1jaXJjdWl0IGlmIHdlJ3ZlIGFscmVhZHkgYWRkZWQgYSBrZXlcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gdGhlIGFsaWFzZXMgYXJyYXksIGZvciBleGFtcGxlIGl0IG1pZ2h0XG4gICAgICAgICAgICAgICAgICAgIC8vIGV4aXN0IGluIGJvdGggJ29wdHMuZGVmYXVsdCcgYW5kICdvcHRzLmtleScuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFncy5hbGlhc2VzW2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XSA9IFtdLmNvbmNhdChhbGlhc2VzW2tleV0gfHwgW10pO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgXCItLW9wdGlvbi1uYW1lXCIsIGFsc28gc2V0IGFyZ3Yub3B0aW9uTmFtZVxuICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0uY29uY2F0KGtleSkuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC8tLy50ZXN0KHgpICYmIGNvbmZpZ3VyYXRpb25bJ2NhbWVsLWNhc2UtZXhwYW5zaW9uJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gY2FtZWxDYXNlKHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjICE9PSBrZXkgJiYgZmxhZ3MuYWxpYXNlc1trZXldLmluZGV4T2YoYykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBbGlhc2VzW2NdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgXCItLW9wdGlvbk5hbWVcIiwgYWxzbyBzZXQgYXJndlsnb3B0aW9uLW5hbWUnXVxuICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW2tleV0uY29uY2F0KGtleSkuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHgubGVuZ3RoID4gMSAmJiAvW0EtWl0vLnRlc3QoeCkgJiYgY29uZmlndXJhdGlvblsnY2FtZWwtY2FzZS1leHBhbnNpb24nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBkZWNhbWVsaXplKHgsICctJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IGtleSAmJiBmbGFncy5hbGlhc2VzW2tleV0uaW5kZXhPZihjKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYWxpYXNlc1trZXldLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FsaWFzZXNbY10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmFsaWFzZXNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFncy5hbGlhc2VzW3hdID0gW2tleV0uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XS5maWx0ZXIoZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geCAhPT0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFnKSB7XG4gICAgICAgICAgICBjb25zdCB0b0NoZWNrID0gW10uY29uY2F0KGZsYWdzLmFsaWFzZXNba2V5XSB8fCBbXSwga2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmbGFnKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEFsaWFzID0gdG9DaGVjay5maW5kKGtleSA9PiBrZXlzLmluY2x1ZGVzKGtleSkpO1xuICAgICAgICAgICAgcmV0dXJuIHNldEFsaWFzID8gZmxhZ1tzZXRBbGlhc10gOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYXNBbnlGbGFnKGtleSkge1xuICAgICAgICAgICAgY29uc3QgZmxhZ3NLZXlzID0gT2JqZWN0LmtleXMoZmxhZ3MpO1xuICAgICAgICAgICAgY29uc3QgdG9DaGVjayA9IFtdLmNvbmNhdChmbGFnc0tleXMubWFwKGsgPT4gZmxhZ3Nba10pKTtcbiAgICAgICAgICAgIHJldHVybiB0b0NoZWNrLnNvbWUoZnVuY3Rpb24gKGZsYWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShmbGFnKSA/IGZsYWcuaW5jbHVkZXMoa2V5KSA6IGZsYWdba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhc0ZsYWdzTWF0Y2hpbmcoYXJnLCAuLi5wYXR0ZXJucykge1xuICAgICAgICAgICAgY29uc3QgdG9DaGVjayA9IFtdLmNvbmNhdCguLi5wYXR0ZXJucyk7XG4gICAgICAgICAgICByZXR1cm4gdG9DaGVjay5zb21lKGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBhcmcubWF0Y2gocGF0dGVybik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoICYmIGhhc0FueUZsYWcobWF0Y2hbMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFzZWQgb24gYSBzaW1wbGlmaWVkIHZlcnNpb24gb2YgdGhlIHNob3J0IGZsYWcgZ3JvdXAgcGFyc2luZyBsb2dpY1xuICAgICAgICBmdW5jdGlvbiBoYXNBbGxTaG9ydEZsYWdzKGFyZykge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIG5lZ2F0aXZlIG51bWJlciwgb3IgZG9lc24ndCBzdGFydCB3aXRoIGEgc2luZ2xlIGh5cGhlbiwgaXQncyBub3QgYSBzaG9ydCBmbGFnIGdyb3VwXG4gICAgICAgICAgICBpZiAoYXJnLm1hdGNoKG5lZ2F0aXZlKSB8fCAhYXJnLm1hdGNoKC9eLVteLV0rLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaGFzQWxsRmxhZ3MgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG5leHQ7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJzID0gYXJnLnNsaWNlKDEpLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG5leHQgPSBhcmcuc2xpY2UoaiArIDIpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzQW55RmxhZyhsZXR0ZXJzW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNBbGxGbGFncyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChsZXR0ZXJzW2ogKyAxXSAmJiBsZXR0ZXJzW2ogKyAxXSA9PT0gJz0nKSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXh0ID09PSAnLScgfHxcbiAgICAgICAgICAgICAgICAgICAgKC9bQS1aYS16XS8udGVzdChsZXR0ZXJzW2pdKSAmJiAvXi0/XFxkKyhcXC5cXGQqKT8oZS0/XFxkKyk/JC8udGVzdChuZXh0KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGxldHRlcnNbaiArIDFdICYmIGxldHRlcnNbaiArIDFdLm1hdGNoKC9cXFcvKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc0FsbEZsYWdzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVW5rbm93bk9wdGlvbkFzQXJnKGFyZykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25bJ3Vua25vd24tb3B0aW9ucy1hcy1hcmdzJ10gJiYgaXNVbmtub3duT3B0aW9uKGFyZyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNVbmtub3duT3B0aW9uKGFyZykge1xuICAgICAgICAgICAgYXJnID0gYXJnLnJlcGxhY2UoL14tezMsfS8sICctLScpO1xuICAgICAgICAgICAgLy8gaWdub3JlIG5lZ2F0aXZlIG51bWJlcnNcbiAgICAgICAgICAgIGlmIChhcmcubWF0Y2gobmVnYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHNob3J0IG9wdGlvbiBncm91cCBhbmQgYWxsIG9mIHRoZW0gYXJlIGNvbmZpZ3VyZWQsIGl0IGlzbid0IHVua25vd25cbiAgICAgICAgICAgIGlmIChoYXNBbGxTaG9ydEZsYWdzKGFyZykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlLmcuICctLWNvdW50PTInXG4gICAgICAgICAgICBjb25zdCBmbGFnV2l0aEVxdWFscyA9IC9eLSsoW149XSs/KT1bXFxzXFxTXSokLztcbiAgICAgICAgICAgIC8vIGUuZy4gJy1hJyBvciAnLS1hcmcnXG4gICAgICAgICAgICBjb25zdCBub3JtYWxGbGFnID0gL14tKyhbXj1dKz8pJC87XG4gICAgICAgICAgICAvLyBlLmcuICctYS0nXG4gICAgICAgICAgICBjb25zdCBmbGFnRW5kaW5nSW5IeXBoZW4gPSAvXi0rKFtePV0rPyktJC87XG4gICAgICAgICAgICAvLyBlLmcuICctYWJjMTIzJ1xuICAgICAgICAgICAgY29uc3QgZmxhZ0VuZGluZ0luRGlnaXRzID0gL14tKyhbXj1dKz9cXGQrKSQvO1xuICAgICAgICAgICAgLy8gZS5nLiAnLWEvdXNyL2xvY2FsJ1xuICAgICAgICAgICAgY29uc3QgZmxhZ0VuZGluZ0luTm9uV29yZENoYXJhY3RlcnMgPSAvXi0rKFtePV0rPylcXFcrLiokLztcbiAgICAgICAgICAgIC8vIGNoZWNrIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgZmxhZyBzdHlsZXMsIGluY2x1ZGluZyBuZWdhdGVkQm9vbGVhbiwgYSBwYXR0ZXJuIGRlZmluZWQgbmVhciB0aGUgc3RhcnQgb2YgdGhlIHBhcnNlIG1ldGhvZFxuICAgICAgICAgICAgcmV0dXJuICFoYXNGbGFnc01hdGNoaW5nKGFyZywgZmxhZ1dpdGhFcXVhbHMsIG5lZ2F0ZWRCb29sZWFuLCBub3JtYWxGbGFnLCBmbGFnRW5kaW5nSW5IeXBoZW4sIGZsYWdFbmRpbmdJbkRpZ2l0cywgZmxhZ0VuZGluZ0luTm9uV29yZENoYXJhY3RlcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1ha2UgYSBiZXN0IGVmZm9ydCB0byBwaWNrIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAvLyBmb3IgYW4gb3B0aW9uIGJhc2VkIG9uIG5hbWUgYW5kIHR5cGUuXG4gICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZShrZXkpIHtcbiAgICAgICAgICAgIGlmICghY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYm9vbHMpICYmXG4gICAgICAgICAgICAgICAgIWNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmNvdW50cykgJiZcbiAgICAgICAgICAgICAgICBgJHtrZXl9YCBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRGb3JUeXBlKGd1ZXNzVHlwZShrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm4gYSBkZWZhdWx0IHZhbHVlLCBnaXZlbiB0aGUgdHlwZSBvZiBhIGZsYWcuLFxuICAgICAgICBmdW5jdGlvbiBkZWZhdWx0Rm9yVHlwZSh0eXBlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWYgPSB7XG4gICAgICAgICAgICAgICAgW0RlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LkJPT0xFQU5dOiB0cnVlLFxuICAgICAgICAgICAgICAgIFtEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5TVFJJTkddOiAnJyxcbiAgICAgICAgICAgICAgICBbRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuTlVNQkVSXTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIFtEZWZhdWx0VmFsdWVzRm9yVHlwZUtleS5BUlJBWV06IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGRlZlt0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBnaXZlbiBhIGZsYWcsIGVuZm9yY2UgYSBkZWZhdWx0IHR5cGUuXG4gICAgICAgIGZ1bmN0aW9uIGd1ZXNzVHlwZShrZXkpIHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQk9PTEVBTjtcbiAgICAgICAgICAgIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5zdHJpbmdzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuU1RSSU5HO1xuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MubnVtYmVycykpXG4gICAgICAgICAgICAgICAgdHlwZSA9IERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5Lk5VTUJFUjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmJvb2xzKSlcbiAgICAgICAgICAgICAgICB0eXBlID0gRGVmYXVsdFZhbHVlc0ZvclR5cGVLZXkuQk9PTEVBTjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQWxsQWxpYXNlcyhrZXksIGZsYWdzLmFycmF5cykpXG4gICAgICAgICAgICAgICAgdHlwZSA9IERlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5LkFSUkFZO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNVbmRlZmluZWQobnVtKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdXNlciBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciBpbmNvbnNpc3RlbmNpZXNcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tDb25maWd1cmF0aW9uKCkge1xuICAgICAgICAgICAgLy8gY291bnQga2V5cyBzaG91bGQgbm90IGJlIHNldCBhcyBhcnJheS9uYXJnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmbGFncy5jb3VudHMpLmZpbmQoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tBbGxBbGlhc2VzKGtleSwgZmxhZ3MuYXJyYXlzKSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IEVycm9yKF9fKCdJbnZhbGlkIGNvbmZpZ3VyYXRpb246ICVzLCBvcHRzLmNvdW50IGV4Y2x1ZGVzIG9wdHMuYXJyYXkuJywga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGVja0FsbEFsaWFzZXMoa2V5LCBmbGFncy5uYXJncykpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBFcnJvcihfXygnSW52YWxpZCBjb25maWd1cmF0aW9uOiAlcywgb3B0cy5jb3VudCBleGNsdWRlcyBvcHRzLm5hcmcuJywga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxpYXNlczogT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MuYWxpYXNlcyksXG4gICAgICAgICAgICBhcmd2OiBPYmplY3QuYXNzaWduKGFyZ3ZSZXR1cm4sIGFyZ3YpLFxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHRlZDogT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdGVkKSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIG5ld0FsaWFzZXM6IE9iamVjdC5hc3NpZ24oe30sIG5ld0FsaWFzZXMpXG4gICAgICAgIH07XG4gICAgfVxufVxuLy8gaWYgYW55IGFsaWFzZXMgcmVmZXJlbmNlIGVhY2ggb3RoZXIsIHdlIHNob3VsZFxuLy8gbWVyZ2UgdGhlbSB0b2dldGhlci5cbmZ1bmN0aW9uIGNvbWJpbmVBbGlhc2VzKGFsaWFzZXMpIHtcbiAgICBjb25zdCBhbGlhc0FycmF5cyA9IFtdO1xuICAgIGNvbnN0IGNvbWJpbmVkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBsZXQgY2hhbmdlID0gdHJ1ZTtcbiAgICAvLyB0dXJuIGFsaWFzIGxvb2t1cCBoYXNoIHtrZXk6IFsnYWxpYXMxJywgJ2FsaWFzMiddfSBpbnRvXG4gICAgLy8gYSBzaW1wbGUgYXJyYXkgWydrZXknLCAnYWxpYXMxJywgJ2FsaWFzMiddXG4gICAgT2JqZWN0LmtleXMoYWxpYXNlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGFsaWFzQXJyYXlzLnB1c2goW10uY29uY2F0KGFsaWFzZXNba2V5XSwga2V5KSk7XG4gICAgfSk7XG4gICAgLy8gY29tYmluZSBhcnJheXMgdW50aWwgemVybyBjaGFuZ2VzIGFyZVxuICAgIC8vIG1hZGUgaW4gYW4gaXRlcmF0aW9uLlxuICAgIHdoaWxlIChjaGFuZ2UpIHtcbiAgICAgICAgY2hhbmdlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxpYXNBcnJheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGlpID0gaSArIDE7IGlpIDwgYWxpYXNBcnJheXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0ID0gYWxpYXNBcnJheXNbaV0uZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGlhc0FycmF5c1tpaV0uaW5kZXhPZih2KSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXNBcnJheXNbaV0gPSBhbGlhc0FycmF5c1tpXS5jb25jYXQoYWxpYXNBcnJheXNbaWldKTtcbiAgICAgICAgICAgICAgICAgICAgYWxpYXNBcnJheXMuc3BsaWNlKGlpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG1hcCBhcnJheXMgYmFjayB0byB0aGUgaGFzaC1sb29rdXAgKGRlLWR1cGUgd2hpbGVcbiAgICAvLyB3ZSdyZSBhdCBpdCkuXG4gICAgYWxpYXNBcnJheXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXNBcnJheSkge1xuICAgICAgICBhbGlhc0FycmF5ID0gYWxpYXNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHYsIGksIHNlbGYpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodikgPT09IGk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsYXN0QWxpYXMgPSBhbGlhc0FycmF5LnBvcCgpO1xuICAgICAgICBpZiAobGFzdEFsaWFzICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGxhc3RBbGlhcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkW2xhc3RBbGlhc10gPSBhbGlhc0FycmF5O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufVxuLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlbiBhIGNvdW50IGlzIGdpdmVuIGFzIGFuIGFyZ1xuLy8gaXQgaXMgTk9UIGNhbGxlZCB0byBzZXQgYSBkZWZhdWx0IHZhbHVlXG4vLyB0aHVzIHdlIGNhbiBzdGFydCB0aGUgY291bnQgYXQgMSBpbnN0ZWFkIG9mIDBcbmZ1bmN0aW9uIGluY3JlbWVudChvcmlnKSB7XG4gICAgcmV0dXJuIG9yaWcgIT09IHVuZGVmaW5lZCA/IG9yaWcgKyAxIDogMTtcbn1cbi8vIFRPRE8oYmNvZSk6IGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgeWFyZ3MsIHN3aXRjaCB0b1xuLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBmb3IgZG90IG5vdGF0aW9uOlxuZnVuY3Rpb24gc2FuaXRpemVLZXkoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ19fcHJvdG9fXycpXG4gICAgICAgIHJldHVybiAnX19fcHJvdG9fX18nO1xuICAgIHJldHVybiBrZXk7XG59XG5mdW5jdGlvbiBzdHJpcFF1b3Rlcyh2YWwpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICh2YWxbMF0gPT09IFwiJ1wiIHx8IHZhbFswXSA9PT0gJ1wiJykgJiZcbiAgICAgICAgdmFsW3ZhbC5sZW5ndGggLSAxXSA9PT0gdmFsWzBdKVxuICAgICAgICA/IHZhbC5zdWJzdHJpbmcoMSwgdmFsLmxlbmd0aCAtIDEpXG4gICAgICAgIDogdmFsO1xufVxuIiwgImZ1bmN0aW9uIGdldFByb2Nlc3NBcmd2QmluSW5kZXgoKSB7XG4gICAgaWYgKGlzQnVuZGxlZEVsZWN0cm9uQXBwKCkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIHJldHVybiAxO1xufVxuZnVuY3Rpb24gaXNCdW5kbGVkRWxlY3Ryb25BcHAoKSB7XG4gICAgcmV0dXJuIGlzRWxlY3Ryb25BcHAoKSAmJiAhcHJvY2Vzcy5kZWZhdWx0QXBwO1xufVxuZnVuY3Rpb24gaXNFbGVjdHJvbkFwcCgpIHtcbiAgICByZXR1cm4gISFwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVCaW4oYXJndikge1xuICAgIHJldHVybiBhcmd2LnNsaWNlKGdldFByb2Nlc3NBcmd2QmluSW5kZXgoKSArIDEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Nlc3NBcmd2QmluKCkge1xuICAgIHJldHVybiBwcm9jZXNzLmFyZ3ZbZ2V0UHJvY2Vzc0FyZ3ZCaW5JbmRleCgpXTtcbn1cbiIsICJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHN0YXRTeW5jLCB3cml0ZUZpbGUgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmczoge1xuICAgICAgICByZWFkRmlsZVN5bmMsXG4gICAgICAgIHdyaXRlRmlsZVxuICAgIH0sXG4gICAgZm9ybWF0LFxuICAgIHJlc29sdmUsXG4gICAgZXhpc3RzOiAoZmlsZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRTeW5jKGZpbGUpLmlzRmlsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCAibGV0IHNoaW07XG5jbGFzcyBZMThOIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIC8vIGNvbmZpZ3VyYWJsZSBvcHRpb25zLlxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnkgPSBvcHRzLmRpcmVjdG9yeSB8fCAnLi9sb2NhbGVzJztcbiAgICAgICAgdGhpcy51cGRhdGVGaWxlcyA9IHR5cGVvZiBvcHRzLnVwZGF0ZUZpbGVzID09PSAnYm9vbGVhbicgPyBvcHRzLnVwZGF0ZUZpbGVzIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuICAgICAgICB0aGlzLmZhbGxiYWNrVG9MYW5ndWFnZSA9IHR5cGVvZiBvcHRzLmZhbGxiYWNrVG9MYW5ndWFnZSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5mYWxsYmFja1RvTGFuZ3VhZ2UgOiB0cnVlO1xuICAgICAgICAvLyBpbnRlcm5hbCBzdHVmZi5cbiAgICAgICAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMud3JpdGVRdWV1ZSA9IFtdO1xuICAgIH1cbiAgICBfXyguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhZ2dlZExpdGVyYWwoYXJndW1lbnRzWzBdLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ciA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgbGV0IGNiID0gZnVuY3Rpb24gKCkgeyB9OyAvLyBzdGFydCB3aXRoIG5vb3AuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgY2IgPSBhcmdzLnBvcCgpO1xuICAgICAgICBjYiA9IGNiIHx8IGZ1bmN0aW9uICgpIHsgfTsgLy8gbm9vcC5cbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXSlcbiAgICAgICAgICAgIHRoaXMuX3JlYWRMb2NhbGVGaWxlKCk7XG4gICAgICAgIC8vIHdlJ3ZlIG9ic2VydmVkIGEgbmV3IHN0cmluZywgdXBkYXRlIHRoZSBsYW5ndWFnZSBmaWxlLlxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW3N0cl0gJiYgdGhpcy51cGRhdGVGaWxlcykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc3RyXSA9IHN0cjtcbiAgICAgICAgICAgIC8vIGluY2x1ZGUgdGhlIGN1cnJlbnQgZGlyZWN0b3J5IGFuZCBsb2NhbGUsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVzZSB2YWx1ZXMgY291bGQgY2hhbmdlIGJlZm9yZSB0aGVcbiAgICAgICAgICAgIC8vIHdyaXRlIGlzIHBlcmZvcm1lZC5cbiAgICAgICAgICAgIHRoaXMuX2VucXVldWVXcml0ZSh7XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5OiB0aGlzLmRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGNiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaW0uZm9ybWF0LmFwcGx5KHNoaW0uZm9ybWF0LCBbdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc3RyXSB8fCBzdHJdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICAgIF9fbigpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnN0IHNpbmd1bGFyID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBjb25zdCBwbHVyYWwgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBsZXQgY2IgPSBmdW5jdGlvbiAoKSB7IH07IC8vIHN0YXJ0IHdpdGggbm9vcC5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYiA9IGFyZ3MucG9wKCk7XG4gICAgICAgIGlmICghdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV0pXG4gICAgICAgICAgICB0aGlzLl9yZWFkTG9jYWxlRmlsZSgpO1xuICAgICAgICBsZXQgc3RyID0gcXVhbnRpdHkgPT09IDEgPyBzaW5ndWxhciA6IHBsdXJhbDtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW3Npbmd1bGFyXSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtzaW5ndWxhcl07XG4gICAgICAgICAgICBzdHIgPSBlbnRyeVtxdWFudGl0eSA9PT0gMSA/ICdvbmUnIDogJ290aGVyJ107XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UndmUgb2JzZXJ2ZWQgYSBuZXcgc3RyaW5nLCB1cGRhdGUgdGhlIGxhbmd1YWdlIGZpbGUuXG4gICAgICAgIGlmICghdGhpcy5jYWNoZVt0aGlzLmxvY2FsZV1bc2luZ3VsYXJdICYmIHRoaXMudXBkYXRlRmlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdW3Npbmd1bGFyXSA9IHtcbiAgICAgICAgICAgICAgICBvbmU6IHNpbmd1bGFyLFxuICAgICAgICAgICAgICAgIG90aGVyOiBwbHVyYWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBpbmNsdWRlIHRoZSBjdXJyZW50IGRpcmVjdG9yeSBhbmQgbG9jYWxlLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlc2UgdmFsdWVzIGNvdWxkIGNoYW5nZSBiZWZvcmUgdGhlXG4gICAgICAgICAgICAvLyB3cml0ZSBpcyBwZXJmb3JtZWQuXG4gICAgICAgICAgICB0aGlzLl9lbnF1ZXVlV3JpdGUoe1xuICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogdGhpcy5kaXJlY3RvcnksXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBjYlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGEgJWQgcGxhY2Vob2xkZXIgaXMgcHJvdmlkZWQsIGFkZCBxdWFudGl0eVxuICAgICAgICAvLyB0byB0aGUgYXJndW1lbnRzIGV4cGFuZGVkIGJ5IHV0aWwuZm9ybWF0LlxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbc3RyXTtcbiAgICAgICAgaWYgKH5zdHIuaW5kZXhPZignJWQnKSlcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHF1YW50aXR5KTtcbiAgICAgICAgcmV0dXJuIHNoaW0uZm9ybWF0LmFwcGx5KHNoaW0uZm9ybWF0LCB2YWx1ZXMuY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB9XG4gICAgZ2V0TG9jYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGU7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsZShvYmopIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW3RoaXMubG9jYWxlXSlcbiAgICAgICAgICAgIHRoaXMuX3JlYWRMb2NhbGVGaWxlKCk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW3RoaXMubG9jYWxlXVtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3RhZ2dlZExpdGVyYWwocGFydHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICBwYXJ0cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0LCBpKSB7XG4gICAgICAgICAgICBjb25zdCBhcmcgPSBhcmdzW2kgKyAxXTtcbiAgICAgICAgICAgIHN0ciArPSBwYXJ0O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgc3RyICs9ICclcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fXy5hcHBseSh0aGlzLCBbc3RyXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzLCAxKSkpO1xuICAgIH1cbiAgICBfZW5xdWV1ZVdyaXRlKHdvcmspIHtcbiAgICAgICAgdGhpcy53cml0ZVF1ZXVlLnB1c2god29yayk7XG4gICAgICAgIGlmICh0aGlzLndyaXRlUXVldWUubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc1dyaXRlUXVldWUoKTtcbiAgICB9XG4gICAgX3Byb2Nlc3NXcml0ZVF1ZXVlKCkge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHdvcmsgPSB0aGlzLndyaXRlUXVldWVbMF07XG4gICAgICAgIC8vIGRlc3RydWN0dXJlIHRoZSBlbnF1ZXVlZCB3b3JrLlxuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSB3b3JrLmRpcmVjdG9yeTtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gd29yay5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGNiID0gd29yay5jYjtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VGaWxlID0gdGhpcy5fcmVzb2x2ZUxvY2FsZUZpbGUoZGlyZWN0b3J5LCBsb2NhbGUpO1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkTG9jYWxlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jYWNoZVtsb2NhbGVdLCBudWxsLCAyKTtcbiAgICAgICAgc2hpbS5mcy53cml0ZUZpbGUobGFuZ3VhZ2VGaWxlLCBzZXJpYWxpemVkTG9jYWxlLCAndXRmLTgnLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBfdGhpcy53cml0ZVF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMud3JpdGVRdWV1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIF90aGlzLl9wcm9jZXNzV3JpdGVRdWV1ZSgpO1xuICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZWFkTG9jYWxlRmlsZSgpIHtcbiAgICAgICAgbGV0IGxvY2FsZUxvb2t1cCA9IHt9O1xuICAgICAgICBjb25zdCBsYW5ndWFnZUZpbGUgPSB0aGlzLl9yZXNvbHZlTG9jYWxlRmlsZSh0aGlzLmRpcmVjdG9yeSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB1c2luZyBhIGJ1bmRsZXIgc3VjaCBhcyB3ZWJwYWNrLCByZWFkRmlsZVN5bmMgbWF5IG5vdCBiZSBkZWZpbmVkOlxuICAgICAgICAgICAgaWYgKHNoaW0uZnMucmVhZEZpbGVTeW5jKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlTG9va3VwID0gSlNPTi5wYXJzZShzaGltLmZzLnJlYWRGaWxlU3luYyhsYW5ndWFnZUZpbGUsICd1dGYtOCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9ICdzeW50YXggZXJyb3IgaW4gJyArIGxhbmd1YWdlRmlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpXG4gICAgICAgICAgICAgICAgbG9jYWxlTG9va3VwID0ge307XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGVbdGhpcy5sb2NhbGVdID0gbG9jYWxlTG9va3VwO1xuICAgIH1cbiAgICBfcmVzb2x2ZUxvY2FsZUZpbGUoZGlyZWN0b3J5LCBsb2NhbGUpIHtcbiAgICAgICAgbGV0IGZpbGUgPSBzaGltLnJlc29sdmUoZGlyZWN0b3J5LCAnLi8nLCBsb2NhbGUgKyAnLmpzb24nKTtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tUb0xhbmd1YWdlICYmICF0aGlzLl9maWxlRXhpc3RzU3luYyhmaWxlKSAmJiB+bG9jYWxlLmxhc3RJbmRleE9mKCdfJykpIHtcbiAgICAgICAgICAgIC8vIGF0dGVtcHQgZmFsbGJhY2sgdG8gbGFuZ3VhZ2Ugb25seVxuICAgICAgICAgICAgY29uc3QgbGFuZ3VhZ2VGaWxlID0gc2hpbS5yZXNvbHZlKGRpcmVjdG9yeSwgJy4vJywgbG9jYWxlLnNwbGl0KCdfJylbMF0gKyAnLmpzb24nKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9maWxlRXhpc3RzU3luYyhsYW5ndWFnZUZpbGUpKVxuICAgICAgICAgICAgICAgIGZpbGUgPSBsYW5ndWFnZUZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgfVxuICAgIF9maWxlRXhpc3RzU3luYyhmaWxlKSB7XG4gICAgICAgIHJldHVybiBzaGltLmV4aXN0cyhmaWxlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24geTE4bihvcHRzLCBfc2hpbSkge1xuICAgIHNoaW0gPSBfc2hpbTtcbiAgICBjb25zdCB5MThuID0gbmV3IFkxOE4ob3B0cyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgX186IHkxOG4uX18uYmluZCh5MThuKSxcbiAgICAgICAgX19uOiB5MThuLl9fbi5iaW5kKHkxOG4pLFxuICAgICAgICBzZXRMb2NhbGU6IHkxOG4uc2V0TG9jYWxlLmJpbmQoeTE4biksXG4gICAgICAgIGdldExvY2FsZTogeTE4bi5nZXRMb2NhbGUuYmluZCh5MThuKSxcbiAgICAgICAgdXBkYXRlTG9jYWxlOiB5MThuLnVwZGF0ZUxvY2FsZS5iaW5kKHkxOG4pLFxuICAgICAgICBsb2NhbGU6IHkxOG4ubG9jYWxlXG4gICAgfTtcbn1cbiIsICJpbXBvcnQgc2hpbSBmcm9tICcuL2J1aWxkL2xpYi9wbGF0Zm9ybS1zaGltcy9ub2RlLmpzJ1xuaW1wb3J0IHsgeTE4biBhcyBfeTE4biB9IGZyb20gJy4vYnVpbGQvbGliL2luZGV4LmpzJ1xuXG5jb25zdCB5MThuID0gKG9wdHMpID0+IHtcbiAgcmV0dXJuIF95MThuKG9wdHMsIHNoaW0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHkxOG5cbiIsICJleHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgc2hpbSwgbWVzc2FnZSkge1xuICAgIHNoaW0uYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFNpbmdsZUtleShhY3R1YWwsIHNoaW0pIHtcbiAgICBzaGltLmFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgYWN0dWFsLCAnc3RyaW5nJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0S2V5cyhvYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKG1heWJlUHJvbWlzZSkge1xuICAgIHJldHVybiAoISFtYXliZVByb21pc2UgJiZcbiAgICAgICAgISFtYXliZVByb21pc2UudGhlbiAmJlxuICAgICAgICB0eXBlb2YgbWF5YmVQcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpO1xufVxuIiwgImV4cG9ydCBjbGFzcyBZRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgICAgIHN1cGVyKG1zZyB8fCAneWFyZ3MgZXJyb3InKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1lFcnJvcic7XG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgWUVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gcGFyc2VDb21tYW5kKGNtZCkge1xuICAgIGNvbnN0IGV4dHJhU3BhY2VzU3RyaXBwZWRDb21tYW5kID0gY21kLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKTtcbiAgICBjb25zdCBzcGxpdENvbW1hbmQgPSBleHRyYVNwYWNlc1N0cmlwcGVkQ29tbWFuZC5zcGxpdCgvXFxzKyg/IVteW10qXXxbXjxdKj4pLyk7XG4gICAgY29uc3QgYnJlZ2V4ID0gL1xcLipbXFxdWzw+XS9nO1xuICAgIGNvbnN0IGZpcnN0Q29tbWFuZCA9IHNwbGl0Q29tbWFuZC5zaGlmdCgpO1xuICAgIGlmICghZmlyc3RDb21tYW5kKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbW1hbmQgZm91bmQgaW46ICR7Y21kfWApO1xuICAgIGNvbnN0IHBhcnNlZENvbW1hbmQgPSB7XG4gICAgICAgIGNtZDogZmlyc3RDb21tYW5kLnJlcGxhY2UoYnJlZ2V4LCAnJyksXG4gICAgICAgIGRlbWFuZGVkOiBbXSxcbiAgICAgICAgb3B0aW9uYWw6IFtdLFxuICAgIH07XG4gICAgc3BsaXRDb21tYW5kLmZvckVhY2goKGNtZCwgaSkgPT4ge1xuICAgICAgICBsZXQgdmFyaWFkaWMgPSBmYWxzZTtcbiAgICAgICAgY21kID0gY21kLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIGlmICgvXFwuK1tcXF0+XS8udGVzdChjbWQpICYmIGkgPT09IHNwbGl0Q29tbWFuZC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgdmFyaWFkaWMgPSB0cnVlO1xuICAgICAgICBpZiAoL15cXFsvLnRlc3QoY21kKSkge1xuICAgICAgICAgICAgcGFyc2VkQ29tbWFuZC5vcHRpb25hbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbWQ6IGNtZC5yZXBsYWNlKGJyZWdleCwgJycpLnNwbGl0KCd8JyksXG4gICAgICAgICAgICAgICAgdmFyaWFkaWMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZENvbW1hbmQuZGVtYW5kZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgY21kOiBjbWQucmVwbGFjZShicmVnZXgsICcnKS5zcGxpdCgnfCcpLFxuICAgICAgICAgICAgICAgIHZhcmlhZGljLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VkQ29tbWFuZDtcbn1cbiIsICJpbXBvcnQgeyBZRXJyb3IgfSBmcm9tICcuL3llcnJvci5qcyc7XG5pbXBvcnQgeyBwYXJzZUNvbW1hbmQgfSBmcm9tICcuL3BhcnNlLWNvbW1hbmQuanMnO1xuY29uc3QgcG9zaXRpb25OYW1lID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2ZpZnRoJywgJ3NpeHRoJ107XG5leHBvcnQgZnVuY3Rpb24gYXJnc2VydChhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgZnVuY3Rpb24gcGFyc2VBcmdzKCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGFyZzEgPT09ICdvYmplY3QnXG4gICAgICAgICAgICA/IFt7IGRlbWFuZGVkOiBbXSwgb3B0aW9uYWw6IFtdIH0sIGFyZzEsIGFyZzJdXG4gICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICBwYXJzZUNvbW1hbmQoYGNtZCAke2FyZzF9YCksXG4gICAgICAgICAgICAgICAgYXJnMixcbiAgICAgICAgICAgICAgICBhcmczLFxuICAgICAgICAgICAgXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICAgICAgY29uc3QgW3BhcnNlZCwgY2FsbGVyQXJndW1lbnRzLCBfbGVuZ3RoXSA9IHBhcnNlQXJncygpO1xuICAgICAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChjYWxsZXJBcmd1bWVudHMpO1xuICAgICAgICB3aGlsZSAoYXJncy5sZW5ndGggJiYgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBhcmdzLnBvcCgpO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBfbGVuZ3RoIHx8IGFyZ3MubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoIDwgcGFyc2VkLmRlbWFuZGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihgTm90IGVub3VnaCBhcmd1bWVudHMgcHJvdmlkZWQuIEV4cGVjdGVkICR7cGFyc2VkLmRlbWFuZGVkLmxlbmd0aH0gYnV0IHJlY2VpdmVkICR7YXJncy5sZW5ndGh9LmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvdGFsQ29tbWFuZHMgPSBwYXJzZWQuZGVtYW5kZWQubGVuZ3RoICsgcGFyc2VkLm9wdGlvbmFsLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA+IHRvdGFsQ29tbWFuZHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoYFRvbyBtYW55IGFyZ3VtZW50cyBwcm92aWRlZC4gRXhwZWN0ZWQgbWF4ICR7dG90YWxDb21tYW5kc30gYnV0IHJlY2VpdmVkICR7bGVuZ3RofS5gKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZGVtYW5kZWQuZm9yRWFjaChkZW1hbmRlZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcmcgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlZFR5cGUgPSBndWVzc1R5cGUoYXJnKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nVHlwZXMgPSBkZW1hbmRlZC5jbWQuZmlsdGVyKHR5cGUgPT4gdHlwZSA9PT0gb2JzZXJ2ZWRUeXBlIHx8IHR5cGUgPT09ICcqJyk7XG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdUeXBlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgYXJndW1lbnRUeXBlRXJyb3Iob2JzZXJ2ZWRUeXBlLCBkZW1hbmRlZC5jbWQsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IDE7XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJzZWQub3B0aW9uYWwuZm9yRWFjaChvcHRpb25hbCA9PiB7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgYXJnID0gYXJncy5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZWRUeXBlID0gZ3Vlc3NUeXBlKGFyZyk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGluZ1R5cGVzID0gb3B0aW9uYWwuY21kLmZpbHRlcih0eXBlID0+IHR5cGUgPT09IG9ic2VydmVkVHlwZSB8fCB0eXBlID09PSAnKicpO1xuICAgICAgICAgICAgaWYgKG1hdGNoaW5nVHlwZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIGFyZ3VtZW50VHlwZUVycm9yKG9ic2VydmVkVHlwZSwgb3B0aW9uYWwuY21kLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSAxO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLndhcm4oZXJyLnN0YWNrKTtcbiAgICB9XG59XG5mdW5jdGlvbiBndWVzc1R5cGUoYXJnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJnID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgYXJnO1xufVxuZnVuY3Rpb24gYXJndW1lbnRUeXBlRXJyb3Iob2JzZXJ2ZWRUeXBlLCBhbGxvd2VkVHlwZXMsIHBvc2l0aW9uKSB7XG4gICAgdGhyb3cgbmV3IFlFcnJvcihgSW52YWxpZCAke3Bvc2l0aW9uTmFtZVtwb3NpdGlvbl0gfHwgJ21hbnlpdGgnfSBhcmd1bWVudC4gRXhwZWN0ZWQgJHthbGxvd2VkVHlwZXMuam9pbignIG9yICcpfSBidXQgcmVjZWl2ZWQgJHtvYnNlcnZlZFR5cGV9LmApO1xufVxuIiwgImltcG9ydCB7IGFyZ3NlcnQgfSBmcm9tICcuL2FyZ3NlcnQuanMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pcy1wcm9taXNlLmpzJztcbmV4cG9ydCBjbGFzcyBHbG9iYWxNaWRkbGV3YXJlIHtcbiAgICBjb25zdHJ1Y3Rvcih5YXJncykge1xuICAgICAgICB0aGlzLmdsb2JhbE1pZGRsZXdhcmUgPSBbXTtcbiAgICAgICAgdGhpcy5mcm96ZW5zID0gW107XG4gICAgICAgIHRoaXMueWFyZ3MgPSB5YXJncztcbiAgICB9XG4gICAgYWRkTWlkZGxld2FyZShjYWxsYmFjaywgYXBwbHlCZWZvcmVWYWxpZGF0aW9uLCBnbG9iYWwgPSB0cnVlLCBtdXRhdGVzID0gZmFsc2UpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fGZ1bmN0aW9uPiBbYm9vbGVhbl0gW2Jvb2xlYW5dIFtib29sZWFuXScsIFtjYWxsYmFjaywgYXBwbHlCZWZvcmVWYWxpZGF0aW9uLCBnbG9iYWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFja1tpXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignbWlkZGxld2FyZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbSA9IGNhbGxiYWNrW2ldO1xuICAgICAgICAgICAgICAgIG0uYXBwbHlCZWZvcmVWYWxpZGF0aW9uID0gYXBwbHlCZWZvcmVWYWxpZGF0aW9uO1xuICAgICAgICAgICAgICAgIG0uZ2xvYmFsID0gZ2xvYmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5nbG9iYWxNaWRkbGV3YXJlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBtID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBtLmFwcGx5QmVmb3JlVmFsaWRhdGlvbiA9IGFwcGx5QmVmb3JlVmFsaWRhdGlvbjtcbiAgICAgICAgICAgIG0uZ2xvYmFsID0gZ2xvYmFsO1xuICAgICAgICAgICAgbS5tdXRhdGVzID0gbXV0YXRlcztcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWlkZGxld2FyZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy55YXJncztcbiAgICB9XG4gICAgYWRkQ29lcmNlTWlkZGxld2FyZShjYWxsYmFjaywgb3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IGFsaWFzZXMgPSB0aGlzLnlhcmdzLmdldEFsaWFzZXMoKTtcbiAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlID0gdGhpcy5nbG9iYWxNaWRkbGV3YXJlLmZpbHRlcihtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvQ2hlY2sgPSBbLi4uKGFsaWFzZXNbb3B0aW9uXSB8fCBbXSksIG9wdGlvbl07XG4gICAgICAgICAgICBpZiAoIW0ub3B0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiAhdG9DaGVjay5pbmNsdWRlcyhtLm9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFjay5vcHRpb24gPSBvcHRpb247XG4gICAgICAgIHJldHVybiB0aGlzLmFkZE1pZGRsZXdhcmUoY2FsbGJhY2ssIHRydWUsIHRydWUsIHRydWUpO1xuICAgIH1cbiAgICBnZXRNaWRkbGV3YXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxNaWRkbGV3YXJlO1xuICAgIH1cbiAgICBmcmVlemUoKSB7XG4gICAgICAgIHRoaXMuZnJvemVucy5wdXNoKFsuLi50aGlzLmdsb2JhbE1pZGRsZXdhcmVdKTtcbiAgICB9XG4gICAgdW5mcmVlemUoKSB7XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IHRoaXMuZnJvemVucy5wb3AoKTtcbiAgICAgICAgaWYgKGZyb3plbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlID0gZnJvemVuO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxNaWRkbGV3YXJlID0gdGhpcy5nbG9iYWxNaWRkbGV3YXJlLmZpbHRlcihtID0+IG0uZ2xvYmFsKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZE1pZGRsZXdhcmVGYWN0b3J5KGNvbW1hbmRNaWRkbGV3YXJlKSB7XG4gICAgaWYgKCFjb21tYW5kTWlkZGxld2FyZSlcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIHJldHVybiBjb21tYW5kTWlkZGxld2FyZS5tYXAobWlkZGxld2FyZSA9PiB7XG4gICAgICAgIG1pZGRsZXdhcmUuYXBwbHlCZWZvcmVWYWxpZGF0aW9uID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZShhcmd2LCB5YXJncywgbWlkZGxld2FyZXMsIGJlZm9yZVZhbGlkYXRpb24pIHtcbiAgICByZXR1cm4gbWlkZGxld2FyZXMucmVkdWNlKChhY2MsIG1pZGRsZXdhcmUpID0+IHtcbiAgICAgICAgaWYgKG1pZGRsZXdhcmUuYXBwbHlCZWZvcmVWYWxpZGF0aW9uICE9PSBiZWZvcmVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaWRkbGV3YXJlLm11dGF0ZXMpIHtcbiAgICAgICAgICAgIGlmIChtaWRkbGV3YXJlLmFwcGxpZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIG1pZGRsZXdhcmUuYXBwbGllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZShhY2MpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgICAgICAgICAgLnRoZW4oaW5pdGlhbE9iaiA9PiBQcm9taXNlLmFsbChbaW5pdGlhbE9iaiwgbWlkZGxld2FyZShpbml0aWFsT2JqLCB5YXJncyldKSlcbiAgICAgICAgICAgICAgICAudGhlbigoW2luaXRpYWxPYmosIG1pZGRsZXdhcmVPYmpdKSA9PiBPYmplY3QuYXNzaWduKGluaXRpYWxPYmosIG1pZGRsZXdhcmVPYmopKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG1pZGRsZXdhcmUoYWNjLCB5YXJncyk7XG4gICAgICAgICAgICByZXR1cm4gaXNQcm9taXNlKHJlc3VsdClcbiAgICAgICAgICAgICAgICA/IHJlc3VsdC50aGVuKG1pZGRsZXdhcmVPYmogPT4gT2JqZWN0LmFzc2lnbihhY2MsIG1pZGRsZXdhcmVPYmopKVxuICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbihhY2MsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9LCBhcmd2KTtcbn1cbiIsICJpbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuL2lzLXByb21pc2UuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIG1heWJlQXN5bmNSZXN1bHQoZ2V0UmVzdWx0LCByZXN1bHRIYW5kbGVyLCBlcnJvckhhbmRsZXIgPSAoZXJyKSA9PiB7XG4gICAgdGhyb3cgZXJyO1xufSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGlzRnVuY3Rpb24oZ2V0UmVzdWx0KSA/IGdldFJlc3VsdCgpIDogZ2V0UmVzdWx0O1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKHJlc3VsdClcbiAgICAgICAgICAgID8gcmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0SGFuZGxlcihyZXN1bHQpKVxuICAgICAgICAgICAgOiByZXN1bHRIYW5kbGVyKHJlc3VsdCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGVycm9ySGFuZGxlcihlcnIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG4iLCAiaW1wb3J0IHsgYXNzZXJ0Tm90U3RyaWN0RXF1YWwsIH0gZnJvbSAnLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuL3V0aWxzL2lzLXByb21pc2UuanMnO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21tYW5kTWlkZGxld2FyZUZhY3RvcnksIH0gZnJvbSAnLi9taWRkbGV3YXJlLmpzJztcbmltcG9ydCB7IHBhcnNlQ29tbWFuZCB9IGZyb20gJy4vcGFyc2UtY29tbWFuZC5qcyc7XG5pbXBvcnQgeyBpc1lhcmdzSW5zdGFuY2UsIH0gZnJvbSAnLi95YXJncy1mYWN0b3J5LmpzJztcbmltcG9ydCB7IG1heWJlQXN5bmNSZXN1bHQgfSBmcm9tICcuL3V0aWxzL21heWJlLWFzeW5jLXJlc3VsdC5qcyc7XG5jb25zdCBERUZBVUxUX01BUktFUiA9IC8oXlxcKil8KF5cXCQwKS87XG5leHBvcnQgY2xhc3MgQ29tbWFuZEluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2FnZSwgdmFsaWRhdGlvbiwgZ2xvYmFsTWlkZGxld2FyZSwgc2hpbSkge1xuICAgICAgICB0aGlzLnJlcXVpcmVDYWNoZSA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuICAgICAgICB0aGlzLmFsaWFzTWFwID0ge307XG4gICAgICAgIHRoaXMuZnJvemVucyA9IFtdO1xuICAgICAgICB0aGlzLnNoaW0gPSBzaGltO1xuICAgICAgICB0aGlzLnVzYWdlID0gdXNhZ2U7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWlkZGxld2FyZSA9IGdsb2JhbE1pZGRsZXdhcmU7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbiA9IHZhbGlkYXRpb247XG4gICAgfVxuICAgIGFkZERpcmVjdG9yeShkaXIsIHJlcSwgY2FsbGVyRmlsZSwgb3B0cykge1xuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgdGhpcy5yZXF1aXJlQ2FjaGUuYWRkKGNhbGxlckZpbGUpO1xuICAgICAgICBjb25zdCBmdWxsRGlyUGF0aCA9IHRoaXMuc2hpbS5wYXRoLnJlc29sdmUodGhpcy5zaGltLnBhdGguZGlybmFtZShjYWxsZXJGaWxlKSwgZGlyKTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLnNoaW0ucmVhZGRpclN5bmMoZnVsbERpclBhdGgsIHtcbiAgICAgICAgICAgIHJlY3Vyc2l2ZTogb3B0cy5yZWN1cnNlID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdHMuZXh0ZW5zaW9ucykpXG4gICAgICAgICAgICBvcHRzLmV4dGVuc2lvbnMgPSBbJ2pzJ107XG4gICAgICAgIGNvbnN0IHZpc2l0ID0gdHlwZW9mIG9wdHMudmlzaXQgPT09ICdmdW5jdGlvbicgPyBvcHRzLnZpc2l0IDogKG8pID0+IG87XG4gICAgICAgIGZvciAoY29uc3QgZmlsZWIgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlYi50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKG9wdHMuZXhjbHVkZSkge1xuICAgICAgICAgICAgICAgIGxldCBleGNsdWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmV4Y2x1ZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZSA9IG9wdHMuZXhjbHVkZShmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGUgPSBvcHRzLmV4Y2x1ZGUudGVzdChmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdHMuaW5jbHVkZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmNsdWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmluY2x1ZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSA9IG9wdHMuaW5jbHVkZShmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgPSBvcHRzLmluY2x1ZGUudGVzdChmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdXBwb3J0ZWRFeHRlbnNpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXh0IG9mIG9wdHMuZXh0ZW5zaW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLmVuZHNXaXRoKGV4dCkpXG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZEV4dGVuc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkRXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgam9pbmVkID0gdGhpcy5zaGltLnBhdGguam9pbihmdWxsRGlyUGF0aCwgZmlsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gcmVxKGpvaW5lZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5kYWJsZU1vZHVsZSA9IE9iamVjdC5jcmVhdGUobnVsbCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoeyAuLi5tb2R1bGUgfSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpc2l0ZWQgPSB2aXNpdChleHRlbmRhYmxlTW9kdWxlLCBqb2luZWQsIGZpbGUpO1xuICAgICAgICAgICAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVDYWNoZS5oYXMoam9pbmVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmVDYWNoZS5hZGQoam9pbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHRlbmRhYmxlTW9kdWxlLmNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuZGFibGVNb2R1bGUuY29tbWFuZCA9IHRoaXMuc2hpbS5wYXRoLmJhc2VuYW1lKGpvaW5lZCwgdGhpcy5zaGltLnBhdGguZXh0bmFtZShqb2luZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEhhbmRsZXIoZXh0ZW5kYWJsZU1vZHVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEhhbmRsZXIoY21kLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlciwgY29tbWFuZE1pZGRsZXdhcmUsIGRlcHJlY2F0ZWQpIHtcbiAgICAgICAgbGV0IGFsaWFzZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbWlkZGxld2FyZXMgPSBjb21tYW5kTWlkZGxld2FyZUZhY3RvcnkoY29tbWFuZE1pZGRsZXdhcmUpO1xuICAgICAgICBoYW5kbGVyID0gaGFuZGxlciB8fCAoKCkgPT4geyB9KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY21kKSkge1xuICAgICAgICAgICAgaWYgKGlzQ29tbWFuZEFuZEFsaWFzZXMoY21kKSkge1xuICAgICAgICAgICAgICAgIFtjbWQsIC4uLmFsaWFzZXNdID0gY21kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb21tYW5kIG9mIGNtZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEhhbmRsZXIoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQ29tbWFuZEhhbmRsZXJEZWZpbml0aW9uKGNtZCkpIHtcbiAgICAgICAgICAgIGxldCBjb21tYW5kID0gQXJyYXkuaXNBcnJheShjbWQuY29tbWFuZCkgfHwgdHlwZW9mIGNtZC5jb21tYW5kID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gY21kLmNvbW1hbmRcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29tbWFuZCBuYW1lIGdpdmVuIGZvciBtb2R1bGU6ICR7dGhpcy5zaGltLmluc3BlY3QoY21kKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbWQuYWxpYXNlcylcbiAgICAgICAgICAgICAgICBjb21tYW5kID0gW10uY29uY2F0KGNvbW1hbmQpLmNvbmNhdChjbWQuYWxpYXNlcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEhhbmRsZXIoY29tbWFuZCwgdGhpcy5leHRyYWN0RGVzYyhjbWQpLCBjbWQuYnVpbGRlciwgY21kLmhhbmRsZXIsIGNtZC5taWRkbGV3YXJlcywgY21kLmRlcHJlY2F0ZWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQ29tbWFuZEJ1aWxkZXJEZWZpbml0aW9uKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEhhbmRsZXIoW2NtZF0uY29uY2F0KGFsaWFzZXMpLCBkZXNjcmlwdGlvbiwgYnVpbGRlci5idWlsZGVyLCBidWlsZGVyLmhhbmRsZXIsIGJ1aWxkZXIubWlkZGxld2FyZXMsIGJ1aWxkZXIuZGVwcmVjYXRlZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjbWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRDb21tYW5kID0gcGFyc2VDb21tYW5kKGNtZCk7XG4gICAgICAgICAgICBhbGlhc2VzID0gYWxpYXNlcy5tYXAoYWxpYXMgPT4gcGFyc2VDb21tYW5kKGFsaWFzKS5jbWQpO1xuICAgICAgICAgICAgbGV0IGlzRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQWxpYXNlcyA9IFtwYXJzZWRDb21tYW5kLmNtZF0uY29uY2F0KGFsaWFzZXMpLmZpbHRlcihjID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoREVGQVVMVF9NQVJLRVIudGVzdChjKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocGFyc2VkQWxpYXNlcy5sZW5ndGggPT09IDAgJiYgaXNEZWZhdWx0KVxuICAgICAgICAgICAgICAgIHBhcnNlZEFsaWFzZXMucHVzaCgnJDAnKTtcbiAgICAgICAgICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRDb21tYW5kLmNtZCA9IHBhcnNlZEFsaWFzZXNbMF07XG4gICAgICAgICAgICAgICAgYWxpYXNlcyA9IHBhcnNlZEFsaWFzZXMuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgY21kID0gY21kLnJlcGxhY2UoREVGQVVMVF9NQVJLRVIsIHBhcnNlZENvbW1hbmQuY21kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsaWFzZXMuZm9yRWFjaChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGlhc01hcFthbGlhc10gPSBwYXJzZWRDb21tYW5kLmNtZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNhZ2UuY29tbWFuZChjbWQsIGRlc2NyaXB0aW9uLCBpc0RlZmF1bHQsIGFsaWFzZXMsIGRlcHJlY2F0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1twYXJzZWRDb21tYW5kLmNtZF0gPSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWw6IGNtZCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICAgIGJ1aWxkZXI6IGJ1aWxkZXIgfHwge30sXG4gICAgICAgICAgICAgICAgbWlkZGxld2FyZXMsXG4gICAgICAgICAgICAgICAgZGVwcmVjYXRlZCxcbiAgICAgICAgICAgICAgICBkZW1hbmRlZDogcGFyc2VkQ29tbWFuZC5kZW1hbmRlZCxcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogcGFyc2VkQ29tbWFuZC5vcHRpb25hbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNEZWZhdWx0KVxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdENvbW1hbmQgPSB0aGlzLmhhbmRsZXJzW3BhcnNlZENvbW1hbmQuY21kXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDb21tYW5kSGFuZGxlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzO1xuICAgIH1cbiAgICBnZXRDb21tYW5kcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFuZGxlcnMpLmNvbmNhdChPYmplY3Qua2V5cyh0aGlzLmFsaWFzTWFwKSk7XG4gICAgfVxuICAgIGhhc0RlZmF1bHRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmRlZmF1bHRDb21tYW5kO1xuICAgIH1cbiAgICBydW5Db21tYW5kKGNvbW1hbmQsIHlhcmdzLCBwYXJzZWQsIGNvbW1hbmRJbmRleCwgaGVscE9ubHksIGhlbHBPclZlcnNpb25TZXQpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZEhhbmRsZXIgPSB0aGlzLmhhbmRsZXJzW2NvbW1hbmRdIHx8XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW3RoaXMuYWxpYXNNYXBbY29tbWFuZF1dIHx8XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDb21tYW5kO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgcGFyZW50Q29tbWFuZHMgPSBjdXJyZW50Q29udGV4dC5jb21tYW5kcy5zbGljZSgpO1xuICAgICAgICBjb25zdCBpc0RlZmF1bHRDb21tYW5kID0gIWNvbW1hbmQ7XG4gICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjdXJyZW50Q29udGV4dC5jb21tYW5kcy5wdXNoKGNvbW1hbmQpO1xuICAgICAgICAgICAgY3VycmVudENvbnRleHQuZnVsbENvbW1hbmRzLnB1c2goY29tbWFuZEhhbmRsZXIub3JpZ2luYWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1aWxkZXJSZXN1bHQgPSB0aGlzLmFwcGx5QnVpbGRlclVwZGF0ZVVzYWdlQW5kUGFyc2UoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIHlhcmdzLCBwYXJzZWQuYWxpYXNlcywgcGFyZW50Q29tbWFuZHMsIGNvbW1hbmRJbmRleCwgaGVscE9ubHksIGhlbHBPclZlcnNpb25TZXQpO1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKGJ1aWxkZXJSZXN1bHQpXG4gICAgICAgICAgICA/IGJ1aWxkZXJSZXN1bHQudGhlbihyZXN1bHQgPT4gdGhpcy5hcHBseU1pZGRsZXdhcmVBbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIHJlc3VsdC5pbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBoZWxwT25seSwgcmVzdWx0LmFsaWFzZXMsIHlhcmdzKSlcbiAgICAgICAgICAgIDogdGhpcy5hcHBseU1pZGRsZXdhcmVBbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIGJ1aWxkZXJSZXN1bHQuaW5uZXJBcmd2LCBjdXJyZW50Q29udGV4dCwgaGVscE9ubHksIGJ1aWxkZXJSZXN1bHQuYWxpYXNlcywgeWFyZ3MpO1xuICAgIH1cbiAgICBhcHBseUJ1aWxkZXJVcGRhdGVVc2FnZUFuZFBhcnNlKGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCB5YXJncywgYWxpYXNlcywgcGFyZW50Q29tbWFuZHMsIGNvbW1hbmRJbmRleCwgaGVscE9ubHksIGhlbHBPclZlcnNpb25TZXQpIHtcbiAgICAgICAgY29uc3QgYnVpbGRlciA9IGNvbW1hbmRIYW5kbGVyLmJ1aWxkZXI7XG4gICAgICAgIGxldCBpbm5lcllhcmdzID0geWFyZ3M7XG4gICAgICAgIGlmIChpc0NvbW1hbmRCdWlsZGVyQ2FsbGJhY2soYnVpbGRlcikpIHtcbiAgICAgICAgICAgIHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldFVzYWdlSW5zdGFuY2UoKS5mcmVlemUoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkZXJPdXRwdXQgPSBidWlsZGVyKHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLnJlc2V0KGFsaWFzZXMpLCBoZWxwT3JWZXJzaW9uU2V0KTtcbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UoYnVpbGRlck91dHB1dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlck91dHB1dC50aGVuKG91dHB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyWWFyZ3MgPSBpc1lhcmdzSW5zdGFuY2Uob3V0cHV0KSA/IG91dHB1dCA6IHlhcmdzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUFuZFVwZGF0ZVVzYWdlKGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lcllhcmdzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDb21tYW5kQnVpbGRlck9wdGlvbkRlZmluaXRpb25zKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUluc3RhbmNlKCkuZnJlZXplKCk7XG4gICAgICAgICAgICBpbm5lcllhcmdzID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkucmVzZXQoYWxpYXNlcyk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21tYW5kSGFuZGxlci5idWlsZGVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaW5uZXJZYXJncy5vcHRpb24oa2V5LCBidWlsZGVyW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VBbmRVcGRhdGVVc2FnZShpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgaW5uZXJZYXJncywgcGFyZW50Q29tbWFuZHMsIGNvbW1hbmRJbmRleCwgaGVscE9ubHkpO1xuICAgIH1cbiAgICBwYXJzZUFuZFVwZGF0ZVVzYWdlKGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lcllhcmdzLCBwYXJlbnRDb21tYW5kcywgY29tbWFuZEluZGV4LCBoZWxwT25seSkge1xuICAgICAgICBpZiAoaXNEZWZhdWx0Q29tbWFuZClcbiAgICAgICAgICAgIGlubmVyWWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLnVuZnJlZXplKHRydWUpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGVVc2FnZShpbm5lcllhcmdzKSkge1xuICAgICAgICAgICAgaW5uZXJZYXJnc1xuICAgICAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgICAgIC5nZXRVc2FnZUluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAudXNhZ2UodGhpcy51c2FnZUZyb21QYXJlbnRDb21tYW5kc0NvbW1hbmRIYW5kbGVyKHBhcmVudENvbW1hbmRzLCBjb21tYW5kSGFuZGxlciksIGNvbW1hbmRIYW5kbGVyLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbm5lckFyZ3YgPSBpbm5lcllhcmdzXG4gICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgIC5ydW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kcyhudWxsLCB1bmRlZmluZWQsIHRydWUsIGNvbW1hbmRJbmRleCwgaGVscE9ubHkpO1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKGlubmVyQXJndilcbiAgICAgICAgICAgID8gaW5uZXJBcmd2LnRoZW4oYXJndiA9PiAoe1xuICAgICAgICAgICAgICAgIGFsaWFzZXM6IGlubmVyWWFyZ3MucGFyc2VkLmFsaWFzZXMsXG4gICAgICAgICAgICAgICAgaW5uZXJBcmd2OiBhcmd2LFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBhbGlhc2VzOiBpbm5lcllhcmdzLnBhcnNlZC5hbGlhc2VzLFxuICAgICAgICAgICAgICAgIGlubmVyQXJndjogaW5uZXJBcmd2LFxuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgc2hvdWxkVXBkYXRlVXNhZ2UoeWFyZ3MpIHtcbiAgICAgICAgcmV0dXJuICgheWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmdldFVzYWdlRGlzYWJsZWQoKSAmJlxuICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmdldFVzYWdlKCkubGVuZ3RoID09PSAwKTtcbiAgICB9XG4gICAgdXNhZ2VGcm9tUGFyZW50Q29tbWFuZHNDb21tYW5kSGFuZGxlcihwYXJlbnRDb21tYW5kcywgY29tbWFuZEhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgYyA9IERFRkFVTFRfTUFSS0VSLnRlc3QoY29tbWFuZEhhbmRsZXIub3JpZ2luYWwpXG4gICAgICAgICAgICA/IGNvbW1hbmRIYW5kbGVyLm9yaWdpbmFsLnJlcGxhY2UoREVGQVVMVF9NQVJLRVIsICcnKS50cmltKClcbiAgICAgICAgICAgIDogY29tbWFuZEhhbmRsZXIub3JpZ2luYWw7XG4gICAgICAgIGNvbnN0IHBjID0gcGFyZW50Q29tbWFuZHMuZmlsdGVyKGMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFERUZBVUxUX01BUktFUi50ZXN0KGMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGMucHVzaChjKTtcbiAgICAgICAgcmV0dXJuIGAkMCAke3BjLmpvaW4oJyAnKX1gO1xuICAgIH1cbiAgICBoYW5kbGVWYWxpZGF0aW9uQW5kR2V0UmVzdWx0KGlzRGVmYXVsdENvbW1hbmQsIGNvbW1hbmRIYW5kbGVyLCBpbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBhbGlhc2VzLCB5YXJncywgbWlkZGxld2FyZXMsIHBvc2l0aW9uYWxNYXApIHtcbiAgICAgICAgaWYgKCF5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRIYXNPdXRwdXQoKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHlhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLnJ1blZhbGlkYXRpb24oYWxpYXNlcywgcG9zaXRpb25hbE1hcCwgeWFyZ3MucGFyc2VkLmVycm9yLCBpc0RlZmF1bHRDb21tYW5kKTtcbiAgICAgICAgICAgIGlubmVyQXJndiA9IG1heWJlQXN5bmNSZXN1bHQoaW5uZXJBcmd2LCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmRIYW5kbGVyLmhhbmRsZXIgJiYgIXlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldEhhc091dHB1dCgpKSB7XG4gICAgICAgICAgICB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5zZXRIYXNPdXRwdXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVsYXRlRG91YmxlRGFzaCA9ICEheWFyZ3MuZ2V0T3B0aW9ucygpLmNvbmZpZ3VyYXRpb25bJ3BvcHVsYXRlLS0nXTtcbiAgICAgICAgICAgIHlhcmdzXG4gICAgICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAgICAgLnBvc3RQcm9jZXNzKGlubmVyQXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgaW5uZXJBcmd2ID0gYXBwbHlNaWRkbGV3YXJlKGlubmVyQXJndiwgeWFyZ3MsIG1pZGRsZXdhcmVzLCBmYWxzZSk7XG4gICAgICAgICAgICBpbm5lckFyZ3YgPSBtYXliZUFzeW5jUmVzdWx0KGlubmVyQXJndiwgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyUmVzdWx0ID0gY29tbWFuZEhhbmRsZXIuaGFuZGxlcihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1Byb21pc2UoaGFuZGxlclJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgPyBoYW5kbGVyUmVzdWx0LnRoZW4oKCkgPT4gcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICA6IHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFpc0RlZmF1bHRDb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmNhY2hlSGVscE1lc3NhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UoaW5uZXJBcmd2KSAmJlxuICAgICAgICAgICAgICAgICF5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5oYXNQYXJzZUNhbGxiYWNrKCkpIHtcbiAgICAgICAgICAgICAgICBpbm5lckFyZ3YuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0VXNhZ2VJbnN0YW5jZSgpLmZhaWwobnVsbCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRGVmYXVsdENvbW1hbmQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLnBvcCgpO1xuICAgICAgICAgICAgY3VycmVudENvbnRleHQuZnVsbENvbW1hbmRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbm5lckFyZ3Y7XG4gICAgfVxuICAgIGFwcGx5TWlkZGxld2FyZUFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgaW5uZXJBcmd2LCBjdXJyZW50Q29udGV4dCwgaGVscE9ubHksIGFsaWFzZXMsIHlhcmdzKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbmFsTWFwID0ge307XG4gICAgICAgIGlmIChoZWxwT25seSlcbiAgICAgICAgICAgIHJldHVybiBpbm5lckFyZ3Y7XG4gICAgICAgIGlmICgheWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0SGFzT3V0cHV0KCkpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uYWxNYXAgPSB0aGlzLnBvcHVsYXRlUG9zaXRpb25hbHMoY29tbWFuZEhhbmRsZXIsIGlubmVyQXJndiwgY3VycmVudENvbnRleHQsIHlhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtaWRkbGV3YXJlcyA9IHRoaXMuZ2xvYmFsTWlkZGxld2FyZVxuICAgICAgICAgICAgLmdldE1pZGRsZXdhcmUoKVxuICAgICAgICAgICAgLnNsaWNlKDApXG4gICAgICAgICAgICAuY29uY2F0KGNvbW1hbmRIYW5kbGVyLm1pZGRsZXdhcmVzKTtcbiAgICAgICAgY29uc3QgbWF5YmVQcm9taXNlQXJndiA9IGFwcGx5TWlkZGxld2FyZShpbm5lckFyZ3YsIHlhcmdzLCBtaWRkbGV3YXJlcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBpc1Byb21pc2UobWF5YmVQcm9taXNlQXJndilcbiAgICAgICAgICAgID8gbWF5YmVQcm9taXNlQXJndi50aGVuKHJlc29sdmVkSW5uZXJBcmd2ID0+IHRoaXMuaGFuZGxlVmFsaWRhdGlvbkFuZEdldFJlc3VsdChpc0RlZmF1bHRDb21tYW5kLCBjb21tYW5kSGFuZGxlciwgcmVzb2x2ZWRJbm5lckFyZ3YsIGN1cnJlbnRDb250ZXh0LCBhbGlhc2VzLCB5YXJncywgbWlkZGxld2FyZXMsIHBvc2l0aW9uYWxNYXApKVxuICAgICAgICAgICAgOiB0aGlzLmhhbmRsZVZhbGlkYXRpb25BbmRHZXRSZXN1bHQoaXNEZWZhdWx0Q29tbWFuZCwgY29tbWFuZEhhbmRsZXIsIG1heWJlUHJvbWlzZUFyZ3YsIGN1cnJlbnRDb250ZXh0LCBhbGlhc2VzLCB5YXJncywgbWlkZGxld2FyZXMsIHBvc2l0aW9uYWxNYXApO1xuICAgIH1cbiAgICBwb3B1bGF0ZVBvc2l0aW9uYWxzKGNvbW1hbmRIYW5kbGVyLCBhcmd2LCBjb250ZXh0LCB5YXJncykge1xuICAgICAgICBhcmd2Ll8gPSBhcmd2Ll8uc2xpY2UoY29udGV4dC5jb21tYW5kcy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBkZW1hbmRlZCA9IGNvbW1hbmRIYW5kbGVyLmRlbWFuZGVkLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBvcHRpb25hbCA9IGNvbW1hbmRIYW5kbGVyLm9wdGlvbmFsLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBwb3NpdGlvbmFsTWFwID0ge307XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbi5wb3NpdGlvbmFsQ291bnQoZGVtYW5kZWQubGVuZ3RoLCBhcmd2Ll8ubGVuZ3RoKTtcbiAgICAgICAgd2hpbGUgKGRlbWFuZGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZGVtYW5kID0gZGVtYW5kZWQuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVQb3NpdGlvbmFsKGRlbWFuZCwgYXJndiwgcG9zaXRpb25hbE1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKG9wdGlvbmFsLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbWF5YmUgPSBvcHRpb25hbC5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVBvc2l0aW9uYWwobWF5YmUsIGFyZ3YsIHBvc2l0aW9uYWxNYXApO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3YuXyA9IGNvbnRleHQuY29tbWFuZHMuY29uY2F0KGFyZ3YuXy5tYXAoYSA9PiAnJyArIGEpKTtcbiAgICAgICAgdGhpcy5wb3N0UHJvY2Vzc1Bvc2l0aW9uYWxzKGFyZ3YsIHBvc2l0aW9uYWxNYXAsIHRoaXMuY21kVG9QYXJzZU9wdGlvbnMoY29tbWFuZEhhbmRsZXIub3JpZ2luYWwpLCB5YXJncyk7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbmFsTWFwO1xuICAgIH1cbiAgICBwb3B1bGF0ZVBvc2l0aW9uYWwocG9zaXRpb25hbCwgYXJndiwgcG9zaXRpb25hbE1hcCkge1xuICAgICAgICBjb25zdCBjbWQgPSBwb3NpdGlvbmFsLmNtZFswXTtcbiAgICAgICAgaWYgKHBvc2l0aW9uYWwudmFyaWFkaWMpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uYWxNYXBbY21kXSA9IGFyZ3YuXy5zcGxpY2UoMCkubWFwKFN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoYXJndi5fLmxlbmd0aClcbiAgICAgICAgICAgICAgICBwb3NpdGlvbmFsTWFwW2NtZF0gPSBbU3RyaW5nKGFyZ3YuXy5zaGlmdCgpKV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY21kVG9QYXJzZU9wdGlvbnMoY21kU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFycmF5OiBbXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHt9LFxuICAgICAgICAgICAgYWxpYXM6IHt9LFxuICAgICAgICAgICAgZGVtYW5kOiB7fSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VDb21tYW5kKGNtZFN0cmluZyk7XG4gICAgICAgIHBhcnNlZC5kZW1hbmRlZC5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2NtZCwgLi4uYWxpYXNlc10gPSBkLmNtZDtcbiAgICAgICAgICAgIGlmIChkLnZhcmlhZGljKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VPcHRpb25zLmFycmF5LnB1c2goY21kKTtcbiAgICAgICAgICAgICAgICBwYXJzZU9wdGlvbnMuZGVmYXVsdFtjbWRdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZU9wdGlvbnMuYWxpYXNbY21kXSA9IGFsaWFzZXM7XG4gICAgICAgICAgICBwYXJzZU9wdGlvbnMuZGVtYW5kW2NtZF0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcGFyc2VkLm9wdGlvbmFsLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICBjb25zdCBbY21kLCAuLi5hbGlhc2VzXSA9IG8uY21kO1xuICAgICAgICAgICAgaWYgKG8udmFyaWFkaWMpIHtcbiAgICAgICAgICAgICAgICBwYXJzZU9wdGlvbnMuYXJyYXkucHVzaChjbWQpO1xuICAgICAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5kZWZhdWx0W2NtZF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlT3B0aW9ucy5hbGlhc1tjbWRdID0gYWxpYXNlcztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJzZU9wdGlvbnM7XG4gICAgfVxuICAgIHBvc3RQcm9jZXNzUG9zaXRpb25hbHMoYXJndiwgcG9zaXRpb25hbE1hcCwgcGFyc2VPcHRpb25zLCB5YXJncykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgeWFyZ3MuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgb3B0aW9ucy5kZWZhdWx0ID0gT2JqZWN0LmFzc2lnbihwYXJzZU9wdGlvbnMuZGVmYXVsdCwgb3B0aW9ucy5kZWZhdWx0KTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyc2VPcHRpb25zLmFsaWFzKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5hbGlhc1trZXldID0gKG9wdGlvbnMuYWxpYXNba2V5XSB8fCBbXSkuY29uY2F0KHBhcnNlT3B0aW9ucy5hbGlhc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmFycmF5ID0gb3B0aW9ucy5hcnJheS5jb25jYXQocGFyc2VPcHRpb25zLmFycmF5KTtcbiAgICAgICAgb3B0aW9ucy5jb25maWcgPSB7fTtcbiAgICAgICAgY29uc3QgdW5wYXJzZWQgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMocG9zaXRpb25hbE1hcCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgcG9zaXRpb25hbE1hcFtrZXldLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29uZmlndXJhdGlvblsndW5rbm93bi1vcHRpb25zLWFzLWFyZ3MnXSlcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5rZXlba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdW5wYXJzZWQucHVzaChgLS0ke2tleX1gKTtcbiAgICAgICAgICAgICAgICB1bnBhcnNlZC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF1bnBhcnNlZC5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMuY29uZmlndXJhdGlvbiwge1xuICAgICAgICAgICAgJ3BvcHVsYXRlLS0nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMuc2hpbS5QYXJzZXIuZGV0YWlsZWQodW5wYXJzZWQsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZyxcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAocGFyc2VkLmVycm9yKSB7XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgICAgIC5nZXRVc2FnZUluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAuZmFpbChwYXJzZWQuZXJyb3IubWVzc2FnZSwgcGFyc2VkLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uYWxLZXlzID0gT2JqZWN0LmtleXMocG9zaXRpb25hbE1hcCk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwb3NpdGlvbmFsTWFwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25hbEtleXMucHVzaCguLi5wYXJzZWQuYWxpYXNlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyc2VkLmFyZ3YpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25hbEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBvc2l0aW9uYWxNYXBba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uYWxNYXBba2V5XSA9IHBhcnNlZC5hcmd2W2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0luQ29uZmlncyh5YXJncywga2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuaXNEZWZhdWx0ZWQoeWFyZ3MsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCBrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyc2VkLmFyZ3YsIGtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KGFyZ3Zba2V5XSkgfHwgQXJyYXkuaXNBcnJheShwYXJzZWQuYXJndltrZXldKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3Zba2V5XSA9IFtdLmNvbmNhdChhcmd2W2tleV0sIHBhcnNlZC5hcmd2W2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltrZXldID0gcGFyc2VkLmFyZ3Zba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRGVmYXVsdGVkKHlhcmdzLCBrZXkpIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBkZWZhdWx0cyB9ID0geWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0cywga2V5KSB8fFxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRzLCB0aGlzLnNoaW0uUGFyc2VyLmNhbWVsQ2FzZShrZXkpKSk7XG4gICAgfVxuICAgIGlzSW5Db25maWdzKHlhcmdzLCBrZXkpIHtcbiAgICAgICAgY29uc3QgeyBjb25maWdPYmplY3RzIH0gPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIHJldHVybiAoY29uZmlnT2JqZWN0cy5zb21lKGMgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsIGtleSkpIHx8XG4gICAgICAgICAgICBjb25maWdPYmplY3RzLnNvbWUoYyA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYywgdGhpcy5zaGltLlBhcnNlci5jYW1lbENhc2Uoa2V5KSkpKTtcbiAgICB9XG4gICAgcnVuRGVmYXVsdEJ1aWxkZXJPbih5YXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdENvbW1hbmQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZVVzYWdlKHlhcmdzKSkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZFN0cmluZyA9IERFRkFVTFRfTUFSS0VSLnRlc3QodGhpcy5kZWZhdWx0Q29tbWFuZC5vcmlnaW5hbClcbiAgICAgICAgICAgICAgICA/IHRoaXMuZGVmYXVsdENvbW1hbmQub3JpZ2luYWxcbiAgICAgICAgICAgICAgICA6IHRoaXMuZGVmYXVsdENvbW1hbmQub3JpZ2luYWwucmVwbGFjZSgvXlteW1xcXTw+XSovLCAnJDAgJyk7XG4gICAgICAgICAgICB5YXJnc1xuICAgICAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgICAgIC5nZXRVc2FnZUluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAudXNhZ2UoY29tbWFuZFN0cmluZywgdGhpcy5kZWZhdWx0Q29tbWFuZC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVpbGRlciA9IHRoaXMuZGVmYXVsdENvbW1hbmQuYnVpbGRlcjtcbiAgICAgICAgaWYgKGlzQ29tbWFuZEJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXIoeWFyZ3MsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc0NvbW1hbmRCdWlsZGVyRGVmaW5pdGlvbihidWlsZGVyKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYnVpbGRlcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHlhcmdzLm9wdGlvbihrZXksIGJ1aWxkZXJba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBleHRyYWN0RGVzYyh7IGRlc2NyaWJlLCBkZXNjcmlwdGlvbiwgZGVzYyB9KSB7XG4gICAgICAgIGZvciAoY29uc3QgdGVzdCBvZiBbZGVzY3JpYmUsIGRlc2NyaXB0aW9uLCBkZXNjXSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJyB8fCB0ZXN0ID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdDtcbiAgICAgICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKHRlc3QsIHRydWUsIHRoaXMuc2hpbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmcmVlemUoKSB7XG4gICAgICAgIHRoaXMuZnJvemVucy5wdXNoKHtcbiAgICAgICAgICAgIGhhbmRsZXJzOiB0aGlzLmhhbmRsZXJzLFxuICAgICAgICAgICAgYWxpYXNNYXA6IHRoaXMuYWxpYXNNYXAsXG4gICAgICAgICAgICBkZWZhdWx0Q29tbWFuZDogdGhpcy5kZWZhdWx0Q29tbWFuZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVuZnJlZXplKCkge1xuICAgICAgICBjb25zdCBmcm96ZW4gPSB0aGlzLmZyb3plbnMucG9wKCk7XG4gICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKGZyb3plbiwgdW5kZWZpbmVkLCB0aGlzLnNoaW0pO1xuICAgICAgICAoe1xuICAgICAgICAgICAgaGFuZGxlcnM6IHRoaXMuaGFuZGxlcnMsXG4gICAgICAgICAgICBhbGlhc01hcDogdGhpcy5hbGlhc01hcCxcbiAgICAgICAgICAgIGRlZmF1bHRDb21tYW5kOiB0aGlzLmRlZmF1bHRDb21tYW5kLFxuICAgICAgICB9ID0gZnJvemVuKTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5hbGlhc01hcCA9IHt9O1xuICAgICAgICB0aGlzLmRlZmF1bHRDb21tYW5kID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlcXVpcmVDYWNoZSA9IG5ldyBTZXQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmQodXNhZ2UsIHZhbGlkYXRpb24sIGdsb2JhbE1pZGRsZXdhcmUsIHNoaW0pIHtcbiAgICByZXR1cm4gbmV3IENvbW1hbmRJbnN0YW5jZSh1c2FnZSwgdmFsaWRhdGlvbiwgZ2xvYmFsTWlkZGxld2FyZSwgc2hpbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDb21tYW5kQnVpbGRlckRlZmluaXRpb24oYnVpbGRlcikge1xuICAgIHJldHVybiAodHlwZW9mIGJ1aWxkZXIgPT09ICdvYmplY3QnICYmXG4gICAgICAgICEhYnVpbGRlci5idWlsZGVyICYmXG4gICAgICAgIHR5cGVvZiBidWlsZGVyLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gaXNDb21tYW5kQW5kQWxpYXNlcyhjbWQpIHtcbiAgICByZXR1cm4gY21kLmV2ZXJ5KGMgPT4gdHlwZW9mIGMgPT09ICdzdHJpbmcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRCdWlsZGVyQ2FsbGJhY2soYnVpbGRlcikge1xuICAgIHJldHVybiB0eXBlb2YgYnVpbGRlciA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGlzQ29tbWFuZEJ1aWxkZXJPcHRpb25EZWZpbml0aW9ucyhidWlsZGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBidWlsZGVyID09PSAnb2JqZWN0Jztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRIYW5kbGVyRGVmaW5pdGlvbihjbWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNtZCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoY21kKTtcbn1cbiIsICJpbXBvcnQgeyBvYmplY3RLZXlzIH0gZnJvbSAnLi4vdHlwaW5ncy9jb21tb24tdHlwZXMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIG9iakZpbHRlcihvcmlnaW5hbCA9IHt9LCBmaWx0ZXIgPSAoKSA9PiB0cnVlKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG4gICAgb2JqZWN0S2V5cyhvcmlnaW5hbCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyKGtleSwgb3JpZ2luYWxba2V5XSkpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gb3JpZ2luYWxba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QmxvY2tpbmcoYmxvY2tpbmcpIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG4gICAgW3Byb2Nlc3Muc3Rkb3V0LCBwcm9jZXNzLnN0ZGVycl0uZm9yRWFjaChfc3RyZWFtID0+IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gX3N0cmVhbTtcbiAgICAgICAgaWYgKHN0cmVhbS5faGFuZGxlICYmXG4gICAgICAgICAgICBzdHJlYW0uaXNUVFkgJiZcbiAgICAgICAgICAgIHR5cGVvZiBzdHJlYW0uX2hhbmRsZS5zZXRCbG9ja2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RyZWFtLl9oYW5kbGUuc2V0QmxvY2tpbmcoYmxvY2tpbmcpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCAiaW1wb3J0IHsgb2JqRmlsdGVyIH0gZnJvbSAnLi91dGlscy9vYmotZmlsdGVyLmpzJztcbmltcG9ydCB7IFlFcnJvciB9IGZyb20gJy4veWVycm9yLmpzJztcbmltcG9ydCBzZXRCbG9ja2luZyBmcm9tICcuL3V0aWxzL3NldC1ibG9ja2luZy5qcyc7XG5mdW5jdGlvbiBpc0Jvb2xlYW4oZmFpbCkge1xuICAgIHJldHVybiB0eXBlb2YgZmFpbCA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzYWdlKHlhcmdzLCBzaGltKSB7XG4gICAgY29uc3QgX18gPSBzaGltLnkxOG4uX187XG4gICAgY29uc3Qgc2VsZiA9IHt9O1xuICAgIGNvbnN0IGZhaWxzID0gW107XG4gICAgc2VsZi5mYWlsRm4gPSBmdW5jdGlvbiBmYWlsRm4oZikge1xuICAgICAgICBmYWlscy5wdXNoKGYpO1xuICAgIH07XG4gICAgbGV0IGZhaWxNZXNzYWdlID0gbnVsbDtcbiAgICBsZXQgZ2xvYmFsRmFpbE1lc3NhZ2UgPSBudWxsO1xuICAgIGxldCBzaG93SGVscE9uRmFpbCA9IHRydWU7XG4gICAgc2VsZi5zaG93SGVscE9uRmFpbCA9IGZ1bmN0aW9uIHNob3dIZWxwT25GYWlsRm4oYXJnMSA9IHRydWUsIGFyZzIpIHtcbiAgICAgICAgY29uc3QgW2VuYWJsZWQsIG1lc3NhZ2VdID0gdHlwZW9mIGFyZzEgPT09ICdzdHJpbmcnID8gW3RydWUsIGFyZzFdIDogW2FyZzEsIGFyZzJdO1xuICAgICAgICBpZiAoeWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuaXNHbG9iYWxDb250ZXh0KCkpIHtcbiAgICAgICAgICAgIGdsb2JhbEZhaWxNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBmYWlsTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHNob3dIZWxwT25GYWlsID0gZW5hYmxlZDtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBsZXQgZmFpbHVyZU91dHB1dCA9IGZhbHNlO1xuICAgIHNlbGYuZmFpbCA9IGZ1bmN0aW9uIGZhaWwobXNnLCBlcnIpIHtcbiAgICAgICAgY29uc3QgbG9nZ2VyID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0TG9nZ2VySW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKGZhaWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGZhaWxzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmFpbCA9IGZhaWxzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpc0Jvb2xlYW4oZmFpbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobXNnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWwobXNnLCBlcnIsIHNlbGYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh5YXJncy5nZXRFeGl0UHJvY2VzcygpKVxuICAgICAgICAgICAgICAgIHNldEJsb2NraW5nKHRydWUpO1xuICAgICAgICAgICAgaWYgKCFmYWlsdXJlT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZU91dHB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHNob3dIZWxwT25GYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLnNob3dIZWxwKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZyB8fCBlcnIpXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihtc2cgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnbG9iYWxPckNvbW1hbmRGYWlsTWVzc2FnZSA9IGZhaWxNZXNzYWdlIHx8IGdsb2JhbEZhaWxNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxPckNvbW1hbmRGYWlsTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobXNnIHx8IGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihnbG9iYWxPckNvbW1hbmRGYWlsTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyID0gZXJyIHx8IG5ldyBZRXJyb3IobXNnKTtcbiAgICAgICAgICAgIGlmICh5YXJncy5nZXRFeGl0UHJvY2VzcygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlhcmdzLmV4aXQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5oYXNQYXJzZUNhbGxiYWNrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWFyZ3MuZXhpdCgxLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgdXNhZ2VzID0gW107XG4gICAgbGV0IHVzYWdlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBzZWxmLnVzYWdlID0gKG1zZywgZGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdXNhZ2VEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB1c2FnZXMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG4gICAgICAgIHVzYWdlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdXNhZ2VzLnB1c2goW21zZywgZGVzY3JpcHRpb24gfHwgJyddKTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBzZWxmLmdldFVzYWdlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdXNhZ2VzO1xuICAgIH07XG4gICAgc2VsZi5nZXRVc2FnZURpc2FibGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdXNhZ2VEaXNhYmxlZDtcbiAgICB9O1xuICAgIHNlbGYuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9fKCdQb3NpdGlvbmFsczonKTtcbiAgICB9O1xuICAgIGxldCBleGFtcGxlcyA9IFtdO1xuICAgIHNlbGYuZXhhbXBsZSA9IChjbWQsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGV4YW1wbGVzLnB1c2goW2NtZCwgZGVzY3JpcHRpb24gfHwgJyddKTtcbiAgICB9O1xuICAgIGxldCBjb21tYW5kcyA9IFtdO1xuICAgIHNlbGYuY29tbWFuZCA9IGZ1bmN0aW9uIGNvbW1hbmQoY21kLCBkZXNjcmlwdGlvbiwgaXNEZWZhdWx0LCBhbGlhc2VzLCBkZXByZWNhdGVkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5tYXAoY21kQXJyYXkgPT4ge1xuICAgICAgICAgICAgICAgIGNtZEFycmF5WzJdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNtZEFycmF5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFuZHMucHVzaChbY21kLCBkZXNjcmlwdGlvbiB8fCAnJywgaXNEZWZhdWx0LCBhbGlhc2VzLCBkZXByZWNhdGVkXSk7XG4gICAgfTtcbiAgICBzZWxmLmdldENvbW1hbmRzID0gKCkgPT4gY29tbWFuZHM7XG4gICAgbGV0IGRlc2NyaXB0aW9ucyA9IHt9O1xuICAgIHNlbGYuZGVzY3JpYmUgPSBmdW5jdGlvbiBkZXNjcmliZShrZXlPcktleXMsIGRlc2MpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5T3JLZXlzKSkge1xuICAgICAgICAgICAga2V5T3JLZXlzLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZXNjcmliZShrLCBkZXNjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBrZXlPcktleXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXlPcktleXMpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZXNjcmliZShrLCBrZXlPcktleXNba10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbnNba2V5T3JLZXlzXSA9IGRlc2M7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuZ2V0RGVzY3JpcHRpb25zID0gKCkgPT4gZGVzY3JpcHRpb25zO1xuICAgIGxldCBlcGlsb2dzID0gW107XG4gICAgc2VsZi5lcGlsb2cgPSBtc2cgPT4ge1xuICAgICAgICBlcGlsb2dzLnB1c2gobXNnKTtcbiAgICB9O1xuICAgIGxldCB3cmFwU2V0ID0gZmFsc2U7XG4gICAgbGV0IHdyYXA7XG4gICAgc2VsZi53cmFwID0gY29scyA9PiB7XG4gICAgICAgIHdyYXBTZXQgPSB0cnVlO1xuICAgICAgICB3cmFwID0gY29scztcbiAgICB9O1xuICAgIHNlbGYuZ2V0V3JhcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNoaW0uZ2V0RW52KCdZQVJHU19ESVNBQkxFX1dSQVAnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3cmFwU2V0KSB7XG4gICAgICAgICAgICB3cmFwID0gd2luZG93V2lkdGgoKTtcbiAgICAgICAgICAgIHdyYXBTZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cmFwO1xuICAgIH07XG4gICAgY29uc3QgZGVmZXJZMThuTG9va3VwUHJlZml4ID0gJ19feWFyZ3NTdHJpbmdfXzonO1xuICAgIHNlbGYuZGVmZXJZMThuTG9va3VwID0gc3RyID0+IGRlZmVyWTE4bkxvb2t1cFByZWZpeCArIHN0cjtcbiAgICBzZWxmLmhlbHAgPSBmdW5jdGlvbiBoZWxwKCkge1xuICAgICAgICBpZiAoY2FjaGVkSGVscE1lc3NhZ2UpXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkSGVscE1lc3NhZ2U7XG4gICAgICAgIG5vcm1hbGl6ZUFsaWFzZXMoKTtcbiAgICAgICAgY29uc3QgYmFzZSQwID0geWFyZ3MuY3VzdG9tU2NyaXB0TmFtZVxuICAgICAgICAgICAgPyB5YXJncy4kMFxuICAgICAgICAgICAgOiBzaGltLnBhdGguYmFzZW5hbWUoeWFyZ3MuJDApO1xuICAgICAgICBjb25zdCBkZW1hbmRlZE9wdGlvbnMgPSB5YXJncy5nZXREZW1hbmRlZE9wdGlvbnMoKTtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRDb21tYW5kcyA9IHlhcmdzLmdldERlbWFuZGVkQ29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgZGVwcmVjYXRlZE9wdGlvbnMgPSB5YXJncy5nZXREZXByZWNhdGVkT3B0aW9ucygpO1xuICAgICAgICBjb25zdCBncm91cHMgPSB5YXJncy5nZXRHcm91cHMoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgbGV0IGtleXMgPSBbXTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5rZXlzKGRlc2NyaXB0aW9ucykpO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmtleXMoZGVtYW5kZWRPcHRpb25zKSk7XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3Qua2V5cyhkZW1hbmRlZENvbW1hbmRzKSk7XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3Qua2V5cyhvcHRpb25zLmRlZmF1bHQpKTtcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGZpbHRlckhpZGRlbk9wdGlvbnMpO1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoa2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnXycpXG4gICAgICAgICAgICAgICAgYWNjW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pKTtcbiAgICAgICAgY29uc3QgdGhlV3JhcCA9IHNlbGYuZ2V0V3JhcCgpO1xuICAgICAgICBjb25zdCB1aSA9IHNoaW0uY2xpdWkoe1xuICAgICAgICAgICAgd2lkdGg6IHRoZVdyYXAsXG4gICAgICAgICAgICB3cmFwOiAhIXRoZVdyYXAsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXVzYWdlRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICh1c2FnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdXNhZ2VzLmZvckVhY2godXNhZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoeyB0ZXh0OiBgJHt1c2FnZVswXS5yZXBsYWNlKC9cXCQwL2csIGJhc2UkMCl9YCB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzYWdlWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aS5kaXYoeyB0ZXh0OiBgJHt1c2FnZVsxXX1gLCBwYWRkaW5nOiBbMSwgMCwgMCwgMF0gfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCB1ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fKSB7XG4gICAgICAgICAgICAgICAgICAgIHUgPSBgJHtiYXNlJDB9IDwke19fKCdjb21tYW5kJyl9PlxcbmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1ID0gYCR7YmFzZSQwfSBbJHtfXygnY29tbWFuZCcpfV1cXG5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1aS5kaXYoYCR7dX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZHMubGVuZ3RoID4gMSB8fCAoY29tbWFuZHMubGVuZ3RoID09PSAxICYmICFjb21tYW5kc1swXVsyXSkpIHtcbiAgICAgICAgICAgIHVpLmRpdihfXygnQ29tbWFuZHM6JykpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudENvbW1hbmRzID0gY29udGV4dC5jb21tYW5kcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IGAke2NvbnRleHQuY29tbWFuZHMuam9pbignICcpfSBgXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgIGlmICh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRQYXJzZXJDb25maWd1cmF0aW9uKClbJ3NvcnQtY29tbWFuZHMnXSA9PT1cbiAgICAgICAgICAgICAgICB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5zb3J0KChhLCBiKSA9PiBhWzBdLmxvY2FsZUNvbXBhcmUoYlswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gYmFzZSQwID8gYCR7YmFzZSQwfSBgIDogJyc7XG4gICAgICAgICAgICBjb21tYW5kcy5mb3JFYWNoKGNvbW1hbmQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmRTdHJpbmcgPSBgJHtwcmVmaXh9JHtwYXJlbnRDb21tYW5kc30ke2NvbW1hbmRbMF0ucmVwbGFjZSgvXlxcJDAgPy8sICcnKX1gO1xuICAgICAgICAgICAgICAgIHVpLnNwYW4oe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb21tYW5kU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbMCwgMiwgMCwgMl0sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXhXaWR0aChjb21tYW5kcywgdGhlV3JhcCwgYCR7YmFzZSQwfSR7cGFyZW50Q29tbWFuZHN9YCkgKyA0LFxuICAgICAgICAgICAgICAgIH0sIHsgdGV4dDogY29tbWFuZFsxXSB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBoaW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kWzJdKVxuICAgICAgICAgICAgICAgICAgICBoaW50cy5wdXNoKGBbJHtfXygnZGVmYXVsdCcpfV1gKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZFszXSAmJiBjb21tYW5kWzNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBoaW50cy5wdXNoKGBbJHtfXygnYWxpYXNlczonKX0gJHtjb21tYW5kWzNdLmpvaW4oJywgJyl9XWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZFs0XSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbW1hbmRbNF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50cy5wdXNoKGBbJHtfXygnZGVwcmVjYXRlZDogJXMnLCBjb21tYW5kWzRdKX1dYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50cy5wdXNoKGBbJHtfXygnZGVwcmVjYXRlZCcpfV1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHVpLmRpdih7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBoaW50cy5qb2luKCcgJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbMCwgMCwgMCwgMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsaWFzS2V5cyA9IChPYmplY3Qua2V5cyhvcHRpb25zLmFsaWFzKSB8fCBbXSkuY29uY2F0KE9iamVjdC5rZXlzKHlhcmdzLnBhcnNlZC5uZXdBbGlhc2VzKSB8fCBbXSk7XG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihrZXkgPT4gIXlhcmdzLnBhcnNlZC5uZXdBbGlhc2VzW2tleV0gJiZcbiAgICAgICAgICAgIGFsaWFzS2V5cy5ldmVyeShhbGlhcyA9PiAob3B0aW9ucy5hbGlhc1thbGlhc10gfHwgW10pLmluZGV4T2Yoa2V5KSA9PT0gLTEpKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdEdyb3VwID0gX18oJ09wdGlvbnM6Jyk7XG4gICAgICAgIGlmICghZ3JvdXBzW2RlZmF1bHRHcm91cF0pXG4gICAgICAgICAgICBncm91cHNbZGVmYXVsdEdyb3VwXSA9IFtdO1xuICAgICAgICBhZGRVbmdyb3VwZWRLZXlzKGtleXMsIG9wdGlvbnMuYWxpYXMsIGdyb3VwcywgZGVmYXVsdEdyb3VwKTtcbiAgICAgICAgY29uc3QgaXNMb25nU3dpdGNoID0gKHN3KSA9PiAvXi0tLy50ZXN0KGdldFRleHQoc3cpKTtcbiAgICAgICAgY29uc3QgZGlzcGxheWVkR3JvdXBzID0gT2JqZWN0LmtleXMoZ3JvdXBzKVxuICAgICAgICAgICAgLmZpbHRlcihncm91cE5hbWUgPT4gZ3JvdXBzW2dyb3VwTmFtZV0ubGVuZ3RoID4gMClcbiAgICAgICAgICAgIC5tYXAoZ3JvdXBOYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRLZXlzID0gZ3JvdXBzW2dyb3VwTmFtZV1cbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZpbHRlckhpZGRlbk9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhbGlhc0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgYWxpYXNLZXk7IChhbGlhc0tleSA9IGFsaWFzS2V5c1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgob3B0aW9ucy5hbGlhc1thbGlhc0tleV0gfHwgW10pLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxpYXNLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7IGdyb3VwTmFtZSwgbm9ybWFsaXplZEtleXMgfTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgbm9ybWFsaXplZEtleXMgfSkgPT4gbm9ybWFsaXplZEtleXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIC5tYXAoKHsgZ3JvdXBOYW1lLCBub3JtYWxpemVkS2V5cyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2l0Y2hlcyA9IG5vcm1hbGl6ZWRLZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IFtrZXldXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQob3B0aW9ucy5hbGlhc1trZXldIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHN3ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTmFtZSA9PT0gc2VsZi5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3c7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoL15bMC05XSQvLnRlc3Qoc3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmJvb2xlYW4uaW5jbHVkZXMoa2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICctJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICctLSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN3Lmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnLS0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy0nKSArIHN3KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zb3J0KChzdzEsIHN3MikgPT4gaXNMb25nU3dpdGNoKHN3MSkgPT09IGlzTG9uZ1N3aXRjaChzdzIpXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IGlzTG9uZ1N3aXRjaChzdzEpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogLTEpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICByZXR1cm4geyBncm91cE5hbWUsIG5vcm1hbGl6ZWRLZXlzLCBzd2l0Y2hlcyB9O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc2hvcnRTd2l0Y2hlc1VzZWQgPSBkaXNwbGF5ZWRHcm91cHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgZ3JvdXBOYW1lIH0pID0+IGdyb3VwTmFtZSAhPT0gc2VsZi5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCkpXG4gICAgICAgICAgICAuc29tZSgoeyBub3JtYWxpemVkS2V5cywgc3dpdGNoZXMgfSkgPT4gIW5vcm1hbGl6ZWRLZXlzLmV2ZXJ5KGtleSA9PiBpc0xvbmdTd2l0Y2goc3dpdGNoZXNba2V5XSkpKTtcbiAgICAgICAgaWYgKHNob3J0U3dpdGNoZXNVc2VkKSB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRHcm91cHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IGdyb3VwTmFtZSB9KSA9PiBncm91cE5hbWUgIT09IHNlbGYuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSgpKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh7IG5vcm1hbGl6ZWRLZXlzLCBzd2l0Y2hlcyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMb25nU3dpdGNoKHN3aXRjaGVzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hlc1trZXldID0gYWRkSW5kZW50YXRpb24oc3dpdGNoZXNba2V5XSwgJy14LCAnLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXllZEdyb3Vwcy5mb3JFYWNoKCh7IGdyb3VwTmFtZSwgbm9ybWFsaXplZEtleXMsIHN3aXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgIHVpLmRpdihncm91cE5hbWUpO1xuICAgICAgICAgICAgbm9ybWFsaXplZEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtzd2l0Y2ggPSBzd2l0Y2hlc1trZXldO1xuICAgICAgICAgICAgICAgIGxldCBkZXNjID0gZGVzY3JpcHRpb25zW2tleV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChkZXNjLmluY2x1ZGVzKGRlZmVyWTE4bkxvb2t1cFByZWZpeCkpXG4gICAgICAgICAgICAgICAgICAgIGRlc2MgPSBfXyhkZXNjLnN1YnN0cmluZyhkZWZlclkxOG5Mb29rdXBQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYm9vbGVhbi5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gYFske19fKCdib29sZWFuJyl9XWA7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY291bnQuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnY291bnQnKX1dYDtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJpbmcuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGBbJHtfXygnc3RyaW5nJyl9XWA7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubm9ybWFsaXplLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ3N0cmluZycpfV1gO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFycmF5LmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ2FycmF5Jyl9XWA7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubnVtYmVyLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBgWyR7X18oJ251bWJlcicpfV1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlcHJlY2F0ZWRFeHRyYSA9IChkZXByZWNhdGVkKSA9PiB0eXBlb2YgZGVwcmVjYXRlZCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgPyBgWyR7X18oJ2RlcHJlY2F0ZWQ6ICVzJywgZGVwcmVjYXRlZCl9XWBcbiAgICAgICAgICAgICAgICAgICAgOiBgWyR7X18oJ2RlcHJlY2F0ZWQnKX1dYDtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRyYSA9IFtcbiAgICAgICAgICAgICAgICAgICAga2V5IGluIGRlcHJlY2F0ZWRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRlcHJlY2F0ZWRFeHRyYShkZXByZWNhdGVkT3B0aW9uc1trZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBrZXkgaW4gZGVtYW5kZWRPcHRpb25zID8gYFske19fKCdyZXF1aXJlZCcpfV1gIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jaG9pY2VzICYmIG9wdGlvbnMuY2hvaWNlc1trZXldXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBbJHtfXygnY2hvaWNlczonKX0gJHtzZWxmLnN0cmluZ2lmaWVkVmFsdWVzKG9wdGlvbnMuY2hvaWNlc1trZXldKX1dYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U3RyaW5nKG9wdGlvbnMuZGVmYXVsdFtrZXldLCBvcHRpb25zLmRlZmF1bHREZXNjcmlwdGlvbltrZXldKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgICB1aS5zcGFuKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZ2V0VGV4dChrc3dpdGNoKSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogWzAsIDIsIDAsIDIgKyBnZXRJbmRlbnRhdGlvbihrc3dpdGNoKV0sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXhXaWR0aChzd2l0Y2hlcywgdGhlV3JhcCkgKyA0LFxuICAgICAgICAgICAgICAgIH0sIGRlc2MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZEhpZGVPcHRpb25FeHRyYXMgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRVc2FnZUNvbmZpZ3VyYXRpb24oKVsnaGlkZS10eXBlcyddID09PVxuICAgICAgICAgICAgICAgICAgICB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChleHRyYSAmJiAhc2hvdWxkSGlkZU9wdGlvbkV4dHJhcylcbiAgICAgICAgICAgICAgICAgICAgdWkuZGl2KHsgdGV4dDogZXh0cmEsIHBhZGRpbmc6IFswLCAwLCAwLCAyXSwgYWxpZ246ICdyaWdodCcgfSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdWkuZGl2KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZXhhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB1aS5kaXYoX18oJ0V4YW1wbGVzOicpKTtcbiAgICAgICAgICAgIGV4YW1wbGVzLmZvckVhY2goZXhhbXBsZSA9PiB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZVswXSA9IGV4YW1wbGVbMF0ucmVwbGFjZSgvXFwkMC9nLCBiYXNlJDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBleGFtcGxlcy5mb3JFYWNoKGV4YW1wbGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleGFtcGxlWzFdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXhhbXBsZVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAyLCAwLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1aS5kaXYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXhhbXBsZVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAyLCAwLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXhXaWR0aChleGFtcGxlcywgdGhlV3JhcCkgKyA0LFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBleGFtcGxlWzFdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVpLmRpdigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcGlsb2dzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBlcGlsb2dzXG4gICAgICAgICAgICAgICAgLm1hcChlcGlsb2cgPT4gZXBpbG9nLnJlcGxhY2UoL1xcJDAvZywgYmFzZSQwKSlcbiAgICAgICAgICAgICAgICAuam9pbignXFxuJyk7XG4gICAgICAgICAgICB1aS5kaXYoYCR7ZX1cXG5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG1heFdpZHRoKHRhYmxlLCB0aGVXcmFwLCBtb2RpZmllcikge1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFibGUpKSB7XG4gICAgICAgICAgICB0YWJsZSA9IE9iamVjdC52YWx1ZXModGFibGUpLm1hcCh2ID0+IFt2XSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgoc2hpbS5zdHJpbmdXaWR0aChtb2RpZmllciA/IGAke21vZGlmaWVyfSAke2dldFRleHQodlswXSl9YCA6IGdldFRleHQodlswXSkpICsgZ2V0SW5kZW50YXRpb24odlswXSksIHdpZHRoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGVXcmFwKVxuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgcGFyc2VJbnQoKHRoZVdyYXAgKiAwLjUpLnRvU3RyaW5nKCksIDEwKSk7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplQWxpYXNlcygpIHtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRPcHRpb25zID0geWFyZ3MuZ2V0RGVtYW5kZWRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIChPYmplY3Qua2V5cyhvcHRpb25zLmFsaWFzKSB8fCBbXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy5hbGlhc1trZXldLmZvckVhY2goYWxpYXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbnNbYWxpYXNdKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRlc2NyaWJlKGtleSwgZGVzY3JpcHRpb25zW2FsaWFzXSk7XG4gICAgICAgICAgICAgICAgaWYgKGFsaWFzIGluIGRlbWFuZGVkT3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3MuZGVtYW5kT3B0aW9uKGtleSwgZGVtYW5kZWRPcHRpb25zW2FsaWFzXSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYm9vbGVhbi5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLmJvb2xlYW4oa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb3VudC5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLmNvdW50KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RyaW5nLmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3Muc3RyaW5nKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubm9ybWFsaXplLmluY2x1ZGVzKGFsaWFzKSlcbiAgICAgICAgICAgICAgICAgICAgeWFyZ3Mubm9ybWFsaXplKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXJyYXkuaW5jbHVkZXMoYWxpYXMpKVxuICAgICAgICAgICAgICAgICAgICB5YXJncy5hcnJheShrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm51bWJlci5pbmNsdWRlcyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHlhcmdzLm51bWJlcihrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgY2FjaGVkSGVscE1lc3NhZ2U7XG4gICAgc2VsZi5jYWNoZUhlbHBNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWNoZWRIZWxwTWVzc2FnZSA9IHRoaXMuaGVscCgpO1xuICAgIH07XG4gICAgc2VsZi5jbGVhckNhY2hlZEhlbHBNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWNoZWRIZWxwTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHNlbGYuaGFzQ2FjaGVkSGVscE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhIWNhY2hlZEhlbHBNZXNzYWdlO1xuICAgIH07XG4gICAgZnVuY3Rpb24gYWRkVW5ncm91cGVkS2V5cyhrZXlzLCBhbGlhc2VzLCBncm91cHMsIGRlZmF1bHRHcm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBlZEtleXMgPSBbXTtcbiAgICAgICAgbGV0IHRvQ2hlY2sgPSBudWxsO1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICAgICAgZ3JvdXBlZEtleXMgPSBncm91cGVkS2V5cy5jb25jYXQoZ3JvdXBzW2dyb3VwXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRvQ2hlY2sgPSBba2V5XS5jb25jYXQoYWxpYXNlc1trZXldKTtcbiAgICAgICAgICAgIGlmICghdG9DaGVjay5zb21lKGsgPT4gZ3JvdXBlZEtleXMuaW5kZXhPZihrKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzW2RlZmF1bHRHcm91cF0ucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwZWRLZXlzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaWx0ZXJIaWRkZW5PcHRpb25zKGtleSkge1xuICAgICAgICByZXR1cm4gKHlhcmdzLmdldE9wdGlvbnMoKS5oaWRkZW5PcHRpb25zLmluZGV4T2Yoa2V5KSA8IDAgfHxcbiAgICAgICAgICAgIHlhcmdzLnBhcnNlZC5hcmd2W3lhcmdzLmdldE9wdGlvbnMoKS5zaG93SGlkZGVuT3B0XSk7XG4gICAgfVxuICAgIHNlbGYuc2hvd0hlbHAgPSAobGV2ZWwpID0+IHtcbiAgICAgICAgY29uc3QgbG9nZ2VyID0geWFyZ3MuZ2V0SW50ZXJuYWxNZXRob2RzKCkuZ2V0TG9nZ2VySW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKCFsZXZlbClcbiAgICAgICAgICAgIGxldmVsID0gJ2Vycm9yJztcbiAgICAgICAgY29uc3QgZW1pdCA9IHR5cGVvZiBsZXZlbCA9PT0gJ2Z1bmN0aW9uJyA/IGxldmVsIDogbG9nZ2VyW2xldmVsXTtcbiAgICAgICAgZW1pdChzZWxmLmhlbHAoKSk7XG4gICAgfTtcbiAgICBzZWxmLmZ1bmN0aW9uRGVzY3JpcHRpb24gPSBmbiA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm4ubmFtZVxuICAgICAgICAgICAgPyBzaGltLlBhcnNlci5kZWNhbWVsaXplKGZuLm5hbWUsICctJylcbiAgICAgICAgICAgIDogX18oJ2dlbmVyYXRlZC12YWx1ZScpO1xuICAgICAgICByZXR1cm4gWycoJywgZGVzY3JpcHRpb24sICcpJ10uam9pbignJyk7XG4gICAgfTtcbiAgICBzZWxmLnN0cmluZ2lmaWVkVmFsdWVzID0gZnVuY3Rpb24gc3RyaW5naWZpZWRWYWx1ZXModmFsdWVzLCBzZXBhcmF0b3IpIHtcbiAgICAgICAgbGV0IHN0cmluZyA9ICcnO1xuICAgICAgICBjb25zdCBzZXAgPSBzZXBhcmF0b3IgfHwgJywgJztcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXS5jb25jYXQodmFsdWVzKTtcbiAgICAgICAgaWYgKCF2YWx1ZXMgfHwgIWFycmF5Lmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIGFycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKHN0cmluZy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IHNlcDtcbiAgICAgICAgICAgIHN0cmluZyArPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZGVmYXVsdFN0cmluZyh2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSBgWyR7X18oJ2RlZmF1bHQ6Jyl9IGA7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICFkZWZhdWx0RGVzY3JpcHRpb24pXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGRlZmF1bHREZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgc3RyaW5nICs9IGRlZmF1bHREZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IGBcIiR7dmFsdWV9XCJgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3N0cmluZ31dYDtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2luZG93V2lkdGgoKSB7XG4gICAgICAgIGNvbnN0IG1heFdpZHRoID0gODA7XG4gICAgICAgIGlmIChzaGltLnByb2Nlc3Muc3RkQ29sdW1ucykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKG1heFdpZHRoLCBzaGltLnByb2Nlc3Muc3RkQ29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWF4V2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHZlcnNpb24gPSBudWxsO1xuICAgIHNlbGYudmVyc2lvbiA9IHZlciA9PiB7XG4gICAgICAgIHZlcnNpb24gPSB2ZXI7XG4gICAgfTtcbiAgICBzZWxmLnNob3dWZXJzaW9uID0gbGV2ZWwgPT4ge1xuICAgICAgICBjb25zdCBsb2dnZXIgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRMb2dnZXJJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoIWxldmVsKVxuICAgICAgICAgICAgbGV2ZWwgPSAnZXJyb3InO1xuICAgICAgICBjb25zdCBlbWl0ID0gdHlwZW9mIGxldmVsID09PSAnZnVuY3Rpb24nID8gbGV2ZWwgOiBsb2dnZXJbbGV2ZWxdO1xuICAgICAgICBlbWl0KHZlcnNpb24pO1xuICAgIH07XG4gICAgc2VsZi5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KGxvY2FsTG9va3VwKSB7XG4gICAgICAgIGZhaWxNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgZmFpbHVyZU91dHB1dCA9IGZhbHNlO1xuICAgICAgICB1c2FnZXMgPSBbXTtcbiAgICAgICAgdXNhZ2VEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBlcGlsb2dzID0gW107XG4gICAgICAgIGV4YW1wbGVzID0gW107XG4gICAgICAgIGNvbW1hbmRzID0gW107XG4gICAgICAgIGRlc2NyaXB0aW9ucyA9IG9iakZpbHRlcihkZXNjcmlwdGlvbnMsIGsgPT4gIWxvY2FsTG9va3VwW2tdKTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBjb25zdCBmcm96ZW5zID0gW107XG4gICAgc2VsZi5mcmVlemUgPSBmdW5jdGlvbiBmcmVlemUoKSB7XG4gICAgICAgIGZyb3plbnMucHVzaCh7XG4gICAgICAgICAgICBmYWlsTWVzc2FnZSxcbiAgICAgICAgICAgIGZhaWx1cmVPdXRwdXQsXG4gICAgICAgICAgICB1c2FnZXMsXG4gICAgICAgICAgICB1c2FnZURpc2FibGVkLFxuICAgICAgICAgICAgZXBpbG9ncyxcbiAgICAgICAgICAgIGV4YW1wbGVzLFxuICAgICAgICAgICAgY29tbWFuZHMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgc2VsZi51bmZyZWV6ZSA9IGZ1bmN0aW9uIHVuZnJlZXplKGRlZmF1bHRDb21tYW5kID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZnJvemVuID0gZnJvemVucy5wb3AoKTtcbiAgICAgICAgaWYgKCFmcm96ZW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChkZWZhdWx0Q29tbWFuZCkge1xuICAgICAgICAgICAgZGVzY3JpcHRpb25zID0geyAuLi5mcm96ZW4uZGVzY3JpcHRpb25zLCAuLi5kZXNjcmlwdGlvbnMgfTtcbiAgICAgICAgICAgIGNvbW1hbmRzID0gWy4uLmZyb3plbi5jb21tYW5kcywgLi4uY29tbWFuZHNdO1xuICAgICAgICAgICAgdXNhZ2VzID0gWy4uLmZyb3plbi51c2FnZXMsIC4uLnVzYWdlc107XG4gICAgICAgICAgICBleGFtcGxlcyA9IFsuLi5mcm96ZW4uZXhhbXBsZXMsIC4uLmV4YW1wbGVzXTtcbiAgICAgICAgICAgIGVwaWxvZ3MgPSBbLi4uZnJvemVuLmVwaWxvZ3MsIC4uLmVwaWxvZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBmYWlsTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlT3V0cHV0LFxuICAgICAgICAgICAgICAgIHVzYWdlcyxcbiAgICAgICAgICAgICAgICB1c2FnZURpc2FibGVkLFxuICAgICAgICAgICAgICAgIGVwaWxvZ3MsXG4gICAgICAgICAgICAgICAgZXhhbXBsZXMsXG4gICAgICAgICAgICAgICAgY29tbWFuZHMsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25zLFxuICAgICAgICAgICAgfSA9IGZyb3plbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBzZWxmO1xufVxuZnVuY3Rpb24gaXNJbmRlbnRlZFRleHQodGV4dCkge1xuICAgIHJldHVybiB0eXBlb2YgdGV4dCA9PT0gJ29iamVjdCc7XG59XG5mdW5jdGlvbiBhZGRJbmRlbnRhdGlvbih0ZXh0LCBpbmRlbnQpIHtcbiAgICByZXR1cm4gaXNJbmRlbnRlZFRleHQodGV4dClcbiAgICAgICAgPyB7IHRleHQ6IHRleHQudGV4dCwgaW5kZW50YXRpb246IHRleHQuaW5kZW50YXRpb24gKyBpbmRlbnQgfVxuICAgICAgICA6IHsgdGV4dCwgaW5kZW50YXRpb246IGluZGVudCB9O1xufVxuZnVuY3Rpb24gZ2V0SW5kZW50YXRpb24odGV4dCkge1xuICAgIHJldHVybiBpc0luZGVudGVkVGV4dCh0ZXh0KSA/IHRleHQuaW5kZW50YXRpb24gOiAwO1xufVxuZnVuY3Rpb24gZ2V0VGV4dCh0ZXh0KSB7XG4gICAgcmV0dXJuIGlzSW5kZW50ZWRUZXh0KHRleHQpID8gdGV4dC50ZXh0IDogdGV4dDtcbn1cbiIsICJleHBvcnQgY29uc3QgY29tcGxldGlvblNoVGVtcGxhdGUgPSBgIyMjLWJlZ2luLXt7YXBwX25hbWV9fS1jb21wbGV0aW9ucy0jIyNcbiNcbiMgeWFyZ3MgY29tbWFuZCBjb21wbGV0aW9uIHNjcmlwdFxuI1xuIyBJbnN0YWxsYXRpb246IHt7YXBwX3BhdGh9fSB7e2NvbXBsZXRpb25fY29tbWFuZH19ID4+IH4vLmJhc2hyY1xuIyAgICBvciB7e2FwcF9wYXRofX0ge3tjb21wbGV0aW9uX2NvbW1hbmR9fSA+PiB+Ly5iYXNoX3Byb2ZpbGUgb24gT1NYLlxuI1xuX3t7YXBwX25hbWV9fV95YXJnc19jb21wbGV0aW9ucygpXG57XG4gICAgbG9jYWwgY3VyX3dvcmQgYXJncyB0eXBlX2xpc3RcblxuICAgIGN1cl93b3JkPVwiXFwke0NPTVBfV09SRFNbQ09NUF9DV09SRF19XCJcbiAgICBhcmdzPShcIlxcJHtDT01QX1dPUkRTW0BdfVwiKVxuXG4gICAgIyBhc2sgeWFyZ3MgdG8gZ2VuZXJhdGUgY29tcGxldGlvbnMuXG4gICAgIyBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwOTQ0MTk1LzcwODAwMzYgZm9yIHRoZSBzcGFjZXMtaGFuZGxpbmcgYXdrXG4gICAgbWFwZmlsZSAtdCB0eXBlX2xpc3QgPCA8KHt7YXBwX3BhdGh9fSAtLWdldC15YXJncy1jb21wbGV0aW9ucyBcIlxcJHthcmdzW0BdfVwiKVxuICAgIG1hcGZpbGUgLXQgQ09NUFJFUExZIDwgPChjb21wZ2VuIC1XIFwiJCggcHJpbnRmICclcSAnIFwiXFwke3R5cGVfbGlzdFtAXX1cIiApXCIgLS0gXCJcXCR7Y3VyX3dvcmR9XCIgfFxuICAgICAgICBhd2sgJy8gLyB7IHByaW50IFwiXFxcXFwiXCIkMFwiXFxcXFwiXCIgfSAvXlteIF0rJC8geyBwcmludCAkMCB9JylcblxuICAgICMgaWYgbm8gbWF0Y2ggd2FzIGZvdW5kLCBmYWxsIGJhY2sgdG8gZmlsZW5hbWUgY29tcGxldGlvblxuICAgIGlmIFsgXFwkeyNDT01QUkVQTFlbQF19IC1lcSAwIF07IHRoZW5cbiAgICAgIENPTVBSRVBMWT0oKVxuICAgIGZpXG5cbiAgICByZXR1cm4gMFxufVxuY29tcGxldGUgLW8gYmFzaGRlZmF1bHQgLW8gZGVmYXVsdCAtRiBfe3thcHBfbmFtZX19X3lhcmdzX2NvbXBsZXRpb25zIHt7YXBwX25hbWV9fVxuIyMjLWVuZC17e2FwcF9uYW1lfX0tY29tcGxldGlvbnMtIyMjXG5gO1xuZXhwb3J0IGNvbnN0IGNvbXBsZXRpb25ac2hUZW1wbGF0ZSA9IGAjY29tcGRlZiB7e2FwcF9uYW1lfX1cbiMjIy1iZWdpbi17e2FwcF9uYW1lfX0tY29tcGxldGlvbnMtIyMjXG4jXG4jIHlhcmdzIGNvbW1hbmQgY29tcGxldGlvbiBzY3JpcHRcbiNcbiMgSW5zdGFsbGF0aW9uOiB7e2FwcF9wYXRofX0ge3tjb21wbGV0aW9uX2NvbW1hbmR9fSA+PiB+Ly56c2hyY1xuIyAgICBvciB7e2FwcF9wYXRofX0ge3tjb21wbGV0aW9uX2NvbW1hbmR9fSA+PiB+Ly56cHJvZmlsZSBvbiBPU1guXG4jXG5fe3thcHBfbmFtZX19X3lhcmdzX2NvbXBsZXRpb25zKClcbntcbiAgbG9jYWwgcmVwbHlcbiAgbG9jYWwgc2k9JElGU1xuICBJRlM9JCdcXG4nIHJlcGx5PSgkKENPTVBfQ1dPUkQ9XCIkKChDVVJSRU5ULTEpKVwiIENPTVBfTElORT1cIiRCVUZGRVJcIiBDT01QX1BPSU5UPVwiJENVUlNPUlwiIHt7YXBwX3BhdGh9fSAtLWdldC15YXJncy1jb21wbGV0aW9ucyBcIlxcJHt3b3Jkc1tAXX1cIikpXG4gIElGUz0kc2lcbiAgaWYgW1sgXFwkeyNyZXBseX0gLWd0IDAgXV07IHRoZW5cbiAgICBfZGVzY3JpYmUgJ3ZhbHVlcycgcmVwbHlcbiAgZWxzZVxuICAgIF9kZWZhdWx0XG4gIGZpXG59XG5pZiBbWyBcIidcXCR7enNoX2V2YWxfY29udGV4dFstMV19XCIgPT0gXCJsb2FkYXV0b2Z1bmNcIiBdXTsgdGhlblxuICBfe3thcHBfbmFtZX19X3lhcmdzX2NvbXBsZXRpb25zIFwiJEBcIlxuZWxzZVxuICBjb21wZGVmIF97e2FwcF9uYW1lfX1feWFyZ3NfY29tcGxldGlvbnMge3thcHBfbmFtZX19XG5maVxuIyMjLWVuZC17e2FwcF9uYW1lfX0tY29tcGxldGlvbnMtIyMjXG5gO1xuIiwgImltcG9ydCB7IGlzQ29tbWFuZEJ1aWxkZXJDYWxsYmFjayB9IGZyb20gJy4vY29tbWFuZC5qcyc7XG5pbXBvcnQgeyBhc3NlcnROb3RTdHJpY3RFcXVhbCB9IGZyb20gJy4vdHlwaW5ncy9jb21tb24tdHlwZXMuanMnO1xuaW1wb3J0ICogYXMgdGVtcGxhdGVzIGZyb20gJy4vY29tcGxldGlvbi10ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pcy1wcm9taXNlLmpzJztcbmltcG9ydCB7IHBhcnNlQ29tbWFuZCB9IGZyb20gJy4vcGFyc2UtY29tbWFuZC5qcyc7XG5leHBvcnQgY2xhc3MgQ29tcGxldGlvbiB7XG4gICAgY29uc3RydWN0b3IoeWFyZ3MsIHVzYWdlLCBjb21tYW5kLCBzaGltKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICB0aGlzLnlhcmdzID0geWFyZ3M7XG4gICAgICAgIHRoaXMudXNhZ2UgPSB1c2FnZTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0gY29tbWFuZDtcbiAgICAgICAgdGhpcy5zaGltID0gc2hpbTtcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uS2V5ID0gJ2dldC15YXJncy1jb21wbGV0aW9ucyc7XG4gICAgICAgIHRoaXMuYWxpYXNlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmRleEFmdGVyTGFzdFJlc2V0ID0gMDtcbiAgICAgICAgdGhpcy56c2hTaGVsbCA9XG4gICAgICAgICAgICAoX2MgPSAoKChfYSA9IHRoaXMuc2hpbS5nZXRFbnYoJ1NIRUxMJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbmNsdWRlcygnenNoJykpIHx8XG4gICAgICAgICAgICAgICAgKChfYiA9IHRoaXMuc2hpbS5nZXRFbnYoJ1pTSF9OQU1FJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbmNsdWRlcygnenNoJykpKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZmFsc2U7XG4gICAgfVxuICAgIGRlZmF1bHRDb21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIGRvbmUpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmNvbW1hbmQuZ2V0Q29tbWFuZEhhbmRsZXJzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGFyZ3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2FyZ3NbaV1dICYmIGhhbmRsZXJzW2FyZ3NbaV1dLmJ1aWxkZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidWlsZGVyID0gaGFuZGxlcnNbYXJnc1tpXV0uYnVpbGRlcjtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21tYW5kQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhBZnRlckxhc3RSZXNldCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gdGhpcy55YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICBidWlsZGVyKHksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geS5hcmd2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wbGV0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmNvbW1hbmRDb21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgY3VycmVudCk7XG4gICAgICAgIHRoaXMub3B0aW9uQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpO1xuICAgICAgICB0aGlzLmNob2ljZXNGcm9tT3B0aW9uc0NvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KTtcbiAgICAgICAgdGhpcy5jaG9pY2VzRnJvbVBvc2l0aW9uYWxzQ29tcGxldGlvbnMoY29tcGxldGlvbnMsIGFyZ3MsIGFyZ3YsIGN1cnJlbnQpO1xuICAgICAgICBkb25lKG51bGwsIGNvbXBsZXRpb25zKTtcbiAgICB9XG4gICAgY29tbWFuZENvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBjdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudENvbW1hbmRzID0gdGhpcy55YXJnc1xuICAgICAgICAgICAgLmdldEludGVybmFsTWV0aG9kcygpXG4gICAgICAgICAgICAuZ2V0Q29udGV4dCgpLmNvbW1hbmRzO1xuICAgICAgICBpZiAoIWN1cnJlbnQubWF0Y2goL14tLykgJiZcbiAgICAgICAgICAgIHBhcmVudENvbW1hbmRzW3BhcmVudENvbW1hbmRzLmxlbmd0aCAtIDFdICE9PSBjdXJyZW50ICYmXG4gICAgICAgICAgICAhdGhpcy5wcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykpIHtcbiAgICAgICAgICAgIHRoaXMudXNhZ2UuZ2V0Q29tbWFuZHMoKS5mb3JFYWNoKHVzYWdlQ29tbWFuZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZE5hbWUgPSBwYXJzZUNvbW1hbmQodXNhZ2VDb21tYW5kWzBdKS5jbWQ7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXhPZihjb21tYW5kTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy56c2hTaGVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnMucHVzaChjb21tYW5kTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjID0gdXNhZ2VDb21tYW5kWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnMucHVzaChjb21tYW5kTmFtZS5yZXBsYWNlKC86L2csICdcXFxcOicpICsgJzonICsgZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvcHRpb25Db21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCkge1xuICAgICAgICBpZiAoKGN1cnJlbnQubWF0Y2goL14tLykgfHwgKGN1cnJlbnQgPT09ICcnICYmIGNvbXBsZXRpb25zLmxlbmd0aCA9PT0gMCkpICYmXG4gICAgICAgICAgICAhdGhpcy5wcmV2aW91c0FyZ0hhc0Nob2ljZXMoYXJncykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnlhcmdzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uYWxLZXlzID0gdGhpcy55YXJncy5nZXRHcm91cHMoKVt0aGlzLnVzYWdlLmdldFBvc2l0aW9uYWxHcm91cE5hbWUoKV0gfHwgW107XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmtleSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5lZ2FibGUgPSAhIW9wdGlvbnMuY29uZmlndXJhdGlvblsnYm9vbGVhbi1uZWdhdGlvbiddICYmXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9vbGVhbi5pbmNsdWRlcyhrZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUG9zaXRpb25hbEtleSA9IHBvc2l0aW9uYWxLZXlzLmluY2x1ZGVzKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Bvc2l0aW9uYWxLZXkgJiZcbiAgICAgICAgICAgICAgICAgICAgIW9wdGlvbnMuaGlkZGVuT3B0aW9ucy5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmFyZ3NDb250YWluS2V5KGFyZ3MsIGtleSwgbmVnYWJsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZU9wdGlvbktleShrZXksIGNvbXBsZXRpb25zLCBjdXJyZW50LCBuZWdhYmxlICYmICEhb3B0aW9ucy5kZWZhdWx0W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNob2ljZXNGcm9tT3B0aW9uc0NvbXBsZXRpb25zKGNvbXBsZXRpb25zLCBhcmdzLCBhcmd2LCBjdXJyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzQXJnSGFzQ2hvaWNlcyhhcmdzKSkge1xuICAgICAgICAgICAgY29uc3QgY2hvaWNlcyA9IHRoaXMuZ2V0UHJldmlvdXNBcmdDaG9pY2VzKGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGNob2ljZXMgJiYgY2hvaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGlvbnMucHVzaCguLi5jaG9pY2VzLm1hcChjID0+IGMucmVwbGFjZSgvOi9nLCAnXFxcXDonKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNob2ljZXNGcm9tUG9zaXRpb25hbHNDb21wbGV0aW9ucyhjb21wbGV0aW9ucywgYXJncywgYXJndiwgY3VycmVudCkge1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gJycgJiZcbiAgICAgICAgICAgIGNvbXBsZXRpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNBcmdIYXNDaG9pY2VzKGFyZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9zaXRpb25hbEtleXMgPSB0aGlzLnlhcmdzLmdldEdyb3VwcygpW3RoaXMudXNhZ2UuZ2V0UG9zaXRpb25hbEdyb3VwTmFtZSgpXSB8fCBbXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5tYXgodGhpcy5pbmRleEFmdGVyTGFzdFJlc2V0LCB0aGlzLnlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKS5jb21tYW5kcy5sZW5ndGggK1xuICAgICAgICAgICAgMSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uYWxLZXkgPSBwb3NpdGlvbmFsS2V5c1thcmd2Ll8ubGVuZ3RoIC0gb2Zmc2V0IC0gMV07XG4gICAgICAgIGlmICghcG9zaXRpb25hbEtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNob2ljZXMgPSB0aGlzLnlhcmdzLmdldE9wdGlvbnMoKS5jaG9pY2VzW3Bvc2l0aW9uYWxLZXldIHx8IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGNob2ljZSBvZiBjaG9pY2VzKSB7XG4gICAgICAgICAgICBpZiAoY2hvaWNlLnN0YXJ0c1dpdGgoY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGNob2ljZS5yZXBsYWNlKC86L2csICdcXFxcOicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRQcmV2aW91c0FyZ0Nob2ljZXMoYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgcHJldmlvdXNBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgICAgaWYgKCFwcmV2aW91c0FyZy5zdGFydHNXaXRoKCctJykgJiYgYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmaWx0ZXIgPSBwcmV2aW91c0FyZztcbiAgICAgICAgICAgIHByZXZpb3VzQXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDJdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJldmlvdXNBcmcuc3RhcnRzV2l0aCgnLScpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBwcmV2aW91c0FyZ0tleSA9IHByZXZpb3VzQXJnLnJlcGxhY2UoL14tKy8sICcnKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMueWFyZ3MuZ2V0T3B0aW9ucygpO1xuICAgICAgICBjb25zdCBwb3NzaWJsZUFsaWFzZXMgPSBbXG4gICAgICAgICAgICBwcmV2aW91c0FyZ0tleSxcbiAgICAgICAgICAgIC4uLih0aGlzLnlhcmdzLmdldEFsaWFzZXMoKVtwcmV2aW91c0FyZ0tleV0gfHwgW10pLFxuICAgICAgICBdO1xuICAgICAgICBsZXQgY2hvaWNlcztcbiAgICAgICAgZm9yIChjb25zdCBwb3NzaWJsZUFsaWFzIG9mIHBvc3NpYmxlQWxpYXNlcykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLmtleSwgcG9zc2libGVBbGlhcykgJiZcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KG9wdGlvbnMuY2hvaWNlc1twb3NzaWJsZUFsaWFzXSkpIHtcbiAgICAgICAgICAgICAgICBjaG9pY2VzID0gb3B0aW9ucy5jaG9pY2VzW3Bvc3NpYmxlQWxpYXNdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaG9pY2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hvaWNlcy5maWx0ZXIoY2hvaWNlID0+ICFmaWx0ZXIgfHwgY2hvaWNlLnN0YXJ0c1dpdGgoZmlsdGVyKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJldmlvdXNBcmdIYXNDaG9pY2VzKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgY2hvaWNlcyA9IHRoaXMuZ2V0UHJldmlvdXNBcmdDaG9pY2VzKGFyZ3MpO1xuICAgICAgICByZXR1cm4gY2hvaWNlcyAhPT0gdW5kZWZpbmVkICYmIGNob2ljZXMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgYXJnc0NvbnRhaW5LZXkoYXJncywga2V5LCBuZWdhYmxlKSB7XG4gICAgICAgIGNvbnN0IGFyZ3NDb250YWlucyA9IChzKSA9PiBhcmdzLmluZGV4T2YoKC9eW14wLTldJC8udGVzdChzKSA/ICctJyA6ICctLScpICsgcykgIT09IC0xO1xuICAgICAgICBpZiAoYXJnc0NvbnRhaW5zKGtleSkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKG5lZ2FibGUgJiYgYXJnc0NvbnRhaW5zKGBuby0ke2tleX1gKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5hbGlhc2VzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIHRoaXMuYWxpYXNlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3NDb250YWlucyhhbGlhcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29tcGxldGVPcHRpb25LZXkoa2V5LCBjb21wbGV0aW9ucywgY3VycmVudCwgbmVnYWJsZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgIGxldCBrZXlXaXRoRGVzYyA9IGtleTtcbiAgICAgICAgaWYgKHRoaXMuenNoU2hlbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NzID0gdGhpcy51c2FnZS5nZXREZXNjcmlwdGlvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzS2V5ID0gKF9iID0gKF9hID0gdGhpcyA9PT0gbnVsbCB8fCB0aGlzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0aGlzLmFsaWFzZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtrZXldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmluZChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzYyA9IGRlc2NzW2FsaWFzXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGRlc2MgPT09ICdzdHJpbmcnICYmIGRlc2MubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGVzY0Zyb21BbGlhcyA9IGFsaWFzS2V5ID8gZGVzY3NbYWxpYXNLZXldIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IChfZCA9IChfYyA9IGRlc2NzW2tleV0pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGRlc2NGcm9tQWxpYXMpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xuICAgICAgICAgICAga2V5V2l0aERlc2MgPSBgJHtrZXkucmVwbGFjZSgvOi9nLCAnXFxcXDonKX06JHtkZXNjXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19feWFyZ3NTdHJpbmdfXzonLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJyAnKX1gO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0c0J5VHdvRGFzaGVzID0gKHMpID0+IC9eLS0vLnRlc3Qocyk7XG4gICAgICAgIGNvbnN0IGlzU2hvcnRPcHRpb24gPSAocykgPT4gL15bXjAtOV0kLy50ZXN0KHMpO1xuICAgICAgICBjb25zdCBkYXNoZXMgPSAhc3RhcnRzQnlUd29EYXNoZXMoY3VycmVudCkgJiYgaXNTaG9ydE9wdGlvbihrZXkpID8gJy0nIDogJy0tJztcbiAgICAgICAgY29tcGxldGlvbnMucHVzaChkYXNoZXMgKyBrZXlXaXRoRGVzYyk7XG4gICAgICAgIGlmIChuZWdhYmxlKSB7XG4gICAgICAgICAgICBjb21wbGV0aW9ucy5wdXNoKGRhc2hlcyArICduby0nICsga2V5V2l0aERlc2MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGN1c3RvbUNvbXBsZXRpb24oYXJncywgYXJndiwgY3VycmVudCwgZG9uZSkge1xuICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbCh0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbiwgbnVsbCwgdGhpcy5zaGltKTtcbiAgICAgICAgaWYgKGlzU3luY0NvbXBsZXRpb25GdW5jdGlvbih0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3VzdG9tQ29tcGxldGlvbkZ1bmN0aW9uKGN1cnJlbnQsIGFyZ3YpO1xuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAudGhlbihsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGltLnByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZShudWxsLCBsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpbS5wcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoZXJyLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNGYWxsYmFja0NvbXBsZXRpb25GdW5jdGlvbih0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbihjdXJyZW50LCBhcmd2LCAob25Db21wbGV0ZWQgPSBkb25lKSA9PiB0aGlzLmRlZmF1bHRDb21wbGV0aW9uKGFyZ3MsIGFyZ3YsIGN1cnJlbnQsIG9uQ29tcGxldGVkKSwgY29tcGxldGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgY29tcGxldGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb24oY3VycmVudCwgYXJndiwgY29tcGxldGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgY29tcGxldGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q29tcGxldGlvbihhcmdzLCBkb25lKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6ICcnO1xuICAgICAgICBjb25zdCBhcmd2ID0gdGhpcy55YXJncy5wYXJzZShhcmdzLCB0cnVlKTtcbiAgICAgICAgY29uc3QgY29tcGxldGlvbkZ1bmN0aW9uID0gdGhpcy5jdXN0b21Db21wbGV0aW9uRnVuY3Rpb25cbiAgICAgICAgICAgID8gKGFyZ3YpID0+IHRoaXMuY3VzdG9tQ29tcGxldGlvbihhcmdzLCBhcmd2LCBjdXJyZW50LCBkb25lKVxuICAgICAgICAgICAgOiAoYXJndikgPT4gdGhpcy5kZWZhdWx0Q29tcGxldGlvbihhcmdzLCBhcmd2LCBjdXJyZW50LCBkb25lKTtcbiAgICAgICAgcmV0dXJuIGlzUHJvbWlzZShhcmd2KVxuICAgICAgICAgICAgPyBhcmd2LnRoZW4oY29tcGxldGlvbkZ1bmN0aW9uKVxuICAgICAgICAgICAgOiBjb21wbGV0aW9uRnVuY3Rpb24oYXJndik7XG4gICAgfVxuICAgIGdlbmVyYXRlQ29tcGxldGlvblNjcmlwdCgkMCwgY21kKSB7XG4gICAgICAgIGxldCBzY3JpcHQgPSB0aGlzLnpzaFNoZWxsXG4gICAgICAgICAgICA/IHRlbXBsYXRlcy5jb21wbGV0aW9uWnNoVGVtcGxhdGVcbiAgICAgICAgICAgIDogdGVtcGxhdGVzLmNvbXBsZXRpb25TaFRlbXBsYXRlO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5zaGltLnBhdGguYmFzZW5hbWUoJDApO1xuICAgICAgICBpZiAoJDAubWF0Y2goL1xcLmpzJC8pKVxuICAgICAgICAgICAgJDAgPSBgLi8keyQwfWA7XG4gICAgICAgIHNjcmlwdCA9IHNjcmlwdC5yZXBsYWNlKC97e2FwcF9uYW1lfX0vZywgbmFtZSk7XG4gICAgICAgIHNjcmlwdCA9IHNjcmlwdC5yZXBsYWNlKC97e2NvbXBsZXRpb25fY29tbWFuZH19L2csIGNtZCk7XG4gICAgICAgIHJldHVybiBzY3JpcHQucmVwbGFjZSgve3thcHBfcGF0aH19L2csICQwKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJGdW5jdGlvbihmbikge1xuICAgICAgICB0aGlzLmN1c3RvbUNvbXBsZXRpb25GdW5jdGlvbiA9IGZuO1xuICAgIH1cbiAgICBzZXRQYXJzZWQocGFyc2VkKSB7XG4gICAgICAgIHRoaXMuYWxpYXNlcyA9IHBhcnNlZC5hbGlhc2VzO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0aW9uKHlhcmdzLCB1c2FnZSwgY29tbWFuZCwgc2hpbSkge1xuICAgIHJldHVybiBuZXcgQ29tcGxldGlvbih5YXJncywgdXNhZ2UsIGNvbW1hbmQsIHNoaW0pO1xufVxuZnVuY3Rpb24gaXNTeW5jQ29tcGxldGlvbkZ1bmN0aW9uKGNvbXBsZXRpb25GdW5jdGlvbikge1xuICAgIHJldHVybiBjb21wbGV0aW9uRnVuY3Rpb24ubGVuZ3RoIDwgMztcbn1cbmZ1bmN0aW9uIGlzRmFsbGJhY2tDb21wbGV0aW9uRnVuY3Rpb24oY29tcGxldGlvbkZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbXBsZXRpb25GdW5jdGlvbi5sZW5ndGggPiAzO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBsZXZlbnNodGVpbihhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gYi5sZW5ndGg7XG4gICAgaWYgKGIubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gYS5sZW5ndGg7XG4gICAgY29uc3QgbWF0cml4ID0gW107XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hdHJpeFtpXSA9IFtpXTtcbiAgICB9XG4gICAgbGV0IGo7XG4gICAgZm9yIChqID0gMDsgaiA8PSBhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIG1hdHJpeFswXVtqXSA9IGo7XG4gICAgfVxuICAgIGZvciAoaSA9IDE7IGkgPD0gYi5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGogPSAxOyBqIDw9IGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChiLmNoYXJBdChpIC0gMSkgPT09IGEuY2hhckF0KGogLSAxKSkge1xuICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IG1hdHJpeFtpIC0gMV1baiAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAxICYmXG4gICAgICAgICAgICAgICAgICAgIGogPiAxICYmXG4gICAgICAgICAgICAgICAgICAgIGIuY2hhckF0KGkgLSAyKSA9PT0gYS5jaGFyQXQoaiAtIDEpICYmXG4gICAgICAgICAgICAgICAgICAgIGIuY2hhckF0KGkgLSAxKSA9PT0gYS5jaGFyQXQoaiAtIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IG1hdHJpeFtpIC0gMl1baiAtIDJdICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IE1hdGgubWluKG1hdHJpeFtpIC0gMV1baiAtIDFdICsgMSwgTWF0aC5taW4obWF0cml4W2ldW2ogLSAxXSArIDEsIG1hdHJpeFtpIC0gMV1bal0gKyAxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXRyaXhbYi5sZW5ndGhdW2EubGVuZ3RoXTtcbn1cbiIsICJpbXBvcnQgeyBhcmdzZXJ0IH0gZnJvbSAnLi9hcmdzZXJ0LmpzJztcbmltcG9ydCB7IGFzc2VydE5vdFN0cmljdEVxdWFsLCB9IGZyb20gJy4vdHlwaW5ncy9jb21tb24tdHlwZXMuanMnO1xuaW1wb3J0IHsgbGV2ZW5zaHRlaW4gYXMgZGlzdGFuY2UgfSBmcm9tICcuL3V0aWxzL2xldmVuc2h0ZWluLmpzJztcbmltcG9ydCB7IG9iakZpbHRlciB9IGZyb20gJy4vdXRpbHMvb2JqLWZpbHRlci5qcyc7XG5jb25zdCBzcGVjaWFsS2V5cyA9IFsnJDAnLCAnLS0nLCAnXyddO1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRpb24oeWFyZ3MsIHVzYWdlLCBzaGltKSB7XG4gICAgY29uc3QgX18gPSBzaGltLnkxOG4uX187XG4gICAgY29uc3QgX19uID0gc2hpbS55MThuLl9fbjtcbiAgICBjb25zdCBzZWxmID0ge307XG4gICAgc2VsZi5ub25PcHRpb25Db3VudCA9IGZ1bmN0aW9uIG5vbk9wdGlvbkNvdW50KGFyZ3YpIHtcbiAgICAgICAgY29uc3QgZGVtYW5kZWRDb21tYW5kcyA9IHlhcmdzLmdldERlbWFuZGVkQ29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25hbENvdW50ID0gYXJndi5fLmxlbmd0aCArIChhcmd2WyctLSddID8gYXJndlsnLS0nXS5sZW5ndGggOiAwKTtcbiAgICAgICAgY29uc3QgX3MgPSBwb3NpdGlvbmFsQ291bnQgLSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRDb250ZXh0KCkuY29tbWFuZHMubGVuZ3RoO1xuICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fICYmXG4gICAgICAgICAgICAoX3MgPCBkZW1hbmRlZENvbW1hbmRzLl8ubWluIHx8IF9zID4gZGVtYW5kZWRDb21tYW5kcy5fLm1heCkpIHtcbiAgICAgICAgICAgIGlmIChfcyA8IGRlbWFuZGVkQ29tbWFuZHMuXy5taW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fLm1pbk1zZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoZGVtYW5kZWRDb21tYW5kcy5fLm1pbk1zZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZW1hbmRlZENvbW1hbmRzLl8ubWluTXNnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcJDAvZywgX3MudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMS8sIGRlbWFuZGVkQ29tbWFuZHMuXy5taW4udG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fbignTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgJ05vdCBlbm91Z2ggbm9uLW9wdGlvbiBhcmd1bWVudHM6IGdvdCAlcywgbmVlZCBhdCBsZWFzdCAlcycsIF9zLCBfcy50b1N0cmluZygpLCBkZW1hbmRlZENvbW1hbmRzLl8ubWluLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfcyA+IGRlbWFuZGVkQ29tbWFuZHMuXy5tYXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVtYW5kZWRDb21tYW5kcy5fLm1heE1zZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzYWdlLmZhaWwoZGVtYW5kZWRDb21tYW5kcy5fLm1heE1zZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZW1hbmRlZENvbW1hbmRzLl8ubWF4TXNnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcJDAvZywgX3MudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwkMS8sIGRlbWFuZGVkQ29tbWFuZHMuXy5tYXgudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fbignVG9vIG1hbnkgbm9uLW9wdGlvbiBhcmd1bWVudHM6IGdvdCAlcywgbWF4aW11bSBvZiAlcycsICdUb28gbWFueSBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBtYXhpbXVtIG9mICVzJywgX3MsIF9zLnRvU3RyaW5nKCksIGRlbWFuZGVkQ29tbWFuZHMuXy5tYXgudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi5wb3NpdGlvbmFsQ291bnQgPSBmdW5jdGlvbiBwb3NpdGlvbmFsQ291bnQocmVxdWlyZWQsIG9ic2VydmVkKSB7XG4gICAgICAgIGlmIChvYnNlcnZlZCA8IHJlcXVpcmVkKSB7XG4gICAgICAgICAgICB1c2FnZS5mYWlsKF9fbignTm90IGVub3VnaCBub24tb3B0aW9uIGFyZ3VtZW50czogZ290ICVzLCBuZWVkIGF0IGxlYXN0ICVzJywgJ05vdCBlbm91Z2ggbm9uLW9wdGlvbiBhcmd1bWVudHM6IGdvdCAlcywgbmVlZCBhdCBsZWFzdCAlcycsIG9ic2VydmVkLCBvYnNlcnZlZCArICcnLCByZXF1aXJlZCArICcnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYucmVxdWlyZWRBcmd1bWVudHMgPSBmdW5jdGlvbiByZXF1aXJlZEFyZ3VtZW50cyhhcmd2LCBkZW1hbmRlZE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG1pc3NpbmcgPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZW1hbmRlZE9wdGlvbnMpKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCBrZXkpIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGFyZ3Zba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nID0gbWlzc2luZyB8fCB7fTtcbiAgICAgICAgICAgICAgICBtaXNzaW5nW2tleV0gPSBkZW1hbmRlZE9wdGlvbnNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWlzc2luZykge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tTXNncyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobWlzc2luZykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBtaXNzaW5nW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKG1zZyAmJiBjdXN0b21Nc2dzLmluZGV4T2YobXNnKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tTXNncy5wdXNoKG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY3VzdG9tTXNnID0gY3VzdG9tTXNncy5sZW5ndGggPyBgXFxuJHtjdXN0b21Nc2dzLmpvaW4oJ1xcbicpfWAgOiAnJztcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OiAlcycsICdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50czogJXMnLCBPYmplY3Qua2V5cyhtaXNzaW5nKS5sZW5ndGgsIE9iamVjdC5rZXlzKG1pc3NpbmcpLmpvaW4oJywgJykgKyBjdXN0b21Nc2cpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi51bmtub3duQXJndW1lbnRzID0gZnVuY3Rpb24gdW5rbm93bkFyZ3VtZW50cyhhcmd2LCBhbGlhc2VzLCBwb3NpdGlvbmFsTWFwLCBpc0RlZmF1bHRDb21tYW5kLCBjaGVja1Bvc2l0aW9uYWxzID0gdHJ1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRLZXlzID0geWFyZ3NcbiAgICAgICAgICAgIC5nZXRJbnRlcm5hbE1ldGhvZHMoKVxuICAgICAgICAgICAgLmdldENvbW1hbmRJbnN0YW5jZSgpXG4gICAgICAgICAgICAuZ2V0Q29tbWFuZHMoKTtcbiAgICAgICAgY29uc3QgdW5rbm93biA9IFtdO1xuICAgICAgICBjb25zdCBjdXJyZW50Q29udGV4dCA9IHlhcmdzLmdldEludGVybmFsTWV0aG9kcygpLmdldENvbnRleHQoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzcGVjaWFsS2V5cy5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwb3NpdGlvbmFsTWFwLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRQYXJzZUNvbnRleHQoKSwga2V5KSAmJlxuICAgICAgICAgICAgICAgICFzZWxmLmlzVmFsaWRBbmRTb21lQWxpYXNJc05vdE5ldyhrZXksIGFsaWFzZXMpKSB7XG4gICAgICAgICAgICAgICAgdW5rbm93bi5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hlY2tQb3NpdGlvbmFscyAmJlxuICAgICAgICAgICAgKGN1cnJlbnRDb250ZXh0LmNvbW1hbmRzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICAgICAgICBjb21tYW5kS2V5cy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0Q29tbWFuZCkpIHtcbiAgICAgICAgICAgIGFyZ3YuXy5zbGljZShjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGgpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbW1hbmRLZXlzLmluY2x1ZGVzKCcnICsga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goJycgKyBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja1Bvc2l0aW9uYWxzKSB7XG4gICAgICAgICAgICBjb25zdCBkZW1hbmRlZENvbW1hbmRzID0geWFyZ3MuZ2V0RGVtYW5kZWRDb21tYW5kcygpO1xuICAgICAgICAgICAgY29uc3QgbWF4Tm9uT3B0RGVtYW5kZWQgPSAoKF9hID0gZGVtYW5kZWRDb21tYW5kcy5fKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWF4KSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGggKyBtYXhOb25PcHREZW1hbmRlZDtcbiAgICAgICAgICAgIGlmIChleHBlY3RlZCA8IGFyZ3YuXy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcmd2Ll8uc2xpY2UoZXhwZWN0ZWQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gU3RyaW5nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudENvbnRleHQuY29tbWFuZHMuaW5jbHVkZXMoa2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXVua25vd24uaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93bi5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodW5rbm93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdVbmtub3duIGFyZ3VtZW50OiAlcycsICdVbmtub3duIGFyZ3VtZW50czogJXMnLCB1bmtub3duLmxlbmd0aCwgdW5rbm93bi5tYXAocyA9PiAocy50cmltKCkgPyBzIDogYFwiJHtzfVwiYCkpLmpvaW4oJywgJykpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2VsZi51bmtub3duQ29tbWFuZHMgPSBmdW5jdGlvbiB1bmtub3duQ29tbWFuZHMoYXJndikge1xuICAgICAgICBjb25zdCBjb21tYW5kS2V5cyA9IHlhcmdzXG4gICAgICAgICAgICAuZ2V0SW50ZXJuYWxNZXRob2RzKClcbiAgICAgICAgICAgIC5nZXRDb21tYW5kSW5zdGFuY2UoKVxuICAgICAgICAgICAgLmdldENvbW1hbmRzKCk7XG4gICAgICAgIGNvbnN0IHVua25vd24gPSBbXTtcbiAgICAgICAgY29uc3QgY3VycmVudENvbnRleHQgPSB5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGggPiAwIHx8IGNvbW1hbmRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFyZ3YuXy5zbGljZShjdXJyZW50Q29udGV4dC5jb21tYW5kcy5sZW5ndGgpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbW1hbmRLZXlzLmluY2x1ZGVzKCcnICsga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB1bmtub3duLnB1c2goJycgKyBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmtub3duLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX19uKCdVbmtub3duIGNvbW1hbmQ6ICVzJywgJ1Vua25vd24gY29tbWFuZHM6ICVzJywgdW5rbm93bi5sZW5ndGgsIHVua25vd24uam9pbignLCAnKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuaXNWYWxpZEFuZFNvbWVBbGlhc0lzTm90TmV3ID0gZnVuY3Rpb24gaXNWYWxpZEFuZFNvbWVBbGlhc0lzTm90TmV3KGtleSwgYWxpYXNlcykge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbGlhc2VzLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QWxpYXNlcyA9IHlhcmdzLnBhcnNlZC5uZXdBbGlhc2VzO1xuICAgICAgICByZXR1cm4gW2tleSwgLi4uYWxpYXNlc1trZXldXS5zb21lKGEgPT4gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBbGlhc2VzLCBhKSB8fCAhbmV3QWxpYXNlc1trZXldKTtcbiAgICB9O1xuICAgIHNlbGYubGltaXRlZENob2ljZXMgPSBmdW5jdGlvbiBsaW1pdGVkQ2hvaWNlcyhhcmd2KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB5YXJncy5nZXRPcHRpb25zKCk7XG4gICAgICAgIGNvbnN0IGludmFsaWQgPSB7fTtcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvcHRpb25zLmNob2ljZXMpLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmtleXMoYXJndikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHNwZWNpYWxLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucy5jaG9pY2VzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgW10uY29uY2F0KGFyZ3Zba2V5XSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNob2ljZXNba2V5XS5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWRba2V5XSA9IChpbnZhbGlkW2tleV0gfHwgW10pLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGludmFsaWRLZXlzID0gT2JqZWN0LmtleXMoaW52YWxpZCk7XG4gICAgICAgIGlmICghaW52YWxpZEtleXMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgbXNnID0gX18oJ0ludmFsaWQgdmFsdWVzOicpO1xuICAgICAgICBpbnZhbGlkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBtc2cgKz0gYFxcbiAgJHtfXygnQXJndW1lbnQ6ICVzLCBHaXZlbjogJXMsIENob2ljZXM6ICVzJywga2V5LCB1c2FnZS5zdHJpbmdpZmllZFZhbHVlcyhpbnZhbGlkW2tleV0pLCB1c2FnZS5zdHJpbmdpZmllZFZhbHVlcyhvcHRpb25zLmNob2ljZXNba2V5XSkpfWA7XG4gICAgICAgIH0pO1xuICAgICAgICB1c2FnZS5mYWlsKG1zZyk7XG4gICAgfTtcbiAgICBsZXQgaW1wbGllZCA9IHt9O1xuICAgIHNlbGYuaW1wbGllcyA9IGZ1bmN0aW9uIGltcGxpZXMoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW2FycmF5fG51bWJlcnxzdHJpbmddJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbXBsaWVzKGssIGtleVtrXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHlhcmdzLmdsb2JhbChrZXkpO1xuICAgICAgICAgICAgaWYgKCFpbXBsaWVkW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpbXBsaWVkW2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaSA9PiBzZWxmLmltcGxpZXMoa2V5LCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbCh2YWx1ZSwgdW5kZWZpbmVkLCBzaGltKTtcbiAgICAgICAgICAgICAgICBpbXBsaWVkW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNlbGYuZ2V0SW1wbGllZCA9IGZ1bmN0aW9uIGdldEltcGxpZWQoKSB7XG4gICAgICAgIHJldHVybiBpbXBsaWVkO1xuICAgIH07XG4gICAgZnVuY3Rpb24ga2V5RXhpc3RzKGFyZ3YsIHZhbCkge1xuICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIodmFsKTtcbiAgICAgICAgdmFsID0gaXNOYU4obnVtKSA/IHZhbCA6IG51bTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB2YWwgPSBhcmd2Ll8ubGVuZ3RoID49IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwubWF0Y2goL14tLW5vLS4rLykpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5tYXRjaCgvXi0tbm8tKC4rKS8pWzFdO1xuICAgICAgICAgICAgdmFsID0gIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgc2VsZi5pbXBsaWNhdGlvbnMgPSBmdW5jdGlvbiBpbXBsaWNhdGlvbnMoYXJndikge1xuICAgICAgICBjb25zdCBpbXBseUZhaWwgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMoaW1wbGllZCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ0tleSA9IGtleTtcbiAgICAgICAgICAgIChpbXBsaWVkW2tleV0gfHwgW10pLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBvcmlnS2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGtleSA9IGtleUV4aXN0cyhhcmd2LCBrZXkpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0ga2V5RXhpc3RzKGFyZ3YsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbXBseUZhaWwucHVzaChgICR7b3JpZ0tleX0gLT4gJHtvcmlnVmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW1wbHlGYWlsLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IG1zZyA9IGAke19fKCdJbXBsaWNhdGlvbnMgZmFpbGVkOicpfVxcbmA7XG4gICAgICAgICAgICBpbXBseUZhaWwuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbXNnICs9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1c2FnZS5mYWlsKG1zZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCBjb25mbGljdGluZyA9IHt9O1xuICAgIHNlbGYuY29uZmxpY3RzID0gZnVuY3Rpb24gY29uZmxpY3RzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xvYmplY3Q+IFthcnJheXxzdHJpbmddJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25mbGljdHMoaywga2V5W2tdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWFyZ3MuZ2xvYmFsKGtleSk7XG4gICAgICAgICAgICBpZiAoIWNvbmZsaWN0aW5nW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjb25mbGljdGluZ1trZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGkgPT4gc2VsZi5jb25mbGljdHMoa2V5LCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25mbGljdGluZ1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLmdldENvbmZsaWN0aW5nID0gKCkgPT4gY29uZmxpY3Rpbmc7XG4gICAgc2VsZi5jb25mbGljdGluZyA9IGZ1bmN0aW9uIGNvbmZsaWN0aW5nRm4oYXJndikge1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmxpY3Rpbmdba2V5XSkge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0uZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiBhcmd2W2tleV0gIT09IHVuZGVmaW5lZCAmJiBhcmd2W3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fKCdBcmd1bWVudHMgJXMgYW5kICVzIGFyZSBtdXR1YWxseSBleGNsdXNpdmUnLCBrZXksIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh5YXJncy5nZXRJbnRlcm5hbE1ldGhvZHMoKS5nZXRQYXJzZXJDb25maWd1cmF0aW9uKClbJ3N0cmlwLWRhc2hlZCddKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25mbGljdGluZykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZsaWN0aW5nW2tleV0uZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltzaGltLlBhcnNlci5jYW1lbENhc2Uoa2V5KV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndltzaGltLlBhcnNlci5jYW1lbENhc2UodmFsdWUpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2FnZS5mYWlsKF9fKCdBcmd1bWVudHMgJXMgYW5kICVzIGFyZSBtdXR1YWxseSBleGNsdXNpdmUnLCBrZXksIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZWxmLnJlY29tbWVuZENvbW1hbmRzID0gZnVuY3Rpb24gcmVjb21tZW5kQ29tbWFuZHMoY21kLCBwb3RlbnRpYWxDb21tYW5kcykge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSAzO1xuICAgICAgICBwb3RlbnRpYWxDb21tYW5kcyA9IHBvdGVudGlhbENvbW1hbmRzLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpO1xuICAgICAgICBsZXQgcmVjb21tZW5kZWQgPSBudWxsO1xuICAgICAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBjYW5kaWRhdGU7IChjYW5kaWRhdGUgPSBwb3RlbnRpYWxDb21tYW5kc1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gZGlzdGFuY2UoY21kLCBjYW5kaWRhdGUpO1xuICAgICAgICAgICAgaWYgKGQgPD0gdGhyZXNob2xkICYmIGQgPCBiZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkO1xuICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkID0gY2FuZGlkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWNvbW1lbmRlZClcbiAgICAgICAgICAgIHVzYWdlLmZhaWwoX18oJ0RpZCB5b3UgbWVhbiAlcz8nLCByZWNvbW1lbmRlZCkpO1xuICAgIH07XG4gICAgc2VsZi5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KGxvY2FsTG9va3VwKSB7XG4gICAgICAgIGltcGxpZWQgPSBvYmpGaWx0ZXIoaW1wbGllZCwgayA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICBjb25mbGljdGluZyA9IG9iakZpbHRlcihjb25mbGljdGluZywgayA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIGNvbnN0IGZyb3plbnMgPSBbXTtcbiAgICBzZWxmLmZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICAgICAgZnJvemVucy5wdXNoKHtcbiAgICAgICAgICAgIGltcGxpZWQsXG4gICAgICAgICAgICBjb25mbGljdGluZyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBzZWxmLnVuZnJlZXplID0gZnVuY3Rpb24gdW5mcmVlemUoKSB7XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IGZyb3plbnMucG9wKCk7XG4gICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKGZyb3plbiwgdW5kZWZpbmVkLCBzaGltKTtcbiAgICAgICAgKHsgaW1wbGllZCwgY29uZmxpY3RpbmcgfSA9IGZyb3plbik7XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZjtcbn1cbiIsICJpbXBvcnQgeyBZRXJyb3IgfSBmcm9tICcuLi95ZXJyb3IuanMnO1xubGV0IHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncyA9IFtdO1xubGV0IHNoaW07XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFeHRlbmRzKGNvbmZpZywgY3dkLCBtZXJnZUV4dGVuZHMsIF9zaGltKSB7XG4gICAgc2hpbSA9IF9zaGltO1xuICAgIGxldCBkZWZhdWx0Q29uZmlnID0ge307XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdleHRlbmRzJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuZXh0ZW5kcyAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICAgICAgY29uc3QgaXNQYXRoID0gL1xcLmpzb258XFwuLipyYyQvLnRlc3QoY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICBsZXQgcGF0aFRvRGVmYXVsdCA9IG51bGw7XG4gICAgICAgIGlmICghaXNQYXRoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhdGhUb0RlZmF1bHQgPSBpbXBvcnQubWV0YS5yZXNvbHZlKGNvbmZpZy5leHRlbmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhdGhUb0RlZmF1bHQgPSBnZXRQYXRoVG9EZWZhdWx0Q29uZmlnKGN3ZCwgY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrRm9yQ2lyY3VsYXJFeHRlbmRzKHBhdGhUb0RlZmF1bHQpO1xuICAgICAgICBwcmV2aW91c2x5VmlzaXRlZENvbmZpZ3MucHVzaChwYXRoVG9EZWZhdWx0KTtcbiAgICAgICAgZGVmYXVsdENvbmZpZyA9IGlzUGF0aFxuICAgICAgICAgICAgPyBKU09OLnBhcnNlKHNoaW0ucmVhZEZpbGVTeW5jKHBhdGhUb0RlZmF1bHQsICd1dGY4JykpXG4gICAgICAgICAgICA6IF9zaGltLnJlcXVpcmUoY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICBkZWxldGUgY29uZmlnLmV4dGVuZHM7XG4gICAgICAgIGRlZmF1bHRDb25maWcgPSBhcHBseUV4dGVuZHMoZGVmYXVsdENvbmZpZywgc2hpbS5wYXRoLmRpcm5hbWUocGF0aFRvRGVmYXVsdCksIG1lcmdlRXh0ZW5kcywgc2hpbSk7XG4gICAgfVxuICAgIHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncyA9IFtdO1xuICAgIHJldHVybiBtZXJnZUV4dGVuZHNcbiAgICAgICAgPyBtZXJnZURlZXAoZGVmYXVsdENvbmZpZywgY29uZmlnKVxuICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG59XG5mdW5jdGlvbiBjaGVja0ZvckNpcmN1bGFyRXh0ZW5kcyhjZmdQYXRoKSB7XG4gICAgaWYgKHByZXZpb3VzbHlWaXNpdGVkQ29uZmlncy5pbmRleE9mKGNmZ1BhdGgpID4gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihgQ2lyY3VsYXIgZXh0ZW5kZWQgY29uZmlndXJhdGlvbnM6ICcke2NmZ1BhdGh9Jy5gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRQYXRoVG9EZWZhdWx0Q29uZmlnKGN3ZCwgcGF0aFRvRXh0ZW5kKSB7XG4gICAgcmV0dXJuIHNoaW0ucGF0aC5yZXNvbHZlKGN3ZCwgcGF0aFRvRXh0ZW5kKTtcbn1cbmZ1bmN0aW9uIG1lcmdlRGVlcChjb25maWcxLCBjb25maWcyKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcbiAgICB9XG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIGNvbmZpZzEpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGNvbmZpZzIpKSB7XG4gICAgICAgIGlmIChpc09iamVjdChjb25maWcyW2tleV0pICYmIGlzT2JqZWN0KHRhcmdldFtrZXldKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBtZXJnZURlZXAoY29uZmlnMVtrZXldLCBjb25maWcyW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBjb25maWcyW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbiIsICJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgX1lhcmdzSW5zdGFuY2VfY3dkLCBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQsIF9ZYXJnc0luc3RhbmNlX2V4aXRFcnJvciwgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLCBfWWFyZ3NJbnN0YW5jZV9lbWl0dGVkV2FybmluZ3MsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBfWWFyZ3NJbnN0YW5jZV9mcm96ZW5zLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgX1lhcmdzSW5zdGFuY2VfaXNHbG9iYWxDb250ZXh0LCBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgX1lhcmdzSW5zdGFuY2VfcGFyZW50UmVxdWlyZSwgX1lhcmdzSW5zdGFuY2VfcGFyc2VyQ29uZmlnLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgX1lhcmdzSW5zdGFuY2VfcHJvY2Vzc0FyZ3MsIF9ZYXJnc0luc3RhbmNlX3JlY29tbWVuZENvbW1hbmRzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgX1lhcmdzSW5zdGFuY2VfdXNhZ2VDb25maWcsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb247XG5pbXBvcnQgeyBjb21tYW5kIGFzIENvbW1hbmQsIH0gZnJvbSAnLi9jb21tYW5kLmpzJztcbmltcG9ydCB7IGFzc2VydE5vdFN0cmljdEVxdWFsLCBhc3NlcnRTaW5nbGVLZXksIG9iamVjdEtleXMsIH0gZnJvbSAnLi90eXBpbmdzL2NvbW1vbi10eXBlcy5qcyc7XG5pbXBvcnQgeyBZRXJyb3IgfSBmcm9tICcuL3llcnJvci5qcyc7XG5pbXBvcnQgeyB1c2FnZSBhcyBVc2FnZSB9IGZyb20gJy4vdXNhZ2UuanMnO1xuaW1wb3J0IHsgYXJnc2VydCB9IGZyb20gJy4vYXJnc2VydC5qcyc7XG5pbXBvcnQgeyBjb21wbGV0aW9uIGFzIENvbXBsZXRpb24sIH0gZnJvbSAnLi9jb21wbGV0aW9uLmpzJztcbmltcG9ydCB7IHZhbGlkYXRpb24gYXMgVmFsaWRhdGlvbiwgfSBmcm9tICcuL3ZhbGlkYXRpb24uanMnO1xuaW1wb3J0IHsgb2JqRmlsdGVyIH0gZnJvbSAnLi91dGlscy9vYmotZmlsdGVyLmpzJztcbmltcG9ydCB7IGFwcGx5RXh0ZW5kcyB9IGZyb20gJy4vdXRpbHMvYXBwbHktZXh0ZW5kcy5qcyc7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIEdsb2JhbE1pZGRsZXdhcmUsIH0gZnJvbSAnLi9taWRkbGV3YXJlLmpzJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4vdXRpbHMvaXMtcHJvbWlzZS5qcyc7XG5pbXBvcnQgeyBtYXliZUFzeW5jUmVzdWx0IH0gZnJvbSAnLi91dGlscy9tYXliZS1hc3luYy1yZXN1bHQuanMnO1xuaW1wb3J0IHNldEJsb2NraW5nIGZyb20gJy4vdXRpbHMvc2V0LWJsb2NraW5nLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBZYXJnc0ZhY3RvcnkoX3NoaW0pIHtcbiAgICByZXR1cm4gKHByb2Nlc3NBcmdzID0gW10sIGN3ZCA9IF9zaGltLnByb2Nlc3MuY3dkKCksIHBhcmVudFJlcXVpcmUpID0+IHtcbiAgICAgICAgY29uc3QgeWFyZ3MgPSBuZXcgWWFyZ3NJbnN0YW5jZShwcm9jZXNzQXJncywgY3dkLCBwYXJlbnRSZXF1aXJlLCBfc2hpbSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh5YXJncywgJ2FyZ3YnLCB7XG4gICAgICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWFyZ3MucGFyc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgeWFyZ3MuaGVscCgpO1xuICAgICAgICB5YXJncy52ZXJzaW9uKCk7XG4gICAgICAgIHJldHVybiB5YXJncztcbiAgICB9O1xufVxuY29uc3Qga0NvcHlEb3VibGVEYXNoID0gU3ltYm9sKCdjb3B5RG91YmxlRGFzaCcpO1xuY29uc3Qga0NyZWF0ZUxvZ2dlciA9IFN5bWJvbCgnY29weURvdWJsZURhc2gnKTtcbmNvbnN0IGtEZWxldGVGcm9tUGFyc2VySGludE9iamVjdCA9IFN5bWJvbCgnZGVsZXRlRnJvbVBhcnNlckhpbnRPYmplY3QnKTtcbmNvbnN0IGtFbWl0V2FybmluZyA9IFN5bWJvbCgnZW1pdFdhcm5pbmcnKTtcbmNvbnN0IGtGcmVlemUgPSBTeW1ib2woJ2ZyZWV6ZScpO1xuY29uc3Qga0dldERvbGxhclplcm8gPSBTeW1ib2woJ2dldERvbGxhclplcm8nKTtcbmNvbnN0IGtHZXRQYXJzZXJDb25maWd1cmF0aW9uID0gU3ltYm9sKCdnZXRQYXJzZXJDb25maWd1cmF0aW9uJyk7XG5jb25zdCBrR2V0VXNhZ2VDb25maWd1cmF0aW9uID0gU3ltYm9sKCdnZXRVc2FnZUNvbmZpZ3VyYXRpb24nKTtcbmNvbnN0IGtHdWVzc0xvY2FsZSA9IFN5bWJvbCgnZ3Vlc3NMb2NhbGUnKTtcbmNvbnN0IGtHdWVzc1ZlcnNpb24gPSBTeW1ib2woJ2d1ZXNzVmVyc2lvbicpO1xuY29uc3Qga1BhcnNlUG9zaXRpb25hbE51bWJlcnMgPSBTeW1ib2woJ3BhcnNlUG9zaXRpb25hbE51bWJlcnMnKTtcbmNvbnN0IGtQa2dVcCA9IFN5bWJvbCgncGtnVXAnKTtcbmNvbnN0IGtQb3B1bGF0ZVBhcnNlckhpbnRBcnJheSA9IFN5bWJvbCgncG9wdWxhdGVQYXJzZXJIaW50QXJyYXknKTtcbmNvbnN0IGtQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnkgPSBTeW1ib2woJ3BvcHVsYXRlUGFyc2VySGludFNpbmdsZVZhbHVlRGljdGlvbmFyeScpO1xuY29uc3Qga1BvcHVsYXRlUGFyc2VySGludEFycmF5RGljdGlvbmFyeSA9IFN5bWJvbCgncG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5Jyk7XG5jb25zdCBrUG9wdWxhdGVQYXJzZXJIaW50RGljdGlvbmFyeSA9IFN5bWJvbCgncG9wdWxhdGVQYXJzZXJIaW50RGljdGlvbmFyeScpO1xuY29uc3Qga1Nhbml0aXplS2V5ID0gU3ltYm9sKCdzYW5pdGl6ZUtleScpO1xuY29uc3Qga1NldEtleSA9IFN5bWJvbCgnc2V0S2V5Jyk7XG5jb25zdCBrVW5mcmVlemUgPSBTeW1ib2woJ3VuZnJlZXplJyk7XG5jb25zdCBrVmFsaWRhdGVBc3luYyA9IFN5bWJvbCgndmFsaWRhdGVBc3luYycpO1xuY29uc3Qga0dldENvbW1hbmRJbnN0YW5jZSA9IFN5bWJvbCgnZ2V0Q29tbWFuZEluc3RhbmNlJyk7XG5jb25zdCBrR2V0Q29udGV4dCA9IFN5bWJvbCgnZ2V0Q29udGV4dCcpO1xuY29uc3Qga0dldEhhc091dHB1dCA9IFN5bWJvbCgnZ2V0SGFzT3V0cHV0Jyk7XG5jb25zdCBrR2V0TG9nZ2VySW5zdGFuY2UgPSBTeW1ib2woJ2dldExvZ2dlckluc3RhbmNlJyk7XG5jb25zdCBrR2V0UGFyc2VDb250ZXh0ID0gU3ltYm9sKCdnZXRQYXJzZUNvbnRleHQnKTtcbmNvbnN0IGtHZXRVc2FnZUluc3RhbmNlID0gU3ltYm9sKCdnZXRVc2FnZUluc3RhbmNlJyk7XG5jb25zdCBrR2V0VmFsaWRhdGlvbkluc3RhbmNlID0gU3ltYm9sKCdnZXRWYWxpZGF0aW9uSW5zdGFuY2UnKTtcbmNvbnN0IGtIYXNQYXJzZUNhbGxiYWNrID0gU3ltYm9sKCdoYXNQYXJzZUNhbGxiYWNrJyk7XG5jb25zdCBrSXNHbG9iYWxDb250ZXh0ID0gU3ltYm9sKCdpc0dsb2JhbENvbnRleHQnKTtcbmNvbnN0IGtQb3N0UHJvY2VzcyA9IFN5bWJvbCgncG9zdFByb2Nlc3MnKTtcbmNvbnN0IGtSZWJhc2UgPSBTeW1ib2woJ3JlYmFzZScpO1xuY29uc3Qga1Jlc2V0ID0gU3ltYm9sKCdyZXNldCcpO1xuY29uc3Qga1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzID0gU3ltYm9sKCdydW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kcycpO1xuY29uc3Qga1J1blZhbGlkYXRpb24gPSBTeW1ib2woJ3J1blZhbGlkYXRpb24nKTtcbmNvbnN0IGtTZXRIYXNPdXRwdXQgPSBTeW1ib2woJ3NldEhhc091dHB1dCcpO1xuY29uc3Qga1RyYWNrTWFudWFsbHlTZXRLZXlzID0gU3ltYm9sKCdrVHJhY2tNYW51YWxseVNldEtleXMnKTtcbmNvbnN0IERFRkFVTFRfTE9DQUxFID0gJ2VuX1VTJztcbmV4cG9ydCBjbGFzcyBZYXJnc0luc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9jZXNzQXJncyA9IFtdLCBjd2QsIHBhcmVudFJlcXVpcmUsIHNoaW0pIHtcbiAgICAgICAgdGhpcy5jdXN0b21TY3JpcHROYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFyc2VkID0gZmFsc2U7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2N3ZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfY29udGV4dC5zZXQodGhpcywgeyBjb21tYW5kczogW10sIGZ1bGxDb21tYW5kczogW10gfSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24uc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2RlZmF1bHRTaG93SGlkZGVuT3B0LnNldCh0aGlzLCAnc2hvdy1oaWRkZW4nKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZW1pdHRlZFdhcm5pbmdzLnNldCh0aGlzLCB7fSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfZnJvemVucy5zZXQodGhpcywgW10pO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9ncm91cHMuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQuc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9sb2dnZXIuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX291dHB1dC5zZXQodGhpcywgJycpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wYXJlbnRSZXF1aXJlLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BhcnNlQ29udGV4dC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3BrZ3Muc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLnNldCh0aGlzLCB7fSk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9yZWNvbW1lbmRDb21tYW5kcy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zaGltLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV9zdHJpY3Quc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0T3B0aW9ucy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfWWFyZ3NJbnN0YW5jZV91c2FnZS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfdXNhZ2VDb25maWcuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgc2hpbSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBwcm9jZXNzQXJncywgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgY3dkLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyZW50UmVxdWlyZSwgcGFyZW50UmVxdWlyZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIG5ldyBHbG9iYWxNaWRkbGV3YXJlKHRoaXMpLCBcImZcIik7XG4gICAgICAgIHRoaXMuJDAgPSB0aGlzW2tHZXREb2xsYXJaZXJvXSgpO1xuICAgICAgICB0aGlzW2tSZXNldF0oKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIiksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLnNob3dIaWRkZW5PcHQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RlZmF1bHRTaG93SGlkZGVuT3B0LCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCB0aGlzW2tDcmVhdGVMb2dnZXJdKCksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5zZXRMb2NhbGUoREVGQVVMVF9MT0NBTEUpO1xuICAgIH1cbiAgICBhZGRIZWxwT3B0KG9wdCwgbXNnKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRIZWxwT3B0ID0gJ2hlbHAnO1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGJvb2xlYW5dIFtzdHJpbmddJywgW29wdCwgbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKSkge1xuICAgICAgICAgICAgdGhpc1trRGVsZXRlRnJvbVBhcnNlckhpbnRPYmplY3RdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgbnVsbCwgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHQgPT09IGZhbHNlICYmIG1zZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgdHlwZW9mIG9wdCA9PT0gJ3N0cmluZycgPyBvcHQgOiBkZWZhdWx0SGVscE9wdCwgXCJmXCIpO1xuICAgICAgICB0aGlzLmJvb2xlYW4oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIikpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpLCBtc2cgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmRlZmVyWTE4bkxvb2t1cCgnU2hvdyBoZWxwJykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaGVscChvcHQsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRIZWxwT3B0KG9wdCwgbXNnKTtcbiAgICB9XG4gICAgYWRkU2hvd0hpZGRlbk9wdChvcHQsIG1zZykge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGJvb2xlYW5dIFtzdHJpbmddJywgW29wdCwgbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChvcHQgPT09IGZhbHNlICYmIG1zZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGNvbnN0IHNob3dIaWRkZW5PcHQgPSB0eXBlb2Ygb3B0ID09PSAnc3RyaW5nJyA/IG9wdCA6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGVmYXVsdFNob3dIaWRkZW5PcHQsIFwiZlwiKTtcbiAgICAgICAgdGhpcy5ib29sZWFuKHNob3dIaWRkZW5PcHQpO1xuICAgICAgICB0aGlzLmRlc2NyaWJlKHNob3dIaWRkZW5PcHQsIG1zZyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVmZXJZMThuTG9va3VwKCdTaG93IGhpZGRlbiBvcHRpb25zJykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5zaG93SGlkZGVuT3B0ID0gc2hvd0hpZGRlbk9wdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNob3dIaWRkZW4ob3B0LCBtc2cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU2hvd0hpZGRlbk9wdChvcHQsIG1zZyk7XG4gICAgfVxuICAgIGFsaWFzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmd8YXJyYXldJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5XSh0aGlzLmFsaWFzLmJpbmQodGhpcyksICdhbGlhcycsIGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYXJyYXkoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnYXJyYXknLCBrZXlzKTtcbiAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYm9vbGVhbihrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmc+JywgW2tleXNdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKCdib29sZWFuJywga2V5cyk7XG4gICAgICAgIHRoaXNba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNoZWNrKGYsIGdsb2JhbCkge1xuICAgICAgICBhcmdzZXJ0KCc8ZnVuY3Rpb24+IFtib29sZWFuXScsIFtmLCBnbG9iYWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlKChhcmd2LCBfeWFyZ3MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtYXliZUFzeW5jUmVzdWx0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZihhcmd2LCBfeWFyZ3MuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZmFpbChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS55MThuLl9fKCdBcmd1bWVudCBjaGVjayBmYWlsZWQ6ICVzJywgZi50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnIHx8IHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsKHJlc3VsdC50b1N0cmluZygpLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZmFpbChlcnIubWVzc2FnZSA/IGVyci5tZXNzYWdlIDogZXJyLnRvU3RyaW5nKCksIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZmFsc2UsIGdsb2JhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjaG9pY2VzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmd8YXJyYXldJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50QXJyYXlEaWN0aW9uYXJ5XSh0aGlzLmNob2ljZXMuYmluZCh0aGlzKSwgJ2Nob2ljZXMnLCBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvZXJjZShrZXlzLCB2YWx1ZSkge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0fHN0cmluZ3xhcnJheT4gW2Z1bmN0aW9uXScsIFtrZXlzLCB2YWx1ZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoJ2NvZXJjZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2VyY2Uoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Yga2V5cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGtleXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2VyY2Uoa2V5LCBrZXlzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcignY29lcmNlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2VyY2VLZXkgPSBrZXlzO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5rZXlbY29lcmNlS2V5XSA9IHRydWU7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLmFkZENvZXJjZU1pZGRsZXdhcmUoKGFyZ3YsIHlhcmdzKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBjb2VyY2VLZXlBbGlhc2VzID0gKF9hID0geWFyZ3MuZ2V0QWxpYXNlcygpW2NvZXJjZUtleV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdO1xuICAgICAgICAgICAgY29uc3QgYXJndktleXMgPSBbY29lcmNlS2V5LCAuLi5jb2VyY2VLZXlBbGlhc2VzXS5maWx0ZXIoa2V5ID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd2LCBrZXkpKTtcbiAgICAgICAgICAgIGlmIChhcmd2S2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXliZUFzeW5jUmVzdWx0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUoYXJndlthcmd2S2V5c1swXV0pO1xuICAgICAgICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGFyZ3ZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXJndltrZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBZRXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGNvZXJjZUtleSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25mbGljdHMoa2V5MSwga2V5Mikge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW3N0cmluZ3xhcnJheV0nLCBba2V5MSwga2V5Ml0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5jb25mbGljdHMoa2V5MSwga2V5Mik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25maWcoa2V5ID0gJ2NvbmZpZycsIG1zZywgcGFyc2VGbikge1xuICAgICAgICBhcmdzZXJ0KCdbb2JqZWN0fHN0cmluZ10gW3N0cmluZ3xmdW5jdGlvbl0gW2Z1bmN0aW9uXScsIFtrZXksIG1zZywgcGFyc2VGbl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgICAga2V5ID0gYXBwbHlFeHRlbmRzKGtleSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jd2QsIFwiZlwiKSwgdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0oKVsnZGVlcC1tZXJnZS1jb25maWcnXSB8fCBmYWxzZSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlnT2JqZWN0cyA9IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzIHx8IFtdKS5jb25jYXQoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwYXJzZUZuID0gbXNnO1xuICAgICAgICAgICAgbXNnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzY3JpYmUoa2V5LCBtc2cgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmRlZmVyWTE4bkxvb2t1cCgnUGF0aCB0byBKU09OIGNvbmZpZyBmaWxlJykpO1xuICAgICAgICAoQXJyYXkuaXNBcnJheShrZXkpID8ga2V5IDogW2tleV0pLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdba10gPSBwYXJzZUZuIHx8IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29tcGxldGlvbihjbWQsIGRlc2MsIGZuKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmddIFtzdHJpbmd8Ym9vbGVhbnxmdW5jdGlvbl0gW2Z1bmN0aW9uXScsIFtjbWQsIGRlc2MsIGZuXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZm4gPSBkZXNjO1xuICAgICAgICAgICAgZGVzYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBjbWQgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgXCJmXCIpIHx8ICdjb21wbGV0aW9uJywgXCJmXCIpO1xuICAgICAgICBpZiAoIWRlc2MgJiYgZGVzYyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlc2MgPSAnZ2VuZXJhdGUgY29tcGxldGlvbiBzY3JpcHQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tbWFuZChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIiksIGRlc2MpO1xuICAgICAgICBpZiAoZm4pXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5yZWdpc3RlckZ1bmN0aW9uKGZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbW1hbmQoY21kLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlciwgbWlkZGxld2FyZXMsIGRlcHJlY2F0ZWQpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xhcnJheXxvYmplY3Q+IFtzdHJpbmd8Ym9vbGVhbl0gW2Z1bmN0aW9ufG9iamVjdF0gW2Z1bmN0aW9uXSBbYXJyYXldIFtib29sZWFufHN0cmluZ10nLCBbY21kLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlciwgbWlkZGxld2FyZXMsIGRlcHJlY2F0ZWRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuYWRkSGFuZGxlcihjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb21tYW5kcyhjbWQsIGRlc2NyaXB0aW9uLCBidWlsZGVyLCBoYW5kbGVyLCBtaWRkbGV3YXJlcywgZGVwcmVjYXRlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kKGNtZCwgZGVzY3JpcHRpb24sIGJ1aWxkZXIsIGhhbmRsZXIsIG1pZGRsZXdhcmVzLCBkZXByZWNhdGVkKTtcbiAgICB9XG4gICAgY29tbWFuZERpcihkaXIsIG9wdHMpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZz4gW29iamVjdF0nLCBbZGlyLCBvcHRzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJlcSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyZW50UmVxdWlyZSwgXCJmXCIpIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnJlcXVpcmU7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmFkZERpcmVjdG9yeShkaXIsIHJlcSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0Q2FsbGVyRmlsZSgpLCBvcHRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvdW50KGtleXMpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fHN0cmluZz4nLCBba2V5c10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheV0oJ2NvdW50Jywga2V5cyk7XG4gICAgICAgIHRoaXNba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlZmF1bHQoa2V5LCB2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3R8c3RyaW5nfGFycmF5PiBbKl0gW3N0cmluZ10nLCBba2V5LCB2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChkZWZhdWx0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGFzc2VydFNpbmdsZUtleShrZXksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmRlZmF1bHREZXNjcmlwdGlvbltrZXldID0gZGVmYXVsdERlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydFNpbmdsZUtleShrZXksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0pXG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0gPVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZnVuY3Rpb25EZXNjcmlwdGlvbih2YWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXMuZGVmYXVsdC5iaW5kKHRoaXMpLCAnZGVmYXVsdCcsIGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVmYXVsdHMoa2V5LCB2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHQoa2V5LCB2YWx1ZSwgZGVmYXVsdERlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgZGVtYW5kQ29tbWFuZChtaW4gPSAxLCBtYXgsIG1pbk1zZywgbWF4TXNnKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tudW1iZXJdIFtudW1iZXJ8c3RyaW5nXSBbc3RyaW5nfG51bGx8dW5kZWZpbmVkXSBbc3RyaW5nfG51bGx8dW5kZWZpbmVkXScsIFttaW4sIG1heCwgbWluTXNnLCBtYXhNc2ddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBtaW5Nc2cgPSBtYXg7XG4gICAgICAgICAgICBtYXggPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbCgnXycsIGZhbHNlKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVtYW5kZWRDb21tYW5kcy5fID0ge1xuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgbWluTXNnLFxuICAgICAgICAgICAgbWF4TXNnLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVtYW5kKGtleXMsIG1heCwgbXNnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1heCkpIHtcbiAgICAgICAgICAgIG1heC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwobXNnLCB0cnVlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZW1hbmRPcHRpb24oa2V5LCBtc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYXggPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbXNnID0gbWF4O1xuICAgICAgICAgICAgbWF4ID0gSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXlzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwobXNnLCB0cnVlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLmRlbWFuZENvbW1hbmQoa2V5cywgbWF4LCBtc2csIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwobXNnLCB0cnVlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZW1hbmRPcHRpb24oa2V5LCBtc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXlzLCBtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobXNnID09PSB0cnVlIHx8IHR5cGVvZiBtc2cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZW1hbmRPcHRpb24oa2V5cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlbWFuZE9wdGlvbihrZXlzLCBtc2cpIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdHxzdHJpbmd8YXJyYXk+IFtzdHJpbmddJywgW2tleXMsIG1zZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXMuZGVtYW5kT3B0aW9uLmJpbmQodGhpcyksICdkZW1hbmRlZE9wdGlvbnMnLCBrZXlzLCBtc2cpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVwcmVjYXRlT3B0aW9uKG9wdGlvbiwgbWVzc2FnZSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPiBbc3RyaW5nfGJvb2xlYW5dJywgW29wdGlvbiwgbWVzc2FnZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5kZXByZWNhdGVkT3B0aW9uc1tvcHRpb25dID0gbWVzc2FnZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRlc2NyaWJlKGtleXMsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3R8c3RyaW5nfGFycmF5PiBbc3RyaW5nXScsIFtrZXlzLCBkZXNjcmlwdGlvbl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tTZXRLZXldKGtleXMsIHRydWUpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZGVzY3JpYmUoa2V5cywgZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGV0ZWN0TG9jYWxlKGRldGVjdCkge1xuICAgICAgICBhcmdzZXJ0KCc8Ym9vbGVhbj4nLCBbZGV0ZWN0XSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLCBkZXRlY3QsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVudihwcmVmaXgpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ3xib29sZWFuXScsIFtwcmVmaXhdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gZmFsc2UpXG4gICAgICAgICAgICBkZWxldGUgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZW52UHJlZml4O1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5lbnZQcmVmaXggPSBwcmVmaXggfHwgJyc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBlcGlsb2d1ZShtc2cpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZz4nLCBbbXNnXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5lcGlsb2cobXNnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVwaWxvZyhtc2cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXBpbG9ndWUobXNnKTtcbiAgICB9XG4gICAgZXhhbXBsZShjbWQsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8YXJyYXk+IFtzdHJpbmddJywgW2NtZCwgZGVzY3JpcHRpb25dLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY21kKSkge1xuICAgICAgICAgICAgY21kLmZvckVhY2goZXhhbXBsZVBhcmFtcyA9PiB0aGlzLmV4YW1wbGUoLi4uZXhhbXBsZVBhcmFtcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmV4YW1wbGUoY21kLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGV4aXQoY29kZSwgZXJyKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBlcnIsIFwiZlwiKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSlcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICB9XG4gICAgZXhpdFByb2Nlc3MoZW5hYmxlZCA9IHRydWUpIHtcbiAgICAgICAgYXJnc2VydCgnW2Jvb2xlYW5dJywgW2VuYWJsZWRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgZW5hYmxlZCwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmFpbChmKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxmdW5jdGlvbnxib29sZWFuPicsIFtmXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Jvb2xlYW4nICYmIGYgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKFwiSW52YWxpZCBmaXJzdCBhcmd1bWVudC4gRXhwZWN0ZWQgZnVuY3Rpb24gb3IgYm9vbGVhbiAnZmFsc2UnXCIpO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5mYWlsRm4oZik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRBbGlhc2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZWQgPyB0aGlzLnBhcnNlZC5hbGlhc2VzIDoge307XG4gICAgfVxuICAgIGFzeW5jIGdldENvbXBsZXRpb24oYXJncywgZG9uZSkge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXk+IFtmdW5jdGlvbl0nLCBbYXJncywgZG9uZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikuZ2V0Q29tcGxldGlvbihhcmdzLCAoZXJyLCBjb21wbGV0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tcGxldGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikuZ2V0Q29tcGxldGlvbihhcmdzLCBkb25lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXREZW1hbmRlZE9wdGlvbnMoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVtYW5kZWRPcHRpb25zO1xuICAgIH1cbiAgICBnZXREZW1hbmRlZENvbW1hbmRzKCkge1xuICAgICAgICBhcmdzZXJ0KFtdLCAwKTtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmRlbWFuZGVkQ29tbWFuZHM7XG4gICAgfVxuICAgIGdldERlcHJlY2F0ZWRPcHRpb25zKCkge1xuICAgICAgICBhcmdzZXJ0KFtdLCAwKTtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmRlcHJlY2F0ZWRPcHRpb25zO1xuICAgIH1cbiAgICBnZXREZXRlY3RMb2NhbGUoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXRFeGl0UHJvY2VzcygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0R3JvdXBzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMsIFwiZlwiKSk7XG4gICAgfVxuICAgIGdldEhlbHAoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmhhc0NhY2hlZEhlbHBNZXNzYWdlKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJzZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZSA9IHRoaXNba1J1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzXShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBcImZcIiksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKHBhcnNlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmhlbHAoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYnVpbGRlclJlc3BvbnNlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucnVuRGVmYXVsdEJ1aWxkZXJPbih0aGlzKTtcbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UoYnVpbGRlclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyUmVzcG9uc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuaGVscCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmhlbHAoKSk7XG4gICAgfVxuICAgIGdldE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0U3RyaWN0KCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0U3RyaWN0Q29tbWFuZHMoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBcImZcIik7XG4gICAgfVxuICAgIGdldFN0cmljdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2xvYmFsKGdsb2JhbHMsIGdsb2JhbCkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfGFycmF5PiBbYm9vbGVhbl0nLCBbZ2xvYmFscywgZ2xvYmFsXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGdsb2JhbHMgPSBbXS5jb25jYXQoZ2xvYmFscyk7XG4gICAgICAgIGlmIChnbG9iYWwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5sb2NhbCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsLmZpbHRlcihsID0+IGdsb2JhbHMuaW5kZXhPZihsKSA9PT0gLTEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFscy5mb3JFYWNoKGcgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubG9jYWwuaW5jbHVkZXMoZykpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsLnB1c2goZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ3JvdXAob3B0cywgZ3JvdXBOYW1lKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmd8YXJyYXk+IDxzdHJpbmc+JywgW29wdHMsIGdyb3VwTmFtZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcHJlc2VydmVkR3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXSB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpW2dyb3VwTmFtZV07XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgXCJmXCIpW2dyb3VwTmFtZV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcywgXCJmXCIpW2dyb3VwTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VlbiA9IHt9O1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dyb3VwcywgXCJmXCIpW2dyb3VwTmFtZV0gPSAoZXhpc3RpbmcgfHwgW10pLmNvbmNhdChvcHRzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChzZWVuW2tleV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIChzZWVuW2tleV0gPSB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBoaWRlKGtleSkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nPicsIFtrZXldLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuaGlkZGVuT3B0aW9ucy5wdXNoKGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpbXBsaWVzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xvYmplY3Q+IFtudW1iZXJ8c3RyaW5nfGFycmF5XScsIFtrZXksIHZhbHVlXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmltcGxpZXMoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsb2NhbGUobG9jYWxlKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmddJywgW2xvY2FsZV0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAobG9jYWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXNba0d1ZXNzTG9jYWxlXSgpO1xuICAgICAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4uZ2V0TG9jYWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnkxOG4uc2V0TG9jYWxlKGxvY2FsZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBtaWRkbGV3YXJlKGNhbGxiYWNrLCBhcHBseUJlZm9yZVZhbGlkYXRpb24sIGdsb2JhbCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuYWRkTWlkZGxld2FyZShjYWxsYmFjaywgISFhcHBseUJlZm9yZVZhbGlkYXRpb24sIGdsb2JhbCk7XG4gICAgfVxuICAgIG5hcmdzKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZ3xvYmplY3R8YXJyYXk+IFtudW1iZXJdJywgW2tleSwgdmFsdWVdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5XSh0aGlzLm5hcmdzLmJpbmQodGhpcyksICduYXJnJywga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBub3JtYWxpemUoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnbm9ybWFsaXplJywga2V5cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBudW1iZXIoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnbnVtYmVyJywga2V5cyk7XG4gICAgICAgIHRoaXNba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG9wdGlvbihrZXksIG9wdCkge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG9iamVjdD4gW29iamVjdF0nLCBba2V5LCBvcHRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhrZXkpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zKGssIGtleVtrXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIG9wdCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1trVHJhY2tNYW51YWxseVNldEtleXNdKGtleSk7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LCBcImZcIikgJiYgKGtleSA9PT0gJ3ZlcnNpb24nIHx8IChvcHQgPT09IG51bGwgfHwgb3B0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHQuYWxpYXMpID09PSAndmVyc2lvbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trRW1pdFdhcm5pbmddKFtcbiAgICAgICAgICAgICAgICAgICAgJ1widmVyc2lvblwiIGlzIGEgcmVzZXJ2ZWQgd29yZC4nLFxuICAgICAgICAgICAgICAgICAgICAnUGxlYXNlIGRvIG9uZSBvZiB0aGUgZm9sbG93aW5nOicsXG4gICAgICAgICAgICAgICAgICAgICctIERpc2FibGUgdmVyc2lvbiB3aXRoIGB5YXJncy52ZXJzaW9uKGZhbHNlKWAgaWYgdXNpbmcgXCJ2ZXJzaW9uXCIgYXMgYW4gb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJy0gVXNlIHRoZSBidWlsdC1pbiBgeWFyZ3MudmVyc2lvbmAgbWV0aG9kIGluc3RlYWQgKGlmIGFwcGxpY2FibGUpJyxcbiAgICAgICAgICAgICAgICAgICAgJy0gVXNlIGEgZGlmZmVyZW50IG9wdGlvbiBrZXknLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly95YXJncy5qcy5vcmcvZG9jcy8jYXBpLXJlZmVyZW5jZS12ZXJzaW9uJyxcbiAgICAgICAgICAgICAgICBdLmpvaW4oJ1xcbicpLCB1bmRlZmluZWQsICd2ZXJzaW9uV2FybmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikua2V5W2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKG9wdC5hbGlhcylcbiAgICAgICAgICAgICAgICB0aGlzLmFsaWFzKGtleSwgb3B0LmFsaWFzKTtcbiAgICAgICAgICAgIGNvbnN0IGRlcHJlY2F0ZSA9IG9wdC5kZXByZWNhdGUgfHwgb3B0LmRlcHJlY2F0ZWQ7XG4gICAgICAgICAgICBpZiAoZGVwcmVjYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXByZWNhdGVPcHRpb24oa2V5LCBkZXByZWNhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGVtYW5kID0gb3B0LmRlbWFuZCB8fCBvcHQucmVxdWlyZWQgfHwgb3B0LnJlcXVpcmU7XG4gICAgICAgICAgICBpZiAoZGVtYW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZW1hbmQoa2V5LCBkZW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5kZW1hbmRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbWFuZE9wdGlvbihrZXksIHR5cGVvZiBvcHQuZGVtYW5kT3B0aW9uID09PSAnc3RyaW5nJyA/IG9wdC5kZW1hbmRPcHRpb24gOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jb25mbGljdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZsaWN0cyhrZXksIG9wdC5jb25mbGljdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBvcHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHQoa2V5LCBvcHQuZGVmYXVsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0LmltcGxpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wbGllcyhrZXksIG9wdC5pbXBsaWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQubmFyZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmFyZ3Moa2V5LCBvcHQubmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jb25maWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyhrZXksIG9wdC5jb25maWdQYXJzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5ub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vcm1hbGl6ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jaG9pY2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaG9pY2VzKGtleSwgb3B0LmNob2ljZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jb2VyY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZXJjZShrZXksIG9wdC5jb2VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5ncm91cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAoa2V5LCBvcHQuZ3JvdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5ib29sZWFuIHx8IG9wdC50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvb2xlYW4oa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2xlYW4ob3B0LmFsaWFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQuYXJyYXkgfHwgb3B0LnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdC5hbGlhcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheShvcHQuYWxpYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5udW1iZXIgfHwgb3B0LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXIoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlcihvcHQuYWxpYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5zdHJpbmcgfHwgb3B0LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmcoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0LmFsaWFzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmluZyhvcHQuYWxpYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5jb3VudCB8fCBvcHQudHlwZSA9PT0gJ2NvdW50Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnQoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0Lmdsb2JhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWwoa2V5LCBvcHQuZ2xvYmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQuZGVmYXVsdERlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuZGVmYXVsdERlc2NyaXB0aW9uW2tleV0gPSBvcHQuZGVmYXVsdERlc2NyaXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5za2lwVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpcFZhbGlkYXRpb24oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBvcHQuZGVzY3JpYmUgfHwgb3B0LmRlc2NyaXB0aW9uIHx8IG9wdC5kZXNjO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25zID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLmdldERlc2NyaXB0aW9ucygpO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVzY3JpcHRpb25zLCBrZXkpIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGRlc2MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmliZShrZXksIGRlc2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHQucmVxdWlyZXNBcmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmVzQXJnKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG9wdGlvbnMoa2V5LCBvcHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uKGtleSwgb3B0KTtcbiAgICB9XG4gICAgcGFyc2UoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbikge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGFycmF5XSBbZnVuY3Rpb258Ym9vbGVhbnxvYmplY3RdIFtmdW5jdGlvbl0nLCBbYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tGcmVlemVdKCk7XG4gICAgICAgIGlmICh0eXBlb2YgYXJncyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBcImZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzaG9ydENpcmN1aXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlQ29udGV4dCwgc2hvcnRDaXJjdWl0LCBcImZcIik7XG4gICAgICAgICAgICBzaG9ydENpcmN1aXQgPSBfcGFyc2VGbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNob3J0Q2lyY3VpdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBzaG9ydENpcmN1aXQsIFwiZlwiKTtcbiAgICAgICAgICAgIHNob3J0Q2lyY3VpdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2hvcnRDaXJjdWl0KVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcm9jZXNzQXJncywgYXJncywgXCJmXCIpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIikpXG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzW2tSdW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kc10oYXJncywgISFzaG9ydENpcmN1aXQpO1xuICAgICAgICBjb25zdCB0bXBQYXJzZWQgPSB0aGlzLnBhcnNlZDtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uLCBcImZcIikuc2V0UGFyc2VkKHRoaXMucGFyc2VkKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShwYXJzZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkXG4gICAgICAgICAgICAgICAgLnRoZW4oYXJndiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VGbiwgXCJmXCIpKVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBcImZcIiksIGFyZ3YsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIikoZXJyLCB0aGlzLnBhcnNlZC5hcmd2LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpc1trVW5mcmVlemVdKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZWQgPSB0bXBQYXJzZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKSlcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBcImZcIiksIHBhcnNlZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzW2tVbmZyZWV6ZV0oKTtcbiAgICAgICAgICAgIHRoaXMucGFyc2VkID0gdG1wUGFyc2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICAgIHBhcnNlQXN5bmMoYXJncywgc2hvcnRDaXJjdWl0LCBfcGFyc2VGbikge1xuICAgICAgICBjb25zdCBtYXliZVByb21pc2UgPSB0aGlzLnBhcnNlKGFyZ3MsIHNob3J0Q2lyY3VpdCwgX3BhcnNlRm4pO1xuICAgICAgICByZXR1cm4gIWlzUHJvbWlzZShtYXliZVByb21pc2UpXG4gICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZShtYXliZVByb21pc2UpXG4gICAgICAgICAgICA6IG1heWJlUHJvbWlzZTtcbiAgICB9XG4gICAgcGFyc2VTeW5jKGFyZ3MsIHNob3J0Q2lyY3VpdCwgX3BhcnNlRm4pIHtcbiAgICAgICAgY29uc3QgbWF5YmVQcm9taXNlID0gdGhpcy5wYXJzZShhcmdzLCBzaG9ydENpcmN1aXQsIF9wYXJzZUZuKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShtYXliZVByb21pc2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKCcucGFyc2VTeW5jKCkgbXVzdCBub3QgYmUgdXNlZCB3aXRoIGFzeW5jaHJvbm91cyBidWlsZGVycywgaGFuZGxlcnMsIG9yIG1pZGRsZXdhcmUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICBwYXJzZXJDb25maWd1cmF0aW9uKGNvbmZpZykge1xuICAgICAgICBhcmdzZXJ0KCc8b2JqZWN0PicsIFtjb25maWddLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcsIGNvbmZpZywgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcGtnQ29uZihrZXksIHJvb3RQYXRoKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxzdHJpbmc+IFtzdHJpbmddJywgW2tleSwgcm9vdFBhdGhdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgbGV0IGNvbmYgPSBudWxsO1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzW2tQa2dVcF0ocm9vdFBhdGggfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jd2QsIFwiZlwiKSk7XG4gICAgICAgIGlmIChvYmpba2V5XSAmJiB0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25mID0gYXBwbHlFeHRlbmRzKG9ialtrZXldLCByb290UGF0aCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpLCB0aGlzW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpWydkZWVwLW1lcmdlLWNvbmZpZyddIHx8IGZhbHNlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzID0gKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmNvbmZpZ09iamVjdHMgfHwgW10pLmNvbmNhdChjb25mKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcG9zaXRpb25hbChrZXksIG9wdHMpIHtcbiAgICAgICAgYXJnc2VydCgnPHN0cmluZz4gPG9iamVjdD4nLCBba2V5LCBvcHRzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZE9wdHMgPSBbXG4gICAgICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICAgICAnZGVmYXVsdERlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICdpbXBsaWVzJyxcbiAgICAgICAgICAgICdub3JtYWxpemUnLFxuICAgICAgICAgICAgJ2Nob2ljZXMnLFxuICAgICAgICAgICAgJ2NvbmZsaWN0cycsXG4gICAgICAgICAgICAnY29lcmNlJyxcbiAgICAgICAgICAgICd0eXBlJyxcbiAgICAgICAgICAgICdkZXNjcmliZScsXG4gICAgICAgICAgICAnZGVzYycsXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2FsaWFzJyxcbiAgICAgICAgXTtcbiAgICAgICAgb3B0cyA9IG9iakZpbHRlcihvcHRzLCAoaywgdikgPT4ge1xuICAgICAgICAgICAgaWYgKGsgPT09ICd0eXBlJyAmJiAhWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXS5pbmNsdWRlcyh2KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkT3B0cy5pbmNsdWRlcyhrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZ1bGxDb21tYW5kID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb250ZXh0LCBcImZcIikuZnVsbENvbW1hbmRzW19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29udGV4dCwgXCJmXCIpLmZ1bGxDb21tYW5kcy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgcGFyc2VPcHRpb25zID0gZnVsbENvbW1hbmRcbiAgICAgICAgICAgID8gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuY21kVG9QYXJzZU9wdGlvbnMoZnVsbENvbW1hbmQpXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBhcnJheTogW10sXG4gICAgICAgICAgICAgICAgYWxpYXM6IHt9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHt9LFxuICAgICAgICAgICAgICAgIGRlbWFuZDoge30sXG4gICAgICAgICAgICB9O1xuICAgICAgICBvYmplY3RLZXlzKHBhcnNlT3B0aW9ucykuZm9yRWFjaChwayA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZU9wdGlvbiA9IHBhcnNlT3B0aW9uc1twa107XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZU9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VPcHRpb24uaW5kZXhPZihrZXkpICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgb3B0c1twa10gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlT3B0aW9uW2tleV0gJiYgIShwayBpbiBvcHRzKSlcbiAgICAgICAgICAgICAgICAgICAgb3B0c1twa10gPSBwYXJzZU9wdGlvbltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncm91cChrZXksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5nZXRQb3NpdGlvbmFsR3JvdXBOYW1lKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb24oa2V5LCBvcHRzKTtcbiAgICB9XG4gICAgcmVjb21tZW5kQ29tbWFuZHMocmVjb21tZW5kID0gdHJ1ZSkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbcmVjb21tZW5kXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcmVjb21tZW5kQ29tbWFuZHMsIHJlY29tbWVuZCwgXCJmXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVxdWlyZWQoa2V5cywgbWF4LCBtc2cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVtYW5kKGtleXMsIG1heCwgbXNnKTtcbiAgICB9XG4gICAgcmVxdWlyZShrZXlzLCBtYXgsIG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kZW1hbmQoa2V5cywgbWF4LCBtc2cpO1xuICAgIH1cbiAgICByZXF1aXJlc0FyZyhrZXlzKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxhcnJheXxzdHJpbmd8b2JqZWN0PiBbbnVtYmVyXScsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5cyA9PT0gJ3N0cmluZycgJiYgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikubmFyZ1trZXlzXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRTaW5nbGVWYWx1ZURpY3Rpb25hcnldKHRoaXMucmVxdWlyZXNBcmcuYmluZCh0aGlzKSwgJ25hcmcnLCBrZXlzLCBOYU4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93Q29tcGxldGlvblNjcmlwdCgkMCwgY21kKSB7XG4gICAgICAgIGFyZ3NlcnQoJ1tzdHJpbmddIFtzdHJpbmddJywgWyQwLCBjbWRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgJDAgPSAkMCB8fCB0aGlzLiQwO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2xvZ2dlciwgXCJmXCIpLmxvZyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZW5lcmF0ZUNvbXBsZXRpb25TY3JpcHQoJDAsIGNtZCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikgfHwgJ2NvbXBsZXRpb24nKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaG93SGVscChsZXZlbCkge1xuICAgICAgICBhcmdzZXJ0KCdbc3RyaW5nfGZ1bmN0aW9uXScsIFtsZXZlbF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5oYXNDYWNoZWRIZWxwTWVzc2FnZSgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2UgPSB0aGlzW2tSdW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kc10oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcm9jZXNzQXJncywgXCJmXCIpLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvbWlzZShwYXJzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHAobGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYnVpbGRlclJlc3BvbnNlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucnVuRGVmYXVsdEJ1aWxkZXJPbih0aGlzKTtcbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UoYnVpbGRlclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXJSZXNwb25zZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnNob3dIZWxwKGxldmVsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuc2hvd0hlbHAobGV2ZWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2NyaXB0TmFtZShzY3JpcHROYW1lKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tU2NyaXB0TmFtZSA9IHRydWU7XG4gICAgICAgIHRoaXMuJDAgPSBzY3JpcHROYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2hvd0hlbHBPbkZhaWwoZW5hYmxlZCwgbWVzc2FnZSkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbnxzdHJpbmddIFtzdHJpbmddJywgW2VuYWJsZWQsIG1lc3NhZ2VdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnNob3dIZWxwT25GYWlsKGVuYWJsZWQsIG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2hvd1ZlcnNpb24obGV2ZWwpIHtcbiAgICAgICAgYXJnc2VydCgnW3N0cmluZ3xmdW5jdGlvbl0nLCBbbGV2ZWxdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnNob3dWZXJzaW9uKGxldmVsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNraXBWYWxpZGF0aW9uKGtleXMpIHtcbiAgICAgICAgYXJnc2VydCgnPGFycmF5fHN0cmluZz4nLCBba2V5c10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnRBcnJheV0oJ3NraXBWYWxpZGF0aW9uJywga2V5cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdHJpY3QoZW5hYmxlZCkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdCwgZW5hYmxlZCAhPT0gZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmljdENvbW1hbmRzKGVuYWJsZWQpIHtcbiAgICAgICAgYXJnc2VydCgnW2Jvb2xlYW5dJywgW2VuYWJsZWRdLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcywgZW5hYmxlZCAhPT0gZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cmljdE9wdGlvbnMoZW5hYmxlZCkge1xuICAgICAgICBhcmdzZXJ0KCdbYm9vbGVhbl0nLCBbZW5hYmxlZF0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIGVuYWJsZWQgIT09IGZhbHNlLCBcImZcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdHJpbmcoa2V5cykge1xuICAgICAgICBhcmdzZXJ0KCc8YXJyYXl8c3RyaW5nPicsIFtrZXlzXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludEFycmF5XSgnc3RyaW5nJywga2V5cyk7XG4gICAgICAgIHRoaXNba1RyYWNrTWFudWFsbHlTZXRLZXlzXShrZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRlcm1pbmFsV2lkdGgoKSB7XG4gICAgICAgIGFyZ3NlcnQoW10sIDApO1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5zdGRDb2x1bW5zO1xuICAgIH1cbiAgICB1cGRhdGVMb2NhbGUob2JqKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVN0cmluZ3Mob2JqKTtcbiAgICB9XG4gICAgdXBkYXRlU3RyaW5ncyhvYmopIHtcbiAgICAgICAgYXJnc2VydCgnPG9iamVjdD4nLCBbb2JqXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZGV0ZWN0TG9jYWxlLCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS55MThuLnVwZGF0ZUxvY2FsZShvYmopO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdXNhZ2UobXNnLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlcikge1xuICAgICAgICBhcmdzZXJ0KCc8c3RyaW5nfG51bGx8dW5kZWZpbmVkPiBbc3RyaW5nfGJvb2xlYW5dIFtmdW5jdGlvbnxvYmplY3RdIFtmdW5jdGlvbl0nLCBbbXNnLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlcl0sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXNzZXJ0Tm90U3RyaWN0RXF1YWwobXNnLCBudWxsLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSk7XG4gICAgICAgICAgICBpZiAoKG1zZyB8fCAnJykubWF0Y2goL15cXCQwKCB8JCkvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQobXNnLCBkZXNjcmlwdGlvbiwgYnVpbGRlciwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKCcudXNhZ2UoKSBkZXNjcmlwdGlvbiBtdXN0IHN0YXJ0IHdpdGggJDAgaWYgYmVpbmcgdXNlZCBhcyBhbGlhcyBmb3IgLmNvbW1hbmQoKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnVzYWdlKG1zZyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2FnZUNvbmZpZ3VyYXRpb24oY29uZmlnKSB7XG4gICAgICAgIGFyZ3NlcnQoJzxvYmplY3Q+JywgW2NvbmZpZ10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlQ29uZmlnLCBjb25maWcsIFwiZlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZlcnNpb24ob3B0LCBtc2csIHZlcikge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmVyc2lvbk9wdCA9ICd2ZXJzaW9uJztcbiAgICAgICAgYXJnc2VydCgnW2Jvb2xlYW58c3RyaW5nXSBbc3RyaW5nXSBbc3RyaW5nXScsIFtvcHQsIG1zZywgdmVyXSwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSkge1xuICAgICAgICAgICAgdGhpc1trRGVsZXRlRnJvbVBhcnNlckhpbnRPYmplY3RdKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmVyc2lvbk9wdCwgXCJmXCIpKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS52ZXJzaW9uKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIG51bGwsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdmVyID0gdGhpc1trR3Vlc3NWZXJzaW9uXSgpO1xuICAgICAgICAgICAgb3B0ID0gZGVmYXVsdFZlcnNpb25PcHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKG9wdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZlciA9IG9wdDtcbiAgICAgICAgICAgIG9wdCA9IGRlZmF1bHRWZXJzaW9uT3B0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHZlciA9IG1zZztcbiAgICAgICAgICAgIG1zZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnID8gb3B0IDogZGVmYXVsdFZlcnNpb25PcHQsIFwiZlwiKTtcbiAgICAgICAgbXNnID0gbXNnIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5kZWZlclkxOG5Mb29rdXAoJ1Nob3cgdmVyc2lvbiBudW1iZXInKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV91c2FnZSwgXCJmXCIpLnZlcnNpb24odmVyIHx8IHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuYm9vbGVhbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LCBcImZcIiksIG1zZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB3cmFwKGNvbHMpIHtcbiAgICAgICAgYXJnc2VydCgnPG51bWJlcnxudWxsfHVuZGVmaW5lZD4nLCBbY29sc10sIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikud3JhcChjb2xzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFsoX1lhcmdzSW5zdGFuY2VfY29tbWFuZCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2N3ZCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2NvbnRleHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9kZWZhdWx0U2hvd0hpZGRlbk9wdCA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2V4aXRFcnJvciA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2RldGVjdExvY2FsZSA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2VtaXR0ZWRXYXJuaW5ncyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfZnJvemVucyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfaXNHbG9iYWxDb250ZXh0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3BhcmVudFJlcXVpcmUgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZXJDb25maWcgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcGtncyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3ByZXNlcnZlZEdyb3VwcyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfcmVjb21tZW5kQ29tbWFuZHMgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zaGltID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0ID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0Q29tbWFuZHMgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zID0gbmV3IFdlYWtNYXAoKSwgX1lhcmdzSW5zdGFuY2VfdXNhZ2UgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV91c2FnZUNvbmZpZyA9IG5ldyBXZWFrTWFwKCksIF9ZYXJnc0luc3RhbmNlX3ZlcnNpb25PcHQgPSBuZXcgV2Vha01hcCgpLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uID0gbmV3IFdlYWtNYXAoKSwga0NvcHlEb3VibGVEYXNoKV0oYXJndikge1xuICAgICAgICBpZiAoIWFyZ3YuXyB8fCAhYXJndlsnLS0nXSlcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICBhcmd2Ll8ucHVzaC5hcHBseShhcmd2Ll8sIGFyZ3ZbJy0tJ10pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGVsZXRlIGFyZ3ZbJy0tJ107XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9lcnIpIHsgfVxuICAgICAgICByZXR1cm4gYXJndjtcbiAgICB9XG4gICAgW2tDcmVhdGVMb2dnZXJdKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpc1trSGFzUGFyc2VDYWxsYmFja10oKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgXCJmXCIpICsgJ1xcbicsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSArIGFyZ3Muam9pbignICcpLCBcImZcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzW2tIYXNQYXJzZUNhbGxiYWNrXSgpKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIFwiZlwiKSArICdcXG4nLCBcImZcIik7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIikgKyBhcmdzLmpvaW4oJyAnKSwgXCJmXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgW2tEZWxldGVGcm9tUGFyc2VySGludE9iamVjdF0ob3B0aW9uS2V5KSB7XG4gICAgICAgIG9iamVjdEtleXMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikpLmZvckVhY2goKGhpbnRLZXkpID0+IHtcbiAgICAgICAgICAgIGlmICgoKGtleSkgPT4ga2V5ID09PSAnY29uZmlnT2JqZWN0cycpKGhpbnRLZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGhpbnQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVtoaW50S2V5XTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhpbnQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhpbnQuaW5jbHVkZXMob3B0aW9uS2V5KSlcbiAgICAgICAgICAgICAgICAgICAgaGludC5zcGxpY2UoaGludC5pbmRleE9mKG9wdGlvbktleSksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGhpbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGhpbnRbb3B0aW9uS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZ2V0RGVzY3JpcHRpb25zKClbb3B0aW9uS2V5XTtcbiAgICB9XG4gICAgW2tFbWl0V2FybmluZ10od2FybmluZywgdHlwZSwgZGVkdXBsaWNhdGlvbklkKSB7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9lbWl0dGVkV2FybmluZ3MsIFwiZlwiKVtkZWR1cGxpY2F0aW9uSWRdKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmVtaXRXYXJuaW5nKHdhcm5pbmcsIHR5cGUpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9lbWl0dGVkV2FybmluZ3MsIFwiZlwiKVtkZWR1cGxpY2F0aW9uSWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBba0ZyZWV6ZV0oKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZnJvemVucywgXCJmXCIpLnB1c2goe1xuICAgICAgICAgICAgb3B0aW9uczogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIiksXG4gICAgICAgICAgICBjb25maWdPYmplY3RzOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzLnNsaWNlKDApLFxuICAgICAgICAgICAgZXhpdFByb2Nlc3M6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSxcbiAgICAgICAgICAgIGdyb3VwczogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIFwiZlwiKSxcbiAgICAgICAgICAgIHN0cmljdDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIFwiZlwiKSxcbiAgICAgICAgICAgIHN0cmljdENvbW1hbmRzOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdENvbW1hbmRzLCBcImZcIiksXG4gICAgICAgICAgICBzdHJpY3RPcHRpb25zOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIFwiZlwiKSxcbiAgICAgICAgICAgIGNvbXBsZXRpb25Db21tYW5kOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIiksXG4gICAgICAgICAgICBvdXRwdXQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3V0cHV0LCBcImZcIiksXG4gICAgICAgICAgICBleGl0RXJyb3I6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdEVycm9yLCBcImZcIiksXG4gICAgICAgICAgICBoYXNPdXRwdXQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCBcImZcIiksXG4gICAgICAgICAgICBwYXJzZWQ6IHRoaXMucGFyc2VkLFxuICAgICAgICAgICAgcGFyc2VGbjogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBcImZcIiksXG4gICAgICAgICAgICBwYXJzZUNvbnRleHQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBcImZcIiksXG4gICAgICAgIH0pO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZnJlZXplKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5mcmVlemUoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuZnJlZXplKCk7XG4gICAgfVxuICAgIFtrR2V0RG9sbGFyWmVyb10oKSB7XG4gICAgICAgIGxldCAkMCA9ICcnO1xuICAgICAgICBsZXQgZGVmYXVsdCQwO1xuICAgICAgICBpZiAoL1xcYihub2RlfGlvanN8ZWxlY3Ryb24pKFxcLmV4ZSk/JC8udGVzdChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wcm9jZXNzLmFyZ3YoKVswXSkpIHtcbiAgICAgICAgICAgIGRlZmF1bHQkMCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLnByb2Nlc3MuYXJndigpLnNsaWNlKDEsIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVmYXVsdCQwID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5hcmd2KCkuc2xpY2UoMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgJDAgPSBkZWZhdWx0JDBcbiAgICAgICAgICAgIC5tYXAoeCA9PiB7XG4gICAgICAgICAgICBjb25zdCBiID0gdGhpc1trUmViYXNlXShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2N3ZCwgXCJmXCIpLCB4KTtcbiAgICAgICAgICAgIHJldHVybiB4Lm1hdGNoKC9eKFxcL3woW2EtekEtWl06KT9cXFxcKS8pICYmIGIubGVuZ3RoIDwgeC5sZW5ndGggPyBiIDogeDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJylcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ18nKSAmJlxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0UHJvY2Vzc0FyZ3ZCaW4oKSA9PT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0RW52KCdfJykpIHtcbiAgICAgICAgICAgICQwID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIilcbiAgICAgICAgICAgICAgICAuZ2V0RW52KCdfJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wYXRoLmRpcm5hbWUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucHJvY2Vzcy5leGVjUGF0aCgpKX0vYCwgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkMDtcbiAgICB9XG4gICAgW2tHZXRQYXJzZXJDb25maWd1cmF0aW9uXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VyQ29uZmlnLCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0VXNhZ2VDb25maWd1cmF0aW9uXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2VDb25maWcsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHdWVzc0xvY2FsZV0oKSB7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9kZXRlY3RMb2NhbGUsIFwiZlwiKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0RW52KCdMQ19BTEwnKSB8fFxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0RW52KCdMQ19NRVNTQUdFUycpIHx8XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5nZXRFbnYoJ0xBTkcnKSB8fFxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZ2V0RW52KCdMQU5HVUFHRScpIHx8XG4gICAgICAgICAgICAnZW5fVVMnO1xuICAgICAgICB0aGlzLmxvY2FsZShsb2NhbGUucmVwbGFjZSgvWy46XS4qLywgJycpKTtcbiAgICB9XG4gICAgW2tHdWVzc1ZlcnNpb25dKCkge1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzW2tQa2dVcF0oKTtcbiAgICAgICAgcmV0dXJuIG9iai52ZXJzaW9uIHx8ICd1bmtub3duJztcbiAgICB9XG4gICAgW2tQYXJzZVBvc2l0aW9uYWxOdW1iZXJzXShhcmd2KSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd2WyctLSddID8gYXJndlsnLS0nXSA6IGFyZ3YuXztcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGFyZzsgKGFyZyA9IGFyZ3NbaV0pICE9PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpLlBhcnNlci5sb29rc0xpa2VOdW1iZXIoYXJnKSAmJlxuICAgICAgICAgICAgICAgIE51bWJlci5pc1NhZmVJbnRlZ2VyKE1hdGguZmxvb3IocGFyc2VGbG9hdChgJHthcmd9YCkpKSkge1xuICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBOdW1iZXIoYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJndjtcbiAgICB9XG4gICAgW2tQa2dVcF0ocm9vdFBhdGgpIHtcbiAgICAgICAgY29uc3QgbnBhdGggPSByb290UGF0aCB8fCAnKic7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF0pXG4gICAgICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wa2dzLCBcImZcIilbbnBhdGhdO1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgc3RhcnREaXIgPSByb290UGF0aCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5tYWluRmlsZW5hbWU7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucGF0aC5leHRuYW1lKHN0YXJ0RGlyKSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0RGlyID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucGF0aC5kaXJuYW1lKHN0YXJ0RGlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBrZ0pzb25QYXRoID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikuZmluZFVwKHN0YXJ0RGlyLCAoZGlyLCBuYW1lcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lcy5pbmNsdWRlcygncGFja2FnZS5qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwYWNrYWdlLmpzb24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydE5vdFN0cmljdEVxdWFsKHBrZ0pzb25QYXRoLCB1bmRlZmluZWQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKTtcbiAgICAgICAgICAgIG9iaiA9IEpTT04ucGFyc2UoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikucmVhZEZpbGVTeW5jKHBrZ0pzb25QYXRoLCAndXRmOCcpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX25vb3ApIHsgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF0gPSBvYmogfHwge307XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BrZ3MsIFwiZlwiKVtucGF0aF07XG4gICAgfVxuICAgIFtrUG9wdWxhdGVQYXJzZXJIaW50QXJyYXldKHR5cGUsIGtleXMpIHtcbiAgICAgICAga2V5cyA9IFtdLmNvbmNhdChrZXlzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBrZXkgPSB0aGlzW2tTYW5pdGl6ZUtleV0oa2V5KTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW3R5cGVdLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFtrUG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXNba1BvcHVsYXRlUGFyc2VySGludERpY3Rpb25hcnldKGJ1aWxkZXIsIHR5cGUsIGtleSwgdmFsdWUsICh0eXBlLCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVt0eXBlXVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBba1BvcHVsYXRlUGFyc2VySGludEFycmF5RGljdGlvbmFyeV0oYnVpbGRlciwgdHlwZSwga2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzW2tQb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlLCAodHlwZSwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIilbdHlwZV1ba2V5XSA9IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVt0eXBlXVtrZXldIHx8IFtdKS5jb25jYXQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgW2tQb3B1bGF0ZVBhcnNlckhpbnREaWN0aW9uYXJ5XShidWlsZGVyLCB0eXBlLCBrZXksIHZhbHVlLCBzaW5nbGVLZXlIYW5kbGVyKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICAgICAgICAgIGtleS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIoaywgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKChrZXkpID0+IHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKShrZXkpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgb2Ygb2JqZWN0S2V5cyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRlcihrLCBrZXlba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2luZ2xlS2V5SGFuZGxlcih0eXBlLCB0aGlzW2tTYW5pdGl6ZUtleV0oa2V5KSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFtrU2FuaXRpemVLZXldKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJylcbiAgICAgICAgICAgIHJldHVybiAnX19fcHJvdG9fX18nO1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgICBba1NldEtleV0oa2V5LCBzZXQpIHtcbiAgICAgICAgdGhpc1trUG9wdWxhdGVQYXJzZXJIaW50U2luZ2xlVmFsdWVEaWN0aW9uYXJ5XSh0aGlzW2tTZXRLZXldLmJpbmQodGhpcyksICdrZXknLCBrZXksIHNldCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBba1VuZnJlZXplXSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX207XG4gICAgICAgIGNvbnN0IGZyb3plbiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZnJvemVucywgXCJmXCIpLnBvcCgpO1xuICAgICAgICBhc3NlcnROb3RTdHJpY3RFcXVhbChmcm96ZW4sIHVuZGVmaW5lZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpO1xuICAgICAgICBsZXQgY29uZmlnT2JqZWN0cztcbiAgICAgICAgKF9hID0gdGhpcywgX2IgPSB0aGlzLCBfYyA9IHRoaXMsIF9kID0gdGhpcywgX2UgPSB0aGlzLCBfZiA9IHRoaXMsIF9nID0gdGhpcywgX2ggPSB0aGlzLCBfaiA9IHRoaXMsIF9rID0gdGhpcywgX2wgPSB0aGlzLCBfbSA9IHRoaXMsIHtcbiAgICAgICAgICAgIG9wdGlvbnM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9hLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgY29uZmlnT2JqZWN0cyxcbiAgICAgICAgICAgIGV4aXRQcm9jZXNzOiAoeyBzZXQgdmFsdWUoX28pIHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldChfYiwgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBncm91cHM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9jLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBvdXRwdXQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9kLCBfWWFyZ3NJbnN0YW5jZV9vdXRwdXQsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBleGl0RXJyb3I6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9lLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBoYXNPdXRwdXQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9mLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIF9vLCBcImZcIik7IH0gfSkudmFsdWUsXG4gICAgICAgICAgICBwYXJzZWQ6IHRoaXMucGFyc2VkLFxuICAgICAgICAgICAgc3RyaWN0OiAoeyBzZXQgdmFsdWUoX28pIHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldChfZywgX1lhcmdzSW5zdGFuY2Vfc3RyaWN0LCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgc3RyaWN0Q29tbWFuZHM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9oLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcywgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIHN0cmljdE9wdGlvbnM6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9qLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RPcHRpb25zLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgY29tcGxldGlvbkNvbW1hbmQ6ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9rLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgX28sIFwiZlwiKTsgfSB9KS52YWx1ZSxcbiAgICAgICAgICAgIHBhcnNlRm46ICh7IHNldCB2YWx1ZShfbykgeyBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KF9sLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUZuLCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICAgICAgcGFyc2VDb250ZXh0OiAoeyBzZXQgdmFsdWUoX28pIHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldChfbSwgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBfbywgXCJmXCIpOyB9IH0pLnZhbHVlLFxuICAgICAgICB9ID0gZnJvemVuKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlnT2JqZWN0cyA9IGNvbmZpZ09iamVjdHM7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS51bmZyZWV6ZSgpO1xuICAgIH1cbiAgICBba1ZhbGlkYXRlQXN5bmNdKHZhbGlkYXRpb24sIGFyZ3YpIHtcbiAgICAgICAgcmV0dXJuIG1heWJlQXN5bmNSZXN1bHQoYXJndiwgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24ocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbnRlcm5hbE1ldGhvZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRDb21tYW5kSW5zdGFuY2U6IHRoaXNba0dldENvbW1hbmRJbnN0YW5jZV0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldENvbnRleHQ6IHRoaXNba0dldENvbnRleHRdLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRIYXNPdXRwdXQ6IHRoaXNba0dldEhhc091dHB1dF0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldExvZ2dlckluc3RhbmNlOiB0aGlzW2tHZXRMb2dnZXJJbnN0YW5jZV0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFBhcnNlQ29udGV4dDogdGhpc1trR2V0UGFyc2VDb250ZXh0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0UGFyc2VyQ29uZmlndXJhdGlvbjogdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFVzYWdlQ29uZmlndXJhdGlvbjogdGhpc1trR2V0VXNhZ2VDb25maWd1cmF0aW9uXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0VXNhZ2VJbnN0YW5jZTogdGhpc1trR2V0VXNhZ2VJbnN0YW5jZV0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFZhbGlkYXRpb25JbnN0YW5jZTogdGhpc1trR2V0VmFsaWRhdGlvbkluc3RhbmNlXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaGFzUGFyc2VDYWxsYmFjazogdGhpc1trSGFzUGFyc2VDYWxsYmFja10uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGlzR2xvYmFsQ29udGV4dDogdGhpc1trSXNHbG9iYWxDb250ZXh0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcG9zdFByb2Nlc3M6IHRoaXNba1Bvc3RQcm9jZXNzXS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcmVzZXQ6IHRoaXNba1Jlc2V0XS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcnVuVmFsaWRhdGlvbjogdGhpc1trUnVuVmFsaWRhdGlvbl0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHJ1bllhcmdzUGFyc2VyQW5kRXhlY3V0ZUNvbW1hbmRzOiB0aGlzW2tSdW5ZYXJnc1BhcnNlckFuZEV4ZWN1dGVDb21tYW5kc10uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHNldEhhc091dHB1dDogdGhpc1trU2V0SGFzT3V0cHV0XS5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBba0dldENvbW1hbmRJbnN0YW5jZV0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tHZXRDb250ZXh0XSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29udGV4dCwgXCJmXCIpO1xuICAgIH1cbiAgICBba0dldEhhc091dHB1dF0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgXCJmXCIpO1xuICAgIH1cbiAgICBba0dldExvZ2dlckluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0UGFyc2VDb250ZXh0XSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcGFyc2VDb250ZXh0LCBcImZcIikgfHwge307XG4gICAgfVxuICAgIFtrR2V0VXNhZ2VJbnN0YW5jZV0oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIik7XG4gICAgfVxuICAgIFtrR2V0VmFsaWRhdGlvbkluc3RhbmNlXSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpO1xuICAgIH1cbiAgICBba0hhc1BhcnNlQ2FsbGJhY2tdKCkge1xuICAgICAgICByZXR1cm4gISFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3BhcnNlRm4sIFwiZlwiKTtcbiAgICB9XG4gICAgW2tJc0dsb2JhbENvbnRleHRdKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9pc0dsb2JhbENvbnRleHQsIFwiZlwiKTtcbiAgICB9XG4gICAgW2tQb3N0UHJvY2Vzc10oYXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCBjYWxsZWRGcm9tQ29tbWFuZCwgcnVuR2xvYmFsTWlkZGxld2FyZSkge1xuICAgICAgICBpZiAoY2FsbGVkRnJvbUNvbW1hbmQpXG4gICAgICAgICAgICByZXR1cm4gYXJndjtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShhcmd2KSlcbiAgICAgICAgICAgIHJldHVybiBhcmd2O1xuICAgICAgICBpZiAoIXBvcHVsYXRlRG91YmxlRGFzaCkge1xuICAgICAgICAgICAgYXJndiA9IHRoaXNba0NvcHlEb3VibGVEYXNoXShhcmd2KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZVBvc2l0aW9uYWxOdW1iZXJzID0gdGhpc1trR2V0UGFyc2VyQ29uZmlndXJhdGlvbl0oKVsncGFyc2UtcG9zaXRpb25hbC1udW1iZXJzJ10gfHxcbiAgICAgICAgICAgIHRoaXNba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKClbJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyddID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwYXJzZVBvc2l0aW9uYWxOdW1iZXJzKSB7XG4gICAgICAgICAgICBhcmd2ID0gdGhpc1trUGFyc2VQb3NpdGlvbmFsTnVtYmVyc10oYXJndik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bkdsb2JhbE1pZGRsZXdhcmUpIHtcbiAgICAgICAgICAgIGFyZ3YgPSBhcHBseU1pZGRsZXdhcmUoYXJndiwgdGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikuZ2V0TWlkZGxld2FyZSgpLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3Y7XG4gICAgfVxuICAgIFtrUmVzZXRdKGFsaWFzZXMgPSB7fSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpIHx8IHt9LCBcImZcIik7XG4gICAgICAgIGNvbnN0IHRtcE9wdGlvbnMgPSB7fTtcbiAgICAgICAgdG1wT3B0aW9ucy5sb2NhbCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmxvY2FsIHx8IFtdO1xuICAgICAgICB0bXBPcHRpb25zLmNvbmZpZ09iamVjdHMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWdPYmplY3RzIHx8IFtdO1xuICAgICAgICBjb25zdCBsb2NhbExvb2t1cCA9IHt9O1xuICAgICAgICB0bXBPcHRpb25zLmxvY2FsLmZvckVhY2gobCA9PiB7XG4gICAgICAgICAgICBsb2NhbExvb2t1cFtsXSA9IHRydWU7XG4gICAgICAgICAgICAoYWxpYXNlc1tsXSB8fCBbXSkuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhbExvb2t1cFthXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wcmVzZXJ2ZWRHcm91cHMsIFwiZlwiKSwgT2JqZWN0LmtleXMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIFwiZlwiKSkucmVkdWNlKChhY2MsIGdyb3VwTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ3JvdXBzLCBcImZcIilbZ3JvdXBOYW1lXS5maWx0ZXIoa2V5ID0+ICEoa2V5IGluIGxvY2FsTG9va3VwKSk7XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWNjW2dyb3VwTmFtZV0gPSBrZXlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9ncm91cHMsIHt9LCBcImZcIik7XG4gICAgICAgIGNvbnN0IGFycmF5T3B0aW9ucyA9IFtcbiAgICAgICAgICAgICdhcnJheScsXG4gICAgICAgICAgICAnYm9vbGVhbicsXG4gICAgICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgICAgICdza2lwVmFsaWRhdGlvbicsXG4gICAgICAgICAgICAnY291bnQnLFxuICAgICAgICAgICAgJ25vcm1hbGl6ZScsXG4gICAgICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgICAgICdoaWRkZW5PcHRpb25zJyxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgb2JqZWN0T3B0aW9ucyA9IFtcbiAgICAgICAgICAgICduYXJnJyxcbiAgICAgICAgICAgICdrZXknLFxuICAgICAgICAgICAgJ2FsaWFzJyxcbiAgICAgICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgICAgICdkZWZhdWx0RGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ2NvbmZpZycsXG4gICAgICAgICAgICAnY2hvaWNlcycsXG4gICAgICAgICAgICAnZGVtYW5kZWRPcHRpb25zJyxcbiAgICAgICAgICAgICdkZW1hbmRlZENvbW1hbmRzJyxcbiAgICAgICAgICAgICdkZXByZWNhdGVkT3B0aW9ucycsXG4gICAgICAgIF07XG4gICAgICAgIGFycmF5T3B0aW9ucy5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgdG1wT3B0aW9uc1trXSA9IChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKVtrXSB8fCBbXSkuZmlsdGVyKChrKSA9PiAhbG9jYWxMb29rdXBba10pO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqZWN0T3B0aW9ucy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICB0bXBPcHRpb25zW2tdID0gb2JqRmlsdGVyKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpW2tdLCBrID0+ICFsb2NhbExvb2t1cFtrXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0bXBPcHRpb25zLmVudlByZWZpeCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLmVudlByZWZpeDtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCB0bXBPcHRpb25zLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKVxuICAgICAgICAgICAgPyBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikucmVzZXQobG9jYWxMb29rdXApXG4gICAgICAgICAgICA6IFVzYWdlKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfc2hpbSwgXCJmXCIpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpXG4gICAgICAgICAgICA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnJlc2V0KGxvY2FsTG9va3VwKVxuICAgICAgICAgICAgOiBWYWxpZGF0aW9uKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIilcbiAgICAgICAgICAgID8gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikucmVzZXQoKVxuICAgICAgICAgICAgOiBDb21tYW5kKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSksIFwiZlwiKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKSlcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgQ29tcGxldGlvbih0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9nbG9iYWxNaWRkbGV3YXJlLCBcImZcIikucmVzZXQoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgbnVsbCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX291dHB1dCwgJycsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0RXJyb3IsIG51bGwsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oYXNPdXRwdXQsIGZhbHNlLCBcImZcIik7XG4gICAgICAgIHRoaXMucGFyc2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBba1JlYmFzZV0oYmFzZSwgZGlyKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5wYXRoLnJlbGF0aXZlKGJhc2UsIGRpcik7XG4gICAgfVxuICAgIFtrUnVuWWFyZ3NQYXJzZXJBbmRFeGVjdXRlQ29tbWFuZHNdKGFyZ3MsIHNob3J0Q2lyY3VpdCwgY2FsbGVkRnJvbUNvbW1hbmQsIGNvbW1hbmRJbmRleCA9IDAsIGhlbHBPbmx5ID0gZmFsc2UpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICBsZXQgc2tpcFZhbGlkYXRpb24gPSAhIWNhbGxlZEZyb21Db21tYW5kIHx8IGhlbHBPbmx5O1xuICAgICAgICBhcmdzID0gYXJncyB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3Byb2Nlc3NBcmdzLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLl9fID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zaGltLCBcImZcIikueTE4bi5fXztcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlndXJhdGlvbiA9IHRoaXNba0dldFBhcnNlckNvbmZpZ3VyYXRpb25dKCk7XG4gICAgICAgIGNvbnN0IHBvcHVsYXRlRG91YmxlRGFzaCA9ICEhX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikuY29uZmlndXJhdGlvblsncG9wdWxhdGUtLSddO1xuICAgICAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX29wdGlvbnMsIFwiZlwiKS5jb25maWd1cmF0aW9uLCB7XG4gICAgICAgICAgICAncG9wdWxhdGUtLSc6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3NoaW0sIFwiZlwiKS5QYXJzZXIuZGV0YWlsZWQoYXJncywgT2JqZWN0LmFzc2lnbih7fSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIiksIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHsgJ3BhcnNlLXBvc2l0aW9uYWwtbnVtYmVycyc6IGZhbHNlLCAuLi5jb25maWcgfSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBhcmd2ID0gT2JqZWN0LmFzc2lnbihwYXJzZWQuYXJndiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9wYXJzZUNvbnRleHQsIFwiZlwiKSk7XG4gICAgICAgIGxldCBhcmd2UHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgYWxpYXNlcyA9IHBhcnNlZC5hbGlhc2VzO1xuICAgICAgICBsZXQgaGVscE9wdFNldCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmVyc2lvbk9wdFNldCA9IGZhbHNlO1xuICAgICAgICBPYmplY3Qua2V5cyhhcmd2KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKSAmJiBhcmd2W2tleV0pIHtcbiAgICAgICAgICAgICAgICBoZWxwT3B0U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92ZXJzaW9uT3B0LCBcImZcIikgJiYgYXJndltrZXldKSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbk9wdFNldCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhcmd2LiQwID0gdGhpcy4kMDtcbiAgICAgICAgdGhpcy5wYXJzZWQgPSBwYXJzZWQ7XG4gICAgICAgIGlmIChjb21tYW5kSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5jbGVhckNhY2hlZEhlbHBNZXNzYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXNba0d1ZXNzTG9jYWxlXSgpO1xuICAgICAgICAgICAgaWYgKHNob3J0Q2lyY3VpdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tQb3N0UHJvY2Vzc10oYXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCAhIWNhbGxlZEZyb21Db21tYW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9oZWxwT3B0LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWxwQ21kcyA9IFtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hlbHBPcHQsIFwiZlwiKV1cbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChhbGlhc2VzW19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGVscE9wdCwgXCJmXCIpXSB8fCBbXSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihrID0+IGsubGVuZ3RoID4gMSk7XG4gICAgICAgICAgICAgICAgaWYgKGhlbHBDbWRzLmluY2x1ZGVzKCcnICsgYXJndi5fW2FyZ3YuXy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJndi5fLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBoZWxwT3B0U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2lzR2xvYmFsQ29udGV4dCwgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJLZXlzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21tYW5kLCBcImZcIikuZ2V0Q29tbWFuZHMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RDb21wbGV0aW9ucyA9ICgoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbXBsZXRpb25LZXkpXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgIChfYiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY29tcGxldGlvbktleSxcbiAgICAgICAgICAgICAgICAgICAgLi4uKChfZCA9IHRoaXMuZ2V0QWxpYXNlcygpWyhfYyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29tcGxldGlvbktleV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IFtdKSxcbiAgICAgICAgICAgICAgICBdLnNvbWUoKGtleSkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3YsIGtleSkpXG4gICAgICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHNraXBSZWNvbW1lbmRhdGlvbiA9IGhlbHBPcHRTZXQgfHwgcmVxdWVzdENvbXBsZXRpb25zIHx8IGhlbHBPbmx5O1xuICAgICAgICAgICAgaWYgKGFyZ3YuXy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcktleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdFVua25vd25Db21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY29tbWFuZEluZGV4IHx8IDAsIGNtZDsgYXJndi5fW2ldICE9PSB1bmRlZmluZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY21kID0gU3RyaW5nKGFyZ3YuX1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcktleXMuaW5jbHVkZXMoY21kKSAmJiBjbWQgIT09IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyQXJndiA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLnJ1bkNvbW1hbmQoY21kLCB0aGlzLCBwYXJzZWQsIGkgKyAxLCBoZWxwT25seSwgaGVscE9wdFNldCB8fCB2ZXJzaW9uT3B0U2V0IHx8IGhlbHBPbmx5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trUG9zdFByb2Nlc3NdKGlubmVyQXJndiwgcG9wdWxhdGVEb3VibGVEYXNoLCAhIWNhbGxlZEZyb21Db21tYW5kLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghZmlyc3RVbmtub3duQ29tbWFuZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtZCAhPT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9jb21wbGV0aW9uQ29tbWFuZCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RVbmtub3duQ29tbWFuZCA9IGNtZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tbWFuZCwgXCJmXCIpLmhhc0RlZmF1bHRDb21tYW5kKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfcmVjb21tZW5kQ29tbWFuZHMsIFwiZlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RVbmtub3duQ29tbWFuZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXNraXBSZWNvbW1lbmRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikucmVjb21tZW5kQ29tbWFuZHMoZmlyc3RVbmtub3duQ29tbWFuZCwgaGFuZGxlcktleXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb25Db21tYW5kLCBcImZcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgYXJndi5fLmluY2x1ZGVzKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbkNvbW1hbmQsIFwiZlwiKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIXJlcXVlc3RDb21wbGV0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9leGl0UHJvY2VzcywgXCJmXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbXBsZXRpb25TY3JpcHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5oYXNEZWZhdWx0Q29tbWFuZCgpICYmICFza2lwUmVjb21tZW5kYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lckFyZ3YgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbW1hbmQsIFwiZlwiKS5ydW5Db21tYW5kKG51bGwsIHRoaXMsIHBhcnNlZCwgMCwgaGVscE9ubHksIGhlbHBPcHRTZXQgfHwgdmVyc2lvbk9wdFNldCB8fCBoZWxwT25seSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba1Bvc3RQcm9jZXNzXShpbm5lckFyZ3YsIHBvcHVsYXRlRG91YmxlRGFzaCwgISFjYWxsZWRGcm9tQ29tbWFuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcXVlc3RDb21wbGV0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2V4aXRQcm9jZXNzLCBcImZcIikpXG4gICAgICAgICAgICAgICAgICAgIHNldEJsb2NraW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIGFyZ3MgPSBbXS5jb25jYXQoYXJncyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGlvbkFyZ3MgPSBhcmdzLnNsaWNlKGFyZ3MuaW5kZXhPZihgLS0ke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfY29tcGxldGlvbiwgXCJmXCIpLmNvbXBsZXRpb25LZXl9YCkgKyAxKTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2NvbXBsZXRpb24sIFwiZlwiKS5nZXRDb21wbGV0aW9uKGNvbXBsZXRpb25BcmdzLCAoZXJyLCBjb21wbGV0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIChjb21wbGV0aW9ucyB8fCBbXSkuZm9yRWFjaChjb21wbGV0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfbG9nZ2VyLCBcImZcIikubG9nKGNvbXBsZXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0KDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tQb3N0UHJvY2Vzc10oYXJndiwgIXBvcHVsYXRlRG91YmxlRGFzaCwgISFjYWxsZWRGcm9tQ29tbWFuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2hhc091dHB1dCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhlbHBPcHRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJsb2NraW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBza2lwVmFsaWRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0hlbHAobWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2xvZ2dlciwgXCJmXCIpLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZlcnNpb25PcHRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZXhpdFByb2Nlc3MsIFwiZlwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJsb2NraW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBza2lwVmFsaWRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdXNhZ2UsIFwiZlwiKS5zaG93VmVyc2lvbignbG9nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNraXBWYWxpZGF0aW9uICYmIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLnNraXBWYWxpZGF0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBza2lwVmFsaWRhdGlvbiA9IE9iamVjdC5rZXlzKGFyZ3YpLnNvbWUoa2V5ID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2Vfb3B0aW9ucywgXCJmXCIpLnNraXBWYWxpZGF0aW9uLmluZGV4T2Yoa2V5KSA+PSAwICYmIGFyZ3Zba2V5XSA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNraXBWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5lcnJvcilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFlFcnJvcihwYXJzZWQuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXF1ZXN0Q29tcGxldGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHRoaXNba1J1blZhbGlkYXRpb25dKGFsaWFzZXMsIHt9LCBwYXJzZWQuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbGxlZEZyb21Db21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd2UHJvbWlzZSA9IGFwcGx5TWlkZGxld2FyZShhcmd2LCB0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX2dsb2JhbE1pZGRsZXdhcmUsIFwiZlwiKS5nZXRNaWRkbGV3YXJlKCksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyZ3ZQcm9taXNlID0gdGhpc1trVmFsaWRhdGVBc3luY10odmFsaWRhdGlvbiwgYXJndlByb21pc2UgIT09IG51bGwgJiYgYXJndlByb21pc2UgIT09IHZvaWQgMCA/IGFyZ3ZQcm9taXNlIDogYXJndik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2UoYXJndlByb21pc2UpICYmICFjYWxsZWRGcm9tQ29tbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndlByb21pc2UgPSBhcmd2UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKGFyZ3YsIHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfZ2xvYmFsTWlkZGxld2FyZSwgXCJmXCIpLmdldE1pZGRsZXdhcmUoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFlFcnJvcilcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3VzYWdlLCBcImZcIikuZmFpbChlcnIubWVzc2FnZSwgZXJyKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNba1Bvc3RQcm9jZXNzXShhcmd2UHJvbWlzZSAhPT0gbnVsbCAmJiBhcmd2UHJvbWlzZSAhPT0gdm9pZCAwID8gYXJndlByb21pc2UgOiBhcmd2LCBwb3B1bGF0ZURvdWJsZURhc2gsICEhY2FsbGVkRnJvbUNvbW1hbmQsIHRydWUpO1xuICAgIH1cbiAgICBba1J1blZhbGlkYXRpb25dKGFsaWFzZXMsIHBvc2l0aW9uYWxNYXAsIHBhcnNlRXJyb3JzLCBpc0RlZmF1bHRDb21tYW5kKSB7XG4gICAgICAgIGNvbnN0IGRlbWFuZGVkT3B0aW9ucyA9IHsgLi4udGhpcy5nZXREZW1hbmRlZE9wdGlvbnMoKSB9O1xuICAgICAgICByZXR1cm4gKGFyZ3YpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUVycm9ycylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgWUVycm9yKHBhcnNlRXJyb3JzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV92YWxpZGF0aW9uLCBcImZcIikubm9uT3B0aW9uQ291bnQoYXJndik7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5yZXF1aXJlZEFyZ3VtZW50cyhhcmd2LCBkZW1hbmRlZE9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IGZhaWxlZFN0cmljdENvbW1hbmRzID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3RDb21tYW5kcywgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgZmFpbGVkU3RyaWN0Q29tbWFuZHMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS51bmtub3duQ29tbWFuZHMoYXJndik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9zdHJpY3QsIFwiZlwiKSAmJiAhZmFpbGVkU3RyaWN0Q29tbWFuZHMpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS51bmtub3duQXJndW1lbnRzKGFyZ3YsIGFsaWFzZXMsIHBvc2l0aW9uYWxNYXAsICEhaXNEZWZhdWx0Q29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3N0cmljdE9wdGlvbnMsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLnVua25vd25Bcmd1bWVudHMoYXJndiwgYWxpYXNlcywge30sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9ZYXJnc0luc3RhbmNlX3ZhbGlkYXRpb24sIFwiZlwiKS5saW1pdGVkQ2hvaWNlcyhhcmd2KTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmltcGxpY2F0aW9ucyhhcmd2KTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfdmFsaWRhdGlvbiwgXCJmXCIpLmNvbmZsaWN0aW5nKGFyZ3YpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBba1NldEhhc091dHB1dF0oKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1lhcmdzSW5zdGFuY2VfaGFzT3V0cHV0LCB0cnVlLCBcImZcIik7XG4gICAgfVxuICAgIFtrVHJhY2tNYW51YWxseVNldEtleXNdKGtleXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikua2V5W2tleXNdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfWWFyZ3NJbnN0YW5jZV9vcHRpb25zLCBcImZcIikua2V5W2tdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1lhcmdzSW5zdGFuY2UoeSkge1xuICAgIHJldHVybiAhIXkgJiYgdHlwZW9mIHkuZ2V0SW50ZXJuYWxNZXRob2RzID09PSAnZnVuY3Rpb24nO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuLy8gQm9vdHN0cmFwcyB5YXJncyBmb3IgRVNNOlxuaW1wb3J0IGVzbVBsYXRmb3JtU2hpbSBmcm9tICcuL2xpYi9wbGF0Zm9ybS1zaGltcy9lc20ubWpzJztcbmltcG9ydCB7WWFyZ3NGYWN0b3J5fSBmcm9tICcuL2J1aWxkL2xpYi95YXJncy1mYWN0b3J5LmpzJztcblxuY29uc3QgWWFyZ3MgPSBZYXJnc0ZhY3RvcnkoZXNtUGxhdGZvcm1TaGltKTtcbmV4cG9ydCBkZWZhdWx0IFlhcmdzO1xuXG5leHBvcnQge1lhcmdzIGFzICdtb2R1bGUuZXhwb3J0cyd9O1xuIiwgImltcG9ydCAqIGFzIHlhcmdzIGZyb20gJ3lhcmdzJ1xuaW1wb3J0IHsgaGlkZUJpbiB9IGZyb20gJ3lhcmdzL2hlbHBlcnMnXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IENyeXB0b0hlbHBlckZhY3RvcnkgfSBmcm9tICcuLi9zZXJ2aWNlcy9DcnlwdG9IZWxwZXJGYWN0b3J5LnRzJztcbmltcG9ydCB7IEZpbGVEYXRhSGVscGVyLCBKc29uRmlsZUVuY29kaW5nIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0ZpbGVEYXRhSGVscGVyLnRzXCI7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vc2VydmljZXMvQ29uc3RhbnRzLnRzJztcbmltcG9ydCAqIGFzIEluUGxhY2VDb25zdGFudHMgZnJvbSAnLi4vZmVhdHVyZXMvZmVhdHVyZS1pbnBsYWNlLWVuY3J5cHQvRmVhdHVyZUlucGxhY2VDb25zdGFudHMudHMnO1xuaW1wb3J0IHsgRmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXMgfSBmcm9tICcuLi9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9mZWF0dXJlSW5wbGFjZVRleHRBbmFseXNpcy50cyc7XG5cbmludGVyZmFjZSBMaXN0aW5nIHtcbiAgICBmZWF0dXJlVHlwZTogJ0luUGxhY2UnIHwgJ1dob2xlTm90ZSc7XG4gICAgZnVsbFBhdGg6IHN0cmluZztcbiAgICByZWxhdGl2ZVBhdGg6IHN0cmluZztcbiAgICBleHRlbnNpb246IHN0cmluZztcbiAgICBjb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmludGVyZmFjZSBUZXN0UmVzdWx0e1xuICAgIGxpc3Rpbmc6IExpc3Rpbmc7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEZWNyeXB0UmVzdWx0e1xuICAgIGxpc3Rpbmc6IExpc3Rpbmc7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgb3V0RmlsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG5pbnRlcmZhY2UgUGFzc3dvcmRNYXRjaCB7XG4gICAgcGxhaW50ZXh0OiBzdHJpbmc7XG4gICAgcGFzc3dvcmROdW1iZXI6IG51bWJlcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdHJ5UGFzc3dvcmRzKFxuICAgIHBhc3N3b3Jkczogc3RyaW5nW10sXG4gICAgZGVjcnlwdDogKHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nIHwgbnVsbD5cbik6IFByb21pc2U8UGFzc3dvcmRNYXRjaCB8IG51bGw+IHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcGFzc3dvcmRdIG9mIHBhc3N3b3Jkcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgY29uc3QgcGxhaW50ZXh0ID0gYXdhaXQgZGVjcnlwdChwYXNzd29yZCk7XG4gICAgICAgIGlmIChwbGFpbnRleHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHBsYWludGV4dCwgcGFzc3dvcmROdW1iZXI6IGluZGV4ICsgMSB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5pbnRlcmZhY2UgSW5saW5lQmxvY2sge1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG4gICAgbGluZTogbnVtYmVyO1xuICAgIHBvc2l0aW9uOiBudW1iZXI7XG4gICAgZW5jcnlwdGVkVGV4dDogc3RyaW5nO1xufVxuXG50eXBlIElubGluZURlY3J5cHRpb24gPSBJbmxpbmVCbG9jayAmIChcbiAgICB8IHsgc3VjY2VzczogdHJ1ZTsgbWF0Y2g6IFBhc3N3b3JkTWF0Y2ggfVxuICAgIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3I6ICdjYW5ub3QgZGVjcnlwdCcgfCAndW5rbm93biBmb3JtYXQnIHwgJ3VuYWJsZSB0byBkZWNyeXB0JyB9XG4pO1xuXG5mdW5jdGlvbiogc2NhbklubGluZUJsb2Nrcyhjb250ZW50OiBzdHJpbmcpOiBJdGVyYWJsZUl0ZXJhdG9yPElubGluZUJsb2NrPiB7XG4gICAgbGV0IGxpbmVPZmZzZXQgPSAwO1xuICAgIGZvciAoY29uc3QgW2xpbmVJbmRleCwgbGluZV0gb2YgY29udGVudC5zcGxpdCgnXFxuJykuZW50cmllcygpKSB7XG4gICAgICAgIC8vIFByZWZlciB0aGUgY29tcGxldGUgaGlkZGVuIHdyYXBwZXIsIGFuZCBzY2FuIG9ubHkgdGhlIG9yaWdpbmFsIHNvdXJjZS5cbiAgICAgICAgY29uc3QgbWF0Y2hlciA9IC8lJVx1RDgzRFx1REQxMCguKj8pXHVEODNEXHVERDEwJSV8XHVEODNEXHVERDEwKC4qPylcdUQ4M0RcdUREMTAvZztcbiAgICAgICAgZm9yIChjb25zdCBtYXRjaCBvZiBsaW5lLm1hdGNoQWxsKG1hdGNoZXIpKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGxpbmVPZmZzZXQgKyBtYXRjaC5pbmRleDtcbiAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICBlbmQ6IHN0YXJ0ICsgbWF0Y2hbMF0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGxpbmU6IGxpbmVJbmRleCArIDEsXG4gICAgICAgICAgICAgICAgLy8gS2VlcCBkaWFnbm9zdGljcyBhdCB0aGUgbG9jayBpY29uLCBpbmNsdWRpbmcgZm9yIGhpZGRlbiBibG9ja3MuXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG1hdGNoLmluZGV4ICsgKG1hdGNoWzFdICE9PSB1bmRlZmluZWQgPyAyIDogMCkgKyAxLFxuICAgICAgICAgICAgICAgIGVuY3J5cHRlZFRleHQ6IGBcdUQ4M0RcdUREMTAke21hdGNoWzFdID8/IG1hdGNoWzJdfVx1RDgzRFx1REQxMGAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGxpbmVPZmZzZXQgKz0gbGluZS5sZW5ndGggKyAxO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24qIGRlY3J5cHRJbmxpbmVCbG9ja3MoY29udGVudDogc3RyaW5nLCBwYXNzd29yZHM6IHN0cmluZ1tdKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPElubGluZURlY3J5cHRpb24+IHtcbiAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHNjYW5JbmxpbmVCbG9ja3MoY29udGVudCkpIHtcbiAgICAgICAgY29uc3QgYW5hbHlzaXMgPSBuZXcgRmVhdHVyZUlucGxhY2VUZXh0QW5hbHlzaXMoYmxvY2suZW5jcnlwdGVkVGV4dCk7XG4gICAgICAgIGlmICghYW5hbHlzaXMuY2FuRGVjcnlwdCB8fCBhbmFseXNpcy5kZWNyeXB0YWJsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB5aWVsZCB7IC4uLmJsb2NrLCBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdjYW5ub3QgZGVjcnlwdCcgfTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY3J5cHRhYmxlID0gYW5hbHlzaXMuZGVjcnlwdGFibGU7XG4gICAgICAgIGNvbnN0IGhlbHBlciA9IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGRGcm9tRGVjcnlwdGFibGVPck51bGwoZGVjcnlwdGFibGUpO1xuICAgICAgICBpZiAoaGVscGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHlpZWxkIHsgLi4uYmxvY2ssIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ3Vua25vd24gZm9ybWF0JyB9O1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2ggPSBhd2FpdCB0cnlQYXNzd29yZHMocGFzc3dvcmRzLCBwYXNzd29yZCA9PiBoZWxwZXIuZGVjcnlwdEZyb21CYXNlNjQoZGVjcnlwdGFibGUuYmFzZTY0Q2lwaGVyVGV4dCwgcGFzc3dvcmQpKTtcbiAgICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgICAgIHlpZWxkIHsgLi4uYmxvY2ssIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ3VuYWJsZSB0byBkZWNyeXB0JyB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWllbGQgeyAuLi5ibG9jaywgc3VjY2VzczogdHJ1ZSwgbWF0Y2ggfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgTGlzdENvbW1hbmRIYW5kbGVyIHtcbiAgICBcblxuICAgIGFzeW5jIGFyZ0hhbmRsZXIoIGZvcm1hdCA6IHN0cmluZyApIHtcblxuICAgICAgICBjb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgICAgIGxldCBvblN0YXJ0IDogKCkgPT4gdm9pZDtcbiAgICAgICAgbGV0IG9uTGlzdGluZyA6IChsOkxpc3RpbmcpID0+IHZvaWQ7XG4gICAgICAgIGxldCBvbkVuZCA6ICgpID0+IHZvaWQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBsaXN0aW5nczogTGlzdGluZ1tdID0gW107XG5cblxuICAgICAgICBpZiAoIGZvcm1hdCA9PT0gJ2NzdicpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgb25TdGFydCA9ICgpID0+IGNvbnNvbGUubG9nKCAnZmVhdHVyZSxmdWxsUGF0aCxyZWxhdGl2ZVBhdGgsZXh0ZW5zaW9uJyApO1xuICAgICAgICAgICAgb25MaXN0aW5nID0gKGwpID0+IGNvbnNvbGUubG9nKCBgXCIke2wuZmVhdHVyZVR5cGV9XCIsXCIke2wuZnVsbFBhdGh9XCIsXCIke2wucmVsYXRpdmVQYXRofVwiLFwiJHtsLmV4dGVuc2lvbn1cImAgKTtcbiAgICAgICAgICAgIG9uRW5kID0gKCkgPT4ge307XG5cbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT0gJ2pzb24nKSB7XG5cbiAgICAgICAgICAgIG9uU3RhcnQgPSAoKSA9PiB7fTtcbiAgICAgICAgICAgIG9uTGlzdGluZyA9IChsKSA9PiBsaXN0aW5ncy5wdXNoKCBsICk7XG4gICAgICAgICAgICBvbkVuZCA9ICgpID0+IGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSggbGlzdGluZ3MsIG51bGwsIDIgKSApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAndGFibGUnKSB7XG5cbiAgICAgICAgICAgIG9uU3RhcnQgPSAoKSA9PiB7fTtcbiAgICAgICAgICAgIG9uTGlzdGluZyA9IChsKSA9PiBsaXN0aW5ncy5wdXNoKCBsICk7XG4gICAgICAgICAgICBvbkVuZCA9ICgpID0+IGNvbnNvbGUudGFibGUoIGxpc3RpbmdzICk7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBEZWZhdWx0XG4gICAgICAgICAgICBvblN0YXJ0ID0gKCkgPT4ge307XG4gICAgICAgICAgICBvbkxpc3RpbmcgPSAobCkgPT4gY29uc29sZS5sb2coIGAke2wucmVsYXRpdmVQYXRofWAgKTtcbiAgICAgICAgICAgIG9uRW5kID0gKCkgPT4ge307XG4gICAgICAgIH1cblxuXG4gICAgICAgIGF3YWl0IHRoaXMub3V0cHV0KFxuICAgICAgICAgICAgY3dkLFxuICAgICAgICAgICAgb25TdGFydCxcbiAgICAgICAgICAgIG9uTGlzdGluZyxcbiAgICAgICAgICAgIG9uRW5kXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBhc3luYyBvdXRwdXQoXG4gICAgICAgIGRpciA6IHN0cmluZyxcbiAgICAgICAgc3RhcnRDYWxsYmFjayA6ICgpID0+IHZvaWQsXG4gICAgICAgIHBlckl0ZW1DYWxsYmFjayA6IChsOkxpc3RpbmcpID0+IHZvaWQsXG4gICAgICAgIGVuZENhbGxiYWNrIDogKCkgPT4gdm9pZFxuICAgICkgOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgc3RhcnRDYWxsYmFjaygpO1xuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IGwgb2YgVXRpbHMubGlzdGluZ3MoZGlyLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIHBlckl0ZW1DYWxsYmFjayhsKTtcbiAgICAgICAgfVxuICAgICAgICBlbmRDYWxsYmFjaygpO1xuICAgIH1cblxuXG59XG5cbmNsYXNzIFRlc3RDb21tYW5kSGFuZGxlciB7XG5cbiAgICBhc3luYyBhcmdIYW5kbGVyKCBwYXNzd29yZHM6c3RyaW5nW10sIG9ubHlMaXN0RmFpbHM6Ym9vbGVhbiApIHtcblxuICAgICAgICBjb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICBsZXQgaGFzRmFpbHVyZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbGlzdGluZyBvZiBVdGlscy5saXN0aW5ncyhjd2QsIHRydWUpKSB7XG5cbiAgICAgICAgICAgIGlmIChsaXN0aW5nLmZlYXR1cmVUeXBlID09ICdJblBsYWNlJyl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIGF3YWl0IChjb25zdCByZXN1bHQgb2YgdGhpcy50ZXN0Rm9ySW5QbGFjZURlY3J5cHRpb24oIGxpc3RpbmcsIHBhc3N3b3JkcyApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0ZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0UmVzdWx0KCByZXN1bHQsIG9ubHlMaXN0RmFpbHMgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGluZy5mZWF0dXJlVHlwZSA9PSAnV2hvbGVOb3RlJyl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy50ZXN0Rm9yV2hvbGVOb3RlRGVjcnlwdGlvbiggbGlzdGluZywgcGFzc3dvcmRzICk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBoYXNGYWlsdXJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRSZXN1bHQoIHJlc3VsdCwgb25seUxpc3RGYWlscyApO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzRmFpbHVyZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5leGl0Q29kZSA9IDE7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jICogdGVzdEZvckluUGxhY2VEZWNyeXB0aW9uKCBsaXN0aW5nOiBMaXN0aW5nLCBwYXNzd29yZHM6c3RyaW5nW10gKSA6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxUZXN0UmVzdWx0PiB7XG5cbiAgICAgICAgaWYgKCBsaXN0aW5nLmNvbnRlbnQgPT0gbnVsbCApIHtcbiAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdubyBjb250ZW50J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgcmVzdWx0IG9mIGRlY3J5cHRJbmxpbmVCbG9ja3MobGlzdGluZy5jb250ZW50LCBwYXNzd29yZHMpKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVzdWx0LnN1Y2Nlc3MgPyBgcGFzc3dvcmQgIyR7cmVzdWx0Lm1hdGNoLnBhc3N3b3JkTnVtYmVyfWAgOiByZXN1bHQuZXJyb3I7XG4gICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXN1bHQuc3VjY2VzcyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgbGluZSAke3Jlc3VsdC5saW5lfSwgcG9zICR7cmVzdWx0LnBvc2l0aW9ufSwgJHttZXNzYWdlfWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhc3luYyB0ZXN0Rm9yV2hvbGVOb3RlRGVjcnlwdGlvbiggbGlzdGluZzogTGlzdGluZywgcGFzc3dvcmRzOnN0cmluZ1tdICkgOiBQcm9taXNlPFRlc3RSZXN1bHQ+IHtcbiAgICAgICAgaWYoIGxpc3RpbmcuY29udGVudCA9PSBudWxsIHx8IGxpc3RpbmcuY29udGVudC5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdubyBjb250ZW50J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbGVEYXRhID0gSnNvbkZpbGVFbmNvZGluZy5kZWNvZGUoIGxpc3RpbmcuY29udGVudCB8fCAnJyApO1xuXG4gICAgICAgIGNvbnN0IGNoID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yTnVsbCggZmlsZURhdGEgKTtcbiAgICAgICAgaWYgKCBjaCA9PSBudWxsICl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1Vua25vd24gZm9ybWF0J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBhd2FpdCB0cnlQYXNzd29yZHMocGFzc3dvcmRzLCBwYXNzd29yZCA9PiBGaWxlRGF0YUhlbHBlci5kZWNyeXB0KGZpbGVEYXRhLCBwYXNzd29yZCkpO1xuICAgICAgICBpZiAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYHBhc3N3b3JkICMke21hdGNoLnBhc3N3b3JkTnVtYmVyfWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICd1bmFibGUgdG8gZGVjcnlwdCdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvdXRwdXRSZXN1bHQocmVzdWx0OiBUZXN0UmVzdWx0LCBvbmx5TGlzdEZhaWxzOmJvb2xlYW4pIHtcbiAgICAgICAgaWYgKG9ubHlMaXN0RmFpbHMgJiYgcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyggYCR7cmVzdWx0LnN1Y2Nlc3MgPyAnUEFTU0VEJyA6ICdGQUlMRUQnfSA9PiAke3Jlc3VsdC5saXN0aW5nLnJlbGF0aXZlUGF0aH0gPT4gJHtyZXN1bHQubWVzc2FnZX0gPT4gJHtyZXN1bHQubGlzdGluZy5mZWF0dXJlVHlwZX1gICk7XG4gICAgfVxuXG4gICAgb3V0cHV0UmVzdWx0cyhyZXN1bHRzOiBUZXN0UmVzdWx0W10sIG9ubHlMaXN0RmFpbHM6Ym9vbGVhbikge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dFJlc3VsdCggcmVzdWx0LCBvbmx5TGlzdEZhaWxzICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIERlY3J5cHRDb21tYW5kSGFuZGxlcntcbiAgICBhc3luYyBhcmdIYW5kbGVyKCBwYXNzd29yZHM6c3RyaW5nW10sIG91dGRpcjpzdHJpbmcsIGRyeXJ1bjpib29sZWFuICkge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coIGBkZWNyeXB0aW5nJHtkcnlydW4/JyAoZHJ5IHJ1biknOicnfS4uLmAgKTtcblxuICAgICAgICBjb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICBsZXQgaGFzRmFpbHVyZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbGlzdGluZyBvZiBVdGlscy5saXN0aW5ncyhjd2QsIHRydWUpKSB7XG5cbiAgICAgICAgICAgIGlmIChsaXN0aW5nLmZlYXR1cmVUeXBlID09ICdJblBsYWNlJyl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGVjcnlwdEluUGxhY2VMaXN0aW5nKCBsaXN0aW5nLCBwYXNzd29yZHMsIG91dGRpciwgZHJ5cnVuICk7XG4gICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgIGhhc0ZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0UmVzdWx0KCByZXN1bHQgKTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RpbmcuZmVhdHVyZVR5cGUgPT0gJ1dob2xlTm90ZScpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGVjcnlwdFdob2xlTm90ZUxpc3RpbmcoIGxpc3RpbmcsIHBhc3N3b3Jkcywgb3V0ZGlyLCBkcnlydW4gKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0ZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJlc3VsdCggcmVzdWx0ICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNGYWlsdXJlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBkZWNyeXB0SW5QbGFjZUxpc3RpbmcobGlzdGluZzogTGlzdGluZywgcGFzc3dvcmRzOiBzdHJpbmdbXSwgb3V0ZGlyOiBzdHJpbmcsIGRyeXJ1bjogYm9vbGVhbikgOiBQcm9taXNlPERlY3J5cHRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGxpc3RpbmcuY29udGVudCE7XG4gICAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCByZXN1bHQgb2YgZGVjcnlwdElubGluZUJsb2Nrcyhjb250ZW50LCBwYXNzd29yZHMpKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBFUlJPUjogTGluZSAke3Jlc3VsdC5saW5lfSwgcG9zICR7cmVzdWx0LnBvc2l0aW9ufSwgJHtyZXN1bHQuZXJyb3J9YCxcbiAgICAgICAgICAgICAgICAgICAgb3V0RmlsZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGNvbnRlbnQuc2xpY2Uob2Zmc2V0LCByZXN1bHQuc3RhcnQpLCByZXN1bHQubWF0Y2gucGxhaW50ZXh0KTtcbiAgICAgICAgICAgIG9mZnNldCA9IHJlc3VsdC5lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChjb250ZW50LnNsaWNlKG9mZnNldCkpO1xuXG4gICAgICAgIGNvbnN0IG91dEZpbGUgPSBwYXRoLmpvaW4oIG91dGRpciwgbGlzdGluZy5yZWxhdGl2ZVBhdGggKTtcblxuICAgICAgICBpZiAoIWRyeXJ1bil7XG4gICAgICAgICAgICBjb25zdCBvdXRGaWxlRGlyID0gcGF0aC5kaXJuYW1lKCBvdXRGaWxlICk7XG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoIG91dEZpbGVEaXIgKSl7XG4gICAgICAgICAgICAgICAgZnMubWtkaXJTeW5jKCBvdXRGaWxlRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCBvdXRGaWxlLCBwYXJ0cy5qb2luKCcnKSApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBsaXN0aW5nLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdEZWNyeXB0ZWQnLFxuICAgICAgICAgICAgb3V0RmlsZTogb3V0RmlsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvdXRwdXRSZXN1bHQocmVzdWx0OiBEZWNyeXB0UmVzdWx0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBgJHtyZXN1bHQubWVzc2FnZX0gOiAke3Jlc3VsdC5saXN0aW5nLnJlbGF0aXZlUGF0aH0ke3Jlc3VsdC5vdXRGaWxlID09IG51bGwgPyAnJyA6ICcgPT4gYCcgKyByZXN1bHQub3V0RmlsZSArICdgJ31gICk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVjcnlwdFdob2xlTm90ZUxpc3RpbmcobGlzdGluZzogTGlzdGluZywgcGFzc3dvcmRzOiBzdHJpbmdbXSwgb3V0ZGlyOiBzdHJpbmcsIGRyeXJ1bjpib29sZWFuICkgOiBQcm9taXNlPERlY3J5cHRSZXN1bHQ+IHtcblxuICAgICAgICBsZXQgb3V0RmlsZSA9IHBhdGguam9pbiggb3V0ZGlyLCBsaXN0aW5nLnJlbGF0aXZlUGF0aCApO1xuXG4gICAgICAgIC8vIGNoYW5nZSBleHRlbnNpb25cbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBwYXRoLmJhc2VuYW1lKG91dEZpbGUpO1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBwYXRoLmV4dG5hbWUob3V0RmlsZSk7XG4gICAgICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZShleHRlbnNpb24sICcubWQnKTtcblxuICAgICAgICAvLyBmaW5hbCBvdXRmaWxlXG4gICAgICAgIG91dEZpbGUgPSBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKG91dEZpbGUpLCBuZXdGaWxlTmFtZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRyeXJ1bil7XG4gICAgICAgICAgICBjb25zdCBvdXRGaWxlRGlyID0gcGF0aC5kaXJuYW1lKCBvdXRGaWxlICk7XG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoIG91dEZpbGVEaXIgKSl7XG4gICAgICAgICAgICAgICAgZnMubWtkaXJTeW5jKCBvdXRGaWxlRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiggbGlzdGluZy5jb250ZW50ID09IG51bGwgfHwgbGlzdGluZy5jb250ZW50Lmxlbmd0aCA9PSAwICl7XG5cbiAgICAgICAgICAgIGlmICghZHJ5cnVuKXtcbiAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCBvdXRGaWxlLCAnJyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnV0FSTjogRW1wdHkgZmlsZScsXG4gICAgICAgICAgICAgICAgb3V0RmlsZTogb3V0RmlsZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbGVEYXRhID0gSnNvbkZpbGVFbmNvZGluZy5kZWNvZGUoIGxpc3RpbmcuY29udGVudCB8fCAnJyApO1xuXG4gICAgICAgIGNvbnN0IGNoID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yTnVsbCggZmlsZURhdGEgKTtcbiAgICAgICAgaWYgKCBjaCA9PSBudWxsICl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3RpbmcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0VSUk9SOiBVbmtub3duIGZvcm1hdCcsXG4gICAgICAgICAgICAgICAgb3V0RmlsZTogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtYXRjaCA9IGF3YWl0IHRyeVBhc3N3b3JkcyhwYXNzd29yZHMsIHBhc3N3b3JkID0+IEZpbGVEYXRhSGVscGVyLmRlY3J5cHQoZmlsZURhdGEsIHBhc3N3b3JkKSk7XG4gICAgICAgIGlmIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIWRyeXJ1bil7XG4gICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyggb3V0RmlsZSwgbWF0Y2gucGxhaW50ZXh0ICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBEZWNyeXB0ZWRgLFxuICAgICAgICAgICAgICAgIG91dEZpbGU6IG91dEZpbGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGlzdGluZyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogYEVSUk9SOiBVbmFibGUgdG8gZGVjcnlwdGAsXG4gICAgICAgICAgICBvdXRGaWxlOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIFV0aWxze1xuICAgIHN0YXRpYyBhc3luYyAqIHdhbGsoIGRpciA6IHN0cmluZyApIDogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPHN0cmluZz4ge1xuICAgICAgICBcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBkIG9mIGF3YWl0IGZzLnByb21pc2VzLm9wZW5kaXIoZGlyKSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBwYXRoLmpvaW4oZGlyLCBkLm5hbWUpO1xuICAgICAgICAgICAgaWYgKGQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgIHlpZWxkKiBVdGlscy53YWxrKGVudHJ5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5pc0ZpbGUoKSl7XG4gICAgICAgICAgICAgICAgeWllbGQgZW50cnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgKiBsaXN0aW5ncyggZGlyIDogc3RyaW5nLCBpbmNsdWRlQ29udGVudDogYm9vbGVhbiApIDogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPExpc3Rpbmc+IHtcbiAgICAgICAgXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgcCBvZiBVdGlscy53YWxrKCBkaXIgKSkge1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKHApLnRvTG93ZXJDYXNlKCkuc2xpY2UoMSk7XG5cbiAgICAgICAgICAgIC8vIGV4aXQgZWFybHkgaWYgbm90IGEgcmVsZXZhbnQgZmlsZVxuICAgICAgICAgICAgaWYgKCAhWydtZCcsIC4uLkNvbnN0YW50cy5FTkNSWVBURURfRklMRV9FWFRFTlNJT05TXS5pbmNsdWRlcyggZXh0ICkgKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gJy4nICsgcGF0aC5zZXAgKyBwYXRoLnJlbGF0aXZlKGRpciwgcCk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gKCBpbmNsdWRlQ29udGVudCB8fCBleHQgPT0gJ21kJyApID8gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoIHAsICd1dGY4JyApIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgXG5cdFx0XHQvLyBjb3VsZCBoYXZlIGlucGxhY2UgZW5jcnlwdGVkIG5vdGVzXG5cdFx0XHRpZiAoIGV4dCA9PSAnbWQnICl7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoIEluUGxhY2VDb25zdGFudHMuX1BSRUZJWEVTLnNvbWUoIChwcmVmaXgpID0+IGNvbnRlbnQhLmluY2x1ZGVzKHByZWZpeCkgKSApe1xuXHRcdFx0XHRcdHlpZWxkIHtcblx0XHRcdFx0XHRcdGZlYXR1cmVUeXBlOiAnSW5QbGFjZScsXG5cdFx0XHRcdFx0XHRmdWxsUGF0aDogcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlUGF0aDogcmVsYXRpdmVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBpbmNsdWRlQ29udGVudCA/IGNvbnRlbnQgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbXVzdCBiZSB3aG9sZSBub3RlIGVuY3J5cHRlZFxuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnV2hvbGVOb3RlJyxcbiAgICAgICAgICAgICAgICBmdWxsUGF0aDogcCxcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVBhdGg6IHJlbGF0aXZlUGF0aCxcbiAgICAgICAgICAgICAgICBleHRlbnNpb246IGV4dCxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmNvbnN0IG9wdFBhc3N3b3JkTGlzdCA6IHlhcmdzLk9wdGlvbnMgID0ge1xuICAgIGRlbWFuZE9wdGlvbjogdHJ1ZSxcbiAgICBhbGlhczogWydwJywgJ3B3J10sXG4gICAgZGVzY3JpYmU6ICdwYXNzd29yZHMgdG8gdXNlJyxcbiAgICB0eXBlOiAnYXJyYXknLFxufVxuXG5jb25zdCBvcHRMaXN0aW5nRm9ybWF0IDogeWFyZ3MuT3B0aW9ucyA9IHtcbiAgICBhbGlhczogJ2YnLFxuICAgIGRlc2NyaWJlOiAnZm9ybWF0IG9mIHRoZSBsaXN0aW5nJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBjaG9pY2VzOiBbICdkZWZhdWx0JywgJ3RhYmxlJywgJ2pzb24nLCAnY3N2J10sXG4gICAgZGVmYXVsdDogJ2RlZmF1bHQnLFxufVxuXG5cblxueWFyZ3MuZGVmYXVsdChoaWRlQmluKHByb2Nlc3MuYXJndikpXG4gICAgLnNjcmlwdE5hbWUoJ21kZW5jJylcbiAgICAudXNhZ2UoICdVc2FnZTogJDAgW2NvbW1hbmRdIFtvcHRpb25zXScgKVxuXG4gICAgLmNvbW1hbmQoICdsaXN0JywgJ2xpc3QgYWxsIGVuY3J5cHRlZCBhcnRpZmFjdHMgd2l0aGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeScsICh5YXJncykgPT4geWFyZ3Mub3B0aW9uKCB7XG4gICAgICAgIGZvcm1hdDogb3B0TGlzdGluZ0Zvcm1hdFxuICAgIH0gKSwgKGFyZ3YpID0+IG5ldyBMaXN0Q29tbWFuZEhhbmRsZXIoKS5hcmdIYW5kbGVyKGFyZ3YuZm9ybWF0IGFzIHN0cmluZyApIClcbiAgICBcbiAgICAuY29tbWFuZChbJ3Rlc3QnLCAnY2hlY2snXSwgJ2NoZWNrIHRoYXQgYWxsIG5vdGVzIGNhbiBiZSBkZWNyeXB0ZWQgd2l0aCB0aGUgZ2l2ZW4gcGFzc3dvcmQgbGlzdCcsICh5YXJncykgPT4geWFyZ3Mub3B0aW9uKCAge1xuICAgICAgICBwYXNzd29yZHM6IG9wdFBhc3N3b3JkTGlzdCxcbiAgICAgICAgZmFpbHM6IHtcbiAgICAgICAgICAgIGFsaWFzOiBbJ2YnLCAnZmFpbCddLFxuICAgICAgICAgICAgZGVzY3JpYmU6ICdvbmx5IGxpc3QgZmFpbHMnLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0gKSwgKGFyZ3YpID0+IG5ldyBUZXN0Q29tbWFuZEhhbmRsZXIoKS5hcmdIYW5kbGVyKCBhcmd2LnBhc3N3b3JkcyBhcyBzdHJpbmdbXSwgYXJndi5mYWlscyBhcyBib29sZWFuICkgKVxuICAgIFxuICAgIC5jb21tYW5kKCdkZWNyeXB0JywgJ2RlY3J5cHQgbm90ZXMgdG8gcGxhaW4gdGV4dCBnaXZlbiBhIHBhc3N3b3JkIGxpc3QgYW5kIGFuIG91dHB1dCBkaXJlY3RvcnknLCAgKHlhcmdzKSA9PiB5YXJncy5vcHRpb24oICB7XG4gICAgICAgIHBhc3N3b3Jkczogb3B0UGFzc3dvcmRMaXN0LFxuICAgICAgICBvdXRkaXI6IHtcbiAgICAgICAgICAgIGFsaWFzOiBbJ28nLCAnb3V0JywgJ3RvJ10sXG4gICAgICAgICAgICBkZXNjcmliZTogJ291dHB1dCBkaXJlY3RvcnknLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZW1hbmRPcHRpb246IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZHJ5cnVuOiB7XG4gICAgICAgICAgICBhbGlhczogWydkcicsICdkcnknXSxcbiAgICAgICAgICAgIGRlc2NyaWJlOiAnZHJ5IHJ1bicsXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfSApLCAoYXJndikgPT4gbmV3IERlY3J5cHRDb21tYW5kSGFuZGxlcigpLmFyZ0hhbmRsZXIoIGFyZ3YucGFzc3dvcmRzIGFzIHN0cmluZ1tdLCBhcmd2Lm91dGRpciBhcyBzdHJpbmcsIGFyZ3YuZHJ5cnVuICE9PSBmYWxzZSApICkgXG4gICAgXG4gICAgLmRlbWFuZENvbW1hbmQoKVxuICAgIC5oZWxwKClcbiAgICAud3JhcCggbnVsbCApXG4gICAgLmV4YW1wbGUoW1xuICAgICAgICBbJyQwIGxpc3QnLCAnUHJvY2Vzc2VzIGFsbCAqLm1kIGFuZCAqLm1kZW5jIGZpbGVzIGFuZCBsaXN0IGFueSBlbmNyeXB0ZWQgYXJ0aWZhY3RzIHdpdGhpbiB0aGUgY3VycmVudCBkaXJlY3RvcnknXSxcbiAgICAgICAgWyckMCB0ZXN0IC0tcGFzc3dvcmRzIHB3MSBwdzInLCAnY2hlY2sgdGhhdCBhbGwgbm90ZXMgY2FuIGJlIGRlY3J5cHRlZCB3aXRoIHRoZSBnaXZlbiBwYXNzd29yZCBsaXN0J10sXG4gICAgICAgIFsnJDAgZGVjcnlwdCAtLXB3IHB3MSBwdzIgLS1vdXRkaXIgXFxcXHBhdGhcXFxcdG9cXFxcb3V0cHV0XFxcXCcsICdkZWNyeXB0IG5vdGVzIHRvIGFuIG91dHB1dCBkaXJlY3RvcnknXSxcbiAgICAgIF0pXG4gICAgLnBhcnNlKClcbjtcbiBcblxuIiwgImNvbnN0IHZlY3RvclNpemVcdD0gMTY7XG5jb25zdCB1dGY4RW5jb2Rlclx0PSBuZXcgVGV4dEVuY29kZXIoKTtcbmNvbnN0IHV0ZjhEZWNvZGVyXHQ9IG5ldyBUZXh0RGVjb2RlcigpO1xuY29uc3QgaXRlcmF0aW9uc1x0PSAxMDAwO1xuY29uc3Qgc2FsdFx0XHRcdD0gdXRmOEVuY29kZXIuZW5jb2RlKCdYSFduREFUNmVoTVZZMnpEJyk7XG5cbmV4cG9ydCBjbGFzcyBDcnlwdG9IZWxwZXIge1xuXG5cdC8vIGNvbnN0cnVjdG9yKCl7XG5cdC8vIFx0Y29uc29sZS5kZWJ1ZygnbmV3IENyeXB0b0hlbHBlcicpO1xuXHQvLyB9XG5cblx0cHJpdmF0ZSBhc3luYyBkZXJpdmVLZXkocGFzc3dvcmQ6c3RyaW5nKSA6UHJvbWlzZTxDcnlwdG9LZXk+IHtcblx0XHRjb25zdCBidWZmZXIgICAgID0gdXRmOEVuY29kZXIuZW5jb2RlKHBhc3N3b3JkKTtcblx0XHRjb25zdCBrZXkgICAgICAgID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoJ3JhdycsIGJ1ZmZlciwge25hbWU6ICdQQktERjInfSwgZmFsc2UsIFsnZGVyaXZlS2V5J10pO1xuXHRcdGNvbnN0IHByaXZhdGVLZXkgPSBjcnlwdG8uc3VidGxlLmRlcml2ZUtleShcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ1BCS0RGMicsXG5cdFx0XHRcdGhhc2g6IHtuYW1lOiAnU0hBLTI1Nid9LFxuXHRcdFx0XHRpdGVyYXRpb25zLFxuXHRcdFx0XHRzYWx0XG5cdFx0XHR9LFxuXHRcdFx0a2V5LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnQUVTLUdDTScsXG5cdFx0XHRcdGxlbmd0aDogMjU2XG5cdFx0XHR9LFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHRbJ2VuY3J5cHQnLCAnZGVjcnlwdCddXG5cdFx0KTtcblx0XHRcblx0XHRyZXR1cm4gcHJpdmF0ZUtleTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0VG9CeXRlcyh0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcblxuXHRcdGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuZGVyaXZlS2V5KHBhc3N3b3JkKTtcblx0XHRcblx0XHRjb25zdCB0ZXh0Qnl0ZXNUb0VuY3J5cHQgPSB1dGY4RW5jb2Rlci5lbmNvZGUodGV4dCk7XG5cdFx0Y29uc3QgdmVjdG9yID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSh2ZWN0b3JTaXplKSk7XG5cdFx0XG5cdFx0Ly8gZW5jcnlwdCBpbnRvIGJ5dGVzXG5cdFx0Y29uc3QgZW5jcnlwdGVkQnl0ZXMgPSBuZXcgVWludDhBcnJheShcblx0XHRcdGF3YWl0IGNyeXB0by5zdWJ0bGUuZW5jcnlwdChcblx0XHRcdFx0e25hbWU6ICdBRVMtR0NNJywgaXY6IHZlY3Rvcn0sXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dGV4dEJ5dGVzVG9FbmNyeXB0XG5cdFx0XHQpXG5cdFx0KTtcblx0XHRcblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoIHZlY3Rvci5ieXRlTGVuZ3RoICsgZW5jcnlwdGVkQnl0ZXMuYnl0ZUxlbmd0aCApO1xuXHRcdGZpbmFsQnl0ZXMuc2V0KCB2ZWN0b3IsIDAgKTtcblx0XHRmaW5hbEJ5dGVzLnNldCggZW5jcnlwdGVkQnl0ZXMsIHZlY3Rvci5ieXRlTGVuZ3RoICk7XG5cblx0XHRyZXR1cm4gZmluYWxCeXRlcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFRvU3RyaW5nKCBieXRlcyA6IFVpbnQ4QXJyYXkgKTogc3RyaW5nIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0Zm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgYnl0ZXMubGVuZ3RoOyBpZHgrKykge1xuXHRcdFx0Ly8gYXBwZW5kIHRvIHJlc3VsdFxuXHRcdFx0cmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaWR4XSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQmFzZTY0KHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cblx0XHRjb25zdCBmaW5hbEJ5dGVzID0gYXdhaXQgdGhpcy5lbmNyeXB0VG9CeXRlcyh0ZXh0LCBwYXNzd29yZCk7XG5cblx0XHQvL2NvbnZlcnQgYXJyYXkgdG8gYmFzZTY0XG5cdFx0Y29uc3QgYmFzZTY0VGV4dCA9IGJ0b2EoIHRoaXMuY29udmVydFRvU3RyaW5nKGZpbmFsQnl0ZXMpICk7XG5cblx0XHRyZXR1cm4gYmFzZTY0VGV4dDtcblx0fVxuXG5cdHByaXZhdGUgc3RyaW5nVG9BcnJheShzdHI6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpO1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGRlY3J5cHRGcm9tQnl0ZXMoZW5jcnlwdGVkQnl0ZXM6IFVpbnQ4QXJyYXksIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XG5cdFx0dHJ5IHtcblxuXHRcdFx0Ly8gZXh0cmFjdCBpdlxuXHRcdFx0Y29uc3QgdmVjdG9yID0gZW5jcnlwdGVkQnl0ZXMuc2xpY2UoMCx2ZWN0b3JTaXplKTtcblxuXHRcdFx0Ly8gZXh0cmFjdCBlbmNyeXB0ZWQgdGV4dFxuXHRcdFx0Y29uc3QgZW5jcnlwdGVkVGV4dEJ5dGVzID0gZW5jcnlwdGVkQnl0ZXMuc2xpY2UodmVjdG9yU2l6ZSk7XG5cblx0XHRcdGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuZGVyaXZlS2V5KHBhc3N3b3JkKTtcblxuXHRcdFx0Ly8gZGVjcnlwdCBpbnRvIGJ5dGVzXG5cdFx0XHRjb25zdCBkZWNyeXB0ZWRCeXRlcyA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdChcblx0XHRcdFx0e25hbWU6ICdBRVMtR0NNJywgaXY6IHZlY3Rvcn0sXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0ZW5jcnlwdGVkVGV4dEJ5dGVzXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBjb252ZXJ0IGJ5dGVzIHRvIHRleHRcblx0XHRcdGNvbnN0IGRlY3J5cHRlZFRleHQgPSB1dGY4RGVjb2Rlci5kZWNvZGUoZGVjcnlwdGVkQnl0ZXMpO1xuXHRcdFx0cmV0dXJuIGRlY3J5cHRlZFRleHQ7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJhc2U2NChiYXNlNjRFbmNvZGVkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XG5cdFx0dHJ5IHtcblxuXHRcdFx0Y29uc3QgYnl0ZXNUb0RlY29kZSA9IHRoaXMuc3RyaW5nVG9BcnJheShhdG9iKGJhc2U2NEVuY29kZWQpKTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuZGVjcnlwdEZyb21CeXRlcyhieXRlc1RvRGVjb2RlLCBwYXNzd29yZCk7XG5cblx0XHRcdC8vIC8vIGV4dHJhY3QgaXZcblx0XHRcdC8vIGNvbnN0IHZlY3RvciA9IGJ5dGVzVG9EZWNvZGUuc2xpY2UoMCx2ZWN0b3JTaXplKTtcblxuXHRcdFx0Ly8gLy8gZXh0cmFjdCBlbmNyeXB0ZWQgdGV4dFxuXHRcdFx0Ly8gY29uc3QgZW5jcnlwdGVkVGV4dEJ5dGVzID0gYnl0ZXNUb0RlY29kZS5zbGljZSh2ZWN0b3JTaXplKTtcblxuXHRcdFx0Ly8gY29uc3Qga2V5ID0gYXdhaXQgdGhpcy5kZXJpdmVLZXkocGFzc3dvcmQpO1xuXG5cdFx0XHQvLyAvLyBkZWNyeXB0IGludG8gYnl0ZXNcblx0XHRcdC8vIGxldCBkZWNyeXB0ZWRCeXRlcyA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdChcblx0XHRcdC8vIFx0e25hbWU6ICdBRVMtR0NNJywgaXY6IHZlY3Rvcn0sXG5cdFx0XHQvLyBcdGtleSxcblx0XHRcdC8vIFx0ZW5jcnlwdGVkVGV4dEJ5dGVzXG5cdFx0XHQvLyApO1xuXG5cdFx0XHQvLyAvLyBjb252ZXJ0IGJ5dGVzIHRvIHRleHRcblx0XHRcdC8vIGxldCBkZWNyeXB0ZWRUZXh0ID0gdXRmOERlY29kZXIuZGVjb2RlKGRlY3J5cHRlZEJ5dGVzKTtcblx0XHRcdC8vIHJldHVybiBkZWNyeXB0ZWRUZXh0O1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuXG5cblxuIiwgImltcG9ydCB7IElDcnlwdG9IZWxwZXIgfSBmcm9tIFwiLi9JQ3J5cHRvSGVscGVyLnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBDcnlwdG9IZWxwZXIyMzA0IGltcGxlbWVudHMgSUNyeXB0b0hlbHBlciB7XG5cdHB1YmxpYyB2ZWN0b3JTaXplOiBudW1iZXI7XG5cdHB1YmxpYyBzYWx0U2l6ZTogbnVtYmVyO1xuXHRwdWJsaWMgaXRlcmF0aW9uczogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKCB2ZWN0b3JTaXplOiBudW1iZXIsIHNhbHRTaXplOiBudW1iZXIsIGl0ZXJhdGlvbnM6IG51bWJlciApe1xuXHRcdC8vY29uc29sZS5kZWJ1ZygnbmV3IENyeXB0b0hlbHBlcjIzMDQnLCB7dmVjdG9yU2l6ZSwgc2FsdFNpemUsIGl0ZXJhdGlvbnN9KTtcblx0XHR0aGlzLnZlY3RvclNpemUgPSB2ZWN0b3JTaXplO1xuXHRcdHRoaXMuc2FsdFNpemUgPSBzYWx0U2l6ZTtcblx0XHR0aGlzLml0ZXJhdGlvbnMgPSBpdGVyYXRpb25zO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBkZXJpdmVLZXkoIHBhc3N3b3JkOnN0cmluZywgc2FsdDpVaW50OEFycmF5ICkgOlByb21pc2U8Q3J5cHRvS2V5PiB7XG5cdFx0Ly8gY29uc29sZS50cmFjZSgnQ3J5cHRvSGVscGVyMjMwNC5kZXJpdmVLZXknKTtcblx0XHQvL1NlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1N1YnRsZUNyeXB0b1xuXHRcdGNvbnN0IHV0ZjhFbmNvZGVyXHQ9IG5ldyBUZXh0RW5jb2RlcigpO1xuXHRcdGNvbnN0IGJ1ZmZlciAgICAgPSB1dGY4RW5jb2Rlci5lbmNvZGUocGFzc3dvcmQpO1xuXHRcdGNvbnN0IGtleSAgICAgICAgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcblx0XHRcdC8qZm9ybWF0Ki8gJ3JhdycsXG5cdFx0XHQvKmtleURhdGEqLyBidWZmZXIsXG5cdFx0XHQvKmFsZ29yaXRobSovICdQQktERjInLFxuXHRcdFx0LypleHRyYWN0YWJsZSovIGZhbHNlLFxuXHRcdFx0LyprZXlVc2FnZXMqLyBbJ2Rlcml2ZUtleSddXG5cdFx0KTtcblx0XHRcblx0XHQvL2NvbnNvbGUudGltZSgnQ3J5cHRvSGVscGVyMjMwNC5kZXJpdmVLZXknKTtcblx0XHR0cnl7XG5cdFx0XHRjb25zdCBwcml2YXRlS2V5ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZXJpdmVLZXkoXG5cdFx0XHRcdC8qYWxnb3JpdGhtKi8ge1xuXHRcdFx0XHRcdG5hbWU6ICdQQktERjInLFxuXHRcdFx0XHRcdGhhc2g6ICdTSEEtNTEyJyxcblx0XHRcdFx0XHRzYWx0OiBzYWx0LmJ1ZmZlciBhcyBBcnJheUJ1ZmZlcixcblx0XHRcdFx0XHRpdGVyYXRpb25zOiB0aGlzLml0ZXJhdGlvbnMsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8qYmFzZUtleSovIGtleSxcblx0XHRcdFx0LypkZXJpdmVkS2V5QWxnb3JpdGhtKi8ge1xuXHRcdFx0XHRcdG5hbWU6ICdBRVMtR0NNJyxcblx0XHRcdFx0XHRsZW5ndGg6IDI1NlxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKmV4dHJhY3RhYmxlKi8gZmFsc2UsXG5cdFx0XHRcdC8qa2V5VXNhZ2VzKi8gWydlbmNyeXB0JywgJ2RlY3J5cHQnXVxuXHRcdFx0KTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHByaXZhdGVLZXk7XG5cdFx0fWZpbmFsbHl7XG5cdFx0XHQvL2NvbnNvbGUudGltZUVuZCgnQ3J5cHRvSGVscGVyMjMwNC5kZXJpdmVLZXknKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGVuY3J5cHRUb0J5dGVzKCB0ZXh0OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcgKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XG5cblx0XHRjb25zdCBzYWx0ID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyggbmV3IFVpbnQ4QXJyYXkodGhpcy5zYWx0U2l6ZSkgKTtcblxuXHRcdGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuZGVyaXZlS2V5KCBwYXNzd29yZCwgc2FsdCApO1xuXHRcdFxuXHRcdGNvbnN0IHV0ZjhFbmNvZGVyXHQ9IG5ldyBUZXh0RW5jb2RlcigpO1xuXHRcdGNvbnN0IHRleHRCeXRlc1RvRW5jcnlwdCA9IHV0ZjhFbmNvZGVyLmVuY29kZSh0ZXh0KTtcblx0XHRjb25zdCB2ZWN0b3IgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHRoaXMudmVjdG9yU2l6ZSkpO1xuXHRcdFxuXHRcdC8vIGVuY3J5cHQgaW50byBieXRlc1xuXHRcdGNvbnN0IGVuY3J5cHRlZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoXG5cdFx0XHRhd2FpdCBjcnlwdG8uc3VidGxlLmVuY3J5cHQoXG5cdFx0XHRcdC8qYWxnb3JpdGhtKi8ge1xuXHRcdFx0XHRcdG5hbWU6ICdBRVMtR0NNJyxcblx0XHRcdFx0XHRpdjogdmVjdG9yXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8qa2V5Ki8ga2V5LFxuXHRcdFx0XHQvKmRhdGEqLyB0ZXh0Qnl0ZXNUb0VuY3J5cHRcblx0XHRcdClcblx0XHQpO1xuXHRcdFxuXHRcdGNvbnN0IGZpbmFsQnl0ZXMgPSBuZXcgVWludDhBcnJheSggdmVjdG9yLmJ5dGVMZW5ndGggKyBzYWx0LmJ5dGVMZW5ndGggKyBlbmNyeXB0ZWRCeXRlcy5ieXRlTGVuZ3RoICk7XG5cdFx0ZmluYWxCeXRlcy5zZXQoIHZlY3RvciwgMCApO1xuXHRcdGZpbmFsQnl0ZXMuc2V0KCBzYWx0LCB2ZWN0b3IuYnl0ZUxlbmd0aCApO1xuXHRcdGZpbmFsQnl0ZXMuc2V0KCBlbmNyeXB0ZWRCeXRlcywgdmVjdG9yLmJ5dGVMZW5ndGggKyBzYWx0LmJ5dGVMZW5ndGggKTtcblxuXHRcdHJldHVybiBmaW5hbEJ5dGVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VG9TdHJpbmcoIGJ5dGVzIDogVWludDhBcnJheSApOiBzdHJpbmcge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRmb3IgKGxldCBpZHggPSAwOyBpZHggPCBieXRlcy5sZW5ndGg7IGlkeCsrKSB7XG5cdFx0XHQvLyBhcHBlbmQgdG8gcmVzdWx0XG5cdFx0XHRyZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpZHhdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0VG9CYXNlNjQodGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuXHRcdGNvbnN0IGZpbmFsQnl0ZXMgPSBhd2FpdCB0aGlzLmVuY3J5cHRUb0J5dGVzKHRleHQsIHBhc3N3b3JkKTtcblxuXHRcdC8vY29udmVydCBhcnJheSB0byBiYXNlNjRcblx0XHRjb25zdCBiYXNlNjRUZXh0ID0gYnRvYSggdGhpcy5jb252ZXJ0VG9TdHJpbmcoZmluYWxCeXRlcykgKTtcblxuXHRcdHJldHVybiBiYXNlNjRUZXh0O1xuXHR9XG5cblx0cHJpdmF0ZSBzdHJpbmdUb0FycmF5KHN0cjogc3RyaW5nKTogVWludDhBcnJheSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdC5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBVaW50OEFycmF5KHJlc3VsdCk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGRlY3J5cHRGcm9tQnl0ZXMoXG5cdFx0ZW5jcnlwdGVkQnl0ZXM6IFVpbnQ4QXJyYXksXG5cdFx0cGFzc3dvcmQ6IHN0cmluZ1xuXHQpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XG5cdFx0dHJ5IHtcblx0XHRcdFxuXHRcdFx0bGV0IG9mZnNldDogbnVtYmVyO1xuXHRcdFx0bGV0IG5leHRPZmZzZXQgOiBudW1iZXJ8dW5kZWZpbmVkO1xuXHRcdFx0XG5cdFx0XHQvLyBleHRyYWN0IGl2XG5cdFx0XHRvZmZzZXQgPSAwO1xuXHRcdFx0bmV4dE9mZnNldCA9IG9mZnNldCArIHRoaXMudmVjdG9yU2l6ZTtcblx0XHRcdGNvbnN0IHZlY3RvciA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKG9mZnNldCwgbmV4dE9mZnNldCk7XG5cdFx0XHRcblx0XHRcdC8vIGV4dHJhY3Qgc2FsdFxuXHRcdFx0b2Zmc2V0ID0gbmV4dE9mZnNldDtcblx0XHRcdG5leHRPZmZzZXQgPSBvZmZzZXQgKyB0aGlzLnNhbHRTaXplO1xuXHRcdFx0Y29uc3Qgc2FsdCA9IGVuY3J5cHRlZEJ5dGVzLnNsaWNlKG9mZnNldCwgbmV4dE9mZnNldCk7XG5cdFx0XHRcblx0XHRcdC8vIGV4dHJhY3QgZW5jcnlwdGVkIHRleHRcblx0XHRcdG9mZnNldCA9IG5leHRPZmZzZXQ7XG5cdFx0XHRuZXh0T2Zmc2V0ID0gdW5kZWZpbmVkO1xuXHRcdFx0Y29uc3QgZW5jcnlwdGVkVGV4dEJ5dGVzID0gZW5jcnlwdGVkQnl0ZXMuc2xpY2Uob2Zmc2V0KTtcblx0XHRcdFxuXHRcdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5kZXJpdmVLZXkocGFzc3dvcmQsIHNhbHQpO1xuXHRcdFx0XG5cdFx0XHQvLyBkZWNyeXB0IGludG8gYnl0ZXNcblx0XHRcdGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KFxuXHRcdFx0XHQvKmFsZ29yaXRobSovIHtcblx0XHRcdFx0XHRuYW1lOiAnQUVTLUdDTScsXG5cdFx0XHRcdFx0aXY6IHZlY3RvclxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKmtleSovIGtleSxcblx0XHRcdFx0LypkYXRhKi8gZW5jcnlwdGVkVGV4dEJ5dGVzXG5cdFx0XHQpO1xuXHRcdFx0XG5cdFx0XHQvLyBjb252ZXJ0IGJ5dGVzIHRvIHRleHRcblx0XHRcdGNvbnN0IHV0ZjhEZWNvZGVyXHQ9IG5ldyBUZXh0RGVjb2RlcigpO1xuXHRcdFx0Y29uc3QgZGVjcnlwdGVkVGV4dCA9IHV0ZjhEZWNvZGVyLmRlY29kZShkZWNyeXB0ZWRCeXRlcyk7XG5cdFx0XHRyZXR1cm4gZGVjcnlwdGVkVGV4dDtcblx0XHRcdFxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEZyb21CYXNlNjQoIGJhc2U2NEVuY29kZWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyApOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGJ5dGVzVG9EZWNvZGUgPSB0aGlzLnN0cmluZ1RvQXJyYXkoYXRvYihiYXNlNjRFbmNvZGVkKSk7XG5cdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5kZWNyeXB0RnJvbUJ5dGVzKCBieXRlc1RvRGVjb2RlLCBwYXNzd29yZCApO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxufSIsICJleHBvcnQgY29uc3QgYWxnb3JpdGhtT2Jzb2xldGUgPSB7XG5cdG5hbWU6ICdBRVMtR0NNJyxcblx0aXY6IG5ldyBVaW50OEFycmF5KFsxOTYsIDE5MCwgMjQwLCAxOTAsIDE4OCwgNzgsIDQxLCAxMzIsIDE1LCAyMjAsIDg0LCAyMTFdKSxcblx0dGFnTGVuZ3RoOiAxMjhcbn1cblxuZXhwb3J0IGNsYXNzIENyeXB0b0hlbHBlck9ic29sZXRlIHtcblxuXHRwcml2YXRlIGFzeW5jIGJ1aWxkS2V5KHBhc3N3b3JkOiBzdHJpbmcpIHtcblx0XHRjb25zdCB1dGY4RW5jb2RlID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cdFx0Y29uc3QgcGFzc3dvcmRCeXRlcyA9IHV0ZjhFbmNvZGUuZW5jb2RlKHBhc3N3b3JkKTtcblxuXHRcdGNvbnN0IHBhc3N3b3JkRGlnZXN0ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoeyBuYW1lOiAnU0hBLTI1NicgfSwgcGFzc3dvcmRCeXRlcyk7XG5cblx0XHRjb25zdCBrZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcblx0XHRcdCdyYXcnLFxuXHRcdFx0cGFzc3dvcmREaWdlc3QsXG5cdFx0XHRhbGdvcml0aG1PYnNvbGV0ZSxcblx0XHRcdGZhbHNlLFxuXHRcdFx0WydlbmNyeXB0JywgJ2RlY3J5cHQnXVxuXHRcdCk7XG5cblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cdFxuXHQvKipcbiAgXHQqIEBkZXByZWNhdGVkXG4gXHQqL1xuXHRwdWJsaWMgYXN5bmMgZW5jcnlwdFRvQmFzZTY0KHRleHQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5idWlsZEtleShwYXNzd29yZCk7XG5cblx0XHRjb25zdCB1dGY4RW5jb2RlID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cdFx0Y29uc3QgYnl0ZXNUb0VuY3J5cHQgPSB1dGY4RW5jb2RlLmVuY29kZSh0ZXh0KTtcblxuXHRcdC8vIGVuY3J5cHQgaW50byBieXRlc1xuXHRcdGNvbnN0IGVuY3J5cHRlZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KFxuXHRcdFx0YWxnb3JpdGhtT2Jzb2xldGUsIGtleSwgYnl0ZXNUb0VuY3J5cHRcblx0XHQpKTtcblxuXHRcdC8vY29udmVydCBhcnJheSB0byBiYXNlNjRcblx0XHRjb25zdCBiYXNlNjRUZXh0ID0gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmVuY3J5cHRlZEJ5dGVzKSk7XG5cblx0XHRyZXR1cm4gYmFzZTY0VGV4dDtcblx0fVxuXG5cdHByaXZhdGUgc3RyaW5nVG9BcnJheShzdHI6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpO1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGRlY3J5cHRGcm9tQmFzZTY0KGJhc2U2NEVuY29kZWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gY29udmVydCBiYXNlIDY0IHRvIGFycmF5XG5cdFx0XHRjb25zdCBieXRlc1RvRGVjcnlwdCA9IHRoaXMuc3RyaW5nVG9BcnJheShhdG9iKGJhc2U2NEVuY29kZWQpKTtcblxuXHRcdFx0Y29uc3Qga2V5ID0gYXdhaXQgdGhpcy5idWlsZEtleShwYXNzd29yZCk7XG5cblx0XHRcdC8vIGRlY3J5cHQgaW50byBieXRlc1xuXHRcdFx0Y29uc3QgZGVjcnlwdGVkQnl0ZXMgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRlY3J5cHQoYWxnb3JpdGhtT2Jzb2xldGUsIGtleSwgYnl0ZXNUb0RlY3J5cHQuYnVmZmVyIGFzIEFycmF5QnVmZmVyKTtcblxuXHRcdFx0Ly8gY29udmVydCBieXRlcyB0byB0ZXh0XG5cdFx0XHRjb25zdCB1dGY4RGVjb2RlID0gbmV3IFRleHREZWNvZGVyKCk7XG5cdFx0XHRjb25zdCBkZWNyeXB0ZWRUZXh0ID0gdXRmOERlY29kZS5kZWNvZGUoZGVjcnlwdGVkQnl0ZXMpO1xuXHRcdFx0cmV0dXJuIGRlY3J5cHRlZFRleHQ7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBJQ3J5cHRvSGVscGVyIH0gZnJvbSAnLi9JQ3J5cHRvSGVscGVyLnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBDcnlwdG9FbnZlbG9wZVYzIHtcblx0dmVyc2lvbjogJzMuMCc7XG5cdGtkZjogeyBuYW1lOiAnUEJLREYyJzsgaGFzaDogJ1NIQS01MTInOyBpdGVyYXRpb25zOiBudW1iZXI7IHNhbHQ6IHN0cmluZyB9O1xuXHRjaXBoZXI6IHsgbmFtZTogJ0FFUy1HQ00nOyBrZXlMZW5ndGg6IDI1NjsgaXY6IHN0cmluZzsgdGFnTGVuZ3RoOiAxMjggfTtcblx0ZW5jb2RlZERhdGE6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFYzX0RFRkFVTFRfSVRFUkFUSU9OUyA9IDIyMDAwMDtcbi8vIFJlYWRlciBib3VuZHMgYXJlIGZvcm1hdCBwb2xpY3ksIGluZGVwZW5kZW50IG9mIGZ1dHVyZSB3cml0ZXIgZGVmYXVsdHMuXG5leHBvcnQgY29uc3QgVjNfTUlOX0lURVJBVElPTlMgPSAyMjAwMDA7XG5leHBvcnQgY29uc3QgVjNfTUFYX0lURVJBVElPTlMgPSAyMDAwMDAwO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlQmFzZTY0KGJ5dGVzOiBVaW50OEFycmF5KTogc3RyaW5nIHtcblx0bGV0IGJpbmFyeSA9ICcnO1xuXHRmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBieXRlcy5sZW5ndGg7IG9mZnNldCArPSA4MTkyKSB7XG5cdFx0YmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoLi4uYnl0ZXMuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyA4MTkyKSk7XG5cdH1cblx0cmV0dXJuIGJ0b2EoYmluYXJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUJhc2U2NCh2YWx1ZTogdW5rbm93bik6IFVpbnQ4QXJyYXkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCB2YWx1ZS5sZW5ndGggJSA0ICE9PSAwIHx8IC9bXkEtWmEtejAtOSsvPV0vLnRlc3QodmFsdWUpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHYzIEJhc2U2NCcpO1xuXHR9XG5cdGNvbnN0IGJ5dGVzID0gVWludDhBcnJheS5mcm9tKGF0b2IodmFsdWUpLCBjaGFyYWN0ZXIgPT4gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkpO1xuXHRpZiAoZW5jb2RlQmFzZTY0KGJ5dGVzKSAhPT0gdmFsdWUpIHRocm93IG5ldyBFcnJvcignTm9uY2Fub25pY2FsIHYzIEJhc2U2NCcpO1xuXHRyZXR1cm4gYnl0ZXM7XG59XG5cbmZ1bmN0aW9uIHJlY29yZCh2YWx1ZTogdW5rbm93biwga2V5czogc3RyaW5nW10pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpXG5cdFx0fHwgT2JqZWN0LmtleXModmFsdWUpLnNvbWUoa2V5ID0+ICFrZXlzLmluY2x1ZGVzKGtleSkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHYzIG1ldGFkYXRhJyk7XG5cdH1cblx0cmV0dXJuIHZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUl0ZXJhdGlvbnMoaXRlcmF0aW9uczogdW5rbm93bik6IGFzc2VydHMgaXRlcmF0aW9ucyBpcyBudW1iZXIge1xuXHRpZiAodHlwZW9mIGl0ZXJhdGlvbnMgIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKGl0ZXJhdGlvbnMpXG5cdFx0fHwgaXRlcmF0aW9ucyA8IFYzX01JTl9JVEVSQVRJT05TIHx8IGl0ZXJhdGlvbnMgPiBWM19NQVhfSVRFUkFUSU9OUykge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdjMgaXRlcmF0aW9uIGNvdW50Jyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGVhZGVyKGl0ZXJhdGlvbnM6IG51bWJlciwgc2FsdDogVWludDhBcnJheSwgaXY6IFVpbnQ4QXJyYXkpOiBPbWl0PENyeXB0b0VudmVsb3BlVjMsICdlbmNvZGVkRGF0YSc+IHtcblx0cmV0dXJuIHtcblx0XHR2ZXJzaW9uOiAnMy4wJyxcblx0XHRrZGY6IHsgbmFtZTogJ1BCS0RGMicsIGhhc2g6ICdTSEEtNTEyJywgaXRlcmF0aW9ucywgc2FsdDogZW5jb2RlQmFzZTY0KHNhbHQpIH0sXG5cdFx0Y2lwaGVyOiB7IG5hbWU6ICdBRVMtR0NNJywga2V5TGVuZ3RoOiAyNTYsIGl2OiBlbmNvZGVCYXNlNjQoaXYpLCB0YWdMZW5ndGg6IDEyOCB9LFxuXHR9O1xufVxuXG4vLyBSZWNvbnN0cnVjdCBhIGNhbm9uaWNhbCBoZWFkZXIgc28gaW5wdXQgSlNPTiBwcm9wZXJ0eSBvcmRlciBjYW5ub3QgY2hhbmdlIEFBRC5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVudmVsb3BlVjModmFsdWU6IHVua25vd24pOiBDcnlwdG9FbnZlbG9wZVYzIHtcblx0Y29uc3QgZGF0YSA9IHJlY29yZCh2YWx1ZSwgWyd2ZXJzaW9uJywgJ2hpbnQnLCAna2RmJywgJ2NpcGhlcicsICdlbmNvZGVkRGF0YSddKTtcblx0Y29uc3Qga2RmID0gcmVjb3JkKGRhdGEua2RmLCBbJ25hbWUnLCAnaGFzaCcsICdpdGVyYXRpb25zJywgJ3NhbHQnXSk7XG5cdGNvbnN0IGNpcGhlciA9IHJlY29yZChkYXRhLmNpcGhlciwgWyduYW1lJywgJ2tleUxlbmd0aCcsICdpdicsICd0YWdMZW5ndGgnXSk7XG5cdGlmIChkYXRhLnZlcnNpb24gIT09ICczLjAnIHx8IGtkZi5uYW1lICE9PSAnUEJLREYyJyB8fCBrZGYuaGFzaCAhPT0gJ1NIQS01MTInXG5cdFx0fHwgY2lwaGVyLm5hbWUgIT09ICdBRVMtR0NNJyB8fCBjaXBoZXIua2V5TGVuZ3RoICE9PSAyNTYgfHwgY2lwaGVyLnRhZ0xlbmd0aCAhPT0gMTI4XG5cdFx0fHwgKCdoaW50JyBpbiBkYXRhICYmIHR5cGVvZiBkYXRhLmhpbnQgIT09ICdzdHJpbmcnKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdjMgY3J5cHRvIHN1aXRlJyk7XG5cdH1cblx0dmFsaWRhdGVJdGVyYXRpb25zKGtkZi5pdGVyYXRpb25zKTtcblx0Y29uc3Qgc2FsdCA9IGRlY29kZUJhc2U2NChrZGYuc2FsdCk7XG5cdGNvbnN0IGl2ID0gZGVjb2RlQmFzZTY0KGNpcGhlci5pdik7XG5cdGNvbnN0IGNpcGhlcnRleHQgPSBkZWNvZGVCYXNlNjQoZGF0YS5lbmNvZGVkRGF0YSk7XG5cdGlmIChzYWx0Lmxlbmd0aCAhPT0gMTYgfHwgaXYubGVuZ3RoICE9PSAxMiB8fCBjaXBoZXJ0ZXh0Lmxlbmd0aCA8IDE2KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHYzIHBheWxvYWQgbGVuZ3RocycpO1xuXHR9XG5cdHJldHVybiB7IC4uLmhlYWRlcihrZGYuaXRlcmF0aW9ucywgc2FsdCwgaXYpLCBlbmNvZGVkRGF0YTogZW5jb2RlQmFzZTY0KGNpcGhlcnRleHQpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVJbmxpbmVWMyh2YWx1ZTogQ3J5cHRvRW52ZWxvcGVWMyk6IHN0cmluZyB7XG5cdGNvbnN0IGVudmVsb3BlID0gdmFsaWRhdGVFbnZlbG9wZVYzKHZhbHVlKTtcblx0Y29uc3QgY2lwaGVydGV4dCA9IGRlY29kZUJhc2U2NChlbnZlbG9wZS5lbmNvZGVkRGF0YSk7XG5cdGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMzIgKyBjaXBoZXJ0ZXh0Lmxlbmd0aCk7XG5cdC8vIFN1aXRlIDEgaXMgcGVybWFuZW50bHkgUEJLREYyLVNIQTUxMiAvIEFFUy0yNTYtR0NNLCBzYWx0MTYgLyBJVjEyIC8gdGFnMTYuXG5cdGJ5dGVzWzBdID0gMTtcblx0Y29uc3QgaXRlcmF0aW9ucyA9IGVudmVsb3BlLmtkZi5pdGVyYXRpb25zO1xuXHRieXRlc1sxXSA9IGl0ZXJhdGlvbnMgPj4+IDE2O1xuXHRieXRlc1syXSA9IGl0ZXJhdGlvbnMgPj4+IDg7XG5cdGJ5dGVzWzNdID0gaXRlcmF0aW9ucztcblx0Ynl0ZXMuc2V0KGRlY29kZUJhc2U2NChlbnZlbG9wZS5rZGYuc2FsdCksIDQpO1xuXHRieXRlcy5zZXQoZGVjb2RlQmFzZTY0KGVudmVsb3BlLmNpcGhlci5pdiksIDIwKTtcblx0Ynl0ZXMuc2V0KGNpcGhlcnRleHQsIDMyKTtcblx0cmV0dXJuIGVuY29kZUJhc2U2NChieXRlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVJbmxpbmVWMyhlbmNvZGVkOiBzdHJpbmcpOiBDcnlwdG9FbnZlbG9wZVYzIHtcblx0Y29uc3QgYnl0ZXMgPSBkZWNvZGVCYXNlNjQoZW5jb2RlZCk7XG5cdGlmIChieXRlcy5sZW5ndGggPCA0OCB8fCBieXRlc1swXSAhPT0gMSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHYzIGlubGluZSBoZWFkZXInKTtcblx0Y29uc3QgaXRlcmF0aW9ucyA9IGJ5dGVzWzFdICogNjU1MzYgKyBieXRlc1syXSAqIDI1NiArIGJ5dGVzWzNdO1xuXHR2YWxpZGF0ZUl0ZXJhdGlvbnMoaXRlcmF0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0Li4uaGVhZGVyKGl0ZXJhdGlvbnMsIGJ5dGVzLnNsaWNlKDQsIDIwKSwgYnl0ZXMuc2xpY2UoMjAsIDMyKSksXG5cdFx0ZW5jb2RlZERhdGE6IGVuY29kZUJhc2U2NChieXRlcy5zbGljZSgzMikpLFxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRpdGlvbmFsRGF0YShlbnZlbG9wZTogQ3J5cHRvRW52ZWxvcGVWMyk6IFVpbnQ4QXJyYXkge1xuXHRjb25zdCB7IHZlcnNpb24sIGtkZiwgY2lwaGVyIH0gPSBlbnZlbG9wZTtcblx0cmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShKU09OLnN0cmluZ2lmeSh7IHZlcnNpb24sIGtkZiwgY2lwaGVyIH0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVyaXZlS2V5KHBhc3N3b3JkOiBzdHJpbmcsIGVudmVsb3BlOiBDcnlwdG9FbnZlbG9wZVYzKTogUHJvbWlzZTxDcnlwdG9LZXk+IHtcblx0Y29uc3QgbWF0ZXJpYWwgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgncmF3JywgbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHBhc3N3b3JkKSwgJ1BCS0RGMicsIGZhbHNlLCBbJ2Rlcml2ZUtleSddKTtcblx0cmV0dXJuIGNyeXB0by5zdWJ0bGUuZGVyaXZlS2V5KHtcblx0XHRuYW1lOiAnUEJLREYyJywgaGFzaDogZW52ZWxvcGUua2RmLmhhc2gsXG5cdFx0c2FsdDogZGVjb2RlQmFzZTY0KGVudmVsb3BlLmtkZi5zYWx0KS5idWZmZXIgYXMgQXJyYXlCdWZmZXIsXG5cdFx0aXRlcmF0aW9uczogZW52ZWxvcGUua2RmLml0ZXJhdGlvbnMsXG5cdH0sIG1hdGVyaWFsLCB7IG5hbWU6ICdBRVMtR0NNJywgbGVuZ3RoOiBlbnZlbG9wZS5jaXBoZXIua2V5TGVuZ3RoIH0sIGZhbHNlLCBbJ2VuY3J5cHQnLCAnZGVjcnlwdCddKTtcbn1cblxuZXhwb3J0IGNsYXNzIENyeXB0b0hlbHBlclYzIGltcGxlbWVudHMgSUNyeXB0b0hlbHBlciB7XG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0RW52ZWxvcGUodGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxDcnlwdG9FbnZlbG9wZVYzPiB7XG5cdFx0Y29uc3QgbWV0YWRhdGEgPSBoZWFkZXIoVjNfREVGQVVMVF9JVEVSQVRJT05TLCBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDE2KSksIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTIpKSk7XG5cdFx0Y29uc3QgZW52ZWxvcGUgPSB7IC4uLm1ldGFkYXRhLCBlbmNvZGVkRGF0YTogJycgfTtcblx0XHRjb25zdCBrZXkgPSBhd2FpdCBkZXJpdmVLZXkocGFzc3dvcmQsIGVudmVsb3BlKTtcblx0XHRjb25zdCBjaXBoZXJ0ZXh0ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5lbmNyeXB0KHtcblx0XHRcdG5hbWU6ICdBRVMtR0NNJywgaXY6IGRlY29kZUJhc2U2NChtZXRhZGF0YS5jaXBoZXIuaXYpLmJ1ZmZlciBhcyBBcnJheUJ1ZmZlcixcblx0XHRcdHRhZ0xlbmd0aDogMTI4LCBhZGRpdGlvbmFsRGF0YTogYWRkaXRpb25hbERhdGEoZW52ZWxvcGUpLmJ1ZmZlciBhcyBBcnJheUJ1ZmZlcixcblx0XHR9LCBrZXksIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSh0ZXh0KSk7XG5cdFx0cmV0dXJuIHsgLi4ubWV0YWRhdGEsIGVuY29kZWREYXRhOiBlbmNvZGVCYXNlNjQobmV3IFVpbnQ4QXJyYXkoY2lwaGVydGV4dCkpIH07XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgZGVjcnlwdEVudmVsb3BlKHZhbHVlOiB1bmtub3duLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGVudmVsb3BlID0gdmFsaWRhdGVFbnZlbG9wZVYzKHZhbHVlKTtcblx0XHRcdGNvbnN0IGtleSA9IGF3YWl0IGRlcml2ZUtleShwYXNzd29yZCwgZW52ZWxvcGUpO1xuXHRcdFx0Y29uc3QgcGxhaW50ZXh0ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KHtcblx0XHRcdFx0bmFtZTogJ0FFUy1HQ00nLCBpdjogZGVjb2RlQmFzZTY0KGVudmVsb3BlLmNpcGhlci5pdikuYnVmZmVyIGFzIEFycmF5QnVmZmVyLFxuXHRcdFx0XHR0YWdMZW5ndGg6IDEyOCwgYWRkaXRpb25hbERhdGE6IGFkZGl0aW9uYWxEYXRhKGVudmVsb3BlKS5idWZmZXIgYXMgQXJyYXlCdWZmZXIsXG5cdFx0XHR9LCBrZXksIGRlY29kZUJhc2U2NChlbnZlbG9wZS5lbmNvZGVkRGF0YSkuYnVmZmVyIGFzIEFycmF5QnVmZmVyKTtcblx0XHRcdHJldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUocGxhaW50ZXh0KTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhc3luYyBlbmNyeXB0VG9CYXNlNjQodGV4dDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gZW5jb2RlSW5saW5lVjMoYXdhaXQgdGhpcy5lbmNyeXB0RW52ZWxvcGUodGV4dCwgcGFzc3dvcmQpKTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBkZWNyeXB0RnJvbUJhc2U2NChlbmNvZGVkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuZGVjcnlwdEVudmVsb3BlKGRlY29kZUlubGluZVYzKGVuY29kZWQpLCBwYXNzd29yZCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cbn1cbiIsICJpbXBvcnQgeyBGaWxlRGF0YSB9IGZyb20gXCIuL0ZpbGVEYXRhSGVscGVyLnRzXCI7XG5pbXBvcnQgeyBEZWNyeXB0YWJsZSB9IGZyb20gXCIuLi9mZWF0dXJlcy9mZWF0dXJlLWlucGxhY2UtZW5jcnlwdC9EZWNyeXB0YWJsZS50c1wiO1xuaW1wb3J0IHsgQ3J5cHRvSGVscGVyIH0gZnJvbSBcIi4vQ3J5cHRvSGVscGVyLnRzXCI7XG5pbXBvcnQgeyBJQ3J5cHRvSGVscGVyIH0gZnJvbSBcIi4vSUNyeXB0b0hlbHBlci50c1wiO1xuaW1wb3J0IHsgQ3J5cHRvSGVscGVyMjMwNCB9IGZyb20gXCIuL0NyeXB0b0hlbHBlcjIzMDQudHNcIjtcbmltcG9ydCB7IENyeXB0b0hlbHBlck9ic29sZXRlIH0gZnJvbSBcIi4vQ3J5cHRvSGVscGVyT2Jzb2xldGUudHNcIjtcblxuaW1wb3J0IHsgQ3J5cHRvSGVscGVyVjMgfSBmcm9tICcuL0NyeXB0b0hlbHBlclYzLnRzJztcblxuZXhwb3J0IGNsYXNzIENyeXB0b0hlbHBlckZhY3Rvcnl7XG5cblx0cHVibGljIHN0YXRpYyBjcnlwdG9IZWxwZXIyMzA0X3YyID0gbmV3IENyeXB0b0hlbHBlcjIzMDQoIDE2LCAxNiwgMjEwMDAwICk7XG5cdC8vIFBCS0RGMi1ITUFDLVNIQTUxMiB1c2VzIGEgMjIwLDAwMC1pdGVyYXRpb24gd29yayBmYWN0b3IgKE9XQVNQKS5cblx0Ly8gVjMgc3RvcmVzIGl0cyBwYXJhbWV0ZXJzIGluIGFuIGF1dGhlbnRpY2F0ZWQgZW52ZWxvcGUuXG5cdHB1YmxpYyBzdGF0aWMgY3J5cHRvSGVscGVyX3YzID0gbmV3IENyeXB0b0hlbHBlclYzKCk7XG5cblx0cHVibGljIHN0YXRpYyBCdWlsZERlZmF1bHQoKTogQ3J5cHRvSGVscGVyVjN7XG5cdFx0cmV0dXJuIHRoaXMuY3J5cHRvSGVscGVyX3YzO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21GaWxlRGF0YU9yVGhyb3coIGRhdGE6IEZpbGVEYXRhICkgOiBJQ3J5cHRvSGVscGVyIHtcblx0XHRjb25zdCByZXN1bHQgPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbUZpbGVEYXRhT3JOdWxsKGRhdGEpO1xuXHRcdGlmICggcmVzdWx0ICE9IG51bGwgKXtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvciggYFVuYWJsZSB0byBkZXRlcm1pbmUgSUNyeXB0b0hlbHBlciBmb3IgRmlsZSB2ZXIgJHtkYXRhLnZlcnNpb259YCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIEJ1aWxkRnJvbUZpbGVEYXRhT3JOdWxsKCBkYXRhOiBGaWxlRGF0YSApIDogSUNyeXB0b0hlbHBlciB8IG51bGwge1xuXHRcdGlmICggZGF0YS52ZXJzaW9uID09ICcxLjAnICl7XG5cdFx0XHRyZXR1cm4gbmV3IENyeXB0b0hlbHBlcigpO1xuXHRcdH1cblxuXHRcdC8vIG5vdGVcdFx0XHRcdHYyLjBcdENyeXB0b0hlbHBlcjIzMDRcblx0XHRpZiAoIGRhdGEudmVyc2lvbiA9PSAnMi4wJyApe1xuXHRcdFx0cmV0dXJuIHRoaXMuY3J5cHRvSGVscGVyMjMwNF92Mjtcblx0XHR9XG5cblx0XHQvLyBub3RlIHYzLjA6IGF1dGhlbnRpY2F0ZWQsIHNlbGYtZGVzY3JpYmluZyBlbnZlbG9wZVxuXHRcdGlmICggZGF0YS52ZXJzaW9uID09ICczLjAnICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcnlwdG9IZWxwZXJfdjM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIEJ1aWxkRnJvbURlY3J5cHRhYmxlT3JUaHJvdyggZGVjcnlwdGFibGU6IERlY3J5cHRhYmxlICkgOiBJQ3J5cHRvSGVscGVyIHtcblx0XHRjb25zdCByZXN1bHQgPSBDcnlwdG9IZWxwZXJGYWN0b3J5LkJ1aWxkRnJvbURlY3J5cHRhYmxlT3JOdWxsKCBkZWNyeXB0YWJsZSApO1xuXG5cdFx0aWYgKHJlc3VsdCAhPSBudWxsKXtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvciggYFVuYWJsZSB0byBkZXRlcm1pbmUgSUNyeXB0b0hlbHBlciBmb3IgRGVjcnlwdGFibGUgdmVyICR7ZGVjcnlwdGFibGUudmVyc2lvbi50b1N0cmluZygpfWApO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBCdWlsZEZyb21EZWNyeXB0YWJsZU9yTnVsbCggZGVjcnlwdGFibGU6IERlY3J5cHRhYmxlICkgOiBJQ3J5cHRvSGVscGVyIHwgbnVsbCB7XG5cdFx0Ly8gVmVyc2lvbnNcblx0XHQvLyBpbnBsYWNlIG9yaWdpbmFsXHRfUFJFRklYX09CU09MRVRFID0gJyUlXHVEODNEXHVERDEwICcgIENyeXB0b0hlbHBlck9ic29sZXRlXG5cdFx0XG5cdFx0Ly8gaW5wbGFjZSBhbHBoYVx0X1BSRUZJWF9BID0gJyUlXHVEODNEXHVERDEwXHUwM0IxICdcdFx0Q3J5cHRvSGVscGVyXG5cdFx0Ly8gXHRcdFx0XHRcdF9QUkVGSVhfQV9WSVNJQkxFID0gJ1x1RDgzRFx1REQxMFx1MDNCMSAnXHRDcnlwdG9IZWxwZXJcblxuXHRcdC8vIGlucGxhY2UgYmV0YSBcdF9QUkVGSVhfQiA9ICclJVx1RDgzRFx1REQxMFx1MDNCMiAnXHRcdENyeXB0b0hlbHBlcjIzMDQoIDE2LCAxNiwgMjEwMDAwIClcblx0XHQvL1x0XHRcdFx0XHRfUFJFRklYX0JfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjIgJ1x0Q3J5cHRvSGVscGVyMjMwNCggMTYsIDE2LCAyMTAwMDAgKVxuXHRcdFxuXHRcdC8vIGlucGxhY2UgZ2FtbWE6IGNvbXBhY3Qgc3VpdGUvaXRlcmF0aW9ucy9zYWx0L0lWL2NpcGhlcnRleHQgZW52ZWxvcGVcblx0XHQvLyBCb3RoIGhpZGRlbiBhbmQgdmlzaWJsZSBnYW1tYSBtYXJrZXJzIHVzZSBDcnlwdG9IZWxwZXJWMy5cblxuXHRcdGlmICggZGVjcnlwdGFibGUudmVyc2lvbiA9PSAwICl7XG5cdFx0XHRyZXR1cm4gbmV3IENyeXB0b0hlbHBlck9ic29sZXRlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWNyeXB0YWJsZS52ZXJzaW9uID09IDEgKXtcblx0XHRcdHJldHVybiBuZXcgQ3J5cHRvSGVscGVyKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWNyeXB0YWJsZS52ZXJzaW9uID09IDIgKXtcblx0XHRcdHJldHVybiB0aGlzLmNyeXB0b0hlbHBlcjIzMDRfdjI7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWNyeXB0YWJsZS52ZXJzaW9uID09IDMgKXtcblx0XHRcdHJldHVybiB0aGlzLmNyeXB0b0hlbHBlcl92Mztcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG59XG4iLCAiaW1wb3J0IHsgQ3J5cHRvSGVscGVyRmFjdG9yeSB9IGZyb20gXCIuL0NyeXB0b0hlbHBlckZhY3RvcnkudHNcIjtcblxuaW1wb3J0IHsgdmFsaWRhdGVFbnZlbG9wZVYzIH0gZnJvbSAnLi9DcnlwdG9IZWxwZXJWMy50cyc7XG5pbXBvcnQgdHlwZSB7IENyeXB0b0VudmVsb3BlVjMgfSBmcm9tICcuL0NyeXB0b0hlbHBlclYzLnRzJztcblxuY29uc3QgYmxhbmtGaWxlID0gU3ltYm9sKCdibGFuay1maWxlJyk7XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGF0YSB7XG5cdFxuXHRwdWJsaWMgdmVyc2lvbiA9ICcxLjAnO1xuXHRwdWJsaWMgaGludDogc3RyaW5nO1xuXHRwdWJsaWMgZW5jb2RlZERhdGE6c3RyaW5nO1xuXHRwdWJsaWMga2RmPzogQ3J5cHRvRW52ZWxvcGVWM1sna2RmJ107XG5cdHB1YmxpYyBjaXBoZXI/OiBDcnlwdG9FbnZlbG9wZVYzWydjaXBoZXInXTtcblx0cHVibGljIFtibGFua0ZpbGVdPzogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvciggdmVyc2lvbjpzdHJpbmcsIGhpbnQ6c3RyaW5nLCBlbmNvZGVkRGF0YTpzdHJpbmcgKXtcblx0XHR0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRcdHRoaXMuaGludCA9IGhpbnQ7XG5cdFx0dGhpcy5lbmNvZGVkRGF0YSA9IGVuY29kZWREYXRhO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGF0YUhlbHBlcntcblxuXHRwdWJsaWMgc3RhdGljIERFRkFVTFRfVkVSU0lPTiA9ICczLjAnO1xuXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgZW5jcnlwdCggcGFzczogc3RyaW5nLCBoaW50OnN0cmluZywgdGV4dDpzdHJpbmcgKSA6IFByb21pc2U8RmlsZURhdGE+e1xuXHRcdGNvbnN0IGNyeXB0byA9IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGREZWZhdWx0KCk7XG5cdFx0Y29uc3QgZW52ZWxvcGUgPSBhd2FpdCBjcnlwdG8uZW5jcnlwdEVudmVsb3BlKHRleHQsIHBhc3MpO1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBGaWxlRGF0YShlbnZlbG9wZS52ZXJzaW9uLCBoaW50LCBlbnZlbG9wZS5lbmNvZGVkRGF0YSksIHsga2RmOiBlbnZlbG9wZS5rZGYsIGNpcGhlcjogZW52ZWxvcGUuY2lwaGVyIH0pO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBhc3luYyBkZWNyeXB0KCBkYXRhOiBGaWxlRGF0YSwgcGFzczpzdHJpbmcgKSA6IFByb21pc2U8c3RyaW5nfG51bGw+e1xuXHRcdGlmIChkYXRhW2JsYW5rRmlsZV0pIHJldHVybiAnJztcblx0XHRpZiAoZGF0YS52ZXJzaW9uID09PSAnMy4wJykge1xuXHRcdFx0cmV0dXJuIGF3YWl0IENyeXB0b0hlbHBlckZhY3RvcnkuQnVpbGREZWZhdWx0KCkuZGVjcnlwdEVudmVsb3BlKGRhdGEsIHBhc3MpO1xuXHRcdH1cblx0XHRpZiAoIGRhdGEuZW5jb2RlZERhdGEgPT0gJycgKXtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgY3J5cHRvID0gQ3J5cHRvSGVscGVyRmFjdG9yeS5CdWlsZEZyb21GaWxlRGF0YU9yVGhyb3coIGRhdGEgKTtcblx0XHRyZXR1cm4gYXdhaXQgY3J5cHRvLmRlY3J5cHRGcm9tQmFzZTY0KCBkYXRhLmVuY29kZWREYXRhLCBwYXNzICk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEpzb25GaWxlRW5jb2Rpbmcge1xuXG5cdHB1YmxpYyBzdGF0aWMgZW5jb2RlKCBkYXRhOiBGaWxlRGF0YSApIDogc3RyaW5ne1xuXHRcdC8vY29uc29sZS5kZWJ1ZyggJ0pzb25GaWxlRW5jb2RpbmcuZW5jb2RlJywge2RhdGF9ICk7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBpc0VuY29kZWQoIHRleHQ6IHN0cmluZyApIDogYm9vbGVhbiB7XG5cdFx0dHJ5IHtcblx0XHRcdEpTT04ucGFyc2UoIHRleHQgKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGVycm9yICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBkZWNvZGUoIGVuY29kZWRUZXh0OnN0cmluZyApIDogRmlsZURhdGEge1xuXHRcdC8vY29uc29sZS5kZWJ1ZygnSnNvbkZpbGVFbmNvZGluZy5kZWNvZGUnLHtlbmNvZGVkVGV4dH0pO1xuXHRcdGlmICggZW5jb2RlZFRleHQgPT09ICcnICl7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRmlsZURhdGEoRmlsZURhdGFIZWxwZXIuREVGQVVMVF9WRVJTSU9OLCAnJywgJycpLCB7IFtibGFua0ZpbGVdOiB0cnVlIH0pO1xuXHRcdH1cblx0XHRjb25zdCBwYXJzZWQ6IHVua25vd24gPSBKU09OLnBhcnNlKCBlbmNvZGVkVGV4dCApO1xuXHRcdGlmICggcGFyc2VkID09PSBudWxsIHx8IHR5cGVvZiBwYXJzZWQgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkocGFyc2VkKSApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBGaWxlRGF0YSBKU09OJyk7XG5cdFx0fVxuXHRcdGNvbnN0IGRhdGEgPSBwYXJzZWQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cdFx0aWYgKFxuXHRcdFx0dHlwZW9mIGRhdGEudmVyc2lvbiAhPT0gJ3N0cmluZydcblx0XHRcdHx8IHR5cGVvZiBkYXRhLmhpbnQgIT09ICdzdHJpbmcnXG5cdFx0XHR8fCB0eXBlb2YgZGF0YS5lbmNvZGVkRGF0YSAhPT0gJ3N0cmluZydcblx0XHQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBGaWxlRGF0YSBKU09OJyk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLnZlcnNpb24gPT09ICczLjAnKSB7XG5cdFx0XHRjb25zdCBlbnZlbG9wZSA9IHZhbGlkYXRlRW52ZWxvcGVWMyhkYXRhKTtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBGaWxlRGF0YShlbnZlbG9wZS52ZXJzaW9uLCBkYXRhLmhpbnQsIGVudmVsb3BlLmVuY29kZWREYXRhKSwgeyBrZGY6IGVudmVsb3BlLmtkZiwgY2lwaGVyOiBlbnZlbG9wZS5jaXBoZXIgfSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgRmlsZURhdGEoIGRhdGEudmVyc2lvbiwgZGF0YS5oaW50LCBkYXRhLmVuY29kZWREYXRhICk7XG5cdH1cbn1cbiIsICJjb25zdCBFTkNSWVBURURfRklMRV9FWFRFTlNJT05fRU5DUllQVEVEID0gJ2VuY3J5cHRlZCc7XG5jb25zdCBFTkNSWVBURURfRklMRV9FWFRFTlNJT05fTURFTkMgPSAnbWRlbmMnO1xuXG5leHBvcnQgY29uc3QgRU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX0RFRkFVTFQgPSBFTkNSWVBURURfRklMRV9FWFRFTlNJT05fTURFTkM7XG5cblxuZXhwb3J0IGNvbnN0IEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTlMgPSBbXG5cdEVOQ1JZUFRFRF9GSUxFX0VYVEVOU0lPTl9NREVOQyxcblx0RU5DUllQVEVEX0ZJTEVfRVhURU5TSU9OX0VOQ1JZUFRFRFxuXTsiLCAiXG5leHBvcnQgY29uc3QgRU5DUllQVEVEX0lDT04gPSAnXHVEODNEXHVERDEwJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0MgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjMgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0NfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjMgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0IgPSAnJSVcdUQ4M0RcdUREMTBcdTAzQjIgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX0JfVklTSUJMRSA9ICdcdUQ4M0RcdUREMTBcdTAzQjIgJztcblxuZXhwb3J0IGNvbnN0IF9QUkVGSVhfQSA9ICclJVx1RDgzRFx1REQxMFx1MDNCMSAnO1xuZXhwb3J0IGNvbnN0IF9QUkVGSVhfQV9WSVNJQkxFID0gJ1x1RDgzRFx1REQxMFx1MDNCMSAnO1xuZXhwb3J0IGNvbnN0IF9QUkVGSVhfT0JTT0xFVEUgPSAnJSVcdUQ4M0RcdUREMTAgJztcbmV4cG9ydCBjb25zdCBfUFJFRklYX09CU09MRVRFX1ZJU0lCTEUgPSAnXHVEODNEXHVERDEwICc7XG5cbmV4cG9ydCBjb25zdCBfUFJFRklYX0VOQ09ERV9ERUZBVUxUID0gX1BSRUZJWF9DO1xuZXhwb3J0IGNvbnN0IF9QUkVGSVhfRU5DT0RFX0RFRkFVTFRfVklTSUJMRSA9IF9QUkVGSVhfQ19WSVNJQkxFO1xuXG4vLyBTaG91bGQgYmUgbGlzdGVkIGJ5IGV2YWx1YXRpb24gcHJpb3JpdHlcbmV4cG9ydCBjb25zdCBfUFJFRklYRVMgPSBbXG5cdF9QUkVGSVhfQyxcblx0X1BSRUZJWF9DX1ZJU0lCTEUsXG5cdF9QUkVGSVhfQixcblx0X1BSRUZJWF9CX1ZJU0lCTEUsXG5cdF9QUkVGSVhfQSxcblx0X1BSRUZJWF9BX1ZJU0lCTEUsXG5cdF9QUkVGSVhfT0JTT0xFVEUsXG5cdF9QUkVGSVhfT0JTT0xFVEVfVklTSUJMRVxuXTtcblxuZXhwb3J0IGNvbnN0IF9TVUZGSVhfV0lUSF9DT01NRU5UID0gJyBcdUQ4M0RcdUREMTAlJSc7XG5leHBvcnQgY29uc3QgX1NVRkZJWF9OT19DT01NRU5UID0gJyBcdUQ4M0RcdUREMTAnO1xuXG4vLyBTaG91bGQgYmUgbGlzdGVkIGJ5IGV2YWx1YXRpb24gcHJpb3JpdHlcbmV4cG9ydCBjb25zdCBfU1VGRklYRVMgPSBbXG5cdF9TVUZGSVhfV0lUSF9DT01NRU5ULFxuXHRfU1VGRklYX05PX0NPTU1FTlRcbl1cblxuZXhwb3J0IGNvbnN0IF9ISU5UID0gJ1x1RDgzRFx1RENBMSc7XG4iLCAiZXhwb3J0IGNsYXNzIERlY3J5cHRhYmxle1xuXHR2ZXJzaW9uOiBudW1iZXI7XG5cdGJhc2U2NENpcGhlclRleHQ6c3RyaW5nO1xuXHRoaW50OnN0cmluZztcblx0c2hvd0luUmVhZGluZ1ZpZXc6IGJvb2xlYW47XG59IiwgImltcG9ydCB7IERlY3J5cHRhYmxlIH0gZnJvbSBcIi4vRGVjcnlwdGFibGUudHNcIjtcbmltcG9ydCB7IF9ISU5ULCBfUFJFRklYRVMsIF9QUkVGSVhfQSwgX1BSRUZJWF9BX1ZJU0lCTEUsIF9QUkVGSVhfQiwgX1BSRUZJWF9CX1ZJU0lCTEUsIF9QUkVGSVhfQywgX1BSRUZJWF9DX1ZJU0lCTEUsIF9QUkVGSVhfT0JTT0xFVEUsIF9QUkVGSVhfT0JTT0xFVEVfVklTSUJMRSwgX1NVRkZJWEVTIH0gZnJvbSBcIi4vRmVhdHVyZUlucGxhY2VDb25zdGFudHMudHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVJbnBsYWNlVGV4dEFuYWx5c2lze1xuXHRwcm9jZXNzZWRUZXh0OnN0cmluZztcblx0aXNFbXB0eTogYm9vbGVhbjtcblx0XG5cdHByZWZpeDogc3RyaW5nO1xuXHRzdWZmaXg6IHN0cmluZztcblxuXHRoYXNPYnNvbGV0ZUVuY3J5cHRlZFByZWZpeDogYm9vbGVhbjtcblx0aGFzRW5jcnlwdGVkUHJlZml4OiBib29sZWFuO1xuXHRoYXNFbmNyeXB0ZWRTdWZmaXg6IGJvb2xlYW47XG5cdGNhbkRlY3J5cHQ6IGJvb2xlYW47XG5cdGNhbkVuY3J5cHQ6IGJvb2xlYW47XG5cdGNvbnRhaW5zRW5jcnlwdGVkTWFya2VyczogYm9vbGVhbjtcblx0ZGVjcnlwdGFibGU/IDogRGVjcnlwdGFibGU7XG5cblx0Y29uc3RydWN0b3IodGV4dDogc3RyaW5nKXtcblx0XHR0aGlzLnByb2Nlc3ModGV4dCk7XG5cdH1cblxuXHRwcml2YXRlIHByb2Nlc3MoIHRleHQ6IHN0cmluZyApIDogdm9pZHtcblx0XHRcblx0XHR0aGlzLnByb2Nlc3NlZFRleHQgPSB0ZXh0O1xuXG5cdFx0dGhpcy5pc0VtcHR5ID0gdGV4dC5sZW5ndGggPT09IDA7XG5cblx0XHR0aGlzLnByZWZpeCA9IF9QUkVGSVhFUy5maW5kKCAocHJlZml4KSA9PiB0ZXh0LnN0YXJ0c1dpdGgocHJlZml4KSApID8/ICcnO1xuXHRcdHRoaXMuc3VmZml4ID0gX1NVRkZJWEVTLmZpbmQoIChzdWZmaXgpID0+IHRleHQuZW5kc1dpdGgoc3VmZml4KSApID8/ICcnO1xuXHRcdFxuXHRcdHRoaXMuaGFzRW5jcnlwdGVkUHJlZml4ID0gdGhpcy5wcmVmaXgubGVuZ3RoID4gMDtcblx0XHR0aGlzLmhhc0VuY3J5cHRlZFN1ZmZpeCA9IHRoaXMuc3VmZml4Lmxlbmd0aCA+IDA7XG5cblx0XHR0aGlzLmhhc09ic29sZXRlRW5jcnlwdGVkUHJlZml4ID0gdGhpcy5wcmVmaXggPT09IF9QUkVGSVhfT0JTT0xFVEUgfHwgdGhpcy5wcmVmaXggPT09IF9QUkVGSVhfT0JTT0xFVEVfVklTSUJMRTtcblxuXHRcdHRoaXMuY29udGFpbnNFbmNyeXB0ZWRNYXJrZXJzID0gWy4uLl9QUkVGSVhFUywgLi4uX1NVRkZJWEVTXS5zb21lKCAobWFya2VyKSA9PiB0ZXh0LmluY2x1ZGVzKG1hcmtlciApKTtcblxuXHRcdHRoaXMuY2FuRGVjcnlwdCA9IHRoaXMuaGFzRW5jcnlwdGVkUHJlZml4ICYmIHRoaXMuaGFzRW5jcnlwdGVkU3VmZml4O1xuXHRcdHRoaXMuY2FuRW5jcnlwdCA9ICF0aGlzLmhhc0VuY3J5cHRlZFByZWZpeCAmJiAhdGhpcy5jb250YWluc0VuY3J5cHRlZE1hcmtlcnM7XG5cdFx0XG5cdFx0aWYgKHRoaXMuY2FuRGVjcnlwdCl7XG5cdFx0XHRjb25zdCBkZWNyeXB0YWJsZSA9IHRoaXMucGFyc2VEZWNyeXB0YWJsZUNvbnRlbnQodGV4dCk7XG5cblx0XHRcdGlmICggZGVjcnlwdGFibGUgIT0gbnVsbCApe1xuXHRcdFx0XHR0aGlzLmRlY3J5cHRhYmxlID0gZGVjcnlwdGFibGU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5jYW5EZWNyeXB0ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZURlY3J5cHRhYmxlQ29udGVudCh0ZXh0OiBzdHJpbmcpIDogRGVjcnlwdGFibGUgfCBudWxsIHtcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgRGVjcnlwdGFibGUoKTtcblxuXHRcdGlmIChcblx0XHRcdCF0aGlzLmhhc0VuY3J5cHRlZFByZWZpeFxuXHRcdFx0fHwgIXRoaXMuaGFzRW5jcnlwdGVkU3VmZml4XG5cdFx0KXtcblx0XHRcdHJldHVybiBudWxsOyAvLyBpbnZhbGlkIGZvcm1hdFxuXHRcdH1cblx0XHRcblx0XHRpZiAoIHRoaXMuaGFzT2Jzb2xldGVFbmNyeXB0ZWRQcmVmaXggKXtcblx0XHRcdHJlc3VsdC52ZXJzaW9uID0gMDtcblx0XHR9ZWxzZSBpZiAoIHRoaXMucHJlZml4ID09IF9QUkVGSVhfQyB8fCB0aGlzLnByZWZpeCA9PSBfUFJFRklYX0NfVklTSUJMRSApe1xuXHRcdFx0cmVzdWx0LnZlcnNpb24gPSAzO1xuXHRcdH1lbHNlIGlmICggdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9CIHx8IHRoaXMucHJlZml4ID09IF9QUkVGSVhfQl9WSVNJQkxFICl7XG5cdFx0XHRyZXN1bHQudmVyc2lvbiA9IDI7XG5cdFx0fWVsc2UgaWYgKCB0aGlzLnByZWZpeCA9PSBfUFJFRklYX0EgfHwgdGhpcy5wcmVmaXggPT0gX1BSRUZJWF9BX1ZJU0lCTEUgKXtcblx0XHRcdHJlc3VsdC52ZXJzaW9uID0gMTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgbWFya2VycyBmcm9tIHN0YXJ0IGFuZCBlbmRcdFxuXHRcdGNvbnN0IGNvbnRlbnQgPSB0ZXh0LnN1YnN0cmluZyh0aGlzLnByZWZpeC5sZW5ndGgsIHRleHQubGVuZ3RoIC0gdGhpcy5zdWZmaXgubGVuZ3RoKTtcblxuXHRcdGlmICggWy4uLl9QUkVGSVhFUywgLi4uX1NVRkZJWEVTXS5zb21lKCAobWFya2VyKSA9PiBjb250ZW50LmluY2x1ZGVzKCBtYXJrZXIgKSkgKXtcblx0XHRcdC8vIGNvbnRlbnQsIGl0c2VsZiBoYXMgbWFya2Vyc1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gY2hlY2sgaWYgdGhlcmUgaXMgYSBoaW50XG5cdFx0aWYgKGNvbnRlbnQuc3Vic3RyaW5nKDAsX0hJTlQubGVuZ3RoKSA9PSBfSElOVCl7XG5cdFx0XHRjb25zdCBlbmRIaW50TWFya2VyID0gY29udGVudC5pbmRleE9mKF9ISU5ULF9ISU5ULmxlbmd0aCk7XG5cdFx0XHRpZiAoZW5kSGludE1hcmtlcjwwKXtcblx0XHRcdFx0cmV0dXJuIG51bGw7IC8vIGludmFsaWQgZm9ybWF0XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQuaGludCA9IGNvbnRlbnQuc3Vic3RyaW5nKF9ISU5ULmxlbmd0aCxlbmRIaW50TWFya2VyKVxuXHRcdFx0cmVzdWx0LmJhc2U2NENpcGhlclRleHQgPSBjb250ZW50LnN1YnN0cmluZyhlbmRIaW50TWFya2VyK19ISU5ULmxlbmd0aCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXN1bHQuYmFzZTY0Q2lwaGVyVGV4dCA9IGNvbnRlbnQ7XG5cdFx0fVxuXHRcdHJlc3VsdC5zaG93SW5SZWFkaW5nVmlldyA9ICF0aGlzLnByZWZpeC5pbmNsdWRlcyhcIiUlXCIpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVSxNQUFNO0FBRXRCLGFBQU87QUFBQSxJQUNSO0FBQUE7QUFBQTs7Ozs7O0FDRUEsV0FBQSxVQUFTLFNBQVNBLGVBQWMsVUFBWTtBQUFaLFVBQUEsYUFBQSxRQUFBO0FBQUEsbUJBQUE7TUFBWTtBQUMxQyxVQUFJLFlBQVksTUFBTSxpQkFBaUI7QUFDckMsY0FBTSxJQUFJLFVBQVUscUdBQXFHLFdBQVcsdUNBQXVDLE1BQU0sa0JBQWtCLEdBQUc7O0FBR3hNLFVBQU0sdUJBQXVCLE1BQU07QUFDbkMsWUFBTSxvQkFBb0IsU0FBQyxHQUFHQyxRQUFLO0FBQU0sZUFBQUE7TUFBQTtBQUN6QyxVQUFNLFFBQVEsSUFBSSxNQUFLLEVBQUc7QUFDMUIsWUFBTSxvQkFBb0I7QUFHMUIsVUFBSSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVU7QUFJL0MsZUFBTyxNQUFNLFFBQVEsSUFBSyxNQUFNLFFBQVEsRUFBVSxZQUFXLElBQUs7O0lBRXRFOzs7OztBQ3BCQSxTQUFTLGdCQUFnQixtQkFBbUI7OztBQ0Q1QyxJQUFNLFFBQVE7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFDWjtBQUNBLElBQU0sTUFBTTtBQUNaLElBQU0sUUFBUTtBQUNkLElBQU0sU0FBUztBQUNmLElBQU0sT0FBTztBQUNOLElBQU0sS0FBTixNQUFTO0FBQUEsRUFDWixZQUFZLE1BQU07QUFDZCxRQUFJQztBQUNKLFNBQUssUUFBUSxLQUFLO0FBQ2xCLFNBQUssUUFBUUEsTUFBSyxLQUFLLFVBQVUsUUFB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QUssT0FDbEIsS0FBSyxPQUFRLEtBQUssT0FDbEIsTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLEtBQUssT0FBUSxLQUFLLE9BQ2xCLE1BQU0sT0FDTixLQUFLLE9BQVEsS0FBSyxPQUNsQixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLEtBQUssT0FBUSxLQUFLLE9BQ2xCLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLEtBQUssT0FBUyxLQUFLLE9BQ25CLE1BQU0sT0FDTixLQUFLLE9BQVMsS0FBSyxPQUNuQixNQUFNLE9BQ04sS0FBSyxPQUFTLEtBQUssT0FDbkIsTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sTUFBTSxPQUNOLE1BQU0sT0FDTixNQUFNLE9BQ04sS0FBSyxPQUFTLEtBQUssT0FDbkIsTUFBTSxPQUNOLE1BQU0sT0FDTixLQUFLLE9BQVMsS0FBSyxPQUNuQixNQUFNLE9BQ04sTUFBTSxPQUNOLEtBQUssT0FBUyxLQUFLLE9BQ25CLEtBQUssT0FBUyxLQUFLLE9BQ25CLEtBQUssT0FBUyxLQUFLLE9BQ25CLEtBQUssT0FBUyxLQUFLLE9BQ25CLEtBQUssT0FBUyxLQUFLLE9BQ25CLE1BQU0sUUFDTixLQUFLLFFBQVMsS0FBSyxRQUNuQixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sS0FBSyxRQUFVLEtBQUssUUFDcEIsTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFNBQ04sS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUssU0FDcEIsS0FBSyxTQUFVLEtBQUssU0FDcEIsTUFBTSxTQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssV0FDckIsS0FBSyxXQUFZLEtBQUs7QUFDM0I7QUFFQSxTQUFTLFlBQVksR0FBRztBQUN2QixTQUFPLE1BQU0sU0FDVCxLQUFLLFNBQVUsS0FBSyxTQUNwQixLQUFLLFNBQVUsS0FBSztBQUN6QjtBQUVBLFNBQVMsT0FBTyxHQUFHO0FBQ2xCLFNBQU8sS0FBSyxRQUFVLEtBQUssUUFDdkIsTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLEtBQUssUUFBVSxLQUFLLFFBQ3BCLEtBQUssUUFBVSxLQUFLLFFBQ3BCLE1BQU0sUUFDTixLQUFLLFFBQVUsS0FBSyxRQUNwQixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxRQUNOLE1BQU0sUUFDTixNQUFNLFFBQ04sTUFBTSxTQUNOLE1BQU0sU0FDTixNQUFNLFNBQ04sS0FBSyxTQUFVLEtBQUssU0FDcEIsTUFBTSxTQUNOLEtBQUssU0FBVSxLQUFLLFNBQ3BCLE1BQU0sU0FDTixNQUFNLFNBQ04sTUFBTSxTQUNOLE1BQU0sU0FDTixNQUFNLFNBQ04sTUFBTSxTQUNOLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVSxLQUFLLFNBQ3BCLEtBQUssU0FBVyxLQUFLLFNBQ3JCLE1BQU0sU0FDTixNQUFNLFNBQ04sS0FBSyxTQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLE1BQU0sVUFDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixNQUFNLFVBQ04sTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixNQUFNLFVBQ04sS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsS0FBSyxVQUFXLEtBQUssVUFDckIsTUFBTSxVQUNOLEtBQUssVUFBVyxLQUFLLFVBQ3JCLE1BQU0sVUFDTixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxVQUNyQixLQUFLLFVBQVcsS0FBSyxV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Q0EsUUFBUTtBQUFBLElBQ0osT0FBTyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ25CLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxFQUNiO0FBQ0osQ0FBRSxHQUFHLENBQUMsU0FBUyxJQUFJLHNCQUFzQixFQUFFLFdBQVksS0FBSyxXQUF1QixLQUFLLFFBQWtCLEtBQUssV0FBVyxLQUFNLENBQUUsRUFFakksY0FBYyxFQUNkLEtBQUssRUFDTCxLQUFNLElBQUssRUFDWCxRQUFRO0FBQUEsRUFDTCxDQUFDLFdBQVcsb0dBQW9HO0FBQUEsRUFDaEgsQ0FBQywrQkFBK0Isb0VBQW9FO0FBQUEsRUFDcEcsQ0FBQyx5REFBeUQsc0NBQXNDO0FBQ2xHLENBQUMsRUFDRixNQUFNOyIsCiAgIm5hbWVzIjogWyJnZXRDYWxsZXJGaWxlIiwgInN0YWNrIiwgIl9hIiwgImVtb2ppUmVnZXgiLCAiY29kZSIsICJyZXNvbHZlIiwgIkRlZmF1bHRWYWx1ZXNGb3JUeXBlS2V5IiwgIm1peGluIiwgImtleSIsICJhcmdzIiwgInZhbHVlIiwgInZhbCIsICJhcmd2IiwgImVudiIsICJhbGlhc2VzIiwgImRlZmF1bHRzIiwgImd1ZXNzVHlwZSIsICJyZXF1aXJlIiwgInJlc29sdmUiLCAicGF0aCIsICJkaXJuYW1lIiwgInJlc29sdmUiLCAicmVhZEZpbGVTeW5jIiwgInN0YXRTeW5jIiwgImZvcm1hdCIsICJyZXNvbHZlIiwgInkxOG4iLCAieTE4biIsICJjcmVhdGVSZXF1aXJlIiwgInJlYWRGaWxlU3luYyIsICJyZWFkZGlyU3luYyIsICJyZXF1aXJlIiwgImRpcm5hbWUiLCAicmVzb2x2ZSIsICJnZXRDYWxsZXJGaWxlIiwgInNoaW0iLCAiY21kIiwgInJlc3VsdCIsICJ1c2FnZSIsICJ2YWxpZGF0aW9uIiwgInNoaW0iLCAiY29tbWFuZCIsICJjIiwgInNoaW0iLCAiZmFpbCIsICJjb21tYW5kIiwgInVpIiwgInVzYWdlIiwgInNlcCIsICJtYXhXaWR0aCIsICJ1c2FnZSIsICJjb21tYW5kIiwgInNoaW0iLCAiX2EiLCAiX2IiLCAiX2MiLCAiZGVzYyIsICJhcmd2IiwgInVzYWdlIiwgInNoaW0iLCAiX2EiLCAia2V5IiwgInNoaW0iLCAic2hpbSIsICJfYSIsICJyZXNvbHZlIiwgInR5cGUiLCAia2V5IiwgInZhbHVlIiwgIl9iIiwgIl9jIiwgInZhbGlkYXRpb24iLCAiayIsICJjb21wbGV0aW9uIiwgInZlY3RvclNpemUiLCAiaXRlcmF0aW9ucyIsICJzYWx0IiwgInV0ZjhFbmNvZGVyIiwgInV0ZjhEZWNvZGVyIiwgIml0ZXJhdGlvbnMiLCAic2FsdCIsICJjcnlwdG8iLCAiZm9ybWF0Il0KfQo=
