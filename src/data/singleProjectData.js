// Import images
import MemoryLog from '../images/memorylogMain.png';
import MemoryLog2 from '../images/memorylog2.png';
import MemoryLog3 from '../images/memorylog3.png';
import MinesweeperSolver from '../images/minesweeperSolver.png';
import MinesweeperSolver2 from '../images/minesweeperSolver2.png';
import PowershellScraper from '../images/powershellscraper.png';
import CryptoTracker from '../images/cryptotracker.png';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
} from 'react-icons/fi';

export const singleProjectData = [{
	ProjectHeader: {
		title: 'Application for patients with Alzheimers',
		publishDate: 'May 1, 2023',
		tags: 'Full-Stack, Laravel, PHP',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Relationship management',
			img: MemoryLog,
		},
		{
			id: 2,
			title: 'Agenda',
			img: MemoryLog2,
		},
		{
			id: 3,
			title: 'Login',
			img: MemoryLog3,
		},
	],
	ProjectInfo: {
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Create a web application that makes it easy for Alzheimers patients to follow up on their medication. Have a diary that anyone can write in, and supply a calender',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'PHP Laravel',
				],
			},
		],
		ProjectDetailsHeading: 'Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                        `<p class="dark:text-primary-light text-primary-dark">In a team of 6 students we were tasked with making a web application for people suffering from Alzheimer's. The project was made using the Laravel framework.
                            During the project a lot of different tasks were handled by me including: making CRUDs, writing CSS, writing JavaScript and more.
                        
                        <p class="dark:text-primary-light text-primary-dark mt-5">The goal of the project was to create a web application in PHP for people suffering with Alzheimer's.
                            The main features include: an agenda, a logbook (where visitors and the patient can write any comment they want), medication overview and question lists.
                            Another important feature of the application is the ability for caregivers to also access the application.
                            Because of this we needed to develop and implement account creation and login capabilities.
                        </p>

                        <p class="dark:text-primary-light text-primary-dark mt-5">The most important feature in this project was the agenda, we decided to keep it as simple and clear as possible and this was the result.</p>

                        <p class="dark:text-primary-light text-primary-dark my-5">Over the course of this project I learned a lot. The most important thing being that communication is key.
                            Aside from improving my communication skills I also learned a lot more about PHP and Laravel in particular.
                        </p>
                `
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: `http://twitter.com/share?text=Check out this awesome project!&url=https://yentl.sinners.be/projects/single-project/2`,
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://www.yentl.sinners/be/projects/single-project/2")}`,
			},
		],
	},
},{
	ProjectHeader: {
		title: 'Minesweeper Solver',
		publishDate: 'May 1, 2023',
		tags: 'Java',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Minesweeper solver',
			img: MinesweeperSolver,
		},
		{
			id: 2,
			title: 'Minesweeper solver',
			img: MinesweeperSolver2,
		},
	],
	ProjectInfo: {
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Create a program in Java that automatically completes a Minesweeper game.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Java',
				],
			},
		],
		ProjectDetailsHeading: 'Details',
		ProjectDetails: [
			{
				id: 1,
				details:
					`
                        <p class="dark:text-primary-light text-primary-dark ">I've always been really interested in challenging myself when it comes to programming, that's why I decided to write a Minesweeper Solver using Java.
                            The solver takes a screenshot after which it starts to figure out the positioning of the board, makes an initial random guess and then tries to solve the entire thing.</p>

                        <p class="mt-5 dark:text-primary-light text-primary-dark">This project was quite challenging since I first had to figure out a way to calculate the position of the board on the screen and how big the grid is (in terms of squares).
                            After figuring out the board position the solver will click the center square and the game starts!</p>

                        <p class="mt-5 dark:text-primary-light text-primary-dark">While making this project I learned how to use Java to capture the screen, how to perform calculations on pixels and most importantly how to start a Java project.</p>

                        <h3 class="text-center dark:text-primary-light  text-primary-dark text-lg mt-5">Source Code</h3>
                        <hr class="dark:border-secondary-dark border-primary-light mb-1"/>
                        <p class="dark:text-primary-light text-primary-dark">
                            Take a closer look at the solvers source code here: <a class="font-bold" href="https://github.com/YentlHendrickx/MinesweeperAI">Github</a>
                        </p>

                        <h3 class="text-center dark:text-primary-light text-primary-dark text-lg mt-5">Demonstration</h3>
                        <hr class="dark:border-secondary-dark border-secondary-light mb-1"/>
                        <p class="dark:text-primary-light text-primary-dark mb-3">Unfortunately like mentioned before 100% solvability in Minesweeper is not a guarantee, sometimes it comes down to a 50/50 guess just like in this example.</p>
                        <iframe class="mb-3"width="100%" height="500"
                            src="https://www.youtube.com/embed/Xdl5DMS1crw">
                        </iframe>`      
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
		],
	},
}];
