import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// full stack
import img1 from '../../images/volunteer/vn.png';
import img2 from '../../images/emajohn/em.png';
import img3 from '../../images/oni.png';
// html and css
import h1 from "../../images/wp.png";
import h2 from "../../images/per.png";
// bootstrap
import b1 from '../../images/pc.png';
import b2 from '../../images/scl.png';
import b3 from '../../images/hot.png';
// pure javascript
import ps1 from '../../images/pin.png';
import ps2 from '../../images/sop.png';
import ps3 from '../../images/bnk.png';
// rest api 
import rp1 from '../../images/rok.png';
import rp2 from '../../images/tem.png';
import rp3 from '../../images/post.png'
//react final
import rf1 from '../../images/trg.png';
import rf2 from '../../images/on.png';

import { Link } from 'react-router-dom';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
    return (
        <div className="container">
            <h1 className="text-center text-white " > MY PROJECTS</h1>
            <h5 className="text-white mt-5 pt-5 pb-5">Full Stack Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Volunteer Network</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://volunteer-network-c6a30.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={img2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Ema John Simple</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://ema-jhon-simple-app.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={img3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Hot Onion Restaurant</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://hot-onion-restaurant-1.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
            </div>





            <h5 className="text-white mt-5 pt-5 pb-5">Html & CSS Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={h1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">web-protfolio</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/web-portfolio/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={h2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">personal-blog</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/personal-website/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={h1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">protfolio</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/web-portfolio/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
            </div>




            <h5 className="text-white mt-5 pt-5 pb-5">Bootstrap Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={b1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Panda-commarce</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/panda-commerce/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={b2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">E-school</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/e-school/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={b3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Hot-gadgest</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/hot-gadgets/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
            </div>




            <h5 className="text-white mt-5 pt-5 pb-5">Pure js Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={ps1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Pin-matcher</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/pin-match-master/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={ps2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Shopping-cart</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/shopping-cart/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={ps3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Bank-system</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/Madina-Bank/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
            </div>



            <h5 className="text-white mt-5 pt-5 pb-5">REST API js Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={rp1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Rock-song-lyrice</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/hard-rock-master/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={rp2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Tempareture-find</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://alamgirhossann.github.io/temperature-hot/index" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={rp3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Timeline Post</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://quirky-borg-f4962b.netlify.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
            </div>



            <h5 className="text-white mt-5 pt-5 pb-5">React Final Project</h5>
            <div class="card-deck pb-5">
                <div class="card img-hover-zoom">
                    <img src={rf1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Travel Ticket Booking</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://travel-guru-799d3.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>

                <div class="card img-hover-zoom">
                    <img src={rf2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Online Courses</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://priceless-ptolemy-1f6f19.netlify.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
                <div class="card img-hover-zoom">
                    <img src={rf2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Online Courses</h5>
                        <Link to="/project"><button class="card-text btn btn-primary">see more</button></Link>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <small class="text-muted">Last updated 2 minutes ago</small>
                        <small className="text-danger"><a href="https://priceless-ptolemy-1f6f19.netlify.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />live</a></small>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Work;