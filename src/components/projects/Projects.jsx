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
            title="Classroom Behavior Analyzer"
            description="This is a tool that helps educators analyze and track the focus level of their students during class. It uses facial recognition to detect the students' faces and then uses a machine learning model to determine whether the student is focused or not. This project was built using Python, OpenCV, and Tensorflow."
            sourceCodeLink="project1-source-code-link"
            liveDemoLink="project1-live-demo-link"
          />          
          <ProjectCard
            imageSrc="src/images/projectimage1.png"
            title="BPTF Power Tool"
            description="This is a trading script built with Python that acts like a broker for the trading website backpack.tf. It allows users to automatically buy and sell items on the website. It also allows users to automatically accept trade offers from other users. This project was built using Python and Selenium."
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
