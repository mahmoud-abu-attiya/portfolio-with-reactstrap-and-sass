import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from '@fortawesome/free-solid-svg-icons'
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.scss';

const Footer = ()=> {
    return(
      <footer className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <FontAwesomeIcon icon={faCopyright} />
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="/portfolio" className="nav-link px-2 text-white">Features</a></li>
              <li><a href="/" className="nav-link px-2 text-white">Pricing</a></li>
              <li><a href="/" className="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="/about" className="nav-link px-2 text-white">About</a></li>
            </ul>
            <div className="text-end">
              <a href='facebook' >
                <i className="bi bi-facebook"></i>
              </a>
              <a href='instagram'>
                <i className="bi bi-instagram"></i>  
              </a>
              <a href='whatsapp'>
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
