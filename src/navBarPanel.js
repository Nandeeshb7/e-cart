import React, { useState } from "react";
import { Layout, Menu, Badge, Row, Col, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const { Header } = Layout;

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart || []);
  const [visible, setVisible] = useState(false); // State to control drawer visibility

  return (
    <Layout>
      <Header className="header">
        <Row justify="space-between" align="middle" className="nav-row">
          {/* Left: Logo */}
          <Col>
            <Link to="/" className="logo">Redux Toolkit</Link>
          </Col>

          {/* Right: Desktop Menu (Hidden on Mobile) */}
          <Col className="desktop-menu">
            <Menu theme="dark" mode="horizontal" className="nav-menu">
              <Menu.Item key="1">
                <Link to="/">Products</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/cart">
                  My Bag <Badge count={cartProducts?.length} showZero />
                </Link>
              </Menu.Item>
            </Menu>
          </Col>

          {/* Right: Mobile Menu Button (Hidden on Desktop) */}
          <Col className="mobile-menu">
            <Button
              type="text"
              icon={<MenuOutlined />}
              className="menu-button"
              onClick={() => setVisible(true)}
            />
          </Col>
        </Row>

        {/* Mobile Drawer Menu */}
        <Drawer
          title="Menu"
          placement="right"
          closable
          onClose={() => setVisible(false)}
          visible={visible}
        >
          <Menu mode="vertical" onClick={() => setVisible(false)}>
            <Menu.Item key="1">
              <Link to="/">Products</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/cart">
                My Bag <Badge count={cartProducts?.length} showZero />
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default NavBar;
