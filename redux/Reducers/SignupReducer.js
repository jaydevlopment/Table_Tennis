const initialState = {
  SIGNUPRES: '',
  STEPONERES: '',
  STEPTWORES: '',
  TEAMACTRES: '',
  POSTACTRES:'',
  INVITEACTRES:'',
};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Register':
      return {...state, SIGNUPRES: action.payload, loading: false};

    case 'StepOne':
      return {...state, STEPONERES: action.payload, loading: false};

    case 'StepTwo':
      return {...state, STEPTWORES: action.payload, loading: false};

    case 'teamactivity':
      return {...state, TEAMACTRES: action.payload, loading: false};

    case 'postactivity':
      return {...state, POSTACTRES: action.payload, loading: false};

      case 'inviteactivity':
      return {...state, INVITEACTRES: action.payload, loading: false};

    default:
      return state;
  }
};

export default SignUpReducer;
