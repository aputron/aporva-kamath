'use client'

import Image from 'next/image'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { BeakerIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react';
import CollapsibleCard from 'app/components/CollapsibleCard';
import GeneticCircuitIcon from 'app/components/icons/GeneticCircuitIcon'
import FacsGraphIcon from 'app/components/icons/FacsGraph'


// text-gray-700 dark:text-gray-400

export default function DataCollectionPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold lowercase mb-4">
        high-throughput AI-assisted protein engineering (HiAPE)
      </h1>
      <p className="text-gray-600 dark:text-gray-300 lowercase mb-4">
        Functional Datasets for AI-based Protein Engineering in just 2 weeks
      </p>
      <CollapsibleCard title='Background' icon={<InformationCircleIcon className="h-6 w-6 mr-2" />}>
        <ul className="list-none list-outside space-y-4 text-gray-500 dark:text-gray-400 lowercase">
          <li>
            Protein Engineering to enhance a specific protein’s activity is of two types:
            <ul className="mt-2 ml-2 list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400 lowercase">
              <li>bottom-up data-driven approach of <b>rational protein design</b>
              </li>
              <li>top-down high-throughput screening approach of <b>directed evolution</b> </li>
            </ul>
            <li className='mt-3'>
              Artificial Intelligence can help identify patterns in the genotype and phenotype relationship of proteins based on sequence
            </li>
          </li>
        </ul>
      </CollapsibleCard>
      <p className="flex items-center mt-5 font-semibold lowercase">
        <ExclamationTriangleIcon className="h-6 w-6 mr-2 mt-1" />
        research objectives
      </p>
      <ul className="mt-2 list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400 lowercase">
        <li>
          Design <b>high-throughput</b> genotype and phenotype <b>data collection methods</b>
        </li>
        <li>
          Develop <b>personalized</b> AI models for different proteins
        </li>
        <li>
          Target <b>multiple phenotypes</b>
        </li>
      </ul>
      <p className="flex items-center mt-5 font-semibold lowercase">
        <BeakerIcon className="h-6 w-6 mr-2 mt-1" />
        Methods
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-4 py-8 lowercase">
        <div className="p-6 border rounded-lg shadow">
          <h3 className="font-semibold mb-2">Genetic circuit + mutant library</h3>
          <div className="flex justify-center">
            <GeneticCircuitIcon className="w-40 h-20 text-gray-700 dark:text-gray-300" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Protein variants are encoded in a <b>genetic circuit</b> with sfGFP as a reporter for activity.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">FACS Sorting</h3>
          <div className="flex justify-center">
            <FacsGraphIcon className="w-40 h-20 text-gray-700 dark:text-gray-300" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mutant library cells are sorted into <b>high/low </b> bins based on fluorescence intensity to separate phenotypes.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">Long-read Sequencing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Bulk <b>nanopore sequencing</b> recovers the full-length protein variant sequences.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">Data clean + AI Model Training</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Protein-specific <b>CNN models</b> predict phenotype from sequence data.
          </p>
        </div>
      </div>
      <p className="flex items-center mt-5 text-gray-700 dark:text-gray-400 font-semibold lowercase">
        <CheckCircleIcon className="h-6 w-6 text-gray-700 dark:text-gray-400 mr-2 mt-1" />
        Results
      </p>
      <ul className="mt-2 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 lowercase">
        <p className='font-semibold'>
          dataset of protein mutant sequences and their corresponding phenotype within 2 weeks.
        </p>
        <p className='text-gray-500 dark:text-gray-500'>target proteins: DmpR (transcription factor); MPH (Enzyme)</p>
        <li>
          Generated over <b>100,000 unique protein sequences </b> with their high or low activity
        </li>
        <li>
          Custom <b>CNN</b> models for each protein and target phenotype up to <b>80% experimental accuracy</b>
          <p className='text-gray-500 dark:text-gray-500'></p>
        </li>
        <li>
          Binary Relevance Multi-label classification to predict multiple phenotypes at a time
          <p className='text-gray-500 dark:text-gray-500'>different datasets for different phenotypes</p>
        </li>

      </ul>
    </section>
  )
}

export default DataCollectionPage;
