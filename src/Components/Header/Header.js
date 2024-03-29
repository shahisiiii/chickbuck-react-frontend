import React from 'react';

function Header() {
  const bucketImageUrl = 'https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg';
  const signInImageUrl = 'https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg';
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#">
            <div className="chick-logo">
              {/* Use the imported ChickBuckLogo */}
              <img width={100}
            src="../../../Images/chickbuck_logo_svg.png"
            alt="logo"
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
              <a href="#" className="d-flex align-items-center mt-4 me-3"style={{ textDecoration: 'none', color: 'inherit' }} aria-current="">
                <img  className='me-3' src={signInImageUrl} width={20} alt="sign in" />
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
