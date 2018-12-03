import * as React from 'react';

export interface WhiteContainerProps {
    children?: React.ReactNode;
    title: string;
}

class WhiteContainer extends React.Component<WhiteContainerProps, object> {
    render() {
        const {children, title} = this.props;
        return(
            <div className="white_borderbox">
                <h2>{title}</h2>
                <div className="container-fluid form_outerarea">
                    {children}
                </div>
            </div>
        );
    }
}

export default WhiteContainer;