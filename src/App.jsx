import React, { useState  } from 'react'
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
const [input, setInput] = useState("general")
const [number, setNumber] = useState(1)
const [progress, setProgress] = useState(0)
 const [api, setApi] = useState()
 var  onSubmit = (search) => {
   setInput(search)
    setNumber(number + 1)
  }
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
          <Navbar onSubmit={onSubmit} />
          <Routes>
            <Route path='/' element={<NewsContent setProgress={setProgress} apiKey = {api} category={"business"}  />}>      </Route> 

<Route exact path='/business' element={<NewsContent setProgress={setProgress} apiKey = {api} key="business" category={"business"}  />}></Route>

<Route exact path='/entertainment' element={<NewsContent setProgress={setProgress} apiKey = {api} key="entertainment" category={"entertainment"}  />}></Route>

<Route exact  path='/general' element={<NewsContent setProgress={setProgress} apiKey = {api} key="general" category={"general"}  />}></Route>

<Route exact path='/health' element={<NewsContent setProgress={setProgress} apiKey = {api}  key="health" category={"health"}  />}></Route>

<Route exact  path='/science' element={<NewsContent setProgress={setProgress} apiKey = {api} key="science" category={"science"}  />}></Route>

<Route exact path='/sports' element={<NewsContent setProgress={setProgress} apiKey = {api}  key="sports" category={"sports"}  />}></Route>

<Route exact  path='/technology' element={<NewsContent setProgress={setProgress} apiKey = {api} key="technology" category={"technology"}  />}></Route>

<Route exact  path='/search' element={<NewsContent setProgress={setProgress} apiKey = {api} key={number} category={input}  />}></Route>
         
          </Routes>
        </Router>
      </div>
    )
  }
 export default App




