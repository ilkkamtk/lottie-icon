import LottieView from 'lottie-react-native';
import HomeIcon from '../Lottie/Home.json';
import ProfileIcon from '../Lottie/Profile.json';
import UploadIcon from '../Lottie/Upload.json';
import PropTypes from 'prop-types';
import {useEffect, useRef} from 'react';

const icons = {
  Home: HomeIcon,
  Profile: ProfileIcon,
  Upload: UploadIcon,
};

const LottieIcons = ({iconName, focused}) => {
  // console.log('Rendering LottieView for', iconName);
  console.log(iconName, focused);
  const animationRef = useRef();
  useEffect(() => {
    if (focused && animationRef.current) {
      // console.log('Playing animation for', iconName);
      animationRef.current?.play();
    }
  }, [focused, animationRef.current]);
  return (
    <LottieView
      ref={animationRef}
      source={icons[iconName]}
      loop={false}
      autoPlay={true}
    />
  );
};

LottieIcons.propTypes = {
  iconName: PropTypes.string,
  focused: PropTypes.bool,
};

export default LottieIcons;
