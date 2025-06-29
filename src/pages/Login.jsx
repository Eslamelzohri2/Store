import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // محاكاة تسجيل دخول بسيط بدون API حقيقي
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ username, token: 'fake-token' }));
      navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">تسجيل الدخول</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border rounded w-full px-3 py-2"
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border rounded w-full px-3 py-2"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          تسجيل دخول
        </button>
      </form>
    </div>
  );
}

export default Login;
