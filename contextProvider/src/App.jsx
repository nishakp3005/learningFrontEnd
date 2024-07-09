
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <Login />
      <br></br>
      <Profile />
    </UserContextProvider>
  )
}

export default App