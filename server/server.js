process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')

var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/api', function (req, res) {
  res.send('test response')
})

app.post('/express', function (req, res) {
  console.log(req.body)
  const fileContents = Object.keys(req.body).map((key) => `${key}|${req.body[key]}`).join('\n')
  fs.writeFile('pf9-express.conf', fileContents, (err) => {
    if (err) {
      console.log(err)
      res.status(500).send('error writing to file')
    } else {
      res.send('ok')
    }
  })
})

app.post('/builder', function (req, res) {
  console.log(req.body)
  const { openstackRc, ...args } = req.body
  const rolesString = args.neutron ? 'dhcp,snat' : ''
  const csvContents = `${args.instanceName}|${args.imageName}:${args.imageUser}|${args.flavor}|${args.networkIds}||${args.sshKey}|${args.securityGroup}|${rolesString}`
  fs.writeFile('openstack-rc.rc', openstackRc, (err) => {
    if (err) {
      console.log(err)
    }
    fs.writeFile('host-csv.csv', csvContents, (err) => {
      if (err) {
        console.log(err)
      }
      res.send('wrote files')
    })
  })

})

app.listen(3437, function () {
  console.log('listening on port 3437')
})
