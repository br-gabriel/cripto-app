import { LogoContainer, LogoTitle } from "./styles";
import { Image } from "react-native";

export function Header() {
    return (
        <LogoContainer>     
            <Image
                source={require('../../../../assets/icon.png')}
                style={{width: 46, height: 46}}
            />    

            <LogoTitle>
                CriptoTracker
            </LogoTitle>
        </LogoContainer>
    )
}