import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import InputForm from './form';
import { RxCross2 } from 'react-icons/rx';

import React from 'react';
import { Button } from '@nextui-org/react';

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} fullWidth maxWidth="sm">
      <DialogTitle>
        {/* <div className="flex"> */}
        Enter Details
        {/* </div> */}
      </DialogTitle>
      <DialogContent dividers>
        <InputForm setOpenPopup={setOpenPopup} />
      </DialogContent>
    </Dialog>
  );
}
