import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import styles from '../config/style';
import route from '../routes/config';
import Search from '../components/common/Search';
import logo from '../images/logo.png';

const StyleHeader = styled.div`
  border-bottom: 1px solid ${styles.Color.border};
  padding: ${styles.Gap.l};
  box-shadow: ${styles.Shadow.blackBottom};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleLogo = styled.a`
  display: inline-block;
  margin-right: 15px;
  width: 120px;
  height: 30px;
  background: url(${logo}) no-repeat;
  background-size: cover;
  vertical-align: middle;
`;

const StyleNavs = styled.div`
  display: inline-block;
`;

const StyleNav = styled.a`
  display: inline-block;
  padding: 0 ${styles.Gap.s};
  cursor: pointer;
  border-left: 1px solid ${styles.Color.border};
  line-height: 1;
  :nth-of-type(1) {
    border-left: 0;
  }
  :hover {
    color: ${styles.Color.themeDark};
  }
`;

class Header extends Component {
  public render() {
    return (
      // blog-header
      <StyleHeader>
        {/* blog-header-left */}
        <div>
          {/* blog-header-logo */}
          <StyleLogo />
          <StyleNavs>
            {route[0].routes.map((item: INavItem, index: number) => {
              return (
                <StyleNav key={index}>
                  <FormattedMessage id={item.sidebar} />
                </StyleNav>
              );
            })}
          </StyleNavs>
        </div>
        {/* blog-search */}
        <Search />
      </StyleHeader>
    );
  }
}

export default Header;
