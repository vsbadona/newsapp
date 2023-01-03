import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  const [search, setSearch] = useState("")
  var handleChange = (event) => {
    setSearch(event.target.value)
    var data = event.target.value
  }
  var handleClick = (e) => {
    e.preventDefault();
   props.onSubmit(search)

  }
  return (
    <div className='-100' style={{ zIndex: "1" }}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand mx-5" to="/">News-App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-capitalize">
            <li className="nav-item " ><Link to="/business" className="nav-link" >business </Link> </li>
            <li className="nav-item " >
              <Link to="/entertainment" className="nav-link" >
              entertainment</Link>
              </li>
            <li className="nav-item " >
              <Link to="/general" className="nav-link" >
              general</Link>
              </li>
            <li className="nav-item " >
              <Link to="/health" className="nav-link" >
              health</Link>
              </li>
            <li className="nav-item " >
              <Link to="/science" className="nav-link" >
              science</Link>
              </li>
            <li className="nav-item " >
              <Link to="/sports" className="nav-link" >
              sports</Link>
              </li>
            <li className="nav-item " >
              <Link to="/technology" className="nav-link" >
              technology</Link>
              </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" >
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} value={search} />
            <button disabled={search.length<=0} className="btn btn-outline-warning my-2 my-sm-0" onClick={handleClick} type="submit">{ search.length>0?<Link  to="/search" >
              Search</Link>:"Search"}</button>
          </form>
        </div>
      </nav></div>
  )
}
