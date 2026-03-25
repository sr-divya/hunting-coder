import fs from "fs/promises";
import { NextRequest } from "next/server";

export async function GET(request : NextRequest) {
    const searchParams=request.nextUrl.searchParams;
        const slug=searchParams.get("slug");
        console.log(slug);
//  return Response.json({ slug });
  try {
    const data = await fs.readFile(
      `D:/NextJS/huntingcoder/app/blogdata/${slug}.json`,
      "utf8"
    );

    return Response.json({ data: JSON.parse(data) });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "No such blog post found" });
  }
}