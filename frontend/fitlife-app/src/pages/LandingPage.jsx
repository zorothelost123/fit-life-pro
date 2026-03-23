import React, { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';
import './LandingPage.css';

const LandingPage = () => {
    const [bmi, setBmi] = useState(null);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const el = useRef(null);

    useEffect(() => {
        // Initialize AOS animations
        AOS.init({ duration: 1000, once: true });

        // Initialize Typed.js
        const typed = new Typed(el.current, {
            strings: ["CHAMPIONS", "ATHLETES", "WINNERS", "LEGENDS"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });

        // Cleanup
        return () => {
            typed.destroy();
        };
    }, []);

    const calculateBMI = () => {
        if (height > 0 && weight > 0) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);
        }
    };

    return (
        <div className="fitlife-landing-page">
            <section id="home" className="fitlife-hero-section">
                <div className="fitlife-hero-overlay"></div>
                <div className="fitlife-hero-content" data-aos="fade-up">
                    <h3>Welcome to the Future of Fitness</h3>
                    <h1>WE BUILD <span className="fitlife-typing-text" ref={el}></span></h1>
                    <p>Experience the most advanced equipment and world-class training environment.</p>
                    <div className="fitlife-hero-btns">
                        <a href="#programs" className="fitlife-btn fitlife-btn-primary">Get Started <i className="fas fa-arrow-right"></i></a>
                        <a href="#pricing" className="fitlife-btn fitlife-btn-secondary">View Plans</a>
                    </div>
                </div>
            </section>

            <section id="programs" className="fitlife-programs-section">
                <h2 className="fitlife-section-title" data-aos="fade-up">Elite <span>Programs</span></h2>
                <div className="fitlife-program-cards">
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={1500} scale={1.05} glareEnable={true} glareMaxOpacity={0.3}>
                        <div className="fitlife-card" data-aos="fade-up">
                            <div className="fitlife-icon-box"><i className="fas fa-dumbbell"></i></div>
                            <h3>Hypertrophy</h3>
                            <p>Advanced muscle building techniques used by pros.</p>
                            <a href="#hypertrophy" className="fitlife-read-more">Learn More</a>
                        </div>
                    </Tilt>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={1500} scale={1.05} glareEnable={true} glareMaxOpacity={0.3}>
                        <div className="fitlife-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="fitlife-icon-box"><i className="fas fa-fire-alt"></i></div>
                            <h3>HIIT Cardio</h3>
                            <p>High intensity interval training for maximum fat burn.</p>
                            <a href="#cardio" className="fitlife-read-more">Learn More</a>
                        </div>
                    </Tilt>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={1500} scale={1.05} glareEnable={true} glareMaxOpacity={0.3}>
                        <div className="fitlife-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="fitlife-icon-box"><i className="fas fa-heartbeat"></i></div>
                            <h3>Functional Fit</h3>
                            <p>Training that prepares your body for real-life activities.</p>
                            <a href="#functional" className="fitlife-read-more">Learn More</a>
                        </div>
                    </Tilt>
                </div>
            </section>

            <section id="trainers" className="fitlife-trainers-section">
                <h2 className="fitlife-section-title" data-aos="fade-up">Meet The <span>Pros</span></h2>
                <div className="fitlife-trainer-container">
                    {/* Simplified Trainer Cards */}
                    <div className="fitlife-trainer-card" data-aos="zoom-in">
                        <div className="fitlife-trainer-img">
                            <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=634&q=80" alt="Trainer" />
                            <div className="fitlife-social-overlay">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="fitlife-trainer-info">
                            <h3>Mark Power</h3>
                            <p>Strength Coach</p>
                        </div>
                    </div>
                    <div className="fitlife-trainer-card" data-aos="zoom-in" data-aos-delay="100">
                        <div className="fitlife-trainer-img">
                            <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=634&q=80" alt="Trainer" />
                            <div className="fitlife-social-overlay">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="fitlife-trainer-info">
                            <h3>Sarah Fit</h3>
                            <p>Yoga & Cardio</p>
                        </div>
                    </div>
                    <div className="fitlife-trainer-card" data-aos="zoom-in" data-aos-delay="200">
                        <div className="fitlife-trainer-img">
                            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1350&q=80" alt="Trainer" />
                            <div className="fitlife-social-overlay">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="fitlife-trainer-info">
                            <h3>Alex Doom</h3>
                            <p>Crossfit Expert</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="fitlife-pricing-section">
                <h2 className="fitlife-section-title" data-aos="fade-up">Membership <span>Plans</span></h2>
                <div className="fitlife-pricing-container">
                    <div className="fitlife-pricing-card" data-aos="flip-left">
                        <h3>Silver</h3>
                        <div className="fitlife-price">$29<span>/mo</span></div>
                        <ul>
                            <li><i className="fas fa-check"></i> Gym Access</li>
                            <li><i className="fas fa-check"></i> Cardio Zone</li>
                            <li><i className="fas fa-times" style={{ color: '#555' }}></i> Personal Trainer</li>
                        </ul>
                        <a href="#contact" className="fitlife-btn fitlife-btn-secondary">Join Now</a>
                    </div>
                    <div className="fitlife-pricing-card fitlife-popular" data-aos="flip-left" data-aos-delay="100">
                        <div className="fitlife-badge">BEST VALUE</div>
                        <h3>Gold</h3>
                        <div className="fitlife-price">$49<span>/mo</span></div>
                        <ul>
                            <li><i className="fas fa-check"></i> All Gym Access</li>
                            <li><i className="fas fa-check"></i> 2 Personal Sessions</li>
                            <li><i className="fas fa-times" style={{ color: '#555' }}></i> Diet Plan</li>
                        </ul>
                        <a href="#contact" className="fitlife-btn fitlife-btn-primary">Join Now</a>
                    </div>
                    <div className="fitlife-pricing-card" data-aos="flip-left" data-aos-delay="200">
                        <h3>Diamond</h3>
                        <div className="fitlife-price">$89<span>/mo</span></div>
                        <ul>
                            <li><i className="fas fa-check"></i> VIP Access</li>
                            <li><i className="fas fa-check"></i> Full Diet Plan</li>
                            <li><i className="fas fa-check"></i> Spa & Steam</li>
                        </ul>
                        <a href="#contact" className="fitlife-btn fitlife-btn-secondary">Join Now</a>
                    </div>
                </div>
            </section>

            <section id="bmi" className="fitlife-bmi-section">
                <div className="fitlife-bmi-bg-text">CALCULATE</div> 
                <h2 className="fitlife-section-title" data-aos="fade-down">BMI <span>Check</span></h2>
                <div className="fitlife-bmi-wrapper" data-aos="zoom-in">
                    <div className="fitlife-input-field">
                        <label>Height (cm)</label>
                        <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="175" />
                    </div>
                    <div className="fitlife-input-field">
                        <label>Weight (kg)</label>
                        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" />
                    </div>
                    <button onClick={calculateBMI} className="fitlife-btn fitlife-btn-primary">Calculate Result</button>
                    {bmi && <div className="fitlife-result-box" style={{ marginTop: '20px', fontSize: '1.2rem', color: '#00f260' }}>Your BMI is: {bmi}</div>}
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
