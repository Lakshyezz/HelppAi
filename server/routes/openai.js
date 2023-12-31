import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
    try{
        const { text, activeChatId } = req.body;
        // console.log(text);

        const response = await openai.createCompletion({
            // model: 
        });
        console.log("openai response:  " + response);
        res.status(200).json({ text });
    }catch(error){
        console.log("error", error);
        res.status(500).json({ error: error.message })
    }
  });

export default router;