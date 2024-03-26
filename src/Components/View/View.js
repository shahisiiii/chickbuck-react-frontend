import React from 'react'
import './View.css'

function View() {
    return (
        <div >
            <div class="row no-gutters">
                <div class="col-6 col-md-4">
                    <div className='  almarai-title'>

                        <div class=" almarai-links border-light p-4">
                            <span class='list-group-item list-group-item-action border-light text-start almarai-title'>CHICKBUCK MENU</span>
                            <a href="#" class="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">BURGERS</a>
                            <a href="#" class="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">FRIED CHICKEN</a>
                            <a href="#" class="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">SANDWICH</a>
                            <a href="#" class="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">STARTERS</a>
                            <a href="#" class="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">DRINKS</a>
                        </div>

                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-8 mt-4">

                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card mb-4 border-light">
                                <img className="card-img-top custom-item-img img-fluid" src="../../../Images/burger_item.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p> <h5>₹ 199</h5> </p>
                                    <p>Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between</p>
                                    <button type="button" class="btn btn-danger">Add To Cart</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card mb-4 border-light">
                                <img className="card-img-top custom-item-img img-fluid" src="../../../Images/burger_item.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p> <h5>₹ 199</h5> </p>
                                    <p>Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between</p>
                                    <button type="button" class="btn btn-danger">Add To Cart</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card mb-4 border-light">
                                <img className="card-img-top custom-item-img img-fluid" src="../../../Images/burger_item.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p> <h5>₹ 199</h5> </p>
                                    <p>Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between</p>
                                    <button type="button" class="btn btn-danger">Add To Cart</button>

                                </div>
                            </div>
                        </div>
                        {/* Repeat this structure for additional cards */}
                    </div>





                </div>
            </div>

        </div>

    )
}

export default View;