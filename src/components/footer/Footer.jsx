import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='p-4 mt-12 border-t-4 border-gray-200'>
            <div className='flex flex-col items-center' >
                <h3>Diseño y desarrollo por {''}
                    <span className='italic'>Marlon García</span>{''}
                    - Medellín 2022
                </h3>
                <div className="flex justify-between w-2/12 p-4 ">
                    <a href="" className="hover:text-indigo-700">
                        <FontAwesomeIcon className='px-4 text-2xl' icon={faLink} />
                    </a>
                    <a href="" className="hover:text-indigo-700">
                        <FontAwesomeIcon className='px-4 text-2xl' icon={faLinkedinIn} />
                    </a>
                    <a href="" className="hover:text-indigo-700">
                        <FontAwesomeIcon className='px-4 text-2xl' icon={faGithubAlt} />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer