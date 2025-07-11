"use client"

import type React from "react"

import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    income: "",
    situation: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage("Cererea a fost trimisă cu succes! Te vom contacta în 24 de ore.")
        setFormData({ income: "", situation: "", email: "", phone: "" })
      } else {
        setSubmitMessage("A apărut o eroare. Te rugăm să încerci din nou.")
      }
    } catch (error) {
      setSubmitMessage("A apărut o eroare. Te rugăm să încerci din nou.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8f9fa;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        header {
          background: linear-gradient(135deg, #2196F3 0%, #2c3e50 100%);
          color: white;
          padding: 2rem 0;
          text-align: center;
        }
        
        .logo {
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .intro {
          padding: 2rem 0;
          background: white;
          text-align: center;
        }

        .intro h2 {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .intro-highlight {
          background: #e3f2fd;
          padding: 2rem;
          border-radius: 15px;
          margin: 1.5rem auto;
          max-width: 900px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .intro-highlight p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }

        .intro-highlight .highlight-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2196F3;
          margin-bottom: 1.5rem;
        }

        .benefits-list {
          list-style: none;
          text-align: left;
          max-width: 600px;
          margin: 0 auto;
        }

        .benefits-list li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 2rem;
          font-size: 1rem;
          color: #2c3e50;
        }

        .benefits-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #27ae60;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .services {
          padding: 2rem 0;
          background: white;
        }
        
        .services h2 {
          text-align: center;
          font-size: 2.2rem;
          color: #2c3e50;
          margin-bottom: 2rem;
        }
        
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .service-card {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 15px;
          border-left: 5px solid #2196F3;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 500px;
        }
        
        .service-card h3 {
          color: #2c3e50;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        
        .service-list {
          list-style: none;
        }
        
        .service-list li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .service-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #27ae60;
          font-weight: bold;
        }

        .service-price {
          margin-top: auto;
          background: #2196F3;
          color: white;
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
        }

        .tax-section {
          padding: 1.5rem 0;
          background: white;
        }
        
        .tax-info {
          background: #e3f2fd;
          padding: 2rem;
          border-radius: 15px;
          margin: 1rem 0;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .hero {
          padding: 2rem 0;
          background: white;
          text-align: center;
        }
        
        .cta-box {
          background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
          color: white;
          padding: 2rem;
          border-radius: 15px;
          margin: 1.5rem 0;
          text-align: center;
        }
        
        .cta-box h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .form-input {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          background-color: #ffffff;
          color: #333333;
          transition: border-color 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #2196F3;
          box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
        }

        .form-input::placeholder {
          color: #999999;
        }

        .submit-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          font-weight: bold;
        }

        .submit-message.success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .submit-message.error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        
        .pricing {
          padding: 2rem 0;
          background: linear-gradient(135deg, #2196F3 0%, #2c3e50 100%);
          color: white;
          text-align: center;
        }
        
        .pricing h2 {
          font-size: 2.2rem;
          margin-bottom: 2rem;
        }
        
        .price-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .price-card {
          background: white;
          color: #333;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .price {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2196F3;
          margin: 1rem 0;
        }
        
        .why-us {
          padding: 2rem 0;
          background: white;
        }
        
        .why-us h2 {
          text-align: center;
          font-size: 2.2rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .why-us .service-card {
          min-height: 200px;
        }

        .contact-section {
          padding: 2rem 0;
          background: #f8f9fa;
        }

        .contact-box {
          background: linear-gradient(135deg, #2196F3 0%, #2c3e50 100%);
          color: white;
          padding: 2.5rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .contact-box h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .contact-box p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .contact-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        footer {
          background: #2c3e50;
          color: white;
          padding: 2rem 0;
          text-align: center;
        }
        
        .btn {
          display: inline-block;
          background: linear-gradient(135deg, #2196F3 0%, #2c3e50 100%);
          color: white;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          margin: 1rem;
          transition: transform 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .btn:hover {
          transform: translateY(-2px);
        }
        
        .btn-secondary {
          background: linear-gradient(135deg, #1976D2 0%, #2196F3 100%);
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .whatsapp-sticky {
          display: none;
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          
          .intro h2 {
            font-size: 1.5rem;
          }
          
          .container {
            padding: 0 15px;
          }

          .intro {
            padding: 1.5rem 0;
          }

          .services {
            padding: 1.5rem 0;
          }

          .tax-section {
            padding: 1rem 0;
          }

          .hero {
            padding: 1.5rem 0;
          }

          .pricing {
            padding: 1.5rem 0;
          }

          .why-us {
            padding: 1.5rem 0;
          }

          .contact-section {
            padding: 1.5rem 0;
          }

          .whatsapp-sticky {
            display: block;
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            background: #25D366;
            color: white;
            padding: 15px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            animation: pulse 2s infinite;
          }

          .whatsapp-sticky:hover {
            background: #128C7E;
            transform: scale(1.05);
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
            50% {
              box-shadow: 0 4px 30px rgba(37, 211, 102, 0.7);
            }
            100% {
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
          }
        }
      `}</style>

      <header>
        <div className="container">
          <div className="logo">
            <img
              src="/assets/logo.png"
              alt="PFA Ride Logo"
              style={{ width: "120px", height: "auto", background: "none" }}
            />
          </div>
          <h1>PFA Ride</h1>
          <p className="subtitle">
            Contabilitate PFA Uber & Bolt - Soluție completă pentru șoferii ride sharing
            <br />
            Lucrezi 100% legal, simplu și eficient, cu propria ta mașină!
          </p>
        </div>
      </header>

      <section className="intro">
        <div className="container">
          <h2>Gestiune PFA simplificată pentru activități de ride sharing</h2>

          <div className="intro-highlight">
            <p>
              <strong>
                Oferim servicii complete de contabilitate PFA Uber și contabilitate PFA Bolt pentru șoferii activi în
                domeniul ride sharing. Ne ocupăm de tot ce ține de înființare, facturare, contabilitate și declarații
                fiscale.
              </strong>
            </p>

            <div className="highlight-text">🚗 Tu conduci, noi ne ocupăm de tot restul!</div>

            <p>
              <strong>Noi chiar facem TOT pentru tine:</strong>
            </p>

            <ul className="benefits-list">
              <li>Scoatem situațiile direct din platformele Uber/Bolt</li>
              <li>Trimitem noi toate documentele în locul tău</li>
              <li>Nu trebuie să ne trimiți lunar situațiile din platforme</li>
              <li>Nu ai nevoie de cunoștințe tehnice sau contabile</li>
              <li>Nu trebuie să faci nimic altceva decât să conduci</li>
              <li>Gestionăm complet toate obligațiile fiscale</li>
              <li>Îți trimitem doar ordinele de plată gata de semnat</li>
            </ul>

            <div className="highlight-text" style={{ marginTop: "1.5rem" }}>
              Serviciu 100% hands-off - tu te concentrezi pe condus, noi pe birocrație!
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Serviciile Noastre</h2>

          <div className="service-grid">
            <div className="service-card">
              <h3>Pachet Înființare PFA</h3>
              <ul className="service-list">
                <li>Înființarea rapidă și corectă a PFA-ului</li>
                <li>Pregătirea dosarului pentru deschiderea contului bancar</li>
                <li>Pregătirea completă a dosarului pentru autorizația ARR</li>
                <li>Activarea accesului în SPV</li>
                <li>Obținerea certificatului de TVA intracomunitar (obligatoriu pentru Uber, Bolt)</li>
                <li>Asistență pentru deschiderea sau mutarea conturilor Uber/Bolt</li>
                <li>Identificarea celui mai avantajos regim fiscal</li>
              </ul>
              <div className="service-price">
                <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>499 lei</div>
                <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>Cost total pachet înființare</div>
              </div>
            </div>

            <div className="service-card">
              <h3>Administrare Lunară Completă</h3>
              <ul className="service-list">
                <li>Contabilitate PFA Uber și Bolt completă</li>
                <li>Situație lunară a veniturilor și cheltuielilor</li>
                <li>Calculul impozitului, CAS, CASS, impozit nerezidenți, TVA intracomunitar</li>
                <li>Pregătirea ordinelor de plată (tu doar le semnezi)</li>
                <li>Depunerea tuturor declarațiilor fiscale în termen (100, 301, 390 și Declarația unică anuală)</li>
                <li>Trimiterea și validarea e-Factura</li>
                <li>Estimarea lunară a plăților pentru contribuțiile anuale pentru evitarea blocajelor financiare</li>
              </ul>
              <div className="service-price">
                <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>299 lei/lună</div>
                <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>Serviciu complet de gestiune</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-box">
            <h2>Contactează-ne astăzi!</h2>
            <p>Începe să lucrezi legal și eficient cu PFA Ride</p>
            <div className="contact-buttons">
              <a href="tel:0722224832" className="btn">
                Sună acum: 0722224832
              </a>
              <a href="https://wa.me/40722224832" className="btn btn-secondary">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="tax-section">
        <div className="container">
          <div className="tax-info">
            <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "#2c3e50" }}>Regim Fiscal Avantajos</h3>
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#2c3e50" }}>
              <strong>Taxe între 10% și 25% din venitul net</strong> (după comisioanele platformelor), în funcție de
              situația ta personală.
            </p>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="container">
          <div className="cta-box">
            <h3>Calculează-ți taxele personalizate ca PFA</h3>
            <p>Completează formularul și îți vom face un calcul estimativ personalizat în funcție de situația ta.</p>

            <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "2rem auto", textAlign: "left" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="income" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Încasări săptămânale:
                </label>
                <input
                  type="number"
                  id="income"
                  name="income"
                  value={formData.income}
                  onChange={handleInputChange}
                  placeholder="ex: 1500"
                  className="form-input"
                  required
                />
                <small style={{ opacity: 0.8 }}>
                  Îți luăm în considerare 6 săptămâni de concediu pe an pentru calcul.
                </small>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="situation" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Regimul tău fiscal:
                </label>
                <select
                  id="situation"
                  name="situation"
                  value={formData.situation}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Alege situația în care te afli</option>
                  <option value="student">Student</option>
                  <option value="angajat">Angajat full-time</option>
                  <option value="pensionar">Pensionar</option>
                  <option value="fara-job">Fără loc de muncă</option>
                  <option value="peste-65">Peste 65 de ani</option>
                  <option value="handicap">Handicap grav/accentuat</option>
                </select>
                <small style={{ opacity: 0.8 }}>
                  Alege situația în care te afli, dacă ai alt loc de muncă, dacă ești pensionar, etc.
                </small>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Adresa ta de email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="exemplu@email.com"
                  className="form-input"
                  required
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="phone" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Numărul tău de telefon:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="07xxxxxxxx"
                  className="form-input"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn"
                style={{
                  width: "100%",
                  background: "white",
                  color: "#2196F3",
                  margin: 0,
                }}
              >
                {isSubmitting ? "Se trimite..." : "Trimite cererea"}
              </button>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes("succes") ? "success" : "error"}`}>
                  {submitMessage}
                </div>
              )}
            </form>

            <div
              style={{
                background: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
                padding: "1.5rem",
                borderRadius: "10px",
                marginTop: "1rem",
                border: "2px solid #27ae60",
                boxShadow: "0 4px 15px rgba(39, 174, 96, 0.3)",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  lineHeight: 1.4,
                  color: "white",
                }}
              >
                În termen de 24 de ore te vom contacta cu un calcul personalizat al taxelor pe care le vei plăti lucrând
                pe PFA-ul tău!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Prețuri Transparente</h2>

          <div className="price-cards">
            <div className="price-card">
              <h3>Pachet Înființare</h3>
              <div className="price">499 lei</div>
              <p>Cost total pentru tot ce trebuie făcut până începi să lucrezi</p>
              <p>
                <em>Practic, totul inclus pentru a deveni operațional!</em>
              </p>
            </div>

            <div className="price-card">
              <h3>Serviciu Lunar</h3>
              <div className="price">299 lei/lună</div>
              <p>Serviciu complet de gestiune</p>
              <p>
                <strong>Totul inclus</strong> – fiscal, declarativ, suport constant
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <h2>De ce să lucrezi cu noi?</h2>

          <div className="service-grid">
            <div className="service-card">
              <h3>Contabilitate PFA Uber & Bolt Specializată</h3>
              <p>
                Suntem o firmă de contabilitate specializată în servicii de contabilitate PFA Uber și contabilitate PFA
                Bolt din 2017. Ne concentrăm exclusiv pe domeniul ride sharing și cunoaștem toate specificațiile legale
                pentru aceste platforme.
              </p>
            </div>

            <div className="service-card">
              <h3>Suport Complet</h3>
              <p>
                De la înființare până la administrarea zilnică - ne ocupăm de tot procesul birocratic ca tu să te
                concentrezi pe condus.
              </p>
            </div>

            <div className="service-card">
              <h3>Transparență Totală</h3>
              <p>Prețuri fixe, fără costuri ascunse. Știi exact ce plătești și ce primești în schimb.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <h2>Contactează-ne astăzi!</h2>
          <p>Începe să lucrezi legal și eficient cu PFA Ride</p>
          <a href="tel:0722224832" className="btn">
            Sună acum: 0722224832
          </a>
          <a href="https://wa.me/40722224832" className="btn btn-secondary">
            WhatsApp
          </a>
          <p style={{ marginTop: "2rem", opacity: 0.8 }}>© 2025 PFA Ride. Toate drepturile rezervate.</p>
        </div>
      </footer>

      {/* WhatsApp Sticky Button - doar pe mobile */}
      <a href="https://wa.me/40722224832" className="whatsapp-sticky">
        📱 WhatsApp
      </a>
    </>
  )
}
