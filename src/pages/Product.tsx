import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { fetchProduct, selectProduct } from '../features/product/productSlice';
import { ProductDetailsCard } from '../components/ProductDetailsCard';
import { SalesGraph } from '../components/SalesGraph';
import './Product.css';

export const ProductPage = () => {
  const dispatch = useAppDispatch()
  const { isLoading, product } = useSelector(selectProduct)

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  if (isLoading) return null;

  return (
    <div className='product-container'>
      <div className='product-details-section'>
        <ProductDetailsCard product={product} />
      </div>
      <div className='product-sales-section'>
        <SalesGraph sales={product.sales} />
        <div style={{ flex: 1 }} />
      </div>
    </div>
  )
}