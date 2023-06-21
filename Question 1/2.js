const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

        const trainDetails1=[
            {
            "trainName": "Chai Wala Exp",
            "trainNumber": "2344",
            "departureTime": {
                "Hours": 11,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 33,
                "AC": 13
            },
            "price": {
                "sleeper": 2283,
                "AC": 2394
            },
            "delayedBy": 4
        },
        {
            "trainName": "Pappu Exp",
            "trainNumber": "2345",
            "departureTime": {
                "Hours": 11,
                "Minutes": 23,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 4,
                "AC": 4
            },
            "price": {
                "sleeper": 6,
                "AC": 2
            },
            "delayedBy": 5
        },
        {
            "trainName": "Taxi Wala Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 2,
                "AC": 2
            },
            "price": {
                "sleeper": 2240,
                "AC": 2373
            },
            "delayedBy": 8
        },
        {
            "trainName": "Hawai Exp",
            "trainNumber": "2349",
            "departureTime": {
                "Hours": 14,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 1,
                "AC": 0
            },
            "price": {
                "sleeper": 2587,
                "AC": 2674
            },
            "delayedBy": 10
        },
        {
            "trainName": "Mumbai Exp",
            "trainNumber": "2343",
            "departureTime": {
                "Hours": 22,
                "Minutes": 37,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 8,
                "AC": 15
            },
            "price": {
                "sleeper": 2130,
                "AC": 2230
            },
            "delayedBy": 16
        },
        {
            "trainName": "Funny Exp",
            "trainNumber": "2341",
            "departureTime": {
                "Hours": 7,
                "Minutes": 15,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 15,
                "AC": 5
            },
            "price": {
                "sleeper": 7,
                "AC": 15
            },
            "delayedBy": 1
        },
        {
            "trainName": "Delhi Door Hai Exp",
            "trainNumber": "2343",
            "departureTime": {
                "Hours": 9,
                "Minutes": 45,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 32,
                "AC": 1
            },
            "price": {
                "sleeper": 1,
                "AC": 3
            },
            "delayedBy": 3
        },
        {
            "trainName": "Kolkata Exp",
            "trainNumber": "2345",
            "departureTime": {
                "Hours": 20,
                "Minutes": 15,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 16,
                "AC": 70
            },
            "price": {
                "sleeper": 2120,
                "AC": 2220
            },
            "delayedBy": 14
        },
        {
            "trainName": "Chennai Exp",
            "trainNumber": "2344",
            "departureTime": {
                "Hours": 21,
                "Minutes": 35,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 3,
                "AC": 1
            },
            "price": {
                "sleeper": 2,
                "AC": 5
            },
            "delayedBy": 15
        },
        {
            "trainName": "Hyderabad Exp",
            "trainNumber": "2341",
            "departureTime": {
                "Hours": 23,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 6,
                "AC": 7
            },
            "price": {
                "sleeper": 554,
                "AC": 1854
            },
            "delayedBy": 5
        },
        {
            "trainName": "Love Exp",
            "trainNumber": "2346",
            "departureTime": {
                "Hours": 12,
                "Minutes": 3,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 10,
                "AC": 1
            },
            "price": {
                "sleeper": 1720,
                "AC": 2183
            },
            "delayedBy": 6
        },
        {
            "trainName": "Sundar Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 55,
                "AC": 0
            },
            "price": {
                "sleeper": 13,
                "AC": 8
            },
            "delayedBy": 7
        },
        {
            "trainName": "Nannu Exp",
            "trainNumber": "2349",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 2,
                "AC": 1
            },
            "price": {
                "sleeper": 1,
                "AC": 2
            },
            "delayedBy": 9
        },
        {
            "trainName": "Test Exp",
            "trainNumber": "2348",
            "departureTime": {
                "Hours": 15,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 1,
                "AC": 0
            },
            "price": {
                "sleeper": 2,
                "AC": 4
            },
            "delayedBy": 11
        },
        {
            "trainName": "Manoranjan Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 17,
                "Minutes": 33,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 5,
                "AC": 1
            },
            "price": {
                "sleeper": 1558,
                "AC": 2003
            },
            "delayedBy": 12
        },
        {
            "trainName": "Manu Exp",
            "trainNumber": "2346",
            "departureTime": {
                "Hours": 19,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 15,
                "AC": 10
            },
            "price": {
                "sleeper": 15,
                "AC": 5
            },
            "delayedBy": 13
        },
        {
            "trainName": "Yatri Exp",
            "trainNumber": "2340",
            "departureTime": {
                "Hours": 6,
                "Minutes": 10,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 10,
                "AC": 1
            },
            "price": {
                "sleeper": 1840,
                "AC": 2333
            },
            "delayedBy": 0
        },
        {
            "trainName": "Late Latif Exp",
            "trainNumber": "2342",
            "departureTime": {
                "Hours": 8,
                "Minutes": 30,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 18,
                "AC": 7
            },
            "price": {
                "sleeper": 2752,
                "AC": 3383
            },
            "delayedBy": 2
        },
        {
            "trainName": "Pune Exp",
            "trainNumber": "2342",
            "departureTime": {
                "Hours": 23,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 6,
                "AC": 7
            },
            "price": {
                "sleeper": 14,
                "AC": 9
            },
            "delayedBy": 17
        }
    ];
    app.get('/train/trains', async (req, res) => {
        try {
            const response = await axios.get('http://104.211.219.98/train/trains', {
                headers: {
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODczMzIzMjYsImNvbXBhbnlOYW1lIjoiVHJhaW4iLCJjbGllbnRJRCI6ImI5ZTc1ZWM2LWNjMTUtNDJhOC1iMDkxLWRiNGI4YTQzM2NlNyIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxMjQ0In0.alfueM_NSYU6Q_xpIAMv1U2fJsNHwSuwHOMWpUmZ2bU',
                },
              });
          
              const trainDetails = response.data?.trains || [];
          // Filter trains based on the departure time condition
          const currentTime = new Date();
          const filteredTrains = trainDetails.filter(train => {
            const departureTime = new Date().setHours(train.departureTime?.Hours || 0, train.departureTime?.Minutes || 0, train.departureTime?.Seconds || 0);
            const timeDifference = departureTime - currentTime;
            const minutesDifference = timeDifference / (1000 * 60); // Convert milliseconds to minutes
      
            // Ignore trains with departure less than 30 minutes
            return minutesDifference >= 30;
          });
      
          // Sort trains based on price in ascending order
          const sortedTrains = filteredTrains.sort((a, b) => {
            const priceA = (a.price?.sleeper || 0) + (a.price?.AC || 0);
            const priceB = (b.price?.sleeper || 0) + (b.price?.AC || 0);
            return priceA - priceB;
          });
      
          // Sort trains based on tickets in descending order
          sortedTrains.sort((a, b) => {
            const ticketsA = (a.seatsAvailable?.sleeper || 0) + (a.seatsAvailable?.AC || 0);
            const ticketsB = (b.seatsAvailable?.sleeper || 0) + (b.seatsAvailable?.AC || 0);
            return ticketsB - ticketsA;
          });
      
          // Sort trains based on departure time in descending order
          sortedTrains.sort((a, b) => {
            const departureTimeA = new Date().setHours(a.departureTime?.Hours || 0, a.departureTime?.Minutes || 0, a.departureTime?.Seconds || 0);
            const departureTimeB = new Date().setHours(b.departureTime?.Hours || 0, b.departureTime?.Minutes || 0, b.departureTime?.Seconds || 0);
            return departureTimeB - departureTimeA;
          });
      
          res.json(sortedTrains);
        } catch (error) {
          console.error('Error fetching train details:', error);
          res.status(500).json({ error: 'Failed to fetch train details' });
        }
      });
      
      // Start the server
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });

    
    
   
    

  




