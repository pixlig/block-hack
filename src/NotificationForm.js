import React from 'react';
import { Row, Col, Form, Button, Input } from 'antd';
const FormItem = Form.Item;

export default function NotificationForm(props) {
  return (
    <Row>
      <Col span={24}>
        <h1>Create Notification</h1>
        <Form>
          <Row gutter={24}>
            <Col span={8} key={'price'}>
              <FormItem label={`Price`}>
                <Input placeholder="0.0" />
              </FormItem>
            </Col>
            <Col span={8} key={'quantity'}>
              <FormItem label={`Quantity`}>
                <Input placeholder="0.0" />
              </FormItem>
            </Col>
          </Row>
        </Form>
        <Button type="primary">Submit</Button>
      </Col >
    </Row >
  );
}