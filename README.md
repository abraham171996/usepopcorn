usePopcorn - Movie Search and Rating App

usePopcorn is a React-based web application that allows users to search for movies and view their details. Users can also rate movies and keep track of their watched movies. The app utilizes the Open Movie Database (OMDb) API to fetch movie data and display it to users.

Features:

Movie Search: Users can search for movies using the search bar. As they type, the app fetches relevant movie results from the OMDb API.

Movie Details: When a user clicks on a movie from the search results, they can view the details of the selected movie, including the poster, title, year, genre, runtime, IMDb rating, plot, actors, and director.

Rating Movies: For movies that users have not watched yet, they can rate them using a star rating system. The user's rating is then stored in local storage.

Watched Movies: Users can add movies to their watched list by clicking the "Add to list" button. The watched list includes details such as IMDb rating, user rating, and runtime.

Keyboard Shortcuts: The app includes keyboard shortcuts to enhance the user experience. For instance, pressing the "Enter" key focuses on the search bar, and pressing the "Escape" key closes the movie details modal.

Summary Statistics: The app displays summary statistics for the user's watched movies, including the total number of movies watched, average IMDb rating, average user rating, and average runtime.

Technologies Used:

React: The app is built using the React JavaScript library for creating user interfaces.
Open Movie Database (OMDb) API: Used to fetch movie data based on user queries.
Local Storage: Utilized to store user ratings and watched movies data locally in the browser.
Please note that this description is a general overview of the usePopcorn app and its features. The app may have evolved and been updated since this description was written. For the latest version and complete codebase, please refer to the Git repository.
