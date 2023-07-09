import React from 'react';

function TopNav() {
  return (
    <section className="container-fluid bg-light px-2 ">
      <div className="container col-lg-6 col-md-6  py-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-0 text-secondary">RENT MY CRIB</h3>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-secondary font-small-1" href="/">rent</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary font-small-1" href="/">buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary font-small-1" href="/">commercial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary font-small-1 bg-warning" href="/">list privately</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary font-small-1" href="/">sign in</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary font-small-1" href="/">sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TopNav;
