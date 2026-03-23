import React, { useState } from 'react';
import './ClientDashboard.css';

const ClientDashboard = () => {
    // Basic state to manage active dashboard tab
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="fitlife-dashboard-container">
            {/* Sidebar */}
            <div className="fitlife-sidebar">
                <div className="fitlife-sidebar-profile">
                    <img src="https://ui-avatars.com/api/?name=User&background=00f260&color=000" alt="Profile" />
                    <h3>Client Profile</h3>
                    <p>Gold Plan</p>
                </div>
                <ul className="fitlife-sidebar-nav">
                    <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
                        <i className="fas fa-home"></i> Overview
                    </li>
                    <li className={activeTab === 'subscription' ? 'active' : ''} onClick={() => setActiveTab('subscription')}>
                        <i className="fas fa-dumbbell"></i> Subscription Plan
                    </li>
                    <li className={activeTab === 'trainer' ? 'active' : ''} onClick={() => setActiveTab('trainer')}>
                        <i className="fas fa-user-ninja"></i> My Trainer
                    </li>
                    <li className={activeTab === 'consultant' ? 'active' : ''} onClick={() => setActiveTab('consultant')}>
                        <i className="fas fa-comments"></i> Book Consultant
                    </li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="fitlife-dashboard-content">
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === 'overview' && (
                    <div className="fitlife-tab-pane animate-fade">
                        <h2>Welcome Back, <span>Athlete!</span></h2>
                        <p>Track your daily progress right here.</p>
                        
                        <div className="fitlife-dashboard-cards">
                            <div className="fitlife-dash-card">
                                <i className="fas fa-fire"></i>
                                <div>
                                    <h4>Calories Burned</h4>
                                    <h2>1,450 kcal</h2>
                                </div>
                            </div>
                            <div className="fitlife-dash-card">
                                <i className="fas fa-running"></i>
                                <div>
                                    <h4>Workouts This Week</h4>
                                    <h2>4 / 5</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. SUBSCRIPTION & RECOMMENDATIONS TAB */}
                {activeTab === 'subscription' && (
                    <div className="fitlife-tab-pane animate-fade">
                        <h2>Your Gold <span>Subscription</span></h2>
                        <div className="fitlife-recommendation-grid">
                            <div className="fitlife-rec-card">
                                <h3><i className="fas fa-apple-alt"></i> Recommended Diet</h3>
                                <ul>
                                    <li>Pre-workout: Oatmeal & Banana</li>
                                    <li>Post-workout: Whey Protein Isolate</li>
                                    <li>Lunch: Grilled Chicken & Quinoa</li>
                                    <li>Dinner: Salmon & Asparagus</li>
                                </ul>
                            </div>
                            <div className="fitlife-rec-card">
                                <h3><i className="fas fa-dumbbell"></i> Recommended Workout</h3>
                                <ul>
                                    <li>Monday: Chest & Triceps (Hypertrophy)</li>
                                    <li>Tuesday: Back & Biceps (Strength)</li>
                                    <li>Wednesday: Active Recovery / Yoga</li>
                                    <li>Thursday: Legs & Core (Volume)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. MY TRAINER TAB */}
                {activeTab === 'trainer' && (
                    <div className="fitlife-tab-pane animate-fade">
                        <h2>Your Personal <span>Trainer</span></h2>
                        <div className="fitlife-pt-card">
                            <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&q=80" alt="Trainer" />
                            <div className="fitlife-pt-info">
                                <h3>Sarah Fit</h3>
                                <p className="fitlife-pt-spec">Yoga & Cardio Specialist</p>
                                <p>Sarah has over 10 years of experience transforming athletes across the country. She is currently assigned to oversee your Gold Plan progress.</p>
                                <button onClick={() => setActiveTab('consultant')} className="fitlife-btn-sm">Message Trainer</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. BOOK CONSULTANT TAB */}
                {activeTab === 'consultant' && (
                    <div className="fitlife-tab-pane animate-fade">
                        <h2>Book a <span>Consultation</span></h2>
                        <div className="fitlife-consult-form-box">
                            <form className="fitlife-consult-form" onSubmit={e => e.preventDefault()}>
                                <label>Select Topic:</label>
                                <select required>
                                    <option value="">-- Choose a Topic --</option>
                                    <option value="diet">Diet Changes</option>
                                    <option value="workout">Workout Adjustments</option>
                                    <option value="injury">Injury / Pain Consultation</option>
                                    <option value="general">General Advice</option>
                                </select>

                                <label>Message details:</label>
                                <textarea rows="5" placeholder="Explain what you need help with..." required></textarea>

                                <button type="submit" className="fitlife-btn fitlife-btn-primary" style={{marginTop: '15px'}}>Send Request</button>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ClientDashboard;
