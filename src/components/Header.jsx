import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Signup} from './Signup'
import {Login} from './Login'
import {setUser} from '../Redux/User/action'
import { useSelector, useDispatch} from 'react-redux';

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(true)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const {user} = useSelector((state)=>({
        user : state.userState.user
    }))

    const [openlogin, setOpenLogin] = useState(false);
    const handleLogin = () => {
        setOpenLogin(true)
        setOpen(false)
    };
    const handleLoginClose = () => setOpenLogin(false);

    const dispatch = useDispatch()
    const handleLogout=()=>{
        dispatch(setUser())
    }
    const handlePage =()=>{
        setPage(!page)
    }

  const style = {
    position: 'absolute',
    top: '23%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
   background: "white",
    border: '1px solid #000',
    width : "250px",
    height : '150px' ,
    p: 4,
  };
  const buttonstyle = {
      color : "white",
      background:"#ff7035",
      fontSize:"17px"
  }
  const loginStyle = {
   
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   background: "white",
    border: '1px solid #000',
    width : "655px",
    // height : '150px' ,
    p: 4,
  }

return (
<div className='HeadMain'>
    <div id="header">
        <div id="head1">
            <Link to="/" id="img11">
                <img  src="https://ii1.pepperfry.com/images/pf-logo-bday-21.gif" alt="imgtasg" />
            </Link>
            <div className="img12">
                <Link className ="nam" to="/products">SHOP</Link>
                <a className ="nam" href="/">GET INSPIRED</a>
                <a className ="nam" href="/">PARTNER</a>
            </div>
            <div style={{background:"white"}} id="search">
                <input  type="text"placeholder="Door to happiness begins with a Search"/>
                <img alt="imgtag" src="https://image.flaticon.com/icons/png/128/482/482631.png"  />
            </div>
            
            <div id="options">
                <div className="items">
                    <img alt="imgtag" src="	https://ii1.pepperfry.com/images/svg/header-wishlist-icon-2021.svg"/>
                    
                </div>
                <Link to="/cart" className="items">
                    <img alt="imgtag" src="https://ii1.pepperfry.com/images/svg/header-cart-icon-2021.svg"/>
                    
                </Link>
                <div  className="items">
                    <Button onClick={handleOpen}><img alt="imgtag" src="https://ii1.pepperfry.com/images/svg/header-profile-icon-2021.svg
                    "/></Button>
                </div>
            </div>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {user?<span>
                    <h2 >{user.name}</h2>
                    <Button onClick={handleLogout} style={buttonstyle} >Logout</Button>
                </span> :
                <span>
                    <Link id="link" to="/login"> <Button id="link" style={buttonstyle} >Login/Register</Button> </Link>
                    <p>To access your account & manage orders</p>
                </span>}
            </Box>
        </Modal>

        {/* <Modal
            open={openlogin}
            onClose={handleLoginClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={loginStyle}>
                <Login />
       {page? <Login /> : <Signup setPage = {handlePage} />} 
                
            </Box>
        </Modal> */}

        <nav>
            <div className="wrapper">
            <ul className="nav-links">
                <li id="first">
                    <Link to="/products">Furniture</Link>
                    <div className="mega-box" >
                    <div className="content">
                        <div className="rowone">
                            <header>Sofas</header>  
                            <ul className="mega-links a">
                                <li><a href="/">Sofas</a></li>
                                <li><a href="/">3 Seater sofas</a></li>
                                <li><a href="/">2 Seater Sofas</a></li>
                                <li><a href="/">1 seater Sofas</a></li>
                                <li><a href="/">Sofa Sets</a></li>
                                <li><a href="/">Sectional Sofas</a></li>
                                <li><a href="/">Recliners  </a></li>
                                <li><a href="/">Chaise Loungers</a></li>
                                <li><a href="/">Sofa Cum Beds </a></li>
                                <li><a href="/">Futons </a></li>
                            </ul>
                        </div>
                        <div className="rowone">
                        <header>Seating</header>  
                        <ul className="mega-links c" >
                            <li><a href="/">Settees</a></li>
                            <li><a href="/">Benches</a></li>
                            <li><a href="/">Ottomans</a></li>
                            <li><a href="/">Pouffes</a></li>
                            <li><a href="/">Recamiers</a></li>
                            <li><a href="/">Foot Stools</a></li>
                            <li><a href="/">Seating Stools </a></li>
                            <li><a href="/">Bean Bags</a></li>
                            
                        </ul>
                        </div> 
                        
                        <div className="rowone">
                        <header>Chairs</header>  
                        <ul className="mega-links a" >
                            <li><a href="/">Arm Chairs</a></li>
                            <li><a href="/">Rocking Chairs</a></li>
                            <li><a href="/">Cantilever Chairs</a></li>
                            <li><a href="/">Folding Chairs</a></li>
                            <li><a href="/">Iconic Chairs</a></li>
                            <li><a href="/">Cafe Chairs</a></li>
                            <li><a href="/">Dining Chairs  </a></li>
                            <li><a href="/">Office Chairs</a></li>
                            
                        </ul>
                    </div>

                    <div className="rowone">
                        <img alt="imgtag" className="d" src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Furniture.png"/>
                    </div>
   
                    </div>  
                    </div>
                </li>
                <li><Link to="/products">Sofas & Recliners</Link>
                    <div className="mega-box">
                        <div className="content">
                            <div className="rowone">
                            <header>By Size</header>  
                            <ul className="mega-links a">
                                <li><a href="/">3 Seater Sofas</a></li>
                                <li><a href="/">2 Seater sofas</a></li>
                                <li><a href="/">1 Seater Sofas</a></li>
                                <li><a href="/">Sectional Sofas</a></li>
                                <li><a href="/">Sofa Sets</a></li>
                                <li><a href="/">1 Seater Recliners</a></li>
                                <li><a href="/">2 Seater Recliners  </a></li>
                                <li><a href="/">3 Seater Recliners</a></li>
                                <li><a href="/">Recliner Sets </a></li>
                                
        
                            </ul>
                            </div>
                        <div className="rowone">
                        <header>By Type</header>  
                        <ul className="mega-links b">
                            <li><a href="/">Corner Sofas</a></li>
                            <li><a href="/">Modular Sofas</a></li>
                            <li><a href="/">Sofa cum Beds</a></li>
                            <li><a href="/">Futons</a></li>
                            <li><a href="/">Chaise Loungers</a></li>
                            <li><a href="/">Recliners</a></li>
                            
                            
                        </ul>
                        </div> 
                        
                        <div className="rowone">
                        <header>Sofa Chairs</header>  
                        <ul className="mega-links c">
                            <li><a href="/">Lounge Chairs</a></li>
                            <li><a href="/">Wing Chairs</a></li>
                            <li><a href="/">Barrel Chairs</a></li>
                            <li><a href="/">Slipper Chairs</a></li>
                            
                            
                        </ul>
                        </div>
        
                        <div className="rowone">
                        <img alt="imgtag" className="d"src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Sofa_Recliners.png"/>
                        </div>
        
                        {/* <div className="one">
                        <h1 className="brand">Top Brands</h1>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Woodsworth.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Mintwood.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Casacraft.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Amberville.jpg"/>
                        </div> */}
        
                        
                        </div>  
                    </div>
                </li>
                <li><a href="/">  Cabinetry</a>
                    <div className="mega-box">
                        <div className="content">
                            <div className="rowone">
                            <header>Wardrobes</header>  
                            <ul className="mega-links a">
                                <li><a href="/">1 Door Wardrobes</a></li>
                                <li><a href="/">2 Door Wardrobes</a></li>
                                <li><a href="/">3 Door Wardrobes</a></li>
                                <li><a href="/">4 Door Wardrobes</a></li>
                                <li><a href="/">Fabric </a></li>
                                <li><a href="/">Futons</a></li>
                                <li><a href="/">Kids Wardrobes  </a></li>
                                <li><a href="/">Fabric Wardrobes</a></li>
                                
                            </ul>
                            </div>
                        <div className="rowone">
                        <header>Storage</header>  
                        <ul className="mega-links b">
                            <li><a href="/">Book Shelves</a></li>
                            <li><a href="/">Book Cases</a></li>
                            <li><a href="/">Chest of Drawers</a></li>
                            <li><a href="/">Trunks</a></li>
                            <li><a href="/">Plastic Cabinets</a></li>
                            <li><a href="/">Office Cabinets</a></li>
                            
                            
                        </ul>
                        </div> 
                        
                        <div className="rowone">
                        <header>Kids Storage</header>  
                        <ul className="mega-links c">
                            <li><a href="/">Book Shelves</a></li>
                            <li><a href="/">Book Cases</a></li>
                            <li><a href="/">Drawers</a></li>
                            <li><a href="/"> Baskets</a></li>
                            <li><a href="/">Boxes </a></li>
                            
                            
                        </ul>
                        </div>
        
                        <div className="rowone">
                        <img alt="imgtag" className="d"src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Cabinetry.png"/>
                        </div>
        
                        {/* <div className="one">
                        <h1 className="brand">Top Brands</h1>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home-Nilkamal.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Godrej-Interio.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Mintwood.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Woodsworth.jpg"/>
                        </div> */}
        
                        
                        </div>  
                    </div></li>
                <li><a href="/">Beds</a>
                    <div className="mega-box">
                        <div className="content">
                            <div className="rowone">
                            <header>Kids & Teens</header>  
                            <ul className="mega-links a">
                                <li><a href="/">Cribs</a></li>
                                <li><a href="/">Single Beds</a></li>
                                <li><a href="/">Double Beds</a></li>
                                <li><a href="/">Trundle Beds</a></li>
                                <li><a href="/">Bookcase Beds</a></li>
                                <li><a href="/">Novelty Beds</a></li>
                                <li><a href="/">Tent Beds</a></li>
                                <li><a href="/">Bed Units</a></li>
                                <li><a href="/">Bunk Beds</a></li>
                                
                            </ul>
                            </div>
                        
                        
                        <div className="rowone">
                        <header>Mattresses</header>  
                        <ul className="mega-links b">
                            <li><a href="/">Single Bed Mattress</a></li>
                            <li><a href="/"> Queen Bed Mattress</a></li>
                            <li><a href="/"> King Bed Mattress</a></li>
                            <li><a href="/"> Baby Mattress</a></li>
                            <li><a href="/">  Kids Mattress </a></li>
                            
                        </ul>
                        </div>
                        <div className="rowone">
                            <header>By Style</header>  
                            <ul className="mega-links c">
                                <li><a href="/">Modern </a></li>
                                <li><a href="/">Mid-Century</a></li>
                                <li><a href="/"> Contemporary </a></li>
                                <li><a href="/"> Transitional</a></li>
                                <li><a href="/">Mission</a></li>
                                <li><a href="/">Industrial </a></li>
                                <li><a href="/">Platform </a></li>
                                <li><a href="/">Poster Beds </a></li>
                                <li><a href="/">Industrial </a></li>
                                <li><a href="/">Folding Beds </a></li>
        
                            </ul>
                        </div>
                        <div className="rowone">
                        <img alt="imgtag" className="d"src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Beds.png"/>
                        </div>
        
                        {/* <div className="one">
                        <h1 className="brand">Top Brands</h1>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Spacewood.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hometown.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Woodsworth.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Amberville.jpg"/>
                        </div> */}
        
                        
                        </div>  
                    </div></li>
                <li><a href="/">Mattresses</a>
                    <div className="mega-box">
                        <div className="content">
                            <div className="rowone">
                            <header>Mattresses</header>  
                            <ul className="mega-links a">
                                <li><a href="/"> Mattress Sizes</a></li>
                                <li><a href="/">Foldable Mattress</a></li>
                                <li><a href="/"> Baby Mattress</a></li>
                                <li><a href="/">Kids Mattress</a></li>
                                <li><a href="/">Mattress Protectors</a></li>
                                <li><a href="/">Mattress Toppers</a></li>
                                <li><a href="/">Pillows</a></li>
                                <li><a href="/">Bed Wedges </a></li>
                                <li><a href="/">Mattress Steaming </a></li>
                            </ul>
                            </div>
                        
                        
                        <div className="rowone">
                        <header>Mattress Type</header>  
                        <ul className="mega-links a">
                            <li><a href="/">Coir</a></li>
                            <li><a href="/">Foam </a></li>
                            <li><a href="/">Memory Foam </a></li>
                            <li><a href="/">Bonnell Spring</a></li>
                            <li><a href="/">Pocket Spring </a></li>
                            <li><a href="/">  Latex </a></li>
                            <li><a href="/">Coir & Foam  </a></li>
                            <li><a href="/">    HR Foam </a></li>
                            <li><a href="/"> Cool Gel Foam </a></li>
                            <li><a href="/"> Rebonded Foam </a></li>        
                        </ul>
                        </div>
                        <div className="rowone">
                            <header>Mattress Brands</header>  
                            <ul className="mega-links b">
                                <li><a href="/">Clouddio </a></li>
                                <li><a href="/">Sleepyhead</a></li>
                                <li><a href="/">Wake-fit </a></li>
                                <li><a href="/">springtek</a></li>
                                <li><a href="/">Duroflex</a></li>
                                <li><a href="/">Durfi </a></li>
                                <li><a href="/"> Comforto</a></li>
                                <li><a href="/">SleepSpa  </a></li>
                                <li><a href="/"> Kurl-on</a></li>
                                <li><a href="/"> SleepX </a></li>
                            
                            </ul>
                        </div>
                        <div className="rowone">
                        <img alt="imgtag" className="d"src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Mattresses.png"/>
                        </div>
        
                        {/* <div className="one1">
                        <h1 className="brand">Top Brands</h1>
                        <img alt="imgtag" src="https://ii1.pepperfry.com/media/wysiwyg/banners/clouddio_135x36_1.jpg"/><br/>
                        <img alt="imgtag" src="https://ii1.pepperfry.com/media/wysiwyg/banners/i_sleep_seven_135x36.jpg"/><br/>
                        <img alt="imgtag" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Comforto_135x36.jpg"/>
                        <img alt="imgtag" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Duroflex_135x36.jpg"/>
                        </div> */}
        
                        
                        </div>  
                    </div></li>
                <li><a href="/"> Furnishings</a>
                    <div className="mega-box">
                        <div className="content">
                            <div className="rowone">
                            <header>Bed Linen</header>  
                            <ul className="mega-links c">
                                <li><a href="/"> Bed Sheets </a></li>
                                <li><a href="/"> Bedding Sets</a></li>
                                <li><a href="/"> Pillows </a></li>
                                <li><a href="/"> Pillow Covers</a></li>
                                <li><a href="/"> Bed Covers</a></li>
                                <li><a href="/"> Diwan Sets</a></li>
                                <li><a href="/"> Toppers</a></li>
                                <li><a href="/"> Protectors </a></li>
                                <li><a href="/">  </a></li>
                                
                            </ul>
                            </div>
                        
                        
                        <div className="rowone">
                        <header>Curtains </header>  
                        <ul className="mega-links a">
                            <li><a href="/">Door Curtains</a></li>
                            <li><a href="/">Window Curtains </a></li>
                            <li><a href="/">Blinds & Shades </a></li>
                            <li><a href="/">Macrame Curtains</a></li>
                            <li><a href="/">Curtain Rods </a></li>
                            <li><a href="/">  Tie Backs </a></li>
                        
                        </ul>
                        </div>
                        <div className="rowone">
                            <header> Cushion & Covers</header>  
                            <ul className="mega-links c">
                                <li><a href="/"> Decorative Cushions </a></li>
                                <li><a href="/">Floor Cushions</a></li>
                                <li><a href="/">Cushion Covers </a></li>
                                <li><a href="/">Sofa Covers</a></li>
                                <li><a href="/">Sofa Throws</a></li>
                                <li><a href="/">Chair Pads </a></li>
                                <li><a href="/"> Chair Covers</a></li>
                                <li><a href="/"> Cushion Inserts  </a></li>
                            
                            </ul>
                        </div>
                        <div className="rowone">
                        <img alt="imgtag" className="d"src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_furnishing.png"/>
                        </div>
        
                        {/* <div className="one">
                            <h1 className="brand">Top Brands</h1>
                            <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Spacewood.jpg"/>
                            <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hometown.jpg"/>
                            <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Woodsworth.jpg"/>
                            <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Amberville.jpg"/>
                            </div> */}
        
                        
                        </div>  
                    </div></li>
                <li><a href="/">Decor</a>
                    <div className="mega-box">
                        <div className="content">
                            <div className="rowone">
                            <header>Wall Art</header>  
                            <ul className="mega-links b">
                                <li><a href="/">Metal Wall Art</a></li>
                                <li><a href="/">Wooden Wall Art</a></li>
                                <li><a href="/">Paintings</a></li>
                                <li><a href="/">Art Panels </a></li>
                                <li><a href="/"> Art Prints</a></li>
                                <li><a href="/"> Ethnic Art</a></li>
                                <li><a href="/">Wall Masks </a></li>
                                <li><a href="/"> Faux Animal Busts</a></li>
                                <li><a href="/">Wall Plates </a></li>
                            
                            </ul>
                            </div>
                        
                        
                        <div className="rowone">
                        <header>Spiritual</header>  
                        <ul className="mega-links b">
                            <li><a href="/"> Mandirs </a></li>
                            <li><a href="/"> Pooja Shelves  </a></li>
                            <li><a href="/"> Religious Idols  </a></li>
                            <li><a href="/"> Religious Frames </a></li>
                            <li><a href="/"> Chowkies   </a></li>
                            <li><a href="/">Feng Shui    </a></li>
                            <li><a href="/"> Pooja Essentials   </a></li>
                            <li><a href="/"> Festive Decor </a></li>
                                <li><a href="/">Prayer Mats  </a></li>
                                <li><a href="/"> Spiritual Coins  </a></li>
                            
                        </ul>
                        </div>
                        <div className="rowone">
                            <header>Home Garden</header>  
                            <ul className="mega-links a">
                                <li><a href="/">Pots & Planters </a></li>
                                <li><a href="/"> Planter Stands</a></li>
                                <li><a href="/">Natural Plants  </a></li>
                                <li><a href="/"> Artificial Plants</a></li>
                                <li><a href="/">Artificial Flowers</a></li>
                                <li><a href="/"> Artificial Grass </a></li>
                                <li><a href="/">Decorative Pebbles </a></li>
                                <li><a href="/"> Garden Figurines </a></li>
                                <li><a href="/"> Bird Houses</a></li>
                                <li><a href="/"> Gardening Tools</a></li>
                            
                            </ul>
                        </div>
                        <div className="rowone">
                        <img alt="imgtag" className="d"src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Decor.png"/>
                        </div>
        
                        {/* <div className="one">
                        <h1 className="brand">Top Brands</h1>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Fabuliv.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Ugaoo.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Ellementry.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Wall-Manra.jpg"/>
                        </div> */}
        
                        
                        </div>  
                    </div></li>
                <li><a href="/"> Lighting</a>
                    <div className="mega-box">
                        <div className="content">
                            <div className="rowone">
                            <header>Wall Lights</header>  
                            <ul className="mega-links b">
                                <li><a href="/">Wall Sconces</a></li>
                                <li><a href="/">Wall Lanterns</a></li>
                                <li><a href="/">Picture Lights</a></li>
                                <li><a href="/">Bath Lights</a></li>
                            </ul>
                            </div>
                        
                        
                        <div className="rowone">
                        <header>LED Lights</header>  
                        <ul className="mega-links b">
                            <li><a href="/"> Lamps </a></li>
                            <li><a href="/"> Ceiling Lights  </a></li>
                            <li><a href="/"> Wall Lights  </a></li>
                            <li><a href="/"> Bulbs and Batten </a></li>
                            
                        </ul>
                        </div>
                        <div className="rowone">
                            <header>Table Lamps</header>  
                            <ul className="mega-links a">
                                <li><a href="/">Table Lamps </a></li>
                                <li><a href="/">Study Lamps</a></li>
                                <li><a href="/">Table Lanterns </a></li>
                                <li><a href="/"> Filament Bulbs</a></li>
                            
                            </ul>
                        </div>
                        <div className="rowone">
                        <img alt="imgtag" className="d"src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Lighting.png"/>
                        </div>
{/*         
                        <div className="one">
                        <h1 className="brand">Top Brands</h1>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Philips-Logo.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Kapoor-E-illuminations.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Eliante.jpg"/>
                        </div> */}
        
                        
                        </div>  
                    </div></li>
                <li><a href="/">Appliances</a>
                    <div className="mega-box">
                        <div className="content">
                            <div className="rowone">
                            <header>Heating & Cooling</header>  
                            <ul className="mega-links a">
                                <li><a href="/">Air Conditioners</a></li>
                                <li><a href="/">Air Coolers</a></li>
                                <li><a href="/">Fans</a></li>
                                <li><a href="/">Water Geysers </a></li>
                                <li><a href="/">  Room Heaters</a></li>
                            </ul>
                            </div>
                        
                        
                        <div className="rowone">
                        <header>Chimneys</header>  
                        <ul className="mega-links b">
                            <li><a href="/"> Wall-Mounted </a></li>
                            <li><a href="/"> Island Chimneys  </a></li>
                            <li><a href="/"> Designer Chimneys  </a></li>
                            <li><a href="/">  Straight Line </a></li>
                            
                        </ul>
                        </div>
                        <div className="rowone">
                            <header>OTGs</header>  
                            <ul className="mega-links b">
                                <li><a href="/">Microwaves </a></li>
                                <li><a href="/">Ovens & OTGs</a></li>
                                <li><a href="/">Fryers  </a></li>
                                
                            </ul>
                        </div>
                        <div className="rowone">
                        <img alt="imgtag" className="d"src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021_hover_Appliances.png"/>
                        </div>
        
                        {/* <div className="one">
                        <h1 className="brand">Top Brands</h1>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Philips-Logo.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/WonderChef-Logo.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Atomberg-logo.jpg"/>
                        <img alt="imgtag" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Candes-Logo.jpg"/>
                        </div> */}
        
                        
                        </div>  
                    </div></li>
                <li><a href="/"> Modular</a>
                    <div className="mega-box">
                        <div className="content">
                            <div className="rowone">
                            <header>Modular Kitchens</header>  
                            <ul className="mega-links a">
                                <li><a href="/">Straight Kitchen </a></li>
                                <li><a href="/">L Shaped Kitchen </a></li>
                                <li><a href="/">Parallel Kitchen</a></li>
                                <li><a href="/"> U Shaped Kitchen </a></li>
                                <li><a href="/">Island Kitchen </a></li>
                            </ul>
                            </div>
                        
                        <div className="rowone">
                        <header>Modular Wardrobes</header>  
                        <ul className="mega-links b">
                            <li><a href="/"> Hinged Wardrobes </a></li>
                            
                        </ul>
                        </div>
                        
                        <div className="rowone">
                        <img alt="imgtag" className="d1"src="https://ii2.pepperfry.com/media/wysiwyg/banners/Modular%206.png" />
                        </div>
        
                        </div>  
                    </div></li>
                    
            </ul>   
            <div className="last">
                <p>Need Help?</p>
            </div>
            </div>
        </nav>

    </div> 
</div>

    )
}
