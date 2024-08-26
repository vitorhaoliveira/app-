import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Pokemon(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.text}>{props.rarity}</Text>
      {props.photo ? (
        <Image source={{ uri: props.photo }} style={styles.image} />
      ) : (
        <Text>No image available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 200,
  },
});
