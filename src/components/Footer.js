import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/gymLogo-logo-white.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FB2576">
      <Stack gap="40px" alignItems="center" px="40px" pt="16px">
        <img src={Logo} alt="logo" width="64px" height="64" />
        <Typography variant="h6" pb="16px">
          Omega Fitness | Giovanni Arizola
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
