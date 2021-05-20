
import React, {Component} from 'react'

const initialState = {
    AgeError: '',
    GenderError: ''
}

//Holds state of webpage
class Test extends Component  {
	constructor() {
        super()
        this.state = {
            sex: '', 
            patient_type: false,     
            intubed: false,     
            pneumonia: false,                                     
            age: '',
            AgeError : '',
            GenderError: '',
            pregnancy:  false,   
            diabetes:  false,  
            copd:  false,                                     
            asthma:  false,  
            inmsupr:  false,   
            hypertension:  false,  
            other_disease:  false,                                   
            cardiovascular:   false,  
            obesity: false,              
            renal_chronic:  false,             
            tobacco:  false,                
            contact_other_covid: false,
            covid_res: false,            
            icu: false,
            ReturnedData:  ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.Convert = this.Convert.bind(this)        
    }
 
    //Handles state change of form
	handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    //Input validation
    validate = () => {
        const re = /^[0-9\b]+$/;
        let AgeError ='';
        let GenderError='';
        if(this.state.age === '' || !re.test(this.state.age) || this.state.age > 150) {
            AgeError = "Please enter a valid Age";
        }
        if( this.state.sex !== 'Male' &&  this.state.sex !== 'male' &&
            this.state.sex !== 'Female' &&  this.state.sex !== 'female'   ) {
            GenderError = "Please enter a valid Gender";
        }
        if(AgeError || GenderError) {
            this.setState({AgeError, GenderError});
            return false;
        }
        return true;
    }

    //Sends and receives data from Web Services
    async handleSubmit (event) {  
        const isValid = this.validate();
        if(isValid) {
            this.setState(initialState);
          
         fetch('https://pure-brook-62019.herokuapp.com/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(this.state ),
          })   
          .then(response => response.json())
          .then(data =>  {this.Convert(data)})               
         }
        event.preventDefault();
    }

    //Converts raw data from Web Services into result
    Convert(data){
        if(data["Result"] == 0){ 
            this.setState({ReturnedData: 'Low Risk'});      
        }       
        if(data["Result"] == 1){ 
            this.setState({ReturnedData: 'High Risk'}); 
        }    
    } 
 
