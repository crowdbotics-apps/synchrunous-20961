import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList121286Navigator from '../features/NotificationList121286/navigator';
import Settings121285Navigator from '../features/Settings121285/navigator';
import Settings121277Navigator from '../features/Settings121277/navigator';
import UserProfile121275Navigator from '../features/UserProfile121275/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList121286: { screen: NotificationList121286Navigator },
Settings121285: { screen: Settings121285Navigator },
Settings121277: { screen: Settings121277Navigator },
UserProfile121275: { screen: UserProfile121275Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
