import React,{Component} from "react";
import "./Footer.css"
class Footer extends Component 
{

    render()
    {
        return (
            <div>
                <hr></hr>
                <section className="Footer">
                    &#169; {new Date().getFullYear()} Crop Recommendation System
                </section>
            </div>
            

        )
        
    }
}

export default Footer