import Image from "next/image";
import Link from "next/link";

export default function FortisComm() {
  return (
    <>
      <div className="min-vh-100">
        {/* Navigation */}

        {/* Hero Section */}
        <section>
          <div className="py-5 container">
            <div className="row align-items-center justify-content-center min-vh-75">
              <div className="col-sm">
                <h1 className="display-1 fw-bold mb-4">Fortis-Comm</h1>
                <h3>Communication Solutions</h3>
                <p className="lead mb-4">
                  Specialized two-way radio devices and communication solutions
                  with secure, high-performance systems for businesses,
                  emergency services, and industries demanding seamless
                  connectivity across Africa.
                </p>
              </div>
              <div className="col-sm text-center">
                <Image
                  src="https://ngratesc.sirv.com/Broadnet/42735.jpg"
                  className="img-fluid rounded"
                  width={1000}
                  height={500}
                  alt="Fortis-Comm two-way radio communication solutions in action"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Broadnet Section */}

        {/* Fortis-Comm Services Section */}
        <section id="services" className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold  mb-4">
                  Fortis-Comm Services
                </h2>
                <p className="lead text-muted">
                  Fortis-Comm, a division of Broadnet Africa, specializes in
                  two-way radio devices and communication solutions, offering
                  both hardware and software sales. We provide secure,
                  high-performance communication systems designed for
                  businesses, emergency services, and industries that demand
                  seamless connectivity. Stay connected with Fortis-Comm's
                  trusted solutions.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="p_bg text-white rounded-3 d-inline-flex p-3 mb-3">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2V1zM4 3v11h8V3H4zm3 1a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V4z" />
                        <path d="M8 6a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 6z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Two-Way Radio Hardware</h4>
                    <p className="text-muted">
                      Professional-grade handheld and mobile radios with
                      superior range, durability, and crystal-clear audio
                      quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="p_bg text-white rounded-3 d-inline-flex p-3 mb-3">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866-.5l-1.732-3a.5.5 0 0 1 .866-.5l1.732 3H11.5A1.5 1.5 0 0 0 13 12V6a5 5 0 0 0-5-5z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Communication Software</h4>
                    <p className="text-muted">
                      Advanced dispatch software, fleet management platforms,
                      and communication control systems for comprehensive
                      operation management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="p_bg text-white rounded-3 d-inline-flex p-3 mb-3">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002A.274.274 0 0 1 15 13H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Emergency Services</h4>
                    <p className="text-muted">
                      Specialized communication solutions for police, fire,
                      medical, and rescue services with priority channel access
                      and emergency features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="p_bg text-white rounded-3 d-inline-flex p-3 mb-3">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Secure Communications</h4>
                    <p className="text-muted">
                      Encrypted digital radio systems with advanced security
                      protocols for confidential communications and sensitive
                      operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="p_bg text-white rounded-3 d-inline-flex p-3 mb-3">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Industrial Solutions</h4>
                    <p className="text-muted">
                      Rugged communication systems for manufacturing,
                      construction, mining, and other industrial environments
                      requiring reliable connectivity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="p_bg text-white rounded-3 d-inline-flex p-3 mb-3">
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M1.5 4A.5.5 0 0 1 2 4.5V13a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H1.5z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Technical Support</h4>
                    <p className="text-muted">
                      Comprehensive installation, maintenance, training, and
                      24/7 technical support services for all communication
                      equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 ">
          <div className="container">
            <div className="text-center">
              <div className="">
                <h3 className="display-6 fw-bold mb-3">
                  Ready to Enhance Your Communication Systems?
                </h3>
                <p className="lead mb-3">
                  Join leading organizations across Africa who trust Fortis-Comm
                  for their two-way radio and communication solution needs.
                </p>
                <Link href="/contact">
                  <button className="btn p-btn">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
      </div>
    </>
  );
}
