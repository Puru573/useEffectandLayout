import React,{useEffect,useState,useLayoutEffect} from 'react'

function EffvsLayout() {
    const[loading,setLoading]=useState("loading.........")
    useEffect(()=>{
        setLoading("done");
    })  // run asynchronously when dom gets painted i.e dom->ui->useEffect
    // useLayoutEffect(()=>{
    //   setLoading("done");//run defore the changes are painted on dom  use for the measurment purposes
    // })
  return (
    <div>
        <h1>{loading}</h1>
    </div>
  )
}

export default EffvsLayout;
