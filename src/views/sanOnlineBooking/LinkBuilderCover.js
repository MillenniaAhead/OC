import React from "react"
import Box from '@mui/material/Box'

import MarketPlace from "./MarketPlace"
import { AccessToOutletControlModal } from "./AccessToOutletControlModal"
import { WebsiteAndSocialMediaTools } from "./WebsiteAndSocialMediaTools"
import TrustedClientReviews from "./TrustedClientReviews"
import { AddYourBusinessInfo } from "./AddYourBusinessInfo"
import { Button, Link } from "@mui/material"
import ReserveWithGoogle from "./ReserveWithGoogle"
import FacebookAndInstagramBooking from "./FacebookAndInstagramBooking"
import { LinkBuilder } from "./LinkBuilder"


const LinkBuilderCover = () => {

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
        <Box height={"100%"} width="100%"  borderRadius={"8px"} overflow='hidden'  display={"flex"} justifyContent="center" alignItems="center"
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
        <Box height={"100%"} width="100%" borderRadius={"8px"} overflow='hidden' display={"flex"} justifyContent="center" alignItems="center"
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
        <Box height={"100%"} width="100%" borderRadius={"8px"} backgroundColor=" rgba(27, 183, 11, 0.3)" overflow='hidden' display={"flex"} justifyContent="center" alignItems="center"
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
        <LinkBuilder></LinkBuilder>
      </Box>
    </Box>
  )
}

export default LinkBuilderCover