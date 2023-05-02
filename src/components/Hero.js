
function Hero(props) {
    //console.log('props', props);
    //console.log('$$$$', props.settings?.image?.$.url);
    return (
        <div className="row">
            <div className="right-img col-xs-12 col-md-4 d-none  d-xl-block">
                <div style={{backgroundColor: "#106f9f", textAlign: "left", height:"446px",marginLeft:"-3px", marginTop:"25px"}}>
                    <div style={{color:"white", lineHeight:"220%"}}>
                        <div className="strong" style={{padding:"35px"}}>
                            <p style={{border: "2px solid white", textAlign: "center", width:"135px", padding:"5px", fontSize: "22px"}}><b>TOP NEWS</b></p></div>
                        <p style={{textAlign:"left", padding:"5px", fontSize:"30px", marginLeft:"30px", marginBottom:"100px"}}><b {...props.settings?.$?.headline}>{props.settings?.headline}</b></p>
                        <a href={props.settings?.url.href} className="strong a-color" style={{ fontSize: "15px", color: "white !important", marginLeft: "35px" }}>Read More...</a>
                    </div>
                </div>
            </div>

            <div className="left-img col-xs-12 col-md-8 d-none  d-xl-block img-fluid" style={{padding: "0", margin: "0 auto", backgroundColor: "#FFF",  borderRight: "solid 4px #FFF"}}><img src={props.settings?.image?.url} className="img-fluid" alt="" style={{marginTop:"25px"}} />
            </div>

            <div className="left-img col-xs-12 col-md-8 d-none d-md-block d-lg-none" style={{ padding: "0", margin: "0 auto", backgroundColor: "#FFF", borderRight: "solid 4px #FFF" }}>
                <img src={props.settings?.image?.url} className="img-fluid" alt="Bronx Mural" style={{ marginTop: "25px", width: "100%" }} {...props.settings?.image?.$.url}/>
            </div>
        </div>
    )
}

export default Hero;