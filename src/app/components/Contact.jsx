"use client";
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import github_logo from "../../../public/assets/github.svg";
import linkedin_logo from "../../../public/assets/linkedin.svg";
import { github_link, linkedin_link } from "./ExternalLinks";
import { toast } from 'react-hot-toast';

const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      toast.success(`Hey ${data.firstName}, your email has been sent successfully!`);
    }
    else {
      toast.error(`Hey ${data.firstName}, there was an error sending your email. Please try again later or use the email address given on the left.`);
    }
  };


  return (
    <section id="contact" className="lg:flex lg:flex-wrap lg:justify-center">
      <div className="w-full lg:w-1/2 p-4 text-left text-textColor">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">Let&apos;s Connect</h2>
        <p className="mt-4 mb-4">
          I&apos;m always interested in connecting with other developers and learners.
          Feel free to reach out and say hello! You can also send me an email using the subsequent form.
        </p>
        <p className="mt-4 mb-4">
            My Email: <span className="text-primaryColor">123@gmail.com</span>
        </p>
        <div className='flex flex-row gap-4'>
            {linkedin_link && (
                <Link href={linkedin_link} target="_blank" rel="noreferrer noopener" className='sm:text-2xl md:text-3xl hover:text-primaryColor text-textColor font-semibold hover:scale-110 transition duration-100 ease-in-out'>
                    <Image src={linkedin_logo} alt="Logo" width={45} height={45} />
                </Link>
            )}
            {github_link && (
            <Link href={github_link} target="_blank" rel="noreferrer noopener" className='sm:text-2xl md:text-3xl hover:text-primaryColor text-textColor font-semibold hover:scale-110 transition duration-100 ease-in-out'>
                <Image src={github_logo} alt="Logo" width={45} height={45} />
            </Link>
            )}
        </div>
      </div>
      <div className="w-full mt-5 lg:mt-0 lg:w-1/2 py-4 lg:p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <div className="w-full mr-4"> <label htmlFor="firstName" className="block text-textColor font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="Your first name"
                className="bg-bgColor placeholder-textColorMuted text-textColor w-full rounded-md border border-secondaryColor px-4 py-2 focus:border-primaryColor focus:outline-none"
              />
            </div>
            <div className="w-full"> <label htmlFor="lastName" className="block text-textColor font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Your last name"
                className="bg-bgColor placeholder-textColorMuted text-textColor w-full rounded-md border border-secondaryColor px-4 py-2 focus:border-primaryColor focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-textColor font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email address"
              className="bg-bgColor placeholder-textColorMuted text-textColor w-full rounded-md border border-secondaryColor px-4 py-2 focus:border-primaryColor focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-textColor font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Subject of your email"
              className="bg-bgColor placeholder-textColorMuted text-textColor w-full rounded-md border border-secondaryColor px-4 py-2 focus:border-primaryColor focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-textColor font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="5"
              required
              className="bg-bgColor placeholder-textColorMuted text-textColor w-full rounded-md border border-secondaryColor px-4 py-2 focus:border-primaryColor focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#0077b5] hover:bg-blue-700 text-textColor font-medium py-2 px-4 rounded-lg w-full"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
