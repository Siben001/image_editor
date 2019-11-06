import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import TransparencySlider from "./index/TransparencySlider";
import ColorFilter from "./index/ColorFilter";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import BeforeIcon from "@material-ui/icons/NavigateBefore";

const styles = {
    page: {
        backgroundColor: '#1e2024',
        height: 'calc(100vh - 64px)',
        display: 'flex',
    },
    toolPanel: {
        backgroundColor: '#292c31',
        width: '200px',
        padding: 16
    },
    workSpace: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
    },
};


class Editor extends Component {

    initialState = {
        colorFilter: '',
    };

    state = this.initialState;

    initCanvas = url => {
        const {initImageData} = this.props;
        const canvas = this.refs.canvas_img;
        const ctx = canvas.getContext('2d');
        const width = window.innerWidth - 248;
        const imageObj = new Image();
        imageObj.src = url;
        imageObj.onload = _ => {
            if (imageObj.width > width) {
                const ratio = imageObj.height / imageObj.width;
                canvas.width = width;
                canvas.height = width * ratio;
            }
            else {
                canvas.width = imageObj.width;
                canvas.height = imageObj.height;
            }
            ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            initImageData(imageData);
        }
    };

    updateCanvas = (imageData) => {
        const canvas = this.refs.canvas_img;
        const ctx = canvas.getContext('2d');
        ctx.putImageData(imageData, 0, 0);
    };

    reset = () => {
        const {resetImage, original} = this.props;
        this.updateCanvas(original);
        resetImage();
        this.setState(this.initialState);
    };

    handleChange = (ev, transparency) => {
        this.props.changeTransparency(transparency, this.updateCanvas);
        this.setState({transparency});
    };

    changeColor = ev => {
        const {makeRed, makeGray} = this.props;
        const colorFilter = ev.target.value;
        switch (colorFilter) {
            case 'GrayScale': {
                makeGray(this.updateCanvas);
                break;
            }
            case 'Red': {
                makeRed(this.updateCanvas);
                break;
            }
            default:
                console.log('Color not exist')

        }
        this.setState({colorFilter});
    };

    componentDidMount() {
        const {getImage, match: {params: {imageName}}} = this.props;
        getImage(imageName, this.initCanvas);
    }

    render() {
        const {transparency, match: {params: {imageName}}, history} = this.props;
        const {colorFilter} = this.state;

        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar style={{backgroundColor: "#373842"}}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => history.push("/")}>
                            <BeforeIcon/>
                        </IconButton>
                        <Typography variant="h6">{imageName}</Typography>
                    </Toolbar>
                </AppBar>
                <div style={styles.page}>

                    <div style={styles.workSpace}>
                        <canvas ref={'canvas_img'}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', ...styles.toolPanel}}>
                        <ColorFilter value={colorFilter} onChange={this.changeColor}/>
                        <TransparencySlider value={transparency} onChange={this.handleChange}/>
                        <Button color="primary" variant={"contained"} onClick={this.reset}>Reset</Button>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default withRouter(Editor);
