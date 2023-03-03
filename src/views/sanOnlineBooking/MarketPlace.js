import React from "react"
import Box from "@mui/material/Box"
import CheckIcon from "@mui/icons-material/Check"
import { Button } from "@mui/material"

const MarketPlace = () => {
    return (
        <Box
          height={"100vh"}
          width={"100vw"}
          backgroundColor="rgba(217, 217, 217, 0.15)"
        >
          <Box
            position="absolute"
            width="1301.44px"
            height="1229.44px"
            left="56%"
            top="-55%"
            backgroundColor="rgba(27, 183, 11, 0.3)"
            borderRadius={"50%"}
          ></Box>
          <Box
            position="absolute"
            width="560px"
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
            Attract new clients with online bookings
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
            Join the world’s largest beauty and wellness marketplace
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
              Get your business listed on the Outlet Controler app
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
              Reach thousands of new clients who visit Outlet Control every day
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
              Free up time and get your clients self-booking online 24/7
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
            height: "564px",
            left: "1000px",
            top: "63px",
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
            height: "594px",
            left: "1200px",
            top: "150.33px",
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
            height: "224px",
            left: "1200px",
            top: "150.33px",
            background: "url(Rectangle35.png)",
            borderRadius: "10px 10px 0px 0px"
          }}>
          </Box>
          <Box
          sx={{
            position: "absolute",
            width: "187px",
            height: "24px",
            left: "1220px",
            top: "390.33px",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#000000"
          }}>Miller’s Barbers
          </Box>
          <Box
          sx={{
            position: "absolute",
            width: "247px",
            height: "17px",
            left: "1220px",
            top: "430.33px",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "17px",
            letterSpacing: "0.02em",
            color: "#000000"
          }}>192 Bleecker St, New York, United States
          </Box>

          <Box
          sx={{
            position: "absolute",
            width: "128px",
            height: "40px",
            left: "1280px",
            top: "690px",
            background: "#4E4E4E",
            borderRadius: "4px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>Book Now
          </Box>

        </Box>
    )
}

export default MarketPlace
