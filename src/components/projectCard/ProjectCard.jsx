// ProjectCard.jsx
import React from 'react';

function ProjectCard({ imageSrc, title, description, sourceCodeLink, buttonProps }) {
  const { buttonText, isDisabled, onClick } = buttonProps || {};

  return (
    <div className="m-2 md:m-0 lg:m-0 bg-white p-6 rounded-lg shadow-lg flex flex-col h-full hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2">
      <div className="flex-shrink-0">
        <img src={imageSrc} alt={title} className="mb-4 rounded-md" />
        <h3 className="text-xl font-bold mb-5 text-xl md:text-2xl lg:text-3xl">{title}</h3>
        <p className="text-gray-600 mb-4 text-xl">{description}</p>
      </div>
      <div className="justify-center md:justify-start lg:justify-start mt-auto flex space-x-4">
        <button
          onClick={onClick}
          className={`py-2 px-4 rounded ${isDisabled ? 'bg-gray-500 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 transition duration-300'}`}
          disabled={isDisabled}
        >
          <p className='text-lg'>{buttonText || 'Default Button Text'}</p>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
