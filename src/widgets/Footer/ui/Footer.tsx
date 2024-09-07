
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FooterIcon1 from '../../../shared/assets/footer-icon1.png';
import FooterIcon2 from '../../../shared/assets/footer-icon2.png';
import FooterIcon3 from '../../../shared/assets/footer-icon3.png';
import FooterIcon4 from '../../../shared/assets/footer-icon4.png';
import FooterIcon5 from '../../../shared/assets/footer-icon5.png';
import Logo from '../../../shared/assets/Logo-eco.png';


const paymentLinks = [FooterIcon1, FooterIcon2, FooterIcon3, FooterIcon4, FooterIcon5];

const Footer = () => {
    return (
        <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <img src={Logo} alt="logo" />
            <Typography variant="h6" color="text.primary" gutterBottom>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                <Link href="tel:1234567890">(219) 555-0114</Link>
                <span>or</span>
                <Link href="mailto:proxy@gmail.com">Proxy@gmail.com</Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
             My Account
            </Typography>
            <Link href="#" color="inherit" display="block">My Account</Link>
            <Link href="#" color="inherit" display="block">Order History</Link>
            <Link href="#" color="inherit" display="block">Shoping Cart</Link>
            <Link href="#" color="inherit" display="block">Wishlist</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
            Helps
            </Typography>
            <Link href="#" color="inherit" display="block"> Contact</Link>
            <Link href="#" color="inherit" display="block">Faqs</Link>
            <Link href="#" color="inherit" display="block">Terms & Condition</Link>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
            Proxy
            </Typography>
            <Link href="#" color="inherit" display="block">About</Link>
            <Link href="#" color="inherit" display="block">Shop</Link>
            <Link href="#" color="inherit" display="block">Product</Link>
            <Link href="#" color="inherit" display="block">Track Order</Link>   
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
          <Typography variant="subtitle1" color="text.primary" gutterBottom>
          Categories
            </Typography>
            <Link href="#" color="inherit" display="block">Fruit & Vegetables</Link>
            <Link href="#" color="inherit" display="block">Meat & Fish</Link>
            <Link href="#" color="inherit" display="block">Bread & Bakery</Link>
            <Link href="#" color="inherit" display="block">Beauty & Health</Link>
          </Grid>
        </Grid>
        <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 4, py: 2, alignItems: 'center', borderTop: '1px solid', borderColor: 'divider'}}>
            <Typography variant="body2" color="text.secondary">
                Ecobazar eCommerce © 2021. All Rights Reserved
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between', gap: 2}}>
                {paymentLinks.map((link, index) => (
                    <IconButton key={index} size="small">
                        <img src={link} alt="Payment Link" />
                    </IconButton>
                ))}
            </Box>
        </Box>        
      </Container>
    </Box>
    );
};

export default Footer;