import Replicate from "replicate";

export default defineEventHandler(async (event) => {
  const replicate = new Replicate({
    auth: "YOUR_REPLCIATE_KEY",
  });

  const { input_prompt } = await readBody(event);

  const output = await replicate.run(
    "mcai/realistic-vision-v2.0:bed7774ff9503c3e7971627eb523d7ab2ea12f7b649c9887556747d946d11a73",
    {
      input: {
        prompt: input_prompt,
      },
    }
  );
  return output;
});
