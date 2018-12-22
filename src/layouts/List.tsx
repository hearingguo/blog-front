import React, { Component } from 'react';
import ListItem from '../components/common/ListItem';
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

class Lists extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <ul style={{ paddingLeft: '130px' }}>
        {this.props.lists.map((item: number, index: number) => {
          return <ListItem key={index} article={item} />;
        })}
        <StylePullDown>
          <span className="iconfont icon-pull-down" />
          <span className="tips">MORE</span>
        </StylePullDown>
      </ul>
    );
  }
}

export default Lists;
