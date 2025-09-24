// inside NavbarWithProducts.jsx (or .js)
import { useRouter } from "next/navigation";

export default function NavbarWithProducts() {
  const router = useRouter();

  const onProductsClick = (e) => {
    console.log("Navbar :products clicked")
    // keep normal navigation if needed:
    // router.push('/products') // optional

    // dispatch the event others can listen to
    window.dispatchEvent(
      new CustomEvent("nav:productsClicked", {
        detail: {
          promotionType: "By Category",
          title: "Pooja Essentials",
          description: "Pooja Essentials",
          productRow: "row1",
          startDate: "23-09-2025", // add this
          endDate: "30-09-2025",
          
        
          // you can include other fields later (category, branch, imageUrl...)
          showOnScreenProductRow: true,
          
        },
      }) 
    );
  };

  return (
    <nav>
      {/* ...other links */}
      <a href="#" onClick={(e) => { e.preventDefault(); onProductsClick(e); }}>
        Products
      </a>
      {/* ... */}
    </nav>
  );
}
