import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Aboutuse = () => {
  return (
    <div className="container mx-auto p-8 py-16">
        <Helmet>
             <title>About | TripNest</title>
             </Helmet>
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <div className="bg-base-200 p-6 rounded-lg shadow-lg  mx-auto">
        {/* Developer Information */}
        <h2 className="text-2xl font-semibold mb-4">Who Am I?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hi, I'm Tamjid Ahmed, a passionate front-end developer with experience
          in building dynamic, responsive, and user-friendly websites. With a
          strong foundation in React, Tailwind CSS, and JavaScript, I strive to
          create seamless user experiences that make an impact.
        </p>

        {/* Project Summary */}
        <h2 className="text-2xl font-semibold mb-4">Projects I’ve Built</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Knowledge Cafe</strong>: A platform for sharing and
            discovering articles.
             {/* Check it out{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              here
            </a>. */}
          </li>
          <li>
            <strong>PetFinder-Teddy</strong>: A pet adoption platform hosted on
            Netlify.
             {/* View the live site{' '}
            <a
              href="https://sparkling-alfajores-9cbbb1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              here
            </a>. */}
          </li>
          <li>
            <strong>Donate Bangladesh</strong>: A donation site for flood
            {/* relief. Learn more{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              here
            </a>. */}
          </li>
        </ul>

        {/* Links to Other Platforms */}
        <h2 className="text-2xl font-semibold mb-4">Find Me Online</h2>
        <p className="text-lg text-gray-700">
          Connect with me on the following platforms:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <a
              href="https://github.com/Tamjid388"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tamjid-ahmed-profile59326b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://tamjid388.github.io/Minimal-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Portfolio Website
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
