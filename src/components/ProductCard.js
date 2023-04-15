import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
  const { grid } = props
  // console.log(grid);

  let location = useLocation()
  console.log(location)

  return (
    <>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/images/watch-1.jpg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk pack multi color for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`desc $ {grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              vero, doloribus provident ex id debitis ipsa dolorem quo quod
              culpa impedit. Modi, a libero!
            </p>
            <p className="price">$ 100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/images/add-cart.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/images/view.svg" alt="view" />
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname == '/store' ? `gr-${grid}` : 'col-3'
        } `}
      >
        <Link to='/product/:id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/images/watch-1.jpg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk pack multi color for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`desc $ {grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              vero, doloribus provident ex id debitis ipsa dolorem quo quod
              culpa impedit. Modi, a libero!
            </p>
            <p className="price">$ 100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/images/add-cart.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/images/view.svg" alt="view" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      
    </>
  )
}

export default ProductCard
