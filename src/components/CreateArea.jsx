import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function CreateArea(props) {
    const [qr, setQr] = useState({
        url : "",
        fgColor : "#000000",
        bgColor : "#FFFFFF"
    })
    const [alert, setAlert] = useState(false);

    function handleChange(event) {
        setAlert(false);
        const {value, name} = event.target;
        setQr((prevQr) =>{
            return {
                ...prevQr,
                [name] : value,
            }
        })
    }

    function submitQr(){
        if (qr.url === "") {
            setAlert(true)       
        } else {
        props.onAdd(qr);
        }
    }

    function clearQR(){
        props.onClear();
        setQr(
            {
                url : "",
                fgColor : "#000000",
                bgColor : "#FFFFFF",
            }
        );
    }


  return (
    <div>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 ,width: '25ch'} }}
      noValidate
      autoComplete="off"
    >
      <TextField  error={alert} id="outlined-basic" name="url" label="Url" placeholder='Insert your URL' variant="outlined" value={qr.url} onChange={handleChange}  slotProps={{
            inputLabel: {
              shrink: true,
            },
          }} required/>
      <TextField id="outlined-basic" name="bgColor" type="color" label="Color" variant="outlined" value={qr.bgColor} onChange={handleChange}/>
      <TextField id="outlined-basic" name="fgColor" type="color" label="Background Color" variant="outlined" value={qr.fgColor} onChange={handleChange} />
      <div className="button">
      <Button variant="contained" color="success"onClick={submitQr}>Create</Button>
      <Button variant="contained" color="error" onClick={clearQR}>Clear</Button>
      </div>
    </Box>

    </div>
  );
}