import React from 'react';
import ProjectCard from '../projectCard/ProjectCard';

export default function Projects() {
  return (
    <section className="py-16 bg-gray-100" id='projects'>
      <div className="container mx-auto">
        <h2 className="text-4xl font-sans text-gray-800 mb-8 flex justify-center font-bold md:text-5xl">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            imageSrc="src/images/projectimage1.png"
            title="Project 1"
            description="This is a short description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            sourceCodeLink="project1-source-code-link"
            liveDemoLink="project1-live-demo-link"
          />          
          <ProjectCard
            imageSrc="src/images/projectimage1.png"
            title="Project 2"
            description="This is a short description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            sourceCodeLink="project1-source-code-link"
            liveDemoLink="project1-live-demo-link"
          />          
          <ProjectCard
            imageSrc="src/images/projectimage1.png"
            title="Project 3"
            description="This is a short description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            sourceCodeLink="project1-source-code-link"
            liveDemoLink="project1-live-demo-link"
          />          
          <ProjectCard
            imageSrc="src/images/projectimage1.png"
            title="Project 4"
            description="This is a short description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            sourceCodeLink="project1-source-code-link"
            liveDemoLink="project1-live-demo-link"
          />
        </div>
      </div>
    </section>
  );
}
