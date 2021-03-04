import '../style/App.css';
import SwiperContainer from '../containers/SwiperContainer';
import OptionsContainer from '../containers/OptionsContainer';

const App = () => {
  return (
    <div className="wrap">
      <SwiperContainer />
      <OptionsContainer />
    </div>
  );
}

export default App;
