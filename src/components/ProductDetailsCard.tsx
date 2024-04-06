import React from 'react';
import { Product } from '../features/product/types';
import './ProductDetailsCard.css';

interface ProductDetailsCardProps {
  product: Product
}

export const ProductDetailsCard = ({ product }: ProductDetailsCardProps) => {
  return (
    <div className='product-details-card'>
      <div className='product-description'>
        <img src={product.image} alt="product" className="product-image" />
        <p className="product-title">{product.title}</p>
        <p className="product-subtitle">{product.subtitle}</p>
      </div>
      <div className="product-tag-container">
        {product.tags.map((tag) => (
          <div key={tag} className="product-tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}