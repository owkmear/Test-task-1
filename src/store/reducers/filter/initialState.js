const initialState = {
  price: null, // true (more 5000), false (less 5000), null (all)
  category: 'all', // 1, 2, 3..., 'none' (without category), 'all' (all category)
  categoryList: [],
  available: false // true (filter on quantity > 0), false (no filter)
}

export default initialState
