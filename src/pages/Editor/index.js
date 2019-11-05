import React, {Component} from 'react';

const styles = {
    container: {
        // display: 'flex',
        // justifyContent: 'center',
//        flexFlow: 'column no-wrap',
        padding: '10vh 16px 0'
    },
    item: {
        // width: '20vw',
        // height: '20vh',
        margin: 8,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
};

class Editor extends Component {


    componentDidMount() {
        const {match: {params: {imageName}}} = this.props;
        this.props.getImageUrl(imageName, this.initCanvas);
    }

    initCanvas = url => {
        const canvas = this.refs.canvas_img;
        const ctx = canvas.getContext('2d');
        const imageObj = new Image();
        imageObj.src = url;
        imageObj.onload = () =>  {
            canvas.width = imageObj.width;
            canvas.height = imageObj.height;
            ctx.drawImage(imageObj,0, 0);
        }
    };

    // updateCanvas = (imageData) => {
    //     const {ctx} = this.state;
    //     ctx.putImageData(imageData, 0, 0);
    // };

    makeGray = () => {
        const canvas = this.refs.canvas_img;
        const ctx = canvas.getContext('2d');
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            let brightness = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            data[i] = brightness
            data[i + 1] = brightness
            data[i + 2] = brightness
        }
        ctx.putImageData(imageData, 0, 0);
    };

    render() {
        const {urls, match: {params: {imageName}}} = this.props;
        return (
            <div style={styles.container}>
                <button onClick={() => this.makeGray()}>GrayScale</button>
                <canvas ref="canvas_img"/>
            </div>
        );
    }
}
export default Editor;
