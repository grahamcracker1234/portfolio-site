import utilsStyles from "@/styles/utils.module.scss";

export default function Section({ id, header, children }) {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <section id={ id } className="min-[900px]:ml-30 mx-auto mb-20 flex w-full flex-col justify-center p-8 sm:max-w-md md:ml-10 min-[850px]:ml-20 min-[950px]:ml-40 lg:ml-auto lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
      <h2 className="mb-2 text-2xl font-bold text-white lg:mb-4 lg:text-4xl">{ header }</h2>
      <hr className={`${utilsStyles.gradient} mb-7 h-[0.1rem] w-full max-w-xs rounded 2xl:max-w-sm`}/>
      { children }
    </section>
  );
}