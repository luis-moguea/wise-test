interface Props {
  classN: string;
}

const SvgManage = ({ classN }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classN}
    width={24}
    height={24}
    fill="#525252"
  >
    <path
      fillRule="evenodd"
      d="M4.286 11.144h6a.86.86 0 0 0 .857-.857v-6a.86.86 0 0 0-.857-.857h-6a.86.86 0 0 0-.857.857v6a.86.86 0 0 0 .857.857ZM9.429 9.43H5.143V5.144h4.286V9.43Zm4.285 1.714h6a.86.86 0 0 0 .858-.857v-6a.86.86 0 0 0-.857-.857h-6a.86.86 0 0 0-.858.857v6a.86.86 0 0 0 .857.857Zm5.143-1.714h-4.285V5.144h4.285V9.43Zm-8.571 11.142h-6a.86.86 0 0 1-.857-.857v-6a.86.86 0 0 1 .857-.858h6a.86.86 0 0 1 .857.858v6a.86.86 0 0 1-.857.857Zm-5.143-1.715h4.286v-4.285H5.143v4.285Zm8.572 1.715h6a.86.86 0 0 0 .857-.857v-6a.86.86 0 0 0-.857-.858h-6a.86.86 0 0 0-.858.858v6a.86.86 0 0 0 .858.857Zm5.142-1.715h-4.285v-4.285h4.285v4.285Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgManage;
