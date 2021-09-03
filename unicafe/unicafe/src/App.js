import React, { useState } from 'react'

const Header = ( {text} ) => {
  return (
    <h1>{text}</h1>
  )
}
const Statistics = (props) => {
  console.log(props)
  if ((props.good === 0) && (props.bad === 0) && (props.neutral === 0)) {
    return (
      <div>
        No feedback given. Please click one of the buttons above according to your experience
      </div>
    )
  }
  return (
      <table>
        <tbody>
          <StatisticLine text="good" value ={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="all" value ={props.good + props.bad + props.neutral} />
          <StatisticLine text="average" value ={(props.good + props.bad + props.neutral)/3} />
          <StatisticLine text="positive(%)" value ={props.good/(props.bad + props.neutral + props.good)*100} />
        </tbody>
      </table>
  )
}
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text} {value}</td>
    </tr>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text='Please give us feedback on our performance' />
      <div>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <Header text='Reviews' />
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  )
}


export default App
