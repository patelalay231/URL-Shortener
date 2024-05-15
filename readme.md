# URL Shortener

This project is a URL shortener built using Node.js, Express.js, MongoDB, along with HTML and CSS for the front-end. It features a user authentication system, ensuring that only logged-in users can generate and manage their shortened URLs. The application also provides detailed analytics for each link created by a user.



## Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/R9GGsFb-F2w?si=Q_zC6myNRw5Q-h3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Features

- **URL Shortening**: Users can input a URL and receive a shortened version of it.
- **User Authentication**: Only authenticated users can create shortened URLs. Authentication is managed via session cookies.
- **Link Analytics**: Users can view detailed analytics for each shortened link they create, including the number of clicks, the short ID, and the original redirected URL.
- **Responsive Design**: The front-end is built with HTML and CSS, making it accessible and functional across different devices and screen sizes.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A web application framework for Node.js, designed for building web applications and APIs.
- **MongoDB**: A NoSQL database used to store user and URL data.
- **HTML/CSS**: Used for structuring and styling the front-end of the application.

## Getting Started

### Prerequisites

Before you begin, ensure you have installed the following:
- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. Install NPM packages:
   ```bash
   npm install
   ```

5. Start the server:
   ```bash
   npm start
   ```

5. Visit `http://localhost:8000` in your web browser to start using the application.

## Usage

After logging in, users can:
- Create new shortened URLs by entering the original URL.
- View a list of all previously shortened URLs along with their analytics.

## Contributing

Contributions are welcome, and any contributions you make are **greatly appreciated**. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [alay.patel@iitgn.ac.in](mailto:alay.patel@iitgn.ac.in)

Feel free to reach out if you have any questions or suggestions!
