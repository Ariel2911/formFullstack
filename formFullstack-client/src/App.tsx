import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [formState, setFormState] = useState(
    {
      name: "",
      favoriteNumber: 0
    }
  )
  const [statusConnection, setStatusConnection] = useState({ connection: null })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    let value: string | number = e.target.value

    if (name === 'favoriteNumber') value = parseInt(value)
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmitSimplePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch('http://localhost:5000/api/solicitud-post.simple', {
      method: 'POST',
      body: JSON.stringify(formState),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log('data: ', data))
      .catch(error => console.log(error))

  }

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setStatusConnection(data))
  }, [])

  return (
    <>
      <h1>Formulario</h1>
      <p>Estado de la conección con el servidor: {statusConnection.connection}</p>

      <h2>Post simple (JSON)</h2>

      <form onSubmit={handleSubmitSimplePost}>

        <section>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            value={formState.name}
            onChange={onInputChange}
          />
        </section>

        <section>
          <label htmlFor='name'>Número favorito</label>
          <input
            type='number'
            name='favoriteNumber'
            placeholder='Número favorito'
            value={formState.favoriteNumber}
            onChange={onInputChange}
          />
        </section>

        <button>Enviar</button>

      </form>
    </>
  )
}

export default App
