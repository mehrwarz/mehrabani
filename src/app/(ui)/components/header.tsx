import Messages from "./messages";
import Profile from "./profile";
import Notifications from "./notification";

export default function Header() {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-6">
                        <div className="header-left d-flex align-items-center">
                            <div className="menu-toggle-btn mr-15">
                                <button id="menu-toggle" className="main-btn primary-btn btn-hover">
                                    <i className="lni lni-chevron-left me-2"></i> Menu
                                </button>
                            </div>
                            <div className="header-search d-none d-md-flex">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button><i className="lni lni-search-alt"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-6">
                        <div className="header-right">
                            <Notifications />
                            <Messages />
                            <Profile />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}