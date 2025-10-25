"use server";

 
import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (formData: FormData) => {
    const session =  await getUserSession();

  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  const thumbnail = formData.get("thumbnail")?.toString() || null;
  const tags = formData.get("tags")
    ?.toString()
    .split(",")
    .map((tag) => tag.trim()) || [];
  const isFeatured = formData.get("isFeatured")?.toString() === "true";

  // Debug logs
  // console.log({ title, content, thumbnail, tags, isFeatured });

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      thumbnail,
      tags,
      isFeatured,
      authorId: session?.user?.id, // Replace with real authorId from session/auth
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error:", errorText);
    throw new Error("Failed to create blog");
  }
  else {
      revalidateTag('blog');
      revalidatePath('/blogs');
     redirect('/blogs');
  }
    
  return res.json();
};
