import React from 'react';
import { Row, Col, Form, Button, InputNumber, Select } from 'antd';
import { betterPost } from './API.js'


const FormItem = Form.Item;

export default class NotificationForm extends React.Component {
  state = {
    fetching: false,
    quantity: 0.0,
    address: "1KnwwevSxQ9AwGQa4UHRtWnGvMyqwEwrJ8rpKE",
    transactionID: null,
    data: [
      {name: 'race', value: 'Racing car sprays burning fuel into crowd.'},
      {name: 'Japanese', value: 'Japanese princess to wed commoner.'},
      {name: 'Australian', value: 'Australian walks 100km after outback crash.'},
      {name: 'Man', value: 'Man charged over missing wedding girl.'},
      {name: 'Los', value: 'Los Angeles battles huge wildfires.'},
    ],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      fetching: true,
    })
    betterPost({
      address: this.state.address,
      quantity: this.state.quantity,
    })
  }

  handleChange = (param, value) => {
    this.setState({
      [param]: value,
    });
  }

  handleSelect = (param, value) => {
    this.setState({
      [param]: value,
    });
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <h1>Create Request</h1>
          <Form>
            <Row gutter={24}>
              <Select defaultValue="Los" style={{ width: 120 }} onChange={this.handleSelect}>
                {this.state.data.map(item => (<Select.Option value={item.value}>{item.name}</Select.Option>))}
              </Select>
            </Row>
            <Row gutter={24}>
              <Col span={8} key={'quantity'}>
                <FormItem label={`Quantity`}>
                  <InputNumber min={0} max={10} step={0.1} value={this.state.quantity} onChange={(e) => this.handleChange('quantity', e)} />
                </FormItem>
              </Col>
            </Row>
          </Form>
          <Button type="primary" loading={this.state.fetching} onClick={this.handleSubmit}>Submit</Button>
          <br/>
          {this.state.transactionID ? `#{transactionID}` : "No transaction recorded"}
        </Col >
      </Row >
    );
  }
}