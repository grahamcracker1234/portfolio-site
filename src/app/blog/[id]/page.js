import { getAllPostIds, getPostData, formatPostData } from "@/lib/blog";
import utilsStyles from "@/styles/utils.module.scss";
import Footer from "@/components/Footer";
import styles from "@/styles/BlogPost.module.scss";
import "katex/dist/katex.css";

// import "highlight.js/styles/github.css";
import "highlight.js/styles/atom-one-dark.css";

// import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export async function generateStaticParams() {
  const params = getAllPostIds();
  return params;
}

export default async function BlogPost({ params }) {
  const postData = formatPostData(await getPostData(params.id));
  return (
    <>
      <article className={`${styles.article} mx-auto mb-20 flex w-full max-w-sm flex-col justify-center p-8 xs:max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl`}>
        <h1 className="mt-10 text-3xl font-bold text-white lg:text-5xl">{ postData.title }</h1>
        <h3 className="mb-4 text-sm font-bold text-gray lg:text-lg">{ postData.date }</h3>
        <hr className={`${utilsStyles.gradient} mb-7 h-[0.1rem] w-full max-w-xs rounded 2xl:max-w-sm`}/>
        <main className="flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
      </article>
      <Footer/>
    </>
  );
}
