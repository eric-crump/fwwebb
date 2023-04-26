
function SectionHeading(props) {
    //console.log('preview', props.entry.$?.news_header);
    return (
        <div class="row">
            <div class="col-12 px-4 px-auto mt-2">
                <h1 class="category-page-header" {...props.entry.$?.news_header}>{props.entry?.news_header}</h1>	
            </div>
        </div>
    )
}

export default SectionHeading;