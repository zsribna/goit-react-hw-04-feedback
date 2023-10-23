import styled from "styled-components";
 
export const FeedbackList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
`
export const FeedbackButton = styled.button`
  padding: ${p => p.theme.spacing(2)};
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  background-size: 200% auto;
  color: rgb(0, 0, 0);
  box-shadow: 0 0 20px #eee;
  border-radius: ${p => p.theme.spacing(2)};
  border-color: transparent;
  background-image: linear-gradient(
    to right,
    #c2cde6 0%,
    #a2a9b5 51%,
    #767d8b 100%
  );

  &:hover {
    background-position: right center;
  }
`;