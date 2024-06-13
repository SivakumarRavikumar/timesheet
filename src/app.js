const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const timesheetRoutes = require('./routes/timesheet.routes');

const app = express();

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', timesheetRoutes);

app.get('/', (req, res) => {
    res.send('Timesheet API');
});

module.exports = app;
