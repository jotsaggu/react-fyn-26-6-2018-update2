import * as React from 'react';

class MainFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <aside className="col-md-4">
              <a className="footer_logo"><img src="images/footer_logo2.png" alt="" /></a>
            </aside>
            <aside className="col-md-2 col-sm-6">
              <p className="footer_heading">COMPANY</p>
              <ul className="footer_links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Our Partners</a></li>
              </ul>
            </aside>
            <aside className="col-md-2 col-sm-6">
              <p className="footer_heading">HELP</p>
              <ul className="footer_links">
                <li><a href="#">Helpdesk & Support</a></li>
                <li><a href="#">How it Works</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </aside>
             <aside className="col-md-2 col-sm-6">
              <p className="footer_heading">MORE FROM FYN</p>
              <ul className="footer_links">
                <li><a href="#">Talent Marketplace</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Publish Your ICO</a></li>
              </ul>
            </aside>
            <aside className="col-md-2 col-sm-6">
              <p className="footer_heading">MORE FROM FYN</p>
              <ul className="social_links small_social_icon">
                <li>
                  <a href="#">
                  <img src="images/facebook_icon.png" alt=""/>
                  </a>
                </li> 
                <li>
                  <a href="#">
                  <img src="images/twitter_icon.png" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src="images/telegram_icon.png" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <img src="images/m_icon.png" alt=""/>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <p className="copyright text-center">
          <span>12320 community members and growing</span><br/>
          © 2018 Katalyse.io. All Rights Reserved.
        </p>
      </footer>
    );
  }
}

export default MainFooter;
