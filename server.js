const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

// Serve HTML, CSS, JS and images
app.use(express.static(path.join(__dirname, 'public')))

// NASA API route
app.get('/api/nasa', async (req, res) => {
    try {
        const response = await fetch(
            'https://data.nasa.gov/docs/legacy/NASA_Facilities/NASA_Facilities_rows.json'
        )

        if (!response.ok) {
            throw new Error('NASA request failed')
        }

        const data = await response.json()

        res.json(data)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch NASA data' })
    }
})

// Start server
app.listen(PORT, () => {
    console.log(`NASA project running on port ${PORT}`)
})