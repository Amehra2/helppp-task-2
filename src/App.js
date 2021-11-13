import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {

  const medicalTreatmentListAsJson =
  '[ {"treatId": "LHM402", "treatCourseId":"40220", "type": "long term", "category": "Dementia", "name": "Josh Drakeson", "startDate": "28-03-2021"} ,' +
    '{"treatId": "LHM403", "treatCourseId":"40330", "type": "long term", "category": "Lower Hernia", "name": "Daniel Westford", "startDate": "14-02-2019"} ,' +
    '{"treatId": "LHM404", "treatCourseId":"40440", "type": "long term", "category": "Epilepsy", "name": "Peter Mcgorge", "startDate": "04-05-2017"} ,' +
    '{"treatId": "LHM405", "treatCourseId":"40550", "type": "long term", "category": "Heart patient", "name": "Frank Alexander", "startDate": "24-07-2016"} ,' +
    '{"treatId": "LHM406", "treatCourseId":"406440", "type": "short term", "category": "Hamstring injury", "name": "Omar Adnan", "startDate": "13-10-2021"}]';

return (
    <div>
        <MedicalTreatmentList json={medicalTreatmentListAsJson} />
    </div>
  );
}