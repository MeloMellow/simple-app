
import 'dotenv/config'

import app from './express'

app.listen(process.env.PORT || 3434, async () => {
  console.log(`server running at http://localhost:${process.env.PORT || 3434}`)
})