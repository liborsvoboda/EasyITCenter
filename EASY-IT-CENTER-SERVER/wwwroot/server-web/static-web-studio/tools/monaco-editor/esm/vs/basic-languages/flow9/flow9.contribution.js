/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.42.0-dev-20230906(e7d7a5b072e74702a912a4c855a3bda21a7757e7)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/flow9/flow9.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "flow9",
  extensions: [".flow"],
  aliases: ["Flow9", "Flow", "flow9", "flow"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/flow9/flow9"], resolve, reject);
      });
    } else {
      return import("./flow9.js");
    }
  }
});
