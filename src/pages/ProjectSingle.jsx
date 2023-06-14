import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


import { singleProjectData } from '../data/singleProjectData';

const ProjectSingle = () => {

	let url = window.location.href;
	url = url.split('/');
	url = url[url.length - 1];
	url = Number(url);
	url += 1;

	if (singleProjectData[url] === undefined) {
		url = 1;
	}

	function triggerRender() {
		this.forceUpdate();
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-4 sm:mt-4"
		>
			<SingleProjectProvider>

                <div className="w-full flex flex-row justify-between">
					<Link
						to="/projects"
                        className="dark:text-primary-light text-primary-dark font-medium hover:underline"
						//className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Projects"
					>&larr; To projects</Link>
					<Link
						to={"/projects/single-project/" + url }
                        className="dark:text-primary-light text-primary-dark font-medium hover:underline"
						aria-label="Next Project"
						onClick={triggerRender}
					>Next Project &rarr;</Link>
                </div>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
