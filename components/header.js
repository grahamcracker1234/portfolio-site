import styles from './header.module.scss';

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default function Layout({ children, home }) {
	return (
		<section className="container mx-auto px-4 h-screen flex flex-col justify-center">
			<h1 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl mb-2">Hi 👋, I&apos;m <span className={styles.gradient}>Graham</span>.</h1>
			<h2 className="text-gray font-bold sm:text-2xl xl:text-xl text-lg mb-2">Developer, Designer, & Student</h2>
			<p className="">Hello, stranger! I&apos;m a {getAge("2001/09/09")}-year-old developer who is passionate about front-end developement, game design, and competitive programming. </p>
			<button className="text-gray uppercase border-2 rounded mr-auto py-2 px-4">Projects</button>
		</section>
	)
}