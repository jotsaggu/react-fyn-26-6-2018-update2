import * as React from 'react';
import FeatureIocCard from '../../components/Cards/FeatureCardIoc';

export class Sectionheading extends React.Component {
  render() {
    return (
      <div className="section_heading text-left">
        <h1>Featured <span>ICOs</span></h1>
      </div>
    );
  }
}
export class FeatureIoc extends React.Component {
  render() {
    return (
        <div className="container">
            <Sectionheading />
            <FeatureIocCard
              title="New Era Energy"
              description="New Era Energy is the biggest clean energy ICO in Southeast Asia.
              Get clean, get green, get rewarded. New Era is developing a
              protocol that redefines the way the world looks at clean energy."
              src="images/feature1.png"
              options=""
              rating={8.5}
              saved={true}
              time="02:03:55:34 left in ICO"
              href=""
              ethValue={400}
              percentageValue={119.30}
            />
            <FeatureIocCard
              title="Viola.AI"
              description="Viola.ai - The First Blockchain-AI-Driven Marketplace for Dating,
              Courtship & Marriage. Harnessing on Artificial Intelligence, Blockchain and
              trustless Smart Contracts. Viola.AI is set to revolutionize the dating and
              relationship space in the world."
              src="images/campaigns1.png"
              options=""
              rating={8.5}
              saved={true}
              time="Presale in 18 days"
              href=""
              ethValue={100}
              percentageValue={15.30}
            />
        </div>
    );
  }
}
export default FeatureIoc;