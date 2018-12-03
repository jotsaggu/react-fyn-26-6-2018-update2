import * as React from 'react';

export interface GroupProps {
    children?: React.ReactNode;
}
class RadioBoxGroup extends React.Component<GroupProps, object> {
    render() {
      const {children} = this.props;
      return(
        <div className="custom_radiobox">
          {children}
        </div>
      );
    }
  }

export default RadioBoxGroup;