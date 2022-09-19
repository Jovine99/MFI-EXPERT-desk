import Signup from '../screens/Signup'
import ForgotPassword from '../screens/ForgotPassword'
import Login from '../screens/Login'
import Forgetpwd from '../screens/Forgetpwd'

const Authnavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    Forgetpwd: { screen: Forgetpwd }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default Authnavigation