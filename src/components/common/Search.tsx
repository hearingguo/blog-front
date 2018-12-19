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
    outline: none;
  }

  .iconfont {
    position: relative;
    z-index: 2;
    cursor: pointer;
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
    this.handleSearch = this.handleSearch.bind(this);
  }

  private handleSearch() {
    this.setState({
      isSearch: !this.state.isSearch
    });
    if (!this.state.isSearch) {
      // search
    }
  }

  public render() {
    return (
      <StyleLabel>
        <input
          className={`animated ${this.state.isSearch ? 'fadeInRight' : 'fadeOutRight'}`}
          type="search"
          placeholder="search..."
        />
        <span className="iconfont icon-search" onClick={this.handleSearch} />
      </StyleLabel>
    );
  }
}

export default Search;
