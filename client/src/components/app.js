import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button, TextField } from '@material-ui/core';

const App = () => {

  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Button variant="contained">
        Default
      </Button>
      <input
        accept="image/*"
       
        id="contained-button-file"
        multiple
        type="file"
      />
      </Container>
    </React.Fragment>
  )
}

export default App