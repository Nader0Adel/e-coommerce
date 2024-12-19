import React from 'react'
import style from './LoadingScreen.module.css'

export default function LoadingScreen () {
  return (
    <div className='min-h-96 flex items-center justify-center'>
        <div className={style.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
