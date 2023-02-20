

import Outlet from './Outlet'
import style from './App.module.css'

function App() {
  return (
    <div className={style['wrapper']}>
    <Outlet/>
    </div>
  )
}

export default App
