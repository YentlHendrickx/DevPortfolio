import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto mt-4">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.5,
                        delay: 0.1,
                    }}
                >
                    <div className="w-full flex flex-row justify-between">
                        <Link
                            to="/"
                            className="dark:text-primary-light text-primary-dark font-medium hover:underline"
                            aria-label="Home"
                        >&larr; To Home</Link>
                        <Link
                            to="/Internship"
                            className="dark:text-primary-light text-primary-dark font-medium hover:underline"
                            aria-label="Internship"
                        >To Internship &rarr;</Link>
                    </div>
                    <ProjectsGrid />
                </motion.div>
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
