export const ADD_PRODUCT = 'ADD_PRODUCTS';
export const quickOrderAddProducts = product => ({
  type: ADD_PRODUCT,
  payload: {
    lines: [product],
  },
});