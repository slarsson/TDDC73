import React, { useState } from 'react';
import CardForm from './components/CardForm';
import Card from './components/Card';

import {
  StyleSheet,
  View,
} from 'react-native';

const initialCardInfo = {
  cardNumber: '',
  cardName: '',
  expMonth: 'MM',
  expYear: 'YY',
  cardType: null,
  cvv: '',
  isRotated: false
}

const App = () => {

  const [cardInfo, setCardInfo] = useState(initialCardInfo);

  return (
  <>
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card cardInfo={cardInfo} />
      </View>
      <View style={styles.formContainer}>
        <CardForm cardInfo={cardInfo} setCardInfo={setCardInfo} />
      </View>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#000'
  },
  cardContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    flex: 2,
  }
});

export default App;