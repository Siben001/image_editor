import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'row wrap',
        padding: '10vh 16px 0',
        cursor: 'pointer',
    },
    item: {
        width: '20vw',
        height: '20vh',
        margin: 8,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
};

class App extends Component {

    componentDidMount() {
        this.props.getImageUrl();
    }

    render() {
        const {urls, history} = this.props;
        console.log(urls)
        return (
            <div style={styles.container}>
                {Object.keys(urls).map((name, ind) => <div key={ind}
                                                onClick={() => history.push(`/edit/${name}`)}
                                                style={{...styles.item, backgroundImage: `url(${urls[name]}`}}/>)}
            </div>
        );
    }
}

export default withRouter(App);
