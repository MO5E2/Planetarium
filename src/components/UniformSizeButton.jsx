export default function UniformSizeButton({isUniformSize, setUniformSize}) {
    return (
        <button onClick={setUniformSize(!isUniformSize)}>Use same size for planets</button>
    );
}