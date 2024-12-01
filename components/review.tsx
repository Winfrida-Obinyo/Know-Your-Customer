import { useFormContext } from 'react-hook-form';

const Review = () => {
  const { watch } = useFormContext();
  const formData = watch();

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-3 mb-6">Step 4: Review Your Information</h2>

      <div className="space-y-4">
        {/* Name */}
        <div className="flex items-center space-x-2">
          <p className="font-medium text-gray-700 w-1/3">Name:</p>
          <p className="text-gray-900">{formData.name}</p>
        </div>

        {/* Date of Birth */}
        <div className="flex items-center space-x-2">
          <p className="font-medium text-gray-700 w-1/3">Date of Birth:</p>
          <p className="text-gray-900">{formData.dob}</p>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-2">
          <p className="font-medium text-gray-700 w-1/3">Address:</p>
          <p className="text-gray-900">{formData.address}</p>
        </div>

        {/* Country */}
        <div className="flex items-center space-x-2">
          <p className="font-medium text-gray-700 w-1/3">Country:</p>
          <p className="text-gray-900">{formData.country}</p>
        </div>

        {/* Uploaded ID */}
        <div className="flex items-center space-x-2">
          <p className="font-medium text-gray-700 w-1/3">Uploaded ID:</p>
          <p className="text-gray-900">{formData.idUpload?.[0]?.name || 'No file uploaded'}</p>
        </div>
      </div>

      {/* Add a section for submission or confirmation */}
      <div className="mt-6">
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit Information
        </button>
      </div>
    </div>
  );
};

export default Review;
