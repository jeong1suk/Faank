// src/app/(main)/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container mx-auto p-6 text-center">
      {" "}
      {/* min-h-screen, bg-gray-50 등은 layout.tsx에서 처리 */}
      <h1 className="text-4xl font-bold text-green-800 mt-16 mb-8">
        AgriTrade: 농축수산물 디지털 거래소
      </h1>
      <p className="text-xl text-gray-700 mb-12">
        신선한 농축수산물을 지금 바로 만나보세요!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            다양한 상품
          </h2>
          <p className="text-gray-600 mb-4">
            최고 품질의 농산물, 축산물, 수산물을 한 곳에서!
          </p>
          <Link
            href="/products"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            상품 보러가기
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            판매자 등록
          </h2>
          <p className="text-gray-600 mb-4">
            당신의 신선한 상품을 AgriTrade에서 판매해보세요!
          </p>
          <Link
            href="/sell"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            판매자 등록하기
          </Link>
        </div>
      </div>
      <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-12">
        <Image
          src="/images/main-banner.jpg"
          alt="AgriTrade Main Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <p className="text-white text-3xl font-bold">
            오늘의 특가 상품을 확인하세요!
          </p>
        </div>
      </div>
    </div>
  );
}
