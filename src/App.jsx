import { useEffect, useState } from 'react'
import arrow from "./assets/arrow.png"
import './App.css'  
import { motion } from "framer-motion";
import Navbar from './Components/Navbar'
import ProjectCard from './Components/ProjectCard'
import SuccessFullNots from './Components/SuccessFullNots';
import ErrorNots from './Components/ErrorNots';
import ContactUs from './Components/ContactUs';
import { FooterThree } from './Components/FooterThree';

function App() {  
  
  const [hasEmptyFields, setHasEmptyFields] = useState(false);    
  
  const handleEmptyFields = (isEmpty) => {
    setHasEmptyFields(isEmpty);
  };
 const [email,setEmail]=useState(0)  //1-> true 2-> error
 const EmailSendOrNot =(emaildata)=>{ 
  setEmail(emaildata)
 }
 
      useEffect(()=>{ 
        console.log(hasEmptyFields)
      },[hasEmptyFields]) 


  return (
    <>    
    
    <Navbar/>     

    {
      hasEmptyFields && ( 
        <ErrorNots mess="Please fill all the feilds"/>
      )
    }  

    { 
      email ==1 ? ( 
        <SuccessFullNots mess="Email successfully sent"/>
      ) : email==2 ?( 
        <ErrorNots mess="Please try again"/>
      ) :null
    }
   
    <section className='h-[100vh] w-[100%]'>

  
      

      <div className="hero w-[100%] pt-9 flex flex-col items-center justify-center gap-4">
      <div className="text ">
      <motion.p initial={{y:-100,opacity:0}} animate={{y:0,opacity:100}} transition={{duration:"0.5" , delay:"0.2"}}
      className='lg:text-[100px] text-[60px] md:text-[70px] text-center'>Work with a developer</motion.p>  
      <motion.p initial={{y:-100,opacity:0}} animate={{y:0,opacity:100}}  transition={{duration:"0.3",delay:"0.1"}} className='lg:text-[100px] text-[60px] md:text-[70px] text-center'>That turns your Dreams</motion.p> 
      <motion.p initial={{y:-100,opacity:0}} animate={{y:0,opacity:100}}  transition={{duration:"0.3"}} className='lg:text-[100px]  text-[60px] md:text-[70px] text-center'>into Reality</motion.p>  

      </div>
   
     <a href="#Contact"> <motion.button whileHover={{scale:1.2}} transition={{duration:"0.4",type:"spring"}}
       type="button" className='text-[30px] mt-3 bg-[#272423] rounded-full border-[#A9AE9B] transition text-[#E4EAD3] hover:bg-[#A9AE9B] hover:text-[#272423] flex items-center justify-center'>Contact me <img src={arrow} alt=""  className='w-[30px] h-[30px] ml-[10px] -scale-x-[1]'/></motion.button></a>
      </div>

      </section>    
      <motion.div   initial={{opacity:0, width:0}}
   whileInView={{opacity:1, width:"100%"}}  
   transition={{duration: 0.7}}
   className="w-[100%] h-[1px] bg-black mt-4"></motion.div>



      <section className='mt-[50px] flex flex-col gap-10 lg:p-0 p-5' id='About'>  
<div className="first flex flex-col">
      <motion.p initial={{y:200}}
      whileInView={{y:0}}  
      transition={{duration:0.4}}
      className='lg:text-[80px] text-[40px] md:text-[50px] lg:text-left text-center lg:pl-[100px] lg:w-[50%] w-[100%]'>Web Development</motion.p>  

      <div className="para lg:w-[50%] leading-[30px] self-end lg:pr-[100px] ">
        <motion.p    initial={{y:200}}
      whileInView={{y:0}}  
      transition={{duration:0.4}}
      viewport={{ once: true }}
        
        className='lg:text-[20px] text-[15px]'>Raj, with a solid year of experience in web development, is well-versed in the intricacies of the field. His focus lies in crafting dynamic and efficient web solutions, showcasing expertise in both React and the MERN (MongoDB, Express.js, React, Node.js) stack.

Having navigated through a diverse range of projects, Raj brings hands-on experience in building responsive and engaging websites. His proficiency extends from front-end design to back-end development, ensuring the seamless integration of user interfaces with robust server-side functionalities.

<br></br><br></br> Notable in his skill set is Raj's ability to create and optimize web architectures, enhancing the overall performance and user experience of the applications he develops. Whether it's a single-page application or a comprehensive web solution, Raj's portfolio reflects his commitment to delivering high-quality results in the dynamic field of web development.</motion.p>
      </div>  
      </div>     
      <div  initial={{opacity:0, width:0}}
   whileInView={{opacity:1, width:"100%"}}  
   transition={{duration: 0.7}} 
      className="w-[100%] h-[1px] bg-black"></div>
      <div className="second flex flex-col">
      <motion.p  
     
      initial={{y:200}}
      whileInView={{y:0}}  
      transition={{duration:0.4}}
         className='lg:text-[80px] text-[40px] md:text-[60px] lg:text-right lg:pr-[100px] text-center w-[100%]'>Android Development</motion.p>    
      <div className="para lg:w-[50%] leading-[30px] self-start lg:pl-[100px] ">
        <motion.p  viewport={{ once: true }}    
        initial={{y:200}}
      whileInView={{y:0}}    
      
      transition={{duration:0.4}}
         className='lg:text-[20px] text-[15px] mt-[20px]'>Raj, an accomplished Android developer, brings a wealth of experience and expertise to the world of mobile app development. His primary focus lies in mastering Kotlin and React Native, two powerful technologies that have become instrumental in shaping the Android landscape. With an impressive portfolio, Raj stands out for successfully creating three e-commerce applications, underscoring his ability to design and implement robust, user-friendly solutions.
<br /><br />
What sets Raj apart is his versatility, seamlessly navigating between Kotlin and React Native to deliver high-quality projects that resonate across different platforms. Whether he's spearheading the development of feature-rich e-commerce applications or engaging in a myriad of diverse mobile projects, Raj consistently demonstrates his commitment to excellence in the dynamic realm of Android development. His dedication and proven track record make him an invaluable asset to any mobile app development team.</motion.p> </div>    
      </div>  
      <motion.div  initial={{opacity:0, width:0}}
   whileInView={{opacity:1, width:"100%"}}  
   transition={{duration: 0.7}}
       className="w-[100%] h-[1px] bg-black"></motion.div>  


      <div className="first flex flex-col">
      <motion.p    initial={{y:200}}
      whileInView={{y:0}}  
      transition={{duration:0.4}}
         className='lg:text-[80px] text-[40px] md:text-[50px] lg:text-left text-center lg:pl-[100px] lg:w-[50%] w-[100%]'>Web Design</motion.p>  

      <div className="para lg:w-[50%] leading-[30px] self-end lg:pr-[100px] p-[50px]">
        <motion.p    initial={{y:200}}
      whileInView={{y:0}}      
      viewport={{ once: true }}
      transition={{duration:0.4}}
         className='lg:text-[20px] text-[15px]'>
Raj is a proficient website designer with a year of hands-on experience, showcasing his talent in creating visually appealing and functional web solutions. Specializing in website design, Raj has successfully delivered a diverse range of projects, highlighting his commitment to excellence in the realm of web development.
<br /><br />
With expertise across various platforms and a keen eye for design aesthetics, Raj's portfolio reflects his dedication to crafting websites that not only captivate users visually but also provide an intuitive and engaging experience. From corporate websites to dynamic e-commerce platforms, Raj's versatility and commitment shine through, making him a valuable asset in the dynamic landscape of website design.</motion.p>
      </div>  
      </div>  
      </section>  
    <motion.div   initial={{opacity:0, width:0}}
   whileInView={{opacity:1, width:"100%"}}  
   transition={{duration: 0.7}}  
   viewport={{ once: true }}
     className="w-[100%] h-[1px] bg-black mt-4"></motion.div>

      <section className="mt-[50px] change md:h-[100vh] h-[150vh] w-[100vw] flex md:flex-row flex-col" id='Projects'>
     <div className="left w-[50%] self-center">
     <p className='lg:text-[80px] text-[40px] md:text-[50px] mt-[30px] text-center lg:pl-[100px] w-[100%]'>Projects</p>  
     <p className='lg:text-[60px] text-[30px] md:text-[40px] mt-[30px] text-center lg:pl-[100px] w-[100%]'>Some of the key highlights of my projects</p>
     </div>
 <div className="right md:w-[50%] flex flex-col p-[50px] gap-5 md:item-start item-center overflow-scroll">
   
 <ProjectCard/><ProjectCard/> <ProjectCard/><ProjectCard/> <ProjectCard/><ProjectCard/>
 </div>
      </section>  

      <ContactUs onEmptyFields={handleEmptyFields} emailSender={EmailSendOrNot}/>

      <FooterThree/>
    </>  



  )
}

export default App
