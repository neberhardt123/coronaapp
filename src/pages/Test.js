

/*
import React, {useState} from 'react'
import {inputButtons} from '../components/inputButtons'
import {Button} from '../components/Button.js'


function Test() {
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [ethnicity, setEthnicity] = useState(false);
	//const [button, setButton] = useState(true);
	function handleData(e) {
		e.preventDefault();
	}
	//const handleClick = () => setClick(!click);
	return (
		<div className='home'>
			<div className='item'> 
			<h1>Please Enter your information</h1>
				<form onSubmit = {handleData}>
				{inputButtons.map((item) => {
				return (
					<>
					{item.title}
					<br/>
					<input type={item.type} width={item.width} className={item.cName} placeholder={item.place} onChange={(e)=>{}} />
					<br/>
					</>
					);
				})}
				<input type = "checkbox" name="Asthma" value="test"/>Test <br />
				<Button type="submit" buttonStyle='btn--outline'>Go</Button>
				</form>
			</div>

		</div>
	)
}

export default Test;


import React, {Component} from 'react'
import {inputButtons} from '../components/inputButtons'
import {Button} from '../components/Button.js'

class Test extends Component  {
	
	constructor() {
        super()
        this.state = {
            Age: "",
            Gender: "",
            Ethnicity: "",
            Asthma:   "",
            CardiovascularDisease:  "",
            Chroniclungdisease:  "",           
            Immunesuppression:  "",           
            Metabolicdisease:  "",           
            Neurologicaldisease:  "",           
            Otherdisease:  "",            
            Autoimmunedisease:  "",            
            Obesity:  "",            
            Pregnancy:  "",           
            Renaldisease:  "",            
            Gastrointestinalliverdisease:  "",            
            Hypertension:  "",
            ReturnedData: {}
        }
        this.handleChange = this.handleChange.bind(this)
    }
	
	componentDidMount() {
        fetch(" ")
            .then(response => response.json())
            .then(response => {
                const {data} = response.data
                this.setState({  ReturnedData: data })
            })
    }

	handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);
    
        fetch('https://your-node-server-here.com/api/endpoint', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
    
        event.preventDefault();
    }
	
	//const [button, setButton] = useState(true);
     render(){  
	//const handleClick = () => setClick(!click);
	return (
		<div className='home'>
			<div className='item'> 
			<h1>Please Enter your information</h1>
			<form onSubmit={this.handleSubmit}>
				 {inputButtons.map((item) => {
				return (
					<>
					{item.title}
					<br/>
					<input type={item.type} 
					       width={item.width} 
						   className={item.cName} 
						   placeholder={item.place}
						   onChange={this.handleChange}
						    />
					<br/>
					</>
					);
				})} 
				Select the following diseases that apply to you: <br />
                    <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Asthma" 
                        value={this.state.Asthma}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />

                    Asthma 
                    <br/>
                    <input 
                        type="checkbox"
                        name="Cardiovascular Disease"
                        value={this.state.CardiovascularDisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        /> 
                    Cardiovascular Disease
                    <br/>					
                     <input 
                        type="checkbox"
                        name="Chronic lung disease"
                        value={this.state.Chroniclungdisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />  
                    Chronic lung disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Immune suppression"
                        value={this.state.Immunesuppression}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Immune suppression
                    <br/>
                     <input 
                        type="checkbox"
                        name="Metabolic disease"
                        value={this.state.Metabolicdisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />  
                    Metabolic disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Neurological disease"
                        value={this.state.Neurologicaldisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />       
                    Neurological disease    
                    <br/>                                        
                     <input 
                        type="checkbox"
                        name="Other disease"
                        value={this.state.Otherdisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Other disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Autoimmune disease"
                        value={this.state.Autoimmunedisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Autoimmune disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Obesity"
                        value={this.state.Obesity}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Obesity
                    <br/>
                     <input 
                        type="checkbox"
                        name="Pregnancy"
                        value={this.state.Pregnancy}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Pregnancy
                    <br/>
                     <input 
                        type="checkbox"
                        name="Renal disease"
                        value={this.state.Renaldisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Renal disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Gastrointestinal/liver disease"
                        value={this.state.Gastrointestinalliverdisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        /> 
                    Gastrointestinal/liver disease
                    <br/>
                     <input 
                        type="checkbox"
                        name="Hypertension"                      
                        value={this.state.Hypertension}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />       
                    Hypertension    
                    <br/> 

				<Button type="submit" buttonStyle='btn--outline'>Go</Button>
              </form>
			</div>

		</div>
	)
}
}
export default Test;
*/
import React, {Component} from 'react'
import {inputButtons} from '../components/inputButtons'
import {Button} from '../components/Button.js'

const initialState = {
    AgeError: '',
    GenderError: ''
}

class Test extends Component  {
	
