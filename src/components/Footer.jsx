import twitter from '../assets/twitter-icon.png';
import facebook from '../assets/facebook-icon.png';
import instagram from '../assets/instagram-icon.png';
import github from '../assets/github-icon.png';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='footer-content'>
                    <a href="#">
                        <img src={twitter} alt="Twitter logo" />
                    </a>
                    <a href="#">
                        <img src={facebook} alt="Facebook logo" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="Instagram logo" />
                    </a>
                    <a href="#">
                        <img src={github} alt="GitHub logo" />
                    </a>
                </div>
            </footer>
        </>
    )
}