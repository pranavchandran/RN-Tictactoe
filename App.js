import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button
} from 'react-native';

import {
        NativeBaseProvider,
        Text, 
        H1,
        Container,
        Content,
        Header,
        Body,
        Card,
        Title,
      } from 'native-base'

import Icons1 from './components/Icons'

import Snackbar from 'react-native-snackbar';

// import Cardcomp from './components/Cardcomp';

const itemArray = new Array(9).fill('empty');

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#00ff00',
        textColor: '#ffffff',
      })
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'You already clicked this button',
        backgroundColor: '#ff0000',
        textColor: '#ffffff'
      })
    }

    checkIsWin();
  }

  const resetGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  }

  const checkIsWin = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} won`);
    }
  
    if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMessage(`${itemArray[3]} won`)
    }
  
    if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} won`)
    }
    if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} won`)
    }
    if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setWinMessage(`${itemArray[1]} won`)
    }
    if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} won`)
    }
    if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} won`)
    }
    if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} won`)
    }
    // draw
    if (
      itemArray[0] !== 'empty' &&
      itemArray[1] !== 'empty' &&
      itemArray[2] !== 'empty' &&
      itemArray[3] !== 'empty' &&
      itemArray[4] !== 'empty' &&
      itemArray[5] !== 'empty' &&
      itemArray[6] !== 'empty' &&
      itemArray[7] !== 'empty' &&
      itemArray[8] !== 'empty'
    ) {
      setWinMessage('Draw')
    }
  }

  return (
    <NativeBaseProvider>
      <View style={styles.grid}>
        {itemArray.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => changeItem(index)}
            >
            <Icons1 name={item}/> 
          </TouchableOpacity>
        ))}
      </View>

    
      {
      winMessage ? (
        <View style={styles.message}>
          <Text
          style={styles.message}>
          {winMessage}</Text>
          <Button onPress={resetGame}
          primary
          block
          rounded
          title="Play Again"
          >
          </Button>
        </View>
        ) : (
          <View style={styles.message}>
            {isCross ? <Text
            style={styles.message}
            >Cross</Text> : <Text
            style={styles.message}
            >Circle</Text>}
          </View>
        )}

    </NativeBaseProvider>

  );
};


export default App;


const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  box: {
    width: '33%',
    marginBottom: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    marginTop: 20,
    margin: 50,
    backgroundColor: '#4652b3',
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 40,
    fontWeight: 'bold',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
});

