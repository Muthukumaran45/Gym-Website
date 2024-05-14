import Pricing from "./pricing";
import { Link } from "react-router-dom";

// icons
import { FaHandBackFist, FaPersonWalking, FaHeartPulse, FaArrowRight  } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function Plan() {
  return (
    <>
      <div className="container explore_program bg-light px-5 mb-5">
        <p className="h2 my-4 pt-5 heading mb-5" data-aos="fade-up" data-aos-duration="1000"> EXPLORE OUR PROGRAM </p>

        <div className="row pb-5">

          <div className="col-lg-3 mb-5">
            <div className="card program_card"  data-aos="zoom-in" data-aos-duration="1000">
              <div className="card-body">
                <p>
                  <FaHandBackFist size={"2rem"} color="orange" />
                </p>
                <h5 className="card-title">Strength</h5>

                <p className="card-text text-secondary">
                  Embrace the essence of strength various
                  dimensions physical, mental, and emotional.
                </p>
                <Link to="/contact" className="program_btn">
                  Join now <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mb-5">
            <div className="card program_card"  data-aos="zoom-in" data-aos-duration="1000">
              <div className="card-body">
                <p>
                  <FaHeartPulse size={"2rem"} color="orange" />
                </p>
                <h5 className="card-title">Physical Fitness</h5>

                <p className="card-text  text-secondary">
                  It encompasses a range of activities that improve health,
                  strength, flexibility, and overall well-being.
                </p>
                <Link to="/contact" className="program_btn">
                  Join now <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mb-5">
            <div className="card program_card"  data-aos="zoom-in" data-aos-duration="1000">
              <div className="card-body">
                <p>
                  {" "}
                  <FaPersonWalking size={"2rem"} color="orange" />
                </p>
                <h5 className="card-title">Fat Lose</h5>

                <p className="card-text  text-secondary">
                  Through a combination of workout routines and expert guidance,
                  we'll empower you to reach your goals.
                </p>
                <Link to="/contact" className="program_btn">
                  Join now <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mb-5">
            <div className="card program_card"  data-aos="zoom-in" data-aos-duration="1000">
              <div className="card-body">
                <p>
                  <GiWeightLiftingUp size={"2rem"} color="orange" />
                </p>
                <h5 className="card-title">Weight Gain</h5>

                <p className="card-text  text-secondary">
                  Designed for individuals, our program offers an effective
                  approach to gaining weight.
                </p>
                <Link to="/contact" className="program_btn">
                  Join now <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
