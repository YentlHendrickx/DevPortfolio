import KnowlegdeBar from "../reusable/KnowledgeBar";

const AboutSkills = () => {

	const barColor = "rgba(99, 102, 241)"

	return (
		<div className="bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="mx-12 py-4">
				<h3 className="font-medium dark:text-primary-light text-primary-dark">Non Tech</h3>
				<hr class="dark:border-secondary-light border-secondary-dark mb-1"/>
				<h4 className="text-small font-light dark:text-primary-light text-primary-dark">Languages</h4>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4">
					<KnowlegdeBar label={"Dutch"} percentage={75} bgc={barColor}/>
					<KnowlegdeBar label={"English"} percentage={85} bgc={barColor}/>
					<KnowlegdeBar label={"French"} percentage={25} bgc={barColor}/>
				</div>

				<h4 className="text-small font-light dark:text-primary-light text-primary-dark">Soft Skills</h4>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4">
					<KnowlegdeBar label={"Problem Solving"} percentage={95} bgc={barColor}/>
					<KnowlegdeBar label={"Teamwork"} percentage={70} bgc={barColor}/>
					<KnowlegdeBar label={"Communication"} percentage={65} bgc={barColor}/>
					<KnowlegdeBar label={"Time Management"} percentage={50} bgc={barColor}/>
				</div>

				<h3 className="mt-4 font-medium dark:text-primary-light text-primary-dark">Technologies</h3>
				<hr class="dark:border-secondary-light border-secondary-dark mb-1"/>
				<h4 className="text-small font-light dark:text-primary-light text-primary-dark">Languages</h4>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4">
						<KnowlegdeBar label={"HTML"} percentage={90} bgc={barColor}/>
						<KnowlegdeBar label={"Python"} percentage={85} bgc={barColor}/>
						<KnowlegdeBar label={"CSS"} percentage={80} bgc={barColor}/>
						<KnowlegdeBar label={"MySQL"} percentage={80} bgc={barColor}/>
						<KnowlegdeBar label={"TypeScript"} percentage={75} bgc={barColor}/>
						<KnowlegdeBar label={"JavaScript"} percentage={75} bgc={barColor}/>
						<KnowlegdeBar label={"PHP"} percentage={75} bgc={barColor}/>
						<KnowlegdeBar label={"Java"} percentage={70} bgc={barColor}/>
						<KnowlegdeBar label={"C#.NET"} percentage={65} bgc={barColor}/>
						<KnowlegdeBar label={"Dart"} percentage={65} bgc={barColor}/>
						<KnowlegdeBar label={"Bash"} percentage={50} bgc={barColor}/>
				</div>
				<h4 className="mt-4 text-small font-light dark:text-primary-light text-primary-dark">Other</h4>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4">
						<KnowlegdeBar label={"Linux"} percentage={85} bgc={barColor}/>
						<KnowlegdeBar label={"React.js"} percentage={85} bgc={barColor}/>
						<KnowlegdeBar label={"ASP.NET"} percentage={80} bgc={barColor}/>
						<KnowlegdeBar label={"WordPress"} percentage={70} bgc={barColor}/>
						<KnowlegdeBar label={"Docker"} percentage={70} bgc={barColor}/>
						<KnowlegdeBar label={"Angular.js"} percentage={65} bgc={barColor}/>
						<KnowlegdeBar label={"Flutter"} percentage={60} bgc={barColor}/>
				</div>
			</div>
		</div>
	);
};

export default AboutSkills;
