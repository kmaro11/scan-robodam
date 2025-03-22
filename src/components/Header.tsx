"use client";

import { useI18n } from "@/contexts/I18nContext";
import LanguageSwitcher from "./LanguageSwithcer";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { useState } from "react";
import { Navigation } from "./Navigation";

export const Header = ({ lang }: { lang: "en" | "lt" }) => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white flex h-24 lg:h-[126px] justify-between lg:justify-center items-center h-20 w-full px-8 2xl:pl-[75px] 2xl:pr-[65px]">
      <a
        href={`/${lang}`}
        className="mr-6 max-w-[160px] xl:max-w-[260px] w-full"
      >
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
            fill="#0057FF"
          />
          <rect
            y="27.4521"
            width="13.1552"
            height="13.1552"
            rx="0.0339448"
            fill="#0057FF"
          />
          <rect
            y="13.7295"
            width="13.1552"
            height="13.1552"
            rx="0.0339448"
            fill="#0057FF"
          />
          <rect
            x="13.7285"
            width="13.1552"
            height="13.1552"
            rx="0.0339448"
            fill="#0057FF"
          />
          <rect
            x="27.4541"
            width="13.1552"
            height="13.1552"
            rx="0.0339448"
            fill="#0057FF"
          />
          <rect
            x="41.1816"
            y="13.7295"
            width="13.1552"
            height="13.1552"
            rx="0.0339448"
            fill="#0057FF"
          />
          <rect
            x="27.4541"
            y="27.4521"
            width="13.1552"
            height="13.1552"
            rx="0.0339448"
            fill="#0057FF"
          />
          <rect
            x="41.1816"
            y="41.1797"
            width="13.1552"
            height="13.1552"
            rx="0.0339448"
            fill="#0057FF"
          />
          <path
            d="M229.131 42.0193V19.8507H233.043V23.502C234.042 21.0678 236.085 19.3291 239.215 19.3291C242.171 19.3291 244.605 20.7635 245.561 23.8932C246.474 21.2852 248.778 19.3291 252.082 19.3291C255.95 19.3291 258.95 21.546 258.95 27.2403V42.0193H255.037V27.6749C255.037 24.4583 253.864 22.4588 250.995 22.4588C248.256 22.4588 245.996 25.1973 245.996 29.0659V42.0193H242.084V27.6749C242.084 24.4583 240.91 22.4588 238.042 22.4588C235.303 22.4588 233.043 25.1973 233.043 29.0659V42.0193H229.131Z"
            fill="black"
          />
          <path
            d="M211.012 42.541C208.839 42.541 206.97 41.8455 205.709 40.5414C204.579 39.3678 203.884 37.6726 203.884 35.9338C203.884 32.4564 206.1 29.6745 210.491 29.2832L217.706 28.6312V26.849C217.706 23.4151 215.837 22.4588 213.099 22.4588C210.36 22.4588 208.535 23.6324 208.535 26.4578H204.623C204.623 22.2849 208.404 19.3291 213.142 19.3291C217.924 19.3291 221.532 21.6764 221.532 26.8925V38.6723H224.835V42.0193H218.228L218.141 37.9334H217.967C216.75 41.063 214.316 42.541 211.012 42.541ZM212.012 39.4113C215.533 39.4113 217.706 36.6293 217.706 32.6303V31.6305L209.839 32.3695C208.23 32.4999 208.013 33.2388 208.013 34.4994V36.4555C208.013 38.4984 209.534 39.4113 212.012 39.4113Z"
            fill="black"
          />
          <path
            d="M198.028 42.0191H194.116V38.4113C192.725 41.0628 190.421 42.5407 187.117 42.5407C181.119 42.5407 178.25 37.368 178.25 30.9348C178.25 24.5015 181.075 19.3289 187.03 19.3289C190.334 19.3289 192.725 20.8068 194.116 23.4583V12.4609H198.028V42.0191ZM194.116 32.8039V29.0657C194.116 25.2405 191.942 22.4586 188.03 22.4586C184.813 22.4586 182.379 24.5015 182.379 27.5008V34.3688C182.379 37.368 184.813 39.411 188.03 39.411C191.942 39.411 194.116 36.6291 194.116 32.8039Z"
            fill="black"
          />
          <path
            d="M163.413 42.541C156.675 42.541 153.459 37.716 153.459 30.935C153.459 24.154 156.675 19.3291 163.413 19.3291C170.15 19.3291 173.367 24.154 173.367 30.935C173.367 37.716 170.15 42.541 163.413 42.541ZM169.238 34.369V27.5011C169.238 24.4583 166.543 22.4588 163.413 22.4588C160.283 22.4588 157.588 24.4583 157.588 27.5011V34.369C157.588 37.4117 160.283 39.4113 163.413 39.4113C166.543 39.4113 169.238 37.4117 169.238 34.369Z"
            fill="black"
          />
          <path
            d="M128.824 42.0191V12.4609H132.736V23.4583C134.127 20.8068 136.475 19.3289 139.822 19.3289C145.777 19.3289 148.602 24.5015 148.602 30.9348C148.602 37.368 145.777 42.5407 139.822 42.5407C136.475 42.5407 134.127 41.0628 132.736 38.4113V42.0191H128.824ZM132.736 32.8039C132.736 36.6291 134.91 39.411 138.822 39.411C142.082 39.411 144.473 37.368 144.473 34.3688V27.5008C144.473 24.5015 142.082 22.4586 138.822 22.4586C134.91 22.4586 132.736 25.2405 132.736 29.0657V32.8039Z"
            fill="black"
          />
          <path
            d="M112.814 42.541C106.077 42.541 102.86 37.716 102.86 30.935C102.86 24.154 106.077 19.3291 112.814 19.3291C119.552 19.3291 122.768 24.154 122.768 30.935C122.768 37.716 119.552 42.541 112.814 42.541ZM118.639 34.369V27.5011C118.639 24.4583 115.944 22.4588 112.814 22.4588C109.685 22.4588 106.99 24.4583 106.99 27.5011V34.369C106.99 37.4117 109.685 39.4113 112.814 39.4113C115.944 39.4113 118.639 37.4117 118.639 34.369Z"
            fill="black"
          />
          <path
            d="M86.8921 29.5438H82.0237V42.0191H77.8943V12.4609H89.0221C92.0648 12.4609 94.499 13.1564 96.0639 14.5909C97.6287 16.0253 98.2807 18.1987 98.2807 20.9372C98.2807 23.5452 97.6722 25.6752 96.1508 27.1966C95.0206 28.3267 93.5427 29.1526 91.2389 29.4134L98.5415 42.0191H93.8035L86.8921 29.5438ZM82.0237 26.0229H90.5434C92.7168 26.0229 93.9339 24.4581 93.9339 22.6324V19.3723C93.9339 17.3728 92.6299 16.1557 90.5434 16.1557H82.0237V26.0229Z"
            fill="black"
          />
          <path
            d="M257.532 66.6522V57.0893C257.532 54.9449 256.836 53.6118 254.605 53.6118C252.46 53.6118 250.924 55.4375 250.924 58.0166V66.6522H248.316V51.8731H250.924V54.3073C251.736 52.5976 253.098 51.5254 255.329 51.5254C258.198 51.5254 260.14 53.0323 260.14 56.7995V66.6522H257.532Z"
            fill="#0057FF"
          />
          <path
            d="M236.238 67C234.789 67 233.543 66.5363 232.702 65.6669C231.949 64.8845 231.485 63.7544 231.485 62.5952C231.485 60.2769 232.963 58.4223 235.89 58.1615L240.7 57.7268V56.5387C240.7 54.2494 239.454 53.6118 237.629 53.6118C235.803 53.6118 234.586 54.3943 234.586 56.2779H231.978C231.978 53.4959 234.499 51.5254 237.658 51.5254C240.845 51.5254 243.25 53.0902 243.25 56.5677V64.4209H245.453V66.6522H241.048L240.99 63.9282H240.874C240.063 66.0147 238.44 67 236.238 67ZM236.904 64.9135C239.251 64.9135 240.7 63.0589 240.7 60.3928V59.7263L235.455 60.219C234.383 60.3059 234.238 60.7985 234.238 61.6389V62.943C234.238 64.305 235.252 64.9135 236.904 64.9135Z"
            fill="#0057FF"
          />
          <path
            d="M216.207 59.3786C216.207 54.6261 218.525 51.5254 222.553 51.5254C225.683 51.5254 228.146 53.1482 228.436 56.7126H225.828C225.625 54.3073 224.147 53.6118 222.408 53.6118C220.669 53.6118 218.96 54.8 218.96 57.0893V61.4361C218.96 63.5515 220.525 64.9135 222.437 64.9135C224.35 64.9135 225.77 63.8993 225.944 61.6969H228.552C228.146 65.3482 225.509 67 222.495 67C218.206 67 216.207 63.7833 216.207 59.3786Z"
            fill="#0057FF"
          />
          <path
            d="M207.342 67C204.01 67 201.402 65.2902 201.344 61.9867H203.952C204.01 63.9572 205.575 64.9135 207.371 64.9135C209.11 64.9135 210.588 64.1021 210.588 62.6532C210.588 61.465 209.921 60.7696 207.951 60.3928L205.517 59.9002C203.111 59.4076 201.72 58.0456 201.72 55.7273C201.72 53.38 203.923 51.5254 207.139 51.5254C209.921 51.5254 212.674 52.9453 212.732 56.2779H210.124C210.066 54.3363 208.733 53.6118 207.168 53.6118C205.546 53.6118 204.271 54.4812 204.271 55.6983C204.271 56.8575 204.908 57.466 206.357 57.7558L208.849 58.2774C211.776 58.886 213.196 60.2479 213.196 62.6242C213.196 65.0584 210.82 67 207.342 67Z"
            fill="#0057FF"
          />
        </svg>
      </a>

      <div className="hidden lg:block mr-auto">
        <Navigation lang={lang} />
      </div>

      <div className="flex gap-8 2xl:gap-[50px] items-center">
        <LanguageSwitcher />
        <div className="flex lg:hidden relative w-[32px] h-[32px] items-center justify-center">
          <button
            aria-label="open menu"
            className={twMerge(
              "absolute opacity-100 transition-opacity duration-300 pointer-events-auto",
              isOpen && "opacity-0 pointer-events-none"
            )}
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
              />
            </svg>
          </button>
          <button
            aria-label="close menu"
            className={twMerge(
              "absolute opacity-0 transition-opacity duration-300 pointer-events-none",
              isOpen && "opacity-100 pointer-events-auto"
            )}
            onClick={() => setIsOpen(false)}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#0F0F0F"
              />
            </svg>
          </button>
        </div>
        <Button
          href={`/${lang}/login`}
          size="small"
          variant="borderless"
          className="hidden lg:flex"
        >
          {t("common.login")}
        </Button>
        <Button
          href={`/${lang}/register`}
          size="small"
          variant="primary"
          className="hidden lg:flex"
        >
          {t("common.register")}
        </Button>
      </div>
    </header>
  );
};
