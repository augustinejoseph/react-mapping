type NestedArrayType = string | NestedArrayType[];

const organization = [
  [
    ["CEO"],
    ["CTO", "CFO"],
    [
      ["VP of Engineering", "VP of Product"],
      ["VP of Finance", "VP of Marketing"],
      [
        ["Engineering Manager", "DevOps Manager"],
        ["Product Manager", "UX/UI Manager"],
        ["Finance Manager", "Marketing Manager"],
      ],
    ],
  ],
];
const NestedOrg: React.FC<{ data: NestedArrayType[] }> = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) =>
        Array.isArray(item) ? (
          <li key={index}>
            <NestedOrg data={item} />
          </li>
        ) : (
          <li key={index}>{item}</li>
        )
      )}
    </ul>
  );
};

const NestedArray = () => {
  const nestedString = JSON.stringify(organization, null,3);
  return (
    <>
      <h2>NESTED ARRAY</h2>
      <pre>{nestedString}</pre>
      <ul>
        <NestedOrg data={organization} />
      </ul>
    </>
  );
};

export default NestedArray;
