import React from 'react'

var SuccessAlert = ({show,message}) =>{
    if (show === true) {
        return(
            <div className="alert alert-success" role="alert">
                {message}
            </div>
        )
    }
    else{
        return(
            ''
        )
    }
}

export default SuccessAlert
