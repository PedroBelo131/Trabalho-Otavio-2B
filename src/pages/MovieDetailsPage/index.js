import { Text, View } from "react-native";

export default function MovieDetailsPage({ route }){

    const { filme } = route.params;

    return(
        <View>
            <Text>Detalhes do Filme</Text>
            <Text>{filme.titulo}</Text>
            <Text>{filme.sinopse}</Text>
        </View>
    )
}
