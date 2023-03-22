import { Header } from '../../components/HomePage/AppLogo';
import { CriptoList } from '../../components/HomePage/CriptosList';
import { SearchBar } from '../../components/HomePage/SearchBar';
import { Container } from './styles';

export function Home() {
    return (
        <Container>
            <Header />
            <SearchBar />
            <CriptoList />
        </Container>
    )
};