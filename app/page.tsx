import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'


export default function Page() {
  return ( 
    <section>
      {/* Introduction */}
      <h1 className="max-w-[36rem] mb-8 text-4xl lowercase">
        I'm <b className='font-semibold'>Aporva</b>, a synthetic biologist at the intersection of experimental & computational biology. 
      </h1>
      <p className="mb-6 text-xl text-gray-500 dark:text-gray-400 lowercase">
        {`experienced in high-throughput assay development, long-read sequencing, and machine learning–based protein engineering.`}
      </p>

      {/* Experience */}
      <div className="my-8">
        <h3 className='text-xl font-semibold lowercase'>latest experience</h3>
      </div>
      <div className="flex items-center space-x-6 mb-8">
        <div className="aspect-square h-20 border border-gray-500 flex-shrink-0 rounded "></div>
        <div>
          <h4 className='mb-0 text-l lowercase'>korea research institute of bioscience and biotechnology + k-biofoundry</h4>
          <p className="mb-0 text-l lowercase font-semibold text-gray-500 dark:text-gray-400">Researcher (2020-2025)</p>
          <p className="mb-0 text-l lowercase text-gray-500 dark:text-gray-400">Developed computational tools and experimental methods to accelerate Synthetic Biology</p>
        </div>
      </div>

      {/* Experience Project Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/projects/data_collection">
          <a className="lowercase text-black block bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            target="_blank" rel="noopener noreferrer">
            <h3 className="text-l font-semibold mb-2">Data Collection for AI-based Protein Engineering</h3>
          </a>
        </Link>  
        <Link href="/projects/mutant_gen">
          <a className="lowercase text-black block bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            target="_blank" rel="noopener noreferrer">
            <h3 className="text-l font-semibold mb-2">Biofoundry-based Production and Multiplexed Identification of Mutants</h3>
          </a>
        </Link>
        <Link href="/projects/dsembler">
          <a className="lowercase text-black block bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            target="_blank" rel="noopener noreferrer">
            <h3 className="text-l font-semibold mb-2">Long-DNA Assembly Design with Dsembler</h3>
          </a>
        </Link>
      </div>

      {/* Education */}
      <div className="my-8">
          <h3 className='text-xl font-semibold lowercase'>Education</h3>
      </div>
      <div className="flex items-center space-x-6 mb-8">
        <div className="aspect-square h-20 border border-gray-500 flex-shrink-0 rounded "></div>
        <div>
          <h4 className='mb-0 text-l lowercase'>korea national university of science and technology</h4>
          <p className="mb-0 text-l lowercase font-semibold text-gray-500 dark:text-gray-400">integrated PhD (2020-2025)</p>
          <p className="mb-0 text-l lowercase text-gray-500 dark:text-gray-400">gpa: 4.31/4.5 | Computational Approaches to Biofoundry-based Protein Engineering and Synthetic Biology</p>
        </div>
      </div>
      <div className="flex items-center space-x-6 mb-8">
        <div className="aspect-square h-20 border border-gray-500 flex-shrink-0 rounded "></div>
        <div>
          <h4 className='mb-0 text-l lowercase'>University of Glasgow</h4>
          <p className="mb-0 text-l lowercase font-semibold text-gray-500 dark:text-gray-400">BSc(hons) in Genetics (2016-2020)</p>
          <p className="mb-0 text-l lowercase text-gray-500 dark:text-gray-400">First Class honours</p>
        </div>
      </div>
    </section>
  )
}
