import React, { useState, useEffect } from 'react';
import logo from '../../Img/logo.png';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css'


const Navbar = ({ noti }) => {
    const [notificaciones, setNotificaciones] = useState(0);

    useEffect(() => {
        cargaDatosGuardados();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width={100} style={{ marginTop: '-15px', marginBottom: '-15px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarScroll">
                    <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: '100px' }}>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/menu">
                                Menu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contactanos">
                                Contáctanos
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex me-5">
                    <Link className="btn btn-sm btn-secondary" aria-current="page" to="/carrtito">
                        <i className="bi bi-bell-fill position-relative p-0 notification">
                            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ marginTop: '5px', fontSize: '8pt', left: '122%' }}>
                                {
                                    noti && noti || notificaciones
                                }
                            </span>
                        </i>
                    </Link>
                </div>
            </div>
        </nav>
    );

    function cargaDatosGuardados() {
        if (localStorage.getItem('valores') != null) {
            let datos = JSON.parse(localStorage.getItem('valores'));
            let cantidad = 0;
            datos.forEach(element => {
                cantidad+=element.cantidad;
            });
            noti = cantidad;
            
            setNotificaciones(noti);
            /*
            datos.forEach(element => {
                let divNombre = document.createElement('div');
                let textNombre = document.createTextNode(element.nombre);
                divNombre.appendChild(textNombre);

                let boton = document.createElement('button');
                boton.className = 'btn btn-danger';

                let textBoton = document.createTextNode('Borrar');
                boton.addEventListener('click', event => {
                    alert(element.nombre)
                });
                boton.appendChild(textBoton);
                divNombre.appendChild(boton);

                document.body.appendChild(divNombre);
            });*/
        }
    }

};

export default Navbar;