import React from 'react';
import CallCenter from '../../Img/contact/465016-PG301I-785.jpg';



class FormContact extends React.Component {
    render() {
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
                                    <h3>Escibenos y realiza tu pedido</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit sapiente id perferendis nostrum numquam laborum adipisci pariatur totam, minima nam iure asperiores ducimus hic tempore autem saepe exercitationem quisquam dolor?</p>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="" />
                                        <label htmlFor="floatingInput">Nombre</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="" />
                                        <label htmlFor="floatingInput">Correo</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="" />
                                        <label htmlFor="floatingInput">Telefono</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="" />
                                        <label htmlFor="floatingInput">Direccion</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} defaultValue={""} />
                                        <label htmlFor="floatingTextarea2">Pedido</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary mb-3">Confirmar Pedido</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default FormContact;