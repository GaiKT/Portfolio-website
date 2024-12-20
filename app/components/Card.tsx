import React from 'react'
import Preveiw from './Preveiw';

export interface CardProps {
  id: number; 
  projectName: string;
  overView: string;
  keyFeatures: {
    [feature: string]: string;
  };
  techStack: {
    FrontEnd: string[];
    BackEnd: string[];
    Database: string[];
  };
  video_url : string;
}

export default function Card(item: CardProps) {

  return (
    <>
      <div
       className=" p-4 text-start rounded-md shadow-accent shadow-md bg-base-content text-blue-500 text-base">
        <h1 className="text-2xl font-bold mb-5 text-secondary">{item.projectName}</h1>
            <Preveiw video_url={item.video_url} project_name={item.projectName}/>
            <p className="my-4">{item.overView}</p>
            <div>
              <h2 className="text-xl font-semibold mb-5 text-base-100">Key Features</h2>
              <ul className="list-disc pl-5">
                {Object.entries(item.keyFeatures).map(([key, value], index) => (
                  <li key={index} className="mb-1">
                    <strong className="text-secondary">{key} :</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold my-5 text-base-100">Tech Stack</h2>
              <ul className="list-disc pl-5">
                {Object.entries(item.techStack).map(([key, value], index) => (
                  <li key={index} className="mb-1">
                    <strong className="text-secondary">{key} :</strong> {value.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
      </div>
    </>
  );
}


