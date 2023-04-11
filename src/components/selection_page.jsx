import React, { useState, useRef } from 'react';
import Multiselect from "multiselect-react-dropdown";

const API_URL = 'https://example.com/api';

const SelectionPage = () => {
  const multiselectRef = useRef(null);

  const getSelectRef = useRef(null);

  const resetValues = () => {
    if (multiselectRef.current) {
      multiselectRef.current.resetSelectedValues();
    }
  };

  const logValue = () => {
    const selectedItems = multiselectRef.current.getSelectedItems();
    console.log('Selected Items:', selectedItems);
  }

  const submit = (event) => {
    event.preventDefault();
    // combine selected tags into string seperated by comma
    const selectedArr = multiselectRef.current.getSelectedItems();
    const selectedStr = selectedArr.join(', ');

    // testing 
    console.log('Selected Items:', selectedStr);

    // send request 
    // fetch(API_URL, {
    //     method: 'POST',
    //     body: JSON.stringify(selectedStr),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });

  }

  const [tag, setTag] = useState(['40-49', 'circulatory-disease', 'covid', 'african-american', 
                                'wicomico', 'race', 'children', 'influenza', 'statewide', 'harford', 
                                'asian', 'respiratory-arrest', '2019', 'yearly', 'cancer', 'unknown', 
                                'pneumonia', 'anne-arundel', 'age', 'ischemic-heart-disease', 'provisional', 
                                'department-of-health', '0-9', 'weekly', '10-19', 'disease', 'injury', 
                                'education', 'cardiac-arrest', 'download', 'maryland-department-of-health', 
                                'respiratory-disease', 'death', 'garrett', 'hhs-region', 'calvert', '20-29', 
                                '30-39', 'dorchester', 'obesity', 'septicemia', 'state', 'nchs', 'county', '80', 
                                'md-imap', 'kent', 'mdh', 'gender', 'place-of-death', 'worcester', 'maryland', 
                                'dementia', 'prince-georges', 'st-marys', 'puerto-rico', 'nvss', 
                                'adult-respiratory-distress-syndrome', 'age-group', 'somerset', 'share', 'charles', 
                                'caroline', 'monthly', 'chronic-lower-respiratory-disease', 'kidney-disease', 'counties', 
                                'howard', 'deaths', 'confirmed', 'white', 'mortality', 'carroll', 'queen-annes', 'frederick', 
                                'talbot', 'heart-failure', 'allegany', 'data', 'coronavirus', 'renal-failure', 
                                'cardiac-arrhythmia', 'health', 'other', 'sex', 'link-to-article-present', 'ethnicity', 
                                'baltimore-city', 'all-causes', 'diabetes', 'covid-19', 'excess-deaths', 'hispanic', 
                                'baltimore', 'alzheimer-disease', 'cecil', 'hypertensive-disease', 'respiratory-failure', 
                                'montgomery', '70-79', 'outbreak', 'confirmed-deaths', 'washington', 'health-conditions', 
                                'md', '50-59', '60-69', 'public-health', 'united-states', 'hispanic-origin', 'open-data', 
                                'cerebrovascular-disease'])

                 

  return (
    <div className="App">
      
      <Multiselect
        isObject={false}
        options={tag}
        ref={multiselectRef}
        showCheckbox
      />
      <button onClick={resetValues}>Reset</button>
      <button onClick={logValue}>LogValue</button>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  )
}

export default SelectionPage;

