import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import packageIcon from '../../assets/package.svg';

import Progress from '../ProgressBar/index.js';

import { Packages, Box } from './styles';

type Package = {
  id: number;
  title: string;
  date: string;
  status?: string;
};

type PackagesListProps = {
  content: Array<Package>;
};

export const PackagesList: React.FC<PackagesListProps> = ({ content }) => {
  return (
    <Packages>
      {content.map(delivery => (
        <Box key={delivery.id}>
          <section>
            <div>
              <img src={packageIcon} alt="Package Icon" />
              <h3>{delivery.title}</h3>
            </div>
            <span>{delivery.date}</span>
          </section>
          <Progress percent={delivery.status} />
          <Link to={`/deliveries/${delivery.id}`}>
            Detalhes
            <FiArrowRight size={20} />
          </Link>
        </Box>
      ))}
    </Packages>
  );
};
