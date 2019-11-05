import React, {Component} from 'react';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'row wrap',
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

    state = {
        image: {},
    };

    componentDidMount() {
        const {match: {params: {imageName}}} = this.props;
        this.props.getImageUrl(imageName, this.initCanvas);
        // this.updateCanvas();
    }

    initCanvas = url => {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        const imageObj = new Image();
        imageObj.src = url;
        canvas.width = imageObj.width;
        canvas.height = imageObj.height;
        imageObj.crossOrigin = "Anonymous";
        imageObj.onload = () =>  {
            console.log("LOADED")
            // ctx.drawImage(imageObj,0, 0);
            // const image = ctx.getImageData(0, 0, imageObj.width, imageObj.height);
            this.setState({image: imageObj});

        }
    };

    updateCanvas = (imageData) => {
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        context.putImageData(imageData, 0, 0);
    }

    grayscaleImageData = () => {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        const {image} = this.state;
        console.log(image)
        let data = ctx.getImageData(0, 0, image.width, image.height);
        console.log(data)
        for (let i = 0; i < data.length; i += 4) {
            let brightness = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            data[i] = brightness
            data[i + 1] = brightness
            data[i + 2] = brightness
        }
        this.updateCanvas(data)
    }

    render() {
        const {urls, match: {params: {imageName}}} = this.props;
        console.log(urls)
        console.log(this.state.image)
        return (
            <div style={styles.container}>
                <button onClick={() => this.grayscaleImageData()}>GrayScale</button>
                <canvas ref="canvas"/>
            </div>
        );
    }
}
export default Editor;
