import { SearchContainer, SearchField, SearchButton } from "./styles";
import { Ionicons } from '@expo/vector-icons';

export function SearchBar() {
    return (
        <SearchContainer>
            <SearchField />
            <SearchButton>
                <Ionicons name="search" size={24} color="white" />
            </SearchButton>
        </SearchContainer>
    )
}