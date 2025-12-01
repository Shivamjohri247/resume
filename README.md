# Shivam Johri - Portfolio

A modern, interactive portfolio website built with React, showcasing expertise in AI Engineering, MLOps, and Distributed Systems.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Icons:** [Lucide React](https://lucide.dev/)
- **3D/WebGL:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) (if applicable)

## 🛠️ Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd resume-themed
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

## 🐳 Docker Support

This project includes Docker support for easy deployment.

### Using Docker Compose

1.  **Build and run the container:**
    ```bash
    docker-compose up --build -d
    ```

2.  **Access the application:**
    Open your browser and navigate to `http://localhost:8080`.

3.  **Stop the container:**
    ```bash
    docker-compose down
    ```

### Manual Docker Build

1.  **Build the image:**
    ```bash
    docker build -t shivam-portfolio .
    ```

2.  **Run the container:**
    ```bash
    docker run -p 8080:80 shivam-portfolio
    ```

## 📂 Project Structure

```
src/
├── components/   # Reusable UI components (Hero, Footer, etc.)
├── App.jsx       # Main application component
├── main.jsx      # Entry point
└── index.css     # Global styles and Tailwind directives
```

## 📄 License

[MIT](LICENSE)
