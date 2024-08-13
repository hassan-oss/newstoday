import React from "react";

const Newsitem =(props)=> {

    /* Giving props like this so i can give title etc from new component */
    let { Title, Description, Src, url, author, publishedAt, source } = props;

    return (
      <div>
        {/* Giving source here  */}
        <div><span className="badge text-bg-danger">{source}</span></div>
        <div className="card" style={{ width: "18rem" }}>

          <img src={Src ? Src : "https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Title}...</h5>

            <p className="card-text">{Description}...</p>
            <p className="card-title">by <b>{!author ? "unKnown" : author} on {new Date(publishedAt).toGMTString()}</b></p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-primary">
              Check details
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default Newsitem
