import Slider, { Settings } from 'react-slick';
import { BookQuote } from '../../types/book-quote.interface';
import { StyledQuote } from './quote-card';

import 'react-multi-carousel/lib/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface QuoteSliderProps {
  bookQuotes: BookQuote[];
}

const settings: Settings = {
  dots: false,
  accessibility: true,
  autoplay: true,
  fade: false,
  infinite: true,
  touchThreshold: 15,
  speed: 1000,
  autoplaySpeed: 15000,
  cssEase: 'ease-out',
  useTransform: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        fade: true,
        arrows: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        fade: true,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        fade: true,
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        fade: true,
        arrows: true,
      },
    },
  ],
};

export const QuoteSlider: React.FC<QuoteSliderProps> = ({ bookQuotes }) => {
  return (
    <div className="py-8 max-w-xs mx-auto md:max-w-md lg:max-w-lg">
      <Slider {...settings}>
        {bookQuotes.map(quote => (
          <div key={quote.id} className="px-0 md:px-4">
            <StyledQuote quote={quote.quote} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
