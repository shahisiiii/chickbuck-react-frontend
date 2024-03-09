import React from 'react'

function Login() {
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card border-light">
          <div className="card-body">
          <div className="chick-logo mb-4">
              {/* Use the imported ChickBuckLogo */}
              <img width={120}
            src="../../../Images/chickbuck_logo.jpg"
            alt="logo2"
          />
            </div>
            <div className='container mt-4 mb-4 pb-3 pt-4'><h4 className='bebas-neue-regular'> LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR EMAIL!</h4></div>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control custom-input" id="username" placeholder="Username" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control custom-input" id="password" placeholder="Password" required/>
              </div>
              
              <button type="submit" className="btn btn-dark mt-3">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login