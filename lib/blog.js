import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import remarkPrism from "remark-prism";
import rehypeStringify from "rehype-stringify"

const postsDirectory = path.join(process.cwd(), "blog")

function getId(fileName) {
  // Remove ".md" from file name to get id
  return fileName.replace(/\.md$/, "");
}

export async function getSortedPostsData() {
  // Get file names under /blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(fileName => {
    const id = getId(fileName);
    return getPostData(id)
  }));

  // Sort posts by date
  return allPostsData.sort((a, b) => a.date - b.date).map(formatPostData);
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown with math into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: ["line-numbers"]
    })
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  const data = {
    id,
    contentHtml,
    ...matterResult.data,
  };

  // Preprocessing
  data.date = new Date(...data.date.split("-"));

  return data;
}

export function formatPostData(data) {
  // data.date = data.date.toLocaleDateString("en-US", { dateStyle: "full" });
  data.date = data.date.toLocaleDateString(undefined, { dateStyle: "full" });
  return data;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => ({
      params: {
        id: getId(fileName),
      },
    })
  );
}
