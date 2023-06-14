import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import Button from "../reusable/Button";

import VPSA from '../../../src/images/vpsa.jpeg';

// Docs
import pva from '../../../src/docs/Plan_Van_Aanpak.pdf';
import realisatie from '../../../src/docs/Realisatie_Verslag.pdf';
import reflectie from '../../../src/docs/Reflectie_Verslag.pdf';
import awsFlow from '../../../src/docs/aws_flow.pdf';


const fadeOnVisible = {
    visible: { opacity: 1,  x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -200 },
};

const InternshipHome = () => {
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
            className="py-5 sm:py-10 mt-5 sm:mt-10"
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
                            At the end of February 2023 I started my internship at <b>Vitra Partner Store Antwerp (VPSA)</b>.
                            During my internship I was tasked with integrating a <b>product configurator</b> into their <b>webshop</b>. Thus making it easier for their customers
                            to configure the furniture piece exactly how they want it, without intervention from the employees. For this I used <b>PHP and JavaScript</b>
                        </p>
                        <p className="dark:text-primary-light text-primary-dark font-medium mx-1 mt-5 text-left">
                            VPSA like it's name implies is a partner store of the <b>Vitra</b> brand. The store is located in Antwerp, but since the owners
                            also own <b>Mastermeubel</b> another furniture store in Turnhout, Belgium. I spent most of my time at Mastermeubel.
                            During the integration of this tool, I spent almost all of the time working on this project <b>solo</b>. Getting help when needed from the external German partner  
                            <b>Eastern Graphics</b> who developed the configurator itself.
                        </p>
                        
                    </div> 
                    <div className="w-full flex justify-center md:block">
                        <img src={VPSA} className="rounded-lg w-48 md:w-full object-fit" alt="" />
                    </div>
                    <div className="col-span-4 my-4 sm:mt-10 justify-center">
                        <h3 className="text-center dark:text-primary-light text-primary-dark text-lg mt-5">Documents (Dutch)</h3>
                        <hr className="dark:border-secondary-dark border-primary-light mb-1"/>
                        <ul>
                            <li>
                                <a className="dark:text-primary-light text-primary-dark font-bold hover:underline" href={pva} alt="Plan van Aanpak" target="_blank" rel="noreferrer">Plan van Aanpak</a>
                            </li>
                            <li>
                                <a className="dark:text-primary-light text-primary-dark font-bold hover:underline" href={realisatie} alt="Realisatie Verslag" target="_blank" rel="noreferrer">Realisatie Verslag</a>
                            </li>
                            <li>
                                <a className="dark:text-primary-light text-primary-dark font-bold hover:underline" href={reflectie} alt="Reflectie Verslag" target="_blank" rel="noreferrer">Reflectie Verslag</a>
                            </li>
                            <li>
                                <a className="dark:text-primary-light text-primary-dark font-bold hover:underline" href={awsFlow} alt="AWS Workflow" target="_blank" rel="noreferrer">AWS Hosting Documentation (English)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-4 mt-8 sm:mt-10 flex justify-center">
                        <Link
                            to="/internship"
                            className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                            aria-label="More Info"
                        >
                            <Button title="More Info" />
                        </Link>
                    </div>
                </div>
			</div>
		</motion.div>
	);
};

export default InternshipHome;
