import React, { useEffect, useState } from "react";
import "./App.css";
import Agriculture from "./Agriculture";
import Industry from "./Industry";
import Photography from "./Photography";
import About from "./About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState(window.location.hash);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (route === "#/agriculture") {
    return <Agriculture />;
  }

  if (route === "#/industry") {
    return <Industry />;
  }

  if (route === "#/photography") {
    return <Photography />;
  }

  if (route === "#/about") {
    return <About />;
  }
}
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo-link" onClick={closeMenu}>
            <img
src="/images/drone%20logo.png"              alt="DRONA"
              className="logo"
            />
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
<a href="/about" onClick={closeMenu}>About</a>            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="#technology" onClick={closeMenu}>Technology</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <main>

        <section className="hero">

  <div className="hero-grid"></div>

  <div className="hero-glow hero-glow-main"></div>
  <div className="hero-glow hero-glow-small"></div>

  <div className="hero-content">

    <div className="hero-eyebrow">
      <span className="eyebrow-line"></span>
      NEXT GENERATION AERIAL TECHNOLOGY
    </div>

    <h1>
      TECHNOLOGY
      <span>THAT TAKES</span>
      FLIGHT.
    </h1>

    <p className="hero-description">
      Intelligent drone solutions engineered for
      agriculture, inspection, imaging and the
      industries of tomorrow.
    </p>

    <div className="hero-actions">
      <a href="#products" className="btn btn-primary">
        EXPLORE DRONES
        <span>↗</span>
      </a>

      <a href="#contact" className="btn btn-outline">
        TALK TO US
      </a>
    </div>

    <div className="hero-meta">

      <div>
        <span>01</span>
        AUTONOMOUS
      </div>

      <div>
        <span>02</span>
        PRECISION
      </div>

      <div>
        <span>03</span>
        INTELLIGENCE
      </div>

    </div>

  </div>


  <div className="hero-visual">

  {/* Orange glow */}
  <div className="hero-drone-glow"></div>

  {/* Technical rings */}
  <div className="hero-ring hero-ring-1"></div>
  <div className="hero-ring hero-ring-2"></div>
  <div className="hero-ring hero-ring-3"></div>

  {/* 3D DRONA */}
  <div className="hero-drone-wrap">

    <img
      src="/images/website%20background.png"
      alt="DRONA 3D Drone"
      className="hero-drone-3d"
    />

  </div>

  {/* Technical labels */}

  <div className="hero-tech-label label-top">
    UAV / 04K
  </div>

  <div className="hero-tech-label label-right">
    PRECISION
    <br />
    FLIGHT SYSTEM
  </div>

  <div className="hero-tech-label label-bottom">
    DRONA // INDIA
  </div>

  {/* HUD */}

  <div className="hero-hud">

    <div>
      <strong>01</strong>
      <span>MONITOR</span>
    </div>

    <div>
      <strong>02</strong>
      <span>MAP</span>
    </div>

    <div>
      <strong>03</strong>
      <span>ANALYSE</span>
    </div>

  </div>

</div>


  <div className="hero-scroll">
    <span></span>
    SCROLL TO EXPLORE
  </div>

</section>


        {/* STATS */}
        <section className="stats">

          <div className="stat">
            <strong>01</strong>
            <span>INNOVATION</span>
          </div>

          <div className="stat">
            <strong>02</strong>
            <span>PRECISION</span>
          </div>

          <div className="stat">
            <strong>03</strong>
            <span>RELIABILITY</span>
          </div>

          <div className="stat">
            <strong>04</strong>
            <span>ACCESSIBILITY</span>
          </div>

        </section>


        {/* ABOUT */}
        <section id="about" className="about section">

          <div className="section-label">
            01 / ABOUT DRONA
          </div>

          <div className="about-grid">

            <div>
              <h2>
                WE DON'T JUST
                <br />
                BUILD DRONES.
              </h2>
            </div>

            <div className="about-text">

              <h3>
                WE BUILD
                <br />
                <span>POSSIBILITIES.</span>
              </h3>

              <p>
                DRONA is a technology-driven drone venture focused
                on developing accessible, reliable and application-
                specific aerial systems.
              </p>

              <p>
                From agriculture and inspection to photography and
                intelligent monitoring, we aim to make aerial
                technology useful for real-world problems.
              </p>

<a href="#/about" className="text-link">  Discover DRONA →
</a>

            </div>

          </div>

        </section>


        {/* PRODUCTS */}
        <section id="products" className="products section">

          <div className="section-heading">

            <div className="section-label">
              02 / OUR PRODUCTS
            </div>

            <h2>
              BUILT FOR THE SKY.
              <br />
              <span>DESIGNED FOR REAL LIFE.</span>
            </h2>

            <p>
              Purpose-built aerial systems for different industries,
              environments and applications.
            </p>

          </div>


          <div className="product-grid">

          {/* PRODUCT 1 */}
