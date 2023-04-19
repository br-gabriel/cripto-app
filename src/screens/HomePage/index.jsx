import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Header } from '../../components/HomePage/AppLogo';
import { CriptoList } from '../../components/HomePage/CriptosList';
import { SearchBar } from '../../components/HomePage/SearchBar';
import { Container } from './styles';
import { Loading } from '../../components/Loading';

export function Home() {
    const [loading, setLoading] = useState(true);
    const [currency, setCurrency] = useState('usd');
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            setLoading(true)
            const response = await api.get(`coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
            setData(response.data)
        } catch (error) {
            Alert.alert('Ops', 'Não foi possível carregar a lista de criptomoedas')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    if (loading) {
        return (
            <Loading bgColor={'#05043D'} />
        );
    };

    return (
        <Container>
            <Header />
            <SearchBar />
            <CriptoList data={data} currency={currency} setCurrency={setCurrency}/>
        </Container>
    )
};