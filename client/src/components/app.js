import React, { useState } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios'

const App = () => {

  const [files, setfiles] = useState([])


  const handleChange = (data) => {
    console.log(data)
    setfiles([...files, data])
  }
  const handleClick = async () => {
    console.log(...files)
   const response = await axios.post('http://localhost:5000/', [...files])
  }


  return (
    <>
      <DropzoneArea
        onChange={ handleChange.bind(this)}
      />
      <label htmlFor="contained-button-file">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup size="small" aria-label="huge outlined button group">
                  <Button onClick={handleClick}>Submit</Button>

                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          </Grid>

      </label>
    </>

      )
    }
    
    
export default App