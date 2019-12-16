import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Mobile Healthcare "
    }
  }
);

export default createAppContainer(navigator);
