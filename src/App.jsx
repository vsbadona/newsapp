import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
var App = (props) => {
  const [number, setNumber] = useState(1)
  const [progress, setProgress] = useState(0)

  var setprogress = (progress) => {
    setProgress(progress)
  }

  return (
    <div className="App">
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route path='/' element={<NewsContent setProgress={setProgress} category={"business"} />}>      </Route>

          <Route exact path='/business' element={<NewsContent setProgress={setProgress} key="business" category={"business"} />}></Route>

          <Route exact path='/entertainment' element={<NewsContent setProgress={setProgress} key="entertainment" category={"entertainment"} />}></Route>

          <Route exact path='/general' element={<NewsContent setProgress={setProgress} key="general" category={"general"} />}></Route>

          <Route exact path='/health' element={<NewsContent setProgress={setProgress} key="health" category={"health"} />}></Route>

          <Route exact path='/science' element={<NewsContent setProgress={setProgress} key="science" category={"science"} />}></Route>

          <Route exact path='/sports' element={<NewsContent setProgress={setProgress} key="sports" category={"sports"} />}></Route>

          <Route exact path='/technology' element={<NewsContent setProgress={setProgress} key="technology" category={"technology"} />}></Route>


        </Routes>
      </Router>
    </div>
  )
}
export default App




