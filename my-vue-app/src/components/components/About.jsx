import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { services } from '../../constants'
import {fadeIn, textVariant} from '../../utils/motion'

const ServiceCard = ({index , title, icon})=>{
  return (
    <Tilt className = "xs:w-[250px] w-full ">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div 
          options={{
            max : 45,
            scale : 1,
            speed : 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
        >

          {/* start here today : 1:16:00 */}


        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.sectionHeadText} >Overview</h2>
      </motion.div>
      
      <motion.p variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
      >
      Hi, I’m Yash Raj Sharma, a Data Analyst skilled in Python, SQL, and Machine Learning.
      Currently in my final year of Computer Science Engineering at Guru Gobind Singh Indraprastha
      University (graduating in 2025), I’ve gained hands-on experience through projects like
      developing a 97% accurate vector disease prediction tool.I specialize in data cleaning,
      preprocessing, and visualization using tools like Matplotlib and Seaborn. I also excel in
      automation and process optimization, helping reduce data inconsistencies by 15%.
      I’m passionate about using data to solve real-world problems and eager to apply my skills in innovative projects.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=> (
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))}
      </div>

    </>
  )
}

export default About