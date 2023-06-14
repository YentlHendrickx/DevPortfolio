import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import { useParams } from 'react-router-dom';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {

    let { id } = useParams();

	if (singleProjectDataJson[id - 1] === undefined) {
		id = 1;
		window.location.href = "/projects/single-project/" + id;
	}
	console.log(id);

	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson[id - 1]
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
