import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const TopRated = () => {

    const [endpoint, setEndpoint] = useState("movie")

    //API CALLING FOR GETTING DATA
    const {data, loading} = useFetch(`/${endpoint}/top_rated?api_key=68ccd30529adc83eb696447bbbff1338`)

    //FOR CHANGING TABS BY DAY AND WEEK
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    } 
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Top Rated</span>
        <SwitchTabs data= {["Movies", "TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel 
      data={data?.results} 
      loading={loading} 
      endpoint={endpoint}

      />
    </div>
  )
}

export default TopRated
