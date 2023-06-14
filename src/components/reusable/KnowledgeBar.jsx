import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const KnowledgeBar = ({ percentage, label, bgc }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,  
        });

	return (
        <div ref={ref}>
            <p className='text-xs dark:text-primary-light text-primary-dark'>{label}</p>
            <div className='w-full h-fit bg-ternary-light inline-block border dark:border-ternary-dark border-slate-300 rounded-md'>
                <motion.div 
                    className="h-2 block rounded-md" 
                    style={{backgroundColor: bgc}}
                    initial={{width: "0%"}}
                    animate={{width: inView ? `${percentage}%` : "0%"}}
                    transition={{ duration: 1 }} 
                                    >
                </motion.div>
            </div>
        </div>
	);
};

export default KnowledgeBar;
