import fs from "fs/promises";

export async function GET() {
  // try {
  //   const data = await fs.readFile(
  //     "D:/NextJS/huntingcoder/app/blogdata/how-to-learn-flask.json",
  //     "utf8"
  //   );

  //   return Response.json({ data: JSON.parse(data) });

  // } catch (err) {
  //   console.error(err);
  //   return Response.json({ error: "File not found" });
  // }

  try {
    const files = await fs.readdir("./app/blogdata");
    // console.log(files);
     const allblogs = await Promise.all(
      files.map(async (item) => {
        const data = await fs.readFile(`./app/blogdata/${item}`,"utf8");
        return JSON.parse(data); 
      })
    );

    return Response.json({ allblogs });
  } catch (error) {
    console.error("Error reading folder:", error);
    return Response.json(
      { error: "Failed to read folder" },
      { status: 500 }
    );
  }
}