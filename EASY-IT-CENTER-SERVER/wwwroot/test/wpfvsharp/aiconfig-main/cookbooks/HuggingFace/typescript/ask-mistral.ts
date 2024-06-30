import {
  Prompt,
  Output,
  PromptInput,
  ModelMetadata,
  ExecuteResult,
  AIConfigRuntime,
  InferenceOptions,
  InferenceCallbackHandlers,
} from "aiconfig";

import { HuggingFaceTextGenerationModelParser } from "./hf";

async function main() {
  const textGenerationModelParser = new HuggingFaceTextGenerationModelParser();

  // reguster type error updated in unpublished version
  // @ts-ignore: Unreachable code error
  AIConfigRuntime.registerModelParser(textGenerationModelParser, [
    "HuggingFaceTextParser",
  ]);

  const config = AIConfigRuntime.load("../Mistral-aiconfig.json");

  function consoleLogCallback(
    data: string,
    accumulatedMessage: string,
    index: number
  ) {
    console.log(data);
  }

  const callbacks: InferenceCallbackHandlers = {
    streamCallback: consoleLogCallback,
  };

  const inferenceOptions: InferenceOptions = { callbacks };
  await config.run("prompt1", inferenceOptions);
}

main();