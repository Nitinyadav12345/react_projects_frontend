import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import requests from '../Request'


const Home = () => {
  return (
    <>
      <Main/>
      <Row rowid='1' title="Up Coming" fetchUrl={requests.requestUpcoming}/>
      <Row rowid='2' title="Popular" fetchUrl={requests.requestPopular}/>
      <Row rowid='3' title="Trending" fetchUrl={requests.requestTrending}/>
      <Row rowid='4' title="Top Rated" fetchUrl={requests.requestTopRated}/>
      <Row rowid='5' title="Horror" fetchUrl={requests.requestHorror}/>
    </>
  )
}

export default Home
