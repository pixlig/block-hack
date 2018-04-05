import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import NotificationForm from './NotificationForm';
import RequestForm from './RequestForm';
import participants from './participants';
import logo from './logo.png';

const { Header, Footer, Content } = Layout;



export default function MainView(props) {
  return (
    <Layout>
      <Header>
        <img className="App-logo" src={logo}/>
      </Header>
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Row>
            <Col span={6} offset={3}>
              <NotificationForm meter={participants()["meter1"]} />
            </Col>
            <Col span={6} offset={3}>
              <RequestForm meter={participants()["meter1"]} />
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>Made with <span role="img" aria-label="fun">😂</span> and <span role="img" aria-label="love">🧡</span> by Netpower</Footer>
    </Layout>
  );
}