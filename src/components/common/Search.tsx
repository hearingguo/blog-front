import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../../config/style';

const StyleInput = styled.input`
  padding: ${styles.Gap.xs} ${styles.Gap.m};
`;

class Search extends Component {
  public render() {
    return (
      <label>
        <StyleInput type="search" placeholder="search..." />
      </label>
    );
  }
}

export default Search;
