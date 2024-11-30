import { useFormContext } from 'react-hook-form';

const DocumentUpload = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 3: Document Upload</h2>

      {/* Upload ID Field */}
      <div className="mb-6">
        <label htmlFor="idUpload" className="block text-sm font-medium text-gray-700">Upload ID</label>
        
        {/* Custom file input design */}
        <div className="flex items-center space-x-4">
          <label 
            htmlFor="idUpload" 
            className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 bg-gray-50 text-gray-700 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <span>Choose a file</span>
            <input
              id="idUpload"
              {...register('idUpload', { required: 'ID upload is required' })}
              type="file"
              className="hidden"
            />
          </label>
          
          {/* Display file name if a file is selected */}
          <span className="text-gray-500">
            {errors.idUpload ? 'No file selected' : 'No file uploaded yet'}
          </span>
        </div>

        {/* Error Message */}
        {errors.idUpload && (
          <span className="text-red-500 text-sm mt-2">{String(errors.idUpload.message)}</span>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;
