import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from "react-router-dom";
import noResults from "../../assets/no-results.png";
import { fetchDataApi } from "../../utilis/api";
import Spinner from "../../components/spinner/Spinner";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  //FOR API CALLING
  const fetchInitialData = () => {
    setLoading(true);
    fetchDataApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  // FOR NEXT PAGE DATA
  const fetchNextPageData = () => {
    fetchDataApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    // setPageNum(1);
    fetchInitialData();
  }, [query]);
  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
              className="content"
              dataLength = {data?.results?.length || []}
              next={fetchNextPageData}
              hasMore={pageNum <= data?.total_pages}
              loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if(item.media_type === "person") return;
                  return <MovieCard 
                  key={index} 
                  data={item} 
                  fromSearch={true}
                  />
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results not Found</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
