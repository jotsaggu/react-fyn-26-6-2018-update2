import * as React from 'react';
// import MainHeader from '../MainHeader/MainHeader';
import MainFooter from '../MainFooter/MainFooter';

export interface MainContainerProps {
  children?: React.ReactNode;
}
class MainContainer extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="main_box">
        {/* <MainHeader /> */}
        {children}
        <MainFooter />
      </div>
    );
  }
}

export default MainContainer;
