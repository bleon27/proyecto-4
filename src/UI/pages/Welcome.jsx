import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slide from '../components/Slide';
import FormContact from '../components/FormContact';

function Welcome() {
    return (
        <div>
            <Navbar />
            <Slide />
            <FormContact />
            <Footer />
        </div>
    );
};

export default Welcome;