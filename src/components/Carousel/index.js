import React from "react";
import Carousel from 'better-react-carousel';
import "./index.css"

const arr = [1,2,3,4,5]

const Carousela = (props) => {
 const list = arr.map(item => {
   return (
       <div key={item}>{props.data.observation_time}</div>
     )
  })
    return (
    <Carousel cols={2} rows={1} gap={10} loop>
      
      <Carousel.Item>
        <div className="carousel">
          <img  src="https://picsum.photos/800/600?random=1" width="100%"/>
          <div className="item">
            {list}
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div > 
          <img src="https://picsum.photos/800/600?random=2" width="100%" />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div >
          <img src="https://picsum.photos/800/600?random=3"  width="100%" />  
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div >
        <img src="https://picsum.photos/800/600?random=4" width="100%" />
        </div>
      </Carousel.Item>
      
    </Carousel>
    //   <div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
    //   {/* <!-- Indicators --> */}
    //   <div class="carousel-indicators">
    //     <button
    //       data-mdb-target="#carouselDarkVariant"
    //       data-mdb-slide-to="0"
    //       class="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       data-mdb-target="#carouselDarkVariant"
    //       data-mdb-slide-to="1"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       data-mdb-target="#carouselDarkVariant"
    //       data-mdb-slide-to="2"
    //       aria-label="Slide 1"
    //     ></button>
    //   </div>
    
    //   {/* <!-- Inner --> */}
    //   <div class="carousel-inner">
    //     {/* <!-- Single item --> */}
    //     <div class="carousel-item active">
    //       <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp" class="d-block w-100" alt="Motorbike Smoke"/>
    //       <div class="carousel-caption d-none d-md-block">
    //         <h5>First slide label</h5>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </div>
    //     </div>
    
    //     {/* <!-- Single item --> */}
    //     <div class="carousel-item">
    //       <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp" class="d-block w-100" alt="Mountaintop"/>
    //       <div class="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </div>
    //     </div>
    
    //     {/* <!-- Single item --> */}
    //     <div class="carousel-item">
    //       <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp" class="d-block w-100" alt="Woman Reading a Book"/>
    //       <div class="carousel-caption d-none d-md-block">
    //         <h5>Third slide label</h5>
    //         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <!-- Inner --> */}
    
    //   {/* <!-- Controls --> */}
    //   <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
    )
}

export default Carousela
