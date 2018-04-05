import React from 'react';
import { Row, Col } from 'antd';

export default function MainView(props) {
  return (<Row>
    <Col span={6}>
      <h1>Hello, {props.ame}</h1>
    </Col>
    <Col span={6}>
      <h1>Hello, {props.name}</h1>
    </Col>
  </Row>);
}