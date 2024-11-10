import Image from "next/image";
import aboutImg from './assets/img.png';
import vector from './assets/vector.png';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-img">
            <Image
              src={aboutImg}
              alt="About Us Image"
              width={300}
              height={200}
              className="about-img-img" // Add this class to target the image
            />
          </div>
          <div className="about-text">
            <h4>ABOUT US</h4>
            <h1>What We Do?</h1>
            <p>
              Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
              In on my jointure horrible margaret suitable he followed speedily.
              Indeed vanity excuse or mr lovers of on. By offer scale an stuff.
              Blush be sorry no sight sang lose at the reachpoint.
              <br /><br />
              It is a long-established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
            <div className="stats-list">
              <ul>
                <li>
                  <h1>665+</h1>
                  <p>Global Presence</p>
                </li>
                <li className="stats-divider">
                  <Image src={vector} alt="Divider" width={3} height={50} />
                </li>
                <li className="stats">
                  <h1>58%</h1>
                  <p>Satisfaction</p>
                </li>
                <li className="stats-divider">
                  <Image src={vector} alt="Divider" width={3} height={50} />
                </li>
                <li className="stats">
                  <h1>250+</h1>
                  <p>Global Clients</p>
                </li>
              </ul>
            </div>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
