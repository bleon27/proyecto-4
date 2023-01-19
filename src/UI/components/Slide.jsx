import React, { useState, useEffect } from 'react';
import { db } from '../../assets/firebase';
import { collection, getDocs, onSnapshot, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore/lite';

const Slide = () => {
    const [slides, setSlides] = useState('');

    //obtener
    async function getData() {
        const docRef = collection(db, 'slides');
        const docSnap = await getDocs(docRef);
        const docList = docSnap.docs.map(doc => doc.data());
        setSlides(docList);
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    slides && slides.map((slide, index) => {
                        return (
                            <div key={index} className="carousel-item active" data-bs-interval={3000}>
                                <img src={slide.img} className="d-block w-100" alt="..." style={{ maxHeight: '800px' }} />
                                <div className="carousel-caption" style={{ left: '0', right: '0', bottom: '50%', transform: 'translateY(50%)', background: 'rgba(248, 249, 250, 0.7)' }}>
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slide;