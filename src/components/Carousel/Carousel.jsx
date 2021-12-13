import Slider from 'react-slick'
import "./Carousel"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export default function Carousel() {
const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
        {
          breakpoint: 1064,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 556,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: true
          }
        }, 
      ]
  }

  const photos = [ 
       {
           link: "https://picsum.photos/150?2"
       },
       {
        link: "https://picsum.photos/150?4"
       },
       {
        link: "https://picsum.photos/150?5"
       },
       {
        link: "https://picsum.photos/150?6"
       },
       {
        link: "https://picsum.photos/150?7"
       },
       {
        link: "https://picsum.photos/150?77"
       }
  ]

  return (
    <div className='content'>
      <Slider className="overview__content-photos-list" {...sliderSettings}> 
        {photos.map((photo, index) => (
          <div key={index} className="overview__content-photos-item">
            <img src={photo.link}  alt="project" className="overview__content-photo" />
          </div>
        ))}
      </Slider>
    </div>
  )
}