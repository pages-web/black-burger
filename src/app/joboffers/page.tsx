import Jobs from "./components/Jobapp";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function JobOffersPageWrapper() {
  return (
    <>
      <Header />
      <Jobs />
      <Footer />
    </>
  )
}