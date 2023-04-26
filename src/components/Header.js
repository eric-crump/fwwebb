import "./css/Header.css";

function Header(props) {
    let navItems = [];
    
    if(Object.keys(props.nav).length !== 0){
        props.nav.forEach(item => { 
            let sections = [];
            let subItems = [];
            for(let x = 0; x < item.nav_item.length; x++){
                if((x % 8 == 0 || x == item.nav_item.length - 1) && x != 0){
                    if(x == item.nav_item.length - 1)
                        subItems.push(<li><a href="/sample">{item.nav_item[x].label}</a></li>);
                    sections.push(
                        <div className="col-lg-3 col-md-6">
                            <ul className="nav-subcat">
                                {subItems}
                            </ul>
                        </div>
                    );
                    subItems = [];
                }
                subItems.push(<li><a href="/sample">{item.nav_item[x].label}</a></li>)
            }
            navItems.push(
                <li className="nav-item"><span id={item.label} className="d-md-none"><a href="javascript:;">{item.label} <i className="fa fa fa-chevron-right pull-right arow"></i></a></span> <span className="d-md-inline d-none d-sm-none"><a className="nav-link" href="/landing/main-plumbing.php" role="button" aria-expanded="false" >{item.label}</a></span>
                    <section className="nav-2 nav-sub">
                        <div className="main-nav">
                            <div className="row">
                                {sections}
                            </div>
                        </div>
                    </section>
                </li>
            );
        })
    }

    return (
        <div>
            <header>
                <div className="header-top">
                    <div className="container-fluid py-2">
                        <div className="container-xl container-lg d-flex align-middle py-1 px-0 justify-content-center">
                            <div className="col-4 text-left">
                                <ul className="list-unstyled text-nowrap ">
                                    <li className=""><a href="/locations/" aria-label="locations" className="a-color"> <span className="w-100"><i className="fas fa-map-marker-alt"></i></span>&nbsp;&nbsp;LOCATIONS</a></li>

                                    <li className="d-md-inline d-none d-sm-none px-4"><a href="/contacts.php" aria-label="contact" className="a-color">CONTACT US</a></li>
                                </ul>
                            </div>
                            <div className="col-4 text-center">
                                <ul className="list-unstyled">
                                    <li className="d-md-none d-inline align-middle"><a href="/promotions/" aria-label="contact">PROMOTIONS</a></li>
                                </ul>
                            </div>
                            <div className="col-4 end text-end">
                                <ul className="list-unstyled end">
                                    <li className="d-md-none d-inline align-middle  text-end"><a href="/webbrewards/" className="white">REWARDS</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid header-wrapper">
                    <div className="container-xl container-lg pt-2 px-0 d-md-none my-auto justify-content-center">
                        <div className="row">
                            <div className="col-4 text-nowrap mx-0"><a href="/" aria-label="home" className="px-0"><img src="https://fwwebbimage.fwwebb.com/theme/assets/footer-logo.svg" style={{ height: "48px", float: "left" }} alt="home" /></a>
                                <button type="button" className="navbar-toggle offcanvas-toggle px-0 py-2"
                                    data-disablescrolling="false" data-toggle="offcanvas" data-target="#js-bootstrap-offcanvas" aria-controls="offcanvasWithBothOptions" style={{ float: "left", overflowX: "hidden", marginTop: "-2px" }}><i className="fa-solid fa fa-bars fa-lg"></i></button>

                            </div>
                            <div className="col-6 small85p text-center" id="toplocation-mobile">
                                <div className="row justify-content-left">
                                    <div className="col-12 center d-block d-md-none d-lg-none">
                                        <div className="mx-auto d-block text-center" id="toploginsm"> <span className="sign-register">
                                            <a className="font-weight-bold text-black text-capitalize" data-bs-toggle="modal" data-bs-target="#signinmodal" aria-label="sign-in">SIGN IN </a> | <a href="/register" aria-label="Register">REGISTER </a></span> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 mx-auto d-block text-end"> <a href="/wobf/cart.display" aria-label="cart"><span className="w-100 d-block"><img src="https://fwwebbimage.fwwebb.com/theme/assets/wo-images/common-2022/cart.svg" alt="cart" style={{ height: "25px", float: "right" }} /></span><br /><span id="topcartsm" className="text-black pt-1 px-2 text-end w-100 d-block"></span></a></div>
                        </div>
                    </div>
                    <div className="container gx-10 gx-sm-0 my-auto py-2">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-sm-3 d-md-inline d-none d-sm-none gx-0 gx-sm-3 my-auto"> <a href="/" aria-label="logo"> <img src="https://fwwebbimage.fwwebb.com/theme/assets/logo.svg" className="mw-100 mobile-hide" /></a></div>
                            <div className="col-sm-12 col-md-6 col-lg-6 my-auto d-md-flex d-flex justify-content-center">
                                <div className="col-12 col-sm-12 col-md-9 py-1" id="search-bar-box">
                                    <form className="form-horizontal searchForm" id="search-bar" role="form" action="/wobf/hsearch.index.gen" method="POST">
                                        <div className="input-group search-top">
                                            <input type="text" className="form-control search-field" id="SEARCHTERMS" name="SEARCHTERMS" placeholder="Search by keyword, part #, etc." autocomplete="off" />
                                            <div className="input-group-btn">
                                                <div className="dropdown dropdown-lg">
                                                    <div className="dropdown-menu-search dropdown-menu-right" role="menu">
                                                        <button type="submit" className="btn btn-search fastclick"  > <i className="fa fa-search red"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-md-3 col-lg-3 d-md-inline d-none d-md-block my-auto">
                                <div className="row">
                                    <div className="col-sm-9 mx-auto d-block text-center accordion-collapse" id="toplogin"><img className="" src="https://fwwebbimage.fwwebb.com/theme/assets/wo-images/common-2022/person-333.svg" style={{ height: "25px", paddingRight: "8px" }} alt="sign in" />
                                        <h6 className="sign-register"> <a className="font-weight-bold h6 text-black text-capitalize" data-bs-toggle="modal" data-bs-target="#signinmodal" aria-label="sign-in">SIGN IN </a> | <a href="/register" aria-label="Register">REGISTER</a></h6>
                                    </div>
                                    <div className="col-sm-3 mx-auto d-block text-center"> <a href="/wobf/cart.display" aria-label="cart"><span className="w-100 d-block"><img src="https://fwwebbimage.fwwebb.com/theme/assets/wo-images/common-2022/cart.svg" alt="cart" style={{ height: "25px" }} /></span><span id="topcart" className="text-black" style={{ fontSize: "12px" }}>0</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-default p-0" role="navigation">
                    <div className="container-fluid">
                        <div className="container-xl container-lg  nav-desktop">

                            <div className="navbar-offcanvas navbar-offcanvas-touch" id="js-bootstrap-offcanvas" data-disablescrolling="false" style={{ overflowX: "hidden" }}>
                                <div id="nav-1" className="row">

                                    <div className="py-2 px-0 d-md-none d-sm-block">
                                        <button type="button" className="navbar-toggle offcanvas-toggle" data-toggle="offcanvas" data-target="#js-bootstrap-offcanvas" data-disablescrolling="false">
                                            <span className="sr-only">Close</span>
                                            <span className="icon-bar" ></span>
                                            <span className="icon-bar" ></span>
                                        </button>
                                    </div>


                                    <ul className="nav-panel" id="main-menu">
                                        <li className="nav-item d-md-none gray-bkg" style={{ position: "static" }}><span className="d-md-inline "><a className="nav-link logged-in-show" href="/wobf/cart.quickadd" role="button" aria-expanded="false" aria-label="Bulk Orders">Quick Entry</a></span></li>
                                        <li className="nav-item gray-bkg logged-in-show"> <span id="plumbing" className="d-md-none"><a href="javascript:;">My Account <i className="fa fa fa-chevron-right pull-right arow"></i></a></span>
                                            <section className="nav-2 nav-sub">
                                                <div className="main-nav" style={{ overflowX: "hidden" }}>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <ul className="nav-subcat">
                                                                <li className="back d-md-none d-sm-inline"> <a href="javascript:;"> <i className="fa fa fa-chevron-left pull-right arow red"></i> Back</a></li>
                                                                <li><a href="/wobf/payyourbill" className="font-size-lg" aria-label="Pay Your Bill">Pay Your Bill</a></li>
                                                                <li><a href="/wobf/order.search.list+OTYPE=ORDER" className="font-size-lg" aria-label="My Orders">My Orders</a></li>
                                                                <li><a href="/wobf/pending.order.list+OTYPE=PENDING" className="font-size-lg" aria-label="Pending Orders">Pending Orders</a></li>
                                                                <li><a href="/wobf/cart.search.list" className="font-size-lg" aria-label="Saved Carts">Saved Carts</a></li>
                                                                <li><a href="/wobf/order.search.list+OTYPE=QUOTE&MODE=B" className="font-size-lg" aria-label="Bids/Quotes">Bids/Quotes</a></li>
                                                                <li><a href="/wobf/order.search.list+OTYPE=INVOICE" className="font-size-lg" aria-label="Invoices">Invoices</a></li>
                                                                <li><a href="/wobf/recently.purchased+SEARCHTERMS=LAST90" className="font-size-lg" aria-label="Recently Purchased">Recently Purchased</a></li>
                                                                <li><a href="https://www.fwwebbrewards.com/login.aspx" className="font-size-lg" aria-label="Webb Rewards">Webb Rewards</a></li>
                                                                <li><a href="/wobf/hc.home" className="font-size-lg" aria-label="Heat Loss/Gain Calculator">Heat Loss/Gain Calculator</a></li>
                                                                <li><a href="/wobf/custprodid.gen" className="font-size-lg" aria-label="Product Cross Reference">Product Cross Reference</a></li>
                                                                <li><a href="/wobf/account" className="font-size-lg" aria-label="My Account">My Account</a></li>

                                                                <li><a href="/wobf/account.maint.accountapproval.list" className="font-size-lg" aria-label="Account Approver">Account Approver</a></li>

                                                                <li><a href="/help.php" className="font-size-lg" aria-label="Help">Help</a></li>
                                                                <li><a href="/wobf/logout" className="font-size-lg" aria-label="Log Out">Log Out</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </li>
                                        {navItems}
                                        {/* <li className="nav-item"><span id="plumbing" className="d-md-none"><a href="javascript:;">Plumbing <i className="fa fa fa-chevron-right pull-right arow"></i></a></span> <span className="d-md-inline d-none d-sm-none"><a className="nav-link" href="/landing/main-plumbing.php" role="button" aria-expanded="false" >Plumbing</a></span>
                                            <section className="nav-2 nav-sub">
                                                <div className="main-nav">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li className="back d-md-none d-sm-inline"> <a href="javascript:;"> <i className="fa fa fa-chevron-left pull-right arow " style={{ color: "red" }}></i> Back</a></li>
                                                                <li><a href="/category/plumbing/plumbing-specialties/access-panels">Access Panels</a></li>
                                                                <li><a href="/landing/plumbing-accessories.php">Accessories</a></li>
                                                                <li><a href="/category/specialties/chemicals/drain-cleaning">Chemicals</a></li>
                                                                <li><a href="/category/plumbing/clamps-and-gaskets">Clamps &amp; Gaskets</a></li>
                                                                <li><a href="/landing/dispensers-soap.php">Dispensers</a></li>
                                                                <li><a href="/landing/drains.php">Drains &amp; Carriers</a></li>
                                                                <li><a href="/category/heating/expansiontanks-and-accessories/expansion-tanks">Expansion Tanks</a></li>
                                                                <li><a href="/landing/faucets.php">Faucets</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat" >
                                                                <li><a href="/category/plumbing/flush-valves">Flush Valves</a></li>
                                                                <li><a href="/landing/garbage-disposals.php">Garbage Disposals</a></li>
                                                                <li><a href="/category/plumbing/commercial-drains-and-carriers/grease-traps-and-interceptors">Grease Traps &amp; Interceptors</a></li>
                                                                <li><a href="/category/plumbing/water-supplies-and-stops/fixture-and-appliance-outlet-boxes">Outlet Boxes</a></li>
                                                                <li><a href="/landing/pex.php">Pex</a></li>
                                                                <li><a href="/landing/pumps-plumbing.php">Pumps</a></li>
                                                                <li><a href="/landing/pumbing-repair-parts.php">Repair Parts</a></li>
                                                                <li><a href="/landing/sinks.php">Sinks</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat" >
                                                                <li><a href="/landing/plumbing-specialties.php">Specialties</a></li>
                                                                <li><a href="/category/plumbing/plumbing-valves/sillcocks-and-hose-bibbs">Sillcocks &amp; Hose Bibbs</a></li>
                                                                <li><a href="/landing/toilet-urinal-installation.php">Toilet &amp; Urinal Installation</a></li>
                                                                <li><a href="/landing/toilet-fixtures.php">Toilets</a></li>
                                                                <li><a href="/landing/tub-shower.php">Tub &amp; Shower</a></li>
                                                                <li><a href="/category/plumbing/urinals/urinals">Urinals</a></li>
                                                                <li><a href="/landing/plumbing-valves.php">Valves &amp; Stops</a></li>
                                                                <li><a href="/category/plumbing/vacuum-breakers">Vacuum Breakers </a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat" >
                                                                <li><a href="/category/well-water/water-filtration">Water Filtration</a></li>
                                                                <li><a href="/category/plumbing/appliances/water-coolers-and-fountains">Water Coolers &amp; Bottle Fillers</a></li>
                                                                <li><a href="/category/plumbing/water-hammer-arrestors/hammer-arrestors">Water Hammer Arrestors</a></li>
                                                                <li><a href="/landing/water-heater-appliances.php">Water Heaters</a></li>
                                                                <li><a href="/category/plumbing/water-supplies-and-stops/water-supplies">Water Supplies</a></li>
                                                                <li><a href="/landing/well-systems.php">Well Systems</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </li>
                                        <li className="nav-item" style={{ position: "static" }}><span id="heating" className="d-md-none"><a href="javascript:;">Heating <i className="fa fa fa-chevron-right pull-right arow"></i></a></span> <span className="d-md-inline d-none d-sm-none"><a className="nav-link" href="/landing/main-heating.php" role="button" aria-expanded="false">Heating</a></span>
                                            <section className="nav-2 nav-sub">
                                                <div className="main-nav">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li className="back d-md-none d-sm-inline"> <a href="javascript:;"> <i className="fa fa fa-chevron-left pull-right arow " style={{ color: "red" }}></i> Back</a></li>
                                                                <li ><a href="/landing/air-elimination.php">Air Elimination</a></li>
                                                                <li ><a href="/landing/baseboard.php">Baseboard</a></li>
                                                                <li ><a href="/category/heating/boiler-boards">Boiler Boards</a></li>
                                                                <li ><a href="/landing/boiler-chemicals.php">Boiler Chemicals</a></li>
                                                                <li ><a href="/landing/boilers.php">Boilers</a></li>
                                                                <li ><a href="/category/heating/buffer-tanks/buffer-tanks">Buffer Tanks</a></li>
                                                                <li ><a href="/landing/circulators.php">Circulators</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li ><a href="/category/heating/condensate-neutralizers/">Condensate Neutralizers</a></li>
                                                                <li ><a href="/landing/electric-heating.php">Electric Heating</a></li>
                                                                <li ><a href="/category/heating/expansiontanks-and-accessories/expansion-tanks">Expansion Tanks</a></li>
                                                                <li ><a href="/landing/flow-controls.php">Flow Controls</a></li>
                                                                <li ><a href="/landing/gas-valves-accessories.php">Gas Valves &amp; Accessories</a></li>
                                                                <li ><a href="/category/heating/hydraulicseparation/hydraulic-separation">Hydraulic Separation</a></li>
                                                                <li ><a href="/category/heating/hydronic-zone-valves/">Hydronic Zone Valves</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li ><a href="/landing/indirect-water-heaters.php">Indirect Water Heaters</a></li>
                                                                <li ><a href="/category/heating/kickspace-heaters/">Kickspace Heaters</a></li>
                                                                <li ><a href="/landing/oem-boiler-parts.php">OEM Boiler Parts</a></li>
                                                                <li ><a href="/landing/oil-heating-specialties.php">Oil Heating Specialties</a></li>
                                                                <li ><a href="/landing/oil-tanks.php">Oil Tanks</a></li>
                                                                <li ><a href="/landing/hydronic-panel-radiator.php">Panel Radiators &amp; Accessories</a></li>
                                                                <li ><a href="/landing/radiant-pex-heating.php">Radiant Pex Heating</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li ><a href="/landing/radiator-valves-tools.php">Radiator Valves &amp; Tools</a></li>
                                                                <li ><a href="/landing/hydronic-relief-and-pressure-valves.php">Relief &amp; Pressure Valves</a></li>
                                                                <li ><a href="/landing/space-heaters.php">Space Heaters</a></li>
                                                                <li ><a href="/landing/unit-heaters.php">Unit Heaters</a></li>
                                                                <li ><a href="/landing/water-quality.php">Water Quality</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </li>
                                        <li className="nav-item" style={{ position: "static" }}> <span id="hvac" className="d-md-none"><a href="javascript:;">HVAC/R <i className="fa fa fa-chevron-right pull-right arow"></i></a></span> <span className="d-md-inline d-none d-sm-none"><a className="nav-link" href="/landing/main-hvacr.php" role="button" aria-expanded="false">HVAC/R</a></span>
                                            <section className="nav-2 nav-sub">
                                                <div className="main-nav">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li className="back d-md-none d-sm-inline"> <a href="javascript:;"> <i className="fa fa fa-chevron-left pull-right arow " style={{ color: "red" }}></i> Back</a></li>
                                                                <li ><a href="/landing/ac-heat-pump.php">A/C &amp; Heat Pump</a></li>
                                                                <li ><a href="/landing/air-handlers.php">Air Handlers/Coils</a></li>
                                                                <li ><a href="/landing/commercial-products.php">Commercial Products</a></li>
                                                                <li ><a href="/landing/controls.php">Controls</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li ><a href="/landing/ducting.php">Ducting &amp; RGD&#39;s</a></li>
                                                                <li ><a href="/landing/flue-venting.php">Flue Venting</a></li>
                                                                <li ><a href="/landing/furnaces.php">Furnaces</a></li>
                                                                <li ><a href="/landing/tools-maintenance.php">Tools, Maintenance &amp; Supplies</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li ><a href="/landing/indoor-air-quality.php">Indoor Air Quality</a></li>
                                                                <li ><a href="/landing/insulation-products.php">Insulation Products</a></li>
                                                                <li ><a href="/landing/mini-split-ductless-systems.php">Mini-Split Ductless Systems</a></li>
                                                                <li ><a href="/landing/motors.php">Motors</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li ><a href="/landing/refrigeration.php">Refrigeration</a></li>
                                                                <li ><a href="/landing/zoning.php">Zoning</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </li>
                                        <li className="nav-item" style={{ position: "static" }}> <span id="industrial" className="d-md-none"><a href="javascript:;">Industrial <i className="fa fa fa-chevron-right pull-right arow"></i></a></span> <span className="d-md-inline d-none d-sm-none"><a className="nav-link" href="/landing/main-industrial.php" role="button" aria-expanded="false">Industrial</a></span>
                                            <section className="nav-2 nav-sub">
                                                <div className="main-nav">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li className="back d-md-none d-sm-inline"> <a href="javascript:;"> <i className="fa fa fa-chevron-left pull-right arow " style={{ color: "red" }}></i> Back</a></li>
                                                                <li><a href="/landing/valves-automation.php">Automated Valves</a></li>
                                                                <li><a href="/category/pipe-tube-and-fittings/piping-parts-and-supplies/flexible-connectors">Expansion Joints</a></li>
                                                                <li><a href="/category/industrial/filtration/pipe-line-strainers">Filtration</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li><a href="/landing/hose-fittings.php">Hose &amp; Fittings</a></li>
                                                                <li><a href="/landing/valves-manual.php">Manual Valves</a></li>
                                                                <li><a href="/landing/measurement.php">Measurement</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li><a href="/landing/ss-tube-fittings.php">SS Tube &amp; Fittings</a></li>
                                                                <li><a href="/landing/steam.php">Steam</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </li>
                                        <li className="nav-item" style={{ position: "static" }}> <span id="propane" className="d-md-none"><a href="javascript:;">Propane <i className="fa fa fa-chevron-right pull-right arow"></i></a></span> <span className="d-md-inline d-none d-sm-none"><a className="nav-link" href="/landing/main-propane.php" role="button" aria-expanded="false">Propane</a></span>
                                            <section className="nav-2 nav-sub">
                                                <div className="main-nav">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li className="back d-md-none d-sm-inline"> <a href="javascript:;"> <i className="fa fa fa-chevron-left pull-right arow " style={{ color: "red" }}></i> Back</a></li>
                                                                <li><a href="/landing/generators.php">Generators</a></li>
                                                                <li><a href="/landing/hearth-equipment.php">Hearth Equipment</a></li>
                                                                <li><a href="/landing/outdoor-living.php">Outdoor Living</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li><a href="/landing/propane-commercial.php">Propane Commercial</a></li>
                                                                <li><a href="/landing/regulators.php">Regulators</a></li>
                                                                <li><a href="/landing/tanks-cylinders.php">Tank/Cylinders</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li><a href="/landing/propane-off-grid-equipment.php">Off Grid Equipment</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </li>
                                        <li className="nav-item" style={{ position: "static" }}> <span id="more" className="d-md-none"><a href="javascript:;">More <i className="fa fa fa-chevron-right pull-right arow"></i></a></span> <span className="d-md-inline d-none d-sm-none"><a className="nav-link" href="/landing/main-more.php" role="button" aria-expanded="false">More</a></span>
                                            <section className="nav-2 nav-sub">
                                                <div className="main-nav">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li className="back d-md-none d-sm-inline"> <a href="javascript:;"> <i className="fa fa fa-chevron-left pull-right arow " style={{ color: "red" }}></i> Back</a></li>
                                                                <li><a href="/landing/main-electrical.php">Electrical</a></li>
                                                                <li><a href="/landing/fire-protection.php">Fire Protection</a></li>
                                                                <li><a href="/landing/main-fittings.php">Fittings</a></li>
                                                                <li><a href="/landing/main-hangers.php">Hangers</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li><a href="/landing/main-hardware.php">Hardware</a></li>
                                                                <li><a href="/landing/main-pipe.php">Pipe &amp; Tube</a></li>
                                                                <li><a href="/landing/main-safety.php">Safety</a></li>
                                                                <li><a href="/landing/specialties.php">Specialties</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li><a href="/landing/main-tools.php">Tools</a></li>
                                                                <li><a href="/landing/main-valves.php">Valves</a></li>
                                                                <li><a href="/landing/well-systems.php">Well Systems</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </li> */}
                                        <li className="nav-item d-md-inline d-none d-sm-none" style={{ position: "static" }}> <span id="about" className="d-md-none"><a href="javascript:;">About Us <i className="fa fa fa-chevron-right pull-right arow"></i></a></span> <span className="d-md-inline d-none d-sm-none"><a className="nav-link" href="/about-us.php" role="button" aria-expanded="false"><span style={{ color: "#d4d4d4", paddingRight: "15px" }}>|</span>About Us</a></span>
                                            <section className="nav-2 nav-sub">
                                                <div className="main-nav">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li className="back d-md-none d-sm-inline"> <a href="javascript:;"> <i className="fa fa fa-chevron-left pull-right arow " style={{ color: "red" }}></i> Back</a></li>
                                                                <li><a href="/leadership.php" aria-label="Leadership">Leadership</a></li>
                                                                <li><a href="/careers/" aria-label="Careers">Careers</a></li>
                                                                <li><a href="/news/" aria-label="News">News</a></li>
                                                                <li><a href="/history.php" aria-label="History">History</a></li>
                                                                <li><a href="/privacy.php" aria-label="Privacy Policy">Privacy Policy</a></li>
                                                                <li><a href="/terms.php" aria-label="Terms of Use">Terms of Use</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li><a href="/expertise/building-controls.php">Building Controls</a></li>
                                                                <li><a href="/expertise/commerical-and-industrial-pumps.php">Commercial &amp; Industrial Pumps</a></li>
                                                                <li><a href="/expertise/environmental-services.php">Environmental Services</a></li>
                                                                <li><a href="/expertise/fire-protection-and-fabrication.php">Fire Protection &amp; Fabrication </a></li>
                                                                <li><a href="/expertise/heating.php">Heating</a></li>
                                                                <li><a href="/expertise/high-purity-process-components.php">High Purity Process Components</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li><a href="/expertise/hvac.php">HVAC/R</a></li>
                                                                <li><a href="/expertise/industrial-pvf-specialties.php">Industrial PVF</a></li>
                                                                <li><a href="/expertise/plumbing.php">Plumbing</a></li>
                                                                <li><a href="/expertise/process-controls.php">Process Controls</a></li>
                                                                <li><a href="/expertise/propane-equipment.php">Propane/Natural Gas Equipment &amp; Parts</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <ul className="nav-subcat">
                                                                <li><a href="/expertise/pvf.php">PVF</a></li>
                                                                <li><a href="/expertise/refrigeration.php">Refrigeration</a></li>
                                                                <li><a href="/expertise/thermoplastic-piping.php">Thermoplastic Piping</a></li>
                                                                <li><a href="/expertise/water-systems.php">Water Systems</a></li>
                                                                <li><a href="/expertise/waterworks.php">Water Works</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </li>
                                        <li className="nav-item d-md-inline d-none d-sm-none" style={{ position: "static" }}><span className="d-md-inline "><a className="nav-link" href="/promotions/" role="button" aria-expanded="false" style={{ color: "#C31009", paddingRight: "14px" }}>Promotions</a></span></li>
                                        <li className="nav-item d-md-inline d-none d-sm-none" style={{ position: "static" }}><span className="d-md-inline "><a className="nav-link" href="/webbrewards/" role="button" aria-expanded="false" style={{ color: "#C31009" }}>Rewards</a></span></li>


                                        <li className="nav-item d-md-none gray-bkg" style={{ position: "static" }}><span className="d-md-inline "><a className="nav-link" href="/contacts.php" role="button" aria-expanded="false">Contact Us</a></span></li>
                                        <li className="nav-item d-md-none gray-bkg" style={{ position: "static" }}><span className="d-md-inline "><a className="nav-link" href="/careers/" role="button" aria-expanded="false">Careers</a></span></li>
                                        <br /><br />

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </header></div>
    )
}

export default Header;