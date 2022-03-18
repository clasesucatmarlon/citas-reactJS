import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='p-4 mt-12 border-t-4 border-gray-200 bg-red-500 md:w-full '>
            <div className='flex flex-col items-center ' >
                <h3>Diseño y desarrollo por {''}
                    <span className='italic'>Marlon García</span>
                </h3>
                <h3>Medellín 2022</h3>
                <div className="flex justify-between w-2/12 p-4 items-center">
                    <a 
                        href="https://clasesucatmarlon.github.io/portafolioMG/" 
                        className="hover:text-indigo-700"
                        target="_blank"
                        >
                        <FontAwesomeIcon className='px-4 text-2xl' icon={faLink} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/marlonagarciam/" 
                        className="hover:text-indigo-700"
                        target="_blank"
                        >
                        <FontAwesomeIcon className='px-4 text-2xl' icon={faLinkedinIn} />
                    </a>
                    <a 
                        href="https://github.com/clasesucatmarlon" 
                        className="hover:text-indigo-700"
                        target="_blank"
                    >
                        <FontAwesomeIcon className='px-4 text-2xl' icon={faGithubAlt} />
                    </a>
                    <a 
                        href="https://twitter.com/garciamarlon" 
                        className="hover:text-indigo-700"
                        target="_blank"
                    >
                        <FontAwesomeIcon className='px-4 text-2xl' icon={faTwitter} />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer