import React from 'react'
import colors from '@/utils/colors';
import { IoMdMenu } from "react-icons/io"
import MenuNavigationBar from '@/utils/navMenu';
import IconButtonComponent from '../atoms/IconButton';
import { Box, List, ListItem, SwipeableDrawer } from '@mui/material';
import { RiCloseCircleLine } from "react-icons/ri";
import GeneralButton from '../atoms/GeneralButton';
import { useRouter } from 'next/navigation';
import AuthButton from '../molecules/AuthButton';

const MenuMobile = () => {
    const router = useRouter();
    const [isOpenMenuRight, setIsOpenMenuRight] = React.useState(false);
    const openMenuRight = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setIsOpenMenuRight(open);
    };

    return (
        <Box>

            <IconButtonComponent icon={<IoMdMenu size={28} color={colors.white} />} onClick={openMenuRight(true)} />

            <SwipeableDrawer
                anchor={'right'}
                open={isOpenMenuRight}
                onClose={openMenuRight(false)}
                onOpen={openMenuRight(true)}
                PaperProps={{
                    sx: { width: "80%", backgroundColor: colors.primaryDark },
                }} >
                <Box >
                    <List >
                        <ListItem>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', justifyContent: 'space-between', width: '100%', borderBottom: '1px solid', borderColor: colors.primary }}>
                                <AuthButton />

                                <IconButtonComponent icon={<RiCloseCircleLine size={32} color={colors.white} />} onClick={openMenuRight(false)} />
                            </Box>
                        </ListItem>
                        {
                            MenuNavigationBar.map((item, index) => (
                                <ListItem key={index} >
                                    <GeneralButton color={colors.white} variant='text'
                                        onClick={() => {
                                            setIsOpenMenuRight(false)
                                            router.push(item.path);
                                        }} >
                                        {item.title}
                                    </GeneralButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </SwipeableDrawer>
        </Box>
    )
}

export default MenuMobile