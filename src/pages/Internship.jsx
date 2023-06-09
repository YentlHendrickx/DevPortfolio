import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//import Button from "../components/reusable/Button";

import VPSA from "../../src/images/vpsa.jpeg";
import PCON from "../../src/images/internship/pcon.png";

// Docs
import pva from '../../src/docs/Plan_Van_Aanpak.pdf';
import realisatie from '../../src/docs/Realisatie_Verslag.pdf';
import reflectie from '../../src/docs/Reflectie_Verslag.pdf';
import awsFlow from '../../src/docs/aws_flow.pdf';

const Internship = () => {
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
                    to="/Contact"
                    className="dark:text-primary-light text-primary-dark font-medium hover:underline"
                    aria-label="Contact"
                >To Contact &rarr;</Link>
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    delay: 0.1,
                }}
                className="flex flex-col-reverse lg:flex-row pb-5 mt-7">
                <div className="text-center mx-auto">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                        Internship
                    </p>

                    <div className="border-t border-primary-light dark:border-secondary-dark gap-x-2 mx-auto">
                        <section className="max-w-5xl">
                            <div className="text-xl mb-5 mt-2">
                                <p className="dark:text-primary-light text-primary-dark font-medium">
                                    The company
                                </p>
                            </div> 
                            <div className="">
                                <p className="dark:text-primary-light text-primary-dark font-medium mx-1 text-left">
                                    At the end of February 2023 I started my internship at <b>Vitra Partner Store Antwerp (VPSA)</b>.
                                    VPSA like it's name implies is a partner store of the <b>Vitra</b> brand. The store is located in Antwerp.
                                    VPSA is operated by <b>Master Meubel Turnhout</b> another furniture store. I spent most of my time at Master Meubel while developing.
                                    I worked on the project completely alone. Getting help when needed from the external German partner&nbsp;
                                    <b>Eastern Graphics</b> who developed the system that needs integration.
                                </p>
                            </div> 
                            <div className="flex justify-center items-center w-full">
                                <div className="w-[50%] self-center md:mt-4 mt-2">
                                    <img src={VPSA} className="rounded-lg w-full max-w-[80%] mx-auto object-fit" alt="VPSA logo" />
                                </div>
                            </div>
                        </section>
                        <section className="mt-10 max-w-5xl mx-auto">
                            <div className="text-xl mb-5 mt-2">
                                <p className="dark:text-primary-light text-primary-dark font-medium">
                                    Webshop furniture configurator 
                                </p>
                            </div> 
                            <div className="">
                                <p className="dark:text-primary-light text-primary-dark font-medium mx-1 text-left">
                                    During my internship I was tasked with integrating a <b>product configuration tool</b>.
                                    This product integration tool <b>(pCon)</b> is developed by <b>Eastern Graphics</b>.
                                    To integrate this tool I used <b>PHP and JavaScript</b>
                              </p>
                              <p className="dark:text-primary-light text-primary-dark font-medium mt-2 mx-1 text-left">
                                    The VPSA website is a webshop completely made in <b>WordPress</b>. The issue they had is that 
                                    in the world of design furniture everything can be <b>customized</b>. Colors, materials, different looks of specific parts, etc. all of these can be configured and adapted to the clients needs.
                                    By introducing a product configuration tool on the webshop this problem could be solved efficiently.
                                    No longer is there a need for multiple versions of the same product on the webshop. No longer can certain configurations not be made.
                              </p>
                            </div> 
                            <div className="flex justify-center items-center w-full">
                                <div className="w-[50%] self-center md:mt-4 mt-2">
                                    <img src={PCON} className="rounded-lg w-full mx-auto object-fit" alt="Product Configurator" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="md:grid md:grid-cols-4 mt-4 gap-x-2">
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
                </div>
            </motion.div>
		</div>
	);
};

export default Internship;
