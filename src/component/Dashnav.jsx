import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Dashnav = ({ show, setShow }) => {

  return (
    <>
      <div className={show ? `absolute md:relative flex flex-col px-6 pb-5 text-lg h-[99vh] text-white whitespace-nowrap bg-cyan-800 shadow-sm max-w-[285px] rounded-[35.556px]` : `hidden`}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0fee06e66bb52d98f1092db5d716d2d958a75c999343a30f15c641b032c4cde?"
          className="self-end w-10 pt-1 aspect-square" onClick={() => setShow(!show)}
        />
        <div className="flex gap-3 justify-between self-center mt-7 text-5xl font-semibold">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/752d09a6b479d580885858115d9cdd852c70e1be5e45bd71cbe0a7d374329682?"
            className="shrink-0 my-auto aspect-square w-[43px]"
          />
          <div>Catalix</div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-12 text-center rounded-2xl leading-[100%]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dac4f5cf255bb5d4279711e26025f7bed5a5c2e43b23c00da8ff385df953b4d8?"
            className="shrink-0 aspect-[1.05] w-[22px]"
          />
          <div>Home</div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-2.5 text-center rounded-2xl leading-[100%]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00e779b54bc83bbded5277ed5aa3c19f343d2f9349a65d105b179e684962f12?"
            className="shrink-0 aspect-[1.05] w-[22px]"
          />
          <div>Activities</div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-2.5 text-center rounded-2xl bg-slate-500 leading-[100%]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/577252004261a1bb25ec7b832a0ab3383e54741b660e95146c8f07eeb40a8722?"
            className="shrink-0 aspect-[1.05] w-[22px]"
          />
          <div><Link to="/">Analytics</Link></div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-2.5 text-center rounded-2xl leading-[100%]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf866711a536c865d59e373671e0530b81bd8e61d8f8ac7567d6727313949c5?"
            className="shrink-0 aspect-[1.05] w-[22px]"
          />
          <div>Transformation</div>
        </div>
        <div className="flex gap-4 px-6 py-5 mt-2.5 text-center rounded-2xl leading-[100%]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34333a17c1405d26f93c371ce1ff7821f52adb96e18ebe46690ec439cc4655c?"
            className="shrink-0 aspect-[1.05] w-[22px]"
          />
          <div>Library</div>
        </div>
        <div className="flex flex-col justify-end py-3 mt-20 text-center border-t border-white border-solid leading-[100%]">
          <div className="flex gap-4 px-6 py-5 rounded-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1be0fbba94d17e2792c6800fde9cf0b4ad311604eb5648e4146b9447681016ac?"
              className="shrink-0 aspect-[1.05] w-[22px]"
            />
            <div className="my-auto">Settings</div>
          </div>
          <div className="flex gap-4 px-6 py-5 rounded-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebb2592c3d98a8ed524d5b3fc7bc7a1757fd5f5d5c6ccd59a1ab22028094a6cd?"
              className="shrink-0 aspect-[1.05] w-[22px]"
            />
            <div className="my-auto">Logout</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashnav