import React, { Component } from 'react';
import styles from '../../config/style';
import styled from 'styled-components';

const StyleLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class Loading extends Component {
  public render() {
    return <StyleLoading>loading...</StyleLoading>;
  }
}

export default Loading;
