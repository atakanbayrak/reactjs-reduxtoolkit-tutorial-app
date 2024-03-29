import React from 'react'
import {MdAddChart, MdPostAdd} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice'
import { searchingDataFunc, sortingDataFunc } from '../redux/dataSlice'
const Header = () => {
    const dispatch = useDispatch()
  return (
    <div className='flex items-center justify-between bg-indigo-600 text-white px-4 py-3'>
        <div className='text-3xl'>
            React Uygulama
        </div>
        <div className='flex items-center gap-5'>
            <div>
                <select onChange={e => dispatch(sortingDataFunc(e.target.value))} name='' id='' className='text-black rounded-md px-2 cursor-pointer'>
                    <option value="asc">Artan</option>
                    <option value="desc">Azalan</option>
                </select>
            </div>
            <div>
                <input onChange={e => dispatch(searchingDataFunc(e.target.value))} className='rounded-md px-2 text-black' type='text' placeholder='Arama yap...' />
            </div>
            <div onClick={() => dispatch(modalFunc())} className='bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
                <MdPostAdd size={24}/>
            </div>
        </div>
    </div>
  )
}

export default Header