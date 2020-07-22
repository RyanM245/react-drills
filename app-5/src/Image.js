import React, {Component} from 'react'

class ImageClass extends Component{
    constructor(){
        super()

    }


render(){
    return(
        <div>
            <img src= {this.props.url}/>
        </div>
    )
}
}

export default ImageClass