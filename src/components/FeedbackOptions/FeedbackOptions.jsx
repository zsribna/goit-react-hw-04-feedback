import { FeedbackButton, FeedbackList } from "./FeedbackOpins.styled";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackList >
    {options.map(name => (
      <li key={name}>
        <FeedbackButton
          type="button"
          name={name}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </FeedbackButton>
      </li>
    ))}
  </FeedbackList>
);




// {
//   option, onLeaveFeedback;
// }
