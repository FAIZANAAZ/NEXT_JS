"use client"

import { Facebook, Instagram, PinIcon as Pinterest, Twitter, Youtube, ArrowRight } from "lucide-react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function AboutSection() {
  // for animation
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        offset: 200,
        duration: 400,
        easing: "ease-in-out",
        once: true,
        delay: 100,
      })
    }
  }, [])

  const socialIcons = [
    { name: "Facebook", icon: <Facebook className="w-8 h-8" /> },
    { name: "Instagram", icon: <Instagram className="w-8 h-8" /> },
    { name: "Pinterest", icon: <Pinterest className="w-8 h-8" /> },
    { name: "Twitter", icon: <Twitter className="w-8 h-8" /> },
    { name: "YouTube", icon: <Youtube className="w-8 h-8" /> },
  ]

  const fashionItems = [
    { id: 1, name: "Dress", image: "/l1.png", color: "bg-red-500" },
    { id: 2, name: "Shirt", image: "/l2.png", color: "bg-green-500" },
    { id: 3, name: "Jeans", image: "/l3.png", color: "bg-black" },
    { id: 4, name: "Shoes", image: "/p1.png", color: "bg-yellow-500" },
    { id: 5, name: "Accessories", image: "/p2.png", color: "bg-pink-500" },
  ]

  return (
    <section className="w-full">
      {/* Hero Section with Shapes */}
      <div className="relative bg-black text-white py-20 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute left-0 top-0 w-48 h-48 bg-[#ffc107] rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 top-0 w-48 h-48 bg-[#40e0d0] rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-[#ff4081] rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

        {/* Content */}
        <div className="container mx-auto px-4 " data-aos="zoom-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">Our Story</h1>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white py-16 px-4">
        <div className="container mx-auto">
          {/* Empowering Text */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16">
            Empowering Individuals Through Fashion
          </h2>

          {/* Social Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-24">
            {socialIcons.map((social) => (
              <div
                key={social.name}
                className="w-16 h-16 flex items-center justify-center hover:text-black transition-colors duration-300 cursor-pointer"
              >
                {social.icon}
              </div>
            ))}
          </div>

          {/* Our Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Story Title */}
              <div data-aos="zoom-in" className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-400 rounded-full"></div>
              </div>

              {/* Story Content */}
              <div data-aos="zoom-in" className="space-y-6 text-gray-600">
                <p>
                  Our fashion journey began with a simple idea: to create clothing that not only looks good but feels
                  good too. From a small boutique to an international brand, we've grown while staying true to our core
                  values of quality, sustainability, and style.
                </p>
                <p>
                  We're committed to revolutionizing the fashion industry through innovative designs, sustainable
                  practices, and a customer-first approach. Our diverse and talented team of designers and craftspeople
                  continue to push boundaries, constantly striving to create pieces that empower and inspire.
                </p>
                <p>
                  Founded in 2010 by fashion visionaries Emma and Liam Thompson, our brand has evolved from a local
                  favorite to a global trendsetter. We've dressed celebrities, collaborated with renowned artists, and
                  most importantly, helped millions express themselves through fashion.
                </p>

                {/* Read More Link */}
                <div>
                  <a href="#" className="inline-flex items-center text-black hover:text-gray-700 font-medium">
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <path
                    d="M50,200 C50,100 150,50 250,50 C350,50 350,150 350,250 C350,350 250,350 150,350 C50,350 50,250 50,200"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    className="path"
                  />

                  {fashionItems.map((item, index) => {
                    const positions = [
                      { x: 50, y: 200 },
                      { x: 150, y: 50 },
                      { x: 350, y: 150 },
                      { x: 350, y: 250 },
                      { x: 150, y: 350 },
                    ]
                    return (
                      <g key={item.id} transform={`translate(${positions[index].x - 40}, ${positions[index].y - 40})`}>
                        <circle cx="40" cy="40" r="40" className={`${item.color} opacity-20`} />
                        <circle cx="40" cy="40" r="35" className={item.color} />
                        <foreignObject x="10" y="10" width="60" height="60">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={`${item.name} image`}
                            width={60}
                            height={60}
                            className="rounded-full object-cover"
                          />
                        </foreignObject>
                      </g>
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Fashion Illustration */}
              <div className="relative">
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  {/* Fashion Circle */}
                  <div className="absolute inset-0  rounded-full transform -rotate-12"></div>
                  <div className="relative z-10">
                    <Image
                      src="/abj.png"
                      alt="Fashion Illustration"
                      width={500}
                      height={500}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mission Content */}
              <div className="space-y-8">
                <div className="relative inline-block">
                  <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                    Our mission
                    <span className="text-pink-500 text-2xl">╱╲</span>
                  </h2>
                </div>

                <div data-aos="zoom-in" className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    Our mission is to empower individuals to express their unique identities through fashion. We believe
                    that clothing is more than just fabric; it's a form of self-expression, a confidence booster, and a
                    way to connect with others.
                  </p>

                  <p>
                    We're committed to sustainable practices, ethical manufacturing, and inclusive sizing. Our goal is
                    to create fashion that not only looks good but also feels good - both for the wearer and for the
                    planet.
                  </p>

                  <p className="font-medium text-gray-800">
                    Remember, fashion is about more than following trends. It's about finding your own style, embracing
                    your uniqueness, and feeling confident in your own skin. Let's redefine fashion together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

