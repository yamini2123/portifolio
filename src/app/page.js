"use client";
import { FaPython, FaHtml5, FaCss3Alt, FaJava, FaGithub } from "react-icons/fa";
import { SiMysql, SiPowerbi, SiPandas, SiNumpy, SiMicrosoftexcel, SiVscode } from "react-icons/si";
import { TbDatabaseSearch } from "react-icons/tb";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="min-h-screen bg-[#030712] text-white px-6 pt-20 relative overflow-hidden"
>
      {/* Blur Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

      {/* Navbar */}
    <motion.nav
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-6 md:px-12 backdrop-blur-md bg-[#030712]/60 border-b border-white/10"
>
  <h1 className="text-2xl font-bold">
    Portifolio
  </h1>

 <div className="flex gap-6 text-gray-300">

  <motion.a
    href="#home"
    whileHover={{ scale: 1.1, color: "#60a5fa" }}
    transition={{ duration: 0.2 }}
  >
    Home
  </motion.a>

  <motion.a
    href="#skills"
    whileHover={{ scale: 1.1, color: "#60a5fa" }}
    transition={{ duration: 0.2 }}
  >
    Skills
  </motion.a>

  <motion.a
    href="#projects"
    whileHover={{ scale: 1.1, color: "#60a5fa" }}
    transition={{ duration: 0.2 }}
  >
    Projects
  </motion.a>

  <motion.a
    href="#contact"
    whileHover={{ scale: 1.1, color: "#60a5fa" }}
    transition={{ duration: 0.2 }}
  >
    Contact
  </motion.a>

</div>

</motion.nav> 

    {/* Hero Section */}
<section
  id="home"
  className="flex flex-col md:flex-row items-center justify-center min-h-screen relative z-10 gap-6 md:gap-10 px-4"
>

  {/* Left Text */}
  <motion.div
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center md:text-left max-w-xl"
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Hi, I'm Yamini
    </h1>

    <p className="text-xl md:text-2xl text-blue-300 mb-4">
      Aspiring Data Analyst
    </p>

    <p className="text-gray-400 text-base md:text-lg mb-6">
      Passionate about Data Analytics, Power BI dashboards, Python projects,
      SQL analysis, and Machine Learning.
    </p>

    {/* Links BELOW text */}
    <div className="flex justify-center md:justify-start gap-4">
      <a
        href="https://www.linkedin.com/in/unnam-yamini2027/"
        target="_blank"
        className="px-5 py-2 border border-blue-400 text-blue-300 rounded-full hover:bg-blue-500/20"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com"
        target="_blank"
        className="px-5 py-2 border border-blue-400 text-blue-300 rounded-full hover:bg-blue-500/20"
      >
        GitHub
      </a>
    </div>
  </motion.div>

  {/* Right Image */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center items-center"
>

  {/* Blue Glow Background */}
<div className="absolute w-60 h-60 md:w-72 md:h-72 bg-blue-500 rounded-full blur-2xl opacity-20"></div>

{/* Image */}
<img
  src="/121.jpeg"
  alt="Profile"
  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-300"
/>
</motion.div>

</section>
      {/* About Section */}
<section className="py-1 relative z-10">

  <h2 className="text-4xl font-bold mb-10 text-center">
    About Me
  </h2>

  <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">

    <p className="text-gray-300 leading-8 text-lg">
      Motivated Data Science student passionate about
      Data Analytics, Power BI dashboards, Python,
      SQL, and Machine Learning. Skilled in developing
      data-driven solutions . Interested in
      creating dashboards, analyzing data, and building
      useful projects to improve problem-solving skills.
    </p>

  </div>

</section>
{/* Education Section */}
<section className="py-16 relative z-10">

  <h2 className="text-4xl font-bold mb-12 text-center">
    Education
  </h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

    {/* College 1 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4 text-blue-300">
        Raghu Engineering College
      </h3>

      <p className="text-gray-300 mb-2">
        B.Tech in Data Science
      </p>

      <p className="text-gray-400">
        CGPA: 9.05
      </p>

    </div>

    {/* College 2 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4 text-blue-300">
        Hindu College Of Engineering And Technology
      </h3>

      <p className="text-gray-300 mb-2">
        Diploma in Computer Engineering
      </p>

      <p className="text-gray-400">
        Percentage: 84.25%
      </p>

    </div>

  </div>

</section>

     {/* Skills Section */}
<section id="skills" className="py-16 text-center relative z-10">

  <h2 className="text-4xl font-bold mb-12">
    Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

    <div className="p-6 rounded-2xl bg-blue-500/20 border border-blue-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-blue-300">Python</h3>
    </div>

    <div className="p-6 rounded-2xl bg-green-500/20 border border-green-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-green-300">SQL</h3>
    </div>

    <div className="p-6 rounded-2xl bg-purple-500/20 border border-purple-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-purple-300">Power BI</h3>
    </div>

    <div className="p-6 rounded-2xl bg-pink-500/20 border border-pink-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-pink-300">HTML</h3>
    </div>

    <div className="p-6 rounded-2xl bg-yellow-500/20 border border-yellow-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-yellow-300">CSS</h3>
    </div>

    <div className="p-6 rounded-2xl bg-cyan-500/20 border border-cyan-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-cyan-300">Excel</h3>
    </div>

    <div className="p-6 rounded-2xl bg-orange-500/20 border border-orange-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-300">Data Cleaning</h3>
    </div>

    <div className="p-6 rounded-2xl bg-indigo-500/20 border border-indigo-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-indigo-300">Pandas</h3>
    </div>

    <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-emerald-300">NumPy</h3>
    </div>

    <div className="p-6 rounded-2xl bg-rose-500/20 border border-rose-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-rose-300">Dashboard Design</h3>
    </div>

    <div className="p-6 rounded-2xl bg-sky-500/20 border border-sky-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-sky-300">VS Code</h3>
    </div>

    <div className="p-6 rounded-2xl bg-teal-500/20 border border-teal-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-teal-300">Git & GitHub</h3>
    </div>
    <div className="p-6 rounded-2xl bg-orange-500/20 border border-orange-400 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-300">Java</h3>
    </div>


  </div>
</section>

      {/* Projects Section */}
  <section id="projects" className="scroll-mt-24 py-16 relative z-10">

  <h2 className="text-4xl font-bold text-center mb-12">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

    {/* Project 1 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold mb-4">
        Blood Bank Management System
      </h3>

      <p className="text-gray-400 mb-4">
        Full stack Django web application for managing donors, blood availability, and dashboard analytics.
      </p>

      <div className="flex gap-4 justify-center">
        <a href="https://github.com/yamini2123/blood-bank-management-system"
           target="_blank"
           className="px-5 py-2 border border-blue-400 text-blue-300 rounded-full hover:bg-blue-500/20">
          GitHub
        </a>

        <a href="https://blood-bank-management-system-cili.onrender.com"
           target="_blank"
           className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Live Demo
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold mb-4">
        FashionCart
      </h3>

      <p className="text-gray-400 mb-4">
        Responsive e-commerce frontend project with modern UI design and shopping cart features.
      </p>

      <div className="flex justify-center">
        <a href="https://github.com/yamini2123/FashionCart"
           target="_blank"
           className="px-5 py-2 border border-blue-400 text-blue-300 rounded-full hover:bg-blue-500/20">
          GitHub
        </a>
      </div>
    </div>
     {/* Project 3 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold mb-4">
        Sales & Revenue Analytics Dashboard
      </h3>

      <div className="flex gap-4 justify-center">
        <a href="https://github.com/yamini2123/PowerBi-sales-dashboard"
           target="_blank"
           className="px-5 py-2 border border-blue-400 text-blue-300 rounded-full hover:bg-blue-500/20">
          GitHub
        </a>

        <a href="https://app.powerbi.com/view?r=eyJrIjoiNTUxYTc4YjMtZTk3Zi00ZWEwLWFhMzQtNTg3ZTg4MWY1N2UzIiwidCI6ImFiMTUzYjlmLTJjNzUtNDhiZC05NWMzLTg0ZmVkY2MyYjQ5MSJ9"
           target="_blank"
           className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Live Demo
        </a>
      </div>
    </div>

    
    {/* Project 4 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold mb-4">
        Netflix Data Analysis
      </h3>

      <p className="text-gray-400 mb-4">
        Exploratory Data Analysis using Python, Pandas and Matplotlib.
      </p>

      <div className="flex gap-4 justify-center">
        <button className="px-5 py-2 bg-blue-500 text-white rounded-full">
          View Project
        </button>

        <button className="px-5 py-2 border border-blue-400 text-blue-300 rounded-full">
          GitHub
        </button>
      </div>
    </div>

  </div>

</section>
      {/* Internship Section */}
<section className="py-18 relative z-10">

  <h2 className="text-4xl font-bold mb-12 text-center">
    Internship Experience
  </h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

    {/* Internship 1 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4 text-blue-300">
        Data Analytics Intern
      </h3>

      <p className="text-gray-300 mb-4">
        Worked on dashboard creation, data visualization,
        and analytics projects using Power BI and Python.
      </p>

      <p className="text-gray-400">
        Tools: Power BI, Python, Excel
      </p>

    </div>

    {/* Internship 2 */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4 text-blue-300">
        Python Full Stack Intern
      </h3>

      <p className="text-gray-300 mb-4">
        Developed responsive web applications and worked
        on frontend and backend integration projects.
      </p>

      <p className="text-gray-400">
        Tools: Python, Django, HTML, CSS
      </p>

    </div>

  </div>

</section>
{/* Virtual Internship Section */}
<section className="py-18 relative z-10">

  <h2 className="text-4xl font-bold mb-12 text-center">
    Virtual Internships
  </h2>

  <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl mt-10 max-w-4xl mx-auto hover:scale-105 transition duration-300">

    <h3 className="text-2xl font-semibold text-blue-300 mb-4">
      Cloud Computing Internship - UpSkill Campus
    </h3>

    <p className="text-gray-300 leading-7">
      Successfully completed Summer Internship in Cloud Computing (2026)
      from UpSkill Campus and gained hands-on exposure to cloud computing
      concepts and real-world applications.
    </p>

  </div>
   <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl mt-10 max-w-4xl mx-auto hover:scale-105 transition duration-300">

    <h3 className="text-2xl font-semibold text-blue-300 mb-4">
    Python Full Stack Development - AICTE EduSkills
    </h3>

    <p className="text-gray-300 leading-7">
      Successfully completed Summer Internship in Cloud Computing (2026)
      from UpSkill Campus and gained hands-on exposure to cloud computing
      concepts and real-world applications.
    </p>

  </div>


</section>
{/* Certifications Section */}
<section className="py-16 relative z-10 text-center">

  <h2 className="text-4xl font-bold mb-12">
    Certifications
  </h2>

  <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">

    <div className="px-5 py-3 bg-blue-500/20 border border-blue-400 rounded-full">
    Data Science & Analytics Certification - HP LIFE
    </div>

    <div className="px-5 py-3 bg-blue-500/20 border border-blue-400 rounded-full">
      Create Engaging Video with Google Vids – Simplilearn (Google Cloud)
    </div>

    <div className="px-5 py-3 bg-blue-500/20 border border-blue-400 rounded-full">
      Programming in Java– NPTEL
    </div>
    <div className="px-5 py-3 bg-blue-500/20 border border-blue-400 rounded-full">
     Data Visualization – Kaggle 
    </div>


    <div className="px-5 py-3 bg-blue-500/20 border border-blue-400 rounded-full">
    Hackathon Participation Certificate - Hackverse 1.0 
    </div>

  </div>

</section>
     {/* Contact Section */}
<section id="contact" className="scroll-mt-24 py-18 text-center relative z-10">

  <h2 className="text-4xl font-bold mb-6">
    Contact Me
  </h2>

  

  {/* Contact Form */}
  <form className="max-w-2xl mx-auto flex flex-col gap-5">

    {/* Name */}
    <input
      type="text"
      placeholder="Your Name"
      className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-blue-400"
      required
    />

    {/* Email */}
    <input
      type="email"
      placeholder="Your Email"
      className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-blue-400"
      required
    />

    {/* Message */}
    <textarea
      rows="5"
      placeholder="Your Message"
      className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-blue-400"
      required
    ></textarea>

    {/* Submit Button */}
    <button
      type="submit"
      className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
    >
      Send Message
    </button>

  </form>

</section>

    </motion.main>
  );
}