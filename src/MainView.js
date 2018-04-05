import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Button, Input } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function MainView(props) {
  return (<Layout>
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Row>
        <Col span={6}>
          <h1>Hello, {props.ame}</h1>
          <Button type="primary">Primary</Button>
          <Input placeholder="Basic usage" />
        </Col>
        <Col span={6}>
          <h1>Hello, {props.name}</h1>
        </Col>
      </Row>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
  );
}