import React from 'react';

// styles
import './home.scss';

import Header from '../header/header';
import FeaturedImages from '../featured.images/fetured.images';
import BodyComponent from '../body/index';

class Home extends React.Component {
  render() {
    return (
      <>
        {/* header start  */}
        <Header />
        {/* header end  */}

        {/* featured images start  */}
        <FeaturedImages />
        {/* featured images end  */}
        {/* body component start */}
        <BodyComponent />
        {/* body component end */}
      </>
    );
  }
}

export default Home;