	constructor() {
        super()
        this.state = {

            age: '',
            AgeError: '',
            sex: '',
            GenderError: '',
            patient_type: false,
            intubed: false,
            pneumonia: false,
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
            covid_res: false,
            contact_other_covid: false,
            icu: false,
            ReturnedData:  ''
        }
        //this.input = react.createRef();
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


	
	componentDidMount() {
        fetch("http://127.0.0.1:5000/")
            .then(response => response.json())
            .then(response => {
                const {data} = response.data
                this.setState({  ReturnedData: data })
            })
    }

	handleChange(event) {
        //const {name, value} = event.target
        //this.setState({ [name]: value })
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

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
    async handleSubmit (event) {  
        const isValid = this.validate();
        if(isValid) {
            this.setState(initialState);
        }
         fetch('http://127.0.0.1:5000/' , {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(this.state ),
          })   
        event.preventDefault();

    }
 


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
                    <label for="Inpatient" className="checkText" > 
                    <input  
                        type="checkbox"
                        className ="checkbox"
                        name="Inpatient" 
                        id="Inpatient"
                        value={this.state.inpatient}
                        onChange={this.handleChange} 
                          />
                          Inpatient
                    </label> 
                    <br/>
                   
                    <label for="Intubed" className="checkText" > 
                    <input  
                        type="checkbox"
                        className ="checkbox"
                        name="Intubed" 
                        id="Intubed"
                        value={this.state.intubed}
                        onChange={this.handleChange} 
                          />
                          Intubed
                    </label> 
                    <br/>    
                                     
                    <label for="Pneumonia" className="checkText" > 
                    <input  
                        type="checkbox"
                        className ="checkbox"
                        name="Pneumonia" 
                        id="Pneumonia"
                        value={this.state.pneumonia}
                        onChange={this.handleChange} 
                          />
                         Pneumonia
                    </label>                                    
                    <br/>
 
                    <label for="Pregnancy" className="checkText" >                     
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Pregnancy"
                        id="Pregnancy"
                        value={this.state.pregnancy}
                        onChange={this.handleChange} 
                        />
                         Pregnancy 
                     </label>
                    <br/>
 
                    <label for="Diabetes" className="checkText" >                     
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Diabetes"
                        id="Diabetes"
                        value={this.state.diabetes}
                        onChange={this.handleChange} 
                        />  
                     Diabetes 
                    </label> 
                    <br/>
 
                    <label for="COPD" className="checkText" >                      			
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="COPD"
                        id="COPD"
                        value={this.state.copd}
                        onChange={this.handleChange} 
                        />  
                      COPD
                     </label>
                    <br/>
                                                                             
                    <label for="Asthma" className="checkText" > 
                    <input  
                        type="checkbox"
                        className ="checkbox"
                        name="Asthma" 
                        id="Asthma"
                        value={this.state.asthma}
                        onChange={this.handleChange} 
                          />
                          Asthma
                    </label> 
                    <br/>
                   
                    <label for="Immune Suppression" className="checkText" >                     
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Immune Suppression"
                        id="Immune Suppression"
                        value={this.state.inmsupr}
                        onChange={this.handleChange} 
                        />
                     Immune Suppression 
                      </label>  
                    <br/>
 
                    <label for="Hypertension" className="checkText" >                     
                    <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Hypertension"
                        id="Hypertension"
                        value={this.state.hypertension}
                        onChange={this.handleChange} 
                        />
                     Hypertension
                     </label>                                                         
                    <br/>
     
                    <label for="Other Disease" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Other Disease"
                        id="Other Disease"
                        value={this.state.other_disease}
                        onChange={this.handleChange} 
                        />
                     Other Disease 
                     </label>
                    <br/>
                                  
                    <label for="Cardiovascular Disease" className="checkText" >  
                    <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Cardiovascular Disease"
                        id="Cardiovascular Disease"
                        value={this.state.cardiovascular}
                        onChange={this.handleChange} 
                        /> 
                        Cardiovascular Disease 
                     </label>                      
                    <br/>
 
                    <label for="Obesity" className="checkText" > 
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Obesity"
                        id="Obesity"
                        value={this.state.obesity}
                        onChange={this.handleChange} 
                        />
                     Obesity 
                    </label>  
                    <br/>
                  	                                        
                    <label for="Renal Disease" className="checkText" >                     
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Renal Disease"
                        id="Renal Disease"
                        value={this.state.renal_chronic}
                        onChange={this.handleChange} 
                        />
                     Renal Chronic  
                     </label>
                    <br/>
 
                    <label for="Tobacco" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Tobacco"
                        id="Tobacco"
                        value={this.state.tobacco}
                        onChange={this.handleChange} 
                        />       
                     Tobacco 
                     </label> 
                    <br/> 
 
                    <label for="CovidContact" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="CovidContact"
                        id="CovidContact"
                        value={this.state.contact_other_covid}
                        onChange={this.handleChange} 
                        />       
                     Covid Contact 
                     </label> 
                    <br/> 

                    <label for="CovidRes" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="CovidRes"
                        id="CovidRes"
                        value={this.state.covid_res}
                        onChange={this.handleChange} 
                        />       
                     Covid Resistance
                     </label> 
                    <br/>                     
 
                    <label for="ICU" className="checkText" >                      
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="ICU"
                        id="ICU"
                        value={this.state.icu}
                        onChange={this.handleChange} 
                        />       
                     ICU 
                     </label> 
					<br/>                                                               
                </div>
                    {/* <button onClick={this.submit}  >Go</button> */}
				{/* <Button buttonStyle='btn--outline'   >Go</Button> */}
                <br/>
                <input type ="submit" value = "Submit" className="submit"/>
 
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
