import React from 'react'

export default function Header(props) {
  
  let {headerInfo,children}=props;                           
  return (
    <>
      {/* <h1>Header Seaction {props.email} | {props.phone}</h1> */}
      {/* <h1>Header Seaction {props.headerInfo.email}|{props.headerInfo.phone}</h1> */}{/**It is used before destructuring props */}
      {/*let {headerInfo,children}=props;  destructuring props*/} 
      <h1>Header Seaction {headerInfo.email}|{headerInfo.phone}</h1>
      {children}
    </>
  )
}
