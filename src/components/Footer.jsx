import twitter from '../assets/Twitter icon.png';
import facebook from '../assets/Facebook Icon.png';
import instagram from '../assets/Instagram Icon.png';
import github from '../assets/GitHub Icon.png';

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