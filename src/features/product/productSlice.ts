import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchProducts } from './productAPI';
import { Product } from './types';

const initialState: Product = {
  id: '',
  title: '',
  subtitle: '',
  image: '',
  brand: '',
  retailer: '',
  reviews: [],
  details: [],
  tags: [],
  sales: [],
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await fetchProducts();
    const productData = response.data[0]
    return {
      ...productData,
      sales: productData.sales.map((sale) => ({ ...sale, weekEnding: new Date(sale.weekEnding) }))
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    product: initialState,
  },
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => ({
      ...state,
      product: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => ({
        ...state,
        isLoading: true
      }))
      .addCase(fetchProduct.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        product: action.payload,
      }))
      .addCase(fetchProduct.rejected, (state) => ({
        ...state,
        isLoading: false
      }))
  },
});

export const { setProduct } = productSlice.actions;
export const selectProduct = (state: RootState) => state.product;

export const productReducer = productSlice.reducer;
