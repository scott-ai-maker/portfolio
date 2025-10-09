"use client";

import React, { useState } from 'react';
import { Container } from '../../components/Container.tsx';
import { GitHubIcon, LinkedInIcon } from '../../components/SocialIcons.tsx';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:7071';

const socialLinks = [
  {
    href: 'https://github.com/scott-ai-maker',
    icon: GitHubIcon,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/sagordon-dev/',
    icon: LinkedInIcon,
    label: 'LinkedIn',
  },
];

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('');

    const name = (event.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    const message = (event.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value;

    // Client-side validation
    if (!name || !email || !message) {
      setStatus('All fields are required.');
      return;
    }

    const formData = { name, email, message };

    try {
      const response = await fetch(`${API_URL}/api/HandleContactForm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        event.currentTarget.reset();
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <Container className="mt-16">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Contact Me
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Feel free to reach out via email, phone, or connect with me on LinkedIn and GitHub.
      </p>
      <div className="mt-10 space-y-6">
        {socialLinks.map((link, index) => (
          <div key={index} className="flex items-center space-x-4">
            <link.icon className="h-6 w-6 text-teal-500" />
            <a href={link.href} className="text-sm text-zinc-600 dark:text-zinc-400">
              {link.label}
            </a>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 rounded-md border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-teal-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 rounded-md border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-teal-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 rounded-md border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 sm:text-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-teal-400"
            />
          </div>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{status}</p>}
    </Container>
  );
}