import '../styles/App.scss'
import Login_input from './pages/Login_input'
import Register_input from './pages/Register_input'
import Main_a from './pages/Main_a'



export default function App() {
  return (
    <div>
      <Main_a/>
      <Login_input/>
      <Register_input/>
    </div>
  )
}