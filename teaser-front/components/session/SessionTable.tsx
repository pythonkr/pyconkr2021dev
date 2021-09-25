import React from 'react';
import { Program } from '../../types/program';
import styled from '@emotion/styled';
import { DifficultyLabel } from '../../types/enums';

const Styles = styled.div`
  margin: 3rem;
  
  table {
    border-spacing: 0;
    border: 0;
    border-top: 3px solid #fff;
    width: 100%;
    table-layout: fixed;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      height: 3rem;
      font-size: 1.5rem;
      border-right: 1px solid #fff;
      padding: 0.5rem;
      :first-of-type {
        width: 120px;
      }
      :last-child {
        border-right: 0;
      }
    }
    tbody {
      width: 100%;
    }
    td {
      margin: 0;
      padding: 2rem 1rem;
      text-align: center;
      font-size: 1.4rem;
      border-top: 1px solid #fff;
      :last-child {
        border-right: 0;
      }
    }
  }
`
const ProgramItem = styled.div`
  width: 80%;
  line-height: 1.6;
  margin: 0 auto;
  word-break: keep-all;
`

const Title = styled.div`
  margin-bottom: 0.8rem;
`

const Category = styled.span`
  display: inline-block;
  padding: 0.4em 1em;
  font-size: 1.1rem;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
`

const Difficulty = styled.span<{ level: string }>`
  display: inline-block;
  padding: 0.4em 0.6em;
  font-size: 1.1rem;
  border-radius: 4px;
  line-height: 1;
  ${({ level }) => {
    if(level === 'B') {
      return `
        background-color: #139d2b;
      `
    }
    if(level === 'I') {
      return `
        background-color: #ff7f00;
      `
    }
    return `
      background-color: #cf3535;
    `
  }}
`

interface ProgramTableProps {
  headers: string[],
  programList: Program[]
}

const SessionTable: React.FC<ProgramTableProps> = ({ headers, programList }) => {
  const programListLength = programList.length;

  return (
      <Styles>
        <table>
          <thead>
            <tr>
              <th>시간<br/>(KST)</th>
              {headers.map((header: string) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {programList.map((program: Program, index: number, elements) => {
              const time = program.video_open_at.slice(-5)
              if(index < programListLength-1) {
                const sameTimeProgram = elements[index+1]
                return (
                  <tr key={index}>
                    {index % 2 === 0
                    && (
                      <>
                        <td>{time}</td>
                        <td>
                          <ProgramItem>
                            <Title>{program.title}</Title>
                            <Difficulty level={program.difficulty}>
                              {DifficultyLabel[program.difficulty as keyof typeof DifficultyLabel]}
                            </Difficulty>
                            {/*<Category>{program.category}</Category>*/}
                          </ProgramItem>
                        </td>
                        <td>
                          <ProgramItem>
                            <Title>{sameTimeProgram.title}</Title>
                            <Difficulty level={sameTimeProgram.difficulty}>
                              {DifficultyLabel[sameTimeProgram.difficulty as keyof typeof DifficultyLabel]}
                            </Difficulty>
                            {/*<Category>{sameTimeProgram.category}</Category>*/}
                          </ProgramItem>
                        </td>
                      </>
                    )
                    }
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </Styles>
  )
}

export default SessionTable;
