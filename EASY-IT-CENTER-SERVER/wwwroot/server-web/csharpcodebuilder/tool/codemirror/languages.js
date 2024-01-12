import { LANGUAGE_CSHARP, LANGUAGE_FSHARP, LANGUAGE_IL, LANGUAGE_PHP, LANGUAGE_VB } from "../protocol/languages.js";
import { cil } from "./languages/cil.js";
import { csharp } from "./languages/csharp.js";
import { fsharp } from "./languages/fsharp.js";
import { php } from "./languages/php.js";
import { vb } from "./languages/vb.js";
export const languageExtensions = {
  [LANGUAGE_CSHARP]: csharp,
  [LANGUAGE_VB]: vb,
  [LANGUAGE_FSHARP]: fsharp,
  [LANGUAGE_PHP]: php,
  [LANGUAGE_IL]: cil
};