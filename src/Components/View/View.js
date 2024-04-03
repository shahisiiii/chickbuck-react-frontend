import React from 'react';
import './View.css';
import Brosted from '../Brosted/Brosted';

function View() {
    return (
        <div>

            <div className="row container view-margin-top menu ">
                <div className="col-6 fixed-column col-md-4">
                    <div className='  almarai-title'>

                        <div className=" almarai-links border-light ">
                            <span className='list-group-item list-group-item-action border-light text-start menu-text'>CHICKBUCK MENU</span>
                            <a href="#" className="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">BURGERS</a>
                            <a href="#" className="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">BROSTED</a>
                            <a href="#" className="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">SANDWICH</a>
                            <a href="#" className="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">STARTERS</a>
                            <a href="#" className="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">DRINKS</a>
                            <a href="#" className="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis"> JUICES</a>
                            <a href="#" className="list-group-item list-group-item-action border-light mt-4 text-start text-dark-emphasis">DRINKS</a>


                            <div className="chick-logo-menu mb-4">
                                {/* Use the imported ChickBuckLogo */}
                                <img
                                    width={120}
                                    src="../../../Images/chickbuck_logo.jpg"
                                    alt="logo2"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-8 mt-4 overflow-scroll">

                    <div className="row">
                        <Brosted />
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card mb-4 border-light">
                                <img className="card-img-top custom-item-img img-fluid" src="../../../Images/burger_item.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p><strong>&#x20B9; 199</strong></p>
                                    <p>Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between</p>
                                    <button type="button" className="btn btn-danger">Add To Cart</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card mb-4 border-light">
                                <img className="card-img-top custom-item-img img-fluid" src="../../../Images/burger_item.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p><strong>₹ 199</strong></p>
                                    <p>Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between</p>
                                    <button type="button" className="btn btn-danger">Add To Cart</button>

                                </div>
                            </div>
                        </div>
                        {/* Repeat this structure for additional cards */}
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card mb-4 border-light">
                                <img className="card-img-top custom-item-img img-fluid" src="../../../Images/burger_item.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p><strong>&#x20B9; 199</strong></p>
                                    <p>Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between</p>
                                    <button type="button" className="btn btn-danger">Add To Cart</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card mb-4 border-light">
                                <img className="card-img-top custom-item-img img-fluid" src="../../../Images/burger_item.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p><strong>₹ 199</strong></p>
                                    <p>Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between</p>
                                    <button type="button" className="btn btn-danger">Add To Cart</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card mb-4 border-light">
                                <img className="card-img-top custom-item-img img-fluid" src="../../../Images/burger_item.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p><strong>₹ 199</strong></p>
                                    <p>Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between</p>
                                    <button type="button" className="btn btn-danger">Add To Cart</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card mb-4 border-light">
                                <img className="card-img-top custom-item-img img-fluid" src="../../../Images/burger_item.png" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Burgers</h5>
                                    <p><strong>₹ 199</strong></p>
                                    <p>Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between</p>
                                    <button type="button" className="btn btn-danger">Add To Cart</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /================================  for mobile display========================= */}
            <div>
                <div class="d-md-none mt-4 mb-4 ">
                    <div className='mt-4 mb-4 overflow-x-auto overflow-scroll-filter'>
                        <div className="btn-group d-flex gap-3" role="group" aria-label="Filter buttons">
                            <button className='btn rounded-4 border border-dark filter-btn'>Burgers</button>
                            <button className='btn rounded-4 border border-dark filter-btn'>Brosted</button>
                            <button className='btn rounded-4 border border-dark filter-btn'>Sandwich</button>
                            <button className='btn rounded-4 border border-dark filter-btn'>Starters</button>
                            <button className='btn rounded-4 border border-dark filter-btn'>Drinks</button>
                            <button className='btn rounded-4 border border-dark filter-btn'>Juices</button>
                            <button className='btn rounded-4 border border-dark filter-btn'>Addon</button>
                        </div>
                    </div>

                    <div class="card mb-4 w-100 border-light">
                        <div class="row g-4">
                            <div class="col-4">
                                <img className='rounded-3 h-100 object-fit-cover' src="../../../Images/burger_item.png" alt="..." />
                            </div>
                            <div class="col-8">
                                <div class="card border-light ">
                                    <div className="font-style-item">C1 Burger</div>
                                    <div className="font-style-price rounded-2 text-center px-2" >&#x20B9; 299</div>
                                    <div class="font-style-discription">Big Crunchy Chicken Burger</div>
                                    <button class="btn addtocart-btn rounded-3 mt-2">Add to Cart</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default View;
