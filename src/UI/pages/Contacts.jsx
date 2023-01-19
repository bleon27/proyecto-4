import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormContact from '../components/FormContact';
import Contact1 from '../../Img/contact/contact-us-6933645_1920.jpg';

function Contacts() {
    return (
        <div>
            <Navbar />
            <div style={{ backgroundImage: 'url(' + Contact1 + ')', backgroundPosition: 'center', backgroundSize: 'cover', padding: '10%' }}></div>
            <FormContact />
            <Footer />
        </div>
    );
};

export default Contacts;