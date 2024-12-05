import { useState } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import img from "./assets/Karuna_Logo.png"
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from "react-ga4"

ReactGA.initialize("G-PXYB62TPL0");

function App() {
  // const location = useLocation();
  
  const [drawing, setDrawing] = useState([])
  const [xCoords, setXCoords] = useState([])
  const [yCoords, setYCoords] = useState([])
  const [resp, setResp] = useState("")

  // useEffect(() => {
  //   // Send pageview for the current location
  //   ReactGA.send({ hitType: "pageview", page: location.pathname });
  // }, [location]);

  const handleMousedown = (e) => {
    let { x, y } = e.target.getStage().getPointerPosition()
    setXCoords(i => [Math.round(x)]), setYCoords(i => [Math.round(y)])
  }

  let counter = 0
  const handleMouseMove = (e) => {
    if (xCoords.length === 0) return // don't draw if no coords value

    // Reduce co-ordinate count
    if (counter === 4) {
      const { x, y } = e.target.getStage().getPointerPosition()
      setXCoords(i => [...xCoords, Math.round(x)]), setYCoords(i => [...yCoords, Math.round(y)])
      counter = 0
    } else {
      counter++
    }
  }

  const handleMouseUp = (e) => {
    if (xCoords.length === 0) return //
    setDrawing(i => [...i, [xCoords, yCoords]])  // x, y co-ordinates in one list
    // Empty x & y coordinates
    setXCoords([]), setYCoords([])
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    let draw_data = {
      "drawing": drawing
    };

    try {
      const res = await fetch("https://karu.hepkis.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(draw_data),
      })


      const result = await res.json()
      console.log("results", result)
      setResp(result)
    } catch (err) {
      console.log("error", err)
    }
  }

  const handleClear = ()=>{
    setDrawing([])
  }

  const obj_cls = "font-bold"
  return (
    <div>
      <div className='w-10/12 mx-auto py-4'>
        <div className=''><img src={img} className='w-40' alt="" /></div>
        <h4 className='text-center font-Jost text-xl my-3'>Doodle an <span className={obj_cls}>Apple</span>, <span className={obj_cls}>Bus</span>, <span className={obj_cls}>Car</span>, or <span className={obj_cls}>Alarm Clock</span> 🎨—the AI guesses (badly or brilliantly). which is which, it's all fun!
        </h4>
        <div onClick={handleSubmit} className='cursor-pointer px-20 rounded-md shadow-md py-3 bg-cyan-400 w-fit mt-8 font-bold mx-auto'>Done</div>
        {resp.predictions && <div className=' flex items-center justify-between'>
          <p className='font-semibold font-Urbanist text-2xl'>You drew {resp.predictions}</p>
          <p onClick={handleClear} className='font-Jost bg-black text-white py-2 px-8 rounded-sm cursor-pointer'>Refreash</p>
        </div>}
      </div>
      <div >
        <Stage
          className='shadow-lg border mx-auto w-fit'
          // 80% of screen height and width
          width={window.innerWidth * .7} height={window.innerHeight * .7}
          onMouseDown={handleMousedown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Layer>
            {/* Render lines drawn */}
            {drawing.map((cords, index) => (
              // console.log("co-ordinates", x_val[0], x_val[1]),
              <Line
                key={index} strokeWidth={5}
                points={
                  cords[0].flatMap((x, index) => ([x, cords[1][index]]))
                }
                stroke="black" lineCap='round' lineJoin='round'
              />
            ))}
            {xCoords.length > 0 && (
              // console.log(xCoords, yCoords, "line cords"),
              <Line
                points={xCoords.flatMap((x, index) => ([x, yCoords[index]]))}
                stroke="black"
                strokeWidth={5} lineCap='round' lineJoin='round'
              />
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  )
}

export default App
