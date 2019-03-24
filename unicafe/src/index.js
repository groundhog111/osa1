import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Palaute = ({text, count}) => {
   return <tr><td>{text}</td><td>{count}</td></tr>
}

const Statistics = ({good, neutral, bad}) => {
   const yhteensa = good + neutral + bad
   if (yhteensa === 0) return <tr><td>Ei yhtään palautetta annettu</td></tr>

   else {
      const keskiarvoLaske = () => {
         if (yhteensa === 0) return 0 
         else {
            let totalSum = good + (-1 * bad)
            let keskiarvo = totalSum / yhteensa
            return keskiarvo
         }
      }

      const goodPercentage = () => {
         if (yhteensa === 0) return 0 
         else {
            return `${Math.round((good / yhteensa)*100)}%`
         }
      }

      const keskiarvo = keskiarvoLaske()
      const positiivisia = goodPercentage()

      return (
         <React.Fragment>
            <Statistic text = {"yhteensä"} value = {yhteensa} />
            <Statistic text = {"keskiarvo"} value = {keskiarvo} />
            <Statistic text = {"positiivisia"} value = {positiivisia} />
         </React.Fragment>
      )
   }
}

const Statistic = ({text, value}) => {
   return <tr><td>{text}</td><td>{value}</td></tr>
}

const Button = ({text, handleClick}) => {
   return <button onClick = {() => handleClick()} > {text}</button>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


   return (
    <div>

      <h1>Anna palautetta</h1>
      <Button text = {"good"} handleClick = {() => setGood(good + 1)} />
      <Button text = {"neutral"} handleClick = {() =>setNeutral(neutral + 1)} />
      <Button text = {"bad"} handleClick = {() => setBad(bad + 1)} />

      <h1>statistiikka</h1>

      <table style={{width: "50%"}} >
      <tbody>
      <Palaute text = {"hyvä"} count = {good} />
      <Palaute text = {"neutraali"} count = {neutral} />
      <Palaute text = {"huono"} count = {bad} />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
      </tbody>
      </table>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)