import ProjectCard from '../projectCard/ProjectCard';

export default function Projects() {
  return (
    <section className="py-16 bg-gray-100" id='projects'>
      <div className="container mx-auto">
        <h2 className="text-4xl font-sans text-gray-800 mb-8 flex justify-center font-bold md:text-5xl">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            imageSrc="src/images/project-images/CBA.png"
            title="Classroom Behavior Analyzer"
            description="This is a tool that helps educators analyze and track the focus level of their students during class. It uses facial recognition to detect the students' faces and then uses a machine learning model to determine whether the student is focused or not. This project was built using Python, OpenCV, and Tensorflow."
            sourceCodeLink="project1-source-code-link"
            buttonProps={{
              buttonText: 'Upon request',
              isDisabled: true,
              onClick: () => console.log('Button Clicked for Project 1'),
            }}
          />
          <ProjectCard
            imageSrc="src/images/project-images/vue-weather.png"
            title="Vue Weather App"
            description="I developed a weather app using Vue JS, incorporating dynamic features for real-time updates. The app seamlessly integrates with weather APIs, providing users with accurate forecasts. Its responsive design ensures a smooth experience, making it a user-friendly and visually appealing tool for tracking weather conditions."
            sourceCodeLink="project2-source-code-link"
            buttonProps={{
              buttonText: 'View Source Code',
              isDisabled: false,
              onClick: () => window.open('https://github.com/wassimelboussi/Vue-Weather-App', '_blank')
            }}
          />
          <ProjectCard
            imageSrc="src/images/project-images/myportfolio.png"
            title="My Portfolio"
            description="Featured in the projects section of my portfolio is the portfolio itself. Developed with ReactJS and styled with Tailwind CSS, this project allows viewers to access its source code."
            sourceCodeLink="project3-source-code-link"
            buttonProps={{
              buttonText: 'View Source Code',
              isDisabled: false,
              onClick: () => window.open('https://github.com/wassimelboussi/portfolio', '_blank'),
            }}
          />
        </div>
      </div>
    </section>
  );
}
