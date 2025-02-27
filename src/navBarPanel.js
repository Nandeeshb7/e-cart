import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Header } = Layout;

const NavBar = () => {
    const cartProducts = useSelector((state) => state.cart || []);

    console.log('cartProducts:', cartProducts);

    return (
        <Layout>
            <Header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="logo">
                    <Link to="/" style={{ color: 'white', fontSize: '20px' }}>Redux Toolkit</Link>
                </div>
                <Menu theme="dark" mode="horizontal" style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                    <Menu.Item key="1">
                        <Link to="/">Product</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/cart">
                            My Bag <Badge count={cartProducts?.length} showZero />
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
}

export default NavBar;
