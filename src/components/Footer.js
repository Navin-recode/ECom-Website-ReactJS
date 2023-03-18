import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="py-3"></footer>
      <footer className="py-3"></footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white">
                &copy; {new Date().getFullYear()}; Powered by Navin Kukreja
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
