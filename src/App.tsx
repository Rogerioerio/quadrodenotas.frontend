import { } from 'react'
import './App.css'
import { Card } from './components/card/card'
import { useNoteData } from './hooks/useNoteData'

function App() {
  const { data } = useNoteData();

  return (
    <div className='container'>
      <h1>Quadro de Notas</h1>
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
