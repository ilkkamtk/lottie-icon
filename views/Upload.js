import {StyleSheet, Text, View} from 'react-native';

const Upload = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upload</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Upload;
