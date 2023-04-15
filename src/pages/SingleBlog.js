import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const SingleBlog = () => {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className='d-flex align-items-center gap-10'> <AiOutlineArrowLeft className='fs-4' />Go back to Blogs</Link>
                <h3 className="title">A beutiful Blog comes to the Sunday</h3>
                <img
                  src="images/images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reiciendis, praesentium! Explicabo velit optio voluptatum
                  officia possimus? Ut sint inventore, expedita culpa facilis
                  accusantium eaque ea eum beatae et sed porro libero dolorem
                  aut voluptate reprehenderit? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Expedita, et!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
