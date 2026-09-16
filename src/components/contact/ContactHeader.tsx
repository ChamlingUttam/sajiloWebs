import React from 'react'

const ContactHeader = () => {
  return (
    <div>
       <header className="flex w-full flex-col items-center justify-center bg-[#491A53] px-4 py-16 text-center text-white sm:px-8 lg:px-12 lg:py-24">
        <h1 className="max-w-3xl  text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Let us know how we 
          <br className="hidden sm:block" />
          can help you
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/90 sm:text-base lg:text-md lg:leading-7">
          Fill out the form below and we'll get back to you as soon as possible. 
We're here to help you transform your hotel's digital presence.
        </p>

      </header>
    </div>
  )
}

export default ContactHeader
