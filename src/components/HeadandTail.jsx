import React, { useState } from 'react'

const HeadandTail = () => {
  const [data, setData] = useState([])
  const [option, setOption] = useState("")
  const [alert, setAlert] = useState(false)


  const handleSubmit = () => {
    if (option === "Select") {
      setTimeout(() => {
        setAlert(true)
      }, 400);
      setAlert(false)
      console.log("kjdbfkbvkfsbk")
    } else {
      if (data[data.length - 1] !== option) {
        setData([...data, option])
        console.log(data)
      } return
    }
  }
  return (
    <>
      <div style={{ padding: '5rem 10rem', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 20 }}>
        <div>

          <select name="" id="" defaultValue="Select" style={{ height: "20px" }} onChange={(e) => {setAlert(false); setOption(e.target.value) }}>
            <option value="Select">Select</option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>
        </div>

        <button onClick={handleSubmit}>Submit</button>

        {alert && data.length ? <p style={{ color: 'red', backgroundColor: "" }}>Please select value from dropdown</p>:null}
        <div style={{ display: "flex", gap: 5, margin: 5 }}>
          {
            data.map((p, i) => {
              return (<span style={{ padding: 5 }}>
                {p}
              </span>)
            })
          }
          <p></p>
        </div>

      </div>
    </>
  )
}

export default HeadandTail