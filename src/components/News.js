import React, {  useState, useEffect} from "react";
import Loading from "./Loading";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {



    // document.title = `${this.props.category}-news`
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);



    
  

   const Update =async()=> {

    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true)
    props.setProgress(10)
    let data = await fetch(url);
    props.setProgress(50)
    let parsed_data = await data.json();
    props.setProgress(70)
    setArticles(parsed_data.articles)
    setTotalResults(parsed_data.totalResults)
    setLoading(false)
    
    props.setProgress(100)


  }

  
 useEffect(() => {
   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92037bae20b1491095d325f75115f661&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // try {
    //   this.setState({
    //     loading: true,
    //   });
    //   let data = await fetch(url);
    //   let parsed_data = await data.json();
    //   this.setState({
    //     articles: parsed_data.articles,
    //     totalResults: parsed_data.totalResults,
    //     loading: false,
    //   });
    // } catch (error) {
    //   console.error("Failed to fetch data", error);
    // }
    // after updating it we have to make sure when user click the nxt button so he get the update page
    
    // setPage(page + 1)
    
    
  Update()
  // eslint-disable-next-line 
  }, []) 
   

  // Handlenext = async () => {

    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   this.setState({
    //     loading: true,
    //   });

    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92037bae20b1491095d325f75115f661&page=${this.state.page + 1
    //     }&pageSize=${this.props.pageSize}`;
    //   try {
    //     this.setState({
    //       loading: true,
    //     });
    //     let data = await fetch(url);
    //     let parsed_data = await data.json();
    //     this.setState({
    //       page: this.state.page + 1,
    //       articles: parsed_data.articles,
    //       loading: false,
    //     });
    //   } catch (error) {
    //     console.error("Failed to fetch data", error);
    //   }
    // }

  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.Update()
  //   console.log(this.page)


  // };

  // Handleprev = async () => {
    // if (this.state.page > 1) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92037bae20b1491095d325f75115f661&page=${this.state.page - 1
    //     }&pageSize=${this.props.pageSize}`;
    //   this.setState({
    //     loading: true,
    //   });
    //   let data = await fetch(url);
    //   let parsed_data = await data.json();
    //   this.setState({
    //     page: this.state.page - 1,
    //     articles: parsed_data.articles,
    //     loading: false,
    //   });
    // }
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.Update()
  //   console.log(this.page)

  // };
  const fetchMoreData = async () => {
    
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults( parsedData.totalResults)
    // setLoading(false)
    
};


    return (
      
      <div className="container my-3">
        <center><h1>Get {props.category} today</h1></center>
        {/* <h1 className="text-center">{this.state.loading && <Loading />}</h1> */}
        

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<center><Loading/></center>}
          >

          
        <div className="row">
           {/* juat remove the below comment with corrected brackets to show loading */}
          {/* {!this.state.loading && */}
          
        
          {articles.map((element, index) => {
              return (
                <div className="col-md my-3" key={index}>
                  <Newsitem
                    Title={element.title}
                    Description={element.description}
                    Src={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              
              );
            })}
        </div>
        </InfiniteScroll>
        {/*Incase u wanna use buttons instead infinite scroll  */}
{/*         
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.Handleprev}
          >
            &larr;prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.Handlenext}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  
}

export default News