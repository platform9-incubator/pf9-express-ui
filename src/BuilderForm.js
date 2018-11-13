import React from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  container: {
    padding: '20px'
  }
})

class BuilderForm extends React.Component {
  state = {
    instanceName: '',
    imageName: '',
    imageUser: '',
    flavor: '',
    networkIds: '',
    sshKey: '',
    securityGroup: 'default',
    neutron: false,
    cinder: false,
    glance: false,
    openstackRc: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChecked = (e) => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { history } = this.props
    const response = await axios.post("http://localhost:3437/builder", this.state)
    console.log(response)
    history.push('/')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Typography variant="title" gutterBottom>
          DU Settings
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              fullWidth
              id="instanceName"
              name="instanceName"
              label="Instance Name"
              value={this.state.instanceName}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="imageName"
              name="imageName"
              label="Image Name"
              value={this.state.imageName}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="imageUser"
              name="imageUser"
              label="Image User"
              value={this.state.imageUser}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="flavor"
              name="flavor"
              label="Flavor Name"
              value={this.state.flavor}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="networkIds"
              name="networkIds"
              label="Network IDs"
              value={this.state.networkIds}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="sshKey"
              name="sshKey"
              label="SSH Key"
              value={this.state.sshKey}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <FormControl id="neutron">
              <FormControlLabel
                label="Neutron"
                control={
                  <Checkbox
                    checked={this.state.neutron}
                    onChange={this.handleChecked}
                  />
                }
                name="neutron"
              />
            </FormControl>
          </div>
          <div>
            <FormControl id="cinder">
              <FormControlLabel
                label="Cinder"
                control={
                  <Checkbox
                    checked={this.state.cinder}
                    onChange={this.handleChecked}
                  />
                }
                name="cinder"
              />
            </FormControl>
          </div>
          <div>
            <FormControl id="glance">
              <FormControlLabel
                label="Glance"
                control={
                  <Checkbox
                    checked={this.state.glance}
                    onChange={this.handleChecked}
                  />
                }
                name="glance"
              />
            </FormControl>
          </div>
          <div>
            <TextField
              fullWidth
              id="openstackRc"
              name="openstackRc"
              label="OpenStack RC"
              value={this.state.openstackRc}
              onChange={this.handleChange}
              margin="normal"
              multiline
              rows="8"
            />
          </div>
          <div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(BuilderForm)
