import React from 'react';

class USERTYPE extends React.Component {
    constructor() {
        super();
        this.state = { 
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

    renderItems = () => {
        let data = this.state;
        return data.userData.filter((user)=>
            user.user_type === 'Designer'
        ).map((item)=>{
            return <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        });
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Display based on user type</h1>
                <div className="display-box">
                    <ul>{this.renderItems()}</ul>
                </div>
          </React.Fragment> 
        );
    }
}
 
export default USERTYPE;