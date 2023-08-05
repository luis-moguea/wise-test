interface Props {
  classN: string;
}

const SvgHome = ({ classN }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classN}
    width={24}
    height={24}
    fill="#525252"
  >
    <path d="M22.971 13.287 12.514 2.829a.828.828 0 0 0-1.2 0L.857 13.287l1.2 1.2L4.2 12.344v8.228a.86.86 0 0 0 .857.857h13.715a.86.86 0 0 0 .857-.857v-8.228l2.142 2.143 1.2-1.2Zm-5.057 6.428h-12V10.63l6-6 6 6v9.085Z" />
  </svg>
);
export default SvgHome;
