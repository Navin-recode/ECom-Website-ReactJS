import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom'
import Color from '../components/Color'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
// import headphone from '../../public/images/images/headphone.jpg'

const SingleProduct = () => {
  const props = {
    width: 600,
    height: 600,
    zoomWidth: 600,
    img:
      'https://m.media-amazon.com/images/I/71IGPk09H-L._AC_UF894,1000_QL80_.jpg',
  }

  const [orderedProduct, setOrderedProduct] = useState(true)

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.execCommand('copy')
    textField.remove()
  }

  return (
    <>
      <Meta title={'Product Name'} />
      <BreadCrumb title="Product Name" />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
      
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
                <div className="other-product-images d-flex flex-wrap gap-15">
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71IGPk09H-L._AC_UF894,1000_QL80_.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71IGPk09H-L._AC_UF894,1000_QL80_.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71IGPk09H-L._AC_UF894,1000_QL80_.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="https://m.media-amazon.com/images/I/71IGPk09H-L._AC_UF894,1000_QL80_.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3>Kids Headphonse bulk pack 10 Multi color students</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review"> ( 2 Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Boat</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={0}
                        max={10}
                        style={{ width: '70px' }}
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add To Cart
                      </button>
                      <button className="button signup">Buy It Now </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" /> Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping and Returns :</h3>
                    <p className="product-data">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Soluta, fugiat cum debitis quisquam mollitia fuga nesciunt
                      reiciendis eveniet labore magnam eius incidunt maiores
                      deleniti? Cum repellat dolor expedita a deserunt!
                    </p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Product Link :</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(
                          'https://m.media-amazon.com/images/I/71IGPk09H-L._AC_UF894,1000_QL80_.jpg',
                        )
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio deserunt dolores architecto, expedita voluptatibus
                  dolorem ut! Sunt eius voluptatibus accusantium hic quia minima
                  molestias, temporibus, esse autem ipsam velit omnis iusto,
                  perspiciatis sed dolores impedit quae quaerat totam ex
                  maiores.
                </p>
              </div>
            </div>
          </div>
        
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviewes</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer's Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                      <textarea
                        name=""
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quod, odit quidem asperiores exercitationem explicabo
                      itaque! Neque, possimus laboriosam. Nemo quibusdam dolores
                      sit, labore dolorem non recusandae quaerat harum tenetur
                      neque?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
       
      </Container>
    </>
  )
}

export default SingleProduct
