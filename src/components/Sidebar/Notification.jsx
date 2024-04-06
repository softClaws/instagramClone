import {Link, Tooltip, Box} from '@chakra-ui/react'
import { NotificationsLogo } from '../../assets/constants'
import {Link as RouterLink} from 'react-router-dom'

const Notifications = () => {
  return (
    <Tooltip 
                    hasArrow
                    label ={"Notifications"}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{base: "block",md: "none"}}
                    >
                        <Link 
                        display={"flex"}
                        to ={"/"}
                        as = {RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg: "whiteAlpha.400"}}
                        borderRadius={4}
                        p={2}
                        w={{base: 10, md: "full"}}
                        justifyContent={{base: "center", md: "flex-start"}}
                        >
                          <NotificationsLogo size={25}/>
                          <Box display = {{base: "none", md: "block"}}> Notifications
                          </Box>
                        </Link>

                    </Tooltip>
  )
}

export default Notifications