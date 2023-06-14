import {
	FiGithub,
	FiArrowDownCircle,
	FiTwitter,
	FiLinkedin,
	FiMail,
} from 'react-icons/fi';
import me from '../../images/me.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../reusable/Button';
import CV from '../../docs/CV_Yentl.pdf';

const AppBanner = () => {

	const socials = [
		{
			id: 1,
			icon: <FiGithub />,
			url: 'https://github.com/YentlHendrickx',
		},
		{
			id: 2,
			icon: <FiTwitter />,
			url: 'https://twitter.com/hendrickx_yentl',
		},
		{
			id: 3,
			icon: <FiLinkedin />,
			url: 'https://www.linkedin.com/in/yentl-hendrickx-3a3533223',
		},
		{
			id: 4,
			icon: <FiMail />,
			url: 'mailto:yentlhendrickx@outlook.com',
		},
	];

	return (
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			>
				<div className="flex flex-col sm:justify-between items-center md:flex-row mt-12 md:mt-2" >
					<div className="w-full md:w-1/3 text-center md:text-left">
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								ease: 'easeInOut',
								duration: 0.9,
								delay: 0.1,
							}}
							className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
						>
							Yentl Hendrickx
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								ease: 'easeInOut',
								duration: 0.9,
								delay: 0.2,
							}}
							className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
						>
							Full-Stack Developer
						</motion.p>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								ease: 'easeInOut',
								duration: 0.9,
								delay: 0.3,
							}}
							className="flex justify-center sm:block"
						>
							<a
								download="Resume-Yentl.pdf"
								href={CV}
								className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
								aria-label="Download Resume"
							>
								<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
								<span className="text-sm sm:text-lg font-general-medium duration-100">
									Download CV
								</span>
							</a>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: -180 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
						className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
					>

					
						<div className='flex flex-col justify-center items-center'>
							<img
								src={me}
								alt="Developer"
								className='object-fit h-64 mx-auto mt-4 border rounded-full dark:border-text dark:border-primary-light border-primary-dark shadow-md'
							/>
							<ul className="flex gap-4 sm:gap-8 mt-4 mx-auto">
								{socials.map((link) => (
									<a
										href={link.url}
										target="__blank"
										key={link.id}
										className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
									>
										<i className="text-xl sm:text-2xl md:text-3xl">
											{link.icon}
										</i>
									</a>
								))}
							</ul>
						</div>
					</motion.div>
				</div>

				<div className="col-span-4 mt-8 sm:mt-10 flex justify-center">
					<Link
						to="/about"
						className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
						aria-label="More About Me"
					>
						<Button title="More About Me" />
				</Link>
			</div>
		</motion.section>
	);
};

export default AppBanner;
