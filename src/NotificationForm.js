import React from 'react';
import { Row, Col, Form, Button, InputNumber } from 'antd';
import { betterPost } from './API.js'


const FormItem = Form.Item;

export default class NotificationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      price: 0.0,
      quantity: 0.0,
      address: props.meter.address,
      transactionID: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      fetching: true,
    })
    betterPost({
      address: this.state.address,
      quantity: this.state.quantity,
    }).then(serverResponse =>
      this.setState({
        fetching: false,
        transactionID: serverResponse
      })
    );
  }

  handleChange = (param, value) => {
    this.setState({
      [param]: value,
    });
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <h1>Create Publication</h1>
          <Form>
            <Row gutter={24}>
              <Col span={8} key={'price'}>
                <FormItem label={`Price`}>
                  <InputNumber min={0} max={10} step={1} value={this.state.price} onChange={(e) => this.handleChange('price', e)} />
                </FormItem>
              </Col>
              <Col span={8} key={'quantity'}>
                <FormItem label={`Quantity`}>
                  <InputNumber min={0} max={10} step={1} value={this.state.quantity} onChange={(e) => this.handleChange('quantity', e)} />
                </FormItem>
              </Col>
            </Row>
          </Form>
          <Button type="primary" loading={this.state.fetching} onClick={this.handleSubmit}>Publish</Button>
          <br />
          {this.state.transactionID ? `#{transactionID}` : "No transaction recorded"}
        </Col >
      </Row >
    );
  }
}