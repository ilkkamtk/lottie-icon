import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Upload from '../views/Upload';
import LottieIcons from '../components/LottieIcons';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return <LottieIcons iconName={route.name} focused={focused} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Upload" component={Upload} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
