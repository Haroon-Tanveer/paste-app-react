import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Past from './components/Past'
import ViewPaste from './components/ViewPaste'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Past/>

      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>

      </div>
    }
  ]
)


function App() {

  return (
  <>
  <RouterProvider router={router} />
  <Toaster/>
  </>
  )
}

export default App