<article
  className="product-card"
  onClick={() => {
    window.location.assign("/agriculture");
  }}
  style={{ cursor: "pointer" }}
>
  <div className="product-image">

    <img
      src="/images/agri%20drone.jpg"
      alt="DRONA Agriculture Drone"
    />

    <div className="product-number">01</div>

    <div className="product-tag">
      AGRITECH
    </div>

  </div>

  <div className="product-info">

    <span>AGRICULTURE</span>

    <h3>
      Smart Agriculture
      <br />
      Drone
    </h3>

    <p>
      Designed for crop monitoring, agricultural
      observation and precision farming applications.
    </p>

    <span className="product-link">
      DISCUSS YOUR REQUIREMENT →
    </span>

  </div>

</article>

           {/* PRODUCT 2 */}
<article
  className="product-card"
  onClick={() => {
    window.location.assign("/industry");
  }}
  style={{ cursor: "pointer" }}
>
              <div className="product-image">
                <img
                  src="/images/inspection%20drone.jpg"
                  alt="DRONA Inspection Drone"
                />

                <div className="product-number">02</div>

                <div className="product-tag">
                  INSPECT
                </div>
              </div>

              <div className="product-info">

                <span>INSPECTION</span>

              <h3>
               Industrial
                  <br />
                  Inspection Drone
                </h3>

                <p>
                  Aerial inspection solutions for infrastructure,
                  industrial environments and difficult locations.
                </p>

                <a href="#contact">
                  DISCUSS YOUR REQUIREMENT →
                </a>

              </div>

            </article>


            {/* PRODUCT 3 */}
<article
  className="product-card"
  onClick={() => {
    window.location.assign("/photography");
  }}
  style={{ cursor: "pointer" }}
>
              <div className="product-image">
                <img
                  src="/images/photo%20drone.jpg"
                  alt="DRONA Photography Drone"
                />

                <div className="product-number">03</div>

                <div className="product-tag">
                  VISION
                </div>

              </div>

              <div className="product-info">

                <span>PHOTOGRAPHY</span>

                <h3>
                  Aerial
                  <br />
                  Photography Drone
                </h3>

                <p>
                  Capture aerial images and videos from perspectives
                  traditional cameras cannot reach.
                </p>

                <a
  href="#contact"
  onClick={(e) => e.stopPropagation()}
>
  DISCUSS YOUR REQUIREMENT →
