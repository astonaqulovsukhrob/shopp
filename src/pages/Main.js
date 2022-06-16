import { lazy, Suspense } from "react";
const Customer = lazy(() => import("../AdminSite/page/Customer/Customer"));
const Dashboard = lazy(() => import("../AdminSite/page/Dashboard/Dashboard"));
const Kategorya = lazy(() => import("../AdminSite/page/Kategorya/Kategorya"));
const Partner = lazy(() => import("../AdminSite/page/Partner/Partner"));
const Product = lazy(() => import("../AdminSite/page/Product/Product"));
const Slider = lazy(() => import("../AdminSite/page/Slider/Slider"));
const AboutUs = lazy(() => import("../ClientSide/Components/aboutUs/About_us"));
const Communication = lazy(() =>
  import("../ClientSide/Components/Communication/Communication")
);
const Furniture = lazy(() =>
  import("../ClientSide/Components/Furniture/Furniture")
);
const MinaPage = lazy(() => import("../ClientSide/Components/Main/MinaPage"));
const PaymentPlan = lazy(() =>
  import("../ClientSide/Components/PaymentPlan/PaymentPlan")
);
const ProductsBasket = lazy(() =>
  import("../ClientSide/Components/ProductsBasket/ProductsBasket")
);
const TirePage = lazy(() =>
  import("../ClientSide/Components/TirePage/TirePage")
);
const Delivery = lazy(() => import("./Delivery/Delivery"));
const Business = lazy(() => import("./ForBusiness/Business"));
const Offices = lazy(() => import("./Offices/Offices"));

export const pages = [
  {
    path: "/",
    page: (
      <Suspense fallback="">
        <MinaPage />
      </Suspense>
    ),
  },
  {
    path: "/furniture",
    page: (
      <Suspense fallback="">
        <Furniture />,
      </Suspense>
    ),
  },
  {
    path: "/admin",
    page: (
      <Suspense fallback="">
        <Dashboard />,
      </Suspense>
    ),
  },
  {
    path: "/admin/category",
    page: (
      <Suspense fallback="">
        <Kategorya />,
      </Suspense>
    ),
  },
  {
    path: "/admin/product",
    page: (
      <Suspense fallback="">
        <Product />,
      </Suspense>
    ),
  },
  {
    path: "/admin/slider",
    page: (
      <Suspense fallback="">
        <Slider />,
      </Suspense>
    ),
  },
  {
    path: "/admin/partner",
    page: (
      <Suspense fallback="">
        <Partner />,
      </Suspense>
    ),
  },
  {
    path: "/admin/customer",
    page: (
      <Suspense fallback="">
        <Customer />,
      </Suspense>
    ),
  },
  {
    path: "/header_shop",
    page: (
      <Suspense fallback="">
        <TirePage />,
      </Suspense>
    ),
  },
  {
    path: "/products_basket",
    page: (
      <Suspense fallback="">
        <ProductsBasket />,
      </Suspense>
    ),
  },
  {
    path: "/about_us",
    page: (
      <Suspense fallback="">
        <AboutUs />,
      </Suspense>
    ),
  },
  {
    path: "/delivery",
    page: (
      <Suspense fallback="">
        <Delivery />,
      </Suspense>
    ),
  },
  {
    path: "/offices",
    page: (
      <Suspense fallback="">
        <Offices />,
      </Suspense>
    ),
  },
  {
    path: "/contact_us",
    page: (
      <Suspense fallback="">
        <Communication />,
      </Suspense>
    ),
  },
  {
    path: "/payment_plan",
    page: (
      <Suspense fallback="">
        <PaymentPlan />,
      </Suspense>
    ),
  },
  {
    path: "/business",
    page: (
      <Suspense fallback="">
        <Business />,
      </Suspense>
    ),
  },
];
