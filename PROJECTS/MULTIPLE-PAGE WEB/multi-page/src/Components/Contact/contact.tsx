"use client"
import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row mt-[170px] sm:mt-[150px] md:mt-0 md:h-[30rem]">

        <div className="w-full md:w-1/3 bg-gradient-to-b from-yellow-300 to-orange-500 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">Contact Us</h1>
          <a className="bg-white text-black text-center font-bold p-3  mb-4 w-full md:w-auto flex">
          Phone <BsTelephoneFill size={20}/> : +92 123 456 789
          </a>
          <a className="bg-black text-center text-white font-bold p-3  flex w-full md:w-auto">
          Email <MdOutlineEmail size={20}/> : giftnaaz@gmail.com
          </a>
        </div>

        <div className="w-full md:w-2/3 h-[20rem] md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57933.370639381625!2d67.09169307748044!3d24.83529294935495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b07c73d0a7f:0xecc47fa378e95fd5!2sKorangi, Karachi, Karachi City, Sindh, Pakistan!5e0!3m2!1sen!2s!4v1730920411972!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact
