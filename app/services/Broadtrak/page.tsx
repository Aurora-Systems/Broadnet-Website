import Image from "next/image";
import Link from "next/link";

export default function BroadTrak() {
  return (
    <>
      <div className="min-vh-100">
        {/* Navigation */}

        {/* Hero Section */}
        <section>
          <div className="py-5 container">
            <div className="row align-items-center justify-content-center min-vh-75">
              <div className="col-sm">
                <h1 className="display-1 fw-bold mb-4">BroadTrak</h1>
                <h3> Smart Mobility Solutions</h3>
                <p className="lead mb-4">
                  Cutting-edge vehicle tracking and fleet management solutions
                  with real-time monitoring, fuel tracking, and advanced
                  telematics for optimal efficiency across Africa.
                </p>
              </div>
              <div className="col-sm text-center">
                <Image
                  src="https://cdn.clipond.com/Broadnet/woman-using-gps-navigation-map-digital-tablet_1016675-33.avif"
                  className="img-fluid rounded"
                  width={1000}
                  height={500}
                  alt="Mockup of Bleu on a phone, evolutionary Neobank"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Broadnet Section */}

        {/* BroadTrak Services Section */}
        <section id="services" className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold  mb-4">BroadTrak Services</h2>
                <p className="lead text-muted">
                  BroadTrak, a division of Broadnet Africa, provides
                  cutting-edge vehicle tracking and fleet management solutions.
                  Our services include real-time fleet management, fuel
                  monitoring, and telematics, ensuring optimal efficiency and
                  cost control. With our vehicle tracking and recovery
                  solutions, you can enhance security and minimize losses. Stay
                  in control with BroadTrak's smart mobility solutions.
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
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Real-time Fleet Management</h4>
                    <p className="text-muted">
                      Monitor your entire fleet in real-time with live location
                      tracking, route optimization, and instant notifications.
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
                        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Fuel Monitoring</h4>
                    <p className="text-muted">
                      Advanced fuel tracking systems to monitor consumption,
                      detect theft, and optimize fuel efficiency across your
                      fleet.
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
                        <path d="M6 1v3h4V1a1 1 0 0 1 1 1v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V2a1 1 0 0 1 1-1z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Advanced Telematics</h4>
                    <p className="text-muted">
                      Comprehensive vehicle diagnostics, driver behavior
                      analysis, and maintenance scheduling for optimal
                      performance.
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
                    <h4 className="fw-bold mb-3">Vehicle Security</h4>
                    <p className="text-muted">
                      Enhanced security features including theft alerts,
                      immobilization, and recovery services to protect your
                      assets.
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
                        viewBox="0-0 16 16"
                      >
                        <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                        <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Cost Control</h4>
                    <p className="text-muted">
                      Detailed reporting and analytics to help reduce
                      operational costs and improve overall fleet efficiency.
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
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h9V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H1a2 2 0 0 1-2-2V5h16V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6H1v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1H0V3a2 2 0 0 1 2-2h10z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Smart Mobility</h4>
                    <p className="text-muted">
                      Intelligent routing, predictive maintenance, and automated
                      reporting for next-generation fleet management.
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
                  Ready to Transform Your Fleet Management?
                </h3>
                <p className="lead mb-3">
                  Join leading organizations across Africa who trust BroadTrak
                  for their vehicle tracking and fleet management needs.
                </p>
                <Link href="/contact_us">
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
