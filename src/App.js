import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {

  const medicalTreatmentListAsJson =
  '[ {"treatId": "LHM908", "treatCourseId":"40220", "type": "long term", "category": "Asthma", "name": "Josh Drakeson", "startDate": "28-03-2021"} ,' +
    '{"treatId": "LHM909", "treatCourseId":"40330", "type": "long term", "category": "Sciatica", "name": "Daniel Westford", "startDate": "14-02-2019"} ,' +
    '{"treatId": "LHM910", "treatCourseId":"40440", "type": "long term", "category": "Down syndrome ", "name": "Peter Mcgorge", "startDate": "04-05-2017"} ,' +
    '{"treatId": "LHM911", "treatCourseId":"40550", "type": "long term", "category": "Neck hernia", "name": "Frank Alexander", "startDate": "24-07-2016"} ,' +
    '{"treatId": "LHM912", "treatCourseId":"40644", "type": "short term", "category": "calf injury", "name": "Omar Adnan", "startDate": "13-10-2021"}]';


    //medicalTreatmentListAsJson = medicalTreatmentListAsJson.filter(function(item){
      //return item.category == 'Sciatica';
    //}).map(function({treatId, treatCourseId, type, category, name, startDate}){
      //return{treatId, treatCourseId, type, category, name, startDate};
    //});
    //console.log(medicalTreatmentListAsJson);
     
         //<div>
           //{medicalTreatmentListAsJson.filter(person => person.category == "Epilepsy").map(filteredPerson => (
             //<li>
               //{filteredPerson.category}
             //</li>
           //))}
         //</div>
   

return (
    <div>
        <MedicalTreatmentList json={medicalTreatmentListAsJson} />
        
        
    </div>  
  );
  
}




export default App;
