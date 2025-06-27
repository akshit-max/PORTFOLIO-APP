import React from 'react'
import './Head.css'
import Resume from "../../assets/Resume.pdf"
import { Typewriter } from 'react-simple-typewriter';
import { Fade, Zoom, Slide, Bounce, Rotate, LightSpeed,} from "react-awesome-reveal";
const Head = () => {
  return (
    <>
      <Bounce>
    {/* <div className="container-fluid head about-boxi d-flex align-items-center justify-content-center"> */}
      <div id="home" className="container head text-center about-boxi ">
      
      
        <h2 className="display-4  mb-3 bhello">Hi,👋 I'm a</h2>
        <h1 className=" mb-5 display-4  hello  mt-3 ">
          <Typewriter
            words={[
              'FullStack Developer',
              'MernStack Developer',
              'React-Native Developer',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        {/* Buttons Section */}
        <div className="d-flex justify-content-center gap-3 ">
          <a href={Resume} download="your_name.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline-light">Download Resume</button>

          </a>
          <a href="#Contact"  >
            <button className="btn btn-primary">Hire Me</button>
          </a>
        </div>
      {/* </div> */}
    </div>
      
    </Bounce>
    </>
  )
}

export default Head
