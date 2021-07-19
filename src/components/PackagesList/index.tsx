import { ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import packageIcon from '../../assets/package.svg';

import { Packages, Box } from './styles';

type Package = {
  title: string;
  date: string;
};

type PackagesListProps = {
  content: Array<Package>;
};

export function PackagesList({ content }: PackagesListProps): ReactElement {
  return (
    <Packages>
      {content.map(delivery => (
        <Box>
          <div>
            <div>
              <img src={packageIcon} alt="Package Icon" />
              <h3>{delivery.title}</h3>
            </div>
            <span>{delivery.date}</span>
          </div>
          <Link to="teste">
            Detalhes
            <FiArrowRight size={20} />
          </Link>
        </Box>
      ))}
    </Packages>
  );
}
