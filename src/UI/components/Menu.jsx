import React, { useState, useEffect } from 'react';
import { db } from '../../assets/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import Bg from '../../Img/menu/bg.jpg';
import MenuImg from '../../Img/menu/menu.png';


//const Menu = ({ onAction }) => {
const Menu = ({ cargaDatosGuardados }) => {
    const [menus, setMenu] = useState('');

    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{ backgroundImage: 'url(' + Bg + ')' }}>
            <div className="container text-center py-5">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mb-5">
                        <img src={MenuImg} className="card-img-top" style={{ width: '400px' }} alt="..." />
                    </div>
                    {
                        menus && menus.map((menu) => {
                            return (
                                <div key={menu.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
                                    <div className="card" style={{ width: '18rem', borderColor: '#625a54' }}>
                                        <img src={menu.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{menu.nombre}</h5>
                                            <p className="card-text">{menu.descripcion}</p>
                                        </div>
                                        <ul className="list-group list-group-flush" style={{ borderTopColor: '#625a54' }}>
                                            <li className="list-group-item">
                                                <div className="clearfix align-items-center">
                                                    <p className='float-start my-0' style={{ paddingTop: '0.42rem', paddingBottom: '0.42rem' }}><b>Precio:</b> {menu.precio}</p>
                                                    <button type="button" data-id={menu.id} data-nombre={menu.nombre} data-precio={menu.precio} data-descripcion={menu.descripcion} className="btn btn-success card-link float-end" onClick={addCart}>Agregar</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );

    //obtener
    async function getData() {
        const docRef = collection(db, 'menu');
        const docSnap = await getDocs(docRef);
        const docList = docSnap.docs.map(doc => doc.data());
        setMenu(docList);
    }

    function addCart(e) {
        let dataset = e.target.dataset;

        let arregloMenu = [];
        let objMenu = {
            id: dataset.id,
            nombre: dataset.nombre,
            precio: dataset.precio,
            cantidad: 1,
            descripcion: dataset.descripcion,
        }

        //logica del local storage
        if (localStorage.getItem('valores') == null) {
            arregloMenu.push(objMenu);
            localStorage.setItem('valores', JSON.stringify(arregloMenu))
        } else {
            let datos = JSON.parse(localStorage.getItem('valores'));
            let ctrlExiste = false;
            datos.map(function (num) {
                if (num.id == dataset.id) {
                    ctrlExiste = true;
                    num.cantidad += 1;
                    return num;
                }
            })
            if(!ctrlExiste){
                datos.push(objMenu);
            }

            localStorage.setItem('valores', JSON.stringify(datos));
        }
        cargaDatosGuardados()
    }
};

export default Menu;