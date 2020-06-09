import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                    &copy;{new Date().getFullYear()} <span><Link to="https://ddanilovic.github.io/">Dusan Danilovic</Link></span>
                    , All rights reserved.
            </div>
        )
    }
}
