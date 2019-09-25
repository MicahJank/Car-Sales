// import action variables...

const initialState = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  }

  export default car = (state = initialState, action) => {
      switch(action.type) {
        // actions here
        default:
            return state;
      }
  }