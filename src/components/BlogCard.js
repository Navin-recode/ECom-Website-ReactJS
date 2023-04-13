import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    
      <div className="blog-card">
        <div className="card-image">
          <img
            src="images/images//blog-1.jpg"
            className="img-fluid w-100"
            alt="blog-1"
          />
        </div>
        <div className="blog-content">
          <p className="date">2, Feb, 2023</p>
          <h5 className="title"> A best Sunday Morning wakeup Tech Release</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            perspiciatis ipsam maxime, fuga tempore minus, voluptas corporis
            dolor obcaecati perferendis ipsum nemo aspernatur veritatis amet
            quod omnis architecto fugit ab.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    
  )
}

export default BlogCard
