import ContactForm from '../components/contacto/ContactForm';
import FindUs from '../components/contacto/FindUs';
import Footer from '../components/otros/Footer';
import Navbar from '../components/otros/Navbar';

function Contacto() {
  return (
    <>
      <Navbar />
      <FindUs />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contacto;
