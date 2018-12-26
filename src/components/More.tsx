import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import styles from '../config/style';
import styled from 'styled-components';

const StylePullDown = styled.li`
  margin: 10px 0 0 -37px;
  position: relative;
  cursor: pointer;
  .icon {
    fontsize: 24px;
  }
  .tips {
    display: none;
    position: absolute;
    top: 0;
    left: -60px;
    margin-left: ${styles.Gap.s};
    font-size: ${styles.Size.xs};
    color: ${styles.Color.themeGray};
  }
  &:hover {
    .tips {
      display: inline-block;
    }
  }
`;
class More extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <StylePullDown>
        <span className="iconfont icon-pull-down" />
        <span className="tips">MORE</span>
      </StylePullDown>
    );
  }
}

export default More;
