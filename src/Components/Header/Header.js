import React from 'react';
import './Header.css'
function Header() {
  const bucketImageUrl = 'https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg';
  const signInImageUrl = 'https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg';

  return (
    <div className='container'>
      <nav className="navbar img-fluid navbar-bg container navbar-expand-lg bg-body-light fixed-top">
        <div className="container d-flex">
          <a className="navbar-brand" href="#">
            <div className="container">
              <img
                width={120}
                className='logo-image'
                src="../../../Images/chickbuck_logo.jpg"
                alt="logo2"
              />
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5 fw-semibold align-items-end" id="navbarSupportedContent">
            <ul className="fs-6 navbar-nav me-auto align-items-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Menu</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <a href="/signup" className="d-flex align-items-center mt-4 me-3" style={{ textDecoration: 'none', color: 'inherit' }} aria-current="">
                <img className='me-3' src={signInImageUrl} width={20} alt="sign in" />
                <span>Sign In</span>
              </a>
              <div className="d-flex align-items-end mt-4">
                <img src={bucketImageUrl} width={50} alt="Basket cart" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
