

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

            Age: '',
            AgeError: '',
            Gender: '',
            GenderError: '',
            Asthma:  false,  
            CardiovascularDisease:  false,  
            Chroniclungdisease:  false,            
            Immunesuppression:  false,            
            Diabetes:  false,            
            Tobacco:  false,            
            Otherdisease:  false,                      
            Obesity:  false,             
            Pregnancy:  false,           
            Renaldisease:  false,                      
            Hypertension:  false,  
            ReturnedData:  ''
        }
        //this.input = react.createRef();
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        if(this.state.Age === '' || !re.test(this.state.Age) || this.state.Age > 150) {
            AgeError = "Please enter a valid Age";
        }
        if( this.state.Gender !== 'Male' &&  this.state.Gender !== 'male' &&
            this.state.Gender !== 'Female' &&  this.state.Gender !== 'female'   ) {
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
         fetch('backendstuff' , {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(this.state),
          })   
        event.preventDefault();

    }
 


     render(){  
 
	return (
		<div className='home'>
			<div className='item'> 
			<h1>Please Enter your information</h1>
			<form onSubmit={this.handleSubmit}>
                 	<input 
	                    type="text"
	                    name="Age"
	                    placeholder="Age"
	                    width="100%"
	                    value={this.state.Age}
	                    className="input"
	                    onChange={this.handleChange}
                    /> 
                    <div style ={{fontSize: 13, color:"red"}}>{this.state.AgeError}</div>
                    <br/>
                    <input 
                        type="text"
                        name="Gender"
                        width="100px"
                        placeholder="Gender"
                        className="input"
                        value={this.state.Gender}
                        onChange={this.handleChange}
                    /> 
 
                    <br/>
                    <div style ={{fontSize: 13, color:"red"}}>{this.state.GenderError}</div>
                    <br/>
   
                    <input  
                        type="checkbox"
                        className ="checkbox"
                        name="Asthma" 
                        value={this.state.Asthma}
                        onChange={this.handleChange} 
                            
                        />
                    Asthma 
                    <br/>
					<br/>
                    <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Cardiovascular Disease"
                        value={this.state.CardiovascularDisease}
                        onChange={this.handleChange} 
                        /> 
                    Cardiovascular Disease
                    <br/>
					<br/>					
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Chronic lung disease"
                        value={this.state.Chroniclungdisease}
                        onChange={this.handleChange} 
                        />  
                    Chronic lung disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Immune suppression"
                        value={this.state.Immunesuppression}
                        onChange={this.handleChange} 
                        />
                    Immune suppression
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Diabetes"
                        value={this.state.Diabetes}
                        onChange={this.handleChange} 
                        />  
                    Diabetes
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Tobacco"
                        value={this.state.Tobacco}
                        onChange={this.handleChange} 
                        />       
                    Tobacco  
                    <br/> 
					<br/>                                        
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Other disease"
                        value={this.state.Otherdisease}
                        onChange={this.handleChange} 
                        />
                    Other disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Obesity"
                        value={this.state.Obesity}
                        onChange={this.handleChange} 
                        />
 
                    Obesity
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Pregnancy"
                        value={this.state.Pregnancy}
                        onChange={this.handleChange} 
                        />
                    Pregnancy
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Renal disease"
                        value={this.state.Renaldisease}
                        onChange={this.handleChange} 
                        />
                    Renal disease
                    <br/>
					<br/>
                    <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Hypertension"
                        value={this.state.Hypertension}
                        onChange={this.handleChange} 
                        />
                    Hypertension    
                    <br/>
 
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
