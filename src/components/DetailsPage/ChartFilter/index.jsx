import { Filter, FilterButton, FilterText } from "./styles";

export function ChartFilter({ setFilter, setInterval }) {
    function handleFilter(value) {
        if (value === "1") {
            setInterval('')
            setFilter(value)
        } else {
            setInterval('&interval=daily')
            setFilter(value)
        }
    }

    return (
        <Filter>
            <FilterButton onPress={() => handleFilter("7")}>
                <FilterText>7D</FilterText>
            </FilterButton>

            <FilterButton onPress={() => handleFilter("15")}>
                <FilterText>15D</FilterText>
            </FilterButton>

            <FilterButton onPress={() => handleFilter("31")}>
                <FilterText>1M</FilterText>
            </FilterButton>

            <FilterButton onPress={() => handleFilter("180")}>
                <FilterText>6M</FilterText>
            </FilterButton>

            <FilterButton onPress={() => handleFilter("365")}>
                <FilterText>1A</FilterText>
            </FilterButton>

            {/* <FilterButton onPress={() => handleFilter("max")}>
                <FilterText>MAX</FilterText>
            </FilterButton> */}
        </Filter>
    )
}