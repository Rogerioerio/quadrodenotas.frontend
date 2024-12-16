import "./noteForms.css"

function NoteForms () {
    return (
        <div className="container-forms">
            <h1 className="formTitle">Escreva uma Nota</h1>
            <div className="container-inputs">
                <input type="text" className="inputTitle" placeholder="Escrava um título..."></input>
                <textarea className="inputContent" placeholder="Escreva aqui a nota..."/>
            </div>
            <button className="submitNote">Enviar</button>
        </div>
    )
}

export default NoteForms;