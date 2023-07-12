'use client'
import { useState } from 'react'
import Nav from './(components)/Nav'
import Hero from './(components)/Hero'
import About from './(components)/About'
import Projects from './(components)/Projects'
import Contact from './(components)/Contact'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const updateDarkMode = (state: any) => [
    setDarkMode(state)
  ]

  const darkClass = darkMode ? 'dark' : ''
  const darkBg = 'bg-gradient-to-b from-[#333] to-[#111]'
  const lightBg = 'bg-gradient-to-b from-[#eee] to-[#ddd]'

  return (
    <main className={`${darkClass} ${darkMode ? darkBg : lightBg} flex min-h-screen flex-col`}>
      <Nav darkMode={darkMode} updateDarkMode={updateDarkMode}/>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
