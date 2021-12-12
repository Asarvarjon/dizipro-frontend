 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider";
import Slider from "react-slick";

function SimpleSlider() {  
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 0,
    slidesToScroll: 0,

    responsive: [ 
      {
        breakpoint: 556,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container">
      <h6 className="text-muted">Friend Suggestions</h6>
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current) => (
            <div className="out" key={current.id}>
              <div className="card">
                <img
                  className="rounded-circle"
                  alt={"users here"}
                  src={`https://source.unsplash.com/random/${current.id}`}
                  height={56}
                  width={56}
                />
                <div className="card-body">
                  <h5 className="card-title">{current.username}</h5>
                  <small className="card-text text-sm-center text-muted">
                    In your contacts
                  </small>
                  <br />
                  <button className="btn btn-sm follow btn-primary">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}