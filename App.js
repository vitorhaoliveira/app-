import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Pokemon from './components/Pokemon';
import Header from './components/Header';

export default function App() {
  const [dataAPI, setDataAPI] = useState([])
  const urlAPI = `https://cat-fact.herokuapp.com/facts/591f98803b90f7150a19c229`;

  useEffect(() => {
    fetch(urlAPI)
      .then(response => response.json())
      .then(data => {
        setDataAPI(data) 
      })
  }, [])

  console.log(dataAPI)

  return (
    <View style={styles.container}>
      <Header />
      <Pokemon
        name={dataAPI.text}
        rarity={dataAPI.user.name.first}
        images={dataAPI.images}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Roboto",
  },
});
