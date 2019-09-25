import {ADD_FEATURE, REMOVE_FEATURE} from '../actions';

const initialState = [
    { id: 1, name: 'V-6 engine', price: 1500, added: false },
    { id: 2, name: 'Racing detail package', price: 1500, added: false },
    { id: 3, name: 'Premium sound system', price: 500, added: false },
    { id: 4, name: 'Rear spoiler', price: 250, added: false }
  ];

   const store = (state = initialState, action) => {
      switch(action.type) {
        case ADD_FEATURE:
          return state.map(item => {
            if(item.id === action.payload.id) {
              return {...item, added: true};
            } else return item;
          })
        case REMOVE_FEATURE:
            return state.map(item => {
              if(item.id === action.payload.id) {
                return {...item, added: false};
              } else return item;
            })
        default:
            return state;
      }
  }

  export default store;