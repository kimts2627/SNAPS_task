import Options from '../components/Options';
import { useDispatch, useSelector } from 'react-redux';
import { changeOptions } from '../modules/options';

const OptionsContainer = () => {

  const dispatch = useDispatch();

  const selectedOptions = useSelector(state => state.options.selectedOptions);

  const changingOptions = (options) => {
    dispatch(changeOptions(options));
  }

  return (
    <Options selectedOptions={selectedOptions} changeOptions={changingOptions}/>
  );
}

export default OptionsContainer;
