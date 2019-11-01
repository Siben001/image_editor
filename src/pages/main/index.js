import React, {Component} from 'react';

class App extends Component {

    componentDidMount() {
        this.props.getImageUrl();
    }

    render() {
        console.log(this.props.imageUrl)
        return (
            <div>
                asdjkahskld
                <img src={this.props.imageUrl}/>
            </div>
        );
    }
}
export default App;
