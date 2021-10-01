import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Layout } from 'antd';
import { Link } from 'react-router-dom';
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
	AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const Sidebar = ({ collapsed, setCollapsed }) => {
	return (
		<>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				width={190}
				style={{ userSelect: 'none', backgroundColor: '#304156' }}
			>
				<div
					style={{
						overflow: 'hidden',
						height: '64px',
						lineHeight: '64px',
						backgroundColor: '#304156',
						color: '#fff',
						fontSize: '20px',
						fontWeight: 600,
						textAlign: 'center',
					}}
				>
					<Link style={{ color: 'white' }} to='/'>
						Crypto
					</Link>
				</div>
				<Menu
					theme='dark'
					mode='inline'
					style={{ boxShadow: 'none', backgroundColor: '#304156' }}
				>
					<Menu.Item icon={<FundOutlined />}>
						<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
					</Menu.Item>
					<Menu.Item icon={<MoneyCollectOutlined />}>
						<Link to='/exchanges'>Exchanges</Link>
					</Menu.Item>
					<Menu.Item icon={<BulbOutlined />}>
						<Link to='/news'>News</Link>
					</Menu.Item>
				</Menu>
			</Sider>
		</>
	);
};

export default Sidebar;
