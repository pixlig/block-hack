import React from 'react';
import { Table } from 'antd';
import { getReport } from './API.js'


const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

const columns = [{
  title: 'Consumed',
  dataIndex: 'consumed',
  key: 'consumed',
}, {
  title: 'Produced',
  dataIndex: 'produced',
  key: 'produced',
},];

export default class OrdersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      data: [],
    };
  }

  componentDidMount() {
    getReport().then(marketList => this.setState({
      data: marketList,
    }))
  }


  render() {
  return <Table dataSource={this.state.data} columns={columns} />
  }
}
