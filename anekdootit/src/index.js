import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// var pisteet = new Array(6).fill(0);

const App = ({anecdotes}) => {
   const [selected, setSelected] = useState(1)
   const [pisteet, setPisteet] = useState(new Array(6).fill(0))

   const handleClick = () => {
      setSelected(Math.floor(Math.random() * 6))
   }

   const handleVote = () => {
      const copy = [...pisteet]
      copy[selected] += 1 
      setPisteet(copy)
   }

   const mostVotesFunc = () => {
      let highestVote = pisteet.indexOf(Math.max(...pisteet));
      return anecdotes[highestVote]
   }

   const mostVotes = mostVotesFunc()


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {pisteet[selected]} votes</p>
      <br/>
      <button onClick = {() => handleVote()}>vote</button>
      <button onClick = {() => handleClick()}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      {mostVotes}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)