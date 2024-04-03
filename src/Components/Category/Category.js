import React from 'react';
import './Category.css';

function Category() {
    return (
        <div>
            <div className="container text-start heading-txt">
                <span className='fw-medium display-6 font-style responsive-text text-shadow'>Hello shahis, what's on your mind</span>
            </div>





            <div className="">
                <div className="row  container font-style row-cols-3 row-cols-md-6 ">
                    <div className="col">
                        <div className="card border-light">
                            <img src="../../../Images/burger.jpeg" className="card-img-top category-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title category-txt text-center">Burger</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-light">
                            <img src="../../../Images/brosted.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title category-txt text-center">Brosted</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-light">
                            <img src="../../../Images/drinks.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title category-txt text-center">Drinks</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-light">
                            <img src="../../../Images/brosted.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title category-txt text-center">Brosted</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-light">
                            <img src="../../../Images/burger.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title category-txt text-center">Burger</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-light">
                            <img src="../../../Images/burger.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title category-txt text-center">Burger</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-light">
                            <img src="../../../Images/burger.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title category-txt text-center">Burger</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Category;
