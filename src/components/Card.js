import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: props.filme.imgfilme }} />
      <Text style={{color: "black", margin: 2, fontWeight: "bold" }}>{props.filme.titulo}</Text>
      <Text style={{colo: "grey", margin: 2, fontWeight: "semiBold"}}>{props.filme.genero}</Text>
      <TouchableOpacity onPress={props.removerItem} style={styles.botao}>
        <Text style={{ color: "orange", fontWeight: "bold" }}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "40%",
    height: 350,
    borderRadius: 10,
    margin: 15,
  },
  imagem: {
    resizeMode: "stretch",
    width: "100%",
    height: 260,
    borderRadius: 10,
  },
});
