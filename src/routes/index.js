import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { useAuth } from "../contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default function Routes(){

    
    const { logado, loading } = useAuth();

    if(loading){
        return(
            <View style={{flex: 1, alignItems: 'center',justifyContent: 'center' }}>
                <ActivityIndicator size={'large'} color="#FFC0CB"/>
            </View>
        )
    }

    return(
        logado == true ? <AppRoutes /> : <AuthRoutes />
    )
}