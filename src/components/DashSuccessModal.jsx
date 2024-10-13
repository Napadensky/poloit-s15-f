import { CheckCircleIcon } from "@heroicons/react/24/solid";

export const DashSuccessModal =(props) =>{
    const {
        onClickMod,
        titleText,
        descripText,
    } = props;
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-[#60B635] bg-[#F0F9EB] p-8'>
            <CheckCircleIcon className='size-6 fill-[#60B635]' />
            <h2 className='mb-4 text-base font-semibold text-[#262A2C]'>
              {titleText}
            </h2>
            <p className='mb-4 mr-auto text-sm font-normal text-[#4B5358]'>
              {descripText}
            </p>
            <button
              onClick={onClickMod}
              className='ml-auto bg-transparent px-4 py-2 text-[#3A6F20] underline'
            >
              Continuar
            </button>
          </div>
        </div>
    );
};