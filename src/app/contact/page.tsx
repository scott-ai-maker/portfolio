"use client";

import { useState } from 'react';
import { Container } from '../../components/Container.tsx'
import { GitHubIcon, LinkedInIcon } from '../../components/SocialIcons.tsx';

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

    const formData = {
      name: (event.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      email: event.currentTarget.email.value,
      message: event.currentTarget.message.value,
    };

    try {
      const response = await fetch('http://localhost:8080/api/HandleContactForm', {
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-800 dark:text-zinc-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-800 dark:text-zinc-100">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{status}</p>}
    </Container>
  );
}