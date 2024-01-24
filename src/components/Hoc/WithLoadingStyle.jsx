// withLoadingStyle.js

import React from 'react';
import '../../components/Style.css';

const withLoadingStyle = (WrappedComponent) => {
  const styles = {

    color: 'yellow',
    padding: '20px',
  };

  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} styles={styles} />;
    }
  };
};

export default withLoadingStyle;