</a>
              </div>

            </article>

          </div>

        </section>


        {/* TECHNOLOGY */}
        <section id="technology" className="technology section">

          <div className="technology-header">

            <div className="section-label">
              03 / TECHNOLOGY
            </div>

            <h2>
              INTELLIGENCE
              <br />
              <span>IN THE AIR.</span>
            </h2>

            <p>
              We combine hardware, software and intelligent systems
              to create practical aerial solutions.
            </p>

          </div>


          <div className="technology-grid">

            <div className="tech-card">
              <span>01</span>
              <div className="tech-icon">✦</div>
              <h3>SMART FLIGHT</h3>
              <p>
                Intelligent flight systems designed for stable,
                controlled and dependable operation.
              </p>
            </div>

            <div className="tech-card">
              <span>02</span>
              <div className="tech-icon">◎</div>
              <h3>PRECISION SENSING</h3>
              <p>
                Sensors and data collection systems that help
                drones understand their environment.
              </p>
            </div>

            <div className="tech-card">
              <span>03</span>
              <div className="tech-icon">◇</div>
              <h3>AI & VISION</h3>
              <p>
                Exploring computer vision and intelligent analysis
                for next-generation drone applications.
              </p>
            </div>

            <div className="tech-card">
              <span>04</span>
              <div className="tech-icon">∞</div>
              <h3>MODULAR DESIGN</h3>
              <p>
                Flexible systems that can be adapted for different
                industries and mission requirements.
              </p>
            </div>

          </div>

        </section>


        {/* SOLUTIONS */}
        <section id="solutions" className="solutions section">

          <div className="section-heading">

            <div className="section-label">
              04 / SOLUTIONS
            </div>

            <h2>
              ONE TECHNOLOGY.
              <br />
              <span>MANY POSSIBILITIES.</span>
            </h2>

          </div>


          <div className="solution-list">

            <div className="solution">
              <span>01</span>
              <h3>AGRICULTURE</h3>
              <p>Crop monitoring & precision farming</p>
              <b>↗</b>
            </div>

            <div className="solution">
              <span>02</span>
              <h3>INSPECTION</h3>
              <p>Infrastructure & industrial inspection</p>
              <b>↗</b>
            </div>

            <div className="solution">
              <span>03</span>
              <h3>PHOTOGRAPHY</h3>
              <p>Aerial photography & videography</p>
              <b>↗</b>
            </div>

            <div className="solution">
              <span>04</span>
              <h3>SURVEILLANCE</h3>
              <p>Monitoring large and difficult areas</p>
              <b>↗</b>
            </div>

            <div className="solution">
              <span>05</span>
              <h3>EMERGENCY SUPPORT</h3>
              <p>Aerial assistance during emergencies</p>
              <b>↗</b>
            </div>

            <div className="solution">
              <span>06</span>
              <h3>EDUCATION</h3>
              <p>Learning & experimenting with drones</p>
              <b>↗</b>
            </div>

          </div>

        </section>
{/* WHY DRONA */}
<section className="why" id="why-drona">

  <div className="why-main">

    {/* LEFT CONTENT */}
    <div className="why-content">

      <div className="section-label">
        05 / WHY DRONA
      </div>

      <h2>
        AFFORDABLE.
        <br />
        LIGHTWEIGHT.
        <br />
        <span>CUSTOMIZABLE.</span>
      </h2>

      <div className="why-intro">

        <p className="large">
          ENGINEERED
          <br />
          FOR YOUR MISSION.
        </p>

        <p>
          DRONA focuses on building lightweight, modular and
          application-specific drones using practical engineering
          and cost-conscious design.
        </p>

      </div>

    </div>


    {/* 3D PRINTED DRONE */}
    <div className="why-drone">

      <div className="why-drone-glow"></div>

      <img
        src="/images/3d%20printed%20drone.png"
        alt="DRONA 3D Printed Drone"
      />

      <div className="why-drone-label">
        3D PRINTED
        <span>DRONA BASE PLATFORM</span>
      </div>

    </div>

  </div>


  {/* WHY DRONA FEATURES */}
  <div className="why-features">

    {/* FEATURE 1 */}
    <div className="why-feature">

      <span>01</span>

      <div>
        <h3>3D-PRINTED COMPONENTS</h3>

        <p>
          Lightweight and customizable components help reduce
          prototyping and manufacturing costs.
        </p>
      </div>

    </div>


    {/* FEATURE 2 */}
    <div className="why-feature">

      <span>02</span>

      <div>
        <h3>LIGHTWEIGHT DESIGN</h3>

        <p>
          Optimized structures reduce unnecessary weight and
          improve overall flight efficiency.
        </p>
      </div>

    </div>


    {/* FEATURE 3 */}
    <div className="why-feature">

      <span>03</span>

      <div>
        <h3>CUSTOMIZABLE & MODULAR</h3>

        <p>
          Configure the drone for different applications with
          interchangeable components and mission-specific payloads.
        </p>
      </div>

    </div>


    {/* FEATURE 4 */}
    <div className="why-feature">

      <span>04</span>

      <div>
        <h3>EASY TO MAINTAIN</h3>

        <p>
          Replaceable and accessible components make repairs,
          upgrades and modifications simpler.
        </p>
      </div>

    </div>

  </div>


  {/* COMING SOON */}
  <div className="why-coming-soon">

    <div className="coming-label">
      <span className="coming-dot"></span>
      WHAT'S NEXT
    </div>

    <div className="coming-content">

      <div>
        <h3>MORE FROM DRONA.</h3>

        <p>
          We're continuously developing new drone configurations,
          technologies and application-specific solutions.
        </p>
      </div>

      <strong>
        COMING
        <br />
        SOON.
      </strong>

    </div>

  </div>


  {/* BOTTOM */}
  <div className="why-bottom">

    <div>
      <span>ONE PLATFORM.</span>
      <strong>MULTIPLE POSSIBILITIES.</strong>
    </div>

    <div className="why-products">

      <span>AGRITECH</span>
      <b>→</b>

      <span>INSPECT</span>
      <b>→</b>

      <span>VISION</span>

    </div>

  </div>

</section>

        {/* CONTACT */}
        <section id="contact" className="contact section">

          <div className="contact-left">

            <div className="section-label">
              06 / CONTACT
            </div>

            <h2>
              READY TO
              <br />
              <span>TAKE FLIGHT?</span>
            </h2>

            <p>
              Have a project, requirement or idea?
              Let's explore what DRONA can build together.
            </p>

          </div>

<div className="contact-card">

  <div className="contact-item">
    <span>EMAIL</span>
    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dronatech.team@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  dronatech.team@gmail.com
</a>
  </div>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dronatech.team@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-btn"
>
  START A CONVERSATION →
</a>

</div>
          

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="footer-top">

          <img
src="/images/drone%20logo.png"            alt="DRONA"
            className="footer-logo"
          />

          <p>
            TECHNOLOGY THAT TAKES FLIGHT.
          </p>

        </div>

        <div className="footer-bottom">

          <span>© 2026 DRONA</span>

          <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;
