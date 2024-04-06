import data from '../../data/product.mock.json'

const mockResponse = ({ data })

export const fetchProducts = async () =>
  new Promise<typeof mockResponse>((resolve) =>
    setTimeout(() => resolve(mockResponse), 500)
  );