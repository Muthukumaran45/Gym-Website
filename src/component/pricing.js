import { Link } from "react-router-dom";
import Footer from './footer';



export default function Pricing() {
    return (

        <>
            <div className='container mb-5 pricing_content'>
                <div className='row'>
                    <h1 className='text-center my-5 pricing_heading'>WHAT WE OFFER</h1>




                    <div className="col-lg-3 mb-5" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="card">
                            <img src="./images/pricing_img1.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">1 M/p</h5>
                                <p className="card-text text-muted">Hi there, Happy to see you here we have planned for your Workout to make your body Fit with package for one Month.</p>
                                <Link className="btn btn-primary pricing_btn1 text-dark" to='/contact'></Link>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-3 mb-5" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="card">
                            <img src="./images/pricing_img2.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">3 M/p</h5>
                                <p className="card-text text-muted pb-4">We have Another Plan for Your workout to make your body Fit with package for Three Month.</p>
                                <Link className="btn btn-primary pricing_btn2 text-dark"  to='/contact'></Link>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-3 mb-5" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="card">
                            <img src="./images/pricing_img3.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">6 M/p</h5>
                                <p className="card-text text-muted">If you are not comfortable with our previce plan we have another plan to make your body Fit with package for six Month.. </p>
                                <Link className="btn btn-primary pricing_btn3 text-dark" to='/contact'></Link>
                            </div>
                        </div>
                    </div>
 


                    <div className="col-lg-3 mb-5" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="card">
                            <img src="./images/pricing_img4.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">1 Y/p</h5>
                                <p className="card-text text-muted pb-4">We have Another Plan for Your workout to make your body Fit with package for one Year.</p>
                                <Link className="btn btn-primary pricing_btn4 text-dark" to='/contact'></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />



        </>

    );
}


