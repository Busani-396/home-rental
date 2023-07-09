import Links from "./utils.js/links";

function ResultsSection(){
    return (
        <section className="container-fluid" >
            <div class='container col-lg-6 col-md-6 '>
                {/******************* Links can render with dependencies changing***********************/}
                <Links/>
                </div>
                <div className="container row col-lg-6 m-auto d-flex justify-content-center align-items-center" >
                    <div className="font-small-1 container col-lg-9 col-md-9 col-sm-12 p-0 d-flex justify-content-between align-items-center border">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <form className="m-0">
                                <div class="btn-group">
                                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                    <strong>order by :</strong> Default
                                    </button>
                                     <ul class="dropdown-menu dropdown-menu-end">
                                        <li><button className="dropdown-item" type="button">Action</button></li>
                                        <li><button className="dropdown-item" type="button">Another action</button></li>
                                        <li><button className="dropdown-item" type="button">Something else here</button></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            Showing : 1 - 20 of 22721
                        </div>

                        
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-12 d-flex justify-content-center align-items-center">
                        <p>His here</p>
                    </div>

                    <div className="listing d-flex flex-column justify-content-center align-items-start my-3">
                        <div className="col-lg-12 card-body row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                image
                            </div>
                            <div className="col-lg-8  col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-start">
                                <div class="property-listing-data col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <p>R6000</p>
                                        <p className="descrTitle">1 Bedroom</p>
                                        <p><strong>Parktown</strong></p>  
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>provider logo</p>
                                    </div>
                                </div>
                                <p>this beautiful spacious 1 bedroom second floor apartment is available for rental in high security 
                                            complex in sage. This property boasts a spacious kitchen fitted with quality built-in cupboard offering 
                                            ample storage space. The bathroom as...
                                        </p>
                                <div>
                                    {/*******ICONS COME HERE************/}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="listing d-flex flex-column justify-content-center align-items-start my-3">
                        <div className="col-lg-12 card-body row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                image
                            </div>
                            <div className="col-lg-8  col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-start">
                                <div class="property-listing-data col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <p>R6000</p>
                                        <p className="descrTitle">1 Bedroom</p>
                                        <p><strong>Parktown</strong></p>  
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>provider logo</p>
                                    </div>
                                </div>
                                <p>this beautiful spacious 1 bedroom second floor apartment is available for rental in high security 
                                            complex in sage. This property boasts a spacious kitchen fitted with quality built-in cupboard offering 
                                            ample storage space. The bathroom as...
                                        </p>
                                <div>
                                    {/*******ICONS COME HERE************/}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
        </section>
    )
}


export default ResultsSection;