import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from './src/components/Card';


export default function App() {

  const filmes = [
    {
    id: 1,
    imgfilme:"https://www.shoppingcidadedasflores.com.br/wp-content/uploads/sites/244/2023/03/12654_medio.jpg",
    genero:'Ação',
  },
  {
    id: 2,
    imgfilme:"https://www.shoppingcidadedasflores.com.br/wp-content/uploads/sites/244/2023/03/12654_medio.jpg",
    genero:'Ação',
  },
  {
    id: 3,
    imgfilme:"https://www.shoppingcidadedasflores.com.br/wp-content/uploads/sites/244/2023/03/12654_medio.jpg",
    genero:'Ação',
  },
  {
    id: 4,
    imgfilme:"https://www.shoppingcidadedasflores.com.br/wp-content/uploads/sites/244/2023/03/12654_medio.jpg",
    genero:'Ação',
  },
  {
    id: 5,
    imgfilme:"https://www.shoppingcidadedasflores.com.br/wp-content/uploads/sites/244/2023/03/12654_medio.jpg",
    genero:'Ação',
  },
  ]

  return(
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 20}} >
          Bem vindo.
        </Text>
      <View style={styles.main}>
      {filmes.map(filmes => <Card filme={filme} key={filmes.id} />)}  
      </View>  
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  main: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  }

});

 