import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
import prodcompare from '../images/images/prodcompare.svg'
import wish from '../images/images/wish.svg'
import wishlist from '../images/images/wishlist.svg'
import watch from '../images/images/watch.jpg'
import watch2 from '../images/images/watch-1.jpg'
import addcart from '../images/images/add-cart.svg'
import view from '../images/images/view.svg'

const ProductCard = (props) => {
  const { grid } = props
  // console.log(grid);

  let location = useLocation()
  // console.log(location)

  return (
    <>
      <div
        className={` ${
          location.pathname == '/store' ? `gr-${grid}` : 'col-3'
        } `}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wishlist} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
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
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="prodcompare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname == '/store' ? `gr-${grid}` : 'col-3'
        } `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'>
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch - 1} className="img-fluid" alt="product image" />
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
              <button className='border-0 bg-transparent'>
                <img src={prodcompare} alt="prodcompare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={addcart} alt="addcart" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={view} alt="view" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard
