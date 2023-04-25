import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Checkout = () => {
  return (
   <React.Fragment>
    <Meta title={"CheckOut"} />
    <BreadCrumb title="CheckOut"/>
    <div className="checout-wrapper">
      <div className="container-xxl">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">DevCorner</h3>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
   </React.Fragment>
  )
}

export default Checkout
