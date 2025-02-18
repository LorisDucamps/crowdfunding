const ModalSuccess = ({onBackToHome}) => (
    <div className="text-center p-6">
      <h3 className="text-lg font-bold mb-4">Thank you for your support!</h3>
      <p className="text-sm text-sonic-silver mb-6">
        Your pledge brings us closer to delivering Mastercraft Bamboo Monitor Riser to the world.
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onBackToHome}
      >
        Back to Home
      </button>
    </div>
  );

  export default ModalSuccess
  