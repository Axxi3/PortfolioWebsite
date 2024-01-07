import React from 'react'
import sample from "../assets/samplepic.jpg"
import { motion } from 'framer-motion'
export default function ProjectCard() {  
  
  return (
   <motion.div initial={{opacity:0, scale:1.4}}
   whileInView={{opacity:1, scale:1}}   
   viewport={{ once: true }}
   transition={{duration: 0.7}}
   className="lg:w-[80%] w-[100%] lg:p-5 p-2 flex flex-col border-2 border-black bg-[#E4EAD3]">
    <img src={sample} alt="" />
    <p className='p-2 text-[20px]'>Card Title</p>  
    <div className="w-[100%] px-9 h-[2px] bg-black"></div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
       Doloribus, fugit. Repudiandae quos minus consequuntur totam, 
       tempore aut iste doloribus quia a rerum ipsa nemo error nobis
        inventore laudantium amet placeat exercitationem expedita eum nulla 
        necessitatibus perferendis. Laborum consequatur tenetur harum molestias 
        dolorum, dolore nulla ullam nam fugiat. Inventore, odio fuga!</p>
    
    <button type="button" className='self-center mt-5 bg-[#272423] text-[#E4EAD3] rounded-full'>Visit Site</button>
   </motion.div>

  )
}
