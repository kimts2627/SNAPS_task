import Options from '../components/Options';
import { useDispatch, useSelector } from 'react-redux';
import { changeOptions, changeEditMode } from '../modules/options';

const OptionsContainer = () => {

  const dispatch = useDispatch();

  const selectedOptions = useSelector(state => state.options.selectedOptions);
  const isNumberEditMode = useSelector(state => state.options.isNumberEditMode);

  const changingOptions = (options) => {
    dispatch(changeOptions(options));
  }

  const changingEditMode = () => {
    dispatch(changeEditMode());
  }

  return (
    <Options
      selectedOptions={selectedOptions}
      changeOptions={changingOptions}
      isNumberEditMode={isNumberEditMode}
      changeEditMode={changingEditMode}
    />
  );
}

export default OptionsContainer;
