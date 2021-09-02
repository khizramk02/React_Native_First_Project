import React, {useState} from 'react';
import img from './src/asset/qrlogo.png';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [buttonText, setButtonText] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.main}>
      <Image source={img} style={styles.tinyLogo} />
      <Text style={styles.text}>Hello, world!</Text>
      <Button
        onPress={() => {
          setButtonText('hello');
        }}
        title="Dummy Button"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text style={styles.text}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default App;
