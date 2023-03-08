import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea , Container,Grid , Box ,AppBar} from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './App.css';

function NCard(props) {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState();
    const handleOpen = () => {setOpen(true) };
    const handleClose = () => setOpen(false);
    

    // ---------------------------------------------Cards---------------------------------------------------------------
    var post = props.post
    .filter(filter => filter.image_url !== null && filter.name !== null && filter.collection.description !== null)
    .map(post => (
        // if(post.collection.image_url === "" || post.name=== "" || post.collection.description === "")
            <Grid key={post.id} item xs={12} sm={6} md={4} lg={3} >
                <Button onClick={()=>{handleOpen(); setSelected(post);}}>
                    <Card className="card" sx={{ width: 250 , minHeight: 380 , borderRadius:"20px"}}>
                        <CardActionArea>
                            {/* card image */}
                            {/* <CardMedia component="img" height="140" image={post.collection.image_url} style={{}} alt="NFT Image" /> */}
                            <img src={post.collection.image_url}  alt='NFT' style={{ width:"250px" , height:"220px",marginBottom:1, borderRadius:"20px", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",objectFit: "fill"}} />
                            <CardContent>
                            {/* card title */}
                            <Typography  className="descrip" gutterBottom variant="h5" component="div">
                                {post.name}
                            </Typography>
                            {/* card description */}
                            <Typography className="descrip" variant="body2" color="text.secondary">
                                {post.collection.description}
                            </Typography>
                            </CardContent>  
                        </CardActionArea>
                    </Card>
                </Button>
            </Grid>
        ))

  return (
    <Container >
        {/* Nav Bar */}
        <Box sx={{ flexGrow: 1 , zIndex:"1"}} mt={3} mb={8}>
            <AppBar position="fixed" >
                <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
                    NFT Market
                </Typography>
            </AppBar>
        </Box>

        <Grid container spacing={2}>
            {props && post}

            { open && 

            //------------------------------ Modal -----------------------------------
            <Modal disableScrollLock={true} height={window.innerHeight - 100} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}> 

                {/* Image */}
                <img src={selected.collection.image_url}  alt='NFT' style={{ width:"450px" , height:"350px",marginBottom:1, borderRadius:"20px", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",objectFit: "fill"}} /> 

                {/* Title */}
                <Typography id="modal-modal-title" variant="h6" component="h1" style={{fontWeight:"bold"}}>
                    {selected.name}
                </Typography>
                <hr/>

                {/* Description */}
                <Typography id="modal-modal-description" >
                    {selected.collection.description}
                </Typography>
                <hr/> 

                {/* Owner */}
                <Typography  style={{marginBottom : 1}} id="modal-modal-description" >
                    Created By : {selected.creator.address}
                </Typography>
                
                <br/>
                {/* Buy  */}
                <Button style={{left : 200 , position :"absolute", padding:"10" , margin:"10"}}  variant="contained" href={post.permalink} target="_blank" >Buy Now</Button>
                <br/>
                </Box>
            </Modal> }
        </Grid>
    </Container>
  )
}

export default NCard

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    paddingBottom:"10",
    display:'block',
    height:"85%",
    overflow:"scroll"
  };
