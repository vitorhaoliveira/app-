import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Pokemon from './components/Pokemon';
import Header from './components/Header';

export default function App() {
  const [dataAPI, setDataAPI] = useState([])
  const urlAPI = `https://cat-fact.herokuapp.com/facts/591f98803b90f7150a19c229`;

  useEffect(() => {
    fetch(urlAPI)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Dados recebidos:', data); // Verifique a estrutura dos dados
        setDataAPI(data.data || data); // Ajuste conforme a estrutura dos dados
      })
      .catch(error => {
        console.error('Houve um problema com a requisição Fetch:', error);
      });
  }, []);
  
  console.log(dataAPI)

  return (
    <View style={styles.container}>
      <Header />
      <Pokemon
        name={dataAPI.text || 'Texto não disponível'}
        rarity={dataAPI.user?.name?.first || 'Nome não disponível'}
        images={dataAPI.user?.photo || []}
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
