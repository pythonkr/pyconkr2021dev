import React from 'react';
import { Program } from '../../interfaces/program';

interface ProgramTableProps {
  programList: Program[]
}

const SessionTable: React.FC<ProgramTableProps> = ({ programList }) => {
  return (
      <div>
        {programList.map((program: Program, index: number) => {
          return (
            <div key={index}>{program.title}</div>
          )
        })}
      </div>
  )
}

export default SessionTable;