    //Web page data fields
    render(){  
 
	return (
		<div className='home'>
			<div className='item'> 
			<h1>Please enter your information</h1>
			<form onSubmit={this.handleSubmit}>
                 	<input 
	                    type="text"
	                    name="age"
	                    placeholder="Age"
	                    width="100%"
	                    value={this.state.age}
	                    className="input"
	                    onChange={this.handleChange}
                    /> 
                    <div style ={{fontSize: 13, color:"red"}}>{this.state.AgeError}</div>
                    <br/>
                    <input 
                        type="text"
                        name="sex"
                        width="100px"
                        placeholder="Gender"
                        className="input"
                        value={this.state.sex}
                        onChange={this.handleChange}
                    /> 
 
                    <br/>
                    <div style ={{fontSize: 13, color:"red"}}>{this.state.GenderError}</div>
                    <br/>

                    <div className='reset'>
                    <label for="patient_type" className="checkText" > 
                    <input  
                        type="checkbox"
                        className ="checkbox"
                        name="patient_type" 
                        id="patient_type"
                        value={this.state.patient_type}
                        onChange={this.handleChange} 
                          />
                          Outpatient
                    </label> 
                    <br/>
                   
                    <label for="intubed" className="checkText" > 
                    <input  
                        type="checkbox"
                        className ="checkbox"
                        name="intubed" 
                        id="intubed"
                        value={this.state.intubed}
                        onChange={this.handleChange} 
                          />
                          Intubed
                    </label> 
                    <br/>    
                                     
                    <label for="pneumonia" className="checkText" > 
                    <input  
                        type="checkbox"
                        className ="checkbox"
                        name="pneumonia" 
                        id="pneumonia"
                        value={this.state.pneumonia}
                        onChange={this.handleChange} 
                          />
                         Pneumonia
                    </label>                                    
                    <br/>
 
                    <label for="pregnancy" className="checkText" >                     
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="pregnancy"
                        id="pregnancy"
                        value={this.state.pregnancy}
                        onChange={this.handleChange} 
                        />
                         Pregnancy 
                     </label>
                    <br/>
 
                    <label for="diabetes" className="checkText" >                     
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="diabetes"
                        id="diabetes"
                        value={this.state.diabetes}
                        onChange={this.handleChange} 
                        />  
                     Diabetes 
                    </label> 
                    <br/>
 
                    <label for="copd" className="checkText" >                      			
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="copd"
                        id="copd"
                        value={this.state.copd}
                        onChange={this.handleChange} 
                        />  
                      COPD
                     </label>
                    <br/>
                                                                             
                    <label for="asthma" className="checkText" > 
                    <input  
                        type="checkbox"
                        className ="checkbox"
                        name="asthma" 
                        id="asthma"
                        value={this.state.asthma}
                        onChange={this.handleChange} 
                          />
                          Asthma
                    </label> 
                    <br/>
                   
                    <label for="inmsupr" className="checkText" >                     
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="inmsupr"
                        id="inmsupr"
                        value={this.state.inmsupr}
                        onChange={this.handleChange} 
                        />
                     Immune Suppression 
                      </label>  
                    <br/>
 
                    <label for="hypertension" className="checkText" >                     
                    <input 
                        type="checkbox"
                        className ="checkbox"
                        name="hypertension"
                        id="hypertension"
                        value={this.state.hypertension}
                        onChange={this.handleChange} 
                        />
                     Hypertension
                     </label>                                                         
                    <br/>
     
                    <label for="other_disease" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="other_disease"
                        id="other_disease"
                        value={this.state.other_disease}
                        onChange={this.handleChange} 
                        />
                     Other Disease 
                     </label>
                    <br/>
                                  
                    <label for="cardiovascular" className="checkText" >  
                    <input 
                        type="checkbox"
                        className ="checkbox"
                        name="cardiovascular"
                        id="cardiovascular"
                        value={this.state.cardiovascular}
                        onChange={this.handleChange} 
                        /> 
                        Cardiovascular Disease 
                     </label>                      
                    <br/>
 
                    <label for="obesity" className="checkText" > 
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="obesity"
                        id="obesity"
                        value={this.state.obesity}
                        onChange={this.handleChange} 
                        />
                     Obesity 
                    </label>  
                    <br/>
                  	                                        
                    <label for="renal_chronic" className="checkText" >                     
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="renal_chronic"
                        id="renal_chronic"
                        value={this.state.renal_chronic}
                        onChange={this.handleChange} 
                        />
                     Renal Chronic  
                     </label>
                    <br/>
 
                    <label for="tobacco" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="tobacco"
                        id="tobacco"
                        value={this.state.tobacco}
                        onChange={this.handleChange} 
                        />       
                     Tobacco 
                     </label> 
                    <br/> 
 
                    <label for="contact_other_covid" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="contact_other_covid"
                        id="contact_other_covid"
                        value={this.state.contact_other_covid}
                        onChange={this.handleChange} 
                        />       
                     Covid Contact 
                     </label> 
                    <br/> 

                    <label for="covid_res" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="covid_res"
                        id="covid_res"
                        value={this.state.covid_res}
                        onChange={this.handleChange} 
                        />       
                     Covid Resistance
                     </label> 
                    <br/>                     
 
                    <label for="icu" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="icu"
                        id="icu"
                        value={this.state.icu}
                        onChange={this.handleChange} 
                        />       
                     ICU 
                     </label> 
					<br/>                                                               
                </div>
                <br/>
                <input 
                    type ="submit" 
                    value = "Submit" 
                    className="submit"/>
              </form>
              <br/>
              <input 
                  type="text" 
                  name = "result"
                  value = {this.state.ReturnedData} 
                  className="return"/>
            </div>
         </div>
	)
}
}
export default Test;
