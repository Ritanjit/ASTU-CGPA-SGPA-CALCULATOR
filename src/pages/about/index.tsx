import React from "react";
import { Github, Linkedin } from "lucide-react";
import profile from "../../assets/DFAS.png";

const AboutMe: React.FC = () => {
  return (
    <section className="w-full min-h-screen py-32 px-4 sm:px-6 lg:px-12 bg-stone-100 dark:bg-zinc-900 transition-all">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-800 rounded-3xl shadow-xl p-10 space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-900 dark:text-white">Hi Guys :)</h1><br />
          <p className="text-gray-600 dark:text-gray-300 text-md max-w-xl mx-auto">
            I'm <span className="font-semibold text-red-800 dark:text-amber-400">Ritanjit</span>, a CS student from GIMT.
            <br /><br />I build this page as a personal project to help me keep track of my grades but seeing that everyone strugles to do the same, I decided to host it for all. Hope you guys like it. Peace Out 🤘
          </p>
        </div>

        {/* Profile Image & Details */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={profile} // Replace with your profile image or leave as GitHub default
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-red-900 dark:border-amber-400 
            hover:scale-110 object-cover shadow-md transition-all hover:cursor-pointer"
          />
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-md">
            I enjoy building web applications, experimenting with UI/UX, and learning about AI.
          </p>
        </div>

        {/* Things I Like */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-zinc-700 dark:text-white mb-2">Things I Like 💪</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded-full hover:scale-105 hover:cursor-pointer">
              Data Science
            </span>
            <span className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded-full hover:scale-105 hover:cursor-pointer">
              
            </span>
            <span className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded-full hover:scale-105 hover:cursor-pointer">
              AI Research
            </span>
            <span className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded-full hover:scale-105 hover:cursor-pointer">
              
            </span>
            <span className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded-full hover:scale-105 hover:cursor-pointer">
              HCI
            </span>
            <span className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded-full hover:scale-105 hover:cursor-pointer">
              
            </span>
            <span className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded-full hover:scale-105 hover:cursor-pointer">
              Open Source
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-6 pt-4">
          <a
            href="https://github.com/Ritanjit" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-red-800 dark:hover:text-amber-400 
            hover:scale-105 transition-all"
          >
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ritanjit-das-530b7b216" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-red-800 dark:hover:text-amber-400 
            hover:scale-105 transition-all"
          >
            <Linkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
