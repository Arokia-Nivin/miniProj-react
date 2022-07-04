import React from "react";
import { useState } from "react";
import "./Form.css";
const Form=(props)=>
{
    const [nitrogen, setNitrogen]= useState(''); 
    const [phosphorous, setPhosporous]= useState(''); 
    const [potassium, setPotassium]= useState(''); 
    const [temperature, setTemperature]= useState(''); 
    const [rainfall, setRainfall]= useState(''); 
    const [ph, setPh]= useState(''); 
    const [humidity, setHumidity]= useState(''); 

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("rice");
    }

    return (
        
        <div>
            <section className="Form-Section">

            <form id="form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="nitrogen">Nitrogen </label>
                    <input type="number" name="nitrogen" id="nitrogen" 
                    placeholder="example:50" value={nitrogen} required
                    onChange={(e)=>setNitrogen(e.target.value)}
                     />
                </div>
                <div className="form-field">
                    <label htmlFor="phosphorous">Phosphorous</label>
                    <input type="number" name="phosphorous" id="phosphorous" 
                    placeholder="example:50" value={phosphorous} required
                    onChange={(e)=>setPhosporous(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="potassium">Potassium</label>
                    <input type="number" name="potassium" id="potassium"
                     placeholder="example:40" value={potassium} required
                     onChange={(e)=>setPotassium(e.target.value)} 
                     />
                </div>
                
                <div className="form-field">
                    <label htmlFor="ph">Ph value</label>
                    <input type="number" name="ph" id="ph" 
                    placeholder="example:6.0" value={ph} required
                    onChange={(e)=>setPh(e.target.value)}  />
                </div>
                <div className="form-field">
                    <label htmlFor="temperature">Temperature</label>
                    <input type="number" name="temperature" id="temperature" 
                    placeholder="example:25" value={temperature} required
                    onChange={(e)=>setTemperature(e.target.value)}  />
                </div>
                <div className="form-field">
                    <label htmlFor="humidity">Humidity</label>
                    <input type="number" name="humidity" id="humidity" 
                    placeholder="example:80" value={humidity} required
                    onChange={(e)=>setHumidity(e.target.value)}  />
                </div>
                <div className="form-field">
                    <label htmlFor="rainfall">Rainfall(mm)</label>
                    <input type="number" name="rainfall" id="rainfall" 
                    placeholder="example:250" value={rainfall} required 
                    onChange={(e)=>setRainfall(e.target.value)} />
                </div>
                <div className="form-field">
                    <label></label>
                    <input type="submit" value="Predict" />
                </div>
            </form>
        </section>
        </div>
        
    )
        
};

export default Form