import { Filter, ButtonFilter, FilterText, SelectedFilter } from "./styles";

export function QuotationList() {
    return (
        <>
            <Filter>
                <ButtonFilter
                    onPress={() => {}}
                >
                    <FilterText>D</FilterText>
                </ButtonFilter>

                <ButtonFilter
                    onPress={() => {}}
                >
                    <FilterText>7D</FilterText>
                </ButtonFilter>

                <ButtonFilter
                    onPress={() => {}}
                >
                    <FilterText>1M</FilterText>
                </ButtonFilter>

                <ButtonFilter
                    onPress={() => {}}
                >
                    <FilterText>6M</FilterText>
                </ButtonFilter>

                <ButtonFilter
                    onPress={() => {}}
                >
                    <FilterText>1A</FilterText>
                </ButtonFilter>

                <ButtonFilter
                    onPress={() => {}}
                >
                    <FilterText>MÁX</FilterText>
                </ButtonFilter>
            </Filter>
        </>
    )
}