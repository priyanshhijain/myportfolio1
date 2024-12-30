import React from 'react';

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Work Experience
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Nov 2023 - Nov 2024</p>
          </div>
          <div>
            <p>
              I worked at Calibre Technologies for 1 year as a Web Developer where I contributed to various projects. My experience includes:
            </p>
            <ul className='list-disc pl-5'>
              <li>Contributed to a radio panel project with complex forms to improve user interaction.</li>
              <li>Designed React.js UIs, creating reusable and responsive components.</li>
              <li>Worked on the Navi Mumbai Project, delivering engaging interfaces using React and Tailwind CSS.</li>
              <li>Developed a CRUD backend in ASP.NET Core, creating APIs and managing databases.</li>
              <li>Built and launched an NGO website to support social initiatives using HTML and CSS.</li>
              <li>Created Figma designs, turning ideas into high-fidelity prototypes.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
