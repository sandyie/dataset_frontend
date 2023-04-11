import React, { useState, useRef, useEffect } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, dropdownData1, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import Multiselect from "multiselect-react-dropdown";
import {augment_tags} from '../data/DeathNumberDataset.js';



const QueryPage = () => {
  const { currentColor, currentMode } = useStateContext();

  const multiselectRef = useRef(null);

  // ON CLICK
  const resetValues = () => {
    if (multiselectRef.current) {
      multiselectRef.current.resetSelectedValues();
      const reset = [];
      setResult(reset);
    }
  };


  const submit = (event) => {
    event.preventDefault();
    // combine selected tags into string seperated by comma
    const selectedArr = multiselectRef.current.getSelectedItems();
    const tagSet = new Set(selectedArr);
    const tagSize = tagSet.size;
    // console.log("jsonObjArray", augment_tags);
    const filteredArray = augment_tags.filter(jsonObj => {
      const datasetTag = new Set(jsonObj.tags.concat(jsonObj.augment_tag));
      const intersect = new Set([...datasetTag].filter(x => tagSet.has(x)));
      return intersect.size === tagSize;
      });

    setResult(filteredArray);
  }

  // USE_STATES 
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
// const [result, setResult] = useState([]);

const [result, setResult] = useState(augment_tags);



  return (
    <div className="mt-5">

      {/* <SelectionPage /> */}

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760"> 


          <div className="flex justify-between items-center gap-2 m-5">
            <p className="text-xl font-semibold">Select all tags for query</p>
            {/* <DropDown currentMode={currentMode} /> */}
          </div>

        <div />

          {/* <SelectionPage /> */}
        <Multiselect
          isObject={false}
          options={tag}
          ref={multiselectRef}
          showCheckbox
        />

        <button
              type="button"
              style={{ backgroundColor: currentColor, margin: "15px" }}
              className="text-sm opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
              onClick={resetValues}
            >
              Reset
        </button>

        <button
              type="button"
              style={{ backgroundColor: currentColor, margin: "15px" }}
              className="text-sm opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
              onClick={submit}
            >
              Submit
        </button>

        {/* DISPLAY RESULT  */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {result.length === 0 ? (
            <p>Sorry, there is no matching datasets for this query</p>
          ) : (
            result.map((item) => (
              <div
                key={item.title}
                // className="bg-slate-300 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl "
                className="bg-sky-100 h-auto p-4 pt-2 pb-2 rounded-2xl"
              >
                <p className="text-lg text-indigo-500 font-bold mt-1">{item.title}</p>
                
                <p className="mt-3">
                  <p className="text-sm text-sky-600 font-bold mt-1">Tags: </p>
                  {item.tags.map((tag) => (
                  <button
                  type="button"
                  className="text-2xl opacity-0.9 rounded-full hover:drop-shadow-xl"
                  >

                    <div className="bg-slate-300 h-auto p-4 pt-2 pb-2 rounded-2xl inline-block">
                      <div key={tag} className="flex">
                        <span className={`text-sm text-${item.pcColor} ml-2`}>
                          {tag}
                        </span>
                      </div>
                    </div>
                  </button>
                  ))}

                <p className="text-sm text-sky-600 font-bold mt-1">Augment tags: </p>
        
                  {item.augment_tag.map((augmentTag) => (
                  <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-0.9 rounded-full hover:drop-shadow-xl"
                  >
                    <div className="bg-slate-300 h-auto p-4 pt-2 pb-2 rounded-2xl inline-block">
                      <div key={augmentTag} className="flex">
                        <span className={`text-sm text-${item.pcColor} ml-2`}>
                          {augmentTag}
                        </span>
                      </div>
                    </div>
                  </button>
                  ))}
                </p>

                <p className="text-sm text-sky-600 font-bold mt-1">Description: </p>
                <p className="text-sm text-sky-950 mt-1">{item.description}</p>

                <p className="text-sm text-sky-600 font-bold mt-1">Topic: </p>
                <p className="text-sm text-sky-950 mt-1">{item.topics}</p>

                <p className="text-sm text-sky-600 font-bold mt-1">Link: </p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <p className="text-sm text-sky-950 mt-1">{item.link}</p>
                </a>

              </div>
            ))
          )}
        </div>  




        </div>
      </div>

    </div>
  );
};

export default QueryPage;
