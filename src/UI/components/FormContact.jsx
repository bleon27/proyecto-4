import React from 'react';
import { db } from '../../assets/firebase';
import { doc, setDoc, collection } from 'firebase/firestore/lite';
import CallCenter from '../../Img/contact/465016-PG301I-785.jpg';

function FormContact() {
    return (
        <div>
            <div className='container text-center py-5'>
                <h1 className='text-center mb-5'>CONTACTANOS</h1>
                <form className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 pe-4">
                        <img src={CallCenter} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center ps-4">
                        <div className='row g-3'>
                            <div className="col-12">
                                <h3>Escríbenos para obtener más información</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit sapiente id perferendis nostrum numquam laborum adipisci pariatur totam, minima nam iure asperiores ducimus hic tempore autem saepe exercitationem quisquam dolor?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="nombres" placeholder="" />
                                    <label htmlFor="nombres">Nombres</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="apellidos" placeholder="" />
                                    <label htmlFor="apellidos">Apellidos</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="correo" placeholder="" />
                                    <label htmlFor="correo">Correo</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="telefono" placeholder="" />
                                    <label htmlFor="telefono">Teléfono</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="descripcion" style={{ height: '100px' }} defaultValue={""} />
                                    <label htmlFor="descripcion">Descripción</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary mb-3" onClick={createDoc}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

    async function createDoc() {
        const docRef = collection(db, 'contactos')
        let firstName = document.getElementById('nombres');
        let lastName = document.getElementById('apellidos');
        let correo = document.getElementById('correo');
        let telefono = document.getElementById('telefono');
        let descripcion = document.getElementById('descripcion');

        await setDoc(doc(docRef), {
            nombres: firstName.value,
            apellidos: lastName.value,
            correo: correo.value,
            telefono: telefono.value,
            descripcion: descripcion.value,
        });
        window.location.href = '/';
    }
};

export default FormContact;