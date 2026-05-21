import { useEffect, useState } from 'react'

function CatFact() {
  const [fact, setFact] = useState('Loading...')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact)
      })
  }, [])

  return (
    <div>
      <h2>🐱 Random Cat Fact</h2>
      <p>{fact}</p>
    </div>
  )
}

export default CatFact