const initialState = {
    contacts: [{
        id: new Date().getTime(),
        title: 'Kuch v',
        message: 'first',
        editing: false
    }]
  };
  


const userReducer = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        
        case 'REGISTER':
            console.log(state)
            return state.concat([action.data])
        case 'DELETE_USER':
            return state.filter((user) => user.id !== action.id)
        case 'EDIT_USER':
            return state.map((user) => user.id === action.id ? { ...user, editing: !user.editing } : user)
        case 'UPDATE':
            return state.map((user) => {
                if (user.id === action.id) {
                return {
                    ...user,
                    firstName: action.data.firstName,
                    lastName: action.data.lastName,
                    address: action.data.address,
                    city: action.data.city,
                    description: action.data.description,
                    editing: !user.editing
                }
            } else return user;
        })
        default:
            return state;
        }
    }
    export default userReducer;
    