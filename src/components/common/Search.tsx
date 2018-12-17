import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../../config/style';

const StyleLabel = styled.label`
  display: flex;
  align-items: center;
  padding: ${styles.Gap.xs} ${styles.Gap.m};
  line-height: 1.3rem;

  input {
    margin-right: ${styles.Gap.s};
    border: 0;
    font-size: 1rem;
  }
`;

interface IProps {
  //
}

interface IState {
  isSearch: boolean;
}

class Search extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isSearch: false
    };
  }

  public render() {
    return (
      <StyleLabel>
        <input
          className={`animated ${this.state.isSearch ? 'fadeInRight' : ''}`}
          type="search"
          placeholder="search..."
        />
        <span className="iconfont icon-search" />
      </StyleLabel>
    );
  }
}

export default Search;
