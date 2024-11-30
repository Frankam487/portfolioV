
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      {/* Image au centre */}
      <img
        src="https://via.placeholder.com/300"  // Remplace par ton image
        alt="Mon Image"
        className="img-fluid mb-4"  // Utilisation de Bootstrap pour rendre l'image responsive
      />

      {/* Texte sous l'image */}
      <h2 className="text-center mb-4">Bienvenue sur ma page !</h2>

      {/* Icônes de réseaux sociaux */}
      <div className="d-flex justify-content-center">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default Home;
