import Swiper from '../components/Swiper';
import { useDispatch, useSelector } from 'react-redux';
import { changePic } from '../modules/showcases';

const SwiperContainer = () => {

  const dispatch = useDispatch();

  const currentPic = useSelector(state => state.showcases.currentPic);

  const changingPic = (pic) => {
    dispatch(changePic(pic));
  }

  return (
    <Swiper currentPic={currentPic} changePic={changingPic}/>
  );
}

export default SwiperContainer;
