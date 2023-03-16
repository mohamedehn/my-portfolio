import '../styles/Footer.css'
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";


function Footer() {
   

    return(
        <div className="footer">
            <div className='socialMedia'>
                <a href='https://twitter.com/ehn_dev'><TwitterIcon/></a>
                <a href='https://fr.linkedin.com/in/mohamed-ebarhmatin-376731179'><LinkedInIcon/></a>
                <a href='https://github.com/mohamedehn'><GithubIcon/></a>
                <a href='mailto:mohamed.ebarhmatin@gmail.com'><EmailIcon/></a>
            </div>
            <p>&copy; 2022 Mohamed.Ebarhmatin</p>
        </div>
    )
}

export default Footer