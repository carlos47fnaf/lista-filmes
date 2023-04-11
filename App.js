import { StyleSheet, View, Text, ScrollView } from "react-native";
import Card from "./src/components/Card";
import React from "react";

export default function App() {
  const [filmes, setFilmes] = React.useState([
    {
      id: 1,
      imgfilme:
        "https://www.shoppingcidadedasflores.com.br/wp-content/uploads/sites/244/2023/03/12654_medio.jpg",
      titulo: "Jhon Wick 4: Baba Yaga",
      genero: "Ação",
    },
    {
      id: 2,
      imgfilme:
        "https://a-static.mlcdn.com.br/1500x1500/poster-gigante-top-gun-maverick-editora-europa/eurobest/107032/e32e0a7f4b4d8888e8abbf4e281e8ffd.jpg",
      titulo: "Top gun: Maverick",
      genero: "Ação",
    },
    {
      id: 3,
      imgfilme:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81NcnbKcqOL._AC_SX679_.jpg",
      titulo: "Guardiões da galaxya: Volume 3",
      genero: "Ação",
    },
    {
      id: 4,
      imgfilme:
        "https://sm.ign.com/ign_br/screenshot/default/fn0dezjxoawjcym_92km.jpg",
      titulo: "Velozes e furiosos X",
      genero: "Ação",
    },
    {
      id: 5,
      imgfilme:
        "https://uauposters.com.br/media/catalog/product/cache/1/thumbnail/800x930/9df78eab33525d08d6e5fb8d27136e95/8/5/855020221026-uau-posters-avatar-2-way-of-the-water-filmes.jpg",
      titulo: "Avatar: O caminho da água",
      genero: "Aventura",
    },
   
  ]);

  const removerItem = (id) => {
    const index = filmes.findIndex((filme) => filme.id === id);
    const novaLista = [...filmes];
    novaLista.splice(index, 1);
    setFilmes(novaLista);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, color: "white" }}>5 filmes online</Text>
        <View style={styles.main}>
          {filmes.map((filmes) => (
            <Card 
            filme={filmes} 
            removerItem={() => removerItem(filmes.id)} 
            key={filmes.id} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  main: {
    flex: 1,
    backgroundColor: "#ccc",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
});
