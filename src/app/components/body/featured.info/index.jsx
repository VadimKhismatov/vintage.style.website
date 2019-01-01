import React, { Component } from 'react';

// GLIDER files
import '../../../libs/glider/glider.css';
import '../../../libs/glider/glider.js';
// components css
import './style.scss';

// icons
// import arrow_prev from '../../../icons/br_prev.png';
// import arrow_next from '../../../icons/br_next.png';
import cert from '../../../../icons/cert.png';

// images
import slideImg1 from '../../../../images/slide_img_1.png';
import slideImg2 from '../../../../images/slide_img_2.png';
import slideImg3 from '../../../../images/slide_img_3.png';

class FeaturedInfo extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    const glider = new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
      },
    });
  }
  render() {
    return (
      <section className="f-info_component">
        <div className="content">
          <div className="title_block">
            <button className="arrow arrow--prev glider-prev">
              {/* <img src={arrow_prev} alt="prev arrow icon" /> */}
            </button>
            <h3 className="title">Featured Title</h3>
            <button className="arrow arrow--next glider-next">
              {/* <img src={arrow_next} alt="next arrow icon" /> */}
            </button>
          </div>
          <div className="slider_wrap glider">
            <div className="slide">
              <div className="images">
                <div className="image">
                  <img src={slideImg1} alt="image 1" />
                </div>
                <div className="image">
                  <img src={slideImg2} alt="image 2" />
                </div>
                <div className="image">
                  <img src={slideImg3} alt="image 3" />
                </div>
              </div>
              <div className="description">
                <div className="top">
                  <div className="icon_wrap">
                    <img src={cert} alt="cert.png" />
                  </div>
                  <div className="titles">
                    <h4>Krili havtret hyo gustripast</h4>
                    <p>Krili havtret hyo gustripast</p>
                  </div>
                </div>
                <div className="bottom">
                  Donec pellentesque, justo eget imperdiet viverra, lectus mi ornare arcu, non laoreet lacus lacus
                  eleifend orci. Nam tincidunt vestibulum lacus nec pharetra. Nunc commodo aliquam lectus quis bibendum.
                  Proin ut erat quis nulla tempor imperdiet ac et lorem.
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="images">
                <div className="image">
                  <img src={slideImg1} alt="image 1" />
                </div>
                <div className="image">
                  <img src={slideImg2} alt="image 2" />
                </div>
                <div className="image">
                  <img src={slideImg3} alt="image 3" />
                </div>
              </div>
              <div className="description">
                <div className="top">
                  <div className="icon_wrap">
                    <img src={cert} alt="cert.png" />
                  </div>
                  <div className="titles">
                    <h4>Krili havtret hyo gustripast</h4>
                    <p>Krili havtret hyo gustripast</p>
                  </div>
                </div>
                <div className="bottom">
                  Donec pellentesque, justo eget imperdiet viverra, lectus mi ornare arcu, non laoreet lacus lacus
                  eleifend orci. Nam tincidunt vestibulum lacus nec pharetra. Nunc commodo aliquam lectus quis bibendum.
                  Proin ut erat quis nulla tempor imperdiet ac et lorem.
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="images">
                <div className="image">
                  <img src={slideImg1} alt="image 1" />
                </div>
                <div className="image">
                  <img src={slideImg2} alt="image 2" />
                </div>
                <div className="image">
                  <img src={slideImg3} alt="image 3" />
                </div>
              </div>
              <div className="description">
                <div className="top">
                  <div className="icon_wrap">
                    <img src={cert} alt="cert.png" />
                  </div>
                  <div className="titles">
                    <h4>Krili havtret hyo gustripast</h4>
                    <p>Krili havtret hyo gustripast</p>
                  </div>
                </div>
                <div className="bottom">
                  Donec pellentesque, justo eget imperdiet viverra, lectus mi ornare arcu, non laoreet lacus lacus
                  eleifend orci. Nam tincidunt vestibulum lacus nec pharetra. Nunc commodo aliquam lectus quis bibendum.
                  Proin ut erat quis nulla tempor imperdiet ac et lorem.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedInfo;
