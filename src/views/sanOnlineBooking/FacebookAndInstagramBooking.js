import React from "react"
import Box from "@mui/material/Box"
import CheckIcon from "@mui/icons-material/Check"
import { Button } from "@mui/material"

const FacebookAndInstagramBooking = () => {
    return (
        <Box
          height={"100%"}
          width={"100%"}
          backgroundColor="rgba(217, 217, 217, 0.15)"
        >
          <Box
            position="absolute"
            width="1301.44px"
            height="1229.44px"
            left="56%"
            top="-55%"
            backgroundColor="rgba(255, 187, 11, 0.5)"
            borderRadius={"50%"}
          ></Box>
          <Box
            position="absolute"
            width="760px"
            height="120px"
            left="240px"
            top="270px"
            // fontFamily={""}
            fontStyle="normal"
            fontWeight="800"
            fontSize="45px"
            lineHeight="60px"
            letterSpacing="0.02em"
            color="#000000"
          >
            Get booked on Facebook
and Instagram
          </Box>
          <Box
            position="absolute"
            width="800px"
            height="29px"
            left="240px"
            top="420px"
            // font-family: 'SF Pro Display';
            fontStyle="normal"
            fontWeight="500"
            fontSize="24px"
            lineHeight="29px"
            /* identical to box height */
    
            letterSpacing="0.02em"
            color="#000000"
          >
           Add online booking to your social media pages
          </Box>
          <Box
            position="absolute"
            width="900px"
            height="40px"
            left="230px"
            top="490px"
            display={"flex"}
            justifyContent="space-evenly"
          >
            <CheckIcon fontSize="medium"></CheckIcon>
            <Box
              width="90%"
              height="100%"
              fontStyle="normal"
              fontWeight="400"
              fontSize="21px"
              lineHeight="25px"
              color="#000000"
            >
              FREE online bookings for all clients, both new and returning
            </Box>
          </Box>
          <Box
            position="absolute"
            width="900px"
            height="40px"
            left="230px"
            top="525px"
            display={"flex"}
            justifyContent="space-evenly"
          >
            <CheckIcon fontSize="medium"></CheckIcon>
            <Box
              width="90%"
              height="100%"
              fontStyle="normal"
              fontWeight="400"
              fontSize="21px"
              lineHeight="25px"
              color="#000000"
            >
              Connect your pages in moments with Outletcontrol’s official integration
            </Box>
          </Box>
          <Box
            position="absolute"
            width="900px"
            height="40px"
            left="230px"
            top="560px"
            display={"flex"}
            justifyContent="space-evenly"
          >
            <CheckIcon fontSize="medium"></CheckIcon>
            <Box
              width="90%"
              height="100%"
              fontStyle="normal"
              fontWeight="400"
              fontSize="21px"
              lineHeight="25px"
              color="#000000"
            >
             Promote your Book Now button on social posts and ads
            </Box>
          </Box>
    
          <Box
            width="600px"
            height="90px"
            position="absolute"
            left="230px"
            top="650px"
            display="flex"
            justifyContent={"space-around"}
          >
            <Box width="45%" height="90%" borderRadius={"10px"} overflow="hidden">
              <Button
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(78, 78, 78, 1)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "27px",
                  lineHeight: "32px",
                  color: "#FFFFFF",
                  ":hover" : {
                    color: "black"
                  }
                }}
              >
                Start Now
              </Button>
            </Box>
            <Box width="40%" height="90%">
              <Button
                sx={{
                  width: "100%",
                  height: "100%",
                  
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "27px",
                  lineHeight: "32px",
                  color: "#1BB70B"
                }}
                variant="text"
              >
                Learn More
              </Button>
            </Box>
          </Box>
    
          <Box
          sx={{
            position: "absolute",
            width: "300px",
            height: "594px",
            top: "63px",
            left: "1200px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.3)",
            borderRadius: "20px"
        }}
        >
          </Box>
          <Box
          sx={{
            position: "absolute",
            width: "300px",
            height: "564px",
            left: "1030px",
            top: "150.33px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.3)",
            borderRadius: "20px"
          }}
          >
          </Box>
    
        </Box>
      )
}

export default FacebookAndInstagramBooking