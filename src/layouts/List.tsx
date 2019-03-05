import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import Pagination from '../components/common/Pagination';
import styled from 'styled-components';

const StyleEssayList = styled.div`
  ul {
    padding-left: 130px;
  }
`;

interface IProps {
  lists: any[];
}

class Lists extends Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    console.log(this.props.lists);
    return (
      <StyleEssayList>
        <ul>
          {this.props.lists.map((item: number, index: number) => {
            return <ListItem key={index} article={item} />;
          })}
        </ul>
        <Pagination />
      </StyleEssayList>
    );
  }
}

export default Lists;
