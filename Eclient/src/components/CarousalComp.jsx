import React from "react";

export default function CarousalComp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
              </div>
              <div className="carousel-inner rounded-4">
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
                    className="d-block"
                    alt="..."
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="btn btn-dark rounded-3">Shop Now</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
                    className="d-block"
                    alt="..."
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="btn btn-dark rounded-3">Shop Now</button>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
