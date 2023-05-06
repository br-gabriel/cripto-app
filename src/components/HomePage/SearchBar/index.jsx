import { SearchContainer, SearchField, SearchButton } from "./styles";
import { Ionicons } from '@expo/vector-icons';

export function SearchBar({search, setSearch, searchResult}) {
    function handleSearchText(text) {
        setSearch(text)
    }

    function handleSubmit() {
        searchResult()
    }
    
    return (
        <SearchContainer>
            <SearchField 
                onChangeText={handleSearchText}
                onSubmitEditing={handleSubmit}
                value={search}
            />

            <SearchButton onPress={handleSubmit}>
                <Ionicons name="search" size={20} color="white" />
            </SearchButton>
        </SearchContainer>
    )
}