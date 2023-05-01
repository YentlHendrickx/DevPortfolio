import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 mt-12 ">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0 h-full w-full" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={project.id}
                            style={{minHeight: '200px', maxHeigth: '300px', minWidth: '400px', objectFit: 'cover'}}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
