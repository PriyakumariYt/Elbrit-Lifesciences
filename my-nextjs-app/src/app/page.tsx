import Image from "next/image";
import BenefitsSection from "./components/BenefitsSection";
import BetterIngredients from "./components/BetterIngredients";
import ImageGallery from "./components/ImageGallery";

export default function Home() {
  return (
    <>
      <img src="/image/image (1).png" alt="" />
      <div className="bg-[#EAFDEE] min-h-[120vh] flex  justify-center p-6">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-7xl font-extrabold text-blue-900 mb-20">
              Essential Vitamins
            </h1>
          </div>
          <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-1 space-y-6">
              <p className="text-gray-600 text-lg">Online Medical Supplies</p>

              <h2 className="text-3xl font-bold text-gray-800">
                Get Your Vitamins & Minerals
              </h2>
              <button className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition">
                Explore Now
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute w-[300px] h-[300px] bg-yellow-300 rounded-md custom-border"></div>

              <div className="relative z-10 -mt-24">
                <Image
                  src="/image/medicine.png"
                  alt="Product"
                  width={400}
                  height={400}
                  className="drop-shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12  rounded-full flex items-center justify-center">
                  <Image
                    src="/image/1.png"
                    alt="Vitamins"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Vitamins</h3>
                  <p className="text-sm text-gray-600">
                    Increased vitamins and minerals in your diet.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/image/2.png"
                    alt="Weight Loss"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Weight Loss</h3>
                  <p className="text-sm text-gray-600">
                    Find scientifically proven solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/image/3.png"
                    alt="Functional Foods"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Functional Foods</h3>
                  <p className="text-sm text-gray-600">
                    From protein powders to baby formula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BenefitsSection />
      <BetterIngredients />
      <ImageGallery />
    </>
  );
}
