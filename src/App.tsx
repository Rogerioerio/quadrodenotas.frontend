import { } from 'react'
import './App.css'
import { Card } from './components/card/card'
import { useNoteData } from './hooks/useNoteData'
import NoteForms from './components/noteForms/noteForms';

function App() {
  const { data } = useNoteData();

  return (
    <div className='container'>
      <header className='mainHeader'>
        <h1>Quadro de Notas</h1>
      </header>
      <NoteForms />
      <div className='card-grid'>
        {data?.map(NoteData => 
          <Card
            annot_id={NoteData.annot_id}
            title={NoteData.title}
            content={NoteData.content}
            instant={NoteData.instant}
          />
        )}
      </div>
    </div>
  )
}

export default App
