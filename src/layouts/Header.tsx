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
        <img src="../images/logo.png" alt="" />
        策码奔腾 | 目的旅行 | 不务正业
      </StyleHeader>
    );
  }
}

export default Header;
