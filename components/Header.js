import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Carros vendidos no Brasil</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3BA3ED',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    width: '100%',
    height: '25%',
    elevation: 20,
  },
  tittle: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    color: '#fff',
  },
});
