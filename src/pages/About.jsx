import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { experiences, skills } from "../constants";
import CTA from "../components/CTA";
const About = () => {
    return (
        <section className='max-container'>
<h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Srikanth
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I am Srikanth Collaty, I have recently graduated, I am a Tech enthusiast.

I am always open to collaborating on projects and innovative/disruptive ideas.

When I am not coding, you will find me lifting weights in the gym or at my desk sketching stuff.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

<div className="py-16">
  <h3 className="subhead-text">
    Work Experiences
  </h3>
  <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:
        </p>
      </div>
      <div className="mt-12 flex">
<VerticalTimeline>
  {experiences.map((experiences) =>(
    <VerticalTimelineElement key={experiences.company_name}
    date={experiences.date}
    icon={<div className="flex justify-center items-center w-full h-full">
      <img
      src={experiences.icon}
      alt={experiences.company_name}
      className="w-[60%] h-[60%] object-contain"/>
     
    </div>}
    iconStyle={{background: experiences.iconBg}}
  contentStyle={{
      borderBottom:'8px',
      borderStyle: 'solid',
      borderBlockColor: experiences.iconBg,
      boxShadow:'none',
    }}>
      <div>
        <h3 className="text-black text-xl font-poppins font-semibold">
{experiences.title}
        </h3>
        <p className="text-black-500 font-medium font-base" style={{margin:0}}>
          {experiences.company_name}
        </p>
      </div>

      <ul className="my-5 list-disc ml-5 space-y-2">
{experiences.points.map((points,index) => (
<li key={`experiences-points-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
  {points}
</li>
))}
      </ul>
    </VerticalTimelineElement>
  ))}
</VerticalTimeline>
      </div>

</div>

<hr className="border-slate-200"/>
<CTA/>
        </section>
    )
}

export default About