import React, { useState } from "react";
import { Button, Modal, Typography } from "antd";
import { NavLink } from "react-router-dom";
type AuthModalProp = {
  open: boolean;
};
const AuthModal = ({ open }: AuthModalProp) => {
  return (
    <>
      <Modal
        open={open}
        
      >
        <Typography>Please </Typography>
        <NavLink to={"sign-in"}>Sign in</NavLink>
        <Typography>Don't have an account ? </Typography>
        <NavLink to={"sign-up"}>Sign up</NavLink>
      </Modal>
    </>
  );
};

export default AuthModal;
