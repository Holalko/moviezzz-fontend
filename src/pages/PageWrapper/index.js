import React from "react";
import Navbar from "../../components/Navbar";


class PageWrapper extends React.Component{

    render(){
        return (
            <div>
                <Navbar/>
                <div className="container mt-4">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default PageWrapper;