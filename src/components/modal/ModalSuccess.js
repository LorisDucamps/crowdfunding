import Image from "next/image";
import Button from "@/components/button/Button";
import React from "react";

const ModalSuccess = ({onBackToHome}) => (
    <>
        <Image
            className="mx-auto w-16 h-16 sm:w-[90] sm:h-[90]"
            src="/assets/icons/check.svg"
            alt="Icon Check"
            width={90}
            height={90}
            priority
        />
      <h3 className="text-lg text-center font-bold my-6 sm:text-2xl sm:mt-12 sm:mb-4">Thank you for your support!</h3>
      <p className="text-sm text-sonic-silver mb-7 text-center sm:text-[16px]">
        Your pledge brings us closer to delivering Mastercraft Bamboo Monitor Riser to the world.
      </p>
        <Button
            onClick={onBackToHome}
            type="submit"
            className="text-sm mx-auto"
            variant="primary"
            size="medium"
            wording="Got it!"
        />
    </>
  );

  export default ModalSuccess
  