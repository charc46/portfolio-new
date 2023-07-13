'use client'
import React, { useState} from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const data = new FormData(e.target)
      fetch(e.target.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          setStatus("Thanks for your submission!")
          setName('')
          setEmail('')
          setMessage('')
          setTimeout(() => {
            setStatus('')
          }, 1500)
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              setStatus(data["errors"].map((error: any) => error["message"]).join(", "))
            } else {
              setStatus("Oops! There was a problem submitting your form")
            }
          })
        }
      })
    } catch (error) {
      console.log(error)
      setStatus("Oops! There was a problem submitting your form")
    }
  }
  return (
    <div className='w-[90%] md:w-[70%] mx-auto my-[4rem] text-[#444] dark:text-[#ccc] flex flex-col items-center gap-2'>
      <h2 className='text-center text-lg font-bold'>CONTACT</h2>
      <p>Feel free to pop me a message if you want to know more about me or my projects.</p>
      <form action="https://formspree.io/f/xrgongwz" method="POST" onSubmit={handleSubmit} className='flex flex-col gap-2 w-full md:w-1/2 mx-auto'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='font-bold text-xs'>NAME</label>
          <input className='rounded-lg px-2 py-1' type="text" name='name' value={name} required onChange={e => setName(e.target.value)}/>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-bold text-xs'>EMAIL</label>
          <input className='rounded-lg px-2 py-1' type="email" id='email' name='_replyto' value={email} required onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="message" className='font-bold text-xs'>MESSAGE</label>
          <textarea className='rounded-lg px-2 py-1 resize-none' name="message" id="message" rows={8} value={message} required onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        <button className='font-bold text-sm p-2 rounded-full bg-[#444] dark:bg-[#ccc] text-[#eee] dark:text-[#444] w-1/4 mx-auto hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-lg duration-200 my-2'>SEND IT</button>
        <p className='font-bold text-sm text-center'>{status}</p>
      </form>
    </div>
  )
}

export default Contact