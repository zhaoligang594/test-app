import React from 'react'
import CopyRight from './CopyRight'
import './../commons/commons.css'

/**
 * bottom
 */
class Bottom extends React.Component{

    render(){
        return(
            <div className="footer">
                <CopyRight/>
            </div>
        )
    }
}

export default Bottom