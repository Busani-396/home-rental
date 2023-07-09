function PageHeading(){
    return(
        <section className="container-fluid m-auto mt-4  d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 px-2">
                <h2 className="display-6">Houses to Rent in Gauteng</h2>
                <p className="text-secondary">Property to Rent  
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg> 
                Gauteng</p>
            </div>
        </section>
    )
}

export default PageHeading;