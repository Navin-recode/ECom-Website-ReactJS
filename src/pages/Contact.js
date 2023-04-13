import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Contact = () => {
  return (
    <>
      <Meta title={'contact'} />
      <BreadCrumb title="contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.335046516662!2d75.89112305997477!3d22.752944076252028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1681370193107!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border:0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
            <div className="contact-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title">Contact</h3>
              </div>
              <div>
                <h3 className="contact-title">Get in Touch with Us</h3>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact



