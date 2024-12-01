import { useFormContext } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'; // Importing icons from react-icons

interface AddressFormValues {
  address: string;
  country: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
}

const AddressInformation = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddressFormValues>(); // Pass the AddressFormValues type to the hook

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Step 2: Address Information</h2>

      {/* Address Field */}
      <div className="mb-4 relative">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <div className="flex items-center">
          <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            id="address"
            {...register('address', { required: 'Address is required' })}
            placeholder="Enter your address"
            className={`mt-1 block w-full p-3 pl-10 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        {errors.address && (
          <span className="text-red-500 text-sm mt-1">{errors.address.message}</span>
        )}
      </div>

      {/* Country Field */}
      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
        <select
          id="country"
          {...register('country', { required: 'Country is required' })}
          className={`mt-1 block w-full p-3 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <option value="">Select Country</option>
          <option value="Kenya">Kenya</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && (
          <span className="text-red-500 text-sm mt-1">{errors.country.message}</span>
        )}
      </div>

      {/* City Field */}
      <div className="mb-4 relative">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <div className="flex items-center">
          <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            id="city"
            {...register('city', { required: 'City is required' })}
            placeholder="Enter your city"
            className={`mt-1 block w-full p-3 pl-10 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        {errors.city && (
          <span className="text-red-500 text-sm mt-1">{errors.city.message}</span>
        )}
      </div>

      {/* Postal Code Field */}
      <div className="mb-4">
        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
        <input
          id="postalCode"
          {...register('postalCode', {
            required: 'Postal code is required',
            pattern: { value: /^[0-9]{5,6}$/, message: 'Invalid postal code' },
          })}
          placeholder="e.g. 12345"
          className={`mt-1 block w-full p-3 border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.postalCode && (
          <span className="text-red-500 text-sm mt-1">{errors.postalCode.message}</span>
        )}
      </div>

      {/* Phone Number Field */}
      <div className="mb-4 relative">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <div className="flex items-center">
          <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            id="phoneNumber"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: { value: /^[0-9]{10}$/, message: 'Phone number must be 10 digits' },
            })}
            placeholder="e.g. 0712345678"
            className={`mt-1 block w-full p-3 pl-10 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        {errors.phoneNumber && (
          <span className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</span>
        )}
      </div>
    </div>
  );
};

export default AddressInformation;
