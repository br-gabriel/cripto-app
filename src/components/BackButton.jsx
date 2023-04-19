import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
    const { goBack } = useNavigation();
    
    return (
        <View style={{ width: '90%', marginTop: 10, marginBottom: 10 }}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={goBack}
                style={{ width: '12%' }}
            >
                <Feather
                    name="arrow-left"
                    size={32}
                    color={'#fff'}
                />
            </TouchableOpacity>
        </View>
    )
}