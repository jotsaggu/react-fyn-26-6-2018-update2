import * as React from 'react';
import { MainContainer, Carousel } from '../components';
import SucessfulCam from './Home/SuccessfulCampaigns';
import FeatureIoc from './Home/FeaturedIoc';
import BannerTop from './Home/BannerTop';
import PostIcos from './Home/PostIcos';
import IocProject from './Home/IcoProject';
import SubscribeSec from './Home/SubscribeSection';
import MainHeader2 from './Home/HeaderNew';
class Shadow extends React.Component {
  render() {
    return (<div className="shadow text-center"><img src="images/shadow.png" alt=""/></div>);
  }
}
const HomeSections = () => (
  <div>
    <BannerTop />
    <FeatureIoc />
    <IocProject />
    <SucessfulCam />
    <Shadow />
  </div>
);
class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <MainHeader2 />
        <HomeSections />
        <Carousel />
        <SubscribeSec />
        <PostIcos />
      </MainContainer>
    
    );
  }
}

export default Home;
