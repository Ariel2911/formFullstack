import './App.css'

function App() {

  return (
    <>
      <h1>Formulario</h1>
      <form>
        <div>

          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            placeholder='Nombre'
          />
        </div>
        <div>

          <label htmlFor='picture'>Archivo de imagen</label>
          <input type='file' />
        </div>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default App
