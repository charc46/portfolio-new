import React from 'react'
import ProjectCard from './ProjectCard'
import seavpages from '/public/images/seavpages.png'
import floatingflorista from '/public/images/floatingflorista.png'

const Projects = () => {
  return (
    <div className='w-[95%] md:w-[70%] mx-auto my-[4rem] text-[#444] dark:text-[#ccc]'>
      <h2 className='text-center text-lg font-bold'>PROJECTS</h2>
      <div className='flex flex-col items-center gap-5 my-2'>
        <ProjectCard 
          title='Sea-V Pages' 
          description='Sea-V Pages is a web app built to enable superyacht crew to create an online CV by providing them with their own webpage with a unique URL.' 
          technologies={['NextJS', 'TailwindCSS', 'Supabase', 'Hosted on Render']}
          image={seavpages}
          url={'https://seavpages.com'}
        />
        <ProjectCard 
          title='Floating Florista Foundation' 
          description='A static brochure website built for a charity foundation including a contact form and inclusion of an external booking system for the foundation&apos;s beach hut hire.' 
          technologies={['NextJS', 'TailwindCSS', 'Hosted on Netlify']}
          image={floatingflorista}
          url={'https://floatingflorista.co.uk'}
        />
      </div>
    </div>
  )
}

export default Projects