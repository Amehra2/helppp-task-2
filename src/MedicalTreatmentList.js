import React from 'react';
import MedicalTreatment from './MedicalTreatment';

function MedicalTreatmentList(props){
  const MedicalTreatmentListJ = props.json;
  const MedicalTreatmentList = JSON.parse(MedicalTreatmentListJ);
  const ListMedicalTreatmentList = MedicalTreatmentList.map((MedicalTreatment)=>
  <li>
    <MedicalTreatment treatId= {MedicalTreatment.treatId} treatCourseId= {MedicalTreatment.treatCourseId} type={MedicalTreatment.type} category={MedicalTreatment.category} name={MedicalTreatment.name} startDate={MedicalTreatment.startDate} />
  </li>);
  return(
    <ul>
        {ListMedicalTreatmentList}
    </ul>
  );
}

export default MedicalTreatmentList;