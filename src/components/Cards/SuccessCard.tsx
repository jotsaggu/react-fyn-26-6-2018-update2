import * as React from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

export interface SucessCardContainerProp {
  children?: React.ReactNode;
  href: string;
  image: string;
}
export class SucessCardContainer extends React.Component<SucessCardContainerProp, object> {
        render() {
          const { children, href, image} = this.props;
          return(
            <aside className="col-sm-6 col-md-4">
              <div className="item card_box">
                <div className="popular_imageouter">
                  <a href={href}><img src={image} alt="" /></a>
                </div>
                <div className="popular_descriptionarea">
                  {children}
                </div>
              </div>
            </aside>
          );
        }
      }

export interface CardTitleProps {
        title: string;
        href: string;
      }      
export class CardTitle extends React.Component<CardTitleProps, object> {
        render() {
          const { href, title } = this.props;
          return(
            <h3 className="card_title"><a href={href}>{title}</a></h3>
          );
        }
      }

export interface CardDescriptionProps {
        description: string;
      }
export class CardDescription extends React.Component<CardDescriptionProps, object> {
        render() {
          const { description } = this.props;
          return(
            <p className="project_description success_dis">{description}</p>
          );
        }
      }
export class CardButton extends React.Component {
        render() {
          return(
            <Button className="read_story">Read Success Story</Button>
          );
        }
      }                   
export interface ProgressTagProp {
  priceValue: string;
  propercentage: string;
      }        
export class ProgressTag extends React.Component<ProgressTagProp, object> {
        render() {
          const { priceValue, propercentage } = this.props;
          return (
            <div>
                <span className="eth_price">{priceValue}</span>
                <span className="progess_percentage">{propercentage}</span>
            </div>
          );
        }
      }   
      
export interface CurrencyProgressProps {
        ethValue: number;
        percentageValue: number;
      }
      
export class CurrencyProgress extends React.Component<CurrencyProgressProps, object> {
        render() {
          const { ethValue, percentageValue } = this.props;
          return (
            <div className="progress_value">
              <p className="pull-left">{ethValue} ETH <span>Raised</span> </p>
                <p className="pull-right">{percentageValue}%</p> 
              <div className="clearfix"/>
            </div>
          );
        }
      }
      
export class ProgressPercentage extends React.Component<CurrencyProgressProps, object> {
        render() {
          const { ethValue, percentageValue } = this.props;
          const progress = (( percentageValue / 100) * 100);
          return(
            <div className="donation_percentagearea">
              <ProgressBar className="progress_bar">
                <ProgressBar 
                  className="progress_bar_inner" 
                  now={progress}
                />
              </ProgressBar>
              <CurrencyProgress ethValue={ethValue} percentageValue={percentageValue}/>
            </div>
          );
        }
      }      
export interface SucessCardProp {
        title: string;
        href: string;
        description: string;
        image: string;
        ethValue: number;
        percentageValue: number;
      }
class SuccessCard extends React.Component<SucessCardProp, Object> {
        render() {
          const { 
            title, 
            href, 
            description, 
            image,
            ethValue,
            percentageValue,
          } = this.props;
          return (
           <SucessCardContainer href={href} image={image}>
              <div>
               <CardTitle title={title} href={href} />
               <img src="images/like_icon.png" alt="" className="like_icon pull-right" />
              </div>
              <CardDescription description={description}/>
              <ProgressPercentage 
                ethValue={ethValue} 
                percentageValue={percentageValue}
              />
              <CardButton />
            </SucessCardContainer>
          );
        }
      }         
export default SuccessCard;