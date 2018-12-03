import * as React from 'react';
import { Row, Button  } from 'react-bootstrap';
import PastProjectIocCard from '../../components/Cards/PastIocCard';
export class Sectionheading extends React.Component {
    render() {
      return (
        <div className="section_heading text-left">
          <h1>Past  <span>ICOs</span></h1>
        </div>
      );
    }
  }
export class PostIcos extends React.Component {
  render() {
    return (
        <div className="pastioc_section">
          <div className="container">
              <Sectionheading />
              <Row>
                    <PastProjectIocCard
                      title="PolicyPal Network Presale"
                      description="PolicyPal Network is a platform built with a twofold vision of addressing key
                      issues that overlap the fields of both insurance and cryptocurrencies. " 
                    />
                    <PastProjectIocCard
                      title="Codex Protocal Private Sale"
                      description="Codex Protocol- Codex is a blockchain based decentralized title
                      registry for Art & Collectibles. The Codex acts as a safe store of provenance,
                      giving peace of mind." 
                    />
                    <PastProjectIocCard
                      title="Rate 3 Private Sale"
                      description="Rate 3 - A decentralised dual protocol for cross-border payment and
                      credit scoring powered by Stellar and Ethereum. A multitude of credit
                      marketplaces can build on this protocol layer in the future." 
                    />
                    <PastProjectIocCard
                      title="Remme"
                      description="No more passwords — no more break-ins. REMME implements unbreakable,
                      foolproof user authentication to protect your users, employees, and company’s data
                      from cyber attacks." 
                    />
              </Row>
              <Button className="view_more_btn">View More</Button>
          </div>
        </div>
    );
  }
}
export default PostIcos;