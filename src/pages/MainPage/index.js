import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
    container: {

        backgroundColor: '#1e2024',
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'row wrap',
        padding: '10vh 16px 0',

        overflow: 'auto',
    },
    item: {
        width: '320px',
        height: '240px',
        margin: 8,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        cursor: 'pointer',
    }
};


class MainPage extends Component {

    componentDidMount() {
        this.props.getGallery();
    }

    render() {
        const {urls, history, uploadImage} = this.props;
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar style={{backgroundColor: "#373842", display: 'flex'}}>
                        <Typography variant="h6" style={{flexGrow: 1}}>Gallery</Typography>
                        <input
                            accept="image/*"
                            style={{display: 'none'}}
                            id="raised-button-file"
                            multiple
                            type="file"
                            onChange={(ev) => uploadImage(ev.target.files[0])}
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color={"primary"} component="span">Upload</Button>
                        </label>
                    </Toolbar>
                </AppBar>
                <div style={styles.container}>
                    {Object.keys(urls).map((name, ind) => <div key={ind}
                                                               onClick={() => history.push(`/edit/${name}`)}
                                                               style={{
                                                                   ...styles.item,
                                                                   backgroundImage: `url(${urls[name]}`
                                                               }}/>)}
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(MainPage);
