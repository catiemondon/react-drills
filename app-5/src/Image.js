import React, { Component } from 'react'

class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.myImage} alt='gagging gal' />
                <p>Sorry that my gifs and funny memes wont load Matt :( I tried to amuse you as you were grading these.</p>
            </div>
        )
    }
}





export default Image