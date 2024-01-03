
"use client"
import React from 'react';
import {motion} from 'framer-motion'
import { textVariant2 } from '@/front_utils/motion';
const Title = ({ text }) => {
  return <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className='font-bold text-[22px] tablet:text-[32px] px-4 pb-5 leading-[32px]'>{text}</motion.h2>;
};

export default Title;
