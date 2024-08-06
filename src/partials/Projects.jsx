import React from 'react';

function Projects() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
      <div className="absolute inset-0 top-1/6 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Title */}
          <div className="flex justify-center">
            <h3 className="text-4xl font-bold text-center mb-6 relative" style={{ color: 'white' }}>
              Coursework
              <span style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: -2,
                width: '100%',
                height: '2px',
                backgroundColor: '#0170F5'
              }}></span>
            </h3>
          </div>


          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" style={{ height: '250px', }}>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">ygfiugfugf</h4>
              <p className="text-gray-600 text-center" style={{ fontSize: '17px' }}>
                <ul>
                  <li> - Advanced my <span style={{ color: '#0170F5', fontWeight: 'bold' }}>Java programming</span> expertise. </li>
                  <li> - Mastered graph algorithms, sorting, and pattern matching algorithms, memoization, dynamic programming, and Big-O notation. </li>
                </ul>
              </p>
            </div>


            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" style={{ height: '250px' }}>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Object Oriented Programming</h4>
              <p className="text-gray-600 text-center" style={{ fontSize: '15.5px' }}>
                <ul> 
                    <li> - Mastered object-oriented programming principles in <span style={{ color: '#0170F5', fontWeight: 'bold' }}>Java</span>. </li>
                    <li> - Explored and applied concepts of <span style={{ color: '#0170F5', fontWeight: 'bold' }}>encapsulation, inheritance, and polymorphism</span>. </li>
                    <li> - Handled exception management and developed graphical user interfaces (GUIs). </li>
                </ul>
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" style={{ height: '250px' }}> 
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1"> Objects and Design</h4>
              <p className="text-gray-600 text-center"style={{ fontSize: '15px' }}>
                <ul> 
                    <li> - Developed expertise in version control using <span style={{ color: '#0170F5', fontWeight: 'bold' }}>Git</span>.</li>
                    <li> - Gained experience in analyzing requirements, designing solutions with <span style={{ color: '#0170F5', fontWeight: 'bold' }}>UML</span>, and effectively applying design principles. </li>
                    <li> - Utilized tools such as <span style={{ color: '#0170F5', fontWeight: 'bold' }}>JUnit</span> for application testing. </li>
                </ul>
                
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" style={{height:'270px'}}>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Introduction to Computing</h4>
              <p className="text-gray-600 text-center">
                  <ul>
                      <li> Enhanced proficiency in <span style={{ color: '#0170F5', fontWeight: 'bold' }}>C++ programming</span>. </li>
                      <li> Developed expertise in object-oriented programming using <span style={{ color: '#0170F5', fontWeight: 'bold' }}>C++</span>. </li>
                      <li> Created programs involving <span style={{ color: '#0170F5', fontWeight: 'bold' }}>function implementation, data structure usage,</span> recursion, user interaction, and input validation. </li>
                </ul>
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" style={{height:'270px'}}>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Computer Organization and Programming</h4>
              <p className="text-gray-600 text-center">
                <ul>
                  <li> - Analyzed digital logic structures, the Von Neumann architecture, and  <span style={{ color: '#0170F5', fontWeight: 'bold' }}>assembly language programming</span>. </li>
                  <li> - Achieved proficiency in <span style={{ color: '#0170F5', fontWeight: 'bold' }}>C programming</span>. </li>
                </ul>
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" strokeLinecap="square">
                    <path className="stroke-current text-white" d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775" />
                    <path className="stroke-current text-blue-300" d="M44.571 43.429H34.286M44.571 37.714H34.286" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
