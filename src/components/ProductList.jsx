import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function ProductList() {
  const { items, loading,error, searchTerm, filterCategory } = useSelector(state => state.products);
  const cartMesaage =useSelector(state=>state.cart.message)
// console.log(cartMesaage);

  // فلترة وبحث
  const filtered = items.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory ? product.category === filterCategory : true;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p className="text-red-600">حدث خطأ: {error}</p>;

  if (filtered.length === 0) return <p>لا توجد منتجات</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
