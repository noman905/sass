import { FaCheck } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { memo } from "react";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Price = () => {
  return (
    <section
      className="pt-10 p-2 flex flex-col items-center justify-center space-y-5 rounded-b-4xl md:p-9 lg:p-12 bg-white"
      aria-labelledby="pricing-heading"
    >
      <div className="container flex flex-col items-center justify-center space-y-6">
        {/* SEO-Optimized Heading */}
        <h1 id="pricing-heading " className="heading text-4xl font-bold text-black">
          Pricing Plans
        </h1>

        <p
          className="text-[18px] text-center px-1 text-[#010925] md:px-32 lg:px-86"
          aria-label="Pricing description"
        >
          Boost your productivity with simple, flexible plans designed to help you achieve more.
        </p>

        <div>
          <div className="flex flex-col lg:flex-row gap-16 lg:flex-end">
            {pricingTiers.map(
              ({ title, monthlyPrice, buttonText, features, popular, inverse }) => (
                <div
                  key={title}
                  className={twMerge(
                    "flex flex-col p-6 m-auto rounded-3xl border-black border-2 space-y-4 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg",
                    inverse && "bg-black text-white"
                  )}
                  tabIndex="0"
                  aria-label={`${title} Plan`}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold">{title}</h2>
                    {popular && (
                      <span
                        className={twMerge(
                          "border border-black p-2 rounded-xl bg-black text-white",
                          inverse && "border-white border-2"
                        )}
                        aria-live="polite"
                      >
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <p className="text-xl font-medium">
                    <span className="font-bold text-5xl">${monthlyPrice}</span>/month
                  </p>

                  {/* Button */}
                  <button
                    className={twMerge(
                      "bg-black text-white rounded-2xl border text-center border-black w-[80%] h-12 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500",
                      inverse && "border-white border-2 bg-white text-black"
                    )}
                    aria-label={`Sign up for ${title} plan`}
                  >
                    {buttonText}
                  </button>

                  {/* Features */}
                  <ul className="flex flex-col space-y-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex space-x-2 items-center">
                        <FaCheck aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Price);
