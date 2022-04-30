import React from 'react'
import Header from './Header'
import Location from './Location'
import './style.css'
import data from './data'

const App = () => {

  const locations = data.map(item => {
    return (
    <Location 
      description={item.description}
      endDate={item.endDate}
      mapUrl={item.googleMapsUrl}
      location={item.location}
      startDate={item.startDate}
      title={item.title}
      imageUrl={item.imageUrl}
    />
  )})
  return (
    <div>
        <Header />
        {locations}
    </div>
  )
}

export default App