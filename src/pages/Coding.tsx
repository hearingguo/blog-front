import React, { Component } from 'react';
import List from '../layouts/List';

import { getArticles } from '../service';
import { dispatch } from 'rxjs/internal/observable/pairs';

const lists = [
  {
    title: 123,
    desc: '123',
    time: '2018-12-20 12:00:00',
    reads: 10,
    comments: 20,
    likes: 10
  },
  {
    title: 124,
    desc: '124',
    time: '2018-12-20 12:00:00',
    reads: 10,
    comments: 20,
    likes: 10
  }
];

class Coding extends Component {
  private componentDidMount = async () => {
    const res = getArticles({});
    dispatch();
  };
  public render() {
    return <List lists={lists} />;
  }
}

export default Coding;
