import Image from 'next/image';
import div from './assets/div.png';
import group from './assets/group.png';

export default function Service() {
  return (
    <section className="service">
      <div className="title-container">
        <div className="service-title">
          <h4>OUR SERVICES</h4>
          <h1>
            We provide IT & Business <br />
            solutions
          </h1>
          <Image src={div} alt="Divider" width={80} height={10} />
          <p>
            Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
          </p>
        </div>
      </div>

      <div className="service-container">
        <div className="service-content">
          <div className="service-box">
            <Image src={group} alt="Business Process Outsourcing" width={60} height={60} />
            <h1>Business Process Outsourcing</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="service-box">
            <Image src={group} alt="Back Office Solutions" width={60} height={60} />
            <h1>Back Office Solutions</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="service-box">
            <Image src={group} alt="Sales Outsourcing" width={60} height={60} />
            <h1>Sales outsourcing</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="service-box">
            <Image src={group} alt="Technical Resource for Hire" width={60} height={60} />
            <h1>Technical Resource for Hire</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="service-box">
            <Image src={group} alt="Appointment Scheduler" width={60} height={60} />
            <h1>Appointment Scheduler</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="service-box">
            <Image src={group} alt="Data Cleaning / Lead Generation" width={60} height={60} />
            <h1>Data Cleaning / Lead Generation</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="service-content2">
          <div className="service-box">
            <Image src={group} alt="Sales Outsourcing" width={60} height={60} />
            <h1>Sales outsourcing</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="service-box">
            <Image src={group} alt="Technical Resource for Hire" width={60} height={60} />
            <h1>Technical Resource for Hire</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
