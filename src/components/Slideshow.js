import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../services/body_enhancement.jpg';
import image2 from '../services/chroma.jpg';
import image3 from '../services/crowd_multiplication.jpg';
import image4 from '../services/infilm_branding.jpg';
import image5 from '../services/rotoscoping.jpg';

const slideImages = [
    'src/services/body_enhancement.jpg',
    'src/services/body_enhancement.jpg',
    'src/services/body_enhancement.jpg'
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                <div className="each-slide" style={{ backgroundSize: "100% 100vh", height: "100vh" }} >
                    <div style={{
                        'backgroundImage': `url(${image1})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${image2})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${image3})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${image4})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${image5})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow

// import React from "react";
// import image1 from './services/body_enhancement.jpg';

// const Slideshow = () => {
// return (
// 	<div style={{
//         marginTop: 0,
// 	backgroundImage: `url(${image1})`,
//     backgroundSize: "100% 100vh",
// 	backgroundRepeat: "no-repeat",
//     height: "100vh"
// 	}}>
// 	<h1> HELLO </h1>
//     {/* <img src={image1} /> */}
// 	</div>
// );
// };

// export default Slideshow;
