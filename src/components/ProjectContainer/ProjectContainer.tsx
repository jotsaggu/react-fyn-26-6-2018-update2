import * as React from 'react';

export interface ProjectContainerProps {
  noHeader?: boolean;
  children?: React.ReactNode;
  subTitle?: string;
  title: string;
  href: string;
  className: string;
}

export interface HeaderTitleProps {
  subTitle?: string;
  title: string;
  href: string;
}

export class HeaderTitle extends React.Component<HeaderTitleProps, object> {
  render() {
    const { subTitle, title } = this.props;
    if (subTitle) {
      return (
        <div>
          <h1 className="orange_title text-center">{title}</h1>
          <p className="text-center">{subTitle}</p>
        </div>
      );
    }
    return (<h1 className="head_title text-left">{title} <span>{subTitle}</span></h1>);
  }
}
class ProjectContainer extends React.Component<ProjectContainerProps, object> {
  render() {
    const { children, title, href, className, subTitle, noHeader } = this.props;
    return (
      <section className={className}>
        <div className="container-fluid">
          { !noHeader &&
            <HeaderTitle title={title} subTitle={subTitle} href={href}/>
          }
          {children}
        </div>
      </section>
    );
  }
}

export default ProjectContainer;
