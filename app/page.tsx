import Image from "next/image"
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function Home() {
  return (
    <main>
   <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row gap-2  d-flex align-items-center animate__animated animate__fadeInDown">
        <div className="col-sm text-center text-md-start mb-3 ">
          <h3 className="display-2 fw-bold ">
            Empowering Africa <br/> Through Technology
          </h3>
          <p>Driving digital transformation with innovative, secure, and scalable ICT solutions across Africa.</p>
          <Link href="/contact_us"><button className="btn p-btn">Ready To Build?</button></Link>
        </div>
        <div className="col-sm  text-center">
          <Image 
            src="https://ngratesc.sirv.com/Broadnet/105393.jpg"
            className="img-fluid ms-5 rounded" 
            width={1000} 
            height={500}
            alt="Mockup of Bleu on a phone, evolutionary Neobank"
          />
        </div>
      </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="row mb-5 gap-2 d-flex align-items-center">
        <div className="col-sm text-center text-md-start">
          <h3 className="display-5 fw-bold">ABOUT US?</h3>
          <p>
          Since its inception, Broadnet Africa has been providing total IT solutions and comprehensive support services through dedicated strategic partnerships to our clients. As an ICT solutions and services provider, with over 10 years of existence and experience serving some of the world’s foremost organizations on the African continent and an experienced technical team, Broadnet understands the growing demands of the African market.
          </p>
          <Link href="/contact_us"><button className="btn p-btn">Get In Touch</button></Link>
        </div>
        <div className="col-sm text-center">
          <Image 
            src="https://ngratesc.sirv.com/Broadnet/logo.png" 
            width={600} 
            height={650}
            className="img-fluid"
            alt="Mockup preview of Zimbabwe services online website"
          />
        </div>
      </div>
      </div>
      <div className="mb-5 container">
        <div className="text-center">
          <h3 className="display-5 fw-bold">OUR SERVICES</h3>

          <div className="row gap-4 ">
            <div className="col-sm text-center border rounded p-3">
            <h1 ><i className="bi bi-book-half"></i></h1>
              <h5 className="fw-bold">BroadTrak</h5>
              <p>
              BroadTrak, a division of Broadnet Africa, provides cutting-edge vehicle tracking and fleet management solutions. Our services include real-time fleet management, fuel monitoring, and telematics, ensuring optimal efficiency and cost control. With our vehicle tracking and recovery solutions, you can enhance security and minimize losses. Stay in control with BroadTrak’s smart mobility solutions.
              </p>
            </div>
            <div className="col-sm text-center border rounded p-3">
              <h1><i className="bi bi-pencil-square"></i></h1>
              <h5 className="fw-bold">Intactsys</h5>
              <p className="text-center">

IntactSys, a division of Broadnet Africa, specializes in DevOps and SecOps, delivering robust cybersecurity, advanced software development, and tailored business solutions. We help organizations streamline operations, enhance security, and drive digital transformation with cutting-edge technology. Build, secure, and scale with IntactSys.
              </p>
            </div>
            <div className="col-sm text-center border rounded p-3">
              <h1><i className="bi bi-git"></i></h1>
              <h5 className="fw-bold">Fortis-Comm</h5>
              <p className="text-center">

Fortis-Comm, a division of Broadnet Africa, specializes in two-way radio devices and communication solutions, offering both hardware and software sales. We provide secure, high-performance communication systems designed for businesses, emergency services, and industries that demand seamless connectivity. Stay connected with Fortis-Comm’s trusted solutions.
              </p>
            </div>
            
          </div>
        </div>
        <div className="mt-3 mb-3 text-center">
            <Link href="/contact_us"><button className="btn p-btn">Discuss Your Next Project With Us</button></Link>
        </div>
        <div className="text-center mb-5 mt-5">
          <Image src="https://ngratesc.sirv.com/Broadnet/home%20page.png" className="img-fluid" width={200} height={100} alt="Mockup preview of WLC website"/>
        </div>
      </div>
      <div className="text-center">
        <h1 className="mb-3">Our Global Partners</h1>
          <Marquee loop={0} className="gap-5 z-0">
          <div className="col-sm  me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/avigilon.png" width={40} height={40} alt="FIF logo"/>
              <p><small>Avigilon</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/checkpoint.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>Checkpoint</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/cisco.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>Cisco</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/dell.png" width={40} height={40} alt="FIF logo"/>
              <p><small>Dell</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/fortinet.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>Fortinet</small></p>

            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/hp.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>HP</small></p>

            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/hytera.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>Hytera</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/ibm.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>IBM</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/inmarsat.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>Inmarsat</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/motorola.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>Motorola</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/ntt.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>NTT</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/poly.jpeg" width={40} height={40} alt="FIF logo"/>
              <p><small>Poly</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/ruckus.png" width={100} height={40} alt="FIF logo"/>
              <p><small>Ruckus</small></p>
            </div>
            <div className="col-sm ms-5 me-5">
              <Image src="https://ngratesc.sirv.com/Broadnet/solarwinds.jpeg" width={90} height={40} alt="OFH logo"/>
              <p><small>Solarwinds</small></p>
            </div>
          
          </Marquee>
      </div>
      <div className="row mt-5 mb-5">
      <div className="text-center">
        <div >
        <Image 
          src="https://ngratesc.sirv.com/Broadnet/award.jpg" 
          width={500} 
          height={0}
          className="img-fluid rounded"
          alt="Mockup of i-Claim website"
        />
        </div>
        <div >
          <h1>Our Awards</h1>
          <p>Motorola Solutions Partner Award</p>
          <Link target="_blank" href="https://www.motorolasolutions.com/en_xu/partner-finder.html"><button className="btn p-btn">Read More</button></Link>
        </div>

      
      </div>
      <div className="col-sm">

      </div>
      </div>
      
   </main>
  );
}
