import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* =========================
          NAVBAR
          ========================= */}

      <header className="about-navbar">

        <div className="about-nav-container">

          <a href="/" className="about-logo-link">
            <img
              src="/images/drone%20logo.png"
              alt="DRONA"
              className="about-logo"
            />
          </a>

          <nav className="about-nav-links">

            <a href="/">Home</a>

            <a href="/about" className="active">
              About
            </a>

            <a href="/#products">
              Products
            </a>

            <a href="/#solutions">
              Solutions
            </a>

            <a href="/#technology">
              Technology
            </a>

            <a
              href="/#contact"
              className="about-nav-contact"
            >
              Contact
            </a>

          </nav>

        </div>

      </header>


      {/* =========================
          HERO
          ========================= */}

      <main>

        <section className="about-hero">

          <div className="about-hero-grid"></div>

          <div className="about-hero-glow"></div>

          <div className="about-hero-content">

            <div className="about-section-label">
              01 / ABOUT DRONA
            </div>

            <h1>
              TECHNOLOGY
              <br />
              <span>THAT TAKES FLIGHT.</span>
            </h1>

            <p>
              DRONA is a technology-driven drone venture focused
              on developing accessible, reliable and practical
              aerial systems for real-world applications.
            </p>

          </div>

          <div className="about-hero-mark">
            DRONA
            <span>INDIA</span>
          </div>

        </section>


        {/* =========================
            ABOUT
            ========================= */}

        <section className="about-introduction">

          <div className="about-section-label">
            02 / WHO WE ARE
          </div>

          <div className="about-intro-grid">

            <div>

              <h2>
                WE BUILD
                <br />
                <span>ACCESSIBLE</span>
                <br />
                AERIAL
                <br />
                TECHNOLOGY.
              </h2>

            </div>

            <div className="about-intro-text">

              <p>
                At DRONA, we believe that drone technology
                should be accessible, practical and affordable.
              </p>

              <p>
                We focus on developing lightweight, reliable
                and easy-to-use drones designed to meet
                real-world needs across multiple sectors.
              </p>

              <p>
                From agriculture and inspection to photography,
                videography and intelligent monitoring, DRONA
                aims to create versatile aerial solutions that
                combine innovative engineering with practical
                design.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            VISION & MISSION
            ========================= */}

        <section className="vision-mission">

          <div className="vision-card">

            <span>03 / OUR VISION</span>

            <h2>
              MAKE DRONE
              <br />
              TECHNOLOGY
              <br />
              <strong>ACCESSIBLE.</strong>
            </h2>

            <p>
              To make drone technology affordable and
              accessible to everyone, while contributing to
              a smarter, safer and more efficient future.
            </p>

          </div>


          <div className="mission-card">

            <span>04 / OUR MISSION</span>

            <h2>
              INNOVATE.
              <br />
              BUILD.
              <br />
              <strong>FLY.</strong>
            </h2>

            <p>
              We are not just building drones — we are
              building accessible technology that turns
              possibilities into reality.
            </p>

          </div>

        </section>


        {/* =========================
            FOUNDERS
            ========================= */}

        <section className="founders-section">

          <div className="founders-header">

            <div className="about-section-label">
              05 / THE FOUNDERS
            </div>

            <div className="founders-heading">

              <h2>
                THE PEOPLE
                <br />
                <span>BEHIND DRONA.</span>
              </h2>

              <p>
                Three co-founders bringing together business,
                technology and operations to build the next
                generation of accessible aerial technology.
              </p>

            </div>

          </div>


          <div className="founders-grid">


            {/* =========================
                ROHAN
                ========================= */}

            <article className="founder-card">

              <div className="founder-number">
                01
              </div>

              <div className="founder-photo">

                <div className="founder-photo-placeholder">
                  R
                </div>

              </div>

              <div className="founder-info">

                <h3>
                  Rohan Y. Deshmukh
                </h3>

                <span>
                  CO-FOUNDER / CEO
                </span>

                <p>
                  Business & Strategy
                </p>

                <div className="founder-divider"></div>

                <small>
                  Leadership • Business Strategy •
                  Partnerships • Business Development
                </small>

              </div>

            </article>


            {/* =========================
                SANVI
                ========================= */}

            <article className="founder-card">

              <div className="founder-number">
                02
              </div>

              <div className="founder-photo">

                <div className="founder-photo-placeholder">
                  S
                </div>

              </div>

              <div className="founder-info">

                <h3>
                  Sanvi Bhavsar
                </h3>

                <span>
                  CO-FOUNDER / COO & CMO
                </span>

                <p>
                   Product Development & Marketing
                </p>

                <div className="founder-divider"></div>

                <small>
                  Flight Control • Product Testing • Marketing 
                  • Operations • Procurement • Customer Support
                </small>

              </div>

            </article>


            {/* =========================
                SARTHAK
                ========================= */}

            <article className="founder-card">

              <div className="founder-number">
                03
              </div>

              <div className="founder-photo">

                <div className="founder-photo-placeholder">
                  S
                </div>

              </div>

              <div className="founder-info">

                <h3>
                  Sarthak Chavhan
                </h3>

                <span>
                  CO-FOUNDER / CTO & CFO
                </span>

                <p>
                  Design, Technology & Finance
                </p>

                <div className="founder-divider"></div>

                <small>
                  Drone Design  • Software • AI/ML •
                  R&D • Technology Development • Financial
                  Planning
                </small>

              </div>

            </article>

          </div>

        </section>


        {/* =========================
            WHAT'S NEXT
            ========================= */}

        <section className="about-future">

          <div className="about-section-label">
            06 / WHAT'S NEXT
          </div>

          <div className="future-content">

            <div>

              <h2>
                ONE PLATFORM.
                <br />
                <span>MULTIPLE POSSIBILITIES.</span>
              </h2>

              <p>
                DRONA aims to begin with reliable and affordable
                drone technology and gradually expand into
                specialized products and applications.
              </p>

            </div>

            <strong>
              COMING
              <br />
              SOON.
            </strong>

          </div>

        </section>


        {/* =========================
            CTA
            ========================= */}

        <section className="about-cta">

          <div>

            <span>
              READY TO TAKE FLIGHT?
            </span>

            <h2>
              LET'S BUILD
              <br />
              <strong>WHAT'S NEXT.</strong>
            </h2>

          </div>

          <a href="/#contact">
            START A CONVERSATION →
          </a>

        </section>

      </main>


      {/* =========================
          FOOTER
          ========================= */}

      <footer className="about-footer">

        <div className="about-footer-top">

          <img
            src="#/images/drone%20logo.png"
            alt="DRONA"
            className="about-footer-logo"
          />

          <p>
            TECHNOLOGY THAT TAKES FLIGHT.
          </p>

        </div>

        <div className="about-footer-bottom">

          <span>
            © 2026 DRONA
          </span>

          <div>

            <a href="/">
              Home
            </a>

            <a href="/about">
              About
            </a>

            <a href="/#products">
              Products
            </a>

            <a href="/#contact">
              Contact
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default About;
