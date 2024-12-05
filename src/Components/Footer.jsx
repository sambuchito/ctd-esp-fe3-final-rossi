import { useDentistStates } from "./utils/global.context";

const Footer = () => {

  const {state} = useDentistStates();


  return (
    <footer className={state.theme === "dark" ? "dark" : ""}>
      <div className="footer-content">
        <p>Powered by</p>
        <img src={state.theme === "dark" ? "/images/DH2.png" : "/images/DH.png"} alt="DH-logo" />
      </div>
      <div className="social-icons">
        <img src="/images/ico-facebook.png" alt="Facebook" />
        <img src="/images/ico-instagram.png" alt="Instagram" />
        <img src="/images/ico-tiktok.png" alt="TikTok" />
        <img src="/images/ico-whatsapp.png" alt="WhatsApp" />
      </div>
    </footer>
  );
};

export default Footer;