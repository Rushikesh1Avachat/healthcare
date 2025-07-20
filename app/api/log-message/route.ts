// app/api/log-message/route.ts
import { db } from "@/types/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userMessage, aiReply } = await req.json();

    await addDoc(collection(db, "chat_logs"), {
      userMessage,
      aiReply,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err });
  }
}
