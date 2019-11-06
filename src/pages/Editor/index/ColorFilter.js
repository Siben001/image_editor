import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


class ColorFilter extends Component {


    render() {
        const {value, onChange} = this.props;

        const RadioLabel = ({name}) =>
            <FormControlLabel label={<Typography color="textPrimary">{name}</Typography>}
                              value={name} control={<Radio color={"primary"}/>}/>;

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Typography color={"textPrimary"}>Color Filter</Typography>
                <RadioGroup aria-label="colorFilter" name="color" value={value} onChange={onChange}>
                    <RadioLabel name={"GrayScale"}/>
                    <RadioLabel name={"Red"}/>
                </RadioGroup>
            </div>
        );
    }
}

export default ColorFilter;
