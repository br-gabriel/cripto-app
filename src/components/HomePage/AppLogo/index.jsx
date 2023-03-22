import { LogoContainer, LogoTitle } from "./styles";
import LogoIcon from "../../../../assets/icon.svg";

export function Header() {
    return (
        <LogoContainer>     
            <LogoIcon />     

            <LogoTitle>
                CriptoTracker
            </LogoTitle>
        </LogoContainer>
    )
}