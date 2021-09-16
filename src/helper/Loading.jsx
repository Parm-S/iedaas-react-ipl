import React from 'react'
import Loader from 'react-loader-spinner'
function Loading() {
    return (
        <div style={{margin:'2% 45%'}}>
            <Loader 
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} 
            />
        </div>
    )
}

export default Loading

