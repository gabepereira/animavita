import Header from 'components/UI/Header';

// <Entry> component
const Entry: React.FC = ({ children }) => {
  return (
    <main>
      <Header />

      <>{children}</>
    </main>
  );
};

export default Entry;
