import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import packageIcon from '../../assets/package.svg';

import { Packages, Box } from './styles';

type Package = {
  id: number;
  title: string;
  date: string;
};

type PackagesListProps = {
  content: Array<Package>;
};

export const PackagesList: React.FC<PackagesListProps> = ({ content }) => {
  return (
    <Packages>
      {content.map(delivery => (
        <Box key={delivery.id}>
          <div>
            <div>
              <img src={packageIcon} alt="Package Icon" />
              <h3>{delivery.title}</h3>
            </div>
            <span>{delivery.date}</span>
          </div>
          <Link to={`/deliveries/${delivery.id}`}>
            Detalhes
            <FiArrowRight size={20} />
          </Link>
        </Box>
      ))}
    </Packages>
  );
};
