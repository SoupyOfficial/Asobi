import React from 'react'
import Carousel from '../components/Carousel'

export default function CarouselPage
() {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carousel
                show={4}
                infiniteLoop={true}
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" alt="placeholder" style={{width: '100%', aspectRatio: '2:3'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/200x300" alt="placeholder" style={{width: '100%', aspectRatio: '2:3'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/200x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/200x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/200x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/200x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/200x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/200x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carousel>
    </div>
  )
}
