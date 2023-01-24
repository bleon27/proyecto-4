import React from 'react';
import logo from '../../Img/logo.png';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>
                        <Link className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none" to="/">
                            <img src={logo} width={100} style={{ marginTop: '-15px', marginBottom: '-15px' }} />
                        </Link>
                        <ul className="nav col-md-4 justify-content-end">
                            <li className="ms-3">
                                <a className="link-dark" target='_blank' href="https://twitter.com/?lang=es">
                                    <i className="bi bi-twitter" style={{ fontSize: '24px' }}></i>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-dark" target='_blank' href="https://www.instagram.com/">
                                    <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-dark" target='_blank' href="https://www.facebook.com/">
                                    <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>

            </div>
        );
    }
};

export default Footer;