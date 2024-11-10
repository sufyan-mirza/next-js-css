import Image from 'next/image';
import logo2 from './assets/logo2.png';
import mail1 from './assets/mail1.png';
import location1 from './assets/location1.png';
import phone1 from './assets/phone1.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-text">
            <Image src={logo2} alt="Logo" width={80} height={80} />
            <p>
              Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. 
              Distrusts delighted. Excuse few the remain highly feebly add people manner say. It high at my mind by roof.
            </p>
            <div className="footer-icon">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>

          <div className="footer-service">
            <h1>OUR SERVICES</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h1>CONTACT</h1>
            <div className="footer-box">
              <Image src={location1} alt="Location Icon" width={20} height={20} />
              <div className="footer-info">
                <p>22 Baker Street, London,<br />United Kingdom, W1U 3BW</p>
              </div>
            </div>
            <div className="footer-box">
              <Image src={phone1} alt="Phone Icon" width={20} height={20} />
              <div className="footer-info">
                <p>+92-302-2758453</p>
              </div>
            </div>
            <div className="footer-box">
              <Image src={mail1} alt="Mail Icon" width={20} height={20} />
              <div className="footer-info">
                <p>info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2022 © Design & Development by Geeks Root. All rights reserved</p>
      </div>
    </footer>
  );
}
