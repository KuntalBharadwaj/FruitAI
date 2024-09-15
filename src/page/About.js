import React from "react";

function AboutPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-custom-gradient">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div>
      
      {/* Content */}
      <div className="flex-grow flex items-end justify-center">
        <div className="relative w-full">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-opacity-10"
            style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTBcRh27sVzLi_2uaS0Dw1Rcj0PFzW-WGuQ&s)' }}
          ></div>
          {/* Content Box */}
          <div className="h-[400px] relative bg-white bg-opacity-5 backdrop-blur-sm p-4 flex flex-col items-center justify-center rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-3">About Us</h1>
            <p className="text-white text-sm leading-relaxed">
              Welcome to Fruit.ai, your go-to health manager. Our mission is to provide you with the best tools to stay healthy, informed, and engaged in your wellness journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
