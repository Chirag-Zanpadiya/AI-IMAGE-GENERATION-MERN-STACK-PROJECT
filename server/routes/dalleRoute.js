// import express from "express";
// import * as dotenv from "dotenv";
// import OpenAI from "openai";
// dotenv.config();
// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const completion = openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   store: true,
//   messages: [{ role: "user", content: "write a haiku about ai" }],
// });

// completion.then((result) => console.log(result.choices[0].message));

// router.route("/").get((req, res) => {
//   res.send("OPENAI IS HERE");
// });

// router.route("/").post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const aiResponse = await openai.images.generate({
//       prompt: prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });
//     console.log(`route :: dalleRoute :: aiResponse`);

//     console.log(aiResponse);

//     const Image = aiResponse.data[0].b64_json;

//     res.status(200).json({ photo: Image });
//   } catch (error) {
//     console.log(`route :: dalleRoute :: error ${error}`);
//     // res.status(500).send(error?.response.data.error.message)
//   }
// });

// export default router;

import express from "express";
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Function to call Hugging Face API
async function query(data) {
  const response = await fetch(
    "https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(`Hugging Face API Error: ${response.statusText}`);
  }

  // Convert blob to buffer
  const imageBuffer = await response.arrayBuffer();
  const base64Image = Buffer.from(imageBuffer).toString("base64");

  return base64Image;
}

// Route to handle image generation
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const base64Image = await query({ inputs: prompt });

    res.status(200).json({
      message: "Image generated successfully",
      photo: base64Image, // Send base64 image
    });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

export default router;
