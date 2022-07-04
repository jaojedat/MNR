import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la Base de Datos')
} catch (error) {
    console.log(`El error de conexion es:  ${ error }`)
}

/* app.get('/', (req, res) => {
    res.send('Funcionando')
}) */

app.listen(8000, () => {
    console.log('server corriendo en puerto http://localhost:8000/')
})


