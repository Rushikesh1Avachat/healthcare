// your Firebase config file
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const saveChatLog = async (
  messages: { role: string; content: string }[],
  aiReply: string
) => {
  try {
    await addDoc(collection(db, "chat_logs"), {
      userMessage: messages.at(-1)?.content ?? "",
      aiReply,
      createdAt: serverTimestamp(),
    });
    console.log("Chat log saved successfully.");
  } catch (error) {
    console.error("Error saving chat log:", error);
  }
};
