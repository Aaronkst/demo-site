type Props = {
  title: string;
  white?: boolean;
};

const PageHeader = ({ title, white = false }: Props): JSX.Element => {
  return (
    <span
      className={
        white
          ? "text-center block font-extrabold text-4xl lg:text-6xl text-white"
          : "text-center block font-extrabold text-4xl lg:text-6xl text-indigo-600"
      }
    >
      {title}
    </span>
  );
};

const SectionHeader = ({ title, white = false }: Props): JSX.Element => {
  return (
    <span
      className={
        white
          ? "text-center block font-extrabold text-3xl lg:text-5xl text-white"
          : "text-center block font-extrabold text-3xl lg:text-5xl text-indigo-600"
      }
    >
      {title}
    </span>
  );
};

const SubTitle = ({ title, white = false }: Props): JSX.Element => {
  return (
    <span
      className={
        white
          ? "block font-extrabold text-2xl text-white mb-4"
          : "block font-extrabold text-2xl text-indigo-600 mb-4"
      }
    >
      {title}
    </span>
  );
};

export { PageHeader, SectionHeader, SubTitle };
