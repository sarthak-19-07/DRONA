import React from "react";
import "./Industry.css";

function Industry() {
  return (
    <div className="industry-page">

      {/* =========================
          NAVBAR
          ========================= */}

      <nav className="industry-navbar">
        <div className="industry-nav-container">

          <a href="/" className="industry-logo-link">
            <img
              src="/images/drone%20logo.png"
              alt="DRONA"
              className="industry-logo"
            />
          </a>

          <div className="industry-nav-links">
            <a href="/">Home</a>
            <a href="/agriculture">Agriculture</a>
            <a href="/industry" className="active">
              Industry
            </a>
            <a href="#services">Services</a>
            <a href="#process">How It Works</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="industry-nav-button">
            GET IN TOUCH
          </a>

        </div>
      </nav>


      {/* =========================
          HERO
          ========================= */}

      <section className="industry-hero">

        <img
          src="/images/inspection%20drone2.png"
          alt="Industrial drone inspection"
          className="industry-hero-image"
        />

        <div className="industry-hero-overlay"></div>

        <div className="industry-hero-grid"></div>

        <div className="industry-hero-content">

          <div className="industry-eyebrow">
            <span></span>
            DRONA // INDUSTRIAL INSPECTION
          </div>

          <h1>
            INSPECT
            <br />
            <strong>FROM ABOVE.</strong>
          </h1>

          <p>
            Smarter industrial inspection through aerial
            technology. Monitor infrastructure, identify
            potential issues and capture detailed data
            without putting people at unnecessary risk.
          </p>

          <div className="industry-hero-buttons">

            <a
              href="#services"
              className="industry-primary-btn"
            >
              EXPLORE SERVICES
            </a>

            <a
              href="#contact"
              className="industry-secondary-btn"
            >
              CONTACT DRONA
            </a>

          </div>

        </div>


        <div className="industry-hero-info">

          <div>
            <strong>01</strong>
            <span>INSPECT</span>
          </div>

          <div>
            <strong>02</strong>
            <span>ANALYSE</span>
          </div>

          <div>
            <strong>03</strong>
            <span>REPORT</span>
          </div>

        </div>


        <div className="industry-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* =========================
          INTRO
          ========================= */}

      <section className="industry-intro">

        <div className="industry-section-label">
          INDUSTRY / 01
        </div>

        <div className="industry-intro-grid">

          <h2>
            SEE WHAT
            <br />
            <span>OTHERS CAN'T.</span>
          </h2>

          <div className="industry-intro-text">

            <p className="industry-large-text">
              Industrial infrastructure demands
              constant monitoring and precise inspection.
            </p>

            <p>
              DRONA provides aerial inspection solutions
              that help businesses monitor industrial assets,
              infrastructure and difficult-to-access areas
              with greater visibility and reduced operational risk.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
          ========================= */}

      <section
        className="industry-services"
        id="services"
      >

        <div className="industry-section-heading">

          <div className="industry-section-label">
            INDUSTRY / 02
          </div>

          <h2>
            INSPECTION <span>SERVICES</span>
          </h2>

          <p>
            Aerial inspection services designed for
            industrial environments, infrastructure and
            hard-to-reach assets.
          </p>

        </div>


        <div className="industry-service-grid">


          {/* 01 */}

          <div className="industry-service-card">

            <div className="industry-service-number">
              01
            </div>

            <div className="industry-service-icon">
              ◈
            </div>

            <h3>
              INFRASTRUCTURE
              <br />
              INSPECTION
            </h3>

            <p>
              Aerial inspection of industrial structures,
              facilities and infrastructure to identify
              visible defects and areas requiring attention.
            </p>

            <div className="industry-service-line"></div>

            <span>
              STRUCTURAL VISIBILITY
            </span>

          </div>


          {/* 02 */}

          <div className="industry-service-card">

            <div className="industry-service-number">
              02
            </div>

            <div className="industry-service-icon">
              ◎
            </div>

            <h3>
              THERMAL &
              <br />
              VISUAL INSPECTION
            </h3>

            <p>
              Capture detailed visual and thermal information
              to help locate potential hotspots, abnormalities
              and maintenance concerns.
            </p>

            <div className="industry-service-line"></div>

            <span>
              DETAILED MONITORING
            </span>

          </div>


          {/* 03 */}

          <div className="industry-service-card">

            <div className="industry-service-number">
              03
            </div>

            <div className="industry-service-icon">
              ⌖
            </div>

            <h3>
              INDUSTRIAL
              <br />
              SURVEYING
            </h3>

            <p>
              Aerial surveying and mapping for industrial
              sites, construction areas and large-scale
              infrastructure projects.
            </p>

            <div className="industry-service-line"></div>

            <span>
              AERIAL MAPPING
            </span>

          </div>


          {/* 04 */}

          <div className="industry-service-card">

            <div className="industry-service-number">
              04
            </div>

            <div className="industry-service-icon">
              ◇
            </div>

            <h3>
              SITE &
              <br />
              ASSET MONITORING
            </h3>

            <p>
              Regular aerial monitoring of industrial sites
              and assets to provide updated visual information
              for operations and maintenance teams.
            </p>

            <div className="industry-service-line"></div>

            <span>
              ASSET MONITORING
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          PROCESS
          ========================= */}

      <section
        className="industry-process"
        id="process"
      >

        <div className="industry-section-label">
          INDUSTRY / 03
        </div>

        <div className="industry-process-heading">

          <h2>
            INSPECTION
            <br />
            <span>PROCESS.</span>
          </h2>

          <p>
            A structured aerial workflow designed to
            capture useful information while minimizing
            unnecessary exposure to hazardous areas.
          </p>

        </div>


        <div className="industry-process-list">

          <div className="industry-process-item">

            <span>01</span>

            <div>
              <h3>PLAN</h3>

              <p>
                Understand the asset, site conditions
                and inspection requirements.
              </p>
            </div>

            <b>→</b>

          </div>


          <div className="industry-process-item">

            <span>02</span>

            <div>
              <h3>FLY</h3>

              <p>
                Execute the planned drone mission
                around the inspection area.
              </p>
            </div>

            <b>→</b>

          </div>


          <div className="industry-process-item">

            <span>03</span>

            <div>
              <h3>CAPTURE</h3>

              <p>
                Collect high-quality aerial imagery
                and inspection data.
              </p>
            </div>

            <b>→</b>

          </div>


          <div className="industry-process-item">

            <span>04</span>

            <div>
              <h3>REPORT</h3>

              <p>
                Organize findings into useful visual
                information for inspection and maintenance.
              </p>
            </div>

            <b>→</b>

          </div>

        </div>
      </section>


      {/* =========================
          TECHNICAL SPECIFICATIONS
          ========================= */}

      <section className="industry-specs">

        <div className="industry-specs-header">

          <div className="industry-section-label">
            INDUSTRY / 04
          </div>

          <div className="industry-specs-heading">

            <h2>
              DRONA <span>INSPECT</span>
            </h2>

            <p>
              A lightweight and modular inspection drone platform
              designed for visual inspection, surveying and
              hard-to-reach industrial environments.
            </p>

          </div>

        </div>


        {/* SPECIFICATION GRID */}

        <div className="industry-specs-grid">

          <div className="industry-spec-item">
            <span>MODEL</span>
            <strong>IN-01</strong>
          </div>

          <div className="industry-spec-item">
            <span>GROSS WEIGHT</span>
            <strong>~2.1 KG</strong>
          </div>

          <div className="industry-spec-item">
            <span>PAYLOAD CAPACITY</span>
            <strong>~0.5 KG</strong>
          </div>

          <div className="industry-spec-item">
            <span>DIMENSIONS</span>
            <strong>~450 × 450 × 220 MM</strong>
          </div>

          <div className="industry-spec-item">
            <span>MAX SPEED</span>
            <strong>~35 KM/H</strong>
          </div>

          <div className="industry-spec-item">
            <span>CLIMB RATE</span>
            <strong>~4 M/S</strong>
          </div>

          <div className="industry-spec-item">
            <span>TARGET ENDURANCE</span>
            <strong>18–20 MIN</strong>
          </div>

          <div className="industry-spec-item">
            <span>TARGET RANGE</span>
            <strong>~1.5 KM</strong>
          </div>

          <div className="industry-spec-item">
            <span>OPERATING ALTITUDE</span>
            <strong>UP TO 100 M AGL*</strong>
          </div>

          <div className="industry-spec-item">
            <span>STRUCTURE</span>
            <strong>LIGHTWEIGHT / MODULAR</strong>
          </div>

          <div className="industry-spec-item">
            <span>CONFIGURATION</span>
            <strong>MULTIROTOR</strong>
          </div>

          <div className="industry-spec-item">
            <span>NAVIGATION</span>
            <strong>GPS-ASSISTED</strong>
          </div>

          <div className="industry-spec-item">
            <span>FLIGHT MODES</span>
            <strong>MANUAL / ASSISTED</strong>
          </div>

          <div className="industry-spec-item">
            <span>PRIMARY CAMERA</span>
            <strong>RGB INSPECTION</strong>
          </div>

          <div className="industry-spec-item">
            <span>CAMERA MOUNT</span>
            <strong>STABILIZED / GIMBAL</strong>
          </div>

          <div className="industry-spec-item">
            <span>LIVE VIDEO</span>
            <strong>SUPPORTED*</strong>
          </div>

          <div className="industry-spec-item">
            <span>RETURN TO HOME</span>
            <strong>SUPPORTED*</strong>
          </div>

          <div className="industry-spec-item">
            <span>BATTERY</span>
            <strong>REMOVABLE LI-PO</strong>
          </div>

        </div>


        {/* DISCLAIMER */}

        <div className="industry-spec-note">

          <span>*</span>

          <p>
            Specifications shown are preliminary design targets and
            may vary depending on final configuration, payload and
            component selection. Features marked with * are planned
            system capabilities and subject to final implementation.
          </p>

        </div>


        {/* ESTIMATED PROTOTYPE COST */}

        <div className="industry-cost">

          <div className="industry-cost-item">

            <span>ESTIMATED PROTOTYPE COST</span>

            <strong>₹9,000</strong>

          </div>


          <div className="industry-cost-item">

            <span>PLATFORM</span>

            <strong>DRONA INSPECT</strong>

          </div>


          <div className="industry-cost-note">

            <span>NOTE</span>

            <p>
              Final cost may vary depending on components,
              payload and configuration.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          APPLICATIONS
          ========================= */}

      <section className="industry-applications">

        <div className="industry-applications-image">

          <img
            src="/images/inspection%20drone2.png"
            alt="Drone inspecting industrial facility"
          />

        </div>


        <div className="industry-applications-content">

          <div className="industry-section-label">
            INDUSTRY / 05
          </div>

          <h2>
            BUILT FOR
            <br />
            <span>COMPLEX SITES.</span>
          </h2>

          <p>
            Drone inspection can provide a safer and more
            efficient way to observe areas that may be
            difficult, costly or time-consuming to access
            using conventional methods.
          </p>


          <div className="industry-application-list">

            <div>
              <strong>01</strong>
              <span>POWER & ENERGY FACILITIES</span>
            </div>

            <div>
              <strong>02</strong>
              <span>FACTORIES & INDUSTRIAL PLANTS</span>
            </div>

            <div>
              <strong>03</strong>
              <span>CONSTRUCTION SITES</span>
            </div>

            <div>
              <strong>04</strong>
              <span>INFRASTRUCTURE & LARGE ASSETS</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WHY DRONA
          ========================= */}

      <section className="industry-why">

        <div>

          <div className="industry-section-label">
            INDUSTRY / 06
          </div>

          <h2>
            WHY
            <br />
            <span>DRONA?</span>
          </h2>

        </div>


        <div className="industry-why-grid">

          <div>
            <strong>01</strong>

            <h3>REDUCED RISK</h3>

            <p>
              Use aerial systems to observe difficult
              areas while reducing unnecessary human exposure.
            </p>
          </div>


          <div>
            <strong>02</strong>

            <h3>FASTER INSPECTION</h3>

            <p>
              Capture large areas and complex structures
              without relying entirely on manual inspection.
            </p>
          </div>


          <div>
            <strong>03</strong>

            <h3>BETTER VISIBILITY</h3>

            <p>
              Get an aerial perspective that helps teams
              understand site and asset conditions.
            </p>
          </div>


          <div>
            <strong>04</strong>

            <h3>REPEATABLE DATA</h3>

            <p>
              Repeat aerial missions to create updated
              visual records over time.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          CTA
          ========================= */}

      <section
        className="industry-cta"
        id="contact"
      >

        <div className="industry-cta-label">
          DRONA // INDUSTRIAL INSPECTION
        </div>

        <h2>
          INSPECT
          <br />
          <span>BEYOND LIMITS.</span>
        </h2>

        <p>
          Bring aerial intelligence to your next
          inspection project.
        </p>

        <a
          href="/"
          className="industry-cta-button"
        >
          TALK TO DRONA
        </a>

      </section>


      {/* =========================
          FOOTER
          ========================= */}

      <footer className="industry-footer">

        <div className="industry-footer-top">

          <img
            src="/images/drone%20logo.png"
            alt="DRONA"
            className="industry-footer-logo"
          />

          <p>
            DRONE TECHNOLOGY FOR A SMARTER FUTURE
          </p>

        </div>


        <div className="industry-footer-bottom">

          <span>
            © 2026 DRONA. ALL RIGHTS RESERVED.
          </span>

          <div>
            <a href="/">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#contact">CONTACT</a>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Industry;