import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DonationPaymentModal from "../components/DonationPaymentModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <Header />
      <main>
        <DonationPaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
