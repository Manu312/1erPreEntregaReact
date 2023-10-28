import React from 'react';
import CardWidget from './CardWidget';
import { Menu,MenuButton, MenuList, MenuItem, Box,Flex, Spacer, Heading,ButtonGroup,Button} from '@chakra-ui/react';

const NavBar = () => {
    return(
        <div>
            <Flex justifyContent='space-evenly' w='100%'>
                <Box w='100px'h='10'>
                    <h3>E-Commerse</h3>
                </Box>
                <Spacer/>
                <Box w='130px'h='10'>
                    <Menu>
                        <MenuButton>
                        Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Indumentaria</MenuItem>
                            <MenuItem>Calzado</MenuItem>
                            <MenuItem>Formal</MenuItem>
                            <MenuItem>Accesorios</MenuItem>
                            <MenuItem>Camisetas</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer/>
                <Box  w='100px'h='10'>
                    <CardWidget/>
                </Box>
            </Flex>
        </div>
    )
}
export default NavBar;