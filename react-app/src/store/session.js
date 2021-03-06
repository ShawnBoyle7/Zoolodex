import { getUsers } from './users'

const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return;
      }
    
      dispatch(setUser(data));
    }
}

export const demo = () => async (dispatch) => {
    const response = await fetch('/api/auth/demo')

    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return;
      }

      dispatch(setUser(data))
    }
}

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    
    
    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data))
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ['An error occurred. Please try again.']
    }
}

export const logout = () => async (dispatch) => {
    const response = await fetch('/api/auth/logout', {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      dispatch(removeUser());
    }
};

export const signUp = (email, username, firstName, lastName, password, repeatPassword) => async (dispatch) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        first_name: firstName,
        last_name: lastName,
        password,
        repeat_password: repeatPassword
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data));
      dispatch(getUsers());
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ['An error occurred. Please try again.']
    }
}

export const editUser = (email, username, firstName, lastName, password, repeatPassword, imgFile, userId) => async (dispatch) => {
    const form = new FormData()
    form.append("email", email)
    form.append("username", username)
    form.append("first_name", firstName)
    form.append("last_name", lastName)
    form.append("password", password)
    form.append("repeat_password", repeatPassword)
    form.append("img_file", imgFile)
    form.append("user_id", userId)
  
    const response = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      body: form
    });

    if (response.ok) {
      const data = await response.json(); 
      dispatch(setUser(data))
      dispatch(getUsers());
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."]
    }
};

export const deleteUser = (userId) => async (dispatch) => {
    const response = await fetch(`/api/auth/${userId}`, {
      method: "DELETE"
    });

    if (response.ok) {
      dispatch(removeUser(userId))
      dispatch(getUsers());
      return null;
    } else {
      return "Error deleting user"
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_USER:
        return { user: action.payload }
      case REMOVE_USER:
        return { user: null }
      default:
        return state;
    }
}
