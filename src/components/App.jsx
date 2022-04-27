//===============================Hooks==================
import {useState} from 'react';
import Section from './Section';
import FeedbackOptions from "./FeedbackOptions";
import Statistics from './Statistics';
import Notification from './Notification';

export default function App() {

  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 })
const countTotalFeedback =  Object.values(state).reduce((total, el) => total + el, 0); 
const countPositiveFeedbackPercentage = () => (Math.round(state.good / countTotalFeedback * 100));

  const onFeedbackHandle = (e) => {
    const stateName = e.currentTarget.name;
    setState(prev => ( {...prev, [stateName]: prev[stateName] + 1 }));
  }
  const reviews = () => Object.keys(state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={reviews()} onLeaveFeedback={onFeedbackHandle}/>
        </Section>
        
        <Section title="Statistics">
          {countTotalFeedback ?
            <Statistics good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage} /> :
              <Notification message="There is no feedback"/> }
        </Section>
      </div>
    );
};


//=======================Class=================

// import { Component } from 'react';

// import Section from './Section';
// import FeedbackOptions from "./FeedbackOptions";
// import Statistics from './Statistics';
// import Notification from './Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };
//   countTotalFeedback = () => {
//       return Object.values(this.state).reduce((total, el) => total + el, 0); 
//   }
//   countPositiveFeedbackPercentage = () => (Math.round(this.state.good / this.countTotalFeedback() * 100));

//   onFeedbackHandle = (evt) => {
//     const stateName = evt.currentTarget.name;
//     this.setState(prev => ({ [stateName]: prev[stateName] + 1 }));
//     console.log(stateName)
//   }
//   reviews = () => Object.keys(this.state);
  
//   render() {
//     const {good, neutral, bad} = this.state
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={this.reviews()} onLeaveFeedback={this.onFeedbackHandle}/>
//         </Section>
        
//         <Section title="Statistics">
//           {this.countTotalFeedback() ?
//             <Statistics good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage} /> :
//               <Notification message="There is no feedback"/> }
//         </Section>
//       </div>
//     );
//   }
// };









