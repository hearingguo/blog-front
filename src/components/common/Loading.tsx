import React, { Component } from 'react';
import styles from '../../config/style';
import styled from 'styled-components';

const StyleLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .loader {
    height: 40px;
    width: 40px;
    .loader_pulse {
      width: 100%;
      height: 100%;
      border-radius: 40px;
      background-color: #ff4b59;
      -webkit-animation: scaleout 1s infinite ease-in-out;
      animation: scaleout 1s infinite ease-in-out;
    }
  }

  @-webkit-keyframes scaleout {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
`;

class Loading extends Component {
  public render() {
    return (
      <StyleLoading>
        <div className="loader">
          <div className="loader_pulse" />
        </div>
      </StyleLoading>
    );
  }
}

export default Loading;
