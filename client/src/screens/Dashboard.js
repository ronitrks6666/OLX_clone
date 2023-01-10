import ReactPaginate from 'react-paginate'
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'


export default function Dashboard() {

  const [product, setproduct] = useState([])
  const [loading, setloading] = useState(false)
  const [Token, setToken] = useState(null)

  const [searchType, setsearchType] = useState('name')
  const [searchString, setsearchString] = useState('')

  //pagination
  const [activePageNumber, setactivePageNumber] = useState(1)
  const [itemsPerPage, setitemsPerPage] = useState(12)
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  //pagination click
  const handlePageClick = (event) => {
    console.log(pageCount)
    setactivePageNumber(event.selected + 1)
    setloading(true)

    axios.get(`/api/list-allUnsold-product?${searchType}=${searchString}&page=${event.selected + 1}&limit=${itemsPerPage}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Token      }
    }).then(
      (response) => {
        console.log(response.data)
        setproduct(response.data.products.results)
        setloading(false)
      },
      (error) => {
        setloading(false)
        if (error.response.status == 401) {
        }
      }
    );
  };

  useEffect(() => {
    const auth_token = localStorage.getItem("auth-token")
    console.log(auth_token)
    setToken(auth_token)
    axios.get(`/api/list-allUnsold-product?page=${activePageNumber}&limit=${itemsPerPage}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth_token
      }
    }).then(
      (response) => {
        console.log(response.data)
        setproduct(response.data.products.results)
        setPageCount(Math.ceil(response.data.products.totalRecord / itemsPerPage))
        setloading(false)
      },
      (error) => {
        setloading(false)
        if (error.response.status == 401) {
        }
      }
    );
  }, [])
  return (
    <div>
      {loading ? (<div className='text-center'><Loading /></div>) : (<section class="featured spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Featured Product</h2>
              </div>
            </div>
          </div>
          <div class="row featured__filter">
            {product.map(data =>
              <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div class="featured__item">
                  <div class="featured__item__pic set-bg" style={{
                    backgroundImage: `url(${data.thumbnail})`
                  }} >
                    <ul class="featured__item__pic__hover" >
                      <li className='btn btn-primary' ><Link to={`/item?id=${data._id}`}>Buy Now</Link></li>

                    </ul>
                  </div>
                  <div class="featured__item__text">
                    <h6><a href="#">{data.ProductName}</a></h6>
                    <h5>Price :Rs.{data.price}/-</h5>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>)}
      <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
    </div>
  )
}
