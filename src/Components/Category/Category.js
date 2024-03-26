import React from 'react';
import './Category.css';

function Category() {
    return (


        <div >
            <div className="container text-start">
                <h6 className='fw-medium display-6  font-style mt-5 mb-3 '>Hello shahis , whats on your mind</h6>
            </div>

            <div class="row  d-flex justify-content-between  flex-wrap">
                <div className="card border-light" style={{ width: '12rem' }}>
                    <img className="card-img-top custom-card-img img-fluid" src="../../../Images/burger.jpeg" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Burgers</h5>
                    </div>
                </div>
                <div className="card border-light" style={{ width: '12rem' }}>
                    <img className="card-img-top custom-card-img img-fluid" src="../../../Images/brosted.png" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Fried chickens</h5>
                    </div>
                </div>
                <div className="card border-light" style={{ width: '12rem' }}>
                    <img className="card-img-top custom-card-img img-fluid" src="../../../Images/sandwich2.jpeg" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Sandwiches</h5>
                    </div>
                </div>
                <div className="card border-light" style={{ width: '12rem' }}>
                    <img className="card-img-top custom-card-img img-fluid" src="../../../Images/burger.jpeg" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">burgers</h5>
                    </div>
                </div>
                <div className="card border-light" style={{ width: '12rem' }}>
                    <img className="card-img-top custom-card-img img-fluid" src="../../../Images/drinks.jpeg" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Drinks</h5>
                    </div>
                </div>
                <div className="card border-light" style={{ width: '12rem' }}>
                    <img className="card-img-top custom-card-img img-fluid" src="../../../Images/sandwich2.jpeg" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Sandwiches</h5>
                    </div>
                </div>
                <div className="card border-light" style={{ width: '12rem' }}>
                    <img className="card-img-top custom-card-img img-fluid" src="../../../Images/drinks.jpeg" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Drinks</h5>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Category;
