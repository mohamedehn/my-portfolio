import '../styles/Footer.css'
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"


function Footer() {
   

    return(
        <div className="footer">
            <div className='socialMedia'>
                <TwitterIcon/>
                <LinkedInIcon/>
            </div>
            <p>&copy; 2022 Mohamed.Ebarhmatin</p>
        </div>
    )
}

export default Footer