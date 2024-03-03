import React, { useEffect, useState } from "react"

const HadithOfDay = () => {
  const [hadith, setHadith] = useState([])

  useEffect(() => {
    const getHadith = async () => {
      try {
        const res = await fetch(
          "https://api.hadith.gading.dev/books/muslim?range=100-149"
        )
        const responded = await res.json()
        console.log(responded.data.hadiths)
        setHadith(responded.data.hadiths)
      } catch (err) {
        console.log(err)
      }
    }

    getHadith()
  }, [])

  return (
    <React.Fragment>
      <div className="flex justify-center items-center mt-96">
        <div className="bg-white w-2/5 h-80">
          {hadith.map((info, index) => (
            <p key={index}>{info.arab}</p>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default HadithOfDay
