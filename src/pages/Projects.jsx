import React from "react";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
const Projects = () => {
    return (
        <section className='max-container'>
        <h1 className='head-text'>
          My{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Projects
          </span>
        </h1>
  
        <p className='text-slate-500 mt-2 leading-relaxed'>
        Over the years, I've undertaken various projects, but the ones I cherish the most are these. Several of them are open-source, so if you encounter something that captures your interest, please delve into the codebase and share your ideas for potential improvements. Your collaboration is greatly appreciated!
        </p>
  
        <div className='flex flex-wrap my-20 gap-16'>
          {projects.map((projects) => (
            <div className='lg:w-[400px] w-full' key={projects.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${projects.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={projects.iconUrl}
                    alt='threads'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
  
              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {projects.name}
                </h4>
                <p className='mt-2 text-slate-500'>{projects.description}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={projects.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <hr className='border-slate-200' />
  
        <CTA />
      </section>
    )
}

export default Projects