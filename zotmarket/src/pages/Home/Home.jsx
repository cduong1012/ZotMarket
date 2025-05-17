import React from 'react';
import '../../styles/Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
function Home() {
  return (
    <div className="Home">
      <div className="banner">
        <div className="welcome">Welcome to <span style={{color: '#FFC85C'}}>ZotMarket!</span></div>
        <div className="text">Buy, Sell, and Trade Safely — Powered by UCI Students, for UCI Students.</div>
        <SearchBar/>
      </div>
      <div className="recents">
        <span className="recent-title">Recently Listed</span>
        <div className='cards'>
          <Card name={"Calculator"} price={15} location={"Mesa Court"} tag={"New"}/>
          <Card name={"Desk"} price={30} location={"Middle Earth"} tag={"New"}/>
          <Card name={"Bike"} price={50} location={"UTC"} tag={"New"}/>
        </div>
      </div>
    </div>
  )
}

export default Home
