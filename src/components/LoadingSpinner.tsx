const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-0">
      <div className="z-10 h-36 w-36 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
