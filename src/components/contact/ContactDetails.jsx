import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import me from '../../images/me.png';

const contacts = [
	{
		id: 1,
		name: 'Houtvenne, Belgium',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'yentlhendrickx@outlook.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '(+32) 484 47 34 36',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="max-w-2xl mx-auto">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-4">
					Contact details
				</h2>
				<div className='w-full grid grid-cols-12'>
					<ul className="font-general-regular col-span-12 sm:col-span-8">
						{contacts.map((contact) => (
							<li className="flex " key={contact.id}>
								{contact.id === 2 ?
									<a className="block" href='mailto:yentlhendrickx@outlook.com'>	
										<div className='flex'>
											<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
												{contact.icon}
											</i>
											<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
												{contact.name}
											</span>
										</div>
									</a>
									:
									<>
										<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
											{contact.icon}
										</i>
										<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
											{contact.name}
										</span>
									</>
							}
							</li>
						))}
					</ul>
					<img
						src={me}
						alt="Developer"
						className='col-span-12 sm:col-span-4 object-fit max-h-56 border rounded-full dark:border-text dark:border-primary-light border-primary-dark shadow-md'
					/>
				</div>
		</div>
	);
};

export default ContactDetails;
