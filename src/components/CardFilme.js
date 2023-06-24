import { Link } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseUrl = "https://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get('window').width*0.9;

const MAX_HEIGHT = Dimensions.get('window').height*0.9;

export default function CardFilme({ filme }){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source=
            {{uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + "..." : filme.sinopse }</Text>
            

            <Link to={{screen: "MovieDetailsPage", params: {filme: filme}}}>Saiba mais...</Link>
            
            
            <Link style={styles.link} to={{screen: "#"}}><Text style={styles.btnText}>COMPRAR</Text></Link>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ded6c9',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
    },
    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: '15px'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sinopse: {
        marginBottom: 10,
        textAlign: 'justify'
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white'
    },
    link: {
        height: 50,
        width: '100%',
        backgroundColor: '#020001',
        marginTop: 20,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: '15px'
    }
})