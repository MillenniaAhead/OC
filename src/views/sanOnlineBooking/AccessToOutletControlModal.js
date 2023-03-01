import React from "react"
import { Button, Modal } from "@mui/material"
import { Box } from "@mui/system"

export const AccessToOutletControlModal = () => {
  return (
    <Modal open="true">
      <Box height={"100%"} width={"100%"} backgroundColor="#E5E5E5">
        {/* <Button >
            <Box
            border="1px solid"
            height="15px"
            width="18px"
            fontWeight="700" 
            fontSize="52px"
            color="black"
            >X</Box>
        </Button> */}
        <Box
          position="absolute"
          width="500px"
          height="249px"
          left="20.95px"
          top="79.59px"
          borderRadius="249px 249px 0 0"
          backgroundColor="rgba(247, 138, 60, 0.3)"
          sx={{
            transform: "rotate(-124.08deg)"
          }}
        ></Box>

        <Box
        sx={{
            position: "absolute",
            width: "500px",
            height: "322px",
            left: "392px",
            top: "148px",
            backgroundColor: "#E5E5E5",
            border: "2px solid #D9D9D9",
            boxShadow: "12px 20px 40px rgba(217, 217, 217, 0.4)",
            borderRadius: "20px"
        }}  
        ></Box>
            
        <Box
        sx={{
            boxSizing: "border-box",
            position: "absolute",
            width: "276px",
            height: "276px",
            left: "504px",
            top: "329.95px",
            background: "#E5E5E5",
            border: "1px solid #D9D9D9",
            boxShadow: "0px 4px 50px rgba(217, 217, 217, 0.4)",
            borderRadius: "28px"
            }}
        >    
        </Box>

        <Box
        sx={{
            position: "absolute",
            width: "97px",
            height: "19px",
            left: "603.5px",
            top: "484px",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "19px",
            textAlign: "center",
            letterSpacing: "0.02em",
            color: "rgba(0, 0, 0, 0.7)"
        }}          
        >Your Salon
        </Box>

        <Button
        sx={{
            position: "absolute",
            width: "162px",
            height: "57px",
            left: "561.57px",
            top: "570.97px",
            backgroundColor: "#1BB70B",
            borderRadius: "6px"
        }} 
        >
            <Box
            sx={{
                width: "119px",
                height: "25px",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "19px",
                lineHeight: "25px",
                textAlign: "center",
                letterSpacing: "0.02em",
                color: "#FFFFFF"
            }}
            >Book now
            </Box>
        </Button>

        <Box
        sx={{
            position: "absolute",
            width: "671px",
            height: "152px",
            left: "976.07px",
            top: "278px",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "55px",
            lineHeight: "76px",
            color: "#000000"
        }}  
        >
            Access to Outlet Control
Marketplace
        </Box>

        <Box
        sx={{
            position: "absolute",
            width: "670px",
            height: "99px",
            left: "976.07px",
            top: "434px",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "28px",
            lineHeight: "33px",
            letterSpacing: "0.02em",
            color: "#000000"
        }}          
        >Create your own online shop and get discoveres
        by new clients near you 24/7 on OutletControl.com and
        the Outlet Control app.</Box>

        <Button
        sx={{
            position: "absolute",
            width: "416px",
            height: "60px",
            left: "752px",
            top: "813.71px",
            backgroundColor: "#4E4E4E",
            borderRadius: "6px"
        }}>
            <Box
            sx={{
                width: "146px",
                height: "29px",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "19px",
                lineHeight: "29px",
                textAlign: "center",
                color: "white"
            }}   
            >Get started
            </Box>
        </Button>

        <Box
          sx={{
              position: "absolute",
              width: "500px",
              height: "250px",
              left: "1251.52px",
              top: "685.75px",
              borderRadius: "250px 250px 0 0",
            backgroundColor: "rgba(27, 183, 11, 0.2)",
            transform: "rotate(-9.34deg)"
          }}
        ></Box>

        <Box
        sx={{
            position: "absolute",
            width: "16px",
            height: "16px",
            left: "921.93px",
            top: "757.81px",
            backgroundColor: "#1BB70B",
            borderRadius: "50%"
        }} 
        >
        </Box>
        <Box
        sx={{
            position: "absolute",
            width: "16px",
            height: "16px",
            left: "951.93px",
            top: "757.81px",
            backgroundColor: "#D9D9D9",
            borderRadius: "50%"
        }} 
        >
        </Box>
        <Box
        sx={{
            position: "absolute",
            width: "16px",
            height: "16px",
            left: "982.07px",
            top: "757.81px",
            backgroundColor: "#D9D9D9",
            borderRadius: "50%"
        }} 
        >
        </Box>

      </Box>
    </Modal>
  )
}
