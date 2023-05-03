import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import Button from "../components/reusable/Button";

import VPSA from "../../src/images/vpsa.jpeg";

const fadeOnVisible = {
    visible: { opacity: 1,  x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -200 },
};

const Internship = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
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
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
        >
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Internship
				</p>

                <div className="md:grid md:grid-cols-4 border-t border-primary-light dark:border-secondary-dark gap-x-2">
                    <div className="md:col-span-4 text-xl mb-5 mt-2">
                        <p className="dark:text-primary-light text-primary-dark font-medium">
                            Webshop furniture configurator 
                        </p>
                    </div> 
                    <div className="md:col-span-3">
                        <p className="dark:text-primary-light text-primary-dark mx-1 font-medium text-left">
                            At the end of February 2023 I started my internship at <span className="italic">Vitra Partner Store Antwerp (VPSA)</span>.
                            During my internship I was tasked with integrating a product configurator into their webshop. Thus making it easier for their customers
                            to configure the furniture piece exactly how they want it, without intervention from the employees.
                        </p>
                        <p className="dark:text-primary-light text-primary-dark font-medium mx-1 mt-5 text-left">
                            VPSA like it's name implies is a partner store of the <span className="italic">Vitra</span> brand. The store is located in Antwerp, but since the owners
                            also own <span className="italic">Mastermeubel</span> another furniture store in Turnhout, Belgium. I spent most of my time at Mastermeubel.
                            During the integration of this tool, I spent almost all of the time working on this project solo. Getting help when needed from the external German partner  
                            <span className="italic">Eastern Graphics</span> who developed the configurator itself.
                        </p>
                    </div> 
                    <div className="w-full flex justify-center md:block">
                        <img src={VPSA} className="rounded-lg w-48 md:w-full object-fit" alt="" />
                    </div>
                </div>
                <div className="md:grid md:grid-cols-4 mt-4 gap-x-2">
                    <div className="w-full flex justify-center md:block">
                        <img src={VPSA} className="rounded-lg w-48 md:w-full object-fit" alt="" />
                    </div>
                    <div className="md:col-span-3">
                        <p className="dark:text-primary-light text-primary-dark mx-1 font-medium text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestias temporibus est, pariatur architecto cum adipisci numquam harum quod consectetur quaerat corporis saepe quae nesciunt accusantium! Aspernatur vel a culpa!
                        </p>
                        <p className="dark:text-primary-light text-primary-dark font-medium mx-1 mt-5 text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestias temporibus est, pariatur architecto cum adipisci numquam harum quod consectetur quaerat corporis saepe quae nesciunt accusantium! Aspernatur vel a culpa!
                        </p>
                    </div> 
                </div>
			</div>
		</motion.div>
	);
};

export default Internship;
