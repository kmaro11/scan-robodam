"use client";

import { useI18n } from "@/contexts/I18nContext";
import Link from "next/link";

export const Footer = ({ lang }: { lang: "en" | "lt" }) => {
  const { t } = useI18n();
  return (
    <footer className="bg-blue pb-[60px] pt-16">
      <div className="custom-container flex flex-col xl:flex-row gap-x-10 justify-between lg:items-end gap-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-14">
          <a
            href={`/${lang}/how-it-works`}
            className="text-white text-xl lg:text-[30px] lg:leading-[40px]"
          >
            {t("navigation.howItWorks")}
          </a>
          <a
            href={`/${lang}/contacts`}
            className="text-white text-xl lg:text-[30px] lg:leading-[40px]"
          >
            {t("navigation.contacts")}
          </a>
          <div>
            <a
              href="mailto:admin@robodam.com"
              className="inline-block text-white text-xl lg:text-[30px] lg:leading-[40px] mb-2"
            >
              admin@robodam.com
            </a>
            <p className="text-white text-xl lg:text-[30px] lg:leading-[40px]">
              UAB Robodam, Vytauto pr. 27, LT- 44352, Kaunas, Lietuva
            </p>
          </div>
          <a
            href={`/${lang}/prices`}
            className="text-white text-xl lg:text-[30px] lg:leading-[40px]"
          >
            {t("navigation.price")}
          </a>
          <a
            href={`/${lang}/`}
            className="text-white text-xl lg:text-[30px] lg:leading-[40px]"
          >
            {t("navigation.privacyPolicy")}
          </a>
          <div className="flex items-center gap-x-3 md:gap-x-9">
            <p className="text-white text-xl lg:text-[30px] lg:leading-[40px]">
              {t("navigation.followUs")}:
            </p>
            <a href="" className="w-6 h-6 md:w-12 md:h-12">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.5833 0H10.4167C4.66458 0 0 4.66458 0 10.4167V39.5833C0 45.3354 4.66458 50 10.4167 50H39.5833C45.3375 50 50 45.3354 50 39.5833V10.4167C50 4.66458 45.3375 0 39.5833 0ZM16.6667 39.5833H10.4167V16.6667H16.6667V39.5833ZM13.5417 14.025C11.5292 14.025 9.89583 12.3792 9.89583 10.35C9.89583 8.32083 11.5292 6.675 13.5417 6.675C15.5542 6.675 17.1875 8.32083 17.1875 10.35C17.1875 12.3792 15.5562 14.025 13.5417 14.025ZM41.6667 39.5833H35.4167V27.9083C35.4167 20.8917 27.0833 21.4229 27.0833 27.9083V39.5833H20.8333V16.6667H27.0833V20.3438C29.9917 14.9563 41.6667 14.5583 41.6667 25.5021V39.5833Z"
                  fill="#F5F5F5"
                  fill-opacity="0.7"
                />
              </svg>
            </a>
            <a href="" className="w-6 h-6 md:w-12 md:h-12">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.2396 0H2.76042C1.23542 0 0 1.23542 0 2.76042V47.2417C0 48.7646 1.23542 50 2.76042 50H26.7083V30.6375H20.1917V23.0917H26.7083V17.5271C26.7083 11.0687 30.6521 7.55208 36.4146 7.55208C39.175 7.55208 41.5458 7.75833 42.2375 7.85V14.6L38.2417 14.6021C35.1083 14.6021 34.5021 16.0917 34.5021 18.275V23.0938H41.975L41.0021 30.6396H34.5021V50H47.2437C48.7646 50 50 48.7646 50 47.2396V2.76042C50 1.23542 48.7646 0 47.2396 0Z"
                  fill="#F5F5F5"
                  fill-opacity="0.7"
                />
              </svg>
            </a>
          </div>
        </div>
        <Link href="/" className="w-[160px] md:w-[260px] flex flex-shrink-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 261 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="41.1797"
              width="13.1552"
              height="13.1552"
              rx="0.0339448"
              fill="white"
            />
            <rect
              y="27.4521"
              width="13.1552"
              height="13.1552"
              rx="0.0339448"
              fill="white"
            />
            <rect
              y="13.7295"
              width="13.1552"
              height="13.1552"
              rx="0.0339448"
              fill="white"
            />
            <rect
              x="13.7285"
              width="13.1552"
              height="13.1552"
              rx="0.0339448"
              fill="white"
            />
            <rect
              x="27.4541"
              width="13.1552"
              height="13.1552"
              rx="0.0339448"
              fill="white"
            />
            <rect
              x="41.1816"
              y="13.7295"
              width="13.1552"
              height="13.1552"
              rx="0.0339448"
              fill="white"
            />
            <rect
              x="27.4541"
              y="27.4521"
              width="13.1552"
              height="13.1552"
              rx="0.0339448"
              fill="white"
            />
            <rect
              x="41.1816"
              y="41.1797"
              width="13.1552"
              height="13.1552"
              rx="0.0339448"
              fill="white"
            />
            <path
              d="M229.131 42.0193V19.8507H233.043V23.502C234.043 21.0678 236.086 19.3291 239.215 19.3291C242.171 19.3291 244.605 20.7635 245.562 23.8932C246.475 21.2852 248.778 19.3291 252.082 19.3291C255.951 19.3291 258.95 21.546 258.95 27.2403V42.0193H255.038V27.6749C255.038 24.4583 253.864 22.4588 250.995 22.4588C248.257 22.4588 245.996 25.1973 245.996 29.0659V42.0193H242.084V27.6749C242.084 24.4583 240.911 22.4588 238.042 22.4588C235.303 22.4588 233.043 25.1973 233.043 29.0659V42.0193H229.131Z"
              fill="white"
            />
            <path
              d="M211.013 42.541C208.839 42.541 206.97 41.8455 205.709 40.5414C204.579 39.3678 203.884 37.6726 203.884 35.9338C203.884 32.4564 206.101 29.6745 210.491 29.2832L217.707 28.6312V26.849C217.707 23.4151 215.837 22.4588 213.099 22.4588C210.361 22.4588 208.535 23.6324 208.535 26.4578H204.623C204.623 22.2849 208.404 19.3291 213.142 19.3291C217.924 19.3291 221.532 21.6764 221.532 26.8925V38.6723H224.835V42.0193H218.228L218.141 37.9334H217.967C216.75 41.063 214.316 42.541 211.013 42.541ZM212.012 39.4113C215.533 39.4113 217.707 36.6293 217.707 32.6303V31.6305L209.839 32.3695C208.231 32.4999 208.013 33.2388 208.013 34.4994V36.4555C208.013 38.4984 209.535 39.4113 212.012 39.4113Z"
              fill="white"
            />
            <path
              d="M198.028 42.0191H194.116V38.4113C192.725 41.0628 190.421 42.5407 187.117 42.5407C181.119 42.5407 178.25 37.368 178.25 30.9348C178.25 24.5015 181.075 19.3289 187.031 19.3289C190.334 19.3289 192.725 20.8068 194.116 23.4583V12.4609H198.028V42.0191ZM194.116 32.8039V29.0657C194.116 25.2405 191.942 22.4586 188.03 22.4586C184.814 22.4586 182.379 24.5015 182.379 27.5008V34.3688C182.379 37.368 184.814 39.411 188.03 39.411C191.942 39.411 194.116 36.6291 194.116 32.8039Z"
              fill="white"
            />
            <path
              d="M163.413 42.541C156.676 42.541 153.459 37.716 153.459 30.935C153.459 24.154 156.676 19.3291 163.413 19.3291C170.151 19.3291 173.367 24.154 173.367 30.935C173.367 37.716 170.151 42.541 163.413 42.541ZM169.238 34.369V27.5011C169.238 24.4583 166.543 22.4588 163.413 22.4588C160.283 22.4588 157.588 24.4583 157.588 27.5011V34.369C157.588 37.4117 160.283 39.4113 163.413 39.4113C166.543 39.4113 169.238 37.4117 169.238 34.369Z"
              fill="white"
            />
            <path
              d="M128.824 42.0191V12.4609H132.736V23.4583C134.127 20.8068 136.475 19.3289 139.822 19.3289C145.777 19.3289 148.602 24.5015 148.602 30.9348C148.602 37.368 145.777 42.5407 139.822 42.5407C136.475 42.5407 134.127 41.0628 132.736 38.4113V42.0191H128.824ZM132.736 32.8039C132.736 36.6291 134.91 39.411 138.822 39.411C142.082 39.411 144.473 37.368 144.473 34.3688V27.5008C144.473 24.5015 142.082 22.4586 138.822 22.4586C134.91 22.4586 132.736 25.2405 132.736 29.0657V32.8039Z"
              fill="white"
            />
            <path
              d="M112.815 42.541C106.077 42.541 102.86 37.716 102.86 30.935C102.86 24.154 106.077 19.3291 112.815 19.3291C119.552 19.3291 122.769 24.154 122.769 30.935C122.769 37.716 119.552 42.541 112.815 42.541ZM118.639 34.369V27.5011C118.639 24.4583 115.944 22.4588 112.815 22.4588C109.685 22.4588 106.99 24.4583 106.99 27.5011V34.369C106.99 37.4117 109.685 39.4113 112.815 39.4113C115.944 39.4113 118.639 37.4117 118.639 34.369Z"
              fill="white"
            />
            <path
              d="M86.8924 29.5438H82.024V42.0191H77.8945V12.4609H89.0223C92.0651 12.4609 94.4993 13.1564 96.0641 14.5909C97.629 16.0253 98.281 18.1987 98.281 20.9372C98.281 23.5452 97.6724 25.6752 96.151 27.1966C95.0209 28.3267 93.543 29.1526 91.2392 29.4134L98.5418 42.0191H93.8038L86.8924 29.5438ZM82.024 26.0229H90.5437C92.7171 26.0229 93.9342 24.4581 93.9342 22.6324V19.3723C93.9342 17.3728 92.6301 16.1557 90.5437 16.1557H82.024V26.0229Z"
              fill="white"
            />
            <path
              d="M257.532 66.6522V57.0893C257.532 54.9449 256.836 53.6118 254.605 53.6118C252.46 53.6118 250.924 55.4375 250.924 58.0166V66.6522H248.316V51.8731H250.924V54.3073C251.736 52.5976 253.098 51.5254 255.329 51.5254C258.198 51.5254 260.14 53.0323 260.14 56.7995V66.6522H257.532Z"
              fill="white"
            />
            <path
              d="M236.238 67C234.789 67 233.543 66.5363 232.702 65.6669C231.949 64.8845 231.485 63.7544 231.485 62.5952C231.485 60.2769 232.963 58.4223 235.89 58.1615L240.701 57.7268V56.5387C240.701 54.2494 239.454 53.6118 237.629 53.6118C235.803 53.6118 234.586 54.3943 234.586 56.2779H231.978C231.978 53.4959 234.499 51.5254 237.658 51.5254C240.845 51.5254 243.251 53.0902 243.251 56.5677V64.4209H245.453V66.6522H241.048L240.99 63.9282H240.874C240.063 66.0147 238.44 67 236.238 67ZM236.904 64.9135C239.252 64.9135 240.701 63.0589 240.701 60.3928V59.7263L235.455 60.219C234.383 60.3059 234.238 60.7985 234.238 61.6389V62.943C234.238 64.305 235.253 64.9135 236.904 64.9135Z"
              fill="white"
            />
            <path
              d="M216.207 59.3786C216.207 54.6261 218.525 51.5254 222.553 51.5254C225.683 51.5254 228.146 53.1482 228.436 56.7126H225.828C225.625 54.3073 224.147 53.6118 222.408 53.6118C220.67 53.6118 218.96 54.8 218.96 57.0893V61.4361C218.96 63.5515 220.525 64.9135 222.437 64.9135C224.35 64.9135 225.77 63.8993 225.944 61.6969H228.552C228.146 65.3482 225.509 67 222.495 67C218.207 67 216.207 63.7833 216.207 59.3786Z"
              fill="white"
            />
            <path
              d="M207.342 67C204.01 67 201.402 65.2902 201.344 61.9867H203.952C204.01 63.9572 205.575 64.9135 207.371 64.9135C209.11 64.9135 210.588 64.1021 210.588 62.6532C210.588 61.465 209.921 60.7696 207.951 60.3928L205.517 59.9002C203.111 59.4076 201.72 58.0456 201.72 55.7273C201.72 53.38 203.923 51.5254 207.139 51.5254C209.921 51.5254 212.674 52.9453 212.732 56.2779H210.124C210.066 54.3363 208.733 53.6118 207.168 53.6118C205.546 53.6118 204.271 54.4812 204.271 55.6983C204.271 56.8575 204.908 57.466 206.357 57.7558L208.849 58.2774C211.776 58.886 213.196 60.2479 213.196 62.6242C213.196 65.0584 210.82 67 207.342 67Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
};
