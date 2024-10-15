export const DashConfirmModal =(props) =>{
    const {
        onClickCanc,
        onClickConf,
        titleText,
        questionText,        
    } = props;
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='rounded-lg border-2 border-zinc-500 bg-[#F4F5F6] p-8'>
            <h2 className='mb-4 text-base font-semibold text-[#262A2C]'>
              {titleText}
            </h2>
            <p className='mb-4 text-sm font-normal text-[#4B5358]'>
              {questionText}
            </p>
            <div className='flex justify-end space-x-4'>
              <button
                onClick={onClickCanc}
                className='bg-transparent px-4 py-2 text-sm font-medium text-[#CD1D1D] underline'
              >
                Cancelar
              </button>
              <button
                onClick={onClickConf}
                className='bg-transparent px-4 py-2 text-sm font-medium text-[#60B635] underline'
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
    );
};