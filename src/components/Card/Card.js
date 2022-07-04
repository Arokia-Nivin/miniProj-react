
import React,{Component} from "react";
import "./Card.css";
import {Link} from "react-router-dom";

class Card extends Component 
{
    render()
    {
        return (
        <div className="ui card">
            <div className="image">
                <img alt="image" src="https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
            </div>
            <div className="content">
                <Link to={this.props.to}>
                    <a className="header">
                        {this.props.title}
                    </a>
                </Link>
                <div className="description">
                    {this.props.description}
                </div>
            </div>
            <div className="extra content">
                <p><i className="leaf icon"></i> Check It Out</p>
                <Link to={this.props.to}>
                    <button className="ui inverted green button">{this.props.buttonContent}</button>
                </Link>
            </div>
        </div>
        )
        
    }
}

export default Card 