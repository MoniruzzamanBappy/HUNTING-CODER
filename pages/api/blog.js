// http://localhost:3000/api/blog
import * as fs from "fs";
export default async function handler(req, res) {
  const data = await fs.promises.readdir(`blogdata`);
  let myFiles;
  let blogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myFiles = await fs.promises.readFile(`blogdata/` +item, "utf-8");
    blogs.push(JSON.parse(myFiles));
  }
  res.status(200).json(blogs);
}
