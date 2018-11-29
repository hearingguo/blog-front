import React, { Component } from 'react';
import Footer from './Footer';
import SiderNav from './SideNav';

import Content from './Content';

class WrapLayout extends Component {
  public render() {
    return (
      <div className="vjr-wrap">
        <SiderNav />
        <div className="vjr-main">
          {/* main */}
          <Content />
          {/* footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default WrapLayout;
