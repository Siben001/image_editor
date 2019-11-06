import React, {Component} from 'react';
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";


class TransparencySlider extends Component {

    render() {
        const {value, onChange} = this.props;

        return (
            <div style={{display: 'flex', flexDirection: 'column', margin: '16px 0'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Typography color="textPrimary" variant={'body2'}>Transparency</Typography>
                    <Typography color="textPrimary" variant={'body2'}>{value}</Typography>
                </div>
                <Slider enterTouchDelay={200} value={value} onChange={onChange} aria-labelledby="continuous-slider"/>
            </div>
        );
    }
}

export default TransparencySlider;
