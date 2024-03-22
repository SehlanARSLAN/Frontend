import { useState } from 'react'
import Drawers from '@mui/material/Drawer';
const Drawer = () => {
    const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
    const openCartDrawer = () => {
        setIsCartDrawerOpen(true);
      };
    
      const closeCartDrawer = () => {
        setIsCartDrawerOpen(false);
      };
      const ShoppingCartDrawer = ({ children }) => (
        <Drawers anchor="right" open={isCartDrawerOpen} onClose={closeCartDrawer}>
          {children}
        </Drawers>
      );
    
      return { openCartDrawer, closeCartDrawer, ShoppingCartDrawer };
    };

export default Drawer
