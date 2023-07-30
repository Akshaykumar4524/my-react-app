import { Autocomplete, Box, Button, Chip, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const AsessmentForm = ({ open,setOpen,isMobileView }) => {
    const[isOpen,setIsOpen]=useState(false);
    useEffect(()=>{
        setIsOpen(open)
    },[open])
    const skills = ["UI/UX and Design", "No of Question", "Web Development", "UI/UX and Design", "Web Development"]
    return (
        <>
            {isOpen &&
                <Box className={isMobileView?`form-container-mobile ${open ? "open" : ""}`:`form-container ${open ? "open" : ""}`}>
                    <div className="box-div">
                        <div className="box-div-text">Create new assessment</div>
                        <svg onClick={()=>setOpen(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z" fill="#323232" />
                        </svg>
                    </div>
                    <form className="form">
                        <div className="label-1">
                            <label className="form-label">Name of Asessment</label>
                            <FormControl style={{ width: isMobileView? '323px':'544px' }}>
                            <TextField className={isMobileView?"form-name-mobile":"form-name"} placeholder="Type here" />
                            </FormControl>
                        </div>
                        <div className="label-1">
                            <label className="form-label">Purpose of the test is</label>
                            <FormControl style={{ width: isMobileView? '323px':'544px' }}>
                                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    // label="Age"
                                    // onChange={handleChange}
                                    placeholder="Select"
                                    defaultValue={"Select"}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="label-1">
                            <label className="form-label">Descrption</label>
                            <FormControl style={{ width: isMobileView? '323px':'544px' }}>
                                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    // label="Age"
                                    // onChange={handleChange}
                                    placeholder="Select"
                                    defaultValue={"Select"}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="label-1">
                            <label className="form-label">Descrption</label>
                            <FormControl style={{ width: isMobileView? '323px':'544px', background: 'white' }}>
                                <div className="tags-div">
                                    {skills.map((option, index) => {
                                        return <div className="tags">
                                            <span className="tags-text">{option}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <g clip-path="url(#clip0_0_1698)">
                                                    <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#1C4980" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_0_1698">
                                                        <rect width="18" height="18" rx="9" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    })}
                                </div>
                                <Autocomplete
                                    multiple
                                    // id="tags-outlined"
                                    options={skills.map((option) => option)}
                                    // defaultValue={skills}
                                    freeSolo
                                    // renderTags={(value, getTagProps) =>
                                    //     value.map((option, index) => (
                                    //         <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    //     ))
                                    // }
                                    renderInput={(params) => (
                                        <TextField
                                            className= {isMobileView?"form-name-mobile":"form-name"}
                                            {...params}
                                            // variant="otlined"
                                            placeholder="Type Here"
                                        />
                                    )}
                                />
                            </FormControl>
                        </div>
                        <div className="label-1">
                            <label className="form-label">Duration of Asessment</label>
                            <TextField className={isMobileView?"form-name-mobile":"form-name"} placeholder="HH:MM:SS" />
                        </div>

                    </form>
                    <div className="button-div">
                            <Button onClick={()=>setOpen(false)} className="save" style={{backgroundColor:'var(--secondary-1, #0073E6)',color:'white'}}>Save</Button>
                        </div>
                </Box>
            }
        </>
    )
}
export default AsessmentForm;