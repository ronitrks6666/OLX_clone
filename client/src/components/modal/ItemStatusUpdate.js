import React, { useState } from 'react'
import axios from 'axios'


export default function ItemStatusUpdate({ item, toggleModal, reRender }) {
  console.log(item)
  const [status, setstatus] = useState()
  const poptoggleModal = () => {
    toggleModal();
  };

  function SubmitStatus(itemId) {
    console.log('Status is : ', status, 'Id : ', itemId)
    axios.patch(`/api/update-prod-sold-status?id=${itemId}&status=${status}&mode=other`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjkxN2FjYzg2OGM0MTk1ZmY0NzA4ZiIsImZ1bGxuYW1lIjoiUm9uaXQgU2luZ2giLCJlbWFpbCI6InJvbml0cmtzNjY2N0BnbWFpbC5jb20iLCJpYXQiOjE2NzMzNTU0OTN9.QE-_iIx4heJGeTjHKYBKx2qaQS3a-TiG46k4vsqIhX0'
      }
    }).then(
      (response) => {
        console.log(response.data)
        poptoggleModal()
        reRender(1)
      },
      (error) => {
        if (error.response.status == 401) {
        }
      }
    );

  }
  return (
    <>
    <div class="col-md-6 col-12">
        <div class="card">
            <div class="card-content">
                <div class="card-body">
                    <div class="modal fade show d-block">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Leader SHGs
                                    </h5>
                                </div>
                                <div class="modal-body">
                                    {
                                        <>
                                            <div>Name : {item.ProductName}</div>
                                            <div>
                                                <div>Update status : </div>
                                                <select class="form-select w-60" aria-label="Default select example"
                                                value={status} onChange={(e) => { setstatus(e.target.value) }}>
                                                    <option selected value="name">Select Status</option>
                                                    <option value="1">Sold</option>
                                                    <option value="0">Unsold</option>
                                                </select>
                                            </div>
                                        </>
                                    }
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-light-secondary" onClick={poptoggleModal}>
                                        <i class="bx bx-x d-block d-sm-none"></i>
                                        <span class="d-none d-sm-block">Close</span>
                                    </button>
                                    <button onClick={()=>SubmitStatus(item._id)} type="button" class="btn btn-primary ml-1">
                                        <i class="bx bx-check d-block d-sm-none"></i>
                                        <span class="d-none d-sm-block">Submit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}
