import React from "react"
import styled from "styled-components"
import tokens from "./designSystem/tokens"
import H2 from "./designSystem/H2"
import front from "../assets/images/duks_front.png"

const TwoColumnContainer: React.FC = () => {
  const StyledTwoColumnContainer = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    grid-gap: ${tokens.spacing.small}px;
    background: ${tokens.colors.white};
    margin-top: calc(${tokens.spacing.large}px * 2);
  `

  const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    p {
      margin-bottom: ${tokens.spacing.medium}px;
      font-size: ${tokens.font.size.h4};
    }

    h2 {
      margin-bottom: ${tokens.spacing.xxsmall}px;
    }
  `

  const SecondColumn = styled.div`

    display: flex;
    align-items: center;

    img {
      width: 100%;
      background-size: cover;
      box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.14);
    }
  `

  return (
    <StyledTwoColumnContainer>
      <FirstColumn>
        <H2>Create Flows</H2>
        <p>Group tasks in Flows to keep an overview.</p>
        <H2>Manage Tasks</H2>
        <p>Create tasks, assign people and see them on boards.</p>
      </FirstColumn>
      <SecondColumn>
        <img src={front} />
      </SecondColumn>
    </StyledTwoColumnContainer>
  )
}

export default TwoColumnContainer
