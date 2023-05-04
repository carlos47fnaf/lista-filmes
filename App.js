import { StyleSheet, View, Text, ScrollView, TextInput,  } from "react-native";
import Card from "./src/components/Card";
import React from "react";
import { Image } from 'react-native';


export default function App() {
  const [filmes, setFilmes] = React.useState([
    {
      id: 1,
      imgfilme:
        "https://tfcprw.vtexassets.com/arquivos/ids/157344-1200-auto?v=637976645140470000&width=1200&height=auto&aspect=true",
      titulo: "CAMISETA PLUS SIZE DUPLA FACE ONE PIECE LOGOS",
      genero: "R$89,90",
    },
    
    {
      id: 2,
      imgfilme:
        "https://tfcprw.vtexassets.com/arquivos/ids/157344-1200-auto?v=637976645140470000&width=1200&height=auto&aspect=true",
      titulo: "CAMISETA PLUS SIZE DUPLA FACE ONE PIECE LOGOS",
      genero: "R$89,90",
    },
    {
      id: 3,
      imgfilme:
        "https://tfcprw.vtexassets.com/arquivos/ids/157344-1200-auto?v=637976645140470000&width=1200&height=auto&aspect=true",
      titulo: "CAMISETA PLUS SIZE DUPLA FACE ONE PIECE LOGOS",
      genero: "R$89,90",
    },
    {
      id: 4,
      imgfilme:
        "https://tfcprw.vtexassets.com/arquivos/ids/157344-1200-auto?v=637976645140470000&width=1200&height=auto&aspect=true",
      titulo: "CAMISETA PLUS SIZE DUPLA FACE ONE PIECE LOGOS",
      genero: "R$89,90",
    },
    {
      id: 5,
      imgfilme:
        "https://tfcprw.vtexassets.com/arquivos/ids/157344-1200-auto?v=637976645140470000&width=1200&height=auto&aspect=true",
      titulo: "CAMISETA PLUS SIZE DUPLA FACE ONE PIECE LOGOS",
      genero: "R$89,90",
    },
    
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={{ fontSize: 25, color: "orange", fontWeight: "bold"}}>TechnoGeek</Text>
        <TextInput style={{ backgroundColor: "white", borderRadius: "5px"}} />
        <Text style={{fontSize: "200%"}}>👨‍🦱</Text>
        </View>
        <View style={{fontSize: "120%", fontWeight: "bold", color: "white" }}>Mais vendidos da semana</View>
        <View style={styles.main}>
          {filmes.map((filmes) => (
            <Card 
            filme={filmes} 
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
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
    
  },
  main: {
    flex: 1,
    backgroundColor: "#140028",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
