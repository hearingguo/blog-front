import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

import Content from './Content';

class WrapLayout extends Component {
  public render() {
    return (
      <div className="blog-wrap">
        {/* header */}
        <Header />

        {/* main */}
        <Content />

        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default WrapLayout;
