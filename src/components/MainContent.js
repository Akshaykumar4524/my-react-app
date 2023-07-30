import React, { useState } from 'react';
import AssessmentOverview from './AssessmentOverview';
import Assessmenttabs from './tabs';
import MyAssessments from './MyAssessments';

const MainContent = ({ isMobileView, changeState,mobileOpen,handleDrawerToggle }) => {
  return (
    <div style={{overflowX:'hidden'}} >
                  
      <div className='maincontent-header' style={{borderBottom:isMobileView?'none':''}}>
        <div className='maincontent-assessment'>
        {isMobileView && !mobileOpen && 
            <div className='svg-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={()=>handleDrawerToggle()}>
                <g clipPath="url(#clip0_0_956)">
                    <path d="M18.75 22.5H3.75V20H18.75V22.5ZM26.25 7.5V10H3.75V7.5H26.25ZM18.75 16.25H3.75V13.75H18.75V16.25Z" fill="#1C4980" />
                </g>
                <defs>
                    <clipPath id="clip0_0_956">
                        <rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0)" />
                    </clipPath>
                </defs>
            </svg>
            </div>

            }
          <div className='assessment-text'>Assessment</div>
          {!isMobileView && <svg xmlns="http://www.w3.org/2000/svg" width="2" height="46" viewBox="0 0 2 46" fill="none">
            <path d="M1 0V46" stroke="#DADCE0" />
          </svg>}
          <div className='subsection'>
            {!isMobileView && <div className='my-assessment' style={{ borderBottom: '3px solid var(--secondary-1, #0073E6)', padding: '24px' }}>
              <div>My Assessments</div>
            </div>}
            <div  style={{ marginLeft: isMobileView ? '100%' : '' }} onClick={() => changeState()}>
              {!isMobileView?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_0_451)">
                  <path d="M17 1H7.00001C5.90001 1 5.01001 1.85 5.01001 2.95V20.95C5.01001 22.05 5.90001 23 7.00001 23H17C18.1 23 19 22.05 19 20.95V2.95C19 1.85 18.1 1 17 1ZM17 19H7.00001V5H17V19Z" fill="#1C4980" />
                </g>
                <defs>
                  <clipPath id="clip0_0_451">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>:
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_0_959)">
                <path d="M16.6667 15C17.5833 15 18.325 14.25 18.325 13.3333L18.3333 4.16667C18.3333 3.25 17.5833 2.5 16.6667 2.5H3.33333C2.41667 2.5 1.66667 3.25 1.66667 4.16667V13.3333C1.66667 14.25 2.41667 15 3.33333 15H0C0 15.9167 0.75 16.6667 1.66667 16.6667H18.3333C19.25 16.6667 20 15.9167 20 15H16.6667ZM3.33333 4.16667H16.6667V13.3333H3.33333V4.16667ZM10 15.8333C9.54167 15.8333 9.16667 15.4583 9.16667 15C9.16667 14.5417 9.54167 14.1667 10 14.1667C10.4583 14.1667 10.8333 14.5417 10.8333 15C10.8333 15.4583 10.4583 15.8333 10 15.8333Z" fill="#1C4980" />
              </g>
              <defs>
                <clipPath id="clip0_0_959">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
              }
              
              
            </div>
          </div>
        </div>
      </div>
      {!isMobileView &&
      <div className='main-content'>
      {!isMobileView && <AssessmentOverview/>}
       {!isMobileView && <MyAssessments isMobileView={isMobileView}/>}
      </div>
      }
      {isMobileView && <Assessmenttabs/>}
      {isMobileView && <MyAssessments isMobileView={isMobileView}/>}
    </div>
  );
};

export default MainContent;
