import DealCountdown from "@/components/deal-countdown";
import IconBoxes from "@/components/icon-boxes";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import ViewAllProductsButton from "@/components/view-all-products-botton";
// import sampleData from "@/db/sample-data";
import {
  getFeaturedProducts,
  getLatestProducts,
} from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const feauredProducts = await getFeaturedProducts();
  return (
    <>
      {feauredProducts.length > 0 && <ProductCarousel data={feauredProducts} />}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProductsButton />
      <DealCountdown />
      <IconBoxes />
    </>
  );
};

export default Homepage;
