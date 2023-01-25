import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuComponent from '../components/Menu'

function Menu() {
    let [notificaiones, setNotificaiones] = useState('');

    /*function handleAction(event) {
        setNofificaiones(event);
    }*/

    return (
        <div>
            <Navbar noti={notificaiones}/>
            <MenuComponent cargaDatosGuardados={cargaDatosGuardados}/>
            <Footer />
        </div>
    );

    function cargaDatosGuardados() {
        if (localStorage.getItem('valores') != null) {
            let datos = JSON.parse(localStorage.getItem('valores'));
            let cantidad = 0;
            datos.forEach(element => {
                cantidad+=element.cantidad;
            });
            setNotificaiones(cantidad);
        }
    }
};

export default Menu;