import React from 'react'
import './View.css'

function View() {
    return (
        <div>
            <div className="container text-start">
                <h6 className='fw-medium display-6  font-style mt-5 mb-3 '>Hello shahis , whats on your mind</h6>
            </div>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 d-flex justify-content-between flex-wrap">
                <div className="card border-light" style={{ width: '270px' }}>
                    <img className="card-img-top custom-card-img img-fluid" src="../../../Images/burger_view.png" alt="Card_view" />
                    <div className="card-body">
                        <h5 className="card-title">Zinger, Hot Crispy Burger</h5>
                    </div>
                    <div class="card-body">
                         <h5> ₨ 499</h5>
                    </div>
                    <div class="card-body">
                        Special big chicken burger
                    </div>
                    <button type="button" class="btn btn-custom">Add to Cart</button>

                </div>


            </div>
        </div>
    )
}

export default View