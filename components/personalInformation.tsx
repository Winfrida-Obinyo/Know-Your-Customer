import { useFormContext } from 'react-hook-form';

const PersonalInformation = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Step 1: Personal Information</h2>
      
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter your full name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{String(errors.name.message)}</span>
          )}
        </div>
        
        {/* Date of Birth */}
        <div>
          <label className="block font-medium">Date of Birth</label>
          <input
            {...register('dob', { required: 'Date of birth is required' })}
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.dob && (
            <span className="text-red-500 text-sm">{String(errors.dob.message)}</span>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-medium">Email Address</label>
          <input
            {...register('email', { 
              required: 'Email is required', 
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } 
            })}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{String(errors.email.message)}</span>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            {...register('phone', { 
              required: 'Phone number is required', 
              pattern: { value: /^\d{10}$/, message: 'Phone number must be 10 digits' }
            })}
            placeholder="Enter your phone number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{String(errors.phone.message)}</span>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium">Gender</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                {...register('gender', { required: 'Gender is required' })} 
                value="male"
                className="mr-2" 
              />
              Male
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                {...register('gender', { required: 'Gender is required' })} 
                value="female"
                className="mr-2" 
              />
              Female
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                {...register('gender', { required: 'Gender is required' })} 
                value="other"
                className="mr-2" 
              />
              Other
            </label>
          </div>
          {errors.gender && (
            <span className="text-red-500 text-sm">{String(errors.gender.message)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;