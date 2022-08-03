import React from 'react'
import Products from "./Products"

const Home = () => {
    return (
        <div className = "hero">
            <div className="card text-bg-dark  border-0">
                <img src="https://www.equinoxitsol.com/blog/wp-content/uploads/2022/04/Shopping-cart--1024x576.jpg" className="card-img" alt="..." height="650px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className = "container">
                        <h5 className="card-title display-3 display-3 mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home