import '../styles/Footer.css'
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"


function Footer() {
   

    return(
        <div className="footer">
            <div className='socialMedia'>
                <a href='https://twitter.com/ehn_dev'><TwitterIcon/></a>
                <a href='https://fr.linkedin.com/in/mohamed-ebarhmatin-376731179'><LinkedInIcon/></a>
            </div>
            <p>&copy; 2022 Mohamed.Ebarhmatin</p>
        </div>
    )
}

export default Footer