import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/cartAction'

const HeadandTail = () => {
  const [option, setOption] = useState("")
  const [alert, setAlert] = useState(false)

  const dispatch = useDispatch()
  const selectData = useSelector(state => state.data)

  console.log(selectData)
  const handleSubmit = () => {
    if (option === "Select") {
      setTimeout(() => {
        setAlert(true)
      }, 400);
      setAlert(false)
      console.log("kjdbfkbvkfsbk")
    } else {
      if (selectData[selectData.length - 1] !== option) {
        dispatch(addItem(option))
        console.log(selectData)
      } return
    }
  }
  return (
    <>
      <div style={{ padding: '5rem 10rem', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 20 }}>
        <div>

          <select name="" id="" defaultValue="Select" style={{ height: "20px" }} onChange={(e) => { setAlert(false); setOption(e.target.value) }}>
            <option value="Select">Select</option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>
        </div>

        <button onClick={handleSubmit}>Submit</button>

        {alert && selectData.length ? <p style={{ color: 'red', backgroundColor: "" }}>Please select value from dropdown</p> : null}
        <div style={{ display: "flex", gap: 5, margin: 5 }}>
          {
            selectData?.map((p, i) => {
              return (<span style={{ padding: 5 }} key={i}>
                {p}
              </span>)
            })
          }
        </div>

      </div>
    </>
  )
}

export default HeadandTail