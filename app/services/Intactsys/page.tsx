import Image from "next/image";
import Link from "next/link";

export default function IntactSys() {
  return (
    <>
      <div className="min-vh-100">
        {/* Navigation */}

        {/* Hero Section */}
        <section>
          <div className="py-5 container">
            <div className="row align-items-center justify-content-center min-vh-75">
              <div className="col-sm">
                <h1 className="display-1 fw-bold mb-4">IntactSys</h1>
                <h3> DevOps & SecOps Solutions</h3>
                <p className="lead mb-4">
                  Specialized cybersecurity, advanced software development, and
                  tailored business solutions with cutting-edge DevOps and
                  SecOps practices for digital transformation across Africa.
                </p>
              </div>
              <div className="col-sm text-center">
                <Image
                  src="https://ngratesc.sirv.com/Broadnet/122595.jpg"
                  className="img-fluid rounded"
                  width={1000}
                  height={500}
                  alt="IntactSys DevOps and SecOps team working on cybersecurity solutions"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Broadnet Section */}

        {/* IntactSys Services Section */}
        <section id="services" className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold  mb-4">IntactSys Services</h2>
                <p className="lead text-muted">
                  IntactSys, a division of Broadnet Africa, specializes in
                  DevOps and SecOps, delivering robust cybersecurity, advanced
                  software development, and tailored business solutions. We help
                  organizations streamline operations, enhance security, and
                  drive digital transformation with cutting-edge technology.
                  Build, secure, and scale with IntactSys.
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
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">DevOps Engineering</h4>
                    <p className="text-muted">
                      Streamline your development lifecycle with automated CI/CD
                      pipelines, infrastructure as code, and container
                      orchestration.
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
                    <h4 className="fw-bold mb-3">Cybersecurity Solutions</h4>
                    <p className="text-muted">
                      Comprehensive security assessments, threat detection,
                      vulnerability management, and incident response services.
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
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">SecOps Integration</h4>
                    <p className="text-muted">
                      Security operations that integrate seamlessly with your
                      development workflow for continuous security monitoring.
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
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Software Development</h4>
                    <p className="text-muted">
                      Custom software solutions, API development, microservices
                      architecture, and cloud-native application development.
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
                        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v4A1.5 1.5 0 0 0 1.5 7h13A1.5 1.5 0 0 0 16 5.5v-4A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 2.5 2zm6.5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 6 2h2.5a.5.5 0 0 1 .5.5zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm0 1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Cloud Infrastructure</h4>
                    <p className="text-muted">
                      Cloud migration, infrastructure automation, scalable
                      architectures, and multi-cloud deployment strategies.
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
                        <path d="M8.235 1.559a.5.5 0 0 0-.47 0L1.732 4.628a.5.5 0 0 0 0 .9l6.033 3.069a.5.5 0 0 0 .47 0L14.268 5.528a.5.5 0 0 0 0-.9L8.235 1.56zM7.5 9.73l-6.026-3.07v4.814a.5.5 0 0 0 .248.434L7.5 14.795V9.73zm1 5.065l5.778-2.887a.5.5 0 0 0 .248-.434V6.66L8.5 9.73v5.065z" />
                      </svg>
                    </div>
                    <h4 className="fw-bold mb-3">Digital Transformation</h4>
                    <p className="text-muted">
                      End-to-end digital transformation consulting, process
                      automation, and technology modernization strategies.
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
                  Ready to Secure and Scale Your Operations?
                </h3>
                <p className="lead mb-3">
                  Join leading organizations across Africa who trust IntactSys
                  for their DevOps, SecOps, and digital transformation needs.
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
