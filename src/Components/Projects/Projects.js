import React from "react";
import './Projects.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

//vulunteer network
import vln from '../../images/volunteer/vn.png'
import vln1 from '../../images/volunteer/vn1.png'
import vln2 from '../../images/volunteer/vn2.png'
import vln3 from '../../images/volunteer/vn3.png'
import vln4 from '../../images/volunteer/vn4.png'
import vln5 from '../../images/volunteer/vn5.png'
//emajohn
import emj from '../../images/emajohn/em.png'
import emj1 from '../../images/emajohn/em1.png'
import emj2 from '../../images/emajohn/em2.png'
// red onion
import red from '../../images/oni.png'
import red1 from '../../images/oni1.png'
import red2 from '../../images/oni2.png'
import red3 from '../../images/oni3.png'
import red4 from '../../images/oni4.png'
//web portfolio
import wp from '../../images/wp.png'
import wp1 from '../../images/wp1.png'
import wp2 from '../../images/wp2.png'
//personal web
import per from '../../images/per.png'
import per1 from '../../images/per1.png'
import per2 from '../../images/per2.png'
import per3 from '../../images/per3.png'
//panda commerce
import pc from '../../images/pc.png'
import pc1 from '../../images/pc1.png'
import pc2 from '../../images/pc2.png'
import pc3 from '../../images/pc3.png'
//hot gadgets
import hot from '../../images/hot.png'
import hot1 from '../../images/hot1.png'
import hot2 from '../../images/hot2.png'
// e school
import scl from '../../images/scl.png'
import scl1 from '../../images/scl1.png'
import scl2 from '../../images/scl2.png'

const Projects = () => {

    return (
        <div className="Projects text-white">
            <h1 className="text-center mt-3" >PROJECTS</h1>
            <div className="mt-5 ml-5">
                <h3>Volunteer Network </h3>
                <a className="text-white btn btn-primary" href="https://volunteer-network-c6a30.web.app/" target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={6}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={vln} alt="" /></Slide>
                            <Slide index={1}><img src={vln1} alt="" /></Slide>
                            <Slide index={2}><img src={vln2} alt="" /></Slide>
                            <Slide index={3}><img src={vln3} alt="" /></Slide>
                            <Slide index={4}><img src={vln4} alt="" /></Slide>
                            <Slide index={5}><img src={vln5} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5 mb-5 pb-5">
                <li className=" documnet">A complete responsive website with dashboard where a user can place an order by logging in with a Gmail account and fill up the order form. Admins can add new services and give access as an admin to anyone.</li>
                <h3 className="mt-3">
                    Technology used : React.js, Node.js, Express.js, Firebase, MongoDB, Bootstrap4, CSS, HTML5
                </h3>
            </div>

            <div className="mt-5 ml-5">
                <h3>Emajohn Simple </h3>
                <a className="text-white btn btn-primary" href="https://ema-jhon-simple-app.web.app/ " target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={emj} alt="" /></Slide>
                            <Slide index={1}><img src={emj1} alt="" /></Slide>
                            <Slide index={2}><img src={emj2} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5 pb-5">
                <li className=" documnet"> A single-page web app with a dashboard where people can buy their needed products.
      There is a login option for payment methods.
      After filling a required form users are redirected to the billing page. 
</li>

                <h3 className="mt-3">Technology used ​: React.js, Node.js, Express.js, Firebase , MongoDB, Bootstrap4, CSS , HTML5 </h3>
            </div>


            <div className="mt-5 ml-5">
                <h3>Red Onion Restaurant</h3>
                <a className="text-white btn btn-primary" href="https://hot-onion-restaurant-1.web.app/ " target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={5}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={red} alt="" /></Slide>
                            <Slide index={1}><img src={red1} alt="" /></Slide>
                            <Slide index={2}><img src={red2} alt="" /></Slide>
                            <Slide index={3}><img src={red3} alt="" /></Slide>
                            <Slide index={4}><img src={red4} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet"> It’s a restaurant site where you can choose your favorite food you like.
      There is a login option for payment methods.
      After filling a required form users are redirected to the billing page.
 </li>
                <h3 className="mt-3">Technology used : React.js, Firebase, MongoDB, Bootstrap4, CSS, HTML5</h3>
            </div>


            <div className="mt-5 ml-5">
                <h3>Web protfolio​</h3>
                <a className="text-white btn btn-primary" href="https://alamgirhossann.github.io/web-portfolio/" target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={wp} alt="" /></Slide>
                            <Slide index={1}><img src={wp1} alt="" /></Slide>
                            <Slide index={2}><img src={wp2} alt="" /></Slide>

                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a web page </li>
                <h3 className="mt-3">Technology used : HTML5 & CSS</h3>
            </div>



            <div className="mt-5 ml-5">
                <h3>Personal blog</h3>
                <a className="text-white btn btn-primary" href="https://alamgirhossann.github.io/personal-website/ " target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={4}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={per} alt="" /></Slide>
                            <Slide index={1}><img src={per1} alt="" /></Slide>
                            <Slide index={2}><img src={per2} alt="" /></Slide>
                            <Slide index={3}><img src={per3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a web page </li>
                <h3 className="mt-3">Technology used : HTML5 & CSS</h3>
            </div>


            <div className="mt-5 ml-5">
                <h3>Panda-commarce</h3>
                <a className="text-white btn btn-primary" href="https://alamgirhossann.github.io/panda-commerce/ " target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={4}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={pc} alt="" /></Slide>
                            <Slide index={1}><img src={pc1} alt="" /></Slide>
                            <Slide index={2}><img src={pc2} alt="" /></Slide>
                            <Slide index={3}><img src={pc3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a E-commarce web page </li>
                <h3 className="mt-3">Technology used : Bootstrap4 & HTML5, CSS</h3>
            </div>


            <div className="mt-5 ml-5">
                <h3>Hot-gadgets</h3>
                <a className="text-white btn btn-primary" href="https://alamgirhossann.github.io/hot-gadgets" target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={hot} alt="" /></Slide>
                            <Slide index={1}><img src={hot1} alt="" /></Slide>
                            <Slide index={2}><img src={hot2} alt="" /></Slide>

                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a E-commarce web page </li>
                <h3 className="mt-3">Technology used : Bootstrap4 & HTML5, CSS</h3>
            </div>


            <div className="mt-5 ml-5">
                <h3>E-school</h3>
                <a className="text-white btn btn-primary" href="https://alamgirhossann.github.io/e-school/" target="_blank">🔗Open project</a>
            </div>

            <div id="work" className="carousel_parent">
                <div className="container">

                    <div>
                        <h3 className="text-center py-5">Project <span style={{ color: '#7AB259' }}>overview</span></h3>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={scl} alt="" /></Slide>
                            <Slide index={1}><img src={scl1} alt="" /></Slide>
                            <Slide index={2}><img src={scl2} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn">
                                <ButtonBack>Back</ButtonBack>
                                <ButtonNext>Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Documentation</h2>
            <div className="ml-5">
                <li className=" documnet">This is a online education web page </li>
                <h3 className="mt-3">Technology used : Bootstrap4 & HTML5, CSS</h3>
            </div>
        </div>

    );
};
export default Projects;