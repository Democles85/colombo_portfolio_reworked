interface QuoteIconProps {
  className?: string;
}

export const QuoteIcon: React.FC<QuoteIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    width="32"
    height="32"
    className={className}
    fill="currentColor"
  >
    <g>
      <g id="right_x5F_quote">
        <g>
          <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
          <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
        </g>
      </g>
    </g>
  </svg>
);
