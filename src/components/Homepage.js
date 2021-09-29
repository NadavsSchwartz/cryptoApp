import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Layout } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';

const { Title } = Typography;

const Homepage = () => {
	const { data, isFetching } = useGetCryptosQuery(3);
	console.log(data);
	const globalStats = data?.data?.stats;

	if (isFetching) return <Loader />;

	return (
		<Layout>
			<Content style={{ padding: '20px' }}>
				<Title>Global Crypto Stats</Title>
				<Row gutter={[32, 32]}>
					<Col span={12}>
						<Statistic
							title='Total Cryptocurrencies'
							value={globalStats.total}
						/>
					</Col>
					<Col span={12}>
						<Statistic
							title='Total Exchanges'
							value={millify(globalStats.totalExchanges)}
						/>
					</Col>
					<Col span={12}>
						<Statistic
							title='Total Market Cap:'
							value={`$${millify(globalStats.totalMarketCap)}`}
						/>
					</Col>
					<Col span={12}>
						<Statistic
							title='Total 24h Volume'
							value={`$${millify(globalStats.total24hVolume)}`}
						/>
					</Col>
					<Col span={12}>
						<Statistic
							title='Total Cryptocurrencies'
							value={globalStats.total}
						/>
					</Col>
					<Col span={12}>
						<Statistic
							title='Total Markets'
							value={millify(globalStats.totalMarkets)}
						/>
					</Col>
				</Row>
				<div className='home-heading-container'>
					<Title level={2} className='home-title'>
						Top 10 Cryptos In The World
					</Title>
					<Title level={3} className='show-more'>
						<Link to='/cryptocurrencies'>Show more</Link>
					</Title>
				</div>
				<Cryptocurrencies simplified />
				<div className='home-heading-container'>
					<Title level={2} className='home-title'>
						Latest Crypto News
					</Title>
					<Title level={3}>
						<Link to='/news'>Show more</Link>
					</Title>
				</div>
				<News simplified />
			</Content>
		</Layout>
	);
};

export default Homepage;
