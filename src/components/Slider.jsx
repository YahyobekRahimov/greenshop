import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '../components/Button'


function valuetext(value) {
    return `${value}`;
}


export default function RangeSlider() {
    const [value, setValue] = React.useState([0, 1000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={1000}
                    sx={{
                        color: 'green', 
                        '& .MuiSlider-thumb': {
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: '0px 0px 0px 8px rgba(0, 128, 0, 0.16)', 
                            },
                        },
                        '& .MuiSlider-track': {
                            backgroundColor: 'green', 
                        },
                        '& .MuiSlider-rail': {
                            backgroundColor: 'green', 
                        },
                    }}
                />
            </Box>
            <div className="flex ">
                <h1 className="mt-2 text-xl">Price: <span  className="text-green-700 ">${value[0]} - ${value[1]}</span></h1>
                <Button  classes=" absolute left-[30rem] hover:bg-primaryDark py-[0.5rem] px-[0.8rem] rounded bg-primary text-white">Filter</Button>
            </div>
        </div>
    );
}
