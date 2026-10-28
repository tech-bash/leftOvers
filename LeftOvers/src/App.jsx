import { memo, Suspense, useMemo, useState } from 'react'
// import Counter from './LeftOvers/Counter'
import Dependency from './LeftOvers/Dependency'
import './App.css'

import ErrorBoundary from './LeftOvers/ErrorBoundary'
import RefDemo from './LeftOvers/RefDemo'

// const Counter = lazy(() => import('./LeftOvers/Counter'));
// const Dependency = lazy(() => import('./LeftOvers/Dependency'))

// const Child = memo(function Child({name}) {
//   console.log("child rendering");

//   return <h2>Hello, {name}</h2>
// })

function BrokenComponent() {
  throw new Error("new error");
}

function App() {
  return (
    <>
    {/* <Dependency/> */}
    {/* <Parent/>   // all the components that are the child of the parent, will also fall into error boundary */}
    <RefDemo/>
    </>
  )
}

export default App
