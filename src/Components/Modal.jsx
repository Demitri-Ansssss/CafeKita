function Modal({ isOpen, data, isClose }) {
  return (
    <dialog id="my_modal_3" className="modal" open={isOpen} close={isClose}>
      <div className="modal-box w-auto shadow-2xl bg-white items-center flex justify-center flex-col">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl text-black text-center">
          {data.title}
        </h3>
        <div className="flex justify-center">
          <img src={data.img} alt="" className="" />
        </div>
        <p className="py-4 text-black text-center">{data.deskripsi}</p>
      </div>
    </dialog>
  );
}
export default Modal;
