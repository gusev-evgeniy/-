const initialState = {
  isAuth: false,
  name: '',
  email: '',
  password: ''
}

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login': {
      return { ...action.payload, isAuth: true }
    }
    case 'logout': {
      return { isAuth: false, name: '', email: '', password: '' }
    }
    default:
      return state
  }
}

export const saveUser = (data) => ({ type: 'login', payload: data })
export const logout = () => ({ type: 'logout' })