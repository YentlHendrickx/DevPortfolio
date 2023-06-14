import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {

	const age = new Date().getFullYear() - 2002;
	const learning = new Date().getFullYear() - 2015;

	useCountUp({ ref: 'yearsOld', end: age, duration: 2 });
	useCountUp({ ref: 'yearsLearning', end: learning, duration: 2 });
	useCountUp({ ref: 'languagesLearned', end: 8, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 10, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of Learning"
					counter={<span id="yearsLearning" />}
					measurement="+"
				/>

				<CounterItem
					title="Years Old"
					counter={<span id="yearsOld" />}
					measurement=""
				/>

				<CounterItem
					title="Programming Languages Learned"
					counter={<span id="languagesLearned" />}
					measurement="+"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
