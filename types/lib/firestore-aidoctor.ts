// Firebase initialization
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

// ✅ These must be actual runtime values
const messages = [
  { role: "user", content: "What are the symptoms of flu?" },
  // other message objects...
];

const completion = {
  choices: [
    {
      message: {
        content: "Common symptoms include fever, cough, and fatigue.",
      },
    },
  ],
};

// ✅ Firestore logging
export const saveChatLog = async (
  messages: { role: string; content: string }[],
  completion: any // Replace with actual OpenAI response type if typed
) => {
  try {
    await addDoc(collection(db, "chat_logs"), {
      userMessage: messages.at(-1)?.content ?? "", // Last user message
      aiReply: completion.choices?.[0]?.message?.content ?? "", // AI reply
      createdAt: serverTimestamp(), // Firestore timestamp
    });
  } catch (error) {
    console.error("Failed to save chat log:", error);
  }
};
