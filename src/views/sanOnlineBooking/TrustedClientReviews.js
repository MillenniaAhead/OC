import React from "react"
import { Button, Modal } from "@mui/material"
import { Box } from "@mui/system"

const TrustedClientReviews = () => {
    return (
        <Modal open="true">
          <Box height={"100%"} width={"100%"} backgroundColor="#E5E5E5">
            <Box
              position="absolute"
              width="390px"
              height="185px"
              left="409px"
              bottom="760.84px"
              borderRadius="249px 249px 0 0"
              backgroundColor="rgba(247, 138, 60, 0.3)"
              sx={{
                transform: "rotate(-180deg)"
              }}
            ></Box>
    
            <Box
              sx={{
                boxSizing: "border-box",
                position: "absolute",
                width: "378px",
                height: "364px",
                left: "406px",
                top: "200px",
                background: "#FFFFFF",
                border: "2px solid #D9D9D9",
                boxShadow: "0px 4px 40px rgba(217, 217, 217, 0.4)",
                borderRadius: "28px"
              }}
            ></Box>

            <Box
              sx={{
                boxSizing: "border-box",
                position: "absolute",
                width: "284px",
                height: "120px",
                left: "656.93px",
                top: "168px",
                background: "#FFFFFF",
                border: "2px solid #D9D9D9",
                boxShadow: "0px 4px 40px rgba(217, 217, 217, 0.5)",
                borderRadius: "61px"
              }}
            ></Box>

            <Box
            sx={{
                boxSizing: "border-box",
                position: "absolute",
                width: "162px",
                height: "76px",
                left: "519px",
                top: "445.8px",
                background: "#FFFFFF",
                border: "2px solid #D9D9D9",
                borderRadius: "50px"
            }}  
            >
            </Box>
    
    
            <Box
              sx={{
                position: "absolute",
                width: "471px",
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
              Trusted client
reviews
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
            >
            Build new client’s trust by allowing existing clients
to leave real reviews and ratings that will show on
your profile.
            </Box>
    
            <Button
              sx={{
                position: "absolute",
                width: "416px",
                height: "60px",
                left: "752px",
                top: "813.71px",
                backgroundColor: "#4E4E4E",
                borderRadius: "6px"
              }}
            >
              <Box
                sx={{
                  width: "146px",
                  height: "29px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "19px",
                  lineHeight: "29px",
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#4E4E4E"
                }}
              >
                Get started
              </Box>
            </Button>
    
            <Box
              sx={{
                position: "absolute",
                width: "500px",
                height: "250px",
                left: "1436px",
                top: "830px",
                borderRadius: "250px 250px 0 0",
                backgroundColor: "rgba(27, 183, 11, 0.2)",
                transform: "rotate(-120.73deg)"
              }}
            ></Box>
    
            <Box
              sx={{
                position: "absolute",
                width: "16px",
                height: "16px",
                left: "921.93px",
                top: "757.81px",
                backgroundColor: "#D9D9D9",
                borderRadius: "50%"
              }}
            ></Box>
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
            ></Box>
            <Box
              sx={{
                position: "absolute",
                width: "16px",
                height: "16px",
                left: "982.07px",
                top: "757.81px",
                backgroundColor: "#1BB70B",
                borderRadius: "50%"
              }}
            ></Box>
          </Box>
        </Modal>
      )
    
}

export default TrustedClientReviews