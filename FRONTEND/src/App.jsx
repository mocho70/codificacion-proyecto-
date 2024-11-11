import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [logueado, setLogueado] = useState('false')

  function cambiarusuario(evento){
    setUsuario(evento.target.value)

  }
  function cambiarcontraseña(evento){
    setContraseña(evento.target.value)
  }
  async function ingresar(){
    const peticion=await fetch('http://localhost:3000/login?usuario=' + usuario +'&contrase%C3%B1a='+ contraseña)
    if(peticion.ok){
      alert("usuario conectado")
      setLogueado(true)
    }else{
      alert("usuario no registrado")
    }
  }

  return (
    <>
      <h1>inicio de sesion</h1>
      <input type="text" name='usuario' id='usuario' placeholder='ingrese usuario' value={usuario} onChange={cambiarusuario} />
      <input type="password" name='contraseña' id='contraseña' placeholder='ingrese contraseña' value={contraseña} onChange={cambiarcontraseña} />
      <button onClick={ingresar}>Ingresar</button>
    </>
  )
}

export default App
