import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-4">الصفحة غير موجودة</h2>
      <Link to="/" className="text-green-600 underline">العودة للرئيسية</Link>
    </div>
  );
}

export default NotFound;
