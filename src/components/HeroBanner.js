import "./css/HeroBanner.css";

function HeroBanner(props){
    let style = {}
    let theme = '';
    let button;
    let buttonStyle = 'btn-outline-dark';

    if(props.banner.image_style === "Full" || props.banner.layout === "Center"){
        if(props.banner.image){
            style = {
                backgroundImage: `url(${props.banner.image.url})`,
            }
        }
    }

    if(props.banner.theme === "Light"){
        style['color'] = "black";
    }
    else{
        style['color'] = "white";
        if(props.banner.image_style !== "Full")
            theme = 'bg-dark';
        buttonStyle = 'btn-outline-light';
    }

    if(props.banner.button.title !== ''){
        button = <button className={`btn ${buttonStyle}`} {...props.banner.button?.$?.title}>{props.banner.button?.title}</button>
    }

    let banner;
    if(props.banner.layout === "Center"){
        banner = 
        <div className="hero container-fluid" style={style}>
            <div className="row align-items-center h-100" {...props.banner.image?.$?.url}>
                <div className="col text-center">
                    <p className="display-3 fw-bold mb-2" {...props.banner?.$?.headline}>{props.banner.headline}</p>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead " {...props.banner?.$?.subtext}>{props.banner.subtext}</p>
                        {button}
                    </div>
                </div>
            </div>
        </div>
    }
    else if(props.banner.layout === "Text Left"){
        let img;
        if(props.banner.image_style === "Half")
            img = <img src={props.banner.image?.url} className="d-block img-fluid mx-auto" style={{maxHeight:"450px"}} {...props.banner.image?.$?.url} alt=""/>
        banner = 
        <div className="hero container-fluid" style={style}>
            <div className={`row align-items-center h-100 ${theme}`}>
                <div className="col-6 ps-5">
                    <p className="display-3 fw-bold mb-2" {...props.banner?.$?.headline}>{props.banner.headline}</p>
                    <p className="lead " {...props.banner?.$?.subtext}>{props.banner.subtext}</p>
                    {button}
                </div>
                <div className="col-6 pe-5">
                    {img}
                </div>
            </div>
        </div>
    }
    else if(props.banner.layout === "Text Right"){
        let img;
        if(props.banner.image_style === "Half")
            img = <img src={props.banner.image?.url} className="d-block img-fluid mx-auto" style={{maxHeight:"450px"}} {...props.banner.image?.$?.url} alt=""/>
        banner = 
        <div className="hero container-fluid" style={style}>
            <div className={`row align-items-center h-100 ${theme}`}>
                <div className="col-6  ps-5">
                    {img}
                </div>
                <div className="col-6 pe-5 text-end">
                    <p className="display-3 fw-bold mb-2" {...props.banner?.$?.headline}>{props.banner.headline}</p>
                    <p className="lead" {...props.banner?.$?.subtext}>{props.banner.subtext}</p>
                    {button}
                </div>
            </div>
        </div>
    }

    return(
        <div>
            {banner}
        </div>
        
    )
}

export default HeroBanner;