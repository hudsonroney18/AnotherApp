import './App.css';

  const bandNames = [
    {
      name: 'Dire Straits',
      members: 'Mark, David, John, Pick',
      formed: 1977
    },
    {
      name: 'R.E.M.',
      members: 'Blake, Dude, jack, Snack',
      formed: 1980
    },
    {
      name: 'Other Band',
      members: 'Mand, Hand, Blah, Man',
      formed: 1998
    },
    {
      name: "Guy",
      members: "Guy1, Guy2, Guy3",
      formed: 1967
    }
  ];
function Welcome() {
  return <h1>Criminally Underrated bands</h1>
}

function Band ({name, members, formed} : {name: string; members: string; formed: number;}) {

  const singleBand = bandNames[1]

  return (
    <>
      <h2>Name: {name} </h2>
      <h2>Original Members: {members} </h2>
      <h2>Formed: {formed} </h2>
    </>
  );
}

function BandList() {
// use <> </> as a react fragment to take the place of a div tag
  return (
    <>
    {
      bandNames.map((singleBand) => (
        <Band {...singleBand}/>
      ))
    }
    </>
  );
}

function App() {


  return (
    <>
      <Welcome />
      <BandList />
    </>
  );
}

export default App;
