import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-dark spacer-one-top-md spacer-one-bottom-xs">
                <div className="container space-top-2 space-bottom-1">

                    <div className="row justify-content-lg-start mb-5">
                        <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <a className="d-inline-block mb-3 footer-logo" href="index.html">
                                <img src="assets/svg/logo-light.svg" alt=""/>
                            </a>
                            <p className="font-size-14 ">Dear guests, you are welcomed to dine with us at Foxe
                                restaurant. Have a pleasant dining experience.</p>
                            <img src="assets/img/signature.png" className="max-width-xlg" alt=""/>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <h3 className="h6 text-white mb-3  font-size-15">Address</h3>
                            <address>
                                <ul className="list-group list-group-flush list-group-borderless mb-0">
                                    <li className="list-group-item">+1 (613) 287-1111</li>
                                    <li className="list-group-item">2160 Montreal Road #4, Gloucester, Ontario, Canada</li>
                                </ul>
                            </address>
                        </div>
                        <div className=" col-lg-3 col-sm-6 mb-4">
                            <h3 className="h6 text-white mb-3  font-size-15">Hours of opening</h3>
                            <div className="opening-hours-container font-size-14 ">
                        <span className="opening-hours-holder-inner">
                        <span className="opening-hours-day-holder">
                        <span className="opening-hours-day">Monday</span>
                        </span>
                        <span className="opening-hours-line"></span>
                        <span className="opening-hours-time">11:00 - 21:00</span>
                        </span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
                        <span className="opening-hours-holder-inner">
                        <span className="opening-hours-day-holder">
                        <span className="opening-hours-day">Tuesday</span>
                        </span>
                        <span className="opening-hours-line"></span>
                        <span className="opening-hours-time">11:00 - 21:00</span>
                        </span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
                        <span className="opening-hours-holder-inner">
                        <span className="opening-hours-day-holder">
                        <span className="opening-hours-day">Wednesday</span>
                        </span>
                        <span className="opening-hours-line"></span>
                        <span className="opening-hours-time">11:00 - 21:00</span>
                        </span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
                        <span className="opening-hours-holder-inner">
                        <span className="opening-hours-day-holder">
                        <span className="opening-hours-day">Thursday</span>
                        </span>
                        <span className="opening-hours-line"></span>
                        <span className="opening-hours-time">11:00 - 21:00</span>
                        </span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
                        <span className="opening-hours-holder-inner">
                        <span className="opening-hours-day-holder">
                        <span className="opening-hours-day">Friday</span>
                        </span>
                        <span className="opening-hours-line"></span>
                        <span className="opening-hours-time">11:00 - 21:00</span>
                        </span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
                        <span className="opening-hours-holder-inner">
                        <span className="opening-hours-day-holder">
                        <span className="opening-hours-day">Saturday</span>
                        </span>
                        <span className="opening-hours-line"></span>
                        <span className="opening-hours-time">11:00 - 21:00</span>
                        </span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
                        <span className="opening-hours-holder-inner">
                        <span className="opening-hours-day-holder">
                        <span className="opening-hours-day">Sunday</span>
                        </span>
                        <span className="opening-hours-line"></span>
                        <span className="opening-hours-time">Closed</span>
                        </span>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-4 mb-3 mb-sm-0 text-sm-center"><p
                            className="small mb-0  font-size-12">Font by <a className=""
                                                                            href="https://www.flaticon.com">flaticon.com</a>
                            Under <a className="" href="http://creativecommons.org/licenses/by/3.0/">CC: </a><a
                                className="" data-file="001-toast"
                                href="https://www.flaticon.com/authors/smashicons ">smashicons</a>
                        </p>
                        </div>
                        <div className="col-sm-4 text-sm-right">
                            <p className="small  text-secondary  mb-0">© 2020 AlexZhao. All rights reserved.</p>

                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;