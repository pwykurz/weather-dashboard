# **Weather Dashboard Tutorial**

Welcome to the **Weather Dashboard** project! This repository accompanies the comprehensive tutorial on building a real-time weather application using **Next.js 15**, **TypeScript**, and **Chart.js**. The tutorial walks you through every step, from setting up the project to integrating the OpenWeatherMap API for weather data and visualizing forecasts with interactive charts.

👉 **Tutorial Link**: [Building a Weather Dashboard with Next.js 15](https://thecodeconduit.com/building-a-weather-dashboard-with-next-js-15-a-complete-guide-with-type-script-and-chart-js-integration)

---

## **Features**
- Real-time weather data retrieval using the OpenWeatherMap API.
- Search functionality for weather details by city name.
- A responsive design powered by **TailwindCSS**.
- Interactive temperature forecast visualization using **Chart.js**.
- Keyboard support for searching by pressing **Enter**.

---

## **Technologies Used**
- **Next.js 15**: A modern framework for server-side rendering and React applications.
- **TypeScript**: Provides static typing for better development experience and error handling.
- **Chart.js**: Creates beautiful, interactive charts for displaying weather forecasts.
- **TailwindCSS**: Simplifies styling with utility-first CSS.

---

## **Getting Started**

### **1. Clone the Repository**
```bash
git clone https://github.com/pwykurz/weather-dashboard.git
cd weather-dashboard
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Add Your API Key**
Create a `.env.local` file in the root directory with the following content:
```
OPENWEATHER_API_KEY=your_actual_api_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Get your OpenWeatherMap API key from [here](https://openweathermap.org/api).

### **4. Run the Application**
```bash
npm run dev
```

Visit the app at `http://localhost:3000`.

---

## **How It Works**
1. **Search for a City**:
   - Type the city name in the input field and press **Enter** or click the "Search" button.
2. **View Weather Details**:
   - The `WeatherCard` component displays the city's current temperature and weather description.
3. **View the Forecast Chart**:
   - The `TemperatureChart` shows the temperature forecast for the next 12 hours.

---

## **Homework**
Enhance your understanding by adding a feature to fetch weather data using the **Enter** key. For detailed instructions, refer to the tutorial:  
👉 [Building a Weather Dashboard with Next.js 15](https://thecodeconduit.com/building-a-weather-dashboard-with-next-js-15-a-complete-guide-with-type-script-and-chart-js-integration)

---

## **Contributing**
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Open a pull request.

---

## **License**
This project is licensed under the MIT License. Feel free to use it as a starting point for your projects.

---

## **Support My Work**
If you find this project helpful and would like to support me, consider buying me a coffee! Your support motivates me to create more high-quality tutorials and projects like this one. ☕✨

👉 [Buy Me a Coffee](https://buymeacoffee.com/thecodeconduit)

---

Happy coding! 🚀  
For more tutorials, visit [The Code Conduit](https://thecodeconduit.com).
