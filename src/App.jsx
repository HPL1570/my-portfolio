import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import SkillCard from './components/SkillCard';
import dp from '../public/dp1.png'

function App() {
  const titleWords = {
    greeting: "Hi, I'm",
    name: "Patcha Hemanth Lakshman",
    role: "Software Developer"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    'Java', 'Python', 'C++', 'Django', 'React', 'JavaScript',
    'MongoDB', 'MySQL', 'Machine Learning'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative gradient-bg text-white section-padding min-h-screen flex items-center"
      >
        <ParticleBackground />
        <div className="max-w-6xl mx-auto relative z-10 flex items-center justify-between">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.h2 variants={wordVariants} className="text-2xl md:text-3xl font-light">
              {titleWords.greeting}
            </motion.h2>
            <motion.h1 variants={wordVariants} className="text-4xl md:text-6xl font-bold">
              {titleWords.name}
            </motion.h1>
            <motion.h2 variants={wordVariants} className="text-2xl md:text-3xl text-blue-400">
              {titleWords.role}
            </motion.h2>
            
            <div className="flex gap-4 mb-8 mt-8">
              <a href="https://github.com/HPL1570" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/hemanth-patcha" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-gray-300" />
              </a>
              <a href="mailto:hemanthpatcha55555@gmail.com">
                <FaEnvelope className="text-2xl hover:text-gray-300" />
              </a>
              <a href="tel:+918008255584">
                <FaPhone className="text-2xl hover:text-gray-300" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={dp}
              alt="Profile"
              className="profile-image"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            Experience
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <h3 className="text-xl font-semibold">Associate Product Engineer Intern</h3>
              <p className="text-gray-600">Orion Governance</p>
              <p className="text-sm text-gray-500">03/02/2025-PRESENT</p>
              <p className="mt-4">Gained hands-on experience with PySpark and Databricks, developed a deep understanding of the company's product ecosystem.</p>
            </motion.div>

            <motion.div 
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <h3 className="text-xl font-semibold">Gen AI Intern</h3>
              <h3 className="text-gray-600">4SightAI</h3>
              <p className="text-sm text-gray-500">01/06/2024-01/02/2025</p>
              <ul className="mt-4 list-disc list-inside">
                <li>Utilizing various LLMs Local, General Purpose Multimodal, Transformers, Azure AI</li>
                <li>Building complex prompts for optimal LLM performance</li>
                <li>Building APIs and integrating them in React Screen</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-100 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
              <p className="text-gray-600">Sri Vasavi Engineering college</p>
              <p className="text-gray-500">Computer Science and Engineering</p>
              <p className="text-sm">2021 - 2025</p>
              <p className="mt-2 font-semibold">GPA: 8.75/10.0</p>
            </motion.div>

            <motion.div 
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <h3 className="text-xl font-semibold">Intermediate</h3>
              <p className="text-gray-600">Aditya Junior College</p>
              <p className="text-sm">2019 - 2021</p>
              <p className="mt-2 font-semibold">Marks: 931/1000</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <h3 className="text-xl font-semibold">Automatic Exam Seating Arrangement</h3>
              <p className="text-gray-600 mt-2">Python, Django, MySQL, HTML, CSS, JavaScript</p>
              <ul className="mt-4 list-disc list-inside text-gray-700">
                <li>Engineered a Python Django tool for optimizing exam seating</li>
                <li>Reduced processing time by over 70%</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <h3 className="text-xl font-semibold">Digital Notice Board System</h3>
              <p className="text-gray-600 mt-2">Python, Django, HTML, CSS, JavaScript, SQLite</p>
              <ul className="mt-4 list-disc list-inside text-gray-700">
                <li>Developed software for digital notice boards</li>
                <li>Integrated Time-Table API for 900+ students</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            Certifications
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Microsoft Azure Fundamentals exam AZ900",
              "NPTEL certificate on Introduction to Information Technology",
              "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
              "Oracle Machine Learning using Autonomous Database Certified Associate"
            ].map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                className="bg-white p-4 rounded-lg shadow-md card-hover"
              >
                <p className="text-gray-800">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Contact Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-blue-400" />
                <a href="tel:+918008255584" className="hover:text-blue-400">+91 80082-55584</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-blue-400" />
                <a href="mailto:hemanthpatcha55555@gmail.com" className="hover:text-blue-400">hemanthpatcha55555@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-2xl text-blue-400" />
                <a href="https://www.linkedin.com/in/hemanth-patcha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn Profile</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaGithub className="text-2xl text-blue-400" />
                <a href="https://github.com/HPL1570" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub Profile</a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <p className="text-lg mb-4">Feel free to reach out to me for any opportunities or collaborations!</p>
              <p className="text-gray-400">I'm currently based in:</p>
              <p className="text-blue-400">Chennai</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;