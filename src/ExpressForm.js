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

class ExpressForm extends React.Component {
  async componentDidMount() {
    const response = await axios.get("http://localhost:3437/api")
    console.log(response)
  }

  state = {
    fqdn: '',
    adminUsername: '',
    adminPassword: '',
    regionName: '',
    tenantName: 'service',
    manageHostname: false,
    manageDnsResolver: false,
    dnsResolver1: '8.8.8.8',
    dnsResolver2: '8.8.4.4',
    proxyUrl: '',
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
    const response = await axios.post("http://localhost:3437/express", this.state)
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
              id="fqdn"
              name="fqdn"
              label="DU FQDN"
              value={this.state.fqdn}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="adminUsername"
              name="adminUsername"
              label="Admin Username"
              value={this.state.adminUsername}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="adminPassword"
              name="adminPassword"
              label="Admin Password"
              value={this.state.adminPassword}
              onChange={this.handleChange}
              margin="normal"
              type="password"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="regionName"
              name="regionName"
              label="Region Name"
              value={this.state.regionName}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="tenantName"
              name="tenantName"
              label="Tenant Name"
              value={this.state.tenantName}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <FormControl id="manageHostname">
              <FormControlLabel
                label="Manage Hostname"
                control={
                  <Checkbox
                    checked={this.state.manageHostname}
                    onChange={this.handleChecked}
                  />
                }
                name="manageHostname"
              />
            </FormControl>
          </div>
          <div>
            <FormControl id="manageDnsResolver">
              <FormControlLabel
                label="Manage DNS Resolver"
                control={
                  <Checkbox
                    checked={this.state.manageDnsResolver}
                    onChange={this.handleChecked}
                  />
                }
                name="manageDnsResolver"
              />
            </FormControl>
          </div>
          <div>
            <TextField
              fullWidth
              id="dnsResolver1"
              name="dnsResolver1"
              label="DNS Resolver 1"
              value={this.state.dnsResolver1}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="dnsResolver2"
              name="dnsResolver2"
              label="DNS Resolver 2"
              value={this.state.dnsResolver2}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="proxyUrl"
              name="proxyUrl"
              label="Proxy URL"
              value={this.state.proxyUrl}
              onChange={this.handleChange}
              margin="normal"
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

export default withStyles(styles)(ExpressForm)
