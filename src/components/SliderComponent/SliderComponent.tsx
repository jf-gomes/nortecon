import { Slider } from "@mui/material"
import { useState } from "react"

export default function SliderComponent(){

    const [sliderValue, setSliderValue] = useState<any>(450)
    
    return (
        <>
            <p className="fw-bold fs-3 text-black text-center">R${sliderValue},00</p>
            <Slider
                defaultValue={70}
                min={450}
                max={100000}
                color="secondary"
                value={sliderValue}
                onChange={(v) => setSliderValue((v.target as HTMLButtonElement).value)}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
        </>
    )
}