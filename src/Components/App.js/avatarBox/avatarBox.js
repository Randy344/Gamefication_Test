import React from 'react';
import "./avatarBox.css"

class avatarBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="avatar-container">
                <img src={} alt="Hair" />
                <img src={} alt="Face" />
                <img src={} alt="Upper_Body" />
            </div>
        );  
    }
}
export default avatarBox;