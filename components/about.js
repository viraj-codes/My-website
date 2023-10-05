import React from 'react';
const About = () => {
  return (
    <div className='aboutSec'>
      <p>
        I'm a MERN stack developer with a passion for building web applications. I have experience in
        developing scalable and responsive web solutions using MongoDB, Express.js, React, and Node.js.
      </p>
      <p>
        My skills include front-end development using React, Redux, and CSS frameworks like Bootstrap.
        On the back end, I'm proficient in Node.js and Express.js, and I've worked with databases
        such as MongoDB. I also have experience with RESTful API development and authentication.
      </p>
      <p>
        I'm always eager to learn and stay up-to-date with the latest web development technologies.
        When I'm not coding, I enjoy problem-solving, learning new things, and contributing to open-source projects.
      </p>
      <p>
        If you have a project or opportunity you'd like to discuss, feel free to <a href="#Contact">contact me</a>.
        I'd love to hear from you!
      </p>
      <style jsx>{`
        .aboutSec{text-align:justify;padding:20px}
      `}</style>
    </div>
  );
};
export default About;