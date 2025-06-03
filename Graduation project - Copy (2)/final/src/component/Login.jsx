import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { apiStore } from '../Stores/apiStore'; // إذا كنت تستخدم API خارجي

export default function Login() {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    

    console.log('Logging in with:', Username, Phone, password);
    navigate('/'); // يرجع المستخدم للصفحة الرئيسية بعد تسجيل الدخول
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src="/images/sclogo.png" className="logo-image" alt="Logo" />
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="icon"><FaUser /></span>
            <input type="text" placeholder="اسم المستخدم" value={Username} onChange={e => setUsername(e.target.value)} required />
          </div>

          <div className="input-group">
            <span className="icon"><IoPhonePortraitOutline /></span>
            <input type="number" placeholder="رقم الهاتف" value={Phone} onChange={e => setPhone(e.target.value)} required />
          </div>

          <div className="input-group">
            <span className="icon"><FaLock /></span>
            <input type="password" placeholder="كلمة السر" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className="login-button">
            تسجيل الدخول
          </button>

          {message && <p className="error-message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

//export default Login;