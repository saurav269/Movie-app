import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state) => state.home)

  //For api calling
  const { data, loading } = useFetch(
    "/movie/upcoming?api_key=68ccd30529adc83eb696447bbbff1338"
  );

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  //For serach query
  const serachQueryHandle = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
        
      <div className="wrapper">
        <div className="heroBaneerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies,TV shows and people to discover.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a Movie..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={serachQueryHandle}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
