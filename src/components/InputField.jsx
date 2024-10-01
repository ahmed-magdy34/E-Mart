const InputField = ({ name }) => {
  return (
    <div className="border-2 p-2 w-80 border-gray-500 mb-4">
      <input type="text" placeholder={name} />
    </div>
  );
};

export default InputField;
