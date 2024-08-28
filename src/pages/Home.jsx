import Card from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";


const Home = () => {

    return (
        <>      
            <Navbar />
            <section className="flex flex-col justify-center items-center mx-auto my-4 p-2 gap-4">
               
                <Card />
                <SearchBar />
                <Card />
                <Card />
                <Card />
               
            </section>    
        </>
    );
  };

  export {Home};