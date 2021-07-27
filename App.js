import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice5.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const [muri, setMuri] = useState(DiceFive);

  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        setMuri(DiceFive);
        break;

      case 2:
        setUri(DiceTwo);
        setMuri(DiceSix);
        break;

      case 3:
        s ;
        break;

      case 4:
        setUri(DiceFour);
        setMuri(DiceTwo);
        break;

      case 5:
        setUri(DiceFive);
        setMuri(DiceThree);
        break;

      case 6:
        setUri(DiceSix);
        setMuri(DiceOne);
        break;
    }
  };

  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={styles.container}>
        <Image source={uri} style={styles.image} />
        <Pressable onPress={playButtonTapped}>
          <Text style={styles.button}>Play Me</Text>
        </Pressable>
        <Image source={muri} style={styles.image} />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 30,
    height: 200,
    width: 200,
  },
  button: {
    fontSize: 20,
    marginTop: 30,
    color: '#f2a365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ED0000',
  },
});
