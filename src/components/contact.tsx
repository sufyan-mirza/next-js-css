import Image from 'next/image';
import mail from './assets/mail.png';
import phone from './assets/phone.png';
import location from './assets/location.png';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-title">
              <h4>CONTACT US</h4>
              <h1>You can connect with us when need help!</h1>
            </div>

            <div className="contact-box">
              <Image src={location} alt="Office Location" width={50} height={50} />
              <div className="contact-text">
                <h4>Office Location</h4>
                <p>22 Baker Street, London,<br /> United Kingdom, W1U 3BW</p>
              </div>
            </div>

            <div className="contact-box">
              <Image src={phone} alt="Phone" width={50} height={50} />
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+92-302-2758453</p>
              </div>
            </div>

            <div className="contact-box">
              <Image src={mail} alt="Email" width={50} height={50} />
              <div className="contact-text">
                <h4>Email</h4>
                <p>info@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <h1>Lorem Ipsum</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief.</p>
              <input type="text" placeholder="Name" className="form-name" required />
              <input type="email" placeholder="Email" className="form-name" required />
              <input type="text" placeholder="Service" className="form-name" required />
              <textarea  name="message" placeholder="Message" className="form-name" required />
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
