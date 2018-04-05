import React from 'react';
import { Table } from 'antd';
import { getReport } from './API.js'

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
    let i = 0;
    getReport().then(marketList => this.setState({
      data: marketList.map(item => {
        item.key = i++;
        return item;
      }),
    }))
  }


  render() {
    return <Table dataSource={this.state.data} columns={columns} />
  }
}
