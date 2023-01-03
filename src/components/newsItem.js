import React from 'react'
var NewsItem = (props) => {
    let {title,description,image,link,time,source} = props
    return (
        <div  className="card my-5 mx-17" >
          
        <img className="card-img-top" src={image} alt="Image Not Available"/>
        <span className="position-absolute right-0 right-0 translate-middle badge rounded-pill bg-danger text-light" style={{
          right : '0',marginTop: "-13px"
        }}>
    {source}
  </span>
 

          <span><strong>{time}</strong></span>
        <div className="card-body">
          
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={link} target="_blank" className="btn btn-sm btn-dark ">Read More</a>
        </div>
      </div>
    )
  }
export default NewsItem
