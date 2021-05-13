export const addProductMutation = `
mutation AddProduct($lines:[BasketLineInput!]!) {
	basket{
    addProducts(lines:$lines){
      modifiedLines{
        totalCount
      }
    }
  }
}
`;