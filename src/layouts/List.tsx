import React, { Component } from 'react';
import ListItem from '../components/common/ListItem';

class Lists extends Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="blog-lists">
        {this.props.lists.map((item: number, index: number) => {
          return <ListItem key={index} />;
        })}
      </div>
    );
  }
}

export default Lists;
