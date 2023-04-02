import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* <div className="col-6">
              <div className="main-banner-content position-relative p-3">
                <img
                  src="images/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $323.13/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div> */}

            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main bannner"
                />
                <div className="main-banner-content position-absolute">
                  <h4> SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>from $999.00 or $233.1/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $323.13/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival </h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $999.00 <br /> or $323.13/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival </h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $999.00 <br /> or $323.13/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival </h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $999.00 <br />
                      or $323.13/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all Orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service-02.png" alt="services" />
                  <div className>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Direct Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/headphone.jpg" alt="smart watches" />
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/headphone.jpg" alt="smart watches" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home