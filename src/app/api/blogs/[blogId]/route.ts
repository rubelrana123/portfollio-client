import { NextResponse } from "next/server";
import { blogData } from "../route";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  const { blogId } = await params;
  const blog = blogData.find((b) => b.id === parseInt(blogId));
  return NextResponse.json(blog || { message: "Blog not found" }, { status: 200 });
}