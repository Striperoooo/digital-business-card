import photo from '../assets/photo.JPG';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


export default function Info() {
    return (

        <header>
            <img className='photo' src={photo} alt="Portrait of Charles Villanueva" />
            <div className='name-container'>
                <h1 className='name'>Charles Deiniel Villanueva</h1>
                <p className='title'>Frontend Developer</p>
                <a className='website-link' href="#">charlesvillanueva.website</a>
            </div>


            <div className='link-container'>
                <a className='btn-link email' href="#">
                    <MdEmail /> Email
                </a>
                <a className='btn-link linkedin' href="#">
                    <FaLinkedin />LinkedIn
                </a>
            </div>

        </header>

    )
}