const app = require('./app');
const connectDB = require('./config/db');
const { PORT } = require('./config/dotenv.config');

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
