function Popup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[400px] h-[400px] border border-gray-400 bg-white p-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          Product Spotlight
        </h1>

        <p className="text-gray-800 text-sm leading-relaxed mb-6 px-2">
          Explore the latest features and capabilities of our innovative new
          product. Designed to enhance productivity and streamline your
          workflow.
        </p>

        <button className="bg-[#0b438b] hover:bg-[#08336a] text-white font-medium px-6 py-2 rounded transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Popup;
