import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGod] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const countTotalFeedback = () => {
    return good + neutral + bad;
  };


  const countPositiveFeedbackPercentage = () => {
    
    return Math.floor((good / countTotalFeedback()) * 100 || 0);
  };
  


// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     let total = this.state.good + this.state.neutral + this.state.bad;
//     return total;
//   };

  // countPositiveFeedbackPercentage = () => {
  //   let positiveFeedback = Math.floor(
  //     (this.state.good / this.countTotalFeedback()) * 100
  //   );
  //   return positiveFeedback;
  // };

 const onLeaveFeedback = option => {
    switch (option) {
      case 'good': 
      setGod(prevSate=> prevSate + 1)
      break;

      case 'neutral':
      setNeutral(prevSate=> prevSate + 1)
      break;

      case 'bad':
      setBad(prevSate=> prevSate + 1)
      break;

      default: 
      return;
    }
  };

  // this.setState(prevState => ({
  //   [option]: prevState[option] + 1,
  // }));

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
        <Section title="Statistics" />
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
 }

