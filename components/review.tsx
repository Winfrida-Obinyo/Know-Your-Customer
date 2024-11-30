// components/review.tsx
import { useFormContext } from 'react-hook-form';

const Review = () => {
  const { watch } = useFormContext();
  const formData = watch();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 4: Review Your Information</h2>
      
      <div>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Date of Birth:</strong> {formData.dob}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>Uploaded ID:</strong> {formData.idUpload?.[0]?.name}</p>
      </div>
    </div>
  );
};

export default Review;
