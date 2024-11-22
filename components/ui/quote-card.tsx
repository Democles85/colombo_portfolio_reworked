import { QuoteIcon } from './quote-icon';

interface StyledQuoteProps {
  quote: string;
}

export const StyledQuote: React.FC<StyledQuoteProps> = ({ quote }) => {
  return (
    <div className="relative p-2 md:p-8">
      <QuoteIcon className="absolute top-0 left-0 w-8 h-8 text-gray-300 transform -translate-y-2" />

      <p
        className="relative z-10 text-justify italic px-8"
        dangerouslySetInnerHTML={{ __html: quote }}
      />

      <QuoteIcon className="absolute bottom-0 right-0 w-8 h-8 text-gray-300 transform rotate-180 translate-y-2" />
    </div>
  );
};
