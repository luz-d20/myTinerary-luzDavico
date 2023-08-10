import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Cities from './components/Cities';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/cities",
    element: <Cities />,
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
