import Image from "next/image";
import bgImage from './assets/bg.jpg'
export default function Banner() {
    return (
      <div>
        <section className="banner">
            <Image 
            src={bgImage}
            width={100}
            height={100}
            alt="1"
            className="banner-img"
            ></Image>
          <div className="banner-container">
            <div className="banner-content">
              <div className="banner-text">
                <h4>FOR MILLIONS OF USERS</h4>
                <h1>
                  Power Digital <br />
                  IT Solution Company
                </h1>
                <p>
                  Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving
                  sportsmen do in listening.
                </p>
                <div className="get-btn">
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#get-started">GET STARTED</a>
                </div>
              </div>
  
              <div className="banner-form">
                <form id="myform">
                  <h1>Lorem Ipsum</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief.</p>
                  <input type="text" placeholder="Name" className="form-name" id="name" />
                  <span id="nameError" className="error"></span>
                  <input type="email" placeholder="Email" className="form-name" id="email" />
                  <span id="emailError" className="error"></span>
                  <input type="text" placeholder="Service" className="form-name" id="service" />
                  <span id="serviceError" className="error"></span>
                  <textarea name="message" placeholder="Message" className="form-name" id="message" />
                  <span id="messageError" className="error"></span>
                  <button type="submit">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
