import React from 'react';

class TOTALEXP extends React.Component {
    constructor() {
        super();
        this.state = { 
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58, years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

    renderItems = () => {
        let data = this.state;
        let item = data.userData
            .filter((user)=>(user.user_type === 'Designer'))
            .map((user)=>user.years)
            .filter((total, exp)=>total+exp);
        return <React.Fragment>
            <li className="list-elements">
                <span>{item}</span>
            </li>
        </React.Fragment>
        
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Filter the total years of Designers</h1>
                <div className="display-box">
                    <ul>{this.renderItems()}</ul>
                </div>
          </React.Fragment> 
        );
    }
}
 
export default TOTALEXP;