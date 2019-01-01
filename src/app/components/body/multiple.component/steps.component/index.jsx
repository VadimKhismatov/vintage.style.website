import React, { Component } from 'react';

import './style.scss';

// Step
import Step from './step.component/index';

import book from '../../../../../icons/book.png';
import cog from '../../../../../icons/cog.png';
import calendar from '../../../../../icons/step_calendar.png';

const text1 =
  'Donec pellentesque, justo eget imperdiet viverra, lectus mi ornare arcu, non laoreet lacus lacus eleifend orci. Nam tincidunt vestibulum lacus nec pharetra. Nunc commodo aliquam lectus quis bibendum.';
const text2 =
  'Justo eget imperdiet viverra, lectus mi ornare arcu, non laoreet lacus lacus eleifend orci. Nam tincidunt vestibulum lacus nec pharetra. Nunc commodo aliquam lectus quis bibendum. Nam tincidunt.';
const text3 =
  'Donec pellentesque, justo eget imperdiet viverra, lectus mi ornare arcu, non laoreet lacus lacus eleifend orci. Nam tincidunt vestibulum lacus nec pharetra. Nunc commodo aliquam lectus quis bibendum.';

class Steps extends Component {
  render() {
    return (
      <div className="steps_component">
        <div className="content">
          <Step icon={book} title="Research" text={text1} link="/" />
          <Step icon={cog} title="Work" text={text2} link="/" />
          <Step icon={calendar} title="Deliver" text={text3} link="/" />
        </div>
      </div>
    );
  }
}

export default Steps;
