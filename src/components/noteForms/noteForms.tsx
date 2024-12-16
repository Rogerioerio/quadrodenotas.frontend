import { useState } from "react";
import { NoteDataResponse } from "../../interface/NoteDataResponse";
import { useNoteDataMutate } from "../../hooks/useNoteDataMutate";

import "./noteForms.css";

interface InputProps {
    value: string,
    updateValue(value: string): void
}

const InputTitle = ({ value, updateValue }: InputProps) => {
    return (
        <>
            <input value={value} className="inputTitle" onChange={event => updateValue(event.target.value)} placeholder="Escreva um título..." />
        </>
    )
}

const InputText = ({ value, updateValue }: InputProps) => {
    return (
        <>
            <textarea value={value} className="inputContent" onChange={event => updateValue(event.target.value)} placeholder="Escreva um texto..." />
        </>
    )
}


function NoteForms () {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { mutate, isPending } = useNoteDataMutate();

    const submit = () => {
        const newNoteData: NoteDataResponse = {
            title,
            content
        }
        mutate(newNoteData);
    }
    
    return (
        <div className="container-forms">
            <h1 className="formTitle">Escreva uma Nota</h1>
            <form className="container-inputs">
                <InputTitle value={title} updateValue={setTitle} />
                <InputText value={content} updateValue={setContent} />
                <button className="submitNote" type="submit" onClick={submit} >
                {isPending ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
  
        </div>
    )
}

export default NoteForms;