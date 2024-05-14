


export default function Carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active"  data-bs-interval="3000">
                    <img src="./images/im1.jpg" className="d-block img-fluid w-100" alt="carousel image 1" />
                </div>
                <div className="carousel-item"  data-bs-interval="3000">
                    <img src="./images/im2.jpg" className="d-block img-fluid w-100" alt="carousel image 2" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="./images/im3.jpg" className="d-block img-fluid w-100" alt="carousel image 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}