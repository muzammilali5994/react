import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import DataDesign from './components/DataDesign'; // Capitalized Import
import datajson from './components/datajson';

function App() {
  return (
    <div className="">
      <Header />
      {datajson.map((x)=>{
        return(
        <Hero name={x.name} />
        )
      }) }
      
      
      {datajson.map((x) => {
        return (
          // Use the Capitalized component name here
          // Also, move the 'key' to the outermost element in the map (the Fragment)
          <>
            <DataDesign  id={x.id} name={x.name} />
          </>
        );
      })}
    </div>
  );
}

export default App;