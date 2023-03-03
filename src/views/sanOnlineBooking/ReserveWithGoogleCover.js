import React from "react"
import Box from '@mui/material/Box'
import { Link } from "@mui/material"
import ReserveWithGoogle from "./ReserveWithGoogle"

const ReserveWithGoogleCover = () => {
    return (
        <Box width={"100vw"} height={"100vh"}>
     <Box
      position={"absolute"}
      width="13%"
      height="100%"
      display={'flex'}
      flexDirection={"column"}
      alignItems='center'
      margin={"10px"}
      // padding="10px"
      >
         <Box height={"7%"} width="90%" margin={"6px"} borderRadius={"8px"} overflow='hidden' display={"flex"} justifyContent="center" alignItems="center"
         sx={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "26px",
          color: "black"
        }}
         >
          Online Booking
        </Box>

        <Link href="/sanOnlineBooking" height={"7%"} width="90%" margin={"6px"} underline="none" color={'black'}>
        <Box height={"100%"} width="100%"  borderRadius={"8px"} overflow='hidden' display={"flex"} justifyContent="center" alignItems="center"
            sx={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "26px",
              ":hover": {background: " rgba(27, 183, 11, 0.3)", color: "black"}

            }}
          >
          Marketplace profile
        </Box>
        </Link>

        <Link href="/sanOnlineBooking/reserveWithGoogle" height={"7%"} width="90%" margin={"6px"} underline="none" color={'black'}>
        <Box height={"100%"} width="100%" borderRadius={"8px"} overflow='hidden' backgroundColor=" rgba(27, 183, 11, 0.3)" display={"flex"} justifyContent="center" alignItems="center"
            sx={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "26px",
              ":hover": {background: " rgba(27, 183, 11, 0.3)", color: "black"}
            }}
          >
            Reserve with Google
        </Box>
        </Link>

        <Link href="/sanOnlineBooking/facebookAndInstagramBooking" height={"7%"} width="90%" margin={"6px"} underline="none" color={'black'}>
        <Box height={"100%"} width="100%" borderRadius={"8px"} overflow='hidden' display={"flex"} justifyContent="center" alignItems="center"
            sx={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "26px",
              ":hover": {background: " rgba(27, 183, 11, 0.3)", color: "black"}
            }}
          >
          Facebook And Instagram Bookings
        </Box>
        </Link>
        
        <Link href="/sanOnlineBooking/linkBuilder" height={"7%"} width="90%" margin={"6px"} underline="none" color={'black'}>
        <Box height={"100%"} width="100%" borderRadius={"8px"} overflow='hidden' display={"flex"} justifyContent="center" alignItems="center"
            sx={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "26px",
              ":hover": {background: " rgba(27, 183, 11, 0.3)", color: "black"}
            }}
          >
          Link Builder
        </Box>
        </Link>
      </Box>
      
          <Box position="absolute" width={"1650px"} height="100%" right="0px" borderLeft={"1px solid"}>
                <ReserveWithGoogle></ReserveWithGoogle>
          </Box>
        </Box>
      )
}

export default ReserveWithGoogleCover