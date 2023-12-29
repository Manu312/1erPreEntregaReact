import React from 'react';
import CardWidget from './CardWidget';
import { Menu,MenuButton, MenuList, MenuItem, Box,Flex, Spacer, Heading,ButtonGroup,Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <Flex justifyContent='space-evenly' w='100%'>
                <Box w='100px'h='10'>
                    <Link to={"/About"}>
                        <h3>E-Commerse</h3>
                    </Link>
                </Box>
                <Spacer/>
                <Box w='130px'h='10'>
                    <Menu>
                        <MenuButton>
                        Categorias
                        </MenuButton>
                        <MenuList>
                            <Link to="/category/Indumentaria">
                                <MenuItem>Indumentaria</MenuItem>
                            </Link>
                            <Link to="/category/zapatillas">
                                <MenuItem>Calzado</MenuItem>
                            </Link>
                            <Link to="/category/Formal"> 
                                <MenuItem>Formal</MenuItem>
                            </Link>
                            <Link to="/category/Accesorios">
                                <MenuItem>Accesorios</MenuItem>
                            </Link>
                            <Link to="/category/Camisetas">
                                <MenuItem>Camisetas</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer/>
                <Box  w='100px'h='10'>
                    <Link to={"/Cart"}>
                        <CardWidget/>
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}
export default NavBar;