import React from 'react'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

const DarkModeSwitch = () => {
  return (
    <div className='h-[30px] w-[65px] border border-[#ccc] dark:border-[#444] rounded-full flex justify-between items-center relative'>
      <div className='h-[25px] w-[25px] rounded-full bg-green-400 absolute dark:right-0 m-1'></div>
      <div className='p-2'>
        <SunIcon />
      </div>
      <div className='p-2'>
        <MoonIcon />
      </div>
    </div>
  )
}

export default DarkModeSwitch