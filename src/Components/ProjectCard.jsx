import React from 'react'

import { motion } from 'framer-motion'
export default function ProjectCard(props) {   
  const gotoLink=()=>{ 
    window.open(props.link)
  }
  
  return (
   <motion.div initial={{opacity:0, scale:1.4}}
   whileInView={{opacity:1, scale:1}}   
   viewport={{ once: true }}
   transition={{duration: 0.7}}
   className="lg:w-[80%] w-[100%] lg:p-5 p-2 flex flex-col border-2 border-black bg-[#E4EAD3]">
    <img src={props.img} alt="" />
    <p className='p-2 text-[25px] font-semibold'>{props.Title}</p>  
    <div className="w-[100%] px-9 h-[2px] bg-black"></div>
    <p>{props.description}</p>
    
    <button type="button" className='self-center mt-5 bg-[#272423] text-[#E4EAD3] rounded-full' onClick={gotoLink}>Visit Site</button>
    
   </motion.div>

  )
}
