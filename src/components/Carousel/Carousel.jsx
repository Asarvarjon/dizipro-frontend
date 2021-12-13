

import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import { useSwipeable } from "react-swipeable";



export const CarouselItem = ({children, width}) => {
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    )
}


const Carousel = ({children}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1)
        }, 1000);


        return () => {
            if(interval) {
                clearInterval(interval)
            }
        }
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    })

    return (
        <div
         {...handlers}
        className="carousel">
            <div className="inner" style={{transform: `translateX(-${activeIndex * 50}%)`}}>
                 {
                     React.Children.map(children, (child, index) => {
                         return React.cloneElement(child, {
                             width: "50%"
                         })
                     }) 
                 }
            </div>

            <div className="indicators">
                <button 
                    onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}
                >
                    Prev
                </button>


                <button onClick={() => {
                    updateIndex(activeIndex + 1)
                }}>
                    Next
                </button>
            </div>
        </div>
    )
}


export default Carousel;