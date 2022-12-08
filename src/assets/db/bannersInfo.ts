import banner1 from '../images/banner/b17.jpg';
import banner2 from '../images/banner/b10.jpg';
import banner3 from '../images/banner/b7.jpg';
import banner4 from '../images/banner/b4.jpg';
import banner5 from '../images/banner/b18.jpg';
import { TextBannerProps } from '../../components/Home/TextBanner';
import { AdvertBannerProps } from '../../components/Home/BannerAdvert';

export const advertBanners: AdvertBannerProps[] = [
  {
    title: 'buy 1 get 1 free',
    subtitle: 'crazy deals',
    text: 'The best classic dress is on sale at cara',
    image: banner1,
    btnTitle: 'Learn more',
  },
  {
    title: 'upcoming season',
    subtitle: 'spring/summer',
    text: 'The best classic dress is on sale at cara',
    image: banner2,
    btnTitle: 'Collection',
  },
];

export const textBanners: TextBannerProps[] = [
  {
    title: 'season sale',
    subtitle: 'winter collection - 50% Off',
    image: banner3,
  },
  {
    title: 'new footwear collection',
    subtitle: 'Spring/Summer 2022',
    image: banner4,
  },
  {
    title: 't-shirts',
    subtitle: 'new trendy party',
    image: banner5,
  },
];
