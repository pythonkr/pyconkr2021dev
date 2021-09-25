import React, {Dispatch, SetStateAction} from 'react'
import styled from '@emotion/styled';

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`
  font-weight: 700;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 2rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
`

interface SessionToggleProps {
  handleClick: (day: string) => void
}

const SessionToggleButton: React.FC<SessionToggleProps> = ({handleClick}) => {
  return (
    <ButtonGroup>
      <Button onClick={() => handleClick('day1')}>10/2 (토)</Button>
      <Button onClick={() => handleClick('day2')}>10/3 (일)</Button>
    </ButtonGroup>
  )
}

export default SessionToggleButton;
