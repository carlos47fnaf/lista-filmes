import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: props.filme.imgfilme }} />
      <Text style={{color: "white", margin: 2 }}>{props.filme.titulo}</Text>
      <Text style={{ color: "white", fontWeight: "bold" }}> {props.filme.genero} </Text>
      <TouchableOpacity onPress={props.removerItem} style={styles.botao}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0F0F0F",
    color: "white",
    width: "40%",
    height: 320,
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
