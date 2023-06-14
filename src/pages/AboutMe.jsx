import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutSkills from '../components/about/AboutSkills';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<AboutMeProvider>
			<div
				className="container mx-auto mt-4"
			>
                <div className="w-full flex flex-row justify-between">
                    <Link
                        to="/"
                        className="dark:text-primary-light text-primary-dark font-medium hover:underline"
                        aria-label="Home"
                    >&larr; To Home</Link>
                    <Link
                        to="/Projects"
                        className="dark:text-primary-light text-primary-dark font-medium hover:underline"
                        aria-label="Projects"
                    >To Projects &rarr;</Link>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, delay: 1 }}
                    exit={{ opacity: 0 }}
                >
					<p className="font-general-medium w-full text-center text-2xl sm:text-4xl mb-1 mt-7 text-ternary-dark dark:text-ternary-light">
						About Me
					</p>
                    <AboutMeBio />
                </motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<h2 className='text-2xl font-medium w-full dark:text-primary-light text-primary-dark text-center my-8'>Skills</h2>
				<AboutSkills />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
