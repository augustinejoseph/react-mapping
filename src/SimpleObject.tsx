const settings = {
  darkMode: true,
  notifications: false,
  language: "English",
};

const SimpleObject = () => {
    const settingsString = JSON.stringify(settings)
  return (
    <>
      <h2>SimpleObject</h2>
      <pre>{settingsString}</pre>
      <ul>
        {Object.entries(settings).map(([key, value]) => (
          <li>
            {key} : {value ? "Enabled" : "Disabled"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SimpleObject;
