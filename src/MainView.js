import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import NotificationForm from './NotificationForm';
import RequestForm from './RequestForm';
import participants from './participants';

const { Header, Footer, Content } = Layout;


export default function MainView(props) {
  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Row>
          <Col span={6}>
            <NotificationForm meter={participants()["meter1"]}/>
          </Col>
          <Col span={6}>
            <RequestForm meter={participants()["meter1"]} />
          </Col>
        </Row>
      </Content>
      <Footer>Made with <span role="img" aria-label="fun">😂</span> and <span role="img" aria-label="love">🧡</span> by Netpower</Footer>
    </Layout>
  );
}