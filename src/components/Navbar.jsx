import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const cartCount = useSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="font-bold text-xl"> يحيى فاشون </Link>
      </div>
      <div className="flex items-center space-x-6">
        <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>
           الرئيسية
        </NavLink>
     
        <NavLink to="/checkout" className={({ isActive }) => isActive ? 'underline' : ''}>
          السله ({cartCount})
        </NavLink>

        {user ? (
          <>
            <span>مرحبًا، {user.username}</span>
            <button onClick={() => dispatch(logout())} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              تسجيل خروج
            </button>
          </>
        ) : (
          <NavLink to="/login" className={({ isActive }) => isActive ? 'underline' : ''}>
            تسجيل دخول
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
