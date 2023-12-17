import { Puff } from 'react-loader-spinner';
import LoaderCss from './LoaderCss.module.css'

const Loader = () => {
  return (
    <div className={LoaderCss.loader}>
      <Puff color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;