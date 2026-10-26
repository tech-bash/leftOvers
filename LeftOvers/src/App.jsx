import { useState, lazy, Suspense } from 'react'
import Counter from './LeftOvers/Counter'
import Dependency from './LeftOvers/Dependency'
import './App.css'

const Profile = lazy(() => import('./LeftOvers/Profile'));

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
    <button onClick={() => setShow(true)}>
      Load profile
    </button>

    {show && (<Suspense fallback={<p>suspense is doing it's work</p>}>
      <Profile/>
    </Suspense>
    )}
    </>
  )
}

export default App
