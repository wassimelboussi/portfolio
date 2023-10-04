import React from 'react';

function ProjectCard({ imageSrc, title, description, sourceCodeLink, liveDemoLink }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={imageSrc} alt={title} className="mb-4 rounded-md" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a
          href={sourceCodeLink}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code
        </a>
        <a
          href={liveDemoLink}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
