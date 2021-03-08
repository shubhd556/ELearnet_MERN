import React from 'react'
import Lottie from 'react-lottie'
import './homepage.css';
import animationData from './44387-man-working-on-computer.json'
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
function HomePage() {
    return (
        <div className="container2">
           <div className="row23">
               <div className="col-45">
               <h2>Learn with<br/>E-Learnet</h2>
                <h3>Build skills with courses, certificates, and degrees online from world-class universities and companies.</h3>
                {/* <p>(Comptible/Generic)</p> */}
                <button type="button">Explore </button>
               </div>
                <div className="col-46">
                <Lottie className="control" options={defaultOptions}
                    height={400}
                    width={400}
                    />
                {/* <div className="color-box"></div> */}
                </div>


           </div>




            <div>
        
      </div>
        </div>
    )
}

export default HomePage
