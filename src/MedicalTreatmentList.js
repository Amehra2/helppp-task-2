import React from 'react';
import MedicalTreatment from './MedicalTreatment';

function MedicalTreatmentList(props){
  const medicalTreatmentListJ  = props.json;
  const medicaltreatmentlist = JSON.parse(medicalTreatmentListJ);

/*

Prior to the .map function i have applied .filter() which displays medicaltreatmentlist if the category is equal to Sciatica

*/
  const ListMedicalTreatmentList = medicaltreatmentlist.filter(medicalTreatment => medicalTreatment.category === 'Sciatica').map((medicalTreatment)=>

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