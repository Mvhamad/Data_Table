import DataTable from 'react-data-table-component';
import './App.css';

function App() {
  const colonne = [
    {
      name : "Prénom",
      selector: row => row.prenom
    },
    {
      name : "Nom",
      selector: row => row.nom
    },
    {
      name : "Numéro de Téléphone",
      selector: row => row.tel
    }
  ];

  const data = [
    {
      id : 1,
      prenom : "Aladji",
      nom : "Sall",
      tel : 774561239
    },
    {
      id : 2,
      prenom : "Salif",
      nom : "Sané",
      tel : 777823439
    },
    {
      id : 3,
      prenom : "Penda",
      nom : "BA",
      tel : 785824756
    }
  ];

  return (
    <div className="App">
     
      <DataTable columns={colonne} data={data}/>
    </div>
  );
}

export default App;
