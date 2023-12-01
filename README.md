# Movie Suggestion App Documentation
<h3>Overview</h3>
<p>The Movie Suggestion App is a frontend-only web application developed using Vite and React. The app allows users to search for movies, and view movie details, It interfaces with the TMDB API to fetch movie data and provides sorting, filtering, and user-friendly features.</p>

<h1>Setup and Configuration</h1>
<h3>Prerequisites</h3>
<p>Node.js and npm should be installed on your system.</p>

<h3>Installation</h3>
<p>Clone the repository:</p>
<h4>bash</h4>
<p>git clone 'repository_url'</p>

<h3>Install dependencies:</h3>  
<p>cd vite-project</p>
<p>npm install</p>

<h3>Environment Variables</h3>
<p>Create a .env file at the root of the project and define the following environment variable:</p>

<h3>TMDB_TOKEN : YOUR OWN API TOKEN</h3>

<h3>Usage</h3>
<p>1. Start the development server: <br> 'npm run dev' </br></p>
<p>2.Open your browser and navigate to http://localhost:3000.</p>
<p>Use the app to search for movies, view details, sort/filter results, and save favorites.</p>

<h3>Features</h3>
<h4>Search Functionality</h4>
<li>Use the search bar to search for movies by title.</li>
<li>Display search results in a responsive layout.</li>

<h3>Sorting and Filtering</h3>
<ui>Sort search results by criteria such as year or rating.</ui>
<ui>Implemented filters to narrow down search results by genre or release year.</ui>

<h3>Movie Details</h3>
<ui>Select a movie to view detailed information about the movie in a new view.</ui>
<ui>Watch the cast details of the movie</ui>
<ui>Show the similar and recommendation part also.</ui>

<h3>Infinite scrolling for search results</h3>
<p>Implemented infinite scrolling with react library</p>

<h3>Implemented transitions for a better user experience</h3>
<p>Used transition and lazy loading for better user experience</p>

<h3>Styling</h3>
<p>Using SCSS for styling for a visually appealing and responsive design</p>

<h3>Error Handling</h3>
<ui>Error handling for API requests with user-friendly error messages.</ui>

