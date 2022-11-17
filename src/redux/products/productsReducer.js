const initState = {
  loading: true,
  errorMessage: '',
  id: 0,
  title: '',
  price: '',
  category: '',
  desciption: '',
  imageUrl: '',
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_FETCH_LOADING':
      return { ...state, loading: true };
    case 'REQUEST_FETCH_SUCCESS':
      return {
        state: action.payload,
        loading: false,
      };
    case 'REQUEST_FETCH_FAILED':
      return {
        errorMessage: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
