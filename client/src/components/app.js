import React, { useState } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios'

const App = () => {

  const [file, setfile] = useState({ selectedFile: null})
  const [file2, setfile2] = useState(null)

  const handleChange = (event) => {
    // console.log(event.target.files[0])
    setfile({selectedFile: event.target.files[0]})
  }
  const handleClick = async () => {


    const data = new FormData()
    data.append('file', file.selectedFile, 'file')
    // console.log(file.selectedFile);

    const response = await axios.post('http://localhost:5000/upload', data)
    console.log(response.data)

    setfile2(response.data)
    
  }
console.log(file2);

  return (
    <>
      {/* <DropzoneArea
        name='file'
        onChange={handleChange.bind(this)}
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
        </Grid> */}

      {/* </label> */}

      <input type="file" name='file' onChange={handleChange} />
      <button type="submit" onClick={handleClick}>submit</button>
      <img type={file} src={file2 } />
    </>

  )
}


export default App