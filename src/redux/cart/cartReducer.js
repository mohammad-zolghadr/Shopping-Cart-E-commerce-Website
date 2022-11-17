const initState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: true,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case 'INCREASE_PRODUCT':
      const index = state.selectedItems.findIndex((e) => e.id === action.payload.id);
      state.selectedItems[index].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    case 'REMOVE_PRODUCT':
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.itemsCounter--;
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };

    case 'DECREASE_PRODUCT':
      const indexD = state.selectedItems.findIndex((e) => e.id === action.payload.id);
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    case 'CHECKOUT':
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    default:
      return state;
  }
};

export default cartReducer;
