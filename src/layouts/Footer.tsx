import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as actionCreators from '@/actions/links';
import styles from '../config/style';
import { FOOTER_IN_ITEMS } from '@/contants/index';
import { injectIntl, InjectedIntlProps, FormattedMessage } from 'react-intl';

const StyleFooter = styled.div`
  padding: ${styles.Gap.s};
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
  padding: ${styles.Gap.s};
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

interface StateProps {
  links: IListItem<ILinkItem>;
}

interface DispatchProps {
  fetchLinks: () => void;
}

class Footer extends Component<StateProps & DispatchProps & InjectedIntlProps> {
  public componentDidMount() {
    const { fetchLinks } = this.props;
    fetchLinks();
  }

  public render() {
    const { links, intl } = this.props;
    return (
      <StyleFooter>
        <StyleFooterItem>
          {links.list.map((item, index) => {
            return (
              <StyleLink key={index}>
                <span dangerouslySetInnerHTML={{ __html: index !== 0 ? '&nbsp;&nbsp;&bull;&nbsp;&nbsp;' : '' }} />
                <a target="_blank" href={item.url}>
                  {item.name}
                </a>
              </StyleLink>
            );
          })}
        </StyleFooterItem>
        <StyleFooterItemInline>
          <StyleBorder />
          {FOOTER_IN_ITEMS.map((item, index) => {
            return (
              <StyleLink key={index}>
                <span dangerouslySetInnerHTML={{ __html: index !== 0 ? '&nbsp;&nbsp;&bull;&nbsp;&nbsp;' : '' }} />
                <a href={item.path}>
                  <FormattedMessage id={item.id} />
                </a>
              </StyleLink>
            );
          })}
        </StyleFooterItemInline>
      </StyleFooter>
    );
  }
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({ links: state.links }),
  (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch)
)(injectIntl(Footer));
