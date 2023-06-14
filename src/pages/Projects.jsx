import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto mt-4">

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
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
