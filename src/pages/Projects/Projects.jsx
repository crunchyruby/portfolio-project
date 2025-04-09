import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      url: 'https://github.com/username/ecommerce-project'
    },
    {
      title: 'Task Management App',
      description: 'A productivity app for managing tasks, projects, and deadlines with team collaboration features.',
      image: '/images/projects/taskmanager.jpg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      url: 'https://github.com/username/task-manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts for locations worldwide.',
      image: '/images/projects/weather.jpg',
      technologies: ['JavaScript', 'OpenWeather API', 'CSS Grid'],
      url: 'https://github.com/username/weather-dashboard'
    }
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;