'use client'
import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'
import Link from 'next/link'

const Nav = ({darkMode, updateDarkMode}: { darkMode: any, updateDarkMode: any}) => {
  return (
    <nav className='w-full px-12 border-b border-[#444] dark:border-[#ccc] flex items-center justify-between h-[50px] text-[#444] dark:text-[#ccc]'>
      <div className='w-1/4 flex items-center justify-between'>
        <h1 className='font-bold tacking-wide'>charliecrane.digital</h1>
        <div className='flex items-center gap-5 text-xs font-medium'>
        </div>
      </div>
      <div onClick={() => updateDarkMode(!darkMode)} className='hover:cursor-pointer'>
        <DarkModeSwitch />
      </div>
    </nav>
  )
}

export default Nav