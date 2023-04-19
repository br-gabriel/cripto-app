import { View, ActivityIndicator } from "react-native";

export function Loading({bgColor}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor}}>
            <ActivityIndicator color='#fff'/>
        </View>
    )
}