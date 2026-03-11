import apiClient from "../../../shared/services/apiClient";

function RecordsTable({ records, fetchRecords }) {

  const deleteRecord = async id => {

    await apiClient.delete(`/records/${id}`);

    fetchRecords();

  };

  return (

    <table className="records-table">

      <thead>
        <tr>
          <th>Date</th>
          <th>Steps</th>
          <th>Calories</th>
          <th>Weight</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>

        {records.map(r => (

          <tr key={r.id}>

            <td>{new Date(r.date).toLocaleDateString()}</td>
            <td>{r.steps}</td>
            <td>{r.calories}</td>
            <td>{r.weight}</td>

            <td>
              <button className="delete-btn" onClick={() => deleteRecord(r.id)}>
                Delete
              </button>
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );
}

export default RecordsTable;