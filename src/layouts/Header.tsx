import React, { Component } from 'react';
import styled from 'styled-components';

import styles from '../config/style';

const StyleHeader = styled.div`
  border-bottom: 1px solid ${styles.Color.border};
  padding: ${styles.Gap.l};
  box-shadow: ${styles.Shadow.blackBottom};
`;

class Header extends Component {
  public render() {
    return (
      <StyleHeader className="blog-header">
        <div className="blog-navs">
          <a className="blog-header-logo" />
          策码奔腾 | 目的旅行 | 不务正业
        </div>
        <div className="blog-search">search</div>
      </StyleHeader>
    );
  }
}

export default Header;
