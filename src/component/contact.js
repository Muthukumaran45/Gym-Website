import Footer from './footer';

 

export default function Contact() {
    

    return (
        <>
            <div className="container my-5" id="contact_container" data-aos="zoom-in" data-aos-duration="1000">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="contact-form">
                            <h2 className="mb-3 text-center">GET IN TOUCH</h2>
                            <form action="mailto:musclebeast.gym@gmail.com" method="post" enctype="text/plain">
                                <div className="form-group mb-3">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control contact_input1" id="name" name="Name "
                                        placeholder="Enter your full Name" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label for="number">Phone Number</label>
                                    <input type="number" className="form-control" id="number" name="Number "
                                        placeholder="Enter your Phone Number" required />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" id="message" name="Message " rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark contact_btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
            </>
    );
}