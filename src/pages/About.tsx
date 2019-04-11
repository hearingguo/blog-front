import React, { Component } from 'react';
import styles from '../config/style';
import styled from 'styled-components';

const StyleHome = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

class About extends Component {
  public render() {
    return <div>关于我</div>;
  }
}

export default About;
