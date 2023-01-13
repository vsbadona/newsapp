import React, { useState, useEffect } from 'react'
import NewsItem from './newsItem'
import Spinner from './loading'
import InfiniteScroll from 'react-infinite-scroll-component'


var NewsContent = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState()

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const upperCase = (string) => {
        return string.toUpperCase()
    }



    useEffect(() => {
        updatenews()
    }, [])

    const updatenews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=us&apiKey=a32f0045c7df4066a3e1557a20edc83e&page=${page}`;
        setLoading(true)
        props.setProgress(30)
        let data = await fetch(url)
        props.setProgress(70)
        let passeddata = await data.json()
        props.setProgress(100)
        setArticles(passeddata.articles)
        setLoading(false)
        setTotalResults(passeddata.totalResults)
    }

    var fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=us&page=${page+1}&apiKey=a32f0045c7df4066a3e1557a20edc83e`;
        let data = await fetch(url)
        let passeddata = await data.json()
        setArticles(articles.concat(passeddata.articles))
        setTotalResults(passeddata.totalResults)
    }


    return (
        <>
            <div className='container'>
                <h1 className=' text-dark text-center' style={{marginTop: '75px'}}>Top {upperCase(props.category)} Headlines </h1>
                {loading && <Spinner />}

                <div className="row">

                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                    >
                        <div className="row">

                            {articles.map((element) => {

                                return <div className="col-md-4" key={element.title}>
                                    <NewsItem key={element.title} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} time={element.publishedAt} image={element.urlToImage ? element.urlToImage : ""} link={element.url} source={element.source.name} />
                                </div>
                            }
                            )}
                        </div>
                    </InfiniteScroll>

                </div>
            </div>
        </>)
}

export default NewsContent