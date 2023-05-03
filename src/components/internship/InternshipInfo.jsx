import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const fadeOnVisible = {
    visible: { opacity: 1, x: 0, transition: {duration: 1}},
    hidden: { opacity: 0, x: -1000},
};

const InternshipInfo = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    console.log(controls);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

	return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={fadeOnVisible}
            className="py-5 sm:py-10 mt-5 sm:mt-10"
        >
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Internship
				</p>
			</div>
		</motion.div>
	);
};

export default InternshipInfo;

