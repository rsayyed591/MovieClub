import instagram from './assets/instagram.svg';
import github from './assets/github.svg';
import linkedln from './assets/linkedln.svg';
import hackerrank from './assets/hackerrank.svg';
function Footer() {
  return (
    <div className="footer">
        <div className="mc__footer section__padding">
            <div className="mc__footer-links">
                <div className="mc__footer-links_div">
                    <h4>For business</h4>
                    <a href="/employer">
                        <p>Student</p>
                    </a>
                </div>
                <div className="mc__footer-links_div">
                    <h4>Resources</h4>
                    <a href="/resource">
                        <p>Resource Manager</p>
                    </a>
                    <a href="/resource">
                        <p>Testimonials</p>
                    </a>
                    <a href="/resource">
                        <p>STV</p>
                    </a>
                </div>
                {/* <div className="mc__footer-links_div">
                    <h4>Partners</h4>
                    <a href="/employer">
                        <p>Saboo</p>
                    </a>
                </div> */}
                <div className="mc__footer-links_div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="mc__footer-links_div">
                    <h4>Social Media</h4>
                    <div className="socialmedia">
                        <p><a href="https://www.linkedin.com/in/rehan42/"><img src={linkedln} alt="linkedln" /></a></p>
                        <p><a href="https://github.com/rsayyed591"><img src={github} alt="github" /></a></p>
                        <p><a href="https://www.instagram.com/mr_rehan__06/"><img src={instagram} alt="instagram" /></a></p>
                        <p><a href="https://www.hackerrank.com/profile/rehansayyed591"><img src={hackerrank} alt="hackerrank" /></a></p>
                    </div>
                </div>
            </div>
            <hr />

            <div className="mc__footer-below">
                <div className="mc__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Rehan. All right reserved.
                    </p>
                </div>
                <div className="mc__footer-below-links">
                    <a href="/terms"><div><p>Terms & conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer;
