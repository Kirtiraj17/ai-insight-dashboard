const ErrorComponent = ({ errorMsg }: { errorMsg: any }) => {
  return (
    <div className="loader-container">
      <h2>Something went wrong</h2>
      <p>{errorMsg}</p>
    </div>
  );
};

export default ErrorComponent;
