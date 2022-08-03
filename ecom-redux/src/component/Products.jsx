import React, { useState, useEffect } from 'react'
import Skeleton from "react-loading-skeleton"
import {NavLink} from "react-router-dom"

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => [
                componentMounted = false
            ]
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height ={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height ={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height ={350} />
                </div>
            </>
        )
    }
    const filterProduct = (categ)=>{
        const updatedList = data.filter((e)=>e.category === categ)
        setFilter(updatedList)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick = {()=>setFilter(data)} >All</button>
                    <button className="btn btn-outline-dark me-2" onClick = {()=> filterProduct("men's clothing")} >Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick = {()=> filterProduct("women's clothing")} >Womenen's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick = {()=> filterProduct("jewelery")} >Jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick = {()=> filterProduct("electronics")} >Electronics</button>
                </div>

                {filter.map((item) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key ={item.id}>
                                    <img src= {item.image}  className="card-img-top" alt={item.title} height ="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{item.title.substring(0,12)}...</h5>
                                        <p className="card-text lead fw-bold">${item.price}</p>
                                        <NavLink to= {`/products/${item.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products