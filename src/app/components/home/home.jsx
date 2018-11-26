import React from 'react';

// styles
import './home.scss';

import Header from '../header/header';
import FeaturedImages from '../featured.images/fetured.images';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* header start  */}
        <Header />
        {/* header end  */}
        {/* featured images start  */}
        <FeaturedImages />
        {/* featured images end  */}
      </>
    );
  }
}

export default Home;
