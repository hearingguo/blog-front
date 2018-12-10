import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../config/style';

const StyleFooter = styled.div`
  padding: ${styles.Gap.m};
  text-align: center;
  border-top: 1px solid ${styles.Color.border};
  box-shadow: ${styles.Shadow.blackBottom};
`;

const StyleBorder = styled.span`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-top: 1px solid ${styles.Color.border};
`;

const StyleFooterItem = styled.div`
  position: relative;
  padding: ${styles.Gap.xs};
`;

const StyleFooterItemInline = styled(StyleFooterItem)`
  display: inline-block;
`;

const StyleLink = styled.span`
  display: inline-block;

  a {
    color: ${styles.Color.theme};
    text-decoration: none;
    :hover {
      color: ${styles.Color.themeDark};
      text-decoration: underline;
    }
  }
`;

class Footer extends Component {
  public render() {
    // blog-footer
    return (
      <StyleFooter>
        <StyleFooterItem>
          {['文天祥', '李白', '杜牧'].map((item: string, index: number) => {
            return (
              <StyleLink>
                <span dangerouslySetInnerHTML={{ __html: index !== 0 ? '&nbsp;&nbsp;&bull;&nbsp;&nbsp;' : '' }} />
                <a href="">{item}</a>
              </StyleLink>
            );
          })}
        </StyleFooterItem>
        <StyleFooterItemInline>
          <StyleBorder />
          {['文天祥', '李白'].map((item: string, index: number) => {
            return (
              <StyleLink>
                <span dangerouslySetInnerHTML={{ __html: index !== 0 ? '&nbsp;&nbsp;&bull;&nbsp;&nbsp;' : '' }} />
                <a href="">{item}</a>
              </StyleLink>
            );
          })}
        </StyleFooterItemInline>
      </StyleFooter>
    );
  }
}

export default Footer;
