const Card = () => {
    return (
      <div
        className="p-4 rounded-lg shadow"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          border: "2px solid var(--primary-color)",
        }}
      >
        <h2>Styled Card</h2>
        <p>This card changes colors based on the selected theme.</p>
      </div>
    );
  };
  
  export default Card;
  