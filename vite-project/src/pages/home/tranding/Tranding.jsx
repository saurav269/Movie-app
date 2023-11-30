import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Tranding = () => {

    const [endpoint, setEndpoint] = useState("day")

    //API CALLING FOR GETTING DATA
    const {data, loading} = useFetch(`/trending/movie/${endpoint}?api_key=68ccd30529adc83eb696447bbbff1338`)

    //FOR CHANGING TABS BY DAY AND WEEK
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week")
    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTabs data= {["Day", "Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Tranding
