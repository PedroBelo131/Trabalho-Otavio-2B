import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import CardFilme from '../../components/CardFilme';

export default function MoviesPage(){

    let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto =>{
        console.log(objeto);
        setFilmes(objeto.data);
      })
  }, []);

    return(
        <SafeAreaView style={styles.container}>
        { filmes.length > 0 ? <ScrollView horizontal>
          {
            filmes.map(filme => <CardFilme key=
            {filme.id} filme={filme.attributes}/>)
          }
        </ScrollView>: <ActivityIndicator size={'large'} color="#FFC0CB"/>}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });