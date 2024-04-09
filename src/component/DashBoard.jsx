import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import data from "./data.json"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const DashBoard = () => {
  const [data2, setData2] = useState([])
  const [row2, setRow2] = useState([])
  const [tabHed, setTabHed] = useState([])
  const [tabRow, setTabRow] = useState([])


  //here we are create function for when we render page that time call once
  function Get() {
    //set joson data
    setData2(data.row1 || [])
    console.log("data=", data)
    //set json row data
    setRow2(data.row2)
    //set table heding data
    setTabHed(data.TABLE.HED);
    //set table all paragraph data
    setTabRow(data.TABLE.ROW1);
    console.log("Table", tabHed)
  }
  //we ue reactjs hooks useEffect for call that function
  useEffect(() => {
    Get()
  }, [])

  //here we are firstly create data using map method and store in variabel
  let list = data2.map((item, index) => {

    const { TITLE, bg, img, logo,PARA, TRADE, TRADE_VAL, CURRENCY, TRADE_VAL_c, text_c, para_c } = item
    return (
      <>
        <div className={`w-[300px] h-44 mt-4 rounded-xl`} style={{ backgroundImage: `url(${item.img})`, backgroundSize: "cover", backgroundColor: bg }}>
          <div className='ml-4'>
            <p className='text-xl' style={{ color: text_c }}>{TITLE}</p>
            <p className='' style={{ color: para_c }}>{PARA}</p>
            <div className='flex'><p className='text-2xl' style={{ color: text_c }}>{TRADE}</p><img src={logo} alt="" /></div>
            <p className='' style={{ color: TRADE_VAL_c }}>{TRADE_VAL}</p>
            <p style={{ color: para_c }}>{CURRENCY}</p>
          </div>
        </div>
      </>
    )
  })
  //here we are firstly create data using map method and store in variabel
  let list2 = row2.map((item, index) => {

    const { TITLE, PARA1, bg, PARA1_NO, PARA2, PARA2_NO, PARA3, PARA3_NO, CSS_DOT } = item
    return (
      <>
        <div className={`w-[400px] h-56 mt-4 rounded-xl bg-white shadow-md p-3`}>
          <div className="rounded-full h-[15px] min-h-[15px] w-[15px] ml-auto mr-3" style={{ backgroundColor: bg }}></div>
          <p className='text-2xl'>{TITLE}</p>
          <div className='w-full flex'>
            <div className='w-full'>
              <p>{PARA1}</p>
              <p>{PARA2}</p>
              <p>{PARA3}</p>
            </div>
            <div className='text-right w-full'>
              <p className='font-bold'>{PARA1_NO}</p>
              <p className='font-bold'>{PARA2_NO}</p>
              <p className='font-bold'>{PARA3_NO}</p>
            </div>
          </div>
        </div>
      </>
    )
  })
  return (
    <>
      <div>
        <div className="flex gap-2.5 justify-between text-lg font-medium leading-5 text-center text-neutral-500 max-md:flex-wrap">
          <div className="flex flex-col justify-center text-white bg-cyan-800 rounded-[98.335px]">
            <div className="flex gap-2 justify-between px-4 py-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf145a4fe14d93efd86075bf9c568694c4348139816ef8ff75f6a883f6aa9769?"
                className="shrink-0 self-start aspect-[0.94] w-[17px]"
              />
              <div>Create Report</div>
            </div>
          </div>
          <div className="justify-center px-6 py-2.5 text-cyan-800 border border-solid border-neutral-500 rounded-[98.335px] max-md:px-5">
            Share this dashboard
          </div>
          <div className="justify-center px-6 py-2.5 border border-solid border-neutral-500 rounded-[98.335px] max-md:px-5">
            Select Duration
          </div>
          <div className="justify-center px-6 py-2.5 border border-solid border-neutral-500 rounded-[98.335px] max-md:px-5">
            Compare with Duration
          </div>
        </div>
        <div className='flex justify-evenly flex-wrap justify-center'>
          {list}
        </div>
        <div className='flex justify-evenly flex-wrap item-center justify-center'>
          {list2}
        </div>
        <div>
          <div className='bg-white flex flex-wrap border-b rounded-t-lg mt-4 w-[98%] m-auto'>
            <div className='flex'><span>PAGEVIEWS</span><MdOutlineKeyboardArrowDown className='mt-1'/></div>
            <div className="flex flex-wrap items-center ml-auto py-2">
               <div className='border border-solid bolder-black px-3 py-1 rounded-l'>Today</div>
               <div className='border border-solid bolder-black px-3 py-1'>Yesterday</div>
               <div className='border border-solid bolder-black px-3 py-1'>Week</div>
               <div className='border border-solid bolder-black px-3 py-1 bg-blue-200'>Month</div>
               <div className='border border-solid bolder-black px-3 py-1'>Quarter</div>
               <div className='border border-solid bolder-black px-3 py-1 rounded-r'>Year</div>
            </div>
            <div className='flex border border-solid bolder-black rounded py-2'><span>select period</span><MdOutlineKeyboardArrowDown className='mt-1'/></div>
          </div>
          <div className='h-[150px] bg-white overflow-y-auto w-[98%] m-auto'>
            <div className='m-auto'>
              <div className="flex flex-wrap border-b border-gray-500 justify-evenly">
                {/* here we are maping table hedding data */}
                {tabHed.map((header, index) => (
                  <div key={index} className='bg-white md:w-40 w-auto my-2'>
                    <p>{header.HED1}</p>
                    <p>{header.no}</p>
                    <div className="flex overflow-hidden relative flex-col justify-center aspect-[3.74] fill-[linear-gradient(180deg,#4592FF_-41.67%,rgba(255,255,255,0.00)_100%)] max-w-[71px]" style={{ display: header.css }}>
                      <img
                        loading="lazy"
                        src={header.hed_img1}
                        className="object-cover absolute inset-0 size-full"
                      />
                      <img
                        loading="lazy"
                        src={header.hed_img2}
                        className="w-full aspect-[4] border-slate-500 stroke-[1.161px] stroke-slate-500 overflow-hidden"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {/* Here we are mapping table paragraph data */}
                {tabRow.map((row, index) => (
                  <div key={index} className="flex flex-wrap border-b border-gray-500 justify-evenly">
                    <div className='md:w-40 w-auto mx-2 md:mx-0 my-2'><span>{row.para1}</span></div>
                    <div className='md:w-40 w-auto mx-2 md:mx-0 my-2'><span>{row.col3_no1}</span><span className='text-gray-400'>{row.col2_no2}</span></div>
                    <div className='md:w-40 w-auto mx-2 md:mx-0 my-2'><span>{row.col3_no1}</span><span className='text-gray-400'>{row.col2_no2}</span></div>
                    <div className='md:w-40 w-auto mx-2 md:mx-0 my-2'><span>{row.col4_no1}</span><span className='text-gray-400'>{row.col4_no2}</span></div>
                    <div className='md:w-40 w-auto mx-2 md:mx-0 my-2'><span>{row.col5_no1}</span><span className='text-gray-400'>{row.col5_no2}</span></div>
                    <div className='md:w-40 w-auto mx-2 md:mx-0 my-2'><span>{row.col6_no1}</span><span className='text-gray-400'>{row.col6_no2}</span></div>
                    <div className='md:w-40 w-auto mx-2 md:mx-0 my-2'><span>{`$${row.col7_no1}`}</span><span className='text-gray-400'>{row.col7_no2}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard;