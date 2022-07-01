import React, {useEffect, useState} from 'react';

function Rate() {
    const [exchangeRates, setExchangeRates] = useState([])
    const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getRates = async () => {
      try{
        const response = await fetch(`https://openexchangerates.org/api/latest`)
        const data = await response.json()
        console.log(data)
        setExchangeRates(data.rates)
        setLoading(false)
    
      } catch (error) {
        console.log(error)
      }
    }
    getRates()
  }, [])
  return (
    <div>rateHis</div>
  )
}

export default Rate;