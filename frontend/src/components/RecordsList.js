function RecordsList({ records, onDelete }) {
  return (
    <div>
      {records.map((record) => (
        <div key={record.id}>
          <p>
            {record.date} | Calories: {record.calories} | Steps: {record.steps} | Weight: {record.weight}
          </p>

          <button onClick={() => onDelete(record.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default RecordsList;