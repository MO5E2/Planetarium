export default function UniformSizeButton({ isUniformSize, setUniformSize }) {
  return (
    <button 
      onClick={() => {
        setUniformSize(!isUniformSize)
        console.log(isUniformSize)
      }}
      className="hover:text-red-500 active:text-green-500 bg-blue-500"
      >
      {isUniformSize ? "Realistic Size" : "Same Size"}
    </button>
  );
}
