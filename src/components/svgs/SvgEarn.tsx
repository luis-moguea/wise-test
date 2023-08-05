interface Props {
  classN: string;
}

const SvgEarn = ({ classN }: Props) => (
  <svg
    className={classN}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#525252"
  >
    <path
      fillRule="evenodd"
      d="M9.417 7.714h1.726V6a1.714 1.714 0 1 0-1.726 1.714Zm3.44 0V6a1.713 1.713 0 1 1 1.726 1.714h-1.726Zm4.684 0A3.429 3.429 0 0 0 12 3.732a3.429 3.429 0 0 0-5.542 3.982H3.861A.861.861 0 0 0 3 8.576v3.848c0 .476.386.862.861.862h.425v7.281c0 .476.385.862.861.862h13.706a.861.861 0 0 0 .861-.862v-7.281h.425a.861.861 0 0 0 .861-.862V8.576a.86.86 0 0 0-.861-.862h-2.598ZM14.587 9.43h4.699v2.142H4.714V9.43h9.873ZM6 13.286h12v6.428h-5.143v-6.428h-1.714v6.428H6v-6.428Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEarn;
