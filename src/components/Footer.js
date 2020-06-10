import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                    &copy;{new Date().getFullYear()} <span><a href="https://ddanilovic.github.io/">Dusan Danilovic</a></span>
                    , All rights reserved.
            </div>
        )
    }
}
