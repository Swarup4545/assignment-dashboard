import React from 'react'
import log from "../image/log.png"
import msg from "../image/msg.png"
import bell from "../image/bell.png"
import { MdMenu } from "react-icons/md";
const Nav = ({ show, setShow }) => {
    return (
        <div className='block md:flex w-full'>
            <div className={show ? `hidden` : `block`} onClick={() => setShow(!show)}>
                <MdMenu size={40} />
            </div>
            <div>
                <div className="flex flex-col justify-center self-stretch font-light rounded-sm border border-solid border-zinc-500 w-[97%]">
                    <div className='absolute  w-14 ml-2'><span className='relative bottom-5 bg-gray-100 w-14 ml-2'>Search</span></div>
                    <div className='flex gap-2 items-center px-5 py-2 rounded-sm '>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3d8f6fb39e47908236e4f1de8393f9702cb4295ff6ed4a787ed9e13804fa283?" alt="" />
                        <input type="text" placeholder='search by profile setting,artifact,etc..' className='outline-none' />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0caed4833957206d203ed4f615d37df6a8917698846f668848dffc2da6960ea?"
                            className="shrink-0 self-stretch my-auto aspect-square w-[15px] ml-auto"
                        />
                    </div>
                </div>
            </div>
            <div className='ml-auto'>
                <div className="flex gap-3.5 items-center">
                    <div className="flex justify-center items-center self-stretch p-1.5 my-auto w-8 h-8 bg-white rounded-xl shadow-lg">
                        <img
                            loading="lazy"
                            src={bell}
                            className="aspect-square w-[21px]"
                        />
                    </div>
                    <div className="flex justify-center items-center self-stretch p-1.5 my-auto bg-white rounded-xl shadow-lg h-[31px] w-[31px]">
                        <img
                            loading="lazy"
                            src={msg}
                            className="aspect-square w-[21px]"
                        />
                    </div>
                    <div className="flex justify-center items-center self-stretch p-1.5 my-auto w-8 h-8 bg-white rounded-xl shadow-lg">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c8100ee68899d288956fbf15bbde7b2c0c07ff5f6ce1e31167f8ae6ed1c4f9?"
                            className="aspect-square w-[21px]"
                        />
                    </div>
                    <img
                        loading="lazy"
                        src={log}
                        className="shrink-0 self-stretch rounded-full shadow-xl aspect-square w-[41px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav