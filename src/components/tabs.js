const Assessmenttabs=()=>{
    return(
        <div style={{width:'100%',display:'flex'}}>
            <div className="tabs">
                <div className="tabs-head">
                My Assessments
                </div>
            </div>
            <div className="tabs" style={{borderBottom:'2px solid var(--system-background, #F6F8FA)'}}>
                <div className="tabs-head">
                Unstop Assessments
                </div>
            </div>
        </div>
    )
}

export default Assessmenttabs;