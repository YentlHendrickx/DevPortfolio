import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<div
			className="container mx-auto mt-4"
		>
            <div className="w-full flex flex-row justify-between">
                <Link
                    to="/"
                    className="dark:text-primary-light text-primary-dark font-medium hover:underline"
                    aria-label="Home"
                >&larr; To Home</Link>
                <Link
                    to="/about"
                    className="dark:text-primary-light text-primary-dark font-medium hover:underline"
                    aria-label="About Me"
                >To About Me &rarr;</Link>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    delay: 0.1,
                }}>
				<p className="font-general-medium w-full text-center text-2xl sm:text-4xl mt-7 text-ternary-dark dark:text-ternary-light">
					Contact
				</p>
                <div className="flex flex-col-reverse lg:flex-row">
                    <ContactDetails />
                </div>
            </motion.div>
		</div>
	);
};

export default Contact;
