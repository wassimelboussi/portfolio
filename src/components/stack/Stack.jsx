import HTMLCSSLogo from '/images/stack-icons/htmlcss.png';
import TailwindCSSLogo from '/images/stack-icons/tailwind.png';
import JavaScriptLogo from '/images/stack-icons/js.png';
import ReactJSLogo from '/images/stack-icons/reacticon.png';
import Bootstrap5Logo from '/images/stack-icons/bootstrap.svg';
import GitLogo from '/images/stack-icons/git.png';
import GitHubLogo from '/images/stack-icons/github.png';
import NodeJSLogo from '/images/stack-icons/nodejs.png';
import ExpressJSLogo from "/images/stack-icons/expressjs.png";
import MongoDBLogo from '/images/stack-icons/mongodb.png';
import SQLLogo from '/images/stack-icons/mysql.png';
import JavaLogo from '/images/stack-icons/java.png';
import PythonLogo from '/images/stack-icons/python.png';
import VueJSLogo from '/images/stack-icons/vue.png';
import TypeScriptLogo from '/images/stack-icons/Typescript.svg';

import './Stack.css';

export default function Stack() {
  const frontendStack = [
    { name: 'HTML/CSS', image: HTMLCSSLogo },
    { name: 'Tailwind CSS', image: TailwindCSSLogo },
    { name: 'ReactJS', image: ReactJSLogo },
    { name: 'Bootstrap 5', image: Bootstrap5Logo },
    { name: 'VueJS', image: VueJSLogo }
  ];

  const backendStack = [
    { name: 'JavaScript', image: JavaScriptLogo },
    { name: 'Typescript', image: TypeScriptLogo },
    { name: 'Node.js', image: NodeJSLogo },
    { name: 'Express.js', image: ExpressJSLogo },
  ];

  const databaseStack = [
    { name: 'MongoDB', image: MongoDBLogo },
    { name: 'MySQL', image: SQLLogo },
  ];

  const programmingLangStack = [
    { name: 'Java', image: JavaLogo },
    { name: 'Python', image: PythonLogo },
  ];

  const toolStack = [
    { name: 'Git', image: GitLogo },
    { name: 'GitHub', image: GitHubLogo },
  ];

  const allTechnologies = [
    ...frontendStack,
    ...backendStack,
    ...databaseStack,
    ...programmingLangStack,
    ...toolStack
  ];

  return (
    <div className='bg-blue-950 text-white py-[20px] md:py-[35px]' id="stack">
      <div className='container mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-green-300 mb-8 relative cursor-default select-none'>
          Stack
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-3 stack-container'>
          {allTechnologies.map((tech, index) => (
            <div
              key={index}
              className='tech-stack-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center text-black cursor-default'
            >
              <img
                src={tech.image}
                alt={tech.name}
                className='mx-auto h-16 mb-2 fade-in'
              />
              <p className='text-lg font-semibold'>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
