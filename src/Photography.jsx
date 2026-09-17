import React from "react";
import "./Photography.css";

const BASE = import.meta.env.BASE_URL;

function Photography() {
  return (
    <div className="photo-page">

      {/* =========================
          NAVBAR
          ========================= */}

      <nav className="photo-navbar">
        <div className="photo-nav-container">

          <a href={BASE} className="photo-logo-link">
            <img
              src={`${BASE}images/drone%20logo.png`}
              alt="DRONA"
              className="photo-logo"
            />
          </a>

          <div className="photo-nav-links">

            <a href={BASE}>Home</a>

            <a href={`${BASE}#/agriculture`}>
              Agriculture
            </a>

            <a href={`${BASE}#/industry`}>
              Industry
            </a>

            <a
              href={`${BASE}#/photography`}
              className="active"
            >
              Photography
            </a>

            <a href="#services">Services</a>
            <a href="#contact">Contact</a>

          </div>

          <a href="#contact" className="photo-nav-button">
            GET IN TOUCH
          </a>

        </div>
      </nav>


      {/* =========================
          HERO
          ========================= */}

      <section className="photo-hero">

        <img
          src={`${BASE}images/photo%20drone2.png`}
          alt="DRONA aerial photography"
          className="photo-hero-image"
        />

        <div className="photo-hero-overlay"></div>

        <div className="photo-hero-grid"></div>

        <div className="photo-hero-content">

          <div className="photo-eyebrow">
            <span></span>
            DRONA // AERIAL PHOTOGRAPHY
          </div>

          <h1>
            SEE THE
            <br />
            <strong>WORLD DIFFERENTLY.</strong>
          </h1>

          <p>
            Capture breathtaking perspectives from the sky.
            DRONA brings aerial photography and cinematic
            drone videography to projects that deserve
            a view beyond the ordinary.
          </p>

          <div className="photo-hero-buttons">

            <a href="#services" className="photo-primary-btn">
              EXPLORE SERVICES
            </a>

            <a href="#contact" className="photo-secondary-btn">
              BOOK A SHOOT
            </a>

          </div>

        </div>


        <div className="photo-hero-info">

          <div>
            <strong>01</strong>
            <span>CAPTURE</span>
          </div>

          <div>
            <strong>02</strong>
            <span>CREATE</span>
          </div>

          <div>
            <strong>03</strong>
            <span>DELIVER</span>
          </div>

        </div>


        <div className="photo-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* =========================
          INTRO
          ========================= */}

      <section className="photo-intro">

        <div className="photo-section-label">
          PHOTOGRAPHY / 01
        </div>

        <div className="photo-intro-grid">

          <h2>
            PERSPECTIVES
            <br />
            <span>ABOVE ORDINARY.</span>
          </h2>

          <div className="photo-intro-text">

            <p className="photo-large-text">
              Some moments deserve to be seen
              from a completely different angle.
            </p>

            <p>
              DRONA uses aerial platforms to capture
              landscapes, properties, events and
              commercial projects from perspectives
              that traditional cameras simply cannot reach.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
          ========================= */}

      <section className="photo-services" id="services">

        <div className="photo-section-heading">

          <div className="photo-section-label">
            PHOTOGRAPHY / 02
          </div>

          <h2>
            OUR <span>SERVICES</span>
          </h2>

          <p>
            Professional aerial imaging solutions for
            creative, commercial and promotional projects.
          </p>

        </div>


        <div className="photo-service-grid">

          <div className="photo-service-card">

            <div className="photo-service-number">
              01
            </div>

            <div className="photo-service-icon">
              ◉
            </div>

            <h3>
              AERIAL
              <br />
              PHOTOGRAPHY
            </h3>

            <p>
              High-quality aerial photographs that bring
              a unique perspective to landscapes, properties,
              businesses and special projects.
            </p>

            <div className="photo-service-line"></div>

            <span>
              PHOTOGRAPHY
            </span>

          </div>


          <div className="photo-service-card">

            <div className="photo-service-number">
              02
            </div>

            <div className="photo-service-icon">
              ▷
            </div>

            <h3>
              AERIAL
              <br />
              VIDEOGRAPHY
            </h3>

            <p>
              Cinematic aerial footage designed for films,
              advertisements, social media, real estate
              and commercial productions.
            </p>

            <div className="photo-service-line"></div>

            <span>
              CINEMATIC VIDEO
            </span>

          </div>


          <div className="photo-service-card">

            <div className="photo-service-number">
              03
            </div>

            <div className="photo-service-icon">
              ◇
            </div>

            <h3>
              REAL ESTATE &
              <br />
              PROPERTY
            </h3>

            <p>
              Showcase properties, resorts, commercial
              spaces and developments with compelling
              aerial visuals.
            </p>

            <div className="photo-service-line"></div>

            <span>
              PROPERTY VISUALS
            </span>

          </div>


          <div className="photo-service-card">

            <div className="photo-service-number">
              04
            </div>

            <div className="photo-service-icon">
              ✦
            </div>

            <h3>
              EVENTS &
              <br />
              COMMERCIAL
            </h3>

            <p>
              Capture events, campaigns, destinations
              and commercial activities with dynamic
              aerial perspectives.
            </p>

            <div className="photo-service-line"></div>

            <span>
              COMMERCIAL MEDIA
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          CREATIVE PROCESS
          ========================= */}

      <section className="photo-process" id="process">

        <div className="photo-section-label">
          PHOTOGRAPHY / 03
        </div>

        <div className="photo-process-heading">

          <h2>
            FROM FLIGHT
            <br />
            <span>TO FRAME.</span>
          </h2>

          <p>
            Every aerial shoot begins with planning and
            ends with visuals created around your project,
            location and creative requirements.
          </p>

        </div>


        <div className="photo-process-list">

          <div className="photo-process-item">
            <span>01</span>

            <div>
              <h3>PLAN</h3>

              <p>
                Understand the location, objective,
                shot requirements and project vision.
              </p>
            </div>

            <b>→</b>
          </div>


          <div className="photo-process-item">
            <span>02</span>

            <div>
              <h3>FLY</h3>

              <p>
                Conduct the aerial shoot using the
                appropriate drone and flight setup.
              </p>
            </div>

            <b>→</b>
          </div>


          <div className="photo-process-item">
            <span>03</span>

            <div>
              <h3>CAPTURE</h3>

              <p>
                Capture carefully composed aerial
                photographs and cinematic footage.
              </p>
            </div>

            <b>→</b>
          </div>


          <div className="photo-process-item">
            <span>04</span>

            <div>
              <h3>DELIVER</h3>

              <p>
                Organize and deliver the final visual
                assets according to project requirements.
              </p>
            </div>

            <b>→</b>
          </div>

        </div>

      </section>


      {/* =========================
          TECHNICAL SPECIFICATIONS
          ========================= */}

      <section className="vision-specs">

        <div className="vision-specs-header">

          <div className="vision-section-label">
            PHOTOGRAPHY / 05
          </div>

          <div className="vision-specs-heading">

            <h2>
              DRONA <span>VISION</span>
            </h2>

            <p>
              A lightweight and modular aerial imaging platform designed
              for photography, videography, surveying and visual
              documentation.
            </p>

          </div>

        </div>


        <div className="vision-specs-grid">

          <div className="vision-spec-item">
            <span>MODEL</span>
            <strong>VN-01</strong>
          </div>

          <div className="vision-spec-item">
            <span>GROSS WEIGHT</span>
            <strong>~2.2 KG</strong>
          </div>

          <div className="vision-spec-item">
            <span>PAYLOAD CAPACITY</span>
            <strong>~0.6 KG</strong>
          </div>

          <div className="vision-spec-item">
            <span>DIMENSIONS</span>
            <strong>~500 × 500 × 250 MM</strong>
          </div>

          <div className="vision-spec-item">
            <span>MAX SPEED</span>
            <strong>~40 KM/H</strong>
          </div>

          <div className="vision-spec-item">
            <span>CLIMB RATE</span>
            <strong>~3 M/S</strong>
          </div>

          <div className="vision-spec-item">
            <span>TARGET ENDURANCE</span>
            <strong>20–25 MIN</strong>
          </div>

          <div className="vision-spec-item">
            <span>TARGET RANGE</span>
            <strong>~1.5 KM</strong>
          </div>

          <div className="vision-spec-item">
            <span>OPERATING ALTITUDE</span>
            <strong>UP TO 100 M AGL*</strong>
          </div>

          <div className="vision-spec-item">
            <span>STRUCTURE</span>
            <strong>LIGHTWEIGHT / MODULAR</strong>
          </div>

          <div className="vision-spec-item">
            <span>CONFIGURATION</span>
            <strong>MULTIROTOR</strong>
          </div>

          <div className="vision-spec-item">
            <span>NAVIGATION</span>
            <strong>GPS-ASSISTED</strong>
          </div>

          <div className="vision-spec-item">
            <span>FLIGHT MODES</span>
            <strong>MANUAL / ASSISTED</strong>
          </div>

          <div className="vision-spec-item">
            <span>PRIMARY CAMERA</span>
            <strong>RGB AERIAL CAMERA</strong>
          </div>

          <div className="vision-spec-item">
            <span>CAMERA MOUNT</span>
            <strong>STABILIZED / GIMBAL</strong>
          </div>

          <div className="vision-spec-item">
            <span>VIDEO CAPTURE</span>
            <strong>SUPPORTED*</strong>
          </div>

          <div className="vision-spec-item">
            <span>LIVE VIDEO</span>
            <strong>SUPPORTED*</strong>
          </div>

          <div className="vision-spec-item">
            <span>BATTERY</span>
            <strong>REMOVABLE LI-PO</strong>
          </div>

        </div>


        <div className="vision-spec-note">

          <span>*</span>

          <p>
            Specifications shown are preliminary design targets and
            may vary depending on final configuration, payload and
            component selection. Features marked with * are planned
            system capabilities and subject to final implementation.
          </p>

        </div>


        <div className="vision-cost">

          <div className="vision-cost-item">
            <span>ESTIMATED PROTOTYPE COST</span>
            <strong>₹10,000</strong>
          </div>

          <div className="vision-cost-item">
            <span>PLATFORM</span>
            <strong>DRONA VISION</strong>
          </div>

          <div className="vision-cost-note">
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

      <section className="photo-applications">

        <div className="photo-applications-image">

          <img
            src={`${BASE}images/photo%20drone2.png`}
            alt="Aerial photography drone"
          />

        </div>


        <div className="photo-applications-content">

          <div className="photo-section-label">
            PHOTOGRAPHY / 04
          </div>

          <h2>
            VISUALS FOR
            <br />
            <span>EVERY STORY.</span>
          </h2>

          <p>
            From a property launch to a cinematic
            production, aerial visuals can transform
            the way people experience a place,
            product or event.
          </p>


          <div className="photo-application-list">

            <div>
              <strong>01</strong>
              <span>REAL ESTATE & ARCHITECTURE</span>
            </div>

            <div>
              <strong>02</strong>
              <span>TRAVEL & TOURISM</span>
            </div>

            <div>
              <strong>03</strong>
              <span>FILM & CONTENT CREATION</span>
            </div>

            <div>
              <strong>04</strong>
              <span>EVENTS & PROMOTIONS</span>
            </div>

            <div>
              <strong>05</strong>
              <span>BRAND & COMMERCIAL MEDIA</span>
            </div>

            <div>
              <strong>06</strong>
              <span>LANDSCAPE & DESTINATION</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WHY DRONA
          ========================= */}

      <section className="photo-why">

        <div>

          <div className="photo-section-label">
            PHOTOGRAPHY / 06
          </div>

          <h2>
            WHY
            <br />
            <span>DRONA?</span>
          </h2>

        </div>


        <div className="photo-why-grid">

          <div>
            <strong>01</strong>

            <h3>UNIQUE PERSPECTIVES</h3>

            <p>
              Give your project a visual perspective
              that ground-level cameras cannot provide.
            </p>
          </div>


          <div>
            <strong>02</strong>

            <h3>CINEMATIC VISUALS</h3>

            <p>
              Smooth aerial movement and wide perspectives
              designed to make content more engaging.
            </p>
          </div>


          <div>
            <strong>03</strong>

            <h3>FLEXIBLE APPLICATIONS</h3>

            <p>
              Suitable for commercial, creative,
              promotional and documentation projects.
            </p>
          </div>


          <div>
            <strong>04</strong>

            <h3>PROJECT-FOCUSED</h3>

            <p>
              Every flight is planned around the
              objective and visual requirements of the project.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          CTA
          ========================= */}

      <section className="photo-cta" id="contact">

        <div className="photo-cta-label">
          DRONA // AERIAL PHOTOGRAPHY
        </div>

        <h2>
          CHANGE THE
          <br />
          <span>WAY YOU SEE.</span>
        </h2>

        <p>
          Tell us what you want to capture.
          We'll take it from there.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dronatech.team@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="photo-cta-button"
        >
          BOOK A SHOOT →
        </a>

      </section>


      {/* =========================
          FOOTER
          ========================= */}

      <footer className="photo-footer">

        <div className="photo-footer-top">

          <img
            src={`${BASE}images/drone%20logo.png`}
            alt="DRONA"
            className="photo-footer-logo"
          />

          <p>
            TECHNOLOGY THAT TAKES FLIGHT.
          </p>

        </div>


        <div className="photo-footer-bottom">

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

export default Photography;
