import React,{Component} from "react";
import "./Landing.css";
import Card from "../Card/Card";
class Landing extends Component 
{

    render()
    {
        return (
        <div className="Landing-content">
            <div className="Landing-image">
                <p className="Landing-title">
                    Crop Recommendation System using machine learning 
                </p>
            </div>
            <section className="Card-content">
                <Card title="Crop Recommendation System Using Machine Learning" 
                    description="choose the right crops for your farm"
                    buttonContent="Crop"
                    to="/crop"
                />
                {/* <Card title="Fertilizer Recommendation System Using Machine Learning" 
                    description="coming soon..."
                    buttonContent="Fertilizer"
                    to="/fertlizer"
                /> */}
            </section>
         
        </div>
        )
        
    }
}

export default Landing 