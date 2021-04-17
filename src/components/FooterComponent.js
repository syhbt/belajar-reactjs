import React, { Component } from 'react'

class FooterComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <center>
            <footer className = "footer">
                <span className="text-muted">All Rights Reserved 2020 @syhbt</span>
            </footer>
            </center>
        </div>
        )
    }
}

export default FooterComponent