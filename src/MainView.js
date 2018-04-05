import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import NotificationForm from './NotificationForm';


const { Header, Footer, Sider, Content } = Layout;


export default function MainView(props) {
  let { participants } = props;

  return (
    <Layout>
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
            <NotificationForm />
          </Col>
        </Row>
      </Content>
      <Footer>Made with 😂 and 🧡 by Netpower</Footer>
    </Layout>
  );
}