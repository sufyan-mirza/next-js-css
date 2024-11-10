import Image from 'next/image';
import div from './assets/div.png';
import logo1 from './assets/logo1.png';
import web from './assets/web.png';
import app from './assets/app.png';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="title-container">
        <div className="portfolio-title">
          <h4>PORTFOLIO</h4>
          <h1>Actionable insights.<br />Real-world experience</h1>
          <Image src={div} alt="Divider" width={80} height={10} />
          <p>Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-content">
          <div className="portfolio-box">
            <Image src={logo1} alt="Web Designing" width={400} height={250} />
            <div className="portfolio-text">
              <h4>Web Designing</h4>
            </div>
          </div>
          <div className="portfolio-box">
            <Image src={app} alt="App Development" width={400} height={250} />
            <div className="portfolio-text1">
              <h4>App Development</h4>
            </div>
          </div>
          <div className="portfolio-box">
            <Image src={web} alt="Web Designing" width={400} height={250} />
            <div className="portfolio-text">
              <h4>Web Designing</h4>
            </div>
          </div>
          <div className="portfolio-box">
            <Image src={logo1} alt="Web Designing" width={400} height={250} />
            <div className="portfolio-text">
              <h4>Web Designing</h4>
            </div>
          </div>
          <div className="portfolio-box">
            <Image src={app} alt="App Development" width={400} height={250} />
            <div className="portfolio-text1">
              <h4>App Development</h4>
            </div>
          </div>
          <div className="portfolio-box">
            <Image src={web} alt="Web Designing" width={400} height={250} />
            <div className="portfolio-text">
              <h4>Web Designing</h4>
            </div>
          </div>
        </div>

        <div className="portfolio-btn">
          <button>VIEW ALL</button>
        </div>
      </div>
    </section>
  );
}
