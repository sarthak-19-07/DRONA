import React from "react";
import "./Agriculture.css";

const BASE = import.meta.env.BASE_URL;

function Agriculture() {
  return (
    <div className="agri-page">

      {/* =========================
          NAVBAR
          ========================= */}

      <nav className="agri-navbar">
        <div className="agri-nav-container">

          <a href={BASE} className="agri-logo-link">
            <img
              src={`${BASE}images/drone%20logo.png`}
              alt="DRONA"
              className="agri-logo"
            />
          </a>

          <div className="agri-nav-links">
            <a href={BASE}>Home</a>
            <a href={`${BASE}#/agriculture`} className="active">
              Agriculture
            </a>
            <a href="#services">Services</a>
            <a href="#process">How It Works</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="agri-nav-button">
            GET IN TOUCH
          </a>

        </div>
      </nav>


      {/* =========================
          HERO
          ========================= */}

      <section className="agri-hero">

        <img
          src={`${BASE}images/agri%20drone%202.png`}
          alt="Agricultural drone spraying crops"
          className="agri-hero-image"
        />

        <div className="agri-hero-overlay"></div>

        <div className="agri-hero-content">

          <div className="agri-eyebrow">
            <span></span>
            DRONA // AGRICULTURE
          </div>

          <h1>
            PRECISION
            <br />
            <strong>AGRICULTURE</strong>
          </h1>

          <p>
            Smarter farming through aerial technology.
            From precision spraying to field monitoring,
            DRONA helps farmers work faster, smarter and more efficiently.
          </p>

          <div className="agri-hero-buttons">
            <a href="#services" className="agri-primary-btn">
              EXPLORE SERVICES
            </a>

            <a href="#contact" className="agri-secondary-btn">
              CONTACT DRONA
            </a>
          </div>

        </div>

        <div className="agri-hero-info">
          <div>
            <strong>01</strong>
            <span>PRECISION</span>
          </div>

          <div>
            <strong>02</strong>
            <span>EFFICIENCY</span>
          </div>

          <div>
            <strong>03</strong>
            <span>SMART FARMING</span>
          </div>
        </div>

        <div className="agri-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* =========================
          INTRO
          ========================= */}

      <section className="agri-intro">

        <div className="agri-section-label">
          AGRICULTURE / 01
        </div>

        <div className="agri-intro-grid">

          <h2>
            FARMING
            <br />
            <span>FROM ABOVE.</span>
          </h2>

          <div className="agri-intro-text">

            <p className="agri-large-text">
              Modern agriculture needs precision, speed and better
              visibility across every acre.
            </p>

            <p>
              DRONA uses advanced drone technology to provide
              practical aerial solutions for modern farming.
              Our services are designed to reduce manual effort,
              improve field coverage and help farmers make
              better operational decisions.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
          ========================= */}

      <section className="agri-services" id="services">

        <div className="agri-section-heading">

          <div className="agri-section-label">
            AGRICULTURE / 02
          </div>

          <h2>
            OUR <span>SERVICES</span>
          </h2>

          <p>
            Drone-powered agricultural services designed to make
            field operations more precise and efficient.
          </p>

        </div>

        <div className="agri-service-grid">

          <div className="agri-service-card">
            <div className="agri-service-number">01</div>

            <div className="agri-service-icon">✦</div>

            <h3>PRECISION SPRAYING</h3>

            <p>
              Targeted aerial application of pesticides,
              fertilizers and other agricultural inputs
              across crop fields.
            </p>

            <div className="agri-service-line"></div>

            <span className="agri-service-tag">
              TARGETED APPLICATION
            </span>
          </div>


          <div className="agri-service-card">
            <div className="agri-service-number">02</div>

            <div className="agri-service-icon">◉</div>

            <h3>CROP MONITORING</h3>

            <p>
              Aerial observation of crops and fields to identify
              growth patterns, visible stress and areas that
              require attention.
            </p>

            <div className="agri-service-line"></div>

            <span className="agri-service-tag">
              FIELD VISIBILITY
            </span>
          </div>


          <div className="agri-service-card">
            <div className="agri-service-number">03</div>

            <div className="agri-service-icon">⌖</div>

            <h3>FIELD MAPPING</h3>

            <p>
              Aerial surveying and mapping to create a clearer
              understanding of agricultural land, boundaries
              and field conditions.
            </p>

            <div className="agri-service-line"></div>

            <span className="agri-service-tag">
              AERIAL SURVEY
            </span>
          </div>


          <div className="agri-service-card">
            <div className="agri-service-number">04</div>

            <div className="agri-service-icon">◇</div>

            <h3>CROP ANALYSIS</h3>

            <p>
              Aerial data collection to help identify problem
              areas and support more informed agricultural
              management.
            </p>

            <div className="agri-service-line"></div>

            <span className="agri-service-tag">
              DATA-DRIVEN FARMING
            </span>
          </div>

        </div>

      </section>


      {/* =========================
          PROCESS
          ========================= */}

      <section className="agri-process" id="process">

        <div className="agri-section-label">
          AGRICULTURE / 03
        </div>

        <div className="agri-process-heading">

          <h2>
            HOW IT
            <br />
            <span>WORKS.</span>
          </h2>

          <p>
            A simple workflow that turns aerial technology
            into practical agricultural action.
          </p>

        </div>

        <div className="agri-process-list">

          <div className="agri-process-item">
            <span>01</span>

            <div>
              <h3>PLAN</h3>
              <p>
                Understand the field, crop and required operation.
              </p>
            </div>

            <b>→</b>
          </div>


          <div className="agri-process-item">
            <span>02</span>

            <div>
              <h3>FLY</h3>
              <p>
                Deploy the drone according to the planned mission.
              </p>
            </div>

            <b>→</b>
          </div>


          <div className="agri-process-item">
            <span>03</span>

            <div>
              <h3>CAPTURE</h3>
              <p>
                Collect aerial imagery and field information.
              </p>
            </div>

            <b>→</b>
          </div>


          <div className="agri-process-item">
            <span>04</span>

            <div>
              <h3>ACT</h3>
              <p>
                Use the collected information to support precise
                agricultural operations.
              </p>
            </div>

            <b>→</b>
          </div>

        </div>

      </section>


      {/* =========================
          TECHNICAL SPECIFICATIONS
          ========================= */}

      <section className="agri-specs">

        <div className="agri-specs-header">

          <div className="agri-section-label">
            AGRICULTURE / 04
          </div>

          <div className="agri-specs-heading">

            <h2>
              DRONA <span>AGRITECH</span>
            </h2>

            <p>
              A lightweight and modular agricultural drone platform
              designed for precision farming applications.
            </p>

          </div>

        </div>


        <div className="agri-specs-grid">

          <div className="agri-spec-item">
            <span>MODEL</span>
            <strong>GA-01</strong>
          </div>

          <div className="agri-spec-item">
            <span>GROSS WEIGHT</span>
            <strong>~2.3 KG</strong>
          </div>

          <div className="agri-spec-item">
            <span>PAYLOAD CAPACITY</span>
            <strong>~0.7 KG</strong>
          </div>

          <div className="agri-spec-item">
            <span>MAX SPEED</span>
            <strong>~25 KM/H</strong>
          </div>

          <div className="agri-spec-item">
            <span>CLIMB RATE</span>
            <strong>~3 M/S</strong>
          </div>

          <div className="agri-spec-item">
            <span>TARGET ENDURANCE</span>
            <strong>15–18 MIN</strong>
          </div>

          <div className="agri-spec-item">
            <span>TARGET RANGE</span>
            <strong>~1 KM</strong>
          </div>

          <div className="agri-spec-item">
            <span>OPERATING ALTITUDE</span>
            <strong>UP TO 100 M AGL*</strong>
          </div>

          <div className="agri-spec-item">
            <span>DIMENSIONS</span>
            <strong>~500 × 500 × 250 MM</strong>
          </div>

          <div className="agri-spec-item">
            <span>STRUCTURE</span>
            <strong>LIGHTWEIGHT / MODULAR</strong>
          </div>

          <div className="agri-spec-item">
            <span>CONFIGURATION</span>
            <strong>MULTIROTOR</strong>
          </div>

          <div className="agri-spec-item">
            <span>APPLICATION</span>
            <strong>PRECISION AGRICULTURE</strong>
          </div>

        </div>


        <div className="agri-spec-note">

          <span>*</span>

          <p>
            Specifications shown are preliminary design targets and
            may vary depending on final configuration, payload and
            component selection.
          </p>

        </div>


        <div className="agri-cost">

          <div className="agri-cost-item">
            <span>ESTIMATED PROTOTYPE COST</span>
            <strong>₹8,000</strong>
          </div>

          <div className="agri-cost-item">
            <span>PLATFORM</span>
            <strong>DRONA AGRITECH</strong>
          </div>

          <div className="agri-cost-note">
            <span>NOTE</span>

            <p>
              Final cost may vary depending on components,
              payload and configuration.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          CTA
          ========================= */}

      <section className="agri-cta" id="contact">

        <div className="agri-cta-label">
          DRONA // AGRICULTURE
        </div>

        <h2>
          LET YOUR
          <br />
          <span>FIELDS TAKE FLIGHT.</span>
        </h2>

        <p>
          Ready to bring smarter aerial technology to your fields?
        </p>

        <a href="#contact" className="agri-cta-button">
          TALK TO DRONA
        </a>

      </section>


      {/* =========================
          FOOTER
          ========================= */}

      <footer className="agri-footer">

        <div className="agri-footer-top">

          <img
            src={`${BASE}images/drone%20logo.png`}
            alt="DRONA"
            className="agri-footer-logo"
          />

          <p>
            DRONE TECHNOLOGY FOR A SMARTER FUTURE
          </p>

        </div>

        <div className="agri-footer-bottom">

          <span>
            © 2026 DRONA. ALL RIGHTS RESERVED.
          </span>

          <div>
            <a href={BASE}>HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#contact">CONTACT</a>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Agriculture;
