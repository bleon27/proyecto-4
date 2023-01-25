import React, { useState, useEffect } from 'react';
import { db } from '../../assets/firebase';
import { doc, getDoc, setDoc, collection, deleteDoc } from 'firebase/firestore/lite';
import '../../assets/css/carrito.css';

function Cart() {
    const [pedidos, setPedidos] = useState('');
    const [total, setTotal] = useState(0);
    const [notificaciones, setNotificaciones] = useState(0);
    useEffect(() => {
        getPedidos();
        cargaDatosGuardados();
        deleteDoc_();
    }, []);

    return (
        <div>
            <div className='container text-center py-5 px-5' style={{ maxWidth: '960px' }}><div>
                <div className="py-5 text-center">
                    <h2>Formulario de pedido</h2>
                    <p className="lead">Ingrese los datos solicitados para realizar su pedido </p>
                </div>
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Pedido</span>
                            <span className="badge bg-primary rounded-pill">{notificaciones}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {
                                pedidos && pedidos.map((pedido) => {
                                    return (
                                        <li key={pedido.id} className="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 className="my-0">{pedido.nombre}</h6>
                                                <small className="text-muted">{pedido.descripcion}</small>
                                            </div>
                                            <span className="text-muted">${pedido.precio}</span>
                                        </li>
                                    );
                                })
                            }
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Datos de envió</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Nombres</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Juan" required />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Perez" required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Dirección</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="">
                    <hr className="my-4" />
                    <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={createDoc}>Registrar pedido</button>
                </div>
            </div>

            </div>
        </div>
    );

    //obtener
    function getPedidos() {
        let datos = JSON.parse(localStorage.getItem('valores'));
        let valTotal = 0;
        datos.forEach(element => {
            valTotal += parseFloat(element.precio);
        });
        setTotal(valTotal);
        setPedidos(datos);
    }

    function cargaDatosGuardados() {
        if (localStorage.getItem('valores') != null) {
            let datos = JSON.parse(localStorage.getItem('valores'));
            let cantidad = 0;
            datos.forEach(element => {
                cantidad += element.cantidad;
            });
            setNotificaciones(cantidad);
        }
    }

    async function createDoc() {
        const docRef = collection(db, 'pedidos')
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        let email = document.getElementById('email');
        let address = document.getElementById('address');
        await setDoc(doc(docRef), {
            nombres: firstName.value,
            apellidos: lastName.value,
            correo: email.value,
            direccion: address.value
        });
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        address.value = '';
        localStorage.setItem('valores', JSON.stringify([]));
        window.location.href = '/';
    }

    async function deleteDoc_() {
        const moviesRef = collection(db, "pedidos");
      
        await deleteDoc(doc(moviesRef, 'BRAhCH0wmCSQP7i9N4a3'));

    }

};

export default Cart;