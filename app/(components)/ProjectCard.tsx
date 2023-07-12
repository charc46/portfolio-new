import React from 'react'
import Image from 'next/image'
import headshot from '../../public/images/profile-small.jpg'
import { OpenInNewWindowIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

const ProjectCard = ({title, description, image, technologies, url, github}: {title: string, description: string, image: any, technologies: string[], url: string, github?: string}) => {
  return (
    <a href={url} target='blank' rel='noreferrer' className='text-[#444] dark:hover:text-[#444] dark:text-[#ccc] flex flex-col md:flex-row items-start gap-5 w-full md:w-[600px] bg-none hover:bg-[#ccc] dark:hover:bg-[#999] h-auto hover:shadow-xl rounded-lg duration-300 p-2'>
      <div className='w-[150px] h-[80px] relative'>
        <Image src={image} alt={title} style={{objectFit: 'cover'}} fill sizes='30vw' className='rounded-md'/>
      </div>
      <div className='px-2 w-[400px]'>
        <h3 className='font-bold text-lg mb-2 flex items-center gap-1'>{title} <OpenInNewWindowIcon /></h3>
        <p className='font-medium text-sm'>{description}</p>
        <div className='flex gap-2 w-full my-2'>
          {technologies.map(tech => {
            return <div key={tech} className='font-medium text-[#eee] dark:text-[#444] bg-[#444] dark:bg-[#ccc] rounded-full text-xs m-0 h-[30px] flex items-center w-fit p-2'>{tech}</div>
          })}
        </div>
        <div className='flex items-center justify-between w-fit mx-auto my-2'>
          {github && <a href={github} target='blank' rel='noreferrer' className='underline my-2 flex items-center gap-1 font-bold text-lg'><GitHubLogoIcon /> <OpenInNewWindowIcon /></a>}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard