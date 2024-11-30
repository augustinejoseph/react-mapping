const departments = [
  {
    id: 1,
    name: "Engineering",
    head: "Alice",
    employees: [
      { id: 101, name: "Dev 1", role: "Frontend Developer" },
      { id: 102, name: "Dev 2", role: "Backend Developer" },
    ],
  },
  {
    id: 2,
    name: "Finance",
    head: "Charlie",
    employees: [
      { id: 201, name: "Accountant 1", role: "Accountant" },
      { id: 202, name: "Analyst 1", role: "Financial Analyst" },
    ],
  },
];

export const ArraysOfObjects = () => {
  const nestedString = JSON.stringify(departments, null, 2);
  return (
    <>
      <h2>ARRAY OF OBJECTS</h2>
      <pre>{nestedString}</pre> {/* Preformatted JSON */}
      <ul>
        {departments.map((dep) => (
          <li key={dep.id}>
            {dep.id} - {dep.name} - {dep.head}
            <ul>
              {dep.employees.map((emp) => (
                <li key={emp.id}>
                  {emp.name} ({emp.role})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
