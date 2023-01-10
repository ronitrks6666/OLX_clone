import React, { useState } from 'react'
import axios from 'axios'
import _ from 'lodash'


export default function SellItemFrom() {
    const [ProductName, setProductName] = useState('')
    const [Price, setPrice] = useState(0)
    const [thumbnail, setthumbnail] = useState(null)

    let formData =new FormData()
    const imageHandle =async e =>{
        console.log('Images')
        _.forEach(e.target.files , image =>{
            formData.append('image',image)
        })
    }

    const submitClick = (e)=>{
        e.preventDefault()
        formData.append('ProductName',ProductName)
        formData.append('price',Price)
        formData.append('thumbnail',thumbnail)
        console.log(formData)
        console.log([...formData])
        axios.post("/api/add-new-product",formData, {
            headers: { 
            'Content-Type': 'multipart/form-data',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjkxN2FjYzg2OGM0MTk1ZmY0NzA4ZiIsImZ1bGxuYW1lIjoiUm9uaXQgU2luZ2giLCJlbWFpbCI6InJvbml0cmtzNjY2N0BnbWFpbC5jb20iLCJpYXQiOjE2NzMzNTU0OTN9.QE-_iIx4heJGeTjHKYBKx2qaQS3a-TiG46k4vsqIhX0'
        }
        }).then(
            (response) => {
                console.log(response.data)
            },
            (error) => {
                if (error.response.status == 401) {
                }
            }
        );
    }
    return (
        <div id='sell-item'>
            <section id="basic-vertical-layouts">
                <div class="row match-height">
                    <div class="col-md-6 col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Add Item for Sale</h4>
                            </div>
                            <div class="card-content">
                                <div class="card-body">
                                <form class="form form-vertical" onSubmit={e => { e.preventDefault(); }}>
                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group has-icon-left">
                                                        <label for="first-name-icon">Item Name</label>
                                                        <div class="position-relative">
                                                            <input type="text" class="form-control"
                                                                placeholder="Input with icon left"
                                                                id="first-name-icon" value={ProductName} onChange={(e)=>{setProductName(e.target.value)}} />
                                                            <div class="form-control-icon">
                                                                <i class="bi bi-pen"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group has-icon-left">
                                                        <label for="first-name-icon">Price</label>
                                                        <div class="position-relative">
                                                            <input type="text" class="form-control"
                                                                placeholder="Input with icon left"
                                                                id="first-name-icon" value={Price} onChange={(e)=>{setPrice(e.target.value)}} />
                                                            <div class="form-control-icon">
                                                                <i class="bi bi-pen"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group has-icon-left">
                                                        <label for="first-name-icon">Thumbnail</label>
                                                        <div class="position-relative">
                                                        <input type="file" class="basic-filepond" name='image'  onChange={(e)=>{setthumbnail(e.target.files[0])}} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <div class="form-group has-icon-left">
                                                        <label for="first-name-icon">Images</label>
                                                        <div class="position-relative">
                                                            <input type="file" multiple class="basic-filepond" onChange={imageHandle} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-12 d-flex justify-content-end">
                                                <button onClick={(e)=>{submitClick(e)}}
                                                        class="btn btn-primary me-1 mb-1">Submit</button>
                                                    <button type="reset"
                                                        class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
