import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Loading from '../components/Loading';

export default function ProductDetail() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery()

    const [product, setproduct] = useState({})
    const [Token, setToken] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {

        const auth_token = localStorage.getItem("auth-token")
        console.log(auth_token)
        setToken(auth_token)
        const id = query.get('id');
        console.log(id)
        id ? (axios.get(`/api/list-single-product?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth_token
            }
        }).then(
            (response) => {
                console.log(response.data.products)
                setproduct(response.data.products)
                setloading(false)
            },
            (error) => {
                setloading(false)
                if (error.response.status == 401) {
                }
            }
        )) : (console.log(''))

    }, [])
    return (
        <div>
            {loading ? (<div><Loading /></div>) : (
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                        <img src={product.thumbnail} class="d-block w-100" alt="..." />
                                    </div>
                                    {product.images ? product.images.map(image =>
                                        <div class="carousel-item">
                                            <img src={image} class="d-block w-100" alt="..." />
                                        </div>) : ''}
                                </div>
                                <button class="carousel-control-prev carousel-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next carousel-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                          
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__text">
                                <h3>{product.ProductName}</h3>
                               
                                <div class="product__details__price">Rs.{product.price}/-</div>
                         
                                <ul>
                                    <li><b>Availability</b> <span>In Stock</span></li>
                                    <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                    <li><b>Weight</b> <span>0.5 kg</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="product__details__tab">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                            aria-selected="true">Description</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div class="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                                suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                                vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                                Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                                accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                                elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                                et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                                vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                                elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                                porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                                nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                                porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                                sed sit amet dui. Proin eget tortor risus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
