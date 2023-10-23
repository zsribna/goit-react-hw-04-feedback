import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = obj => {
    return Object.values(obj).reduce(function (acc, el) {
      return acc + el;
    }, 0);
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = (good * 100) / total;
    if (!positivePercentage) {
      return 0
    }
    return  Math.round(positivePercentage);
  };

  const total = countTotalFeedback({ good, neutral, bad });
  const positivePercentage = countPositiveFeedbackPercentage(good, total);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good','neutral','bad']}
          onLeaveFeedback={onLeaveFeedback}
        
        />
      </Section>
      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default App;
