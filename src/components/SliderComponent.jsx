import { Slider } from "@mui/material"
import { useState } from "react"
import { createTheme } from '@mui/material/styles';

export default function SliderComponent(){

    const [sliderValue, setSliderValue] = useState(450)
    
    return (
        <>
            <p className="fw-bold fs-3 text-black">R${sliderValue},00</p>
            <Slider
                defaultValue={70}
                min={450}
                max={100000}
                color="secondary"
                value={sliderValue}
                onChange={(v) => setSliderValue(v.target.value)}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
        </>
    )
}