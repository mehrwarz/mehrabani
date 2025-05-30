export default function Profile() {
    return (
         <div className="profile-box ml-15">
                  <button className="dropdown-toggle bg-transparent border-0" type="button" id="profile"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="profile-info">
                      <div className="info">
                        <div className="image">
                          <img src="/assets/images/profile/profile-image.png" alt="" />
                        </div>
                        <div>
                          <h6 className="fw-500">Adam Joe</h6>
                          <p>Admin</p>
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile">
                    <li>
                      <div className="author-info flex items-center !p-1">
                        <div className="image">
                          <img src="/assets/images/profile/profile-image.png" alt="image" />
                        </div>
                        <div className="content">
                          <h4 className="text-sm">Adam Joe</h4>
                          <a className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-xs"
                            href="#">Email@gmail.com</a>
                        </div>
                      </div>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#0">
                        <i className="lni lni-user"></i> View Profile
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="lni lni-alarm"></i> Notifications
                      </a>
                    </li>
                    <li>
                      <a href="#0"> <i className="lni lni-inbox"></i> Messages </a>
                    </li>
                    <li>
                      <a href="#0"> <i className="lni lni-cog"></i> Settings </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#0"> <i className="lni lni-exit"></i> Sign Out </a>
                    </li>
                  </ul>
                </div>
    )
}