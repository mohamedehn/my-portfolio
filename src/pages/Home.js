import '../styles/Home.css';
import GithubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"

function Home() {
    return(
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Mohamed</h2>
                <div className="prompt">
                    <p>A software developer with a passion for learning and creating.</p>
                    <GithubIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <EmailIcon/>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>ReactJS, HTML, CSS, Npm, BootStrap, MaterialUI,</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>NodeJS, ExpressJS, MongoDB</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>Javascript</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home