import { getAllPostIds, getPostData, formatPostData } from "../../lib/blog";
import Head from "next/head";
import utilsStyles from "../../styles/utils.module.scss";
import Footer from "../../components/Footer";
import "katex/dist/katex.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import styles from "../../styles/BlogPost.module.scss";

export async function getStaticProps({ params }) {
  const postData = formatPostData(await getPostData(params.id));
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function BlogPost({ postData }) {
  return (
    <>
      <Head>
        <title>{ postData.urlTitle ?? postData.title }</title>
      </Head>
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
