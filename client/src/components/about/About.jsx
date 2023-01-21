
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">WELCOME</Typography>
                <Text variant="h5">I'm Aspiring software engineer. 
                    I built this website using MERN Stack.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Shobhitpatel19" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat?<br/> Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/shobhit-patel-087058227/" color="inherit" target="_blank">
                            <LinkedInIcon /><br/>
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:shobhitp49@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;