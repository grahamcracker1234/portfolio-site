import Footer from "@/components/Footer";
import utilsStyles from "@/styles/utils.module.scss";
import { getSortedPostsData } from "@/lib/blog";

export default async function BlogHome() {
  const allPostsData = await getSortedPostsData();

  return (
    <>
      <section className="mx-auto mb-20 flex w-full max-w-sm flex-col justify-center p-8 xs:max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
        <h1 className="mb-2 mt-8 text-3xl font-bold text-white lg:mb-4 lg:text-5xl">Blog 📝</h1>
        <hr className={`${utilsStyles.gradient} mb-7 h-[0.1rem] w-full max-w-xs rounded 2xl:max-w-sm`}/>
        { allPostsData.map((postData, i) => <div key={i}>
          <h1 className="mt-10 text-3xl font-bold text-white lg:text-5xl">{ postData.title }</h1>
          <h3 className="mb-4 text-sm font-bold text-gray lg:text-lg">{ postData.date }</h3>
        </div>) }
        {/* <h1 className="mt-10 text-3xl font-bold text-white lg:text-5xl">Blog</h1> */}
        {/* <hr className={`${utilsStyles.gradient} mb-7 h-[0.1rem] w-full max-w-xs rounded 2xl:max-w-sm`}/> */}
        {/* <main className="flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/> */}
      </section>
      <Footer/>
    </>
  );
}