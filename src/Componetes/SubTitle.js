import React from 'react'
import style from './SubTitle.module.css'

const SubTitle = ({subtitle}) => {
  return (
    <h2 className={ style.subtitle } >{subtitle}</h2>
  )
}

export default SubTitle