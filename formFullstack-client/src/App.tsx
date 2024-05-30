import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [formState, setFormState] = useState(
    {
      name: "",
      favoriteNumber: 0,
      file: ""
    }
  )
  const [statusConnection, setStatusConnection] = useState({ connection: null })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    let value: string | number = e.target.value

    if (name === 'favoriteNumber') value = parseInt(value)
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(formState)
  }

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api')
      .then(res => res.json())
      .then(data => setStatusConnection(data))
  }, [])

  return (
    <>
      <h1>Formulario</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            value={formState.name}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor='name'>Número favorito</label>
          <input
            type='number'
            name='favoriteNumber'
            placeholder='Número favorito'
            value={formState.favoriteNumber}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor='picture'>Archivo de imagen</label>
          <input
            type='file'
            name='file'
            value={formState.file}
            onChange={onInputChange}
          />
        </div>

        <button>Enviar</button>

      </form>

      <p>Estado de conección con el servidor: {statusConnection.connection}</p>
    </>
  )
}

export default App
