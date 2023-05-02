import { format, parseISO } from 'date-fns';

function News(props) {

    return (
        <div className="row">
            <div class="col-12 col-md-7">
                {
                    props.articles?.map((item) =>
                        <div class="row my-2">
                            <div class="col-sm-2 d-none d-md-block"><a href="/news/2023/vendoExpo_2023.php"> <img src={item.image?.url} alt="Vendor Expo2 023" class="img-thumbnail" {...item.image?.$.url}/></a> </div>
                            <article class="col-sm-10">
                                <time pubdate="pubdate" class="small85p bold mb-1" {...item.$.type}>{item.type + ' - ' + format(parseISO(item.date), 'MMMM dd, yyyy')}</time>
                                <h2 class="normal a-color"><a href={'/#/' + item._content_type_uid + '/' + item.uid} className="a-other" {...item.$.title}>{item.title}</a></h2>
                            </article>
                            <div class="col-12"><hr /></div>
                        </div>
                    )
                }
            </div>
            <aside class="col-12 col-md-5 center">
                <div class="gray-bkg py-3">
                    <p><h2 class="my-2">Media Inquiries</h2></p>
                    <p class="my-2 pb-2">Please send an email to<br />
                        <a href="mailto:media@fwwebb.com">media@fwwebb.com</a>
                    </p>
                </div>

                <div class="accordion-item left mt-3">

                    <h2 class="accordion-header" id="flush-heading22">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse22" aria-expanded="false"
                            aria-controls="flush-collapseOne">2022 Archive</button>
                    </h2>
                    <div id="flush-collapse22" class="accordion-collapse collapse" aria-labelledby="flush-heading22"
                        data-bs-parent="">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-12 pt-3">
                                    <div class="row my-2 mx-2">
                                        <div class="col-sm-2 d-none d-md-block"><a href="2022/martin-anderson.php">
                                            <img src="https://fwwebb.com/images/fwwebb/news/2022/Alliance_150x150.png" alt=""
                                                class="img-thumbnail" /></a> </div>
                                        <article class="col-sm-10">
                                            <time pubdate="pubdate" class="small85p bold mb-1">News Release -
                                                December 27, 2022</time>
                                            <h2 class="normal"><a href="2022/martin-anderson.php" className="a-other">F.W. Webb Company
                                                Welcomes New Director of Building Sciences</a></h2>
                                        </article>
                                        <div class="col-12">
                                            <hr />
                                        </div>
                                    </div>

                                    <div class="row my-2 mx-2">
                                        <div class="col-sm-2 d-none d-md-block"><a
                                            href="2022/ironstone-farm-retreat-center.php"> <img
                                                src="https://fwwebb.com/images/fwwebb/news/2022/farm-logo.jpg" alt=""
                                                class="img-thumbnail" /></a> </div>
                                        <article class="col-sm-10">
                                            <time pubdate="pubdate" class="small85p bold mb-1">News Release -
                                                December 27, 2022</time>
                                            <h2 class="normal"><a href="2022/ironstone-farm-retreat-center.php" className="a-other">F.W.
                                                Webb Donates All Plumbing Materials for New Equine-Assisted
                                                Therapeutic Center</a></h2>
                                        </article>
                                        <div class="col-12">
                                            <hr />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 class="accordion-header" id="flush-heading21">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false"
                            aria-controls="flush-collapseOne">2021 Archive</button>
                    </h2>
                    <div id="flush-collapse21" class="accordion-collapse collapse" aria-labelledby="flush-heading21"
                        data-bs-parent="">
                        <div class="accordion-body"></div>
                    </div>
                    <h2 class="accordion-header" id="flush-heading21">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false"
                            aria-controls="flush-collapseOne">2020 Archive</button>
                    </h2>
                    <div id="flush-collapse21" class="accordion-collapse collapse" aria-labelledby="flush-heading21"
                        data-bs-parent="">
                        <div class="accordion-body"></div>
                    </div>
                    <h2 class="accordion-header" id="flush-heading21">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false"
                            aria-controls="flush-collapseOne">2019 Archive</button>
                    </h2>
                    <div id="flush-collapse21" class="accordion-collapse collapse" aria-labelledby="flush-heading21"
                        data-bs-parent="">
                        <div class="accordion-body"></div>
                    </div>
                    <h2 class="accordion-header" id="flush-heading21">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false"
                            aria-controls="flush-collapseOne">2018 Archive</button>
                    </h2>
                    <div id="flush-collapse21" class="accordion-collapse collapse" aria-labelledby="flush-heading21"
                        data-bs-parent="">
                        <div class="accordion-body"></div>
                    </div>
                    <h2 class="accordion-header" id="flush-heading21">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false"
                            aria-controls="flush-collapseOne">2017 Archive</button>
                    </h2>
                    <div id="flush-collapse21" class="accordion-collapse collapse" aria-labelledby="flush-heading21"
                        data-bs-parent="">
                        <div class="accordion-body"></div>
                    </div>
                    <h2 class="accordion-header" id="flush-heading21">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false"
                            aria-controls="flush-collapseOne">2016 Archive</button>
                    </h2>
                    <div id="flush-collapse21" class="accordion-collapse collapse" aria-labelledby="flush-heading21"
                        data-bs-parent="">
                        <div class="accordion-body"></div>
                    </div>
                    <h2 class="accordion-header" id="flush-heading21">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false"
                            aria-controls="flush-collapseOne">2015 Archive</button>
                    </h2>
                    <div id="flush-collapse21" class="accordion-collapse collapse" aria-labelledby="flush-heading21"
                        data-bs-parent="">
                        <div class="accordion-body"></div>
                    </div>
                    <h2 class="accordion-header" id="flush-heading21">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false"
                            aria-controls="flush-collapseOne">2014 Archive</button>
                    </h2>
                    <div id="flush-collapse21" class="accordion-collapse collapse" aria-labelledby="flush-heading21"
                        data-bs-parent="">
                        <div class="accordion-body"></div>
                    </div>
                    <h2 class="accordion-header" id="flush-heading21">
                        <button class="accordion-button collapsed mid-gray-bkg" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false"
                            aria-controls="flush-collapseOne">2013 Archive</button>
                    </h2>
                    <div id="flush-collapse21" class="accordion-collapse collapse" aria-labelledby="flush-heading21"
                        data-bs-parent="">
                        <div class="accordion-body"></div>
                    </div>

                </div>
            </aside>
        </div >
    )
}

export default News;