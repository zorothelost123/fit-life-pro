import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for Auth functionality
        console.log(isLogin ? "Logging in..." : "Registering...");
        window.location.href = '/client'; // Mock redirect to dashboard
    };

    return (
        <div className="fitlife-auth-container">
            <div className="fitlife-auth-box">
                <div className="fitlife-auth-header">
                    <h2>{isLogin ? "Welcome Back" : "Join FitLife Pro"}</h2>
                    <p>{isLogin ? "Login to access your dashboard" : "Create an account to start your journey"}</p>
                </div>

                <form className="fitlife-auth-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="fitlife-input-group">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Full Name" required />
                        </div>
                    )}
                    <div className="fitlife-input-group">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="fitlife-input-group">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required />
                    </div>

                    <button type="submit" className="fitlife-auth-btn">
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>

                <div className="fitlife-auth-footer">
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <span onClick={toggleMode} className="fitlife-toggle-link">
                            {isLogin ? " Sign Up" : " Login"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
