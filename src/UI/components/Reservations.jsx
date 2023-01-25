import React from 'react';
import { db } from '../../assets/firebase';
import { doc, setDoc, collection } from 'firebase/firestore/lite';

function Reservations() {

    return (
        <div>
            <div className='container text-center py-5 px-5' style={{ maxWidth: '960px' }}><div>
                <div className="py-5 text-center">
                    <h2>Formulario de reserva</h2>
                    <p className="lead">Ingrese los datos para la reservación </p>
                </div>
                <div className="row g-5">
                    <div className="col-md-12 col-lg-12">
                        <h4 className="mb-3">Datos de la reserva</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Primer nombre</label>
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
                                <div className="col-4">
                                    <div className="form-floating">
                                        <select className="form-select" id="mes" aria-label="Floating label select example">
                                            <option value="01">Enero</option>
                                            <option value="02">Febrero</option>
                                            <option value="03">Marzo</option>
                                            <option value="04">Abril</option>
                                            <option value="05">Mayo</option>
                                            <option value="06">Junio</option>
                                            <option value="07">Julio</option>
                                            <option value="08">Agosto</option>
                                            <option value="09">Septiembre</option>
                                            <option value="10">Octubre</option>
                                            <option value="11">Noviembre</option>
                                            <option value="12">Diciembre</option>
                                        </select>
                                        <label htmlFor="mes">Seleccione un mes</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-floating">
                                        <select className="form-select" id="dia" aria-label="Floating label select example">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                        <label htmlFor="dia">Seleccione un día</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-floating">
                                        <select className="form-select" id="hora" aria-label="Floating label select example">
                                            <option value="18">18</option>
                                            <option value="18:30">18:30</option>
                                            <option value="19">19</option>
                                            <option value="19:30">19:30</option>
                                            <option value="20">20</option>
                                            <option value="20:30">20:30</option>
                                            <option value="21">21</option>
                                            <option value="21:30">21:30</option>
                                            <option value="22">22</option>
                                            <option value="22:30">22:30</option>
                                            <option value="23">23</option>
                                            <option value="23:30">23:30</option>
                                            <option value="24">24</option>
                                            <option value="24:30">24:30</option>
                                        </select>
                                        <label htmlFor="hora">Seleccione la hora</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="">
                    <hr className="my-4" />
                    <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={createDoc}>Reservar</button>
                </div>
            </div>

            </div>
        </div>
    );

    async function createDoc() {
        const docRef = collection(db, 'reserva')
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        let email = document.getElementById('email');
        let mes = document.getElementById('mes');
        let dia = document.getElementById('dia');
        let hora = document.getElementById('hora');
        let ctrl = false;
        await setDoc(doc(docRef), {
            nombres: firstName.value,
            apellidos: lastName.value,
            correo: email.value,
            mes: mes.value,
            dia: dia.value,
            hora: hora.value,
        });
        window.location.href = '/';
    }
/*
    async function deleteDoc_() {
        const moviesRef = collection(db, "pedidos");

        await deleteDoc(doc(moviesRef, 'BRAhCH0wmCSQP7i9N4a3'));

    }*/

};

export default Reservations;