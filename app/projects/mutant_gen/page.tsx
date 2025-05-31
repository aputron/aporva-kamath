'use client'

import {
    InformationCircleIcon,
    ExclamationTriangleIcon,
    BeakerIcon,
    CheckCircleIcon,
    WrenchScrewdriverIcon,
    ComputerDesktopIcon,
    ArrowUpRightIcon
  } from '@heroicons/react/24/outline'
  import React from 'react';
  import CollapsibleCard from 'app/components/CollapsibleCard';
  import GeneticCircuitIcon from 'app/components/icons/GeneticCircuitIcon'
  import FacsGraphIcon from 'app/components/icons/FacsGraph'
  import NanoporeSeqIcon from 'app/components/icons/NanoporeSeq'
  import DataProcessingIcon from 'app/components/icons/DataProcessing';
  
  
  // text-gray-700 dark:text-gray-400
  
  export default function MutantGenerationPage() {
    return (
      <section>
        <h1 className="text-3xl font-semibold lowercase mb-4">
          Biofoundry-based Production and Multiplexed Identification of Mutants
        </h1>
        <p className="text-gray-600 dark:text-gray-300 lowercase mb-4">
          Automated mutant production and identification using a biofoundry and long-read sequencing.
        </p>
        <p className="flex items-center mt-5 font-semibold lowercase">
          <ExclamationTriangleIcon className="h-6 w-6 mr-2 mt-1" />
          quest objectives
        </p>
        <ul className="mt-2 list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400 lowercase">
          <li>
            Design <b>high-throughput</b> mutant generation and identification methods
          </li>
          <li>
            Develop an End-to-End Automated <b>Biofoundry workflow</b> for Directed Protein Evolution (DPE)
          </li>
          <li>
              Expand In Vitro <b>Continuous Protein Evolution</b> Capabilities
          </li>
        </ul>
        <p className="flex items-center mt-5 font-semibold lowercase">
        <WrenchScrewdriverIcon className="h-6 w-6 mr-2 mt-1" />
        Tools
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4 py-8 lowercase">
        <div className="p-6 border rounded-lg shadow border-gray-300 dark:border-gray-700">
          <h3 className="font-semibold mb-2">Genetic circuits</h3>
          <div className="flex justify-center">
            <GeneticCircuitIcon className="w-30 h-40 text-gray-700 dark:text-gray-300" />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Protein variants are encoded in a <b>genetic circuit</b> with sfGFP reporter for activity.
          </p>
        </div>
        <div className="p-6 border rounded-lg border-gray-300 dark:border-gray-700">
          <h3 className="font-semibold mb-2">FACS Sorting</h3>
          <div className="flex justify-center">
            <FacsGraphIcon className="w-30 h-40 text-gray-700 dark:text-gray-300" />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Mutant library cells are sorted into <b>high/low </b> bins based on fluorescence intensity to separate phenotypes.
          </p>
        </div>
        <div className="p-6 border rounded-lg border-gray-300 dark:border-gray-700">
          <h3 className="font-semibold mb-2">Long-read Sequencing</h3>
          <div className="flex justify-center">
            <NanoporeSeqIcon className="w-20 h-40 text-gray-700 dark:text-gray-300" />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Bulk <b>nanopore sequencing</b> recovers the full-length protein variant sequences.
          </p>
        </div>
        <div className="p-6 border rounded-lg border-gray-300 dark:border-gray-700">
          <h3 className="font-semibold mb-2">AI Model Training</h3>
          <div className="flex justify-center">
            <DataProcessingIcon className="w-20 h-40 text-gray-700 dark:text-gray-300" />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Protein-specific <b>CNN models</b> predict phenotype from sequence data.
          </p>
        </div>
      </div>
      <p className="flex items-center font-semibold lowercase">
        <CheckCircleIcon className="h-6 w-6 mr-2 mt-1" />
        Achievements Unlocked
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-5xl mx-auto px-4 py-2 lowercase">
        <p className='not-italic text-gray-500 dark:text-gray-500 text-xs'>
          target proteins: DmpR (transcription factor); MPH (Enzyme)</p>
        <div className="italic p-6 border rounded-3xl shadow text-xs text-gray-700 dark:text-gray-300">
          Large personalized protein genotype and phenotype datasets
        <p className='not-italic text-sm py-2'><b>100,000 unique protein sequences </b> with their corresponding high or low activity</p>
        </div>
        <div className="italic p-6 border rounded-3xl shadow text-xs text-gray-700 dark:text-gray-300">
          AI-powered Protein Predictions
        <p className='not-italic text-sm py-2'>Up to <b>80% experimental accuracy</b> from custom <b>CNN</b> models for each protein and target phenotype</p>
        </div>
        <div className="italic p-6 border rounded-3xl shadow text-xs text-gray-700 dark:text-gray-300">
          Target multiple phenotypes of a protein
        <p className='not-italic text-sm py-2'><b>Binary Relevance Multi-label classification</b> to predict multiple phenotypes at a time</p>
        </div>
        <div className="italic p-6 border rounded-3xl shadow text-xs text-gray-700 dark:text-gray-300">
          End-to-end scalability
        <p className='not-italic text-sm py-2'><b>high-throughput</b> discovery and functional screening.</p>
        </div>
      </div>
      <p className="flex items-center mt-5 font-semibold lowercase">
        <WrenchScrewdriverIcon className="h-6 w-6 mr-2 mt-1" />
        Skills leveled-up
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-4 py-8 lowercase">
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow">
          <p className="flex items-center font-semibold lowercase">
            <BeakerIcon className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
            Wet Lab:
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Gene Cloning</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Nanopore Sequencing</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">PCR</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Restriction Digests</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Mutagenesis</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">FACS</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Echo</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Victor</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Expression Analysis</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Western Blots</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Janus</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">OT-2</span>
          </div>
        </div>
        <div className="p-6 border rounded-lg shadow border-gray-300 dark:border-gray-700">
          <p className="flex items-center font-semibold lowercase">
            <ComputerDesktopIcon className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
            Dry Lab:</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Python</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Bash</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Tensorflow</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Docker</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Streamlit</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">samtools</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">bedtools</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">IGVtools</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">git</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">pymol</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Baysian optimization</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Snakemake</span>
          </div>
        </div>
      </div>
      <CollapsibleCard title='context' icon={<InformationCircleIcon className="h-6 w-6 mr-2" />}>
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
      <a
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href="https://aputron.github.io/dissertation/chapters/data_coll.html"
      >
        <ArrowUpRightIcon className="h-4 w-4" />
        <p className="lowercase text-sm ml-2 h-7 text-gray-600 dark:text-gray-400">Learn more</p>
      </a>
    </section>
  )
}

  
  // export default MutantGenerationPage;