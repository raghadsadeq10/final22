import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineMail } from "react-icons/md";
//import { apiStore } from '../Stores/apiStore';


const SignupPage = () => {
  const navigate = useNavigate();

  // الحالات (States)
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // عند الضغط على زر "إنشاء حساب"
  function handleSignup(e) {
    e.preventDefault();
    apiStore.register({ email, password, name, phone }, setMessage);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <div className="logo">
          <img src="/images/sclogo.png" className="logo-image" alt="Logo" />
        </div>

        {/* Signup Form */}
        <form className="login-form" onSubmit={handleSignup}>
          {/* Full Name */}
          <div className="input-group">
            <span className="icon"><FaUser /></span>
            <input
              type="text"
              placeholder="الاسم الكامل"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <span className="icon"><MdOutlineMail /></span>
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="input-group">
            <span className="icon"><IoPhonePortraitOutline /></span>
            <input
              type="number"
              placeholder="رقم الهاتف"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <span className="icon"><FaLock /></span>
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          {message && (
            <div className="error-message" style={{ textAlign: 'center', marginTop: '10px' }}>
              {message}
            </div>
          )}

          {/* Link to login */}
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <span>هل لديك حساب؟ </span>
            <span
              style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => navigate('/login')}
            >
              تسجيل الدخول
            </span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">
            إنشاء حساب
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;