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
  articles: IListItem<any>;
  path: string;
}

class Lists extends Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { articles } = this.props;
    return (
      <StyleEssayList>
        <ul>
          {articles.list.map((item: number, index: number) => {
            return <ListItem key={index} article={item} />;
          })}
        </ul>
        <Pagination />
      </StyleEssayList>
    );
  }
}

export default Lists;
