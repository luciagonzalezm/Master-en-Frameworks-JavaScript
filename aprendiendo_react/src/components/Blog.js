import React, { Component } from "react";
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from "./Articles";

class Blog extends Component {
    render() {
        
        return (
            <div id="blog">
                <Slider
                    title="Blog"
                    size="slider-small"
                >
                </Slider>
                <div className="center">
                    <div id="content">
                        {/** Listado de artículos que vendrán de la api rest de node */}
                       <Articles></Articles>
                    </div>
                    <Sidebar blog="true"></Sidebar>
                </div>

            </div>
        );
    }
}

export default Blog;