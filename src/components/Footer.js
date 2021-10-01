import { Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer
			style={{
				alignSelf: 'center',
				padding: '15px 5px',
				fontSize: '12px',
				backgroundColor: '#304156',
				width: '100%',
			}}
		>
			<Space
				style={{
					alignSelf: 'center',
				}}
			>
				<Link to='/'>Home</Link>
				<Link to='/exchanges'>Exchanges</Link>
				<Link to='/news'>News</Link>
			</Space>
			<Typography.Title
				level={5}
				style={{ color: 'white', textAlign: 'center' }}
			>
				Copyright &copy; 2020-{currentYear}
				<Link to='/'>Cryptoverse Inc.</Link> <br />
				All Rights Reserved.
			</Typography.Title>
		</footer>
	);
};

export default Footer;