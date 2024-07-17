import React from "react";

const Footer2 = () => {
  return (
    <footer className="bg-lime-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Atklt Tera</h2>
            <p className="text-gray-700 w-80">
              Discover a world of exceptional tastes curated just for you. From
              farm-fresh produce to gourmet delicacies, our handpicked selection
              of premium ingredients elevates every meal.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Get to know us</h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>

                <li className="mb-2">
                  <a href="/our-value" className="hover:underline">
                    Our Value
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/help-centre" className="hover:underline">
                    Help Centre
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Consumers</h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="/payments" className="hover:underline">
                    Payments
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/shipping" className="hover:underline">
                    Shipping
                  </a>
                </li>

                <li className="mb-2">
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/shop-checkout" className="hover:underline">
                    Shop Checkout
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Best Selling Products
              </h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="/butter" className="hover:underline">
                    Vegetables
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/milk-drinks" className="hover:underline">
                    Fruits
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/breakfast-cereal" className="hover:underline">
                    Spices
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="/shopcart-help" className="hover:underline">
                    Shopcart Help
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/returns-order" className="hover:underline">
                    Returns Order
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/track-orders" className="hover:underline">
                    Track Orders
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/feedback" className="hover:underline">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
