import React, {useState} from 'react'
import styled from '@emotion/styled';

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const Button = styled.button<{ selected: boolean }>`
  font-weight: 700;
  border-radius: 4px;
  font-size: 2rem;
  padding: 1rem 3rem;
  background: inherit;
  cursor: pointer;
  border: 0;
  color: #fff;
  cursor: pointer;
  text-decoration: ${props => props.selected ? 'underline': 'none' }
`

interface SessionToggleProps {
  handleClick: (day: string) => void
}

const SessionToggleButton: React.FC<SessionToggleProps> = ({handleClick}) => {
  const [checked, setChecked] = useState<string>('day1');

  const handleToggle = (day: string): void => {
    setChecked(day)
    handleClick(day)
  }

  return (
    <ButtonGroup>
      <Button selected={checked==='day1'} onClick={() => handleToggle('day1')}>10/2 (토)</Button>
      <Button selected={checked==='day2'} onClick={() => handleToggle('day2')}>10/3 (일)</Button>
    </ButtonGroup>
  )
}

export default SessionToggleButton;
