import React from 'react'
import Loader from 'react-loader-spinner'
import eventEmitter from './Event';
import {useEffect,useState} from 'react'
function Loading() {
    const [showLoader, setShowLoader] = useState(false);
    useEffect(() => {
        eventEmitter.on('SHOW_LOADER',()=>{
            setShowLoader(true);
        })
        eventEmitter.on('HIDE_LOADER',()=>{
            setShowLoader(false);
        })
        return () => {
         eventEmitter.off('SHOW_LOADER')
         eventEmitter.off('HIDE_LOADER')   
        }
    }, [])

    return (
        <>
        {showLoader && 
        <Loader 
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} 
          style={{margin:'2% 45%'}}
        />}
        </>
    )
}

export default Loading

