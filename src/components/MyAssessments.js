import { useState } from "react";
import AsessmentForm from "./form";

const MyAssessments = ({isMobileView}) => {
    const[open,setOpen]=useState(false)
    return (
        <div>
            <div className={isMobileView?"my-assessment-content-mobile":"my-assessment-content"}>
                <div className="overview-text" style={{fontSize:isMobileView?"16px":""}}>
                    My Assessment
                </div>
            </div>
            <div className={isMobileView?"my-assessment-content-box-mobile":"my-assessment-content-box"}>
                <div className={isMobileView?"my-assessment-content-box-1-mobile":"my-assessment-content-box-1"}>
                    <div className="new-asessment">
                        <div className="add-icon" onClick={()=>setOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none" >
                                <g clip-path="url(#clip0_0_553)">
                                    <path d="M31.6667 22.1667H21.6667V32.1667H18.3334V22.1667H8.33337V18.8333H18.3334V8.83334H21.6667V18.8333H31.6667V22.1667Z" fill="#0073E6" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_553">
                                        <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="new-asessment-text" style={{fontSize:isMobileView?"14px":""}}>New Assessment</div>
                    </div>
                    <div className="description">
                        From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
                    </div>
                </div>
                <div className="box-2" style={{minWidth:isMobileView?"95%":"",padding:isMobileView?"14px":"",gap:isMobileView?"10px":""}}>
                    <div className="math-asessment">
                        <div className="math-asessment-box" style={{flexDirection:isMobileView?"row":""}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="12" fill="#EBE8FD" />
                                <path d="M33.1677 18.4956H29.0796C28.8592 16.4981 27.6597 15 26.142 15H22.9106C22.0783 15 21.295 15.4494 20.7319 16.2984C20.3158 16.8976 20.0465 17.6717 19.9731 18.4956H15.8849C14.8568 18.4956 14 19.3695 14 20.4682V33.0275C14 34.1011 14.8323 35 15.8849 35H33.1677C34.1958 35 35.0526 34.1261 35.0526 33.0275V20.4682C35.0526 19.3695 34.2203 18.4956 33.1677 18.4956ZM26.1175 24.2385H22.9351C22.2007 24.2385 21.5887 24.8876 21.5887 25.6866V26.4107C17.4272 25.437 15.5177 24.563 15.224 24.1635V20.6679C15.224 20.2934 15.5667 19.9938 15.9829 19.9938H33.0698C33.4859 19.9938 33.8286 20.2934 33.8286 20.6679V24.1386C33.5349 24.5381 31.6255 25.412 27.4639 26.4107V25.6866C27.4639 24.8876 26.8519 24.2385 26.1175 24.2385ZM21.7356 17.2472C21.9315 16.9725 22.3476 16.4981 22.9106 16.4981H26.142C26.9743 16.4981 27.6842 17.4719 27.8556 18.7453H21.1971C21.2705 18.171 21.4663 17.6467 21.7356 17.2472ZM33.1922 33.7266H15.8605C15.5177 33.7266 15.224 33.427 15.224 33.0774V25.6117C16.2766 26.161 18.186 26.8352 21.6867 27.6092C21.907 29.0574 23.1065 30.1561 24.5753 30.1561C26.0196 30.1561 27.2191 29.0574 27.4149 27.6092C30.9155 26.8352 32.825 26.161 33.8531 25.6117V33.0774C33.8286 33.427 33.5349 33.7266 33.1922 33.7266Z" fill="#6548EE" />
                            </svg>
                            <div className="box">
                                <div className="math-asessment-text" style={{fontSize:isMobileView?"14px":""}}>
                                    Math Assessment
                                </div>
                                <div className="job-box">
                                    <div className="job-text" style={{fontSize:isMobileView?"12px":""}}>
                                        Job
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                                        <path d="M1 0V16" stroke="#DADCE0" />
                                    </svg>
                                    <div className="date-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <g clip-path="url(#clip0_0_568)">
                                                <path d="M11.6667 1.75001H11.0834V0.583344H9.91669V1.75001H4.08335V0.583344H2.91669V1.75001H2.33335C1.69169 1.75001 1.16669 2.27501 1.16669 2.91668V12.25C1.16669 12.8917 1.69169 13.4167 2.33335 13.4167H11.6667C12.3084 13.4167 12.8334 12.8917 12.8334 12.25V2.91668C12.8334 2.27501 12.3084 1.75001 11.6667 1.75001ZM11.6667 12.25H2.33335V4.66668H11.6667V12.25Z" fill="#1C4980" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 7.00001C3.50002 6.67784 3.76119 6.41668 4.08335 6.41668H5.83335C6.15552 6.41668 6.41669 6.67784 6.41669 7.00001C6.41669 7.32218 6.15552 7.58334 5.83335 7.58334H4.08335C3.76119 7.58334 3.50002 7.32218 3.50002 7.00001ZM7.58335 7.00001C7.58335 6.67784 7.84452 6.41668 8.16669 6.41668H9.91669C10.2389 6.41668 10.5 6.67784 10.5 7.00001C10.5 7.32218 10.2389 7.58334 9.91669 7.58334H8.16669C7.84452 7.58334 7.58335 7.32218 7.58335 7.00001ZM3.50002 9.33334C3.50002 9.01118 3.76119 8.75001 4.08335 8.75001H5.83335C6.15552 8.75001 6.41669 9.01118 6.41669 9.33334C6.41669 9.65551 6.15552 9.91668 5.83335 9.91668H4.08335C3.76119 9.91668 3.50002 9.65551 3.50002 9.33334ZM7.58335 9.33334C7.58335 9.01118 7.84452 8.75001 8.16669 8.75001H9.91669C10.2389 8.75001 10.5 9.01118 10.5 9.33334C10.5 9.65551 10.2389 9.91668 9.91669 9.91668H8.16669C7.84452 9.91668 7.58335 9.65551 7.58335 9.33334Z" fill="#1C4980" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_568">
                                                    <rect width="14" height="14" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="date-text" style={{fontSize:isMobileView?"12px":""}}>
                                            20 Apr 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three-dot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.4167 6.66667C11.5673 6.66667 12.5 5.73393 12.5 4.58333C12.5 3.43274 11.5673 2.5 10.4167 2.5C9.26607 2.5 8.33333 3.43274 8.33333 4.58333C8.33333 5.73393 9.26607 6.66667 10.4167 6.66667Z" fill="#1C4980" />
                                <path d="M10.4167 12.5C11.5673 12.5 12.5 11.5673 12.5 10.4167C12.5 9.26607 11.5673 8.33333 10.4167 8.33333C9.26607 8.33333 8.33333 9.26607 8.33333 10.4167C8.33333 11.5673 9.26607 12.5 10.4167 12.5Z" fill="#1C4980" />
                                <path d="M10.4167 18.3333C11.5673 18.3333 12.5 17.4006 12.5 16.25C12.5 15.0994 11.5673 14.1667 10.4167 14.1667C9.26607 14.1667 8.33333 15.0994 8.33333 16.25C8.33333 17.4006 9.26607 18.3333 10.4167 18.3333Z" fill="#1C4980" />
                            </svg>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="356" height="2" viewBox="0 0 356 2" fill="none">
                        <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                    </svg>
                    <div className="below-box">
                        <div className="below-box-1" style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Duration</div>
                            </div>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Questions</div>
                            </div>
                        </div>
                        <div className="below-box-2" style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-2-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_583)">
                                        <path d="M10.0003 4.10614L7.64331 6.46316L8.82182 7.64168L11.1788 5.28465C12.1511 4.31238 13.7421 4.31238 14.7144 5.28465C15.6867 6.25692 15.6867 7.84792 14.7144 8.82019L12.3574 11.1772L13.5359 12.3557L15.8929 9.9987C17.5192 8.37235 17.5192 5.73249 15.8929 4.10614C14.2665 2.4798 11.6267 2.4798 10.0003 4.10614ZM11.1788 12.3557L8.82182 14.7127C7.84955 15.685 6.25856 15.685 5.28629 14.7127C4.31402 13.7405 4.31402 12.1495 5.28629 11.1772L7.64331 8.82019L6.4648 7.64168L4.10778 9.9987C2.48143 11.625 2.48143 14.2649 4.10778 15.8913C5.73412 17.5176 8.37399 17.5176 10.0003 15.8913L12.3574 13.5342L11.1788 12.3557ZM7.05406 11.7665L11.7681 7.05242L12.9466 8.23093L8.23257 12.945L7.05406 11.7665Z" fill="#1C4980" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_583">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="share-text" style={{fontSize:isMobileView?"12px":""}}>
                                    Share
                                </div>
                            </div>
                            <div className="name">
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="box-2" style={{minWidth:isMobileView?"95%":"",padding:isMobileView?"14px":"",gap:isMobileView?"10px":""}}>
                    <div className="math-asessment">
                        <div className="math-asessment-box" style={{flexDirection:isMobileView?"row":""}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="12" fill="#EBE8FD" />
                                <path d="M33.1677 18.4956H29.0796C28.8592 16.4981 27.6597 15 26.142 15H22.9106C22.0783 15 21.295 15.4494 20.7319 16.2984C20.3158 16.8976 20.0465 17.6717 19.9731 18.4956H15.8849C14.8568 18.4956 14 19.3695 14 20.4682V33.0275C14 34.1011 14.8323 35 15.8849 35H33.1677C34.1958 35 35.0526 34.1261 35.0526 33.0275V20.4682C35.0526 19.3695 34.2203 18.4956 33.1677 18.4956ZM26.1175 24.2385H22.9351C22.2007 24.2385 21.5887 24.8876 21.5887 25.6866V26.4107C17.4272 25.437 15.5177 24.563 15.224 24.1635V20.6679C15.224 20.2934 15.5667 19.9938 15.9829 19.9938H33.0698C33.4859 19.9938 33.8286 20.2934 33.8286 20.6679V24.1386C33.5349 24.5381 31.6255 25.412 27.4639 26.4107V25.6866C27.4639 24.8876 26.8519 24.2385 26.1175 24.2385ZM21.7356 17.2472C21.9315 16.9725 22.3476 16.4981 22.9106 16.4981H26.142C26.9743 16.4981 27.6842 17.4719 27.8556 18.7453H21.1971C21.2705 18.171 21.4663 17.6467 21.7356 17.2472ZM33.1922 33.7266H15.8605C15.5177 33.7266 15.224 33.427 15.224 33.0774V25.6117C16.2766 26.161 18.186 26.8352 21.6867 27.6092C21.907 29.0574 23.1065 30.1561 24.5753 30.1561C26.0196 30.1561 27.2191 29.0574 27.4149 27.6092C30.9155 26.8352 32.825 26.161 33.8531 25.6117V33.0774C33.8286 33.427 33.5349 33.7266 33.1922 33.7266Z" fill="#6548EE" />
                            </svg>
                            <div className="box">
                                <div className="math-asessment-text" style={{fontSize:isMobileView?"14px":""}}>
                                    Math Assessment
                                </div>
                                <div className="job-box">
                                    <div className="job-text" style={{fontSize:isMobileView?"12px":""}}>
                                        Job
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                                        <path d="M1 0V16" stroke="#DADCE0" />
                                    </svg>
                                    <div className="date-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <g clip-path="url(#clip0_0_568)">
                                                <path d="M11.6667 1.75001H11.0834V0.583344H9.91669V1.75001H4.08335V0.583344H2.91669V1.75001H2.33335C1.69169 1.75001 1.16669 2.27501 1.16669 2.91668V12.25C1.16669 12.8917 1.69169 13.4167 2.33335 13.4167H11.6667C12.3084 13.4167 12.8334 12.8917 12.8334 12.25V2.91668C12.8334 2.27501 12.3084 1.75001 11.6667 1.75001ZM11.6667 12.25H2.33335V4.66668H11.6667V12.25Z" fill="#1C4980" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 7.00001C3.50002 6.67784 3.76119 6.41668 4.08335 6.41668H5.83335C6.15552 6.41668 6.41669 6.67784 6.41669 7.00001C6.41669 7.32218 6.15552 7.58334 5.83335 7.58334H4.08335C3.76119 7.58334 3.50002 7.32218 3.50002 7.00001ZM7.58335 7.00001C7.58335 6.67784 7.84452 6.41668 8.16669 6.41668H9.91669C10.2389 6.41668 10.5 6.67784 10.5 7.00001C10.5 7.32218 10.2389 7.58334 9.91669 7.58334H8.16669C7.84452 7.58334 7.58335 7.32218 7.58335 7.00001ZM3.50002 9.33334C3.50002 9.01118 3.76119 8.75001 4.08335 8.75001H5.83335C6.15552 8.75001 6.41669 9.01118 6.41669 9.33334C6.41669 9.65551 6.15552 9.91668 5.83335 9.91668H4.08335C3.76119 9.91668 3.50002 9.65551 3.50002 9.33334ZM7.58335 9.33334C7.58335 9.01118 7.84452 8.75001 8.16669 8.75001H9.91669C10.2389 8.75001 10.5 9.01118 10.5 9.33334C10.5 9.65551 10.2389 9.91668 9.91669 9.91668H8.16669C7.84452 9.91668 7.58335 9.65551 7.58335 9.33334Z" fill="#1C4980" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_568">
                                                    <rect width="14" height="14" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="date-text" style={{fontSize:isMobileView?"12px":""}}>
                                            20 Apr 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three-dot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.4167 6.66667C11.5673 6.66667 12.5 5.73393 12.5 4.58333C12.5 3.43274 11.5673 2.5 10.4167 2.5C9.26607 2.5 8.33333 3.43274 8.33333 4.58333C8.33333 5.73393 9.26607 6.66667 10.4167 6.66667Z" fill="#1C4980" />
                                <path d="M10.4167 12.5C11.5673 12.5 12.5 11.5673 12.5 10.4167C12.5 9.26607 11.5673 8.33333 10.4167 8.33333C9.26607 8.33333 8.33333 9.26607 8.33333 10.4167C8.33333 11.5673 9.26607 12.5 10.4167 12.5Z" fill="#1C4980" />
                                <path d="M10.4167 18.3333C11.5673 18.3333 12.5 17.4006 12.5 16.25C12.5 15.0994 11.5673 14.1667 10.4167 14.1667C9.26607 14.1667 8.33333 15.0994 8.33333 16.25C8.33333 17.4006 9.26607 18.3333 10.4167 18.3333Z" fill="#1C4980" />
                            </svg>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="356" height="2" viewBox="0 0 356 2" fill="none">
                        <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                    </svg>
                    <div className="below-box">
                        <div className="below-box-1">
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Duration</div>
                            </div>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Questions</div>
                            </div>
                        </div>
                        <div className="below-box-2">
                            <div className="below-box-2-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_583)">
                                        <path d="M10.0003 4.10614L7.64331 6.46316L8.82182 7.64168L11.1788 5.28465C12.1511 4.31238 13.7421 4.31238 14.7144 5.28465C15.6867 6.25692 15.6867 7.84792 14.7144 8.82019L12.3574 11.1772L13.5359 12.3557L15.8929 9.9987C17.5192 8.37235 17.5192 5.73249 15.8929 4.10614C14.2665 2.4798 11.6267 2.4798 10.0003 4.10614ZM11.1788 12.3557L8.82182 14.7127C7.84955 15.685 6.25856 15.685 5.28629 14.7127C4.31402 13.7405 4.31402 12.1495 5.28629 11.1772L7.64331 8.82019L6.4648 7.64168L4.10778 9.9987C2.48143 11.625 2.48143 14.2649 4.10778 15.8913C5.73412 17.5176 8.37399 17.5176 10.0003 15.8913L12.3574 13.5342L11.1788 12.3557ZM7.05406 11.7665L11.7681 7.05242L12.9466 8.23093L8.23257 12.945L7.05406 11.7665Z" fill="#1C4980" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_583">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="share-text" style={{fontSize:isMobileView?"12px":""}}>
                                    Share
                                </div>
                            </div>
                           <div style={{gap:'0',display:'flex',position:'relative !important'}}>
                           <div className="name" style={{zIndex:'1'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            <div className="name" style={{backgroundColor:'var(--pastel-royal-blue, #3079E1)',position:'absolute !important',marginLeft:'-25%',zIndex:'2'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            <div className="name" style={{backgroundColor:'var(--accent-pink, #E9407A)',position:'absolute',zIndex:'3',marginLeft:'3.4%'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                           </div>
                           <div className="name-text">
                            +324
                           </div>
                        </div>

                    </div>
                </div>
                {isMobileView && 
                <>
                <div className="box-2" style={{minWidth:isMobileView?"95%":"",padding:isMobileView?"14px":"",gap:isMobileView?"10px":""}}>
                    <div className="math-asessment">
                        <div className="math-asessment-box" style={{flexDirection:isMobileView?"row":""}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="12" fill="#EBE8FD" />
                                <path d="M33.1677 18.4956H29.0796C28.8592 16.4981 27.6597 15 26.142 15H22.9106C22.0783 15 21.295 15.4494 20.7319 16.2984C20.3158 16.8976 20.0465 17.6717 19.9731 18.4956H15.8849C14.8568 18.4956 14 19.3695 14 20.4682V33.0275C14 34.1011 14.8323 35 15.8849 35H33.1677C34.1958 35 35.0526 34.1261 35.0526 33.0275V20.4682C35.0526 19.3695 34.2203 18.4956 33.1677 18.4956ZM26.1175 24.2385H22.9351C22.2007 24.2385 21.5887 24.8876 21.5887 25.6866V26.4107C17.4272 25.437 15.5177 24.563 15.224 24.1635V20.6679C15.224 20.2934 15.5667 19.9938 15.9829 19.9938H33.0698C33.4859 19.9938 33.8286 20.2934 33.8286 20.6679V24.1386C33.5349 24.5381 31.6255 25.412 27.4639 26.4107V25.6866C27.4639 24.8876 26.8519 24.2385 26.1175 24.2385ZM21.7356 17.2472C21.9315 16.9725 22.3476 16.4981 22.9106 16.4981H26.142C26.9743 16.4981 27.6842 17.4719 27.8556 18.7453H21.1971C21.2705 18.171 21.4663 17.6467 21.7356 17.2472ZM33.1922 33.7266H15.8605C15.5177 33.7266 15.224 33.427 15.224 33.0774V25.6117C16.2766 26.161 18.186 26.8352 21.6867 27.6092C21.907 29.0574 23.1065 30.1561 24.5753 30.1561C26.0196 30.1561 27.2191 29.0574 27.4149 27.6092C30.9155 26.8352 32.825 26.161 33.8531 25.6117V33.0774C33.8286 33.427 33.5349 33.7266 33.1922 33.7266Z" fill="#6548EE" />
                            </svg>
                            <div className="box">
                                <div className="math-asessment-text" style={{fontSize:isMobileView?"14px":""}}>
                                    Math Assessment
                                </div>
                                <div className="job-box">
                                    <div className="job-text" style={{fontSize:isMobileView?"12px":""}}>
                                        Job
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                                        <path d="M1 0V16" stroke="#DADCE0" />
                                    </svg>
                                    <div className="date-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <g clip-path="url(#clip0_0_568)">
                                                <path d="M11.6667 1.75001H11.0834V0.583344H9.91669V1.75001H4.08335V0.583344H2.91669V1.75001H2.33335C1.69169 1.75001 1.16669 2.27501 1.16669 2.91668V12.25C1.16669 12.8917 1.69169 13.4167 2.33335 13.4167H11.6667C12.3084 13.4167 12.8334 12.8917 12.8334 12.25V2.91668C12.8334 2.27501 12.3084 1.75001 11.6667 1.75001ZM11.6667 12.25H2.33335V4.66668H11.6667V12.25Z" fill="#1C4980" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 7.00001C3.50002 6.67784 3.76119 6.41668 4.08335 6.41668H5.83335C6.15552 6.41668 6.41669 6.67784 6.41669 7.00001C6.41669 7.32218 6.15552 7.58334 5.83335 7.58334H4.08335C3.76119 7.58334 3.50002 7.32218 3.50002 7.00001ZM7.58335 7.00001C7.58335 6.67784 7.84452 6.41668 8.16669 6.41668H9.91669C10.2389 6.41668 10.5 6.67784 10.5 7.00001C10.5 7.32218 10.2389 7.58334 9.91669 7.58334H8.16669C7.84452 7.58334 7.58335 7.32218 7.58335 7.00001ZM3.50002 9.33334C3.50002 9.01118 3.76119 8.75001 4.08335 8.75001H5.83335C6.15552 8.75001 6.41669 9.01118 6.41669 9.33334C6.41669 9.65551 6.15552 9.91668 5.83335 9.91668H4.08335C3.76119 9.91668 3.50002 9.65551 3.50002 9.33334ZM7.58335 9.33334C7.58335 9.01118 7.84452 8.75001 8.16669 8.75001H9.91669C10.2389 8.75001 10.5 9.01118 10.5 9.33334C10.5 9.65551 10.2389 9.91668 9.91669 9.91668H8.16669C7.84452 9.91668 7.58335 9.65551 7.58335 9.33334Z" fill="#1C4980" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_568">
                                                    <rect width="14" height="14" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="date-text" style={{fontSize:isMobileView?"12px":""}}>
                                            20 Apr 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three-dot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.4167 6.66667C11.5673 6.66667 12.5 5.73393 12.5 4.58333C12.5 3.43274 11.5673 2.5 10.4167 2.5C9.26607 2.5 8.33333 3.43274 8.33333 4.58333C8.33333 5.73393 9.26607 6.66667 10.4167 6.66667Z" fill="#1C4980" />
                                <path d="M10.4167 12.5C11.5673 12.5 12.5 11.5673 12.5 10.4167C12.5 9.26607 11.5673 8.33333 10.4167 8.33333C9.26607 8.33333 8.33333 9.26607 8.33333 10.4167C8.33333 11.5673 9.26607 12.5 10.4167 12.5Z" fill="#1C4980" />
                                <path d="M10.4167 18.3333C11.5673 18.3333 12.5 17.4006 12.5 16.25C12.5 15.0994 11.5673 14.1667 10.4167 14.1667C9.26607 14.1667 8.33333 15.0994 8.33333 16.25C8.33333 17.4006 9.26607 18.3333 10.4167 18.3333Z" fill="#1C4980" />
                            </svg>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="356" height="2" viewBox="0 0 356 2" fill="none">
                        <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                    </svg>
                    <div className="below-box">
                        <div className="below-box-1" style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Duration</div>
                            </div>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Questions</div>
                            </div>
                        </div>
                        <div className="below-box-2"  style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-2-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_583)">
                                        <path d="M10.0003 4.10614L7.64331 6.46316L8.82182 7.64168L11.1788 5.28465C12.1511 4.31238 13.7421 4.31238 14.7144 5.28465C15.6867 6.25692 15.6867 7.84792 14.7144 8.82019L12.3574 11.1772L13.5359 12.3557L15.8929 9.9987C17.5192 8.37235 17.5192 5.73249 15.8929 4.10614C14.2665 2.4798 11.6267 2.4798 10.0003 4.10614ZM11.1788 12.3557L8.82182 14.7127C7.84955 15.685 6.25856 15.685 5.28629 14.7127C4.31402 13.7405 4.31402 12.1495 5.28629 11.1772L7.64331 8.82019L6.4648 7.64168L4.10778 9.9987C2.48143 11.625 2.48143 14.2649 4.10778 15.8913C5.73412 17.5176 8.37399 17.5176 10.0003 15.8913L12.3574 13.5342L11.1788 12.3557ZM7.05406 11.7665L11.7681 7.05242L12.9466 8.23093L8.23257 12.945L7.05406 11.7665Z" fill="#1C4980" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_583">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="share-text" style={{fontSize:isMobileView?"12px":""}}>
                                    Share
                                </div>
                            </div>
                           <div style={{gap:'0',display:'flex',position:'relative !important'}}>
                           <div className="name" style={{zIndex:'1'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            <div className="name" style={{backgroundColor:'var(--pastel-royal-blue, #3079E1)',position:'absolute !important',marginLeft:'-25%',zIndex:'2'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            <div className="name" style={{backgroundColor:'var(--accent-pink, #E9407A)',position:'absolute',zIndex:'3',marginLeft:'3.4%'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                           </div>
                           <div className="name-text">
                            +324
                           </div>
                        </div>

                    </div>
                </div>
                <div className="box-2" style={{minWidth:isMobileView?"95%":"",padding:isMobileView?"14px":"",gap:isMobileView?"10px":""}}>
                    <div className="math-asessment">
                        <div className="math-asessment-box" style={{flexDirection:isMobileView?"row":""}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="12" fill="#EBE8FD" />
                                <path d="M33.1677 18.4956H29.0796C28.8592 16.4981 27.6597 15 26.142 15H22.9106C22.0783 15 21.295 15.4494 20.7319 16.2984C20.3158 16.8976 20.0465 17.6717 19.9731 18.4956H15.8849C14.8568 18.4956 14 19.3695 14 20.4682V33.0275C14 34.1011 14.8323 35 15.8849 35H33.1677C34.1958 35 35.0526 34.1261 35.0526 33.0275V20.4682C35.0526 19.3695 34.2203 18.4956 33.1677 18.4956ZM26.1175 24.2385H22.9351C22.2007 24.2385 21.5887 24.8876 21.5887 25.6866V26.4107C17.4272 25.437 15.5177 24.563 15.224 24.1635V20.6679C15.224 20.2934 15.5667 19.9938 15.9829 19.9938H33.0698C33.4859 19.9938 33.8286 20.2934 33.8286 20.6679V24.1386C33.5349 24.5381 31.6255 25.412 27.4639 26.4107V25.6866C27.4639 24.8876 26.8519 24.2385 26.1175 24.2385ZM21.7356 17.2472C21.9315 16.9725 22.3476 16.4981 22.9106 16.4981H26.142C26.9743 16.4981 27.6842 17.4719 27.8556 18.7453H21.1971C21.2705 18.171 21.4663 17.6467 21.7356 17.2472ZM33.1922 33.7266H15.8605C15.5177 33.7266 15.224 33.427 15.224 33.0774V25.6117C16.2766 26.161 18.186 26.8352 21.6867 27.6092C21.907 29.0574 23.1065 30.1561 24.5753 30.1561C26.0196 30.1561 27.2191 29.0574 27.4149 27.6092C30.9155 26.8352 32.825 26.161 33.8531 25.6117V33.0774C33.8286 33.427 33.5349 33.7266 33.1922 33.7266Z" fill="#6548EE" />
                            </svg>
                            <div className="box">
                                <div className="math-asessment-text" style={{fontSize:isMobileView?"14px":""}}>
                                    Math Assessment
                                </div>
                                <div className="job-box">
                                    <div className="job-text" style={{fontSize:isMobileView?"12px":""}}>
                                        Job
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                                        <path d="M1 0V16" stroke="#DADCE0" />
                                    </svg>
                                    <div className="date-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <g clip-path="url(#clip0_0_568)">
                                                <path d="M11.6667 1.75001H11.0834V0.583344H9.91669V1.75001H4.08335V0.583344H2.91669V1.75001H2.33335C1.69169 1.75001 1.16669 2.27501 1.16669 2.91668V12.25C1.16669 12.8917 1.69169 13.4167 2.33335 13.4167H11.6667C12.3084 13.4167 12.8334 12.8917 12.8334 12.25V2.91668C12.8334 2.27501 12.3084 1.75001 11.6667 1.75001ZM11.6667 12.25H2.33335V4.66668H11.6667V12.25Z" fill="#1C4980" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 7.00001C3.50002 6.67784 3.76119 6.41668 4.08335 6.41668H5.83335C6.15552 6.41668 6.41669 6.67784 6.41669 7.00001C6.41669 7.32218 6.15552 7.58334 5.83335 7.58334H4.08335C3.76119 7.58334 3.50002 7.32218 3.50002 7.00001ZM7.58335 7.00001C7.58335 6.67784 7.84452 6.41668 8.16669 6.41668H9.91669C10.2389 6.41668 10.5 6.67784 10.5 7.00001C10.5 7.32218 10.2389 7.58334 9.91669 7.58334H8.16669C7.84452 7.58334 7.58335 7.32218 7.58335 7.00001ZM3.50002 9.33334C3.50002 9.01118 3.76119 8.75001 4.08335 8.75001H5.83335C6.15552 8.75001 6.41669 9.01118 6.41669 9.33334C6.41669 9.65551 6.15552 9.91668 5.83335 9.91668H4.08335C3.76119 9.91668 3.50002 9.65551 3.50002 9.33334ZM7.58335 9.33334C7.58335 9.01118 7.84452 8.75001 8.16669 8.75001H9.91669C10.2389 8.75001 10.5 9.01118 10.5 9.33334C10.5 9.65551 10.2389 9.91668 9.91669 9.91668H8.16669C7.84452 9.91668 7.58335 9.65551 7.58335 9.33334Z" fill="#1C4980" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_568">
                                                    <rect width="14" height="14" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="date-text" style={{fontSize:isMobileView?"12px":""}}>
                                            20 Apr 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three-dot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.4167 6.66667C11.5673 6.66667 12.5 5.73393 12.5 4.58333C12.5 3.43274 11.5673 2.5 10.4167 2.5C9.26607 2.5 8.33333 3.43274 8.33333 4.58333C8.33333 5.73393 9.26607 6.66667 10.4167 6.66667Z" fill="#1C4980" />
                                <path d="M10.4167 12.5C11.5673 12.5 12.5 11.5673 12.5 10.4167C12.5 9.26607 11.5673 8.33333 10.4167 8.33333C9.26607 8.33333 8.33333 9.26607 8.33333 10.4167C8.33333 11.5673 9.26607 12.5 10.4167 12.5Z" fill="#1C4980" />
                                <path d="M10.4167 18.3333C11.5673 18.3333 12.5 17.4006 12.5 16.25C12.5 15.0994 11.5673 14.1667 10.4167 14.1667C9.26607 14.1667 8.33333 15.0994 8.33333 16.25C8.33333 17.4006 9.26607 18.3333 10.4167 18.3333Z" fill="#1C4980" />
                            </svg>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="356" height="2" viewBox="0 0 356 2" fill="none">
                        <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                    </svg>
                    <div className="below-box">
                        <div className="below-box-1" style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Duration</div>
                            </div>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Questions</div>
                            </div>
                        </div>
                        <div className="below-box-2" style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-2-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_583)">
                                        <path d="M10.0003 4.10614L7.64331 6.46316L8.82182 7.64168L11.1788 5.28465C12.1511 4.31238 13.7421 4.31238 14.7144 5.28465C15.6867 6.25692 15.6867 7.84792 14.7144 8.82019L12.3574 11.1772L13.5359 12.3557L15.8929 9.9987C17.5192 8.37235 17.5192 5.73249 15.8929 4.10614C14.2665 2.4798 11.6267 2.4798 10.0003 4.10614ZM11.1788 12.3557L8.82182 14.7127C7.84955 15.685 6.25856 15.685 5.28629 14.7127C4.31402 13.7405 4.31402 12.1495 5.28629 11.1772L7.64331 8.82019L6.4648 7.64168L4.10778 9.9987C2.48143 11.625 2.48143 14.2649 4.10778 15.8913C5.73412 17.5176 8.37399 17.5176 10.0003 15.8913L12.3574 13.5342L11.1788 12.3557ZM7.05406 11.7665L11.7681 7.05242L12.9466 8.23093L8.23257 12.945L7.05406 11.7665Z" fill="#1C4980" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_583">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="share-text" style={{fontSize:isMobileView?"12px":""}}>
                                    Share
                                </div>
                            </div>
                           <div style={{gap:'0',display:'flex',position:'relative !important'}}>
                           <div className="name" style={{zIndex:'1'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            <div className="name" style={{backgroundColor:'var(--pastel-royal-blue, #3079E1)',position:'absolute !important',marginLeft:'-25%',zIndex:'2'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            <div className="name" style={{backgroundColor:'var(--accent-pink, #E9407A)',position:'absolute',zIndex:'3',marginLeft:'3.4%'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                           </div>
                           <div className="name-text">
                            +324
                           </div>
                        </div>

                    </div>
                </div>
                <div className="box-2" style={{minWidth:isMobileView?"95%":"",padding:isMobileView?"14px":"",gap:isMobileView?"10px":""}}>
                    <div className="math-asessment">
                        <div className="math-asessment-box" style={{flexDirection:isMobileView?"row":""}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="12" fill="#EBE8FD" />
                                <path d="M33.1677 18.4956H29.0796C28.8592 16.4981 27.6597 15 26.142 15H22.9106C22.0783 15 21.295 15.4494 20.7319 16.2984C20.3158 16.8976 20.0465 17.6717 19.9731 18.4956H15.8849C14.8568 18.4956 14 19.3695 14 20.4682V33.0275C14 34.1011 14.8323 35 15.8849 35H33.1677C34.1958 35 35.0526 34.1261 35.0526 33.0275V20.4682C35.0526 19.3695 34.2203 18.4956 33.1677 18.4956ZM26.1175 24.2385H22.9351C22.2007 24.2385 21.5887 24.8876 21.5887 25.6866V26.4107C17.4272 25.437 15.5177 24.563 15.224 24.1635V20.6679C15.224 20.2934 15.5667 19.9938 15.9829 19.9938H33.0698C33.4859 19.9938 33.8286 20.2934 33.8286 20.6679V24.1386C33.5349 24.5381 31.6255 25.412 27.4639 26.4107V25.6866C27.4639 24.8876 26.8519 24.2385 26.1175 24.2385ZM21.7356 17.2472C21.9315 16.9725 22.3476 16.4981 22.9106 16.4981H26.142C26.9743 16.4981 27.6842 17.4719 27.8556 18.7453H21.1971C21.2705 18.171 21.4663 17.6467 21.7356 17.2472ZM33.1922 33.7266H15.8605C15.5177 33.7266 15.224 33.427 15.224 33.0774V25.6117C16.2766 26.161 18.186 26.8352 21.6867 27.6092C21.907 29.0574 23.1065 30.1561 24.5753 30.1561C26.0196 30.1561 27.2191 29.0574 27.4149 27.6092C30.9155 26.8352 32.825 26.161 33.8531 25.6117V33.0774C33.8286 33.427 33.5349 33.7266 33.1922 33.7266Z" fill="#6548EE" />
                            </svg>
                            <div className="box">
                                <div className="math-asessment-text" style={{fontSize:isMobileView?"14px":""}}>
                                    Math Assessment
                                </div>
                                <div className="job-box">
                                    <div className="job-text" style={{fontSize:isMobileView?"12px":""}}>
                                        Job
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                                        <path d="M1 0V16" stroke="#DADCE0" />
                                    </svg>
                                    <div className="date-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <g clip-path="url(#clip0_0_568)">
                                                <path d="M11.6667 1.75001H11.0834V0.583344H9.91669V1.75001H4.08335V0.583344H2.91669V1.75001H2.33335C1.69169 1.75001 1.16669 2.27501 1.16669 2.91668V12.25C1.16669 12.8917 1.69169 13.4167 2.33335 13.4167H11.6667C12.3084 13.4167 12.8334 12.8917 12.8334 12.25V2.91668C12.8334 2.27501 12.3084 1.75001 11.6667 1.75001ZM11.6667 12.25H2.33335V4.66668H11.6667V12.25Z" fill="#1C4980" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 7.00001C3.50002 6.67784 3.76119 6.41668 4.08335 6.41668H5.83335C6.15552 6.41668 6.41669 6.67784 6.41669 7.00001C6.41669 7.32218 6.15552 7.58334 5.83335 7.58334H4.08335C3.76119 7.58334 3.50002 7.32218 3.50002 7.00001ZM7.58335 7.00001C7.58335 6.67784 7.84452 6.41668 8.16669 6.41668H9.91669C10.2389 6.41668 10.5 6.67784 10.5 7.00001C10.5 7.32218 10.2389 7.58334 9.91669 7.58334H8.16669C7.84452 7.58334 7.58335 7.32218 7.58335 7.00001ZM3.50002 9.33334C3.50002 9.01118 3.76119 8.75001 4.08335 8.75001H5.83335C6.15552 8.75001 6.41669 9.01118 6.41669 9.33334C6.41669 9.65551 6.15552 9.91668 5.83335 9.91668H4.08335C3.76119 9.91668 3.50002 9.65551 3.50002 9.33334ZM7.58335 9.33334C7.58335 9.01118 7.84452 8.75001 8.16669 8.75001H9.91669C10.2389 8.75001 10.5 9.01118 10.5 9.33334C10.5 9.65551 10.2389 9.91668 9.91669 9.91668H8.16669C7.84452 9.91668 7.58335 9.65551 7.58335 9.33334Z" fill="#1C4980" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_568">
                                                    <rect width="14" height="14" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="date-text" style={{fontSize:isMobileView?"12px":""}}>
                                            20 Apr 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three-dot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.4167 6.66667C11.5673 6.66667 12.5 5.73393 12.5 4.58333C12.5 3.43274 11.5673 2.5 10.4167 2.5C9.26607 2.5 8.33333 3.43274 8.33333 4.58333C8.33333 5.73393 9.26607 6.66667 10.4167 6.66667Z" fill="#1C4980" />
                                <path d="M10.4167 12.5C11.5673 12.5 12.5 11.5673 12.5 10.4167C12.5 9.26607 11.5673 8.33333 10.4167 8.33333C9.26607 8.33333 8.33333 9.26607 8.33333 10.4167C8.33333 11.5673 9.26607 12.5 10.4167 12.5Z" fill="#1C4980" />
                                <path d="M10.4167 18.3333C11.5673 18.3333 12.5 17.4006 12.5 16.25C12.5 15.0994 11.5673 14.1667 10.4167 14.1667C9.26607 14.1667 8.33333 15.0994 8.33333 16.25C8.33333 17.4006 9.26607 18.3333 10.4167 18.3333Z" fill="#1C4980" />
                            </svg>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="356" height="2" viewBox="0 0 356 2" fill="none">
                        <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                    </svg>
                    <div className="below-box">
                        <div className="below-box-1" style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Duration</div>
                            </div>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Questions</div>
                            </div>
                        </div>
                        <div className="below-box-2" style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-2-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_583)">
                                        <path d="M10.0003 4.10614L7.64331 6.46316L8.82182 7.64168L11.1788 5.28465C12.1511 4.31238 13.7421 4.31238 14.7144 5.28465C15.6867 6.25692 15.6867 7.84792 14.7144 8.82019L12.3574 11.1772L13.5359 12.3557L15.8929 9.9987C17.5192 8.37235 17.5192 5.73249 15.8929 4.10614C14.2665 2.4798 11.6267 2.4798 10.0003 4.10614ZM11.1788 12.3557L8.82182 14.7127C7.84955 15.685 6.25856 15.685 5.28629 14.7127C4.31402 13.7405 4.31402 12.1495 5.28629 11.1772L7.64331 8.82019L6.4648 7.64168L4.10778 9.9987C2.48143 11.625 2.48143 14.2649 4.10778 15.8913C5.73412 17.5176 8.37399 17.5176 10.0003 15.8913L12.3574 13.5342L11.1788 12.3557ZM7.05406 11.7665L11.7681 7.05242L12.9466 8.23093L8.23257 12.945L7.05406 11.7665Z" fill="#1C4980" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_583">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="share-text" style={{fontSize:isMobileView?"12px":""}}>
                                    Share
                                </div>
                            </div>
                           <div style={{gap:'0',display:'flex',position:'relative !important'}}>
                           <div className="name" style={{zIndex:'1'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            <div className="name" style={{backgroundColor:'var(--pastel-royal-blue, #3079E1)',position:'absolute !important',marginLeft:'-25%',zIndex:'2'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            <div className="name" style={{backgroundColor:'var(--accent-pink, #E9407A)',position:'absolute',zIndex:'3',marginLeft:'3.4%'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                           </div>
                           <div className="name-text">
                            +324
                           </div>
                        </div>

                    </div>
                </div>
                <div className="box-2" style={{minWidth:isMobileView?"95%":"",padding:isMobileView?"14px":"",gap:isMobileView?"10px":""}}>
                    <div className="math-asessment">
                        <div className="math-asessment-box" style={{flexDirection:isMobileView?"row":""}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <rect width="50" height="50" rx="12" fill="#EBE8FD" />
                                <path d="M33.1677 18.4956H29.0796C28.8592 16.4981 27.6597 15 26.142 15H22.9106C22.0783 15 21.295 15.4494 20.7319 16.2984C20.3158 16.8976 20.0465 17.6717 19.9731 18.4956H15.8849C14.8568 18.4956 14 19.3695 14 20.4682V33.0275C14 34.1011 14.8323 35 15.8849 35H33.1677C34.1958 35 35.0526 34.1261 35.0526 33.0275V20.4682C35.0526 19.3695 34.2203 18.4956 33.1677 18.4956ZM26.1175 24.2385H22.9351C22.2007 24.2385 21.5887 24.8876 21.5887 25.6866V26.4107C17.4272 25.437 15.5177 24.563 15.224 24.1635V20.6679C15.224 20.2934 15.5667 19.9938 15.9829 19.9938H33.0698C33.4859 19.9938 33.8286 20.2934 33.8286 20.6679V24.1386C33.5349 24.5381 31.6255 25.412 27.4639 26.4107V25.6866C27.4639 24.8876 26.8519 24.2385 26.1175 24.2385ZM21.7356 17.2472C21.9315 16.9725 22.3476 16.4981 22.9106 16.4981H26.142C26.9743 16.4981 27.6842 17.4719 27.8556 18.7453H21.1971C21.2705 18.171 21.4663 17.6467 21.7356 17.2472ZM33.1922 33.7266H15.8605C15.5177 33.7266 15.224 33.427 15.224 33.0774V25.6117C16.2766 26.161 18.186 26.8352 21.6867 27.6092C21.907 29.0574 23.1065 30.1561 24.5753 30.1561C26.0196 30.1561 27.2191 29.0574 27.4149 27.6092C30.9155 26.8352 32.825 26.161 33.8531 25.6117V33.0774C33.8286 33.427 33.5349 33.7266 33.1922 33.7266Z" fill="#6548EE" />
                            </svg>
                            <div className="box">
                                <div className="math-asessment-text" style={{fontSize:isMobileView?"14px":""}}>
                                    Math Assessment
                                </div>
                                <div className="job-box">
                                    <div className="job-text" style={{fontSize:isMobileView?"12px":""}}>
                                        Job
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
                                        <path d="M1 0V16" stroke="#DADCE0" />
                                    </svg>
                                    <div className="date-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <g clip-path="url(#clip0_0_568)">
                                                <path d="M11.6667 1.75001H11.0834V0.583344H9.91669V1.75001H4.08335V0.583344H2.91669V1.75001H2.33335C1.69169 1.75001 1.16669 2.27501 1.16669 2.91668V12.25C1.16669 12.8917 1.69169 13.4167 2.33335 13.4167H11.6667C12.3084 13.4167 12.8334 12.8917 12.8334 12.25V2.91668C12.8334 2.27501 12.3084 1.75001 11.6667 1.75001ZM11.6667 12.25H2.33335V4.66668H11.6667V12.25Z" fill="#1C4980" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 7.00001C3.50002 6.67784 3.76119 6.41668 4.08335 6.41668H5.83335C6.15552 6.41668 6.41669 6.67784 6.41669 7.00001C6.41669 7.32218 6.15552 7.58334 5.83335 7.58334H4.08335C3.76119 7.58334 3.50002 7.32218 3.50002 7.00001ZM7.58335 7.00001C7.58335 6.67784 7.84452 6.41668 8.16669 6.41668H9.91669C10.2389 6.41668 10.5 6.67784 10.5 7.00001C10.5 7.32218 10.2389 7.58334 9.91669 7.58334H8.16669C7.84452 7.58334 7.58335 7.32218 7.58335 7.00001ZM3.50002 9.33334C3.50002 9.01118 3.76119 8.75001 4.08335 8.75001H5.83335C6.15552 8.75001 6.41669 9.01118 6.41669 9.33334C6.41669 9.65551 6.15552 9.91668 5.83335 9.91668H4.08335C3.76119 9.91668 3.50002 9.65551 3.50002 9.33334ZM7.58335 9.33334C7.58335 9.01118 7.84452 8.75001 8.16669 8.75001H9.91669C10.2389 8.75001 10.5 9.01118 10.5 9.33334C10.5 9.65551 10.2389 9.91668 9.91669 9.91668H8.16669C7.84452 9.91668 7.58335 9.65551 7.58335 9.33334Z" fill="#1C4980" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_568">
                                                    <rect width="14" height="14" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="date-text" style={{fontSize:isMobileView?"12px":""}}>
                                            20 Apr 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three-dot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.4167 6.66667C11.5673 6.66667 12.5 5.73393 12.5 4.58333C12.5 3.43274 11.5673 2.5 10.4167 2.5C9.26607 2.5 8.33333 3.43274 8.33333 4.58333C8.33333 5.73393 9.26607 6.66667 10.4167 6.66667Z" fill="#1C4980" />
                                <path d="M10.4167 12.5C11.5673 12.5 12.5 11.5673 12.5 10.4167C12.5 9.26607 11.5673 8.33333 10.4167 8.33333C9.26607 8.33333 8.33333 9.26607 8.33333 10.4167C8.33333 11.5673 9.26607 12.5 10.4167 12.5Z" fill="#1C4980" />
                                <path d="M10.4167 18.3333C11.5673 18.3333 12.5 17.4006 12.5 16.25C12.5 15.0994 11.5673 14.1667 10.4167 14.1667C9.26607 14.1667 8.33333 15.0994 8.33333 16.25C8.33333 17.4006 9.26607 18.3333 10.4167 18.3333Z" fill="#1C4980" />
                            </svg>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="356" height="2" viewBox="0 0 356 2" fill="none">
                        <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                    </svg>
                    <div className="below-box">
                        <div className="below-box-1" style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Duration</div>
                            </div>
                            <div className="below-box-1-1">
                                <div className="oo-text" style={{fontSize:isMobileView?"12px":""}}>00</div>
                                <div className="duration-text" style={{fontSize:isMobileView?"10px":""}}>Questions</div>
                            </div>
                        </div>
                        <div className="below-box-2" style={{gap:isMobileView?'10px':""}}>
                            <div className="below-box-2-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_583)">
                                        <path d="M10.0003 4.10614L7.64331 6.46316L8.82182 7.64168L11.1788 5.28465C12.1511 4.31238 13.7421 4.31238 14.7144 5.28465C15.6867 6.25692 15.6867 7.84792 14.7144 8.82019L12.3574 11.1772L13.5359 12.3557L15.8929 9.9987C17.5192 8.37235 17.5192 5.73249 15.8929 4.10614C14.2665 2.4798 11.6267 2.4798 10.0003 4.10614ZM11.1788 12.3557L8.82182 14.7127C7.84955 15.685 6.25856 15.685 5.28629 14.7127C4.31402 13.7405 4.31402 12.1495 5.28629 11.1772L7.64331 8.82019L6.4648 7.64168L4.10778 9.9987C2.48143 11.625 2.48143 14.2649 4.10778 15.8913C5.73412 17.5176 8.37399 17.5176 10.0003 15.8913L12.3574 13.5342L11.1788 12.3557ZM7.05406 11.7665L11.7681 7.05242L12.9466 8.23093L8.23257 12.945L7.05406 11.7665Z" fill="#1C4980" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_583">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="share-text" style={{fontSize:isMobileView?"12px":""}}>
                                    Share
                                </div>
                            </div>
                           <div style={{gap:'0',display:'flex',position:'relative !important'}}>
                           <div className="name" style={{zIndex:'1'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            <div className="name" style={{backgroundColor:'var(--pastel-royal-blue, #3079E1)',position:'absolute !important',marginLeft:'-25%',zIndex:'2'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div>
                            {/* <div className="name" style={{backgroundColor:'var(--accent-pink, #E9407A)',position:'absolute',zIndex:'3',marginLeft:'3.4%'}}>
                                <div className="people-text">
                                    LP
                                </div>
                            </div> */}
                           </div>
                           <div className="name-text">
                            +324
                           </div>
                        </div>

                    </div>
                </div>
                </>
                }
            </div>
            {!isMobileView && <div className="below">
            </div>}
            <AsessmentForm open={open} setOpen={setOpen} isMobileView={isMobileView}/>
        </div>
    )
}

export default MyAssessments;