'use client'
import React, { useState } from 'react'
import Title from '../Title'
import Image from 'next/image'
import AboutMobileAccordion from './AboutMobileAccordion'
import { AboutMock } from '../../../mocks/AboutMock'
import { BiSolidRocket } from 'react-icons/bi'
import { AiFillLike } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'

export default function About() {
  const [openItems, setOpenItems] = useState(
    Array(AboutMock.length).fill(false),
  )

  const toggleAccordion = (index: number) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = [...prevOpenItems]
      newOpenItems[index] = !newOpenItems[index]
      return newOpenItems
    })
  }

  return (
    <section className="container mb-10 mt-28">
      <Title text="on" />
      <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        <article className="w-full xl:w-[45.5rem]">
          <h2 className="text-2xl font-semibold leading-9 text-zinc-50">
            We are shaping the future of web technology
          </h2>
          <p className="mt-6 leading-8 text-zinc-50">
            We are a team of students{' '}
            <span className="text-primary-400">
           passionate about technology
            </span>{' '}
            and dedicated to web development, covering both Front-end
and Back-end. With the aim of{' '}<span className="text-primary-400">make a difference</span> ,
            we combine our{' '}
            <span className="text-primary-400">
              knowledge and skills
            </span>{' '}
            para promover o{' '}
            <span className="text-primary-400">
              personal and collective growth
            </span>
            .
          </p>
          <Image
            width={688}
            height={337}
            alt="Picture of a computer on a table"
            src={'/About02.png'}
            className="mt-5 xl:m-0 xl:hidden xl:w-[416px]"
          />
          <div className="mt-4 hidden grid-cols-2 gap-4 sm:grid">
            <article className="rounded border border-primary-400 p-4 pl-0 text-zinc-50 transition-all duration-500 ease-out sm:border-none">
              <div className="flex items-center justify-between">
                <figure className="flex items-center gap-4">
                  <BiSolidRocket className="h-8 w-8 text-primary-400" />
                  <h2 className="font-bold">Mission</h2>
                </figure>
              </div>
              <p className="mt-5 leading-8 transition-all duration-500 ease-out">
                Our mission is to create a{' '}
                <span className="text-primary-400">espaço colaborativo</span>{' '}
                that allows each member of the group{' '}
                <span className="text-primary-400">
                  learn, grow and share experiences  </span>{' '}
               in the world of web development. By combining our skills and
knowledge, we seek to{' '}
                <span className="text-primary-400">
overcome challenges and boost potential                </span>{' '}
               of each individual, promoting personal and collective development.
              </p>
            </article>
            <article className="rounded border border-primary-400 pt-4 text-zinc-50 transition-all duration-500 ease-out sm:border-none">
              <div className="flex items-center justify-between">
                <figure className="flex items-center gap-4">
                  <IoEyeSharp className="h-8 w-8 text-primary-400" />
                  <h2 className="font-bold">Vision</h2>
                </figure>
              </div>
              <p className="mt-5 leading-8 transition-all duration-500 ease-out">
                We are a group{' '}
                <span className="text-primary-400">
                  non-profit volunteer
                </span>
                , seeking projects that have an impact on society, valuing
innovative and inclusive solutions. Bringing together people who are passionate about
web development, we encourage the exchange of knowledge and
teamwork for a{' '}
                <span className="text-primary-400">
                  promising digital future
                </span>
                . Join us and grow personally and professionally.
              </p>
            </article>
          </div>
          <article className="mt-10 hidden rounded border border-primary-400 text-zinc-50 transition-all duration-500 ease-out sm:block sm:border-none">
            <div className="flex items-center justify-between">
              <figure className="flex items-center gap-4">
                <AiFillLike className="h-8 w-8 text-primary-400" />
                <h2 className="font-bold">Values</h2>
              </figure>
            </div>
            <p className="mt-5 leading-8 transition-all duration-500 ease-out">
              We are driven by a passion for technology, committed to
collaboration, continuous learning, and positive impact on the
community. We value{' '}
              <span className="text-primary-400">
              innovation, accessibility and inclusion  </span>
              ,keeping a{' '}
              <span className="text-primary-400">
               welcoming, respectful and collaborative environment  </span>{' '}
              for all members.
            </p>
          </article>
        </article>
        <Image
          width={416}
          height={780}
          alt="Picture of a computer on a table"
          src={'/about.png'}
          className="hidden bg-cover xl:block"
        />

        {AboutMock.map((about) => (
          <AboutMobileAccordion
            key={about.id}
            text={about.text}
            title={about.title}
            icon={about.icon}
            open={openItems[about.id]}
            onClick={() => toggleAccordion(about.id)}
          />
        ))}
      </div>
    </section>
  )
}
