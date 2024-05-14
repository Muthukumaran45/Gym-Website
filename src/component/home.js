import Carousel from "./carousel";
import Footer from "./footer";
import Plan from "./plan";

export default function Home() {
  return (
    <>
      <Carousel />
      <div
        className="container my-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row d-flex align-items-center my-5">
          <div className="col-md-6 col-xs-12 py-3 home_h1">
            <h1 className="home_h1 display-2">
              Make Your <br /> Body Shape
            </h1>
            <p>
              It's time to be healthy and in Great shape, BE YOUR BEST, Always
              be ready to make your life better
            </p>
          </div>

          <div className="col-md-6 col-sm-12 ">
            <img
              src="./images/home_img.jpg"
              width="500px"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>

      <section>
        <div className="container"></div>
      </section>

      <Plan />
      <Footer />
    </>
  );
}
