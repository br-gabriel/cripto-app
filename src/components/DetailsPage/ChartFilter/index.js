import { Filter, FilterButton, FilterText  } from "./styles";

export function ChartFilter() {
    return (
        <Filter>
            <FilterButton>
                <FilterText>H</FilterText>
            </FilterButton>

            <FilterButton>
                <FilterText>D</FilterText>
            </FilterButton>

            <FilterButton>
                <FilterText>7D</FilterText>
            </FilterButton>

            <FilterButton>
                <FilterText>M</FilterText>
            </FilterButton>

            <FilterButton>
                <FilterText>1A</FilterText>
            </FilterButton>

            <FilterButton>
                <FilterText>MAX</FilterText>
            </FilterButton>
        </Filter>
    )
}