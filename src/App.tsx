import { } from 'react'
import './App.css'
import { Card } from './components/card/card'

function App() {
  const DATA = [ 
    { 
      id: '1', 
      title: 'Anotação 1', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: new Date(),
    },
    { 
      id: '2', 
      title: 'Anotação 2', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: new Date(),
    }
  ]

  return (
    <div className='container'>
      <h1>Quadro de Notas</h1>
      <div className='card-grid'>
        {DATA.map(x => 
          <Card
            id={x.id}
            title={x.title}
            content={x.content}
            date={x.date}
          />
        )}
      </div>
    </div>
  )
}

export default App
