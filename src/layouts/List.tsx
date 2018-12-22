import React, { Component } from 'react';
import ListItem from '../components/common/ListItem';

class Lists extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <ul style={{ paddingLeft: '130px' }}>
        {this.props.lists.map((item: number, index: number) => {
          return <ListItem key={index} article={item} />;
        })}
      </ul>
    );
  }
}

export default Lists;
