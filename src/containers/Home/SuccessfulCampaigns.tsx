import * as React from 'react';
import { SuccessCard } from '../../components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Row } from 'react-bootstrap';
export class Sectionheading extends React.Component {
  render() {
    return (
      <div className="section_heading text-left">
        <h1>Successful Campaigns <span>by us</span></h1>
      </div>
    );
  }
}
class SucessfulCamp extends React.Component {
  render() {
    return (
      <div className="gradient_bg success_section">
       <div className="container">
        <div className="what_popular_inner">
        <Sectionheading />
        <Row>
        <SuccessCard
          title="Viola.AI Presale" 
          description="Viola.ai - The First Blockchain-AI-Driven Marketplace for Dating,
          Courtship & Marriage. Presale Successfully Ends!"
          image="images/campaigns01.png"
          href="#"
          ethValue={400}
          percentageValue={119.30}
        />
          <SuccessCard
            title="Gatcoin" 
            description="Gatcoin allows mainstream retailers to
            transform their reward and loyalty points into blockchain based rewards."
            image="images/campaigns2.png"
            href="#"
            ethValue={600}
            percentageValue={100}
          />
          <SuccessCard
            title="WandX" 
            description="Viola.ai - The First Blockchain-AI-Driven Marketplace for Dating,
            Courtship & Marriage. Presale Successfully Ends!"
            image="images/campaigns3.png"
            href="#"
            ethValue={400}
            percentageValue={119}
            
          />
          <SuccessCard
            title="Genaro Network" 
            description="Genaro is a Public Chain + Decentralized Storage Network to provide blockchain developers a
            smart contracts and store data."
            image="images/campaigns4.png"
            href="#"
            ethValue={1500}
            percentageValue={104.50}
          />
          <SuccessCard
            title="FundYourselfNow" 
            description="FundYourselfNow aims to be the Kickstarter version 2.0, that
            offers help to people to raise funds for their projects."
            image="images/campaigns5.png"
            href="#"
            ethValue={2000}
            percentageValue={104}
          />
          <SuccessCard
            title="Pundi X Presale" 
            description="Pundi X, a platform for consumerizing cryptocurrencies by
            enabling their use in retail Point of Sale through a mobile app."
            image="images/campaigns6.png"
            href="#"
            ethValue={300}
            percentageValue={100}
          />
          </Row>
        </div>
      </div>
      </div>
    );
  }
}

export default SucessfulCamp;
