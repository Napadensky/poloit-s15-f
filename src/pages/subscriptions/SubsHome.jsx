import Card from '@/components/Card';
import { SearchBar } from '@/components/SearchBar';

const SubsHome = () => {
  return (
    <>
      <section className='mx-auto my-4 flex flex-col items-center justify-center gap-4 p-2'>
        <Card />
        <SearchBar />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export { SubsHome };
