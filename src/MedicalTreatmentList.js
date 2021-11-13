import React from 'react';
import MedicalTreatment from './MedicalTreatment';

function MedicalTreatmentList(props){
  const medicalTreatmentListJ  = props.json;
  const medicaltreatmentlist = JSON.parse(medicalTreatmentListJ);
  const ListMedicalTreatmentList = medicaltreatmentlist.map((medicalTreatment)=>
  <li>
    <MedicalTreatment treatId={medicalTreatment.treatId} treatCourseId= {medicalTreatment.treatCourseId} type={medicalTreatment.type} category={medicalTreatment.category} name={medicalTreatment.name} startDate={medicalTreatment.startDate} />
  </li>);
  return(
    <ul>
        {ListMedicalTreatmentList}
    </ul>
  );
}

export default MedicalTreatmentList;