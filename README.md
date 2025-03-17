# AI Image Generation Project (MERN Stack + Hugging Face API)

## 📌 Project Description
This AI Image Generation project is built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js) and integrates **Hugging Face API** for generating AI-powered images. Users can generate and customize images using various AI models.

## ✨ Features
- 🔥 Generate AI images using Hugging Face API.
- 🖼️ Customize images with different styles and prompts.
- 📜 Save and retrieve generated images from the database.
- ⚡ User authentication and profile management.
- 🚀 Responsive UI using React and Tailwind CSS.

## 🛠️ Tech Stack
### Frontend:
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB
- Multer (for image uploads)
- **Hugging Face API** for AI-generated images

## 📦 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Chirag-Zanpadiya/AI-IMAGE-GENERATION-MERN-STACK-PROJECT.git
cd AI-IMAGE-GENERATION-MERN-STACK-PROJECT
```

### 2️⃣ Install Backend Dependencies
```sh
cd server
npm install
```

### 3️⃣ Install Frontend Dependencies
```sh
cd client
npm install
```

### 4️⃣ Set Up Environment Variables
Create a `.env` file in the `server` directory and add:
```env
MONGODB_URL=your_mongodb_connection_string
HUGGINGFACE_API_KEY=your_huggingface_api_key
```

### 5️⃣ Start the Backend Server
```sh
cd server
npm start
```

### 6️⃣ Start the Frontend Server
```sh
cd client
npm start
```

## 🚀 Usage
1. Enter a prompt to generate an image.
2. Select the style and model.
3. Click "Generate" to create an AI-powered image.
4. Download or save the image to your account.

## 🎯 API Endpoints
| Method | Endpoint             | Description |
|--------|---------------------|-------------|
| GET    | `/api/v1/post`      | Fetch all images |
| POST   | `/api/v1/dalle`     | Generate a new image using Hugging Face API |
| POST   | `/api/upload`       | Upload an image |

## 📸 Screenshot
![Preview](https://your-screenshot-url.com/example.png)

## 📝 License
This project is licensed under the **MIT License**.

## 📩 Contact
**Author:** Chirag Zanpadiya  
**GitHub:** [Chirag-Zanpadiya](https://github.com/Chirag-Zanpadiya)  
