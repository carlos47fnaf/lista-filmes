import { View, Text, StyleSheet, Image } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
        <Image style={styles.imagem} source={{ uri: props.filme.imgfilme}} />  
        <Text style={{ color: 'darkred'}}> {props.filme.categoria} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'orange',
    width: '40%',
    height: 215,
    borderRadius: 10,
    margin: 15,
  },
  imagem: {
    resizeMode: 'stretch',
    width: '100%',
    height: 180,
  }
});     