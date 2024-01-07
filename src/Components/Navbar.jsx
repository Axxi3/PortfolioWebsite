import React, {  useState } from 'react'
import { motion } from "framer-motion";
export default function Navbar() {


  const [click, setclick] = useState(false)   
  const clicked=()=>{ 
    if(click){ 
      setclick(false)
    } else { 
      setclick(true)
    }  
  }   

const setClickfalse =()=>{ 
  setclick(false)
}
const variants = {
  hidden: { x: "-100%",
innerWidth:0 },   // Start position off-screen to the left
  visible: { x: 0 },      // End position at the original position (0)
};   
  
  return (
    <div className='flex justify-between w-[100vw] p-[20px] relative bg-[#E4EAD3] lg:sticky top-0 z-50'>  
    <div className="w-[50%]">  
    <motion.p initial={{x:-1000,opacity:0}} animate={{x:0,opacity:100}} transition={{duration:"0.5"}} className='lg:text-[35px] text-[25px] text-left head' >Friendly Coder</motion.p>
    </div>
    <motion.ul  initial={{x:500,opacity:0}} animate={{x:0,opacity:100}} transition={{duration:"0.5"}} className='flex w-[50%] items-center lg:justify-evenly justify-end gap-7 text-[20px]'>
        
        <li  className='lg:inline hidden'> <a href="#About">About me</a>  </li>
        <li className='lg:inline hidden'> <a href="#Projects"> Projects</a> </li>
        <li className='lg:inline hidden'> <a href="#Contact"> Contact me</a> </li>
        <li className='lg:inline hidden'> <a href="https://drive.google.com/uc?export=download&id=1keQy5_GV-HuYOdRWYxeAFWsgk7bZh66v">Resume</a>  </li>  
        <li className='justify-self-end z-20'><div className=" flex flex-col gap-2 icon lg:hidden" onClick={clicked}>
          <div className={`w-[30px] h-[2px] bg-black  ${click?"rotate-45" : "rotate-0"} origin-left transition`}></div>
          <div className={`w-[30px] h-[2px] bg-black ${click?"hidden" : "inline-block"}  middle  transition`} ></div>
          <div className={`w-[30px] h-[2px] bg-black  ${click?"-rotate-45" : "rotate-0"} transition`}></div>
        </div></li>
    </motion.ul> 


      { 
      click?(
        <ul className='flex absolute w-full items-center justify-center flex-col gap-5 h-[120vh] z-10 bg-[#E4EAD3]'>
            <li  > <a href="#About" onClick={setClickfalse}>About me</a>  </li>
        <li > <a href="#Projects"  onClick={setClickfalse}> Projects</a> </li>
        <li > <a href="#Contact"  onClick={setClickfalse}>  Contact me</a> </li>
        <li> <a href="https://drive.google.com/uc?export=download&id=1keQy5_GV-HuYOdRWYxeAFWsgk7bZh66v"  onClick={setClickfalse}>Resume</a>  </li> 
        </ul>
      ):null
      
      }


    </div>
  )
}
