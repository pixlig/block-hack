import React from 'react';
import { Row, Col, Form, Button, InputNumber, Select } from 'antd';
import { betterPost, getMarket } from './API.js'


const FormItem = Form.Item;

export default class NotificationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      quantity: 0,
      address: props.meter.address,
      transactionID: null,
      data: [],
    };
  }

  componentDidMount() {
    getMarket().then(marketList => this.setState({
      data: [
        { name: 'request successful', value: 'Request' },
      ],
    }))
  }

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
              <Select placeholder={"Select requests"} style={{ width: 120 }} onChange={this.handleSelect}>
                {this.state.data.map(item => (<Select.Option key={item.value} value={item.value}>{item.name}</Select.Option>))}
              </Select>
            </Row>
            <Row gutter={24}>
              <Col span={8} key={'quantity'}>
                <FormItem label={`Quantity`}>
                  <InputNumber min={0} max={10} step={1} value={this.state.quantity} onChange={(e) => this.handleChange('quantity', e)} />
                </FormItem>
              </Col>
            </Row>
          </Form>
          <Button type="primary" loading={this.state.fetching} onClick={this.handleSubmit}>Request</Button>
          <br />
          {this.state.transactionID ? `#{transactionID}` : "No transaction recorded"}
        </Col >
      </Row >
    );
  }
}