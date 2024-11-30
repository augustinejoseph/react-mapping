const numbers = [1, 2, 3, 4];

const SimpleArray = () => {
    const numbersString = JSON.stringify(numbers)
  return (
    <>
      <h2>SIMPLE ARRAY</h2>
      <pre>{numbersString}</pre>
      <ul>
        {numbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
    </>
  );
};

export default SimpleArray;
