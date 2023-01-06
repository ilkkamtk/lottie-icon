import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Upload from '../views/Upload';
import HomeIcon from '../components/HomeIcon';
import UploadIcon from '../components/UploadIcon';
import ProfileIcon from '../components/ProfileIcon';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              case 'Home':
                return <HomeIcon />;
              case 'Profile':
                return <ProfileIcon />;
              case 'Upload':
                return <UploadIcon />;
            }
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
