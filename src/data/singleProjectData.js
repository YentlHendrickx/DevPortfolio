// Import images
import MemoryLog from '../images/memorylogMain.png';
import MemoryLog2 from '../images/memorylog2.png';
import MemoryLog3 from '../images/memorylog3.png';
import MinesweeperSolver from '../images/minesweeperSolver.png';
import MinesweeperSolver2 from '../images/minesweeperSolver2.png';
import PowershellScraper from '../images/powershellscraper.png';
import CryptoTracker from '../images/cryptotracker5.png';
import CryptoTracker2 from '../images/cryptotracker2.png';
import CryptoTracker3 from '../images/cryptotracker3.png';
import CryptoTracker4 from '../images/cryptotracker4.png';
import Project4_Dash_1 from '../images/project4-dash-1.png';
import Project4_Dash_2 from '../images/project4-dash-2.png';
import GameOfLife1 from '../images/gameoflife1.png';
import GameOfLife2 from '../images/gameoflife2.png';

// Import icons
import {
	FiFacebook,
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
				techs: `
					<i class="devicon-html5-plain colored"></i>,
					<i class="devicon-css3-plain colored"></i>,
					<i class="devicon-javascript-plain colored"></i>,
					<i class="devicon-php-plain colored"></i>,
					<i class="devicon-laravel-plain colored"></i>
				`,
			},
		],
		ProjectDetailsHeading: 'Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                        `<p class="dark:text-primary-light text-primary-dark">In a <b>team of 6</b> students we were tasked with making a <b>web application</b> for people suffering from Alzheimer's. The project was made using the <b>Laravel framework</b>.
                            During the project a lot of different tasks were handled by me including: <b>making CRUDs, writing CSS, writing JavaScript</b> and more.
                        
                        <p class="dark:text-primary-light text-primary-dark mt-5">The goal of the project was to create a <b>web application in PHP</b> for people suffering with Alzheimer's.
                            The main features include: an agenda, a logbook (where visitors and the patient can write any comment they want), medication overview and question lists.
                            Another important feature of the application is the ability for caregivers to also access the application.
                            Because of this we needed to develop and implement <b>account creation and login capabilities</b>.
                        </p>

                        <p class="dark:text-primary-light text-primary-dark mt-5">The most important feature in this project was the agenda, we decided to keep it as simple and clear as possible and this was the result.</p>

                        <p class="dark:text-primary-light text-primary-dark my-5">Over the course of this project I learned a lot. The most important thing being that <b>communication is key</b>.
                            Aside from improving my communication skills I also learned a lot more about <b>PHP</b> and <b>Laravel</b> in particular.
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
				url: `http://twitter.com/share?text=Check out this awesome project!&url=https://yentlhendrickx.be/projects/single-project/1`,
			},
			{
				id: 2,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/sharer/sharer.php?u=https://yentlhendrickx.be/projects/single-project/1',
			},
			{
				id: 3,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://yentlhendrickx.be/projects/single-project/1")}`,
			},
		],
	},
},{
	ProjectHeader: {
		title: 'Minesweeper Solver',
		publishDate: 'May 1, 2023',
		tags: 'Java, Swing',
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
				techs: `
					<div class="flex">
						<i class="devicon-java-plain colored"></i>,
						<p class="text-lg self-end ml-2">Swing</p>      
					</div>
				`,
			},
		],
		ProjectDetailsHeading: 'Details',
		ProjectDetails: [
			{
				id: 1,
				details:
					`
                        <p class="dark:text-primary-light text-primary-dark ">I've always been really interested in challenging myself when it comes to programming, that's why I decided to write a <b>Minesweeper Solver</b> using <b>Java</b>.
                            The solver takes a screenshot after which it starts to figure out the positioning of the board, makes an initial random guess and then tries to solve the entire thing.</p>

                        <p class="mt-5 dark:text-primary-light text-primary-dark">This project was quite challenging since I first had to figure out a way to calculate the position of the board on the screen and how big the grid is (in terms of squares).
                            After figuring out the board position the solver will click the center square and the game starts!</p>

                        <p class="mt-5 dark:text-primary-light text-primary-dark">While making this project I learned how to use Java to <b>capture the screen</b>, how to perform calculations on pixels and most importantly how to start a Java project.</p>

                        <h3 class="text-center dark:text-primary-light  text-primary-dark text-lg mt-5">Source Code</h3>
                        <hr class="dark:border-secondary-dark border-primary-light mb-1"/>
                        <p class="dark:text-primary-light text-primary-dark">
                            Take a closer look at the solvers source code here: <a class="font-bold" href="https://github.com/YentlHendrickx/MinesweeperAI" target="_blank" rel="noreferrer">GitHub</a>
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
				url: `http://twitter.com/share?text=Check out this awesome project!&url=https://yentlhendrickx.be/projects/single-project/2`,
			},
			{
				id: 2,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/sharer/sharer.php?u=https://yentlhendrickx.be/projects/single-project/2',
			},
			{
				id: 3,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://yentlhendrickx.be/projects/single-project/2")}`,
			},
		],
	},
},{
	ProjectHeader: {
		title: 'PowerShell Twitter Scraper',
		publishDate: 'May 1, 2023',
		tags: 'PowerShell, Commandline',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Tweet Graph',
			img: PowershellScraper,
		},
	],
	ProjectInfo: {
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			`Create a Twitter tweet scraper in PowerShell, that gets x amount of tweets from a user and displays it in a graph based on daily frequency.`,
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: `
					<div class="flex">
						<i class="devicon-twitter-original colored"></i>,
						<p class="text-lg self-end ml-2">PowerShell</p>      
					</div>
				`,
			},
		],
		ProjectDetailsHeading: 'Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                   `
                        <p class="dark:text-primary-light text-primary-dark">As a case study for the <b>Windows System Administration</b> course at Thomas More, I created a <b>PowerShell</b> Script that outputs the tweet frequency for a specific handle (@).
                            It's entirely written in PowerShell and makes use of the <b>Twitter API</b> in order to fetch the tweets.</p>

                        <p class="dark:text-primary-light text-primary-dark">A user can input the handle (@) followed by the number of Tweets to fetch and above graph will be displayed.</p>
                        
                        <p class="dark:text-primary-light text-primary-dark mt-5">During this project I learned how to use the <b>Twitter API</b>, how to plot graphs using <b>PowerShell</b> and just how powerful of a tool PowerShell really is.</p>

                        <h3 class="text-center text-lg dark:text-primary-light text-primary-dark mt-5">Demonstration (Dutch)</h3>
                        <hr class="dark:border-secondary-dark border-secondary-light mb-3"/>
                        <iframe class="mb-3"width="100%" height="500"
                            src="https://www.youtube.com/embed/qEyXLapWmZ4">
                        </iframe>
                    `
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: `http://twitter.com/share?text=Check out this awesome project!&url=https://yentlhendrickx.be/projects/single-project/3`,
			},
			{
				id: 2,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/sharer/sharer.php?u=https://yentlhendrickx.be/projects/single-project/3',
			},
			{
				id: 3,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://yentlhendrickx.be/projects/single-project/3")}`,
			},
		],
	},
},{
	ProjectHeader: {
		title: 'Cryptocurrency Tracker',
		publishDate: 'May 1, 2023',
		tags: 'Android, Cordova, HTML, CSS, JavaScript',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Crypto Tracking',
			img: CryptoTracker,
		},
		{
			id: 2,
			title: 'Crypto Tracking',
			img: CryptoTracker2,
		},
		{
			id: 3,
			title: 'Crypto Tracking',
			img: CryptoTracker3,
		},
		{
			id: 4,
			title: 'Crypto Tracking',
			img: CryptoTracker4,
		},
	],
	ProjectInfo: {
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			`Create and Android application using Cordova that is capable of tracking different cryptocurrencies.`,
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: `
					<div class="flex">
						<i class="devicon-javascript-plain colored"></i>,
						<i class="devicon-html5-plain colored"></i>,
						<i class="devicon-css3-plain colored"></i>,
						<p class="text-lg self-end ml-2">Cordova</p>      
					</div>
				`,
			},
		],
		ProjectDetailsHeading: 'Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `
                        <p class="dark:text-primary-light text-primary-dark">As a case study for the <b>Cordova</b> course at Thomas More, I created an Android application that allows you to monitor (track) <b>cryptocurrencies</b>.
                        The entire APP is written using <b>HTML, CSS and JavaScript</b>. I used the <b>CoinGecko Cryptocurrency API</b> to make it all work.</p>

                        <p class="dark:text-primary-light text-primary-dark mt-5">Some of the main features include:
                            <ul class="dark:text-primary-light text-primary-dark ml-2">
                                <li>Adding currencies to favorites</li>
                                <li>Searching for specific currencies</li>
                                <li>Sharing some cool info about that currency</li>
                            </ul>
                        </p>
                        
                        <p class="dark:text-primary-light text-primary-dark mt-5">During this project I learned how to make use of an <b>API</b> in JavaScript, how to properly style for mobile devices and the importance of making your <b>UI</b> as <b>simple</b> as possible.</p>

                        <h3 class="text-center dark:text-primary-light text-primary-dark text-lg mt-5">More Info</h3>
                        <hr class="dark:border-secondary-dark border-primary-light mb-1"/>
                        <p class="dark:text-primary-light text-primary-dark"> More info can be found on this page: <a class="font-bold hover:underline" href="https://cryptotracker.sinners.be/" target="_blank" rel="noreferrer">cryptotracker.sinners.be</a></p>

                    `
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: `http://twitter.com/share?text=Check out this awesome project!&url=https://yentlhendrickx.be/projects/single-project/4`,
			},
			{
				id: 2,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/sharer/sharer.php?u=https://yentlhendrickx.be/projects/single-project/4',
			},
			{
				id: 3,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://yentlhendrickx.be/projects/single-project/4")}`,
			},
		],
	},
},{
	ProjectHeader: {
		title: 'Electricity Monitor',
		publishDate: 'June 12, 2023',
		tags: 'React, C#.NET, Tailwind',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Dashboard',
			img: Project4_Dash_1,
		},
		{
			id: 2,
			title: 'Dashboard 2',
			img: Project4_Dash_2,
		},
	],
	ProjectInfo: {
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			`Create a web application for viewing smart electricity meter data. The smart meter has to be read from and the data must be stored in a database.
			Customers can add a meter to their account and follow up on their real time electricity usage.`,
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: `
					<i class="devicon-react-original colored"></i>, 
					<i class="devicon-dotnetcore-plain colored"></i>,
					<i class="devicon-csharp-plain colored"></i>
				`,
			},
		],
		ProjectDetailsHeading: 'Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `
                        <p class="dark:text-primary-light text-primary-dark">
							We were asked by the company <b>3-IT</b> to create a web application to follow up on smart meter data.
							The application had to be totally <b>web based</b>. The 2 primary requirements where that the data needed to be as real-time
							as possible, preferably less than 2 hours. And the entire application needed to be hosted on <b>Azure</b>.
						</p>

                        <p class="dark:text-primary-light text-primary-dark mt-5">Some of the main features include:
                            <ul class="dark:text-primary-light text-primary-dark ml-2">
                                <li>Full account creation system, with email verification</li>
                                <li>Customer based meter linking system</li>
                                <li>Viewing meter data from past and present</li>
                                <li>Dashboard with easy to read follow up</li>
                            </ul>
                        </p>
                        
                        <p class="dark:text-primary-light text-primary-dark mt-5">
							During this project I really strengthened my skill with <b>React</b> and <b>Tailwind</b>.
							It was really fun to create an application from scratch in a team. In a team of 6 with different specialites we
							managed to create a <b>modern</b> and web based application that <b>met the exepectations</b> of the customer.
							Because I was the one in our team that was the most experienced with <b>IoT</b> I took on the hardware side of things first.
							I decided on using a <b>Raspberry Pi</b> to read the data from the meter and store it in a database using a custom <b>API</b>.
							After I finished the IoT side I started work on the frontend. We decided on using <b>React</b> to make it easy to create something
							functional and customizable.
						</p>

						<h3 class="text-center dark:text-primary-light  text-primary-dark text-lg mt-5">Source Code</h3>
                        <hr class="dark:border-secondary-dark border-primary-light mb-1"/>
                        <p class="dark:text-primary-light text-primary-dark">
                            Take a closer look at the source code of the frontend here: <a class="font-bold" href="https://github.com/YentlHendrickx/Project-4_FRONT" target="_blank" rel="noreferrer">GitHub Frontend</a>
                        </p>

                        <p class="dark:text-primary-light text-primary-dark">
                            Take a closer look at the source code of the IoT side here: <a class="font-bold" href="https://github.com/YentlHendrickx/Project-4_IOT" target="_blank" rel="noreferrer">GitHub IoT</a>
                        </p>

                        <h3 class="text-center text-lg dark:text-primary-light text-primary-dark mt-5">Demonstration (Dutch)</h3>
                        <hr class="dark:border-secondary-dark border-secondary-light mb-3"/>
                        <iframe class="mb-3"width="100%" height="500"
                            src="https://www.youtube.com/embed/sK7zfXN6iuM">
                        </iframe>
                    `
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: `http://twitter.com/share?text=Check out this awesome project!&url=https://yentlhendrickx.be/projects/single-project/5`,
			},
			{
				id: 2,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/sharer/sharer.php?u=https://yentlhendrickx.be/projects/single-project/5',
			},
			{
				id: 3,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://yentlhendrickx.be/projects/single-project/5")}`,
			},
		],
	},
}, {
    ProjectHeader: {
        title: "Conway's Game of Life in Java",
        publishDate: "June 1, 2023",
        tags: "Java, Algorithm"
    },
    ProjectImages: [
        {
            id: 1,
            title: "Initial grid state",
            img: GameOfLife1
		        },
        {
            id: 2,
            title: "Grid after several iterations",
            img: GameOfLife2
        },
    ],
    ProjectInfo: {
        ObjectivesHeading: "Objective",
        ObjectivesDetails: "Implement Conway's Game of Life in Java, demonstrating the power and elegance of simple rules in creating complex systems.",
        Technologies: [
            {
            	title: "Tools & Technologies",      	
				techs: `
					<div class="flex align-bottom">
						<i class="devicon-java-plain colored"></i>,
						<p class="text-lg self-end ml-2">Swing</p>      
					</div>
				`,
            }
        ],
        ProjectDetailsHeading: "Details",
        ProjectDetails: [
            {
                id: 1,
                details: `
					<p class="dark:text-primary-light text-primary-dark">In this project, I implemented <b>Conway's Game of Life</b>, a cellular automaton devised by the British mathematician John Horton Conway. The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.</p>
					<p class="dark:text-primary-light text-primary-dark mt-5">The game was implemented using <b>Java</b> and I created a simple <b>GUI</b> using <b>Swing</b> to visualize the state of the game in real time.</p>
					<p class="dark:text-primary-light text-primary-dark mt-5">The most important aspect of this project was the implementation of the game's rules in Java and the efficient handling of the game grid.</p>
					<p class="dark:text-primary-light text-primary-dark my-5">Throughout this project, I further improved my <b>Java</b> programming skills and gained experience with <b>Swing</b> for creating graphical user interfaces.</p>
				
					<h3 class="text-center dark:text-primary-light  text-primary-dark text-lg mt-5">Source Code</h3>
					<hr class="dark:border-secondary-dark border-primary-light mb-1"/>
					<p class="dark:text-primary-light text-primary-dark">
						Take a closer look at the source code of the frontend here: <a class="font-bold" href="https://github.com/YentlHendrickx/GameOfLiveJava" target="_blank" rel="noreferrer">GitHub</a>
					</p>
				
				`
            }
        ],
        SocialSharingHeading: "Share This",
        SocialSharing: [
            {
                id: 1,
                name: "Twitter",
                icon: <FiTwitter />,
                url: "http://twitter.com/share?text=Check out this awesome project!&url=https://yentlhendrickx.be/projects/single-project/6"
            },
            {
                id: 2,
                name: "Facebook",
                icon: <FiFacebook />,
                url: "https://facebook.com/sharer/sharer.php?u=https://yentlhendrickx.be/projects/single-project/6"
            },
            {
                id: 3,
                name: "LinkedIn",
                icon: <FiLinkedin />,
                url: "https://www.linkedin.com/sharing/share-offsite/?url=https://yentlhendrickx.be/projects/single-project/6"
            }
        ]
    }
}];
