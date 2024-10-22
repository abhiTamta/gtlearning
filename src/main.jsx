import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './routers'

import './assets/css/main.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>
)
