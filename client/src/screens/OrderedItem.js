import React from 'react'
import axios from 'axios'
import { useContext, useEffect, useState } from "react";
import ItemStatusUpdate from '../components/modal/ItemStatusUpdate';
import Loading from '../components/Loading';


export default function OrderedItem() {

    const [Products, setProducts] = useState([])
    const [loading, setloading] = useState(true)
    const [UpdateStatusModal, setUpdateStatusModal] = useState(false)
    const [actionProduct, setactionProduct] = useState({})

    useEffect(() => {
        axios.get(`/api/list-purchased-item?page=1&limit=10`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjkxN2FjYzg2OGM0MTk1ZmY0NzA4ZiIsImZ1bGxuYW1lIjoiUm9uaXQgU2luZ2giLCJlbWFpbCI6InJvbml0cmtzNjY2N0BnbWFpbC5jb20iLCJpYXQiOjE2NzMzNTU0OTN9.QE-_iIx4heJGeTjHKYBKx2qaQS3a-TiG46k4vsqIhX0'
            }
        }).then(
            async (response) => {
                console.log(response.data.products.results)
                setProducts(response.data.products.results)
                setloading(false)
            },
            (error) => {
                if (error.response.status == 401) {
                }
            }
        );


    }, [])
    return (

        <section class="from-blog spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title from-blog__title">
                            <h2>Your Orders</h2>
                        </div>
                    </div>
                </div>
                <div class="row products-list-box">
                    {loading ? (<div className='text-center my-4'><Loading /></div>) :
                        Products.length == 0 ? (<div className='text-center my-4'>No Result</div>) : (
                            Products.map(data =>
                                <div class="card item-box" >
                                        <img src={`${data.thumbnail}`} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title">{data.ProductName}</h5>
                                                <p class="card-text">Price : {data.price}</p>
                                            </div>
                                    </div>
                                )
                        )}

                </div>
            </div>
        </section>

    )
}
