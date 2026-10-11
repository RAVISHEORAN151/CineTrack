import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import {About,Home,MovieDetails, Movies, NotFound, Watchlist} from "./pages"
import App from './App.jsx'
import store from './store/store'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element:< Home/>},
      {path: "movies", element:< Movies/>},
      {path: "movie/:id", element:< MovieDetails/>},
      {path: "watchlist", element:< Watchlist/>},
      {path: "about", element:< About/>},
      {path: "*", element:< NotFound/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider  router={router} />
    </Provider>
    
  </StrictMode>,
)
